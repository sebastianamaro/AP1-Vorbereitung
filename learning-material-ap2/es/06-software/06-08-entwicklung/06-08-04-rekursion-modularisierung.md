# Recursión, iteración y modularización

## Objetivos de Aprendizaje

Después de este capítulo deberías:
- Distinguir recursión e iteración
- Sopesar ventajas y desventajas
- Explicar la modularización y su beneficio

---

## Contenido Principal

### Recursión vs. iteración

- **Recursión:** una función se llama a **sí misma** hasta que se cumple una **condición de parada**.
- **Iteración:** repetición mediante un **bucle**.

```text
Rekursiv:   fakultaet(n) = n * fakultaet(n-1),  fakultaet(0) = 1
Iterativ:   ergebnis = 1;  für i von 1 bis n:  ergebnis = ergebnis * i
```

| | Recursión | Iteración |
|--|-----------|-----------|
| Legibilidad | elegante en problemas de tipo árbol | a menudo más simple |
| Memoria | pila de llamadas (riesgo de stack overflow) | constante |
| Velocidad | sobrecarga por las llamadas | en general más rápida |

> Importante: una **condición de parada** es obligatoria, de lo contrario se produce recursión infinita → **Stack Overflow**.

### Modularización

La **modularización** divide el software en **módulos independientes y lógicamente relacionados** (funciones, clases, componentes, microservicios).

Ventajas: **reutilización**, **mantenimiento/búsqueda de errores** más fácil, **capacidad de prueba**, desarrollo en paralelo, menor acoplamiento.

---

## Términos Clave

| Término | Explicación |
|---------|-----------|
| **Recursión** | Autollamada con una condición de parada |
| **Iteración** | Repetición mediante un bucle |
| **Modularización** | División en módulos independientes |
| **Acoplamiento/Cohesión** | Dependencia entre / cohesión dentro de los módulos |

---

## Consejos para el Examen

- La recursión siempre necesita una **condición de parada** (de lo contrario, stack overflow).
- Sopesar recursión vs. iteración por **memoria/velocidad** (el factorial como ejemplo estándar).
- Modularización: buscar **bajo acoplamiento, alta cohesión**.

---

## Ejercicio Práctico

**Tarea:** Escribe el factorial de forma recursiva e iterativa (pseudocódigo) y nombra una ventaja y una desventaja de la recursión.

---

## Referencias

- [06-02-02 Algoritmos de ordenamiento y búsqueda](../06-02-programmierung/06-02-02-sortier-suchalgorithmen.md)
- [06-04-05 Diagrama de paquetes](../06-04-uml/06-04-05-paketdiagramm.md)
