import * as THREE from 'three';
import { drawTexture } from './materials.js';
import { NEUROMAZE_SCREEN } from './neuromaze-screen.js';

/* NeuroMaze, playing on the selected monitor: chapter 04's first work,
 * previewed inside the lab; the shelf just below is where it opens.
 *
 * Two painted layers and one small shader. The picture is the real gameplay
 * capture (embedded as a data URI: WebGL cannot read local files when the
 * site is opened from disk) with the poster's grade. The chrome — REC, the
 * title, an "in Creative works" caption — sits on its own layer, over which
 * the shader adds what moves: a CRT power-on, faint scanlines, a play button
 * with a slow ping, a hover lift and a flash when it is pressed. */

const FONT = '"Space Grotesk", "Inter", "Segoe UI", system-ui, sans-serif';
const W = 1024;
const H = 614;
// The play button's centre (uv, y up) and radius (in screen heights).
const BUTTON = { x: 0.5, y: 0.58, r: 0.1 };

function spaced(g, text, x, y, spacing, align = 'left') {
  const widths = [...text].map((c) => g.measureText(c).width);
  const total = widths.reduce((a, b) => a + b, 0) + spacing * (text.length - 1);
  let at = align === 'center' ? x - total / 2 : align === 'right' ? x - total : x;
  [...text].forEach((c, i) => { g.fillText(c, at, y); at += widths[i] + spacing; });
}

function paintPicture(g, w, h, image) {
  g.fillStyle = '#130c10';
  g.fillRect(0, 0, w, h);
  if (image.complete && image.naturalWidth) {
    const s = Math.max(w / image.naturalWidth, h / image.naturalHeight);
    const iw = image.naturalWidth * s;
    const ih = image.naturalHeight * s;
    g.drawImage(image, (w - iw) / 2, (h - ih) / 2, iw, ih);
  }
  // The poster's grade: a little weight at the top, more at the foot.
  const grade = g.createLinearGradient(0, 0, 0, h);
  grade.addColorStop(0, 'rgba(8,3,4,0.35)');
  grade.addColorStop(0.26, 'rgba(8,3,4,0)');
  grade.addColorStop(0.58, 'rgba(8,3,4,0)');
  grade.addColorStop(1, 'rgba(8,3,4,0.7)');
  g.fillStyle = grade;
  g.fillRect(0, 0, w, h);
  const vignette = g.createRadialGradient(w / 2, h / 2, h * 0.3, w / 2, h / 2, w * 0.62);
  vignette.addColorStop(0, 'rgba(0,0,0,0)');
  vignette.addColorStop(1, 'rgba(0,0,0,0.4)');
  g.fillStyle = vignette;
  g.fillRect(0, 0, w, h);
}

function paintChrome(g, w, h, hint) {
  g.textBaseline = 'alphabetic';
  // REC, as on the poster's capture.
  g.fillStyle = '#ff3355';
  g.beginPath();
  g.arc(50, 56, 10, 0, Math.PI * 2);
  g.fill();
  g.font = `700 28px ${FONT}`;
  g.fillStyle = 'rgba(255,240,240,0.92)';
  spaced(g, 'REC', 70, 66, 4);

  // Title and genre, low and left.
  g.save();
  g.font = `700 92px ${FONT}`;
  g.shadowColor = 'rgba(255,51,85,0.75)';
  g.shadowBlur = 28;
  g.fillStyle = '#fff3f3';
  g.fillText('NeuroMaze', 40, h - 70);
  g.restore();
  g.font = `600 26px ${FONT}`;
  g.fillStyle = 'rgba(255,214,222,0.88)';
  spaced(g, 'UNITY · 3D HORROR', 44, h - 30, 4);

  // Where the game lives, under the play button.
  g.font = `700 30px ${FONT}`;
  g.fillStyle = 'rgba(255,255,255,0.95)';
  g.shadowColor = 'rgba(0,0,0,0.85)';
  g.shadowBlur = 12;
  spaced(g, hint, w / 2, (1 - BUTTON.y + BUTTON.r) * h + 52, 6, 'center');
}

const vertexShader = /* glsl */ `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = /* glsl */ `
  uniform sampler2D uPicture;
  uniform sampler2D uChrome;
  uniform float uOn;
  uniform float uTime;
  uniform float uHover;
  uniform float uTap;
  uniform float uChromeOpacity;
  uniform vec3 uButton;
  varying vec2 vUv;
  void main() {
    // Power on like a CRT: a bright line opens into the picture.
    float open = smoothstep(0.08, 0.7, uOn);
    float halfOpen = max(open * 0.5, 0.003);
    if (uOn < 0.001 || abs(vUv.y - 0.5) > halfOpen) discard;
    vec2 uv = vec2(vUv.x, 0.5 + (vUv.y - 0.5) / max(open, 0.006));
    vec3 col = texture2D(uPicture, uv).rgb * 1.35;
    // Faint scanlines that roll slowly, as on the poster.
    col *= 0.93 + 0.07 * sin(vUv.y * 980.0 - uTime * 4.0);

    vec4 chrome = texture2D(uChrome, uv);
    float show = uChromeOpacity * smoothstep(0.6, 1.0, uOn);
    col = mix(col, chrome.rgb, chrome.a * show);

    // The play button: a dark glass disc, a bright rim and a triangle,
    // lifting on hover; a ping leaves it every couple of seconds.
    vec2 p = (vUv - uButton.xy) * vec2(1.6667, 1.0);
    float r = length(p);
    float radius = uButton.z * (1.0 + 0.06 * uHover);
    float disc = 1.0 - smoothstep(radius - 0.004, radius, r);
    float rim = smoothstep(radius - 0.009, radius - 0.004, r) * (1.0 - smoothstep(radius, radius + 0.004, r));
    vec2 t = p / radius;
    float tri = smoothstep(-0.36, -0.32, t.x) * (1.0 - smoothstep(-0.02, 0.02, abs(t.y) - (0.5 - t.x) * 0.58));
    float lit = 0.92 + 0.5 * uHover;
    col = mix(col, col * 0.35 + vec3(0.03, 0.01, 0.015), disc * 0.75 * show);
    col += vec3(1.0, 0.96, 0.94) * (rim * 0.85 + tri * 0.95) * lit * show;
    float period = mix(2.2, 1.3, uHover);
    float ping = fract(uTime / period);
    float pr = radius + ping * 0.16;
    float ring = (1.0 - smoothstep(0.0, 0.006, abs(r - pr))) * (1.0 - ping) * (1.0 - ping);
    col += vec3(1.0, 0.55, 0.6) * ring * 0.9 * show;

    // Pressed: a soft white burst from the button, then the dive begins.
    float burst = (1.0 - smoothstep(uTap * 0.9, uTap * 0.9 + 0.12, r)) * (1.0 - uTap) * step(0.001, uTap);
    col = mix(col, vec3(1.0, 0.97, 0.95), burst * 0.85);

    // The opening line glows as the picture comes up.
    float edge = 1.0 - smoothstep(0.0, 0.02, halfOpen - abs(vUv.y - 0.5));
    col += vec3(1.0, 0.92, 0.88) * edge * (1.0 - smoothstep(0.75, 1.0, open));
    col *= 0.94 + 0.12 * uHover;
    gl_FragColor = vec4(col, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

export function neuroMazePreview(geometry) {
  const image = new Image();
  const picture = drawTexture((g, w, h) => paintPicture(g, w, h, image), W, H);
  const chrome = drawTexture((g, w, h) => paintChrome(g, w, h, 'IN CREATIVE WORKS'),
    W, H, { redraw: true });
  image.onload = () => {
    paintPicture(picture.image.getContext('2d'), W, H, image);
    picture.needsUpdate = true;
  };
  image.src = NEUROMAZE_SCREEN;

  const uniforms = {
    uPicture: { value: picture },
    uChrome: { value: chrome },
    uOn: { value: 0 },
    uTime: { value: 0 },
    uHover: { value: 0 },
    uTap: { value: 0 },
    uChromeOpacity: { value: 1 },
    uButton: { value: new THREE.Vector3(BUTTON.x, BUTTON.y, BUTTON.r) },
  };
  const material = new THREE.ShaderMaterial({ uniforms, vertexShader, fragmentShader });
  const mesh = new THREE.Mesh(geometry, material);
  // Always in the scene (so its program is prepared with the room); it
  // discards every pixel until the monitor is selected.
  mesh.renderOrder = 3;

  let hoverGoal = 0;
  let tapStart = -1;
  let last = 0;
  return {
    mesh,
    setOn(value) { uniforms.uOn.value = value; },
    setHover(value) { hoverGoal = value ? 1 : 0; },
    press() { tapStart = performance.now(); },
    // Per frame: time, eased hover and the press flash.
    animate(t) {
      const dt = Math.min(0.05, Math.max(0, t - last));
      last = t;
      uniforms.uTime.value = t;
      uniforms.uHover.value += (hoverGoal - uniforms.uHover.value) * (1 - Math.exp(-dt * 10));
      uniforms.uTap.value = tapStart < 0 ? 0 : Math.min(1, (performance.now() - tapStart) / 520);
      if (uniforms.uTap.value >= 1) tapStart = -1;
    },
  };
}
