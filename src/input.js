// קלט: מקלדת, עכבר ומגע
import { clamp, isTouch } from './util.js';

export const input = {
  keys: new Set(),
  pressed: new Set(), // נלחצו בפריים הנוכחי
  mdx: 0,
  mdy: 0,
  wheel: 0,
  locked: false,
  enabled: true,
  touch: { move: { x: 0, y: 0 }, look: { x: 0, y: 0 }, active: false },
  lmb: false,
  rmb: false,
  clicked: false,
};

const codeMap = { KeyW: 'w', KeyA: 'a', KeyS: 's', KeyD: 'd', ArrowUp: 'w', ArrowDown: 's', ArrowLeft: 'a', ArrowRight: 'd' };

export function initInput(canvas, handlers = {}) {
  window.addEventListener('keydown', (e) => {
    if (!input.enabled) return;
    if (e.target && ['INPUT', 'TEXTAREA', 'SELECT'].includes(e.target.tagName)) return;
    if (e.code === 'Space' || e.code.startsWith('Arrow') || e.code === 'Tab') e.preventDefault();
    const k = codeMap[e.code] || e.code;
    if (!input.keys.has(k)) input.pressed.add(k);
    input.keys.add(k);
    if (e.shiftKey) input.keys.add('Shift');
    if (handlers.onKey) handlers.onKey(e.code, e);
  });
  window.addEventListener('keyup', (e) => {
    const k = codeMap[e.code] || e.code;
    input.keys.delete(k);
    if (!e.shiftKey) input.keys.delete('Shift');
    if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') input.keys.delete('Shift');
  });
  window.addEventListener('blur', () => {
    input.keys.clear();
    input.lmb = input.rmb = false;
  });
  document.addEventListener('pointerlockchange', () => {
    input.locked = document.pointerLockElement === canvas;
    if (handlers.onLockChange) handlers.onLockChange(input.locked);
  });
  window.addEventListener('mousemove', (e) => {
    if (input.locked) {
      input.mdx += e.movementX;
      input.mdy += e.movementY;
    } else if (input.rmb) {
      input.mdx += e.movementX;
      input.mdy += e.movementY;
    }
  });
  canvas.addEventListener('mousedown', (e) => {
    if (!input.enabled) return;
    if (e.button === 0) {
      input.lmb = true;
      input.clicked = true;
    }
    if (e.button === 2) input.rmb = true;
    if (!input.locked && !isTouch() && e.button === 0 && handlers.wantLock && handlers.wantLock()) canvas.requestPointerLock?.();
  });
  window.addEventListener('mouseup', (e) => {
    if (e.button === 0) input.lmb = false;
    if (e.button === 2) input.rmb = false;
  });
  canvas.addEventListener('contextmenu', (e) => e.preventDefault());
  canvas.addEventListener('wheel', (e) => {
    input.wheel += Math.sign(e.deltaY);
    e.preventDefault();
  }, { passive: false });
  initTouch(canvas, handlers);
}

export function releaseLock() {
  if (document.pointerLockElement) document.exitPointerLock();
}

export function consumeLook() {
  const o = { x: input.mdx, y: input.mdy };
  input.mdx = input.mdy = 0;
  return o;
}

export function endFrame() {
  input.pressed.clear();
  input.clicked = false;
  input.wheel = 0;
}

export const down = (k) => input.keys.has(k);

// ---------- מגע ----------
function initTouch(canvas, handlers) {
  if (!isTouch()) return;
  const stick = document.getElementById('touch-stick');
  const knob = document.getElementById('touch-knob');
  const btns = document.getElementById('touch-buttons');
  if (!stick) return;
  document.body.classList.add('touch');
  let stickId = null, lookId = null, lx = 0, ly = 0;
  const R = 55;
  stick.addEventListener('touchstart', (e) => {
    const t = e.changedTouches[0];
    stickId = t.identifier;
    e.preventDefault();
    upd(t);
  }, { passive: false });
  const upd = (t) => {
    const r = stick.getBoundingClientRect();
    const cx = r.left + r.width / 2, cy = r.top + r.height / 2;
    let dx = t.clientX - cx, dy = t.clientY - cy;
    const l = Math.hypot(dx, dy);
    if (l > R) { dx = (dx / l) * R; dy = (dy / l) * R; }
    knob.style.transform = `translate(${dx}px,${dy}px)`;
    input.touch.move.x = dx / R;
    input.touch.move.y = dy / R;
    input.touch.active = true;
  };
  window.addEventListener('touchmove', (e) => {
    for (const t of e.changedTouches) {
      if (t.identifier === stickId) upd(t);
      else if (t.identifier === lookId) {
        input.mdx += (t.clientX - lx) * 1.4;
        input.mdy += (t.clientY - ly) * 1.4;
        lx = t.clientX; ly = t.clientY;
      }
    }
  }, { passive: true });
  window.addEventListener('touchend', (e) => {
    for (const t of e.changedTouches) {
      if (t.identifier === stickId) {
        stickId = null;
        knob.style.transform = '';
        input.touch.move.x = input.touch.move.y = 0;
        input.touch.active = false;
      }
      if (t.identifier === lookId) lookId = null;
    }
  });
  canvas.addEventListener('touchstart', (e) => {
    for (const t of e.changedTouches) {
      if (lookId === null) { lookId = t.identifier; lx = t.clientX; ly = t.clientY; }
    }
  }, { passive: true });
  btns?.addEventListener('touchstart', (e) => {
    const b = e.target.closest('[data-key]');
    if (!b) return;
    e.preventDefault();
    const k = b.dataset.key;
    input.keys.add(k);
    input.pressed.add(k);
    if (handlers.onKey) handlers.onKey(k, e);
    if (k === 'Cast') { input.lmb = true; input.clicked = true; }
  }, { passive: false });
  btns?.addEventListener('touchend', (e) => {
    const b = e.target.closest('[data-key]');
    if (!b) return;
    input.keys.delete(b.dataset.key);
    if (b.dataset.key === 'Cast') input.lmb = false;
  });
}
