import * as THREE from 'three';
import { Terrain, heightAt } from './terrain.js';
import { Atmosphere, createDepthTexture, createWater } from './sky.js';
import { initMaterials, setNightGlow, MAT } from './materials.js';
import { Props } from './props.js';
import { colliders } from './collision.js';
import { SITES, siteById, ZONE_SITES, WORLD_R } from './sites.js';
import { buildCastle, buildVillage, buildWindmill, buildStones, buildRuins, buildPitch } from './structures.js';
import { buildLandmarks } from './landmarks.js';
import { Grass } from './grass.js';
import { Particles } from './fx.js';
import { mulberry32 } from '../util.js';

export class World {
  constructor(renderer, quality = 1) {
    this.renderer = renderer;
    this.quality = quality;
    this.scene = new THREE.Scene();
    this.animated = []; // פונקציות עדכון (dt, t)
    this.lamps = [];
    this.flags = [];
  }

  async load(progress) {
    const p = (v, t) => progress && progress(v, t);
    const tick = () => new Promise((r) => setTimeout(r, 0));
    p(0.02, 'מכינים חומרים קסומים...');
    initMaterials();
    await tick();

    this.atmo = new Atmosphere(this.scene, this.renderer);
    // מים + מפת עומק
    p(0.05, 'מציפים את האגמים...');
    const depth = createDepthTexture();
    while (!depth.step(48)) {
      p(0.05 + 0.25 * (depth.N ? 1 : 0) * 0, 'מציפים את האגמים...');
      await tick();
    }
    this.depth = depth;
    this.water = createWater(depth);
    this.scene.add(this.water);
    this.atmo.water = this.water;
    await tick();

    p(0.3, 'מרימים הרים ועמקים...');
    this.terrain = new Terrain(this.scene, this.quality);
    this.props = new Props(this.scene, this.quality);
    await tick();

    this.fx = new Particles(this.scene, 3500, true);
    p(0.45, 'בונים טירה, כפרים ומגדלים...');
    this.buildStructures();
    await tick();

    p(0.7, 'נוטעים יער קסום...');
    this.grass = new Grass(this.scene, this.quality);
    this.applyQuality();
    await tick();

    p(0.8, 'מטפחים את הנוף...');
    // טעינה ראשונית של אריחים בסביבת השחקן
    const spawn = new THREE.Vector3(0, 20, 20);
    for (let i = 0; i < 40; i++) {
      const left = this.terrain.update(spawn, 40);
      if (!left) break;
      p(0.8 + 0.1 * (i / 40), 'מטפחים את הנוף...');
      await tick();
    }
    this.props.update(spawn, 60);
    await tick();
    p(1, 'מוכן!');
  }

  applyQuality() {
    const q = this.quality;
    const r = this.renderer;
    r.shadowMap.enabled = q > 0;
    this.atmo.shadowsOn = q > 0;
    const size = q >= 2 ? 3072 : 2048;
    if (this.atmo.sun.shadow.mapSize.x !== size) {
      this.atmo.sun.shadow.mapSize.set(size, size);
      if (this.atmo.sun.shadow.map) {
        this.atmo.sun.shadow.map.dispose();
        this.atmo.sun.shadow.map = null;
      }
    }
    this.atmo.setFog([180, 250, 300][q], [1500, 2200, 2800][q]);
    this.props.setQuality(q);
    this.grass.setQuality(q);
  }

  buildStructures() {
    const add = (g) => {
      this.scene.add(g);
      if (g.userData.colliders) colliders.addAll(g.userData.colliders);
      if (g.userData.lamps) this.lamps.push(...g.userData.lamps);
      if (g.userData.flags) this.flags.push(...g.userData.flags);
      return g;
    };
    const castle = siteById('castle');
    add(buildCastle(castle));
    this.castleFlags = [];
    const flagMat = MAT.cloth;
    const houses = ['#b3262e', '#2a5fc1', '#1f8a56', '#7a3fc1'];
    this.flags.forEach((pos, i) => {
      const f = new THREE.Group();
      const pole = new THREE.Mesh(new THREE.CylinderGeometry(0.1, 0.12, 8, 6), new THREE.MeshStandardMaterial({ color: '#c9a64a', metalness: 0.7, roughness: 0.3 }));
      pole.position.y = 4;
      f.add(pole);
      const geo = new THREE.PlaneGeometry(6, 3.2, 12, 4);
      geo.translate(3, 0, 0);
      const cloth = new THREE.Mesh(geo, new THREE.MeshStandardMaterial({ color: houses[i % 4], side: THREE.DoubleSide, roughness: 0.8 }));
      cloth.position.y = 6.2;
      cloth.castShadow = true;
      f.add(cloth);
      f.position.copy(pos);
      this.scene.add(f);
      this.castleFlags.push({ cloth, geo, base: geo.attributes.position.array.slice(), phase: i * 1.3, group: f });
    });
    this.animated.push((dt, t) => {
      for (const fl of this.castleFlags) {
        const pa = fl.geo.attributes.position;
        for (let i = 0; i < pa.count; i++) {
          const bx = fl.base[i * 3], by = fl.base[i * 3 + 1];
          pa.setZ(i, Math.sin(bx * 1.2 - t * 4 + fl.phase) * 0.35 * (bx / 6));
          pa.setY(i, by + Math.sin(bx * 0.9 - t * 3 + fl.phase) * 0.06 * bx);
        }
        pa.needsUpdate = true;
        fl.group.rotation.y = Math.sin(t * 0.3 + fl.phase) * 0.4 + 0.5;
      }
    });

    // כפרים
    const spawn = siteById('spawn');
    const autumn = siteById('autumn');
    const village3 = siteById('village3');
    const z6 = siteById('z6');
    const port = siteById('port');
    add(buildVillage(spawn, 16, 11, { radius: 70, minR: 22 }));
    add(buildVillage(autumn, 22, 12, { radius: 85, minR: 18 }));
    add(buildVillage(village3, 14, 13, { radius: 62, minR: 18 }));
    add(buildVillage(z6, 16, 14, { radius: 70, minR: 28, house: {} }));
    add(buildVillage(port, 9, 15, { radius: 45, minR: 16, avoid: (x, z) => heightAt(x, z) < 2.4 }));
    add(buildStones(siteById('stones')));
    add(buildRuins(siteById('ruins')));
    const pitch = add(buildPitch(siteById('pitch')));
    this.hoops = pitch.userData.hoops;
    const wm = add(buildWindmill(siteById('autumn').x + 70, siteById('autumn').z - 50));
    this.scene.add(wm.userData.holder);
    this.animated.push((dt) => { wm.userData.blades.rotation.z += dt * 0.6; });
    const wm2 = add(buildWindmill(village3.x - 55, village3.z + 40));
    this.scene.add(wm2.userData.holder);
    this.animated.push((dt) => { wm2.userData.blades.rotation.z += dt * 0.45; });

    // ציוני דרך של אזורי הלימוד
    const lm = buildLandmarks(this);
    for (const g of lm.groups) add(g);
    this.beacons = lm.beacons;
    this.zonePoints = lm.points;
    for (const a of lm.animated) this.animated.push(a);
  }

  update(dt, t, focus, camera, flying) {
    this.atmo.update(dt, focus, camera);
    setNightGlow(this.atmo.night);
    this.terrain.update(camera.position, 5);
    this.props.update(focus, 4, flying);
    this.grass.update(dt, t, focus, this.atmo);
    for (const a of this.animated) a(dt, t);
  }
}
