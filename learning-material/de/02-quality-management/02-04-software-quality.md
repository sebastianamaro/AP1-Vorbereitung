# Softwarequalität

## Lernziele

Nach diesem Kapitel solltest du:
- Die Qualitätsmerkmale von Software kennen
- Methoden zur Qualitätssicherung in der Softwareentwicklung verstehen
- Testprotocols erstellen können
- Den Zusammenhang zwischen Softwarequalität und QM verstehen

---

## Kerninhalt

### Was ist Softwarequalität?

**Softwarequalität** bezeichnet den Grad, in dem ein Softwareprodukt festgelegte und implizite Anforderungen erfüllt. Sie umfasst sowohl funktionale als auch nicht-funktionale Eigenschaften.

---

### Qualitätsmerkmale von Software

Nach ISO/IEC 25010 (ehemals ISO 9126) werden acht Hauptmerkmale unterschieden:

```
┌─────────────────────────────────────────────────────────────────┐
│               SOFTWAREQUALITÄTSMERKMALE                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │Funktionalität│  │Zuverlässigkeit│  │Benutzbarkeit│          │
│  │              │  │              │  │  (Usability) │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │  Effizienz   │  │ Wartbarkeit  │  │Übertragbarkeit│         │
│  │              │  │              │  │(Portabilität)│          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐                            │
│  │  Sicherheit  │  │Kompatibilität│                            │
│  │              │  │              │                            │
│  └──────────────┘  └──────────────┘                            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Die Qualitätsmerkmale im Detail

| Merkmal | Beschreibung | Beispiel |
|---------|--------------|----------|
| **Funktionalität** | Software erfüllt spezifizierte Funktionen | Berechnung liefert korrekte Ergebnisse |
| **Zuverlässigkeit** | Aufrechterhaltung der Leistung unter definierten Bedingungen | Stabile Ausführung ohne Abstürze |
| **Benutzbarkeit** | Aufwand für Nutzung, Erlernbarkeit | Intuitive Bedienung, gute Hilfefunktion |
| **Effizienz** | Verhältnis von Leistung zu Ressourcenverbrauch | Schnelle Reaktionszeiten, geringer Speicherverbrauch |
| **Wartbarkeit** | Aufwand für Änderungen und Fehlerbehebung | Modularer, dokumentierter Code |
| **Übertragbarkeit** | Möglichkeit der Übertragung auf andere Umgebungen | Läuft auf verschiedenen Betriebssystemen |
| **Sicherheit** | Schutz vor unberechtigtem Zugriff | Sichere Authentifizierung |
| **Kompatibilität** | Zusammenarbeit mit anderen Systemen | Standard-Schnittstellen |

---

### Qualitätssicherung in der Softwareentwicklung

#### Konstruktive Qualitätssicherung

Maßnahmen, die **während** der Entwicklung angewendet werden:

| Maßnahme | Beschreibung |
|----------|--------------|
| **Coding-Standards** | Einheitliche Programmierrichtlinien |
| **Code-Reviews** | Gegenseitige Codeüberprüfung |
| **Pair Programming** | Zwei Entwickler arbeiten gemeinsam |
| **Dokumentation** | Kommentare und technische Dokumentation |
| **Design Patterns** | Bewährte Entwurfsmuster verwenden |

#### Analytische Qualitätssicherung

Maßnahmen, die **nach** der Entwicklung angewendet werden:

| Maßnahme | Beschreibung |
|----------|--------------|
| **Testen** | Systematische Prüfung der Software |
| **Statische Analyse** | Code ohne Ausführung analysieren |
| **Metriken** | Messbare Qualitätskennzahlen |
| **Audits** | Überprüfung von Prozessen und Ergebnissen |

---

### Testprotokoll

Ein **Testprotokoll** dokumentiert die Durchführung und Ergebnisse von Tests.

#### Typischer Aufbau eines Testprotokolls

| Abschnitt | Inhalt |
|-----------|--------|
| **Allgemeine Daten** | Datum, Prüfer, Testumgebung, Testversion |
| **Prüfpunkte** | Hardware, Software, Netzwerkverbindung, Sicherheitsrichtlinien |
| **Ergebnisse** | Bestanden/Nicht bestanden, Abweichungen |
| **Maßnahmen** | Fehlerbehebung, Nachkontrolle |

#### Beispiel-Testprotokoll

```
┌─────────────────────────────────────────────────────────────────┐
│                    TESTPROTOKOLL                                │
├─────────────────────────────────────────────────────────────────┤
│ Projekt:    Lagerverwaltungssoftware v2.1                      │
│ Datum:      15.03.2025                                         │
│ Prüfer:     Max Mustermann                                     │
│ Umgebung:   Windows 11, 16GB RAM                               │
├─────────────────────────────────────────────────────────────────┤
│ Nr. │ Prüfpunkt            │ Soll     │ Ist      │ Status     │
├─────┼──────────────────────┼──────────┼──────────┼────────────┤
│ 1   │ Login-Funktion       │ OK       │ OK       │ Bestanden  │
│ 2   │ Artikelsuche         │ < 2 Sek  │ 1.5 Sek  │ Bestanden  │
│ 3   │ Bestandsanzeige      │ Korrekt  │ Korrekt  │ Bestanden  │
│ 4   │ PDF-Export           │ OK       │ Fehler   │ Nicht best.│
├─────────────────────────────────────────────────────────────────┤
│ Maßnahmen: Fehler #4 an Entwicklung gemeldet (Ticket #1234)    │
│ Nachtest geplant: 17.03.2025                                   │
└─────────────────────────────────────────────────────────────────┘
```

---

### Software-Testarten

| Testart | Beschreibung | Wer testet? |
|---------|--------------|-------------|
| **Unit-Test** | Test einzelner Komponenten | Entwickler |
| **Integrationstest** | Test des Zusammenspiels | Entwickler/Tester |
| **Systemtest** | Test des Gesamtsystems | Tester |
| **Abnahmetest** | Prüfung durch Auftraggeber | Kunde |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Softwarequalität** | Grad der Erfüllung von Anforderungen durch Software |
| **Funktionalität** | Korrekte Ausführung spezifizierter Funktionen |
| **Wartbarkeit** | Aufwand für Änderungen und Fehlerbehebung |
| **Testprotokoll** | Dokumentation von Testergebnissen |
| **Code-Review** | Gegenseitige Überprüfung von Programmcode |
| **Usability** | Benutzerfreundlichkeit der Software |

---

## Prüfungstipps

### Häufige Prüfungsfragen
- Nennen Sie Qualitätsmerkmale von Software
- Was enthält ein Testprotokoll?
- Unterscheiden Sie konstruktive und analytische Qualitätssicherung

### Wichtig zu merken
- Qualitätsmerkmale nach ISO/IEC 25010 kennen
- Testprotokoll-Aufbau verstehen
- Unterschied zwischen Testarten kennen

---

## Übungsaufgaben

### Aufgabe 1
Nennen Sie vier Qualitätsmerkmale von Software und erklären Sie diese kurz.

**Lösung:**
1. **Funktionalität:** Software führt spezifizierte Funktionen korrekt aus
2. **Zuverlässigkeit:** Software läuft stabil und zuverlässig
3. **Benutzbarkeit:** Software ist einfach zu bedienen und zu erlernen
4. **Wartbarkeit:** Software lässt sich leicht anpassen und Fehler beheben

### Aufgabe 2
Was sind die wesentlichen Bestandteile eines Testprotokolls?

**Lösung:**
- Allgemeine Daten (Datum, Prüfer, Umgebung)
- Prüfpunkte (was wurde getestet)
- Ergebnisse (Soll-Ist-Vergleich, Bestanden/Nicht bestanden)
- Maßnahmen (Fehlerbehebung, Nachkontrolle)

### Aufgabe 3
Unterscheiden Sie konstruktive und analytische Qualitätssicherung.

**Lösung:**
- **Konstruktive QS:** Maßnahmen während der Entwicklung (z.B. Code-Reviews, Standards, Pair Programming)
- **Analytische QS:** Maßnahmen nach der Entwicklung (z.B. Tests, statische Analyse, Audits)

---

## Querverweise

- [06-06-02 Testing](../06-software/06-06-development-process/06-06-02-testing.md) - Testverfahren im Detail
- [02-01-01 Qualitätsbegriff](./02-01-fundamentals/02-01-01-quality-concept.md) - Allgemeine Qualitätsdefinition
- [02-05 Barrierefreiheit](./02-05-accessibility.md) - Benutzbarkeit für alle
