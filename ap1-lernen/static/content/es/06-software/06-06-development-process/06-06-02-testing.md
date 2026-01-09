# Pruebas de Software

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Conocer y distinguir diferentes tipos de pruebas
- Comprender los niveles de prueba en el SDLC
- Explicar pruebas de caja negra y caja blanca
- Crear casos de prueba

---

## Contenido Principal

### ¿Por qué Probar?

```
┌────────────────────────────────────────────────────────────────────┐
│                     OBJETIVOS DE LAS PRUEBAS                       │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │                    ASEGURAMIENTO DE CALIDAD                  │ │
│   │                                                              │ │
│   │   • Encontrar errores ANTES de que el cliente los encuentre │ │
│   │   • Verificar requisitos                                     │ │
│   │   • Asegurar fiabilidad                                      │ │
│   │   • Generar confianza en el software                         │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   Principio:                                                        │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │  "Las pruebas pueden revelar errores, pero nunca probar     │ │
│   │   su ausencia completa."                                     │ │
│   │                                                              │ │
│   │  → ¡100% libre de errores NO es demostrable!                │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   Cuanto antes se encuentra un error, más barato es corregirlo:   │
│                                                                     │
│   Costo ↑                                                          │
│          │     ╭──────────────────╮                               │
│          │    ╱                    ╲                              │
│          │   ╱                      ╲                             │
│          │  ╱   Costos de errores    ╲                           │
│          │ ╱    aumentan exponencialmente ╲                       │
│          │╱                            ╲                          │
│          └──────────────────────────────→ Fase                    │
│            Análisis  Diseño  Código  Pruebas  Producción          │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Niveles de Prueba (Modelo V)

```
┌────────────────────────────────────────────────────────────────────┐
│                      NIVELES DE PRUEBA (MODELO V)                  │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Análisis de    ─────────────────────────────  Prueba de         │
│   Requisitos     ╲                           ╱   Aceptación        │
│                   ╲                         ╱   (Aceptación Usuario)│
│   Diseño de      ─╲───────────────────────╱─   Prueba de          │
│   Alto Nivel       ╲                     ╱     Sistema             │
│   Diseño           ─╲─────────────────╱─       Prueba de          │
│   Detallado          ╲               ╱         Integración        │
│   Implementación     ─╲─────────────╱─         Prueba Unitaria    │
│                        ╲           ╱           (Prueba de Módulo) │
│                         ╲    ↓    ╱                               │
│                          ╲ CÓDIGO ╱                                │
│                           ╲────╱                                   │
│                                                                     │
│   Izquierda: Fases de desarrollo                                   │
│   Derecha: Niveles de prueba correspondientes                      │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Los Cuatro Niveles de Prueba

```
┌────────────────────────────────────────────────────────────────────┐
│                        NIVELES DE PRUEBA                           │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   1. PRUEBA UNITARIA (Prueba de Módulo)                           │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Prueba componentes/funciones individuales                │  │
│   │ • Realizada por el desarrollador                           │  │
│   │ • Unidad más pequeña que se puede probar                   │  │
│   │                                                             │  │
│   │ Ejemplo: Probar función "calcularDescuento()"              │  │
│   │                                                             │  │
│   │   ┌─────────┐                                              │  │
│   │   │Función  │ → Probar con varias entradas                 │  │
│   │   └─────────┘                                              │  │
│   └────────────────────────────────────────────────────────────┘  │
│                              ↓                                     │
│   2. PRUEBA DE INTEGRACIÓN                                        │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Prueba la interacción de múltiples módulos               │  │
│   │ • Interfaces entre componentes                             │  │
│   │ • Verificar flujo de datos                                 │  │
│   │                                                             │  │
│   │ Ejemplo: Probar Pedido → Inventario → Envío               │  │
│   │                                                             │  │
│   │   ┌─────────┐     ┌─────────┐     ┌─────────┐             │  │
│   │   │ Módulo A│ ──→ │ Módulo B│ ──→ │ Módulo C│             │  │
│   │   └─────────┘     └─────────┘     └─────────┘             │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

```
┌────────────────────────────────────────────────────────────────────┐
│                  NIVELES DE PRUEBA (Continuación)                  │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   3. PRUEBA DE SISTEMA                                             │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Prueba el sistema completo                               │  │
│   │ • Todos los componentes juntos                             │  │
│   │ • Contra requisitos de la especificación funcional         │  │
│   │ • En entorno similar a producción                          │  │
│   │                                                             │  │
│   │ Ejemplo: Probar aplicación completa de tienda web          │  │
│   │                                                             │  │
│   │   ┌─────────────────────────────────────────┐              │  │
│   │   │        SISTEMA COMPLETO                  │              │  │
│   │   │  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐   │              │  │
│   │   │  │ BD  │  │ Web │  │ API │  │ UI  │   │              │  │
│   │   │  └─────┘  └─────┘  └─────┘  └─────┘   │              │  │
│   │   └─────────────────────────────────────────┘              │  │
│   └────────────────────────────────────────────────────────────┘  │
│                              ↓                                     │
│   4. PRUEBA DE ACEPTACIÓN (User Acceptance Test)                  │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Realizada por el cliente                                 │  │
│   │ • Verifica contra especificación de requisitos             │  │
│   │ • Decisión sobre aceptación del software                   │  │
│   │ • Si es exitosa: Liberación para producción                │  │
│   │                                                             │  │
│   │ Ejemplo: Cliente prueba todas las funciones requeridas     │  │
│   │                                                             │  │
│   │   ┌─────────┐            ┌─────────┐                       │  │
│   │   │ Cliente │  verifica → │ Sistema │  → ¿Aceptación?      │  │
│   │   └─────────┘            └─────────┘     ✓ / ✗            │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Métodos de Prueba: Caja Negra vs. Caja Blanca

```
┌────────────────────────────────────────────────────────────────────┐
│                      MÉTODOS DE PRUEBA                             │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   PRUEBA DE CAJA NEGRA                  PRUEBA DE CAJA BLANCA     │
│   (prueba funcional)                    (prueba estructural)      │
│                                                                     │
│   ┌───────────────────────┐            ┌───────────────────────┐  │
│   │    ┌───────────┐      │            │    ┌───────────┐      │  │
│   │    │ ? ? ? ? ? │      │            │    │ if (x>0)  │      │  │
│   │ ──→│ ? CAJA  ? │──→   │            │ ──→│   return  │──→   │  │
│   │    │ ? NEGRA? │      │            │    │ else...   │      │  │
│   │    └───────────┘      │            │    └───────────┘      │  │
│   │                       │            │                       │  │
│   │ Estructura interna    │            │ Estructura interna    │  │
│   │ es DESCONOCIDA        │            │ es CONOCIDA           │  │
│   └───────────────────────┘            └───────────────────────┘  │
│                                                                     │
│   • Solo entrada/salida      │           • Código es visible      │
│   • Sin conocimiento de código│          • Con conocimiento de código│
│   • Basada en especificación │           • Basada en implementación│
│   • Probador ≠ Desarrollador │           • Probador = Desarrollador│
│                                                                     │
│   Técnicas:                             Técnicas:                  │
│   • Clases de equivalencia             • Cobertura de sentencias  │
│   • Análisis de valores límite         • Cobertura de ramas       │
│   • Tablas de decisión                 • Cobertura de caminos     │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Técnicas de Caja Negra

```
┌────────────────────────────────────────────────────────────────────┐
│                    TÉCNICAS DE CAJA NEGRA                          │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   PARTICIÓN DE EQUIVALENCIAS                                       │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Dividir entradas en clases con mismo comportamiento        │  │
│   │                                                             │  │
│   │ Ejemplo: Edad (válida: 0-120)                              │  │
│   │                                                             │  │
│   │   inválido    │    válido       │   inválido               │  │
│   │   ────────────│───────────────│────────────                │  │
│   │     < 0       │    0 - 120    │    > 120                   │  │
│   │                                                             │  │
│   │ UN caso de prueba por clase es suficiente (representativo) │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   ANÁLISIS DE VALORES LÍMITE                                       │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ ¡Los errores a menudo ocurren en los límites!              │  │
│   │                                                             │  │
│   │ Ejemplo: Edad (válida: 0-120)                              │  │
│   │                                                             │  │
│   │          -1   0   1           119  120  121                │  │
│   │           │   │   │            │    │    │                 │  │
│   │           ↓   ↓   ↓            ↓    ↓    ↓                 │  │
│   │          ──┼───┼───┼──────────┼────┼────┼──                │  │
│   │             ↑       ↑          ↑         ↑                 │  │
│   │          Límite  Límite    Límite    Límite                │  │
│   │                                                             │  │
│   │ Probar: -1, 0, 1, 119, 120, 121                            │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Tipos de Prueba por Objetivo

```
┌────────────────────────────────────────────────────────────────────┐
│                   TIPOS DE PRUEBA POR OBJETIVO                     │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   PRUEBAS FUNCIONALES                                              │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • La funcionalidad coincide con la especificación          │  │
│   │ • ¿Qué debería hacer el software?                          │  │
│   │ • Ejemplo: El login con datos correctos funciona           │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   PRUEBAS NO FUNCIONALES                                           │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Prueba de Rendimiento  │ Tiempos de respuesta, throughput  │  │
│   │ Prueba de Carga        │ Comportamiento bajo alta carga    │  │
│   │ Prueba de Estrés       │ Comportamiento bajo sobrecarga    │  │
│   │ Prueba de Usabilidad   │ Facilidad de uso                  │  │
│   │ Prueba de Seguridad    │ Vulnerabilidades de seguridad     │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   PRUEBA DE REGRESIÓN                                              │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Después de cambios/correcciones de errores               │  │
│   │ • Verifica que las funciones antiguas sigan funcionando    │  │
│   │ • Previene nuevos errores por cambios                      │  │
│   │ • Ejemplo: Después de actualización, ¿sigue funcionando login?│  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Documentación de Casos de Prueba

```
┌────────────────────────────────────────────────────────────────────┐
│                      ESTRUCTURA DE CASO DE PRUEBA                  │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ ID Caso de Prueba:   TC-001                                 │ │
│   │ Descripción:         Login con credenciales válidas         │ │
│   │ Precondición:        Usuario existe en base de datos        │ │
│   │ Entrada:             user="test", password="secret123"      │ │
│   │ Resultado Esperado:  Redirección al dashboard               │ │
│   │ Resultado Real:      [llenado durante la prueba]            │ │
│   │ Estado:              [ ] Pasó  [ ] Falló                    │ │
│   │ Notas:               [notas opcionales]                     │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   Elementos importantes:                                            │
│   • ID único                                                        │
│   • Descripción clara                                               │
│   • Precondiciones definidas                                        │
│   • Datos de prueba concretos                                       │
│   • Resultado esperado (¡definir ANTES de la prueba!)              │
│   • Resultado trazable                                              │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Prueba Unitaria** | Prueba de funciones/módulos individuales |
| **Prueba de Integración** | Prueba de interacción de módulos |
| **Prueba de Sistema** | Prueba del sistema completo |
| **Prueba de Aceptación** | Prueba del cliente antes de producción |
| **Prueba de Caja Negra** | Prueba sin conocimiento del código |
| **Prueba de Caja Blanca** | Prueba con conocimiento del código |
| **Prueba de Regresión** | Prueba después de cambios |
| **Caso de Prueba** | Condición de prueba definida con resultado |

---

## Consejos para el Examen

### Preguntas Comunes del Examen

- Distinguir los niveles de prueba
- ¿Cuál es la diferencia entre caja negra y caja blanca?
- Crear casos de prueba para un escenario dado

### Importante Recordar

- **Niveles de prueba:** Unitaria → Integración → Sistema → Aceptación
- **Caja Negra:** El probador NO ve el código (entrada/salida)
- **Caja Blanca:** El probador ve el código (estructura)
- **Prueba de regresión:** ¡Después de cada cambio!
- **Valores límite** son propensos a errores → ¡siempre probar!
- Prueba de aceptación = Cliente verifica contra **Especificación de Requisitos**
- Prueba de sistema = Equipo verifica contra **Especificación Funcional**

---

## Ejercicios Prácticos

### Ejercicio 1
Una función acepta valores del 1 al 100. ¿Qué casos de prueba crearías para análisis de valores límite?

**Solución:**
Casos de prueba para análisis de valores límite:
- **0** (inválido, debajo del límite)
- **1** (válido, límite inferior)
- **2** (válido, justo encima del límite inferior)
- **99** (válido, justo debajo del límite superior)
- **100** (válido, límite superior)
- **101** (inválido, encima del límite)

### Ejercicio 2
¿Quién típicamente realiza la prueba de aceptación?

**Solución:**
El **cliente** realiza la prueba de aceptación. Verifica si el software cumple con sus requisitos de la especificación de requisitos y decide sobre la aceptación.

### Ejercicio 3
Relacionar: ¿Qué nivel de prueba verifica contra qué documento?
- a) Prueba de aceptación
- b) Prueba de sistema

**Solución:**
- a) Prueba de aceptación → **Especificación de Requisitos** (requisitos del cliente)
- b) Prueba de sistema → **Especificación Funcional** (especificación técnica)

---

## Referencias Cruzadas

- [06-06-01 SDLC](./06-06-01-sdlc.md) - Fase de pruebas en el ciclo de desarrollo
- [06-06-03 Depuración](./06-06-03-debugging.md) - Búsqueda de errores
- [06-02-06 Prueba de Escritorio](../06-02-programming/06-02-06-desk-check.md) - Revisión manual de código
- [02-04 Calidad de Software](../../02-quality-management/02-04-software-quality.md) - Aseguramiento de calidad
