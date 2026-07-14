# Pruebas de Software

## Objetivos de Aprendizaje

Después de este capítulo deberías ser capaz de:
- Explicar el desarrollo guiado por pruebas (TDD)
- Distinguir pruebas de caja negra y de caja blanca
- Clasificar los niveles de prueba más importantes

---

## Contenido Principal

### Desarrollo guiado por pruebas (TDD)

En el **desarrollo guiado por pruebas** se escribe **primero la prueba** y después el código que la satisface. Ciclo:

1. **Red** – escribir una prueba que falle
2. **Green** – escribir el código mínimo hasta que la prueba pase
3. **Refactor** – mejorar el código, las pruebas siguen en verde

Ventajas: alta cobertura de pruebas, requisitos claros, refactorización segura.

### Caja negra vs. caja blanca

| | Prueba de caja negra | Prueba de caja blanca |
|--|----------------|----------------|
| **Perspectiva** | solo el comportamiento (entrada/salida), **sin** conocimiento del código | **con** conocimiento de la estructura interna/del código fuente |
| **Base** | especificación/requisitos | lógica del programa, flujo de control |
| **Ejemplos** | clases de equivalencia, análisis de valores límite | medidas de cobertura (sentencia/rama/camino) |
| **Encuentra** | funciones ausentes/incorrectas | caminos de código no alcanzados, errores de lógica |

*Grey-box* (caja gris) combina ambas perspectivas.

### Niveles de prueba (modelo en V)

- **Prueba de módulo/unitaria** – componente individual
- **Prueba de integración** – interacción de los componentes
- **Prueba de sistema** – sistema completo frente a los requisitos
- **Prueba de aceptación** – por parte del cliente (aceptación)

### Estática vs. dinámica

- **Estática:** sin ejecución (revisión, análisis estático de código)
- **Dinámica:** con ejecución (casos de prueba, ver [Técnicas Dinámicas de Prueba](./02-04-dynamische-testverfahren.md))

---

## Términos Clave

| Término | Explicación |
|---------|-----------|
| **TDD** | Primero la prueba, después el código (Red-Green-Refactor) |
| **Caja negra** | Prueba sin conocimiento del código |
| **Caja blanca** | Prueba con conocimiento de la estructura del código |
| **Prueba de aceptación** | Prueba de aceptación por parte del cliente |

---

## Consejos para el Examen

- **Caja negra vs. caja blanca** es una pregunta comparativa estándar – nombrar la perspectiva, la base y un ejemplo de cada una.
- Clasificar TDD como una práctica **ágil** (ver [Modelos de Proceso](../01-project-management/01-03-vorgehensmodelle.md)).
- Niveles de prueba en el orden correcto (unitaria → integración → sistema → aceptación).

---

## Ejercicio Práctico

**Tarea (según ConSystem GmbH):** Explica a un cliente (1) el desarrollo guiado por pruebas y (2) la diferencia entre pruebas de caja negra y de caja blanca.

---

## Referencias

- [02-04 Técnicas Dinámicas de Prueba](./02-04-dynamische-testverfahren.md)
- [06-05 Depuración](../06-software/06-06-qualitaet-ux/06-06-01-debugging.md)
