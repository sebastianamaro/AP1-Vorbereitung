# Network Diagram Technique

## Learning Objectives

After this chapter, you should be able to:
- Understand the structure of a network diagram
- Calculate ES, EF, LS, LF
- Calculate total float and free float
- Determine the critical path

---

## Core Content

### What is a Network Diagram?

The **network diagram** is a graphical method for representing project schedules and their temporal dependencies. It enables the calculation of buffer times and the identification of the critical path.

> **IMPORTANT for the exam:** Network diagram technique is one of the most frequently tested topics!

---

### Structure of an Activity Node

```
+----------------------------------+
|   ES                       EF    |
| +------------+----------------+  |
| | Activity   |  Description   |  |
| +------------+------+---------+  |
| |  Duration  |  TF  |   FF    |  |
| +------------+------+---------+  |
|   LS                       LF    |
+----------------------------------+
```

---

### Terms and Abbreviations

| Abbrev. | Term | Explanation |
|---------|------|-------------|
| **ES** | Early Start | Earliest possible start time |
| **EF** | Early Finish | Earliest possible finish time |
| **LS** | Late Start | Latest start time without delaying project |
| **LF** | Late Finish | Latest finish time without delaying project |
| **TF** | Total Float | Time reserve without delaying project |
| **FF** | Free Float | Time reserve without affecting successor |
| **Duration** | Activity Duration | Time for the activity in time units |

---

### Calculation Formulas

#### Forward Pass (ES and EF)

**Start:** ES of first activity = 0 (or 1, depending on convention)

```
EF = ES + Duration
ES (Successor) = max(EF of all predecessors)
```

#### Backward Pass (LS and LF)

**Start:** LF of last activity = EF of last activity

```
LS = LF - Duration
LF (Predecessor) = min(LS of all successors)
```

#### Float Calculation

```
Total Float (TF) = LS - ES = LF - EF
Free Float (FF) = ES (Successor) - EF (current activity)
```

---

### The Critical Path

The **critical path** is the longest path through the network diagram. It determines the **minimum project duration**.

**Properties:**
- Activities on the critical path have **TF = 0**
- Any delay on the critical path delays the entire project
- There can be multiple critical paths

---

### Example Calculation

**Activity List:**

| Activity | Duration | Predecessors |
|----------|----------|--------------|
| A | 3 | - |
| B | 4 | A |
| C | 2 | A |
| D | 5 | B, C |

**Step 1: Forward Pass**

```
Activity A: ES=0, EF=0+3=3
Activity B: ES=3, EF=3+4=7
Activity C: ES=3, EF=3+2=5
Activity D: ES=max(7,5)=7, EF=7+5=12
```

**Project Duration: 12 time units**

**Step 2: Backward Pass**

```
Activity D: LF=12, LS=12-5=7
Activity B: LF=7, LS=7-4=3
Activity C: LF=7, LS=7-2=5
Activity A: LF=min(3,5)=3, LS=3-3=0
```

**Step 3: Float Calculation**

| Activity | TF (LS-ES) | Critical? |
|----------|------------|-----------|
| A | 0-0=0 | YES |
| B | 3-3=0 | YES |
| C | 5-3=2 | NO |
| D | 7-7=0 | YES |

**Critical Path: A -> B -> D**

---

### Graphical Representation

```
        +------------------+
        |  0          3    |
        | +----+---------+ |
        | | A  | Analysis| |
        | +----+----+----+ |
        | | 3  | 0  | 0  | |
        | +----+----+----+ |
        |  0          3    |
        +---------+--------+
                  |
         +--------+--------+
         v                 v
+------------------+  +------------------+
|  3          7    |  |  3          5    |
| +----+---------+ |  | +----+---------+ |
| | B  | Planning| |  | | C  | Design  | |
| +----+----+----+ |  | +----+----+----+ |
| | 4  | 0  | 0  | |  | | 2  | 2  | 2  | |
| +----+----+----+ |  | +----+----+----+ |
|  3          7    |  |  5          7    |
+---------+--------+  +---------+--------+
          |                     |
          +---------+-----------+
                    v
        +------------------+
        |  7         12    |
        | +----+---------+ |
        | | D  | Module  | |
        | +----+----+----+ |
        | | 5  | 0  | 0  | |
        | +----+----+----+ |
        |  7         12    |
        +------------------+
```

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Network Diagram** | Graphical representation of project schedules with dependencies |
| **Critical Path** | Longest path through the project, determines minimum duration |
| **Float** | Time reserve by which an activity can be delayed |
| **Forward Pass** | Calculation of ES and EF from start to end |
| **Backward Pass** | Calculation of LS and LF from end to start |

---

## Exam Tips

### Typical Task Types
1. Calculate ES, EF, LS, LF
2. Calculate total float
3. Determine critical path
4. Determine project duration
5. Draw network diagram

### Avoid Common Mistakes
- With multiple predecessors: Take **maximum** for ES
- With multiple successors: Take **minimum** for LF
- TF = 0 means: Activity is critical!
- Always document calculation steps

---

## Practice Exercises

### Exercise 1
Calculate ES, EF, LS, LF, and TF for all activities:

| Activity | Duration | Predecessors |
|----------|----------|--------------|
| A | 2 | - |
| B | 3 | A |
| C | 4 | A |
| D | 1 | B, C |

**Solution:**

| Activity | ES | EF | LS | LF | TF |
|----------|-----|-----|-----|-----|-----|
| A | 0 | 2 | 0 | 2 | 0 |
| B | 2 | 5 | 3 | 6 | 1 |
| C | 2 | 6 | 2 | 6 | 0 |
| D | 6 | 7 | 6 | 7 | 0 |

Critical Path: A -> C -> D
Project Duration: 7 time units

### Exercise 2
What does a total float of 0 mean?

**Solution:** The activity lies on the critical path. Any delay of this activity delays the entire project.

---

## Cross-References

- [01-02-01 Gantt Chart](./01-02-01-gantt-chart.md) - Temporal representation
- [01-01-02 Project Phases](../01-01-fundamentals/01-01-02-project-phases.md) - Project planning
- [08-02-03 Utility Analysis](../../08-business-processes/08-02-economics/08-02-03-utility-analysis.md) - Another frequent exam topic
