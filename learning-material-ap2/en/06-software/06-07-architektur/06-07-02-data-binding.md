# Data Binding

## Learning Objectives

After this chapter you should:
- Explain data binding
- Distinguish one-way and two-way binding

---

## Core Content

**Data binding** describes the **connection between UI components and the data model**: changes to the data are reflected automatically in the interface (and possibly vice versa).

| Type | Direction | Example |
|-----|----------|----------|
| **One-Way** | model → UI | React (`props`) |
| **Two-Way** | model ⇄ UI | Angular, Vue (`v-model`) |

```jsx
// One-Way (React): Daten fließen ins UI
function Welcome(props) { return <h1>Hallo, {props.name}</h1>; }
```

```html
<!-- Two-Way (Vue): UI-Eingabe aktualisiert das Modell und zurück -->
<input v-model="benutzername">
<p>Hallo, {{ benutzername }}</p>
```

- **One-Way:** predictable data flow (easier to follow/debug).
- **Two-Way:** convenient for forms (UI and model stay in sync).

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **Data Binding** | Coupling of UI and data model |
| **One-Way** | Only model → UI |
| **Two-Way** | Model ⇄ UI (bidirectional) |

---

## Exam Tips

- Distinguish **one-way vs. two-way** (direction + one framework example each).
- Two-Way = typical for **forms**; One-Way = clear data flow.

---

## Practice Exercise

**Task:** Using an input field, explain the difference between one-way and two-way binding.

---

## Cross-References

- [06-07-01 Layered Architecture](./06-07-01-schichtenarchitektur.md)
- [06-06-02 GUI Design](../06-06-qualitaet-ux/06-06-02-gui-design.md)
