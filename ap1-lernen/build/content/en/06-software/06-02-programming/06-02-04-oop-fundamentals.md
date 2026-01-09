# OOP Fundamentals

## Learning Objectives

After this chapter, you should be able to:
- Understand the basic concepts of object-oriented programming
- Distinguish between classes and objects
- Explain attributes and methods
- Read simple class diagrams

---

## Core Content

### What is Object-Oriented Programming?

**Object-Oriented Programming (OOP)** is a programming paradigm that combines data and functions into objects.

```
┌─────────────────────────────────────────────────────────────────┐
│              OBJECT-ORIENTED PROGRAMMING                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Basic Idea: The real world consists of objects               │
│               Programs model these objects                      │
│                                                                 │
│   ┌─────────────────┐         ┌─────────────────┐             │
│   │   REAL WORLD    │         │  PROGRAM WORLD  │             │
│   ├─────────────────┤         ├─────────────────┤             │
│   │ Car             │  ───►   │ Class Car       │             │
│   │ - has color     │         │ - color         │             │
│   │ - has horsepower│         │ - horsepower    │             │
│   │ - can drive     │         │ - drive()       │             │
│   │ - can brake     │         │ - brake()       │             │
│   └─────────────────┘         └─────────────────┘             │
│                                                                 │
│   Objects = Data + Behavior (encapsulated together)            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Class and Object

```
┌────────────────────────────────────────────────────────────────┐
│                   CLASS vs. OBJECT                             │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   CLASS = Blueprint               OBJECT = Concrete Instance   │
│   ┌────────────────────┐         ┌────────────────────┐      │
│   │       Car          │         │     myCar          │      │
│   ├────────────────────┤         ├────────────────────┤      │
│   │ - brand: String    │         │ brand = "VW"       │      │
│   │ - color: String    │  ───►   │ color = "red"      │      │
│   │ - hp: Integer      │         │ hp = 150           │      │
│   ├────────────────────┤         ├────────────────────┤      │
│   │ + start()          │         │ start()            │      │
│   │ + brake()          │         │ brake()            │      │
│   └────────────────────┘         └────────────────────┘      │
│                                                                │
│   From ONE class, MANY objects can be created:                │
│                                                                │
│   ┌────────────────┐  ┌────────────────┐  ┌────────────────┐ │
│   │   myCar        │  │   yourCar      │  │  companyCar    │ │
│   │ brand="VW"     │  │ brand="BMW"    │  │ brand="Audi"   │ │
│   │ color="red"    │  │ color="blue"   │  │ color="black"  │ │
│   │ hp=150         │  │ hp=200         │  │ hp=180         │ │
│   └────────────────┘  └────────────────┘  └────────────────┘ │
│                                                                │
│   All objects have the same structure (class),                │
│   but different values.                                        │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Term | Explanation | Example |
|------|-------------|---------|
| **Class** | Blueprint/template for objects | Class "Car" |
| **Object** | Concrete instance of a class | myCar (is a Car) |
| **Instance** | Another word for object | "myCar is an instance of Car" |
| **Instantiation** | Creating an object from a class | `Car myCar = new Car();` |

---

### Attributes

**Attributes** are the properties/data of an object.

```
┌────────────────────────────────────────────────────────────────┐
│                       ATTRIBUTES                               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Class: Customer                                             │
│   ┌────────────────────┐                                      │
│   │     Customer       │                                      │
│   ├────────────────────┤                                      │
│   │ - customerNo: int  │  ◄─── Attributes                    │
│   │ - name: String     │       (Properties)                  │
│   │ - email: String    │                                      │
│   │ - active: boolean  │                                      │
│   ├────────────────────┤                                      │
│   │ ...                │                                      │
│   └────────────────────┘                                      │
│                                                                │
│   Object: customer1                                           │
│   ┌────────────────────┐                                      │
│   │ customerNo = 12345 │                                      │
│   │ name = "Miller"    │  ◄─── Concrete values               │
│   │ email = "m@x.com"  │                                      │
│   │ active = true      │                                      │
│   └────────────────────┘                                      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Methods

**Methods** are the functions/behavior of an object.

```
┌────────────────────────────────────────────────────────────────┐
│                        METHODS                                 │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Class: Account                                              │
│   ┌────────────────────────────────┐                         │
│   │           Account              │                         │
│   ├────────────────────────────────┤                         │
│   │ - accountNo: String            │  Attributes             │
│   │ - balance: double              │                         │
│   ├────────────────────────────────┤                         │
│   │ + deposit(amount: double)      │  Methods                │
│   │ + withdraw(amount: double)     │  (Behavior)             │
│   │ + getBalance(): double         │                         │
│   └────────────────────────────────┘                         │
│                                                                │
│   Methods can:                                                │
│   • Read attributes (Getter)                                 │
│   • Modify attributes (Setter)                               │
│   • Perform calculations                                     │
│   • Interact with other objects                              │
│                                                                │
│   Example in pseudocode:                                      │
│                                                                │
│   METHOD deposit(amount)                                      │
│       balance = balance + amount                              │
│   END METHOD                                                  │
│                                                                │
│   METHOD withdraw(amount)                                     │
│       IF balance >= amount THEN                               │
│           balance = balance - amount                          │
│           RETURN true                                         │
│       ELSE                                                    │
│           RETURN false                                        │
│       END IF                                                  │
│   END METHOD                                                  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Constructor

A **constructor** is a special method that is called when creating an object.

```
┌────────────────────────────────────────────────────────────────┐
│                      CONSTRUCTOR                               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Purpose: Initialize object (set attributes)                 │
│                                                                │
│   Class Person:                                               │
│   ┌────────────────────────────────────────────────────────┐ │
│   │  class Person {                                         │ │
│   │                                                         │ │
│   │      // Attributes                                      │ │
│   │      String name;                                       │ │
│   │      int age;                                           │ │
│   │                                                         │ │
│   │      // Constructor (same name as class)               │ │
│   │      Person(String n, int a) {                         │ │
│   │          name = n;                                      │ │
│   │          age = a;                                       │ │
│   │      }                                                  │ │
│   │  }                                                      │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Object creation with constructor:                           │
│   Person p = new Person("Max", 25);                           │
│                      └──┬──┘  └─┬─┘                          │
│                         │      │                              │
│                      name   age                               │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Visibility (Access Modifiers)

```
┌────────────────────────────────────────────────────────────────┐
│                    VISIBILITY                                  │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   UML Notation:                                               │
│   + public     │ Accessible from anywhere                     │
│   - private    │ Only within the class                        │
│   # protected  │ Class and derived classes                    │
│                                                                │
│   Example:                                                    │
│   ┌────────────────────────────────┐                         │
│   │          Account               │                         │
│   ├────────────────────────────────┤                         │
│   │ - balance: double              │  private (protected)    │
│   │ - pin: String                  │                         │
│   ├────────────────────────────────┤                         │
│   │ + getBalance(): double         │  public (accessible)    │
│   │ + deposit(amount: double)      │                         │
│   └────────────────────────────────┘                         │
│                                                                │
│   Best Practice: Attributes private, access via methods       │
│   (Data Encapsulation / Information Hiding)                   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Modifier | UML | Visible to |
|----------|-----|------------|
| **public** | + | Everyone |
| **private** | - | Own class only |
| **protected** | # | Own class and subclasses |

---

### Getter and Setter

**Getter** and **Setter** are methods for controlled access to private attributes.

```
┌────────────────────────────────────────────────────────────────┐
│                   GETTER AND SETTER                            │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Class with private attributes and access methods:           │
│                                                                │
│   class Product {                                             │
│       private String name;                                    │
│       private double price;                                   │
│                                                                │
│       // Getter - read value                                  │
│       public String getName() {                               │
│           return name;                                        │
│       }                                                       │
│                                                                │
│       // Setter - set value (with validation possible)       │
│       public void setPrice(double newPrice) {                │
│           if (newPrice >= 0) {     // Validation!            │
│               price = newPrice;                              │
│           }                                                   │
│       }                                                       │
│   }                                                           │
│                                                                │
│   Usage:                                                      │
│   Product p = new Product();                                  │
│   p.setPrice(9.99);                  // Set price            │
│   System.out.println(p.getName());   // Read name            │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

**Benefits of Getter/Setter:**
- Validation when setting possible
- Internal representation can change
- Controlled access to data

---

### OOP Concept: Encapsulation

**Encapsulation** means that data and methods are combined and protected together.

```
┌────────────────────────────────────────────────────────────────┐
│                      ENCAPSULATION                             │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   ┌────────────────────────────────────────────────────────┐ │
│   │                        OBJECT                           │ │
│   │  ┌─────────────────────────────────────────────────┐   │ │
│   │  │                                                 │   │ │
│   │  │      Private Attributes (protected)             │   │ │
│   │  │      - balance                                  │   │ │
│   │  │      - pin                                      │   │ │
│   │  │                                                 │   │ │
│   │  └─────────────────────────────────────────────────┘   │ │
│   │                         │                               │ │
│   │                         ▼                               │ │
│   │  ┌─────────────────────────────────────────────────┐   │ │
│   │  │      Public Methods (Interface)                 │   │ │
│   │  │      + getBalance()                             │   │ │
│   │  │      + deposit()                                │   │ │
│   │  │      + withdraw()                               │   │ │
│   │  └─────────────────────────────────────────────────┘   │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   From outside: Access only through public methods            │
│   Internal details remain hidden ("Black Box")                │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### OOP Terms Summary

| Term | Explanation | Example |
|------|-------------|---------|
| **Class** | Blueprint for objects | `class Car { ... }` |
| **Object** | Instance of a class | `Car myCar = new Car();` |
| **Attribute** | Property/data element | `color`, `hp` |
| **Method** | Function in a class | `start()`, `brake()` |
| **Constructor** | Initializes object | `Car(String brand)` |
| **Encapsulation** | Protect data | private attributes |
| **Getter/Setter** | Access methods | `getName()`, `setName()` |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **OOP** | Object-Oriented Programming |
| **Class** | Template/blueprint for objects |
| **Object** | Concrete instance of a class |
| **Attribute** | Property of an object |
| **Method** | Function of an object |
| **Constructor** | Special method for initialization |
| **Encapsulation** | Protection of internal data |

---

## Exam Tips

### Common Exam Questions

- What is the difference between a class and an object?
- What are attributes and methods?
- Explain the principle of encapsulation
- What does a constructor do?

### Important to Remember

- **Class** = Blueprint, **Object** = concrete instance
- **Attributes** = Properties (data)
- **Methods** = Capabilities (functions)
- **Encapsulation** = Protect data with private
- **Constructor** = initializes the object

---

## Practice Exercises

### Exercise 1
Explain the difference between a class and an object using an example.

**Solution:**
- **Class:** A class is a blueprint or template. It defines which properties (attributes) and capabilities (methods) objects will have. Example: The class "Smartphone" defines that a smartphone has a brand, a model, and storage size.
- **Object:** An object is a concrete instance of a class with concrete values. Example: "myPhone" is an object of the class Smartphone with brand="Samsung", model="Galaxy S21", storage=128.

### Exercise 2
Given the following class description. Identify attributes and methods:

```
Class: Book
- title
- author
- isbn
- borrowed
+ borrow()
+ returnBook()
+ getInfo()
```

**Solution:**

**Attributes (Properties with -):**
- title (presumably String)
- author (presumably String)
- isbn (presumably String)
- borrowed (presumably Boolean)

**Methods (Functions with +):**
- borrow() - sets borrowed to true
- returnBook() - sets borrowed to false
- getInfo() - returns information about the book

### Exercise 3
Why should attributes generally be declared as private?

**Solution:**
Attributes should be private because:
1. **Data Integrity:** Values can be validated when setting (e.g., no negative price)
2. **Encapsulation:** Internal implementation can change without changing the interface
3. **Control:** Access only through defined getter/setter methods
4. **Error Reduction:** Uncontrolled changes from outside are prevented

---

## Cross-References

- [06-01-02 Programming Paradigms](../06-01-fundamentals/06-01-02-programming-paradigms.md) - OOP as a paradigm
- [06-03-01 Class Diagram](../06-03-uml/06-03-01-class-diagram.md) - UML representation
- [06-02-03 Procedures and Functions](./06-02-03-procedures-functions.md) - Method basics
