/* Renders favicon.ico + apple-touch-icon.png from the NovaRidge mark — pure node, no deps */
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');
const ROOT = path.join(__dirname, '..');

/* ---- tiny PNG encoder ---- */
const CRC_T = (() => { const t = []; for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; } return t; })();
const crc32 = (b) => { let c = 0xffffffff; for (const x of b) c = CRC_T[(c ^ x) & 255] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0; };
const chunk = (type, data) => {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length);
  const td = Buffer.concat([Buffer.from(type), data]);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(td));
  return Buffer.concat([len, td, crc]);
};
function png(w, h, rgba) {
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(w, 0); ihdr.writeUInt32BE(h, 4);
  ihdr[8] = 8; ihdr[9] = 6; // 8-bit RGBA
  const raw = Buffer.alloc((w * 4 + 1) * h);
  for (let y = 0; y < h; y++) { raw[y * (w * 4 + 1)] = 0; rgba.copy(raw, y * (w * 4 + 1) + 1, y * w * 4, (y + 1) * w * 4); }
  return Buffer.concat([
    Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]),
    chunk('IHDR', ihdr),
    chunk('IDAT', zlib.deflateSync(raw, { level: 9 })),
    chunk('IEND', Buffer.alloc(0)),
  ]);
}

/* ---- vector rasterizer (supersampled) ---- */
const mix = (a, b, t) => a + (b - a) * t;
const clamp01 = (x) => Math.max(0, Math.min(1, x));
function segDist(px, py, ax, ay, bx, by) {
  const dx = bx - ax, dy = by - ay;
  const t = clamp01(((px - ax) * dx + (py - ay) * dy) / (dx * dx + dy * dy));
  const qx = ax + dx * t, qy = ay + dy * t;
  return Math.hypot(px - qx, py - qy);
}
// palette
const INK = [18, 46, 28], CYAN = [124, 181, 40], AMBER = [255, 201, 7];

function render(size) {
  const S = 4; // supersample
  const W = size * S;
  const buf = Buffer.alloc(size * size * 4);
  // geometry in unit space
  const chev = [[0.21, 0.645], [0.5, 0.355], [0.79, 0.645]]; // main chevron
  const chev2 = [[0.345, 0.74], [0.5, 0.585], [0.655, 0.74]]; // echo
  const mainW = 0.048, echoW = 0.031;
  const rad = 0.21 * W; // corner radius
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let r = 0, g = 0, b = 0, a = 0;
      for (let sy = 0; sy < S; sy++) for (let sx = 0; sx < S; sx++) {
        const px = x * S + sx + 0.5, py = y * S + sy + 0.5;
        // rounded-rect background coverage
        const cx = Math.max(rad - px, px - (W - rad), 0);
        const cy = Math.max(rad - py, py - (W - rad), 0);
        const inBg = Math.hypot(cx, cy) <= rad;
        if (!inBg) continue;
        let cr = INK[0], cg = INK[1], cb = INK[2];
        const ux = px / W, uy = py / W;
        // echo chevron (under)
        const d2 = Math.min(segDist(ux, uy, ...chev2[0], ...chev2[1]), segDist(ux, uy, ...chev2[1], ...chev2[2]));
        if (d2 < echoW / 2) { cr = mix(cr, CYAN[0], 0.5); cg = mix(cg, CYAN[1], 0.5); cb = mix(cb, CYAN[2], 0.5); }
        // main chevron with gradient along x
        const d1 = Math.min(segDist(ux, uy, ...chev[0], ...chev[1]), segDist(ux, uy, ...chev[1], ...chev[2]));
        if (d1 < mainW / 2) {
          const t = clamp01((ux - 0.21) / 0.58);
          cr = mix(CYAN[0], AMBER[0], t); cg = mix(CYAN[1], AMBER[1], t); cb = mix(CYAN[2], AMBER[2], t);
        }
        // apex dot
        if (Math.hypot(ux - 0.5, uy - 0.355) < 0.052) { cr = AMBER[0]; cg = AMBER[1]; cb = AMBER[2]; }
        r += cr; g += cg; b += cb; a += 255;
      }
      const n = S * S, i = (y * size + x) * 4;
      buf[i] = r / n; buf[i + 1] = g / n; buf[i + 2] = b / n; buf[i + 3] = a / n;
    }
  }
  return buf;
}

/* ---- ICO wrapper (PNG-embedded entries) ---- */
function ico(entries) {
  const head = Buffer.alloc(6);
  head.writeUInt16LE(0, 0); head.writeUInt16LE(1, 2); head.writeUInt16LE(entries.length, 4);
  let off = 6 + 16 * entries.length;
  const dirs = [], datas = [];
  for (const [size, data] of entries) {
    const d = Buffer.alloc(16);
    d[0] = size === 256 ? 0 : size; d[1] = size === 256 ? 0 : size;
    d[4] = 1; d[6] = 32;
    d.writeUInt32LE(data.length, 8); d.writeUInt32LE(off, 12);
    dirs.push(d); datas.push(data); off += data.length;
  }
  return Buffer.concat([head, ...dirs, ...datas]);
}

const p16 = png(16, 16, render(16));
const p32 = png(32, 32, render(32));
const p48 = png(48, 48, render(48));
fs.writeFileSync(path.join(ROOT, 'favicon.ico'), ico([[16, p16], [32, p32], [48, p48]]));
fs.writeFileSync(path.join(ROOT, 'apple-touch-icon.png'), png(180, 180, render(180)));
fs.writeFileSync(path.join(ROOT, 'assets/img/icon-512.png'), png(512, 512, render(512)));
console.log('Icons written: favicon.ico (16/32/48), apple-touch-icon.png (180), icon-512.png');
