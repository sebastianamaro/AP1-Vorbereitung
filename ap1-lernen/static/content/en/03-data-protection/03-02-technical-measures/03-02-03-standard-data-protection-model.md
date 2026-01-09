# Standard Data Protection Model (SDM)

## Learning Objectives

After this chapter, you should be able to:
- Explain the Standard Data Protection Model (SDM)
- Know the protection goals of the SDM
- Understand the connection with GDPR
- Comprehend the practical application

---

## Core Content

### What is the SDM?

The **Standard Data Protection Model (SDM)** is a methodology of the German data protection supervisory authorities for implementing GDPR requirements. It defines concrete **protection goals** and associated **measures**.

> The SDM translates the abstract requirements of GDPR into practically implementable technical and organizational measures.

---

### The 7 Protection Goals

```
┌─────────────────────────────────────────────────────────────────┐
│              STANDARD DATA PROTECTION MODEL (SDM)                │
│                    7 Protection Goals                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │ DATA            │  │ AVAILABILITY    │  │ INTEGRITY       │ │
│  │ MINIMIZATION    │  │                 │  │                 │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘ │
│                                                                 │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │ CONFIDENTIALITY │  │ UNLINKABILITY   │  │ TRANSPARENCY    │ │
│  │                 │  │                 │  │                 │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘ │
│                                                                 │
│  ┌─────────────────┐                                           │
│  │ INTERVENABILITY │                                           │
│  │                 │                                           │
│  └─────────────────┘                                           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Protection Goals in Detail

| Protection Goal | Description | GDPR Reference | Measures |
|-----------------|-------------|----------------|----------|
| **Data Minimization** | Process only necessary data | Art. 5(1)(c) | Reduce data fields, anonymization |
| **Availability** | Data is accessible and usable | Art. 32 | Backups, redundancy, emergency plans |
| **Integrity** | Data is correct and unchanged | Art. 5(1)(d) | Checksums, access controls |
| **Confidentiality** | Only authorized persons have access | Art. 5(1)(f) | Encryption, access rights |
| **Unlinkability** | Data not linked for other purposes | Art. 5(1)(b) | Purpose separation, pseudonymization |
| **Transparency** | Processing is comprehensible | Art. 5(1)(a) | Logging, documentation |
| **Intervenability** | Data subject rights implementable | Art. 12-22 | Access, deletion, rectification functions |

---

### Relationship to GDPR Principles

| SDM Protection Goal | GDPR Principle |
|---------------------|----------------|
| Data Minimization | Data minimization (Art. 5(1)(c)) |
| Availability | Integrity and Confidentiality (Art. 5(1)(f)) |
| Integrity | Accuracy (Art. 5(1)(d)) |
| Confidentiality | Integrity and Confidentiality (Art. 5(1)(f)) |
| Unlinkability | Purpose Limitation (Art. 5(1)(b)) |
| Transparency | Lawfulness, Transparency (Art. 5(1)(a)) |
| Intervenability | Data Subject Rights (Art. 12-22) |

---

### Practical Application

#### Example: Customer Database

| Goal | Measure | Implementation |
|------|---------|----------------|
| **Data Minimization** | Only necessary fields | No date of birth for newsletter |
| **Availability** | Backup | Daily data backup |
| **Integrity** | Checksums | Hash values for data integrity |
| **Confidentiality** | Encryption | Database encrypted |
| **Unlinkability** | Purpose separation | Separate tables for orders/marketing |
| **Transparency** | Logging | Audit log of all accesses |
| **Intervenability** | Export function | Data disclosure possible |

---

### SDM Approach

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ 1. DESCRIBE     │ ─► │ 2. RISK         │ ─► │ 3. SELECT       │
│    PROCESSING   │    │    ASSESSMENT   │    │    MEASURES     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                                      │
┌─────────────────┐    ┌─────────────────┐    ┌───────▼─────────┐
│ 6. CONTINUOUS   │ ◄─ │ 5. REVIEW       │ ◄─ │ 4. IMPLEMENT    │
│    IMPROVEMENT  │    │                 │    │    MEASURES     │
│                 │    │                 │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **SDM** | Standard Data Protection Model |
| **Protection Goal** | Data protection objective to be fulfilled |
| **Data Minimization** | Collect only necessary data |
| **Unlinkability** | No linking for other purposes |
| **Intervenability** | Data subject rights implementable |
| **Transparency** | Comprehensibility of processing |

---

## Exam Tips

### Common Exam Questions
- What is the Standard Data Protection Model?
- Name the protection goals of the SDM
- Which protection goal corresponds to which GDPR principle?

### Important to Remember
- SDM = Practical implementation of GDPR
- 7 protection goals
- Connection to GDPR principles (Art. 5)

---

## Practice Exercises

### Exercise 1
What is the Standard Data Protection Model (SDM)?

**Solution:** The SDM is a methodology of the German data protection supervisory authorities that translates abstract GDPR requirements into practically implementable protection goals and measures.

### Exercise 2
Name four of the seven protection goals of the SDM.

**Solution:**
1. Data minimization
2. Availability
3. Confidentiality
4. Intervenability
(or: Integrity, Unlinkability, Transparency)

### Exercise 3
Which protection goal ensures that data subjects can exercise their GDPR rights (e.g., access, erasure)?

**Solution:** The protection goal **Intervenability** ensures that data subjects can exercise their rights under Art. 12-22 GDPR.

---

## Cross-References

- [03-01-01 GDPR Principles](../03-01-fundamentals/03-01-01-gdpr-principles.md) - Art. 5 GDPR
- [03-02-01 TOM](./03-02-01-tom.md) - Technical and organizational measures
- [04-01-01 CIA Triad](../../04-it-security/04-01-protection-goals/04-01-01-cia-triad.md) - Availability, Integrity, Confidentiality
