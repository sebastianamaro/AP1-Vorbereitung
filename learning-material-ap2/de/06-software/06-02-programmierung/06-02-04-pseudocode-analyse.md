# Analyse von Pseudocode (Schreibtischtest)

## Lernziele

Nach diesem Kapitel solltest du:
- Pseudocode lesen und nachvollziehen
- Einen Schreibtischtest (Desk-Check) durchführen
- Kontrollstrukturen erkennen

---

## Kerninhalt

### Pseudocode

**Pseudocode** beschreibt Programmlogik **sprachenunabhängig** und lesbar, ohne strikte Syntax. Typische Bausteine:

- **Zuweisung:** `preis ← 100`
- **Verzweigung:** `WENN bedingung DANN … SONST … ENDEWENN`
- **Schleifen:** `SOLANGE bedingung …`, `FÜR i VON 1 BIS n …`
- **Ein-/Ausgabe:** `LIES`, `GIB AUS`

### Schreibtischtest (Desk-Check)

Beim **Schreibtischtest** spielt man den Code **von Hand** mit konkreten Eingabewerten durch und protokolliert die Variablen **Schritt für Schritt** in einer **Wertetabelle**. So prüft man, ob der Code die erwarteten Ausgaben liefert.

#### Beispiel: Provisionsberechnung

```
LIES umsatz
WENN umsatz > 10000 DANN
    provision ← umsatz * 0.05
SONST
    provision ← umsatz * 0.02
ENDEWENN
GIB AUS provision
```

**Wertetabelle** (Eingabe `umsatz = 20000`):

| Schritt | umsatz | Bedingung | provision |
|---------|--------|-----------|-----------|
| LIES | 20000 | – | – |
| WENN | 20000 | 20000 > 10000 → wahr | – |
| DANN | 20000 | – | 20000·0,05 = **1000** |
| AUSGABE | | | 1000 |

→ Erwartete Ausgabe **1000** stimmt.

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Pseudocode** | Sprachenunabhängige Beschreibung der Programmlogik |
| **Schreibtischtest** | Manuelles Durchspielen mit Wertetabelle |
| **Wertetabelle** | Protokoll der Variablenwerte je Schritt |
| **Kontrollstruktur** | Verzweigung, Schleife, Sequenz |

---

## Prüfungstipps

- Der **Schreibtischtest** ist im aktualisierten Katalog **neu betont** – Wertetabelle sauber führen.
- Bei Schleifen jede Iteration einzeln protokollieren (häufige Fehlerquelle: Abbruchbedingung).
- Aufgabe: prüfen, ob Pseudocode die **korrekten Ausgabedaten** erzeugt (mit gegebenen Ein-/Ausgaben abgleichen).

---

## Übungsaufgabe

**Aufgabe (nach ConSystem GmbH):** Prüfe per Schreibtischtest, ob ein gegebener Pseudocode zur Provisionsberechnung für vorgegebene Eingaben die korrekten Ausgaben liefert.

---

## Querverweise

- [06-02-02 Sortier- und Suchalgorithmen](./06-02-02-sortier-suchalgorithmen.md)
- [06-06-01 Debugging](../06-06-qualitaet-ux/06-06-01-debugging.md)
