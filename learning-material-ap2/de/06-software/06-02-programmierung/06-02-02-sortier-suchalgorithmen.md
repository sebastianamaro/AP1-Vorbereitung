# Sortier- und Suchalgorithmen

## Lernziele

Nach diesem Kapitel solltest du:
- Wichtige Sortierverfahren beschreiben und vergleichen
- Lineare und binäre Suche unterscheiden
- Die O-Notation grob einordnen

---

## Kerninhalt

### Suchalgorithmen

| Verfahren | Voraussetzung | Komplexität | Idee |
|-----------|---------------|-------------|------|
| **Lineare Suche** | keine | O(n) | Element für Element durchgehen |
| **Binäre Suche** | **sortierte** Daten | O(log n) | Suchbereich halbieren (Mitte vergleichen) |

> Binäre Suche ist viel schneller, setzt aber **Sortierung** voraus.

### Sortieralgorithmen

| Verfahren | Idee | Durchschnitt | Stabil? |
|-----------|------|--------------|---------|
| **Bubble Sort** | benachbarte Elemente tauschen, „größte blubbern nach oben“ | O(n²) | ja |
| **Selection Sort** | jeweils kleinstes Element auswählen und nach vorn stellen | O(n²) | nein |
| **Insertion Sort** | Element in bereits sortierten Teil einsortieren | O(n²) | ja |
| **Quicksort** | Teile-und-herrsche mit Pivot | O(n log n), worst O(n²) | nein |
| **Mergesort** | Teilen, sortieren, zusammenführen | O(n log n) | ja |

- **Einfache Verfahren** (Bubble/Selection/Insertion): O(n²), leicht zu verstehen, für kleine Datenmengen.
- **Effiziente Verfahren** (Quicksort/Mergesort): O(n log n), für große Datenmengen.

### O-Notation (Landau)

Beschreibt das **Wachstum** des Aufwands mit der Eingabegröße n:

`O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ)`

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **O-Notation** | Beschreibt asymptotisches Laufzeitwachstum |
| **Binäre Suche** | Halbierungssuche auf sortierten Daten, O(log n) |
| **Teile und herrsche** | Problem rekursiv zerlegen (Quicksort, Mergesort) |
| **Stabilität** | Gleiche Elemente behalten ihre Reihenfolge |

---

## Prüfungstipps

- **Binäre Suche braucht sortierte Daten** – häufige Fangfrage.
- Komplexitäten der Standardverfahren kennen (einfach = O(n²), Quick/Merge = O(n log n)).
- Typische Aufgabe: einen Sortierdurchlauf **Schritt für Schritt** vorführen (z. B. Bubble Sort auf einer kleinen Liste).

---

## Übungsaufgabe

**Aufgabe (nach ConSystem GmbH):** (1) Vergleiche lineare und binäre Suche. (2) Führe einen Durchlauf von Bubble Sort auf der Liste [5, 2, 8, 1] vor.

<details>
<summary>Lösungshinweis</summary>

Bubble-Durchlauf 1: [2,5,8,1] → [2,5,8,1] → [2,5,1,8]; nach weiteren Durchläufen: [1,2,5,8].

</details>

---

## Querverweise

- [06-02-04 Analyse von Pseudocode](./06-02-04-pseudocode-analyse.md)
- [06-02-03 Objektorientierung (OOP)](./06-02-03-oop.md)
