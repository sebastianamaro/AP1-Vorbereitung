# Pseudocode

## Lernziele

Nach diesem Kapitel solltest du:
- Pseudocode lesen und verstehen können
- Einfache Algorithmen in Pseudocode schreiben können
- Kontrollstrukturen in Pseudocode darstellen können
- Pseudocode in echten Code übersetzen können

---

## Kerninhalt

### Was ist Pseudocode?

**Pseudocode** ist eine informelle, sprachunabhängige Beschreibung eines Algorithmus, die wie Programmcode aussieht, aber in natürlicher Sprache formuliert ist.

```
┌─────────────────────────────────────────────────────────────────┐
│                      PSEUDOCODE                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Eigenschaften:                                               │
│   • Sprachunabhängig (nicht an Python, Java, etc. gebunden)   │
│   • Menschenlesbar                                             │
│   • Keine strenge Syntax                                       │
│   • Fokus auf Logik, nicht auf Details                        │
│   • Gut für Planung und Dokumentation                         │
│                                                                 │
│   Beispiel:                                                    │
│   ┌─────────────────────────────────────────────────────────┐ │
│   │  ALGORITHMUS Maximum finden                              │ │
│   │                                                          │ │
│   │  EINGABE: Liste von Zahlen                              │ │
│   │  AUSGABE: Größte Zahl                                   │ │
│   │                                                          │ │
│   │  max = erstes Element der Liste                         │ │
│   │  FÜR JEDES element IN Liste                             │ │
│   │      WENN element > max DANN                            │ │
│   │          max = element                                   │ │
│   │      ENDE WENN                                          │ │
│   │  ENDE FÜR                                                │ │
│   │  RÜCKGABE max                                            │ │
│   └─────────────────────────────────────────────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Grundelemente des Pseudocodes

#### Variablen und Zuweisung

```
┌────────────────────────────────────────────────────────────────┐
│                VARIABLEN UND ZUWEISUNG                         │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Deklaration/Zuweisung:                                      │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   zaehler = 0                                           │ │
│   │   name = "Max"                                          │ │
│   │   istAktiv = WAHR                                       │ │
│   │   preis = 19.99                                         │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Berechnung:                                                 │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   summe = a + b                                         │ │
│   │   differenz = a - b                                     │ │
│   │   produkt = a * b                                       │ │
│   │   quotient = a / b                                      │ │
│   │   rest = a MOD b          // Modulo (Rest)             │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Inkrement/Dekrement:                                        │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   zaehler = zaehler + 1   // erhöhen um 1              │ │
│   │   zaehler = zaehler - 1   // verringern um 1           │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

#### Ein- und Ausgabe

```
┌────────────────────────────────────────────────────────────────┐
│                  EIN- UND AUSGABE                              │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Eingabe:                                                    │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   EINGABE name                                          │ │
│   │   LESE zahl                                             │ │
│   │   name = eingabe("Bitte Namen eingeben:")              │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Ausgabe:                                                    │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   AUSGABE "Hallo Welt"                                  │ │
│   │   AUSGABE "Das Ergebnis ist: " + ergebnis              │ │
│   │   SCHREIBE summe                                        │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

#### Bedingte Anweisungen (Selektion)

```
┌────────────────────────────────────────────────────────────────┐
│                   BEDINGTE ANWEISUNGEN                         │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Einfache Bedingung:                                         │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   WENN alter >= 18 DANN                                 │ │
│   │       AUSGABE "Volljährig"                              │ │
│   │   ENDE WENN                                             │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   If-Else:                                                    │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   WENN note <= 4.0 DANN                                 │ │
│   │       AUSGABE "Bestanden"                               │ │
│   │   SONST                                                 │ │
│   │       AUSGABE "Nicht bestanden"                         │ │
│   │   ENDE WENN                                             │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Mehrfache Bedingung:                                        │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   WENN note <= 1.5 DANN                                 │ │
│   │       AUSGABE "Sehr gut"                                │ │
│   │   SONST WENN note <= 2.5 DANN                          │ │
│   │       AUSGABE "Gut"                                     │ │
│   │   SONST WENN note <= 3.5 DANN                          │ │
│   │       AUSGABE "Befriedigend"                            │ │
│   │   SONST                                                 │ │
│   │       AUSGABE "Nicht gut"                               │ │
│   │   ENDE WENN                                             │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

#### Schleifen (Iteration)

```
┌────────────────────────────────────────────────────────────────┐
│                       SCHLEIFEN                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   For-Schleife (Zählergesteuert):                            │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   FÜR i VON 1 BIS 10                                    │ │
│   │       AUSGABE i                                         │ │
│   │   ENDE FÜR                                              │ │
│   │                                                         │ │
│   │   FÜR JEDES element IN liste                           │ │
│   │       AUSGABE element                                   │ │
│   │   ENDE FÜR                                              │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   While-Schleife (Kopfgesteuert):                            │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   SOLANGE bedingung                                     │ │
│   │       // Anweisungen                                    │ │
│   │   ENDE SOLANGE                                          │ │
│   │                                                         │ │
│   │   Beispiel:                                             │ │
│   │   zaehler = 1                                           │ │
│   │   SOLANGE zaehler <= 5                                  │ │
│   │       AUSGABE zaehler                                   │ │
│   │       zaehler = zaehler + 1                            │ │
│   │   ENDE SOLANGE                                          │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Do-While-Schleife (Fußgesteuert):                          │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   WIEDERHOLE                                            │ │
│   │       eingabe = LESE()                                  │ │
│   │   BIS eingabe == "exit"                                 │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

#### Funktionen

```
┌────────────────────────────────────────────────────────────────┐
│                      FUNKTIONEN                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Funktionsdefinition:                                        │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   FUNKTION addiere(a, b)                                │ │
│   │       summe = a + b                                     │ │
│   │       RÜCKGABE summe                                    │ │
│   │   ENDE FUNKTION                                         │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Funktionsaufruf:                                            │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   ergebnis = addiere(5, 3)    // ergebnis = 8          │ │
│   │   AUSGABE ergebnis                                      │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Prozedur (ohne Rückgabewert):                              │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   PROZEDUR begruesse(name)                              │ │
│   │       AUSGABE "Hallo " + name                           │ │
│   │   ENDE PROZEDUR                                         │ │
│   │                                                         │ │
│   │   begruesse("Max")   // Ausgabe: Hallo Max             │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Logische Operatoren

| Operator | Bedeutung | Beispiel |
|----------|-----------|----------|
| `UND` / `AND` | Beide wahr | `a > 0 UND b > 0` |
| `ODER` / `OR` | Mindestens eines wahr | `a > 0 ODER b > 0` |
| `NICHT` / `NOT` | Umkehrung | `NICHT fertig` |

---

### Vergleichsoperatoren

| Operator | Bedeutung |
|----------|-----------|
| `=` oder `==` | Gleich |
| `<>` oder `!=` | Ungleich |
| `<` | Kleiner |
| `>` | Größer |
| `<=` | Kleiner oder gleich |
| `>=` | Größer oder gleich |

---

### Beispiel: Vollständiger Algorithmus

```
┌────────────────────────────────────────────────────────────────┐
│            BEISPIEL: DURCHSCHNITT BERECHNEN                    │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   ALGORITHMUS Durchschnitt berechnen                          │
│                                                                │
│   // Eingabe                                                  │
│   AUSGABE "Wie viele Zahlen?"                                 │
│   EINGABE anzahl                                              │
│                                                                │
│   // Initialisierung                                          │
│   summe = 0                                                   │
│                                                                │
│   // Zahlen einlesen und summieren                            │
│   FÜR i VON 1 BIS anzahl                                      │
│       AUSGABE "Zahl " + i + " eingeben:"                      │
│       EINGABE zahl                                            │
│       summe = summe + zahl                                    │
│   ENDE FÜR                                                    │
│                                                                │
│   // Durchschnitt berechnen                                   │
│   WENN anzahl > 0 DANN                                        │
│       durchschnitt = summe / anzahl                          │
│       AUSGABE "Durchschnitt: " + durchschnitt                │
│   SONST                                                       │
│       AUSGABE "Keine Zahlen eingegeben"                      │
│   ENDE WENN                                                   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Pseudocode zu echtem Code

| Pseudocode | Python | Java |
|------------|--------|------|
| `WENN ... DANN` | `if ...:` | `if (...) {` |
| `SONST` | `else:` | `} else {` |
| `SONST WENN` | `elif ...:` | `} else if (...) {` |
| `ENDE WENN` | (Einrückung endet) | `}` |
| `FÜR i VON 1 BIS 5` | `for i in range(1,6):` | `for(int i=1; i<=5; i++)` |
| `SOLANGE ... ` | `while ...:` | `while (...) {` |
| `AUSGABE` | `print(...)` | `System.out.println(...)` |
| `EINGABE` | `input(...)` | `Scanner.nextLine()` |
| `RÜCKGABE` | `return` | `return` |

---

### Tipps für Pseudocode

```
┌────────────────────────────────────────────────────────────────┐
│                  TIPPS FÜR PSEUDOCODE                          │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   DO:                                                         │
│   ✓ Klare, verständliche Begriffe verwenden                  │
│   ✓ Einrückungen für Struktur nutzen                         │
│   ✓ Kommentare für komplexe Stellen                          │
│   ✓ ENDE für Blöcke verwenden (ENDE WENN, ENDE FÜR)         │
│   ✓ Konsistent bleiben (immer gleiche Schlüsselwörter)       │
│                                                                │
│   DON'T:                                                      │
│   ✗ Syntaxdetails einer Sprache (;, {}, etc.)               │
│   ✗ Zu vage sein ("mache irgendwas")                         │
│   ✗ Spezifische Funktionen (println, Scanner)               │
│   ✗ Typdeklarationen (normalerweise nicht nötig)            │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Pseudocode** | Informelle Algorithmusbeschreibung |
| **Algorithmus** | Schrittweise Anleitung zur Problemlösung |
| **Sequenz** | Anweisungen nacheinander |
| **Selektion** | Verzweigung (WENN-DANN) |
| **Iteration** | Wiederholung (Schleife) |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Gegeben ist Pseudocode - was wird ausgegeben?
- Schreiben Sie Pseudocode für einen einfachen Algorithmus
- Welche Kontrollstrukturen werden verwendet?

### Wichtig zu merken

- Pseudocode ist **sprachunabhängig**
- Fokus auf **Logik**, nicht auf Syntax
- Immer **ENDE** für Blöcke verwenden
- **Einrückung** zeigt Struktur
- Häufig in Prüfungen: Code verstehen und Ergebnis bestimmen

---

## Übungsaufgaben

### Aufgabe 1
Was gibt folgender Pseudocode aus?

```
a = 5
b = 3
c = a + b
WENN c > 7 DANN
    AUSGABE "Groß"
SONST
    AUSGABE "Klein"
ENDE WENN
```

**Lösung:**
- a = 5, b = 3
- c = 5 + 3 = 8
- 8 > 7 ist WAHR
- **Ausgabe: "Groß"**

### Aufgabe 2
Schreiben Sie Pseudocode, der die Zahlen von 1 bis 10 ausgibt und die Summe berechnet.

**Lösung:**
```
summe = 0
FÜR i VON 1 BIS 10
    AUSGABE i
    summe = summe + i
ENDE FÜR
AUSGABE "Summe: " + summe
```
Ausgabe: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, Summe: 55

### Aufgabe 3
Analysieren Sie folgenden Pseudocode. Was ist das Ergebnis?

```
FUNKTION fakultaet(n)
    WENN n <= 1 DANN
        RÜCKGABE 1
    SONST
        RÜCKGABE n * fakultaet(n - 1)
    ENDE WENN
ENDE FUNKTION

ergebnis = fakultaet(4)
AUSGABE ergebnis
```

**Lösung:**
- fakultaet(4) = 4 * fakultaet(3)
- fakultaet(3) = 3 * fakultaet(2)
- fakultaet(2) = 2 * fakultaet(1)
- fakultaet(1) = 1 (Abbruch)

Rückwärts: 2 * 1 = 2, 3 * 2 = 6, 4 * 6 = 24

**Ausgabe: 24**

---

## Querverweise

- [06-02-02 Kontrollstrukturen](./06-02-02-control-structures.md) - Detaillierte Erklärung
- [06-02-06 Schreibtischtest](./06-02-06-desk-check.md) - Pseudocode analysieren
- [06-02-03 Prozeduren und Funktionen](./06-02-03-procedures-functions.md) - Funktionen in Pseudocode
