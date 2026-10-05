import * as THREE from 'three';
import { buildWizard, animateWizard, HOUSES, SKINS, BROOMS, buildBroom } from './world/characters.js';
import { heightAt } from './world/terrain.js';
import { colliders } from './world/collision.js';
import { WORLD_R } from './world/sites.js';
import { input, down, consumeLook } from './input.js';
import { state } from './state.js';
import { clamp, lerp, lerpAngle } from './util.js';
import { sfx } from './audio.js';

const V = new THREE.Vector3();

export class Player {
  constructor(world) {
    this.world = world;
    const house = HOUSES[state.house] || HOUSES[1];
    this.rig = buildWizard({ robe: house.robe, accent: house.accent, hat: house.hat, skin: SKINS[state.skin] || SKINS[1], hair: '#3a2416', scale: 1 });
    this.holder = new THREE.Group();
    this.tilt = new THREE.Group();
    this.tilt.add(this.rig.root);
    this.holder.add(this.tilt);
    world.scene.add(this.holder);
    this.pos = new THREE.Vector3(0, 10, 18);
    this.vel = new THREE.Vector3();
    this.facing = Math.PI;
    this.yaw = 0;
    this.pitch = 0.12;
    this.dist = 6.5;
    this.camPos = new THREE.Vector3();
    this.mode = 'walk';
    this.onGround = true;
    this.inWater = false;
    this.frozen = false;
    this.castT = 0;
    this.mods = { speed: 1, jump: 1, flight: 1, float: false };
    this.setBroom(state.broom);
    this.roll = 0;
    this.pitchBody = 0;
    this.speedH = 0;
    this.lastGround = 0;
    this.camShake = 0;
    this.aim = new THREE.Vector3();
    this.mana = 100;
    this.shield = 0;
    this.fovBoost = 0;
  }

  setBroom(id) {
    const def = BROOMS.find((b) => b.id === id) || BROOMS[0];
    this.broomDef = def;
    state.broom = def.id;
    if (this.broomMesh) this.tilt.remove(this.broomMesh);
    this.broomMesh = buildBroom(def);
    this.broomMesh.position.y = -0.1;
    this.broomMesh.visible = this.mode === 'broom';
    this.tilt.add(this.broomMesh);
  }

  teleport(x, z, yOff = 0) {
    this.pos.set(x, heightAt(x, z) + 1 + yOff, z);
    this.vel.set(0, 0, 0);
  }

  toggleBroom() {
    if (this.frozen) return;
    if (this.mode === 'walk') {
      this.mode = 'broom';
      this.broomMesh.visible = true;
      this.vel.set(0, 0, 0);
      this.pos.y += 0.6;
      this.rig.root.position.y = -0.62;
      sfx('whoosh');
    } else {
      this.mode = 'walk';
      this.broomMesh.visible = false;
      this.rig.root.position.y = 0;
      this.tilt.rotation.set(0, 0, 0);
      this.vel.set(0, Math.min(this.vel.y, 0), 0);
      sfx('whoosh');
    }
  }

  get speedNow() {
    return Math.hypot(this.vel.x, this.vel.z);
  }

  forwardVec(out = V) {
    return out.set(-Math.sin(this.yaw), 0, -Math.cos(this.yaw));
  }

  updateLook(dt) {
    const look = consumeLook();
    const sens = 0.0024 * state.settings.sens;
    if (!this.frozen || input.locked) {
      this.yaw -= look.x * sens;
      this.pitch = clamp(this.pitch - look.y * sens, -1.15, 1.25);
    }
    if (input.wheel && !this.frozen) this.dist = clamp(this.dist + input.wheel * 0.8, 2.5, 14);
  }

  update(dt, t) {
    this.updateLook(dt);
    const sx = (down('d') ? 1 : 0) - (down('a') ? 1 : 0) + input.touch.move.x;
    const fz = (down('w') ? 1 : 0) - (down('s') ? 1 : 0) - input.touch.move.y;
    const hasInput = !this.frozen && (Math.abs(sx) > 0.05 || Math.abs(fz) > 0.05);
    const fwd = V.set(-Math.sin(this.yaw), 0, -Math.cos(this.yaw)).clone();
    const right = new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw));
    this.castT = Math.max(0, this.castT - dt);
    this.mana = Math.min(100, this.mana + dt * 9);
    this.shield = Math.max(0, this.shield - dt);

    if (this.mode === 'walk') this.updateWalk(dt, t, fwd, right, sx, fz, hasInput);
    else this.updateBroom(dt, t, fwd, right, sx, fz, hasInput);

    // גבולות העולם
    const r = Math.hypot(this.pos.x, this.pos.z);
    if (r > 2650) {
      const k = 2650 / r;
      this.pos.x *= k; this.pos.z *= k;
      this.vel.x *= 0.5; this.vel.z *= 0.5;
      this.edgeWarn = 2;
    }
    if (this.edgeWarn) this.edgeWarn = Math.max(0, this.edgeWarn - dt);

    this.holder.position.copy(this.pos);
    this.holder.rotation.y = this.facing;
    this.updateCamera(dt);
  }

  updateWalk(dt, t, fwd, right, sx, fz, hasInput) {
    const gy = heightAt(this.pos.x, this.pos.z);
    this.inWater = gy < -0.25;
    const run = down('Shift') && !this.inWater;
    let speed = (run ? 12.5 : 6.2) * this.mods.speed * (this.inWater ? 0.5 : 1);
    const want = new THREE.Vector3();
    if (hasInput) {
      want.addScaledVector(fwd, fz).addScaledVector(right, sx);
      if (want.lengthSq() > 1) want.normalize();
    }
    const accel = this.onGround || this.inWater ? 14 : 4;
    this.vel.x = lerp(this.vel.x, want.x * speed, 1 - Math.exp(-accel * dt));
    this.vel.z = lerp(this.vel.z, want.z * speed, 1 - Math.exp(-accel * dt));
    // קפיצה
    if (!this.frozen && input.pressed.has('Space') && (this.onGround || this.mods.float) && !this.inWater) {
      this.vel.y = 9.4 * this.mods.jump;
      this.onGround = false;
      sfx('whoosh');
    }
    const g = this.mods.float ? 11 : 27;
    this.vel.y -= g * dt;
    if (this.mods.float && this.vel.y < -3.5) this.vel.y = -3.5;
    this.pos.x += this.vel.x * dt;
    this.pos.z += this.vel.z * dt;
    colliders.resolve(this.pos, 0.45, this.pos.y);
    this.pos.y += this.vel.y * dt;
    const g2 = heightAt(this.pos.x, this.pos.z);
    const floorY = this.inWater ? Math.max(g2, -0.5) : g2;
    if (this.pos.y <= floorY) {
      if (this.vel.y < -14) this.camShake = 0.3;
      this.pos.y = floorY;
      this.vel.y = 0;
      this.onGround = true;
    } else if (this.onGround && this.pos.y - floorY < 0.5 && this.vel.y <= 0) {
      this.pos.y = floorY; // הצמדה לקרקע בירידות
    } else this.onGround = false;
    if (this.inWater) {
      this.pos.y = -0.55 + Math.sin(t * 2.5) * 0.06;
      this.onGround = true;
    }
    // כיוון הדמות
    const sp = Math.hypot(this.vel.x, this.vel.z);
    this.speedH = sp;
    if (this.castT > 0 || input.rmb) this.facing = lerpAngle(this.facing, Math.atan2(fwd.x, fwd.z), 1 - Math.exp(-18 * dt));
    else if (sp > 0.5) this.facing = lerpAngle(this.facing, Math.atan2(this.vel.x, this.vel.z), 1 - Math.exp(-12 * dt));
    animateWizard(this.rig, dt, sp, { onGround: this.onGround, cast: this.castT });
    this.rig.root.position.y = this.inWater ? -0.5 : 0;
  }

  updateBroom(dt, t, fwd, right, sx, fz, hasInput) {
    const def = this.broomDef;
    const boost = down('Shift') ? 1.7 : 1;
    const vmax = def.speed * this.mods.flight * boost;
    // כיוון תלת-ממדי: מבט המצלמה
    const cp = Math.cos(this.pitch), sp = Math.sin(this.pitch);
    const look = new THREE.Vector3(fwd.x * cp, sp, fwd.z * cp);
    const want = new THREE.Vector3();
    if (hasInput) {
      want.addScaledVector(look, fz).addScaledVector(right, sx * 0.65);
    }
    if (!this.frozen) {
      if (down('Space')) want.y += 0.7;
      if (down('ControlLeft') || down('ControlRight') || down('KeyC')) want.y -= 0.7;
    }
    if (want.lengthSq() > 1) want.normalize();
    want.multiplyScalar(vmax);
    const a = 1 - Math.exp(-def.accel * dt * (hasInput || want.y !== 0 ? 1 : 0.9));
    this.vel.lerp(want, a);
    // החלקה קלה כשעומדים במקום
    this.pos.addScaledVector(this.vel, dt);
    const tmp = { x: this.pos.x, z: this.pos.z };
    const before = { x: tmp.x, z: tmp.z };
    colliders.resolve(this.pos, 0.6, this.pos.y - 1);
    const gy = Math.max(heightAt(this.pos.x, this.pos.z), 0.3);
    const minY = gy + 1.4;
    if (this.pos.y < minY) {
      this.pos.y = minY;
      if (this.vel.y < 0) this.vel.y = 0;
    }
    if (this.pos.y > 900) this.pos.y = 900;
    const sp3 = this.vel.length();
    this.speedH = Math.hypot(this.vel.x, this.vel.z);
    // כיוון ונטייה
    let tgt = this.facing;
    if (this.speedH > 2) tgt = Math.atan2(this.vel.x, this.vel.z);
    else tgt = Math.atan2(fwd.x, fwd.z);
    if (this.castT > 0) tgt = Math.atan2(fwd.x, fwd.z);
    const prev = this.facing;
    this.facing = lerpAngle(this.facing, tgt, 1 - Math.exp(-6 * dt));
    let turn = this.facing - prev;
    while (turn > Math.PI) turn -= Math.PI * 2;
    while (turn < -Math.PI) turn += Math.PI * 2;
    this.roll = lerp(this.roll, clamp(-turn / dt * 0.12, -0.6, 0.6) + -sx * 0.18, 1 - Math.exp(-6 * dt));
    const horiz = Math.max(this.speedH, 0.001);
    const pitchTgt = clamp(Math.atan2(-this.vel.y, horiz), -0.9, 0.9) * 0.7;
    this.pitchBody = lerp(this.pitchBody, pitchTgt, 1 - Math.exp(-5 * dt));
    this.tilt.rotation.set(this.pitchBody, 0, this.roll);
    this.tilt.rotation.order = 'YXZ';
    this.rig.root.position.y = -0.62 + Math.sin(t * 3) * 0.03;
    animateWizard(this.rig, dt, sp3, { broom: true, cast: this.castT });
    this.fovBoost = lerp(this.fovBoost, clamp((sp3 / 60) * 18, 0, 26), 1 - Math.exp(-3 * dt));
    this.onGround = false;
    this.inWater = false;
  }

  updateCamera(dt) {
    const cam = this.camera;
    const target = new THREE.Vector3(this.pos.x, this.pos.y + (this.mode === 'broom' ? 0.9 : 1.55), this.pos.z);
    const cp = Math.cos(this.pitch), sp = Math.sin(this.pitch);
    const f = new THREE.Vector3(-Math.sin(this.yaw) * cp, sp, -Math.cos(this.yaw) * cp);
    const right = new THREE.Vector3(Math.cos(this.yaw), 0, -Math.sin(this.yaw));
    const dist = this.dist * (this.mode === 'broom' ? 1.35 : 1);
    const desired = target.clone().addScaledVector(f, -dist).addScaledVector(right, 0.7).add(new THREE.Vector3(0, 0.3, 0));
    // התנגשות עם הקרקע
    const gh = heightAt(desired.x, desired.z);
    if (desired.y < gh + 0.7) desired.y = gh + 0.7;
    if (desired.y < 0.4 && heightAt(desired.x, desired.z) < 0) desired.y = 0.4;
    if (!this.camInit) {
      this.camPos.copy(desired);
      this.camInit = true;
    }
    this.camPos.lerp(desired, 1 - Math.exp(-16 * dt));
    cam.position.copy(this.camPos);
    if (this.camShake > 0) {
      this.camShake -= dt;
      cam.position.x += (Math.random() - 0.5) * this.camShake * 0.6;
      cam.position.y += (Math.random() - 0.5) * this.camShake * 0.6;
    }
    const lookAt = target.clone().addScaledVector(f, 12).addScaledVector(right, 0.2);
    cam.lookAt(lookAt);
    const fov = 62 + this.fovBoost * (this.mode === 'broom' ? 1 : 0);
    if (Math.abs(cam.fov - fov) > 0.05) {
      cam.fov = fov;
      cam.updateProjectionMatrix();
    }
  }

  // כיוון מטרה: נקודה שהמצלמה מסתכלת עליה
  aimDir(out) {
    const cp = Math.cos(this.pitch), sp = Math.sin(this.pitch);
    return out.set(-Math.sin(this.yaw) * cp, sp, -Math.cos(this.yaw) * cp);
  }
}
