# Netzwerk-Diagnose-Tools

## Lernziele

Nach diesem Kapitel solltest du:
- Wichtige Netzwerk-Diagnose-Tools kennen
- Die Kommandozeilen-Befehle anwenden können
- Netzwerkprobleme systematisch analysieren können
- Die Ausgaben der Tools interpretieren können

---

## Kerninhalt

### Übersicht Diagnose-Tools

```
┌────────────────────────────────────────────────────────────────────┐
│                   DIAGNOSE-TOOLS ÜBERSICHT                         │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Befehl         │ Windows        │ Linux/Mac     │ Funktion       │
│   ───────────────┼────────────────┼───────────────┼────────────────│
│   IP-Konfiguration│ ipconfig      │ ifconfig/ip   │ IP anzeigen   │
│   Erreichbarkeit │ ping           │ ping          │ Verbindung     │
│   Route verfolgen│ tracert        │ traceroute    │ Weg anzeigen   │
│   DNS-Abfrage    │ nslookup       │ nslookup/dig  │ Namen auflösen│
│   Verbindungen   │ netstat        │ netstat/ss    │ Ports anzeigen│
│   ARP-Tabelle    │ arp -a         │ arp -a        │ MAC-IP Zuordnung│
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### ipconfig / ifconfig

```
┌────────────────────────────────────────────────────────────────────┐
│                    IPCONFIG (Windows)                              │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Zeigt die IP-Konfiguration des Computers an.                    │
│                                                                     │
│   Wichtige Befehle:                                                │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ ipconfig              │ Zeigt Kurzübersicht               │  │
│   │ ipconfig /all         │ Zeigt alle Details (auch MAC)     │  │
│   │ ipconfig /release     │ Gibt DHCP-Adresse frei            │  │
│   │ ipconfig /renew       │ Fordert neue DHCP-Adresse an      │  │
│   │ ipconfig /flushdns    │ Leert DNS-Cache                   │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   Beispielausgabe (ipconfig /all):                                │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Ethernet-Adapter LAN-Verbindung:                           │  │
│   │                                                             │  │
│   │   Verbindungsspez. DNS-Suffix: firma.local                 │  │
│   │   Physische Adresse.........: 00-1A-2B-3C-4D-5E  ← MAC    │  │
│   │   DHCP aktiviert............: Ja                           │  │
│   │   IPv4-Adresse..............: 192.168.1.100  ← IP         │  │
│   │   Subnetzmaske..............: 255.255.255.0                │  │
│   │   Standardgateway...........: 192.168.1.1    ← Router     │  │
│   │   DHCP-Server...............: 192.168.1.1                  │  │
│   │   DNS-Server................: 192.168.1.1, 8.8.8.8        │  │
│   │   Lease erhalten............: 08.01.2025 08:00:00         │  │
│   │   Lease läuft ab............: 09.01.2025 08:00:00         │  │
│   │                                                             │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   PROBLEMLÖSUNG mit ipconfig:                                     │
│   • IP beginnt mit 169.254.x.x → DHCP-Problem (APIPA-Adresse)    │
│   • Kein Gateway → Kein Internetzugang möglich                    │
│   • ipconfig /release + /renew → Neue IP vom DHCP holen          │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### ping

```
┌────────────────────────────────────────────────────────────────────┐
│                          PING                                      │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Prüft, ob ein Ziel im Netzwerk erreichbar ist.                  │
│   Verwendet ICMP (Internet Control Message Protocol).              │
│                                                                     │
│   Syntax:                                                          │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ ping <IP-Adresse oder Hostname>                            │  │
│   │ ping 192.168.1.1          │ Ping an IP-Adresse            │  │
│   │ ping www.google.de        │ Ping an Hostname (DNS-Test)   │  │
│   │ ping -t 192.168.1.1       │ Dauerhaft pingen (Windows)    │  │
│   │ ping -n 10 192.168.1.1    │ 10 Pakete senden              │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   Beispielausgabe (Erfolg):                                       │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Ping wird ausgeführt für 192.168.1.1 mit 32 Bytes Daten:   │  │
│   │ Antwort von 192.168.1.1: Bytes=32 Zeit=1ms TTL=64          │  │
│   │ Antwort von 192.168.1.1: Bytes=32 Zeit=1ms TTL=64          │  │
│   │ Antwort von 192.168.1.1: Bytes=32 Zeit<1ms TTL=64          │  │
│   │ Antwort von 192.168.1.1: Bytes=32 Zeit=1ms TTL=64          │  │
│   │                                                             │  │
│   │ Ping-Statistik für 192.168.1.1:                            │  │
│   │   Pakete: Gesendet = 4, Empfangen = 4, Verloren = 0 (0%)   │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   Beispielausgabe (Fehler):                                       │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Zeitüberschreitung der Anforderung.                        │  │
│   │ → Ziel nicht erreichbar oder Firewall blockiert           │  │
│   │                                                             │  │
│   │ Zielhost nicht erreichbar.                                 │  │
│   │ → Routing-Problem, kein Weg zum Ziel                      │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   SYSTEMATISCHE FEHLERSUCHE mit Ping:                             │
│   1. ping 127.0.0.1         → TCP/IP-Stack prüfen                │
│   2. ping <eigene IP>       → Netzwerkkarte prüfen               │
│   3. ping <Gateway>         → Router erreichbar?                  │
│   4. ping 8.8.8.8           → Internet erreichbar? (DNS-unabhängig)│
│   5. ping www.google.de     → DNS funktioniert?                   │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### tracert / traceroute

```
┌────────────────────────────────────────────────────────────────────┐
│                    TRACERT (Windows)                               │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Zeigt den Weg (Route) zum Ziel über alle Zwischenstationen.     │
│                                                                     │
│   Syntax:                                                          │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ tracert <IP-Adresse oder Hostname>                         │  │
│   │ tracert www.google.de                                      │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   Beispielausgabe:                                                │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Routenverfolgung zu www.google.de [142.250.x.x]:           │  │
│   │                                                             │  │
│   │   1    <1 ms   <1 ms   <1 ms  192.168.1.1    ← Router     │  │
│   │   2     8 ms    7 ms    8 ms  10.0.0.1       ← ISP        │  │
│   │   3    12 ms   11 ms   12 ms  172.16.x.x                  │  │
│   │   4    15 ms   14 ms   15 ms  ...                         │  │
│   │   5    20 ms   19 ms   20 ms  142.250.x.x    ← Ziel      │  │
│   │                                                             │  │
│   │ Ablaufverfolgung beendet.                                  │  │
│   │                                                             │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   Interpretation:                                                  │
│   • Jede Zeile = ein Router (Hop) auf dem Weg                    │
│   • 3 Zeitwerte = 3 Testpakete mit Antwortzeit                   │
│   • * * * = Keine Antwort (Firewall oder Timeout)                │
│   • Hilft, Engpässe oder Ausfälle zu lokalisieren               │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### nslookup

```
┌────────────────────────────────────────────────────────────────────┐
│                       NSLOOKUP                                     │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Führt DNS-Abfragen durch (Name → IP oder IP → Name).           │
│                                                                     │
│   Syntax:                                                          │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ nslookup <Hostname>                                        │  │
│   │ nslookup www.google.de                                     │  │
│   │ nslookup <IP>           → Reverse-Lookup                   │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   Beispielausgabe:                                                │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Server:   UnKnown                                          │  │
│   │ Address:  192.168.1.1    ← Verwendeter DNS-Server         │  │
│   │                                                             │  │
│   │ Nicht autoritative Antwort:                                │  │
│   │ Name:     www.google.de                                    │  │
│   │ Addresses: 142.250.185.99  ← Aufgelöste IP-Adresse        │  │
│   │           2a00:1450:4001::...  (IPv6)                      │  │
│   │                                                             │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   Fehlerdiagnose mit nslookup:                                    │
│   • "DNS request timed out" → DNS-Server nicht erreichbar        │
│   • "Non-existent domain" → Domain existiert nicht               │
│   • Falscher DNS-Server → Alternative testen (8.8.8.8)           │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### netstat

```
┌────────────────────────────────────────────────────────────────────┐
│                        NETSTAT                                     │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Zeigt Netzwerkverbindungen, offene Ports und Statistiken.       │
│                                                                     │
│   Wichtige Befehle:                                                │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ netstat -an     │ Alle Verbindungen, numerisch            │  │
│   │ netstat -b      │ Zeigt zugehörige Programme (Admin)       │  │
│   │ netstat -r      │ Zeigt Routing-Tabelle                    │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   Beispielausgabe:                                                │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Proto  Lokale Adresse     Remoteadresse      Status        │  │
│   │ TCP    0.0.0.0:80         0.0.0.0:0          ABHÖREN       │  │
│   │ TCP    192.168.1.100:443  142.250.x.x:443   HERGESTELLT   │  │
│   │ TCP    192.168.1.100:5432 192.168.1.5:1433  HERGESTELLT   │  │
│   │ UDP    0.0.0.0:53         *:*                              │  │
│   │                                                             │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   Status-Bedeutungen:                                             │
│   • ABHÖREN/LISTENING = Wartet auf Verbindungen                  │
│   • HERGESTELLT/ESTABLISHED = Aktive Verbindung                  │
│   • WARTEND/WAITING = Verbindung wird geschlossen               │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **ipconfig** | Zeigt IP-Konfiguration (Windows) |
| **ping** | Prüft Erreichbarkeit |
| **tracert** | Zeigt Route zum Ziel |
| **nslookup** | DNS-Abfragen durchführen |
| **netstat** | Zeigt Netzwerkverbindungen |
| **ICMP** | Protokoll für ping |
| **TTL** | Time to Live (Hop-Zähler) |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Welcher Befehl zeigt die IP-Konfiguration?
- Wie prüfen Sie die Erreichbarkeit eines Servers?
- Wie erneuern Sie eine DHCP-Adresse?

### Wichtig zu merken

- **ipconfig /all** = alle Netzwerkdetails
- **ipconfig /release + /renew** = neue DHCP-Adresse
- **ping 127.0.0.1** = TCP/IP-Stack testen
- **ping** = Erreichbarkeit, **tracert** = Route
- **nslookup** = DNS testen
- **169.254.x.x** = APIPA (DHCP-Fehler)

---

## Übungsaufgaben

### Aufgabe 1
Mit welchem Befehl können Sie die MAC-Adresse Ihres Computers anzeigen?

**Lösung:**
**ipconfig /all** (Windows)

Die physische Adresse (MAC-Adresse) wird in der Ausgabe angezeigt.

### Aufgabe 2
Ein Benutzer kann keine Webseiten öffnen. Wie gehen Sie systematisch vor?

**Lösung:**
1. **ping 127.0.0.1** → TCP/IP-Stack OK?
2. **ipconfig** → Hat der PC eine IP? (nicht 169.254.x.x?)
3. **ping <Gateway-IP>** → Router erreichbar?
4. **ping 8.8.8.8** → Internet erreichbar?
5. **ping www.google.de** → DNS funktioniert?
6. **nslookup www.google.de** → DNS-Auflösung prüfen

Bei Schritt 4/5 Fehler: Möglicherweise DNS-Problem → anderen DNS testen.

### Aufgabe 3
Was bedeutet eine IP-Adresse, die mit 169.254 beginnt?

**Lösung:**
Dies ist eine **APIPA-Adresse** (Automatic Private IP Addressing).

Das bedeutet:
- Der Computer konnte **keinen DHCP-Server** erreichen
- Er hat sich selbst eine IP aus dem Bereich 169.254.x.x zugewiesen
- **Keine Internetverbindung** möglich

Lösung: DHCP-Server prüfen, Kabel prüfen, ipconfig /renew versuchen

---

## Querverweise

- [07-02-04 DHCP](../07-02-ip-addressing/07-02-04-dhcp.md) - DHCP-Funktion
- [07-01-03 Protokolle](../07-01-network-fundamentals/07-01-03-protocols.md) - DNS-Protokoll
- [07-07-02 Fehlersuche](./07-07-02-troubleshooting.md) - Systematische Fehleranalyse
