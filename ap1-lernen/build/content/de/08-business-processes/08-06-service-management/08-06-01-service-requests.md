# Serviceanfragen

## Lernziele

Nach diesem Abschnitt kannst du:
- Verschiedene Arten von Serviceanfragen unterscheiden
- Incidents von Service Requests abgrenzen
- Die Bearbeitung von Anfragen beschreiben
- Prioritäten richtig einschätzen

---

## Kerninhalt

### Arten von Serviceanfragen

```
┌─────────────────────────────────────────────────────────────────────┐
│                    SERVICEANFRAGEN                                   │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │                      INCIDENT                                │    │
│  │  ──────────────────────────────────────────────────────────│    │
│  │  = Störung, ungeplante Unterbrechung                        │    │
│  │                                                              │    │
│  │  Merkmale:                                                   │    │
│  │  → Etwas funktioniert NICHT mehr                            │    │
│  │  → Dringend, erfordert schnelle Behebung                    │    │
│  │  → Beeinträchtigt die Arbeit                                │    │
│  │                                                              │    │
│  │  Beispiele:                                                  │    │
│  │  → PC startet nicht                                         │    │
│  │  → Internet ausgefallen                                     │    │
│  │  → Software stürzt ab                                       │    │
│  │  → Drucker druckt nicht                                     │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │                   SERVICE REQUEST                           │    │
│  │  ──────────────────────────────────────────────────────────│    │
│  │  = Anfrage nach Standardleistung                            │    │
│  │                                                              │    │
│  │  Merkmale:                                                   │    │
│  │  → Etwas NEUES wird benötigt                                │    │
│  │  → Planbar, nicht dringend                                  │    │
│  │  → Standardprozess vorhanden                                │    │
│  │                                                              │    │
│  │  Beispiele:                                                  │    │
│  │  → Neuer Benutzer anlegen                                   │    │
│  │  → Passwort zurücksetzen                                    │    │
│  │  → Software installieren                                    │    │
│  │  → Berechtigungen ändern                                    │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │                    PROBLEM                                  │    │
│  │  ──────────────────────────────────────────────────────────│    │
│  │  = Ursache für einen oder mehrere Incidents                 │    │
│  │                                                              │    │
│  │  Beispiel:                                                   │    │
│  │  → Mehrere User melden "E-Mail geht nicht"                  │    │
│  │  → Problem: E-Mail-Server ist ausgefallen                   │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Incident vs. Service Request

| Kriterium | Incident | Service Request |
|-----------|----------|-----------------|
| **Definition** | Störung/Ausfall | Anfrage nach Leistung |
| **Beispiel** | "PC geht nicht" | "Bitte Software installieren" |
| **Dringlichkeit** | Oft hoch | Meist planbar |
| **Ziel** | Schnelle Wiederherstellung | Erfüllung der Anfrage |
| **Prozess** | Incident Management | Request Fulfillment |

### Kategorisierung von Anfragen

```
┌─────────────────────────────────────────────────────────────────────┐
│                    KATEGORISIERUNG                                   │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Nach BEREICH:                                                      │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │  Hardware    │ PC, Drucker, Monitor, Peripherie            │    │
│  │  Software    │ Betriebssystem, Anwendungen, Updates         │    │
│  │  Netzwerk    │ Internet, WLAN, VPN, E-Mail                  │    │
│  │  Zugang      │ Berechtigungen, Passwort, Accounts           │    │
│  │  Sonstiges   │ Fragen, Schulung, Dokumentation              │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                      │
│  Nach PRIORITÄT:                                                    │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │                                                              │    │
│  │  Priorität = Dringlichkeit × Auswirkung                     │    │
│  │                                                              │    │
│  │           │ Niedrige      │ Hohe           │                │    │
│  │           │ Auswirkung    │ Auswirkung     │                │    │
│  │  ─────────┼───────────────┼────────────────┤                │    │
│  │  Niedrige │               │                │                │    │
│  │  Dringl.  │   NIEDRIG     │   MITTEL       │                │    │
│  │  ─────────┼───────────────┼────────────────┤                │    │
│  │  Hohe     │               │                │                │    │
│  │  Dringl.  │   MITTEL      │   HOCH/KRITISCH│                │    │
│  │                                                              │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Prioritätsstufen

| Priorität | Auswirkung | Dringlichkeit | Beispiel | Reaktionszeit |
|-----------|------------|---------------|----------|---------------|
| **Kritisch** | Firma steht still | Sofort | Server-Totalausfall | 15 min |
| **Hoch** | Abteilung betroffen | Dringend | E-Mail-System down | 1 Stunde |
| **Mittel** | Mehrere User | Normal | Drucker defekt | 4 Stunden |
| **Niedrig** | Einzelner User | Gering | Monitor flackert | 1-2 Tage |

### Bearbeitung von Serviceanfragen

```
┌─────────────────────────────────────────────────────────────────────┐
│           BEARBEITUNGSPROZESS                                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌─────────────────┐                                                │
│  │ 1. ANNAHME      │  → Ticket erstellen                           │
│  │                 │  → Kategorisieren                              │
│  └────────┬────────┘  → Priorisieren                               │
│           │                                                         │
│           ▼                                                         │
│  ┌─────────────────┐                                                │
│  │ 2. DIAGNOSE     │  → Problem analysieren                        │
│  │                 │  → Informationen sammeln                       │
│  └────────┬────────┘  → Ursache ermitteln                          │
│           │                                                         │
│           ▼                                                         │
│  ┌─────────────────┐                                                │
│  │ 3. LÖSUNG       │  → Workaround oder Lösung                     │
│  │                 │  → Eskalation wenn nötig                       │
│  └────────┬────────┘  → Dokumentation                               │
│           │                                                         │
│           ▼                                                         │
│  ┌─────────────────┐                                                │
│  │ 4. ABSCHLUSS    │  → Lösung prüfen                              │
│  │                 │  → Kundenfeedback                              │
│  └─────────────────┘  → Ticket schließen                            │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Kommunikation bei Anfragen

```
┌─────────────────────────────────────────────────────────────────────┐
│           KOMMUNIKATION MIT DEM ANWENDER                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  BEI ANNAHME:                                                       │
│  → Freundliche Begrüßung                                            │
│  → Problem verstehen (W-Fragen)                                     │
│  → Ticketnummer mitteilen                                           │
│  → Erwartete Bearbeitungszeit nennen                                │
│                                                                      │
│  WÄHREND BEARBEITUNG:                                               │
│  → Status-Updates bei längerer Dauer                                │
│  → Bei Rückfragen aktiv kommunizieren                               │
│  → Eskalation transparent machen                                    │
│                                                                      │
│  BEI ABSCHLUSS:                                                     │
│  → Lösung erklären                                                  │
│  → Zufriedenheit abfragen                                           │
│  → Tipps zur Vermeidung geben                                       │
│                                                                      │
│  W-FRAGEN:                                                          │
│  ──────────────────────────────────────────────────────────────     │
│  → WAS ist das Problem?                                             │
│  → WANN trat es auf?                                                │
│  → WIE äußert es sich?                                              │
│  → WER ist betroffen?                                               │
│  → WAS wurde bereits versucht?                                      │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Incident** | Ungeplante Unterbrechung eines IT-Services |
| **Service Request** | Anfrage nach einer Standardleistung |
| **Problem** | Ursache für einen oder mehrere Incidents |
| **Kategorisierung** | Einordnung nach Art der Anfrage |
| **Priorisierung** | Festlegung der Bearbeitungsreihenfolge |
| **Workaround** | Vorübergehende Umgehungslösung |

---

## Prüfungstipps

1. **Incident vs. Service Request:**
   - Incident = "Geht nicht" (Störung)
   - Request = "Ich brauche..." (Anfrage)

2. **Priorität berechnen:**
   - Priorität = Dringlichkeit × Auswirkung
   - Hohe Auswirkung + Hohe Dringlichkeit = Kritisch

3. **Typische Prüfungsfragen:**
   - Was ist ein Incident?
   - Wie wird priorisiert?
   - Unterschied Incident/Problem?

---

## Übungsaufgaben

### Aufgabe 1: Kategorisierung

Ordnen Sie folgende Anfragen zu (Incident oder Service Request):

a) "Mein PC fährt nicht mehr hoch"
b) "Ich brauche Zugriff auf den Netzwerkordner Vertrieb"
c) "Das Internet ist sehr langsam"
d) "Bitte installieren Sie Adobe Reader"

<details>
<summary>Lösung anzeigen</summary>

a) **Incident** - PC funktioniert nicht (Störung)
b) **Service Request** - Berechtigung anfragen (Standardleistung)
c) **Incident** - Eingeschränkte Funktionalität (Störung)
d) **Service Request** - Software-Installation (Standardleistung)

</details>

### Aufgabe 2: Priorisierung

Bestimmen Sie die Priorität für folgende Incidents:

a) Der CEO kann keine E-Mails mehr senden
b) Ein Mitarbeiter hat vergessen, wie man druckt
c) Der zentrale Datenbankserver ist ausgefallen
d) Ein Monitor flackert gelegentlich

<details>
<summary>Lösung anzeigen</summary>

a) **Hoch** - Hohe Auswirkung (CEO), mittlere Dringlichkeit
b) **Niedrig** - Das ist eigentlich kein Incident, sondern eine Anfrage/Schulungsbedarf
c) **Kritisch** - Sehr hohe Auswirkung (alle betroffen), sehr hohe Dringlichkeit
d) **Niedrig** - Geringe Auswirkung (ein User), geringe Dringlichkeit

</details>

### Aufgabe 3: Kommunikation

Ein Mitarbeiter ruft an: "Nichts geht mehr! Ich muss dringend arbeiten!"

Wie gehen Sie vor?

<details>
<summary>Lösung anzeigen</summary>

**1. Beruhigen und Begrüßung:**
"Guten Tag, IT-Support. Ich verstehe, dass Sie dringend arbeiten müssen. Lassen Sie uns das Problem schnell klären."

**2. W-Fragen stellen:**
- "WAS genau funktioniert nicht?"
- "WANN haben Sie das Problem bemerkt?"
- "Haben Sie ETWAS verändert oder installiert?"
- "Gibt es eine Fehlermeldung?"

**3. Ticket erstellen:**
- Problem dokumentieren
- Kategorisieren (Hardware/Software/Netzwerk)
- Priorität festlegen

**4. Erwartungen setzen:**
"Ich habe das Ticket mit der Nummer 12345 erstellt. Aufgrund der Dringlichkeit bearbeiten wir es sofort. Ich melde mich in 15 Minuten mit einem Update."

**5. Schnelle Diagnose:**
- Standardfragen: Neustart versucht? Kabel geprüft?
- Ggf. Fernwartung anbieten

</details>

---

## Querverweise

- [Ticketsystem](08-06-02-ticket-system.md) - Ticket-Bearbeitung
- [Service Level](08-06-03-service-level.md) - Support-Stufen
- [SLA](08-06-04-sla.md) - Reaktionszeiten
