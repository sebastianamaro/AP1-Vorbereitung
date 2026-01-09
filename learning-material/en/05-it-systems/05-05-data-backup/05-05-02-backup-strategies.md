# Backup Strategies

## Learning Objectives

After this chapter, you should be able to:
- Explain the 3-2-1 backup rule
- Know backup media and their suitability
- Understand backup rotation schemes
- Plan a backup strategy

---

## Core Content

### The 3-2-1 Backup Rule

The **3-2-1 rule** is the gold standard for data backup.

```
┌─────────────────────────────────────────────────────────────────┐
│                    3-2-1 BACKUP RULE                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   3 ─────► 3 Copies of the data                                │
│            ┌─────────┐ ┌─────────┐ ┌─────────┐                │
│            │Original │ │ Backup 1│ │ Backup 2│                │
│            └─────────┘ └─────────┘ └─────────┘                │
│                                                                 │
│   2 ─────► 2 Different storage media                           │
│            ┌─────────┐ ┌─────────┐                            │
│            │   SSD   │ │   NAS   │                            │
│            └─────────┘ └─────────┘                            │
│            Different technologies!                              │
│                                                                 │
│   1 ─────► 1 Copy offsite (external location)                  │
│            ┌─────────────────────┐                            │
│            │   Cloud Backup      │  or external medium        │
│            │   or external site  │  at different location     │
│            └─────────────────────┘                            │
│                                                                 │
│   Protection against: Hardware failure, theft, fire, ransomware│
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

| Rule | Meaning | Protection Against |
|------|---------|-------------------|
| **3** | 3 copies of the data | Data loss in general |
| **2** | 2 different media types | Hardware-specific failures |
| **1** | 1 copy external/offsite | Local disasters (fire, theft) |

---

### Extended: 3-2-1-1-0 Rule

The modern extension for increased security:

| Rule | Meaning |
|------|---------|
| **3** | 3 copies of the data |
| **2** | 2 different media types |
| **1** | 1 copy external/offsite |
| **1** | 1 copy offline (air-gap) |
| **0** | 0 errors (verified backups) |

**Air-Gap:** Backup physically disconnected from network → Protection against ransomware

---

### Backup Media

| Medium | Advantages | Disadvantages | Use Case |
|--------|------------|---------------|----------|
| **External HDD** | Inexpensive, high capacity | Sensitive, mechanical | Home, SMB |
| **External SSD** | Fast, robust | More expensive | Mobile, important data |
| **NAS** | Network access, redundant | Initially expensive | Enterprise |
| **Tape drive** | Very cheap/TB, durable | Slow, sequential | Archive, large enterprise |
| **Cloud** | Offsite, scalable | Ongoing costs, data protection | Offsite backup |
| **USB stick** | Portable, inexpensive | Low capacity | Individual files |

---

### Backup Rotation: Grandfather-Father-Son (GFS)

The **GFS principle** (Grandfather-Father-Son) is a proven rotation scheme.

```
┌────────────────────────────────────────────────────────────────┐
│           GRANDFATHER-FATHER-SON PRINCIPLE                     │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  SON (Daily) ──────────────────────────────────────────────── │
│  Mon   Tue   Wed   Thu   Fri                                   │
│  [S1]  [S2]  [S3]  [S4]  [S5]                                │
│                            ↓                                   │
│  FATHER (Weekly) ─────────────────────────────────────────── │
│  Week 1    Week 2    Week 3    Week 4                         │
│  [F1]      [F2]      [F3]      [F4]                           │
│                                  ↓                             │
│  GRANDFATHER (Monthly) ───────────────────────────────────── │
│  Jan    Feb    Mar    Apr    ...    Dec                       │
│  [G1]   [G2]   [G3]   [G4]   ...    [G12]                     │
│                                                                │
│  Media required: 5 + 4 + 12 = 21 (for one year)              │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Generation | Frequency | Retention | Purpose |
|------------|-----------|-----------|---------|
| **Son** | Daily | 1 week (5 media) | Current changes |
| **Father** | Weekly | 1 month (4 media) | Weekly states |
| **Grandfather** | Monthly | 1 year (12 media) | Long-term archive |

---

### Backup Window and RPO/RTO

```
┌────────────────────────────────────────────────────────────────┐
│                    RPO and RTO                                 │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  ◄─────── RPO ────────►│◄─────────── RTO ──────────────►     │
│                        │                                       │
│  Last      Data        │   Outage      System                 │
│  Backup    loss        │               OK again               │
│    │          │        │       │           │                   │
│  ──┴──────────┴────────┼───────┴───────────┴──────────► Time  │
│                        │                                       │
│                    Outage                                      │
│                    occurs                                      │
│                                                                │
│  RPO = Recovery Point Objective                                │
│        How much data loss is acceptable?                      │
│        (e.g., max. 4 hours = 4h RPO)                          │
│                                                                │
│  RTO = Recovery Time Objective                                 │
│        How long may recovery take?                            │
│        (e.g., max. 2 hours = 2h RTO)                          │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Term | Definition | Example |
|------|------------|---------|
| **RPO** | Recovery Point Objective - max. acceptable data loss | RPO 4h = max. 4 hours data loss |
| **RTO** | Recovery Time Objective - max. recovery time | RTO 2h = system online in 2h |
| **Backup window** | Time period for data backup | Nights 10pm-6am |

---

### Backup Best Practices

| Practice | Description |
|----------|-------------|
| **Test regularly** | Verify restore regularly! |
| **Encryption** | Encrypt backup data |
| **Documentation** | Document backup processes |
| **Monitoring** | Monitor backup success |
| **Versioning** | Keep multiple backup versions |
| **Automation** | Run backups automatically |

---

### Backup Strategies Comparison

| Strategy | Description | Suitable For |
|----------|-------------|--------------|
| **Full backup only** | Simple, lots of storage | Small data volumes |
| **Full + Incremental** | Efficient, complex restore | Large data volumes |
| **Full + Differential** | Compromise | Medium requirements |
| **Continuous (CDP)** | Real-time backup | Critical systems |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **3-2-1 Rule** | 3 copies, 2 media, 1 external |
| **GFS** | Grandfather-Father-Son rotation |
| **RPO** | Recovery Point Objective (max. data loss) |
| **RTO** | Recovery Time Objective (max. downtime) |
| **Air-Gap** | Physically separated backup |
| **Offsite** | Backup at external location |
| **CDP** | Continuous Data Protection |

---

## Exam Tips

### Common Exam Questions

- What does the 3-2-1 rule mean?
- What is RPO and RTO?
- Explain the Grandfather-Father-Son principle

### Important to Remember

- **3-2-1:** 3 copies, 2 media types, 1 external
- **RPO:** How much data loss is acceptable?
- **RTO:** How long may recovery take?
- **Backups must be tested!**

---

## Practice Exercises

### Exercise 1
Explain the 3-2-1 backup rule.

**Solution:**
- **3:** At least 3 copies of the data (original + 2 backups)
- **2:** On at least 2 different storage media (e.g., internal SSD + NAS)
- **1:** At least 1 copy at an external location (cloud or physically external)

This rule protects against various risks: hardware failure (2 media), local disasters like fire or theft (1 external).

### Exercise 2
A company has the following requirements: Maximum data loss of 4 hours, system must be running again within 2 hours. What are the RPO and RTO?

**Solution:**
- **RPO (Recovery Point Objective):** 4 hours
  - Backups must be performed at least every 4 hours
- **RTO (Recovery Time Objective):** 2 hours
  - Recovery must be possible in max. 2 hours

### Exercise 3
How many backup media are needed for the Grandfather-Father-Son principle for one year?

**Solution:**
- **Son (daily):** 5 media (Mon-Fri)
- **Father (weekly):** 4 media (4 weeks)
- **Grandfather (monthly):** 12 media (12 months)

**Total: 21 media** for a complete year with daily, weekly, and monthly recovery points.

### Exercise 4
Why is an air-gap backup important?

**Solution:** An **air-gap backup** is physically disconnected from the network (e.g., external hard drive in a safe). It provides special protection against **ransomware**, which would encrypt all accessible backups. Since the air-gap backup is not online, the malware cannot reach it.

---

## Cross-References

- [05-05-01 Backup Types](./05-05-01-backup-types.md) - Full, Incr., Diff.
- [05-02-04 NAS and Availability](../05-02-hardware/05-02-04-nas-availability.md) - NAS as backup target
- [04-02-01 Threat Types](../../04-it-security/04-02-threats-risks/04-02-01-threat-types.md) - Ransomware
