# Datenbank-Grundlagen

## Lernziele

Nach diesem Kapitel solltest du:
- DBMS, relationale und NoSQL-Datenbanken einordnen
- CRUD, NULL und Atomarität erklären
- Anomalien, Indizes und ODBC kennen

---

## Kerninhalt

### DBMS & Datenbankmodelle

Ein **DBMS** (Datenbank-Managementsystem) verwaltet Daten zentral (Zugriff, Integrität, Mehrbenutzer, Transaktionen).

| Modell | Merkmal | Beispiele |
|--------|---------|-----------|
| **Relational (SQL)** | Tabellen mit Beziehungen, Schema | MySQL, PostgreSQL |
| **NoSQL** | flexibel/schemalos (Dokument, Key-Value, Graph) | MongoDB, Redis |

### CRUD

Die vier Grundoperationen: **C**reate (INSERT), **R**ead (SELECT), **U**pdate (UPDATE), **D**elete (DELETE).

### NULL & Atomarität

- **NULL** = *kein Wert vorhanden* (nicht 0, nicht leerer String).
- **Atomarer Wert** = unteilbar, genau **ein** Wert pro Attribut (Grundlage der 1. Normalform).

### Anomalien & Redundanz

Schlecht strukturierte Tabellen führen zu **Redundanz** (Mehrfachspeicherung) und **Anomalien**:
- **Einfügeanomalie** – neuer Datensatz nur mit unnötigen Zusatzdaten möglich
- **Änderungsanomalie** – ein Wert muss an vielen Stellen geändert werden
- **Löschanomalie** – Löschen entfernt versehentlich noch benötigte Daten

→ Gegenmittel: **Normalisierung** (siehe [06-03-03](./06-03-03-normalisierung.md)).

### Indizes

Ein **Index** beschleunigt Lesezugriffe/Suchen (wie ein Stichwortverzeichnis), **verlangsamt** aber Schreibvorgänge (Index muss mitgepflegt werden) und braucht Speicher. Primärschlüssel sind automatisch indexiert.

### Datenbankanbindung: ODBC

**ODBC** (Open Database Connectivity) ist eine **standardisierte Schnittstelle**, über die Anwendungen unabhängig vom konkreten DBMS auf Datenbanken zugreifen (Treiber je DBMS). Analog in Java: **JDBC**.

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **DBMS** | Datenbank-Managementsystem |
| **CRUD** | Create, Read, Update, Delete |
| **NULL** | Kein Wert vorhanden |
| **Index** | Beschleunigt Lesen, verlangsamt Schreiben |
| **ODBC/JDBC** | Standardisierte DB-Zugriffsschnittstelle |

---

## Prüfungstipps

- **NULL ≠ 0/leer** – häufige Fangfrage.
- **Index-Trade-off:** schnelles Lesen ↔ langsameres Schreiben.
- **Anomalien** benennen können (Einfüge-/Änderungs-/Löschanomalie) als Motivation der Normalisierung.
- **ODBC** = herstellerunabhängiger DB-Zugriff (im Katalog neu).

---

## Übungsaufgabe

**Aufgabe:** (1) Erkläre die drei Anomalien an einer Beispieltabelle. (2) Wann lohnt ein Index, wann schadet er?

---

## Querverweise

- [06-03-03 Normalisierung](./06-03-03-normalisierung.md)
- [04-06 Datenintegrität (ACID)](../../04-it-security/04-06-datenintegritaet.md)
