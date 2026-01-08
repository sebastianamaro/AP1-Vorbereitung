
---
## Page 325
---


### Fachkornpetenz Arbeitsund Geschaftsprozesse

Aufgabe 5: Vervollstandigen Sie die erweiterte Ereignisgesteuerte Prozesskette (eEPK), anhand der folgenden Ausgangssituation:

In der Abteilung Einkauf der ComSystem GmbH geht eine Bedarfsmeldung ein. Daraufhin werden mit Hilfe der Lieferantendatei und einer lnternetrecherche Bezugsquellen ermittelt. lm Ansch/uss werden Anfragen geschrieben und verschickt. Kurze Zeit spdter gehen verschiedene Angebote ein, die dann verglichen werden. Das passende Angebot wird ausgewdhlt und eine Bestellung geschrieben und versandt. Ein Prozesswegweiser zeigt den dann folgenden Wareneingangsprozess an.

Ereignisse/Funktionen

Organisationseinheit

1 nformationen/ Dokumente

Bedarfsmeldung eingegangen

Internet

Bezugsquellen

Einkauf

ermitteln


**[VISUAL: EXTENDED EPK (eEPK) - PROCUREMENT PROCESS SOLUTION]**
A completed extended Event-driven Process Chain showing the purchasing workflow:

```
┌─────────────────────────────┐
│ Bedarfsmeldung eingegangen  │ ← Event
└─────────────┬───────────────┘
              │
              ▼
┌─────────────────────────────┐   ┌─────────────────┐
│  Bezugsquellen ermitteln    │◄──│ Internet        │
│        (Einkauf)            │◄──│ Lieferantendatei│
└─────────────┬───────────────┘   └─────────────────┘
              │
              ▼
┌─────────────────────────────┐
│  Bezugsquellen ermittelt    │ ← Event
└─────────────┬───────────────┘
              │
              ▼
┌─────────────────────────────┐   ┌──────────────┐
│   Anfragen schreiben        │──▶│   Anfragen   │
└─────────────┬───────────────┘   └──────────────┘
              │
              ▼
┌─────────────────────────────┐
│     Anfragen versandt       │ ← Event
└─────────────┬───────────────┘
              │
              ▼
┌─────────────────────────────┐   ┌──────────────┐
│ Angebote vergleichen,       │◄──│   Angebote   │
│ auswählen und bestellen     │──▶│  Bestellung  │
└─────────────┬───────────────┘   └──────────────┘
              │
              ▼
┌─────────────────────────────┐
│    Bestellung versandt      │ ← Event
└─────────────┬───────────────┘
              │
              ▼
┌─────────────────────────────┐
│       Wareneingang          │ ← Process Reference
└─────────────────────────────┘
```

lieferantendatei

Bezugsquellen ermittelt

Anfragen

Anfragen schreiben

Anfragen

versandt

Angebote

Eingegangene Angebote vergleichen, auswahlen und bestellen


**[VISUAL: eEPK SYMBOLS REFERENCE]**
Standard eEPK notation with events (rounded rectangles), functions (rectangles), organizational units (ovals), and document symbols.

Bestellung

Bestellung versandt

Wareneingang

323


**[VISUAL: eEPK SYMBOLS REFERENCE]**
Standard eEPK notation with events (rounded rectangles), functions (rectangles), organizational units (ovals), and document symbols.
