# Programming Paradigms

## Learning Objectives

After this chapter, you should be able to:
- Know the most important programming paradigms
- Distinguish between imperative and declarative programming
- Understand object-oriented programming
- Assign languages to paradigms

---

## Core Content

### What is a Programming Paradigm?

A **programming paradigm** is a fundamental style or way of thinking in programming that determines how problems are solved.

```
┌─────────────────────────────────────────────────────────────────┐
│                  PROGRAMMING PARADIGMS                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                      PARADIGMS                                  │
│                          │                                      │
│          ┌───────────────┴───────────────┐                     │
│          │                               │                     │
│    ┌─────▼─────┐                  ┌─────▼─────┐               │
│    │ IMPERATIVE│                  │DECLARATIVE│               │
│    │           │                  │           │               │
│    │ "HOW" it  │                  │ "WHAT"    │               │
│    │ is done   │                  │ should be │               │
│    │           │                  │ achieved  │               │
│    └─────┬─────┘                  └─────┬─────┘               │
│          │                               │                     │
│    ┌─────┴─────┐               ┌────────┴────────┐            │
│    │           │               │                 │            │
│    ▼           ▼               ▼                 ▼            │
│ Procedural  Object-       Functional       Logic              │
│             oriented                                          │
│                                                                │
└─────────────────────────────────────────────────────────────────┘
```

---

### Imperative Programming

In **imperative programming**, you describe step by step **HOW** a problem is solved.

```
┌────────────────────────────────────────────────────────────────┐
│                 IMPERATIVE PROGRAMMING                         │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Characteristics:                                              │
│  • Instructions are executed one after another                 │
│  • State is managed through variables                          │
│  • Control structures (if, while, for)                         │
│                                                                │
│  Example (calculating sum):                                    │
│                                                                │
│    sum = 0                        // Initialize state          │
│    for i from 1 to 5:             // Loop                      │
│        sum = sum + i              // Change state              │
│    output(sum)                    // Result: 15                │
│                                                                │
│  The steps describe HOW the sum is calculated                  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### Procedural Programming

| Aspect | Description |
|--------|-------------|
| **Focus** | Decomposition into procedures/functions |
| **Organization** | Functions that process data |
| **Languages** | C, Pascal, BASIC |

#### Object-Oriented Programming (OOP)

| Aspect | Description |
|--------|-------------|
| **Focus** | Organization in objects with data and methods |
| **Basic Concepts** | Classes, Objects, Attributes, Methods |
| **Languages** | Java, C#, Python, C++ |

---

### Declarative Programming

In **declarative programming**, you describe **WHAT** should be achieved, not how.

```
┌────────────────────────────────────────────────────────────────┐
│                DECLARATIVE PROGRAMMING                         │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Characteristics:                                              │
│  • Describes the desired result                                │
│  • No explicit control flows                                   │
│  • The "how" is handled by the runtime environment             │
│                                                                │
│  Example (calculating sum, functional):                        │
│                                                                │
│    sum = sum([1, 2, 3, 4, 5])   // WHAT: Sum of the list       │
│                                                                │
│  The HOW is not important to the developer                     │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### Functional Programming

| Aspect | Description |
|--------|-------------|
| **Focus** | Functions as central building blocks |
| **Characteristics** | No side effects, immutability |
| **Languages** | Haskell, Erlang, partially Python |

#### Logic Programming

| Aspect | Description |
|--------|-------------|
| **Focus** | Logical rules and facts |
| **Characteristics** | System derives answers |
| **Languages** | Prolog |

---

### Comparison: Imperative vs. Declarative

| Aspect | Imperative | Declarative |
|--------|------------|-------------|
| **Asks** | "How?" | "What?" |
| **Describes** | Steps to the solution | Desired result |
| **Example** | Loop through items | Call filter function |
| **Control** | Developer determines flow | System determines flow |

---

### Object-Oriented Programming in Detail

```
┌────────────────────────────────────────────────────────────────┐
│            OBJECT-ORIENTED PROGRAMMING                         │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  CLASS (Blueprint)               OBJECT (concrete instance)    │
│  ┌────────────────────┐        ┌────────────────────┐        │
│  │       Car          │        │    myCar           │        │
│  ├────────────────────┤        ├────────────────────┤        │
│  │ - brand: String    │        │ brand = "VW"       │        │
│  │ - color: String    │───────►│ color = "red"      │        │
│  │ - hp: Integer      │        │ hp = 150           │        │
│  ├────────────────────┤        ├────────────────────┤        │
│  │ + start()          │        │ start()            │        │
│  │ + brake()          │        │ brake()            │        │
│  │ + accelerate()     │        │ accelerate()       │        │
│  └────────────────────┘        └────────────────────┘        │
│                                                                │
│  Attributes = Properties (data)                                │
│  Methods = Capabilities (functions)                            │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Term | Explanation |
|------|-------------|
| **Class** | Blueprint/template for objects |
| **Object** | Concrete instance of a class |
| **Attribute** | Property/data element |
| **Method** | Function within a class |

---

### Languages and Their Paradigms

| Language | Paradigms |
|----------|-----------|
| **C** | Procedural |
| **Java** | Object-oriented (primary) |
| **C#** | Object-oriented, partially functional |
| **Python** | Multi-paradigm (OOP, procedural, functional) |
| **JavaScript** | Multi-paradigm |
| **Haskell** | Functional |
| **SQL** | Declarative |
| **HTML/CSS** | Declarative (markup) |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Paradigm** | Fundamental programming style |
| **Imperative** | Describes HOW (steps) |
| **Declarative** | Describes WHAT (goal) |
| **Procedural** | Imperative with procedures/functions |
| **OOP** | Object-Oriented Programming |
| **Functional** | Declarative with functions |
| **Class** | Blueprint for objects |
| **Object** | Instance of a class |

---

## Exam Tips

### Common Exam Questions

- What is the difference between imperative and declarative?
- What are classes and objects?
- Name characteristics of object-oriented programming

### Important to Remember

- **Imperative** = HOW (step by step)
- **Declarative** = WHAT (describe result)
- **OOP** = Classes, Objects, Attributes, Methods
- **Python, Java** = Object-oriented

---

## Practice Exercises

### Exercise 1
What is the difference between imperative and declarative programming?

**Solution:**
- **Imperative:** Describes **HOW** a problem is solved (steps, instructions)
- **Declarative:** Describes **WHAT** should be achieved (result)

Example: Filtering a list
- Imperative: Loop through all elements, check condition, add to new list
- Declarative: `filter(list, condition)` - only specify the desired result

### Exercise 2
Explain the difference between a class and an object.

**Solution:**
- **Class:** A blueprint/template that defines attributes (properties) and methods (functions). Example: Class "Car" with attributes brand, color, hp
- **Object:** A concrete instance of a class with concrete values. Example: Object "myCar" with brand="VW", color="red", hp=150

### Exercise 3
Assign the following languages to their primary paradigm: C, Java, SQL

**Solution:**
| Language | Primary Paradigm |
|----------|-----------------|
| C | Procedural (imperative) |
| Java | Object-oriented |
| SQL | Declarative |

---

## Cross-References

- [06-02-04 OOP Fundamentals](../06-02-programming/06-02-04-oop-fundamentals.md) - OOP in detail
- [06-03-01 Class Diagram](../06-03-uml/06-03-01-class-diagram.md) - UML for classes
- [06-02-03 Procedures and Functions](../06-02-programming/06-02-03-procedures-functions.md) - Procedural concepts
