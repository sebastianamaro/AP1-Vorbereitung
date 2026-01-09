# Operating System Fundamentals

## Learning Objectives

After this chapter, you should be able to:
- Know the tasks of an operating system
- Distinguish between different operating systems
- Understand basic concepts
- Select operating systems for use cases

---

## Core Content

### What is an Operating System?

An **operating system (OS)** is software that manages hardware and provides applications with an interface to the hardware.

```
┌─────────────────────────────────────────────────────────────────┐
│                OPERATING SYSTEM LAYERS                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │              APPLICATIONS (Programs)                     │   │
│  │         (Word, Browser, Games, ...)                      │   │
│  └─────────────────────────────────────────────────────────┘   │
│                           │                                     │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │               OPERATING SYSTEM                           │   │
│  │  ┌────────────────────────────────────────────────────┐ │   │
│  │  │                    Shell                            │ │   │
│  │  │           (User Interface)                          │ │   │
│  │  └────────────────────────────────────────────────────┘ │   │
│  │  ┌────────────────────────────────────────────────────┐ │   │
│  │  │                    Kernel                           │ │   │
│  │  │       (Core - Hardware Management)                  │ │   │
│  │  └────────────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────────────┘   │
│                           │                                     │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    HARDWARE                              │   │
│  │         (CPU, RAM, Hard Drive, ...)                      │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Tasks of an Operating System

| Task | Description |
|------|-------------|
| **Process Management** | Start, terminate programs, allocate CPU time |
| **Memory Management** | Manage RAM, provide virtual memory |
| **File Management** | File system, reading/writing files |
| **Device Management** | Load drivers, access hardware |
| **User Management** | User accounts, permissions, login |
| **Network Management** | Network connections, protocols |

```
┌────────────────────────────────────────────────────────────────┐
│              OPERATING SYSTEM TASKS                            │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │
│  │   Process    │  │   Memory     │  │    File      │        │
│  │  Management  │  │  Management  │  │  Management  │        │
│  └──────────────┘  └──────────────┘  └──────────────┘        │
│                                                                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │
│  │   Device     │  │    User      │  │  Network     │        │
│  │  Management  │  │  Management  │  │  Management  │        │
│  └──────────────┘  └──────────────┘  └──────────────┘        │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Kernel and Shell

| Component | Description |
|-----------|-------------|
| **Kernel** | Core of the OS, direct hardware access, resource management |
| **Shell** | User interface (graphical or command line) |

**Kernel Types:**
- **Monolithic Kernel:** All functions in kernel (Linux, Windows NT)
- **Microkernel:** Minimal kernel, rest as services (Minix, QNX)
- **Hybrid Kernel:** Combination (Windows, macOS)

---

### Operating System Types

| Type | Description | Examples |
|------|-------------|----------|
| **Desktop OS** | For PCs and laptops | Windows, macOS, Linux |
| **Server OS** | For servers | Windows Server, Linux |
| **Mobile OS** | For smartphones/tablets | Android, iOS |
| **Embedded OS** | For embedded systems | Linux, RTOS |

---

### Comparison: Windows, Linux, macOS

| Aspect | Windows | Linux | macOS |
|--------|---------|-------|-------|
| **Manufacturer** | Microsoft | Open Source | Apple |
| **License** | Proprietary (paid) | Open Source (usually free) | Proprietary (tied to Apple hardware) |
| **Kernel** | NT (Hybrid) | Linux (Monolithic) | XNU (Hybrid) |
| **GUI** | Windows Shell | GNOME, KDE, etc. | Aqua |
| **CLI** | CMD, PowerShell | Bash, Zsh | Terminal (Zsh) |
| **Desktop Market Share** | ~75% | ~3% | ~15% |
| **Server Usage** | Medium | Very high | Low |

---

### File Systems

| File System | Operating System | Properties |
|-------------|------------------|------------|
| **NTFS** | Windows | Permissions, compression, large files |
| **FAT32** | All | Compatible, max. 4 GB per file |
| **exFAT** | All | For USB sticks, large files |
| **ext4** | Linux | Standard under Linux |
| **APFS** | macOS | SSD-optimized, encryption |

---

### Process and Thread

```
┌────────────────────────────────────────────────────────────────┐
│                 PROCESS vs. THREAD                             │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  PROCESS (own memory space)                                    │
│  ┌────────────────────────────────────────────────────────┐   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐    │   │
│  │  │  Thread 1   │  │  Thread 2   │  │  Thread 3   │    │   │
│  │  │             │  │             │  │             │    │   │
│  │  └─────────────┘  └─────────────┘  └─────────────┘    │   │
│  │                                                        │   │
│  │  Shared memory within the process                      │   │
│  └────────────────────────────────────────────────────────┘   │
│                                                                │
│  • Process = running program with own memory space            │
│  • Thread = lightweight execution unit within a process       │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Term | Description |
|------|-------------|
| **Process** | Running program with own memory space |
| **Thread** | Execution strand within a process |
| **Multitasking** | Multiple processes seemingly simultaneously |
| **Multithreading** | Multiple threads per process |

---

### User Permissions

| Windows | Linux | Description |
|---------|-------|-------------|
| Administrator | root | Full system privileges |
| Standard User | user | Restricted privileges |
| Guest | guest | Minimal privileges |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Operating System** | Software for hardware management |
| **Kernel** | Core of the operating system |
| **Shell** | User interface |
| **Process** | Running program |
| **Thread** | Execution strand |
| **Driver** | Software for hardware control |
| **File System** | Organization of files (NTFS, ext4) |

---

## Exam Tips

### Common Exam Questions

- What are the tasks of an operating system?
- What is the difference between kernel and shell?
- What is the difference between process and thread?

### Important to Remember

- **Operating System** = Interface between hardware and applications
- **Kernel** = Core, manages hardware
- **Shell** = User interface (GUI or CLI)
- **NTFS** = Windows, **ext4** = Linux

---

## Practice Exercises

### Exercise 1
Name four tasks of an operating system.

**Solution:**
1. **Process Management:** Start, terminate programs, allocate CPU time
2. **Memory Management:** Manage RAM, virtual memory
3. **File Management:** File system, reading and writing
4. **Device Management:** Drivers, access hardware

(Additional: User management, Network management)

### Exercise 2
What is the difference between kernel and shell?

**Solution:**
- **Kernel:** The core of the operating system, has direct access to hardware and manages resources (CPU, RAM, devices)
- **Shell:** The user interface through which the user interacts with the system (graphical like Windows Desktop or command line like Bash)

### Exercise 3
Which file system is recommended for a Windows server and why?

**Solution:** **NTFS** is recommended because:
- Support for access permissions (security)
- Large files possible (>4 GB)
- Journaling for data integrity
- File compression and encryption
- Standard under Windows

---

## Cross-References

- [05-03-02 BIOS/UEFI](./05-03-02-bios-uefi.md) - System startup
- [05-03-03 Command Line](./05-03-03-command-line.md) - Shell commands
- [05-04-01 Virtualization](../05-04-virtualization-cloud/05-04-01-virtualization.md) - Virtual machines
