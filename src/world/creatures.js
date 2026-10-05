import * as THREE from 'three';
import { GeoBuilder } from './geo.js';
import { MAT } from './materials.js';
import { heightAt } from './terrain.js';
import { colliders } from './collision.js';
import { glowSprite } from './fx.js';
import { siteById } from './sites.js';
import { lerpAngle, mulberry32, pick } from '../util.js';

const mk = (b, cast = true) => b.build({ cast, receive: false });

// ---------- חד-קרן ----------
function buildUnicorn(color = '#fbfbff', mane = '#ff9ff0') {
  const root = new THREE.Group();
  const body = new GeoBuilder();
  body.box('flat', 0.9, 1.0, 2.2, { y: 1.45, color });
  body.box('flat', 0.55, 0.55, 0.95, { y: 2.05, z: 1.15, rx: -0.7, color });
  body.box('flat', 0.42, 0.45, 0.8, { y: 2.55, z: 1.6, rx: 0.2, color });
  body.box('flat', 0.3, 0.3, 0.4, { y: 2.45, z: 2.0, color: '#f0e6ee' });
  body.cone('flat', 0.08, 0.7, { y: 3.1, z: 1.66, rx: 0.25, color: '#ffe9a0' }, 8);
  body.box('flat', 0.12, 0.7, 0.35, { y: 2.55, z: 1.2, rx: -0.5, color: mane });
  body.box('flat', 0.12, 0.5, 0.4, { y: 2.2, z: 0.8, rx: -0.2, color: mane });
  body.box('flat', 0.14, 0.9, 0.3, { y: 1.5, z: -1.25, rx: 0.3, color: mane });
  body.sphere('flat', 0.05, { x: 0.2, y: 2.62, z: 1.85, color: '#2a1a40' }, 5, 4);
  body.sphere('flat', 0.05, { x: -0.2, y: 2.62, z: 1.85, color: '#2a1a40' }, 5, 4);
  root.add(mk(body));
  const legs = [];
  for (const [x, z] of [[-0.3, 0.85], [0.3, 0.85], [-0.3, -0.85], [0.3, -0.85]]) {
    const l = new GeoBuilder();
    l.cyl('flat', 0.1, 0.07, 1.0, { y: -0.5, color }, 6);
    l.box('flat', 0.14, 0.1, 0.16, { y: -1.0, z: 0.03, color: '#eadff0' });
    const g = new THREE.Group();
    g.position.set(x, 1.0, z);
    g.add(mk(l));
    root.add(g);
    legs.push(g);
  }
  const glow = glowSprite('#fff2b0', 1.1, 0.9);
  glow.position.set(0, 3.45, 1.75);
  root.add(glow);
  root.userData = { legs, kind: 'unicorn', glow };
  return root;
}

// ---------- היפוגריף ----------
function buildHippogriff() {
  const root = new THREE.Group();
  const b = new GeoBuilder();
  const fur = '#7f6a58', fur2 = '#9a8570';
  b.box('flat', 0.9, 0.95, 1.7, { y: 1.5, color: fur });
  b.box('flat', 0.7, 0.8, 0.6, { y: 1.9, z: 1.0, rx: -0.4, color: '#e6e2da' });
  b.sphere('flat', 0.38, { y: 2.45, z: 1.35, color: '#f0ece4' }, 8, 6);
  b.cone('flat', 0.17, 0.55, { y: 2.38, z: 1.8, rx: Math.PI / 2 + 0.3, color: '#f2c24a' }, 6);
  b.sphere('flat', 0.06, { x: 0.22, y: 2.55, z: 1.55, color: '#1a1410' }, 5, 4);
  b.sphere('flat', 0.06, { x: -0.22, y: 2.55, z: 1.55, color: '#1a1410' }, 5, 4);
  b.box('flat', 0.35, 0.3, 1.0, { y: 1.45, z: -1.2, rx: 0.4, color: fur2 });
  root.add(mk(b));
  const legs = [];
  for (const [x, z] of [[-0.3, 0.6], [0.3, 0.6], [-0.3, -0.6], [0.3, -0.6]]) {
    const l = new GeoBuilder();
    l.cyl('flat', 0.1, 0.07, 1.0, { y: -0.5, color: fur }, 6);
    l.box('flat', 0.14, 0.1, 0.18, { y: -1.0, z: 0.04, color: '#f2c24a' });
    const g = new THREE.Group();
    g.position.set(x, 1.0, z);
    g.add(mk(l));
    root.add(g);
    legs.push(g);
  }
  const wings = [];
  for (const s of [-1, 1]) {
    const w = new GeoBuilder();
    w.box('flat', 2.6, 0.08, 1.1, { x: s * 1.3, color: fur2 });
    w.box('flat', 1.8, 0.08, 0.9, { x: s * 2.4, z: -0.2, color: '#a89580' });
    const g = new THREE.Group();
    g.position.set(s * 0.45, 1.9, 0.1);
    g.add(mk(w));
    root.add(g);
    wings.push(g);
  }
  root.userData = { legs, wings, kind: 'hippogriff' };
  return root;
}

// ---------- ינשוף ----------
function buildOwl() {
  const root = new THREE.Group();
  const b = new GeoBuilder();
  b.sphere('flat', 0.32, { y: 0, sy: 1.25, color: '#8a6a48' }, 8, 6);
  b.sphere('flat', 0.24, { y: 0.14, z: 0.18, sy: 1.1, color: '#e8dcc6' }, 8, 6);
  b.sphere('flat', 0.22, { y: 0.45, z: 0.12, color: '#9a7a54' }, 8, 6);
  b.sphere('flat', 0.08, { x: 0.1, y: 0.5, z: 0.3, color: '#ffd23a' }, 6, 4);
  b.sphere('flat', 0.08, { x: -0.1, y: 0.5, z: 0.3, color: '#ffd23a' }, 6, 4);
  b.cone('flat', 0.05, 0.12, { y: 0.44, z: 0.36, rx: Math.PI / 2, color: '#f2a33a' }, 4);
  b.cone('flat', 0.05, 0.2, { x: 0.12, y: 0.68, z: 0.1, color: '#8a6a48' }, 4);
  b.cone('flat', 0.05, 0.2, { x: -0.12, y: 0.68, z: 0.1, color: '#8a6a48' }, 4);
  b.cone('flat', 0.2, 0.5, { y: -0.2, z: -0.4, rx: -Math.PI / 2 - 0.3, color: '#7a5a3a' }, 5);
  root.add(mk(b, false));
  const wings = [];
  for (const s of [-1, 1]) {
    const w = new GeoBuilder();
    w.box('flat', 0.9, 0.04, 0.4, { x: s * 0.45, color: '#7a5a3a' });
    w.box('flat', 0.5, 0.04, 0.3, { x: s * 1.0, z: -0.05, color: '#8a6a48' });
    const g = new THREE.Group();
    g.position.set(s * 0.22, 0.1, 0);
    g.add(mk(w, false));
    root.add(g);
    wings.push(g);
  }
  root.userData = { wings, kind: 'owl' };
  return root;
}

// ---------- דרקון ----------
function buildDragon() {
  const root = new THREE.Group();
  const c1 = '#8a1f2a', c2 = '#5c1219', belly = '#e8b24a';
  const b = new GeoBuilder();
  // גוף
  b.sphere('flat', 3, { y: 0, sz: 2.4, color: c1 }, 12, 8);
  b.sphere('flat', 2.4, { y: 0.1, z: -6, sz: 2.2, color: c1 }, 12, 8);
  b.sphere('flat', 2.0, { y: 0.3, z: -11, sz: 2.4, color: c2 }, 10, 8);
  b.cone('flat', 1.3, 8, { y: 0.3, z: -17, rx: -Math.PI / 2, color: c2 }, 8);
  b.sphere('flat', 2.0, { y: -0.9, z: 0.2, sz: 2.2, sx: 0.8, color: belly }, 8, 6);
  // צוואר וראש
  b.cyl('flat', 1.1, 1.6, 6, { y: 1.4, z: 6, rx: -1.0, color: c1 }, 8);
  b.sphere('flat', 1.5, { y: 3.4, z: 9.4, sz: 1.3, color: c1 }, 10, 8);
  b.box('flat', 1.4, 1.0, 2.4, { y: 3.0, z: 11.2, color: c2 });
  b.cone('flat', 0.35, 2.6, { x: 0.8, y: 5.0, z: 8.4, rx: -0.7, color: '#f0d9a0' }, 5);
  b.cone('flat', 0.35, 2.6, { x: -0.8, y: 5.0, z: 8.4, rx: -0.7, color: '#f0d9a0' }, 5);
  b.sphere('glow', 0.3, { x: 0.8, y: 3.8, z: 10.2, color: '#ffe44a' }, 6, 4);
  b.sphere('glow', 0.3, { x: -0.8, y: 3.8, z: 10.2, color: '#ffe44a' }, 6, 4);
  for (let i = 0; i < 7; i++) b.cone('flat', 0.5, 1.4, { y: 2.8 - i * 0.05, z: 4 - i * 3.2, color: '#f0d9a0' }, 4);
  // רגליים
  for (const [x, z] of [[-2.2, 2], [2.2, 2], [-2, -6], [2, -6]]) b.cyl('flat', 0.7, 0.5, 3, { x, y: -2.4, z, color: c2 }, 6);
  root.add(mk(b));
  const wings = [];
  const shape = new THREE.Shape();
  shape.moveTo(0, 0); shape.lineTo(8, 3); shape.lineTo(15, 0.5); shape.lineTo(12, -2); shape.lineTo(14, -5); shape.lineTo(8, -3.5); shape.lineTo(5, -6); shape.lineTo(2, -3.5); shape.lineTo(0, -4);
  const wgeo = new THREE.ShapeGeometry(shape);
  wgeo.rotateX(-Math.PI / 2);
  for (const s of [-1, 1]) {
    const m = new THREE.Mesh(wgeo, new THREE.MeshStandardMaterial({ color: '#a12a38', side: THREE.DoubleSide, roughness: 0.7 }));
    const g = new THREE.Group();
    g.position.set(s * 1.5, 2, 0);
    m.scale.set(s, 1, 1);
    g.add(m);
    root.add(g);
    wings.push(g);
  }
  root.scale.setScalar(1.8);
  root.userData = { wings, kind: 'dragon' };
  return root;
}

// ---------- עוף החול ----------
function buildPhoenix() {
  const root = new THREE.Group();
  const b = new GeoBuilder();
  b.sphere('glow', 0.5, { sz: 1.4, color: '#ff8a2a' }, 8, 6);
  b.sphere('glow', 0.32, { y: 0.35, z: 0.85, color: '#ffd23a' }, 8, 6);
  b.cone('glow', 0.1, 0.4, { y: 0.32, z: 1.2, rx: Math.PI / 2, color: '#fff2a0' }, 5);
  for (let i = 0; i < 3; i++) b.cone('glow', 0.18, 3 + i, { x: (i - 1) * 0.3, y: -0.2, z: -2.3 - i * 0.2, rx: -Math.PI / 2 + (i - 1) * 0.15, color: ['#ff4a1a', '#ff8a2a', '#ffd23a'][i] }, 5);
  root.add(b.build({ cast: false, receive: false }));
  const wings = [];
  for (const s of [-1, 1]) {
    const w = new GeoBuilder();
    w.box('glow', 1.6, 0.05, 0.9, { x: s * 0.8, color: '#ff7a24' });
    w.box('glow', 1.2, 0.05, 0.7, { x: s * 2.0, z: -0.2, color: '#ffb83a' });
    const g = new THREE.Group();
    g.position.set(s * 0.3, 0.1, 0);
    g.add(w.build({ cast: false, receive: false }));
    root.add(g);
    wings.push(g);
  }
  const gl = glowSprite('#ff7a24', 7, 0.6);
  root.add(gl);
  root.scale.setScalar(1.3);
  root.userData = { wings, kind: 'phoenix' };
  return root;
}

// ---------- סניץ' הזהב ----------
export function buildSnitch() {
  const root = new THREE.Group();
  const ball = new THREE.Mesh(new THREE.SphereGeometry(0.22, 12, 10), new THREE.MeshStandardMaterial({ color: '#ffd84a', emissive: '#ffb300', emissiveIntensity: 1.2, metalness: 0.9, roughness: 0.2 }));
  root.add(ball);
  const wings = [];
  for (const s of [-1, 1]) {
    const w = new THREE.Mesh(new THREE.PlaneGeometry(0.8, 0.22), new THREE.MeshBasicMaterial({ color: '#fff6c0', transparent: true, opacity: 0.8, side: THREE.DoubleSide }));
    w.position.x = s * 0.5;
    const g = new THREE.Group();
    g.position.set(s * 0.15, 0, 0);
    g.add(w);
    root.add(g);
    wings.push(g);
  }
  const gl = glowSprite('#ffd84a', 2.4, 0.9);
  root.add(gl);
  root.userData = { wings };
  return root;
}

export class Creatures {
  constructor(world) {
    this.world = world;
    this.group = new THREE.Group();
    world.scene.add(this.group);
    this.walkers = [];
    this.flyers = [];
    const rng = mulberry32(555);
    const spawn = siteById('spawn');
    const place = (obj, cx, cz, r, extra = {}) => {
      const a = rng() * 6.28, d = rng() * r;
      const x = cx + Math.cos(a) * d, z = cz + Math.sin(a) * d;
      obj.position.set(x, heightAt(x, z), z);
      this.group.add(obj);
      const w = { obj, x, z, tx: x, tz: z, face: rng() * 6.28, home: { x: cx, z: cz, r }, wait: rng() * 3, phase: rng() * 10, speed: 1.4 + rng() * 1.2, ...extra };
      this.walkers.push(w);
      return w;
    };
    // חד-קרנים: אחו וליד האגם הקטן, יער הקסם
    for (let i = 0; i < 5; i++) place(buildUnicorn(), 220, 220, 120);
    for (let i = 0; i < 4; i++) place(buildUnicorn('#f2eeff', '#9ad7ff'), -700, 120, 150);
    for (let i = 0; i < 3; i++) place(buildUnicorn('#fff2f6', '#ffd23a'), -380, 560, 80);
    for (let i = 0; i < 4; i++) place(buildHippogriff(), -150, -250, 120);
    for (let i = 0; i < 3; i++) place(buildHippogriff(), 880, -760, 80);
    for (let i = 0; i < 3; i++) place(buildHippogriff(), -1000, -950, 100);
    // ינשופים – מעגלים מעל כפרים וטירה
    const centers = [
      [spawn.x, spawn.z, 60, 28], [-150, -540, 90, 70], [1120, 720, 80, 28], [520, 330, 60, 30], [-640, -770, 70, 32], [-780, 240, 60, 40], [170, -190, 30, 60], [640, -200, 80, 22],
    ];
    centers.forEach(([cx, cz, r, h]) => {
      for (let i = 0; i < 3; i++) {
        const o = buildOwl();
        this.group.add(o);
        this.flyers.push({ obj: o, kind: 'circle', cx, cz, r: r * (0.6 + rng() * 0.6), h: h + rng() * 12, a: rng() * 6.28, w: (rng() < 0.5 ? -1 : 1) * (0.15 + rng() * 0.15), phase: rng() * 10, flap: 7 });
      }
    });
    // דרקון
    const dg = buildDragon();
    this.group.add(dg);
    this.dragon = { obj: dg, kind: 'circle', cx: 1060, cz: -1170, r: 330, h: 340, a: 0, w: 0.06, phase: 0, flap: 2.2 };
    this.flyers.push(this.dragon);
    // עוף החול
    const ph = buildPhoenix();
    this.group.add(ph);
    this.phoenix = { obj: ph, kind: 'circle', cx: -150, cz: -540, r: 130, h: 110, a: 1, w: 0.22, phase: 0, flap: 5 };
    this.flyers.push(this.phoenix);
    // היפוגריפים מעופפים
    for (let i = 0; i < 3; i++) {
      const hg = buildHippogriff();
      this.group.add(hg);
      this.flyers.push({ obj: hg, kind: 'circle', cx: -300 + i * 400, cz: -700, r: 180, h: 120 + i * 30, a: i * 2, w: 0.1, phase: i, flap: 3.5, hip: true });
    }
    // סירות באגם
    this.boats = [];
    for (let i = 0; i < 3; i++) {
      const b = new GeoBuilder();
      b.box('wood', 2.2, 0.5, 6, { y: 0.1, color: '#7a5330' });
      b.box('wood', 1.4, 0.5, 2, { y: 0.1, z: 3.6, color: '#7a5330' });
      b.cyl('wood', 0.1, 0.1, 6, { y: 3, z: 0.4, color: '#5b3f26' }, 6);
      b.box('cloth', 0.08, 4, 3, { y: 3.4, z: -0.8, color: ['#f4efe0', '#b3262e', '#2a5fc1'][i] });
      const g = mk(b);
      this.group.add(g);
      this.boats.push({ obj: g, a: i * 2.1, r: 230 + i * 50, phase: i });
    }
    // סניץ' הזהב
    this.snitch = { obj: buildSnitch(), pos: new THREE.Vector3(-480, 60, -180), vel: new THREE.Vector3(5, 0, 3), t: 0, caught: 0 };
    this.group.add(this.snitch.obj);
    this.snitchTarget = new THREE.Vector3();
  }

  respawnSnitch() {
    const sites = [[-520, -190], [-150, -540], [0, 0], [640, -200], [170, -190], [-640, -770]];
    const s = pick(sites);
    this.snitch.pos.set(s[0] + (Math.random() - 0.5) * 100, 40 + Math.random() * 40, s[1] + (Math.random() - 0.5) * 100);
    this.snitch.caught = 0;
    this.snitch.obj.visible = true;
  }

  update(dt, t, pos) {
    // הולכים
    for (const w of this.walkers) {
      const dx = w.x - pos.x, dz = w.z - pos.z;
      const d2 = dx * dx + dz * dz;
      w.obj.visible = d2 < 380 * 380;
      if (!w.obj.visible) continue;
      let sp = 0;
      // בורחים מהשחקן אם קרוב מדי
      const flee = d2 < 8 * 8;
      if (flee) {
        const d = Math.sqrt(d2) || 1;
        w.tx = w.x + (dx / d) * 12; w.tz = w.z + (dz / d) * 12;
        w.wait = 0;
      }
      if (w.wait > 0) w.wait -= dt;
      else {
        const ddx = w.tx - w.x, ddz = w.tz - w.z, dd = Math.hypot(ddx, ddz);
        if (dd < 1) {
          w.wait = 2 + Math.random() * 6;
          const a = Math.random() * 6.28, r = Math.random() * w.home.r;
          const x = w.home.x + Math.cos(a) * r, z = w.home.z + Math.sin(a) * r;
          if (heightAt(x, z) > 1.5) { w.tx = x; w.tz = z; }
        } else {
          sp = flee ? w.speed * 3.2 : w.speed;
          const nx = w.x + (ddx / dd) * sp * dt, nz = w.z + (ddz / dd) * sp * dt;
          const p = { x: nx, z: nz };
          colliders.resolve(p, 0.9, heightAt(w.x, w.z));
          if (heightAt(p.x, p.z) < 0.6) { w.tx = w.x; w.tz = w.z; }
          else { w.x = p.x; w.z = p.z; }
          w.face = lerpAngle(w.face, Math.atan2(ddx, ddz), 1 - Math.exp(-5 * dt));
        }
      }
      const y = heightAt(w.x, w.z);
      w.obj.position.set(w.x, y, w.z);
      w.obj.rotation.y = w.face;
      w.phase += dt * (sp * 2.2 + 0.5);
      const u = w.obj.userData;
      if (u.legs) {
        const s = Math.sin(w.phase * 3) * Math.min(sp * 0.35, 0.9);
        u.legs[0].rotation.x = s; u.legs[3].rotation.x = s;
        u.legs[1].rotation.x = -s; u.legs[2].rotation.x = -s;
      }
      if (u.glow) u.glow.material.opacity = 0.7 + Math.sin(t * 3 + w.phase) * 0.2;
      if (u.wings) u.wings.forEach((g, i) => { g.rotation.z = (i ? 1 : -1) * 0.1; });
    }
    // מעופפים
    for (const f of this.flyers) {
      f.a += f.w * dt;
      const x = f.cx + Math.cos(f.a) * f.r, z = f.cz + Math.sin(f.a) * f.r;
      const dx = x - pos.x, dz = z - pos.z;
      const far = dx * dx + dz * dz > (f === this.dragon ? 2600 : 700) ** 2;
      f.obj.visible = !far;
      if (far) continue;
      const base = heightAt(x, z);
      const y = (f === this.dragon ? f.h : base + f.h) + Math.sin(t * 0.7 + f.phase) * 3;
      f.obj.position.set(x, y, z);
      const dirx = -Math.sin(f.a) * Math.sign(f.w), dirz = Math.cos(f.a) * Math.sign(f.w);
      f.obj.rotation.y = Math.atan2(dirx, dirz);
      f.obj.rotation.z = -0.25 * Math.sign(f.w);
      const fl = Math.sin(t * f.flap + f.phase) * 0.7;
      const ws = f.obj.userData.wings;
      if (ws) { ws[0].rotation.z = -fl; ws[1].rotation.z = fl; }
      if (f === this.phoenix && this.world.fx) {
        this.world.fx.emit(x, y, z, (Math.random() - 0.5) * 2, -1, (Math.random() - 0.5) * 2, '#ffa43a', 1.6, 1.6, { end: 0.1 });
      }
    }
    // סירות
    for (const b of this.boats) {
      b.a += dt * 0.04;
      const x = 640 + Math.cos(b.a) * b.r, z = -200 + Math.sin(b.a) * (b.r * 0.55);
      b.obj.position.set(x, -0.05 + Math.sin(t * 1.6 + b.phase) * 0.12, z);
      b.obj.rotation.y = Math.atan2(-Math.sin(b.a) * b.r, Math.cos(b.a) * b.r * 0.55) + 0;
      b.obj.rotation.z = Math.sin(t * 1.2 + b.phase) * 0.04;
    }
    // סניץ'
    const s = this.snitch;
    if (s.caught > 0) {
      s.caught -= dt;
      if (s.caught <= 0) this.respawnSnitch();
      return;
    }
    s.t -= dt;
    const toPlayer = new THREE.Vector3().subVectors(s.pos, pos);
    const dist = toPlayer.length();
    if (s.t <= 0) {
      s.t = 0.6 + Math.random() * 1.2;
      s.vel.set((Math.random() - 0.5) * 2, (Math.random() - 0.4) * 1.0, (Math.random() - 0.5) * 2).normalize();
      if (dist < 90) {
        // בורח מהשחקן
        s.vel.addScaledVector(toPlayer.normalize(), 1.4).normalize();
      }
      s.vel.multiplyScalar(dist < 90 ? 34 : 14);
    }
    s.pos.addScaledVector(s.vel, dt);
    const g = heightAt(s.pos.x, s.pos.z);
    if (s.pos.y < g + 6) s.pos.y = g + 6;
    if (s.pos.y > 140) s.vel.y = -Math.abs(s.vel.y);
    if (Math.hypot(s.pos.x, s.pos.z) > 1700) s.vel.multiplyScalar(-1);
    s.obj.position.copy(s.pos);
    s.obj.rotation.y = Math.atan2(s.vel.x, s.vel.z);
    const fl = Math.sin(t * 60) * 0.9;
    s.obj.userData.wings[0].rotation.z = -fl;
    s.obj.userData.wings[1].rotation.z = fl;
    if (this.world.fx && Math.random() < dt * 40) this.world.fx.emit(s.pos.x, s.pos.y, s.pos.z, 0, 0, 0, '#ffe27a', 0.6, 0.8, { end: 0.05 });
    s.obj.visible = dist < 600;
  }
}
