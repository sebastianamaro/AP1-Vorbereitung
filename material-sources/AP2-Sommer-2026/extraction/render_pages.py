"""Render AP2-Sommer-2026 task PDF pages to PNG at high DPI for OCR + visual transcription."""
import fitz, os, sys

BASE = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(BASE, "extraction", "pages")
os.makedirs(OUT, exist_ok=True)

DPI = 300  # render scale


def render(pdf_name, prefix):
    p = os.path.join(BASE, pdf_name)
    d = fitz.open(p)
    zoom = DPI / 72.0
    mat = fitz.Matrix(zoom, zoom)
    for i, page in enumerate(d):
        pix = page.get_pixmap(matrix=mat)
        out = os.path.join(OUT, f"{prefix}-p{i+1:02d}.png")
        pix.save(out)
        print("wrote", os.path.relpath(out, BASE), f"{pix.width}x{pix.height}")


if __name__ == "__main__":
    targets = sys.argv[1:] or ["WISO", "GA1", "GA2"]
    m = {
        "WISO": ("WISO_Sommer_2026.pdf", "wiso"),
        "GA1": ("GA1_AE_Sommer_2026.pdf", "ga1"),
        "GA2": ("GA2_AE_Sommer_2026.pdf", "ga2"),
    }
    for t in targets:
        render(*m[t])
