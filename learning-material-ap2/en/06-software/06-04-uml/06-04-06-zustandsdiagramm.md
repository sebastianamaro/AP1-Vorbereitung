# State Diagram (Zustandsdiagramm)

## Learning Objectives

After this chapter you should:
- Represent states, transitions and events
- Use start/end states and conditions (guards)
- Model the behavior of an object/service

---

## Core Content

The **state diagram** (Zustandsdiagramm, a behavior diagram) shows the **states** of an object/system and the **transitions** between them, triggered by **events**.

### Elements

| Element | Representation |
|---------|-------------|
| **Start state** | filled circle |
| **End state** | circle with a ring |
| **State** | rounded rectangle (with name) |
| **Transition** | arrow with `event [condition] / action` |

```
 ● ─► [idle] ──request──► [processing] ──done──► [result] ─► ⊗
        ▲                     │
        └───────cancel────────┘
```

- **Transition** labeled with `event [guard] / action` (guard and action optional).
- An object is in **exactly one** state at any point in time.

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **State (Zustand)** | Situation in which an object finds itself |
| **Transition (Übergang)** | Change between states |
| **Event (Ereignis)** | Trigger of a transition |
| **Guard** | Condition under which a transition occurs |

---

## Exam Tips

- Label transitions correctly with **event [condition]**.
- Don't forget the start and end state.
- Typical task: create or complete a state diagram for a web service/process.

---

## Practice Exercise

**Task (after ConSystem GmbH):** Create a state diagram for a web service that performs statistical analyses (e.g. idle → processing → result, with the option to cancel).

---

## Cross-References

- [06-04-04 Activity Diagram (Aktivitätsdiagramm)](./06-04-04-aktivitaetsdiagramm.md)
- [06-04-07 Timing Diagram (Zeitverlaufsdiagramm)](./06-04-07-zeitverlaufsdiagramm.md)
