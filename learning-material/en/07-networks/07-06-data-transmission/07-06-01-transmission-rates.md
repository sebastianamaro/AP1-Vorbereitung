# Calculating Transmission Rates [NEW 2025]

## Learning Objectives

After this chapter you should be able to:
- Understand and convert transmission rates
- Calculate transmission times
- Distinguish between bit and byte
- Solve exam questions about data transmission

---

## Core Content

### Fundamentals of Data Transmission

```
+--------------------------------------------------------------------+
|                    DATA TRANSMISSION                                |
+--------------------------------------------------------------------+
|                                                                     |
|   Transmission rate = Data amount per time                         |
|                                                                     |
|   +-------------------------------------------------------------+ |
|   |                                                              | |
|   |   IMPORTANT: Bit vs. Byte                                    | |
|   |                                                              | |
|   |   - Transmission rates are given in BIT/s                    | |
|   |   - File sizes are given in BYTE                             | |
|   |                                                              | |
|   |   1 Byte = 8 Bit                                             | |
|   |                                                              | |
|   |   Notation:                                                  | |
|   |   - Bit per second: bit/s or bps                             | |
|   |   - Byte per second: B/s                                     | |
|   |   - Lowercase "b" = Bit, uppercase "B" = Byte                | |
|   |                                                              | |
|   +-------------------------------------------------------------+ |
|                                                                     |
|   Prefixes (SI units):                                             |
|   +-------------------------------------------------------------+ |
|   | Kilo (k)  = 1,000                = 10^3                     | |
|   | Mega (M)  = 1,000,000            = 10^6                     | |
|   | Giga (G)  = 1,000,000,000        = 10^9                     | |
|   | Tera (T)  = 1,000,000,000,000    = 10^12                    | |
|   +-------------------------------------------------------------+ |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Conversions

```
+--------------------------------------------------------------------+
|                      CONVERSIONS                                    |
+--------------------------------------------------------------------+
|                                                                     |
|   BIT <-> BYTE                                                     |
|   +------------------------------------------------------------+  |
|   |                                                             |  |
|   |   Bit -> Byte:  / 8                                        |  |
|   |   Byte -> Bit:  x 8                                        |  |
|   |                                                             |  |
|   |   Examples:                                                 |  |
|   |   80 Mbit/s / 8 = 10 MB/s                                  |  |
|   |   100 MB    x 8 = 800 Mbit                                 |  |
|   |                                                             |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   PREFIX CONVERSION                                                |
|   +------------------------------------------------------------+  |
|   |                                                             |  |
|   |   1 Gbit/s = 1,000 Mbit/s = 1,000,000 kbit/s              |  |
|   |                                                             |  |
|   |   Larger -> Smaller: x 1,000                               |  |
|   |   Smaller -> Larger: / 1,000                               |  |
|   |                                                             |  |
|   |   Examples:                                                 |  |
|   |   2 Gbit/s = 2,000 Mbit/s                                  |  |
|   |   500 Mbit/s = 0.5 Gbit/s                                  |  |
|   |                                                             |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   TYPICAL CONVERSION TABLE                                         |
|   +------------------------------------------------------------+  |
|   |                                                             |  |
|   |   Transmission Rate | In Mbit/s | In MB/s                  |  |
|   |   ------------------+-----------+-------------------       |  |
|   |   100 Mbit/s        | 100       | 12.5 MB/s                |  |
|   |   1 Gbit/s          | 1,000     | 125 MB/s                 |  |
|   |   10 Gbit/s         | 10,000    | 1,250 MB/s               |  |
|   |                                                             |  |
|   +------------------------------------------------------------+  |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Calculating Transmission Time

```
+--------------------------------------------------------------------+
|                 CALCULATING TRANSMISSION TIME                       |
+--------------------------------------------------------------------+
|                                                                     |
|   Basic formula:                                                    |
|   +-------------------------------------------------------------+ |
|   |                                                              | |
|   |              Data Amount                                     | |
|   |   Time = -----------------                                   | |
|   |           Transmission Rate                                  | |
|   |                                                              | |
|   |   ! IMPORTANT: Units must match!                            | |
|   |      Both in Bit OR both in Byte!                           | |
|   |                                                              | |
|   +-------------------------------------------------------------+ |
|                                                                     |
|   EXAMPLE 1: Simple calculation                                    |
|   +------------------------------------------------------------+  |
|   |                                                             |  |
|   |   File: 800 MB                                             |  |
|   |   Connection: 100 Mbit/s                                   |  |
|   |                                                             |  |
|   |   Step 1: Match units                                      |  |
|   |   800 MB x 8 = 6,400 Mbit                                  |  |
|   |                                                             |  |
|   |   Step 2: Apply formula                                    |  |
|   |   Time = 6,400 Mbit / 100 Mbit/s = 64 seconds             |  |
|   |                                                             |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   EXAMPLE 2: Larger file                                           |
|   +------------------------------------------------------------+  |
|   |                                                             |  |
|   |   File: 5 GB                                               |  |
|   |   Connection: 1 Gbit/s                                     |  |
|   |                                                             |  |
|   |   Step 1: Match units                                      |  |
|   |   5 GB x 8 = 40 Gbit                                       |  |
|   |                                                             |  |
|   |   Step 2: Apply formula                                    |  |
|   |   Time = 40 Gbit / 1 Gbit/s = 40 seconds                  |  |
|   |                                                             |  |
|   +------------------------------------------------------------+  |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Typical Transmission Rates

```
+--------------------------------------------------------------------+
|                 TYPICAL TRANSMISSION RATES                          |
+--------------------------------------------------------------------+
|                                                                     |
|   LOCAL AREA NETWORKS (LAN)                                        |
|   +------------------------------------------------------------+  |
|   | Fast Ethernet:      100 Mbit/s    = 12.5 MB/s              |  |
|   | Gigabit Ethernet:   1 Gbit/s      = 125 MB/s               |  |
|   | 10 Gigabit:         10 Gbit/s     = 1,250 MB/s             |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   WLAN                                                             |
|   +------------------------------------------------------------+  |
|   | 802.11n (Wi-Fi 4):  up to 600 Mbit/s                       |  |
|   | 802.11ac (Wi-Fi 5): up to 6.9 Gbit/s (theoretical)         |  |
|   | 802.11ax (Wi-Fi 6): up to 9.6 Gbit/s (theoretical)         |  |
|   |                                                             |  |
|   | ! Practice: Often only 50-70% of max rate achievable       |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   INTERNET CONNECTIONS (typical connections)                       |
|   +------------------------------------------------------------+  |
|   | DSL:                16-250 Mbit/s Download                 |  |
|   | Cable:              up to 1 Gbit/s Download                |  |
|   | Fiber (FTTH):       up to 1 Gbit/s (symmetric)             |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   USB INTERFACES                                                   |
|   +------------------------------------------------------------+  |
|   | USB 2.0:  480 Mbit/s  = 60 MB/s                            |  |
|   | USB 3.0:  5 Gbit/s    = 625 MB/s                           |  |
|   | USB 3.1:  10 Gbit/s   = 1,250 MB/s                         |  |
|   | USB 3.2:  20 Gbit/s   = 2,500 MB/s                         |  |
|   +------------------------------------------------------------+  |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Calculation Steps Summary

```
+--------------------------------------------------------------------+
|                   CALCULATION STEPS                                 |
+--------------------------------------------------------------------+
|                                                                     |
|   1. IDENTIFY GIVEN VALUES                                         |
|   +------------------------------------------------------------+  |
|   | - Data amount (in MB, GB, ...)                             |  |
|   | - Transmission rate (in Mbit/s, Gbit/s, ...)               |  |
|   | - Or: Time given, rate sought                              |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   2. MATCH UNITS                                                   |
|   +------------------------------------------------------------+  |
|   | Either:                                                     |  |
|   | - Convert everything to Bit                                |  |
|   | - Or: Convert everything to Byte                           |  |
|   |                                                             |  |
|   | Remember: File size (Byte) x 8 = File size (Bit)          |  |
|   |           Rate (Bit/s) / 8 = Rate (Byte/s)                |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   3. APPLY FORMULA                                                 |
|   +------------------------------------------------------------+  |
|   |                                                             |  |
|   |   Time = Data amount / Rate                                |  |
|   |   Rate = Data amount / Time                                |  |
|   |   Data amount = Rate x Time                                |  |
|   |                                                             |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   4. CHECK RESULT                                                  |
|   +------------------------------------------------------------+  |
|   | - Is the unit of the result correct?                       |  |
|   | - Is the result plausible?                                 |  |
|   | - If needed, convert to different unit (s -> min)          |  |
|   +------------------------------------------------------------+  |
|                                                                     |
+--------------------------------------------------------------------+
```

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Bit** | Smallest unit of information (0 or 1) |
| **Byte** | 8 Bits |
| **Mbit/s** | Megabits per second (transmission rate) |
| **MB/s** | Megabytes per second |
| **Bandwidth** | Maximum transmission capacity |
| **Throughput** | Actually achieved transmission rate |

---

## Exam Tips

### Common Exam Questions

- Calculate the transmission time for a file
- Convert Mbit/s to MB/s
- Compare transmission rates

### Important to Remember

- **1 Byte = 8 Bit**
- **Rates in Bit**, **File sizes in Byte**
- **Time = Data amount / Rate**
- **Gigabit Ethernet** = 1,000 Mbit/s = 125 MB/s
- Always match units before calculation!
- Uppercase B = Byte, lowercase b = Bit

---

## Practice Exercises

### Exercise 1
How long does it take to transfer a 600 MB file at a transmission rate of 100 Mbit/s?

**Solution:**
1. Match units: 600 MB x 8 = 4,800 Mbit
2. Formula: Time = 4,800 Mbit / 100 Mbit/s = **48 seconds**

### Exercise 2
Convert 1 Gbit/s to MB/s.

**Solution:**
1. 1 Gbit/s = 1,000 Mbit/s
2. 1,000 Mbit/s / 8 = **125 MB/s**

### Exercise 3
A backup of 50 GB is to be transferred over a 1 Gbit/s connection. How long does this take at minimum?

**Solution:**
1. 50 GB x 8 = 400 Gbit
2. Time = 400 Gbit / 1 Gbit/s = **400 seconds = 6 minutes 40 seconds**

### Exercise 4
A 4 GB file was transferred in 5 minutes. What transmission rate was achieved?

**Solution:**
1. 5 minutes = 300 seconds
2. 4 GB x 8 = 32 Gbit = 32,000 Mbit
3. Rate = 32,000 Mbit / 300 s = **106.67 Mbit/s** (approx. 107 Mbit/s)

---

## Cross-References

- [05-01-01 Bits, Bytes, Number Systems](../../05-it-systems/05-01-fundamentals/05-01-01-bits-bytes-number-systems.md) - Fundamentals
- [07-04-02 Copper Cables](../07-04-cabling/07-04-02-copper-cables.md) - Cable categories
- [07-03-01 WLAN Fundamentals](../07-03-wlan/07-03-01-wlan-fundamentals.md) - WLAN speeds
