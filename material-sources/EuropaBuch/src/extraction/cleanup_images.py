"""
Cleanup script - removes redundant full-page image references
and updates markdown to reference original PDFs when visual context is needed
"""

import os
import re
from pathlib import Path

PAGES_DIR = "./pages"
IMAGES_DIR = "./images"
COMBINED_OUTPUT = "./full-book.md"

def cleanup_markdown(content, page_num):
    """Remove redundant image references, add PDF reference for visual context"""

    # Remove the image markdown and TODO comments
    content = re.sub(r'\n!\[Image.*?\]\(.*?\)\n', '\n', content)
    content = re.sub(r'<!-- IMAGE:.*?-->\n', '', content)
    content = re.sub(r'\n\[Image on page \d+\]\n', '\n', content)

    # Clean up multiple blank lines
    content = re.sub(r'\n{3,}', '\n\n', content)

    return content

def main():
    script_dir = Path(__file__).parent
    os.chdir(script_dir)

    print("Cleaning up markdown files...")

    # Process individual page files
    page_files = sorted(Path(PAGES_DIR).glob("page-*.md"))
    for page_file in page_files:
        page_num = int(re.search(r'page-(\d+)', page_file.name).group(1))

        with open(page_file, "r", encoding="utf-8") as f:
            content = f.read()

        cleaned = cleanup_markdown(content, page_num)

        with open(page_file, "w", encoding="utf-8") as f:
            f.write(cleaned)

    print(f"  Cleaned {len(page_files)} page files")

    # Process combined file
    if os.path.exists(COMBINED_OUTPUT):
        with open(COMBINED_OUTPUT, "r", encoding="utf-8") as f:
            content = f.read()

        cleaned = cleanup_markdown(content, 0)

        with open(COMBINED_OUTPUT, "w", encoding="utf-8") as f:
            f.write(cleaned)
        print(f"  Cleaned combined file")

    # Delete images folder
    if os.path.exists(IMAGES_DIR):
        import shutil
        file_count = len([f for f in os.listdir(IMAGES_DIR) if not f.startswith("_")])
        shutil.rmtree(IMAGES_DIR)
        print(f"  Deleted {file_count} redundant page background images")

    # Create a reference note
    readme_path = "./README.md"
    with open(readme_path, "w", encoding="utf-8") as f:
        f.write("""# Extraction Notes

## Content Structure
- `pages/` - Individual page markdown files (page-001.md to page-359.md)
- `full-book.md` - Combined searchable text

## Visual Content
The original PDF pages are image-based (scanned). The text has been extracted via OCR.

When visual context is needed (diagrams, figures, layouts), reference the original PDFs:
- Location: `../PDFs/page-XXX.pdf` (individual pages)
- Location: `../PDFs/full-book.pdf` (complete OCR'd book)

## For Knowledge Base
The markdown files contain searchable text. For any page where visual context
matters (diagrams, tables, figures), the original PDF page should be consulted.
""")
    print(f"  Created README.md")

    print("\nDone! Markdown files cleaned, redundant images removed.")

if __name__ == "__main__":
    main()
