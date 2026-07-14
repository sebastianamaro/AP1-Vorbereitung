# Factory Pattern

## Learning Objectives

After this chapter you should:
- Explain the purpose of the Factory pattern
- Distinguish direct instantiation from creation via a factory
- Name the advantages (interchangeability, extensibility)

---

## Core Content

The **Factory pattern** (creational pattern) **encapsulates object creation** in a central method/class. The client asks the factory for an object instead of creating it itself with `new` – it does not need to know the concrete class.

### Advantages

| Advantage | Meaning |
|---------|-----------|
| **Central object creation** | Creation in one place |
| **Uniform interface** | Client uses only the common supertype |
| **Interchangeability** | concrete class easily swappable |
| **Extensibility** | new types without changing the client code |

### Example (Java)

```java
abstract class Fahrzeug { abstract void fahre(); }
class Auto extends Fahrzeug { void fahre() { /* ... */ } }
class Motorrad extends Fahrzeug { void fahre() { /* ... */ } }

class FahrzeugFabrik {
    static Fahrzeug erstelle(String typ) {
        return switch (typ) {
            case "auto" -> new Auto();
            case "motorrad" -> new Motorrad();
            default -> throw new IllegalArgumentException(typ);
        };
    }
}

// Client kennt nur den Obertyp Fahrzeug:
Fahrzeug f = FahrzeugFabrik.erstelle("auto");
f.fahre();
```

> **Analogy:** You *order* an object – like in the pizzeria: you say *what* you want, not *how* it is built.

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **Factory** | Encapsulates object creation behind a method |
| **Polymorphism** | Client works with the common supertype |
| **Interchangeability** | Concrete class swappable without client change |

---

## Exam Tips

- Classification: **creational pattern**.
- Core: **encapsulate creation**, client only knows the supertype → uses **polymorphism**.
- Emphasize the advantage of **extensibility** (new class without client change).

---

## Practice Exercise

**Task:** Design a `FormFabrik` that, depending on a parameter, creates `Kreis` or `Rechteck` (both inherit from `Form`), and show the client usage via the supertype `Form`.

---

## Cross-References

- [06-05-03 Singleton](./06-05-03-singleton.md)
- [06-02-03 Object orientation (OOP)](../06-02-programmierung/06-02-03-oop.md)
