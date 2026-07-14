# Sequence Diagram (Sequenzdiagramm)

## Learning Objectives

After this chapter you should:
- Know the structure and elements of a sequence diagram
- Distinguish synchronous/asynchronous messages and returns
- Represent a process as a sequence diagram

---

## Core Content

The **sequence diagram** (behavior/interaction diagram) shows the **temporal sequence of messages** between objects. **Time runs from top to bottom.**

### Elements

| Element | Representation |
|---------|-------------|
| **Object/actor** | box at the top (`:Class` or `object:Class`) |
| **Lifeline (Lebenslinie)** | dashed vertical line |
| **Activation bar (Aktivierungsbalken)** | narrow rectangle (object is active) |
| **Synchronous message** | solid arrow, **filled** tip (waits for a reply) |
| **Asynchronous message** | solid arrow, **open** tip |
| **Return** | dashed arrow |

```
:Client        :Service       :Datenbank
   │  anfrage()   │              │
   ├─────────────►│  query()     │
   │              ├─────────────►│
   │              │◄─ ─ ─ ergebnis
   │◄─ ─ ─ antwort│              │
```

Extensions: **fragments** like `alt` (alternative), `opt` (optional), `loop`.

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **Lebenslinie (lifeline)** | Existence of an object over time |
| **Aktivierungsbalken (activation bar)** | Period during which an object is active |
| **Synchronous/Asynchronous** | With/without waiting for a reply |
| **Fragment (alt/opt/loop)** | Control structures in the diagram |

---

## Exam Tips

- **Time = vertical (top→bottom)** – frequently asked.
- Distinguish **synchronous (filled tip) vs. asynchronous (open tip)**.
- Typical task: add missing messages/returns (e.g. for a database access).

---

## Practice Exercise

**Task (after ConSystem GmbH):** In a sequence diagram for an updated database access, add the missing messages between client, service and database (including returns).

---

## Example Diagram

![Sequence diagram (example solution)](../../../assets/diagrams/uml_sequenz_aufgabe.png)

<!-- Bildquelle: ap2.online (mit Genehmigung) -->

---

## Cross-References

- [06-04-02 Use-Case Diagram (Anwendungsfalldiagramm)](./06-04-02-use-case-diagramm.md)
- [06-04-04 Activity Diagram (Aktivitätsdiagramm)](./06-04-04-aktivitaetsdiagramm.md)
