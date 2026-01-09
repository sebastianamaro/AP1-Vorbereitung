# OOP-Grundlagen

## Lernziele

Nach diesem Kapitel solltest du:
- Die Grundkonzepte der objektorientierten Programmierung verstehen
- Klassen und Objekte unterscheiden können
- Attribute und Methoden erklären können
- Einfache Klassendiagramme lesen können

---

## Kerninhalt

### Was ist Objektorientierte Programmierung?

**Objektorientierte Programmierung (OOP)** ist ein Programmierparadigma, das Daten und Funktionen in Objekten zusammenfasst.

```
┌─────────────────────────────────────────────────────────────────┐
│              OBJEKTORIENTIERTE PROGRAMMIERUNG                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Grundidee: Die reale Welt besteht aus Objekten              │
│              Programme modellieren diese Objekte               │
│                                                                 │
│   ┌─────────────────┐         ┌─────────────────┐             │
│   │   REALE WELT    │         │   PROGRAMMWELT  │             │
│   ├─────────────────┤         ├─────────────────┤             │
│   │ Auto            │  ───►   │ Klasse Auto     │             │
│   │ - hat Farbe     │         │ - farbe         │             │
│   │ - hat PS        │         │ - ps            │             │
│   │ - kann fahren   │         │ - fahren()      │             │
│   │ - kann bremsen  │         │ - bremsen()     │             │
│   └─────────────────┘         └─────────────────┘             │
│                                                                 │
│   Objekte = Daten + Verhalten (zusammen gekapselt)            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Klasse und Objekt

```
┌────────────────────────────────────────────────────────────────┐
│                   KLASSE vs. OBJEKT                            │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   KLASSE = Bauplan                OBJEKT = Konkrete Instanz   │
│   ┌────────────────────┐         ┌────────────────────┐      │
│   │       Auto         │         │     meinAuto       │      │
│   ├────────────────────┤         ├────────────────────┤      │
│   │ - marke: String    │         │ marke = "VW"       │      │
│   │ - farbe: String    │  ───►   │ farbe = "rot"      │      │
│   │ - ps: Integer      │         │ ps = 150           │      │
│   ├────────────────────┤         ├────────────────────┤      │
│   │ + starten()        │         │ starten()          │      │
│   │ + bremsen()        │         │ bremsen()          │      │
│   └────────────────────┘         └────────────────────┘      │
│                                                                │
│   Von EINER Klasse können VIELE Objekte erstellt werden:      │
│                                                                │
│   ┌────────────────┐  ┌────────────────┐  ┌────────────────┐ │
│   │   meinAuto     │  │   deinAuto     │  │  firmenAuto    │ │
│   │ marke="VW"     │  │ marke="BMW"    │  │ marke="Audi"   │ │
│   │ farbe="rot"    │  │ farbe="blau"   │  │ farbe="schwarz"│ │
│   │ ps=150         │  │ ps=200         │  │ ps=180         │ │
│   └────────────────┘  └────────────────┘  └────────────────┘ │
│                                                                │
│   Alle Objekte haben die gleiche Struktur (Klasse),          │
│   aber unterschiedliche Werte.                                │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Begriff | Erklärung | Beispiel |
|---------|-----------|----------|
| **Klasse** | Bauplan/Vorlage für Objekte | Klasse "Auto" |
| **Objekt** | Konkrete Instanz einer Klasse | meinAuto (ist ein Auto) |
| **Instanz** | Anderes Wort für Objekt | "meinAuto ist eine Instanz von Auto" |
| **Instanziierung** | Objekt aus Klasse erstellen | `Auto meinAuto = new Auto();` |

---

### Attribute

**Attribute** sind die Eigenschaften/Daten eines Objekts.

```
┌────────────────────────────────────────────────────────────────┐
│                       ATTRIBUTE                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Klasse: Kunde                                               │
│   ┌────────────────────┐                                      │
│   │      Kunde         │                                      │
│   ├────────────────────┤                                      │
│   │ - kundenNr: int    │  ◄─── Attribute                     │
│   │ - name: String     │       (Eigenschaften)                │
│   │ - email: String    │                                      │
│   │ - aktiv: boolean   │                                      │
│   ├────────────────────┤                                      │
│   │ ...                │                                      │
│   └────────────────────┘                                      │
│                                                                │
│   Objekt: kunde1                                              │
│   ┌────────────────────┐                                      │
│   │ kundenNr = 12345   │                                      │
│   │ name = "Müller"    │  ◄─── Konkrete Werte                │
│   │ email = "m@x.de"   │                                      │
│   │ aktiv = true       │                                      │
│   └────────────────────┘                                      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Methoden

**Methoden** sind die Funktionen/das Verhalten eines Objekts.

```
┌────────────────────────────────────────────────────────────────┐
│                        METHODEN                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Klasse: Konto                                               │
│   ┌────────────────────────────────┐                         │
│   │           Konto                │                         │
│   ├────────────────────────────────┤                         │
│   │ - kontoNr: String              │  Attribute              │
│   │ - kontostand: double           │                         │
│   ├────────────────────────────────┤                         │
│   │ + einzahlen(betrag: double)    │  Methoden               │
│   │ + abheben(betrag: double)      │  (Verhalten)            │
│   │ + getKontostand(): double      │                         │
│   └────────────────────────────────┘                         │
│                                                                │
│   Methoden können:                                            │
│   • Attribute lesen (Getter)                                 │
│   • Attribute ändern (Setter)                                │
│   • Berechnungen durchführen                                 │
│   • Mit anderen Objekten interagieren                        │
│                                                                │
│   Beispiel in Pseudocode:                                    │
│                                                                │
│   METHODE einzahlen(betrag)                                   │
│       kontostand = kontostand + betrag                       │
│   ENDE METHODE                                                │
│                                                                │
│   METHODE abheben(betrag)                                     │
│       WENN kontostand >= betrag DANN                         │
│           kontostand = kontostand - betrag                   │
│           RÜCKGABE true                                       │
│       SONST                                                   │
│           RÜCKGABE false                                      │
│       ENDE WENN                                               │
│   ENDE METHODE                                                │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Konstruktor

Ein **Konstruktor** ist eine spezielle Methode, die beim Erstellen eines Objekts aufgerufen wird.

```
┌────────────────────────────────────────────────────────────────┐
│                      KONSTRUKTOR                               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Aufgabe: Objekt initialisieren (Attribute setzen)          │
│                                                                │
│   Klasse Person:                                              │
│   ┌────────────────────────────────────────────────────────┐ │
│   │  class Person {                                         │ │
│   │                                                         │ │
│   │      // Attribute                                       │ │
│   │      String name;                                       │ │
│   │      int alter;                                         │ │
│   │                                                         │ │
│   │      // Konstruktor (gleicher Name wie Klasse)         │ │
│   │      Person(String n, int a) {                         │ │
│   │          name = n;                                      │ │
│   │          alter = a;                                     │ │
│   │      }                                                  │ │
│   │  }                                                      │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Objekterstellung mit Konstruktor:                          │
│   Person p = new Person("Max", 25);                          │
│                      └──┬──┘  └─┬─┘                          │
│                         │      │                              │
│                      name   alter                             │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Sichtbarkeit (Zugriffsmodifikatoren)

```
┌────────────────────────────────────────────────────────────────┐
│                    SICHTBARKEIT                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   UML-Notation:                                               │
│   + public     │ Von überall zugreifbar                      │
│   - private    │ Nur innerhalb der Klasse                    │
│   # protected  │ Klasse und abgeleitete Klassen              │
│                                                                │
│   Beispiel:                                                   │
│   ┌────────────────────────────────┐                         │
│   │          Konto                 │                         │
│   ├────────────────────────────────┤                         │
│   │ - kontostand: double           │  private (geschützt)    │
│   │ - pin: String                  │                         │
│   ├────────────────────────────────┤                         │
│   │ + getKontostand(): double      │  public (öffentlich)    │
│   │ + einzahlen(betrag: double)    │                         │
│   └────────────────────────────────┘                         │
│                                                                │
│   Best Practice: Attribute private, Zugriff über Methoden    │
│   (Datenkapselung / Information Hiding)                      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Modifikator | UML | Sichtbar für |
|-------------|-----|--------------|
| **public** | + | Alle |
| **private** | - | Nur eigene Klasse |
| **protected** | # | Eigene Klasse und Unterklassen |

---

### Getter und Setter

**Getter** und **Setter** sind Methoden zum kontrollierten Zugriff auf private Attribute.

```
┌────────────────────────────────────────────────────────────────┐
│                   GETTER UND SETTER                            │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Klasse mit privaten Attributen und Zugriffsmethoden:       │
│                                                                │
│   class Produkt {                                             │
│       private String name;                                    │
│       private double preis;                                   │
│                                                                │
│       // Getter - Wert lesen                                  │
│       public String getName() {                               │
│           return name;                                        │
│       }                                                       │
│                                                                │
│       // Setter - Wert setzen (mit Validierung möglich)      │
│       public void setPreis(double neuerPreis) {              │
│           if (neuerPreis >= 0) {     // Validierung!         │
│               preis = neuerPreis;                            │
│           }                                                   │
│       }                                                       │
│   }                                                           │
│                                                                │
│   Verwendung:                                                 │
│   Produkt p = new Produkt();                                  │
│   p.setPreis(9.99);                  // Preis setzen         │
│   System.out.println(p.getName());   // Name lesen           │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

**Vorteile von Getter/Setter:**
- Validierung beim Setzen möglich
- Interne Darstellung kann sich ändern
- Kontrollierter Zugriff auf Daten

---

### OOP-Konzept: Kapselung

**Kapselung** (Encapsulation) bedeutet, dass Daten und Methoden zusammengefasst und geschützt werden.

```
┌────────────────────────────────────────────────────────────────┐
│                      KAPSELUNG                                 │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   ┌────────────────────────────────────────────────────────┐ │
│   │                        OBJEKT                           │ │
│   │  ┌─────────────────────────────────────────────────┐   │ │
│   │  │                                                 │   │ │
│   │  │      Private Attribute (geschützt)             │   │ │
│   │  │      - kontostand                               │   │ │
│   │  │      - pin                                      │   │ │
│   │  │                                                 │   │ │
│   │  └─────────────────────────────────────────────────┘   │ │
│   │                         │                               │ │
│   │                         ▼                               │ │
│   │  ┌─────────────────────────────────────────────────┐   │ │
│   │  │      Öffentliche Methoden (Schnittstelle)       │   │ │
│   │  │      + getKontostand()                          │   │ │
│   │  │      + einzahlen()                              │   │ │
│   │  │      + abheben()                                │   │ │
│   │  └─────────────────────────────────────────────────┘   │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Von außen: Nur über öffentliche Methoden zugreifen         │
│   Internes bleibt verborgen ("Black Box")                    │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Zusammenfassung OOP-Begriffe

| Begriff | Erklärung | Beispiel |
|---------|-----------|----------|
| **Klasse** | Bauplan für Objekte | `class Auto { ... }` |
| **Objekt** | Instanz einer Klasse | `Auto meinAuto = new Auto();` |
| **Attribut** | Eigenschaft/Datenelement | `farbe`, `ps` |
| **Methode** | Funktion in einer Klasse | `starten()`, `bremsen()` |
| **Konstruktor** | Initialisiert Objekt | `Auto(String marke)` |
| **Kapselung** | Daten schützen | private Attribute |
| **Getter/Setter** | Zugriffsmethoden | `getName()`, `setName()` |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **OOP** | Objektorientierte Programmierung |
| **Klasse** | Vorlage/Bauplan für Objekte |
| **Objekt** | Konkrete Instanz einer Klasse |
| **Attribut** | Eigenschaft eines Objekts |
| **Methode** | Funktion eines Objekts |
| **Konstruktor** | Spezielle Methode zur Initialisierung |
| **Kapselung** | Schutz der internen Daten |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was ist der Unterschied zwischen einer Klasse und einem Objekt?
- Was sind Attribute und Methoden?
- Erklären Sie das Prinzip der Kapselung
- Was macht ein Konstruktor?

### Wichtig zu merken

- **Klasse** = Bauplan, **Objekt** = konkrete Instanz
- **Attribute** = Eigenschaften (Daten)
- **Methoden** = Fähigkeiten (Funktionen)
- **Kapselung** = Daten schützen mit private
- **Konstruktor** = initialisiert das Objekt

---

## Übungsaufgaben

### Aufgabe 1
Erklären Sie den Unterschied zwischen einer Klasse und einem Objekt anhand eines Beispiels.

**Lösung:**
- **Klasse:** Eine Klasse ist ein Bauplan oder eine Vorlage. Sie definiert, welche Eigenschaften (Attribute) und Fähigkeiten (Methoden) Objekte haben werden. Beispiel: Die Klasse "Smartphone" definiert, dass ein Smartphone eine Marke, ein Modell und eine Speichergröße hat.
- **Objekt:** Ein Objekt ist eine konkrete Instanz einer Klasse mit konkreten Werten. Beispiel: "meinHandy" ist ein Objekt der Klasse Smartphone mit marke="Samsung", modell="Galaxy S21", speicher=128.

### Aufgabe 2
Gegeben ist folgende Klassenbeschreibung. Identifizieren Sie Attribute und Methoden:

```
Klasse: Buch
- titel
- autor
- isbn
- ausgeliehen
+ ausleihen()
+ zurueckgeben()
+ getInfo()
```

**Lösung:**

**Attribute (Eigenschaften mit -):**
- titel (vermutlich String)
- autor (vermutlich String)
- isbn (vermutlich String)
- ausgeliehen (vermutlich Boolean)

**Methoden (Funktionen mit +):**
- ausleihen() - setzt ausgeliehen auf true
- zurueckgeben() - setzt ausgeliehen auf false
- getInfo() - gibt Informationen zum Buch zurück

### Aufgabe 3
Warum sollten Attribute in der Regel als private deklariert werden?

**Lösung:**
Attribute sollten private sein, weil:
1. **Datenintegrität:** Werte können beim Setzen validiert werden (z.B. kein negativer Preis)
2. **Kapselung:** Die interne Implementierung kann geändert werden, ohne dass sich die Schnittstelle ändert
3. **Kontrolle:** Zugriff nur über definierte Getter/Setter-Methoden
4. **Fehlerreduzierung:** Unkontrollierte Änderungen von außen werden verhindert

---

## Querverweise

- [06-01-02 Programmierparadigmen](../06-01-fundamentals/06-01-02-programming-paradigms.md) - OOP als Paradigma
- [06-03-01 Klassendiagramm](../06-03-uml/06-03-01-class-diagram.md) - UML-Darstellung
- [06-02-03 Prozeduren und Funktionen](./06-02-03-procedures-functions.md) - Methoden-Grundlagen
