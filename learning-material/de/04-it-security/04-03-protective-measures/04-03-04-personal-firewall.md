# Personal Firewall

## Lernziele

Nach diesem Kapitel solltest du:
- Die Funktion einer Personal Firewall erklären können
- Den Unterschied zu Hardware-Firewalls kennen
- Typische Einstellungen konfigurieren können
- Grenzen einer Personal Firewall verstehen

---

## Kerninhalt

### Was ist eine Personal Firewall?

Eine **Personal Firewall** (auch Host-Firewall oder Desktop-Firewall) ist eine Software auf einem Endgerät, die den Netzwerkverkehr dieses einzelnen Geräts kontrolliert.

```
┌─────────────────────────────────────────────────────────────────┐
│              PERSONAL FIREWALL vs. NETZWERK-FIREWALL            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  PERSONAL FIREWALL                NETZWERK-FIREWALL             │
│  ┌─────────────────────┐         ┌─────────────────────┐       │
│  │    ┌──────────┐     │         │                     │       │
│  │    │ Computer │     │         │  [Router/Firewall]  │       │
│  │    │   mit    │     │         │         │           │       │
│  │    │ Firewall │     │         │    ┌────┴────┐      │       │
│  │    │ Software │     │         │    │         │      │       │
│  │    └──────────┘     │         │   [PC]    [PC]      │       │
│  │                     │         │                     │       │
│  │  Schützt einzelnes  │         │  Schützt gesamtes   │       │
│  │  Gerät              │         │  Netzwerk           │       │
│  └─────────────────────┘         └─────────────────────┘       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Vergleich: Personal Firewall vs. Hardware-Firewall

| Aspekt | Personal Firewall | Hardware-Firewall |
|--------|-------------------|-------------------|
| **Ort** | Software auf dem PC | Separates Gerät |
| **Schutzbereich** | Ein einzelnes Gerät | Gesamtes Netzwerk |
| **Kontrolle** | Anwendungsbezogen möglich | Netzwerk-basiert |
| **Kosten** | Oft kostenlos (Windows) | Anschaffungskosten |
| **Ressourcen** | Nutzt PC-Ressourcen | Eigene Hardware |
| **Mobilität** | Schützt auch unterwegs | Nur im lokalen Netz |

---

### Funktionen einer Personal Firewall

```
┌─────────────────────────────────────────────────────────────────┐
│              FUNKTIONEN PERSONAL FIREWALL                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                PAKETFILTERUNG                             │  │
│  │  • Prüft eingehende/ausgehende Pakete                     │  │
│  │  • Filtert nach IP, Port, Protokoll                       │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │              ANWENDUNGSKONTROLLE                          │  │
│  │  • Kontrolliert welche Programme ins Internet dürfen      │  │
│  │  • Fragt bei unbekannten Verbindungen nach                │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                  PROTOKOLLIERUNG                          │  │
│  │  • Zeichnet Verbindungsversuche auf                       │  │
│  │  • Ermöglicht Analyse bei Vorfällen                       │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Detaillierte Funktionen

| Funktion | Beschreibung |
|----------|--------------|
| **Paketfilterung** | Erlaubt/blockiert Pakete nach Regeln |
| **Anwendungskontrolle** | Welche Programme dürfen kommunizieren? |
| **Portblockierung** | Bestimmte Ports sperren |
| **Stateful Inspection** | Verbindungszustand überwachen |
| **Protokollierung** | Verbindungsversuche aufzeichnen |
| **Netzwerkprofil** | Unterschiedliche Regeln für verschiedene Netze |

---

### Windows Firewall

Die **Windows Defender Firewall** ist eine integrierte Personal Firewall in Windows.

#### Netzwerkprofile

| Profil | Beschreibung | Sicherheitsstufe |
|--------|--------------|------------------|
| **Domäne** | Computer in Unternehmensdomäne | Mittel |
| **Privat** | Vertrauenswürdiges Heimnetzwerk | Niedrig |
| **Öffentlich** | Öffentliches WLAN (Café, Flughafen) | Hoch |

#### Typische Einstellungen

```
┌────────────────────────────────────────────────────────────────┐
│              WINDOWS FIREWALL - REGELARTEN                     │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  EINGEHENDE REGELN:                                            │
│  • Welcher Verkehr darf von außen zum PC?                      │
│  • Standard: Blockiert (außer erlaubte Ausnahmen)              │
│                                                                │
│  AUSGEHENDE REGELN:                                            │
│  • Welcher Verkehr darf vom PC nach außen?                     │
│  • Standard: Erlaubt (kann eingeschränkt werden)               │
│                                                                │
│  VERBINDUNGSSICHERHEITSREGELN:                                 │
│  • IPsec-Einstellungen                                         │
│  • Authentifizierung zwischen Computern                        │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### Zugriff auf Windows Firewall

| Methode | Ort |
|---------|-----|
| **Einfach** | Einstellungen → Update und Sicherheit → Windows-Sicherheit |
| **Erweitert** | wf.msc (Windows Firewall mit erweiterter Sicherheit) |
| **Systemsteuerung** | Systemsteuerung → Windows Defender Firewall |

---

### Firewall-Regeln erstellen

#### Regelkomponenten

| Komponente | Beschreibung | Beispiel |
|------------|--------------|----------|
| **Protokoll** | TCP, UDP, ICMP | TCP |
| **Port** | Ziel-/Quellport | 80 (HTTP) |
| **Programm** | Anwendungspfad | C:\Programme\App.exe |
| **IP-Adresse** | Quelle/Ziel | 192.168.1.0/24 |
| **Aktion** | Erlauben/Blockieren | Blockieren |
| **Profil** | Wann gilt die Regel | Öffentlich |

#### Beispiel: Regel erstellen

```
Regel: Browser (Chrome) darf ins Internet

Typ:          Ausgehend
Programm:     C:\Program Files\Google\Chrome\Application\chrome.exe
Protokoll:    TCP
Port:         80 (HTTP), 443 (HTTPS)
Aktion:       Zulassen
Profile:      Alle (Domäne, Privat, Öffentlich)
```

---

### Vor- und Nachteile

#### Vorteile

| Vorteil | Beschreibung |
|---------|--------------|
| **Anwendungskontrolle** | Kann einzelne Programme kontrollieren |
| **Mobilität** | Schützt auch außerhalb des Heimnetzes |
| **Kostenlos** | In Windows integriert |
| **Granulare Kontrolle** | Feine Einstellungsmöglichkeiten |

#### Nachteile

| Nachteil | Beschreibung |
|----------|--------------|
| **Ressourcenverbrauch** | Nutzt CPU und RAM |
| **Komplexität** | Konfiguration kann kompliziert sein |
| **Umgehbar** | Malware kann Firewall deaktivieren |
| **Nur ein Gerät** | Schützt nicht das Netzwerk |

---

### Best Practices

| Empfehlung | Beschreibung |
|------------|--------------|
| **Immer aktivieren** | Firewall niemals komplett deaktivieren |
| **Profile nutzen** | Öffentlich = höchste Sicherheit |
| **Nur notwendige Ausnahmen** | Nicht wahllos Ports öffnen |
| **Regelmäßig prüfen** | Installierte Regeln überprüfen |
| **Logging aktivieren** | Für Fehlersuche und Analyse |
| **Mit Hardware-Firewall kombinieren** | Defense in Depth |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Personal Firewall** | Software-Firewall auf einzelnem PC |
| **Hardware-Firewall** | Dediziertes Firewall-Gerät |
| **Paketfilter** | Filterung nach IP/Port/Protokoll |
| **Stateful Inspection** | Verbindungszustand-basierte Filterung |
| **Netzwerkprofil** | Regelset für bestimmte Netzwerkarten |
| **Eingehend/Ausgehend** | Richtung des Datenverkehrs |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was ist eine Personal Firewall?
- Unterschied Personal Firewall und Hardware-Firewall
- Welche Netzwerkprofile gibt es in Windows?
- Wann sollte das Profil "Öffentlich" verwendet werden?

### Wichtig zu merken

- **Personal Firewall** = Software auf dem Gerät
- **Hardware-Firewall** = Separates Gerät im Netzwerk
- **3 Windows-Profile:** Domäne, Privat, Öffentlich
- **Öffentlich** = Höchste Sicherheit (für fremde Netze)

---

## Übungsaufgaben

### Aufgabe 1
Was ist der Unterschied zwischen einer Personal Firewall und einer Hardware-Firewall?

**Lösung:**
- **Personal Firewall:** Software auf einem einzelnen Computer, schützt nur dieses Gerät, kann anwendungsbezogen filtern
- **Hardware-Firewall:** Dediziertes Gerät (z.B. im Router), schützt das gesamte Netzwerk, arbeitet netzwerk-basiert

Die Personal Firewall schützt auch außerhalb des Heimnetzwerks, während die Hardware-Firewall nur im lokalen Netz schützt.

### Aufgabe 2
Welches Netzwerkprofil sollte in einem öffentlichen WLAN (z.B. im Café) gewählt werden?

**Lösung:** Das Profil **"Öffentlich"** sollte gewählt werden. Dieses Profil hat die höchsten Sicherheitseinstellungen und blockiert eingehende Verbindungen weitestgehend. So wird verhindert, dass andere Nutzer im selben WLAN auf den Computer zugreifen können.

### Aufgabe 3
Nennen Sie zwei Vorteile und zwei Nachteile einer Personal Firewall.

**Lösung:**
**Vorteile:**
1. Anwendungskontrolle - kann einzelne Programme kontrollieren
2. Mobilität - schützt auch unterwegs in fremden Netzwerken

**Nachteile:**
1. Ressourcenverbrauch - nutzt CPU und Arbeitsspeicher
2. Kann umgangen werden - Malware kann die Firewall deaktivieren

### Aufgabe 4
Was ist der Unterschied zwischen eingehenden und ausgehenden Firewall-Regeln?

**Lösung:**
- **Eingehende Regeln:** Kontrollieren Verbindungen, die von außen zum Computer aufgebaut werden (z.B. wenn jemand auf einen Webserver zugreift)
- **Ausgehende Regeln:** Kontrollieren Verbindungen, die vom Computer nach außen aufgebaut werden (z.B. wenn der Browser eine Website aufruft)

Standardmäßig blockiert Windows eingehende Verbindungen und erlaubt ausgehende.

---

## Querverweise

- [04-03-01 Technische Maßnahmen](./04-03-01-technical-measures.md) - Firewall im Überblick
- [04-03-03 OS-Härtung](./04-03-03-os-hardening.md) - Firewall als Härtungsmaßnahme
- [07-01-03 Protokolle](../../07-networks/07-01-network-fundamentals/07-01-03-protocols.md) - Netzwerkprotocols
- [07-02-01 IPv4](../../07-networks/07-02-ip-addressing/07-02-01-ipv4.md) - IP-Adressen
