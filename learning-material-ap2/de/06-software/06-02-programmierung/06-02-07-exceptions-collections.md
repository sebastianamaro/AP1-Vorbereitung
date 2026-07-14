# Exceptions & Collections

## Lernziele

Nach diesem Kapitel solltest du:
- Ausnahmebehandlung mit try/catch anwenden
- List, Set und Map unterscheiden
- Die passende Collection auswählen

---

## Kerninhalt

### Ausnahmebehandlung (Exceptions)

Eine **Exception** signalisiert einen Fehler zur Laufzeit. Mit **try/catch** wird sie abgefangen, statt das Programm abstürzen zu lassen.

```java
try {
    int e = 10 / teiler;
} catch (ArithmeticException ex) {   // z. B. Division durch 0
    System.out.println("Fehler: " + ex.getMessage());
} finally {
    // wird immer ausgeführt (z. B. Ressourcen schließen)
}
```

- **`try`** – überwachter Block; **`catch`** – Behandlung je Exception-Typ; **`finally`** – läuft immer.
- **Checked** Exceptions muss man behandeln/deklarieren; **Unchecked** (RuntimeException) nicht zwingend.
- **`throw`** wirft selbst eine Exception; **`throws`** deklariert sie in der Signatur.

### Collections (Java Collections Framework)

| Typ | Reihenfolge | Duplikate | Beispiel |
|-----|-------------|-----------|----------|
| **List** | geordnet (Index) | erlaubt | `ArrayList<String>` |
| **Set** | ungeordnet* | **keine** | `HashSet<String>` |
| **Map** | Schlüssel→Wert | Schlüssel eindeutig | `HashMap<Integer,String>` |

```java
List<String> namen = new ArrayList<>();      // geordnet, Duplikate
Set<String>  tags  = new HashSet<>();         // eindeutig
Map<Integer,String> personen = new HashMap<>(); // Key-Value
personen.put(1, "Anna");
```

Auswahl: **List** für Reihenfolge/Index, **Set** für Eindeutigkeit, **Map** für Schlüssel-Wert-Zuordnung.

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **try/catch/finally** | Ausnahmebehandlung |
| **checked/unchecked** | Behandlungspflichtig vs. nicht |
| **List/Set/Map** | Geordnet / eindeutig / Schlüssel-Wert |

---

## Prüfungstipps

- **try/catch/finally** und den Ablauf (finally läuft immer) kennen.
- **List vs. Set vs. Map** sicher unterscheiden (Reihenfolge/Duplikate/Key-Value) – häufige Zuordnungsfrage.
- Passende Collection zu einem Szenario begründen.

---

## Übungsaufgabe

**Aufgabe:** (1) Fange eine mögliche `NumberFormatException` beim Parsen einer Benutzereingabe ab. (2) Welche Collection eignet sich für „eindeutige E-Mail-Adressen" und warum?

---

## Querverweise

- [06-02-08 Klassen: abstrakt/Interface/Generics](./06-02-08-klassen-abstrakt-interface.md)
- [06-06-01 Debugging](../06-06-qualitaet-ux/06-06-01-debugging.md)
