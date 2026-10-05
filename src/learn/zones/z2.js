import { h } from '../../util.js';
import { Sim, bitCells, icon, injectCss } from '../anim.js';
import { sfx } from '../../audio.js';
import { parseIp, ipBits, fmt, maskFromPrefix, networkOf, broadcastOf, hostsCount, bin8, firstHost, lastHost, classOf } from '../ip.js';
import { owlGame } from '../games/g2.js';

injectCss('z2', `
.net{color:#8fb0ff;font-weight:900}.host{color:#6dffb8;font-weight:900}
.dev-ip .net{color:#9fc0ff}.dev-ip .host{color:#7dffc0}
.bit[data-kind=net]{background:rgba(108,139,255,.35);border-color:#6c8bff;box-shadow:none}
.bit[data-kind=host]{background:rgba(61,220,151,.28);border-color:#3ddc97;box-shadow:none}
.bit[data-kind=net].b1{background:linear-gradient(180deg,#9fb6ff,#5a78f0);color:#fff;box-shadow:0 0 10px #6c8bff}
.bit[data-kind=host].b1{background:linear-gradient(180deg,#7dffc4,#25b97a);color:#05301c;box-shadow:0 0 10px #3ddc97}
.maskviz{display:flex;flex-direction:column;gap:12px;align-items:center;justify-content:center;height:100%;padding:12px 12px 74px;container-type:inline-size;width:100%}
.mv-row{display:flex;gap:8px;align-items:center;width:100%;direction:ltr}
.mv-row > span{width:62px;font-size:12px;font-weight:800;color:var(--muted);text-align:right;flex-shrink:0;direction:rtl}
.mv-row .bits{width:auto;flex:1}
.mv-info{display:grid;grid-template-columns:repeat(2,1fr);gap:8px;width:100%}
.mv-info div{background:rgba(255,255,255,.07);border:1px solid var(--line);border-radius:12px;padding:6px 10px;text-align:center;font-size:12.5px;color:var(--muted)}
.mv-info b{display:block;font:800 clamp(13px,2.4cqw,19px) ui-monospace,monospace;color:#fff;direction:ltr}
.mv-slider{width:100%;display:flex;gap:10px;align-items:center;direction:ltr}
.mv-slider input{flex:1;accent-color:#ffd35c}
.mv-slider b{width:56px;font:900 24px 'Secular One';color:var(--gold)}
.legend{display:flex;gap:14px;font-size:12.5px;font-weight:700}
.legend i{display:inline-block;width:12px;height:12px;border-radius:4px;margin-left:4px;vertical-align:-1px}
.cls-bar{display:flex;width:100%;height:46px;border-radius:12px;overflow:hidden;direction:ltr;border:2px solid var(--line)}
.cls-bar div{display:flex;align-items:center;justify-content:center;font-weight:900;font-size:13px;color:#0d1030;position:relative}
.cls-pointer{position:absolute;top:-6px;width:3px;height:58px;background:#fff;box-shadow:0 0 10px #fff;transition:left .15s}
.cls-wrap{position:relative;width:100%}
.cls-card{background:rgba(255,255,255,.08);border:2px solid var(--line);border-radius:16px;padding:10px 16px;text-align:center;min-width:60%}
.cls-card b{font:900 30px 'Secular One';color:var(--gold);display:block}
`);

const C = (t) => `<code>${t}</code>`;
const ipHtml = (ip, prefix) => {
  const o = parseIp(ip);
  const full = prefix % 8 === 0 ? prefix / 8 : null;
  if (full === null) return ip;
  return `<span class="net">${o.slice(0, full).join('.')}${full ? '.' : ''}</span><span class="host">${o.slice(full).join('.')}</span>`;
};

function maskViz(root, ctx, ip, opts = {}) {
  const o = parseIp(ip);
  const bitsStr = ipBits(o);
  const slider = h('input', { type: 'range', min: 8, max: 30, value: opts.prefix || 24, step: 1 });
  const val = h('b', {}, '/24');
  const ipRow = h('div', { class: 'mv-row' }, h('span', {}, 'כתובת IP'));
  const maskRow = h('div', { class: 'mv-row' }, h('span', {}, 'מסיכה'));
  let ipCells, maskCells;
  ipCells = bitCells(null, bitsStr);
  maskCells = bitCells(null, '0'.repeat(32));
  ipRow.append(ipCells.wrap); maskRow.append(maskCells.wrap);
  const info = h('div', { class: 'mv-info' });
  const legend = h('div', { class: 'legend' }, h('span', {}, h('i', { style: { background: '#6c8bff' } }), 'ביטי רשת'), h('span', {}, h('i', { style: { background: '#3ddc97' } }), 'ביטי מארח'));
  root.append(h('div', { class: 'mv-slider' }, val, slider, h('span', {}, 'אורך הרישא (prefix)')), ipRow, maskRow, legend, info);
  const update = () => {
    const p = +slider.value;
    val.textContent = '/' + p;
    for (let i = 0; i < 32; i++) {
      const kind = i < p ? 'net' : 'host';
      ipCells.cells[i].dataset.kind = kind;
      maskCells.cells[i].dataset.kind = kind;
      const m = i < p ? '1' : '0';
      maskCells.cells[i].textContent = m;
      maskCells.cells[i].className = 'bit b' + m;
    }
    const mask = maskFromPrefix(p);
    const net = networkOf(o, p);
    info.innerHTML = '';
    const cell = (t, v) => h('div', {}, t, h('b', {}, v));
    info.append(
      cell('מסיכת רשת', fmt(mask)),
      cell('כתובת הרשת', fmt(net)),
      cell('ביטי רשת / מארח', `${p} / ${32 - p}`),
      cell('מספר מארחים (2ʰ − 2)', hostsCount(p).toLocaleString('en-US')));
    sfx('tick');
  };
  slider.addEventListener('input', update);
  update();
  return slider;
}

function andViz(root, ctx, ipStr, prefix) {
  root.innerHTML = '';
  const o = parseIp(ipStr);
  const mask = maskFromPrefix(prefix);
  const ib = ipBits(o), mb = ipBits(mask);
  const nb = ib.split('').map((b, i) => (b === '1' && mb[i] === '1' ? '1' : '0')).join('');
  const bb = ib.split('').map((b, i) => (i < prefix ? b : '1')).join('');
  const mk = (bits, label, kindFn) => {
    const row = h('div', { class: 'mv-row' }, h('span', {}, label));
    const c = bitCells(null, bits);
    c.cells.forEach((cell, i) => { cell.dataset.kind = kindFn(i); });
    row.append(c.wrap);
    return { row, c };
  };
  const kind = (i) => (i < prefix ? 'net' : 'host');
  const r1 = mk(ib, `IP ${ipStr}`, kind);
  const r2 = mk(mb, `מסיכה /${prefix}`, kind);
  const r3 = mk('0'.repeat(32), 'AND = רשת', kind);
  const r4 = mk('0'.repeat(32), 'שידור', kind);
  r3.c.cells.forEach((c) => { c.textContent = '·'; c.classList.add('q'); });
  r4.c.cells.forEach((c) => { c.textContent = '·'; c.classList.add('q'); });
  const info = h('div', { class: 'mv-info' });
  const cap = h('div', { class: 'sim-caption on' });
  const btn = h('button', { class: 'btn small gold', onclick: () => run() }, '▶ חשב');
  root.append(r1.row, r2.row, r3.row, r4.row, info, cap, h('div', { class: 'sim-controls' }, btn));
  let tok = 0;
  const run = async () => {
    const my = ++tok;
    r3.c.cells.forEach((c) => { c.textContent = '·'; c.className = 'bit q'; });
    r4.c.cells.forEach((c) => { c.textContent = '·'; c.className = 'bit q'; });
    info.innerHTML = '';
    cap.innerHTML = 'פעולת <b>AND</b> בין כתובת ה-IP למסיכה: רק כשיש 1 בשניהם התוצאה 1. כך מקבלים את <b>כתובת הרשת</b>.';
    for (let i = 0; i < 32; i++) {
      if (!ctx.alive || my !== tok) return;
      const c = r3.c.cells[i];
      c.textContent = nb[i];
      c.className = 'bit b' + nb[i];
      c.dataset.kind = kind(i);
      if (i % 4 === 3) sfx('tick');
      await ctx.wait(55);
    }
    const net = networkOf(o, prefix), bc = broadcastOf(o, prefix);
    info.append(h('div', {}, 'כתובת הרשת', h('b', {}, fmt(net))));
    cap.innerHTML = `ביטי המארח בכתובת הרשת הם <b>0</b>. אם נעשה את ביטי המארח <b>1</b> נקבל את <b>כתובת השידור (Broadcast)</b>.`;
    await ctx.wait(1000);
    for (let i = 0; i < 32; i++) {
      if (!ctx.alive || my !== tok) return;
      const c = r4.c.cells[i];
      c.textContent = bb[i];
      c.className = 'bit b' + bb[i];
      c.dataset.kind = kind(i);
      await ctx.wait(30);
    }
    info.append(
      h('div', {}, 'כתובת Broadcast', h('b', {}, fmt(bc))),
      h('div', {}, 'טווח מארחים תקינים', h('b', {}, `${fmt(firstHost(o, prefix))} – ${fmt(lastHost(o, prefix))}`)),
      h('div', {}, `מספר מארחים: 2^${32 - prefix} − 2`, h('b', {}, hostsCount(prefix).toLocaleString('en-US'))));
    cap.innerHTML = `כתובת הרשת (<b>${fmt(net)}</b>) וכתובת השידור (<b>${fmt(bc)}</b>) <b>שמורות</b> – אי אפשר לתת אותן למכשירים.`;
    sfx('collect');
  };
  run();
}

export default {
  intro: `ברוכים הבאים לאי הרשתות! 🏝️ כל כתובת IP מתחלקת לשני חלקים: <b>חלק הרשת</b> שאומר באיזו רשת אנחנו, ו<b>חלק המארח</b> שאומר מי המכשיר בתוך הרשת. כאן נלמד גם מה זו <b>מסיכת רשת</b> ואיך משתמשים בה.`,

  steps: [
    {
      title: 'כתובת = רשת + מארח',
      body: `<p>כתובת בית מורכבת מ<b>רחוב</b> ומ<b>מספר הבית</b>. גם כתובת IP בנויה משני חלקים:</p>
      <ul>
        <li><b class="net">חלק הרשת</b> (Network) – מזהה את <b>הרשת</b>, כמו שם הרחוב. כל המכשירים באותה רשת חולקים אותו.</li>
        <li><b class="host">חלק המארח</b> (Host) – מזהה את <b>המכשיר</b> בתוך הרשת, כמו מספר הבית. הוא חייב להיות ייחודי ברשת.</li>
      </ul>
      <p>בדוגמה ${C('192.168.1.10')} – אם הרשת היא ${C('192.168.1')} אז <b>10</b> הוא המארח. מכשירים באותה רשת מתקשרים ישירות; בין רשתות שונות צריך ראוטר.</p>`,
      tip: 'לחצו על מכשיר כדי לראות איך הכתובת שלו מתחלקת.',
      anim: (stage, ctx) => {
        const sim = new Sim(stage, ctx);
        sim.zone(26, 42, 44, 66, 'רשת 192.168.1.0', '#6c8bff');
        sim.zone(74, 42, 44, 66, 'רשת 192.168.2.0', '#3ddc97');
        const devs = [
          ['pc', 'א׳', '192.168.1.10', 14, 28], ['laptop', 'ב׳', '192.168.1.11', 38, 28], ['printer', 'מדפסת', '192.168.1.12', 26, 62],
          ['pc', 'ג׳', '192.168.2.10', 62, 28], ['server', 'שרת', '192.168.2.20', 86, 28], ['phone', 'טלפון', '192.168.2.30', 74, 62],
        ];
        sim.caption('מכשירים באותה רשת חולקים את אותו חלק רשת. מסיכה 255.255.255.0 (/24) אומרת: 3 האוקטטים הראשונים הם הרשת.');
        const els = devs.map(([k, l, ip, x, y]) => {
          const d = sim.dev(k, l, null, x, y, { size: 50 });
          d.ipEl = h('div', { class: 'dev-ip' });
          const o = parseIp(ip);
          d.ipEl.innerHTML = `<span class="net">${o.slice(0, 3).join('.')}.</span><span class="host">${o[3]}</span>`;
          d.append(d.ipEl);
          d.style.cursor = 'pointer';
          d.addEventListener('click', () => {
            sfx('click');
            d.glow('#ffd35c');
            sim.caption(`<code>${ip}</code> ← חלק רשת: <span class="net">${o.slice(0, 3).join('.')}</span> · חלק מארח: <span class="host">${o[3]}</span>`);
          });
          return d;
        });
      },
      questions: [
        { tier: 1, type: 'mc', q: 'בכתובת <code>192.168.1.10</code> עם מסיכה <code>255.255.255.0</code>, מהו חלק הרשת?', options: ['192.168.1', '192.168', '10', '192'], a: 0, why: 'מסיכת /24 – שלושת האוקטטים הראשונים הם הרשת, והרביעי (10) הוא המארח.', hint: 'המסיכה 255.255.255.0 מכסה שלושה אוקטטים.' },
        { tier: 1, type: 'mc', q: 'מה מזהה חלק המארח של הכתובת?', options: ['את המכשיר בתוך הרשת', 'את הרשת כולה', 'את ספק האינטרנט', 'את סוג הכבל'], a: 0, why: 'חלק המארח מזהה את המכשיר הספציפי בתוך הרשת.' },
        { tier: 2, type: 'tf', q: 'שני מכשירים באותה רשת חייבים להיות בעלי אותו חלק רשת ושונה חלק מארח.', a: true, why: 'נכון: אותו חלק רשת, מארחים שונים.' },
      ],
    },
    {
      title: 'מסיכת רשת (Subnet Mask)',
      body: `<p>איך המחשב יודע איפה נגמר חלק הרשת ומתחיל חלק המארח? בעזרת <b>מסיכת רשת</b> – מספר בן 32 ביט:</p>
      <ul>
        <li><b class="net">1</b> במסיכה = ביט ששייך ל<b>רשת</b>.</li>
        <li><b class="host">0</b> במסיכה = ביט ששייך ל<b>מארח</b>.</li>
        <li>המסיכה תמיד רצף של אחדות ואחריו רצף של אפסים.</li>
        <li><b>סימון קצר (Prefix):</b> ${C('/24')} = 24 אחדות. למשל ${C('255.255.255.0')} = ${C('/24')}, ${C('255.255.0.0')} = ${C('/16')}, ${C('255.0.0.0')} = ${C('/8')}.</li>
        <li>מספר המארחים בתוך רשת: <b>2ʰ − 2</b> (h = מספר ביטי המארח).</li>
      </ul>
      <p>הזיזו את המחוון וראו איך הגבול בין הרשת למארח זז!</p>`,
      tip: 'כל 8 ביטים של 1 במסיכה = אוקטט 255.',
      stageTitle: '🔬 מזיזים את הגבול',
      anim: (stage, ctx) => {
        const root = h('div', { class: 'maskviz' });
        stage.innerHTML = '';
        stage.append(root);
        maskViz(root, ctx, '192.168.1.77');
      },
      questions: [
        { tier: 1, type: 'mc', q: 'המסיכה <code>255.255.255.0</code> שווה לסימון:', options: ['/8', '/16', '/24', '/32'], a: 2, why: '3 אוקטטים של 255 = 24 ביטים של 1 ⇒ /24.', hint: '3 × 8 = ?' },
        { tier: 2, type: 'mc', q: 'מהי מסיכת הרשת של <code>/16</code>?', options: ['255.255.0.0', '255.255.255.0', '255.0.0.0', '255.255.255.255'], a: 0, why: '16 ביטים של 1 = שני אוקטטים מלאים ⇒ 255.255.0.0.' },
        { tier: 2, type: 'mc', q: 'כמה ביטים של מארח יש ברשת <code>/24</code>?', options: ['8', '16', '24', '32'], a: 0, why: '32 − 24 = 8 ביטי מארח.' },
        { tier: 3, type: 'input', q: 'מהי מסיכת הרשת של <code>/26</code> (בעשרוני)?', answer: '255.255.255.192', placeholder: '255.255.255.___', why: '26 ביטים: 24 + עוד 2 ביטים באוקטט האחרון = 11000000 = 192.' },
      ],
    },
    {
      title: 'כתובת רשת וכתובת שידור',
      body: `<p>בכל רשת יש שתי כתובות מיוחדות שאי אפשר לתת למכשירים:</p>
      <ul>
        <li><b>כתובת הרשת</b> – כל ביטי המארח <b>0</b>. היא מזהה את הרשת עצמה. מחשבים אותה בפעולת <b>AND</b> בין ה-IP למסיכה.</li>
        <li><b>כתובת השידור (Broadcast)</b> – כל ביטי המארח <b>1</b>. חבילה שנשלחת אליה מגיעה לכל המכשירים ברשת.</li>
        <li>כל מה שבין שתיהן הוא <b>טווח המארחים התקין</b>. מספרם: <b>2ʰ − 2</b>.</li>
      </ul>
      <p>דוגמה: ${C('192.168.1.77/24')} ← רשת ${C('192.168.1.0')}, שידור ${C('192.168.1.255')}, מארחים ${C('.1')} עד ${C('.254')} (254 כתובות).</p>`,
      tip: 'AND: 1 AND 1 = 1, כל שאר המקרים = 0.',
      stageTitle: '🔬 פעולת AND בביטים',
      anim: (stage, ctx) => {
        const root = h('div', { class: 'maskviz' });
        stage.innerHTML = '';
        stage.append(root);
        const holder = h('div', { style: { width: '100%', position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center', justifyContent: 'center' } });
        const ctl = h('div', { class: 'sim-controls static', style: { position: 'absolute', top: '8px', right: '8px', left: 'auto', bottom: 'auto', zIndex: 7 } });
        [['192.168.1.77', 24], ['172.16.5.9', 16], ['10.1.2.3', 8], ['192.168.1.77', 26]].forEach(([ip, p]) => ctl.append(h('button', { class: 'btn small ghost', onclick: () => { andViz(holder, ctx, ip, p); } }, `${ip}/${p}`)));
        root.append(ctl, holder);
        andViz(holder, ctx, '192.168.1.77', 24);
      },
      questions: [
        { tier: 1, type: 'mc', q: 'מהי כתובת הרשת של <code>192.168.5.77/24</code>?', options: ['192.168.5.0', '192.168.5.255', '192.168.0.0', '192.168.5.1'], a: 0, why: 'מאפסים את ביטי המארח (האוקטט האחרון) ⇒ 192.168.5.0.' },
        { tier: 2, type: 'mc', q: 'מהי כתובת ה-Broadcast של <code>10.1.2.3/8</code>?', options: ['10.255.255.255', '10.1.2.255', '10.0.0.255', '255.255.255.255'], a: 0, why: 'ב-/8 ביטי המארח הם 3 האוקטטים האחרונים – כולם 255.' },
        { tier: 2, type: 'mc', q: 'כמה כתובות מארח תקינות יש ברשת <code>/24</code>?', options: ['254', '255', '256', '253'], a: 0, why: '2⁸ − 2 = 254 (פחות כתובת הרשת וכתובת השידור).' },
        { tier: 3, type: 'mc', q: 'מהי כתובת הרשת של <code>192.168.1.77/26</code>?', options: ['192.168.1.64', '192.168.1.0', '192.168.1.76', '192.168.1.32'], a: 0, why: '/26: גודל בלוק = 64. 77 נמצא בבלוק 64–127 ⇒ רשת 192.168.1.64, שידור 192.168.1.127.', hint: 'הבלוקים ב-/26: 0, 64, 128, 192.' },
        { tier: 3, type: 'input', q: 'כמה מארחים תקינים יש ברשת <code>/26</code>?', answer: '62', placeholder: 'מספר', why: '2⁶ − 2 = 62.' },
      ],
    },
    {
      title: 'מחלקות כתובות: A, B, C',
      body: `<p>בעבר חילקו את כל הכתובות ל<b>מחלקות</b> לפי האוקטט הראשון, לכל מחלקה מסיכת ברירת מחדל:</p>
      <table><tr><th>מחלקה</th><th>אוקטט ראשון</th><th>מסיכה</th><th>שימוש</th></tr>
      <tr><td>A</td><td>1–126</td><td>/8</td><td>רשתות ענק</td></tr>
      <tr><td>B</td><td>128–191</td><td>/16</td><td>רשתות בינוניות</td></tr>
      <tr><td>C</td><td>192–223</td><td>/24</td><td>רשתות קטנות</td></tr>
      <tr><td>D</td><td>224–239</td><td>—</td><td>Multicast</td></tr>
      <tr><td>E</td><td>240–255</td><td>—</td><td>ניסיוני</td></tr></table>
      <p>הכתובת <b>127.x.x.x</b> שמורה ל-Loopback. היום משתמשים ב-<b>CIDR</b> (מסיכות גמישות), אבל חשוב להכיר את המחלקות.</p>`,
      tip: 'המחלקה נקבעת לפי האוקטט הראשון בלבד.',
      stageTitle: '🔬 באיזו מחלקה אני?',
      anim: (stage, ctx) => {
        const root = h('div', { class: 'maskviz' });
        stage.innerHTML = '';
        stage.append(root);
        const segs = [
          ['A', 126, '#ff8a8a'], ['•', 1, '#888'], ['B', 64, '#ffc27a'], ['C', 32, '#ffe27a'], ['D', 16, '#9ef0b0'], ['E', 16, '#9ad7ff'],
        ];
        const bar = h('div', { class: 'cls-bar' });
        const lens = [126, 1, 64, 32, 16, 16];
        const tot = 255;
        segs.forEach(([t, , c], i) => bar.append(h('div', { style: { width: ((lens[i] + (i === 0 ? 1 : 0)) / 256 * 100) + '%', background: c } }, t)));
        const ptr = h('div', { class: 'cls-pointer' });
        const wrap = h('div', { class: 'cls-wrap' }, bar, ptr);
        const card = h('div', { class: 'cls-card' });
        const slider = h('input', { type: 'range', min: 0, max: 255, value: 172, style: { width: '100%', accentColor: '#ffd35c' } });
        const upd = () => {
          const v = +slider.value;
          ptr.style.left = (v / 256 * 100) + '%';
          const cls = classOf([v, 0, 0, 1]);
          const mask = { A: '255.0.0.0 (/8)', B: '255.255.0.0 (/16)', C: '255.255.255.0 (/24)' }[cls] || (cls === 'Loopback' ? 'Loopback' : cls === 'D' ? 'Multicast' : cls === 'E' ? 'ניסיוני' : '—');
          card.innerHTML = `<small>אוקטט ראשון: ${v}</small><b>מחלקה ${cls}</b><span>מסיכת ברירת מחדל: ${mask}</span>`;
        };
        slider.addEventListener('input', () => { upd(); sfx('tick'); });
        root.append(h('div', { style: { color: '#cfd6ff', fontWeight: 700 } }, 'הזיזו את האוקטט הראשון של הכתובת (0–255):'), wrap, slider, card);
        upd();
      },
      questions: [
        { tier: 1, type: 'mc', q: 'לאיזו מחלקה שייכת הכתובת <code>172.20.5.9</code>?', options: ['A', 'B', 'C', 'D'], a: 1, why: 'האוקטט הראשון 172 נמצא בטווח 128–191 ⇒ מחלקה B (מסיכה /16).', hint: 'B היא 128–191.' },
        { tier: 1, type: 'mc', q: 'מהי מסיכת ברירת המחדל של מחלקה C?', options: ['255.0.0.0', '255.255.0.0', '255.255.255.0', '255.255.255.255'], a: 2, why: 'מחלקה C: /24 = 255.255.255.0.' },
        { tier: 2, type: 'mc', q: 'לאיזו מחלקה שייכת <code>10.0.0.1</code>?', options: ['A', 'B', 'C', 'E'], a: 0, why: '10 בין 1 ל-126 ⇒ מחלקה A.' },
        { tier: 2, type: 'mc', q: 'לאיזו מחלקה שייכת <code>200.1.1.1</code>?', options: ['C', 'B', 'D', 'A'], a: 0, why: '192–223 ⇒ מחלקה C.' },
      ],
    },
    {
      title: 'תקשורת באותה רשת ובין רשתות',
      body: `<p>לפני ששולח חבילה, המחשב בודק: <b>האם היעד באותה רשת איתי?</b> הוא עושה AND בין כתובת היעד למסיכה שלו ומשווה לרשת שלו.</p>
      <ul>
        <li><b>אותה רשת</b> ← שולח ישירות אל היעד (דרך <b>מתג</b> – Switch).</li>
        <li><b>רשת אחרת</b> ← שולח אל <b>שער ברירת המחדל</b> (Default Gateway) – הכתובת של הראוטר ברשת. הראוטר מעביר הלאה.</li>
      </ul>
      <p>לכן בכל מחשב מגדירים: כתובת IP, מסיכה, <b>ושער ברירת מחדל</b>. בלי שער – אי אפשר לצאת מהרשת.</p>`,
      tip: 'שער ברירת המחדל חייב להיות באותה רשת של המחשב.',
      anim: (stage, ctx) => {
        const sim = new Sim(stage, ctx);
        sim.zone(22, 42, 40, 72, 'רשת 192.168.1.0/24', '#6c8bff');
        sim.zone(80, 42, 36, 72, 'רשת 192.168.2.0/24', '#3ddc97');
        const pc1 = sim.dev('pc', 'מחשב 1', '192.168.1.10', 10, 28, { size: 46 });
        const pc2 = sim.dev('laptop', 'מחשב 2', '192.168.1.20', 10, 62, { size: 46 });
        const sw1 = sim.dev('switch', 'מתג', null, 32, 45, { size: 50 });
        const rt = sim.dev('router', 'ראוטר', '.1 | .1', 51, 45, { size: 56 });
        const sw2 = sim.dev('switch', 'מתג', null, 68, 45, { size: 50 });
        const pc3 = sim.dev('pc', 'מחשב 3', '192.168.2.30', 90, 28, { size: 46 });
        const srv = sim.dev('server', 'שרת', '192.168.2.40', 90, 62, { size: 46 });
        [pc1, pc2].forEach((d) => sim.line(d, sw1)); sim.line(sw1, rt); sim.line(rt, sw2); [pc3, srv].forEach((d) => sim.line(d, sw2));
        let busy = false;
        sim.caption('מחשב 1 רוצה לשלוח הודעה. בחרו יעד ונראה מה הוא בודק.');
        const send = async (dst, same) => {
          if (busy) return; busy = true;
          const ip = dst === pc2 ? '192.168.1.20' : dst === pc3 ? '192.168.2.30' : '192.168.2.40';
          const net = same ? '192.168.1.0' : ip.split('.').slice(0, 3).join('.') + '.0';
          sim.caption(`המחשב עושה AND: <code>${ip}</code> AND <code>255.255.255.0</code> = <code>${net}</code> ${same ? '= הרשת שלי ✔' : '≠ הרשת שלי (192.168.1.0) ✘'}`);
          await ctx.wait(2200);
          if (same) {
            sim.caption('אותה רשת ⇒ שולחים ישירות דרך המתג.', 'good');
            await sim.fly(pc1, dst, '✉ → ' + ip, { via: [sw1], ms: 1600, color: '#ffd35c' });
          } else {
            sim.caption('רשת אחרת ⇒ שולחים אל <b>שער ברירת המחדל</b> (הראוטר, 192.168.1.1) והוא מעביר הלאה.', 'good');
            await sim.fly(pc1, dst, '✉ → ' + ip, { via: [sw1, rt, sw2], ms: 3000, color: '#ffd35c' });
          }
          dst.glow('#3ddc97'); dst.say('קיבלתי! ✔');
          busy = false;
        };
        sim.btn('✉ אל מחשב 2 (192.168.1.20)', () => send(pc2, true));
        sim.btn('✉ אל מחשב 3 (192.168.2.30)', () => send(pc3, false));
        sim.btn('✉ אל השרת (192.168.2.40)', () => send(srv, false));
      },
      questions: [
        { tier: 1, type: 'mc', q: 'מחשב רוצה לשלוח חבילה לכתובת שנמצאת ברשת אחרת. לאן ישלח אותה?', options: ['אל שער ברירת המחדל (הראוטר)', 'אל כל המכשירים ברשת', 'אל שרת ה-DNS', 'אל המדפסת'], a: 0, why: 'יעד ברשת אחרת – שולחים לשער ברירת המחדל שמעביר הלאה.' },
        { tier: 1, type: 'tf', q: '<code>192.168.1.10/24</code> ו-<code>192.168.2.10/24</code> נמצאות באותה רשת.', a: false, why: 'חלק הרשת שונה: 192.168.1 מול 192.168.2.' },
        { tier: 2, type: 'mc', q: 'מה בודק מחשב לפני שהוא שולח חבילה?', options: ['האם כתובת היעד באותה רשת שלו (בעזרת המסיכה)', 'האם היעד מחובר לחשמל', 'מה צבע הכבל', 'כמה זיכרון יש ליעד'], a: 0, why: 'AND בין כתובת היעד למסיכה, והשוואה לרשת המקומית.' },
        { tier: 2, type: 'mc', q: 'איזו הגדרה חיונית כדי לתקשר עם מכשירים מחוץ לרשת המקומית?', options: ['שער ברירת מחדל', 'שם משתמש', 'כתובת MAC חדשה', 'מסך גדול'], a: 0, why: 'בלי Default Gateway אי אפשר לצאת מהרשת.' },
        { tier: 3, type: 'tf', q: '<code>192.168.1.10/26</code> ו-<code>192.168.1.70/26</code> באותה רשת.', a: false, why: '/26: הבלוקים הם 0–63 ו-64–127. 10 ו-70 בבלוקים שונים ⇒ רשתות שונות.' },
      ],
    },
  ],

  quiz: [
    { tier: 1, type: 'mc', q: 'מה מזהה חלק הרשת בכתובת IP?', options: ['את הרשת', 'את המכשיר', 'את הכבל', 'את הסיסמה'], a: 0, why: 'חלק הרשת מזהה את הרשת; חלק המארח מזהה מכשיר בה.' },
    { tier: 1, type: 'mc', q: 'מהי מסיכת /24 בעשרוני?', options: ['255.255.255.0', '255.255.0.0', '255.0.0.0', '0.0.0.255'], a: 0, why: '24 ביטים של 1 = 255.255.255.0.' },
    { tier: 1, type: 'mc', q: 'כתובת הרשת של <code>192.168.1.50/24</code> היא:', options: ['192.168.1.0', '192.168.1.255', '192.168.0.0', '192.168.1.1'], a: 0, why: 'מאפסים את ביטי המארח.' },
    { tier: 1, type: 'mc', q: 'כתובת ה-Broadcast של <code>192.168.1.50/24</code>:', options: ['192.168.1.255', '192.168.1.0', '192.168.255.255', '255.255.255.255'], a: 0, why: 'כל ביטי המארח 1 ⇒ 192.168.1.255.' },
    { tier: 1, type: 'mc', q: 'כמה כתובות מארח תקינות ב-/24?', options: ['254', '256', '255', '253'], a: 0, why: '2⁸ − 2 = 254.' },
    { tier: 2, type: 'mc', q: 'מחשבים באותה רשת מתקשרים…', options: ['ישירות (דרך מתג)', 'תמיד דרך ראוטר', 'רק דרך האינטרנט', 'רק עם כבל מיוחד'], a: 0, why: 'באותה רשת – ישירות. בין רשתות – דרך ראוטר.' },
    { tier: 2, type: 'mc', q: 'לאיזו מחלקה שייכת <code>150.10.1.1</code>?', options: ['B', 'A', 'C', 'D'], a: 0, why: '128–191 = מחלקה B.' },
    { tier: 2, type: 'mc', q: 'מהי מסיכת ברירת המחדל של מחלקה B?', options: ['255.255.0.0', '255.0.0.0', '255.255.255.0', '255.255.255.255'], a: 0, why: 'מחלקה B = /16.' },
    { tier: 2, type: 'mc', q: 'כמה ביטי מארח יש במסיכה <code>255.255.0.0</code>?', options: ['16', '8', '24', '32'], a: 0, why: '/16 ⇒ 32 − 16 = 16.' },
    { tier: 2, type: 'tf', q: '<code>10.0.0.1/8</code> ו-<code>10.200.5.5/8</code> באותה רשת.', a: true, why: '/8 – רק האוקטט הראשון הוא הרשת (10 בשניהם).' },
    { tier: 2, type: 'mc', q: 'מה תפקיד שער ברירת המחדל (Default Gateway)?', options: ['להעביר חבילות לרשתות אחרות', 'לתת כתובות IP', 'לתרגם שמות לכתובות', 'להגביר Wi-Fi'], a: 0, why: 'שער ברירת המחדל הוא הראוטר שמוביל החוצה.' },
    { tier: 3, type: 'input', q: 'מהי כתובת ה-Broadcast של <code>172.16.5.9/16</code>?', answer: '172.16.255.255', placeholder: '___.___.___.___', why: '/16: שני האוקטטים האחרונים 255.' },
    { tier: 3, type: 'mc', q: 'מהי כתובת הרשת של <code>192.168.1.130/25</code>?', options: ['192.168.1.128', '192.168.1.0', '192.168.1.129', '192.168.1.192'], a: 0, why: '/25: בלוקים של 128: 0 ו-128. 130 ב-128–255 ⇒ רשת 192.168.1.128.' },
    { tier: 3, type: 'input', q: 'כמה מארחים תקינים יש ברשת <code>/28</code>?', answer: '14', placeholder: 'מספר', why: '32 − 28 = 4 ביטי מארח. 2⁴ − 2 = 14.' },
    { tier: 3, type: 'mc', q: 'איזו מהמסיכות הבאות <b>אינה</b> תקינה?', options: ['255.255.255.65', '255.255.255.192', '255.255.255.128', '255.255.254.0'], a: 0, why: 'מסיכה חייבת להיות רצף 1 ואחריו רצף 0. 65 = 01000001 – לא תקין.' },
  ],

  game: {
    name: 'דואר ינשופים',
    intro: `<p>ינשופי הדואר צריכים לדעת לאיזה בית (רשת) למסור כל מכתב! בכל סיבוב מגיע מכתב עם <b>כתובת IP</b> ומסיכה – בחרו את <b>הרשת הנכונה</b> שהכתובת שייכת לה. טעות = הינשוף מתרסק ומאבדים לב ❤️ (יש 3).</p>
    <p class="mini">ברמות הגבוהות: הרשתות מגוונות יותר, הזמן קצר, ולעיתים צריך לחשב רשתות בגודל /26.</p>`,
    run: owlGame,
  },
};
