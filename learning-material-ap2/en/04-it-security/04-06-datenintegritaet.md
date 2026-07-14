# Data Integrity

## Learning Objectives

After this chapter, you should be able to:
- Define data integrity via correctness, completeness and consistency
- Explain the role of transactions (ACID) for integrity
- Know the integrity constraints of relational databases

---

## Core Content

### Definition

**Data integrity** means that data is **correct, complete and consistent** and is not altered unintentionally.

| Aspect | Meaning |
|--------|---------|
| **Correctness** | Data reflects reality accurately |
| **Completeness** | No required data is missing |
| **Consistency** | Data is free of contradictions (also across tables/systems) |

### Transactions and ACID

In relational databases, **transactions** safeguard integrity. A transaction is a sequence of operations executed **as a unit**. It satisfies the **ACID** properties:

| Property | Meaning |
|----------|---------|
| **Atomicity** | All or nothing – on error a **rollback** |
| **Consistency** | Moves the DB from one valid state to another |
| **Isolation** | Parallel transactions do not affect each other |
| **Durability** | After **commit**, changes persist permanently |

### Integrity constraints (relational DB)

- **Entity integrity:** every record is identifiable via a unique **primary key** (not NULL, unique).
- **Referential integrity:** a **foreign key** always references an existing record (no "orphaned" references).
- **Domain integrity:** values stay within the allowed value range/data type.

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **ACID** | Atomicity, Consistency, Isolation, Durability |
| **Transaction** | Sequence of operations executed as a unit (commit/rollback) |
| **Referential integrity** | Foreign keys reference existing records |
| **Primary key** | Unique, non-empty identifier |

---

## Exam Tips

- Know **ACID** by heart – a frequent GA2/database question.
- Name correctness/completeness/consistency as the three aspects of integrity.
- Explain **referential integrity** via foreign keys (link to the ER model/SQL, chapter 06).
- Be able to translate English technical texts on transactions (book task).

---

## Practice Exercise

**Task (based on ConSystem GmbH):** Define data integrity (correctness, completeness, consistency) and explain why transactions (ACID) are important for the integrity of relational databases.

---

## Cross-References

- [03-03 Definitions](../03-data-protection/03-03-begriffsbestimmungen.md)
- [06-04 SQL & Databases](../06-software/06-03-datenbanken/06-03-01-sql-skript.md)
