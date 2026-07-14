# Storage Systems (DAS/NAS/SAN)

## Learning Objectives

After this chapter you should be able to:
- Distinguish DAS, NAS and SAN
- Classify block-based and file-based access
- Select a suitable storage concept

---

## Core Content

### The Three Architectures

| Concept | Connection | Access | Use |
|---------|-----------|--------|-----|
| **DAS** (Direct Attached Storage) | directly on the server (e.g. internal disks, USB) | block-based | single server, simple & cheap |
| **NAS** (Network Attached Storage) | over the **LAN** (Ethernet) | **file-based** (SMB/NFS) | shared file storage on the network |
| **SAN** (Storage Area Network) | dedicated storage network (Fibre Channel/iSCSI) | **block-based** | data centers, high performance/scalability |

- **NAS** provides **file shares** (like a network drive), easy to set up.
- **SAN** provides **block storage** (like a local disk for the server), powerful but complex/expensive.

> **Note:** In AP1 only **NAS** is still referenced; **SAN** has moved into the AP2/advanced area (see [catalogue changes](../00-exam-overview/00-02-catalog-changes.md)).

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **DAS** | Storage connected directly to the server |
| **NAS** | File-based network storage (LAN) |
| **SAN** | Block-based, dedicated storage network |
| **Block- vs. file-based** | Raw blocks (like a disk) vs. files/shares |

---

## Exam Tips

- **NAS = file-based (LAN)**, **SAN = block-based (its own network)** – the core difference.
- For a given scenario, justify the appropriate concept (cost vs. performance vs. shared use).
- Combine storage systems with **RAID** (fault tolerance) and **backup** (data protection).

---

## Practice Exercise

**Task (based on ConSystem GmbH):** A customer needs shared file access for several employees and a high-performance storage network for virtualized servers. Recommend DAS, NAS or SAN for each and justify your choice.

---

## Cross-References

- [05-04 Redundant Systems (RAID)](./05-04-redundante-systeme.md)
- [05-08 Server Systems](./05-08-serversysteme.md)
