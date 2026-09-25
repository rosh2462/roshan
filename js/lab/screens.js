import { drawTexture } from './materials.js';
import { LOGOS } from './logos.js';

/* Everything in the lab that carries a picture, painted once into a canvas:
 * the monitor screens (Blender's interface, Unity's editor, a code editor),
 * the whiteboard, the clock, the fronts of lockers and drawers, the blinds
 * and the sky in the window. Screens are legible only when the camera is
 * close — from the overview they read as colour, which is the point: a warm
 * orange-and-grey Blender screen, then a cool dark-grey Unity one. */

const FONT = '"Inter", "Segoe UI", system-ui, sans-serif';

// A tool's real logo glyph, drawn at (x, y) with the given size.
export function logo(g, name, x, y, size, alpha = 1) {
  const l = LOGOS[name];
  g.save();
  g.translate(x, y);
  g.scale(size / 24, size / 24);
  g.globalAlpha = alpha;
  g.fillStyle = l.color;
  g.fill(new Path2D(l.path));
  g.restore();
}

const rect = (g, x, y, w, h, fill, r = 0) => {
  g.fillStyle = fill;
  if (r) {
    g.beginPath();
    g.roundRect(x, y, w, h, r);
    g.fill();
  } else g.fillRect(x, y, w, h);
};
const text = (g, s, x, y, size, fill, weight = 500, align = 'left') => {
  g.font = `${weight} ${size}px ${FONT}`;
  g.fillStyle = fill;
  g.textAlign = align;
  g.textBaseline = 'middle';
  g.fillText(s, x, y);
};

// The lab as a little isometric drawing, used inside both editors' viewports.
function isoRoom(g, cx, cy, s, { fill, line, outline, lit }) {
  const p = (x, y, z) => [cx + (x - z) * s * 0.866, cy + (x + z) * s * 0.5 - y * s];
  const poly = (pts, f, l, lw = 1.5) => {
    g.beginPath();
    pts.forEach(([x, y], i) => (i ? g.lineTo(x, y) : g.moveTo(x, y)));
    g.closePath();
    if (f) {
      g.fillStyle = f;
      g.fill();
    }
    if (l) {
      g.strokeStyle = l;
      g.lineWidth = lw;
      g.stroke();
    }
  };
  // floor, then the two back walls
  poly([p(-1, 0, -1), p(1, 0, -1), p(1, 0, 1), p(-1, 0, 1)], fill.floor, line);
  poly([p(-1, 0, -1), p(1, 0, -1), p(1, 1, -1), p(-1, 1, -1)], fill.wallB, line);
  poly([p(-1, 0, -1), p(-1, 0, 1), p(-1, 1, 1), p(-1, 1, -1)], fill.wallA, line);
  // desk run, centre table
  poly([p(-0.95, 0, -0.6), p(-0.8, 0, -0.6), p(-0.8, 0.3, -0.6), p(-0.95, 0.3, -0.6)], null, null);
  poly([p(-0.95, 0.28, -0.6), p(-0.8, 0.28, -0.6), p(-0.8, 0.28, 0.6), p(-0.95, 0.28, 0.6)], fill.desk, line);
  poly([p(-0.3, 0.28, 0.1), p(0.4, 0.28, 0.1), p(0.4, 0.28, 0.6), p(-0.3, 0.28, 0.6)], fill.desk, outline || line, outline ? 2.6 : 1.5);
  if (lit) {
    g.fillStyle = lit;
    g.beginPath();
    g.arc(...p(0, 0.5, 0.4), s * 0.05, 0, 7);
    g.fill();
  }
}

/* ---- Blender: the model being built ------------------------------------ */
export function blenderScreen() {
  return drawTexture(
    (g, w, h) => {
      rect(g, 0, 0, w, h, '#232323');
      rect(g, 0, 0, w, 40, '#1d1d1d');
      logo(g, 'blender', 12, 7, 26);
      ['File', 'Edit', 'Render', 'Window', 'Help'].forEach((s, i) => text(g, s, 56 + i * 62, 20, 15, '#c9c9c9'));
      ['Layout', 'Modeling', 'Sculpting', 'Shading'].forEach((s, i) => {
        rect(g, w - 380 + i * 92, 8, 84, 26, i === 1 ? '#3f3f3f' : '#2b2b2b', 6);
        text(g, s, w - 338 + i * 92, 21, 13, i === 1 ? '#f0f0f0' : '#a8a8a8', 500, 'center');
      });

      // viewport
      const vx = 50;
      const vy = 46;
      const vw = w - 50 - 270;
      const vh = h - 46 - 90;
      const grd = g.createLinearGradient(0, vy, 0, vy + vh);
      grd.addColorStop(0, '#404040');
      grd.addColorStop(1, '#565656');
      g.fillStyle = grd;
      g.fillRect(vx, vy, vw, vh);
      g.save();
      g.beginPath();
      g.rect(vx, vy, vw, vh);
      g.clip();
      g.strokeStyle = 'rgba(255,255,255,0.10)';
      g.lineWidth = 1;
      for (let i = -14; i <= 14; i++) {
        g.beginPath();
        g.moveTo(vx + vw / 2 + i * 60, vy + vh * 0.52);
        g.lineTo(vx + vw / 2 + i * 200, vy + vh);
        g.stroke();
      }
      for (let j = 0; j < 9; j++) {
        const y = vy + vh * 0.52 + (j * j * vh * 0.5) / 60;
        g.beginPath();
        g.moveTo(vx, y);
        g.lineTo(vx + vw, y);
        g.stroke();
      }
      g.strokeStyle = 'rgba(203,68,68,0.85)';
      g.lineWidth = 2;
      g.beginPath();
      g.moveTo(vx, vy + vh * 0.78);
      g.lineTo(vx + vw, vy + vh * 0.7);
      g.stroke();
      g.strokeStyle = 'rgba(112,171,58,0.85)';
      g.beginPath();
      g.moveTo(vx + vw * 0.52, vy + vh * 0.5);
      g.lineTo(vx + vw * 0.62, vy + vh);
      g.stroke();
      isoRoom(g, vx + vw * 0.5, vy + vh * 0.5, 150, {
        fill: { floor: '#6a6a6a', wallA: '#7a7a7a', wallB: '#8b8b8b', desk: '#a0a0a0' },
        line: 'rgba(30,30,30,0.9)',
        outline: '#f5a623',
      });
      g.restore();
      text(g, 'User Perspective', vx + 12, vy + 16, 12, 'rgba(255,255,255,0.7)');
      text(g, '(1) Lab', vx + 12, vy + 32, 11, 'rgba(255,255,255,0.5)');
      // tool strip
      for (let i = 0; i < 9; i++) rect(g, 10, 54 + i * 42, 30, 30, i === 1 ? '#4772b3' : '#333', 5);

      // outliner + properties
      rect(g, w - 264, 46, 264, 210, '#282828');
      text(g, 'Scene Collection', w - 250, 62, 13, '#dcdcdc', 600);
      ['Lab', 'Walls', 'Desks', 'Chairs', 'Workstation', 'Monitor', 'Headset'].forEach((s, i) => {
        rect(g, w - 250 + (i ? 14 : 0), 82 + i * 22, 6, 6, i === 5 ? '#f5a623' : '#7a7a7a', 3);
        text(g, s, w - 236 + (i ? 14 : 0), 86 + i * 22, 12, i === 5 ? '#f5a623' : '#bcbcbc');
      });
      rect(g, w - 264, 262, 264, h - 262 - 90, '#2b2b2b');
      ['Location', 'Rotation', 'Scale'].forEach((s, i) => {
        text(g, s, w - 250, 286 + i * 60, 12, '#c4c4c4', 600);
        for (let k = 0; k < 3; k++) rect(g, w - 250 + k * 78, 298 + i * 60, 72, 22, '#3d3d3d', 4);
      });
      // timeline
      rect(g, 0, h - 84, w, 84, '#262626');
      for (let i = 0; i < 40; i++) rect(g, 60 + i * 22, h - 60, 1, i % 5 ? 8 : 16, '#555');
      [180, 320, 470, 640].forEach((x) => {
        g.save();
        g.translate(x, h - 30);
        g.rotate(Math.PI / 4);
        rect(g, -6, -6, 12, 12, '#f5a623');
        g.restore();
      });
    },
    1024,
    640,
  );
}

/* ---- Unity: the same model, brought into the engine ---------------------- */
export function unityScreen() {
  return drawTexture(
    (g, w, h) => {
      rect(g, 0, 0, w, h, '#383838');
      rect(g, 0, 0, w, 44, '#282828');
      logo(g, 'unity', 12, 8, 28);
      ['File', 'Edit', 'Assets', 'GameObject', 'Window'].forEach((s, i) => text(g, s, 56 + i * 70, 22, 14, '#cfcfcf'));
      // play controls
      rect(g, w / 2 - 70, 8, 44, 28, '#4c8be6', 5);
      g.fillStyle = '#fff';
      g.beginPath();
      g.moveTo(w / 2 - 55, 15);
      g.lineTo(w / 2 - 55, 29);
      g.lineTo(w / 2 - 43, 22);
      g.fill();
      rect(g, w / 2 - 20, 8, 44, 28, '#4a4a4a', 5);
      rect(g, w / 2 + 28, 8, 44, 28, '#4a4a4a', 5);

      // hierarchy
      rect(g, 0, 44, 200, h - 44 - 190, '#2f2f2f');
      text(g, 'Hierarchy', 12, 62, 13, '#e0e0e0', 600);
      const rows = [
        ['SampleScene', 0],
        ['Lab', 1],
        ['Walls', 2],
        ['Desks', 2],
        ['XR Origin', 1],
        ['Workstation', 1],
        ['Monitor', 2],
        ['Headset', 2],
      ];
      rows.forEach(([s, ind], i) => {
        if (s === 'Monitor') rect(g, 0, 78 + i * 24, 200, 24, '#2c5d87');
        text(g, s, 16 + ind * 16, 91 + i * 24, 13, s === 'Monitor' ? '#ffffff' : '#c8c8c8');
      });

      // scene view
      const sx = 204;
      const sw = w - 204 - 270;
      const sh = h - 44 - 190;
      const sky = g.createLinearGradient(0, 44, 0, 44 + sh);
      sky.addColorStop(0, '#4b6f97');
      sky.addColorStop(1, '#a9bccd');
      g.fillStyle = sky;
      g.fillRect(sx, 44, sw, sh);
      g.save();
      g.beginPath();
      g.rect(sx, 44, sw, sh);
      g.clip();
      isoRoom(g, sx + sw * 0.5, 44 + sh * 0.55, 165, {
        fill: { floor: '#6f747e', wallA: '#c9c2b6', wallB: '#d6cfc2', desk: '#c79f6e' },
        line: 'rgba(20,24,32,0.55)',
        outline: '#ff9f1a',
        lit: '#ffd28a',
      });
      g.restore();
      text(g, 'Scene', sx + 10, 62, 13, '#e6e6e6', 600);
      // gizmo
      g.strokeStyle = '#e04b4b';
      g.lineWidth = 3;
      g.beginPath();
      g.moveTo(sx + sw - 60, 96);
      g.lineTo(sx + sw - 30, 108);
      g.stroke();
      g.strokeStyle = '#7fc043';
      g.beginPath();
      g.moveTo(sx + sw - 60, 96);
      g.lineTo(sx + sw - 60, 62);
      g.stroke();
      g.strokeStyle = '#4c8be6';
      g.beginPath();
      g.moveTo(sx + sw - 60, 96);
      g.lineTo(sx + sw - 88, 110);
      g.stroke();

      // inspector
      rect(g, w - 266, 44, 266, h - 44 - 190, '#2f2f2f');
      text(g, 'Inspector', w - 254, 62, 13, '#e0e0e0', 600);
      text(g, 'Monitor', w - 254, 92, 15, '#ffffff', 600);
      ['Transform', 'Mesh Renderer', 'XR Simple Interactable'].forEach((s, i) => {
        rect(g, w - 258, 112 + i * 88, 250, 26, '#3c3c3c', 3);
        rect(g, w - 250, 121 + i * 88, 8, 8, '#4c8be6', 2);
        text(g, s, w - 234, 126 + i * 88, 12, '#dcdcdc', 600);
        for (let k = 0; k < 3; k++) rect(g, w - 250, 146 + i * 88 + k * 18, 232 - k * 40, 9, '#454545', 2);
      });

      // project
      rect(g, 0, h - 186, w, 186, '#2b2b2b');
      text(g, 'Project', 12, h - 168, 13, '#e0e0e0', 600);
      ['Models', 'Materials', 'Scenes', 'Scripts', 'Prefabs', 'XR'].forEach((s, i) => {
        rect(g, 20 + i * 130, h - 138, 100, 70, '#3a3a3a', 6);
        rect(g, 20 + i * 130 + 28, h - 128, 44, 34, '#7f8a99', 4);
        text(g, s, 70 + i * 130, h - 50, 12, '#cfcfcf', 500, 'center');
      });
    },
    1024,
    640,
  );
}

/* ---- a code editor: the other screens in the lab ------------------------ */
export function codeScreen(seed = 0) {
  return drawTexture(
    (g, w, h) => {
      rect(g, 0, 0, w, h, '#1e1f24');
      rect(g, 0, 0, w, 34, '#2a2b31');
      rect(g, 0, 34, 220, h - 34, '#232429');
      for (let i = 0; i < 14; i++) rect(g, 18 + (i % 3) * 14, 56 + i * 24, 90 + ((i * 37 + seed * 11) % 90), 8, i === 4 ? '#5b8fd9' : '#4a4d57', 3);
      const cols = ['#c586c0', '#9cdcfe', '#dcdcaa', '#569cd6', '#ce9178', '#6a9955'];
      for (let i = 0; i < 24; i++) {
        let x = 250 + (i % 4 === 2 ? 30 : 0) + (i % 7 === 3 ? 30 : 0);
        for (let k = 0; k < 3 + ((i + seed) % 3); k++) {
          const len = 40 + (((i + 1) * (k + 3) * 37 + seed * 17) % 120);
          rect(g, x, 60 + i * 22, len, 9, cols[(i + k + seed) % cols.length], 3);
          x += len + 12;
        }
      }
    },
    1024,
    640,
  );
}

/* ---- whiteboard --------------------------------------------------------- */
export function whiteboard() {
  return drawTexture(
    (g, w, h) => {
      rect(g, 0, 0, w, h, '#f3f3ef');
      const grd = g.createLinearGradient(0, 0, w, h);
      grd.addColorStop(0, 'rgba(255,255,255,0.5)');
      grd.addColorStop(1, 'rgba(0,0,0,0.05)');
      g.fillStyle = grd;
      g.fillRect(0, 0, w, h);
      g.lineCap = 'round';
      g.lineJoin = 'round';
      // the pipeline, sketched: Blender → Unity → XR
      const boxes = [
        [90, 'Blender', '#d0701a'],
        [380, 'Unity', '#2a2f3a'],
        [670, 'XR', '#2c6db4'],
      ];
      boxes.forEach(([x, label, col]) => {
        g.strokeStyle = col;
        g.lineWidth = 5;
        g.beginPath();
        g.roundRect(x, 130, 220, 110, 14);
        g.stroke();
        g.font = `600 44px "Segoe Print", "Bradley Hand", "Comic Sans MS", cursive`;
        g.fillStyle = col;
        g.textAlign = 'center';
        g.textBaseline = 'middle';
        g.fillText(label, x + 110, 188);
      });
      g.strokeStyle = '#333';
      g.lineWidth = 5;
      [[318, 372], [608, 662]].forEach(([a, b]) => {
        g.beginPath();
        g.moveTo(a, 186);
        g.lineTo(b, 186);
        g.moveTo(b - 16, 170);
        g.lineTo(b, 186);
        g.lineTo(b - 16, 202);
        g.stroke();
      });
      // a floor plan and some notes
      g.strokeStyle = '#3a7a3a';
      g.lineWidth = 4;
      g.strokeRect(120, 300, 220, 150);
      g.beginPath();
      g.moveTo(120, 360);
      g.lineTo(230, 360);
      g.lineTo(230, 450);
      g.moveTo(230, 300);
      g.lineTo(230, 330);
      g.stroke();
      g.strokeStyle = '#a33';
      g.lineWidth = 3;
      for (let i = 0; i < 4; i++) {
        g.beginPath();
        g.moveTo(440, 330 + i * 34);
        g.lineTo(440 + 160 + ((i * 53) % 110), 330 + i * 34 + ((i % 2) * 6 - 3));
        g.stroke();
      }
      g.fillStyle = '#f7e27a';
      g.fillRect(760, 300, 130, 120);
      g.strokeStyle = 'rgba(0,0,0,0.35)';
      g.lineWidth = 3;
      for (let i = 0; i < 4; i++) {
        g.beginPath();
        g.moveTo(776, 332 + i * 20);
        g.lineTo(870 - (i % 2) * 28, 332 + i * 20);
        g.stroke();
      }
    },
    1024,
    460,
    { redraw: true },
  );
}

/* ---- clock -------------------------------------------------------------- */
export function clockFace() {
  return drawTexture((g, w, h) => {
    const c = w / 2;
    g.fillStyle = '#f4f2ec';
    g.beginPath();
    g.arc(c, c, c, 0, 7);
    g.fill();
    g.strokeStyle = '#2c2f38';
    for (let i = 0; i < 12; i++) {
      const a = (i / 12) * Math.PI * 2;
      g.lineWidth = i % 3 ? 4 : 8;
      g.beginPath();
      g.moveTo(c + Math.sin(a) * c * 0.78, c - Math.cos(a) * c * 0.78);
      g.lineTo(c + Math.sin(a) * c * 0.9, c - Math.cos(a) * c * 0.9);
      g.stroke();
    }
    g.lineCap = 'round';
    g.lineWidth = 9;
    g.beginPath();
    g.moveTo(c, c);
    g.lineTo(c + Math.sin(-1.05) * c * 0.5, c - Math.cos(-1.05) * c * 0.5);
    g.stroke();
    g.lineWidth = 6;
    g.beginPath();
    g.moveTo(c, c);
    g.lineTo(c + Math.sin(0.35) * c * 0.72, c - Math.cos(0.35) * c * 0.72);
    g.stroke();
  }, 256, 256);
}

/* ---- fronts of lockers, drawers, blinds; keyboard; sky ------------------- */
export function lockerFront(base = '#8f9bab') {
  return drawTexture((g, w, h) => {
    rect(g, 0, 0, w, h, base);
    g.strokeStyle = 'rgba(0,0,0,0.35)';
    g.lineWidth = 4;
    g.strokeRect(6, 6, w / 2 - 9, h - 12);
    g.strokeRect(w / 2 + 3, 6, w / 2 - 9, h - 12);
    g.fillStyle = 'rgba(0,0,0,0.42)';
    for (let d = 0; d < 2; d++)
      for (let i = 0; i < 6; i++) rect(g, 24 + d * (w / 2), 34 + i * 12, w / 2 - 48, 5, 'rgba(0,0,0,0.42)', 2);
    rect(g, w / 2 - 22, h * 0.5, 10, 70, '#d9dbe0', 4);
    rect(g, w / 2 + 12, h * 0.5, 10, 70, '#d9dbe0', 4);
  }, 256, 640);
}

export function drawerFront(base = '#dedbd3') {
  return drawTexture((g, w, h) => {
    rect(g, 0, 0, w, h, base);
    g.strokeStyle = 'rgba(0,0,0,0.3)';
    g.lineWidth = 4;
    for (let i = 0; i < 3; i++) {
      const y = 8 + i * (h / 3);
      g.strokeRect(8, y, w - 16, h / 3 - 12);
      rect(g, w / 2 - 40, y + (h / 3 - 12) / 2 - 4, 80, 8, '#8a8f99', 4);
    }
  }, 256, 256);
}

export function blindTexture() {
  return drawTexture((g, w, h) => {
    for (let i = 0; i < 9; i++) {
      const y = (i / 9) * h;
      rect(g, 0, y, w, h / 9 - 8, '#e6e2d8');
      rect(g, 0, y + h / 9 - 8, w, 8, 'rgba(60,55,45,0.55)');
    }
  }, 128, 512);
}

export function keyboardTexture() {
  return drawTexture((g, w, h) => {
    rect(g, 0, 0, w, h, '#1b1c21');
    for (let r = 0; r < 5; r++)
      for (let c = 0; c < 16; c++) rect(g, 14 + c * 30, 14 + r * 26, 26, 22, '#2e3038', 4);
    rect(g, 110, 14 + 4 * 26, 260, 22, '#2e3038', 4);
  }, 512, 160);
}

export function windowSky() {
  return drawTexture((g, w, h) => {
    const grd = g.createLinearGradient(0, 0, 0, h);
    grd.addColorStop(0, '#5f86b8');
    grd.addColorStop(0.55, '#a9c1dc');
    grd.addColorStop(1, '#f0d9b5');
    g.fillStyle = grd;
    g.fillRect(0, 0, w, h);
    g.fillStyle = 'rgba(70,86,100,0.55)';
    for (let i = 0; i < 14; i++) {
      const bw = 40 + ((i * 53) % 60);
      const bh = 24 + ((i * 37) % 70);
      g.fillRect(i * (w / 14), h - bh, bw, bh);
    }
  }, 1024, 256);
}

export function floorPlanSheet() {
  return drawTexture((g, w, h) => {
    rect(g, 0, 0, w, h, '#eef0f2');
    g.strokeStyle = '#3d6db0';
    g.lineWidth = 2;
    g.strokeRect(30, 30, w - 60, h - 60);
    g.beginPath();
    g.moveTo(30, h * 0.45);
    g.lineTo(w * 0.55, h * 0.45);
    g.lineTo(w * 0.55, h - 30);
    g.moveTo(w * 0.55, 30);
    g.lineTo(w * 0.55, h * 0.22);
    g.stroke();
    g.strokeStyle = '#8fa8c8';
    g.lineWidth = 1;
    for (let i = 1; i < 12; i++) {
      g.beginPath();
      g.moveTo(30 + i * ((w - 60) / 12), 30);
      g.lineTo(30 + i * ((w - 60) / 12), h - 30);
      g.stroke();
    }
    g.fillStyle = '#3d6db0';
    [[70, 60], [150, 60], [230, 60], [w * 0.7, h * 0.7]].forEach(([x, y]) => g.fillRect(x, y, 34, 22));
  }, 512, 320);
}

export function tapeMarks() {
  return drawTexture((g, w, h) => {
    g.strokeStyle = 'rgba(226,181,63,0.95)';
    g.lineWidth = 16;
    g.lineCap = 'butt';
    const m = 20;
    const L = 130;
    [[m, m, 1, 1], [w - m, m, -1, 1], [w - m, h - m, -1, -1], [m, h - m, 1, -1]].forEach(([x, y, dx, dy]) => {
      g.beginPath();
      g.moveTo(x + dx * L, y);
      g.lineTo(x, y);
      g.lineTo(x, y + dy * L);
      g.stroke();
    });
  }, 512, 512);
}
