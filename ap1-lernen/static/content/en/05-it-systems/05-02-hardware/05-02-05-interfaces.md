# Interfaces

## Learning Objectives

After this chapter, you should be able to:
- Know different hardware interfaces
- Distinguish USB standards
- Know internal and external interfaces
- Select appropriate interfaces for applications

---

## Core Content

### Overview: Interfaces

```
┌─────────────────────────────────────────────────────────────────┐
│                    INTERFACES                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  EXTERNAL                          INTERNAL                     │
│  ┌─────────────────────┐          ┌─────────────────────┐      │
│  │ • USB               │          │ • SATA              │      │
│  │ • HDMI              │          │ • M.2               │      │
│  │ • DisplayPort       │          │ • PCIe              │      │
│  │ • Thunderbolt       │          │ • RAM slots         │      │
│  │ • Ethernet (RJ45)   │          │ • CPU socket        │      │
│  │ • Audio (jack)      │          │                     │      │
│  └─────────────────────┘          └─────────────────────┘      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### USB (Universal Serial Bus)

#### USB Versions

| Version | Max. Speed | Name | Connector |
|---------|-----------|------|-----------|
| **USB 2.0** | 480 Mbit/s | High Speed | Type-A, Mini, Micro |
| **USB 3.0** | 5 Gbit/s | SuperSpeed | Type-A (blue), Type-C |
| **USB 3.1** | 10 Gbit/s | SuperSpeed+ | Type-A, Type-C |
| **USB 3.2** | 20 Gbit/s | SuperSpeed 20 | Type-C |
| **USB4** | 40-80 Gbit/s | USB4 | Type-C |

#### USB Connector Types

```
┌────────────────────────────────────────────────────────────────┐
│                    USB CONNECTORS                              │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Type-A         Type-B         Type-C         Micro-USB       │
│   ┌────┐         ┌────┐         ┌────┐         ┌────┐         │
│   │    │         │ ██ │         │    │         │____│         │
│   │    │         └────┘         └────┘         └────┘         │
│   └────┘                                                       │
│   Standard       Printer        Modern,        Smartphones     │
│   PC port        Scanner        reversible     (deprecated)    │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### USB Color Codes

| Color | USB Version |
|-------|-------------|
| Black/White | USB 2.0 |
| Blue | USB 3.0 |
| Teal | USB 3.1 |
| Red | USB with fast charging |
| Yellow | Always-On (charging in standby) |

---

### Video Interfaces

| Interface | Type | Max. Resolution | Audio |
|-----------|------|-----------------|-------|
| **VGA** | Analog | 2048×1536 | No |
| **DVI** | Digital/Analog | 2560×1600 | No |
| **HDMI** | Digital | 8K@60Hz (2.1) | Yes |
| **DisplayPort** | Digital | 8K@60Hz | Yes |
| **Thunderbolt** | Digital | 8K | Yes + Data |

```
┌────────────────────────────────────────────────────────────────┐
│              VIDEO INTERFACES                                  │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   VGA (outdated)   DVI           HDMI         DisplayPort     │
│   ┌──────────┐     ┌────┐       ┌────┐         ┌────┐        │
│   │ ●●●●●●●● │     │████│       │    │         │ ┐ │        │
│   │ ●●●●●●●● │     │████│       │    │         │   │        │
│   │ ●●●●●●●● │     │████│       └────┘         └───┘        │
│   └──────────┘     └────┘                                     │
│                                                                │
│   Analog,          Large,       Standard,      Professional,  │
│   phasing out      outdated     Consumer       Gaming         │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Internal Interfaces

#### SATA (Serial ATA)

| Version | Speed |
|---------|-------|
| SATA I | 1.5 Gbit/s (150 MB/s) |
| SATA II | 3 Gbit/s (300 MB/s) |
| **SATA III** | 6 Gbit/s (600 MB/s) |

Usage: Hard drives (HDD, SSD), optical drives

#### M.2

**M.2** is a compact form factor for SSDs and other components.

| M.2 Type | Interface | Speed |
|----------|-----------|-------|
| M.2 SATA | SATA | up to 600 MB/s |
| M.2 NVMe | PCIe | up to 7,000+ MB/s |

**Note:** M.2 slots can be SATA or NVMe - check compatibility!

#### PCIe (PCI Express)

| Generation | Bandwidth per Lane |
|------------|-------------------|
| PCIe 3.0 | 1 GB/s |
| PCIe 4.0 | 2 GB/s |
| PCIe 5.0 | 4 GB/s |

Usage: Graphics cards (x16), NVMe SSDs (x4), network cards (x1)

---

### Network Interfaces

| Interface | Speed | Usage |
|-----------|-------|-------|
| **Ethernet (RJ45)** | 100 Mbit - 10 Gbit | LAN connection |
| **WLAN** | up to 9.6 Gbit/s (Wi-Fi 6) | Wireless |
| **Bluetooth** | up to 50 Mbit/s (5.0) | Short range |

---

### Thunderbolt

**Thunderbolt** is a high-speed interface from Intel/Apple.

| Version | Speed | Connector |
|---------|-------|-----------|
| Thunderbolt 1/2 | 20 Gbit/s | Mini DisplayPort |
| Thunderbolt 3 | 40 Gbit/s | USB-C |
| Thunderbolt 4 | 40 Gbit/s | USB-C |

Thunderbolt can: Connect video, data, power supply, and PCIe devices.

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **USB** | Universal Serial Bus |
| **HDMI** | High Definition Multimedia Interface |
| **DisplayPort** | Digital video interface |
| **SATA** | Serial ATA (hard drive interface) |
| **M.2** | Compact form factor for SSDs |
| **NVMe** | Non-Volatile Memory Express |
| **PCIe** | PCI Express (expansion cards) |
| **Thunderbolt** | High-speed universal interface |

---

## Exam Tips

### Common Exam Questions

- What is USB and what versions exist?
- Difference between HDMI and DisplayPort
- What is M.2?
- What speed does USB 3.0 have?

### Important to Remember

- **USB 3.0** = 5 Gbit/s = blue port
- **HDMI** = Standard for consumer, **DisplayPort** = Gaming/Professional
- **M.2** = Form factor, can be SATA or NVMe
- **Thunderbolt 3/4** = USB-C connector, but 40 Gbit/s

---

## Practice Exercises

### Exercise 1
Which USB version has a maximum transfer rate of 5 Gbit/s?

**Solution:** **USB 3.0** (SuperSpeed) has a maximum speed of 5 Gbit/s. USB 3.0 ports are often marked in blue.

### Exercise 2
What is the difference between HDMI and DisplayPort?

**Solution:**
| Aspect | HDMI | DisplayPort |
|--------|------|-------------|
| **Primary Use** | Consumer (TV, home theater) | Professional/Gaming (Monitor) |
| **Multi-Monitor** | Limited | Daisy-chain possible |
| **Audio** | Yes | Yes |
| **License Fees** | Yes | No |

### Exercise 3
What is M.2 and which two interfaces can M.2 SSDs use?

**Solution:** **M.2** is a compact form factor for expansion cards, mainly SSDs.

M.2 SSDs can use:
1. **SATA:** Up to 600 MB/s, compatible with older systems
2. **NVMe (via PCIe):** Up to 7,000+ MB/s, significantly faster

---

## Cross-References

- [05-02-03 Storage](./05-02-03-storage-hdd-ssd.md) - SATA and NVMe
- [07-01-03 Protocols](../../07-networks/07-01-network-fundamentals/07-01-03-protocols.md) - Ethernet
- [05-02-06 Graphics Cards](./05-02-06-graphics-cards.md) - PCIe for GPUs
