"""
OCR split book pages (German) with Tesseract -> per-page Markdown + combined.

Prerequisites:
  * Tesseract installed (UB-Mannheim build):
        winget install -e --id UB-Mannheim.TesseractOCR
  * German best-quality model at <EuropaBuch-AP2>/tessdata/deu.traineddata:
        curl -L -o tessdata/deu.traineddata \
          https://github.com/tesseract-ocr/tessdata_best/raw/main/deu.traineddata

Output mirrors the AP1 extraction layout:
    extraction/pages/page-NNNN.md   (one file per page)
    extraction/full-book.md         (all pages, with <!-- page-NNNN --> markers)

Note: figures/diagrams OCR as noise (e.g. pie charts) — that is expected and
cleaned up when the raw text is curated into learning-material.

Usage:
    python ocr_pages.py <pages_dir> <output_dir>
    python ocr_pages.py            # uses the defaults below
"""

import os
import sys
import subprocess

HERE = os.path.dirname(os.path.abspath(__file__))
BOOK_ROOT = os.path.dirname(os.path.dirname(HERE))          # .../EuropaBuch-AP2
TESSDATA = os.path.join(BOOK_ROOT, "tessdata")
TESSERACT = r"C:\Program Files\Tesseract-OCR\tesseract.exe"
LANG = "deu"
PSM = "3"  # fully automatic page segmentation

DEFAULT_SRC = r"C:\Users\SebastianAmaro\Downloads\europathek-pages"
DEFAULT_OUT = os.path.join(BOOK_ROOT, "extraction")


def ocr_image(path):
    proc = subprocess.run(
        [TESSERACT, path, "stdout", "-l", LANG, "--tessdata-dir", TESSDATA, "--psm", PSM],
        capture_output=True,
    )
    if proc.returncode != 0:
        sys.stderr.write(proc.stderr.decode("utf-8", errors="replace"))
    return proc.stdout.decode("utf-8", errors="replace")


def tidy(text):
    """Strip trailing spaces and collapse runs of blank lines."""
    out, blank = [], 0
    for ln in text.splitlines():
        ln = ln.rstrip()
        if not ln:
            blank += 1
            if blank <= 1:
                out.append("")
        else:
            blank = 0
            out.append(ln)
    return "\n".join(out).strip() + "\n"


def main():
    src = sys.argv[1] if len(sys.argv) > 1 else DEFAULT_SRC
    out = sys.argv[2] if len(sys.argv) > 2 else DEFAULT_OUT
    pages_out = os.path.join(out, "pages")
    os.makedirs(pages_out, exist_ok=True)

    if not os.path.isfile(TESSERACT):
        print("Tesseract not found at", TESSERACT); return
    if not os.path.isfile(os.path.join(TESSDATA, "deu.traineddata")):
        print("German model not found in", TESSDATA); return

    pages = sorted(f for f in os.listdir(src)
                   if f.lower().startswith("page-") and f.lower().endswith(".jpg"))
    if not pages:
        print("No page-*.jpg in", src); return

    combined = []
    for i, pg in enumerate(pages, 1):
        text = tidy(ocr_image(os.path.join(src, pg)))
        stem = pg.rsplit(".", 1)[0]
        with open(os.path.join(pages_out, stem + ".md"), "w", encoding="utf-8") as f:
            f.write(text)
        combined.append(f"\n\n<!-- {stem} -->\n\n{text}")
        if i % 20 == 0 or i == len(pages):
            print(f"  {i}/{len(pages)} pages OCR'd")

    with open(os.path.join(out, "full-book.md"), "w", encoding="utf-8") as f:
        f.write("".join(combined))
    print(f"Done: {len(pages)} pages -> {pages_out} and full-book.md")


if __name__ == "__main__":
    main()
