# Evaluation Criteria for Software

## Learning Objectives

After this chapter, you should be able to:
- Know criteria for software selection
- Distinguish between functional and non-functional requirements
- Systematically evaluate software
- Understand utility analysis for software selection

---

## Core Content

### Why Evaluation Criteria?

When selecting software, various factors must be considered to find the best solution for the intended purpose.

```
┌─────────────────────────────────────────────────────────────────┐
│              SOFTWARE SELECTION - INFLUENCING FACTORS           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                      ┌─────────────┐                           │
│         ┌───────────►│  SOFTWARE   │◄───────────┐              │
│         │            │  SELECTION  │            │              │
│         │            └─────────────┘            │              │
│         │                   ▲                   │              │
│         │                   │                   │              │
│   ┌─────┴─────┐      ┌─────┴─────┐      ┌─────┴─────┐        │
│   │ Function- │      │ Technical │      │ Economic  │        │
│   │ ality     │      │ Aspects   │      │ Viability │        │
│   └───────────┘      └───────────┘      └───────────┘        │
│                                                                 │
│   ┌───────────┐      ┌───────────┐      ┌───────────┐        │
│   │ User-     │      │  Security │      │  Support  │        │
│   │ friend-   │      │           │      │  & Maint. │        │
│   │ liness    │      └───────────┘      └───────────┘        │
│   └───────────┘                                               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Functional Requirements

**Functional requirements** describe WHAT the software must be able to do.

| Criterion | Description | Example |
|-----------|-------------|---------|
| **Feature Set** | Required features available? | Inventory management, ordering |
| **Data Processing** | Processing of required data | Import/export formats |
| **Interfaces** | Connection to other systems | API, data exchange |
| **Reporting** | Reports and analyses | Dashboard, Excel export |

---

### Non-Functional Requirements

**Non-functional requirements** describe HOW the software should work.

```
┌────────────────────────────────────────────────────────────────┐
│            NON-FUNCTIONAL REQUIREMENTS                         │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  PERFORMANCE                      USABILITY                   │
│  ┌────────────────────┐          ┌────────────────────┐      │
│  │ • Response time    │          │ • Intuitive        │      │
│  │ • Throughput       │          │   operation        │      │
│  │ • Resource         │          │ • Learnability     │      │
│  │   consumption      │          │ • Accessibility    │      │
│  └────────────────────┘          └────────────────────┘      │
│                                                                │
│  SECURITY                         RELIABILITY                 │
│  ┌────────────────────┐          ┌────────────────────┐      │
│  │ • Data protection  │          │ • Availability     │      │
│  │ • Access control   │          │ • Fault tolerance  │      │
│  │ • Encryption       │          │ • Data integrity   │      │
│  └────────────────────┘          └────────────────────┘      │
│                                                                │
│  MAINTAINABILITY                  PORTABILITY                 │
│  ┌────────────────────┐          ┌────────────────────┐      │
│  │ • Extensibility    │          │ • Platform         │      │
│  │ • Documentation    │          │   independence     │      │
│  │ • Modularity       │          │ • Installability   │      │
│  └────────────────────┘          │                    │      │
│                                   └────────────────────┘      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Economic Criteria

| Criterion | Description |
|-----------|-------------|
| **Acquisition Costs** | License costs, purchase price |
| **Operating Costs** | Maintenance, updates, support |
| **Training Costs** | Employee onboarding |
| **TCO** | Total Cost of Ownership |
| **ROI** | Return on Investment |

---

### Technical Criteria

| Criterion | Questions |
|-----------|-----------|
| **System Requirements** | Runs on existing hardware? |
| **Compatibility** | Fits existing IT infrastructure? |
| **Interfaces** | APIs, data formats available? |
| **Scalability** | Grows with increasing requirements? |
| **Update Capability** | Regular updates? |

---

### Vendor Criteria

```
┌────────────────────────────────────────────────────────────────┐
│                    VENDOR EVALUATION                           │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   ┌──────────────────────────────────────────────────────┐    │
│   │  Market Position      │ Established or Startup?       │    │
│   │  References           │ Experiences of other customers│    │
│   │  Future Security      │ Is product being developed?   │    │
│   │  Support              │ Response times, quality       │    │
│   │  Training Offering    │ Documentation, trainings      │    │
│   │  Contract Terms       │ Notice periods, SLA           │    │
│   └──────────────────────────────────────────────────────┘    │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Utility Analysis for Software Selection

**Utility analysis** is a method for systematic comparison of alternatives.

```
┌────────────────────────────────────────────────────────────────┐
│                    UTILITY ANALYSIS                            │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Step 1: Define criteria                                      │
│           (Functionality, costs, usability, etc.)              │
│                                                                │
│   Step 2: Weight criteria (Sum = 100%)                         │
│           (e.g., Functionality 40%, Costs 30%, etc.)           │
│                                                                │
│   Step 3: Rate alternatives (e.g., 1-10 points)                │
│           (Each software per criterion)                        │
│                                                                │
│   Step 4: Calculate utility values                             │
│           (Weight × Rating)                                    │
│                                                                │
│   Step 5: Compare totals                                       │
│           (Highest utility value = Recommendation)             │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### Example: Utility Analysis

| Criterion | Weight | Software A | Software B | Software C |
|-----------|--------|------------|------------|------------|
| | | Points / Utility | Points / Utility | Points / Utility |
| Functionality | 40% | 8 / 3.2 | 9 / 3.6 | 7 / 2.8 |
| Cost | 30% | 9 / 2.7 | 6 / 1.8 | 8 / 2.4 |
| Usability | 20% | 7 / 1.4 | 8 / 1.6 | 9 / 1.8 |
| Support | 10% | 6 / 0.6 | 7 / 0.7 | 8 / 0.8 |
| **Total** | **100%** | **7.9** | **7.7** | **7.8** |

**Result:** Software A has the highest utility value and is recommended.

---

### Decision Matrix

| Aspect | Standard Software | Custom Software | Cloud (SaaS) |
|--------|-------------------|-----------------|--------------|
| **Cost** | Low | High | Medium (ongoing) |
| **Customization** | Limited | Complete | Limited |
| **Availability** | Immediate | Development time | Immediate |
| **Maintenance** | Vendor | Self/Service provider | Vendor |
| **Updates** | Vendor | Individual | Automatic |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Functional Requirement** | What the software must do |
| **Non-functional Requirement** | How the software should work |
| **Utility Analysis** | Systematic comparison of alternatives |
| **TCO** | Total Cost of Ownership |
| **ROI** | Return on Investment |
| **Scalability** | Growth capability |
| **Usability** | User-friendliness |

---

## Exam Tips

### Common Exam Questions

- Which criteria are important for software selection?
- What is a utility analysis?
- Distinguish between functional and non-functional requirements

### Important to Remember

- **Functional** = WHAT (features, functions)
- **Non-functional** = HOW (performance, security, usability)
- **Utility analysis** = Weighted evaluation of alternatives
- **TCO** = All costs over the usage period

---

## Practice Exercises

### Exercise 1
A company is choosing between three CRM systems. Name four criteria that should be considered in the selection.

**Solution:**
1. **Functionality:** Contact management, sales control, reporting
2. **Cost:** License costs, training, integration
3. **Compatibility:** Interfaces to existing ERP system
4. **User-friendliness:** Intuitive operation, employee acceptance

### Exercise 2
What is the difference between functional and non-functional requirements?

**Solution:**
- **Functional Requirements:** Describe the functions a software must provide (WHAT). Example: "The software must be able to create invoices."
- **Non-functional Requirements:** Describe quality characteristics of the software (HOW). Example: "The invoice must be generated within 2 seconds."

### Exercise 3
Perform a simplified utility analysis:

Criteria and weighting:
- Functionality: 50%
- Price: 30%
- Support: 20%

Ratings (1-10):
| | Software X | Software Y |
|---|---|---|
| Functionality | 8 | 9 |
| Price | 9 | 6 |
| Support | 7 | 8 |

**Solution:**
| Criterion | Weight | Software X | Software Y |
|-----------|--------|------------|------------|
| Functionality | 50% | 8 × 0.5 = 4.0 | 9 × 0.5 = 4.5 |
| Price | 30% | 9 × 0.3 = 2.7 | 6 × 0.3 = 1.8 |
| Support | 20% | 7 × 0.2 = 1.4 | 8 × 0.2 = 1.6 |
| **Total** | | **8.1** | **7.9** |

**Result:** Software X is recommended (higher utility value).

---

## Cross-References

- [08-02-03 Utility Analysis](../../08-business-processes/08-02-economics/08-02-03-utility-analysis.md) - Details on the method
- [08-02-02 ROI and TCO](../../08-business-processes/08-02-economics/08-02-02-roi-tco.md) - Cost-benefit analysis
- [06-01-01 Software Types](./06-01-01-software-types.md) - Standard vs. Custom
