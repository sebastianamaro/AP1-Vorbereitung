# NAS und Verfügbarkeit

## Lernziele

Nach diesem Kapitel solltest du:
- Den Begriff NAS erklären können
- Die Vorteile von NAS für die Verfügbarkeit verstehen
- Unterschiede zu direktem Speicher kennen
- Einsatzszenarien beschreiben können

**Hinweis:** NAS ersetzt RAID/SAN im Prüfungskatalog 2025 als Thema für Verfügbarkeit!

---

## Kerninhalt

### Was ist ein NAS?

**NAS (Network Attached Storage)** ist ein Speichergerät, das über das Netzwerk erreichbar ist und Dateien für mehrere Benutzer bereitstellt.

```
┌─────────────────────────────────────────────────────────────────┐
│                    NAS im NETZWERK                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌─────────┐     ┌─────────┐     ┌─────────┐                  │
│   │   PC    │     │ Laptop  │     │ Tablet  │                  │
│   └────┬────┘     └────┬────┘     └────┬────┘                  │
│        │               │               │                        │
│        └───────────────┼───────────────┘                        │
│                        │                                        │
│                  ┌─────┴─────┐                                  │
│                  │  Switch   │                                  │
│                  └─────┬─────┘                                  │
│                        │                                        │
│                  ┌─────┴─────┐                                  │
│                  │           │                                  │
│                  │    NAS    │ ◄── Zentraler Netzwerkspeicher  │
│                  │           │                                  │
│                  │ ┌───┐┌───┐│                                  │
│                  │ │HDD││HDD││ ◄── Mehrere Festplatten         │
│                  │ └───┘└───┘│                                  │
│                  └───────────┘                                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Vorteile von NAS

| Vorteil | Beschreibung |
|---------|--------------|
| **Zentraler Speicher** | Alle Daten an einem Ort |
| **Netzwerkzugriff** | Von jedem Gerät im Netzwerk erreichbar |
| **Datensicherung** | Backup-Funktionen integriert |
| **Redundanz** | Durch mehrere Festplatten |
| **Benutzerrechte** | Zugriffssteuerung möglich |
| **Fernzugriff** | Auch von außerhalb erreichbar |

---

### NAS-Funktionen für Verfügbarkeit

```
┌─────────────────────────────────────────────────────────────────┐
│           NAS FÜR VERFÜGBARKEIT                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │               DATEN-REDUNDANZ                             │  │
│  │  • Mehrere Festplatten speichern gleiche Daten            │  │
│  │  • Bei Ausfall einer Platte: Daten noch vorhanden         │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │               HOT-SWAP                                    │  │
│  │  • Festplatten im laufenden Betrieb austauschbar          │  │
│  │  • Keine Ausfallzeit bei Reparatur                        │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │               BACKUP-INTEGRATION                          │  │
│  │  • Automatische Backups auf externe Medien                │  │
│  │  • Cloud-Synchronisation                                  │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │               SNAPSHOT-FUNKTION                           │  │
│  │  • Momentaufnahmen des Datenbestands                      │  │
│  │  • Wiederherstellung früherer Versionen                   │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Vergleich: Speicheranbindung

| Typ | Beschreibung | Zugriff |
|-----|--------------|---------|
| **DAS** | Direct Attached Storage (direkt am PC) | Ein Gerät |
| **NAS** | Network Attached Storage | Über Netzwerk (Dateiebene) |
| **SAN** | Storage Area Network | Über Netzwerk (Blockebene) |

```
┌────────────────────────────────────────────────────────────────┐
│              SPEICHERANBINDUNG                                 │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  DAS (Direct Attached Storage)                                 │
│  ┌──────┐                                                      │
│  │  PC  │────[USB/SATA]────[HDD]                              │
│  └──────┘                                                      │
│  → Nur ein PC hat Zugriff                                      │
│                                                                │
│  NAS (Network Attached Storage)                                │
│  ┌──────┐                                                      │
│  │  PC  │────┐                                                 │
│  └──────┘    │                                                 │
│  ┌──────┐    ├──[Netzwerk]──[NAS]                             │
│  │  PC  │────┘                                                 │
│  └──────┘                                                      │
│  → Mehrere PCs haben Zugriff über SMB/NFS                      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### NAS-Protokolle

| Protokoll | Beschreibung | Plattform |
|-----------|--------------|-----------|
| **SMB/CIFS** | Server Message Block | Windows, macOS, Linux |
| **NFS** | Network File System | Linux/Unix |
| **AFP** | Apple Filing Protocol | macOS (veraltet) |
| **iSCSI** | Block-Level über Netzwerk | Alle |

---

### Einsatzszenarien

| Szenario | Beschreibung |
|----------|--------------|
| **Kleine Unternehmen** | Zentraler Dateispeicher für alle Mitarbeiter |
| **Heimnetzwerk** | Medien-Server, Backup für alle Geräte |
| **Backup-Ziel** | 3-2-1 Regel: Kopie auf NAS |
| **Zusammenarbeit** | Gemeinsamer Zugriff auf Projektdateien |
| **Archivierung** | Langzeitspeicherung |

---

### NAS und die 3-2-1 Backup-Regel

```
┌────────────────────────────────────────────────────────────────┐
│              3-2-1 BACKUP MIT NAS                              │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  3: Drei Kopien der Daten                                      │
│     [Original auf PC] [Backup auf NAS] [Backup in Cloud]       │
│                                                                │
│  2: Auf zwei verschiedenen Medientypen                         │
│     [PC-SSD] und [NAS-HDD] und [Cloud]                        │
│                                                                │
│  1: Eine Kopie außerhalb                                       │
│     [Cloud-Backup] oder [Externes Backup bei Verwandten]       │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **NAS** | Network Attached Storage |
| **DAS** | Direct Attached Storage |
| **SMB** | Server Message Block (Protokoll) |
| **NFS** | Network File System (Protokoll) |
| **Hot-Swap** | Austausch im laufenden Betrieb |
| **Snapshot** | Momentaufnahme des Datenbestands |
| **Redundanz** | Daten mehrfach vorhanden |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was ist ein NAS?
- Wie unterstützt ein NAS die Verfügbarkeit von Daten?
- Was ist der Unterschied zwischen DAS und NAS?
- Welche Protokolle werden für NAS verwendet?

### Wichtig zu merken

- **NAS** = Netzwerkspeicher für mehrere Benutzer
- **Verfügbarkeit** durch Redundanz und Hot-Swap
- **SMB** für Windows, **NFS** für Linux
- NAS ist ideal für zentrale Backups

---

## Übungsaufgaben

### Aufgabe 1
Was ist ein NAS und wozu dient es?

**Lösung:** Ein **NAS (Network Attached Storage)** ist ein Speichergerät, das über das Netzwerk erreichbar ist. Es dient als zentraler Speicherort für Dateien, auf den mehrere Benutzer gleichzeitig zugreifen können. Typische Einsatzbereiche sind Dateifreigabe, Backups und Medienserver.

### Aufgabe 2
Wie trägt ein NAS zur Verfügbarkeit von Daten bei?

**Lösung:** Ein NAS erhöht die Verfügbarkeit durch:
1. **Redundanz:** Mehrere Festplatten speichern die gleichen Daten
2. **Hot-Swap:** Defekte Platten können im laufenden Betrieb getauscht werden
3. **Snapshots:** Frühere Datenversionen können wiederhergestellt werden
4. **Backup-Integration:** Automatische Backups auf andere Medien

### Aufgabe 3
Was ist der Unterschied zwischen DAS und NAS?

**Lösung:**
- **DAS (Direct Attached Storage):** Speicher ist direkt an einen Computer angeschlossen (z.B. USB-Festplatte). Nur dieser Computer hat Zugriff.
- **NAS (Network Attached Storage):** Speicher ist über das Netzwerk erreichbar. Mehrere Computer können gleichzeitig zugreifen.

### Aufgabe 4
Welche Protokolle werden für den Zugriff auf ein NAS verwendet?

**Lösung:**
- **SMB/CIFS:** Standard für Windows, auch macOS und Linux
- **NFS:** Standard für Linux/Unix-Systeme
- **AFP:** Für ältere macOS-Systeme (veraltet)
- **iSCSI:** Für Block-Level-Zugriff

---

## Querverweise

- [04-01-01 CIA-Triade](../../04-it-security/04-01-protection-goals/04-01-01-cia-triad.md) - Verfügbarkeit
- [05-02-03 Datenspeicher](./05-02-03-storage-hdd-ssd.md) - HDD und SSD
- [05-05-02 Backup-Strategien](../05-05-data-backup/05-05-02-backup-strategies.md) - 3-2-1 Regel
