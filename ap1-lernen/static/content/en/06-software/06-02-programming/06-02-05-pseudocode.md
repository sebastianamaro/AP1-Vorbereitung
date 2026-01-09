# Pseudocode

## Learning Objectives

After this chapter, you should be able to:
- Read and understand pseudocode
- Write simple algorithms in pseudocode
- Represent control structures in pseudocode
- Translate pseudocode into real code

---

## Core Content

### What is Pseudocode?

**Pseudocode** is an informal, language-independent description of an algorithm that looks like program code but is formulated in natural language.

```
┌─────────────────────────────────────────────────────────────────┐
│                      PSEUDOCODE                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Characteristics:                                              │
│   • Language-independent (not tied to Python, Java, etc.)      │
│   • Human-readable                                              │
│   • No strict syntax                                            │
│   • Focus on logic, not details                                 │
│   • Good for planning and documentation                         │
│                                                                 │
│   Example:                                                      │
│   ┌─────────────────────────────────────────────────────────┐ │
│   │  ALGORITHM Find Maximum                                  │ │
│   │                                                          │ │
│   │  INPUT: List of numbers                                  │ │
│   │  OUTPUT: Largest number                                  │ │
│   │                                                          │ │
│   │  max = first element of list                             │ │
│   │  FOR EACH element IN list                                │ │
│   │      IF element > max THEN                               │ │
│   │          max = element                                   │ │
│   │      END IF                                              │ │
│   │  END FOR                                                 │ │
│   │  RETURN max                                              │ │
│   └─────────────────────────────────────────────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Basic Elements of Pseudocode

#### Variables and Assignment

```
┌────────────────────────────────────────────────────────────────┐
│                VARIABLES AND ASSIGNMENT                        │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Declaration/Assignment:                                      │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   counter = 0                                           │ │
│   │   name = "Max"                                          │ │
│   │   isActive = TRUE                                       │ │
│   │   price = 19.99                                         │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Calculation:                                                │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   sum = a + b                                           │ │
│   │   difference = a - b                                    │ │
│   │   product = a * b                                       │ │
│   │   quotient = a / b                                      │ │
│   │   remainder = a MOD b          // Modulo (remainder)   │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Increment/Decrement:                                        │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   counter = counter + 1   // increase by 1             │ │
│   │   counter = counter - 1   // decrease by 1             │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

#### Input and Output

```
┌────────────────────────────────────────────────────────────────┐
│                  INPUT AND OUTPUT                              │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Input:                                                       │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   INPUT name                                            │ │
│   │   READ number                                           │ │
│   │   name = input("Please enter name:")                    │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Output:                                                     │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   OUTPUT "Hello World"                                  │ │
│   │   OUTPUT "The result is: " + result                     │ │
│   │   PRINT sum                                             │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

#### Conditional Statements (Selection)

```
┌────────────────────────────────────────────────────────────────┐
│                   CONDITIONAL STATEMENTS                       │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Simple condition:                                            │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   IF age >= 18 THEN                                     │ │
│   │       OUTPUT "Adult"                                    │ │
│   │   END IF                                                │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   If-Else:                                                    │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   IF grade <= 4.0 THEN                                  │ │
│   │       OUTPUT "Passed"                                   │ │
│   │   ELSE                                                  │ │
│   │       OUTPUT "Failed"                                   │ │
│   │   END IF                                                │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Multiple conditions:                                        │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   IF grade <= 1.5 THEN                                  │ │
│   │       OUTPUT "Excellent"                                │ │
│   │   ELSE IF grade <= 2.5 THEN                             │ │
│   │       OUTPUT "Good"                                     │ │
│   │   ELSE IF grade <= 3.5 THEN                             │ │
│   │       OUTPUT "Satisfactory"                             │ │
│   │   ELSE                                                  │ │
│   │       OUTPUT "Not good"                                 │ │
│   │   END IF                                                │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

#### Loops (Iteration)

```
┌────────────────────────────────────────────────────────────────┐
│                       LOOPS                                    │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   For loop (Counter-controlled):                              │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   FOR i FROM 1 TO 10                                    │ │
│   │       OUTPUT i                                          │ │
│   │   END FOR                                               │ │
│   │                                                         │ │
│   │   FOR EACH element IN list                              │ │
│   │       OUTPUT element                                    │ │
│   │   END FOR                                               │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   While loop (Pre-test):                                      │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   WHILE condition                                       │ │
│   │       // statements                                     │ │
│   │   END WHILE                                             │ │
│   │                                                         │ │
│   │   Example:                                              │ │
│   │   counter = 1                                           │ │
│   │   WHILE counter <= 5                                    │ │
│   │       OUTPUT counter                                    │ │
│   │       counter = counter + 1                             │ │
│   │   END WHILE                                             │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Do-While loop (Post-test):                                  │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   REPEAT                                                │ │
│   │       input = READ()                                    │ │
│   │   UNTIL input == "exit"                                 │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

#### Functions

```
┌────────────────────────────────────────────────────────────────┐
│                      FUNCTIONS                                 │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Function definition:                                         │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   FUNCTION add(a, b)                                    │ │
│   │       sum = a + b                                       │ │
│   │       RETURN sum                                        │ │
│   │   END FUNCTION                                          │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Function call:                                              │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   result = add(5, 3)    // result = 8                   │ │
│   │   OUTPUT result                                         │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Procedure (without return value):                           │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   PROCEDURE greet(name)                                 │ │
│   │       OUTPUT "Hello " + name                            │ │
│   │   END PROCEDURE                                         │ │
│   │                                                         │ │
│   │   greet("Max")   // Output: Hello Max                   │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Logical Operators

| Operator | Meaning | Example |
|----------|---------|---------|
| `AND` | Both true | `a > 0 AND b > 0` |
| `OR` | At least one true | `a > 0 OR b > 0` |
| `NOT` | Negation | `NOT finished` |

---

### Comparison Operators

| Operator | Meaning |
|----------|---------|
| `=` or `==` | Equal |
| `<>` or `!=` | Not equal |
| `<` | Less than |
| `>` | Greater than |
| `<=` | Less than or equal |
| `>=` | Greater than or equal |

---

### Example: Complete Algorithm

```
┌────────────────────────────────────────────────────────────────┐
│            EXAMPLE: CALCULATE AVERAGE                          │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   ALGORITHM Calculate Average                                  │
│                                                                │
│   // Input                                                    │
│   OUTPUT "How many numbers?"                                  │
│   INPUT count                                                 │
│                                                                │
│   // Initialization                                           │
│   sum = 0                                                     │
│                                                                │
│   // Read and sum numbers                                     │
│   FOR i FROM 1 TO count                                       │
│       OUTPUT "Enter number " + i + ":"                        │
│       INPUT number                                            │
│       sum = sum + number                                      │
│   END FOR                                                     │
│                                                                │
│   // Calculate average                                        │
│   IF count > 0 THEN                                           │
│       average = sum / count                                   │
│       OUTPUT "Average: " + average                            │
│   ELSE                                                        │
│       OUTPUT "No numbers entered"                             │
│   END IF                                                      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Pseudocode to Real Code

| Pseudocode | Python | Java |
|------------|--------|------|
| `IF ... THEN` | `if ...:` | `if (...) {` |
| `ELSE` | `else:` | `} else {` |
| `ELSE IF` | `elif ...:` | `} else if (...) {` |
| `END IF` | (indentation ends) | `}` |
| `FOR i FROM 1 TO 5` | `for i in range(1,6):` | `for(int i=1; i<=5; i++)` |
| `WHILE ...` | `while ...:` | `while (...) {` |
| `OUTPUT` | `print(...)` | `System.out.println(...)` |
| `INPUT` | `input(...)` | `Scanner.nextLine()` |
| `RETURN` | `return` | `return` |

---

### Tips for Pseudocode

```
┌────────────────────────────────────────────────────────────────┐
│                  TIPS FOR PSEUDOCODE                           │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   DO:                                                         │
│   ✓ Use clear, understandable terms                           │
│   ✓ Use indentation for structure                             │
│   ✓ Comments for complex parts                                │
│   ✓ Use END for blocks (END IF, END FOR)                      │
│   ✓ Stay consistent (always use same keywords)                │
│                                                                │
│   DON'T:                                                      │
│   ✗ Syntax details of a language (;, {}, etc.)               │
│   ✗ Be too vague ("do something")                             │
│   ✗ Specific functions (println, Scanner)                    │
│   ✗ Type declarations (usually not needed)                   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Pseudocode** | Informal algorithm description |
| **Algorithm** | Step-by-step instructions for problem solving |
| **Sequence** | Statements one after another |
| **Selection** | Branching (IF-THEN) |
| **Iteration** | Repetition (loop) |

---

## Exam Tips

### Common Exam Questions

- Given pseudocode - what is the output?
- Write pseudocode for a simple algorithm
- Which control structures are used?

### Important to Remember

- Pseudocode is **language-independent**
- Focus on **logic**, not syntax
- Always use **END** for blocks
- **Indentation** shows structure
- Common in exams: Understand code and determine result

---

## Practice Exercises

### Exercise 1
What does the following pseudocode output?

```
a = 5
b = 3
c = a + b
IF c > 7 THEN
    OUTPUT "Large"
ELSE
    OUTPUT "Small"
END IF
```

**Solution:**
- a = 5, b = 3
- c = 5 + 3 = 8
- 8 > 7 is TRUE
- **Output: "Large"**

### Exercise 2
Write pseudocode that outputs the numbers from 1 to 10 and calculates the sum.

**Solution:**
```
sum = 0
FOR i FROM 1 TO 10
    OUTPUT i
    sum = sum + i
END FOR
OUTPUT "Sum: " + sum
```
Output: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, Sum: 55

### Exercise 3
Analyze the following pseudocode. What is the result?

```
FUNCTION factorial(n)
    IF n <= 1 THEN
        RETURN 1
    ELSE
        RETURN n * factorial(n - 1)
    END IF
END FUNCTION

result = factorial(4)
OUTPUT result
```

**Solution:**
- factorial(4) = 4 * factorial(3)
- factorial(3) = 3 * factorial(2)
- factorial(2) = 2 * factorial(1)
- factorial(1) = 1 (base case)

Backwards: 2 * 1 = 2, 3 * 2 = 6, 4 * 6 = 24

**Output: 24**

---

## Cross-References

- [06-02-02 Control Structures](./06-02-02-control-structures.md) - Detailed explanation
- [06-02-06 Desk Check](./06-02-06-desk-check.md) - Analyzing pseudocode
- [06-02-03 Procedures and Functions](./06-02-03-procedures-functions.md) - Functions in pseudocode
