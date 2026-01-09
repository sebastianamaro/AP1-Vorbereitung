# Bits, Bytes and Number Systems

## Learning Objectives

After this chapter, you should be able to:
- Explain the terms bit and byte
- Know the common number systems (Binary, Decimal, Hexadecimal)
- Perform conversions between number systems
- Calculate storage sizes

---

## Core Content

### Bit and Byte

#### The Bit

The **bit** (binary digit) is the smallest unit of information in computer science.

| Value | Meaning |
|-------|---------|
| **0** | Off, False, Low |
| **1** | On, True, High |

#### The Byte

A **byte** consists of **8 bits** and can represent 2^8 = **256 different values** (0-255).

```
┌─────────────────────────────────────────────────────────────────┐
│                   1 BYTE = 8 BIT                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌───┬───┬───┬───┬───┬───┬───┬───┐                            │
│   │ 1 │ 0 │ 1 │ 0 │ 0 │ 1 │ 1 │ 0 │  = 166 (decimal)          │
│   └───┴───┴───┴───┴───┴───┴───┴───┘                            │
│   128  64  32  16   8   4   2   1                               │
│                                                                 │
│   128 + 0 + 32 + 0 + 0 + 4 + 2 + 0 = 166                       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Storage Sizes

| Unit | Decimal (SI) | Binary (IEC) |
|------|--------------|--------------|
| **Kilobyte/Kibibyte** | 1 KB = 1,000 Byte | 1 KiB = 1,024 Byte |
| **Megabyte/Mebibyte** | 1 MB = 1,000,000 Byte | 1 MiB = 1,048,576 Byte |
| **Gigabyte/Gibibyte** | 1 GB = 1,000,000,000 Byte | 1 GiB = 1,073,741,824 Byte |
| **Terabyte/Tebibyte** | 1 TB = 10^12 Byte | 1 TiB = 2^40 Byte |

**In Practice:** Hard drive manufacturers use decimal specifications (1 GB = 10^9 Byte), while operating systems often use binary (1 GiB = 2^30 Byte). Therefore, a "500 GB" hard drive appears in the system as approximately 465 GiB.

---

### The Three Important Number Systems

```
┌─────────────────────────────────────────────────────────────────┐
│                    NUMBER SYSTEMS                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  DECIMAL (Base 10)      BINARY (Base 2)     HEXADECIMAL (Base 16)│
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │                 │  │                 │  │                 │ │
│  │ Digits: 0-9     │  │ Digits: 0, 1    │  │ Digits: 0-9,    │ │
│  │                 │  │                 │  │ A-F             │ │
│  │ Everyday use    │  │ Computer        │  │ Memory addresses│ │
│  │                 │  │ internal        │  │ Color codes     │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Decimal System (Base 10)

The everyday number system with digits **0-9**.

**Place Value:** Each position has the value 10^n (from right: 10^0, 10^1, 10^2, ...)

Example: **347** = 3×10^2 + 4×10^1 + 7×10^0 = 300 + 40 + 7

---

### Binary System (Base 2)

The number system of computers with digits **0 and 1**.

**Place Value:** Each position has the value 2^n

| Position | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
|----------|---|---|---|---|---|---|---|---|
| **Value** | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

#### Binary → Decimal Conversion

```
Example: 10110101₂

  1    0    1    1    0    1    0    1
×128  ×64  ×32  ×16   ×8   ×4   ×2   ×1
────────────────────────────────────────
 128 +  0 + 32 + 16 +  0 +  4 +  0 +  1 = 181₁₀
```

#### Decimal → Binary Conversion (Division Method)

```
Example: 45₁₀ → Binary

45 ÷ 2 = 22 remainder 1  ↑
22 ÷ 2 = 11 remainder 0  │
11 ÷ 2 =  5 remainder 1  │  Read from bottom to top
 5 ÷ 2 =  2 remainder 1  │
 2 ÷ 2 =  1 remainder 0  │
 1 ÷ 2 =  0 remainder 1  │

Result: 45₁₀ = 101101₂
```

---

### Hexadecimal System (Base 16)

Uses digits **0-9** and letters **A-F** (A=10, B=11, ..., F=15).

| Decimal | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---------|---|---|---|---|---|---|---|---|---|---|----|----|----|----|----|----|
| **Hex** | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | A  | B  | C  | D  | E  | F  |

**Advantage:** 4 bits correspond exactly to one hex digit → compact representation

```
Binary:  1010 1111
Hex:       A    F   = AF₁₆
```

#### Hexadecimal → Decimal

```
Example: 2A₁₆

  2    A
×16¹  ×16⁰
──────────
 32 + 10 = 42₁₀
```

#### Decimal → Hexadecimal

```
Example: 255₁₀ → Hex

255 ÷ 16 = 15 remainder 15 (F)  ↑
 15 ÷ 16 =  0 remainder 15 (F)  │

Result: 255₁₀ = FF₁₆
```

---

### Quick Conversion: Binary ↔ Hexadecimal

Since 16 = 2^4, exactly **4 bits correspond to one hex digit**:

```
┌────────────────────────────────────────────────────────────────┐
│           BINARY ↔ HEXADECIMAL CONVERSION                      │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Binary:     1011  0110  1111  0001                           │
│               ↓     ↓     ↓     ↓                              │
│   Hex:         B     6     F     1    = B6F1₁₆                 │
│                                                                │
│   Table:                                                       │
│   0000=0  0100=4  1000=8  1100=C                              │
│   0001=1  0101=5  1001=9  1101=D                              │
│   0010=2  0110=6  1010=A  1110=E                              │
│   0011=3  0111=7  1011=B  1111=F                              │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Application Examples

| Application | Number System |
|-------------|---------------|
| **MAC Addresses** | Hexadecimal (e.g., 00:1A:2B:3C:4D:5E) |
| **IP Addresses (IPv6)** | Hexadecimal |
| **Color Codes (Web)** | Hexadecimal (#FF0000 = Red) |
| **Memory Addresses** | Hexadecimal |
| **Binary Flags** | Binary |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Bit** | Binary digit, smallest unit of information (0 or 1) |
| **Byte** | 8 bits |
| **Decimal System** | Base 10, digits 0-9 |
| **Binary System** | Base 2, digits 0 and 1 |
| **Hexadecimal System** | Base 16, digits 0-9 and A-F |
| **MSB** | Most Significant Bit (highest-value bit) |
| **LSB** | Least Significant Bit (lowest-value bit) |

---

## Exam Tips

### Common Exam Questions

- Convert [number] from binary to decimal
- Convert [number] from decimal to binary
- How many states can a byte represent?
- What does 1 KB equal in bytes?

### Important to Remember

- **1 Byte = 8 Bits**
- **1 KB = 1,024 Bytes** (binary) or **1,000 Bytes** (decimal)
- **4 Bits = 1 Hex Digit**
- **2^8 = 256** possible values per byte

### Memory Aid for Powers of Two

| 2^0 | 2^1 | 2^2 | 2^3 | 2^4 | 2^5 | 2^6 | 2^7 | 2^8 | 2^9 | 2^10 |
|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|------|
| 1   | 2   | 4   | 8   | 16  | 32  | 64  | 128 | 256 | 512 | 1024 |

---

## Practice Exercises

### Exercise 1
Convert 10101100₂ to the decimal system.

**Solution:**
```
1×128 + 0×64 + 1×32 + 0×16 + 1×8 + 1×4 + 0×2 + 0×1
= 128 + 32 + 8 + 4 = 172₁₀
```

### Exercise 2
Convert 97₁₀ to the binary system.

**Solution:**
```
97 ÷ 2 = 48 remainder 1
48 ÷ 2 = 24 remainder 0
24 ÷ 2 = 12 remainder 0
12 ÷ 2 =  6 remainder 0
 6 ÷ 2 =  3 remainder 0
 3 ÷ 2 =  1 remainder 1
 1 ÷ 2 =  0 remainder 1

Read from bottom to top: 97₁₀ = 1100001₂
```

### Exercise 3
Convert 3F₁₆ to the decimal system.

**Solution:**
```
3×16¹ + F×16⁰
= 3×16 + 15×1
= 48 + 15 = 63₁₀
```

### Exercise 4
How many different values can be represented with 16 bits?

**Solution:** 2^16 = **65,536** different values (0 to 65,535)

### Exercise 5
A hard drive is advertised as 500 GB (decimal). Approximately how many GiB (binary) does that correspond to?

**Solution:**
- 500 GB = 500,000,000,000 Bytes
- 1 GiB = 1,073,741,824 Bytes
- 500,000,000,000 ÷ 1,073,741,824 ≈ **465.66 GiB**

---

## Cross-References

- [05-01-02 IEEE 754](./05-01-02-ieee-754.md) - Floating-point numbers
- [05-01-03 Character Encoding](./05-01-03-character-encoding.md) - ASCII, Unicode
- [07-02-01 IPv4](../../07-networks/07-02-ip-addressing/07-02-01-ipv4.md) - IP Addresses
