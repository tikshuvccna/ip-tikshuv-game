import * as THREE from 'three';
import { GeoBuilder } from './geo.js';
import { MAT } from './materials.js';
import { heightAt, slopeAt, forestDensity, roadDist, enchantedMask, autumnMask, swampMask } from './terrain.js';
import { SITES } from './sites.js';
import { colliders } from './collision.js';
import { mulberry32, hash2, clamp } from '../util.js';

const CELL = 128;

// ---------- גאומטריות ----------
function mkPine(detail = true) {
  const b = new GeoBuilder();
  if (detail) {
    b.cyl('leaf', 0.25, 0.42, 2.6, { y: 1.3, color: '#5b3d27' }, 6);
    b.cone('leaf', 2.7, 3.6, { y: 3.4, color: '#2e6b3c' }, 7);
    b.cone('leaf', 2.2, 3.2, { y: 5.4, color: '#347a42' }, 7);
    b.cone('leaf', 1.6, 2.8, { y: 7.2, color: '#3b8a49' }, 7);
    b.cone('leaf', 0.95, 2.3, { y: 8.9, color: '#46985a' }, 7);
  } else {
    b.cone('leaf', 2.6, 10, { y: 5.5, color: '#2f7040' }, 5);
  }
  return b;
}
function mkOak(detail = true) {
  const b = new GeoBuilder();
  if (detail) {
    b.cyl('leaf', 0.35, 0.6, 3.4, { y: 1.7, color: '#6a4a2e' }, 7);
    b.cyl('leaf', 0.18, 0.3, 2, { y: 3.8, rz: 0.6, x: 0.5, color: '#6a4a2e' }, 5);
    b.ico('leaf', 2.9, { y: 5.4, color: '#4fa845' });
    b.ico('leaf', 2.1, { x: 1.9, y: 4.6, z: 0.6, color: '#5ab84c' });
    b.ico('leaf', 2.3, { x: -1.7, y: 4.8, z: -0.8, color: '#44983f' });
    b.ico('leaf', 1.9, { x: 0.3, y: 6.9, z: 0.4, color: '#66c455' });
    b.ico('leaf', 1.6, { x: -0.4, y: 4.4, z: 1.9, color: '#4aa043' });
  } else {
    b.cyl('leaf', 0.4, 0.6, 3.4, { y: 1.7, color: '#6a4a2e' }, 5);
    b.ico('leaf', 3.4, { y: 5.6, color: '#4fa845' }, 0);
  }
  return b;
}
function mkBush() {
  const b = new GeoBuilder();
  b.ico('leaf', 0.8, { y: 0.45, sy: 0.75, color: '#3f9040' });
  b.ico('leaf', 0.55, { x: 0.6, y: 0.35, z: 0.2, color: '#4aa046' });
  b.ico('leaf', 0.5, { x: -0.5, y: 0.35, z: -0.3, color: '#37823a' });
  return b;
}
function mkRock() {
  const b = new GeoBuilder();
  b.ico('leaf', 1.0, { y: 0.35, sy: 0.7, sx: 1.25, color: '#8a857c' }, 0);
  b.ico('leaf', 0.55, { x: 0.9, y: 0.2, z: 0.3, sy: 0.7, color: '#77736b' }, 0);
  return b;
}
function mkMushroom() {
  const b = new GeoBuilder();
  b.cyl('glow', 0.07, 0.1, 0.45, { y: 0.22, color: '#e9e0ff' }, 5);
  b.sphere('glow', 0.28, { y: 0.5, sy: 0.55, color: '#7fe3ff' }, 8, 5);
  b.sphere('glow', 0.1, { y: 0.62, x: 0.1, sy: 0.6, color: '#ff9ff0' }, 5, 4);
  return b;
}
function mkFlower() {
  const b = new GeoBuilder();
  b.cyl('flat', 0.015, 0.02, 0.45, { y: 0.22, color: '#3a9a3a' }, 3);
  b.sphere('flat', 0.1, { y: 0.48, sy: 0.6, color: '#ffffff' }, 6, 4);
  return b;
}

// בניית InstancedMesh מגאומטריה ממוזגת
function bakeGeo(builder) {
  const group = builder.build();
  const mesh = group.children[0];
  return { geo: mesh.geometry, matKey: Object.keys(builder.parts)[0], parts: group.children };
}

export class Props {
  constructor(scene, quality) {
    this.scene = scene;
    this.group = new THREE.Group();
    scene.add(this.group);
    this.cells = new Map();
    this.quality = quality; // 0..2
    this.setQuality(quality);
    const bake = (b) => {
      const g = b.build();
      const m = g.children[0];
      return { geo: m.geometry, mat: m.material };
    };
    this.geos = {
      pine: bake(mkPine(true)), pineLow: bake(mkPine(false)),
      oak: bake(mkOak(true)), oakLow: bake(mkOak(false)),
      bush: bake(mkBush()), rock: bake(mkRock()),
      mushroom: bake(mkMushroom()), flower: bake(mkFlower()),
    };
  }

  setQuality(q) {
    this.quality = q;
    this.far = [520, 800, 1100][q];
    this.near = [200, 300, 380][q];
    this.density = [0.55, 0.8, 1][q];
    for (const [, c] of this.cells) this.dispose(c);
    this.cells.clear();
  }

  mesh(def, count, tint) {
    const m = new THREE.InstancedMesh(def.geo, def.mat, count);
    m.frustumCulled = true;
    return m;
  }

  generate(cx, cz, lod) {
    const rng = mulberry32(((cx * 73856093) ^ (cz * 19349663)) >>> 0);
    const x0 = cx * CELL, z0 = cz * CELL;
    const lists = { pine: [], oak: [], bush: [], rock: [], mushroom: [] };
    const near = lod === 0;
    const candidates = Math.round((near ? 140 : 70) * this.density);
    const cols = { pine: [], oak: [], bush: [], rock: [], mushroom: [] };
    const cl = [];
    for (let i = 0; i < candidates; i++) {
      const x = x0 + rng() * CELL, z = z0 + rng() * CELL;
      const roll = rng();
      const h = heightAt(x, z);
      if (h < 2.2) continue;
      let blocked = false;
      for (let s = 0; s < SITES.length; s++) {
        const S = SITES[s];
        if (Math.hypot(x - S.x, z - S.z) < S.r + S.blend * 0.4) { blocked = true; break; }
      }
      if (blocked) continue;
      if (roadDist(x, z) < 4.5) continue;
      const slope = slopeAt(x, z, h);
      if (slope > 0.75) continue;
      const fd = forestDensity(x, z);
      const em = enchantedMask(x, z), am = autumnMask(x, z), sm = swampMask(x, z);
      const high = h > 95;
      const tall = h > 190;
      const treeP = tall ? 0 : high ? fd * 0.5 : fd;
      if (roll < treeP * 0.85 || (fd < 0.2 && roll > 0.97 - 0.02 * (1 - fd))) {
        const scale = (0.75 + rng() * 0.8) * (near ? 1 : 1.25);
        const rotY = rng() * 6.28;
        const pinePref = high ? 1 : em > 0.2 ? 0.15 : am > 0.2 ? 0.2 : sm > 0.3 ? 0.1 : 0.4;
        const isPine = rng() < pinePref;
        const type = isPine ? 'pine' : 'oak';
        // צבע לפי אזור
        const c = new THREE.Color();
        if (isPine) {
          c.set(sm > 0.3 ? '#9aa070' : high ? '#cfe6e0' : '#ffffff');
          c.multiplyScalar(0.85 + rng() * 0.3);
        } else if (em > 0.25) {
          const k = rng();
          c.set(k < 0.4 ? '#7fd8ff' : k < 0.75 ? '#9a8cff' : '#6ee8b8');
        } else if (am > 0.25) {
          const k = rng();
          c.set(k < 0.35 ? '#ff8a2a' : k < 0.7 ? '#ffc23a' : '#e0452a');
        } else if (sm > 0.3) {
          c.set('#8a9a60').multiplyScalar(0.8 + rng() * 0.2);
        } else {
          c.set(rng() < 0.08 ? '#ffb7d0' : '#ffffff').multiplyScalar(0.82 + rng() * 0.35);
        }
        lists[type].push([x, h - 0.2, z, rotY, scale]);
        cols[type].push(c);
        if (near) cl.push({ type: 'circle', x, z, r: 0.55 * scale, top: h + 50 });
      } else if (near) {
        const r2 = rng();
        if (r2 < 0.45 && fd > 0.1) {
          lists.bush.push([x, h - 0.05, z, rng() * 6.28, 0.7 + rng() * 0.9]);
          cols.bush.push(new THREE.Color().setHSL(0.27 + (rng() - 0.5) * 0.06, 0.45, 0.45 + rng() * 0.15).multiplyScalar(2.1));
        } else if (r2 < 0.62 && (slope > 0.25 || high || rng() < 0.3)) {
          const sc = 0.6 + rng() * 1.8;
          lists.rock.push([x, h - 0.1, z, rng() * 6.28, sc]);
          cols.rock.push(new THREE.Color().setScalar(0.75 + rng() * 0.4));
          if (sc > 1.2) cl.push({ type: 'circle', x, z, r: sc * 0.9, top: h + sc * 0.8 });
        } else if (r2 < 0.8 && (em > 0.15 || sm > 0.2)) {
          lists.mushroom.push([x, h, z, rng() * 6.28, 0.8 + rng() * 1.4]);
          cols.mushroom.push(new THREE.Color().set(rng() < 0.5 ? '#ffffff' : '#c9b6ff'));
        }
      }
    }
    const cell = { cx, cz, lod, meshes: [], colliders: cl };
    const dummy = new THREE.Object3D();
    const make = (key, geoKey, shadow) => {
      const arr = lists[key];
      if (!arr.length) return;
      const m = this.mesh(this.geos[geoKey], arr.length);
      for (let i = 0; i < arr.length; i++) {
        const [x, y, z, ry, s] = arr[i];
        dummy.position.set(x, y, z);
        dummy.rotation.set(0, ry, 0);
        dummy.scale.setScalar(s);
        dummy.updateMatrix();
        m.setMatrixAt(i, dummy.matrix);
        m.setColorAt(i, cols[key][i]);
      }
      m.instanceMatrix.needsUpdate = true;
      if (m.instanceColor) m.instanceColor.needsUpdate = true;
      m.castShadow = shadow;
      m.receiveShadow = shadow;
      m.computeBoundingSphere();
      this.group.add(m);
      cell.meshes.push(m);
    };
    make('pine', near ? 'pine' : 'pineLow', near);
    make('oak', near ? 'oak' : 'oakLow', near);
    if (near) {
      make('bush', 'bush', false);
      make('rock', 'rock', true);
      make('mushroom', 'mushroom', false);
      colliders.addAll(cl);
    }
    return cell;
  }

  dispose(c) {
    for (const m of c.meshes) {
      this.group.remove(m);
      m.dispose();
    }
    colliders.removeAll(c.colliders);
  }

  update(pos, budgetMs = 5, flying = false) {
    const t0 = performance.now();
    if (budgetMs < 1000 && this._t && t0 - this._t < 120) return;
    this._t = t0;
    const pcx = Math.floor(pos.x / CELL), pcz = Math.floor(pos.z / CELL);
    const R = Math.ceil(this.far / CELL) + 1;
    const need = [];
    for (let i = -R; i <= R; i++) {
      for (let j = -R; j <= R; j++) {
        const cx = pcx + i, cz = pcz + j;
        const mx = (cx + 0.5) * CELL, mz = (cz + 0.5) * CELL;
        const d = Math.hypot(mx - pos.x, mz - pos.z);
        if (d > this.far) continue;
        need.push({ cx, cz, d, lod: d < this.near ? 0 : 1 });
      }
    }
    need.sort((a, b) => a.d - b.d);
    const keep = new Set();
    for (const n of need) {
      const k = n.cx + ',' + n.cz;
      keep.add(k);
      const c = this.cells.get(k);
      if (!c || c.lod !== n.lod) {
        if (performance.now() - t0 > budgetMs) continue;
        if (Math.hypot(n.cx * CELL, n.cz * CELL) > 3300) continue;
        if (c) this.dispose(c);
        this.cells.set(k, this.generate(n.cx, n.cz, n.lod));
      }
    }
    for (const [k, c] of this.cells) {
      if (!keep.has(k)) {
        const d = Math.hypot((c.cx + 0.5) * CELL - pos.x, (c.cz + 0.5) * CELL - pos.z);
        if (d > this.far + CELL * 2) {
          this.dispose(c);
          this.cells.delete(k);
        }
      }
    }
  }

  // טוען מיידית את הסביבה הקרובה (למסך הטעינה)
  prime(pos) {
    this.update(pos, 100000);
  }
}
