# Page 24 - Netzwerkprotokolle (Fortsetzung) & OSI-Modell

## Netzwerkprotokolle (Fortsetzung)

| Protokoll | Port(s) | Beschreibung |
|-----------|---------|--------------|
| **SMTP** | 25 (alt), 465 (SSL), 587 (TLS) | Versand von E-Mails zwischen Mailservern. |
| **IMAP** | 143, 993 (SSL/TLS) | Serverbasierter Abruf von E-Mails, Synchronisation auf mehreren Geräten. |
| **POP3** | 110, 995 (SSL/TLS) | Abruf von E-Mails, werden nach Download vom Server gelöscht. |
| **DHCP** | 67 (Server), 68 (Client) | Automatische Vergabe von IP-Adressen. |

---

## OSI-Modell

Das **OSI-Modell** (Open Systems Interconnection Model) ist ein Schichtenmodell zur Standardisierung der Netzwerkkommunikation. Es besteht aus **sieben Schichten**, die jeweils spezifische Aufgaben übernehmen.

### Die 7 Schichten des OSI-Modells

| Schicht | Name | Aufgabe | Beispiele |
|---------|------|---------|-----------|
| **1** | Bitübertragungsschicht (Physical Layer) | Überträgt rohe Bitströme über physikalische Medien | Ethernet, WLAN, Glasfaser |
| **2** | Sicherungsschicht (Data Link Layer) | Fehlerfreie Übertragung zwischen direkt verbundenen Geräten, MAC-Adressen | Ethernet (802.3), WLAN (802.11) |
| **3** | Vermittlungsschicht (Network Layer) | Logische Adressierung und Routing von Paketen | IPv4, IPv6, ICMP (Ping) |
| **4** | Transportschicht (Transport Layer) | Zuverlässige/unzuverlässige Übertragung zwischen Endgeräten | TCP, UDP |
