# Page 87 - Schlüssel, Normalisierung & Referenzielle Integrität

> **WICHTIG:** m:n Kardinalitäten MÜSSEN durch eine eigene Tabelle (Beziehungstabelle) dargestellt werden. Zu dieser Tabelle werden dann 1:n Beziehungen hergestellt.

### Primärschlüssel (Primary Key, PK)

Ein **Primärschlüssel** ist ein Attribut oder eine Kombination von Attributen einer Entität, welches diese eindeutig identifiziert. Innerhalb einer Tabelle darf kein Primärschlüsselwert mehrfach vorkommen (Eindeutigkeit) und der Primärschlüssel darf nicht NULL sein.

### Fremdschlüssel (Foreign Key, FK)

Ein **Fremdschlüssel** ist ein Attribut oder eine Attributkombination in einer Tabelle, das auf den Primärschlüssel einer anderen (oder derselben) Tabelle verweist. Der Fremdschlüssel stellt damit eine referentielle Integrität zwischen den Tabellen her.

### Normalisierung

Die **Normalisierung** ist ein systematischer Prozess zur Strukturierung von Datenbanken, der Redundanzen vermeidet und Datenanomalien verhindert. Es gibt 3 verschiedene Normalformen (NF).

### Referenzielle Integrität

**Referentielle Integrität** sind Regeln bei Relationalen Datenbanken, die sicherstellen, dass Beziehungen zwischen Tabellen konsistent bleiben. Sie garantiert, dass Fremdschlüssel nur auf wirklich existierende Primärschlüssel verweisen dürfen. Dies wird durch zwei Hauptregeln gewährleistet:

1. Ein Fremdschlüssel muss auf einen existierenden Primärschlüssel verweisen oder NULL sein
2. Ein Primärschlüssel kann nicht gelöscht oder geändert werden, solange noch Fremdschlüssel darauf verweisen

