# Activity Diagram (Aktivitätsdiagramm)

## Learning Objectives

After this chapter you should:
- Know the elements of an activity diagram
- Represent branches and parallelism (fork/join)
- Convert a flowchart into an activity diagram

---

## Core Content

The **activity diagram** (behavior diagram) represents **processes/flows** – similar to a flowchart, but with UML notation and support for parallelism.

### Elements

| Element | Representation |
|---------|-------------|
| **Start node** | filled circle |
| **End node** | circle with a ring |
| **Action** | rounded rectangle |
| **Decision/merge** | **diamond** (with conditions `[...]`) |
| **Fork/Join (parallelism)** | thick bar (split/merge) |
| **Swimlane (partition)** | column per responsible party/role |

```
 ● → [check request] → ◇ [valid?] ──yes──► [process] → ⊗
                          └───no──► [reject] ──────────┘
```

- **Decision (diamond):** one entry, several conditional exits `[yes]/[no]`.
- **Fork/Join (bar):** several actions run **in parallel** and are merged again.
- **Swimlanes:** assign actions to the executing roles/departments.

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **Decision node (Entscheidungsknoten)** | Diamond with conditional exits |
| **Fork/Join** | Split/merge of parallel flows |
| **Swimlane** | Assignment of actions to roles |

---

## Exam Tips

- **Diamond = decision** (conditional branch), **bar = parallelism** – do not confuse them.
- Activity diagrams are **newly emphasized** in the updated catalog.
- Typical task: convert a **flowchart into an activity diagram**.

---

## Practice Exercise

**Task (after ConSystem GmbH):** Convert the given flowchart for the process "customer training" into a UML activity diagram (with decisions and, if applicable, swimlanes).

---

## Example Diagram

![Activity diagram (example solution)](../../../assets/diagrams/uml_activity_aufgabe.png)

<!-- Bildquelle: ap2.online (mit Genehmigung) -->

---

## Cross-References

- [06-04-06 State Diagram (Zustandsdiagramm)](./06-04-06-zustandsdiagramm.md)
- [06-04-03 Sequence Diagram (Sequenzdiagramm)](./06-04-03-sequenzdiagramm.md)
