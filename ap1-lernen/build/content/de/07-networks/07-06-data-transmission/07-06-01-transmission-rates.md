# Übertragungsraten berechnen [NEU 2025]

## Lernziele

Nach diesem Kapitel solltest du:
- Übertragungsraten verstehen und umrechnen können
- Übertragungszeiten berechnen können
- Bit und Byte unterscheiden können
- Prüfungsaufgaben zu Datenübertragung lösen können

---

## Kerninhalt

### Grundlagen der Datenübertragung

```
┌────────────────────────────────────────────────────────────────────┐
│                    DATENÜBERTRAGUNG                                │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Übertragungsrate = Datenmenge pro Zeit                          │
│                                                                     │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │                                                              │ │
│   │   WICHTIG: Bit vs. Byte                                     │ │
│   │                                                              │ │
│   │   • Übertragungsraten werden in BIT/s angegeben            │ │
│   │   • Dateigrößen werden in BYTE angegeben                   │ │
│   │                                                              │ │
│   │   1 Byte = 8 Bit                                            │ │
│   │                                                              │ │
│   │   Schreibweise:                                             │ │
│   │   • Bit pro Sekunde: bit/s oder bps                        │ │
│   │   • Byte pro Sekunde: B/s                                  │ │
│   │   • Kleines "b" = Bit, großes "B" = Byte                   │ │
│   │                                                              │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   Präfixe (SI-Einheiten):                                         │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ Kilo (k)  = 1.000                = 10^3                    │ │
│   │ Mega (M)  = 1.000.000            = 10^6                    │ │
│   │ Giga (G)  = 1.000.000.000        = 10^9                    │ │
│   │ Tera (T)  = 1.000.000.000.000    = 10^12                   │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Umrechnungen

```
┌────────────────────────────────────────────────────────────────────┐
│                      UMRECHNUNGEN                                  │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   BIT ↔ BYTE                                                      │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │                                                             │  │
│   │   Bit → Byte:  ÷ 8                                         │  │
│   │   Byte → Bit:  × 8                                         │  │
│   │                                                             │  │
│   │   Beispiele:                                                │  │
│   │   80 Mbit/s ÷ 8 = 10 MB/s                                  │  │
│   │   100 MB    × 8 = 800 Mbit                                 │  │
│   │                                                             │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   PRÄFIX-UMRECHNUNG                                               │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │                                                             │  │
│   │   1 Gbit/s = 1.000 Mbit/s = 1.000.000 kbit/s              │  │
│   │                                                             │  │
│   │   Größer → Kleiner: × 1.000                                │  │
│   │   Kleiner → Größer: ÷ 1.000                                │  │
│   │                                                             │  │
│   │   Beispiele:                                                │  │
│   │   2 Gbit/s = 2.000 Mbit/s                                  │  │
│   │   500 Mbit/s = 0,5 Gbit/s                                  │  │
│   │                                                             │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   TYPISCHE UMRECHNUNGSTABELLE                                     │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │                                                             │  │
│   │   Übertragungsrate │ In Mbit/s │ In MB/s                   │  │
│   │   ─────────────────┼───────────┼───────────────────────    │  │
│   │   100 Mbit/s       │ 100       │ 12,5 MB/s                 │  │
│   │   1 Gbit/s         │ 1.000     │ 125 MB/s                  │  │
│   │   10 Gbit/s        │ 10.000    │ 1.250 MB/s                │  │
│   │                                                             │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Übertragungszeit berechnen

```
┌────────────────────────────────────────────────────────────────────┐
│                 ÜBERTRAGUNGSZEIT BERECHNEN                         │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Grundformel:                                                     │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │                                                              │ │
│   │              Datenmenge                                      │ │
│   │   Zeit = ─────────────────                                  │ │
│   │           Übertragungsrate                                  │ │
│   │                                                              │ │
│   │   ⚠ WICHTIG: Einheiten müssen übereinstimmen!              │ │
│   │      Beide in Bit ODER beide in Byte!                       │ │
│   │                                                              │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   BEISPIEL 1: Einfache Berechnung                                 │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │                                                             │  │
│   │   Datei: 800 MB                                            │  │
│   │   Verbindung: 100 Mbit/s                                   │  │
│   │                                                             │  │
│   │   Schritt 1: Einheiten angleichen                          │  │
│   │   800 MB × 8 = 6.400 Mbit                                  │  │
│   │                                                             │  │
│   │   Schritt 2: Formel anwenden                               │  │
│   │   Zeit = 6.400 Mbit ÷ 100 Mbit/s = 64 Sekunden            │  │
│   │                                                             │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   BEISPIEL 2: Größere Datei                                       │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │                                                             │  │
│   │   Datei: 5 GB                                              │  │
│   │   Verbindung: 1 Gbit/s                                     │  │
│   │                                                             │  │
│   │   Schritt 1: Einheiten angleichen                          │  │
│   │   5 GB × 8 = 40 Gbit                                       │  │
│   │                                                             │  │
│   │   Schritt 2: Formel anwenden                               │  │
│   │   Zeit = 40 Gbit ÷ 1 Gbit/s = 40 Sekunden                 │  │
│   │                                                             │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Typische Übertragungsraten

```
┌────────────────────────────────────────────────────────────────────┐
│                 TYPISCHE ÜBERTRAGUNGSRATEN                         │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   LOKALE NETZWERKE (LAN)                                          │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Fast Ethernet:      100 Mbit/s    = 12,5 MB/s             │  │
│   │ Gigabit Ethernet:   1 Gbit/s      = 125 MB/s              │  │
│   │ 10 Gigabit:         10 Gbit/s     = 1.250 MB/s            │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   WLAN                                                            │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ 802.11n (Wi-Fi 4):  bis 600 Mbit/s                        │  │
│   │ 802.11ac (Wi-Fi 5): bis 6,9 Gbit/s (theoretisch)          │  │
│   │ 802.11ax (Wi-Fi 6): bis 9,6 Gbit/s (theoretisch)          │  │
│   │                                                             │  │
│   │ ⚠ Praxis: Oft nur 50-70% der Maximalrate erreichbar       │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   INTERNETVERBINDUNGEN (typische deutsche Anschlüsse)             │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ DSL:                16-250 Mbit/s Download                 │  │
│   │ Kabel:              bis 1 Gbit/s Download                  │  │
│   │ Glasfaser (FTTH):   bis 1 Gbit/s (symmetrisch)            │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   USB-SCHNITTSTELLEN                                              │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ USB 2.0:  480 Mbit/s  = 60 MB/s                           │  │
│   │ USB 3.0:  5 Gbit/s    = 625 MB/s                          │  │
│   │ USB 3.1:  10 Gbit/s   = 1.250 MB/s                        │  │
│   │ USB 3.2:  20 Gbit/s   = 2.500 MB/s                        │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Rechenschritte zusammengefasst

```
┌────────────────────────────────────────────────────────────────────┐
│                   RECHENSCHRITTE                                   │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   1. GEGEBEN IDENTIFIZIEREN                                       │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Datenmenge (in MB, GB, ...)                              │  │
│   │ • Übertragungsrate (in Mbit/s, Gbit/s, ...)               │  │
│   │ • Oder: Zeit gegeben, Rate gesucht                         │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   2. EINHEITEN ANGLEICHEN                                         │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Entweder:                                                   │  │
│   │ • Alles in Bit umrechnen                                   │  │
│   │ • Oder: Alles in Byte umrechnen                            │  │
│   │                                                             │  │
│   │ Merke: Dateigröße (Byte) × 8 = Dateigröße (Bit)           │  │
│   │        Rate (Bit/s) ÷ 8 = Rate (Byte/s)                   │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   3. FORMEL ANWENDEN                                              │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │                                                             │  │
│   │   Zeit = Datenmenge ÷ Rate                                 │  │
│   │   Rate = Datenmenge ÷ Zeit                                 │  │
│   │   Datenmenge = Rate × Zeit                                 │  │
│   │                                                             │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   4. ERGEBNIS PRÜFEN                                              │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Einheit des Ergebnisses korrekt?                         │  │
│   │ • Ergebnis plausibel?                                      │  │
│   │ • Bei Bedarf in andere Einheit umrechnen (s → min)         │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Bit** | Kleinste Informationseinheit (0 oder 1) |
| **Byte** | 8 Bit |
| **Mbit/s** | Megabit pro Sekunde (Übertragungsrate) |
| **MB/s** | Megabyte pro Sekunde |
| **Bandbreite** | Maximale Übertragungskapazität |
| **Durchsatz** | Tatsächlich erreichte Übertragungsrate |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Berechnen Sie die Übertragungszeit für eine Datei
- Rechnen Sie Mbit/s in MB/s um
- Vergleichen Sie Übertragungsraten

### Wichtig zu merken

- **1 Byte = 8 Bit**
- **Raten in Bit**, **Dateigrößen in Byte**
- **Zeit = Datenmenge ÷ Rate**
- **Gigabit-Ethernet** = 1.000 Mbit/s = 125 MB/s
- Immer Einheiten angleichen vor Berechnung!
- Großes B = Byte, kleines b = Bit

---

## Übungsaufgaben

### Aufgabe 1
Wie lange dauert die Übertragung einer 600 MB großen Datei bei einer Übertragungsrate von 100 Mbit/s?

**Lösung:**
1. Einheiten angleichen: 600 MB × 8 = 4.800 Mbit
2. Formel: Zeit = 4.800 Mbit ÷ 100 Mbit/s = **48 Sekunden**

### Aufgabe 2
Rechnen Sie 1 Gbit/s in MB/s um.

**Lösung:**
1. 1 Gbit/s = 1.000 Mbit/s
2. 1.000 Mbit/s ÷ 8 = **125 MB/s**

### Aufgabe 3
Ein Backup von 50 GB soll über eine 1 Gbit/s Verbindung übertragen werden. Wie lange dauert das mindestens?

**Lösung:**
1. 50 GB × 8 = 400 Gbit
2. Zeit = 400 Gbit ÷ 1 Gbit/s = **400 Sekunden = 6 Minuten 40 Sekunden**

### Aufgabe 4
Eine 4 GB Datei wurde in 5 Minuten übertragen. Welche Übertragungsrate wurde erreicht?

**Lösung:**
1. 5 Minuten = 300 Sekunden
2. 4 GB × 8 = 32 Gbit = 32.000 Mbit
3. Rate = 32.000 Mbit ÷ 300 s = **106,67 Mbit/s** (ca. 107 Mbit/s)

---

## Querverweise

- [05-01-01 Bits, Bytes, Zahlensysteme](../../05-it-systems/05-01-fundamentals/05-01-01-bits-bytes-number-systems.md) - Grundlagen
- [07-04-02 Kupferkabel](../07-04-cabling/07-04-02-copper-cables.md) - Kabelkategorien
- [07-03-01 WLAN-Grundlagen](../07-03-wlan/07-03-01-wlan-fundamentals.md) - WLAN-Geschwindigkeiten
