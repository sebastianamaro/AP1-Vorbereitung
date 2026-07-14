# Datenaustauschformate (CSV, XML, JSON)

## Lernziele

Nach diesem Kapitel solltest du:
- CSV, XML und JSON unterscheiden und einsetzen
- Wohlgeformtes von gültigem XML unterscheiden
- Zweck einer DTD kennen

---

## Kerninhalt

| Format | Merkmal | Verschachtelung | Einsatz |
|--------|---------|-----------------|---------|
| **CSV** | einfache Tabelle, kommagetrennt | **keine** | Export/Import, Excel, DB-Schnittstellen |
| **XML** | selbstbeschreibende Tags, hierarchisch | ja | Konfigs, SOAP, Dokumente |
| **JSON** | leichtgewichtig, Schlüssel-Wert | ja | REST-APIs, Web/Mobile |

```csv
id,name,preis
1,SSD,79.90
```
```xml
<produkt><id>1</id><name>SSD</name><preis>79.90</preis></produkt>
```
```json
{ "id": 1, "name": "SSD", "preis": 79.90 }
```

### Wohlgeformt vs. gültig (XML)

- **Wohlgeformt (well-formed):** hält die XML-Syntaxregeln ein (genau ein Wurzelelement, korrekte Verschachtelung, Attribute in Anführungszeichen, alle Tags geschlossen).
- **Gültig (valid):** zusätzlich **konform zu einem Schema** (DTD oder XML Schema/XSD).

### DTD (Document Type Definition)

Eine **DTD** legt die **erlaubten Elemente, ihre Reihenfolge und Attribute** fest und ermöglicht dem Parser die **Validierung**. Sie kann **intern** (im Dokument) oder **extern** (eigene Datei) sein. Alternative/moderner: **XML Schema (XSD)**.

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **CSV/XML/JSON** | Tabellarisch / hierarchisch / leichtgewichtig |
| **Wohlgeformt** | Erfüllt XML-Syntaxregeln |
| **Gültig** | Zusätzlich schemakonform (DTD/XSD) |
| **DTD** | Definiert erlaubte Struktur zur Validierung |

---

## Prüfungstipps

- **CSV kann nicht verschachteln** – zentrales Unterscheidungsmerkmal.
- **Wohlgeformt ≠ gültig** (Syntax vs. Schemakonformität) – häufige Frage.
- JSON ↔ REST, XML ↔ SOAP als Zuordnung merken.

---

## Übungsaufgabe

**Aufgabe:** (1) Stelle denselben Datensatz in CSV, XML und JSON dar. (2) Erkläre den Unterschied zwischen wohlgeformtem und gültigem XML.

---

## Querverweise

- [06-07-04 REST](../06-07-architektur/06-07-04-rest.md)
- [06-07-05 SOAP](../06-07-architektur/06-07-05-soap.md)
