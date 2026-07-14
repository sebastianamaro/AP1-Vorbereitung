# SQL Script

## Learning Objectives

After this chapter you should be able to:
- Distinguish DDL and DML commands
- Create tables with CREATE TABLE (including keys)
- Insert data and query it with SELECT (including JOIN)

---

## Core Content

### SQL Categories

| Category | Purpose | Commands |
|----------|---------|----------|
| **DDL** (Data Definition) | Structure | `CREATE`, `ALTER`, `DROP` |
| **DML** (Data Manipulation) | Data | `INSERT`, `UPDATE`, `DELETE`, `SELECT` |
| **DCL** (Data Control) | Permissions | `GRANT`, `REVOKE` |

### Creating a Table (DDL)

```sql
CREATE TABLE Kategorie (
    KategorieID   INT           PRIMARY KEY AUTO_INCREMENT,
    Bezeichnung   VARCHAR(50)   NOT NULL
);

CREATE TABLE Artikel (
    ArtikelID     INT           PRIMARY KEY AUTO_INCREMENT,
    Name          VARCHAR(100)  NOT NULL,
    Preis         DECIMAL(8,2)  NOT NULL,
    KategorieID   INT,
    FOREIGN KEY (KategorieID) REFERENCES Kategorie(KategorieID)
);
```

- **PRIMARY KEY** – unique key
- **FOREIGN KEY … REFERENCES** – foreign key (referential integrity)

### Inserting Data (DML)

```sql
INSERT INTO Kategorie (Bezeichnung) VALUES ('Hardware');
INSERT INTO Artikel (Name, Preis, KategorieID) VALUES ('SSD 1TB', 79.90, 1);
```

### Queries

```sql
SELECT Name, Preis FROM Artikel
WHERE Preis < 100
ORDER BY Preis DESC;

-- JOIN über zwei Tabellen
SELECT a.Name, k.Bezeichnung
FROM Artikel a
JOIN Kategorie k ON a.KategorieID = k.KategorieID;

-- Aggregat mit Gruppierung
SELECT KategorieID, COUNT(*) AS Anzahl, AVG(Preis) AS Schnitt
FROM Artikel
GROUP BY KategorieID
HAVING COUNT(*) > 1;
```

- **WHERE** filters rows, **GROUP BY** groups, **HAVING** filters groups.
- **JOIN** types: INNER, LEFT/RIGHT (OUTER).
- Aggregate functions: `COUNT, SUM, AVG, MIN, MAX`.

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **DDL/DML** | Structure vs. data commands |
| **PRIMARY/FOREIGN KEY** | Primary/foreign key |
| **JOIN** | Linking of tables |
| **WHERE vs. HAVING** | Row vs. group filter |

---

## Exam Tips

- **SQL is relevant in GA2** (moved from AP1 to AP2) – practise `CREATE TABLE`, `INSERT`, `SELECT` with `JOIN`/`WHERE`/`GROUP BY`.
- **WHERE (rows) vs. HAVING (groups)** – a common trick question.
- Set foreign keys correctly (referential integrity, see [04-06](../../04-it-security/04-06-datenintegritaet.md)).

---

## Practice Exercise

**Task (based on ConSystem GmbH):** Write an SQL script that creates the tables `Kategorie` and `Artikel` (with a foreign key) and fills them with sample data, plus a query of all articles per category.

---

## Cross-References

- [06-03-02 ER Model](./06-03-02-er-modell.md)
- [06-03-03 Normalisation](./06-03-03-normalisierung.md)
