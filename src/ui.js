import * as THREE from 'three';
import { h, $, clamp, formatNum, isTouch } from './util.js';
import { state, save, on, LEVELS, levelInfo, completedCount, starsTotal, resetSave } from './state.js';
import { ZONES } from './world/zonesMeta.js';
import { SPELLS } from './spells.js';
import { POTIONS } from './potions.js';
import { INGREDIENTS } from './world/items.js';
import { BROOMS, HOUSES } from './world/characters.js';
import { heightAt, colorAt, forestDensity } from './world/terrain.js';
import { siteById, SITES, LAKES } from './world/sites.js';
import { sfx, applySettings, initAudio } from './audio.js';
import { releaseLock } from './input.js';

const MAP_R = 2300;
const MAP_N = 480;

export class UI {
  constructor(game) {
    this.game = game;
    this.hud = $('#hud');
    this.overlayOpen = 0;
    this.menuOpen = false;
    this.dialogue = null;
    this.waypoint = null;
    this.scoreShown = 0;
    this.buildHud();
    on('score', (v, why) => {
      this.toast(`+${v} ✨ ${why || ''}`, 'good', 2200);
      this.scorePulse = 1;
    });
  }

  // ---------------- מפה ----------------
  async buildMap(progress) {
    const c = document.createElement('canvas');
    c.width = c.height = MAP_N;
    const g = c.getContext('2d');
    const img = g.createImageData(MAP_N, MAP_N);
    const col = new THREE.Color();
    for (let j = 0; j < MAP_N; j++) {
      for (let i = 0; i < MAP_N; i++) {
        const x = (i / (MAP_N - 1) - 0.5) * 2 * MAP_R, z = (j / (MAP_N - 1) - 0.5) * 2 * MAP_R;
        const hh = heightAt(x, z);
        let r, gg, b;
        if (hh < -0.2) {
          const d = clamp(-hh / 10, 0, 1);
          r = 40 - d * 20; gg = 120 - d * 50; b = 190 - d * 40;
        } else {
          colorAt(x, z, hh, 0.15, col);
          // הצללה לפי גובה
          const k = 0.8 + clamp(hh / 300, 0, 0.5);
          col.multiplyScalar(k);
          r = col.r * 255; gg = col.g * 255; b = col.b * 255;
          // sRGB משוער
          r = Math.pow(col.r, 1 / 2.2) * 255; gg = Math.pow(col.g, 1 / 2.2) * 255; b = Math.pow(col.b, 1 / 2.2) * 255;
        }
        const k = (j * MAP_N + i) * 4;
        img.data[k] = r; img.data[k + 1] = gg; img.data[k + 2] = b; img.data[k + 3] = 255;
      }
      if (j % 40 === 0) {
        progress && progress(j / MAP_N);
        await new Promise((res) => setTimeout(res, 0));
      }
    }
    g.putImageData(img, 0, 0);
    this.mapCanvas = c;
  }

  worldToMap(x, z, size) {
    return [((x / (MAP_R * 2)) + 0.5) * size, ((z / (MAP_R * 2)) + 0.5) * size];
  }

  // ---------------- HUD ----------------
  buildHud() {
    const hud = this.hud;
    hud.innerHTML = '';
    this.el = {};
    // מצפן
    this.el.compass = h('div', { class: 'compass' }, h('div', { class: 'compass-track' }));
    // תג שחקן
    this.el.badge = h('div', { class: 'badge' },
      h('div', { class: 'badge-crest' }),
      h('div', { class: 'badge-info' },
        h('div', { class: 'badge-name' }),
        h('div', { class: 'badge-row' },
          h('span', { class: 'badge-score' }, '✨ ', h('b', {}, '0')),
          h('span', { class: 'badge-level' }),
        ),
        h('div', { class: 'badge-stars' }),
      ));
    // מיני-מפה
    this.el.mini = h('div', { class: 'minimap' }, h('canvas', { width: 220, height: 220 }), h('div', { class: 'mini-n' }, 'צ'), h('div', { class: 'mini-time' }));
    this.miniCtx = this.el.mini.querySelector('canvas').getContext('2d');
    // כוונת והנחיות
    this.el.cross = h('div', { class: 'crosshair' });
    this.el.prompt = h('div', { class: 'prompt hidden' });
    // סרגל לחשים
    this.el.spells = h('div', { class: 'spellbar' });
    SPELLS.forEach((s, i) => {
      const slot = h('div', { class: 'slot', dataset: { i }, onclick: () => this.game.spells.select(i), title: `${s.name} – ${s.desc}` },
        h('span', { class: 'slot-key' }, i + 1),
        h('span', { class: 'slot-icon' }, s.icon),
        h('span', { class: 'slot-cd' }));
      this.el.spells.append(slot);
    });
    this.el.spellName = h('div', { class: 'spell-name' });
    this.el.mana = h('div', { class: 'mana' }, h('div', { class: 'mana-fill' }), h('span', {}, 'קסם'));
    // שיקויים פעילים וחומרים
    this.el.status = h('div', { class: 'status' });
    this.el.ingredients = h('div', { class: 'ingr' });
    // מרוץ
    this.el.race = h('div', { class: 'race hidden' });
    // רמז שליטה
    this.el.hint = h('div', { class: 'hint' });
    // כפתורי מערכת
    this.el.sys = h('div', { class: 'sysbtns' },
      h('button', { onclick: () => this.openMenu('map'), title: 'מפה (M)' }, '🗺️'),
      h('button', { onclick: () => this.openMenu('journal'), title: 'יומן (J)' }, '📖'),
      h('button', { onclick: () => this.openMenu('potions'), title: 'שיקויים (P)' }, '🧪'),
      h('button', { onclick: () => this.openMenu('settings'), title: 'תפריט (Esc)' }, '⚙️'));
    hud.append(this.el.compass, this.el.badge, this.el.mini, this.el.cross, this.el.prompt, this.el.spellName, this.el.spells, this.el.mana, this.el.status, this.el.ingredients, this.el.race, this.el.hint, this.el.sys);
    this.el.spellFill = this.el.mana.querySelector('.mana-fill');
    this.zoneMarks = [];
    ZONES.forEach((z) => {
      const m = h('div', { class: 'cmark', style: { '--c': z.color } }, z.icon, h('small', {}));
      this.el.compass.querySelector('.compass-track').append(m);
      this.zoneMarks.push({ z, el: m });
    });
    this.cardinals = ['צ', 'מז', 'ד', 'מע'].map((t, i) => {
      const m = h('div', { class: 'ccard' }, t);
      this.el.compass.querySelector('.compass-track').append(m);
      return { ang: [0, 90, 180, 270][i], el: m };
    });
    this.refreshBadge();
    this.updateHint();
  }

  updateHint() {
    this.el.hint.innerHTML = isTouch()
      ? ''
      : '<b>WASD</b> תנועה · <b>עכבר</b> מבט · <b>קליק</b> לחש · <b>1-8</b> בחירה · <b>B</b> מטאטא · <b>E</b> אינטראקציה · <b>M</b> מפה · <b>Esc</b> תפריט';
  }

  refreshBadge() {
    const hs = HOUSES[state.house] || HOUSES[1];
    const b = this.el.badge;
    b.style.setProperty('--house', hs.robe);
    b.style.setProperty('--accent', hs.accent);
    b.querySelector('.badge-name').textContent = state.name;
    const lv = levelInfo();
    const lvEl = b.querySelector('.badge-level');
    lvEl.textContent = `${lv.icon} ${lv.name} ×${lv.mult}`;
    lvEl.style.setProperty('--c', lv.color);
    const stars = starsTotal();
    b.querySelector('.badge-stars').innerHTML = '★'.repeat(stars) + '<span>' + '★'.repeat(21 - stars) + '</span>';
    b.querySelector('.badge-stars').title = `${stars} מתוך 21 כוכבים`;
  }

  // ---------------- הודעות ----------------
  toast(msg, type = 'info', ms = 3200) {
    const box = $('#toasts');
    const t = h('div', { class: 'toast ' + type }, msg);
    box.append(t);
    while (box.children.length > 5) box.firstChild.remove();
    setTimeout(() => t.classList.add('out'), ms);
    setTimeout(() => t.remove(), ms + 500);
  }

  prompt(text) {
    const p = this.el.prompt;
    if (text) {
      if (p.dataset.t !== text) { p.innerHTML = text; p.dataset.t = text; }
      p.classList.remove('hidden');
    } else { p.classList.add('hidden'); p.dataset.t = ''; }
  }

  // ---------------- דיאלוג ----------------
  say(name, text, opts = {}) {
    this.closeDialogue();
    const box = h('div', { class: 'dialogue' },
      h('div', { class: 'dlg-name' }, name),
      h('div', { class: 'dlg-text', html: text }),
      h('div', { class: 'dlg-actions' }, ...(opts.actions || []).map((a) => h('button', { class: 'btn ' + (a.cls || ''), onclick: () => { this.closeDialogue(); a.fn(); } }, a.label)),
        h('button', { class: 'btn ghost', onclick: () => this.closeDialogue() }, opts.close || 'סגור (E)')));
    document.body.append(box);
    this.dialogue = box;
    sfx('click');
    clearTimeout(this.dlgTimer);
    this.dlgTimer = setTimeout(() => { if (this.dialogue === box && !opts.actions) this.closeDialogue(); }, opts.ms || 9000);
  }

  showVictory() {
    const hs = HOUSES[state.house] || HOUSES[1];
    const conf = Array.from({ length: 60 }, (_, i) => h('i', { style: { left: Math.random() * 100 + '%', animationDelay: Math.random() * 3 + 's', background: ['#ffd35c', '#4de1ff', '#ff5a7a', '#3ddc97', '#9a7bff'][i % 5] } }));
    const box = h('div', { class: 'victory' }, ...conf,
      h('div', { class: 'cert' },
        h('div', { class: 'cert-top' }, '👑'),
        h('h1', {}, 'תעודת מאסטר הרשת'),
        h('p', {}, 'מוענקת בזאת ל'),
        h('div', { class: 'cert-name' }, state.name),
        h('p', {}, `מ${hs.name} על שליטה מלאה בכתובות IP: מבנה, רשת ומארח, פרטי וציבורי, סטטי ודינמי, DHCP, הגדרות במחשב ובראוטר סיסקו.`),
        h('div', { class: 'cert-stats' }, h('span', {}, `✨ ${formatNum(state.score)} נקודות`), h('span', {}, `★ ${starsTotal()}/21 כוכבים`)),
        h('p', { class: 'mini' }, 'עכשיו אפשר לשפר שיאים, לאסוף את כל המטאטאים ולמצוא סניצ׳ים!'),
        h('button', { class: 'btn big gold', onclick: () => { box.remove(); this.overlayOpen = Math.max(0, this.overlayOpen - 1); this.game.player.frozen = false; } }, 'המשך להסתובב בעולם')));
    this.overlayOpen++;
    this.game.player.frozen = true;
    document.body.append(box);
    sfx('levelup');
  }

  closeDialogue() {
    if (this.dialogue) { this.dialogue.remove(); this.dialogue = null; }
  }

  // ---------------- עדכון בכל פריים ----------------
  update(dt, t) {
    const g = this.game;
    const p = g.player;
    // ציון
    const target = state.score;
    this.scoreShown += (target - this.scoreShown) * Math.min(1, dt * 6);
    if (Math.abs(target - this.scoreShown) < 0.6) this.scoreShown = target;
    const sc = this.el.badge.querySelector('.badge-score b');
    sc.textContent = formatNum(this.scoreShown);
    if (this.scorePulse > 0) {
      this.scorePulse -= dt * 2;
      sc.style.transform = `scale(${1 + Math.max(0, this.scorePulse) * 0.35})`;
    }
    // מנה
    this.el.spellFill.style.width = clamp(p.mana, 0, 100) + '%';
    this.el.spellFill.classList.toggle('low', p.mana < 20);
    // לחשים
    this.el.spells.querySelectorAll('.slot').forEach((s, i) => {
      const locked = !g.spells.unlocked(i);
      s.classList.toggle('locked', locked);
      s.classList.toggle('sel', i === g.spells.selected);
      if (i === 0) s.classList.toggle('on', g.spells.lumos);
    });
    const sp = SPELLS[g.spells.selected];
    if (this.el.spellName.dataset.i !== String(g.spells.selected)) {
      this.el.spellName.dataset.i = g.spells.selected;
      this.el.spellName.innerHTML = `<b>${sp.name}</b><small>${sp.en}</small>`;
    }
    // סטטוס שיקויים
    const act = Object.keys(g.potions.active);
    const key = act.map((a) => a + Math.ceil(g.potions.active[a] / 5)).join(',') + Object.values(state.ingredients).join('-');
    if (this._skey !== key) {
      this._skey = key;
      this.el.status.innerHTML = act.map((id) => {
        const pt = POTIONS.find((x) => x.id === id);
        return `<span class="eff" style="--c:${pt.color}">${pt.icon}<i>${Math.ceil(g.potions.active[id])}</i></span>`;
      }).join('');
      this.el.ingredients.innerHTML = Object.keys(INGREDIENTS).map((k) => `<span title="${INGREDIENTS[k].name}">${INGREDIENTS[k].icon}<b>${state.ingredients[k]}</b></span>`).join('');
    }
    // מצפן
    this.updateCompass(p);
    // מיני-מפה
    if ((this.mmT = (this.mmT || 0) + dt) > 0.05) { this.mmT = 0; this.drawMini(p); }
    // שעה
    const hr = g.world.atmo.hour;
    const hh = Math.floor(hr), mm = Math.floor((hr - hh) * 60);
    this.el.mini.querySelector('.mini-time').textContent = `${hr >= 5 && hr < 19 ? '☀️' : '🌙'} ${String(hh).padStart(2, '0')}:${String(mm).padStart(2, '0')}`;
  }

  updateCompass(p) {
    const yawDeg = ((-p.yaw * 180) / Math.PI + 360) % 360; // 0 = צפון
    const W = this.el.compass.clientWidth || 520;
    const span = 130;
    const place = (el, ang, show = true) => {
      let d = ((ang - yawDeg + 540) % 360) - 180;
      const vis = show && Math.abs(d) < span / 2;
      el.style.display = vis ? '' : 'none';
      // כיוון RTL: ימין = חיובי
      el.style.left = (W / 2 + (d / span) * W) + 'px';
      el.style.opacity = vis ? String(1 - Math.abs(d) / (span / 2) * 0.6) : '0';
    };
    this.cardinals.forEach((c) => place(c.el, c.ang));
    const pts = this.game.world.zonePoints;
    this.zoneMarks.forEach(({ z, el }) => {
      const pt = pts[z.id];
      const dx = pt.x - p.pos.x, dz = pt.z - p.pos.z;
      const ang = ((Math.atan2(dx, -dz) * 180) / Math.PI + 360) % 360;
      place(el, ang);
      const dist = Math.hypot(dx, dz);
      el.querySelector('small').textContent = dist > 1000 ? (dist / 1000).toFixed(1) + 'ק״מ' : Math.round(dist) + 'מ׳';
      el.classList.toggle('done', state.zones[z.id].done);
      el.classList.toggle('wp', this.waypoint === z.id);
    });
  }

  drawMini(p) {
    const ctx = this.miniCtx;
    const S = 220;
    ctx.clearRect(0, 0, S, S);
    if (!this.mapCanvas) return;
    ctx.save();
    ctx.beginPath();
    ctx.arc(S / 2, S / 2, S / 2 - 2, 0, 7);
    ctx.clip();
    const scale = 1.5; // פיקסלים של מפה ל-פיקסל מסך
    const pxPerM = (MAP_N / (MAP_R * 2));
    ctx.translate(S / 2, S / 2);
    ctx.rotate(p.yaw);
    const sz = this.mapCanvas.width * scale * 1.6;
    const [mx, my] = this.worldToMap(p.pos.x, p.pos.z, sz);
    ctx.drawImage(this.mapCanvas, -mx, -my, sz, sz);
    // סמנים
    const m2px = sz / (MAP_R * 2);
    for (const z of ZONES) {
      const pt = this.game.world.zonePoints[z.id];
      const x = (pt.x - p.pos.x) * m2px, y = (pt.z - p.pos.z) * m2px;
      if (Math.hypot(x, y) > S / 2 + 10) continue;
      ctx.fillStyle = z.color;
      ctx.beginPath(); ctx.arc(x, y, 7, 0, 7); ctx.fill();
      ctx.strokeStyle = '#fff'; ctx.lineWidth = 2; ctx.stroke();
    }
    ctx.restore();
    // חץ שחקן
    ctx.save();
    ctx.translate(S / 2, S / 2);
    ctx.fillStyle = '#fff';
    ctx.strokeStyle = '#1a1f55';
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(0, -9); ctx.lineTo(7, 8); ctx.lineTo(0, 4); ctx.lineTo(-7, 8); ctx.closePath(); ctx.fill(); ctx.stroke();
    ctx.restore();
    // צפון
    const n = this.el.mini.querySelector('.mini-n');
    n.style.transform = `rotate(${p.yaw}rad) translateY(-96px) rotate(${-p.yaw}rad)`;
  }

  // ---------------- מצב חוסם ----------------
  get blocking() {
    return this.menuOpen || this.overlayOpen > 0 || this.titleOpen;
  }

  // ---------------- תפריט ספר הקסמים ----------------
  openMenu(tab = 'journal') {
    if (this.overlayOpen > 0 || this.titleOpen) return;
    initAudio();
    this.menuOpen = true;
    this.menuTab = tab;
    releaseLock();
    this.game.player.frozen = true;
    this.closeDialogue();
    this.renderMenu();
    sfx('click');
  }

  closeMenu() {
    this.menuOpen = false;
    const m = $('#menu');
    m.classList.add('hidden');
    m.innerHTML = '';
    this.game.player.frozen = false;
    save();
    this.refreshBadge();
  }

  renderMenu() {
    const m = $('#menu');
    m.classList.remove('hidden');
    const tabs = [
      ['map', '🗺️', 'מפה'], ['journal', '📖', 'יומן אזורים'], ['spells', '✨', 'לחשים'], ['brooms', '🧹', 'מטאטאים'],
      ['potions', '🧪', 'שיקויים'], ['settings', '⚙️', 'הגדרות'], ['help', '❓', 'עזרה'],
    ];
    const body = h('div', { class: 'book-body' });
    m.innerHTML = '';
    m.append(h('div', { class: 'book' },
      h('div', { class: 'book-tabs' },
        ...tabs.map(([id, ic, name]) => h('button', { class: 'tab' + (id === this.menuTab ? ' on' : ''), onclick: () => { this.menuTab = id; sfx('click'); this.renderMenu(); } }, h('span', {}, ic), name)),
        h('button', { class: 'tab close', onclick: () => this.closeMenu() }, '✕')),
      body));
    const fn = { map: this.tabMap, journal: this.tabJournal, spells: this.tabSpells, brooms: this.tabBrooms, potions: this.tabPotions, settings: this.tabSettings, help: this.tabHelp }[this.menuTab];
    fn.call(this, body);
  }

  tabMap(body) {
    const size = Math.min(innerHeight - 190, innerWidth - 60, 760);
    const c = h('canvas', { width: size, height: size, class: 'bigmap' });
    const ctx = c.getContext('2d');
    const draw = () => {
      ctx.clearRect(0, 0, size, size);
      ctx.drawImage(this.mapCanvas, 0, 0, size, size);
      const lbl = (x, z, text, color, r = 8) => {
        const [px, py] = this.worldToMap(x, z, size);
        ctx.fillStyle = color; ctx.strokeStyle = '#fff'; ctx.lineWidth = 2.5;
        ctx.beginPath(); ctx.arc(px, py, r, 0, 7); ctx.fill(); ctx.stroke();
        if (text) {
          ctx.font = 'bold 14px Heebo, sans-serif'; ctx.textAlign = 'center';
          ctx.lineWidth = 4; ctx.strokeStyle = 'rgba(10,12,40,.9)'; ctx.strokeText(text, px, py - r - 6);
          ctx.fillStyle = '#fff'; ctx.fillText(text, px, py - r - 6);
        }
      };
      for (const z of ZONES) {
        const pt = this.game.world.zonePoints[z.id];
        lbl(pt.x, pt.z, `${z.icon} ${z.name}`, z.color, this.waypoint === z.id ? 11 : 8);
      }
      const cs = siteById('castle');
      lbl(cs.x, cs.z, '🏰 טירת הקוסמים', '#c9a64a', 6);
      lbl(0, 0, '🏡 כפר הלומדים', '#fff', 6);
      const pl = this.game.player;
      const [px, py] = this.worldToMap(pl.pos.x, pl.pos.z, size);
      ctx.save(); ctx.translate(px, py); ctx.rotate(-pl.yaw + Math.PI);
      ctx.fillStyle = '#ff3a5c'; ctx.strokeStyle = '#fff'; ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(0, 11); ctx.lineTo(8, -9); ctx.lineTo(0, -4); ctx.lineTo(-8, -9); ctx.closePath(); ctx.fill(); ctx.stroke();
      ctx.restore();
      ctx.strokeStyle = 'rgba(255,255,255,0.5)'; ctx.lineWidth = 3; ctx.strokeRect(1, 1, size - 2, size - 2);
    };
    draw();
    c.addEventListener('click', (e) => {
      const r = c.getBoundingClientRect();
      const mx = ((e.clientX - r.left) / r.width - 0.5) * 2 * MAP_R, mz = ((e.clientY - r.top) / r.height - 0.5) * 2 * MAP_R;
      let best = null, bd = 1e9;
      for (const z of ZONES) {
        const pt = this.game.world.zonePoints[z.id];
        const d = Math.hypot(pt.x - mx, pt.z - mz);
        if (d < bd) { bd = d; best = z; }
      }
      if (best && bd < 220) { this.waypoint = best.id; sfx('click'); this.toast(`📍 יעד: ${best.name}`); draw(); }
    });
    body.append(h('div', { class: 'maptab' }, c,
      h('div', { class: 'maplegend' },
        h('h3', {}, 'מפת הממלכה'),
        h('p', {}, 'לחץ על אזור במפה כדי לסמן אותו במצפן.'),
        ...ZONES.map((z) => h('div', { class: 'legend-row', onclick: () => { this.waypoint = z.id; draw(); sfx('click'); } },
          h('i', { style: { background: z.color } }), h('span', {}, `${z.icon} ${z.name}`), state.zones[z.id].done ? h('em', {}, '✔') : null)))));
  }

  tabJournal(body) {
    const lv = levelInfo();
    const done = completedCount();
    body.append(h('div', { class: 'journal' },
      h('div', { class: 'jr-head' },
        h('div', { class: 'jr-stat' }, h('b', {}, formatNum(state.score)), 'נקודות'),
        h('div', { class: 'jr-stat' }, h('b', {}, `${done}/7`), 'אזורים'),
        h('div', { class: 'jr-stat' }, h('b', {}, `${starsTotal()}/21`), 'כוכבים'),
        h('div', { class: 'jr-stat' }, h('b', {}, state.snitch), 'סניצ׳ים')),
      h('div', { class: 'jr-grid' }, ...ZONES.map((z) => {
        const zs = state.zones[z.id];
        return h('div', { class: 'zone-card' + (zs.done ? ' done' : ''), style: { '--c': z.color } },
          h('div', { class: 'zc-icon' }, z.icon),
          h('div', { class: 'zc-main' },
            h('div', { class: 'zc-title' }, `${z.n}. ${z.name}`),
            h('div', { class: 'zc-topic' }, z.topic),
            h('div', { class: 'zc-game' }, '🎮 ', z.game),
            h('div', { class: 'zc-stars' }, '★'.repeat(zs.stars), h('span', {}, '★'.repeat(3 - zs.stars)), zs.best ? h('em', {}, ` שיא: ${formatNum(zs.best)}`) : null)),
          h('div', { class: 'zc-actions' },
            h('button', { class: 'btn small', onclick: () => { this.waypoint = z.id; this.toast(`📍 יעד: ${z.name}`); sfx('click'); } }, '📍 סמן'),
            zs.visited ? h('button', { class: 'btn small gold', onclick: () => { this.closeMenu(); this.game.fastTravel(z.id); } }, '✨ טלפורט') : h('span', { class: 'zc-lock' }, 'טרם גילית')));
      }))));
  }

  tabSpells(body) {
    body.append(h('div', { class: 'spell-grid' }, ...SPELLS.map((s, i) => {
      const un = this.game.spells.unlocked(i);
      return h('div', { class: 'spell-card' + (un ? '' : ' locked') + (i === this.game.spells.selected ? ' sel' : ''), style: { '--c': s.color }, onclick: () => { this.game.spells.select(i); this.renderMenu(); } },
        h('div', { class: 'sc-icon' }, un ? s.icon : '🔒'),
        h('div', { class: 'sc-info' },
          h('b', {}, s.name),
          h('small', {}, s.en),
          h('p', {}, s.desc),
          h('div', { class: 'sc-meta' }, `מקש ${s.key}`, s.mana ? ` · ${s.mana} קסם` : ' · חינם', un ? '' : ` · נפתח אחרי ${s.need} אזורים`)));
    })));
  }

  tabBrooms(body) {
    const done = completedCount();
    body.append(h('div', { class: 'broom-list' }, ...BROOMS.map((b) => {
      const un = done >= b.need;
      const sel = state.broom === b.id;
      return h('div', { class: 'broom-card' + (un ? '' : ' locked') + (sel ? ' sel' : ''), style: { '--c': b.trail } },
        h('div', { class: 'bc-art' }, h('i', { style: { background: b.color } }), h('em', { style: { background: `linear-gradient(90deg, transparent, ${b.bristle})` } })),
        h('div', { class: 'bc-info' }, h('b', {}, b.name), h('p', {}, b.desc),
          h('div', { class: 'bc-bar' }, h('span', { style: { width: (b.speed / 104) * 100 + '%' } })),
          h('small', {}, `מהירות ${b.speed} מ׳/ש׳`, un ? '' : ` · נפתח אחרי ${b.need} אזורי לימוד`)),
        h('button', { class: 'btn small ' + (sel ? 'gold' : ''), disabled: !un, onclick: () => { this.game.player.setBroom(b.id); save(); sfx('click'); this.renderMenu(); } }, sel ? 'נבחר ✔' : un ? 'בחר' : '🔒'));
    })));
  }

  tabPotions(body) {
    const g = this.game;
    const near = g.items.cauldrons.nearest(g.player.pos, 6);
    body.append(h('div', { class: 'potions' },
      h('div', { class: 'ingr-row' }, ...Object.entries(INGREDIENTS).map(([k, v]) => h('div', { class: 'ingr-card', style: { '--c': v.color } }, h('span', {}, v.icon), h('b', {}, state.ingredients[k]), h('small', {}, v.name)))),
      h('div', { class: 'cauldron-note ' + (near ? 'ok' : '') }, near ? '🫕 אתה ליד קלחת – אפשר לבשל!' : '🫕 כדי לבשל צריך לעמוד ליד קלחת (יש כמה בכפרים ובטירה). אפשר לשתות שיקויים בכל מקום.'),
      h('div', { class: 'potion-grid' }, ...POTIONS.map((p) => h('div', { class: 'potion-card', style: { '--c': p.color } },
        h('div', { class: 'pc-icon' }, p.icon),
        h('div', { class: 'pc-info' },
          h('b', {}, p.name), h('p', {}, p.desc),
          h('div', { class: 'pc-recipe' }, ...Object.entries(p.recipe).map(([k, n]) => h('span', { class: state.ingredients[k] >= n ? 'ok' : 'no' }, `${INGREDIENTS[k].icon}×${n}`))),
          h('div', { class: 'pc-have' }, `במלאי: ${state.potions[p.id]}`, g.potions.active[p.id] ? ` · פעיל ${Math.ceil(g.potions.active[p.id])} ש׳` : '')),
        h('div', { class: 'pc-actions' },
          h('button', { class: 'btn small', disabled: !near || !g.potions.canBrew(p.id), onclick: () => { if (g.potions.brew(p.id)) { this.toast(`🧪 בישלת ${p.name}!`, 'good'); this.renderMenu(); } } }, 'בשל'),
          h('button', { class: 'btn small gold', disabled: state.potions[p.id] <= 0, onclick: () => { if (g.potions.drink(p.id)) { this.toast(`${p.icon} שתית ${p.name}`, 'good'); this.renderMenu(); } } }, 'שתה')))))));
  }

  tabSettings(body) {
    const s = state.settings;
    const seg = (items, cur, fn) => h('div', { class: 'seg' }, ...items.map(([v, label]) => h('button', { class: cur === v ? 'on' : '', onclick: () => { fn(v); this.renderMenu(); sfx('click'); } }, label)));
    body.append(h('div', { class: 'settings' },
      h('div', { class: 'set-row' }, h('label', {}, 'רמת קושי (ניקוד מוכפל)'),
        seg(LEVELS.map((l) => [l.id, `${l.icon} ${l.name} ×${l.mult}`]), state.level, (v) => { state.level = v; save(); this.refreshBadge(); })),
      h('div', { class: 'set-row' }, h('label', {}, 'איכות גרפיקה'),
        seg([[0, 'נמוכה'], [1, 'בינונית'], [2, 'גבוהה']], s.quality, (v) => { s.quality = v; this.game.setQuality(v); save(); })),
      h('div', { class: 'set-row' }, h('label', {}, 'אפקטים קוליים'), seg([[true, 'פועל'], [false, 'כבוי']], s.sound, (v) => { s.sound = v; applySettings(); save(); })),
      h('div', { class: 'set-row' }, h('label', {}, 'מוזיקה'), seg([[true, 'פועלת'], [false, 'כבויה']], s.music, (v) => { s.music = v; applySettings(); save(); })),
      h('div', { class: 'set-row' }, h('label', {}, 'רגישות עכבר'),
        h('input', { type: 'range', min: 0.4, max: 2.2, step: 0.1, value: s.sens, oninput: (e) => { s.sens = +e.target.value; save(); } })),
      h('div', { class: 'set-row' }, h('label', {}, 'אורך יום (דקות)'),
        h('input', { type: 'range', min: 3, max: 40, step: 1, value: Math.round(1 / this.game.world.atmo.speed / 60), oninput: (e) => { this.game.world.atmo.speed = 1 / (+e.target.value * 60); } })),
      h('div', { class: 'set-row' }, h('label', {}, 'שעת היום'),
        h('input', { type: 'range', min: 0, max: 1, step: 0.01, value: this.game.world.atmo.time, oninput: (e) => { this.game.world.atmo.time = +e.target.value; } })),
      h('div', { class: 'set-actions' },
        h('button', { class: 'btn', onclick: () => { this.closeMenu(); this.game.toTitle(); } }, '🏠 למסך הפתיחה'),
        h('button', { class: 'btn danger', onclick: () => { if (confirm('למחוק את כל ההתקדמות ולהתחיל מחדש?')) { resetSave(); location.reload(); } } }, '🗑️ איפוס התקדמות'))));
  }

  tabHelp(body) {
    const row = (k, d) => h('tr', {}, h('td', {}, h('kbd', {}, k)), h('td', {}, d));
    body.append(h('div', { class: 'help' },
      h('h3', {}, '🎯 מטרת המשחק'),
      h('p', {}, 'שוטטו בעולם הקסום, מצאו את שבעת מגדלי הלימוד (קרני האור הצבעוניות) וגלו את סודות כתובות ה-IP: מבנה, רשת ומארח, פרטי וציבורי, סטטי ודינמי, DHCP, הגדרות במחשב ובראוטר סיסקו. בכל אזור: שיעור + שאלות + סיכום + משחקון. ככל שהרמה גבוהה יותר – הניקוד גדול יותר!'),
      h('table', {}, h('tbody', {},
        row('W A S D', 'תנועה'), row('Shift', 'ריצה / האצה במטאטא'), row('Space', 'קפיצה / עלייה במטאטא'), row('Ctrl / C', 'ירידה במטאטא'),
        row('עכבר', 'מבט (לחצו על המסך כדי לנעול)'), row('קליק שמאלי', 'הטלת הלחש הנבחר'), row('1 – 8', 'בחירת לחש (Q = הבא)'),
        row('B', 'עלייה / ירידה מהמטאטא'), row('E', 'דיבור, כניסה לשיעור, פתיחת תיבות'), row('P', 'שיקויים'),
        row('M', 'מפה'), row('J', 'יומן אזורים'), row('Esc', 'תפריט'))),
      h('h3', {}, '💡 טיפים'),
      h('ul', {}, h('li', {}, 'אספו עשבי קסם, פטריות וגבישים בטבע, ובשלו שיקויים בקלחות.'), h('li', {}, 'סיימו אזורים כדי לפתוח מטאטאים מהירים ולחשים חדשים.'), h('li', {}, 'עפו דרך הטבעות הזוהרות ליד מגרש המטאטאים למרוץ זמן!'), h('li', {}, 'נסו לתפוס את הסניץ׳ הזהוב עם הלחש אקסיו.'))));
  }
}
