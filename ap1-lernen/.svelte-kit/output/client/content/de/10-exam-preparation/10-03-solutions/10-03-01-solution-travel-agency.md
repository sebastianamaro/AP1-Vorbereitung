# Lösung: Prüfungssimulation 1 - Reisebüro „SunTravel GmbH"

---

## Aufgabe 1: Projektmanagement (18 Punkte)

### Aufgabe 1.1 (4 Punkte)

**Vier typische Projektmerkmale:**

1. **Einmaligkeit** - Die Umstellung auf CloudTravel Pro ist ein einmaliges Vorhaben
2. **Zeitliche Begrenzung** - Definierter Start- und Endtermin
3. **Definiertes Ziel** - Einführung der neuen Buchungssoftware
4. **Begrenzte Ressourcen** - Budget, Personal, Zeit sind limitiert

*Weitere mögliche Antworten: Komplexität, Neuartigkeit, Risiko, teamübergreifende Zusammenarbeit*

### Aufgabe 1.2 (6 Punkte)

**SMART-Ziel:**

„Die CloudTravel Pro Software wird bis zum 30.06.2025 an allen 3 Standorten eingeführt, wobei alle 45 Mitarbeiter geschult werden und die Buchungsabwicklung zu 100% über das neue System erfolgt."

| Kriterium | Erläuterung |
|-----------|-------------|
| **S**pezifisch | Einführung von CloudTravel Pro an allen 3 Standorten |
| **M**essbar | 100% Buchungsabwicklung über neues System, 45 Mitarbeiter geschult |
| **A**ttraktiv/Akzeptiert | Verbesserung der Arbeitsprozesse (moderne Cloud-Software) |
| **R**ealistisch | 6 Monate Projektzeit, schrittweise Einführung möglich |
| **T**erminiert | Bis 30.06.2025 |

### Aufgabe 1.3 (8 Punkte)

**a) Netzplan:**

```
        ┌─────┐      ┌─────┐      ┌─────┐
        │  A  │──────│  B  │──┬───│  C  │───┐
        │ 5T  │      │ 3T  │  │   │ 4T  │   │
        └─────┘      └─────┘  │   └─────┘   │
        Tag 0-5     Tag 5-8   │  Tag 8-12   │
                              │             │
                              │   ┌─────┐   │    ┌─────┐     ┌─────┐    ┌─────┐
                              └───│  D  │───┼────│  E  │─────│  F  │────│  G  │
                                  │ 2T  │   │    │ 6T  │     │ 3T  │    │ 2T  │
                                  └─────┘   │    └─────┘     └─────┘    └─────┘
                                 Tag 8-10   │   Tag 12-18   Tag 18-21  Tag 21-23
                                            │
                                            └────────────────────────────────────
```

**b) Kritischer Pfad und Gesamtdauer:**

- **Kritischer Pfad:** A → B → C → E → F → G
  - Alternativ: A → B → D → E → F → G (D ist kürzer als C, daher C kritisch)
- **Gesamtprojektdauer:** 5 + 3 + 4 + 6 + 3 + 2 = **23 Tage**

---

## Aufgabe 2: IT-Sicherheit und Datenschutz (22 Punkte)

### Aufgabe 2.1 (6 Punkte)

**CIA-Triade mit Beispielen:**

| Schutzziel | Erläuterung | Beispiel Reisebüro |
|------------|-------------|-------------------|
| **Confidentiality (Vertraulichkeit)** | Nur berechtigte Personen haben Zugriff | Nur autorisierte Mitarbeiter können Kreditkartendaten der Kunden einsehen |
| **Integrity (Integrität)** | Daten sind vollständig und unverändert | Buchungsdaten dürfen nicht unbefugt manipuliert werden |
| **Availability (Verfügbarkeit)** | Systeme sind bei Bedarf nutzbar | Das Buchungssystem ist während der Geschäftszeiten erreichbar |

### Aufgabe 2.2 (4 Punkte)

**a) Prinzip der 2FA:**
Die Zwei-Faktor-Authentifizierung kombiniert zwei verschiedene Faktoren zur Identitätsprüfung. Nur wer beide Faktoren kennt/besitzt, erhält Zugang. Dies erhöht die Sicherheit, da ein gestohlenes Passwort allein nicht ausreicht.

**b) Zwei verschiedene Faktoren:**
1. **Wissen** - Passwort, PIN
2. **Besitz** - Smartphone (Authenticator App), Hardware-Token
3. *Alternativ: Biometrie* - Fingerabdruck, Gesichtserkennung

### Aufgabe 2.3 (6 Punkte)

**a) Recht nach DSGVO:** Auskunftsrecht (Art. 15 DSGVO)

**b) Drei weitere Betroffenenrechte:**
1. Recht auf Berichtigung (Art. 16)
2. Recht auf Löschung/Vergessenwerden (Art. 17)
3. Recht auf Datenübertragbarkeit (Art. 20)
4. *Alternativ:* Widerspruchsrecht, Recht auf Einschränkung

**c) Unterschied Anonymisierung/Pseudonymisierung:**

| Anonymisierung | Pseudonymisierung |
|----------------|-------------------|
| Personenbezug wird dauerhaft entfernt | Personenbezug wird durch Pseudonym ersetzt |
| Rückschluss auf Person nicht mehr möglich | Mit Zusatzinformationen Zuordnung möglich |
| Daten unterliegen nicht mehr DSGVO | Daten unterliegen weiterhin DSGVO |

### Aufgabe 2.4 (6 Punkte)

**Sechs Maßnahmen zur Betriebssystem-Härtung:**

1. **Unnötige Dienste deaktivieren** - Nur benötigte Dienste aktivieren
2. **Regelmäßige Updates** - Windows-Updates automatisch installieren
3. **Sichere Passwort-Richtlinien** - Komplexität, Mindestlänge, Ablauf
4. **Personal Firewall aktivieren** - Windows Defender Firewall einschalten
5. **Virenscanner installieren** - Echtzeitschutz aktivieren
6. **Benutzerrechte einschränken** - Keine Admin-Rechte für normale User
7. *Alternativ:* USB-Ports deaktivieren, Verschlüsselung (BitLocker), Autorun deaktivieren

---

## Aufgabe 3: IT-Systeme und Netzwerk (24 Punkte)

### Aufgabe 3.1 (6 Punkte)

**a) Berechnung Übertragungszeit:**

```
Dateigröße: 2 GB = 2 × 1024 MB = 2048 MB = 2048 × 8 Mbit = 16.384 Mbit

Übertragungsrate: 500 Mbit/s

Zeit = Datenmenge / Geschwindigkeit
Zeit = 16.384 Mbit / 500 Mbit/s
Zeit = 32,77 Sekunden ≈ 33 Sekunden
```

**b) Gründe für längere Übertragungszeit in der Praxis:**
1. **Protokoll-Overhead** - TCP/IP-Header, Paketierung
2. **Shared Medium** - Andere Nutzer teilen die Leitung
3. *Alternativ:* Latenz, Paketverluste, Server-Auslastung

### Aufgabe 3.2 (8 Punkte)

**a) Nutzbare Host-Adressen:**
```
/24 = 256 Adressen gesamt (2^8)
- 1 Netzadresse (192.168.10.0)
- 1 Broadcast-Adresse (192.168.10.255)
= 254 nutzbare Host-Adressen
```

**b) Subnetzmaske für 4 Subnetze:**
```
/24 aufteilen in 4 Subnetze → 2 zusätzliche Bits
Neue Subnetzmaske: /26 (oder 255.255.255.192)
```

**c) Erstes Subnetz:**
- Netzadresse: **192.168.10.0**
- Erste nutzbare Host-Adresse: **192.168.10.1**
- Letzte nutzbare Host-Adresse: **192.168.10.62**
- Broadcast-Adresse: **192.168.10.63**

### Aufgabe 3.3 (6 Punkte)

**a) VPN-Erklärung:**
Ein VPN (Virtual Private Network) erstellt einen verschlüsselten Tunnel über ein öffentliches Netzwerk (Internet). Es ermöglicht sicheren Zugriff auf das Firmennetzwerk von außerhalb, als wäre man direkt vor Ort.

**b) Vier Schritte zur Fehlersuche:**
1. **Internetverbindung prüfen** - Ist der Laptop online?
2. **VPN-Client-Konfiguration prüfen** - Stimmen Server-Adresse und Zugangsdaten?
3. **VPN-Server erreichbar?** - Ping/Traceroute zum VPN-Gateway
4. **Firewall-Einstellungen prüfen** - Blockiert eine lokale Firewall den VPN-Traffic?

### Aufgabe 3.4 (4 Punkte)

| Modell | Erklärung | Vorteil | Nachteil |
|--------|-----------|---------|----------|
| **SaaS** | Software wird als Service bereitgestellt, läuft beim Anbieter | Kein eigener Betrieb, sofort einsatzbereit | Abhängigkeit vom Anbieter, Daten außer Haus |
| **IaaS** | Infrastruktur (Server, Storage) wird gemietet | Flexible Skalierung, kein Hardware-Kauf | Mehr eigene Administration nötig |

---

## Aufgabe 4: Software und Programmierung (20 Punkte)

### Aufgabe 4.1 (6 Punkte)

**UML-Aktivitätsdiagramm:**

```
          ●  [Start]
          │
          ▼
    ┌─────────────────┐
    │ Buchungssumme   │
    │ ermitteln       │
    └────────┬────────┘
             │
             ▼
        ◇ Summe > 5000€?
       /   \
     Ja     Nein
     │       │
     ▼       ▼
 ┌──────┐  ◇ Summe > 2000€?
 │ 10%  │ /   \
 │Rabatt│Ja    Nein
 └──┬───┘│      │
    │    ▼      │
    │┌──────┐   │
    ││ 5%   │   │
    ││Rabatt│   │
    │└──┬───┘   │
    │   │       │
    └───┴───────┘
          │
          ▼
     ◇ Stammkunde?
    /   \
  Ja     Nein
   │       │
   ▼       │
┌──────┐   │
│ +3%  │   │
│Rabatt│   │
└──┬───┘   │
   │       │
   └───────┘
          │
          ▼
    ┌─────────────────┐
    │ Endpreis        │
    │ berechnen       │
    └────────┬────────┘
             │
             ▼
             ●  [Ende]
```

### Aufgabe 4.2 (8 Punkte)

**a) Schreibtischtest für `berechneEndpreis(500, 5, WAHR)`:**

| Schritt | Variable | Wert | Erklärung |
|---------|----------|------|-----------|
| 1 | grundpreis | 500 | Eingabeparameter |
| 2 | anzahlPersonen | 5 | Eingabeparameter |
| 3 | fruehbucher | WAHR | Eingabeparameter |
| 4 | preis | 2500 | 500 × 5 |
| 5 | fruehbucher = WAHR | → | Bedingung erfüllt |
| 6 | rabatt | 375 | 2500 × 0.15 |
| 7 | preis | 2125 | 2500 - 375 |
| 8 | anzahlPersonen > 4 | → | Bedingung erfüllt (5 > 4) |
| 9 | gruppenrabatt | 212.5 | 2125 × 0.1 |
| 10 | preis | 1912.5 | 2125 - 212.5 |

**b) Ergebnis:** **1912,50 €**

### Aufgabe 4.3 (6 Punkte)

**a) Kardinalitäten:**
- **1:n (KUNDE zu BUCHUNG):** Ein Kunde kann mehrere Buchungen haben, aber jede Buchung gehört genau einem Kunden
- **n:m (BUCHUNG zu REISE):** Eine Buchung kann mehrere Reisen enthalten (z.B. Hin- und Rückflug), eine Reise kann in mehreren Buchungen vorkommen

**b) Redundanz:**
Redundanz bedeutet, dass gleiche Daten mehrfach gespeichert werden. Dies sollte vermieden werden, weil:
- Inkonsistenzen entstehen können (unterschiedliche Versionen)
- Speicherplatz verschwendet wird
- Änderungen an mehreren Stellen erfolgen müssen

---

## Aufgabe 5: Wirtschaftlichkeit und Service (16 Punkte)

### Aufgabe 5.1 (8 Punkte)

**a) Nutzwertanalyse:**

| Kriterium | Gewicht | A: Punkte | A: Nutzwert | B: Punkte | B: Nutzwert |
|-----------|---------|-----------|-------------|-----------|-------------|
| Funktionsumfang | 0,30 | 4 | 1,20 | 5 | 1,50 |
| Benutzerfreundlichkeit | 0,25 | 5 | 1,25 | 3 | 0,75 |
| Support-Qualität | 0,20 | 3 | 0,60 | 4 | 0,80 |
| Preis | 0,15 | 4 | 0,60 | 3 | 0,45 |
| Datenschutz | 0,10 | 5 | 0,50 | 5 | 0,50 |
| **Gesamt** | 1,00 | | **4,15** | | **4,00** |

**b) Empfehlung:**
**Anbieter A** mit 4,15 Punkten knapp vor Anbieter B (4,00).

Weiterer zu berücksichtigender Aspekt: **Referenzen/Erfahrung** des Anbieters in der Reisebranche, oder: Vertragslaufzeit, Migrationssupport, Integrationsmöglichkeiten.

### Aufgabe 5.2 (8 Punkte)

**a) Incident oder Service Request:**
Es handelt sich um einen **Incident** (Störung), da eine bestehende Funktionalität nicht wie erwartet funktioniert. Der Mitarbeiter kann nicht normal arbeiten.

**b) Vier-Ohren-Modell:**

| Ebene | Interpretation |
|-------|----------------|
| **Sachinhalt** | Die Software läuft langsam |
| **Selbstkundgabe** | Ich bin frustriert, ich kann nicht arbeiten |
| **Beziehung** | Die IT sollte das Problem lösen, vielleicht „Ihr habt das nicht richtig eingerichtet" |
| **Appell** | Macht das schneller! Helft mir! |

**c) Deeskalierende Antwort:**
„Ich verstehe, dass die Situation frustrierend ist, wenn Sie nicht richtig arbeiten können. Ich kümmere mich sofort darum. Können Sie mir kurz zeigen, bei welchen Funktionen genau die Verzögerungen auftreten? Dann kann ich das Problem gezielt eingrenzen und schnellstmöglich lösen."

---

## Gesamtpunktzahl

| Aufgabe | Punkte |
|---------|--------|
| Aufgabe 1: Projektmanagement | 18 |
| Aufgabe 2: IT-Sicherheit und Datenschutz | 22 |
| Aufgabe 3: IT-Systeme und Netzwerk | 24 |
| Aufgabe 4: Software und Programmierung | 20 |
| Aufgabe 5: Wirtschaftlichkeit und Service | 16 |
| **Gesamt** | **100** |
