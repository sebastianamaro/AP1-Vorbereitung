
---
## Page 213
---


### Prüfungssimulation 3

4b) [20 Punkte]: In der CNC Pro GmbH gehen jetzt monatlich die Rechnungen für die Nutzung der Cloud ein. Sie sollen den Rechnungseingangsprozess in Form einer Ereignisgesteuerten Prozess- kette übersichtlich darstellen. Vervollstandigen Sie den Ausschnitt der EPK, indem Sie Ereignisse, Funktionen, Operatoren und lnformationsobjekte beschriften. Erganzen Sie die Funktion ,,korrigierte Rechnung anfordern" und das Dokument ,,Schreiben an Lieferanten" in die Prozesskette und stellen Sie den lnformationsfluss für diese Elemente durch Pfeile dar.

Der Prozess sieht wie folgt aus:

Nachdem die Lieferantenrechnung eingegangen ist, wird sie geprüft. 1st die Rechnung nicht korrekt, wird der Lieferant (hier der Cloud-Anbieter) angeschrieben und es wird auf eine neue Rechnung ge- wartet. 1st die Rechnung korrekt, wird sie als Verbindlichkeit im Buchhaltungssystem verbucht. Nach Eintritt des Zahlungstermins (externes Ereignis) wird der Zahlungsausgang gebucht. Damit ist die Zahlung der Rechnung abgeschlossen.

Lieferantenrechnung

ist eingegangen

Rechnung prüfen


## .~_____,¿


## ,____~+

Rechnung ist

Rechnung korrekt

nicht korrekt


# ..


**[VISUAL: EPK DIAGRAM - INVOICE PROCESSING (PARTIAL)]**
A partially completed Event-driven Process Chain (EPK) showing invoice processing workflow:
- Start: "Lieferantenrechnung ist eingegangen" (Invoice received)
- Function: "Rechnung prüfen" (Check invoice)
- XOR split with two paths: "Rechnung korrekt" / "Rechnung ist nicht korrekt"
- Students must complete with: booking function, payment function, correction request, supplier letter


**[VISUAL: EPK DIAGRAM ANSWER SPACE]**
Empty area for students to complete the EPK diagram with remaining elements.


# ..


### 211
