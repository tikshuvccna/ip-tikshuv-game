import { h, $ } from './util.js';
import { state, LEVELS, save } from './state.js';
import { HOUSES } from './world/characters.js';
import { initAudio, sfx } from './audio.js';

const TIPS = [
  'כל מכשיר ברשת צריך כתובת IP ייחודית – כמו שלכל בית יש כתובת ברחוב.',
  'כתובת IPv4 מורכבת מ-32 ביטים, שמחולקים לארבעה בתים (אוקטטים).',
  'אפשר לעוף על מטאטא – לחצו B. מטאטאים מהירים נפתחים כשמסיימים אזורי לימוד.',
  'שרת DHCP נותן למחשבים כתובות באופן אוטומטי: Discover, Offer, Request, Acknowledge.',
  'כתובות פרטיות: 10.x.x.x, 172.16–31.x.x ו-192.168.x.x',
  'אספו עשבים ופטריות וקסמים – ובשלו שיקויים בקלחת!',
  'רמה גבוהה יותר = ניקוד גבוה יותר. מי יהפוך למאסטר הרשת?',
];

export function showLoading() {
  const el = $('#loading');
  el.style.display = '';
  el.innerHTML = '';
  const bar = h('div', { class: 'ld-fill' });
  const txt = h('div', { class: 'ld-text' }, 'טוען...');
  el.append(h('div', { class: 'ld-box' },
    h('div', { class: 'ld-rune' }, '✦'),
    h('h1', { class: 'logo small' }, 'קוסמי הרשת'),
    h('div', { class: 'ld-bar' }, bar),
    txt,
    h('div', { class: 'ld-tip' }, '💡 ' + TIPS[Math.floor(Math.random() * TIPS.length)])));
  return {
    set(v, t) { bar.style.width = Math.round(v * 100) + '%'; if (t) txt.textContent = t; },
    hide() { el.classList.add('fade'); setTimeout(() => { el.style.display = 'none'; el.classList.remove('fade'); }, 700); },
  };
}

export function showTitle(hasSave, handlers) {
  const el = $('#title');
  el.style.display = '';
  el.classList.remove('fade');
  el.innerHTML = '';
  let house = state.house, level = state.level;
  const nameIn = h('input', { type: 'text', maxlength: 14, placeholder: 'השם שלך', value: hasSave ? state.name : '', dir: 'rtl' });
  const crests = HOUSES.map((hs, i) => h('button', { class: 'crest' + (i === house ? ' on' : ''), style: { '--r': hs.robe, '--a': hs.accent }, onclick: (e) => { house = i; crests.forEach((c, k) => c.classList.toggle('on', k === i)); sfx('click'); } },
    h('span', { class: 'crest-shield' }, '🧙'), h('b', {}, hs.name)));
  const lvls = LEVELS.map((l) => h('button', { class: 'lvl' + (l.id === level ? ' on' : ''), style: { '--c': l.color }, onclick: () => { level = l.id; lvls.forEach((c, k) => c.classList.toggle('on', k === l.id - 1)); sfx('click'); } },
    h('span', { class: 'lvl-ic' }, l.icon), h('b', {}, l.name), h('small', {}, `ניקוד ×${l.mult}`), h('em', {}, l.desc)));
  const start = (cont) => {
    initAudio();
    state.name = (nameIn.value || 'קוסם').trim().slice(0, 14);
    state.house = house;
    state.level = level;
    save();
    el.classList.add('fade');
    setTimeout(() => { el.style.display = 'none'; }, 700);
    handlers.onStart(cont);
  };
  el.append(
    h('div', { class: 'title-wrap' },
      h('div', { class: 'title-hero' },
        h('div', { class: 'title-sparks' }, '✦ ✧ ✦'),
        h('h1', { class: 'logo' }, 'קוסמי הרשת'),
        h('div', { class: 'tagline' }, 'מסע קסום בעולם כתובות ה-IP'),
        h('div', { class: 'subtag' }, 'IP · רשת ומארח · פרטי וציבורי · סטטי ודינמי · DHCP · סיסקו')),
      h('div', { class: 'title-card' },
        h('label', {}, 'איך קוראים לך, קוסם צעיר?'), nameIn,
        h('label', {}, 'בחר את הבית שלך'), h('div', { class: 'crests' }, ...crests),
        h('label', {}, 'בחר רמת קושי – ככל שהרמה גבוהה יותר, הניקוד גבוה יותר!'), h('div', { class: 'lvls' }, ...lvls),
        h('div', { class: 'title-actions' },
          hasSave ? h('button', { class: 'btn big gold', onclick: () => start(true) }, '▶ המשך את המסע') : null,
          h('button', { class: 'btn big ' + (hasSave ? '' : 'gold'), onclick: () => start(false) }, hasSave ? '✨ התחל מחדש' : '✨ התחל את המסע')),
        h('div', { class: 'title-foot' }, 'מבוסס על תוכנית CCNA ורשתות תקשוב י״א–י״ב · מומלץ במסך מלא עם עכבר ומקלדת'))));
}
