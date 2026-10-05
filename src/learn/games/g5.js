import { h, pick, shuffle, randInt } from '../../util.js';
import { injectCss, icon } from '../anim.js';
import { sfx } from '../../audio.js';

injectCss('g5', `
.g5{height:100%;min-height:470px;padding:10px 16px 14px;display:grid;grid-template-columns:minmax(210px,28%) 1fr;gap:14px}
.g5-left{display:flex;flex-direction:column;gap:10px}
.g5-top{display:flex;gap:12px;align-items:center;justify-content:space-between;font-weight:800;color:#cfd6ff;grid-column:1/-1}
.g5-client{background:linear-gradient(180deg,#fff8e4,#ecdcb0);color:#2b2140;border:3px solid #b89a5a;border-radius:18px;padding:12px;text-align:center;animation:fadeUp .3s}
.g5-client .ico{width:56px;height:56px;margin:0 auto}
.g5-client b{display:block;font-size:17px}
.g5-client .say{display:inline-block;margin-top:6px;padding:3px 14px;border-radius:12px;background:#6c4cff;color:#fff;font:900 14px ui-monospace,monospace;animation:pulse 1s infinite}
.g5-client .wait{height:8px;border-radius:6px;background:#0002;overflow:hidden;margin-top:8px}
.g5-client .wait i{display:block;height:100%;width:100%;background:linear-gradient(90deg,#3ddc97,#ff9a3a)}
.g5-queue{display:flex;gap:6px;flex-wrap:wrap}
.g5-queue span{background:rgba(255,255,255,.1);border-radius:10px;padding:3px 10px;font-size:12px}
.g5-ack{margin-top:8px;width:100%}
.g5-right{display:flex;flex-direction:column;gap:10px;min-width:0}
.g5-pool{display:grid;grid-template-columns:repeat(5,1fr);gap:8px;direction:ltr}
.g5-cell{position:relative;border-radius:14px;padding:8px 4px;text-align:center;border:2px solid rgba(61,220,151,.7);background:rgba(61,220,151,.18);color:#fff;cursor:pointer;font:700 clamp(11px,1.3vw,14px) ui-monospace,monospace;transition:all .2s;min-height:62px}
.g5-cell small{display:block;font:600 10.5px var(--font);color:var(--muted);direction:rtl;margin-top:2px}
.g5-cell:hover:not(.ex):not(.use){transform:translateY(-3px);box-shadow:0 0 16px #3ddc97}
.g5-cell.ex{border-color:#8791d8;background:rgba(135,145,216,.22);cursor:not-allowed}
.g5-cell.use{border-color:#6c8bff;background:rgba(108,139,255,.32)}
.g5-cell .life{position:absolute;left:6px;right:6px;bottom:4px;height:5px;border-radius:4px;background:rgba(0,0,0,.35);overflow:hidden}
.g5-cell .life i{display:block;height:100%;background:#ffd35c}
.g5-cell.bad{animation:shake .5s;border-color:#ff5a7a;background:rgba(255,90,122,.4)}
.g5-cell.renew{border-color:#ffd35c;animation:pulse 1s infinite}
.g5-cell .rn{position:absolute;top:-8px;right:-6px;background:#ffd35c;color:#3a2300;border-radius:10px;padding:0 7px;font:900 11px var(--font)}
.g5-fb{min-height:46px;font-weight:700;line-height:1.5}
.g5-fb.good{color:#7dffb0}.g5-fb.bad{color:#ff8fa3}
.g5-legend{display:flex;gap:12px;font-size:12px;color:var(--muted);flex-wrap:wrap}
.g5-end{grid-column:1/-1;margin:auto;text-align:center;display:flex;flex-direction:column;gap:10px;align-items:center}
.g5-end h2{font:900 38px 'Secular One';color:#ffd35c;margin:0}
@media (max-width:760px){.g5{grid-template-columns:1fr}}
`);

const CLIENTS = [['laptop', 'מחשב נייד של דנה'], ['phone', 'טלפון של איתי'], ['tablet', 'טאבלט הספרייה'], ['pc', 'מחשב כיתה 3'], ['phone', 'טלפון של מאיה'], ['laptop', 'מחשב של המורה'], ['pc', 'מחשב המעבדה'], ['tablet', 'טאבלט אורח'], ['phone', 'טלפון של נועם'], ['laptop', 'מחשב של רוני'], ['camera', 'מצלמה חכמה'], ['phone', 'שעון חכם']];

export function poolGame(root, opts) {
  const { level, mult, onPoints, onDone } = opts;
  const cfg = {
    1: { n: 8, every: 7000, patience: 14, lease: 38, needAck: false, excluded: [10, 11, 12], pre: 0, renew: false },
    2: { n: 12, every: 5500, patience: 11, lease: 30, needAck: true, excluded: [10, 11, 12, 20], pre: 3, renew: false },
    3: { n: 16, every: 4200, patience: 9, lease: 22, needAck: true, excluded: [10, 11, 12, 20, 21], pre: 5, renew: true },
  }[level];
  const START = 10;
  const cells = Array.from({ length: 20 }, (_, i) => ({ n: START + i, ex: cfg.excluded.includes(START + i), life: 0, max: 0, renewAt: 0 }));
  const exNames = { 10: 'ראוטר', 11: 'מדפסת', 12: 'שרת', 20: 'מצלמה', 21: 'שרת DNS' };
  let served = 0, hearts = 3, raw = 0, spawned = 0, destroyed = false, active = null, queue = [], lastSpawn = 0, timerId = null, mistakes = 0, over = false;
  const wrap = h('div', { class: 'g5' });
  root.append(wrap);
  const info = h('span', {});
  const heartEl = h('span', {});
  const scoreEl = h('span', {});
  wrap.append(h('div', { class: 'g5-top' }, info, h('span', {}, 'לחצו על כתובת פנויה כדי להציע אותה ללקוח (Offer)'), heartEl, scoreEl));
  const left = h('div', { class: 'g5-left' });
  const clientBox = h('div');
  const queueEl = h('div', { class: 'g5-queue' });
  left.append(clientBox, queueEl);
  const right = h('div', { class: 'g5-right' });
  const poolEl = h('div', { class: 'g5-pool' });
  const fb = h('div', { class: 'g5-fb' }, 'הלקוחות מגיעים אחד אחד. כתובת תפוסה או מוחרגת = התנגשות!');
  right.append(h('div', { class: 'g5-legend' }, h('span', {}, '🟩 פנויה'), h('span', {}, '🟦 מושכרת (Lease)'), h('span', {}, '⬜ מוחרגת (סטטית)')), poolEl, fb);
  wrap.append(left, right);

  const cellEls = cells.map((c, i) => {
    const el = h('button', { class: 'g5-cell' }, `192.168.1.${c.n}`, h('small', {}, ''), h('div', { class: 'life' }, h('i', {})));
    el.addEventListener('click', () => clickCell(i));
    poolEl.append(el);
    return el;
  });
  const lifeBar = (i) => cellEls[i].querySelector('.life i');
  const draw = () => {
    cells.forEach((c, i) => {
      const el = cellEls[i];
      el.classList.toggle('ex', c.ex);
      el.classList.toggle('use', !c.ex && c.life > 0);
      el.querySelector('small').textContent = c.ex ? `🔒 ${exNames[c.n] || 'סטטי'}` : c.life > 0 ? (c.who || 'מושכרת') : 'פנויה';
      el.querySelector('.life').style.display = !c.ex && c.life > 0 ? '' : 'none';
      if (c.life > 0) lifeBar(i).style.width = (c.life / c.max) * 100 + '%';
    });
    info.textContent = `לקוחות שטופלו: ${served}/${cfg.n}`;
    heartEl.textContent = '❤️'.repeat(hearts) + '🖤'.repeat(3 - hearts);
    scoreEl.textContent = `⭐ ${Math.round(raw)}`;
    queueEl.innerHTML = '';
    queue.forEach(() => queueEl.append(h('span', {}, '⏳ ממתין')));
  };
  // מושכרות מראש
  const free = () => cells.map((c, i) => i).filter((i) => !cells[i].ex && cells[i].life <= 0);
  for (let k = 0; k < cfg.pre; k++) {
    const f = free(); const i = pick(f);
    cells[i].max = cfg.lease * (0.5 + Math.random()); cells[i].life = cells[i].max * (0.4 + Math.random() * 0.5); cells[i].who = pick(CLIENTS)[1];
  }

  function newClient() {
    spawned++;
    const [ic, name] = CLIENTS[(spawned - 1) % CLIENTS.length];
    queue.push({ ic, name });
    lastSpawn = performance.now();
    if (!active) nextActive();
    draw();
  }
  function nextActive() {
    active = queue.shift() || null;
    if (!active) { clientBox.innerHTML = ''; return; }
    active.stage = 'discover';
    active.t = 0;
    active.patience = cfg.patience;
    render();
  }
  function render() {
    clientBox.innerHTML = '';
    if (!active) return;
    const wait = h('i', {});
    const c = h('div', { class: 'g5-client' }, icon(active.ic), h('b', {}, active.name),
      h('div', { class: 'say' }, active.stage === 'discover' ? '📣 DISCOVER – מחפש שרת DHCP!' : '📨 REQUEST – אני לוקח את ' + active.ip),
      h('div', { class: 'wait' }, wait));
    active.waitEl = wait;
    if (active.stage === 'request') {
      c.append(h('button', { class: 'btn gold g5-ack', onclick: ack }, '✔ ACK – אשר הקצאה'));
    }
    clientBox.append(c);
  }
  function fail(msg) {
    hearts--; mistakes++;
    fb.className = 'g5-fb bad'; fb.textContent = msg;
    sfx('wrong');
    draw();
    if (hearts <= 0) end();
  }
  function succeed(i) {
    const pts = Math.round(100 * Math.max(0.4, active.patience / cfg.patience));
    raw += pts;
    onPoints && onPoints(Math.round(pts * 0.5 * mult));
    const c = cells[i];
    c.max = cfg.lease * (0.8 + Math.random() * 0.4);
    c.life = c.max;
    c.who = active.name;
    c.renewAt = cfg.renew ? c.max * 0.5 : 0;
    c.renewed = false;
    served++;
    fb.className = 'g5-fb good';
    fb.textContent = `✔ ${active.name} קיבל 192.168.1.${c.n} (ACK) · +${pts}`;
    sfx('correct');
    active = null;
    draw();
    if (served >= cfg.n) return setTimeout(end, 700);
    nextActive();
  }
  function clickCell(i) {
    if (over) return;
    const c = cells[i];
    if (c.renewing) {
      c.life = c.max; c.renewing = false; c.renewed = true;
      cellEls[i].classList.remove('renew'); cellEls[i].querySelector('.rn')?.remove();
      fb.className = 'g5-fb good'; fb.textContent = `↻ חידשת Lease ל-${c.who} (בקשת Renew מאושרת)`; sfx('collect'); draw();
      return;
    }
    if (!active || active.stage !== 'discover') return;
    if (c.ex) { cellEls[i].classList.add('bad'); setTimeout(() => cellEls[i].classList.remove('bad'), 600); return fail(`✘ ${c.n} מוחרגת – היא שייכת ל${exNames[c.n] || 'מכשיר סטטי'}. הצעת אותה והייתה התנגשות!`); }
    if (c.life > 0) { cellEls[i].classList.add('bad'); setTimeout(() => cellEls[i].classList.remove('bad'), 600); return fail(`✘ הכתובת 192.168.1.${c.n} כבר מושכרת ל${c.who}. אסור להציע כתובת תפוסה!`); }
    sfx('click');
    if (!cfg.needAck) { active.ip = `192.168.1.${c.n}`; return succeed(i); }
    active.stage = 'request';
    active.ip = `192.168.1.${c.n}`;
    active.cell = i;
    c.life = c.max = 9999; c.who = active.name + ' (Offer)';
    fb.className = 'g5-fb'; fb.textContent = 'OFFER נשלחה. הלקוח מבקש (REQUEST) – אשרו עם ACK!';
    render(); draw();
  }
  function ack() {
    if (!active || active.stage !== 'request') return;
    const i = active.cell;
    cells[i].life = 0;
    succeed(i);
  }

  function tick() {
    if (destroyed || over) return;
    const dt = 0.1;
    const now = performance.now();
    if (spawned < cfg.n && now - lastSpawn > cfg.every && queue.length < 3) newClient();
    cells.forEach((c, i) => {
      if (c.ex || c.life <= 0 || c.life > 9000) return;
      c.life -= dt;
      if (cfg.renew && !c.renewed && !c.renewing && c.renewAt && c.life < c.renewAt && c.life > 4) {
        c.renewing = true;
        cellEls[i].classList.add('renew');
        cellEls[i].append(h('span', { class: 'rn' }, '↻ Renew'));
      }
      if (c.life <= 0) {
        c.life = 0; c.renewing = false;
        cellEls[i].classList.remove('renew'); cellEls[i].querySelector('.rn')?.remove();
        fb.className = 'g5-fb'; fb.textContent = `⏳ ה-Lease של ${c.who} פג – הכתובת 192.168.1.${c.n} חזרה למאגר.`;
      }
    });
    if (active) {
      active.patience -= dt;
      active.waitEl && (active.waitEl.style.width = Math.max(0, (active.patience / cfg.patience) * 100) + '%');
      if (active.patience <= 0) {
        if (active.cell !== undefined) cells[active.cell].life = 0;
        const nm = active.name;
        active = null;
        fail(`⌛ ${nm} חיכה יותר מדי ולא קיבל כתובת – הוא קיבל 169.254.x.x (APIPA).`);
        served++;
        if (served >= cfg.n) return setTimeout(end, 500);
        nextActive();
      }
    }
    draw();
  }
  timerId = setInterval(tick, 100);
  newClient();

  function end() {
    if (over) return;
    over = true;
    clearInterval(timerId);
    const max = cfg.n * 100;
    const sc = Math.min(max, raw);
    const pct = Math.round((sc / max) * 100);
    wrap.innerHTML = '';
    wrap.append(h('div', { class: 'g5-end' }, icon('dragon'),
      h('h2', {}, hearts > 0 ? '🐉 שומר מאגר מצטיין!' : '💥 המאגר התמלא בתקלות'),
      h('p', {}, `ניקוד משחק: ${Math.round(sc)}/${max} (${pct}%) · התנגשויות/איחורים: ${mistakes}`),
      h('p', { class: 'mini' }, 'שרת DHCP נותן רק כתובות פנויות שאינן מוחרגות, ומחזיר למאגר כתובות שה-Lease שלהן פג.')));
    sfx('levelup');
    onDone({ score: sc, max, msg: `טיפלת ב-${served} לקוחות, עם ${mistakes} תקלות 🐉` });
  }
  return { destroy() { destroyed = true; clearInterval(timerId); } };
}
