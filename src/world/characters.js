import * as THREE from 'three';
import { GeoBuilder } from './geo.js';
import { MAT } from './materials.js';
import { lerp } from '../util.js';

export const HOUSES = [
  { id: 'flame', name: 'בית הלהבה', robe: '#b3262e', accent: '#f2b632', hat: '#8e1c24' },
  { id: 'wave', name: 'בית הגל', robe: '#2a5fc1', accent: '#d7e4ff', hat: '#1f4796' },
  { id: 'forest', name: 'בית היער', robe: '#1f8a56', accent: '#c9d0cf', hat: '#166b41' },
  { id: 'spark', name: 'בית הניצוץ', robe: '#7a3fc1', accent: '#ffd35c', hat: '#5b2c96' },
];

export const SKINS = ['#f5d2b3', '#e8b78d', '#c68a5e', '#9a6340', '#6d4429'];
export const HAIRS = ['#2a1d14', '#5a3a22', '#a8672f', '#d8b25a', '#c6c6c6', '#8a2a1c', '#1a1a2a'];

// בונה דמות קוסם ממוזגת בחלקים נעים
export function buildWizard(o = {}) {
  const {
    robe = '#2a5fc1', accent = '#f2b632', hat = null, skin = '#f0c9a4', hair = '#4a3020',
    beard = false, hatStyle = 'wizard', scale = 1, longHair = false,
  } = o;
  const root = new THREE.Group();

  const torso = new GeoBuilder();
  torso.cyl('flat', 0.23, 0.31, 0.62, { y: 1.12, color: robe }, 10);
  torso.cyl('flat', 0.31, 0.52, 0.78, { y: 0.55, color: robe }, 12); // גלימה תחתונה
  torso.cyl('flat', 0.322, 0.322, 0.07, { y: 0.88, color: accent }, 10); // חגורה
  torso.box('flat', 0.14, 0.7, 0.025, { y: 0.55, z: 0.36, color: accent });
  torso.cyl('flat', 0.2, 0.24, 0.1, { y: 1.46, color: accent }, 10); // צעיף
  const headB = new GeoBuilder();
  headB.sphere('flat', 0.17, { y: 1.66, color: skin }, 12, 10);
  headB.sphere('flat', 0.03, { x: 0.065, y: 1.68, z: 0.15, color: '#1a1410' }, 5, 4);
  headB.sphere('flat', 0.03, { x: -0.065, y: 1.68, z: 0.15, color: '#1a1410' }, 5, 4);
  headB.sphere('flat', 0.035, { y: 1.645, z: 0.17, color: skin }, 5, 4);
  headB.sphere('flat', 0.186, { y: 1.69, z: -0.02, sy: 0.9, color: hair }, 12, 8);
  if (longHair) headB.box('flat', 0.3, 0.38, 0.1, { y: 1.5, z: -0.13, color: hair });
  if (beard) headB.cone('flat', 0.15, 0.5, { y: 1.42, z: 0.1, rx: Math.PI, color: '#e8e8ee' }, 8);
  if (hatStyle === 'wizard') {
    const hc = hat || robe;
    headB.cyl('flat', 0.33, 0.33, 0.035, { y: 1.78, color: hc }, 14);
    headB.cone('flat', 0.2, 0.62, { y: 2.1, rz: 0.12, x: -0.03, color: hc }, 10);
    headB.cyl('flat', 0.205, 0.215, 0.05, { y: 1.83, color: accent }, 12);
  } else if (hatStyle === 'cap') {
    headB.cyl('flat', 0.2, 0.2, 0.08, { y: 1.8, color: hat || robe }, 12);
  }
  const armB = (side) => {
    const a = new GeoBuilder();
    a.cyl('flat', 0.065, 0.08, 0.5, { y: -0.25, color: robe }, 8);
    a.sphere('flat', 0.065, { y: -0.54, color: skin }, 8, 6);
    return a;
  };
  const legB = () => {
    const l = new GeoBuilder();
    l.cyl('flat', 0.075, 0.07, 0.6, { y: -0.3, color: '#2c2630' }, 7);
    l.box('flat', 0.12, 0.08, 0.24, { y: -0.62, z: 0.05, color: '#3a2a22' });
    return l;
  };
  const mk = (b) => b.build({ cast: true, receive: false });
  const body = new THREE.Group();
  body.add(mk(torso));
  const head = new THREE.Group();
  head.add(mk(headB));
  head.position.y = 0;
  body.add(head);
  const mkLimb = (b, x, y) => {
    const g = new THREE.Group();
    g.position.set(x, y, 0);
    g.add(mk(b));
    return g;
  };
  const armL = mkLimb(armB(-1), -0.32, 1.38);
  const armR = mkLimb(armB(1), 0.32, 1.38);
  const legL = mkLimb(legB(), -0.11, 0.78);
  const legR = mkLimb(legB(), 0.11, 0.78);
  // שרביט
  const wand = new THREE.Group();
  const wmat = new THREE.MeshStandardMaterial({ color: '#3a2615', roughness: 0.6 });
  const wm = new THREE.Mesh(new THREE.CylinderGeometry(0.008, 0.016, 0.4, 6), wmat);
  wm.position.y = -0.2;
  wand.add(wm);
  const tipGlow = new THREE.Mesh(
    new THREE.SphereGeometry(0.02, 8, 6),
    new THREE.MeshBasicMaterial({ color: '#ffffff', toneMapped: false })
  );
  tipGlow.position.y = -0.41;
  wand.add(tipGlow);
  wand.position.set(0.01, -0.54, 0.02);
  wand.rotation.x = Math.PI / 2 - 0.2;
  armR.add(wand);
  const tip = new THREE.Object3D();
  tip.position.y = -0.43;
  wand.add(tip);

  body.add(armL, armR, legL, legR);
  root.add(body);
  root.scale.setScalar(scale);

  const rig = {
    root, body, head, armL, armR, legL, legR, wand, tip, tipGlow,
    phase: Math.random() * 10,
    castT: 0,
    mode: 'walk', // walk | broom
    speed: 0,
    lean: 0,
    wandLit: 0,
  };
  rig.tipGlow.material.color.set('#9ad7ff');
  return rig;
}

const _v = new THREE.Vector3();

// עדכון אנימציה
export function animateWizard(rig, dt, speed, opts = {}) {
  const { onGround = true, broom = false, cast = 0, talk = false, sit = false } = opts;
  rig.phase += dt * (6 + speed * 0.9);
  const sw = Math.min(speed / 5, 1.2);
  const s = Math.sin(rig.phase);
  const c = Math.cos(rig.phase);
  if (broom) {
    // ישיבה על מטאטא
    rig.legL.rotation.x = lerp(rig.legL.rotation.x, -1.15, 0.2);
    rig.legR.rotation.x = lerp(rig.legR.rotation.x, -1.25, 0.2);
    rig.armL.rotation.x = lerp(rig.armL.rotation.x, -1.0, 0.2);
    rig.armR.rotation.x = lerp(rig.armR.rotation.x, cast > 0 ? -1.5 : -1.0, 0.2);
    rig.body.position.y = lerp(rig.body.position.y, -0.12, 0.2);
    rig.body.rotation.x = lerp(rig.body.rotation.x, 0.25 + Math.min(speed / 120, 0.3), 0.1);
  } else {
    const swing = onGround ? sw * 0.9 : 0.2;
    rig.legL.rotation.x = lerp(rig.legL.rotation.x, s * swing, 0.35);
    rig.legR.rotation.x = lerp(rig.legR.rotation.x, -s * swing, 0.35);
    rig.armL.rotation.x = lerp(rig.armL.rotation.x, -s * swing * 0.8 + (onGround ? 0 : -0.5), 0.3);
    const idle = Math.sin(rig.phase * 0.35) * 0.04;
    const rTarget = cast > 0 ? -1.45 : talk ? -0.7 + Math.sin(rig.phase * 0.8) * 0.2 : s * swing * 0.8 + idle - 0.15;
    rig.armR.rotation.x = lerp(rig.armR.rotation.x, rTarget, cast > 0 ? 0.5 : 0.25);
    rig.body.position.y = lerp(rig.body.position.y, Math.abs(c) * 0.04 * sw, 0.3);
    rig.body.rotation.x = lerp(rig.body.rotation.x, onGround ? 0.05 * sw : 0.15, 0.2);
  }
  rig.head.rotation.y *= 0.9;
}

export function wandTipWorld(rig, out) {
  rig.tip.getWorldPosition(out);
  return out;
}

// מטאטא
export const BROOMS = [
  { id: 'student', name: 'מטאטא התלמיד', speed: 24, accel: 1.6, color: '#8a5a2b', bristle: '#c9a35a', trail: '#ffe9a8', need: 0, desc: 'מטאטא ישן אך אמין. מתאים לצעדים הראשונים באוויר.' },
  { id: 'oak', name: 'אלון חכם', speed: 36, accel: 1.9, color: '#6a4426', bristle: '#7ea33b', trail: '#b6ff86', need: 1, desc: 'עשוי עץ אלון עתיק. יציב, נוח ומהיר יותר.' },
  { id: 'azure', name: 'ברק כחול', speed: 50, accel: 2.4, color: '#1f2f66', bristle: '#7fb4ff', trail: '#6ab8ff', need: 3, desc: 'חד, אווירודינמי ומשאיר שובל כחול זוהר.' },
  { id: 'ember', name: 'חץ האש', speed: 66, accel: 2.8, color: '#4a1a10', bristle: '#ff7a2c', trail: '#ff8a3a', need: 4, desc: 'מטאטא להבה! זנב הבוער מאיץ כל תהליך.' },
  { id: 'moon', name: 'ירח כסוף', speed: 82, accel: 3.2, color: '#c8cfe0', bristle: '#e8f0ff', trail: '#e6ecff', need: 6, desc: 'מטאטא עדין כמו אור ירח, שקט ומהיר מאוד.' },
  { id: 'gold', name: 'ברק הזהב', speed: 104, accel: 3.8, color: '#e8b830', bristle: '#fff1a0', trail: '#ffd84a', need: 7, desc: 'המטאטא האגדי של מאסטרי הרשת. אין מהיר ממנו.' },
];

export function buildBroom(def) {
  const g = new THREE.Group();
  const b = new GeoBuilder();
  b.cyl('flat', 0.025, 0.03, 1.5, { rx: Math.PI / 2, z: 0.1, color: def.color }, 8);
  b.cone('flat', 0.15, 0.72, { rx: Math.PI / 2, z: -1.0, color: def.bristle }, 10);
  b.cyl('flat', 0.04, 0.04, 0.12, { rx: Math.PI / 2, z: -0.62, color: '#3a2a1a' }, 8);
  if (def.id === 'gold' || def.id === 'moon') b.sphere('flat', 0.05, { z: 0.88, color: def.id === 'gold' ? '#fff1a0' : '#ffffff' }, 8, 6);
  g.add(b.build({ cast: true, receive: false }));
  // זוהר
  const glow = new THREE.Mesh(
    new THREE.SphereGeometry(0.08, 8, 6),
    new THREE.MeshBasicMaterial({ color: def.trail, toneMapped: false, transparent: true, opacity: 0.9 })
  );
  glow.position.z = -1.38;
  g.add(glow);
  g.userData.glow = glow;
  return g;
}
