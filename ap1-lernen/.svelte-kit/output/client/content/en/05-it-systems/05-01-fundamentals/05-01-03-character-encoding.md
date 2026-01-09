# Character Encoding

## Learning Objectives

After this chapter, you should be able to:
- Explain the term character encoding
- Know ASCII and its limitations
- Understand Unicode and UTF-8
- Know typical use cases

---

## Core Content

### What is Character Encoding?

**Character encoding** is the mapping of characters (letters, digits, special characters) to numeric values that can be processed by the computer.

```
┌─────────────────────────────────────────────────────────────────┐
│                    CHARACTER ENCODING                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Character  ───────►  Encoding  ───────►  Binary Value         │
│                                                                 │
│     "A"      ───────►    ASCII   ───────►  01000001 (65₁₀)      │
│     "ä"      ───────►   UTF-8    ───────►  11000011 10100100    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### ASCII (American Standard Code for Information Interchange)

**ASCII** is the oldest and simplest character encoding.

#### Properties

| Property | Value |
|----------|-------|
| **Developed** | 1963 |
| **Size** | 7 Bit |
| **Number of characters** | 128 characters (0-127) |
| **Scope** | English letters, digits, special characters |

#### ASCII Table (Excerpt)

| Decimal | Hex | Character | Description |
|---------|-----|-----------|-------------|
| 0-31 | 00-1F | - | Control characters |
| 32 | 20 | (Space) | Space |
| 48-57 | 30-39 | 0-9 | Digits |
| 65-90 | 41-5A | A-Z | Uppercase letters |
| 97-122 | 61-7A | a-z | Lowercase letters |

```
┌────────────────────────────────────────────────────────────────┐
│                ASCII TABLE (important ranges)                  │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Control characters:   0-31   (e.g., 10 = line break)          │
│  Space:                32                                      │
│  Special characters:   33-47, 58-64, 91-96, 123-126           │
│  Digits 0-9:           48-57                                   │
│  Uppercase letters:    65-90  (A=65, B=66, ..., Z=90)         │
│  Lowercase letters:    97-122 (a=97, b=98, ..., z=122)        │
│                                                                │
│  Remember: Lowercase = Uppercase + 32                          │
│           (A=65, a=97 → Difference = 32)                       │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### Limitations of ASCII

- Only **128 characters** (7 Bit)
- **No umlauts** (ä, ö, ü, ß)
- **No special characters** from other languages
- No emojis, symbols, etc.

---

### Extended Character Sets

To represent more characters, various extensions were developed:

| Encoding | Size | Characters | Region |
|----------|------|------------|--------|
| **ISO 8859-1** (Latin-1) | 8 Bit | 256 | Western Europe |
| **ISO 8859-15** (Latin-9) | 8 Bit | 256 | Western Europe + € |
| **Windows-1252** | 8 Bit | 256 | Windows |

**Problem:** Incompatibilities between different encodings lead to display errors ("garbled text").

---

### Unicode

**Unicode** is a universal character set that encompasses **all characters of all writing systems** in the world.

```
┌─────────────────────────────────────────────────────────────────┐
│                        UNICODE                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Goal: One standard for ALL characters worldwide                │
│                                                                 │
│  Includes:                                                      │
│  • Latin letters (incl. umlauts)                               │
│  • Greek, Cyrillic, Arabic, Hebrew                             │
│  • Chinese, Japanese, Korean                                   │
│  • Mathematical symbols                                         │
│  • Emojis 😀                                                   │
│  • Historical scripts                                           │
│                                                                 │
│  Currently: approx. 150,000 characters defined                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Unicode Concept

- Each character has a unique **Code Point**
- Notation: **U+XXXX** (hexadecimal)
- Examples:
  - U+0041 = A
  - U+00E4 = ä
  - U+20AC = €
  - U+1F600 = 😀

---

### UTF-8 (Unicode Transformation Format)

**UTF-8** is the most widely used encoding for Unicode.

#### Properties

| Property | Value |
|----------|-------|
| **Variable** | 1-4 bytes per character |
| **ASCII-compatible** | ASCII characters = 1 byte |
| **Usage** | Standard on the Internet (>95%) |

#### Encoding Rules

| Bytes | Bit Range | Pattern |
|-------|-----------|---------|
| 1 | U+0000 - U+007F | 0xxxxxxx |
| 2 | U+0080 - U+07FF | 110xxxxx 10xxxxxx |
| 3 | U+0800 - U+FFFF | 1110xxxx 10xxxxxx 10xxxxxx |
| 4 | U+10000 - U+10FFFF | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx |

```
┌────────────────────────────────────────────────────────────────┐
│                  UTF-8 EXAMPLES                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Character  Code Point    UTF-8 (Binary)                       │
│  ──────────────────────────────────────────────────────────    │
│     A        U+0041       01000001                  (1 Byte)   │
│     ä        U+00E4       11000011 10100100         (2 Bytes)  │
│     €        U+20AC       11100010 10000010 10101100 (3 Bytes) │
│     😀       U+1F600      11110000 10011111 10011000 10000000  │
│                                                     (4 Bytes)  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### UTF-16 and UTF-32

| Format | Size | Usage |
|--------|------|-------|
| **UTF-8** | 1-4 Bytes | Internet, files |
| **UTF-16** | 2-4 Bytes | Windows, Java internal |
| **UTF-32** | 4 Bytes | Simple processing |

---

### BOM (Byte Order Mark)

The **BOM** is an optional marker at the beginning of a file that indicates the encoding and byte order.

| Encoding | BOM (Hex) |
|----------|-----------|
| UTF-8 | EF BB BF |
| UTF-16 BE | FE FF |
| UTF-16 LE | FF FE |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **ASCII** | 7-bit character encoding (128 characters) |
| **Unicode** | Universal character set for all scripts |
| **UTF-8** | Variable-length Unicode encoding |
| **Code Point** | Unique number of a Unicode character |
| **BOM** | Byte Order Mark |
| **Latin-1** | Extension of ASCII for Western Europe |

---

## Exam Tips

### Common Exam Questions

- What is ASCII and how many characters does it include?
- What is the difference between ASCII and Unicode?
- What is UTF-8?
- Why is UTF-8 ASCII-compatible?

### Important to Remember

- **ASCII** = 128 characters, 7 bit, English only
- **Unicode** = Universal, all characters worldwide
- **UTF-8** = Variable length (1-4 bytes), standard on the web
- **A = 65, a = 97** (difference 32)

---

## Practice Exercises

### Exercise 1
What is ASCII and how many characters does it include?

**Solution:** **ASCII** (American Standard Code for Information Interchange) is a 7-bit character encoding standard. It includes **128 characters** (0-127), including English letters, digits, special characters, and control characters.

### Exercise 2
Why were Unicode and UTF-8 developed?

**Solution:** ASCII could only represent English characters. For other languages (umlauts, Asian scripts), various incompatible extensions were developed, leading to display problems. **Unicode** defines a universal character set for all languages, **UTF-8** is a space-efficient encoding for it that is also compatible with ASCII.

### Exercise 3
What ASCII value does the letter 'A' have and what does 'a' have?

**Solution:**
- **'A'** = 65 (decimal) = 41 (hex)
- **'a'** = 97 (decimal) = 61 (hex)
- The difference is always 32.

### Exercise 4
Why is UTF-8 the standard on the Internet?

**Solution:**
1. **ASCII Compatibility:** All ASCII characters are adopted 1:1
2. **Space-efficient:** Common characters (Latin) require only 1 byte
3. **Universal:** Can represent all Unicode characters
4. **Self-synchronizing:** Errors during reading do not affect the rest

---

## Cross-References

- [05-01-01 Bits and Bytes](./05-01-01-bits-bytes-number-systems.md) - Binary representation
- [06-05-01 HTML/XML](../../06-software/06-05-web-development/06-05-01-html-xml.md) - Character encoding in web pages
