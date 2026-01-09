# TCP/IP-Modell

## Lernziele

Nach diesem Kapitel solltest du:
- Die 4 Schichten des TCP/IP-Modells kennen
- Die Unterschiede zum OSI-Modell verstehen
- Die praktische Bedeutung des TCP/IP-Modells erkennen
- Protokolle den TCP/IP-Schichten zuordnen können

---

## Kerninhalt

### Was ist das TCP/IP-Modell?

```
┌────────────────────────────────────────────────────────────────────┐
│                      TCP/IP-MODELL                                 │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   TCP/IP = Transmission Control Protocol / Internet Protocol       │
│                                                                     │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ Das TCP/IP-Modell ist das PRAKTISCHE Referenzmodell des     │ │
│   │ Internets. Es entstand parallel zum OSI-Modell und ist      │ │
│   │ die Grundlage der heutigen Internetcommunication.           │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   Unterschied zum OSI-Modell:                                      │
│   ┌────────────────────────────┬───────────────────────────────┐  │
│   │ OSI-Modell                 │ TCP/IP-Modell                 │  │
│   ├────────────────────────────┼───────────────────────────────┤  │
│   │ Theoretisches Referenz-    │ Praktische Implementierung    │  │
│   │ modell                     │                               │  │
│   │ 7 Schichten                │ 4 Schichten                   │  │
│   │ Nach Protokollen entworfen │ Aus Protokollen entstanden    │  │
│   │ Selten exakt implementiert │ Tatsächlich im Einsatz        │  │
│   └────────────────────────────┴───────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Die 4 TCP/IP-Schichten

```
┌────────────────────────────────────────────────────────────────────┐
│                   DIE 4 TCP/IP-SCHICHTEN                           │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │  4  │  ANWENDUNGSSCHICHT (Application Layer)               │  │
│   │     │  ────────────────────────────────────────────────    │  │
│   │     │  • Entspricht OSI-Schichten 5, 6, 7                  │  │
│   │     │  • Anwendungsprotocols für den Nutzer               │  │
│   │     │                                                       │  │
│   │     │  Protokolle: HTTP, HTTPS, FTP, SMTP, POP3, IMAP,    │  │
│   │     │              DNS, DHCP, SSH, Telnet, SNMP            │  │
│   └────────────────────────────────────────────────────────────┘  │
│                              ↓                                     │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │  3  │  TRANSPORTSCHICHT (Transport Layer)                  │  │
│   │     │  ────────────────────────────────────────────────    │  │
│   │     │  • Entspricht OSI-Schicht 4                          │  │
│   │     │  • Ende-zu-Ende-Kommunikation                        │  │
│   │     │  • Port-Adressierung                                 │  │
│   │     │                                                       │  │
│   │     │  Protokolle: TCP (zuverlässig)                       │  │
│   │     │              UDP (schnell, unzuverlässig)            │  │
│   └────────────────────────────────────────────────────────────┘  │
│                              ↓                                     │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │  2  │  INTERNETSCHICHT (Internet Layer)                    │  │
│   │     │  ────────────────────────────────────────────────    │  │
│   │     │  • Entspricht OSI-Schicht 3                          │  │
│   │     │  • IP-Adressierung und Routing                       │  │
│   │     │                                                       │  │
│   │     │  Protokolle: IPv4, IPv6, ICMP, ARP                   │  │
│   └────────────────────────────────────────────────────────────┘  │
│                              ↓                                     │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │  1  │  NETZZUGANGSSCHICHT (Network Access Layer)           │  │
│   │     │  ────────────────────────────────────────────────    │  │
│   │     │  • Entspricht OSI-Schichten 1 und 2                  │  │
│   │     │  • Physische Übertragung                             │  │
│   │     │                                                       │  │
│   │     │  Technologien: Ethernet, WLAN, DSL                   │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### OSI vs. TCP/IP: Schichtenzuordnung

```
┌────────────────────────────────────────────────────────────────────┐
│              OSI-MODELL vs. TCP/IP-MODELL                          │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│        OSI-Modell                       TCP/IP-Modell              │
│   ┌─────────────────────┐                                          │
│   │ 7  Anwendung        │ ─┐                                       │
│   ├─────────────────────┤  │         ┌─────────────────────┐      │
│   │ 6  Darstellung      │ ─┼───────→ │ 4  Anwendung        │      │
│   ├─────────────────────┤  │         │    (Application)    │      │
│   │ 5  Sitzung          │ ─┘         └─────────────────────┘      │
│   ├─────────────────────┤            ┌─────────────────────┐      │
│   │ 4  Transport        │ ─────────→ │ 3  Transport        │      │
│   │                     │            │    (Transport)      │      │
│   ├─────────────────────┤            └─────────────────────┘      │
│   │ 3  Vermittlung      │ ─────────→ ┌─────────────────────┐      │
│   │                     │            │ 2  Internet         │      │
│   ├─────────────────────┤            └─────────────────────┘      │
│   │ 2  Sicherung        │ ─┐         ┌─────────────────────┐      │
│   ├─────────────────────┤  ├───────→ │ 1  Netzzugang       │      │
│   │ 1  Bitübertragung   │ ─┘         │    (Network Access) │      │
│   └─────────────────────┘            └─────────────────────┘      │
│                                                                     │
│   7 Schichten                        4 Schichten                   │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### TCP vs. UDP

```
┌────────────────────────────────────────────────────────────────────┐
│                       TCP vs. UDP                                  │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   TCP (Transmission Control Protocol)                              │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │                                                             │  │
│   │  ┌─────┐     ┌─────────────────────────────┐    ┌─────┐   │  │
│   │  │ A   │ ←── │ Verbindungsaufbau (3-Way)  │ ──→│ B   │   │  │
│   │  │     │ ──→ │ Daten mit Bestätigung (ACK)│ ←──│     │   │  │
│   │  │     │ ←── │ Verbindungsabbau           │ ──→│     │   │  │
│   │  └─────┘     └─────────────────────────────┘    └─────┘   │  │
│   │                                                             │  │
│   │  • Verbindungsorientiert                                   │  │
│   │  • Zuverlässig (Empfang wird bestätigt)                    │  │
│   │  • Reihenfolge garantiert                                  │  │
│   │  • Fehlerkontrolle und Wiederholung                       │  │
│   │  • Langsamer durch Overhead                                │  │
│   │                                                             │  │
│   │  Einsatz: HTTP, HTTPS, FTP, E-Mail, SSH                    │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   UDP (User Datagram Protocol)                                    │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │                                                             │  │
│   │  ┌─────┐                                         ┌─────┐   │  │
│   │  │ A   │ ──→ Daten ──→ Daten ──→ Daten ──→      │ B   │   │  │
│   │  │     │     (keine Bestätigung!)               │     │   │  │
│   │  └─────┘                                         └─────┘   │  │
│   │                                                             │  │
│   │  • Verbindungslos                                          │  │
│   │  • Unzuverlässig (keine Bestätigung)                       │  │
│   │  • Reihenfolge nicht garantiert                            │  │
│   │  • Schneller, weniger Overhead                             │  │
│   │  • Pakete können verloren gehen                            │  │
│   │                                                             │  │
│   │  Einsatz: DNS, DHCP, VoIP, Streaming, Online-Spiele        │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### TCP 3-Way-Handshake

```
┌────────────────────────────────────────────────────────────────────┐
│                    TCP 3-WAY-HANDSHAKE                             │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Verbindungsaufbau bei TCP:                                       │
│                                                                     │
│       Client                              Server                   │
│         │                                   │                      │
│         │   1. SYN (Synchronize)           │                      │
│         │ ──────────────────────────────→  │                      │
│         │   "Ich möchte eine Verbindung"   │                      │
│         │                                   │                      │
│         │   2. SYN-ACK                     │                      │
│         │ ←──────────────────────────────  │                      │
│         │   "OK, ich bestätige"            │                      │
│         │                                   │                      │
│         │   3. ACK (Acknowledge)           │                      │
│         │ ──────────────────────────────→  │                      │
│         │   "Bestätigt, Verbindung steht"  │                      │
│         │                                   │                      │
│         │   ═══════════════════════════   │                      │
│         │     Verbindung aufgebaut!        │                      │
│         │   ═══════════════════════════   │                      │
│         │                                   │                      │
│         │      Datenaustausch...           │                      │
│         │ ←─────────────────────────────→  │                      │
│                                                                     │
│   Nach dem Handshake können Daten bidirektional übertragen werden │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Wichtige Ports

```
┌────────────────────────────────────────────────────────────────────┐
│                      WICHTIGE PORTS                                │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Port │ Protokoll │ Dienst          │ Transport                  │
│   ─────┼───────────┼─────────────────┼────────────────────────────│
│   20   │ FTP-Data  │ Dateitransfer   │ TCP                        │
│   21   │ FTP       │ Steuerkanal     │ TCP                        │
│   22   │ SSH       │ Secure Shell    │ TCP                        │
│   23   │ Telnet    │ Remote-Zugriff  │ TCP                        │
│   25   │ SMTP      │ E-Mail senden   │ TCP                        │
│   53   │ DNS       │ Namensauflösung │ TCP/UDP                    │
│   67/68│ DHCP      │ IP-Vergabe      │ UDP                        │
│   80   │ HTTP      │ Webseiten       │ TCP                        │
│   110  │ POP3      │ E-Mail abrufen  │ TCP                        │
│   143  │ IMAP      │ E-Mail abrufen  │ TCP                        │
│   443  │ HTTPS     │ Sicheres Web    │ TCP                        │
│   3389 │ RDP       │ Remote Desktop  │ TCP                        │
│                                                                     │
│   Portbereiche:                                                    │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ 0 - 1023      │ Well-Known Ports (reserviert für System)   │ │
│   │ 1024 - 49151  │ Registered Ports (registrierte Dienste)    │ │
│   │ 49152 - 65535 │ Dynamic Ports (temporär, Clientseite)      │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **TCP** | Transmission Control Protocol (zuverlässig) |
| **UDP** | User Datagram Protocol (schnell) |
| **Port** | Nummer zur Identifikation von Diensten |
| **Socket** | Kombination aus IP-Adresse und Port |
| **3-Way-Handshake** | Verbindungsaufbau bei TCP |
| **SYN** | Synchronize (Verbindungsanfrage) |
| **ACK** | Acknowledge (Bestätigung) |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Wie viele Schichten hat das TCP/IP-Modell?
- Unterschied TCP vs. UDP?
- Welcher Port gehört zu welchem Dienst?

### Wichtig zu merken

- **TCP/IP = 4 Schichten** (nicht 7 wie OSI!)
- **TCP:** Zuverlässig, mit Verbindung, mit ACK
- **UDP:** Schnell, ohne Verbindung, ohne ACK
- **Port 80** = HTTP, **Port 443** = HTTPS
- **Port 25** = SMTP (E-Mail senden)
- **3-Way-Handshake:** SYN → SYN-ACK → ACK

---

## Übungsaufgaben

### Aufgabe 1
Nennen Sie die 4 Schichten des TCP/IP-Modells.

**Lösung:**
1. Netzzugangsschicht (Network Access Layer)
2. Internetschicht (Internet Layer)
3. Transportschicht (Transport Layer)
4. Anwendungsschicht (Application Layer)

### Aufgabe 2
Wann verwendet man TCP, wann UDP?

**Lösung:**
**TCP verwenden für:**
- Webseiten (HTTP/HTTPS)
- E-Mail (SMTP, POP3, IMAP)
- Dateitransfer (FTP)
- Wenn zuverlässige Übertragung wichtig ist

**UDP verwenden für:**
- Videostreaming
- VoIP-Telefonie
- Online-Spiele
- DNS-Abfragen
- Wenn Geschwindigkeit wichtiger ist als 100% Zuverlässigkeit

### Aufgabe 3
Welche Ports gehören zu folgenden Diensten: HTTP, HTTPS, SSH, DNS?

**Lösung:**
- HTTP: **Port 80**
- HTTPS: **Port 443**
- SSH: **Port 22**
- DNS: **Port 53**

---

## Querverweise

- [07-01-01 OSI-Modell](./07-01-01-osi-model.md) - Theoretisches Referenzmodell
- [07-01-03 Protokolle](./07-01-03-protocols.md) - Protokolle im Detail
- [07-02-01 IPv4](../07-02-ip-addressing/07-02-01-ipv4.md) - IP-Adressierung
