# Datenkapselung & Sichtbarkeit

## Lernziele

Nach diesem Kapitel solltest du:
- Datenkapselung und ihren Nutzen erklären
- Die vier Sichtbarkeiten/Zugriffsmodifizierer anwenden
- Getter/Setter mit Validierung einsetzen

---

## Kerninhalt

**Datenkapselung** (Encapsulation) verbirgt die internen Daten einer Klasse und erlaubt den Zugriff nur über definierte Methoden. Attribute sind `private`, der Zugriff läuft über **Getter/Setter**. Vorteile: **Datenintegrität**, **Wartbarkeit**, **kontrollierter Zugriff** (Validierung/Logik).

### Zugriffsmodifizierer (Sichtbarkeit)

| Modifizierer | Symbol (UML) | Sichtbar in |
|--------------|--------------|-------------|
| **public** | `+` | überall |
| **protected** | `#` | Klasse + Unterklassen (+ Paket) |
| **(package-private)** | `~` | gleiches Paket |
| **private** | `-` | nur in der Klasse |

> **Faustregel:** Attribute `private`, Methoden so restriktiv wie möglich (Least Privilege).

### Getter/Setter mit Validierung

```java
public class Konto {
    private double kontostand;              // gekapselt

    public double getKontostand() {         // Getter
        return kontostand;
    }
    public void einzahlen(double betrag) {  // Setter mit Regel
        if (betrag <= 0) return;            // ungültige Eingabe abweisen
        kontostand += betrag;
    }
}
```

Gegenbeispiel (schlecht): `public double kontostand;` – jeder kann den Wert direkt (auch negativ) setzen → keine Kontrolle.

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Kapselung** | Verbergen von Attributen, Zugriff über Methoden |
| **public/protected/private** | Zugriffsstufen |
| **Getter/Setter** | Lese-/Schreibmethoden, oft mit Validierung |

---

## Prüfungstipps

- Die **vier Sichtbarkeiten** und ihre UML-Symbole (`+ # ~ -`) kennen.
- **Kapselung** ist im Katalog ausdrücklich genannt – Nutzen (Integrität, Kontrolle) nennen können.
- Setter mit **Validierung** als typisches Beispiel.

---

## Übungsaufgabe

**Aufgabe:** Kapsle eine Klasse `Produkt` mit `private preis` und einem Setter, der negative Preise ablehnt. Gib die passenden Sichtbarkeiten an.

---

## Querverweise

- [06-02-03 Objektorientierung (OOP)](./06-02-03-oop.md)
- [06-04-09 Klassendiagramm](../06-04-uml/06-04-09-klassendiagramm.md)
