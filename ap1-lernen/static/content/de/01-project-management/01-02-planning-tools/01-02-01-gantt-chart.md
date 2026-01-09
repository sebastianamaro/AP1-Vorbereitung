# Gantt-Diagramm

## Lernziele

Nach diesem Kapitel solltest du:
- Den Aufbau eines Gantt-Diagramms verstehen
- Ein Gantt-Diagramm lesen und interpretieren können
- Den kritischen Pfad im Gantt-Diagramm erkennen
- Einfache Gantt-Diagramme selbst erstellen können

---

## Kerninhalt

### Was ist ein Gantt-Diagramm?

Das **Gantt-Diagramm** (auch Balkenplan) ist ein Werkzeug zur grafischen Darstellung von Projektabläufen. Es zeigt Vorgänge als horizontale Balken auf einer Zeitachse.

**Benannt nach:** Henry Laurence Gantt (1861-1919), US-amerikanischer Ingenieur

---

### Aufbau eines Gantt-Diagramms

```
Vorgang        | Woche 1 | Woche 2 | Woche 3 | Woche 4 | Woche 5 | Woche 6
---------------|---------|---------|---------|---------|---------|--------
A: Analyse     | ████    |         |         |         |         |
B: Planung     |         | ████████████      |         |         |
C: Design 1    |         | ██████████        |         |         |
D: Modul 1     |         |         |         | ████████████████████
E: Design 2    |         |         | ████████████      |         |
F: Modul 2     |         |         |         |         | ████████████████
G: Test        |         |         | ██████████████████|         |
H: Übergabe    |         |         |         |         |         | ██████
```

**Elemente:**
- **Vertikale Achse:** Liste der Vorgänge/Arbeitspakete
- **Horizontale Achse:** Zeitachse (Tage, Wochen, Monate)
- **Balken:** Dauer der einzelnen Vorgänge
- **Abhängigkeiten:** Verbindungslinien zwischen Balken (optional)

---

### Vorteile des Gantt-Diagramms

| Vorteil | Erklärung |
|---------|-----------|
| **Übersichtlichkeit** | Zeitlicher Ablauf auf einen Blick erkennbar |
| **Einfach zu verstehen** | Keine spezielle Schulung erforderlich |
| **Fortschrittskontrolle** | Soll-Ist-Vergleich möglich |
| **Parallele Vorgänge** | Überlappungen sofort sichtbar |

### Nachteile des Gantt-Diagramms

| Nachteil | Erklärung |
|----------|-----------|
| **Abhängigkeiten** | Nicht so klar wie im Netzplan |
| **Komplexe Projekte** | Bei vielen Vorgängen unübersichtlich |
| **Kritischer Pfad** | Nicht direkt erkennbar (Zusatzmarkierung nötig) |

---

### Der kritische Pfad im Gantt-Diagramm

Der **kritische Pfad** ist die Folge von Vorgängen, die die Gesamtdauer des Projekts bestimmt. Vorgänge auf dem kritischen Pfad haben **keinen Puffer** - jede Verzögerung verlängert das Projekt.

**Kennzeichnung im Gantt-Diagramm:**
- Oft rot markierte Balken
- Oder besondere Schraffur

```
Vorgang        | Woche 1 | Woche 2 | Woche 3 | Woche 4 | Woche 5 | Woche 6
---------------|---------|---------|---------|---------|---------|--------
A: Analyse     | ████    |         |         |         |         |   ← KRITISCH
B: Planung     |         | ████████████      |         |         |   ← KRITISCH
D: Modul 1     |         |         |         | ████████████████████ ← KRITISCH
F: Modul 2     |         |         |         |         | ████████████████ ← KRITISCH
H: Übergabe    |         |         |         |         |         | ██████ ← KRITISCH
```

---

### Gantt-Diagramm erstellen

**Schritt 1:** Vorgänge mit Dauer und Vorgängern auflisten

| Phase | Beschreibung | Dauer | Vorgänger |
|-------|-------------|-------|-----------|
| A | Analyse | 1 | - |
| B | Planung | 4 | A |
| C | Design 1 | 3 | A |
| D | Modul 1 | 6 | C, B |
| E | Design 2 | 4 | B |
| F | Modul 2 | 8 | E, D |
| G | Test | 5 | C |
| H | Übergabe | 3 | F, G |

**Schritt 2:** Zeitachse einzeichnen

**Schritt 3:** Balken für jeden Vorgang einzeichnen
- Beginn: Wenn alle Vorgänger abgeschlossen sind
- Länge: Entsprechend der Dauer

**Schritt 4:** Kritischen Pfad markieren

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Gantt-Diagramm** | Balkendiagramm zur Darstellung von Projektabläufen |
| **Vorgang** | Einzelne Aktivität/Arbeitspaket im Projekt |
| **Vorgänger** | Vorgang, der abgeschlossen sein muss, bevor der nächste beginnt |
| **Kritischer Pfad** | Längster Pfad durch das Projekt (bestimmt Gesamtdauer) |
| **Meilenstein** | Markierter Zeitpunkt (oft als Raute dargestellt) |

---

## Prüfungstipps

### Was wird geprüft?
- Gantt-Diagramm aus Vorgangsliste erstellen
- Kritischen Pfad identifizieren
- Dauer des Projekts ablesen
- Parallele Vorgänge erkennen

### Typische Fehler vermeiden
- Vorgänger-Beziehungen beachten!
- Bei mehreren Vorgängern: Warten bis ALLE fertig sind
- Sauber zeichnen (Lineal verwenden)

---

## Übungsaufgaben

### Aufgabe 1
Gegeben ist folgende Vorgangsliste. Erstellen Sie ein Gantt-Diagramm.

| Vorgang | Dauer (Tage) | Vorgänger |
|---------|--------------|-----------|
| A | 2 | - |
| B | 3 | A |
| C | 4 | A |
| D | 2 | B, C |

**Lösung:**
```
Vorgang | Tag 1 | Tag 2 | Tag 3 | Tag 4 | Tag 5 | Tag 6 | Tag 7 | Tag 8
--------|-------|-------|-------|-------|-------|-------|-------|------
A       | ██████████    |       |       |       |       |       |
B       |       | ██████████████|       |       |       |       |
C       |       | ████████████████████████      |       |       |
D       |       |       |       |       |       | ██████████    |
```
Projektdauer: 8 Tage
Kritischer Pfad: A → C → D

### Aufgabe 2
Was ist der Unterschied zwischen Gantt-Diagramm und Netzplan?

**Lösung:**
- Gantt-Diagramm: Zeitliche Darstellung als Balken, gut für Übersicht
- Netzplan: Zeigt Abhängigkeiten und Pufferzeiten, besser für Berechnungen

---

## Querverweise

- [01-02-02 Netzplan](./01-02-02-network-plan.md) - Alternative Darstellung mit Pufferberechnung
- [01-01-02 Projektphasen](../01-01-fundamentals/01-01-02-project-phases.md) - Phasen als Vorgänge
- [01-03-02 Scrum](../01-03-process-models/01-03-02-scrum.md) - Sprint-Planung
