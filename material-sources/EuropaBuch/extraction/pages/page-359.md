
---
## Page 359
---


### Prüfungssimulation 3

4b) [20 Punkte] In der CNC Pro GmbH gehen jetzt monatlich die Rechnungen für die Nutzung der Cloud ein. Sie sollen den Rechnungseingangsprozess in Form einer Ereignisgesteuerten Prozesskette übersichtlich darstellen. Vervollstandigen Sie den Ausschnitt der EPK, indem Sie Ereignisse, Funktionen, Operatoren und lnformationsobjekte beschriften. Erganzen Sie die Funktion ,,korrigierte Rechnung anfordern" und das Dokument ,,Schreiben an Lieferanten" in die Prozesskette und stellen Sie den lnformationsfluss für diese Elemente durch Pfeile dar.

Lieferantenrechnung

ist eingegangen

Rechnung prüfen

• .----------ick>------------,.

Rechnung korrekt

Rechnung ist nicht korrekt

korrigierte Rechnung anfordern


# --

Rechnung buchen

Schreiben an Lieferanten

Konten/Buch- haltungsprogramm

Rechnung ist gebucht, Verbindlichkeit entstanden

Zahlungstermin erreicht


**[VISUAL: EVENT-DRIVEN PROCESS CHAIN (EPK) - INVOICE PROCESSING SOLUTION]**
A complete EPK diagram showing the invoice receipt and processing workflow:

```
    ┌───────────────────────────┐
    │  Lieferantenrechnung      │ ← Document
    │  ist eingegangen          │ ← Event (rounded rectangle)
    └───────────┬───────────────┘
                │
                ▼
    ┌───────────────────────────┐
    │    Rechnung prüfen        │ ← Function (rectangle)
    └───────────┬───────────────┘
                │
                ◇ XOR (exclusive or)
               ╱ ╲
              ╱   ╲
             ▼     ▼
┌──────────────┐   ┌──────────────────────┐
│Rechnung      │   │Rechnung ist          │
│korrekt       │   │nicht korrekt         │
└──────┬───────┘   └──────────┬───────────┘
       │                      │
       ▼                      ▼
┌──────────────┐   ┌──────────────────────┐     ┌─────────────────┐
│Rechnung      │   │korrigierte Rechnung  │────▶│ Schreiben an    │
│buchen        │   │anfordern             │     │ Lieferanten     │
└──────┬───────┘   └──────────────────────┘     └─────────────────┘
       │                                              (Document)
       │◀──────────────────────────────────────────────────┘
       │
       ▼
┌──────────────────────────────┐
│ Konten/Buchhhaltungsprogramm │ ← Information Object
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│Rechnung ist gebucht,         │
│Verbindlichkeit entstanden    │ ← Event
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│Zahlungstermin erreicht       │ ← Event
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│    Buchung der Zahlung       │ ← Function
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│ Konten/Buchhhaltungsprogramm │ ← Information Object
└──────────────┬───────────────┘
               │
               ▼
┌──────────────────────────────┐
│Zahlung wurde gebucht,        │
│Verbindlichkeit beglichen     │ ← End Event
└──────────────────────────────┘
```

EPK Legend:
- **Rounded rectangles**: Events (passive states)
- **Rectangles**: Functions (activities)
- **Diamonds (◇)**: Operators (XOR, AND, OR)
- **Document symbols**: Information objects
- **Arrows**: Control flow and information flow

Buchung der Zahlung

Konten/Buch- haltungsprogramm

Zahlung wurde gebucht, Verbindlichkeit beglichen

357


**[VISUAL: EPK DIAGRAM CONTINUATION]**
The EPK diagram continues showing the complete invoice processing flow from receipt through payment booking.
