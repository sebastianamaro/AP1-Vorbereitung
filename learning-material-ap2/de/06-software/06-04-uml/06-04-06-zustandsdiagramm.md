# Zustandsdiagramm

## Lernziele

Nach diesem Kapitel solltest du:
- Zustände, Übergänge und Ereignisse darstellen
- Start-/Endzustand und Bedingungen (Guards) verwenden
- Das Verhalten eines Objekts/Services modellieren

---

## Kerninhalt

Das **Zustandsdiagramm** (Verhaltensdiagramm) zeigt die **Zustände** eines Objekts/Systems und die **Übergänge** zwischen ihnen, ausgelöst durch **Ereignisse**.

### Elemente

| Element | Darstellung |
|---------|-------------|
| **Startzustand** | ausgefüllter Kreis |
| **Endzustand** | Kreis mit Ring |
| **Zustand** | abgerundetes Rechteck (mit Name) |
| **Übergang** | Pfeil mit `Ereignis [Bedingung] / Aktion` |

```
 ● ─► [Leerlauf] ──anfrage──► [Verarbeitung] ──fertig──► [Ergebnis] ─► ⊗
        ▲                          │
        └───────abbruch────────────┘
```

- **Übergang** beschriftet mit `Ereignis [Guard] / Aktion` (Guard und Aktion optional).
- Ein Objekt ist zu jedem Zeitpunkt in **genau einem** Zustand.

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Zustand** | Situation, in der sich ein Objekt befindet |
| **Übergang (Transition)** | Wechsel zwischen Zuständen |
| **Ereignis (Event)** | Auslöser eines Übergangs |
| **Guard** | Bedingung, unter der ein Übergang erfolgt |

---

## Prüfungstipps

- Übergänge korrekt mit **Ereignis [Bedingung]** beschriften.
- Start- und Endzustand nicht vergessen.
- Typische Aufgabe: Zustandsdiagramm für einen Web-Service/Prozess erstellen oder ergänzen.

---

## Übungsaufgabe

**Aufgabe (nach ConSystem GmbH):** Erstelle ein Zustandsdiagramm für einen Web-Service, der statistische Auswertungen durchführt (z. B. Leerlauf → Verarbeitung → Ergebnis, mit Abbruchmöglichkeit).

---

## Querverweise

- [06-04-04 Aktivitätsdiagramm](./06-04-04-aktivitaetsdiagramm.md)
- [06-04-07 Zeitverlaufsdiagramm](./06-04-07-zeitverlaufsdiagramm.md)
