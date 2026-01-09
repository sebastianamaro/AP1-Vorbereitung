# Technische Schutzmaßnahmen

## Lernziele

Nach diesem Kapitel solltest du:
- Verschiedene technische Schutzmaßnahmen kennen
- Maßnahmen den Schutzzielen zuordnen können
- Den Einsatzbereich der Maßnahmen verstehen
- Vor- und Nachteile abwägen können

---

## Kerninhalt

### Überblick: Technische Maßnahmen

```
┌─────────────────────────────────────────────────────────────────┐
│              TECHNISCHE SCHUTZMASSNAHMEN                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │ ZUGRIFFS-       │  │ NETZWERK-       │  │ DATEN-          │ │
│  │ KONTROLLE       │  │ SICHERHEIT      │  │ SICHERHEIT      │ │
│  │                 │  │                 │  │                 │ │
│  │ • Authentifi-   │  │ • Firewall      │  │ • Verschlüs-    │ │
│  │   zierung       │  │ • VPN           │  │   selung        │ │
│  │ • Autorisierung │  │ • IDS/IPS       │  │ • Backup        │ │
│  │ • 2FA/MFA       │  │ • Proxy         │  │ • DLP           │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘ │
│                                                                 │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │ SYSTEM-         │  │ ÜBERWACHUNG     │  │ PHYSISCHE       │ │
│  │ SICHERHEIT      │  │                 │  │ SICHERHEIT      │ │
│  │                 │  │                 │  │                 │ │
│  │ • Updates       │  │ • Logging       │  │ • Zutritts-     │ │
│  │ • Härtung       │  │ • SIEM          │  │   kontrolle     │ │
│  │ • Antivirus     │  │ • Monitoring    │  │ • USV           │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Zugriffskontrolle

#### Authentifizierung

**Authentifizierung** prüft die Identität eines Benutzers ("Wer bist du?").

| Methode | Beschreibung | Sicherheit |
|---------|--------------|------------|
| **Passwort** | Geheimes Wissen | Mittel |
| **Smartcard** | Physischer Besitz | Hoch |
| **Biometrie** | Fingerabdruck, Gesicht | Hoch |
| **2FA/MFA** | Mehrere Faktoren | Sehr hoch |

#### Autorisierung

**Autorisierung** prüft die Berechtigung ("Was darfst du?").

| Konzept | Beschreibung |
|---------|--------------|
| **RBAC** | Role-Based Access Control (Rollen-basiert) |
| **DAC** | Discretionary Access Control (Eigentümer entscheidet) |
| **MAC** | Mandatory Access Control (System entscheidet) |
| **Need-to-know** | Nur notwendige Informationen |
| **Least Privilege** | Minimale Berechtigungen |

---

### Netzwerksicherheit

#### Firewall

Eine **Firewall** kontrolliert den Netzwerkverkehr nach definierten Regeln.

| Typ | Beschreibung | OSI-Schicht |
|-----|--------------|-------------|
| **Paketfilter** | Prüft IP, Port | 3-4 |
| **Stateful Inspection** | Prüft Verbindungszustand | 3-4 |
| **Application Firewall** | Prüft Anwendungsdaten | 7 |
| **Next-Gen Firewall** | Deep Packet Inspection | 3-7 |

#### VPN (Virtual Private Network)

```
┌────────────────────────────────────────────────────────────────┐
│                        VPN-TUNNEL                              │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   [Mitarbeiter]                              [Firmennetz]      │
│        │                                          │            │
│        │    ┌──────────────────────────────┐     │            │
│        └───►│  Verschlüsselter Tunnel      │◄────┘            │
│             │  durch öffentliches Internet │                   │
│             └──────────────────────────────┘                   │
│                                                                │
│   Ermöglicht sichere Verbindung über unsichere Netze           │
└────────────────────────────────────────────────────────────────┘
```

#### IDS/IPS

| System | Beschreibung | Funktion |
|--------|--------------|----------|
| **IDS** | Intrusion Detection System | Erkennt Angriffe, alarmiert |
| **IPS** | Intrusion Prevention System | Erkennt und blockiert Angriffe |

---

### Datensicherheit

#### Verschlüsselung

| Einsatzbereich | Beispiel | Verfahren |
|----------------|----------|-----------|
| **Daten in Ruhe** | Festplattenverschlüsselung | AES, BitLocker |
| **Daten in Bewegung** | Netzwerkcommunication | TLS/SSL, HTTPS |
| **E-Mail** | E-Mail-Verschlüsselung | S/MIME, PGP |

#### Backup

Siehe auch: [05-05 Datensicherung](../../05-it-systems/05-05-data-backup/05-05-01-backup-types.md)

| Backup-Art | Beschreibung |
|------------|--------------|
| **Vollbackup** | Alle Daten |
| **Inkrementell** | Änderungen seit letztem Backup |
| **Differenziell** | Änderungen seit letztem Vollbackup |

#### DLP (Data Loss Prevention)

**DLP** verhindert ungewollten Datenabfluss:
- Überwachung von E-Mail-Anhängen
- Blockieren von USB-Speichern
- Verhindern von Uploads sensibler Daten

---

### Systemsicherheit

#### Patch-Management

| Schritt | Beschreibung |
|---------|--------------|
| **Identifizieren** | Verfügbare Updates prüfen |
| **Bewerten** | Kritikalität einschätzen |
| **Testen** | In Testumgebung prüfen |
| **Ausrollen** | Kontrolliert verteilen |
| **Verifizieren** | Installation prüfen |

#### Antivirus / Endpoint Protection

| Funktion | Beschreibung |
|----------|--------------|
| **Signatur-basiert** | Vergleich mit bekannter Malware |
| **Heuristik** | Verhaltensanalyse |
| **Sandboxing** | Ausführung in isolierter Umgebung |
| **Real-time Protection** | Echtzeitschutz |

---

### Überwachung und Protokollierung

#### Logging

| Log-Typ | Inhalt |
|---------|--------|
| **Systemlogs** | Betriebssystem-Ereignisse |
| **Anwendungslogs** | Anwendungsspezifische Ereignisse |
| **Sicherheitslogs** | Login-Versuche, Zugriffe |
| **Audit-Logs** | Nachvollziehbarkeit von Änderungen |

#### SIEM (Security Information and Event Management)

```
┌─────────────────────────────────────────────────────────────────┐
│                         SIEM-SYSTEM                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐               │
│  │Firewall │ │ Server  │ │  IDS    │ │ Antivir │               │
│  │  Logs   │ │  Logs   │ │  Logs   │ │  Logs   │               │
│  └────┬────┘ └────┬────┘ └────┬────┘ └────┬────┘               │
│       │          │          │          │                        │
│       ▼          ▼          ▼          ▼                        │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │               SIEM - Zentrale Analyse                    │   │
│  │  • Sammeln aller Logs                                    │   │
│  │  • Korrelation von Ereignissen                          │   │
│  │  • Erkennung von Anomalien                              │   │
│  │  • Alarmierung bei Vorfällen                            │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Physische Sicherheit

| Maßnahme | Schutzziel |
|----------|------------|
| **Zutrittskontrolle** | Unbefugten Zutritt verhindern |
| **Videoüberwachung** | Abschreckung, Nachverfolgung |
| **USV** | Stromausfall überbrücken |
| **Brandschutz** | Feuer erkennen, löschen |
| **Klimatisierung** | Überhitzung verhindern |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Firewall** | Kontrolliert Netzwerkverkehr |
| **VPN** | Verschlüsselter Tunnel durchs Internet |
| **IDS/IPS** | Erkennung/Verhinderung von Angriffen |
| **DLP** | Data Loss Prevention |
| **SIEM** | Security Information and Event Management |
| **Patch** | Software-Aktualisierung |
| **Endpoint Protection** | Schutz von Endgeräten |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was ist eine Firewall und wie funktioniert sie?
- Wozu dient ein VPN?
- Was ist der Unterschied zwischen IDS und IPS?
- Nennen Sie technische Schutzmaßnahmen

### Wichtig zu merken

- **Firewall** = Netzwerk-Zugriffskontrolle
- **VPN** = Verschlüsselter Tunnel
- **IDS** erkennt, **IPS** blockiert
- **2FA** = Zwei-Faktor-Authentifizierung

---

## Übungsaufgaben

### Aufgabe 1
Was ist eine Firewall und welche Funktion erfüllt sie?

**Lösung:** Eine **Firewall** ist ein Sicherheitssystem, das den Netzwerkverkehr zwischen verschiedenen Netzwerken (z.B. Internet und internes Netz) kontrolliert. Sie analysiert den Datenverkehr nach definierten Regeln und entscheidet, ob Datenpakete durchgelassen oder blockiert werden.

### Aufgabe 2
Wozu dient ein VPN?

**Lösung:** Ein **VPN (Virtual Private Network)** dient dazu, eine verschlüsselte Verbindung über ein unsicheres Netzwerk (z.B. das Internet) herzustellen. Typische Anwendungsfälle:
- Sichere Verbindung zum Firmennetzwerk (Homeoffice)
- Schutz der Privatsphäre in öffentlichen WLANs
- Umgehung von geografischen Beschränkungen

### Aufgabe 3
Was ist der Unterschied zwischen IDS und IPS?

**Lösung:**
- **IDS (Intrusion Detection System):** Erkennt Angriffe und generiert Alarme, greift aber nicht aktiv ein
- **IPS (Intrusion Prevention System):** Erkennt Angriffe UND blockiert sie automatisch

Ein IPS ist aktiv und kann Angriffe stoppen, ein IDS ist passiv und informiert nur.

### Aufgabe 4
Nennen Sie drei technische Maßnahmen zur Sicherung der Vertraulichkeit.

**Lösung:**
1. **Verschlüsselung** (Daten können nur mit Schlüssel gelesen werden)
2. **Zugriffskontrollen** (Nur Berechtigte erhalten Zugang)
3. **VPN** (Sichere Kommunikation über unsichere Netze)

---

## Querverweise

- [04-01-01 CIA-Triade](../04-01-protection-goals/04-01-01-cia-triad.md) - Schutzziele
- [04-03-02 Authentifizierung-2FA](./04-03-02-authentication-2fa.md) - Zwei-Faktor-Authentifizierung
- [04-03-04 Personal Firewall](./04-03-04-personal-firewall.md) - Firewall im Detail
- [04-05-01 Verschlüsselungsverfahren](../04-05-cryptography/04-05-01-encryption-methods.md) - Kryptografie
- [03-02-01 TOM](../../03-data-protection/03-02-technical-measures/03-02-01-tom.md) - Technisch-organisatorische Maßnahmen
