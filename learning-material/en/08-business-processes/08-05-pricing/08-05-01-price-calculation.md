# Price Calculation

## Learning Objectives

After this section, you will be able to:
- Perform markup calculation
- Calculate IT hourly rates
- Understand trade calculation
- Explain cost components of a price

---

## Core Content

### Basic Principle of Calculation

```
┌─────────────────────────────────────────────────────────────────────┐
│                    PRICE CALCULATION                                 │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  GOAL: Determine a sales price that covers all costs                │
│        and enables profit                                            │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │                                                              │    │
│  │   Cost price                                                 │    │
│  │   + Profit markup                                            │    │
│  │   ──────────────────                                         │    │
│  │   = Cash sales price (net)                                   │    │
│  │   + VAT (19%)                                                │    │
│  │   ──────────────────                                         │    │
│  │   = Gross sales price                                        │    │
│  │                                                              │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Markup Calculation (Trade Calculation)

```
┌─────────────────────────────────────────────────────────────────────┐
│           FORWARD CALCULATION (from purchase to sales)              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│      List purchase price (net)                                      │
│    - Supplier discount                                              │
│    ─────────────────────────────                                    │
│    = Target purchase price                                          │
│    - Supplier cash discount                                         │
│    ─────────────────────────────                                    │
│    = Cash purchase price                                            │
│    + Procurement costs                                              │
│    ─────────────────────────────                                    │
│    = LANDED COST (acquisition price)                                │
│    + Operating costs (overhead)                                     │
│    ─────────────────────────────                                    │
│    = COST PRICE                                                     │
│    + Profit markup                                                  │
│    ─────────────────────────────                                    │
│    = Cash sales price                                               │
│    + Customer cash discount                                         │
│    ─────────────────────────────                                    │
│    = Target sales price                                             │
│    + Customer discount                                              │
│    ─────────────────────────────                                    │
│    = LIST SALES PRICE (net)                                         │
│    + VAT (19%)                                                      │
│    ─────────────────────────────                                    │
│    = GROSS SALES PRICE                                              │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Example Calculation: Laptop Pricing

```
┌─────────────────────────────────────────────────────────────────────┐
│          CALCULATION EXAMPLE: LAPTOP                                │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  PURCHASE:                                                          │
│  List purchase price (net):             €800.00                     │
│  - Supplier discount (10%):             -€80.00                     │
│  ─────────────────────────────────────────────────                  │
│  = Target purchase price:               €720.00                     │
│  - Supplier cash discount (2%):         -€14.40                     │
│  ─────────────────────────────────────────────────                  │
│  = Cash purchase price:                 €705.60                     │
│  + Procurement costs (shipping):        +€15.00                     │
│  ─────────────────────────────────────────────────                  │
│  = LANDED COST:                         €720.60                     │
│                                                                      │
│  MARKUP:                                                            │
│  + Operating costs (25%):               +€180.15                    │
│  ─────────────────────────────────────────────────                  │
│  = COST PRICE:                          €900.75                     │
│  + Profit (15%):                        +€135.11                    │
│  ─────────────────────────────────────────────────                  │
│  = Cash sales price:                    €1,035.86                   │
│                                                                      │
│  SALES:                                                             │
│  + Customer cash discount (3%):         +€32.05                     │
│  ─────────────────────────────────────────────────                  │
│  = Target sales price:                  €1,067.91                   │
│  + Customer discount (5%):              +€56.21                     │
│  ─────────────────────────────────────────────────                  │
│  = LIST SALES PRICE (net):              €1,124.12                   │
│  + VAT (19%):                           +€213.58                    │
│  ─────────────────────────────────────────────────                  │
│  = GROSS SALES PRICE:                   €1,337.70                   │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### IT Hourly Rate Calculation

```
┌─────────────────────────────────────────────────────────────────────┐
│           HOURLY RATE CALCULATION FOR IT SERVICES                   │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  1. PERSONNEL COSTS PER YEAR                                        │
│     ───────────────────────────────────────────────────────────     │
│     Gross salary/year:                   €48,000                    │
│     + Employer social security (~21%):   +€10,080                   │
│     + Other personnel costs:             +€2,000                    │
│     ─────────────────────────────────────────────                   │
│     = Personnel costs/year:              €60,080                    │
│                                                                      │
│  2. PRODUCTIVE WORK HOURS PER YEAR                                  │
│     ───────────────────────────────────────────────────────────     │
│     Work days/year:                      220 days                   │
│     × Hours/day:                         8 hours                    │
│     ─────────────────────────────────────────────                   │
│     = Gross work hours:                  1,760 hours                │
│     - Vacation, sick leave, training:   -240 hours                  │
│     - Non-billable time (~20%):         -300 hours                  │
│     ─────────────────────────────────────────────                   │
│     = Productive hours:                  1,220 hours                │
│                                                                      │
│  3. CALCULATE HOURLY RATE                                           │
│     ───────────────────────────────────────────────────────────     │
│                                                                      │
│                   Personnel costs        €60,080                    │
│     Hourly rate = ──────────────────── = ────────── = €49.25        │
│                   Productive hours       1,220 h                    │
│                                                                      │
│     + Overhead markup (80%):             +€39.40                    │
│     ─────────────────────────────────────────────                   │
│     = Cost price/hour:                   €88.65                     │
│     + Profit markup (20%):               +€17.73                    │
│     ─────────────────────────────────────────────                   │
│     = HOURLY RATE (net):                 €106.38                    │
│     + VAT (19%):                         +€20.21                    │
│     ─────────────────────────────────────────────                   │
│     = HOURLY RATE (gross):               €126.59                    │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Cost Components

```
┌─────────────────────────────────────────────────────────────────────┐
│           COST COMPONENTS IN SALES PRICE                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │                    GROSS SALES PRICE                         │    │
│  │  ┌───────────────────────────────────────────────────────┐  │    │
│  │  │                NET SALES PRICE                         │  │    │
│  │  │  ┌─────────────────────────────────────────────────┐  │  │    │
│  │  │  │              COST PRICE                          │  │  │    │
│  │  │  │  ┌───────────────────────────────────────────┐  │  │  │    │
│  │  │  │  │          LANDED COST                      │  │  │  │    │
│  │  │  │  │  ┌─────────────────────────────────────┐  │  │  │  │    │
│  │  │  │  │  │       PURCHASE PRICE                │  │  │  │  │    │
│  │  │  │  │  └─────────────────────────────────────┘  │  │  │  │    │
│  │  │  │  │  + Procurement costs                      │  │  │  │    │
│  │  │  │  └───────────────────────────────────────────┘  │  │  │    │
│  │  │  │  + Operating costs                              │  │  │    │
│  │  │  └─────────────────────────────────────────────────┘  │  │    │
│  │  │  + Profit                                              │  │    │
│  │  └───────────────────────────────────────────────────────┘  │    │
│  │  + VAT                                                       │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Important Markups

| Markup | Description | Typical Value |
|--------|-------------|---------------|
| **Operating costs** | Overhead (rent, personnel, etc.) | 20-40% |
| **Profit markup** | Target profit | 10-20% |
| **Customer cash discount** | Discount for quick payment | 2-3% |
| **Customer discount** | Discount on list price | 5-20% |
| **VAT** | Value added tax | 19% (7% reduced) |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Landed cost** | Purchase price including procurement costs |
| **Cost price** | All costs for a product |
| **Operating costs** | Business overhead costs |
| **Profit markup** | Markup for company profit |
| **Markup calculation** | Calculation through percentage markups |
| **Productive hours** | Hours billed to the customer |

---

## Exam Tips

1. **Remember the calculation schema:**
   - Landed cost + Operating costs = Cost price
   - Cost price + Profit = Cash sales price
   - ... + Discount + Cash discount + VAT = Gross price

2. **Calculate discount/cash discount "backwards":**
   - For discount/cash discount: Calculate "in the hundred"
   - 3% cash discount means: Cash sales price × 100/97

3. **Hourly rate:**
   - Productive hours are LESS than work hours!
   - Don't forget overhead markup

---

## Practice Exercises

### Exercise 1: Calculate Sales Price

ConSystem buys a monitor for €200 net. Calculate the gross sales price with:
- Procurement costs: €10
- Operating cost markup: 30%
- Profit markup: 15%
- VAT: 19%

<details>
<summary>Show solution</summary>

**Calculation:**

Purchase price net: €200.00
+ Procurement costs: +€10.00
────────────────────────────
= Landed cost: €210.00
+ Operating costs (30%): +€63.00
────────────────────────────
= Cost price: €273.00
+ Profit (15%): +€40.95
────────────────────────────
= Net sales price: €313.95
+ VAT (19%): +€59.65
────────────────────────────
= **Gross sales price: €373.60**

</details>

### Exercise 2: Calculate Hourly Rate

An IT consultant has the following data:
- Annual gross salary: €55,000
- Employer social security contribution: 21%
- Other personnel costs: €3,000
- Work days/year: 220
- Productive hours: 65% of work time
- Overhead markup: 70%
- Profit markup: 25%

Calculate the net hourly rate.

<details>
<summary>Show solution</summary>

**1. Personnel costs:**
- Salary: €55,000
- Employer SS contribution: €55,000 × 21% = €11,550
- Other: €3,000
- **Total: €69,550**

**2. Productive hours:**
- Work hours: 220 days × 8h = 1,760 hours
- Productive (65%): 1,760 × 0.65 = **1,144 hours**

**3. Hourly rate:**
- Personnel costs/hour: €69,550 / 1,144 h = €60.79
- Overhead (70%): €60.79 × 0.70 = €42.55
- Cost price/hour: €60.79 + €42.55 = €103.34
- Profit (25%): €103.34 × 0.25 = €25.84
- **Net hourly rate: €129.18**

</details>

### Exercise 3: Backward Calculation

The gross sales price of a server should be €2,380. What is the maximum purchase price, if:
- Procurement costs: €50
- Operating cost markup: 25%
- Profit markup: 20%
- VAT: 19%

<details>
<summary>Show solution</summary>

**Backward calculation:**

Gross sales price: €2,380.00
÷ 1.19 (remove VAT)
────────────────────────────
= Net sales price: €2,000.00
÷ 1.20 (remove profit)
────────────────────────────
= Cost price: €1,666.67
÷ 1.25 (remove operating costs)
────────────────────────────
= Landed cost: €1,333.33
- Procurement costs: -€50.00
────────────────────────────
= **Maximum purchase price: €1,283.33**

</details>

---

## Cross-References

- [Costs and Cost Types](../08-02-economics/08-02-01-costs-cost-types.md) - Cost fundamentals
- [Quotation Comparison](../08-02-economics/08-02-04-offer-comparison.md) - Landed cost
- [Contract Types](../08-04-contract-law/08-04-01-contract-types.md) - Purchase contract
