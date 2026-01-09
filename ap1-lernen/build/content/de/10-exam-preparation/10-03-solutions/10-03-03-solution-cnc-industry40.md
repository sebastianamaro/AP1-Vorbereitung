# Lösung: Prüfungssimulation 3 - CNC-Fertigung „PräzisionsTech GmbH"

---

## Aufgabe 1: Industrie 4.0 und KI (20 Punkte)

### Aufgabe 1.1 (6 Punkte)

**a) Industrie 4.0 und drei Merkmale (4 Punkte):**

**Definition:** Industrie 4.0 bezeichnet die vierte industrielle Revolution, bei der Produktionsanlagen, Produkte und Menschen über das Internet der Dinge (IoT) vernetzt werden und Daten in Echtzeit ausgetauscht werden.

**Drei charakteristische Merkmale:**
1. **Vernetzung** - Maschinen, Systeme und Menschen sind miteinander verbunden
2. **Echtzeitdaten** - Sensoren erfassen kontinuierlich Daten zur Analyse
3. **Automatisierung** - Intelligente Systeme treffen selbstständig Entscheidungen

**b) Zwei Vorteile für PräzisionsTech (2 Punkte):**
1. **Erhöhte Produktivität** durch automatisierte Prozesse und weniger Stillstände
2. **Bessere Qualität** durch lückenlose Überwachung und frühzeitige Fehlererkennung

### Aufgabe 1.2 (8 Punkte)

**a) KI in der industriellen Anwendung (2 Punkte):**
Künstliche Intelligenz im Industriekontext bezeichnet Systeme, die aus Daten lernen und Muster erkennen können, um eigenständig Entscheidungen zu treffen oder Vorhersagen zu machen, ohne explizit programmiert zu sein.

**b) Zwei weitere KI-Anwendungsbereiche (2 Punkte):**
1. **Predictive Maintenance** - Vorhersage von Maschinenausfällen anhand von Sensordaten
2. **Produktionsplanung** - Optimierung von Fertigungsabläufen und Ressourceneinsatz

**c) Risikokategorie nach EU AI Act (4 Punkte):**
Das Qualitätskontroll-System würde wahrscheinlich in die Kategorie **„Begrenztes Risiko"** oder **„Minimales Risiko"** fallen.

**Begründung:**
- Es handelt sich um ein industrielles Assistenzsystem
- Keine direkte Auswirkung auf Menschen (nur auf Werkstücke)
- Keine automatisierten Entscheidungen mit rechtlichen Konsequenzen
- Kein Hochrisiko-Bereich wie kritische Infrastruktur oder Sicherheitssysteme

### Aufgabe 1.3 (6 Punkte)

**a) Zwei Vorteile von KI-Code-Assistenten (2 Punkte):**
1. **Zeitersparnis** - Schnellere Generierung von Boilerplate-Code und Standardfunktionen
2. **Fehlervermeidung** - Unterstützung bei Syntax und Best Practices

**b) Zwei Risiken/Nachteile (2 Punkte):**
1. **Sicherheitsrisiken** - Generierter Code kann Sicherheitslücken enthalten
2. **Urheberrechtsfragen** - Unklare Lizenzierung des generierten Codes

**c) Warum menschliche Überprüfung wichtig (2 Punkte):**
- KI kann falsche oder ineffiziente Lösungen generieren
- Kontextverständnis des KI-Assistenten ist begrenzt
- Sicherheits- und Qualitätsprüfung muss durch Experten erfolgen
- Verantwortung für den Code liegt beim Entwickler

---

## Aufgabe 2: Netzwerk und IT-Sicherheit (26 Punkte)

### Aufgabe 2.1 (8 Punkte)

**a) Zwei Gründe für Trennung IT/OT (4 Punkte):**
1. **Sicherheit** - Ein Angriff auf das Büronetzwerk kann nicht direkt auf die Produktionsanlagen übergreifen
2. **Stabilität** - OT-Systeme haben andere Anforderungen (Echtzeitfähigkeit, Verfügbarkeit), die durch IT-Traffic gestört werden könnten

**b) Zwei Lösungsansätze für kontrollierten Datenaustausch (4 Punkte):**
1. **DMZ (Demilitarisierte Zone)** - Zwischenzone mit Servern für den Datenaustausch
2. **Industrial Firewall** - Spezielle Firewall, die nur definierte Protokolle und Verbindungen erlaubt

### Aufgabe 2.2 (10 Punkte)

**a) Host-Adressen in 10.10.0.0/16 (2 Punkte):**
```
/16 = 16 Bits für Netz, 16 Bits für Host
Host-Bits: 16 → 2^16 = 65.536 Adressen
Nutzbar: 65.536 - 2 (Netz + Broadcast) = 65.534 Host-Adressen
```

**b) Subnetzmaske für 15 CNC-Maschinen (3 Punkte):**
```
15 Maschinen + 1 Gateway + Reserve = ca. 20-30 Adressen nötig
Nächste Zweierpotenz: 32 (= 2^5)
→ 5 Host-Bits → /27 (32 - 5 = 27)

Antwort: /27 (255.255.255.224)
```
Mit /27 stehen 30 nutzbare Host-Adressen zur Verfügung.

**c) Netzwerkwerte für 10.10.5.100/27 (5 Punkte):**

```
/27 = Subnetzgröße 32 Adressen
10.10.5.100 → 100 / 32 = 3,125 → Subnetz beginnt bei 3 × 32 = 96

Netzadresse: 10.10.5.96
Broadcast: 10.10.5.96 + 31 = 10.10.5.127
Subnetzmaske: 255.255.255.224
```

| Wert | Antwort |
|------|---------|
| Netzadresse | **10.10.5.96** |
| Broadcast-Adresse | **10.10.5.127** |
| Subnetzmaske dezimal | **255.255.255.224** |

### Aufgabe 2.3 (8 Punkte)

**a) Vier Bedrohungen für Industrieanlagen (4 Punkte):**
1. **Ransomware** - Verschlüsselung von Produktionsdaten
2. **Sabotage** - Manipulation von Maschinensteuerungen
3. **Spionage** - Auslesen von Fertigungsgeheimnissen
4. **DDoS-Angriffe** - Überlastung der Netzwerkverbindungen

**b) Vier technische Schutzmaßnahmen (4 Punkte):**
1. **Netzwerksegmentierung** - Trennung von IT und OT
2. **Industrial Firewall** - Kontrolle des Datenverkehrs
3. **Intrusion Detection System (IDS)** - Erkennung von Angriffen
4. **Patch-Management** - Regelmäßige Updates der Systeme

---

## Aufgabe 3: Hardware und Systemtechnik (18 Punkte)

### Aufgabe 3.1 (6 Punkte)

**a) Technischer Unterschied HDD/SSD (2 Punkte):**

| HDD | SSD |
|-----|-----|
| Mechanische Speicherung auf rotierenden Scheiben | Elektronische Speicherung in Flash-Speicherzellen |
| Lese-/Schreibkopf bewegt sich physisch | Keine beweglichen Teile |

**b) Je zwei Vorteile (4 Punkte):**

| HDD-Vorteile | SSD-Vorteile |
|--------------|--------------|
| Günstiger pro GB Speicherplatz | Deutlich schnellere Lese-/Schreibgeschwindigkeit |
| Hohe Kapazitäten verfügbar | Kürzere Zugriffszeiten (kein Suchvorgang) |

### Aufgabe 3.2 (6 Punkte)

**a) Zweck einer USV (3 Punkte):**
Eine USV überbrückt Stromausfälle und schützt vor Spannungsschwankungen.

**Zwei wichtige Situationen:**
1. **Stromausfall** - Server können kontrolliert herunterfahren oder weiterlaufen
2. **Spannungsspitzen** - Schutz der empfindlichen Elektronik vor Überspannung

**b) Berechnung Überbrückungszeit (3 Punkte):**
```
Batteriekapazität: 1000 Wh
Verbrauch Server: 800 W

Zeit = Kapazität / Verbrauch
Zeit = 1000 Wh / 800 W
Zeit = 1,25 Stunden = 75 Minuten
```

**Antwort: Der Server kann theoretisch 75 Minuten (1 Stunde 15 Minuten) überbrückt werden.**

### Aufgabe 3.3 (6 Punkte)

**a) Zwei industrielle Kommunikationsprotocols (2 Punkte):**
1. **PROFINET** - Industrielles Ethernet-Protokoll von Siemens
2. **Modbus TCP** - Einfaches, weit verbreitetes Industrieprotokoll

*Weitere: EtherNet/IP, EtherCAT, PROFIBUS*

**b) OPC UA Erklärung und Vorteile (4 Punkte):**

**OPC UA (Open Platform Communications Unified Architecture):**
Ein plattformunabhängiger Kommunikationsstandard für den sicheren und zuverlässigen Datenaustausch in der Industrie.

**Vorteile für Industrie 4.0:**
1. **Plattformunabhängigkeit** - Funktioniert zwischen verschiedenen Herstellern und Systemen
2. **Integrierte Sicherheit** - Verschlüsselung und Authentifizierung eingebaut
3. **Semantische Beschreibung** - Daten werden mit Bedeutung versehen (nicht nur Werte)

---

## Aufgabe 4: Software und Programmierung (18 Punkte)

### Aufgabe 4.1 (6 Punkte)

**a) Unterschied JSON/XML mit Vorteilen (4 Punkte):**

| JSON | XML |
|------|-----|
| JavaScript Object Notation | Extensible Markup Language |
| Kompaktere Syntax | Ausführlichere Syntax |
| **Vorteil:** Leichtgewichtig, weniger Overhead | **Vorteil:** Schema-Validierung möglich (XSD) |

**b) XML zu JSON Konvertierung (2 Punkte):**

```json
{
  "maschine": {
    "id": "CNC-001",
    "status": "aktiv",
    "temperatur": 45.2,
    "stueckzahl": 1523
  }
}
```

### Aufgabe 4.2 (6 Punkte)

**a) Use-Case-Diagramm Elemente (3 Punkte):**
1. **Akteur** - Externe Person oder System (Strichmännchen)
2. **Use Case** - Anwendungsfall (Ellipse)
3. **Systemgrenze** - Rechteck um die Use Cases

**b) Use-Case-Diagramm-Skizze (3 Punkte):**

```
        ┌────────────────────────────────────────┐
        │           ERP-System                    │
        │                                         │
        │    ┌─────────────────────────┐         │
        │    │   Auftrag anzeigen      │         │
        │    └───────────┬─────────────┘         │
        │                │                        │
  ○     │    ┌───────────┴─────────────┐         │
 /|\────┼────│   Stückzahl melden      │         │
 / \    │    └───────────┬─────────────┘         │
        │                │                        │
Produktions-  ┌──────────┴──────────────┐        │
mitarbeiter   │  Störung dokumentieren  │        │
        │     └─────────────────────────┘        │
        │                                         │
        └─────────────────────────────────────────┘
```

### Aufgabe 4.3 (6 Punkte)

**Schreibtischtests:**

**a) `pruefeWerkstueck(100.2, 25.0, 100, 25, 0.5)` (2 Punkte):**

```
laenge = 100.2, durchmesser = 25.0
sollLaenge = 100, sollDurchmesser = 25, toleranz = 0.5

laengeOK = (100.2 >= 99.5) UND (100.2 <= 100.5) = WAHR UND WAHR = WAHR
durchmesserOK = (25.0 >= 24.5) UND (25.0 <= 25.5) = WAHR UND WAHR = WAHR

WENN WAHR UND WAHR → Ergebnis: "IO"
```

**b) `pruefeWerkstueck(101.0, 25.3, 100, 25, 0.5)` (2 Punkte):**

```
laenge = 101.0, durchmesser = 25.3

laengeOK = (101.0 >= 99.5) UND (101.0 <= 100.5) = WAHR UND FALSCH = FALSCH
durchmesserOK = (25.3 >= 24.5) UND (25.3 <= 25.5) = WAHR UND WAHR = WAHR

WENN FALSCH UND WAHR → FALSCH
SONST WENN FALSCH ODER WAHR → WAHR → Ergebnis: "NIO-T"
```

**c) `pruefeWerkstueck(99.3, 24.2, 100, 25, 0.5)` (2 Punkte):**

```
laenge = 99.3, durchmesser = 24.2

laengeOK = (99.3 >= 99.5) UND (99.3 <= 100.5) = FALSCH UND WAHR = FALSCH
durchmesserOK = (24.2 >= 24.5) UND (24.2 <= 25.5) = FALSCH UND WAHR = FALSCH

WENN FALSCH UND FALSCH → FALSCH
SONST WENN FALSCH ODER FALSCH → FALSCH
SONST → Ergebnis: "NIO"
```

---

## Aufgabe 5: Wirtschaftlichkeit und Projektmanagement (18 Punkte)

### Aufgabe 5.1 (10 Punkte)

**a) Gesamtkosten über 5 Jahre (2 Punkte):**
```
Anschaffung:           120.000 €
Lizenzkosten:   5 × 15.000 € =  75.000 €
Wartungskosten: 5 ×  8.000 € =  40.000 €
─────────────────────────────────────────
Gesamtkosten:                  235.000 €
```

**b) Gesamteinsparungen über 5 Jahre (1 Punkt):**
```
Einsparungen: 5 × 45.000 € = 225.000 €
```

**c) ROI-Berechnung (3 Punkte):**
```
Gewinn = Einsparungen - Kosten
Gewinn = 225.000 € - 235.000 € = -10.000 €

ROI = (Gewinn / Investition) × 100%
ROI = (-10.000 € / 235.000 €) × 100%
ROI = -4,26%
```

**Hinweis:** Der ROI ist leicht negativ. In der Praxis würde man weitere Vorteile berücksichtigen (qualitative Verbesserungen, Wettbewerbsfähigkeit).

**d) Amortisation (4 Punkte):**
```
Jährlicher Nettoertrag = Einsparung - laufende Kosten
Jährlicher Nettoertrag = 45.000 € - 15.000 € - 8.000 € = 22.000 €

Amortisationszeit = Anschaffung / Jährlicher Nettoertrag
Amortisationszeit = 120.000 € / 22.000 € = 5,45 Jahre

Antwort: Die Amortisation ist nach ca. 5,5 Jahren erreicht.
```

### Aufgabe 5.2 (8 Punkte)

**a) Incident oder Problem (2 Punkte):**
Es handelt sich um einen **Incident** (Störung), da eine bestehende Funktionalität (Datenübertragung) nicht wie erwartet funktioniert. Es ist eine ungeplante Unterbrechung des IT-Services.

**b) Priorität mit Begründung (3 Punkte):**
**P3 (Mittel)**

- **Impact:** Niedrig/Mittel (Produktion läuft weiter, nur Datenübertragung betroffen)
- **Urgency:** Niedrig/Mittel (nicht kritisch, da Produktion nicht beeinträchtigt)

Die Störung betrifft nur die Überwachung/Dokumentation, nicht den Produktionsprozess selbst.

**c) Drei systematische Schritte zur Fehleranalyse (3 Punkte):**

1. **Netzwerkverbindung prüfen:**
   - Ist die CNC-Maschine im Netzwerk erreichbar (Ping)?
   - Kabel/Switch-Port prüfen

2. **Maschinenseite prüfen:**
   - Läuft der Datenübertragungsdienst auf der Maschine?
   - Log-Dateien der CNC-Steuerung prüfen

3. **MES-Seite prüfen:**
   - Empfängt das MES Daten von anderen Maschinen?
   - Firewall-Einstellungen prüfen
   - MES-Logs auf Fehlermeldungen prüfen

---

## Gesamtpunktzahl

| Aufgabe | Punkte |
|---------|--------|
| Aufgabe 1: Industrie 4.0 und KI | 20 |
| Aufgabe 2: Netzwerk und IT-Sicherheit | 26 |
| Aufgabe 3: Hardware und Systemtechnik | 18 |
| Aufgabe 4: Software und Programmierung | 18 |
| Aufgabe 5: Wirtschaftlichkeit und Projektmanagement | 18 |
| **Gesamt** | **100** |
