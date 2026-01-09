# UML-Klassendiagramm

## Lernziele

Nach diesem Kapitel solltest du:
- UML-Klassendiagramme lesen und verstehen können
- Die Notation für Klassen, Attribute und Methoden kennen
- Beziehungen zwischen Klassen darstellen können
- Sichtbarkeiten und Multiplizitäten verstehen

---

## Kerninhalt

### Was ist ein Klassendiagramm?

Ein **Klassendiagramm** ist ein UML-Diagramm, das die statische Struktur eines Systems zeigt - welche Klassen es gibt und wie sie zusammenhängen.

```
┌─────────────────────────────────────────────────────────────────┐
│                  UML-KLASSENDIAGRAMM                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Zweck:                                                       │
│   • Struktur eines Systems visualisieren                       │
│   • Klassen und ihre Beziehungen zeigen                        │
│   • Grundlage für Implementierung                              │
│   • Dokumentation für Entwickler                               │
│                                                                 │
│   Zeigt:                                                       │
│   • Klassen mit Attributen und Methoden                        │
│   • Beziehungen zwischen Klassen                               │
│   • Sichtbarkeiten (public, private)                          │
│   • Kardinalitäten (wie viele Objekte)                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Darstellung einer Klasse

```
┌────────────────────────────────────────────────────────────────┐
│                   KLASSEN-NOTATION                             │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   ┌──────────────────────────────────────┐                    │
│   │          <<Stereotyp>>               │  ← Optional        │
│   │            Klassenname               │  ← Pflicht         │
│   ├──────────────────────────────────────┤                    │
│   │ - attribut1: Datentyp                │                    │
│   │ - attribut2: Datentyp = Standardwert │  ← Attribute      │
│   │ # attribut3: Datentyp                │                    │
│   ├──────────────────────────────────────┤                    │
│   │ + methode1(): Rückgabetyp            │                    │
│   │ + methode2(param: Typ): Rückgabetyp  │  ← Methoden       │
│   │ - privateMethode(): void             │                    │
│   └──────────────────────────────────────┘                    │
│                                                                │
│   Die drei Bereiche:                                          │
│   1. Klassenname (oben)                                       │
│   2. Attribute (Mitte)                                        │
│   3. Methoden (unten)                                         │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Beispiel: Klasse Kunde

```
┌────────────────────────────────────────────────────────────────┐
│                   BEISPIEL: KLASSE KUNDE                       │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   ┌────────────────────────────────────┐                      │
│   │              Kunde                 │                      │
│   ├────────────────────────────────────┤                      │
│   │ - kundenNr: int                    │                      │
│   │ - name: String                     │                      │
│   │ - email: String                    │                      │
│   │ - geburtsdatum: Date               │                      │
│   │ - aktiv: boolean = true            │                      │
│   ├────────────────────────────────────┤                      │
│   │ + getKundenNr(): int               │                      │
│   │ + getName(): String                │                      │
│   │ + setName(name: String): void      │                      │
│   │ + berechneAlter(): int             │                      │
│   │ - validiereEmail(email: String):   │                      │
│   │   boolean                          │                      │
│   └────────────────────────────────────┘                      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Sichtbarkeiten (Zugriffsmodifikatoren)

```
┌────────────────────────────────────────────────────────────────┐
│                    SICHTBARKEITEN                              │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Symbol │ Bedeutung    │ Zugriff von                         │
│   ───────┼──────────────┼────────────────────────────────────│
│     +    │ public       │ Überall (alle Klassen)             │
│     -    │ private      │ Nur innerhalb der eigenen Klasse   │
│     #    │ protected    │ Eigene Klasse + Unterklassen       │
│     ~    │ package      │ Innerhalb des gleichen Pakets      │
│                                                                │
│   Typisch:                                                    │
│   • Attribute meist private (-)                              │
│   • Methoden meist public (+)                                │
│   • Getter/Setter public (+)                                 │
│   • Hilfsmethoden private (-)                                │
│                                                                │
│   Beispiel:                                                   │
│   ┌────────────────────────────────┐                         │
│   │          Konto                 │                         │
│   ├────────────────────────────────┤                         │
│   │ - kontostand: double           │  ← private             │
│   │ - pin: String                  │  ← private             │
│   ├────────────────────────────────┤                         │
│   │ + getKontostand(): double      │  ← public              │
│   │ + einzahlen(betrag: double)    │  ← public              │
│   │ - pruefePin(pin: String): bool │  ← private             │
│   └────────────────────────────────┘                         │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Beziehungen zwischen Klassen

```
┌────────────────────────────────────────────────────────────────┐
│                    BEZIEHUNGSARTEN                             │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   1. ASSOZIATION (kennt / nutzt)                             │
│   ┌──────────┐                    ┌──────────┐               │
│   │  Kunde   │────────────────────│ Bestellung│               │
│   └──────────┘                    └──────────┘               │
│   Ein Kunde hat Bestellungen                                  │
│                                                                │
│   2. AGGREGATION (hat / besteht aus - lose)                  │
│   ┌──────────┐         ◇─────────┌──────────┐               │
│   │   Team   │◇────────          │ Mitarbeiter│               │
│   └──────────┘                   └──────────┘               │
│   Team hat Mitarbeiter (Mitarbeiter können ohne Team sein)   │
│   Hohle Raute am "Ganzen"                                    │
│                                                                │
│   3. KOMPOSITION (besteht aus - eng, lebt und stirbt)        │
│   ┌──────────┐         ♦─────────┌──────────┐               │
│   │ Rechnung │♦────────          │  Position │               │
│   └──────────┘                   └──────────┘               │
│   Rechnung hat Positionen (Position ohne Rechnung sinnlos)   │
│   Ausgefüllte Raute am "Ganzen"                              │
│                                                                │
│   4. GERICHTETE ASSOZIATION (nur eine Richtung)              │
│   ┌──────────┐                    ┌──────────┐               │
│   │  Person  │───────────────────►│  Adresse │               │
│   └──────────┘                    └──────────┘               │
│   Person kennt Adresse, aber Adresse kennt Person nicht      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Multiplizitäten (Kardinalitäten)

```
┌────────────────────────────────────────────────────────────────┐
│                   MULTIPLIZITÄTEN                              │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Notation │ Bedeutung                                        │
│   ─────────┼────────────────────────────────────────────────│
│      1     │ Genau eins                                       │
│     0..1   │ Null oder eins (optional)                       │
│      *     │ Beliebig viele (null bis unendlich)             │
│     1..*   │ Eins oder mehr (mindestens eins)                │
│     0..*   │ Null oder mehr (wie *)                          │
│     n..m   │ Zwischen n und m                                 │
│                                                                │
│   Beispiele:                                                  │
│                                                                │
│   ┌──────────┐  1        *  ┌──────────┐                    │
│   │  Kunde   │──────────────│ Bestellung│                    │
│   └──────────┘              └──────────┘                    │
│   Ein Kunde hat beliebig viele Bestellungen                  │
│   Eine Bestellung gehört zu genau einem Kunden               │
│                                                                │
│   ┌──────────┐  1       1..* ┌──────────┐                    │
│   │ Rechnung │♦──────────────│  Position │                    │
│   └──────────┘               └──────────┘                    │
│   Eine Rechnung hat mindestens eine Position                 │
│   Eine Position gehört zu genau einer Rechnung               │
│                                                                │
│   ┌──────────┐  0..1    0..1 ┌──────────┐                    │
│   │  Person  │──────────────│  Ehepartner│                    │
│   └──────────┘               └──────────┘                    │
│   Eine Person hat keinen oder einen Ehepartner               │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Vollständiges Beispiel: Online-Shop

```
┌────────────────────────────────────────────────────────────────┐
│              BEISPIEL: ONLINE-SHOP                             │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   ┌────────────────────┐    1        *   ┌─────────────────┐ │
│   │       Kunde        │─────────────────│   Bestellung    │ │
│   ├────────────────────┤                 ├─────────────────┤ │
│   │ - kundenNr: int    │                 │ - bestellNr: int│ │
│   │ - name: String     │                 │ - datum: Date   │ │
│   │ - email: String    │                 │ - status: String│ │
│   ├────────────────────┤                 ├─────────────────┤ │
│   │ + bestellen()      │                 │ + stornieren()  │ │
│   │ + getBestellungen()│                 │ + berechneGesamt│ │
│   └────────────────────┘                 └────────┬────────┘ │
│                                                   │          │
│                                                   │ 1        │
│                                                   │          │
│                                                   ♦          │
│                                               1..*│          │
│                                          ┌────────┴────────┐ │
│                                          │    Position     │ │
│                                          ├─────────────────┤ │
│   ┌────────────────────┐    *       1    │ - menge: int    │ │
│   │      Produkt       │◄────────────────│ - einzelpreis:  │ │
│   ├────────────────────┤                 │   double        │ │
│   │ - produktNr: int   │                 ├─────────────────┤ │
│   │ - name: String     │                 │ + berechneSumme │ │
│   │ - preis: double    │                 │   (): double    │ │
│   │ - bestand: int     │                 └─────────────────┘ │
│   ├────────────────────┤                                     │
│   │ + getPreis(): double                                     │
│   │ + istVerfuegbar():                                       │
│   │   boolean          │                                     │
│   └────────────────────┘                                     │
│                                                                │
│   Leserichtung:                                              │
│   • Ein Kunde hat viele (*) Bestellungen                     │
│   • Eine Bestellung gehört zu genau einem (1) Kunden         │
│   • Eine Bestellung hat 1 oder mehr (1..*) Positionen        │
│   • Eine Position verweist auf genau ein (1) Produkt         │
│   • Ein Produkt kann in vielen (*) Positionen vorkommen      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Notationszusammenfassung

| Element | Notation | Beispiel |
|---------|----------|----------|
| **Klasse** | Rechteck mit 3 Bereichen | Siehe oben |
| **Attribut** | `sichtbarkeit name: Typ` | `- alter: int` |
| **Methode** | `sichtbarkeit name(param): Rückgabe` | `+ getAlter(): int` |
| **Assoziation** | Linie | ─────────── |
| **Aggregation** | Hohle Raute | ◇────────── |
| **Komposition** | Ausgefüllte Raute | ♦────────── |
| **Gerichtet** | Pfeil | ─────────►  |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Klassendiagramm** | UML-Diagramm für Systemstruktur |
| **Attribut** | Eigenschaft/Datenelement einer Klasse |
| **Methode** | Funktion/Operation einer Klasse |
| **Assoziation** | Beziehung zwischen Klassen |
| **Aggregation** | "Hat"-Beziehung (lose) |
| **Komposition** | "Besteht aus"-Beziehung (eng) |
| **Multiplizität** | Anzahl der beteiligten Objekte |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Lesen Sie das Klassendiagramm und erklären Sie die Beziehungen
- Welche Multiplizität besteht zwischen den Klassen?
- Was bedeutet die Raute (Aggregation/Komposition)?

### Wichtig zu merken

- **+** = public, **-** = private, **#** = protected
- **◇** = Aggregation (Teile existieren unabhängig)
- **♦** = Komposition (Teile leben und sterben mit dem Ganzen)
- **1** = genau eins, ***** = beliebig viele
- **1..*** = mindestens eins

---

## Übungsaufgaben

### Aufgabe 1
Erklären Sie den Unterschied zwischen Aggregation und Komposition anhand eines Beispiels.

**Lösung:**
- **Aggregation (◇):** "Hat"-Beziehung, bei der die Teile auch ohne das Ganze existieren können.
  - Beispiel: Team ◇── Mitarbeiter. Wenn das Team aufgelöst wird, existieren die Mitarbeiter weiter.

- **Komposition (♦):** "Besteht aus"-Beziehung, bei der die Teile ohne das Ganze nicht existieren.
  - Beispiel: Rechnung ♦── Position. Wenn die Rechnung gelöscht wird, werden auch die Positionen gelöscht.

### Aufgabe 2
Was bedeutet folgende Multiplizität?

```
┌──────────┐  1        0..*  ┌──────────┐
│  Kurs    │─────────────────│  Student │
└──────────┘                 └──────────┘
```

**Lösung:**
- Ein Kurs wird von beliebig vielen (0..*) Studenten besucht (auch null möglich)
- Ein Student besucht genau einen (1) Kurs

Dies bedeutet: Ein Student ist immer genau einem Kurs zugeordnet, ein Kurs kann aber auch leer sein.

### Aufgabe 3
Erstellen Sie ein einfaches Klassendiagramm für eine Bibliothek mit: Buch, Autor, Ausleihe, Mitglied.

**Lösung:**
```
┌────────────────┐  *       1..* ┌────────────────┐
│     Buch       │───────────────│     Autor      │
├────────────────┤               ├────────────────┤
│ - isbn: String │               │ - name: String │
│ - titel: String│               │ - gebJahr: int │
├────────────────┤               ├────────────────┤
│ + getTitel()   │               │ + getName()    │
└───────┬────────┘               └────────────────┘
        │ 1
        │
        ♦
    0..*│
┌───────┴────────┐               ┌────────────────┐
│    Ausleihe    │  *         1  │    Mitglied    │
├────────────────┤───────────────├────────────────┤
│ - ausleihdatum │               │ - mitgliedNr   │
│ - rueckgabe    │               │ - name: String │
├────────────────┤               ├────────────────┤
│ + verlaengern()│               │ + ausleihen()  │
└────────────────┘               └────────────────┘
```

---

## Querverweise

- [06-02-04 OOP-Grundlagen](../06-02-programming/06-02-04-oop-fundamentals.md) - Klassen und Objekte
- [06-03-02 Use-Case-Diagramm](./06-03-02-use-case-diagram.md) - Verhaltensdiagramm
- [06-04-02 ERD](../06-04-databases/06-04-02-erd.md) - Datenmodellierung
