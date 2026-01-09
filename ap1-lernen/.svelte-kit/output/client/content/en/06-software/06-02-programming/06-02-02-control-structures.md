# Control Structures

## Learning Objectives

After this chapter, you should be able to:
- Distinguish between sequence, selection, and iteration
- Understand if-else structures
- Know different loop types
- Understand switch/case statements

---

## Core Content

### Basic Control Structures

```
┌─────────────────────────────────────────────────────────────────┐
│                   CONTROL STRUCTURES                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                    CONTROL STRUCTURES                           │
│                           │                                     │
│          ┌────────────────┼────────────────┐                   │
│          │                │                │                   │
│    ┌─────▼─────┐    ┌─────▼─────┐    ┌─────▼─────┐            │
│    │  SEQUENCE │    │ SELECTION │    │ ITERATION │            │
│    │           │    │           │    │           │            │
│    │ Statement │    │ Condition │    │ Loops     │            │
│    │ after     │    │ If-Else   │    │ For       │            │
│    │ Statement │    │ Switch    │    │ While     │            │
│    └───────────┘    └───────────┘    │ Do-While  │            │
│                                       └───────────┘            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Sequence

**Sequence** = Statements are executed one after another (sequentially).

```
┌────────────────────────────────────────────────────────────────┐
│                        SEQUENCE                                 │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│     ┌──────────────┐                                          │
│     │ Statement 1  │    // a = 5                              │
│     └──────┬───────┘                                          │
│            │                                                   │
│            ▼                                                   │
│     ┌──────────────┐                                          │
│     │ Statement 2  │    // b = 10                             │
│     └──────┬───────┘                                          │
│            │                                                   │
│            ▼                                                   │
│     ┌──────────────┐                                          │
│     │ Statement 3  │    // c = a + b                          │
│     └──────────────┘                                          │
│                                                                │
│   Pseudocode:                                                 │
│   a = 5                                                       │
│   b = 10                                                      │
│   c = a + b        // c = 15                                  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Selection (Branching)

#### If Statement (Simple)

```
┌────────────────────────────────────────────────────────────────┐
│                     IF (SIMPLE)                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│            ┌──────────┐                                       │
│            │ Condition│                                       │
│            └────┬─────┘                                       │
│         yes    │                                              │
│        ┌────────┴────────┐                                    │
│        │                 │ no                                 │
│        ▼                 │                                     │
│   ┌──────────┐          │                                     │
│   │Statement │          │                                     │
│   └────┬─────┘          │                                     │
│        │                │                                     │
│        └────────────────┴───►                                 │
│                                                                │
│   Pseudocode:                                                 │
│   IF age >= 18 THEN                                           │
│       output("Adult")                                         │
│   END IF                                                      │
│                                                                │
│   Python:                                                     │
│   if age >= 18:                                               │
│       print("Adult")                                          │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### If-Else Statement

```
┌────────────────────────────────────────────────────────────────┐
│                      IF-ELSE                                   │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│                  ┌──────────┐                                 │
│                  │ Condition│                                 │
│                  └────┬─────┘                                 │
│           yes        │         no                             │
│          ┌────────────┴────────────┐                         │
│          ▼                         ▼                          │
│    ┌───────────┐            ┌───────────┐                    │
│    │Statement 1│            │Statement 2│                    │
│    └─────┬─────┘            └─────┬─────┘                    │
│          │                        │                           │
│          └────────────┬───────────┘                          │
│                       ▼                                       │
│                                                                │
│   Pseudocode:                                                 │
│   IF age >= 18 THEN                                           │
│       output("Adult")                                         │
│   ELSE                                                        │
│       output("Minor")                                         │
│   END IF                                                      │
│                                                                │
│   Python:                                                     │
│   if age >= 18:                                               │
│       print("Adult")                                          │
│   else:                                                       │
│       print("Minor")                                          │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### If-Else-If (Multiple Selection)

```
┌────────────────────────────────────────────────────────────────┐
│                    IF-ELSE-IF                                  │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Pseudocode:                    Python:                      │
│                                                                │
│   IF grade <= 1.5 THEN           if grade <= 1.5:             │
│       output("Excellent")            print("Excellent")       │
│   ELSE IF grade <= 2.5 THEN      elif grade <= 2.5:           │
│       output("Good")                 print("Good")            │
│   ELSE IF grade <= 3.5 THEN      elif grade <= 3.5:           │
│       output("Satisfactory")         print("Satisfactory")    │
│   ELSE IF grade <= 4.0 THEN      elif grade <= 4.0:           │
│       output("Adequate")             print("Adequate")        │
│   ELSE                           else:                        │
│       output("Failed")               print("Failed")          │
│   END IF                                                      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Comparison Operators

| Operator | Meaning | Example |
|----------|---------|---------|
| `==` | Equal | `a == b` |
| `!=` | Not equal | `a != b` |
| `<` | Less than | `a < b` |
| `>` | Greater than | `a > b` |
| `<=` | Less than or equal | `a <= b` |
| `>=` | Greater than or equal | `a >= b` |

---

### Logical Operators

```
┌────────────────────────────────────────────────────────────────┐
│                  LOGICAL OPERATORS                             │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   AND                    OR                     NOT            │
│   &&  /  and             ||  /  or              !  /  not      │
│                                                                │
│   Both true?             At least one?          Negation       │
│                                                                │
│   true AND true = true     true OR true = true                │
│   true AND false = false   true OR false = true               │
│   false AND false = false  false OR false = false             │
│                                                                │
│   Example:                                                    │
│   IF age >= 18 AND hasLicense == true THEN                    │
│       output("May drive a car")                               │
│   END IF                                                      │
│                                                                │
│   Python:                                                     │
│   if age >= 18 and hasLicense == True:                        │
│       print("May drive a car")                                │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Switch/Case

**Switch/Case** enables clear multiple selection for fixed values.

```
┌────────────────────────────────────────────────────────────────┐
│                     SWITCH/CASE                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Pseudocode:                    Java:                        │
│                                                                │
│   SWITCH weekday                 switch (weekday) {           │
│       CASE 1:                        case 1:                  │
│           output("Monday")               System.out.println(  │
│       CASE 2:                              "Monday");         │
│           output("Tuesday")              break;               │
│       CASE 3:                        case 2:                  │
│           output("Wednesday")            System.out.println(  │
│       ...                                  "Tuesday");        │
│       DEFAULT:                           break;               │
│           output("Invalid")          // etc...                │
│   END SWITCH                         default:                 │
│                                          System.out.println(  │
│                                              "Invalid");      │
│                                  }                            │
│                                                                │
│   Important: break; prevents "fall-through" to next case      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Iteration (Loops)

#### For Loop (Counter-Controlled)

```
┌────────────────────────────────────────────────────────────────┐
│                     FOR LOOP                                   │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Known number of iterations                                  │
│                                                                │
│   Pseudocode:                      Python:                    │
│   FOR i FROM 1 TO 5                for i in range(1, 6):      │
│       output(i)                        print(i)               │
│   END FOR                                                     │
│                                                                │
│   Java:                                                       │
│   for (int i = 1; i <= 5; i++) {                             │
│       System.out.println(i);                                  │
│   }                                                           │
│                                                                │
│   Output: 1, 2, 3, 4, 5                                       │
│                                                                │
│   Structure (Java):                                           │
│   for (StartValue; Condition; Increment)                      │
│        └────┬────┘ └────┬────┘ └────┬────┘                   │
│             │           │           │                         │
│        int i = 1    i <= 5       i++                         │
│        (once)     (before each  (after each                   │
│                   iteration)    iteration)                    │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### While Loop (Pre-Test Loop)

```
┌────────────────────────────────────────────────────────────────┐
│                    WHILE LOOP                                  │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Condition is checked BEFORE the loop body                   │
│   → Can execute 0 times!                                      │
│                                                                │
│       ┌──────────────────┐                                    │
│       │                  │                                    │
│       ▼                  │                                    │
│   ┌──────────┐          │                                    │
│   │ Condition│──────────┘  yes                               │
│   └────┬─────┘                                                │
│        │ no                                                   │
│        ▼                                                      │
│                                                                │
│   Pseudocode:                      Python:                    │
│   counter = 1                      counter = 1                │
│   WHILE counter <= 5               while counter <= 5:        │
│       output(counter)                  print(counter)         │
│       counter = counter + 1            counter = counter + 1  │
│   END WHILE                                                   │
│                                                                │
│   Caution: Avoid infinite loops (termination condition!)      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### Do-While Loop (Post-Test Loop)

```
┌────────────────────────────────────────────────────────────────┐
│                   DO-WHILE LOOP                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Condition is checked AFTER the loop body                    │
│   → Executes at least once!                                   │
│                                                                │
│   ┌──────────────┐                                            │
│   │ Statements   │                                            │
│   └──────┬───────┘                                            │
│          │                                                     │
│          ▼                                                     │
│   ┌──────────────┐                                            │
│   │  Condition?  │──────────┐                                 │
│   └──────────────┘          │ yes                             │
│          │                  │                                  │
│          │ no               │                                  │
│          ▼         ◄────────┘                                  │
│                                                                │
│   Pseudocode:                      Java:                      │
│   DO                               do {                       │
│       input = read()                   input = scanner...     │
│   WHILE input != "exit"            } while (!input.equals(    │
│                                            "exit"));          │
│                                                                │
│   Typical for: Menus, input validation                        │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Loop Comparison

| Loop | Check | Iterations | Application |
|------|-------|------------|-------------|
| **for** | Counter | Known count | Iterating lists |
| **while** | Pre-test (before) | 0 to n | Unknown count |
| **do-while** | Post-test (after) | 1 to n | At least 1 iteration needed |

---

### Loop Control

| Command | Effect |
|---------|--------|
| **break** | Exit loop immediately |
| **continue** | Skip to next iteration |

```
// Example break:
for i from 1 to 10:
    if i == 5:
        break        // End loop at 5
    output(i)
// Output: 1, 2, 3, 4

// Example continue:
for i from 1 to 5:
    if i == 3:
        continue     // Skip 3
    output(i)
// Output: 1, 2, 4, 5
```

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Sequence** | Statements one after another |
| **Selection** | Branching (If-Else) |
| **Iteration** | Repetition (Loop) |
| **Condition** | Expression that evaluates to true/false |
| **Pre-test** | Check before execution |
| **Post-test** | Check after execution |
| **Counter-controlled** | For loop with counter variable |

---

## Exam Tips

### Common Exam Questions

- What is the difference between while and do-while?
- When do you use which loop?
- How does an if-else structure work?
- What does break do in a loop?

### Important to Remember

- **while** = 0 to n iterations (check before)
- **do-while** = 1 to n iterations (check after)
- **for** = Known number of iterations
- **break** = Exit loop
- **continue** = Skip iteration

---

## Practice Exercises

### Exercise 1
What is the difference between a while loop and a do-while loop?

**Solution:**
- **while loop:** Pre-test - the condition is checked BEFORE the loop body. The loop can execute 0 times if the condition is false from the start.
- **do-while loop:** Post-test - the condition is checked AFTER the loop body. The loop executes at least once, even if the condition is false.

### Exercise 2
Write pseudocode that outputs numbers 1 to 10, but skips the number 5.

**Solution:**
```
FOR i FROM 1 TO 10
    IF i == 5 THEN
        continue
    END IF
    output(i)
END FOR
```
Output: 1, 2, 3, 4, 6, 7, 8, 9, 10

### Exercise 3
Analyze the following pseudocode. What is the output?

```
sum = 0
FOR i FROM 1 TO 4
    sum = sum + i
END FOR
output(sum)
```

**Solution:**
| Iteration | i | sum before | sum after |
|-----------|---|------------|-----------|
| 1 | 1 | 0 | 0 + 1 = 1 |
| 2 | 2 | 1 | 1 + 2 = 3 |
| 3 | 3 | 3 | 3 + 3 = 6 |
| 4 | 4 | 6 | 6 + 4 = 10 |

**Output: 10**

---

## Cross-References

- [06-02-05 Pseudocode](./06-02-05-pseudocode.md) - Representing control structures
- [06-02-06 Desk Check](./06-02-06-desk-check.md) - Code analysis
- [06-02-01 Variables and Data Types](./06-02-01-variables-datatypes.md) - Condition values
