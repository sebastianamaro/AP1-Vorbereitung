# OSI-Modell

## Lernziele

Nach diesem Kapitel solltest du:
- Die 7 Schichten des OSI-Modells kennen und benennen können
- Die Aufgaben jeder Schicht verstehen
- Protokolle und Hardware den Schichten zuordnen können
- Den Datentransport durch die Schichten erklären können

---

## Kerninhalt

### Was ist das OSI-Modell?

```
┌────────────────────────────────────────────────────────────────────┐
│                       OSI-MODELL                                   │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   OSI = Open Systems Interconnection                               │
│                                                                     │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ Das OSI-Modell ist ein Referenzmodell, das die             │ │
│   │ Kommunikation in Netzwerken in 7 Schichten unterteilt.     │ │
│   │                                                              │ │
│   │ Es beschreibt, WIE Daten von einer Anwendung auf einem     │ │
│   │ Computer zu einer Anwendung auf einem anderen Computer     │ │
│   │ übertragen werden.                                          │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   Entwickelt von: ISO (International Organization for              │
│                   Standardization)                                 │
│                                                                     │
│   Zweck:                                                           │
│   • Standardisierung der Netzwerkcommunication                    │
│   • Herstellerunabhängigkeit                                       │
│   • Modulare Struktur (Schichten unabhängig änderbar)             │
│   • Vereinfachtes Verständnis komplexer Prozesse                  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Die 7 Schichten

```
┌────────────────────────────────────────────────────────────────────┐
│                    DIE 7 OSI-SCHICHTEN                             │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Schicht    │  Name                 │  Englisch                   │
│   ───────────┼───────────────────────┼────────────────────────────│
│      7       │  Anwendungsschicht    │  Application Layer          │
│      6       │  Darstellungsschicht  │  Presentation Layer         │
│      5       │  Sitzungsschicht      │  Session Layer              │
│      4       │  Transportschicht     │  Transport Layer            │
│      3       │  Vermittlungsschicht  │  Network Layer              │
│      2       │  Sicherungsschicht    │  Data Link Layer            │
│      1       │  Bitübertragung       │  Physical Layer             │
│                                                                     │
│   MERKSATZ (von oben nach unten):                                 │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │  "Alle deutschen Studenten trinken verschiedene Sorten Bier"│ │
│   │                                                              │ │
│   │   A = Anwendung                                             │ │
│   │   D = Darstellung                                           │ │
│   │   S = Sitzung                                               │ │
│   │   T = Transport                                             │ │
│   │   V = Vermittlung                                           │ │
│   │   S = Sicherung                                             │ │
│   │   B = Bitübertragung                                        │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Schichten im Detail

```
┌────────────────────────────────────────────────────────────────────┐
│                SCHICHT 7: ANWENDUNGSSCHICHT                        │
│                     (Application Layer)                            │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Aufgabe:                                                         │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ • Schnittstelle zwischen Netzwerk und Anwendungen          │ │
│   │ • Stellt Dienste für Endbenutzer bereit                    │ │
│   │ • E-Mail, Web, Dateitransfer                               │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   Protokolle:                                                      │
│   • HTTP/HTTPS (Web)                                               │
│   • FTP (Dateiübertragung)                                         │
│   • SMTP, POP3, IMAP (E-Mail)                                      │
│   • DNS (Namensauflösung)                                          │
│   • DHCP (IP-Adresszuweisung)                                      │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────┐
│                SCHICHT 6: DARSTELLUNGSSCHICHT                      │
│                    (Presentation Layer)                            │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Aufgabe:                                                         │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ • Datenformat-Umwandlung                                    │ │
│   │ • Verschlüsselung/Entschlüsselung                          │ │
│   │ • Komprimierung/Dekomprimierung                            │ │
│   │ • Zeichencodierung (ASCII, UTF-8)                          │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   Beispiele:                                                       │
│   • SSL/TLS (Verschlüsselung)                                      │
│   • JPEG, GIF, MPEG (Kodierung)                                    │
│   • ASCII, UTF-8 (Zeichensätze)                                    │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────┐
│                SCHICHT 5: SITZUNGSSCHICHT                          │
│                     (Session Layer)                                │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Aufgabe:                                                         │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ • Auf- und Abbau von Verbindungen (Sessions)               │ │
│   │ • Synchronisation des Datenaustauschs                      │ │
│   │ • Dialog-Steuerung (Wer sendet wann?)                      │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   Beispiele:                                                       │
│   • NetBIOS                                                        │
│   • RPC (Remote Procedure Call)                                    │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

```
┌────────────────────────────────────────────────────────────────────┐
│                SCHICHT 4: TRANSPORTSCHICHT                         │
│                    (Transport Layer)                               │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Aufgabe:                                                         │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ • Ende-zu-Ende-Verbindung zwischen Prozessen               │ │
│   │ • Segmentierung und Zusammensetzen von Daten               │ │
│   │ • Flusskontrolle                                           │ │
│   │ • Fehlerkontrolle                                          │ │
│   │ • Port-Adressierung                                        │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   Protokolle:                                                      │
│   ┌─────────────────┬──────────────────────────────────────────┐  │
│   │ TCP             │ Verbindungsorientiert, zuverlässig       │  │
│   │                 │ (Webseiten, E-Mail, Dateitransfer)       │  │
│   ├─────────────────┼──────────────────────────────────────────┤  │
│   │ UDP             │ Verbindungslos, schnell                  │  │
│   │                 │ (Streaming, VoIP, DNS)                   │  │
│   └─────────────────┴──────────────────────────────────────────┘  │
│                                                                     │
│   Dateneinheit: SEGMENT                                            │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────┐
│                SCHICHT 3: VERMITTLUNGSSCHICHT                      │
│                     (Network Layer)                                │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Aufgabe:                                                         │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ • Logische Adressierung (IP-Adressen)                      │ │
│   │ • Routing (Wegfindung zwischen Netzwerken)                 │ │
│   │ • Weiterleitung von Paketen                                │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   Protokolle:                                                      │
│   • IP (Internet Protocol) - IPv4, IPv6                            │
│   • ICMP (Ping, Traceroute)                                        │
│   • ARP (IP → MAC-Adresse)                                         │
│                                                                     │
│   Hardware: ROUTER                                                 │
│                                                                     │
│   Dateneinheit: PAKET                                              │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────┐
│                SCHICHT 2: SICHERUNGSSCHICHT                        │
│                    (Data Link Layer)                               │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Aufgabe:                                                         │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ • Physische Adressierung (MAC-Adressen)                    │ │
│   │ • Fehlererkennung (CRC-Prüfsumme)                          │ │
│   │ • Zugriffskontrolle auf das Medium                         │ │
│   │ • Rahmenbildung (Framing)                                  │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   Protokolle/Standards:                                            │
│   • Ethernet                                                       │
│   • WLAN (IEEE 802.11)                                             │
│   • PPP (Point-to-Point Protocol)                                  │
│                                                                     │
│   Hardware: SWITCH, BRIDGE                                         │
│                                                                     │
│   Dateneinheit: FRAME (Rahmen)                                     │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────────┐
│                SCHICHT 1: BITÜBERTRAGUNGSSCHICHT                   │
│                     (Physical Layer)                               │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Aufgabe:                                                         │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ • Übertragung von Bits über physisches Medium              │ │
│   │ • Elektrische/optische Signale                             │ │
│   │ • Stecker, Kabel, Spannungen                               │ │
│   │ • Übertragungsraten                                        │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   Medien:                                                          │
│   • Kupferkabel (Cat5, Cat6, Cat7)                                 │
│   • Glasfaserkabel                                                 │
│   • Funkwellen (WLAN)                                              │
│                                                                     │
│   Hardware: HUB, REPEATER, KABEL, NETZWERKKARTE                    │
│                                                                     │
│   Dateneinheit: BIT                                                │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Übersicht: Schichten, Hardware und Protokolle

```
┌────────────────────────────────────────────────────────────────────┐
│           OSI-MODELL: GESAMTÜBERSICHT                              │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│  Nr │ Schicht         │ Hardware      │ Protokolle    │ Einheit   │
│  ───┼─────────────────┼───────────────┼───────────────┼───────────│
│  7  │ Anwendung       │ Gateway       │ HTTP, FTP,    │ Daten     │
│     │                 │               │ SMTP, DNS     │           │
│  ───┼─────────────────┼───────────────┼───────────────┼───────────│
│  6  │ Darstellung     │               │ SSL/TLS,      │ Daten     │
│     │                 │               │ JPEG, ASCII   │           │
│  ───┼─────────────────┼───────────────┼───────────────┼───────────│
│  5  │ Sitzung         │               │ NetBIOS, RPC  │ Daten     │
│  ───┼─────────────────┼───────────────┼───────────────┼───────────│
│  4  │ Transport       │               │ TCP, UDP      │ Segment   │
│  ───┼─────────────────┼───────────────┼───────────────┼───────────│
│  3  │ Vermittlung     │ Router        │ IP, ICMP      │ Paket     │
│  ───┼─────────────────┼───────────────┼───────────────┼───────────│
│  2  │ Sicherung       │ Switch,Bridge │ Ethernet,WLAN │ Frame     │
│  ───┼─────────────────┼───────────────┼───────────────┼───────────│
│  1  │ Bitübertragung  │ Hub,Repeater, │ -             │ Bit       │
│     │                 │ Kabel         │               │           │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Datenkapselung

```
┌────────────────────────────────────────────────────────────────────┐
│                      DATENKAPSELUNG                                │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Beim Senden werden die Daten von oben nach unten durch          │
│   die Schichten gereicht. Jede Schicht fügt einen Header hinzu:   │
│                                                                     │
│   Schicht 7-5:  ┌────────────────────────────────────┐            │
│                 │             DATEN                   │            │
│                 └────────────────────────────────────┘            │
│                              ↓                                     │
│   Schicht 4:    ┌────┬───────────────────────────────┐            │
│   (Transport)   │TCP │            DATEN              │ = Segment  │
│                 └────┴───────────────────────────────┘            │
│                              ↓                                     │
│   Schicht 3:    ┌────┬────┬──────────────────────────┐            │
│   (Vermittlung) │ IP │TCP │         DATEN            │ = Paket    │
│                 └────┴────┴──────────────────────────┘            │
│                              ↓                                     │
│   Schicht 2:    ┌────┬────┬────┬──────────────┬─────┐            │
│   (Sicherung)   │ETH │ IP │TCP │    DATEN     │ CRC │ = Frame    │
│                 └────┴────┴────┴──────────────┴─────┘            │
│                              ↓                                     │
│   Schicht 1:    01101001 01101110 01100110 01101111...  = Bits    │
│                                                                     │
│   Beim Empfangen wird der Prozess umgekehrt (Entkapselung)        │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **OSI** | Open Systems Interconnection |
| **Kapselung** | Hinzufügen von Header-Informationen pro Schicht |
| **PDU** | Protocol Data Unit (Dateneinheit pro Schicht) |
| **Segment** | Dateneinheit Schicht 4 |
| **Paket** | Dateneinheit Schicht 3 |
| **Frame** | Dateneinheit Schicht 2 |
| **Header** | Steuerinformationen vor den Nutzdaten |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Nennen Sie die 7 OSI-Schichten
- Welcher Schicht gehört ein Router/Switch an?
- Ordnen Sie Protokolle den Schichten zu

### Wichtig zu merken

- **7 Schichten auswendig kennen!**
- **Router** = Schicht 3 (Vermittlung, IP-Adressen)
- **Switch** = Schicht 2 (Sicherung, MAC-Adressen)
- **Hub** = Schicht 1 (nur physisch)
- **TCP** = Schicht 4 (zuverlässig)
- **IP** = Schicht 3 (Adressierung)
- Merksatz: "Alle deutschen Studenten trinken verschiedene Sorten Bier"

---

## Übungsaufgaben

### Aufgabe 1
Nennen Sie die 7 Schichten des OSI-Modells von unten nach oben.

**Lösung:**
1. Bitübertragungsschicht (Physical Layer)
2. Sicherungsschicht (Data Link Layer)
3. Vermittlungsschicht (Network Layer)
4. Transportschicht (Transport Layer)
5. Sitzungsschicht (Session Layer)
6. Darstellungsschicht (Presentation Layer)
7. Anwendungsschicht (Application Layer)

### Aufgabe 2
Ordnen Sie zu: Router, Switch, Hub - welcher OSI-Schicht arbeiten sie?

**Lösung:**
- **Hub:** Schicht 1 (Bitübertragung) - leitet nur elektrische Signale weiter
- **Switch:** Schicht 2 (Sicherung) - arbeitet mit MAC-Adressen
- **Router:** Schicht 3 (Vermittlung) - arbeitet mit IP-Adressen

### Aufgabe 3
Welcher OSI-Schicht gehören folgende Protokolle an: HTTP, IP, TCP, Ethernet?

**Lösung:**
- **HTTP:** Schicht 7 (Anwendung)
- **TCP:** Schicht 4 (Transport)
- **IP:** Schicht 3 (Vermittlung)
- **Ethernet:** Schicht 2 (Sicherung)

---

## Querverweise

- [07-01-02 TCP/IP-Modell](./07-01-02-tcp-ip-model.md) - Praktisches Referenzmodell
- [07-01-03 Protokolle](./07-01-03-protocols.md) - Wichtige Netzwerkprotocols
- [07-05 Netzwerk-Hardware](../07-05-network-hardware.md) - Router, Switch, Hub
