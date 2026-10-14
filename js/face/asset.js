// Lightweight, quantized portrait relief. It is a photo-derived approximation,
// not an authentic scan; the original WebP provides its unchanged likeness.
const HEADER_SIZE = 40;
const ASSET_VERSION = 6;
const embeddedLoads = new Map();
const SOURCE_CONTOUR = [
  [420,39], [409,41], [404,39], [399,43], [389,42], [383,48],
  [377,47], [369,54], [366,53], [360,62], [353,63], [349,70],
  [345,71], [339,79], [334,79], [330,89], [324,88], [322,98],
  [316,99], [315,106], [309,111], [310,116], [303,125], [303,133],
  [298,140], [299,148], [294,154], [296,163], [291,170], [294,179],
  [292,187], [298,195], [299,203], [304,208], [303,216], [308,222],
  [307,229], [314,237], [322,243], [324,247], [324,254], [325,261],
  [327,272], [329,280], [333,286], [337,296], [344,304], [343,309],
  [347,313], [352,314], [354,317], [355,318], [358,318.5], [360,319],
  [362,322], [365,326], [368,330], [371,334], [374.5,339], [378,344],
  [381,349], [383,354], [382.8,360], [382.7,370], [383.1,380],
  [383.6,387], [383.8,391], [382.8,393], [372,393.8], [364,395],
  [360,397.5], [358,400], [355,408], [351,416],
  [342,423], [330,435], [313,443], [294,449], [276,459], [255,468],
  [236,477], [217,487], [204,497], [191,512], [181,527], [169,547],
  [159,567], [153,587], [155,607], [156,625], [160,653], [162,680], [164,700],
  [166,760], [183,830], [201,896], [225,941], [708,941], [750,933],
  [799,917], [816,897], [826,850], [831,816], [829,774], [817,719],
  [807,672], [803,648], [797,626], [790,607], [785,588], [783,573],
  [778,556], [773,542], [767,528], [759,516], [750,505], [739,495],
  [726,487], [714,480], [700,474], [690,469], [678,466], [667,462],
  [654,460], [643,455], [634,451], [624,447], [614,442], [604,438],
  [593,433], [586,429], [578,424], [570,419], [565,412], [561,404],
  // Follow the photographed edge below the ear rather than the smooth
  // backdrop beside it. The close-up repair changes no hair or ear outline.
  [552,400], [546.5,398], [543.2,394], [540.8,390], [539.4,385],
  [538.2,380], [537.6,375], [536.8,370], [536.3,365], [535.8,360],
  [535.3,355], [535.1,350], [534.8,345], [534.3,340], [533.7,335],
  [534.3,330], [538.2,325], [540.4,320], [542.4,315], [543.6,310],
  [544.8,305], [545.3,300], [546.2,295], [547,290], [547.6,285],
  [547.7,280], [547.4,278], [554,277], [560.7,276], [563.5,274],
  [565,272], [566,270], [567,265], [567,256], [566,249],
  [565,243], [565,235], [562,223], [563,218], [560,210], [562,200],
  [561,192], [558,184], [559,177], [555,168], [554,156], [550,148],
  [549,138], [545,126], [540,116], [540,107], [531,100], [526,89],
  [519,86], [515,80], [508,77], [502,69], [494,68], [488,61],
  [479,59], [472,54], [461,54], [455,47], [447,46], [440,42], [433,44],
];

function cropContour(contour, bottom) {
  const cropped = [];
  for (let i = 0; i < contour.length; i++) {
    const start = contour[(i + contour.length - 1) % contour.length];
    const end = contour[i];
    const startInside = start[1] <= bottom;
    const endInside = end[1] <= bottom;
    if (startInside !== endInside) {
      const t = (bottom - start[1]) / (end[1] - start[1]);
      cropped.push([start[0] + (end[0] - start[0]) * t, bottom]);
    }
    if (endInside) cropped.push(end.slice());
  }
  return cropped;
}

function roundedOutline(points, radius = 1.25) {
  const corners = points.map((point, i) => {
    const previous = points[(i + points.length - 1) % points.length];
    const next = points[(i + 1) % points.length];
    const before = Math.hypot(point[0] - previous[0], point[1] - previous[1]);
    const after = Math.hypot(next[0] - point[0], next[1] - point[1]);
    const distance = Math.min(radius, before * 0.35, after * 0.35);
    return {
      point,
      enter: point.map((v, axis) => v + (previous[axis] - v) * distance / before),
      leave: point.map((v, axis) => v + (next[axis] - v) * distance / after),
    };
  });
  const samples = [];
  const pair = (point) => point.map(v => Number(v.toFixed(3))).join(',');
  const commands = [`M${pair(corners[0].enter)}`];
  for (const { point, enter, leave } of corners) {
    commands.push(`L${pair(enter)}Q${pair(point)} ${pair(leave)}`);
    samples.push(enter);
    // The same short curves are sampled for particles. Their deviation from
    // the SVG curve is below a tenth of a source pixel, with no photo blur.
    for (const t of [0.25, 0.5, 0.75, 1]) {
      samples.push(point.map((v, axis) =>
        (1 - t) ** 2 * enter[axis] + 2 * (1 - t) * t * v + t ** 2 * leave[axis]));
    }
  }
  return { samples, path: commands.join('') + 'Z' };
}

const outline = roundedOutline(SOURCE_CONTOUR);
const sourceContour = cropContour(outline.samples, 700);
// Retain the established camera frame even where the precise edge is inset.
// Particle bounds and DOM crop must share this declared frame, not a new box
// measured from the tightened hair/ear/neck outline.
const sourceRect = { left: 150, top: 37, width: 662.9574468085107, height: 663 };
const { left, top } = sourceRect;
const normalizedContour = sourceContour.map(([x, y]) => [
  (x - left) / sourceRect.width,
  (y - top) / sourceRect.height,
]);

const maskSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="1672" height="941" viewBox="0 0 1672 941"><path fill="white" d="${outline.path}"/></svg>`;
const maskImage = `url("data:image/svg+xml,${encodeURIComponent(maskSvg)}")`;

// The sharp DOM photo uses the exact same crop/outline as the particle targets.
// Scale the original image by bustHeight/sourceRect.height, then offset it by
// -sourceRect.left and -sourceRect.top at that scale inside the clipped bust.
export const portraitPresentation = Object.freeze({
  sourceWidth: 1672,
  sourceHeight: 941,
  sourceRect,
  sourceContour,
  normalizedContour,
  maskImage,
  aspect: sourceRect.width / sourceRect.height,
  clipPath: `polygon(${normalizedContour.map(([x, y]) => `${(x * 100).toFixed(6)}% ${(y * 100).toFixed(6)}%`).join(',')})`,
  imageCss: {
    width: `${(1672 / sourceRect.width * 100).toFixed(6)}%`,
    height: `${(941 / sourceRect.height * 100).toFixed(6)}%`,
    left: `${(-left / sourceRect.width * 100).toFixed(6)}%`,
    top: `${(-top / sourceRect.height * 100).toFixed(6)}%`,
  },
});

function abortReason(signal) {
  return signal.reason || new DOMException('Portrait loading was cancelled.', 'AbortError');
}

function awaitWithSignal(promise, signal) {
  if (!signal) return promise;
  if (signal.aborted) return Promise.reject(abortReason(signal));
  return new Promise((resolve, reject) => {
    const abort = () => reject(abortReason(signal));
    signal.addEventListener('abort', abort, { once: true });
    promise.then(resolve, reject).finally(() => signal.removeEventListener('abort', abort));
  });
}

function loadEmbeddedAsset(url) {
  if (embeddedLoads.has(url.href)) return embeddedLoads.get(url.href);
  const promise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.async = true;
    script.src = url.href;
    script.onload = () => {
      script.remove();
      const embedded = globalThis.PortraitEmbeddedData;
      if (embedded?.version !== ASSET_VERSION || embedded.encoding !== 'base64' || typeof embedded.data !== 'string') {
        reject(new Error('Invalid embedded portrait asset.'));
        return;
      }
      try {
        const decoded = atob(embedded.data);
        const bytes = new Uint8Array(decoded.length);
        for (let i = 0; i < decoded.length; i++) bytes[i] = decoded.charCodeAt(i);
        // The shared promise retains the reusable binary; release its larger
        // base64 source so direct-file previews do not keep both payloads.
        if (globalThis.PortraitEmbeddedData === embedded) delete globalThis.PortraitEmbeddedData;
        resolve(bytes.buffer);
      } catch (error) { reject(error); }
    };
    script.onerror = () => {
      script.remove();
      reject(new Error('Embedded portrait asset unavailable.'));
    };
    document.head.append(script);
  });
  embeddedLoads.set(url.href, promise);
  promise.catch(() => embeddedLoads.delete(url.href));
  return promise;
}

export function parsePortraitAsset(buffer, { textureUrl = '' } = {}) {
  const view = new DataView(buffer);
  if (buffer.byteLength < HEADER_SIZE || view.getUint32(0, false) !== 0x52445031) {
    throw new Error('Invalid portrait asset.');
  }
  const count = view.getUint32(4, true);
  const indexCount = view.getUint32(8, true);
  const version = view.getUint32(36, true);
  if (version !== 1 || !count || count >= 65536 || indexCount % 3 ||
      buffer.byteLength !== HEADER_SIZE + count * 13 + indexCount * 2) {
    throw new Error('Unsupported portrait asset layout.');
  }
  const min = [0, 1, 2].map(i => view.getFloat32(12 + i * 4, true));
  const max = [0, 1, 2].map(i => view.getFloat32(24 + i * 4, true));
  if (min.some((n, i) => !Number.isFinite(n) || !Number.isFinite(max[i]) || max[i] <= n)) {
    throw new Error('Invalid portrait bounds.');
  }
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const uvs = new Float32Array(count * 2);
  const indices = new Uint16Array(indexCount);
  let offset = HEADER_SIZE;
  for (let i = 0; i < positions.length; i++) {
    const axis = i % 3;
    positions[i] = min[axis] + view.getUint16(offset, true) / 65535 * (max[axis] - min[axis]);
    offset += 2;
  }
  for (let i = 0; i < uvs.length; i++) { uvs[i] = view.getUint16(offset, true) / 65535; offset += 2; }
  for (let i = 0; i < colors.length; i++) colors[i] = view.getUint8(offset++) / 255;
  for (let i = 0; i < indexCount; i++) {
    indices[i] = view.getUint16(offset, true); offset += 2;
    if (indices[i] >= count) throw new Error('Invalid portrait triangle.');
  }
  return { positions, colors, uvs, indices, textureUrl, bounds: { min, max }, presentation: portraitPresentation, kind: 'photo-depth-approximation' };
}

export async function loadPortraitAsset({ signal, baseUrl } = {}) {
  const base = new URL(baseUrl || 'assets/face/', document.baseURI);
  const compressedUrl = new URL(`portrait-depth.bin.gz?v=${ASSET_VERSION}`, base);
  const rawUrl = new URL(`portrait-depth.bin?v=${ASSET_VERSION}`, base);
  const textureUrl = new URL('../roshan-reveal-after.webp', base).href;
  if (signal?.aborted) throw abortReason(signal);
  // Classic scripts can read a sibling file in direct file:// previews, where
  // fetch() and ES module requests are blocked by the browser's origin rules.
  if (base.protocol === 'file:') {
    const scriptUrl = new URL(`portrait-data.js?v=${ASSET_VERSION}`, base);
    const buffer = await awaitWithSignal(loadEmbeddedAsset(scriptUrl), signal);
    if (signal?.aborted) throw abortReason(signal);
    return parsePortraitAsset(buffer, { textureUrl });
  }
  const supportsGzip = typeof DecompressionStream === 'function';
  const response = await fetch(supportsGzip ? compressedUrl : rawUrl, { signal, cache: 'force-cache' });
  if (!response.ok) throw new Error(`Portrait asset unavailable (${response.status}).`);
  let buffer = await response.arrayBuffer();
  // Some hosts transparently decode gzip through Content-Encoding; detect the
  // bytes so such hosts do not cause accidental double decompression.
  const signature = new Uint8Array(buffer, 0, Math.min(buffer.byteLength, 2));
  if (signature[0] === 0x1f && signature[1] === 0x8b) {
    buffer = await new Response(new Blob([buffer]).stream().pipeThrough(new DecompressionStream('gzip'))).arrayBuffer();
  }
  if (signal?.aborted) throw abortReason(signal);
  return parsePortraitAsset(buffer, { textureUrl });
}
