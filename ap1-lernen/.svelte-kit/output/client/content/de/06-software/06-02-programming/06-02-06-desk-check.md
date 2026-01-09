# Schreibtischtest (Desk Checking)

## Lernziele

Nach diesem Kapitel solltest du:
- Einen Schreibtischtest durchführen können
- Code Zeile für Zeile analysieren können
- Variablenwerte während der Ausführung verfolgen können
- Fehler durch manuelle Codeprüfung finden können

---

## Kerninhalt

### Was ist ein Schreibtischtest?

Ein **Schreibtischtest** (auch "Desk Checking" oder "Trace Table") ist eine Methode zur manuellen Überprüfung von Programmcode, bei der der Code Zeile für Zeile durchgegangen wird.

```
┌─────────────────────────────────────────────────────────────────┐
│                    SCHREIBTISCHTEST                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Zweck:                                                       │
│   • Code OHNE Computer testen                                  │
│   • Logik überprüfen                                           │
│   • Fehler finden                                              │
│   • Ablauf verstehen                                           │
│                                                                 │
│   Vorgehen:                                                    │
│   1. Code Zeile für Zeile durchgehen                          │
│   2. Variablenwerte in Tabelle notieren                       │
│   3. Bedingungen auswerten                                    │
│   4. Schleifendurchläufe zählen                               │
│   5. Endwerte/Ausgaben bestimmen                              │
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐ │
│   │   WICHTIG FÜR DIE PRÜFUNG!                              │ │
│   │   [NEU IM PRÜFUNGSKATALOG 2025]                         │ │
│   │                                                          │ │
│   │   Häufige Aufgabenstellung:                             │ │
│   │   "Was gibt folgender Code aus?"                        │ │
│   │   "Welchen Wert hat x nach der Ausführung?"            │ │
│   └─────────────────────────────────────────────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Die Trace-Tabelle

Eine **Trace-Tabelle** (Ablaufprotokoll) dokumentiert die Werte aller Variablen nach jedem Schritt.

```
┌────────────────────────────────────────────────────────────────┐
│                    TRACE-TABELLE                               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Code:                                                       │
│   ┌────────────────────────────┐                              │
│   │   a = 5                    │                              │
│   │   b = 3                    │                              │
│   │   c = a + b                │                              │
│   │   a = a * 2                │                              │
│   └────────────────────────────┘                              │
│                                                                │
│   Trace-Tabelle:                                              │
│   ┌────────┬───────────────┬───────┬───────┬───────┐         │
│   │ Zeile  │ Anweisung     │   a   │   b   │   c   │         │
│   ├────────┼───────────────┼───────┼───────┼───────┤         │
│   │ Start  │ -             │   -   │   -   │   -   │         │
│   │   1    │ a = 5         │   5   │   -   │   -   │         │
│   │   2    │ b = 3         │   5   │   3   │   -   │         │
│   │   3    │ c = a + b     │   5   │   3   │   8   │         │
│   │   4    │ a = a * 2     │  10   │   3   │   8   │         │
│   └────────┴───────────────┴───────┴───────┴───────┘         │
│                                                                │
│   Endergebnis: a = 10, b = 3, c = 8                          │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Beispiel 1: Einfache Sequenz

```
┌────────────────────────────────────────────────────────────────┐
│               BEISPIEL: EINFACHE SEQUENZ                       │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Code:                                                       │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   x = 10                                                │ │
│   │   y = 4                                                 │ │
│   │   z = x - y                                             │ │
│   │   x = z * 2                                             │ │
│   │   ausgabe(x)                                            │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Schreibtischtest:                                           │
│   ┌──────┬─────────────┬──────┬──────┬──────┬─────────────┐ │
│   │Zeile │ Anweisung   │  x   │  y   │  z   │ Ausgabe     │ │
│   ├──────┼─────────────┼──────┼──────┼──────┼─────────────┤ │
│   │  1   │ x = 10      │  10  │  -   │  -   │             │ │
│   │  2   │ y = 4       │  10  │  4   │  -   │             │ │
│   │  3   │ z = x - y   │  10  │  4   │  6   │             │ │
│   │  4   │ x = z * 2   │  12  │  4   │  6   │             │ │
│   │  5   │ ausgabe(x)  │  12  │  4   │  6   │ 12          │ │
│   └──────┴─────────────┴──────┴──────┴──────┴─────────────┘ │
│                                                                │
│   Ausgabe: 12                                                 │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Beispiel 2: Mit Bedingung

```
┌────────────────────────────────────────────────────────────────┐
│               BEISPIEL: MIT BEDINGUNG                          │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Code:                                                       │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   alter = 16                                            │ │
│   │   WENN alter >= 18 DANN                                 │ │
│   │       status = "volljährig"                             │ │
│   │   SONST                                                 │ │
│   │       status = "minderjährig"                           │ │
│   │   ENDE WENN                                             │ │
│   │   ausgabe(status)                                       │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Schreibtischtest:                                           │
│   ┌──────┬────────────────────┬───────┬──────────────────┐  │
│   │Zeile │ Anweisung          │ alter │ status           │  │
│   ├──────┼────────────────────┼───────┼──────────────────┤  │
│   │  1   │ alter = 16         │  16   │ -                │  │
│   │  2   │ 16 >= 18?          │  16   │ -                │  │
│   │      │ → FALSCH           │       │                  │  │
│   │  5   │ status = "minder." │  16   │ "minderjährig"   │  │
│   │  7   │ ausgabe(status)    │  16   │ "minderjährig"   │  │
│   └──────┴────────────────────┴───────┴──────────────────┘  │
│                                                                │
│   Ausgabe: "minderjährig"                                     │
│   (Zeilen 3-4 wurden übersprungen, da Bedingung falsch)      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Beispiel 3: Mit Schleife

```
┌────────────────────────────────────────────────────────────────┐
│                BEISPIEL: MIT SCHLEIFE                          │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Code:                                                       │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   summe = 0                                             │ │
│   │   FÜR i VON 1 BIS 4                                     │ │
│   │       summe = summe + i                                 │ │
│   │   ENDE FÜR                                              │ │
│   │   ausgabe(summe)                                        │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Schreibtischtest:                                           │
│   ┌───────────┬─────────────────────────┬───────┬───────┐   │
│   │ Durchlauf │ Anweisung               │   i   │ summe │   │
│   ├───────────┼─────────────────────────┼───────┼───────┤   │
│   │   Start   │ summe = 0               │   -   │   0   │   │
│   │     1     │ i = 1, summe = 0 + 1    │   1   │   1   │   │
│   │     2     │ i = 2, summe = 1 + 2    │   2   │   3   │   │
│   │     3     │ i = 3, summe = 3 + 3    │   3   │   6   │   │
│   │     4     │ i = 4, summe = 6 + 4    │   4   │  10   │   │
│   │   Ende    │ ausgabe(summe)          │   -   │  10   │   │
│   └───────────┴─────────────────────────┴───────┴───────┘   │
│                                                                │
│   Ausgabe: 10                                                 │
│   (Summe der Zahlen 1+2+3+4 = 10)                            │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Beispiel 4: While-Schleife

```
┌────────────────────────────────────────────────────────────────┐
│              BEISPIEL: WHILE-SCHLEIFE                          │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Code:                                                       │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   zaehler = 1                                           │ │
│   │   ergebnis = 1                                          │ │
│   │   SOLANGE zaehler <= 3                                  │ │
│   │       ergebnis = ergebnis * zaehler                     │ │
│   │       zaehler = zaehler + 1                             │ │
│   │   ENDE SOLANGE                                          │ │
│   │   ausgabe(ergebnis)                                     │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Schreibtischtest:                                           │
│   ┌─────────┬──────────────────────┬─────────┬───────────┐  │
│   │Durchlauf│ Prüfung/Anweisung    │ zaehler │ ergebnis  │  │
│   ├─────────┼──────────────────────┼─────────┼───────────┤  │
│   │  Start  │ zaehler=1, ergeb.=1  │    1    │     1     │  │
│   │    1    │ 1 <= 3? → JA         │    1    │     1     │  │
│   │         │ ergebnis = 1 * 1     │    1    │     1     │  │
│   │         │ zaehler = 1 + 1      │    2    │     1     │  │
│   │    2    │ 2 <= 3? → JA         │    2    │     1     │  │
│   │         │ ergebnis = 1 * 2     │    2    │     2     │  │
│   │         │ zaehler = 2 + 1      │    3    │     2     │  │
│   │    3    │ 3 <= 3? → JA         │    3    │     2     │  │
│   │         │ ergebnis = 2 * 3     │    3    │     6     │  │
│   │         │ zaehler = 3 + 1      │    4    │     6     │  │
│   │  Ende   │ 4 <= 3? → NEIN       │    4    │     6     │  │
│   └─────────┴──────────────────────┴─────────┴───────────┘  │
│                                                                │
│   Ausgabe: 6 (Fakultät von 3: 1 × 2 × 3 = 6)                 │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Beispiel 5: Verschachtelte Strukturen

```
┌────────────────────────────────────────────────────────────────┐
│            BEISPIEL: VERSCHACHTELTE STRUKTUREN                 │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Code:                                                       │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   summe = 0                                             │ │
│   │   FÜR i VON 1 BIS 3                                     │ │
│   │       WENN i MOD 2 == 1 DANN    // i ungerade          │ │
│   │           summe = summe + i                             │ │
│   │       ENDE WENN                                         │ │
│   │   ENDE FÜR                                              │ │
│   │   ausgabe(summe)                                        │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Schreibtischtest:                                           │
│   ┌─────────┬────────────┬─────────────┬───────┬───────┐    │
│   │    i    │ i MOD 2    │ Bedingung   │ Aktion│ summe │    │
│   ├─────────┼────────────┼─────────────┼───────┼───────┤    │
│   │  Start  │     -      │      -      │   -   │   0   │    │
│   │    1    │     1      │ 1==1 → JA   │ +1    │   1   │    │
│   │    2    │     0      │ 0==1 → NEIN │   -   │   1   │    │
│   │    3    │     1      │ 1==1 → JA   │ +3    │   4   │    │
│   └─────────┴────────────┴─────────────┴───────┴───────┘    │
│                                                                │
│   Ausgabe: 4 (Summe der ungeraden Zahlen: 1 + 3 = 4)         │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Häufige Fallstricke

```
┌────────────────────────────────────────────────────────────────┐
│                  HÄUFIGE FALLSTRICKE                           │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   1. Off-by-One-Fehler bei Schleifen:                        │
│      FÜR i VON 1 BIS 5    → 5 Durchläufe (1,2,3,4,5)        │
│      FÜR i VON 0 BIS 4    → 5 Durchläufe (0,1,2,3,4)        │
│                                                                │
│   2. Reihenfolge bei Zuweisungen:                            │
│      a = 5                                                    │
│      b = a        → b = 5 (nicht alter Wert von a)          │
│      a = 10       → a = 10, aber b bleibt 5!                │
│                                                                │
│   3. Ganzzahldivision:                                        │
│      7 / 2 = 3 (bei Integer!)                                │
│      7 MOD 2 = 1 (Rest)                                      │
│                                                                │
│   4. Vergleich vs. Zuweisung:                                │
│      a = 5     → Zuweisung                                   │
│      a == 5    → Vergleich (ergibt true/false)              │
│                                                                │
│   5. Logische Operatoren:                                    │
│      true UND false → false                                  │
│      true ODER false → true                                  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Checkliste für Schreibtischtest

| Schritt | Aktion |
|---------|--------|
| 1 | Alle Variablen identifizieren |
| 2 | Tabelle mit Spalten für jede Variable anlegen |
| 3 | Startwerte eintragen (oder "-" für nicht initialisiert) |
| 4 | Code Zeile für Zeile durchgehen |
| 5 | Bei Bedingungen: Auswerten und entsprechenden Pfad wählen |
| 6 | Bei Schleifen: Jeden Durchlauf einzeln dokumentieren |
| 7 | Endwerte und Ausgaben notieren |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Schreibtischtest** | Manuelle Code-Überprüfung |
| **Trace-Tabelle** | Dokumentation der Variablenwerte |
| **Desk Checking** | Englisch für Schreibtischtest |
| **MOD** | Modulo - Rest einer Division |
| **Off-by-One** | Fehler bei Schleifengrenzen |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Gegeben ist Code - was wird ausgegeben?
- Welchen Wert hat Variable x nach der Ausführung?
- Wie oft wird die Schleife durchlaufen?

### Wichtig zu merken

- **Immer Tabelle anlegen** - strukturiert arbeiten!
- **Zeile für Zeile** - nichts überspringen
- **Bei Schleifen**: Jeden Durchlauf einzeln
- **Bedingungen sorgfältig prüfen**
- **MOD = Rest** (7 MOD 3 = 1)

---

## Übungsaufgaben

### Aufgabe 1
Was gibt folgender Code aus?

```
x = 3
y = 5
z = x + y
x = z - x
ausgabe(x)
ausgabe(y)
ausgabe(z)
```

**Lösung:**
| Zeile | x | y | z |
|-------|---|---|---|
| x = 3 | 3 | - | - |
| y = 5 | 3 | 5 | - |
| z = x + y | 3 | 5 | 8 |
| x = z - x = 8 - 3 | 5 | 5 | 8 |

**Ausgabe:** 5, 5, 8

### Aufgabe 2
Was ist das Ergebnis?

```
summe = 0
FÜR i VON 1 BIS 5
    WENN i MOD 2 == 0 DANN
        summe = summe + i
    ENDE WENN
ENDE FÜR
ausgabe(summe)
```

**Lösung:**
| i | i MOD 2 | Bedingung | summe |
|---|---------|-----------|-------|
| 1 | 1 | 0==0? NEIN | 0 |
| 2 | 0 | 0==0? JA | 0+2=2 |
| 3 | 1 | 0==0? NEIN | 2 |
| 4 | 0 | 0==0? JA | 2+4=6 |
| 5 | 1 | 0==0? NEIN | 6 |

**Ausgabe: 6** (Summe der geraden Zahlen: 2 + 4 = 6)

### Aufgabe 3
Wie oft wird "Hallo" ausgegeben?

```
i = 10
SOLANGE i > 5
    ausgabe("Hallo")
    i = i - 2
ENDE SOLANGE
```

**Lösung:**
| Durchlauf | i vor Prüfung | i > 5? | i nachher |
|-----------|---------------|--------|-----------|
| 1 | 10 | JA | 8 |
| 2 | 8 | JA | 6 |
| 3 | 6 | JA | 4 |
| - | 4 | NEIN | - |

**"Hallo" wird 3-mal ausgegeben.**

---

## Querverweise

- [06-02-05 Pseudocode](./06-02-05-pseudocode.md) - Code-Darstellung
- [06-02-02 Kontrollstrukturen](./06-02-02-control-structures.md) - If/Schleifen
- [06-02-07 Fehlersuche im Code](./06-02-07-code-debugging.md) - Fehler finden
