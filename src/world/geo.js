import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { MAT, UVSCALE } from './materials.js';

const m4 = new THREE.Matrix4();
const q = new THREE.Quaternion();
const e = new THREE.Euler();
const vS = new THREE.Vector3();
const vP = new THREE.Vector3();
const col = new THREE.Color();

// בונה גאומטריה ממוזגת לפי חומר: מצמצם קריאות ציור
export class GeoBuilder {
  constructor() {
    this.parts = {};
    this.colliders = [];
  }

  _push(matKey, geo, o, uvmode, uvs, cylR) {
    const { x = 0, y = 0, z = 0, rx = 0, ry = 0, rz = 0, sx = 1, sy = 1, sz = 1, color = '#ffffff' } = o;
    // UV לפני טרנספורם עבור צילינדרים
    if (uvmode === 'cyl') {
      const p = geo.attributes.position, uv = geo.attributes.uv;
      for (let i = 0; i < p.count; i++) {
        const a = Math.atan2(p.getX(i), p.getZ(i));
        uv.setXY(i, a * cylR * uvs, p.getY(i) * uvs);
      }
    }
    e.set(rx, ry, rz);
    q.setFromEuler(e);
    m4.compose(vP.set(x, y, z), q, vS.set(sx, sy, sz));
    if (o.parent) m4.premultiply(o.parent);
    geo.applyMatrix4(m4);
    if (uvmode === 'planar') {
      const p = geo.attributes.position, n = geo.attributes.normal, uv = geo.attributes.uv;
      for (let i = 0; i < p.count; i++) {
        const ax = Math.abs(n.getX(i)), ay = Math.abs(n.getY(i)), az = Math.abs(n.getZ(i));
        if (ay >= ax && ay >= az) uv.setXY(i, p.getX(i) * uvs, p.getZ(i) * uvs);
        else if (ax >= az) uv.setXY(i, p.getZ(i) * uvs, p.getY(i) * uvs);
        else uv.setXY(i, p.getX(i) * uvs, p.getY(i) * uvs);
      }
    }
    const c = col.set(color);
    const arr = new Float32Array(geo.attributes.position.count * 3);
    for (let i = 0; i < arr.length; i += 3) {
      arr[i] = c.r; arr[i + 1] = c.g; arr[i + 2] = c.b;
    }
    geo.setAttribute('color', new THREE.BufferAttribute(arr, 3));
    if (geo.index) geo = geo.toNonIndexed();
    (this.parts[matKey] ||= []).push(geo);
  }

  box(mat, w, h, d, o = {}) {
    const g = new THREE.BoxGeometry(w, h, d);
    this._push(mat, g, o, 'planar', UVSCALE[mat] ?? 0.3);
    return this;
  }

  cyl(mat, rTop, rBot, h, o = {}, seg = 14) {
    const g = new THREE.CylinderGeometry(rTop, rBot, h, seg);
    this._push(mat, g, o, 'cyl', UVSCALE[mat] ?? 0.3, (rTop + rBot) / 2);
    return this;
  }

  cone(mat, r, h, o = {}, seg = 14) {
    const g = new THREE.ConeGeometry(r, h, seg);
    this._push(mat, g, o, 'cyl', UVSCALE[mat] ?? 0.3, r * 0.6);
    return this;
  }

  sphere(mat, r, o = {}, ws = 14, hs = 10) {
    const g = new THREE.SphereGeometry(r, ws, hs);
    this._push(mat, g, o, 'planar', UVSCALE[mat] ?? 0.3);
    return this;
  }

  ico(mat, r, o = {}, detail = 1) {
    const g = new THREE.IcosahedronGeometry(r, detail);
    this._push(mat, g, o, 'planar', UVSCALE[mat] ?? 0.3);
    return this;
  }

  // גג דו-שיפועי: רכס לאורך z
  gable(mat, w, h, d, o = {}, overhang = 0.3) {
    const hw = w / 2 + overhang, hd = d / 2 + overhang;
    const v = [
      [-hw, 0, -hd], [hw, 0, -hd], [0, h, -hd],
      [-hw, 0, hd], [hw, 0, hd], [0, h, hd],
    ];
    const tris = [
      [0, 2, 1], [3, 4, 5], // קצוות
      [0, 3, 5], [0, 5, 2], // שמאל
      [1, 2, 5], [1, 5, 4], // ימין
      [0, 1, 4], [0, 4, 3], // תחתית
    ];
    const pos = [];
    for (const t of tris) for (const i of t) pos.push(...v[i]);
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
    g.computeVertexNormals();
    g.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array((pos.length / 3) * 2), 2));
    this._push(mat, g, o, 'planar', UVSCALE[mat] ?? 0.3);
    return this;
  }

  // מוסיף גאומטריה קיימת
  geometry(mat, geo, o = {}) {
    if (!geo.attributes.uv) geo.setAttribute('uv', new THREE.Float32BufferAttribute(new Float32Array(geo.attributes.position.count * 2), 2));
    if (!geo.attributes.normal) geo.computeVertexNormals();
    this._push(mat, geo, o, 'planar', UVSCALE[mat] ?? 0.3);
    return this;
  }

  // מסגרת מקומית: כל החלקים ממוקמים יחסית ל-(x,y,z) בסיבוב ry
  at(x, y, z, ry = 0, s = 1) {
    const parent = new THREE.Matrix4().compose(
      new THREE.Vector3(x, y, z),
      new THREE.Quaternion().setFromEuler(new THREE.Euler(0, ry, 0)),
      new THREE.Vector3(s, s, s)
    );
    const idx = { box: 4, cyl: 4, cone: 3, sphere: 2, ico: 2, gable: 4 };
    const w = { parent, builder: this, ry, x, y, z, s };
    for (const k in idx) {
      w[k] = (...args) => {
        while (args.length <= idx[k]) args.push(undefined);
        args[idx[k]] = { ...(args[idx[k]] || {}), parent };
        this[k](...args);
        return w;
      };
    }
    // המרה מקומית -> עולם
    w.toWorld = (ox, oy, oz) => {
      const v = new THREE.Vector3(ox, oy, oz).applyMatrix4(parent);
      return v;
    };
    // קופסת התנגשות מקומית
    w.collideBox = (ox, oz, hw, hd, top, extra = {}) => {
      const v = w.toWorld(ox, 0, oz);
      this.colliders.push({ type: 'box', x: v.x, z: v.z, hw, hd, rot: ry + (extra.rot || 0), top, y0: extra.y0 });
      return w;
    };
    w.collideCircle = (ox, oz, r, top, extra = {}) => {
      const v = w.toWorld(ox, 0, oz);
      this.colliders.push({ type: 'circle', x: v.x, z: v.z, r, top, y0: extra.y0 });
      return w;
    };
    return w;
  }

  collider(c) {
    this.colliders.push(c);
    return this;
  }

  build({ cast = true, receive = true } = {}) {
    const group = new THREE.Group();
    for (const key in this.parts) {
      const geo = mergeGeometries(this.parts[key], false);
      const mesh = new THREE.Mesh(geo, MAT[key]);
      mesh.castShadow = cast && key !== 'glow';
      mesh.receiveShadow = receive && key !== 'glow';
      group.add(mesh);
    }
    return group;
  }
}
