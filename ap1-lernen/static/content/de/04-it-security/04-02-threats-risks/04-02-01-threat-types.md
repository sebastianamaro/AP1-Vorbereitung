# Bedrohungsarten

## Lernziele

Nach diesem Kapitel solltest du:
- Verschiedene Bedrohungsarten für IT-Systeme kennen
- Zwischen aktiven und passiven Angriffen unterscheiden können
- Typische Angriffsmethoden beschreiben können
- Risiken für Unternehmen einschätzen können

---

## Kerninhalt

### Überblick: Bedrohungskategorien

```
┌─────────────────────────────────────────────────────────────────┐
│                    BEDROHUNGSARTEN                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │   TECHNISCHE    │  │   MENSCHLICHE   │  │   HÖHERE        │ │
│  │   BEDROHUNGEN   │  │   BEDROHUNGEN   │  │   GEWALT        │ │
│  │                 │  │                 │  │                 │ │
│  │ • Malware       │  │ • Fahrlässigkeit│  │ • Naturkata-    │ │
│  │ • Hacking       │  │ • Sabotage      │  │   strophen      │ │
│  │ • DoS-Angriffe  │  │ • Social        │  │ • Brand         │ │
│  │ • Exploits      │  │   Engineering   │  │ • Stromausfall  │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Malware (Schadsoftware)

#### Arten von Malware

| Malware-Typ | Beschreibung | Verbreitung |
|-------------|--------------|-------------|
| **Virus** | Infiziert Dateien, benötigt Wirtsprogramm | Beim Ausführen infizierter Dateien |
| **Wurm** | Verbreitet sich selbstständig | Über Netzwerke, E-Mail |
| **Trojaner** | Tarnt sich als nützliches Programm | Download, E-Mail-Anhänge |
| **Ransomware** | Verschlüsselt Daten, fordert Lösegeld | Phishing, Drive-by-Downloads |
| **Spyware** | Spioniert Benutzer aus | Versteckt in Software |
| **Adware** | Zeigt unerwünschte Werbung | Kostenlose Software |
| **Rootkit** | Versteckt sich tief im System | Exploits, infizierte Software |
| **Keylogger** | Zeichnet Tastatureingaben auf | Trojaner, physischer Zugang |

#### Schutzmaßnahmen gegen Malware

- **Antivirensoftware** mit aktuellen Signaturen
- **Regelmäßige Updates** des Betriebssystems
- **Vorsicht** bei E-Mail-Anhängen und Downloads
- **Backup** wichtiger Daten

---

### Social Engineering

#### Definition

**Social Engineering** bezeichnet die Manipulation von Menschen, um an vertrauliche Informationen zu gelangen oder sie zu bestimmten Handlungen zu bewegen.

#### Methoden des Social Engineering

| Methode | Beschreibung | Beispiel |
|---------|--------------|----------|
| **Phishing** | Gefälschte E-Mails/Websites | Fake-Bank-E-Mail |
| **Spear Phishing** | Gezieltes Phishing auf Einzelpersonen | E-Mail an CEO |
| **Vishing** | Telefonbetrug | Anruf vom "IT-Support" |
| **Pretexting** | Erfundene Vorwände | "Ich bin der neue Kollege" |
| **Baiting** | Ködern mit attraktivem Angebot | USB-Stick auf Parkplatz |
| **Tailgating** | Mitlaufen durch gesicherte Türen | Ohne Ausweis folgen |
| **Dumpster Diving** | Durchsuchen von Müll | Papiere im Müll |

#### Erkennungsmerkmale von Phishing

- Dringlichkeit ("Sofort handeln!")
- Drohungen ("Konto wird gesperrt")
- Fehlerhafte Grammatik/Rechtschreibung
- Verdächtige Links (URL prüfen!)
- Unpersönliche Anrede

---

### Netzwerkangriffe

#### Passive Angriffe

| Angriff | Beschreibung |
|---------|--------------|
| **Sniffing** | Mitlesen von Netzwerkverkehr |
| **Traffic Analysis** | Analyse von Kommunikationsmustern |
| **Eavesdropping** | Abhören von Kommunikation |

#### Aktive Angriffe

| Angriff | Beschreibung | Betroffenes Schutzziel |
|---------|--------------|------------------------|
| **DoS/DDoS** | Überlastung von Diensten | Verfügbarkeit |
| **Man-in-the-Middle** | Abfangen und Manipulieren | Vertraulichkeit, Integrität |
| **IP-Spoofing** | Fälschen von IP-Adressen | Authentizität |
| **DNS-Spoofing** | Manipulation der DNS-Auflösung | Integrität |
| **ARP-Spoofing** | Manipulation der ARP-Tabelle | Vertraulichkeit |

#### DoS vs. DDoS

```
┌────────────────────────┐     ┌────────────────────────┐
│   DoS-Angriff          │     │   DDoS-Angriff         │
├────────────────────────┤     ├────────────────────────┤
│                        │     │                        │
│    [Angreifer]         │     │  [Bot1] [Bot2] [Bot3]  │
│         │              │     │     │     │     │      │
│         │              │     │     ▼     ▼     ▼      │
│         ▼              │     │    ┌─────────────┐     │
│  ┌─────────────┐       │     │    │   Ziel-     │     │
│  │   Ziel-     │       │     │    │   Server    │     │
│  │   Server    │       │     │    └─────────────┘     │
│  └─────────────┘       │     │                        │
│                        │     │  Viele verteilte       │
│  Ein Angreifer         │     │  Quellen               │
└────────────────────────┘     └────────────────────────┘
```

---

### Passwortangriffe

| Angriff | Beschreibung |
|---------|--------------|
| **Brute Force** | Systematisches Ausprobieren aller Kombinationen |
| **Dictionary Attack** | Ausprobieren von Wörterbuchwörtern |
| **Rainbow Table** | Vorberechnete Hash-Werte |
| **Credential Stuffing** | Verwendung gestohlener Login-Daten |
| **Password Spraying** | Wenige Passwörter bei vielen Konten |

#### Schutz vor Passwortangriffen

- **Starke Passwörter** (Länge > 12 Zeichen, Komplexität)
- **Zwei-Faktor-Authentifizierung** (2FA)
- **Kontosperrung** nach fehlerhaften Versuchen
- **Salted Hashes** statt Klartextpasswörter

---

### Insider-Bedrohungen

| Bedrohung | Beschreibung |
|-----------|--------------|
| **Fahrlässigkeit** | Unbeabsichtigte Fehler (z.B. Passwort weitergeben) |
| **Sabotage** | Absichtliche Schädigung durch Mitarbeiter |
| **Datendiebstahl** | Mitnahme von Daten beim Verlassen |
| **Missbrauch von Rechten** | Zugriff auf nicht benötigte Daten |

#### Schutzmaßnahmen

- **Need-to-know-Prinzip** (nur notwendige Zugriffsrechte)
- **Vier-Augen-Prinzip** bei kritischen Aktionen
- **Protokollierung** aller Zugriffe
- **Offboarding-Prozesse** beim Ausscheiden

---

### Physische Bedrohungen

| Bedrohung | Beispiel | Schutzmaßnahme |
|-----------|----------|----------------|
| **Diebstahl** | Laptop gestohlen | Verschlüsselung, Schlösser |
| **Vandalismus** | Server beschädigt | Zutrittskontrolle |
| **Brand** | Serverraum brennt | Brandschutz, Backup |
| **Wasser** | Wasserschaden | Schutzmaßnahmen, Backup |
| **Stromausfall** | Netzteil defekt | USV, Generator |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Malware** | Schadsoftware (Viren, Würmer, Trojaner) |
| **Phishing** | Betrugsversuch per E-Mail/Website |
| **Social Engineering** | Manipulation von Menschen |
| **DoS/DDoS** | (Distributed) Denial of Service |
| **Brute Force** | Ausprobieren aller Möglichkeiten |
| **Man-in-the-Middle** | Abfangen von Kommunikation |
| **Insider-Bedrohung** | Gefahr durch eigene Mitarbeiter |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was ist der Unterschied zwischen Virus und Wurm?
- Was ist Phishing und wie erkennt man es?
- Erklären Sie einen Man-in-the-Middle-Angriff
- Welche Schutzmaßnahmen gibt es gegen [Bedrohung]?

### Wichtig zu merken

- **Virus** braucht Wirtsprogramm, **Wurm** verbreitet sich selbstständig
- **Ransomware** = Verschlüsselung + Lösegeldforderung
- **Phishing** = Gefälschte E-Mails/Websites
- **DoS** = ein Angreifer, **DDoS** = viele (distributed)

---

## Übungsaufgaben

### Aufgabe 1
Was ist der Unterschied zwischen einem Virus und einem Wurm?

**Lösung:**
- **Virus:** Benötigt ein Wirtsprogramm, um sich zu verbreiten. Infiziert andere Dateien und wird beim Ausführen dieser Dateien aktiv.
- **Wurm:** Verbreitet sich selbstständig über Netzwerke ohne Wirtsprogramm. Nutzt Sicherheitslücken zur automatischen Verbreitung.

### Aufgabe 2
Was ist Phishing und nennen Sie zwei Erkennungsmerkmale.

**Lösung:**
**Phishing** ist eine Betrugsmasche, bei der durch gefälschte E-Mails oder Websites versucht wird, an vertrauliche Daten (z.B. Passwörter, Kreditkartendaten) zu gelangen.

Erkennungsmerkmale:
1. Dringlichkeit/Drohungen ("Handeln Sie sofort!")
2. Verdächtige Absenderadresse oder Links
(oder: Rechtschreibfehler, unpersönliche Anrede, ungewöhnliche Aufforderungen)

### Aufgabe 3
Erklären Sie den Begriff "Ransomware".

**Lösung:**
**Ransomware** ist eine Schadsoftware, die Daten auf dem Computer verschlüsselt und für die Entschlüsselung ein Lösegeld (englisch: ransom) fordert. Bekannte Beispiele sind WannaCry und Locky.

### Aufgabe 4
Was ist ein DDoS-Angriff und welches Schutzziel ist betroffen?

**Lösung:**
Ein **DDoS-Angriff** (Distributed Denial of Service) ist ein Angriff, bei dem ein Zielserver von vielen verschiedenen Quellen (z.B. Botnet) mit Anfragen überflutet wird, um ihn zu überlasten.

Das betroffene Schutzziel ist die **Verfügbarkeit**, da der Server nicht mehr erreichbar ist.

---

## Querverweise

- [04-01-01 CIA-Triade](../04-01-protection-goals/04-01-01-cia-triad.md) - Betroffene Schutzziele
- [04-03-01 Technische Maßnahmen](../04-03-protective-measures/04-03-01-technical-measures.md) - Schutzmaßnahmen
- [04-03-02 Authentifizierung-2FA](../04-03-protective-measures/04-03-02-authentication-2fa.md) - Schutz vor Passwortangriffen
- [09-02-01 Fehleranalyse](../../09-support-communication/09-02-error-management/09-02-01-error-analysis.md) - Incident Response
