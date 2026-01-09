# Fehleranalyse im IT-Support

## Lernziele

Nach diesem Abschnitt kannst du:
- Systematische Fehleranalyse durchführen
- Die 5-Why-Methode anwenden
- Ishikawa-Diagramme erstellen
- Ursachen von Symptomen unterscheiden

---

## Kerninhalt

### Grundlagen der Fehleranalyse

```
┌─────────────────────────────────────────────────────────────────────┐
│           FEHLERANALYSE                                             │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ZIEL:                                                              │
│  → Nicht nur Symptome beheben, sondern URSACHEN finden             │
│  → Wiederholungsfehler vermeiden                                    │
│  → Nachhaltige Lösungen entwickeln                                 │
│                                                                      │
│  SYMPTOM vs. URSACHE                                                │
│  ──────────────────────────────────────────────────────────────     │
│                                                                      │
│  Symptom: "Der PC ist langsam"                                      │
│     │                                                               │
│     ├── Ursache 1: Festplatte voll                                 │
│     ├── Ursache 2: Malware                                         │
│     ├── Ursache 3: Defekter RAM                                    │
│     └── Ursache 4: Zu viele Autostart-Programme                    │
│                                                                      │
│  WICHTIG:                                                           │
│  → Symptombehandlung = temporäre Lösung                            │
│  → Ursachenbehandlung = dauerhafte Lösung                          │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Systematische Vorgehensweise

```
┌─────────────────────────────────────────────────────────────────────┐
│           SYSTEMATISCHE FEHLERANALYSE                               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌─────────────────┐                                                │
│  │ 1. PROBLEM      │  → Was genau ist das Problem?                 │
│  │    DEFINIEREN   │  → Wann trat es auf?                          │
│  └────────┬────────┘  → Wer ist betroffen?                         │
│           │                                                         │
│           ▼                                                         │
│  ┌─────────────────┐                                                │
│  │ 2. INFORMATIONEN│  → Fehlermeldungen dokumentieren              │
│  │    SAMMELN      │  → Logs prüfen                                │
│  └────────┬────────┘  → User befragen (Was haben Sie gemacht?)     │
│           │                                                         │
│           ▼                                                         │
│  ┌─────────────────┐                                                │
│  │ 3. HYPOTHESEN   │  → Mögliche Ursachen auflisten                │
│  │    BILDEN       │  → Wahrscheinlichkeit einschätzen            │
│  └────────┬────────┘  → Nach Aufwand priorisieren                  │
│           │                                                         │
│           ▼                                                         │
│  ┌─────────────────┐                                                │
│  │ 4. TESTEN       │  → Hypothesen einzeln prüfen                  │
│  │                 │  → Immer nur EINE Variable ändern             │
│  └────────┬────────┘  → Ergebnisse dokumentieren                   │
│           │                                                         │
│           ▼                                                         │
│  ┌─────────────────┐                                                │
│  │ 5. LÖSUNG       │  → Ursache beheben                            │
│  │    UMSETZEN     │  → Erfolg prüfen                              │
│  └────────┬────────┘  → Dokumentieren                               │
│           │                                                         │
│           ▼                                                         │
│  ┌─────────────────┐                                                │
│  │ 6. NACHBEREITEN │  → Knowledge Base aktualisieren               │
│  │                 │  → Präventivmaßnahmen überlegen               │
│  └─────────────────┘                                                │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Die 5-Why-Methode (5 Warum)

```
┌─────────────────────────────────────────────────────────────────────┐
│           5-WHY-METHODE                                             │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  PRINZIP: 5× "Warum?" fragen, um zur Wurzelursache zu gelangen     │
│                                                                      │
│  BEISPIEL: Server ist ausgefallen                                   │
│  ──────────────────────────────────────────────────────────────     │
│                                                                      │
│  Problem: Der Server ist ausgefallen                                │
│                                                                      │
│  1. WARUM ist der Server ausgefallen?                               │
│     → Die Festplatte war voll                                       │
│                                                                      │
│  2. WARUM war die Festplatte voll?                                  │
│     → Die Log-Dateien waren zu groß                                │
│                                                                      │
│  3. WARUM waren die Log-Dateien zu groß?                           │
│     → Die automatische Log-Rotation war deaktiviert                │
│                                                                      │
│  4. WARUM war die Log-Rotation deaktiviert?                        │
│     → Nach dem letzten Update wurde sie nicht neu konfiguriert     │
│                                                                      │
│  5. WARUM wurde sie nicht neu konfiguriert?                        │
│     → Es gab keine Checkliste für Updates                          │
│                                                                      │
│  WURZELURSACHE: Fehlender Update-Prozess                           │
│  MASSNAHME: Checkliste für Server-Updates erstellen                │
│                                                                      │
│  WICHTIG:                                                           │
│  → Muss nicht immer genau 5× sein                                  │
│  → Aufhören, wenn echte Ursache gefunden                           │
│  → Nicht bei oberflächlichen Antworten aufhören                    │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Ishikawa-Diagramm (Fischgräten-Diagramm)

```
┌─────────────────────────────────────────────────────────────────────┐
│           ISHIKAWA-DIAGRAMM                                         │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Auch: Fischgrätendiagramm, Ursache-Wirkungs-Diagramm              │
│                                                                      │
│  AUFBAU:                                                            │
│                                                                      │
│       MENSCH         MASCHINE        METHODE                        │
│          │               │               │                          │
│          │   ┌───────────┼───────────┐   │                          │
│          │   │           │           │   │                          │
│          ▼   ▼           ▼           ▼   ▼                          │
│       ───────────────────────────────────────►  PROBLEM             │
│          ▲   ▲           ▲           ▲   ▲                          │
│          │   │           │           │   │                          │
│          │   └───────────┼───────────┘   │                          │
│          │               │               │                          │
│       MATERIAL        MILIEU         MESSUNG                        │
│                                                                      │
│  DIE 6 M's (typische Kategorien):                                  │
│  ──────────────────────────────────────────────────────────────     │
│  → Mensch: Fehler durch Mitarbeiter, Schulung, Erfahrung           │
│  → Maschine: Hardware, Software, Systeme                           │
│  → Methode: Prozesse, Vorgehensweisen, Anleitungen                 │
│  → Material: Eingabedaten, Ressourcen                              │
│  → Milieu: Umgebung, Netzwerk, Infrastruktur                       │
│  → Messung: Monitoring, Überwachung, Kennzahlen                    │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Ishikawa-Beispiel: E-Mail-Ausfall

```
┌─────────────────────────────────────────────────────────────────────┐
│           ISHIKAWA: E-MAIL FUNKTIONIERT NICHT                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│       MENSCH              MASCHINE           METHODE                │
│       - Passwort          - Server           - Falscher             │
│         falsch              defekt             IMAP-Port           │
│       - Konfiguration     - Client           - SSL nicht            │
│         geändert            veraltet           aktiviert           │
│          │                   │                   │                  │
│          │                   │                   │                  │
│          ▼                   ▼                   ▼                  │
│       ────────────────────────────────────────────►  E-Mail         │
│          ▲                   ▲                   ▲     funktioniert │
│          │                   │                   │     nicht        │
│          │                   │                   │                  │
│       - DNS-Einträge      - Firewall         - Kein                │
│         falsch              blockiert          Monitoring          │
│       - Spam-Filter       - Netzwerk         - Zertifikat          │
│         blockt              ausgefallen        abgelaufen          │
│       MATERIAL            MILIEU             MESSUNG               │
│                                                                      │
│  VORGEHEN:                                                          │
│  1. Alle möglichen Ursachen sammeln (Brainstorming)                │
│  2. In Kategorien (6 M) einordnen                                  │
│  3. Wahrscheinlichste zuerst prüfen                                │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Ausschlussverfahren

```
┌─────────────────────────────────────────────────────────────────────┐
│           AUSSCHLUSSVERFAHREN                                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  PRINZIP: Einfachste/häufigste Ursachen zuerst ausschließen       │
│                                                                      │
│  BEISPIEL: "Internet funktioniert nicht"                           │
│  ──────────────────────────────────────────────────────────────     │
│                                                                      │
│  □ 1. Kabel eingesteckt?                   [✓ JA → weiter]         │
│  □ 2. WLAN aktiviert?                      [✓ JA → weiter]         │
│  □ 3. Router erreichbar (ping)?            [✗ NEIN → Router prüfen]│
│      │                                                              │
│      └─► 3a. Router neugestartet?          [✓ JA → weiter]        │
│          3b. Router-LEDs OK?               [✗ NEIN → Stromkabel]   │
│                                                                      │
│  REIHENFOLGE (Faustregel):                                         │
│  ──────────────────────────────────────────────────────────────     │
│  1. Einfache physische Prüfungen (Kabel, Strom)                    │
│  2. Neustart (User-PC, dann Router/Server)                         │
│  3. Konfiguration prüfen                                           │
│  4. Logs analysieren                                               │
│  5. Tiefer gehende Diagnose                                        │
│                                                                      │
│  TIPP: "Haben Sie es schon aus- und wieder eingeschaltet?"         │
│        → Löst mehr Probleme als man denkt!                         │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Dokumentation der Fehleranalyse

| Was dokumentieren | Warum wichtig |
|-------------------|---------------|
| **Symptom** | Ausgangspunkt klar beschreiben |
| **Prüfschritte** | Nachvollziehbar für Kollegen |
| **Testergebnisse** | Was wurde ausgeschlossen? |
| **Gefundene Ursache** | Für Knowledge Base |
| **Lösung** | Wiederverwendbar |
| **Präventivmaßnahme** | Wiederholung vermeiden |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Symptom** | Sichtbare Auswirkung eines Problems |
| **Ursache** | Eigentlicher Grund des Problems |
| **Wurzelursache** | Grundlegende, ursprüngliche Ursache |
| **5-Why-Methode** | 5× "Warum?" fragen |
| **Ishikawa-Diagramm** | Ursache-Wirkungs-Diagramm |
| **Ausschlussverfahren** | Systematisches Ausschließen von Möglichkeiten |

---

## Prüfungstipps

1. **5-Why-Methode:**
   - In Prüfungen oft gefragt
   - Praktisch anwenden können
   - Bis zur echten Ursache weiterfragen

2. **Ishikawa:**
   - Die 6 M's kennen
   - Diagramm aufzeichnen können
   - Ursachen systematisch sammeln

3. **Typische Prüfungsfragen:**
   - "Analysieren Sie den Fehler mit der 5-Why-Methode"
   - "Erstellen Sie ein Ishikawa-Diagramm"

---

## Übungsaufgaben

### Aufgabe 1: 5-Why anwenden

Analysieren Sie folgenden Fehler mit der 5-Why-Methode:

**Problem:** Ein Mitarbeiter kann seine Präsentation nicht öffnen.

<details>
<summary>Lösung anzeigen</summary>

**5-Why-Analyse:**

1. **WARUM kann die Präsentation nicht geöffnet werden?**
   → Die Datei ist beschädigt

2. **WARUM ist die Datei beschädigt?**
   → Der PC wurde während des Speicherns ausgeschaltet

3. **WARUM wurde der PC während des Speicherns ausgeschaltet?**
   → Der Akku war leer und das Netzteil nicht angeschlossen

4. **WARUM war das Netzteil nicht angeschlossen?**
   → Der Mitarbeiter arbeitet im Besprechungsraum ohne Steckdose

5. **WARUM gibt es im Besprechungsraum keine Steckdose?**
   → Bei der Planung wurden mobile Arbeitsplätze nicht berücksichtigt

**Wurzelursache:** Fehlende Infrastruktur für mobiles Arbeiten

**Maßnahmen:**
- Kurzfristig: Steckdosenleisten/Verlängerungskabel
- Langfristig: Besprechungsräume mit Steckdosen ausstatten
- Schulung: Regelmäßig speichern, Akku-Status beachten

</details>

### Aufgabe 2: Ishikawa-Diagramm erstellen

Erstellen Sie ein Ishikawa-Diagramm für folgendes Problem:

**"Drucker druckt nicht"**

<details>
<summary>Lösung anzeigen</summary>

**Ishikawa-Diagramm: Drucker druckt nicht**

```
       MENSCH              MASCHINE           METHODE
       - Falscher          - Drucker          - Druckauftrag
         Drucker             offline            falsch
         ausgewählt        - Papierstau        konfiguriert
       - Keine             - Toner leer       - Falsches
         Berechtigung      - Drucker-           Papierformat
       - Bedienungs-         treiber            gewählt
         fehler              veraltet
          │                   │                   │
          │                   │                   │
          ▼                   ▼                   ▼
       ────────────────────────────────────────────►  Drucker
          ▲                   ▲                   ▲     druckt
          │                   │                   │     nicht
          │                   │                   │
       - USB-Kabel          - Firewall         - Kein
         defekt               blockiert          Monitoring
       - Falsches           - Print-           - Warteschlange
         Papier               Server             nicht geprüft
       - Kein Papier          ausgefallen
         eingelegt          - WLAN-
       MATERIAL               Problem
                           MILIEU             MESSUNG
```

</details>

### Aufgabe 3: Systematische Analyse

Ein User meldet: "Meine E-Mails kommen nicht mehr an."

Listen Sie in der richtigen Reihenfolge 5 Prüfschritte auf.

<details>
<summary>Lösung anzeigen</summary>

**Systematische Prüfschritte:**

1. **Einfachste Prüfung zuerst:**
   - Internetverbindung vorhanden?
   - E-Mail-Programm geöffnet und korrekt eingerichtet?

2. **Konto prüfen:**
   - Passwort noch gültig?
   - Konto nicht gesperrt?
   - Postfach nicht voll?

3. **Spam/Filter prüfen:**
   - Sind die Mails im Spam-Ordner?
   - Sind Regeln/Filter aktiv, die E-Mails verschieben?

4. **Server-Status prüfen:**
   - Ist der E-Mail-Server erreichbar?
   - Gibt es bekannte Störungen?

5. **Detaillierte Analyse:**
   - Logs prüfen (Serverseite)
   - Testnachricht senden
   - DNS-Einträge (MX-Records) prüfen

</details>

---

## Querverweise

- [Störungsmanagement](09-02-02-incident-management.md) - Incident Handling
- [Ticketsystem](../08-business-processes/08-06-service-management/08-06-02-ticket-system.md) - Dokumentation
- [Service Level](../08-business-processes/08-06-service-management/08-06-03-service-level.md) - Eskalation
- [Netzwerk-Troubleshooting](../07-networks/07-07-network-troubleshooting/07-07-02-troubleshooting.md) - Netzwerkdiagnose
