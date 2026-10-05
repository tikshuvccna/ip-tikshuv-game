import { h, $, shuffle, formatNum, clamp } from '../util.js';
import { state, save, LEVELS, levelInfo, emit, luckActive, completedCount, addScore } from '../state.js';
import { sfx } from '../audio.js';
import { askQuestion, pickForLevel } from './questions.js';
import { ZONES, zoneById } from '../world/zonesMeta.js';
import { SPELLS } from '../spells.js';
import { BROOMS } from '../world/characters.js';

const PHASES = [['lesson', '📖 שיעור'], ['questions', '❓ הבנה'], ['quiz', '📝 סיכום'], ['game', '🎮 משחק'], ['result', '🏆 תוצאות']];
const QUIZ_COUNT = { 1: 5, 2: 7, 3: 10 };
const QUIZ_TIME = { 1: 0, 2: 0, 3: 40 };

export class ZoneSession {
  constructor(game, zone, content) {
    this.game = game;
    this.zone = zone;
    this.content = content;
    this.level = state.level;
    this.pts = 0;
    this.lessonStats = { total: 0, first: 0 };
    this.quizStats = { total: 0, first: 0 };
    this.gameResult = { score: 0, max: 1 };
    this.stepIdx = 0;
    this.phase = 'intro';
    this.ctx = null;
    this.cleanup = null;
    this.alive = true;
  }

  get mult() { return LEVELS.find((l) => l.id === this.level).mult * (luckActive() ? 1.1 : 1); }

  open() {
    const root = $('#overlay');
    root.classList.remove('hidden');
    root.innerHTML = '';
    this.root = root;
    this.el = h('div', { class: 'learn', style: { '--zc': this.zone.color } });
    this.head = h('div', { class: 'l-head' });
    this.body = h('div', { class: 'l-body' });
    this.el.append(this.head, this.body);
    root.append(this.el);
    this.renderHead();
    this.keyHandler = (e) => { if (e.key === 'Escape') { e.preventDefault(); this.confirmExit(); } };
    window.addEventListener('keydown', this.keyHandler, true);
    this.showIntro();
  }

  renderHead() {
    const z = this.zone;
    const idx = PHASES.findIndex((p) => p[0] === this.phase);
    this.head.innerHTML = '';
    this.head.append(
      h('div', { class: 'l-title' }, h('span', { class: 'l-ic' }, z.icon), h('div', {}, h('b', {}, z.name), h('small', {}, z.topic))),
      h('div', { class: 'l-phases' }, ...PHASES.map(([id, label], i) => h('span', { class: 'ph' + (i < idx ? ' done' : '') + (i === idx ? ' on' : '') }, label))),
      h('div', { class: 'l-meta' },
        h('span', { class: 'l-level' }, `${levelInfo().icon} ${LEVELS.find((l) => l.id === this.level).name} ×${LEVELS.find((l) => l.id === this.level).mult}`),
        h('span', { class: 'l-pts' }, '✨ ', h('b', {}, formatNum(this.pts))),
        h('button', { class: 'l-exit', onclick: () => this.confirmExit(), title: 'יציאה (Esc)' }, '✕')));
  }

  setPhase(p) {
    this.phase = p;
    this.renderHead();
  }

  addPts(n) {
    this.pts += n;
    const b = this.head.querySelector('.l-pts b');
    if (b) { b.textContent = formatNum(this.pts); b.classList.remove('pop'); void b.offsetWidth; b.classList.add('pop'); }
  }

  clearBody() {
    this.cleanup?.();
    this.cleanup = null;
    this.ctx?.destroy();
    this.ctx = null;
    this.body.innerHTML = '';
    this.body.scrollTop = 0;
  }

  confirmExit() {
    if (this.phase === 'result') return this.close();
    if (this.exitBox) return;
    const box = h('div', { class: 'modal' }, h('div', { class: 'modal-card' },
      h('h3', {}, 'לצאת מהשיעור?'),
      h('p', {}, 'ההתקדמות באזור הזה (בלי סיום) לא תישמר.'),
      h('div', { class: 'modal-actions' },
        h('button', { class: 'btn', onclick: () => { box.remove(); this.exitBox = null; } }, 'נשאר ללמוד'),
        h('button', { class: 'btn danger', onclick: () => { box.remove(); this.exitBox = null; this.close(); } }, 'יוצא'))));
    this.exitBox = box;
    this.el.append(box);
  }

  close() {
    if (!this.alive) return;
    this.alive = false;
    this.clearBody();
    window.removeEventListener('keydown', this.keyHandler, true);
    const root = $('#overlay');
    root.classList.add('hidden');
    root.innerHTML = '';
    this.game.closeLearn(this);
  }

  // ----------------------------------------------------------------
  showIntro() {
    this.setPhase('intro');
    this.clearBody();
    const z = this.zone, zs = state.zones[z.id];
    const lvlCards = LEVELS.map((l) => h('button', { class: 'lvl' + (l.id === this.level ? ' on' : ''), style: { '--c': l.color }, onclick: () => { this.level = l.id; state.level = l.id; save(); this.game.ui.refreshBadge(); sfx('click'); this.showIntro(); } },
      h('span', { class: 'lvl-ic' }, l.icon), h('b', {}, l.name), h('small', {}, `ניקוד ×${l.mult}`), h('em', {}, l.desc)));
    this.body.append(h('div', { class: 'l-intro' },
      h('div', { class: 'intro-hero' },
        h('div', { class: 'prof' }, h('div', { class: 'prof-avatar' }, '🧙'), h('div', { class: 'prof-name' }, z.prof)),
        h('div', { class: 'speech' }, h('p', { html: this.content.intro }))),
      h('div', { class: 'intro-plan' },
        h('h3', {}, 'מה נלמד באזור הזה?'),
        h('ol', {}, ...this.content.steps.map((s) => h('li', {}, s.title))),
        h('div', { class: 'plan-extra' }, h('span', {}, '❓ שאלות הבנה'), h('span', {}, '📝 שאלות סיכום'), h('span', {}, `🎮 משחקון: ${this.content.game.name}`)),
        zs.done ? h('div', { class: 'prev' }, `כבר סיימת! ${'★'.repeat(zs.stars)}${'☆'.repeat(3 - zs.stars)} · שיא: ${formatNum(zs.best)} נקודות`) : null),
      h('div', { class: 'intro-level' },
        h('h3', {}, 'בחר רמת קושי'),
        h('div', { class: 'lvls' }, ...lvlCards),
        h('button', { class: 'btn big gold', onclick: () => { sfx('magic'); this.startLesson(); } }, '✨ בואו נתחיל!'))));
  }

  // ----------------------------------------------------------------
  startLesson() {
    this.stepIdx = 0;
    this.showStep();
  }

  makeCtx() {
    const timers = new Set();
    const cleanups = [];
    const ctx = {
      alive: true,
      level: this.level,
      wait: (ms) => new Promise((res) => { const id = setTimeout(() => { timers.delete(id); if (ctx.alive) res(); }, ms); timers.add(id); }),
      onCleanup: (fn) => cleanups.push(fn),
      raf: (fn) => { let id; const loop = (t) => { if (!ctx.alive) return; fn(t); id = requestAnimationFrame(loop); }; id = requestAnimationFrame(loop); cleanups.push(() => cancelAnimationFrame(id)); },
      destroy: () => { ctx.alive = false; timers.forEach(clearTimeout); cleanups.forEach((f) => { try { f(); } catch (e) { /* ignore */ } }); },
    };
    return ctx;
  }

  showStep() {
    this.setPhase('lesson');
    this.clearBody();
    const steps = this.content.steps;
    const s = steps[this.stepIdx];
    const text = h('div', { class: 'l-text' },
      h('div', { class: 'step-tag' }, `שלב ${this.stepIdx + 1} מתוך ${steps.length}`),
      h('h2', {}, s.title),
      h('div', { class: 'l-copy', html: s.body }),
      s.tip ? h('div', { class: 'tipbox' }, h('b', {}, '💡 טיפ: '), h('span', { html: s.tip })) : null);
    const stage = h('div', { class: 'l-stage' }, h('div', { class: 'stage-title' }, s.stageTitle || '🔬 סימולציה'), h('div', { class: 'stage-area' }));
    const dots = h('div', { class: 'l-dots' }, ...steps.map((_, i) => h('i', { class: i < this.stepIdx ? 'done' : i === this.stepIdx ? 'on' : '' })));
    const foot = h('div', { class: 'l-foot' },
      h('button', { class: 'btn ghost', disabled: this.stepIdx === 0, onclick: () => { this.stepIdx--; sfx('click'); this.showStep(); } }, '→ הקודם'),
      dots,
      h('button', { class: 'btn gold', onclick: () => { sfx('click'); this.afterStep(); } }, this.stepIdx === steps.length - 1 ? 'לשאלות ההבנה ←' : 'הבא ←'));
    this.body.append(h('div', { class: 'l-lesson' }, text, stage), foot);
    this.ctx = this.makeCtx();
    const area = stage.querySelector('.stage-area');
    try {
      if (s.anim) s.anim(area, this.ctx);
    } catch (e) {
      console.error(e);
      area.textContent = 'שגיאה בסימולציה';
    }
  }

  // שאלות הבנה לאחר כל שלב
  async afterStep() {
    const s = this.content.steps[this.stepIdx];
    const qs = pickForLevel(s.questions || [], this.level).slice(0, this.level === 3 ? 3 : 2);
    this.ctx?.destroy();
    this.ctx = null;
    if (qs.length) {
      this.setPhase('questions');
      this.clearBody();
      const holder = h('div', { class: 'l-qwrap' });
      this.body.append(holder);
      this.cleanup = () => holder._cleanup?.();
      for (let i = 0; i < qs.length; i++) {
        if (!this.alive) return;
        const r = await askQuestion(holder, qs[i], { index: i + 1, total: qs.length, level: this.level, mult: this.mult, onPoints: (p) => this.addPts(p) });
        this.lessonStats.total++;
        if (r.first) this.lessonStats.first++;
      }
    }
    if (!this.alive) return;
    if (this.stepIdx < this.content.steps.length - 1) {
      this.stepIdx++;
      this.showStep();
    } else this.startQuiz();
  }

  // ----------------------------------------------------------------
  async startQuiz() {
    this.setPhase('quiz');
    this.clearBody();
    const intro = h('div', { class: 'l-interlude' },
      h('div', { class: 'big-ic' }, '📝'),
      h('h2', {}, 'שאלות סיכום'),
      h('p', {}, `עכשיו מסכמים! ${QUIZ_COUNT[this.level]} שאלות מכל מה שלמדנו${QUIZ_TIME[this.level] ? ` – ${QUIZ_TIME[this.level]} שניות לכל שאלה` : ''}. כל תשובה נכונה שווה יותר נקודות משאלות ההבנה.`),
      h('button', { class: 'btn big gold', onclick: () => this.runQuiz() }, 'מתחילים ←'));
    this.body.append(intro);
  }

  async runQuiz() {
    const pool = shuffle(pickForLevel(this.content.quiz, this.level));
    const n = Math.min(QUIZ_COUNT[this.level], pool.length);
    const qs = pool.slice(0, n);
    this.clearBody();
    const holder = h('div', { class: 'l-qwrap' });
    this.body.append(holder);
    this.cleanup = () => holder._cleanup?.();
    for (let i = 0; i < qs.length; i++) {
      if (!this.alive) return;
      const r = await askQuestion(holder, qs[i], { index: i + 1, total: qs.length, level: this.level, mult: this.mult, quiz: true, timer: QUIZ_TIME[this.level], onPoints: (p) => this.addPts(p) });
      this.quizStats.total++;
      if (r.first) this.quizStats.first++;
    }
    if (this.alive) this.gameIntro();
  }

  // ----------------------------------------------------------------
  gameIntro() {
    this.setPhase('game');
    this.clearBody();
    const g = this.content.game;
    this.body.append(h('div', { class: 'l-interlude game-intro' },
      h('div', { class: 'big-ic' }, '🎮'),
      h('h2', {}, `משחקון: ${g.name}`),
      h('div', { class: 'gi-text', html: g.intro }),
      h('div', { class: 'gi-level' }, `רמה: ${LEVELS.find((l) => l.id === this.level).name} · ניקוד ×${LEVELS.find((l) => l.id === this.level).mult}`),
      h('button', { class: 'btn big gold', onclick: () => this.runGame() }, '▶ התחל לשחק!')));
  }

  runGame() {
    this.clearBody();
    const g = this.content.game;
    const area = h('div', { class: 'game-area' });
    this.body.append(area);
    sfx('magic');
    const inst = g.run(area, {
      level: this.level,
      mult: this.mult,
      onPoints: (p) => this.addPts(p),
      onDone: (res) => {
        this.gameResult = res;
        setTimeout(() => { if (this.alive) this.finish(); }, 1200);
      },
    });
    this.cleanup = () => inst?.destroy?.();
  }

  // ----------------------------------------------------------------
  finish() {
    this.clearBody();
    this.setPhase('result');
    const accL = this.lessonStats.total ? this.lessonStats.first / this.lessonStats.total : 1;
    const accQ = this.quizStats.total ? this.quizStats.first / this.quizStats.total : 1;
    const accG = clamp(this.gameResult.score / (this.gameResult.max || 1), 0, 1);
    const perf = accL * 0.3 + accQ * 0.35 + accG * 0.35;
    let stars = perf >= 0.82 ? 3 : perf >= 0.6 ? 2 : 1;
    const zs = state.zones[this.zone.id];
    const firstTime = !zs.done;
    const prevBest = zs.best;
    const before = completedCount();
    const delta = Math.max(0, this.pts - prevBest);
    zs.done = true;
    zs.stars = Math.max(zs.stars, stars);
    zs.best = Math.max(zs.best, this.pts);
    zs.plays = (zs.plays || 0) + 1;
    if (delta) { state.score += delta; emit('score', delta, 'שיא חדש באזור'); }
    save();
    const after = completedCount();
    const unlocks = [];
    SPELLS.forEach((s) => { if (s.need > before && s.need <= after) unlocks.push(`✨ לחש חדש: ${s.name}`); });
    BROOMS.forEach((b) => { if (b.need > before && b.need <= after) unlocks.push(`🧹 מטאטא חדש: ${b.name}`); });
    if (firstTime && after === 7) unlocks.push('👑 סיימת את כל האזורים! אתה מאסטר הרשת!');
    this.game.ui.refreshBadge();
    sfx('levelup');
    const bar = (label, v, cls) => h('div', { class: 'rbar ' + cls }, h('span', {}, label), h('div', {}, h('i', { style: { width: Math.round(v * 100) + '%' } })), h('b', {}, Math.round(v * 100) + '%'));
    const starEls = [1, 2, 3].map((i) => h('span', { class: 'rstar' + (i <= stars ? ' on' : '') }, '★'));
    this.body.append(h('div', { class: 'l-result' },
      h('div', { class: 'res-card' },
        h('div', { class: 'res-title' }, firstTime ? 'האזור הושלם! 🎉' : 'סיימת שוב! 🎉'),
        h('div', { class: 'res-stars' }, ...starEls),
        h('div', { class: 'res-pts' }, '✨ ', h('b', {}, formatNum(this.pts)), ' נקודות באזור', delta ? h('small', {}, ` (+${formatNum(delta)} לניקוד הכולל)`) : h('small', {}, ' (שיא קודם גבוה יותר)')),
        bar('שאלות הבנה', accL, 'a'), bar('שאלות סיכום', accQ, 'b'), bar('משחקון', accG, 'c'),
        this.gameResult.msg ? h('p', { class: 'res-msg', html: this.gameResult.msg }) : null,
        unlocks.length ? h('div', { class: 'res-unlocks' }, ...unlocks.map((u) => h('div', {}, u))) : null,
        h('div', { class: 'res-actions' },
          h('button', { class: 'btn big gold', onclick: () => this.close() }, '🌍 חזרה לעולם'),
          h('button', { class: 'btn big', onclick: () => { this.pts = 0; this.lessonStats = { total: 0, first: 0 }; this.quizStats = { total: 0, first: 0 }; this.showIntro(); } }, '🔁 שוב')))));
    setTimeout(() => this.body.querySelectorAll('.rstar.on').forEach((s, i) => setTimeout(() => { s.classList.add('shine'); sfx('collect'); }, i * 300)), 300);
  }
}
