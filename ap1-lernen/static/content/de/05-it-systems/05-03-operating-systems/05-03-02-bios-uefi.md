# BIOS und UEFI

## Lernziele

Nach diesem Kapitel solltest du:
- Den Unterschied zwischen BIOS und UEFI kennen
- Die Aufgaben von BIOS/UEFI erklären können
- Den Bootvorgang verstehen
- UEFI-Sicherheitsfunktionen kennen

---

## Kerninhalt

### Was ist BIOS/UEFI?

**BIOS** (Basic Input/Output System) und **UEFI** (Unified Extensible Firmware Interface) sind Firmware, die beim Einschalten des Computers als Erstes startet und die Hardware initialisiert.

```
┌─────────────────────────────────────────────────────────────────┐
│                    BOOTVORGANG                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   1. Einschalten                                                │
│      ↓                                                          │
│   2. BIOS/UEFI startet (Firmware)                              │
│      ↓                                                          │
│   3. POST (Power-On Self-Test)                                 │
│      ↓                                                          │
│   4. Hardware initialisieren                                    │
│      ↓                                                          │
│   5. Bootgerät finden                                          │
│      ↓                                                          │
│   6. Bootloader laden                                          │
│      ↓                                                          │
│   7. Betriebssystem starten                                    │
│      ↓                                                          │
│   8. System betriebsbereit                                     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### BIOS (Legacy)

Das **BIOS** ist die ältere Firmware-Technologie (seit 1975).

| Eigenschaft | BIOS |
|-------------|------|
| **Oberfläche** | Textbasiert |
| **Bedienung** | Nur Tastatur |
| **Partitionstabelle** | MBR (Master Boot Record) |
| **Max. Festplattengröße** | 2,2 TB |
| **Max. Partitionen** | 4 primäre |
| **Boot-Modus** | 16-Bit Real Mode |
| **Sicherheit** | Begrenzt |

---

### UEFI (Modern)

**UEFI** ist der moderne Nachfolger des BIOS (seit ~2010).

| Eigenschaft | UEFI |
|-------------|------|
| **Oberfläche** | Grafisch (GUI) |
| **Bedienung** | Maus + Tastatur |
| **Partitionstabelle** | GPT (GUID Partition Table) |
| **Max. Festplattengröße** | 9,4 ZB (Zettabyte) |
| **Max. Partitionen** | 128+ |
| **Boot-Modus** | 32/64-Bit |
| **Sicherheit** | Secure Boot |

---

### Vergleich: BIOS vs. UEFI

```
┌────────────────────────────────────────────────────────────────┐
│                   BIOS vs. UEFI                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  BIOS (Legacy)                    UEFI (Modern)               │
│  ┌─────────────────────┐         ┌─────────────────────┐      │
│  │ ████████████████████│         │ ┌────┐  ┌────┐     │      │
│  │ █ BIOS Setup      █│         │ │    │  │    │ GUI │      │
│  │ █ ──────────────  █│         │ └────┘  └────┘     │      │
│  │ █ > Boot Order    █│         │ ╔═══════════════╗  │      │
│  │ █ > Date/Time     █│         │ ║ Boot Options  ║  │      │
│  │ █ > Exit          █│         │ ╚═══════════════╝  │      │
│  │ ████████████████████│         │                    │      │
│  └─────────────────────┘         └─────────────────────┘      │
│  Textbasiert, nur Tastatur       Grafisch, Maus möglich      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Aspekt | BIOS | UEFI |
|--------|------|------|
| **Partitionstabelle** | MBR | GPT |
| **Max. HDD-Größe** | 2,2 TB | >9 ZB |
| **Bootzeit** | Langsamer | Schneller |
| **Oberfläche** | Text | Grafisch |
| **Secure Boot** | Nein | Ja |
| **Netzwerk-Boot** | Begrenzt | Umfangreich |

---

### MBR vs. GPT

| Aspekt | MBR | GPT |
|--------|-----|-----|
| **Voller Name** | Master Boot Record | GUID Partition Table |
| **Max. Festplattengröße** | 2,2 TB | 9,4 ZB |
| **Max. Partitionen** | 4 primäre | 128+ |
| **Redundanz** | Keine | Backup am Ende |
| **UEFI-Unterstützung** | Über CSM | Native |

---

### POST (Power-On Self-Test)

Der **POST** ist ein Selbsttest beim Systemstart.

```
┌────────────────────────────────────────────────────────────────┐
│                    POST-ABLAUF                                 │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  1. CPU prüfen                                                 │
│     ↓                                                          │
│  2. BIOS/UEFI-ROM prüfen                                      │
│     ↓                                                          │
│  3. RAM prüfen und zählen                                     │
│     ↓                                                          │
│  4. Grafikkarte initialisieren                                │
│     ↓                                                          │
│  5. Tastatur prüfen                                           │
│     ↓                                                          │
│  6. Speichergeräte erkennen                                   │
│     ↓                                                          │
│  7. POST abgeschlossen → Betriebssystem laden                 │
│                                                                │
│  Bei Fehler: Pieptöne (Beep-Codes) oder Fehlermeldung         │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

**Beep-Codes:** Signaltöne zeigen Fehler an (z.B. RAM-Problem = mehrere Pieptöne)

---

### Secure Boot

**Secure Boot** ist eine UEFI-Sicherheitsfunktion.

| Aspekt | Beschreibung |
|--------|--------------|
| **Funktion** | Prüft digitale Signaturen beim Booten |
| **Schutz vor** | Bootkits, Rootkits, unsignierte Software |
| **Zertifikate** | Microsoft und Hardware-Hersteller |
| **Deaktivierbar** | Ja, für alternative Betriebssysteme |

```
┌────────────────────────────────────────────────────────────────┐
│                    SECURE BOOT                                 │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Bootloader           Signatur-         UEFI                 │
│   starten              prüfung           Firmware             │
│       │                   │                  │                 │
│       │    Signatur?      │                  │                 │
│       ├──────────────────►│                  │                 │
│       │                   │   Gültig?        │                 │
│       │                   ├─────────────────►│                 │
│       │                   │                  │                 │
│       │◄─────── JA: Booten erlaubt ─────────│                 │
│       │                   │                  │                 │
│       │◄────── NEIN: Booten blockiert ──────│                 │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### UEFI-Einstellungen

| Einstellung | Beschreibung |
|-------------|--------------|
| **Boot Order** | Reihenfolge der Bootgeräte |
| **Secure Boot** | Aktiviert/Deaktiviert |
| **CSM** | Compatibility Support Module (BIOS-Modus) |
| **TPM** | Trusted Platform Module (Sicherheitschip) |
| **Fast Boot** | Beschleunigter Start |
| **Virtualization** | Intel VT-x / AMD-V |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **BIOS** | Basic Input/Output System (Legacy-Firmware) |
| **UEFI** | Unified Extensible Firmware Interface |
| **POST** | Power-On Self-Test |
| **MBR** | Master Boot Record (Legacy-Partitionstabelle) |
| **GPT** | GUID Partition Table (moderne Partitionstabelle) |
| **Secure Boot** | Signaturprüfung beim Booten |
| **CSM** | Compatibility Support Module (BIOS-Emulation) |
| **Bootloader** | Lädt das Betriebssystem |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was ist der Unterschied zwischen BIOS und UEFI?
- Was ist der POST?
- Was ist Secure Boot?
- Was ist der Unterschied zwischen MBR und GPT?

### Wichtig zu merken

- **BIOS** = alt, textbasiert, MBR, max. 2,2 TB
- **UEFI** = modern, grafisch, GPT, Secure Boot
- **POST** = Selbsttest beim Systemstart
- **Secure Boot** = Signaturprüfung, Schutz vor Bootkits

---

## Übungsaufgaben

### Aufgabe 1
Nennen Sie drei Unterschiede zwischen BIOS und UEFI.

**Lösung:**
1. **Oberfläche:** BIOS ist textbasiert, UEFI hat eine grafische Oberfläche
2. **Partitionstabelle:** BIOS nutzt MBR (max. 2,2 TB), UEFI nutzt GPT (>9 ZB)
3. **Sicherheit:** UEFI bietet Secure Boot, BIOS nicht

(Weitere: Bootgeschwindigkeit, Mausunterstützung, 32/64-Bit-Modus)

### Aufgabe 2
Was ist der POST und was passiert dabei?

**Lösung:** **POST (Power-On Self-Test)** ist ein Selbsttest beim Systemstart. Dabei werden folgende Komponenten geprüft:
- CPU
- RAM (wird gezählt und getestet)
- Grafikkarte
- Tastatur
- Speichergeräte

Bei Fehlern werden Beep-Codes (Pieptöne) ausgegeben oder Fehlermeldungen angezeigt.

### Aufgabe 3
Warum kann eine Festplatte mit 4 TB nicht mit MBR-Partitionierung vollständig genutzt werden?

**Lösung:** **MBR (Master Boot Record)** unterstützt maximal Festplatten bis **2,2 TB**. Bei einer 4-TB-Festplatte würden 1,8 TB nicht nutzbar sein. Lösung: **GPT (GUID Partition Table)** verwenden, das Festplatten >9 ZB unterstützt und UEFI erfordert.

---

## Querverweise

- [05-03-01 Grundlagen Betriebssysteme](./05-03-01-fundamentals-operating-systems.md) - OS-Überblick
- [05-02-03 Datenspeicher](../05-02-hardware/05-02-03-storage-hdd-ssd.md) - HDD und SSD
- [04-03-03 OS-Härtung](../../04-it-security/04-03-protective-measures/04-03-03-os-hardening.md) - Secure Boot
