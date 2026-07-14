# Recursion, Iteration & Modularization

## Learning Objectives

After this chapter you should:
- Distinguish recursion and iteration
- Weigh advantages and disadvantages
- Explain modularization and its benefit

---

## Core Content

### Recursion vs. iteration

- **Recursion:** a function calls **itself** until a **termination condition** is met.
- **Iteration:** repetition via a **loop**.

```text
Rekursiv:   fakultaet(n) = n * fakultaet(n-1),  fakultaet(0) = 1
Iterativ:   ergebnis = 1;  für i von 1 bis n:  ergebnis = ergebnis * i
```

| | Recursion | Iteration |
|--|-----------|-----------|
| Readability | elegant for tree-like problems | often simpler |
| Memory | call stack (risk of stack overflow) | constant |
| Speed | overhead from calls | mostly faster |

> Important: a **termination condition** is mandatory, otherwise infinite recursion → **Stack Overflow**.

### Modularization

**Modularization** divides software into **logically related, independent modules** (functions, classes, components, microservices).

Advantages: **reusability**, easier **maintenance/debugging**, **testability**, parallel development, lower coupling.

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **Recursion** | Self-call with a termination condition |
| **Iteration** | Repetition via a loop |
| **Modularization** | Division into independent modules |
| **Coupling/Cohesion** | Dependency between / cohesion within modules |

---

## Exam Tips

- Recursion always needs a **termination condition** (otherwise stack overflow).
- Weigh recursion vs. iteration by **memory/speed** (factorial as the standard example).
- Modularization: aim for **low coupling, high cohesion**.

---

## Practice Exercise

**Task:** Write the factorial recursively and iteratively (pseudocode) and name one advantage and one disadvantage of recursion.

---

## Cross-References

- [06-02-02 Sorting and Search Algorithms](../06-02-programmierung/06-02-02-sortier-suchalgorithmen.md)
- [06-04-05 Package Diagram](../06-04-uml/06-04-05-paketdiagramm.md)
