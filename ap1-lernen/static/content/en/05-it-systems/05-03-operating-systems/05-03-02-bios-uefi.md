# BIOS and UEFI

## Learning Objectives

After this chapter, you should be able to:
- Know the difference between BIOS and UEFI
- Explain the tasks of BIOS/UEFI
- Understand the boot process
- Know UEFI security features

---

## Core Content

### What is BIOS/UEFI?

**BIOS** (Basic Input/Output System) and **UEFI** (Unified Extensible Firmware Interface) are firmware that starts first when the computer is turned on and initializes the hardware.

```
┌─────────────────────────────────────────────────────────────────┐
│                    BOOT PROCESS                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   1. Power on                                                   │
│      ↓                                                          │
│   2. BIOS/UEFI starts (Firmware)                               │
│      ↓                                                          │
│   3. POST (Power-On Self-Test)                                 │
│      ↓                                                          │
│   4. Initialize hardware                                        │
│      ↓                                                          │
│   5. Find boot device                                          │
│      ↓                                                          │
│   6. Load bootloader                                           │
│      ↓                                                          │
│   7. Start operating system                                    │
│      ↓                                                          │
│   8. System ready                                              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### BIOS (Legacy)

**BIOS** is the older firmware technology (since 1975).

| Property | BIOS |
|----------|------|
| **Interface** | Text-based |
| **Control** | Keyboard only |
| **Partition Table** | MBR (Master Boot Record) |
| **Max. Hard Drive Size** | 2.2 TB |
| **Max. Partitions** | 4 primary |
| **Boot Mode** | 16-bit Real Mode |
| **Security** | Limited |

---

### UEFI (Modern)

**UEFI** is the modern successor to BIOS (since ~2010).

| Property | UEFI |
|----------|------|
| **Interface** | Graphical (GUI) |
| **Control** | Mouse + Keyboard |
| **Partition Table** | GPT (GUID Partition Table) |
| **Max. Hard Drive Size** | 9.4 ZB (Zettabyte) |
| **Max. Partitions** | 128+ |
| **Boot Mode** | 32/64-bit |
| **Security** | Secure Boot |

---

### Comparison: BIOS vs. UEFI

```
┌────────────────────────────────────────────────────────────────┐
│                   BIOS vs. UEFI                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  BIOS (Legacy)                    UEFI (Modern)               │
│  ┌─────────────────────┐         ┌─────────────────────┐      │
│  │ ████████████████████│         │ ┌────┐  ┌────┐     │      │
│  │ █ BIOS Setup      █│         │ │    │  │    │ GUI │      │
│  │ █ ──────────────  █│         │ └────┘  └────┘     │      │
│  │ █ > Boot Order    █│         │ ╔═══════════════╗  │      │
│  │ █ > Date/Time     █│         │ ║ Boot Options  ║  │      │
│  │ █ > Exit          █│         │ ╚═══════════════╝  │      │
│  │ ████████████████████│         │                    │      │
│  └─────────────────────┘         └─────────────────────┘      │
│  Text-based, keyboard only       Graphical, mouse possible    │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Aspect | BIOS | UEFI |
|--------|------|------|
| **Partition Table** | MBR | GPT |
| **Max. HDD Size** | 2.2 TB | >9 ZB |
| **Boot Time** | Slower | Faster |
| **Interface** | Text | Graphical |
| **Secure Boot** | No | Yes |
| **Network Boot** | Limited | Extensive |

---

### MBR vs. GPT

| Aspect | MBR | GPT |
|--------|-----|-----|
| **Full Name** | Master Boot Record | GUID Partition Table |
| **Max. Hard Drive Size** | 2.2 TB | 9.4 ZB |
| **Max. Partitions** | 4 primary | 128+ |
| **Redundancy** | None | Backup at end |
| **UEFI Support** | Via CSM | Native |

---

### POST (Power-On Self-Test)

**POST** is a self-test during system startup.

```
┌────────────────────────────────────────────────────────────────┐
│                    POST SEQUENCE                               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  1. Check CPU                                                  │
│     ↓                                                          │
│  2. Check BIOS/UEFI ROM                                       │
│     ↓                                                          │
│  3. Check and count RAM                                       │
│     ↓                                                          │
│  4. Initialize graphics card                                   │
│     ↓                                                          │
│  5. Check keyboard                                             │
│     ↓                                                          │
│  6. Detect storage devices                                     │
│     ↓                                                          │
│  7. POST complete → Load operating system                     │
│                                                                │
│  On error: Beep codes or error message                        │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

**Beep Codes:** Signal tones indicate errors (e.g., RAM problem = multiple beeps)

---

### Secure Boot

**Secure Boot** is a UEFI security feature.

| Aspect | Description |
|--------|-------------|
| **Function** | Verifies digital signatures during boot |
| **Protects against** | Bootkits, rootkits, unsigned software |
| **Certificates** | Microsoft and hardware manufacturers |
| **Can be disabled** | Yes, for alternative operating systems |

```
┌────────────────────────────────────────────────────────────────┐
│                    SECURE BOOT                                 │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Bootloader           Signature        UEFI                   │
│   start                verification     Firmware               │
│       │                   │                  │                 │
│       │    Signature?     │                  │                 │
│       ├──────────────────►│                  │                 │
│       │                   │   Valid?         │                 │
│       │                   ├─────────────────►│                 │
│       │                   │                  │                 │
│       │◄─────── YES: Boot allowed ──────────│                 │
│       │                   │                  │                 │
│       │◄────── NO: Boot blocked ────────────│                 │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### UEFI Settings

| Setting | Description |
|---------|-------------|
| **Boot Order** | Order of boot devices |
| **Secure Boot** | Enabled/Disabled |
| **CSM** | Compatibility Support Module (BIOS mode) |
| **TPM** | Trusted Platform Module (security chip) |
| **Fast Boot** | Accelerated startup |
| **Virtualization** | Intel VT-x / AMD-V |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **BIOS** | Basic Input/Output System (Legacy firmware) |
| **UEFI** | Unified Extensible Firmware Interface |
| **POST** | Power-On Self-Test |
| **MBR** | Master Boot Record (Legacy partition table) |
| **GPT** | GUID Partition Table (modern partition table) |
| **Secure Boot** | Signature verification during boot |
| **CSM** | Compatibility Support Module (BIOS emulation) |
| **Bootloader** | Loads the operating system |

---

## Exam Tips

### Common Exam Questions

- What is the difference between BIOS and UEFI?
- What is POST?
- What is Secure Boot?
- What is the difference between MBR and GPT?

### Important to Remember

- **BIOS** = old, text-based, MBR, max. 2.2 TB
- **UEFI** = modern, graphical, GPT, Secure Boot
- **POST** = Self-test during system startup
- **Secure Boot** = Signature verification, protection against bootkits

---

## Practice Exercises

### Exercise 1
Name three differences between BIOS and UEFI.

**Solution:**
1. **Interface:** BIOS is text-based, UEFI has a graphical interface
2. **Partition Table:** BIOS uses MBR (max. 2.2 TB), UEFI uses GPT (>9 ZB)
3. **Security:** UEFI offers Secure Boot, BIOS does not

(Additional: Boot speed, mouse support, 32/64-bit mode)

### Exercise 2
What is POST and what happens during it?

**Solution:** **POST (Power-On Self-Test)** is a self-test during system startup. The following components are checked:
- CPU
- RAM (counted and tested)
- Graphics card
- Keyboard
- Storage devices

On errors, beep codes (signal tones) are output or error messages are displayed.

### Exercise 3
Why can a 4 TB hard drive not be fully utilized with MBR partitioning?

**Solution:** **MBR (Master Boot Record)** supports hard drives up to a maximum of **2.2 TB**. With a 4 TB hard drive, 1.8 TB would not be usable. Solution: Use **GPT (GUID Partition Table)**, which supports hard drives >9 ZB and requires UEFI.

---

## Cross-References

- [05-03-01 Operating System Fundamentals](./05-03-01-fundamentals-operating-systems.md) - OS overview
- [05-02-03 Storage](../05-02-hardware/05-02-03-storage-hdd-ssd.md) - HDD and SSD
- [04-03-03 OS Hardening](../../04-it-security/04-03-protective-measures/04-03-03-os-hardening.md) - Secure Boot
