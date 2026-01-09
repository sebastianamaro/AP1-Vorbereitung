# Kontrollstrukturen

## Lernziele

Nach diesem Kapitel solltest du:
- Sequenz, Selektion und Iteration unterscheiden können
- If-Else-Strukturen verstehen
- Verschiedene Schleifentypen kennen
- Switch/Case-Anweisungen verstehen

---

## Kerninhalt

### Grundlegende Kontrollstrukturen

```
┌─────────────────────────────────────────────────────────────────┐
│                   KONTROLLSTRUKTUREN                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                    KONTROLLSTRUKTUREN                           │
│                           │                                     │
│          ┌────────────────┼────────────────┐                   │
│          │                │                │                   │
│    ┌─────▼─────┐    ┌─────▼─────┐    ┌─────▼─────┐            │
│    │  SEQUENZ  │    │ SELEKTION │    │ ITERATION │            │
│    │           │    │           │    │           │            │
│    │ Anweisung │    │ Bedingung │    │ Schleifen │            │
│    │ nach      │    │ If-Else   │    │ For       │            │
│    │ Anweisung │    │ Switch    │    │ While     │            │
│    └───────────┘    └───────────┘    │ Do-While  │            │
│                                       └───────────┘            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Sequenz

**Sequenz** = Anweisungen werden nacheinander (sequenziell) ausgeführt.

```
┌────────────────────────────────────────────────────────────────┐
│                        SEQUENZ                                 │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│     ┌──────────────┐                                          │
│     │ Anweisung 1  │    // a = 5                              │
│     └──────┬───────┘                                          │
│            │                                                   │
│            ▼                                                   │
│     ┌──────────────┐                                          │
│     │ Anweisung 2  │    // b = 10                             │
│     └──────┬───────┘                                          │
│            │                                                   │
│            ▼                                                   │
│     ┌──────────────┐                                          │
│     │ Anweisung 3  │    // c = a + b                          │
│     └──────────────┘                                          │
│                                                                │
│   Pseudocode:                                                 │
│   a = 5                                                       │
│   b = 10                                                      │
│   c = a + b        // c = 15                                  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Selektion (Verzweigung)

#### If-Anweisung (Einfach)

```
┌────────────────────────────────────────────────────────────────┐
│                     IF (EINFACH)                               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│            ┌──────────┐                                       │
│            │ Bedingung│                                       │
│            └────┬─────┘                                       │
│         ja      │                                              │
│        ┌────────┴────────┐                                    │
│        │                 │ nein                               │
│        ▼                 │                                     │
│   ┌──────────┐          │                                     │
│   │Anweisung │          │                                     │
│   └────┬─────┘          │                                     │
│        │                │                                     │
│        └────────────────┴───►                                 │
│                                                                │
│   Pseudocode:                                                 │
│   WENN alter >= 18 DANN                                       │
│       ausgabe("Volljährig")                                   │
│   ENDE WENN                                                   │
│                                                                │
│   Python:                                                     │
│   if alter >= 18:                                             │
│       print("Volljährig")                                     │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### If-Else-Anweisung

```
┌────────────────────────────────────────────────────────────────┐
│                      IF-ELSE                                   │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│                  ┌──────────┐                                 │
│                  │ Bedingung│                                 │
│                  └────┬─────┘                                 │
│           ja          │         nein                          │
│          ┌────────────┴────────────┐                         │
│          ▼                         ▼                          │
│    ┌───────────┐            ┌───────────┐                    │
│    │Anweisung 1│            │Anweisung 2│                    │
│    └─────┬─────┘            └─────┬─────┘                    │
│          │                        │                           │
│          └────────────┬───────────┘                          │
│                       ▼                                       │
│                                                                │
│   Pseudocode:                                                 │
│   WENN alter >= 18 DANN                                       │
│       ausgabe("Volljährig")                                   │
│   SONST                                                       │
│       ausgabe("Minderjährig")                                 │
│   ENDE WENN                                                   │
│                                                                │
│   Python:                                                     │
│   if alter >= 18:                                             │
│       print("Volljährig")                                     │
│   else:                                                       │
│       print("Minderjährig")                                   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### If-Else-If (Mehrfachauswahl)

```
┌────────────────────────────────────────────────────────────────┐
│                    IF-ELSE-IF                                  │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Pseudocode:                    Python:                      │
│                                                                │
│   WENN note <= 1.5 DANN          if note <= 1.5:             │
│       ausgabe("Sehr gut")            print("Sehr gut")        │
│   SONST WENN note <= 2.5 DANN    elif note <= 2.5:           │
│       ausgabe("Gut")                 print("Gut")             │
│   SONST WENN note <= 3.5 DANN    elif note <= 3.5:           │
│       ausgabe("Befriedigend")        print("Befriedigend")    │
│   SONST WENN note <= 4.0 DANN    elif note <= 4.0:           │
│       ausgabe("Ausreichend")         print("Ausreichend")     │
│   SONST                          else:                        │
│       ausgabe("Nicht bestanden")     print("Nicht bestanden") │
│   ENDE WENN                                                   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Vergleichsoperatoren

| Operator | Bedeutung | Beispiel |
|----------|-----------|----------|
| `==` | Gleich | `a == b` |
| `!=` | Ungleich | `a != b` |
| `<` | Kleiner | `a < b` |
| `>` | Größer | `a > b` |
| `<=` | Kleiner oder gleich | `a <= b` |
| `>=` | Größer oder gleich | `a >= b` |

---

### Logische Operatoren

```
┌────────────────────────────────────────────────────────────────┐
│                  LOGISCHE OPERATOREN                           │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   UND (AND)            ODER (OR)           NICHT (NOT)        │
│   &&  /  and           ||  /  or           !  /  not          │
│                                                                │
│   Beide wahr?          Mindestens eins?    Umkehrung          │
│                                                                │
│   true AND true = true     true OR true = true                │
│   true AND false = false   true OR false = true               │
│   false AND false = false  false OR false = false             │
│                                                                │
│   Beispiel:                                                   │
│   WENN alter >= 18 UND fuehrerschein == true DANN             │
│       ausgabe("Darf Auto fahren")                             │
│   ENDE WENN                                                   │
│                                                                │
│   Python:                                                     │
│   if alter >= 18 and fuehrerschein == True:                  │
│       print("Darf Auto fahren")                              │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Switch/Case

**Switch/Case** ermöglicht übersichtliche Mehrfachauswahl bei festen Werten.

```
┌────────────────────────────────────────────────────────────────┐
│                     SWITCH/CASE                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Pseudocode:                    Java:                        │
│                                                                │
│   WÄHLE wochentag                switch (wochentag) {         │
│       FALL 1:                        case 1:                  │
│           ausgabe("Montag")              System.out.println(  │
│       FALL 2:                              "Montag");         │
│           ausgabe("Dienstag")            break;               │
│       FALL 3:                        case 2:                  │
│           ausgabe("Mittwoch")            System.out.println(  │
│       ...                                  "Dienstag");       │
│       STANDARD:                          break;               │
│           ausgabe("Ungültig")        // usw...                │
│   ENDE WÄHLE                         default:                 │
│                                          System.out.println(  │
│                                              "Ungültig");     │
│                                  }                            │
│                                                                │
│   Wichtig: break; verhindert "Durchfallen" zum nächsten Case │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Iteration (Schleifen)

#### For-Schleife (Zählergesteuert)

```
┌────────────────────────────────────────────────────────────────┐
│                     FOR-SCHLEIFE                               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Bekannte Anzahl von Durchläufen                             │
│                                                                │
│   Pseudocode:                      Python:                    │
│   FÜR i VON 1 BIS 5               for i in range(1, 6):      │
│       ausgabe(i)                       print(i)              │
│   ENDE FÜR                                                    │
│                                                                │
│   Java:                                                       │
│   for (int i = 1; i <= 5; i++) {                             │
│       System.out.println(i);                                  │
│   }                                                           │
│                                                                │
│   Ausgabe: 1, 2, 3, 4, 5                                     │
│                                                                │
│   Aufbau (Java):                                              │
│   for (Startwert; Bedingung; Inkrement)                      │
│        └────┬────┘ └────┬────┘ └────┬────┘                   │
│             │           │           │                         │
│        int i = 1    i <= 5       i++                         │
│        (einmal)   (vor jedem   (nach jedem                   │
│                   Durchlauf)   Durchlauf)                    │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### While-Schleife (Kopfgesteuert)

```
┌────────────────────────────────────────────────────────────────┐
│                    WHILE-SCHLEIFE                              │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Bedingung wird VOR dem Schleifenkörper geprüft              │
│   → Kann 0-mal durchlaufen werden!                            │
│                                                                │
│       ┌──────────────────┐                                    │
│       │                  │                                    │
│       ▼                  │                                    │
│   ┌──────────┐          │                                    │
│   │ Bedingung│──────────┘  ja                                │
│   └────┬─────┘                                                │
│        │ nein                                                 │
│        ▼                                                      │
│                                                                │
│   Pseudocode:                      Python:                    │
│   zaehler = 1                      zaehler = 1               │
│   SOLANGE zaehler <= 5             while zaehler <= 5:       │
│       ausgabe(zaehler)                 print(zaehler)        │
│       zaehler = zaehler + 1            zaehler = zaehler + 1 │
│   ENDE SOLANGE                                                │
│                                                                │
│   Achtung: Endlosschleife vermeiden (Abbruchbedingung!)      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### Do-While-Schleife (Fußgesteuert)

```
┌────────────────────────────────────────────────────────────────┐
│                   DO-WHILE-SCHLEIFE                            │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Bedingung wird NACH dem Schleifenkörper geprüft             │
│   → Wird mindestens 1-mal durchlaufen!                        │
│                                                                │
│   ┌──────────────┐                                            │
│   │ Anweisungen  │                                            │
│   └──────┬───────┘                                            │
│          │                                                     │
│          ▼                                                     │
│   ┌──────────────┐                                            │
│   │  Bedingung?  │──────────┐                                 │
│   └──────────────┘          │ ja                              │
│          │                  │                                  │
│          │ nein            │                                  │
│          ▼         ◄───────┘                                  │
│                                                                │
│   Pseudocode:                      Java:                      │
│   TUE                              do {                       │
│       eingabe = lese()                 eingabe = scanner...  │
│   SOLANGE eingabe != "exit"        } while (!eingabe.equals( │
│                                            "exit"));          │
│                                                                │
│   Typisch für: Menüs, Eingabevalidierung                     │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Vergleich der Schleifen

| Schleife | Prüfung | Durchläufe | Anwendung |
|----------|---------|------------|-----------|
| **for** | Zähler | Bekannte Anzahl | Listen durchlaufen |
| **while** | Kopf (vorher) | 0 bis n | Unbekannte Anzahl |
| **do-while** | Fuß (nachher) | 1 bis n | Mind. 1 Durchlauf nötig |

---

### Schleifensteuerung

| Befehl | Wirkung |
|--------|---------|
| **break** | Schleife sofort verlassen |
| **continue** | Zum nächsten Durchlauf springen |

```
// Beispiel break:
for i von 1 bis 10:
    wenn i == 5:
        break        // Schleife bei 5 beenden
    ausgabe(i)
// Ausgabe: 1, 2, 3, 4

// Beispiel continue:
for i von 1 bis 5:
    wenn i == 3:
        continue     // 3 überspringen
    ausgabe(i)
// Ausgabe: 1, 2, 4, 5
```

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Sequenz** | Anweisungen nacheinander |
| **Selektion** | Verzweigung (If-Else) |
| **Iteration** | Wiederholung (Schleife) |
| **Bedingung** | Ausdruck, der true/false ergibt |
| **Kopfgesteuert** | Prüfung vor dem Durchlauf |
| **Fußgesteuert** | Prüfung nach dem Durchlauf |
| **Zählergesteuert** | For-Schleife mit Zählvariable |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was ist der Unterschied zwischen while und do-while?
- Wann verwendet man welche Schleife?
- Wie funktioniert eine if-else-Struktur?
- Was bewirkt break in einer Schleife?

### Wichtig zu merken

- **while** = 0 bis n Durchläufe (Prüfung vorher)
- **do-while** = 1 bis n Durchläufe (Prüfung nachher)
- **for** = Bekannte Anzahl Durchläufe
- **break** = Schleife verlassen
- **continue** = Durchlauf überspringen

---

## Übungsaufgaben

### Aufgabe 1
Was ist der Unterschied zwischen einer while-Schleife und einer do-while-Schleife?

**Lösung:**
- **while-Schleife:** Kopfgesteuert - die Bedingung wird VOR dem Schleifenkörper geprüft. Die Schleife kann 0-mal durchlaufen werden, wenn die Bedingung von Anfang an falsch ist.
- **do-while-Schleife:** Fußgesteuert - die Bedingung wird NACH dem Schleifenkörper geprüft. Die Schleife wird mindestens 1-mal durchlaufen, auch wenn die Bedingung falsch ist.

### Aufgabe 2
Schreiben Sie Pseudocode, der die Zahlen 1 bis 10 ausgibt, aber die Zahl 5 überspringt.

**Lösung:**
```
FÜR i VON 1 BIS 10
    WENN i == 5 DANN
        continue
    ENDE WENN
    ausgabe(i)
ENDE FÜR
```
Ausgabe: 1, 2, 3, 4, 6, 7, 8, 9, 10

### Aufgabe 3
Analysieren Sie folgenden Pseudocode. Was wird ausgegeben?

```
summe = 0
FÜR i VON 1 BIS 4
    summe = summe + i
ENDE FÜR
ausgabe(summe)
```

**Lösung:**
| Durchlauf | i | summe vorher | summe nachher |
|-----------|---|--------------|---------------|
| 1 | 1 | 0 | 0 + 1 = 1 |
| 2 | 2 | 1 | 1 + 2 = 3 |
| 3 | 3 | 3 | 3 + 3 = 6 |
| 4 | 4 | 6 | 6 + 4 = 10 |

**Ausgabe: 10**

---

## Querverweise

- [06-02-05 Pseudocode](./06-02-05-pseudocode.md) - Darstellung von Kontrollstrukturen
- [06-02-06 Schreibtischtest](./06-02-06-desk-check.md) - Code-Analyse
- [06-02-01 Variablen und Datentypen](./06-02-01-variables-datatypes.md) - Bedingungswerte
