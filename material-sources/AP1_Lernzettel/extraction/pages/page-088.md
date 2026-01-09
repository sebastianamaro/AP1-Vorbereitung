# Page 88 - Anomalien, Redundanz & 8.12 ERD Chen-Notation

## Anomalien

### Einfügeanomalie

Tritt auf, wenn neue Daten nicht eingefügt werden können, weil notwendige Informationen fehlen oder Abhängigkeiten dies verhindern.

### Änderungsanomalie

Wenn eine Information an mehreren Stellen gespeichert ist und nicht überall konsistent geändert wird, entstehen widersprüchliche Daten.

### Löschanomalie

Beim Löschen eines Datensatzes gehen unbeabsichtigt auch andere, noch benötigte Informationen verloren.

### Datenredundanz

**Datenredundanz** heißt, wenn identische Daten mehrfach in einer Datenbank gespeichert werden.

### Datenkonsistenz

**Datenkonsistenz** heißt, dass die Daten korrekt, widerspruchsfrei und vollständig sind.

---

## 8.12 ERD Chen-Notation

### Symbole

| Symbol | Name | Bedeutung |
|--------|------|-----------|
| Rechteck | Entität | Ein konkretes oder abstraktes Objekt (z.B. Kunde, Produkt) |
| Doppeltes Rechteck | Schwache Entität | Abhängige Entität, die ohne Hauptentität nicht existieren kann |
| Raute im Rechteck | Verbindungsentität | Entität zur Auflösung einer N:M Beziehung |

