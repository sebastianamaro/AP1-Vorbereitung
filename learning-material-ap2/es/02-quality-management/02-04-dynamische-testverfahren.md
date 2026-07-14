# Técnicas Dinámicas de Prueba (Medidas de Cobertura)

## Objetivos de Aprendizaje

Después de este capítulo deberías ser capaz de:
- Explicar y distinguir la cobertura de sentencias, de ramas y de caminos
- Asignar estas técnicas a la prueba de caja blanca
- Determinar los grados de cobertura en código sencillo

---

## Contenido Principal

El **análisis del código fuente** es parte de la **prueba de caja blanca**. Las medidas de cobertura orientadas al flujo de control miden con qué exhaustividad se recorre el código mediante los casos de prueba:

### Cobertura de sentencias (C0, Statement Coverage)

- Objetivo: ejecutar **cada sentencia** al menos una vez.
- La medida más débil – no alcanza necesariamente ambas ramas de una bifurcación.

### Cobertura de ramas (C1, Branch/Decision Coverage)

- Objetivo: **cada rama** de cada bifurcación al menos una vez (es decir, `if` **verdadero** *y* **falso**).
- Más fuerte que C0; C1 incluye a C0.

### Cobertura de caminos (C2, Path Coverage)

- Objetivo: **cada camino posible** a través del programa.
- La medida más fuerte, pero con bucles se vuelve rápidamente **prácticamente inalcanzable** por completo (explosión de caminos).

```
Jerarquía de exhaustividad:  Sentencia (C0)  ⊂  Rama (C1)  ⊂  Camino (C2)
```

### Ejemplo

```
if (a > 0):        # una bifurcación
    x = 1
# (sin else)
```
- **Cobertura de sentencias:** basta una prueba con `a > 0` (todas las sentencias ejecutadas).
- **Cobertura de ramas:** se necesita además una prueba con `a <= 0` (la rama "falso").

---

## Términos Clave

| Término | Explicación |
|---------|-----------|
| **Cobertura de sentencias (C0)** | Ejecutar cada sentencia al menos una vez |
| **Cobertura de ramas (C1)** | Cada rama (verdadero/falso) al menos una vez |
| **Cobertura de caminos (C2)** | Cada camino del programa; a menudo no alcanzable por completo |

---

## Consejos para el Examen

- Recordar el **orden de exhaustividad**: C0 ⊂ C1 ⊂ C2.
- Tarea típica: dado un código, indicar los **casos de prueba** que logran una cobertura determinada.
- Estas técnicas pertenecen a la **prueba de caja blanca** (se requiere conocimiento del código).

---

## Ejercicio Práctico

**Tarea (según ConSystem GmbH):** Describe de forma esquemática la cobertura de sentencias, de ramas y de caminos, e indica, para un ejemplo `if/else`, los casos de prueba para una cobertura de ramas completa.

---

## Referencias

- [02-03 Pruebas de Software](./02-03-testen.md)
- [06-02 Análisis de Pseudocódigo](../06-software/06-02-programmierung/06-02-04-pseudocode-analyse.md)
