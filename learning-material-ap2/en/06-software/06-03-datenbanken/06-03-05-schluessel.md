# Keys & Referential Integrity

## Learning Objectives

After this chapter you should be able to:
- Distinguish primary, foreign and composite keys
- Explain referential integrity
- Apply the constraint actions (CASCADE, SET NULL, RESTRICT)

---

## Core Content

### Types of Key

| Key | Meaning |
|-----|---------|
| **Primary key (PK)** | unique identification; **NOT NULL**, no duplicates, **at most one** per table |
| **Foreign key (FK)** | references the PK of another table |
| **Composite key** | PK made up of **several** columns |
| **Candidate key** | possible PKs; one is chosen |

**Composite key example:** table `teilnahmen(person_id, event_id)` – the combination is unique (a person takes part in an event only once).

### Referential Integrity

A **foreign key** must always reference an **existing** record (no "orphaned" references). The DBMS enforces this.

### Constraint Actions (ON DELETE / ON UPDATE)

What happens to FK rows when the referenced record is changed/deleted?

| Action | Behaviour |
|--------|-----------|
| **CASCADE** | the change/deletion is **passed on** (dependent rows too) |
| **SET NULL** | the FK is set to **NULL** |
| **SET DEFAULT** | the FK is set to the **default value** |
| **RESTRICT / NO ACTION** | the action is **prevented** as long as references exist |

```sql
FOREIGN KEY (kunden_id) REFERENCES kunden(id)
    ON DELETE CASCADE
    ON UPDATE RESTRICT;
```

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Primary key** | Unique, NOT NULL, one per table |
| **Foreign key** | Reference to a PK |
| **Referential integrity** | FK always references an existing record |
| **CASCADE / SET NULL / RESTRICT** | Behaviour on change/deletion |

---

## Exam Tips

- Confidently state the PK rules (unique, NOT NULL, one per table).
- **n:m** is resolved via a **composite key** in the junction table.
- **CASCADE vs. RESTRICT vs. SET NULL** – typical task: determine the behaviour on deletion.

---

## Practice Exercise

**Task:** Define a foreign key for `bestellung.kunden_id` and decide, with justification, between `ON DELETE CASCADE` and `ON DELETE RESTRICT` when a customer is deleted.

---

## Cross-References

- [06-03-02 ER Model](./06-03-02-er-modell.md)
- [04-06 Data Integrity](../../04-it-security/04-06-datenintegritaet.md)
