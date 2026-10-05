import { h, randInt, pick, shuffle } from '../../util.js';
import { injectCss, icon } from '../anim.js';
import { sfx } from '../../audio.js';
import { parseIp, fmt, networkOf, broadcastOf, intToIp, ipToInt } from '../ip.js';

injectCss('g2', `
.g2{position:relative;height:100%;min-height:440px;display:flex;flex-direction:column;padding:10px 16px 14px;gap:10px;overflow:hidden;background:linear-gradient(180deg,rgba(60,90,200,.18),rgba(0,0,0,0) 55%)}
.g2-top{display:flex;gap:14px;align-items:center}
.g2-top .timer{flex:1;height:12px;border-radius:8px;background:rgba(255,255,255,.12);overflow:hidden}
.g2-top .timer i{display:block;height:100%;width:100%;background:linear-gradient(90deg,#3ddc97,#ffd35c);transition:width .1s linear}
.g2-top .timer i.low{background:linear-gradient(90deg,#ff5a7a,#ff9a3a)}
.g2-top span{font-weight:800;color:#cfd6ff;white-space:nowrap}
.g2-hearts{letter-spacing:2px;font-size:20px}
.g2-letter{align-self:center;display:flex;align-items:center;gap:14px;background:linear-gradient(180deg,#fffaf0,#f1e4c0);color:#3a2a14;padding:10px 26px;border-radius:16px;border:3px solid #b89a5a;box-shadow:0 8px 22px rgba(0,0,0,.4);transform:rotate(-1deg)}
.g2-letter .env{font-size:34px}
.g2-letter small{display:block;font-size:13px;opacity:.75}
.g2-letter b{font:900 clamp(26px,4.4vw,42px) 'Secular One',sans-serif;direction:ltr;display:block}
.g2-letter .net{color:#2a5adf}.g2-letter .host{color:#12985f}
.g2-sky{flex:1;position:relative;min-height:120px}
.g2-tower{position:absolute;left:4%;bottom:0;width:90px;opacity:.95}
.g2-owl{position:absolute;width:62px;height:62px;z-index:3;transition:left 1.1s cubic-bezier(.4,.1,.3,1),top 1.1s cubic-bezier(.4,.1,.3,1),transform .6s}
.g2-owl .ico{width:100%;height:100%;filter:drop-shadow(0 4px 6px #0008)}
.g2-owl.fall{transition:top .9s cubic-bezier(.6,0,1,.6),transform .9s;transform:rotate(540deg) scale(.7)}
.g2-owl .mail{position:absolute;right:-14px;top:30px;font-size:24px}
.g2-houses{display:grid;gap:10px;grid-auto-flow:column;grid-auto-columns:1fr}
.g2-house{border:3px solid rgba(255,255,255,.28);background:rgba(255,255,255,.07);border-radius:18px;padding:8px 6px;text-align:center;cursor:pointer;transition:all .2s;color:#fff;font-family:inherit}
.g2-house:hover:not(:disabled){transform:translateY(-4px);border-color:var(--gold);background:rgba(255,211,92,.12)}
.g2-house .ico{width:52px;height:52px;margin:0 auto}
.g2-house b{display:block;font:800 clamp(12px,1.7vw,16px) ui-monospace,monospace;direction:ltr;margin-top:3px}
.g2-house small{color:var(--muted);font-size:11.5px}
.g2-house.good{border-color:#3ddc97;background:rgba(61,220,151,.28);box-shadow:0 0 28px rgba(61,220,151,.6)}
.g2-house.bad{border-color:#ff5a7a;background:rgba(255,90,122,.25)}
.g2-house.reveal{border-color:#ffd35c;box-shadow:0 0 28px rgba(255,211,92,.6)}
.g2-fb{min-height:44px;text-align:center;font-weight:700;line-height:1.5}
.g2-fb.good{color:#7dffb0}.g2-fb.bad{color:#ff8fa3}
.g2-end{margin:auto;text-align:center;display:flex;flex-direction:column;gap:10px;align-items:center}
.g2-end h2{font:900 38px 'Secular One';color:#ffd35c;margin:0}
.g2-pop{position:absolute;font:900 24px 'Secular One';color:#ffd35c;text-shadow:0 0 12px #000;animation:g2pop 1.1s forwards;z-index:5;pointer-events:none}
@keyframes g2pop{from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-60px)}}
`);

const rnd = (a, b) => randInt(a, b);

function makeSet(kind) {
  if (kind === 'A') {
    const thirds = shuffle([1, 2, 3, 10, 20, 30, 100]).slice(0, 3);
    return thirds.map((t) => ({ net: [192, 168, t, 0], prefix: 24 }));
  }
  if (kind === 'B') {
    const a = rnd(1, 40), b = a + rnd(1, 20);
    return shuffle([
      { net: [10, 0, 0, 0], prefix: 8 },
      { net: [172, rnd(16, 31), 0, 0], prefix: 16 },
      { net: [192, 168, a, 0], prefix: 24 },
      { net: [192, 168, b, 0], prefix: 24 },
    ]);
  }
  if (kind === 'C') {
    const t = rnd(1, 200);
    return [0, 64, 128, 192].map((d) => ({ net: [192, 168, t, d], prefix: 26 }));
  }
  if (kind === 'D') { // /27 בשתי רשתות נפרדות
    const t = rnd(1, 200);
    return shuffle([0, 32, 64, 96]).map((d) => ({ net: [10, 1, t, d], prefix: 27 })).sort((x, y) => x.net[3] - y.net[3]);
  }
  // E: /20
  const s = rnd(16, 31);
  return [0, 16, 32, 48].map((d) => ({ net: [172, s, d, 0], prefix: 20 }));
}

function randomHost(house) {
  const n = ipToInt(house.net);
  const size = 2 ** (32 - house.prefix);
  const off = rnd(1, Math.min(size - 2, 100000));
  let v = n + off;
  // לגוון: הרבה פעמים נבחר ערך אקראי בתוך הטווח
  v = n + 1 + Math.floor(Math.random() * (size - 2));
  return intToIp(v);
}

export function owlGame(root, opts) {
  const { level, mult, onPoints, onDone } = opts;
  const cfg = {
    1: { rounds: 6, time: 40, kinds: ['A'], hint: true },
    2: { rounds: 8, time: 28, kinds: ['A', 'B', 'B', 'B'], hint: false },
    3: { rounds: 10, time: 18, kinds: ['B', 'C', 'C', 'D', 'E'], hint: false },
  }[level];
  let round = 0, hearts = 3, raw = 0, timerId = null, destroyed = false;
  const wrap = h('div', { class: 'g2' });
  root.append(wrap);

  function next() {
    if (destroyed) return;
    if (round >= cfg.rounds || hearts <= 0) return end();
    wrap.innerHTML = '';
    const kind = cfg.kinds[round % cfg.kinds.length] === 'B' && level === 3 && round % 5 === 0 ? 'B' : pick(cfg.kinds);
    const houses = makeSet(kind);
    const target = pick(houses);
    const ip = randomHost(target);
    let timeLeft = cfg.time, settled = false;
    const bar = h('i', {});
    const heartsEl = h('span', { class: 'g2-hearts' }, '❤️'.repeat(hearts) + '🖤'.repeat(3 - hearts));
    const top = h('div', { class: 'g2-top' }, h('span', {}, `מכתב ${round + 1}/${cfg.rounds}`), h('div', { class: 'timer' }, bar), heartsEl, h('span', {}, `⭐ ${Math.round(raw)}`));
    const ipStr = fmt(ip);
    let ipHtml = ipStr;
    if (cfg.hint && target.prefix % 8 === 0) {
      const k = target.prefix / 8;
      ipHtml = `<span class="net">${ip.slice(0, k).join('.')}.</span><span class="host">${ip.slice(k).join('.')}</span>`;
    }
    const letter = h('div', { class: 'g2-letter' }, h('span', { class: 'env' }, '✉️'), h('div', {}, h('small', {}, 'לאיזו רשת יש למסור את המכתב? כתובת היעד:'), h('b', { html: ipHtml })));
    const sky = h('div', { class: 'g2-sky' });
    const tower = h('div', { class: 'g2-tower' }, icon('castle'));
    const owl = h('div', { class: 'g2-owl' }, icon('owl'), h('span', { class: 'mail' }, '✉️'));
    sky.append(tower, owl);
    const fb = h('div', { class: 'g2-fb' });
    const hs = h('div', { class: 'g2-houses' });
    const btns = houses.map((hs2, i) => {
      const b = h('button', { class: 'g2-house' }, icon('house'), h('b', {}, `${fmt(hs2.net)}/${hs2.prefix}`), h('small', {}, 'רשת'));
      b.addEventListener('click', () => choose(i, b));
      hs.append(b);
      return b;
    });
    wrap.append(top, letter, sky, hs, fb);

    const placeOwl = (x, y, instant) => {
      if (instant) owl.style.transition = 'none';
      owl.style.left = x + 'px';
      owl.style.top = y + 'px';
      if (instant) { void owl.offsetWidth; owl.style.transition = ''; }
    };
    requestAnimationFrame(() => { placeOwl(sky.clientWidth * 0.04 + 14, sky.clientHeight - 80, true); });

    const bits = (a) => a;
    function explain() {
      const t = target;
      return `${ipStr} שייך לרשת ${fmt(t.net)}/${t.prefix} (שידור: ${fmt(broadcastOf(ip, t.prefix))}).`;
    }

    function choose(i, btn) {
      if (settled) return;
      settled = true;
      clearInterval(timerId);
      btns.forEach((b) => (b.disabled = true));
      const ok = houses[i] === target;
      const r = btn.getBoundingClientRect(), sr = sky.getBoundingClientRect();
      const tx = r.left - sr.left + r.width / 2 - 31, ty = sky.clientHeight - 20;
      owl.style.left = tx + 'px';
      owl.style.top = ty + 'px';
      sfx('owl');
      setTimeout(() => {
        if (destroyed) return;
        if (ok) {
          const f = 0.5 + 0.5 * (timeLeft / cfg.time);
          const pts = Math.round(100 * f);
          raw += pts;
          onPoints && onPoints(Math.round(pts * 0.5 * mult));
          btn.classList.add('good');
          fb.className = 'g2-fb good';
          fb.textContent = `✔ נמסר! ${explain()}  (+${pts})`;
          const pop = h('div', { class: 'g2-pop', style: { left: tx + 'px', top: ty - 20 + 'px' } }, `+${pts}`);
          sky.append(pop);
          sfx('correct');
          round++;
          setTimeout(next, 2300);
        } else {
          hearts--;
          btn.classList.add('bad');
          btns[houses.indexOf(target)].classList.add('reveal');
          owl.classList.add('fall');
          owl.style.top = sky.clientHeight + 40 + 'px';
          fb.className = 'g2-fb bad';
          fb.textContent = `✘ הינשוף טעה… ${explain()}`;
          sfx('wrong');
          round++;
          setTimeout(next, 3200);
        }
      }, 1200);
    }

    timerId = setInterval(() => {
      if (settled || destroyed) return;
      timeLeft -= 0.1;
      bar.style.width = Math.max(0, (timeLeft / cfg.time) * 100) + '%';
      bar.classList.toggle('low', timeLeft < cfg.time * 0.25);
      if (timeLeft <= 0) {
        settled = true;
        clearInterval(timerId);
        hearts--;
        btns.forEach((b) => (b.disabled = true));
        btns[houses.indexOf(target)].classList.add('reveal');
        fb.className = 'g2-fb bad';
        fb.textContent = `⏰ הזמן נגמר! ${explain()}`;
        sfx('wrong');
        round++;
        setTimeout(next, 3000);
      }
    }, 100);
  }

  function end() {
    clearInterval(timerId);
    const max = cfg.rounds * 100;
    const pct = Math.round((raw / max) * 100);
    wrap.innerHTML = '';
    wrap.append(h('div', { class: 'g2-end' },
      icon('owl'),
      h('h2', {}, hearts > 0 ? (pct >= 75 ? '🦉 דוור מצטיין!' : '🦉 משלוחים הגיעו!') : '💔 נגמרו הלבבות'),
      h('p', {}, `נקודות משחק: ${Math.round(raw)} מתוך ${max} (${pct}%)`),
      h('p', { class: 'mini' }, 'זכרו: כדי לדעת באיזו רשת הכתובת, משתמשים במסיכה – ביטי הרשת קובעים.')));
    wrap.querySelector('.ico').style.width = '90px';
    sfx('levelup');
    onDone({ score: raw, max, msg: `מסרת בהצלחה ${Math.round(raw / 100)} מכתבים לרשת הנכונה 🦉` });
  }

  next();
  return { destroy() { destroyed = true; clearInterval(timerId); } };
}
