# Relationale Datenbanken

## Lernziele

Nach diesem Kapitel solltest du:
- Das Konzept relationaler Datenbanken verstehen
- Grundlegende Begriffe (Tabelle, Datensatz, Feld) kennen
- Primär- und Fremdschlüssel erklären können
- Beziehungen zwischen Tabellen verstehen

---

## Kerninhalt

### Was ist eine relationale Datenbank?

Eine **relationale Datenbank** speichert Daten in Tabellen, die untereinander in Beziehung stehen können.

```
┌─────────────────────────────────────────────────────────────────┐
│                 RELATIONALE DATENBANK                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │   HINWEIS: SQL ist NICHT Teil der AP1-Prüfung 2025!     │  │
│   │   SQL wurde in die AP2 verschoben.                       │  │
│   │   Hier geht es um Konzepte, nicht um Abfragen.          │  │
│   └─────────────────────────────────────────────────────────┘  │
│                                                                 │
│   Merkmale:                                                    │
│   • Daten in Tabellenform (Zeilen und Spalten)                │
│   • Tabellen können verknüpft werden (Relationen)             │
│   • Eindeutige Identifikation durch Schlüssel                 │
│   • Strukturierte Speicherung                                  │
│                                                                 │
│   Aufbau:                                                      │
│   ┌────────────────────────────────────────────────────────┐  │
│   │ Kunde                                                   │  │
│   ├──────────┬───────────┬─────────────┬──────────────────┤  │
│   │ KundenNr │ Name      │ Ort         │ PLZ              │  │
│   ├──────────┼───────────┼─────────────┼──────────────────┤  │
│   │ 1        │ Müller    │ Berlin      │ 10115            │  │
│   │ 2        │ Schmidt   │ Hamburg     │ 20095            │  │
│   │ 3        │ Weber     │ München     │ 80331            │  │
│   └──────────┴───────────┴─────────────┴──────────────────┘  │
│      ▲              ▲                                         │
│      │              │                                         │
│   Spalte         Zeile = Datensatz                           │
│   (Attribut)     (Tupel)                                     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Grundbegriffe

```
┌────────────────────────────────────────────────────────────────┐
│                     GRUNDBEGRIFFE                              │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Begriff          │ Erklärung          │ Beispiel            │
│   ─────────────────┼────────────────────┼─────────────────────│
│   Datenbank        │ Sammlung von       │ Shop-DB mit Kunden, │
│                    │ Tabellen           │ Produkten, etc.     │
│   ─────────────────┼────────────────────┼─────────────────────│
│   Tabelle          │ Struktur für       │ Tabelle "Kunde"     │
│   (Relation)       │ gleichartige Daten │                     │
│   ─────────────────┼────────────────────┼─────────────────────│
│   Datensatz        │ Eine Zeile         │ Ein Kunde           │
│   (Tupel, Record)  │ (kompetter Eintrag)│ (Nr, Name, Ort)    │
│   ─────────────────┼────────────────────┼─────────────────────│
│   Feld             │ Einzelner Wert     │ "Müller"            │
│   (Attribut)       │ in einer Zelle     │                     │
│   ─────────────────┼────────────────────┼─────────────────────│
│   Spalte           │ Alle Werte eines   │ Alle Namen          │
│   (Attribut)       │ Attributs          │                     │
│   ─────────────────┼────────────────────┼─────────────────────│
│   Datentyp         │ Art des Feldes     │ INTEGER, VARCHAR,   │
│                    │                    │ DATE, BOOLEAN       │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Schlüssel

```
┌────────────────────────────────────────────────────────────────┐
│                       SCHLÜSSEL                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   PRIMÄRSCHLÜSSEL (Primary Key, PK)                           │
│   ┌────────────────────────────────────────────────────────┐ │
│   │  • Identifiziert jeden Datensatz EINDEUTIG             │ │
│   │  • Darf nicht NULL sein                                │ │
│   │  • Darf sich nicht ändern                              │ │
│   │  • Oft: ID-Nummer (automatisch vergeben)               │ │
│   │                                                        │ │
│   │  Beispiel:                                             │ │
│   │  ┌──────────┬───────────┬─────────────┐               │ │
│   │  │ KundenNr │ Name      │ Email       │               │ │
│   │  │   (PK)   │           │             │               │ │
│   │  ├──────────┼───────────┼─────────────┤               │ │
│   │  │    1     │ Müller    │ m@mail.de   │               │ │
│   │  │    2     │ Schmidt   │ s@mail.de   │               │ │
│   │  └──────────┴───────────┴─────────────┘               │ │
│   │       ▲                                                │ │
│   │       └── Jeder Wert kommt nur EINMAL vor             │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   FREMDSCHLÜSSEL (Foreign Key, FK)                            │
│   ┌────────────────────────────────────────────────────────┐ │
│   │  • Verweis auf Primärschlüssel einer anderen Tabelle   │ │
│   │  • Stellt Beziehung zwischen Tabellen her              │ │
│   │  • Kann mehrfach vorkommen                             │ │
│   │                                                        │ │
│   │  Beispiel:                                             │ │
│   │  Tabelle "Bestellung"                                  │ │
│   │  ┌────────────┬──────────┬────────────┐               │ │
│   │  │ BestellNr  │ KundenNr │ Datum      │               │ │
│   │  │   (PK)     │   (FK)   │            │               │ │
│   │  ├────────────┼──────────┼────────────┤               │ │
│   │  │    1001    │    1     │ 2024-01-15 │               │ │
│   │  │    1002    │    2     │ 2024-01-16 │               │ │
│   │  │    1003    │    1     │ 2024-01-17 │  ← Kunde 1   │ │
│   │  └────────────┴──────────┴────────────┘     hat 2    │ │
│   │                    │                        Bestellg. │ │
│   │                    └── Verweis auf Kunde               │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Beziehungen zwischen Tabellen

```
┌────────────────────────────────────────────────────────────────┐
│                  BEZIEHUNGSARTEN                               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   1:1 BEZIEHUNG (Eins-zu-Eins)                               │
│   ┌─────────┐          ┌─────────┐                           │
│   │  Person │──────────│  Pass   │                           │
│   └─────────┘    1   1 └─────────┘                           │
│   Eine Person hat genau einen Pass                            │
│   Ein Pass gehört zu genau einer Person                       │
│                                                                │
│   ──────────────────────────────────────────────────────────  │
│                                                                │
│   1:N BEZIEHUNG (Eins-zu-Viele) - HÄUFIGSTE!                 │
│   ┌─────────┐          ┌──────────────┐                      │
│   │  Kunde  │◄─────────│  Bestellung  │                      │
│   └─────────┘    1   * └──────────────┘                      │
│   Ein Kunde hat viele Bestellungen                           │
│   Eine Bestellung gehört zu einem Kunden                     │
│                                                                │
│   Realisierung: FK in der "Viele"-Tabelle                    │
│   ┌─────────────┐      ┌───────────────────────┐             │
│   │   Kunde     │      │    Bestellung         │             │
│   ├─────────────┤      ├───────────────────────┤             │
│   │ KundenNr PK │◄─────│ BestellNr PK          │             │
│   │ Name        │      │ KundenNr FK ──────────┘             │
│   └─────────────┘      │ Datum                 │             │
│                        └───────────────────────┘             │
│                                                                │
│   ──────────────────────────────────────────────────────────  │
│                                                                │
│   M:N BEZIEHUNG (Viele-zu-Viele)                             │
│   ┌─────────┐          ┌─────────┐                           │
│   │ Student │◄────────►│  Kurs   │                           │
│   └─────────┘    *   * └─────────┘                           │
│   Ein Student besucht viele Kurse                            │
│   Ein Kurs wird von vielen Studenten besucht                 │
│                                                                │
│   Realisierung: Über Zwischentabelle!                        │
│   ┌─────────┐      ┌────────────────┐      ┌─────────┐      │
│   │ Student │      │   Belegung     │      │  Kurs   │      │
│   ├─────────┤      ├────────────────┤      ├─────────┤      │
│   │ StudNr  │◄─────│ StudNr FK      │      │ KursNr  │      │
│   │ Name    │      │ KursNr FK  ────┼─────►│ Name    │      │
│   └─────────┘      │ Semester       │      └─────────┘      │
│                    └────────────────┘                        │
│                    Verknüpfungstabelle                        │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Referentielle Integrität

```
┌────────────────────────────────────────────────────────────────┐
│               REFERENTIELLE INTEGRITÄT                         │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Regel: Fremdschlüsselwerte müssen in der                   │
│          referenzierten Tabelle existieren!                   │
│                                                                │
│   Beispiel:                                                   │
│   ┌────────────┐              ┌──────────────────┐           │
│   │   Kunde    │              │   Bestellung     │           │
│   ├────────────┤              ├──────────────────┤           │
│   │ 1 │ Müller │◄─────────────│ 1001 │ 1 │ ...  │           │
│   │ 2 │ Schmidt│              │ 1002 │ 2 │ ...  │           │
│   │   │        │              │ 1003 │ 5 │ ... ✗│           │
│   └────────────┘              └──────────────────┘           │
│                                         ▲                     │
│                                         │                     │
│                               Kunde 5 existiert nicht!        │
│                               → Verletzt referentielle        │
│                                 Integrität                    │
│                                                                │
│   Konsequenzen beim Löschen/Ändern:                          │
│   • CASCADE: Abhängige Daten werden mitgelöscht/-geändert    │
│   • RESTRICT: Löschen wird verhindert                        │
│   • SET NULL: FK wird auf NULL gesetzt                       │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### DBMS (Datenbank-Management-System)

| Begriff | Erklärung |
|---------|-----------|
| **DBMS** | Software zur Verwaltung der Datenbank |
| **Beispiele** | MySQL, PostgreSQL, Oracle, Microsoft SQL Server |
| **Aufgaben** | Speicherung, Abfrage, Sicherheit, Mehrbenutzerbetrieb |

---

### Vorteile relationaler Datenbanken

| Vorteil | Beschreibung |
|---------|--------------|
| **Datenintegrität** | Konsistenz durch Schlüssel und Regeln |
| **Redundanzminimierung** | Daten nur einmal speichern |
| **Flexibilität** | Abfragen über mehrere Tabellen |
| **Sicherheit** | Zugriffsrechte auf Tabellenebene |
| **Standardisiert** | SQL als einheitliche Sprache (AP2) |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Relation** | Tabelle in einer relationalen DB |
| **Tupel** | Zeile/Datensatz |
| **Attribut** | Spalte/Feld |
| **Primärschlüssel** | Eindeutige Identifikation (PK) |
| **Fremdschlüssel** | Verweis auf andere Tabelle (FK) |
| **Referentielle Integrität** | FK muss auf existierenden PK zeigen |
| **DBMS** | Datenbank-Management-System |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was ist ein Primärschlüssel, was ein Fremdschlüssel?
- Wie wird eine M:N-Beziehung realisiert?
- Was bedeutet referentielle Integrität?

### Wichtig zu merken

- **Primärschlüssel (PK)** = eindeutig, nie NULL
- **Fremdschlüssel (FK)** = Verweis auf PK anderer Tabelle
- **1:N** = FK in der "N"-Tabelle
- **M:N** = Zwischentabelle mit zwei FKs
- **SQL ist NICHT in AP1** (nur AP2!)

---

## Übungsaufgaben

### Aufgabe 1
Was ist der Unterschied zwischen einem Primärschlüssel und einem Fremdschlüssel?

**Lösung:**
- **Primärschlüssel (PK):** Identifiziert jeden Datensatz in einer Tabelle eindeutig. Darf nicht NULL sein und kommt nur einmal vor. Beispiel: KundenNr in der Tabelle Kunde.
- **Fremdschlüssel (FK):** Verweist auf den Primärschlüssel einer anderen Tabelle und stellt so eine Beziehung her. Kann mehrfach vorkommen. Beispiel: KundenNr in der Tabelle Bestellung.

### Aufgabe 2
Wie wird eine M:N-Beziehung zwischen "Artikel" und "Lieferant" (ein Artikel kann von mehreren Lieferanten bezogen werden, ein Lieferant liefert mehrere Artikel) realisiert?

**Lösung:**
Über eine Zwischentabelle (Verknüpfungstabelle):

```
┌─────────────┐    ┌─────────────────┐    ┌─────────────┐
│   Artikel   │    │    Lieferung    │    │  Lieferant  │
├─────────────┤    ├─────────────────┤    ├─────────────┤
│ ArtikelNr PK│◄───│ ArtikelNr FK    │    │ LiefNr PK   │
│ Bezeichnung │    │ LiefNr FK  ─────┼───►│ Name        │
│ Preis       │    │ Einkaufspreis   │    │ Adresse     │
└─────────────┘    │ Lieferzeit      │    └─────────────┘
                   └─────────────────┘
```

Die Zwischentabelle "Lieferung" enthält zwei Fremdschlüssel.

### Aufgabe 3
Warum würde folgender Datensatz gegen die referentielle Integrität verstoßen?

Tabelle Kunde: KundenNr 1, 2, 3
Neue Bestellung: BestellNr 1005, KundenNr 7

**Lösung:**
Der Verstoß entsteht, weil der Fremdschlüssel `KundenNr = 7` auf einen Primärschlüssel verweist, der in der Tabelle Kunde nicht existiert. Die referentielle Integrität verlangt, dass jeder FK-Wert einen entsprechenden PK-Wert in der referenzierten Tabelle haben muss. Kunde 7 existiert nicht, daher ist die Bestellung ungültig.

---

## Querverweise

- [06-04-02 ERD](./06-04-02-erd.md) - Entity-Relationship-Diagramm
- [06-04-03 Redundanz und Normalformen](./06-04-03-redundancy-normal-forms.md) - Datenbankoptimierung
- [06-03-01 Klassendiagramm](../06-03-uml/06-03-01-class-diagram.md) - Ähnliche Strukturdarstellung
