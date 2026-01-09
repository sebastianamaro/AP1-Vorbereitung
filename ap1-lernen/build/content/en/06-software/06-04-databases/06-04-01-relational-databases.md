# Relational Databases

## Learning Objectives

After this chapter, you should be able to:
- Understand the concept of relational databases
- Know basic terms (table, record, field)
- Explain primary and foreign keys
- Understand relationships between tables

---

## Core Content

### What is a Relational Database?

A **relational database** stores data in tables that can be related to each other.

```
┌─────────────────────────────────────────────────────────────────┐
│                 RELATIONAL DATABASE                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │   NOTE: SQL is NOT part of the AP1 exam 2025!           │  │
│   │   SQL has been moved to AP2.                            │  │
│   │   Here we focus on concepts, not queries.               │  │
│   └─────────────────────────────────────────────────────────┘  │
│                                                                 │
│   Characteristics:                                              │
│   • Data in tabular form (rows and columns)                    │
│   • Tables can be linked (relations)                           │
│   • Unique identification through keys                         │
│   • Structured storage                                          │
│                                                                 │
│   Structure:                                                    │
│   ┌────────────────────────────────────────────────────────┐  │
│   │ Customer                                               │  │
│   ├──────────┬───────────┬─────────────┬──────────────────┤  │
│   │ CustomerNo│ Name      │ City        │ PostalCode       │  │
│   ├──────────┼───────────┼─────────────┼──────────────────┤  │
│   │ 1        │ Mueller   │ Berlin      │ 10115            │  │
│   │ 2        │ Schmidt   │ Hamburg     │ 20095            │  │
│   │ 3        │ Weber     │ Munich      │ 80331            │  │
│   └──────────┴───────────┴─────────────┴──────────────────┘  │
│      ▲              ▲                                         │
│      │              │                                         │
│   Column         Row = Record                                 │
│   (Attribute)    (Tuple)                                      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Basic Terms

```
┌────────────────────────────────────────────────────────────────┐
│                     BASIC TERMS                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Term               │ Explanation        │ Example            │
│   ─────────────────┼────────────────────┼─────────────────────│
│   Database           │ Collection of      │ Shop DB with       │
│                      │ tables             │ customers, etc.    │
│   ─────────────────┼────────────────────┼─────────────────────│
│   Table              │ Structure for      │ Table "Customer"   │
│   (Relation)         │ similar data       │                    │
│   ─────────────────┼────────────────────┼─────────────────────│
│   Record             │ One row            │ One customer       │
│   (Tuple, Record)    │ (complete entry)   │ (No, Name, City)   │
│   ─────────────────┼────────────────────┼─────────────────────│
│   Field              │ Single value       │ "Mueller"          │
│   (Attribute)        │ in a cell          │                    │
│   ─────────────────┼────────────────────┼─────────────────────│
│   Column             │ All values of an   │ All names          │
│   (Attribute)        │ attribute          │                    │
│   ─────────────────┼────────────────────┼─────────────────────│
│   Data type          │ Type of field      │ INTEGER, VARCHAR,  │
│                      │                    │ DATE, BOOLEAN      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Keys

```
┌────────────────────────────────────────────────────────────────┐
│                       KEYS                                     │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   PRIMARY KEY (PK)                                             │
│   ┌────────────────────────────────────────────────────────┐ │
│   │  • Identifies each record UNIQUELY                     │ │
│   │  • Cannot be NULL                                      │ │
│   │  • Must not change                                     │ │
│   │  • Often: ID number (auto-generated)                   │ │
│   │                                                        │ │
│   │  Example:                                              │ │
│   │  ┌──────────┬───────────┬─────────────┐               │ │
│   │  │ CustomerNo│ Name      │ Email       │               │ │
│   │  │   (PK)   │           │             │               │ │
│   │  ├──────────┼───────────┼─────────────┤               │ │
│   │  │    1     │ Mueller   │ m@mail.de   │               │ │
│   │  │    2     │ Schmidt   │ s@mail.de   │               │ │
│   │  └──────────┴───────────┴─────────────┘               │ │
│   │       ▲                                                │ │
│   │       └── Each value occurs only ONCE                  │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   FOREIGN KEY (FK)                                             │
│   ┌────────────────────────────────────────────────────────┐ │
│   │  • Reference to primary key of another table           │ │
│   │  • Establishes relationship between tables             │ │
│   │  • Can occur multiple times                            │ │
│   │                                                        │ │
│   │  Example:                                              │ │
│   │  Table "Order"                                         │ │
│   │  ┌────────────┬──────────┬────────────┐               │ │
│   │  │ OrderNo    │ CustomerNo│ Date       │               │ │
│   │  │   (PK)     │   (FK)   │            │               │ │
│   │  ├────────────┼──────────┼────────────┤               │ │
│   │  │    1001    │    1     │ 2024-01-15 │               │ │
│   │  │    1002    │    2     │ 2024-01-16 │               │ │
│   │  │    1003    │    1     │ 2024-01-17 │  ← Customer 1 │ │
│   │  └────────────┴──────────┴────────────┘     has 2     │ │
│   │                    │                        orders    │ │
│   │                    └── Reference to Customer          │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Relationships Between Tables

```
┌────────────────────────────────────────────────────────────────┐
│                  RELATIONSHIP TYPES                            │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   1:1 RELATIONSHIP (One-to-One)                               │
│   ┌─────────┐          ┌─────────┐                           │
│   │  Person │──────────│Passport │                           │
│   └─────────┘    1   1 └─────────┘                           │
│   A person has exactly one passport                           │
│   A passport belongs to exactly one person                    │
│                                                                │
│   ──────────────────────────────────────────────────────────  │
│                                                                │
│   1:N RELATIONSHIP (One-to-Many) - MOST COMMON!              │
│   ┌─────────┐          ┌──────────────┐                      │
│   │ Customer│◄─────────│    Order     │                      │
│   └─────────┘    1   * └──────────────┘                      │
│   A customer has many orders                                  │
│   An order belongs to one customer                            │
│                                                                │
│   Implementation: FK in the "Many" table                      │
│   ┌─────────────┐      ┌───────────────────────┐             │
│   │   Customer  │      │       Order           │             │
│   ├─────────────┤      ├───────────────────────┤             │
│   │ CustomerNo PK│◄─────│ OrderNo PK            │             │
│   │ Name        │      │ CustomerNo FK ────────┘             │
│   └─────────────┘      │ Date                  │             │
│                        └───────────────────────┘             │
│                                                                │
│   ──────────────────────────────────────────────────────────  │
│                                                                │
│   M:N RELATIONSHIP (Many-to-Many)                             │
│   ┌─────────┐          ┌─────────┐                           │
│   │ Student │◄────────►│ Course  │                           │
│   └─────────┘    *   * └─────────┘                           │
│   A student takes many courses                                │
│   A course is taken by many students                          │
│                                                                │
│   Implementation: Via junction table!                         │
│   ┌─────────┐      ┌────────────────┐      ┌─────────┐      │
│   │ Student │      │   Enrollment   │      │ Course  │      │
│   ├─────────┤      ├────────────────┤      ├─────────┤      │
│   │ StudentNo│◄─────│ StudentNo FK   │      │ CourseNo│      │
│   │ Name    │      │ CourseNo FK  ──┼─────►│ Name    │      │
│   └─────────┘      │ Semester       │      └─────────┘      │
│                    └────────────────┘                        │
│                    Junction table                             │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Referential Integrity

```
┌────────────────────────────────────────────────────────────────┐
│               REFERENTIAL INTEGRITY                            │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Rule: Foreign key values must exist in the                  │
│         referenced table!                                      │
│                                                                │
│   Example:                                                     │
│   ┌────────────┐              ┌──────────────────┐           │
│   │  Customer  │              │     Order        │           │
│   ├────────────┤              ├──────────────────┤           │
│   │ 1 │ Mueller│◄─────────────│ 1001 │ 1 │ ...  │           │
│   │ 2 │ Schmidt│              │ 1002 │ 2 │ ...  │           │
│   │   │        │              │ 1003 │ 5 │ ... ✗│           │
│   └────────────┘              └──────────────────┘           │
│                                         ▲                     │
│                                         │                     │
│                               Customer 5 does not exist!      │
│                               → Violates referential          │
│                                 integrity                     │
│                                                                │
│   Consequences when deleting/updating:                        │
│   • CASCADE: Dependent data is also deleted/updated          │
│   • RESTRICT: Deletion is prevented                          │
│   • SET NULL: FK is set to NULL                              │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### DBMS (Database Management System)

| Term | Explanation |
|------|-------------|
| **DBMS** | Software to manage the database |
| **Examples** | MySQL, PostgreSQL, Oracle, Microsoft SQL Server |
| **Functions** | Storage, queries, security, multi-user operation |

---

### Advantages of Relational Databases

| Advantage | Description |
|-----------|-------------|
| **Data Integrity** | Consistency through keys and rules |
| **Redundancy Minimization** | Store data only once |
| **Flexibility** | Queries across multiple tables |
| **Security** | Access rights at table level |
| **Standardized** | SQL as unified language (AP2) |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Relation** | Table in a relational DB |
| **Tuple** | Row/record |
| **Attribute** | Column/field |
| **Primary Key** | Unique identification (PK) |
| **Foreign Key** | Reference to other table (FK) |
| **Referential Integrity** | FK must point to existing PK |
| **DBMS** | Database Management System |

---

## Exam Tips

### Common Exam Questions

- What is a primary key, what is a foreign key?
- How is an M:N relationship implemented?
- What does referential integrity mean?

### Important to Remember

- **Primary Key (PK)** = unique, never NULL
- **Foreign Key (FK)** = reference to PK of another table
- **1:N** = FK in the "N" table
- **M:N** = Junction table with two FKs
- **SQL is NOT in AP1** (only AP2!)

---

## Practice Exercises

### Exercise 1
What is the difference between a primary key and a foreign key?

**Solution:**
- **Primary Key (PK):** Uniquely identifies each record in a table. Cannot be NULL and occurs only once. Example: CustomerNo in the Customer table.
- **Foreign Key (FK):** References the primary key of another table and thus establishes a relationship. Can occur multiple times. Example: CustomerNo in the Order table.

### Exercise 2
How is an M:N relationship between "Article" and "Supplier" (an article can be obtained from multiple suppliers, a supplier delivers multiple articles) implemented?

**Solution:**
Via a junction table:

```
┌─────────────┐    ┌─────────────────┐    ┌─────────────┐
│   Article   │    │     Delivery    │    │  Supplier   │
├─────────────┤    ├─────────────────┤    ├─────────────┤
│ ArticleNo PK│◄───│ ArticleNo FK    │    │ SupplierNo PK│
│ Description │    │ SupplierNo FK ──┼───►│ Name        │
│ Price       │    │ PurchasePrice   │    │ Address     │
└─────────────┘    │ DeliveryTime    │    └─────────────┘
                   └─────────────────┘
```

The junction table "Delivery" contains two foreign keys.

### Exercise 3
Why would the following record violate referential integrity?

Table Customer: CustomerNo 1, 2, 3
New Order: OrderNo 1005, CustomerNo 7

**Solution:**
The violation occurs because the foreign key `CustomerNo = 7` references a primary key that does not exist in the Customer table. Referential integrity requires that every FK value must have a corresponding PK value in the referenced table. Customer 7 does not exist, therefore the order is invalid.

---

## Cross-References

- [06-04-02 ERD](./06-04-02-erd.md) - Entity-Relationship Diagram
- [06-04-03 Redundancy and Normal Forms](./06-04-03-redundancy-normal-forms.md) - Database optimization
- [06-03-01 Class Diagram](../06-03-uml/06-03-01-class-diagram.md) - Similar structural representation
