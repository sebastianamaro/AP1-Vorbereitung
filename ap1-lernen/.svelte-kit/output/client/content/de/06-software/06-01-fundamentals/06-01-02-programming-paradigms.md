# Programmierparadigmen

## Lernziele

Nach diesem Kapitel solltest du:
- Die wichtigsten Programmierparadigmen kennen
- Imperative und deklarative Programmierung unterscheiden können
- Objektorientierte Programmierung verstehen
- Sprachen den Paradigmen zuordnen können

---

## Kerninhalt

### Was ist ein Programmierparadigma?

Ein **Programmierparadigma** ist ein grundlegender Stil oder eine Denkweise bei der Programmierung, die bestimmt, wie Probleme gelöst werden.

```
┌─────────────────────────────────────────────────────────────────┐
│                  PROGRAMMIERPARADIGMEN                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                      PARADIGMEN                                 │
│                          │                                      │
│          ┌───────────────┴───────────────┐                     │
│          │                               │                     │
│    ┌─────▼─────┐                  ┌─────▼─────┐               │
│    │ IMPERATIV │                  │DEKLARATIV │               │
│    │           │                  │           │               │
│    │ "WIE" wird│                  │ "WAS" soll│               │
│    │ es gemacht│                  │ erreicht  │               │
│    │           │                  │ werden    │               │
│    └─────┬─────┘                  └─────┬─────┘               │
│          │                               │                     │
│    ┌─────┴─────┐               ┌────────┴────────┐            │
│    │           │               │                 │            │
│    ▼           ▼               ▼                 ▼            │
│ Prozedural  Objekt-       Funktional       Logisch           │
│             orientiert                                        │
│                                                                │
└─────────────────────────────────────────────────────────────────┘
```

---

### Imperative Programmierung

Bei **imperativer Programmierung** wird schrittweise beschrieben, **WIE** ein Problem gelöst wird.

```
┌────────────────────────────────────────────────────────────────┐
│                 IMPERATIVE PROGRAMMIERUNG                      │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Merkmale:                                                     │
│  • Befehle werden nacheinander ausgeführt                      │
│  • Zustand wird durch Variablen verwaltet                      │
│  • Kontrollstrukturen (if, while, for)                         │
│                                                                │
│  Beispiel (Summe berechnen):                                   │
│                                                                │
│    summe = 0                    // Zustand initialisieren     │
│    für i von 1 bis 5:          // Schleife                    │
│        summe = summe + i       // Zustand ändern              │
│    ausgeben(summe)             // Ergebnis: 15                │
│                                                                │
│  Die Schritte beschreiben WIE die Summe berechnet wird        │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### Prozedurale Programmierung

| Aspekt | Beschreibung |
|--------|--------------|
| **Fokus** | Zerlegung in Prozeduren/Funktionen |
| **Organisation** | Funktionen, die Daten verarbeiten |
| **Sprachen** | C, Pascal, BASIC |

#### Objektorientierte Programmierung (OOP)

| Aspekt | Beschreibung |
|--------|--------------|
| **Fokus** | Organisation in Objekten mit Daten und Methoden |
| **Grundkonzepte** | Klassen, Objekte, Attribute, Methoden |
| **Sprachen** | Java, C#, Python, C++ |

---

### Deklarative Programmierung

Bei **deklarativer Programmierung** wird beschrieben, **WAS** erreicht werden soll, nicht wie.

```
┌────────────────────────────────────────────────────────────────┐
│                DEKLARATIVE PROGRAMMIERUNG                      │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Merkmale:                                                     │
│  • Beschreibt das gewünschte Ergebnis                         │
│  • Keine expliziten Kontrollflüsse                            │
│  • Das "Wie" übernimmt die Ausführungsumgebung                │
│                                                                │
│  Beispiel (Summe berechnen, funktional):                      │
│                                                                │
│    summe = sum([1, 2, 3, 4, 5])   // WAS: Summe der Liste    │
│                                                                │
│  Das WIE ist dem Entwickler nicht wichtig                     │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### Funktionale Programmierung

| Aspekt | Beschreibung |
|--------|--------------|
| **Fokus** | Funktionen als zentrale Bausteine |
| **Merkmale** | Keine Seiteneffekte, Immutabilität |
| **Sprachen** | Haskell, Erlang, teilweise Python |

#### Logische Programmierung

| Aspekt | Beschreibung |
|--------|--------------|
| **Fokus** | Logische Regeln und Fakten |
| **Merkmale** | System leitet Antworten ab |
| **Sprachen** | Prolog |

---

### Vergleich: Imperativ vs. Deklarativ

| Aspekt | Imperativ | Deklarativ |
|--------|-----------|------------|
| **Fragt** | "Wie?" | "Was?" |
| **Beschreibt** | Schritte zur Lösung | Gewünschtes Ergebnis |
| **Beispiel** | Schleife durchlaufen | Filter-Funktion aufrufen |
| **Kontrolle** | Entwickler bestimmt Ablauf | System bestimmt Ablauf |

---

### Objektorientierte Programmierung im Detail

```
┌────────────────────────────────────────────────────────────────┐
│            OBJEKTORIENTIERTE PROGRAMMIERUNG                    │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  KLASSE (Bauplan)              OBJEKT (konkrete Instanz)      │
│  ┌────────────────────┐        ┌────────────────────┐        │
│  │       Auto         │        │    meinAuto        │        │
│  ├────────────────────┤        ├────────────────────┤        │
│  │ - marke: String    │        │ marke = "VW"       │        │
│  │ - farbe: String    │───────►│ farbe = "rot"      │        │
│  │ - ps: Integer      │        │ ps = 150           │        │
│  ├────────────────────┤        ├────────────────────┤        │
│  │ + starten()        │        │ starten()          │        │
│  │ + bremsen()        │        │ bremsen()          │        │
│  │ + beschleunigen()  │        │ beschleunigen()    │        │
│  └────────────────────┘        └────────────────────┘        │
│                                                                │
│  Attribute = Eigenschaften (Daten)                            │
│  Methoden = Fähigkeiten (Funktionen)                          │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Begriff | Erklärung |
|---------|-----------|
| **Klasse** | Bauplan/Vorlage für Objekte |
| **Objekt** | Konkrete Instanz einer Klasse |
| **Attribut** | Eigenschaft/Datenelement |
| **Methode** | Funktion innerhalb einer Klasse |

---

### Sprachen und ihre Paradigmen

| Sprache | Paradigmen |
|---------|------------|
| **C** | Prozedural |
| **Java** | Objektorientiert (primär) |
| **C#** | Objektorientiert, teilweise funktional |
| **Python** | Multi-Paradigma (OOP, prozedural, funktional) |
| **JavaScript** | Multi-Paradigma |
| **Haskell** | Funktional |
| **SQL** | Deklarativ |
| **HTML/CSS** | Deklarativ (Markup) |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Paradigma** | Grundlegender Programmierstil |
| **Imperativ** | Beschreibt WIE (Schritte) |
| **Deklarativ** | Beschreibt WAS (Ziel) |
| **Prozedural** | Imperativ mit Prozeduren/Funktionen |
| **OOP** | Objektorientierte Programmierung |
| **Funktional** | Deklarativ mit Funktionen |
| **Klasse** | Bauplan für Objekte |
| **Objekt** | Instanz einer Klasse |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was ist der Unterschied zwischen imperativ und deklarativ?
- Was sind Klassen und Objekte?
- Nennen Sie Merkmale objektorientierter Programmierung

### Wichtig zu merken

- **Imperativ** = WIE (Schritt für Schritt)
- **Deklarativ** = WAS (Ergebnis beschreiben)
- **OOP** = Klassen, Objekte, Attribute, Methoden
- **Python, Java** = Objektorientiert

---

## Übungsaufgaben

### Aufgabe 1
Was ist der Unterschied zwischen imperativer und deklarativer Programmierung?

**Lösung:**
- **Imperativ:** Beschreibt **WIE** ein Problem gelöst wird (Schritte, Anweisungen)
- **Deklarativ:** Beschreibt **WAS** erreicht werden soll (Ergebnis)

Beispiel: Eine Liste filtern
- Imperativ: Schleife durch alle Elemente, prüfe Bedingung, füge zu neuer Liste hinzu
- Deklarativ: `filter(liste, bedingung)` - nur das gewünschte Ergebnis angeben

### Aufgabe 2
Erklären Sie den Unterschied zwischen einer Klasse und einem Objekt.

**Lösung:**
- **Klasse:** Ein Bauplan/eine Vorlage, die Attribute (Eigenschaften) und Methoden (Funktionen) definiert. Beispiel: Klasse "Auto" mit Attributen marke, farbe, ps
- **Objekt:** Eine konkrete Instanz einer Klasse mit konkreten Werten. Beispiel: Objekt "meinAuto" mit marke="VW", farbe="rot", ps=150

### Aufgabe 3
Ordnen Sie folgende Sprachen ihrem primären Paradigma zu: C, Java, SQL

**Lösung:**
| Sprache | Primäres Paradigma |
|---------|-------------------|
| C | Prozedural (imperativ) |
| Java | Objektorientiert |
| SQL | Deklarativ |

---

## Querverweise

- [06-02-04 OOP-Grundlagen](../06-02-programming/06-02-04-oop-fundamentals.md) - OOP im Detail
- [06-03-01 Klassendiagramm](../06-03-uml/06-03-01-class-diagram.md) - UML für Klassen
- [06-02-03 Prozeduren und Funktionen](../06-02-programming/06-02-03-procedures-functions.md) - Prozedurale Konzepte
