import { h } from '../../util.js';
import { Sim, icon, injectCss } from '../anim.js';
import { sfx } from '../../audio.js';
import { makeTerminal, WinHost } from '../terminals.js';
import { poolGame } from '../games/g5.js';

injectCss('z5', `
.inspect{position:absolute;left:10px;right:10px;bottom:62px;background:rgba(6,8,34,.92);border:1px solid var(--line);border-radius:14px;padding:8px 12px;direction:rtl;font:600 12.5px ui-monospace,monospace;line-height:1.55;color:#cfe;z-index:5}.inspect .ltr{direction:ltr;text-align:left}
.inspect b{color:#ffd35c}.inspect .t{display:flex;justify-content:space-between;color:#fff;font-family:var(--font);direction:rtl;margin-bottom:3px}
.dora-steps{position:absolute;top:8px;left:0;right:0;display:flex;justify-content:center;gap:8px;z-index:6}
.dora-steps span{padding:3px 14px;border-radius:12px;background:rgba(255,255,255,.1);font-weight:900;font-size:13px;color:var(--muted);transition:all .3s}
.dora-steps span.on{background:var(--gold);color:#3a2300;box-shadow:0 0 16px var(--gold)}
.dora-steps span.done{background:rgba(61,220,151,.35);color:#fff}
.scroll-card{position:absolute;background:linear-gradient(180deg,#fff8e4,#ecdcb0);color:#2b2140;border:2px solid #b89a5a;border-radius:12px;padding:6px 10px;font:700 11.5px ui-monospace,monospace;direction:ltr;line-height:1.5;z-index:4;animation:fadeUp .3s;white-space:nowrap}
.pool5{display:grid;grid-template-columns:repeat(10,1fr);gap:4px;direction:ltr;width:94%;margin:0 auto}
.pool5 i{font-style:normal;height:34px;border-radius:7px;display:flex;flex-direction:column;align-items:center;justify-content:center;font:700 10px ui-monospace,monospace;border:1px solid rgba(61,220,151,.7);background:rgba(61,220,151,.22);color:#fff;position:relative;transition:all .4s}
.pool5 i.ex{background:rgba(135,145,216,.3);border-color:#8791d8}
.pool5 i.use{background:rgba(108,139,255,.5);border-color:#6c8bff}
.pool5 i u{position:absolute;bottom:0;left:0;height:4px;background:#ffd35c;text-decoration:none;transition:width .5s}
.stack{position:absolute;inset:0;display:flex;flex-direction:column}
.stack .top{flex:0 0 38%;position:relative}
.stack .bot{flex:1;min-height:0;padding:0 8px 8px}
`);

const C = (t) => `<code>${t}</code>`;

export default {
  intro: `ברוכים הבאים למערת הדרקון! 🐉 שומר המערה מחזיק מאגר ענק של כתובות מבריקות, ונותן אחת לכל אורח שנכנס – וקורא לה בחזרה כשהוא עוזב. זה בדיוק מה ששרת <b>DHCP</b> עושה ברשת. נלמד מה הוא נותן, איך הוא עובד (ארבעת השלבים DORA), ומה קורה כשהוא לא זמין.`,

  steps: [
    {
      title: 'מה זה DHCP ומה הוא נותן?',
      body: `<p><b>DHCP</b> – Dynamic Host Configuration Protocol – הוא פרוטוקול ושירות שמקצה <b>אוטומטית</b> הגדרות רשת למכשירים. במקום להגדיר ידנית בכל מחשב, השרת נותן:</p>
      <ul>
        <li>🔢 <b>כתובת IP</b></li>
        <li>🎭 <b>מסיכת רשת</b> (Subnet Mask)</li>
        <li>🚪 <b>שער ברירת מחדל</b> (Default Gateway)</li>
        <li>📖 <b>שרת DNS</b></li>
        <li>⏳ <b>זמן השכרה</b> (Lease)</li>
      </ul>
      <p>את שירות ה-DHCP יכול להפעיל <b>ראוטר</b> (ביתי או סיסקו), שרת Windows/Linux או נקודת גישה.</p>`,
      tip: 'DHCP חוסך עבודה ושגיאות ומונע התנגשויות.',
      anim: (stage, ctx) => {
        const sim = new Sim(stage, ctx);
        const sv = sim.dev('dragon', 'שרת DHCP', '192.168.1.1', 16, 40, { size: 70 });
        const people = [['laptop', 'מחשב א׳'], ['phone', 'טלפון'], ['pc', 'מחשב ב׳']];
        let n = 0;
        sim.caption('לחצו "לקוח חדש" – הדרקון יחלק לו הגדרות רשת מלאות.');
        sim.btn('➕ לקוח חדש', async () => {
          if (n >= 3) { n = 0; sim.layer.querySelectorAll('.cl').forEach((e) => e.remove()); }
          const [k, name] = people[n];
          const y = 20 + n * 28;
          const c = sim.dev(k, name, null, 84, y, { size: 44, cls: 'cl' });
          const ip = `192.168.1.${100 + n}`;
          await sim.fly(sv, c, '📜', { ms: 1400, color: '#ffd35c' });
          const card = h('div', { class: 'scroll-card', style: { left: '56%', top: y - 8 + '%' } }, `IP:      ${ip}\nMask:    255.255.255.0\nGateway: 192.168.1.1\nDNS:     8.8.8.8\nLease:   8 hours`);
          card.style.whiteSpace = 'pre';
          sim.layer.append(card);
          c.setIp(ip); c.glow('#3ddc97'); sfx('collect');
          n++;
        });
      },
      questions: [
        { tier: 1, type: 'mc', q: 'מה שרת DHCP עושה?', options: ['מקצה אוטומטית הגדרות רשת (IP, מסיכה, שער, DNS)', 'מתרגם שמות לכתובות', 'מצפין תעבורה', 'מחבר כבלים'], a: 0, why: 'DHCP מקצה הגדרות IP אוטומטית.' },
        { tier: 1, type: 'mc', q: 'איזה מהבאים <b>אינו</b> נמסר בדרך כלל על ידי DHCP?', options: ['כתובת MAC', 'כתובת IP', 'שער ברירת מחדל', 'כתובת שרת DNS'], a: 0, why: 'MAC נצרבת בכרטיס; DHCP נותן IP, מסיכה, שער, DNS ו-Lease.' },
        { tier: 2, type: 'mc', q: 'איזה התקן יכול להיות שרת DHCP?', options: ['ראוטר, שרת Windows או Linux', 'רק מדפסת', 'רק מתג פשוט', 'אף אחד'], a: 0, why: 'כל התקן שמריץ שירות DHCP.' },
      ],
    },
    {
      title: 'ארבעת השלבים: DORA',
      body: `<p>כשמחשב מתחבר לרשת הוא עובר <b>4 שלבים</b>:</p>
      <ol>
        <li><b>D</b>iscover – הלקוח <b>משדר</b> לכולם: ״יש כאן שרת DHCP?״ (עדיין אין לו כתובת: מקור <code>0.0.0.0</code>).</li>
        <li><b>O</b>ffer – השרת <b>מציע</b> כתובת פנויה עם הגדרות.</li>
        <li><b>R</b>equest – הלקוח <b>מבקש</b> רשמית את ההצעה (גם בשידור, כדי ששרתים אחרים ידעו שהצעתם נדחתה).</li>
        <li><b>A</b>cknowledge – השרת <b>מאשר</b>. הלקוח מגדיר את עצמו.</li>
      </ol>
      <p>התקשורת באמצעות UDP: שרת = פורט <code>67</code>, לקוח = פורט <code>68</code>.</p>`,
      tip: 'זכרו: DORA = Discover, Offer, Request, Acknowledge.',
      anim: (stage, ctx) => {
        const sim = new Sim(stage, ctx);
        const steps = h('div', { class: 'dora-steps' }, ...['Discover', 'Offer', 'Request', 'Acknowledge'].map((t) => h('span', {}, t)));
        sim.root.append(steps);
        const pc = sim.dev('pc', 'לקוח (מחשב חדש)', '0.0.0.0', 16, 42, { size: 52 });
        const sv = sim.dev('router', 'שרת DHCP (ראוטר)', '192.168.1.1', 84, 42, { size: 56 });
        const pr = sim.dev('printer', 'מדפסת', '192.168.1.20', 50, 70, { size: 38 });
        sim.line(pc, sv);
        const ins = h('div', { class: 'inspect' });
        sim.root.append(ins);
        const data = [
          ['Discover', 'שידור – ״יש שרת DHCP?״', 'Src IP: <b>0.0.0.0</b>  →  Dst IP: <b>255.255.255.255</b> (broadcast)\nUDP: <b>68</b> → <b>67</b>   |   Client MAC: 00-1A-2B-3C-4D-5E'],
          ['Offer', 'השרת מציע כתובת', 'Src IP: <b>192.168.1.1</b>  →  Dst: Client (broadcast/unicast)\nUDP: <b>67</b> → <b>68</b>   |   מציע: IP <b>192.168.1.101</b> · Mask 255.255.255.0 · GW 192.168.1.1 · DNS 8.8.8.8 · Lease 8h'],
          ['Request', 'הלקוח מבקש את ההצעה', 'Src IP: <b>0.0.0.0</b>  →  Dst IP: <b>255.255.255.255</b>\nUDP: <b>68</b> → <b>67</b>   |   Requested IP: <b>192.168.1.101</b> · Server ID: 192.168.1.1'],
          ['Acknowledge', 'השרת מאשר – ההשכרה החלה', 'Src IP: <b>192.168.1.1</b>  →  Client\nUDP: <b>67</b> → <b>68</b>   |   ✔ הלקוח מגדיר: IP 192.168.1.101 / 24 · GW · DNS · Lease'],
        ];
        let i = 0, busy = false;
        const setStep = (k) => {
          [...steps.children].forEach((s, j) => { s.className = j < k ? 'done' : j === k ? 'on' : ''; });
          if (k < 4) ins.innerHTML = `<div class="t"><b>${data[k][0]}</b><span>${data[k][1]}</span></div><div class="ltr">${data[k][2].replace(/\n/g, '<br>')}</div>`;
        };
        ins.innerHTML = '<div class="t"><b>DORA</b><span>לחצו "הבא" כדי לעבור בין השלבים</span></div>לקוח חדש התחבר לרשת ועדיין אין לו כתובת IP.';
        sim.caption('');
        const next = sim.btn('▶ הבא', async () => {
          if (busy) return; busy = true;
          if (i >= 4) { i = 0; pc.setIp('0.0.0.0'); [...steps.children].forEach((s) => (s.className = '')); }
          setStep(i);
          if (i === 0) {
            const a = sim.fly(pc, sv, '📣 DISCOVER', { ms: 1500, color: '#ffd35c' });
            sim.fly(pc, pr, '', { ms: 1500, color: '#ffd35c' });
            await a; pr.say('לא אני… 🤷', 1400);
          }
          if (i === 1) await sim.fly(sv, pc, '🎁 OFFER 192.168.1.101', { ms: 1600, color: '#4de1ff' });
          if (i === 2) {
            const a = sim.fly(pc, sv, '📨 REQUEST', { ms: 1500, color: '#ffd35c' });
            sim.fly(pc, pr, '', { ms: 1500, color: '#ffd35c' });
            await a;
          }
          if (i === 3) { await sim.fly(sv, pc, '✅ ACK', { ms: 1500, color: '#3ddc97' }); pc.setIp('192.168.1.101'); pc.glow('#3ddc97'); sfx('levelup'); setStep(4); [...steps.children].forEach((s) => (s.className = 'done')); }
          i++;
          next.textContent = i >= 4 ? '↺ מההתחלה' : '▶ הבא';
          busy = false;
        });
      },
      questions: [
        { tier: 1, type: 'mc', q: 'איזו הודעה נשלחת <b>ראשונה</b> בתהליך DHCP?', options: ['Discover', 'Offer', 'Request', 'Acknowledge'], a: 0, why: 'הלקוח פותח ב-Discover.', hint: 'D ראשונה ב-DORA.' },
        { tier: 1, type: 'order', q: 'סדרו את שלבי DHCP בסדר הנכון', items: ['Discover', 'Offer', 'Request', 'Acknowledge'], why: 'DORA.' },
        { tier: 2, type: 'mc', q: 'מהי כתובת המקור של הלקוח בהודעת Discover?', options: ['0.0.0.0', '255.255.255.255', '192.168.1.1', '127.0.0.1'], a: 0, why: 'עדיין אין לו כתובת – משתמש ב-0.0.0.0.' },
        { tier: 2, type: 'mc', q: 'איזה פורטים של UDP משמשים את DHCP?', options: ['שרת 67, לקוח 68', 'שרת 80, לקוח 443', 'שרת 53, לקוח 53', 'שרת 21, לקוח 22'], a: 0, why: 'UDP 67 (שרת) ו-68 (לקוח).' },
        { tier: 3, type: 'mc', q: 'מדוע הודעת Request נשלחת בשידור?', options: ['כדי ששרתי DHCP אחרים ידעו שהצעתם נדחתה', 'כי הלקוח לא יודע IP של אף אחד בכלל', 'כי זה חוק ב-UDP', 'כדי לגרום להתנגשות'], a: 0, why: 'כל שרת שהציע יודע איזו הצעה נבחרה.' },
      ],
    },
    {
      title: 'מאגר כתובות, החרגות ו-Lease',
      body: `<p>השרת מחזיק <b>מאגר (Pool)</b> – טווח כתובות שמותר לחלק, למשל ${C('192.168.1.1–.254')}.</p>
      <ul>
        <li><b>כתובות מוחרגות (Excluded):</b> כתובות שהשרת <b>לא</b> יחלק – כי הן שייכות למכשירים סטטיים (ראוטר, מדפסת, שרתים).</li>
        <li><b>Lease:</b> הכתובת מושאלת לזמן מוגבל (למשל 8 שעות או 7 ימים).</li>
        <li>ב-<b>50%</b> מהזמן הלקוח מבקש <b>חידוש</b> (Renew) ישירות מהשרת. אם לא חודשה – היא פוקעת וחוזרת למאגר.</li>
        <li>כשהמאגר נגמר – לקוחות חדשים לא יקבלו כתובת.</li>
      </ul>`,
      tip: 'לחצו "לקוח חדש" ו"קדם זמן" כדי לראות כתובות נלקחות וחוזרות.',
      anim: (stage, ctx) => {
        const root = h('div', { class: 'stack' });
        stage.innerHTML = '';
        stage.append(root);
        const pool = h('div', { class: 'pool5', style: { marginTop: '18px' } });
        const cellsS = [];
        for (let k = 1; k <= 20; k++) {
          const ex = k <= 5;
          const el = h('i', { class: ex ? 'ex' : '' }, `.${k}`, h('u', { style: { width: '0%' } }));
          cellsS.push({ el, ex, life: 0, max: 0 });
          pool.append(el);
        }
        const info = h('div', { class: 'plan-info', style: { width: '94%', margin: '10px auto', background: 'rgba(255,255,255,.08)', border: '1px solid var(--line)', borderRadius: '14px', padding: '10px 14px', textAlign: 'center', minHeight: '64px', fontSize: '14px' } }, '.1–.5 מוחרגות (ראוטר, מדפסת, שרתים). ‏.6–.20 במאגר.');
        const ctrl = h('div', { class: 'sim-controls' });
        const draw = () => cellsS.forEach((c) => {
          c.el.classList.toggle('use', c.life > 0);
          c.el.querySelector('u').style.width = c.life > 0 ? (c.life / c.max) * 100 + '%' : '0%';
        });
        const add = h('button', { class: 'btn small', onclick: () => {
          const f = cellsS.findIndex((c) => !c.ex && c.life <= 0);
          if (f < 0) { info.innerHTML = '⚠️ <b>המאגר מלא!</b> לקוח חדש לא יקבל כתובת.'; sfx('wrong'); return; }
          cellsS[f].max = 8; cellsS[f].life = 8; cellsS[f].t = 0;
          info.innerHTML = `לקוח חדש קיבל <b>192.168.1.${f + 1}</b> – Lease של 8 שעות.`; sfx('collect'); draw();
        } }, '➕ לקוח חדש');
        const adv = h('button', { class: 'btn small', onclick: () => {
          let msg = 'עברו 2 שעות…';
          cellsS.forEach((c, i) => {
            if (c.life > 0) {
              c.life -= 2;
              if (c.life <= 4 && !c.renewed && c.life > 0) { c.life = c.max; c.renewed = true; msg = `ב-50% מהזמן הלקוח של .${i + 1} ביקש <b>Renew</b> והזמן חודש ✔`; }
              else if (c.life <= 0) { c.life = 0; c.renewed = false; msg = `ה-Lease של .${i + 1} פג – הכתובת חזרה למאגר.`; }
            }
          });
          info.innerHTML = msg; sfx('tick'); draw();
        } }, '⏩ קדם זמן (2 שעות)');
        ctrl.append(add, adv);
        root.append(pool, info);
        root.append(ctrl);
        ctrl.style.position = 'absolute';
      },
      questions: [
        { tier: 1, type: 'mc', q: 'מדוע מחריגים כתובות מהמאגר?', options: ['כדי שהשרת לא יחלק כתובות של מכשירים סטטיים', 'כדי לחסוך חשמל', 'כדי להאיץ את האינטרנט', 'כי הן פגומות'], a: 0, why: 'מונע התנגשות עם סטטיים.' },
        { tier: 1, type: 'mc', q: 'מה קורה כשה-Lease פג ולא חודש?', options: ['הכתובת חוזרת למאגר', 'הכתובת נשארת לצמיתות', 'המחשב נכבה', 'השרת נמחק'], a: 0, why: 'הכתובת פנויה להקצאה מחדש.' },
        { tier: 2, type: 'mc', q: 'באיזה שלב ב-Lease הלקוח מנסה לחדש את הכתובת?', options: ['ב-50%', 'ב-10%', 'רק אחרי שפקע', 'אף פעם'], a: 0, why: 'T1 = 50% מזמן ההשכרה.' },
        { tier: 3, type: 'mc', q: 'מהו מאגר (Pool) ב-DHCP?', options: ['טווח הכתובות שהשרת רשאי להקצות', 'רשימת סיסמאות', 'כתובת הראוטר', 'שם הרשת'], a: 0, why: 'ה-Pool הוא טווח ההקצאה.' },
      ],
    },
    {
      title: 'כשאין DHCP: APIPA ו-Relay',
      body: `<p><b>אין שרת DHCP זמין?</b> מחשב Windows נותן לעצמו כתובת <code>169.254.x.x</code> (<b>APIPA</b>) – אפשר לתקשר רק עם מכשירים באותה רשת, ובלי שער.</p>
      <p><b>ומה אם השרת נמצא ברשת אחרת?</b> הודעות Discover הן <b>שידור</b>, וראוטרים <b>לא מעבירים</b> שידורים. הפתרון: <b>DHCP Relay</b> – בראוטר מגדירים בממשק הפונה ללקוחות:</p>
      <p><code>ip helper-address 10.0.0.5</code></p>
      <p>והראוטר מעביר את הבקשה כ-Unicast אל השרת.</p>`,
      tip: 'helper-address מוגדר על הממשק שפונה ללקוחות.',
      anim: (stage, ctx) => {
        const sim = new Sim(stage, ctx);
        sim.zone(20, 46, 32, 70, 'רשת הלקוחות 192.168.1.0/24', '#6c8bff');
        sim.zone(82, 46, 28, 70, 'רשת השרתים 10.0.0.0/24', '#ff8a3a');
        const pc = sim.dev('pc', 'לקוח חדש', '0.0.0.0', 14, 44, { size: 46 });
        const rt = sim.dev('router', 'ראוטר', null, 50, 44, { size: 56 });
        const sv = sim.dev('server', 'שרת DHCP', '10.0.0.5', 86, 44, { size: 50 });
        sim.line(pc, rt); sim.line(rt, sv);
        let relay = false;
        sim.caption('הלקוח משדר Discover, אבל השרת נמצא ברשת אחרת.');
        sim.btn('📣 שלח Discover', async () => {
          const p = await sim.fly(pc, rt, 'DISCOVER (broadcast)', { ms: 1300, color: '#ffd35c', keep: true });
          if (!relay) {
            p.querySelector('span').textContent = '🚫 שידור נעצר';
            p.querySelector('span').style.background = '#ff5a7a';
            sfx('wrong');
            sim.caption('הראוטר <b>לא מעביר שידורים</b> – השרת לא שמע. הלקוח יקבל APIPA (169.254.x.x).', 'bad');
            await ctx.wait(1500); p.remove();
            pc.setIp('169.254.37.12');
          } else {
            p.remove();
            sim.caption('הראוטר עם <code>ip helper-address 10.0.0.5</code> מעביר את הבקשה כ-<b>Unicast</b> לשרת.', 'good');
            await sim.fly(rt, sv, 'DISCOVER (unicast)', { ms: 1300, color: '#4de1ff' });
            await sim.fly(sv, rt, 'OFFER', { ms: 1000, color: '#3ddc97' });
            await sim.fly(rt, pc, 'OFFER', { ms: 1000, color: '#3ddc97' });
            pc.setIp('192.168.1.101'); pc.glow('#3ddc97'); sfx('collect');
          }
        });
        const tg = sim.btn('⚙️ הפעל helper-address', () => {
          relay = !relay;
          tg.textContent = relay ? '⚙️ כבה helper-address' : '⚙️ הפעל helper-address';
          rt.setIp(relay ? 'helper-address 10.0.0.5' : '');
          pc.setIp('0.0.0.0');
        }, 'gold');
      },
      questions: [
        { tier: 1, type: 'mc', q: 'מחשב קיבל <code>169.254.x.x</code>. מה הסיבה הסבירה?', options: ['לא נמצא שרת DHCP', 'הוא קיבל כתובת ציבורית', 'המסיכה שגויה', 'ה-DNS לא תקין'], a: 0, why: 'APIPA = אין DHCP.' },
        { tier: 2, type: 'mc', q: 'מדוע צריך DHCP Relay כששרת DHCP נמצא ברשת אחרת?', options: ['כי ראוטרים לא מעבירים הודעות שידור', 'כי שרת לא יכול לדבר עם ראוטר', 'כי UDP לא עובד בין רשתות', 'כי חסרה מסיכה'], a: 0, why: 'ה-Relay ממיר שידור ל-Unicast לשרת.' },
        { tier: 3, type: 'input', q: 'כתבו את הפקודה שמעבירה בקשות DHCP לשרת <code>10.0.0.5</code> (בממשק הלקוחות)', answer: ['ip helper-address 10.0.0.5'], placeholder: 'ip ...', why: 'ip helper-address 10.0.0.5' },
      ],
    },
    {
      title: 'בדיקה במחשב: ipconfig',
      stageTitle: '💻 חלון פקודה (נסו בעצמכם)',
      body: `<p>בווינדוס אפשר לשלוט בלקוח DHCP משורת הפקודה:</p>
      <ul>
        <li>${C('ipconfig /all')} – מציג הכול: כתובת, שרת DHCP, מועד השכרה.</li>
        <li>${C('ipconfig /release')} – משחרר את הכתובת (חוזר ל-0.0.0.0).</li>
        <li>${C('ipconfig /renew')} – מבקש כתובת חדשה (התהליך DORA!).</li>
      </ul>
      <p>נסו בחלון המסוף: שחררו ואז חדשו – וצפו בארבע החבילות למעלה.</p>
      <p>ואם השרת כבוי? לחצו על הכפתור "כבה שרת" וחדשו שוב – מה תקבלו?</p>`,
      tip: 'לחצו על הפקודות המוצעות מתחת למסוף.',
      anim: (stage, ctx) => {
        const root = h('div', { class: 'stack' });
        const top = h('div', { class: 'top' });
        const bot = h('div', { class: 'bot' });
        root.append(top, bot);
        stage.innerHTML = '';
        stage.append(root);
        const sim = new Sim(top, ctx);
        sim.ctrl.remove();
        const pc = sim.dev('pc', 'המחשב שלך', '192.168.1.101', 18, 46, { size: 42 });
        const sv = sim.dev('router', 'שרת DHCP', '192.168.1.1', 82, 46, { size: 46 });
        sim.line(pc, sv);
        const host = new WinHost({
          mode: 'dhcp', ip: '192.168.1.101', mask: '255.255.255.0', gw: '192.168.1.1', dns: '8.8.8.8',
          onChange: async (hh, ev) => {
            if (ev === 'release') { pc.setIp('0.0.0.0'); sim.caption('שחררת את הכתובת.'); }
            if (ev === 'discover') {
              sim.caption('DORA בעבודה…');
              await sim.fly(pc, sv, 'DISCOVER', { ms: 400, color: '#ffd35c' });
              if (!hh.env.dhcpOn) { sim.caption('אין תשובה מהשרת… ⏳', 'bad'); return; }
              await sim.fly(sv, pc, 'OFFER', { ms: 400, color: '#4de1ff' });
              await sim.fly(pc, sv, 'REQUEST', { ms: 400, color: '#ffd35c' });
              await sim.fly(sv, pc, 'ACK', { ms: 400, color: '#3ddc97' });
            }
            if (ev === 'bound') { pc.setIp(hh.ip); pc.glow('#3ddc97'); sim.caption(`קיבלת ${hh.ip}`, 'good'); }
            if (ev === 'apipa') { pc.setIp(hh.ip); pc.glow('#ff5a7a'); sim.caption('אין DHCP ⇒ APIPA 169.254.x.x', 'bad'); }
          },
        });
        const term = makeTerminal({
          theme: 'win', prompt: 'C:\\Users\\Student>', title: 'Command Prompt',
          hints: ['ipconfig', 'ipconfig /all', 'ipconfig /release', 'ipconfig /renew', 'ping 192.168.1.1'],
          onCommand: async (cmd, out, t) => { const r = await host.run(cmd, out, ctx.wait); if (r === 'clear') t.clear(); },
        });
        term.print('Microsoft Windows [Version 10.0.19045]\n(c) Microsoft Corporation. All rights reserved.\n');
        bot.append(term.el);
        const kill = h('button', { class: 'btn small danger', style: { position: 'absolute', top: '6px', left: '6px', zIndex: 8 }, onclick: () => { host.env.dhcpOn = !host.env.dhcpOn; kill.textContent = host.env.dhcpOn ? '⛔ כבה שרת DHCP' : '✅ הדלק שרת DHCP'; sv.glow(host.env.dhcpOn ? '#3ddc97' : '#ff5a7a'); } }, '⛔ כבה שרת DHCP');
        top.append(kill);
      },
      questions: [
        { tier: 1, type: 'mc', q: 'איזו פקודה מבקשת כתובת חדשה משרת DHCP?', options: ['ipconfig /renew', 'ipconfig /release', 'ping', 'ipconfig /flushdns'], a: 0, why: 'renew = חידוש.' },
        { tier: 1, type: 'mc', q: 'מה עושה <code>ipconfig /release</code>?', options: ['משחררת את כתובת ה-DHCP הנוכחית', 'מבקשת כתובת חדשה', 'מנקה את ה-DNS', 'מבטלת את הרשת'], a: 0, why: 'הכתובת חוזרת ל-0.0.0.0.' },
        { tier: 2, type: 'mc', q: 'באיזה פורט מאזין שרת DHCP?', options: ['UDP 67', 'TCP 80', 'UDP 53', 'TCP 22'], a: 0, why: 'UDP 67 לשרת, 68 ללקוח.' },
        { tier: 3, type: 'input', q: 'כתבו את הפקודה שמציגה גם את כתובת שרת ה-DHCP ומועד פקיעת ההשכרה', answer: ['ipconfig /all', 'ipconfig/all'], placeholder: 'ipconfig …', why: 'ipconfig /all.' },
      ],
    },
  ],

  quiz: [
    { tier: 1, type: 'mc', q: 'DHCP הוא קיצור של…', options: ['Dynamic Host Configuration Protocol', 'Digital Host Control Panel', 'Direct Hosting Connection Port', 'Dynamic Hub Control Protocol'], a: 0, why: 'פרוטוקול להגדרת מארחים דינמית.' },
    { tier: 1, type: 'order', q: 'סדרו את שלבי DHCP', items: ['Discover', 'Offer', 'Request', 'Acknowledge'], why: 'DORA.' },
    { tier: 1, type: 'mc', q: 'מה אינו חלק מהגדרות ש-DHCP נותן?', options: ['סיסמת Wi-Fi', 'כתובת IP', 'מסיכה', 'שער ברירת מחדל'], a: 0, why: 'DHCP נותן הגדרות IP.' },
    { tier: 1, type: 'mc', q: 'ההודעה Discover נשלחת כ…', options: ['שידור (Broadcast)', 'הודעה פרטית לשרת מסוים', 'מייל', 'קובץ'], a: 0, why: 'הלקוח לא יודע איפה השרת.' },
    { tier: 1, type: 'mc', q: 'כתובת 169.254.x.x במחשב מעידה על…', options: ['כישלון בקבלת כתובת מ-DHCP', 'חיבור מהיר', 'כתובת סטטית', 'הצלחת ה-NAT'], a: 0, why: 'APIPA.' },
    { tier: 2, type: 'mc', q: 'באילו פורטים משתמש DHCP?', options: ['UDP 67 ו-68', 'TCP 20 ו-21', 'UDP 53', 'TCP 443'], a: 0, why: 'שרת 67 / לקוח 68.' },
    { tier: 2, type: 'mc', q: 'מהי כתובת היעד של Discover?', options: ['255.255.255.255', '192.168.1.1', '8.8.8.8', '127.0.0.1'], a: 0, why: 'שידור כללי.' },
    { tier: 2, type: 'mc', q: 'מה תפקיד הכתובות המוחרגות?', options: ['למנוע מהשרת לחלק כתובות סטטיות', 'להגדיל את המאגר', 'להצפין', 'לחסום אתרים'], a: 0, why: 'מניעת התנגשות.' },
    { tier: 2, type: 'mc', q: 'מה זה Lease?', options: ['זמן ההשכרה של הכתובת', 'סוג רשת', 'שם הלקוח', 'כתובת השרת'], a: 0, why: 'לזמן מוגבל.' },
    { tier: 2, type: 'mc', q: 'ב-Renew הלקוח פונה…', options: ['ישירות לשרת שהשכיר לו', 'לכולם בשידור', 'לגוגל', 'למדפסת'], a: 0, why: 'Unicast לשרת.' },
    { tier: 2, type: 'mc', q: 'איזו פקודת Windows משחררת כתובת DHCP?', options: ['ipconfig /release', 'ipconfig /renew', 'ping', 'netstat'], a: 0, why: 'release.' },
    { tier: 3, type: 'mc', q: 'כשהשרת ברשת אחרת, מה מאפשר ללקוח לקבל כתובת?', options: ['DHCP Relay (ip helper-address)', 'NAT', 'APIPA', 'DNS'], a: 0, why: 'Relay.' },
    { tier: 3, type: 'mc', q: 'מדוע Request נשלחת בשידור?', options: ['כדי שהשרתים האחרים ידעו איזו הצעה נבחרה', 'כי הלקוח לא יודע IP', 'כי UDP דורש', 'אין סיבה'], a: 0, why: 'מידע לשאר השרתים.' },
    { tier: 3, type: 'mc', q: 'שרת DHCP מקצה כתובות מתוך…', options: ['מאגר (Pool) מוגדר', 'כל האינטרנט', 'מסד נתוני DNS', 'טבלת NAT'], a: 0, why: 'Pool.' },
  ],

  game: {
    name: 'שומר מאגר הכתובות',
    intro: `<p>אתם שרת ה-DHCP! לקוחות מגיעים ומבקשים כתובת (<b>Discover</b>). לחצו על כתובת <b>פנויה</b> מהמאגר כדי להציע אותה (<b>Offer</b>). אל תציעו כתובת <b>תפוסה</b> או <b>מוחרגת</b> – זו התנגשות!</p>
    <p class="mini">ברמות הגבוהות צריך גם לאשר (<b>ACK</b>) אחרי ה-Request, ולהאריך Lease כשלקוח מבקש Renew ↻. לקוח שמחכה יותר מדי נשאר עם APIPA. יש 3 לבבות.</p>`,
    run: poolGame,
  },
};
