# KI-Grundlagen

**Hinweis:** Künstliche Intelligenz ist NEU im Prüfungskatalog 2025!

## Lernziele

Nach diesem Kapitel solltest du:
- Den Begriff Künstliche Intelligenz definieren können
- Unterschiede zwischen schwacher und starker KI kennen
- Machine Learning und Deep Learning unterscheiden können
- Grundlegende KI-Konzepte verstehen

---

## Kerninhalt

### Was ist Künstliche Intelligenz?

**Künstliche Intelligenz (KI)** bezeichnet Systeme, die menschenähnliche Intelligenzleistungen erbringen können, wie Lernen, Problemlösen, Sprachverstehen oder Mustererkennung.

```
┌─────────────────────────────────────────────────────────────────┐
│                    KÜNSTLICHE INTELLIGENZ                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │              KÜNSTLICHE INTELLIGENZ (KI)                 │   │
│  │     (Systeme, die "intelligent" handeln können)          │   │
│  │                                                          │   │
│  │   ┌───────────────────────────────────────────────────┐ │   │
│  │   │           MACHINE LEARNING (ML)                    │ │   │
│  │   │   (Systeme, die aus Daten lernen können)           │ │   │
│  │   │                                                    │ │   │
│  │   │   ┌─────────────────────────────────────────────┐ │ │   │
│  │   │   │           DEEP LEARNING (DL)                 │ │ │   │
│  │   │   │   (Neuronale Netze mit vielen Schichten)    │ │ │   │
│  │   │   │                                              │ │ │   │
│  │   │   │   Beispiele: ChatGPT, Bilderkennung         │ │ │   │
│  │   │   └─────────────────────────────────────────────┘ │ │   │
│  │   └───────────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Schwache vs. Starke KI

| Typ | Beschreibung | Beispiele | Status |
|-----|--------------|-----------|--------|
| **Schwache KI** | Spezialisiert auf eine Aufgabe | Sprachassistenten, Bildklassifikation, ChatGPT | Existiert heute |
| **Starke KI (AGI)** | Allgemeine menschenähnliche Intelligenz | Wie im Science-Fiction | Existiert nicht |

```
┌────────────────────────────────────────────────────────────────┐
│              SCHWACHE vs. STARKE KI                            │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  SCHWACHE KI (ANI)                 STARKE KI (AGI)            │
│  Artificial Narrow Intelligence    Artificial General Intel.  │
│                                                                │
│  ┌────────────────────┐           ┌────────────────────┐      │
│  │ Spezialist für     │           │ Kann ALLES wie     │      │
│  │ EINE Aufgabe       │           │ ein Mensch         │      │
│  │                    │           │                    │      │
│  │ • Schach spielen   │           │ • Lernen           │      │
│  │ • Texte generieren │           │ • Verstehen        │      │
│  │ • Bilder erkennen  │           │ • Kreativ sein     │      │
│  │ • Sprache erkennen │           │ • Bewusstsein?     │      │
│  └────────────────────┘           └────────────────────┘      │
│                                                                │
│       ✓ HEUTE REAL                    ✗ HYPOTHETISCH          │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Machine Learning (ML)

**Machine Learning** ist ein Teilbereich der KI, bei dem Systeme aus Daten lernen, ohne explizit programmiert zu werden.

#### ML-Lernarten

| Lernart | Beschreibung | Beispiel |
|---------|--------------|----------|
| **Überwachtes Lernen** | Lernen mit gelabelten Daten | Spam-Filter (Email → Spam/Nicht-Spam) |
| **Unüberwachtes Lernen** | Muster in ungelabelten Daten finden | Kundensegmentierung |
| **Bestärkendes Lernen** | Lernen durch Belohnung/Strafe | Spielende KI, Roboter |

```
┌────────────────────────────────────────────────────────────────┐
│                ML-PROZESS (Überwachtes Lernen)                 │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   1. Trainingsdaten         2. Training         3. Modell     │
│   ┌─────────────────┐       ┌──────────┐       ┌──────────┐  │
│   │ Bild → "Katze"  │       │          │       │          │  │
│   │ Bild → "Hund"   │ ────► │Algorithmus├────► │  Modell  │  │
│   │ Bild → "Katze"  │       │  lernt   │       │          │  │
│   │ ...             │       │          │       │          │  │
│   └─────────────────┘       └──────────┘       └──────────┘  │
│                                                      │        │
│   4. Anwendung                                       ▼        │
│   ┌─────────────────┐                         ┌──────────┐   │
│   │ Neues Bild      │ ────────────────────►   │ "Katze"  │   │
│   └─────────────────┘                         └──────────┘   │
│                                                               │
└────────────────────────────────────────────────────────────────┘
```

---

### Deep Learning

**Deep Learning** nutzt künstliche neuronale Netze mit vielen Schichten (deep = tief).

```
┌────────────────────────────────────────────────────────────────┐
│                 NEURONALES NETZ                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Eingabe-      Versteckte Schichten       Ausgabe-           │
│   schicht       (Hidden Layers)            schicht            │
│                                                                │
│     ○───────────○───────────○──────────────○                  │
│     ○─────┬─────○─────┬─────○──────────────○                  │
│     ○─────┼─────○─────┼─────○──────────────○                  │
│     ○─────┴─────○─────┴─────○                                 │
│                                                                │
│   Bild-         Merkmale          Klassifikation              │
│   pixel         erkennen          "Katze"                     │
│                                                                │
│   → Je mehr Schichten, desto komplexere Muster erkennbar     │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Aspekt | Machine Learning | Deep Learning |
|--------|-----------------|---------------|
| **Datenstruktur** | Strukturierte Daten | Unstrukturierte Daten (Bilder, Text) |
| **Feature Engineering** | Manuell | Automatisch |
| **Datenmenge** | Weniger Daten nötig | Große Datenmengen nötig |
| **Rechenleistung** | Geringer | GPU/TPU erforderlich |

---

### Wichtige KI-Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Training** | KI-Modell mit Daten trainieren |
| **Inferenz** | Anwenden des trainierten Modells |
| **Modell** | Das gelernte Wissen der KI |
| **Parameter** | Einstellbare Werte im Modell |
| **Datensatz** | Sammlung von Trainingsdaten |
| **Label** | Richtige Antwort für Trainingsdaten |
| **Halluzination** | KI generiert falsche Informationen überzeugend |
| **Prompt** | Eingabe/Anfrage an eine KI |

---

### Generative KI

**Generative KI** erzeugt neue Inhalte (Text, Bilder, Code, Musik).

| Typ | Beschreibung | Beispiele |
|-----|--------------|-----------|
| **LLM (Large Language Model)** | Große Sprachmodelle | ChatGPT, Claude, Gemini |
| **Text-zu-Bild** | Bilder aus Beschreibungen | DALL-E, Midjourney, Stable Diffusion |
| **Code-Generierung** | Code aus Beschreibungen | GitHub Copilot, Claude |

---

### Risiken und Grenzen von KI

| Risiko | Beschreibung |
|--------|--------------|
| **Bias (Voreingenommenheit)** | KI übernimmt Vorurteile aus Trainingsdaten |
| **Halluzinationen** | KI erfindet plausibel klingende Falschinformationen |
| **Blackbox** | Entscheidungen oft nicht nachvollziehbar |
| **Datenschutz** | Trainingsdaten können sensibel sein |
| **Arbeitsplatzverlust** | Automatisierung von Aufgaben |
| **Missbrauch** | Deepfakes, Desinformation |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **KI** | Künstliche Intelligenz |
| **ML** | Machine Learning (Maschinelles Lernen) |
| **DL** | Deep Learning |
| **LLM** | Large Language Model |
| **Schwache KI** | Spezialisiert auf eine Aufgabe |
| **Starke KI** | Allgemeine Intelligenz (hypothetisch) |
| **Neuronales Netz** | KI-Architektur inspiriert vom Gehirn |
| **Generative KI** | KI, die neue Inhalte erzeugt |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was ist Künstliche Intelligenz?
- Was ist der Unterschied zwischen schwacher und starker KI?
- Was ist Machine Learning?
- Nennen Sie Risiken von KI

### Wichtig zu merken

- **Schwache KI** = spezialisiert, existiert heute (ChatGPT, Alexa)
- **Starke KI** = allgemein intelligent, existiert nicht
- **ML** = Lernen aus Daten
- **Deep Learning** = Neuronale Netze mit vielen Schichten
- **Halluzinationen** = KI erfindet falsche aber plausible Informationen

---

## Übungsaufgaben

### Aufgabe 1
Was ist der Unterschied zwischen schwacher und starker KI?

**Lösung:**
- **Schwache KI (ANI):** Ist auf eine spezifische Aufgabe spezialisiert (z.B. Schach spielen, Texte generieren). Existiert heute und wird in vielen Anwendungen eingesetzt.
- **Starke KI (AGI):** Hätte allgemeine, menschenähnliche Intelligenz und könnte jede intellektuelle Aufgabe lösen. Existiert derzeit nicht und ist hypothetisch.

### Aufgabe 2
Was bedeutet "Halluzination" bei KI-Systemen?

**Lösung:** Eine **Halluzination** ist, wenn eine KI falsche Informationen generiert, die aber plausibel und überzeugend klingen. Das KI-System "erfindet" Fakten, die nicht existieren, z.B. falsche Quellenangaben, erfundene Statistiken oder nicht existierende Personen. Deshalb sollten KI-Ausgaben immer kritisch geprüft werden.

### Aufgabe 3
Nennen Sie drei Risiken beim Einsatz von KI.

**Lösung:**
1. **Bias (Voreingenommenheit):** KI kann Vorurteile aus den Trainingsdaten übernehmen
2. **Halluzinationen:** KI generiert falsche Informationen überzeugend
3. **Datenschutz:** Trainingsdaten oder Nutzereingaben können sensible Informationen enthalten

(Weitere: Blackbox-Problem, Arbeitsplatzverlust, Missbrauch für Desinformation)

---

## Querverweise

- [05-06-02 KI-Anwendungen](./05-06-02-ai-applications.md) - Praxiseinsatz von KI
- [05-06-03 KI-Codeassistenten](./05-06-03-ai-code-assistants.md) - KI in der Entwicklung
- [05-06-04 EU AI Act](./05-06-04-eu-ai-act.md) - Regulierung von KI
