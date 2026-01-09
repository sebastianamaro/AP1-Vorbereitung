# Code Debugging

## Learning Objectives

After this chapter, you should be able to:
- Distinguish between different types of errors
- Recognize syntax errors
- Identify logical errors
- Systematically search for errors

---

## Core Content

### Types of Errors in Program Code

```
┌─────────────────────────────────────────────────────────────────┐
│                    ERROR TYPES IN CODE                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │   IMPORTANT FOR THE EXAM!                               │  │
│   │   [NEW IN 2025 EXAM CATALOG]                            │  │
│   │                                                          │  │
│   │   Common question type:                                  │  │
│   │   "Find the error(s) in the following code"             │  │
│   └─────────────────────────────────────────────────────────┘  │
│                                                                 │
│                        ERROR TYPES                              │
│                            │                                    │
│           ┌────────────────┼────────────────┐                  │
│           │                │                │                  │
│     ┌─────▼─────┐    ┌─────▼─────┐    ┌─────▼─────┐          │
│     │  SYNTAX   │    │  RUNTIME  │    │  LOGIC    │          │
│     │  ERRORS   │    │  ERRORS   │    │  ERRORS   │          │
│     │           │    │           │    │           │          │
│     │ Compiler  │    │ During    │    │ Wrong     │          │
│     │ finds them│    │ execution │    │ result    │          │
│     └───────────┘    └───────────┘    └───────────┘          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

| Error Type | When detected? | Example |
|------------|---------------|---------|
| **Syntax Error** | During compilation | Missing semicolon |
| **Runtime Error** | During execution | Division by zero |
| **Logic Error** | Wrong result | Wrong formula |

---

### Syntax Errors

**Syntax errors** violate the grammar of the programming language.

```
┌────────────────────────────────────────────────────────────────┐
│                     SYNTAX ERRORS                              │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Common syntax errors:                                        │
│                                                                │
│   1. Missing parentheses                                       │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   WRONG:  if age >= 18                                 │ │
│   │   RIGHT:  if (age >= 18)        // Java                │ │
│   │   RIGHT:  if age >= 18:         // Python (colon)      │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   2. Missing semicolon (Java, C#, JavaScript)                 │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   WRONG:  int x = 5                                    │ │
│   │   RIGHT:  int x = 5;                                   │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   3. Wrong quotation marks                                    │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   WRONG:  String name = 'Max';    // Single           │ │
│   │   RIGHT:  String name = "Max";    // Double (Java)    │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   4. Missing curly braces                                     │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   WRONG:  if (x > 0)                                   │ │
│   │              x = x + 1;                                │ │
│   │              y = y + 1;    // Not in If!              │ │
│   │                                                        │ │
│   │   RIGHT:  if (x > 0) {                                 │ │
│   │               x = x + 1;                               │ │
│   │               y = y + 1;   // In If block             │ │
│   │            }                                           │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   5. Typos in keywords                                        │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   WRONG:  whlie (x < 10)                               │ │
│   │   RIGHT:  while (x < 10)                               │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Runtime Errors

**Runtime errors** occur only during program execution.

```
┌────────────────────────────────────────────────────────────────┐
│                    RUNTIME ERRORS                              │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   1. Division by zero                                          │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   a = 10                                                │ │
│   │   b = 0                                                 │ │
│   │   c = a / b     // ERROR: Division by 0!               │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   2. Array index out of bounds                                │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   int[] numbers = {1, 2, 3};  // Index 0, 1, 2         │ │
│   │   x = numbers[5];              // ERROR: Index 5        │ │
│   │                                // doesn't exist!        │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   3. Null pointer / None access                               │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   String name = null;                                  │ │
│   │   int length = name.length();  // ERROR: null has      │ │
│   │                                // no methods!          │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   4. Type conversion error                                    │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   String text = "abc";                                 │ │
│   │   int number = Integer.parseInt(text);  // ERROR:      │ │
│   │                                         // "abc" is    │ │
│   │                                         // not a number│ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Logic Errors

**Logic errors** are the hardest to find - the program runs but produces wrong results.

```
┌────────────────────────────────────────────────────────────────┐
│                    LOGIC ERRORS                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   1. Wrong operator                                            │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   // Calculate average                                  │ │
│   │   WRONG:  average = sum * count                        │ │
│   │   RIGHT:  average = sum / count                        │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   2. Off-by-one error (one off)                               │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   // Output numbers 1 to 10                            │ │
│   │   WRONG:  FOR i FROM 1 TO 9       // only to 9!       │ │
│   │   RIGHT:  FOR i FROM 1 TO 10      // to 10            │ │
│   │                                                        │ │
│   │   WRONG:  FOR i FROM 0 TO 10      // 0 to 10 = 11!    │ │
│   │   RIGHT:  FOR i FROM 0 TO 9       // 0 to 9 = 10      │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   3. Wrong condition                                          │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   // Check if adult                                    │ │
│   │   WRONG:  IF age > 18 THEN    // 18 is missing!       │ │
│   │   RIGHT:  IF age >= 18 THEN                            │ │
│   │                                                        │ │
│   │   // Exam passed                                       │ │
│   │   WRONG:  IF grade < 4 THEN passed                     │ │
│   │   RIGHT:  IF grade <= 4 THEN passed                    │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   4. Swapped operands                                         │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   // Check if a is less than b                         │ │
│   │   WRONG:  IF b < a THEN ...   // reversed!            │ │
│   │   RIGHT:  IF a < b THEN ...                            │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   5. Assignment instead of comparison                         │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   WRONG:  IF x = 5 THEN ...   // Assignment!          │ │
│   │   RIGHT:  IF x == 5 THEN ...  // Comparison           │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   6. Infinite loop                                            │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   i = 0                                                │ │
│   │   WHILE i < 10                                         │ │
│   │       output(i)                                        │ │
│   │       // ERROR: i is never incremented → infinite loop!│ │
│   │   END WHILE                                            │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Systematic Error Finding

```
┌────────────────────────────────────────────────────────────────┐
│              SYSTEMATIC ERROR FINDING                          │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   1. Read code carefully                                       │
│      • Check each line individually                           │
│      • Watch for parentheses and semicolons                   │
│      • Check variable names (typos?)                          │
│                                                                │
│   2. Check logic                                               │
│      • Conditions: < vs <= vs > vs >=                         │
│      • Operators: + vs - vs * vs /                            │
│      • Comparison vs assignment: == vs =                       │
│                                                                │
│   3. Consider edge cases                                       │
│      • What happens with 0?                                   │
│      • What happens with first/last element?                  │
│      • What happens with empty input?                         │
│                                                                │
│   4. Perform desk check                                        │
│      • Trace each step manually                               │
│      • Note variable values                                   │
│      • Compare result with expectation                        │
│                                                                │
│   5. Know typical error patterns                               │
│      • Off-by-one                                             │
│      • Infinite loops                                         │
│      • Division by zero                                       │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Checklist for Error Finding

| Check Point | What to check? |
|-------------|----------------|
| **Syntax** | Parentheses, semicolons, quotation marks |
| **Variables** | Initialized? Correctly spelled? |
| **Conditions** | Right operators? (< vs <=) |
| **Loops** | Termination condition reachable? Counter updated? |
| **Return values** | Is the right value returned? |
| **Edge cases** | 0, null, empty lists, first/last element |

---

### Exam Examples: Finding Errors

```
┌────────────────────────────────────────────────────────────────┐
│              EXAM EXAMPLE 1                                    │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Task: Find the error!                                       │
│                                                                │
│   // Calculate sum of numbers 1 to n                          │
│   FUNCTION sum(n)                                             │
│       result = 0                                               │
│       FOR i FROM 1 TO n                                        │
│           result = result + 1      // <-- ERROR!              │
│       END FOR                                                  │
│       RETURN result                                            │
│   END FUNCTION                                                 │
│                                                                │
│   ERROR: result + 1 should be result + i!                     │
│   Correction: result = result + i                              │
│                                                                │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│              EXAM EXAMPLE 2                                    │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Task: Find the errors!                                      │
│                                                                │
│   // Find minimum in a list                                   │
│   FUNCTION minimum(list)                                       │
│       min = 0                          // <-- ERROR 1!        │
│       FOR i FROM 1 TO length(list)                            │
│           IF list[i] < min THEN        // <-- ERROR 2!        │
│               min = list[i]                                    │
│           END IF                                               │
│       END FOR                                                  │
│       RETURN min                                               │
│   END FUNCTION                                                 │
│                                                                │
│   ERROR 1: min = 0 doesn't work if all values > 0            │
│            Better: min = list[0] (first element)              │
│   ERROR 2: Index often starts at 0, not 1                     │
│            Better: FOR i FROM 0 TO length(list) - 1           │
│                                                                │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│              EXAM EXAMPLE 3                                    │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Task: Find the error!                                       │
│                                                                │
│   // Check if adult                                           │
│   age = input("Enter age:")                                   │
│   IF age = 18 THEN                     // <-- ERROR!          │
│       output("Just became adult")                             │
│   ELSE IF age > 18 THEN                                        │
│       output("Adult")                                          │
│   ELSE                                                         │
│       output("Minor")                                          │
│   END IF                                                       │
│                                                                │
│   ERROR: age = 18 is an assignment, not a comparison!         │
│   Correction: IF age == 18 THEN                               │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Syntax Error** | Violation of language grammar |
| **Runtime Error** | Error during execution |
| **Logic Error** | Wrong program logic |
| **Off-by-One** | One-off error |
| **Debugging** | Process of error finding |

---

## Exam Tips

### Common Exam Questions

- Find the error in the code
- What type of error is this?
- Correct the faulty code

### Important to Remember

- **Syntax errors**: Parentheses, semicolons, typos
- **Logic errors**: Wrong operators, off-by-one
- **= vs ==**: Assignment vs. comparison
- **< vs <=**: Watch boundary values!
- **Desk check**: Perform when in doubt

---

## Practice Exercises

### Exercise 1
Find the error in the following code:

```
// Output numbers 1 to 5
i = 1
WHILE i < 5
    output(i)
    i = i + 1
END WHILE
```

**Solution:**
**Error:** The condition `i < 5` only outputs 1,2,3,4 - the 5 is missing!
**Correction:** `WHILE i <= 5` or `WHILE i < 6`

### Exercise 2
What type of error is this and what is the correction?

```
// Calculate average of three grades
grade1 = 2
grade2 = 3
grade3 = 1
average = (grade1 + grade2 + grade3) / 2
output(average)
```

**Solution:**
**Error Type:** Logic error
**Error:** Division by 2 instead of 3 (number of grades)
**Correction:** `average = (grade1 + grade2 + grade3) / 3`

### Exercise 3
Find and correct all errors:

```
// Check if number is between 10 and 20
number = input("Enter number")
IF number > 10 AND number < 20 THEN
    output("In range"
ELSE
    output("Outside")
END
```

**Solution:**
**Error 1:** `number > 10` should be `number >= 10` (10 is included)
**Error 2:** `number < 20` should be `number <= 20` (20 is included)
**Error 3:** Missing closing parenthesis at `output("In range"`
**Error 4:** `END` should be `END IF`

**Corrected code:**
```
number = input("Enter number")
IF number >= 10 AND number <= 20 THEN
    output("In range")
ELSE
    output("Outside")
END IF
```

---

## Cross-References

- [06-02-06 Desk Check](./06-02-06-desk-check.md) - Manual code review
- [06-06-03 Debugging](../06-06-development-process/06-06-03-debugging.md) - Debugging techniques
- [06-06-02 Testing](../06-06-development-process/06-06-02-testing.md) - Test methods
