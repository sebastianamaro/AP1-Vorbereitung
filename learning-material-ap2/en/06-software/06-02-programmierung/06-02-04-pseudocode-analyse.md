# Pseudocode Analysis (Schreibtischtest)

## Learning Objectives

After this chapter you should be able to:
- Read and follow pseudocode
- Perform a Schreibtischtest (desk check)
- Recognise control structures

---

## Core Content

### Pseudocode

**Pseudocode** describes program logic in a **language-independent** and readable way, without strict syntax. Typical building blocks:

- **Assignment:** `preis ← 100`
- **Branching:** `WENN bedingung DANN … SONST … ENDEWENN`
- **Loops:** `SOLANGE bedingung …`, `FÜR i VON 1 BIS n …`
- **Input/output:** `LIES`, `GIB AUS`

### Schreibtischtest (Desk Check)

In the **Schreibtischtest** (desk check) you run through the code **by hand** with concrete input values and log the variables **step by step** in a **value table** (*Wertetabelle*). This checks whether the code produces the expected outputs.

#### Example: Commission Calculation

```
LIES umsatz
WENN umsatz > 10000 DANN
    provision ← umsatz * 0.05
SONST
    provision ← umsatz * 0.02
ENDEWENN
GIB AUS provision
```

**Value table** (input `umsatz = 20000`):

| Step | umsatz | Condition | provision |
|------|--------|-----------|-----------|
| LIES | 20000 | – | – |
| WENN | 20000 | 20000 > 10000 → true | – |
| DANN | 20000 | – | 20000·0.05 = **1000** |
| OUTPUT | | | 1000 |

→ The expected output **1000** is correct.

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Pseudocode** | Language-independent description of the program logic |
| **Schreibtischtest** (desk check) | Running through the code manually with a value table |
| **Wertetabelle** (value table) | Log of the variable values at each step |
| **Control structure** | Branch, loop, sequence |

---

## Exam Tips

- The **Schreibtischtest** is **newly emphasised** in the updated catalogue – keep the value table cleanly.
- With loops, log each iteration separately (common source of errors: the termination condition).
- Task: check whether the pseudocode produces the **correct output data** (compare against given inputs/outputs).

---

## Practice Exercise

**Task (based on ConSystem GmbH):** Use a Schreibtischtest to check whether a given piece of pseudocode for commission calculation produces the correct outputs for the given inputs.

---

## Cross-References

- [06-02-02 Sorting and Search Algorithms](./06-02-02-sortier-suchalgorithmen.md)
- [06-06-01 Debugging](../06-06-qualitaet-ux/06-06-01-debugging.md)
