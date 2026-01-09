# Debugging

## Learning Objectives

After this chapter, you should be able to:
- Understand the debugging process
- Know various debugging techniques
- Systematically locate errors
- Know debugging tools

---

## Core Content

### What is Debugging?

```
┌────────────────────────────────────────────────────────────────────┐
│                       DEBUGGING                                    │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Definition:                                                      │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ Debugging is the systematic process of finding, analyzing, │ │
│   │ and fixing errors (bugs) in software.                       │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   The term originates from early computer days:                    │
│   Grace Hopper found an actual moth (bug) in a computer           │
│   in 1947 that was causing malfunctions.                          │
│                                                                     │
│   Debugging cycle:                                                  │
│                                                                     │
│        ┌─────────────┐                                            │
│        │   Detect    │                                            │
│        │    error    │                                            │
│        └──────┬──────┘                                            │
│               ↓                                                    │
│        ┌──────┴──────┐         ┌─────────────┐                   │
│        │   Locate    │────────→│  Understand │                   │
│        │   error     │         │    error    │                   │
│        └─────────────┘         └──────┬──────┘                   │
│                                       ↓                           │
│        ┌─────────────┐         ┌──────┴──────┐                   │
│        │    Test     │←────────│    Fix      │                   │
│        │   fix       │         │   error     │                   │
│        └─────────────┘         └─────────────┘                   │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Debugging Strategies

```
┌────────────────────────────────────────────────────────────────────┐
│                   DEBUGGING STRATEGIES                             │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   1. STEP-BY-STEP EXECUTION                                        │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Go through code line by line                             │  │
│   │ • Check variable values after each step                    │  │
│   │ • Follow program flow                                      │  │
│   │                                                             │  │
│   │ Debugger commands:                                         │  │
│   │ ┌────────────┬────────────────────────────────┐            │  │
│   │ │ Step Over  │ Next line (skip functions)     │            │  │
│   │ │            │                                 │            │  │
│   │ │ Step Into  │ Jump into function             │            │  │
│   │ │ Step Out   │ Jump out of function           │            │  │
│   │ │ Continue   │ Run to next breakpoint         │            │  │
│   │ └────────────┴────────────────────────────────┘            │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   2. BREAKPOINTS (Stop points)                                     │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Marked positions where execution pauses                  │  │
│   │ • Allows inspection of program state                       │  │
│   │                                                             │  │
│   │   Line 10: int x = calculate();                            │  │
│   │   Line 11: ● int y = x * 2;   ← Breakpoint                │  │
│   │   Line 12: return y;                                       │  │
│   │                                                             │  │
│   │ Program stops BEFORE line 11                               │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

```
┌────────────────────────────────────────────────────────────────────┐
│               DEBUGGING STRATEGIES (Continued)                     │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   3. PRINT DEBUGGING (Insert outputs)                              │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Simple method without debugger                           │  │
│   │ • Place outputs in code                                    │  │
│   │ • Track variable values and program flow                   │  │
│   │                                                             │  │
│   │ Example:                                                   │  │
│   │ ┌──────────────────────────────────────────────────────┐  │  │
│   │ │ FUNCTION calculate(value)                            │  │  │
│   │ │   PRINT "Input: " + value                            │  │  │
│   │ │   result = value * 2                                 │  │  │
│   │ │   PRINT "Result: " + result                          │  │  │
│   │ │   RETURN result                                      │  │  │
│   │ │ END FUNCTION                                         │  │  │
│   │ └──────────────────────────────────────────────────────┘  │  │
│   │                                                             │  │
│   │ ⚠ After debugging: Remove outputs!                        │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   4. DIVIDE AND CONQUER                                            │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Split code in halves                                     │  │
│   │ • Check which half contains the error                      │  │
│   │ • Continue splitting that half                             │  │
│   │ • Quickly narrow down error location                       │  │
│   │                                                             │  │
│   │    [─────────────────────────────────]                     │  │
│   │             ↓ Error somewhere                              │  │
│   │    [───────────────] [───────────────]                     │  │
│   │         ↓ here?            not here                        │  │
│   │    [───────] [───────]                                     │  │
│   │       ↓ here!                                              │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Debugging Tools

```
┌────────────────────────────────────────────────────────────────────┐
│                   DEBUGGING TOOLS                                  │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   IDE-INTEGRATED DEBUGGERS                                         │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Built into development environments                      │  │
│   │ • Visual Studio, Eclipse, IntelliJ, VS Code               │  │
│   │                                                             │  │
│   │ Features:                                                  │  │
│   │ ┌─────────────────────────────────────────────────────┐   │  │
│   │ │ • Set breakpoints                                   │   │  │
│   │ │ • Inspect variables (Watch)                         │   │  │
│   │ │ • View call stack (call hierarchy)                  │   │  │
│   │ │ • Step-by-step execution                            │   │  │
│   │ │ • Conditional breakpoints                           │   │  │
│   │ │ • Change variable values at runtime                 │   │  │
│   │ └─────────────────────────────────────────────────────┘   │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   DEBUGGER VIEW (typical)                                          │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ ┌─────────────────┐  ┌──────────────────────────────────┐ │  │
│   │ │ Variables       │  │ Code                              │ │  │
│   │ │ ──────────────  │  │ ──────────────────────────────── │ │  │
│   │ │ x = 5           │  │ 10: int x = 5;                   │ │  │
│   │ │ y = 10          │  │ 11: ● int y = x * 2;             │ │  │
│   │ │ sum = 15        │  │ 12: int sum = x + y;             │ │  │
│   │ └─────────────────┘  │ 13: return sum;                  │ │  │
│   │ ┌─────────────────┐  └──────────────────────────────────┘ │  │
│   │ │ Call Stack      │                                       │  │
│   │ │ ──────────────  │  [Step Over] [Step Into] [Continue]  │  │
│   │ │ main()          │                                       │  │
│   │ │  → calculate()  │                                       │  │
│   │ └─────────────────┘                                       │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Systematic Error Search

```
┌────────────────────────────────────────────────────────────────────┐
│                  SYSTEMATIC ERROR SEARCH                           │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   STEP 1: Reproduce the error                                      │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Document exact steps that lead to error                  │  │
│   │ • Check reproducibility                                    │  │
│   │ • Note error message                                       │  │
│   └────────────────────────────────────────────────────────────┘  │
│                              ↓                                     │
│   STEP 2: Narrow down error location                               │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Which function? Which line?                              │  │
│   │ • When does the error occur?                               │  │
│   │ • With which inputs?                                       │  │
│   └────────────────────────────────────────────────────────────┘  │
│                              ↓                                     │
│   STEP 3: Form hypothesis                                          │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • What could be the cause?                                 │  │
│   │ • Make an assumption                                       │  │
│   └────────────────────────────────────────────────────────────┘  │
│                              ↓                                     │
│   STEP 4: Test hypothesis                                          │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Use debugging tools                                      │  │
│   │ • Check variables                                          │  │
│   │ • Confirmation or new hypothesis                           │  │
│   └────────────────────────────────────────────────────────────┘  │
│                              ↓                                     │
│   STEP 5: Fix error and test                                       │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Implement correction                                     │  │
│   │ • Test if error is fixed                                   │  │
│   │ • Regression test: No new errors?                          │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Common Error Sources

```
┌────────────────────────────────────────────────────────────────────┐
│                   COMMON ERROR SOURCES                             │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   OFF-BY-ONE ERRORS                                                │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Loops off by one:                                          │  │
│   │ FOR i FROM 1 TO 10  ← 10 iterations                       │  │
│   │ FOR i FROM 0 TO 10  ← 11 iterations!                      │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   NULL POINTER / UNINITIALIZED VARIABLES                          │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Variable used before it has a value:                       │  │
│   │ int x;                                                     │  │
│   │ y = x + 1;  ← x has no defined value!                     │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   WRONG COMPARISONS                                                │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Assignment instead of comparison:                          │  │
│   │ IF x = 5 THEN    ← Assignment (wrong!)                    │  │
│   │ IF x == 5 THEN   ← Comparison (correct)                   │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   INFINITE LOOPS                                                   │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Exit condition never reached:                              │  │
│   │ WHILE x > 0                                                │  │
│   │   PRINT x         ← x is never changed!                   │  │
│   │ END WHILE                                                  │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   SCOPE PROBLEMS                                                   │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Local variable shadows global:                             │  │
│   │ int value = 10;           ← global                        │  │
│   │ FUNCTION test()                                            │  │
│   │   int value = 5;          ← local, shadows global         │  │
│   │ ...                                                        │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Debugging vs. Desk Check

```
┌────────────────────────────────────────────────────────────────────┐
│             DEBUGGING vs. DESK CHECK                               │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   DESK CHECK                        DEBUGGING                      │
│   ┌──────────────────────────┐     ┌──────────────────────────┐   │
│   │ • Manual, without computer│     │ • With computer/tool     │   │
│   │ • Before execution        │     │ • During execution       │   │
│   │ • Mentally walk through   │     │ • Actually execute       │   │
│   │   code                    │     │   code                   │   │
│   │ • Table with values       │     │ • Debugger view          │   │
│   │ • No runtime errors       │     │ • Real runtime errors    │   │
│   │   visible                 │     │   visible                │   │
│   └──────────────────────────┘     └──────────────────────────┘   │
│                                                                     │
│   Both methods complement each other:                              │
│   1. Desk check → Find logic errors beforehand                    │
│   2. Debugging → Locate runtime errors                            │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Bug** | Error in software |
| **Debugging** | Process of finding and fixing errors |
| **Breakpoint** | Stop point in code |
| **Step Over** | Next line, skip functions |
| **Step Into** | Jump into function |
| **Watch** | Monitor a variable |
| **Call Stack** | Call hierarchy of functions |

---

## Exam Tips

### Common Exam Questions

- What is debugging?
- Name debugging strategies
- Explain the difference between Step Over and Step Into

### Important to Remember

- Debugging = **systematic error search**
- **Breakpoints** stop execution
- **Step Over:** Execute function as a whole
- **Step Into:** Jump into function
- **Print debugging:** Simple, but remove outputs!
- Always be able to **reproduce the error**!
- After fix: **Regression test**

---

## Practice Exercises

### Exercise 1
Which debugging strategy would you use if you know the error is somewhere in a 500-line function?

**Solution:**
**Divide and Conquer:**
1. Set breakpoint in the middle of function (around line 250)
2. Check if error occurs before or after this point
3. Continue splitting the affected half
4. Quickly narrow down error location

Alternative: Binary search with print statements at strategic locations.

### Exercise 2
What is the difference between Step Over and Step Into when debugging?

**Solution:**
| Step Over | Step Into |
|-----------|-----------|
| Executes current line | Executes current line |
| Jumps to next line | For function calls: Jumps INTO function |
| Functions are executed completely | Function is walked through line by line |
| Good for already tested functions | Good for examining a function |

### Exercise 3
Find the error in the following pseudocode:

```
FUNCTION sum(n)
  result = 0
  FOR i FROM 1 TO n
    result = result + 1
  END FOR
  RETURN result
END FUNCTION
```

**Solution:**
The error is in line: `result = result + 1`

The function should calculate the sum from 1 to n, but always adds only 1.

**Correction:**
`result = result + i`

The variable `i` (the loop counter) must be added, not the constant 1.

---

## Cross-References

- [06-02-06 Desk Check](../06-02-programming/06-02-06-desk-check.md) - Manual code review
- [06-02-07 Code Debugging](../06-02-programming/06-02-07-code-debugging.md) - Error types
- [06-06-02 Testing](./06-06-02-testing.md) - Software testing
- [06-02-02 Control Structures](../06-02-programming/06-02-02-control-structures.md) - Loops
