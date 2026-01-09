# Debugging

## Lernziele

Nach diesem Kapitel solltest du:
- Den Debugging-Prozess verstehen
- Verschiedene Debugging-Techniken kennen
- Fehler systematisch lokalisieren können
- Debugging-Werkzeuge kennen

---

## Kerninhalt

### Was ist Debugging?

```
┌────────────────────────────────────────────────────────────────────┐
│                       DEBUGGING                                    │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Definition:                                                      │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ Debugging ist der systematische Prozess, Fehler (Bugs)     │ │
│   │ in Software zu finden, zu analysieren und zu beheben.      │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   Der Begriff stammt aus der Frühzeit der Computer:               │
│   Grace Hopper fand 1947 eine echte Motte (Bug) in einem         │
│   Computer, die Fehlfunktionen verursachte.                       │
│                                                                     │
│   Debugging-Zyklus:                                                │
│                                                                     │
│        ┌─────────────┐                                            │
│        │   Fehler    │                                            │
│        │  erkennen   │                                            │
│        └──────┬──────┘                                            │
│               ↓                                                    │
│        ┌──────┴──────┐         ┌─────────────┐                   │
│        │   Fehler    │────────→│   Fehler    │                   │
│        │lokalisieren │         │  verstehen  │                   │
│        └─────────────┘         └──────┬──────┘                   │
│                                       ↓                           │
│        ┌─────────────┐         ┌──────┴──────┐                   │
│        │   Korrektur │←────────│   Fehler    │                   │
│        │   testen    │         │  beheben    │                   │
│        └─────────────┘         └─────────────┘                   │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Debugging-Strategien

```
┌────────────────────────────────────────────────────────────────────┐
│                   DEBUGGING-STRATEGIEN                             │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   1. SCHRITTWEISE AUSFÜHRUNG (Step-by-Step)                       │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Code Zeile für Zeile durchgehen                          │  │
│   │ • Variablenwerte nach jedem Schritt prüfen                 │  │
│   │ • Programmfluss nachvollziehen                             │  │
│   │                                                             │  │
│   │ Debugger-Befehle:                                          │  │
│   │ ┌────────────┬────────────────────────────────┐            │  │
│   │ │ Step Over  │ Nächste Zeile (Funktionen      │            │  │
│   │ │            │ überspringen)                   │            │  │
│   │ │ Step Into  │ In Funktion hineinspringen     │            │  │
│   │ │ Step Out   │ Aus Funktion herausspringen    │            │  │
│   │ │ Continue   │ Bis zum nächsten Breakpoint    │            │  │
│   │ └────────────┴────────────────────────────────┘            │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   2. BREAKPOINTS (Haltepunkte)                                    │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Markierte Stellen, an denen Ausführung pausiert          │  │
│   │ • Ermöglicht Inspektion des Programmzustands              │  │
│   │                                                             │  │
│   │   Zeile 10: int x = berechne();                           │  │
│   │   Zeile 11: ● int y = x * 2;   ← Breakpoint              │  │
│   │   Zeile 12: return y;                                      │  │
│   │                                                             │  │
│   │ Programm stoppt VOR Zeile 11                              │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

```
┌────────────────────────────────────────────────────────────────────┐
│               DEBUGGING-STRATEGIEN (Fortsetzung)                   │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   3. PRINT-DEBUGGING (Ausgaben einfügen)                          │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Einfache Methode ohne Debugger                           │  │
│   │ • Ausgaben im Code platzieren                              │  │
│   │ • Variablenwerte und Programmfluss verfolgen              │  │
│   │                                                             │  │
│   │ Beispiel:                                                  │  │
│   │ ┌──────────────────────────────────────────────────────┐  │  │
│   │ │ FUNKTION berechne(wert)                              │  │  │
│   │ │   AUSGABE "Eingabe: " + wert                         │  │  │
│   │ │   ergebnis = wert * 2                                │  │  │
│   │ │   AUSGABE "Ergebnis: " + ergebnis                    │  │  │
│   │ │   RÜCKGABE ergebnis                                  │  │  │
│   │ │ ENDE FUNKTION                                        │  │  │
│   │ └──────────────────────────────────────────────────────┘  │  │
│   │                                                             │  │
│   │ ⚠ Nach Debugging: Ausgaben wieder entfernen!              │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   4. DIVIDE AND CONQUER (Teile und Herrsche)                      │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Code in Hälften teilen                                   │  │
│   │ • Prüfen, in welcher Hälfte der Fehler liegt              │  │
│   │ • Diese Hälfte weiter teilen                               │  │
│   │ • Fehlerbereich schnell eingrenzen                        │  │
│   │                                                             │  │
│   │    [─────────────────────────────────]                     │  │
│   │             ↓ Fehler irgendwo                              │  │
│   │    [───────────────] [───────────────]                     │  │
│   │         ↓ hier?            nicht hier                      │  │
│   │    [───────] [───────]                                     │  │
│   │       ↓ hier!                                              │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Debugging-Werkzeuge

```
┌────────────────────────────────────────────────────────────────────┐
│                   DEBUGGING-WERKZEUGE                              │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   IDE-INTEGRIERTE DEBUGGER                                        │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • In Entwicklungsumgebungen eingebaut                      │  │
│   │ • Visual Studio, Eclipse, IntelliJ, VS Code               │  │
│   │                                                             │  │
│   │ Funktionen:                                                │  │
│   │ ┌─────────────────────────────────────────────────────┐   │  │
│   │ │ • Breakpoints setzen                                │   │  │
│   │ │ • Variablen inspizieren (Watch)                     │   │  │
│   │ │ • Call Stack anzeigen (Aufrufhierarchie)           │   │  │
│   │ │ • Schrittweise Ausführung                          │   │  │
│   │ │ • Bedingungsabhängige Breakpoints                   │   │  │
│   │ │ • Variablenwerte zur Laufzeit ändern               │   │  │
│   │ └─────────────────────────────────────────────────────┘   │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   DEBUGGER-ANSICHT (typisch)                                      │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ ┌─────────────────┐  ┌──────────────────────────────────┐ │  │
│   │ │ Variables       │  │ Code                              │ │  │
│   │ │ ──────────────  │  │ ──────────────────────────────── │ │  │
│   │ │ x = 5           │  │ 10: int x = 5;                   │ │  │
│   │ │ y = 10          │  │ 11: ● int y = x * 2;             │ │  │
│   │ │ summe = 15      │  │ 12: int summe = x + y;           │ │  │
│   │ └─────────────────┘  │ 13: return summe;                │ │  │
│   │ ┌─────────────────┐  └──────────────────────────────────┘ │  │
│   │ │ Call Stack      │                                       │  │
│   │ │ ──────────────  │  [Step Over] [Step Into] [Continue]  │  │
│   │ │ main()          │                                       │  │
│   │ │  → berechne()   │                                       │  │
│   │ └─────────────────┘                                       │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Systematische Fehlersuche

```
┌────────────────────────────────────────────────────────────────────┐
│                  SYSTEMATISCHE FEHLERSUCHE                         │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   SCHRITT 1: Fehler reproduzieren                                 │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Genaue Schritte dokumentieren, die zum Fehler führen     │  │
│   │ • Reproduzierbarkeit prüfen                                │  │
│   │ • Fehlermeldung notieren                                   │  │
│   └────────────────────────────────────────────────────────────┘  │
│                              ↓                                     │
│   SCHRITT 2: Fehlerbereich eingrenzen                             │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Welche Funktion? Welche Zeile?                           │  │
│   │ • Wann tritt der Fehler auf?                               │  │
│   │ • Bei welchen Eingaben?                                    │  │
│   └────────────────────────────────────────────────────────────┘  │
│                              ↓                                     │
│   SCHRITT 3: Hypothese bilden                                     │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Was könnte die Ursache sein?                             │  │
│   │ • Vermutung aufstellen                                     │  │
│   └────────────────────────────────────────────────────────────┘  │
│                              ↓                                     │
│   SCHRITT 4: Hypothese testen                                     │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Debugging-Werkzeuge einsetzen                            │  │
│   │ • Variablen überprüfen                                     │  │
│   │ • Bestätigung oder neue Hypothese                          │  │
│   └────────────────────────────────────────────────────────────┘  │
│                              ↓                                     │
│   SCHRITT 5: Fehler beheben und testen                            │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Korrektur implementieren                                 │  │
│   │ • Testen, ob Fehler behoben                                │  │
│   │ • Regressionstest: Keine neuen Fehler?                     │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Häufige Fehlerquellen

```
┌────────────────────────────────────────────────────────────────────┐
│                   HÄUFIGE FEHLERQUELLEN                            │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   OFF-BY-ONE FEHLER                                                │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Schleifen um eins daneben:                                 │  │
│   │ FÜR i VON 1 BIS 10  ← 10 Durchläufe                       │  │
│   │ FÜR i VON 0 BIS 10  ← 11 Durchläufe!                      │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   NULLPOINTER / UNINITIALISIERTE VARIABLEN                        │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Variable verwendet, bevor sie einen Wert hat:              │  │
│   │ int x;                                                     │  │
│   │ y = x + 1;  ← x hat keinen definierten Wert!              │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   FALSCHE VERGLEICHE                                              │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Zuweisung statt Vergleich:                                 │  │
│   │ WENN x = 5 DANN    ← Zuweisung (falsch!)                  │  │
│   │ WENN x == 5 DANN   ← Vergleich (richtig)                  │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   ENDLOSSCHLEIFEN                                                 │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Abbruchbedingung wird nie erreicht:                        │  │
│   │ SOLANGE x > 0                                              │  │
│   │   AUSGABE x         ← x wird nie verändert!               │  │
│   │ ENDE SOLANGE                                               │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   SCOPE-PROBLEME                                                  │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Lokale Variable verdeckt globale:                          │  │
│   │ int wert = 10;           ← global                          │  │
│   │ FUNKTION test()                                            │  │
│   │   int wert = 5;          ← lokal, verdeckt global          │  │
│   │ ...                                                        │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Debugging vs. Schreibtischtest

```
┌────────────────────────────────────────────────────────────────────┐
│             DEBUGGING vs. SCHREIBTISCHTEST                         │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   SCHREIBTISCHTEST                    DEBUGGING                    │
│   ┌──────────────────────────┐       ┌──────────────────────────┐ │
│   │ • Manuell, ohne Computer │       │ • Mit Computer/Werkzeug  │ │
│   │ • Vor der Ausführung     │       │ • Während der Ausführung │ │
│   │ • Code gedanklich        │       │ • Code tatsächlich       │ │
│   │   durchspielen           │       │   ausführen              │ │
│   │ • Tabelle mit Werten     │       │ • Debugger-Ansicht       │ │
│   │ • Keine Laufzeitfehler   │       │ • Echte Laufzeitfehler   │ │
│   │   sichtbar               │       │   sichtbar               │ │
│   └──────────────────────────┘       └──────────────────────────┘ │
│                                                                     │
│   Beide Methoden ergänzen sich:                                    │
│   1. Schreibtischtest → Logikfehler vorab finden                  │
│   2. Debugging → Laufzeitfehler lokalisieren                      │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Bug** | Fehler in der Software |
| **Debugging** | Prozess der Fehlersuche und -behebung |
| **Breakpoint** | Haltepunkt im Code |
| **Step Over** | Nächste Zeile, Funktionen überspringen |
| **Step Into** | In Funktion hineinspringen |
| **Watch** | Variable überwachen |
| **Call Stack** | Aufrufhierarchie der Funktionen |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was ist Debugging?
- Nennen Sie Debugging-Strategien
- Erklären Sie den Unterschied zwischen Step Over und Step Into

### Wichtig zu merken

- Debugging = **systematische Fehlersuche**
- **Breakpoints** stoppen die Ausführung
- **Step Over:** Funktion als Ganzes ausführen
- **Step Into:** In Funktion hineinspringen
- **Print-Debugging:** Einfach, aber Ausgaben entfernen!
- Immer **Fehler reproduzieren** können!
- Nach Korrektur: **Regressionstest**

---

## Übungsaufgaben

### Aufgabe 1
Welche Debugging-Strategie würden Sie verwenden, wenn Sie wissen, dass der Fehler irgendwo in einer 500-Zeilen-Funktion liegt?

**Lösung:**
**Divide and Conquer** (Teile und Herrsche):
1. Breakpoint in der Mitte der Funktion setzen (ca. Zeile 250)
2. Prüfen, ob der Fehler vor oder nach diesem Punkt auftritt
3. Betroffene Hälfte weiter halbieren
4. So den Fehlerbereich schnell eingrenzen

Alternativ: Binäre Suche mit Print-Statements an strategischen Stellen.

### Aufgabe 2
Was ist der Unterschied zwischen Step Over und Step Into beim Debuggen?

**Lösung:**
| Step Over | Step Into |
|-----------|-----------|
| Führt die aktuelle Zeile aus | Führt die aktuelle Zeile aus |
| Springt zur nächsten Zeile | Bei Funktionsaufrufen: Springt IN die Funktion |
| Funktionen werden komplett ausgeführt | Funktion wird Zeile für Zeile durchlaufen |
| Gut für bereits getestete Funktionen | Gut zum Untersuchen einer Funktion |

### Aufgabe 3
Finden Sie den Fehler im folgenden Pseudocode:

```
FUNKTION summe(n)
  ergebnis = 0
  FÜR i VON 1 BIS n
    ergebnis = ergebnis + 1
  ENDE FÜR
  RÜCKGABE ergebnis
ENDE FUNKTION
```

**Lösung:**
Der Fehler ist in Zeile: `ergebnis = ergebnis + 1`

Die Funktion soll die Summe von 1 bis n berechnen, addiert aber nur immer 1.

**Korrektur:**
`ergebnis = ergebnis + i`

Die Variable `i` (der Schleifenzähler) muss addiert werden, nicht die Konstante 1.

---

## Querverweise

- [06-02-06 Schreibtischtest](../06-02-programming/06-02-06-desk-check.md) - Manuelle Code-Prüfung
- [06-02-07 Fehlersuche im Code](../06-02-programming/06-02-07-code-debugging.md) - Fehlerarten
- [06-06-02 Testing](./06-06-02-testing.md) - Softwaretests
- [06-02-02 Kontrollstrukturen](../06-02-programming/06-02-02-control-structures.md) - Schleifen
