# Prüfungssimulation 2: Versicherung „SecureLife AG"

## Prüfungshinweise

- **Bearbeitungszeit:** 90 Minuten
- **Hilfsmittel:** Taschenrechner (nicht programmierbar)
- **Punkte:** 100 Punkte gesamt
- **Bestehensgrenze:** 50 Punkte

---

## Ausgangssituation

Die **SecureLife AG** ist eine mittelständische Versicherungsgesellschaft mit Hauptsitz in Frankfurt am Main. Das Unternehmen beschäftigt 180 Mitarbeiter und bietet Lebens-, Kranken- und Sachversicherungen an.

Sie sind Auszubildender zum Fachinformatiker für Systemintegration in der IT-Abteilung der SecureLife AG. Die IT-Abteilung besteht aus 12 Mitarbeitern und ist für die gesamte IT-Infrastruktur verantwortlich.

Die Versicherung verarbeitet täglich sensible Kundendaten wie Gesundheitsinformationen, Finanzdaten und Vertragsinformationen. Die IT-Sicherheit hat daher höchste Priorität.

Aktuelle IT-Umgebung:
- Zwei physische Server im eigenen Rechenzentrum
- Virtualisierung mit VMware
- Active Directory für Benutzerverwaltung
- 200 Arbeitsplatzrechner (Windows 11)
- E-Mail über Microsoft Exchange Online
- Eigenentwickelte Versicherungssoftware „SecureApp"

---

## Aufgabe 1: IT-Sicherheit (26 Punkte)

### Aufgabe 1.1 (8 Punkte)

Die SecureLife AG hat festgestellt, dass in der Vergangenheit mehrere Phishing-E-Mails an Mitarbeiter gesendet wurden. Ein Mitarbeiter hat versehentlich auf einen Link geklickt.

a) Erklären Sie, was unter **Phishing** zu verstehen ist. (2 Punkte)

b) Nennen Sie **vier** technische Maßnahmen, die die IT-Abteilung ergreifen kann, um Phishing-Angriffe zu erschweren. (4 Punkte)

c) Nennen Sie **zwei** organisatorische Maßnahmen, die das Unternehmen zusätzlich umsetzen sollte. (2 Punkte)

### Aufgabe 1.2 (6 Punkte)

Die IT-Leitung möchte ein **Passwort-Richtlinie** für alle Mitarbeiter einführen.

a) Formulieren Sie **vier** konkrete Anforderungen, die eine sichere Passwort-Richtlinie enthalten sollte. (4 Punkte)

b) Erklären Sie, warum die Verwendung von **Hash-Werten** bei der Speicherung von Passwörtern wichtig ist. (2 Punkte)

### Aufgabe 1.3 (6 Punkte)

Die SecureLife AG möchte vertrauliche Vertragsunterlagen an Kunden per E-Mail versenden.

a) Erklären Sie den Unterschied zwischen **symmetrischer** und **asymmetrischer** Verschlüsselung. (4 Punkte)

b) Erläutern Sie, was man unter **hybrider Verschlüsselung** versteht und warum diese in der Praxis oft verwendet wird. (2 Punkte)

### Aufgabe 1.4 (6 Punkte)

Im Rahmen des Notfallmanagements soll die IT-Infrastruktur nach einem Serverausfall schnell wiederhergestellt werden können.

a) Erklären Sie die Begriffe **RTO** (Recovery Time Objective) und **RPO** (Recovery Point Objective). (4 Punkte)

b) Die SecureLife AG hat ein RPO von 4 Stunden festgelegt. Was bedeutet das für die Backup-Strategie? (2 Punkte)

---

## Aufgabe 2: Datenschutz (16 Punkte)

### Aufgabe 2.1 (8 Punkte)

Die Versicherung verarbeitet besonders sensible Daten wie Gesundheitsinformationen.

a) Nennen Sie **vier** Kategorien von Daten, die nach Art. 9 DSGVO als **„besondere Kategorien personenbezogener Daten"** gelten. (4 Punkte)

b) Unter welchen Voraussetzungen darf die SecureLife AG diese besonderen Daten verarbeiten? Nennen Sie **zwei** Rechtsfundamentals. (2 Punkte)

c) Welche **technischen und organisatorischen Maßnahmen (TOM)** sollte die Versicherung zum Schutz dieser Daten implementieren? Nennen Sie **zwei** konkrete Beispiele. (2 Punkte)

### Aufgabe 2.2 (8 Punkte)

Die SecureLife AG möchte Kundendaten für statistische Auswertungen nutzen, ohne dabei einzelne Kunden identifizieren zu können.

a) Erklären Sie den Unterschied zwischen **Anonymisierung** und **Pseudonymisierung**. (4 Punkte)

b) Für welches Verfahren würden Sie sich entscheiden, wenn die Daten später noch einem Kunden zugeordnet werden müssen? Begründen Sie Ihre Entscheidung. (2 Punkte)

c) Welche Rolle spielt der **Datenschutzbeauftragte** im Unternehmen? Nennen Sie **zwei** seiner Aufgaben. (2 Punkte)

---

## Aufgabe 3: IT-Systeme (22 Punkte)

### Aufgabe 3.1 (6 Punkte)

Die IT-Abteilung plant, die beiden physischen Server durch eine modernere Lösung zu ersetzen. Zur Auswahl stehen:
- Option A: Neue physische Server mit Virtualisierung
- Option B: Migration in die Cloud (IaaS)

a) Erläutern Sie **drei** Vorteile der Virtualisierung gegenüber rein physischen Servern. (3 Punkte)

b) Nennen Sie **drei** Aspekte, die bei einer Migration in die Cloud bezüglich des **Datenschutzes** beachtet werden müssen. (3 Punkte)

### Aufgabe 3.2 (8 Punkte)

Die SecureLife AG verwendet NAS-Systeme (Network Attached Storage) für die Datenspeicherung.

a) Erklären Sie, was ein **NAS** ist und wie es sich von einem klassischen Fileserver unterscheidet. (3 Punkte)

b) Das NAS soll eine hohe Verfügbarkeit gewährleisten. Erläutern Sie **drei** Maßnahmen, die die Verfügbarkeit eines NAS erhöhen können. (3 Punkte)

c) Erklären Sie die **3-2-1-Backup-Regel** und warum sie für die Datensicherung wichtig ist. (2 Punkte)

### Aufgabe 3.3 (8 Punkte)

Ein neuer Arbeitsplatz-PC soll in die Windows-Domäne der SecureLife AG aufgenommen werden.

a) Erklären Sie, was eine **Windows-Domäne** ist und welche Vorteile sie bietet. Nennen Sie **zwei** Vorteile. (3 Punkte)

b) Beschreiben Sie die wesentlichen Schritte, um einen Windows-11-PC in eine bestehende Domäne aufzunehmen. Nennen Sie **drei** Schritte. (3 Punkte)

c) Was ist ein **Gruppenrichtlinienobjekt (GPO)** und wofür wird es verwendet? (2 Punkte)

---

## Aufgabe 4: Software und Datenbanken (18 Punkte)

### Aufgabe 4.1 (6 Punkte)

Die Entwicklungsabteilung arbeitet mit einem **Scrum**-Vorgehensmodell an der Weiterentwicklung der Versicherungssoftware „SecureApp".

a) Nennen Sie die **drei** Hauptrollen in Scrum und beschreiben Sie kurz deren Aufgaben. (6 Punkte)

### Aufgabe 4.2 (6 Punkte)

In der Versicherungssoftware soll eine Funktion zur Beitragsberechnung überprüft werden. Gegeben ist folgender Pseudocode:

```
FUNKTION berechneBeitrag(alter, raucher, basisBeitrag)
    beitrag = basisBeitrag

    WENN alter > 50 DANN
        beitrag = beitrag * 1.3
    SONST WENN alter > 30 DANN
        beitrag = beitrag * 1.1
    ENDE WENN

    WENN raucher = WAHR DANN
        beitrag = beitrag + 50
    ENDE WENN

    RÜCKGABE beitrag
ENDE FUNKTION
```

a) Führen Sie einen **Schreibtischtest** für folgende Aufrufe durch: (4 Punkte)
   - `berechneBeitrag(55, WAHR, 100)`
   - `berechneBeitrag(25, FALSCH, 100)`

b) Ein Kollege hat einen **Fehler** im Code gefunden. Bei einem Alter von genau 50 Jahren wird kein Aufschlag berechnet. Wie müsste die erste Bedingung korrigiert werden? (2 Punkte)

### Aufgabe 4.3 (6 Punkte)

Die Versicherungssoftware verwendet eine relationale Datenbank. Folgende Tabellen sind vorhanden:

```
Tabelle KUNDE:
KundenNr | Name      | Geburtsdatum | PLZ
---------|-----------|--------------|------
1001     | Müller    | 1985-03-15   | 60311
1002     | Schmidt   | 1972-08-22   | 60312
1003     | Weber     | 1990-01-10   | 60313

Tabelle VERTRAG:
VertragNr | KundenNr | Art           | Jahresbeitrag
----------|----------|---------------|---------------
V001      | 1001     | Leben         | 1200.00
V002      | 1001     | Kranken       | 2400.00
V003      | 1002     | Sach          | 350.00
V004      | 1003     | Leben         | 800.00
```

a) In welcher **Normalform** befinden sich die Tabellen? Begründen Sie Ihre Antwort. (3 Punkte)

b) Erklären Sie, was ein **Fremdschlüssel** ist und identifizieren Sie ihn in den Tabellen. (3 Punkte)

---

## Aufgabe 5: Arbeitsplatzeinrichtung und Support (18 Punkte)

### Aufgabe 5.1 (10 Punkte)

Ein neuer Mitarbeiter der Schadensabteilung benötigt einen vollständig eingerichteten Arbeitsplatz.

a) Erstellen Sie eine **Checkliste** mit **mindestens 8 Punkten** für die Einrichtung eines neuen Arbeitsplatzes (Hardware, Software, Netzwerk, Berechtigungen). (8 Punkte)

b) Begründen Sie, warum eine standardisierte Arbeitsplatzeinrichtung aus Sicht der **IT-Sicherheit** wichtig ist. (2 Punkte)

### Aufgabe 5.2 (8 Punkte)

Ein Mitarbeiter meldet sich beim IT-Support mit folgender Nachricht:

„Ich versuche seit 20 Minuten, mich anzumelden, aber es funktioniert nicht! Ich habe einen wichtigen Termin in 10 Minuten und muss unbedingt an meine Unterlagen!"

a) Ordnen Sie den Incident einer **Priorität** zu (P1-P4) und begründen Sie Ihre Entscheidung. Verwenden Sie dabei die Kriterien **Impact** und **Urgency**. (3 Punkte)

b) Formulieren Sie **drei** gezielte Fragen, die Sie dem Mitarbeiter stellen würden, um das Problem einzugrenzen. (3 Punkte)

c) Nennen Sie **zwei** mögliche Ursachen für das Anmeldeproblem und jeweils eine Lösungsmöglichkeit. (2 Punkte)

---

## Ende der Prüfung

**Kontrollieren Sie Ihre Antworten!**

Hinweis: Die Lösungen zu dieser Simulation finden Sie unter [10-03-02-solution-versicherung.md](../10-03-solutions/10-03-02-solution-versicherung.md)
