# Backup Types

## Learning Objectives

After this chapter, you should be able to:
- Know the different backup types
- Explain differences between full, differential, and incremental backups
- Evaluate advantages and disadvantages of backup types
- Select appropriate backup types for scenarios

---

## Core Content

### What is a Backup?

A **backup** (data backup) is a copy of data that can be used for recovery in case of data loss.

```
┌─────────────────────────────────────────────────────────────────┐
│                    BACKUP BASIC PRINCIPLE                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ORIGINAL DATA                      BACKUP                     │
│   ┌─────────────────┐              ┌─────────────────┐         │
│   │  Documents      │    ───►      │  Documents      │         │
│   │  Images         │   Copying    │  Images         │         │
│   │  Projects       │              │  Projects       │         │
│   └─────────────────┘              └─────────────────┘         │
│                                                                 │
│   In case of data loss:                                        │
│                                                                 │
│   ┌─────────────────┐              ┌─────────────────┐         │
│   │      X          │    ◄───      │  Documents      │         │
│   │   Lost!         │   Restore    │  Images         │         │
│   │                 │              │  Projects       │         │
│   └─────────────────┘              └─────────────────┘         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### The Three Backup Types

#### 1. Full Backup

```
┌────────────────────────────────────────────────────────────────┐
│                    FULL BACKUP                                 │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Day 1      Day 2      Day 3      Day 4      Day 5           │
│                                                                │
│  ┌────┐    ┌────┐    ┌────┐    ┌────┐    ┌────┐             │
│  │████│    │████│    │████│    │████│    │████│             │
│  │████│    │████│    │████│    │████│    │████│             │
│  │████│    │████│    │████│    │████│    │████│             │
│  │████│    │████│    │████│    │████│    │████│             │
│  │████│    │████│    │████│    │████│    │████│             │
│  └────┘    └────┘    └────┘    └────┘    └────┘             │
│   100%      100%      100%      100%      100%               │
│                                                                │
│  → All data is backed up completely each time               │
│  → High storage requirement                                   │
│  → Simple recovery                                            │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Property | Description |
|----------|-------------|
| **Principle** | All data is backed up |
| **Storage requirement** | High (always full data amount) |
| **Backup duration** | Long |
| **Recovery** | Fast, only one backup needed |

---

#### 2. Incremental Backup

```
┌────────────────────────────────────────────────────────────────┐
│                INCREMENTAL BACKUP                              │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Day 1      Day 2      Day 3      Day 4      Day 5           │
│  (Full)    (Incr.)    (Incr.)    (Incr.)    (Incr.)          │
│                                                                │
│  ┌────┐    ┌────┐    ┌────┐    ┌────┐    ┌────┐             │
│  │████│    │░░░░│    │░░░░│    │░░░░│    │░░░░│             │
│  │████│    │░░░░│    │░░░░│    │░░░░│    │░░░░│             │
│  │████│    │    │    │    │    │    │    │    │             │
│  │████│    │    │    │    │    │    │    │    │             │
│  │████│    │    │    │    │    │    │    │    │             │
│  └────┘    └────┘    └────┘    └────┘    └────┘             │
│   100%      ~5%        ~5%       ~5%        ~5%              │
│                                                                │
│  ████ = Full backup                                           │
│  ░░░░ = Only changes since LAST backup                       │
│                                                                │
│  → Only changes since the LAST backup                        │
│  → Lowest storage requirement                                 │
│  → Recovery: All backups needed in sequence                  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Property | Description |
|----------|-------------|
| **Principle** | Only changes since **last backup** |
| **Storage requirement** | Very low |
| **Backup duration** | Very short |
| **Recovery** | Complex (full backup + all increments) |

---

#### 3. Differential Backup

```
┌────────────────────────────────────────────────────────────────┐
│               DIFFERENTIAL BACKUP                              │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Day 1      Day 2      Day 3      Day 4      Day 5           │
│  (Full)    (Diff.)    (Diff.)    (Diff.)    (Diff.)          │
│                                                                │
│  ┌────┐    ┌────┐    ┌────┐    ┌────┐    ┌────┐             │
│  │████│    │░░░░│    │░░░░│    │░░░░│    │░░░░│             │
│  │████│    │░░░░│    │░░░░│    │░░░░│    │░░░░│             │
│  │████│    │    │    │░░░░│    │░░░░│    │░░░░│             │
│  │████│    │    │    │    │    │░░░░│    │░░░░│             │
│  │████│    │    │    │    │    │    │    │░░░░│             │
│  └────┘    └────┘    └────┘    └────┘    └────┘             │
│   100%      ~5%       ~10%      ~15%       ~20%              │
│                                                                │
│  ████ = Full backup                                           │
│  ░░░░ = All changes since the FULL BACKUP                    │
│                                                                │
│  → All changes since the LAST FULL BACKUP                    │
│  → Medium storage requirement (grows daily)                  │
│  → Recovery: Full backup + last differential                 │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Property | Description |
|----------|-------------|
| **Principle** | All changes since **last full backup** |
| **Storage requirement** | Medium (grows) |
| **Backup duration** | Medium (grows) |
| **Recovery** | Medium (full backup + last diff.) |

---

### Comparison of Backup Types

| Criterion | Full Backup | Incremental | Differential |
|-----------|-------------|-------------|--------------|
| **Storage requirement** | Very high | Very low | Medium |
| **Backup time** | Long | Very short | Medium |
| **Restore time** | Very short | Long | Medium |
| **Restore effort** | 1 backup | Full + all incr. | Full + 1 diff. |
| **Data loss risk** | Low | Higher | Medium |

---

### Recovery (Restore) Comparison

```
┌────────────────────────────────────────────────────────────────┐
│            RECOVERY (Day 5)                                    │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  FULL BACKUP:                                                  │
│  Restore only Day 5                                           │
│  [Day 5 Full Backup] ─────────────────────────► ✓             │
│                                                                │
│  INCREMENTAL:                                                  │
│  Full backup + all increments in sequence                     │
│  [Day 1 Full] + [Day 2] + [Day 3] + [Day 4] + [Day 5] ► ✓    │
│      ↓           ↓          ↓          ↓          ↓           │
│      1.          2.         3.         4.         5.          │
│                                                                │
│  DIFFERENTIAL:                                                 │
│  Full backup + last differential                              │
│  [Day 1 Full] + [Day 5 Diff.] ────────────────► ✓             │
│      ↓              ↓                                          │
│      1.             2.                                         │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Archive Bit

The **archive bit** is a file attribute that indicates whether a file has been modified since the last backup.

| Action | Archive Bit |
|--------|-------------|
| File modified | Archive bit is set (1) |
| Full backup | Archive bit is cleared (0) |
| Incremental backup | Archive bit is cleared (0) |
| Differential backup | Archive bit remains set (1) |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Full backup** | Complete backup of all data |
| **Incremental backup** | Changes since last backup |
| **Differential backup** | Changes since last full backup |
| **Archive bit** | Marks modified files |
| **Restore** | Recovery from backup |
| **Backup window** | Time period for data backup |

---

## Exam Tips

### Common Exam Questions

- What is the difference between incremental and differential?
- Which backup type requires the least storage?
- Which backups are needed for restore?

### Important to Remember

- **Incremental** = since **last backup** → lowest storage, most complex restore
- **Differential** = since **last full backup** → medium storage, simpler restore
- **Full backup** = everything → highest storage, simplest restore
- For restore with incremental: Full backup + **ALL** increments

---

## Practice Exercises

### Exercise 1
A company performs a full backup on Sunday and incremental backups from Monday to Friday. On Friday, the server fails. Which backups are needed for recovery?

**Solution:**
For recovery, the following are needed:
1. Full backup from **Sunday**
2. Incremental backup from **Monday**
3. Incremental backup from **Tuesday**
4. Incremental backup from **Wednesday**
5. Incremental backup from **Thursday**
6. Incremental backup from **Friday**

**All 6 backups** must be restored in the correct order.

### Exercise 2
Which backup type requires the least storage space and why?

**Solution:** **Incremental backup** requires the least storage space because only the changes since the **last backup** (not since the full backup) are saved. With few daily changes, the individual backups are very small.

### Exercise 3
What is the main difference between incremental and differential backup?

**Solution:**
| Aspect | Incremental | Differential |
|--------|-------------|--------------|
| **Backs up** | Changes since **last backup** | Changes since **last full backup** |
| **Size** | Remains small | Grows daily |
| **Restore** | Full + all increments | Full + last differential |

---

## Cross-References

- [05-05-02 Backup Strategies](./05-05-02-backup-strategies.md) - 3-2-1 Rule
- [05-02-04 NAS and Availability](../05-02-hardware/05-02-04-nas-availability.md) - Backup target
- [04-01-01 CIA Triad](../../04-it-security/04-01-protection-goals/04-01-01-cia-triad.md) - Availability
