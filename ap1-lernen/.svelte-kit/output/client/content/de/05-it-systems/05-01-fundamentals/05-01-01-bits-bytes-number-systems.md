# Bits, Bytes und Zahlensysteme

## Lernziele

Nach diesem Kapitel solltest du:
- Die Begriffe Bit und Byte erklären können
- Die gängigen Zahlensysteme kennen (Binär, Dezimal, Hexadezimal)
- Umrechnungen zwischen Zahlensystemen durchführen können
- Speichergrößen berechnen können

---

## Kerninhalt

### Bit und Byte

#### Das Bit

Das **Bit** (binary digit) ist die kleinste Informationseinheit in der Informatik.

| Wert | Bedeutung |
|------|-----------|
| **0** | Aus, Falsch, Low |
| **1** | Ein, Wahr, High |

#### Das Byte

Ein **Byte** besteht aus **8 Bits** und kann 2⁸ = **256 verschiedene Werte** darstellen (0-255).

```
┌─────────────────────────────────────────────────────────────────┐
│                   1 BYTE = 8 BIT                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌───┬───┬───┬───┬───┬───┬───┬───┐                            │
│   │ 1 │ 0 │ 1 │ 0 │ 0 │ 1 │ 1 │ 0 │  = 166 (dezimal)          │
│   └───┴───┴───┴───┴───┴───┴───┴───┘                            │
│   128  64  32  16   8   4   2   1                               │
│                                                                 │
│   128 + 0 + 32 + 0 + 0 + 4 + 2 + 0 = 166                       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Speichergrößen

| Einheit | Dezimal (SI) | Binär (IEC) |
|---------|--------------|-------------|
| **Kilobyte/Kibibyte** | 1 KB = 1.000 Byte | 1 KiB = 1.024 Byte |
| **Megabyte/Mebibyte** | 1 MB = 1.000.000 Byte | 1 MiB = 1.048.576 Byte |
| **Gigabyte/Gibibyte** | 1 GB = 1.000.000.000 Byte | 1 GiB = 1.073.741.824 Byte |
| **Terabyte/Tebibyte** | 1 TB = 10¹² Byte | 1 TiB = 2⁴⁰ Byte |

**Praxis:** Festplattenhersteller nutzen dezimale Angaben (1 GB = 10⁹ Byte), Betriebssysteme oft binäre (1 GiB = 2³⁰ Byte). Daher erscheint eine "500 GB" Festplatte im System als ca. 465 GiB.

---

### Die drei wichtigen Zahlensysteme

```
┌─────────────────────────────────────────────────────────────────┐
│                    ZAHLENSYSTEME                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  DEZIMAL (Basis 10)   BINÄR (Basis 2)    HEXADEZIMAL (Basis 16)│
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │                 │  │                 │  │                 │ │
│  │ Ziffern: 0-9    │  │ Ziffern: 0, 1   │  │ Ziffern: 0-9,   │ │
│  │                 │  │                 │  │ A-F             │ │
│  │ Alltagsgebrauch │  │ Computer intern │  │ Speicheradressen│ │
│  │                 │  │                 │  │ Farbcodes       │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Dezimalsystem (Basis 10)

Das alltägliche Zahlensystem mit den Ziffern **0-9**.

**Stellenwert:** Jede Position hat den Wert 10^n (von rechts: 10⁰, 10¹, 10², ...)

Beispiel: **347** = 3×10² + 4×10¹ + 7×10⁰ = 300 + 40 + 7

---

### Binärsystem (Basis 2)

Das Zahlensystem der Computer mit den Ziffern **0 und 1**.

**Stellenwert:** Jede Position hat den Wert 2^n

| Position | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
|----------|---|---|---|---|---|---|---|---|
| **Wert** | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

#### Binär → Dezimal umrechnen

```
Beispiel: 10110101₂

  1    0    1    1    0    1    0    1
×128  ×64  ×32  ×16   ×8   ×4   ×2   ×1
────────────────────────────────────────
 128 +  0 + 32 + 16 +  0 +  4 +  0 +  1 = 181₁₀
```

#### Dezimal → Binär umrechnen (Divisionsmethode)

```
Beispiel: 45₁₀ → Binär

45 ÷ 2 = 22 Rest 1  ↑
22 ÷ 2 = 11 Rest 0  │
11 ÷ 2 =  5 Rest 1  │  Von unten nach oben lesen
 5 ÷ 2 =  2 Rest 1  │
 2 ÷ 2 =  1 Rest 0  │
 1 ÷ 2 =  0 Rest 1  │

Ergebnis: 45₁₀ = 101101₂
```

---

### Hexadezimalsystem (Basis 16)

Verwendet die Ziffern **0-9** und die Buchstaben **A-F** (A=10, B=11, ..., F=15).

| Dezimal | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---------|---|---|---|---|---|---|---|---|---|---|----|----|----|----|----|----|
| **Hex** | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | A  | B  | C  | D  | E  | F  |

**Vorteil:** 4 Bit entsprechen genau einer Hex-Ziffer → kompakte Darstellung

```
Binär:  1010 1111
Hex:      A    F   = AF₁₆
```

#### Hexadezimal → Dezimal

```
Beispiel: 2A₁₆

  2    A
×16¹  ×16⁰
──────────
 32 + 10 = 42₁₀
```

#### Dezimal → Hexadezimal

```
Beispiel: 255₁₀ → Hex

255 ÷ 16 = 15 Rest 15 (F)  ↑
 15 ÷ 16 =  0 Rest 15 (F)  │

Ergebnis: 255₁₀ = FF₁₆
```

---

### Schnelle Umrechnung: Binär ↔ Hexadezimal

Da 16 = 2⁴, entsprechen genau **4 Bit einer Hex-Ziffer**:

```
┌────────────────────────────────────────────────────────────────┐
│           BINÄR ↔ HEXADEZIMAL UMRECHNUNG                       │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Binär:    1011  0110  1111  0001                             │
│             ↓     ↓     ↓     ↓                               │
│   Hex:       B     6     F     1    = B6F1₁₆                  │
│                                                                │
│   Tabelle:                                                     │
│   0000=0  0100=4  1000=8  1100=C                              │
│   0001=1  0101=5  1001=9  1101=D                              │
│   0010=2  0110=6  1010=A  1110=E                              │
│   0011=3  0111=7  1011=B  1111=F                              │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Anwendungsbeispiele

| Anwendung | Zahlensystem |
|-----------|--------------|
| **MAC-Adressen** | Hexadezimal (z.B. 00:1A:2B:3C:4D:5E) |
| **IP-Adressen (IPv6)** | Hexadezimal |
| **Farbcodes (Web)** | Hexadezimal (#FF0000 = Rot) |
| **Speicheradressen** | Hexadezimal |
| **Binäre Flags** | Binär |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Bit** | Binary digit, kleinste Informationseinheit (0 oder 1) |
| **Byte** | 8 Bit |
| **Dezimalsystem** | Basis 10, Ziffern 0-9 |
| **Binärsystem** | Basis 2, Ziffern 0 und 1 |
| **Hexadezimalsystem** | Basis 16, Ziffern 0-9 und A-F |
| **MSB** | Most Significant Bit (höchstwertiges Bit) |
| **LSB** | Least Significant Bit (niedrigstwertiges Bit) |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Rechnen Sie [Zahl] von Binär nach Dezimal um
- Rechnen Sie [Zahl] von Dezimal nach Binär um
- Wie viele Zustände kann ein Byte darstellen?
- Was entspricht 1 KB in Byte?

### Wichtig zu merken

- **1 Byte = 8 Bit**
- **1 KB = 1.024 Byte** (binär) oder **1.000 Byte** (dezimal)
- **4 Bit = 1 Hex-Ziffer**
- **2⁸ = 256** mögliche Werte pro Byte

### Merkhilfe für Zweierpotenzen

| 2⁰ | 2¹ | 2² | 2³ | 2⁴ | 2⁵ | 2⁶ | 2⁷ | 2⁸ | 2⁹ | 2¹⁰ |
|----|----|----|----|----|----|----|----|----|-----|-----|
| 1  | 2  | 4  | 8  | 16 | 32 | 64 | 128 | 256 | 512 | 1024 |

---

## Übungsaufgaben

### Aufgabe 1
Rechnen Sie 10101100₂ in das Dezimalsystem um.

**Lösung:**
```
1×128 + 0×64 + 1×32 + 0×16 + 1×8 + 1×4 + 0×2 + 0×1
= 128 + 32 + 8 + 4 = 172₁₀
```

### Aufgabe 2
Rechnen Sie 97₁₀ in das Binärsystem um.

**Lösung:**
```
97 ÷ 2 = 48 Rest 1
48 ÷ 2 = 24 Rest 0
24 ÷ 2 = 12 Rest 0
12 ÷ 2 =  6 Rest 0
 6 ÷ 2 =  3 Rest 0
 3 ÷ 2 =  1 Rest 1
 1 ÷ 2 =  0 Rest 1

Von unten nach oben lesen: 97₁₀ = 1100001₂
```

### Aufgabe 3
Rechnen Sie 3F₁₆ in das Dezimalsystem um.

**Lösung:**
```
3×16¹ + F×16⁰
= 3×16 + 15×1
= 48 + 15 = 63₁₀
```

### Aufgabe 4
Wie viele verschiedene Werte können mit 16 Bit dargestellt werden?

**Lösung:** 2¹⁶ = **65.536** verschiedene Werte (0 bis 65.535)

### Aufgabe 5
Eine Festplatte wird mit 500 GB (dezimal) beworben. Wie viele GiB (binär) entspricht das ungefähr?

**Lösung:**
- 500 GB = 500.000.000.000 Byte
- 1 GiB = 1.073.741.824 Byte
- 500.000.000.000 ÷ 1.073.741.824 ≈ **465,66 GiB**

---

## Querverweise

- [05-01-02 IEEE 754](./05-01-02-ieee-754.md) - Gleitkommazahlen
- [05-01-03 Zeichenkodierung](./05-01-03-character-encoding.md) - ASCII, Unicode
- [07-02-01 IPv4](../../07-networks/07-02-ip-addressing/07-02-01-ipv4.md) - IP-Adressen
