# Modelos de Desarrollo de Software (Modelos de Proceso)

## Objetivos de Aprendizaje

Después de este capítulo deberías ser capaz de:
- Distinguir los enfoques convencionales (secuenciales) y ágiles
- Clasificar los modelos más importantes y nombrar sus ventajas/desventajas
- Seleccionar modelos adecuados para las situaciones de proyecto

---

## Contenido Principal

### Dos Categorías Básicas

| Convencional (secuencial) | Ágil (flexible) |
|-----------------------------|-----------------|
| Las fases transcurren una tras otra, requisitos fijados pronto | iterativo-incremental, los requisitos evolucionan |
| Modelo en cascada, modelo en V, modelo en espiral | Scrum, Kanban, Extreme Programming (XP), desarrollo guiado por pruebas (TDD) |

Clasificación adicional: los modelos pueden ser más bien un **método de desarrollo** (procedimiento concreto) o una **filosofía de desarrollo** (actitud básica, p. ej. "ágil"). Ejemplos: **RUP** (Rational Unified Process), **AUP** (Agile Unified Process), **MDSD** (desarrollo de software guiado por modelos), **CMM/CMMI** (modelo de madurez).

### Los Modelos Más Importantes

- **Modelo en cascada:** estrictamente secuencial (análisis → diseño → implementación → prueba → operación). Sencillo, pero poco flexible ante cambios tardíos.
- **Modelo en V:** como el modelo en cascada, pero a cada fase de desarrollo le corresponde un **nivel de prueba** (p. ej. prueba unitaria ↔ diseño detallado). Enfatiza el aseguramiento de la calidad.
- **Modelo en espiral:** iterativo con **análisis de riesgos** por ciclo. Bueno para proyectos grandes y de alto riesgo.
- **Prototipado:** prototipos ejecutables tempranos para aclarar los requisitos.
- **Scrum:** marco de trabajo ágil con sprints (véase [01-05](./01-05-scrum-kanban.md)).
- **Extreme Programming (XP):** prácticas ágiles como pair programming, TDD, integración continua.
- **Desarrollo guiado por pruebas (TDD):** primero escribir la prueba, luego el código.
- **Kanban:** control del flujo con límites WIP (véase [01-05](./01-05-scrum-kanban.md)).

### Criterios de Selección

| Situación | más adecuado |
|-----------|---------------|
| Requisitos claros y estables, precio fijo | convencional (cascada/modelo en V) |
| Requisitos poco claros/cambiantes | ágil (Scrum, XP) |
| Alto riesgo, proyectos grandes | modelo en espiral |
| Operación/soporte continuo | Kanban |

---

## Términos Clave

| Término | Explicación |
|---------|-----------|
| **Secuencial** | Las fases transcurren una tras otra, requisitos fijados pronto |
| **Iterativo-incremental** | Ciclos repetidos, ampliación paso a paso |
| **Modelo en V** | Secuencial con niveles de prueba contrapuestos |
| **Modelo de madurez (CMMI)** | Evaluación de la madurez de procesos de una organización |

---

## Consejos para el Examen

- La **tarea de asignación** es típica: clasificar los modelos en *convencional* vs. *ágil* (cascada/modelo en V/espiral = convencional; Scrum/Kanban/XP/TDD = ágil).
- Modelo en V = **contraposición de pruebas** (¡característica!), modelo en espiral = **riesgo por ciclo**.
- Saber nombrar **una ventaja y una desventaja** para cada modelo.

---

## Ejercicio Práctico

**Tarea (según ConSystem GmbH):** Clasifica – *Extreme Programming, modelo en cascada, modelo en V, prototipado, RUP, Scrum, modelo en espiral, AUP, TDD, Kanban, MDSD, CMM* – en convencional vs. ágil.

<details>
<summary>Solución</summary>

- **Convencional/secuencial:** modelo en cascada, modelo en V, modelo en espiral (clásicos)
- **Ágil:** Scrum, Kanban, XP, TDD, AUP
- **Transversal/metodología:** prototipado, RUP, MDSD, CMM (modelo de madurez)

</details>

---

## Referencias

- [01-05 SCRUM y KANBAN](./01-05-scrum-kanban.md)
- [02 Gestión de Calidad](../02-quality-management/02-00-overview.md)
