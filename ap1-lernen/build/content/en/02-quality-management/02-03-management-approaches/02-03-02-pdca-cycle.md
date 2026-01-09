# PDCA Cycle

## Learning Objectives

After this chapter you should be able to:
- Explain the PDCA cycle
- Describe the four phases
- Understand the application of the PDCA cycle
- Know the connection to continuous improvement

---

## Core Content

### What is the PDCA Cycle?

The **PDCA cycle** (also called Deming cycle or Deming circle) is an iterative method for continuously improving processes, products, and services.

**PDCA stands for:**
- **P**lan
- **D**o
- **C**heck
- **A**ct

---

### The Cycle in Detail

```
                    ┌─────────────────┐
                    │      PLAN       │
                    │                 │
                    │ Analyze problem │
                    │ Plan measures   │
                    └────────┬────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
              │              ▼              │
              │     ┌─────────────────┐     │
              │     │       DO        │     │
              │     │                 │     │
              │     │ Test measures   │     │
              │     │ on a small      │     │
              │     │ scale           │     │
              │     └────────┬────────┘     │
              │              │              │
    ┌─────────────────┐      │      ┌─────────────────┐
    │      ACT        │      │      │     CHECK       │
    │                 │◄─────┼─────►│                 │
    │ If successful:  │      │      │ Evaluate        │
    │ standardize     │      │      │ results         │
    │ If unsuccessful:│      │      │ Check           │
    │ correct         │      │      │ effectiveness   │
    └────────┬────────┘      │      └────────┬────────┘
             │               │               │
             └───────────────┴───────────────┘
                             │
                             ▼
                    Next cycle...
```

---

### The Four Phases

| Phase | English | Activities |
|-------|---------|------------|
| **P** | Plan | Analyze problem, determine causes, set objectives, plan measures |
| **D** | Do | Test/implement planned measures on a small scale |
| **C** | Check | Measure results, compare with objectives, evaluate effectiveness |
| **A** | Act | If successful: standardize; If unsuccessful: correct and start new cycle |

---

### Phase 1: Plan

**Goal:** Understand the problem and develop a solution

**Activities:**
1. Identify and describe the problem
2. Analyze the current state
3. Determine causes (e.g., with Ishikawa diagram)
4. Set objectives (SMART!)
5. Plan measures
6. Establish resources and timeline

---

### Phase 2: Do

**Goal:** Test planned measures

**Activities:**
1. Implement measures on a **small scale**
2. Use test environment or pilot project
3. Collect data
4. Document experiences

**Important:** Do not roll out across the board immediately!

---

### Phase 3: Check

**Goal:** Evaluate effectiveness of measures

**Activities:**
1. Measure results
2. Compare with objectives (target-actual comparison)
3. Analyze deviations
4. Determine causes of deviations
5. Draw conclusions

---

### Phase 4: Act

**Goal:** Draw consequences from the review

**If successful:**
- Establish measures as standard
- Roll out across the board
- Document

**If unsuccessful:**
- Analyze causes of failure
- Adjust measures
- Start new PDCA cycle

---

### Application of the PDCA Cycle

| Area | Example |
|------|---------|
| **Software Development** | Iterative improvement of a feature |
| **IT Support** | Optimization of the ticket process |
| **Project Management** | Implementing lessons learned |
| **Quality Management** | Reducing error rate |

---

### PDCA in ISO 9001

**DIN EN ISO 9001** is based on the PDCA cycle:

```
┌───────────────────────────────────────────────────────────────┐
│                     ISO 9001 and PDCA                         │
├───────────────────────────────────────────────────────────────┤
│                                                               │
│   PLAN                          DO                            │
│   • Context of the organization • Support                     │
│   • Leadership                  • Operation                   │
│   • Planning                                                  │
│                                                               │
│   ACT                           CHECK                         │
│   • Improvement                 • Performance evaluation      │
│                                                               │
└───────────────────────────────────────────────────────────────┘
```

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **PDCA Cycle** | Plan-Do-Check-Act, method for continuous improvement |
| **Deming Cycle** | Another name for PDCA (after W. Edwards Deming) |
| **CIP** | Continuous Improvement Process |
| **Iteration** | Repeated pass through the cycle |
| **Standardization** | Establishing successful measures as binding |

---

## Exam Tips

### Common Exam Questions
- What does PDCA stand for?
- Describe the four phases of the PDCA cycle
- In which phase are measures standardized?
- Why is it called a "cycle"?

### Memory Aid
**P**lan **D**iligently, **C**heck **A**ccurately

Or remember: Plan - Do - Check - Act (continuous loop)

---

## Practice Exercises

### Exercise 1
What does the abbreviation PDCA stand for?

**Solution:**
- **P** = Plan
- **D** = Do
- **C** = Check
- **A** = Act

### Exercise 2
Briefly describe the four phases of the PDCA cycle.

**Solution:**
1. **Plan:** Analyze problem, plan measures
2. **Do:** Test measures on a small scale
3. **Check:** Evaluate results, check effectiveness
4. **Act:** If successful, standardize; if unsuccessful, correct and start new cycle

### Exercise 3
An IT company wants to reduce the number of support tickets. Describe how the PDCA cycle could be applied.

**Solution:**
1. **Plan:** Analyze ticket statistics, identify frequent causes (e.g., missing documentation), plan measure (create FAQ)
2. **Do:** Create and test FAQ for a pilot topic
3. **Check:** Measure ticket volume for this topic, collect user feedback
4. **Act:** If successful, expand and publish FAQ; if unsuccessful, adjust format/content and test again

---

## Cross-References

- [02-03-01 TQM](./02-03-01-tqm.md) - PDCA as part of TQM
- [02-02-01 DIN EN ISO 9000](../02-02-standards-certification/02-02-01-din-en-iso-9000.md) - PDCA in the standard
- [01-05-02 Reflection Methods](../../01-project-management/01-05-teamwork/01-05-02-reflection-methods.md) - Lessons Learned and CIP
- [01-01-03 SMART Principle](../../01-project-management/01-01-fundamentals/01-01-03-smart-principle.md) - Objectives in the Plan phase
