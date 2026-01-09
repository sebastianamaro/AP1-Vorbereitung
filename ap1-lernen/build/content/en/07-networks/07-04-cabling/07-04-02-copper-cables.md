# Copper Cables and Categories

## Learning Objectives

After this section you should be able to:
- Distinguish the different copper cable categories
- Name the performance capability of each category
- Explain shielding types (UTP, STP, S/FTP)
- Select suitable cables for different applications

---

## Core Content

### Cable Categories Overview

```
+---------------------------------------------------------------------+
|              COPPER CABLE CATEGORIES                                 |
+---------------------------------------------------------------------+
|                                                                      |
|  Category    Bandwidth    Max. Speed     Application Area           |
|  ---------------------------------------------------------------    |
|                                                                      |
|  Cat 5        100 MHz       100 Mbit/s     outdated, rarely used    |
|                                                                      |
|  Cat 5e       100 MHz       1 Gbit/s       Gigabit Ethernet         |
|                             (1000BASE-T)   (still common)           |
|                                                                      |
|  Cat 6        250 MHz       1 Gbit/s       Gigabit Ethernet         |
|                             10 Gbit/s*     (*up to 55 m)            |
|                                                                      |
|  Cat 6A       500 MHz       10 Gbit/s      10-Gigabit Ethernet      |
|                             (10GBASE-T)    (current standard)       |
|                                                                      |
|  Cat 7        600 MHz       10 Gbit/s      Data centers             |
|                                            (highest shielding)      |
|                                                                      |
|  Cat 7A      1000 MHz       10 Gbit/s      Future-proof             |
|                             (40 Gbit/s*)   (*short distances)       |
|                                                                      |
|  Cat 8       2000 MHz       25/40 Gbit/s   Data centers             |
|                                            (max. 30 m)              |
|                                                                      |
+---------------------------------------------------------------------+
```

### Detailed Comparison

| Category | Bandwidth | Speed | Max. Length | Typical Use |
|----------|-----------|-------|-------------|-------------|
| **Cat 5e** | 100 MHz | 1 Gbit/s | 100 m | Office cabling |
| **Cat 6** | 250 MHz | 1-10 Gbit/s | 100 m (55 m at 10G) | New installations |
| **Cat 6A** | 500 MHz | 10 Gbit/s | 100 m | Standard for new builds |
| **Cat 7** | 600 MHz | 10 Gbit/s | 100 m | High-performance networks |
| **Cat 8** | 2000 MHz | 25-40 Gbit/s | 30 m | Data centers |

### Cable Construction

```
+---------------------------------------------------------------------+
|                  TWISTED PAIR CABLE                                  |
+---------------------------------------------------------------------+
|                                                                      |
|     Cross-section of a Cat 6A cable:                                |
|                                                                      |
|              +------------------------+                              |
|              |    Outer Jacket        |                              |
|              |  +------------------+  |                              |
|              |  | Overall Shield   |  |                              |
|              |  | +--+ +--+       |  |                              |
|              |  | |oo| |oo|       |  |  4 twisted pairs             |
|              |  | +--+ +--+       |  |  (8 conductors total)        |
|              |  | +--+ +--+       |  |                              |
|              |  | |oo| |oo|       |  |                              |
|              |  | +--+ +--+       |  |                              |
|              |  +------------------+  |                              |
|              +------------------------+                              |
|                                                                      |
|     Why twisted?                                                    |
|     -> Reduces electromagnetic interference (crosstalk)             |
|     -> The tighter the twist, the better the shielding              |
|                                                                      |
+---------------------------------------------------------------------+
```

### Shielding Types

The shielding is indicated with a standardized designation:
**XX/YZZ** where:
- XX = Overall shielding
- Y = Pair shielding
- ZZ = Twisted Pair (TP)

```
+---------------------------------------------------------------------+
|                    SHIELDING TYPES                                   |
+---------------------------------------------------------------------+
|                                                                      |
|  Designation       Overall Shield    Pair Shield    Interference    |
|                                                      Resistance     |
|  --------------------------------------------------------------     |
|                                                                      |
|  U/UTP             X               X             low                |
|  (Unshielded)      none            none          (Cat 5e)           |
|                                                                      |
|  F/UTP             / Foil          X             medium             |
|  (Foiled)          Foil            none          (Cat 6)            |
|                                                                      |
|  S/FTP             / Braid         / Foil        high               |
|  (Shielded/Foiled) Wire braid      per pair      (Cat 6A/7)         |
|                                                                      |
|  S/STP             / Braid         / Braid       very high          |
|  (Shielded)        Wire braid      per pair      (Cat 7/7A)         |
|                                                                      |
+---------------------------------------------------------------------+
```

**Mnemonic:**
- **U** = Unshielded
- **F** = Foiled
- **S** = Shielded/Screened (braid)

### Connector Types

```
+---------------------------------------------------------------------+
|                    RJ45 CONNECTOR                                    |
+---------------------------------------------------------------------+
|                                                                      |
|         +--------------------+                                       |
|         |  +-+-+-+-+-+-+-+-+ |                                       |
|         |  |1|2|3|4|5|6|7|8| |    8 Pins (8P8C)                     |
|         |  +-+-+-+-+-+-+-+-+ |                                       |
|         |       +---+        |    Standard for Ethernet             |
|         |       |   |        |                                       |
|         +-------+---+--------+                                       |
|                                                                      |
|  Wiring according to T568A or T568B (Crossover vs. Straight)        |
|                                                                      |
|  T568B (Standard):                                                  |
|  Pin 1: white-orange    Pin 5: white-blue                          |
|  Pin 2: orange          Pin 6: green                                |
|  Pin 3: white-green     Pin 7: white-brown                         |
|  Pin 4: blue            Pin 8: brown                                |
|                                                                      |
+---------------------------------------------------------------------+
```

### Cable Types by Function

| Cable Type | Use | Description |
|------------|-----|-------------|
| **Straight-Through** | Switch <-> PC | Both ends same wiring |
| **Crossover** | PC <-> PC | Send/receive lines crossed |
| **Patch Cable** | Connection | Flexible cable with connectors |
| **Installation Cable** | Installation | Solid cable for permanent installation |

**Note:** Modern devices with **Auto-MDI/X** automatically detect which cable type is being used.

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Twisted Pair** | Twisted wire pairs to reduce interference |
| **RJ45** | Standard connector for network cables (8P8C) |
| **Crosstalk** | Signal interference between adjacent lines |
| **UTP** | Unshielded Twisted Pair |
| **STP** | Shielded Twisted Pair |
| **Cat** | Category - performance class of the cable |
| **Bandwidth** | Frequency range (in MHz) |
| **Auto-MDI/X** | Automatic cable type detection |

---

## Exam Tips

1. **Most important categories for the exam:**
   - **Cat 5e:** 1 Gbit/s - minimum standard
   - **Cat 6A:** 10 Gbit/s - current new installation standard
   - **Cat 7:** 10 Gbit/s - best shielding

2. **Shielding mnemonic:**
   - "**U**nprotected" = U
   - "**F**oil" = F
   - "**S**hield/braid" = S

3. **Common exam questions:**
   - Which category for 10 Gbit/s at 100 m? -> Cat 6A
   - What does S/FTP mean? -> Overall shield + foil per pair
   - How many wire pairs? -> 4 pairs = 8 conductors

4. **Typical mistakes:**
   - Cat 6 can do 10 Gbit/s, but only up to 55 m (not 100 m!)
   - Higher category = more shielding required

---

## Practice Exercises

### Exercise 1: Assign Categories

Which cable category is suitable for the following requirements?

a) Office network with Gigabit Ethernet
b) Data center with 10 Gbit/s over 80 m distance
c) Server connection with 25 Gbit/s over short distance

<details>
<summary>Show solution</summary>

a) **Cat 5e** or better (Cat 6) - Gigabit requires at least Cat 5e
b) **Cat 6A** - 10 Gbit/s over 100 m (Cat 6 only up to 55 m!)
c) **Cat 8** - for 25-40 Gbit/s (only up to 30 m)

</details>

### Exercise 2: Decode Shielding

Explain the shielding for the following cable designations:

a) U/UTP
b) F/UTP
c) S/FTP

<details>
<summary>Show solution</summary>

a) **U/UTP:**
   - U = No overall shield
   - UTP = No pair shielding
   - Result: Completely unshielded

b) **F/UTP:**
   - F = Overall shield made of foil
   - UTP = No pair shielding
   - Result: Only shielded on the outside

c) **S/FTP:**
   - S = Overall shield made of wire braid
   - FTP = Each pair shielded with foil
   - Result: Double shielded (highest quality)

</details>

### Exercise 3: Practical Scenario

ConSystem GmbH plans new cabling for an office floor. The following requirements exist:
- Gigabit Ethernet for all workstations
- Possible expansion to 10 Gbit/s in 5 years
- Strong electromagnetic interference sources nearby

Which cable category and shielding do you recommend?

<details>
<summary>Show solution</summary>

**Recommendation: Cat 6A S/FTP**

Reason:
- **Cat 6A** instead of Cat 6, because:
  - Already 10 Gbit/s capable (over 100 m)
  - Future-proof for planned expansion
  - Price difference to Cat 6 is minimal

- **S/FTP** instead of UTP, because:
  - Strong EMI sources present
  - Double shielding (braid + foil per pair)
  - Best interference resistance

Alternative: Cat 7 S/FTP would also be possible, but more expensive and not necessary for the requirements.

</details>

### Exercise 4: Troubleshooting

A technician installed a network cable with Cat 6. The customer complains that the promised 10 Gbit/s cannot be achieved. The cable length is 75 m.

What is the cause and how can the problem be solved?

<details>
<summary>Show solution</summary>

**Cause:**
Cat 6 supports 10 Gbit/s only up to a length of **55 m**. At 75 m cable length, the speed falls back to 1 Gbit/s.

**Solution:**
1. Replace cable with **Cat 6A** (supports 10 Gbit/s up to 100 m)
2. Alternatively: Reduce cable length to under 55 m (if possible)

**Conclusion:** For new installations, Cat 6A should always be used when 10 Gbit/s is needed.

</details>

---

## Cross-References

- [Structured Cabling](07-04-01-structured-cabling.md) - Cabling areas
- [Network Hardware](../07-05-network-hardware.md) - Switches and routers
- [Transmission Rates](../07-06-data-transmission/07-06-01-transmission-rates.md) - Speed calculations
