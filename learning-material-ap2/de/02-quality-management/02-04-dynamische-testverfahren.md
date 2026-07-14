# Dynamische Testverfahren (Überdeckungsmaße)

## Lernziele

Nach diesem Kapitel solltest du:
- Anweisungs-, Zweig- und Pfadüberdeckung erklären und unterscheiden
- Die Verfahren dem White-Box-Test zuordnen
- Überdeckungsgrade an einfachem Code bestimmen

---

## Kerninhalt

Die **Quellcode-Analyse** ist Teil des **White-Box-Tests**. Kontrollflussorientierte Überdeckungsmaße messen, wie gründlich der Code durch Testfälle durchlaufen wird:

### Anweisungsüberdeckung (C0, Statement Coverage)

- Ziel: **jede Anweisung** mindestens einmal ausführen.
- Schwächstes Maß – erreicht nicht zwingend beide Zweige einer Verzweigung.

### Zweigüberdeckung (C1, Branch/Decision Coverage)

- Ziel: **jeder Zweig** jeder Verzweigung mindestens einmal (also `if` **wahr** *und* **falsch**).
- Stärker als C0; C1 schließt C0 ein.

### Pfadüberdeckung (C2, Path Coverage)

- Ziel: **jeder mögliche Pfad** durch das Programm.
- Stärkstes Maß, aber bei Schleifen schnell **praktisch nicht vollständig** erreichbar (Pfadexplosion).

```
Hierarchie der Gründlichkeit:  Anweisung (C0)  ⊂  Zweig (C1)  ⊂  Pfad (C2)
```

### Beispiel

```
if (a > 0):        # eine Verzweigung
    x = 1
# (kein else)
```
- **Anweisungsüberdeckung:** ein Test mit `a > 0` reicht (alle Anweisungen ausgeführt).
- **Zweigüberdeckung:** zusätzlich ein Test mit `a <= 0` nötig (der „falsch“-Zweig).

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Anweisungsüberdeckung (C0)** | Jede Anweisung mind. einmal ausführen |
| **Zweigüberdeckung (C1)** | Jeder Zweig (wahr/falsch) mind. einmal |
| **Pfadüberdeckung (C2)** | Jeder Programmpfad; oft nicht vollständig erreichbar |

---

## Prüfungstipps

- Die **Reihenfolge der Gründlichkeit** merken: C0 ⊂ C1 ⊂ C2.
- Typische Aufgabe: zu gegebenem Code die **Testfälle** angeben, die eine bestimmte Überdeckung erreichen.
- Diese Verfahren gehören zum **White-Box-Test** (Codekenntnis nötig).

---

## Übungsaufgabe

**Aufgabe (nach ConSystem GmbH):** Beschreibe stichpunktartig Anweisungs-, Zweig- und Pfadüberdeckung und gib für ein `if/else`-Beispiel Testfälle für vollständige Zweigüberdeckung an.

---

## Querverweise

- [02-03 Testen von Software](./02-03-testen.md)
- [06-02 Analyse von Pseudocode](../06-software/06-02-programmierung/06-02-04-pseudocode-analyse.md)
