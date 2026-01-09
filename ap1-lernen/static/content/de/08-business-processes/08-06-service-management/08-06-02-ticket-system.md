# Ticketsystem

## Lernziele

Nach diesem Abschnitt kannst du:
- Den Aufbau und Zweck eines Ticketsystems erklären
- Den Lebenszyklus eines Tickets beschreiben
- Wichtige Ticketinformationen benennen
- Vorteile von Ticketsystemen erläutern

---

## Kerninhalt

### Was ist ein Ticketsystem?

Ein **Ticketsystem** (auch Helpdesk-System oder Issue-Tracking-System) ist eine Software zur strukturierten Erfassung, Verfolgung und Bearbeitung von Anfragen und Störungen.

```
┌─────────────────────────────────────────────────────────────────────┐
│                    TICKETSYSTEM                                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│                    ┌─────────────────────┐                          │
│    User meldet     │                     │   IT-Support             │
│    Problem    ───► │    TICKETSYSTEM     │ ───► bearbeitet          │
│                    │                     │                          │
│                    │  • Erfassung        │                          │
│                    │  • Zuweisung        │                          │
│                    │  • Verfolgung       │                          │
│                    │  • Dokumentation    │                          │
│                    │  • Auswertung       │                          │
│                    │                     │                          │
│                    └─────────────────────┘                          │
│                                                                      │
│  Bekannte Systeme:                                                  │
│  → OTRS/Znuny                                                       │
│  → Jira Service Management                                          │
│  → ServiceNow                                                       │
│  → Freshdesk                                                        │
│  → osTicket                                                         │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Aufbau eines Tickets

```
┌─────────────────────────────────────────────────────────────────────┐
│                    TICKET-INFORMATIONEN                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │  TICKET #2024-001234                        Status: OFFEN   │    │
│  ├─────────────────────────────────────────────────────────────┤    │
│  │                                                              │    │
│  │  KOPFDATEN:                                                  │    │
│  │  ──────────────────────────────────────────────────────────│    │
│  │  Erstellt:       2024-01-15 09:30 Uhr                       │    │
│  │  Melder:         Max Müller (Vertrieb)                      │    │
│  │  Kontakt:        m.mueller@consystem.de, Tel: 1234          │    │
│  │  Bearbeiter:     Tim Schmidt (IT-Support)                   │    │
│  │                                                              │    │
│  │  KLASSIFIZIERUNG:                                           │    │
│  │  ──────────────────────────────────────────────────────────│    │
│  │  Typ:            Incident                                   │    │
│  │  Kategorie:      Hardware → PC → Startproblem               │    │
│  │  Priorität:      HOCH                                       │    │
│  │  Auswirkung:     1 Mitarbeiter kann nicht arbeiten          │    │
│  │                                                              │    │
│  │  BESCHREIBUNG:                                              │    │
│  │  ──────────────────────────────────────────────────────────│    │
│  │  PC startet nicht mehr. Beim Einschalten piept es 3x.       │    │
│  │  Neustart und Kabelprüfung bereits durchgeführt.            │    │
│  │                                                              │    │
│  │  HISTORIE:                                                  │    │
│  │  ──────────────────────────────────────────────────────────│    │
│  │  09:30  Ticket erstellt (Melder: M. Müller)                 │    │
│  │  09:35  Zugewiesen an T. Schmidt                            │    │
│  │  09:45  Status → In Bearbeitung                             │    │
│  │  10:00  Diagnose: RAM-Riegel defekt                         │    │
│  │  10:15  Lösung: RAM ausgetauscht, PC funktioniert           │    │
│  │  10:20  Status → Gelöst                                     │    │
│  │                                                              │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Ticket-Lebenszyklus

```
┌─────────────────────────────────────────────────────────────────────┐
│                    TICKET-STATUS                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌────────┐                                                         │
│  │  NEU   │  Ticket wurde gerade erstellt                           │
│  └───┬────┘                                                         │
│      │                                                              │
│      ▼                                                              │
│  ┌────────┐                                                         │
│  │ OFFEN  │  Ticket wartet auf Bearbeitung                          │
│  └───┬────┘                                                         │
│      │                                                              │
│      ▼                                                              │
│  ┌──────────────┐                                                   │
│  │IN BEARBEITUNG│  Support arbeitet am Ticket                       │
│  └───┬──────────┘                                                   │
│      │                                                              │
│      ├──────────────────────────────────┐                           │
│      │                                  │                           │
│      ▼                                  ▼                           │
│  ┌────────┐                        ┌─────────┐                      │
│  │WARTEND │  Warte auf User/Teil   │ESKALIERT│  An höhere Ebene     │
│  └───┬────┘                        └────┬────┘                      │
│      │                                  │                           │
│      └──────────────────────────────────┘                           │
│      │                                                              │
│      ▼                                                              │
│  ┌────────┐                                                         │
│  │ GELÖST │  Problem behoben                                        │
│  └───┬────┘                                                         │
│      │  (Bestätigung durch User)                                    │
│      ▼                                                              │
│  ┌──────────┐                                                       │
│  │GESCHLOSSEN│  Ticket abgeschlossen                                │
│  └──────────┘                                                       │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Wichtige Ticket-Felder

| Feld | Beschreibung | Beispiel |
|------|--------------|----------|
| **Ticket-ID** | Eindeutige Nummer | #2024-001234 |
| **Melder** | Wer hat gemeldet? | Max Müller |
| **Bearbeiter** | Wer bearbeitet? | Tim Schmidt |
| **Status** | Aktueller Stand | In Bearbeitung |
| **Priorität** | Dringlichkeit | Hoch |
| **Kategorie** | Art des Problems | Hardware → PC |
| **Beschreibung** | Problembeschreibung | PC startet nicht |
| **Erstellt** | Zeitstempel | 15.01.2024 09:30 |
| **SLA-Deadline** | Frist laut SLA | 15.01.2024 13:30 |

### Vorteile eines Ticketsystems

```
┌─────────────────────────────────────────────────────────────────────┐
│                    VORTEILE                                          │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ✓ TRANSPARENZ                                                      │
│    → Alle Anfragen sind dokumentiert                                │
│    → Status jederzeit einsehbar                                     │
│    → Nachvollziehbare Historie                                      │
│                                                                      │
│  ✓ EFFIZIENZ                                                        │
│    → Keine Anfragen gehen verloren                                  │
│    → Automatische Zuweisung möglich                                 │
│    → Priorisierung nach Wichtigkeit                                 │
│                                                                      │
│  ✓ AUSWERTUNG                                                       │
│    → Kennzahlen (KPIs) messbar                                      │
│    → Häufige Probleme identifizieren                                │
│    → Workload-Verteilung analysieren                                │
│                                                                      │
│  ✓ KOMMUNIKATION                                                    │
│    → Zentrale Kommunikation im Ticket                               │
│    → Automatische Benachrichtigungen                                │
│    → Keine E-Mail-Ketten mehr                                       │
│                                                                      │
│  ✓ SLA-ÜBERWACHUNG                                                  │
│    → Reaktions- und Lösungszeiten messen                            │
│    → Eskalation bei Fristüberschreitung                             │
│    → Reporting für Management                                       │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Kennzahlen (KPIs) im Ticketsystem

| KPI | Beschreibung | Zielwert (Beispiel) |
|-----|--------------|---------------------|
| **Anzahl Tickets** | Tickets pro Zeitraum | < 50/Tag |
| **Durchlaufzeit** | Zeit bis Abschluss | < 4 Stunden |
| **Erstlösungsrate** | Lösung beim ersten Kontakt | > 70% |
| **Offene Tickets** | Aktuell ungelöste Tickets | < 20 |
| **Kundenzufriedenheit** | Bewertung durch User | > 4/5 Sterne |
| **SLA-Einhaltung** | Innerhalb der Frist gelöst | > 95% |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Ticket** | Datensatz zu einer Anfrage/Störung |
| **Ticket-ID** | Eindeutige Identifikationsnummer |
| **Queue** | Warteschlange für Tickets |
| **Eskalation** | Weiterleitung an höhere Ebene |
| **SLA** | Service Level Agreement (Zielzeiten) |
| **KPI** | Key Performance Indicator (Kennzahl) |
| **Erstlösungsrate** | First Call Resolution Rate |

---

## Prüfungstipps

1. **Ticket-Inhalte kennen:**
   - Melder, Bearbeiter, Status, Priorität, Kategorie

2. **Status-Reihenfolge:**
   - Neu → Offen → In Bearbeitung → Gelöst → Geschlossen

3. **Vorteile:**
   - Transparenz, Nachvollziehbarkeit, Auswertbarkeit

---

## Übungsaufgaben

### Aufgabe 1: Ticket erstellen

Ein Mitarbeiter ruft an: "Mein Outlook stürzt immer ab, wenn ich Anhänge öffne. Das passiert seit gestern."

Erstellen Sie ein Ticket mit allen relevanten Informationen.

<details>
<summary>Lösung anzeigen</summary>

```
TICKET #2024-000001

KOPFDATEN:
- Erstellt: [aktuelles Datum/Uhrzeit]
- Melder: [Name des Anrufers]
- Kontakt: [Telefonnummer/E-Mail]
- Bearbeiter: [Zuweisen]

KLASSIFIZIERUNG:
- Typ: Incident
- Kategorie: Software → E-Mail → Outlook
- Priorität: MITTEL
- Auswirkung: 1 Mitarbeiter eingeschränkt arbeitsfähig

BESCHREIBUNG:
Outlook stürzt beim Öffnen von Anhängen ab.
Seit: Gestern
Betroffene Anhänge: [nachfragen: alle oder bestimmte?]
Fehlermeldung: [nachfragen]

HISTORIE:
[Zeitstempel] Ticket erstellt
[Zeitstempel] Erste Diagnose: ...
```

</details>

### Aufgabe 2: Status zuordnen

Ordnen Sie die folgenden Situationen dem richtigen Ticket-Status zu:

a) Der IT-Support hat das Problem gelöst und wartet auf Bestätigung des Users
b) Ein neues Ticket wurde gerade per E-Mail erstellt
c) Der Support wartet auf ein Ersatzteil
d) Das Ticket wurde seit 3 Monaten nicht mehr bearbeitet
e) Der Support arbeitet gerade am Problem

<details>
<summary>Lösung anzeigen</summary>

a) **GELÖST** - Warten auf Bestätigung durch User
b) **NEU** oder **OFFEN** - Gerade erstellt, wartet auf Zuweisung
c) **WARTEND** - Warten auf externe Ressource
d) **GESCHLOSSEN** - Sollte nach 3 Monaten automatisch geschlossen sein
e) **IN BEARBEITUNG** - Aktive Bearbeitung

</details>

### Aufgabe 3: KPIs interpretieren

Ein IT-Support-Team hat folgende Kennzahlen:
- Erstlösungsrate: 45%
- Durchschnittliche Bearbeitungszeit: 8 Stunden
- SLA-Einhaltung: 72%

Bewerten Sie die Kennzahlen und nennen Sie Verbesserungsvorschläge.

<details>
<summary>Lösung anzeigen</summary>

**Bewertung:**

| KPI | Wert | Bewertung |
|-----|------|-----------|
| Erstlösungsrate | 45% | Schlecht (Ziel: >70%) |
| Bearbeitungszeit | 8h | Mittelmäßig (je nach SLA) |
| SLA-Einhaltung | 72% | Kritisch (Ziel: >95%) |

**Verbesserungsvorschläge:**

1. **Erstlösungsrate verbessern:**
   - Bessere Wissensdatenbank aufbauen
   - Schulungen für 1st-Level-Support
   - Häufige Probleme als Self-Service anbieten

2. **Bearbeitungszeit reduzieren:**
   - Bessere Priorisierung
   - Automatisierung von Standardaufgaben
   - Mehr Personal oder bessere Verteilung

3. **SLA-Einhaltung verbessern:**
   - Eskalationsprozesse optimieren
   - Frühwarnsystem für drohende SLA-Verletzungen
   - Kapazitätsengpässe identifizieren

</details>

---

## Querverweise

- [Serviceanfragen](08-06-01-service-requests.md) - Incident vs. Request
- [Service Level](08-06-03-service-level.md) - Support-Stufen
- [SLA](08-06-04-sla.md) - Service Level Agreements
