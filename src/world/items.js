import * as THREE from 'three';
import { GeoBuilder } from './geo.js';
import { MAT } from './materials.js';
import { heightAt, slopeAt, forestDensity, autumnMask, swampMask, enchantedMask, roadDist } from './terrain.js';
import { SITES, siteById } from './sites.js';
import { glowSprite, labelSprite } from './fx.js';
import { state, save, addScore } from '../state.js';
import { sfx } from '../audio.js';
import { mulberry32, hash2, pick, randInt } from '../util.js';

const RESPAWN_MS = 15 * 60 * 1000;

function mk(b, cast = true) {
  return b.build({ cast, receive: true });
}

// ----------------------------------------------------------------
export const INGREDIENTS = {
  herb: { name: 'עשב נוצץ', icon: '🌿', color: '#6dff8a' },
  mushroom: { name: 'פטרייה זוהרת', icon: '🍄', color: '#7fe3ff' },
  crystal: { name: 'גביש אור', icon: '💎', color: '#c79bff' },
  flower: { name: 'פרח אש', icon: '🌺', color: '#ff9a3a' },
};

function collectGeo(type) {
  const b = new GeoBuilder();
  if (type === 'herb') {
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * 6.28;
      b.cone('glow', 0.12, 0.7, { x: Math.cos(a) * 0.14, z: Math.sin(a) * 0.14, y: 0.35, rz: Math.cos(a) * 0.3, rx: -Math.sin(a) * 0.3, color: '#7bff8a' }, 4);
    }
    b.sphere('glow', 0.12, { y: 0.78, color: '#e6ffb0' }, 6, 4);
  } else if (type === 'mushroom') {
    b.cyl('glow', 0.07, 0.1, 0.4, { y: 0.2, color: '#e9f6ff' }, 6);
    b.sphere('glow', 0.3, { y: 0.45, sy: 0.6, color: '#59d8ff' }, 8, 6);
    b.sphere('glow', 0.09, { x: 0.12, y: 0.62, color: '#ffffff' }, 5, 4);
  } else if (type === 'crystal') {
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * 6.28 + 0.4;
      b.cone('glow', 0.14, 0.9 + (i % 2) * 0.35, { x: Math.cos(a) * 0.14, z: Math.sin(a) * 0.14, y: 0.5, rz: Math.cos(a) * 0.25, rx: -Math.sin(a) * 0.25, color: i % 2 ? '#b57bff' : '#e0c0ff' }, 5);
    }
  } else {
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * 6.28;
      b.sphere('glow', 0.13, { x: Math.cos(a) * 0.17, z: Math.sin(a) * 0.17, y: 0.55, sy: 0.6, color: '#ff7a24' }, 5, 4);
    }
    b.sphere('glow', 0.12, { y: 0.56, color: '#ffe05a' }, 5, 4);
    b.cyl('glow', 0.02, 0.03, 0.5, { y: 0.25, color: '#9aff8a' }, 4);
  }
  return b;
}

export class Collectibles {
  constructor(world) {
    this.world = world;
    this.group = new THREE.Group();
    world.scene.add(this.group);
    this.items = [];
    this.meshes = {};
    const rng = mulberry32(8080);
    const types = ['herb', 'mushroom', 'crystal', 'flower'];
    const want = { herb: 80, mushroom: 80, crystal: 55, flower: 60 };
    for (const type of types) {
      let n = 0, tries = 0;
      while (n < want[type] && tries++ < 30000) {
        const a = rng() * 6.28, r = Math.sqrt(rng()) * 2000;
        const x = Math.cos(a) * r, z = Math.sin(a) * r;
        const h = heightAt(x, z);
        if (h < 2.5) continue;
        if (SITES.some((s) => Math.hypot(x - s.x, z - s.z) < s.r * 0.8)) continue;
        if (slopeAt(x, z, h) > 0.8) continue;
        if (roadDist(x, z) < 3) continue;
        const fd = forestDensity(x, z);
        const ok =
          type === 'herb' ? fd < 0.45 && h < 70
          : type === 'mushroom' ? fd > 0.4 || swampMask(x, z) > 0.3 || enchantedMask(x, z) > 0.3
          : type === 'crystal' ? h > 70
          : autumnMask(x, z) > 0.15 || (h > 25 && h < 110 && fd < 0.4);
        if (!ok) continue;
        this.items.push({ id: `${type}${n}`, type, x, y: h, z, sc: 0.9 + rng() * 0.5, phase: rng() * 10, hidden: false });
        n++;
      }
    }
    // כלי ציור
    const dummy = new THREE.Object3D();
    for (const type of types) {
      const list = this.items.filter((i) => i.type === type);
      const g = mk(collectGeo(type), false).children[0];
      const m = new THREE.InstancedMesh(g.geometry, g.material, list.length);
      m.frustumCulled = false;
      list.forEach((it, k) => {
        it.k = k;
        dummy.position.set(it.x, it.y, it.z);
        dummy.rotation.set(0, it.phase, 0);
        dummy.scale.setScalar(it.sc * 1.6);
        dummy.updateMatrix();
        m.setMatrixAt(k, dummy.matrix);
      });
      m.instanceMatrix.needsUpdate = true;
      this.group.add(m);
      this.meshes[type] = m;
    }
    this.dummy = dummy;
    this.grid = new Map();
    for (const it of this.items) {
      const key = Math.floor(it.x / 64) + ',' + Math.floor(it.z / 64);
      (this.grid.get(key) || this.grid.set(key, []).get(key)).push(it);
    }
    this.applyFound();
    this.glow = glowSprite('#ffffff', 1.5, 0.7);
  }

  applyFound() {
    const now = Date.now();
    for (const it of this.items) {
      const ts = state.found[it.id];
      const gone = ts && now - ts < RESPAWN_MS;
      this.setHidden(it, !!gone);
    }
  }

  setHidden(it, hide) {
    it.hidden = hide;
    const m = this.meshes[it.type];
    this.dummy.position.set(it.x, it.y, it.z);
    this.dummy.rotation.set(0, it.phase, 0);
    this.dummy.scale.setScalar(hide ? 0.0001 : it.sc * 1.6);
    this.dummy.updateMatrix();
    m.setMatrixAt(it.k, this.dummy.matrix);
    m.instanceMatrix.needsUpdate = true;
  }

  update(dt, t, pos, hooks) {
    const cx = Math.floor(pos.x / 64), cz = Math.floor(pos.z / 64);
    for (let i = cx - 1; i <= cx + 1; i++) for (let j = cz - 1; j <= cz + 1; j++) {
      const a = this.grid.get(i + ',' + j);
      if (!a) continue;
      for (const it of a) {
        if (it.hidden) {
          if (state.found[it.id] && Date.now() - state.found[it.id] > RESPAWN_MS) this.setHidden(it, false);
          continue;
        }
        const dx = it.x - pos.x, dz = it.z - pos.z;
        const d2 = dx * dx + dz * dz;
        if (d2 < 2.4 * 2.4 && Math.abs(it.y - pos.y) < 3.5) {
          state.found[it.id] = Date.now();
          this.setHidden(it, true);
          state.ingredients[it.type]++;
          save();
          sfx('collect');
          hooks.onCollect?.(it);
          this.world.fx.burst(it.x, it.y + 0.6, it.z, INGREDIENTS[it.type].color, 22, 3, 0.8, 1.0, { gravity: 2 });
        } else if (d2 < 30 * 30 && Math.random() < dt * 0.5) {
          this.world.fx.emit(it.x + (Math.random() - 0.5), it.y + 0.5, it.z + (Math.random() - 0.5), 0, 1.2, 0, INGREDIENTS[it.type].color, 0.5, 1.5, { end: 0.05 });
        }
      }
    }
  }
}

// ----------------------------------------------------------------
// חפצים שאפשר להזיז בכישוף
const MOV_SPECS = {
  crate: () => {
    const b = new GeoBuilder();
    b.box('wood', 1.1, 1.1, 1.1, { y: 0.55, color: '#9a7040' });
    for (const s of [-1, 1]) b.box('wood', 1.14, 0.1, 1.14, { y: 0.55 + s * 0.5, color: '#5b3f26' });
    return b;
  },
  barrel: () => {
    const b = new GeoBuilder();
    b.cyl('wood', 0.5, 0.5, 1.1, { y: 0.55, color: '#8a5a30' }, 12);
    for (const y of [0.2, 0.9]) b.cyl('metal', 0.52, 0.52, 0.08, { y, color: '#3a3a44' }, 12);
    return b;
  },
  pumpkin: () => {
    const b = new GeoBuilder();
    b.sphere('flat', 0.55, { y: 0.45, sy: 0.8, color: '#ff8a1a' }, 12, 8);
    b.cyl('flat', 0.06, 0.09, 0.25, { y: 0.95, color: '#4a7a2a' }, 5);
    return b;
  },
};

export class Movables {
  constructor(world) {
    this.world = world;
    this.group = new THREE.Group();
    world.scene.add(this.group);
    this.list = [];
    const rng = mulberry32(31337);
    const scatter = (siteId, n, rad, kinds = ['crate', 'barrel', 'pumpkin']) => {
      const s = siteById(siteId);
      for (let i = 0; i < n; i++) {
        const a = rng() * 6.28, r = 8 + rng() * rad;
        this.add(pick(kinds), s.x + Math.cos(a) * r, s.z + Math.sin(a) * r);
      }
    };
    scatter('spawn', 16, 50);
    scatter('castle', 10, 55, ['crate', 'barrel']);
    scatter('autumn', 12, 60, ['pumpkin', 'pumpkin', 'crate']);
    scatter('village3', 8, 40);
    scatter('z6', 8, 50, ['crate', 'barrel']);
    scatter('pitch', 6, 40, ['crate']);
    scatter('port', 8, 35, ['barrel', 'crate']);
    scatter('z1', 5, 24);
    scatter('z3', 6, 36, ['pumpkin']);
  }

  add(kind, x, z, y) {
    const spec = this.cache ||= {};
    const proto = spec[kind] ||= mk(MOV_SPECS[kind]());
    const mesh = proto.clone();
    const gy = heightAt(x, z);
    mesh.position.set(x, y ?? gy, z);
    mesh.rotation.y = Math.random() * 6.28;
    this.group.add(mesh);
    const o = { kind, mesh, pos: mesh.position, vel: new THREE.Vector3(), spin: new THREE.Vector3(), float: 0, accio: false, rest: true, r: kind === 'barrel' ? 0.55 : 0.6 };
    this.list.push(o);
    return o;
  }

  // מוצא חפץ קרוב לקרן
  pick(origin, dir, maxD = 55) {
    let best = null, bd = 1e9;
    const v = new THREE.Vector3();
    for (const o of this.list) {
      v.copy(o.pos).sub(origin);
      const along = v.dot(dir);
      if (along < 1 || along > maxD) continue;
      const perp = v.addScaledVector(dir, -along).length();
      if (perp < 1.8 + along * 0.04 && along < bd) { bd = along; best = o; }
    }
    return best;
  }

  impulse(o, v) {
    o.vel.add(v);
    o.rest = false;
    o.spin.set((Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6, (Math.random() - 0.5) * 6);
  }

  update(dt, t, pos) {
    for (const o of this.list) {
      const dx = o.pos.x - pos.x, dz = o.pos.z - pos.z;
      const near = dx * dx + dz * dz < 220 * 220;
      o.mesh.visible = near;
      if (!near || (o.rest && o.float <= 0 && !o.accio)) continue;
      const g = Math.max(heightAt(o.pos.x, o.pos.z), -0.2);
      if (o.accio) {
        const tx = pos.x - o.pos.x, ty = pos.y + 1 - o.pos.y, tz = pos.z - o.pos.z;
        const d = Math.hypot(tx, ty, tz);
        if (d < 2.2) { o.accio = false; o.vel.set(0, 2, 0); }
        else o.vel.set((tx / d) * 26, (ty / d) * 26, (tz / d) * 26);
      } else if (o.float > 0) {
        o.float -= dt;
        const targetY = o.floatBase + 5 + Math.sin(t * 2 + o.pos.x) * 0.5;
        o.vel.y += (targetY - o.pos.y) * 4 * dt - o.vel.y * 2 * dt;
        o.vel.x *= 0.96; o.vel.z *= 0.96;
        o.mesh.rotation.y += dt * 1.2;
        if (Math.random() < dt * 14) this.world.fx.emit(o.pos.x, o.pos.y, o.pos.z, 0, -0.4, 0, '#bfe9ff', 0.4, 0.8, { end: 0.05 });
      } else o.vel.y -= 22 * dt;
      o.pos.addScaledVector(o.vel, dt);
      if (!o.float && !o.accio) {
        o.mesh.rotation.x += o.spin.x * dt;
        o.mesh.rotation.z += o.spin.z * dt;
      }
      if (o.pos.y <= g) {
        o.pos.y = g;
        if (o.vel.y < -3) { o.vel.y *= -0.3; o.vel.x *= 0.7; o.vel.z *= 0.7; o.spin.multiplyScalar(0.5); }
        else { o.vel.set(0, 0, 0); o.spin.set(0, 0, 0); o.mesh.rotation.x *= 0.5; o.mesh.rotation.z *= 0.5; if (o.float <= 0) o.rest = true; }
        o.vel.x *= 0.9; o.vel.z *= 0.9;
        if (Math.hypot(o.vel.x, o.vel.z) < 0.1 && Math.abs(o.vel.y) < 0.5) { o.rest = true; o.mesh.rotation.x = 0; o.mesh.rotation.z = 0; }
      }
    }
  }
}

// ----------------------------------------------------------------
// בובות אימון ומטרות
export class Targets {
  constructor(world) {
    this.world = world;
    this.group = new THREE.Group();
    world.scene.add(this.group);
    this.list = [];
    const spots = [
      ['castle', 0, 62, 5], ['castle', -30, 58, 5], ['castle', 30, 58, 5], ['pitch', 0, 20, 4],
      ['pitch', 15, 24, 3], ['spawn', 20, 22, 4], ['spawn', -22, 18, 3], ['autumn', 10, 20, 3],
    ];
    spots.forEach(([sid, dx, dz]) => {
      const s = siteById(sid);
      this.add(s.x + dx, s.z + dz);
    });
  }

  add(x, z) {
    const b = new GeoBuilder();
    b.cyl('wood', 0.1, 0.12, 2.0, { y: 1.0, color: '#6b4a2c' }, 6);
    b.cyl('flat', 0.35, 0.45, 1.1, { y: 1.5, color: '#d9b45a' }, 10);
    b.sphere('flat', 0.3, { y: 2.3, color: '#e8c872' }, 8, 6);
    b.cone('flat', 0.4, 0.5, { y: 2.8, color: '#6a3f8a' }, 8);
    b.box('wood', 1.4, 0.12, 0.1, { y: 1.8, color: '#6b4a2c' });
    b.cyl('flat', 0.35, 0.35, 0.05, { y: 1.5, z: 0.4, rx: Math.PI / 2, color: '#d33a2f' }, 12);
    b.cyl('flat', 0.18, 0.18, 0.06, { y: 1.5, z: 0.41, rx: Math.PI / 2, color: '#ffffff' }, 12);
    const g = mk(b);
    const y = heightAt(x, z);
    g.position.set(x, y, z);
    g.rotation.y = Math.PI * Math.random();
    this.group.add(g);
    this.list.push({ mesh: g, x, y, z, wobble: 0, cool: 0 });
  }

  hit(origin, dir, maxD, radius = 1.4) {
    // מחזיר מטרה שנפגעה
    const v = new THREE.Vector3();
    for (const o of this.list) {
      v.set(o.x - origin.x, o.y + 1.6 - origin.y, o.z - origin.z);
      const along = v.dot(dir);
      if (along < 0 || along > maxD) continue;
      if (v.addScaledVector(dir, -along).length() < radius) return o;
    }
    return null;
  }

  update(dt, t, pos) {
    for (const o of this.list) {
      o.mesh.visible = (o.x - pos.x) ** 2 + (o.z - pos.z) ** 2 < 250 * 250;
      if (o.wobble > 0) {
        o.wobble -= dt;
        o.mesh.rotation.z = Math.sin(o.wobble * 20) * o.wobble * 0.5;
      } else o.mesh.rotation.z = 0;
      o.cool = Math.max(0, o.cool - dt);
    }
  }
}

// ----------------------------------------------------------------
// אבוקות ולפידים
export class Braziers {
  constructor(world) {
    this.world = world;
    this.list = [];
    const g = new THREE.Group();
    world.scene.add(g);
    this.group = g;
    const place = (x, z) => {
      const b = new GeoBuilder();
      b.cyl('metal', 0.1, 0.15, 1.6, { y: 0.8, color: '#2b2a33' }, 6);
      b.cyl('metal', 0.5, 0.25, 0.45, { y: 1.75, color: '#3a3a44' }, 10);
      const m = mk(b);
      const y = heightAt(x, z);
      m.position.set(x, y, z);
      g.add(m);
      const fl = glowSprite('#ff9a3a', 3.4);
      fl.position.set(x, y + 2.3, z);
      fl.visible = false;
      g.add(fl);
      const fl2 = glowSprite('#ffe28a', 1.8);
      fl2.position.copy(fl.position);
      fl2.visible = false;
      g.add(fl2);
      this.list.push({ x, y: y + 2.1, z, fl, fl2, ignited: false, lit: false });
    };
    const castle = siteById('castle');
    for (const dx of [-14, 14, -26, 26]) place(castle.x + dx, castle.z + 60);
    for (const dx of [-10, 10]) place(castle.x + dx, castle.z + 120);
    const spawn = siteById('spawn');
    for (let i = 0; i < 6; i++) { const a = (i / 6) * 6.28; place(spawn.x + Math.cos(a) * 28, spawn.z + Math.sin(a) * 28); }
    for (const id of ['autumn', 'village3', 'z6', 'port']) {
      const s = siteById(id);
      for (let i = 0; i < 3; i++) { const a = (i / 3) * 6.28 + 1; place(s.x + Math.cos(a) * 20, s.z + Math.sin(a) * 20); }
    }
    const pitch = siteById('pitch');
    for (const dx of [-30, 30]) place(pitch.x + dx, pitch.z + 70);
  }

  ignite(origin, dir, maxD) {
    const v = new THREE.Vector3();
    let any = false;
    for (const b of this.list) {
      v.set(b.x - origin.x, b.y - origin.y, b.z - origin.z);
      const along = v.dot(dir);
      if (along < 0 || along > maxD) continue;
      if (v.addScaledVector(dir, -along).length() < 2.6) { b.ignited = true; any = true; }
    }
    return any;
  }

  update(dt, t, pos, night) {
    for (const b of this.list) {
      const near = (b.x - pos.x) ** 2 + (b.z - pos.z) ** 2 < 260 * 260;
      const lit = b.ignited || night > 0.45;
      b.lit = lit;
      b.fl.visible = b.fl2.visible = lit && near;
      if (lit && near) {
        const s = 3.4 + Math.sin(t * 12 + b.x) * 0.5;
        b.fl.scale.setScalar(s);
        b.fl2.scale.setScalar(s * 0.5);
        if (Math.random() < dt * 14) this.world.fx.emit(b.x + (Math.random() - 0.5) * 0.3, b.y + 0.2, b.z + (Math.random() - 0.5) * 0.3, 0, 1.8, 0, '#ffb23a', 0.5, 1.2, { end: 0.04 });
      }
    }
  }
}

// ----------------------------------------------------------------
// קלחות שיקויים
export class Cauldrons {
  constructor(world) {
    this.world = world;
    this.list = [];
    const g = new THREE.Group();
    world.scene.add(g);
    const spots = [
      ['spawn', 6, -8], ['castle', -20, 52], ['autumn', -8, 12], ['village3', 8, 10], ['z6', -26, 14], ['z3', 8, 14], ['port', 6, 8],
    ];
    spots.forEach(([sid, dx, dz]) => {
      const s = siteById(sid);
      const x = s.x + dx, z = s.z + dz, y = heightAt(x, z);
      const b = new GeoBuilder();
      b.sphere('metal', 0.9, { y: 0.9, sy: 0.85, color: '#26242e' }, 14, 10);
      b.cyl('metal', 0.82, 0.82, 0.1, { y: 1.55, color: '#26242e' }, 14);
      for (const a of [0, 2.1, 4.2]) b.cyl('metal', 0.1, 0.07, 0.5, { x: Math.cos(a) * 0.6, z: Math.sin(a) * 0.6, y: 0.25, color: '#1a1a22' }, 5);
      b.cyl('glow', 0.78, 0.78, 0.04, { y: 1.55, color: '#7dff9a' }, 14);
      // אש מתחת
      const m = mk(b);
      m.position.set(x, y, z);
      g.add(m);
      const fl = glowSprite('#ff8a2a', 2);
      fl.position.set(x, y + 0.35, z);
      g.add(fl);
      const gl = glowSprite('#7dff9a', 3);
      gl.position.set(x, y + 1.7, z);
      g.add(gl);
      this.list.push({ x, y, z, fl, gl });
    });
    this.group = g;
  }

  nearest(pos, d = 4.2) {
    for (const c of this.list) if ((c.x - pos.x) ** 2 + (c.z - pos.z) ** 2 < d * d && Math.abs(c.y - pos.y) < 3) return c;
    return null;
  }

  update(dt, t, pos) {
    for (const c of this.list) {
      const near = (c.x - pos.x) ** 2 + (c.z - pos.z) ** 2 < 60 * 60;
      c.fl.visible = c.gl.visible = near;
      if (!near) continue;
      c.fl.scale.setScalar(2 + Math.sin(t * 10 + c.x) * 0.4);
      c.gl.scale.setScalar(3 + Math.sin(t * 3 + c.x) * 0.4);
      if (Math.random() < dt * 5) this.world.fx.emit(c.x + (Math.random() - 0.5) * 0.8, c.y + 1.6, c.z + (Math.random() - 0.5) * 0.8, 0, 1.4, 0, '#8dffa8', 0.45, 1.6, { end: 0.05 });
    }
  }
}

// ----------------------------------------------------------------
// תיבות אוצר
export class Chests {
  constructor(world) {
    this.world = world;
    this.group = new THREE.Group();
    world.scene.add(this.group);
    this.list = [];
    const rng = mulberry32(4242);
    const fixed = [
      ['ruins', 8, 0], ['stones', 0, 6], ['pitch', 56, 40], ['port', 12, -10], ['village3', -30, 20], ['autumn', 40, -30], ['z4', 14, 16], ['z5', -14, 18],
    ];
    const pts = fixed.map(([sid, dx, dz]) => { const s = siteById(sid); return [s.x + dx, s.z + dz]; });
    let tries = 0;
    while (pts.length < 26 && tries++ < 5000) {
      const a = rng() * 6.28, r = Math.sqrt(rng()) * 1900;
      const x = Math.cos(a) * r, z = Math.sin(a) * r, h = heightAt(x, z);
      if (h < 3 || slopeAt(x, z, h) > 0.5) continue;
      if (SITES.some((s) => Math.hypot(x - s.x, z - s.z) < s.r)) continue;
      pts.push([x, z]);
    }
    pts.forEach(([x, z], i) => {
      const y = heightAt(x, z);
      const b = new GeoBuilder();
      b.box('wood', 1.3, 0.7, 0.85, { y: 0.35, color: '#7a4f2a' });
      b.box('metal', 1.34, 0.12, 0.9, { y: 0.15, color: '#e2b84a' });
      b.box('metal', 0.2, 0.3, 0.1, { y: 0.55, z: 0.44, color: '#e2b84a' });
      const body = mk(b);
      const lb = new GeoBuilder();
      lb.cyl('wood', 0.425, 0.425, 1.3, { rz: Math.PI / 2, z: 0.0, y: 0, color: '#8a5a30', sy: 1 }, 10);
      lb.box('metal', 1.34, 0.1, 0.1, { y: 0.0, z: 0.4, color: '#e2b84a' });
      const lid = mk(lb);
      const piv = new THREE.Group();
      piv.position.set(0, 0.7, -0.42);
      lid.position.set(0, 0, 0.42);
      lid.scale.y = 0.6;
      piv.add(lid);
      const g = new THREE.Group();
      g.add(body, piv);
      g.position.set(x, y, z);
      g.rotation.y = rng() * 6.28;
      this.group.add(g);
      const gl = glowSprite('#ffd35c', 2.2, 0.8);
      gl.position.set(x, y + 1.1, z);
      this.group.add(gl);
      this.list.push({ id: 'chest' + i, x, y, z, g, piv, gl, open: 0, opened: false });
    });
    this.apply();
  }

  apply() {
    const now = Date.now();
    for (const c of this.list) {
      const ts = state.found[c.id];
      c.opened = !!ts && now - ts < RESPAWN_MS * 2;
      c.piv.rotation.x = c.opened ? -1.6 : 0;
      c.gl.visible = !c.opened;
    }
  }

  nearest(pos, d = 3.4) {
    for (const c of this.list) if (!c.opened && (c.x - pos.x) ** 2 + (c.z - pos.z) ** 2 < d * d && Math.abs(c.y - pos.y) < 3) return c;
    return null;
  }

  open(c) {
    c.opened = true;
    state.found[c.id] = Date.now();
    const gains = [];
    for (let i = 0; i < 3; i++) {
      const t = pick(['herb', 'mushroom', 'crystal', 'flower']);
      state.ingredients[t]++;
      gains.push(t);
    }
    addScore(15, 'תיבת אוצר');
    save();
    sfx('magic');
    this.world.fx.burst(c.x, c.y + 1, c.z, '#ffd35c', 50, 5, 1, 1.4, { gravity: 3 });
    return gains;
  }

  update(dt, t, pos) {
    for (const c of this.list) {
      const near = (c.x - pos.x) ** 2 + (c.z - pos.z) ** 2 < 250 * 250;
      c.g.visible = near;
      c.gl.visible = near && !c.opened;
      if (c.opened && c.piv.rotation.x > -1.6) c.piv.rotation.x -= dt * 4;
      if (!c.opened && near) c.gl.material.opacity = 0.6 + Math.sin(t * 3 + c.x) * 0.25;
    }
  }
}

// ----------------------------------------------------------------
// מרוץ טבעות במטאטא
export class RingRace {
  constructor(world) {
    this.world = world;
    this.group = new THREE.Group();
    world.scene.add(this.group);
    const path = [
      [-520, -190, 28], [-420, -360, 60], [-250, -560, 100], [-110, -420, 70], [30, -300, 50], [170, -190, 80], [340, -260, 50],
      [520, -360, 45], [640, -200, 60], [560, -40, 45], [300, 100, 42], [60, 160, 34], [-300, 20, 40], [-520, -190, 22],
    ];
    this.rings = path.map(([x, z, h], i) => {
      const y = Math.max(heightAt(x, z), 0) + h;
      const m = new THREE.Mesh(new THREE.TorusGeometry(6, 0.45, 10, 36), new THREE.MeshBasicMaterial({ color: i === 0 ? '#ffd35c' : '#4de1ff', toneMapped: false, transparent: true, opacity: 0.9 }));
      m.position.set(x, y, z);
      const nx = path[(i + 1) % path.length], pv = path[(i + path.length - 1) % path.length];
      m.rotation.y = Math.atan2(nx[0] - pv[0], nx[1] - pv[1]) + Math.PI / 2;
      this.group.add(m);
      const gl = glowSprite(i === 0 ? '#ffd35c' : '#4de1ff', 16, 0.35);
      gl.position.copy(m.position);
      this.group.add(gl);
      return { m, gl, pos: m.position, x, y, z };
    });
    this.active = false;
    this.next = 0;
    this.time = 0;
    this.ahead = 0;
  }

  update(dt, t, pos, mode, hooks) {
    for (let i = 0; i < this.rings.length; i++) {
      const r = this.rings[i];
      const d2 = (r.x - pos.x) ** 2 + (r.z - pos.z) ** 2;
      const vis = d2 < 900 * 900;
      r.m.visible = r.gl.visible = vis;
      const isNext = this.active ? i === this.next : i === 0;
      const sc = isNext ? 1.12 + Math.sin(t * 5) * 0.08 : 0.9;
      r.m.scale.setScalar(sc);
      r.m.material.color.set(isNext ? '#ffd35c' : this.active && i < this.next ? '#3ddc97' : '#4de1ff');
      r.gl.material.color.copy(r.m.material.color);
      r.gl.material.opacity = isNext ? 0.5 : 0.18;
    }
    if (this.active) {
      this.time += dt;
      hooks.onTime?.(this.time, this.next, this.rings.length);
    }
    if (mode !== 'broom') {
      if (this.active && this.time > 3) { this.stop(false, hooks); }
      return;
    }
    const idx = this.active ? this.next : 0;
    const r = this.rings[idx];
    const dx = r.x - pos.x, dy = r.y - pos.y, dz = r.z - pos.z;
    if (dx * dx + dy * dy + dz * dz < 7.5 * 7.5) {
      if (!this.active) {
        this.active = true;
        this.next = 1;
        this.time = 0;
        hooks.onStart?.();
      } else {
        this.next++;
        sfx('coin');
        hooks.onRing?.(this.next, this.rings.length);
        if (this.next >= this.rings.length) this.stop(true, hooks);
      }
      this.world.fx.burst(r.x, r.y, r.z, '#ffd35c', 40, 8, 1.2, 1, {});
    }
  }

  stop(finished, hooks) {
    const time = this.time;
    this.active = false;
    this.next = 0;
    hooks.onEnd?.(finished, time);
  }
}
