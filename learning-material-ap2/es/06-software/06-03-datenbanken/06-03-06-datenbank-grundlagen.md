# Fundamentos de Bases de Datos

## Objetivos de Aprendizaje

Después de este capítulo deberías poder:
- Clasificar los DBMS, las bases de datos relacionales y NoSQL
- Explicar CRUD, NULL y la atomicidad
- Conocer las anomalías, los índices y ODBC

---

## Contenido Principal

### DBMS y Modelos de Bases de Datos

Un **DBMS** (sistema de gestión de bases de datos) administra los datos de forma centralizada (acceso, integridad, multiusuario, transacciones).

| Modelo | Característica | Ejemplos |
|--------|---------------|----------|
| **Relacional (SQL)** | tablas con relaciones, esquema | MySQL, PostgreSQL |
| **NoSQL** | flexible/sin esquema (documento, clave-valor, grafo) | MongoDB, Redis |

### CRUD

Las cuatro operaciones básicas: **C**reate (INSERT), **R**ead (SELECT), **U**pdate (UPDATE), **D**elete (DELETE).

### NULL y Atomicidad

- **NULL** = *ningún valor presente* (no es 0, ni una cadena vacía).
- **Valor atómico** = indivisible, exactamente **un** valor por atributo (base de la 1ª forma normal).

### Anomalías y Redundancia

Las tablas mal estructuradas provocan **redundancia** (almacenamiento múltiple) y **anomalías**:
- **Anomalía de inserción** – un registro nuevo solo es posible junto con datos adicionales innecesarios
- **Anomalía de modificación** – un valor debe cambiarse en muchos lugares
- **Anomalía de eliminación** – al eliminar se borran por accidente datos aún necesarios

→ Remedio: **normalización** (ver [06-03-03](./06-03-03-normalisierung.md)).

### Índices

Un **índice** acelera los accesos de lectura/búsqueda (como un índice de palabras clave), pero **ralentiza** las operaciones de escritura (el índice debe mantenerse también) y requiere almacenamiento. Las claves primarias se indexan automáticamente.

### Conexión a Bases de Datos: ODBC

**ODBC** (Open Database Connectivity) es una **interfaz estandarizada** a través de la cual las aplicaciones acceden a las bases de datos con independencia del DBMS concreto (un controlador por DBMS). El equivalente en Java: **JDBC**.

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **DBMS** | Sistema de gestión de bases de datos |
| **CRUD** | Create, Read, Update, Delete |
| **NULL** | Ningún valor presente |
| **Índice** | Acelera la lectura, ralentiza la escritura |
| **ODBC/JDBC** | Interfaz estandarizada de acceso a BD |

---

## Consejos para el Examen

- **NULL ≠ 0/vacío** – una pregunta trampa frecuente.
- **Compromiso del índice:** lectura rápida ↔ escritura más lenta.
- Saber nombrar las **anomalías** (de inserción/modificación/eliminación) como motivación de la normalización.
- **ODBC** = acceso a BD independiente del fabricante (nuevo en el catálogo).

---

## Ejercicio Práctico

**Tarea:** (1) Explica las tres anomalías con una tabla de ejemplo. (2) ¿Cuándo merece la pena un índice y cuándo perjudica?

---

## Referencias

- [06-03-03 Normalización](./06-03-03-normalisierung.md)
- [04-06 Integridad de Datos (ACID)](../../04-it-security/04-06-datenintegritaet.md)
