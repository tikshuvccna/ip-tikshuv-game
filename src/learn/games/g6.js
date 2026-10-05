import { h, pick, shuffle, randInt } from '../../util.js';
import { injectCss, icon } from '../anim.js';
import { ipv4Dialog } from '../winui.js';
import { sfx } from '../../audio.js';
import { parseIp, fmt, maskFromPrefix, networkOf, broadcastOf, intToIp, ipToInt, sameNetwork, isValidMask, prefixFromMask } from '../ip.js';

injectCss('g6', `
.g6{height:100%;min-height:470px;padding:10px 16px 14px;display:flex;flex-direction:column;gap:10px}
.g6-top{display:flex;justify-content:space-between;font-weight:800;color:#cfd6ff;gap:10px;flex-wrap:wrap}
.g6-main{flex:1;display:grid;grid-template-columns:1fr minmax(320px,46%);gap:14px;min-height:0}
.g6-net{position:relative;background:rgba(8,10,42,.5);border:2px solid var(--line);border-radius:18px;padding:12px;overflow:hidden;display:flex;flex-direction:column;gap:8px}
.g6-brief{font-size:14.5px;line-height:1.7}
.g6-brief code{font-size:.95em}
.g6-diagram{flex:1;position:relative;min-height:170px}
.g6-portal{position:absolute;right:6%;top:50%;transform:translateY(-50%);width:88px;height:88px;border-radius:50%;border:5px solid #6c4cff;background:radial-gradient(circle,#150a40,#3a1d9a);box-shadow:0 0 30px #6c4cff;display:flex;align-items:center;justify-content:center;font-size:36px;transition:all .6s;filter:grayscale(1) brightness(.6)}
.g6-portal.open{filter:none;box-shadow:0 0 70px #4de1ff,0 0 30px #fff;border-color:#4de1ff;animation:pulse 1.2s infinite}
.g6-dev{position:absolute;text-align:center;font-size:11.5px;font-weight:800;transform:translate(-50%,-50%)}
.g6-dev .ico{width:42px;height:42px;margin:0 auto}
.g6-dev code{display:block;font-size:10.5px;margin-top:2px}
.g6-line{position:absolute;height:3px;background:rgba(160,180,255,.5);transform-origin:left center}
.g6-pkt{position:absolute;font-size:22px;transition:left 1s,top 1s;transform:translate(-50%,-50%)}
.g6-side{display:flex;flex-direction:column;gap:8px;min-width:0}
.g6-fb{min-height:54px;font-weight:700;line-height:1.5;font-size:14.5px}
.g6-fb.good{color:#7dffb0}.g6-fb.bad{color:#ff8fa3}
.g6-end{margin:auto;text-align:center;display:flex;flex-direction:column;gap:10px;align-items:center}
.g6-end h2{font:900 38px 'Secular One';color:#ffd35c;margin:0}
@media (max-width:900px){.g6-main{grid-template-columns:1fr}}
`);

function makeNet(level) {
  let prefix = 24, base, gwLast;
  if (level >= 3) {
    prefix = pick([25, 26, 27, 28]);
    const block = 2 ** (32 - prefix);
    const blocks = 256 / block;
    const t = randInt(1, 200);
    const k = randInt(0, blocks - 1);
    base = [192, 168, t, k * block];
  } else {
    base = pick([[192, 168, randInt(1, 200), 0], [10, randInt(0, 200), randInt(0, 200), 0], [172, randInt(16, 31), randInt(0, 200), 0]]);
  }
  const net = intToIp(ipToInt(networkOf(base, prefix)));
  const bc = broadcastOf(net, prefix);
  const first = intToIp(ipToInt(net) + 1), last = intToIp(ipToInt(bc) - 1);
  const gwAtEnd = level >= 2 && Math.random() < 0.4;
  const gw = gwAtEnd ? last : first;
  const hosts = [];
  const used = new Set([fmt(gw)]);
  const range = ipToInt(last) - ipToInt(first) + 1;
  const nDev = Math.min(3, range - 4);
  while (hosts.length < nDev) {
    const ip = intToIp(ipToInt(first) + randInt(1, range - 2));
    if (used.has(fmt(ip))) continue;
    used.add(fmt(ip));
    hosts.push({ ip, kind: pick(['printer', 'server', 'pc', 'camera']) });
  }
  const dns = pick(['8.8.8.8', '1.1.1.1', '8.8.4.4']);
  return { prefix, net, bc, first, last, gw, hosts, dns, mask: maskFromPrefix(prefix) };
}

function validate(n, v) {
  const errs = {};
  const ip = parseIp(v.ip);
  const mask = parseIp(v.mask);
  const gw = parseIp(v.gw);
  const dns = parseIp(v.dns);
  if (!ip) errs.ip = 'כתובת ה-IP אינה תקינה (4 אוקטטים בין 0 ל-255).';
  if (!mask || !isValidMask(mask)) errs.mask = 'מסיכת הרשת אינה תקינה.';
  else if (fmt(mask) !== fmt(n.mask)) errs.mask = `המסיכה צריכה להיות כמו של הרשת: ${fmt(n.mask)} (/${n.prefix}).`;
  if (!gw) errs.gw = 'שער ברירת המחדל אינו תקין.';
  else if (fmt(gw) !== fmt(n.gw)) errs.gw = `שער ברירת המחדל הוא כתובת הראוטר: ${fmt(n.gw)}.`;
  if (!dns) errs.dns = 'כתובת ה-DNS אינה תקינה.';
  if (ip && !errs.ip) {
    if (!sameNetwork(ip, n.net, n.prefix)) errs.ip = `הכתובת ${fmt(ip)} אינה ברשת ${fmt(n.net)}/${n.prefix}. כתובת המחשב חייבת להיות באותה רשת כמו הראוטר.`;
    else if (fmt(ip) === fmt(n.net)) errs.ip = 'זו כתובת הרשת עצמה – אי אפשר לתת אותה למחשב.';
    else if (fmt(ip) === fmt(n.bc)) errs.ip = 'זו כתובת ה-Broadcast – אי אפשר לתת אותה למחשב.';
    else if (fmt(ip) === fmt(n.gw)) errs.ip = 'הכתובת הזו כבר שייכת לראוטר (השער)!';
    else if (n.hosts.some((x) => fmt(x.ip) === fmt(ip))) errs.ip = `הכתובת ${fmt(ip)} כבר בשימוש על ידי מכשיר אחר – התנגשות!`;
  }
  return errs;
}

export function fixGame(root, opts) {
  const { level, mult, onPoints, onDone } = opts;
  const cfg = { 1: { n: 3 }, 2: { n: 4 }, 3: { n: 5 } }[level];
  let round = 0, raw = 0, destroyed = false;
  const wrap = h('div', { class: 'g6' });
  root.append(wrap);

  function next() {
    if (destroyed) return;
    if (round >= cfg.n) return end();
    const n = makeNet(level);
    let attempts = 0, solved = false;
    wrap.innerHTML = '';
    const brief = h('div', { class: 'g6-brief', html:
      `<b>המשימה:</b> חברו מחשב חדש לרשת והגדירו לו כתובת <b>סטטית</b> תקינה.<br>
      הרשת: <code>${fmt(n.net)}/${n.prefix}</code> · הראוטר (שער): <code>${fmt(n.gw)}</code> · DNS: <code>${n.dns}</code><br>
      מכשירים קיימים: ${n.hosts.map((x) => `<code>${fmt(x.ip)}</code>`).join(' ')}` });
    const diagram = h('div', { class: 'g6-diagram' });
    const portal = h('div', { class: 'g6-portal' }, '🌐');
    diagram.append(portal);
    const addDev = (kind, x, y, label, ip) => {
      const d = h('div', { class: 'g6-dev', style: { left: x + '%', top: y + '%' } }, icon(kind), label, ip ? h('code', {}, ip) : null);
      diagram.append(d);
      return d;
    };
    const rt = addDev('router', 50, 50, 'ראוטר', fmt(n.gw));
    addDev('cloud', 80, 50, '', null).style.display = 'none';
    n.hosts.forEach((x, i) => addDev(x.kind, 14 + i * 18, 18 + (i % 2) * 8, '', fmt(x.ip)));
    const me = addDev('pc', 22, 78, 'המחשב החדש', '?');
    const pkt = h('div', { class: 'g6-pkt', style: { left: '22%', top: '78%', opacity: 0 } }, '✉️');
    diagram.append(pkt);
    const net = h('div', { class: 'g6-net' }, brief, diagram);
    const fb = h('div', { class: 'g6-fb' }, 'מלאו את ההגדרות ולחצו OK.');
    let selects = null;
    if (level === 1) {
      // ודא שיש לפחות כתובת תקינה אחת
      let good = null;
      for (let k = 2; k < 250; k++) { const c = intToIp(ipToInt(n.net) + k); if (validate(n, { ip: fmt(c), mask: fmt(n.mask), gw: fmt(n.gw), dns: n.dns }).ip === undefined) { good = fmt(c); break; } }
      const list = shuffle([good, fmt(n.net), fmt(n.bc), fmt(n.gw), fmt(n.hosts[0].ip), fmt(intToIp(ipToInt(n.net) + 256 * 3 + 5))]);
      selects = { ip: list, mask: shuffle([fmt(n.mask), '255.255.0.0', '255.0.0.0', '255.255.255.128'].filter((v, i, a) => a.indexOf(v) === i)), gw: shuffle([fmt(n.gw), fmt(n.first) === fmt(n.gw) ? fmt(n.last) : fmt(n.first), '10.0.0.138', fmt(n.hosts[0].ip)].filter((v, i, a) => a.indexOf(v) === i)), dns: [n.dns, '8.8.8.8', '1.1.1.1'].filter((v, i, a) => a.indexOf(v) === i) };
    } else if (level === 2) {
      selects = { mask: shuffle([fmt(n.mask), '255.255.0.0', '255.0.0.0', '255.255.255.128'].filter((v, i, a) => a.indexOf(v) === i)), gw: shuffle([fmt(n.gw), fmt(n.first) === fmt(n.gw) ? fmt(n.last) : fmt(n.first), '10.0.0.138', fmt(n.hosts[0].ip)].filter((v, i, a) => a.indexOf(v) === i)), dns: [n.dns, '8.8.8.8', '1.1.1.1'].filter((v, i, a) => a.indexOf(v) === i) };
    }
    const dlg = ipv4Dialog({
      mode: 'static', values: {}, selects,
      onChange: (v) => { me.querySelector('code').textContent = v.ip || '?'; },
      onOk: async (v) => {
        if (solved) return;
        if (v.mode !== 'static') { fb.className = 'g6-fb bad'; fb.textContent = 'המשימה דורשת כתובת סטטית – בחרו "Use the following IP address".'; sfx('wrong'); return; }
        attempts++;
        Object.values(dlg.ins).forEach((i) => i.classList.remove('bad'));
        const errs = validate(n, v);
        const keys = Object.keys(errs);
        if (!keys.length) {
          solved = true;
          const pts = Math.max(30, 100 - (attempts - 1) * 30);
          raw += pts;
          onPoints && onPoints(Math.round(pts * 0.5 * mult));
          fb.className = 'g6-fb good';
          fb.textContent = `✔ מעולה! ההגדרות תקינות – הפורטל לאינטרנט נפתח! (+${pts})`;
          portal.classList.add('open');
          sfx('levelup');
          pkt.style.opacity = 1;
          await new Promise((r) => setTimeout(r, 100));
          pkt.style.left = '50%'; pkt.style.top = '50%';
          setTimeout(() => { pkt.style.left = '88%'; pkt.style.top = '50%'; }, 1000);
          round++;
          setTimeout(next, 3200);
        } else {
          keys.forEach((k) => dlg.ins[k] && dlg.ins[k].classList.add('bad'));
          fb.className = 'g6-fb bad';
          fb.textContent = `✘ ${errs[keys[0]]}${attempts >= 3 ? '' : ' (נסו שוב)'}`;
          sfx('wrong');
          if (attempts >= 3) {
            solved = true;
            round++;
            fb.textContent += ' · עוברים לסיבוב הבא.';
            setTimeout(next, 3200);
          }
        }
      },
    });
    const side = h('div', { class: 'g6-side' }, dlg.el, fb);
    wrap.append(h('div', { class: 'g6-top' }, h('span', {}, `משימה ${round + 1}/${cfg.n}`), h('span', {}, 'התאימו את ההגדרות לרשת – בלי התנגשויות'), h('span', {}, `⭐ ${Math.round(raw)}`)), h('div', { class: 'g6-main' }, net, side));
  }

  function end() {
    const max = cfg.n * 100;
    const pct = Math.round((raw / max) * 100);
    wrap.innerHTML = '';
    wrap.append(h('div', { class: 'g6-end' }, icon('gear'),
      h('h2', {}, pct >= 70 ? '⚙️ מתקן קסמים מוסמך!' : '🔧 עוד קצת תרגול'),
      h('p', {}, `ניקוד משחק: ${Math.round(raw)}/${max} (${pct}%)`),
      h('p', { class: 'mini' }, 'כתובת תקינה: באותה רשת כמו השער, לא כתובת הרשת או ה-Broadcast, ולא תפוסה. מסיכה כמו של הרשת, שער = הראוטר.')));
    sfx('levelup');
    onDone({ score: raw, max, msg: `הגדרת בהצלחה ${Math.round(raw / 100)} מחשבים לרשת 🔧` });
  }

  next();
  return { destroy() { destroyed = true; } };
}
