# Netzplantechnik

## Lernziele

Nach diesem Kapitel solltest du:
- Den Aufbau eines Netzplans verstehen
- FAZ, FEZ, SAZ, SEZ berechnen können
- Gesamtpuffer und Freien Puffer berechnen können
- Den kritischen Pfad bestimmen können

---

## Kerninhalt

### Was ist ein Netzplan?

Der **Netzplan** ist eine grafische Methode zur Darstellung von Projektabläufen und deren zeitlichen Abhängigkeiten. Er ermöglicht die Berechnung von Pufferzeiten und die Identifikation des kritischen Pfads.

> **WICHTIG für die Prüfung:** Die Netzplantechnik ist eines der am häufigsten geprüften Themen!

---

### Aufbau eines Vorgangsknotens

```
┌─────────────────────────────────┐
│   FAZ                    FEZ    │
│ ┌──────────┬────────────────┐   │
│ │ Vorgang  │  Beschreibung  │   │
│ ├──────────┼──────┬─────────┤   │
│ │  Dauer   │  GP  │   FP    │   │
│ └──────────┴──────┴─────────┘   │
│   SAZ                    SEZ    │
└─────────────────────────────────┘
```

---

### Begriffe und Abkürzungen

| Kürzel | Begriff | Erklärung |
|--------|---------|-----------|
| **FAZ** | Frühester Anfangszeitpunkt | Frühester möglicher Starttermin |
| **FEZ** | Frühester Endzeitpunkt | Frühester möglicher Endtermin |
| **SAZ** | Spätester Anfangszeitpunkt | Spätester Starttermin ohne Projektverzögerung |
| **SEZ** | Spätester Endzeitpunkt | Spätester Endtermin ohne Projektverzögerung |
| **GP** | Gesamtpuffer | Zeitreserve ohne Projektverzögerung |
| **FP** | Freier Puffer | Zeitreserve ohne Beeinflussung des Nachfolgers |
| **Dauer** | Vorgangsdauer | Zeit für den Vorgang in Zeiteinheiten |

---

### Berechnungsformeln

#### Vorwärtsrechnung (FAZ und FEZ)

**Start:** FAZ des ersten Vorgangs = 0 (oder 1, je nach Konvention)

```
FEZ = FAZ + Dauer
FAZ (Nachfolger) = max(FEZ aller Vorgänger)
```

#### Rückwärtsrechnung (SAZ und SEZ)

**Start:** SEZ des letzten Vorgangs = FEZ des letzten Vorgangs

```
SAZ = SEZ - Dauer
SEZ (Vorgänger) = min(SAZ aller Nachfolger)
```

#### Pufferberechnung

```
Gesamtpuffer (GP) = SAZ - FAZ = SEZ - FEZ
Freier Puffer (FP) = FAZ (Nachfolger) - FEZ (aktueller Vorgang)
```

---

### Der kritische Pfad

Der **kritische Pfad** ist der längste Pfad durch den Netzplan. Er bestimmt die **minimale Projektdauer**.

**Eigenschaften:**
- Vorgänge auf dem kritischen Pfad haben **GP = 0**
- Jede Verzögerung auf dem kritischen Pfad verzögert das gesamte Projekt
- Es kann mehrere kritische Pfade geben

---

### Beispielrechnung

**Vorgangsliste:**

| Vorgang | Dauer | Vorgänger |
|---------|-------|-----------|
| A | 3 | - |
| B | 4 | A |
| C | 2 | A |
| D | 5 | B, C |

**Schritt 1: Vorwärtsrechnung**

```
Vorgang A: FAZ=0, FEZ=0+3=3
Vorgang B: FAZ=3, FEZ=3+4=7
Vorgang C: FAZ=3, FEZ=3+2=5
Vorgang D: FAZ=max(7,5)=7, FEZ=7+5=12
```

**Projektdauer: 12 Zeiteinheiten**

**Schritt 2: Rückwärtsrechnung**

```
Vorgang D: SEZ=12, SAZ=12-5=7
Vorgang B: SEZ=7, SAZ=7-4=3
Vorgang C: SEZ=7, SAZ=7-2=5
Vorgang A: SEZ=min(3,5)=3, SAZ=3-3=0
```

**Schritt 3: Pufferberechnung**

| Vorgang | GP (SAZ-FAZ) | Kritisch? |
|---------|--------------|-----------|
| A | 0-0=0 | JA |
| B | 3-3=0 | JA |
| C | 5-3=2 | NEIN |
| D | 7-7=0 | JA |

**Kritischer Pfad: A → B → D**

---

### Grafische Darstellung

```
        ┌───────────────┐
        │  0       3    │
        │ ┌───┬───────┐ │
        │ │ A │Analyse│ │
        │ ├───┼───┬───┤ │
        │ │ 3 │ 0 │ 0 │ │
        │ └───┴───┴───┘ │
        │  0       3    │
        └───────┬───────┘
                │
       ┌────────┴────────┐
       ▼                 ▼
┌───────────────┐  ┌───────────────┐
│  3       7    │  │  3       5    │
│ ┌───┬───────┐ │  │ ┌───┬───────┐ │
│ │ B │Planung│ │  │ │ C │Design │ │
│ ├───┼───┬───┤ │  │ ├───┼───┬───┤ │
│ │ 4 │ 0 │ 0 │ │  │ │ 2 │ 2 │ 2 │ │
│ └───┴───┴───┘ │  │ └───┴───┴───┘ │
│  3       7    │  │  5       7    │
└───────┬───────┘  └───────┬───────┘
        │                  │
        └────────┬─────────┘
                 ▼
        ┌───────────────┐
        │  7      12    │
        │ ┌───┬───────┐ │
        │ │ D │Modul  │ │
        │ ├───┼───┬───┤ │
        │ │ 5 │ 0 │ 0 │ │
        │ └───┴───┴───┘ │
        │  7      12    │
        └───────────────┘
```

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Netzplan** | Grafische Darstellung von Projektabläufen mit Abhängigkeiten |
| **Kritischer Pfad** | Längster Pfad durch das Projekt, bestimmt Mindestdauer |
| **Puffer** | Zeitreserve, um die ein Vorgang verzögert werden kann |
| **Vorwärtsrechnung** | Berechnung von FAZ und FEZ von Anfang zum Ende |
| **Rückwärtsrechnung** | Berechnung von SAZ und SEZ vom Ende zum Anfang |

---

## Prüfungstipps

### Typische Aufgabenstellungen
1. FAZ, FEZ, SAZ, SEZ berechnen
2. Gesamtpuffer berechnen
3. Kritischen Pfad bestimmen
4. Projektdauer ermitteln
5. Netzplan zeichnen

### Häufige Fehler vermeiden
- Bei mehreren Vorgängern: **Maximum** für FAZ nehmen
- Bei mehreren Nachfolgern: **Minimum** für SEZ nehmen
- GP = 0 bedeutet: Vorgang ist kritisch!
- Rechenweg immer dokumentieren

---

## Übungsaufgaben

### Aufgabe 1
Berechnen Sie FAZ, FEZ, SAZ, SEZ und GP für alle Vorgänge:

| Vorgang | Dauer | Vorgänger |
|---------|-------|-----------|
| A | 2 | - |
| B | 3 | A |
| C | 4 | A |
| D | 1 | B, C |

**Lösung:**

| Vorgang | FAZ | FEZ | SAZ | SEZ | GP |
|---------|-----|-----|-----|-----|-----|
| A | 0 | 2 | 0 | 2 | 0 |
| B | 2 | 5 | 3 | 6 | 1 |
| C | 2 | 6 | 2 | 6 | 0 |
| D | 6 | 7 | 6 | 7 | 0 |

Kritischer Pfad: A → C → D
Projektdauer: 7 Zeiteinheiten

### Aufgabe 2
Was bedeutet ein Gesamtpuffer von 0?

**Lösung:** Der Vorgang liegt auf dem kritischen Pfad. Jede Verzögerung dieses Vorgangs verzögert das gesamte Projekt.

---

## Querverweise

- [01-02-01 Gantt-Diagramm](./01-02-01-gantt-chart.md) - Zeitliche Darstellung
- [01-01-02 Projektphasen](../01-01-fundamentals/01-01-02-project-phases.md) - Projektplanung
- [08-02-03 Nutzwertanalyse](../../08-business-processes/08-02-economics/08-02-03-utility-analysis.md) - Weiteres häufiges Prüfungsthema
