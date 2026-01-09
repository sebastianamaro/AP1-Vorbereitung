# Systematische Netzwerk-Fehlersuche

## Lernziele

Nach diesem Abschnitt kannst du:
- Ein systematisches Vorgehen bei der Fehlersuche anwenden
- Fehler nach OSI-Schichten kategorisieren
- Typische Netzwerkprobleme identifizieren und beheben
- Die Bottom-Up und Top-Down Methode unterscheiden

---

## Kerninhalt

### Systematisches Vorgehen

```
┌─────────────────────────────────────────────────────────────────────┐
│           SYSTEMATISCHE FEHLERSUCHE - 6 SCHRITTE                    │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │ 1. PROBLEM IDENTIFIZIEREN                                   │    │
│  │    → Was genau funktioniert nicht?                          │    │
│  │    → Seit wann besteht das Problem?                         │    │
│  │    → Wer ist betroffen (ein User/alle)?                     │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                            ↓                                        │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │ 2. INFORMATIONEN SAMMELN                                    │    │
│  │    → Fehlermeldungen dokumentieren                          │    │
│  │    → Letzte Änderungen erfragen                             │    │
│  │    → Netzwerkdiagnose-Tools einsetzen                       │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                            ↓                                        │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │ 3. HYPOTHESE AUFSTELLEN                                     │    │
│  │    → Wahrscheinlichste Ursache bestimmen                    │    │
│  │    → OSI-Schicht eingrenzen                                 │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                            ↓                                        │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │ 4. HYPOTHESE TESTEN                                         │    │
│  │    → Eine Änderung zur Zeit!                                │    │
│  │    → Ergebnis dokumentieren                                 │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                            ↓                                        │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │ 5. LÖSUNG IMPLEMENTIEREN                                    │    │
│  │    → Problem beheben                                        │    │
│  │    → Funktionalität prüfen                                  │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                            ↓                                        │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │ 6. DOKUMENTIEREN                                            │    │
│  │    → Problem und Lösung festhalten                          │    │
│  │    → Wissensdatenbank aktualisieren                         │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Fehlersuche nach OSI-Schichten

#### Bottom-Up Methode (empfohlen)
Beginnt bei Schicht 1 (physikalisch) und arbeitet sich nach oben.

```
┌─────────────────────────────────────────────────────────────────────┐
│                   BOTTOM-UP METHODE                                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Schicht 7  ┌─────────────────────────────────────────────────┐     │
│  Anwendung  │ Browser funktioniert? E-Mail-Client?            │     │
│             └─────────────────────────────────────────────────┘     │
│                                    ↑                                │
│  Schicht 4  ┌─────────────────────────────────────────────────┐     │
│  Transport  │ netstat -an → Ports offen? Verbindungen aktiv?  │     │
│             └─────────────────────────────────────────────────┘     │
│                                    ↑                                │
│  Schicht 3  ┌─────────────────────────────────────────────────┐     │
│  Netzwerk   │ ping Gateway? ping 8.8.8.8? IP-Adresse korrekt? │     │
│             └─────────────────────────────────────────────────┘     │
│                                    ↑                                │
│  Schicht 2  ┌─────────────────────────────────────────────────┐     │
│  Sicherung  │ MAC-Adresse vorhanden? Switch-Port aktiv?       │     │
│             └─────────────────────────────────────────────────┘     │
│                                    ↑                                │
│  Schicht 1  ┌─────────────────────────────────────────────────┐     │
│  Physisch   │ Kabel eingesteckt? Link-LED an? Kabel defekt?   │     │
│             └─────────────────────────────────────────────────┘     │
│                                                                      │
│  START HIER → Erst prüfen, ob physische Verbindung besteht          │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

#### Top-Down Methode
Beginnt bei Schicht 7 (Anwendung) - sinnvoll, wenn ein bestimmter Dienst nicht funktioniert.

### Prüfschema nach Schichten

| Schicht | Prüfung | Tools |
|---------|---------|-------|
| **1 - Physisch** | Kabel, LEDs, Stecker | Sichtprüfung, Kabeltester |
| **2 - Sicherung** | MAC-Adresse, Switch | ipconfig /all, Switch-Logs |
| **3 - Netzwerk** | IP, Gateway, Routing | ping, tracert, ipconfig |
| **4 - Transport** | Ports, Firewall | netstat, telnet |
| **7 - Anwendung** | Dienste, DNS | nslookup, Browser |

### Typische Fehlerbilder und Lösungen

```
┌─────────────────────────────────────────────────────────────────────┐
│                 HÄUFIGE NETZWERKPROBLEME                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  SYMPTOM                    │ WAHRSCHEINLICHE URSACHE               │
│  ─────────────────────────────────────────────────────────────────  │
│                                                                      │
│  Kein Netzwerk              │ → Kabel nicht eingesteckt             │
│  (Link-LED aus)             │ → Kabel defekt                        │
│                             │ → Switch-Port deaktiviert             │
│  ─────────────────────────────────────────────────────────────────  │
│                                                                      │
│  "Eingeschränkte            │ → Kein DHCP-Server erreichbar         │
│  Konnektivität"             │ → APIPA-Adresse (169.254.x.x)         │
│                             │ → Falsches VLAN                       │
│  ─────────────────────────────────────────────────────────────────  │
│                                                                      │
│  ping Gateway OK            │ → DNS-Problem                         │
│  ping google.de FEHLER      │ → nslookup prüfen                     │
│                             │ → DNS-Server ändern                   │
│  ─────────────────────────────────────────────────────────────────  │
│                                                                      │
│  Langsame Verbindung        │ → Duplex-Mismatch                     │
│                             │ → Netzwerküberlastung                 │
│                             │ → Schlechtes Kabel                    │
│  ─────────────────────────────────────────────────────────────────  │
│                                                                      │
│  Website nicht erreichbar   │ → Firewall blockiert                  │
│  (ping funktioniert)        │ → Port 80/443 gesperrt                │
│                             │ → Proxy-Einstellungen                 │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Systematischer Ping-Test

```
┌─────────────────────────────────────────────────────────────────────┐
│              PING-DIAGNOSE (systematisch)                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  1. ping 127.0.0.1  (Localhost)                                     │
│     │                                                                │
│     ├── FEHLER → TCP/IP-Stack defekt → Netzwerk neu installieren    │
│     │                                                                │
│     └── OK → Weiter mit Schritt 2                                   │
│              │                                                       │
│  2. ping [eigene IP]                                                │
│     │                                                                │
│     ├── FEHLER → Netzwerkadapter-Problem                            │
│     │                                                                │
│     └── OK → Weiter mit Schritt 3                                   │
│              │                                                       │
│  3. ping [Gateway]                                                  │
│     │                                                                │
│     ├── FEHLER → Lokales Netzwerkproblem (Kabel, Switch, VLAN)     │
│     │                                                                │
│     └── OK → Weiter mit Schritt 4                                   │
│              │                                                       │
│  4. ping 8.8.8.8 (Google DNS)                                       │
│     │                                                                │
│     ├── FEHLER → Routing-Problem oder Internetausfall               │
│     │                                                                │
│     └── OK → Weiter mit Schritt 5                                   │
│              │                                                       │
│  5. ping google.de                                                  │
│     │                                                                │
│     ├── FEHLER → DNS-Problem → nslookup prüfen                      │
│     │                                                                │
│     └── OK → Netzwerk funktioniert!                                 │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### APIPA-Adressen erkennen

```
┌─────────────────────────────────────────────────────────────────────┐
│                    APIPA-ADRESSE                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  IP-Adresse: 169.254.x.x  ← Automatisch zugewiesen!                 │
│                                                                      │
│  Bedeutung:                                                          │
│  → Kein DHCP-Server erreichbar                                      │
│  → Windows weist sich selbst eine APIPA-Adresse zu                  │
│  → Kommunikation nur mit anderen APIPA-Geräten möglich              │
│                                                                      │
│  Ursachen:                                                          │
│  → DHCP-Server ausgefallen                                          │
│  → Falsches VLAN                                                    │
│  → Netzwerkkabel nicht richtig verbunden                            │
│  → DHCP-Pool erschöpft                                              │
│                                                                      │
│  Lösung:                                                            │
│  1. ipconfig /release                                               │
│  2. ipconfig /renew                                                 │
│  3. Wenn weiterhin APIPA → DHCP-Server prüfen                       │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Bottom-Up** | Fehlersuche von Schicht 1 aufwärts |
| **Top-Down** | Fehlersuche von Schicht 7 abwärts |
| **APIPA** | Automatic Private IP Addressing (169.254.x.x) |
| **Duplex-Mismatch** | Unterschiedliche Duplex-Einstellungen |
| **Link-LED** | Zeigt physische Verbindung an |
| **Troubleshooting** | Systematische Fehlersuche |

---

## Prüfungstipps

1. **OSI-Schichten bei Fehlersuche:**
   - Schicht 1 = physische Probleme (Kabel, Stecker)
   - Schicht 3 = IP-Probleme (Adresse, Gateway)
   - Schicht 7 = Anwendungsprobleme (DNS, Dienste)

2. **Typische Prüfungsfragen:**
   - Welche Methode bei "kein Netzwerk"? → Bottom-Up
   - Was bedeutet APIPA-Adresse? → Kein DHCP erreichbar
   - Welcher Schritt nach erfolgreichem Gateway-Ping? → Externe IP

3. **Wichtig:** Immer nur EINE Änderung testen, dann Ergebnis prüfen!

---

## Übungsaufgaben

### Aufgabe 1: Fehleranalyse

Ein Mitarbeiter meldet: "Ich kann keine Websites aufrufen, aber E-Mail funktioniert."

Analysieren Sie das Problem systematisch:
a) Welche Schicht ist wahrscheinlich betroffen?
b) Welche Tests würden Sie durchführen?
c) Was ist die wahrscheinlichste Ursache?

<details>
<summary>Lösung anzeigen</summary>

a) **Schicht 7 (Anwendung)** - da E-Mail funktioniert, sind die unteren Schichten in Ordnung.

b) **Tests:**
1. `ping google.de` - funktioniert wahrscheinlich
2. Browser-Proxy-Einstellungen prüfen
3. Firewall-Regeln für HTTP/HTTPS (Port 80/443) prüfen
4. Mit anderem Browser testen

c) **Wahrscheinlichste Ursachen:**
- Proxy-Server falsch konfiguriert
- Firewall blockiert Port 80/443
- Browser-Einstellung (z.B. Offline-Modus)

</details>

### Aufgabe 2: Systematische Diagnose

Ein PC zeigt folgende Ergebnisse:
- `ping 127.0.0.1` → OK
- `ping 192.168.1.50` (eigene IP) → OK
- `ping 192.168.1.1` (Gateway) → Fehler
- Link-LED am Switch → AN

Wo liegt das Problem?

<details>
<summary>Lösung anzeigen</summary>

**Analyse:**
- TCP/IP-Stack funktioniert (127.0.0.1 OK)
- Netzwerkadapter funktioniert (eigene IP OK)
- Physische Verbindung besteht (Link-LED an)
- Gateway nicht erreichbar

**Problem:** Schicht 2/3 - Lokales Netzwerk

**Mögliche Ursachen:**
1. **Falsches VLAN** - PC und Gateway in unterschiedlichen VLANs
2. **Falsche Subnetzmaske** - PC kann Gateway nicht erreichen
3. **Falsche Gateway-Adresse** konfiguriert
4. **Switch-Port-Problem** (MAC-Filterung, Port-Security)

**Nächste Schritte:**
- `ipconfig /all` prüfen (Subnetzmaske, Gateway)
- VLAN-Zuordnung am Switch prüfen
- ARP-Tabelle prüfen (`arp -a`)

</details>

### Aufgabe 3: APIPA-Problem

Bei der ConSystem GmbH beschweren sich mehrere Mitarbeiter einer Abteilung über Netzwerkprobleme. Ein Techniker stellt fest, dass alle betroffenen PCs IP-Adressen im Bereich 169.254.x.x haben.

a) Was bedeutet diese Adresse?
b) Was ist die wahrscheinlichste Ursache?
c) Welche Schritte zur Problemlösung empfehlen Sie?

<details>
<summary>Lösung anzeigen</summary>

a) **APIPA-Adresse (Automatic Private IP Addressing)**
- Windows weist diese automatisch zu
- Bedeutet: Kein DHCP-Server erreichbar

b) **Wahrscheinlichste Ursachen:**
- DHCP-Server ausgefallen oder überlastet
- DHCP-Pool erschöpft (keine Adressen mehr frei)
- Netzwerkproblem zwischen Abteilung und DHCP-Server
- Switch-Problem oder falsches VLAN

c) **Lösungsschritte:**
1. DHCP-Server-Status prüfen (läuft der Dienst?)
2. DHCP-Pool prüfen (Adressen verfügbar?)
3. Netzwerkverbindung zum DHCP-Server prüfen
4. VLAN-Konfiguration verifizieren
5. Auf betroffenen PCs: `ipconfig /release` dann `ipconfig /renew`
6. Falls DHCP-Server OK: Switch/Routing zwischen Abteilung und Server prüfen

</details>

---

## Querverweise

- [Diagnose-Tools](07-07-01-diagnostic-tools.md) - ipconfig, ping, tracert
- [DHCP](../07-02-ip-addressing/07-02-04-dhcp.md) - DHCP-Grundlagen
- [OSI-Modell](../07-01-network-fundamentals/07-01-01-osi-model.md) - Schichtenmodell
- [Netzwerk-Hardware](../07-05-network-hardware.md) - Switch und Router
