# Data Encapsulation & Visibility

## Learning Objectives

After this chapter you should be able to:
- Explain data encapsulation and its benefits
- Apply the four visibilities/access modifiers
- Use getters/setters with validation

---

## Core Content

**Data encapsulation** (German: *Kapselung*) hides the internal data of a class and only allows access via defined methods. Attributes are `private`, and access goes through **getters/setters**. Benefits: **data integrity**, **maintainability**, **controlled access** (validation/logic).

### Access Modifiers (Visibility)

| Modifier | Symbol (UML) | Visible in |
|----------|--------------|------------|
| **public** | `+` | everywhere |
| **protected** | `#` | class + subclasses (+ package) |
| **(package-private)** | `~` | same package |
| **private** | `-` | only within the class |

> **Rule of thumb:** attributes `private`, methods as restrictive as possible (Least Privilege).

### Getters/Setters with Validation

```java
public class Konto {
    private double kontostand;              // gekapselt

    public double getKontostand() {         // Getter
        return kontostand;
    }
    public void einzahlen(double betrag) {  // Setter mit Regel
        if (betrag <= 0) return;            // ungültige Eingabe abweisen
        kontostand += betrag;
    }
}
```

Counterexample (bad): `public double kontostand;` – anyone can set the value directly (even negative) → no control.

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Encapsulation** (*Kapselung*) | Hiding attributes, access via methods |
| **public/protected/private** | Access levels |
| **Getter/Setter** | Read/write methods, often with validation |

---

## Exam Tips

- Know the **four visibilities** and their UML symbols (`+ # ~ -`).
- **Encapsulation** is explicitly named in the catalogue – be able to state the benefits (integrity, control).
- Setter with **validation** as a typical example.

---

## Practice Exercise

**Task:** Encapsulate a class `Produkt` with a `private preis` and a setter that rejects negative prices. State the appropriate visibilities.

---

## Cross-References

- [06-02-03 Object Orientation (OOP)](./06-02-03-oop.md)
- [06-04-09 Class Diagram](../06-04-uml/06-04-09-klassendiagramm.md)
