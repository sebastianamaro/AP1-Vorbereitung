# Datenspeicher - HDD vs. SSD

## Lernziele

Nach diesem Kapitel solltest du:
- Den Unterschied zwischen HDD und SSD erklären können
- Vor- und Nachteile beider Technologien kennen
- Einsatzgebiete zuordnen können
- Wichtige Kennzahlen verstehen

**Hinweis:** HDD vs. SSD Vergleich ist NEU im Prüfungskatalog 2025!

---

## Kerninhalt

### Überblick

```
┌─────────────────────────────────────────────────────────────────┐
│                  DATENSPEICHER                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  HDD (Hard Disk Drive)              SSD (Solid State Drive)     │
│  ┌─────────────────────┐            ┌─────────────────────┐    │
│  │                     │            │                     │    │
│  │  Magnetische        │            │  Flash-Speicher     │    │
│  │  Scheiben           │            │  (NAND)             │    │
│  │                     │            │                     │    │
│  │  Mechanisch         │            │  Elektronisch       │    │
│  │  (bewegliche Teile) │            │  (keine bewegl.     │    │
│  │                     │            │   Teile)            │    │
│  └─────────────────────┘            └─────────────────────┘    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### HDD (Hard Disk Drive)

Die **Festplatte** speichert Daten magnetisch auf rotierenden Scheiben.

#### Aufbau

```
┌────────────────────────────────────────────────────────────────┐
│                    HDD-AUFBAU                                  │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│           Schreib-/Lesekopf                                    │
│                 │                                              │
│                 ▼                                              │
│         ┌───────────────┐                                      │
│        /│               │\                                     │
│       / │   Magnetische │ \                                    │
│      /  │    Scheiben   │  \                                   │
│     /   │   (Platter)   │   \                                  │
│    /    │               │    \                                 │
│   │     └───────┬───────┘     │                                │
│   │             │             │                                │
│   │          Spindel          │                                │
│   │        (Rotation)         │                                │
│   └───────────────────────────┘                                │
│                                                                │
│   Drehzahl: 5.400 - 7.200 (Konsumer) / 10.000-15.000 (Server) │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### Eigenschaften HDD

| Eigenschaft | Wert/Beschreibung |
|-------------|-------------------|
| **Speicherprinzip** | Magnetisch |
| **Kapazität** | Bis zu 20+ TB |
| **Geschwindigkeit** | 80-200 MB/s (sequenziell) |
| **Zugriffszeit** | 5-10 ms |
| **Preis pro GB** | Sehr günstig (ca. 0,02 €/GB) |
| **Lebensdauer** | Begrenzt durch Mechanik |
| **Stromverbrauch** | Höher |
| **Empfindlichkeit** | Stoßempfindlich |

---

### SSD (Solid State Drive)

Die **SSD** speichert Daten elektronisch in Flash-Speicher (NAND).

#### Aufbau

```
┌────────────────────────────────────────────────────────────────┐
│                    SSD-AUFBAU                                  │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   ┌──────────────────────────────────────────────────────────┐│
│   │                    Controller                             ││
│   │              (Verwaltung, Wear Leveling)                  ││
│   └──────────────────────────────────────────────────────────┘│
│                            │                                   │
│   ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐     │
│   │ NAND   │ │ NAND   │ │ NAND   │ │ NAND   │ │ NAND   │     │
│   │ Flash  │ │ Flash  │ │ Flash  │ │ Flash  │ │ Flash  │     │
│   └────────┘ └────────┘ └────────┘ └────────┘ └────────┘     │
│                                                                │
│   Keine beweglichen Teile!                                     │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### Eigenschaften SSD

| Eigenschaft | Wert/Beschreibung |
|-------------|-------------------|
| **Speicherprinzip** | Elektronisch (NAND Flash) |
| **Kapazität** | Bis zu 8+ TB |
| **Geschwindigkeit** | 500 MB/s (SATA) / 3.500+ MB/s (NVMe) |
| **Zugriffszeit** | 0,1 ms |
| **Preis pro GB** | Teurer (ca. 0,08-0,15 €/GB) |
| **Lebensdauer** | Begrenzt durch Schreibzyklen (TBW) |
| **Stromverbrauch** | Niedriger |
| **Empfindlichkeit** | Stoßunempfindlich |

---

### Direkter Vergleich: HDD vs. SSD

| Kriterium | HDD | SSD |
|-----------|-----|-----|
| **Geschwindigkeit** | 80-200 MB/s | 500-7.000 MB/s |
| **Zugriffszeit** | 5-10 ms | 0,1 ms |
| **Preis/GB** | Günstig | Teurer |
| **Kapazität** | Sehr hoch (bis 20+ TB) | Hoch (bis 8+ TB) |
| **Lautstärke** | Hörbar | Lautlos |
| **Stromverbrauch** | Höher | Niedriger |
| **Stoßfestigkeit** | Empfindlich | Robust |
| **Gewicht** | Schwerer | Leichter |
| **Lebensdauer** | Mechanischer Verschleiß | Schreibzyklen begrenzt |

---

### SSD-Formfaktoren und Schnittstellen

| Formfaktor | Schnittstelle | Geschwindigkeit |
|------------|---------------|-----------------|
| **2,5" SATA** | SATA III | bis 550 MB/s |
| **M.2 SATA** | SATA III | bis 550 MB/s |
| **M.2 NVMe** | PCIe | bis 7.000+ MB/s |
| **PCIe-Karte** | PCIe direkt | bis 7.000+ MB/s |

```
┌────────────────────────────────────────────────────────────────┐
│              SSD-SCHNITTSTELLEN                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   SATA SSD:     ████████░░░░░░░░░░░░░░░░░░░░  ~550 MB/s       │
│                                                                │
│   NVMe SSD:     ████████████████████████████  ~7.000 MB/s     │
│                                                                │
│   NVMe ist bis zu 12x schneller als SATA!                      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### NAND-Flash-Typen

| Typ | Bits/Zelle | Haltbarkeit | Geschwindigkeit | Preis |
|-----|------------|-------------|-----------------|-------|
| **SLC** | 1 | Sehr hoch | Sehr schnell | Sehr teuer |
| **MLC** | 2 | Hoch | Schnell | Teuer |
| **TLC** | 3 | Mittel | Mittel | Günstig |
| **QLC** | 4 | Niedriger | Langsamer | Sehr günstig |

---

### Einsatzempfehlungen

| Anwendung | Empfehlung |
|-----------|------------|
| **Betriebssystem, Programme** | SSD (schneller Start) |
| **Archiv, Backups** | HDD (günstiger Preis) |
| **Gaming** | SSD (schnelle Ladezeiten) |
| **Video-Schnitt** | SSD (schneller Zugriff) |
| **Große Datenmengen** | HDD (hohe Kapazität) |
| **Laptops** | SSD (stoßfest, leicht) |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **HDD** | Hard Disk Drive (Magnetfestplatte) |
| **SSD** | Solid State Drive (Flash-Speicher) |
| **NAND** | Flash-Speichertyp |
| **NVMe** | Non-Volatile Memory Express (schnelles Protokoll) |
| **SATA** | Serial ATA (Schnittstelle) |
| **TBW** | Terabytes Written (Lebensdauer-Angabe) |
| **Wear Leveling** | Gleichmäßige Abnutzung der Speicherzellen |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was ist der Unterschied zwischen HDD und SSD?
- Nennen Sie Vor- und Nachteile von SSDs
- Wann sollte man HDD, wann SSD verwenden?
- Was bedeutet NVMe?

### Wichtig zu merken

- **HDD** = mechanisch, günstig, langsam, hohe Kapazität
- **SSD** = elektronisch, teuer, sehr schnell, stoßfest
- **NVMe** ist bis zu 12x schneller als **SATA**
- SSDs für Betriebssystem, HDDs für Archive

---

## Übungsaufgaben

### Aufgabe 1
Nennen Sie drei Vorteile einer SSD gegenüber einer HDD.

**Lösung:**
1. **Höhere Geschwindigkeit** (500-7.000 MB/s vs. 80-200 MB/s)
2. **Kürzere Zugriffszeit** (0,1 ms vs. 5-10 ms)
3. **Stoßunempfindlich** (keine beweglichen Teile)

(Weitere: leiser, stromsparender, leichter)

### Aufgabe 2
Wann sollte man eher eine HDD statt einer SSD verwenden?

**Lösung:** Eine HDD ist besser geeignet bei:
- **Großen Datenmengen** (Archive, Backups)
- **Begrenztem Budget** (niedrigerer Preis pro GB)
- **Hoher Kapazitätsanforderung** (20+ TB verfügbar)
- Daten, die selten zugegriffen werden

### Aufgabe 3
Was ist der Unterschied zwischen SATA und NVMe bei SSDs?

**Lösung:**
- **SATA:** Ältere Schnittstelle, max. ca. 550 MB/s, kompatibel mit HDD-Anschlüssen
- **NVMe:** Moderne Schnittstelle über PCIe, bis zu 7.000+ MB/s, speziell für SSDs entwickelt

NVMe ist etwa 12x schneller als SATA.

### Aufgabe 4
Was bedeutet TBW bei SSDs?

**Lösung:** **TBW (Terabytes Written)** ist eine Angabe zur Lebensdauer einer SSD. Sie gibt an, wie viele Terabyte insgesamt geschrieben werden können, bevor mit Ausfällen zu rechnen ist. Beispiel: Eine SSD mit 600 TBW kann insgesamt 600 TB Daten schreiben, bevor die Garantie erlischt.

---

## Querverweise

- [05-02-02 Speicher (RAM)](./05-02-02-memory-ram.md) - Speicherhierarchie
- [05-02-04 NAS und Verfügbarkeit](./05-02-04-nas-availability.md) - Netzwerkspeicher
- [05-05-01 Backup-Arten](../05-05-data-backup/05-05-01-backup-types.md) - Datensicherung
