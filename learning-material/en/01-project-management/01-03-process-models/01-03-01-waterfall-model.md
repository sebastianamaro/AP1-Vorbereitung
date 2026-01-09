# Waterfall Model

## Learning Objectives

After this chapter, you should be able to:
- Explain the waterfall model
- Know the phases of the waterfall model
- Name advantages and disadvantages
- Know when the waterfall model is suitable

---

## Core Content

### What is the Waterfall Model?

The **waterfall model** is a **linear process model** for software development and project management. The phases are completed one after another - like a waterfall that only flows in one direction.

---

### The Phases of the Waterfall Model

```
+-----------------+
|   1. ANALYSIS   |
+--------+--------+
         v
+-----------------+
|   2. DESIGN     |
+--------+--------+
         v
+-----------------+
| 3. IMPLEMENTATION |
+--------+--------+
         v
+-----------------+
|    4. TEST      |
+--------+--------+
         v
+-----------------+
|  5. OPERATION   |
+-----------------+
```

---

### Description of the Phases

| Phase | Description | Results |
|-------|-------------|---------|
| **1. Analysis** | Capture and document requirements | Requirements document, requirements specification |
| **2. Design** | Design technical solution | Functional specification, architecture, design |
| **3. Implementation** | Programming/execution | Source code, modules |
| **4. Test** | Check for errors and requirements | Test protocols, bug lists |
| **5. Operation** | Production deployment and maintenance | Documentation, support |

---

### Characteristics

- **Sequential:** One phase after another
- **Documentation-driven:** Each phase produces documents
- **Plannable:** Scope and duration determined in advance
- **Formal:** Clear phase transitions and milestones

---

### Advantages and Disadvantages

#### Advantages

| Advantage | Explanation |
|-----------|-------------|
| **Clear structure** | Easy to understand and plan |
| **Good documentation** | Each phase produces results |
| **Predictability** | Costs and time calculable |
| **Traceability** | Clear milestones and transitions |

#### Disadvantages

| Disadvantage | Explanation |
|--------------|-------------|
| **Inflexible** | Changes are expensive and time-consuming |
| **Late results** | Working product only at the end |
| **Risk** | Errors discovered late |
| **Customer involvement** | Customer only sees result at the end |

---

### When is the Waterfall Model Suitable?

**Suitable for:**
- Projects with clear, stable requirements
- Projects with known technology
- Regulated areas with documentation requirements
- Small, manageable projects

**Not suitable for:**
- Projects with changing requirements
- Innovative projects with unknown technology
- Projects that need to deliver results quickly

---

### Backtracking in the Waterfall Model

Although the model theoretically only runs forward, in practice there are often **backtracking steps**:

```
+-----------------+
|   1. ANALYSIS   |<------+
+--------+--------+       |
         v                | Backtrack on
+-----------------+       | problems
|   2. DESIGN     |<------+
+--------+--------+       |
         v                |
+-----------------+       |
| 3. IMPLEMENTATION |-----+
+--------+--------+
         v
        ...
```

**Important:** After backtracking, all following phases must be completed again!

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Waterfall Model** | Linear, sequential process model |
| **Phase** | Completed section with defined inputs and outputs |
| **Milestone** | Checkpoint at the end of a phase |
| **Documentation** | Written results of each phase |

---

## Exam Tips

### Frequent Exam Questions
- Name phases in correct order
- Advantages and disadvantages compared to agile methods
- When is waterfall suitable?

### Comparison with Scrum
| Aspect | Waterfall | Scrum |
|--------|-----------|-------|
| Process | Sequential | Iterative |
| Changes | Difficult | Welcome |
| Documentation | Extensive | Minimal |
| Customer contact | At beginning/end | Continuous |
| Result | At the end | After each Sprint |

---

## Practice Exercises

### Exercise 1
Name the five phases of the waterfall model in the correct order.

**Solution:**
1. Analysis
2. Design
3. Implementation
4. Test
5. Operation

### Exercise 2
Name two advantages and two disadvantages of the waterfall model.

**Solution:**
Advantages:
- Clear structure and good predictability
- Extensive documentation

Disadvantages:
- Inflexible with changes
- Working product only visible at the end

### Exercise 3
For which project would the waterfall model be better suited?
a) Development of an innovative app with unclear requirements
b) Creation of accounting software according to established standards

**Solution:** b) - Clear requirements through standards, stable scope

---

## Cross-References

- [01-03-02 Scrum](./01-03-02-scrum.md) - Agile alternative
- [01-01-02 Project Phases](../01-01-fundamentals/01-01-02-project-phases.md) - General project phases
- [06-06-01 SDLC](../../06-software/06-06-development-process/06-06-01-sdlc.md) - Software development process
