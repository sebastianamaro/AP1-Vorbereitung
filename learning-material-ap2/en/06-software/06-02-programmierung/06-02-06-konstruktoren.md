# Constructors

## Learning Objectives

After this chapter you should be able to:
- Know the purpose and rules of a constructor
- Apply constructor overloading
- Distinguish default and parameterised constructors

---

## Core Content

A **constructor** creates and initialises an object. Rules: **same name as the class**, **no return value** (not even `void`).

**Three tasks:** (1) reserve memory, (2) initialise instance variables, (3) return a reference to the object.

Without your own constructor, the compiler provides a **default constructor** (with no parameters) – as soon as you define your own, this automatic one no longer exists.

### Overloading

Several constructors with **different parameter lists** (number/type). The compiler selects the matching one based on the arguments.

```java
public class Hund {
    private String name;
    private int alter;

    public Hund() { this("Unbekannt", 0); }          // ruft anderen Konstruktor (this)
    public Hund(String name) { this(name, 0); }
    public Hund(String name, int alter) {            // "Haupt"-Konstruktor
        this.name = name;
        this.alter = alter;
    }
}

new Hund();                 // Standardwerte
new Hund("Rex");            // nur Name
new Hund("Rex", 3);         // Name + Alter
```

- **`this(...)`** calls another constructor of the same class (constructor chaining).
- **`super(...)`** calls the superclass constructor (with inheritance, as the first statement).

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Constructor** | Creates/initialises an object; class name, no return value |
| **Default constructor** | Parameterless constructor (automatic if none is defined) |
| **Overloading** | Several constructors with different parameter lists |
| **this()/super()** | Constructor chaining within/to the superclass |

---

## Exam Tips

- Remember the rules: **name = class name, no return value**.
- **Overloading** = different parameter lists (not just different names).
- As soon as your own constructor exists, there is **no** automatic default constructor anymore.

---

## Practice Exercise

**Task:** Write a class `Rechteck` with a constructor `(breite, hoehe)` and an overloaded constructor `(seite)` for a square (use `this(...)`).

---

## Cross-References

- [06-02-05 Data Encapsulation](./06-02-05-kapselung.md)
- [06-02-08 Classes: abstract/Interface/Generics](./06-02-08-klassen-abstrakt-interface.md)
