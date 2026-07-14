# Software Interfaces

## Learning Objectives

After this chapter you should be able to:
- Explain the term API
- Distinguish REST and SOAP
- Classify data formats (JSON, XML)

---

## Core Content

### API

An **API** (*Application Programming Interface*) is a **defined interface** through which software components communicate with each other – without knowing the internal implementation. It defines which **functions/endpoints** can be called with which **parameters** and **return values**.

### Web APIs: REST vs. SOAP

| | REST | SOAP |
|--|------|------|
| **Kind** | Architectural style | Protocol |
| **Format** | mostly **JSON** (also XML) | **XML** |
| **Transport** | HTTP(S), uses HTTP methods (GET/POST/PUT/DELETE) | mostly HTTP, but protocol-independent |
| **Characteristic** | lightweight, stateless | strict, standardized (WSDL), extensive |
| **Use** | Web/mobile APIs | Enterprise, formal contracts |

### Data formats

- **JSON** – lean, easy to read, common with REST
- **XML** – structured, schema-based, used with SOAP

### Further interface terms

- **Endpoint:** the callable URL/address of a web API
- **Status code:** e.g. 200 OK, 404 Not Found, 500 Server Error
- **Authentication:** e.g. API key, OAuth/token

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **API** | Defined programming interface between components |
| **REST** | Stateless architectural style over HTTP, mostly JSON |
| **SOAP** | XML-based protocol with a strict contract (WSDL) |
| **JSON/XML** | Data exchange formats |

---

## Exam Tips

- Be able to **define an API** (an interface; no knowledge of the implementation needed).
- **REST vs. SOAP**: REST = lightweight/JSON/HTTP methods, SOAP = XML/strict.
- Know the HTTP methods and important status codes.

---

## Practice Exercise

**Task (based on ConSystem GmbH):** (1) What does API mean? (2) Name two aspects in which REST and SOAP differ.

---

## Cross-References

- [06-01-02 Planning an Application](./06-01-02-planung-anwendung.md)
- [05-03 Interfaces & Software Ergonomics](../../05-it-systems/05-03-schnittstellen.md)
