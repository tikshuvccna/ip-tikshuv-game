import * as THREE from 'three';
import { World } from './world/world.js';
import { Player } from './player.js';
import { NPCs, NPC_LINES } from './world/npcs.js';
import { Creatures } from './world/creatures.js';
import { Collectibles, Movables, Targets, Braziers, Cauldrons, Chests, RingRace, INGREDIENTS } from './world/items.js';
import { Spells, SPELLS } from './spells.js';
import { PotionSystem } from './potions.js';
import { UI } from './ui.js';
import { showLoading, showTitle } from './screens.js';
import { initInput, endFrame, input, releaseLock, down } from './input.js';
import { state, load, save, on, addScore, completedCount } from './state.js';
import { ZONES, zoneById } from './world/zonesMeta.js';
import { heightAt } from './world/terrain.js';
import { initAudio, sfx } from './audio.js';
import { ZoneSession } from './learn/engine.js';
import { getContent } from './learn/zones/index.js';
import { $, h, pick, formatNum } from './util.js';
import { HOUSES } from './world/characters.js';

const canvas = $('#game');
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: 'high-performance' });
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.05;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFShadowMap;

const hadSave = load();
const camera = new THREE.PerspectiveCamera(62, innerWidth / innerHeight, 0.3, 6000);
const world = new World(renderer, state.settings.quality);
const game = { renderer, camera, world, mode: 'loading' };
window.__game = game;

function applyPixelRatio() {
  const q = state.settings.quality;
  renderer.setPixelRatio(Math.min(devicePixelRatio, [1, 1.4, 1.75][q]));
  renderer.setSize(innerWidth, innerHeight);
  world.fx?.setViewport(innerHeight * renderer.getPixelRatio());
}
addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  applyPixelRatio();
});
applyPixelRatio();

game.setQuality = (q) => {
  state.settings.quality = q;
  world.quality = q;
  world.terrain.quality = q;
  world.applyQuality();
  applyPixelRatio();
};

// ------------------------------------------------------------------
async function boot() {
  const loading = showLoading();
  initInput(canvas, {
    onKey: (code, e) => onKey(code, e),
    onLockChange: () => {},
    wantLock: () => game.mode === 'play' && !game.ui.blocking,
  });
  await world.load((v, t) => loading.set(v * 0.8, t));
  loading.set(0.82, 'מציירים את המפה...');
  world.fx.setViewport(innerHeight * renderer.getPixelRatio());

  game.player = new Player(world);
  game.player.camera = camera;
  game.npcs = new NPCs(world);
  game.creatures = new Creatures(world);
  loading.set(0.88, 'מאכלסים את העולם בקסם...');
  await new Promise((r) => setTimeout(r, 0));
  game.items = {
    collectibles: new Collectibles(world),
    movables: new Movables(world),
    targets: new Targets(world),
    braziers: new Braziers(world),
    cauldrons: new Cauldrons(world),
    chests: new Chests(world),
    race: new RingRace(world),
  };
  game.potions = new PotionSystem(game.player, world);
  game.ui = new UI(game);
  game.hooks = {
    toast: (m, t) => game.ui.toast(m, t),
    onSpellSelect: () => {},
  };
  game.spells = new Spells(world, game.player, game);
  await game.ui.buildMap((p) => loading.set(0.9 + p * 0.1, 'מציירים את המפה...'));
  game.ui.hud.classList.add('hidden');
  loading.set(1, 'מוכן!');
  setTimeout(() => loading.hide(), 400);
  game.world.atmo.time = state.time || 0.36;
  game.mode = 'title';
  game.player.holder.visible = false;
  game.ui.titleOpen = true;
  showTitle(hadSave, { onStart: startGame });
  requestAnimationFrame(frame);
}

// ------------------------------------------------------------------
function startGame(cont) {
  initAudio();
  if (!cont) {
    // איפוס מצב למשחק חדש (שומר הגדרות)
    const keep = { name: state.name, house: state.house, level: state.level, settings: state.settings };
    Object.assign(state, { score: 0, coins: 0, snitch: 0, found: {}, broom: 'student', time: 0.36 });
    state.ingredients = { herb: 0, mushroom: 0, crystal: 0, flower: 0 };
    state.potions = { speed: 0, jump: 0, night: 0, luck: 0, flight: 0 };
    ZONES.forEach((z) => (state.zones[z.id] = { done: false, stars: 0, best: 0, plays: 0 }));
    Object.assign(state, keep);
    state.pos = null;
    state.seenIntro = false;
    game.items.collectibles.applyFound();
    game.items.chests.apply();
  }
  // צבעי הדמות לפי הבית
  rebuildPlayer();
  game.ui.titleOpen = false;
  game.ui.refreshBadge();
  game.ui.hud.classList.remove('hidden');
  game.mode = 'play';
  const p = game.player;
  p.holder.visible = true;
  if (cont && state.pos) p.teleport(state.pos.x, state.pos.z);
  else p.teleport(0, 24);
  p.yaw = Math.PI;
  p.facing = Math.atan2(-Math.sin(p.yaw), -Math.cos(p.yaw));
  p.pitch = 0.15;
  p.camInit = false;
  p.setBroom(state.broom);
  save();
  if (!state.seenIntro) {
    state.seenIntro = true;
    setTimeout(() => {
      game.ui.openMenu('help');
      game.ui.toast(`ברוך הבא, ${state.name}! 🧙 קרני האור הצבעוניות מסמנות את מגדלי הלימוד.`, 'good', 6000);
    }, 700);
  }
}

function rebuildPlayer() {
  const p = game.player;
  const old = p.holder;
  const hs = HOUSES[state.house] || HOUSES[1];
  // בניית הדמות מחדש בצבעי הבית שנבחר
  world.scene.remove(old);
  const np = new Player(world);
  np.camera = camera;
  game.player = np;
  game.potions.player = np;
  game.spells.player = np;
}

game.toTitle = () => {
  save();
  game.mode = 'title';
  game.player.holder.visible = false;
  game.ui.hud.classList.add('hidden');
  game.ui.titleOpen = true;
  releaseLock();
  showTitle(true, { onStart: startGame });
};

game.fastTravel = (zoneId) => {
  const pt = world.zonePoints[zoneId];
  const f = $('#fade') || document.body.appendChild(h('div', { id: 'fade' }));
  f.classList.add('on');
  setTimeout(() => {
    game.player.teleport(pt.x, pt.z + 6, game.player.mode === 'broom' ? 3 : 0);
    game.player.camInit = false;
    game.player.yaw = 0;
    sfx('magic');
    world.fx.burst(pt.x, pt.y + 1, pt.z + 6, pt.color, 80, 8, 1, 1.2, {});
    f.classList.remove('on');
  }, 500);
};

game.openZone = async (id) => {
  const zone = zoneById(id);
  const content = getContent(id);
  if (!content) { game.ui.toast('האזור הזה עוד בבנייה… ✨', 'warn'); return; }
  releaseLock();
  game.ui.overlayOpen++;
  game.player.frozen = true;
  game.ui.closeDialogue();
  const s = new ZoneSession(game, zone, content);
  game.session = s;
  s.open();
};

game.closeLearn = () => {
  game.ui.overlayOpen = Math.max(0, game.ui.overlayOpen - 1);
  game.player.frozen = false;
  game.session = null;
  game.ui.refreshBadge();
  save();
};

// ------------------------------------------------------------------
function nearestZone(pos, maxD = 8) {
  for (const z of ZONES) {
    const pt = world.zonePoints[z.id];
    if (Math.hypot(pt.x - pos.x, pt.z - pos.z) < maxD && Math.abs(pt.y - pos.y) < 8) return z;
  }
  return null;
}

function interact() {
  const ui = game.ui;
  if (ui.dialogue) { ui.closeDialogue(); return; }
  const p = game.player;
  const zone = nearestZone(p.pos);
  if (zone) {
    const zs = state.zones[zone.id];
    ui.say(zone.prof, `ברוך הבא ל<b>${zone.name}</b>! כאן נלמד: ${zone.topic}. ${zs.done ? `כבר סיימת אזור זה (${'★'.repeat(zs.stars)}) – אפשר לשחק שוב ולשפר שיא!` : 'מוכן לשיעור קסום עם סימולציות, שאלות ומשחקון?'}`, {
      actions: [{ label: '📖 כניסה לשיעור', cls: 'gold', fn: () => game.openZone(zone.id) }], close: 'אולי אחר כך',
    });
    return;
  }
  const npc = game.npcs.nearest(p.pos, 4.5);
  if (npc) {
    npc.talk = 6;
    if (npc.prof) {
      const z = zoneById(npc.prof);
      const zs = state.zones[z.id];
      ui.say(npc.name, `${zs.done ? 'כל הכבוד על הסיום! ' : 'שלום, תלמיד! '}השיעור בנושא <b>${z.topic}</b> מחכה לך בטבעת הקסם הזוהרת, סמוך לכאן. עמוד בתוך הטבעת ולחץ E.`, { actions: [{ label: '📍 סמן במצפן', fn: () => { ui.waypoint = z.id; ui.toast(`📍 יעד: ${z.name}`); } }] });
    } else {
      ui.say(npc.name, pick(NPC_LINES));
    }
    sfx('click');
    return;
  }
  const chest = game.items.chests.nearest(p.pos);
  if (chest) {
    const gains = game.items.chests.open(chest);
    const names = gains.map((g) => INGREDIENTS[g].icon).join(' ');
    ui.toast(`🎁 תיבת אוצר! קיבלת ${names} ו-15 נקודות`, 'good', 4000);
    return;
  }
  const c = game.items.cauldrons.nearest(p.pos, 5);
  if (c) { ui.openMenu('potions'); return; }
}

function onKey(code, e) {
  if (game.mode !== 'play') return;
  const ui = game.ui;
  if (game.session) return;
  if (code === 'Escape') {
    if (ui.menuOpen) ui.closeMenu();
    else if (ui.dialogue) ui.closeDialogue();
    else ui.openMenu('settings');
    return;
  }
  if (ui.menuOpen) {
    const map = { KeyM: 'map', KeyJ: 'journal', KeyP: 'potions', KeyH: 'help' };
    if (map[code]) { if (ui.menuTab === map[code]) ui.closeMenu(); else { ui.menuTab = map[code]; ui.renderMenu(); } }
    return;
  }
  if (ui.blocking) return;
  switch (code) {
    case 'KeyE': interact(); break;
    case 'KeyB': game.player.toggleBroom(); break;
    case 'KeyQ': game.spells.cycle(); break;
    case 'KeyM': ui.openMenu('map'); break;
    case 'KeyJ': ui.openMenu('journal'); break;
    case 'KeyP': ui.openMenu('potions'); break;
    case 'KeyH': ui.openMenu('help'); break;
    case 'KeyL': game.spells.select(0); game.spells.cast(); break;
    default:
      if (code.startsWith('Digit')) game.spells.select(+code.slice(5) - 1);
  }
}

// ------------------------------------------------------------------
const clock = new THREE.Clock();
let T = 0, saveT = 0, lastRaceTxt = '';
const camTitle = new THREE.Vector3();

function frame() {
  const dt = Math.min(clock.getDelta(), 0.05);
  T += dt;
  const ui = game.ui;
  if (game.mode === 'title') {
    const a = T * 0.06;
    const cx = -150, cz = -540;
    camTitle.set(cx + Math.cos(a) * 330, 130 + Math.sin(T * 0.2) * 20, cz + Math.sin(a) * 330 + 100);
    camera.position.copy(camTitle);
    camera.lookAt(cx, 90, cz);
    camera.fov = 55;
    camera.updateProjectionMatrix();
    world.update(dt, T, new THREE.Vector3(cx, 60, cz + 100), camera, false);
    game.creatures.update(dt, T, camTitle);
    world.fx.update(dt);
    renderer.render(world.scene, camera);
    endFrame();
    requestAnimationFrame(frame);
    return;
  }
  const p = game.player;
  const blocked = ui.blocking;
  p.frozen = blocked || !!game.session;

  p.update(dt, T);
  world.update(dt, T, p.pos, camera, p.mode === 'broom');
  world.fx.update(dt);
  game.npcs.update(dt, T, p.pos);
  game.creatures.update(dt, T, p.pos);
  const it = game.items;
  it.collectibles.update(dt, T, p.pos, { onCollect: (item) => ui.toast(`${INGREDIENTS[item.type].icon} ${INGREDIENTS[item.type].name} +1`, 'info', 1800) });
  it.movables.update(dt, T, p.pos);
  it.targets.update(dt, T, p.pos);
  it.braziers.update(dt, T, p.pos, world.atmo.night);
  it.cauldrons.update(dt, T, p.pos);
  it.chests.update(dt, T, p.pos);
  it.race.update(dt, T, p.pos, p.mode, raceHooks);
  game.potions.update(dt);
  game.spells.update(dt, T);

  // תפיסת סניץ' בטיסה
  const sn = game.creatures.snitch;
  if (sn.caught <= 0 && p.pos.distanceToSquared(sn.pos) < 3.2 * 3.2) game.spells.catchSnitch();

  // קלט לחשים
  if (!blocked && !game.session && (input.locked || document.body.classList.contains('touch'))) {
    if (input.clicked || (input.lmb && game.spells.cool <= 0 && SPELLS[game.spells.selected].id !== 'lumos' && SPELLS[game.spells.selected].id !== 'patronus')) game.spells.cast();
  }
  if (!blocked && input.pressed.has('Shift') && false) { /* שמור */ }

  // אינטראקציה והנחיות
  let prompt = null;
  if (!blocked && !game.session) {
    const z = nearestZone(p.pos);
    if (z) {
      prompt = `<kbd>E</kbd> ${z.icon} כניסה ל<b>${z.name}</b>`;
      if (!state.zones[z.id].visited) {
        state.zones[z.id].visited = true;
        ui.toast(`🌟 גילית את ${z.name}!`, 'good', 3500);
        sfx('levelup');
        save();
      }
    } else {
      const npc = game.npcs.nearest(p.pos, 4.5);
      if (npc) prompt = `<kbd>E</kbd> שיחה עם <b>${npc.name}</b>`;
      else if (game.items.chests.nearest(p.pos)) prompt = '<kbd>E</kbd> 🎁 פתיחת תיבת אוצר';
      else if (game.items.cauldrons.nearest(p.pos, 5)) prompt = '<kbd>E</kbd> 🫕 קלחת – בישול שיקויים';
    }
    // גילוי אזורים ממרחק
    for (const zz of ZONES) {
      const pt = world.zonePoints[zz.id];
      if (!state.zones[zz.id].visited && Math.hypot(pt.x - p.pos.x, pt.z - p.pos.z) < 60) {
        state.zones[zz.id].visited = true;
        ui.toast(`🌟 גילית את ${zz.name}! עכשיו אפשר לטלפרט אליו מהיומן`, 'good', 4000);
        sfx('levelup');
      }
    }
  }
  if (p.edgeWarn > 0) prompt = '🌊 הים הסוער מונע ממך להמשיך – חזור ליבשה';
  ui.prompt(prompt);
  ui.update(dt, T);

  saveT += dt;
  if (saveT > 10) {
    saveT = 0;
    state.pos = { x: p.pos.x, z: p.pos.z };
    state.time = world.atmo.time;
    save();
  }
  renderer.render(world.scene, camera);
  endFrame();
  requestAnimationFrame(frame);
}

const raceHooks = {
  onStart: () => { game.ui.el.race.classList.remove('hidden'); game.ui.toast('🏁 המרוץ התחיל! עברו בכל הטבעות', 'good'); sfx('levelup'); },
  onTime: (t, next, total) => {
    const el = game.ui.el.race;
    const txt = `🏁 ${t.toFixed(1)}s · טבעת ${next}/${total}`;
    if (txt !== lastRaceTxt) { el.textContent = txt; lastRaceTxt = txt; }
  },
  onRing: () => {},
  onEnd: (finished, time) => {
    game.ui.el.race.classList.add('hidden');
    if (finished) {
      const par = 70;
      const pts = Math.round(Math.max(40, Math.min(300, 300 * (par / time))));
      const prev = state.ring.best;
      if (!prev || time < prev) state.ring.best = time;
      addScore(pts, 'מרוץ טבעות');
      game.ui.toast(`🏆 סיימת את המרוץ ב-${time.toFixed(1)} שניות! +${pts} נקודות${prev && time >= prev ? '' : ' · שיא חדש!'}`, 'good', 5000);
      sfx('levelup');
    } else game.ui.toast('המרוץ הופסק', 'warn');
  },
};

boot().catch((e) => {
  console.error(e);
  const el = $('#loading');
  el.style.display = '';
  el.innerHTML = '<div class="ld-box"><h2>אופס… משהו השתבש</h2><p>' + (e.message || e) + '</p><button class="btn" onclick="location.reload()">נסה שוב</button></div>';
});
