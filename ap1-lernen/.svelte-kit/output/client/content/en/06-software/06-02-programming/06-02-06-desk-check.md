# Desk Check

## Learning Objectives

After this chapter, you should be able to:
- Perform a desk check
- Analyze code line by line
- Track variable values during execution
- Find errors through manual code review

---

## Core Content

### What is a Desk Check?

A **desk check** (also called "trace table") is a method for manually reviewing program code, going through the code line by line.

```
┌─────────────────────────────────────────────────────────────────┐
│                    DESK CHECK                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Purpose:                                                      │
│   • Test code WITHOUT a computer                                │
│   • Verify logic                                                │
│   • Find errors                                                 │
│   • Understand execution flow                                   │
│                                                                 │
│   Procedure:                                                    │
│   1. Go through code line by line                               │
│   2. Note variable values in a table                            │
│   3. Evaluate conditions                                        │
│   4. Count loop iterations                                      │
│   5. Determine final values/outputs                             │
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐ │
│   │   IMPORTANT FOR THE EXAM!                               │ │
│   │   [NEW IN 2025 EXAM CATALOG]                            │ │
│   │                                                          │ │
│   │   Common question types:                                 │ │
│   │   "What does the following code output?"                │ │
│   │   "What value does x have after execution?"             │ │
│   └─────────────────────────────────────────────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### The Trace Table

A **trace table** documents the values of all variables after each step.

```
┌────────────────────────────────────────────────────────────────┐
│                    TRACE TABLE                                 │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Code:                                                        │
│   ┌────────────────────────────┐                              │
│   │   a = 5                    │                              │
│   │   b = 3                    │                              │
│   │   c = a + b                │                              │
│   │   a = a * 2                │                              │
│   └────────────────────────────┘                              │
│                                                                │
│   Trace Table:                                                 │
│   ┌────────┬───────────────┬───────┬───────┬───────┐         │
│   │ Line   │ Statement     │   a   │   b   │   c   │         │
│   ├────────┼───────────────┼───────┼───────┼───────┤         │
│   │ Start  │ -             │   -   │   -   │   -   │         │
│   │   1    │ a = 5         │   5   │   -   │   -   │         │
│   │   2    │ b = 3         │   5   │   3   │   -   │         │
│   │   3    │ c = a + b     │   5   │   3   │   8   │         │
│   │   4    │ a = a * 2     │  10   │   3   │   8   │         │
│   └────────┴───────────────┴───────┴───────┴───────┘         │
│                                                                │
│   Final result: a = 10, b = 3, c = 8                          │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Example 1: Simple Sequence

```
┌────────────────────────────────────────────────────────────────┐
│               EXAMPLE: SIMPLE SEQUENCE                         │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Code:                                                        │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   x = 10                                                │ │
│   │   y = 4                                                 │ │
│   │   z = x - y                                             │ │
│   │   x = z * 2                                             │ │
│   │   output(x)                                             │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Desk check:                                                  │
│   ┌──────┬─────────────┬──────┬──────┬──────┬─────────────┐ │
│   │Line  │ Statement   │  x   │  y   │  z   │ Output      │ │
│   ├──────┼─────────────┼──────┼──────┼──────┼─────────────┤ │
│   │  1   │ x = 10      │  10  │  -   │  -   │             │ │
│   │  2   │ y = 4       │  10  │  4   │  -   │             │ │
│   │  3   │ z = x - y   │  10  │  4   │  6   │             │ │
│   │  4   │ x = z * 2   │  12  │  4   │  6   │             │ │
│   │  5   │ output(x)   │  12  │  4   │  6   │ 12          │ │
│   └──────┴─────────────┴──────┴──────┴──────┴─────────────┘ │
│                                                                │
│   Output: 12                                                   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Example 2: With Condition

```
┌────────────────────────────────────────────────────────────────┐
│               EXAMPLE: WITH CONDITION                          │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Code:                                                        │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   age = 16                                              │ │
│   │   IF age >= 18 THEN                                     │ │
│   │       status = "adult"                                  │ │
│   │   ELSE                                                  │ │
│   │       status = "minor"                                  │ │
│   │   END IF                                                │ │
│   │   output(status)                                        │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Desk check:                                                  │
│   ┌──────┬────────────────────┬───────┬──────────────────┐  │
│   │Line  │ Statement          │ age   │ status           │  │
│   ├──────┼────────────────────┼───────┼──────────────────┤  │
│   │  1   │ age = 16           │  16   │ -                │  │
│   │  2   │ 16 >= 18?          │  16   │ -                │  │
│   │      │ → FALSE            │       │                  │  │
│   │  5   │ status = "minor"   │  16   │ "minor"          │  │
│   │  7   │ output(status)     │  16   │ "minor"          │  │
│   └──────┴────────────────────┴───────┴──────────────────┘  │
│                                                                │
│   Output: "minor"                                              │
│   (Lines 3-4 were skipped because condition was false)        │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Example 3: With Loop

```
┌────────────────────────────────────────────────────────────────┐
│                EXAMPLE: WITH LOOP                              │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Code:                                                        │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   sum = 0                                               │ │
│   │   FOR i FROM 1 TO 4                                     │ │
│   │       sum = sum + i                                     │ │
│   │   END FOR                                               │ │
│   │   output(sum)                                           │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Desk check:                                                  │
│   ┌───────────┬─────────────────────────┬───────┬───────┐   │
│   │ Iteration │ Statement               │   i   │ sum   │   │
│   ├───────────┼─────────────────────────┼───────┼───────┤   │
│   │   Start   │ sum = 0                 │   -   │   0   │   │
│   │     1     │ i = 1, sum = 0 + 1      │   1   │   1   │   │
│   │     2     │ i = 2, sum = 1 + 2      │   2   │   3   │   │
│   │     3     │ i = 3, sum = 3 + 3      │   3   │   6   │   │
│   │     4     │ i = 4, sum = 6 + 4      │   4   │  10   │   │
│   │   End     │ output(sum)             │   -   │  10   │   │
│   └───────────┴─────────────────────────┴───────┴───────┘   │
│                                                                │
│   Output: 10                                                   │
│   (Sum of numbers 1+2+3+4 = 10)                               │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Example 4: While Loop

```
┌────────────────────────────────────────────────────────────────┐
│              EXAMPLE: WHILE LOOP                               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Code:                                                        │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   counter = 1                                           │ │
│   │   result = 1                                            │ │
│   │   WHILE counter <= 3                                    │ │
│   │       result = result * counter                         │ │
│   │       counter = counter + 1                             │ │
│   │   END WHILE                                             │ │
│   │   output(result)                                        │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Desk check:                                                  │
│   ┌─────────┬──────────────────────┬─────────┬───────────┐  │
│   │Iteration│ Check/Statement      │ counter │ result    │  │
│   ├─────────┼──────────────────────┼─────────┼───────────┤  │
│   │  Start  │ counter=1, result=1  │    1    │     1     │  │
│   │    1    │ 1 <= 3? → YES        │    1    │     1     │  │
│   │         │ result = 1 * 1       │    1    │     1     │  │
│   │         │ counter = 1 + 1      │    2    │     1     │  │
│   │    2    │ 2 <= 3? → YES        │    2    │     1     │  │
│   │         │ result = 1 * 2       │    2    │     2     │  │
│   │         │ counter = 2 + 1      │    3    │     2     │  │
│   │    3    │ 3 <= 3? → YES        │    3    │     2     │  │
│   │         │ result = 2 * 3       │    3    │     6     │  │
│   │         │ counter = 3 + 1      │    4    │     6     │  │
│   │  End    │ 4 <= 3? → NO         │    4    │     6     │  │
│   └─────────┴──────────────────────┴─────────┴───────────┘  │
│                                                                │
│   Output: 6 (Factorial of 3: 1 × 2 × 3 = 6)                   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Example 5: Nested Structures

```
┌────────────────────────────────────────────────────────────────┐
│            EXAMPLE: NESTED STRUCTURES                          │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Code:                                                        │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   sum = 0                                               │ │
│   │   FOR i FROM 1 TO 3                                     │ │
│   │       IF i MOD 2 == 1 THEN    // i is odd              │ │
│   │           sum = sum + i                                 │ │
│   │       END IF                                            │ │
│   │   END FOR                                               │ │
│   │   output(sum)                                           │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Desk check:                                                  │
│   ┌─────────┬────────────┬─────────────┬───────┬───────┐    │
│   │    i    │ i MOD 2    │ Condition   │ Action│ sum   │    │
│   ├─────────┼────────────┼─────────────┼───────┼───────┤    │
│   │  Start  │     -      │      -      │   -   │   0   │    │
│   │    1    │     1      │ 1==1 → YES  │ +1    │   1   │    │
│   │    2    │     0      │ 0==1 → NO   │   -   │   1   │    │
│   │    3    │     1      │ 1==1 → YES  │ +3    │   4   │    │
│   └─────────┴────────────┴─────────────┴───────┴───────┘    │
│                                                                │
│   Output: 4 (Sum of odd numbers: 1 + 3 = 4)                   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Common Pitfalls

```
┌────────────────────────────────────────────────────────────────┐
│                  COMMON PITFALLS                               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   1. Off-by-one errors in loops:                              │
│      FOR i FROM 1 TO 5    → 5 iterations (1,2,3,4,5)          │
│      FOR i FROM 0 TO 4    → 5 iterations (0,1,2,3,4)          │
│                                                                │
│   2. Order in assignments:                                     │
│      a = 5                                                     │
│      b = a        → b = 5 (not old value of a)                │
│      a = 10       → a = 10, but b remains 5!                  │
│                                                                │
│   3. Integer division:                                         │
│      7 / 2 = 3 (with Integer!)                                 │
│      7 MOD 2 = 1 (remainder)                                   │
│                                                                │
│   4. Comparison vs. assignment:                                │
│      a = 5     → Assignment                                    │
│      a == 5    → Comparison (returns true/false)              │
│                                                                │
│   5. Logical operators:                                        │
│      true AND false → false                                    │
│      true OR false → true                                      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Checklist for Desk Check

| Step | Action |
|------|--------|
| 1 | Identify all variables |
| 2 | Create table with columns for each variable |
| 3 | Enter initial values (or "-" for uninitialized) |
| 4 | Go through code line by line |
| 5 | For conditions: Evaluate and choose appropriate path |
| 6 | For loops: Document each iteration individually |
| 7 | Note final values and outputs |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Desk Check** | Manual code review |
| **Trace Table** | Documentation of variable values |
| **MOD** | Modulo - remainder of division |
| **Off-by-One** | Error in loop boundaries |

---

## Exam Tips

### Common Exam Questions

- Given code - what is the output?
- What value does variable x have after execution?
- How many times does the loop execute?

### Important to Remember

- **Always create a table** - work systematically!
- **Line by line** - don't skip anything
- **For loops**: Document each iteration individually
- **Check conditions carefully**
- **MOD = Remainder** (7 MOD 3 = 1)

---

## Practice Exercises

### Exercise 1
What does the following code output?

```
x = 3
y = 5
z = x + y
x = z - x
output(x)
output(y)
output(z)
```

**Solution:**
| Line | x | y | z |
|------|---|---|---|
| x = 3 | 3 | - | - |
| y = 5 | 3 | 5 | - |
| z = x + y | 3 | 5 | 8 |
| x = z - x = 8 - 3 | 5 | 5 | 8 |

**Output:** 5, 5, 8

### Exercise 2
What is the result?

```
sum = 0
FOR i FROM 1 TO 5
    IF i MOD 2 == 0 THEN
        sum = sum + i
    END IF
END FOR
output(sum)
```

**Solution:**
| i | i MOD 2 | Condition | sum |
|---|---------|-----------|-----|
| 1 | 1 | 0==0? NO | 0 |
| 2 | 0 | 0==0? YES | 0+2=2 |
| 3 | 1 | 0==0? NO | 2 |
| 4 | 0 | 0==0? YES | 2+4=6 |
| 5 | 1 | 0==0? NO | 6 |

**Output: 6** (Sum of even numbers: 2 + 4 = 6)

### Exercise 3
How many times is "Hello" output?

```
i = 10
WHILE i > 5
    output("Hello")
    i = i - 2
END WHILE
```

**Solution:**
| Iteration | i before check | i > 5? | i after |
|-----------|----------------|--------|---------|
| 1 | 10 | YES | 8 |
| 2 | 8 | YES | 6 |
| 3 | 6 | YES | 4 |
| - | 4 | NO | - |

**"Hello" is output 3 times.**

---

## Cross-References

- [06-02-05 Pseudocode](./06-02-05-pseudocode.md) - Code representation
- [06-02-02 Control Structures](./06-02-02-control-structures.md) - If/Loops
- [06-02-07 Code Debugging](./06-02-07-code-debugging.md) - Finding errors
