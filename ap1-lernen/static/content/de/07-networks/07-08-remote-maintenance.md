# Fernwartung und Remote-Zugriff

## Lernziele

Nach diesem Abschnitt kannst du:
- Verschiedene Fernwartungstechnologien unterscheiden
- Protokolle für Remote-Zugriff benennen (RDP, SSH, VNC)
- Sicherheitsaspekte bei Fernwartung erklären
- Geeignete Lösungen für verschiedene Szenarien auswählen

---

## Kerninhalt

### Was ist Fernwartung?

**Fernwartung** ermöglicht den Zugriff auf Computer und Netzwerkgeräte über eine Netzwerkverbindung, ohne physisch vor Ort zu sein. Dies ist essenziell für:
- IT-Support und Helpdesk
- Serververwaltung
- Homeoffice-Anbindung
- Wartung von Außenstandorten

### Fernwartungstechnologien im Überblick

```
┌─────────────────────────────────────────────────────────────────────┐
│              FERNWARTUNGSTECHNOLOGIEN                                │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │                    RDP (Remote Desktop Protocol)               │  │
│  │  ┌─────────┐           Port 3389          ┌─────────┐         │  │
│  │  │ Client  │◄────────────────────────────►│ Server  │         │  │
│  │  │(Windows)│         verschlüsselt        │(Windows)│         │  │
│  │  └─────────┘                              └─────────┘         │  │
│  │  → Vollständige Desktop-Übernahme                             │  │
│  │  → Windows-integriert                                         │  │
│  └───────────────────────────────────────────────────────────────┘  │
│                                                                      │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │                    SSH (Secure Shell)                          │  │
│  │  ┌─────────┐           Port 22            ┌─────────┐         │  │
│  │  │ Client  │◄────────────────────────────►│ Server  │         │  │
│  │  │(Putty)  │         verschlüsselt        │ (Linux) │         │  │
│  │  └─────────┘                              └─────────┘         │  │
│  │  → Kommandozeilen-Zugriff                                     │  │
│  │  → Standard für Linux/Unix                                    │  │
│  └───────────────────────────────────────────────────────────────┘  │
│                                                                      │
│  ┌───────────────────────────────────────────────────────────────┐  │
│  │                    VNC (Virtual Network Computing)             │  │
│  │  ┌─────────┐           Port 5900          ┌─────────┐         │  │
│  │  │ Viewer  │◄────────────────────────────►│ Server  │         │  │
│  │  │         │      (unverschlüsselt!)      │         │         │  │
│  │  └─────────┘                              └─────────┘         │  │
│  │  → Plattformübergreifend                                      │  │
│  │  → Nur mit VPN/SSH-Tunnel sicher!                             │  │
│  └───────────────────────────────────────────────────────────────┘  │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Vergleich der Protokolle

| Eigenschaft | RDP | SSH | VNC |
|-------------|-----|-----|-----|
| **Port** | 3389 | 22 | 5900+ |
| **Verschlüsselung** | Ja | Ja | Nein* |
| **Oberfläche** | Grafisch | Kommandozeile | Grafisch |
| **Plattform** | Windows | Linux/Unix | Alle |
| **Performance** | Hoch | Sehr hoch | Mittel |
| **Typischer Einsatz** | Windows-Server | Linux-Server | Cross-Platform |

*VNC sollte nur über VPN oder SSH-Tunnel verwendet werden!

### RDP (Remote Desktop Protocol)

```
┌─────────────────────────────────────────────────────────────────────┐
│                    RDP - REMOTE DESKTOP                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Eigenschaften:                                                      │
│  ─────────────────────────────────────────────────────────────────  │
│  → Microsoft-Protokoll, in Windows integriert                       │
│  → Port 3389 (TCP)                                                  │
│  → TLS-Verschlüsselung                                              │
│  → Audio, Drucker, Laufwerke durchreichbar                          │
│  → Network Level Authentication (NLA) empfohlen                     │
│                                                                      │
│  Voraussetzungen:                                                    │
│  ─────────────────────────────────────────────────────────────────  │
│  → Windows Professional/Enterprise (nicht Home!)                    │
│  → Remotedesktop muss aktiviert sein                                │
│  → Firewall-Regel für Port 3389                                     │
│  → Benutzer muss Berechtigung haben                                 │
│                                                                      │
│  Client-Programm:                                                    │
│  ─────────────────────────────────────────────────────────────────  │
│  → Windows: mstsc.exe (Remotedesktopverbindung)                     │
│  → macOS/Linux: Microsoft Remote Desktop (App)                      │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### SSH (Secure Shell)

```
┌─────────────────────────────────────────────────────────────────────┐
│                    SSH - SECURE SHELL                                │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Eigenschaften:                                                      │
│  ─────────────────────────────────────────────────────────────────  │
│  → Sicherer Ersatz für Telnet                                       │
│  → Port 22 (TCP)                                                    │
│  → Starke Verschlüsselung (AES, etc.)                               │
│  → Authentifizierung: Passwort oder SSH-Key                         │
│  → Tunneling möglich (Port-Forwarding)                              │
│                                                                      │
│  Authentifizierungsmethoden:                                        │
│  ─────────────────────────────────────────────────────────────────  │
│                                                                      │
│  1. Passwort-Authentifizierung                                      │
│     → Einfach, aber anfälliger für Brute-Force                      │
│                                                                      │
│  2. SSH-Key (Public/Private Key)                                    │
│     ┌──────────────┐          ┌──────────────┐                      │
│     │ Private Key  │          │ Public Key   │                      │
│     │ (geheim!)    │          │ (auf Server) │                      │
│     │ ~/.ssh/id_rsa│          │ authorized_  │                      │
│     │              │          │ keys         │                      │
│     └──────────────┘          └──────────────┘                      │
│     → Sicherer, kein Passwort nötig                                 │
│                                                                      │
│  Client-Programme:                                                   │
│  ─────────────────────────────────────────────────────────────────  │
│  → Windows: PuTTY, Windows Terminal, OpenSSH                        │
│  → Linux/macOS: ssh (integriert)                                    │
│                                                                      │
│  Beispielbefehl:  ssh benutzer@server.de                            │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Kommerzielle Fernwartungslösungen

| Lösung | Beschreibung | Besonderheit |
|--------|--------------|--------------|
| **TeamViewer** | Plattformübergreifend | NAT-Traversal, keine Portfreigabe nötig |
| **AnyDesk** | Schnelle Verbindung | Geringer Ressourcenverbrauch |
| **Remote Desktop Gateway** | Microsoft | Zugriff über HTTPS (443) |
| **VPN + RDP** | Kombination | Sicherer Tunnel für RDP |

### VPN für sichere Fernwartung

```
┌─────────────────────────────────────────────────────────────────────┐
│              VPN + FERNWARTUNG                                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│   Mitarbeiter                                VPN-Gateway             │
│   (Homeoffice)                               (Firma)                 │
│   ┌─────────┐                               ┌─────────┐             │
│   │         │                               │         │             │
│   │   PC    │◄─────── VPN-Tunnel ──────────►│ Router  │             │
│   │         │    (verschlüsselt)            │         │             │
│   └─────────┘                               └────┬────┘             │
│                                                  │                   │
│                                                  ▼                   │
│                                             ┌─────────┐             │
│                                             │ Internes│             │
│                                             │ Netzwerk│             │
│                                             │ (Server)│             │
│                                             └─────────┘             │
│                                                                      │
│   Vorteile:                                                         │
│   → Alle Dienste über einen sicheren Tunnel                         │
│   → Keine einzelnen Portfreigaben nötig                             │
│   → Zugriff wie im lokalen Netzwerk                                 │
│                                                                      │
│   VPN-Protokolle:                                                   │
│   → IPsec, OpenVPN, WireGuard                                       │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Sicherheitsaspekte

```
┌─────────────────────────────────────────────────────────────────────┐
│              SICHERHEIT BEI FERNWARTUNG                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ✓ EMPFOHLEN                      ✗ VERMEIDEN                       │
│  ────────────────────────────────────────────────────────────────   │
│                                                                      │
│  VPN vor Fernzugriff              Direkte RDP-Freigabe im Internet  │
│                                                                      │
│  SSH-Keys statt Passwörter        Standard-Ports ohne Änderung      │
│                                                                      │
│  Zwei-Faktor-Authentifizierung    VNC ohne Verschlüsselung          │
│                                                                      │
│  Fail2Ban (Brute-Force-Schutz)    Einfache Passwörter               │
│                                                                      │
│  Aktualisierte Software           Veraltete Protokolle (Telnet)     │
│                                                                      │
│  Logging und Monitoring           Unbeaufsichtigte Sitzungen        │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **RDP** | Remote Desktop Protocol - Microsoft-Fernzugriff |
| **SSH** | Secure Shell - verschlüsselter Kommandozeilenzugriff |
| **VNC** | Virtual Network Computing - plattformübergreifend |
| **VPN** | Virtual Private Network - sicherer Tunnel |
| **NLA** | Network Level Authentication - RDP-Sicherheit |
| **SSH-Key** | Schlüsselpaar für passwortlose Authentifizierung |
| **NAT-Traversal** | Verbindung ohne Portfreigabe |
| **Port-Forwarding** | Weiterleitung von Ports durch Tunnel |

---

## Prüfungstipps

1. **Ports merken:**
   - RDP = **3389**
   - SSH = **22**
   - VNC = **5900**
   - Telnet = 23 (unsicher, nicht verwenden!)

2. **Sicherheit:**
   - SSH ist sicherer als Telnet
   - VPN + RDP ist sicherer als direktes RDP
   - SSH-Keys sind sicherer als Passwörter

3. **Typische Prüfungsfragen:**
   - Welches Protokoll für Linux-Server? → SSH
   - Welcher Port für Windows-Fernzugriff? → 3389 (RDP)
   - Wie sichert man VNC ab? → Über VPN oder SSH-Tunnel

---

## Übungsaufgaben

### Aufgabe 1: Protokollauswahl

Welches Fernwartungsprotokoll empfehlen Sie für folgende Szenarien?

a) Administration eines Linux-Webservers
b) Fernzugriff auf einen Windows-Terminalserver
c) Support für einen Mac-Benutzer von einem Windows-PC aus

<details>
<summary>Lösung anzeigen</summary>

a) **SSH** - Standard für Linux-Server, Kommandozeile ausreichend
b) **RDP** - Windows-integriert, grafische Oberfläche
c) **TeamViewer/AnyDesk** oder **VNC über SSH-Tunnel** - plattformübergreifend, einfache Einrichtung

</details>

### Aufgabe 2: Sicherheitsanalyse

Ein Unternehmen möchte seinen Mitarbeitern Homeoffice ermöglichen. Der IT-Admin plant, Port 3389 direkt an der Firewall freizugeben.

a) Welche Risiken bestehen bei dieser Konfiguration?
b) Welche sichere Alternative empfehlen Sie?

<details>
<summary>Lösung anzeigen</summary>

a) **Risiken bei direkter RDP-Freigabe:**
- Brute-Force-Angriffe auf RDP-Port möglich
- RDP-Schwachstellen können ausgenutzt werden
- Kein zusätzlicher Schutz (nur Passwort)
- Sichtbar für Port-Scanner weltweit

b) **Sichere Alternativen:**
1. **VPN-Lösung:**
   - Mitarbeiter verbinden sich erst per VPN
   - Dann RDP-Zugriff nur innerhalb des VPN-Tunnels

2. **Remote Desktop Gateway:**
   - RDP über HTTPS (Port 443)
   - Zusätzliche Authentifizierungsebene

3. **Zwei-Faktor-Authentifizierung:**
   - Zusätzlicher Faktor neben Passwort

4. **Kommerzielle Lösung (TeamViewer/AnyDesk):**
   - Keine Portfreigabe nötig
   - Verschlüsselte Verbindung

</details>

### Aufgabe 3: SSH-Konfiguration

Die ConSystem GmbH möchte die SSH-Sicherheit auf ihren Linux-Servern verbessern.

Nennen Sie drei Maßnahmen zur Absicherung von SSH.

<details>
<summary>Lösung anzeigen</summary>

**Maßnahmen zur SSH-Absicherung:**

1. **SSH-Keys statt Passwörter**
   - Passwort-Authentifizierung deaktivieren
   - Nur Key-basierte Anmeldung erlauben

2. **Root-Login deaktivieren**
   - `PermitRootLogin no` in sshd_config
   - Anmeldung nur als normaler Benutzer, dann sudo

3. **Standard-Port ändern**
   - Von Port 22 auf anderen Port (z.B. 2222)
   - Reduziert automatisierte Angriffe

4. **Fail2Ban installieren**
   - Sperrt IP-Adressen nach fehlgeschlagenen Versuchen
   - Schutz vor Brute-Force

5. **Firewall-Beschränkung**
   - SSH nur von bestimmten IP-Adressen erlauben
   - z.B. nur aus dem Firmennetzwerk

</details>

---

## Querverweise

- [TCP/IP-Protokolle](07-01-network-fundamentals/07-01-03-protocols.md) - SSH, Telnet
- [IT-Sicherheit Authentifizierung](../04-it-security/04-03-protective-measures/04-03-02-authentication-2fa.md) - 2FA
- [Diagnose-Tools](07-07-network-troubleshooting/07-07-01-diagnostic-tools.md) - Netzwerk-Tools
- [Domänen-Integration](07-09-domain-integration.md) - Netzwerk-Anbindung
