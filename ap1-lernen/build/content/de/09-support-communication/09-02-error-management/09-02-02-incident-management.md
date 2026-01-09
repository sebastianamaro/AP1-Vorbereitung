# Störungsmanagement (Incident Management)

## Lernziele

Nach diesem Abschnitt kannst du:
- Den Störungsmanagement-Prozess beschreiben
- Incidents priorisieren und kategorisieren
- Workarounds von permanenten Lösungen unterscheiden
- Den Zusammenhang mit Problem Management erklären

---

## Kerninhalt

### Was ist Störungsmanagement?

```
┌─────────────────────────────────────────────────────────────────────┐
│           STÖRUNGSMANAGEMENT (INCIDENT MANAGEMENT)                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  DEFINITION:                                                        │
│  ──────────────────────────────────────────────────────────────     │
│  Störungsmanagement ist der Prozess zur schnellstmöglichen          │
│  Wiederherstellung eines IT-Services nach einer ungeplanten         │
│  Unterbrechung.                                                     │
│                                                                      │
│  ZIEL:                                                              │
│  ──────────────────────────────────────────────────────────────     │
│  → Service so schnell wie möglich wiederherstellen                 │
│  → Auswirkungen auf das Geschäft minimieren                        │
│  → Vereinbarte SLAs einhalten                                       │
│                                                                      │
│  INCIDENT (STÖRUNG):                                                │
│  ──────────────────────────────────────────────────────────────     │
│  = Ungeplante Unterbrechung eines IT-Services oder                 │
│    Einschränkung der Qualität eines IT-Services                    │
│                                                                      │
│  Beispiele:                                                         │
│  → Server antwortet nicht                                           │
│  → Software stürzt ab                                               │
│  → Netzwerk ist langsam                                            │
│  → Drucker funktioniert nicht                                       │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Der Incident-Management-Prozess

```
┌─────────────────────────────────────────────────────────────────────┐
│           INCIDENT-MANAGEMENT-PROZESS                               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌──────────────────┐                                               │
│  │ 1. IDENTIFIKATION│  → Störung wird gemeldet/erkannt             │
│  │    & ERFASSUNG   │  → Ticket erstellen                          │
│  └────────┬─────────┘  → Alle Infos dokumentieren                  │
│           │                                                         │
│           ▼                                                         │
│  ┌──────────────────┐                                               │
│  │ 2. KLASSIFIKATION│  → Kategorie zuordnen                        │
│  │    & PRIORISIERUNG│ → Priorität festlegen                       │
│  └────────┬─────────┘  → SLA-Fristen beachten                      │
│           │                                                         │
│           ▼                                                         │
│  ┌──────────────────┐                                               │
│  │ 3. DIAGNOSE      │  → Ursache ermitteln                         │
│  │                  │  → Known Error Database prüfen               │
│  └────────┬─────────┘  → Workaround suchen                         │
│           │                                                         │
│           ├───────────────────────────┐                             │
│           │                           │                             │
│           ▼                           ▼                             │
│  ┌──────────────────┐       ┌──────────────────┐                    │
│  │ 4a. LÖSUNG       │       │ 4b. ESKALATION   │                    │
│  │ (1st Level löst) │       │ (2nd/3rd Level)  │                    │
│  └────────┬─────────┘       └────────┬─────────┘                    │
│           │                           │                             │
│           └───────────────────────────┘                             │
│           │                                                         │
│           ▼                                                         │
│  ┌──────────────────┐                                               │
│  │ 5. ABSCHLUSS     │  → Lösung dokumentieren                      │
│  │    & REVIEW      │  → User-Bestätigung einholen                 │
│  └──────────────────┘  → Ticket schließen                          │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Priorisierung von Incidents

```
┌─────────────────────────────────────────────────────────────────────┐
│           PRIORITÄTSMATRIX                                          │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Priorität = Auswirkung (Impact) × Dringlichkeit (Urgency)         │
│                                                                      │
│                     │ Niedrige     │ Hohe          │                │
│                     │ Auswirkung   │ Auswirkung    │                │
│  ───────────────────┼──────────────┼───────────────┤                │
│  Niedrige           │              │               │                │
│  Dringlichkeit      │   P4 (Low)   │  P3 (Medium)  │                │
│  ───────────────────┼──────────────┼───────────────┤                │
│  Hohe               │              │               │                │
│  Dringlichkeit      │  P3 (Medium) │  P1/P2 (High) │                │
│                                                                      │
│  AUSWIRKUNG (Impact):                                               │
│  ──────────────────────────────────────────────────────────────     │
│  → Hoch: Viele User/kritische Geschäftsprozesse betroffen          │
│  → Niedrig: Einzelne User, nicht-kritische Funktion                │
│                                                                      │
│  DRINGLICHKEIT (Urgency):                                           │
│  ──────────────────────────────────────────────────────────────     │
│  → Hoch: Sofortige Auswirkung auf die Arbeit                       │
│  → Niedrig: User kann weiterarbeiten / hat Workaround              │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Prioritätsstufen im Detail

| Priorität | Bezeichnung | Beispiel | Reaktionszeit | Lösungszeit |
|-----------|-------------|----------|---------------|-------------|
| **P1** | Kritisch | Zentraler Server ausgefallen | 15 min | 4 h |
| **P2** | Hoch | E-Mail-System gestört | 1 h | 8 h |
| **P3** | Mittel | Einzelner Drucker defekt | 4 h | 24 h |
| **P4** | Niedrig | Nicht-kritische Software-Anfrage | 8 h | 5 Tage |

### Workaround vs. Permanente Lösung

```
┌─────────────────────────────────────────────────────────────────────┐
│           WORKAROUND vs. PERMANENTE LÖSUNG                          │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  WORKAROUND (Umgehungslösung):                                      │
│  ──────────────────────────────────────────────────────────────     │
│  → Temporäre Lösung                                                 │
│  → Stellt Arbeitsfähigkeit her                                     │
│  → Behebt nicht die Ursache                                        │
│  → Beispiel: "Nutzen Sie bis zur Reparatur den Drucker im          │
│              Nachbarbüro"                                          │
│                                                                      │
│  PERMANENTE LÖSUNG:                                                 │
│  ──────────────────────────────────────────────────────────────     │
│  → Dauerhafte Lösung                                                │
│  → Behebt die eigentliche Ursache                                  │
│  → Problem tritt nicht mehr auf                                     │
│  → Beispiel: "Drucker wurde repariert/ausgetauscht"                │
│                                                                      │
│  ABLAUF:                                                            │
│  ──────────────────────────────────────────────────────────────     │
│                                                                      │
│  Störung ──► Workaround ──► User kann arbeiten ──► Permanente      │
│  gemeldet    (schnell)      (Service wiederher-    Lösung          │
│                              gestellt)             (später)         │
│                                                                      │
│  WICHTIG:                                                           │
│  → Workaround ist OK, aber Problem nicht vergessen!                │
│  → Ticket bleibt offen bis permanente Lösung                       │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Known Error Database (KEDB)

```
┌─────────────────────────────────────────────────────────────────────┐
│           KNOWN ERROR DATABASE                                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  = Datenbank mit bekannten Fehlern und deren Lösungen              │
│                                                                      │
│  INHALT:                                                            │
│  ──────────────────────────────────────────────────────────────     │
│  → Fehlerbeschreibung                                              │
│  → Bekannte Ursache                                                 │
│  → Workaround                                                       │
│  → Permanente Lösung (falls vorhanden)                             │
│                                                                      │
│  BEISPIEL-EINTRAG:                                                  │
│  ──────────────────────────────────────────────────────────────     │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  KNOWN ERROR #KE-2024-015                                    │   │
│  │                                                              │   │
│  │  Symptom: Outlook stürzt beim Öffnen großer Anhänge ab      │   │
│  │  Ursache: Bug in Outlook Version 2019, Build 16.0.xxxxx     │   │
│  │  Workaround: Anhang im Webmail öffnen oder speichern        │   │
│  │  Permanente Lösung: Update auf aktuelles Build (KB123456)   │   │
│  │  Status: Warten auf nächstes Patch-Fenster                   │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  NUTZEN:                                                            │
│  → Schnellere Lösungsfindung (nicht jedes Mal neu analysieren)    │
│  → Konsistente Antworten                                           │
│  → Wissenstransfer im Team                                          │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Incident vs. Problem Management

```
┌─────────────────────────────────────────────────────────────────────┐
│           INCIDENT vs. PROBLEM MANAGEMENT                           │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  INCIDENT MANAGEMENT:                                               │
│  ──────────────────────────────────────────────────────────────     │
│  → Reaktiv: Reagiert auf Störungen                                 │
│  → Ziel: Service schnell wiederherstellen                          │
│  → Fokus: Symptombehandlung                                        │
│  → "Der Drucker geht wieder"                                       │
│                                                                      │
│  PROBLEM MANAGEMENT:                                                │
│  ──────────────────────────────────────────────────────────────     │
│  → Proaktiv & Reaktiv: Sucht Ursachen                              │
│  → Ziel: Wiederholung verhindern                                   │
│  → Fokus: Ursachenbehandlung                                       │
│  → "Warum fällt der Drucker immer wieder aus?"                    │
│                                                                      │
│  ZUSAMMENHANG:                                                      │
│  ──────────────────────────────────────────────────────────────     │
│                                                                      │
│  Incident 1: Drucker geht nicht  ─┐                                │
│  Incident 2: Drucker geht nicht  ─┼─► PROBLEM: Drucker defekt      │
│  Incident 3: Drucker geht nicht  ─┘    │                           │
│                                        ▼                            │
│                               Known Error: Trommel verschlissen    │
│                                        │                            │
│                                        ▼                            │
│                               Lösung: Drucker austauschen           │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Major Incident Management

```
┌─────────────────────────────────────────────────────────────────────┐
│           MAJOR INCIDENT (SCHWERER VORFALL)                         │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  DEFINITION:                                                        │
│  = Incident mit sehr hoher Auswirkung auf das Geschäft             │
│                                                                      │
│  TYPISCHE KRITERIEN:                                                │
│  ──────────────────────────────────────────────────────────────     │
│  → Viele User betroffen (z.B. > 50%)                               │
│  → Kritische Geschäftsprozesse betroffen                           │
│  → Hoher finanzieller Schaden möglich                              │
│  → Reputationsschaden möglich                                       │
│                                                                      │
│  BESONDERHEITEN:                                                    │
│  ──────────────────────────────────────────────────────────────     │
│  → Eigener Prozess mit kürzeren Reaktionszeiten                    │
│  → Sofortige Eskalation an Management                              │
│  → Dediziertes Team für die Bearbeitung                            │
│  → Regelmäßige Status-Updates (z.B. alle 30 min)                   │
│  → Kommunikation an alle Betroffenen                               │
│                                                                      │
│  BEISPIELE:                                                         │
│  ──────────────────────────────────────────────────────────────     │
│  → Kompletter Netzwerkausfall                                       │
│  → Cyberangriff/Ransomware                                          │
│  → Zentraler Server/Datenbank ausgefallen                          │
│  → ERP-System nicht verfügbar                                      │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Incident-Dokumentation

| Feld | Inhalt |
|------|--------|
| **Incident-ID** | Eindeutige Nummer (#INC-2024-0815) |
| **Meldedatum/-zeit** | Wann wurde gemeldet? |
| **Melder** | Wer hat gemeldet? |
| **Beschreibung** | Was ist das Problem? |
| **Kategorie** | Hardware/Software/Netzwerk/... |
| **Priorität** | P1-P4 |
| **Status** | Offen/In Bearbeitung/Gelöst/Geschlossen |
| **Bearbeiter** | Wer arbeitet daran? |
| **Diagnose** | Was wurde festgestellt? |
| **Workaround** | Temporäre Lösung |
| **Lösung** | Permanente Lösung |
| **Abschlussdatum** | Wann wurde es gelöst? |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Incident** | Ungeplante Unterbrechung eines IT-Services |
| **Impact** | Auswirkung einer Störung |
| **Urgency** | Dringlichkeit einer Störung |
| **Workaround** | Temporäre Umgehungslösung |
| **Known Error** | Fehler mit bekannter Ursache |
| **KEDB** | Known Error Database |
| **Major Incident** | Schwerwiegender Vorfall |

---

## Prüfungstipps

1. **Prioritätsmatrix:**
   - Impact × Urgency = Priority
   - Beispiele zuordnen können

2. **Workaround vs. Lösung:**
   - Workaround = schnell, temporär
   - Permanente Lösung = dauerhaft, Ursache behoben

3. **Incident vs. Problem:**
   - Incident = einzelne Störung
   - Problem = Ursache für mehrere Incidents

---

## Übungsaufgaben

### Aufgabe 1: Priorisierung

Priorisieren Sie folgende Incidents (P1-P4):

a) Das ERP-System ist für alle Mitarbeiter ausgefallen (Buchungen nicht möglich)
b) Der Monitor eines Mitarbeiters flackert gelegentlich
c) Der E-Mail-Server antwortet langsam (E-Mails kommen verzögert an)
d) Ein einzelner Drucker ist offline

<details>
<summary>Lösung anzeigen</summary>

a) **P1 (Kritisch)**
   - Impact: Hoch (alle Mitarbeiter, kritischer Geschäftsprozess)
   - Urgency: Hoch (Buchungen nicht möglich)

b) **P4 (Niedrig)**
   - Impact: Niedrig (ein Mitarbeiter)
   - Urgency: Niedrig (funktioniert noch)

c) **P2/P3 (Hoch/Mittel)**
   - Impact: Hoch (alle Mitarbeiter)
   - Urgency: Mittel (E-Mails kommen an, nur langsam)

d) **P4 (Niedrig)**
   - Impact: Niedrig (betrifft wenige Mitarbeiter)
   - Urgency: Niedrig (andere Drucker verfügbar)

</details>

### Aufgabe 2: Workaround formulieren

Ein Mitarbeiter meldet: "Meine Maus funktioniert nicht mehr."

a) Formulieren Sie einen Workaround
b) Was wäre die permanente Lösung?

<details>
<summary>Lösung anzeigen</summary>

a) **Workaround:**
- "Nutzen Sie zunächst die Tastatur zur Navigation (Tab, Pfeiltasten, Enter)"
- "Ich bringe Ihnen eine Ersatzmaus vorbei"
- "Bis dahin können Sie das Touchpad des Laptops nutzen" (falls Laptop)

b) **Permanente Lösung:**
- Neue Maus bereitstellen
- Bei USB-Problem: USB-Port oder Treiber prüfen
- Bei Funk-Maus: Batterien wechseln, Empfänger prüfen

</details>

### Aufgabe 3: Known Error erstellen

Mehrere Mitarbeiter melden das gleiche Problem:
"Outlook stürzt ab, wenn ich auf Kalender klicke"

Erstellen Sie einen Known Error-Eintrag.

<details>
<summary>Lösung anzeigen</summary>

```
KNOWN ERROR #KE-2024-042

Symptom:
Microsoft Outlook stürzt ab, wenn auf den Kalender
geklickt wird.

Betroffene Systeme:
Outlook 2019/365, Windows 10/11

Bekannte Ursache:
Konflikt mit dem letzten Windows-Update KB5025xxx
in Kombination mit einem Add-In.

Workaround:
1. Outlook im abgesicherten Modus starten
   (outlook.exe /safe)
2. Add-Ins deaktivieren unter
   Datei → Optionen → Add-Ins

Permanente Lösung:
Update KB5026xxx installieren (behebt das Problem)
Status: Geplant für nächsten Patch-Dienstag

Zugehörige Incidents:
#INC-2024-0215, #INC-2024-0218, #INC-2024-0221
```

</details>

---

## Querverweise

- [Fehleranalyse](09-02-01-error-analysis.md) - Ursachenanalyse
- [Serviceanfragen](../08-business-processes/08-06-service-management/08-06-01-service-requests.md) - Incident vs. Request
- [Ticketsystem](../08-business-processes/08-06-service-management/08-06-02-ticket-system.md) - Dokumentation
- [Service Level](../08-business-processes/08-06-service-management/08-06-03-service-level.md) - Support-Stufen
- [SLA](../08-business-processes/08-06-service-management/08-06-04-sla.md) - Reaktionszeiten
