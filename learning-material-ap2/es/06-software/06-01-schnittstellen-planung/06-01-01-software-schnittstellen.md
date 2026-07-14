# Interfaces de Software

## Objetivos de Aprendizaje

Después de este capítulo deberías:
- Explicar el término API
- Distinguir REST y SOAP
- Clasificar los formatos de datos (JSON, XML)

---

## Contenido Principal

### API

Una **API** (*Application Programming Interface*, interfaz de programación) es una **interfaz definida** a través de la cual los componentes de software se comunican entre sí, sin conocer la implementación interna. Establece qué **funciones/endpoints** pueden invocarse con qué **parámetros** y **valores de retorno**.

### Web APIs: REST vs. SOAP

| | REST | SOAP |
|--|------|------|
| **Tipo** | Estilo arquitectónico | Protocolo |
| **Formato** | mayormente **JSON** (también XML) | **XML** |
| **Transporte** | HTTP(S), usa métodos HTTP (GET/POST/PUT/DELETE) | mayormente HTTP, pero independiente del protocolo |
| **Característica** | ligero, sin estado | estricto, estandarizado (WSDL), extenso |
| **Uso** | APIs web/móviles | Empresarial, contratos formales |

### Formatos de datos

- **JSON** – ligero, fácil de leer, extendido en REST
- **XML** – estructurado, basado en esquemas, usado en SOAP

### Otros términos de interfaces

- **Endpoint (punto de acceso):** la URL/dirección invocable de una web API
- **Código de estado:** p. ej. 200 OK, 404 Not Found, 500 Server Error
- **Autenticación:** p. ej. API key, OAuth/token

---

## Términos Clave

| Término | Explicación |
|---------|-----------|
| **API** | Interfaz de programación definida entre componentes |
| **REST** | Estilo arquitectónico sin estado sobre HTTP, mayormente JSON |
| **SOAP** | Protocolo basado en XML con un contrato estricto (WSDL) |
| **JSON/XML** | Formatos de intercambio de datos |

---

## Consejos para el Examen

- Saber **definir una API** (una interfaz; no es necesario conocer la implementación).
- **REST vs. SOAP**: REST = ligero/JSON/métodos HTTP, SOAP = XML/estricto.
- Conocer los métodos HTTP y los códigos de estado importantes.

---

## Ejercicio Práctico

**Tarea (según ConSystem GmbH):** (1) ¿Qué significa API? (2) Nombra dos aspectos en los que difieren REST y SOAP.

---

## Referencias

- [06-01-02 Planificación de una Aplicación](./06-01-02-planung-anwendung.md)
- [05-03 Interfaces y Ergonomía del Software](../../05-it-systems/05-03-schnittstellen.md)
