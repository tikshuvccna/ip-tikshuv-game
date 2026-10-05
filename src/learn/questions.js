import { h, shuffle } from '../util.js';
import { sfx } from '../audio.js';

const TIER_PTS = { 1: 10, 2: 15, 3: 20 };
export const tierStars = (t) => '★'.repeat(t) + '☆'.repeat(3 - t);

const norm = (s) => String(s).trim().toLowerCase().replace(/\s+/g, '').replace(/[״"']/g, '').replace(/‏|‎/g, '');

// מציג שאלה אחת ומחזיר Promise עם התוצאה
// opts: { index, total, level, mult, quiz, timer, onPoints, noRetry }
export function askQuestion(root, q, opts = {}) {
  return new Promise((resolve) => {
    const { index = 1, total = 1, level = 2, mult = 1, quiz = false, timer = 0, noRetry = false } = opts;
    const tier = q.tier || 1;
    let attempts = 0, hinted = false, done = false, timeLeft = timer, timerId = null;
    const card = h('div', { class: 'qcard' });
    const head = h('div', { class: 'q-head' },
      h('span', { class: 'q-badge' }, quiz ? 'שאלת סיכום' : 'שאלת הבנה', ` ${index}/${total}`),
      h('span', { class: 'q-tier', title: 'רמת קושי' }, tierStars(tier)));
    const title = h('h2', { class: 'q-text', html: q.q });
    const body = h('div', { class: 'q-body' });
    const fb = h('div', { class: 'q-fb' });
    const actions = h('div', { class: 'q-actions' });
    const timerBar = timer ? h('div', { class: 'q-timer' }, h('i', {})) : null;
    card.append(head, timerBar, title, q.visual ? h('div', { class: 'q-visual', html: q.visual }) : null, body, fb, actions);
    root.innerHTML = '';
    root.append(card);

    const hintBtn = q.hint && level < 3 ? h('button', { class: 'btn ghost small', onclick: () => { hinted = true; fb.innerHTML = `<div class="hint">💡 ${q.hint}</div>`; sfx('click'); hintBtn.remove(); } }, '💡 רמז (−30% מהניקוד)') : null;
    if (hintBtn) actions.append(hintBtn);

    const points = () => {
      let p = (TIER_PTS[tier] || 10) * (quiz ? 1.5 : 1) * mult;
      if (attempts > 1) p *= 0.5;
      if (hinted) p *= 0.7;
      return Math.round(p);
    };

    const finish = (correct) => {
      if (done) return;
      done = true;
      clearInterval(timerId);
      const pts = correct ? points() : 0;
      const first = correct && attempts === 1;
      if (opts.onPoints && pts) opts.onPoints(pts);
      actions.innerHTML = '';
      actions.append(h('button', { class: 'btn gold', onclick: () => { sfx('click'); resolve({ correct, first, attempts, points: pts, hinted }); } }, index === total ? 'המשך ←' : 'לשאלה הבאה ←'));
      body.querySelectorAll('button, input').forEach((b) => (b.disabled = true));
    };

    const showResult = (ok, final) => {
      const why = q.why ? `<div class="why">${q.why}</div>` : '';
      if (ok) {
        sfx('correct');
        fb.innerHTML = `<div class="fb good"><b>✔ נכון!</b> +${points()} נקודות${attempts > 1 ? ' (ניסיון שני)' : ''}${why}</div>`;
        finish(true);
      } else if (final) {
        sfx('wrong');
        fb.innerHTML = `<div class="fb bad"><b>✘ לא הפעם.</b> התשובה הנכונה: <span class="ans">${q.answerText || ''}</span>${why}</div>`;
        finish(false);
      } else {
        sfx('wrong');
        fb.innerHTML = `<div class="fb bad"><b>✘ כמעט!</b> נסו שוב – ניסיון אחרון (חצי ניקוד).</div>`;
      }
    };

    const submit = (ok) => {
      if (done) return;
      attempts++;
      const final = attempts >= 2 || noRetry;
      showResult(ok, !ok && final);
    };

    // ----- סוגי שאלות -----
    if (q.type === 'input') {
      const input = h('input', { class: 'q-input', type: 'text', placeholder: q.placeholder || 'הקלד תשובה…', dir: 'ltr', autocomplete: 'off', spellcheck: 'false' });
      const check = h('button', { class: 'btn', onclick: () => {
        const v = norm(input.value);
        if (!v) return;
        const ok = (Array.isArray(q.answer) ? q.answer : [q.answer]).some((a) => norm(a) === v);
        submit(ok);
        if (!ok && !done) { input.select(); }
      } }, 'בדיקה');
      input.addEventListener('keydown', (e) => { e.stopPropagation(); if (e.key === 'Enter') check.click(); });
      input.addEventListener('keyup', (e) => e.stopPropagation());
      body.append(h('div', { class: 'q-inrow' }, input, check));
      q.answerText = q.answerText || (Array.isArray(q.answer) ? q.answer[0] : q.answer);
      setTimeout(() => input.focus(), 100);
    } else if (q.type === 'order') {
      // סידור בלחיצות
      const correct = q.items.slice();
      const pool = shuffle(correct.map((t, i) => ({ t, i })));
      const picked = [];
      const slots = h('div', { class: 'ord-slots' });
      const poolEl = h('div', { class: 'ord-pool' });
      const render = () => {
        slots.innerHTML = '';
        correct.forEach((_, k) => {
          const p = picked[k];
          slots.append(h('div', { class: 'ord-slot' + (p ? ' filled' : ''), onclick: () => { if (p && !done) { picked.splice(k, 1); sfx('click'); render(); } } }, h('em', {}, k + 1), p ? p.t : ''));
        });
        poolEl.innerHTML = '';
        pool.filter((p) => !picked.includes(p)).forEach((p) => poolEl.append(h('button', { class: 'ord-chip', onclick: () => { if (done) return; picked.push(p); sfx('click'); render(); } }, p.t)));
        check.disabled = picked.length !== correct.length;
      };
      const check = h('button', { class: 'btn', onclick: () => submit(picked.every((p, k) => p.i === k)) }, 'בדיקה');
      body.append(slots, poolEl, h('div', { class: 'q-inrow' }, check));
      q.answerText = correct.map((t, i) => `${i + 1}) ${t}`).join(' · ');
      render();
    } else {
      // mc / tf
      let options = q.type === 'tf' ? ['נכון', 'לא נכון'] : q.options.slice();
      let answerIdx = q.type === 'tf' ? (q.a ? 0 : 1) : q.a;
      let order = options.map((_, i) => i);
      if (q.type !== 'tf' && !q.keepOrder) order = shuffle(order);
      q.answerText = options[answerIdx];
      const grid = h('div', { class: 'q-options' + (q.type === 'tf' ? ' tf' : '') });
      order.forEach((oi, k) => {
        const b = h('button', { class: 'opt', onclick: () => {
          if (done) return;
          if (oi === answerIdx) { b.classList.add('right'); submit(true); }
          else { b.classList.add('wrong'); b.disabled = true; submit(false); if (done) grid.children[order.indexOf(answerIdx)].classList.add('right'); }
        } }, h('i', {}, ['א', 'ב', 'ג', 'ד', 'ה'][k]), h('span', { html: options[oi] }));
        grid.append(b);
      });
      body.append(grid);
    }

    if (timer) {
      const bar = timerBar.querySelector('i');
      timerId = setInterval(() => {
        timeLeft -= 0.1;
        bar.style.width = Math.max(0, (timeLeft / timer) * 100) + '%';
        bar.classList.toggle('low', timeLeft < timer * 0.25);
        if (timeLeft <= 0 && !done) {
          attempts = 2;
          fb.innerHTML = `<div class="fb bad"><b>⏰ נגמר הזמן!</b> התשובה: <span class="ans">${q.answerText || ''}</span>${q.why ? `<div class="why">${q.why}</div>` : ''}</div>`;
          sfx('wrong');
          finish(false);
        }
      }, 100);
    }
    root._cleanup = () => clearInterval(timerId);
  });
}

// בחירת שאלות לפי רמה
export function pickForLevel(list, level) {
  const maxTier = level === 1 ? 1 : level === 2 ? 2 : 3;
  const pool = list.filter((q) => (q.tier || 1) <= maxTier);
  return pool.length ? pool : list;
}
