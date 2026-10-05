import * as THREE from 'three';
import { GeoBuilder } from './geo.js';
import { MAT } from './materials.js';
import { heightAt } from './terrain.js';
import { ZONE_SITES, siteById } from './sites.js';
import { ZONES } from './zonesMeta.js';
import { addHouse, addLamp, roundTower } from './structures.js';
import { glowSprite, makeRuneRing, makeBeacon, labelSprite, labelTexture } from './fx.js';
import { mulberry32, pick } from '../util.js';

const col = (hex) => new THREE.Color(hex);

function plaque(text, bg, w = 3.4, h = 2.2) {
  const tex = labelTexture(text, { color: '#fff', bg, font: 'bold 120px Heebo, Arial, sans-serif', w: 512, h: 340 });
  const m = new THREE.Mesh(
    new THREE.PlaneGeometry(w, h),
    new THREE.MeshBasicMaterial({ map: tex, transparent: true, side: THREE.DoubleSide, toneMapped: false })
  );
  return m;
}

export function buildLandmarks(world) {
  const groups = [];
  const animated = [];
  const beacons = [];
  const points = {};
  const fx = world.fx;
  const extra = new THREE.Group();
  world.scene.add(extra);

  // ---------- שער הקסם: טבעת + קרן אור לכל אזור ----------
  ZONES.forEach((z) => {
    const s = siteById(z.id);
    const off = { z1: 18, z2: 22, z3: 20, z4: 20, z5: 18, z6: 30, z7: 17 }[z.id];
    const px = s.x, pz = s.z + off;
    const py = heightAt(px, pz);
    const ring = makeRuneRing(z.color, 6.5);
    ring.position.set(px, py + 0.2, pz);
    extra.add(ring);
    const inner = makeRuneRing(z.color, 3.2);
    inner.position.set(px, py + 0.25, pz);
    extra.add(inner);
    const beam = makeBeacon(z.color, 320, 2.8);
    beam.position.set(px, py, pz);
    extra.add(beam);
    const orb = glowSprite(z.color, 5, 0.95);
    orb.position.set(px, py + 3.5, pz);
    extra.add(orb);
    const lab = labelSprite(z.name, { color: '#fff', bg: 'rgba(20,16,50,0.7)', font: 'bold 68px Heebo, Arial, sans-serif' }, 11);
    lab.position.set(px, py + 8, pz);
    extra.add(lab);
    points[z.id] = { x: px, y: py, z: pz, r: 7, ring, inner, beam, orb, color: z.color };
    beacons.push(beam);
    animated.push((dt, t) => {
      ring.rotation.z += dt * 0.25;
      inner.rotation.z -= dt * 0.5;
      beam.material.uniforms.uTime.value = t;
      orb.position.y = py + 3.5 + Math.sin(t * 2 + z.n) * 0.4;
      orb.scale.setScalar(5 + Math.sin(t * 3 + z.n) * 0.6);
      if (fx && (Math.random() < dt * 14)) {
        const a = Math.random() * 6.28, r = 2 + Math.random() * 4;
        fx.emit(px + Math.cos(a) * r, py + 0.3, pz + Math.sin(a) * r, 0, 1.6 + Math.random() * 1.5, 0, z.color, 0.7, 2.2, { end: 0.1 });
      }
    });
  });

  // ---------- אזור 1: מגדל הכתובות ----------
  {
    const s = siteById('z1');
    const b = new GeoBuilder();
    const f = b.at(s.x, s.y, s.z);
    f.cyl('stone', 16, 17, 1.3, { y: 0.65, color: '#cfc9bc' }, 30);
    f.cyl('stone', 13.5, 14.5, 1.1, { y: 1.8, color: '#d9d3c6' }, 30);
    f.cyl('plaster', 5.2, 6.4, 38, { y: 21, color: '#ece4d0' }, 20);
    for (const y of [7, 15, 23, 31]) f.cyl('metal', 5.9 - y * 0.02, 6.1 - y * 0.02, 0.7, { y, color: '#e8c24a' }, 20);
    for (let k = 0; k < 4; k++) for (let i = 0; i < 3; i++) {
      const a = (i / 3) * 6.283 + k * 0.7;
      f.box('window', 1.1, 2.4, 0.5, { x: Math.sin(a) * 5.6, z: Math.cos(a) * 5.6, y: 8 + k * 8, ry: a });
    }
    f.cyl('stone', 8, 6.6, 2.6, { y: 41.4, color: '#bdb6a6' }, 20);
    f.cyl('glow', 4.4, 4.4, 5.5, { y: 45.6, color: '#bff4ff' }, 20);
    for (let i = 0; i < 8; i++) {
      const a = (i / 8) * 6.283;
      f.cyl('stone', 0.35, 0.35, 5.6, { x: Math.sin(a) * 4.6, z: Math.cos(a) * 4.6, y: 45.6, color: '#d6cfbd' }, 6);
    }
    f.cone('roof', 7.4, 13, { y: 55, color: '#2a5fc1' }, 20);
    f.sphere('metal', 0.9, { y: 62, color: '#ffd84a' }, 8, 6);
    for (let i = 0; i < 4; i++) {
      const a = (i / 4) * 6.283 + 0.78;
      f.box('stone', 2, 12, 2.6, { x: Math.sin(a) * 6.6, z: Math.cos(a) * 6.6, y: 7, ry: a, rz: 0, color: '#c4bdaf' });
    }
    f.collideCircle(0, 0, 7.4, 90);
    groups.push(b.build());
    // לוחות אוקטטים צפים
    const hold = new THREE.Group();
    hold.position.set(s.x, s.y + 28, s.z);
    const nums = ['192', '168', '1', '10'];
    const cols = ['rgba(32,110,170,0.9)', 'rgba(110,60,190,0.9)', 'rgba(20,130,90,0.9)', 'rgba(180,70,40,0.9)'];
    nums.forEach((n, i) => {
      const p = plaque(n, cols[i]);
      const a = (i / 4) * 6.283;
      p.position.set(Math.sin(a) * 12, Math.sin(i * 1.7) * 2, Math.cos(a) * 12);
      p.rotation.y = a;
      hold.add(p);
      const dot = glowSprite('#ffffff', 1.4);
      dot.position.set(Math.sin(a + 0.78) * 12, Math.sin(i * 1.7) * 2 - 1.2, Math.cos(a + 0.78) * 12);
      hold.add(dot);
    });
    extra.add(hold);
    animated.push((dt, t) => {
      hold.rotation.y += dt * 0.25;
      hold.position.y = s.y + 28 + Math.sin(t) * 0.6;
    });
    // לפידים בכניסה
    for (const sx of [-1, 1]) {
      const fl = glowSprite('#ffb15a', 3);
      fl.position.set(s.x + sx * 6, s.y + 3.4, s.z + 14);
      extra.add(fl);
      animated.push((dt, t) => fl.scale.setScalar(3 + Math.sin(t * 11 + sx) * 0.4));
    }
  }

  // ---------- אזור 2: מקדש האי ----------
  {
    const s = siteById('z2');
    const b = new GeoBuilder();
    const f = b.at(s.x, s.y, s.z);
    f.cyl('stone', 21, 22.5, 1.5, { y: 0.75, color: '#d8dfe8' }, 32);
    f.cyl('stone', 18.5, 19.5, 1.2, { y: 2.0, color: '#e6ecf4' }, 32);
    const N = 8;
    for (let i = 0; i < N; i++) {
      const a = (i / N) * 6.283;
      const net = i < N / 2;
      const c = net ? '#4a78ff' : '#3ddc97';
      const x = Math.sin(a) * 14.5, z = Math.cos(a) * 14.5;
      f.cyl('stone', 0.95, 1.1, 11, { x, z, y: 8, color: '#f0f2f7' }, 14);
      f.box('stone', 2.8, 0.8, 2.8, { x, z, y: 13.8, color: c });
      f.box('stone', 2.4, 0.6, 2.4, { x, z, y: 2.9, color: '#cfd6e0' });
      f.collideCircle(x, z, 1.2, 20);
      const nx = Math.sin(a + Math.PI / N) * 14.5, nz = Math.cos(a + Math.PI / N) * 14.5;
      f.box('stone', 11, 1.1, 2.0, { x: nx, z: nz, y: 14.6, ry: a + Math.PI / N + Math.PI / 2, color: net ? '#5a86ff' : '#4fe6a6' });
    }
    f.sphere('plaster', 16, { y: 15, sy: 0.55, color: '#eef3ff' }, 32, 14);
    f.cyl('metal', 0.5, 0.8, 4, { y: 24.4, color: '#ffd84a' }, 8);
    f.sphere('metal', 1, { y: 26.5, color: '#ffd84a' }, 8, 6);
    // מזרקה מרכזית
    f.cyl('stone', 4.2, 4.6, 1.2, { y: 2.6, color: '#c8d0dc' }, 20);
    f.cyl('glow', 3.6, 3.6, 0.1, { y: 3.2, color: '#68d8ff' }, 20);
    f.cyl('stone', 0.5, 0.8, 3.5, { y: 4.8, color: '#c8d0dc' }, 10);
    f.sphere('glow', 0.55, { y: 6.8, color: '#bff4ff' }, 8, 6);
    f.collideCircle(0, 0, 4.8, 8);
    groups.push(b.build());
    // מנורות לאורך הגשר
    const lb = new GeoBuilder();
    for (let x = 350; x <= 570; x += 22) for (const dz of [-4.4, 4.4]) addLamp(lb, x, -200 + dz, 3.4);
    groups.push(lb.build());
    // זוהר מים
    for (let i = 0; i < 40; i++) {
      const sp = glowSprite('#9fe7ff', 1.2, 0.8);
      const a = Math.random() * 6.283, r = 8 + Math.random() * 40;
      const bx = s.x + Math.cos(a) * r, bz = s.z + Math.sin(a) * r;
      sp.position.set(bx, s.y + 2 + Math.random() * 8, bz);
      extra.add(sp);
      const ph = Math.random() * 10;
      animated.push((dt, t) => {
        sp.position.y += Math.sin(t * 1.2 + ph) * dt * 0.8;
        sp.position.x = bx + Math.sin(t * 0.4 + ph) * 3;
        sp.position.z = bz + Math.cos(t * 0.35 + ph) * 3;
      });
    }
  }

  // ---------- אזור 3: יער השערים ----------
  {
    const s = siteById('z3');
    const b = new GeoBuilder();
    const f = b.at(s.x, s.y, s.z);
    // עץ ענק
    f.cyl('leaf', 3.6, 5.6, 26, { y: 13, color: '#6a4a2e' }, 12);
    for (let i = 0; i < 5; i++) {
      const a = (i / 5) * 6.283;
      f.cyl('leaf', 1.2, 2.4, 9, { x: Math.sin(a) * 4.8, z: Math.cos(a) * 4.8, y: 3.6, rz: Math.cos(a) * 0.8, rx: -Math.sin(a) * 0.8, color: '#5c3f27' }, 6);
    }
    const leafC = ['#3ec9b0', '#5ad6c6', '#46b8e8', '#6aa8ff', '#3ec99a'];
    for (let i = 0; i < 9; i++) {
      const a = (i / 9) * 6.283;
      f.ico('leaf', 11 + (i % 3) * 2, { x: Math.sin(a) * 12, z: Math.cos(a) * 12, y: 34 + (i % 2) * 5, color: leafC[i % 5] }, 1);
    }
    f.ico('leaf', 15, { y: 42, color: '#6ee6d0' }, 1);
    // בית עץ
    f.cyl('wood', 10, 10, 0.7, { y: 17, color: '#7a5330' }, 14);
    f.cyl('wood', 10.4, 10.4, 0.25, { y: 18.2, color: '#5b3f26' }, 14);
    f.box('plaster', 5.2, 3.6, 4.6, { x: 5.5, y: 19.1, z: 0, color: '#e9d2b0' });
    f.gable('roof', 4.6, 2.4, 5.2, { x: 5.5, y: 20.9, ry: Math.PI / 2, color: '#2f6f8a' }, 0.5);
    f.box('window', 1, 1.2, 0.1, { x: 8.1, y: 19.4, z: 0, ry: Math.PI / 2 });
    f.collideCircle(0, 0, 5.8, 60);
    // שערים
    const gate = (gx, c, txt, txtBg) => {
      for (const sx of [-1, 1]) {
        f.box('stone', 2.2, 11, 2.2, { x: gx + sx * 5, y: 5.5, z: 22, color: '#a9a49a' });
        f.collideCircle(gx + sx * 5, 22, 1.5, 14);
      }
      f.box('stone', 13.5, 2.4, 2.8, { x: gx, y: 11.6, z: 22, color: c });
      f.cone('stone', 7.5, 3.4, { x: gx, y: 14.5, z: 22, color: c }, 4);
    };
    gate(-15, '#4a78ff', 'פרטי');
    gate(15, '#ffb23a', 'ציבורי');
    groups.push(b.build());
    const t1 = plaque('פרטי', 'rgba(40,80,200,0.9)', 5, 3.2);
    t1.position.set(s.x - 15, s.y + 7.5, s.z + 23.5);
    const t2 = plaque('ציבורי', 'rgba(210,130,20,0.92)', 5.6, 3.2);
    t2.position.set(s.x + 15, s.y + 7.5, s.z + 23.5);
    extra.add(t1, t2);
    // נצנוצים
    for (let i = 0; i < 70; i++) {
      const sp = glowSprite(pick(['#9ff3ff', '#b6ff86', '#c9b6ff']), 0.9, 0.85);
      const a = Math.random() * 6.283, r = 6 + Math.random() * 38;
      const bx = s.x + Math.cos(a) * r, bz = s.z + Math.sin(a) * r, by = s.y + 1 + Math.random() * 14;
      sp.position.set(bx, by, bz);
      extra.add(sp);
      const ph = Math.random() * 10;
      animated.push((dt, t) => {
        sp.position.y = by + Math.sin(t * 0.8 + ph) * 1.2;
        sp.position.x = bx + Math.sin(t * 0.5 + ph) * 2.5;
        sp.position.z = bz + Math.cos(t * 0.45 + ph) * 2.5;
      });
    }
    // בתים בשולי הקרחת
    const hb = new GeoBuilder();
    const rng = mulberry32(31);
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * 6.283 + 0.4;
      const x = s.x + Math.cos(a) * 36, z = s.z + Math.sin(a) * 36;
      if (Math.abs(z - (s.z + 20)) < 8 && Math.abs(x - s.x) < 22) continue;
      addHouse(hb, x, z, -a + Math.PI / 2, rng, { wall: '#d9e6d0', roof: '#3a6b3a', two: false, w: 6, d: 5 });
      addLamp(hb, x + 4, z + 4, 3.4);
    }
    groups.push(hb.build());
  }

  // ---------- אזור 4: ביצת הניצוצות ----------
  {
    const s = siteById('z4');
    const b = new GeoBuilder();
    const f = b.at(s.x, s.y, s.z);
    // בקתה על כלונסאות
    for (const sx of [-1, 1]) for (const sz of [-1, 1]) f.cyl('wood', 0.35, 0.45, 5, { x: sx * 5.5, z: sz * 4.5, y: 2.5, color: '#4a3220' }, 6);
    f.box('wood', 13, 0.6, 11, { y: 5.2, color: '#6b4a2c' });
    f.box('plaster', 9, 3.8, 7.5, { y: 7.4, color: '#c9d2a6' });
    f.gable('roof', 7.5, 3.2, 9, { y: 9.3, ry: Math.PI / 2, color: '#5a7a3a' }, 0.9);
    f.box('wood', 1.4, 2.4, 0.2, { x: 1.5, y: 7, z: 3.85, color: '#4a3220' });
    f.box('window', 1.1, 1.2, 0.1, { x: -2.5, y: 7.6, z: 3.8 });
    f.box('window', 1.1, 1.2, 0.1, { x: 4, y: 7.6, z: -3.8 });
    f.box('stone', 1.4, 0.6, 3, { x: 1.5, y: 2.7, z: 7.4, rx: 0.55, color: '#7a5330' });
    f.collideBox(0, 0, 6.6, 5.6, 14);
    // פסל אבן סטטי
    f.box('stone', 3.4, 1.2, 3.4, { x: -14, z: 8, y: 0.6, color: '#7e7a70' });
    f.box('stone', 2.2, 9, 2.2, { x: -14, z: 8, y: 5.7, color: '#94907f' });
    f.sphere('stone', 1.6, { x: -14, z: 8, y: 10.8, color: '#a7a392' }, 10, 8);
    f.collideCircle(-14, 8, 2.4, 14);
    // מדרכת קרשים
    for (let i = 0; i < 26; i++) {
      f.box('wood', 2.6, 0.18, 1.3, { x: 9 + i * 1.5, y: 0.3 + 0.05 * Math.sin(i), z: 20 - i * 0.5 + 0 * i, color: i % 2 ? '#7a5330' : '#6b4a2c' });
    }
    groups.push(b.build());
    // פלפולים
    for (let i = 0; i < 46; i++) {
      const c = pick(['#c76bff', '#6af0ff', '#9aff8a', '#ff9ff0']);
      const sp = glowSprite(c, 1.5 + Math.random(), 0.95);
      const a = Math.random() * 6.283, r = 5 + Math.random() * 90;
      const bx = s.x + Math.cos(a) * r, bz = s.z + Math.sin(a) * r;
      const by = Math.max(heightAt(bx, bz), 0.4) + 1.2 + Math.random() * 3;
      sp.position.set(bx, by, bz);
      extra.add(sp);
      const ph = Math.random() * 10, sp2 = 0.3 + Math.random() * 0.6;
      animated.push((dt, t) => {
        sp.position.x = bx + Math.sin(t * sp2 + ph) * 6;
        sp.position.z = bz + Math.cos(t * sp2 * 0.8 + ph) * 6;
        sp.position.y = by + Math.sin(t * 1.3 + ph) * 0.9;
      });
    }
  }

  // ---------- אזור 5: מערת הדרקון ----------
  {
    const s = siteById('z5');
    const b = new GeoBuilder();
    const f = b.at(s.x, s.y, s.z);
    const rock = ['#4c4a50', '#5a5860', '#403e44', '#66636b'];
    for (const sx of [-1, 1]) {
      f.ico('stone', 10, { x: sx * 13, y: 8, z: -4, sy: 1.5, color: rock[0] }, 1);
      f.ico('stone', 8, { x: sx * 16, y: 4, z: 4, sy: 1.1, color: rock[1] }, 1);
      f.ico('stone', 7, { x: sx * 10, y: 17, z: -6, color: rock[2] }, 1);
      f.collideCircle(sx * 13, -4, 10, 40);
      f.collideCircle(sx * 16, 4, 7.5, 20);
    }
    f.ico('stone', 12, { y: 22, z: -8, sy: 0.9, sx: 1.8, color: rock[3] }, 1);
    f.ico('stone', 14, { y: 12, z: -18, sx: 2.2, sy: 1.4, color: rock[0] }, 1);
    f.ico('stone', 12, { y: 26, z: -16, sx: 1.8, color: rock[2] }, 1);
    f.box('stone', 22, 28, 6, { y: 12, z: -14, color: '#2b2a30' });
    f.collideBox(0, -14, 11, 3.2, 30);
    // פתח זוהר
    f.box('glow', 12, 14, 0.3, { y: 7, z: -6.2, color: '#ff7a24' });
    // פסל דרקון
    f.sphere('metal', 3.4, { y: 27, z: 0.5, sx: 1.1, sz: 1.6, color: '#d8a21c' }, 12, 8);
    f.cone('metal', 1.4, 5, { y: 27.5, z: 5.5, rx: Math.PI / 2, color: '#d8a21c' }, 8);
    f.cone('metal', 0.5, 4, { x: 1.7, y: 31, z: -1, rz: -0.5, color: '#f0d060' }, 6);
    f.cone('metal', 0.5, 4, { x: -1.7, y: 31, z: -1, rz: 0.5, color: '#f0d060' }, 6);
    f.sphere('glow', 0.4, { x: 1.2, y: 28.3, z: 3.4, color: '#ff4a2a' }, 6, 4);
    f.sphere('glow', 0.4, { x: -1.2, y: 28.3, z: 3.4, color: '#ff4a2a' }, 6, 4);
    // קריסטלים
    for (let i = 0; i < 14; i++) {
      const a = Math.random() * 6.283, r = 18 + Math.random() * 14;
      const hh = 2 + Math.random() * 4;
      f.cone('glow', 0.9, hh, { x: Math.sin(a) * r, z: Math.cos(a) * r - 2, y: hh / 2, rz: (Math.random() - 0.5) * 0.4, color: pick(['#ff9a4a', '#ffd35c', '#ff6a3a']) }, 5);
    }
    // מדורות
    for (const sx of [-1, 1]) {
      f.cyl('stone', 1.1, 1.4, 1.6, { x: sx * 8, z: 12, y: 0.8, color: '#4c4a50' }, 8);
    }
    groups.push(b.build());
    for (const sx of [-1, 1]) {
      const fl = glowSprite('#ff9a3a', 4);
      fl.position.set(s.x + sx * 8, s.y + 2.6, s.z + 12);
      extra.add(fl);
      const fl2 = glowSprite('#ffe28a', 2);
      fl2.position.copy(fl.position);
      extra.add(fl2);
      animated.push((dt, t) => {
        fl.scale.setScalar(4 + Math.sin(t * 13 + sx) * 0.7);
        fl2.scale.setScalar(2 + Math.sin(t * 17 + sx) * 0.4);
        if (fx && Math.random() < dt * 20) fx.emit(fl.position.x, fl.position.y, fl.position.z, (Math.random() - 0.5) * 0.8, 2 + Math.random() * 2, (Math.random() - 0.5) * 0.8, '#ffb23a', 0.6, 1.6, { end: 0.05 });
      });
    }
    const gl = glowSprite('#ff7a24', 22, 0.5);
    gl.position.set(s.x, s.y + 8, s.z - 3);
    extra.add(gl);
    animated.push((dt, t) => { gl.material.opacity = 0.45 + Math.sin(t * 2.2) * 0.12; });
  }

  // ---------- אזור 6: סדנת הקסמים ----------
  {
    const s = siteById('z6');
    const b = new GeoBuilder();
    const f = b.at(s.x, s.y, s.z);
    f.box('stone', 36, 2, 18, { y: 1, color: '#8c877e' });
    f.box('plaster', 34, 12, 16, { y: 8, color: '#efe3c6' });
    for (let i = 0; i < 9; i++) f.box('wood', 0.5, 12, 16.4, { x: -16 + i * 4, y: 8, color: '#5b3f26' });
    f.box('wood', 34.4, 0.6, 16.4, { y: 11, color: '#5b3f26' });
    f.gable('roof', 16, 8, 34, { y: 14, ry: Math.PI / 2, color: '#b2552a' }, 1.2);
    for (const cx of [-10, 6]) {
      f.box('stone', 2.4, 8, 2.4, { x: cx, y: 20, z: -3, color: '#9b9187' });
      f.box('stone', 3, 0.5, 3, { x: cx, y: 24.2, z: -3, color: '#6f675e' });
    }
    f.box('wood', 5, 6, 0.4, { x: 0, y: 4, z: 8.2, color: '#6b4426' });
    f.box('stone', 7, 7, 0.5, { x: 0, y: 4, z: 8.1, color: '#a8a398' });
    for (const x of [-13, -8, 8, 13]) f.box('window', 2.4, 3, 0.3, { x, y: 8, z: 8.1 });
    // מסך ענק
    f.box('metal', 9.4, 5.8, 0.6, { x: 0, y: 17.5, z: 8.4, color: '#2a2d3d' });
    f.collideBox(0, 0, 18, 9.2, 28);
    // סדן וחביות
    f.box('metal', 1.6, 1, 0.9, { x: -22, z: 6, y: 1.5, color: '#3c3f4a' });
    f.cyl('stone', 0.8, 0.8, 1.3, { x: -22, z: 6, y: 0.65, color: '#5b3f26' }, 8);
    for (let i = 0; i < 4; i++) f.cyl('wood', 0.8, 0.8, 1.5, { x: 22 + (i % 2) * 1.8, z: 4 + Math.floor(i / 2) * 1.8, y: 0.75 + 0.01, color: '#7a5330' }, 10);
    groups.push(b.build());
    // גלגלי שיניים מסתובבים
    const makeGear = (R, teeth, color) => {
      const gb = new GeoBuilder();
      gb.cyl('metal', R, R, 0.8, { rx: Math.PI / 2, color }, 24);
      for (let i = 0; i < teeth; i++) {
        const a = (i / teeth) * 6.283;
        gb.box('metal', R * 0.28, R * 0.28, 0.8, { x: Math.cos(a) * (R + R * 0.1), y: Math.sin(a) * (R + R * 0.1), rz: a, color });
      }
      gb.cyl('metal', R * 0.25, R * 0.25, 1.2, { rx: Math.PI / 2, color: '#222530' }, 10);
      return gb.build();
    };
    const g1 = makeGear(3.2, 12, '#d8a21c'), g2 = makeGear(2.2, 8, '#c0c4d0'), g3 = makeGear(1.6, 6, '#e8b830');
    g1.position.set(s.x - 12.5, s.y + 12, s.z + 8.8);
    g2.position.set(s.x - 7.8, s.y + 13.8, s.z + 8.8);
    g3.position.set(s.x + 14, s.y + 12, s.z + 8.8);
    extra.add(g1, g2, g3);
    animated.push((dt) => { g1.rotation.z += dt * 0.5; g2.rotation.z -= dt * 0.75; g3.rotation.z += dt * 0.9; });
    // מסך ה-IP
    const sc = document.createElement('canvas');
    sc.width = 512; sc.height = 320;
    const g = sc.getContext('2d');
    g.fillStyle = '#0b1230'; g.fillRect(0, 0, 512, 320);
    g.fillStyle = '#4de1ff'; g.font = 'bold 30px monospace';
    g.fillText('C:\\> ipconfig', 24, 50);
    g.fillStyle = '#ffd35c';
    g.fillText('IPv4 Address . : 192.168.1.20', 24, 110);
    g.fillText('Subnet Mask . . : 255.255.255.0', 24, 150);
    g.fillText('Default Gateway : 192.168.1.1', 24, 190);
    g.fillStyle = '#3ddc97'; g.fillText('DHCP Enabled . . : Yes', 24, 250);
    const tex = new THREE.CanvasTexture(sc);
    tex.colorSpace = THREE.SRGBColorSpace;
    const screen = new THREE.Mesh(new THREE.PlaneGeometry(8.8, 5.5), new THREE.MeshBasicMaterial({ map: tex, toneMapped: false }));
    screen.position.set(s.x, s.y + 17.5, s.z + 8.75);
    extra.add(screen);
    // עשן
    if (fx) animated.push((dt) => {
      for (const cx of [-10, 6]) if (Math.random() < dt * 8) fx.emit(s.x + cx + (Math.random() - 0.5), s.y + 24.6, s.z - 3, 0.6, 2.2, 0.2, '#b8b0c8', 2, 4.5, { end: 6 });
    });
    const sign = labelSprite('סדנת הקסמים', { color: '#ffe9a8', bg: 'rgba(60,35,10,0.85)', font: 'bold 74px Heebo, Arial, sans-serif' }, 12);
    sign.position.set(s.x, s.y + 9.5, s.z + 9.2);
    extra.add(sign);
  }

  // ---------- אזור 7: מגדל הראוטר ----------
  {
    const s = siteById('z7');
    const b = new GeoBuilder();
    const f = b.at(s.x, s.y, s.z);
    f.cyl('stone', 19, 21, 2.4, { y: 1.2, color: '#4a4d63' }, 6);
    f.cyl('stone', 15, 17, 1.4, { y: 3.1, color: '#5a5e78' }, 6);
    // גוף ה"ראוטר"
    f.box('metal', 15, 4.4, 9, { y: 6, color: '#252838' });
    f.box('metal', 15.4, 0.5, 9.4, { y: 8.4, color: '#3a3e55' });
    for (let i = 0; i < 8; i++) f.box('glow', 0.7, 0.4, 0.2, { x: -5.6 + i * 1.6, y: 6, z: 4.6, color: i % 3 === 0 ? '#3dff9a' : '#ff5a7a' });
    for (let i = 0; i < 4; i++) f.box('metal', 1.2, 1.2, 0.3, { x: -4.5 + i * 3, y: 4.8, z: 4.6, color: '#101219' });
    for (const x of [-6, 0, 6]) {
      f.cyl('metal', 0.28, 0.35, 15, { x, y: 16, z: -3, color: '#1a1c28' }, 8);
      f.sphere('glow', 0.5, { x, y: 23.8, z: -3, color: '#ff5a7a' }, 8, 6);
    }
    for (let i = 0; i < 6; i++) {
      const a = (i / 6) * 6.283;
      f.cyl('metal', 0.6, 0.8, 7, { x: Math.cos(a) * 17, z: Math.sin(a) * 17, y: 6, color: '#1e2030' }, 6);
      f.sphere('glow', 0.7, { x: Math.cos(a) * 17, z: Math.sin(a) * 17, y: 9.8, color: '#4de1ff' }, 8, 6);
      f.collideCircle(Math.cos(a) * 17, Math.sin(a) * 17, 0.9, 30);
    }
    f.collideBox(0, 0, 7.8, 4.8, 12);
    groups.push(b.build());
    // גביש מרחף
    const crystal = new THREE.Mesh(
      new THREE.OctahedronGeometry(4.2, 0),
      new THREE.MeshStandardMaterial({ color: '#ff5a7a', emissive: '#ff2a5a', emissiveIntensity: 1.4, flatShading: true, roughness: 0.15, metalness: 0.3 })
    );
    crystal.scale.set(1, 2.2, 1);
    crystal.position.set(s.x, s.y + 22, s.z);
    crystal.castShadow = true;
    extra.add(crystal);
    const rings = [];
    for (let i = 0; i < 3; i++) {
      const r = new THREE.Mesh(
        new THREE.TorusGeometry(8 + i * 2.6, 0.18, 8, 64),
        new THREE.MeshBasicMaterial({ color: ['#4de1ff', '#ff5a7a', '#ffd35c'][i], toneMapped: false })
      );
      r.position.copy(crystal.position);
      extra.add(r);
      rings.push(r);
    }
    const halo = glowSprite('#ff3a6a', 30, 0.6);
    halo.position.copy(crystal.position);
    extra.add(halo);
    animated.push((dt, t) => {
      crystal.rotation.y += dt * 0.6;
      crystal.position.y = s.y + 22 + Math.sin(t * 1.3) * 0.7;
      rings.forEach((r, i) => {
        r.rotation.x = t * (0.4 + i * 0.2) + i;
        r.rotation.y = t * (0.3 - i * 0.12) + i * 2;
        r.position.y = crystal.position.y;
      });
      halo.position.y = crystal.position.y;
      halo.material.opacity = 0.5 + Math.sin(t * 2) * 0.12;
    });
    for (const x of [-6, 0, 6]) {
      const lt = glowSprite('#ff5a7a', 3);
      lt.position.set(s.x + x, s.y + 23.8, s.z - 3);
      extra.add(lt);
      animated.push((dt, t) => { lt.material.opacity = 0.5 + 0.5 * Math.abs(Math.sin(t * 2.3 + x)); });
    }
  }

  return { groups, beacons, points, animated };
}
