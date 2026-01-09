# Fehlersuche im Code

## Lernziele

Nach diesem Kapitel solltest du:
- Verschiedene Fehlerarten unterscheiden können
- Syntaxfehler erkennen können
- Logische Fehler identifizieren können
- Systematisch nach Fehlern suchen können

---

## Kerninhalt

### Fehlerarten im Programmcode

```
┌─────────────────────────────────────────────────────────────────┐
│                    FEHLERARTEN IM CODE                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │   WICHTIG FÜR DIE PRÜFUNG!                              │  │
│   │   [NEU IM PRÜFUNGSKATALOG 2025]                         │  │
│   │                                                          │  │
│   │   Häufige Aufgabenstellung:                             │  │
│   │   "Finden Sie den/die Fehler im folgenden Code"         │  │
│   └─────────────────────────────────────────────────────────┘  │
│                                                                 │
│                        FEHLERARTEN                              │
│                            │                                    │
│           ┌────────────────┼────────────────┐                  │
│           │                │                │                  │
│     ┌─────▼─────┐    ┌─────▼─────┐    ┌─────▼─────┐          │
│     │  SYNTAX-  │    │  LAUF-    │    │  LOGISCHE │          │
│     │  FEHLER   │    │  ZEIT-    │    │  FEHLER   │          │
│     │           │    │  FEHLER   │    │           │          │
│     │ Compiler  │    │ Während   │    │ Falsches  │          │
│     │ findet sie│    │ Ausführung│    │ Ergebnis  │          │
│     └───────────┘    └───────────┘    └───────────┘          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

| Fehlerart | Wann erkannt? | Beispiel |
|-----------|--------------|----------|
| **Syntaxfehler** | Beim Kompilieren | Fehlendes Semikolon |
| **Laufzeitfehler** | Bei Ausführung | Division durch Null |
| **Logischer Fehler** | Falsches Ergebnis | Falsche Formel |

---

### Syntaxfehler (Syntax Errors)

**Syntaxfehler** verletzen die Grammatik der Programmiersprache.

```
┌────────────────────────────────────────────────────────────────┐
│                     SYNTAXFEHLER                               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Häufige Syntaxfehler:                                       │
│                                                                │
│   1. Fehlende Klammern                                        │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   FALSCH:  if alter >= 18                              │ │
│   │   RICHTIG: if (alter >= 18)        // Java            │ │
│   │   RICHTIG: if alter >= 18:         // Python (Doppelp.)│ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   2. Fehlendes Semikolon (Java, C#, JavaScript)              │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   FALSCH:  int x = 5                                   │ │
│   │   RICHTIG: int x = 5;                                  │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   3. Falsche Anführungszeichen                               │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   FALSCH:  String name = 'Max';    // Einfache        │ │
│   │   RICHTIG: String name = "Max";    // Doppelte (Java) │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   4. Fehlende geschweifte Klammern                           │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   FALSCH:  if (x > 0)                                  │ │
│   │              x = x + 1;                                │ │
│   │              y = y + 1;    // Nicht im If!            │ │
│   │                                                        │ │
│   │   RICHTIG: if (x > 0) {                               │ │
│   │               x = x + 1;                              │ │
│   │               y = y + 1;   // Im If-Block            │ │
│   │            }                                          │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   5. Tippfehler bei Schlüsselwörtern                         │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   FALSCH:  whlie (x < 10)                             │ │
│   │   RICHTIG: while (x < 10)                             │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Laufzeitfehler (Runtime Errors)

**Laufzeitfehler** treten erst während der Programmausführung auf.

```
┌────────────────────────────────────────────────────────────────┐
│                    LAUFZEITFEHLER                              │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   1. Division durch Null                                      │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   a = 10                                                │ │
│   │   b = 0                                                 │ │
│   │   c = a / b     // FEHLER: Division durch 0!          │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   2. Array-Index außerhalb des Bereichs                      │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   int[] zahlen = {1, 2, 3};  // Index 0, 1, 2         │ │
│   │   x = zahlen[5];              // FEHLER: Index 5 gibts│ │
│   │                               // nicht!               │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   3. Null-Pointer / None-Zugriff                             │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   String name = null;                                  │ │
│   │   int laenge = name.length();  // FEHLER: null hat    │ │
│   │                                // keine Methoden!      │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   4. Typkonvertierungsfehler                                 │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   String text = "abc";                                 │ │
│   │   int zahl = Integer.parseInt(text);  // FEHLER:     │ │
│   │                                        // "abc" ist   │ │
│   │                                        // keine Zahl  │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Logische Fehler (Logic Errors)

**Logische Fehler** sind die schwierigsten zu finden - das Programm läuft, aber liefert falsche Ergebnisse.

```
┌────────────────────────────────────────────────────────────────┐
│                    LOGISCHE FEHLER                             │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   1. Falscher Operator                                        │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   // Durchschnitt berechnen                            │ │
│   │   FALSCH:  durchschnitt = summe * anzahl              │ │
│   │   RICHTIG: durchschnitt = summe / anzahl              │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   2. Off-by-One-Fehler (um eins daneben)                     │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   // Zahlen 1 bis 10 ausgeben                          │ │
│   │   FALSCH:  FÜR i VON 1 BIS 9       // nur bis 9!     │ │
│   │   RICHTIG: FÜR i VON 1 BIS 10      // bis 10         │ │
│   │                                                        │ │
│   │   FALSCH:  FÜR i VON 0 BIS 10      // 0 bis 10 = 11! │ │
│   │   RICHTIG: FÜR i VON 0 BIS 9       // 0 bis 9 = 10   │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   3. Falsche Bedingung                                        │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   // Volljährigkeit prüfen                             │ │
│   │   FALSCH:  WENN alter > 18 DANN    // 18 fehlt!      │ │
│   │   RICHTIG: WENN alter >= 18 DANN                      │ │
│   │                                                        │ │
│   │   // Prüfung bestanden                                │ │
│   │   FALSCH:  WENN note < 4 DANN bestanden              │ │
│   │   RICHTIG: WENN note <= 4 DANN bestanden             │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   4. Vertauschte Operanden                                   │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   // Prüfen ob a kleiner als b                        │ │
│   │   FALSCH:  WENN b < a DANN ...   // umgekehrt!       │ │
│   │   RICHTIG: WENN a < b DANN ...                        │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   5. Zuweisung statt Vergleich                               │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   FALSCH:  WENN x = 5 DANN ...   // Zuweisung!       │ │
│   │   RICHTIG: WENN x == 5 DANN ...  // Vergleich        │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   6. Endlosschleife                                          │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   i = 0                                                │ │
│   │   SOLANGE i < 10                                       │ │
│   │       ausgabe(i)                                       │ │
│   │       // FEHLER: i wird nie erhöht → Endlosschleife!  │ │
│   │   ENDE SOLANGE                                         │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Systematische Fehlersuche

```
┌────────────────────────────────────────────────────────────────┐
│              SYSTEMATISCHE FEHLERSUCHE                         │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   1. Code genau lesen                                         │
│      • Jede Zeile einzeln prüfen                             │
│      • Auf Klammern und Semikolons achten                    │
│      • Variablennamen prüfen (Tippfehler?)                   │
│                                                                │
│   2. Logik prüfen                                             │
│      • Bedingungen: < vs <= vs > vs >=                       │
│      • Operatoren: + vs - vs * vs /                          │
│      • Vergleich vs Zuweisung: == vs =                       │
│                                                                │
│   3. Grenzfälle bedenken                                      │
│      • Was passiert bei 0?                                   │
│      • Was passiert beim ersten/letzten Element?             │
│      • Was passiert bei leerem Input?                        │
│                                                                │
│   4. Schreibtischtest durchführen                             │
│      • Jeden Schritt manuell nachvollziehen                  │
│      • Variablenwerte notieren                               │
│      • Ergebnis mit Erwartung vergleichen                    │
│                                                                │
│   5. Typische Fehlermuster kennen                             │
│      • Off-by-One                                            │
│      • Endlosschleifen                                       │
│      • Division durch Null                                   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Checkliste für Fehlersuche

| Prüfpunkt | Was prüfen? |
|-----------|-------------|
| **Syntax** | Klammern, Semikolons, Anführungszeichen |
| **Variablen** | Initialisiert? Richtig geschrieben? |
| **Bedingungen** | Richtige Operatoren? (< vs <=) |
| **Schleifen** | Abbruchbedingung erreichbar? Zähler aktualisiert? |
| **Rückgabewerte** | Wird der richtige Wert zurückgegeben? |
| **Grenzfälle** | 0, null, leere Listen, erstes/letztes Element |

---

### Prüfungsbeispiele: Fehler finden

```
┌────────────────────────────────────────────────────────────────┐
│              PRÜFUNGSBEISPIEL 1                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Aufgabe: Finden Sie den Fehler!                            │
│                                                                │
│   // Summe der Zahlen 1 bis n berechnen                      │
│   FUNKTION summe(n)                                          │
│       ergebnis = 0                                            │
│       FÜR i VON 1 BIS n                                       │
│           ergebnis = ergebnis + 1      // <-- FEHLER!        │
│       ENDE FÜR                                                │
│       RÜCKGABE ergebnis                                       │
│   ENDE FUNKTION                                               │
│                                                                │
│   FEHLER: ergebnis + 1 müsste ergebnis + i sein!            │
│   Korrektur: ergebnis = ergebnis + i                         │
│                                                                │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│              PRÜFUNGSBEISPIEL 2                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Aufgabe: Finden Sie die Fehler!                            │
│                                                                │
│   // Minimum in einer Liste finden                           │
│   FUNKTION minimum(liste)                                     │
│       min = 0                          // <-- FEHLER 1!      │
│       FÜR i VON 1 BIS laenge(liste)                          │
│           WENN liste[i] < min DANN     // <-- FEHLER 2!      │
│               min = liste[i]                                  │
│           ENDE WENN                                           │
│       ENDE FÜR                                                │
│       RÜCKGABE min                                            │
│   ENDE FUNKTION                                               │
│                                                                │
│   FEHLER 1: min = 0 funktioniert nicht, wenn alle Werte > 0 │
│             Besser: min = liste[0] (erstes Element)          │
│   FEHLER 2: Index beginnt oft bei 0, nicht 1                 │
│             Besser: FÜR i VON 0 BIS laenge(liste) - 1        │
│                                                                │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│              PRÜFUNGSBEISPIEL 3                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Aufgabe: Finden Sie den Fehler!                            │
│                                                                │
│   // Volljährigkeit prüfen                                   │
│   alter = eingabe("Alter eingeben:")                         │
│   WENN alter = 18 DANN                 // <-- FEHLER!        │
│       ausgabe("Gerade volljährig")                           │
│   SONST WENN alter > 18 DANN                                 │
│       ausgabe("Volljährig")                                  │
│   SONST                                                       │
│       ausgabe("Minderjährig")                                │
│   ENDE WENN                                                   │
│                                                                │
│   FEHLER: alter = 18 ist eine Zuweisung, kein Vergleich!    │
│   Korrektur: WENN alter == 18 DANN                           │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Syntaxfehler** | Verletzung der Sprachgrammatik |
| **Laufzeitfehler** | Fehler während der Ausführung |
| **Logischer Fehler** | Falsche Programmlogik |
| **Off-by-One** | Um-Eins-Daneben-Fehler |
| **Debugging** | Prozess der Fehlersuche |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Finden Sie den Fehler im Code
- Welche Art von Fehler liegt vor?
- Korrigieren Sie den fehlerhaften Code

### Wichtig zu merken

- **Syntaxfehler**: Klammern, Semikolons, Schreibfehler
- **Logische Fehler**: Falsche Operatoren, Off-by-One
- **= vs ==**: Zuweisung vs. Vergleich
- **< vs <=**: Grenzwerte beachten!
- **Schreibtischtest**: Bei Verdacht durchführen

---

## Übungsaufgaben

### Aufgabe 1
Finden Sie den Fehler im folgenden Code:

```
// Zahlen 1 bis 5 ausgeben
i = 1
SOLANGE i < 5
    ausgabe(i)
    i = i + 1
ENDE SOLANGE
```

**Lösung:**
**Fehler:** Die Bedingung `i < 5` gibt nur 1,2,3,4 aus - die 5 fehlt!
**Korrektur:** `SOLANGE i <= 5` oder `SOLANGE i < 6`

### Aufgabe 2
Welche Fehlerart liegt vor und wie lautet die Korrektur?

```
// Durchschnitt von drei Noten berechnen
note1 = 2
note2 = 3
note3 = 1
durchschnitt = (note1 + note2 + note3) / 2
ausgabe(durchschnitt)
```

**Lösung:**
**Fehlerart:** Logischer Fehler
**Fehler:** Division durch 2 statt durch 3 (Anzahl der Noten)
**Korrektur:** `durchschnitt = (note1 + note2 + note3) / 3`

### Aufgabe 3
Finden und korrigieren Sie alle Fehler:

```
// Prüfen ob Zahl zwischen 10 und 20 liegt
zahl = eingabe("Zahl eingeben")
WENN zahl > 10 UND zahl < 20 DANN
    ausgabe("Im Bereich"
SONST
    ausgabe("Außerhalb")
ENDE
```

**Lösung:**
**Fehler 1:** `zahl > 10` sollte `zahl >= 10` sein (10 gehört dazu)
**Fehler 2:** `zahl < 20` sollte `zahl <= 20` sein (20 gehört dazu)
**Fehler 3:** Fehlende schließende Klammer bei `ausgabe("Im Bereich"`
**Fehler 4:** `ENDE` sollte `ENDE WENN` sein

**Korrigierter Code:**
```
zahl = eingabe("Zahl eingeben")
WENN zahl >= 10 UND zahl <= 20 DANN
    ausgabe("Im Bereich")
SONST
    ausgabe("Außerhalb")
ENDE WENN
```

---

## Querverweise

- [06-02-06 Schreibtischtest](./06-02-06-desk-check.md) - Manuelle Codeprüfung
- [06-06-03 Debugging](../06-06-development-process/06-06-03-debugging.md) - Fehlersuche-Techniken
- [06-06-02 Testing](../06-06-development-process/06-06-02-testing.md) - Testmethoden
