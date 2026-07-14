# Debugging

## Lernziele

Nach diesem Kapitel solltest du:
- Debugging-Techniken und -Werkzeuge kennen
- Fehlerarten unterscheiden
- Fehler in gegebenem Code (z. B. einem Sortieralgorithmus) finden

---

## Kerninhalt

**Debugging** ist das systematische **Auffinden und Beheben von Fehlern (Bugs)** im Code.

### Fehlerarten

| Art | Beschreibung |
|-----|--------------|
| **Syntaxfehler** | Verstoß gegen die Sprachregeln (vom Compiler erkannt) |
| **Laufzeitfehler** | Absturz zur Laufzeit (z. B. Division durch 0, NullPointer) |
| **Logikfehler** | Programm läuft, liefert aber **falsche** Ergebnisse (am schwersten zu finden) |

### Werkzeuge & Techniken

- **Breakpoint (Haltepunkt):** Programm an einer Stelle anhalten
- **Einzelschritt (Step over/into/out):** Zeile für Zeile ausführen
- **Watch/Variablenanzeige:** Werte zur Laufzeit beobachten
- **Call Stack:** Aufrufhierarchie ansehen
- **Logging/Ausgaben:** Zwischenwerte protokollieren
- **Schreibtischtest:** Code von Hand durchspielen (siehe [06-02-04](../06-02-programmierung/06-02-04-pseudocode-analyse.md))

### Beispiel: Fehler in einem Sortieralgorithmus

Typische Bugs in Bubble Sort: falsche **Schleifengrenzen** (`< n` statt `< n-1` → Index-Fehler), falsche **Vergleichsrichtung** (`<` statt `>`), oder fehlende **Tauschvariable**. Mit Breakpoint + Wertetabelle prüft man den Ablauf Schritt für Schritt.

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Breakpoint** | Haltepunkt zum Anhalten des Programms |
| **Logikfehler** | Falsches Ergebnis trotz lauffähigem Code |
| **Watch** | Beobachtung von Variablenwerten zur Laufzeit |
| **Call Stack** | Aufrufkette der Methoden |

---

## Prüfungstipps

- **Syntax/Laufzeit/Logik** unterscheiden – Logikfehler sind am schwersten.
- **Fehlersuche im Code** ist im aktualisierten Katalog **neu betont**.
- Typische Aufgabe: einen fehlerhaften Java-Sortieralgorithmus analysieren und korrigieren – nutze Schreibtischtest.

---

## Übungsaufgabe

**Aufgabe (nach ConSystem GmbH):** Ein Java-Code soll einen Sortieralgorithmus umsetzen, arbeitet aber fehlerhaft. Finde und korrigiere den Fehler (z. B. Schleifengrenze/Vergleich) und belege mit einem Schreibtischtest.

---

## Querverweise

- [06-02-04 Analyse von Pseudocode](../06-02-programmierung/06-02-04-pseudocode-analyse.md)
- [02-03 Testen von Software](../../02-quality-management/02-03-testen.md)
