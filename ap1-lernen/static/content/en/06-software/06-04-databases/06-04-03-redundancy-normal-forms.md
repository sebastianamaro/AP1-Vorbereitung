# Redundancy and Normal Forms

## Learning Objectives

After this chapter, you should be able to:
- Recognize data redundancy and understand its problems
- Explain the first three normal forms
- Know anomalies caused by lack of normalization
- Perform simple normalizations

---

## Core Content

### What is Redundancy?

**Redundancy** means that the same data is stored multiple times.

```
┌─────────────────────────────────────────────────────────────────┐
│                      DATA REDUNDANCY                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Example: Redundant data                                       │
│                                                                 │
│   ┌──────┬─────────┬────────────┬──────────┬──────────────┐   │
│   │OrderNo│ Customer│ CustomerCity│ Article  │ Price        │   │
│   ├──────┼─────────┼────────────┼──────────┼──────────────┤   │
│   │ 1001 │ Mueller │ Berlin     │ Laptop   │ 999.00       │   │
│   │ 1002 │ Mueller │ Berlin     │ Mouse    │  29.99       │   │
│   │ 1003 │ Schmidt │ Hamburg    │ Laptop   │ 999.00       │   │
│   │ 1004 │ Mueller │ Berlin     │ Keyboard │  49.99       │   │
│   └──────┴─────────┴────────────┴──────────┴──────────────┘   │
│              ▲           ▲                       ▲             │
│              │           │                       │             │
│              └───────────┴───────────────────────┘             │
│              REDUNDANCY: "Mueller, Berlin" and "999.00"        │
│              are stored multiple times!                        │
│                                                                 │
│   Problems:                                                     │
│   • Wasted storage space                                       │
│   • Risk of inconsistency                                      │
│   • Anomalies during modifications                             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Anomalies Caused by Redundancy

```
┌────────────────────────────────────────────────────────────────┐
│                       ANOMALIES                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   1. UPDATE ANOMALY                                            │
│   ┌────────────────────────────────────────────────────────┐ │
│   │  Mueller moves. The city must be changed in ALL rows.  │ │
│   │  If one is forgotten → Inconsistency!                  │ │
│   │                                                        │ │
│   │  │ Mueller │ Munich   │  ← changed                    │ │
│   │  │ Mueller │ Berlin   │  ← forgotten → ERROR!         │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   2. INSERT ANOMALY                                            │
│   ┌────────────────────────────────────────────────────────┐ │
│   │  New customer without order cannot be created          │ │
│   │  because OrderNo is required as PK.                    │ │
│   │                                                        │ │
│   │  │ ???? │ Weber │ Frankfurt │ - │ - │  NOT POSSIBLE   │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   3. DELETE ANOMALY                                            │
│   ┌────────────────────────────────────────────────────────┐ │
│   │  Schmidt has only one order. If it is deleted,         │ │
│   │  customer Schmidt disappears completely!               │ │
│   │                                                        │ │
│   │  │ 1003 │ Schmidt │ Hamburg │ Laptop │ ← if deleted   │ │
│   │                                         → Customer gone!│ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Normalization

**Normalization** is the process of dividing tables so that redundancy is minimized and anomalies are avoided.

```
┌────────────────────────────────────────────────────────────────┐
│                    NORMAL FORMS                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│                      NOT NORMALIZED                            │
│                             │                                  │
│                             ▼                                  │
│                    ┌────────────────┐                         │
│                    │ 1st Normal Form│  Atomic values          │
│                    │     (1NF)      │  (no repetition)        │
│                    └────────┬───────┘                         │
│                             │                                  │
│                             ▼                                  │
│                    ┌────────────────┐                         │
│                    │ 2nd Normal Form│  All non-key            │
│                    │     (2NF)      │  fully dependent on PK  │
│                    └────────┬───────┘                         │
│                             │                                  │
│                             ▼                                  │
│                    ┌────────────────┐                         │
│                    │ 3rd Normal Form│  No transitive          │
│                    │     (3NF)      │  dependencies           │
│                    └────────────────┘                         │
│                                                                │
│   Each higher NF requires the lower ones!                     │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### 1st Normal Form (1NF)

```
┌────────────────────────────────────────────────────────────────┐
│                  1st NORMAL FORM (1NF)                         │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Requirement: All attribute values must be ATOMIC.           │
│   (no lists, no sets, no multiple values)                     │
│                                                                │
│   NOT in 1NF:                                                  │
│   ┌──────────┬─────────┬─────────────────────────────┐       │
│   │ CustomerNo│ Name    │ PhoneNumbers                │       │
│   ├──────────┼─────────┼─────────────────────────────┤       │
│   │ 1        │ Mueller │ 0151-1234, 030-5678         │  ✗   │
│   │ 2        │ Schmidt │ 0172-9999                   │       │
│   └──────────┴─────────┴─────────────────────────────┘       │
│                    Multiple values in one cell!               │
│                                                                │
│   IN 1NF (Solution 1: Separate table):                        │
│   ┌──────────┬─────────┐    ┌──────────┬────────────┐       │
│   │ CustomerNo│ Name    │    │ CustomerNo│ Phone      │       │
│   ├──────────┼─────────┤    ├──────────┼────────────┤       │
│   │ 1        │ Mueller │    │ 1        │ 0151-1234  │  ✓   │
│   │ 2        │ Schmidt │    │ 1        │ 030-5678   │       │
│   └──────────┴─────────┘    │ 2        │ 0172-9999  │       │
│                             └──────────┴────────────┘       │
│                    Each cell contains only ONE value!        │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### 2nd Normal Form (2NF)

```
┌────────────────────────────────────────────────────────────────┐
│                  2nd NORMAL FORM (2NF)                         │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Requirement: 1NF + All non-key attributes                   │
│   must depend on the ENTIRE primary key.                      │
│   (relevant for composite PK)                                  │
│                                                                │
│   NOT in 2NF:                                                  │
│   PK = (OrderNo, ArticleNo)                                   │
│   ┌────────┬───────────┬────────┬──────────────────┐         │
│   │ OrderNo│ ArticleNo │ Qty    │ ArticleName      │  ✗     │
│   ├────────┼───────────┼────────┼──────────────────┤         │
│   │ 1001   │ A1        │ 2      │ Laptop           │         │
│   │ 1001   │ A2        │ 1      │ Mouse            │         │
│   │ 1002   │ A1        │ 1      │ Laptop           │         │
│   └────────┴───────────┴────────┴──────────────────┘         │
│                    ▲                    ▲                     │
│                    │                    │                     │
│             Qty depends on         ArticleName depends       │
│             entire PK              ONLY on ArticleNo!        │
│                    ✓                    ✗                     │
│                                                                │
│   IN 2NF (split):                                             │
│   ┌────────┬───────────┬────────┐  ┌───────────┬───────────┐│
│   │ OrderNo│ ArticleNo │ Qty    │  │ ArticleNo │ ArticleName││
│   ├────────┼───────────┼────────┤  ├───────────┼───────────┤│
│   │ 1001   │ A1        │ 2      │  │ A1        │ Laptop    │ ✓│
│   │ 1001   │ A2        │ 1      │  │ A2        │ Mouse     ││
│   │ 1002   │ A1        │ 1      │  └───────────┴───────────┘│
│   └────────┴───────────┴────────┘                            │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### 3rd Normal Form (3NF)

```
┌────────────────────────────────────────────────────────────────┐
│                  3rd NORMAL FORM (3NF)                         │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Requirement: 2NF + No transitive dependencies               │
│   Non-keys must not depend on other                           │
│   non-keys!                                                    │
│                                                                │
│   NOT in 3NF:                                                  │
│   PK = CustomerNo                                             │
│   ┌──────────┬─────────┬──────────┬──────────────┐          │
│   │ CustomerNo│ Name    │ PostalCode│ City         │   ✗      │
│   ├──────────┼─────────┼──────────┼──────────────┤          │
│   │ 1        │ Mueller │ 10115    │ Berlin       │          │
│   │ 2        │ Schmidt │ 20095    │ Hamburg      │          │
│   │ 3        │ Weber   │ 10115    │ Berlin       │          │
│   └──────────┴─────────┴──────────┴──────────────┘          │
│                              ▲            ▲                  │
│                              │            │                  │
│                         CustomerNo → PostalCode → City      │
│                              Transitive dependency!          │
│                         City depends on PostalCode,         │
│                         not directly on CustomerNo          │
│                                                                │
│   IN 3NF (split):                                             │
│   ┌──────────┬─────────┬──────────┐  ┌──────────┬────────┐  │
│   │ CustomerNo│ Name    │ PostalCode│  │ PostalCode│ City   │  │
│   ├──────────┼─────────┼──────────┤  ├──────────┼────────┤  │
│   │ 1        │ Mueller │ 10115    │  │ 10115    │ Berlin │ ✓ │
│   │ 2        │ Schmidt │ 20095    │  │ 20095    │ Hamburg│  │
│   │ 3        │ Weber   │ 10115    │  └──────────┴────────┘  │
│   └──────────┴─────────┴──────────┘                         │
│                                                                │
│   Now City is stored only once per PostalCode!               │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Summary of Normal Forms

| NF | Requirement | Eliminates |
|----|-------------|------------|
| **1NF** | Atomic values (no lists) | Repeating groups |
| **2NF** | Fully dependent on PK | Partial dependencies |
| **3NF** | No transitive dependencies | Indirect dependencies |

---

### Practical Example: Normalization

```
┌────────────────────────────────────────────────────────────────┐
│             EXAMPLE: NORMALIZATION STEP BY STEP                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Original table (not normalized):                            │
│   ┌──────┬────────┬───────┬─────────────────┬───────────────┐│
│   │OrderNo│ Customer│ City  │ Articles        │ UnitPrice     ││
│   ├──────┼────────┼───────┼─────────────────┼───────────────┤│
│   │ 1001 │ Mueller │Berlin │ Laptop, Mouse   │ 999, 29       ││
│   └──────┴────────┴───────┴─────────────────┴───────────────┘│
│                                                                │
│   After 1NF (atomic values):                                  │
│   ┌──────┬────────┬───────┬──────────┬───────────┐          │
│   │OrderNo│ Customer│ City  │ Article  │ UnitPrice │          │
│   ├──────┼────────┼───────┼──────────┼───────────┤          │
│   │ 1001 │ Mueller │Berlin │ Laptop   │ 999       │          │
│   │ 1001 │ Mueller │Berlin │ Mouse    │ 29        │          │
│   └──────┴────────┴───────┴──────────┴───────────┘          │
│                                                                │
│   After 3NF (split into three tables):                        │
│                                                                │
│   Order              OrderLine              Article           │
│   ┌──────┬───────┐  ┌──────┬────────┐  ┌────────┬────────┐  │
│   │OrderNo│CustNo │  │OrderNo│ArtNo   │  │ArtNo   │Descrip │  │
│   ├──────┼───────┤  ├──────┼────────┤  ├────────┼────────┤  │
│   │ 1001 │ 1     │  │ 1001 │ A1     │  │ A1     │Laptop  │  │
│   └──────┴───────┘  │ 1001 │ A2     │  │ A2     │Mouse   │  │
│                     └──────┴────────┘  └────────┴────────┘  │
│   Customer                                                    │
│   ┌───────┬────────┬───────┐                                 │
│   │CustNo │ Name   │ City  │                                 │
│   ├───────┼────────┼───────┤                                 │
│   │ 1     │ Mueller│Berlin │                                 │
│   └───────┴────────┴───────┘                                 │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Redundancy** | Multiple storage of same data |
| **Anomaly** | Problems caused by redundancy |
| **Normalization** | Process to minimize redundancy |
| **1NF** | Atomic values |
| **2NF** | Full dependency on PK |
| **3NF** | No transitive dependencies |
| **Transitive** | A → B → C (indirect dependency) |

---

## Exam Tips

### Common Exam Questions

- What is data redundancy?
- Name the anomalies
- Explain the first three normal forms
- What normal form is this table in?

### Important to Remember

- **Redundancy** = Same data stored multiple times
- **1NF** = Atomic values (no lists in cells)
- **2NF** = Everything depends on entire PK
- **3NF** = No dependencies between non-keys
- Anomalies: Update, Insert, Delete

---

## Practice Exercises

### Exercise 1
What are the three types of anomalies and what do they mean?

**Solution:**
1. **Update Anomaly:** When modifying redundant data, inconsistencies can occur if not all occurrences are changed.
2. **Insert Anomaly:** New data cannot be inserted because dependent data is missing.
3. **Delete Anomaly:** When deleting a record, other information is unintentionally lost.

### Exercise 2
What normal form is the following table in?

```
┌──────────┬─────────┬─────────────────────┐
│ StudentNo│ Name    │ Courses             │
├──────────┼─────────┼─────────────────────┤
│ 1        │ Mueller │ Math, Physics, CS   │
│ 2        │ Schmidt │ Math, Chemistry     │
└──────────┴─────────┴─────────────────────┘
```

**Solution:**
The table is **NOT in 1NF** because the "Courses" attribute contains multiple values (not atomic). 1NF requires that each cell contains only a single value.

### Exercise 3
Normalize the following table to 3NF:

```
┌──────┬────────┬──────────┬────────┬──────────┐
│OrderNo│CustomerNo│CustomerName│ProductNo│ProductName│
├──────┼────────┼──────────┼────────┼──────────┤
│ 1001 │ K1     │ Mueller  │ P1     │ Laptop   │
│ 1002 │ K1     │ Mueller  │ P2     │ Mouse    │
│ 1003 │ K2     │ Schmidt  │ P1     │ Laptop   │
└──────┴────────┴──────────┴────────┴──────────┘
```

**Solution:**
The table has redundancy: CustomerName and ProductName are repeated.

**Split into 3NF:**

```
Order                     Customer                 Product
┌──────┬────────┬───────┐ ┌────────┬──────────┐ ┌────────┬──────────┐
│OrderNo│CustomerNo│ProductNo│ │CustomerNo│CustomerName│ │ProductNo│ProductName│
├──────┼────────┼───────┤ ├────────┼──────────┤ ├────────┼──────────┤
│ 1001 │ K1     │ P1    │ │ K1     │ Mueller  │ │ P1     │ Laptop   │
│ 1002 │ K1     │ P2    │ │ K2     │ Schmidt  │ │ P2     │ Mouse    │
│ 1003 │ K2     │ P1    │ └────────┴──────────┘ └────────┴──────────┘
└──────┴────────┴───────┘
```

---

## Cross-References

- [06-04-01 Relational Databases](./06-04-01-relational-databases.md) - Fundamentals
- [06-04-02 ERD](./06-04-02-erd.md) - Data modeling
- [02-01-01 Quality Concept](../../02-quality-management/02-01-fundamentals/02-01-01-quality-concept.md) - Data quality
