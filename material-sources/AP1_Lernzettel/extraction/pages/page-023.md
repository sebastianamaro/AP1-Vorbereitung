# Page 23 - 2.6 Netzwerkprotokolle und OSI-Modell

## 2.6 Netzwerkprotokolle und OSI-Modell

### Netzwerkprotokolle

Netzwerkprotokolle sind standardisierte Regeln und Verfahren zur Kommunikation zwischen Geräten in einem Netzwerk. Sie definieren, wie Daten gesendet, empfangen und interpretiert werden.

### Wichtige Netzwerkprotokolle

| Protokoll | Port(s) | Beschreibung |
|-----------|---------|--------------|
| **TCP** | abhängig vom Dienst | Zuverlässige, verbindungsorientierte Datenübertragung. Nutzt Fehlerkorrektur und Paket-Reihenfolge. |
| **UDP** | abhängig vom Dienst | Verbindungsloses, schnelles Protokoll ohne Fehlerkorrektur. Geeignet für Streaming oder VoIP. |
| **IP** | Layer 3 (kein Port) | Adressierung und Weiterleitung von Datenpaketen. IPv4 (32-Bit) und IPv6 (128-Bit). |
| **HTTP** | 80 | Übertragung von Webseiten. HTTP/2 und HTTPS bieten verbesserte Sicherheit. |
| **HTTPS** | 443 | Verschlüsselte Version von HTTP mit TLS/SSL. |
| **FTP** | 20 (Daten), 21 (Steuerung) | Dateiübertragung zwischen Client und Server. |
| **SFTP** | 22 | Sicheres Dateiübertragungsprotokoll mit SSH-Verschlüsselung. |
| **DNS** | 53 (UDP/TCP) | Wandelt Domainnamen in IP-Adressen um. |
