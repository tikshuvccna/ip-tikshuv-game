// מצב המשחק, שמירה וטעינה
import { ZONES } from './world/zonesMeta.js';

const KEY = 'ip-wizards-save-v1';

export const LEVELS = [
  { id: 1, name: 'מתחיל', icon: '🌱', mult: 1, color: '#3ddc97', desc: 'שאלות בסיסיות, רמזים וזמן נדיב' },
  { id: 2, name: 'קוסם', icon: '🔮', mult: 1.5, color: '#6c8bff', desc: 'אתגר בינוני – ניקוד ×1.5' },
  { id: 3, name: 'מאסטר', icon: '👑', mult: 2, color: '#ffd35c', desc: 'אתגר מלא ללא רמזים – ניקוד ×2' },
];

export const state = {
  name: 'קוסם',
  house: 1,
  skin: 1,
  level: 2,
  score: 0,
  coins: 0,
  zones: {},
  ingredients: { herb: 0, mushroom: 0, crystal: 0, flower: 0 },
  potions: { speed: 0, jump: 0, night: 0, luck: 0, flight: 0 },
  found: {},
  snitch: 0,
  broom: 'student',
  ring: { best: null },
  seenIntro: false,
  settings: { quality: 1, sound: true, music: true, sens: 1 },
  pos: null,
  time: 0.36,
};

ZONES.forEach((z) => {
  state.zones[z.id] = { done: false, stars: 0, best: 0, plays: 0 };
});

const listeners = {};
export const on = (ev, fn) => ((listeners[ev] ||= []).push(fn), fn);
export const emit = (ev, ...a) => (listeners[ev] || []).forEach((f) => f(...a));

export function save() {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch (e) { /* ignore */ }
}

export function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return false;
    const d = JSON.parse(raw);
    for (const k in d) {
      if (k === 'zones') Object.assign(state.zones, d.zones);
      else if (typeof d[k] === 'object' && d[k] && !Array.isArray(d[k]) && state[k]) Object.assign(state[k], d[k]);
      else state[k] = d[k];
    }
    return true;
  } catch (e) {
    return false;
  }
}

export function resetSave() {
  try { localStorage.removeItem(KEY); } catch (e) { /* ignore */ }
}

export const levelInfo = () => LEVELS.find((l) => l.id === state.level) || LEVELS[1];
export const completedCount = () => ZONES.filter((z) => state.zones[z.id].done).length;
export const starsTotal = () => ZONES.reduce((a, z) => a + state.zones[z.id].stars, 0);

let luckUntil = 0;
export function setLuck(ms) { luckUntil = performance.now() + ms; }
export const luckActive = () => performance.now() < luckUntil;

export function addScore(n, reason = '') {
  const v = Math.round(n * (luckActive() ? 1.1 : 1));
  state.score += v;
  emit('score', v, reason);
  save();
  return v;
}

export function addCoins(n) {
  state.coins += n;
  emit('coins', n);
  save();
}
