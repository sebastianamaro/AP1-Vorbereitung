"""
PDF to Markdown Extractor
Extracts text from OCR'd PDF and converts to structured Markdown
"""

import fitz  # pymupdf
import re
import os
from pathlib import Path

# Configuration
PDF_PATH = "../PDFs/full-book.pdf"
OUTPUT_DIR = "./pages"
COMBINED_OUTPUT = "./full-book.md"

def clean_text(text):
    """Clean up OCR artifacts and normalize text"""
    # Fix common OCR issues
    text = re.sub(r'\s+', ' ', text)  # Normalize whitespace
    text = re.sub(r'(\w)-\s+(\w)', r'\1\2', text)  # Fix hyphenation
    text = text.strip()
    return text

def detect_heading(text, font_size, is_bold):
    """Heuristic to detect if text is a heading"""
    text = text.strip()
    if not text:
        return None

    # Large font or bold short text likely a heading
    if font_size > 14 and len(text) < 100:
        return "h1"
    elif font_size > 12 and len(text) < 80:
        return "h2"
    elif is_bold and len(text) < 60:
        return "h3"

    return None

def extract_page(page, page_num):
    """Extract text from a single page with structure awareness"""
    blocks = page.get_text("dict", sort=True)["blocks"]

    page_content = []
    page_content.append(f"\n---\n## Page {page_num}\n---\n")

    for block in blocks:
        if block["type"] == 0:  # Text block
            block_text = []
            for line in block.get("lines", []):
                line_text = ""
                max_font_size = 0
                is_bold = False

                for span in line.get("spans", []):
                    text = span.get("text", "")
                    font_size = span.get("size", 12)
                    font_name = span.get("font", "").lower()

                    max_font_size = max(max_font_size, font_size)
                    if "bold" in font_name or "black" in font_name:
                        is_bold = True

                    line_text += text

                line_text = clean_text(line_text)
                if line_text:
                    heading_level = detect_heading(line_text, max_font_size, is_bold)
                    if heading_level == "h1":
                        block_text.append(f"\n# {line_text}\n")
                    elif heading_level == "h2":
                        block_text.append(f"\n## {line_text}\n")
                    elif heading_level == "h3":
                        block_text.append(f"\n### {line_text}\n")
                    else:
                        block_text.append(line_text)

            if block_text:
                # Join lines in the same block as paragraph
                paragraph = " ".join([t for t in block_text if not t.startswith("#") and not t.startswith("\n#")])
                headings = [t for t in block_text if t.startswith("#") or t.startswith("\n#")]

                for h in headings:
                    page_content.append(h)
                if paragraph.strip():
                    page_content.append(paragraph + "\n")

        elif block["type"] == 1:  # Image block
            page_content.append(f"\n[Image on page {page_num}]\n")

    return "\n".join(page_content)

def extract_pdf(pdf_path, output_dir, combined_output):
    """Main extraction function"""
    print(f"Opening PDF: {pdf_path}")
    doc = fitz.open(pdf_path)
    total_pages = len(doc)
    print(f"Total pages: {total_pages}")

    # Create output directory
    os.makedirs(output_dir, exist_ok=True)

    all_content = []
    all_content.append("# Full Book Extraction\n\n")
    all_content.append(f"Total pages: {total_pages}\n\n")

    for page_num in range(total_pages):
        if (page_num + 1) % 50 == 0:
            print(f"Processing page {page_num + 1}/{total_pages}...")

        page = doc[page_num]
        content = extract_page(page, page_num + 1)

        # Save individual page
        page_file = os.path.join(output_dir, f"page-{page_num + 1:03d}.md")
        with open(page_file, "w", encoding="utf-8") as f:
            f.write(content)

        all_content.append(content)

    # Save combined file
    print(f"Writing combined output to {combined_output}...")
    with open(combined_output, "w", encoding="utf-8") as f:
        f.write("\n".join(all_content))

    doc.close()
    print("Done!")
    print(f"  - Individual pages: {output_dir}/")
    print(f"  - Combined file: {combined_output}")

if __name__ == "__main__":
    script_dir = Path(__file__).parent
    os.chdir(script_dir)

    extract_pdf(PDF_PATH, OUTPUT_DIR, COMBINED_OUTPUT)
