# Integridad de Datos

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Definir la integridad de datos a través de correctitud, completitud y consistencia
- Explicar el papel de las transacciones (ACID) para la integridad
- Conocer las restricciones de integridad de las bases de datos relacionales

---

## Contenido Principal

### Definición

La **integridad de datos** significa que los datos son **correctos, completos y consistentes** y no se modifican de forma involuntaria.

| Aspecto | Significado |
|---------|-------------|
| **Correctitud** | Los datos reflejan la realidad con exactitud |
| **Completitud** | No falta ningún dato requerido |
| **Consistencia** | Los datos están libres de contradicciones (también entre tablas/sistemas) |

### Transacciones y ACID

En las bases de datos relacionales, las **transacciones** garantizan la integridad. Una transacción es una secuencia de operaciones que se ejecuta **como una unidad**. Cumple las propiedades **ACID**:

| Propiedad | Significado |
|-----------|-------------|
| **Atomicity (Atomicidad)** | Todo o nada – en caso de error, un **rollback** |
| **Consistency (Consistencia)** | Lleva la BD de un estado válido a otro válido |
| **Isolation (Aislamiento)** | Las transacciones paralelas no se afectan entre sí |
| **Durability (Durabilidad)** | Tras el **commit**, los cambios persisten de forma permanente |

### Restricciones de integridad (BD relacional)

- **Integridad de entidad:** cada registro es identificable mediante una **clave primaria** única (no NULL, única).
- **Integridad referencial:** una **clave foránea** siempre referencia a un registro existente (sin referencias "huérfanas").
- **Integridad de dominio:** los valores se mantienen dentro del rango de valores/tipo de dato permitido.

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **ACID** | Atomicity, Consistency, Isolation, Durability |
| **Transacción** | Secuencia de operaciones ejecutada como una unidad (commit/rollback) |
| **Integridad referencial** | Las claves foráneas referencian registros existentes |
| **Clave primaria** | Identificador único y no vacío |

---

## Consejos para el Examen

- Saber **ACID** de memoria – pregunta frecuente de GA2/bases de datos.
- Nombrar correctitud/completitud/consistencia como los tres aspectos de la integridad.
- Explicar la **integridad referencial** mediante claves foráneas (conexión con el modelo ER/SQL, capítulo 06).
- Saber traducir textos técnicos en inglés sobre transacciones (tarea del libro).

---

## Ejercicio Práctico

**Tarea (según ConSystem GmbH):** Define la integridad de datos (correctitud, completitud, consistencia) y explica por qué las transacciones (ACID) son importantes para la integridad de las bases de datos relacionales.

---

## Referencias

- [03-03 Definiciones](../03-data-protection/03-03-begriffsbestimmungen.md)
- [06-04 SQL y Bases de Datos](../06-software/06-03-datenbanken/06-03-01-sql-skript.md)
