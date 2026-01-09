# Prüfungssimulation 3: CNC-Fertigung „PräzisionsTech GmbH"

## Prüfungshinweise

- **Bearbeitungszeit:** 90 Minuten
- **Hilfsmittel:** Taschenrechner (nicht programmierbar)
- **Punkte:** 100 Punkte gesamt
- **Bestehensgrenze:** 50 Punkte

---

## Ausgangssituation

Die **PräzisionsTech GmbH** ist ein mittelständischer Betrieb für CNC-Fertigung mit 75 Mitarbeitern am Standort Stuttgart. Das Unternehmen produziert Präzisionsbauteile für die Automobil- und Luftfahrtindustrie.

Sie sind Auszubildender zum Fachinformatiker für Systemintegration in der IT-Abteilung der PräzisionsTech GmbH. Die IT-Abteilung besteht aus 5 Mitarbeitern und ist sowohl für die Büro-IT als auch für die Vernetzung der Produktionsanlagen verantwortlich.

Im Rahmen einer **Industrie 4.0**-Initiative soll die Produktion stärker digitalisiert werden. Geplant sind:
- Vernetzung aller CNC-Maschinen
- Einführung eines Manufacturing Execution Systems (MES)
- Einsatz von KI zur Qualitätskontrolle
- Predictive Maintenance für die Maschinen

Aktuelle IT-Umgebung:
- 15 CNC-Maschinen (teilweise vernetzt)
- ERP-System „ProAlpha"
- 40 Büro-Arbeitsplätze
- Eigenes Rechenzentrum mit 3 Servern
- Getrenntes Produktionsnetzwerk (OT) und Büronetzwerk (IT)

---

## Aufgabe 1: Industrie 4.0 und KI (20 Punkte)

### Aufgabe 1.1 (6 Punkte)

Die Geschäftsführung möchte verstehen, was **Industrie 4.0** für den Betrieb bedeutet.

a) Erklären Sie den Begriff **Industrie 4.0** und nennen Sie **drei** charakteristische Merkmale. (4 Punkte)

b) Nennen Sie **zwei** konkrete Vorteile, die die PräzisionsTech GmbH durch die Digitalisierung der Produktion erwarten kann. (2 Punkte)

### Aufgabe 1.2 (8 Punkte)

Für die Qualitätskontrolle soll ein **KI-System** eingesetzt werden, das Fehler in den produzierten Teilen automatisch erkennt.

a) Erklären Sie, was unter **künstlicher Intelligenz (KI)** im Kontext der industriellen Anwendung zu verstehen ist. (2 Punkte)

b) Nennen Sie **zwei** Anwendungsbereiche von KI in der Fertigung neben der Qualitätskontrolle. (2 Punkte)

c) Der **EU AI Act** klassifiziert KI-Systeme nach Risikokategorien. In welche Risikokategorie würde das geplante Qualitätskontroll-System wahrscheinlich fallen? Begründen Sie Ihre Antwort. (4 Punkte)

### Aufgabe 1.3 (6 Punkte)

Die PräzisionsTech GmbH plant, einen **KI-gestützten Code-Assistenten** für ihre Entwicklungsabteilung einzuführen.

a) Nennen Sie **zwei** Vorteile, die ein KI-Code-Assistent bieten kann. (2 Punkte)

b) Nennen Sie **zwei** Risiken oder Nachteile, die beim Einsatz von KI-Code-Assistenten beachtet werden müssen. (2 Punkte)

c) Warum sollte generierter Code immer von einem Menschen überprüft werden? (2 Punkte)

---

## Aufgabe 2: Netzwerk und IT-Sicherheit (26 Punkte)

### Aufgabe 2.1 (8 Punkte)

Die CNC-Maschinen sollen über ein eigenes Netzwerksegment (OT-Netz) betrieben werden, das vom Büronetzwerk (IT-Netz) getrennt ist.

a) Erklären Sie, warum eine **Trennung von IT- und OT-Netzwerk** sinnvoll ist. Nennen Sie **zwei** Gründe. (4 Punkte)

b) Wie kann trotz der Trennung ein kontrollierter Datenaustausch zwischen den Netzen ermöglicht werden? Nennen Sie **zwei** technische Lösungsansätze. (4 Punkte)

### Aufgabe 2.2 (10 Punkte)

Für das neue Produktionsnetzwerk wird der Bereich **10.10.0.0/16** zugewiesen. Die CNC-Maschinen sollen in einem eigenen Subnetz untergebracht werden.

a) Wie viele Host-Adressen stehen im Bereich 10.10.0.0/16 insgesamt zur Verfügung? Zeigen Sie Ihren Rechenweg. (2 Punkte)

b) Sie möchten ein Subnetz für die 15 CNC-Maschinen erstellen, das möglichst wenig IP-Adressen verschwendet. Welche Subnetzmaske (CIDR-Notation) würden Sie verwenden? Begründen Sie Ihre Wahl. (3 Punkte)

c) Eine CNC-Maschine erhält die IP-Adresse 10.10.5.100/27. Ermitteln Sie: (5 Punkte)
   - Netzadresse: _______
   - Broadcast-Adresse: _______
   - Subnetzmaske in Dezimalschreibweise: _______

### Aufgabe 2.3 (8 Punkte)

Ein Angreifer könnte versuchen, über das Büronetzwerk in das Produktionsnetzwerk einzudringen.

a) Nennen Sie **vier** potenzielle **Bedrohungen** für vernetzte Industrieanlagen. (4 Punkte)

b) Beschreiben Sie **vier** technische Schutzmaßnahmen, die Sie zur Absicherung des Produktionsnetzwerks empfehlen würden. (4 Punkte)

---

## Aufgabe 3: Hardware und Systemtechnik (18 Punkte)

### Aufgabe 3.1 (6 Punkte)

Für das neue MES-System wird ein neuer Server benötigt. Die IT-Leitung möchte zwischen HDD und SSD für das Storage entscheiden.

a) Erklären Sie den technischen Unterschied zwischen **HDD** und **SSD**. (2 Punkte)

b) Nennen Sie jeweils **zwei** Vorteile von HDD und SSD im Kontext eines Servers für ein MES-System. (4 Punkte)

### Aufgabe 3.2 (6 Punkte)

Der Server soll mit einer **USV** (Unterbrechungsfreie Stromversorgung) abgesichert werden.

a) Erklären Sie den Zweck einer USV und nennen Sie **zwei** Situationen, in denen sie wichtig ist. (3 Punkte)

b) Die USV hat eine Kapazität von 1500 VA. Der Server benötigt 800 W. Wie lange kann der Server theoretisch überbrückt werden, wenn die Batteriekapazität 1000 Wh beträgt? Zeigen Sie Ihren Rechenweg. (3 Punkte)

### Aufgabe 3.3 (6 Punkte)

Die CNC-Maschinen kommunizieren über verschiedene industrielle Protokolle.

a) Nennen Sie **zwei** gängige industrielle Kommunikationsprotocols, die in der Produktion eingesetzt werden. (2 Punkte)

b) Erklären Sie, was **OPC UA** ist und welche Vorteile es für Industrie 4.0-Anwendungen bietet. (4 Punkte)

---

## Aufgabe 4: Software und Programmierung (18 Punkte)

### Aufgabe 4.1 (6 Punkte)

Das MES-System soll Produktionsdaten visualisieren. Dazu wird eine Schnittstelle benötigt, die Daten im **JSON-Format** oder **XML-Format** liefert.

a) Erklären Sie den Unterschied zwischen **JSON** und **XML**. Nennen Sie jeweils **einen** Vorteil. (4 Punkte)

b) Gegeben ist folgender XML-Ausschnitt:

```xml
<maschine id="CNC-001">
    <status>aktiv</status>
    <temperatur>45.2</temperatur>
    <stueckzahl>1523</stueckzahl>
</maschine>
```

Überführen Sie diesen Ausschnitt in das **JSON-Format**. (2 Punkte)

### Aufgabe 4.2 (6 Punkte)

Für das ERP-System wird ein **UML-Use-Case-Diagramm** erstellt. Es zeigt die Interaktion eines Mitarbeiters mit dem System.

a) Erklären Sie, was ein **Use-Case-Diagramm** darstellt und welche Elemente es typischerweise enthält. Nennen Sie **drei** Elemente. (3 Punkte)

b) Skizzieren Sie ein einfaches Use-Case-Diagramm mit dem Akteur „Produktionsmitarbeiter" und den Use Cases:
   - Auftrag anzeigen
   - Stückzahl melden
   - Störung dokumentieren

   (3 Punkte)

### Aufgabe 4.3 (6 Punkte)

Die Qualitätssicherung verwendet folgende Logik zur Bewertung eines Werkstücks:

```
FUNKTION pruefeWerkstueck(laenge, durchmesser, sollLaenge, sollDurchmesser, toleranz)
    laengeOK = (laenge >= sollLaenge - toleranz) UND (laenge <= sollLaenge + toleranz)
    durchmesserOK = (durchmesser >= sollDurchmesser - toleranz) UND (durchmesser <= sollDurchmesser + toleranz)

    WENN laengeOK UND durchmesserOK DANN
        RÜCKGABE "IO"     // In Ordnung
    SONST WENN laengeOK ODER durchmesserOK DANN
        RÜCKGABE "NIO-T"  // Nicht in Ordnung, teilweise
    SONST
        RÜCKGABE "NIO"    // Nicht in Ordnung
    ENDE WENN
ENDE FUNKTION
```

Führen Sie einen **Schreibtischtest** für folgende Aufrufe durch und geben Sie das Ergebnis an:

a) `pruefeWerkstueck(100.2, 25.0, 100, 25, 0.5)` (2 Punkte)
b) `pruefeWerkstueck(101.0, 25.3, 100, 25, 0.5)` (2 Punkte)
c) `pruefeWerkstueck(99.3, 24.2, 100, 25, 0.5)` (2 Punkte)

---

## Aufgabe 5: Wirtschaftlichkeit und Projektmanagement (18 Punkte)

### Aufgabe 5.1 (10 Punkte)

Die Geschäftsführung möchte wissen, ob sich die Investition in das neue MES-System wirtschaftlich lohnt.

Investitionsdaten:
- Anschaffungskosten MES-System: 120.000 €
- Jährliche Lizenzkosten: 15.000 €
- Jährliche Wartungskosten: 8.000 €
- Erwartete jährliche Einsparungen: 45.000 €
- Betrachtungszeitraum: 5 Jahre

a) Berechnen Sie die **Gesamtkosten** über den Betrachtungszeitraum. (2 Punkte)

b) Berechnen Sie die **Gesamteinsparungen** über den Betrachtungszeitraum. (1 Punkt)

c) Berechnen Sie den **ROI (Return on Investment)** für die Investition. Verwenden Sie die Formel:
   ROI = (Gewinn / Investition) × 100%
   (3 Punkte)

d) Nach wie vielen Jahren ist die **Amortisation** (Break-Even) erreicht? Zeigen Sie Ihren Rechenweg. (4 Punkte)

### Aufgabe 5.2 (8 Punkte)

Das IT-Team erhält eine Störungsmeldung:

„Die CNC-Maschine Nr. 3 sendet keine Daten mehr an das MES-System. Die Produktion läuft aber normal weiter."

a) Handelt es sich um einen **Incident** oder ein **Problem**? Begründen Sie kurz. (2 Punkte)

b) Welche **Priorität** (P1-P4) würden Sie diesem Incident zuweisen? Begründen Sie anhand von Impact und Urgency. (3 Punkte)

c) Beschreiben Sie **drei** systematische Schritte zur Fehleranalyse, die Sie durchführen würden. (3 Punkte)

---

## Ende der Prüfung

**Kontrollieren Sie Ihre Antworten!**

Hinweis: Die Lösungen zu dieser Simulation finden Sie unter [10-03-03-solution-cnc-industrie40.md](../10-03-solutions/10-03-03-solution-cnc-industrie40.md)
