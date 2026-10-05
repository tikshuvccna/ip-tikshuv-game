// רישום תוכן אזורי הלימוד
import z1 from './z1.js';
import z2 from './z2.js';

const registry = { z1, z2 };

export function registerZone(id, content) {
  registry[id] = content;
}
export function getContent(id) {
  return registry[id];
}
