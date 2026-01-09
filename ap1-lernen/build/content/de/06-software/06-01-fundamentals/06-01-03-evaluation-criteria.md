# Beurteilungskriterien für Software

## Lernziele

Nach diesem Kapitel solltest du:
- Kriterien zur Softwareauswahl kennen
- Funktionale und nicht-funktionale Anforderungen unterscheiden
- Software systematisch bewerten können
- Die Nutzwertanalyse für Softwareauswahl verstehen

---

## Kerninhalt

### Warum Beurteilungskriterien?

Bei der Auswahl von Software müssen verschiedene Faktoren berücksichtigt werden, um die beste Lösung für den Einsatzzweck zu finden.

```
┌─────────────────────────────────────────────────────────────────┐
│              SOFTWAREAUSWAHL - EINFLUSSFAKTOREN                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                      ┌─────────────┐                           │
│         ┌───────────►│  SOFTWARE-  │◄───────────┐              │
│         │            │   AUSWAHL   │            │              │
│         │            └─────────────┘            │              │
│         │                   ▲                   │              │
│         │                   │                   │              │
│   ┌─────┴─────┐      ┌─────┴─────┐      ┌─────┴─────┐        │
│   │ Funktio-  │      │ Technische│      │ Wirtschaft-│        │
│   │ nalität   │      │ Aspekte   │      │ lichkeit   │        │
│   └───────────┘      └───────────┘      └───────────┘        │
│                                                                 │
│   ┌───────────┐      ┌───────────┐      ┌───────────┐        │
│   │ Benutzer- │      │  Sicher-  │      │  Support  │        │
│   │freundlich-│      │   heit    │      │  & Pflege │        │
│   │   keit    │      └───────────┘      └───────────┘        │
│   └───────────┘                                               │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Funktionale Anforderungen

**Funktionale Anforderungen** beschreiben, WAS die Software können muss.

| Kriterium | Beschreibung | Beispiel |
|-----------|--------------|----------|
| **Funktionsumfang** | Benötigte Features vorhanden? | Lagerverwaltung, Bestellwesen |
| **Datenverarbeitung** | Verarbeitung der erforderlichen Daten | Import/Export-Formate |
| **Schnittstellen** | Anbindung an andere Systeme | API, Datenaustausch |
| **Reporting** | Berichte und Auswertungen | Dashboard, Excel-Export |

---

### Nicht-funktionale Anforderungen

**Nicht-funktionale Anforderungen** beschreiben, WIE die Software arbeiten soll.

```
┌────────────────────────────────────────────────────────────────┐
│            NICHT-FUNKTIONALE ANFORDERUNGEN                     │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  PERFORMANCE                      USABILITY                   │
│  ┌────────────────────┐          ┌────────────────────┐      │
│  │ • Reaktionszeit    │          │ • Intuitive        │      │
│  │ • Durchsatz        │          │   Bedienung        │      │
│  │ • Ressourcen-      │          │ • Erlernbarkeit    │      │
│  │   verbrauch        │          │ • Barrierefreiheit │      │
│  └────────────────────┘          └────────────────────┘      │
│                                                                │
│  SICHERHEIT                       ZUVERLÄSSIGKEIT            │
│  ┌────────────────────┐          ┌────────────────────┐      │
│  │ • Datenschutz      │          │ • Verfügbarkeit    │      │
│  │ • Zugriffsschutz   │          │ • Fehlertoleranz   │      │
│  │ • Verschlüsselung  │          │ • Datenintegrität  │      │
│  └────────────────────┘          └────────────────────┘      │
│                                                                │
│  WARTBARKEIT                      PORTABILITÄT               │
│  ┌────────────────────┐          ┌────────────────────┐      │
│  │ • Erweiterbarkeit  │          │ • Plattform-       │      │
│  │ • Dokumentation    │          │   unabhängigkeit   │      │
│  │ • Modularität      │          │ • Installierbar-   │      │
│  └────────────────────┘          │   keit             │      │
│                                   └────────────────────┘      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Wirtschaftliche Kriterien

| Kriterium | Beschreibung |
|-----------|--------------|
| **Anschaffungskosten** | Lizenzkosten, Kaufpreis |
| **Betriebskosten** | Wartung, Updates, Support |
| **Schulungskosten** | Einarbeitung der Mitarbeiter |
| **TCO** | Total Cost of Ownership (Gesamtkosten) |
| **ROI** | Return on Investment (Rentabilität) |

---

### Technische Kriterien

| Kriterium | Fragen |
|-----------|--------|
| **Systemanforderungen** | Läuft auf vorhandener Hardware? |
| **Kompatibilität** | Passt zu bestehender IT-Infrastruktur? |
| **Schnittstellen** | APIs, Datenformate vorhanden? |
| **Skalierbarkeit** | Wächst mit steigenden Anforderungen? |
| **Update-Fähigkeit** | Regelmäßige Aktualisierungen? |

---

### Anbieterkriterien

```
┌────────────────────────────────────────────────────────────────┐
│                    ANBIETERBEWERTUNG                           │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   ┌──────────────────────────────────────────────────────┐    │
│   │  Marktposition      │ Etabliert oder Startup?        │    │
│   │  Referenzen         │ Erfahrungen anderer Kunden     │    │
│   │  Zukunftssicherheit │ Wird Produkt weiterentwickelt? │    │
│   │  Support            │ Reaktionszeiten, Qualität      │    │
│   │  Schulungsangebot   │ Dokumentation, Trainings       │    │
│   │  Vertragsgestaltung │ Kündigungsfristen, SLA         │    │
│   └──────────────────────────────────────────────────────┘    │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Nutzwertanalyse für Softwareauswahl

Die **Nutzwertanalyse** ist eine Methode zum systematischen Vergleich von Alternativen.

```
┌────────────────────────────────────────────────────────────────┐
│                    NUTZWERTANALYSE                             │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Schritt 1: Kriterien definieren                             │
│             (Funktionalität, Kosten, Bedienung, etc.)         │
│                                                                │
│   Schritt 2: Kriterien gewichten (Summe = 100%)               │
│             (z.B. Funktionalität 40%, Kosten 30%, etc.)       │
│                                                                │
│   Schritt 3: Alternativen bewerten (z.B. 1-10 Punkte)         │
│             (Jede Software pro Kriterium)                     │
│                                                                │
│   Schritt 4: Nutzwerte berechnen                              │
│             (Gewichtung × Bewertung)                          │
│                                                                │
│   Schritt 5: Summen vergleichen                               │
│             (Höchster Nutzwert = Empfehlung)                  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### Beispiel: Nutzwertanalyse

| Kriterium | Gewichtung | Software A | Software B | Software C |
|-----------|------------|------------|------------|------------|
| | | Punkte / Nutzwert | Punkte / Nutzwert | Punkte / Nutzwert |
| Funktionalität | 40% | 8 / 3,2 | 9 / 3,6 | 7 / 2,8 |
| Kosten | 30% | 9 / 2,7 | 6 / 1,8 | 8 / 2,4 |
| Bedienbarkeit | 20% | 7 / 1,4 | 8 / 1,6 | 9 / 1,8 |
| Support | 10% | 6 / 0,6 | 7 / 0,7 | 8 / 0,8 |
| **Summe** | **100%** | **7,9** | **7,7** | **7,8** |

**Ergebnis:** Software A hat den höchsten Nutzwert und wird empfohlen.

---

### Entscheidungsmatrix

| Aspekt | Standard-software | Individual-software | Cloud (SaaS) |
|--------|------------------|---------------------|--------------|
| **Kosten** | Niedrig | Hoch | Mittel (laufend) |
| **Anpassung** | Begrenzt | Vollständig | Begrenzt |
| **Verfügbarkeit** | Sofort | Entwicklungszeit | Sofort |
| **Wartung** | Anbieter | Selbst/Dienstleister | Anbieter |
| **Updates** | Anbieter | Individuell | Automatisch |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Funktionale Anforderung** | Was die Software können muss |
| **Nicht-funktionale Anforderung** | Wie die Software arbeiten soll |
| **Nutzwertanalyse** | Systematischer Vergleich von Alternativen |
| **TCO** | Total Cost of Ownership |
| **ROI** | Return on Investment |
| **Skalierbarkeit** | Wachstumsfähigkeit |
| **Usability** | Benutzerfreundlichkeit |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Welche Kriterien sind bei der Softwareauswahl wichtig?
- Was ist eine Nutzwertanalyse?
- Unterscheiden Sie funktionale und nicht-funktionale Anforderungen

### Wichtig zu merken

- **Funktional** = WAS (Features, Funktionen)
- **Nicht-funktional** = WIE (Performance, Sicherheit, Usability)
- **Nutzwertanalyse** = Gewichtete Bewertung von Alternativen
- **TCO** = Alle Kosten über die Nutzungsdauer

---

## Übungsaufgaben

### Aufgabe 1
Ein Unternehmen wählt zwischen drei CRM-Systemen. Nennen Sie vier Kriterien, die bei der Auswahl berücksichtigt werden sollten.

**Lösung:**
1. **Funktionalität:** Kontaktverwaltung, Vertriebssteuerung, Reporting
2. **Kosten:** Lizenzkosten, Schulung, Integration
3. **Kompatibilität:** Schnittstellen zu bestehendem ERP-System
4. **Benutzerfreundlichkeit:** Intuitive Bedienung, Akzeptanz der Mitarbeiter

### Aufgabe 2
Was ist der Unterschied zwischen funktionalen und nicht-funktionalen Anforderungen?

**Lösung:**
- **Funktionale Anforderungen:** Beschreiben die Funktionen, die eine Software bieten muss (WAS). Beispiel: "Die Software muss Rechnungen erstellen können."
- **Nicht-funktionale Anforderungen:** Beschreiben Qualitätseigenschaften der Software (WIE). Beispiel: "Die Rechnung muss innerhalb von 2 Sekunden generiert werden."

### Aufgabe 3
Führen Sie eine vereinfachte Nutzwertanalyse durch:

Kriterien und Gewichtung:
- Funktionalität: 50%
- Preis: 30%
- Support: 20%

Bewertungen (1-10):
| | Software X | Software Y |
|---|---|---|
| Funktionalität | 8 | 9 |
| Preis | 9 | 6 |
| Support | 7 | 8 |

**Lösung:**
| Kriterium | Gewicht | Software X | Software Y |
|-----------|---------|------------|------------|
| Funktionalität | 50% | 8 × 0,5 = 4,0 | 9 × 0,5 = 4,5 |
| Preis | 30% | 9 × 0,3 = 2,7 | 6 × 0,3 = 1,8 |
| Support | 20% | 7 × 0,2 = 1,4 | 8 × 0,2 = 1,6 |
| **Summe** | | **8,1** | **7,9** |

**Ergebnis:** Software X wird empfohlen (höherer Nutzwert).

---

## Querverweise

- [08-02-03 Nutzwertanalyse](../../08-business-processes/08-02-economics/08-02-03-utility-analysis.md) - Details zur Methode
- [08-02-02 ROI und TCO](../../08-business-processes/08-02-economics/08-02-02-roi-tco.md) - Wirtschaftlichkeitsrechnung
- [06-01-01 Softwarearten](./06-01-01-software-types.md) - Standard vs. Individual
