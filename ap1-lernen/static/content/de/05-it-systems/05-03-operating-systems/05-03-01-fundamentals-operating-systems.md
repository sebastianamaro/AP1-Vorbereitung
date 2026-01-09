# Grundlagen Betriebssysteme

## Lernziele

Nach diesem Kapitel solltest du:
- Die Aufgaben eines Betriebssystems kennen
- Verschiedene Betriebssysteme unterscheiden können
- Grundlegende Konzepte verstehen
- Betriebssysteme für Einsatzszenarien auswählen können

---

## Kerninhalt

### Was ist ein Betriebssystem?

Ein **Betriebssystem (OS - Operating System)** ist Software, die Hardware verwaltet und Anwendungen eine Schnittstelle zur Hardware bietet.

```
┌─────────────────────────────────────────────────────────────────┐
│                BETRIEBSSYSTEM-SCHICHTEN                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │              ANWENDUNGEN (Programme)                     │   │
│  │         (Word, Browser, Spiele, ...)                     │   │
│  └─────────────────────────────────────────────────────────┘   │
│                           │                                     │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │               BETRIEBSSYSTEM                             │   │
│  │  ┌────────────────────────────────────────────────────┐ │   │
│  │  │                    Shell                            │ │   │
│  │  │           (Benutzeroberfläche)                      │ │   │
│  │  └────────────────────────────────────────────────────┘ │   │
│  │  ┌────────────────────────────────────────────────────┐ │   │
│  │  │                    Kernel                           │ │   │
│  │  │       (Kern - Hardwareverwaltung)                   │ │   │
│  │  └────────────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────────────┘   │
│                           │                                     │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    HARDWARE                              │   │
│  │         (CPU, RAM, Festplatte, ...)                     │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Aufgaben eines Betriebssystems

| Aufgabe | Beschreibung |
|---------|--------------|
| **Prozessverwaltung** | Programme starten, beenden, CPU-Zeit zuteilen |
| **Speicherverwaltung** | RAM verwalten, virtuellen Speicher bereitstellen |
| **Dateiverwaltung** | Dateisystem, Lesen/Schreiben von Dateien |
| **Geräteverwaltung** | Treiber laden, Hardware ansprechen |
| **Benutzerverwaltung** | Benutzerkonten, Rechte, Anmeldung |
| **Netzwerkverwaltung** | Netzwerkverbindungen, Protokolle |

```
┌────────────────────────────────────────────────────────────────┐
│              BETRIEBSSYSTEM-AUFGABEN                           │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │
│  │   Prozess-   │  │   Speicher-  │  │   Datei-     │        │
│  │  verwaltung  │  │  verwaltung  │  │  verwaltung  │        │
│  └──────────────┘  └──────────────┘  └──────────────┘        │
│                                                                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │
│  │   Geräte-    │  │   Benutzer-  │  │  Netzwerk-   │        │
│  │  verwaltung  │  │  verwaltung  │  │  verwaltung  │        │
│  └──────────────┘  └──────────────┘  └──────────────┘        │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Kernel und Shell

| Komponente | Beschreibung |
|------------|--------------|
| **Kernel** | Kern des OS, direkter Hardwarezugriff, Ressourcenverwaltung |
| **Shell** | Benutzeroberfläche (grafisch oder Kommandozeile) |

**Kernel-Arten:**
- **Monolithischer Kernel:** Alle Funktionen im Kernel (Linux, Windows NT)
- **Mikrokernel:** Minimaler Kernel, Rest als Dienste (Minix, QNX)
- **Hybridkernel:** Kombination (Windows, macOS)

---

### Betriebssystem-Arten

| Typ | Beschreibung | Beispiele |
|-----|--------------|-----------|
| **Desktop-OS** | Für PCs und Laptops | Windows, macOS, Linux |
| **Server-OS** | Für Server | Windows Server, Linux |
| **Mobile-OS** | Für Smartphones/Tablets | Android, iOS |
| **Embedded-OS** | Für eingebettete Systeme | Linux, RTOS |

---

### Vergleich: Windows, Linux, macOS

| Aspekt | Windows | Linux | macOS |
|--------|---------|-------|-------|
| **Hersteller** | Microsoft | Open Source | Apple |
| **Lizenz** | Proprietär (kostenpflichtig) | Open Source (meist kostenlos) | Proprietär (an Apple-Hardware) |
| **Kernel** | NT (Hybrid) | Linux (Monolithisch) | XNU (Hybrid) |
| **GUI** | Windows Shell | GNOME, KDE, etc. | Aqua |
| **CLI** | CMD, PowerShell | Bash, Zsh | Terminal (Zsh) |
| **Marktanteil Desktop** | ~75% | ~3% | ~15% |
| **Server-Einsatz** | Mittel | Sehr hoch | Niedrig |

---

### Dateisysteme

| Dateisystem | Betriebssystem | Eigenschaften |
|-------------|----------------|---------------|
| **NTFS** | Windows | Rechte, Kompression, große Dateien |
| **FAT32** | Alle | Kompatibel, max. 4 GB pro Datei |
| **exFAT** | Alle | Für USB-Sticks, große Dateien |
| **ext4** | Linux | Standard unter Linux |
| **APFS** | macOS | SSD-optimiert, Verschlüsselung |

---

### Prozess und Thread

```
┌────────────────────────────────────────────────────────────────┐
│                 PROZESS vs. THREAD                             │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  PROZESS (eigener Speicherbereich)                            │
│  ┌────────────────────────────────────────────────────────┐   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐    │   │
│  │  │  Thread 1   │  │  Thread 2   │  │  Thread 3   │    │   │
│  │  │             │  │             │  │             │    │   │
│  │  └─────────────┘  └─────────────┘  └─────────────┘    │   │
│  │                                                        │   │
│  │  Gemeinsamer Speicher innerhalb des Prozesses          │   │
│  └────────────────────────────────────────────────────────┘   │
│                                                                │
│  • Prozess = laufendes Programm mit eigenem Speicher          │
│  • Thread = leichtgewichtige Ausführungseinheit im Prozess    │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Begriff | Beschreibung |
|---------|--------------|
| **Prozess** | Laufendes Programm mit eigenem Speicherbereich |
| **Thread** | Ausführungsstrang innerhalb eines Prozesses |
| **Multitasking** | Mehrere Prozesse scheinbar gleichzeitig |
| **Multithreading** | Mehrere Threads pro Prozess |

---

### Benutzerrechte

| Windows | Linux | Beschreibung |
|---------|-------|--------------|
| Administrator | root | Volle Systemrechte |
| Standardbenutzer | user | Eingeschränkte Rechte |
| Gast | guest | Minimale Rechte |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Betriebssystem** | Software zur Hardwareverwaltung |
| **Kernel** | Kern des Betriebssystems |
| **Shell** | Benutzeroberfläche |
| **Prozess** | Laufendes Programm |
| **Thread** | Ausführungsstrang |
| **Treiber** | Software zur Hardwareansteuerung |
| **Dateisystem** | Organisation von Dateien (NTFS, ext4) |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was sind die Aufgaben eines Betriebssystems?
- Was ist der Unterschied zwischen Kernel und Shell?
- Was ist der Unterschied zwischen Prozess und Thread?

### Wichtig zu merken

- **Betriebssystem** = Schnittstelle zwischen Hardware und Anwendungen
- **Kernel** = Kern, verwaltet Hardware
- **Shell** = Benutzeroberfläche (GUI oder CLI)
- **NTFS** = Windows, **ext4** = Linux

---

## Übungsaufgaben

### Aufgabe 1
Nennen Sie vier Aufgaben eines Betriebssystems.

**Lösung:**
1. **Prozessverwaltung:** Programme starten, beenden, CPU-Zeit zuteilen
2. **Speicherverwaltung:** RAM verwalten, virtuellen Speicher
3. **Dateiverwaltung:** Dateisystem, Lesen und Schreiben
4. **Geräteverwaltung:** Treiber, Hardware ansprechen

(Weitere: Benutzerverwaltung, Netzwerkverwaltung)

### Aufgabe 2
Was ist der Unterschied zwischen Kernel und Shell?

**Lösung:**
- **Kernel:** Der Kern des Betriebssystems, hat direkten Zugriff auf die Hardware und verwaltet Ressourcen (CPU, RAM, Geräte)
- **Shell:** Die Benutzeroberfläche, über die der Benutzer mit dem System interagiert (grafisch wie Windows Desktop oder Kommandozeile wie Bash)

### Aufgabe 3
Welches Dateisystem wird für einen Windows-Server empfohlen und warum?

**Lösung:** **NTFS** wird empfohlen weil:
- Unterstützung für Zugriffsrechte (Sicherheit)
- Große Dateien möglich (>4 GB)
- Journaling für Datenintegrität
- Dateikompression und Verschlüsselung
- Standard unter Windows

---

## Querverweise

- [05-03-02 BIOS/UEFI](./05-03-02-bios-uefi.md) - Systemstart
- [05-03-03 Kommandozeile](./05-03-03-command-line.md) - Shell-Befehle
- [05-04-01 Virtualisierung](../05-04-virtualization-cloud/05-04-01-virtualization.md) - Virtuelle Maschinen
