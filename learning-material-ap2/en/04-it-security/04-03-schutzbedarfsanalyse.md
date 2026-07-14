# Analysis of Protection Needs

## Learning Objectives

After this chapter, you should be able to:
- Read and complete a Schutzbedarfsfeststellung (determination of protection needs)
- Assess the protection needs per protection goal (Confidentiality/Integrity/Availability)
- Know the protection-needs categories and inheritance principles

---

## Core Content

### Schutzbedarfsfeststellung (determination of protection needs)

For each system/object, the protection need is assessed **with justification** for each **protection goal** (Confidentiality, Integrity, Availability). The BSI categories:

| Category | Meaning |
|-----------|-----------|
| **normal** | Damage impact is limited and manageable |
| **high** | Damage impact may be considerable |
| **very high** | Damage impact may be existentially threatening |

### Example (case worker PC with CRM)

| Protection goal | Protection need | Justification |
|-----------|--------------|------------|
| **Confidentiality** | high–very high | Customer data must not reach competitors/attackers (high economic damage) |
| **Integrity** | high | Customer data must be stored error-free, otherwise damage to the customer looms |
| **Availability** | normal | An outage can be compensated for a certain time |

### Inheritance principles

- **Maximum principle (Maximumprinzip):** The protection need of a superordinate object is based on the **highest** need of the objects that depend on it.
- **Cumulation effect (Kumulationseffekt):** Many objects rated "normal" can together result in a **higher** need.
- **Distribution effect (Verteilungseffekt):** Distribution across multiple systems can **lower** the need of the individual object.

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **Schutzbedarfsfeststellung** | Assessment of the protection need per protection goal, with justification |
| **Maximumprinzip** | The highest individual need determines the overall need |
| **Kumulationseffekt** | The sum of many small needs raises the overall need |

---

## Exam Tips

- Always state the protection need **per protection goal** and **with justification** (not just "high").
- Know the three categories (normal/high/very high) and the three principles (maximum/cumulation/distribution).
- Typical task: complete a table with missing assessments.

---

## Practice Exercise

**Task (based on ConSystem GmbH):** Analyze a given Schutzbedarfsfeststellung and add two missing assessments (e.g. confidentiality for unencrypted internet transmission → high; integrity for detectable errors → normal), each with justification.

---

## Cross-References

- [04-04 Threat Scenarios](./04-04-bedrohungsszenarien.md)
- [04-01 Aspects of IT Security](./04-01-aspekte-it-sicherheit.md)
