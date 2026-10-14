/* One native-WebGL field: emission -> spiral -> native title -> BMW photograph.
 * No RAF, input interception, image fetch, texture, dependency, or per-frame
 * particle loop. The owner supplies both clocks and the live DOM rectangles. */
(() => {
  const clamp = (value, min = 0, max = 1) => Math.max(min, Math.min(max, Number(value) || 0));
  const seeded = (seed) => () => {
    seed |= 0; seed = (seed + 0x6D2B79F5) | 0;
    let value = Math.imul(seed ^ seed >>> 15, 1 | seed);
    value = (value + Math.imul(value ^ value >>> 7, 61 | value)) ^ value;
    return ((value ^ value >>> 14) >>> 0) / 4294967296;
  };
  function distributed(index) {
    let result = 0, scale = 0.5;
    while (index) { result += (index & 1) * scale; index >>>= 1; scale *= 0.5; }
    return result;
  }
  const vertexSource = `
    precision highp float;
    attribute vec4 aSeed;
    attribute float aId;
    attribute vec2 aText;
    attribute vec2 aBMW;
    attribute vec3 aBMWColor;
    uniform vec2 uViewport;
    uniform vec2 uPointer;
    uniform vec2 uTilt;
    uniform float uInputActive;
    uniform vec4 uTitleRect;
    uniform vec4 uCopyRect;
    uniform vec4 uBMWRect;
    uniform float uTime;
    uniform float uProgress;
    uniform float uTransition;
    uniform float uHandoff;
    uniform float uBMWProgress;
    uniform vec2 uFlow;
    uniform vec3 uNativeLight;
    uniform float uMobile;
    uniform float uAmbientCount;
    uniform float uDpr;
    uniform float uPointBase;
    varying mediump vec3 vColor;
    varying mediump float vAlpha;
    varying mediump float vGlow;
    float ease(float a, float b, float value) {
      float t = clamp((value - a) / max(0.0001, b - a), 0.0, 1.0);
      return t * t * (3.0 - 2.0 * t);
    }
    vec2 screen(vec2 pixel) { return vec2(pixel.x - uViewport.x * 0.5, uViewport.y * 0.5 - pixel.y); }
    void main() {
      float pi = 3.14159265;
      float p = uProgress;
      float t = uTransition;
      float foreground = 1.0 - aSeed.z;
      float ambient = 1.0 - step(uAmbientCount, aId);
      vec2 titleCenter = screen(uTitleRect.xy + uTitleRect.zw * 0.5);
      vec2 titlePoint = screen(uTitleRect.xy + aText * uTitleRect.zw);
      vec2 carCenter = screen(uBMWRect.xy + uBMWRect.zw * 0.5);
      vec2 carPoint = screen(uBMWRect.xy + aBMW * uBMWRect.zw);

      // Accelerated descent from above the viewport bends into an unequal
      // spiral. No wrapped time or spawning: each immutable ID keeps its path.
      float descent = clamp((p - aSeed.y * 0.065) / 0.255, 0.0, 1.0);
      descent = descent * descent * (2.0 - descent);
      // Under one unhurried turn (once 1.3 turns), so the vortex reads as a drift.
      float orbitClock = ease(0.08, 0.62, p);
      float angle = aSeed.x * pi * 2.0 + orbitClock * pi * 1.6 + aSeed.w * 0.7;
      float radius = mix(0.36, 0.43, uMobile) * uViewport.x * (0.32 + aSeed.y * 0.68);
      radius *= 1.0 - ease(0.25, 0.71, p) * 0.38;
      float depth = 0.55 + aSeed.z * 1.3 + sin(angle) * 0.26;
      float lens = 1.45 / (1.0 + depth * 0.55);
      vec2 orbit = titleCenter + vec2(
        cos(angle) * radius * lens - uViewport.x * 0.035,
        sin(angle) * mix(uViewport.y * 0.21, uViewport.y * 0.17, uMobile)
          * (0.42 + aSeed.y * 0.58) * lens + cos(angle * 0.5) * uViewport.y * 0.042);
      vec2 emission = vec2((aSeed.x - 0.5) * uViewport.x * 0.86,
        uViewport.y * (0.63 + aSeed.w * 0.47));
      vec2 intro = mix(emission, orbit, descent);
      intro.x += sin(descent * pi) * uViewport.x * (aSeed.z - 0.45) * 0.21;
      // Native title wipe uses the same x-delayed soft band. The point title
      // settles first, then gives way to the original sharp DOM glyphs.
      float assembly = ease(0.33 + aText.x * 0.13 + aSeed.z * 0.045,
        0.72 + aText.x * 0.09 + aSeed.z * 0.025, p);
      intro = mix(intro, titlePoint, assembly);
      float nativeTitle = ease(0.72 + aText.x * 0.20, 0.80 + aText.x * 0.20, p);
      float ambientMix = ease(0.83, 1.0, p) * ambient;
      // A sparse depth field, never an orbit or outline around the name.
      // Immutable seeds keep it continuous when scrolling reverses.
      vec2 idle = vec2((aSeed.x - 0.5) * uViewport.x * 0.90,
        (0.5 - (0.16 + aSeed.y * 0.68)) * uViewport.y);
      idle += vec2(sin(uTime * 0.19 + aSeed.w * 6.0),
        cos(uTime * 0.16 + aSeed.z * 7.0)) * (3.0 + foreground * 4.0);
      intro = mix(intro, idle, ambientMix);
      float introAlpha = mix(0.64 + foreground * 0.25, 0.91, assembly)
        * (1.0 - nativeTitle);
      vec2 fromCopy = abs(idle - screen(uCopyRect.xy + uCopyRect.zw * 0.5)) - uCopyRect.zw * 0.5;
      float copySpace = smoothstep(8.0, 34.0, max(fromCopy.x, fromCopy.y));
      float quietAlpha = (0.12 + foreground * 0.22) * copySpace * ease(0.94, 1.0, p);
      introAlpha = mix(introAlpha, quietAlpha, ambientMix);

      // ---- The journey into the headlamps, in BMW scroll progress (bp) ----
      // The name evaporates left to right (bp .012-.11), sharing its band
      // with the native DOM mask. Each released point lifts out of its glyph
      // and hovers a moment, then arcs to its lamp, arriving in contour order
      // so the brow and corona are drawn like a line (bp .125-.215). The
      // outline holds, charging, until the photograph's own lamps ignite
      // (from .245) and take the energy over. Everything is a function of bp
      // or of its glide clocks (which follow it and equal it at rest), so
      // reversing the scroll reverses the flight exactly.
      float bp = uBMWProgress;
      // A restrained subset carries energy all the way; the rest of the name
      // rises as embers and fades, never packed into two balls.
      float carriesEnergy = 1.0 - step(0.30, aSeed.z);
      // The flight runs on the root's glide clocks (uFlow: quick, slow), not
      // on raw scroll: deeper points trail on the slower one, so the stream
      // layers by depth and eases after each notch or flick. Release is never
      // later than flight, so reversing returns points before the DOM wipe
      // restores their glyphs. Both clocks equal bp whenever scrolling rests.
      float depthLayer = mix(aSeed.z, aSeed.z / 0.30, carriesEnergy);
      float nearness = 1.0 - depthLayer;
      float flight = mix(uFlow.x, uFlow.y, depthLayer * 0.85);
      float lift = max(uFlow.x, flight);
      float releaseAt = 0.012 + aText.x * 0.070 + aSeed.w * 0.010;
      float release = ease(releaseAt, releaseAt + 0.022, lift);
      float rightLamp = step(0.5, aBMW.x);
      float side = mix(-1.0, 1.0, rightLamp);
      // aBMW contains the native corona/brow centerline UV.
      vec2 lampPoint = screen(uBMWRect.xy + aBMW * uBMWRect.zw);
      vec2 sourcePoint = mix(titlePoint, idle, ambient);
      // aSeed.x is also the measured distance along each LED contour.
      float traceAt = mix(0.125, 0.150, rightLamp) + aSeed.x * 0.065;
      float travelStart = releaseAt + 0.030 + aSeed.y * 0.018;
      float travelEnd = max(traceAt, travelStart + 0.045) + 0.010;
      float travel = ease(travelStart, travelEnd, flight) * carriesEnergy;
      // The lift: up and a little away from the name, with a slow living sway.
      float hover = ease(releaseAt, travelStart, lift);
      vec2 away = sourcePoint - titleCenter;
      away /= max(length(away), 1.0);
      float rise = mix(mix(16.0, 11.0, uMobile) + aSeed.y * 14.0, 34.0 + aSeed.y * 46.0, 1.0 - carriesEnergy);
      vec2 hovered = sourcePoint + (vec2(0.0, rise) + away * (6.0 + aSeed.z * 14.0)) * hover
        + vec2(sin(uTime * 0.9 + aSeed.w * 6.28), cos(uTime * 0.8 + aSeed.x * 6.28)) * 2.4 * hover;
      float verticalGap = max(72.0, hovered.y - lampPoint.y);
      // Nearer points swing wider than deeper ones: a little parallax.
      float arc = mix(0.80, 1.10, nearness);
      vec2 control1 = hovered + vec2(side * uViewport.x * mix(0.085, 0.11, rightLamp) * arc,
        -max(26.0, verticalGap * 0.34));
      vec2 control2 = lampPoint + vec2(side * uViewport.x * mix(0.045, 0.06, rightLamp) * arc,
        max(26.0, verticalGap * 0.29));
      float inverseTravel = 1.0 - travel;
      vec2 curved = inverseTravel * inverseTravel * inverseTravel * hovered
        + 3.0 * inverseTravel * inverseTravel * travel * control1
        + 3.0 * inverseTravel * travel * travel * control2
        + travel * travel * travel * lampPoint;
      float travelPulse = sin(travel * pi);
      float depthPulse = 1.0 / (1.0 + (0.4 + aSeed.w * 1.2) * travelPulse * 0.38);
      vec2 curveCenter = mix(hovered, lampPoint, travel);
      curved = curveCenter + (curved - curveCenter) * depthPulse;
      curved += vec2((aSeed.x - 0.5) * mix(15.0, 10.0, uMobile),
        sin(aSeed.w * 6.0 + travel * 2.0) * mix(5.0, 3.5, uMobile)) * travelPulse;
      // A slow, coherent current (the curl of a drifting cellular field)
      // bends the streams like smoke. Neighbours share it, and it vanishes
      // at both ends of the flight, so glyph and lamp registration stay exact.
      vec2 cell = curved * vec2(0.0058, 0.0071) + vec2(uTime * 0.045, -uTime * 0.035);
      vec2 fine = vec2(cell.x + cell.y, cell.y - cell.x) * 2.1 + vec2(1.7, -0.6);
      vec2 current = vec2(sin(cell.x * 1.3) * cos(cell.y), -1.3 * cos(cell.x * 1.3) * sin(cell.y))
        + vec2(sin(fine.x) * cos(fine.y), -cos(fine.x) * sin(fine.y)) * 0.45;
      curved += current * travelPulse * mix(24.0, 15.0, uMobile) * (0.75 + aSeed.y * 0.5);
      float converge = ease(traceAt - 0.008, travelEnd, flight) * carriesEnergy;
      vec2 journey = mix(sourcePoint, curved, release);
      journey = mix(journey, lampPoint, converge);
      // A short seeded tail remains above each lens while its leaders arrive;
      // it contracts completely into the photograph's measured LED contours.
      journey += normalize(control2 - lampPoint) * pow(aSeed.y, 1.5)
        * mix(34.0, 24.0, uMobile) * ease(0.10, 0.15, flight) * (1.0 - converge) * carriesEnergy;
      // Charging: the drawn outline brightens toward ignition, a slow wave
      // running along it, and flares as the real lamp takes over.
      float charge = ease(0.19, 0.25, bp) * converge;
      float shimmer = 0.5 + 0.5 * sin(uTime * 2.4 - aSeed.x * 18.0);
      float nativeLamp = mix(uNativeLight.y, uNativeLight.z, rightLamp);
      float nativeContribution = clamp(uNativeLight.x * mix(1.0, 1.55, nativeLamp), 0.0, 1.0);
      float lampHandoff = ease(0.28, 0.94, nativeContribution);
      float flare = sin(lampHandoff * pi) * converge;
      float ember = ease(releaseAt, releaseAt + 0.018, lift) * (1.0 - ease(releaseAt + 0.02, releaseAt + 0.085, lift));
      // A bright front runs across the name as each glyph lets go.
      float releaseFlash = sin(release * pi) * (1.0 - travel);
      float consumed = (1.0 - carriesEnergy) * 0.26 * ember * (1.0 + releaseFlash * 0.9);
      float energy = carriesEnergy * mix(0.62, mix(0.66, 0.54, uMobile), converge);
      energy *= 1.0 + releaseFlash * 0.7 + charge * (0.20 + 0.25 * shimmer) + flare * 0.55;
      float bridgeAlpha = release * (consumed + energy);
      // Deeper points read a little fainter in flight; all match at the lamps.
      bridgeAlpha *= mix(1.0, mix(0.72, 1.0, nearness), travelPulse);
      // Transfer energy only as this lamp's original photographed light
      // strengthens, rather than dimming both patterns on a separate clock.
      bridgeAlpha *= (1.0 - lampHandoff) * (1.0 - ease(0.92, 1.0, uHandoff));
      float bridgeMix = ease(0.0, 0.04, t);
      vec2 point = mix(intro, journey, bridgeMix);
      float alpha = mix(introAlpha, bridgeAlpha, bridgeMix);

      // Tiny autonomous/input displacement is zero for settled glyphs and
      // the exact BMW endpoint. Scrolling backwards reproduces registration.
      float motion = mix((1.0 - assembly) * 0.7 + ambientMix,
        ease(releaseAt, releaseAt + 0.03, lift) * (1.0 - max(travel, converge)) * 0.50, bridgeMix);
      point += vec2(sin(uTime * 0.50 + aSeed.w * 6.0), cos(uTime * 0.43 + aSeed.y * 5.0)) * motion * 3.3;
      // Mobile tilt moves depth, not the finished typography or BMW targets.
      // When sensors are absent, the field's own slow drift remains alive.
      point += vec2(uTilt.x, -uTilt.y) * vec2(22.0, 16.0)
        * (0.35 + foreground * 0.65) * uMobile
        * ((1.0 - assembly) * 0.60 + ambientMix) * (1.0 - bridgeMix);
      point += vec2(uPointer.x, -uPointer.y) * vec2(5.0, 3.5)
        * (foreground - 0.5) * uInputActive * (1.0 - uMobile)
        * ambientMix * (1.0 - bridgeMix);
      vec2 cursor = vec2(uPointer.x, -uPointer.y) * uViewport * 0.5;
      vec2 delta = point - cursor;
      float distance = length(delta);
      float influence = 1.0 - smoothstep(0.0, mix(145.0, 110.0, uMobile), distance);
      vec2 outward = delta / max(distance, 1.0);
      point += (outward * 0.88 + vec2(-outward.y, outward.x) * 0.22)
        * influence * influence * motion * 18.0 * uInputActive * (1.0 - uMobile);
      gl_Position = vec4(point * 2.0 / uViewport, 0.0, 1.0);
      float pearl = step(0.97, aSeed.y);
      float pointSize = uPointBase * (0.77 + foreground * 0.36) * mix(lens, 1.0, assembly);
      pointSize = mix(pointSize, uPointBase * 1.2, pearl * (1.0 - assembly));
      pointSize = mix(pointSize, 0.95 + foreground * 0.55, ambientMix);
      pointSize = mix(pointSize, (1.25 + aSeed.w * 0.20 + (charge * 0.45 + flare * 0.6) * carriesEnergy)
        * mix(1.0, mix(0.80, 1.18, nearness), travelPulse * carriesEnergy), bridgeMix);
      float minimumSize = mix(mix(1.35, 1.65, uMobile), 0.8, ambientMix);
      // Points on the drawn LED outline carry a soft halo, so the contour
      // reads as light rather than wire; the sprite grows, its core doesn't.
      float glow = clamp(converge * 0.55 + charge * 0.30 + flare * 0.45, 0.0, 1.0) * bridgeMix;
      gl_PointSize = clamp(pointSize, mix(minimumSize, 0.84, bridgeMix), 2.6) * (1.0 + 1.7 * glow) * uDpr;
      vGlow = glow;
      vec2 rim = uViewport * 0.5 - abs(point);
      alpha *= ease(0.0, min(uViewport.x, uViewport.y) * 0.018, min(rim.x, rim.y));
      vAlpha = alpha;
      vec3 gold = mix(vec3(1.0, 0.74, 0.39), vec3(0.80, 0.86, 0.96), aSeed.w * 0.40);
      vec3 titleColor = vec3(0.94, 0.95, 0.98);
      vec3 energyColor = mix(vec3(0.91, 0.74, 0.47), vec3(0.75, 0.88, 1.0), ease(0.02, 0.18, lift));
      energyColor = mix(energyColor, vec3(0.88, 0.95, 1.0), clamp(charge * 0.45 + flare * 0.5, 0.0, 1.0));
      vColor = mix(gold, titleColor, assembly);
      vColor = mix(vColor, vec3(0.69, 0.76, 0.84), ambientMix);
      vColor = mix(vColor, energyColor, bridgeMix);
    }
  `;
  const fragmentSource = `
    precision mediump float;
    varying mediump vec3 vColor;
    varying mediump float vAlpha;
    varying mediump float vGlow;
    void main() {
      float radius = length(gl_PointCoord - vec2(0.5));
      float core = 1.0 - smoothstep(0.24, 0.5, radius * (1.0 + 1.7 * vGlow));
      float halo = 1.0 - smoothstep(0.0, 0.5, radius);
      float alpha = (core + halo * halo * 0.32 * vGlow) * vAlpha;
      if (alpha < 0.008) discard;
      gl_FragColor = vec4(vColor, alpha);
    }
  `;

  // Raster only at layout/font changes. Text-node Range geometry preserves the
  // native baseline, kerning and letter spacing; decorative cat is excluded.
  function sampleTitle(element) {
    if (!element) throw new Error('Hero flow title is missing');
    const box = element.getBoundingClientRect();
    if (!(box.width > 0 && box.height > 0)) throw new Error('Hero flow title has no measurable layout');
    const raster = document.createElement('canvas');
    const scale = Math.min(2, 2048 / box.width, 512 / box.height);
    raster.width = Math.ceil(box.width * scale); raster.height = Math.ceil(box.height * scale);
    const context = raster.getContext('2d', { willReadFrequently: true });
    if (!context) throw new Error('Hero flow title sampler is unavailable');
    context.scale(scale, scale); context.textBaseline = 'alphabetic'; context.fillStyle = '#fff';
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT), range = document.createRange();
    let node, characters = 0;
    while ((node = walker.nextNode())) {
      const parent = node.parentElement;
      if (!parent || parent.closest('[aria-hidden="true"], script, style')) continue;
      const style = getComputedStyle(parent);
      if (style.display === 'none') continue;
      context.font = `${style.fontStyle} ${style.fontWeight} ${style.fontSize} ${style.fontFamily}`;
      const metrics = context.measureText('Hg'), fontSize = parseFloat(style.fontSize) || 16;
      const ascent = metrics.fontBoundingBoxAscent ?? metrics.actualBoundingBoxAscent ?? fontSize * .8;
      const descent = metrics.fontBoundingBoxDescent ?? metrics.actualBoundingBoxDescent ?? fontSize * .2;
      for (let index = 0; index < node.length; index++) {
        const character = node.textContent[index];
        if (!character.trim()) continue;
        range.setStart(node, index); range.setEnd(node, index + 1);
        const rect = range.getBoundingClientRect();
        if (!(rect.width > 0 && rect.height > 0)) continue;
        const baseline = rect.top - box.top + (rect.height - ascent - descent) * .5 + ascent;
        context.fillText(style.textTransform === 'uppercase' ? character.toUpperCase() : character,
          rect.left - box.left, baseline); characters++;
      }
    }
    range.detach?.();
    const pixels = context.getImageData(0, 0, raster.width, raster.height).data, samples = [];
    for (let y = 0; y < raster.height; y++) {
      for (let x = 0; x < raster.width; x++) {
        if (pixels[(y * raster.width + x) * 4 + 3] >= 112)
          samples.push((x + .5) / raster.width, (y + .5) / raster.height);
      }
    }
    if (!samples.length || characters < 6) throw new Error('Hero flow title sampling produced no name');
    return { samples, characters, rect: [box.x, box.y, box.width, box.height] };
  }
  function decodeBMW(cache) {
    if (!cache?.packed || !(cache.count > 0) || (cache.stride && cache.stride !== 7))
      throw new Error('Hero flow BMW point cache is unavailable');
    const binary = atob(cache.packed), bytes = new Uint8Array(binary.length);
    for (let i = 0; i < bytes.length; i++) bytes[i] = binary.charCodeAt(i);
    if (bytes.length !== cache.count * 7) throw new Error('Hero flow BMW point cache has invalid length');
    return { count: cache.count, bytes, view: new DataView(bytes.buffer) };
  }
  const rectValues = (rect, fallback) => {
    const values = rect ? [rect.x ?? rect.left, rect.y ?? rect.top, rect.width, rect.height] : fallback;
    return values?.every(Number.isFinite) && values[2] > 0 && values[3] > 0 ? values : fallback;
  };

  // Centerlines measured from the native photograph's blue LED pixels:
  // two open corona outlines plus the brow of each lamp, in source pixels.
  const headlightPaths = [[[[177,1898],[182,1899],[182,1900],[191,1901],[192,1902],[198,1902],[198,1903],[209,1904],[209,1905],[214,1905],[215,1906],[220,1906],[221,1907],[226,1907],[227,1908],[244,1910],[245,1911],[251,1911],[257,1913],[263,1913],[264,1914],[293,1918],[294,1919],[300,1919],[301,1920],[319,1922],[319,1923],[325,1923],[326,1924],[331,1924],[331,1925],[337,1925],[337,1926],[343,1926],[344,1927],[349,1927],[355,1929],[384,1933],[385,1934],[394,1935],[394,1936],[400,1936],[406,1938],[411,1938],[412,1939],[424,1941],[424,1942],[435,1943],[435,1944],[446,1946]],[[237,1920],[233,1922],[230,1922],[223,1930],[219,1938],[218,1943],[217,1943],[217,1945],[215,1948],[213,1966],[214,1967],[215,1983],[217,1986],[219,1993],[220,1993],[221,1998],[222,1998],[230,2010],[235,2015],[239,2017],[239,2018],[252,2019],[253,2020],[259,2020],[260,2021],[267,2021],[268,2022],[274,2022],[274,2023],[281,2023],[281,2024],[288,2024],[289,2025],[295,2025],[296,2026],[307,2026],[310,2024],[312,2024],[312,2023],[326,2013],[336,1999],[337,1999],[337,1997],[338,1997],[340,1991],[342,1990],[342,1989],[344,1989],[345,1987],[348,1986]],[[341,1941],[343,1951],[344,1952],[345,1967],[349,1970]],[[349,1970],[357,1965],[357,1963],[359,1959],[360,1959],[360,1957],[370,1945],[379,1944]],[[348,1986],[348,1973],[349,1970]],[[348,1986],[351,1989],[352,1992],[352,2003],[358,2017],[358,2019],[359,2019],[359,2021],[360,2021],[368,2033],[379,2041],[379,2042],[381,2043],[435,2043],[436,2042],[444,2041],[444,2040],[447,2039],[447,2038],[462,2027],[466,2021],[467,2021],[467,2019],[472,2008],[473,2000],[474,1999],[474,1979],[472,1975],[471,1968],[466,1960],[463,1959],[462,1957],[458,1956]]],[[[1756,1941],[1752,1942],[1752,1944],[1749,1945],[1748,1950],[1747,1950],[1747,1952],[1745,1955],[1744,1980],[1745,1981],[1745,1988],[1747,1991],[1749,1998],[1750,1998],[1751,2003],[1752,2003],[1752,2005],[1753,2005],[1755,2009],[1764,2020],[1777,2029],[1777,2030],[1779,2030],[1779,2031],[1782,2032],[1795,2032],[1796,2031],[1826,2028],[1827,2027],[1834,2027],[1835,2026],[1841,2026],[1842,2025],[1850,2025],[1850,2024],[1852,2024],[1860,2017],[1867,2008],[1868,2005],[1869,2005],[1873,1994],[1874,1994],[1874,1991],[1876,1986],[1876,1981],[1877,1980],[1877,1962],[1876,1961],[1874,1949],[1873,1949],[1871,1942],[1870,1942],[1869,1938],[1861,1928],[1856,1926],[1851,1926]],[[1624,1951],[1631,1950],[1635,1948],[1647,1947],[1656,1944],[1661,1944],[1661,1943],[1674,1942],[1675,1941],[1680,1941],[1686,1939],[1704,1937],[1711,1935],[1717,1935],[1724,1933],[1751,1930],[1751,1929],[1759,1929],[1766,1927],[1772,1927],[1773,1926],[1779,1926],[1780,1925],[1786,1925],[1787,1924],[1793,1924],[1794,1923],[1800,1923],[1801,1922],[1807,1922],[1808,1921],[1815,1921],[1822,1919],[1829,1919],[1830,1918],[1850,1916],[1851,1915],[1863,1914],[1864,1913],[1871,1913],[1878,1911],[1897,1909],[1897,1908],[1917,1906],[1918,1905],[1925,1904],[1925,1903],[1928,1902]],[[1620,1959],[1613,1963],[1611,1963],[1611,1965],[1610,1965],[1607,1974],[1606,1974],[1606,1976],[1604,1979],[1604,1985],[1603,1986],[1603,2003],[1604,2004],[1604,2010],[1609,2021],[1609,2023],[1610,2025],[1611,2025],[1611,2027],[1615,2031],[1617,2035],[1618,2035],[1623,2041],[1626,2042],[1627,2044],[1635,2048],[1640,2048],[1641,2049],[1697,2049],[1697,2048],[1709,2040],[1719,2026],[1720,2026],[1720,2024],[1725,2013],[1726,2004],[1727,2003],[1727,1987],[1726,1986],[1725,1976],[1723,1973],[1723,1971],[1722,1971],[1721,1966],[1720,1966],[1720,1964],[1719,1964],[1709,1950],[1700,1948]]]];
  const headlightContours = headlightPaths.map((paths, side) => {
    const segments = []; let total = 0;
    const ordered = side ? [paths[1], paths[2], paths[0]] : paths;
    for (const path of ordered) {
      for (let i = 1; i < path.length; i++) {
        const a = path[i - 1], b = path[i], length = Math.hypot(b[0] - a[0], b[1] - a[1]);
        if (!length) continue;
        segments.push({ a, b, start: total, length }); total += length;
      }
    }
    return { segments, total };
  });
  const mappedLampFields = new WeakSet();
  function assignHeadlightTargets(field) {
    if (mappedLampFields.has(field)) return;
    for (let offset = 0; offset < field.length; offset += 12) {
      const side = field[offset + 5] >= .48 + field[offset + 3] * .08 ? 1 : 0;
      const contour = headlightContours[side], distance = field[offset] * contour.total;
      let low = 0, high = contour.segments.length - 1;
      while (low < high) {
        const middle = (low + high) >>> 1, segment = contour.segments[middle];
        if (distance >= segment.start + segment.length) low = middle + 1; else high = middle;
      }
      const segment = contour.segments[low], along = (distance - segment.start) / segment.length;
      // Only these dormant entry target slots change. Seed, ID, native title
      // targets and cache colors retain their original exact Float32 values.
      field[offset + 7] = (segment.a[0] + (segment.b[0] - segment.a[0]) * along) / 2160;
      field[offset + 8] = (segment.a[1] + (segment.b[1] - segment.a[1]) * along) / 3840;
    }
    mappedLampFields.add(field);
  }

  window.createHeroFlow = ({ canvas, hero, title, onError } = {}) => {
    if (!canvas || !hero || !title) throw new Error('Hero flow requires canvas, hero and title');
    const gl = canvas.getContext('webgl', { alpha: true, antialias: false, depth: false,
      stencil: false, powerPreference: 'low-power', preserveDrawingBuffer: false });
    if (!gl) throw new Error('Hero flow WebGL is unavailable');
    const memory = navigator.deviceMemory || 8, cores = navigator.hardwareConcurrency || 8;
    const mobile = matchMedia('(pointer: coarse)').matches || innerWidth <= 720;
    const low = memory <= 2 || cores <= 2;
    const cache = decodeBMW(window.HeroBMWPoints);
    const initialCount = Math.min(cache.count, low ? 2000 : mobile ? 3500 : 6000);
    const ambientCount = low ? 60 : mobile ? 76 : 108;
    const dprCap = low ? 1 : mobile ? 1.25 : 1.5;
    let dpr = Math.min(devicePixelRatio || 1, dprCap), count = initialCount;
    let width = 1, height = 1, frames = 0, drawCalls = 0, drawnCount = 0;
    let disposed = false, lost = false, error = null, ready = false;
    const parallel = gl.getExtension('KHR_parallel_shader_compile');
    let compileStarted = 0, compileMs = null;
    let lastProgress = 0, lastTransition = 0, lastHandoff = 0, lastTime = 0, lastScrollOffset = 0;
    let lastBMWProgress = 0, lastFlow = [0, 0], nativeLight = [0, 0, 0];
    let lastTilt = [0, 0], lastInputActive = 0;
    let previousTick = 0, slowFrames = 0, reductions = 0, pointerX = 0, pointerY = 0;
    let titleRect = [0, 0, 1, 1], copyRect = [0, 0, 1, 1], bmwRect = [0, 0, 1, 1], textCount = 0, textCharacters = 0;
    let field, fieldSignature = '', uploads = 0;
    const shaders = [], uniforms = {};
    let program, buffer;
    const reportError = (problem) => { error = String(problem?.message || problem); onError?.(problem); };
    function compile(type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source); gl.compileShader(shader); shaders.push(shader); return shader;
    }
    function uploadField() {
      if (!ready || !field) return;
      assignHeadlightTargets(field);
      gl.bindBuffer(gl.ARRAY_BUFFER, buffer); gl.bufferData(gl.ARRAY_BUFFER, field, gl.STATIC_DRAW); uploads++;
    }
    function prepare() {
      if (ready) return true;
      if (disposed || lost) return false;
      if (parallel && !gl.getProgramParameter(program, parallel.COMPLETION_STATUS_KHR)) return false;
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        const detail = shaders.map(shader => gl.getShaderInfoLog(shader)).filter(Boolean).join('\n');
        throw new Error(`Hero flow link: ${gl.getProgramInfoLog(program) || detail || 'unknown shader error'}`);
      }
      for (const name of ['uViewport', 'uPointer', 'uTilt', 'uInputActive', 'uTitleRect', 'uCopyRect', 'uBMWRect', 'uTime', 'uProgress',
        'uTransition', 'uHandoff', 'uBMWProgress', 'uFlow', 'uNativeLight', 'uMobile', 'uAmbientCount', 'uDpr', 'uPointBase'])
        uniforms[name] = gl.getUniformLocation(program, name);
      buffer = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buffer); gl.useProgram(program);
      const layout = [['aSeed', 4, 0], ['aId', 1, 16], ['aText', 2, 20], ['aBMW', 2, 28], ['aBMWColor', 3, 36]];
      for (const [name, size, offset] of layout) {
        const location = gl.getAttribLocation(program, name);
        if (location >= 0) { gl.enableVertexAttribArray(location); gl.vertexAttribPointer(location, size, gl.FLOAT, false, 48, offset); }
      }
      gl.disable(gl.DEPTH_TEST); gl.enable(gl.BLEND);
      gl.blendFuncSeparate(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA, gl.ONE, gl.ONE_MINUS_SRC_ALPHA);
      gl.clearColor(0, 0, 0, 0); ready = true; uploadField();
      compileMs = performance.now() - compileStarted; return true;
    }
    function resizeViewport() {
      if (disposed || lost) return;
      const nextWidth = Math.max(1, Math.round(canvas.parentElement?.clientWidth || document.documentElement.clientWidth || innerWidth));
      const nextHeight = Math.max(1, Math.round(canvas.parentElement?.clientHeight || innerHeight));
      const pixelWidth = Math.round(nextWidth * dpr), pixelHeight = Math.round(nextHeight * dpr);
      if (width === nextWidth && height === nextHeight && canvas.width === pixelWidth && canvas.height === pixelHeight) return;
      width = nextWidth; height = nextHeight;
      canvas.width = pixelWidth; canvas.height = pixelHeight;
      gl.viewport(0, 0, pixelWidth, pixelHeight);
    }
    function resize() {
      if (disposed || lost) return;
      try {
        resizeViewport();
        const box = title.getBoundingClientRect(), style = getComputedStyle(title);
        titleRect = [box.x, box.y + (window.scrollY || 0), box.width, box.height];
        const signature = [box.width.toFixed(2), box.height.toFixed(2), style.font, style.letterSpacing,
          document.fonts?.status, document.documentElement.classList.contains('identity-fonts-ready')].join('|');
        if (!field || signature !== fieldSignature) {
          const sampled = sampleTitle(title), samples = sampled.samples, random = seeded(0x4EAF10);
          field = new Float32Array(initialCount * 12); textCount = samples.length / 2; textCharacters = sampled.characters;
          for (let i = 0; i < initialCount; i++) {
            const at = i * 7, textAt = Math.min(textCount - 1, Math.floor(distributed(i + 1) * textCount)) * 2;
            field.set([random(), random(), random(), random(), i, samples[textAt], samples[textAt + 1],
              cache.view.getUint16(at, true) / 65535, cache.view.getUint16(at + 2, true) / 65535,
              cache.bytes[at + 4] / 255, cache.bytes[at + 5] / 255, cache.bytes[at + 6] / 255], i * 12);
          }
          fieldSignature = signature; uploadField();
        }
        if (ready) {
          const issue = gl.getError();
          if (issue !== gl.NO_ERROR) throw new Error(`Hero flow resize WebGL error ${issue}`);
        }
      } catch (problem) { reportError(problem); throw problem; }
    }
    try {
      compileStarted = performance.now(); program = gl.createProgram();
      gl.attachShader(program, compile(gl.VERTEX_SHADER, vertexSource));
      gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fragmentSource)); gl.linkProgram(program);
      // Submit the link once while the nonblocking completion check polls.
      // Do not wait for GPU completion or delay the native loading fallback.
      gl.flush();
      resize(); if (!parallel) prepare();
    } catch (problem) {
      if (buffer) gl.deleteBuffer(buffer); if (program) gl.deleteProgram(program);
      shaders.forEach(shader => gl.deleteShader(shader)); reportError(problem); throw problem;
    }
    function render({ time = 0, progress = 0, transition = 0, handoff = 0, pointer = [0, 0],
      tilt = [0, 0], inputActive = 0,
      bmwProgress = 0, flow = null, nativeLight: nextLight = [0, 0, 0],
      bmwRect: nextBMW, titleRect: nextTitle, copyRect: nextCopy, scrollOffset = 0 } = {}) {
      if (disposed || lost || document.hidden) { previousTick = 0; return; }
      if (!ready) {
        try { if (!prepare()) return; }
        catch (problem) { reportError(problem); dispose(); throw problem; }
      }
      // No stretched old framebuffer while mobile browser chrome resizes.
      resizeViewport();
      lastProgress = clamp(progress); lastTransition = clamp(transition); lastHandoff = clamp(handoff);
      lastBMWProgress = clamp(bmwProgress);
      lastFlow = flow ? [clamp(flow[0]), clamp(flow[1])] : [lastBMWProgress, lastBMWProgress];
      nativeLight = [clamp(nextLight[0]), clamp(nextLight[1]), clamp(nextLight[2])];
      lastTilt = [clamp(tilt[0], -1, 1), clamp(tilt[1], -1, 1)];
      lastInputActive = clamp(inputActive);
      lastTime = Math.max(0, Number(time) || 0); lastScrollOffset = Math.max(0, Number(scrollOffset) || 0);
      titleRect = rectValues(nextTitle, titleRect); copyRect = rectValues(nextCopy, copyRect); bmwRect = rectValues(nextBMW, bmwRect);
      gl.clear(gl.COLOR_BUFFER_BIT); drawCalls = 0; drawnCount = 0;
      if (lastHandoff >= .999) { previousTick = 0; slowFrames = 0; return; }
      const start = performance.now();
      const dt = previousTick ? Math.min(.05, Math.max(0, (start - previousTick) / 1000)) : .016;
      const targetX = clamp(pointer[0], -1, 1), targetY = clamp(pointer[1], -1, 1);
      const follow = 1 - Math.exp(-dt * (Math.abs(targetX) + Math.abs(targetY) < .001 ? 4.2 : 9));
      pointerX += (targetX - pointerX) * follow; pointerY += (targetY - pointerY) * follow;
      gl.useProgram(program); gl.uniform2f(uniforms.uViewport, width, height);
      gl.uniform2f(uniforms.uPointer, pointerX, pointerY); gl.uniform4f(uniforms.uTitleRect, ...titleRect);
      gl.uniform2f(uniforms.uTilt, ...lastTilt); gl.uniform1f(uniforms.uInputActive, lastInputActive);
      gl.uniform4f(uniforms.uCopyRect, ...copyRect);
      gl.uniform4f(uniforms.uBMWRect, ...bmwRect); gl.uniform1f(uniforms.uTime, lastTime);
      gl.uniform1f(uniforms.uProgress, lastProgress); gl.uniform1f(uniforms.uTransition, lastTransition);
      gl.uniform1f(uniforms.uHandoff, lastHandoff); gl.uniform1f(uniforms.uMobile, mobile || width <= 720 ? 1 : 0);
      gl.uniform1f(uniforms.uBMWProgress, lastBMWProgress); gl.uniform2f(uniforms.uFlow, ...lastFlow);
      gl.uniform3f(uniforms.uNativeLight, ...nativeLight);
      gl.uniform1f(uniforms.uAmbientCount, ambientCount); gl.uniform1f(uniforms.uDpr, dpr);
      gl.uniform1f(uniforms.uPointBase, mobile ? 2.10 : 1.95);
      drawnCount = lastProgress >= .999 && lastTransition <= .00001 ? Math.min(count, ambientCount) : count;
      gl.drawArrays(gl.POINTS, 0, drawnCount); drawCalls = 1; frames++;
      const now = performance.now(), gap = previousTick ? now - previousTick : 0;
      const activelyMoving = lastProgress < .99 || (lastTransition > .001 && lastTransition < .90);
      if (gap >= 180 || !activelyMoving) slowFrames = 0;
      else slowFrames = gap > 55 || now - start > 12 ? slowFrames + 1 : Math.max(0, slowFrames - 2);
      previousTick = now;
      if (!window.HeroIntroState?.noAdapt && activelyMoving && slowFrames >= 20 && reductions < 2) {
        count = Math.max(Math.min(initialCount, low ? 1500 : mobile ? 2000 : 3500), Math.floor(count * .75));
        dpr = Math.max(.85, dpr - .15); reductions++; slowFrames = 0; resize();
      }
    }
    function contextLost(event) {
      // Preventing the default asks the browser to restore the context; the
      // owner rebuilds the field then (see contextLost on the reported error).
      event.preventDefault(); lost = true; drawCalls = 0;
      const problem = new Error('Hero flow WebGL context lost'); problem.contextLost = true;
      reportError(problem);
    }
    canvas.addEventListener('webglcontextlost', contextLost);
    function dispose() {
      if (disposed) return;
      disposed = true; drawCalls = 0; canvas.removeEventListener('webglcontextlost', contextLost);
      if (buffer) gl.deleteBuffer(buffer); if (program) gl.deleteProgram(program);
      shaders.forEach(shader => gl.deleteShader(shader)); gl.getExtension('WEBGL_lose_context')?.loseContext();
    }
    return { render, resize, dispose, stats: () => ({ width, height, dpr, particles: count, count, initialCount,
      ambient: ambientCount, drawnCount, drawCalls, gpuFrames: frames, textures: 0, buffers: ready && !disposed ? 1 : 0,
      pointer: [pointerX, pointerY], renderProgress: lastProgress, renderTransition: lastTransition, renderHandoff: lastHandoff,
      tilt: [...lastTilt], inputActive: lastInputActive, ambientLayout: 'sparse-depth-field', copyRect: [...copyRect],
      renderBMWProgress: lastBMWProgress, renderFlow: [...lastFlow], nativeLight: [...nativeLight],
      renderTime: lastTime, scrollOffset: lastScrollOffset, titleRect: [...titleRect], bmwRect: [...bmwRect],
      textSamples: textCount, textCharacters, carSamples: cache.count, uploads, qualityReductions: reductions,
      ready: ready && !disposed && !lost, parallelCompilation: Boolean(parallel), compileMs, error }) };
  };
})();
