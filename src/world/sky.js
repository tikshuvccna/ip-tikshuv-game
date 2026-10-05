import * as THREE from 'three';
import { clamp, lerp, smoothstep } from '../util.js';
import { heightAt } from './terrain.js';
import { WORLD_R } from './sites.js';

const NOISE_GLSL = `
float hash21(vec2 p){ p = fract(p*vec2(123.34,456.21)); p += dot(p,p+45.32); return fract(p.x*p.y); }
float vnoise(vec2 p){ vec2 i=floor(p), f=fract(p); f=f*f*(3.-2.*f);
  return mix(mix(hash21(i),hash21(i+vec2(1,0)),f.x), mix(hash21(i+vec2(0,1)),hash21(i+vec2(1,1)),f.x), f.y); }
float fbm5(vec2 p){ float a=.5,s=0.; for(int i=0;i<5;i++){ s+=a*vnoise(p); p=p*2.03+17.1; a*=.5; } return s; }
`;

// ---------------- שמיים ----------------
export function createSky() {
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    depthWrite: false,
    depthTest: false,
    fog: false,
    uniforms: {
      uSunDir: { value: new THREE.Vector3(0, 1, 0) },
      uTime: { value: 0 },
      uTop: { value: new THREE.Color() },
      uHorizon: { value: new THREE.Color() },
      uSunColor: { value: new THREE.Color() },
      uNight: { value: 0 },
    },
    vertexShader: `
      varying vec3 vDir;
      void main(){ vDir = normalize(position); vec4 p = modelViewMatrix*vec4(position,1.0); gl_Position = projectionMatrix*p; gl_Position.z = gl_Position.w * 0.99999; }`,
    fragmentShader: `
      varying vec3 vDir; uniform vec3 uSunDir,uTop,uHorizon,uSunColor; uniform float uTime,uNight;
      ${NOISE_GLSL}
      void main(){
        vec3 d = normalize(vDir); float y = d.y;
        vec3 col = mix(uHorizon, uTop, pow(clamp(y,0.,1.),0.5));
        if (y<0.) col = mix(uHorizon, uHorizon*0.55, clamp(-y*4.,0.,1.));
        float sd = max(dot(d,uSunDir),0.);
        col += uSunColor*(pow(sd,900.)*6. + pow(sd,40.)*0.5 + pow(sd,4.)*0.18);
        vec3 md = -uSunDir; float mm = max(dot(d,md),0.);
        col += vec3(0.85,0.9,1.0)*(smoothstep(0.9990,0.9994,mm)*1.2 + pow(mm,60.)*0.25)*uNight;
        if (y>0.0){
          vec2 sp = d.xz/(d.y+0.25)*90.; vec2 cell = floor(sp);
          float s = hash21(cell); float tw = 0.6+0.4*sin(uTime*2.0+s*50.);
          float st = step(0.985,s)*smoothstep(0.0,0.25,y)*tw;
          vec2 fr = fract(sp)-0.5; st *= smoothstep(0.5,0.0,length(fr));
          col += vec3(1.0,0.95,0.85)*st*uNight*2.0;
          vec2 cp = d.xz/(y+0.18)*0.9 + vec2(uTime*0.006, uTime*0.002);
          float c = fbm5(cp*1.6); c = smoothstep(0.52,0.82,c);
          float c2 = fbm5(cp*3.4+9.);
          vec3 cc = mix(vec3(1.0), uHorizon*0.8+vec3(0.15), 0.35);
          cc *= mix(0.78,1.0,c2);
          cc = mix(cc, uTop*0.9, uNight*0.7);
          col = mix(col, cc, c*0.9*smoothstep(0.0,0.18,y));
        }
        gl_FragColor = vec4(col,1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  const mesh = new THREE.Mesh(new THREE.SphereGeometry(1000, 32, 16), mat);
  mesh.frustumCulled = false;
  mesh.renderOrder = -10;
  return mesh;
}

// ---------------- מים ----------------
export function createDepthTexture(onProgress) {
  const N = 768;
  const data = new Uint8Array(N * N);
  const span = WORLD_R * 2.1;
  const tex = new THREE.DataTexture(data, N, N, THREE.RedFormat, THREE.UnsignedByteType);
  tex.magFilter = tex.minFilter = THREE.LinearFilter;
  tex.wrapS = tex.wrapT = THREE.ClampToEdgeWrapping;
  tex.generateMipmaps = false;
  let row = 0;
  const step = (rows) => {
    const end = Math.min(N, row + rows);
    for (; row < end; row++) {
      for (let i = 0; i < N; i++) {
        const x = (i / (N - 1) - 0.5) * span, z = (row / (N - 1) - 0.5) * span;
        const h = heightAt(x, z);
        // קידוד: -10..+22 => 0..255
        data[row * N + i] = clamp(Math.round(((h + 10) / 32) * 255), 0, 255);
      }
    }
    tex.needsUpdate = true;
    return row >= N;
  };
  return { tex, span, step, N };
}

export function createWater(depth) {
  const mat = new THREE.ShaderMaterial({
    transparent: true,
    depthWrite: false,
    fog: false,
    uniforms: {
      uTime: { value: 0 },
      uSunDir: { value: new THREE.Vector3(0, 1, 0) },
      uSunColor: { value: new THREE.Color() },
      uTop: { value: new THREE.Color() },
      uHorizon: { value: new THREE.Color() },
      uFog: { value: new THREE.Color() },
      uFogNear: { value: 300 },
      uFogFar: { value: 2800 },
      uDepth: { value: depth.tex },
      uSpan: { value: depth.span },
      uNight: { value: 0 },
    },
    vertexShader: `
      varying vec3 vWorld;
      void main(){ vec4 wp = modelMatrix*vec4(position,1.0); vWorld = wp.xyz; gl_Position = projectionMatrix*viewMatrix*wp; }`,
    fragmentShader: `
      varying vec3 vWorld;
      uniform float uTime,uSpan,uFogNear,uFogFar,uNight; uniform vec3 uSunDir,uSunColor,uTop,uHorizon,uFog;
      uniform sampler2D uDepth;
      ${NOISE_GLSL}
      vec3 skyCol(vec3 d){ vec3 c = mix(uHorizon,uTop,pow(clamp(d.y,0.,1.),0.5)); float sd=max(dot(d,uSunDir),0.); c += uSunColor*(pow(sd,300.)*4.+pow(sd,10.)*0.25); return c; }
      void main(){
        vec2 uv = vWorld.xz/uSpan + 0.5;
        float hh = texture2D(uDepth, uv).r*32. - 10.;
        float depth = -hh;
        if (depth < -0.3) discard;
        vec2 p = vWorld.xz;
        float t = uTime;
        // גלים
        vec2 g = vec2(0.);
        g += vec2(cos(p.x*0.11+t*0.9), cos(p.y*0.09+t*0.7))*0.08;
        g += vec2(cos(p.x*0.33+p.y*0.2+t*1.7), cos(p.y*0.37-p.x*0.18+t*1.5))*0.05;
        g += (vec2(vnoise(p*0.6+t*0.35), vnoise(p*0.6+31.+t*0.3))-0.5)*0.22;
        g += (vec2(vnoise(p*1.9-t*0.5), vnoise(p*1.9+11.-t*0.45))-0.5)*0.12;
        vec3 n = normalize(vec3(-g.x,1.0,-g.y));
        vec3 V = cameraPosition - vWorld; float dist = length(V); V/=dist;
        float fres = pow(1.0-max(dot(n,V),0.0),4.0);
        vec3 R = reflect(-V,n); R.y = abs(R.y);
        vec3 refl = skyCol(R);
        vec3 deep = mix(vec3(0.02,0.16,0.30), vec3(0.01,0.03,0.12), uNight);
        vec3 shallow = mix(vec3(0.10,0.62,0.66), vec3(0.03,0.12,0.2), uNight);
        float dk = smoothstep(0.0,6.0,depth);
        vec3 body = mix(shallow, deep, dk);
        vec3 col = mix(body, refl, clamp(fres*0.85+0.08,0.,1.));
        // קצף בחוף
        float foamN = vnoise(p*0.8 + t*0.4);
        float foam = smoothstep(0.55+foamN*0.25, 0.0, depth+0.15*sin(t*1.3+p.x*0.2)) ;
        col = mix(col, vec3(0.95,0.98,1.0)*(1.0-0.6*uNight), foam*0.75);
        float alpha = mix(0.55, 0.96, smoothstep(0.0,2.5,depth));
        alpha = max(alpha, fres);
        alpha *= smoothstep(-0.3,0.15,depth);
        float f = smoothstep(uFogNear,uFogFar,dist);
        col = mix(col, uFog, f);
        gl_FragColor = vec4(col, alpha);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`,
  });
  const mesh = new THREE.Mesh(new THREE.PlaneGeometry(depth.span * 1.9, depth.span * 1.9), mat);
  mesh.rotation.x = -Math.PI / 2;
  mesh.position.y = 0;
  mesh.renderOrder = 5;
  mesh.frustumCulled = false;
  return mesh;
}

// ---------------- אטמוספירה: שעת היום, תאורה וערפל ----------------
const KEY = {
  day: { top: '#2a74d8', horizon: '#a8d4ff', sun: '#fff1cf' },
  dusk: { top: '#4a4fa8', horizon: '#ff9f6b', sun: '#ff8a3c' },
  night: { top: '#040922', horizon: '#14205a', sun: '#000000' },
};
const tmpA = new THREE.Color(), tmpB = new THREE.Color();

export class Atmosphere {
  constructor(scene, renderer) {
    this.scene = scene;
    this.time = 0.36; // 0..1 (0.25 זריחה, 0.5 צהריים, 0.75 שקיעה)
    this.speed = 1 / 900; // מחזור יום של 15 דקות
    this.night = 0;
    this.sky = createSky();
    scene.add(this.sky);
    this.sun = new THREE.DirectionalLight('#fff1cf', 3);
    this.sun.castShadow = true;
    this.sun.shadow.mapSize.set(2048, 2048);
    const sc = this.sun.shadow.camera;
    sc.left = sc.bottom = -110; sc.right = sc.top = 110; sc.near = 10; sc.far = 700;
    this.sun.shadow.bias = -0.0004;
    this.sun.shadow.normalBias = 0.6;
    scene.add(this.sun, this.sun.target);
    this.moon = new THREE.DirectionalLight('#8fa8ff', 0.0);
    scene.add(this.moon);
    this.hemi = new THREE.HemisphereLight('#bcd8ff', '#4a5a30', 1.0);
    scene.add(this.hemi);
    scene.fog = new THREE.Fog('#a8d4ff', 250, 2800);
    this.sunDir = new THREE.Vector3(0, 1, 0);
    this.water = null;
    this.colors = { top: new THREE.Color(), horizon: new THREE.Color(), sun: new THREE.Color() };
    this.renderer = renderer;
    this.potionBoost = 0;
    this.vision = 0;
    this.visionK = 0;
  }

  setFog(near, far) {
    this.scene.fog.near = near;
    this.scene.fog.far = far;
    if (this.water) {
      this.water.material.uniforms.uFogNear.value = near;
      this.water.material.uniforms.uFogFar.value = far;
    }
  }

  get hour() {
    return (this.time * 24 + 0) % 24;
  }

  update(dt, focus, camera) {
    this.time = (this.time + dt * this.speed) % 1;
    const ang = (this.time - 0.25) * Math.PI * 2;
    const elev = Math.sin(ang);
    this.sunDir.set(Math.cos(ang) * 0.9, elev, 0.35).normalize();
    const dayK = smoothstep(0.02, 0.38, elev);
    const twiK = smoothstep(-0.22, 0.04, elev);
    const mix3 = (key, out) => {
      out.copy(tmpA.set(KEY.night[key])).lerp(tmpB.set(KEY.dusk[key]), twiK);
      out.lerp(tmpB.set(KEY.day[key]), dayK);
    };
    mix3('top', this.colors.top);
    mix3('horizon', this.colors.horizon);
    mix3('sun', this.colors.sun);
    this.night = clamp(smoothstep(0.08, -0.2, elev) + this.potionBoost * 0, 0, 1);

    const u = this.sky.material.uniforms;
    u.uSunDir.value.copy(this.sunDir);
    u.uTime.value += dt;
    u.uTop.value.copy(this.colors.top);
    u.uHorizon.value.copy(this.colors.horizon);
    u.uSunColor.value.copy(this.colors.sun);
    u.uNight.value = this.night;
    this.sky.position.copy(camera.position);
    this.sky.scale.setScalar(1);

    // ערפל כצבע האופק
    this.scene.fog.color.copy(this.colors.horizon).multiplyScalar(0.92);

    // תאורה
    this.sun.color.copy(this.colors.sun);
    this.sun.intensity = 3.2 * smoothstep(-0.02, 0.2, elev);
    const snap = 4;
    this.sun.target.position.set(Math.round(focus.x / snap) * snap, Math.round(focus.y / snap) * snap, Math.round(focus.z / snap) * snap);
    this.sun.position.copy(this.sun.target.position).addScaledVector(this.sunDir, 280);
    this.sun.castShadow = elev > 0.02 && this.shadowsOn !== false;
    this.visionK += (this.vision - this.visionK) * Math.min(1, dt * 1.5);
    this.moon.intensity = 0.55 * this.night + 1.4 * this.visionK * this.night;
    this.moon.position.copy(focus).addScaledVector(this.sunDir, -300);
    this.hemi.intensity = lerp(0.18, 1.05, dayK) + 0.1 * twiK + 0.55 * this.visionK * this.night;
    this.hemi.color.copy(this.colors.top).lerp(tmpA.set('#ffffff'), 0.55);
    this.hemi.groundColor.set('#4a5a30').multiplyScalar(lerp(0.25, 1, dayK));

    if (this.water) {
      const w = this.water.material.uniforms;
      w.uTime.value += dt;
      w.uSunDir.value.copy(this.sunDir);
      w.uSunColor.value.copy(this.colors.sun);
      w.uTop.value.copy(this.colors.top);
      w.uHorizon.value.copy(this.colors.horizon);
      w.uFog.value.copy(this.scene.fog.color);
      w.uNight.value = this.night;
    }
  }
}
