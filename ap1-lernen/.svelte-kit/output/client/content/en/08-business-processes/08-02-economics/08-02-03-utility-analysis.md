# Utility Analysis

## Learning Objectives

After this section, you will be able to:
- Explain the structure of a utility analysis
- Weight and evaluate criteria
- Conduct a complete utility analysis
- Interpret and justify the result

---

## Core Content

### What is a Utility Analysis?

A **Utility Analysis** (also called Scoring Model or Weighted Decision Matrix) is a systematic method for decision-making where various alternatives are evaluated based on weighted criteria.

**Areas of application:**
- Product selection (e.g., which laptop?)
- Supplier selection
- Software/system selection
- Location decisions

```
┌─────────────────────────────────────────────────────────────────────┐
│                    UTILITY ANALYSIS - OVERVIEW                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  STEP 1: Define criteria                                            │
│       ↓     (What is important?)                                    │
│                                                                      │
│  STEP 2: Weight criteria                                            │
│       ↓     (How important is each criterion? Sum = 100%)           │
│                                                                      │
│  STEP 3: Evaluate alternatives                                      │
│       ↓     (Assign points, e.g., 1-10)                             │
│                                                                      │
│  STEP 4: Calculate utility values                                   │
│       ↓     (Points x Weight)                                       │
│                                                                      │
│  STEP 5: Evaluate result                                            │
│             (Highest utility value = best alternative)              │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Structure of the Utility Analysis Table

```
┌─────────────────────────────────────────────────────────────────────┐
│                UTILITY ANALYSIS - BASIC STRUCTURE                    │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│                           │ Weight │ Alt. A  │ Alt. B  │ Alt. C    │
│  Criterion               │  (%)   │ P │ UV  │ P │ UV  │ P │ UV     │
│  ────────────────────────┼────────┼───┼─────┼───┼─────┼───┼──────  │
│  Criterion 1             │   30%  │   │     │   │     │   │        │
│  Criterion 2             │   25%  │   │     │   │     │   │        │
│  Criterion 3             │   20%  │   │     │   │     │   │        │
│  Criterion 4             │   15%  │   │     │   │     │   │        │
│  Criterion 5             │   10%  │   │     │   │     │   │        │
│  ────────────────────────┼────────┼───┼─────┼───┼─────┼───┼──────  │
│  TOTAL                   │  100%  │   │     │   │     │   │        │
│                                                                      │
│  P  = Points (e.g., 1-10)                                           │
│  UV = Utility Value (Points x Weight)                               │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Example: Laptop Selection

ConSystem GmbH wants to procure new laptops for employees. Three models are available.

```
┌─────────────────────────────────────────────────────────────────────┐
│          UTILITY ANALYSIS: LAPTOP SELECTION                          │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│                      │Weight│  Laptop A  │  Laptop B  │  Laptop C  │
│  Criterion          │  (%) │ P  │  UV   │ P  │  UV   │ P  │  UV   │
│  ───────────────────┼──────┼────┼───────┼────┼───────┼────┼──────  │
│  Price              │  30% │ 8  │ 2.40  │ 6  │ 1.80  │ 9  │ 2.70  │
│  Performance        │  25% │ 7  │ 1.75  │ 9  │ 2.25  │ 6  │ 1.50  │
│  Weight             │  20% │ 6  │ 1.20  │ 8  │ 1.60  │ 7  │ 1.40  │
│  Battery life       │  15% │ 9  │ 1.35  │ 7  │ 1.05  │ 8  │ 1.20  │
│  Service/Support    │  10% │ 7  │ 0.70  │ 8  │ 0.80  │ 5  │ 0.50  │
│  ───────────────────┼──────┼────┼───────┼────┼───────┼────┼──────  │
│  TOTAL              │ 100% │    │ 7.40  │    │ 7.50  │    │ 7.30  │
│                                                                      │
│  RESULT: Laptop B has the highest utility value (7.50)              │
│          → RECOMMENDATION: Laptop B                                  │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Calculation Example

For criterion "Price" with Laptop A:
- Points: 8
- Weight: 30% = 0.30
- **Utility Value = 8 x 0.30 = 2.40**

### Step-by-Step Guide

```
┌─────────────────────────────────────────────────────────────────────┐
│                    STEP 1: DEFINE CRITERIA                           │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Question: "What is important for the decision?"                    │
│                                                                      │
│  Typical criteria for IT procurement:                               │
│  → Price / Cost                                                     │
│  → Performance                                                      │
│  → Quality / Build quality                                          │
│  → Compatibility                                                    │
│  → Support / Service                                                │
│  → Sustainability                                                   │
│  → Delivery time                                                    │
│  → Expandability                                                    │
│                                                                      │
│  TIP: 4-6 criteria is optimal                                       │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                    STEP 2: WEIGHT CRITERIA                           │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Question: "How important is each criterion relative to others?"    │
│                                                                      │
│  IMPORTANT: The sum of all weights MUST equal 100%!                 │
│                                                                      │
│  Example:                                                           │
│  ├── Price:         30%  (very important)                           │
│  ├── Performance:   25%  (important)                                │
│  ├── Weight:        20%  (important)                                │
│  ├── Battery life:  15%  (moderately important)                     │
│  └── Support:       10%  (less important)                           │
│                    ─────                                             │
│                    100%                                              │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                    STEP 3: EVALUATE ALTERNATIVES                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Assign points (typical: scale 1-10)                                │
│                                                                      │
│  10 = excellent                                                     │
│   8 = good                                                          │
│   6 = satisfactory                                                  │
│   4 = adequate                                                      │
│   2 = poor                                                          │
│   0 = unacceptable                                                  │
│                                                                      │
│  For COSTS: Lower price = HIGHER score!                             │
│  (because lower price is good)                                      │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                    STEP 4: CALCULATE UTILITY VALUE                   │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Utility Value = Points x Weight                                    │
│                                                                      │
│  Calculate for each criterion and each alternative!                 │
│  Then add all utility values for one alternative.                   │
│                                                                      │
│  Example Laptop A:                                                  │
│  Price:        8 x 0.30 = 2.40                                      │
│  Performance:  7 x 0.25 = 1.75                                      │
│  Weight:       6 x 0.20 = 1.20                                      │
│  Battery:      9 x 0.15 = 1.35                                      │
│  Support:      7 x 0.10 = 0.70                                      │
│                         ─────                                        │
│  TOTAL:                  7.40                                        │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                    STEP 5: EVALUATE RESULT                           │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  The alternative with the HIGHEST total utility value               │
│  is the mathematically best choice.                                 │
│                                                                      │
│  BUT: The result is a recommendation, not absolute truth!           │
│                                                                      │
│  To verify:                                                         │
│  → Are the weights sensible?                                        │
│  → Are the evaluations objective?                                   │
│  → Are there knockout criteria (e.g., budget exceeded)?             │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Advantages and Limitations

| Advantages | Limitations |
|------------|-------------|
| Systematic decision | Weighting is subjective |
| Traceable/documented | Evaluation can be subjective |
| Comparability | Knockout criteria not considered |
| Qualitative + quantitative factors | Time-consuming with many alternatives |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Utility analysis** | Method for weighted evaluation of alternatives |
| **Criterion** | Decision-relevant characteristic |
| **Weight** | Relative importance of a criterion (in %) |
| **Point evaluation** | Rating of an alternative for a criterion |
| **Utility value** | Product of points and weight |
| **Knockout criterion** | Exclusion criterion that MUST be met |

---

## Exam Tips

1. **In almost EVERY exam!**
   - Utility analysis is an absolute exam favorite
   - Definitely practice, practice, practice!

2. **Important rules:**
   - Weights MUST equal 100%
   - For costs: Lower = HIGHER score
   - Utility value = Points x Weight (not add!)

3. **Avoid typical mistakes:**
   - Forgetting to add weights (must be 100%!)
   - Calculating utility value wrong (multiply, not add!)
   - Giving high points for expensive (it's the opposite!)

4. **Exam note:**
   - Often only part is given (e.g., weights)
   - Then assign points yourself and calculate

---

## Practice Exercises

### Exercise 1: Complete Calculation

Complete the utility analysis for server selection:

| Criterion | Weight | Server A (P) | Server A (UV) | Server B (P) | Server B (UV) |
|-----------|--------|--------------|---------------|--------------|---------------|
| Price | 35% | 7 | ? | 5 | ? |
| Performance | 30% | 8 | ? | 9 | ? |
| Energy efficiency | 20% | 6 | ? | 8 | ? |
| Support | 15% | 9 | ? | 7 | ? |
| **TOTAL** | 100% | | ? | | ? |

Which server should be chosen?

<details>
<summary>Show Solution</summary>

| Criterion | Weight | Server A (P) | Server A (UV) | Server B (P) | Server B (UV) |
|-----------|--------|--------------|---------------|--------------|---------------|
| Price | 35% | 7 | **2.45** | 5 | **1.75** |
| Performance | 30% | 8 | **2.40** | 9 | **2.70** |
| Energy efficiency | 20% | 6 | **1.20** | 8 | **1.60** |
| Support | 15% | 9 | **1.35** | 7 | **1.05** |
| **TOTAL** | 100% | | **7.40** | | **7.10** |

**Recommendation: Server A** (higher utility value: 7.40 vs. 7.10)

</details>

### Exercise 2: Create Complete Utility Analysis

ConSystem GmbH is selecting a cloud provider. Create a utility analysis with:

**Criteria:**
- Price (40%)
- Data security (30%)
- Availability (20%)
- Support (10%)

**Information:**
- Provider A: Inexpensive, medium security, good availability, good support
- Provider B: Expensive, high security, very good availability, medium support
- Provider C: Medium-priced, high security, good availability, very good support

<details>
<summary>Show Solution</summary>

| Criterion | Weight | Provider A | UV | Provider B | UV | Provider C | UV |
|-----------|--------|------------|-----|------------|-----|------------|-----|
| Price | 40% | 9 | 3.60 | 5 | 2.00 | 7 | 2.80 |
| Data security | 30% | 6 | 1.80 | 9 | 2.70 | 9 | 2.70 |
| Availability | 20% | 7 | 1.40 | 9 | 1.80 | 7 | 1.40 |
| Support | 10% | 7 | 0.70 | 6 | 0.60 | 9 | 0.90 |
| **TOTAL** | 100% | | **7.50** | | **7.10** | | **7.80** |

**Recommendation: Provider C** (highest utility value: 7.80)

Reasoning: Provider C offers the best overall package of moderate price, high security, and very good support.

</details>

### Exercise 3: Determine Weighting

The IT manager wants to set weights for the following criteria. Prioritize and justify:

- Purchase price
- Maintenance costs
- Manufacturer support
- Compatibility with existing systems
- Environmental friendliness

<details>
<summary>Show Solution</summary>

**Possible weighting:**

| Criterion | Weight | Reasoning |
|-----------|--------|-----------|
| Compatibility | 30% | Must work with existing infrastructure |
| Purchase price | 25% | Important for budget, but not solely decisive |
| Maintenance costs | 20% | Consider long-term costs (TCO) |
| Manufacturer support | 15% | Important for problem-solving |
| Environmental friendliness | 10% | Desirable but not critical |
| **TOTAL** | 100% | |

**Alternative weighting possible!** The "correct" weighting depends on the company's priorities.

</details>

---

## Cross-References

- [Offer Comparison](08-02-04-offer-comparison.md) - Quantitative comparison
- [ROI and TCO](08-02-02-roi-tco.md) - Economic viability calculation
- [Procurement Process](../08-03-procurement/08-03-01-procurement-process.md) - Purchasing
