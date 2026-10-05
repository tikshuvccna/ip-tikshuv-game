import { h } from '../../util.js';
import { Sim, icon, injectCss } from '../anim.js';
import { sfx } from '../../audio.js';
import { ipv4Dialog } from '../winui.js';
import { makeTerminal, WinHost } from '../terminals.js';
import { fixGame } from '../games/g6.js';

injectCss('z6', `
.wz{position:absolute;inset:0;padding:12px 14px 70px;display:flex;flex-direction:column;gap:8px;overflow:auto;justify-content:center;align-items:center}
.wz .win{width:min(480px,100%)}
.wz-info{background:rgba(255,255,255,.08);border:1px solid var(--line);border-radius:12px;padding:8px 12px;font-size:13.5px;line-height:1.6;width:min(480px,100%)}
.wz-info code{font-size:.9em}
.chk{display:flex;gap:6px;align-items:center;font-size:13px;margin:2px 0;color:var(--muted)}
.chk.ok{color:#7dffb0}
.stack2{position:absolute;inset:0;display:flex;flex-direction:column;gap:6px;padding:8px}
.stack2 .t{flex:1;min-height:0}
.ladder{display:flex;gap:6px;flex-wrap:wrap;justify-content:center}
.ladder span{padding:3px 10px;border-radius:10px;background:rgba(255,255,255,.1);font-size:12px;font-weight:700}
.ladder span.ok{background:rgba(61,220,151,.35)}.ladder span.bad{background:rgba(255,90,122,.4)}
.nav-screen{min-height:210px}
`);

const C = (t) => `<code>${t}</code>`;

export default {
  intro: `ברוכים הבאים לסדנת הקסמים! ⚙️ כאן ממציאים, מתקנים ומגדירים. אחרי שהבנו מהי כתובת IP, הגיע הזמן ללמוד <b>איך מגדירים אותה בפועל</b> במחשב: ידנית (סטטית) או אוטומטית (DHCP), ואיך בודקים שהכול עובד.`,

  steps: [
    {
      title: 'איפה מגדירים כתובת IP בווינדוס?',
      body: `<p>הגדרות כרטיס הרשת נמצאות בלוח הבקרה (Control Panel). המסלול:</p>
      <ol>
        <li><b>Control Panel</b> ← <b>Network and Sharing Center</b></li>
        <li>לחיצה על <b>Change adapter settings</b></li>
        <li>קליק ימני על כרטיס הרשת (<b>Ethernet</b>) ← <b>Properties</b></li>
        <li>בחירה ב-<b>Internet Protocol Version 4 (TCP/IPv4)</b> ← <b>Properties</b></li>
      </ol>
      <p>קיצור דרך: <kbd>Win</kbd>+<kbd>R</kbd> והקלדת ${C('ncpa.cpl')} פותחים ישר את חיבורי הרשת.</p>`,
      tip: 'הקלידו ncpa.cpl בחלון ההפעלה (Win+R) – זה הכי מהיר.',
      stageTitle: '🖥️ סיור בחלונות',
      anim: (stage, ctx) => {
        const root = h('div', { class: 'wz' });
        stage.innerHTML = '';
        stage.append(root);
        const screens = [
          { cap: '1) בלוח הבקרה נכנסים אל <b>Network and Sharing Center</b>', draw: () => h('div', { class: 'win' }, h('div', { class: 'win-title' }, h('b', {}, 'Control Panel'), h('i', {}, '✕')), h('div', { class: 'win-body nav-screen' }, h('div', { class: 'cp-grid' }, ...['System', 'User Accounts', 'Network and Sharing Center', 'Windows Firewall', 'Devices and Printers', 'Sound'].map((t) => h('div', { class: 'cp-item' + (t.startsWith('Network') ? ' hl' : '') }, t.startsWith('Network') ? '🌐' : '▫️', h('br'), t))))) },
          { cap: '2) לוחצים על <b>Change adapter settings</b>', draw: () => h('div', { class: 'win' }, h('div', { class: 'win-title' }, h('b', {}, 'Network and Sharing Center'), h('i', {}, '✕')), h('div', { class: 'win-body nav-screen' }, h('div', { class: 'cp-link' }, 'Change adapter settings'), h('div', { class: 'cp-link hl' }, 'Change adapter settings'), h('div', { class: 'cp-link' }, 'Change advanced sharing settings'), h('p', {}, 'View your active networks: Network (Private)'))) },
          { cap: '3) קליק ימני על <b>Ethernet</b> ← <b>Properties</b>', draw: () => h('div', { class: 'win' }, h('div', { class: 'win-title' }, h('b', {}, 'Network Connections'), h('i', {}, '✕')), h('div', { class: 'win-body nav-screen', style: { display: 'flex', gap: '10px' } }, h('div', { class: 'cp-item', style: { width: '90px' } }, '🔌', h('br'), 'Ethernet'), h('div', { class: 'ctxmenu' }, h('div', {}, 'Disable'), h('div', {}, 'Status'), h('div', {}, 'Diagnose'), h('div', { class: 'hl' }, 'Properties')))) },
          { cap: '4) בוחרים <b>Internet Protocol Version 4 (TCP/IPv4)</b> ולוחצים <b>Properties</b>', draw: () => h('div', { class: 'win' }, h('div', { class: 'win-title' }, h('b', {}, 'Ethernet Properties'), h('i', {}, '✕')), h('div', { class: 'win-body nav-screen' }, h('p', {}, 'This connection uses the following items:'), h('div', { class: 'win-list' }, h('div', {}, '☑ Client for Microsoft Networks'), h('div', {}, '☑ File and Printer Sharing'), h('div', { class: 'sel hl' }, '☑ Internet Protocol Version 4 (TCP/IPv4)'), h('div', {}, '☑ Internet Protocol Version 6 (TCP/IPv6)')), h('div', { style: { textAlign: 'right' } }, h('button', { class: 'win-btn primary', style: { outline: '2px solid #ff9a00' } }, 'Properties')))) },
        ];
        const holder = h('div', { style: { width: 'min(480px,100%)' } });
        const cap = h('div', { class: 'wz-info' });
        let i = 0;
        const show = () => { holder.innerHTML = ''; holder.append(screens[i].draw()); cap.innerHTML = screens[i].cap; sfx('click'); };
        root.append(holder, cap);
        const ctrl = h('div', { class: 'sim-controls' },
          h('button', { class: 'btn small ghost', onclick: () => { i = Math.max(0, i - 1); show(); } }, '→ הקודם'),
          h('button', { class: 'btn small gold', onclick: () => { i = Math.min(screens.length - 1, i + 1); show(); } }, 'הבא ←'));
        stage.firstChild.append(ctrl);
        show();
      },
      questions: [
        { tier: 1, type: 'mc', q: 'מהו קיצור הדרך שפותח את חיבורי הרשת בווינדוס?', options: ['ncpa.cpl', 'cmd.exe', 'notepad', 'regedit'], a: 0, why: 'Win+R ← ncpa.cpl.' },
        { tier: 1, type: 'mc', q: 'באיזה פרוטוקול בוחרים כדי להגדיר כתובת IPv4?', options: ['Internet Protocol Version 4 (TCP/IPv4)', 'Client for Microsoft Networks', 'File and Printer Sharing', 'QoS Packet Scheduler'], a: 0, why: 'TCP/IPv4 ← Properties.' },
        { tier: 2, type: 'order', q: 'סדרו את שלבי הגעה להגדרות IPv4', items: ['Control Panel', 'Network and Sharing Center', 'Change adapter settings', 'Properties של כרטיס הרשת', 'TCP/IPv4 ← Properties'], why: 'כך מגיעים לחלון ההגדרות.' },
      ],
    },
    {
      title: 'הגדרת כתובת סטטית',
      body: `<p>בחרו <b>Use the following IP address</b> והזינו:</p>
      <ul>
        <li><b>IP address</b> – כתובת ייחודית ברשת, <b>באותה רשת</b> של הראוטר, לא כתובת הרשת/Broadcast ולא כתובת של מכשיר אחר.</li>
        <li><b>Subnet mask</b> – כמו של הרשת (למשל ${C('255.255.255.0')}).</li>
        <li><b>Default gateway</b> – כתובת הראוטר ברשת (למשל ${C('192.168.10.1')}).</li>
        <li><b>DNS server</b> – למשל ${C('8.8.8.8')} או כתובת הראוטר.</li>
      </ul>
      <p>לחצו "מלא בשבילי" וראו דוגמה לרשת <code>192.168.10.0/24</code>.</p>`,
      tip: 'בלי שער ברירת מחדל המחשב לא יצא מהרשת; בלי DNS אי אפשר לגלוש לפי שמות.',
      stageTitle: '🖥️ חלון ההגדרות',
      anim: (stage, ctx) => {
        const root = h('div', { class: 'wz' });
        stage.innerHTML = '';
        stage.append(root);
        const checks = [
          ['ip', 'כתובת IP באותה רשת של הראוטר'],
          ['mask', 'מסיכה תואמת לרשת'],
          ['gw', 'שער = כתובת הראוטר (192.168.10.1)'],
          ['dns', 'שרת DNS מוגדר'],
        ];
        const chkEls = checks.map(([k, t]) => h('div', { class: 'chk' }, '⬜ ', t));
        const info = h('div', { class: 'wz-info' }, h('b', {}, 'הרשת: '), h('code', {}, '192.168.10.0/24'), ' · ראוטר: ', h('code', {}, '192.168.10.1'), ' · מכשירים קיימים: ', h('code', {}, '.20'), ' ', h('code', {}, '.21'), h('div', {}, ...chkEls));
        const dlg = ipv4Dialog({ mode: 'dhcp', values: {} });
        const typeInto = async (el, text) => { el.classList.add('hl'); for (const ch of text) { if (!ctx.alive) return; el.value += ch; await ctx.wait(55); } el.classList.remove('hl'); };
        let running = false;
        const run = async () => {
          if (running) return; running = true;
          dlg.setMode('dhcp'); ['ip', 'mask', 'gw', 'dns'].forEach((k) => (dlg.ins[k].value = ''));
          chkEls.forEach((c, i) => { c.className = 'chk'; c.textContent = '⬜ ' + checks[i][1]; });
          await ctx.wait(700);
          dlg.setMode('static'); sfx('click');
          await ctx.wait(500);
          const set = async (k, v, idx) => { await typeInto(dlg.ins[k], v); if (idx !== undefined) { chkEls[idx].className = 'chk ok'; chkEls[idx].textContent = '✅ ' + checks[idx][1]; sfx('collect'); } await ctx.wait(300); };
          await set('ip', '192.168.10.50', 0);
          dlg.ins.mask.classList.add('hl'); await ctx.wait(400); dlg.ins.mask.value = '255.255.255.0'; dlg.ins.mask.classList.remove('hl'); chkEls[1].className = 'chk ok'; chkEls[1].textContent = '✅ ' + checks[1][1]; sfx('collect'); await ctx.wait(500);
          await set('gw', '192.168.10.1', 2);
          await set('dns', '8.8.8.8', 3);
          running = false;
        };
        root.append(dlg.el, info);
        const ctrl = h('div', { class: 'sim-controls' }, h('button', { class: 'btn small gold', onclick: run }, '✍️ מלא בשבילי'));
        stage.firstChild.append(ctrl);
        run();
      },
      questions: [
        { tier: 1, type: 'mc', q: 'אילו הגדרות נדרשות להגדרה סטטית?', options: ['IP, מסיכה, שער ברירת מחדל ו-DNS', 'רק כתובת IP', 'שם משתמש וסיסמה', 'כתובת MAC ו-IP'], a: 0, why: 'ארבעת הערכים החיוניים.' },
        { tier: 1, type: 'mc', q: 'כתובת שער ברירת המחדל במחשב היא…', options: ['כתובת הראוטר ברשת', 'כתובת האתר', 'כתובת המחשב עצמו', 'כתובת ה-Broadcast'], a: 0, why: 'הראוטר הוא השער החוצה.' },
        { tier: 2, type: 'mc', q: 'מחשב מוגדר 192.168.10.50/24 עם שער 192.168.20.1. מה הבעיה?', options: ['השער אינו באותה רשת של המחשב', 'המסיכה גדולה מדי', 'ה-DNS שגוי', 'אין בעיה'], a: 0, why: 'שער חייב להיות באותה רשת.' },
        { tier: 2, type: 'mc', q: 'איזו כתובת אסור לתת למחשב ברשת 192.168.10.0/24?', options: ['192.168.10.255', '192.168.10.2', '192.168.10.100', '192.168.10.200'], a: 0, why: 'זו כתובת ה-Broadcast.' },
        { tier: 3, type: 'mc', q: 'ברשת 192.168.10.64/26 איזו כתובת <b>אינה</b> תקינה למחשב?', options: ['192.168.10.127', '192.168.10.70', '192.168.10.100', '192.168.10.126'], a: 0, why: '‏/26 מ-64 עד 127: ‏.64 רשת, ‏.127 Broadcast.' },
      ],
    },
    {
      title: 'הגדרת קבלת כתובת אוטומטית (DHCP)',
      body: `<p>כדי שהמחשב יקבל הגדרות משרת DHCP, בחלון TCP/IPv4 בוחרים:</p>
      <ul>
        <li>◉ <b>Obtain an IP address automatically</b></li>
        <li>◉ <b>Obtain DNS server address automatically</b></li>
      </ul>
      <p>זה גם <b>ברירת המחדל</b> ברוב המחשבים. אחרי שמאשרים (OK) המחשב מריץ את תהליך DORA, מקבל כתובת, מסיכה, שער ו-DNS, ושדות ההזנה נשארים אפורים.</p>
      <p>אפשר לחדש ידנית: ${C('ipconfig /renew')}.</p>`,
      tip: 'לבדיקה מה התקבל: ipconfig /all',
      stageTitle: '🖥️ DHCP או סטטי?',
      anim: (stage, ctx) => {
        const root = h('div', { class: 'wz' });
        stage.innerHTML = '';
        stage.append(root);
        const info = h('div', { class: 'wz-info' }, 'בחרו באפשרות הרדיו, ואז לחצו OK.');
        const dlg = ipv4Dialog({ mode: 'static', values: { ip: '192.168.10.50', mask: '255.255.255.0', gw: '192.168.10.1', dns: '8.8.8.8' }, onOk: async (v) => {
          if (v.mode === 'dhcp') {
            info.innerHTML = '📣 Discover… 🎁 Offer… 📨 Request… ✅ Ack! <br>המחשב קיבל: <code>192.168.10.101 / 255.255.255.0</code>, שער <code>192.168.10.1</code>, DNS <code>192.168.10.1</code>';
            info.style.borderColor = '#3ddc97'; sfx('levelup');
          } else { info.innerHTML = 'הגדרה סטטית נשמרה – המחשב יישאר עם <code>192.168.10.50</code>.'; info.style.borderColor = ''; sfx('collect'); }
        } });
        root.append(dlg.el, info);
      },
      questions: [
        { tier: 1, type: 'mc', q: 'איזו אפשרות מגדירה קבלת כתובת משרת DHCP?', options: ['Obtain an IP address automatically', 'Use the following IP address', 'Use the following DNS server addresses', 'Disable'], a: 0, why: 'Obtain automatically = DHCP.' },
        { tier: 2, type: 'mc', q: 'כשמגדירים DHCP במחשב, מה קורה לשדות ה-IP, המסיכה והשער?', options: ['הם נעולים (אפורים) והערכים מתקבלים מהשרת', 'הם חייבים להיות מלאים', 'הם נמחקים מהכרטיס', 'הם הופכים ל-0.0.0.0 לנצח'], a: 0, why: 'הערכים באים מהשרת.' },
        { tier: 2, type: 'mc', q: 'באיזו פקודה מבקשים כתובת חדשה מ-DHCP?', options: ['ipconfig /renew', 'ping /renew', 'netsh stop', 'ipconfig /new'], a: 0, why: 'ipconfig /renew.' },
      ],
    },
    {
      title: 'בדיקה: ipconfig ו-ping',
      stageTitle: '💻 חלון פקודה (נסו בעצמכם)',
      body: `<p>אחרי ההגדרה בודקים שהכול עובד:</p>
      <ul>
        <li>${C('ipconfig')} / ${C('ipconfig /all')} – מציג את ההגדרות.</li>
        <li>${C('ping')} – שולח הודעות בדיקה (ICMP) ליעד.</li>
      </ul>
      <p><b>סולם הבדיקות:</b></p>
      <ol>
        <li><code>ping 127.0.0.1</code> – תקינות TCP/IP במחשב.</li>
        <li><code>ping</code> לכתובת שלי – כרטיס הרשת.</li>
        <li><code>ping</code> לשער – הרשת המקומית.</li>
        <li><code>ping 8.8.8.8</code> – יציאה לאינטרנט.</li>
        <li><code>ping google.com</code> – תרגום שמות (DNS).</li>
      </ol>
      <p>נסו: לחצו "שבור את השער" ואז בצעו ping לשער ול-8.8.8.8.</p>`,
      tip: 'הצלחה בשלב אחד וכישלון בבא אחריו – מצביעים על מקום התקלה.',
      anim: (stage, ctx) => {
        const root = h('div', { class: 'stack2' });
        stage.innerHTML = '';
        stage.append(root);
        const host = new WinHost({ mode: 'static', ip: '192.168.10.50', mask: '255.255.255.0', gw: '192.168.10.1', dns: '8.8.8.8',
          env: { gateway: '192.168.10.1', devices: ['192.168.10.1', '192.168.10.20', '192.168.10.21'], pool: ['192.168.10.101'], poolMask: '255.255.255.0', poolGw: '192.168.10.1', poolDns: '8.8.8.8', server: '192.168.10.1' } });
        const ladder = h('div', { class: 'ladder' }, ...['127.0.0.1', 'IP שלי', 'שער', '8.8.8.8', 'google.com'].map((t) => h('span', {}, t)));
        const term = makeTerminal({ theme: 'win', prompt: 'C:\\Users\\Student>', title: 'Command Prompt',
          hints: ['ipconfig', 'ipconfig /all', 'ping 127.0.0.1', 'ping 192.168.10.50', 'ping 192.168.10.1', 'ping 192.168.10.20', 'ping 8.8.8.8', 'ping google.com'],
          onCommand: async (cmd, out, t) => {
            const r = await host.run(cmd, out, ctx.wait);
            if (r === 'clear') t.clear();
            const lp = host.lastPing;
            if (lp && /^ping/i.test(cmd.trim())) {
              const idx = lp.target === '127.0.0.1' ? 0 : lp.target === host.ip ? 1 : lp.target === host.env.gateway || lp.target === host.gw ? 2 : lp.target === '8.8.8.8' ? 3 : lp.target.startsWith('142.') ? 4 : -1;
              if (idx >= 0) ladder.children[idx].className = lp.ok ? 'ok' : 'bad';
              host.lastPing = null;
            }
          } });
        term.print('Microsoft Windows [Version 10.0.19045]\n(c) Microsoft Corporation. All rights reserved.\n');
        const ctrl = h('div', { style: { display: 'flex', gap: '6px', justifyContent: 'center', flexWrap: 'wrap' } },
          h('button', { class: 'btn small danger', onclick: (e) => { const broke = host.gw === '192.168.10.1'; host.gw = broke ? '192.168.20.1' : '192.168.10.1'; e.target.textContent = broke ? '🔧 תקן את השער' : '💥 שבור את השער'; term.print(broke ? '[הוגדר שער שגוי 192.168.20.1]' : '[השער תוקן ל-192.168.10.1]', 'cmd'); } }, '💥 שבור את השער'),
          h('button', { class: 'btn small ghost', onclick: () => [...ladder.children].forEach((c) => (c.className = '')) }, 'אפס סולם'));
        root.append(ladder, h('div', { class: 't' }, term.el), ctrl);
      },
      questions: [
        { tier: 1, type: 'mc', q: 'איזו פקודה בודקת תקשורת מול כתובת מסוימת?', options: ['ping', 'ipconfig', 'cls', 'hostname'], a: 0, why: 'ping שולח ICMP Echo.' },
        { tier: 1, type: 'mc', q: 'ping ל-<code>127.0.0.1</code> בודק…', options: ['את תקינות TCP/IP במחשב עצמו', 'את האינטרנט', 'את הראוטר', 'את שרת ה-DNS'], a: 0, why: 'Loopback.' },
        { tier: 2, type: 'mc', q: 'ping לשער מצליח אבל ל-8.8.8.8 נכשל. איפה כנראה הבעיה?', options: ['מעבר לשער (ראוטר/ספק/אינטרנט)', 'כרטיס הרשת במחשב', 'המסיכה של הרשת הפנימית', 'כבל המקלדת'], a: 0, why: 'הרשת המקומית תקינה, הבעיה אחרי הראוטר.' },
        { tier: 3, type: 'mc', q: 'ping ל-8.8.8.8 מצליח אבל ל-google.com נכשל. מה הבעיה?', options: ['DNS', 'המסיכה', 'השער', 'כרטיס רשת'], a: 0, why: 'אין תרגום שמות.' },
      ],
    },
    {
      title: 'הגדרה ב-Packet Tracer',
      body: `<p>בסימולטור <b>Cisco Packet Tracer</b> מגדירים כך:</p>
      <ol>
        <li>לוחצים על ה-PC ← לשונית <b>Desktop</b></li>
        <li>לוחצים על <b>IP Configuration</b></li>
        <li>בוחרים <b>DHCP</b> (קבלה אוטומטית) או <b>Static</b> ומזינים IPv4 Address, Subnet Mask, Default Gateway, DNS Server.</li>
        <li>ב-<b>Command Prompt</b> אפשר להשתמש ב-<code>ipconfig</code> וב-<code>ping</code>.</li>
      </ol>
      <p>נסו בחלון: עברו בין DHCP לסטטי.</p>`,
      tip: 'אם בחרתם DHCP והשרת לא עובד – תקבלו 169.254.x.x',
      stageTitle: '🧪 Packet Tracer',
      anim: (stage, ctx) => {
        const root = h('div', { class: 'wz' });
        stage.innerHTML = '';
        stage.append(root);
        const info = h('div', { class: 'wz-info' }, 'PC0 ← Desktop ← IP Configuration');
        const dlg = ipv4Dialog({ variant: 'pt', mode: 'dhcp', values: { ip: '192.168.1.10', mask: '255.255.255.0', gw: '192.168.1.1', dns: '8.8.8.8' }, onOk: (v) => { info.innerHTML = v.mode === 'dhcp' ? '📣 DHCPrequest successful – PC0 קיבל כתובת מהראוטר.' : `הוגדרה כתובת סטטית ${v.ip || '—'}`; sfx('collect'); } });
        root.append(dlg.el, info);
      },
      questions: [
        { tier: 1, type: 'mc', q: 'ב-Packet Tracer, איפה מגדירים כתובת IP למחשב?', options: ['Desktop ← IP Configuration', 'Config ← Settings בלבד', 'CLI בלבד', 'Physical'], a: 0, why: 'Desktop → IP Configuration.' },
        { tier: 2, type: 'mc', q: 'מה בוחרים ב-IP Configuration כדי לקבל כתובת אוטומטית?', options: ['DHCP', 'Static', 'APIPA', 'NAT'], a: 0, why: 'DHCP.' },
      ],
    },
  ],

  quiz: [
    { tier: 1, type: 'mc', q: 'אילו ארבע הגדרות חיוניות לכתובת סטטית?', options: ['IP, מסיכה, שער, DNS', 'IP, MAC, שם, סיסמה', 'IP, פורט, פרוטוקול, מתג', 'שם, סיסמה, שער, פורט'], a: 0, why: 'IP, Mask, Gateway, DNS.' },
    { tier: 1, type: 'mc', q: 'מה פירוש Obtain an IP address automatically?', options: ['קבלה אוטומטית מ-DHCP', 'הגדרה סטטית', 'כיבוי הרשת', 'שימוש ב-APIPA בלבד'], a: 0, why: 'DHCP.' },
    { tier: 1, type: 'mc', q: 'איזו פקודה מציגה את כתובת ה-IP של המחשב?', options: ['ipconfig', 'ping', 'cls', 'echo'], a: 0, why: 'ipconfig.' },
    { tier: 1, type: 'tf', q: 'כתובת ה-Default Gateway חייבת להיות באותה רשת של המחשב.', a: true, why: 'אחרת המחשב לא יגיע אליה.' },
    { tier: 1, type: 'mc', q: 'לבדיקת תקשורת משתמשים בפקודה…', options: ['ping', 'ipconfig /all', 'ncpa.cpl', 'hostname'], a: 0, why: 'ping.' },
    { tier: 2, type: 'mc', q: 'ברשת 192.168.1.0/24 איזו כתובת תקינה למחשב (סטטי)?', options: ['192.168.1.55', '192.168.1.0', '192.168.1.255', '192.168.2.55'], a: 0, why: 'האחרות: רשת, Broadcast, ורשת אחרת.' },
    { tier: 2, type: 'mc', q: 'ping ל-127.0.0.1 נכשל. מה זה אומר?', options: ['בעיה בתשתית TCP/IP של המחשב עצמו', 'הראוטר כבוי', 'האינטרנט איטי', 'DNS שגוי'], a: 0, why: 'Loopback נכשל = בעיה מקומית.' },
    { tier: 2, type: 'mc', q: 'איזו פקודה משחררת כתובת DHCP?', options: ['ipconfig /release', 'ipconfig /all', 'ipconfig /flushdns', 'ping -t'], a: 0, why: 'release.' },
    { tier: 2, type: 'mc', q: 'ping ל-8.8.8.8 עובד אך לא ל-google.com – הבעיה ב…', options: ['DNS', 'שער', 'מסיכה', 'כרטיס רשת'], a: 0, why: 'תרגום שמות.' },
    { tier: 2, type: 'mc', q: 'המחשב הגדיר כתובת 192.168.1.10 עם מסיכה 255.255.0.0 והראוטר 192.168.1.1/24. מה בעיה אפשרית?', options: ['אי התאמה בין המסיכות', 'DNS', 'MAC', 'אין בעיה בכלל'], a: 0, why: 'המסיכה חייבת להתאים לרשת.' },
    { tier: 3, type: 'mc', q: 'ברשת 192.168.5.128/25 איזו כתובת תקינה למחשב?', options: ['192.168.5.200', '192.168.5.100', '192.168.5.255', '192.168.5.128'], a: 0, why: '/25: ‏128–255; ‏.128 רשת, ‏.255 Broadcast.' },
    { tier: 3, type: 'mc', q: 'מה יקרה אם שני מחשבים מוגדרים ידנית עם אותה כתובת?', options: ['התנגשות כתובות', 'שניהם יעבדו מצוין', 'הראוטר יתחלף', 'תהיה כתובת ציבורית'], a: 0, why: 'כתובת חייבת להיות ייחודית.' },
    { tier: 3, type: 'mc', q: 'ב-Packet Tracer כדי לקבל כתובת מ-DHCP בוחרים…', options: ['DHCP בחלון IP Configuration', 'Static', 'Gateway', 'Wireless'], a: 0, why: 'DHCP.' },
  ],

  game: {
    name: 'תיקון הקסם הרשתי',
    intro: `<p>מחשב חדש צריך להתחבר לרשת! בכל משימה מופיעה רשת עם ראוטר ומכשירים קיימים. הגדירו למחשב כתובת <b>סטטית תקינה</b> בחלון ההגדרות ולחצו <b>OK</b> – אם הכול נכון נפתח פורטל לאינטרנט 🌐.</p>
    <p class="mini">שימו לב: כתובת באותה רשת, לא כתובת הרשת/Broadcast, לא תפוסה, מסיכה תואמת ושער = הראוטר. בכל משימה 3 ניסיונות.</p>`,
    run: fixGame,
  },
};
