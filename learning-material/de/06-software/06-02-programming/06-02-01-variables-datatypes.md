# Variablen und Datentypen

## Lernziele

Nach diesem Kapitel solltest du:
- Variablen und Konstanten unterscheiden können
- Die wichtigsten Datentypen kennen
- Typkonvertierung verstehen
- Variablen deklarieren und initialisieren können

---

## Kerninhalt

### Was ist eine Variable?

Eine **Variable** ist ein benannter Speicherplatz im Arbeitsspeicher, der einen Wert enthält und dessen Inhalt sich ändern kann.

```
┌─────────────────────────────────────────────────────────────────┐
│                     VARIABLE IM SPEICHER                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Quellcode:                         Arbeitsspeicher:          │
│                                                                 │
│   alter = 25                         ┌─────────────────┐       │
│                                      │ Adresse: 0x1000 │       │
│      │                               ├─────────────────┤       │
│      │    Name: "alter"      ───────►│     25          │       │
│      │    Typ: Integer               │                 │       │
│      │    Wert: 25                   └─────────────────┘       │
│      ▼                                                          │
│                                                                 │
│   alter = 26   (Wert wird geändert)  ┌─────────────────┐       │
│                                      │ Adresse: 0x1000 │       │
│                              ───────►├─────────────────┤       │
│                                      │     26          │       │
│                                      └─────────────────┘       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Variable vs. Konstante

| Aspekt | Variable | Konstante |
|--------|----------|-----------|
| **Wert änderbar** | Ja | Nein |
| **Beispiel Python** | `preis = 9.99` | `PI = 3.14159` |
| **Beispiel Java** | `int preis = 10;` | `final double PI = 3.14159;` |
| **Verwendung** | Veränderliche Daten | Feste Werte |

**Konvention:** Konstanten werden oft in GROSSBUCHSTABEN geschrieben.

---

### Grundlegende Datentypen

```
┌────────────────────────────────────────────────────────────────┐
│                      DATENTYPEN                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│                      DATENTYPEN                                │
│                          │                                     │
│       ┌──────────────────┼──────────────────┐                 │
│       │                  │                  │                 │
│   PRIMITIVE          ZUSAMMEN-          SPEZIELLE            │
│   TYPEN              GESETZTE           TYPEN                │
│                      TYPEN                                    │
│   • Integer          • Arrays           • null/None          │
│   • Float/Double     • Strings*         • void               │
│   • Boolean          • Listen           • Objekte            │
│   • Char             • Dictionaries                          │
│                                                                │
│   *Strings können je nach Sprache als primitiv oder          │
│    zusammengesetzt betrachtet werden                          │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Wichtige Datentypen im Detail

#### Integer (Ganzzahl)

| Typ | Größe | Wertebereich | Beispiel |
|-----|-------|--------------|----------|
| **byte** | 8 Bit | -128 bis 127 | `byte b = 100;` |
| **short** | 16 Bit | -32.768 bis 32.767 | `short s = 30000;` |
| **int** | 32 Bit | ca. -2,1 Mrd. bis 2,1 Mrd. | `int i = 42;` |
| **long** | 64 Bit | Sehr großer Bereich | `long l = 9999999999L;` |

#### Gleitkommazahl (Float/Double)

| Typ | Größe | Genauigkeit | Beispiel |
|-----|-------|-------------|----------|
| **float** | 32 Bit | ca. 7 Stellen | `float f = 3.14f;` |
| **double** | 64 Bit | ca. 15 Stellen | `double d = 3.14159265;` |

#### Boolean (Wahrheitswert)

| Wert | Bedeutung | Beispiel |
|------|-----------|----------|
| **true** | Wahr | `boolean aktiv = true;` |
| **false** | Falsch | `boolean aktiv = false;` |

#### Char (Zeichen)

Ein einzelnes Zeichen in einfachen Anführungszeichen.

```
char buchstabe = 'A';
char ziffer = '5';
char sonderzeichen = '@';
```

#### String (Zeichenkette)

Eine Folge von Zeichen in doppelten Anführungszeichen.

```
String name = "Max Mustermann";
String leer = "";
String satz = "Hallo Welt!";
```

---

### Datentypen-Übersicht

```
┌────────────────────────────────────────────────────────────────┐
│                    DATENTYPEN ÜBERSICHT                        │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Datentyp      │ Beispielwerte         │ Speicher           │
│  ───────────────┼───────────────────────┼──────────────────  │
│   Integer       │ 42, -7, 0, 1000       │ 4 Byte (int)       │
│   Float/Double  │ 3.14, -0.5, 2.0       │ 4/8 Byte           │
│   Boolean       │ true, false           │ 1 Bit (theoret.)   │
│   Char          │ 'A', '5', '@'         │ 2 Byte (Unicode)   │
│   String        │ "Hallo", "Test123"    │ variabel           │
│                                                                │
│   Merkhilfe:                                                  │
│   • Integer  = Ganze Zahlen (ohne Komma)                     │
│   • Float    = Dezimalzahlen (mit Komma)                     │
│   • Boolean  = Wahr oder Falsch                              │
│   • Char     = EIN Zeichen                                   │
│   • String   = MEHRERE Zeichen                               │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Deklaration und Initialisierung

```
┌────────────────────────────────────────────────────────────────┐
│            DEKLARATION UND INITIALISIERUNG                     │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   DEKLARATION:                                                 │
│   Variable wird angelegt, aber noch kein Wert zugewiesen      │
│                                                                │
│       int alter;           // Java: nur Deklaration           │
│                                                                │
│   INITIALISIERUNG:                                            │
│   Variable erhält einen ersten Wert                           │
│                                                                │
│       alter = 25;          // Wertzuweisung                   │
│                                                                │
│   DEKLARATION + INITIALISIERUNG (üblich):                     │
│                                                                │
│       int alter = 25;      // Java                            │
│       alter = 25           # Python (kein Typ nötig)          │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Typisierung

| Art | Beschreibung | Sprachen |
|-----|--------------|----------|
| **Statisch** | Typ wird bei Deklaration festgelegt | Java, C#, C++ |
| **Dynamisch** | Typ wird zur Laufzeit ermittelt | Python, JavaScript |
| **Stark** | Strikte Typprüfung | Java, Python |
| **Schwach** | Flexible Typkonvertierung | JavaScript, PHP |

```
// Statisch typisiert (Java):
int zahl = 42;
String text = "Hallo";

# Dynamisch typisiert (Python):
zahl = 42           # zahl ist Integer
zahl = "Hallo"      # zahl ist jetzt String (erlaubt!)
```

---

### Typkonvertierung (Casting)

```
┌────────────────────────────────────────────────────────────────┐
│                   TYPKONVERTIERUNG                             │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   IMPLIZIT (automatisch)           EXPLIZIT (manuell)         │
│   Kleiner Typ → Großer Typ         Großer Typ → Kleiner Typ   │
│                                                                │
│   int a = 100;                     double x = 9.7;            │
│   double b = a;  // 100.0          int y = (int) x;  // 9     │
│                                                                │
│   ┌────────────────────────────────────────────────────┐      │
│   │  byte → short → int → long → float → double        │      │
│   │        ────────────────────────────────────►       │      │
│   │              IMPLIZIT (ohne Datenverlust)          │      │
│   │                                                    │      │
│   │        ◄────────────────────────────────────       │      │
│   │        EXPLIZIT (möglicher Datenverlust!)          │      │
│   └────────────────────────────────────────────────────┘      │
│                                                                │
│   String zu Zahl (Java):                                      │
│   String s = "42";                                            │
│   int z = Integer.parseInt(s);     // z = 42                  │
│                                                                │
│   Zahl zu String (Java):                                      │
│   int z = 42;                                                 │
│   String s = String.valueOf(z);    // s = "42"                │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Namenskonventionen

| Regel | Beispiel | Falsch |
|-------|----------|--------|
| Buchstabe am Anfang | `alter`, `_temp` | `1wert` |
| Keine Leerzeichen | `maxWert` | `max wert` |
| Keine Sonderzeichen | `anzahl` | `anzahl#` |
| camelCase (üblich) | `maxAnzahl` | `maxanzahl` |
| Aussagekräftig | `kundenNummer` | `x`, `temp` |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Variable** | Benannter Speicherplatz mit veränderbarem Wert |
| **Konstante** | Variable mit unveränderlichem Wert |
| **Datentyp** | Art der Daten (Integer, String, etc.) |
| **Deklaration** | Anlegen einer Variable |
| **Initialisierung** | Erstes Zuweisen eines Wertes |
| **Casting** | Typumwandlung |
| **Primitive Typen** | Grundlegende Datentypen |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Welchen Datentyp hat der Wert "42"?
- Unterschied zwischen Integer und Float?
- Was ist eine Konstante?
- Was bedeutet Deklaration vs. Initialisierung?

### Wichtig zu merken

- **Integer** = Ganze Zahlen (42, -7)
- **Float/Double** = Dezimalzahlen (3.14)
- **Boolean** = true/false
- **String** = Text in Anführungszeichen
- **Char** = EIN einzelnes Zeichen

---

## Übungsaufgaben

### Aufgabe 1
Welchen Datentyp würden Sie für folgende Werte verwenden?
- Alter einer Person
- Preis eines Produkts
- Vorname
- Ist der Kunde aktiv?

**Lösung:**
- Alter einer Person: **Integer** (ganze Zahl)
- Preis eines Produkts: **Double/Float** (Dezimalzahl)
- Vorname: **String** (Zeichenkette)
- Ist der Kunde aktiv?: **Boolean** (true/false)

### Aufgabe 2
Was ist der Unterschied zwischen einer Variable und einer Konstante?

**Lösung:**
- **Variable:** Ein Speicherplatz, dessen Wert während der Programmausführung geändert werden kann. Beispiel: `int zaehler = 0;` → später: `zaehler = 10;`
- **Konstante:** Ein Speicherplatz, dessen Wert nach der Initialisierung nicht mehr geändert werden kann. Beispiel: `final double PI = 3.14159;`

### Aufgabe 3
Gegeben ist folgender Pseudocode. Bestimmen Sie den Datentyp jeder Variable:

```
name = "Schmidt"
alter = 42
gehalt = 3500.50
istVerheiratet = true
anfangsbuchstabe = 'S'
```

**Lösung:**
| Variable | Datentyp | Begründung |
|----------|----------|------------|
| name | String | Text in Anführungszeichen |
| alter | Integer | Ganze Zahl |
| gehalt | Double/Float | Dezimalzahl |
| istVerheiratet | Boolean | Wahrheitswert |
| anfangsbuchstabe | Char | Einzelnes Zeichen |

---

## Querverweise

- [06-02-02 Kontrollstrukturen](./06-02-02-control-structures.md) - Verwendung in Bedingungen
- [06-02-05 Pseudocode](./06-02-05-pseudocode.md) - Darstellung in Pseudocode
- [05-01-01 Bits und Bytes](../../05-it-systems/05-01-fundamentals/05-01-01-bits-bytes-number-systems.md) - Speichergrößen
