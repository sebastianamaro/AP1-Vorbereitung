# Konstruktoren

## Lernziele

Nach diesem Kapitel solltest du:
- Aufgabe und Regeln eines Konstruktors kennen
- Konstruktor-Überladung anwenden
- Standard- und parametrisierte Konstruktoren unterscheiden

---

## Kerninhalt

Ein **Konstruktor** erzeugt und initialisiert ein Objekt. Regeln: **gleicher Name wie die Klasse**, **kein Rückgabewert** (auch nicht `void`).

**Drei Aufgaben:** (1) Speicher reservieren, (2) Instanzvariablen initialisieren, (3) Referenz auf das Objekt liefern.

Ohne eigenen Konstruktor stellt der Compiler einen **Standardkonstruktor** (ohne Parameter) bereit – sobald man einen eigenen definiert, entfällt dieser automatische.

### Überladung (Overloading)

Mehrere Konstruktoren mit **unterschiedlichen Parameterlisten** (Anzahl/Typ). Der Compiler wählt anhand der Argumente den passenden.

```java
public class Hund {
    private String name;
    private int alter;

    public Hund() { this("Unbekannt", 0); }          // ruft anderen Konstruktor (this)
    public Hund(String name) { this(name, 0); }
    public Hund(String name, int alter) {            // "Haupt"-Konstruktor
        this.name = name;
        this.alter = alter;
    }
}

new Hund();                 // Standardwerte
new Hund("Rex");            // nur Name
new Hund("Rex", 3);         // Name + Alter
```

- **`this(...)`** ruft einen anderen Konstruktor derselben Klasse (Konstruktor-Verkettung).
- **`super(...)`** ruft den Konstruktor der Oberklasse (bei Vererbung, als erste Anweisung).

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Konstruktor** | Erzeugt/initialisiert ein Objekt; Klassenname, kein Rückgabewert |
| **Standardkonstruktor** | Parameterloser Konstruktor (auto, wenn keiner definiert) |
| **Überladung** | Mehrere Konstruktoren mit versch. Parameterlisten |
| **this()/super()** | Konstruktor-Verkettung innerhalb/zur Oberklasse |

---

## Prüfungstipps

- Regeln merken: **Name = Klassenname, kein Rückgabewert**.
- **Überladung** = unterschiedliche Parameterlisten (nicht nur andere Namen).
- Sobald ein eigener Konstruktor existiert, gibt es **keinen** automatischen Standardkonstruktor mehr.

---

## Übungsaufgabe

**Aufgabe:** Schreibe eine Klasse `Rechteck` mit einem Konstruktor `(breite, hoehe)` und einem überladenen Konstruktor `(seite)` für ein Quadrat (nutze `this(...)`).

---

## Querverweise

- [06-02-05 Datenkapselung](./06-02-05-kapselung.md)
- [06-02-08 Klassen: abstrakt/Interface/Generics](./06-02-08-klassen-abstrakt-interface.md)
