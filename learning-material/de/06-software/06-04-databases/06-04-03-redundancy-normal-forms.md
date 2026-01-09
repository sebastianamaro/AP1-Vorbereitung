# Redundanz und Normalformen

## Lernziele

Nach diesem Kapitel solltest du:
- Datenredundanz erkennen und deren Probleme verstehen
- Die ersten drei Normalformen erklären können
- Anomalien durch fehlende Normalisierung kennen
- Einfache Normalisierungen durchführen können

---

## Kerninhalt

### Was ist Redundanz?

**Redundanz** bedeutet, dass gleiche Daten mehrfach gespeichert werden.

```
┌─────────────────────────────────────────────────────────────────┐
│                      DATENREDUNDANZ                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Beispiel: Redundante Daten                                   │
│                                                                 │
│   ┌──────┬─────────┬────────────┬──────────┬──────────────┐   │
│   │BestNr│ Kunde   │ KundenOrt  │ Artikel  │ Preis        │   │
│   ├──────┼─────────┼────────────┼──────────┼──────────────┤   │
│   │ 1001 │ Müller  │ Berlin     │ Laptop   │ 999.00       │   │
│   │ 1002 │ Müller  │ Berlin     │ Maus     │  29.99       │   │
│   │ 1003 │ Schmidt │ Hamburg    │ Laptop   │ 999.00       │   │
│   │ 1004 │ Müller  │ Berlin     │ Tastatur │  49.99       │   │
│   └──────┴─────────┴────────────┴──────────┴──────────────┘   │
│              ▲           ▲                       ▲             │
│              │           │                       │             │
│              └───────────┴───────────────────────┘             │
│              REDUNDANZ: "Müller, Berlin" und "999.00"         │
│              werden mehrfach gespeichert!                      │
│                                                                 │
│   Probleme:                                                    │
│   • Speicherplatzverschwendung                                │
│   • Inkonsistenzgefahr                                        │
│   • Anomalien bei Änderungen                                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Anomalien durch Redundanz

```
┌────────────────────────────────────────────────────────────────┐
│                       ANOMALIEN                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   1. UPDATE-ANOMALIE                                          │
│   ┌────────────────────────────────────────────────────────┐ │
│   │  Müller zieht um. Der Ort muss in ALLEN Zeilen        │ │
│   │  geändert werden. Vergisst man eine → Inkonsistenz!   │ │
│   │                                                        │ │
│   │  │ Müller │ München  │  ← geändert                    │ │
│   │  │ Müller │ Berlin   │  ← vergessen → FEHLER!         │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   2. EINFÜGE-ANOMALIE (INSERT)                               │
│   ┌────────────────────────────────────────────────────────┐ │
│   │  Neuer Kunde ohne Bestellung kann nicht angelegt       │ │
│   │  werden, weil BestellNr als PK verlangt wird.         │ │
│   │                                                        │ │
│   │  │ ???? │ Weber │ Frankfurt │ - │ - │  NICHT MÖGLICH │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   3. LÖSCH-ANOMALIE (DELETE)                                 │
│   ┌────────────────────────────────────────────────────────┐ │
│   │  Schmidt hat nur eine Bestellung. Wird diese gelöscht, │ │
│   │  verschwindet auch der Kunde Schmidt komplett!         │ │
│   │                                                        │ │
│   │  │ 1003 │ Schmidt │ Hamburg │ Laptop │ ← wenn gelöscht│ │
│   │                                         → Kunde weg!   │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Normalisierung

**Normalisierung** ist der Prozess, Tabellen so aufzuteilen, dass Redundanz minimiert und Anomalien vermieden werden.

```
┌────────────────────────────────────────────────────────────────┐
│                    NORMALFORMEN                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│                      NICHT NORMALISIERT                        │
│                             │                                  │
│                             ▼                                  │
│                    ┌────────────────┐                         │
│                    │ 1. Normalform  │  Atomare Werte          │
│                    │     (1NF)      │  (keine Wiederholung)   │
│                    └────────┬───────┘                         │
│                             │                                  │
│                             ▼                                  │
│                    ┌────────────────┐                         │
│                    │ 2. Normalform  │  Alle Nicht-Schlüssel   │
│                    │     (2NF)      │  voll vom PK abhängig   │
│                    └────────┬───────┘                         │
│                             │                                  │
│                             ▼                                  │
│                    ┌────────────────┐                         │
│                    │ 3. Normalform  │  Keine transitiven      │
│                    │     (3NF)      │  Abhängigkeiten         │
│                    └────────────────┘                         │
│                                                                │
│   Jede höhere NF setzt die niedrigeren voraus!               │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### 1. Normalform (1NF)

```
┌────────────────────────────────────────────────────────────────┐
│                  1. NORMALFORM (1NF)                           │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Anforderung: Alle Attributwerte müssen ATOMAR sein.        │
│   (keine Listen, keine Mengen, keine mehrfachen Werte)       │
│                                                                │
│   NICHT in 1NF:                                               │
│   ┌──────────┬─────────┬─────────────────────────────┐       │
│   │ KundenNr │ Name    │ Telefonnummern              │       │
│   ├──────────┼─────────┼─────────────────────────────┤       │
│   │ 1        │ Müller  │ 0151-1234, 030-5678         │  ✗   │
│   │ 2        │ Schmidt │ 0172-9999                   │       │
│   └──────────┴─────────┴─────────────────────────────┘       │
│                    Mehrere Werte in einer Zelle!              │
│                                                                │
│   IN 1NF (Lösung 1: Eigene Tabelle):                        │
│   ┌──────────┬─────────┐    ┌──────────┬────────────┐       │
│   │ KundenNr │ Name    │    │ KundenNr │ Telefon    │       │
│   ├──────────┼─────────┤    ├──────────┼────────────┤       │
│   │ 1        │ Müller  │    │ 1        │ 0151-1234  │  ✓   │
│   │ 2        │ Schmidt │    │ 1        │ 030-5678   │       │
│   └──────────┴─────────┘    │ 2        │ 0172-9999  │       │
│                             └──────────┴────────────┘       │
│                    Jede Zelle enthält nur EINEN Wert!        │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### 2. Normalform (2NF)

```
┌────────────────────────────────────────────────────────────────┐
│                  2. NORMALFORM (2NF)                           │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Anforderung: 1NF + Alle Nicht-Schlüssel-Attribute          │
│   müssen vom GESAMTEN Primärschlüssel abhängen.              │
│   (relevant bei zusammengesetztem PK)                         │
│                                                                │
│   NICHT in 2NF:                                               │
│   PK = (BestellNr, ArtikelNr)                                │
│   ┌────────┬───────────┬────────┬──────────────────┐         │
│   │ BestNr │ ArtikelNr │ Menge  │ Artikelname      │  ✗     │
│   ├────────┼───────────┼────────┼──────────────────┤         │
│   │ 1001   │ A1        │ 2      │ Laptop           │         │
│   │ 1001   │ A2        │ 1      │ Maus             │         │
│   │ 1002   │ A1        │ 1      │ Laptop           │         │
│   └────────┴───────────┴────────┴──────────────────┘         │
│                    ▲                    ▲                     │
│                    │                    │                     │
│             Menge hängt vom       Artikelname hängt          │
│             gesamten PK ab        NUR von ArtikelNr ab!      │
│                    ✓                    ✗                     │
│                                                                │
│   IN 2NF (aufteilen):                                        │
│   ┌────────┬───────────┬────────┐  ┌───────────┬───────────┐│
│   │ BestNr │ ArtikelNr │ Menge  │  │ ArtikelNr │ Artikelname││
│   ├────────┼───────────┼────────┤  ├───────────┼───────────┤│
│   │ 1001   │ A1        │ 2      │  │ A1        │ Laptop    │ ✓│
│   │ 1001   │ A2        │ 1      │  │ A2        │ Maus      ││
│   │ 1002   │ A1        │ 1      │  └───────────┴───────────┘│
│   └────────┴───────────┴────────┘                            │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### 3. Normalform (3NF)

```
┌────────────────────────────────────────────────────────────────┐
│                  3. NORMALFORM (3NF)                           │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Anforderung: 2NF + Keine transitiven Abhängigkeiten        │
│   Nicht-Schlüssel dürfen nicht von anderen                   │
│   Nicht-Schlüsseln abhängen!                                 │
│                                                                │
│   NICHT in 3NF:                                               │
│   PK = KundenNr                                              │
│   ┌──────────┬─────────┬──────────┬──────────────┐          │
│   │ KundenNr │ Name    │ PLZ      │ Ort          │   ✗      │
│   ├──────────┼─────────┼──────────┼──────────────┤          │
│   │ 1        │ Müller  │ 10115    │ Berlin       │          │
│   │ 2        │ Schmidt │ 20095    │ Hamburg      │          │
│   │ 3        │ Weber   │ 10115    │ Berlin       │          │
│   └──────────┴─────────┴──────────┴──────────────┘          │
│                              ▲            ▲                  │
│                              │            │                  │
│                         KundenNr → PLZ → Ort                │
│                              Transitive Abhängigkeit!        │
│                         Ort hängt von PLZ ab,               │
│                         nicht direkt von KundenNr           │
│                                                                │
│   IN 3NF (aufteilen):                                        │
│   ┌──────────┬─────────┬──────────┐  ┌──────────┬────────┐  │
│   │ KundenNr │ Name    │ PLZ      │  │ PLZ      │ Ort    │  │
│   ├──────────┼─────────┼──────────┤  ├──────────┼────────┤  │
│   │ 1        │ Müller  │ 10115    │  │ 10115    │ Berlin │ ✓ │
│   │ 2        │ Schmidt │ 20095    │  │ 20095    │ Hamburg│  │
│   │ 3        │ Weber   │ 10115    │  └──────────┴────────┘  │
│   └──────────┴─────────┴──────────┘                         │
│                                                                │
│   Jetzt ist Ort nur einmal pro PLZ gespeichert!             │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Zusammenfassung der Normalformen

| NF | Anforderung | Beseitigt |
|----|-------------|-----------|
| **1NF** | Atomare Werte (keine Listen) | Wiederholungsgruppen |
| **2NF** | Voll vom PK abhängig | Partielle Abhängigkeiten |
| **3NF** | Keine transitiven Abhängigkeiten | Indirekte Abhängigkeiten |

---

### Praktisches Beispiel: Normalisierung

```
┌────────────────────────────────────────────────────────────────┐
│             BEISPIEL: NORMALISIERUNG SCHRITT FÜR SCHRITT       │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Ausgangstabelle (nicht normalisiert):                       │
│   ┌──────┬────────┬───────┬─────────────────┬───────────────┐│
│   │BestNr│ Kunde  │ Ort   │ Artikel         │ Einzelpreis   ││
│   ├──────┼────────┼───────┼─────────────────┼───────────────┤│
│   │ 1001 │ Müller │Berlin │ Laptop, Maus    │ 999, 29       ││
│   └──────┴────────┴───────┴─────────────────┴───────────────┘│
│                                                                │
│   Nach 1NF (atomare Werte):                                  │
│   ┌──────┬────────┬───────┬──────────┬───────────┐          │
│   │BestNr│ Kunde  │ Ort   │ Artikel  │ Einzelpr  │          │
│   ├──────┼────────┼───────┼──────────┼───────────┤          │
│   │ 1001 │ Müller │Berlin │ Laptop   │ 999       │          │
│   │ 1001 │ Müller │Berlin │ Maus     │ 29        │          │
│   └──────┴────────┴───────┴──────────┴───────────┘          │
│                                                                │
│   Nach 3NF (aufgeteilt in drei Tabellen):                    │
│                                                                │
│   Bestellung         BestellPosition        Artikel          │
│   ┌──────┬───────┐  ┌──────┬────────┐  ┌────────┬────────┐  │
│   │BestNr│KundNr │  │BestNr│ArtNr   │  │ArtNr   │Bezeich │  │
│   ├──────┼───────┤  ├──────┼────────┤  ├────────┼────────┤  │
│   │ 1001 │ 1     │  │ 1001 │ A1     │  │ A1     │Laptop  │  │
│   └──────┴───────┘  │ 1001 │ A2     │  │ A2     │Maus    │  │
│                     └──────┴────────┘  └────────┴────────┘  │
│   Kunde                                                       │
│   ┌───────┬────────┬───────┐                                 │
│   │KundNr │ Name   │ Ort   │                                 │
│   ├───────┼────────┼───────┤                                 │
│   │ 1     │ Müller │Berlin │                                 │
│   └───────┴────────┴───────┘                                 │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Redundanz** | Mehrfache Speicherung gleicher Daten |
| **Anomalie** | Probleme durch Redundanz |
| **Normalisierung** | Prozess zur Redundanzminimierung |
| **1NF** | Atomare Werte |
| **2NF** | Volle Abhängigkeit vom PK |
| **3NF** | Keine transitiven Abhängigkeiten |
| **Transitiv** | A → B → C (indirekte Abhängigkeit) |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was ist Datenredundanz?
- Nennen Sie die Anomalien
- Erklären Sie die ersten drei Normalformen
- In welcher Normalform befindet sich diese Tabelle?

### Wichtig zu merken

- **Redundanz** = Gleiche Daten mehrfach gespeichert
- **1NF** = Atomare Werte (keine Listen in Zellen)
- **2NF** = Alles vom gesamten PK abhängig
- **3NF** = Keine Abhängigkeiten zwischen Nicht-Schlüsseln
- Anomalien: Update, Insert, Delete

---

## Übungsaufgaben

### Aufgabe 1
Was sind die drei Arten von Anomalien und was bedeuten sie?

**Lösung:**
1. **Update-Anomalie:** Bei Änderung redundanter Daten können Inkonsistenzen entstehen, wenn nicht alle Vorkommen geändert werden.
2. **Einfüge-Anomalie (Insert):** Neue Daten können nicht eingefügt werden, weil abhängige Daten fehlen.
3. **Lösch-Anomalie (Delete):** Beim Löschen eines Datensatzes gehen unbeabsichtigt auch andere Informationen verloren.

### Aufgabe 2
In welcher Normalform befindet sich folgende Tabelle?

```
┌──────────┬─────────┬─────────────────────┐
│ StudentNr│ Name    │ Kurse               │
├──────────┼─────────┼─────────────────────┤
│ 1        │ Müller  │ Mathe, Physik, Info │
│ 2        │ Schmidt │ Mathe, Chemie       │
└──────────┴─────────┴─────────────────────┘
```

**Lösung:**
Die Tabelle befindet sich **NICHT in 1NF**, weil das Attribut "Kurse" mehrere Werte enthält (nicht atomar). Die 1NF verlangt, dass jede Zelle nur einen einzigen Wert enthält.

### Aufgabe 3
Normalisieren Sie folgende Tabelle in die 3NF:

```
┌──────┬────────┬──────────┬────────┬──────────┐
│AuftrNr│KundenNr│Kundenname│ProduktNr│Produktname│
├──────┼────────┼──────────┼────────┼──────────┤
│ 1001 │ K1     │ Müller   │ P1     │ Laptop   │
│ 1002 │ K1     │ Müller   │ P2     │ Maus     │
│ 1003 │ K2     │ Schmidt  │ P1     │ Laptop   │
└──────┴────────┴──────────┴────────┴──────────┘
```

**Lösung:**
Die Tabelle hat Redundanz: Kundenname und Produktname werden wiederholt.

**Aufteilung in 3NF:**

```
Auftrag                   Kunde                    Produkt
┌──────┬────────┬───────┐ ┌────────┬──────────┐ ┌────────┬──────────┐
│AuftrNr│KundenNr│ProduktNr│ │KundenNr│Kundenname│ │ProduktNr│Produktname│
├──────┼────────┼───────┤ ├────────┼──────────┤ ├────────┼──────────┤
│ 1001 │ K1     │ P1    │ │ K1     │ Müller   │ │ P1     │ Laptop   │
│ 1002 │ K1     │ P2    │ │ K2     │ Schmidt  │ │ P2     │ Maus     │
│ 1003 │ K2     │ P1    │ └────────┴──────────┘ └────────┴──────────┘
└──────┴────────┴───────┘
```

---

## Querverweise

- [06-04-01 Relationale Datenbanken](./06-04-01-relational-databases.md) - Grundlagen
- [06-04-02 ERD](./06-04-02-erd.md) - Datenmodellierung
- [02-01-01 Qualitätsbegriff](../../02-quality-management/02-01-fundamentals/02-01-01-quality-concept.md) - Datenqualität
