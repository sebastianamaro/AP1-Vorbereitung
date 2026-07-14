# Normalisierung

## Lernziele

Nach diesem Kapitel solltest du:
- Ziel und Nutzen der Normalisierung erklären
- Die 1., 2. und 3. Normalform anwenden
- Anomalien erkennen

---

## Kerninhalt

**Ziel:** Redundanzen und **Anomalien** (Einfüge-, Änderungs-, Löschanomalien) vermeiden, indem Daten sauber auf Tabellen verteilt werden.

### 1. Normalform (1NF)

- Alle Attribute sind **atomar** (keine Mehrfachwerte/Listen in einer Zelle).
- Beispiel-Verstoß: Spalte `Telefon = "0123, 0456"` → auftrennen.

### 2. Normalform (2NF)

- 1NF **und** jedes Nicht-Schlüsselattribut hängt vom **gesamten** Primärschlüssel ab (keine **partiellen** Abhängigkeiten bei zusammengesetztem Schlüssel).
- Beispiel-Verstoß: In `Bestellposition(BestellID, ArtikelID, Artikelname)` hängt `Artikelname` nur von `ArtikelID` ab → in eigene Tabelle `Artikel` auslagern.

### 3. Normalform (3NF)

- 2NF **und** keine **transitiven** Abhängigkeiten (Nicht-Schlüsselattribut hängt von einem anderen Nicht-Schlüsselattribut ab).
- Beispiel-Verstoß: `Kunde(KundenID, PLZ, Ort)` – `Ort` hängt von `PLZ` ab → `Ort` in Tabelle `Ort(PLZ, Ort)` auslagern.

```
Faustregel (3NF): Jedes Nicht-Schlüsselattribut hängt ab
"vom Schlüssel, vom ganzen Schlüssel und von nichts als dem Schlüssel".
```

### Anomalien (was Normalisierung verhindert)

- **Einfügeanomalie:** neuer Datensatz nur mit unnötigen Zusatzdaten einfügbar
- **Änderungsanomalie:** ein Wert muss an vielen Stellen geändert werden
- **Löschanomalie:** Löschen entfernt versehentlich noch benötigte Daten

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Atomar (1NF)** | Nur unteilbare Einzelwerte je Feld |
| **Partielle Abhängigkeit (2NF)** | Abhängigkeit von einem Teil des Schlüssels |
| **Transitive Abhängigkeit (3NF)** | Abhängigkeit über ein Nicht-Schlüsselattribut |
| **Anomalie** | Einfüge-/Änderungs-/Löschproblem durch Redundanz |

---

## Prüfungstipps

- Die drei Normalformen **in Reihenfolge** anwenden können (typische GA2-Aufgabe: Tabelle in 3NF überführen).
- Merksatz zur 3NF: „vom Schlüssel, vom ganzen Schlüssel und von nichts als dem Schlüssel“.
- Anomalien benennen können, um den **Nutzen** der Normalisierung zu begründen.

---

## Übungsaufgabe

**Aufgabe (nach ConSystem GmbH):** Überführe eine unnormalisierte Bestelltabelle (mit Mehrfachwerten und redundanten Kunden-/Artikeldaten) schrittweise in die 1., 2. und 3. Normalform.

---

## Querverweise

- [06-03-02 ER-Modell](./06-03-02-er-modell.md)
- [06-03-01 SQL-Skript](./06-03-01-sql-skript.md)
