# Costs and Cost Types

## Learning Objectives

After this section, you will be able to:
- Distinguish fixed and variable costs
- Explain direct and overhead costs
- Name cost types in IT
- Differentiate between expense, cost, and expenditure

---

## Core Content

### Basic Terms

```
┌─────────────────────────────────────────────────────────────────────┐
│                DIFFERENTIATION OF TERMS                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  EXPENDITURE                                                        │
│  → Cash flows out (cash outflow)                                    │
│  → Example: Invoice is paid                                         │
│                                                                      │
│  EXPENSE                                                            │
│  → Consumption of goods and services (P&L)                          │
│  → Example: Salary is recorded                                      │
│                                                                      │
│  COST                                                               │
│  → Valued consumption for service provision                         │
│  → Only business-related                                            │
│  → Example: Material consumption for production                     │
│                                                                      │
│  Important for the exam:                                            │
│  COST = Business expense for core services                          │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Fixed and Variable Costs

```
┌─────────────────────────────────────────────────────────────────────┐
│           FIXED vs. VARIABLE COSTS                                   │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  FIXED COSTS (FC)                     VARIABLE COSTS (VC)           │
│  ─────────────────────────────────────────────────────────────────  │
│  Independent of                       Dependent on                  │
│  production volume                    production volume             │
│                                                                      │
│  Cost                                 Cost                          │
│    │                                    │                           │
│    │────────────────                    │         /                 │
│    │                                    │       /                   │
│    │                                    │     /                     │
│    │                                    │   /                       │
│    │                                    │ /                         │
│    └────────────────► Volume           └──────────────► Volume      │
│                                                                      │
│  Stay the same,                       Increase/decrease with        │
│  regardless of production             production volume             │
│                                                                      │
│  EXAMPLES FIXED COSTS:                EXAMPLES VARIABLE COSTS:      │
│  → Rent                               → Materials                   │
│  → Salaries (permanent employees)     → Packaging                   │
│  → Insurance                          → Commissions                 │
│  → Depreciation                       → Energy consumption (partly) │
│  → License fees (flat rate)           → License fees (per user)     │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### IT-Typical Cost Examples

| Fixed Costs | Variable Costs |
|-------------|----------------|
| Server rental (monthly flat rate) | Cloud costs (usage-based) |
| Microsoft 365 annual subscription | AWS Pay-as-you-go |
| IT salaries | External consultants (hourly) |
| IT department office space | Traffic costs |
| Firewall maintenance contract | Printing costs |

### Direct and Overhead Costs

```
┌─────────────────────────────────────────────────────────────────────┐
│           DIRECT vs. OVERHEAD COSTS                                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  DIRECT COSTS                         OVERHEAD COSTS                │
│  ─────────────────────────────────────────────────────────────────  │
│  Directly attributable to             Not directly attributable     │
│  a product/order                      (must be allocated)           │
│                                                                      │
│  IT Examples:                         IT Examples:                  │
│  → Hardware for customer project      → Data center electricity     │
│  → License for specific               → IT management salary        │
│    customer order                     → General software licenses   │
│  → External consultants for project   → IT department office costs  │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │                                                              │    │
│  │    Project A                  Project B                     │    │
│  │    ┌───────┐                ┌───────┐                       │    │
│  │    │       │                │       │                       │    │
│  │    │DC: $5 │                │DC: $8 │   Direct costs        │    │
│  │    │       │                │       │   directly allocated  │    │
│  │    └───────┘                └───────┘                       │    │
│  │         ↑                        ↑                          │    │
│  │         │                        │                          │    │
│  │         └──────────┬─────────────┘                          │    │
│  │                    │                                        │    │
│  │            ┌───────┴───────┐                                │    │
│  │            │ Overhead costs│   Must be distributed          │    │
│  │            │   (OC: $10)   │   e.g., 50/50 or by            │    │
│  │            │               │   time spent                   │    │
│  │            └───────────────┘                                │    │
│  │                                                              │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Cost Types in IT

```
┌─────────────────────────────────────────────────────────────────────┐
│                    COST TYPES IN IT                                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  1. PERSONNEL COSTS                                                 │
│     → Salaries, social security contributions, training             │
│     → Often the largest cost block in IT companies                  │
│                                                                      │
│  2. HARDWARE COSTS                                                  │
│     → Acquisition (servers, PCs, network)                           │
│     → Maintenance and spare parts                                   │
│     → Depreciation                                                  │
│                                                                      │
│  3. SOFTWARE COSTS                                                  │
│     → Licenses (one-time or subscription)                           │
│     → Maintenance contracts                                         │
│     → Custom development                                            │
│                                                                      │
│  4. INFRASTRUCTURE COSTS                                            │
│     → Data center (rent, electricity, cooling)                      │
│     → Network (internet, leased lines)                              │
│     → Cloud services                                                │
│                                                                      │
│  5. OPERATING COSTS                                                 │
│     → Support and maintenance                                       │
│     → Training                                                      │
│     → Insurance                                                     │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Calculating Total Costs

```
┌─────────────────────────────────────────────────────────────────────┐
│                    TOTAL COST FORMULA                                │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Total Costs (TC) = Fixed Costs (FC) + Variable Costs (VC)          │
│                                                                      │
│                     TC = FC + (vc x Quantity)                        │
│                                                                      │
│  Where:                                                             │
│  → FC = Fixed costs (constant)                                      │
│  → vc = variable unit costs                                         │
│  → Quantity = Production volume / usage units                       │
│                                                                      │
│  ────────────────────────────────────────────────────────────────   │
│                                                                      │
│  EXAMPLE:                                                           │
│  An IT service provider has:                                        │
│  → Fixed costs: $10,000 / month (salaries, rent)                    │
│  → Variable costs: $50 / support hour                               │
│                                                                      │
│  At 100 support hours per month:                                    │
│  TC = $10,000 + ($50 x 100) = $10,000 + $5,000 = $15,000           │
│                                                                      │
│  At 200 support hours per month:                                    │
│  TC = $10,000 + ($50 x 200) = $10,000 + $10,000 = $20,000          │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Fixed costs** | Costs that are incurred regardless of production volume |
| **Variable costs** | Costs that increase/decrease with production volume |
| **Direct costs** | Costs directly attributable to a product/order |
| **Overhead costs** | Costs not directly attributable (must be allocated) |
| **Depreciation** | Distribution of acquisition costs over useful life |
| **Total costs** | Sum of fixed and variable costs |

---

## Exam Tips

1. **Mnemonic Fixed vs. Variable:**
   - **F**ixed = stays **f**irm (independent of volume)
   - **V**ariable = **v**aries with volume

2. **Typical exam questions:**
   - Classification of cost items
   - Calculation of total costs
   - Difference between direct/overhead costs

3. **Common mistakes:**
   - Salaries are usually fixed costs (not variable!)
   - Cloud costs can be fixed OR variable (depending on model)

---

## Practice Exercises

### Exercise 1: Cost Classification

Classify the following costs of ConSystem GmbH correctly:

| Cost Item | Fixed/Variable | Direct/Overhead |
|-----------|----------------|-----------------|
| Server rental (monthly flat rate) | | |
| License for customer project | | |
| Data center electricity | | |
| IT manager salary | | |
| Cloud costs (pay-as-you-go) | | |

<details>
<summary>Show Solution</summary>

| Cost Item | Fixed/Variable | Direct/Overhead |
|-----------|----------------|-----------------|
| Server rental (monthly flat rate) | Fixed | Overhead |
| License for customer project | Variable | Direct |
| Data center electricity | Fixed* | Overhead |
| IT manager salary | Fixed | Overhead |
| Cloud costs (pay-as-you-go) | Variable | Direct/Overhead** |

*Electricity can also be partially variable but is often considered fixed
**Depends on whether for specific project or general use

</details>

### Exercise 2: Total Cost Calculation

ConSystem GmbH is planning a new support department:
- Fixed costs: $8,000/month (rent, permanent employee salaries)
- Variable costs: $35/support ticket (external processing)

a) What are the total costs at 50 tickets/month?
b) What are they at 150 tickets/month?
c) At what ticket count does hiring another permanent employee (salary: $4,000/month) make sense, if they can handle 100 tickets?

<details>
<summary>Show Solution</summary>

a) **50 tickets:**
TC = $8,000 + ($35 x 50) = $8,000 + $1,750 = **$9,750**

b) **150 tickets:**
TC = $8,000 + ($35 x 150) = $8,000 + $5,250 = **$13,250**

c) **Break-even for new hire:**
- External cost for 100 tickets: $35 x 100 = $3,500
- Cost of permanent employee: $4,000
- Difference: $500/month MORE EXPENSIVE with new hire

At 100 tickets, external is still worthwhile.
At 115 tickets: $35 x 115 = $4,025 > $4,000
**From approximately 115 tickets/month, the new hire becomes worthwhile.**

</details>

### Exercise 3: IT Budget Analysis

An IT budget contains the following items:

| Item | Amount |
|------|--------|
| Personnel costs | $500,000 |
| Hardware procurement | $80,000 |
| Software licenses | $60,000 |
| Cloud services | $40,000 |
| Training | $20,000 |

a) Which item is typically the largest cost block?
b) Which items are predominantly fixed costs?
c) Which items could be variable?

<details>
<summary>Show Solution</summary>

a) **Personnel costs** ($500,000) - typically 60-70% of IT budget

b) **Predominantly fixed costs:**
- Personnel costs (salaries are fixed)
- Hardware procurement (depreciation is fixed)
- Software licenses (often annual licenses = fixed)

c) **Potentially variable costs:**
- Cloud services (if pay-as-you-go)
- Training (as needed)
- Parts of software licenses (if per user)

</details>

---

## Cross-References

- [ROI and TCO](08-02-02-roi-tco.md) - Economic viability calculation
- [Utility Analysis](08-02-03-utility-analysis.md) - Decision-making
- [Price Calculation](../08-05-pricing/08-05-01-price-calculation.md) - Cost markup
