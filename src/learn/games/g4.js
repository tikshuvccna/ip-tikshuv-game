import { h, shuffle } from '../../util.js';
import { injectCss, icon } from '../anim.js';
import { sfx } from '../../audio.js';

injectCss('g4', `
.g4{height:100%;min-height:440px;padding:10px 16px 14px;display:flex;flex-direction:column;gap:10px}
.g4-top{display:flex;gap:16px;align-items:center;justify-content:space-between;font-weight:800;color:#cfd6ff;flex-wrap:wrap}
.g4-grid{flex:1;display:grid;gap:10px;align-content:center}
.g4-card{perspective:800px;cursor:pointer;min-height:92px}
.g4-in{position:relative;width:100%;height:100%;min-height:92px;transition:transform .5s;transform-style:preserve-3d}
.g4-card.up .g4-in,.g4-card.done .g4-in{transform:rotateY(180deg)}
.g4-f,.g4-b{position:absolute;inset:0;backface-visibility:hidden;border-radius:16px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px;padding:8px;text-align:center;border:2px solid var(--line)}
.g4-f{background:repeating-linear-gradient(45deg,#2a3380,#2a3380 10px,#232b70 10px,#232b70 20px);font-size:34px;color:#ffd35c}
.g4-b{transform:rotateY(180deg);background:linear-gradient(160deg,#fff8e4,#ecdcb0);color:#2b2140;font-weight:700;font-size:clamp(11.5px,1.5vw,14.5px);line-height:1.35}
.g4-b .ico{width:38px;height:38px}
.g4-b .tag{display:inline-block;padding:2px 12px;border-radius:10px;color:#fff;font-weight:900;font-size:13px}
.g4-b .tag.s{background:#3a5bd9}.g4-b .tag.d{background:#1f9d62}
.g4-card.done .g4-b{box-shadow:0 0 22px #3ddc97;border-color:#3ddc97}
.g4-card.bad .g4-b{box-shadow:0 0 22px #ff5a7a;border-color:#ff5a7a}
.g4-fb{min-height:40px;text-align:center;font-weight:700}
.g4-fb.good{color:#7dffb0}.g4-fb.bad{color:#ff8fa3}
.g4-end{margin:auto;text-align:center;display:flex;flex-direction:column;gap:10px;align-items:center}
.g4-end h2{font:900 38px 'Secular One';color:#ffd35c;margin:0}
`);

const PAIRS = [
  ['printer', 'מדפסת רשת במשרד', 's', 'כולם צריכים למצוא אותה תמיד באותה כתובת'],
  ['phone', 'טלפון של אורח', 'd', 'מתחבר לזמן קצר ועוזב'],
  ['server', 'שרת אתר החברה', 's', 'חייב כתובת קבועה כדי שימצאו אותו'],
  ['laptop', 'מחשב נייד של תלמיד', 'd', 'עובר בין רשתות ומקבל כתובת אוטומטית'],
  ['router', 'ממשק LAN של הראוטר', 's', 'זהו שער ברירת המחדל של כולם'],
  ['tablet', 'טאבלטים בקפיטריה', 'd', 'הרבה מכשירים שמתחלפים כל הזמן'],
  ['camera', 'מצלמת אבטחה', 's', 'צופים בה מרחוק תמיד מאותה כתובת'],
  ['server', 'שרת DNS פנימי', 's', 'הכתובת שלו מוגדרת בכל המכשירים'],
  ['phone', 'שעון חכם של עובד', 'd', 'אין טעם להגדיר ידנית – DHCP יטפל'],
  ['pc', 'מחשבי כיתת המחשבים', 'd', 'ניהול אוטומטי חוסך עבודה ושגיאות'],
  ['server', 'שרת ה-DHCP עצמו', 's', 'הוא חייב כתובת קבועה כדי שיפנו אליו'],
  ['laptop', 'רשת Wi-Fi לאורחים', 'd', 'מכשירים זמניים מקבלים כתובת מהמאגר'],
];

export function memoryGame(root, opts) {
  const { level, mult, onPoints, onDone } = opts;
  const cfg = { 1: { pairs: 4, peek: 4000, cols: 4 }, 2: { pairs: 6, peek: 3000, cols: 4 }, 3: { pairs: 8, peek: 2200, cols: 4, limit: 150 } }[level];
  const picked = shuffle(PAIRS).slice(0, cfg.pairs);
  const cards = shuffle(picked.flatMap((p, i) => [{ i, side: 'q', p }, { i, side: 'a', p }]));
  let open = [], matched = 0, mistakes = 0, locked = true, destroyed = false, timeLeft = cfg.limit || 0, timerId = null;
  const wrap = h('div', { class: 'g4' });
  root.append(wrap);
  const info = h('span', {}, '');
  const timer = h('span', {}, '');
  wrap.append(h('div', { class: 'g4-top' }, info, timer, h('span', {}, 'התאימו כל מכשיר לסוג הכתובת הנכון ולסיבה')));
  const grid = h('div', { class: 'g4-grid', style: { gridTemplateColumns: `repeat(${cfg.cols}, 1fr)` } });
  const fb = h('div', { class: 'g4-fb' }, 'זוכרים את המיקומים… הקלפים ייסגרו עוד רגע');
  wrap.append(grid, fb);
  const els = cards.map((c, idx) => {
    const back = c.side === 'q'
      ? h('div', { class: 'g4-b' }, icon(c.p[0]), c.p[1])
      : h('div', { class: 'g4-b' }, h('span', { class: 'tag ' + c.p[2] }, c.p[2] === 's' ? 'סטטית 📌' : 'דינמית 🔄'), c.p[3]);
    const el = h('div', { class: 'g4-card up' }, h('div', { class: 'g4-in' }, h('div', { class: 'g4-f' }, '✦'), back));
    el.addEventListener('click', () => flip(idx));
    grid.append(el);
    return el;
  });
  const upd = () => { info.textContent = `זוגות: ${matched}/${cfg.pairs} · טעויות: ${mistakes}`; };
  upd();
  setTimeout(() => {
    if (destroyed) return;
    els.forEach((e) => e.classList.remove('up'));
    locked = false;
    fb.textContent = 'מצאו זוגות: מכשיר + סוג הכתובת שמתאים לו.';
    if (cfg.limit) {
      timerId = setInterval(() => {
        timeLeft -= 1;
        timer.textContent = `⏱ ${timeLeft}`;
        if (timeLeft <= 0) end();
      }, 1000);
    }
  }, cfg.peek);

  function flip(idx) {
    if (locked || destroyed) return;
    const el = els[idx];
    if (el.classList.contains('up') || el.classList.contains('done')) return;
    el.classList.add('up');
    sfx('click');
    open.push(idx);
    if (open.length === 2) {
      locked = true;
      const [a, b] = open.map((k) => cards[k]);
      if (a.i === b.i && a.side !== b.side) {
        setTimeout(() => {
          open.forEach((k) => { els[k].classList.remove('up'); els[k].classList.add('done'); });
          open = [];
          matched++;
          const pts = Math.max(40, 100 - mistakes * 8);
          onPoints && onPoints(Math.round(pts * 0.5 * mult));
          fb.className = 'g4-fb good';
          fb.textContent = `✔ ${a.p[1]} ← ${a.p[2] === 's' ? 'סטטית' : 'דינמית'}: ${a.p[3]}`;
          sfx('correct');
          upd();
          locked = false;
          if (matched === cfg.pairs) setTimeout(end, 900);
        }, 500);
      } else {
        mistakes++;
        const q = [a, b].find((c) => c.side === 'q');
        const ans = [a, b].find((c) => c.side === 'a');
        setTimeout(() => {
          open.forEach((k) => els[k].classList.add('bad'));
          fb.className = 'g4-fb bad';
          fb.textContent = q && ans && q.p !== ans.p ? `✘ לא מתאים. נסו לחשוב: האם ${q.p[1]} צריך כתובת קבועה או מתחלפת?` : '✘ שני קלפים מאותו סוג – חפשו מכשיר + תיאור.';
          sfx('wrong');
          upd();
        }, 450);
        setTimeout(() => {
          open.forEach((k) => { els[k].classList.remove('up', 'bad'); });
          open = [];
          locked = false;
        }, 1900);
      }
    }
  }

  function end() {
    clearInterval(timerId);
    if (destroyed) return;
    locked = true;
    const max = cfg.pairs * 100;
    const raw = Math.max(0, matched * 100 - mistakes * 12);
    const sc = Math.min(max, raw);
    const pct = Math.round((sc / max) * 100);
    wrap.innerHTML = '';
    wrap.append(h('div', { class: 'g4-end' }, icon('scroll'),
      h('h2', {}, matched === cfg.pairs ? '🧠 זיכרון קסום!' : '⌛ הזמן נגמר'),
      h('p', {}, `זוגות שנמצאו: ${matched}/${cfg.pairs} · טעויות: ${mistakes} · ניקוד משחק: ${sc}/${max}`),
      h('p', { class: 'mini' }, 'סטטית: שרתים, מדפסות, ראוטרים, מצלמות. דינמית: מחשבים אישיים, טלפונים ואורחים.')));
    sfx('levelup');
    onDone({ score: sc, max, msg: `התאמת ${matched} מתוך ${cfg.pairs} זוגות עם ${mistakes} טעויות 🧠` });
  }
  return { destroy() { destroyed = true; clearInterval(timerId); } };
}
