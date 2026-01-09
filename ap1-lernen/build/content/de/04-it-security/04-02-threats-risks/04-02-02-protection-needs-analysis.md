# Schutzneeds-analysis

## Lernziele

Nach diesem Kapitel solltest du:
- Den Begriff Schutzneeds-analysis erklären können
- Die Schutzbedarfskategorien kennen
- Den Ablauf einer Schutzneeds-analysis beschreiben können
- Schutzbedarf für verschiedene Daten einschätzen können

---

## Kerninhalt

### Was ist eine Schutzneeds-analysis?

Die **Schutzneeds-analysis** ist ein Verfahren zur Ermittlung des notwendigen Schutzniveaus für IT-Systeme, Anwendungen und Daten. Sie ist ein zentraler Bestandteil des IT-Sicherheitsmanagements.

> Die Schutzneeds-analysis beantwortet die Frage: "Wie schützenswert sind unsere Daten und Systeme?"

---

### Schutzbedarfskategorien nach BSI

Das BSI (Bundesamt für Sicherheit in der Informationstechnik) definiert drei Schutzbedarfskategorien:

```
┌─────────────────────────────────────────────────────────────────┐
│              SCHUTZBEDARFSKATEGORIEN                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                    SEHR HOCH                              │  │
│  │  Schaden: existenzbedrohend, katastrophal                 │  │
│  │  Beispiel: Patientendaten, Staatsgeheimnisse              │  │
│  └──────────────────────────────────────────────────────────┘  │
│                           ▲                                     │
│                           │                                     │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                       HOCH                                │  │
│  │  Schaden: beträchtlich, schwer zu beheben                 │  │
│  │  Beispiel: Personaldaten, Finanzdaten                     │  │
│  └──────────────────────────────────────────────────────────┘  │
│                           ▲                                     │
│                           │                                     │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                     NORMAL                                │  │
│  │  Schaden: begrenzt, überschaubar                          │  │
│  │  Beispiel: Öffentliche Informationen, interne Doku        │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Detaillierte Kategorien

| Kategorie | Schadenspotenzial | Beispiele | Maßnahmen |
|-----------|-------------------|-----------|-----------|
| **Normal** | Begrenzt, tolerierbar | Allgemeine Geschäftsdaten, öffentliche Infos | Standardmaßnahmen |
| **Hoch** | Beträchtlich | Personaldaten, Kundendaten, Finanzen | Erweiterte Maßnahmen |
| **Sehr hoch** | Existenzbedrohend | Patientendaten, Forschungsdaten, Staatsgeheimnisse | Maximale Maßnahmen |

---

### Schadensszenarien für jedes Schutzziel

#### Vertraulichkeit

| Schutzbedarf | Auswirkung bei Verletzung |
|--------------|---------------------------|
| **Normal** | Geringer Imageschaden |
| **Hoch** | Erheblicher Imageschaden, rechtliche Konsequenzen |
| **Sehr hoch** | Existenzbedrohend, strafrechtliche Folgen |

#### Integrität

| Schutzbedarf | Auswirkung bei Verletzung |
|--------------|---------------------------|
| **Normal** | Korrigierbar, geringe Auswirkung |
| **Hoch** | Erhebliche Fehler in Prozessen |
| **Sehr hoch** | Lebensgefahr, massive finanzielle Schäden |

#### Verfügbarkeit

| Schutzbedarf | Auswirkung bei Ausfall |
|--------------|------------------------|
| **Normal** | Ausfallzeit > 1 Tag tolerierbar |
| **Hoch** | Ausfallzeit max. wenige Stunden |
| **Sehr hoch** | Keine Ausfallzeit tolerierbar |

---

### Ablauf der Schutzneeds-analysis

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ 1. ERFASSUNG    │ ─► │ 2. BEWERTUNG    │ ─► │ 3. VERERBUNG    │
│ Alle Objekte    │    │ Schutzbedarf    │    │ Abhängigkeiten  │
│ identifizieren  │    │ bestimmen       │    │ berücksichtigen │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                                      │
┌─────────────────┐    ┌─────────────────┐    ┌───────▼─────────┐
│ 6. AKTUALI-     │ ◄─ │ 5. UMSETZUNG    │ ◄─ │ 4. DOKUMENTA-   │
│ SIERUNG         │    │ Maßnahmen       │    │ TION            │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

#### Schritt 1: Erfassung

- Alle IT-Systeme, Anwendungen und Daten identifizieren
- Geschäftsprozesse erfassen
- Verantwortlichkeiten klären

#### Schritt 2: Bewertung

Für jedes Objekt wird der Schutzbedarf bezüglich:
- Vertraulichkeit
- Integrität
- Verfügbarkeit

anhand möglicher Schadensszenarien bewertet.

#### Schritt 3: Vererbung

```
┌──────────────────────────────────────────────────────────────┐
│                 MAXIMUMPRINZIP                               │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────────┐                                             │
│  │ Anwendung A │  ──► Schutzbedarf: HOCH                     │
│  │ (Kundendaten)│                                            │
│  └──────┬──────┘                                             │
│         │                                                    │
│         ▼                                                    │
│  ┌─────────────┐                                             │
│  │  Server     │  ──► Erbt: HOCH (vom höchsten Wert)         │
│  └──────┬──────┘                                             │
│         │                                                    │
│         ▼                                                    │
│  ┌─────────────┐                                             │
│  │ Netzwerk    │  ──► Erbt: HOCH                             │
│  └─────────────┘                                             │
│                                                              │
│  Der Schutzbedarf "vererbt" sich nach dem Maximumprinzip:    │
│  Das höchste Schutzniveau einer Komponente bestimmt das      │
│  Schutzniveau der abhängigen Systeme.                        │
└──────────────────────────────────────────────────────────────┘
```

#### Schritt 4: Dokumentation

- Schutzbedarfsfeststellung dokumentieren
- Begründungen festhalten
- Verantwortliche benennen

---

### Praktisches Beispiel

| IT-Objekt | Vertraulichkeit | Integrität | Verfügbarkeit | Begründung |
|-----------|-----------------|------------|---------------|------------|
| Webserver (öffentlich) | Normal | Hoch | Hoch | Öffentliche Infos, aber Manipulation wäre Image-Schaden |
| Personaldatenbank | Hoch | Hoch | Normal | Personenbezogene Daten, DSGVO |
| Produktionssteuerung | Normal | Sehr hoch | Sehr hoch | Manipulation = Produktionsausfall |
| E-Mail-System | Hoch | Hoch | Hoch | Vertrauliche Kommunikation |

---

### Zusammenhang mit Risikoanalyse

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│  Schutzbedarfs-      Bedrohungs-        Risiko-                │
│  analyse         +   analyse        =   analyse                 │
│                                                                 │
│  "Was ist wie        "Welche           "Wie hoch ist das       │
│   schützenswert?"     Gefahren?"        Risiko?"               │
│                                                                 │
│                           ▼                                     │
│                   Maßnahmenauswahl                              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Schutzneeds-analysis** | Ermittlung des notwendigen Schutzniveaus |
| **Schutzbedarfskategorie** | Normal, Hoch, Sehr hoch |
| **Maximumprinzip** | Höchster Schutzbedarf vererbt sich |
| **Schadenszenario** | Mögliche Auswirkung einer Verletzung |
| **BSI** | Bundesamt für Sicherheit in der Informationstechnik |
| **IT-Grundschutz** | BSI-Methodik für IT-Sicherheit |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was ist eine Schutzneeds-analysis?
- Nennen Sie die Schutzbedarfskategorien
- Wie funktioniert das Maximumprinzip?
- Ordnen Sie Daten einem Schutzbedarf zu

### Wichtig zu merken

- **3 Kategorien:** Normal, Hoch, Sehr hoch
- **3 Schutzziele:** Vertraulichkeit, Integrität, Verfügbarkeit (für jedes bewerten)
- **Maximumprinzip:** Der höchste Schutzbedarf vererbt sich

---

## Übungsaufgaben

### Aufgabe 1
Was ist eine Schutzneeds-analysis?

**Lösung:** Die Schutzneeds-analysis ist ein Verfahren zur Ermittlung des notwendigen Schutzniveaus für IT-Systeme, Anwendungen und Daten. Sie bewertet für jedes Objekt den Schutzbedarf bezüglich Vertraulichkeit, Integrität und Verfügbarkeit in den Kategorien Normal, Hoch oder Sehr hoch.

### Aufgabe 2
Welchen Schutzbedarf hat eine Personaldatenbank mit Gehaltsdaten?

**Lösung:**
- **Vertraulichkeit:** HOCH (personenbezogene Daten, DSGVO)
- **Integrität:** HOCH (falsche Gehälter führen zu rechtlichen Problemen)
- **Verfügbarkeit:** NORMAL bis HOCH (je nach Zeitpunkt der Gehaltsabrechnung)

Begründung: Gehaltsdaten sind sensible personenbezogene Daten nach DSGVO und erfordern besonderen Schutz.

### Aufgabe 3
Erklären Sie das Maximumprinzip der Schutzbedarfsvererbung.

**Lösung:** Das Maximumprinzip besagt, dass ein IT-System den höchsten Schutzbedarf aller darauf laufenden Anwendungen oder gespeicherten Daten erbt. Wenn auf einem Server eine Anwendung mit Schutzbedarf "Normal" und eine mit "Hoch" läuft, erhält der Server den Schutzbedarf "Hoch".

### Aufgabe 4
Ordnen Sie folgende Daten einem Schutzbedarf zu:
a) Öffentliche Pressemitteilungen
b) Patientendaten einer Arztpraxis
c) Interne Besprechungsprotocols

**Lösung:**
a) **Normal** - Öffentlich zugänglich, keine besonderen Schutzanforderungen
b) **Sehr hoch** - Besonders schützenswerte Gesundheitsdaten nach Art. 9 DSGVO
c) **Normal bis Hoch** - Je nach Inhalt, interne Informationen

---

## Querverweise

- [04-01-01 CIA-Triade](../04-01-protection-goals/04-01-01-cia-triad.md) - Die drei Schutzziele
- [04-02-01 Bedrohungsarten](./04-02-01-threat-types.md) - Bedrohungen identifizieren
- [04-04-01 BSI-Grundschutz](../04-04-frameworks-standards/04-04-01-bsi-baseline-protection.md) - BSI-Methodik
- [03-01-02 Personenbezogene Daten](../../03-data-protection/03-01-fundamentals/03-01-02-personal-data.md) - DSGVO-Kategorien
