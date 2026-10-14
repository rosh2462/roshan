const MAX_RASTER_SIDE = 4096;

function seededRandom(seed) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6D2B79F5) | 0;
    let value = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    value = (value + Math.imul(value ^ (value >>> 7), 61 | value)) ^ value;
    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}

function cssColor(value) {
  const match = value.match(/rgba?\(\s*([\d.]+)[,\s]+([\d.]+)[,\s]+([\d.]+)/);
  return match ? [Number(match[1]) / 255, Number(match[2]) / 255, Number(match[3]) / 255] : [0.9, 0.91, 0.94];
}

function transformedCharacter(character, style) {
  if (style.textTransform === 'uppercase') return character.toUpperCase();
  if (style.textTransform === 'lowercase') return character.toLowerCase();
  return character;
}

// Rasterization happens only when requested after fonts/layout have settled.
// Range positions preserve the browser's wrapping, kerning and letter spacing;
// each text node keeps its inherited weight/color, including inline <strong>.
function rasterGroup(element, group) {
  if (!element) return null;
  const box = element.getBoundingClientRect();
  const localWidth = box.width;
  const localHeight = box.height;
  if (localWidth <= 0 || localHeight <= 0 || box.width <= 0 || box.height <= 0) return null;
  const scaleX = box.width / localWidth;
  const scaleY = box.height / localHeight;
  const padding = 3;
  const rasterScale = Math.min(1, MAX_RASTER_SIDE / (localWidth + padding * 2), MAX_RASTER_SIDE / (localHeight + padding * 2));
  const canvas = document.createElement('canvas');
  canvas.width = Math.max(1, Math.ceil((localWidth + padding * 2) * rasterScale));
  canvas.height = Math.max(1, Math.ceil((localHeight + padding * 2) * rasterScale));
  const context = canvas.getContext('2d', { willReadFrequently: true });
  if (!context) return null;
  context.scale(rasterScale, rasterScale);
  context.textBaseline = 'alphabetic';
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  const range = document.createRange();
  let node;
  while ((node = walker.nextNode())) {
    const parent = node.parentElement;
    if (!parent || parent.closest('[aria-hidden="true"], [data-particle-decoration], script, style')) continue;
    const style = getComputedStyle(parent);
    if (style.display === 'none') continue;
    context.font = `${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
    context.fillStyle = style.color;
    const sample = context.measureText('Hg');
    const fontSize = parseFloat(style.fontSize) || 16;
    const ascent = sample.fontBoundingBoxAscent ?? sample.actualBoundingBoxAscent ?? fontSize * 0.8;
    const descent = sample.fontBoundingBoxDescent ?? sample.actualBoundingBoxDescent ?? fontSize * 0.2;
    for (let index = 0; index < node.length;) {
      const code = node.textContent.codePointAt(index);
      const length = code > 0xFFFF ? 2 : 1;
      const character = node.textContent.slice(index, index + length);
      range.setStart(node, index);
      range.setEnd(node, index + length);
      const rect = range.getBoundingClientRect();
      index += length;
      if (!character.trim() || rect.width <= 0 || rect.height <= 0) continue;
      const x = (rect.left - box.left) / scaleX;
      const y = (rect.top - box.top) / scaleY;
      const height = rect.height / scaleY;
      const baseline = y + (height - ascent - descent) * 0.5 + ascent;
      context.fillText(transformedCharacter(character, style), x + padding, baseline + padding);
    }
  }
  range.detach?.();
  const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
  const candidates = [];
  const step = Math.max(1, Math.round(rasterScale * 1.7));
  for (let y = 0; y < canvas.height; y += step) {
    for (let x = 0; x < canvas.width; x += step) {
      const pixel = (y * canvas.width + x) * 4;
      if (pixels[pixel + 3] < 80) continue;
      candidates.push([
        (x + 0.5) / rasterScale - padding,
        (y + 0.5) / rasterScale - padding,
        pixels[pixel] / 255, pixels[pixel + 1] / 255, pixels[pixel + 2] / 255,
      ]);
    }
  }
  return { group, width: localWidth, height: localHeight, candidates, color: cssColor(getComputedStyle(element).color) };
}

/**
 * Sample [headline, support, current, next heading] into one bounded static buffer.
 * Returned positions use local CSS pixels (x right, y down); the renderer adds
 * state.textOffsets/workOffset, so scrolling never re-rasterizes glyphs.
 */
export async function sampleTextTargets(elements, { maxPoints = 4000 } = {}) {
  await document.fonts?.ready;
  const low = matchMedia('(pointer: coarse)').matches || Math.min(innerWidth, innerHeight) < 721
    || (navigator.deviceMemory || 8) <= 4 || (navigator.hardwareConcurrency || 8) <= 4;
  const limit = Math.max(0, Math.min(low ? 1800 : 4000, Math.floor(maxPoints)));
  const groups = Array.from({ length: 4 }, (_, group) => rasterGroup(elements[group], group));
  const totalCandidates = groups.reduce((total, group) => total + (group?.candidates.length || 0), 0);
  const weighted = groups.map((group) => Math.sqrt(group?.candidates.length || 0));
  const totalWeight = weighted.reduce((sum, value) => sum + value, 0);
  const groupBounds = groups.map((group) => ({ width: group?.width || 1, height: group?.height || 1, count: 0 }));
  const selected = [];
  let remaining = Math.min(limit, totalCandidates);
  const random = seededRandom(0x7E57FACE);
  groups.forEach((group, groupIndex) => {
    if (!group?.candidates.length || !remaining) return;
    const remainingWeight = weighted.slice(groupIndex).reduce((sum, value) => sum + value, 0);
    const budget = Math.min(group.candidates.length, remainingWeight > 0
      ? Math.max(1, Math.round(remaining * weighted[groupIndex] / remainingWeight)) : 0);
    // Stratified deterministic selection covers every line without a clustered
    // prefix when a device's point budget is reduced.
    for (let index = 0; index < budget; index++) {
      const sampleIndex = Math.min(group.candidates.length - 1,
        Math.floor((index + random()) * group.candidates.length / budget));
      selected.push({ group: groupIndex, value: group.candidates[sampleIndex] });
    }
    groupBounds[groupIndex].count = budget;
    remaining -= budget;
  });
  const positions = new Float32Array(selected.length * 3);
  const colors = new Float32Array(selected.length * 3);
  const groupIds = new Float32Array(selected.length);
  selected.forEach(({ group, value }, index) => {
    positions.set([value[0], value[1], 0], index * 3);
    colors.set(value.slice(2, 5), index * 3);
    groupIds[index] = group;
  });
  return { positions, colors, groupIds, groupBounds, count: selected.length, colorSpace: 'srgb', totalWeight };
}
