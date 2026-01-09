# Softwarearten

## Lernziele

Nach diesem Kapitel solltest du:
- Systemsoftware und Anwendungssoftware unterscheiden können
- Beispiele für verschiedene Softwarearten nennen können
- Standard- und Individualsoftware unterscheiden können
- Open Source und proprietäre Software kennen

---

## Kerninhalt

### Übersicht: Softwarearten

```
┌─────────────────────────────────────────────────────────────────┐
│                    SOFTWAREARTEN                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                         SOFTWARE                                │
│                            │                                    │
│           ┌────────────────┴────────────────┐                  │
│           │                                 │                  │
│     ┌─────▼─────┐                    ┌─────▼─────┐            │
│     │  System-  │                    │ Anwendungs-│            │
│     │  software │                    │  software  │            │
│     └─────┬─────┘                    └─────┬─────┘            │
│           │                                 │                  │
│     ┌─────┴─────┐                    ┌─────┴─────┐            │
│     │• Betriebs-│                    │• Office   │            │
│     │  system   │                    │• Browser  │            │
│     │• Treiber  │                    │• ERP      │            │
│     │• Firmware │                    │• Spiele   │            │
│     │• BIOS/UEFI│                    │• CAD      │            │
│     │• Utilities│                    │• Grafik   │            │
│     └───────────┘                    └───────────┘            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Systemsoftware

**Systemsoftware** steuert und verwaltet die Hardware und stellt die Grundlage für Anwendungssoftware bereit.

| Typ | Beschreibung | Beispiele |
|-----|--------------|-----------|
| **Betriebssystem** | Verwaltet Hardware und Ressourcen | Windows, Linux, macOS |
| **Treiber** | Ermöglicht Kommunikation mit Hardware | Grafikkartentreiber, Druckertreiber |
| **Firmware** | Software direkt auf Hardware | BIOS/UEFI, Router-Firmware |
| **Utilities** | Systemwerkzeuge | Defragmentierung, Virenscanner |

---

### Anwendungssoftware

**Anwendungssoftware** erfüllt konkrete Aufgaben für den Benutzer.

| Kategorie | Beschreibung | Beispiele |
|-----------|--------------|-----------|
| **Bürosoftware** | Textverarbeitung, Tabellen | Word, Excel, LibreOffice |
| **Kommunikation** | E-Mail, Messaging | Outlook, Teams, Slack |
| **Branchensoftware** | Speziell für Branchen | ERP, CAD, Buchhaltung |
| **Multimedia** | Bild-, Video-, Audiobearbeitung | Photoshop, Premiere |
| **Browser** | Webseiten anzeigen | Chrome, Firefox, Edge |
| **Spiele** | Unterhaltung | - |

---

### Standard- vs. Individualsoftware

```
┌────────────────────────────────────────────────────────────────┐
│          STANDARD- vs. INDIVIDUALSOFTWARE                      │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  STANDARDSOFTWARE                 INDIVIDUALSOFTWARE          │
│  ┌────────────────────┐          ┌────────────────────┐      │
│  │                    │          │                    │      │
│  │ Für viele Kunden   │          │ Für einen Kunden   │      │
│  │ entwickelt         │          │ maßgeschneidert    │      │
│  │                    │          │                    │      │
│  │ • Microsoft Office │          │ • Unternehmens-    │      │
│  │ • SAP              │          │   spezifische      │      │
│  │ • Adobe Photoshop  │          │   Lösung           │      │
│  │                    │          │                    │      │
│  └────────────────────┘          └────────────────────┘      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Aspekt | Standardsoftware | Individualsoftware |
|--------|-----------------|-------------------|
| **Zielgruppe** | Viele Kunden | Ein Kunde |
| **Kosten** | Niedriger (auf viele verteilt) | Höher (Entwicklung) |
| **Anpassung** | Begrenzt möglich | Vollständig anpassbar |
| **Verfügbarkeit** | Sofort | Entwicklungszeit |
| **Updates** | Vom Hersteller | Individuell |
| **Support** | Standardisiert | Individuell |

---

### Lizenzmodelle (Übersicht)

```
┌────────────────────────────────────────────────────────────────┐
│                    LIZENZMODELLE                               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  PROPRIETÄR                       OPEN SOURCE                 │
│  ┌────────────────────┐          ┌────────────────────┐      │
│  │                    │          │                    │      │
│  │ • Quellcode geheim │          │ • Quellcode offen  │      │
│  │ • Nutzung per      │          │ • Nutzung meist    │      │
│  │   Lizenz           │          │   kostenlos        │      │
│  │ • Änderung nicht   │          │ • Änderung erlaubt │      │
│  │   erlaubt          │          │                    │      │
│  │                    │          │                    │      │
│  │ Beispiele:         │          │ Beispiele:         │      │
│  │ Windows, Office,   │          │ Linux, Firefox,    │      │
│  │ Adobe CC           │          │ LibreOffice        │      │
│  └────────────────────┘          └────────────────────┘      │
│                                                                │
│  FREEWARE             SHAREWARE                               │
│  ┌────────────────────┐          ┌────────────────────┐      │
│  │ Kostenlos nutzbar  │          │ Testversion        │      │
│  │ Quellcode geheim   │          │ Vollversion kosten-│      │
│  │                    │          │ pflichtig          │      │
│  └────────────────────┘          └────────────────────┘      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Lizenzart | Kosten | Quellcode | Beispiele |
|-----------|--------|-----------|-----------|
| **Proprietär** | Kostenpflichtig | Geschlossen | Windows, MS Office |
| **Open Source** | Meist kostenlos | Offen | Linux, Firefox |
| **Freeware** | Kostenlos | Geschlossen | VLC Player |
| **Shareware** | Testphase, dann kostenpflichtig | Geschlossen | WinRAR |

---

### Software-as-a-Service (SaaS)

Neben klassischer Installation gibt es heute **SaaS** - Software aus der Cloud.

| Aspekt | Klassische Software | SaaS |
|--------|--------------------| -----|
| **Installation** | Lokal | Keine (im Browser) |
| **Updates** | Manuell | Automatisch |
| **Zahlung** | Einmalkauf | Abonnement |
| **Zugriff** | Nur am installierten Gerät | Von überall |
| **Beispiele** | MS Office (klassisch) | Microsoft 365 |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Systemsoftware** | Verwaltet Hardware (OS, Treiber) |
| **Anwendungssoftware** | Erfüllt Benutzeraufgaben |
| **Standardsoftware** | Für viele Kunden entwickelt |
| **Individualsoftware** | Maßgeschneidert für einen Kunden |
| **Open Source** | Quellcode offen, frei nutzbar |
| **Proprietär** | Quellcode geschlossen |
| **SaaS** | Software as a Service |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was ist der Unterschied zwischen System- und Anwendungssoftware?
- Nennen Sie Vor- und Nachteile von Standardsoftware
- Was ist Open Source?

### Wichtig zu merken

- **Systemsoftware** = Betriebssystem, Treiber (Hardware-nah)
- **Anwendungssoftware** = Office, ERP, Browser (Benutzer-nah)
- **Standardsoftware** = günstig, schnell verfügbar
- **Individualsoftware** = teurer, maßgeschneidert

---

## Übungsaufgaben

### Aufgabe 1
Ordnen Sie folgende Software zu: Windows 11, SAP, Grafikkartentreiber, LibreOffice

**Lösung:**
| Software | Kategorie |
|----------|-----------|
| Windows 11 | Systemsoftware (Betriebssystem) |
| SAP | Anwendungssoftware (ERP) |
| Grafikkartentreiber | Systemsoftware (Treiber) |
| LibreOffice | Anwendungssoftware (Bürosoftware) |

### Aufgabe 2
Ein Unternehmen benötigt eine Buchhaltungssoftware. Nennen Sie zwei Vorteile von Standardsoftware und zwei Vorteile von Individualsoftware.

**Lösung:**

**Standardsoftware:**
1. **Kosten:** Günstiger, da auf viele Kunden verteilt
2. **Verfügbarkeit:** Sofort einsetzbar, keine Entwicklungszeit

**Individualsoftware:**
1. **Anpassung:** Exakt auf Unternehmensprozesse zugeschnitten
2. **Flexibilität:** Kann jederzeit geändert werden

### Aufgabe 3
Was ist der Unterschied zwischen Open Source und Freeware?

**Lösung:**
- **Open Source:** Quellcode ist offen, kann eingesehen und verändert werden (z.B. Linux)
- **Freeware:** Software ist kostenlos nutzbar, aber der Quellcode ist geschlossen (z.B. VLC)

---

## Querverweise

- [06-07-02 Lizenzarten](../06-07-licenses/06-07-02-license-types.md) - Details zu Lizenzen
- [05-03-01 Betriebssysteme](../../05-it-systems/05-03-operating-systems/05-03-01-fundamentals-operating-systems.md) - Systemsoftware
- [05-08-01 ERP-Systeme](../../05-it-systems/05-08-enterprise-software/05-08-01-erp-systems.md) - Anwendungssoftware
