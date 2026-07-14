# Netzplan (diagrama de red) y Diagrama de Gantt

## Objetivos de Aprendizaje

Después de este capítulo deberías ser capaz de:
- Crear un Netzplan (diagrama de red) con cálculo hacia adelante y hacia atrás
- Calcular FAZ, FEZ, SAZ, SEZ y la holgura (Puffer)
- Determinar el **kritischer Pfad** (camino crítico)
- Conocer la diferencia con el diagrama de Gantt

---

## Contenido Principal

### Netzplan (diagrama de red) – Estructura de un Nodo

En la representación habitual de **Vorgangsknoten** (actividad en el nodo), cada nodo contiene:

```
┌───────────────────────────────┐
│ FAZ │   Dauer (D)  │   FEZ     │
├─────┼──────────────┼───────────┤
│     │  Vorgang     │           │
├─────┼──────────────┼───────────┤
│ SAZ │   GP  │  FP  │   SEZ     │
└───────────────────────────────┘
```

- **FAZ** – momento de inicio más temprano (Frühester Anfangszeitpunkt)
- **FEZ** – momento de fin más temprano (Frühester Endzeitpunkt) = FAZ + duración
- **SAZ** – momento de inicio más tardío (Spätester Anfangszeitpunkt) = SEZ − duración
- **SEZ** – momento de fin más tardío (Spätester Endzeitpunkt)
- **GP** – holgura total (Gesamtpuffer) = SAZ − FAZ (= SEZ − FEZ)
- **FP** – holgura libre (Freier Puffer)

### Cálculo hacia Adelante (FAZ/FEZ)

De adelante hacia atrás: `FAZ = mayor FEZ de todos los predecesores` (inicio = 0), `FEZ = FAZ + duración`.

### Cálculo hacia Atrás (SAZ/SEZ)

De atrás hacia adelante: `SEZ = menor SAZ de todos los sucesores` (fin = FEZ de la última actividad), `SAZ = SEZ − duración`.

### Kritischer Pfad (camino crítico)

El **kritischer Pfad** (camino crítico) pasa por todas las actividades con una **holgura total GP = 0**. Un retraso en él retrasa **todo el proyecto**. Es el camino **más largo** a través del Netzplan y determina la **duración del proyecto**.

### Pequeño Ejemplo de Cálculo

| Actividad | Duración | Predecesor |
|---------|-------|-----------|
| A | 3 | – |
| B | 4 | A |
| C | 2 | A |
| D | 5 | B, C |

**Hacia adelante:** A: FAZ 0, FEZ 3 · B: FAZ 3, FEZ 7 · C: FAZ 3, FEZ 5 · D: FAZ 7 (max(7,5)), FEZ 12.
**Hacia atrás:** D: SEZ 12, SAZ 7 · C: SEZ 7, SAZ 5 · B: SEZ 7, SAZ 3 · A: SEZ 3, SAZ 0.
**Holgura:** GP(C) = 5 − 3 = **2**; todas las demás GP = 0.
**Kritischer Pfad (camino crítico):** A → B → D (GP = 0), **duración del proyecto 12**.

### Diagrama de Gantt

El **diagrama de Gantt** (diagrama de barras) representa las actividades como barras sobre un eje temporal – ilustrativo para la duración, el paralelismo y las dependencias, pero sin el cálculo explícito de holguras/camino del Netzplan.

```
A ████
B     ██████
C     ████
D            ██████████
  └──┴──┴──┴──┴──┴──> Tiempo
```

---

## Términos Clave

| Término | Explicación |
|---------|-----------|
| **FAZ/FEZ** | Inicio/fin más temprano (cálculo hacia adelante) |
| **SAZ/SEZ** | Inicio/fin más tardío (cálculo hacia atrás) |
| **Gesamtpuffer (GP)** (holgura total) | SAZ − FAZ; reserva sin retrasar el proyecto |
| **Kritischer Pfad** (camino crítico) | Camino con GP = 0; determina la duración del proyecto |

---

## Consejos para el Examen

- **Los Netzpläne (diagramas de red) se examinan a menudo y dan muchos puntos.** Practica el cálculo hacia adelante/atrás hasta que lo domines.
- Con varios predecesores: **FAZ = máximo** de los FEZ de los predecesores. Con varios sucesores: **SEZ = mínimo** de los SAZ de los sucesores.
- Camino crítico = todos los nodos con **GP = 0**; es al mismo tiempo el camino **más largo**.
- Marca el camino crítico de forma **clara** en el ejercicio (p. ej. flechas gruesas/rojas).

---

## Ejercicio Práctico

**Tarea (según ConSystem GmbH):** Se da un proyecto de software con las fases planificación, instalación del software de desarrollo, diseño, implementación, pruebas, documentación de cliente y de pruebas, entrega (con duraciones y predecesores según el libro). Crea un Netzplan **y** un diagrama de Gantt y marca el camino crítico. *(Solución completa en el libro, sección de soluciones.)*

---

## Referencias

- [01-01 Fundamentos](./01-01-grundlagen.md)
- [01-05 SCRUM y KANBAN](./01-05-scrum-kanban.md)
