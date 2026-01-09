# Requirements Specification and Functional Specification

## Learning Objectives

After this chapter, you should be able to:
- Explain the difference between requirements specification and functional specification
- Know who creates which document
- Know the typical contents of both documents
- Understand the function of both documents in the project lifecycle

---

## Core Content

### Overview

```
+--------------------+                    +--------------------+
|   REQUIREMENTS     |  ------------->    |    FUNCTIONAL      |
|   SPECIFICATION    |                    |    SPECIFICATION   |
|                    |                    |                    |
|   Client           |                    |    Contractor      |
|   (Customer)       |                    |    (Developer)     |
|                    |                    |                    |
|   WHAT?            |                    |    HOW?            |
+--------------------+                    +--------------------+
```

---

### The Requirements Specification (Customer Requirements Document)

#### Definition
The **requirements specification** is a document from the **client** (customer). It describes **WHAT** should be achieved - from the customer's perspective.

#### Creator
- Client (customer)
- Or: Collaboration between client and contractor

#### Typical Contents

| Content | Description |
|---------|-------------|
| **Initial Situation** | Description of the current situation |
| **Objectives** | What should be achieved? |
| **Requirements** | Functional and non-functional requirements |
| **Constraints** | Budget, timeframe, technical specifications |
| **Interfaces** | Connection to existing systems |
| **Acceptance Criteria** | When is the project considered successful? |

#### Characteristics
- Describes requirements from **customer's perspective**
- Contains **technical and non-technical** aspects
- Is often the basis of a **work contract**
- Uses **customer's business language** (not developer's)

---

### The Functional Specification (Technical Specification)

#### Definition
The **functional specification** is a document from the **contractor** (developer). It describes **HOW** the requirements from the requirements specification will be implemented.

#### Creator
- Contractor (developer/IT service provider)
- Based on the requirements specification

#### Typical Contents

| Content | Description |
|---------|-------------|
| **Technical Solution** | How will the requirements be implemented? |
| **System Architecture** | Structure of the system |
| **Detailed Specifications** | Precise technical descriptions |
| **Interface Details** | Technical interface description |
| **Test Cases** | How will fulfillment be verified? |
| **Project Plan** | Milestones, schedule |

#### Characteristics
- Describes the **technical solution**
- Uses **developer's technical language**
- More detailed than the requirements specification
- Serves as **contractual basis** for implementation

---

### Comparison: Requirements Specification vs. Functional Specification

| Aspect | Requirements Specification | Functional Specification |
|--------|---------------------------|-------------------------|
| **Creator** | Client (customer) | Contractor (developer) |
| **Question** | WHAT? | HOW? |
| **Perspective** | Customer view | Developer view |
| **Language** | Business language | Technical language |
| **Level of Detail** | Overview | Detailed |
| **Project Phase** | Project definition | Project planning |
| **Basis for** | Functional specification | Implementation |

---

### Interaction in the Project

```
+--------------------------------------------------------------+
|                      PROJECT LIFECYCLE                        |
+--------------------------------------------------------------+
|                                                               |
|  Phase 1              Phase 2              Phase 3            |
|  DEFINITION           PLANNING             EXECUTION          |
|                                                               |
|  +-------------+     +-------------+     +-------------+      |
|  |Requirements | --> | Functional  | --> |Implementation|     |
|  |Specification|     |Specification|     |              |     |
|  | (Customer)  |     | (Developer) |     +-------------+      |
|  +-------------+     +-------------+                          |
|                                                               |
+--------------------------------------------------------------+
```

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Requirements Specification** | Describes WHAT the customer wants (requirements) |
| **Functional Specification** | Describes HOW the developer will implement it (solution) |
| **Client** | Who places the order (customer) |
| **Contractor** | Who executes the order (developer) |
| **Requirement** | Desired characteristic of the product |
| **Specification** | Detailed description of technical implementation |

---

## Exam Tips

### Typical Exam Questions
1. Who creates the requirements specification?
2. Who creates the functional specification?
3. What is the difference between the two?
4. In which project phase are they created?

### Memory Aid
- **R**equirements specification = **R**eceived by developer (from customer)
- **F**unctional specification = **F**ormed by developer

---

## Practice Exercises

### Exercise 1
Assign the terms correctly:
a) Describes the technical solution
b) Is created by the customer
c) Answers the question "WHAT?"
d) Answers the question "HOW?"

**Solution:**
- Requirements Specification: b), c)
- Functional Specification: a), d)

### Exercise 2
A customer wants inventory management software. Which statement belongs in the requirements specification, which in the functional specification?

a) "The system should display the current inventory level."
b) "The data will be stored in a MySQL database."
c) "The user interface should be easy to use."
d) "A REST API will be used for communication."

**Solution:**
- Requirements Specification: a), c) - Requirements from customer perspective
- Functional Specification: b), d) - Technical solution

### Exercise 3
In which project phase is the functional specification created?

**Solution:** In the project planning phase (Phase 2), based on the requirements specification from the definition phase.

---

## Cross-References

- [01-01-02 Project Phases](../01-01-fundamentals/01-01-02-project-phases.md) - When are the documents created?
- [01-04-02 Needs Analysis](./01-04-02-needs-analysis.md) - How are requirements determined?
- [08-04-01 Contract Types](../../08-business-processes/08-04-contract-law/08-04-01-contract-types.md) - Work contract
