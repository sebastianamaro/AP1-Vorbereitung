# Analyse des Schutzbedarfes

## Lernziele

Nach diesem Kapitel solltest du:
- Eine Schutzbedarfsfeststellung lesen und ergänzen können
- Schutzbedarf je Schutzziel (Vertraulichkeit/Integrität/Verfügbarkeit) einschätzen
- Die Schutzbedarfskategorien und Vererbungsprinzipien kennen

---

## Kerninhalt

### Schutzbedarfsfeststellung

Für jedes System/Objekt wird je **Schutzziel** (Vertraulichkeit, Integrität, Verfügbarkeit) der Schutzbedarf **mit Begründung** eingeschätzt. Die BSI-Kategorien:

| Kategorie | Bedeutung |
|-----------|-----------|
| **normal** | Schadensauswirkungen begrenzt und überschaubar |
| **hoch** | Schadensauswirkungen können beträchtlich sein |
| **sehr hoch** | Schadensauswirkungen können existenziell bedrohlich sein |

### Beispiel (Sachbearbeiter-PC mit CRM)

| Schutzziel | Schutzbedarf | Begründung |
|-----------|--------------|------------|
| **Vertraulichkeit** | hoch–sehr hoch | Kundendaten dürfen nicht an Konkurrenz/Angreifer gelangen (hoher wirtschaftlicher Schaden) |
| **Integrität** | hoch | Kundendaten müssen fehlerfrei gespeichert sein, sonst drohen Schäden beim Kunden |
| **Verfügbarkeit** | normal | Ausfall kann eine gewisse Zeit kompensiert werden |

### Vererbungsprinzipien

- **Maximumprinzip:** Der Schutzbedarf eines übergeordneten Objekts richtet sich nach dem **höchsten** Bedarf der von ihm abhängigen Objekte.
- **Kumulationseffekt:** Viele Objekte mit „normal“ können zusammen einen **höheren** Bedarf ergeben.
- **Verteilungseffekt:** Verteilung auf mehrere Systeme kann den Bedarf des Einzelobjekts **senken**.

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Schutzbedarfsfeststellung** | Einschätzung des Schutzbedarfs je Schutzziel mit Begründung |
| **Maximumprinzip** | Höchster Einzelbedarf bestimmt den Gesamtbedarf |
| **Kumulationseffekt** | Summe vieler kleiner Bedarfe erhöht den Gesamtbedarf |

---

## Prüfungstipps

- Schutzbedarf immer **je Schutzziel** und **mit Begründung** angeben (nicht nur „hoch“).
- Die drei Kategorien (normal/hoch/sehr hoch) und die drei Prinzipien (Maximum/Kumulation/Verteilung) kennen.
- Typische Aufgabe: eine Tabelle mit fehlenden Einschätzungen ergänzen.

---

## Übungsaufgabe

**Aufgabe (nach ConSystem GmbH):** Analysiere eine gegebene Schutzbedarfsfeststellung und ergänze zwei fehlende Einschätzungen (z. B. Vertraulichkeit bei unverschlüsselter Internet-Übertragung → hoch; Integrität bei erkennbaren Fehlern → normal), jeweils mit Begründung.

---

## Querverweise

- [04-04 Bedrohungsszenarien](./04-04-bedrohungsszenarien.md)
- [04-01 Aspekte der IT-Sicherheit](./04-01-aspekte-it-sicherheit.md)
