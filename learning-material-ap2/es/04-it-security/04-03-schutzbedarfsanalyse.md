# Análisis de las Necesidades de Protección

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Leer y completar una Schutzbedarfsfeststellung (determinación de las necesidades de protección)
- Evaluar la necesidad de protección por cada objetivo de protección (Confidencialidad/Integridad/Disponibilidad)
- Conocer las categorías de necesidad de protección y los principios de herencia

---

## Contenido Principal

### Schutzbedarfsfeststellung (determinación de las necesidades de protección)

Para cada sistema/objeto se evalúa la necesidad de protección **con justificación** por cada **objetivo de protección** (Confidencialidad, Integridad, Disponibilidad). Las categorías del BSI:

| Categoría | Significado |
|-----------|-----------|
| **normal** | El impacto de los daños es limitado y controlable |
| **alto** | El impacto de los daños puede ser considerable |
| **muy alto** | El impacto de los daños puede ser una amenaza existencial |

### Ejemplo (PC de un administrativo con CRM)

| Objetivo de protección | Necesidad de protección | Justificación |
|-----------|--------------|------------|
| **Confidencialidad** | alto–muy alto | Los datos de clientes no deben llegar a la competencia/atacantes (elevado daño económico) |
| **Integridad** | alto | Los datos de clientes deben almacenarse sin errores, de lo contrario hay riesgo de daños para el cliente |
| **Disponibilidad** | normal | Una caída puede compensarse durante cierto tiempo |

### Principios de herencia

- **Principio del máximo (Maximumprinzip):** La necesidad de protección de un objeto superior se rige por la necesidad **más alta** de los objetos que dependen de él.
- **Efecto de acumulación (Kumulationseffekt):** Muchos objetos clasificados como "normal" pueden dar como resultado, en conjunto, una necesidad **mayor**.
- **Efecto de distribución (Verteilungseffekt):** La distribución entre varios sistemas puede **reducir** la necesidad del objeto individual.

---

## Términos Clave

| Término | Explicación |
|---------|-----------|
| **Schutzbedarfsfeststellung** | Evaluación de la necesidad de protección por cada objetivo de protección, con justificación |
| **Maximumprinzip** | La necesidad individual más alta determina la necesidad global |
| **Kumulationseffekt** | La suma de muchas necesidades pequeñas aumenta la necesidad global |

---

## Consejos para el Examen

- Indica siempre la necesidad de protección **por cada objetivo de protección** y **con justificación** (no solo "alto").
- Conoce las tres categorías (normal/alto/muy alto) y los tres principios (máximo/acumulación/distribución).
- Tarea típica: completar una tabla con evaluaciones que faltan.

---

## Ejercicio Práctico

**Tarea (según ConSystem GmbH):** Analiza una Schutzbedarfsfeststellung dada y añade dos evaluaciones que faltan (p. ej. confidencialidad en una transmisión por internet sin cifrar → alto; integridad ante errores reconocibles → normal), cada una con justificación.

---

## Referencias

- [04-04 Escenarios de Amenaza](./04-04-bedrohungsszenarien.md)
- [04-01 Aspectos de la Seguridad Informática](./04-01-aspekte-it-sicherheit.md)
