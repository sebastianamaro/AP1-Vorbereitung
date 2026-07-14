# Layered Architecture (3-Tier)

## Learning Objectives

After this chapter you should:
- Name the three layers of a classic application
- Assign tasks and typical technologies to each layer
- Explain the benefit of the separation

---

## Core Content

The **3-tier architecture** (Three-Tier) separates an application into clearly delimited layers:

| Layer | Task | Typical technologies |
|---------|---------|-----------------------|
| **Presentation layer** | user interface, input/output | HTML/CSS/JS, React, Angular |
| **Logic layer** (business logic) | processing, rules | Java, C#, Node.js, Python |
| **Data layer** | storage/access | MySQL, PostgreSQL |

```
[ Präsentation ]  ⇄  [ Logik ]  ⇄  [ Datenhaltung ]
   (Client/UI)        (Server)        (Datenbank)
```

### Benefit

- **Separation of Concerns**
- **Interchangeability** (e.g. swap the UI without changing the logic)
- **Maintainability & testability**, parallel development
- **Scalability** (layers scalable separately)

> Related: the **MVC** pattern separates Model/View/Controller within the application
> (see [06-05-01](../06-05-muster/06-05-01-mvc.md)).

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **Presentation/logic/data layer** | UI / processing / storage |
| **Three-Tier** | 3-tier architecture |
| **Separation of Concerns** | Separation of responsibilities |

---

## Exam Tips

- Have the **three layers + one task/technology each** ready.
- Name the benefit of the separation (interchangeability, maintainability).
- Delineation from MVC (an architectural pattern within the application).

---

## Practice Exercise

**Task:** For an online shop, assign concrete building blocks (React frontend, Java service, PostgreSQL) to the three layers and name two advantages of the separation.

---

## Cross-References

- [06-07-04 REST](./06-07-04-rest.md)
- [06-05-01 MVC](../06-05-muster/06-05-01-mvc.md)
