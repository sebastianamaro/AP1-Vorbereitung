# Kommandozeile (CLI)

## Lernziele

Nach diesem Kapitel solltest du:
- Den Zweck der Kommandozeile kennen
- Wichtige Windows- und Linux-Befehle anwenden können
- Grundlegende Dateisystem-Navigation beherrschen
- Netzwerkdiagnose-Befehle kennen

---

## Kerninhalt

### Was ist die Kommandozeile?

Die **Kommandozeile** (CLI - Command Line Interface) ist eine textbasierte Schnittstelle zur Systemsteuerung. Im Gegensatz zur grafischen Oberfläche (GUI) werden Befehle eingetippt.

```
┌─────────────────────────────────────────────────────────────────┐
│                    CLI vs. GUI                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  CLI (Command Line Interface)     GUI (Graphical User Interface)│
│  ┌─────────────────────────┐     ┌─────────────────────────┐   │
│  │ C:\> dir                │     │ ┌────┐ ┌────┐ ┌────┐   │   │
│  │ C:\> cd Documents       │     │ │ 📁 │ │ 📁 │ │ 📄 │   │   │
│  │ C:\> copy file.txt D:\  │     │ └────┘ └────┘ └────┘   │   │
│  │ C:\> _                  │     │  Docs   Images file.txt │   │
│  └─────────────────────────┘     └─────────────────────────┘   │
│                                                                 │
│  + Schneller für Experten        + Einsteigerfreundlich        │
│  + Automatisierbar (Skripte)     + Visuelles Feedback          │
│  + Weniger Ressourcen            - Langsamer für Routinen      │
│  - Befehle lernen nötig          - Schwer automatisierbar      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Windows: CMD vs. PowerShell

| Aspekt | CMD | PowerShell |
|--------|-----|------------|
| **Alter** | Seit DOS (1980er) | Seit 2006 |
| **Funktion** | Einfache Befehle | Objektorientiert |
| **Skripte** | .bat, .cmd | .ps1 |
| **Verwendung** | Basis-Aufgaben | Administration, Automatisierung |

---

### Wichtige Windows-Befehle (CMD/PowerShell)

#### Dateisystem-Navigation

| Befehl | Beschreibung | Beispiel |
|--------|--------------|----------|
| `dir` | Verzeichnisinhalt anzeigen | `dir C:\Users` |
| `cd` | Verzeichnis wechseln | `cd Documents` |
| `cd ..` | Eine Ebene nach oben | `cd ..` |
| `md` / `mkdir` | Verzeichnis erstellen | `mkdir Neuer_Ordner` |
| `rd` / `rmdir` | Verzeichnis löschen | `rmdir Alter_Ordner` |
| `copy` | Datei kopieren | `copy datei.txt D:\Backup` |
| `move` | Datei verschieben | `move datei.txt D:\` |
| `del` | Datei löschen | `del datei.txt` |
| `ren` | Umbenennen | `ren alt.txt neu.txt` |
| `type` | Dateiinhalt anzeigen | `type config.txt` |

#### System-Befehle

| Befehl | Beschreibung |
|--------|--------------|
| `hostname` | Computername anzeigen |
| `whoami` | Aktueller Benutzer |
| `systeminfo` | Systeminformationen |
| `tasklist` | Laufende Prozesse |
| `taskkill` | Prozess beenden |
| `shutdown` | Computer herunterfahren |
| `cls` | Bildschirm leeren |

#### Netzwerk-Befehle

| Befehl | Beschreibung | Beispiel |
|--------|--------------|----------|
| `ipconfig` | IP-Konfiguration anzeigen | `ipconfig /all` |
| `ping` | Erreichbarkeit testen | `ping google.de` |
| `tracert` | Route verfolgen | `tracert google.de` |
| `nslookup` | DNS-Abfrage | `nslookup google.de` |
| `netstat` | Netzwerkverbindungen | `netstat -an` |

---

### Wichtige Linux-Befehle (Bash)

#### Dateisystem-Navigation

| Befehl | Beschreibung | Beispiel |
|--------|--------------|----------|
| `ls` | Verzeichnisinhalt anzeigen | `ls -la` |
| `cd` | Verzeichnis wechseln | `cd /home/user` |
| `cd ..` | Eine Ebene nach oben | `cd ..` |
| `pwd` | Aktuelles Verzeichnis | `pwd` |
| `mkdir` | Verzeichnis erstellen | `mkdir ordner` |
| `rmdir` | Leeres Verzeichnis löschen | `rmdir ordner` |
| `cp` | Datei kopieren | `cp datei.txt /backup/` |
| `mv` | Verschieben/Umbenennen | `mv alt.txt neu.txt` |
| `rm` | Datei löschen | `rm datei.txt` |
| `cat` | Dateiinhalt anzeigen | `cat config.txt` |

#### System-Befehle

| Befehl | Beschreibung |
|--------|--------------|
| `hostname` | Computername anzeigen |
| `whoami` | Aktueller Benutzer |
| `uname -a` | Systeminformationen |
| `top` / `htop` | Laufende Prozesse |
| `kill` | Prozess beenden |
| `sudo` | Als root ausführen |
| `clear` | Bildschirm leeren |
| `chmod` | Rechte ändern |
| `chown` | Besitzer ändern |

#### Netzwerk-Befehle

| Befehl | Beschreibung | Beispiel |
|--------|--------------|----------|
| `ip a` / `ifconfig` | IP-Konfiguration | `ip a` |
| `ping` | Erreichbarkeit testen | `ping google.de` |
| `traceroute` | Route verfolgen | `traceroute google.de` |
| `nslookup` / `dig` | DNS-Abfrage | `dig google.de` |
| `netstat` / `ss` | Netzwerkverbindungen | `ss -tulpn` |

---

### Vergleich: Windows vs. Linux Befehle

| Aufgabe | Windows (CMD) | Linux (Bash) |
|---------|---------------|--------------|
| Verzeichnis anzeigen | `dir` | `ls` |
| Verzeichnis wechseln | `cd` | `cd` |
| Aktuelles Verzeichnis | `cd` (ohne Parameter) | `pwd` |
| Datei kopieren | `copy` | `cp` |
| Datei verschieben | `move` | `mv` |
| Datei löschen | `del` | `rm` |
| Ordner erstellen | `mkdir` | `mkdir` |
| Datei anzeigen | `type` | `cat` |
| IP-Konfiguration | `ipconfig` | `ip a` |
| Route verfolgen | `tracert` | `traceroute` |

---

### Netzwerk-Diagnose Beispiele

```
┌────────────────────────────────────────────────────────────────┐
│                NETZWERK-DIAGNOSE                               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  1. Eigene IP-Adresse ermitteln:                              │
│     Windows:  ipconfig                                         │
│     Linux:    ip a                                             │
│                                                                │
│  2. Verbindung zu einem Server testen:                        │
│     ping 8.8.8.8                                               │
│     → Zeigt Erreichbarkeit und Antwortzeit                    │
│                                                                │
│  3. DNS-Auflösung prüfen:                                     │
│     nslookup google.de                                         │
│     → Zeigt IP-Adresse des Servers                            │
│                                                                │
│  4. Route zum Ziel verfolgen:                                 │
│     Windows:  tracert google.de                               │
│     Linux:    traceroute google.de                            │
│     → Zeigt alle Zwischenstationen (Hops)                     │
│                                                                │
│  5. Offene Ports anzeigen:                                    │
│     Windows:  netstat -an                                      │
│     Linux:    ss -tulpn                                        │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Dateipfade

| Typ | Windows | Linux |
|-----|---------|-------|
| **Trennzeichen** | `\` (Backslash) | `/` (Slash) |
| **Wurzelverzeichnis** | `C:\` | `/` |
| **Home-Verzeichnis** | `C:\Users\Name` | `/home/name` oder `~` |
| **Absoluter Pfad** | `C:\Users\Name\file.txt` | `/home/name/file.txt` |
| **Relativer Pfad** | `Documents\file.txt` | `Documents/file.txt` |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **CLI** | Command Line Interface (Kommandozeile) |
| **GUI** | Graphical User Interface |
| **Shell** | Kommandozeileninterpreter (CMD, Bash) |
| **Pfad** | Weg zu einer Datei oder einem Ordner |
| **Parameter** | Optionen für Befehle (z.B. `-a`) |
| **Pipe** | Ausgabe weiterleiten (`|`) |
| **Redirect** | Ausgabe in Datei umleiten (`>`) |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Welcher Befehl zeigt die IP-Konfiguration?
- Wie wechselt man das Verzeichnis?
- Was macht der Befehl ping?
- Unterschied Windows vs. Linux Befehle?

### Wichtig zu merken

- **ipconfig** (Windows) / **ip a** (Linux) = IP-Adresse anzeigen
- **ping** = Erreichbarkeit testen
- **dir** (Windows) / **ls** (Linux) = Verzeichnis auflisten
- **cd** = Verzeichnis wechseln (beide Systeme)

---

## Übungsaufgaben

### Aufgabe 1
Welchen Windows-Befehl verwenden Sie, um die IP-Adresse Ihres Computers anzuzeigen?

**Lösung:** `ipconfig` oder `ipconfig /all` für detaillierte Informationen

### Aufgabe 2
Wie navigieren Sie in Windows zur Kommandozeile zum Ordner "C:\Projekte\Test"?

**Lösung:** `cd C:\Projekte\Test`

### Aufgabe 3
Mit welchem Befehl prüfen Sie, ob ein Server unter der Adresse 192.168.1.1 erreichbar ist?

**Lösung:** `ping 192.168.1.1`

Der Befehl sendet ICMP-Pakete und zeigt:
- Ob der Server antwortet
- Die Antwortzeit (Latenz)
- Eventuelle Paketverluste

### Aufgabe 4
Welche Linux-Befehle entsprechen den Windows-Befehlen `dir` und `copy`?

**Lösung:**
- `dir` (Windows) → `ls` (Linux)
- `copy` (Windows) → `cp` (Linux)

---

## Querverweise

- [05-03-01 Grundlagen Betriebssysteme](./05-03-01-fundamentals-operating-systems.md) - Shell
- [07-07-01 Diagnose-Tools](../../07-networks/07-07-network-troubleshooting/07-07-01-diagnostic-tools.md) - Netzwerkbefehle
- [04-03-03 OS-Härtung](../../04-it-security/04-03-protective-measures/04-03-03-os-hardening.md) - Systemkonfiguration
