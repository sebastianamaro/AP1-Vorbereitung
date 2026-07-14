# Software Testing

## Learning Objectives

After this chapter you should be able to:
- Explain test-driven development (TDD)
- Distinguish black-box and white-box tests
- Classify the most important test levels

---

## Core Content

### Test-driven development (TDD)

In **test-driven development**, the **test is written first**, then the code that satisfies it. Cycle:

1. **Red** – write a failing test
2. **Green** – write minimal code until the test passes
3. **Refactor** – improve the code, tests stay green

Advantages: high test coverage, clear requirements, safe refactoring.

### Black-box vs. white-box

| | Black-box test | White-box test |
|--|----------------|----------------|
| **View** | only behavior (input/output), **without** knowledge of the code | **with** knowledge of the internal structure/source code |
| **Basis** | specification/requirements | program logic, control flow |
| **Examples** | equivalence classes, boundary value analysis | coverage measures (statement/branch/path) |
| **Finds** | missing/incorrect functions | unreached code paths, logic errors |

*Grey-box* combines both views.

### Test levels (V-model)

- **Module/unit test** – individual component
- **Integration test** – interaction of the components
- **System test** – overall system against requirements
- **Acceptance test** – by the customer (acceptance)

### Static vs. dynamic

- **Static:** without execution (review, static code analysis)
- **Dynamic:** with execution (test cases, see [Dynamic Testing Techniques](./02-04-dynamische-testverfahren.md))

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **TDD** | Test first, then code (Red-Green-Refactor) |
| **Black-box** | Test without knowledge of the code |
| **White-box** | Test with knowledge of the code structure |
| **Acceptance test** | Acceptance test by the customer |

---

## Exam Tips

- **Black-box vs. white-box** is a standard comparison question – name the view, the basis and one example each.
- Classify TDD as an **agile** practice (see [Process Models](../01-project-management/01-03-vorgehensmodelle.md)).
- Test levels in the correct order (unit → integration → system → acceptance).

---

## Practice Exercise

**Task (based on ConSystem GmbH):** Explain to a customer (1) test-driven development and (2) the difference between black-box and white-box tests.

---

## Cross-References

- [02-04 Dynamic Testing Techniques](./02-04-dynamische-testverfahren.md)
- [06-05 Debugging](../06-software/06-06-qualitaet-ux/06-06-01-debugging.md)
