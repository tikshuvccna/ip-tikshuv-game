import * as THREE from 'three';
import { mulberry32, clamp } from '../util.js';

// יצירת טקסטורות פרוצדורליות לבניינים
function canvasTex(size, draw, { srgb = true, aniso = 8 } = {}) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  const g = c.getContext('2d');
  draw(g, size);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = srgb ? THREE.SRGBColorSpace : THREE.NoColorSpace;
  t.anisotropy = aniso;
  return t;
}

function speckle(g, S, r, amt, light = 255) {
  const img = g.getImageData(0, 0, S, S);
  for (let i = 0; i < img.data.length; i += 4) {
    const v = (r() - 0.5) * amt;
    img.data[i] = clamp(img.data[i] + v, 0, 255);
    img.data[i + 1] = clamp(img.data[i + 1] + v, 0, 255);
    img.data[i + 2] = clamp(img.data[i + 2] + v, 0, 255);
  }
  g.putImageData(img, 0, 0);
}

function stoneTexture() {
  return canvasTex(256, (g, S) => {
    const r = mulberry32(5);
    g.fillStyle = '#6d6a66';
    g.fillRect(0, 0, S, S);
    const rows = 8, rh = S / rows;
    for (let j = 0; j < rows; j++) {
      let x = (j % 2) * 20 - 40;
      while (x < S) {
        const w = 48 + r() * 36;
        const l = 150 + r() * 70;
        g.fillStyle = `rgb(${l},${l - 4},${l - 10})`;
        g.fillRect(x + 2, j * rh + 2, w - 4, rh - 4);
        // wrap
        if (x + w > S) g.fillRect(x - S + 2, j * rh + 2, w - 4, rh - 4);
        x += w;
      }
    }
    speckle(g, S, r, 40);
  });
}

function plasterTexture() {
  return canvasTex(256, (g, S) => {
    const r = mulberry32(8);
    g.fillStyle = '#e9dcc0';
    g.fillRect(0, 0, S, S);
    for (let i = 0; i < 600; i++) {
      g.fillStyle = `rgba(${120 + r() * 60},${100 + r() * 50},${70 + r() * 40},${0.03 + r() * 0.05})`;
      g.beginPath();
      g.arc(r() * S, r() * S, 4 + r() * 18, 0, 7);
      g.fill();
    }
    speckle(g, S, r, 22);
  });
}

function woodTexture() {
  return canvasTex(256, (g, S) => {
    const r = mulberry32(11);
    const n = 8, w = S / n;
    for (let i = 0; i < n; i++) {
      const base = 110 + r() * 40;
      g.fillStyle = `rgb(${base + 30},${base},${base - 45})`;
      g.fillRect(i * w, 0, w, S);
      for (let k = 0; k < 18; k++) {
        g.strokeStyle = `rgba(40,20,5,${0.1 + r() * 0.15})`;
        g.lineWidth = 1 + r() * 1.5;
        g.beginPath();
        const x = i * w + r() * w;
        g.moveTo(x, 0);
        g.bezierCurveTo(x + (r() - 0.5) * 6, S * 0.3, x + (r() - 0.5) * 6, S * 0.6, x + (r() - 0.5) * 4, S);
        g.stroke();
      }
      g.fillStyle = 'rgba(0,0,0,0.5)';
      g.fillRect(i * w, 0, 2, S);
    }
    speckle(g, S, r, 20);
  });
}

function roofTexture() {
  return canvasTex(256, (g, S) => {
    const r = mulberry32(21);
    g.fillStyle = '#888';
    g.fillRect(0, 0, S, S);
    const rows = 8, rh = S / rows, cols = 8, cw = S / cols;
    for (let j = 0; j < rows; j++) {
      for (let i = -1; i <= cols; i++) {
        const x = i * cw + (j % 2) * cw * 0.5;
        const l = 190 + r() * 60;
        g.fillStyle = `rgb(${l},${l},${l})`;
        g.beginPath();
        g.moveTo(x + 1, j * rh);
        g.lineTo(x + cw - 1, j * rh);
        g.lineTo(x + cw - 1, j * rh + rh * 0.65);
        g.quadraticCurveTo(x + cw / 2, j * rh + rh * 1.25, x + 1, j * rh + rh * 0.65);
        g.closePath();
        g.fill();
      }
    }
    speckle(g, S, r, 28);
  });
}

function clothTexture() {
  return canvasTex(64, (g, S) => {
    g.fillStyle = '#fff';
    g.fillRect(0, 0, S, S);
    g.strokeStyle = 'rgba(0,0,0,0.08)';
    for (let i = 0; i < S; i += 4) {
      g.beginPath(); g.moveTo(i, 0); g.lineTo(i, S); g.stroke();
      g.beginPath(); g.moveTo(0, i); g.lineTo(S, i); g.stroke();
    }
  });
}

export const MAT = {};
export const UVSCALE = { stone: 0.25, plaster: 0.25, wood: 0.35, roof: 0.5, dark: 0.25 };

export function initMaterials() {
  const stone = stoneTexture();
  MAT.stone = new THREE.MeshStandardMaterial({ map: stone, bumpMap: stone, bumpScale: 2.5, vertexColors: true, roughness: 0.95 });
  MAT.plaster = new THREE.MeshStandardMaterial({ map: plasterTexture(), vertexColors: true, roughness: 0.95 });
  const wood = woodTexture();
  MAT.wood = new THREE.MeshStandardMaterial({ map: wood, bumpMap: wood, bumpScale: 1.5, vertexColors: true, roughness: 0.85 });
  const roof = roofTexture();
  MAT.roof = new THREE.MeshStandardMaterial({ map: roof, bumpMap: roof, bumpScale: 2, vertexColors: true, roughness: 0.7 });
  MAT.flat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.8 });
  MAT.metal = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.3, metalness: 0.85 });
  MAT.cloth = new THREE.MeshStandardMaterial({ map: clothTexture(), vertexColors: true, roughness: 0.9, side: THREE.DoubleSide });
  MAT.leaf = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.9, flatShading: true });
  MAT.window = new THREE.MeshStandardMaterial({ color: '#2a2418', emissive: '#ffb45a', emissiveIntensity: 0.4, roughness: 0.4 });
  MAT.glow = new THREE.MeshBasicMaterial({ vertexColors: true, toneMapped: false });
  MAT.crystal = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.15, metalness: 0.2, emissive: '#ffffff', emissiveIntensity: 0.0 });
  return MAT;
}

export function setNightGlow(night) {
  MAT.window.emissiveIntensity = 0.25 + night * 2.8;
}
