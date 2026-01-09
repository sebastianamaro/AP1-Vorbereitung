# Roles and Responsibilities in Data Protection

## Learning Objectives

After this chapter, you should be able to:
- Know the most important roles in data protection
- Explain the duties of the controller
- Know when a Data Protection Officer is required
- Know the tasks of the Data Protection Officer

---

## Core Content

### Overview of Roles

```
┌─────────────────────────────────────────────────────────────────┐
│                 ROLES IN DATA PROTECTION                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │              DATA SUBJECT                                │  │
│  │         Person whose data is being processed             │  │
│  └──────────────────────────────────────────────────────────┘  │
│                           ▲                                     │
│                           │ Rights                              │
│                           │                                     │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │              CONTROLLER                                  │  │
│  │     Decides on purposes and means of processing          │  │
│  │     → Main responsibility for data protection            │  │
│  └──────────────────────────────────────────────────────────┘  │
│            │                              │                     │
│            │ commissions                  │ may appoint         │
│            ▼                              ▼                     │
│  ┌──────────────────┐          ┌──────────────────────────┐   │
│  │   PROCESSOR      │          │DATA PROTECTION OFFICER   │   │
│  │Processes data    │          │Monitors data protection  │   │
│  │on behalf         │          │compliance                │   │
│  └──────────────────┘          └──────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### The Controller (Art. 4(7) GDPR)

#### Definition

The **controller** is the natural or legal person who alone or jointly with others determines the **purposes and means** of the processing of personal data.

#### Duties of the Controller

| Duty | Description | GDPR Article |
|------|-------------|--------------|
| **Accountability** | Demonstrate GDPR compliance | Art. 5(2) |
| **Information Duty** | Inform data subjects | Art. 13, 14 |
| **Data Security** | Implement TOMs | Art. 32 |
| **Records of Processing** | Maintain documentation | Art. 30 |
| **Notification Duty** | Report data breaches (72h) | Art. 33 |
| **Data Protection Impact Assessment** | Conduct if high risk | Art. 35 |

---

### The Processor (Art. 4(8) GDPR)

#### Definition

The **processor** is a natural or legal person who processes personal data **on behalf of the controller**.

#### Examples of Processing

| Processor | Activity |
|-----------|----------|
| Cloud Provider | Data storage |
| Data Center | Server hosting |
| Marketing Agency | Newsletter distribution |
| Payroll Office | Salary processing |

#### Data Processing Agreement (DPA)

According to Art. 28 GDPR, a **contract** between controller and processor is required:

| Content | Example |
|---------|---------|
| Subject matter and duration | What data, how long |
| Nature and purpose | Email marketing |
| Categories of data | Name, email |
| Processor's obligations | Bound by instructions, TOMs |
| Controller's rights | Audit rights |

---

### The Data Protection Officer (DPO)

#### When is a DPO Required?

According to Art. 37 GDPR and Section 38 BDSG:

```
┌─────────────────────────────────────────────────────────────────┐
│          WHEN IS A DPO REQUIRED?                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌────────────────────────────────────────────────────────┐    │
│  │ 1. Public body/authority                               │    │
│  │    → DPO ALWAYS required (Art. 37(1)(a) GDPR)          │    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                 │
│  ┌────────────────────────────────────────────────────────┐    │
│  │ 2. Core activity: Large-scale monitoring               │    │
│  │    → DPO required (Art. 37(1)(b) GDPR)                 │    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                 │
│  ┌────────────────────────────────────────────────────────┐    │
│  │ 3. Core activity: Special data categories (Art. 9)     │    │
│  │    → DPO required (Art. 37(1)(c) GDPR)                 │    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                 │
│  ┌────────────────────────────────────────────────────────┐    │
│  │ 4. >= 20 persons with automated processing             │    │
│  │    → DPO required (Section 38(1) BDSG)                 │    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                 │
│  ┌────────────────────────────────────────────────────────┐    │
│  │ 5. Data Protection Impact Assessment required          │    │
│  │    → DPO required (Section 38(1) BDSG)                 │    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Tasks of the DPO (Art. 39 GDPR)

| Task | Description |
|------|-------------|
| **Information and Advice** | Inform controllers and employees |
| **Monitoring** | Monitor GDPR compliance |
| **Advice on DPIA** | Advise on Data Protection Impact Assessment |
| **Cooperation** | Cooperate with supervisory authority |
| **Contact Point** | Be reachable for supervisory authority |

#### Position of the DPO

- **Independent** in the exercise of their tasks
- **Protection against dismissal** (like works council)
- **Can be internal or external**
- Must have **no conflicts of interest** (e.g., not IT manager)

---

### The Supervisory Authority

| Level | Authority |
|-------|-----------|
| **Federal** | Federal Commissioner for Data Protection and Freedom of Information (BfDI) |
| **State** | State Data Protection Commissioners |

**Tasks:**
- Monitor GDPR compliance
- Advise companies
- Impose fines
- Handle complaints

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Controller** | Decides on purposes and means of processing |
| **Processor** | Processes data on behalf |
| **DPO** | Data Protection Officer |
| **DPA** | Data Processing Agreement |
| **Supervisory Authority** | State control of data protection |
| **DPIA** | Data Protection Impact Assessment |

---

## Exam Tips

### Common Exam Questions
- When must a Data Protection Officer be appointed?
- What are the tasks of the Data Protection Officer?
- What is the difference between controller and processor?

### Important to Remember
- **>= 20 persons** with automated processing -> DPO required (Section 38 BDSG)
- DPO is **independent**
- **Data Processing Agreement** is mandatory

---

## Practice Exercises

### Exercise 1
When must a company appoint a Data Protection Officer?

**Solution:** A DPO must be appointed when:
1. >= 20 persons are constantly engaged in automated processing (Section 38 BDSG)
2. Data Protection Impact Assessment is required
3. Core activity involves large-scale processing of special data categories
4. Core activity requires large-scale, systematic monitoring of persons

### Exercise 2
What is the difference between controller and processor?

**Solution:**
- **Controller:** Independently decides on purposes and means of data processing, bears main responsibility
- **Processor:** Processes data only on behalf of and according to instructions from the controller

### Exercise 3
Name three tasks of the Data Protection Officer.

**Solution:**
1. Information and advice of the controller and employees
2. Monitoring GDPR compliance
3. Advice on Data Protection Impact Assessments
(or: Cooperation with supervisory authority, being a contact point)

---

## Cross-References

- [03-01-01 GDPR Principles](./03-01-fundamentals/03-01-01-gdpr-principles.md) - Legal basis
- [03-02-01 TOM](./03-02-technical-measures/03-02-01-tom.md) - Controller's duties
- [08-04-01 Contract Types](../08-business-processes/08-04-contract-law/08-04-01-contract-types.md) - Data Processing Agreement
