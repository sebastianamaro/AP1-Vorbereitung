# Gantt Chart

## Learning Objectives

After this chapter, you should be able to:
- Understand the structure of a Gantt chart
- Read and interpret a Gantt chart
- Recognize the critical path in a Gantt chart
- Create simple Gantt charts yourself

---

## Core Content

### What is a Gantt Chart?

The **Gantt chart** (also bar chart) is a tool for graphically representing project schedules. It shows activities as horizontal bars on a timeline.

**Named after:** Henry Laurence Gantt (1861-1919), American engineer

---

### Structure of a Gantt Chart

```
Activity       | Week 1 | Week 2 | Week 3 | Week 4 | Week 5 | Week 6
---------------|--------|--------|--------|--------|--------|--------
A: Analysis    | ####   |        |        |        |        |
B: Planning    |        | ############    |        |        |
C: Design 1    |        | ##########      |        |        |
D: Module 1    |        |        |        | ####################
E: Design 2    |        |        | ############    |        |
F: Module 2    |        |        |        |        | ################
G: Test        |        |        | ##################|        |
H: Handover    |        |        |        |        |        | ######
```

**Elements:**
- **Vertical axis:** List of activities/work packages
- **Horizontal axis:** Timeline (days, weeks, months)
- **Bars:** Duration of individual activities
- **Dependencies:** Connection lines between bars (optional)

---

### Advantages of the Gantt Chart

| Advantage | Explanation |
|-----------|-------------|
| **Clarity** | Timeline visible at a glance |
| **Easy to understand** | No special training required |
| **Progress control** | Target-actual comparison possible |
| **Parallel activities** | Overlaps immediately visible |

### Disadvantages of the Gantt Chart

| Disadvantage | Explanation |
|--------------|-------------|
| **Dependencies** | Not as clear as in network diagram |
| **Complex projects** | Becomes unclear with many activities |
| **Critical path** | Not directly recognizable (additional marking needed) |

---

### The Critical Path in the Gantt Chart

The **critical path** is the sequence of activities that determines the total duration of the project. Activities on the critical path have **no buffer** - any delay extends the project.

**Marking in Gantt chart:**
- Often red marked bars
- Or special hatching

```
Activity       | Week 1 | Week 2 | Week 3 | Week 4 | Week 5 | Week 6
---------------|--------|--------|--------|--------|--------|--------
A: Analysis    | ####   |        |        |        |        |   <- CRITICAL
B: Planning    |        | ############    |        |        |   <- CRITICAL
D: Module 1    |        |        |        | #################### <- CRITICAL
F: Module 2    |        |        |        |        | ################ <- CRITICAL
H: Handover    |        |        |        |        |        | ###### <- CRITICAL
```

---

### Creating a Gantt Chart

**Step 1:** List activities with duration and predecessors

| Phase | Description | Duration | Predecessors |
|-------|-------------|----------|--------------|
| A | Analysis | 1 | - |
| B | Planning | 4 | A |
| C | Design 1 | 3 | A |
| D | Module 1 | 6 | C, B |
| E | Design 2 | 4 | B |
| F | Module 2 | 8 | E, D |
| G | Test | 5 | C |
| H | Handover | 3 | F, G |

**Step 2:** Draw timeline

**Step 3:** Draw bar for each activity
- Start: When all predecessors are completed
- Length: According to duration

**Step 4:** Mark critical path

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Gantt Chart** | Bar chart for displaying project schedules |
| **Activity** | Individual task/work package in the project |
| **Predecessor** | Activity that must be completed before the next can begin |
| **Critical Path** | Longest path through the project (determines total duration) |
| **Milestone** | Marked point in time (often shown as diamond) |

---

## Exam Tips

### What is Tested?
- Create Gantt chart from activity list
- Identify critical path
- Read project duration
- Recognize parallel activities

### Avoid Common Mistakes
- Pay attention to predecessor relationships!
- With multiple predecessors: Wait until ALL are finished
- Draw neatly (use ruler)

---

## Practice Exercises

### Exercise 1
Given the following activity list. Create a Gantt chart.

| Activity | Duration (Days) | Predecessors |
|----------|-----------------|--------------|
| A | 2 | - |
| B | 3 | A |
| C | 4 | A |
| D | 2 | B, C |

**Solution:**
```
Activity | Day 1 | Day 2 | Day 3 | Day 4 | Day 5 | Day 6 | Day 7 | Day 8
---------|-------|-------|-------|-------|-------|-------|-------|------
A        | ##########    |       |       |       |       |       |
B        |       | ##############|       |       |       |       |
C        |       | ########################      |       |       |
D        |       |       |       |       |       | ##########    |
```
Project duration: 8 days
Critical path: A -> C -> D

### Exercise 2
What is the difference between Gantt chart and network diagram?

**Solution:**
- Gantt chart: Temporal representation as bars, good for overview
- Network diagram: Shows dependencies and buffer times, better for calculations

---

## Cross-References

- [01-02-02 Network Diagram](./01-02-02-network-plan.md) - Alternative representation with buffer calculation
- [01-01-02 Project Phases](../01-01-fundamentals/01-01-02-project-phases.md) - Phases as activities
- [01-03-02 Scrum](../01-03-process-models/01-03-02-scrum.md) - Sprint planning
