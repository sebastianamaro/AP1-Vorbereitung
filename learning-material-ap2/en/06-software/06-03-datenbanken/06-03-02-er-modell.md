# ER Model (Entity-Relationship Model)

## Learning Objectives

After this chapter you should be able to:
- Model entities, attributes and relationships
- Specify cardinalities
- Convert an ER model into tables

---

## Core Content

### Building Blocks

| Element | Representation | Example |
|---------|----------------|---------|
| **Entity (type)** | Rectangle | Kunde, Artikel |
| **Attribute** | Ellipse | Name, Preis |
| **Key attribute** | underlined attribute | KundenID |
| **Relationship** | Diamond | "kauft", "gehört zu" |

### Cardinalities

Specify **how many** entities relate to one another in a relationship:

| Type | Meaning | Example |
|------|---------|---------|
| **1:1** | exactly one to one | Person ↔ Personalausweis |
| **1:n** | one to many | Kategorie → Artikel |
| **n:m** | many to many | Student ↔ Kurs |

(The (min,max) notation is also common, e.g. (0,n).)

**Diagram examples:**

![1:1 relationship (Person ↔ Ausweis)](../../../assets/diagrams/erd_1_1.png)

![1:n relationship (Kunde → Bestellungen)](../../../assets/diagrams/erd_1_n.png)

![m:n relationship with junction table (Student ↔ Kurs)](../../../assets/diagrams/erd_m_n.png)

<!-- Image source: ap2.online (used with permission) -->

### Conversion into the Relational Model

- **1:n** → foreign key on the "n" side (the n-table gets the key of the 1-side).
- **n:m** → **junction table (link table)** with two foreign keys (n:m does not exist directly in relational DBs!).
- **1:1** → foreign key on one side (often with UNIQUE).

```
Kategorie (1) ────< gehört zu >──── (n) Artikel
   ⇒ Artikel.KategorieID  (FOREIGN KEY)
```

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Entity** | Object of the real world (table) |
| **Cardinality** | Count relationship (1:1, 1:n, n:m) |
| **Junction table** | Resolves n:m into two 1:n |
| **Key attribute** | Unique identification feature |

---

## Exam Tips

- **n:m is resolved via a junction table** – a standard task.
- With 1:n, place the foreign key **on the n-side**.
- Be able to draw the ER model **and** convert it into tables (with keys).

---

## Practice Exercise

**Task (based on ConSystem GmbH):** Model an ER model for "Kunde bestellt Artikel" with cardinalities and convert the n:m relationship into relational tables.

<details>
<summary>Solution hint</summary>

Kunde (1) —< Bestellung >— (n) … and Bestellung contains Artikel (n:m) → junction table `Bestellposition (BestellID, ArtikelID, Menge)`.

</details>

---

## Example Diagram

![Complete ER model (example: car rental)](../../../assets/diagrams/erd_aufgabe.png)

<!-- Image source: ap2.online (used with permission) -->

---

## Cross-References

- [06-03-03 Normalisation](./06-03-03-normalisierung.md)
- [06-03-01 SQL Script](./06-03-01-sql-skript.md)
