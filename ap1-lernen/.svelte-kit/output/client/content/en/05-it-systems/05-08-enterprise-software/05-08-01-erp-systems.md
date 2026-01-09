# ERP Systems

**Note:** Enterprise software is NEW in the 2025 exam catalog!

## Learning Objectives

After this chapter, you should be able to:
- Define the term ERP
- Know typical ERP modules
- Describe advantages of ERP systems
- Name well-known ERP providers

---

## Core Content

### What is ERP?

**ERP (Enterprise Resource Planning)** is an integrated software solution that brings together all business processes of a company in one system.

```
┌─────────────────────────────────────────────────────────────────┐
│                    ERP SYSTEM                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                    ┌───────────────────┐                       │
│                    │  CENTRAL          │                       │
│                    │  DATABASE         │                       │
│                    └─────────┬─────────┘                       │
│                              │                                  │
│      ┌───────────────────────┼───────────────────────┐         │
│      │           │           │           │           │         │
│  ┌───▼───┐  ┌───▼───┐  ┌───▼───┐  ┌───▼───┐  ┌───▼───┐      │
│  │Finance│  │Human  │  │Produc-│  │Sales  │  │Procure│      │
│  │       │  │Resources│ │tion   │  │& CRM  │  │ment   │      │
│  │       │  │(HR)    │  │       │  │       │  │       │      │
│  │• Account-│• Payroll│ │• Manu-│  │• Custo-│ │• Orders│     │
│  │ ing    │ │• Time  │  │ facturing││ mers  │  │       │     │
│  │• Cost  │ │ tracking││• Ware- │ │• Quotes│  │• Suppli│     │
│  │ control│ │• Staff │  │ house │  │• Orders│  │ ers   │     │
│  │        │ │ planning││• Quality│ │       │  │       │      │
│  └────────┘ └────────┘  └────────┘ └───────┘  └───────┘      │
│                                                                 │
│   All data is integrated and consistent!                       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### ERP vs. Standalone Solutions

```
┌────────────────────────────────────────────────────────────────┐
│           STANDALONE SOLUTIONS vs. ERP                         │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  WITHOUT ERP (Island solutions):    WITH ERP:                 │
│                                                                │
│  ┌─────┐  ┌─────┐  ┌─────┐      ┌─────────────────────────┐  │
│  │Accoun-│ │Ware- │ │HR   │      │                         │  │
│  │ting  │  │house │ │     │      │     ERP SYSTEM          │  │
│  └──┬──┘  └──┬──┘  └──┬──┘      │                         │  │
│     │        │        │         │  ┌─────┐┌─────┐┌─────┐  │  │
│     └────?───┴────?───┘         │  │Acc. ││Wareh││HR   │  │  │
│                                  │  └──┬──┘└──┬──┘└──┬──┘  │  │
│  • Maintain data multiple times  │     └──────┼──────┘     │  │
│  • Inconsistencies possible      │            │            │  │
│  • Manual interfaces             │     CENTRAL DB          │  │
│  • No overall view               │                         │  │
│                                  │  • One data source      │  │
│                                  │  • Automatic flow       │  │
│                                  │  • Real-time data       │  │
│                                  └─────────────────────────┘  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Typical ERP Modules

| Module | Function |
|--------|----------|
| **Financial Accounting (FI)** | Balance sheet, P&L, accounts |
| **Controlling (CO)** | Cost accounting, budgets |
| **Materials Management (MM)** | Procurement, warehouse management |
| **Sales and Distribution (SD)** | Quotes, orders, invoicing |
| **Production Planning (PP)** | Production planning and control |
| **Human Resources (HR)** | Payroll, time, staff planning |
| **Quality Management (QM)** | Inspection plans, quality assurance |
| **Plant Maintenance (PM)** | Maintenance, repair |

---

### Advantages of ERP Systems

| Advantage | Description |
|-----------|-------------|
| **Integration** | All data in one system |
| **Consistency** | Uniform, current data |
| **Efficiency** | Automated processes |
| **Transparency** | Real-time overview of the company |
| **Standardization** | Uniform processes |
| **Compliance** | Support for legal requirements |
| **Scalability** | Grows with the company |

---

### Disadvantages and Challenges

| Disadvantage | Description |
|--------------|-------------|
| **High costs** | License, implementation, maintenance |
| **Complexity** | Long implementation projects |
| **Customization** | Customizing often required |
| **Training effort** | Employees need to be trained |
| **Dependency** | Vendor lock-in |

---

### ERP Providers

| Provider | System | Target Group |
|----------|--------|--------------|
| **SAP** | SAP S/4HANA | Large enterprise |
| **Microsoft** | Dynamics 365 | Mid-market, enterprise |
| **Oracle** | Oracle ERP Cloud | Large enterprise |
| **Sage** | Sage 100/X3 | SMB |
| **Haufe** | Lexware | Small business |
| **proALPHA** | proALPHA | Mid-market (manufacturing) |

---

### ERP Implementation

```
┌────────────────────────────────────────────────────────────────┐
│                ERP IMPLEMENTATION PHASES                       │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  1. Analysis       2. Selection     3. Conception             │
│  ┌──────────┐     ┌──────────┐     ┌──────────┐              │
│  │Current   │     │Compare   │     │Target    │              │
│  │processes │ ─► │providers │ ─► │processes │              │
│  └──────────┘     └──────────┘     └──────────┘              │
│                                           │                    │
│  6. Go-Live        5. Test         4. Implementation         │
│  ┌──────────┐     ┌──────────┐     ┌──────────┐              │
│  │Production│     │Integration│    │Customizing│             │
│  │operation │ ◄─ │tests     │ ◄─ │Data migra.│              │
│  └──────────┘     └──────────┘     └──────────┘              │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Cloud ERP vs. On-Premise

| Aspect | Cloud ERP | On-Premise |
|--------|-----------|------------|
| **Operation** | At provider | Own data center |
| **Costs** | Monthly fees | High initial investment |
| **Maintenance** | By provider | Own IT |
| **Flexibility** | Scalable | Limited |
| **Data control** | With provider | Own control |
| **Updates** | Automatic | Self-administered |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **ERP** | Enterprise Resource Planning |
| **Module** | Functional area in ERP (FI, HR, etc.) |
| **Integration** | Linking of all business areas |
| **Customizing** | Adaptation to company needs |
| **Go-Live** | Production start of the system |
| **Cloud ERP** | ERP as Software-as-a-Service |

---

## Exam Tips

### Common Exam Questions

- What is ERP?
- Name typical ERP modules
- What are advantages of an ERP system?
- Name ERP providers

### Important to Remember

- **ERP** = integrated software for all business processes
- **Central database** = one truth for all
- **Modules:** FI (Finance), HR (Human Resources), MM (Materials), SD (Sales)
- **SAP** = market leader for large enterprise

---

## Practice Exercises

### Exercise 1
What is an ERP system and what is the main advantage over standalone solutions?

**Solution:** An **ERP system (Enterprise Resource Planning)** is an integrated software solution that brings together all business processes of a company in one system.

**Main advantage over standalone solutions:** All modules work with a **central database**. This means:
- Data only needs to be entered once
- All departments have the same, current information
- No manual interfaces between systems needed

### Exercise 2
Name four typical modules of an ERP system.

**Solution:**
1. **Financial Accounting (FI):** Balance sheet, P&L, account management
2. **Materials Management (MM):** Procurement, warehouse management
3. **Sales and Distribution (SD):** Quotes, orders, invoices
4. **Human Resources (HR):** Payroll, time tracking

(Additional: Controlling, Production, Quality Management)

### Exercise 3
What is the difference between Cloud ERP and On-Premise ERP?

**Solution:**
| Aspect | Cloud ERP | On-Premise |
|--------|-----------|------------|
| **Location** | At provider | In own data center |
| **Costs** | Monthly fees | High initial investment |
| **Maintenance** | Provider handles it | Own IT department |
| **Data control** | Data with provider | Data in-house |

---

## Cross-References

- [05-08-02 CRM and SCM](./05-08-02-crm-scm.md) - Complementary systems
- [05-04-02 Cloud Computing](../05-04-virtualization-cloud/05-04-02-cloud-computing.md) - Cloud ERP
- [08-02-01 Costs and Cost Types](../../08-business-processes/08-02-economics/08-02-01-costs-cost-types.md) - Cost accounting
