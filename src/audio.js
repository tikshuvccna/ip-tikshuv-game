// אודיו מסונתז (ללא קבצים חיצוניים): אפקטים ומוזיקת רקע קסומה
import { state } from './state.js';

let ctx = null;
let master = null, sfxGain = null, musicGain = null;
let musicTimer = null;

export function initAudio() {
  if (ctx) {
    if (ctx.state === 'suspended') ctx.resume();
    return;
  }
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!AC) return;
  ctx = new AC();
  master = ctx.createGain();
  master.gain.value = 0.8;
  master.connect(ctx.destination);
  sfxGain = ctx.createGain();
  sfxGain.gain.value = 0.55;
  sfxGain.connect(master);
  musicGain = ctx.createGain();
  musicGain.gain.value = 0.0;
  const conv = ctx.createConvolver();
  conv.buffer = impulse(2.8, 2.2);
  const wet = ctx.createGain();
  wet.gain.value = 0.55;
  musicGain.connect(master);
  musicGain.connect(conv);
  conv.connect(wet);
  wet.connect(master);
  applySettings();
  startMusic();
}

function impulse(sec, decay) {
  const len = ctx.sampleRate * sec;
  const b = ctx.createBuffer(2, len, ctx.sampleRate);
  for (let c = 0; c < 2; c++) {
    const d = b.getChannelData(c);
    for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay);
  }
  return b;
}

export function applySettings() {
  if (!ctx) return;
  sfxGain.gain.value = state.settings.sound ? 0.55 : 0;
  musicGain.gain.setTargetAtTime(state.settings.music ? 0.22 : 0, ctx.currentTime, 0.3);
}

function tone(freq, t0, dur, { type = 'sine', vol = 0.3, attack = 0.01, slide = 0, dest = sfxGain } = {}) {
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = type;
  o.frequency.setValueAtTime(freq, t0);
  if (slide) o.frequency.exponentialRampToValueAtTime(Math.max(20, freq * slide), t0 + dur);
  g.gain.setValueAtTime(0.0001, t0);
  g.gain.exponentialRampToValueAtTime(vol, t0 + attack);
  g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
  o.connect(g);
  g.connect(dest);
  o.start(t0);
  o.stop(t0 + dur + 0.05);
}

function noiseBurst(t0, dur, { vol = 0.2, freq = 2000, q = 1, type = 'bandpass' } = {}) {
  const len = Math.floor(ctx.sampleRate * dur);
  const b = ctx.createBuffer(1, len, ctx.sampleRate);
  const d = b.getChannelData(0);
  for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * (1 - i / len);
  const s = ctx.createBufferSource();
  s.buffer = b;
  const f = ctx.createBiquadFilter();
  f.type = type;
  f.frequency.value = freq;
  f.Q.value = q;
  const g = ctx.createGain();
  g.gain.value = vol;
  s.connect(f);
  f.connect(g);
  g.connect(sfxGain);
  s.start(t0);
}

const SFX = {
  click: (t) => tone(880, t, 0.08, { type: 'triangle', vol: 0.2 }),
  correct: (t) => {
    [660, 880, 1320].forEach((f, i) => tone(f, t + i * 0.08, 0.25, { type: 'triangle', vol: 0.28 }));
  },
  wrong: (t) => {
    tone(220, t, 0.3, { type: 'sawtooth', vol: 0.18, slide: 0.6 });
    tone(165, t + 0.1, 0.35, { type: 'sawtooth', vol: 0.15, slide: 0.6 });
  },
  levelup: (t) => {
    [523, 659, 784, 1046, 1318].forEach((f, i) => tone(f, t + i * 0.1, 0.5, { type: 'triangle', vol: 0.3 }));
  },
  cast: (t) => {
    tone(500, t, 0.35, { type: 'sine', vol: 0.25, slide: 3 });
    noiseBurst(t, 0.3, { vol: 0.25, freq: 3500, q: 0.7 });
  },
  boom: (t) => {
    tone(120, t, 0.5, { type: 'sine', vol: 0.5, slide: 0.3 });
    noiseBurst(t, 0.5, { vol: 0.4, freq: 600, q: 0.5, type: 'lowpass' });
  },
  collect: (t) => {
    tone(988, t, 0.15, { type: 'sine', vol: 0.25 });
    tone(1318, t + 0.07, 0.25, { type: 'sine', vol: 0.25 });
  },
  whoosh: (t) => noiseBurst(t, 0.4, { vol: 0.15, freq: 900, q: 0.8 }),
  magic: (t) => {
    [1046, 1318, 1568, 2093].forEach((f, i) => tone(f, t + i * 0.06, 0.4, { type: 'sine', vol: 0.18 }));
  },
  coin: (t) => {
    tone(1568, t, 0.1, { type: 'square', vol: 0.12 });
    tone(2093, t + 0.08, 0.2, { type: 'square', vol: 0.12 });
  },
  potion: (t) => {
    for (let i = 0; i < 6; i++) tone(300 + Math.random() * 500, t + i * 0.07, 0.12, { type: 'sine', vol: 0.15 });
  },
  tick: (t) => tone(1200, t, 0.03, { type: 'square', vol: 0.06 }),
  owl: (t) => {
    tone(420, t, 0.25, { type: 'sine', vol: 0.18, slide: 0.8 });
    tone(380, t + 0.35, 0.35, { type: 'sine', vol: 0.18, slide: 0.8 });
  },
};

export function sfx(name) {
  if (!ctx || !state.settings.sound) return;
  if (ctx.state === 'suspended') ctx.resume();
  const f = SFX[name];
  if (f) f(ctx.currentTime + 0.01);
}

// מוזיקת רקע: ארפג'יו איטי בסגנון קסום
const CHORDS = [
  [57, 60, 64, 67], // Am7
  [53, 57, 60, 64], // Fmaj7
  [48, 52, 55, 59], // Cmaj7
  [55, 59, 62, 65], // G6
];
const mid = (n) => 440 * Math.pow(2, (n - 69) / 12);

function startMusic() {
  let step = 0;
  const play = () => {
    if (!ctx) return;
    const t = ctx.currentTime + 0.05;
    const chord = CHORDS[Math.floor(step / 8) % CHORDS.length];
    // פד
    if (step % 8 === 0) {
      chord.forEach((n) => tone(mid(n - 12), t, 4.6, { type: 'sine', vol: 0.09, attack: 1.2, dest: musicGain }));
    }
    // ארפג'יו
    const note = chord[(step * 3) % 4] + (step % 4 === 3 ? 12 : 0) + 12;
    tone(mid(note), t, 1.4, { type: 'triangle', vol: 0.11, attack: 0.02, dest: musicGain });
    if (step % 4 === 0) tone(mid(chord[0] - 24), t, 1.8, { type: 'sine', vol: 0.14, attack: 0.05, dest: musicGain });
    if (Math.random() < 0.25) tone(mid(chord[2] + 24), t + 0.25, 0.9, { type: 'sine', vol: 0.05, dest: musicGain });
    step++;
  };
  play();
  musicTimer = setInterval(play, 600);
}
