# Lösung: Prüfungssimulation 2 - Versicherung „SecureLife AG"

---

## Aufgabe 1: IT-Sicherheit (26 Punkte)

### Aufgabe 1.1 (8 Punkte)

**a) Phishing-Erklärung (2 Punkte):**
Phishing ist eine Betrugsmasche, bei der Angreifer versuchen, über gefälschte E-Mails, Websites oder Nachrichten an vertrauliche Daten (Passwörter, Kontodaten) zu gelangen. Dabei werden vertrauenswürdige Absender (Bank, Firma) vorgetäuscht.

**b) Vier technische Maßnahmen (4 Punkte):**
1. **E-Mail-Filter/Spam-Filter** - Verdächtige E-Mails automatisch aussortieren
2. **Link-Prüfung** - URLs vor dem Öffnen auf Echtheit prüfen
3. **Multi-Faktor-Authentifizierung** - Selbst bei gestohlenen Zugangsdaten kein Zugriff
4. **E-Mail-Authentifizierung (SPF, DKIM, DMARC)** - Prüfung der Absender-Legitimität

**c) Zwei organisatorische Maßnahmen (2 Punkte):**
1. **Security Awareness Schulungen** - Mitarbeiter für Phishing sensibilisieren
2. **Klare Meldeprozesse** - Verdächtige E-Mails an IT-Sicherheit melden

### Aufgabe 1.2 (6 Punkte)

**a) Vier Anforderungen für sichere Passwort-Richtlinie (4 Punkte):**
1. **Mindestlänge** - Mindestens 12 Zeichen
2. **Komplexität** - Groß-/Kleinbuchstaben, Zahlen, Sonderzeichen
3. **Keine Wiederverwendung** - Passwort-Historie prüfen
4. **Regelmäßiger Wechsel** - z.B. alle 90 Tage (oder bei Kompromittierung)

**b) Bedeutung von Hash-Werten (2 Punkte):**
Hash-Werte sind Einweg-Funktionen, die Passwörter in eine nicht umkehrbare Zeichenkette umwandeln. Bei einem Datenleck können Angreifer die Passwörter nicht direkt auslesen, da nur die Hash-Werte gespeichert sind und nicht die Klartextpasswörter.

### Aufgabe 1.3 (6 Punkte)

**a) Symmetrische vs. asymmetrische Verschlüsselung (4 Punkte):**

| Symmetrisch | Asymmetrisch |
|-------------|--------------|
| Ein gemeinsamer Schlüssel | Schlüsselpaar (öffentlich + privat) |
| Schneller | Langsamer |
| Problem: Schlüsselaustausch | Öffentlicher Schlüssel kann geteilt werden |
| Beispiel: AES | Beispiel: RSA |

**b) Hybride Verschlüsselung (2 Punkte):**
Hybride Verschlüsselung kombiniert beide Verfahren: Die eigentlichen Daten werden mit einem zufälligen symmetrischen Schlüssel verschlüsselt (schnell). Dieser symmetrische Schlüssel wird dann asymmetrisch verschlüsselt und mitgesendet. So nutzt man die Geschwindigkeit der symmetrischen und die sichere Schlüsselverteilung der asymmetrischen Verschlüsselung.

### Aufgabe 1.4 (6 Punkte)

**a) RTO und RPO (4 Punkte):**

| Begriff | Erklärung |
|---------|-----------|
| **RTO (Recovery Time Objective)** | Maximale Zeit, die ein System nach einem Ausfall ausfallen darf, bis es wiederhergestellt sein muss. Beispiel: Server muss innerhalb von 4 Stunden wieder laufen. |
| **RPO (Recovery Point Objective)** | Maximaler Datenverlust, der akzeptabel ist. Zeitpunkt, bis zu dem Daten wiederhergestellt werden können. Beispiel: Maximal 4 Stunden alte Daten dürfen verloren gehen. |

**b) Bedeutung für Backup-Strategie (2 Punkte):**
Bei einem RPO von 4 Stunden müssen mindestens alle 4 Stunden Backups erstellt werden. Bei einem Ausfall können dann maximal die Daten der letzten 4 Stunden verloren gehen.

---

## Aufgabe 2: Datenschutz (16 Punkte)

### Aufgabe 2.1 (8 Punkte)

**a) Vier besondere Datenkategorien nach Art. 9 DSGVO (4 Punkte):**
1. **Gesundheitsdaten** - Krankheiten, Behandlungen
2. **Genetische Daten**
3. **Biometrische Daten** - zur Identifizierung
4. **Daten zur politischen Meinung**

*Weitere: religiöse Überzeugung, ethnische Herkunft, Gewerkschaftszugehörigkeit, Sexualleben*

**b) Zwei Rechtsfundamentals (2 Punkte):**
1. **Ausdrückliche Einwilligung** der betroffenen Person
2. **Erforderlich für Vertragserfüllung** (z.B. Krankenversicherungsvertrag)

**c) Zwei TOM-Beispiele (2 Punkte):**
1. **Verschlüsselung** der gespeicherten Gesundheitsdaten
2. **Zugriffskontrolle** - Nur berechtigte Sachbearbeiter haben Zugriff

### Aufgabe 2.2 (8 Punkte)

**a) Unterschied Anonymisierung/Pseudonymisierung (4 Punkte):**

| Anonymisierung | Pseudonymisierung |
|----------------|-------------------|
| Personenbezug wird dauerhaft und unwiderruflich entfernt | Personenbezug wird durch Pseudonym (z.B. ID-Nummer) ersetzt |
| Daten können keiner Person mehr zugeordnet werden | Mit Zuordnungstabelle kann Personenbezug wiederhergestellt werden |
| DSGVO gilt nicht mehr | DSGVO gilt weiterhin |

**b) Empfehlung bei späterer Zuordnung (2 Punkte):**
**Pseudonymisierung**, da die Daten bei Bedarf wieder einem Kunden zugeordnet werden können. Die Zuordnungstabelle muss sicher und getrennt aufbewahrt werden.

**c) Zwei Aufgaben des Datenschutzbeauftragten (2 Punkte):**
1. **Beratung** des Unternehmens und der Mitarbeiter zu Datenschutzfragen
2. **Überwachung** der Einhaltung der DSGVO im Unternehmen

*Weitere: Ansprechpartner für Aufsichtsbehörde, Schulungen durchführen, Dokumentation*

---

## Aufgabe 3: IT-Systeme (22 Punkte)

### Aufgabe 3.1 (6 Punkte)

**a) Drei Vorteile der Virtualisierung (3 Punkte):**
1. **Bessere Ressourcenauslastung** - Mehrere VMs auf einem physischen Server
2. **Flexibilität/Skalierbarkeit** - VMs können schnell erstellt/angepasst werden
3. **Isolation** - Probleme in einer VM beeinflussen andere nicht

**b) Drei Datenschutz-Aspekte bei Cloud-Migration (3 Punkte):**
1. **Serverstandort** - Daten sollten in der EU bleiben (DSGVO-Konformität)
2. **Auftragsverarbeitungsvertrag (AVV)** - Vertrag mit Cloud-Anbieter nötig
3. **Verschlüsselung** - Daten während Übertragung und Speicherung verschlüsseln

### Aufgabe 3.2 (8 Punkte)

**a) NAS-Erklärung (3 Punkte):**
Ein NAS (Network Attached Storage) ist ein dediziertes Speichergerät mit eigenem Betriebssystem, das über das Netzwerk Speicherplatz bereitstellt. Im Gegensatz zu einem Fileserver ist es speziell für die Dateispeicherung optimiert, einfacher zu administrieren und energieeffizienter.

**b) Drei Maßnahmen für NAS-Verfügbarkeit (3 Punkte):**
1. **Redundante Festplatten** - Spiegelung der Daten auf mehreren Platten
2. **Redundante Netzteile** - Zwei Netzteile für Ausfallsicherheit
3. **Standort-Redundanz** - Replikation auf zweites NAS an anderem Standort

**c) 3-2-1-Backup-Regel (2 Punkte):**
- **3** Kopien der Daten
- **2** verschiedene Speichermedien
- **1** Kopie außerhalb des Standorts (offsite)

Dies schützt vor verschiedenen Ausfallszenarien (Hardware-Defekt, Feuer, Ransomware).

### Aufgabe 3.3 (8 Punkte)

**a) Windows-Domäne und Vorteile (3 Punkte):**
Eine Windows-Domäne ist eine zentrale Verwaltungsstruktur, in der Benutzer, Computer und Ressourcen über einen Domain Controller (Active Directory) verwaltet werden.

Vorteile:
1. **Zentrale Benutzerverwaltung** - Ein Konto für alle Systeme
2. **Zentrale Richtlinienverwaltung** - GPOs gelten für alle PCs

**b) Drei Schritte für Domänenbeitritt (3 Punkte):**
1. Systemeigenschaften öffnen → Computername ändern → Domäne auswählen
2. Domänenname eingeben (z.B. „securelife.local")
3. Mit Domänenadmin-Zugangsdaten authentifizieren und PC neu starten

**c) GPO-Erklärung (2 Punkte):**
Ein Gruppenrichtlinienobjekt (GPO) ist eine Sammlung von Einstellungen, die zentral auf alle Computer und/oder Benutzer der Domäne angewendet werden. Beispiele: Passwort-Richtlinien, Softwareinstallation, Desktop-Einstellungen.

---

## Aufgabe 4: Software und Datenbanken (18 Punkte)

### Aufgabe 4.1 (6 Punkte)

**Drei Scrum-Rollen (6 Punkte):**

| Rolle | Aufgaben |
|-------|----------|
| **Product Owner** | Definiert Anforderungen, priorisiert Product Backlog, vertritt Kundensicht |
| **Scrum Master** | Kümmert sich um Prozesseinhaltung, beseitigt Hindernisse, moderiert Meetings |
| **Development Team** | Setzt die Anforderungen technisch um, selbstorganisiert, cross-funktional |

### Aufgabe 4.2 (6 Punkte)

**a) Schreibtischtests (4 Punkte):**

**Aufruf 1: `berechneBeitrag(55, WAHR, 100)`**

| Schritt | Variable | Wert |
|---------|----------|------|
| 1 | alter | 55 |
| 2 | raucher | WAHR |
| 3 | basisBeitrag | 100 |
| 4 | beitrag | 100 |
| 5 | alter > 50 → WAHR | → |
| 6 | beitrag | 130 (100 × 1.3) |
| 7 | raucher = WAHR → | → |
| 8 | beitrag | 180 (130 + 50) |

**Ergebnis: 180**

**Aufruf 2: `berechneBeitrag(25, FALSCH, 100)`**

| Schritt | Variable | Wert |
|---------|----------|------|
| 1-3 | alter=25, raucher=FALSCH, basisBeitrag=100 | |
| 4 | beitrag | 100 |
| 5 | alter > 50 → FALSCH | → |
| 6 | alter > 30 → FALSCH | → |
| 7 | raucher = FALSCH → | keine Änderung |

**Ergebnis: 100**

**b) Fehlerbehebung (2 Punkte):**

Die erste Bedingung sollte `alter >= 50` lauten statt `alter > 50`:
```
WENN alter >= 50 DANN
```

### Aufgabe 4.3 (6 Punkte)

**a) Normalform (3 Punkte):**
Die Tabellen befinden sich in der **3. Normalform (3NF)**:
- 1NF: Atomare Werte, keine Wiederholungsgruppen ✓
- 2NF: Alle Nicht-Schlüsselattribute voll funktional abhängig vom Primärschlüssel ✓
- 3NF: Keine transitiven Abhängigkeiten ✓

**b) Fremdschlüssel (3 Punkte):**
Ein Fremdschlüssel ist ein Attribut in einer Tabelle, das auf den Primärschlüssel einer anderen Tabelle verweist. Er stellt die referentielle Integrität sicher.

In den Tabellen: **KundenNr** in der Tabelle VERTRAG ist ein Fremdschlüssel, der auf KundenNr (Primärschlüssel) in der Tabelle KUNDE verweist.

---

## Aufgabe 5: Arbeitsplatzeinrichtung und Support (18 Punkte)

### Aufgabe 5.1 (10 Punkte)

**a) Checkliste für Arbeitsplatzeinrichtung (8 Punkte):**

| Nr. | Aufgabe | Erledigt |
|-----|---------|----------|
| 1 | PC/Laptop aufstellen und verkabeln | ☐ |
| 2 | Monitor, Tastatur, Maus anschließen | ☐ |
| 3 | Netzwerkanschluss prüfen (LAN/WLAN) | ☐ |
| 4 | PC in Domäne aufnehmen | ☐ |
| 5 | Benutzerkonto in AD anlegen | ☐ |
| 6 | Gruppenrichtlinien anwenden | ☐ |
| 7 | Standard-Software installieren (Office, Versicherungssoftware) | ☐ |
| 8 | E-Mail-Konto einrichten | ☐ |
| 9 | Drucker einrichten | ☐ |
| 10 | Berechtigungen für Netzwerklaufwerke setzen | ☐ |

**b) Bedeutung für IT-Sicherheit (2 Punkte):**
Eine standardisierte Einrichtung stellt sicher, dass:
- Alle Sicherheitsrichtlinien einheitlich angewendet werden
- Keine Sicherheitslücken durch individuelle Konfigurationen entstehen
- Alle Systeme den gleichen Patch-Stand haben

### Aufgabe 5.2 (8 Punkte)

**a) Priorität (3 Punkte):**
**P2 (Hoch)**

- **Impact:** Mittel (ein Mitarbeiter betroffen)
- **Urgency:** Hoch (wichtiger Termin in 10 Minuten, Mitarbeiter kann nicht arbeiten)

Die hohe Dringlichkeit erhöht die Priorität von P3 auf P2.

**b) Drei gezielte Fragen (3 Punkte):**
1. „Welche Fehlermeldung erscheint beim Anmeldeversuch?"
2. „Haben Sie Ihr Passwort kürzlich geändert oder ist es möglicherweise abgelaufen?"
3. „Funktioniert die Anmeldung an einem anderen PC?"

**c) Zwei Ursachen mit Lösungen (2 Punkte):**

| Ursache | Lösung |
|---------|--------|
| **Passwort abgelaufen** | Passwort zurücksetzen im AD |
| **Konto gesperrt** | Kontosperrung aufheben im AD |

*Weitere: Capslock aktiv, falscher Benutzername, Domänencontroller nicht erreichbar*

---

## Gesamtpunktzahl

| Aufgabe | Punkte |
|---------|--------|
| Aufgabe 1: IT-Sicherheit | 26 |
| Aufgabe 2: Datenschutz | 16 |
| Aufgabe 3: IT-Systeme | 22 |
| Aufgabe 4: Software und Datenbanken | 18 |
| Aufgabe 5: Arbeitsplatzeinrichtung und Support | 18 |
| **Gesamt** | **100** |
