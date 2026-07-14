# Software Development Models (Process Models)

## Learning Objectives

After this chapter you should be able to:
- Distinguish conventional (sequential) and agile approaches
- Classify the most important models and name their advantages/disadvantages
- Select suitable models for project situations

---

## Core Content

### Two Basic Categories

| Conventional (sequential) | Agile (flexible) |
|-----------------------------|-----------------|
| Phases run one after another, requirements fixed early | iterative-incremental, requirements evolve |
| Waterfall model, V-model, spiral model | Scrum, Kanban, Extreme Programming (XP), Test-Driven Development (TDD) |

Further classification: models can be more of a **development method** (concrete procedure) or a **development philosophy** (basic attitude, e.g. "agile"). Examples: **RUP** (Rational Unified Process), **AUP** (Agile Unified Process), **MDSD** (Model-Driven Software Development), **CMM/CMMI** (maturity model).

### The Most Important Models

- **Waterfall model:** strictly sequential (analysis → design → implementation → test → operation). Simple, but inflexible with late changes.
- **V-model:** like waterfall, but each development phase is matched by a **test level** (e.g. unit test ↔ detailed design). Emphasizes quality assurance.
- **Spiral model:** iterative with **risk analysis** per cycle. Good for large, high-risk projects.
- **Prototyping:** early runnable prototypes to clarify requirements.
- **Scrum:** agile framework with sprints (see [01-05](./01-05-scrum-kanban.md)).
- **Extreme Programming (XP):** agile practices such as pair programming, TDD, continuous integration.
- **Test-Driven Development (TDD):** write the test first, then the code.
- **Kanban:** flow control with WIP limits (see [01-05](./01-05-scrum-kanban.md)).

### Selection Criteria

| Situation | more suitable |
|-----------|---------------|
| Requirements clear & stable, fixed price | conventional (waterfall/V-model) |
| Requirements unclear/changeable | agile (Scrum, XP) |
| High risk, large projects | spiral model |
| Continuous operation/support | Kanban |

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **Sequential** | Phases run one after another, requirements fixed early |
| **Iterative-incremental** | Repeated cycles, gradual expansion |
| **V-model** | Sequential with juxtaposed test levels |
| **Maturity model (CMMI)** | Assessment of an organization's process maturity |

---

## Exam Tips

- The **matching task** is typical: sort models into *conventional* vs. *agile* (waterfall/V-model/spiral = conventional; Scrum/Kanban/XP/TDD = agile).
- V-model = **test juxtaposition** (characteristic!), spiral model = **risk per cycle**.
- Be able to name **one advantage and one disadvantage** for each model.

---

## Practice Exercise

**Task (based on ConSystem GmbH):** Sort – *Extreme Programming, waterfall model, V-model, prototyping, RUP, Scrum, spiral model, AUP, TDD, Kanban, MDSD, CMM* – into conventional vs. agile.

<details>
<summary>Solution</summary>

- **Conventional/sequential:** waterfall model, V-model, spiral model (classic)
- **Agile:** Scrum, Kanban, XP, TDD, AUP
- **Cross-cutting/methodology:** prototyping, RUP, MDSD, CMM (maturity model)

</details>

---

## Cross-References

- [01-05 SCRUM and KANBAN](./01-05-scrum-kanban.md)
- [02 Quality Management](../02-quality-management/02-00-overview.md)
