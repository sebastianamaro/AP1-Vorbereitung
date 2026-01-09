# Schnittstellen

## Lernziele

Nach diesem Kapitel solltest du:
- Verschiedene Hardware-Schnittstellen kennen
- USB-Standards unterscheiden können
- Interne und externe Schnittstellen kennen
- Passende Schnittstellen für Anwendungen auswählen können

---

## Kerninhalt

### Überblick: Schnittstellen

```
┌─────────────────────────────────────────────────────────────────┐
│                    SCHNITTSTELLEN                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  EXTERNE                           INTERNE                      │
│  ┌─────────────────────┐          ┌─────────────────────┐      │
│  │ • USB               │          │ • SATA              │      │
│  │ • HDMI              │          │ • M.2               │      │
│  │ • DisplayPort       │          │ • PCIe              │      │
│  │ • Thunderbolt       │          │ • RAM-Slots         │      │
│  │ • Ethernet (RJ45)   │          │ • CPU-Sockel        │      │
│  │ • Audio (Klinke)    │          │                     │      │
│  └─────────────────────┘          └─────────────────────┘      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### USB (Universal Serial Bus)

#### USB-Versionen

| Version | Max. Geschwindigkeit | Name | Stecker |
|---------|---------------------|------|---------|
| **USB 2.0** | 480 Mbit/s | High Speed | Typ-A, Mini, Micro |
| **USB 3.0** | 5 Gbit/s | SuperSpeed | Typ-A (blau), Typ-C |
| **USB 3.1** | 10 Gbit/s | SuperSpeed+ | Typ-A, Typ-C |
| **USB 3.2** | 20 Gbit/s | SuperSpeed 20 | Typ-C |
| **USB4** | 40-80 Gbit/s | USB4 | Typ-C |

#### USB-Steckertypen

```
┌────────────────────────────────────────────────────────────────┐
│                    USB-STECKER                                 │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Typ-A          Typ-B          Typ-C          Micro-USB       │
│   ┌────┐         ┌────┐         ┌────┐         ┌────┐         │
│   │    │         │ ██ │         │    │         │____│         │
│   │    │         └────┘         └────┘         └────┘         │
│   └────┘                                                       │
│   Standard       Drucker        Modern,        Smartphones     │
│   PC-Anschluss   Scanner        reversibel     (veraltet)      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### USB-Farbcodes

| Farbe | USB-Version |
|-------|-------------|
| Schwarz/Weiß | USB 2.0 |
| Blau | USB 3.0 |
| Türkis | USB 3.1 |
| Rot | USB mit Schnellladung |
| Gelb | Always-On (Laden bei Standby) |

---

### Videointerfaces

| Schnittstelle | Typ | Max. Auflösung | Audio |
|---------------|-----|----------------|-------|
| **VGA** | Analog | 2048×1536 | Nein |
| **DVI** | Digital/Analog | 2560×1600 | Nein |
| **HDMI** | Digital | 8K@60Hz (2.1) | Ja |
| **DisplayPort** | Digital | 8K@60Hz | Ja |
| **Thunderbolt** | Digital | 8K | Ja + Daten |

```
┌────────────────────────────────────────────────────────────────┐
│              VIDEO-SCHNITTSTELLEN                              │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   VGA (veraltet)    DVI           HDMI         DisplayPort    │
│   ┌──────────┐     ┌────┐       ┌────┐         ┌────┐        │
│   │ ●●●●●●●● │     │████│       │    │         │ ┐ │        │
│   │ ●●●●●●●● │     │████│       │    │         │   │        │
│   │ ●●●●●●●● │     │████│       └────┘         └───┘        │
│   └──────────┘     └────┘                                     │
│                                                                │
│   Analog,          Groß,        Standard,      Profi,         │
│   auslaufend       veraltet     Consumer       Gaming         │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Interne Schnittstellen

#### SATA (Serial ATA)

| Version | Geschwindigkeit |
|---------|-----------------|
| SATA I | 1,5 Gbit/s (150 MB/s) |
| SATA II | 3 Gbit/s (300 MB/s) |
| **SATA III** | 6 Gbit/s (600 MB/s) |

Verwendung: Festplatten (HDD, SSD), optische Laufwerke

#### M.2

**M.2** ist ein kompakter Formfaktor für SSDs und andere Komponenten.

| M.2-Typ | Schnittstelle | Geschwindigkeit |
|---------|---------------|-----------------|
| M.2 SATA | SATA | bis 600 MB/s |
| M.2 NVMe | PCIe | bis 7.000+ MB/s |

**Achtung:** M.2-Slots können SATA oder NVMe sein - Kompatibilität prüfen!

#### PCIe (PCI Express)

| Generation | Bandbreite pro Lane |
|------------|---------------------|
| PCIe 3.0 | 1 GB/s |
| PCIe 4.0 | 2 GB/s |
| PCIe 5.0 | 4 GB/s |

Verwendung: Grafikkarten (x16), NVMe-SSDs (x4), Netzwerkkarten (x1)

---

### Netzwerkinterfaces

| Schnittstelle | Geschwindigkeit | Verwendung |
|---------------|-----------------|------------|
| **Ethernet (RJ45)** | 100 Mbit - 10 Gbit | LAN-Verbindung |
| **WLAN** | bis 9,6 Gbit/s (Wi-Fi 6) | Drahtlos |
| **Bluetooth** | bis 50 Mbit/s (5.0) | Kurzstrecke |

---

### Thunderbolt

**Thunderbolt** ist eine Hochgeschwindigkeits-Schnittstelle von Intel/Apple.

| Version | Geschwindigkeit | Stecker |
|---------|-----------------|---------|
| Thunderbolt 1/2 | 20 Gbit/s | Mini DisplayPort |
| Thunderbolt 3 | 40 Gbit/s | USB-C |
| Thunderbolt 4 | 40 Gbit/s | USB-C |

Thunderbolt kann: Video, Daten, Stromversorgung und PCIe-Geräte anschließen.

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **USB** | Universal Serial Bus |
| **HDMI** | High Definition Multimedia Interface |
| **DisplayPort** | Digitale Videoschnittstelle |
| **SATA** | Serial ATA (Festplattenschnittstelle) |
| **M.2** | Kompakter Formfaktor für SSDs |
| **NVMe** | Non-Volatile Memory Express |
| **PCIe** | PCI Express (Erweiterungskarten) |
| **Thunderbolt** | Hochgeschwindigkeits-Universalschnittstelle |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was ist USB und welche Versionen gibt es?
- Unterschied HDMI und DisplayPort
- Was ist M.2?
- Welche Geschwindigkeit hat USB 3.0?

### Wichtig zu merken

- **USB 3.0** = 5 Gbit/s = blauer Anschluss
- **HDMI** = Standard für Consumer, **DisplayPort** = Gaming/Profi
- **M.2** = Formfaktor, kann SATA oder NVMe sein
- **Thunderbolt 3/4** = USB-C Stecker, aber 40 Gbit/s

---

## Übungsaufgaben

### Aufgabe 1
Welche USB-Version hat eine maximale Übertragungsrate von 5 Gbit/s?

**Lösung:** **USB 3.0** (SuperSpeed) hat eine maximale Geschwindigkeit von 5 Gbit/s. USB 3.0-Anschlüsse sind oft blau markiert.

### Aufgabe 2
Was ist der Unterschied zwischen HDMI und DisplayPort?

**Lösung:**
| Aspekt | HDMI | DisplayPort |
|--------|------|-------------|
| **Hauptverwendung** | Consumer (TV, Heimkino) | Profi/Gaming (Monitor) |
| **Multi-Monitor** | Begrenzt | Daisy-Chain möglich |
| **Audio** | Ja | Ja |
| **Lizenzgebühren** | Ja | Nein |

### Aufgabe 3
Was ist M.2 und welche zwei Schnittstellen können M.2-SSDs nutzen?

**Lösung:** **M.2** ist ein kompakter Formfaktor für Erweiterungskarten, hauptsächlich SSDs.

M.2-SSDs können nutzen:
1. **SATA:** Bis 600 MB/s, kompatibel mit älteren Systemen
2. **NVMe (über PCIe):** Bis 7.000+ MB/s, deutlich schneller

---

## Querverweise

- [05-02-03 Datenspeicher](./05-02-03-storage-hdd-ssd.md) - SATA und NVMe
- [07-01-03 Protokolle](../../07-networks/07-01-network-fundamentals/07-01-03-protocols.md) - Ethernet
- [05-02-06 Grafikkarten](./05-02-06-graphics-cards.md) - PCIe für GPUs
