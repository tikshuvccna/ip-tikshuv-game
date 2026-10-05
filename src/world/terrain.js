import * as THREE from 'three';
import { clamp, lerp, smoothstep, fbm, noise2, ridged } from '../util.js';
import { WORLD_R, SITES, PEAKS, LAKES, ROADS, CAUSEWAYS, ENCHANTED_FOREST, AUTUMN, SWAMP } from './sites.js';

// ---------------- פונקציית גובה ----------------
function baseHeight(x, z) {
  const d = Math.hypot(x, z) / WORLD_R;
  const fall = smoothstep(1.0, 0.6, d);
  let land =
    16 +
    fbm(x * 0.0035 + 7, z * 0.0035, 4) * 15 +
    fbm(x * 0.011, z * 0.011 + 9, 3) * 4 +
    noise2(x * 0.04, z * 0.04) * 0.7 +
    fbm(x * 0.0009 + 50, z * 0.0009 - 30, 3) * 22;
  for (let i = 0; i < PEAKS.length; i++) {
    const p = PEAKS[i];
    const dd = Math.hypot(x - p.x, z - p.z) / p.r;
    if (dd < 1) {
      const k = smoothstep(1, 0, dd);
      const rg = 0.65 + 0.7 * ridged(x * 0.003 + i * 7, z * 0.003, 4);
      land += p.h * k * k * rg * 1.15;
    }
  }
  let h = land * fall - (1 - fall) * 70;
  for (let i = 0; i < LAKES.length; i++) {
    const L = LAKES[i];
    const dd = Math.hypot(x - L.x, z - L.z) / L.r + noise2(x * 0.006 + i, z * 0.006) * 0.16;
    if (dd < 1.1) h = lerp(h, L.depth, smoothstep(1.0, 0.5, dd));
  }
  return h;
}

for (const s of SITES) {
  if (s.y === undefined) s.y = baseHeight(s.x, s.z);
}

export function heightAt(x, z) {
  let h = baseHeight(x, z);
  for (let i = 0; i < SITES.length; i++) {
    const s = SITES[i];
    const dx = x - s.x, dz = z - s.z;
    if (Math.abs(dx) > s.r + s.blend || Math.abs(dz) > s.r + s.blend) continue;
    const d = Math.hypot(dx, dz);
    if (d < s.r + s.blend) h = lerp(h, s.y, 1 - smoothstep(s.r, s.r + s.blend, d));
  }
  for (let i = 0; i < CAUSEWAYS.length; i++) {
    const c = CAUSEWAYS[i];
    const dist = distSeg(x, z, c.a[0], c.a[1], c.b[0], c.b[1]);
    if (dist < c.w + 6) {
      const k = 1 - smoothstep(c.w, c.w + 6, dist);
      h = lerp(h, Math.max(h, c.y), k);
    }
  }
  return h;
}

export function distSeg(px, pz, ax, az, bx, bz) {
  const abx = bx - ax, abz = bz - az;
  const t = clamp(((px - ax) * abx + (pz - az) * abz) / (abx * abx + abz * abz || 1), 0, 1);
  return Math.hypot(px - (ax + abx * t), pz - (az + abz * t));
}

export function roadDist(x, z) {
  let best = 1e9;
  for (let r = 0; r < ROADS.length; r++) {
    const pts = ROADS[r];
    for (let i = 0; i < pts.length - 1; i++) {
      const d = distSeg(x, z, pts[i][0], pts[i][1], pts[i + 1][0], pts[i + 1][1]);
      if (d < best) best = d;
    }
  }
  for (const c of CAUSEWAYS) best = Math.min(best, distSeg(x, z, c.a[0], c.a[1], c.b[0], c.b[1]) - 1);
  return best;
}

export function slopeAt(x, z, h0) {
  const e = 2.5;
  const h = h0 === undefined ? heightAt(x, z) : h0;
  const dx = heightAt(x + e, z) - h;
  const dz = heightAt(x, z + e) - h;
  return Math.hypot(dx, dz) / e;
}

// מסכות אזור
const circleMask = (c, x, z) => 1 - smoothstep(c.r * 0.55, c.r, Math.hypot(x - c.x, z - c.z));
export const enchantedMask = (x, z) => circleMask(ENCHANTED_FOREST, x, z);
export const autumnMask = (x, z) => circleMask(AUTUMN, x, z);
export const swampMask = (x, z) => circleMask(SWAMP, x, z);

export function forestDensity(x, z) {
  const n = fbm(x * 0.0016 + 300, z * 0.0016 - 120, 4) * 0.5 + 0.5;
  let d = smoothstep(0.42, 0.62, n);
  d = Math.max(d, enchantedMask(x, z) * 0.95, autumnMask(x, z) * 0.8);
  d = Math.max(d, swampMask(x, z) * 0.28);
  return d;
}

// ---------------- צבעים ----------------
const C = {
  grassA: new THREE.Color('#3f9a3a'),
  grassB: new THREE.Color('#79b83f'),
  grassDry: new THREE.Color('#b0b64a'),
  forest: new THREE.Color('#2a6b36'),
  enchant: new THREE.Color('#1f7a64'),
  autumnA: new THREE.Color('#c97a2c'),
  autumnB: new THREE.Color('#9a4a22'),
  swampA: new THREE.Color('#4f6b3a'),
  swampB: new THREE.Color('#2f4d44'),
  sand: new THREE.Color('#e5d69a'),
  wetSand: new THREE.Color('#a89a6a'),
  seabed: new THREE.Color('#2f6a77'),
  rock: new THREE.Color('#7b756d'),
  rockDark: new THREE.Color('#5a5650'),
  snow: new THREE.Color('#f2f6ff'),
  path: new THREE.Color('#c0a370'),
  cobble: new THREE.Color('#a9a79f'),
};
const tmp = new THREE.Color();

export function colorAt(x, z, h, slope, out) {
  const n1 = fbm(x * 0.01, z * 0.01, 3) * 0.5 + 0.5;
  const n2 = noise2(x * 0.09, z * 0.09) * 0.5 + 0.5;
  // דשא בסיסי
  out.copy(C.grassA).lerp(C.grassB, smoothstep(0.35, 0.7, n1));
  out.lerp(C.grassDry, smoothstep(0.62, 0.9, fbm(x * 0.004 + 40, z * 0.004, 2) * 0.5 + 0.5) * 0.5);
  // יער
  const fd = forestDensity(x, z);
  out.lerp(C.forest, fd * 0.6);
  out.lerp(C.enchant, enchantedMask(x, z) * 0.55);
  const am = autumnMask(x, z);
  if (am > 0) out.lerp(tmp.copy(C.autumnA).lerp(C.autumnB, n1), am * 0.8);
  const sm = swampMask(x, z);
  if (sm > 0) out.lerp(tmp.copy(C.swampA).lerp(C.swampB, n2), sm * 0.85);
  // חול וחופים
  if (h < 3.2) {
    const beach = smoothstep(3.2, 1.0, h);
    out.lerp(C.sand, beach * (1 - sm * 0.7));
    out.lerp(C.wetSand, smoothstep(0.9, -0.2, h) * 0.8);
  }
  if (h < -0.2) out.lerp(C.seabed, smoothstep(-0.2, -6, h));
  // סלע
  const rockK = Math.max(smoothstep(0.55, 1.0, slope), smoothstep(110, 190, h + n2 * 25) * 0.9);
  if (rockK > 0) out.lerp(tmp.copy(C.rock).lerp(C.rockDark, n2), rockK);
  // שלג
  const snowK = smoothstep(215, 250, h + (n1 - 0.5) * 40) * (1 - smoothstep(1.1, 1.6, slope) * 0.6);
  if (snowK > 0) out.lerp(C.snow, snowK);
  // שבילים
  const rd = roadDist(x, z);
  if (rd < 5) {
    const k = 1 - smoothstep(2.2, 4.6, rd + (n2 - 0.5) * 1.6);
    if (k > 0) out.lerp(h > 1.2 && h < 3 && rd < 0 ? C.cobble : C.path, k * 0.85 * (1 - rockK * 0.5));
  }
  // וריאציה עדינה
  const v = 0.92 + n2 * 0.16;
  out.r *= v; out.g *= v; out.b *= v;
  return out;
}

// ---------------- טקסטורת פרט ----------------
export function makeDetailTexture() {
  const S = 256;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const g = c.getContext('2d');
  const img = g.createImageData(S, S);
  const N = (x, y) => fbm(x * 0.045 + 11, y * 0.045 + 3, 4) * 0.5 + 0.5 + noise2(x * 0.35, y * 0.35) * 0.08;
  for (let y = 0; y < S; y++) {
    for (let x = 0; x < S; x++) {
      const u = x / S, v = y / S;
      const a = lerp(lerp(N(x, y), N(x - S, y), u), lerp(N(x, y - S), N(x - S, y - S), u), v);
      const val = clamp(0.62 + a * 0.5, 0, 1) * 255;
      const i = (y * S + x) * 4;
      img.data[i] = img.data[i + 1] = img.data[i + 2] = val;
      img.data[i + 3] = 255;
    }
  }
  g.putImageData(img, 0, 0);
  const tex = new THREE.CanvasTexture(c);
  tex.wrapS = tex.wrapT = THREE.RepeatWrapping;
  tex.colorSpace = THREE.NoColorSpace;
  tex.anisotropy = 8;
  return tex;
}

// ---------------- אריחי שטח (Quadtree + LOD) ----------------
const SEG = 32;
const MIN_TILE = 64;
const ROOT = 8192;

export class Terrain {
  constructor(scene, quality = 1) {
    this.scene = scene;
    this.tiles = new Map();
    this.queue = [];
    this.quality = quality;
    const tex = makeDetailTexture();
    this.material = new THREE.MeshStandardMaterial({
      vertexColors: true,
      roughness: 1,
      metalness: 0,
      map: tex,
      bumpMap: tex,
      bumpScale: 1.4,
      polygonOffset: true,
      polygonOffsetFactor: 1,
      polygonOffsetUnits: 1,
    });
    this.group = new THREE.Group();
    scene.add(this.group);
    this.desired = new Set();
  }

  key(size, cx, cz) {
    return size + '_' + cx + '_' + cz;
  }

  build(size, cx, cz) {
    const n = SEG + 1;
    const step = size / SEG;
    const x0 = cx - size / 2, z0 = cz - size / 2;
    const skirt = Math.max(2.5, size * 0.035);
    const body = n * n;
    const total = body + n * 4;
    const pos = new Float32Array(total * 3);
    const nor = new Float32Array(total * 3);
    const col = new Float32Array(total * 3);
    const uv = new Float32Array(total * 2);
    const c = new THREE.Color();
    const heights = new Float32Array(body);
    for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) heights[j * n + i] = heightAt(x0 + i * step, z0 + j * step);
    for (let j = 0; j < n; j++) {
      for (let i = 0; i < n; i++) {
        const k = j * n + i;
        const x = x0 + i * step, z = z0 + j * step;
        const hh = heights[k];
        pos[k * 3] = x; pos[k * 3 + 1] = hh; pos[k * 3 + 2] = z;
        const hl = i > 0 ? heights[k - 1] : heightAt(x - step, z);
        const hr = i < SEG ? heights[k + 1] : heightAt(x + step, z);
        const hu = j > 0 ? heights[k - n] : heightAt(x, z - step);
        const hd = j < SEG ? heights[k + n] : heightAt(x, z + step);
        const nx = hl - hr, nz = hu - hd, ny = 2 * step;
        const l = Math.hypot(nx, ny, nz);
        nor[k * 3] = nx / l; nor[k * 3 + 1] = ny / l; nor[k * 3 + 2] = nz / l;
        const slope = Math.hypot(hr - hl, hd - hu) / (2 * step);
        colorAt(x, z, hh, slope, c);
        col[k * 3] = c.r; col[k * 3 + 1] = c.g; col[k * 3 + 2] = c.b;
        uv[k * 2] = x * 0.11; uv[k * 2 + 1] = z * 0.11;
      }
    }
    // חצאיות (מסתירות סדקים בין רמות פירוט)
    const idx = [];
    for (let j = 0; j < SEG; j++) {
      for (let i = 0; i < SEG; i++) {
        const a = j * n + i, b = a + 1, d = a + n, e = d + 1;
        idx.push(a, d, b, b, d, e);
      }
    }
    let s = body;
    const edge = (getK) => {
      const first = s;
      for (let t = 0; t < n; t++) {
        const k = getK(t);
        pos[s * 3] = pos[k * 3]; pos[s * 3 + 1] = pos[k * 3 + 1] - skirt; pos[s * 3 + 2] = pos[k * 3 + 2];
        nor[s * 3] = nor[k * 3]; nor[s * 3 + 1] = nor[k * 3 + 1]; nor[s * 3 + 2] = nor[k * 3 + 2];
        col[s * 3] = col[k * 3]; col[s * 3 + 1] = col[k * 3 + 1]; col[s * 3 + 2] = col[k * 3 + 2];
        uv[s * 2] = uv[k * 2]; uv[s * 2 + 1] = uv[k * 2 + 1];
        s++;
      }
      return first;
    };
    const f0 = edge((t) => t); // z מינימלי
    const f1 = edge((t) => SEG * n + t);
    const f2 = edge((t) => t * n);
    const f3 = edge((t) => t * n + SEG);
    for (let t = 0; t < SEG; t++) {
      idx.push(t, f0 + t, t + 1, t + 1, f0 + t, f0 + t + 1);
      idx.push(SEG * n + t, SEG * n + t + 1, f1 + t, SEG * n + t + 1, f1 + t + 1, f1 + t);
      idx.push(t * n, (t + 1) * n, f2 + t, (t + 1) * n, f2 + t + 1, f2 + t);
      idx.push(t * n + SEG, f3 + t, (t + 1) * n + SEG, (t + 1) * n + SEG, f3 + t, f3 + t + 1);
    }
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(pos, 3));
    geo.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(col, 3));
    geo.setAttribute('uv', new THREE.BufferAttribute(uv, 2));
    geo.setIndex(idx);
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(cx, 60, cz), size * 0.75 + 300);
    geo.boundingBox = new THREE.Box3(new THREE.Vector3(x0, -80, z0), new THREE.Vector3(x0 + size, 420, z0 + size));
    const mesh = new THREE.Mesh(geo, this.material);
    mesh.receiveShadow = true;
    mesh.frustumCulled = true;
    mesh.matrixAutoUpdate = false;
    mesh.visible = false;
    this.group.add(mesh);
    return mesh;
  }

  collect(size, cx, cz, cam, out) {
    // מרחק תלת-ממדי למרכז האריח
    const dx = cam.x - cx, dz = cam.z - cz;
    const dy = Math.max(0, cam.y) * 0.8;
    const ex = Math.max(0, Math.abs(dx) - size / 2), ez = Math.max(0, Math.abs(dz) - size / 2);
    const dist = Math.hypot(ex, ez, dy);
    const outside = Math.hypot(cx, cz) - size * 0.71 > WORLD_R * 1.05;
    if (outside) return;
    if (size > MIN_TILE && dist < size * 1.15) {
      const h = size / 2, q = size / 4;
      this.collect(h, cx - q, cz - q, cam, out);
      this.collect(h, cx + q, cz - q, cam, out);
      this.collect(h, cx - q, cz + q, cam, out);
      this.collect(h, cx + q, cz + q, cam, out);
    } else out.push({ size, cx, cz, dist });
  }

  update(cam, budgetMs = 6) {
    const want = [];
    this.collect(ROOT, 0, 0, cam, want);
    const desired = new Set();
    const missing = [];
    for (const t of want) {
      const k = this.key(t.size, t.cx, t.cz);
      desired.add(k);
      if (!this.tiles.has(k)) missing.push({ ...t, k });
    }
    missing.sort((a, b) => a.dist - b.dist);
    const t0 = performance.now();
    let built = 0;
    for (const m of missing) {
      if (built > 0 && performance.now() - t0 > budgetMs) break;
      const mesh = this.build(m.size, m.cx, m.cz);
      mesh.userData = { size: m.size, cx: m.cx, cz: m.cz, born: performance.now() };
      this.tiles.set(m.k, mesh);
      built++;
    }
    // קביעת נראות: מבוקש ונבנה, או שמחזיק מקום עד שהחדשים מוכנים
    const keep = new Set();
    for (const t of want) {
      const k = this.key(t.size, t.cx, t.cz);
      if (this.tiles.has(k)) keep.add(k);
      else {
        // חפש אב קדמון קיים
        let s = t.size * 2, cx = t.cx, cz = t.cz, found = false;
        while (s <= ROOT) {
          const px = Math.floor((cx + ROOT / 2) / s) * s + s / 2 - ROOT / 2, pz = Math.floor((cz + ROOT / 2) / s) * s + s / 2 - ROOT / 2;
          const pk = this.key(s, px, pz);
          if (this.tiles.has(pk)) { keep.add(pk); found = true; break; }
          s *= 2;
        }
        if (!found) {
          // חפש צאצאים קיימים
          const stack = [[t.size, t.cx, t.cz]];
          while (stack.length) {
            const [sz, x, z] = stack.pop();
            if (sz <= MIN_TILE / 2) continue;
            const hh = sz / 2, q = sz / 4;
            for (const [ox, oz] of [[-q, -q], [q, -q], [-q, q], [q, q]]) {
              const ck = this.key(hh, x + ox, z + oz);
              if (this.tiles.has(ck)) keep.add(ck);
              else stack.push([hh, x + ox, z + oz]);
            }
          }
        }
      }
    }
    this.desired = desired;
    const now = performance.now();
    for (const [k, mesh] of this.tiles) {
      const vis = keep.has(k);
      mesh.visible = vis;
      if (!vis && now - mesh.userData.born > 20000 && !desired.has(k)) {
        this.group.remove(mesh);
        mesh.geometry.dispose();
        this.tiles.delete(k);
      }
    }
    return missing.length - built;
  }
}
