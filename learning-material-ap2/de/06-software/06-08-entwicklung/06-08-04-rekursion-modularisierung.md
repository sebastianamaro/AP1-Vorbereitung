# Rekursion, Iteration & Modularisierung

## Lernziele

Nach diesem Kapitel solltest du:
- Rekursion und Iteration unterscheiden
- Vor- und Nachteile abwägen
- Modularisierung und ihren Nutzen erklären

---

## Kerninhalt

### Rekursion vs. Iteration

- **Rekursion:** eine Funktion ruft sich **selbst** auf, bis eine **Abbruchbedingung** greift.
- **Iteration:** Wiederholung über eine **Schleife**.

```text
Rekursiv:   fakultaet(n) = n * fakultaet(n-1),  fakultaet(0) = 1
Iterativ:   ergebnis = 1;  für i von 1 bis n:  ergebnis = ergebnis * i
```

| | Rekursion | Iteration |
|--|-----------|-----------|
| Lesbarkeit | elegant bei baumartigen Problemen | oft einfacher |
| Speicher | Aufrufstack (Stack-Overflow-Gefahr) | konstant |
| Geschwindigkeit | Overhead durch Aufrufe | meist schneller |

> Wichtig: eine **Abbruchbedingung** ist zwingend, sonst Endlos-Rekursion → **Stack Overflow**.

### Modularisierung

**Modularisierung** teilt Software in **logisch zusammenhängende, unabhängige Module** (Funktionen, Klassen, Komponenten, Microservices).

Vorteile: **Wiederverwendbarkeit**, leichtere **Wartung/Fehlersuche**, **Testbarkeit**, parallele Entwicklung, geringere Kopplung.

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Rekursion** | Selbstaufruf mit Abbruchbedingung |
| **Iteration** | Wiederholung per Schleife |
| **Modularisierung** | Aufteilung in unabhängige Module |
| **Kopplung/Kohäsion** | Abhängigkeit zwischen / Zusammenhalt innerhalb Modulen |

---

## Prüfungstipps

- Rekursion braucht immer eine **Abbruchbedingung** (sonst Stack Overflow).
- Rekursion vs. Iteration mit **Speicher/Geschwindigkeit** abwägen (Fakultät als Standardbeispiel).
- Modularisierung: **niedrige Kopplung, hohe Kohäsion** anstreben.

---

## Übungsaufgabe

**Aufgabe:** Schreibe die Fakultät rekursiv und iterativ (Pseudocode) und nenne je einen Vor- und Nachteil der Rekursion.

---

## Querverweise

- [06-02-02 Sortier- und Suchalgorithmen](../06-02-programmierung/06-02-02-sortier-suchalgorithmen.md)
- [06-04-05 Paketdiagramm](../06-04-uml/06-04-05-paketdiagramm.md)
