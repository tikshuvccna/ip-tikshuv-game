import { h, pick, shuffle, randInt } from '../../util.js';
import { injectCss, icon } from '../anim.js';
import { CiscoSim, ciscoTerminal } from '../terminals.js';
import { sfx } from '../../audio.js';

injectCss('g7', `
.g7{height:100%;min-height:480px;padding:10px 16px 14px;display:flex;flex-direction:column;gap:10px}
.g7-top{display:flex;justify-content:space-between;font-weight:800;color:#cfd6ff;gap:10px;flex-wrap:wrap}
.g7-main{flex:1;display:grid;grid-template-columns:minmax(260px,38%) 1fr;gap:14px;min-height:0}
.g7-task{background:linear-gradient(180deg,#fff8e4,#ecdcb0);color:#2b2140;border:3px solid #b89a5a;border-radius:18px;padding:14px;overflow:auto;font-size:14.5px;line-height:1.65}
.g7-task h3{margin:0 0 6px;font:400 20px 'Secular One';color:#3b2a8a}
.g7-task ul{margin:6px 0;padding:0 18px 0 0}
.g7-task code{background:rgba(60,40,140,.13);color:#3b2a8a}
.g7-work{display:flex;flex-direction:column;gap:8px;min-width:0;min-height:0}
.g7-script{background:#04160e;border:2px solid #1d5a3a;border-radius:14px;padding:10px;font:600 13px ui-monospace,monospace;color:#b8ffd0;direction:ltr;min-height:150px;flex:1;overflow:auto}
.g7-script .ln{padding:2px 6px;border-radius:5px;display:flex;gap:8px;align-items:center}
.g7-script .ln.ctx{color:#7a9;}
.g7-script .ln.ind{padding-left:22px}
.g7-script select{background:#0b2a1c;color:#fff7a8;border:1px solid #3a8a5a;border-radius:5px;font:600 13px ui-monospace,monospace;padding:1px 4px}
.g7-pool{display:flex;flex-wrap:wrap;gap:6px;direction:ltr}
.g7-chip{background:#0f2a3a;border:1px solid #4a8aaa;color:#bfe9ff;border-radius:9px;padding:4px 10px;font:600 12.5px ui-monospace,monospace;cursor:pointer}
.g7-chip:hover{background:#17435c}
.g7-chip.used{opacity:.25;pointer-events:none}
.g7-actions{display:flex;gap:8px;flex-wrap:wrap}
.g7-res{background:rgba(255,255,255,.08);border:1px solid var(--line);border-radius:14px;padding:8px 12px;font-size:14px;line-height:1.7}
.g7-res .ok{color:#7dffb0}.g7-res .no{color:#ff8fa3}
.g7-term{flex:1;min-height:200px}
.g7-end{margin:auto;text-align:center;display:flex;flex-direction:column;gap:10px;align-items:center}
.g7-end h2{font:900 38px 'Secular One';color:#ffd35c;margin:0}
@media (max-width:900px){.g7-main{grid-template-columns:1fr}}
`);

const NAMES = ['HOGWARTS', 'LAN1', 'STUDENTS', 'MAGIC', 'CLASSROOM', 'OFFICE'];

function makeTask(level) {
  const x = randInt(1, 99);
  const n = randInt(5, 12);
  const net = `192.168.${x}.0`;
  return {
    name: pick(NAMES), net, mask: '255.255.255.0', gw: `192.168.${x}.1`, ex1: `192.168.${x}.1`, ex2: `192.168.${x}.${n}`,
    dns: pick(['8.8.8.8', '1.1.1.1', '8.8.4.4']), lease: randInt(2, 7), x, n, firstFree: `192.168.${x}.${n + 1}`,
  };
}

function scriptLines(t) {
  return {
    ex: `ip dhcp excluded-address ${t.ex1} ${t.ex2}`,
    pool: `ip dhcp pool ${t.name}`,
    net: `network ${t.net} ${t.mask}`,
    gw: `default-router ${t.gw}`,
    dns: `dns-server ${t.dns}`,
    lease: `lease ${t.lease}`,
  };
}

// הרצת סקריפט והחזרת רשימת בדיקות
function runAndCheck(t, lines, { withIface = true, sim: given = null } = {}) {
  const sim = given || new CiscoSim({ mode: 'config' });
  if (!given) {
    // ממשק מוגדר מראש (בשלבים 1–2)
    sim.ifaces['GigabitEthernet0/0'] = { ip: t.gw, mask: t.mask, up: true, desc: '', helper: [] };
    sim.mode = 'config';
    const out = [];
    for (const l of lines) out.push(sim.exec(l));
  }
  const s = sim.summary();
  const p = s.pools[t.name];
  const checks = [];
  const exOk = s.excluded.some(([a, b]) => a === t.ex1 && b === t.ex2);
  checks.push({ label: `החרגת כתובות ${t.ex1} – ${t.ex2}`, ok: exOk });
  checks.push({ label: `יצירת מאגר בשם ${t.name}`, ok: !!p });
  checks.push({ label: `network ${t.net} ${t.mask}`, ok: !!p && p.network === t.net && p.mask === t.mask });
  checks.push({ label: `default-router ${t.gw}`, ok: !!p && p.router === t.gw });
  checks.push({ label: `dns-server ${t.dns}`, ok: !!p && p.dns.includes(t.dns) });
  checks.push({ label: `lease ${t.lease} ימים`, ok: !!p && p.lease && p.lease.d === t.lease });
  if (!withIface) {
    const g = s.ifaces['GigabitEthernet0/0'];
    checks.push({ label: `ממשק g0/0: ${t.gw} ${t.mask} + no shutdown`, ok: g.ip === t.gw && g.mask === t.mask && g.up });
  }
  // בדיקת לקוח
  const clone = Object.assign(new CiscoSim(), sim);
  clone.bindings = []; clone.stats = { ...sim.stats };
  const r = clone.clientRequest();
  checks.push({ label: `לקוח מקבל ${t.firstFree} (הראשונה הפנויה אחרי ההחרגה)`, ok: !!r.ok && r.ip === t.firstFree && r.gw === t.gw && r.dns.includes(t.dns) });
  return { checks, sim };
}

export function cmdGame(root, opts) {
  const { level, mult, onPoints, onDone } = opts;
  const cfg = { 1: { n: 2 }, 2: { n: 3 }, 3: { n: 2 } }[level];
  let round = 0, raw = 0, destroyed = false;
  const wrap = h('div', { class: 'g7' });
  root.append(wrap);

  function taskCard(t) {
    const extra = level === 3 ? `<li>הגדירו את הממשק <code>g0/0</code>: כתובת <code>${t.gw}</code> ומסיכה <code>${t.mask}</code>, והדליקו אותו.</li>` : '';
    return h('div', { class: 'g7-task', html: `<h3>🧙 משימת קסם: שרת DHCP על ראוטר סיסקו</h3>
      <p>הגדירו בראוטר שרת DHCP לרשת <code>${t.net}/24</code>:</p>
      <ul>${extra}
      <li>החריגו את הכתובות <code>${t.ex1}</code> עד <code>${t.ex2}</code></li>
      <li>מאגר בשם <code>${t.name}</code> לרשת <code>${t.net}</code> מסיכה <code>${t.mask}</code></li>
      <li>שער ברירת מחדל <code>${t.gw}</code></li>
      <li>שרת DNS <code>${t.dns}</code></li>
      <li>זמן השכרה <code>${t.lease}</code> ימים</li></ul>
      ${level === 3 ? '<p><b>רמז:</b> enable ← configure terminal. אפשר להקליד <code>?</code> לעזרה ו-Tab להשלמה.</p>' : '<p>הראוטר כבר במצב <code>(config)#</code> והממשק מוגדר.</p>'}` });
  }

  function showResult(box, checks, pts) {
    box.innerHTML = '';
    box.append(...checks.map((c) => h('div', { class: c.ok ? 'ok' : 'no' }, (c.ok ? '✔ ' : '✘ ') + c.label)));
    if (pts !== undefined) box.append(h('b', {}, `+${pts} נקודות`));
  }

  function next() {
    if (destroyed) return;
    if (round >= cfg.n) return end();
    const t = makeTask(level);
    wrap.innerHTML = '';
    wrap.append(h('div', { class: 'g7-top' }, h('span', {}, `משימה ${round + 1}/${cfg.n}`), h('span', {}, level === 1 ? 'סדרו את הפקודות' : level === 2 ? 'השלימו את הפקודות' : 'הקלידו את הפקודות'), h('span', {}, `⭐ ${Math.round(raw)}`)));
    const main = h('div', { class: 'g7-main' });
    wrap.append(main);
    main.append(taskCard(t));
    const work = h('div', { class: 'g7-work' });
    main.append(work);
    const res = h('div', { class: 'g7-res' }, 'לחצו "בדיקה" כשתסיימו.');
    let attempts = 0, done = false;
    const finishTask = (frac) => {
      done = true;
      const pts = Math.max(0, Math.round(100 * frac - (attempts - 1) * (level === 3 ? 8 : 20)));
      raw += pts;
      onPoints && onPoints(Math.round(pts * 0.5 * mult));
      round++;
      sfx(frac >= 0.99 ? 'levelup' : 'correct');
      return pts;
    };
    const L = scriptLines(t);

    if (level === 1) {
      const order = ['ex', 'pool', 'net', 'gw', 'dns', 'lease'];
      const chips = shuffle(order);
      const picked = [];
      const script = h('div', { class: 'g7-script' });
      const pool = h('div', { class: 'g7-pool' });
      const draw = () => {
        script.innerHTML = '';
        script.append(h('div', { class: 'ln ctx' }, `${'Router(config)#'}`));
        picked.forEach((k, i) => {
          const sub = ['net', 'gw', 'dns', 'lease'].includes(k);
          script.append(h('div', { class: 'ln' + (sub ? ' ind' : ''), onclick: () => { if (!done) { picked.splice(i, 1); draw(); sfx('click'); } }, style: { cursor: 'pointer' } }, h('span', { class: 'ctx' }, sub ? 'Router(dhcp-config)#' : 'Router(config)#'), L[k]));
        });
        pool.innerHTML = '';
        chips.forEach((k) => pool.append(h('button', { class: 'g7-chip' + (picked.includes(k) ? ' used' : ''), onclick: () => { if (!done) { picked.push(k); sfx('click'); draw(); } } }, L[k])));
      };
      draw();
      const check = h('button', { class: 'btn gold', onclick: () => {
        if (done) return;
        attempts++;
        const lines = picked.map((k) => L[k]);
        const { checks } = runAndCheck(t, lines);
        const okAll = checks.every((c) => c.ok);
        const frac = checks.filter((c) => c.ok).length / checks.length;
        const orderOk = picked.length === 6 && picked.indexOf('ex') < picked.indexOf('pool') && ['net', 'gw', 'dns', 'lease'].every((k) => picked.indexOf(k) > picked.indexOf('pool'));
        if (okAll && orderOk) { const pts = finishTask(1); showResult(res, checks, pts); setTimeout(next, 3000); }
        else {
          sfx('wrong');
          showResult(res, checks);
          res.append(h('div', { class: 'no' }, orderOk ? '' : 'סדר: קודם excluded-address, אחר כך ip dhcp pool, ואז הפקודות של המאגר (network, default-router…).'));
          if (attempts >= 2) { const pts = finishTask(frac * 0.7); res.append(h('b', {}, `+${pts} נקודות`)); setTimeout(next, 4000); }
        }
      } }, 'בדיקה ✔');
      work.append(h('div', { class: 'g7-res' }, 'לחצו על הפקודות לפי הסדר הנכון (לחיצה על שורה בסקריפט מסירה אותה):'), pool, script, h('div', { class: 'g7-actions' }, check), res);
    } else if (level === 2) {
      const mkOpts = (right, wrongs) => shuffle([right, ...wrongs.filter((w) => w !== right)].slice(0, 4));
      const wr = {
        ex: [t.ex1.replace(/\d+$/, '254'), `192.168.${t.x + 1}.${t.n}`, `192.168.${t.x}.${t.n + 3}`],
        net: [`192.168.${t.x}.1`, `192.168.${t.x + 1}.0`, `${t.net.replace(/\.0$/, '.255')}`],
        mask: ['255.255.0.0', '255.255.255.128', '0.0.0.255'],
        gw: [`192.168.${t.x}.254`, t.net, `192.168.${t.x}.255`],
        dns: ['8.8.8.8', '1.1.1.1', '8.8.4.4', t.gw],
        lease: ['1', '30', '0', '10'],
      };
      const sel = (right, wrongs) => { const s = h('select', {}, h('option', { value: '' }, '—'), ...mkOpts(right, wrongs).map((v) => h('option', { value: v }, v))); return s; };
      const sEx2 = sel(t.ex2, wr.ex), sNet = sel(t.net, wr.net), sMask = sel(t.mask, wr.mask), sGw = sel(t.gw, wr.gw), sDns = sel(t.dns, wr.dns), sLease = sel(String(t.lease), wr.lease);
      const nameIn = h('input', { type: 'text', style: { width: '110px', background: '#0b2a1c', color: '#fff7a8', border: '1px solid #3a8a5a', borderRadius: '5px', font: '600 13px ui-monospace,monospace', padding: '1px 4px' }, value: '', placeholder: 'שם מאגר', dir: 'ltr' });
      nameIn.addEventListener('keydown', (e) => e.stopPropagation());
      nameIn.addEventListener('keyup', (e) => e.stopPropagation());
      const script = h('div', { class: 'g7-script' },
        h('div', { class: 'ln' }, h('span', { class: 'ctx' }, 'Router(config)#'), 'ip dhcp excluded-address ', t.ex1, ' ', sEx2),
        h('div', { class: 'ln' }, h('span', { class: 'ctx' }, 'Router(config)#'), 'ip dhcp pool ', nameIn),
        h('div', { class: 'ln ind' }, h('span', { class: 'ctx' }, 'Router(dhcp-config)#'), 'network ', sNet, ' ', sMask),
        h('div', { class: 'ln ind' }, h('span', { class: 'ctx' }, 'Router(dhcp-config)#'), 'default-router ', sGw),
        h('div', { class: 'ln ind' }, h('span', { class: 'ctx' }, 'Router(dhcp-config)#'), 'dns-server ', sDns),
        h('div', { class: 'ln ind' }, h('span', { class: 'ctx' }, 'Router(dhcp-config)#'), 'lease ', sLease));
      const check = h('button', { class: 'btn gold', onclick: () => {
        if (done) return;
        attempts++;
        const nm = nameIn.value.trim() || '___';
        const lines = [`ip dhcp excluded-address ${t.ex1} ${sEx2.value || ''}`, `ip dhcp pool ${nm}`, `network ${sNet.value} ${sMask.value}`, `default-router ${sGw.value}`, `dns-server ${sDns.value}`, `lease ${sLease.value}`];
        const tt = { ...t };
        const sim = new CiscoSim({ mode: 'config' });
        sim.ifaces['GigabitEthernet0/0'] = { ip: t.gw, mask: t.mask, up: true, desc: '', helper: [] };
        lines.forEach((l) => sim.exec(l));
        const { checks } = runAndCheck(t, lines, { sim });
        const okAll = checks.every((c) => c.ok);
        const frac = checks.filter((c) => c.ok).length / checks.length;
        if (okAll) { const pts = finishTask(1); showResult(res, checks, pts); setTimeout(next, 3000); }
        else {
          sfx('wrong'); showResult(res, checks);
          if (attempts >= 2) { const pts = finishTask(frac * 0.7); res.append(h('b', {}, `+${pts} נקודות`)); setTimeout(next, 4000); }
          else res.append(h('div', { class: 'no' }, 'נסו שוב – יש לכם עוד ניסיון אחד.'));
        }
      } }, 'בדיקה ✔');
      work.append(h('div', { class: 'g7-res' }, 'השלימו את החסר בכל פקודה (שם המאגר – הקלידו בעצמכם):'), script, h('div', { class: 'g7-actions' }, check), res);
    } else {
      const sim = new CiscoSim({ mode: 'user' });
      const term = ciscoTerminal(sim, { title: 'Router CLI – התחילו ב-enable', hints: ['enable', 'configure terminal', 'show running-config', 'show ip dhcp binding', 'show ip interface brief'] });
      const check = h('button', { class: 'btn gold', onclick: () => {
        if (done) return;
        attempts++;
        const { checks } = runAndCheck(t, [], { withIface: false, sim });
        const okAll = checks.every((c) => c.ok);
        const frac = checks.filter((c) => c.ok).length / checks.length;
        showResult(res, checks);
        if (okAll) { const pts = finishTask(1); res.append(h('b', {}, `+${pts} נקודות`)); setTimeout(next, 3200); }
        else { sfx('wrong'); res.append(h('div', { class: 'no' }, 'עדיין חסר משהו – המשיכו להקליד ובדקו שוב.')); }
      } }, 'בדיקה ✔');
      const giveUp = h('button', { class: 'btn ghost small', onclick: () => {
        if (done) return;
        attempts++;
        const { checks } = runAndCheck(t, [], { withIface: false, sim });
        const frac = checks.filter((c) => c.ok).length / checks.length;
        const pts = finishTask(frac * 0.6);
        showResult(res, checks, pts);
        setTimeout(next, 4000);
      } }, 'סיימתי / ויתור');
      work.append(h('div', { class: 'g7-term' }, term.el), h('div', { class: 'g7-actions' }, check, giveUp), res);
      setTimeout(() => term.focus(), 100);
    }
  }

  function end() {
    const max = cfg.n * 100;
    const pct = Math.round((raw / max) * 100);
    wrap.innerHTML = '';
    wrap.append(h('div', { class: 'g7-end' }, icon('router'),
      h('h2', {}, pct >= 75 ? '📡 מאסטר הראוטרים!' : '📚 תרגול נוסף יעזור'),
      h('p', {}, `ניקוד משחק: ${Math.round(raw)}/${max} (${pct}%)`),
      h('p', { class: 'mini' }, 'excluded-address ← ip dhcp pool ← network, default-router, dns-server, lease. ואז show ip dhcp binding לבדיקה.')));
    sfx('levelup');
    onDone({ score: raw, max, msg: `הגדרת שרת DHCP בראוטר סיסקו בדיוק של ${pct}% 📡` });
  }

  next();
  return { destroy() { destroyed = true; } };
}
