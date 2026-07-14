# Testen von Software

## Lernziele

Nach diesem Kapitel solltest du:
- Testgetriebene Entwicklung (TDD) erklären
- Black-Box- und White-Box-Tests unterscheiden
- Die wichtigsten Teststufen einordnen

---

## Kerninhalt

### Testgetriebene Entwicklung (TDD)

Bei der **testgetriebenen Entwicklung** wird **zuerst der Test** geschrieben, dann der Code, der ihn erfüllt. Zyklus:

1. **Red** – fehlschlagenden Test schreiben
2. **Green** – minimalen Code schreiben, bis der Test grün ist
3. **Refactor** – Code verbessern, Tests bleiben grün

Vorteile: hohe Testabdeckung, klare Anforderungen, sicheres Refactoring.

### Black-Box vs. White-Box

| | Black-Box-Test | White-Box-Test |
|--|----------------|----------------|
| **Sicht** | nur Verhalten (Ein-/Ausgabe), **ohne** Kenntnis des Codes | **mit** Kenntnis der internen Struktur/des Quellcodes |
| **Grundlage** | Spezifikation/Anforderungen | Programmlogik, Kontrollfluss |
| **Beispiele** | Äquivalenzklassen, Grenzwertanalyse | Überdeckungsmaße (Anweisung/Zweig/Pfad) |
| **Findet** | fehlende/falsche Funktionen | nicht erreichte Codepfade, Logikfehler |

*Grey-Box* kombiniert beide Sichten.

### Teststufen (V-Modell)

- **Modul-/Unittest** – einzelne Komponente
- **Integrationstest** – Zusammenspiel der Komponenten
- **Systemtest** – Gesamtsystem gegen Anforderungen
- **Abnahmetest** – durch den Kunden (Akzeptanz)

### Statisch vs. dynamisch

- **Statisch:** ohne Ausführung (Review, statische Code-Analyse)
- **Dynamisch:** mit Ausführung (Testfälle, siehe [Dynamische Testverfahren](./02-04-dynamische-testverfahren.md))

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **TDD** | Test zuerst, dann Code (Red-Green-Refactor) |
| **Black-Box** | Test ohne Kenntnis des Codes |
| **White-Box** | Test mit Kenntnis der Codestruktur |
| **Abnahmetest** | Akzeptanztest durch den Kunden |

---

## Prüfungstipps

- **Black-Box vs. White-Box** ist eine Standard-Vergleichsfrage – Sicht, Grundlage und je ein Beispiel nennen.
- TDD als **agile** Praxis einordnen (siehe [Vorgehensmodelle](../01-project-management/01-03-vorgehensmodelle.md)).
- Teststufen in der richtigen Reihenfolge (Unit → Integration → System → Abnahme).

---

## Übungsaufgabe

**Aufgabe (nach ConSystem GmbH):** Erkläre einem Kunden (1) testgetriebene Entwicklung und (2) den Unterschied zwischen Black-Box- und White-Box-Tests.

---

## Querverweise

- [02-04 Dynamische Testverfahren](./02-04-dynamische-testverfahren.md)
- [06-05 Debugging](../06-software/06-06-qualitaet-ux/06-06-01-debugging.md)
