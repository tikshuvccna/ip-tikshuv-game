import * as THREE from 'three';

let glowTex;
export function glowTexture() {
  if (glowTex) return glowTex;
  const c = document.createElement('canvas');
  c.width = c.height = 128;
  const g = c.getContext('2d');
  const gr = g.createRadialGradient(64, 64, 0, 64, 64, 64);
  gr.addColorStop(0, 'rgba(255,255,255,1)');
  gr.addColorStop(0.2, 'rgba(255,255,255,0.7)');
  gr.addColorStop(0.5, 'rgba(255,255,255,0.18)');
  gr.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = gr;
  g.fillRect(0, 0, 128, 128);
  glowTex = new THREE.CanvasTexture(c);
  glowTex.colorSpace = THREE.SRGBColorSpace;
  return glowTex;
}

export function glowSprite(color, size = 1, opacity = 1) {
  const m = new THREE.SpriteMaterial({
    map: glowTexture(), color, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true, opacity, toneMapped: false,
  });
  const s = new THREE.Sprite(m);
  s.scale.setScalar(size);
  return s;
}

// מערכת חלקיקים
export class Particles {
  constructor(scene, cap = 2500, additive = true) {
    this.cap = cap;
    this.i = 0;
    this.pos = new Float32Array(cap * 3);
    this.col = new Float32Array(cap * 3);
    this.size = new Float32Array(cap);
    this.alpha = new Float32Array(cap);
    this.vel = new Float32Array(cap * 3);
    this.life = new Float32Array(cap);
    this.maxLife = new Float32Array(cap).fill(1);
    this.s0 = new Float32Array(cap);
    this.s1 = new Float32Array(cap);
    this.grav = new Float32Array(cap);
    this.drag = new Float32Array(cap);
    this.pos.fill(0);
    for (let k = 0; k < cap; k++) this.pos[k * 3 + 1] = -9999;
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('color', new THREE.BufferAttribute(this.col, 3).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('size', new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage));
    geo.setAttribute('alpha', new THREE.BufferAttribute(this.alpha, 1).setUsage(THREE.DynamicDrawUsage));
    geo.boundingSphere = new THREE.Sphere(new THREE.Vector3(), 1e6);
    this.uniforms = { uScale: { value: 600 }, uMap: { value: glowTexture() } };
    const mat = new THREE.ShaderMaterial({
      transparent: true,
      depthWrite: false,
      blending: additive ? THREE.AdditiveBlending : THREE.NormalBlending,
      uniforms: this.uniforms,
      vertexShader: `
        attribute float size; attribute float alpha; attribute vec3 color;
        varying float vA; varying vec3 vC; uniform float uScale;
        void main(){ vA = alpha; vC = color; vec4 mv = modelViewMatrix*vec4(position,1.0);
          gl_PointSize = size * uScale / max(0.1,-mv.z); gl_Position = projectionMatrix*mv; }`,
      fragmentShader: `
        varying float vA; varying vec3 vC; uniform sampler2D uMap;
        void main(){ vec4 t = texture2D(uMap, gl_PointCoord); gl_FragColor = vec4(vC, t.a*vA);
          #include <colorspace_fragment>
        }`,
    });
    this.points = new THREE.Points(geo, mat);
    this.points.frustumCulled = false;
    scene.add(this.points);
    this.geo = geo;
  }

  emit(x, y, z, vx, vy, vz, color, size, life, o = {}) {
    const k = this.i;
    this.i = (this.i + 1) % this.cap;
    this.pos[k * 3] = x; this.pos[k * 3 + 1] = y; this.pos[k * 3 + 2] = z;
    this.vel[k * 3] = vx; this.vel[k * 3 + 1] = vy; this.vel[k * 3 + 2] = vz;
    this.life[k] = life; this.maxLife[k] = life;
    this.s0[k] = size; this.s1[k] = o.end ?? size * 0.2;
    this.grav[k] = o.gravity ?? 0;
    this.drag[k] = o.drag ?? 0;
    const c = color.isColor ? color : tmpC.set(color);
    this.col[k * 3] = c.r; this.col[k * 3 + 1] = c.g; this.col[k * 3 + 2] = c.b;
    this.alpha[k] = 1;
  }

  burst(x, y, z, color, n, speed, size, life, o = {}) {
    for (let i = 0; i < n; i++) {
      const a = Math.random() * 6.283, b = Math.acos(2 * Math.random() - 1);
      const s = speed * (0.3 + Math.random() * 0.7);
      this.emit(x, y, z, Math.sin(b) * Math.cos(a) * s, Math.cos(b) * s, Math.sin(b) * Math.sin(a) * s, color, size * (0.6 + Math.random() * 0.8), life * (0.6 + Math.random() * 0.6), o);
    }
  }

  update(dt) {
    const { pos, vel, life, maxLife, s0, s1, size, alpha, grav, drag } = this;
    for (let k = 0; k < this.cap; k++) {
      if (life[k] <= 0) {
        if (alpha[k] !== 0) { alpha[k] = 0; size[k] = 0; }
        continue;
      }
      life[k] -= dt;
      const t = 1 - life[k] / maxLife[k];
      const d = 1 - Math.min(1, drag[k] * dt);
      vel[k * 3] *= d; vel[k * 3 + 1] = vel[k * 3 + 1] * d - grav[k] * dt; vel[k * 3 + 2] *= d;
      pos[k * 3] += vel[k * 3] * dt; pos[k * 3 + 1] += vel[k * 3 + 1] * dt; pos[k * 3 + 2] += vel[k * 3 + 2] * dt;
      size[k] = s0[k] + (s1[k] - s0[k]) * t;
      alpha[k] = t < 0.1 ? t * 10 : 1 - (t - 0.1) / 0.9;
    }
    this.geo.attributes.position.needsUpdate = true;
    this.geo.attributes.color.needsUpdate = true;
    this.geo.attributes.size.needsUpdate = true;
    this.geo.attributes.alpha.needsUpdate = true;
  }

  setViewport(h) {
    this.uniforms.uScale.value = h * 0.5 * 1.1;
  }
}
const tmpC = new THREE.Color();

// טקסטורת טבעת רונות
export function runeTexture(color = '#4de1ff') {
  const S = 512;
  const c = document.createElement('canvas');
  c.width = c.height = S;
  const g = c.getContext('2d');
  g.translate(S / 2, S / 2);
  g.strokeStyle = color;
  g.fillStyle = color;
  g.lineWidth = 6;
  g.shadowColor = color;
  g.shadowBlur = 14;
  for (const r of [236, 214, 150]) {
    g.beginPath();
    g.arc(0, 0, r, 0, 7);
    g.stroke();
  }
  g.lineWidth = 3;
  const runes = 'ᚠᚢᚦᚨᚱᚲᚷᚹᚺᚾᛁᛃᛇᛈᛉᛊᛏᛒᛖᛗᛚᛜᛞᛟ';
  g.font = 'bold 34px serif';
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  const n = 24;
  for (let i = 0; i < n; i++) {
    const a = (i / n) * Math.PI * 2;
    g.save();
    g.rotate(a);
    g.translate(0, -182);
    g.fillText(runes[i % runes.length], 0, 0);
    g.restore();
  }
  // כוכב מרכזי
  g.beginPath();
  for (let i = 0; i < 10; i++) {
    const a = (i / 10) * Math.PI * 2 - Math.PI / 2;
    const r = i % 2 ? 62 : 130;
    g.lineTo(Math.cos(a) * r, Math.sin(a) * r);
  }
  g.closePath();
  g.stroke();
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 8;
  return t;
}

export function makeRuneRing(color, radius = 6) {
  const mat = new THREE.MeshBasicMaterial({
    map: runeTexture(color), transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, toneMapped: false,
  });
  const m = new THREE.Mesh(new THREE.PlaneGeometry(radius * 2, radius * 2), mat);
  m.rotation.x = -Math.PI / 2;
  return m;
}

// עמוד אור
export function makeBeacon(color, height = 320, radius = 3.2) {
  const mat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide,
    fog: false,
    uniforms: { uColor: { value: new THREE.Color(color) }, uTime: { value: 0 } },
    vertexShader: `varying vec2 vUv; varying vec3 vP; void main(){ vUv = uv; vP = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0);} `,
    fragmentShader: `varying vec2 vUv; varying vec3 vP; uniform vec3 uColor; uniform float uTime;
      void main(){
        float h = vUv.y; float a = pow(1.0-h, 1.6);
        float stripe = 0.65 + 0.35*sin(vUv.x*40.0 + uTime*1.5 + h*30.0 - uTime*3.0);
        float edge = 0.8;
        gl_FragColor = vec4(uColor*1.4, a*0.55*stripe*edge);
        #include <colorspace_fragment>
      }`,
  });
  const m = new THREE.Mesh(new THREE.CylinderGeometry(radius, radius * 1.6, height, 24, 1, true), mat);
  m.position.y = height / 2;
  m.frustumCulled = false;
  m.renderOrder = 8;
  return m;
}

export function labelTexture(text, { color = '#fff', bg = null, font = 'bold 64px Heebo, Arial, sans-serif', w = 512, h = 128 } = {}) {
  const c = document.createElement('canvas');
  c.width = w; c.height = h;
  const g = c.getContext('2d');
  if (bg) {
    g.fillStyle = bg;
    g.beginPath();
    g.roundRect(4, 4, w - 8, h - 8, 28);
    g.fill();
  }
  g.fillStyle = color;
  g.font = font;
  g.textAlign = 'center';
  g.textBaseline = 'middle';
  g.direction = 'rtl';
  g.shadowColor = 'rgba(0,0,0,0.8)';
  g.shadowBlur = 8;
  g.fillText(text, w / 2, h / 2 + 4);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = 4;
  return t;
}

export function labelSprite(text, opts = {}, scale = 6) {
  const tex = labelTexture(text, opts);
  const m = new THREE.SpriteMaterial({ map: tex, transparent: true, depthWrite: false, toneMapped: false });
  const s = new THREE.Sprite(m);
  s.scale.set(scale, scale * ((opts.h || 128) / (opts.w || 512)), 1);
  return s;
}
