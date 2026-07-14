# Análisis de Pseudocódigo (Schreibtischtest)

## Objetivos de Aprendizaje

Después de este capítulo deberías poder:
- Leer y seguir pseudocódigo
- Realizar un Schreibtischtest (prueba de escritorio)
- Reconocer estructuras de control

---

## Contenido Principal

### Pseudocódigo

El **pseudocódigo** describe la lógica de un programa de forma **independiente del lenguaje** y legible, sin una sintaxis estricta. Bloques típicos:

- **Asignación:** `preis ← 100`
- **Ramificación:** `WENN bedingung DANN … SONST … ENDEWENN`
- **Bucles:** `SOLANGE bedingung …`, `FÜR i VON 1 BIS n …`
- **Entrada/salida:** `LIES`, `GIB AUS`

### Schreibtischtest (Prueba de Escritorio)

En el **Schreibtischtest** (prueba de escritorio) se ejecuta el código **a mano** con valores de entrada concretos y se registran las variables **paso a paso** en una **tabla de valores** (*Wertetabelle*). Así se comprueba si el código produce las salidas esperadas.

#### Ejemplo: Cálculo de Comisión

```
LIES umsatz
WENN umsatz > 10000 DANN
    provision ← umsatz * 0.05
SONST
    provision ← umsatz * 0.02
ENDEWENN
GIB AUS provision
```

**Tabla de valores** (entrada `umsatz = 20000`):

| Paso | umsatz | Condición | provision |
|------|--------|-----------|-----------|
| LIES | 20000 | – | – |
| WENN | 20000 | 20000 > 10000 → verdadero | – |
| DANN | 20000 | – | 20000·0,05 = **1000** |
| SALIDA | | | 1000 |

→ La salida esperada **1000** es correcta.

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Pseudocódigo** | Descripción de la lógica del programa independiente del lenguaje |
| **Schreibtischtest** (prueba de escritorio) | Ejecución manual del código con una tabla de valores |
| **Wertetabelle** (tabla de valores) | Registro de los valores de las variables en cada paso |
| **Estructura de control** | Ramificación, bucle, secuencia |

---

## Consejos para el Examen

- El **Schreibtischtest** está **recién destacado** en el catálogo actualizado – lleva la tabla de valores con orden.
- En los bucles, registra cada iteración por separado (fuente frecuente de errores: la condición de terminación).
- Tarea: comprobar si el pseudocódigo genera los **datos de salida correctos** (contrastar con las entradas/salidas dadas).

---

## Ejercicio Práctico

**Tarea (según ConSystem GmbH):** Comprueba mediante un Schreibtischtest si un pseudocódigo dado para el cálculo de comisiones produce las salidas correctas para las entradas indicadas.

---

## Referencias

- [06-02-02 Algoritmos de Ordenamiento y Búsqueda](./06-02-02-sortier-suchalgorithmen.md)
- [06-06-01 Depuración (Debugging)](../06-06-qualitaet-ux/06-06-01-debugging.md)
