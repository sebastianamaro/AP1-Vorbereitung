# UML Class Diagram

## Learning Objectives

After this chapter, you should be able to:
- Read and understand UML class diagrams
- Know the notation for classes, attributes and methods
- Represent relationships between classes
- Understand visibilities and multiplicities

---

## Core Content

### What is a Class Diagram?

A **class diagram** is a UML diagram that shows the static structure of a system - which classes exist and how they are connected.

```
┌─────────────────────────────────────────────────────────────────┐
│                  UML CLASS DIAGRAM                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Purpose:                                                      │
│   • Visualize structure of a system                            │
│   • Show classes and their relationships                        │
│   • Foundation for implementation                               │
│   • Documentation for developers                                │
│                                                                 │
│   Shows:                                                        │
│   • Classes with attributes and methods                         │
│   • Relationships between classes                               │
│   • Visibilities (public, private)                             │
│   • Cardinalities (how many objects)                           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Representation of a Class

```
┌────────────────────────────────────────────────────────────────┐
│                   CLASS NOTATION                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   ┌──────────────────────────────────────┐                    │
│   │          <<Stereotype>>               │  ← Optional        │
│   │            ClassName                  │  ← Required        │
│   ├──────────────────────────────────────┤                    │
│   │ - attribute1: DataType                │                    │
│   │ - attribute2: DataType = DefaultValue │  ← Attributes     │
│   │ # attribute3: DataType                │                    │
│   ├──────────────────────────────────────┤                    │
│   │ + method1(): ReturnType               │                    │
│   │ + method2(param: Type): ReturnType    │  ← Methods        │
│   │ - privateMethod(): void               │                    │
│   └──────────────────────────────────────┘                    │
│                                                                │
│   The three sections:                                          │
│   1. Class name (top)                                          │
│   2. Attributes (middle)                                       │
│   3. Methods (bottom)                                          │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Example: Customer Class

```
┌────────────────────────────────────────────────────────────────┐
│                   EXAMPLE: CUSTOMER CLASS                       │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   ┌────────────────────────────────────┐                      │
│   │              Customer              │                      │
│   ├────────────────────────────────────┤                      │
│   │ - customerNo: int                  │                      │
│   │ - name: String                     │                      │
│   │ - email: String                    │                      │
│   │ - birthDate: Date                  │                      │
│   │ - active: boolean = true           │                      │
│   ├────────────────────────────────────┤                      │
│   │ + getCustomerNo(): int             │                      │
│   │ + getName(): String                │                      │
│   │ + setName(name: String): void      │                      │
│   │ + calculateAge(): int              │                      │
│   │ - validateEmail(email: String):    │                      │
│   │   boolean                          │                      │
│   └────────────────────────────────────┘                      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Visibilities (Access Modifiers)

```
┌────────────────────────────────────────────────────────────────┐
│                    VISIBILITIES                                 │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Symbol │ Meaning      │ Access from                          │
│   ───────┼──────────────┼────────────────────────────────────│
│     +    │ public       │ Everywhere (all classes)            │
│     -    │ private      │ Only within own class               │
│     #    │ protected    │ Own class + subclasses              │
│     ~    │ package      │ Within same package                 │
│                                                                │
│   Typical:                                                     │
│   • Attributes usually private (-)                            │
│   • Methods usually public (+)                                │
│   • Getter/Setter public (+)                                  │
│   • Helper methods private (-)                                │
│                                                                │
│   Example:                                                     │
│   ┌────────────────────────────────┐                         │
│   │          Account               │                         │
│   ├────────────────────────────────┤                         │
│   │ - balance: double              │  ← private             │
│   │ - pin: String                  │  ← private             │
│   ├────────────────────────────────┤                         │
│   │ + getBalance(): double         │  ← public              │
│   │ + deposit(amount: double)      │  ← public              │
│   │ - checkPin(pin: String): bool  │  ← private             │
│   └────────────────────────────────┘                         │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Relationships Between Classes

```
┌────────────────────────────────────────────────────────────────┐
│                    RELATIONSHIP TYPES                           │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   1. ASSOCIATION (knows / uses)                                │
│   ┌──────────┐                    ┌──────────┐               │
│   │ Customer │────────────────────│  Order   │               │
│   └──────────┘                    └──────────┘               │
│   A customer has orders                                        │
│                                                                │
│   2. AGGREGATION (has / consists of - loose)                  │
│   ┌──────────┐         ◇─────────┌──────────┐               │
│   │   Team   │◇────────          │ Employee │               │
│   └──────────┘                   └──────────┘               │
│   Team has employees (employees can exist without team)        │
│   Hollow diamond at the "whole"                               │
│                                                                │
│   3. COMPOSITION (consists of - tight, lives and dies)        │
│   ┌──────────┐         ♦─────────┌──────────┐               │
│   │ Invoice  │♦────────          │ LineItem │               │
│   └──────────┘                   └──────────┘               │
│   Invoice has line items (line item without invoice meaningless)│
│   Filled diamond at the "whole"                               │
│                                                                │
│   4. DIRECTED ASSOCIATION (one direction only)                 │
│   ┌──────────┐                    ┌──────────┐               │
│   │  Person  │───────────────────►│  Address │               │
│   └──────────┘                    └──────────┘               │
│   Person knows address, but address does not know person       │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Multiplicities (Cardinalities)

```
┌────────────────────────────────────────────────────────────────┐
│                   MULTIPLICITIES                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Notation │ Meaning                                           │
│   ─────────┼────────────────────────────────────────────────│
│      1     │ Exactly one                                       │
│     0..1   │ Zero or one (optional)                           │
│      *     │ Any number (zero to unlimited)                   │
│     1..*   │ One or more (at least one)                       │
│     0..*   │ Zero or more (same as *)                         │
│     n..m   │ Between n and m                                   │
│                                                                │
│   Examples:                                                    │
│                                                                │
│   ┌──────────┐  1        *  ┌──────────┐                    │
│   │ Customer │──────────────│  Order   │                    │
│   └──────────┘              └──────────┘                    │
│   A customer has any number of orders                         │
│   An order belongs to exactly one customer                    │
│                                                                │
│   ┌──────────┐  1       1..* ┌──────────┐                    │
│   │ Invoice  │♦──────────────│ LineItem │                    │
│   └──────────┘               └──────────┘                    │
│   An invoice has at least one line item                       │
│   A line item belongs to exactly one invoice                  │
│                                                                │
│   ┌──────────┐  0..1    0..1 ┌──────────┐                    │
│   │  Person  │──────────────│  Spouse  │                    │
│   └──────────┘               └──────────┘                    │
│   A person has none or one spouse                             │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Complete Example: Online Shop

```
┌────────────────────────────────────────────────────────────────┐
│              EXAMPLE: ONLINE SHOP                               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   ┌────────────────────┐    1        *   ┌─────────────────┐ │
│   │      Customer      │─────────────────│     Order       │ │
│   ├────────────────────┤                 ├─────────────────┤ │
│   │ - customerNo: int  │                 │ - orderNo: int  │ │
│   │ - name: String     │                 │ - date: Date    │ │
│   │ - email: String    │                 │ - status: String│ │
│   ├────────────────────┤                 ├─────────────────┤ │
│   │ + placeOrder()     │                 │ + cancel()      │ │
│   │ + getOrders()      │                 │ + calculateTotal│ │
│   └────────────────────┘                 └────────┬────────┘ │
│                                                   │          │
│                                                   │ 1        │
│                                                   │          │
│                                                   ♦          │
│                                               1..*│          │
│                                          ┌────────┴────────┐ │
│                                          │    LineItem     │ │
│                                          ├─────────────────┤ │
│   ┌────────────────────┐    *       1    │ - quantity: int │ │
│   │      Product       │◄────────────────│ - unitPrice:    │ │
│   ├────────────────────┤                 │   double        │ │
│   │ - productNo: int   │                 ├─────────────────┤ │
│   │ - name: String     │                 │ + calculateSum  │ │
│   │ - price: double    │                 │   (): double    │ │
│   │ - stock: int       │                 └─────────────────┘ │
│   ├────────────────────┤                                     │
│   │ + getPrice(): double                                     │
│   │ + isAvailable():                                         │
│   │   boolean          │                                     │
│   └────────────────────┘                                     │
│                                                                │
│   Reading direction:                                          │
│   • A customer has many (*) orders                            │
│   • An order belongs to exactly one (1) customer              │
│   • An order has 1 or more (1..*) line items                  │
│   • A line item refers to exactly one (1) product             │
│   • A product can appear in many (*) line items               │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Notation Summary

| Element | Notation | Example |
|---------|----------|---------|
| **Class** | Rectangle with 3 sections | See above |
| **Attribute** | `visibility name: Type` | `- age: int` |
| **Method** | `visibility name(param): Return` | `+ getAge(): int` |
| **Association** | Line | ─────────── |
| **Aggregation** | Hollow diamond | ◇────────── |
| **Composition** | Filled diamond | ♦────────── |
| **Directed** | Arrow | ─────────►  |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Class Diagram** | UML diagram for system structure |
| **Attribute** | Property/data element of a class |
| **Method** | Function/operation of a class |
| **Association** | Relationship between classes |
| **Aggregation** | "Has" relationship (loose) |
| **Composition** | "Consists of" relationship (tight) |
| **Multiplicity** | Number of participating objects |

---

## Exam Tips

### Common Exam Questions

- Read the class diagram and explain the relationships
- What multiplicity exists between the classes?
- What does the diamond (aggregation/composition) mean?

### Important to Remember

- **+** = public, **-** = private, **#** = protected
- **◇** = Aggregation (parts exist independently)
- **♦** = Composition (parts live and die with the whole)
- **1** = exactly one, ***** = any number
- **1..*** = at least one

---

## Practice Exercises

### Exercise 1
Explain the difference between aggregation and composition using an example.

**Solution:**
- **Aggregation (◇):** "Has" relationship where parts can exist without the whole.
  - Example: Team ◇── Employee. If the team is dissolved, the employees continue to exist.

- **Composition (♦):** "Consists of" relationship where parts cannot exist without the whole.
  - Example: Invoice ♦── LineItem. If the invoice is deleted, the line items are also deleted.

### Exercise 2
What does the following multiplicity mean?

```
┌──────────┐  1        0..*  ┌──────────┐
│  Course  │─────────────────│  Student │
└──────────┘                 └──────────┘
```

**Solution:**
- A course is attended by any number (0..*) of students (can also be zero)
- A student attends exactly one (1) course

This means: A student is always assigned to exactly one course, but a course can also be empty.

### Exercise 3
Create a simple class diagram for a library with: Book, Author, Loan, Member.

**Solution:**
```
┌────────────────┐  *       1..* ┌────────────────┐
│     Book       │───────────────│     Author     │
├────────────────┤               ├────────────────┤
│ - isbn: String │               │ - name: String │
│ - title: String│               │ - birthYear: int│
├────────────────┤               ├────────────────┤
│ + getTitle()   │               │ + getName()    │
└───────┬────────┘               └────────────────┘
        │ 1
        │
        ♦
    0..*│
┌───────┴────────┐               ┌────────────────┐
│      Loan      │  *         1  │     Member     │
├────────────────┤───────────────├────────────────┤
│ - loanDate     │               │ - memberNo     │
│ - returnDate   │               │ - name: String │
├────────────────┤               ├────────────────┤
│ + extend()     │               │ + borrow()     │
└────────────────┘               └────────────────┘
```

---

## Cross-References

- [06-02-04 OOP Fundamentals](../06-02-programming/06-02-04-oop-fundamentals.md) - Classes and objects
- [06-03-02 Use Case Diagram](./06-03-02-use-case-diagram.md) - Behavioral diagram
- [06-04-02 ERD](../06-04-databases/06-04-02-erd.md) - Data modeling
