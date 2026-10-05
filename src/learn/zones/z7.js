import { h } from '../../util.js';
import { Sim, icon, injectCss } from '../anim.js';
import { sfx } from '../../audio.js';
import { makeTerminal, CiscoSim, ciscoTerminal } from '../terminals.js';
import { cmdGame } from '../games/g7.js';

injectCss('z7', `
.cli-stack{position:absolute;inset:0;display:flex;flex-direction:column;gap:6px;padding:8px}
.cli-stack .top{flex:0 0 auto}
.cli-stack .bot{flex:1;min-height:0}
.modes{display:flex;gap:4px;justify-content:center;align-items:stretch;direction:ltr;flex-wrap:wrap}
.modes div{padding:5px 8px;border-radius:10px;background:rgba(255,255,255,.08);border:2px solid var(--line);font:700 11.5px ui-monospace,monospace;color:#cfd6ff;text-align:center;min-width:92px;transition:all .3s}
.modes div small{display:block;font:600 10px var(--font);color:var(--muted);direction:rtl}
.modes div.on{background:rgba(255,211,92,.25);border-color:var(--gold);color:#fff;box-shadow:0 0 14px rgba(255,211,92,.5);transform:translateY(-3px)}
.modes i{align-self:center;color:var(--gold);font-style:normal}
.cli-split{position:absolute;inset:0;display:grid;grid-template-columns:1fr 1fr;gap:8px;padding:8px 8px 66px}
.cli-split .term{height:100%}
.client-card{background:linear-gradient(180deg,#fff8e4,#ecdcb0);color:#2b2140;border:3px solid #b89a5a;border-radius:16px;padding:10px 12px;font:600 12.5px ui-monospace,monospace;direction:ltr;line-height:1.65;overflow:auto}
.client-card h4{margin:0 0 6px;font:800 14px var(--font);direction:rtl;color:#3b2a8a}
.client-card .row{display:flex;justify-content:space-between;gap:8px;border-bottom:1px dashed #c9b88a;padding:1px 0;opacity:.25;transition:opacity .5s}
.client-card .row.on{opacity:1}
.client-card .row b{color:#c0392b}
.pcpanel{background:rgba(0,0,0,.45);border:1px solid var(--line);border-radius:12px;padding:6px 10px;font:600 12px ui-monospace,monospace;direction:ltr;color:#cfe;min-height:56px}
.fault-btns{display:flex;gap:6px;flex-wrap:wrap;justify-content:center}
`);

const C = (t) => `<code>${t}</code>`;

async function typeCmd(term, cmd, ctx, speed = 32) {
  const row = term.print(term.prompt + '', 'cmd');
  for (let i = 1; i <= cmd.length; i++) {
    if (!ctx.alive) return;
    row.textContent = term.prompt + cmd.slice(0, i);
    await ctx.wait(speed);
  }
  await ctx.wait(250);
}

function modesBar(sim) {
  const defs = [['user', 'Router>', 'EXEC משתמש'], ['priv', 'Router#', 'EXEC מורשה'], ['config', 'Router(config)#', 'תצורה גלובלית'], ['if', 'Router(config-if)#', 'ממשק'], ['dhcp', 'Router(dhcp-config)#', 'מאגר DHCP']];
  const bar = h('div', { class: 'modes' });
  defs.forEach(([k, p, d], i) => { if (i) bar.append(h('i', {}, '›')); bar.append(h('div', { dataset: { m: k } }, p, h('small', {}, d))); });
  const upd = () => bar.querySelectorAll('[data-m]').forEach((e) => e.classList.toggle('on', e.dataset.m === sim.mode));
  upd();
  return { bar, upd };
}

function preconfigured(extra = []) {
  const sim = new CiscoSim({ mode: 'config' });
  ['interface g0/0', 'ip address 192.168.1.1 255.255.255.0', 'no shutdown', 'exit', 'ip dhcp excluded-address 192.168.1.1 192.168.1.10', 'ip dhcp pool LAN1', 'network 192.168.1.0 255.255.255.0', 'default-router 192.168.1.1', 'dns-server 8.8.8.8', 'lease 7', 'exit', ...extra].forEach((l) => sim.exec(l));
  sim.mode = 'priv';
  return sim;
}

export default {
  intro: `ברוכים הבאים למגדל הראוטר! 📡 על פסגת ההר עומד גביש-ראוטר ענק שמחלק כתובות לכל הממלכה. כאן נלמד את <b>הפקודות האמיתיות</b> של ראוטר סיסקו (CLI): איך מגדירים ממשק, איך מחריגים כתובות, איך יוצרים מאגר DHCP, ואיך בודקים שהכול עובד – ובסוף נתרגל בטרמינל מדומה אמיתי!`,

  steps: [
    {
      title: 'מצבי ה-CLI של סיסקו',
      stageTitle: '⌨️ נסו: התקדמו בין המצבים',
      body: `<p>בראוטר סיסקו עובדים בשורת פקודה (CLI) עם <b>מצבים</b>. ה-prompt מראה באיזה מצב אנחנו:</p>
      <ul>
        <li>${C('Router&gt;')} – <b>User EXEC</b> (הרשאות מוגבלות).</li>
        <li>${C('Router#')} – <b>Privileged EXEC</b>. נכנסים עם <code>enable</code>.</li>
        <li>${C('Router(config)#')} – <b>Global Config</b>. נכנסים עם <code>configure terminal</code> (או <code>conf t</code>).</li>
        <li>${C('Router(config-if)#')} – <b>Interface</b>: <code>interface g0/0</code>.</li>
        <li>${C('Router(dhcp-config)#')} – <b>DHCP pool</b>: <code>ip dhcp pool NAME</code>.</li>
      </ul>
      <p>חזרה אחורה: <code>exit</code> (שלב אחד) או <code>end</code> (עד Privileged EXEC). אפשר לקצר פקודות (<code>conf t</code>) ולהשתמש ב-<code>?</code> ו-Tab.</p>`,
      tip: 'לחצו על הפקודות המוצעות מתחת למסוף והסתכלו איך המצב מסומן למעלה.',
      anim: (stage, ctx) => {
        const root = h('div', { class: 'cli-stack' });
        stage.innerHTML = '';
        stage.append(root);
        const sim = new CiscoSim({ mode: 'user' });
        const m = modesBar(sim);
        const term = ciscoTerminal(sim, { hints: ['enable', 'configure terminal', 'interface g0/0', 'exit', 'ip dhcp pool LAN1', 'end', 'show ip interface brief'], onExec: () => m.upd() });
        root.append(h('div', { class: 'top' }, m.bar), h('div', { class: 'bot' }, term.el));
      },
      questions: [
        { tier: 1, type: 'mc', q: 'איזו פקודה עוברת מ-<code>Router&gt;</code> ל-<code>Router#</code>?', options: ['enable', 'configure terminal', 'exit', 'interface g0/0'], a: 0, why: 'enable מעביר ל-Privileged EXEC.' },
        { tier: 1, type: 'mc', q: 'מהי הפקודה להיכנס למצב תצורה גלובלי?', options: ['configure terminal', 'enable', 'show run', 'ip dhcp pool'], a: 0, why: 'configure terminal (או conf t).' },
        { tier: 2, type: 'mc', q: 'ה-prompt <code>Router(dhcp-config)#</code> מציין מצב…', options: ['הגדרת מאגר DHCP', 'ממשק', 'EXEC משתמש', 'תצורה גלובלית'], a: 0, why: 'נכנסים אליו עם ip dhcp pool.' },
        { tier: 2, type: 'mc', q: 'איזו פקודה חוזרת ישר ל-Privileged EXEC מכל מצב תצורה?', options: ['end', 'exit', 'back', 'disable'], a: 0, why: 'end.' },
      ],
    },
    {
      title: 'הגדרת ממשק הראוטר',
      stageTitle: '📡 הראוטר מתעורר',
      body: `<p>לפני DHCP, לממשק של הראוטר שפונה אל הלקוחות צריך להגדיר כתובת IP <b>סטטית</b> – היא תהיה <b>שער ברירת המחדל</b> שלהם:</p>
      <pre style="direction:ltr;text-align:left;background:#0003;padding:8px;border-radius:10px;font-size:13.5px">Router(config)# interface g0/0
Router(config-if)# ip address 192.168.1.1 255.255.255.0
Router(config-if)# no shutdown</pre>
      <ul>
        <li>${C('ip address')} – כתובת ומסיכה לממשק.</li>
        <li>${C('no shutdown')} – <b>מדליק</b> את הממשק (כברירת מחדל הוא כבוי!).</li>
      </ul>`,
      tip: 'הממשק אדום (down) עד שמקלידים no shutdown.',
      anim: (stage, ctx) => {
        const root = h('div', { class: 'cli-stack' });
        const top = h('div', { class: 'top', style: { height: '150px', position: 'relative' } });
        const bot = h('div', { class: 'bot' });
        root.append(top, bot);
        stage.innerHTML = '';
        stage.append(root);
        const sim = new Sim(top, ctx);
        sim.ctrl.remove();
        const rt = sim.dev('router', 'Router', null, 30, 50, { size: 64 });
        const pc = sim.dev('pc', 'לקוחות', null, 80, 50, { size: 44 });
        const link = sim.line(rt, pc, { color: '#ff5a7a' });
        sim.caption('הממשק g0/0 כבוי – הקו אדום.', 'bad');
        const term = makeTerminal({ theme: 'cisco', prompt: 'Router(config)#', title: 'Router CLI', onCommand: () => {}, placeholder: '(הדגמה אוטומטית)' });
        term.input.disabled = true;
        bot.append(term.el);
        const lines = [['Router(config)#', 'interface gigabitEthernet 0/0'], ['Router(config-if)#', 'ip address 192.168.1.1 255.255.255.0'], ['Router(config-if)#', 'no shutdown']];
        const run = async () => {
          term.clear();
          link.setAttribute('stroke', '#ff5a7a');
          rt.setIp('');
          sim.caption('הממשק g0/0 כבוי – הקו אדום.', 'bad');
          for (let i = 0; i < lines.length; i++) {
            term.setPrompt(lines[i][0]);
            await typeCmd(term, lines[i][1], ctx);
            if (!ctx.alive) return;
            if (i === 1) { rt.setIp('192.168.1.1'); sim.caption('לממשק יש כתובת – היא תהיה <b>שער ברירת המחדל</b> של הלקוחות.'); }
            if (i === 2) {
              term.print('%LINK-5-CHANGED: Interface GigabitEthernet0/0, changed state to up\n%LINEPROTO-5-UPDOWN: Line protocol on Interface GigabitEthernet0/0, changed state to up');
              link.setAttribute('stroke', '#3ddc97'); rt.glow('#3ddc97'); sfx('levelup');
              sim.caption('הממשק <b>up</b> והקו ירוק! עכשיו אפשר להגדיר DHCP.', 'good');
            }
          }
        };
        const b = h('button', { class: 'btn small', style: { position: 'absolute', top: '6px', left: '6px', zIndex: 9 }, onclick: run }, '↻ שוב');
        top.append(b);
        run();
      },
      questions: [
        { tier: 1, type: 'mc', q: 'איזו פקודה מדליקה ממשק?', options: ['no shutdown', 'shutdown', 'ip address', 'enable'], a: 0, why: 'no shutdown מפעיל את הממשק.', hint: 'ברירת המחדל: כבוי.' },
        { tier: 1, type: 'input', q: 'כתבו את הפקודה שמגדירה כתובת <code>192.168.1.1</code> עם מסיכה <code>255.255.255.0</code> לממשק (במצב interface)', answer: ['ip address 192.168.1.1 255.255.255.0'], placeholder: 'ip address ...', why: 'ip address 192.168.1.1 255.255.255.0' },
        { tier: 2, type: 'mc', q: 'מדוע כתובת ממשק הראוטר חשובה ללקוחות?', options: ['היא שער ברירת המחדל שלהם', 'היא שרת ה-DNS', 'היא כתובת ה-MAC', 'היא כתובת הרשת'], a: 0, why: 'הלקוחות פונים אליה כדי לצאת מהרשת.' },
      ],
    },
    {
      title: 'הוצאת כתובות מהמאגר: excluded-address',
      stageTitle: '🔒 כתובות מוחרגות',
      body: `<p>לפני שיוצרים את המאגר, <b>מחריגים</b> כתובות שהראוטר לא יחלק – כדי שלא ינתנו ללקוחות כתובות של הראוטר, שרתים ומדפסות:</p>
      <pre style="direction:ltr;text-align:left;background:#0003;padding:8px;border-radius:10px;font-size:13.5px">Router(config)# ip dhcp excluded-address 192.168.1.1 192.168.1.10</pre>
      <ul>
        <li>מקלידים במצב <b>global config</b>.</li>
        <li>טווח (מ-עד). אפשר גם כתובת בודדת: <code>ip dhcp excluded-address 192.168.1.50</code>.</li>
        <li>מומלץ להגדיר <b>לפני</b> יצירת המאגר.</li>
      </ul>`,
      tip: 'אם לא תחריגו את כתובת הראוטר – ייתכן שהוא "ישכיר" אותה ללקוח ותהיה התנגשות.',
      anim: (stage, ctx) => {
        const root = h('div', { class: 'cli-stack' });
        const top = h('div', { class: 'top' });
        const bot = h('div', { class: 'bot' });
        root.append(top, bot);
        stage.innerHTML = '';
        stage.append(root);
        const pool = h('div', { class: 'pool5', style: { marginTop: '10px' } });
        const cells = Array.from({ length: 20 }, (_, i) => h('i', {}, `.${i + 1}`));
        pool.append(...cells);
        top.append(h('div', { class: 'sim-label', style: { textAlign: 'center', marginBottom: '2px' } }, 'מאגר הרשת 192.168.1.0/24 (מוצגות הכתובות .1–.20)'), pool);
        const term = makeTerminal({ theme: 'cisco', prompt: 'Router(config)#', title: 'Router CLI', onCommand: () => {}, placeholder: '(הדגמה אוטומטית)' });
        term.input.disabled = true;
        bot.append(term.el);
        const run = async () => {
          term.clear(); cells.forEach((c) => c.className = '');
          await ctx.wait(500);
          await typeCmd(term, 'ip dhcp excluded-address 192.168.1.1 192.168.1.10', ctx, 26);
          for (let i = 0; i < 10; i++) { if (!ctx.alive) return; cells[i].classList.add('ex'); sfx('tick'); await ctx.wait(120); }
          term.print('Router(config)#');
        };
        top.append(h('button', { class: 'btn small', style: { display: 'block', margin: '8px auto' }, onclick: run }, '↻ שוב'));
        top.append(h('div', { class: 'plan-info', style: { width: '94%', margin: '4px auto', background: 'rgba(255,255,255,.08)', border: '1px solid var(--line)', borderRadius: '12px', padding: '6px 10px', fontSize: '13px', textAlign: 'center' } }, '⬜ אפורות = מוחרגות (ראוטר, שרתים, מדפסות). הירוקות פנויות להשכרה ללקוחות.'));
        run();
      },
      questions: [
        { tier: 1, type: 'mc', q: 'לאיזו מטרה משמשת <code>ip dhcp excluded-address</code>?', options: ['למנוע מ-DHCP לחלק כתובות מסוימות', 'להגדיר כתובת לממשק', 'להפעיל את הממשק', 'לקבוע את ה-DNS'], a: 0, why: 'מחריגה כתובות מהמאגר.' },
        { tier: 2, type: 'mc', q: 'באיזה מצב מקלידים את <code>ip dhcp excluded-address</code>?', options: ['Global config', 'Interface config', 'User EXEC', 'DHCP pool config'], a: 0, why: 'ב-Router(config)#.' },
        { tier: 3, type: 'input', q: 'כתבו פקודה שמחריגה את הכתובות <code>192.168.5.1</code> עד <code>192.168.5.20</code>', answer: ['ip dhcp excluded-address 192.168.5.1 192.168.5.20'], placeholder: 'ip dhcp ...', why: 'ip dhcp excluded-address 192.168.5.1 192.168.5.20' },
      ],
    },
    {
      title: 'יצירת מאגר ה-DHCP',
      stageTitle: '📜 מה ייתן הראוטר ללקוח?',
      body: `<p>עכשיו יוצרים את <b>המאגר (Pool)</b> ומגדירים מה לתת ללקוחות:</p>
      <pre style="direction:ltr;text-align:left;background:#0003;padding:8px;border-radius:10px;font-size:13px;line-height:1.5">Router(config)# ip dhcp pool LAN1
Router(dhcp-config)# network 192.168.1.0 255.255.255.0
Router(dhcp-config)# default-router 192.168.1.1
Router(dhcp-config)# dns-server 8.8.8.8
Router(dhcp-config)# lease 7
Router(dhcp-config)# exit</pre>
      <ul>
        <li>${C('ip dhcp pool NAME')} – יוצר מאגר בשם ונכנס למצבו.</li>
        <li>${C('network')} – הרשת והמסיכה של המאגר.</li>
        <li>${C('default-router')} – <b>שער ברירת המחדל</b> ללקוחות.</li>
        <li>${C('dns-server')} – שרת DNS.</li>
        <li>${C('lease')} – ימים (אפשר גם <code>lease 0 8</code> = 8 שעות).</li>
      </ul>`,
      tip: 'שימו לב: ה-default-router הוא כתובת ממשק הראוטר שהגדרנו קודם.',
      anim: (stage, ctx) => {
        const root = h('div', { class: 'cli-split' });
        stage.innerHTML = '';
        stage.append(root);
        const term = makeTerminal({ theme: 'cisco', prompt: 'Router(config)#', title: 'Router CLI', onCommand: () => {}, placeholder: '(הדגמה אוטומטית)' });
        term.input.disabled = true;
        const rows = [['Network', '192.168.1.0 / 24'], ['IP Address', '192.168.1.11 ← הראשונה אחרי ההחרגה'], ['Subnet Mask', '255.255.255.0'], ['Default Gateway', '192.168.1.1'], ['DNS Server', '8.8.8.8'], ['Lease', '7 days']];
        const card = h('div', { class: 'client-card' }, h('h4', {}, '📜 מה מקבל כל לקוח'), ...rows.map(([k, v]) => h('div', { class: 'row' }, h('span', {}, k), h('b', {}, v))));
        root.append(term.el, card);
        const R = card.querySelectorAll('.row');
        const steps = [
          ['Router(config)#', 'ip dhcp pool LAN1', null],
          ['Router(dhcp-config)#', 'network 192.168.1.0 255.255.255.0', [0, 1, 2]],
          ['Router(dhcp-config)#', 'default-router 192.168.1.1', [3]],
          ['Router(dhcp-config)#', 'dns-server 8.8.8.8', [4]],
          ['Router(dhcp-config)#', 'lease 7', [5]],
          ['Router(dhcp-config)#', 'exit', null],
        ];
        const run = async () => {
          term.clear(); R.forEach((r) => r.classList.remove('on'));
          for (const [p, c, show] of steps) {
            if (!ctx.alive) return;
            term.setPrompt(p);
            await typeCmd(term, c, ctx, 24);
            if (show) { show.forEach((i) => R[i].classList.add('on')); sfx('collect'); }
          }
        };
        const b = h('button', { class: 'btn small', style: { position: 'absolute', bottom: '14px', left: '50%', transform: 'translateX(-50%)', zIndex: 8 }, onclick: run }, '↻ שוב');
        stage.firstChild.append(b);
        run();
      },
      questions: [
        { tier: 1, type: 'mc', q: 'איזו פקודה קובעת את שער ברירת המחדל ללקוחות ב-DHCP?', options: ['default-router', 'network', 'dns-server', 'lease'], a: 0, why: 'default-router.', hint: 'השער הוא ה-router.' },
        { tier: 1, type: 'mc', q: 'איזו פקודה קובעת את שרת ה-DNS?', options: ['dns-server', 'default-router', 'network', 'ip address'], a: 0, why: 'dns-server.' },
        { tier: 2, type: 'mc', q: 'מה קובעת הפקודה <code>network 192.168.1.0 255.255.255.0</code> במאגר?', options: ['את הרשת (וטווח הכתובות) שמהן יחולקו כתובות', 'את כתובת הראוטר', 'את שם המאגר', 'את זמן ההשכרה'], a: 0, why: 'הרשת והמסיכה של המאגר.' },
        { tier: 2, type: 'mc', q: 'באיזו פקודה יוצרים מאגר בשם LAN1?', options: ['ip dhcp pool LAN1', 'dhcp pool LAN1', 'pool LAN1', 'ip pool LAN1'], a: 0, why: 'ip dhcp pool NAME.' },
        { tier: 3, type: 'input', q: 'כתבו פקודה שקובעת שער ברירת מחדל <code>10.0.0.1</code> בתוך המאגר', answer: ['default-router 10.0.0.1'], placeholder: 'default-router ...', why: 'default-router 10.0.0.1' },
      ],
    },
    {
      title: 'בדיקה ופתרון תקלות',
      stageTitle: '🧪 מעבדה: ראוטר + לקוח',
      body: `<p>אחרי ההגדרה בודקים:</p>
      <ul>
        <li>${C('show ip dhcp binding')} – אילו כתובות הושכרו ולמי.</li>
        <li>${C('show ip dhcp pool')} – מצב המאגר (כמה כתובות הושכרו).</li>
        <li>${C('show ip dhcp server statistics')} – ספירת הודעות Discover/Offer/Request/Ack.</li>
        <li>${C('show running-config')} – כל התצורה. (<code>do show …</code> מתוך מצב תצורה.)</li>
        <li>${C('show ip interface brief')} – מצב הממשקים.</li>
        <li>בלקוח: ${C('ipconfig /renew')}.</li>
      </ul>
      <p><b>תקלות נפוצות:</b> ממשק במצב shutdown · מאגר לא תואם לרשת הממשק · <code>no service dhcp</code> · מאגר מלא · שרת ברשת אחרת בלי <code>ip helper-address</code>.</p>
      <p>במעבדה: לחצו "הוסף מחשב לקוח" וראו את <code>show ip dhcp binding</code>; הפעילו תקלה וראו מה קורה!</p>`,
      tip: 'התחילו ב-show ip interface brief כדי לוודא שהממשק up/up.',
      anim: (stage, ctx) => {
        const root = h('div', { class: 'cli-stack' });
        stage.innerHTML = '';
        stage.append(root);
        const sim = preconfigured();
        const pcp = h('div', { class: 'pcpanel' }, 'מחשבי לקוח: עדיין אין. לחצו "הוסף מחשב לקוח".');
        const term = ciscoTerminal(sim, { title: 'Router CLI (מוגדר מראש)', hints: ['show ip dhcp binding', 'show ip dhcp pool', 'show ip dhcp server statistics', 'show ip interface brief', 'show running-config'] });
        term.setPrompt(sim.prompt);
        let n = 0;
        const addClient = () => {
          n++;
          const r = sim.clientRequest();
          pcp.innerHTML = '';
          if (r.ok) pcp.append(h('div', {}, `PC${n} ← DORA הצליח ✔  IP ${r.ip}  GW ${r.gw}  DNS ${r.dns.join(',')}`)), sfx('collect');
          else pcp.append(h('div', { style: { color: '#ff8fa3' } }, `PC${n}: לא קיבל כתובת (APIPA 169.254.x.x) ✘ – ${r.why}`)), sfx('wrong');
        };
        const faults = {
          'ממשק shutdown': () => { sim.ifaces['GigabitEthernet0/0'].up = false; },
          'no service dhcp': () => { sim.serviceDhcp = false; },
          'מאגר לרשת אחרת': () => { sim.pools.LAN1.network = '192.168.2.0'; },
          'מאגר מלא': () => { sim.excluded.push(['192.168.1.11', '192.168.1.254']); },
        };
        const fix = () => { sim.ifaces['GigabitEthernet0/0'].up = true; sim.serviceDhcp = true; sim.pools.LAN1.network = '192.168.1.0'; sim.excluded = [['192.168.1.1', '192.168.1.10']]; };
        const fbtns = h('div', { class: 'fault-btns' },
          h('button', { class: 'btn small gold', onclick: addClient }, '➕ הוסף מחשב לקוח'),
          ...Object.entries(faults).map(([k, f]) => h('button', { class: 'btn small danger', onclick: () => { f(); term.print(`[הופעלה תקלה: ${k}]`, 'cmd'); } }, '💥 ' + k)),
          h('button', { class: 'btn small', onclick: () => { fix(); term.print('[התצורה תוקנה]', 'cmd'); } }, '🔧 תקן הכול'));
        root.append(h('div', { class: 'top' }, fbtns, h('div', { style: { height: '6px' } }), pcp), h('div', { class: 'bot' }, term.el));
        term.print('(מצב Privileged EXEC – הראוטר כבר מוגדר עם DHCP. נסו את פקודות ה-show!)\n');
      },
      questions: [
        { tier: 1, type: 'mc', q: 'איזו פקודה מציגה אילו כתובות הוקצו ללקוחות?', options: ['show ip dhcp binding', 'show ip route', 'show version', 'show clock'], a: 0, why: 'show ip dhcp binding.' },
        { tier: 1, type: 'mc', q: 'לקוח לא מקבל כתובת וממשק הראוטר מוצג <code>administratively down</code>. מה לעשות?', options: ['להקליד no shutdown בממשק', 'להחליף את הלקוח', 'למחוק את המאגר', 'לשנות את ה-DNS'], a: 0, why: 'צריך להדליק את הממשק.' },
        { tier: 2, type: 'mc', q: 'איזו פקודה מציגה סטטיסטיקות של הודעות DHCP?', options: ['show ip dhcp server statistics', 'show ip interface brief', 'show arp', 'show flash'], a: 0, why: 'statistics.' },
        { tier: 2, type: 'mc', q: 'השרת ברשת אחרת מהלקוחות. מה מגדירים על הראוטר?', options: ['ip helper-address על הממשק של הלקוחות', 'no shutdown', 'lease infinite', 'network 0.0.0.0'], a: 0, why: 'Relay.' },
        { tier: 3, type: 'input', q: 'כתבו פקודה שמציגה את מצב המאגרים (כמה כתובות הושכרו)', answer: ['show ip dhcp pool'], placeholder: 'show ...', why: 'show ip dhcp pool' },
      ],
    },
  ],

  quiz: [
    { tier: 1, type: 'mc', q: 'איזו פקודה נכנסת למצב Privileged EXEC?', options: ['enable', 'conf t', 'exit', 'show'], a: 0, why: 'enable.' },
    { tier: 1, type: 'mc', q: 'איזו פקודה מדליקה ממשק?', options: ['no shutdown', 'shutdown', 'enable', 'ip dhcp pool'], a: 0, why: 'no shutdown.' },
    { tier: 1, type: 'mc', q: 'איזו פקודה יוצרת מאגר DHCP?', options: ['ip dhcp pool NAME', 'dhcp enable', 'network NAME', 'pool NAME'], a: 0, why: 'ip dhcp pool.' },
    { tier: 1, type: 'mc', q: 'איזו פקודה מציגה כתובות שהושכרו?', options: ['show ip dhcp binding', 'show run', 'show ip route', 'show arp'], a: 0, why: 'binding.' },
    { tier: 1, type: 'mc', q: 'ה-prompt <code>Router(config)#</code> הוא מצב…', options: ['תצורה גלובלית', 'EXEC משתמש', 'ממשק', 'מאגר DHCP'], a: 0, why: 'Global config.' },
    { tier: 2, type: 'mc', q: 'איזו פקודה מחריגה כתובות מהמאגר?', options: ['ip dhcp excluded-address', 'ip dhcp exclude', 'no ip dhcp', 'network exclude'], a: 0, why: 'excluded-address.' },
    { tier: 2, type: 'mc', q: 'אילו פקודות נמצאות בתוך מצב (dhcp-config)?', options: ['network, default-router, dns-server, lease', 'ip address, no shutdown', 'enable, disable', 'hostname, banner'], a: 0, why: 'פקודות המאגר.' },
    { tier: 2, type: 'mc', q: 'מהי סיבה נפוצה לכך שלקוחות לא מקבלים כתובת?', options: ['הממשק כבוי (shutdown) או המאגר לא תואם לרשת', 'שם המאגר ארוך', 'המסיכה 255.255.255.0', 'יש יותר מדי DNS'], a: 0, why: 'בדקו ממשק ורשת המאגר.' },
    { tier: 2, type: 'mc', q: 'איזו פקודה מראה גם את מצב הממשקים בקצרה?', options: ['show ip interface brief', 'show version', 'show clock', 'show flash'], a: 0, why: 'ip interface brief.' },
    { tier: 2, type: 'mc', q: 'מהי פקודה לביטול שירות DHCP בראוטר?', options: ['no service dhcp', 'shutdown', 'no ip dhcp pool', 'disable dhcp'], a: 0, why: 'no service dhcp.' },
    { tier: 3, type: 'input', q: 'כתבו פקודה שמגדירה זמן השכרה של 3 ימים', answer: ['lease 3'], placeholder: 'lease ...', why: 'lease 3' },
    { tier: 3, type: 'input', q: 'כתבו פקודה שמגדירה שרת DNS ‏1.1.1.1 בתוך המאגר', answer: ['dns-server 1.1.1.1'], placeholder: 'dns-server ...', why: 'dns-server 1.1.1.1' },
    { tier: 3, type: 'mc', q: 'איזה סדר מומלץ?', options: ['excluded-address ← ip dhcp pool ← network/default-router/dns/lease', 'network ← ip dhcp pool ← excluded', 'lease ← excluded ← network', 'pool ← no shutdown ← enable'], a: 0, why: 'מחריגים קודם, אחר כך יוצרים מאגר ומגדירים אותו.' },
    { tier: 3, type: 'mc', q: 'איזה ממשק צריך helper-address כשהשרת רחוק?', options: ['הממשק שפונה ללקוחות', 'הממשק שפונה לשרת', 'שניהם', 'אף אחד'], a: 0, why: 'שם מתקבלות בקשות ה-Discover.' },
  ],

  game: {
    name: 'ספר הפקודות',
    intro: `<p>המאסטר הגדול מאתגר אתכם: הגדירו שרת DHCP על ראוטר סיסקו! ברמה הנמוכה <b>מסדרים</b> את הפקודות, בבינונית <b>משלימים</b> את החסר, ובגבוהה <b>מקלידים</b> הכול בטרמינל סיסקו מדומה – מ-enable ועד המאגר.</p>
    <p class="mini">כל משימה נבדקת על ידי הסימולטור, כולל בקשת DHCP של לקוח אמיתי מדומה!</p>`,
    run: cmdGame,
  },
};
