# Debugging

## Objetivos de Aprendizaje

Después de este capítulo deberías:
- Conocer técnicas y herramientas de debugging
- Distinguir los tipos de errores
- Encontrar errores en un código dado (p. ej. un algoritmo de ordenamiento)

---

## Contenido Principal

El **debugging** es la **localización y corrección sistemática de errores (bugs)** en el código.

### Tipos de errores

| Tipo | Descripción |
|-----|--------------|
| **Error de sintaxis** | Infracción de las reglas del lenguaje (detectado por el compilador) |
| **Error de ejecución** | Fallo en tiempo de ejecución (p. ej. división por 0, NullPointer) |
| **Error lógico** | El programa se ejecuta, pero produce resultados **incorrectos** (el más difícil de encontrar) |

### Herramientas y técnicas

- **Breakpoint (Haltepunkt, punto de interrupción):** detener el programa en un punto
- **Paso a paso (Step over/into/out):** ejecutar línea por línea
- **Watch/visualización de variables:** observar valores en tiempo de ejecución
- **Call Stack:** ver la jerarquía de llamadas
- **Logging/salidas:** registrar valores intermedios
- **Prueba de escritorio (Schreibtischtest, recorrido manual del código):** ejecutar el código a mano (véase [06-02-04](../06-02-programmierung/06-02-04-pseudocode-analyse.md))

### Ejemplo: error en un algoritmo de ordenamiento

Bugs típicos en Bubble Sort: **límites de bucle** incorrectos (`< n` en lugar de `< n-1` → error de índice), **dirección de comparación** incorrecta (`<` en lugar de `>`), o falta de una **variable de intercambio**. Con un breakpoint + una tabla de valores se comprueba el flujo paso a paso.

---

## Términos Clave

| Término | Explicación |
|---------|-----------|
| **Breakpoint** | Punto de interrupción para detener el programa |
| **Error lógico** | Resultado incorrecto a pesar de un código ejecutable |
| **Watch** | Observación de valores de variables en tiempo de ejecución |
| **Call Stack** | Cadena de llamadas de los métodos |

---

## Consejos para el Examen

- Distinguir **sintaxis/ejecución/lógica** – los errores lógicos son los más difíciles.
- La **búsqueda de errores en el código** está **recién enfatizada** en el catálogo actualizado.
- Tarea típica: analizar y corregir un algoritmo de ordenamiento defectuoso en Java – usa la prueba de escritorio (Schreibtischtest).

---

## Ejercicio Práctico

**Tarea (según ConSystem GmbH):** Un código Java debe implementar un algoritmo de ordenamiento, pero funciona de forma incorrecta. Encuentra y corrige el error (p. ej. límite de bucle/comparación) y respáldalo con una prueba de escritorio.

---

## Referencias

- [06-02-04 Análisis de pseudocódigo](../06-02-programmierung/06-02-04-pseudocode-analyse.md)
- [02-03 Pruebas de software](../../02-quality-management/02-03-testen.md)
