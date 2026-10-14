"""Build the BMW -> Bosch particle cache; source photographs are read-only.

Run with Python, Pillow and NumPy from any working directory. The output is a
classic script so the portfolio's file:// preview does not need a fetch/CORS
exception. Each 14-byte record is little-endian source UV16 + RGB8, followed by
destination UV16 + RGB8. UVs refer to the complete, unmodified source image.
"""

from __future__ import annotations

import argparse
import base64
import hashlib
import json
from pathlib import Path

import numpy as np
from PIL import Image


ROOT = Path(__file__).resolve().parents[2]
OUTPUT = ROOT / "assets/bmw-bridge/points.js"
COUNT = 16_000
SEED = 0xB04C2026
SOURCES = (
    {"name": "bmw", "path": "assets/bmw.jpg", "crop": (0.0, 0.43, 1.0, 0.67)},
    {"name": "bosch", "path": "assets/bosch-cockpit-off@2x.webp", "crop": (0.0, 0.35, 1.0, 0.94)},
)


def sample(spec: dict, seed: int) -> tuple[np.ndarray, dict]:
    with Image.open(ROOT / spec["path"]) as image:
        rgb = np.asarray(image.convert("RGB"), dtype=np.uint8)
    height, width = rgb.shape[:2]
    left, top, right, bottom = spec["crop"]
    # One candidate per 3px cell: no duplicated points or repeated bright pixels.
    xs = np.arange(int(left * width) + 1, int(right * width), 3)
    ys = np.arange(int(top * height) + 1, int(bottom * height), 3)
    xx, yy = np.meshgrid(xs, ys)
    x, y = xx.ravel(), yy.ravel()
    color = rgb[y, x]
    luma = np.dot(color.astype(np.float64), [0.2126, 0.7152, 0.0722])
    edge = np.zeros(len(x), dtype=np.float64)
    for dx, dy in ((-3, 0), (3, 0), (0, -3), (0, 3)):
        neighbor = rgb[np.clip(y + dy, 0, height - 1), np.clip(x + dx, 0, width - 1)]
        edge = np.maximum(edge, np.max(np.abs(color.astype(np.int16) - neighbor.astype(np.int16)), axis=1))
    # Retain dark bodywork with a real signal, omit empty windshield/background.
    valid = (luma > 2.2) | ((edge > 7.0) & (luma > 0.8))
    x, y, color, luma, edge = (value[valid] for value in (x, y, color, luma, edge))
    u, v = x / (width - 1), y / (height - 1)
    weight = 0.20 + 1.7 * np.sqrt(luma / 255) + 2.8 * np.sqrt(edge / 255)
    if spec["name"] == "bmw":
        lamps = (((u > 0.065) & (u < 0.27)) | ((u > 0.715) & (u < 0.94))) & (v > 0.49) & (v < 0.55)
        weight *= np.where(lamps & (luma > 25), 1.7, 1.0)
    else:
        red = (color[:, 0].astype(float) > color[:, 1] * 1.45) & (color[:, 0] > 24)
        dashboard = (v >= 0.40) & (v <= 0.635)
        # The dashboard and instruments should resolve before seats/console.
        weight *= np.where(dashboard, 2.8, np.where(v < 0.74, 0.75, 0.22))
        weight *= np.where(red & dashboard, 1.65, 1.0)
    if len(x) < COUNT:
        raise ValueError(f"{spec['name']}: only {len(x)} non-background candidate cells")
    # Exponential race = deterministic weighted sampling without replacement.
    rng = np.random.default_rng(seed)
    keys = -np.log(np.maximum(rng.random(len(x)), np.finfo(float).tiny)) / weight
    selected = np.argpartition(keys, COUNT - 1)[:COUNT]
    points = np.column_stack((u[selected], v[selected], color[selected])).astype(np.float64)
    # Nearby cells travel together. Morton ordering is shared by both images;
    # the runtime adds the flowing motion between their differently shaped forms.
    nx = np.clip((points[:, 0] - left) / (right - left) * 1023, 0, 1023).astype(np.uint32)
    ny = np.clip((points[:, 1] - top) / (bottom - top) * 1023, 0, 1023).astype(np.uint32)
    morton = np.zeros(COUNT, dtype=np.uint32)
    for bit in range(10):
        morton |= ((nx >> bit) & 1) << (2 * bit)
        morton |= ((ny >> bit) & 1) << (2 * bit + 1)
    points = points[np.argsort(morton, kind="stable")]
    metadata = {
        "path": spec["path"], "width": width, "height": height,
        "crop": list(spec["crop"]),
        "sha256": hashlib.sha256((ROOT / spec["path"]).read_bytes()).hexdigest(),
    }
    return points, metadata


def pack(points: np.ndarray) -> np.ndarray:
    uv = np.rint(points[:, :2] * 65535).astype("<u2")
    result = np.empty((COUNT, 7), dtype=np.uint8)
    result[:, :4] = uv.view(np.uint8).reshape(COUNT, 4)
    result[:, 4:] = points[:, 2:].astype(np.uint8)
    return result


def summarize(points: np.ndarray) -> dict:
    result = {}
    for count in (3500, 5500, COUNT):
        subset = points[:count]
        luma = subset[:, 2:] @ [0.2126, 0.7152, 0.0722]
        result[str(count)] = {
            "uniqueUV": len(np.unique(np.rint(subset[:, :2] * 65535), axis=0)),
            "brightPct": round(float(np.mean(luma > 80) * 100), 2),
            "darkBodyPct": round(float(np.mean((luma > 2) & (luma < 25)) * 100), 2),
            "dashboardBandPct": round(float(np.mean((subset[:, 1] >= 0.40) & (subset[:, 1] <= 0.635)) * 100), 2),
            "uvMin": np.round(subset[:, :2].min(axis=0), 4).tolist(),
            "uvMax": np.round(subset[:, :2].max(axis=0), 4).tolist(),
        }
    return result


def build() -> tuple[bytes, dict]:
    a, source = sample(SOURCES[0], SEED)
    b, destination = sample(SOURCES[1], SEED + 1)
    # Shuffle paired records, not endpoints: every adaptive-quality prefix has
    # the full composition, without forcing the GPU to keep a sorted suffix.
    order = np.random.default_rng(SEED + 2).permutation(COUNT)
    a, b = a[order], b[order]
    binary = np.column_stack((pack(a), pack(b))).tobytes()
    assert len(binary) == COUNT * 14
    payload = {
        "version": 1, "count": COUNT, "stride": 14,
        "source": source, "destination": destination,
        "packed": base64.b64encode(binary).decode("ascii"),
    }
    output = ("// Generated by js/bmw/build-points.py. Do not edit.\nwindow.BMWBridgePoints="
              + json.dumps(payload, separators=(",", ":")) + ";\n").encode("utf-8")
    return output, {"bytes": len(output), "records": COUNT, "binaryBytes": len(binary),
                    "sha256": hashlib.sha256(output).hexdigest(),
                    "source": summarize(a), "destination": summarize(b)}


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="Rebuild in memory and verify the committed cache")
    args = parser.parse_args()
    content, stats = build()
    if args.check:
        if not OUTPUT.exists() or OUTPUT.read_bytes() != content:
            raise SystemExit("Particle cache differs: run build-points.py to regenerate")
        stats["deterministicCheck"] = "passed"
    else:
        OUTPUT.parent.mkdir(parents=True, exist_ok=True)
        OUTPUT.write_bytes(content)
    print(json.dumps(stats, indent=2))
