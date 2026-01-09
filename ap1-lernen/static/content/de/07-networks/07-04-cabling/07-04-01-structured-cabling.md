# Strukturierte Verkabelung

## Lernziele

Nach diesem Abschnitt kannst du:
- Die drei Bereiche der strukturierten Verkabelung benennen
- Die Funktion jedes Verkabelungsbereichs erklären
- Wichtige Komponenten zuordnen
- Die Vorteile strukturierter Verkabelung beschreiben

---

## Kerninhalt

### Was ist strukturierte Verkabelung?

Die **strukturierte Verkabelung** ist ein standardisiertes Konzept zur Vernetzung von Gebäuden und Geländen nach der Norm **EN 50173**. Sie ermöglicht eine flexible, erweiterbare und herstellerunabhängige Netzwerkinfrastruktur.

### Die drei Bereiche

```
┌─────────────────────────────────────────────────────────────────────┐
│                    STRUKTURIERTE VERKABELUNG                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  ┌───────────────────────────────────────────────────────────────┐ │
│  │              PRIMÄRBEREICH (Campuscabling)                │ │
│  │  ┌─────────┐                              ┌─────────┐         │ │
│  │  │Gebäude 1│◄─────── Glasfaser ──────────►│Gebäude 2│         │ │
│  │  │   SV    │     (bis 2000 m)             │   SV    │         │ │
│  │  └────┬────┘                              └────┬────┘         │ │
│  └───────┼───────────────────────────────────────┼───────────────┘ │
│          │                                       │                 │
│  ┌───────┼───────────────────────────────────────┼───────────────┐ │
│  │       │    SEKUNDÄRBEREICH (Steigbereich)     │               │ │
│  │       ▼                                       ▼               │ │
│  │  ┌─────────┐                              ┌─────────┐         │ │
│  │  │  EV 3   │     Glasfaser/Kupfer         │  EV 3   │         │ │
│  │  │ Etage 3 │◄────(bis 500 m)─────────────►│ Etage 3 │         │ │
│  │  └────┬────┘                              └────┬────┘         │ │
│  │       │                                       │               │ │
│  │  ┌────┴────┐                              ┌───┴─────┐         │ │
│  │  │  EV 2   │                              │  EV 2   │         │ │
│  │  │ Etage 2 │                              │ Etage 2 │         │ │
│  │  └────┬────┘                              └────┬────┘         │ │
│  │       │                                       │               │ │
│  │  ┌────┴────┐                              ┌───┴─────┐         │ │
│  │  │  EV 1   │                              │  EV 1   │         │ │
│  │  │ Etage 1 │                              │ Etage 1 │         │ │
│  │  └────┬────┘                              └────┬────┘         │ │
│  └───────┼───────────────────────────────────────┼───────────────┘ │
│          │                                       │                 │
│  ┌───────┼───────────────────────────────────────┼───────────────┐ │
│  │       │    TERTIÄRBEREICH (Etagencabling) │               │ │
│  │       ▼                                       ▼               │ │
│  │    ┌──────┐ ┌──────┐ ┌──────┐          ┌──────┐ ┌──────┐     │ │
│  │    │ TAE  │ │ TAE  │ │ TAE  │          │ TAE  │ │ TAE  │     │ │
│  │    │Dose 1│ │Dose 2│ │Dose 3│          │Dose 1│ │Dose 2│     │ │
│  │    └──┬───┘ └──┬───┘ └──┬───┘          └──┬───┘ └──┬───┘     │ │
│  │       │        │        │                 │        │         │ │
│  │      PC       PC       PC                PC       PC         │ │
│  │                   (bis 90 m Kupfer)                          │ │
│  └──────────────────────────────────────────────────────────────┘ │
│                                                                     │
│  SV = Standortverteiler    EV = Etagenverteiler    TAE = Anschlussdose │
└─────────────────────────────────────────────────────────────────────┘
```

### 1. Primärbereich (Campuscabling)

| Aspekt | Beschreibung |
|--------|--------------|
| **Verbindung** | Gebäude zu Gebäude |
| **Verteiler** | Standortverteiler (SV) |
| **Medium** | Glasfaser (LWL) |
| **Max. Länge** | bis 2000 m |
| **Einsatz** | Firmengelände, Campus |

**Standortverteiler (SV):**
- Zentraler Knotenpunkt des gesamten Netzwerks
- Verbindung zum WAN/Internet
- Enthält Core-Router und Switches

### 2. Sekundärbereich (Steigbereich)

| Aspekt | Beschreibung |
|--------|--------------|
| **Verbindung** | Etage zu Etage (vertikal) |
| **Verteiler** | Etagenverteiler (EV) |
| **Medium** | Glasfaser oder Kupfer |
| **Max. Länge** | bis 500 m |
| **Einsatz** | Innerhalb eines Gebäudes |

**Etagenverteiler (EV):**
- Verteilt Netzwerk auf die Etage
- Enthält Switches und Patchfelder
- Oft in Technikräumen oder Wandschränken

### 3. Tertiärbereich (Etagencabling)

| Aspekt | Beschreibung |
|--------|--------------|
| **Verbindung** | Verteiler zu Arbeitsplatz (horizontal) |
| **Anschluss** | Anschlussdose (TAE) |
| **Medium** | Kupferkabel (Cat 5e/6/6A/7) |
| **Max. Länge** | bis 90 m (fest verlegt) |
| **Einsatz** | Büros, Arbeitsplätze |

**Wichtige Längenregel:**
```
┌──────────────────────────────────────────────────────────────┐
│                 100 m GESAMTLÄNGE                            │
│                                                              │
│  ┌─────┐       ┌────────────────────────┐       ┌─────────┐ │
│  │     │       │                        │       │         │ │
│  │ EV  │───────│    Festverlegung       │───────│  TAE    │ │
│  │     │ 5m    │       90 m             │       │  Dose   │ │
│  └─────┘       └────────────────────────┘       └────┬────┘ │
│                                                      │ 5m   │
│                                                   ┌──┴──┐   │
│                                                   │ PC  │   │
│                                                   └─────┘   │
│                                                              │
│  Patchkabel: 5m + Festverlegung: 90m + Patchkabel: 5m = 100m│
└──────────────────────────────────────────────────────────────┘
```

### Komponenten der Verkabelung

| Komponente | Bereich | Funktion |
|------------|---------|----------|
| **Standortverteiler** | Primär | Zentraler Gebäudeknoten |
| **Etagenverteiler** | Sekundär | Verteiler pro Stockwerk |
| **Patchfeld** | Alle | Zentrale Anschlusspunkte |
| **Patchkabel** | Alle | Flexible Verbindungskabel |
| **Anschlussdose** | Tertiär | Steckdose am Arbeitsplatz |
| **Verlegekabel** | Alle | Fest installierte Kabel |

### Vorteile strukturierter Verkabelung

```
┌─────────────────────────────────────────────────────────────┐
│                    VORTEILE                                  │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ✓ Flexibilität     - Einfache Umzüge und Änderungen        │
│                                                              │
│  ✓ Skalierbarkeit   - Erweiterung ohne Neucabling       │
│                                                              │
│  ✓ Standardisierung - Herstellerunabhängig                  │
│                                                              │
│  ✓ Zukunftssicher   - Unterstützt neue Technologien         │
│                                                              │
│  ✓ Wartbarkeit      - Übersichtliche Struktur               │
│                                                              │
│  ✓ Kosteneffizienz  - Langfristig günstiger                 │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **EN 50173** | Europäische Norm für strukturierte Verkabelung |
| **Standortverteiler (SV)** | Zentraler Verteiler des Geländes |
| **Etagenverteiler (EV)** | Verteiler pro Stockwerk |
| **Patchfeld** | Anschlussleiste für strukturierte Kabelenden |
| **Patchkabel** | Flexibles Verbindungskabel |
| **TAE** | Telecommunications-Anschluss-Einheit (Dose) |
| **LWL** | Lichtwellenleiter (Glasfaser) |

---

## Prüfungstipps

1. **Merksatz für die Bereiche:**
   - **P**rimär = **P**lausibel weit (Campus, 2000 m, Glasfaser)
   - **S**ekundär = **S**teig (vertikal, 500 m)
   - **T**ertiär = **T**isch (horizontal zum Arbeitsplatz, 90 m)

2. **Häufige Prüfungsfragen:**
   - Welches Medium wird im Primärbereich verwendet? → Glasfaser
   - Maximale Länge im Tertiärbereich? → 90 m (fest verlegt)
   - Wozu dient der Etagenverteiler? → Verteilung auf der Etage

3. **Typische Fehler vermeiden:**
   - Die 100-m-Regel gilt für die GESAMTE Strecke inkl. Patchkabel
   - Glasfaser ist Standard im Primärbereich, nicht optional

---

## Übungsaufgaben

### Aufgabe 1: Zuordnung
Ordne die Komponenten dem richtigen Bereich zu:

| Komponente | Primär | Sekundär | Tertiär |
|------------|--------|----------|---------|
| Anschlussdose am Arbeitsplatz | | | |
| Verbindung zwischen Gebäuden | | | |
| Etagenverteiler | | | |
| Kupferkabel zum PC | | | |

<details>
<summary>Lösung anzeigen</summary>

| Komponente | Primär | Sekundär | Tertiär |
|------------|--------|----------|---------|
| Anschlussdose am Arbeitsplatz | | | ✓ |
| Verbindung zwischen Gebäuden | ✓ | | |
| Etagenverteiler | | ✓ | |
| Kupferkabel zum PC | | | ✓ |

</details>

### Aufgabe 2: Praxisszenario

Die ConSystem GmbH plant die Vernetzung eines neuen Bürogebäudes mit 4 Etagen und einer Verbindung zum Hauptgebäude (150 m entfernt).

a) Welche Verkabelungsbereiche sind relevant?
b) Welche Kabeltypen empfehlen Sie für jeden Bereich?

<details>
<summary>Lösung anzeigen</summary>

a) **Alle drei Bereiche sind relevant:**
- Primärbereich: Verbindung zum Hauptgebäude (150 m)
- Sekundärbereich: Verbindung der 4 Etagen untereinander
- Tertiärbereich: Verkabelung auf jeder Etage zu den Arbeitsplätzen

b) **Empfohlene Kabeltypen:**
- Primärbereich: Glasfaser (LWL) - obwohl 150 m auch mit Kupfer möglich wäre, ist Glasfaser zukunftssicherer
- Sekundärbereich: Glasfaser oder Cat 6A/7 (je nach Budget und Anforderungen)
- Tertiärbereich: Cat 6A Kupferkabel (für Gigabit und mehr)

</details>

### Aufgabe 3: Berechnung

Ein Patchkabel am Etagenverteiler ist 3 m lang, das Patchkabel am Arbeitsplatz 4 m. Wie lang darf die Festverlegung maximal sein?

<details>
<summary>Lösung anzeigen</summary>

**Berechnung:**
- Gesamtlänge maximal: 100 m
- Patchkabel EV: 3 m
- Patchkabel Arbeitsplatz: 4 m
- Festverlegung = 100 m - 3 m - 4 m = **93 m**

Hinweis: In der Praxis sollte man unter 90 m bleiben, um Reserve zu haben.

</details>

---

## Querverweise

- [Kupferkabel und Kategorien](07-04-02-copper-cables.md) - Kabeltypen im Detail
- [Netzwerk-Hardware](../07-05-network-hardware.md) - Switches und Router
- [OSI-Modell](../07-01-network-fundamentals/07-01-01-osi-model.md) - Schicht 1 Verkabelung
