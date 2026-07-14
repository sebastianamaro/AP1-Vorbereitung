# Abstract Classes, Interfaces & Generics

## Learning Objectives

After this chapter you should be able to:
- Distinguish abstract classes and interfaces
- Know when to use which
- Explain generics and their benefit (type safety)

---

## Core Content

### Abstract Class

An **abstract class** is a "blueprint" that **cannot be instantiated**. It can contain **concrete** and **abstract** (implementation-less) methods; subclasses must implement the abstract methods.

```java
abstract class Fahrzeug {
    void hupe() { /* konkret */ }
    abstract void starte();          // muss überschrieben werden
}
class Motorrad extends Fahrzeug {
    void starte() { /* ... */ }
}
```

### Interface

An **interface** defines a **contract** (method signatures) without implementation. A class can implement **several** interfaces (multiple inheritance of types).

```java
interface Zahlbar { double betrag(); }
class Rechnung implements Zahlbar {
    public double betrag() { return 100.0; }
}
```

### Abstract Class vs. Interface

| | Abstract class | Interface |
|--|----------------|-----------|
| Instantiable | no | no |
| Attributes | yes (state) | only constants |
| Methods | concrete + abstract | signatures (+ default) |
| Constructor | yes | no |
| Multiple use | only **one** superclass | **several** implementable |
| Use | shared base + code | pure capability contract |

> **Rule of thumb:** "is-a" with shared code → abstract class; "can-do"/capability → interface.

### Generics

**Generics** parameterise types and create **type safety** without casts.

```java
class Box<T> { private T inhalt; void set(T x){inhalt=x;} T get(){return inhalt;} }
Box<String> b = new Box<>();   // nur Strings, kein Cast nötig
```

Without generics you would have to work with `Object` + manual casts (error-prone). With generics: more flexible, safer, reusable.

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Abstract class** | Not instantiable; concrete + abstract methods |
| **Interface** | Contract without implementation; multiple-implementable |
| **Generics** | Type parameters for type safety (`<T>`) |

---

## Exam Tips

- **Abstract class vs. interface** (the table!) – a perennial favourite: one superclass vs. several interfaces; attributes/constructor only in an abstract class.
- Generics = **type safety without a cast**.
- "is-a + code" → abstract class; "capability" → interface.

---

## Practice Exercise

**Task:** (1) For "all shapes have a `flaeche()`", decide between an abstract class and an interface and justify it. (2) Why is `List<String>` safer than a list of `Object`?

---

## Cross-References

- [06-02-03 Object Orientation (OOP)](./06-02-03-oop.md)
- [06-05-04 Factory](../06-05-muster/06-05-04-factory.md)
