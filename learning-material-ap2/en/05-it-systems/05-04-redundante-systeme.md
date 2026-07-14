# Redundant Systems (RAID, High Availability)

## Learning Objectives

After this chapter you should be able to:
- Understand redundancy as a means of increasing availability
- Distinguish the most important RAID levels
- Classify high availability and failover

---

## Core Content

### Redundancy

**Redundancy** means keeping critical components available **multiple times**, so that when one component fails another takes over → higher **availability**. Examples: dual power supplies, redundant network paths, clusters, mirrored servers.

### RAID (Redundant Array of Independent Disks)

Combines several hard disks into an array for **fault tolerance** and/or **performance**:

| RAID | Principle | Redundancy | Usable capacity |
|------|-----------|------------|-----------------|
| **RAID 0** | Striping (splitting) | **none** (performance only) | 100 % |
| **RAID 1** | Mirroring | yes (1 disk may fail) | 50 % |
| **RAID 5** | Striping + distributed parity | 1 disk may fail | (n−1)/n |
| **RAID 6** | like 5, double parity | 2 disks may fail | (n−2)/n |
| **RAID 10** | combination 1+0 (mirrored stripes) | yes | 50 % |

> **Note:** RAID 0 offers **no** redundancy. RAID is **not a substitute for a backup** (it does not protect against deletion/ransomware).

### High Availability (HA)

- **Failover / cluster:** automatic takeover by a standby system
- **Availability** is often measured in "nines" (e.g. 99.9 % ≈ 8.7 h downtime/year)
- Further measures: USV (Unterbrechungsfreie Stromversorgung / uninterruptible power supply, for power), redundant network connection, geo-redundant sites

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Redundancy** | Multiple provisioning of critical components |
| **RAID** | Disk array for fault tolerance/performance |
| **Parity** | Check information for reconstruction when a disk fails |
| **Failover** | Automatic takeover by a standby system |

---

## Exam Tips

- Know the **RAID levels** and their redundancy/usable capacity (especially 0/1/5/10).
- **RAID ≠ backup** – a frequent exam statement.
- Link availability to concrete measures (RAID, USV, cluster).
- **Note:** RAID/SAN have moved from AP1 into the AP2/advanced area (see [catalogue changes](../00-exam-overview/00-02-catalog-changes.md)).

---

## Practice Exercise

**Task (based on ConSystem GmbH):** A customer wants to increase availability. Explain RAID 1, RAID 5 and RAID 10 with their respective fault tolerance and why RAID does not replace a backup.

---

## Cross-References

- [05-06 Storage Systems](./05-06-speichersysteme.md)
- [05-07 Uninterruptible Power Supply](./05-07-usv.md)
