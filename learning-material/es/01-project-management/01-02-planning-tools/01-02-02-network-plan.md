# Técnica del Diagrama de Red

## Objetivos de Aprendizaje

Después de este capítulo, usted debería ser capaz de:
- Comprender la estructura de un diagrama de red
- Calcular ES, EF, LS, LF
- Calcular holgura total y holgura libre
- Determinar la ruta crítica

---

## Contenido Principal

### ¿Qué es un Diagrama de Red?

El **diagrama de red** es un método gráfico para representar cronogramas de proyectos y sus dependencias temporales. Permite el cálculo de tiempos de holgura y la identificación de la ruta crítica.

> **IMPORTANTE para el examen:** ¡La técnica del diagrama de red es uno de los temas más frecuentemente evaluados!

---

### Estructura de un Nodo de Actividad

```
+----------------------------------+
|   ES                       EF    |
| +------------+----------------+  |
| | Actividad  |  Descripción   |  |
| +------------+------+---------+  |
| |  Duración  |  HT  |   HL    |  |
| +------------+------+---------+  |
|   LS                       LF    |
+----------------------------------+
```

---

### Términos y Abreviaturas

| Abrev. | Término | Explicación |
|--------|---------|-------------|
| **ES** | Inicio Temprano | Tiempo de inicio más temprano posible |
| **EF** | Fin Temprano | Tiempo de finalización más temprano posible |
| **LS** | Inicio Tardío | Tiempo de inicio más tardío sin retrasar el proyecto |
| **LF** | Fin Tardío | Tiempo de finalización más tardío sin retrasar el proyecto |
| **HT** | Holgura Total | Reserva de tiempo sin retrasar el proyecto |
| **HL** | Holgura Libre | Reserva de tiempo sin afectar al sucesor |
| **Duración** | Duración de la Actividad | Tiempo para la actividad en unidades de tiempo |

---

### Fórmulas de Cálculo

#### Paso Hacia Adelante (ES y EF)

**Inicio:** ES de la primera actividad = 0 (o 1, según la convención)

```
EF = ES + Duración
ES (Sucesor) = máx(EF de todas las predecesoras)
```

#### Paso Hacia Atrás (LS y LF)

**Inicio:** LF de la última actividad = EF de la última actividad

```
LS = LF - Duración
LF (Predecesora) = mín(LS de todos los sucesores)
```

#### Cálculo de Holgura

```
Holgura Total (HT) = LS - ES = LF - EF
Holgura Libre (HL) = ES (Sucesor) - EF (actividad actual)
```

---

### La Ruta Crítica

La **ruta crítica** es el camino más largo a través del diagrama de red. Determina la **duración mínima del proyecto**.

**Propiedades:**
- Las actividades en la ruta crítica tienen **HT = 0**
- Cualquier retraso en la ruta crítica retrasa todo el proyecto
- Puede haber múltiples rutas críticas

---

### Ejemplo de Cálculo

**Lista de Actividades:**

| Actividad | Duración | Predecesoras |
|-----------|----------|--------------|
| A | 3 | - |
| B | 4 | A |
| C | 2 | A |
| D | 5 | B, C |

**Paso 1: Paso Hacia Adelante**

```
Actividad A: ES=0, EF=0+3=3
Actividad B: ES=3, EF=3+4=7
Actividad C: ES=3, EF=3+2=5
Actividad D: ES=máx(7,5)=7, EF=7+5=12
```

**Duración del Proyecto: 12 unidades de tiempo**

**Paso 2: Paso Hacia Atrás**

```
Actividad D: LF=12, LS=12-5=7
Actividad B: LF=7, LS=7-4=3
Actividad C: LF=7, LS=7-2=5
Actividad A: LF=mín(3,5)=3, LS=3-3=0
```

**Paso 3: Cálculo de Holgura**

| Actividad | HT (LS-ES) | ¿Crítica? |
|-----------|------------|-----------|
| A | 0-0=0 | SÍ |
| B | 3-3=0 | SÍ |
| C | 5-3=2 | NO |
| D | 7-7=0 | SÍ |

**Ruta Crítica: A -> B -> D**

---

### Representación Gráfica

```
        +------------------+
        |  0          3    |
        | +----+---------+ |
        | | A  | Análisis| |
        | +----+----+----+ |
        | | 3  | 0  | 0  | |
        | +----+----+----+ |
        |  0          3    |
        +---------+--------+
                  |
         +--------+--------+
         v                 v
+------------------+  +------------------+
|  3          7    |  |  3          5    |
| +----+---------+ |  | +----+---------+ |
| | B  | Planif. | |  | | C  | Diseño  | |
| +----+----+----+ |  | +----+----+----+ |
| | 4  | 0  | 0  | |  | | 2  | 2  | 2  | |
| +----+----+----+ |  | +----+----+----+ |
|  3          7    |  |  5          7    |
+---------+--------+  +---------+--------+
          |                     |
          +---------+-----------+
                    v
        +------------------+
        |  7         12    |
        | +----+---------+ |
        | | D  | Módulo  | |
        | +----+----+----+ |
        | | 5  | 0  | 0  | |
        | +----+----+----+ |
        |  7         12    |
        +------------------+
```

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Diagrama de Red** | Representación gráfica de cronogramas de proyectos con dependencias |
| **Ruta Crítica** | Camino más largo a través del proyecto, determina la duración mínima |
| **Holgura** | Reserva de tiempo por la cual una actividad puede retrasarse |
| **Paso Hacia Adelante** | Cálculo de ES y EF desde el inicio hasta el fin |
| **Paso Hacia Atrás** | Cálculo de LS y LF desde el fin hasta el inicio |

---

## Consejos para el Examen

### Tipos de Tareas Típicas
1. Calcular ES, EF, LS, LF
2. Calcular holgura total
3. Determinar la ruta crítica
4. Determinar la duración del proyecto
5. Dibujar diagrama de red

### Evite Errores Comunes
- Con múltiples predecesoras: Tomar el **máximo** para ES
- Con múltiples sucesores: Tomar el **mínimo** para LF
- HT = 0 significa: ¡La actividad es crítica!
- Siempre documentar los pasos de cálculo

---

## Ejercicios Prácticos

### Ejercicio 1
Calcule ES, EF, LS, LF y HT para todas las actividades:

| Actividad | Duración | Predecesoras |
|-----------|----------|--------------|
| A | 2 | - |
| B | 3 | A |
| C | 4 | A |
| D | 1 | B, C |

**Solución:**

| Actividad | ES | EF | LS | LF | HT |
|-----------|-----|-----|-----|-----|-----|
| A | 0 | 2 | 0 | 2 | 0 |
| B | 2 | 5 | 3 | 6 | 1 |
| C | 2 | 6 | 2 | 6 | 0 |
| D | 6 | 7 | 6 | 7 | 0 |

Ruta Crítica: A -> C -> D
Duración del Proyecto: 7 unidades de tiempo

### Ejercicio 2
¿Qué significa una holgura total de 0?

**Solución:** La actividad está en la ruta crítica. Cualquier retraso de esta actividad retrasa todo el proyecto.

---

## Referencias Cruzadas

- [01-02-01 Diagrama de Gantt](./01-02-01-gantt-chart.md) - Representación temporal
- [01-01-02 Fases del Proyecto](../01-01-fundamentals/01-01-02-project-phases.md) - Planificación del proyecto
- [08-02-03 Análisis de Utilidad](../../08-business-processes/08-02-economics/08-02-03-utility-analysis.md) - Otro tema frecuente del examen
