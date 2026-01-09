# Diagrama de Gantt

## Objetivos de Aprendizaje

Después de este capítulo, usted debería ser capaz de:
- Comprender la estructura de un diagrama de Gantt
- Leer e interpretar un diagrama de Gantt
- Reconocer la ruta crítica en un diagrama de Gantt
- Crear diagramas de Gantt simples por sí mismo

---

## Contenido Principal

### ¿Qué es un Diagrama de Gantt?

El **diagrama de Gantt** (también diagrama de barras) es una herramienta para representar gráficamente los cronogramas de proyectos. Muestra las actividades como barras horizontales en una línea de tiempo.

**Nombrado en honor a:** Henry Laurence Gantt (1861-1919), ingeniero estadounidense

---

### Estructura de un Diagrama de Gantt

```
Actividad      | Sem 1  | Sem 2  | Sem 3  | Sem 4  | Sem 5  | Sem 6
---------------|--------|--------|--------|--------|--------|--------
A: Análisis    | ####   |        |        |        |        |
B: Planificación|       | ############    |        |        |
C: Diseño 1    |        | ##########      |        |        |
D: Módulo 1    |        |        |        | ####################
E: Diseño 2    |        |        | ############    |        |
F: Módulo 2    |        |        |        |        | ################
G: Prueba      |        |        | ##################|        |
H: Entrega     |        |        |        |        |        | ######
```

**Elementos:**
- **Eje vertical:** Lista de actividades/paquetes de trabajo
- **Eje horizontal:** Línea de tiempo (días, semanas, meses)
- **Barras:** Duración de las actividades individuales
- **Dependencias:** Líneas de conexión entre barras (opcional)

---

### Ventajas del Diagrama de Gantt

| Ventaja | Explicación |
|---------|-------------|
| **Claridad** | Línea de tiempo visible de un vistazo |
| **Fácil de entender** | No requiere formación especial |
| **Control del progreso** | Posible comparación objetivo-real |
| **Actividades paralelas** | Superposiciones inmediatamente visibles |

### Desventajas del Diagrama de Gantt

| Desventaja | Explicación |
|------------|-------------|
| **Dependencias** | No tan claras como en el diagrama de red |
| **Proyectos complejos** | Se vuelve confuso con muchas actividades |
| **Ruta crítica** | No directamente reconocible (necesita marcado adicional) |

---

### La Ruta Crítica en el Diagrama de Gantt

La **ruta crítica** es la secuencia de actividades que determina la duración total del proyecto. Las actividades en la ruta crítica no tienen **holgura** - cualquier retraso extiende el proyecto.

**Marcado en el diagrama de Gantt:**
- A menudo barras marcadas en rojo
- O rayado especial

```
Actividad      | Sem 1  | Sem 2  | Sem 3  | Sem 4  | Sem 5  | Sem 6
---------------|--------|--------|--------|--------|--------|--------
A: Análisis    | ####   |        |        |        |        |   <- CRÍTICO
B: Planificación|       | ############    |        |        |   <- CRÍTICO
D: Módulo 1    |        |        |        | #################### <- CRÍTICO
F: Módulo 2    |        |        |        |        | ################ <- CRÍTICO
H: Entrega     |        |        |        |        |        | ###### <- CRÍTICO
```

---

### Creación de un Diagrama de Gantt

**Paso 1:** Listar actividades con duración y predecesoras

| Fase | Descripción | Duración | Predecesoras |
|------|-------------|----------|--------------|
| A | Análisis | 1 | - |
| B | Planificación | 4 | A |
| C | Diseño 1 | 3 | A |
| D | Módulo 1 | 6 | C, B |
| E | Diseño 2 | 4 | B |
| F | Módulo 2 | 8 | E, D |
| G | Prueba | 5 | C |
| H | Entrega | 3 | F, G |

**Paso 2:** Dibujar línea de tiempo

**Paso 3:** Dibujar barra para cada actividad
- Inicio: Cuando todas las predecesoras están completadas
- Longitud: Según la duración

**Paso 4:** Marcar la ruta crítica

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Diagrama de Gantt** | Diagrama de barras para mostrar cronogramas de proyectos |
| **Actividad** | Tarea individual/paquete de trabajo en el proyecto |
| **Predecesora** | Actividad que debe completarse antes de que la siguiente pueda comenzar |
| **Ruta Crítica** | Camino más largo a través del proyecto (determina la duración total) |
| **Hito** | Punto en el tiempo marcado (a menudo mostrado como diamante) |

---

## Consejos para el Examen

### ¿Qué se Evalúa?
- Crear diagrama de Gantt a partir de lista de actividades
- Identificar la ruta crítica
- Leer la duración del proyecto
- Reconocer actividades paralelas

### Evite Errores Comunes
- ¡Preste atención a las relaciones de predecesoras!
- Con múltiples predecesoras: Esperar hasta que TODAS estén terminadas
- Dibujar ordenadamente (usar regla)

---

## Ejercicios Prácticos

### Ejercicio 1
Dada la siguiente lista de actividades. Cree un diagrama de Gantt.

| Actividad | Duración (Días) | Predecesoras |
|-----------|-----------------|--------------|
| A | 2 | - |
| B | 3 | A |
| C | 4 | A |
| D | 2 | B, C |

**Solución:**
```
Actividad | Día 1 | Día 2 | Día 3 | Día 4 | Día 5 | Día 6 | Día 7 | Día 8
----------|-------|-------|-------|-------|-------|-------|-------|------
A         | ##########    |       |       |       |       |       |
B         |       | ##############|       |       |       |       |
C         |       | ########################      |       |       |
D         |       |       |       |       |       | ##########    |
```
Duración del proyecto: 8 días
Ruta crítica: A -> C -> D

### Ejercicio 2
¿Cuál es la diferencia entre el diagrama de Gantt y el diagrama de red?

**Solución:**
- Diagrama de Gantt: Representación temporal como barras, bueno para visión general
- Diagrama de red: Muestra dependencias y tiempos de holgura, mejor para cálculos

---

## Referencias Cruzadas

- [01-02-02 Diagrama de Red](./01-02-02-network-plan.md) - Representación alternativa con cálculo de holgura
- [01-01-02 Fases del Proyecto](../01-01-fundamentals/01-01-02-project-phases.md) - Fases como actividades
- [01-03-02 Scrum](../01-03-process-models/01-03-02-scrum.md) - Planificación del Sprint
