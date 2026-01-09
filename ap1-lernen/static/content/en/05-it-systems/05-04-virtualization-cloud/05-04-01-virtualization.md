# Virtualization

## Learning Objectives

After this chapter, you should be able to:
- Explain the concept of virtualization
- Distinguish between different types of virtualization
- Know advantages and disadvantages
- Understand hypervisor types

---

## Core Content

### What is Virtualization?

**Virtualization** enables multiple virtual computers (VMs) to run on a single physical computer. Each VM behaves like an independent computer.

```
┌─────────────────────────────────────────────────────────────────┐
│                    VIRTUALIZATION                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Without Virtualization:         With Virtualization:          │
│                                                                 │
│  ┌─────────┐                  ┌─────────────────────────────┐  │
│  │ Server 1│                  │       Physical Server        │  │
│  │(Physical)│                 │  ┌─────┐ ┌─────┐ ┌─────┐   │  │
│  └─────────┘                  │  │ VM1 │ │ VM2 │ │ VM3 │   │  │
│  ┌─────────┐                  │  │Win- │ │Linux│ │Win- │   │  │
│  │ Server 2│                  │  │dows │ │     │ │dows │   │  │
│  │(Physical)│                 │  └─────┘ └─────┘ └─────┘   │  │
│  └─────────┘                  │        Hypervisor           │  │
│  ┌─────────┐                  │        Hardware             │  │
│  │ Server 3│                  └─────────────────────────────┘  │
│  │(Physical)│                                                  │
│  └─────────┘                  → One server instead of three!   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Basic Terms

| Term | Description |
|------|-------------|
| **Host** | The physical computer (host system) |
| **Guest** | The virtual machine |
| **Hypervisor** | Software that enables virtualization |
| **VM (Virtual Machine)** | Simulated computer |
| **Snapshot** | Point-in-time image of a VM |

---

### Hypervisor Types

```
┌────────────────────────────────────────────────────────────────┐
│                  HYPERVISOR TYPES                              │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  TYPE 1 (Bare-Metal)              TYPE 2 (Hosted)             │
│                                                                │
│  ┌─────┐ ┌─────┐ ┌─────┐       ┌─────┐ ┌─────┐              │
│  │ VM1 │ │ VM2 │ │ VM3 │       │ VM1 │ │ VM2 │              │
│  └─────┘ └─────┘ └─────┘       └─────┘ └─────┘              │
│  ┌──────────────────────┐      ┌──────────────────────┐      │
│  │     Hypervisor       │      │     Hypervisor       │      │
│  └──────────────────────┘      └──────────────────────┘      │
│  ┌──────────────────────┐      ┌──────────────────────┐      │
│  │      Hardware        │      │   Operating System   │      │
│  └──────────────────────┘      │     (Windows/Linux)  │      │
│                                └──────────────────────┘      │
│  Examples:                     ┌──────────────────────┐      │
│  • VMware ESXi                 │      Hardware        │      │
│  • Microsoft Hyper-V           └──────────────────────┘      │
│  • Citrix XenServer                                          │
│                                Examples:                      │
│  → Directly on hardware        • VMware Workstation          │
│  → Better performance          • VirtualBox                  │
│                                • Parallels (Mac)             │
│                                                               │
│                                → On operating system         │
│                                → Easier to use               │
│                                                               │
└────────────────────────────────────────────────────────────────┘
```

| Type | Description | Examples | Use Case |
|------|-------------|----------|----------|
| **Type 1** | Runs directly on hardware | VMware ESXi, Hyper-V, XenServer | Data centers, servers |
| **Type 2** | Runs on operating system | VirtualBox, VMware Workstation | Development, testing |

---

### Advantages of Virtualization

| Advantage | Description |
|-----------|-------------|
| **Resource efficiency** | Better utilization of hardware |
| **Cost savings** | Fewer physical servers needed |
| **Isolation** | VMs are separated from each other |
| **Flexibility** | Quickly create new VMs |
| **Snapshots** | Easy backup and recovery |
| **Test environments** | Safe testing |
| **Migration** | VMs can be moved between hosts |

---

### Disadvantages of Virtualization

| Disadvantage | Description |
|--------------|-------------|
| **Overhead** | Hypervisor requires resources |
| **Complexity** | Additional management layer |
| **License costs** | Hypervisor licenses can be expensive |
| **Single Point of Failure** | Host failure affects all VMs |
| **Performance** | Slightly lower than physical servers |

---

### Types of Virtualization

| Type | Description |
|------|-------------|
| **Server virtualization** | Multiple servers on one host |
| **Desktop virtualization** | Virtual workstations (VDI) |
| **Application virtualization** | Running apps in isolation |
| **Network virtualization** | Virtual networks (VLAN, SDN) |
| **Storage virtualization** | Storage pooling |

---

### Container vs. Virtual Machine

```
┌────────────────────────────────────────────────────────────────┐
│               VM vs. CONTAINER                                 │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Virtual Machine                Container                      │
│                                                                │
│  ┌─────┐ ┌─────┐ ┌─────┐       ┌─────┐ ┌─────┐ ┌─────┐      │
│  │App 1│ │App 2│ │App 3│       │App 1│ │App 2│ │App 3│      │
│  ├─────┤ ├─────┤ ├─────┤       └─────┘ └─────┘ └─────┘      │
│  │Guest│ │Guest│ │Guest│       ┌────────────────────────┐    │
│  │ OS  │ │ OS  │ │ OS  │       │   Container Runtime    │    │
│  └─────┘ └─────┘ └─────┘       │      (Docker)          │    │
│  ┌──────────────────────┐      └────────────────────────┘    │
│  │     Hypervisor       │      ┌────────────────────────┐    │
│  └──────────────────────┘      │     Host OS            │    │
│  ┌──────────────────────┐      └────────────────────────┘    │
│  │      Hardware        │      ┌────────────────────────┐    │
│  └──────────────────────┘      │      Hardware          │    │
│                                └────────────────────────┘    │
│  + Complete isolation                                         │
│  + Different OS possible        + Lightweight (MB)           │
│  - Resource-intensive (GB)      + Faster startup             │
│  - Slower startup               - Shared host OS             │
│                                                               │
└────────────────────────────────────────────────────────────────┘
```

| Aspect | VM | Container |
|--------|-----|-----------|
| **Size** | GB (guest OS) | MB |
| **Startup time** | Minutes | Seconds |
| **Isolation** | Complete | Process-level |
| **OS** | Any | Shared kernel |
| **Examples** | VirtualBox, VMware | Docker, Podman |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Virtualization** | Multiple virtual computers on one hardware |
| **Hypervisor** | Software that manages VMs |
| **VM** | Virtual Machine |
| **Host** | Physical computer |
| **Guest** | Virtual machine |
| **Snapshot** | Point-in-time image of a VM |
| **Container** | Lightweight isolation (Docker) |

---

## Exam Tips

### Common Exam Questions

- What is virtualization?
- What is the difference between Type 1 and Type 2 hypervisor?
- Name advantages of virtualization
- What is the difference between VM and container?

### Important to Remember

- **Type 1** = directly on hardware (server), **Type 2** = on operating system (desktop)
- **Advantages:** Efficiency, isolation, snapshots, flexibility
- **Container** = lightweight, faster startup, but shared kernel
- **VM** = complete isolation, own operating system

---

## Practice Exercises

### Exercise 1
What is the difference between a Type 1 and a Type 2 hypervisor?

**Solution:**
- **Type 1 (Bare-Metal):** Runs directly on the hardware without an operating system. Examples: VMware ESXi, Hyper-V. Better performance, for servers.
- **Type 2 (Hosted):** Runs on an operating system like Windows or Linux. Examples: VirtualBox, VMware Workstation. Easier to use, for development.

### Exercise 2
Name three advantages of virtualization.

**Solution:**
1. **Resource efficiency:** Better utilization of hardware
2. **Cost savings:** Fewer physical servers needed
3. **Flexibility:** Quick creation and deletion of VMs

(Additional: Isolation, snapshots, easy migration)

### Exercise 3
What is the difference between a VM and a container?

**Solution:**
| Aspect | VM | Container |
|--------|-----|-----------|
| **Operating system** | Own guest OS | Shared host kernel |
| **Size** | Several GB | Few MB |
| **Startup time** | Minutes | Seconds |
| **Isolation** | Complete | Process-level |

---

## Cross-References

- [05-04-02 Cloud Computing](./05-04-02-cloud-computing.md) - Cloud services
- [05-04-03 Virtual Desktops](./05-04-03-virtual-desktops.md) - VDI
- [05-03-01 Operating System Fundamentals](../05-03-operating-systems/05-03-01-fundamentals-operating-systems.md) - OS
