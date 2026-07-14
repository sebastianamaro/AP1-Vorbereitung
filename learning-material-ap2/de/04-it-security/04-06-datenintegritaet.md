# Datenintegrität

## Lernziele

Nach diesem Kapitel solltest du:
- Datenintegrität über Korrektheit, Vollständigkeit und Konsistenz definieren
- Die Rolle von Transaktionen (ACID) für die Integrität erklären
- Integritätsbedingungen relationaler Datenbanken kennen

---

## Kerninhalt

### Definition

**Datenintegrität** bedeutet, dass Daten **korrekt, vollständig und konsistent** sind und unbeabsichtigt nicht verändert werden.

| Aspekt | Bedeutung |
|--------|-----------|
| **Korrektheit** | Daten geben die Realität richtig wieder |
| **Vollständigkeit** | Keine erforderlichen Daten fehlen |
| **Konsistenz** | Daten sind widerspruchsfrei (auch über Tabellen/Systeme hinweg) |

### Transaktionen und ACID

In relationalen Datenbanken sichern **Transaktionen** die Integrität. Eine Transaktion ist eine Folge von Operationen, die **als Einheit** ausgeführt wird. Sie erfüllt die **ACID**-Eigenschaften:

| Eigenschaft | Bedeutung |
|-------------|-----------|
| **Atomicity (Atomarität)** | Ganz oder gar nicht – bei Fehler **Rollback** |
| **Consistency (Konsistenz)** | Überführt die DB von einem gültigen in einen gültigen Zustand |
| **Isolation (Isolation)** | Parallele Transaktionen beeinflussen sich nicht |
| **Durability (Dauerhaftigkeit)** | Nach **Commit** bleiben Änderungen dauerhaft erhalten |

### Integritätsbedingungen (relationale DB)

- **Entitätsintegrität:** Jeder Datensatz ist über einen eindeutigen **Primärschlüssel** identifizierbar (nicht NULL, eindeutig).
- **Referentielle Integrität:** Ein **Fremdschlüssel** verweist immer auf einen existierenden Datensatz (keine „verwaisten“ Verweise).
- **Domänenintegrität:** Werte halten den erlaubten Wertebereich/Datentyp ein.

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **ACID** | Atomicity, Consistency, Isolation, Durability |
| **Transaktion** | Als Einheit ausgeführte Operationsfolge (Commit/Rollback) |
| **Referentielle Integrität** | Fremdschlüssel verweisen auf existierende Datensätze |
| **Primärschlüssel** | Eindeutiges, nicht-leeres Identifikationsmerkmal |

---

## Prüfungstipps

- **ACID** auswendig können – häufige GA2-/Datenbankfrage.
- Korrektheit/Vollständigkeit/Konsistenz als drei Aspekte der Integrität nennen.
- **Referentielle Integrität** über Fremdschlüssel erklären (Verbindung zum ER-Modell/SQL, Kapitel 06).
- Englische Fachtexte zu Transaktionen übersetzen können (Buch-Aufgabe).

---

## Übungsaufgabe

**Aufgabe (nach ConSystem GmbH):** Definiere Datenintegrität (Korrektheit, Vollständigkeit, Konsistenz) und erläutere, warum Transaktionen (ACID) für die Integrität relationaler Datenbanken wichtig sind.

---

## Querverweise

- [03-03 Begriffsbestimmungen](../03-data-protection/03-03-begriffsbestimmungen.md)
- [06-04 SQL & Datenbanken](../06-software/06-03-datenbanken/06-03-01-sql-skript.md)
