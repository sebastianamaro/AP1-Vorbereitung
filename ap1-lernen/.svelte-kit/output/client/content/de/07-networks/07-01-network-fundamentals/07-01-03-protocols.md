# Netzwerkprotocols

## Lernziele

Nach diesem Kapitel solltest du:
- Die wichtigsten Netzwerkprotocols kennen
- Die Funktion der Protokolle verstehen
- Protokolle den OSI-Schichten zuordnen können
- E-Mail-Protokolle unterscheiden können

---

## Kerninhalt

### Was sind Protokolle?

```
┌────────────────────────────────────────────────────────────────────┐
│                    NETZWERKPROTOKOLLE                              │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Definition:                                                      │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ Ein Protokoll ist ein Satz von Regeln und Standards,       │ │
│   │ die festlegen, wie Daten zwischen Geräten im Netzwerk      │ │
│   │ ausgetauscht werden.                                        │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   Protokolle definieren:                                           │
│   • Format der Daten (Syntax)                                      │
│   • Bedeutung der Daten (Semantik)                                │
│   • Reihenfolge des Austauschs (Timing)                           │
│   • Fehlererkennung und -behandlung                               │
│                                                                     │
│   Beispiel - Kommunikation wie bei einem Telefonat:               │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ 1. Anrufer wählt Nummer              → Verbindungsaufbau    │ │
│   │ 2. "Hallo, hier ist Max"             → Identifikation       │ │
│   │ 3. "Verstanden?" - "Ja, verstanden"  → Bestätigung          │ │
│   │ 4. "Auf Wiederhören"                 → Verbindungsabbau     │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Anwendungsprotocols (Schicht 7)

```
┌────────────────────────────────────────────────────────────────────┐
│                  WEB-PROTOKOLLE: HTTP/HTTPS                        │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   HTTP (HyperText Transfer Protocol)                               │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Übertragung von Webseiten                                │  │
│   │ • Port 80                                                  │  │
│   │ • Klartext (unverschlüsselt!)                              │  │
│   │ • Request-Response-Modell                                  │  │
│   │                                                             │  │
│   │    Browser                           Webserver              │  │
│   │      │   GET /index.html HTTP/1.1      │                   │  │
│   │      │ ─────────────────────────────→  │                   │  │
│   │      │                                  │                   │  │
│   │      │   HTTP/1.1 200 OK               │                   │  │
│   │      │   <html>...</html>              │                   │  │
│   │      │ ←─────────────────────────────  │                   │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   HTTPS (HTTP Secure)                                             │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • HTTP mit Verschlüsselung (TLS/SSL)                       │  │
│   │ • Port 443                                                 │  │
│   │ • Schützt vor Abhören und Manipulation                     │  │
│   │ • Erkennbar am Schloss-Symbol im Browser                   │  │
│   │ • Standard für alle modernen Webseiten                     │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

```
┌────────────────────────────────────────────────────────────────────┐
│                     E-MAIL-PROTOKOLLE                              │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │                    E-MAIL-FLUSS                              │ │
│   │                                                              │ │
│   │   Absender        Mail-Server        Mail-Server   Empfänger│ │
│   │   ┌─────┐         ┌─────┐           ┌─────┐       ┌─────┐  │ │
│   │   │     │──SMTP──→│     │───SMTP───→│     │←─────│     │  │ │
│   │   │     │         │     │           │     │ POP3/ │     │  │ │
│   │   │     │         │     │           │     │ IMAP  │     │  │ │
│   │   └─────┘         └─────┘           └─────┘       └─────┘  │ │
│   │                                                              │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   SMTP (Simple Mail Transfer Protocol)                            │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Zum SENDEN von E-Mails                                   │  │
│   │ • Port 25 (unverschlüsselt) oder 587 (verschlüsselt)       │  │
│   │ • Verbindung zum Postausgangsserver                        │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   POP3 (Post Office Protocol v3)                                  │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Zum ABRUFEN von E-Mails                                  │  │
│   │ • Port 110 (unverschlüsselt) oder 995 (verschlüsselt)      │  │
│   │ • E-Mails werden heruntergeladen und auf Server GELÖSCHT   │  │
│   │ • Offline-Arbeit möglich                                   │  │
│   │ • Nur auf einem Gerät                                      │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   IMAP (Internet Message Access Protocol)                         │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Zum ABRUFEN von E-Mails                                  │  │
│   │ • Port 143 (unverschlüsselt) oder 993 (verschlüsselt)      │  │
│   │ • E-Mails BLEIBEN auf dem Server                           │  │
│   │ • Synchronisation auf mehreren Geräten                     │  │
│   │ • Benötigt ständige Internetverbindung                     │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

```
┌────────────────────────────────────────────────────────────────────┐
│                    POP3 vs. IMAP                                   │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│                     POP3                    IMAP                   │
│   ┌─────────────────────────────┬──────────────────────────────┐  │
│   │ E-Mails werden auf Client   │ E-Mails bleiben auf Server   │  │
│   │ heruntergeladen             │                               │  │
│   ├─────────────────────────────┼──────────────────────────────┤  │
│   │ Auf Server werden E-Mails   │ Mehrere Geräte können        │  │
│   │ gelöscht                    │ synchronisiert werden        │  │
│   ├─────────────────────────────┼──────────────────────────────┤  │
│   │ Gut für ein einzelnes Gerät│ Gut für mehrere Geräte        │  │
│   ├─────────────────────────────┼──────────────────────────────┤  │
│   │ Offline-Arbeit möglich      │ Benötigt Internetverbindung  │  │
│   ├─────────────────────────────┼──────────────────────────────┤  │
│   │ Weniger Speicherplatz auf   │ Mehr Speicherplatz auf       │  │
│   │ Server nötig                │ Server nötig                 │  │
│   ├─────────────────────────────┼──────────────────────────────┤  │
│   │ Port 110 / 995              │ Port 143 / 993               │  │
│   └─────────────────────────────┴──────────────────────────────┘  │
│                                                                     │
│   ⚠ Prüfungsrelevant: Unterschied kennen!                        │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Weitere wichtige Protokolle

```
┌────────────────────────────────────────────────────────────────────┐
│                    WEITERE PROTOKOLLE                              │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   DNS (Domain Name System)                                        │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Übersetzt Domainnamen in IP-Adressen                     │  │
│   │ • Port 53 (UDP und TCP)                                    │  │
│   │                                                             │  │
│   │   www.example.com  →  DNS-Server  →  192.168.1.100        │  │
│   │                                                             │  │
│   │ Ohne DNS müssten wir IP-Adressen auswendig kennen!         │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   DHCP (Dynamic Host Configuration Protocol)                      │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Automatische Vergabe von IP-Adressen                     │  │
│   │ • Port 67 (Server), Port 68 (Client)                       │  │
│   │                                                             │  │
│   │   Neues Gerät → DHCP-Server → IP, Gateway, DNS zugewiesen  │  │
│   │                                                             │  │
│   │ Ablauf: DORA (Discover, Offer, Request, Acknowledge)       │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   FTP (File Transfer Protocol)                                    │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Dateiübertragung zwischen Computern                      │  │
│   │ • Port 20 (Daten), Port 21 (Steuerung)                     │  │
│   │ • Unverschlüsselt (SFTP/FTPS für verschlüsselte Variante)  │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   SSH (Secure Shell)                                              │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Verschlüsselter Fernzugriff auf Systeme                  │  │
│   │ • Port 22                                                  │  │
│   │ • Ersetzt unsicheres Telnet (Port 23)                      │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Protokolle nach OSI-Schichten

```
┌────────────────────────────────────────────────────────────────────┐
│                PROTOKOLLE NACH OSI-SCHICHT                         │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Schicht │ Protokolle                                             │
│   ────────┼───────────────────────────────────────────────────────│
│   7       │ HTTP, HTTPS, FTP, SMTP, POP3, IMAP, DNS, DHCP,        │
│   (Anw.)  │ SSH, Telnet, SNMP, NTP                                │
│   ────────┼───────────────────────────────────────────────────────│
│   6       │ SSL/TLS, JPEG, MPEG, ASCII                            │
│   (Darst.)│                                                        │
│   ────────┼───────────────────────────────────────────────────────│
│   5       │ NetBIOS, RPC, SQL                                     │
│   (Sitz.) │                                                        │
│   ────────┼───────────────────────────────────────────────────────│
│   4       │ TCP, UDP                                               │
│   (Trans.)│                                                        │
│   ────────┼───────────────────────────────────────────────────────│
│   3       │ IP (IPv4, IPv6), ICMP, ARP, IGMP                      │
│   (Verm.) │                                                        │
│   ────────┼───────────────────────────────────────────────────────│
│   2       │ Ethernet, WLAN (802.11), PPP                          │
│   (Sich.) │                                                        │
│   ────────┼───────────────────────────────────────────────────────│
│   1       │ - (physische Standards wie RS-232)                    │
│   (Phys.) │                                                        │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Protokoll-Übersicht mit Ports

```
┌────────────────────────────────────────────────────────────────────┐
│              WICHTIGE PROTOKOLLE MIT PORTS                         │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Protokoll │ Port     │ Funktion            │ Verschlüsselt      │
│   ──────────┼──────────┼─────────────────────┼────────────────────│
│   HTTP      │ 80       │ Webseiten           │ Nein               │
│   HTTPS     │ 443      │ Sichere Webseiten   │ Ja (TLS)           │
│   FTP       │ 20/21    │ Dateitransfer       │ Nein               │
│   SFTP      │ 22       │ Sicherer Transfer   │ Ja (SSH)           │
│   SSH       │ 22       │ Fernzugriff         │ Ja                 │
│   Telnet    │ 23       │ Fernzugriff         │ Nein               │
│   SMTP      │ 25/587   │ E-Mail senden       │ 587 mit TLS        │
│   DNS       │ 53       │ Namensauflösung     │ Nein               │
│   DHCP      │ 67/68    │ IP-Vergabe          │ Nein               │
│   POP3      │ 110/995  │ E-Mail abrufen      │ 995 mit TLS        │
│   IMAP      │ 143/993  │ E-Mail abrufen      │ 993 mit TLS        │
│   RDP       │ 3389     │ Remote Desktop      │ Ja                 │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **HTTP** | Protokoll für Webseiten (Port 80) |
| **HTTPS** | Verschlüsseltes HTTP (Port 443) |
| **SMTP** | E-Mail-Versand (Port 25/587) |
| **POP3** | E-Mail-Abruf, löscht auf Server |
| **IMAP** | E-Mail-Abruf, bleibt auf Server |
| **DNS** | Namensauflösung (Port 53) |
| **DHCP** | Automatische IP-Vergabe |
| **FTP** | Dateiübertragung (Port 20/21) |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Unterschied POP3 vs. IMAP?
- Welcher Port gehört zu welchem Protokoll?
- Wofür steht HTTP/HTTPS?

### Wichtig zu merken

- **SMTP** = E-Mail SENDEN
- **POP3** = E-Mail ABRUFEN, wird GELÖSCHT
- **IMAP** = E-Mail ABRUFEN, BLEIBT auf Server
- **HTTP = Port 80**, **HTTPS = Port 443**
- **DNS = Port 53** (Namensauflösung)
- SSH ersetzt Telnet (verschlüsselt)

---

## Übungsaufgaben

### Aufgabe 1
Ein Mitarbeiter möchte seine E-Mails auf Laptop und Smartphone synchron halten. Welches Protokoll empfehlen Sie?

**Lösung:**
**IMAP** (Internet Message Access Protocol)

Begründung:
- E-Mails bleiben auf dem Server
- Änderungen werden auf allen Geräten synchronisiert
- Lesen einer E-Mail auf dem Smartphone → auch auf Laptop als gelesen markiert
- POP3 würde E-Mails nur auf ein Gerät herunterladen und vom Server löschen

### Aufgabe 2
Ordnen Sie zu: HTTP, SMTP, DNS, DHCP - welche Aufgabe hat jedes Protokoll?

**Lösung:**
- **HTTP:** Übertragung von Webseiten
- **SMTP:** Versand von E-Mails
- **DNS:** Auflösung von Domainnamen zu IP-Adressen
- **DHCP:** Automatische Vergabe von IP-Adressen

### Aufgabe 3
Warum sollte man HTTPS statt HTTP verwenden?

**Lösung:**
HTTPS sollte verwendet werden, weil:
- **Verschlüsselung:** Daten können nicht abgehört werden
- **Integrität:** Daten können nicht manipuliert werden
- **Authentizität:** Zertifikat bestätigt Identität der Website
- **Passwörter und sensible Daten** sind geschützt
- Pflicht bei Login-Seiten, Online-Banking, Shops

---

## Querverweise

- [07-01-01 OSI-Modell](./07-01-01-osi-model.md) - Schichtenmodell
- [07-01-02 TCP/IP-Modell](./07-01-02-tcp-ip-model.md) - TCP vs. UDP
- [04-05-03 Zertifikate](../../04-it-security/04-05-cryptography/04-05-03-certificates.md) - HTTPS-Zertifikate
- [07-02-04 DHCP](../07-02-ip-addressing/07-02-04-dhcp.md) - IP-Vergabe im Detail
