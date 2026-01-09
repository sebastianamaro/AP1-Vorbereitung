# Memory (RAM)

## Learning Objectives

After this chapter, you should be able to:
- Distinguish between different types of memory
- Explain RAM and ROM
- Understand the memory hierarchy
- Know DDR standards

---

## Core Content

### Memory Types Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                    MEMORY TYPES                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  VOLATILE (loses data                NON-VOLATILE (retains     │
│  on power loss)                      data without power)        │
│                                                                 │
│  ┌─────────────────────┐           ┌─────────────────────┐     │
│  │        RAM          │           │        ROM          │     │
│  │  Random Access      │           │  Read-Only Memory   │     │
│  │  Memory             │           │                     │     │
│  │                     │           │  • BIOS/UEFI        │     │
│  │  • Working memory   │           │  • Firmware         │     │
│  │  • Fast             │           │                     │     │
│  │  • Expensive per GB │           │  ┌───────────────┐  │     │
│  └─────────────────────┘           │  │ Flash Memory  │  │     │
│                                    │  │ • SSD         │  │     │
│                                    │  │ • USB stick   │  │     │
│                                    │  └───────────────┘  │     │
│                                    └─────────────────────┘     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### RAM (Random Access Memory)

**RAM** is the working memory of the computer - fast but volatile.

#### Properties

| Property | Description |
|----------|-------------|
| **Volatile** | Data is lost on power failure |
| **Fast** | Direct access to any address |
| **Function** | Stores running programs and data |
| **Capacity** | Typically 8-64 GB |

#### RAM Types

| Type | Description | Speed |
|------|-------------|-------|
| **DRAM** | Dynamic RAM, must be refreshed | Slower |
| **SRAM** | Static RAM, no refresh needed | Faster |
| **SDRAM** | Synchronous with system clock | Current standard |

---

### DDR Standards

**DDR (Double Data Rate)** transfers data on both the rising AND falling clock edge.

```
┌────────────────────────────────────────────────────────────────┐
│                    DDR EVOLUTION                               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  DDR1 ───► DDR2 ───► DDR3 ───► DDR4 ───► DDR5                 │
│                                                                │
│  Each generation:                                              │
│  • Higher speed                                                │
│  • Lower voltage (= less power consumption)                    │
│  • Higher capacity possible                                    │
│  • NOT backwards compatible (different notch/socket)           │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| DDR Standard | Voltage | Typical Frequency | Max. Bandwidth |
|--------------|---------|-------------------|----------------|
| **DDR3** | 1.5 V | 1333-2133 MHz | ~17 GB/s |
| **DDR4** | 1.2 V | 2133-3200 MHz | ~25 GB/s |
| **DDR5** | 1.1 V | 4800-6400+ MHz | ~51+ GB/s |

---

### Memory Hierarchy

Memory in the computer is arranged hierarchically:

```
┌────────────────────────────────────────────────────────────────┐
│                  MEMORY HIERARCHY                              │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│             ▲ Speed                                            │
│             │                                                  │
│  ┌──────────┴──────────┐  Registers (CPU)                     │
│  │        very        │  Capacity: Bytes                      │
│  │        fast        │  Latency: < 1 ns                      │
│  └────────────────────┘                                        │
│  ┌────────────────────┐  L1/L2/L3 Cache                       │
│  │       fast         │  Capacity: KB to MB                   │
│  │                    │  Latency: 1-10 ns                     │
│  └────────────────────┘                                        │
│  ┌────────────────────┐  RAM (Working Memory)                 │
│  │      medium        │  Capacity: GB                         │
│  │                    │  Latency: ~100 ns                     │
│  └────────────────────┘                                        │
│  ┌────────────────────┐  SSD                                  │
│  │       slow         │  Capacity: TB                         │
│  │     (relatively)   │  Latency: ~100 µs                     │
│  └────────────────────┘                                        │
│  ┌────────────────────┐  HDD                                  │
│  │    very slow       │  Capacity: TB                         │
│  │                    │  Latency: ~10 ms                      │
│  └────────────────────┘                                        │
│             │                                                  │
│             ▼ Capacity / Cost per GB                          │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### ROM (Read-Only Memory)

**ROM** stores data permanently, even without power supply.

| ROM Type | Description | Modifiable? |
|----------|-------------|-------------|
| **ROM** | Read-only, permanently programmed | No |
| **PROM** | Programmable once | Once |
| **EPROM** | Erasable with UV light | With special equipment |
| **EEPROM** | Electrically erasable | Yes |
| **Flash** | Fast electrically erasable | Yes |

**Uses of ROM:**
- BIOS/UEFI firmware
- Device firmware
- Bootloader

---

### Dual-Channel and Quad-Channel

Bandwidth can be increased through multiple memory channels:

| Mode | Requirement | Bandwidth |
|------|-------------|-----------|
| **Single-Channel** | 1 RAM module | 1x |
| **Dual-Channel** | 2 identical modules | 2x |
| **Quad-Channel** | 4 identical modules | 4x |

**Best Practice:** Use identical RAM modules (size, speed, manufacturer).

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **RAM** | Random Access Memory (working memory) |
| **ROM** | Read-Only Memory |
| **DDR** | Double Data Rate |
| **DRAM** | Dynamic RAM |
| **SRAM** | Static RAM |
| **Volatile** | Loses data on power failure |
| **Dual-Channel** | Two RAM modules for more bandwidth |

---

## Exam Tips

### Common Exam Questions

- What is the difference between RAM and ROM?
- What does DDR mean?
- Why is RAM called volatile?
- What is the memory hierarchy?

### Important to Remember

- **RAM** = volatile, fast, working memory
- **ROM** = non-volatile, firmware
- **DDR** = Double Data Rate (double transfer per clock cycle)
- DDR generations are **NOT backwards compatible**

---

## Practice Exercises

### Exercise 1
What is the difference between RAM and ROM?

**Solution:**
| Aspect | RAM | ROM |
|--------|-----|-----|
| **Volatility** | Volatile (data lost on power failure) | Non-volatile |
| **Usage** | Working memory | Firmware, BIOS |
| **Modifiable** | Yes, constantly | No or only specially |
| **Speed** | Very fast | Slower |

### Exercise 2
Why are DDR4 and DDR5 RAM modules not interchangeable?

**Solution:** DDR generations have different:
- **Voltages** (DDR4: 1.2V, DDR5: 1.1V)
- **Pin counts** and **notches** (mechanically incompatible)
- **Electrical specifications**

The modules physically do not fit in wrong slots.

### Exercise 3
Explain the memory hierarchy.

**Solution:** The memory hierarchy arranges storage by speed and capacity:
1. **Registers** (CPU) - fastest, smallest
2. **Cache** (L1, L2, L3) - very fast, small
3. **RAM** - fast, medium-sized
4. **SSD/HDD** - slow, large

The faster the memory, the more expensive per GB and the smaller the capacity.

---

## Cross-References

- [05-02-01 Processors](./05-02-01-processors.md) - Cache and Registers
- [05-02-03 Storage](./05-02-03-storage-hdd-ssd.md) - SSD and HDD
- [05-03-02 BIOS/UEFI](../05-03-operating-systems/05-03-02-bios-uefi.md) - ROM for Firmware
