# Subnetting

## Lernziele

Nach diesem Kapitel solltest du:
- Den Zweck von Subnetting verstehen
- Subnetze berechnen können
- Die Anzahl verfügbarer Hosts ermitteln können
- Netzwerk- und Broadcast-Adressen bestimmen können

---

## Kerninhalt

### Was ist Subnetting?

```
┌────────────────────────────────────────────────────────────────────┐
│                       SUBNETTING                                   │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Definition:                                                      │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ Subnetting ist die Aufteilung eines größeren Netzwerks     │ │
│   │ in mehrere kleinere Teilnetworks (Subnetze).              │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   Vorher: Ein großes Netzwerk                                      │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ 192.168.0.0/24 (254 Hosts)                                  │ │
│   │ ┌───────────────────────────────────────────────────────┐  │ │
│   │ │  PC  PC  PC  PC  PC  PC  PC  PC  PC  PC  PC  PC ...  │  │ │
│   │ └───────────────────────────────────────────────────────┘  │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   Nachher: Mehrere kleine Subnetze                                │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ 192.168.0.0/26 (62 Hosts)  192.168.0.64/26 (62 Hosts)      │ │
│   │ ┌─────────────────────┐    ┌─────────────────────┐         │ │
│   │ │  PC  PC  PC  PC ... │    │  PC  PC  PC  PC ... │         │ │
│   │ └─────────────────────┘    └─────────────────────┘         │ │
│   │                                                              │ │
│   │ 192.168.0.128/26 (62 Hosts) 192.168.0.192/26 (62 Hosts)    │ │
│   │ ┌─────────────────────┐    ┌─────────────────────┐         │ │
│   │ │  PC  PC  PC  PC ... │    │  PC  PC  PC  PC ... │         │ │
│   │ └─────────────────────┘    └─────────────────────┘         │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Gründe für Subnetting

```
┌────────────────────────────────────────────────────────────────────┐
│                  WARUM SUBNETTING?                                 │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   1. SICHERHEIT                                                    │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Trennung verschiedener Bereiche                          │  │
│   │ • Buchhaltung getrennt von Produktion                     │  │
│   │ • Gäste-WLAN vom internen Netz trennen                    │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   2. PERFORMANCE                                                   │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Kleinere Broadcast-Domänen                               │  │
│   │ • Weniger unnötiger Netzwerkverkehr                        │  │
│   │ • Broadcasts bleiben im Subnetz                            │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   3. ORGANISATION                                                  │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Logische Struktur (Abteilungen, Stockwerke)              │  │
│   │ • Bessere Übersicht                                        │  │
│   │ • Einfachere Verwaltung                                    │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   4. EFFIZIENTE NUTZUNG                                           │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • IP-Adressen optimal verteilen                            │  │
│   │ • Keine Verschwendung von Adressen                         │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Subnetzmaske verstehen

```
┌────────────────────────────────────────────────────────────────────┐
│                    SUBNETZMASKE                                    │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Die Subnetzmaske trennt Netzwerk- und Hostanteil:               │
│                                                                     │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │                                                              │ │
│   │   IP-Adresse:    192.168.1.100                              │ │
│   │   Subnetzmaske:  255.255.255.0                              │ │
│   │                                                              │ │
│   │   Binär:                                                     │ │
│   │   IP:    11000000.10101000.00000001.01100100                │ │
│   │   Maske: 11111111.11111111.11111111.00000000                │ │
│   │          ────────────────────────── ────────                │ │
│   │              Netzwerk (24 Bit)      Host (8 Bit)            │ │
│   │                                                              │ │
│   │   UND-Verknüpfung ergibt Netzwerkadresse:                   │ │
│   │   IP:    11000000.10101000.00000001.01100100                │ │
│   │   Maske: 11111111.11111111.11111111.00000000                │ │
│   │   ──────────────────────────────────────────                │ │
│   │   Netz:  11000000.10101000.00000001.00000000                │ │
│   │          = 192.168.1.0 (Netzwerkadresse)                    │ │
│   │                                                              │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   Wichtige Masken:                                                 │
│   ┌───────────────────────────────────────────────────────────┐  │
│   │ /24 = 255.255.255.0   → 254 Hosts                         │  │
│   │ /25 = 255.255.255.128 → 126 Hosts                         │  │
│   │ /26 = 255.255.255.192 →  62 Hosts                         │  │
│   │ /27 = 255.255.255.224 →  30 Hosts                         │  │
│   │ /28 = 255.255.255.240 →  14 Hosts                         │  │
│   └───────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Berechnungsformeln

```
┌────────────────────────────────────────────────────────────────────┐
│                    BERECHNUNGEN                                    │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   ANZAHL DER HOSTS                                                │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │                                                             │  │
│   │   Hosts = 2^(Hostbits) - 2                                 │  │
│   │                                                             │  │
│   │   Die 2 werden abgezogen für:                              │  │
│   │   • Netzwerkadresse (alle Host-Bits = 0)                   │  │
│   │   • Broadcast-Adresse (alle Host-Bits = 1)                 │  │
│   │                                                             │  │
│   │   Beispiel /26:                                            │  │
│   │   Hostbits = 32 - 26 = 6                                   │  │
│   │   Hosts = 2^6 - 2 = 64 - 2 = 62                           │  │
│   │                                                             │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   ANZAHL DER SUBNETZE                                             │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │                                                             │  │
│   │   Subnetze = 2^(Zusätzliche Netzwerk-Bits)                 │  │
│   │                                                             │  │
│   │   Beispiel: /24 wird zu /26                                │  │
│   │   Zusätzliche Bits = 26 - 24 = 2                           │  │
│   │   Subnetze = 2^2 = 4                                       │  │
│   │                                                             │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   SCHRITTGRÖSSE (Increment)                                       │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │                                                             │  │
│   │   Schrittgröße = 256 - Wert des letzten Masken-Oktetts    │  │
│   │                                                             │  │
│   │   Beispiel /26: Maske = 255.255.255.192                    │  │
│   │   Schrittgröße = 256 - 192 = 64                            │  │
│   │                                                             │  │
│   │   Subnetze: .0, .64, .128, .192                            │  │
│   │                                                             │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Beispielrechnung

```
┌────────────────────────────────────────────────────────────────────┐
│                 BEISPIEL: 192.168.1.0/26                           │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Gegeben: 192.168.1.0/26                                         │
│   Subnetzmaske: 255.255.255.192                                   │
│                                                                     │
│   Schritt 1: Hostbits berechnen                                   │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Hostbits = 32 - 26 = 6 Bits                                │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   Schritt 2: Anzahl Hosts berechnen                               │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Hosts = 2^6 - 2 = 64 - 2 = 62 nutzbare Hosts              │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   Schritt 3: Schrittgröße berechnen                               │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Schrittgröße = 256 - 192 = 64                              │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   Schritt 4: Subnetze bestimmen                                   │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │                                                             │  │
│   │ Subnetz 1: 192.168.1.0/26                                  │  │
│   │   Netzwerkadresse:  192.168.1.0                            │  │
│   │   Erster Host:      192.168.1.1                            │  │
│   │   Letzter Host:     192.168.1.62                           │  │
│   │   Broadcast:        192.168.1.63                           │  │
│   │                                                             │  │
│   │ Subnetz 2: 192.168.1.64/26                                 │  │
│   │   Netzwerkadresse:  192.168.1.64                           │  │
│   │   Erster Host:      192.168.1.65                           │  │
│   │   Letzter Host:     192.168.1.126                          │  │
│   │   Broadcast:        192.168.1.127                          │  │
│   │                                                             │  │
│   │ Subnetz 3: 192.168.1.128/26                                │  │
│   │   Netzwerkadresse:  192.168.1.128                          │  │
│   │   Erster Host:      192.168.1.129                          │  │
│   │   Letzter Host:     192.168.1.190                          │  │
│   │   Broadcast:        192.168.1.191                          │  │
│   │                                                             │  │
│   │ Subnetz 4: 192.168.1.192/26                                │  │
│   │   Netzwerkadresse:  192.168.1.192                          │  │
│   │   Erster Host:      192.168.1.193                          │  │
│   │   Letzter Host:     192.168.1.254                          │  │
│   │   Broadcast:        192.168.1.255                          │  │
│   │                                                             │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Schnellreferenz: CIDR-Tabelle

```
┌────────────────────────────────────────────────────────────────────┐
│                   CIDR-SCHNELLREFERENZ                             │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   CIDR │ Maske           │ Hosts │ Schritt │ Subnetze aus /24     │
│   ─────┼─────────────────┼───────┼─────────┼─────────────────────  │
│   /24  │ 255.255.255.0   │  254  │   256   │  1                   │
│   /25  │ 255.255.255.128 │  126  │   128   │  2                   │
│   /26  │ 255.255.255.192 │   62  │    64   │  4                   │
│   /27  │ 255.255.255.224 │   30  │    32   │  8                   │
│   /28  │ 255.255.255.240 │   14  │    16   │ 16                   │
│   /29  │ 255.255.255.248 │    6  │     8   │ 32                   │
│   /30  │ 255.255.255.252 │    2  │     4   │ 64                   │
│   /31  │ 255.255.255.254 │    0* │     2   │ 128 (Point-to-Point) │
│   /32  │ 255.255.255.255 │    1  │     1   │ 256 (einzelner Host) │
│                                                                     │
│   * /31 wird für Point-to-Point-Verbindungen verwendet            │
│                                                                     │
│   Zum Merken (letztes Oktett der Maske):                          │
│   ┌───────────────────────────────────────────────────────────┐  │
│   │ 128 → /25                                                  │  │
│   │ 192 → /26 (128 + 64)                                       │  │
│   │ 224 → /27 (128 + 64 + 32)                                  │  │
│   │ 240 → /28 (128 + 64 + 32 + 16)                             │  │
│   │ 248 → /29 (128 + 64 + 32 + 16 + 8)                         │  │
│   │ 252 → /30 (128 + 64 + 32 + 16 + 8 + 4)                     │  │
│   └───────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Subnetz** | Teilnetzwerk eines größeren Netzwerks |
| **Subnetzmaske** | Bestimmt Netzwerk-/Hostanteil |
| **CIDR** | Classless Inter-Domain Routing (/24) |
| **Netzwerkadresse** | Alle Host-Bits = 0 |
| **Broadcast-Adresse** | Alle Host-Bits = 1 |
| **Schrittgröße** | Abstand zwischen Subnetzen |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Wie viele Hosts bei /26?
- In welchem Subnetz liegt eine IP?
- Wie viele Subnetze aus /24 bei /27?

### Wichtig zu merken

- **Hosts = 2^Hostbits - 2**
- **/24** = 254 Hosts, **/25** = 126, **/26** = 62
- **Schrittgröße** = 256 - Masken-Oktett
- Netzwerk- und Broadcast-Adresse **NICHT nutzbar**
- /30 = 2 Hosts (für Router-Verbindungen)

---

## Übungsaufgaben

### Aufgabe 1
Wie viele nutzbare Hosts hat ein /27-Netzwerk?

**Lösung:**
Hostbits = 32 - 27 = 5
Hosts = 2^5 - 2 = 32 - 2 = **30 nutzbare Hosts**

### Aufgabe 2
In welchem Subnetz liegt die IP 192.168.10.200 bei /26?

**Lösung:**
Schrittgröße bei /26: 256 - 192 = 64
Subnetze: .0, .64, .128, .192

200 liegt zwischen 192 und 255 → **Subnetz 192.168.10.192/26**

- Netzwerkadresse: 192.168.10.192
- Broadcast: 192.168.10.255

### Aufgabe 3
Ein Unternehmen benötigt 50 Hosts pro Abteilung. Welche Subnetzmaske ist geeignet?

**Lösung:**
50 Hosts benötigt → mindestens 50 + 2 = 52 Adressen

- /26 = 62 Hosts ✓ (passend)
- /27 = 30 Hosts ✗ (zu wenig)

Antwort: **/26** (255.255.255.192)

---

## Querverweise

- [07-02-01 IPv4](./07-02-01-ipv4.md) - IPv4-Grundlagen
- [07-02-04 DHCP](./07-02-04-dhcp.md) - IP-Adressvergabe
- [05-01-01 Bits, Bytes, Zahlensysteme](../../05-it-systems/05-01-fundamentals/05-01-01-bits-bytes-number-systems.md) - Binärrechnung
