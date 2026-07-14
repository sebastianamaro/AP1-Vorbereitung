"""
Split EUROPATHEK screenshot captures into single book pages.

The screenshot extension (Generator, "Screenshot mode") saves one JPG per
reader view into a folder, in reading order:
    capture-001.jpg, capture-002.jpg, ...
Most views are two-page spreads (e.g. "4 | 5"); the cover/back are single pages.

This script crops the reader chrome (hamburger, bottom toolbar, edit button),
detects spread-vs-single by testing whether the gutter strip is blank, splits
spreads down the middle, and writes single pages in reading order:
    pages/page-0001.jpg, page-0002.jpg, ...

Crop bounds are ratios of the image size, calibrated on the 3840x1907 reader
layout. If you capture at a very different window size and pages look clipped,
re-check L/R/T/B below.

Usage:
    python split_captures.py <captures_dir> <output_pages_dir>
    python split_captures.py                      # uses the defaults below
"""

import os
import sys
import numpy as np
from PIL import Image

DEFAULT_SRC = r"C:\Users\SebastianAmaro\Downloads\europathek-capture"
DEFAULT_OUT = r"C:\Users\SebastianAmaro\Downloads\europathek-pages"

# Crop ratios (fraction of width/height). Calibrated on the 3840x1907 reader.
L, R = 0.034, 0.966   # x: just inside hamburger (left) and edit-FAB (right)
T, B = 0.016, 0.938   # y: below the top edge, above the bottom toolbar
MID = 0.500           # gutter / split point
GUTTER_WHITE_MIN = 0.85  # >= this fraction white in the centre strip => spread


def split_capture(path):
    """Return a list of PIL page images (1 for single, 2 for a spread)."""
    img = Image.open(path).convert("RGB")
    W, H = img.size
    x0, x1 = int(W * L), int(W * R)
    y0, y1 = int(H * T), int(H * B)
    xm = int(W * MID)

    gutter = np.asarray(img.convert("L"))[y0:y1, xm - 20:xm + 20]
    is_spread = (gutter > 245).mean() >= GUTTER_WHITE_MIN

    if is_spread:
        return [img.crop((x0, y0, xm, y1)), img.crop((xm, y0, x1, y1))], "spread"
    return [img.crop((x0, y0, x1, y1))], "single"


def main():
    src = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_SRC
    out = sys.argv[2] if len(sys.argv) > 2 else DEFAULT_OUT
    os.makedirs(out, exist_ok=True)

    captures = sorted(f for f in os.listdir(src)
                      if f.lower().startswith("capture-") and f.lower().endswith(".jpg"))
    if not captures:
        print(f"No capture-*.jpg found in {src}")
        return

    page_no = 0
    for cap in captures:
        pages, kind = split_capture(os.path.join(src, cap))
        labels = []
        for p in pages:
            page_no += 1
            name = f"page-{page_no:04d}.jpg"
            p.save(os.path.join(out, name), quality=92)
            labels.append(name)
        print(f"{cap:20s} [{kind:6s}] -> {', '.join(labels)}")

    print(f"\nDone: {len(captures)} captures -> {page_no} pages in {out}")


if __name__ == "__main__":
    main()
