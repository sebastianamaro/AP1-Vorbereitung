# Formatos de intercambio de datos (CSV, XML, JSON)

## Objetivos de Aprendizaje

Después de este capítulo deberías:
- Distinguir y aplicar CSV, XML y JSON
- Distinguir el XML bien formado del válido
- Conocer el propósito de una DTD

---

## Contenido Principal

| Formato | Característica | Anidamiento | Uso |
|--------|---------|-----------------|---------|
| **CSV** | tabla simple, separada por comas | **ninguno** | exportación/importación, Excel, interfaces de BD |
| **XML** | etiquetas autodescriptivas, jerárquico | sí | configuraciones, SOAP, documentos |
| **JSON** | ligero, clave-valor | sí | APIs REST, web/móvil |

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

### Bien formado vs. válido (XML)

- **Bien formado (well-formed):** cumple las reglas de sintaxis de XML (exactamente un elemento raíz, anidamiento correcto, atributos entre comillas, todas las etiquetas cerradas).
- **Válido (valid):** además **conforme a un esquema** (DTD o XML Schema/XSD).

### DTD (Document Type Definition)

Una **DTD** define los **elementos permitidos, su orden y atributos** y permite al parser realizar la **validación**. Puede ser **interna** (en el documento) o **externa** (un archivo propio). Alternativa/más moderna: **XML Schema (XSD)**.

---

## Términos Clave

| Término | Explicación |
|---------|-----------|
| **CSV/XML/JSON** | Tabular / jerárquico / ligero |
| **Bien formado** | Cumple las reglas de sintaxis de XML |
| **Válido** | Además conforme a un esquema (DTD/XSD) |
| **DTD** | Define la estructura permitida para la validación |

---

## Consejos para el Examen

- **CSV no puede anidar** – rasgo distintivo central.
- **Bien formado ≠ válido** (sintaxis vs. conformidad con el esquema) – pregunta frecuente.
- Recuerda la asociación JSON ↔ REST, XML ↔ SOAP.

---

## Ejercicio Práctico

**Tarea:** (1) Representa el mismo registro de datos en CSV, XML y JSON. (2) Explica la diferencia entre XML bien formado y válido.

---

## Referencias

- [06-07-04 REST](../06-07-architektur/06-07-04-rest.md)
- [06-07-05 SOAP](../06-07-architektur/06-07-05-soap.md)
