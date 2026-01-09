# Netzwerk-Hardware

## Lernziele

Nach diesem Kapitel solltest du:
- Die wichtigsten Netzwerkgeräte kennen
- Die Unterschiede zwischen Hub, Switch und Router verstehen
- Geräte den OSI-Schichten zuordnen können
- Die Funktionsweise der Geräte erklären können

---

## Kerninhalt

### Übersicht Netzwerkgeräte

```
┌────────────────────────────────────────────────────────────────────┐
│                   NETZWERK-HARDWARE ÜBERBLICK                      │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │                                                              │ │
│   │   OSI-Schicht │ Gerät          │ Arbeitet mit               │ │
│   │   ────────────┼────────────────┼────────────────────────────│ │
│   │   Schicht 1   │ Hub, Repeater  │ Bits, Signale              │ │
│   │   Schicht 2   │ Switch, Bridge │ MAC-Adressen, Frames       │ │
│   │   Schicht 3   │ Router         │ IP-Adressen, Pakete        │ │
│   │   Schicht 7   │ Gateway        │ Anwendungsprotocols       │ │
│   │                                                              │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   Wichtigste Unterscheidung:                                       │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │                                                              │ │
│   │   HUB      →  Sendet an ALLE Ports (dumm)                   │ │
│   │   SWITCH   →  Sendet nur an Ziel-Port (intelligent)         │ │
│   │   ROUTER   →  Verbindet verschiedene Netzwerke              │ │
│   │                                                              │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Hub (Schicht 1)

```
┌────────────────────────────────────────────────────────────────────┐
│                          HUB                                       │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   OSI-Schicht: 1 (Bitübertragung)                                 │
│                                                                     │
│   Funktionsweise:                                                  │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │                                                              │ │
│   │   Ein Hub empfängt ein Signal und LEITET ES AN ALLE         │ │
│   │   anderen Ports weiter (Broadcast).                         │ │
│   │                                                              │ │
│   │        PC A          PC B          PC C          PC D       │ │
│   │          │            │             │             │         │ │
│   │          ↓            ↓             ↓             ↓         │ │
│   │   ┌──────┴────────────┴─────────────┴─────────────┴──────┐  │ │
│   │   │                      HUB                              │  │ │
│   │   └───────────────────────────────────────────────────────┘  │ │
│   │                                                              │ │
│   │   PC A sendet an PC C:                                      │ │
│   │   → Hub sendet an B, C UND D                               │ │
│   │   → Nur C verarbeitet das Paket                            │ │
│   │                                                              │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   Eigenschaften:                                                   │
│   • "Dummes" Gerät - keine Intelligenz                            │
│   • Alle Geräte teilen sich die Bandbreite (Kollisionsdomäne)     │
│   • Erzeugt unnötigen Netzwerkverkehr                             │
│   • Sicherheitsrisiko (alle sehen alle Pakete)                    │
│   • Heute VERALTET - durch Switches ersetzt                       │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Switch (Schicht 2)

```
┌────────────────────────────────────────────────────────────────────┐
│                         SWITCH                                     │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   OSI-Schicht: 2 (Sicherung)                                      │
│                                                                     │
│   Funktionsweise:                                                  │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │                                                              │ │
│   │   Ein Switch lernt MAC-Adressen und leitet Pakete nur       │ │
│   │   an den Port weiter, an dem das Zielgerät angeschlossen   │ │
│   │   ist.                                                       │ │
│   │                                                              │ │
│   │        PC A          PC B          PC C          PC D       │ │
│   │     MAC: AA        MAC: BB      MAC: CC       MAC: DD       │ │
│   │          │            │             │             │         │ │
│   │          ↓            ↓             ↓             ↓         │ │
│   │   ┌──────┴────────────┴─────────────┴─────────────┴──────┐  │ │
│   │   │                    SWITCH                             │  │ │
│   │   │   MAC-Tabelle:                                        │  │ │
│   │   │   Port 1 → AA                                         │  │ │
│   │   │   Port 2 → BB                                         │  │ │
│   │   │   Port 3 → CC                                         │  │ │
│   │   │   Port 4 → DD                                         │  │ │
│   │   └───────────────────────────────────────────────────────┘  │ │
│   │                                                              │ │
│   │   PC A sendet an PC C:                                      │ │
│   │   → Switch sendet NUR an Port 3 (wo CC ist)                │ │
│   │   → B und D bekommen nichts                                │ │
│   │                                                              │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   Eigenschaften:                                                   │
│   • Arbeitet mit MAC-Adressen                                     │
│   • Jeder Port hat eigene Kollisionsdomäne (volle Bandbreite)     │
│   • Lernt automatisch (MAC-Adress-Tabelle)                        │
│   • Keine Broadcasts an alle Ports (nur an Ziel)                  │
│   • Standard in modernen Netzwerken                               │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Router (Schicht 3)

```
┌────────────────────────────────────────────────────────────────────┐
│                         ROUTER                                     │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   OSI-Schicht: 3 (Vermittlung)                                    │
│                                                                     │
│   Funktionsweise:                                                  │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │                                                              │ │
│   │   Ein Router verbindet verschiedene Netzwerke und          │ │
│   │   leitet Pakete anhand von IP-Adressen weiter.             │ │
│   │                                                              │ │
│   │   Netzwerk A                    Netzwerk B                  │ │
│   │   192.168.1.0/24                192.168.2.0/24              │ │
│   │                                                              │ │
│   │   ┌────┐  ┌────┐            ┌────┐  ┌────┐                 │ │
│   │   │ PC │  │ PC │            │ PC │  │ PC │                 │ │
│   │   │.10 │  │.20 │            │.10 │  │.20 │                 │ │
│   │   └──┬─┘  └──┬─┘            └──┬─┘  └──┬─┘                 │ │
│   │      └───┬───┘                 └───┬───┘                    │ │
│   │          │                         │                        │ │
│   │          │      ┌─────────┐       │                        │ │
│   │          └──────│  ROUTER │───────┘                        │ │
│   │                 │ .1    .1│                                 │ │
│   │                 └─────────┘                                 │ │
│   │                                                              │ │
│   │   Router hat IP in jedem Netzwerk (Default Gateway)        │ │
│   │                                                              │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   Eigenschaften:                                                   │
│   • Arbeitet mit IP-Adressen                                      │
│   • Verbindet unterschiedliche Netzwerke (z.B. LAN ↔ Internet)   │
│   • Verwendet Routing-Tabellen                                    │
│   • Trennt Broadcast-Domänen                                      │
│   • Oft integriert mit DHCP, NAT, Firewall                       │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Vergleich Hub - Switch - Router

```
┌────────────────────────────────────────────────────────────────────┐
│              HUB vs. SWITCH vs. ROUTER                             │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Eigenschaft    │ Hub        │ Switch     │ Router               │
│   ───────────────┼────────────┼────────────┼─────────────────────│
│   OSI-Schicht    │ 1          │ 2          │ 3                    │
│   Adressierung   │ Keine      │ MAC        │ IP                   │
│   Weiterleitung  │ Alle Ports │ Nur Ziel   │ Nur Ziel-Netzwerk   │
│   Intelligenz    │ Keine      │ Mittel     │ Hoch                 │
│   Broadcast      │ Ja         │ Ja         │ Nein (trennt)        │
│   Netzwerke      │ 1          │ 1          │ Mehrere              │
│   Bandbreite     │ Geteilt    │ Pro Port   │ Pro Interface        │
│   Preis          │ Günstig    │ Mittel     │ Höher                │
│   Status         │ Veraltet   │ Standard   │ Standard             │
│                                                                     │
│   Einsatzbereich:                                                  │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ Hub:    Nicht mehr empfohlen                                │ │
│   │ Switch: Innerhalb eines Netzwerks (LAN)                     │ │
│   │ Router: Zwischen Netzwerken (LAN ↔ WAN/Internet)           │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Weitere Netzwerkgeräte

```
┌────────────────────────────────────────────────────────────────────┐
│                  WEITERE NETZWERKGERÄTE                            │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   ACCESS POINT (AP)                                               │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Verbindet WLAN-Geräte mit dem LAN                        │  │
│   │ • Arbeitet auf Schicht 2                                   │  │
│   │ • Oft in Router integriert (WLAN-Router)                   │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   REPEATER                                                        │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Verstärkt Signale                                        │  │
│   │ • Erhöht Reichweite                                        │  │
│   │ • Schicht 1                                                │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   BRIDGE                                                          │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Verbindet zwei Netzwerksegmente                          │  │
│   │ • Arbeitet mit MAC-Adressen                                │  │
│   │ • Schicht 2 (wie Switch, aber nur 2 Ports)                │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   MODEM                                                           │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Modulator/Demodulator                                    │  │
│   │ • Wandelt digitale Signale ↔ analoge Signale             │  │
│   │ • Für DSL-, Kabel-, Glasfaser-Anschlüsse                  │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   FIREWALL                                                        │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Filtert Netzwerkverkehr nach Regeln                      │  │
│   │ • Schützt vor unerwünschtem Zugriff                        │  │
│   │ • Hardware oder Software                                   │  │
│   │ • Oft in Router integriert                                 │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Hub** | Verteilt Signale an alle Ports (Schicht 1) |
| **Switch** | Leitet an Ziel-Port weiter (Schicht 2) |
| **Router** | Verbindet Netzwerke (Schicht 3) |
| **Access Point** | WLAN-Zugangspunkt |
| **MAC-Tabelle** | Zuordnung MAC-Adresse ↔ Port |
| **Routing-Tabelle** | Zuordnung Netzwerk ↔ Schnittstelle |
| **Default Gateway** | Router-IP für externe Kommunikation |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Unterschied Hub vs. Switch?
- Welcher OSI-Schicht gehört ein Router an?
- Was ist ein Default Gateway?

### Wichtig zu merken

- **Hub** = Schicht 1, sendet an ALLE
- **Switch** = Schicht 2, MAC-Adressen, nur Ziel-Port
- **Router** = Schicht 3, IP-Adressen, verbindet Netzwerke
- **Hub ist veraltet** - heute immer Switch
- **Default Gateway** = Router-IP für Zugang zum Internet

---

## Übungsaufgaben

### Aufgabe 1
Warum sind Switches besser als Hubs?

**Lösung:**
Switches sind besser, weil:
- Sie nur an den **Ziel-Port** senden (Hub: an alle)
- Jeder Port hat **eigene Bandbreite** (Hub: geteilte Bandbreite)
- **Weniger Kollisionen** und Netzwerkverkehr
- **Sicherer** - andere sehen Pakete nicht
- **Höhere Performance** im Netzwerk

### Aufgabe 2
Ordnen Sie zu: Hub, Switch, Router - welcher OSI-Schicht?

**Lösung:**
- **Hub:** Schicht 1 (Bitübertragung)
- **Switch:** Schicht 2 (Sicherung)
- **Router:** Schicht 3 (Vermittlung)

### Aufgabe 3
Wann braucht man einen Router statt eines Switches?

**Lösung:**
Ein Router wird benötigt, wenn:
- **Verschiedene Netzwerke** verbunden werden sollen
- Zugang zum **Internet** benötigt wird
- **IP-Routing** zwischen Subnetzen erforderlich ist
- **Broadcast-Domänen** getrennt werden sollen

Ein Switch reicht aus, wenn alle Geräte im **gleichen Netzwerk** sind.

---

## Querverweise

- [07-01-01 OSI-Modell](./07-01-network-fundamentals/07-01-01-osi-model.md) - Schichtenzuordnung
- [07-02-01 IPv4](./07-02-ip-addressing/07-02-01-ipv4.md) - IP-Adressen für Router
- [07-03-01 WLAN-Grundlagen](./07-03-wlan/07-03-01-wlan-fundamentals.md) - Access Points
- [04-03-04 Personal Firewall](../04-it-security/04-03-protective-measures/04-03-04-personal-firewall.md) - Firewalls
