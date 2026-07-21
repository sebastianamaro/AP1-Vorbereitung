"""OCR rendered AP2-Sommer-2026 pages (German) -> combined text baseline for transcription."""
import os, sys, subprocess

HERE = os.path.dirname(os.path.abspath(__file__))
PAGES = os.path.join(HERE, "pages")
OUT = os.path.join(HERE, "ocr")
TESSDATA = os.path.join(os.path.dirname(os.path.dirname(HERE)), "EuropaBuch-AP2", "tessdata")
TESSERACT = r"C:\Program Files\Tesseract-OCR\tesseract.exe"
LANG, PSM = "deu", "6"  # psm 6 = assume a single uniform block (good for question lists)


def ocr(path):
    proc = subprocess.run(
        [TESSERACT, path, "stdout", "-l", LANG, "--tessdata-dir", TESSDATA, "--psm", PSM],
        capture_output=True)
    return proc.stdout.decode("utf-8", errors="replace")


def main():
    prefix = sys.argv[1] if len(sys.argv) > 1 else "wiso"
    os.makedirs(OUT, exist_ok=True)
    pages = sorted(f for f in os.listdir(PAGES) if f.startswith(prefix) and f.endswith(".png"))
    combined = []
    for pg in pages:
        text = ocr(os.path.join(PAGES, pg)).strip()
        combined.append(f"\n\n===== {pg} =====\n\n{text}")
        print("ocr", pg, len(text), "chars")
    with open(os.path.join(OUT, f"{prefix}-ocr.md"), "w", encoding="utf-8") as f:
        f.write("".join(combined))
    print("wrote", os.path.join(OUT, f"{prefix}-ocr.md"))


if __name__ == "__main__":
    main()
