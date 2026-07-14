# Diseño de Casos de Prueba y Tipos de Prueba

## Objetivos de Aprendizaje

Después de este capítulo deberías ser capaz de:
- Aplicar clases de equivalencia y análisis de valores límite
- Conocer el principio FIRST para pruebas unitarias
- Clasificar pruebas de carga/rendimiento y TDD

---

## Contenido Principal

### Partición en clases de equivalencia

El espacio de entrada se divide en **clases con el mismo comportamiento**; basta **un** caso de prueba por clase (clases válidas e inválidas).

*Ejemplo:* edad 18–67 válida → clases: **<18** (inválida), **18–67** (válida), **>67** (inválida).

### Análisis de valores límite

Los errores suelen aparecer en los **bordes** → probar **en y alrededor de los límites**. Para 18–67: **17, 18, 19** y **66, 67, 68**.

### Principio FIRST (buenas pruebas unitarias)

| Letra | Significado |
|-----------|-----------|
| **F**ast | rápida de ejecutar |
| **I**solated | independiente de otras pruebas |
| **R**epeatable | reproducible (mismo resultado) |
| **S**elf-validating | entrega un pass/fail claro |
| **T**imely | oportuna (idealmente antes del código, TDD) |

### Otros tipos de prueba

- **TDD** – primero la prueba, después el código (**Red → Green → Refactor**), ver [02-03](./02-03-testen.md)
- **Prueba de carga/rendimiento** – comportamiento bajo alta carga / tiempos de respuesta, escalabilidad *(nueva en el catálogo)*
- **Prueba de regresión** – tras cambios, asegurar que lo existente sigue funcionando

---

## Términos Clave

| Término | Explicación |
|---------|-----------|
| **Clase de equivalencia** | Grupo de entradas con el mismo comportamiento |
| **Análisis de valores límite** | Prueba en/alrededor de los valores límite |
| **FIRST** | Fast, Isolated, Repeatable, Self-validating, Timely |
| **Prueba de carga** | Comportamiento bajo alta carga |

---

## Consejos para el Examen

- **Clases de equivalencia + valores límite** es un diseño de casos de prueba frecuente – indicar clases válidas *e* inválidas, probar también los límites.
- Conocer **FIRST** para pruebas unitarias.
- Las pruebas de carga/rendimiento son **nuevas** en el catálogo – nombrar el propósito (carga/tiempo de respuesta/escalado).

---

## Ejercicio Práctico

**Tarea:** Para un campo de entrada "Cantidad 1–100": forma las clases de equivalencia y nombra los casos de prueba de valores límite.

<details>
<summary>Solución</summary>

Clases: <1 (inválida), 1–100 (válida), >100 (inválida). Valores límite: 0, 1, 2 y 99, 100, 101.

</details>

---

## Referencias

- [02-03 Pruebas de Software](./02-03-testen.md)
- [02-04 Técnicas Dinámicas de Prueba](./02-04-dynamische-testverfahren.md)
