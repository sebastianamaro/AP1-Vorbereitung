# Abstrakte Klassen, Interfaces & Generics

## Lernziele

Nach diesem Kapitel solltest du:
- Abstrakte Klassen und Interfaces unterscheiden
- Wissen, wann man was einsetzt
- Generics und ihren Nutzen (Typsicherheit) erklären

---

## Kerninhalt

### Abstrakte Klasse

Eine **abstrakte Klasse** ist ein „Bauplan", der **nicht instanziiert** werden kann. Sie kann **konkrete** und **abstrakte** (implementierungslose) Methoden enthalten; Unterklassen müssen die abstrakten Methoden implementieren.

```java
abstract class Fahrzeug {
    void hupe() { /* konkret */ }
    abstract void starte();          // muss überschrieben werden
}
class Motorrad extends Fahrzeug {
    void starte() { /* ... */ }
}
```

### Interface

Ein **Interface** definiert einen **Vertrag** (Methodensignaturen) ohne Implementierung. Eine Klasse kann **mehrere** Interfaces implementieren (Mehrfachvererbung von Typen).

```java
interface Zahlbar { double betrag(); }
class Rechnung implements Zahlbar {
    public double betrag() { return 100.0; }
}
```

### Abstrakte Klasse vs. Interface

| | Abstrakte Klasse | Interface |
|--|------------------|-----------|
| Instanziierbar | nein | nein |
| Attribute | ja (Zustand) | nur Konstanten |
| Methoden | konkret + abstrakt | Signaturen (+ default) |
| Konstruktor | ja | nein |
| Mehrfach nutzbar | nur **eine** Oberklasse | **mehrere** implementierbar |
| Einsatz | gemeinsame Basis + Code | reiner Fähigkeits-Vertrag |

> **Faustregel:** „ist-ein" mit gemeinsamem Code → abstrakte Klasse; „kann-etwas"/Fähigkeit → Interface.

### Generics

**Generics** parametrisieren Typen und schaffen **Typsicherheit** ohne Casts.

```java
class Box<T> { private T inhalt; void set(T x){inhalt=x;} T get(){return inhalt;} }
Box<String> b = new Box<>();   // nur Strings, kein Cast nötig
```

Ohne Generics müsste man mit `Object` + manuellem Cast arbeiten (fehleranfällig). Mit Generics: flexibler, sicherer, wiederverwendbar.

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Abstrakte Klasse** | Nicht instanziierbar; konkrete + abstrakte Methoden |
| **Interface** | Vertrag ohne Implementierung; mehrfach implementierbar |
| **Generics** | Typparameter für Typsicherheit (`<T>`) |

---

## Prüfungstipps

- **Abstrakte Klasse vs. Interface** (Tabelle!) – Dauerbrenner: eine Oberklasse vs. mehrere Interfaces; Attribute/Konstruktor nur bei abstrakter Klasse.
- Generics = **Typsicherheit ohne Cast**.
- „ist-ein + Code" → abstrakte Klasse; „Fähigkeit" → Interface.

---

## Übungsaufgabe

**Aufgabe:** (1) Entscheide für „alle Formen haben eine `flaeche()`" zwischen abstrakter Klasse und Interface und begründe. (2) Warum ist `List<String>` sicherer als eine Liste von `Object`?

---

## Querverweise

- [06-02-03 Objektorientierung (OOP)](./06-02-03-oop.md)
- [06-05-04 Factory](../06-05-muster/06-05-04-factory.md)
