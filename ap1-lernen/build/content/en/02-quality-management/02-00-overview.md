# Quality Management - Chapter Overview

## Introduction

Quality Management (QM) is a systematic approach to ensuring and improving the quality of products and services. In the IT industry, QM plays a central role in software development, the provision of IT services, and the setup of workstations.

---

## Exam Relevance

Quality Management is an important component of the AP1 exam. Typical exam topics are:

- Definition and significance of quality
- DIN EN ISO 9000ff. series of standards
- The 7 principles of quality management
- PDCA cycle (Plan-Do-Check-Act)
- Certification processes
- Accessibility in IT

---

## Chapter Structure

```
02-quality-management/
├── 02-00-overview.md (This file)
├── 02-01-fundamentals/
│   ├── 02-01-01-quality-concept.md
│   └── 02-01-02-qm-systems.md
├── 02-02-standards-certification/
│   ├── 02-02-01-din-en-iso-9000.md
│   └── 02-02-02-certification.md
├── 02-03-management-approaches/
│   ├── 02-03-01-tqm.md
│   └── 02-03-02-pdca-cycle.md
├── 02-04-software-quality.md
└── 02-05-accessibility.md
```

---

## Relationships in Quality Management

```
┌─────────────────────────────────────────────────────────────────┐
│                    QUALITY MANAGEMENT                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐         │
│  │   QUALITY   │    │   QUALITY   │    │   QUALITY   │         │
│  │  PLANNING   │ ─► │   CONTROL   │ ─► │  ASSURANCE  │         │
│  └─────────────┘    └─────────────┘    └─────────────┘         │
│        │                  │                  │                  │
│        └──────────────────┼──────────────────┘                  │
│                           ▼                                     │
│                    ┌─────────────┐                              │
│                    │   QUALITY   │                              │
│                    │   TESTING   │                              │
│                    └─────────────┘                              │
│                           │                                     │
│                           ▼                                     │
│              ┌─────────────────────────┐                        │
│              │ CONTINUOUS              │                        │
│              │ IMPROVEMENT (CIP)       │                        │
│              │      PDCA Cycle         │                        │
│              └─────────────────────────┘                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## The 7 Principles of Quality Management

According to DIN EN ISO 9000ff.:

| No. | Principle | Significance |
|-----|-----------|--------------|
| 1 | **Customer Focus** | Understanding and fulfilling customer needs |
| 2 | **Leadership** | Unified direction through leaders |
| 3 | **Engagement of People** | Involving employees at all levels |
| 4 | **Process Approach** | Understanding activities as interconnected processes |
| 5 | **Improvement** | Continuous improvement as the goal |
| 6 | **Evidence-Based Decision Making** | Basing decisions on data analysis |
| 7 | **Relationship Management** | Maintaining relationships with suppliers and partners |

---

## Important Standards Overview

| Standard | Content |
|----------|---------|
| **DIN EN ISO 9000** | Fundamentals and vocabulary of QM |
| **DIN EN ISO 9001** | Requirements for QM systems (certifiable) |
| **DIN EN ISO 9004** | Guidelines for performance improvement |

---

## Cross-References

- [01-05-02 Reflection Methods](../01-project-management/01-05-teamwork/01-05-02-reflection-methods.md) - Continuous improvement in project context
- [03-02-01 TOM](../03-data-protection/03-02-technical-measures/03-02-01-tom.md) - Technical and organizational measures
- [04-04-02 ISMS](../04-it-security/04-04-frameworks-standards/04-04-02-isms.md) - Quality management in IT security
