# Database Fundamentals

## Learning Objectives

After this chapter you should be able to:
- Classify DBMS, relational and NoSQL databases
- Explain CRUD, NULL and atomicity
- Know anomalies, indexes and ODBC

---

## Core Content

### DBMS & Database Models

A **DBMS** (database management system) manages data centrally (access, integrity, multi-user, transactions).

| Model | Characteristic | Examples |
|-------|----------------|----------|
| **Relational (SQL)** | tables with relationships, schema | MySQL, PostgreSQL |
| **NoSQL** | flexible/schemaless (document, key-value, graph) | MongoDB, Redis |

### CRUD

The four basic operations: **C**reate (INSERT), **R**ead (SELECT), **U**pdate (UPDATE), **D**elete (DELETE).

### NULL & Atomicity

- **NULL** = *no value present* (not 0, not an empty string).
- **Atomic value** = indivisible, exactly **one** value per attribute (the basis of the 1st normal form).

### Anomalies & Redundancy

Poorly structured tables lead to **redundancy** (storing data multiple times) and **anomalies**:
- **Insertion anomaly** – a new record is only possible together with unnecessary extra data
- **Update anomaly** – a value has to be changed in many places
- **Deletion anomaly** – deleting accidentally removes data that is still needed

→ Remedy: **normalisation** (see [06-03-03](./06-03-03-normalisierung.md)).

### Indexes

An **index** speeds up read/search access (like a keyword index), but **slows down** write operations (the index has to be maintained too) and needs storage. Primary keys are automatically indexed.

### Database Connection: ODBC

**ODBC** (Open Database Connectivity) is a **standardised interface** through which applications access databases independently of the specific DBMS (a driver per DBMS). The Java equivalent: **JDBC**.

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **DBMS** | Database management system |
| **CRUD** | Create, Read, Update, Delete |
| **NULL** | No value present |
| **Index** | Speeds up reading, slows down writing |
| **ODBC/JDBC** | Standardised DB access interface |

---

## Exam Tips

- **NULL ≠ 0/empty** – a common trick question.
- **Index trade-off:** fast reading ↔ slower writing.
- Be able to name the **anomalies** (insertion/update/deletion anomaly) as the motivation for normalisation.
- **ODBC** = vendor-independent DB access (new in the catalogue).

---

## Practice Exercise

**Task:** (1) Explain the three anomalies using an example table. (2) When is an index worthwhile, and when does it hurt?

---

## Cross-References

- [06-03-03 Normalisation](./06-03-03-normalisierung.md)
- [04-06 Data Integrity (ACID)](../../04-it-security/04-06-datenintegritaet.md)
