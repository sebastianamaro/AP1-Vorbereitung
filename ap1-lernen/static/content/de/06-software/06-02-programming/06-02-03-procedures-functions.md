# Prozeduren und Funktionen

## Lernziele

Nach diesem Kapitel solltest du:
- Prozeduren und Funktionen unterscheiden können
- Parameter und Rückgabewerte verstehen
- Den Unterschied zwischen Wert- und Referenzübergabe kennen
- Funktionen definieren und aufrufen können

---

## Kerninhalt

### Was sind Prozeduren und Funktionen?

**Prozeduren** und **Funktionen** sind benannte Codeblöcke, die eine bestimmte Aufgabe erfüllen und mehrfach aufgerufen werden können.

```
┌─────────────────────────────────────────────────────────────────┐
│           PROZEDUREN UND FUNKTIONEN                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   PROZEDUR                         FUNKTION                    │
│   ┌─────────────────────┐         ┌─────────────────────┐     │
│   │                     │         │                     │     │
│   │  Führt Aufgabe aus  │         │  Führt Aufgabe aus  │     │
│   │                     │         │  UND                │     │
│   │  Kein Rückgabewert  │         │  Gibt Wert zurück   │     │
│   │                     │         │                     │     │
│   └─────────────────────┘         └─────────────────────┘     │
│                                                                 │
│   Beispiel:                       Beispiel:                    │
│   begruesse("Max")                ergebnis = addiere(5, 3)    │
│   → Gibt "Hallo Max" aus          → ergebnis = 8              │
│   → Kein Rückgabewert                                          │
│                                                                 │
│   Hinweis: In vielen modernen Sprachen (Python, Java) wird    │
│   der Begriff "Funktion" oder "Methode" für beides verwendet. │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Vorteile von Funktionen

| Vorteil | Beschreibung |
|---------|--------------|
| **Wiederverwendbarkeit** | Code einmal schreiben, mehrfach nutzen |
| **Übersichtlichkeit** | Komplexen Code in kleine Teile zerlegen |
| **Wartbarkeit** | Änderungen nur an einer Stelle nötig |
| **Testbarkeit** | Einzelne Funktionen separat testen |
| **DRY-Prinzip** | "Don't Repeat Yourself" |

---

### Aufbau einer Funktion

```
┌────────────────────────────────────────────────────────────────┐
│                   AUFBAU EINER FUNKTION                        │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   FUNKTION funktionsname(parameter1, parameter2)              │
│       // Anweisungen                                          │
│       RÜCKGABE ergebnis                                       │
│   ENDE FUNKTION                                               │
│                                                                │
│   ┌─────────────────────────────────────────────────────────┐ │
│   │  Name         │ Eindeutiger Bezeichner                  │ │
│   │  Parameter    │ Eingabewerte (optional)                 │ │
│   │  Körper       │ Anweisungen innerhalb der Funktion      │ │
│   │  Rückgabewert │ Ergebnis der Funktion (optional)        │ │
│   └─────────────────────────────────────────────────────────┘ │
│                                                                │
│   Beispiel Python:                                            │
│   def addiere(a, b):                                          │
│       summe = a + b                                           │
│       return summe                                            │
│                                                                │
│   Beispiel Java:                                              │
│   public int addiere(int a, int b) {                         │
│       int summe = a + b;                                      │
│       return summe;                                           │
│   }                                                           │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Parameter

**Parameter** sind Variablen, die beim Aufruf an die Funktion übergeben werden.

```
┌────────────────────────────────────────────────────────────────┐
│                       PARAMETER                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   DEFINITION:                                                  │
│   ┌─────────────────────────────────────────────────────────┐ │
│   │  FUNKTION berechneFlaeche(laenge, breite)               │ │
│   │      RÜCKGABE laenge * breite    ▲        ▲             │ │
│   │  ENDE FUNKTION                   │        │             │ │
│   │                           Parameter (formal)            │ │
│   └─────────────────────────────────────────────────────────┘ │
│                                                                │
│   AUFRUF:                                                     │
│   ┌─────────────────────────────────────────────────────────┐ │
│   │  ergebnis = berechneFlaeche(5, 3)                       │ │
│   │                              ▲  ▲                       │ │
│   │                              │  │                       │ │
│   │                      Argumente (aktual)                 │ │
│   │                                                         │ │
│   │  → laenge = 5, breite = 3                               │ │
│   │  → ergebnis = 15                                        │ │
│   └─────────────────────────────────────────────────────────┘ │
│                                                                │
│   Formale Parameter: In der Funktionsdefinition              │
│   Aktuelle Parameter (Argumente): Beim Aufruf übergeben      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Rückgabewert

Der **Rückgabewert** ist das Ergebnis, das eine Funktion an den Aufrufer zurückgibt.

```
┌────────────────────────────────────────────────────────────────┐
│                     RÜCKGABEWERT                               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Mit Rückgabewert:                                           │
│                                                                │
│   FUNKTION verdopple(zahl)                                    │
│       RÜCKGABE zahl * 2                                       │
│   ENDE FUNKTION                                               │
│                                                                │
│   ergebnis = verdopple(5)     // ergebnis = 10               │
│                                                                │
│   ────────────────────────────────────────────────────────── │
│                                                                │
│   Ohne Rückgabewert (Prozedur):                              │
│                                                                │
│   PROZEDUR zeigeNachricht(text)                              │
│       ausgabe(text)                                           │
│       // kein return                                          │
│   ENDE PROZEDUR                                               │
│                                                                │
│   zeigeNachricht("Hallo!")    // Gibt "Hallo!" aus           │
│                               // Kein Wert zurückgegeben      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Wertübergabe vs. Referenzübergabe

```
┌────────────────────────────────────────────────────────────────┐
│           WERTÜBERGABE vs. REFERENZÜBERGABE                    │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   WERTÜBERGABE (Call by Value)                                │
│   ┌─────────────────────────────────────────────────────────┐ │
│   │  • Kopie des Wertes wird übergeben                      │ │
│   │  • Original bleibt unverändert                          │ │
│   │  • Typisch für: primitive Datentypen                    │ │
│   │                                                         │ │
│   │  x = 5                                                  │ │
│   │  verdopple(x)      // Funktion arbeitet mit Kopie      │ │
│   │  ausgabe(x)        // x ist immer noch 5               │ │
│   └─────────────────────────────────────────────────────────┘ │
│                                                                │
│   REFERENZÜBERGABE (Call by Reference)                        │
│   ┌─────────────────────────────────────────────────────────┐ │
│   │  • Referenz auf das Original wird übergeben             │ │
│   │  • Änderungen wirken sich auf Original aus              │ │
│   │  • Typisch für: Objekte, Arrays                         │ │
│   │                                                         │ │
│   │  liste = [1, 2, 3]                                      │ │
│   │  fuegeHinzu(liste, 4)   // Referenz übergeben          │ │
│   │  ausgabe(liste)         // [1, 2, 3, 4]                │ │
│   └─────────────────────────────────────────────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Gültigkeitsbereich (Scope)

```
┌────────────────────────────────────────────────────────────────┐
│                  GÜLTIGKEITSBEREICH                            │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   GLOBALE Variable           LOKALE Variable                  │
│   ┌────────────────────┐    ┌────────────────────┐           │
│   │ Im gesamten        │    │ Nur innerhalb der  │           │
│   │ Programm gültig    │    │ Funktion gültig    │           │
│   └────────────────────┘    └────────────────────┘           │
│                                                                │
│   Beispiel:                                                   │
│                                                                │
│   globalVar = 100                // Global                    │
│                                                                │
│   FUNKTION beispiel()                                         │
│       lokalVar = 50              // Lokal                     │
│       ausgabe(globalVar)         // OK: 100                   │
│       ausgabe(lokalVar)          // OK: 50                    │
│   ENDE FUNKTION                                               │
│                                                                │
│   beispiel()                                                  │
│   ausgabe(globalVar)             // OK: 100                   │
│   ausgabe(lokalVar)              // FEHLER! Nicht sichtbar   │
│                                                                │
│   Best Practice: Globale Variablen vermeiden!                │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Beispiele in verschiedenen Sprachen

| Aspekt | Python | Java |
|--------|--------|------|
| **Definition** | `def name(param):` | `public int name(int param) {` |
| **Rückgabe** | `return wert` | `return wert;` |
| **Kein Rückgabewert** | Kein return / `return None` | `void` als Rückgabetyp |
| **Aufruf** | `ergebnis = name(arg)` | `int ergebnis = name(arg);` |

```
# Python
def gruss(name):
    return "Hallo " + name

nachricht = gruss("Max")
print(nachricht)           // "Hallo Max"

// Java
public String gruss(String name) {
    return "Hallo " + name;
}

String nachricht = gruss("Max");
System.out.println(nachricht);  // "Hallo Max"
```

---

### Rekursion

Eine **rekursive Funktion** ruft sich selbst auf.

```
┌────────────────────────────────────────────────────────────────┐
│                       REKURSION                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Beispiel: Fakultät (n!)                                     │
│   5! = 5 × 4 × 3 × 2 × 1 = 120                               │
│                                                                │
│   FUNKTION fakultaet(n)                                       │
│       WENN n <= 1 DANN                                        │
│           RÜCKGABE 1                // Abbruchbedingung       │
│       SONST                                                   │
│           RÜCKGABE n * fakultaet(n - 1)  // Rekursiver Aufruf│
│       ENDE WENN                                               │
│   ENDE FUNKTION                                               │
│                                                                │
│   Ablauf für fakultaet(4):                                    │
│                                                                │
│   fakultaet(4) = 4 * fakultaet(3)                            │
│                      = 3 * fakultaet(2)                       │
│                           = 2 * fakultaet(1)                  │
│                                = 1  (Abbruch)                 │
│                           = 2 * 1 = 2                         │
│                      = 3 * 2 = 6                              │
│                = 4 * 6 = 24                                   │
│                                                                │
│   Wichtig: Immer Abbruchbedingung definieren!                │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Funktion** | Benannter Codeblock mit Rückgabewert |
| **Prozedur** | Benannter Codeblock ohne Rückgabewert |
| **Parameter** | Eingabewerte einer Funktion |
| **Argument** | Konkreter Wert beim Funktionsaufruf |
| **Rückgabewert** | Ergebnis einer Funktion |
| **Scope** | Gültigkeitsbereich einer Variable |
| **Rekursion** | Funktion ruft sich selbst auf |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was ist der Unterschied zwischen Funktion und Prozedur?
- Was sind Parameter und Rückgabewerte?
- Erklären Sie den Unterschied zwischen lokalen und globalen Variablen

### Wichtig zu merken

- **Funktion** = gibt Wert zurück (return)
- **Prozedur** = kein Rückgabewert
- **Parameter** = Eingabe in die Funktion
- **Lokale Variable** = nur in der Funktion gültig
- **Globale Variable** = überall gültig (vermeiden!)

---

## Übungsaufgaben

### Aufgabe 1
Was ist der Unterschied zwischen einer Funktion und einer Prozedur?

**Lösung:**
- **Funktion:** Ein Unterprogramm, das einen Wert berechnet und diesen an den Aufrufer zurückgibt. Beispiel: `berechneFlaeche(laenge, breite)` gibt die Fläche zurück.
- **Prozedur:** Ein Unterprogramm, das eine Aufgabe ausführt, aber keinen Wert zurückgibt. Beispiel: `zeigeNachricht(text)` gibt einen Text aus.

### Aufgabe 2
Schreiben Sie eine Funktion in Pseudocode, die zwei Zahlen addiert und das Ergebnis zurückgibt.

**Lösung:**
```
FUNKTION addiere(zahl1, zahl2)
    summe = zahl1 + zahl2
    RÜCKGABE summe
ENDE FUNKTION

// Aufruf:
ergebnis = addiere(5, 3)
ausgabe(ergebnis)        // 8
```

### Aufgabe 3
Was wird bei folgendem Pseudocode ausgegeben?

```
x = 10

FUNKTION aendereWert(y)
    y = y + 5
    RÜCKGABE y
ENDE FUNKTION

ergebnis = aendereWert(x)
ausgabe(x)
ausgabe(ergebnis)
```

**Lösung:**
- `ausgabe(x)` → **10** (x bleibt unverändert, da Wertübergabe)
- `ausgabe(ergebnis)` → **15** (Rückgabewert der Funktion)

Bei Wertübergabe wird nur eine Kopie von x übergeben. Das Original x bleibt 10.

---

## Querverweise

- [06-02-04 OOP-Grundlagen](./06-02-04-oop-fundamentals.md) - Methoden in Klassen
- [06-02-05 Pseudocode](./06-02-05-pseudocode.md) - Funktionen in Pseudocode
- [06-02-06 Schreibtischtest](./06-02-06-desk-check.md) - Funktionsaufrufe verfolgen
