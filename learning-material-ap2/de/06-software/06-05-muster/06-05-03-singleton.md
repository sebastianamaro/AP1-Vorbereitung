# Singleton Pattern

## Lernziele

Nach diesem Kapitel solltest du:
- Zweck des Singleton-Musters erklären
- Die drei Kernbausteine kennen und anwenden
- Typische Einsatzfälle nennen

---

## Kerninhalt

Das **Singleton** (Erzeugungsmuster) stellt sicher, dass von einer Klasse **genau eine Instanz** existiert, und bietet einen **globalen Zugriffspunkt** darauf.

**Einsatz:** gemeinsame Ressourcen/zentrale Steuerung – z. B. **Datenbankverbindung**, Konfiguration, Logger.

### Drei Kernbausteine

| Baustein | Zweck |
|----------|-------|
| **privater Konstruktor** | verhindert Erzeugung von außen (`new`) |
| **statische Variable** | hält die einzige Instanz |
| **statische Zugriffsmethode** | liefert die Instanz (erzeugt sie beim ersten Aufruf – *lazy*) |

### Beispiel (Java)

```java
public class Datenbank {
    private static Datenbank instanz;      // hält die einzige Instanz
    private Datenbank() { }                 // privat -> kein new von außen

    public static Datenbank getInstanz() {  // globaler Zugriffspunkt
        if (instanz == null) {              // lazy Initialisierung
            instanz = new Datenbank();
        }
        return instanz;
    }
}
```

> **Analogie:** Das Singleton ist wie der *eine Manager* im System – es gibt nur einen.
> **Hinweis:** In nebenläufigen Programmen muss `getInstanz()` **thread-sicher** sein (z. B. `synchronized` oder Enum-Singleton).

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Singleton** | Genau eine Instanz + globaler Zugriff |
| **Privater Konstruktor** | Sperrt externe Instanzerzeugung |
| **Lazy Initialisierung** | Instanz wird erst bei Bedarf erzeugt |

---

## Prüfungstipps

- Die **drei Bausteine** (privater Konstruktor, statische Variable, statische Methode) sicher nennen.
- Einordnung: **Erzeugungsmuster**.
- Einsatz an einem Beispiel (DB-Verbindung/Logger) begründen.

---

## Übungsaufgabe

**Aufgabe:** Implementiere eine Singleton-Klasse `Logger` mit privatem Konstruktor und `getInstanz()` und erkläre, warum der Konstruktor privat sein muss.

---

## Querverweise

- [06-05-04 Factory](./06-05-04-factory.md)
- [06-02-08 Klassen: abstrakt/Interface/Generics](../06-02-programmierung/06-02-08-klassen-abstrakt-interface.md)
