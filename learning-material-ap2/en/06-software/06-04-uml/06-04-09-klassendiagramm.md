# Class Diagram (Klassendiagramm)

## Learning Objectives

After this chapter you should:
- Represent classes with attributes, methods and visibilities
- Model relationships (association, aggregation, composition, Vererbung / inheritance) with multiplicities
- Create a class diagram from a description

---

## Core Content

The **class diagram** (structure diagram) is the **central UML diagram** of OOP. It shows classes, their features and relationships.

### Structure of a class

```
┌────────────────────┐
│      Konto         │   ← class name
├────────────────────┤
│ - kontonummer:int  │   ← attributes (with visibility)
│ - saldo:double     │
├────────────────────┤
│ + einzahlen(b:double)│  ← methods
│ + abheben(b:double)  │
└────────────────────┘
```

**Visibilities:** `+` public, `-` private, `#` protected, `~` package.

### Relationships

| Relationship | Symbol | Meaning |
|-----------|--------|-----------|
| **Association** | line | "knows a" |
| **Aggregation** | empty diamond | "has a" (part can exist on its own) |
| **Composition** | filled diamond | "consists of" (part dies with the whole) |
| **Generalization/Vererbung (inheritance)** | arrow with hollow tip | "is a" |
| **Dependency** | dashed arrow | "uses" |

**Diagram examples:**

![Association (customer – order)](../../../assets/diagrams/uml_class_association.png)

![Aggregation (order ◇ product)](../../../assets/diagrams/uml_class_aggregation.png)

![Composition (invoice ◆ invoice line item)](../../../assets/diagrams/uml_class_composition.png)

![Inheritance / Vererbung (customer ← private/corporate customer)](../../../assets/diagrams/uml_class_vererbung.png)

<!-- Image source: ap2.online (placeholder — replace with own graphic before publication, see assets/diagrams/README.md) -->

### Multiplicities

`1`, `0..1`, `*` (many), `1..*` (at least one). Example: `Kunde 1 ──── * Bestellung` (one customer has many orders).

```
Person ◄─────────△ Kunde        (Vererbung / inheritance: Kunde is a Person)
Bestellung ◆──── Bestellposition (composition)
```

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **Visibility (Sichtbarkeit)** | +/-/#/~ (public/private/protected/package) |
| **Aggregation vs. composition** | loose (empty diamond) vs. existence-dependent (filled diamond) |
| **Multiplicity (Multiplizität)** | Number of involved objects (1, *, 0..1, 1..*) |

---

## Exam Tips

- **Aggregation (empty diamond) vs. composition (filled diamond)** – a classic.
- Enter visibilities and multiplicities correctly.
- Close connection to **OOP** ([06-02-03](../06-02-programmierung/06-02-03-oop.md)) and to the **ER model** (DB).

---

## Practice Exercise

**Task:** Model a class diagram for `Kunde`, `Bestellung`, `Bestellposition`, `Artikel` with visibilities, multiplicities and suitable relationships (including one composition).

---

## Cross-References

- [06-02-03 Object orientation (OOP)](../06-02-programmierung/06-02-03-oop.md)
- [06-03-02 ER model](../06-03-datenbanken/06-03-02-er-modell.md)
