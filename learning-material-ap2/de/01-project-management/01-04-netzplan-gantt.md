# Netzplan und Gantt-Diagramm

## Lernziele

Nach diesem Kapitel solltest du:
- Einen Netzplan mit Vorwärts- und Rückwärtsrechnung erstellen
- FAZ, FEZ, SAZ, SEZ und Puffer berechnen
- Den **kritischen Pfad** bestimmen
- Den Unterschied zum Gantt-Diagramm kennen

---

## Kerninhalt

### Netzplan – Aufbau eines Knotens

In der gängigen **Vorgangsknoten**-Darstellung enthält jeder Knoten:

```
┌───────────────────────────────┐
│ FAZ │   Dauer (D)  │   FEZ     │
├─────┼──────────────┼───────────┤
│     │  Vorgang     │           │
├─────┼──────────────┼───────────┤
│ SAZ │   GP  │  FP  │   SEZ     │
└───────────────────────────────┘
```

- **FAZ** – Frühester Anfangszeitpunkt
- **FEZ** – Frühester Endzeitpunkt = FAZ + Dauer
- **SAZ** – Spätester Anfangszeitpunkt = SEZ − Dauer
- **SEZ** – Spätester Endzeitpunkt
- **GP** – Gesamtpuffer = SAZ − FAZ (= SEZ − FEZ)
- **FP** – Freier Puffer

### Vorwärtsrechnung (FAZ/FEZ)

Von vorne nach hinten: `FAZ = größter FEZ aller Vorgänger` (Start = 0), `FEZ = FAZ + Dauer`.

### Rückwärtsrechnung (SAZ/SEZ)

Von hinten nach vorne: `SEZ = kleinster SAZ aller Nachfolger` (Ende = FEZ des letzten Vorgangs), `SAZ = SEZ − Dauer`.

### Kritischer Pfad

Der **kritische Pfad** verläuft über alle Vorgänge mit **Gesamtpuffer GP = 0**. Eine Verzögerung dort verzögert das **gesamte Projekt**. Er ist der **längste** Weg durch den Netzplan und bestimmt die **Projektdauer**.

### Kleines Rechenbeispiel

| Vorgang | Dauer | Vorgänger |
|---------|-------|-----------|
| A | 3 | – |
| B | 4 | A |
| C | 2 | A |
| D | 5 | B, C |

**Vorwärts:** A: FAZ 0, FEZ 3 · B: FAZ 3, FEZ 7 · C: FAZ 3, FEZ 5 · D: FAZ 7 (max(7,5)), FEZ 12.
**Rückwärts:** D: SEZ 12, SAZ 7 · C: SEZ 7, SAZ 5 · B: SEZ 7, SAZ 3 · A: SEZ 3, SAZ 0.
**Puffer:** GP(C) = 5 − 3 = **2**; alle anderen GP = 0.
**Kritischer Pfad:** A → B → D (GP = 0), **Projektdauer 12**.

### Gantt-Diagramm

Das **Gantt-Diagramm** (Balkenplan) stellt Vorgänge als Balken auf einer Zeitachse dar – anschaulich für Dauer, Parallelität und Abhängigkeiten, aber ohne die explizite Puffer-/Pfadberechnung des Netzplans.

```
A ████
B     ██████
C     ████
D            ██████████
  └──┴──┴──┴──┴──┴──> Zeit
```

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **FAZ/FEZ** | Frühester Anfang/Ende (Vorwärtsrechnung) |
| **SAZ/SEZ** | Spätester Anfang/Ende (Rückwärtsrechnung) |
| **Gesamtpuffer (GP)** | SAZ − FAZ; Reserve ohne Projektverzögerung |
| **Kritischer Pfad** | Weg mit GP = 0; bestimmt die Projektdauer |

---

## Prüfungstipps

- **Netzpläne werden gern und punktereich geprüft.** Übe Vorwärts-/Rückwärtsrechnung, bis sie sitzt.
- Bei mehreren Vorgängern: **FAZ = Maximum** der Vorgänger-FEZ. Bei mehreren Nachfolgern: **SEZ = Minimum** der Nachfolger-SAZ.
- Kritischer Pfad = alle Knoten mit **GP = 0**; er ist zugleich der **längste** Pfad.
- Kennzeichne in der Aufgabe den kritischen Pfad **deutlich** (z. B. dicke/rote Pfeile).

---

## Übungsaufgabe

**Aufgabe (nach ConSystem GmbH):** Gegeben ist ein Softwareprojekt mit den Phasen Planung, Installation der Entwicklungssoftware, Entwurf, Implementierung, Testen, Kunden- und Testdokumentation, Übergabe (mit Dauern und Vorgängern laut Buch). Erstelle Netzplan **und** Gantt-Diagramm und markiere den kritischen Pfad. *(Vollständige Lösung im Buch, Lösungsteil.)*

---

## Querverweise

- [01-01 Grundlagen](./01-01-grundlagen.md)
- [01-05 SCRUM und KANBAN](./01-05-scrum-kanban.md)
