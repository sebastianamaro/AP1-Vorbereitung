# Storage - HDD vs. SSD

## Learning Objectives

After this chapter, you should be able to:
- Explain the difference between HDD and SSD
- Know the advantages and disadvantages of both technologies
- Assign appropriate use cases
- Understand important metrics

**Note:** HDD vs. SSD comparison is NEW in the 2025 exam catalog!

---

## Core Content

### Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                  DATA STORAGE                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  HDD (Hard Disk Drive)              SSD (Solid State Drive)     │
│  ┌─────────────────────┐            ┌─────────────────────┐    │
│  │                     │            │                     │    │
│  │  Magnetic           │            │  Flash Memory       │    │
│  │  Platters           │            │  (NAND)             │    │
│  │                     │            │                     │    │
│  │  Mechanical         │            │  Electronic         │    │
│  │  (moving parts)     │            │  (no moving         │    │
│  │                     │            │   parts)            │    │
│  └─────────────────────┘            └─────────────────────┘    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### HDD (Hard Disk Drive)

The **hard disk drive** stores data magnetically on rotating platters.

#### Structure

```
┌────────────────────────────────────────────────────────────────┐
│                    HDD STRUCTURE                               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│           Read/Write Head                                      │
│                 │                                              │
│                 ▼                                              │
│         ┌───────────────┐                                      │
│        /│               │\                                     │
│       / │   Magnetic    │ \                                    │
│      /  │   Platters    │  \                                   │
│     /   │               │   \                                  │
│    /    │               │    \                                 │
│   │     └───────┬───────┘     │                                │
│   │             │             │                                │
│   │          Spindle          │                                │
│   │        (Rotation)         │                                │
│   └───────────────────────────┘                                │
│                                                                │
│   RPM: 5,400 - 7,200 (Consumer) / 10,000-15,000 (Server)      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### HDD Properties

| Property | Value/Description |
|----------|-------------------|
| **Storage Principle** | Magnetic |
| **Capacity** | Up to 20+ TB |
| **Speed** | 80-200 MB/s (sequential) |
| **Access Time** | 5-10 ms |
| **Price per GB** | Very affordable (approx. $0.02/GB) |
| **Lifespan** | Limited by mechanical wear |
| **Power Consumption** | Higher |
| **Sensitivity** | Shock-sensitive |

---

### SSD (Solid State Drive)

The **SSD** stores data electronically in flash memory (NAND).

#### Structure

```
┌────────────────────────────────────────────────────────────────┐
│                    SSD STRUCTURE                               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   ┌──────────────────────────────────────────────────────────┐│
│   │                    Controller                             ││
│   │              (Management, Wear Leveling)                  ││
│   └──────────────────────────────────────────────────────────┘│
│                            │                                   │
│   ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐     │
│   │ NAND   │ │ NAND   │ │ NAND   │ │ NAND   │ │ NAND   │     │
│   │ Flash  │ │ Flash  │ │ Flash  │ │ Flash  │ │ Flash  │     │
│   └────────┘ └────────┘ └────────┘ └────────┘ └────────┘     │
│                                                                │
│   No moving parts!                                             │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### SSD Properties

| Property | Value/Description |
|----------|-------------------|
| **Storage Principle** | Electronic (NAND Flash) |
| **Capacity** | Up to 8+ TB |
| **Speed** | 500 MB/s (SATA) / 3,500+ MB/s (NVMe) |
| **Access Time** | 0.1 ms |
| **Price per GB** | More expensive (approx. $0.08-0.15/GB) |
| **Lifespan** | Limited by write cycles (TBW) |
| **Power Consumption** | Lower |
| **Sensitivity** | Shock-resistant |

---

### Direct Comparison: HDD vs. SSD

| Criterion | HDD | SSD |
|-----------|-----|-----|
| **Speed** | 80-200 MB/s | 500-7,000 MB/s |
| **Access Time** | 5-10 ms | 0.1 ms |
| **Price/GB** | Affordable | More expensive |
| **Capacity** | Very high (up to 20+ TB) | High (up to 8+ TB) |
| **Noise** | Audible | Silent |
| **Power Consumption** | Higher | Lower |
| **Shock Resistance** | Sensitive | Robust |
| **Weight** | Heavier | Lighter |
| **Lifespan** | Mechanical wear | Write cycles limited |

---

### SSD Form Factors and Interfaces

| Form Factor | Interface | Speed |
|-------------|-----------|-------|
| **2.5" SATA** | SATA III | up to 550 MB/s |
| **M.2 SATA** | SATA III | up to 550 MB/s |
| **M.2 NVMe** | PCIe | up to 7,000+ MB/s |
| **PCIe Card** | PCIe direct | up to 7,000+ MB/s |

```
┌────────────────────────────────────────────────────────────────┐
│              SSD INTERFACES                                    │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   SATA SSD:     ████████░░░░░░░░░░░░░░░░░░░░  ~550 MB/s       │
│                                                                │
│   NVMe SSD:     ████████████████████████████  ~7,000 MB/s     │
│                                                                │
│   NVMe is up to 12x faster than SATA!                          │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### NAND Flash Types

| Type | Bits/Cell | Durability | Speed | Price |
|------|-----------|------------|-------|-------|
| **SLC** | 1 | Very high | Very fast | Very expensive |
| **MLC** | 2 | High | Fast | Expensive |
| **TLC** | 3 | Medium | Medium | Affordable |
| **QLC** | 4 | Lower | Slower | Very affordable |

---

### Usage Recommendations

| Application | Recommendation |
|-------------|----------------|
| **Operating System, Programs** | SSD (faster startup) |
| **Archives, Backups** | HDD (lower price) |
| **Gaming** | SSD (fast load times) |
| **Video Editing** | SSD (fast access) |
| **Large Data Volumes** | HDD (high capacity) |
| **Laptops** | SSD (shock-resistant, light) |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **HDD** | Hard Disk Drive (magnetic storage) |
| **SSD** | Solid State Drive (flash memory) |
| **NAND** | Flash memory type |
| **NVMe** | Non-Volatile Memory Express (fast protocol) |
| **SATA** | Serial ATA (interface) |
| **TBW** | Terabytes Written (lifespan specification) |
| **Wear Leveling** | Even distribution of wear across memory cells |

---

## Exam Tips

### Common Exam Questions

- What is the difference between HDD and SSD?
- Name advantages and disadvantages of SSDs
- When should you use HDD, when SSD?
- What does NVMe mean?

### Important to Remember

- **HDD** = mechanical, affordable, slow, high capacity
- **SSD** = electronic, expensive, very fast, shock-resistant
- **NVMe** is up to 12x faster than **SATA**
- SSDs for operating system, HDDs for archives

---

## Practice Exercises

### Exercise 1
Name three advantages of an SSD over an HDD.

**Solution:**
1. **Higher speed** (500-7,000 MB/s vs. 80-200 MB/s)
2. **Shorter access time** (0.1 ms vs. 5-10 ms)
3. **Shock-resistant** (no moving parts)

(Additional: quieter, more energy-efficient, lighter)

### Exercise 2
When should you use an HDD instead of an SSD?

**Solution:** An HDD is better suited for:
- **Large data volumes** (archives, backups)
- **Limited budget** (lower price per GB)
- **High capacity requirements** (20+ TB available)
- Data that is rarely accessed

### Exercise 3
What is the difference between SATA and NVMe for SSDs?

**Solution:**
- **SATA:** Older interface, max. approx. 550 MB/s, compatible with HDD connectors
- **NVMe:** Modern interface via PCIe, up to 7,000+ MB/s, specifically developed for SSDs

NVMe is about 12x faster than SATA.

### Exercise 4
What does TBW mean for SSDs?

**Solution:** **TBW (Terabytes Written)** is a specification for the lifespan of an SSD. It indicates how many terabytes can be written in total before failures can be expected. Example: An SSD with 600 TBW can write a total of 600 TB of data before the warranty expires.

---

## Cross-References

- [05-02-02 Memory (RAM)](./05-02-02-memory-ram.md) - Memory hierarchy
- [05-02-04 NAS and Availability](./05-02-04-nas-availability.md) - Network storage
- [05-05-01 Backup Types](../05-05-data-backup/05-05-01-backup-types.md) - Data backup
