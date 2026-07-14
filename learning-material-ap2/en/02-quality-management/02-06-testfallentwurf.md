# Test Case Design & Test Types

## Learning Objectives

After this chapter you should be able to:
- Apply equivalence classes and boundary value analysis
- Know the FIRST principle for unit tests
- Classify load/performance tests and TDD

---

## Core Content

### Equivalence class partitioning

The input space is divided into **classes with the same behavior**; **one** test case per class is enough (valid and invalid classes).

*Example:* age 18–67 valid → classes: **<18** (invalid), **18–67** (valid), **>67** (invalid).

### Boundary value analysis

Errors often occur at the **edges** → test **at and around the boundaries**. For 18–67: **17, 18, 19** and **66, 67, 68**.

### FIRST principle (good unit tests)

| Letter | Meaning |
|-----------|-----------|
| **F**ast | quick to run |
| **I**solated | independent of other tests |
| **R**epeatable | reproducible (same result) |
| **S**elf-validating | delivers a clear pass/fail |
| **T**imely | timely (ideally before the code, TDD) |

### Further test types

- **TDD** – test first, then code (**Red → Green → Refactor**), see [02-03](./02-03-testen.md)
- **Load/performance test** – behavior under high load / response times, scalability *(new in the catalog)*
- **Regression test** – after changes, ensure existing functionality still works

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **Equivalence class** | Input group with the same behavior |
| **Boundary value analysis** | Test at/around the boundary values |
| **FIRST** | Fast, Isolated, Repeatable, Self-validating, Timely |
| **Load test** | Behavior under high load |

---

## Exam Tips

- **Equivalence classes + boundary values** is a frequent test case design task – specify valid *and* invalid classes, test the boundaries too.
- Know **FIRST** for unit tests.
- Load/performance tests are **new** in the catalog – name the purpose (load/response time/scaling).

---

## Practice Exercise

**Task:** For an input field "Quantity 1–100": form the equivalence classes and name the boundary value test cases.

<details>
<summary>Solution</summary>

Classes: <1 (invalid), 1–100 (valid), >100 (invalid). Boundary values: 0, 1, 2 and 99, 100, 101.

</details>

---

## Cross-References

- [02-03 Software Testing](./02-03-testen.md)
- [02-04 Dynamic Testing Techniques](./02-04-dynamische-testverfahren.md)
