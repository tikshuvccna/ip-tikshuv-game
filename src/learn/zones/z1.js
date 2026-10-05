import { h } from '../../util.js';
import { Sim, bitCells, icon, injectCss } from '../anim.js';
import { sfx } from '../../audio.js';
import { bin8 } from '../ip.js';
import { runeGame } from '../games/g1.js';

injectCss('z1', `
.bitsim{display:flex;flex-direction:column;gap:14px;align-items:center;justify-content:center;height:100%;padding:10px 10px 70px;container-type:inline-size}
.bits{display:flex;align-items:center;gap:2px;direction:ltr;flex-wrap:nowrap;width:100%;justify-content:center}
.bit{flex:1 1 0;min-width:0;max-width:26px;aspect-ratio:.72;display:inline-flex;align-items:center;justify-content:center;border-radius:5px;font:700 clamp(9px,2.4cqw,16px) ui-monospace,Menlo,monospace;background:rgba(255,255,255,.1);color:#cfd6ff;border:1px solid rgba(255,255,255,.18);transition:all .3s}
.bit.b1{background:linear-gradient(180deg,#ffe28a,#f5a623);color:#2b1b00;border-color:#ffd35c;box-shadow:0 0 10px rgba(255,211,92,.55)}
.bit.hid{opacity:0;transform:scale(.4)}
.bit.q{color:#7380c9}
.bit[data-kind=net]{box-shadow:0 0 0 2px #6c8bff inset}
.bit[data-kind=host]{box-shadow:0 0 0 2px #3ddc97 inset}
.bit-dot{color:#ffd35c;font:900 22px sans-serif;margin:0 2px;align-self:flex-end;transition:opacity .4s}
.bs-oct{display:flex;gap:10px;direction:ltr}
.bs-oct div{flex:1;min-width:70px;text-align:center;padding:8px 10px;border-radius:12px;background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.15);transition:all .4s;opacity:.25}
.bs-oct div.on{opacity:1;background:rgba(77,225,255,.15);border-color:#4de1ff}
.bs-oct b{display:block;font:900 clamp(20px,3vw,34px) 'Secular One',sans-serif;color:#fff;direction:ltr}
.bs-oct small{color:#aeb7ff;font-size:12px}
.weights{display:flex;gap:6px;direction:ltr}
.weights span{width:clamp(34px,5vw,52px);text-align:center;color:#ffd35c;font:700 clamp(11px,1.5vw,15px) ui-monospace,monospace}
.togglebits{display:flex;gap:6px;direction:ltr}
.tbit{width:clamp(34px,5vw,52px);height:clamp(48px,7vw,70px);border-radius:12px;border:2px solid rgba(255,255,255,.25);background:rgba(255,255,255,.08);color:#9aa5ea;font:900 clamp(20px,3vw,30px) ui-monospace,monospace;cursor:pointer;transition:all .2s}
.tbit.on{background:linear-gradient(180deg,#ffe28a,#f5a623);color:#2b1b00;border-color:#ffd35c;box-shadow:0 0 18px rgba(255,211,92,.7);transform:translateY(-4px)}
.bigsum{font:900 clamp(34px,6vw,64px) 'Secular One',sans-serif;color:#fff;direction:ltr;text-shadow:0 0 22px rgba(77,225,255,.7)}
.eqn{direction:ltr;color:#cfd6ff;font:600 clamp(13px,1.7vw,18px) ui-monospace,monospace;min-height:26px;text-align:center}
.conv-lines{direction:ltr;font:600 14px ui-monospace,monospace;color:#cfd6ff;display:flex;flex-direction:column;gap:3px;align-items:center;min-height:120px}
.conv-lines div{opacity:0;animation:fadeUp .4s forwards}
.conv-lines .y{color:#ffd35c}.conv-lines .n{color:#8791d8}
.jar{border:2px solid rgba(255,255,255,.3);border-radius:16px;padding:10px;background:rgba(255,255,255,.05);text-align:center;flex:1}
.jar h4{margin:0 0 6px;color:#fff;font-size:14px}
.jar-grid{display:grid;grid-template-columns:repeat(20,1fr);gap:2px}
.jar-grid i{aspect-ratio:1;border-radius:2px;background:rgba(255,255,255,.1);transition:background .3s}
.jar-grid i.f{background:#ff7a8a}
.jar-grid i.g{background:#3ddc97;animation:pulse 2s infinite}
.jar b{display:block;margin-top:6px;color:#ffd35c;font:700 12px ui-monospace,monospace;direction:ltr;word-break:break-all}
.jars{display:flex;gap:14px;width:100%;padding:8px}
.nic{display:flex;gap:6px;align-items:center;justify-content:center;background:rgba(0,0,0,.35);border-radius:10px;padding:4px 10px;font:600 12px ui-monospace,monospace;direction:ltr;color:#9ae3b0;margin-top:4px;white-space:nowrap}
`);

const C = (t) => `<code>${t}</code>`;

export default {
  intro: `ברוכים הבאים למגדל הכתובות! 🗼 כאן מתחיל המסע. כל ינשוף בממלכה יודע לאן לעוף כי על כל מכתב כתובה <b>כתובת</b>. גם ברשת מחשבים – בלי כתובת אין תקשורת. נגלה מה זו כתובת IP, איך היא בנויה, ואיך קוראים אותה בבינארי ובעשרוני.`,

  steps: [
    {
      title: 'למה צריך כתובת?',
      body: `<p>דמיינו שאתם שולחים מכתב בינשוף – בלי כתובת על המעטפה, הינשוף לא ידע לאן לעוף. ברשת מחשבים זה בדיוק אותו עיקרון:</p>
      <ul>
        <li><b>כתובת IP</b> (Internet Protocol) היא <b>כתובת לוגית</b> שמזהה כל מכשיר ברשת – מחשב, טלפון, מדפסת, שרת או מצלמה.</li>
        <li>המידע נשלח ברשת ב״חבילות״. על כל חבילה כתובות <b>מקור</b> (מי שולח) ו<b>יעד</b> (למי).</li>
        <li>הראוטרים והמתגים קוראים את כתובת היעד ומחליטים לאן להעביר את החבילה.</li>
        <li>בלי כתובת – המכשיר לא יכול לשלוח ולא לקבל מידע.</li>
      </ul>`,
      tip: 'כתובת IP היא כמו כתובת מגורים: היא אומרת איפה המכשיר נמצא ברשת.',
      anim: (stage, ctx) => {
        const sim = new Sim(stage, ctx);
        const tower = sim.dev('castle', 'מגדל השליחים', null, 12, 50, { size: 70 });
        const a = sim.dev('pc', 'מחשב א׳', '192.168.1.10', 58, 16);
        const p = sim.dev('printer', 'מדפסת', '192.168.1.12', 84, 42);
        const s = sim.dev('server', 'שרת', '192.168.1.20', 58, 66);
        const owl = sim.dev('owl', '', null, 12, 50, { size: 44, cls: 'owl' });
        const targets = [[a, '192.168.1.10', 'מחשב א׳'], [p, '192.168.1.12', 'מדפסת'], [s, '192.168.1.20', 'שרת']];
        const hasIp = new Map(targets.map(([d, ip]) => [d, ip]));
        let busy = false;
        sim.caption('בחרו יעד: הינשוף ייקח מכתב שעליו כתובת היעד, ויעוף אליו.');
        const send = async (d) => {
          if (busy) return;
          busy = true;
          const ip = hasIp.get(d);
          sim.caption(ip ? `הינשוף קורא את הכתובת <code>${ip}</code> ומתעופף אליה…` : 'למכשיר הזה אין כתובת… לאן הינשוף יעוף?');
          sfx('owl');
          if (ip) {
            await sim.fly(owl, d, `✉ ${ip}`, { ms: 1500, color: '#ffd35c' });
            d.glow('#3ddc97');
            d.say('קיבלתי! ✔');
            sim.caption(`המכתב הגיע ליעד כי הכתובת <code>${ip}</code> זיהתה אותו.`, 'good');
            await sim.moveTo(owl, 12, 50, 900);
          } else {
            await sim.moveTo(owl, (d._x + 12) / 2, (d._y + 50) / 2, 900);
            owl.say('❓ לאן?', 1600);
            d.shake();
            sim.caption('בלי כתובת אי אפשר לדעת איפה המכשיר – המכתב חוזר. <b>לכל מכשיר ברשת חייבת להיות כתובת.</b>', 'bad');
            await sim.moveTo(owl, 12, 50, 800);
          }
          busy = false;
        };
        targets.forEach(([d, , name]) => sim.btn('✉ שלח אל ' + name, () => send(d)));
        const tog = sim.btn('🧹 מחק את הכתובת מהמדפסת', () => {
          if (hasIp.get(p)) { hasIp.set(p, null); p.setIp('— ללא כתובת —'); tog.textContent = '✨ החזר כתובת למדפסת'; }
          else { hasIp.set(p, '192.168.1.12'); p.setIp('192.168.1.12'); tog.textContent = '🧹 מחק את הכתובת מהמדפסת'; }
        }, 'ghost');
      },
      questions: [
        { tier: 1, type: 'mc', q: 'מה תפקידה של כתובת IP?', options: ['לזהות מכשיר ברשת כדי שהמידע יגיע אליו', 'להגביר את מהירות החיבור', 'להגן על המחשב מוירוסים', 'לשמור קבצים בענן'], a: 0, why: 'כתובת IP מזהה מכשיר ברשת, ובזכותה אפשר לשלוח אליו מידע.', hint: 'חשבו על כתובת מגורים על מעטפה.' },
        { tier: 2, type: 'mc', q: 'אילו כתובות כתובות על כל חבילת מידע?', options: ['רק כתובת היעד', 'כתובת מקור וכתובת יעד', 'רק כתובת המקור', 'כתובת הראוטר בלבד'], a: 1, why: 'כל חבילה נושאת מי שלח (מקור) ולמי היא מיועדת (יעד).' },
      ],
    },
    {
      title: 'כתובת IP היא מספר בן 32 ביט',
      body: `<p>כתובת <b>IPv4</b> בנויה מ-<b>32 ביטים</b> (ספרות בינאריות: 0 או 1). כדי שיהיה נוח לקרוא, מחלקים אותם ל-<b>4 קבוצות של 8 ביטים</b>, שנקראות <b>בתים</b> או <b>אוקטטים</b>, ומציגים כל קבוצה כמספר עשרוני, כשביניהן נקודות. זה נקרא <b>Dotted Decimal</b>.</p>
      <ul>
        <li>דוגמה: ${C('192.168.10.5')}</li>
        <li>אוקטט אחד = 8 ביטים ⇒ ${C('2⁸ = 256')} ערכים אפשריים, כלומר <b>0 עד 255</b>.</li>
        <li>לכן ${C('192.168.1.256')} <b>אינה</b> כתובת תקינה!</li>
      </ul>`,
      tip: '4 אוקטטים × 8 ביטים = 32 ביטים. זכרו: 4 × 8 = 32.',
      anim: (stage, ctx) => {
        const root = h('div', { class: 'bitsim' });
        stage.innerHTML = '';
        stage.append(root);
        const bitsArr = '11000000101010000000101000000101'.split('');
        const holder = h('div', { style: { width: '100%' } });
        root.append(holder);
        const octs = h('div', { class: 'bs-oct' });
        const vals = [192, 168, 10, 5];
        const octEls = vals.map((v, i) => h('div', {}, h('small', {}, `אוקטט ${i + 1}`), h('b', {}, '?'), h('small', {}, '8 ביטים')));
        octs.append(...octEls);
        const dec = h('div', { class: 'bigsum' }, '');
        const cap = h('div', { class: 'sim-caption on' });
        root.append(octs, dec, cap, h('div', { class: 'sim-controls' }, h('button', { class: 'btn small', onclick: () => run() }, '↻ הפעל שוב')));
        let token = 0;
        const run = async () => {
          const my = ++token;
          const ok = () => ctx.alive && my === token;
          holder.innerHTML = '';
          octEls.forEach((o, i) => { o.classList.remove('on'); o.querySelector('b').textContent = '?'; });
          dec.textContent = '';
          const { cells, wrap } = bitCells(holder, bitsArr.map(() => '?'));
          cells.forEach((c) => { c.classList.remove('b0', 'b1'); c.classList.add('q', 'hid'); });
          const dots = wrap.querySelectorAll('.bit-dot');
          dots.forEach((d) => (d.style.opacity = 0));
          cap.innerHTML = 'כתובת IPv4 מתחילה כ-32 תאים ריקים – 32 ביטים…';
          for (let i = 0; i < 32; i++) {
            if (!ok()) return;
            cells[i].classList.remove('hid');
            if (i % 4 === 0) sfx('tick');
            await ctx.wait(45);
          }
          await ctx.wait(500);
          cap.innerHTML = 'מחלקים ל-<b>4 קבוצות של 8 ביטים</b> – אוקטטים, ומפרידים בנקודות.';
          dots.forEach((d) => (d.style.opacity = 1));
          octEls.forEach((o) => o.classList.add('on'));
          await ctx.wait(1200);
          if (!ok()) return;
          cap.innerHTML = 'כל ביט מקבל ערך: 0 או 1…';
          for (let i = 0; i < 32; i++) {
            if (!ok()) return;
            cells[i].textContent = bitsArr[i];
            cells[i].className = 'bit q b' + bitsArr[i];
            cells[i].classList.remove('q');
            await ctx.wait(35);
          }
          await ctx.wait(500);
          cap.innerHTML = 'ומתרגמים כל אוקטט למספר עשרוני (0–255):';
          for (let i = 0; i < 4; i++) {
            if (!ok()) return;
            octEls[i].querySelector('b').textContent = vals[i];
            octEls[i].classList.add('on');
            sfx('collect');
            dec.textContent = vals.slice(0, i + 1).join('.') + (i < 3 ? '.' : '');
            await ctx.wait(700);
          }
          cap.innerHTML = '<b>192.168.10.5</b> – כך נראית כתובת IP אמיתית!';
        };
        run();
      },
      questions: [
        { tier: 1, type: 'mc', q: 'כמה ביטים יש בכתובת IPv4?', options: ['8', '16', '32', '128'], a: 2, why: 'כתובת IPv4 היא 32 ביטים: 4 אוקטטים × 8 ביטים.', hint: '4 אוקטטים, בכל אחד 8 ביטים.' },
        { tier: 1, type: 'tf', q: 'הכתובת <code>192.168.1.256</code> היא כתובת IPv4 תקינה.', a: false, why: 'אוקטט יכול להיות עד 255 בלבד (8 ביטים: 0–255), לכן 256 אינו תקין.' },
        { tier: 2, type: 'mc', q: 'כמה ערכים שונים יכול לקבל אוקטט אחד?', options: ['255', '256', '128', '100'], a: 1, why: '2⁸ = 256 ערכים: מ-0 ועד 255.' },
      ],
    },
    {
      title: 'מעבר בין בינארי לעשרוני',
      body: `<p>מחשבים מדברים בבינארי. כל ביט באוקטט שווה ל<b>משקל</b>, כמו מטבעות בקופה:</p>
      <p><code>128 &nbsp;64 &nbsp;32 &nbsp;16 &nbsp;8 &nbsp;4 &nbsp;2 &nbsp;1</code></p>
      <ul>
        <li><b>בינארי ← עשרוני:</b> מחברים את המשקלים של הביטים הדולקים (1). למשל <code>11000000</code> = 128 + 64 = <b>192</b>.</li>
        <li><b>עשרוני ← בינארי:</b> עוברים משמאל לימין – אם המשקל קטן או שווה למה שנשאר, כותבים 1 ומחסרים אותו; אחרת כותבים 0.</li>
      </ul>
      <p>נסו בעצמכם: לחצו על הביטים וצפו בסכום!</p>`,
      tip: 'כשכל 8 הביטים דולקים: 128+64+32+16+8+4+2+1 = 255 – המספר הגדול ביותר באוקטט.',
      stageTitle: '🔬 מחשבון רונות',
      anim: (stage, ctx) => {
        const root = h('div', { class: 'bitsim' });
        stage.innerHTML = '';
        stage.append(root);
        const W = [128, 64, 32, 16, 8, 4, 2, 1];
        const weights = h('div', { class: 'weights' }, ...W.map((w) => h('span', {}, w)));
        const bits = W.map(() => h('button', { class: 'tbit' }, '0'));
        bits.forEach((b2) => b2.addEventListener('click', () => { b2.classList.toggle('on'); sfx('click'); upd(); }));
        const row = h('div', { class: 'togglebits' }, ...bits);
        const eq = h('div', { class: 'eqn' });
        const sum = h('div', { class: 'bigsum' }, '0');
        const lines = h('div', { class: 'conv-lines' });
        const inp = h('input', { type: 'number', min: 0, max: 255, placeholder: 'מספר 0–255', class: 'q-input small', dir: 'ltr' });
        inp.addEventListener('keydown', (e) => e.stopPropagation());
        const upd = () => {
          let t = 0; const parts = [];
          bits.forEach((bt, i) => { const on = bt.classList.contains('on'); bt.textContent = on ? '1' : '0'; if (on) { t += W[i]; parts.push(W[i]); } });
          sum.textContent = t;
          eq.textContent = parts.length ? parts.join(' + ') + ' = ' + t : 'כל הביטים כבויים = 0';
        };
        const setValue = async (n) => {
          let rest = n;
          lines.innerHTML = '';
          for (let i = 0; i < 8; i++) {
            if (!ctx.alive) return;
            const take = rest >= W[i];
            bits[i].classList.toggle('on', take);
            const line = h('div', { class: take ? 'y' : 'n' }, take ? `${W[i]} ≤ ${rest}  ✔  →  bit = 1   (rest = ${rest - W[i]})` : `${W[i]} > ${rest}  ✘  →  bit = 0`);
            lines.append(line);
            if (take) rest -= W[i];
            upd();
            sfx('tick');
            await ctx.wait(420);
          }
        };
        const ex = h('div', { class: 'sim-controls static' },
          ...[192, 168, 10, 255].map((n) => h('button', { class: 'btn small', onclick: () => setValue(n) }, `המר ${n}`)),
          inp, h('button', { class: 'btn small gold', onclick: () => { const n = Math.max(0, Math.min(255, +inp.value || 0)); setValue(n); } }, 'המר'));
        root.append(weights, row, eq, sum, lines, ex);
        upd();
        setValue(172);
      },
      questions: [
        { tier: 1, type: 'input', q: 'מהו הערך העשרוני של <code>00001010</code>?', answer: '10', why: '8 + 2 = 10.', hint: 'רק הביטים של 8 ושל 2 דולקים.', placeholder: 'מספר' },
        { tier: 2, type: 'mc', q: 'מהי הכתובת <code>172</code> בבינארי?', options: ['10101100', '10110010', '11001010', '10011100'], a: 0, keepOrder: false, why: '172 = 128 + 32 + 8 + 4 ⇒ 10101100.', hint: 'התחילו מ-128: 172−128=44, אחר כך 32, 8 ו-4.' },
        { tier: 3, type: 'input', q: 'הקלד את הערך העשרוני של האוקטט <code>11000000</code>', answer: '192', why: '128 + 64 = 192.', placeholder: 'מספר' },
        { tier: 3, type: 'mc', q: 'מהו האוקטט הבינארי של המספר 255?', options: ['11111111', '11111110', '10000000', '01111111'], a: 0, why: 'כל הביטים דולקים: 128+64+32+16+8+4+2+1=255.' },
      ],
    },
    {
      title: 'כתובת IP מול כתובת MAC',
      body: `<p>לכל כרטיס רשת יש שתי כתובות:</p>
      <ul>
        <li><b>כתובת MAC</b> – כתובת <b>פיזית</b> של 48 ביט (בהקסדצימלי, כמו ${C('00-1A-2B-3C-4D-5E')}). נצרבת בכרטיס על ידי היצרן ולא משתנה.</li>
        <li><b>כתובת IP</b> – כתובת <b>לוגית</b>. היא תלויה ב<b>רשת</b> שאליה מחוברים, ולכן <b>משתנה</b> כשעוברים לרשת אחרת.</li>
      </ul>
      <p>אפשר לחשוב על MAC כמו תעודת זהות, ועל IP כמו כתובת המגורים הנוכחית שלכם.</p>`,
      tip: 'IP אומר איפה אתה ברשת, MAC אומר מי אתה.',
      anim: (stage, ctx) => {
        const sim = new Sim(stage, ctx);
        sim.zone(27, 50, 40, 78, 'רשת הבית 192.168.1.0', '#3ddc97');
        sim.zone(75, 50, 40, 78, 'רשת בית הספר 10.5.0.0', '#6c8bff');
        const lap = sim.dev('laptop', 'המחשב של דנה', '192.168.1.37', 27, 50, { size: 66 });
        const mac = h('div', { class: 'nic' }, '🔒 MAC: 00-1A-2B-3C-4D-5E');
        lap.append(mac);
        let home = true, busy = false;
        sim.caption('כתובת ה-IP של המחשב תלויה ברשת שאליה הוא מחובר.');
        sim.btn('🚶 העבר את המחשב לרשת אחרת', async () => {
          if (busy) return;
          busy = true;
          sfx('whoosh');
          await sim.moveTo(lap, home ? 75 : 27, 50, 1400);
          if (home) lap.setIp('10.5.0.88'); else lap.setIp('192.168.1.37');
          home = !home;
          lap.glow('#ffd35c');
          sim.caption(`כתובת ה-<b>IP השתנתה</b> לרשת החדשה, אבל כתובת ה-<b>MAC</b> נשארה אותה כתובת – היא חלק מהחומרה.`, 'good');
          busy = false;
        });
      },
      questions: [
        { tier: 1, type: 'mc', q: 'מה משתנה כשמעבירים מחשב נייד לרשת אחרת?', options: ['כתובת ה-IP', 'כתובת ה-MAC', 'שניהם', 'אף אחד מהם'], a: 0, why: 'כתובת IP תלויה ברשת ולכן משתנה. כתובת MAC נצרבת בכרטיס הרשת.' },
        { tier: 2, type: 'mc', q: 'כתובת MAC היא:', options: ['כתובת פיזית של כרטיס הרשת', 'כתובת לוגית של הרשת', 'כתובת של שרת DNS', 'כתובת האתר'], a: 0, why: 'MAC = כתובת פיזית, נקבעת על ידי היצרן.' },
        { tier: 3, type: 'mc', q: 'כמה ביטים יש בכתובת MAC?', options: ['32', '48', '64', '128'], a: 1, why: 'כתובת MAC היא 48 ביט (6 בתים), ולכן נכתבת כ-12 ספרות הקסדצימליות.' },
      ],
    },
    {
      title: 'כמה כתובות יש? IPv4 ו-IPv6',
      body: `<p>ב-IPv4 יש 2³² כתובות – בערך <b>4.3 מיליארד</b>. נשמע הרבה, אבל בעולם יש הרבה יותר מכשירים: טלפונים, שעונים, מצלמות, מכוניות…</p>
      <ul>
        <li>הכתובות ב-IPv4 <b>אזלו</b> כמעט לגמרי.</li>
        <li>פתרון זמני: <b>כתובות פרטיות ו-NAT</b> – נלמד על כך בהמשך.</li>
        <li>פתרון מלא: <b>IPv6</b> – כתובת של <b>128 ביט</b>, כמו ${C('2001:db8::1')}. יש בה בערך 3.4 × 10³⁸ כתובות – מספיק לכל גרגר חול בכדור הארץ ועוד הרבה יותר.</li>
      </ul>`,
      tip: 'IPv4 = 32 ביט, IPv6 = 128 ביט.',
      anim: (stage, ctx) => {
        const root = h('div', { class: 'bitsim' });
        stage.innerHTML = '';
        stage.append(root);
        const grid4 = h('div', { class: 'jar-grid' }, ...Array.from({ length: 100 }, () => h('i')));
        const grid6 = h('div', { class: 'jar-grid' }, ...Array.from({ length: 100 }, () => h('i', { class: 'g' })));
        const count = h('b', {}, '4,294,967,296 כתובות');
        const jars = h('div', { class: 'jars' },
          h('div', { class: 'jar' }, h('h4', {}, 'IPv4 – 32 ביט'), grid4, count),
          h('div', { class: 'jar' }, h('h4', {}, 'IPv6 – 128 ביט'), grid6, h('b', {}, '340,282,366,920,938,463,463,374,607,431,768,211,456')));
        const cap = h('div', { class: 'sim-caption on' });
        root.append(jars, cap);
        let filled = 0;
        cap.innerHTML = 'כל משבצת ב-IPv4 מייצגת ~43 מיליון כתובות. לחצו כדי להוסיף מכשירים לעולם.';
        const fill = async (n) => {
          for (let i = 0; i < n && filled < 100; i++) {
            if (!ctx.alive) return;
            grid4.children[filled].classList.add('f');
            filled++;
            sfx('tick');
            await ctx.wait(40);
          }
          if (filled >= 100) cap.innerHTML = '⚠️ <b>הכתובות אזלו!</b> לכן המציאו NAT וכתובות פרטיות, ובעיקר את IPv6 עם מרחב כתובות עצום.';
          else cap.innerHTML = `מכשירים חדשים מצטרפים… ${filled}% מהכתובות נתפסו.`;
        };
        const sim = { ctrl: h('div', { class: 'sim-controls' }) };
        sim.ctrl.append(
          h('button', { class: 'btn small', onclick: () => fill(10) }, '📱 הוסף עוד מכשירים'),
          h('button', { class: 'btn small ghost', onclick: () => { grid4.querySelectorAll('i').forEach((i) => i.classList.remove('f')); filled = 0; cap.textContent = 'התחלה מחדש.'; } }, '↺ אפס'));
        root.append(sim.ctrl);
      },
      questions: [
        { tier: 1, type: 'mc', q: 'מדוע נוצר IPv6?', options: ['כי כתובות IPv4 אוזלות', 'כדי להאט את הרשת', 'כי IPv4 אסור בשימוש', 'כדי להחליף את כתובות MAC'], a: 0, why: 'מרחב הכתובות של IPv4 (כ-4.3 מיליארד) לא מספיק לעולם של מכשירים.' },
        { tier: 3, type: 'mc', q: 'כמה ביטים יש בכתובת IPv6?', options: ['64', '96', '128', '256'], a: 2, why: 'IPv6 הוא 128 ביט.' },
      ],
    },
  ],

  quiz: [
    { tier: 1, type: 'mc', q: 'כתובת IPv4 מורכבת מ…', options: ['4 אוקטטים של 8 ביטים', '6 אוקטטים של 8 ביטים', '2 אוקטטים של 16 ביטים', '8 אוקטטים של 4 ביטים'], a: 0, why: '4 אוקטטים × 8 ביטים = 32 ביטים.' },
    { tier: 1, type: 'mc', q: 'איזו מהכתובות הבאות <b>תקינה</b>?', options: ['192.168.1.10', '192.168.1.300', '192.168.1', '256.10.10.10'], a: 0, why: 'כתובת תקינה: 4 חלקים, כל אחד בין 0 ל-255.' },
    { tier: 1, type: 'tf', q: 'כתובת IP היא כתובת לוגית, ולכן יכולה להשתנות.', a: true, why: 'כתובת IP תלויה ברשת שבה המכשיר נמצא.' },
    { tier: 1, type: 'mc', q: 'מהו המספר הגדול ביותר שיכול להופיע באוקטט?', options: ['100', '128', '255', '256'], a: 2, why: '8 ביטים: 0 עד 255.' },
    { tier: 1, type: 'mc', q: 'מה תפקיד כתובת ה-IP?', options: ['לזהות מכשיר ברשת ולאפשר להעביר אליו מידע', 'להצפין קבצים', 'לחשב מהירות אינטרנט', 'לשמור סיסמאות'], a: 0, why: 'IP מזהה מכשיר ברשת.' },
    { tier: 2, type: 'input', q: 'מהו הערך העשרוני של <code>10000001</code>?', answer: '129', why: '128 + 1 = 129.', placeholder: 'מספר' },
    { tier: 2, type: 'mc', q: 'מהו <code>00001100</code> בעשרוני?', options: ['12', '14', '6', '24'], a: 0, why: '8 + 4 = 12.' },
    { tier: 2, type: 'mc', q: 'המספר <code>168</code> בבינארי הוא:', options: ['10101000', '10100100', '10101010', '10011000'], a: 0, why: '168 = 128 + 32 + 8 ⇒ 10101000.' },
    { tier: 2, type: 'mc', q: 'מה ההבדל המרכזי בין כתובת IP לכתובת MAC?', options: ['IP לוגית ומשתנה לפי הרשת; MAC פיזית וקבועה', 'IP פיזית ו-MAC לוגית', 'שתיהן קבועות', 'שתיהן משתנות לפי הרשת'], a: 0, why: 'MAC נצרבת בכרטיס; IP נקבעת לפי הרשת.' },
    { tier: 2, type: 'mc', q: 'כמה כתובות שונות אפשר ליצור ב-IPv4 (בקירוב)?', options: ['4.3 מיליארד', '65 אלף', '256', '340 סקסטיליון'], a: 0, why: '2³² ≈ 4.3 מיליארד.' },
    { tier: 3, type: 'order', q: 'סדרו את המשקלים של האוקטט מהגדול לקטן', items: ['128', '64', '32', '16', '8', '4', '2', '1'], why: 'כל משקל גדול פי 2 מהקודם.' },
    { tier: 3, type: 'input', q: 'מהו הערך העשרוני של האוקטט <code>11100000</code>?', answer: '224', why: '128 + 64 + 32 = 224.', placeholder: 'מספר' },
    { tier: 3, type: 'mc', q: 'מהו האוקטט הבינארי של <code>10</code>?', options: ['00001010', '00001100', '00010100', '00000101'], a: 0, why: '10 = 8 + 2 ⇒ 00001010.' },
    { tier: 3, type: 'mc', q: 'כמה ביטים של כתובת IPv6 לעומת IPv4?', options: ['128 לעומת 32', '64 לעומת 32', '256 לעומת 64', '48 לעומת 32'], a: 0, why: 'IPv6 = 128 ביט; IPv4 = 32 ביט.' },
  ],

  game: {
    name: 'רונות בינאריות',
    intro: `<p>מגדל הכתובות כבה! צריך להדליק את רונות הקסם בקומות המגדל. בכל סיבוב מופיע מספר – הפכו את <b>רונות הביטים</b> (128, 64, … 1) כך שהסכום יהיה שווה למספר, ולמגדל תהיה עוד קומה זוהרת. ככל שמהר יותר – יותר נקודות.</p>
    <p class="mini">ברמות גבוהות: הסכום מוסתר, יש הגבלת זמן קצרה, ולפעמים צריך גם לקרוא בינארי ולהקליד את המספר!</p>`,
    run: runeGame,
  },
};
