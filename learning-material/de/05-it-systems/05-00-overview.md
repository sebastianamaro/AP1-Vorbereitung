# IT-Systeme - Kapitelübersicht

## Einführung

Das Kapitel IT-Systeme behandelt die technischen Grundlagen der Informationstechnologie - von Zahlensystemen über Hardware-Komponenten bis hin zu Cloud-Computing und Künstlicher Intelligenz. Diese Themen bilden das Fundament für das Verständnis moderner IT-Infrastrukturen.

---

## Lernziele des Kapitels

Nach Abschluss dieses Kapitels solltest du:
- Zahlensysteme und deren Umrechnung beherrschen
- Hardware-Komponenten und ihre Funktionen kennen
- Betriebssysteme und deren Aufgaben verstehen
- Virtualisierung und Cloud-Computing erklären können
- Backup-Strategien anwenden können
- Grundlagen der Künstlichen Intelligenz kennen [NEU 2025]
- Den EU AI Act verstehen [NEU 2025]
- Unternehmenssoftware (ERP, CRM, SCM) kennen [NEU 2025]

---

## Kapitelstruktur

```
05-IT-SYSTEME
│
├── 05-01 Grundlagen
│   ├── 05-01-01 Bits, Bytes, Zahlensysteme
│   ├── 05-01-02 IEEE 754 (Gleitkommazahlen)
│   └── 05-01-03 Zeichenkodierung
│
├── 05-02 Hardware
│   ├── 05-02-01 Prozessoren
│   ├── 05-02-02 Speicher (RAM)
│   ├── 05-02-03 Datenspeicher (HDD, SSD)
│   ├── 05-02-04 NAS und Verfügbarkeit [NEU 2025]
│   ├── 05-02-05 Schnittstellen
│   ├── 05-02-06 Grafikkarten
│   └── 05-02-07 USV
│
├── 05-03 Betriebssysteme
│   ├── 05-03-01 Grundlagen Betriebssysteme
│   ├── 05-03-02 BIOS/UEFI
│   └── 05-03-03 Kommandozeile
│
├── 05-04 Virtualisierung und Cloud
│   ├── 05-04-01 Virtualisierung
│   ├── 05-04-02 Cloud Computing [ERWEITERT 2025]
│   └── 05-04-03 Virtuelle Desktops
│
├── 05-05 Datensicherung
│   ├── 05-05-01 Backup-Arten
│   └── 05-05-02 Backup-Strategien
│
├── 05-06 Künstliche Intelligenz [NEU 2025 - Hauptthema]
│   ├── 05-06-01 KI-Grundlagen
│   ├── 05-06-02 KI-Anwendungen
│   ├── 05-06-03 KI-Codeassistenten
│   └── 05-06-04 EU AI Act
│
├── 05-07 Industrie 4.0
│
├── 05-08 Unternehmenssoftware [NEU 2025]
│   ├── 05-08-01 ERP-Systeme
│   ├── 05-08-02 CRM und SCM
│   └── 05-08-03 Social Media
│
└── 05-09 Energie und Umwelt
    ├── 05-09-01 Energieeffizienz
    └── 05-09-02 Geräteklassen
```

---

## Neue Themen 2025 - Besonders prüfungsrelevant

| Thema | Beschreibung | Verweis |
|-------|--------------|---------|
| **Künstliche Intelligenz** | KI-Grundlagen, Anwendungen, Code-Assistenten | [05-06](./05-06-artificial-intelligence/) |
| **EU AI Act** | Risikokategorien, Regulierung | [05-06-04](./05-06-artificial-intelligence/05-06-04-eu-ai-act.md) |
| **NAS für Verfügbarkeit** | Ersetzt RAID/SAN im Prüfungskatalog | [05-02-04](./05-02-hardware/05-02-04-nas-availability.md) |
| **ERP/CRM/SCM** | Unternehmenssoftware | [05-08](./05-08-enterprise-software/) |
| **HDD vs. SSD** | Vergleich der Speichertechnologien | [05-02-03](./05-02-hardware/05-02-03-storage-hdd-ssd.md) |

---

## Themen die NICHT mehr im Prüfungskatalog sind

- ~~RAID-Systeme~~ (ersetzt durch NAS)
- ~~SAN-Systeme~~ (ersetzt durch NAS)
- ~~LTE und 5G~~ (entfernt)
- ~~Physikalische Formeln (P=U×I)~~ (entfernt)

---

## Verbindung zu anderen Kapiteln

| Thema | Verweis | Zusammenhang |
|-------|---------|--------------|
| **IT-Sicherheit** | [04-01 CIA-Triade](../04-it-security/04-01-protection-goals/04-01-01-cia-triad.md) | Verfügbarkeit |
| **Datenschutz** | [03-02 TOM](../03-data-protection/03-02-technical-measures/) | Technische Maßnahmen |
| **Software** | [06-01 Softwarearten](../06-software/06-01-fundamentals/) | Betriebssysteme |
| **Netzwerke** | [07-01 OSI-Modell](../07-networks/07-01-network-fundamentals/) | Netzwerk-Hardware |

---

## Zentrale Begriffe des Kapitels

| Begriff | Erklärung |
|---------|-----------|
| **Bit/Byte** | Kleinste Dateneinheiten |
| **CPU** | Central Processing Unit (Prozessor) |
| **RAM** | Random Access Memory (Arbeitsspeicher) |
| **SSD** | Solid State Drive (Flash-Speicher) |
| **NAS** | Network Attached Storage |
| **VM** | Virtuelle Maschine |
| **IaaS/PaaS/SaaS** | Cloud-Service-Modelle |
| **KI/AI** | Künstliche Intelligenz |
| **ERP** | Enterprise Resource Planning |

---

## Prüfungsrelevanz

### Besonders häufig geprüft

1. **Zahlensysteme** - Umrechnung Binär/Dezimal/Hexadezimal
2. **Speicherarten** - RAM vs. ROM, HDD vs. SSD
3. **Cloud-Computing** - IaaS, PaaS, SaaS
4. **Backup-Strategien** - 3-2-1 Regel, Backup-Arten
5. **Künstliche Intelligenz** - Grundlagen und EU AI Act [NEU]

---

## Unterkapitel

1. [Bits, Bytes, Zahlensysteme](./05-01-fundamentals/05-01-01-bits-bytes-number-systems.md)
2. [IEEE 754](./05-01-fundamentals/05-01-02-ieee-754.md)
3. [Zeichenkodierung](./05-01-fundamentals/05-01-03-character-encoding.md)
4. [Prozessoren](./05-02-hardware/05-02-01-processors.md)
5. [Speicher (RAM)](./05-02-hardware/05-02-02-memory-ram.md)
6. [Datenspeicher (HDD, SSD)](./05-02-hardware/05-02-03-storage-hdd-ssd.md)
7. [NAS und Verfügbarkeit](./05-02-hardware/05-02-04-nas-availability.md)
8. [Schnittstellen](./05-02-hardware/05-02-05-interfaces.md)
9. [Grafikkarten](./05-02-hardware/05-02-06-graphics-cards.md)
10. [USV](./05-02-hardware/05-02-07-usv.md)
11. [Grundlagen Betriebssysteme](./05-03-operating-systems/05-03-01-fundamentals-operating-systems.md)
12. [BIOS/UEFI](./05-03-operating-systems/05-03-02-bios-uefi.md)
13. [Kommandozeile](./05-03-operating-systems/05-03-03-command-line.md)
14. [Virtualisierung](./05-04-virtualization-cloud/05-04-01-virtualization.md)
15. [Cloud Computing](./05-04-virtualization-cloud/05-04-02-cloud-computing.md)
16. [Virtuelle Desktops](./05-04-virtualization-cloud/05-04-03-virtual-desktops.md)
17. [Backup-Arten](./05-05-data-backup/05-05-01-backup-types.md)
18. [Backup-Strategien](./05-05-data-backup/05-05-02-backup-strategies.md)
19. [KI-Grundlagen](./05-06-artificial-intelligence/05-06-01-ai-fundamentals.md)
20. [KI-Anwendungen](./05-06-artificial-intelligence/05-06-02-ai-applications.md)
21. [KI-Codeassistenten](./05-06-artificial-intelligence/05-06-03-ai-code-assistants.md)
22. [EU AI Act](./05-06-artificial-intelligence/05-06-04-eu-ai-act.md)
23. [Industrie 4.0](./05-07-industry-40.md)
24. [ERP-Systeme](./05-08-enterprise-software/05-08-01-erp-systems.md)
25. [CRM und SCM](./05-08-enterprise-software/05-08-02-crm-scm.md)
26. [Social Media](./05-08-enterprise-software/05-08-03-social-media.md)
27. [Energieeffizienz](./05-09-energy-environment/05-09-01-energy-efficiency.md)
28. [Geräteklassen](./05-09-energy-environment/05-09-02-device-classes.md)
