# Diagrama de Actividad UML

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Leer y comprender diagramas de actividad
- Conocer los símbolos más importantes y su significado
- Representar bifurcaciones y paralelismo
- Modelar procesos simples como diagramas de actividad

---

## Contenido Principal

### ¿Qué es un Diagrama de Actividad?

Un **diagrama de actividad** muestra el flujo de actividades - modela flujos de trabajo, procesos y algoritmos.

```
┌─────────────────────────────────────────────────────────────────┐
│                   DIAGRAMA DE ACTIVIDAD                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │   ¡IMPORTANTE PARA EL EXAMEN!                           │  │
│   │   [NUEVO EN CATÁLOGO DE EXÁMENES 2025]                  │  │
│   │                                                          │  │
│   │   Reemplaza parcialmente los estructogramas y           │  │
│   │   diagramas de flujo (que fueron eliminados del catálogo)│  │
│   └─────────────────────────────────────────────────────────┘  │
│                                                                 │
│   Propósito:                                                    │
│   • Representar procesos y procedimientos                       │
│   • Visualizar algoritmos                                       │
│   • Modelar flujos de trabajo                                   │
│   • Mostrar actividades paralelas                               │
│                                                                 │
│   Muestra:                                                      │
│   • Actividades (acciones)                                      │
│   • Flujo de control (secuencia)                               │
│   • Bifurcaciones (decisiones)                                  │
│   • Paralelismo (actividades concurrentes)                     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Símbolos en Diagramas de Actividad

```
┌────────────────────────────────────────────────────────────────┐
│                SÍMBOLOS EN DIAGRAMAS DE ACTIVIDAD               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   1. NODO INICIAL                                              │
│      ●    Círculo relleno                                      │
│           Inicio del flujo                                     │
│                                                                │
│   2. NODO FINAL                                                │
│      ◉    Círculo con punto relleno                            │
│           Fin del flujo                                        │
│                                                                │
│   3. ACTIVIDAD (Acción)                                        │
│      ┌─────────────────────┐                                  │
│      │                     │                                  │
│      │  Nombre Actividad   │   Rectángulo redondeado          │
│      │                     │                                  │
│      └─────────────────────┘                                  │
│                                                                │
│   4. FLUJO DE CONTROL                                          │
│      ────────────►    Flecha muestra dirección                 │
│                                                                │
│   5. DECISIÓN (Bifurcación)                                    │
│           ◇           Diamante                                 │
│          / \          Sí/No o múltiples salidas                │
│                                                                │
│   6. UNIÓN                                                     │
│          \ /                                                   │
│           ◇           Diamante une caminos                     │
│                                                                │
│   7. FORK - Paralelización                                     │
│      ─────┬─────      Barra gruesa (horizontal)                │
│           │           Actividades se ejecutan en paralelo      │
│                                                                │
│   8. JOIN                                                      │
│           │           Barra gruesa                             │
│      ─────┴─────      Espera hasta que todos terminen          │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Flujo Simple (Secuencia)

```
┌────────────────────────────────────────────────────────────────┐
│                   FLUJO SIMPLE                                  │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Ejemplo: Preparar café                                       │
│                                                                │
│                    ●   ← Nodo inicial                          │
│                    │                                           │
│                    ▼                                           │
│           ┌───────────────────┐                               │
│           │  Hervir agua      │                               │
│           └─────────┬─────────┘                               │
│                     │                                          │
│                     ▼                                          │
│           ┌───────────────────┐                               │
│           │  Añadir café      │                               │
│           └─────────┬─────────┘                               │
│                     │                                          │
│                     ▼                                          │
│           ┌───────────────────┐                               │
│           │  Verter agua      │                               │
│           └─────────┬─────────┘                               │
│                     │                                          │
│                     ▼                                          │
│                    ◉   ← Nodo final                            │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Bifurcación (Decisión)

```
┌────────────────────────────────────────────────────────────────┐
│                     BIFURCACIÓN                                 │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Ejemplo: Verificar pedido                                    │
│                                                                │
│                    ●                                           │
│                    │                                           │
│                    ▼                                           │
│           ┌───────────────────┐                               │
│           │ Verificar pedido  │                               │
│           └─────────┬─────────┘                               │
│                     │                                          │
│                     ▼                                          │
│                    ◇   ← Decisión                              │
│                   /│\                                          │
│          [en     / │ \ [sin                                   │
│          stock]    │   \ stock]                               │
│               ▼    │    ▼                                      │
│    ┌──────────────┐│┌────────────────┐                        │
│    │   Reservar   │││   Reordenar    │                        │
│    │   artículo   │││                │                        │
│    └───────┬──────┘│└───────┬────────┘                        │
│            │       │        │                                  │
│            └───────┼────────┘                                  │
│                    │                                           │
│                    ▼                                           │
│                    ◇   ← Unión                                 │
│                    │                                           │
│                    ▼                                           │
│           ┌───────────────────┐                               │
│           │ Enviar confirmación│                               │
│           └─────────┬─────────┘                               │
│                     │                                          │
│                     ▼                                          │
│                    ◉                                           │
│                                                                │
│   Condiciones entre corchetes: [Condición]                     │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Paralelismo (Fork y Join)

```
┌────────────────────────────────────────────────────────────────┐
│                    PARALELISMO                                  │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Ejemplo: Preparar desayuno                                   │
│                                                                │
│                    ●                                           │
│                    │                                           │
│                    ▼                                           │
│           ┌───────────────────┐                               │
│           │ Obtener ingredientes│                              │
│           └─────────┬─────────┘                               │
│                     │                                          │
│             ════════╪════════   ← Fork                         │
│              │      │      │                                   │
│              ▼      ▼      ▼                                   │
│   ┌──────────┐ ┌──────────┐ ┌──────────┐                     │
│   │ Hacer    │ │ Hacer    │ │  Freír   │                     │
│   │ café     │ │ tostadas │ │  huevos  │                     │
│   └────┬─────┘ └────┬─────┘ └────┬─────┘                     │
│        │            │            │                             │
│        └────────────┼────────────┘                             │
│             ════════╪════════   ← Join                         │
│                     │             Espera hasta que TODOS terminen│
│                     ▼                                          │
│           ┌───────────────────┐                               │
│           │  Servir           │                               │
│           │  desayuno         │                               │
│           └─────────┬─────────┘                               │
│                     │                                          │
│                     ▼                                          │
│                    ◉                                           │
│                                                                │
│   La barra gruesa divide (Fork) y une (Join)                   │
│   Todas las actividades paralelas deben completarse antes      │
│   de continuar después del join.                               │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Calles (Áreas de Responsabilidad)

```
┌────────────────────────────────────────────────────────────────┐
│                      CALLES (SWIMLANES)                         │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Las calles muestran quién es responsable de qué actividad   │
│                                                                │
│   │   Cliente      │    Sistema       │    Almacén      │      │
│   │                │                  │                │      │
│   │       ●        │                  │                │      │
│   │       │        │                  │                │      │
│   │       ▼        │                  │                │      │
│   │ ┌───────────┐  │                  │                │      │
│   │ │Realizar   │  │                  │                │      │
│   │ │pedido     │  │                  │                │      │
│   │ └─────┬─────┘  │                  │                │      │
│   │       │        │                  │                │      │
│   │       └────────┼─────►            │                │      │
│   │                │ ┌───────────┐    │                │      │
│   │                │ │Verificar  │    │                │      │
│   │                │ │pedido     │    │                │      │
│   │                │ └─────┬─────┘    │                │      │
│   │                │       └──────────┼───────►        │      │
│   │                │                  │ ┌───────────┐  │      │
│   │                │                  │ │Recoger    │  │      │
│   │                │                  │ │productos  │  │      │
│   │                │                  │ └─────┬─────┘  │      │
│   │                │                  │       │        │      │
│   │       ◉   ◄────┼──────────────────┼───────┘        │      │
│   │                │                  │                │      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Ejemplo Completo: Proceso de Pedido

```
┌────────────────────────────────────────────────────────────────┐
│              EJEMPLO: PROCESO DE PEDIDO                         │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│                          ●                                     │
│                          │                                     │
│                          ▼                                     │
│              ┌───────────────────────┐                        │
│              │   Recibir pedido      │                        │
│              └───────────┬───────────┘                        │
│                          │                                     │
│                          ▼                                     │
│              ┌───────────────────────┐                        │
│              │   Verificar artículos │                        │
│              └───────────┬───────────┘                        │
│                          │                                     │
│                          ▼                                     │
│                         ◇                                      │
│                   [todo   / \ [falta                           │
│                 en stock]/   \ artículo]                       │
│                        /     \                                 │
│                       ▼       ▼                                │
│   ┌───────────────────┐      ┌───────────────────┐            │
│   │ Recoger productos │      │ Notificar cliente │            │
│   └─────────┬─────────┘      └─────────┬─────────┘            │
│             │                           │                      │
│      ═══════╪═══════                    ▼                      │
│        │         │                     ◉                       │
│        ▼         ▼                  (Cancelar)                 │
│ ┌───────────┐ ┌───────────┐                                   │
│ │Crear      │ │Empacar    │                                   │
│ │factura    │ │productos  │                                   │
│ └─────┬─────┘ └─────┬─────┘                                   │
│       │             │                                          │
│       └──────┬──────┘                                          │
│       ═══════╪═══════                                          │
│              │                                                 │
│              ▼                                                 │
│   ┌───────────────────────┐                                   │
│   │   Enviar productos    │                                   │
│   └───────────┬───────────┘                                   │
│               │                                                │
│               ▼                                                │
│              ◉                                                 │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Resumen de Símbolos

| Símbolo | Nombre | Significado |
|---------|--------|-------------|
| ● | Nodo Inicial | Inicio del flujo |
| ◉ | Nodo Final | Fin del flujo |
| Rectángulo Redondeado | Actividad/Acción | Una acción |
| → | Flujo de Control | Dirección del flujo |
| ◇ | Decisión | Bifurcación basada en condición |
| ═══ | Fork | Dividir en caminos paralelos |
| ═══ | Join | Unir caminos paralelos |
| [Condición] | Guarda | Condición para bifurcación |

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Diagrama de Actividad** | Diagrama UML para procesos |
| **Actividad** | Una acción en el flujo |
| **Flujo de Control** | Secuencia de actividades |
| **Fork** | División en caminos paralelos |
| **Join** | Unión de caminos paralelos |
| **Calle (Swimlane)** | Área de responsabilidad |
| **Guarda** | Condición para bifurcación |

---

## Consejos para el Examen

### Preguntas Comunes de Examen

- Lee el diagrama de actividad y explica el flujo
- ¿Qué actividades se ejecutan en paralelo?
- Dibuja un diagrama de actividad para un proceso dado

### Importante Recordar

- **●** = Inicio, **◉** = Fin
- **◇** = Decisión (bifurcación)
- **═══** = Fork (iniciar paralelo) / Join (esperar todos)
- [Entre corchetes] = Condición
- Actividades = rectángulos redondeados

---

## Ejercicios Prácticos

### Ejercicio 1
¿Cuál es la diferencia entre Fork/Join y Decisión?

**Solución:**
- **Fork/Join:** Las actividades se ejecutan **en paralelo**. Todos los caminos se recorren, el join espera hasta que todos se completen.
- **Decisión:** Solo **un** camino se selecciona basándose en una condición. Los otros caminos no se recorren.

### Ejercicio 2
Dibuja un diagrama de actividad para el siguiente proceso:
"Un usuario inicia sesión. El sistema verifica las credenciales. Con datos correctos, se muestra el dashboard; con datos incorrectos, se muestra un mensaje de error."

**Solución:**
```
        ●
        │
        ▼
┌───────────────────┐
│ Ingresar credenciales │
└─────────┬─────────┘
          │
          ▼
┌───────────────────┐
│ Verificar datos   │
└─────────┬─────────┘
          │
          ▼
         ◇
   [correcto] [incorrecto]
        │       │
        ▼       ▼
┌───────────┐  ┌───────────┐
│ Mostrar   │  │ Mensaje   │
│ dashboard │  │ de error  │
└─────┬─────┘  └─────┬─────┘
      │              │
      └──────┬───────┘
             ▼
            ◉
```

### Ejercicio 3
Explica el siguiente flujo:

```
    ●
    │
    ▼
┌────────┐
│ Inicio │
└────┬───┘
   ══╪══
   │   │
   ▼   ▼
┌────┐┌────┐
│ A  ││ B  │
└──┬─┘└──┬─┘
   │     │
   ══╪════
     │
     ▼
    ◉
```

**Solución:**
1. El proceso inicia (●)
2. La actividad "Inicio" se ejecuta
3. En el fork (═══) el flujo se divide en dos caminos paralelos
4. Las actividades A y B se ejecutan **simultáneamente** (en paralelo)
5. En el join (═══) el sistema espera hasta que **ambas** actividades se completen
6. El proceso termina (◉)

---

## Referencias Cruzadas

- [06-03-01 Diagrama de Clases](./06-03-01-class-diagram.md) - Diagrama estructural
- [06-03-02 Diagrama de Casos de Uso](./06-03-02-use-case-diagram.md) - Casos de uso
- [06-02-02 Estructuras de Control](../06-02-programming/06-02-02-control-structures.md) - Secuencia, Selección, Iteración
