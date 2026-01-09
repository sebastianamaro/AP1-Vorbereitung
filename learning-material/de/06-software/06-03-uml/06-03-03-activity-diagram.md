# UML-Aktivitätsdiagramm

## Lernziele

Nach diesem Kapitel solltest du:
- Aktivitätsdiagramme lesen und verstehen können
- Die wichtigsten Symbole und ihre Bedeutung kennen
- Verzweigungen und Parallelität darstellen können
- Einfache Abläufe als Aktivitätsdiagramm modellieren können

---

## Kerninhalt

### Was ist ein Aktivitätsdiagramm?

Ein **Aktivitätsdiagramm** zeigt den Ablauf von Aktivitäten - es modelliert Workflows, Prozesse und Algorithmen.

```
┌─────────────────────────────────────────────────────────────────┐
│                   AKTIVITÄTSDIAGRAMM                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │   WICHTIG FÜR DIE PRÜFUNG!                              │  │
│   │   [NEU IM PRÜFUNGSKATALOG 2025]                         │  │
│   │                                                          │  │
│   │   Ersetzt teilweise Struktogramme und PAP               │  │
│   │   (die aus dem Katalog entfernt wurden)                 │  │
│   └─────────────────────────────────────────────────────────┘  │
│                                                                 │
│   Zweck:                                                       │
│   • Abläufe und Prozesse darstellen                           │
│   • Algorithmen visualisieren                                  │
│   • Workflows modellieren                                      │
│   • Parallele Aktivitäten zeigen                              │
│                                                                 │
│   Zeigt:                                                       │
│   • Aktivitäten (Aktionen)                                    │
│   • Kontrollfluss (Reihenfolge)                               │
│   • Verzweigungen (Entscheidungen)                            │
│   • Parallelität (gleichzeitige Aktivitäten)                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Symbole im Aktivitätsdiagramm

```
┌────────────────────────────────────────────────────────────────┐
│                SYMBOLE IM AKTIVITÄTSDIAGRAMM                   │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   1. STARTKNOTEN                                              │
│      ●    Ausgefüllter Kreis                                  │
│           Beginn des Ablaufs                                  │
│                                                                │
│   2. ENDKNOTEN                                                │
│      ◉    Kreis mit ausgefülltem Punkt                       │
│           Ende des Ablaufs                                    │
│                                                                │
│   3. AKTIVITÄT (Aktion)                                       │
│      ┌─────────────────────┐                                  │
│      │                     │                                  │
│      │  Aktivitätsname     │   Abgerundetes Rechteck         │
│      │                     │                                  │
│      └─────────────────────┘                                  │
│                                                                │
│   4. KONTROLLFLUSS                                            │
│      ────────────►    Pfeil zeigt Richtung                   │
│                                                                │
│   5. ENTSCHEIDUNG (Verzweigung)                              │
│           ◇           Raute                                   │
│          / \          Ja/Nein oder mehrere Ausgänge          │
│                                                                │
│   6. ZUSAMMENFÜHRUNG                                          │
│          \ /                                                   │
│           ◇           Raute bringt Pfade zusammen            │
│                                                                │
│   7. GABELUNG (Fork) - Parallelisierung                      │
│      ─────┬─────      Dicker Balken (horizontal)             │
│           │           Aktivitäten laufen parallel            │
│                                                                │
│   8. VEREINIGUNG (Join)                                       │
│           │           Dicker Balken                           │
│      ─────┴─────      Warten bis alle fertig                 │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Einfacher Ablauf (Sequenz)

```
┌────────────────────────────────────────────────────────────────┐
│                   EINFACHER ABLAUF                             │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Beispiel: Kaffee zubereiten                                 │
│                                                                │
│                    ●   ← Startknoten                          │
│                    │                                           │
│                    ▼                                           │
│           ┌───────────────────┐                               │
│           │  Wasser kochen    │                               │
│           └─────────┬─────────┘                               │
│                     │                                          │
│                     ▼                                          │
│           ┌───────────────────┐                               │
│           │  Kaffee einfüllen │                               │
│           └─────────┬─────────┘                               │
│                     │                                          │
│                     ▼                                          │
│           ┌───────────────────┐                               │
│           │  Wasser aufgießen │                               │
│           └─────────┬─────────┘                               │
│                     │                                          │
│                     ▼                                          │
│                    ◉   ← Endknoten                            │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Verzweigung (Entscheidung)

```
┌────────────────────────────────────────────────────────────────┐
│                     VERZWEIGUNG                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Beispiel: Bestellung prüfen                                 │
│                                                                │
│                    ●                                           │
│                    │                                           │
│                    ▼                                           │
│           ┌───────────────────┐                               │
│           │ Bestellung prüfen │                               │
│           └─────────┬─────────┘                               │
│                     │                                          │
│                     ▼                                          │
│                    ◇   ← Entscheidung                         │
│                   /│\                                          │
│          [lager- / │ \ [nicht                                 │
│           halten]  │  \ vorrätig]                             │
│               ▼    │    ▼                                      │
│    ┌──────────────┐│┌────────────────┐                        │
│    │   Artikel    │││    Nachbe-     │                        │
│    │   reservieren│││    stellen     │                        │
│    └───────┬──────┘│└───────┬────────┘                        │
│            │       │        │                                  │
│            └───────┼────────┘                                  │
│                    │                                           │
│                    ▼                                           │
│                    ◇   ← Zusammenführung                      │
│                    │                                           │
│                    ▼                                           │
│           ┌───────────────────┐                               │
│           │ Bestätigung senden│                               │
│           └─────────┬─────────┘                               │
│                     │                                          │
│                     ▼                                          │
│                    ◉                                           │
│                                                                │
│   Bedingungen in eckigen Klammern: [Bedingung]               │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Parallelität (Fork und Join)

```
┌────────────────────────────────────────────────────────────────┐
│                    PARALLELITÄT                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Beispiel: Frühstück zubereiten                              │
│                                                                │
│                    ●                                           │
│                    │                                           │
│                    ▼                                           │
│           ┌───────────────────┐                               │
│           │  Zutaten holen    │                               │
│           └─────────┬─────────┘                               │
│                     │                                          │
│             ════════╪════════   ← Fork (Gabelung)             │
│              │      │      │                                   │
│              ▼      ▼      ▼                                   │
│   ┌──────────┐ ┌──────────┐ ┌──────────┐                     │
│   │ Kaffee   │ │ Toast    │ │  Eier    │                     │
│   │ kochen   │ │ machen   │ │ braten   │                     │
│   └────┬─────┘ └────┬─────┘ └────┬─────┘                     │
│        │            │            │                             │
│        └────────────┼────────────┘                             │
│             ════════╪════════   ← Join (Vereinigung)          │
│                     │             Warten bis ALLE fertig      │
│                     ▼                                          │
│           ┌───────────────────┐                               │
│           │  Frühstück        │                               │
│           │  servieren        │                               │
│           └─────────┬─────────┘                               │
│                     │                                          │
│                     ▼                                          │
│                    ◉                                           │
│                                                                │
│   Der dicke Balken teilt (Fork) und vereint (Join)           │
│   Alle parallelen Aktivitäten müssen abgeschlossen sein,     │
│   bevor es nach dem Join weitergeht.                         │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Swimlanes (Verantwortlichkeitsbereiche)

```
┌────────────────────────────────────────────────────────────────┐
│                      SWIMLANES                                 │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Swimlanes zeigen, wer für welche Aktivität zuständig ist   │
│                                                                │
│   │     Kunde      │    System       │    Lager      │       │
│   │                │                 │               │       │
│   │       ●        │                 │               │       │
│   │       │        │                 │               │       │
│   │       ▼        │                 │               │       │
│   │ ┌───────────┐  │                 │               │       │
│   │ │Bestellung │  │                 │               │       │
│   │ │aufgeben   │  │                 │               │       │
│   │ └─────┬─────┘  │                 │               │       │
│   │       │        │                 │               │       │
│   │       └────────┼─────►           │               │       │
│   │                │ ┌───────────┐   │               │       │
│   │                │ │Bestellung │   │               │       │
│   │                │ │prüfen     │   │               │       │
│   │                │ └─────┬─────┘   │               │       │
│   │                │       └─────────┼───────►       │       │
│   │                │                 │ ┌───────────┐ │       │
│   │                │                 │ │Ware       │ │       │
│   │                │                 │ │kommission.│ │       │
│   │                │                 │ └─────┬─────┘ │       │
│   │                │                 │       │       │       │
│   │       ◉   ◄────┼─────────────────┼───────┘       │       │
│   │                │                 │               │       │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Vollständiges Beispiel: Bestellprozess

```
┌────────────────────────────────────────────────────────────────┐
│              BEISPIEL: BESTELLPROZESS                          │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│                          ●                                     │
│                          │                                     │
│                          ▼                                     │
│              ┌───────────────────────┐                        │
│              │   Bestellung empfangen │                        │
│              └───────────┬───────────┘                        │
│                          │                                     │
│                          ▼                                     │
│              ┌───────────────────────┐                        │
│              │   Artikel prüfen      │                        │
│              └───────────┬───────────┘                        │
│                          │                                     │
│                          ▼                                     │
│                         ◇                                      │
│                   [alle  / \ [Artikel                         │
│                 vorrätig]/   \ fehlt]                          │
│                        /     \                                 │
│                       ▼       ▼                                │
│   ┌───────────────────┐      ┌───────────────────┐            │
│   │ Ware kommissionieren│    │ Kunde informieren │            │
│   └─────────┬─────────┘      └─────────┬─────────┘            │
│             │                           │                      │
│      ═══════╪═══════                    ▼                      │
│        │         │                     ◉                       │
│        ▼         ▼                  (Abbruch)                  │
│ ┌───────────┐ ┌───────────┐                                   │
│ │Rechnung   │ │Ware       │                                   │
│ │erstellen  │ │verpacken  │                                   │
│ └─────┬─────┘ └─────┬─────┘                                   │
│       │             │                                          │
│       └──────┬──────┘                                          │
│       ═══════╪═══════                                          │
│              │                                                 │
│              ▼                                                 │
│   ┌───────────────────────┐                                   │
│   │   Ware versenden      │                                   │
│   └───────────┬───────────┘                                   │
│               │                                                │
│               ▼                                                │
│              ◉                                                 │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Symbolübersicht

| Symbol | Name | Bedeutung |
|--------|------|-----------|
| ● | Startknoten | Beginn des Ablaufs |
| ◉ | Endknoten | Ende des Ablaufs |
| Abgerundetes Rechteck | Aktivität/Aktion | Eine Tätigkeit |
| → | Kontrollfluss | Richtung des Ablaufs |
| ◇ | Entscheidung | Verzweigung basierend auf Bedingung |
| ═══ | Fork | Aufteilen in parallele Pfade |
| ═══ | Join | Zusammenführen paralleler Pfade |
| [Bedingung] | Guard | Bedingung für Verzweigung |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Aktivitätsdiagramm** | UML-Diagramm für Abläufe |
| **Aktivität** | Eine Tätigkeit/Aktion im Ablauf |
| **Kontrollfluss** | Reihenfolge der Aktivitäten |
| **Fork** | Aufteilung in parallele Pfade |
| **Join** | Zusammenführung paralleler Pfade |
| **Swimlane** | Verantwortlichkeitsbereich |
| **Guard** | Bedingung für Verzweigung |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Lesen Sie das Aktivitätsdiagramm und erklären Sie den Ablauf
- Welche Aktivitäten laufen parallel?
- Zeichnen Sie ein Aktivitätsdiagramm für einen gegebenen Prozess

### Wichtig zu merken

- **●** = Start, **◉** = Ende
- **◇** = Entscheidung (Verzweigung)
- **═══** = Fork (parallel starten) / Join (warten auf alle)
- [In Klammern] = Bedingung
- Aktivitäten = abgerundete Rechtecke

---

## Übungsaufgaben

### Aufgabe 1
Was ist der Unterschied zwischen Fork/Join und Entscheidung?

**Lösung:**
- **Fork/Join:** Aktivitäten werden **parallel** ausgeführt. Alle Pfade werden durchlaufen, der Join wartet bis alle fertig sind.
- **Entscheidung:** Es wird **nur ein** Pfad ausgewählt basierend auf einer Bedingung. Die anderen Pfade werden nicht durchlaufen.

### Aufgabe 2
Zeichnen Sie ein Aktivitätsdiagramm für den folgenden Prozess:
"Ein Benutzer meldet sich an. Das System prüft die Anmeldedaten. Bei korrekten Daten wird das Dashboard angezeigt, bei falschen Daten wird eine Fehlermeldung ausgegeben."

**Lösung:**
```
        ●
        │
        ▼
┌───────────────────┐
│ Anmeldedaten      │
│ eingeben          │
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│ Daten prüfen      │
└─────────┬─────────┘
          │
          ▼
         ◇
   [korrekt] [falsch]
        │       │
        ▼       ▼
┌───────────┐  ┌───────────┐
│ Dashboard │  │ Fehler-   │
│ anzeigen  │  │ meldung   │
└─────┬─────┘  └─────┬─────┘
      │              │
      └──────┬───────┘
             ▼
            ◉
```

### Aufgabe 3
Erklären Sie den folgenden Ablauf:

```
    ●
    │
    ▼
┌────────┐
│ Start  │
└────┬───┘
   ══╪══
   │   │
   ▼   ▼
┌────┐┌────┐
│ A  ││ B  │
└──┬─┘└──┬─┘
   │     │
   ══╪════
     │
     ▼
    ◉
```

**Lösung:**
1. Der Prozess startet (●)
2. Die Aktivität "Start" wird ausgeführt
3. Am Fork (═══) teilt sich der Ablauf in zwei parallele Pfade
4. Aktivitäten A und B laufen **gleichzeitig** (parallel)
5. Am Join (═══) wird gewartet, bis **beide** Aktivitäten fertig sind
6. Der Prozess endet (◉)

---

## Querverweise

- [06-03-01 Klassendiagramm](./06-03-01-class-diagram.md) - Strukturdiagramm
- [06-03-02 Use-Case-Diagramm](./06-03-02-use-case-diagram.md) - Anwendungsfälle
- [06-02-02 Kontrollstrukturen](../06-02-programming/06-02-02-control-structures.md) - Sequenz, Selektion, Iteration
