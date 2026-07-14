# Netzplan (network diagram) and Gantt Chart

## Learning Objectives

After this chapter you should be able to:
- Create a Netzplan (network diagram) with forward and backward calculation
- Calculate FAZ, FEZ, SAZ, SEZ and buffer (Puffer)
- Determine the **kritischer Pfad** (critical path)
- Know the difference from the Gantt chart

---

## Core Content

### Netzplan (network diagram) – Structure of a Node

In the common **Vorgangsknoten** (activity-on-node) representation, each node contains:

```
┌───────────────────────────────┐
│ FAZ │   Dauer (D)  │   FEZ     │
├─────┼──────────────┼───────────┤
│     │  Vorgang     │           │
├─────┼──────────────┼───────────┤
│ SAZ │   GP  │  FP  │   SEZ     │
└───────────────────────────────┘
```

- **FAZ** – earliest start time (Frühester Anfangszeitpunkt)
- **FEZ** – earliest finish time (Frühester Endzeitpunkt) = FAZ + duration
- **SAZ** – latest start time (Spätester Anfangszeitpunkt) = SEZ − duration
- **SEZ** – latest finish time (Spätester Endzeitpunkt)
- **GP** – total buffer (Gesamtpuffer) = SAZ − FAZ (= SEZ − FEZ)
- **FP** – free buffer (Freier Puffer)

### Forward Calculation (FAZ/FEZ)

From front to back: `FAZ = largest FEZ of all predecessors` (start = 0), `FEZ = FAZ + duration`.

### Backward Calculation (SAZ/SEZ)

From back to front: `SEZ = smallest SAZ of all successors` (end = FEZ of the last activity), `SAZ = SEZ − duration`.

### Kritischer Pfad (critical path)

The **kritischer Pfad** (critical path) runs through all activities with a **total buffer GP = 0**. A delay there delays the **entire project**. It is the **longest** path through the Netzplan and determines the **project duration**.

### Small Calculation Example

| Activity | Duration | Predecessor |
|---------|-------|-----------|
| A | 3 | – |
| B | 4 | A |
| C | 2 | A |
| D | 5 | B, C |

**Forward:** A: FAZ 0, FEZ 3 · B: FAZ 3, FEZ 7 · C: FAZ 3, FEZ 5 · D: FAZ 7 (max(7,5)), FEZ 12.
**Backward:** D: SEZ 12, SAZ 7 · C: SEZ 7, SAZ 5 · B: SEZ 7, SAZ 3 · A: SEZ 3, SAZ 0.
**Buffer:** GP(C) = 5 − 3 = **2**; all others GP = 0.
**Kritischer Pfad (critical path):** A → B → D (GP = 0), **project duration 12**.

### Gantt Chart

The **Gantt chart** (bar chart) represents activities as bars on a time axis – illustrative for duration, parallelism and dependencies, but without the explicit buffer/path calculation of the Netzplan.

```
A ████
B     ██████
C     ████
D            ██████████
  └──┴──┴──┴──┴──┴──> Time
```

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **FAZ/FEZ** | Earliest start/finish (forward calculation) |
| **SAZ/SEZ** | Latest start/finish (backward calculation) |
| **Gesamtpuffer (GP)** (total buffer) | SAZ − FAZ; reserve without project delay |
| **Kritischer Pfad** (critical path) | Path with GP = 0; determines the project duration |

---

## Exam Tips

- **Netzpläne (network diagrams) are tested often and are worth many points.** Practice forward/backward calculation until it is second nature.
- With multiple predecessors: **FAZ = maximum** of the predecessors' FEZ. With multiple successors: **SEZ = minimum** of the successors' SAZ.
- Critical path = all nodes with **GP = 0**; it is at the same time the **longest** path.
- Mark the critical path **clearly** in the task (e.g. thick/red arrows).

---

## Practice Exercise

**Task (based on ConSystem GmbH):** Given is a software project with the phases planning, installation of the development software, design, implementation, testing, customer and test documentation, handover (with durations and predecessors per the book). Create a Netzplan **and** a Gantt chart and mark the critical path. *(Full solution in the book, solutions section.)*

---

## Cross-References

- [01-01 Fundamentals](./01-01-grundlagen.md)
- [01-05 SCRUM and KANBAN](./01-05-scrum-kanban.md)
