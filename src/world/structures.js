import * as THREE from 'three';
import { GeoBuilder } from './geo.js';
import { MAT } from './materials.js';
import { heightAt, roadDist } from './terrain.js';
import { colliders } from './collision.js';
import { mulberry32, pick } from '../util.js';
import { HOUSES } from './characters.js';

const WALLS = ['#efe3c6', '#e9d2b0', '#d9e6d0', '#e8cfd0', '#cfd8e8', '#f2e8a8', '#f4ecd8'];
const ROOFS = ['#a83a2e', '#2f6f8a', '#6a4a8a', '#3a6b3a', '#8a5a2a', '#b2552a'];

// ---------- בית כפר ----------
export function addHouse(b, x, z, ry, rng, opts = {}) {
  const y = heightAt(x, z);
  const f = b.at(x, y - 0.3, z, ry);
  const w = opts.w || 5.5 + rng() * 3;
  const d = opts.d || 5 + rng() * 2.5;
  const two = opts.two ?? rng() < 0.35;
  const hgt = two ? 6.2 : 3.2;
  const wallC = opts.wall || pick(WALLS);
  const roofC = opts.roof || pick(ROOFS);
  f.box('stone', w + 0.5, 0.9, d + 0.5, { y: 0.45, color: '#8c877e' });
  f.box('plaster', w, hgt, d, { y: hgt / 2 + 0.6, color: wallC });
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) f.box('wood', 0.28, hgt, 0.28, { x: sx * w / 2, z: sz * d / 2, y: hgt / 2 + 0.6, color: '#5b3f26' });
  for (const sz of [-1, 1]) {
    f.box('wood', w + 0.2, 0.2, 0.2, { y: hgt + 0.55, z: sz * (d / 2 + 0.02), color: '#5b3f26' });
    f.box('wood', w + 0.2, 0.18, 0.18, { y: 3.4 + 0.6, z: sz * (d / 2 + 0.02), color: '#5b3f26' });
  }
  if (two) {
    f.box('plaster', w + 0.7, 0.3, d + 0.7, { y: 3.9, color: wallC });
  }
  f.gable('roof', d, 2.6 + rng() * 0.8, w, { y: hgt + 0.6, ry: Math.PI / 2, color: roofC }, 0.55);
  // ארובה
  const cx = (rng() - 0.5) * w * 0.5;
  f.box('stone', 0.8, 2.6, 0.8, { x: cx, y: hgt + 2.0, z: -d * 0.15, color: '#9b9187' });
  f.box('stone', 1.0, 0.2, 1.0, { x: cx, y: hgt + 3.35, z: -d * 0.15, color: '#6f675e' });
  // דלת
  const dx = (rng() - 0.5) * (w - 3);
  f.box('wood', 1.2, 2.2, 0.2, { x: dx, y: 1.0 + 1.1, z: d / 2 + 0.05, color: '#6b4426' });
  f.box('wood', 1.5, 0.2, 0.3, { x: dx, y: 3.3, z: d / 2 + 0.08, color: '#4a3020' });
  f.box('stone', 1.8, 0.2, 0.9, { x: dx, y: 0.95, z: d / 2 + 0.5, color: '#9c968c' });
  f.sphere('glow', 0.12, { x: dx + 1.0, y: 2.7, z: d / 2 + 0.25, color: '#ffcf70' }, 6, 4);
  // חלונות
  const wins = Math.max(1, Math.floor(w / 2.8));
  for (let i = 0; i < wins; i++) {
    const wx = -w / 2 + (i + 0.5) * (w / wins);
    if (Math.abs(wx - dx) < 1.5) continue;
    for (const level of two ? [0, 1] : [0]) {
      const wy = 2.4 + level * 3.1;
      for (const sz of [-1, 1]) {
        if (sz < 0 && level === 1 && rng() < 0.3) continue;
        f.box('window', 0.9, 1.15, 0.12, { x: wx, y: wy, z: sz * (d / 2 + 0.03) });
        f.box('wood', 1.1, 0.12, 0.2, { x: wx, y: wy - 0.65, z: sz * (d / 2 + 0.08), color: '#5b3f26' });
        f.box('wood', 0.08, 1.2, 0.16, { x: wx, y: wy, z: sz * (d / 2 + 0.06), color: '#4a3020' });
      }
    }
  }
  for (const sx of [-1, 1]) f.box('window', 0.12, 1.1, 0.9, { x: sx * (w / 2 + 0.03), y: 2.4, z: 0 });
  b.collider({ type: 'box', x, z, hw: w / 2 + 0.3, hd: d / 2 + 0.3, rot: ry, top: y + hgt + 3.5 });
  return { w, d, hgt };
}

export function addLamp(b, x, z, h = 3.6) {
  const y = heightAt(x, z);
  b.cyl('metal', 0.07, 0.1, h, { x, y: y + h / 2, z, color: '#2b2a33' }, 6);
  b.sphere('glow', 0.22, { x, y: y + h + 0.1, z, color: '#ffd98a' }, 8, 6);
  b.cone('metal', 0.32, 0.25, { x, y: y + h + 0.42, z, color: '#2b2a33' }, 6);
  return { x, y: y + h + 0.1, z };
}

export function addWell(b, x, z) {
  const y = heightAt(x, z);
  const f = b.at(x, y, z, 0);
  f.cyl('stone', 1.3, 1.4, 1.2, { y: 0.6, color: '#a39d92' }, 14);
  f.cyl('wood', 1.0, 1.0, 0.1, { y: 1.1, color: '#2a4a60' }, 14);
  for (const sx of [-1, 1]) f.box('wood', 0.15, 2.5, 0.15, { x: sx * 1.1, y: 2.2, color: '#5b3f26' });
  f.gable('roof', 3, 0.9, 1.6, { y: 3.4, color: '#a83a2e' }, 0.3);
  b.collider({ type: 'circle', x, z, r: 1.5, top: y + 1.3 });
}

export function addStall(b, x, z, ry, color) {
  const y = heightAt(x, z);
  const f = b.at(x, y, z, ry);
  f.box('wood', 3.4, 0.9, 1.5, { y: 0.45, color: '#7a5330' });
  for (const sx of [-1, 1]) for (const sz of [-1, 1]) f.box('wood', 0.12, 2.8, 0.12, { x: sx * 1.6, z: sz * 0.7, y: 1.4, color: '#5b3f26' });
  f.box('cloth', 3.8, 0.1, 2.0, { y: 2.8, rx: 0.15, color });
  for (let i = 0; i < 5; i++) f.sphere('flat', 0.18, { x: -1.2 + i * 0.6, y: 1.05, z: 0.1, color: pick(['#d9402b', '#f0a82a', '#6ac24a', '#b04bd0']) }, 6, 4);
  b.collider({ type: 'box', x, z, hw: 1.9, hd: 0.9, rot: ry, top: y + 3 });
}

export function addFence(b, x1, z1, x2, z2) {
  const len = Math.hypot(x2 - x1, z2 - z1);
  const n = Math.max(1, Math.floor(len / 2));
  const ry = Math.atan2(-(z2 - z1), x2 - x1);
  for (let i = 0; i <= n; i++) {
    const x = x1 + ((x2 - x1) * i) / n, z = z1 + ((z2 - z1) * i) / n;
    const y = heightAt(x, z);
    b.box('wood', 0.14, 1.3, 0.14, { x, y: y + 0.6, z, color: '#6b4a2c' });
  }
  for (const hy of [0.45, 0.95]) {
    const mx = (x1 + x2) / 2, mz = (z1 + z2) / 2;
    const y = heightAt(mx, mz);
    b.box('wood', len, 0.1, 0.08, { x: mx, y: y + hy, z: mz, ry, color: '#7a5636' });
  }
}

// ---------- מגדל עגול ----------
export function roundTower(f, ox, oz, r, h, roofH, roofColor, opts = {}) {
  const { stone = '#bdb8ae', win = true, flag = null, base = 0 } = opts;
  f.cyl('stone', r, r * 1.12, h + base, { x: ox, z: oz, y: h / 2, color: stone }, 20);
  f.cyl('stone', r * 1.18, r * 1.05, 2.2, { x: ox, z: oz, y: h + 1.1, color: '#a8a398' }, 20);
  f.cone('roof', r * 1.45, roofH, { x: ox, z: oz, y: h + 2.2 + roofH / 2, color: roofColor }, 20);
  f.sphere('metal', r * 0.1 + 0.15, { x: ox, y: h + 2.2 + roofH + 0.1, z: oz, color: '#f0c850' }, 8, 6);
  if (win) {
    const rows = Math.floor(h / 9);
    for (let k = 0; k < rows; k++) {
      const wy = 7 + k * 8 + (k % 2) * 1.5;
      for (let i = 0; i < 4; i++) {
        const a = (i / 4) * Math.PI * 2 + k * 0.6;
        f.box('window', 1.1, 2.4, 0.5, { x: ox + Math.sin(a) * r * 1.01, z: oz + Math.cos(a) * r * 1.01, y: wy, ry: a });
        f.cone('stone', 0.75, 0.9, { x: ox + Math.sin(a) * r * 1.0, z: oz + Math.cos(a) * r * 1.0, y: wy + 1.5, ry: a, color: '#a8a398' }, 4);
      }
    }
  }
  const t = f.toWorld(ox, 0, oz);
  f.builder.colliders.push({ type: 'circle', x: t.x, z: t.z, r: r * 1.15, top: f.y + h + 4 });
  return { topY: h + 2.2 + roofH, x: ox, z: oz };
}

// ---------- הטירה ----------
export function buildCastle(site) {
  const b = new GeoBuilder();
  const y0 = site.y;
  const f = b.at(site.x, y0, site.z, 0);
  const STONE = '#b9b4aa';
  const DARK = '#8f8a82';
  const W = 78, D = 70, WH = 15, T = 4.5;
  const flags = [];

  // רצפת חצר
  f.box('stone', 2 * W + 20, 0.6, 2 * D + 20, { y: -0.2, color: '#9a968c' });
  // קירות היקפיים
  const wallBox = (x, z, w, d) => {
    f.box('stone', w, WH, d, { x, y: WH / 2, z, color: STONE });
    f.box('stone', w + 0.6, 1.2, d + 0.6, { x, y: WH + 0.6, z, color: DARK });
    b.colliders.push({ type: 'box', x: site.x + x, z: site.z + z, hw: w / 2, hd: d / 2, rot: 0, top: y0 + WH + 1.2 });
    // שיניים
    const horiz = w > d;
    const n = Math.floor((horiz ? w : d) / 3.2);
    for (let i = 0; i < n; i++) {
      const t = -(horiz ? w : d) / 2 + (i + 0.5) * ((horiz ? w : d) / n);
      for (const s of [-1, 1]) {
        if (horiz) f.box('stone', 1.6, 1.4, 0.9, { x: x + t, y: WH + 1.9, z: z + s * (d / 2 - 0.3), color: STONE });
        else f.box('stone', 0.9, 1.4, 1.6, { x: x + s * (w / 2 - 0.3), y: WH + 1.9, z: z + t, color: STONE });
      }
    }
  };
  const gate = 8;
  wallBox(0, -D, 2 * W, T); // צפון
  wallBox(-W, 0, T, 2 * D); // מערב
  wallBox(W, 0, T, 2 * D); // מזרח
  wallBox(-(W + gate) / 2, D, W - gate, T); // דרום שמאל
  wallBox((W + gate) / 2, D, W - gate, T); // דרום ימין
  // קשת שער
  f.box('stone', 2 * gate, 7, T + 1, { y: WH - 3.5 + 4, z: D, color: DARK });
  b.colliders.push({ type: 'box', x: site.x, z: site.z + D, hw: gate, hd: T / 2 + 0.5, rot: 0, top: y0 + WH + 1, y0: y0 + 9 });
  // דלתות פתוחות
  for (const s of [-1, 1]) f.box('wood', 0.5, 9, 3.2, { x: s * (gate + 0.3), y: 4.5, z: D + 3.2, ry: 0.5 * s, color: '#4a3220' });

  // מגדלי פינות ושער
  const corner = [[-W, -D], [W, -D], [-W, D], [W, D]];
  corner.forEach(([x, z], i) => {
    const r = roundTower(f, x, z, 8, 34 + (i % 2) * 6, 17, i % 2 ? '#2f5a9a' : '#8a2f3a');
    flags.push(f.toWorld(x, r.topY + 0.5, z));
  });
  for (const s of [-1, 1]) {
    const r = roundTower(f, s * (gate + 5), D, 6, 28, 14, '#2f5a9a');
    flags.push(f.toWorld(s * (gate + 5), r.topY + 0.5, D));
  }
  for (const [x, z] of [[0, -D], [-W, -D / 2], [W, -D / 2], [-W, D / 2], [W, D / 2], [-W / 2, -D], [W / 2, -D]]) roundTower(f, x, z, 5, 26, 12, '#6a3f8a', { win: false });

  // אולם גדול
  const hallZ = 22;
  f.box('stone', 56, 17, 22, { y: 8.5, z: hallZ, color: '#c6c1b6' });
  f.gable('roof', 22, 12, 56, { y: 17, z: hallZ, ry: Math.PI / 2, color: '#37497a' }, 1.5);
  for (let i = 0; i < 7; i++) {
    for (const s of [-1, 1]) {
      f.box('window', 2.2, 8, 0.4, { x: -21 + i * 7, y: 9, z: hallZ + s * 11.05 });
      f.cone('stone', 1.6, 2.2, { x: -21 + i * 7, y: 14, z: hallZ + s * 11.05, rz: 0, color: '#a8a398' }, 4);
    }
    f.box('stone', 1.4, 15, 2.0, { x: -24.5 + i * 7, y: 7.5, z: hallZ + 11.4, color: '#a8a398' });
  }
  b.colliders.push({ type: 'box', x: site.x, z: site.z + hallZ, hw: 28.5, hd: 11.5, rot: 0, top: y0 + 30 });

  // מגדל מרכזי
  const keepX = 0, keepZ = -22;
  let r = roundTower(f, keepX, keepZ, 12, 62, 28, '#8a2f3a');
  flags.push(f.toWorld(keepX, r.topY + 1, keepZ));
  for (const [dx, dz] of [[-16, -8], [16, -8], [-14, -36], [14, -36]]) {
    r = roundTower(f, dx, dz, 4.6, 48 + Math.abs(dx), 18, '#2f5a9a');
    flags.push(f.toWorld(dx, r.topY + 0.5, dz));
  }
  // מגדל אסטרונומיה גבוה
  r = roundTower(f, 52, -42, 5.5, 74, 22, '#6a3f8a');
  flags.push(f.toWorld(52, r.topY + 0.5, -42));
  r = roundTower(f, -52, -45, 6, 66, 24, '#1f7a64');
  flags.push(f.toWorld(-52, r.topY + 0.5, -45));
  // גשרים מקורים
  for (const [x1, z1, x2, z2, hy] of [[-16, -8, 0, -22, 36], [0, -22, 16, -8, 42], [16, -8, 52, -42, 30]]) {
    const len = Math.hypot(x2 - x1, z2 - z1);
    const ang = Math.atan2(x2 - x1, z2 - z1);
    f.box('wood', 3.2, 3.4, len, { x: (x1 + x2) / 2, y: hy, z: (z1 + z2) / 2, ry: ang, color: '#6b4a2c' });
    f.gable('roof', 4.4, 1.8, len, { x: (x1 + x2) / 2, y: hy + 1.7, z: (z1 + z2) / 2, ry: ang, color: '#37497a' }, 0.2);
  }
  // כנסיה / בית הספר: מבנים קטנים בחצר
  addHouse(b, site.x + 38, site.z + 52, 0.2, mulberry32(3), { w: 8, d: 6, wall: '#e0d7be', roof: '#a83a2e', two: false });
  addHouse(b, site.x - 40, site.z + 50, -0.1, mulberry32(4), { w: 8, d: 6, wall: '#d7e2d0', roof: '#2f6f8a', two: false });
  // מזרקה
  f.cyl('stone', 5, 5.4, 1.2, { z: 48, y: 0.7, color: '#a8a398' }, 20);
  f.cyl('glow', 4.2, 4.2, 0.1, { z: 48, y: 1.2, color: '#4de1ff' }, 20);
  f.cyl('stone', 0.6, 0.9, 3.4, { z: 48, y: 2.2, color: '#a8a398' }, 10);
  f.sphere('glow', 0.5, { z: 48, y: 4.1, color: '#9ff3ff' }, 8, 6);
  b.colliders.push({ type: 'circle', x: site.x, z: site.z + 48, r: 5.6, top: y0 + 1.4 });

  // גשר אבן דרומי
  f.box('stone', 12, 0.8, 80, { y: 0.0, z: D + 42, color: '#a9a49a' });
  const g = b.build();
  g.userData.flags = flags;
  g.userData.colliders = b.colliders;
  return g;
}

// ---------- כפר ----------
export function buildVillage(site, count, seed, opts = {}) {
  const rng = mulberry32(seed);
  const b = new GeoBuilder();
  const lamps = [];
  const placed = [];
  const radius = opts.radius || site.r * 1.1;
  let tries = 0;
  while (placed.length < count && tries++ < count * 40) {
    const a = rng() * Math.PI * 2;
    const rr = (opts.minR || 14) + Math.sqrt(rng()) * radius;
    const x = site.x + Math.cos(a) * rr, z = site.z + Math.sin(a) * rr;
    if (placed.some((p) => Math.hypot(p.x - x, p.z - z) < 13)) continue;
    const h = heightAt(x, z);
    if (h < 1.8) continue;
    if (opts.avoid && opts.avoid(x, z)) continue;
    // בית מוסב מרכז הכפר
    const ry = -Math.atan2(site.z - z, site.x - x) + Math.PI / 2 + (rng() - 0.5) * 0.3;
    addHouse(b, x, z, ry, rng, opts.house || {});
    placed.push({ x, z });
    if (rng() < 0.6) lamps.push(addLamp(b, x + Math.cos(ry) * 4.5, z - Math.sin(ry) * 4.5));
  }
  addWell(b, site.x + 8, site.z + 6);
  for (let i = 0; i < 3; i++) {
    const a = (i / 3) * Math.PI * 2 + 0.7;
    addStall(b, site.x + Math.cos(a) * 14, site.z + Math.sin(a) * 14 + 8, -a + Math.PI / 2, pick(['#c23a3a', '#2f6fb0', '#e0a82a', '#7a3fc1']));
  }
  const g = b.build();
  g.userData.colliders = b.colliders;
  g.userData.lamps = lamps;
  return g;
}

// ---------- טחנת רוח ----------
export function buildWindmill(x, z) {
  const b = new GeoBuilder();
  const y = heightAt(x, z);
  const f = b.at(x, y, z, 0);
  f.cyl('stone', 3.2, 4.4, 4, { y: 2, color: '#b9b4aa' }, 12);
  f.cyl('plaster', 2.5, 3.2, 9, { y: 8.5, color: '#f1e6cb' }, 12);
  f.cone('roof', 3.6, 4.2, { y: 15, color: '#a83a2e' }, 12);
  f.box('window', 1.0, 1.6, 0.3, { y: 8, z: 2.6 });
  f.box('wood', 1.4, 2.4, 0.2, { y: 1.6, z: 4.05, color: '#6b4426' });
  b.colliders.push({ type: 'circle', x, z, r: 4.6, top: y + 18 });
  const g = b.build();
  // להבים מסתובבים
  const bladeB = new GeoBuilder();
  for (let i = 0; i < 4; i++) {
    const a = (i * Math.PI) / 2;
    bladeB.box('wood', 0.3, 9.5, 0.2, { x: Math.sin(a) * 4.8, y: Math.cos(a) * 4.8, color: '#5b3f26', rz: -a });
    bladeB.box('cloth', 1.8, 7, 0.06, { x: Math.sin(a) * 5.2 + Math.cos(a) * 1.1, y: Math.cos(a) * 5.2 - Math.sin(a) * 1.1, z: 0.1, rz: -a, color: '#f4efe0' });
  }
  const blades = bladeB.build();
  blades.position.set(0, 12, 4.2);
  const holder = new THREE.Group();
  holder.position.set(x, y, z);
  holder.add(blades);
  g.userData.blades = blades;
  g.userData.holder = holder;
  g.userData.colliders = b.colliders;
  return g;
}

// ---------- גלגל אבנים ----------
export function buildStones(site) {
  const b = new GeoBuilder();
  const rng = mulberry32(77);
  const y = site.y;
  const f = b.at(site.x, y, site.z, 0);
  const n = 12;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    const h = 4 + rng() * 3;
    f.box('stone', 1.8, h, 1.2, { x: Math.cos(a) * 14, z: Math.sin(a) * 14, y: h / 2, ry: -a + Math.PI / 2, rz: (rng() - 0.5) * 0.08, color: '#8f8b84' });
    b.colliders.push({ type: 'circle', x: site.x + Math.cos(a) * 14, z: site.z + Math.sin(a) * 14, r: 1.3, top: y + h });
    if (i % 3 === 0) f.box('stone', 1.8, 1, 5, { x: Math.cos(a + 0.26) * 14, z: Math.sin(a + 0.26) * 14, y: 6, ry: -a - 0.26 + Math.PI / 2, color: '#8f8b84' });
  }
  f.cyl('stone', 3.2, 3.5, 0.8, { y: 0.4, color: '#a8a398' }, 12);
  f.cyl('glow', 2.6, 2.6, 0.05, { y: 0.85, color: '#9a8cff' }, 20);
  return b.build();
}

// ---------- חורבות ----------
export function buildRuins(site) {
  const b = new GeoBuilder();
  const rng = mulberry32(99);
  const y = site.y;
  const f = b.at(site.x, y, site.z, 0);
  for (let i = 0; i < 14; i++) {
    const a = rng() * Math.PI * 2, r = 6 + rng() * 26;
    const h = 2 + rng() * 9;
    const broken = rng() < 0.5;
    const x = Math.cos(a) * r, z = Math.sin(a) * r;
    f.cyl('stone', 0.9, 1.0, h, { x, z, y: h / 2, color: '#a6a196' }, 10);
    if (!broken) f.box('stone', 2.4, 0.8, 2.4, { x, z, y: h + 0.4, color: '#8f8a82' });
    b.colliders.push({ type: 'circle', x: site.x + x, z: site.z + z, r: 1.1, top: y + h });
  }
  f.box('stone', 14, 1, 14, { y: 0.4, color: '#7c786f' });
  f.box('stone', 3, 6, 0.8, { x: 5, z: -8, y: 3, color: '#8f8a82' });
  return b.build();
}

// ---------- מגרש קווידיץ' ----------
export function buildPitch(site) {
  const b = new GeoBuilder();
  const y = site.y;
  const f = b.at(site.x, y, site.z, 0);
  f.cyl('flat', 62, 62, 0.15, { y: 0.07, color: '#59b04a' }, 40);
  f.cyl('flat', 30, 30, 0.17, { y: 0.09, color: '#68c157' }, 40);
  const hoops = [];
  for (const s of [-1, 1]) {
    for (const k of [-1, 0, 1]) {
      const x = s * 52, z = k * 12, hh = 15 + (k === 0 ? 4 : 0);
      f.cyl('metal', 0.18, 0.22, hh, { x, z, y: hh / 2, color: '#e8c24a' }, 8);
      hoops.push({ x: site.x + x, y: y + hh + 3, z: site.z + z, s });
      b.geometry('metal', new THREE.TorusGeometry(2.6, 0.2, 8, 28), { x: site.x + x, y: y + hh + 3, z: site.z + z, ry: Math.PI / 2, color: '#ffd84a' });
    }
  }
  // יציע
  for (const s of [-1, 1]) {
    for (let i = 0; i < 5; i++) f.box('wood', 70, 1, 3, { x: 0, y: 1.2 + i * 1.2, z: s * (58 + i * 3), color: i % 2 ? '#7a5330' : '#8a6038' });
    for (const px of [-35, 0, 35]) {
      f.cyl('wood', 0.3, 0.3, 14, { x: px, z: s * 70, y: 7, color: '#5b3f26' }, 6);
      f.cone('cloth', 3, 6, { x: px, y: 17, z: s * 70, color: s < 0 ? '#b3262e' : '#2a5fc1' }, 4);
    }
  }
  const g = b.build();
  g.userData.hoops = hoops;
  g.userData.colliders = b.colliders;
  return g;
}
