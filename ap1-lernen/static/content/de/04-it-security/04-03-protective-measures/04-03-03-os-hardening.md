# Betriebssystem-Härtung (OS Hardening)

## Lernziele

Nach diesem Kapitel solltest du:
- Den Begriff "Härtung" (Hardening) erklären können
- Typische Härtungsmaßnahmen für Betriebssysteme kennen
- Den Unterschied zwischen Client- und Server-Härtung verstehen
- Praktische Maßnahmen anwenden können

**Hinweis:** Dieses Thema ist NEU im Prüfungskatalog 2025 und daher besonders prüfungsrelevant!

---

## Kerninhalt

### Was ist Betriebssystem-Härtung?

**Härtung (Hardening)** bezeichnet die Absicherung eines Systems durch:
- Entfernen/Deaktivieren unnötiger Funktionen
- Schließen von Sicherheitslücken
- Minimierung der Angriffsfläche

> Grundprinzip: "Alles, was nicht benötigt wird, wird deaktiviert oder entfernt."

```
┌─────────────────────────────────────────────────────────────────┐
│              BETRIEBSSYSTEM-HÄRTUNG                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  STANDARDINSTALLATION            GEHÄRTETES SYSTEM              │
│  ┌─────────────────────┐         ┌─────────────────────┐       │
│  │ █████████████████   │         │ █████              │       │
│  │ █████████████████   │   ──►   │ █████              │       │
│  │ █████████████████   │         │ █████              │       │
│  │                     │         │                     │       │
│  │ Große Angriffsfläche│         │ Kleine Angriffs-   │       │
│  │ Viele offene Ports  │         │ fläche             │       │
│  │ Unnötige Dienste    │         │ Nur notwendige     │       │
│  │ Standardkonfig.     │         │ Dienste aktiv      │       │
│  └─────────────────────┘         └─────────────────────┘       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Grundprinzipien der Härtung

| Prinzip | Beschreibung |
|---------|--------------|
| **Least Privilege** | Nur minimale Berechtigungen vergeben |
| **Least Functionality** | Nur notwendige Funktionen aktivieren |
| **Defense in Depth** | Mehrere Sicherheitsschichten |
| **Minimierung der Angriffsfläche** | Weniger Dienste = weniger Angriffspunkte |

---

### Härtungsmaßnahmen im Überblick

```
┌─────────────────────────────────────────────────────────────────┐
│              HÄRTUNGSMASSNAHMEN                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │ BENUTZER &      │  │ DIENSTE &       │  │ NETZWERK        │ │
│  │ KONTEN          │  │ PROZESSE        │  │                 │ │
│  │                 │  │                 │  │                 │ │
│  │ • Admin-Konten  │  │ • Unnötige      │  │ • Firewall      │ │
│  │   beschränken   │  │   Dienste       │  │ • Offene Ports  │ │
│  │ • Passwort-     │  │   deaktivieren  │  │   schließen     │ │
│  │   richtlinien   │  │ • Autostart     │  │ • Protokolle    │ │
│  │ • Gastkonten    │  │   bereinigen    │  │   deaktivieren  │ │
│  │   deaktivieren  │  │                 │  │                 │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘ │
│                                                                 │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │ SOFTWARE        │  │ DATEISYSTEM     │  │ PROTOKOLLIERUNG │ │
│  │                 │  │                 │  │                 │ │
│  │ • Updates       │  │ • Berechtigungen│  │ • Audit-Logs    │ │
│  │   installieren  │  │ • Verschlüs-    │  │   aktivieren    │ │
│  │ • Unnötige SW   │  │   selung        │  │ • Ereignisse    │ │
│  │   deinstallieren│  │ • Sichere       │  │   überwachen    │ │
│  │                 │  │   Freigaben     │  │                 │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Konkrete Härtungsmaßnahmen

#### 1. Benutzerkonten und Authentifizierung

| Maßnahme | Beschreibung |
|----------|--------------|
| **Administrator-Konto umbenennen** | Standard-Namen erschweren Angriffe |
| **Gastkonto deaktivieren** | Kein anonymer Zugang |
| **Passwortrichtlinien** | Mindestlänge, Komplexität, Ablauf |
| **Kontosperrung** | Nach mehreren Fehlversuchen |
| **Separate Admin-Konten** | Nicht als Admin im Alltag arbeiten |

```
┌────────────────────────────────────────────────────────────────┐
│                 PASSWORTRICHTLINIEN                            │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Empfohlen:                                                    │
│  • Mindestlänge: 12+ Zeichen                                   │
│  • Komplexität: Groß/Klein, Zahlen, Sonderzeichen              │
│  • Kontosperrung: Nach 3-5 Fehlversuchen                       │
│  • Passwort-History: Letzte 10 Passwörter sperren              │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### 2. Dienste und Prozesse

| Maßnahme | Windows | Linux |
|----------|---------|-------|
| **Unnötige Dienste deaktivieren** | services.msc | systemctl disable |
| **Autostart bereinigen** | msconfig / Task-Manager | systemd / /etc/rc.local |
| **Nur benötigte Software** | Programme entfernen | apt/yum remove |

**Beispiele für oft unnötige Dienste:**
- Remote Desktop (wenn nicht benötigt)
- Telnet (durch SSH ersetzen)
- FTP (durch SFTP ersetzen)
- Bluetooth (wenn nicht benötigt)
- NetBIOS über TCP/IP

#### 3. Netzwerk-Härtung

| Maßnahme | Beschreibung |
|----------|--------------|
| **Firewall aktivieren** | Ein- und ausgehenden Verkehr kontrollieren |
| **Unnötige Ports schließen** | Nur notwendige Ports öffnen |
| **Unsichere Protokolle deaktivieren** | Telnet, FTP, HTTP durch sichere Alternativen ersetzen |
| **IPv6 deaktivieren** | Wenn nicht benötigt |

```
┌────────────────────────────────────────────────────────────────┐
│              PORTÜBERSICHT                                     │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Oft unnötig offene Ports:                                     │
│  • 23 (Telnet) → SSH (22) verwenden                            │
│  • 21 (FTP) → SFTP (22) verwenden                              │
│  • 135-139 (NetBIOS) → Wenn nicht im lokalen Netz nötig        │
│  • 445 (SMB) → Nur wenn Dateifreigaben benötigt                │
│  • 3389 (RDP) → VPN vorschalten oder deaktivieren              │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### 4. Software und Updates

| Maßnahme | Beschreibung |
|----------|--------------|
| **Regelmäßige Updates** | Sicherheitsupdates zeitnah einspielen |
| **Automatische Updates** | Für kritische Patches aktivieren |
| **Software entfernen** | Nicht benötigte Programme deinstallieren |
| **Anwendungssteuerung** | Nur erlaubte Software ausführbar |

#### 5. Dateisystem und Verschlüsselung

| Maßnahme | Beschreibung |
|----------|--------------|
| **Dateiberechtigungen prüfen** | Least Privilege für Dateien und Ordner |
| **Festplattenverschlüsselung** | BitLocker (Windows), LUKS (Linux) |
| **Sichere Freigaben** | Nur notwendige Freigaben, mit Berechtigungen |
| **Temp-Dateien bereinigen** | Regelmäßig temporäre Dateien löschen |

#### 6. Protokollierung und Überwachung

| Maßnahme | Beschreibung |
|----------|--------------|
| **Audit-Logs aktivieren** | Anmeldeversuche, Dateizugriffe |
| **Log-Rotation** | Logs regelmäßig archivieren |
| **Zentrale Protokollierung** | Logs auf separaten Server |
| **Integritätsprüfung** | Änderungen an Systemdateien erkennen |

---

### Checkliste: Windows-Härtung

| Bereich | Maßnahme | Umsetzung |
|---------|----------|-----------|
| **Konten** | Gastkonto deaktivieren | Computerverwaltung |
| **Konten** | Admin umbenennen | Lokale Sicherheitsrichtlinie |
| **Dienste** | Unnötige Dienste deaktivieren | services.msc |
| **Firewall** | Windows Firewall aktivieren | Systemsteuerung |
| **Updates** | Automatische Updates | Windows Update |
| **Verschlüsselung** | BitLocker aktivieren | Systemsteuerung |
| **Netzwerk** | NetBIOS deaktivieren | Netzwerkadapter-Eigenschaften |

### Checkliste: Linux-Härtung

| Bereich | Maßnahme | Umsetzung |
|---------|----------|-----------|
| **Konten** | Root-Login per SSH deaktivieren | /etc/ssh/sshd_config |
| **Dienste** | Unnötige Dienste deaktivieren | systemctl disable |
| **Firewall** | iptables/nftables konfigurieren | Firewall-Regeln |
| **Updates** | Regelmäßig patchen | apt update && apt upgrade |
| **Berechtigungen** | SUID/SGID prüfen | find / -perm -4000 |
| **SSH** | Key-basierte Authentifizierung | .ssh/authorized_keys |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Härtung (Hardening)** | Absicherung eines Systems durch Minimierung der Angriffsfläche |
| **Angriffsfläche** | Alle möglichen Angriffspunkte eines Systems |
| **Least Privilege** | Minimale Berechtigungen |
| **Least Functionality** | Nur notwendige Funktionen |
| **Defense in Depth** | Mehrschichtige Sicherheit |
| **Audit-Log** | Protokoll sicherheitsrelevanter Ereignisse |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was versteht man unter Betriebssystem-Härtung?
- Nennen Sie drei Maßnahmen zur OS-Härtung
- Was bedeutet das Prinzip "Least Privilege"?
- Warum sollten unnötige Dienste deaktiviert werden?

### Wichtig zu merken

- **Härtung** = Minimierung der Angriffsfläche
- **Grundprinzip:** "Was nicht benötigt wird, wird deaktiviert"
- **Least Privilege:** Nur minimale Berechtigungen vergeben
- **Defense in Depth:** Mehrere Sicherheitsschichten

---

## Übungsaufgaben

### Aufgabe 1
Was versteht man unter Betriebssystem-Härtung (OS Hardening)?

**Lösung:** Betriebssystem-Härtung bezeichnet die Absicherung eines Betriebssystems durch Entfernen oder Deaktivieren unnötiger Funktionen, Schließen von Sicherheitslücken und Minimierung der Angriffsfläche. Das Grundprinzip lautet: "Alles, was nicht benötigt wird, wird deaktiviert oder entfernt."

### Aufgabe 2
Nennen Sie vier konkrete Maßnahmen zur Härtung eines Windows-Systems.

**Lösung:**
1. **Gastkonto deaktivieren** (kein anonymer Zugang)
2. **Windows Firewall aktivieren** (Netzwerkverkehr kontrollieren)
3. **Unnötige Dienste deaktivieren** (kleinere Angriffsfläche)
4. **Automatische Updates aktivieren** (Sicherheitslücken schließen)

(Weitere mögliche Antworten: BitLocker aktivieren, Administrator-Konto umbenennen, Passwortrichtlinien, NetBIOS deaktivieren)

### Aufgabe 3
Erklären Sie das Prinzip "Least Privilege" im Kontext der Härtung.

**Lösung:** "Least Privilege" (Prinzip der minimalen Rechte) bedeutet, dass Benutzer und Prozesse nur die minimal notwendigen Berechtigungen erhalten sollen. Beispiel: Ein normaler Benutzer arbeitet nicht als Administrator, sondern mit einem eingeschränkten Konto. Nur wenn Admin-Rechte wirklich benötigt werden, wird auf ein Admin-Konto gewechselt.

### Aufgabe 4
Warum sollte man unnötige Dienste auf einem Server deaktivieren?

**Lösung:** Unnötige Dienste vergrößern die **Angriffsfläche** des Systems:
1. Jeder laufende Dienst kann potenzielle Sicherheitslücken haben
2. Offene Ports bieten Angriffspunkte
3. Deaktivierte Dienste verbrauchen keine Systemressourcen
4. Weniger laufende Software = weniger zu patchende Software

---

## Querverweise

- [04-03-01 Technische Maßnahmen](./04-03-01-technical-measures.md) - Überblick Schutzmaßnahmen
- [04-03-02 Authentifizierung-2FA](./04-03-02-authentication-2fa.md) - Kontensicherheit
- [04-03-04 Personal Firewall](./04-03-04-personal-firewall.md) - Firewall-Konfiguration
- [05-03-01 Grundlagen Betriebssysteme](../../05-it-systems/05-03-operating-systems/05-03-01-fundamentals-operating-systems.md) - OS-Grundlagen
