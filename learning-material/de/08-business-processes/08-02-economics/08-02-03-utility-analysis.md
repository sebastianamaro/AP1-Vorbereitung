# Nutzwertanalyse

## Lernziele

Nach diesem Abschnitt kannst du:
- Den Aufbau einer Nutzwertanalyse erklären
- Kriterien gewichten und bewerten
- Eine vollständige Nutzwertanalyse durchführen
- Das Ergebnis interpretieren und begründen

---

## Kerninhalt

### Was ist eine Nutzwertanalyse?

Die **Nutzwertanalyse (NWA)** ist ein systematisches Verfahren zur Entscheidungsfindung, bei dem verschiedene Alternativen anhand gewichteter Kriterien bewertet werden.

**Einsatzbereiche:**
- Produktauswahl (z.B. welcher Laptop?)
- Lieferantenauswahl
- Software-/Systemauswahl
- Standortentscheidungen

```
┌─────────────────────────────────────────────────────────────────────┐
│                    NUTZWERTANALYSE - ÜBERSICHT                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  SCHRITT 1: Kriterien festlegen                                     │
│       ↓     (Was ist wichtig?)                                      │
│                                                                      │
│  SCHRITT 2: Kriterien gewichten                                     │
│       ↓     (Wie wichtig ist jedes Kriterium? Summe = 100%)         │
│                                                                      │
│  SCHRITT 3: Alternativen bewerten                                   │
│       ↓     (Punkte vergeben, z.B. 1-10)                            │
│                                                                      │
│  SCHRITT 4: Nutzwerte berechnen                                     │
│       ↓     (Punkte × Gewichtung)                                   │
│                                                                      │
│  SCHRITT 5: Ergebnis auswerten                                      │
│             (Höchster Nutzwert = beste Alternative)                 │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Aufbau der Nutzwertanalyse-Tabelle

```
┌─────────────────────────────────────────────────────────────────────┐
│                NUTZWERTANALYSE - GRUNDSTRUKTUR                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│                           │ Gewicht │ Alt. A  │ Alt. B  │ Alt. C   │
│  Kriterium               │  (%)    │ P │ NW  │ P │ NW  │ P │ NW    │
│  ────────────────────────┼─────────┼───┼─────┼───┼─────┼───┼────── │
│  Kriterium 1             │   30%   │   │     │   │     │   │       │
│  Kriterium 2             │   25%   │   │     │   │     │   │       │
│  Kriterium 3             │   20%   │   │     │   │     │   │       │
│  Kriterium 4             │   15%   │   │     │   │     │   │       │
│  Kriterium 5             │   10%   │   │     │   │     │   │       │
│  ────────────────────────┼─────────┼───┼─────┼───┼─────┼───┼────── │
│  SUMME                   │  100%   │   │     │   │     │   │       │
│                                                                      │
│  P  = Punkte (z.B. 1-10)                                            │
│  NW = Nutzwert (Punkte × Gewicht)                                   │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Beispiel: Laptop-Auswahl

Die ConSystem GmbH möchte neue Laptops für die Mitarbeiter beschaffen. Drei Modelle stehen zur Auswahl.

```
┌─────────────────────────────────────────────────────────────────────┐
│          NUTZWERTANALYSE: LAPTOP-AUSWAHL                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│                      │Gewicht│  Laptop A  │  Laptop B  │  Laptop C │
│  Kriterium          │  (%)  │ P  │  NW   │ P  │  NW   │ P  │  NW  │
│  ───────────────────┼───────┼────┼───────┼────┼───────┼────┼───── │
│  Preis              │  30%  │ 8  │ 2,40  │ 6  │ 1,80  │ 9  │ 2,70 │
│  Leistung           │  25%  │ 7  │ 1,75  │ 9  │ 2,25  │ 6  │ 1,50 │
│  Gewicht            │  20%  │ 6  │ 1,20  │ 8  │ 1,60  │ 7  │ 1,40 │
│  Akkulaufzeit       │  15%  │ 9  │ 1,35  │ 7  │ 1,05  │ 8  │ 1,20 │
│  Service/Support    │  10%  │ 7  │ 0,70  │ 8  │ 0,80  │ 5  │ 0,50 │
│  ───────────────────┼───────┼────┼───────┼────┼───────┼────┼───── │
│  SUMME              │ 100%  │    │ 7,40  │    │ 7,50  │    │ 7,30 │
│                                                                      │
│  ERGEBNIS: Laptop B hat den höchsten Nutzwert (7,50)                │
│            → EMPFEHLUNG: Laptop B                                   │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Berechnungsbeispiel

Für Kriterium "Preis" bei Laptop A:
- Punkte: 8
- Gewichtung: 30% = 0,30
- **Nutzwert = 8 × 0,30 = 2,40**

### Schritt-für-Schritt-Anleitung

```
┌─────────────────────────────────────────────────────────────────────┐
│                    SCHRITT 1: KRITERIEN FESTLEGEN                    │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Frage: "Was ist für die Entscheidung wichtig?"                     │
│                                                                      │
│  Typische Kriterien bei IT-Beschaffung:                             │
│  → Preis / Kosten                                                   │
│  → Leistung / Performance                                           │
│  → Qualität / Verarbeitung                                          │
│  → Kompatibilität                                                   │
│  → Support / Service                                                │
│  → Nachhaltigkeit                                                   │
│  → Lieferzeit                                                       │
│  → Erweiterbarkeit                                                  │
│                                                                      │
│  TIPP: 4-6 Kriterien sind optimal                                   │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                    SCHRITT 2: KRITERIEN GEWICHTEN                    │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Frage: "Wie wichtig ist jedes Kriterium relativ zu den anderen?"   │
│                                                                      │
│  WICHTIG: Die Summe aller Gewichtungen MUSS 100% ergeben!           │
│                                                                      │
│  Beispiel:                                                          │
│  ├── Preis:         30%  (sehr wichtig)                             │
│  ├── Leistung:      25%  (wichtig)                                  │
│  ├── Gewicht:       20%  (wichtig)                                  │
│  ├── Akkulaufzeit:  15%  (mittel wichtig)                           │
│  └── Support:       10%  (weniger wichtig)                          │
│                    ─────                                             │
│                    100% ✓                                            │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                    SCHRITT 3: ALTERNATIVEN BEWERTEN                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Punkte vergeben (typisch: Skala 1-10)                              │
│                                                                      │
│  10 = hervorragend                                                  │
│   8 = gut                                                           │
│   6 = befriedigend                                                  │
│   4 = ausreichend                                                   │
│   2 = mangelhaft                                                    │
│   0 = ungenügend                                                    │
│                                                                      │
│  Bei KOSTEN: Niedriger Preis = HOHE Punktzahl!                      │
│  (weil niedriger Preis gut ist)                                     │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                    SCHRITT 4: NUTZWERT BERECHNEN                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Nutzwert = Punkte × Gewichtung                                     │
│                                                                      │
│  Für jedes Kriterium und jede Alternative berechnen!                │
│  Dann alle Nutzwerte einer Alternative addieren.                    │
│                                                                      │
│  Beispiel Laptop A:                                                 │
│  Preis:        8 × 0,30 = 2,40                                      │
│  Leistung:     7 × 0,25 = 1,75                                      │
│  Gewicht:      6 × 0,20 = 1,20                                      │
│  Akku:         9 × 0,15 = 1,35                                      │
│  Support:      7 × 0,10 = 0,70                                      │
│                         ─────                                        │
│  SUMME:                  7,40                                        │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                    SCHRITT 5: ERGEBNIS AUSWERTEN                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Die Alternative mit dem HÖCHSTEN Gesamtnutzwert                    │
│  ist die rechnerisch beste Wahl.                                    │
│                                                                      │
│  ABER: Das Ergebnis ist eine Empfehlung, keine absolute Wahrheit!   │
│                                                                      │
│  Zu prüfen:                                                         │
│  → Sind die Gewichtungen sinnvoll?                                  │
│  → Sind die Bewertungen objektiv?                                   │
│  → Gibt es K.O.-Kriterien (z.B. Budget überschritten)?             │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Vorteile und Grenzen

| Vorteile | Grenzen |
|----------|---------|
| Systematische Entscheidung | Gewichtung subjektiv |
| Nachvollziehbar/dokumentiert | Bewertung kann subjektiv sein |
| Vergleichbarkeit | K.O.-Kriterien nicht berücksichtigt |
| Qualitative + quantitative Faktoren | Aufwendig bei vielen Alternativen |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Nutzwertanalyse** | Verfahren zur gewichteten Bewertung von Alternativen |
| **Kriterium** | Entscheidungsrelevantes Merkmal |
| **Gewichtung** | Relative Wichtigkeit eines Kriteriums (in %) |
| **Punktbewertung** | Benotung einer Alternative für ein Kriterium |
| **Nutzwert** | Produkt aus Punkten und Gewichtung |
| **K.O.-Kriterium** | Ausschlusskriterium, das erfüllt sein MUSS |

---

## Prüfungstipps

1. **In fast JEDER Prüfung!**
   - Nutzwertanalyse ist ein absoluter Prüfungsfavorit
   - Unbedingt üben, üben, üben!

2. **Wichtige Regeln:**
   - Gewichtungen MÜSSEN 100% ergeben
   - Bei Kosten: Niedriger = HÖHERE Punktzahl
   - Nutzwert = Punkte × Gewicht (nicht addieren!)

3. **Typische Fehler vermeiden:**
   - Gewichtungen vergessen zu addieren (muss 100% sein!)
   - Nutzwert falsch berechnen (multiplizieren, nicht addieren!)
   - Bei Kosten hohe Punkte für teuer vergeben (umgekehrt!)

4. **Prüfungshinweis:**
   - Oft wird nur ein Teil vorgegeben (z.B. Gewichtungen)
   - Dann selbst Punkte vergeben und berechnen

---

## Übungsaufgaben

### Aufgabe 1: Berechnung vervollständigen

Vervollständigen Sie die Nutzwertanalyse für die Serverauswahl:

| Kriterium | Gewicht | Server A (P) | Server A (NW) | Server B (P) | Server B (NW) |
|-----------|---------|--------------|---------------|--------------|---------------|
| Preis | 35% | 7 | ? | 5 | ? |
| Leistung | 30% | 8 | ? | 9 | ? |
| Energieeffizienz | 20% | 6 | ? | 8 | ? |
| Support | 15% | 9 | ? | 7 | ? |
| **SUMME** | 100% | | ? | | ? |

Welcher Server sollte gewählt werden?

<details>
<summary>Lösung anzeigen</summary>

| Kriterium | Gewicht | Server A (P) | Server A (NW) | Server B (P) | Server B (NW) |
|-----------|---------|--------------|---------------|--------------|---------------|
| Preis | 35% | 7 | **2,45** | 5 | **1,75** |
| Leistung | 30% | 8 | **2,40** | 9 | **2,70** |
| Energieeffizienz | 20% | 6 | **1,20** | 8 | **1,60** |
| Support | 15% | 9 | **1,35** | 7 | **1,05** |
| **SUMME** | 100% | | **7,40** | | **7,10** |

**Empfehlung: Server A** (höherer Nutzwert: 7,40 vs. 7,10)

</details>

### Aufgabe 2: Vollständige NWA erstellen

Die ConSystem GmbH wählt einen Cloud-Anbieter. Erstellen Sie eine Nutzwertanalyse mit:

**Kriterien:**
- Preis (40%)
- Datensicherheit (30%)
- Verfügbarkeit (20%)
- Support (10%)

**Informationen:**
- Anbieter A: Günstig, mittlere Sicherheit, gute Verfügbarkeit, guter Support
- Anbieter B: Teuer, hohe Sicherheit, sehr gute Verfügbarkeit, mittlerer Support
- Anbieter C: Mittelpreisig, hohe Sicherheit, gute Verfügbarkeit, sehr guter Support

<details>
<summary>Lösung anzeigen</summary>

| Kriterium | Gewicht | Anbieter A | NW | Anbieter B | NW | Anbieter C | NW |
|-----------|---------|------------|-----|------------|-----|------------|-----|
| Preis | 40% | 9 | 3,60 | 5 | 2,00 | 7 | 2,80 |
| Datensicherheit | 30% | 6 | 1,80 | 9 | 2,70 | 9 | 2,70 |
| Verfügbarkeit | 20% | 7 | 1,40 | 9 | 1,80 | 7 | 1,40 |
| Support | 10% | 7 | 0,70 | 6 | 0,60 | 9 | 0,90 |
| **SUMME** | 100% | | **7,50** | | **7,10** | | **7,80** |

**Empfehlung: Anbieter C** (höchster Nutzwert: 7,80)

Begründung: Anbieter C bietet das beste Gesamtpaket aus mittlerem Preis, hoher Sicherheit und sehr gutem Support.

</details>

### Aufgabe 3: Gewichtung bestimmen

Der IT-Leiter möchte für die folgenden Kriterien Gewichtungen festlegen. Priorisieren Sie und begründen Sie:

- Anschaffungspreis
- Wartungskosten
- Herstellersupport
- Kompatibilität mit bestehenden Systemen
- Umweltfreundlichkeit

<details>
<summary>Lösung anzeigen</summary>

**Mögliche Gewichtung:**

| Kriterium | Gewicht | Begründung |
|-----------|---------|------------|
| Kompatibilität | 30% | Muss mit bestehender Infrastruktur funktionieren |
| Anschaffungspreis | 25% | Wichtig fürs Budget, aber nicht allein entscheidend |
| Wartungskosten | 20% | Langfristige Kosten bedenken (TCO) |
| Herstellersupport | 15% | Wichtig für Problemlösung |
| Umweltfreundlichkeit | 10% | Wünschenswert, aber nicht kritisch |
| **SUMME** | 100% | |

**Alternative Gewichtung möglich!** Die "richtige" Gewichtung hängt von den Prioritäten des Unternehmens ab.

</details>

---

## Querverweise

- [Angebotsvergleich](08-02-04-offer-comparison.md) - Quantitativer Vergleich
- [ROI und TCO](08-02-02-roi-tco.md) - Wirtschaftlichkeitsrechnung
- [Beschaffungsprozess](../08-03-procurement/08-03-01-procurement-process.md) - Einkauf
