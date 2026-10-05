import { h, randInt, pick, shuffle } from '../../util.js';
import { injectCss, icon } from '../anim.js';
import { sfx } from '../../audio.js';
import { fmt, parseIp, isPrivate, isLoopback, isApipa, isMulticast, randPrivate, randPublic } from '../ip.js';

injectCss('g3', `
.g3{position:relative;height:100%;min-height:460px;display:flex;flex-direction:column;padding:10px 16px 14px;gap:8px;overflow:hidden;background:linear-gradient(180deg,rgba(40,120,90,.2),transparent 60%)}
.g3-top{display:flex;gap:14px;align-items:center}
.g3-top span{font-weight:800;color:#cfd6ff;white-space:nowrap}
.g3-top .timer{flex:1;height:12px;border-radius:8px;background:rgba(255,255,255,.12);overflow:hidden}
.g3-top .timer i{display:block;height:100%;width:100%;background:linear-gradient(90deg,#3ddc97,#ffd35c)}
.g3-top .timer i.low{background:linear-gradient(90deg,#ff5a7a,#ff9a3a)}
.g3-field{flex:1;position:relative;min-height:220px}
.g3-card{position:absolute;left:50%;top:0;transform:translateX(-50%);background:linear-gradient(180deg,#fffaf0,#f1e4c0);color:#3a2a14;border:3px solid #b89a5a;border-radius:16px;padding:12px 28px;font:900 clamp(26px,4.4vw,44px) 'Secular One',sans-serif;direction:ltr;box-shadow:0 10px 26px rgba(0,0,0,.45);white-space:nowrap;z-index:3}
.g3-card small{display:block;font:700 12px var(--font);opacity:.7;direction:rtl;text-align:center}
.g3-card.go{transition:left .5s,top .5s,transform .5s,opacity .5s}
.g3-gates{display:grid;gap:10px;grid-auto-flow:column;grid-auto-columns:1fr}
.g3-gate{border:3px solid var(--c);background:color-mix(in srgb,var(--c) 18%,transparent);border-radius:18px;padding:10px;color:#fff;cursor:pointer;font-family:inherit;transition:all .2s;display:flex;flex-direction:column;align-items:center;gap:4px}
.g3-gate:hover:not(:disabled){transform:translateY(-4px);box-shadow:0 0 22px var(--c)}
.g3-gate .ico{width:46px;height:46px}
.g3-gate b{font-size:17px}
.g3-gate small{color:var(--muted);font-size:11.5px}
.g3-gate kbd{margin-top:2px}
.g3-gate.good{background:color-mix(in srgb,#3ddc97 45%,transparent);box-shadow:0 0 30px #3ddc97}
.g3-gate.bad{background:rgba(255,90,122,.4);box-shadow:0 0 30px #ff5a7a}
.g3-fb{min-height:46px;text-align:center;font-weight:700;line-height:1.5}
.g3-fb.good{color:#7dffb0}.g3-fb.bad{color:#ff8fa3}
.g3-end{margin:auto;text-align:center;display:flex;flex-direction:column;gap:10px;align-items:center}
.g3-end h2{font:900 38px 'Secular One';color:#ffd35c;margin:0}
`);

const GATES = [
  { id: 'private', name: 'פרטית', sub: 'נשארת ביער', color: '#3ddc97', icon: 'house', key: 'ArrowLeft', kd: '←' },
  { id: 'special', name: 'מיוחדת', sub: 'loopback · APIPA · וכו׳', color: '#c76bff', icon: 'key', key: 'ArrowDown', kd: '↓' },
  { id: 'public', name: 'ציבורית', sub: 'יוצאת לאינטרנט', color: '#4de1ff', icon: 'globe', key: 'ArrowRight', kd: '→' },
];

function makeCard(level) {
  const r = Math.random();
  const edge = level >= 2 && r < 0.45;
  const special = level >= 3 && r > 0.72;
  if (special) {
    const k = randInt(0, 4);
    const list = [
      { ip: [127, 0, 0, 1], why: '127.0.0.1 היא כתובת Loopback (בדיקה עצמית) – כתובת מיוחדת.' },
      { ip: [169, 254, randInt(1, 254), randInt(1, 254)], why: '169.254.x.x היא APIPA – כתובת שמחשב נותן לעצמו כשאין שרת DHCP.' },
      { ip: [127, randInt(1, 200), 3, 4], why: 'כל הטווח 127.0.0.0/8 הוא Loopback.' },
      { ip: [224, randInt(0, 255), randInt(0, 255), randInt(1, 254)], why: '224–239 הוא טווח Multicast.' },
      { ip: [255, 255, 255, 255], why: '255.255.255.255 היא כתובת Broadcast כללית.' },
    ];
    return { ...list[k], cat: 'special' };
  }
  if (edge) {
    const list = [
      { ip: [172, randInt(16, 31), randInt(0, 255), randInt(1, 254)], cat: 'private', why: '172.16.0.0–172.31.255.255 הוא טווח פרטי.' },
      { ip: [172, pick([15, 32, 33, 12, 40]), randInt(0, 255), randInt(1, 254)], cat: 'public', why: 'הטווח הפרטי הוא רק 172.16–172.31. כל השאר ב-172 ציבורי!' },
      { ip: [192, pick([167, 169, 170, 0]), randInt(0, 255), randInt(1, 254)], cat: 'public', why: 'רק 192.168.x.x פרטי. 192.167 או 192.169 הן ציבוריות.' },
      { ip: [11, randInt(0, 255), randInt(0, 255), randInt(1, 254)], cat: 'public', why: 'רק 10.x.x.x פרטי; 11 ציבורי.' },
      { ip: [10, randInt(0, 255), randInt(0, 255), randInt(1, 254)], cat: 'private', why: 'כל 10.0.0.0/8 הוא פרטי.' },
      { ip: [192, 168, randInt(0, 255), randInt(1, 254)], cat: 'private', why: '192.168.0.0/16 הוא פרטי.' },
    ];
    return pick(list);
  }
  if (Math.random() < 0.5) {
    const ip = randPrivate();
    return { ip, cat: 'private', why: ip[0] === 10 ? '10.0.0.0/8 – טווח פרטי.' : ip[0] === 172 ? '172.16–31 – טווח פרטי.' : '192.168.0.0/16 – טווח פרטי.' };
  }
  const ip = pick([[8, 8, 8, 8], [1, 1, 1, 1], randPublic(), randPublic(), [142, 250, randInt(1, 200), randInt(1, 250)]]);
  return { ip, cat: 'public', why: 'כתובת זו מחוץ לטווחים הפרטיים והמיוחדים – כתובת ציבורית.' };
}

export function gateGame(root, opts) {
  const { level, mult, onPoints, onDone } = opts;
  const cfg = { 1: { n: 10, t: 9 }, 2: { n: 14, t: 7 }, 3: { n: 18, t: 6 } }[level];
  let round = 0, lives = 3, raw = 0, destroyed = false, settled = true, raf = 0, startT = 0, current = null, streak = 0;
  const gates = GATES.filter((g) => level >= 3 || g.id !== 'special');
  const wrap = h('div', { class: 'g3' });
  root.append(wrap);
  const bar = h('i', {});
  const info = h('span', {}, '');
  const heart = h('span', {}, '');
  const scoreEl = h('span', {}, '');
  wrap.append(h('div', { class: 'g3-top' }, info, h('div', { class: 'timer' }, bar), heart, scoreEl));
  const field = h('div', { class: 'g3-field' });
  const fb = h('div', { class: 'g3-fb' });
  const gateEls = {};
  const gw = h('div', { class: 'g3-gates' });
  gates.forEach((g) => {
    const b = h('button', { class: 'g3-gate', style: { '--c': g.color }, onclick: () => answer(g.id) }, icon(g.icon), h('b', {}, g.name), h('small', {}, g.sub), h('kbd', {}, g.kd));
    gateEls[g.id] = b;
    gw.append(b);
  });
  wrap.append(field, fb, gw);

  const keyHandler = (e) => {
    const g = gates.find((x) => x.key === e.key);
    if (g) { e.preventDefault(); e.stopPropagation(); answer(g.id); }
  };
  window.addEventListener('keydown', keyHandler, true);

  const upd = () => {
    info.textContent = `כתובת ${Math.min(round + 1, cfg.n)}/${cfg.n}`;
    heart.textContent = '❤️'.repeat(lives) + '🖤'.repeat(3 - lives);
    scoreEl.textContent = `⭐ ${Math.round(raw)}`;
  };

  function spawn() {
    if (destroyed) return;
    if (round >= cfg.n || lives <= 0) return end();
    upd();
    current = makeCard(level);
    const el = h('div', { class: 'g3-card' }, h('small', {}, 'לאן שייכת הכתובת?'), fmt(current.ip));
    field.innerHTML = '';
    field.append(el);
    current.el = el;
    settled = false;
    Object.values(gateEls).forEach((b) => { b.disabled = false; b.classList.remove('good', 'bad'); });
    fb.textContent = '';
    fb.className = 'g3-fb';
    const dur = Math.max(3.2, cfg.t - round * 0.12) * 1000;
    startT = performance.now();
    current.dur = dur;
    cancelAnimationFrame(raf);
    const loop = () => {
      if (destroyed || settled) return;
      const k = (performance.now() - startT) / dur;
      const maxTop = Math.max(10, field.clientHeight - el.offsetHeight - 6);
      el.style.top = Math.min(1, k) * maxTop + 'px';
      bar.style.width = Math.max(0, (1 - k) * 100) + '%';
      bar.classList.toggle('low', k > 0.75);
      if (k >= 1) return answer(null);
      raf = requestAnimationFrame(loop);
    };
    loop();
  }

  function answer(id) {
    if (settled || destroyed) return;
    settled = true;
    cancelAnimationFrame(raf);
    const ok = id === current.cat;
    const el = current.el;
    Object.values(gateEls).forEach((b) => (b.disabled = true));
    const gEl = id ? gateEls[id] : null;
    if (gEl) {
      const r = gEl.getBoundingClientRect(), fr = field.getBoundingClientRect();
      el.classList.add('go');
      el.style.left = r.left - fr.left + r.width / 2 + 'px';
      el.style.top = field.clientHeight - 10 + 'px';
      el.style.opacity = '.0';
    }
    if (ok) {
      const k = (performance.now() - startT) / current.dur;
      streak++;
      const pts = Math.round(100 * (1 - k * 0.5) * (1 + Math.min(streak, 5) * 0.05));
      raw += pts;
      onPoints && onPoints(Math.round(pts * 0.5 * mult));
      gEl.classList.add('good');
      fb.className = 'g3-fb good';
      fb.textContent = `✔ נכון! ${current.why}  (+${pts}${streak > 2 ? ` · רצף ×${streak}` : ''})`;
      sfx('correct');
    } else {
      lives--;
      streak = 0;
      gEl && gEl.classList.add('bad');
      gateEls[current.cat].classList.add('good');
      fb.className = 'g3-fb bad';
      fb.textContent = `${id ? '✘ לא נכון.' : '⏰ איחרת!'} התשובה: ${gates.find((g) => g.id === current.cat).name}. ${current.why}`;
      sfx('wrong');
    }
    round++;
    upd();
    setTimeout(spawn, ok ? 1700 : 3300);
  }

  function end() {
    window.removeEventListener('keydown', keyHandler, true);
    const max = cfg.n * 100;
    const pct = Math.round((raw / max) * 100);
    wrap.innerHTML = '';
    wrap.append(h('div', { class: 'g3-end' }, icon('castle'),
      h('h2', {}, lives > 0 ? (pct >= 70 ? '🛡️ שומר שער מצטיין!' : '🛡️ השער שמור') : '💔 הפריצו את השער'),
      h('p', {}, `ניקוד משחק: ${Math.round(raw)} מתוך ${max} (${pct}%)`),
      h('p', { class: 'mini' }, 'פרטי: 10/8 · 172.16–31/12 · 192.168/16 — כל השאר ציבורי (חוץ מהכתובות המיוחדות).')));
    sfx('levelup');
    onDone({ score: raw, max, msg: `שמרת על השער עם ${Math.round(raw / 100)} החלטות נכונות 🛡️` });
  }

  spawn();
  return { destroy() { destroyed = true; cancelAnimationFrame(raf); window.removeEventListener('keydown', keyHandler, true); } };
}
