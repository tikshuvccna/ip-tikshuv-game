import { h } from '../util.js';
import { sfx } from '../audio.js';

// ---------- אייקוני SVG ----------
const svg = (inner, vb = '0 0 64 64') => {
  const t = document.createElement('div');
  t.className = 'ico';
  t.innerHTML = `<svg viewBox="${vb}" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;
  return t;
};
export const ICONS = {
  pc: () => svg('<rect x="7" y="7" width="50" height="34" rx="4" fill="#232a66" stroke="#aab4ee" stroke-width="2.5"/><rect x="11" y="11" width="42" height="26" rx="2" fill="#4de1ff"/><path d="M11 30l12-9 9 6 8-8 13 11v7H11z" fill="#2b5cd6" opacity=".55"/><rect x="27" y="41" width="10" height="7" fill="#8f9bd6"/><rect x="17" y="48" width="30" height="6" rx="3" fill="#c3cbf5"/>'),
  laptop: () => svg('<rect x="12" y="12" width="40" height="28" rx="3" fill="#232a66" stroke="#aab4ee" stroke-width="2.5"/><rect x="16" y="16" width="32" height="20" rx="1.5" fill="#7fe3ff"/><path d="M5 44h54l-5 8H10z" fill="#c3cbf5" stroke="#8f9bd6" stroke-width="2"/><rect x="26" y="46" width="12" height="2" rx="1" fill="#8f9bd6"/>'),
  phone: () => svg('<rect x="19" y="5" width="26" height="54" rx="6" fill="#232a66" stroke="#aab4ee" stroke-width="2.5"/><rect x="23" y="11" width="18" height="38" rx="2" fill="#9a7bff"/><circle cx="32" cy="54" r="2.2" fill="#aab4ee"/><circle cx="32" cy="30" r="7" fill="#fff" opacity=".35"/>'),
  printer: () => svg('<rect x="17" y="8" width="30" height="16" rx="2" fill="#f6ecd2" stroke="#8f9bd6" stroke-width="2"/><rect x="6" y="22" width="52" height="24" rx="5" fill="#8f9bd6" stroke="#5560a8" stroke-width="2.5"/><rect x="14" y="38" width="36" height="18" rx="2" fill="#fff" stroke="#8f9bd6" stroke-width="2"/><circle cx="48" cy="29" r="2.5" fill="#3ddc97"/><path d="M19 44h26M19 49h18" stroke="#8f9bd6" stroke-width="2"/>'),
  server: () => svg('<rect x="10" y="6" width="44" height="16" rx="3" fill="#2a3170" stroke="#aab4ee" stroke-width="2.2"/><rect x="10" y="24" width="44" height="16" rx="3" fill="#2a3170" stroke="#aab4ee" stroke-width="2.2"/><rect x="10" y="42" width="44" height="16" rx="3" fill="#2a3170" stroke="#aab4ee" stroke-width="2.2"/><g fill="#3ddc97"><circle cx="18" cy="14" r="2.4"/><circle cx="18" cy="32" r="2.4"/><circle cx="18" cy="50" r="2.4"/></g><g stroke="#8f9bd6" stroke-width="2.4"><path d="M28 14h20M28 32h20M28 50h20"/></g>'),
  router: () => svg('<path d="M18 6v16M46 6v16" stroke="#c3cbf5" stroke-width="3.5" stroke-linecap="round"/><circle cx="18" cy="6" r="3" fill="#ffd35c"/><circle cx="46" cy="6" r="3" fill="#ffd35c"/><rect x="4" y="22" width="56" height="26" rx="6" fill="#ff7a3d" stroke="#b9461a" stroke-width="2.5"/><rect x="9" y="27" width="46" height="16" rx="3" fill="#2a1f4a"/><g class="leds"><circle cx="17" cy="35" r="2.6" fill="#3ddc97"/><circle cx="26" cy="35" r="2.6" fill="#3ddc97"/><circle cx="35" cy="35" r="2.6" fill="#ffd35c"/><circle cx="44" cy="35" r="2.6" fill="#4de1ff"/></g><rect x="14" y="48" width="36" height="5" rx="2" fill="#b9461a"/>'),
  switch: () => svg('<rect x="3" y="20" width="58" height="24" rx="5" fill="#4a5bd6" stroke="#2a3588" stroke-width="2.5"/><g fill="#14183f"><rect x="8" y="25" width="7" height="8" rx="1"/><rect x="17" y="25" width="7" height="8" rx="1"/><rect x="26" y="25" width="7" height="8" rx="1"/><rect x="35" y="25" width="7" height="8" rx="1"/><rect x="44" y="25" width="7" height="8" rx="1"/></g><g fill="#3ddc97"><circle cx="11.5" cy="38" r="1.7"/><circle cx="20.5" cy="38" r="1.7"/><circle cx="29.5" cy="38" r="1.7"/><circle cx="38.5" cy="38" r="1.7"/><circle cx="47.5" cy="38" r="1.7"/></g><path d="M52 40h6" stroke="#fff" stroke-width="2"/>'),
  cloud: () => svg('<path d="M18 46h30a11 11 0 0 0 1.5-21.9A15 15 0 0 0 20.5 21 13 13 0 0 0 18 46z" fill="#d8e8ff" stroke="#8fb4f5" stroke-width="2.5"/><circle cx="26" cy="33" r="2" fill="#6c8bff"/><circle cx="38" cy="30" r="2" fill="#6c8bff"/><path d="M26 33l12-3" stroke="#6c8bff" stroke-width="1.6"/>'),
  camera: () => svg('<rect x="6" y="18" width="40" height="24" rx="5" fill="#2a3170" stroke="#aab4ee" stroke-width="2.5"/><circle cx="26" cy="30" r="8" fill="#4de1ff"/><circle cx="26" cy="30" r="3.5" fill="#14183f"/><path d="M46 26l12-6v20l-12-6z" fill="#8f9bd6"/><circle cx="12" cy="23" r="1.8" fill="#ff5a7a"/>'),
  tablet: () => svg('<rect x="9" y="8" width="46" height="48" rx="6" fill="#232a66" stroke="#aab4ee" stroke-width="2.5"/><rect x="13" y="12" width="38" height="36" rx="2" fill="#ffd35c"/><circle cx="32" cy="52" r="2" fill="#aab4ee"/>'),
  owl: () => svg('<ellipse cx="32" cy="38" rx="17" ry="20" fill="#9a7a54"/><ellipse cx="32" cy="42" rx="11" ry="13" fill="#eadcc0"/><circle cx="24" cy="26" r="8" fill="#fff"/><circle cx="40" cy="26" r="8" fill="#fff"/><circle cx="24" cy="26" r="4.2" fill="#ffb300"/><circle cx="40" cy="26" r="4.2" fill="#ffb300"/><circle cx="24" cy="26" r="2" fill="#111"/><circle cx="40" cy="26" r="2" fill="#111"/><path d="M29 31l3 5 3-5z" fill="#f2a33a"/><path d="M16 14l7 8M48 14l-7 8" stroke="#7a5a3a" stroke-width="4" stroke-linecap="round"/>'),
  house: () => svg('<rect x="12" y="28" width="40" height="28" fill="#efe3c6" stroke="#8c6a40" stroke-width="2.5"/><path d="M6 30L32 8l26 22z" fill="#c4452f" stroke="#7a2a1a" stroke-width="2.5"/><rect x="27" y="38" width="10" height="18" fill="#6b4426"/><rect x="16" y="35" width="8" height="8" fill="#7fe3ff"/><rect x="40" y="35" width="8" height="8" fill="#7fe3ff"/>'),
  castle: () => svg('<path d="M8 56V24h8v-6h6v6h6v-6h8v6h6v-6h6v6h6v32z" fill="#bdb8ae" stroke="#6f6a60" stroke-width="2.5"/><path d="M26 56V40a6 6 0 0 1 12 0v16z" fill="#4a3220"/><path d="M12 24l4-12 4 12M44 24l4-12 4 12" fill="#8a2f3a"/>'),
  wizard: () => svg('<path d="M32 3l12 24H20z" fill="#2a5fc1"/><ellipse cx="32" cy="27" rx="17" ry="4" fill="#1f4796"/><circle cx="32" cy="36" r="9" fill="#f0c9a4"/><path d="M24 44h16l6 16H18z" fill="#2a5fc1"/><circle cx="29" cy="35" r="1.4" fill="#222"/><circle cx="35" cy="35" r="1.4" fill="#222"/><path d="M26 41q6 8 12 0" fill="#e8e8f0"/>'),
  dragon: () => svg('<path d="M10 44c6-16 20-20 30-14l8-10 2 14c4 3 6 8 4 14-8-6-14-4-20 4-8 0-18-2-24-8z" fill="#c43a48" stroke="#7a1a28" stroke-width="2.5"/><path d="M40 28l8-12M46 34l10-8" stroke="#ffd35c" stroke-width="3" stroke-linecap="round"/><circle cx="46" cy="32" r="2" fill="#ffe44a"/>'),
  key: () => svg('<circle cx="20" cy="24" r="12" fill="none" stroke="#ffd35c" stroke-width="5"/><path d="M30 32l26 24M44 46l7-7M50 52l7-7" stroke="#ffd35c" stroke-width="5" stroke-linecap="round"/>'),
  scroll: () => svg('<rect x="14" y="10" width="36" height="44" rx="4" fill="#f6ecd2" stroke="#b89a5a" stroke-width="2.5"/><circle cx="14" cy="10" r="5" fill="#e4cf9a"/><circle cx="50" cy="54" r="5" fill="#e4cf9a"/><path d="M21 22h22M21 30h22M21 38h14" stroke="#8a6a3a" stroke-width="2.5" stroke-linecap="round"/>'),
  globe: () => svg('<circle cx="32" cy="32" r="24" fill="#2b6fd6" stroke="#9ad7ff" stroke-width="2.5"/><path d="M14 24c8-2 10 6 18 4s6-12 16-8M12 40c8-4 12 4 20 2s10 6 18 0" fill="none" stroke="#3ddc97" stroke-width="5" stroke-linecap="round"/>'),
  user: () => svg('<circle cx="32" cy="22" r="11" fill="#f0c9a4"/><path d="M10 58c0-14 10-22 22-22s22 8 22 22z" fill="#6c8bff"/>'),
  gear: () => svg('<circle cx="32" cy="32" r="12" fill="none" stroke="#ffd35c" stroke-width="7"/><g stroke="#ffd35c" stroke-width="7" stroke-linecap="square"><path d="M32 4v8M32 52v8M4 32h8M52 32h8M12 12l6 6M46 46l6 6M12 52l6-6M46 18l6-6"/></g>'),
  lock: () => svg('<rect x="14" y="28" width="36" height="28" rx="5" fill="#ffd35c" stroke="#b8861a" stroke-width="2.5"/><path d="M20 28v-8a12 12 0 0 1 24 0v8" fill="none" stroke="#b8861a" stroke-width="5"/><circle cx="32" cy="42" r="4" fill="#7a5a10"/>'),
};

export const icon = (kind) => (ICONS[kind] || ICONS.pc)();

// ---------- סצנה ----------
export class Sim {
  constructor(stage, ctx) {
    this.ctx = ctx;
    this.root = h('div', { class: 'sim' });
    this.layer = h('div', { class: 'sim-layer' });
    this.capEl = h('div', { class: 'sim-caption' });
    this.ctrl = h('div', { class: 'sim-controls' });
    this.root.append(this.layer, this.capEl, this.ctrl);
    stage.innerHTML = '';
    stage.append(this.root);
  }

  caption(text, tone) {
    this.capEl.innerHTML = text || '';
    this.capEl.classList.toggle('on', !!text);
    this.capEl.dataset.tone = tone || '';
    this.capEl.classList.remove('pop');
    void this.capEl.offsetWidth;
    this.capEl.classList.add('pop');
  }

  btn(label, fn, cls = '') {
    const b = h('button', { class: 'btn small ' + cls, onclick: async (e) => { sfx('click'); await fn(e, b); } }, label);
    this.ctrl.append(b);
    return b;
  }

  clearCtrl() {
    this.ctrl.innerHTML = '';
  }

  place(el, x, y) {
    el._x = x; el._y = y;
    el.style.left = x + '%';
    el.style.top = y + '%';
    return el;
  }

  add(el, x, y) {
    el.classList.add('abs');
    this.place(el, x, y);
    this.layer.append(el);
    return el;
  }

  // התקן עם אייקון, תווית וכתובת
  dev(kind, label, ip, x, y, o = {}) {
    const el = h('div', { class: 'dev ' + (o.cls || '') },
      h('div', { class: 'dev-bubble' }),
      icon(kind),
      label ? h('div', { class: 'dev-label' }, label) : null,
      ip !== undefined && ip !== null ? h('div', { class: 'dev-ip' }, ip) : null);
    if (o.size) el.style.setProperty('--s', o.size + 'px');
    el.ipEl = el.querySelector('.dev-ip');
    el.setIp = (v) => { if (!el.ipEl) { el.ipEl = h('div', { class: 'dev-ip' }); el.append(el.ipEl); } el.ipEl.textContent = v; el.ipEl.classList.remove('flash'); void el.ipEl.offsetWidth; el.ipEl.classList.add('flash'); };
    el.say = (txt, ms = 2200) => {
      const b = el.querySelector('.dev-bubble');
      b.textContent = txt;
      b.classList.add('on');
      clearTimeout(el._bt);
      el._bt = setTimeout(() => b.classList.remove('on'), ms);
    };
    el.glow = (color = '#ffd35c', ms = 1200) => {
      el.style.setProperty('--glow', color);
      el.classList.add('glow');
      setTimeout(() => el.classList.remove('glow'), ms);
    };
    el.shake = () => { el.classList.add('shake'); setTimeout(() => el.classList.remove('shake'), 600); };
    return this.add(el, x, y);
  }

  moveTo(el, x, y, ms = 900) {
    el.style.transition = `left ${ms}ms cubic-bezier(.4,.1,.2,1), top ${ms}ms cubic-bezier(.4,.1,.2,1)`;
    // כפיית ריפלואו
    void el.offsetWidth;
    this.place(el, x, y);
    return this.ctx.wait(ms + 30);
  }

  // חבילה שעפה בין שני אלמנטים
  async fly(from, to, label, o = {}) {
    const { color = '#4de1ff', ms = 1000, cls = '', text = '', via = null, keep = false } = o;
    const p = h('div', { class: 'pkt ' + cls, style: { '--c': color } }, h('span', {}, label || '✉'));
    this.add(p, from._x ?? from.x, from._y ?? from.y);
    p.style.transition = 'none';
    await this.ctx.wait(30);
    const pts = via ? [...via, to] : [to];
    for (const t of pts) {
      await this.moveTo(p, t._x ?? t.x, t._y ?? t.y, ms / pts.length);
    }
    if (!keep) p.remove();
    return p;
  }

  async pulse(el, n = 1) {
    el.classList.remove('pulse');
    void el.offsetWidth;
    el.classList.add('pulse');
    await this.ctx.wait(600 * n);
  }

  line(a, b, o = {}) {
    // קו SVG בין שני אלמנטים (באחוזים)
    if (!this.svg) {
      this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
      this.svg.setAttribute('class', 'sim-lines');
      this.svg.setAttribute('viewBox', '0 0 100 100');
      this.svg.setAttribute('preserveAspectRatio', 'none');
      this.layer.prepend(this.svg);
    }
    const l = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    l.setAttribute('x1', a._x); l.setAttribute('y1', a._y); l.setAttribute('x2', b._x); l.setAttribute('y2', b._y);
    l.setAttribute('stroke', o.color || 'rgba(160,180,255,.55)');
    l.setAttribute('stroke-width', o.w || 0.5);
    l.setAttribute('vector-effect', 'non-scaling-stroke');
    l.style.strokeWidth = (o.px || 3) + 'px';
    if (o.dash) l.setAttribute('stroke-dasharray', o.dash);
    this.svg.append(l);
    return l;
  }

  zone(x, y, w, hgt, label, color = '#6c8bff') {
    const z = h('div', { class: 'zone-box', style: { '--c': color, width: w + '%', height: hgt + '%' } }, h('span', {}, label));
    z.classList.add('abs');
    this.place(z, x, y);
    this.layer.prepend(z);
    return z;
  }

  label(text, x, y, cls = '') {
    return this.add(h('div', { class: 'sim-label ' + cls }, text), x, y);
  }
}

// ---------- רכיבי ביטים ----------
export function bitCells(parent, bits, { groups = 8, colors = null, labels = null, cls = '' } = {}) {
  const wrap = h('div', { class: 'bits ' + cls });
  const cells = [];
  const arr = typeof bits === 'string' ? bits.split('') : bits;
  arr.forEach((b, i) => {
    if (i > 0 && i % groups === 0) wrap.append(h('span', { class: 'bit-dot' }, '.'));
    const c = h('span', { class: 'bit b' + b }, String(b));
    if (colors) c.dataset.kind = colors[i] || '';
    cells.push(c);
    wrap.append(c);
  });
  parent && parent.append(wrap);
  return { wrap, cells };
}

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export async function typeInto(el, text, ctx, speed = 28) {
  el.textContent = '';
  for (const ch of text) {
    if (!ctx.alive) return;
    el.textContent += ch;
    await ctx.wait(speed);
  }
}

export function injectCss(id, css) {
  if (document.getElementById('css-' + id)) return;
  const s = document.createElement('style');
  s.id = 'css-' + id;
  s.textContent = css;
  document.head.append(s);
}
