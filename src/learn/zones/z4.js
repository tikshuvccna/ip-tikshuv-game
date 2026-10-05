import { h, shuffle, pick } from '../../util.js';
import { Sim, icon, injectCss } from '../anim.js';
import { sfx } from '../../audio.js';
import { memoryGame } from '../games/g4.js';

injectCss('z4', `
.plan-bar{display:flex;width:94%;height:64px;border-radius:14px;overflow:hidden;direction:ltr;border:2px solid var(--line);margin:0 auto}
.plan-bar div{display:flex;flex-direction:column;align-items:center;justify-content:center;font-weight:800;font-size:12px;color:#0d1030;cursor:pointer;transition:filter .2s;text-align:center;line-height:1.2}
.plan-bar div:hover{filter:brightness(1.25)}
.plan-bar small{font:600 10.5px ui-monospace,monospace;opacity:.8}
.plan-info{margin:10px auto 0;width:94%;background:rgba(255,255,255,.08);border:1px solid var(--line);border-radius:14px;padding:10px 14px;text-align:center;font-size:14px;line-height:1.5;min-height:62px}
.sortgame{position:absolute;inset:0;padding:14px 14px 74px;display:flex;flex-direction:column;gap:12px;align-items:center;justify-content:center}
.sg-card{display:flex;gap:14px;align-items:center;background:linear-gradient(180deg,#fff8e4,#ecdcb0);color:#2b2140;border-radius:18px;border:3px solid #b89a5a;padding:12px 24px;min-width:70%;animation:fadeUp .3s}
.sg-card .ico{width:60px;height:60px}.sg-card b{font-size:20px}.sg-card small{display:block;opacity:.75}
.sg-btns{display:flex;gap:12px}
.sg-btns .btn{min-width:150px}
.sg-score{color:var(--gold);font-weight:800}
.pool-mini{display:grid;grid-template-columns:repeat(8,1fr);gap:4px;width:92%;direction:ltr}
.pool-mini i{height:22px;border-radius:5px;background:rgba(61,220,151,.35);border:1px solid rgba(61,220,151,.7);font:700 9.5px ui-monospace,monospace;display:flex;align-items:center;justify-content:center;font-style:normal;color:#dfffee;transition:all .4s}
.pool-mini i.use{background:rgba(108,139,255,.55);border-color:#6c8bff;color:#fff}
.conflict-pop{position:absolute;left:50%;top:44%;transform:translate(-50%,-50%);z-index:9;background:#fff;color:#a01530;border:3px solid #e0506a;border-radius:14px;padding:10px 18px;font-weight:900;box-shadow:0 10px 30px #000a;animation:fadeUp .3s;direction:ltr;text-align:center}
`);

const C = (t) => `<code>${t}</code>`;

export default {
  intro: `ברוכים הבאים לביצת הניצוצות! 🪷 כאן חיים שני סוגי כתובות: כאלה שנשארות <b>קבועות</b> כמו פסלי האבן, וכאלה שמתחלפות כמו הניצוצות הזוהרים. נלמד מה ההבדל בין כתובת <b>סטטית</b> ל<b>דינמית</b> ומתי משתמשים בכל אחת.`,

  steps: [
    {
      title: 'כתובת סטטית',
      body: `<p><b>כתובת סטטית</b> היא כתובת ש<b>מגדירים ידנית</b> במכשיר, והיא <b>לא משתנה</b> עד שמישהו משנה אותה.</p>
      <ul>
        <li>דורשת עבודה ידנית בכל מכשיר + תיעוד כדי לא לשכוח מי קיבל מה.</li>
        <li><b>יתרון:</b> יציבות – תמיד אפשר למצוא את המכשיר באותה כתובת.</li>
        <li><b>חיסרון:</b> טעויות אנוש וסכנת <b>התנגשות כתובות</b>; קשה לנהל בהרבה מכשירים.</li>
        <li><b>מתאימה ל:</b> שרתים, מדפסות רשת, ראוטרים (שער ברירת המחדל), מצלמות, שרתי DNS ו-DHCP.</li>
      </ul>`,
      tip: 'כל מי שאחרים תלויים בו – מקבל כתובת סטטית.',
      anim: (stage, ctx) => {
        const sim = new Sim(stage, ctx);
        const adm = sim.dev('user', 'מנהל הרשת', null, 12, 40, { size: 46 });
        const pr = sim.dev('printer', 'מדפסת', '— ללא —', 50, 22, { size: 50 });
        const sv = sim.dev('server', 'שרת אתר', '— ללא —', 50, 56, { size: 50 });
        const day = sim.label('יום 1', 86, 14, 'big');
        day.style.fontSize = '20px'; day.style.color = '#ffd35c';
        let d = 1, set = false;
        sim.caption('המנהל מגדיר ידנית כתובת למדפסת ולשרת.');
        sim.btn('⌨️ הגדר ידנית', async () => {
          if (set) return; set = true;
          adm.say('מגדיר… ⌨️');
          await sim.fly(adm, pr, '192.168.1.20', { ms: 1200, color: '#ffd35c' }); pr.setIp('192.168.1.20'); pr.glow();
          await sim.fly(adm, sv, '192.168.1.10', { ms: 1200, color: '#ffd35c' }); sv.setIp('192.168.1.10'); sv.glow();
          sim.caption('הכתובות הוגדרו. עכשיו נעביר ימים…');
        });
        sim.btn('📅 העבר יום', async () => {
          d++; day.textContent = `יום ${d}`; sfx('tick');
          if (set) { pr.glow('#3ddc97', 800); sv.glow('#3ddc97', 800); sim.caption(`יום ${d}: הכתובות <b>לא השתנו</b> – 192.168.1.20 ו-192.168.1.10. כך תמיד אפשר למצוא אותם.`, 'good'); }
          else sim.caption('קודם הגדירו כתובות 🙂');
        }, 'ghost');
      },
      questions: [
        { tier: 1, type: 'mc', q: 'מהי כתובת סטטית?', options: ['כתובת שמוגדרת ידנית ואינה משתנה', 'כתובת שניתנת אוטומטית ומשתנה', 'כתובת של האינטרנט כולו', 'כתובת בלי מסיכה'], a: 0, why: 'סטטית = ידנית וקבועה.' },
        { tier: 1, type: 'mc', q: 'איזה מכשיר מתאים לכתובת סטטית?', options: ['שרת / מדפסת רשת', 'טלפון של אורח', 'טאבלט זמני', 'שעון חכם'], a: 0, why: 'מכשירים שאחרים צריכים למצוא תמיד.' },
        { tier: 2, type: 'mc', q: 'מה חיסרון של כתובות סטטיות?', options: ['עבודה ידנית וסכנת התנגשות', 'הן משתנות כל יום', 'הן לא עובדות עם שרתים', 'הן איטיות'], a: 0, why: 'צריך להגדיר ולתעד ידנית.' },
      ],
    },
    {
      title: 'כתובת דינמית',
      body: `<p><b>כתובת דינמית</b> ניתנת <b>אוטומטית</b> על ידי <b>שרת DHCP</b> לזמן מוגבל (<b>Lease</b>) והיא עשויה להשתנות.</p>
      <ul>
        <li><b>יתרון:</b> אפס הגדרות ידניות, אין התנגשויות, ומחזירים כתובות למאגר כשהמכשיר עוזב.</li>
        <li><b>חיסרון:</b> הכתובת עשויה להשתנות – לא טובה למי שצריכים למצוא אותו תמיד.</li>
        <li><b>מתאימה ל:</b> מחשבים אישיים, מחשבים ניידים, טלפונים, טאבלטים ואורחים.</li>
      </ul>`,
      tip: 'Lease = השאלה זמנית של הכתובת.',
      anim: (stage, ctx) => {
        const sim = new Sim(stage, ctx);
        const dh = sim.dev('server', 'שרת DHCP', null, 14, 30, { size: 48 });
        const lap = sim.dev('laptop', 'מחשב נייד', 'ללא כתובת', 52, 22, { size: 48 });
        const guest = sim.dev('phone', 'אורח', null, 52, 60, { size: 44 });
        guest.style.opacity = 0;
        const pool = h('div', { class: 'pool-mini', style: { position: 'absolute', bottom: '24%', left: '4%' } });
        const cells = Array.from({ length: 16 }, (_, i) => h('i', {}, `.${100 + i}`));
        pool.append(...cells);
        sim.layer.append(pool);
        let used = [], day = 0, lapIdx = -1;
        sim.caption('לחצו "יום חדש" וצפו איך כתובות נלקחות ומוחזרות למאגר.');
        const take = (el) => { const free = cells.map((c, i) => i).filter((i) => !used.includes(i)); const i = pick(free); used.push(i); cells[i].classList.add('use'); return i; };
        const give = (i) => { used = used.filter((x) => x !== i); cells[i].classList.remove('use'); };
        sim.btn('📅 יום חדש', async () => {
          day++;
          if (lapIdx >= 0) give(lapIdx);
          await sim.fly(dh, lap, 'כתובת', { ms: 900, color: '#3ddc97' });
          lapIdx = take();
          lap.setIp(`192.168.1.${100 + lapIdx}`);
          sfx('collect');
          const g = Math.random() < 0.7;
          if (g) {
            guest.style.opacity = 1;
            const gi = take();
            await sim.fly(dh, guest, 'כתובת', { ms: 900, color: '#3ddc97' });
            guest.setIp(`192.168.1.${100 + gi}`); guest.say('שלום! 📱');
            await ctx.wait(1400);
            give(gi); guest.style.opacity = 0; guest.ipEl && (guest.ipEl.textContent = '');
          }
          sim.caption(`יום ${day}: המחשב קיבל <b>כתובת חדשה</b>. אורחים מקבלים כתובת זמנית ומחזירים אותה כשהולכים.`, 'good');
        });
      },
      questions: [
        { tier: 1, type: 'mc', q: 'מי נותן כתובות דינמיות?', options: ['שרת DHCP', 'שרת DNS', 'המשתמש ידנית', 'מתג'], a: 0, why: 'DHCP = Dynamic Host Configuration Protocol.' },
        { tier: 1, type: 'mc', q: 'איזה מכשיר מתאים לכתובת דינמית?', options: ['טלפון של אורח', 'שרת קבצים', 'ראוטר', 'מדפסת רשת משותפת'], a: 0, why: 'מכשירים זמניים וניידים – דינמית.' },
        { tier: 2, type: 'mc', q: 'מהו Lease?', options: ['משך הזמן שבו הכתובת מושאלת ללקוח', 'סוג של מסיכה', 'שם הרשת', 'פורט של DHCP'], a: 0, why: 'השכרה/השאלה לזמן מוגבל.' },
      ],
    },
    {
      title: 'מתי משתמשים במה?',
      body: `<p>כלל אצבע:</p>
      <table><tr><th></th><th>סטטית 📌</th><th>דינמית 🔄</th></tr>
      <tr><td>איך מקבלים</td><td>ידנית</td><td>אוטומטית (DHCP)</td></tr>
      <tr><td>משתנה?</td><td>לא</td><td>יכולה להשתנות</td></tr>
      <tr><td>ניהול</td><td>עמל ידני</td><td>קל וגמיש</td></tr>
      <tr><td>דוגמאות</td><td>שרת, מדפסת, ראוטר, מצלמה</td><td>מחשב, טלפון, טאבלט</td></tr></table>
      <p>תרגול מהיר בצד: בחרו לכל מכשיר איזו כתובת מתאימה לו.</p>`,
      tip: 'שאלו: האם אחרים צריכים למצוא את המכשיר הזה תמיד באותה כתובת?',
      anim: (stage, ctx) => {
        const items = [
          ['printer', 'מדפסת רשת במחלקה', 's', 'כולם מדפיסים אליה – חייבת כתובת קבועה'],
          ['laptop', 'מחשב נייד של מורה', 'd', 'נודד בין חדרים – דינמית'],
          ['server', 'שרת קבצים', 's', 'כולם ניגשים אליו – סטטית'],
          ['phone', 'טלפון של תלמיד', 'd', 'מתחבר ל-Wi-Fi לרגע – דינמית'],
          ['camera', 'מצלמת אבטחה בכניסה', 's', 'צופים בה מרחוק – סטטית'],
          ['router', 'ממשק הראוטר (שער)', 's', 'כולם מפנים אליו – סטטית'],
          ['tablet', 'טאבלט בספרייה', 'd', 'מתחלפים משתמשים – דינמית'],
        ];
        const order = shuffle(items);
        let i = 0, score = 0;
        const root = h('div', { class: 'sortgame' });
        stage.innerHTML = '';
        stage.append(h('div', { class: 'sim' }, root));
        const draw = () => {
          root.innerHTML = '';
          if (i >= order.length) {
            root.append(h('div', { class: 'sg-card' }, icon('scroll'), h('div', {}, h('b', {}, `סיימתם! ${score}/${order.length}`), h('small', {}, 'לחצו "הבא" כדי להמשיך לשאלות'))));
            return;
          }
          const [k, name, ans, why] = order[i];
          const fb = h('div', { class: 'sim-label', style: { minHeight: '40px', textAlign: 'center', whiteSpace: 'normal' } });
          const card = h('div', { class: 'sg-card' }, icon(k), h('div', {}, h('b', {}, name), h('small', {}, 'איזו כתובת מתאימה לו?')));
          const pick1 = (v) => {
            const ok = v === ans;
            if (ok) { score++; sfx('correct'); } else sfx('wrong');
            fb.innerHTML = `${ok ? '✔ נכון!' : '✘ לא בדיוק.'} ${why}`;
            fb.style.color = ok ? '#7dffb0' : '#ff8fa3';
            btns.querySelectorAll('button').forEach((b) => (b.disabled = true));
            setTimeout(() => { i++; draw(); }, 1700);
          };
          const btns = h('div', { class: 'sg-btns' }, h('button', { class: 'btn', onclick: () => pick1('s') }, '📌 סטטית'), h('button', { class: 'btn', style: { background: 'linear-gradient(180deg,#3fc78a,#1f9d62)' }, onclick: () => pick1('d') }, '🔄 דינמית'));
          root.append(h('div', { class: 'sg-score' }, `${i + 1}/${order.length}`), card, btns, fb);
        };
        draw();
      },
      questions: [
        { tier: 1, type: 'mc', q: 'לשרת קבצים שכולם ניגשים אליו מתאימה כתובת…', options: ['סטטית', 'דינמית', 'APIPA', 'Loopback'], a: 0, why: 'כדי שתמיד יימצא באותה כתובת.' },
        { tier: 1, type: 'mc', q: 'לטלפונים של אורחים בבית ספר מתאימה כתובת…', options: ['דינמית', 'סטטית', 'שני הסוגים באותה מידה, תמיד ידנית', 'אין צורך בכתובת'], a: 0, why: 'מכשירים זמניים – DHCP.' },
        { tier: 2, type: 'mc', q: 'מדוע ראוטר (שער ברירת מחדל) מקבל כתובת סטטית?', options: ['כל המכשירים מוגדרים לפנות אליו בכתובת ידועה', 'כי הוא איטי', 'כי אסור לו DHCP', 'כדי שיתחמם פחות'], a: 0, why: 'שער ברירת המחדל חייב להיות כתובת יציבה.' },
      ],
    },
    {
      title: 'בעיות נפוצות: התנגשות כתובות',
      body: `<p>מה קורה כששני מכשירים מקבלים <b>אותה כתובת</b>? <b>התנגשות IP</b> – שניהם מאבדים קישוריות!</p>
      <ul>
        <li>קורה כשמגדירים ידנית כתובת שנמצאת בתוך <b>טווח ה-DHCP</b>, ושרת ה-DHCP נותן אותה לעוד מכשיר.</li>
        <li><b>פתרון:</b> לתכנן את הרשת – טווח לסטטיות <b>מחוץ</b> לטווח ה-DHCP, או <b>להחריג</b> כתובות סטטיות מהמאגר.</li>
        <li>בעיה נוספת: <b>מאגר מלא</b> – אין כתובות פנויות והמכשיר החדש לא מקבל כלום (APIPA).</li>
      </ul>`,
      tip: 'חלון "Windows has detected an IP address conflict" = התנגשות כתובות.',
      anim: (stage, ctx) => {
        const sim = new Sim(stage, ctx);
        const dh = sim.dev('server', 'שרת DHCP', 'מאגר: .50–.100', 14, 28, { size: 46 });
        const pr = sim.dev('printer', 'מדפסת (סטטית)', '192.168.1.50', 52, 18, { size: 48 });
        const lap = sim.dev('laptop', 'מחשב נייד חדש', null, 52, 56, { size: 48 });
        let phase = 0;
        sim.caption('מנהל הגדיר למדפסת ידנית 192.168.1.50 – בטעות בתוך טווח ה-DHCP (50–100).');
        const b = sim.btn('▶ הדגם', async () => {
          if (phase === 0) {
            sim.caption('המחשב החדש מבקש כתובת ושרת ה-DHCP (שלא יודע על המדפסת) נותן לו את הראשונה הפנויה: .50');
            await sim.fly(dh, lap, '192.168.1.50', { ms: 1400, color: '#ffd35c' });
            lap.setIp('192.168.1.50');
            const pop = h('div', { class: 'conflict-pop' }, '⚠ IP address conflict\n192.168.1.50');
            pop.style.whiteSpace = 'pre';
            sim.layer.append(pop);
            pr.shake(); lap.shake(); sfx('wrong');
            sim.caption('<b>התנגשות!</b> שני מכשירים עם אותה כתובת – שניהם מתקשים לתקשר.', 'bad');
            setTimeout(() => pop.remove(), 3000);
            b.textContent = '🛠 תקן';
            phase = 1;
          } else if (phase === 1) {
            sim.caption('התיקון: מחריגים את .50 מהמאגר (excluded-address) או מעבירים את המדפסת לכתובת מחוץ לטווח, וכך שרת ה-DHCP לא ייתן אותה.');
            dh.setIp('מאגר: .51–.100'); dh.glow('#3ddc97');
            await sim.fly(dh, lap, '192.168.1.51', { ms: 1400, color: '#3ddc97' });
            lap.setIp('192.168.1.51'); lap.glow('#3ddc97'); pr.glow('#3ddc97');
            sim.caption('כל מכשיר עם כתובת ייחודית – הכול עובד. ✔', 'good');
            b.textContent = '↺ מההתחלה'; phase = 2;
          } else { lap.setIp(''); dh.setIp('מאגר: .50–.100'); phase = 0; b.textContent = '▶ הדגם'; sim.caption(''); }
        });
      },
      questions: [
        { tier: 1, type: 'mc', q: 'מה זו התנגשות כתובות IP?', options: ['שני מכשירים עם אותה כתובת ברשת', 'ראוטר שמתחמם', 'חבילה שאבדה', 'סיסמה שגויה'], a: 0, why: 'כתובת חייבת להיות ייחודית ברשת.' },
        { tier: 2, type: 'mc', q: 'איך מונעים התנגשות בין כתובת סטטית לשרת DHCP?', options: ['מחריגים את הכתובות הסטטיות מהמאגר', 'מכבים את כל המכשירים', 'מחליפים כבלים', 'משתמשים בכתובת פרטית בלבד'], a: 0, why: 'excluded-address, או סטטיות מחוץ לטווח המאגר.' },
        { tier: 3, type: 'mc', q: 'מה יקרה למחשב חדש כשהמאגר של DHCP מלא?', options: ['לא יקבל כתובת (ובווינדוס – APIPA)', 'יקבל כתובת ציבורית', 'ייקח כתובת של מחשב אחר', 'יצפין את המאגר'], a: 0, why: 'אין כתובות פנויות – אין הקצאה.' },
      ],
    },
    {
      title: 'תכנון נכון של הרשת',
      body: `<p>תכנון טוב מחלק את מרחב הכתובות לאזורים:</p>
      <ul>
        <li>תחילת הטווח: ראוטרים ושרתים (סטטי).</li>
        <li>אחר כך: מדפסות ומצלמות (סטטי).</li>
        <li>הטווח הגדול: <b>מאגר DHCP</b> לכל המחשבים והטלפונים.</li>
        <li>סוף הטווח: רזרבה לעתיד.</li>
      </ul>
      <p>לחצו על כל חלק בסרגל כדי לקרוא עליו.</p>`,
      tip: 'כותבים תרשים כתובות – ״מי ומה בכל טווח״.',
      anim: (stage, ctx) => {
        const parts = [
          ['.1 – .10', 'ראוטרים ושרתים', 'סטטי', '#6c8bff', 10, 'הכתובת .1 היא בדרך כלל שער ברירת המחדל. שרתים חשובים כאן.'],
          ['.11 – .20', 'מדפסות ומצלמות', 'סטטי', '#8fb0ff', 10, 'התקני רשת קבועים שצריך למצוא תמיד.'],
          ['.21 – .200', 'מאגר DHCP', 'דינמי', '#3ddc97', 60, 'כאן שרת ה-DHCP מחלק כתובות לכל המכשירים הרגילים.'],
          ['.201 – .254', 'רזרבה', 'עתידי', '#ffd35c', 20, 'שמור להרחבות עתידיות.'],
        ];
        const bar = h('div', { class: 'plan-bar' }, ...parts.map(([r, n, t, c, w], i) => h('div', { style: { width: w + '%', background: c }, onclick: () => show(i) }, n, h('small', {}, r))));
        const info = h('div', { class: 'plan-info' }, 'רשת 192.168.1.0/24 – לחצו על חלק.');
        const show = (i) => { const p = parts[i]; info.innerHTML = `<b>${p[1]}</b> (${p[0]}) – <b>${p[2]}</b><br>${p[5]}`; sfx('click'); };
        stage.innerHTML = '';
        stage.append(h('div', { class: 'sim', style: { display: 'flex', flexDirection: 'column', justifyContent: 'center' } }, bar, info));
      },
      questions: [
        { tier: 1, type: 'mc', q: 'איפה כדאי להגדיר כתובות סטטיות לעומת מאגר ה-DHCP?', options: ['מחוץ לטווח המאגר (או מוחרגות ממנו)', 'בדיוק בתוך המאגר', 'אין חשיבות', 'בטווח הציבורי'], a: 0, why: 'כך אין התנגשויות.' },
        { tier: 2, type: 'tf', q: 'שרתים ומדפסות רשת מקבלים בדרך כלל כתובות דינמיות.', a: false, why: 'הם צריכים כתובות יציבות – סטטיות.' },
      ],
    },
  ],

  quiz: [
    { tier: 1, type: 'mc', q: 'כתובת שמוגדרת ידנית ואינה משתנה נקראת…', options: ['סטטית', 'דינמית', 'ציבורית', 'מיוחדת'], a: 0, why: 'סטטית.' },
    { tier: 1, type: 'mc', q: 'כתובת שמתקבלת אוטומטית משרת DHCP נקראת…', options: ['דינמית', 'סטטית', 'MAC', 'Loopback'], a: 0, why: 'דינמית.' },
    { tier: 1, type: 'mc', q: 'איזה התקן יקבל בדרך כלל כתובת סטטית?', options: ['שרת', 'טלפון אורח', 'טאבלט', 'מחשב נייד'], a: 0, why: 'שרתים קבועים.' },
    { tier: 1, type: 'tf', q: 'באמצעות DHCP לא צריך להגדיר כתובת ידנית בכל מחשב.', a: true, why: 'זה היתרון המרכזי.' },
    { tier: 1, type: 'mc', q: 'איזה מכשיר מתאים לכתובת דינמית?', options: ['מחשב נייד של תלמיד', 'שרת אתר', 'ראוטר', 'מצלמת אבטחה לצפייה מרחוק'], a: 0, why: 'מכשיר ניד – דינמית.' },
    { tier: 2, type: 'mc', q: 'מה יתרון עיקרי לכתובת סטטית?', options: ['יציבות – אותה כתובת תמיד', 'חיסכון בעבודה', 'אין צורך בתיעוד', 'מונעת התנגשות אוטומטית'], a: 0, why: 'תמיד אותה כתובת.' },
    { tier: 2, type: 'mc', q: 'מה גורם להתנגשות כתובות IP?', options: ['שני מכשירים עם אותה כתובת', 'מסיכה שגויה בלבד', 'כבל חסר', 'DNS איטי'], a: 0, why: 'כפילות כתובת.' },
    { tier: 2, type: 'mc', q: 'מהו פתרון נכון להתנגשות בין מדפסת סטטית למאגר DHCP?', options: ['להחריג את כתובת המדפסת מהמאגר', 'לכבות את המדפסת', 'להוריד את המסיכה', 'להחליף את הראוטר'], a: 0, why: 'excluded-address.' },
    { tier: 2, type: 'mc', q: 'מהו Lease ב-DHCP?', options: ['משך הזמן שהכתובת מושאלת', 'שם השרת', 'סוג הכבל', 'כתובת ה-DNS'], a: 0, why: 'לזמן מוגבל.' },
    { tier: 2, type: 'tf', q: 'כתובת דינמית יכולה להשתנות בין חיבור לחיבור.', a: true, why: 'לכן לא מתאימה לשרתים.' },
    { tier: 3, type: 'mc', q: 'איזו תכנון כתובות נכון ב-/24?', options: ['סטטיות בתחילת הטווח, מאגר DHCP אחריהן', 'כל הכתובות דינמיות כולל ראוטר', 'המאגר כולל את כתובת הראוטר', 'סטטיות בתוך המאגר ללא החרגה'], a: 0, why: 'מונע התנגשויות.' },
    { tier: 3, type: 'mc', q: 'מדוע שרת DHCP עצמו מקבל כתובת סטטית?', options: ['כדי שהלקוחות והראוטר יוכלו להפנות אליו בכתובת ידועה', 'כי הוא לא יכול לקבל DHCP בכלל', 'כי זה מהיר יותר', 'כדי לחסוך חשמל'], a: 0, why: 'שירותי תשתית דורשים כתובת יציבה.' },
    { tier: 3, type: 'mc', q: 'מחשב חדש לא קיבל כתובת והראה 169.254.x.x. מה סביר?', options: ['שרת DHCP לא זמין או מאגר מלא', 'הכתובת ציבורית', 'המחשב קיבל כתובת סטטית', 'הראוטר מצויין'], a: 0, why: 'APIPA.' },
  ],

  game: {
    name: 'זיכרון הקסם',
    intro: `<p>קלפי הביצה הפוכים! כל מכשיר מתאים לקלף <b>סוג הכתובת והסיבה</b> שלו (סטטית 📌 או דינמית 🔄). הפכו שני קלפים כל פעם ומצאו את כל הזוגות.</p>
    <p class="mini">בהתחלה מציצים לרגע בקלפים – נצלו את הזמן! ברמה הגבוהה יש גם הגבלת זמן.</p>`,
    run: memoryGame,
  },
};
