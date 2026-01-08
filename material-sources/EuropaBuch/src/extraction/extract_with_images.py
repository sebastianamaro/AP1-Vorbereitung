"""
PDF to Markdown Extractor with Image Extraction
Extracts text and images from OCR'd PDF
"""

import fitz  # pymupdf
import re
import os
from pathlib import Path

# Configuration
PDF_PATH = "../PDFs/full-book.pdf"
OUTPUT_DIR = "./pages"
IMAGES_DIR = "./images"
COMBINED_OUTPUT = "./full-book.md"

def clean_text(text):
    """Clean up OCR artifacts and normalize text"""
    text = re.sub(r'\s+', ' ', text)
    text = re.sub(r'(\w)-\s+(\w)', r'\1\2', text)
    text = text.strip()
    return text

def detect_heading(text, font_size, is_bold):
    """Heuristic to detect if text is a heading"""
    text = text.strip()
    if not text:
        return None

    if font_size > 14 and len(text) < 100:
        return "h1"
    elif font_size > 12 and len(text) < 80:
        return "h2"
    elif is_bold and len(text) < 60:
        return "h3"

    return None

def extract_images_from_page(page, page_num, images_dir):
    """Extract all images from a page and return markdown references"""
    image_refs = []
    image_list = page.get_images(full=True)

    for img_index, img_info in enumerate(image_list):
        xref = img_info[0]

        try:
            base_image = page.parent.extract_image(xref)
            image_bytes = base_image["image"]
            image_ext = base_image["ext"]

            # Save image
            image_filename = f"page-{page_num:03d}-img-{img_index + 1}.{image_ext}"
            image_path = os.path.join(images_dir, image_filename)

            with open(image_path, "wb") as img_file:
                img_file.write(image_bytes)

            # Create markdown reference
            rel_path = f"../images/{image_filename}"
            image_refs.append({
                "filename": image_filename,
                "markdown": f"![Image {img_index + 1} from page {page_num}]({rel_path})",
                "path": image_path
            })

        except Exception as e:
            print(f"  Warning: Could not extract image {img_index + 1} on page {page_num}: {e}")

    return image_refs

def extract_page(page, page_num, images_dir):
    """Extract text and images from a single page"""
    blocks = page.get_text("dict", sort=True)["blocks"]

    # Extract images first
    image_refs = extract_images_from_page(page, page_num, images_dir)

    page_content = []
    page_content.append(f"\n---\n## Page {page_num}\n---\n")

    image_block_count = 0

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
                paragraph = " ".join([t for t in block_text if not t.startswith("#") and not t.startswith("\n#")])
                headings = [t for t in block_text if t.startswith("#") or t.startswith("\n#")]

                for h in headings:
                    page_content.append(h)
                if paragraph.strip():
                    page_content.append(paragraph + "\n")

        elif block["type"] == 1:  # Image block
            if image_block_count < len(image_refs):
                img_ref = image_refs[image_block_count]
                page_content.append(f"\n{img_ref['markdown']}\n")
                page_content.append(f"<!-- IMAGE: {img_ref['filename']} - TODO: Add description -->\n")
                image_block_count += 1
            else:
                page_content.append(f"\n[Image on page {page_num}]\n")

    # Add any remaining images that weren't matched to blocks
    for i in range(image_block_count, len(image_refs)):
        img_ref = image_refs[i]
        page_content.append(f"\n{img_ref['markdown']}\n")
        page_content.append(f"<!-- IMAGE: {img_ref['filename']} - TODO: Add description -->\n")

    return "\n".join(page_content), len(image_refs)

def extract_pdf(pdf_path, output_dir, images_dir, combined_output):
    """Main extraction function"""
    print(f"Opening PDF: {pdf_path}")
    doc = fitz.open(pdf_path)
    total_pages = len(doc)
    print(f"Total pages: {total_pages}")

    # Create output directories
    os.makedirs(output_dir, exist_ok=True)
    os.makedirs(images_dir, exist_ok=True)

    all_content = []
    all_content.append("# Full Book Extraction\n\n")
    all_content.append(f"Total pages: {total_pages}\n\n")

    total_images = 0

    for page_num in range(total_pages):
        if (page_num + 1) % 50 == 0:
            print(f"Processing page {page_num + 1}/{total_pages}... ({total_images} images extracted so far)")

        page = doc[page_num]
        content, num_images = extract_page(page, page_num + 1, images_dir)
        total_images += num_images

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
    print("\nDone!")
    print(f"  - Individual pages: {output_dir}/")
    print(f"  - Images extracted: {total_images} -> {images_dir}/")
    print(f"  - Combined file: {combined_output}")

    # Create image index for later description
    image_index_path = os.path.join(images_dir, "_image_index.md")
    image_files = sorted([f for f in os.listdir(images_dir) if not f.startswith("_")])
    with open(image_index_path, "w", encoding="utf-8") as f:
        f.write("# Image Index\n\n")
        f.write("Images to be described:\n\n")
        for img_file in image_files:
            f.write(f"- [ ] {img_file}\n")
    print(f"  - Image index: {image_index_path}")

if __name__ == "__main__":
    script_dir = Path(__file__).parent
    os.chdir(script_dir)

    extract_pdf(PDF_PATH, OUTPUT_DIR, IMAGES_DIR, COMBINED_OUTPUT)
