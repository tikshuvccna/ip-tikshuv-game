import { h, randInt, pick, shuffle } from '../../util.js';
import { injectCss } from '../anim.js';
import { sfx } from '../../audio.js';

injectCss('g1', `
.g1{display:grid;grid-template-columns:minmax(120px,200px) 1fr;gap:18px;height:100%;padding:12px;align-items:stretch}
.g1-tower{display:flex;flex-direction:column-reverse;gap:4px;align-items:center;justify-content:flex-start;padding:10px;background:linear-gradient(180deg,rgba(108,139,255,.12),rgba(0,0,0,.15));border-radius:18px;border:1px solid rgba(255,255,255,.14);position:relative;overflow:hidden}
.g1-floor{width:78%;flex:1;max-height:48px;border-radius:8px;background:#2a2f66;border:2px solid #3a417f;display:flex;align-items:center;justify-content:center;transition:all .5s;position:relative}
.g1-floor.lit{background:linear-gradient(180deg,#fff2b0,#ffc24a);border-color:#fff;box-shadow:0 0 22px #ffcf4a;}
.g1-floor.lit::after{content:'✦';color:#7a4a00;font-size:18px}
.g1-roof{width:0;height:0;border-left:50px solid transparent;border-right:50px solid transparent;border-bottom:34px solid #2a5fc1;margin-bottom:2px;filter:grayscale(.8);transition:all .6s}
.g1-roof.lit{filter:none;filter:drop-shadow(0 0 12px #6c8bff)}
.g1-main{display:flex;flex-direction:column;gap:14px;align-items:center;justify-content:center;min-width:0}
.g1-top{display:flex;gap:12px;align-items:center;width:100%;justify-content:space-between}
.g1-top .timer{flex:1;height:12px;border-radius:8px;background:rgba(255,255,255,.12);overflow:hidden}
.g1-top .timer i{display:block;height:100%;width:100%;background:linear-gradient(90deg,#3ddc97,#ffd35c);transition:width .1s linear}
.g1-top .timer i.low{background:linear-gradient(90deg,#ff5a7a,#ff9a3a)}
.g1-top span{font-weight:700;color:#cfd6ff;white-space:nowrap}
.g1-scroll{background:linear-gradient(180deg,#f6ecd2,#e8d6a8);color:#3a2a14;border-radius:16px;padding:12px 26px;text-align:center;box-shadow:0 8px 24px rgba(0,0,0,.4);border:3px solid #b89a5a;min-width:60%}
.g1-scroll small{display:block;font-size:14px;opacity:.8}
.g1-scroll b{display:block;font:900 clamp(34px,6vw,60px) 'Secular One',sans-serif;direction:ltr;line-height:1.1}
.g1-runes{display:flex;gap:clamp(4px,1vw,12px);direction:ltr;margin-top:6px}
.g1-rune{width:clamp(40px,6vw,66px);display:flex;flex-direction:column;align-items:center;gap:4px;cursor:pointer;user-select:none}
.g1-rune .w{color:#ffd35c;font:800 clamp(12px,1.6vw,16px) ui-monospace,monospace}
.g1-rune .stone{width:100%;aspect-ratio:1;border-radius:50%;background:radial-gradient(circle at 35% 30%,#4a5199,#1d2158);border:3px solid #5a63b8;display:flex;align-items:center;justify-content:center;font:900 clamp(20px,3vw,32px) ui-monospace,monospace;color:#7d88d6;transition:all .2s}
.g1-rune.on .stone{background:radial-gradient(circle at 35% 30%,#fff6c4,#ffb62e);color:#5a3300;border-color:#fff;box-shadow:0 0 24px #ffc54a,0 0 60px rgba(255,197,74,.5);transform:translateY(-6px) scale(1.06)}
.g1-rune.fixed{cursor:default}
.g1-sum{font:900 clamp(26px,4vw,44px) 'Secular One',sans-serif;direction:ltr;color:#fff;min-height:54px;text-shadow:0 0 18px rgba(77,225,255,.7)}
.g1-sum.hid{opacity:.25}
.g1-actions{display:flex;gap:10px;align-items:center}
.g1-actions input{width:140px;font-size:22px;text-align:center}
.g1-fb{min-height:30px;font-weight:700}
.g1-fb.good{color:#7dffb0}.g1-fb.bad{color:#ff8fa3}
.g1-win{display:flex;flex-direction:column;gap:10px;align-items:center;justify-content:center;height:100%;text-align:center}
.g1-win h2{font:900 40px 'Secular One';margin:0;color:#ffd35c}
.g1.flash .g1-scroll{animation:glowpulse .6s}
@keyframes glowpulse{0%{box-shadow:0 0 0 rgba(255,211,92,0)}50%{box-shadow:0 0 60px rgba(255,211,92,.9)}100%{box-shadow:0 8px 24px rgba(0,0,0,.4)}}
@media (max-width:760px){.g1{grid-template-columns:1fr}.g1-tower{flex-direction:row;height:40px;padding:4px}.g1-floor{height:100%;max-height:none;width:auto}.g1-roof{display:none}}
`);

const W = [128, 64, 32, 16, 8, 4, 2, 1];

export function runeGame(root, opts) {
  const { level, mult, onPoints, onDone } = opts;
  const cfg = {
    1: { rounds: 6, time: 45, maxN: 31, show: true, auto: true, mixed: 0 },
    2: { rounds: 8, time: 30, maxN: 255, show: true, auto: true, mixed: 0.25 },
    3: { rounds: 10, time: 18, maxN: 255, show: false, auto: false, mixed: 0.5 },
  }[level];
  let round = 0, raw = 0, over = false, timerId = null, destroyed = false;
  const wrap = h('div', { class: 'g1' });
  root.append(wrap);

  const tower = h('div', { class: 'g1-tower' });
  const floors = Array.from({ length: cfg.rounds }, () => h('div', { class: 'g1-floor' }));
  const roof = h('div', { class: 'g1-roof' });
  floors.forEach((f) => tower.append(f));
  tower.append(roof);
  const main = h('div', { class: 'g1-main' });
  wrap.append(tower, main);

  function nextRound() {
    if (destroyed) return;
    if (round >= cfg.rounds) return end();
    const toDec = Math.random() < cfg.mixed;
    const target = toDec ? randInt(1, cfg.maxN) : level === 1 ? randInt(1, cfg.maxN) : randInt(level === 2 ? 20 : 33, cfg.maxN);
    let timeLeft = cfg.time, wrongs = 0, settled = false;
    main.innerHTML = '';
    const bar = h('i', {});
    const top = h('div', { class: 'g1-top' }, h('span', {}, `סיבוב ${round + 1}/${cfg.rounds}`), h('div', { class: 'timer' }, bar), h('span', {}, `⭐ ${Math.round(raw)}`));
    const scroll = h('div', { class: 'g1-scroll' });
    const sum = h('div', { class: 'g1-sum' + (cfg.show || toDec ? '' : ' hid') }, cfg.show || toDec ? '0' : '?');
    const fb = h('div', { class: 'g1-fb' });
    const bitsState = toDec ? Array.from({ length: 8 }, () => (Math.random() < 0.5 ? 1 : 0)) : Array(8).fill(0);
    if (toDec) { // ודא שהערך אינו 0
      if (bitsState.every((b) => !b)) bitsState[7] = 1;
      if (level < 3) for (let i = 0; i < 3; i++) bitsState[i] = 0; // קל יותר ברמות נמוכות
    }
    const decOf = () => bitsState.reduce((a, b, i) => a + (b ? W[i] : 0), 0);
    const runes = h('div', { class: 'g1-runes' });
    const els = W.map((w, i) => {
      const e = h('div', { class: 'g1-rune' + (bitsState[i] ? ' on' : '') + (toDec ? ' fixed' : '') },
        h('div', { class: 'w' }, w), h('div', { class: 'stone' }, String(bitsState[i])));
      if (!toDec) e.addEventListener('click', () => {
        if (settled) return;
        bitsState[i] ^= 1;
        e.classList.toggle('on', !!bitsState[i]);
        e.querySelector('.stone').textContent = String(bitsState[i]);
        sfx('click');
        update();
      });
      runes.append(e);
      return e;
    });
    const actions = h('div', { class: 'g1-actions' });
    let input = null;
    if (toDec) {
      scroll.append(h('small', {}, 'קראו את הרונות והקלידו את הערך העשרוני'), h('b', {}, bitsState.join('')));
      input = h('input', { class: 'q-input', type: 'number', dir: 'ltr', placeholder: '?' });
      input.addEventListener('keydown', (e) => { e.stopPropagation(); if (e.key === 'Enter') cast(); });
      input.addEventListener('keyup', (e) => e.stopPropagation());
      actions.append(input, h('button', { class: 'btn gold', onclick: cast }, 'הטל קסם ✨'));
      setTimeout(() => input.focus(), 50);
    } else {
      scroll.append(h('small', {}, 'הדליקו רונות כך שהסכום יהיה'), h('b', {}, String(target)));
      if (!cfg.auto) actions.append(h('button', { class: 'btn gold', onclick: cast }, 'הטל קסם ✨'));
    }
    main.append(top, scroll, runes, sum, actions, fb);

    function update() {
      if (cfg.show || toDec) sum.textContent = String(decOf());
      if (cfg.auto && !toDec && decOf() === target) cast();
    }
    function cast() {
      if (settled) return;
      const val = toDec ? parseInt(input.value, 10) : decOf();
      if (toDec && isNaN(val)) return;
      if (val === target || (toDec && val === decOf())) {
        settled = true;
        clearInterval(timerId);
        const f = 0.5 + 0.5 * (timeLeft / cfg.time);
        const pts = Math.round(100 * f * Math.max(0.3, 1 - wrongs * 0.3));
        raw += pts;
        onPoints && onPoints(Math.round(pts * 0.5 * mult));
        floors[round].classList.add('lit');
        wrap.classList.add('flash');
        setTimeout(() => wrap.classList.remove('flash'), 700);
        fb.className = 'g1-fb good';
        fb.textContent = `✔ מעולה! ${toDec ? `${bitsState.join('')} = ${decOf()}` : `${target} = ${bitsState.map((b, i) => (b ? W[i] : null)).filter(Boolean).join(' + ')}`}  (+${pts})`;
        sfx('correct');
        round++;
        setTimeout(nextRound, 1500);
      } else {
        wrongs++;
        fb.className = 'g1-fb bad';
        fb.textContent = toDec ? '✘ לא מדויק – חשבו שוב: חברו את המשקלים של הרונות הדולקות.' : `✘ הסכום הוא ${decOf()} ולא ${target}. נסו שוב!`;
        sfx('wrong');
        scroll.animate([{ transform: 'translateX(0)' }, { transform: 'translateX(-8px)' }, { transform: 'translateX(8px)' }, { transform: 'translateX(0)' }], { duration: 300 });
      }
    }
    timerId = setInterval(() => {
      if (settled || destroyed) return;
      timeLeft -= 0.1;
      bar.style.width = Math.max(0, (timeLeft / cfg.time) * 100) + '%';
      bar.classList.toggle('low', timeLeft < cfg.time * 0.25);
      if (timeLeft <= 0) {
        settled = true;
        clearInterval(timerId);
        fb.className = 'g1-fb bad';
        fb.textContent = `⏰ הזמן נגמר! התשובה: ${target} = ${toDec ? decOf() : W.filter((w) => target & w).join(' + ')}`;
        sfx('wrong');
        round++;
        setTimeout(nextRound, 2000);
      }
    }, 100);
  }

  function end() {
    over = true;
    roof.classList.add('lit');
    const max = cfg.rounds * 100;
    const pct = Math.round((raw / max) * 100);
    main.innerHTML = '';
    main.append(h('div', { class: 'g1-win' },
      h('h2', {}, pct >= 80 ? '🌟 המגדל זוהר!' : pct >= 50 ? '✨ המגדל דולק' : '🕯️ המגדל מהבהב'),
      h('p', {}, `צברת ${Math.round(raw)} מתוך ${max} נקודות משחק (${pct}%).`),
      h('p', { class: 'mini' }, 'עכשיו אתם יודעים להמיר בין בינארי לעשרוני – בדיוק מה שצריך כדי לקרוא כתובות IP!')));
    sfx('levelup');
    onDone({ score: raw, max, msg: `במשחק הרונות הדלקת ${Math.round(raw / 100 * 10) / 10} קומות מלאות 🔥` });
  }

  nextRound();
  return { destroy() { destroyed = true; clearInterval(timerId); } };
}
