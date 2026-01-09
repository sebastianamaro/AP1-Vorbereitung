# NAS and Availability

## Learning Objectives

After this chapter, you should be able to:
- Explain the term NAS
- Understand the advantages of NAS for availability
- Know the differences to direct storage
- Describe use cases

**Note:** NAS replaces RAID/SAN in the 2025 exam catalog as a topic for availability!

---

## Core Content

### What is a NAS?

**NAS (Network Attached Storage)** is a storage device that is accessible over the network and provides files to multiple users.

```
┌─────────────────────────────────────────────────────────────────┐
│                    NAS in the NETWORK                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌─────────┐     ┌─────────┐     ┌─────────┐                  │
│   │   PC    │     │ Laptop  │     │ Tablet  │                  │
│   └────┬────┘     └────┬────┘     └────┬────┘                  │
│        │               │               │                        │
│        └───────────────┼───────────────┘                        │
│                        │                                        │
│                  ┌─────┴─────┐                                  │
│                  │  Switch   │                                  │
│                  └─────┬─────┘                                  │
│                        │                                        │
│                  ┌─────┴─────┐                                  │
│                  │           │                                  │
│                  │    NAS    │ ◄── Central network storage     │
│                  │           │                                  │
│                  │ ┌───┐┌───┐│                                  │
│                  │ │HDD││HDD││ ◄── Multiple hard drives        │
│                  │ └───┘└───┘│                                  │
│                  └───────────┘                                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Advantages of NAS

| Advantage | Description |
|-----------|-------------|
| **Central Storage** | All data in one place |
| **Network Access** | Accessible from any device on the network |
| **Data Backup** | Backup functions integrated |
| **Redundancy** | Through multiple hard drives |
| **User Rights** | Access control possible |
| **Remote Access** | Also accessible from outside |

---

### NAS Functions for Availability

```
┌─────────────────────────────────────────────────────────────────┐
│           NAS FOR AVAILABILITY                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │               DATA REDUNDANCY                             │  │
│  │  • Multiple hard drives store the same data               │  │
│  │  • If one drive fails: Data still available               │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │               HOT-SWAP                                    │  │
│  │  • Hard drives can be replaced during operation           │  │
│  │  • No downtime during repair                              │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │               BACKUP INTEGRATION                          │  │
│  │  • Automatic backups to external media                    │  │
│  │  • Cloud synchronization                                  │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │               SNAPSHOT FUNCTION                           │  │
│  │  • Point-in-time snapshots of data                        │  │
│  │  • Recovery of earlier versions                           │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Comparison: Storage Connectivity

| Type | Description | Access |
|------|-------------|--------|
| **DAS** | Direct Attached Storage (directly to PC) | One device |
| **NAS** | Network Attached Storage | Over network (file level) |
| **SAN** | Storage Area Network | Over network (block level) |

```
┌────────────────────────────────────────────────────────────────┐
│              STORAGE CONNECTIVITY                              │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  DAS (Direct Attached Storage)                                 │
│  ┌──────┐                                                      │
│  │  PC  │────[USB/SATA]────[HDD]                              │
│  └──────┘                                                      │
│  → Only one PC has access                                      │
│                                                                │
│  NAS (Network Attached Storage)                                │
│  ┌──────┐                                                      │
│  │  PC  │────┐                                                 │
│  └──────┘    │                                                 │
│  ┌──────┐    ├──[Network]──[NAS]                              │
│  │  PC  │────┘                                                 │
│  └──────┘                                                      │
│  → Multiple PCs have access via SMB/NFS                        │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### NAS Protocols

| Protocol | Description | Platform |
|----------|-------------|----------|
| **SMB/CIFS** | Server Message Block | Windows, macOS, Linux |
| **NFS** | Network File System | Linux/Unix |
| **AFP** | Apple Filing Protocol | macOS (deprecated) |
| **iSCSI** | Block-level over network | All |

---

### Use Cases

| Scenario | Description |
|----------|-------------|
| **Small Businesses** | Central file storage for all employees |
| **Home Network** | Media server, backup for all devices |
| **Backup Target** | 3-2-1 rule: Copy on NAS |
| **Collaboration** | Shared access to project files |
| **Archiving** | Long-term storage |

---

### NAS and the 3-2-1 Backup Rule

```
┌────────────────────────────────────────────────────────────────┐
│              3-2-1 BACKUP WITH NAS                             │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  3: Three copies of the data                                   │
│     [Original on PC] [Backup on NAS] [Backup in Cloud]         │
│                                                                │
│  2: On two different media types                               │
│     [PC-SSD] and [NAS-HDD] and [Cloud]                        │
│                                                                │
│  1: One copy offsite                                           │
│     [Cloud backup] or [External backup at relatives]           │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **NAS** | Network Attached Storage |
| **DAS** | Direct Attached Storage |
| **SMB** | Server Message Block (protocol) |
| **NFS** | Network File System (protocol) |
| **Hot-Swap** | Replacement during operation |
| **Snapshot** | Point-in-time copy of data state |
| **Redundancy** | Data stored multiple times |

---

## Exam Tips

### Common Exam Questions

- What is a NAS?
- How does a NAS support data availability?
- What is the difference between DAS and NAS?
- Which protocols are used for NAS?

### Important to Remember

- **NAS** = Network storage for multiple users
- **Availability** through redundancy and hot-swap
- **SMB** for Windows, **NFS** for Linux
- NAS is ideal for central backups

---

## Practice Exercises

### Exercise 1
What is a NAS and what is it used for?

**Solution:** A **NAS (Network Attached Storage)** is a storage device that is accessible over the network. It serves as a central storage location for files that multiple users can access simultaneously. Typical use cases include file sharing, backups, and media servers.

### Exercise 2
How does a NAS contribute to data availability?

**Solution:** A NAS increases availability through:
1. **Redundancy:** Multiple hard drives store the same data
2. **Hot-Swap:** Defective drives can be replaced during operation
3. **Snapshots:** Earlier data versions can be recovered
4. **Backup Integration:** Automatic backups to other media

### Exercise 3
What is the difference between DAS and NAS?

**Solution:**
- **DAS (Direct Attached Storage):** Storage is directly connected to a computer (e.g., USB hard drive). Only this computer has access.
- **NAS (Network Attached Storage):** Storage is accessible over the network. Multiple computers can access it simultaneously.

### Exercise 4
Which protocols are used for NAS access?

**Solution:**
- **SMB/CIFS:** Standard for Windows, also macOS and Linux
- **NFS:** Standard for Linux/Unix systems
- **AFP:** For older macOS systems (deprecated)
- **iSCSI:** For block-level access

---

## Cross-References

- [04-01-01 CIA Triad](../../04-it-security/04-01-protection-goals/04-01-01-cia-triad.md) - Availability
- [05-02-03 Storage](./05-02-03-storage-hdd-ssd.md) - HDD and SSD
- [05-05-02 Backup Strategies](../05-05-data-backup/05-05-02-backup-strategies.md) - 3-2-1 Rule
