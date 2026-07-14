# Software-Schnittstellen

## Lernziele

Nach diesem Kapitel solltest du:
- Den Begriff API erklären
- REST und SOAP unterscheiden
- Datenformate (JSON, XML) einordnen

---

## Kerninhalt

### API

Eine **API** (*Application Programming Interface*, Programmierschnittstelle) ist eine **definierte Schnittstelle**, über die Softwarekomponenten miteinander kommunizieren – ohne die interne Implementierung zu kennen. Sie legt fest, welche **Funktionen/Endpunkte** mit welchen **Parametern** und **Rückgaben** aufgerufen werden können.

### Web-APIs: REST vs. SOAP

| | REST | SOAP |
|--|------|------|
| **Art** | Architekturstil | Protokoll |
| **Format** | meist **JSON** (auch XML) | **XML** |
| **Transport** | HTTP(S), nutzt HTTP-Methoden (GET/POST/PUT/DELETE) | meist HTTP, aber protokollunabhängig |
| **Merkmal** | leichtgewichtig, zustandslos | strikt, standardisiert (WSDL), umfangreich |
| **Einsatz** | Web-/Mobile-APIs | Enterprise, formale Verträge |

### Datenformate

- **JSON** – schlank, gut lesbar, verbreitet bei REST
- **XML** – strukturiert, schema-basiert, bei SOAP

### Weitere Schnittstellenbegriffe

- **Endpunkt (Endpoint):** aufrufbare URL/Adresse einer Web-API
- **Statuscode:** z. B. 200 OK, 404 Not Found, 500 Server Error
- **Authentifizierung:** z. B. API-Key, OAuth/Token

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **API** | Definierte Programmierschnittstelle zwischen Komponenten |
| **REST** | Zustandsloser Architekturstil über HTTP, meist JSON |
| **SOAP** | XML-basiertes Protokoll mit striktem Vertrag (WSDL) |
| **JSON/XML** | Datenaustauschformate |

---

## Prüfungstipps

- **API definieren** können (Schnittstelle, keine Kenntnis der Implementierung nötig).
- **REST vs. SOAP**: REST = leichtgewichtig/JSON/HTTP-Methoden, SOAP = XML/strikt.
- HTTP-Methoden und wichtige Statuscodes kennen.

---

## Übungsaufgabe

**Aufgabe (nach ConSystem GmbH):** (1) Was bedeutet API? (2) Nenne zwei Aspekte, in denen sich REST und SOAP unterscheiden.

---

## Querverweise

- [06-01-02 Planung einer Anwendung](./06-01-02-planung-anwendung.md)
- [05-03 Schnittstellen & Software-Ergonomie](../../05-it-systems/05-03-schnittstellen.md)
