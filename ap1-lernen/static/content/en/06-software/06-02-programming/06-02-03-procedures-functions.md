# Procedures and Functions

## Learning Objectives

After this chapter, you should be able to:
- Distinguish between procedures and functions
- Understand parameters and return values
- Know the difference between pass-by-value and pass-by-reference
- Define and call functions

---

## Core Content

### What are Procedures and Functions?

**Procedures** and **Functions** are named code blocks that perform a specific task and can be called multiple times.

```
┌─────────────────────────────────────────────────────────────────┐
│           PROCEDURES AND FUNCTIONS                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   PROCEDURE                         FUNCTION                    │
│   ┌─────────────────────┐         ┌─────────────────────┐     │
│   │                     │         │                     │     │
│   │  Performs a task    │         │  Performs a task    │     │
│   │                     │         │  AND                │     │
│   │  No return value    │         │  Returns a value    │     │
│   │                     │         │                     │     │
│   └─────────────────────┘         └─────────────────────┘     │
│                                                                 │
│   Example:                       Example:                      │
│   greet("Max")                   result = add(5, 3)           │
│   → Outputs "Hello Max"          → result = 8                 │
│   → No return value                                            │
│                                                                 │
│   Note: In many modern languages (Python, Java) the term      │
│   "function" or "method" is used for both.                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Benefits of Functions

| Benefit | Description |
|---------|-------------|
| **Reusability** | Write code once, use multiple times |
| **Clarity** | Break complex code into small parts |
| **Maintainability** | Changes needed only in one place |
| **Testability** | Test individual functions separately |
| **DRY Principle** | "Don't Repeat Yourself" |

---

### Structure of a Function

```
┌────────────────────────────────────────────────────────────────┐
│                   FUNCTION STRUCTURE                           │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   FUNCTION functionName(parameter1, parameter2)               │
│       // statements                                           │
│       RETURN result                                           │
│   END FUNCTION                                                │
│                                                                │
│   ┌─────────────────────────────────────────────────────────┐ │
│   │  Name         │ Unique identifier                       │ │
│   │  Parameters   │ Input values (optional)                 │ │
│   │  Body         │ Statements inside the function          │ │
│   │  Return Value │ Result of the function (optional)       │ │
│   └─────────────────────────────────────────────────────────┘ │
│                                                                │
│   Python example:                                             │
│   def add(a, b):                                              │
│       sum = a + b                                             │
│       return sum                                              │
│                                                                │
│   Java example:                                               │
│   public int add(int a, int b) {                             │
│       int sum = a + b;                                        │
│       return sum;                                             │
│   }                                                           │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Parameters

**Parameters** are variables that are passed to the function when it is called.

```
┌────────────────────────────────────────────────────────────────┐
│                       PARAMETERS                               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   DEFINITION:                                                  │
│   ┌─────────────────────────────────────────────────────────┐ │
│   │  FUNCTION calculateArea(length, width)                  │ │
│   │      RETURN length * width    ▲        ▲                │ │
│   │  END FUNCTION                 │        │                │ │
│   │                         Parameters (formal)             │ │
│   └─────────────────────────────────────────────────────────┘ │
│                                                                │
│   CALL:                                                       │
│   ┌─────────────────────────────────────────────────────────┐ │
│   │  result = calculateArea(5, 3)                           │ │
│   │                          ▲  ▲                           │ │
│   │                          │  │                           │ │
│   │                    Arguments (actual)                   │ │
│   │                                                         │ │
│   │  → length = 5, width = 3                                │ │
│   │  → result = 15                                          │ │
│   └─────────────────────────────────────────────────────────┘ │
│                                                                │
│   Formal Parameters: In the function definition               │
│   Actual Parameters (Arguments): Passed at the call           │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Return Value

The **return value** is the result that a function returns to the caller.

```
┌────────────────────────────────────────────────────────────────┐
│                     RETURN VALUE                               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   With return value:                                          │
│                                                                │
│   FUNCTION double(number)                                     │
│       RETURN number * 2                                       │
│   END FUNCTION                                                │
│                                                                │
│   result = double(5)     // result = 10                       │
│                                                                │
│   ────────────────────────────────────────────────────────── │
│                                                                │
│   Without return value (Procedure):                           │
│                                                                │
│   PROCEDURE showMessage(text)                                 │
│       output(text)                                            │
│       // no return                                            │
│   END PROCEDURE                                               │
│                                                                │
│   showMessage("Hello!")    // Outputs "Hello!"                │
│                            // No value returned               │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Pass-by-Value vs. Pass-by-Reference

```
┌────────────────────────────────────────────────────────────────┐
│           PASS-BY-VALUE vs. PASS-BY-REFERENCE                  │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   PASS-BY-VALUE (Call by Value)                               │
│   ┌─────────────────────────────────────────────────────────┐ │
│   │  • A copy of the value is passed                        │ │
│   │  • Original remains unchanged                           │ │
│   │  • Typical for: primitive data types                    │ │
│   │                                                         │ │
│   │  x = 5                                                  │ │
│   │  double(x)        // Function works with copy           │ │
│   │  output(x)        // x is still 5                       │ │
│   └─────────────────────────────────────────────────────────┘ │
│                                                                │
│   PASS-BY-REFERENCE (Call by Reference)                       │
│   ┌─────────────────────────────────────────────────────────┐ │
│   │  • Reference to the original is passed                  │ │
│   │  • Changes affect the original                          │ │
│   │  • Typical for: objects, arrays                         │ │
│   │                                                         │ │
│   │  list = [1, 2, 3]                                       │ │
│   │  addElement(list, 4)   // Reference passed              │ │
│   │  output(list)          // [1, 2, 3, 4]                  │ │
│   └─────────────────────────────────────────────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Scope

```
┌────────────────────────────────────────────────────────────────┐
│                       SCOPE                                    │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   GLOBAL Variable             LOCAL Variable                  │
│   ┌────────────────────┐    ┌────────────────────┐           │
│   │ Valid throughout   │    │ Valid only inside  │           │
│   │ the program        │    │ the function       │           │
│   └────────────────────┘    └────────────────────┘           │
│                                                                │
│   Example:                                                    │
│                                                                │
│   globalVar = 100                // Global                    │
│                                                                │
│   FUNCTION example()                                          │
│       localVar = 50              // Local                     │
│       output(globalVar)          // OK: 100                   │
│       output(localVar)           // OK: 50                    │
│   END FUNCTION                                                │
│                                                                │
│   example()                                                   │
│   output(globalVar)              // OK: 100                   │
│   output(localVar)               // ERROR! Not visible        │
│                                                                │
│   Best Practice: Avoid global variables!                      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Examples in Different Languages

| Aspect | Python | Java |
|--------|--------|------|
| **Definition** | `def name(param):` | `public int name(int param) {` |
| **Return** | `return value` | `return value;` |
| **No return value** | No return / `return None` | `void` as return type |
| **Call** | `result = name(arg)` | `int result = name(arg);` |

```
# Python
def greet(name):
    return "Hello " + name

message = greet("Max")
print(message)           // "Hello Max"

// Java
public String greet(String name) {
    return "Hello " + name;
}

String message = greet("Max");
System.out.println(message);  // "Hello Max"
```

---

### Recursion

A **recursive function** calls itself.

```
┌────────────────────────────────────────────────────────────────┐
│                       RECURSION                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Example: Factorial (n!)                                     │
│   5! = 5 × 4 × 3 × 2 × 1 = 120                               │
│                                                                │
│   FUNCTION factorial(n)                                       │
│       IF n <= 1 THEN                                          │
│           RETURN 1                // Base case                │
│       ELSE                                                    │
│           RETURN n * factorial(n - 1)  // Recursive call     │
│       END IF                                                  │
│   END FUNCTION                                                │
│                                                                │
│   Execution for factorial(4):                                 │
│                                                                │
│   factorial(4) = 4 * factorial(3)                            │
│                      = 3 * factorial(2)                       │
│                           = 2 * factorial(1)                  │
│                                = 1  (base case)               │
│                           = 2 * 1 = 2                         │
│                      = 3 * 2 = 6                              │
│                = 4 * 6 = 24                                   │
│                                                                │
│   Important: Always define a base case!                       │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Function** | Named code block with return value |
| **Procedure** | Named code block without return value |
| **Parameter** | Input values of a function |
| **Argument** | Concrete value at function call |
| **Return Value** | Result of a function |
| **Scope** | Visibility range of a variable |
| **Recursion** | Function calls itself |

---

## Exam Tips

### Common Exam Questions

- What is the difference between a function and a procedure?
- What are parameters and return values?
- Explain the difference between local and global variables

### Important to Remember

- **Function** = returns a value (return)
- **Procedure** = no return value
- **Parameter** = input to the function
- **Local variable** = valid only in the function
- **Global variable** = valid everywhere (avoid!)

---

## Practice Exercises

### Exercise 1
What is the difference between a function and a procedure?

**Solution:**
- **Function:** A subroutine that calculates a value and returns it to the caller. Example: `calculateArea(length, width)` returns the area.
- **Procedure:** A subroutine that performs a task but does not return a value. Example: `showMessage(text)` outputs text.

### Exercise 2
Write a function in pseudocode that adds two numbers and returns the result.

**Solution:**
```
FUNCTION add(number1, number2)
    sum = number1 + number2
    RETURN sum
END FUNCTION

// Call:
result = add(5, 3)
output(result)        // 8
```

### Exercise 3
What is output by the following pseudocode?

```
x = 10

FUNCTION changeValue(y)
    y = y + 5
    RETURN y
END FUNCTION

result = changeValue(x)
output(x)
output(result)
```

**Solution:**
- `output(x)` → **10** (x remains unchanged, as pass-by-value)
- `output(result)` → **15** (return value of the function)

With pass-by-value, only a copy of x is passed. The original x remains 10.

---

## Cross-References

- [06-02-04 OOP Fundamentals](./06-02-04-oop-fundamentals.md) - Methods in classes
- [06-02-05 Pseudocode](./06-02-05-pseudocode.md) - Functions in pseudocode
- [06-02-06 Desk Check](./06-02-06-desk-check.md) - Tracing function calls
