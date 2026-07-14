# Normalisation

## Learning Objectives

After this chapter you should be able to:
- Explain the goal and benefit of normalisation
- Apply the 1st, 2nd and 3rd normal form (Normalform)
- Recognise anomalies

---

## Core Content

**Goal:** avoid redundancies and **anomalies** (insertion, update, deletion anomalies) by distributing data cleanly across tables.

### 1st Normal Form (1NF)

- All attributes are **atomic** (no multiple values/lists in a single cell).
- Example violation: column `Telefon = "0123, 0456"` → split it up.

### 2nd Normal Form (2NF)

- 1NF **and** every non-key attribute depends on the **entire** primary key (no **partial** dependencies with a composite key).
- Example violation: in `Bestellposition(BestellID, ArtikelID, Artikelname)` the `Artikelname` depends only on `ArtikelID` → move it out into its own table `Artikel`.

### 3rd Normal Form (3NF)

- 2NF **and** no **transitive** dependencies (a non-key attribute depending on another non-key attribute).
- Example violation: `Kunde(KundenID, PLZ, Ort)` – `Ort` depends on `PLZ` → move `Ort` out into a table `Ort(PLZ, Ort)`.

```
Faustregel (3NF): Jedes Nicht-Schlüsselattribut hängt ab
"vom Schlüssel, vom ganzen Schlüssel und von nichts als dem Schlüssel".
```

### Anomalies (what normalisation prevents)

- **Insertion anomaly:** a new record can only be inserted together with unnecessary extra data
- **Update anomaly:** a value has to be changed in many places
- **Deletion anomaly:** deleting accidentally removes data that is still needed

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Atomic (1NF)** | Only indivisible single values per field |
| **Partial dependency (2NF)** | Dependency on part of the key |
| **Transitive dependency (3NF)** | Dependency via a non-key attribute |
| **Anomaly** | Insertion/update/deletion problem caused by redundancy |

---

## Exam Tips

- Be able to apply the three normal forms **in order** (typical GA2 task: bring a table into 3NF).
- Mnemonic for 3NF: "on the key, the whole key and nothing but the key" ("vom Schlüssel, vom ganzen Schlüssel und von nichts als dem Schlüssel").
- Be able to name the anomalies in order to justify the **benefit** of normalisation.

---

## Practice Exercise

**Task (based on ConSystem GmbH):** Convert an unnormalised order table (with multiple values and redundant customer/article data) step by step into the 1st, 2nd and 3rd normal form.

---

## Cross-References

- [06-03-02 ER Model](./06-03-02-er-modell.md)
- [06-03-01 SQL Script](./06-03-01-sql-skript.md)
