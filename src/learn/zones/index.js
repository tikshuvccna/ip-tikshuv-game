// רישום תוכן אזורי הלימוד
import z1 from './z1.js';
import z2 from './z2.js';
import z3 from './z3.js';
import z4 from './z4.js';
import z5 from './z5.js';
import z6 from './z6.js';
import z7 from './z7.js';

const registry = { z1, z2, z3, z4, z5, z6, z7 };

export function registerZone(id, content) {
  registry[id] = content;
}
export function getContent(id) {
  return registry[id];
}
