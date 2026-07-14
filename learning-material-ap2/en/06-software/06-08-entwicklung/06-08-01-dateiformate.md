# Data Exchange Formats (CSV, XML, JSON)

## Learning Objectives

After this chapter you should:
- Distinguish and apply CSV, XML and JSON
- Distinguish well-formed from valid XML
- Know the purpose of a DTD

---

## Core Content

| Format | Characteristic | Nesting | Use |
|--------|---------|-----------------|---------|
| **CSV** | simple table, comma-separated | **none** | export/import, Excel, DB interfaces |
| **XML** | self-describing tags, hierarchical | yes | configs, SOAP, documents |
| **JSON** | lightweight, key-value | yes | REST APIs, web/mobile |

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

### Well-formed vs. valid (XML)

- **Well-formed:** complies with the XML syntax rules (exactly one root element, correct nesting, attributes in quotes, all tags closed).
- **Valid:** additionally **conformant to a schema** (DTD or XML Schema/XSD).

### DTD (Document Type Definition)

A **DTD** defines the **allowed elements, their order and attributes** and enables the parser to perform **validation**. It can be **internal** (in the document) or **external** (a separate file). Alternative/more modern: **XML Schema (XSD)**.

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **CSV/XML/JSON** | Tabular / hierarchical / lightweight |
| **Well-formed** | Meets XML syntax rules |
| **Valid** | Additionally schema-conformant (DTD/XSD) |
| **DTD** | Defines the allowed structure for validation |

---

## Exam Tips

- **CSV cannot nest** – the key distinguishing feature.
- **Well-formed ≠ valid** (syntax vs. schema conformity) – a frequent question.
- Remember the mapping JSON ↔ REST, XML ↔ SOAP.

---

## Practice Exercise

**Task:** (1) Represent the same data record in CSV, XML and JSON. (2) Explain the difference between well-formed and valid XML.

---

## Cross-References

- [06-07-04 REST](../06-07-architektur/06-07-04-rest.md)
- [06-07-05 SOAP](../06-07-architektur/06-07-05-soap.md)
