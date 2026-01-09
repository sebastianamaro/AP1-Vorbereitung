# Speicher (RAM)

## Lernziele

Nach diesem Kapitel solltest du:
- Die verschiedenen Speicherarten unterscheiden können
- RAM und ROM erklären können
- Die Speicherhierarchie verstehen
- DDR-Standards kennen

---

## Kerninhalt

### Speicherarten im Überblick

```
┌─────────────────────────────────────────────────────────────────┐
│                    SPEICHERARTEN                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  FLÜCHTIG (verliert Daten           NICHT-FLÜCHTIG (behält     │
│  bei Stromausfall)                  Daten ohne Strom)           │
│                                                                 │
│  ┌─────────────────────┐           ┌─────────────────────┐     │
│  │        RAM          │           │        ROM          │     │
│  │  Random Access      │           │  Read-Only Memory   │     │
│  │  Memory             │           │                     │     │
│  │                     │           │  • BIOS/UEFI        │     │
│  │  • Arbeitsspeicher  │           │  • Firmware         │     │
│  │  • Schnell          │           │                     │     │
│  │  • Teuer pro GB     │           │  ┌───────────────┐  │     │
│  └─────────────────────┘           │  │ Flash-Speicher│  │     │
│                                    │  │ • SSD         │  │     │
│                                    │  │ • USB-Stick   │  │     │
│                                    │  └───────────────┘  │     │
│                                    └─────────────────────┘     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### RAM (Random Access Memory)

**RAM** ist der Arbeitsspeicher des Computers - schnell, aber flüchtig.

#### Eigenschaften

| Eigenschaft | Beschreibung |
|-------------|--------------|
| **Flüchtig** | Daten gehen bei Stromausfall verloren |
| **Schnell** | Direkter Zugriff auf jede Adresse |
| **Funktion** | Speichert laufende Programme und Daten |
| **Kapazität** | Typisch 8-64 GB |

#### RAM-Typen

| Typ | Beschreibung | Geschwindigkeit |
|-----|--------------|-----------------|
| **DRAM** | Dynamic RAM, muss aufgefrischt werden | Langsamer |
| **SRAM** | Static RAM, kein Refresh nötig | Schneller |
| **SDRAM** | Synchron mit Systemtakt | Aktueller Standard |

---

### DDR-Standards

**DDR (Double Data Rate)** überträgt Daten bei steigender UND fallender Taktflanke.

```
┌────────────────────────────────────────────────────────────────┐
│                    DDR-ENTWICKLUNG                             │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  DDR1 ───► DDR2 ───► DDR3 ───► DDR4 ───► DDR5                 │
│                                                                │
│  Jede Generation:                                              │
│  • Höhere Geschwindigkeit                                      │
│  • Niedrigere Spannung (= weniger Stromverbrauch)             │
│  • Höhere Kapazität möglich                                    │
│  • NICHT abwärtskompatibel (andere Kerbe/Sockel)              │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| DDR-Standard | Spannung | Typische Frequenz | Max. Bandbreite |
|--------------|----------|-------------------|-----------------|
| **DDR3** | 1,5 V | 1333-2133 MHz | ~17 GB/s |
| **DDR4** | 1,2 V | 2133-3200 MHz | ~25 GB/s |
| **DDR5** | 1,1 V | 4800-6400+ MHz | ~51+ GB/s |

---

### Speicherhierarchie

Die Speicher im Computer sind hierarchisch angeordnet:

```
┌────────────────────────────────────────────────────────────────┐
│                  SPEICHERHIERARCHIE                            │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│             ▲ Geschwindigkeit                                  │
│             │                                                  │
│  ┌──────────┴──────────┐  Register (CPU)                      │
│  │        sehr        │  Kapazität: Bytes                     │
│  │       schnell      │  Latenz: < 1 ns                       │
│  └────────────────────┘                                        │
│  ┌────────────────────┐  L1/L2/L3 Cache                       │
│  │      schnell       │  Kapazität: KB bis MB                 │
│  │                    │  Latenz: 1-10 ns                      │
│  └────────────────────┘                                        │
│  ┌────────────────────┐  RAM (Arbeitsspeicher)                │
│  │      mittel        │  Kapazität: GB                        │
│  │                    │  Latenz: ~100 ns                      │
│  └────────────────────┘                                        │
│  ┌────────────────────┐  SSD                                  │
│  │      langsam       │  Kapazität: TB                        │
│  │      (relativ)     │  Latenz: ~100 µs                      │
│  └────────────────────┘                                        │
│  ┌────────────────────┐  HDD                                  │
│  │    sehr langsam    │  Kapazität: TB                        │
│  │                    │  Latenz: ~10 ms                       │
│  └────────────────────┘                                        │
│             │                                                  │
│             ▼ Kapazität / Kosten pro GB                       │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### ROM (Read-Only Memory)

**ROM** speichert Daten dauerhaft, auch ohne Stromversorgung.

| ROM-Typ | Beschreibung | Änderbar? |
|---------|--------------|-----------|
| **ROM** | Nur lesbar, fest programmiert | Nein |
| **PROM** | Einmal programmierbar | Einmal |
| **EPROM** | Mit UV-Licht löschbar | Mit Spezialgerät |
| **EEPROM** | Elektrisch löschbar | Ja |
| **Flash** | Schnell elektrisch löschbar | Ja |

**Verwendung von ROM:**
- BIOS/UEFI-Firmware
- Firmware von Geräten
- Bootloader

---

### Dual-Channel und Quad-Channel

Durch mehrere Speicherkanäle kann die Bandbreite erhöht werden:

| Modus | Anforderung | Bandbreite |
|-------|-------------|------------|
| **Single-Channel** | 1 RAM-Modul | 1x |
| **Dual-Channel** | 2 identische Module | 2x |
| **Quad-Channel** | 4 identische Module | 4x |

**Best Practice:** Gleiche RAM-Module (Größe, Geschwindigkeit, Hersteller) verwenden.

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **RAM** | Random Access Memory (Arbeitsspeicher) |
| **ROM** | Read-Only Memory |
| **DDR** | Double Data Rate |
| **DRAM** | Dynamic RAM |
| **SRAM** | Static RAM |
| **Flüchtig** | Verliert Daten bei Stromausfall |
| **Dual-Channel** | Zwei RAM-Module für mehr Bandbreite |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was ist der Unterschied zwischen RAM und ROM?
- Was bedeutet DDR?
- Warum wird RAM als flüchtig bezeichnet?
- Was ist die Speicherhierarchie?

### Wichtig zu merken

- **RAM** = flüchtig, schnell, Arbeitsspeicher
- **ROM** = nicht-flüchtig, Firmware
- **DDR** = Double Data Rate (doppelte Übertragung pro Takt)
- DDR-Generationen sind **nicht abwärtskompatibel**

---

## Übungsaufgaben

### Aufgabe 1
Was ist der Unterschied zwischen RAM und ROM?

**Lösung:**
| Aspekt | RAM | ROM |
|--------|-----|-----|
| **Flüchtigkeit** | Flüchtig (Daten weg bei Stromausfall) | Nicht-flüchtig |
| **Verwendung** | Arbeitsspeicher | Firmware, BIOS |
| **Änderbar** | Ja, ständig | Nein oder nur speziell |
| **Geschwindigkeit** | Sehr schnell | Langsamer |

### Aufgabe 2
Warum sind DDR4 und DDR5 RAM-Module nicht austauschbar?

**Lösung:** DDR-Generationen haben unterschiedliche:
- **Spannungen** (DDR4: 1,2V, DDR5: 1,1V)
- **Pin-Anzahlen** und **Kerben** (mechanisch inkompatibel)
- **Elektrische Spezifikationen**

Die Module passen physisch nicht in falsche Slots.

### Aufgabe 3
Erklären Sie die Speicherhierarchie.

**Lösung:** Die Speicherhierarchie ordnet Speicher nach Geschwindigkeit und Kapazität:
1. **Register** (CPU) - schnellste, kleinste
2. **Cache** (L1, L2, L3) - sehr schnell, klein
3. **RAM** - schnell, mittelgroß
4. **SSD/HDD** - langsam, groß

Je schneller der Speicher, desto teurer pro GB und desto kleiner die Kapazität.

---

## Querverweise

- [05-02-01 Prozessoren](./05-02-01-processors.md) - Cache und Register
- [05-02-03 Datenspeicher](./05-02-03-storage-hdd-ssd.md) - SSD und HDD
- [05-03-02 BIOS/UEFI](../05-03-operating-systems/05-03-02-bios-uefi.md) - ROM für Firmware
