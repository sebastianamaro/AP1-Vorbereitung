# Dynamic Testing Techniques (Coverage Measures)

## Learning Objectives

After this chapter you should be able to:
- Explain and distinguish statement, branch and path coverage
- Assign these techniques to white-box testing
- Determine coverage levels for simple code

---

## Core Content

**Source code analysis** is part of **white-box testing**. Control-flow-oriented coverage measures assess how thoroughly the code is exercised by test cases:

### Statement coverage (C0)

- Goal: execute **every statement** at least once.
- Weakest measure – does not necessarily reach both branches of a decision.

### Branch/decision coverage (C1)

- Goal: **every branch** of every decision at least once (i.e. `if` **true** *and* **false**).
- Stronger than C0; C1 includes C0.

### Path coverage (C2)

- Goal: **every possible path** through the program.
- Strongest measure, but with loops it quickly becomes **practically unachievable** in full (path explosion).

```
Hierarchy of thoroughness:  Statement (C0)  ⊂  Branch (C1)  ⊂  Path (C2)
```

### Example

```
if (a > 0):        # one decision
    x = 1
# (no else)
```
- **Statement coverage:** one test with `a > 0` is enough (all statements executed).
- **Branch coverage:** an additional test with `a <= 0` is needed (the "false" branch).

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **Statement coverage (C0)** | Execute every statement at least once |
| **Branch coverage (C1)** | Every branch (true/false) at least once |
| **Path coverage (C2)** | Every program path; often not fully achievable |

---

## Exam Tips

- Remember the **order of thoroughness**: C0 ⊂ C1 ⊂ C2.
- Typical task: for given code, specify the **test cases** that achieve a particular coverage.
- These techniques belong to **white-box testing** (code knowledge required).

---

## Practice Exercise

**Task (based on ConSystem GmbH):** Describe statement, branch and path coverage in bullet points and give, for an `if/else` example, test cases for full branch coverage.

---

## Cross-References

- [02-03 Software Testing](./02-03-testen.md)
- [06-02 Pseudocode Analysis](../06-software/06-02-programmierung/06-02-04-pseudocode-analyse.md)
