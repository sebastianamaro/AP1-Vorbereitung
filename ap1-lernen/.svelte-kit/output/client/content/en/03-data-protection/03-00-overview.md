# Data Protection - Chapter Overview

## Introduction

Data protection refers to the protection against misuse of personal data and protects the right to informational self-determination. In the digital world, data protection is particularly important because data can be easily collected, processed, and shared.

---

## Exam Relevance

Data protection is an important topic in the AP1 exam. Particularly relevant are:

- GDPR principles and fundamentals
- Personal data (definition and examples)
- Data subject rights under GDPR
- Technical and organizational measures (TOM)
- Anonymization and pseudonymization (NEW 2025!)
- Roles: Data Protection Officer, Controller, Processor

---

## Chapter Structure

```
03-data-protection/
├── 03-00-overview.md (This file)
├── 03-01-fundamentals/
│   ├── 03-01-01-gdpr-principles.md
│   ├── 03-01-02-personal-data.md
│   └── 03-01-03-data-subject-rights.md
├── 03-02-technical-measures/
│   ├── 03-02-01-tom.md
│   ├── 03-02-02-anonymization-pseudonymization.md
│   └── 03-02-03-standard-data-protection-model.md
└── 03-03-roles-responsibilities.md
```

---

## Legal Framework

### Hierarchy of Data Protection Laws

```
┌─────────────────────────────────────────────────────────────────┐
│                    EU LEVEL                                      │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │    GDPR - General Data Protection Regulation (EU) 2016/679│  │
│  │    Applicable EU-wide since 25.05.2018                    │  │
│  └───────────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────┤
│                    NATIONAL LEVEL                                │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │    BDSG - Federal Data Protection Act                     │  │
│  │    Supplements GDPR for Germany (opening clauses)         │  │
│  └───────────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────┤
│                    SECTOR-SPECIFIC                               │
│  ┌─────────────────────┐  ┌─────────────────────┐              │
│  │   TMG/TTDSG         │  │   TKG               │              │
│  │   Telemedia         │  │   Telecommunications│              │
│  └─────────────────────┘  └─────────────────────┘              │
└─────────────────────────────────────────────────────────────────┘
```

---

## The 6 Principles of GDPR (Art. 5)

| No. | Principle | Description |
|-----|-----------|-------------|
| 1 | **Lawfulness, Transparency** | Processing only with legal basis, comprehensible |
| 2 | **Purpose Limitation** | Only for specified, legitimate purposes |
| 3 | **Data Minimization** | Collect only necessary data |
| 4 | **Accuracy** | Data must be correct and up-to-date |
| 5 | **Storage Limitation** | Store only as long as necessary |
| 6 | **Integrity and Confidentiality** | Ensure appropriate security |

---

## Important Roles in Data Protection

| Role | Description |
|------|-------------|
| **Data Subject** | Person whose data is being processed |
| **Controller** | Decides on the purposes and means of processing |
| **Processor** | Processes data on behalf of the controller |
| **Data Protection Officer** | Monitors data protection compliance |
| **Supervisory Authority** | State supervision (e.g., State Data Protection Commissioners) |

---

## Cross-References

- [04-01-01 CIA Triad](../04-it-security/04-01-protection-goals/04-01-01-cia-triad.md) - Confidentiality as a protection goal
- [04-05-01 Encryption Methods](../04-it-security/04-05-cryptography/04-05-01-encryption-methods.md) - Technical implementation
- [08-04-01 Contract Types](../08-business-processes/08-04-contract-law/08-04-01-contract-types.md) - Data processing agreements
