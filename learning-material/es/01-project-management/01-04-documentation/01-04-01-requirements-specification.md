# Especificación de Requisitos y Especificación Funcional

## Objetivos de Aprendizaje

Después de este capítulo, usted debería ser capaz de:
- Explicar la diferencia entre especificación de requisitos y especificación funcional
- Saber quién crea cada documento
- Conocer los contenidos típicos de ambos documentos
- Comprender la función de ambos documentos en el ciclo de vida del proyecto

---

## Contenido Principal

### Visión General

```
+--------------------+                    +--------------------+
| ESPECIFICACIÓN DE  |  ------------->    | ESPECIFICACIÓN     |
|    REQUISITOS      |                    |    FUNCIONAL       |
|                    |                    |                    |
|   Cliente          |                    |   Contratista      |
|   (Cliente)        |                    |   (Desarrollador)  |
|                    |                    |                    |
|   ¿QUÉ?            |                    |   ¿CÓMO?           |
+--------------------+                    +--------------------+
```

---

### La Especificación de Requisitos (Documento de Requisitos del Cliente)

#### Definición
La **especificación de requisitos** es un documento del **cliente**. Describe **QUÉ** se debe lograr - desde la perspectiva del cliente.

#### Creador
- Cliente
- O: Colaboración entre cliente y contratista

#### Contenidos Típicos

| Contenido | Descripción |
|-----------|-------------|
| **Situación Inicial** | Descripción de la situación actual |
| **Objetivos** | ¿Qué se debe lograr? |
| **Requisitos** | Requisitos funcionales y no funcionales |
| **Restricciones** | Presupuesto, plazo, especificaciones técnicas |
| **Interfaces** | Conexión con sistemas existentes |
| **Criterios de Aceptación** | ¿Cuándo se considera exitoso el proyecto? |

#### Características
- Describe requisitos desde la **perspectiva del cliente**
- Contiene aspectos **técnicos y no técnicos**
- A menudo es la base de un **contrato de trabajo**
- Usa el **lenguaje empresarial del cliente** (no el del desarrollador)

---

### La Especificación Funcional (Especificación Técnica)

#### Definición
La **especificación funcional** es un documento del **contratista** (desarrollador). Describe **CÓMO** se implementarán los requisitos de la especificación de requisitos.

#### Creador
- Contratista (desarrollador/proveedor de servicios de TI)
- Basada en la especificación de requisitos

#### Contenidos Típicos

| Contenido | Descripción |
|-----------|-------------|
| **Solución Técnica** | ¿Cómo se implementarán los requisitos? |
| **Arquitectura del Sistema** | Estructura del sistema |
| **Especificaciones Detalladas** | Descripciones técnicas precisas |
| **Detalles de Interfaces** | Descripción técnica de interfaces |
| **Casos de Prueba** | ¿Cómo se verificará el cumplimiento? |
| **Plan del Proyecto** | Hitos, cronograma |

#### Características
- Describe la **solución técnica**
- Usa el **lenguaje técnico del desarrollador**
- Más detallada que la especificación de requisitos
- Sirve como **base contractual** para la implementación

---

### Comparación: Especificación de Requisitos vs. Especificación Funcional

| Aspecto | Especificación de Requisitos | Especificación Funcional |
|---------|------------------------------|-------------------------|
| **Creador** | Cliente | Contratista (desarrollador) |
| **Pregunta** | ¿QUÉ? | ¿CÓMO? |
| **Perspectiva** | Vista del cliente | Vista del desarrollador |
| **Lenguaje** | Lenguaje empresarial | Lenguaje técnico |
| **Nivel de Detalle** | Visión general | Detallado |
| **Fase del Proyecto** | Definición del proyecto | Planificación del proyecto |
| **Base para** | Especificación funcional | Implementación |

---

### Interacción en el Proyecto

```
+--------------------------------------------------------------+
|                 CICLO DE VIDA DEL PROYECTO                    |
+--------------------------------------------------------------+
|                                                               |
|  Fase 1              Fase 2              Fase 3               |
|  DEFINICIÓN          PLANIFICACIÓN       EJECUCIÓN            |
|                                                               |
|  +-------------+     +-------------+     +-------------+      |
|  |Especificación| --> |Especificación| --> |Implementación|    |
|  |de Requisitos |     |Funcional    |     |              |    |
|  | (Cliente)    |     | (Desarrollador)|  +-------------+     |
|  +-------------+     +-------------+                          |
|                                                               |
+--------------------------------------------------------------+
```

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Especificación de Requisitos** | Describe QUÉ quiere el cliente (requisitos) |
| **Especificación Funcional** | Describe CÓMO lo implementará el desarrollador (solución) |
| **Cliente** | Quien hace el pedido |
| **Contratista** | Quien ejecuta el pedido (desarrollador) |
| **Requisito** | Característica deseada del producto |
| **Especificación** | Descripción detallada de la implementación técnica |

---

## Consejos para el Examen

### Preguntas Típicas del Examen
1. ¿Quién crea la especificación de requisitos?
2. ¿Quién crea la especificación funcional?
3. ¿Cuál es la diferencia entre ambas?
4. ¿En qué fase del proyecto se crean?

### Ayuda de Memoria
- Especificación de **R**equisitos = **R**ecibida por el desarrollador (del cliente)
- Especificación **F**uncional = **F**ormada por el desarrollador

---

## Ejercicios Prácticos

### Ejercicio 1
Asigne los términos correctamente:
a) Describe la solución técnica
b) Es creada por el cliente
c) Responde a la pregunta "¿QUÉ?"
d) Responde a la pregunta "¿CÓMO?"

**Solución:**
- Especificación de Requisitos: b), c)
- Especificación Funcional: a), d)

### Ejercicio 2
Un cliente quiere un software de gestión de inventario. ¿Qué afirmación pertenece a la especificación de requisitos y cuál a la especificación funcional?

a) "El sistema debe mostrar el nivel de inventario actual."
b) "Los datos se almacenarán en una base de datos MySQL."
c) "La interfaz de usuario debe ser fácil de usar."
d) "Se usará una API REST para la comunicación."

**Solución:**
- Especificación de Requisitos: a), c) - Requisitos desde la perspectiva del cliente
- Especificación Funcional: b), d) - Solución técnica

### Ejercicio 3
¿En qué fase del proyecto se crea la especificación funcional?

**Solución:** En la fase de planificación del proyecto (Fase 2), basada en la especificación de requisitos de la fase de definición.

---

## Referencias Cruzadas

- [01-01-02 Fases del Proyecto](../01-01-fundamentals/01-01-02-project-phases.md) - ¿Cuándo se crean los documentos?
- [01-04-02 Análisis de Necesidades](./01-04-02-needs-analysis.md) - ¿Cómo se determinan los requisitos?
- [08-04-01 Tipos de Contrato](../../08-business-processes/08-04-contract-law/08-04-01-contract-types.md) - Contrato de trabajo
