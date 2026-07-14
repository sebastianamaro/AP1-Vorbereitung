# Observer (Beobachter-Muster)

## Learning Objectives

After this chapter you should:
- Explain the purpose and structure of the Observer pattern
- Describe Subject and Observer as well as the notification process

---

## Core Content

The **Observer pattern** (Beobachter) is a **behavioral pattern** (design pattern). It defines a **1:n dependency**: when one object (**Subject/Observable**) changes its state, all dependent objects (**Observers**) are **automatically notified** and updated.

### Structure

| Role | Task |
|-------|---------|
| **Subject (Observable)** | manages the Observers, reports changes (`notify()`) |
| **Observer** | registers with the Subject, reacts to notification (`update()`) |

```
Subject
 + register(o)          Observer «interface»
 + unregister(o)           + update()
 + notify() ─────────►        ▲
                              │ implements
                     ConcreteObserver
```

### Process (Publish-Subscribe)

1. Observers **register** with the Subject.
2. When the Subject changes its state, it calls `notify()`.
3. Every registered Observer receives `update()` and updates itself.

**Advantage:** loose coupling – the Subject only knows the Observer interface, not the concrete Observers. **Use:** among others in **MVC** (Model notifies Views), event systems, GUI.

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **Subject/Observable** | Observed object, reports changes |
| **Observer** | Observer, reacts to notifications |
| **Publish-Subscribe** | Registering + automatic notification |
| **Loose coupling** | Subject only knows the Observer interface |

---

## Exam Tips

- **1:n notification** is the core – one Subject, many Observers.
- Be able to name the connection with **MVC** (Model = Subject, Views = Observers).
- Know `register`/`unregister`/`notify` (Subject) and `update` (Observer).

---

## Practice Exercise

**Task:** Sketch the Observer pattern for a Model that automatically updates several Views on data change (class/sequence diagram).

---

## Cross-References

- [06-05-01 MVC](./06-05-01-mvc.md)
- [06-04-09 Class Diagram (Klassendiagramm)](../06-04-uml/06-04-09-klassendiagramm.md)
