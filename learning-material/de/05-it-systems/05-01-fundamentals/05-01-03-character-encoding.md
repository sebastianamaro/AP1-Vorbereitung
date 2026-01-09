# Zeichenkodierung

## Lernziele

Nach diesem Kapitel solltest du:
- Den Begriff Zeichenkodierung erklären können
- ASCII und seine Grenzen kennen
- Unicode und UTF-8 verstehen
- Typische Anwendungsfälle kennen

---

## Kerninhalt

### Was ist Zeichenkodierung?

**Zeichenkodierung** ist die Zuordnung von Zeichen (Buchstaben, Ziffern, Sonderzeichen) zu Zahlenwerten, die vom Computer verarbeitet werden können.

```
┌─────────────────────────────────────────────────────────────────┐
│                    ZEICHENKODIERUNG                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Zeichen  ───────►  Kodierung  ───────►  Binärwert            │
│                                                                 │
│     "A"    ───────►    ASCII    ───────►  01000001 (65₁₀)      │
│     "ä"    ───────►   UTF-8     ───────►  11000011 10100100    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### ASCII (American Standard Code for Information Interchange)

**ASCII** ist die älteste und einfachste Zeichenkodierung.

#### Eigenschaften

| Eigenschaft | Wert |
|-------------|------|
| **Entwickelt** | 1963 |
| **Größe** | 7 Bit |
| **Zeichenanzahl** | 128 Zeichen (0-127) |
| **Umfang** | Englische Buchstaben, Ziffern, Sonderzeichen |

#### ASCII-Tabelle (Auszug)

| Dezimal | Hex | Zeichen | Beschreibung |
|---------|-----|---------|--------------|
| 0-31 | 00-1F | - | Steuerzeichen |
| 32 | 20 | (Space) | Leerzeichen |
| 48-57 | 30-39 | 0-9 | Ziffern |
| 65-90 | 41-5A | A-Z | Großbuchstaben |
| 97-122 | 61-7A | a-z | Kleinbuchstaben |

```
┌────────────────────────────────────────────────────────────────┐
│                ASCII-TABELLE (wichtige Bereiche)               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Steuerzeichen:     0-31   (z.B. 10 = Zeilenumbruch)          │
│  Leerzeichen:       32                                         │
│  Sonderzeichen:     33-47, 58-64, 91-96, 123-126              │
│  Ziffern 0-9:       48-57                                      │
│  Großbuchstaben:    65-90  (A=65, B=66, ..., Z=90)            │
│  Kleinbuchstaben:   97-122 (a=97, b=98, ..., z=122)           │
│                                                                │
│  Merke: Kleinbuchstabe = Großbuchstabe + 32                   │
│         (A=65, a=97 → Differenz = 32)                         │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### Grenzen von ASCII

- Nur **128 Zeichen** (7 Bit)
- **Keine Umlaute** (ä, ö, ü, ß)
- **Keine Sonderzeichen** anderer Sprachen
- Keine Emojis, Symbole etc.

---

### Erweiterte Zeichensätze

Um mehr Zeichen darzustellen, wurden verschiedene Erweiterungen entwickelt:

| Kodierung | Größe | Zeichen | Region |
|-----------|-------|---------|--------|
| **ISO 8859-1** (Latin-1) | 8 Bit | 256 | Westeuropa |
| **ISO 8859-15** (Latin-9) | 8 Bit | 256 | Westeuropa + € |
| **Windows-1252** | 8 Bit | 256 | Windows |

**Problem:** Inkompatibilitäten zwischen verschiedenen Kodierungen führen zu Darstellungsfehlern ("Zeichensalat").

---

### Unicode

**Unicode** ist ein universeller Zeichensatz, der **alle Zeichen aller Schriftsysteme** der Welt umfasst.

```
┌─────────────────────────────────────────────────────────────────┐
│                        UNICODE                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Ziel: Ein Standard für ALLE Zeichen weltweit                   │
│                                                                 │
│  Umfasst:                                                       │
│  • Lateinische Buchstaben (inkl. Umlaute)                       │
│  • Griechisch, Kyrillisch, Arabisch, Hebräisch                 │
│  • Chinesisch, Japanisch, Koreanisch                           │
│  • Mathematische Symbole                                        │
│  • Emojis 😀                                                   │
│  • Historische Schriften                                        │
│                                                                 │
│  Aktuell: ca. 150.000 Zeichen definiert                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Unicode-Konzept

- Jedes Zeichen hat einen eindeutigen **Code Point**
- Schreibweise: **U+XXXX** (hexadezimal)
- Beispiele:
  - U+0041 = A
  - U+00E4 = ä
  - U+20AC = €
  - U+1F600 = 😀

---

### UTF-8 (Unicode Transformation Format)

**UTF-8** ist die am weitesten verbreitete Kodierung für Unicode.

#### Eigenschaften

| Eigenschaft | Wert |
|-------------|------|
| **Variabel** | 1-4 Byte pro Zeichen |
| **ASCII-kompatibel** | ASCII-Zeichen = 1 Byte |
| **Verbreitung** | Standard im Internet (>95%) |

#### Kodierungsregeln

| Bytes | Bitbereich | Muster |
|-------|------------|--------|
| 1 | U+0000 - U+007F | 0xxxxxxx |
| 2 | U+0080 - U+07FF | 110xxxxx 10xxxxxx |
| 3 | U+0800 - U+FFFF | 1110xxxx 10xxxxxx 10xxxxxx |
| 4 | U+10000 - U+10FFFF | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx |

```
┌────────────────────────────────────────────────────────────────┐
│                  UTF-8 BEISPIELE                               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Zeichen  Code Point    UTF-8 (Binär)                         │
│  ──────────────────────────────────────────────────────────    │
│     A      U+0041       01000001                    (1 Byte)  │
│     ä      U+00E4       11000011 10100100           (2 Byte)  │
│     €      U+20AC       11100010 10000010 10101100  (3 Byte)  │
│     😀     U+1F600      11110000 10011111 10011000 10000000    │
│                                                     (4 Byte)  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### UTF-16 und UTF-32

| Format | Größe | Verwendung |
|--------|-------|------------|
| **UTF-8** | 1-4 Byte | Internet, Dateien |
| **UTF-16** | 2-4 Byte | Windows, Java intern |
| **UTF-32** | 4 Byte | Einfache Verarbeitung |

---

### BOM (Byte Order Mark)

Die **BOM** ist eine optionale Markierung am Dateianfang, die die Kodierung und Byte-Reihenfolge anzeigt.

| Kodierung | BOM (Hex) |
|-----------|-----------|
| UTF-8 | EF BB BF |
| UTF-16 BE | FE FF |
| UTF-16 LE | FF FE |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **ASCII** | 7-Bit Zeichenkodierung (128 Zeichen) |
| **Unicode** | Universeller Zeichensatz für alle Schriften |
| **UTF-8** | Variable-Length Unicode-Kodierung |
| **Code Point** | Eindeutige Nummer eines Unicode-Zeichens |
| **BOM** | Byte Order Mark |
| **Latin-1** | Erweiterung von ASCII für Westeuropa |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was ist ASCII und wie viele Zeichen umfasst es?
- Was ist der Unterschied zwischen ASCII und Unicode?
- Was ist UTF-8?
- Warum ist UTF-8 ASCII-kompatibel?

### Wichtig zu merken

- **ASCII** = 128 Zeichen, 7 Bit, nur englisch
- **Unicode** = Universell, alle Zeichen weltweit
- **UTF-8** = Variable Länge (1-4 Byte), Standard im Web
- **A = 65, a = 97** (Differenz 32)

---

## Übungsaufgaben

### Aufgabe 1
Was ist ASCII und wie viele Zeichen umfasst es?

**Lösung:** **ASCII** (American Standard Code for Information Interchange) ist ein 7-Bit-Zeichenkodierungsstandard. Er umfasst **128 Zeichen** (0-127), darunter englische Buchstaben, Ziffern, Sonderzeichen und Steuerzeichen.

### Aufgabe 2
Warum wurden Unicode und UTF-8 entwickelt?

**Lösung:** ASCII konnte nur englische Zeichen darstellen. Für andere Sprachen (Umlaute, asiatische Schriften) wurden verschiedene inkompatible Erweiterungen entwickelt, was zu Darstellungsproblemen führte. **Unicode** definiert einen universellen Zeichensatz für alle Sprachen, **UTF-8** ist eine platzsparende Kodierung dafür, die auch mit ASCII kompatibel ist.

### Aufgabe 3
Welchen ASCII-Wert hat der Buchstabe 'A' und welchen 'a'?

**Lösung:**
- **'A'** = 65 (dezimal) = 41 (hex)
- **'a'** = 97 (dezimal) = 61 (hex)
- Die Differenz beträgt immer 32.

### Aufgabe 4
Warum ist UTF-8 im Internet Standard?

**Lösung:**
1. **ASCII-Kompatibilität:** Alle ASCII-Zeichen werden 1:1 übernommen
2. **Platzsparend:** Häufige Zeichen (lateinische) benötigen nur 1 Byte
3. **Universell:** Kann alle Unicode-Zeichen darstellen
4. **Selbstsynchronisierend:** Fehler beim Lesen beeinflussen nicht den Rest

---

## Querverweise

- [05-01-01 Bits und Bytes](./05-01-01-bits-bytes-number-systems.md) - Binäre Darstellung
- [06-05-01 HTML/XML](../../06-software/06-05-web-development/06-05-01-html-xml.md) - Zeichenkodierung in Webseiten
