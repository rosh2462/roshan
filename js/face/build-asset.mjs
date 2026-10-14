/**
 * Rebuild the small photo-depth portrait used by the face reveal.
 * This is an artist-defined relief, not a reconstruction or a 3D scan.
 * The original WebP stays untouched; Pillow only reads its RGB samples.
 * Run: node js/face/build-asset.mjs --python /path/to/python-with-Pillow
 */
import { writeFile, mkdir } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { gzipSync } from 'node:zlib';
import { fileURLToPath } from 'node:url';
import { portraitPresentation } from './asset.js';

const source = fileURLToPath(new URL('../../assets/roshan-reveal-after.webp', import.meta.url));
const output = fileURLToPath(new URL('../../assets/face/', import.meta.url));
const pythonArg = process.argv.indexOf('--python');
const python = pythonArg >= 0 ? process.argv[pythonArg + 1] : 'python';
const width = portraitPresentation.sourceWidth;
const height = portraitPresentation.sourceHeight;
const cropBottom = portraitPresentation.sourceRect.top + portraitPresentation.sourceRect.height;
const grid = 10;
const rgb = execFileSync(python, ['-c',
  'from PIL import Image; import sys; im=Image.open(sys.argv[1]).convert("RGB"); sys.stdout.buffer.write(im.tobytes())',
  source], { maxBuffer: width * height * 4 });
if (rgb.length !== width * height * 3) throw new Error('Unexpected portrait dimensions.');

// Trace the existing foreground; the generated relief ends at the upper chest.
// Only geometry is cropped. The source photograph and UV space stay unchanged.
const contour = portraitPresentation.sourceContour;
function rowExtent(y) {
  const intersections = [];
  for (let i = 0; i < contour.length; i++) {
    const [x0, y0] = contour[i];
    const [x1, y1] = contour[(i + 1) % contour.length];
    if (y < Math.min(y0, y1) || y > Math.max(y0, y1)) continue;
    if (y0 === y1) intersections.push(x0, x1);
    else intersections.push(x0 + (y - y0) / (y1 - y0) * (x1 - x0));
  }
  return [Math.min(...intersections), Math.max(...intersections)];
}
const gaussian = (x, y, cx, cy, sx, sy) => Math.exp(-0.5 * (((x - cx) / sx) ** 2 + ((y - cy) / sy) ** 2));
function depth(x, y) {
  // Smooth low-amplitude relief: hair/cranium, cheeks, nose, neck, chest, arms.
  // A single view cannot provide anatomical geometry or hidden surfaces.
  return 0.09
    + 0.21 * gaussian(x, y, 430, 202, 114, 152)
    + 0.13 * gaussian(x, y, 441, 273, 78, 101)
    + 0.085 * gaussian(x, y, 445, 260, 20, 35)
    + 0.034 * gaussian(x, y, 389, 271, 35, 43)
    + 0.036 * gaussian(x, y, 491, 266, 34, 43)
    + 0.052 * gaussian(x, y, 447, 399, 62, 95)
    + 0.12 * gaussian(x, y, 485, 591, 244, 176)
    + 0.10 * gaussian(x, y, 484, 847, 219, 80);
}

const vertices = [];
const rows = [];
// Sample the same precise contour without multiplying every interior row at
// each tiny hair curl. Extra ear/neck rows preserve the important concavities.
const scanlines = new Set();
for (let y = 242; y <= 425; y += 5) scanlines.add(y);
scanlines.add(Math.min(...contour.map(([, y]) => y)));
scanlines.add(cropBottom);
for (let y = 47; y <= cropBottom; y += grid) scanlines.add(y);
for (const y of [...scanlines].sort((a, b) => a - b)) {
  const [left, right] = rowExtent(y);
  const xs = [left];
  for (let x = 150; x <= 837; x += grid) {
    if (x > left + 0.001 && x < right - 0.001) xs.push(x);
  }
  if (right > left + 0.001) xs.push(right);
  const row = [];
  for (const x of xs) {
    const sampleX = Math.max(0, Math.min(width - 1, Math.round(x)));
    const sampleY = Math.max(0, Math.min(height - 1, Math.round(y)));
    const at = (sampleY * width + sampleX) * 3;
    row.push(vertices.length);
    vertices.push({ x, y, z: depth(x, y), color: [rgb[at], rgb[at + 1], rgb[at + 2]] });
  }
  rows.push(row);
}
if (vertices.length >= 65536) throw new Error('Portrait exceeds Uint16 index budget.');
const indices = [];
for (let r = 0; r < rows.length - 1; r++) {
  const upper = rows[r];
  const lower = rows[r + 1];
  let a = 0;
  let b = 0;
  // Merge neighboring scanlines as a monotone strip. Exact silhouette
  // intersections replace rejected edge quads, so the border is continuous.
  while (a < upper.length - 1 || b < lower.length - 1) {
    const nextUpper = a < upper.length - 1 ? vertices[upper[a + 1]].x : Infinity;
    const nextLower = b < lower.length - 1 ? vertices[lower[b + 1]].x : Infinity;
    if (nextUpper < nextLower) indices.push(upper[a], lower[b], upper[++a]);
    else indices.push(upper[a], lower[b], lower[++b]);
  }
}

const lo = [Infinity, Infinity, Infinity];
const hi = [-Infinity, -Infinity, -Infinity];
for (const v of vertices) {
  const p = [v.x, v.y, v.z];
  for (let j = 0; j < 3; j++) { lo[j] = Math.min(lo[j], p[j]); hi[j] = Math.max(hi[j], p[j]); }
}
const frame = portraitPresentation.sourceRect;
const scale = 2 / frame.height;
const center = [frame.left + frame.width / 2, frame.top + frame.height / 2, (lo[2] + hi[2]) / 2];
const positions = vertices.map(v => [(v.x - center[0]) * scale, (center[1] - v.y) * scale, v.z - center[2]]);
const min = [-frame.width * scale * 0.5, -1, lo[2] - center[2]];
const max = [-min[0], 1, hi[2] - center[2]];
const headerSize = 40;
const buffer = Buffer.alloc(headerSize + vertices.length * 13 + indices.length * 2);
buffer.write('RDP1', 0, 'ascii');
buffer.writeUInt32LE(vertices.length, 4);
buffer.writeUInt32LE(indices.length, 8);
min.concat(max).forEach((n, i) => buffer.writeFloatLE(n, 12 + i * 4));
buffer.writeUInt32LE(1, 36); // Version 1: Uint16 positions / UVs / indices, RGB8.
let offset = headerSize;
positions.forEach(p => p.forEach((n, axis) => {
  buffer.writeUInt16LE(Math.round((n - min[axis]) / (max[axis] - min[axis]) * 65535), offset);
  offset += 2;
}));
vertices.forEach(v => {
  buffer.writeUInt16LE(Math.round(v.x / width * 65535), offset); offset += 2;
  buffer.writeUInt16LE(Math.round((1 - v.y / height) * 65535), offset); offset += 2;
});
vertices.forEach(v => v.color.forEach(c => { buffer.writeUInt8(c, offset++); }));
indices.forEach(i => { buffer.writeUInt16LE(i, offset); offset += 2; });
const compressed = gzipSync(buffer, { level: 9, mtime: 0 });
await mkdir(output, { recursive: true });
await writeFile(`${output}/portrait-depth.bin`, buffer);
await writeFile(`${output}/portrait-depth.bin.gz`, compressed);
// Lazy classic-script form for direct file:// previews. Raw base64 is <100KB
// and avoids a second fallback script or a decompression dependency on file:.
await writeFile(`${output}/portrait-data.js`,
  `/* Generated portrait targets; single-photo approximation, not a 3D scan. */\n` +
  `window.PortraitEmbeddedData={version:6,encoding:"base64",data:"${buffer.toString('base64')}"};\n`);
const css = `/* Generated by js/face/build-asset.mjs; original portrait remains unchanged. */\n` +
  `:root { --portrait-alpha-mask: ${portraitPresentation.maskImage}; }\n` +
  `.reveal-photo--after, .face-portrait__image {\n` +
  `  -webkit-mask-image: var(--portrait-alpha-mask); mask-image: var(--portrait-alpha-mask);\n` +
  `  -webkit-mask-repeat: no-repeat; mask-repeat: no-repeat;\n}\n` +
  `.reveal-photo--after { -webkit-mask-size: cover; mask-size: cover; -webkit-mask-position: center; mask-position: center; }\n` +
  `.face-portrait__image { -webkit-mask-size: 100% 100%; mask-size: 100% 100%; -webkit-mask-position: 0 0; mask-position: 0 0; }\n` +
  `@media (max-width: 860px) { .reveal-photo--after { -webkit-mask-position: 20% 0; mask-position: 20% 0; } }\n` +
  `@media (max-width: 720px) and (orientation: portrait) { .has-story .reveal-photo--after { -webkit-mask-position: left top; mask-position: left top; } }\n` +
  `@media (min-width: 600px) and (max-height: 600px) { .has-story .reveal-photo--after { -webkit-mask-position: center; mask-position: center; } }\n`;
await writeFile(fileURLToPath(new URL('../../css/portrait-mask.css', import.meta.url)), css);
await writeFile(`${output}/portrait-depth.json`, JSON.stringify({
  version: 1,
  kind: 'photo-depth-approximation',
  source: '../roshan-reveal-after.webp',
  sourceCrop: { top: 37, bottom: cropBottom },
  presentation: portraitPresentation,
  vertexCount: vertices.length,
  triangleCount: indices.length / 3,
  rawBytes: buffer.length,
  gzipBytes: compressed.length,
  bounds: { min, max },
  note: 'Artist-defined depth relief from a single photograph; no scan or hidden-side reconstruction.',
}, null, 2) + '\n');
console.log(JSON.stringify({ vertices: vertices.length, triangles: indices.length / 3, rawBytes: buffer.length, gzipBytes: compressed.length }));
