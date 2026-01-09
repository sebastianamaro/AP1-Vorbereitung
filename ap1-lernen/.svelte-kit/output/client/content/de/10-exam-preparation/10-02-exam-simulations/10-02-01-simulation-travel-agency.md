# Prüfungssimulation 1: Reisebüro „SunTravel GmbH"

## Prüfungshinweise

- **Bearbeitungszeit:** 90 Minuten
- **Hilfsmittel:** Taschenrechner (nicht programmierbar)
- **Punkte:** 100 Punkte gesamt
- **Bestehensgrenze:** 50 Punkte

---

## Ausgangssituation

Die **SunTravel GmbH** ist ein mittelständisches Reisebüro mit 45 Mitarbeitern an 3 Standorten (Hauptsitz München, Filialen in Stuttgart und Nürnberg). Das Unternehmen bietet Pauschalreisen, Individualreisen und Geschäftsreisen an.

Sie arbeiten als Auszubildender im IT-Team der SunTravel GmbH am Hauptsitz in München. Das IT-Team besteht aus 4 Personen und ist für die gesamte IT-Infrastruktur aller Standorte verantwortlich.

Die aktuellen Systeme:
- Buchungssoftware „TravelStar" (webbasiert)
- Microsoft 365 für E-Mail und Office-Anwendungen
- VPN-Verbindungen zwischen den Standorten
- 50 Desktop-PCs und 15 Laptops
- Windows 11 als Betriebssystem

---

## Aufgabe 1: Projektmanagement (18 Punkte)

Die Geschäftsführung hat beschlossen, alle Arbeitsplätze auf eine neue Cloud-basierte Buchungssoftware „CloudTravel Pro" umzustellen. Sie werden beauftragt, bei der Projektplanung mitzuwirken.

### Aufgabe 1.1 (4 Punkte)

Nennen Sie **vier** typische Merkmale, die dieses IT-Projekt kennzeichnen.

### Aufgabe 1.2 (6 Punkte)

Formulieren Sie ein Projektziel für die Software-Umstellung nach der **SMART-Methode**. Benennen Sie dabei alle fünf Kriterien und erläutern Sie, wie Ihr Ziel diese erfüllt.

### Aufgabe 1.3 (8 Punkte)

Für das Projekt wurden folgende Arbeitspakete identifiziert:

| Nr. | Arbeitspaket | Dauer (Tage) | Vorgänger |
|-----|--------------|--------------|-----------|
| A | Anforderungsanalyse | 5 | - |
| B | Systemauswahl bestätigen | 3 | A |
| C | Testumgebung einrichten | 4 | B |
| D | Mitarbeiterschulung planen | 2 | B |
| E | Testphase durchführen | 6 | C, D |
| F | Migration vorbereiten | 3 | E |
| G | Go-Live | 2 | F |

a) Erstellen Sie einen **Netzplan** mit Vorgangsknotentechnik (je 3 Punkte).
b) Ermitteln Sie den **kritischen Pfad** und die **Gesamtprojektdauer** (2 Punkte).

---

## Aufgabe 2: IT-Sicherheit und Datenschutz (22 Punkte)

### Aufgabe 2.1 (6 Punkte)

Die neue Cloud-Software „CloudTravel Pro" wird Kundendaten wie Namen, Adressen, Reisedaten und Zahlungsinformationen speichern.

a) Erläutern Sie die drei **Schutzziele der IT-Sicherheit** (CIA-Triade) und geben Sie für jedes Schutzziel ein konkretes Beispiel im Kontext des Reisebüros. (6 Punkte)

### Aufgabe 2.2 (4 Punkte)

Ein Reisebüro-Mitarbeiter fragt Sie, warum er ab sofort eine **Zwei-Faktor-Authentifizierung (2FA)** für die Cloud-Software nutzen muss.

a) Erklären Sie das Prinzip der 2FA. (2 Punkte)
b) Nennen Sie **zwei** verschiedene Faktoren, die bei der 2FA kombiniert werden können. (2 Punkte)

### Aufgabe 2.3 (6 Punkte)

Ein Kunde ruft an und möchte wissen, welche Daten das Reisebüro über ihn gespeichert hat.

a) Auf welches Recht nach der **DSGVO** beruft sich der Kunde? (1 Punkt)
b) Nennen Sie **drei weitere** Rechte, die Betroffene nach der DSGVO haben. (3 Punkte)
c) Erläutern Sie den Unterschied zwischen **Anonymisierung** und **Pseudonymisierung** von Daten. (2 Punkte)

### Aufgabe 2.4 (6 Punkte)

Die IT-Leitung möchte die Sicherheit der Windows-11-Arbeitsplätze verbessern.

Nennen Sie **sechs** konkrete Maßnahmen zur **Betriebssystem-Härtung**, die Sie empfehlen würden.

---

## Aufgabe 3: IT-Systeme und Netzwerk (24 Punkte)

### Aufgabe 3.1 (6 Punkte)

Für die neue Cloud-Software wird eine zuverlässige Internetverbindung benötigt. Der Provider bietet eine Leitung mit 500 Mbit/s an.

a) Ein Mitarbeiter möchte eine 2 GB große Datei hochladen. Berechnen Sie die theoretische **Übertragungszeit** in Sekunden. Zeigen Sie Ihren Rechenweg. (3 Punkte)

b) Erklären Sie, warum die tatsächliche Übertragungszeit in der Praxis länger sein wird. Nennen Sie **zwei** Gründe. (3 Punkte)

### Aufgabe 3.2 (8 Punkte)

Am Standort München soll ein neues Netzwerk eingerichtet werden. Der Netzwerkbereich 192.168.10.0/24 steht zur Verfügung.

a) Wie viele **nutzbare Host-Adressen** stehen in diesem Netzwerk zur Verfügung? Zeigen Sie Ihren Rechenweg. (2 Punkte)

b) Die IT-Leitung möchte das Netzwerk in **4 Subnetze** aufteilen. Welche Subnetzmaske müssen Sie verwenden? Geben Sie diese in CIDR-Notation an. (2 Punkte)

c) Tragen Sie für das **erste Subnetz** die folgenden Werte ein: (4 Punkte)
   - Netzadresse: _______
   - Erste nutzbare Host-Adresse: _______
   - Letzte nutzbare Host-Adresse: _______
   - Broadcast-Adresse: _______

### Aufgabe 3.3 (6 Punkte)

Ein Mitarbeiter im Außendienst kann sich per VPN nicht mit dem Firmennetzwerk verbinden.

a) Erläutern Sie, was ein **VPN** ist und welchen Zweck es erfüllt. (2 Punkte)

b) Beschreiben Sie **vier** systematische Schritte zur Fehlersuche, die Sie durchführen würden. (4 Punkte)

### Aufgabe 3.4 (4 Punkte)

Die SunTravel GmbH überlegt, ob sie die neue Software als **SaaS** (Software as a Service) oder **IaaS** (Infrastructure as a Service) betreiben soll.

Erklären Sie beide Begriffe und nennen Sie jeweils **einen** Vor- und **einen** Nachteil für das Reisebüro.

---

## Aufgabe 4: Software und Programmierung (20 Punkte)

### Aufgabe 4.1 (6 Punkte)

Das Reisebüro möchte eine einfache Funktion zur Berechnung von Reiserabatten implementieren. Die Logik soll sein:
- Buchungen über 2.000 € erhalten 5% Rabatt
- Buchungen über 5.000 € erhalten 10% Rabatt
- Stammkunden (mehr als 3 Buchungen) erhalten zusätzlich 3% Rabatt

Erstellen Sie ein **UML-Aktivitätsdiagramm**, das diese Rabattberechnung darstellt.

### Aufgabe 4.2 (8 Punkte)

Gegeben ist folgender Pseudocode zur Berechnung eines Reisepreises:

```
FUNKTION berechneEndpreis(grundpreis, anzahlPersonen, fruehbucher)
    preis = grundpreis * anzahlPersonen

    WENN fruehbucher = WAHR DANN
        rabatt = preis * 0.15
        preis = preis - rabatt
    ENDE WENN

    WENN anzahlPersonen > 4 DANN
        gruppenrabatt = preis * 0.1
        preis = preis - gruppenrabatt
    ENDE WENN

    RÜCKGABE preis
ENDE FUNKTION
```

a) Führen Sie einen **Schreibtischtest** für folgenden Aufruf durch: (6 Punkte)
   `berechneEndpreis(500, 5, WAHR)`

   Dokumentieren Sie jeden Schritt mit den aktuellen Variablenwerten.

b) Was ist das **Ergebnis** des Funktionsaufrufs? (2 Punkte)

### Aufgabe 4.3 (6 Punkte)

Die SunTravel GmbH nutzt eine relationale Datenbank für ihre Kundendaten.

Gegeben ist folgendes vereinfachtes ER-Diagramm:

```
[KUNDE] 1 ──────── n [BUCHUNG] n ──────── m [REISE]
   │                     │                    │
   ├─ KundenNr (PK)     ├─ BuchungsNr (PK)   ├─ ReiseNr (PK)
   ├─ Name              ├─ KundenNr (FK)     ├─ Ziel
   ├─ Email             ├─ Datum             ├─ Preis
   └─ Telefon           └─ Gesamtpreis       └─ Dauer
```

a) Erklären Sie die Bedeutung der Kardinalitäten **1:n** und **n:m** im Kontext dieses Diagramms. (4 Punkte)

b) Erklären Sie, was **Redundanz** in einer Datenbank bedeutet und warum sie vermieden werden sollte. (2 Punkte)

---

## Aufgabe 5: Wirtschaftlichkeit und Service (16 Punkte)

### Aufgabe 5.1 (8 Punkte)

Für die neue Cloud-Software müssen zwei Anbieter verglichen werden. Sie sollen eine **Nutzwertanalyse** durchführen.

| Kriterium | Gewichtung | Anbieter A (Punkte 1-5) | Anbieter B (Punkte 1-5) |
|-----------|------------|-------------------------|-------------------------|
| Funktionsumfang | 30% | 4 | 5 |
| Benutzerfreundlichkeit | 25% | 5 | 3 |
| Support-Qualität | 20% | 3 | 4 |
| Preis | 15% | 4 | 3 |
| Datenschutz (DSGVO) | 10% | 5 | 5 |

a) Führen Sie die Nutzwertanalyse durch und ermitteln Sie den **Gesamtnutzwert** für beide Anbieter. (6 Punkte)

b) Welchen Anbieter würden Sie empfehlen und warum? Nennen Sie **einen** weiteren Aspekt, der bei der Entscheidung berücksichtigt werden sollte. (2 Punkte)

### Aufgabe 5.2 (8 Punkte)

Nach der Einführung der neuen Software meldet ein Mitarbeiter: „Das Programm ist extrem langsam und ich kann nicht richtig arbeiten!"

a) Handelt es sich um einen **Incident** oder einen **Service Request**? Begründen Sie Ihre Antwort. (2 Punkte)

b) Analysieren Sie die Aussage des Mitarbeiters nach dem **Vier-Ohren-Modell** von Schulz von Thun. Was könnte er auf den vier Ebenen meinen? (4 Punkte)

c) Formulieren Sie eine **deeskalierende Antwort** auf die Beschwerde des Mitarbeiters. (2 Punkte)

---

## Ende der Prüfung

**Kontrollieren Sie Ihre Antworten!**

Hinweis: Die Lösungen zu dieser Simulation finden Sie unter [10-03-01-solution-reisebuero.md](../10-03-solutions/10-03-01-solution-reisebuero.md)
