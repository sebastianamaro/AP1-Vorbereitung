# Planning an Application

## Learning Objectives

After this chapter you should be able to:
- Distinguish functional and non-functional requirements
- Differentiate the Lastenheft and the Pflichtenheft
- Classify the process of requirements analysis

---

## Core Content

### Functional vs. non-functional requirements

| Type | Question | Example |
|-----|-------|----------|
| **Functional** | *What* should the system do? | "Users can log in", "create an invoice" |
| **Non-functional** | *How well* / under which conditions? | response time < 1 s, DSGVO-compliant (GDPR-compliant), accessible, 99.9 % availability |

Non-functional requirements often coincide with the **quality characteristics** (ISO/IEC 25010): performance, security, usability …

### Lastenheft vs. Pflichtenheft

| | Lastenheft | Pflichtenheft |
|--|-----------|---------------|
| **Who** | **Auftraggeber** (client) | **Auftragnehmer** (contractor) |
| **Content** | *What* is required (requirements) | *How* it is implemented (solution) |
| **Question** | "What do I want?" | "How do I do it?" |

> **Mnemonic:** The **Lastenheft** (requirements specification by the client) is the *Last* (burden) of the client, the **Pflichtenheft** (implementation/response specification by the contractor) is the *Pflicht* (duty) of the contractor.

### Requirements analysis

Process: **elicit** (interviews, observation) → **document** (Lastenheft/Pflichtenheft, use cases) → **review/coordinate** → **manage** (changes). Requirements should be **unambiguous, complete, consistent, testable**.

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **Functional requirement** | What the system should do |
| **Non-functional requirement** | Quality/constraints |
| **Lastenheft** | Requirements of the client (Auftraggeber) |
| **Pflichtenheft** | Implementation concept of the contractor (Auftragnehmer) |

---

## Exam Tips

- **Lastenheft (client) vs. Pflichtenheft (contractor)** – a perennial topic; remember the direction.
- Classify requirements as **functional/non-functional** (a typical GA1 task).
- Link non-functional requirements to the **quality characteristics** (ISO 25010).

---

## Practice Exercise

**Task (based on ConSystem GmbH):** For a new development, classify the given requirements as functional/non-functional and explain the difference between the Lastenheft and the Pflichtenheft.

---

## Cross-References

- [06-04-02 Use Case Diagram](../06-04-uml/06-04-02-use-case-diagramm.md)
- [02-02 Software Quality](../../02-quality-management/02-02-softwarequalitaet.md)
