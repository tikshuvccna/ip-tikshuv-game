import * as THREE from 'three';
import { buildWizard, animateWizard, HOUSES, SKINS, HAIRS } from './characters.js';
import { heightAt } from './terrain.js';
import { colliders } from './collision.js';
import { siteById } from './sites.js';
import { ZONES } from './zonesMeta.js';
import { glowSprite, labelSprite } from './fx.js';
import { mulberry32, pick, wrapAngle, lerpAngle } from '../util.js';

const FIRST = ['אלרון', 'נועה', 'תמר', 'יהלי', 'אורי', 'מאיה', 'גל', 'רוני', 'שקד', 'דור', 'ליאור', 'אביב', 'ים', 'טל', 'נגה', 'עידו', 'שירה', 'איתן', 'מיכל', 'בן', 'הדס', 'רום', 'עמית', 'לונה', 'זיו', 'אופיר'];
const LAST = ['הכוכב', 'מהאגם', 'הירוק', 'בן-רוח', 'מהצפון', 'הנוצץ', 'מהיער', 'בר-אור', 'הזהב', 'הערפל'];

export const NPC_LINES = [
  'כל מכשיר ברשת צריך כתובת ייחודית – בדיוק כמו שלכל בית ברחוב יש מספר.',
  'הינשוף שלי הלך לאיבוד… כנראה שכחתי לכתוב כתובת על המכתב.',
  'שמעת? הכתובת 192.168.1.1 היא ככל הנראה הכתובת הפרטית הכי פופולרית בעולם!',
  'כתובת IP בנויה מ-32 ביטים, מחולקים לארבעה חלקים של 8 ביטים.',
  'אל תשכח לשתות שיקוי מהירות לפני שאתה עולה על המטאטא!',
  'אומרים שבמגדל הראוטר יש גביש שמחלק כתובות לכל המכשירים בממלכה.',
  'הכתובת 127.0.0.1 היא ״הבית״ – היא תמיד מחזירה אותך אל עצמך.',
  'ראיתי היום חד-קרן ליד האגם! הוא היה זוהר ממש.',
  'אם המחשב שלך קיבל כתובת שמתחילה ב-169.254 – כנראה שרת ה-DHCP לא ענה לו.',
  'שרת DHCP הוא כמו פקיד קבלה: הוא נותן לכל אורח כתובת ומחזיר אותה כשהוא עוזב.',
  'כתובת פרטית מתחילה ב-10, ב-172.16 עד 172.31, או ב-192.168.',
  'תנסה את לחש ה״לומוס״ בלילה – זה ממש מועיל ביער!',
  'יש שמועה שבמערת הדרקון מסתתר מאגר ענק של כתובות מבריקות.',
  'מסיכת רשת 255.255.255.0 אומרת: שלושת החלקים הראשונים הם הרשת, והאחרון הוא המארח.',
  'היום האמנתי להפעיל לחש ״ויינגרדיום לוויוסה״ על דלעת. היא עדיין מרחפת…',
  'אבא שלי אומר שבלי שער ברירת מחדל, אי אפשר לצאת מהרשת לעולם הגדול.',
  'שמעתי שמי שמגיע לכל המגדלים מקבל את המטאטא הזהוב!',
  'תחפשו עשבי קסם ליד האגמים – הם נהדרים לשיקויים.',
];

function nameTag(name, color = '#ffffff') {
  const s = labelSprite(name, { color, bg: 'rgba(15,19,48,0.72)', font: 'bold 60px Heebo, Arial, sans-serif', w: 512, h: 112 }, 2.6);
  s.position.y = 2.6;
  s.visible = false;
  return s;
}

export class NPCs {
  constructor(world) {
    this.world = world;
    this.list = [];
    this.group = new THREE.Group();
    world.scene.add(this.group);
    this.rng = mulberry32(2024);
    this.populate();
  }

  make(home, opts = {}) {
    const rng = this.rng;
    const house = pick(HOUSES);
    const prof = opts.prof;
    const rig = buildWizard({
      robe: opts.robe || house.robe, accent: opts.accent || house.accent, hat: opts.hat || house.hat,
      skin: pick(SKINS), hair: opts.hair || pick(HAIRS),
      hatStyle: prof ? 'wizard' : rng() < 0.5 ? 'wizard' : rng() < 0.5 ? 'cap' : 'none',
      beard: opts.beard ?? rng() < 0.12, longHair: rng() < 0.35, scale: prof ? 1.08 : 0.92 + rng() * 0.18,
    });
    const name = opts.name || `${pick(FIRST)} ${pick(LAST)}`;
    const tag = nameTag(prof ? name : name, prof ? '#ffe28a' : '#ffffff');
    rig.root.add(tag);
    this.group.add(rig.root);
    const a = rng() * 6.28, r = Math.sqrt(rng()) * home.r;
    const x = opts.x ?? home.x + Math.cos(a) * r, z = opts.z ?? home.z + Math.sin(a) * r;
    rig.root.position.set(x, heightAt(x, z), z);
    const npc = {
      rig, tag, name, home, x, z, y: heightAt(x, z), face: rng() * 6.28, tx: x, tz: z, wait: rng() * 4,
      speed: 1.2 + rng() * 1.1, fixed: !!opts.fixed, prof: opts.zone || null, talk: 0, sprite: null,
      lines: opts.lines,
    };
    if (opts.zone) {
      const m = glowSprite('#ffd35c', 1.4, 1);
      m.position.y = 3.3;
      rig.root.add(m);
      npc.marker = m;
    }
    rig.root.rotation.y = npc.face;
    this.list.push(npc);
    return npc;
  }

  populate() {
    const spawn = siteById('spawn');
    const castle = siteById('castle');
    const autumn = siteById('autumn');
    const v3 = siteById('village3');
    const z6 = siteById('z6');
    const port = siteById('port');
    const mk = (home, n, opts) => { for (let i = 0; i < n; i++) this.make(home, opts); };
    mk({ x: spawn.x, z: spawn.z, r: 55 }, 14);
    mk({ x: castle.x, z: castle.z + 20, r: 55 }, 16);
    mk({ x: autumn.x, z: autumn.z, r: 60 }, 9);
    mk({ x: v3.x, z: v3.z, r: 45 }, 8);
    mk({ x: z6.x, z: z6.z, r: 50 }, 8);
    mk({ x: port.x, z: port.z, r: 30 }, 4);
    mk({ x: -780, z: 240, r: 40 }, 4);
    mk({ x: 280, z: 830, r: 30 }, 2);
    mk({ x: 170, z: -190, r: 22 }, 3);
    mk({ x: 0, z: -420, r: 24 }, 4); // גשר הטירה
    // פרופסורים בכל אזור
    ZONES.forEach((z, i) => {
      const p = this.world.zonePoints[z.id];
      const nx = p.x + 4.5, nz = p.z + 2;
      this.make({ x: nx, z: nz, r: 1 }, {
        name: z.prof, prof: true, zone: z.id, fixed: true, x: nx, z: nz, beard: i % 2 === 0,
        robe: z.color, accent: '#ffffff', hat: z.color, hair: '#d8d8e0',
      });
    });
  }

  nearest(pos, maxD = 4) {
    let best = null, bd = maxD * maxD;
    for (const n of this.list) {
      const dx = n.x - pos.x, dz = n.z - pos.z;
      const d = dx * dx + dz * dz;
      if (d < bd && Math.abs(n.y - pos.y) < 6) { bd = d; best = n; }
    }
    return best;
  }

  update(dt, t, pos) {
    for (const n of this.list) {
      const dx = n.x - pos.x, dz = n.z - pos.z;
      const d2 = dx * dx + dz * dz;
      const vis = d2 < 320 * 320;
      n.rig.root.visible = vis;
      if (!vis) continue;
      n.tag.visible = d2 < 15 * 15 && (n.prof || d2 < 11 * 11);
      let speed = 0;
      n.talk = Math.max(0, n.talk - dt);
      if (n.talk > 0) {
        const f = Math.atan2(pos.x - n.x, pos.z - n.z);
        n.face = lerpAngle(n.face, f, 1 - Math.exp(-6 * dt));
      } else if (!n.fixed) {
        if (n.wait > 0) n.wait -= dt;
        else {
          const ddx = n.tx - n.x, ddz = n.tz - n.z;
          const dd = Math.hypot(ddx, ddz);
          if (dd < 0.8) {
            n.wait = 1 + Math.random() * 5;
            for (let k = 0; k < 8; k++) {
              const a = Math.random() * 6.28, r = 4 + Math.random() * n.home.r;
              const x = n.home.x + Math.cos(a) * r * 0.8, z = n.home.z + Math.sin(a) * r * 0.8;
              if (heightAt(x, z) > 1.5) { n.tx = x; n.tz = z; break; }
            }
          } else {
            speed = n.speed;
            const nx = n.x + (ddx / dd) * speed * dt, nz = n.z + (ddz / dd) * speed * dt;
            const p = { x: nx, z: nz };
            const hit = colliders.resolve(p, 0.4, n.y);
            const moved = Math.hypot(p.x - n.x, p.z - n.z);
            if (heightAt(p.x, p.z) < 0.6) { n.tx = n.x; n.tz = n.z; }
            else {
              n.x = p.x; n.z = p.z;
              n.face = lerpAngle(n.face, Math.atan2(ddx, ddz), 1 - Math.exp(-8 * dt));
              if (hit && moved < speed * dt * 0.5) { n.tx = n.x; n.tz = n.z; n.wait = 0.3; }
            }
          }
        }
      }
      n.y = heightAt(n.x, n.z);
      n.rig.root.position.set(n.x, n.y, n.z);
      n.rig.root.rotation.y = n.face;
      animateWizard(n.rig, dt, speed, { onGround: true, talk: n.talk > 0 });
      if (n.marker) {
        n.marker.position.y = 3.3 + Math.sin(t * 3) * 0.12;
      }
    }
  }
}
