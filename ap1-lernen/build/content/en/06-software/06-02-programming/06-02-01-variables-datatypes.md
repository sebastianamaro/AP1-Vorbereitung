# Variables and Data Types

## Learning Objectives

After this chapter, you should be able to:
- Distinguish between variables and constants
- Know the most important data types
- Understand type conversion
- Declare and initialize variables

---

## Core Content

### What is a Variable?

A **variable** is a named storage location in memory that contains a value and whose content can change.

```
┌─────────────────────────────────────────────────────────────────┐
│                     VARIABLE IN MEMORY                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Source Code:                         Main Memory:            │
│                                                                 │
│   age = 25                             ┌─────────────────┐     │
│                                        │ Address: 0x1000 │     │
│      │                                 ├─────────────────┤     │
│      │    Name: "age"          ───────►│     25          │     │
│      │    Type: Integer                │                 │     │
│      │    Value: 25                    └─────────────────┘     │
│      ▼                                                          │
│                                                                 │
│   age = 26   (Value is changed)        ┌─────────────────┐     │
│                                        │ Address: 0x1000 │     │
│                              ─────────►├─────────────────┤     │
│                                        │     26          │     │
│                                        └─────────────────┘     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Variable vs. Constant

| Aspect | Variable | Constant |
|--------|----------|----------|
| **Value changeable** | Yes | No |
| **Python example** | `price = 9.99` | `PI = 3.14159` |
| **Java example** | `int price = 10;` | `final double PI = 3.14159;` |
| **Usage** | Changeable data | Fixed values |

**Convention:** Constants are often written in UPPERCASE.

---

### Basic Data Types

```
┌────────────────────────────────────────────────────────────────┐
│                      DATA TYPES                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│                      DATA TYPES                                │
│                          │                                     │
│       ┌──────────────────┼──────────────────┐                 │
│       │                  │                  │                 │
│   PRIMITIVE          COMPOSITE          SPECIAL              │
│   TYPES              TYPES              TYPES                │
│                                                                │
│   • Integer          • Arrays           • null/None          │
│   • Float/Double     • Strings*         • void               │
│   • Boolean          • Lists            • Objects            │
│   • Char             • Dictionaries                          │
│                                                                │
│   *Strings can be considered primitive or composite          │
│    depending on the language                                  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Important Data Types in Detail

#### Integer (Whole Number)

| Type | Size | Value Range | Example |
|------|------|-------------|---------|
| **byte** | 8 Bit | -128 to 127 | `byte b = 100;` |
| **short** | 16 Bit | -32,768 to 32,767 | `short s = 30000;` |
| **int** | 32 Bit | approx. -2.1 billion to 2.1 billion | `int i = 42;` |
| **long** | 64 Bit | Very large range | `long l = 9999999999L;` |

#### Floating-Point Number (Float/Double)

| Type | Size | Precision | Example |
|------|------|-----------|---------|
| **float** | 32 Bit | approx. 7 digits | `float f = 3.14f;` |
| **double** | 64 Bit | approx. 15 digits | `double d = 3.14159265;` |

#### Boolean (Truth Value)

| Value | Meaning | Example |
|-------|---------|---------|
| **true** | True | `boolean active = true;` |
| **false** | False | `boolean active = false;` |

#### Char (Character)

A single character in single quotes.

```
char letter = 'A';
char digit = '5';
char special = '@';
```

#### String (Character String)

A sequence of characters in double quotes.

```
String name = "John Smith";
String empty = "";
String sentence = "Hello World!";
```

---

### Data Types Overview

```
┌────────────────────────────────────────────────────────────────┐
│                    DATA TYPES OVERVIEW                         │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Data Type      │ Example Values        │ Storage            │
│  ───────────────┼───────────────────────┼──────────────────  │
│   Integer       │ 42, -7, 0, 1000       │ 4 Byte (int)       │
│   Float/Double  │ 3.14, -0.5, 2.0       │ 4/8 Byte           │
│   Boolean       │ true, false           │ 1 Bit (theoret.)   │
│   Char          │ 'A', '5', '@'         │ 2 Byte (Unicode)   │
│   String        │ "Hello", "Test123"    │ variable           │
│                                                                │
│   Memory Aid:                                                 │
│   • Integer  = Whole numbers (no decimal)                    │
│   • Float    = Decimal numbers (with point)                  │
│   • Boolean  = True or False                                 │
│   • Char     = ONE character                                 │
│   • String   = MULTIPLE characters                           │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Declaration and Initialization

```
┌────────────────────────────────────────────────────────────────┐
│            DECLARATION AND INITIALIZATION                      │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   DECLARATION:                                                 │
│   Variable is created, but no value assigned yet              │
│                                                                │
│       int age;           // Java: declaration only            │
│                                                                │
│   INITIALIZATION:                                             │
│   Variable receives an initial value                          │
│                                                                │
│       age = 25;          // Value assignment                  │
│                                                                │
│   DECLARATION + INITIALIZATION (common):                      │
│                                                                │
│       int age = 25;      // Java                             │
│       age = 25           # Python (no type needed)           │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Typing

| Type | Description | Languages |
|------|-------------|-----------|
| **Static** | Type is fixed at declaration | Java, C#, C++ |
| **Dynamic** | Type is determined at runtime | Python, JavaScript |
| **Strong** | Strict type checking | Java, Python |
| **Weak** | Flexible type conversion | JavaScript, PHP |

```
// Statically typed (Java):
int number = 42;
String text = "Hello";

# Dynamically typed (Python):
number = 42           # number is Integer
number = "Hello"      # number is now String (allowed!)
```

---

### Type Conversion (Casting)

```
┌────────────────────────────────────────────────────────────────┐
│                   TYPE CONVERSION                              │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   IMPLICIT (automatic)           EXPLICIT (manual)            │
│   Small Type → Large Type        Large Type → Small Type      │
│                                                                │
│   int a = 100;                   double x = 9.7;             │
│   double b = a;  // 100.0        int y = (int) x;  // 9      │
│                                                                │
│   ┌────────────────────────────────────────────────────┐      │
│   │  byte → short → int → long → float → double        │      │
│   │        ────────────────────────────────────►       │      │
│   │              IMPLICIT (no data loss)               │      │
│   │                                                    │      │
│   │        ◄────────────────────────────────────       │      │
│   │        EXPLICIT (possible data loss!)              │      │
│   └────────────────────────────────────────────────────┘      │
│                                                                │
│   String to Number (Java):                                    │
│   String s = "42";                                            │
│   int z = Integer.parseInt(s);     // z = 42                 │
│                                                                │
│   Number to String (Java):                                    │
│   int z = 42;                                                 │
│   String s = String.valueOf(z);    // s = "42"               │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Naming Conventions

| Rule | Example | Wrong |
|------|---------|-------|
| Letter at beginning | `age`, `_temp` | `1value` |
| No spaces | `maxValue` | `max value` |
| No special characters | `count` | `count#` |
| camelCase (common) | `maxCount` | `maxcount` |
| Meaningful names | `customerNumber` | `x`, `temp` |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Variable** | Named storage location with changeable value |
| **Constant** | Variable with unchangeable value |
| **Data Type** | Type of data (Integer, String, etc.) |
| **Declaration** | Creating a variable |
| **Initialization** | First assignment of a value |
| **Casting** | Type conversion |
| **Primitive Types** | Basic data types |

---

## Exam Tips

### Common Exam Questions

- What data type does the value "42" have?
- Difference between Integer and Float?
- What is a constant?
- What does declaration vs. initialization mean?

### Important to Remember

- **Integer** = Whole numbers (42, -7)
- **Float/Double** = Decimal numbers (3.14)
- **Boolean** = true/false
- **String** = Text in quotation marks
- **Char** = ONE single character

---

## Practice Exercises

### Exercise 1
What data type would you use for the following values?
- Age of a person
- Price of a product
- First name
- Is the customer active?

**Solution:**
- Age of a person: **Integer** (whole number)
- Price of a product: **Double/Float** (decimal number)
- First name: **String** (character string)
- Is the customer active?: **Boolean** (true/false)

### Exercise 2
What is the difference between a variable and a constant?

**Solution:**
- **Variable:** A storage location whose value can be changed during program execution. Example: `int counter = 0;` → later: `counter = 10;`
- **Constant:** A storage location whose value cannot be changed after initialization. Example: `final double PI = 3.14159;`

### Exercise 3
Given the following pseudocode. Determine the data type of each variable:

```
name = "Smith"
age = 42
salary = 3500.50
isMarried = true
initialLetter = 'S'
```

**Solution:**
| Variable | Data Type | Reason |
|----------|-----------|--------|
| name | String | Text in quotation marks |
| age | Integer | Whole number |
| salary | Double/Float | Decimal number |
| isMarried | Boolean | Truth value |
| initialLetter | Char | Single character |

---

## Cross-References

- [06-02-02 Control Structures](./06-02-02-control-structures.md) - Usage in conditions
- [06-02-05 Pseudocode](./06-02-05-pseudocode.md) - Representation in pseudocode
- [05-01-01 Bits and Bytes](../../05-it-systems/05-01-fundamentals/05-01-01-bits-bytes-number-systems.md) - Storage sizes
