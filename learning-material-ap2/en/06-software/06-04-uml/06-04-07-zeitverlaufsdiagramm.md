# Timing Diagram (Zeitverlaufsdiagramm)

## Learning Objectives

After this chapter you should:
- Know the purpose of the timing diagram
- Read off state changes over time

---

## Core Content

The **timing diagram** (Zeitverlaufsdiagramm, a behavior/interaction diagram) represents **state changes of objects along a time axis**. It is suitable when the **exact temporal behavior** is important (e.g. embedded/real-time systems, signal courses).

### Structure

- **Horizontal axis:** time
- **Vertical axis:** states (or values) of the object
- The course shows **when** an object takes on **which state**.

```
State
  active │      ┌───────┐
  waiting│──────┘       └───────
         └────────────────────────► Time
```

In comparison: the sequence diagram emphasizes the **order** of messages, the timing diagram the **exact point in time/duration** of states.

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **Time axis (Zeitachse)** | Horizontal axis (course over time) |
| **State course (Zustandsverlauf)** | Sequence of states over time |

---

## Exam Tips

- Classify it as an **interaction/behavior diagram** with a focus on **exact timing**.
- Distinguish it from the sequence diagram (order vs. point in time/duration).

---

## Practice Exercise

**Task:** Sketch, for an object with the states *waiting/active*, a timing course that shows two activation phases.

---

## Cross-References

- [06-04-06 State Diagram (Zustandsdiagramm)](./06-04-06-zustandsdiagramm.md)
- [06-04-03 Sequence Diagram (Sequenzdiagramm)](./06-04-03-sequenzdiagramm.md)
