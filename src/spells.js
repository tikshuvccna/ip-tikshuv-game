import * as THREE from 'three';
import { glowSprite } from './world/fx.js';
import { GeoBuilder } from './world/geo.js';
import { heightAt } from './world/terrain.js';
import { wandTipWorld } from './world/characters.js';
import { state, completedCount, addScore } from './state.js';
import { sfx } from './audio.js';
import { lerpAngle } from './util.js';

export const SPELLS = [
  { id: 'lumos', key: 1, name: 'לומוס', en: 'Lumos', need: 0, mana: 0, color: '#fff6c0', icon: '💡', desc: 'מדליק ומכבה אור בקצה השרביט.' },
  { id: 'leviosa', key: 2, name: 'ויינגרדיום לביוסה', en: 'Wingardium Leviosa', need: 0, mana: 10, color: '#9ad7ff', icon: '🪶', desc: 'מרחיף חפצים באוויר – חביות, ארגזים ודלועים.' },
  { id: 'incendio', key: 3, name: 'אינסנדיו', en: 'Incendio', need: 0, mana: 14, color: '#ff8a2a', icon: '🔥', desc: 'כדור אש: מדליק אבוקות ופוגע במטרות.' },
  { id: 'stupefy', key: 4, name: 'סטופפיי', en: 'Stupefy', need: 1, mana: 10, color: '#ff4a6a', icon: '⚡', desc: 'קרן אדומה שמפילה מטרות ודוחפת חפצים.' },
  { id: 'protego', key: 5, name: 'פרוטגו', en: 'Protego', need: 2, mana: 25, color: '#7fd0ff', icon: '🛡️', desc: 'מגן קסמים זוהר שמקיף אותך.' },
  { id: 'expelliarmus', key: 6, name: 'אקספלימיוס', en: 'Expelliarmus', need: 3, mana: 16, color: '#ff7ad9', icon: '💥', desc: 'גל הדף חזק שמעיף חפצים קדימה.' },
  { id: 'accio', key: 7, name: 'אקסיו', en: 'Accio', need: 4, mana: 12, color: '#b6ff86', icon: '🧲', desc: 'מושך חפצים (ואת הסניץ׳ הזהוב!) אליך.' },
  { id: 'patronus', key: 8, name: 'אקספקטו פטרונום', en: 'Expecto Patronum', need: 5, mana: 40, color: '#bfe9ff', icon: '🦌', desc: 'מזמן אייל כסוף זוהר שמלווה ומאיר אותך.' },
];

const V = new THREE.Vector3();

function buildStag() {
  const b = new GeoBuilder();
  const c = '#dff4ff';
  b.box('glow', 0.7, 0.8, 1.9, { y: 1.5, color: c });
  b.box('glow', 0.4, 0.4, 0.9, { y: 2.2, z: 1.1, rx: -0.6, color: c });
  b.box('glow', 0.35, 0.35, 0.7, { y: 2.7, z: 1.5, color: c });
  for (const s of [-1, 1]) {
    b.cyl('glow', 0.03, 0.04, 0.9, { x: s * 0.15, y: 3.2, z: 1.3, rz: s * -0.4, color: '#ffffff' }, 4);
    b.cyl('glow', 0.025, 0.03, 0.6, { x: s * 0.4, y: 3.5, z: 1.35, rz: s * -0.9, color: '#ffffff' }, 4);
    b.cyl('glow', 0.02, 0.03, 0.5, { x: s * 0.3, y: 3.5, z: 1.1, rz: s * -0.2, rx: 0.6, color: '#ffffff' }, 4);
  }
  const g = b.build({ cast: false, receive: false });
  const legs = [];
  for (const [x, z] of [[-0.25, 0.7], [0.25, 0.7], [-0.25, -0.7], [0.25, -0.7]]) {
    const l = new GeoBuilder();
    l.cyl('glow', 0.07, 0.05, 1.1, { y: -0.55, color: c }, 5);
    const lg = l.build({ cast: false, receive: false });
    const p = new THREE.Group();
    p.position.set(x, 1.15, z);
    p.add(lg);
    g.add(p);
    legs.push(p);
  }
  const halo = glowSprite('#bfe9ff', 6, 0.7);
  halo.position.y = 1.8;
  g.add(halo);
  g.userData.legs = legs;
  return g;
}

export class Spells {
  constructor(world, player, game) {
    this.world = world;
    this.player = player;
    this.game = game; // { items:{...}, creatures, npcs, hooks }
    this.selected = 0;
    this.cool = 0;
    this.lumos = false;
    this.projectiles = [];
    this.light = new THREE.PointLight('#fff2c0', 0, 45, 1.6);
    world.scene.add(this.light);
    this.tipGlow = glowSprite('#ffffff', 0.5, 0.0);
    world.scene.add(this.tipGlow);
    // מגן
    this.shieldMesh = new THREE.Mesh(
      new THREE.SphereGeometry(2.4, 24, 16),
      new THREE.ShaderMaterial({
        transparent: true, depthWrite: false, side: THREE.DoubleSide, blending: THREE.AdditiveBlending,
        uniforms: { uTime: { value: 0 }, uA: { value: 0 } },
        vertexShader: 'varying vec3 vN; varying vec3 vP; void main(){ vN = normalize(normalMatrix*normal); vP = position; vec4 mv = modelViewMatrix*vec4(position,1.0); gl_Position = projectionMatrix*mv; }',
        fragmentShader: `varying vec3 vN; varying vec3 vP; uniform float uTime,uA;
          void main(){ float f = pow(1.0-abs(vN.z),2.2); float hex = 0.5+0.5*sin(vP.x*9.0+uTime*2.)*sin(vP.y*9.0-uTime*1.5)*sin(vP.z*9.0);
          gl_FragColor = vec4(vec3(0.4,0.8,1.0)*(0.4+f*1.6+hex*0.35), (0.12+f*0.65)*uA); }`,
      })
    );
    this.shieldMesh.visible = false;
    world.scene.add(this.shieldMesh);
    this.waves = [];
    this.stags = [];
    this.stagProto = buildStag();
  }

  unlocked(i) {
    return completedCount() >= SPELLS[i].need;
  }

  select(i) {
    if (i < 0 || i >= SPELLS.length) return;
    if (!this.unlocked(i)) {
      this.game.hooks.toast(`🔒 הלחש ״${SPELLS[i].name}״ נפתח אחרי ${SPELLS[i].need} אזורי לימוד`, 'warn');
      return;
    }
    this.selected = i;
    sfx('click');
    this.game.hooks.onSpellSelect?.(i);
  }

  cycle() {
    for (let k = 1; k <= SPELLS.length; k++) {
      const i = (this.selected + k) % SPELLS.length;
      if (this.unlocked(i)) { this.select(i); return; }
    }
  }

  // נקודת המטרה של הכוונת
  aimPoint(maxD = 130) {
    const p = this.player;
    const cam = p.camera;
    const dir = p.aimDir(new THREE.Vector3());
    const o = cam.position.clone();
    // מתחילים אחרי השחקן כדי לא לפגוע בעצמנו
    const start = o.clone().addScaledVector(dir, p.dist * 0.9);
    let hit = null;
    for (let d = 4; d < maxD; d += 2.5) {
      V.copy(start).addScaledVector(dir, d);
      if (V.y < heightAt(V.x, V.z) + 0.2) { hit = V.clone(); break; }
    }
    return { origin: o, start, dir, point: hit || start.clone().addScaledVector(dir, maxD) };
  }

  cast() {
    if (this.cool > 0 || this.player.frozen) return false;
    const sp = SPELLS[this.selected];
    const p = this.player;
    if (sp.id === 'lumos') {
      this.lumos = !this.lumos;
      sfx('magic');
      this.cool = 0.25;
      p.castT = 0.25;
      return true;
    }
    if (p.mana < sp.mana) {
      this.game.hooks.toast('אין מספיק אנרגיית קסם… המתן להתחדשות', 'warn');
      this.cool = 0.4;
      return false;
    }
    p.mana -= sp.mana;
    p.castT = 0.45;
    this.cool = sp.id === 'patronus' ? 1.2 : 0.4;
    const aim = this.aimPoint();
    const tip = wandTipWorld(p.rig, new THREE.Vector3());
    const dir = aim.point.clone().sub(tip).normalize();
    switch (sp.id) {
      case 'leviosa': this.castLeviosa(aim, tip, sp); break;
      case 'accio': this.castAccio(aim, tip, sp); break;
      case 'incendio':
      case 'stupefy': this.shoot(sp, tip, dir); break;
      case 'protego': this.castProtego(); break;
      case 'expelliarmus': this.castExpel(aim, tip, sp); break;
      case 'patronus': this.castPatronus(); break;
    }
    return true;
  }

  shoot(sp, tip, dir) {
    sfx('cast');
    const core = glowSprite(sp.color, 1.4, 1);
    const halo = glowSprite(sp.color, 3.2, 0.5);
    core.position.copy(tip);
    halo.position.copy(tip);
    this.world.scene.add(core, halo);
    this.projectiles.push({ sp, core, halo, pos: tip.clone(), vel: dir.clone().multiplyScalar(sp.id === 'incendio' ? 55 : 85), life: 1.8 });
  }

  castLeviosa(aim, tip, sp) {
    const m = this.game.items.movables;
    const o = m.pick(aim.start, aim.dir, 60);
    sfx('magic');
    this.beam(tip, o ? o.pos : aim.point, sp.color);
    if (o) {
      o.float = 9;
      o.floatBase = Math.max(heightAt(o.pos.x, o.pos.z), o.pos.y);
      o.rest = false;
      o.vel.set(0, 3, 0);
      this.world.fx.burst(o.pos.x, o.pos.y + 0.5, o.pos.z, sp.color, 25, 2.5, 0.7, 1.2, {});
    } else this.game.hooks.toast('כוון לארגז, חבית או דלעת ✨');
  }

  castAccio(aim, tip, sp) {
    const m = this.game.items.movables;
    const o = m.pick(aim.start, aim.dir, 70);
    sfx('magic');
    // הסניץ'
    const sn = this.game.creatures.snitch;
    const toS = sn.pos.clone().sub(aim.start);
    const along = toS.dot(aim.dir);
    if (sn.caught <= 0 && along > 0 && along < 90 && toS.addScaledVector(aim.dir, -along).length() < 6 + along * 0.06) {
      this.catchSnitch();
      this.beam(tip, sn.pos, sp.color);
      return;
    }
    this.beam(tip, o ? o.pos : aim.point, sp.color);
    if (o) { o.accio = true; o.float = 0; o.rest = false; }
    else this.game.hooks.toast('אין חפץ בכיוון הזה');
  }

  catchSnitch() {
    const sn = this.game.creatures.snitch;
    if (sn.caught > 0) return;
    sn.caught = 12;
    sn.obj.visible = false;
    state.snitch++;
    addScore(50, 'הסניץ׳ הזהוב');
    sfx('levelup');
    this.world.fx.burst(sn.pos.x, sn.pos.y, sn.pos.z, '#ffd84a', 80, 9, 1.2, 1.4, {});
    this.game.hooks.toast('🏆 תפסת את הסניץ׳ הזהוב! +50 נקודות', 'good');
  }

  castProtego() {
    sfx('magic');
    this.player.shield = 7;
  }

  castExpel(aim, tip, sp) {
    sfx('boom');
    const p = this.player;
    const fwd = aim.dir.clone();
    this.waves.push({ pos: tip.clone(), dir: fwd, r: 1, mesh: this.ringMesh(sp.color, tip, fwd) });
    for (const o of this.game.items.movables.list) {
      V.copy(o.pos).sub(p.pos);
      const d = V.length();
      if (d < 26 && V.normalize().dot(fwd) > 0.45) {
        o.float = 0;
        this.game.items.movables.impulse(o, fwd.clone().multiplyScalar(26 - d * 0.5).add(new THREE.Vector3(0, 9, 0)));
      }
    }
    for (const t of this.game.items.targets.list) {
      V.set(t.x - p.pos.x, 0, t.z - p.pos.z);
      if (V.length() < 22 && V.normalize().dot(new THREE.Vector3(fwd.x, 0, fwd.z).normalize()) > 0.4) this.hitTarget(t);
    }
  }

  ringMesh(color, pos, dir) {
    const m = new THREE.Mesh(new THREE.TorusGeometry(1, 0.08, 8, 32), new THREE.MeshBasicMaterial({ color, transparent: true, opacity: 0.9, toneMapped: false }));
    m.position.copy(pos);
    m.lookAt(pos.clone().add(dir));
    this.world.scene.add(m);
    return m;
  }

  beam(a, b, color) {
    const n = 18;
    for (let i = 0; i < n; i++) {
      const t = i / n;
      V.copy(a).lerp(b, t);
      this.world.fx.emit(V.x, V.y, V.z, (Math.random() - 0.5), (Math.random() - 0.5), (Math.random() - 0.5), color, 0.55, 0.5, { end: 0.05 });
    }
  }

  castPatronus() {
    sfx('levelup');
    const g = this.stagProto.clone(true);
    g.userData.legs = g.children.filter((c) => c.isGroup);
    this.world.scene.add(g);
    this.stags.push({ obj: g, a: this.player.facing, life: 14, phase: 0 });
    this.game.hooks.toast('🦌 הפטרונוס שלך נולד!', 'good');
  }

  hitTarget(t) {
    if (t.cool > 0) return false;
    t.wobble = 1.2;
    t.cool = 0.8;
    addScore(3, 'מטרה');
    this.world.fx.burst(t.x, t.y + 2, t.z, '#ffd35c', 25, 4, 0.8, 1, { gravity: 2 });
    sfx('coin');
    return true;
  }

  explode(pr, pos) {
    const sp = pr.sp;
    sfx('boom');
    this.world.fx.burst(pos.x, pos.y, pos.z, sp.color, 55, 9, 1.3, 1.0, { gravity: 1, drag: 1 });
    this.world.fx.burst(pos.x, pos.y, pos.z, '#ffffff', 14, 6, 0.8, 0.5, {});
    if (sp.id === 'incendio') {
      for (const b of this.game.items.braziers.list) {
        if ((b.x - pos.x) ** 2 + (b.y - pos.y) ** 2 + (b.z - pos.z) ** 2 < 5 * 5) {
          if (!b.ignited) this.game.hooks.toast('🔥 האבוקה נדלקה!', 'good');
          b.ignited = true;
        }
      }
    }
    for (const t of this.game.items.targets.list) {
      if ((t.x - pos.x) ** 2 + (t.y + 1.6 - pos.y) ** 2 + (t.z - pos.z) ** 2 < 3.2 * 3.2) this.hitTarget(t);
    }
    for (const o of this.game.items.movables.list) {
      if (o.pos.distanceTo(pos) < 3.2) {
        o.float = 0;
        this.game.items.movables.impulse(o, pr.vel.clone().normalize().multiplyScalar(sp.id === 'stupefy' ? 18 : 10).add(new THREE.Vector3(0, 5, 0)));
      }
    }
    // הסניץ'
    const sn = this.game.creatures.snitch;
    if (sn.caught <= 0 && sn.pos.distanceTo(pos) < 5) this.catchSnitch();
  }

  update(dt, t) {
    this.cool = Math.max(0, this.cool - dt);
    const p = this.player;
    const tip = wandTipWorld(p.rig, V);
    // לומוס
    const want = this.lumos ? 14 : 0;
    this.light.intensity += (want - this.light.intensity) * Math.min(1, dt * 8);
    this.light.position.copy(tip);
    this.tipGlow.position.copy(tip);
    this.tipGlow.material.opacity = this.lumos ? 0.9 : p.castT > 0 ? 0.9 : 0;
    this.tipGlow.scale.setScalar(this.lumos ? 0.9 + Math.sin(t * 9) * 0.05 : 0.5);
    p.rig.tipGlow.material.color.set(this.lumos ? '#fff6c0' : '#9ad7ff');
    if (this.lumos) {
      // לומוס מתכבה כשמגיע יום
      if (this.world.atmo.night < 0.02 && Math.random() < dt * 0.02) this.lumos = false;
    }
    // קליעים
    for (let i = this.projectiles.length - 1; i >= 0; i--) {
      const pr = this.projectiles[i];
      pr.life -= dt;
      const step = pr.vel.clone().multiplyScalar(dt);
      pr.pos.add(step);
      pr.core.position.copy(pr.pos);
      pr.halo.position.copy(pr.pos);
      pr.halo.scale.setScalar(3.2 + Math.sin(t * 30) * 0.4);
      this.world.fx.emit(pr.pos.x, pr.pos.y, pr.pos.z, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, (Math.random() - 0.5) * 2, pr.sp.color, 0.9, 0.5, { end: 0.05 });
      let hit = false;
      if (pr.pos.y < heightAt(pr.pos.x, pr.pos.z) + 0.2) hit = true;
      if (!hit) {
        const dir = pr.vel.clone().normalize();
        const tg = this.game.items.targets.hit(pr.pos.clone().addScaledVector(dir, -step.length()), dir, step.length() + 1.5, 1.5);
        if (tg) hit = true;
        for (const o of this.game.items.movables.list) if (o.pos.distanceToSquared(pr.pos) < 1.4) { hit = true; break; }
        const sn = this.game.creatures.snitch;
        if (sn.caught <= 0 && sn.pos.distanceToSquared(pr.pos) < 4) hit = true;
        for (const b of this.game.items.braziers.list) if (b.x * 0 + (b.x - pr.pos.x) ** 2 + (b.y - pr.pos.y) ** 2 + (b.z - pr.pos.z) ** 2 < 2.2) hit = true;
      }
      if (hit || pr.life <= 0) {
        if (hit) this.explode(pr, pr.pos);
        this.world.scene.remove(pr.core, pr.halo);
        pr.core.material.dispose();
        pr.halo.material.dispose();
        this.projectiles.splice(i, 1);
      }
    }
    // גלי הדף
    for (let i = this.waves.length - 1; i >= 0; i--) {
      const w = this.waves[i];
      w.r += dt * 40;
      w.pos.addScaledVector(w.dir, dt * 22);
      w.mesh.position.copy(w.pos);
      w.mesh.scale.setScalar(w.r);
      w.mesh.material.opacity = Math.max(0, 0.9 - w.r / 24);
      if (w.r > 24) {
        this.world.scene.remove(w.mesh);
        w.mesh.geometry.dispose();
        w.mesh.material.dispose();
        this.waves.splice(i, 1);
      }
    }
    // מגן
    const sh = this.shieldMesh;
    sh.visible = p.shield > 0;
    if (sh.visible) {
      sh.position.set(p.pos.x, p.pos.y + 1.0, p.pos.z);
      sh.material.uniforms.uTime.value = t;
      sh.material.uniforms.uA.value = Math.min(1, p.shield * 1.5) * (0.85 + Math.sin(t * 10) * 0.1);
    }
    // פטרונוס
    for (let i = this.stags.length - 1; i >= 0; i--) {
      const s = this.stags[i];
      s.life -= dt;
      s.a += dt * 0.9;
      s.phase += dt * 9;
      const r = 6 + Math.sin(s.a * 0.7) * 1.5;
      const x = p.pos.x + Math.cos(s.a) * r, z = p.pos.z + Math.sin(s.a) * r;
      const y = Math.max(heightAt(x, z), p.pos.y - 3);
      s.obj.position.set(x, y, z);
      s.obj.rotation.y = Math.atan2(-Math.sin(s.a), Math.cos(s.a));
      const sw = Math.sin(s.phase) * 0.7;
      s.obj.userData.legs?.forEach((l, k) => (l.rotation.x = k % 3 === 0 ? sw : -sw));
      this.world.fx.emit(x, y + 1.6, z, 0, 0.2, 0, '#bfe9ff', 1.0, 1.4, { end: 0.05 });
      if (s.life <= 0) {
        this.world.scene.remove(s.obj);
        this.stags.splice(i, 1);
      }
    }
  }
}
