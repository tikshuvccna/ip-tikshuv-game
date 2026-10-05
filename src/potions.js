import { state, save, setLuck } from './state.js';
import { sfx } from './audio.js';

export const POTIONS = [
  { id: 'speed', name: 'שיקוי מהירות', icon: '⚡', color: '#ff5a7a', recipe: { flower: 2, herb: 1 }, dur: 60, desc: 'ריצה מהירה פי 1.6 למשך דקה.' },
  { id: 'jump', name: 'שיקוי קלילות', icon: '🪶', color: '#9ad7ff', recipe: { herb: 2, mushroom: 1 }, dur: 60, desc: 'קפיצות גבוהות ונחיתה רכה כמו נוצה.' },
  { id: 'night', name: 'שיקוי ראיית לילה', icon: '🌙', color: '#7fe3ff', recipe: { mushroom: 2, crystal: 1 }, dur: 120, desc: 'הלילה נעשה בהיר וברור.' },
  { id: 'flight', name: 'שיקוי מטאטא-על', icon: '🚀', color: '#ff9a3a', recipe: { crystal: 2, flower: 1 }, dur: 60, desc: 'המטאטא שלך עף מהר יותר ב-50%.' },
  { id: 'luck', name: 'שיקוי המזל', icon: '🍀', color: '#ffd35c', recipe: { herb: 1, mushroom: 1, crystal: 1, flower: 1 }, dur: 300, desc: '+10% נקודות על כל תשובה נכונה במשך 5 דקות.' },
];

export class PotionSystem {
  constructor(player, world) {
    this.player = player;
    this.world = world;
    this.active = {}; // id -> זמן שנותר
  }

  canBrew(id) {
    const p = POTIONS.find((x) => x.id === id);
    return Object.entries(p.recipe).every(([k, n]) => state.ingredients[k] >= n);
  }

  brew(id) {
    if (!this.canBrew(id)) return false;
    const p = POTIONS.find((x) => x.id === id);
    for (const [k, n] of Object.entries(p.recipe)) state.ingredients[k] -= n;
    state.potions[id]++;
    save();
    sfx('potion');
    return true;
  }

  drink(id) {
    if (state.potions[id] <= 0) return false;
    state.potions[id]--;
    const p = POTIONS.find((x) => x.id === id);
    this.active[id] = p.dur;
    if (id === 'luck') setLuck(p.dur * 1000);
    save();
    sfx('magic');
    const pl = this.player;
    this.world.fx.burst(pl.pos.x, pl.pos.y + 1.2, pl.pos.z, p.color, 60, 5, 1, 1.4, { gravity: -1 });
    return true;
  }

  update(dt) {
    const m = this.player.mods;
    m.speed = 1; m.jump = 1; m.flight = 1; m.float = false;
    let vision = 0;
    for (const id in this.active) {
      this.active[id] -= dt;
      if (this.active[id] <= 0) { delete this.active[id]; continue; }
      if (id === 'speed') m.speed = 1.6;
      if (id === 'jump') { m.jump = 1.5; m.float = true; }
      if (id === 'flight') m.flight = 1.5;
      if (id === 'night') vision = 1;
    }
    this.world.atmo.vision = vision;
  }
}
