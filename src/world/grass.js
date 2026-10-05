import * as THREE from 'three';
import { heightAt, forestDensity, autumnMask, swampMask, enchantedMask } from './terrain.js';
import { SITES } from './sites.js';
import { hash2, noise2, clamp } from '../util.js';

function bladeTexture() {
  const c = document.createElement('canvas');
  c.width = 128; c.height = 128;
  const g = c.getContext('2d');
  g.clearRect(0, 0, 128, 128);
  for (let i = 0; i < 9; i++) {
    const x = 10 + i * 13 + (i % 2) * 3;
    const hgt = 70 + ((i * 37) % 50);
    const lean = ((i * 53) % 21) - 10;
    const grad = g.createLinearGradient(0, 128, 0, 128 - hgt);
    grad.addColorStop(0, '#2d5a1d');
    grad.addColorStop(1, '#d6f58a');
    g.fillStyle = grad;
    g.beginPath();
    g.moveTo(x - 4, 128);
    g.quadraticCurveTo(x + lean * 0.3, 128 - hgt * 0.6, x + lean, 128 - hgt);
    g.quadraticCurveTo(x + lean * 0.3 + 3, 128 - hgt * 0.6, x + 4, 128);
    g.closePath();
    g.fill();
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

function tuftGeometry() {
  const geos = [];
  for (let i = 0; i < 3; i++) {
    const g = new THREE.PlaneGeometry(1.1, 0.7, 1, 2);
    g.translate(0, 0.35, 0);
    g.rotateY((i * Math.PI) / 3);
    geos.push(g);
  }
  // מיזוג ידני
  const pos = [], uv = [], idx = [], nor = [];
  let off = 0;
  for (const g of geos) {
    pos.push(...g.attributes.position.array);
    uv.push(...g.attributes.uv.array);
    nor.push(...g.attributes.normal.array.map((v, k) => (k % 3 === 1 ? 1 : v * 0.3)));
    for (const i of g.index.array) idx.push(i + off);
    off += g.attributes.position.count;
  }
  const geo = new THREE.BufferGeometry();
  geo.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  geo.setAttribute('uv', new THREE.Float32BufferAttribute(uv, 2));
  // נורמלים כלפי מעלה לתאורה אחידה
  const up = new Float32Array(pos.length);
  for (let i = 1; i < up.length; i += 3) up[i] = 1;
  geo.setAttribute('normal', new THREE.BufferAttribute(up, 3));
  geo.setIndex(idx);
  return geo;
}

export class Grass {
  constructor(scene, quality) {
    this.scene = scene;
    this.uniforms = { uTime: { value: 0 } };
    const mat = new THREE.MeshStandardMaterial({
      map: bladeTexture(),
      alphaTest: 0.45,
      side: THREE.DoubleSide,
      roughness: 1,
    });
    mat.onBeforeCompile = (sh) => {
      sh.uniforms.uTime = this.uniforms.uTime;
      sh.vertexShader = sh.vertexShader
        .replace('#include <common>', '#include <common>\nuniform float uTime;')
        .replace(
          '#include <begin_vertex>',
          `#include <begin_vertex>
          vec4 iw = instanceMatrix * vec4(0.,0.,0.,1.);
          float sway = sin(uTime*1.8 + iw.x*0.35 + iw.z*0.27) * 0.09 + sin(uTime*3.1 + iw.x*0.9) * 0.03;
          transformed.x += sway * position.y * position.y * 2.2;
          transformed.z += sway * 0.6 * position.y * position.y * 2.2;`
        );
    };
    this.mat = mat;
    this.geo = tuftGeometry();
    this.flowerGeo = (() => {
      const g1 = new THREE.CylinderGeometry(0.012, 0.018, 0.5, 3).translate(0, 0.25, 0);
      const g2 = new THREE.SphereGeometry(0.1, 6, 4).scale(1, 0.6, 1).translate(0, 0.52, 0);
      const mk = (g, r, gg, b) => {
        const a = new Float32Array(g.attributes.position.count * 3);
        for (let i = 0; i < a.length; i += 3) { a[i] = r; a[i + 1] = gg; a[i + 2] = b; }
        g.setAttribute('color', new THREE.BufferAttribute(a, 3));
        return g.toNonIndexed();
      };
      const ga = mk(g1, 0.5, 0.9, 0.4), gb = mk(g2, 1, 1, 1);
      const pos = new Float32Array([...ga.attributes.position.array, ...gb.attributes.position.array]);
      const col = new Float32Array([...ga.attributes.color.array, ...gb.attributes.color.array]);
      const nor = new Float32Array([...ga.attributes.normal.array, ...gb.attributes.normal.array]);
      const g = new THREE.BufferGeometry();
      g.setAttribute('position', new THREE.BufferAttribute(pos, 3));
      g.setAttribute('color', new THREE.BufferAttribute(col, 3));
      g.setAttribute('normal', new THREE.BufferAttribute(nor, 3));
      return g;
    })();
    this.flowerMat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.8 });
    this.center = new THREE.Vector2(1e9, 1e9);
    this.job = null;
    this.group = new THREE.Group();
    scene.add(this.group);
    this.setQuality(quality);
  }

  setQuality(q) {
    this.quality = q;
    this.radius = [26, 34, 42][q];
    this.cap = [2600, 5200, 9000][q];
    if (this.mesh) {
      this.group.remove(this.mesh, this.fmesh);
      this.mesh.dispose();
      this.fmesh.dispose();
    }
    this.mesh = new THREE.InstancedMesh(this.geo, this.mat, this.cap);
    this.mesh.frustumCulled = false;
    this.mesh.count = 0;
    this.fcap = Math.floor(this.cap / 9);
    this.fmesh = new THREE.InstancedMesh(this.flowerGeo, this.flowerMat, this.fcap);
    this.fmesh.frustumCulled = false;
    this.fmesh.count = 0;
    this.group.add(this.mesh, this.fmesh);
    this.mesh.setColorAt(0, new THREE.Color());
    this.fmesh.setColorAt(0, new THREE.Color());
    this.center.set(1e9, 1e9);
    this.job = null;
  }

  startJob(cx, cz) {
    const sp = [1.45, 1.1, 0.9][this.quality];
    const n = Math.floor((this.radius * 2) / sp);
    this.job = {
      cx, cz, sp, n, i: 0,
      m: new Float32Array(this.cap * 16), c: new Float32Array(this.cap * 3), cnt: 0,
      fm: new Float32Array(this.fcap * 16), fc: new Float32Array(this.fcap * 3), fcnt: 0,
    };
  }

  step(budget) {
    const J = this.job;
    const total = J.n * J.n;
    const t0 = performance.now();
    const d = new THREE.Object3D();
    const col = new THREE.Color();
    const R2 = this.radius * this.radius;
    while (J.i < total) {
      if (performance.now() - t0 > budget) return false;
      for (let k = 0; k < 60 && J.i < total; k++, J.i++) {
        const gi = J.i % J.n, gj = Math.floor(J.i / J.n);
        const wx0 = Math.floor((J.cx - this.radius) / J.sp) + gi, wz0 = Math.floor((J.cz - this.radius) / J.sp) + gj;
        const x = (wx0 + hash2(wx0, wz0, 1)) * J.sp, z = (wz0 + hash2(wx0, wz0, 2)) * J.sp;
        const dx = x - J.cx, dz = z - J.cz;
        if (dx * dx + dz * dz > R2) continue;
        if (J.cnt >= this.cap) continue;
        const dens = 0.55 + noise2(x * 0.03, z * 0.03) * 0.5;
        if (hash2(wx0, wz0, 3) > dens) continue;
        const h = heightAt(x, z);
        if (h < 2.4) continue;
        let skip = false;
        for (let s = 0; s < SITES.length; s++) {
          const S = SITES[s];
          if (Math.abs(x - S.x) < S.r * 0.7 && Math.abs(z - S.z) < S.r * 0.7 && Math.hypot(x - S.x, z - S.z) < S.r * 0.7) { skip = true; break; }
        }
        if (skip) continue;
        if (h > 150) continue;
        const sm = swampMask(x, z), am = autumnMask(x, z), em = enchantedMask(x, z);
        const sc = (0.7 + hash2(wx0, wz0, 4) * 0.9) * (1 + em * 0.3);
        d.position.set(x, h - 0.04, z);
        d.rotation.set(0, hash2(wx0, wz0, 5) * 6.28, 0);
        d.scale.set(sc, sc * (0.8 + hash2(wx0, wz0, 6) * 0.7), sc);
        d.updateMatrix();
        d.matrix.toArray(J.m, J.cnt * 16);
        col.setRGB(0.75 + hash2(wx0, wz0, 7) * 0.4, 0.95 + hash2(wx0, wz0, 8) * 0.15, 0.7);
        if (am > 0) col.lerp(new THREE.Color('#ffb04a'), am * 0.8);
        if (sm > 0) col.lerp(new THREE.Color('#8a9a5a'), sm * 0.6);
        if (em > 0) col.lerp(new THREE.Color('#5ae0c0'), em * 0.5);
        col.toArray(J.c, J.cnt * 3);
        J.cnt++;
        // פרחים
        if (J.fcnt < this.fcap && hash2(wx0, wz0, 9) < 0.11 * (1 - sm)) {
          const fd = forestDensity(x, z);
          if (fd < 0.5) {
            d.position.set(x + 0.2, h - 0.02, z);
            d.scale.setScalar(0.8 + hash2(wx0, wz0, 10) * 0.7);
            d.updateMatrix();
            d.matrix.toArray(J.fm, J.fcnt * 16);
            const kk = hash2(wx0, wz0, 11);
            const cc = kk < 0.25 ? '#ff6f9c' : kk < 0.5 ? '#ffd23f' : kk < 0.75 ? '#ffffff' : '#9a7bff';
            col.set(cc).toArray(J.fc, J.fcnt * 3);
            J.fcnt++;
          }
        }
      }
    }
    // סיום – החלפה
    this.mesh.instanceMatrix.array.set(J.m.subarray(0, J.cnt * 16));
    this.mesh.instanceColor.array.set(J.c.subarray(0, J.cnt * 3));
    this.mesh.count = J.cnt;
    this.mesh.instanceMatrix.needsUpdate = true;
    this.mesh.instanceColor.needsUpdate = true;
    this.fmesh.instanceMatrix.array.set(J.fm.subarray(0, J.fcnt * 16));
    this.fmesh.instanceColor.array.set(J.fc.subarray(0, J.fcnt * 3));
    this.fmesh.count = J.fcnt;
    this.fmesh.instanceMatrix.needsUpdate = true;
    this.fmesh.instanceColor.needsUpdate = true;
    this.center.set(J.cx, J.cz);
    this.job = null;
    return true;
  }

  update(dt, t, focus, atmo) {
    this.uniforms.uTime.value = t;
    const ground = heightAt(focus.x, focus.z);
    const high = focus.y - ground > 22;
    this.group.visible = !high;
    if (high) return;
    if (!this.job) {
      const d = Math.hypot(focus.x - this.center.x, focus.z - this.center.y);
      if (d > this.radius * 0.22) this.startJob(Math.round(focus.x), Math.round(focus.z));
    }
    if (this.job) this.step(3);
  }
}
