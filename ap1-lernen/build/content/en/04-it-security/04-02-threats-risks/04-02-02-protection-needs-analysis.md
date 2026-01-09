# Protection Needs Analysis

## Learning Objectives

After this chapter, you should be able to:
- Explain the term protection needs analysis
- Know the protection requirement categories
- Describe the process of a protection needs analysis
- Assess the protection needs for various data

---

## Core Content

### What is a Protection Needs Analysis?

The **protection needs analysis** is a procedure for determining the necessary level of protection for IT systems, applications, and data. It is a central component of IT security management.

> The protection needs analysis answers the question: "How worthy of protection are our data and systems?"

---

### Protection Requirement Categories According to BSI

The BSI (Federal Office for Information Security) defines three protection requirement categories:

```
+------------------------------------------------------------------+
|              PROTECTION REQUIREMENT CATEGORIES                    |
+------------------------------------------------------------------+
|                                                                   |
|  +--------------------------------------------------------------+ |
|  |                       VERY HIGH                               | |
|  |  Damage: existentially threatening, catastrophic              | |
|  |  Example: Patient data, state secrets                         | |
|  +--------------------------------------------------------------+ |
|                           ^                                       |
|                           |                                       |
|  +--------------------------------------------------------------+ |
|  |                        HIGH                                   | |
|  |  Damage: considerable, difficult to remedy                    | |
|  |  Example: Personnel data, financial data                      | |
|  +--------------------------------------------------------------+ |
|                           ^                                       |
|                           |                                       |
|  +--------------------------------------------------------------+ |
|  |                       NORMAL                                  | |
|  |  Damage: limited, manageable                                  | |
|  |  Example: Public information, internal documentation          | |
|  +--------------------------------------------------------------+ |
|                                                                   |
+------------------------------------------------------------------+
```

---

### Detailed Categories

| Category | Damage Potential | Examples | Measures |
|----------|------------------|----------|----------|
| **Normal** | Limited, tolerable | General business data, public info | Standard measures |
| **High** | Considerable | Personnel data, customer data, finances | Extended measures |
| **Very High** | Existentially threatening | Patient data, research data, state secrets | Maximum measures |

---

### Damage Scenarios for Each Protection Goal

#### Confidentiality

| Protection Need | Impact if Violated |
|-----------------|-------------------|
| **Normal** | Minor image damage |
| **High** | Significant image damage, legal consequences |
| **Very High** | Existentially threatening, criminal consequences |

#### Integrity

| Protection Need | Impact if Violated |
|-----------------|-------------------|
| **Normal** | Correctable, minor impact |
| **High** | Significant errors in processes |
| **Very High** | Life-threatening, massive financial damage |

#### Availability

| Protection Need | Impact if Failure |
|-----------------|------------------|
| **Normal** | Downtime > 1 day tolerable |
| **High** | Downtime max. a few hours |
| **Very High** | No downtime tolerable |

---

### Process of Protection Needs Analysis

```
+------------------+    +------------------+    +------------------+
| 1. INVENTORY     | -> | 2. ASSESSMENT    | -> | 3. INHERITANCE   |
| Identify all     |    | Determine        |    | Consider         |
| objects          |    | protection need  |    | dependencies     |
+------------------+    +------------------+    +------------------+
                                                        |
+------------------+    +------------------+    +-------v----------+
| 6. UPDATE        | <- | 5. IMPLEMENTATION| <- | 4. DOCUMENTATION |
|                  |    | Measures         |    |                  |
+------------------+    +------------------+    +------------------+
```

#### Step 1: Inventory

- Identify all IT systems, applications, and data
- Capture business processes
- Clarify responsibilities

#### Step 2: Assessment

For each object, the protection need is assessed regarding:
- Confidentiality
- Integrity
- Availability

based on possible damage scenarios.

#### Step 3: Inheritance

```
+--------------------------------------------------------------+
|                   MAXIMUM PRINCIPLE                           |
+--------------------------------------------------------------+
|                                                               |
|  +---------------+                                            |
|  | Application A |  --> Protection Need: HIGH                 |
|  | (Customer data)|                                           |
|  +-------+-------+                                            |
|          |                                                    |
|          v                                                    |
|  +---------------+                                            |
|  |    Server     |  --> Inherits: HIGH (from highest value)   |
|  +-------+-------+                                            |
|          |                                                    |
|          v                                                    |
|  +---------------+                                            |
|  |   Network     |  --> Inherits: HIGH                        |
|  +---------------+                                            |
|                                                               |
|  Protection need "inherits" according to maximum principle:   |
|  The highest protection level of a component determines the   |
|  protection level of dependent systems.                       |
+--------------------------------------------------------------+
```

#### Step 4: Documentation

- Document protection needs determination
- Record justifications
- Name responsible parties

---

### Practical Example

| IT Object | Confidentiality | Integrity | Availability | Justification |
|-----------|-----------------|-----------|--------------|---------------|
| Web server (public) | Normal | High | High | Public info, but manipulation would be image damage |
| Personnel database | High | High | Normal | Personal data, GDPR |
| Production control | Normal | Very High | Very High | Manipulation = production failure |
| Email system | High | High | High | Confidential communication |

---

### Connection to Risk Analysis

```
+------------------------------------------------------------------+
|                                                                   |
|  Protection needs    Threat           Risk                        |
|  analysis        +   analysis     =   analysis                    |
|                                                                   |
|  "What is how        "What            "How high is the            |
|   worth protecting?"  dangers?"        risk?"                     |
|                                                                   |
|                           v                                       |
|                    Measure selection                              |
|                                                                   |
+------------------------------------------------------------------+
```

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Protection Needs Analysis** | Determining the necessary protection level |
| **Protection Requirement Category** | Normal, High, Very High |
| **Maximum Principle** | Highest protection need is inherited |
| **Damage Scenario** | Possible impact of a violation |
| **BSI** | Federal Office for Information Security |
| **IT Baseline Protection** | BSI methodology for IT security |

---

## Exam Tips

### Frequent Exam Questions

- What is a protection needs analysis?
- Name the protection requirement categories
- How does the maximum principle work?
- Assign data to a protection requirement

### Important to Remember

- **3 Categories:** Normal, High, Very High
- **3 Protection Goals:** Confidentiality, Integrity, Availability (assess for each)
- **Maximum Principle:** Highest protection need is inherited

---

## Practice Exercises

### Exercise 1
What is a protection needs analysis?

**Solution:** The protection needs analysis is a procedure for determining the necessary protection level for IT systems, applications, and data. It assesses the protection need for each object regarding confidentiality, integrity, and availability in the categories Normal, High, or Very High.

### Exercise 2
What protection need does a personnel database with salary data have?

**Solution:**
- **Confidentiality:** HIGH (personal data, GDPR)
- **Integrity:** HIGH (incorrect salaries lead to legal problems)
- **Availability:** NORMAL to HIGH (depending on payroll timing)

Justification: Salary data is sensitive personal data under GDPR and requires special protection.

### Exercise 3
Explain the maximum principle of protection need inheritance.

**Solution:** The maximum principle states that an IT system inherits the highest protection need of all applications running on it or data stored on it. If a server runs one application with protection need "Normal" and one with "High", the server receives protection need "High".

### Exercise 4
Assign the following data to a protection requirement:
a) Public press releases
b) Patient data from a medical practice
c) Internal meeting protocols

**Solution:**
a) **Normal** - Publicly accessible, no special protection requirements
b) **Very High** - Particularly sensitive health data under Art. 9 GDPR
c) **Normal to High** - Depending on content, internal information

---

## Cross-References

- [04-01-01 CIA Triad](../04-01-protection-goals/04-01-01-cia-triad.md) - The three protection goals
- [04-02-01 Threat Types](./04-02-01-threat-types.md) - Identifying threats
- [04-04-01 BSI Baseline Protection](../04-04-frameworks-standards/04-04-01-bsi-baseline-protection.md) - BSI methodology
- [03-01-02 Personal Data](../../03-data-protection/03-01-fundamentals/03-01-02-personal-data.md) - GDPR categories
