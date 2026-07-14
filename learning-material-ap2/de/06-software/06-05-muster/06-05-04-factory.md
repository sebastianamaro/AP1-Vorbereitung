# Factory Pattern

## Lernziele

Nach diesem Kapitel solltest du:
- Zweck des Factory-Musters erklären
- Direkte Instanziierung von der Erzeugung über eine Fabrik unterscheiden
- Die Vorteile (Austauschbarkeit, Erweiterbarkeit) nennen

---

## Kerninhalt

Das **Factory Pattern** (Erzeugungsmuster) **kapselt die Objekterzeugung** in einer zentralen Methode/Klasse. Der Client fragt die Fabrik nach einem Objekt, statt es selbst mit `new` zu erzeugen – er muss die konkrete Klasse nicht kennen.

### Vorteile

| Vorteil | Bedeutung |
|---------|-----------|
| **Zentrale Objekterstellung** | Erzeugung an einer Stelle |
| **Einheitliche Schnittstelle** | Client nutzt nur den gemeinsamen Obertyp |
| **Austauschbarkeit** | konkrete Klasse leicht wechselbar |
| **Erweiterbarkeit** | neue Typen ohne Änderung des Client-Codes |

### Beispiel (Java)

```java
abstract class Fahrzeug { abstract void fahre(); }
class Auto extends Fahrzeug { void fahre() { /* ... */ } }
class Motorrad extends Fahrzeug { void fahre() { /* ... */ } }

class FahrzeugFabrik {
    static Fahrzeug erstelle(String typ) {
        return switch (typ) {
            case "auto" -> new Auto();
            case "motorrad" -> new Motorrad();
            default -> throw new IllegalArgumentException(typ);
        };
    }
}

// Client kennt nur den Obertyp Fahrzeug:
Fahrzeug f = FahrzeugFabrik.erstelle("auto");
f.fahre();
```

> **Analogie:** Du *bestellst* ein Objekt – wie in der Pizzeria: du sagst, *was* du willst, nicht *wie* es gebaut wird.

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Factory** | Kapselt Objekterzeugung hinter einer Methode |
| **Polymorphie** | Client arbeitet mit dem gemeinsamen Obertyp |
| **Austauschbarkeit** | Konkrete Klasse ohne Client-Änderung wechselbar |

---

## Prüfungstipps

- Einordnung: **Erzeugungsmuster**.
- Kern: **Erzeugung kapseln**, Client kennt nur den Obertyp → nutzt **Polymorphie**.
- Vorteil **Erweiterbarkeit** (neue Klasse ohne Client-Änderung) betonen.

---

## Übungsaufgabe

**Aufgabe:** Entwirf eine `FormFabrik`, die je nach Parameter `Kreis` oder `Rechteck` (beide erben von `Form`) erzeugt, und zeige die Client-Nutzung über den Obertyp `Form`.

---

## Querverweise

- [06-05-03 Singleton](./06-05-03-singleton.md)
- [06-02-03 Objektorientierung (OOP)](../06-02-programmierung/06-02-03-oop.md)
