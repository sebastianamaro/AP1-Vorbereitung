# Lastenheft und Pflichtenheft

## Lernziele

Nach diesem Kapitel solltest du:
- Den Unterschied zwischen Lastenheft und Pflichtenheft erklären können
- Wissen, wer welches Dokument erstellt
- Die typischen Inhalte beider Dokumente kennen
- Die Funktion beider Dokumente im Projektverlauf verstehen

---

## Kerninhalt

### Überblick

```
┌──────────────────┐                    ┌──────────────────┐
│    LASTENHEFT    │  ─────────────►   │   PFLICHTENHEFT  │
│                  │                    │                  │
│   Auftraggeber   │                    │   Auftragnehmer  │
│   (Kunde)        │                    │   (Entwickler)   │
│                  │                    │                  │
│   WAS?           │                    │   WIE?           │
└──────────────────┘                    └──────────────────┘
```

---

### Das Lastenheft

#### Definition
Das **Lastenheft** ist ein Dokument des **Auftraggebers** (Kunde). Es beschreibt, **WAS** erreicht werden soll - aus Sicht des Kunden.

#### Ersteller
- Auftraggeber (Kunde)
- Oder: Zusammenarbeit Auftraggeber und Auftragnehmer

#### Typische Inhalte

| Inhalt | Beschreibung |
|--------|-------------|
| **Ausgangssituation** | Beschreibung der aktuellen Situation |
| **Zielsetzung** | Was soll erreicht werden? |
| **Anforderungen** | Funktionale und nicht-funktionale Anforderungen |
| **Rahmenbedingungen** | Budget, Zeitrahmen, technische Vorgaben |
| **Schnittstellen** | Anbindung an bestehende Systeme |
| **Abnahmekriterien** | Wann gilt das Projekt als erfolgreich? |

#### Merkmale
- Beschreibt Anforderungen aus **Kundensicht**
- Enthält **technische und nicht-technische** Aspekte
- Ist oft Grundlage eines **Werkvertrags**
- Verwendet **Fachsprache des Kunden** (nicht des Entwicklers)

---

### Das Pflichtenheft

#### Definition
Das **Pflichtenheft** ist ein Dokument des **Auftragnehmers** (Entwickler). Es beschreibt, **WIE** die Anforderungen des Lastenhefts umgesetzt werden.

#### Ersteller
- Auftragnehmer (Entwickler/IT-Dienstleister)
- Basiert auf dem Lastenheft

#### Typische Inhalte

| Inhalt | Beschreibung |
|--------|-------------|
| **Technische Lösung** | Wie werden die Anforderungen umgesetzt? |
| **Systemarchitektur** | Aufbau des Systems |
| **Detailspezifikationen** | Genaue technische Beschreibungen |
| **Schnittstellen-Details** | Technische Schnittstellenbeschreibung |
| **Testfälle** | Wie wird die Erfüllung geprüft? |
| **Projektplan** | Meilensteine, Zeitplan |

#### Merkmale
- Beschreibt die **technische Lösung**
- Verwendet **Fachsprache des Entwicklers**
- Detaillierter als das Lastenheft
- Dient als **Vertragsgrundlage** für die Umsetzung

---

### Vergleich: Lastenheft vs. Pflichtenheft

| Aspekt | Lastenheft | Pflichtenheft |
|--------|------------|---------------|
| **Ersteller** | Auftraggeber (Kunde) | Auftragnehmer (Entwickler) |
| **Fragestellung** | WAS? | WIE? |
| **Perspektive** | Kundensicht | Entwicklersicht |
| **Sprache** | Fachsprache Kunde | Technische Sprache |
| **Detailgrad** | Überblick | Detailliert |
| **Projektphase** | Projektdefinition | Projektplanung |
| **Basis für** | Pflichtenheft | Umsetzung |

---

### Zusammenspiel im Projekt

```
┌─────────────────────────────────────────────────────────────┐
│                      PROJEKTVERLAUF                          │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Phase 1              Phase 2              Phase 3           │
│  DEFINITION           PLANUNG              REALISIERUNG      │
│                                                              │
│  ┌───────────┐       ┌───────────┐       ┌───────────┐      │
│  │Lastenheft │ ───►  │Pflichten- │ ───►  │ Umsetzung │      │
│  │ (Kunde)   │       │   heft    │       │           │      │
│  └───────────┘       │(Entwickler)│       └───────────┘      │
│                      └───────────┘                           │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Lastenheft** | Beschreibt WAS der Kunde will (Anforderungen) |
| **Pflichtenheft** | Beschreibt WIE der Entwickler es umsetzt (Lösung) |
| **Auftraggeber** | Wer den Auftrag erteilt (Kunde) |
| **Auftragnehmer** | Wer den Auftrag ausführt (Entwickler) |
| **Anforderung** | Gewünschte Eigenschaft des Produkts |
| **Spezifikation** | Detaillierte Beschreibung der technischen Umsetzung |

---

## Prüfungstipps

### Typische Prüfungsfragen
1. Wer erstellt das Lastenheft?
2. Wer erstellt das Pflichtenheft?
3. Was ist der Unterschied zwischen beiden?
4. In welcher Projektphase werden sie erstellt?

### Merkhilfe
- **L**astenheft = **L**ieferant bekommt es (vom Kunden)
- **P**flichtenheft = **P**rogrammierer erstellt es

---

## Übungsaufgaben

### Aufgabe 1
Ordnen Sie die Begriffe richtig zu:
a) Beschreibt die technische Lösung
b) Wird vom Kunden erstellt
c) Beantwortet die Frage "WAS?"
d) Beantwortet die Frage "WIE?"

**Lösung:**
- Lastenheft: b), c)
- Pflichtenheft: a), d)

### Aufgabe 2
Ein Kunde möchte eine Lagerverwaltungssoftware. Welche Aussage gehört ins Lastenheft, welche ins Pflichtenheft?

a) "Das System soll den aktuellen Lagerbestand anzeigen."
b) "Die Daten werden in einer MySQL-Datenbank gespeichert."
c) "Die Benutzeroberfläche soll einfach bedienbar sein."
d) "Es wird ein REST-API für die Kommunikation verwendet."

**Lösung:**
- Lastenheft: a), c) - Anforderungen aus Kundensicht
- Pflichtenheft: b), d) - Technische Lösung

### Aufgabe 3
In welcher Projektphase wird das Pflichtenheft erstellt?

**Lösung:** In der Projektplanungsphase (Phase 2), basierend auf dem Lastenheft aus der Definitionsphase.

---

## Querverweise

- [01-01-02 Projektphasen](../01-01-fundamentals/01-01-02-project-phases.md) - Wann werden die Dokumente erstellt?
- [01-04-02 Bedarfsanalyse](./01-04-02-needs-analysis.md) - Wie werden Anforderungen ermittelt?
- [08-04-01 Vertragsarten](../../08-business-processes/08-04-contract-law/08-04-01-contract-types.md) - Werkvertrag
