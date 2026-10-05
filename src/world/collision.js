// מערכת התנגשויות פשוטה: עיגולים וקופסאות מסתובבות בגריד מרחבי

const CELL = 32;

export class Colliders {
  constructor() {
    this.map = new Map();
  }

  _cells(c, fn) {
    const r = c.type === 'circle' ? c.r : Math.hypot(c.hw, c.hd);
    const x0 = Math.floor((c.x - r) / CELL), x1 = Math.floor((c.x + r) / CELL);
    const z0 = Math.floor((c.z - r) / CELL), z1 = Math.floor((c.z + r) / CELL);
    for (let i = x0; i <= x1; i++) for (let j = z0; j <= z1; j++) fn(i + ',' + j);
  }

  add(c) {
    if (c.type === 'box') {
      c.cos = Math.cos(c.rot || 0);
      c.sin = -Math.sin(c.rot || 0); // תואם ל-rotation.y של three
    }
    this._cells(c, (k) => {
      let a = this.map.get(k);
      if (!a) this.map.set(k, (a = []));
      a.push(c);
    });
    return c;
  }

  remove(c) {
    this._cells(c, (k) => {
      const a = this.map.get(k);
      if (!a) return;
      const i = a.indexOf(c);
      if (i >= 0) a.splice(i, 1);
      if (!a.length) this.map.delete(k);
    });
  }

  addAll(list) {
    return list.map((c) => this.add(c));
  }

  removeAll(list) {
    for (const c of list) this.remove(c);
  }

  // דוחף את p (אובייקט עם x,z) החוצה; y = גובה רגליים, hgt = גובה הגוף
  resolve(p, radius, y, hgt = 1.8) {
    const cx = Math.floor(p.x / CELL), cz = Math.floor(p.z / CELL);
    let hit = false;
    for (let i = cx - 1; i <= cx + 1; i++) {
      for (let j = cz - 1; j <= cz + 1; j++) {
        const a = this.map.get(i + ',' + j);
        if (!a) continue;
        for (let k = 0; k < a.length; k++) {
          const c = a[k];
          if (y > c.top - 0.05) continue;
          if (c.y0 !== undefined && y + hgt < c.y0) continue;
          if (c.type === 'circle') {
            const dx = p.x - c.x, dz = p.z - c.z;
            const rr = c.r + radius;
            const d2 = dx * dx + dz * dz;
            if (d2 < rr * rr) {
              const d = Math.sqrt(d2) || 0.0001;
              p.x = c.x + (dx / d) * rr;
              p.z = c.z + (dz / d) * rr;
              hit = true;
            }
          } else {
            const dx = p.x - c.x, dz = p.z - c.z;
            // לקואורדינטות מקומיות
            const lx = dx * c.cos + dz * c.sin;
            const lz = -dx * c.sin + dz * c.cos;
            const ex = c.hw + radius, ez = c.hd + radius;
            if (Math.abs(lx) < ex && Math.abs(lz) < ez) {
              const px = ex - Math.abs(lx), pz = ez - Math.abs(lz);
              let nlx = lx, nlz = lz;
              if (px < pz) nlx = Math.sign(lx || 1) * ex;
              else nlz = Math.sign(lz || 1) * ez;
              p.x = c.x + nlx * c.cos - nlz * c.sin;
              p.z = c.z + nlx * c.sin + nlz * c.cos;
              hit = true;
            }
          }
        }
      }
    }
    return hit;
  }
}

export const colliders = new Colliders();
