# Testfallentwurf & Testarten

## Lernziele

Nach diesem Kapitel solltest du:
- Äquivalenzklassen und Grenzwertanalyse anwenden
- Das FIRST-Prinzip für Unit-Tests kennen
- Last-/Performancetests und TDD einordnen

---

## Kerninhalt

### Äquivalenzklassenbildung

Der Eingaberaum wird in **Klassen mit gleichem Verhalten** aufgeteilt; pro Klasse genügt **ein** Testfall (gültige und ungültige Klassen).

*Beispiel:* Alter 18–67 gültig → Klassen: **<18** (ungültig), **18–67** (gültig), **>67** (ungültig).

### Grenzwertanalyse

Fehler treten häufig an den **Rändern** auf → teste **an und um die Grenzen**. Für 18–67: **17, 18, 19** und **66, 67, 68**.

### FIRST-Prinzip (gute Unit-Tests)

| Buchstabe | Bedeutung |
|-----------|-----------|
| **F**ast | schnell ausführbar |
| **I**solated | unabhängig von anderen Tests |
| **R**epeatable | reproduzierbar (gleiches Ergebnis) |
| **S**elf-validating | liefert klares pass/fail |
| **T**imely | zeitnah (idealerweise vor dem Code, TDD) |

### Weitere Testarten

- **TDD** – erst Test, dann Code (**Red → Green → Refactor**), siehe [02-03](./02-03-testen.md)
- **Last-/Performancetest** – Verhalten unter hoher Last / Antwortzeiten, Skalierbarkeit *(im Katalog neu)*
- **Regressionstest** – nach Änderungen sicherstellen, dass Bestehendes noch funktioniert

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Äquivalenzklasse** | Eingabegruppe mit gleichem Verhalten |
| **Grenzwertanalyse** | Test an/um die Randwerte |
| **FIRST** | Fast, Isolated, Repeatable, Self-validating, Timely |
| **Lasttest** | Verhalten unter hoher Last |

---

## Prüfungstipps

- **Äquivalenzklassen + Grenzwerte** ist ein häufiger Testfallentwurf – gültige *und* ungültige Klassen angeben, Grenzen mittesten.
- **FIRST** für Unit-Tests kennen.
- Last-/Performancetests sind im Katalog **neu** – Zweck (Last/Antwortzeit/Skalierung) nennen.

---

## Übungsaufgabe

**Aufgabe:** Für ein Eingabefeld „Menge 1–100": bilde Äquivalenzklassen und nenne die Grenzwert-Testfälle.

<details>
<summary>Lösung</summary>

Klassen: <1 (ungültig), 1–100 (gültig), >100 (ungültig). Grenzwerte: 0, 1, 2 und 99, 100, 101.

</details>

---

## Querverweise

- [02-03 Testen von Software](./02-03-testen.md)
- [02-04 Dynamische Testverfahren](./02-04-dynamische-testverfahren.md)
