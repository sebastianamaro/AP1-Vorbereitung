# Netzwerke - Übersicht

## Kapitelstruktur

Dieses Kapitel behandelt alle prüfungsrelevanten Themen zu Netzwerken und Kommunikation:

### 07-01 Netzwerkfundamentals
- [07-01-01 OSI-Modell](./07-01-network-fundamentals/07-01-01-osi-model.md)
- [07-01-02 TCP/IP-Modell](./07-01-network-fundamentals/07-01-02-tcp-ip-model.md)
- [07-01-03 Protokolle](./07-01-network-fundamentals/07-01-03-protocols.md)

### 07-02 IP-Adressierung
- [07-02-01 IPv4](./07-02-ip-addressing/07-02-01-ipv4.md) (erweitert 2025)
- [07-02-02 IPv6](./07-02-ip-addressing/07-02-02-ipv6.md) **[NEU 2025]**
- [07-02-03 Subnetting](./07-02-ip-addressing/07-02-03-subnetting.md)
- [07-02-04 DHCP](./07-02-ip-addressing/07-02-04-dhcp.md)

### 07-03 WLAN
- [07-03-01 WLAN-Grundlagen](./07-03-wlan/07-03-01-wlan-fundamentals.md)

### 07-04 Verkabelung
- [07-04-01 Strukturierte Verkabelung](./07-04-cabling/07-04-01-structured-cabling.md)
- [07-04-02 Kupferkabel](./07-04-cabling/07-04-02-copper-cables.md)

### 07-05 Netzwerk-Hardware
- [07-05-network-hardware.md](./07-05-network-hardware.md)

### 07-06 Datenübertragung
- [07-06-01 Übertragungsraten](./07-06-data-transmission/07-06-01-transmission-rates.md) **[NEU 2025]**

### 07-07 Netzwerk-Troubleshooting
- [07-07-01 Diagnose-Tools](./07-07-network-troubleshooting/07-07-01-diagnostic-tools.md)
- [07-07-02 Fehlersuche](./07-07-network-troubleshooting/07-07-02-troubleshooting.md)

### 07-08 Fernwartung
- [07-08-remote-maintenance.md](./07-08-remote-maintenance.md)

### 07-09 Domänenintegration
- [07-09-domain-integration.md](./07-09-domain-integration.md) **[NEU 2025]**

---

## Prüfungsrelevanz

```
┌────────────────────────────────────────────────────────────────────┐
│                     PRÜFUNGSRELEVANZ                               │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   SEHR HOCH (kommt fast immer vor)                                │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • OSI-Modell und Schichtenzuordnung                        │  │
│   │ • IPv4-Adressierung und Subnetting                         │  │
│   │ • IPv6-Grundlagen (NEU 2025)                               │  │
│   │ • Netzwerk-Hardware (Switch, Router, Access Point)         │  │
│   │ • Übertragungsraten berechnen (NEU 2025)                   │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   HOCH                                                             │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • DHCP-Funktion                                            │  │
│   │ • WLAN-Sicherheit                                          │  │
│   │ • Domänenintegration (NEU 2025)                            │  │
│   │ • Protokolle und Ports                                     │  │
│   │ • Diagnose-Tools (ping, ipconfig)                          │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   MITTEL                                                           │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Strukturierte Verkabelung                                │  │
│   │ • Kabelkategorien                                          │  │
│   │ • Fernwartung                                              │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   ⚠ NICHT MEHR RELEVANT (aus Prüfungskatalog 2025 entfernt)      │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • LTE und 5G Mobilfunktechnologien                         │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

## Themenübersicht

```
┌────────────────────────────────────────────────────────────────────┐
│                    NETZWERK-THEMEN IM ÜBERBLICK                    │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│                       ┌─────────────────┐                          │
│                       │   NETZWERKE     │                          │
│                       └────────┬────────┘                          │
│                                │                                    │
│    ┌───────────────────────────┼───────────────────────────┐       │
│    │                           │                           │       │
│    ▼                           ▼                           ▼       │
│ ┌──────────┐           ┌──────────────┐            ┌──────────┐   │
│ │ MODELLE  │           │ ADRESSIERUNG │            │ HARDWARE │   │
│ ├──────────┤           ├──────────────┤            ├──────────┤   │
│ │• OSI     │           │• IPv4        │            │• Switch  │   │
│ │• TCP/IP  │           │• IPv6 (NEU)  │            │• Router  │   │
│ │• Schichten│          │• Subnetting  │            │• Access  │   │
│ │• Protokolle│         │• DHCP        │            │  Point   │   │
│ └──────────┘           └──────────────┘            └──────────┘   │
│                                                                     │
│    ┌───────────────────────────┬───────────────────────────┐       │
│    │                           │                           │       │
│    ▼                           ▼                           ▼       │
│ ┌──────────┐           ┌──────────────┐            ┌──────────┐   │
│ │VERKABELUNG│          │   WLAN       │            │ADMIN/OPS │   │
│ ├──────────┤           ├──────────────┤            ├──────────┤   │
│ │• Primär  │           │• Standards   │            │• Diagnose│   │
│ │• Sekundär│           │• Sicherheit  │            │• Fernwart│   │
│ │• Tertiär │           │• Frequenzen  │            │• Domäne  │   │
│ │• Kategorien│         │              │            │  (NEU)   │   │
│ └──────────┘           └──────────────┘            └──────────┘   │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

## Wichtige Neuerungen 2025

| Thema | Status | Details |
|-------|--------|---------|
| **IPv6** | NEU | Grundlagen, Aufbau, Unterschiede zu IPv4 |
| **Übertragungsraten** | NEU | Berechnungen mit Bit/s, Byte/s |
| **Domänenintegration** | NEU | PC in Domäne aufnehmen |
| LTE/5G | ENTFERNT | Nicht mehr prüfungsrelevant |

---

## Lernstrategie für dieses Kapitel

```
┌────────────────────────────────────────────────────────────────────┐
│                      LERNSTRATEGIE                                 │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   1. GRUNDLAGEN VERSTEHEN                                          │
│      • OSI-Modell auswendig lernen (7 Schichten)                  │
│      • TCP/IP-Modell verstehen                                    │
│      • Protokolle den Schichten zuordnen können                   │
│                                                                     │
│   2. IP-ADRESSIERUNG ÜBEN                                         │
│      • IPv4-Adressen lesen und interpretieren                     │
│      • Subnetting-Aufgaben rechnen                                │
│      • IPv6-Notation verstehen (NEU 2025)                         │
│                                                                     │
│   3. PRAXISBEZUG HERSTELLEN                                       │
│      • Diagnose-Tools am eigenen PC ausprobieren                  │
│      • ipconfig, ping, tracert ausführen                          │
│      • WLAN-Einstellungen analysieren                             │
│                                                                     │
│   4. BERECHNUNGEN ÜBEN (NEU 2025)                                 │
│      • Übertragungsraten umrechnen                                │
│      • Bit ↔ Byte Konvertierung                                   │
│      • Übertragungszeit berechnen                                 │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

## Querverweise zu anderen Kapiteln

- [04-03-04 Personal Firewall](../04-it-security/04-03-protective-measures/04-03-04-personal-firewall.md) - Netzwerksicherheit
- [05-04-02 Cloud Computing](../05-it-systems/05-04-virtualization-cloud/05-04-02-cloud-computing.md) - Cloud-Vernetzung
- [05-02-04 NAS](../05-it-systems/05-02-hardware/05-02-04-nas-availability.md) - Netzwerkspeicher
