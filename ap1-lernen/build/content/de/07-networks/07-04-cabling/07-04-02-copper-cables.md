# Kupferkabel und Kategorien

## Lernziele

Nach diesem Abschnitt kannst du:
- Die verschiedenen Kupferkabel-Kategorien unterscheiden
- Die Leistungsfähigkeit jeder Kategorie benennen
- Abschirmungsarten erklären (UTP, STP, S/FTP)
- Geeignete Kabel für verschiedene Anwendungen auswählen

---

## Kerninhalt

### Kabelkategorien im Überblick

```
┌─────────────────────────────────────────────────────────────────────┐
│              KUPFERKABEL-KATEGORIEN                                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Kategorie    Bandbreite    Max. Speed     Einsatzbereich           │
│  ─────────────────────────────────────────────────────────────      │
│                                                                      │
│  Cat 5        100 MHz       100 Mbit/s     veraltet, kaum genutzt   │
│                                                                      │
│  Cat 5e       100 MHz       1 Gbit/s       Gigabit Ethernet         │
│                             (1000BASE-T)   (noch verbreitet)        │
│                                                                      │
│  Cat 6        250 MHz       1 Gbit/s       Gigabit Ethernet         │
│                             10 Gbit/s*     (*bis 55 m)              │
│                                                                      │
│  Cat 6A       500 MHz       10 Gbit/s      10-Gigabit-Ethernet      │
│                             (10GBASE-T)    (aktueller Standard)     │
│                                                                      │
│  Cat 7        600 MHz       10 Gbit/s      Rechenzentren            │
│                                            (höchste Abschirmung)    │
│                                                                      │
│  Cat 7A      1000 MHz       10 Gbit/s      Zukunftssicher           │
│                             (40 Gbit/s*)   (*kurze Distanzen)       │
│                                                                      │
│  Cat 8       2000 MHz       25/40 Gbit/s   Rechenzentren            │
│                                            (max. 30 m)              │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Detailvergleich

| Kategorie | Bandbreite | Geschwindigkeit | Max. Länge | Typischer Einsatz |
|-----------|------------|-----------------|------------|-------------------|
| **Cat 5e** | 100 MHz | 1 Gbit/s | 100 m | Bürocabling |
| **Cat 6** | 250 MHz | 1-10 Gbit/s | 100 m (55 m bei 10G) | Neuinstallationen |
| **Cat 6A** | 500 MHz | 10 Gbit/s | 100 m | Standard für Neubauten |
| **Cat 7** | 600 MHz | 10 Gbit/s | 100 m | Hochleistungsnetze |
| **Cat 8** | 2000 MHz | 25-40 Gbit/s | 30 m | Rechenzentren |

### Kabelaufbau

```
┌─────────────────────────────────────────────────────────────────────┐
│                  TWISTED PAIR KABEL                                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│     Querschnitt eines Cat 6A Kabels:                                │
│                                                                      │
│              ┌───────────────────────┐                              │
│              │    Außenmantel        │                              │
│              │  ┌─────────────────┐  │                              │
│              │  │ Gesamtschirm    │  │                              │
│              │  │ ┌──┐ ┌──┐      │  │                              │
│              │  │ │⚪⚪│ │⚪⚪│      │  │  4 verdrillte Paare         │
│              │  │ └──┘ └──┘      │  │  (8 Adern insgesamt)         │
│              │  │ ┌──┐ ┌──┐      │  │                              │
│              │  │ │⚪⚪│ │⚪⚪│      │  │                              │
│              │  │ └──┘ └──┘      │  │                              │
│              │  └─────────────────┘  │                              │
│              └───────────────────────┘                              │
│                                                                      │
│     Warum verdrillt?                                                │
│     → Reduziert elektromagnetische Störungen (Crosstalk)            │
│     → Je enger die Verdrillung, desto besser die Abschirmung        │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Abschirmungsarten

Die Abschirmung wird mit einer standardisierten Bezeichnung angegeben:
**XX/YZZ** wobei:
- XX = Gesamtschirmung
- Y = Paarschirmung
- ZZ = Twisted Pair (TP)

```
┌─────────────────────────────────────────────────────────────────────┐
│                    ABSCHIRMUNGSARTEN                                 │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Bezeichnung       Gesamtschirm    Paarschirm    Störfestigkeit     │
│  ──────────────────────────────────────────────────────────────     │
│                                                                      │
│  U/UTP             ✗               ✗             gering             │
│  (Unshielded)      kein            kein          (Cat 5e)           │
│                                                                      │
│  F/UTP             ✓ Folie         ✗             mittel             │
│  (Foiled)          Folie           kein          (Cat 6)            │
│                                                                      │
│  S/FTP             ✓ Geflecht      ✓ Folie       hoch               │
│  (Shielded/Foiled) Drahtgeflecht   je Paar       (Cat 6A/7)         │
│                                                                      │
│  S/STP             ✓ Geflecht      ✓ Geflecht    sehr hoch          │
│  (Shielded)        Drahtgeflecht   je Paar       (Cat 7/7A)         │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

**Merkhilfe:**
- **U** = Unshielded (ungeschirmt)
- **F** = Foiled (Folie)
- **S** = Shielded/Screened (Geflecht)

### Steckertypen

```
┌─────────────────────────────────────────────────────────────────────┐
│                    RJ45-STECKER                                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│         ┌─────────────────┐                                         │
│         │  ┌─┬─┬─┬─┬─┬─┬─┬─┐  │                                     │
│         │  │1│2│3│4│5│6│7│8│  │    8 Pins (8P8C)                    │
│         │  └─┴─┴─┴─┴─┴─┴─┴─┘  │                                     │
│         │       ┌───┐         │    Standard für Ethernet            │
│         │       │   │         │                                     │
│         └───────┴───┴─────────┘                                     │
│                                                                      │
│  Belegung nach T568A oder T568B (Crossover vs. Straight)            │
│                                                                      │
│  T568B (Standard):                                                  │
│  Pin 1: weiß-orange    Pin 5: weiß-blau                            │
│  Pin 2: orange         Pin 6: grün                                  │
│  Pin 3: weiß-grün      Pin 7: weiß-braun                           │
│  Pin 4: blau           Pin 8: braun                                 │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Kabeltypen nach Funktion

| Kabeltyp | Verwendung | Beschreibung |
|----------|------------|--------------|
| **Straight-Through** | Switch ↔ PC | Beide Enden gleiche Belegung |
| **Crossover** | PC ↔ PC | Sende-/Empfangsleitungen gekreuzt |
| **Patchkabel** | Verbindung | Flexibles Kabel mit Steckern |
| **Verlegekabel** | Installation | Starres Kabel für feste Verlegung |

**Hinweis:** Moderne Geräte mit **Auto-MDI/X** erkennen automatisch, welcher Kabeltyp verwendet wird.

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Twisted Pair** | Verdrillte Adernpaare zur Störungsreduzierung |
| **RJ45** | Standard-Stecker für Netzwerkkabel (8P8C) |
| **Crosstalk** | Übersprechen zwischen benachbarten Leitungen |
| **UTP** | Unshielded Twisted Pair - ungeschirmt |
| **STP** | Shielded Twisted Pair - geschirmt |
| **Cat** | Category - Leistungsklasse des Kabels |
| **Bandbreite** | Frequenzbereich (in MHz) |
| **Auto-MDI/X** | Automatische Kabeltyperkennung |

---

## Prüfungstipps

1. **Wichtigste Kategorien für die Prüfung:**
   - **Cat 5e:** 1 Gbit/s - Mindeststandard
   - **Cat 6A:** 10 Gbit/s - aktueller Neuinstallations-Standard
   - **Cat 7:** 10 Gbit/s - beste Abschirmung

2. **Merksatz Abschirmung:**
   - "**U**ngeschützt" = U
   - "**F**olie" = F
   - "**S**chirm/Geflecht" = S

3. **Häufige Prüfungsfragen:**
   - Welche Kategorie für 10 Gbit/s bei 100 m? → Cat 6A
   - Was bedeutet S/FTP? → Gesamtschirm + Folie je Paar
   - Wie viele Adernpaare? → 4 Paare = 8 Adern

4. **Typische Fehler:**
   - Cat 6 kann 10 Gbit/s, aber nur bis 55 m (nicht 100 m!)
   - Höhere Kategorie = mehr Abschirmung erforderlich

---

## Übungsaufgaben

### Aufgabe 1: Kategorien zuordnen

Welche Kabelkategorie ist für folgende Anforderungen geeignet?

a) Büronetzwerk mit Gigabit-Ethernet
b) Rechenzentrum mit 10 Gbit/s auf 80 m Distanz
c) Server-Anbindung mit 25 Gbit/s auf kurzer Distanz

<details>
<summary>Lösung anzeigen</summary>

a) **Cat 5e** oder besser (Cat 6) - Gigabit erfordert mind. Cat 5e
b) **Cat 6A** - 10 Gbit/s über 100 m (Cat 6 nur bis 55 m!)
c) **Cat 8** - für 25-40 Gbit/s (nur bis 30 m)

</details>

### Aufgabe 2: Abschirmung entschlüsseln

Erklären Sie die Abschirmung bei folgenden Kabelbezeichnungen:

a) U/UTP
b) F/UTP
c) S/FTP

<details>
<summary>Lösung anzeigen</summary>

a) **U/UTP:**
   - U = Kein Gesamtschirm
   - UTP = Keine Paarschirmung
   - Ergebnis: Komplett ungeschirmt

b) **F/UTP:**
   - F = Gesamtschirm aus Folie
   - UTP = Keine Paarschirmung
   - Ergebnis: Nur außen geschirmt

c) **S/FTP:**
   - S = Gesamtschirm aus Drahtgeflecht
   - FTP = Jedes Paar mit Folie geschirmt
   - Ergebnis: Doppelt geschirmt (höchste Qualität)

</details>

### Aufgabe 3: Praxisszenario

Die ConSystem GmbH plant die Neucabling einer Büroetage. Folgende Anforderungen bestehen:
- Gigabit-Ethernet für alle Arbeitsplätze
- Mögliche Erweiterung auf 10 Gbit/s in 5 Jahren
- Starke elektromagnetische Störquellen in der Nähe

Welche Kabelkategorie und Abschirmung empfehlen Sie?

<details>
<summary>Lösung anzeigen</summary>

**Empfehlung: Cat 6A S/FTP**

Begründung:
- **Cat 6A** statt Cat 6, weil:
  - Bereits jetzt 10 Gbit/s fähig (über 100 m)
  - Zukunftssicher für geplante Erweiterung
  - Preisunterschied zu Cat 6 gering

- **S/FTP** statt UTP, weil:
  - Starke EMV-Störquellen vorhanden
  - Doppelte Schirmung (Geflecht + Folie pro Paar)
  - Beste Störfestigkeit

Alternative: Cat 7 S/FTP wäre auch möglich, aber teurer und für die Anforderungen nicht notwendig.

</details>

### Aufgabe 4: Fehlersuche

Ein Techniker hat ein Netzwerkkabel mit Cat 6 verlegt. Der Kunde beschwert sich, dass die versprochenen 10 Gbit/s nicht erreicht werden. Die Kabellänge beträgt 75 m.

Was ist die Ursache und wie kann das Problem gelöst werden?

<details>
<summary>Lösung anzeigen</summary>

**Ursache:**
Cat 6 unterstützt 10 Gbit/s nur bis zu einer Länge von **55 m**. Bei 75 m Kabellänge fällt die Geschwindigkeit auf 1 Gbit/s zurück.

**Lösung:**
1. Kabel durch **Cat 6A** ersetzen (unterstützt 10 Gbit/s bis 100 m)
2. Alternativ: Kabellänge auf unter 55 m reduzieren (falls möglich)

**Fazit:** Bei Neuinstallationen sollte immer Cat 6A verwendet werden, wenn 10 Gbit/s benötigt werden.

</details>

---

## Querverweise

- [Strukturierte Verkabelung](07-04-01-structured-cabling.md) - Verkabelungsbereiche
- [Netzwerk-Hardware](../07-05-network-hardware.md) - Switches und Router
- [Übertragungsraten](../07-06-data-transmission/07-06-01-transmission-rates.md) - Geschwindigkeitsberechnungen
