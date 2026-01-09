# HTML and XML

## Learning Objectives

After this chapter, you should be able to:
- Understand the basic structure of HTML
- Know important HTML tags
- Understand XML and its difference from HTML
- Distinguish markup languages from programming languages

---

## Core Content

### What are Markup Languages?

**Markup languages** are used to structure and describe documents - they are NOT programming languages.

```
┌─────────────────────────────────────────────────────────────────┐
│                    MARKUP LANGUAGES                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Markup language:                                              │
│   • Describes structure and content                            │
│   • Uses tags for marking                                      │
│   • No logic, no calculations                                  │
│   • Declarative (describes WHAT, not HOW)                      │
│                                                                 │
│   Programming language:                                         │
│   • Contains logic and control structures                      │
│   • Can perform calculations                                   │
│   • Executes actions                                           │
│                                                                 │
│   Examples:                                                     │
│   ┌─────────────────────┐    ┌─────────────────────┐          │
│   │   MARKUP            │    │   PROGRAMMING       │          │
│   │   • HTML            │    │   • Java            │          │
│   │   • XML             │    │   • Python          │          │
│   │   • Markdown        │    │   • JavaScript      │          │
│   └─────────────────────┘    └─────────────────────┘          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### HTML (HyperText Markup Language)

**HTML** is the standard markup language for web pages.

```
┌────────────────────────────────────────────────────────────────┐
│                    HTML BASIC STRUCTURE                        │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   <!DOCTYPE html>           ← Document type declaration        │
│   <html>                    ← Root element                     │
│     <head>                  ← Metadata (not visible)           │
│       <title>Title</title>  ← Title in browser tab             │
│     </head>                                                    │
│     <body>                  ← Visible content                  │
│       <h1>Heading</h1>                                         │
│       <p>A paragraph</p>                                       │
│     </body>                                                    │
│   </html>                                                      │
│                                                                │
│   Tags:                                                        │
│   <tag>Content</tag>    ← Opening and closing tag              │
│   <tag />              ← Self-closing tag (e.g., <br />)       │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Important HTML Tags

```
┌────────────────────────────────────────────────────────────────┐
│                   IMPORTANT HTML TAGS                          │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   STRUCTURE:                                                   │
│   <html>        Root element                                   │
│   <head>        Metadata                                       │
│   <body>        Visible area                                   │
│   <div>         Container/section                              │
│   <span>        Inline container                               │
│                                                                │
│   TEXT:                                                        │
│   <h1> - <h6>   Headings (h1 largest, h6 smallest)            │
│   <p>           Paragraph                                      │
│   <br />        Line break                                     │
│   <strong>      Bold/Important                                 │
│   <em>          Italic/Emphasized                              │
│                                                                │
│   LISTS:                                                       │
│   <ul>          Unordered list (bullets)                       │
│   <ol>          Ordered list (numbered)                        │
│   <li>          List item                                      │
│                                                                │
│   LINKS AND IMAGES:                                            │
│   <a href="">   Link (hyperlink)                               │
│   <img src="">  Image (self-closing)                           │
│                                                                │
│   TABLES:                                                      │
│   <table>       Table                                          │
│   <tr>          Table row                                      │
│   <td>          Table data cell                                │
│   <th>          Table header cell                              │
│                                                                │
│   FORMS:                                                       │
│   <form>        Form                                           │
│   <input>       Input field                                    │
│   <button>      Button                                         │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### HTML Attributes

```
┌────────────────────────────────────────────────────────────────┐
│                    HTML ATTRIBUTES                             │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Attributes = Additional information in the opening tag      │
│                                                                │
│   <tag attribute="value">Content</tag>                        │
│                                                                │
│   Important attributes:                                        │
│   ┌─────────────────────────────────────────────────────────┐│
│   │ id         │ Unique identification                      ││
│   │ class      │ Class name for CSS styling                 ││
│   │ href       │ URL for links (<a>)                        ││
│   │ src        │ Source for images (<img>)                  ││
│   │ alt        │ Alternative text for images                ││
│   │ style      │ Inline CSS                                 ││
│   │ title      │ Tooltip text                               ││
│   └─────────────────────────────────────────────────────────┘│
│                                                                │
│   Examples:                                                    │
│   <a href="https://example.com">Link text</a>                 │
│   <img src="image.jpg" alt="Description" />                   │
│   <p id="intro" class="highlight">Text</p>                    │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### XML (eXtensible Markup Language)

**XML** is an extensible markup language for structured data exchange.

```
┌────────────────────────────────────────────────────────────────┐
│                         XML                                    │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Characteristics:                                             │
│   • Custom tags can be defined (extensible)                   │
│   • Strictly structured                                        │
│   • Separation of data and presentation                       │
│   • Machine-readable                                           │
│                                                                │
│   Example:                                                     │
│   <?xml version="1.0" encoding="UTF-8"?>                      │
│   <productcatalog>                                            │
│     <product id="P001">                                       │
│       <name>Laptop</name>                                     │
│       <price currency="EUR">999.00</price>                    │
│       <stock>15</stock>                                       │
│     </product>                                                │
│     <product id="P002">                                       │
│       <name>Mouse</name>                                      │
│       <price currency="EUR">29.99</price>                     │
│       <stock>50</stock>                                       │
│     </product>                                                │
│   </productcatalog>                                           │
│                                                                │
│   Usage:                                                       │
│   • Configuration files                                       │
│   • Data exchange between systems                             │
│   • Web Services (SOAP)                                       │
│   • Office documents (DOCX, XLSX are ZIP with XML)           │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### HTML vs. XML

| Aspect | HTML | XML |
|--------|------|-----|
| **Purpose** | Display web pages | Structure data |
| **Tags** | Predefined (h1, p, div) | Self-definable |
| **Syntax** | Tolerant | Strict (well-formed) |
| **Case sensitivity** | Not important | Important |
| **Closing tags** | Partially optional | Always required |
| **Display** | Visible in browser | No display |

---

### XML Rules (Well-formedness)

```
┌────────────────────────────────────────────────────────────────┐
│                  XML RULES                                     │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   1. Exactly ONE root element                                  │
│      ✓ <root><child/></root>                                  │
│      ✗ <a/><b/> (two root elements)                           │
│                                                                │
│   2. All tags must be closed                                   │
│      ✓ <name>Value</name>                                     │
│      ✓ <empty />                                              │
│      ✗ <name>Value                                            │
│                                                                │
│   3. Tags must be correctly nested                            │
│      ✓ <a><b></b></a>                                         │
│      ✗ <a><b></a></b>                                         │
│                                                                │
│   4. Attribute values in quotes                               │
│      ✓ <tag attr="value">                                     │
│      ✗ <tag attr=value>                                       │
│                                                                │
│   5. Case sensitivity                                          │
│      <Name> ≠ <name> ≠ <NAME>                                 │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### HTML5 Example: Complete Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Example Page</title>
</head>
<body>
    <header>
        <h1>Welcome</h1>
    </header>

    <nav>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>

    <main>
        <article>
            <h2>Article Heading</h2>
            <p>Here is the text.</p>
            <img src="image.jpg" alt="Description" />
        </article>
    </main>

    <footer>
        <p>&copy; 2025 Example Inc.</p>
    </footer>
</body>
</html>
```

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **HTML** | HyperText Markup Language |
| **XML** | eXtensible Markup Language |
| **Tag** | Markup element (<tag>) |
| **Attribute** | Additional info in tag (name="value") |
| **Element** | Tag with content |
| **Well-formed** | XML conforms to all rules |

---

## Exam Tips

### Common Exam Questions

- What is the difference between HTML and XML?
- Is HTML a programming language?
- Name important HTML tags

### Important to Remember

- **HTML/XML are NOT programming languages!**
- **HTML** = Predefined tags for web pages
- **XML** = Custom tags for data exchange
- Tags: `<open>Content</close>`
- XML is stricter than HTML

---

## Practice Exercises

### Exercise 1
Is HTML a programming language? Explain.

**Solution:**
**No**, HTML is NOT a programming language, but a markup language.

Reasons:
- HTML cannot perform calculations
- HTML contains no control structures (if, loops)
- HTML only describes the structure and appearance of documents
- HTML does not execute actions

A programming language like Python or Java can execute logic, while HTML only describes HOW content should be displayed.

### Exercise 2
What is the difference between HTML and XML?

**Solution:**
| HTML | XML |
|------|-----|
| For displaying web pages | For data exchange |
| Predefined tags (h1, p, div) | Custom tags can be defined |
| Browser displays content | No display, only data |
| More error-tolerant | Strict rules (well-formed) |
| Case insensitive | Case sensitive |

### Exercise 3
Correct the following erroneous XML:

```xml
<products>
<Product id=1>
  <Name>Laptop
  <price>999</Price>
</PRODUCT>
```

**Solution:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<products>
  <Product id="1">
    <Name>Laptop</Name>
    <price>999</price>
  </Product>
</products>
```

Errors were:
1. Attribute value not in quotes (id=1 → id="1")
2. `<Name>` not closed
3. `<price>` and `</Price>` different case
4. `</PRODUCT>` instead of `</Product>`

---

## Cross-References

- [06-01-02 Programming Paradigms](../06-01-fundamentals/06-01-02-programming-paradigms.md) - Declarative languages
- [02-05 Accessibility](../../02-quality-management/02-05-accessibility.md) - Accessible HTML
- [07-01-03 Protocols](../../07-networks/07-01-network-fundamentals/07-01-03-protocols.md) - HTTP
