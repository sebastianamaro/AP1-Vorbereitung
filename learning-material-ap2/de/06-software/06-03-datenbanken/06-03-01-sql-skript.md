# SQL-Skript

## Lernziele

Nach diesem Kapitel solltest du:
- DDL- und DML-Befehle unterscheiden
- Tabellen mit CREATE TABLE anlegen (inkl. Schlüssel)
- Daten einfügen und mit SELECT (inkl. JOIN) abfragen

---

## Kerninhalt

### SQL-Kategorien

| Kategorie | Zweck | Befehle |
|-----------|-------|---------|
| **DDL** (Data Definition) | Struktur | `CREATE`, `ALTER`, `DROP` |
| **DML** (Data Manipulation) | Daten | `INSERT`, `UPDATE`, `DELETE`, `SELECT` |
| **DCL** (Data Control) | Rechte | `GRANT`, `REVOKE` |

### Tabelle anlegen (DDL)

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

- **PRIMARY KEY** – eindeutiger Schlüssel
- **FOREIGN KEY … REFERENCES** – Fremdschlüssel (referentielle Integrität)

### Daten einfügen (DML)

```sql
INSERT INTO Kategorie (Bezeichnung) VALUES ('Hardware');
INSERT INTO Artikel (Name, Preis, KategorieID) VALUES ('SSD 1TB', 79.90, 1);
```

### Abfragen

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

- **WHERE** filtert Zeilen, **GROUP BY** gruppiert, **HAVING** filtert Gruppen.
- **JOIN**-Arten: INNER, LEFT/RIGHT (OUTER).
- Aggregatfunktionen: `COUNT, SUM, AVG, MIN, MAX`.

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **DDL/DML** | Struktur- vs. Daten-Befehle |
| **PRIMARY/FOREIGN KEY** | Primär-/Fremdschlüssel |
| **JOIN** | Verknüpfung von Tabellen |
| **WHERE vs. HAVING** | Zeilen- vs. Gruppenfilter |

---

## Prüfungstipps

- **SQL ist in GA2 relevant** (aus AP1 nach AP2 verschoben) – `CREATE TABLE`, `INSERT`, `SELECT` mit `JOIN`/`WHERE`/`GROUP BY` üben.
- **WHERE (Zeilen) vs. HAVING (Gruppen)** – häufige Fangfrage.
- Fremdschlüssel korrekt setzen (referentielle Integrität, siehe [04-06](../../04-it-security/04-06-datenintegritaet.md)).

---

## Übungsaufgabe

**Aufgabe (nach ConSystem GmbH):** Schreibe ein SQL-Skript, das die Tabellen `Kategorie` und `Artikel` (mit Fremdschlüssel) erzeugt und mit Beispieldaten füllt, sowie eine Abfrage aller Artikel je Kategorie.

---

## Querverweise

- [06-03-02 ER-Modell](./06-03-02-er-modell.md)
- [06-03-03 Normalisierung](./06-03-03-normalisierung.md)
