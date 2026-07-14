# Package Diagram (Paketdiagramm)

## Learning Objectives

After this chapter you should:
- Know the purpose of a package diagram
- Represent packages and dependencies

---

## Core Content

The **package diagram** (structure diagram) groups model elements (e.g. classes) into **packages** and shows their **dependencies**. It provides an overview of the **architecture/structure** of large systems.

### Elements

| Element | Representation |
|---------|-------------|
| **Package** | folder symbol (tab at the top left) |
| **Dependency** | dashed arrow (`--->`) from the dependent to the used package |
| **Nesting** | packages can contain packages |

```
┌──────────┐        ┌──────────┐
│ UI       │┈┈┈┈┈┈►│ Service  │
└──────────┘        └────┬─────┘
                         ┊ (uses)
                    ┌────▼─────┐
                    │ Data     │
                    └──────────┘
```

Goal: **loose coupling** – as few, clear dependencies as possible (no cycles).

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **Package (Paket)** | Grouping of related elements |
| **Dependency** | "uses/needs" relationship between packages |
| **Loose coupling** | Few, directed dependencies |

---

## Exam Tips

- Package diagram = **structure diagram** (architecture overview).
- The dependency arrow points **from the dependent to the used** package.
- Cyclic dependencies are considered bad design.

---

## Practice Exercise

**Task:** Structure an application into the packages UI, Service and Data and draw the dependencies (UI → Service → Data).

---

## Cross-References

- [06-04-09 Class Diagram (Klassendiagramm)](./06-04-09-klassendiagramm.md)
- [06-05-01 MVC](../06-05-muster/06-05-01-mvc.md)
