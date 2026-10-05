import { h } from '../../util.js';
import { Sim, icon, injectCss } from '../anim.js';
import { sfx } from '../../audio.js';
import { gateGame } from '../games/g3.js';

injectCss('z3', `
.nat-wrap{position:absolute;inset:0;padding:10px 10px 74px;display:flex;flex-direction:column;gap:8px}
.nat-table{width:100%;border-collapse:collapse;direction:ltr;font:600 12.5px ui-monospace,monospace;background:rgba(0,0,0,.35);border-radius:10px;overflow:hidden}
.nat-table th{background:rgba(108,139,255,.35);padding:4px 8px;font-size:11.5px}
.nat-table td{padding:4px 8px;text-align:center;border-top:1px solid rgba(255,255,255,.1);color:#ffe9a0}
.sp-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;padding:12px 12px 74px;height:100%;align-content:center}
.sp-card{perspective:700px;height:118px;cursor:pointer}
.sp-in{position:relative;width:100%;height:100%;transition:transform .6s;transform-style:preserve-3d}
.sp-card.flip .sp-in{transform:rotateY(180deg)}
.sp-f,.sp-b{position:absolute;inset:0;backface-visibility:hidden;border-radius:16px;padding:10px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;border:2px solid var(--line)}
.sp-f{background:linear-gradient(160deg,#2f3a9b,#1b2160)}
.sp-f b{font:900 22px ui-monospace,monospace;direction:ltr;color:#ffd35c}
.sp-f small{color:var(--muted)}
.sp-b{transform:rotateY(180deg);background:linear-gradient(160deg,#fff8e4,#ead9ad);color:#2b2140;font-size:13px;line-height:1.45}
.sp-b b{color:#3b2a8a}
`);

const C = (t) => `<code>${t}</code>`;

export default {
  intro: `ברוכים הבאים ליער השערים! 🌲 ביער הזה יש שני שערים: <b>שער פרטי</b> ו<b>שער ציבורי</b>. נלמד את ההבדל בין כתובות IP פרטיות לציבוריות, למה צריך את שתיהן, ואיך ראוטר מתרגם ביניהן בקסם שנקרא <b>NAT</b>.`,

  steps: [
    {
      title: 'כתובת ציבורית (Public IP)',
      body: `<p><b>כתובת ציבורית</b> היא כתובת שמזהה מכשיר ב<b>אינטרנט</b> כולו.</p>
      <ul>
        <li><b>ייחודית בעולם</b> – אין שני מכשירים באינטרנט עם אותה כתובת ציבורית.</li>
        <li>מוקצית בהיררכיה: <b>IANA</b> ← גוף אזורי (<b>RIR</b>) ← <b>ספק האינטרנט (ISP)</b> ← הלקוח.</li>
        <li>ניתנת לניתוב באינטרנט – ראוטרים בעולם יודעים להעביר אליה חבילות.</li>
        <li>דוגמה: שרת ה-DNS של גוגל ${C('8.8.8.8')}.</li>
      </ul>
      <p>כמו מספר טלפון ציבורי: כל אחד בעולם יכול להתקשר אליו.</p>`,
      tip: 'כתובת ציבורית לרוב מקבלים מהספק (ולפעמים היא משתנה מדי פעם).',
      anim: (stage, ctx) => {
        const sim = new Sim(stage, ctx);
        const iana = sim.dev('globe', 'IANA', null, 50, 12, { size: 44 });
        const rir = sim.dev('cloud', 'RIR (RIPE)', null, 50, 32, { size: 44 });
        const isp = sim.dev('server', 'ספק אינטרנט', null, 50, 52, { size: 44 });
        const home = sim.dev('router', 'הראוטר שלך', '???', 22, 66, { size: 48 });
        const google = sim.dev('server', 'שרת גוגל', '8.8.8.8', 80, 66, { size: 48 });
        sim.line(iana, rir); sim.line(rir, isp); sim.line(isp, home); sim.line(isp, google);
        sim.caption('הכתובות הציבוריות מחולקות בהיררכיה כדי שלא יהיו כפילויות.');
        let done = false;
        sim.btn('📨 בקש כתובת ציבורית', async (e, b) => {
          if (done) return; done = true;
          sim.caption('IANA מקצה בלוק לגוף אזורי…');
          await sim.fly(iana, rir, '84.0.0.0/8', { ms: 1200 });
          sim.caption('הגוף האזורי מקצה בלוק קטן לספק האינטרנט…');
          await sim.fly(rir, isp, '84.229.0.0/16', { ms: 1200 });
          sim.caption('הספק נותן ללקוח כתובת אחת…');
          await sim.fly(isp, home, '84.229.10.5', { ms: 1400, color: '#3ddc97' });
          home.setIp('84.229.10.5');
          home.glow('#3ddc97');
          sfx('collect');
          sim.caption('עכשיו לראוטר יש כתובת ציבורית ייחודית – אפשר להגיע אליו מכל העולם.', 'good');
        });
        sim.btn('↺ מההתחלה', () => { done = false; home.setIp('???'); sim.caption(''); }, 'ghost');
      },
      questions: [
        { tier: 1, type: 'mc', q: 'מי מקצה כתובות IP ציבוריות ללקוחות הקצה?', options: ['ספק האינטרנט (ISP)', 'יצרן המחשב', 'חברת החשמל', 'שרת ה-DHCP בבית'], a: 0, why: 'ה-ISP מקבל בלוקים מהגוף האזורי ומחלק ללקוחות.' },
        { tier: 1, type: 'tf', q: 'כתובת ציבורית היא ייחודית בכל העולם.', a: true, why: 'אחרת חבילות לא היו יודעות לאן להגיע.' },
        { tier: 2, type: 'mc', q: 'איזו כתובת היא כתובת ציבורית?', options: ['8.8.8.8', '10.0.0.1', '192.168.0.5', '172.20.1.1'], a: 0, why: 'שלוש האחרות בטווחים הפרטיים.' },
      ],
    },
    {
      title: 'כתובות פרטיות (Private IP)',
      body: `<p><b>כתובת פרטית</b> משמשת <b>בתוך</b> רשת מקומית (בית, בית ספר, חברה). ראוטרים באינטרנט <b>לא מעבירים</b> אותה.</p>
      <p>שלושה טווחים שמורים (RFC 1918):</p>
      <table><tr><th>טווח</th><th>סימון</th><th>מחלקה</th></tr>
      <tr><td dir="ltr">10.0.0.0 – 10.255.255.255</td><td>/8</td><td>A</td></tr>
      <tr><td dir="ltr">172.16.0.0 – 172.31.255.255</td><td>/12</td><td>B</td></tr>
      <tr><td dir="ltr">192.168.0.0 – 192.168.255.255</td><td>/16</td><td>C</td></tr></table>
      <ul><li>אפשר להשתמש <b>באותה</b> כתובת פרטית בהרבה רשתות שונות – אין התנגשות כי הן לא נפגשות.</li><li>אין צורך לבקש אישור מאף אחד.</li></ul>`,
      tip: 'שימו לב: ב-172 רק 16 עד 31 פרטי! ‏172.32.x.x ציבורי.',
      anim: (stage, ctx) => {
        const sim = new Sim(stage, ctx);
        sim.zone(22, 40, 38, 62, 'בית א׳ (192.168.1.0/24)', '#3ddc97');
        sim.zone(78, 40, 38, 62, 'בית ב׳ (192.168.1.0/24)', '#3ddc97');
        const a = sim.dev('pc', null, '192.168.1.10', 14, 38, { size: 40 });
        const a2 = sim.dev('phone', null, '192.168.1.11', 30, 38, { size: 40 });
        const ra = sim.dev('router', null, null, 22, 62, { size: 44 });
        const b = sim.dev('pc', null, '192.168.1.10', 70, 38, { size: 40 });
        const b2 = sim.dev('laptop', null, '192.168.1.11', 86, 38, { size: 40 });
        const rb = sim.dev('router', null, null, 78, 62, { size: 44 });
        const net = sim.dev('cloud', 'האינטרנט', null, 50, 18, { size: 54 });
        sim.line(a, ra); sim.line(a2, ra); sim.line(b, rb); sim.line(b2, rb); sim.line(ra, net, { dash: '4 4' }); sim.line(rb, net, { dash: '4 4' });
        sim.caption('בשני הבתים יש מחשב עם <b>אותה כתובת פרטית</b> 192.168.1.10 – ואין בעיה, כי הרשתות נפרדות.');
        sim.btn('📦 שלח חבילה פרטית לאינטרנט', async () => {
          sim.caption('החבילה יוצאת עם כתובת מקור 192.168.1.10…');
          await sim.fly(a, ra, '192.168.1.10 →', { ms: 1000, color: '#ff9a3a' });
          const p = await sim.fly(ra, net, '192.168.1.10 →', { ms: 1400, color: '#ff9a3a', keep: true });
          p.querySelector('span').textContent = '🚫 נזרקה!';
          p.querySelector('span').style.background = '#ff5a7a';
          sfx('wrong');
          sim.caption('ראוטרי האינטרנט <b>זורקים</b> חבילות עם כתובת פרטית. כדי לצאת צריך לתרגם לכתובת ציבורית (NAT).', 'bad');
          setTimeout(() => p.remove(), 1800);
        });
      },
      questions: [
        { tier: 1, type: 'mc', q: 'איזו כתובת היא <b>פרטית</b>?', options: ['192.168.20.5', '192.169.20.5', '172.32.0.1', '11.0.0.1'], a: 0, why: 'רק 192.168.x.x פרטי. 192.169 – ציבורי, 172.32 – ציבורי, 11.x – ציבורי.', hint: 'חפשו 192.168 או 10 או 172.16–31.' },
        { tier: 1, type: 'tf', q: 'אפשר להשתמש באותה כתובת פרטית בשתי רשתות שונות.', a: true, why: 'כתובות פרטיות אינן מנותבות באינטרנט, לכן אין התנגשות בין רשתות נפרדות.' },
        { tier: 2, type: 'mc', q: 'מהו הטווח הפרטי של מחלקה B?', options: ['172.16.0.0 – 172.31.255.255', '172.0.0.0 – 172.255.255.255', '128.0.0.0 – 191.255.255.255', '172.16.0.0 – 172.16.255.255'], a: 0, why: 'RFC 1918: ‏172.16.0.0/12.' },
        { tier: 3, type: 'mc', q: 'איזו כתובת <b>אינה</b> פרטית?', options: ['172.32.10.1', '172.31.10.1', '172.16.0.1', '10.255.255.254'], a: 0, why: '172.32 חורג מהטווח 16–31.' },
      ],
    },
    {
      title: 'למה צריך גם פרטיות וגם ציבוריות?',
      body: `<p>שלוש סיבות עיקריות:</p>
      <ul>
        <li><b>חיסכון בכתובות:</b> יש רק ~4.3 מיליארד כתובות IPv4. בבית עם 10 מכשירים צריך רק כתובת ציבורית <b>אחת</b> – השאר פרטיות.</li>
        <li><b>אבטחה:</b> מכשירים עם כתובות פרטיות לא נגישים ישירות מהאינטרנט.</li>
        <li><b>גמישות:</b> כל ארגון מחלק לעצמו כתובות פנימיות כרצונו, בלי לבקש מאף אחד.</li>
      </ul>
      <p>הקסם שמחבר ביניהם נקרא <b>NAT</b> – נלמד אותו מיד.</p>`,
      tip: 'כתובת ציבורית אחת + NAT = כל המשפחה מחוברת.',
      anim: (stage, ctx) => {
        const sim = new Sim(stage, ctx);
        const net = sim.dev('cloud', 'האינטרנט', null, 82, 40, { size: 60 });
        const rt = sim.dev('router', 'ראוטר ביתי', '84.229.10.5', 52, 40, { size: 56 });
        sim.zone(22, 48, 40, 74, 'רשת פרטית', '#3ddc97');
        sim.line(rt, net);
        const kinds = ['pc', 'laptop', 'phone', 'tablet', 'camera', 'printer', 'phone', 'pc'];
        const pos = [[10, 22], [28, 22], [10, 46], [28, 46], [10, 70], [28, 70], [18, 34], [18, 58]];
        let n = 0;
        const label = sim.label('🏠 0 מכשירים = כתובת ציבורית אחת', 50, 82);
        sim.caption('הוסיפו מכשירים לרשת הביתית. כולם משתמשים בכתובת הציבורית של הראוטר.');
        const add = async () => {
          if (n >= 8) return;
          const [x, y] = pos[n];
          const d = sim.dev(kinds[n], null, `192.168.1.${10 + n}`, x, y, { size: 38 });
          sim.line(d, rt, { color: 'rgba(120,255,180,.35)' });
          n++;
          label.textContent = `🏠 ${n} מכשירים = כתובת ציבורית אחת`;
          sfx('collect');
          sim.fly(d, rt, '', { ms: 700, color: '#3ddc97' });
          d.glow('#3ddc97');
        };
        sim.btn('➕ הוסף מכשיר', add);
        add(); add();
      },
      questions: [
        { tier: 1, type: 'mc', q: 'מדוע כתובות פרטיות חוסכות כתובות ציבוריות?', options: ['הרבה מכשירים חולקים כתובת ציבורית אחת', 'הן קטנות יותר', 'הן ממוחזרות מהאינטרנט', 'הן חינמיות לגמרי'], a: 0, why: 'כל המכשירים ברשת הפרטית יוצאים לאינטרנט תחת כתובת ציבורית אחת (NAT).' },
        { tier: 2, type: 'mc', q: 'איזה יתרון נוסף יש לכתובות פרטיות?', options: ['הן לא נגישות ישירות מהאינטרנט', 'הן מהירות יותר', 'הן מצפינות מידע אוטומטית', 'הן מחליפות את ה-MAC'], a: 0, why: 'ראוטרים באינטרנט לא מנתבים אליהן – יש בכך הגנה בסיסית.' },
      ],
    },
    {
      title: 'NAT – מתרגם הקסם',
      body: `<p><b>NAT</b> (Network Address Translation) הוא תהליך שבו הראוטר <b>מחליף כתובת פרטית בציבורית</b> כשהחבילה יוצאת, ומחזיר כשהתשובה חוזרת.</p>
      <ul>
        <li>הראוטר שומר <b>טבלת תרגום</b>: איזו כתובת פרטית (ופורט) הפכה לאיזה פורט ציבורי.</li>
        <li>כשהרבה מכשירים חולקים כתובת ציבורית אחת, מבדילים ביניהם לפי <b>פורט</b> – זה נקרא <b>PAT / Overload</b>.</li>
        <li>השרת באינטרנט רואה רק את <b>הכתובת הציבורית של הראוטר</b>.</li>
      </ul>`,
      tip: 'לחצו "צעד הבא" וקראו את הכיתוב בכל שלב.',
      anim: (stage, ctx) => {
        const sim = new Sim(stage, ctx);
        const pc = sim.dev('pc', 'המחשב שלי', '192.168.1.10', 12, 28, { size: 46 });
        const rt = sim.dev('router', 'ראוטר NAT', '84.229.10.5', 48, 28, { size: 52 });
        const srv = sim.dev('server', 'שרת (8.8.8.8)', '8.8.8.8', 86, 28, { size: 46 });
        sim.line(pc, rt); sim.line(rt, srv);
        const tbl = h('table', { class: 'nat-table' }, h('thead', {}, h('tr', {}, h('th', {}, 'Inside Local'), h('th', {}, 'Inside Global'), h('th', {}, 'Outside'))), h('tbody', {}));
        const box = h('div', { style: { position: 'absolute', left: '8%', right: '8%', top: '56%' } }, h('div', { class: 'sim-label', style: { marginBottom: '4px' } }, 'טבלת NAT בראוטר'), tbl);
        sim.layer.append(box);
        let step = 0, busy = false;
        sim.caption('המחשב רוצה לפנות לשרת 8.8.8.8 באינטרנט.');
        const steps = [
          async () => { sim.caption('1) המחשב שולח חבילה: מקור <code>192.168.1.10:51000</code> ← יעד <code>8.8.8.8:53</code>'); await sim.fly(pc, rt, '192.168.1.10 → 8.8.8.8', { ms: 1500, color: '#ff9a3a' }); },
          async () => { sim.caption('2) הראוטר מחליף את המקור לכתובת ציבורית ורושם בטבלה.'); rt.glow('#ffd35c'); tbl.tBodies[0].innerHTML = '<tr><td>192.168.1.10:51000</td><td>84.229.10.5:40001</td><td>8.8.8.8:53</td></tr>'; sfx('collect'); await ctx.wait(1500); },
          async () => { sim.caption('3) החבילה יוצאת עם מקור <code>84.229.10.5:40001</code> – כתובת ציבורית, מותר באינטרנט.'); await sim.fly(rt, srv, '84.229.10.5 → 8.8.8.8', { ms: 1500, color: '#4de1ff' }); srv.glow('#3ddc97'); },
          async () => { sim.caption('4) השרת עונה אל <code>84.229.10.5:40001</code> – הוא לא מכיר את הכתובת הפרטית.'); await sim.fly(srv, rt, '8.8.8.8 → 84.229.10.5', { ms: 1500, color: '#3ddc97' }); },
          async () => { sim.caption('5) הראוטר בודק בטבלה, מתרגם חזרה ל-192.168.1.10 ומעביר למחשב. ✔', 'good'); rt.glow('#ffd35c'); await ctx.wait(900); await sim.fly(rt, pc, '8.8.8.8 → 192.168.1.10', { ms: 1500, color: '#3ddc97' }); pc.glow('#3ddc97'); pc.say('קיבלתי תשובה!'); },
        ];
        const next = sim.btn('▶ צעד הבא', async () => {
          if (busy) return; busy = true;
          if (step >= steps.length) { step = 0; tbl.tBodies[0].innerHTML = ''; }
          await steps[step++]();
          next.textContent = step >= steps.length ? '↺ מההתחלה' : '▶ צעד הבא';
          busy = false;
        });
      },
      questions: [
        { tier: 1, type: 'mc', q: 'מה עושה NAT?', options: ['מתרגם כתובות פרטיות לציבוריות ולהפך', 'נותן כתובות IP אוטומטית', 'מתרגם שמות אתרים לכתובות', 'מצפין את התעבורה'], a: 0, why: 'NAT = Network Address Translation.', hint: 'Translation = תרגום.' },
        { tier: 2, type: 'mc', q: 'איזו כתובת מקור יראה שרת באינטרנט כשמחשב פרטי פונה אליו?', options: ['הכתובת הציבורית של הראוטר', 'הכתובת הפרטית של המחשב', 'כתובת ה-MAC', 'כתובת 0.0.0.0'], a: 0, why: 'ה-NAT החליף את המקור לכתובת הציבורית.' },
        { tier: 3, type: 'mc', q: 'במה מבדיל הראוטר בין מכשירים רבים שחולקים כתובת ציבורית אחת?', options: ['בפורטים (PAT)', 'בצבע הכבל', 'בכתובת ה-DNS', 'בגודל החבילה'], a: 0, why: 'PAT (Overload) – כל חיבור מקבל פורט ציבורי שונה.' },
      ],
    },
    {
      title: 'כתובות מיוחדות',
      body: `<p>יש כתובות שמורות שאין לתת לאף מכשיר רגיל:</p>
      <ul>
        <li>${C('127.0.0.1')} – <b>Loopback</b>: ״אני עצמי״. בודקים בעזרתה שמחסנית TCP/IP תקינה (${C('ping 127.0.0.1')}).</li>
        <li>${C('169.254.x.x')} – <b>APIPA</b>: מחשב נותן לעצמו כתובת כשלא מצא שרת DHCP.</li>
        <li>${C('0.0.0.0')} – ״כתובת לא ידועה / אין כתובת״.</li>
        <li>${C('255.255.255.255')} – <b>Broadcast</b> כללי.</li>
        <li>${C('224.0.0.0 – 239.255.255.255')} – <b>Multicast</b>.</li>
      </ul>
      <p>לחצו על הכרטיסים כדי להפוך אותם.</p>`,
      tip: 'ראיתם 169.254 במחשב? קודם כל בדקו אם שרת ה-DHCP עובד.',
      anim: (stage, ctx) => {
        const cards = [
          ['127.0.0.1', 'Loopback', 'כתובת הבדיקה העצמית. חבילה ששלחת אליה לא יוצאת מהמחשב – חוזרת אליו. <b>ping 127.0.0.1</b> בודק את כרטיס הרשת והתוכנה.'],
          ['169.254.x.x', 'APIPA', 'המחשב ביקש כתובת מ-DHCP ולא קיבל – אז הוא נותן לעצמו כתובת בטווח הזה. תקשורת רק מול מכשירים באותה רשת.'],
          ['0.0.0.0', 'לא מוגדר', 'משמשת כשלמכשיר עוד אין כתובת (למשל בשליחת DHCP Discover) או לציון ״כל הכתובות״.'],
          ['255.255.255.255', 'Broadcast כללי', 'הודעה לכל מי שנמצא ברשת המקומית. ראוטרים לא מעבירים אותה הלאה.'],
        ];
        const grid = h('div', { class: 'sp-grid' }, ...cards.map(([ip, name, text]) => {
          const c = h('div', { class: 'sp-card', onclick: () => { c.classList.toggle('flip'); sfx('click'); } },
            h('div', { class: 'sp-in' },
              h('div', { class: 'sp-f' }, h('b', {}, ip), h('small', {}, name), h('small', {}, '(לחצו להפוך)')),
              h('div', { class: 'sp-b', html: `<div><b>${name}</b><br>${text}</div>` })));
          return c;
        }));
        stage.innerHTML = '';
        stage.append(h('div', { class: 'sim' }, grid));
      },
      questions: [
        { tier: 1, type: 'mc', q: 'מחשב קיבל כתובת <code>169.254.10.5</code>. מה זה אומר כנראה?', options: ['לא נמצא שרת DHCP', 'המחשב מחובר לאינטרנט מהיר', 'זו כתובת ציבורית רגילה', 'המחשב כבוי'], a: 0, why: '169.254.x.x = APIPA, כתובת עצמית כשאין DHCP.' },
        { tier: 1, type: 'mc', q: 'איזו כתובת משמשת לבדיקה עצמית של המחשב?', options: ['127.0.0.1', '192.168.1.1', '8.8.8.8', '255.255.255.255'], a: 0, why: '127.0.0.1 – Loopback.' },
        { tier: 2, type: 'mc', q: 'מה זו כתובת 255.255.255.255?', options: ['Broadcast כללי', 'Loopback', 'כתובת ציבורית של גוגל', 'כתובת פרטית'], a: 0, why: 'הודעה לכל מי שברשת המקומית.' },
      ],
    },
  ],

  quiz: [
    { tier: 1, type: 'mc', q: 'מהו אחד הטווחים הפרטיים?', options: ['192.168.0.0/16', '192.169.0.0/16', '8.0.0.0/8', '200.0.0.0/8'], a: 0, why: 'RFC 1918: 10/8, 172.16/12, 192.168/16.' },
    { tier: 1, type: 'tf', q: 'כתובת פרטית ניתנת לניתוב ישירות באינטרנט.', a: false, why: 'ראוטרי האינטרנט לא מנתבים כתובות פרטיות.' },
    { tier: 1, type: 'mc', q: 'מי מקצה כתובות ציבוריות ללקוחות?', options: ['ה-ISP', 'שרת DHCP ביתי', 'יצרן הראוטר', 'המשתמש'], a: 0, why: 'ספק האינטרנט.' },
    { tier: 1, type: 'mc', q: 'מה פירוש NAT?', options: ['Network Address Translation', 'New Access Technology', 'Network Access Table', 'Node Allocation Tool'], a: 0, why: 'תרגום כתובות רשת.' },
    { tier: 1, type: 'mc', q: 'כתובת הבדיקה העצמית היא…', options: ['127.0.0.1', '1.1.1.1', '10.0.0.1', '169.254.0.1'], a: 0, why: 'Loopback.' },
    { tier: 2, type: 'mc', q: 'איזו כתובת היא <b>ציבורית</b>?', options: ['172.32.5.5', '172.20.5.5', '10.10.10.10', '192.168.50.1'], a: 0, why: '172.32 מחוץ לטווח 16–31.' },
    { tier: 2, type: 'mc', q: 'מה הראוטר רושם בטבלת NAT?', options: ['התאמה בין כתובת ופורט פרטיים לציבוריים', 'את סיסמת ה-Wi-Fi', 'את כתובות ה-MAC בלבד', 'את שמות האתרים'], a: 0, why: 'כך הוא יודע להחזיר תשובה למכשיר הנכון.' },
    { tier: 2, type: 'mc', q: 'מדוע IPv4 דרש פתרון כמו NAT?', options: ['הכתובות אזלו', 'כי הוא איטי', 'כי הוא לא מוצפן', 'כי יש לו יותר מדי ביטים'], a: 0, why: 'נגמרו הכתובות הציבוריות.' },
    { tier: 2, type: 'mc', q: 'כתובת 169.254.x.x נקראת…', options: ['APIPA', 'Loopback', 'Multicast', 'Broadcast'], a: 0, why: 'Automatic Private IP Addressing.' },
    { tier: 2, type: 'tf', q: 'שתי רשתות ביתיות שונות יכולות שתיהן להשתמש ב-192.168.1.0/24.', a: true, why: 'הן נפרדות, כל אחת מאחורי NAT.' },
    { tier: 3, type: 'mc', q: 'איזו כתובת <b>אינה</b> פרטית?', options: ['192.169.1.1', '10.200.1.1', '172.16.9.9', '192.168.100.100'], a: 0, why: '192.169 – ציבורית.' },
    { tier: 3, type: 'mc', q: 'מהו סימון הטווח הפרטי של 172.16.0.0 עד 172.31.255.255?', options: ['/12', '/16', '/8', '/24'], a: 0, why: '16 עד 31 = 16 ערכים = 4 ביטים של רשת נוספים ⇒ /12.' },
    { tier: 3, type: 'mc', q: 'איך מבחינים בין מכשירים רבים שיוצאים עם אותה כתובת ציבורית?', options: ['לפי פורטים (PAT)', 'לפי צבע', 'לפי כתובת MAC של הראוטר', 'אי אפשר להבדיל'], a: 0, why: 'PAT/Overload.' },
    { tier: 3, type: 'mc', q: 'חבילה ששלחת ל-127.0.0.1…', options: ['חוזרת למחשב עצמו', 'יוצאת לראוטר', 'מגיעה לגוגל', 'נשלחת בשידור'], a: 0, why: 'Loopback לא יוצא מהמחשב.' },
  ],

  game: {
    name: 'שומרי השער',
    intro: `<p>אתם שומרי השער של היער! כתובות IP נופלות אל השער – קבעו לכל אחת: <b>פרטית</b> (נשארת ביער) או <b>ציבורית</b> (יוצאת לעולם). לחצו על השער המתאים או השתמשו בחצים <kbd>←</kbd> <kbd>→</kbd>.</p>
    <p class="mini">ברמות גבוהות: מופיעות כתובות קרובות לגבול (172.15, 172.32, 192.169…) ושער <b>מיוחד</b> (↓) ל-Loopback, APIPA ועוד. יש 3 לבבות!</p>`,
    run: gateGame,
  },
};
