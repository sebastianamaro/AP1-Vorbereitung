# Debugging

## Learning Objectives

After this chapter you should:
- Know debugging techniques and tools
- Distinguish types of errors
- Find errors in given code (e.g. a sorting algorithm)

---

## Core Content

**Debugging** is the systematic **finding and fixing of errors (bugs)** in code.

### Types of errors

| Type | Description |
|-----|--------------|
| **Syntax error** | Violation of the language rules (detected by the compiler) |
| **Runtime error** | Crash at runtime (e.g. division by 0, NullPointer) |
| **Logic error** | Program runs but produces **wrong** results (hardest to find) |

### Tools & techniques

- **Breakpoint (Haltepunkt):** halt the program at a specific point
- **Single step (Step over/into/out):** execute line by line
- **Watch/variable display:** observe values at runtime
- **Call Stack:** view the call hierarchy
- **Logging/outputs:** log intermediate values
- **Desk check (Schreibtischtest):** run through the code by hand (see [06-02-04](../06-02-programmierung/06-02-04-pseudocode-analyse.md))

### Example: error in a sorting algorithm

Typical bugs in Bubble Sort: wrong **loop bounds** (`< n` instead of `< n-1` → index error), wrong **comparison direction** (`<` instead of `>`), or a missing **swap variable**. With a breakpoint + a value table you check the flow step by step.

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **Breakpoint** | A halt point for pausing the program |
| **Logic error** | Wrong result despite runnable code |
| **Watch** | Observing variable values at runtime |
| **Call Stack** | The call chain of the methods |

---

## Exam Tips

- Distinguish **syntax/runtime/logic** – logic errors are the hardest.
- **Error hunting in code** is **newly emphasized** in the updated catalogue.
- Typical task: analyze and correct a faulty Java sorting algorithm – use a desk check (Schreibtischtest).

---

## Practice Exercise

**Task (after ConSystem GmbH):** A piece of Java code is supposed to implement a sorting algorithm but works incorrectly. Find and fix the error (e.g. loop bound/comparison) and back it up with a desk check.

---

## Cross-References

- [06-02-04 Analysis of Pseudocode](../06-02-programmierung/06-02-04-pseudocode-analyse.md)
- [02-03 Testing Software](../../02-quality-management/02-03-testen.md)
