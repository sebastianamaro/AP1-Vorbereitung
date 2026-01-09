# Page 111 - Anonymisierung & 11.12 Pseudonymisierung

## Anonymisierung (Fortsetzung)

- Dauerhafter Verlust des Personenbezugs

### Methoden der Anonymisierung

- **Datenaggregation:** Zusammenfassung von Einzelwerten zu Gruppen (z. B. Durchschnittswerte statt individueller Daten).
- **Maskierung:** Ersetzung bestimmter Merkmale (z. B. Namen durch „XXX").
- **Rauschen (Noise Addition):** Zufällige Veränderung der Daten, um Identifikation zu verhindern.
- **Generalization:** Reduzierung der Genauigkeit (z. B. „Alter 25" → „Altersgruppe 20–30").
- **k-Anonymität:** Daten sind nur dann freigegeben, wenn mindestens k Personen dieselben Merkmale teilen.

---

## 11.12 Pseudonymisierung

**Pseudonymisierung** ist ein Datenschutzverfahren, bei dem personenbezogene Daten so verändert werden, dass sie **ohne zusätzliche Informationen** nicht mehr einer bestimmten Person zugeordnet werden können. Die Zuordnung kann jedoch durch Verwendung eines **Schlüssels wiederhergestellt** werden.

### Merkmale

- Der direkte Bezug zur Person wird durch **Ersetzung oder Verschlüsselung** entfernt.
- Die ursprünglichen Daten bleiben erhalten und sind durch einen **separaten Schlüssel rekonstruierbar**.
- Die Daten unterliegen weiterhin der **DSGVO** (Art. 4 Nr. 5 DSGVO), da die Identifikation theoretisch möglich bleibt.

### Methoden der Pseudonymisierung

- **Ersatz durch Kennungen:** Zuweisung zufälliger Identifikatoren (z. B. Kundennummer statt Name).
- **Hashing:** Umwandlung von Daten in einen Hash-Wert (z. B. SHA-256), ohne Rückführungsmöglichkeit.
- **Tokenisierung:** Austausch sensibler Daten durch zufällige Token, die separat gespeichert werden.
