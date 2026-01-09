# Procesadores (CPU)

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Conocer la estructura de un procesador
- Explicar cómo funciona
- Comprender las métricas importantes
- Conocer las diferencias entre tipos de procesadores

---

## Contenido Principal

### ¿Qué es un Procesador?

El **procesador** (CPU - Central Processing Unit / Unidad Central de Procesamiento) es el "cerebro" de la computadora. Ejecuta instrucciones de programas y procesa datos.

```
┌─────────────────────────────────────────────────────────────────┐
│                        CPU                                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    UNIDAD DE CONTROL                     │   │
│  │         Busca, decodifica y controla instrucciones       │   │
│  └─────────────────────────────────────────────────────────┘   │
│                           │                                     │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    ALU (Unidad Aritmético Lógica)        │   │
│  │       Ejecuta operaciones aritméticas y lógicas          │   │
│  └─────────────────────────────────────────────────────────┘   │
│                           │                                     │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    REGISTROS                             │   │
│  │            Almacenamiento temporal muy rápido            │   │
│  └─────────────────────────────────────────────────────────┘   │
│                           │                                     │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    CACHÉ                                 │   │
│  │              Memoria intermedia rápida                   │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Componentes Principales

| Componente | Función |
|------------|---------|
| **Unidad de Control** | Busca instrucciones de memoria, las decodifica, controla el flujo de ejecución |
| **ALU (Unidad Aritmético Lógica)** | Ejecuta operaciones aritméticas (+, -, ×, ÷) y lógicas (AND, OR, NOT) |
| **Registros** | Memoria muy rápida y pequeña directamente en la CPU |
| **Caché** | Memoria intermedia rápida entre CPU y RAM |

---

### El Ciclo de Instrucción

La CPU trabaja según el ciclo **Fetch-Decode-Execute** (Buscar-Decodificar-Ejecutar):

```
┌────────────────────────────────────────────────────────────────┐
│               FETCH - DECODE - EXECUTE                         │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   1. FETCH (BUSCAR)                                            │
│      ┌─────────┐                                               │
│      │ Buscar  │ ◄─────────── Cargar desde memoria            │
│      │ instruc-│                                               │
│      │ ción    │                                               │
│      └────┬────┘                                               │
│           │                                                    │
│           ▼                                                    │
│   2. DECODE (DECODIFICAR)                                      │
│      ┌─────────┐                                               │
│      │Decodifi-│ ◄─────────── ¿Qué se debe hacer?             │
│      │ car     │                                               │
│      │instruc. │                                               │
│      └────┬────┘                                               │
│           │                                                    │
│           ▼                                                    │
│   3. EXECUTE (EJECUTAR)                                        │
│      ┌─────────┐                                               │
│      │Ejecutar │ ◄─────────── Realizar cálculo                │
│      │instruc- │                                               │
│      │ción     │                                               │
│      └────┬────┘                                               │
│           │                                                    │
│           ▼                                                    │
│      Volver a 1.                                               │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Métricas Importantes

| Métrica | Descripción | Ejemplo |
|---------|-------------|---------|
| **Frecuencia de Reloj** | Operaciones por segundo | 3,5 GHz |
| **Núcleos** | Unidades de procesamiento independientes | 8 núcleos |
| **Hilos** | Procesadores lógicos (Hyper-Threading) | 16 hilos |
| **Caché** | Memoria intermedia (L1, L2, L3) | 32 MB L3 |
| **TDP** | Potencia de Diseño Térmico (disipación de calor) | 65 Watts |
| **Arquitectura** | Conjunto de instrucciones | x86-64, ARM |

---

### Jerarquía de Caché

```
┌────────────────────────────────────────────────────────────────┐
│                    JERARQUÍA DE CACHÉ                          │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   CPU ◄──► Caché L1 ◄──► Caché L2 ◄──► Caché L3 ◄──► RAM      │
│                                                                │
│   ┌─────────────────────────────────────────────────────────┐ │
│   │  Caché │ Tamaño     │ Velocidad       │ Costo            │ │
│   │────────│────────────│─────────────────│──────────────────│ │
│   │   L1   │ 32-64 KB   │ Muy rápida      │ Muy costosa      │ │
│   │   L2   │ 256-512 KB │ Rápida          │ Costosa          │ │
│   │   L3   │ 8-64 MB    │ Media           │ Media            │ │
│   │   RAM  │ 8-64 GB    │ Lenta*          │ Accesible        │ │
│   └─────────────────────────────────────────────────────────┘ │
│                                                                │
│   * Relativo a la CPU                                          │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Arquitecturas de Procesadores

| Arquitectura | Descripción | Uso |
|--------------|-------------|-----|
| **x86-64** | CISC, 64-bit, Intel/AMD | Escritorio, Servidor |
| **ARM** | RISC, eficiente en energía | Smartphones, Tablets, Chips Apple M |
| **RISC-V** | RISC de código abierto | IoT, Embebidos |

#### CISC vs. RISC

| Aspecto | CISC | RISC |
|---------|------|------|
| **Complejidad** | Instrucciones complejas | Instrucciones simples |
| **Ejemplo** | x86 (Intel, AMD) | ARM, RISC-V |
| **Instrucciones** | Muchas, longitud variable | Pocas, longitud fija |
| **Consumo de Energía** | Mayor | Menor |

---

### Procesadores Multi-núcleo

Las CPUs modernas tienen múltiples **núcleos** que pueden trabajar en paralelo:

```
┌────────────────────────────────────────────────────────────────┐
│                 PROCESADOR MULTI-NÚCLEO                        │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐     │
│   │ Núcleo 1 │  │ Núcleo 2 │  │ Núcleo 3 │  │ Núcleo 4 │     │
│   │  L1/L2   │  │  L1/L2   │  │  L1/L2   │  │  L1/L2   │     │
│   └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘     │
│        │             │             │             │            │
│        └─────────────┴──────┬──────┴─────────────┘            │
│                             │                                  │
│                      ┌──────┴──────┐                          │
│                      │  Caché L3   │                          │
│                      │ (compartida)│                          │
│                      └─────────────┘                          │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

**Hyper-Threading (SMT):** Un núcleo físico puede procesar dos hilos simultáneamente → 4 núcleos = 8 hilos

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **CPU** | Central Processing Unit (Unidad Central de Procesamiento) |
| **ALU** | Arithmetic Logic Unit (Unidad Aritmético Lógica) |
| **Caché** | Memoria intermedia rápida |
| **Frecuencia de Reloj** | Velocidad en GHz |
| **Núcleo** | Unidad de procesamiento independiente |
| **Hilo** | Procesador lógico |
| **TDP** | Thermal Design Power (Potencia de Diseño Térmico) |
| **CISC** | Complex Instruction Set Computer |
| **RISC** | Reduced Instruction Set Computer |

---

## Consejos para el Examen

### Preguntas Comunes de Examen

- ¿Qué componentes conforman una CPU?
- ¿Cuál es la diferencia entre un núcleo y un hilo?
- ¿Qué es la caché y para qué se usa?
- Explica el ciclo de instrucción

### Importante Recordar

- **CPU = Unidad de Control + ALU + Registros**
- **Ciclo de Instrucción:** Fetch → Decode → Execute
- **Jerarquía de Caché:** L1 < L2 < L3 (rápida → más lenta)
- **Más núcleos** = Más paralelismo

---

## Ejercicios Prácticos

### Ejercicio 1
Nombra los tres componentes principales de una CPU.

**Solución:**
1. **Unidad de Control** - Busca y decodifica instrucciones
2. **ALU (Unidad Aritmético Lógica)** - Realiza cálculos
3. **Registros** - Almacenan resultados intermedios

### Ejercicio 2
¿Cuál es la diferencia entre un núcleo y un hilo?

**Solución:**
- **Núcleo:** Unidad de procesamiento física e independiente en la CPU
- **Hilo:** Procesador lógico creado mediante Hyper-Threading/SMT

Un procesador de 4 núcleos con Hyper-Threading tiene 4 núcleos físicos pero 8 hilos.

### Ejercicio 3
¿Para qué se usa la caché y qué niveles de caché existen?

**Solución:** La **caché** es una memoria intermedia rápida entre la CPU y la RAM que mantiene datos frecuentemente necesarios.

Niveles de caché:
- **L1:** Muy rápida, muy pequeña (32-64 KB), por núcleo
- **L2:** Rápida, pequeña (256-512 KB), por núcleo
- **L3:** Velocidad media, más grande (8-64 MB), compartida entre todos los núcleos

---

## Referencias Cruzadas

- [05-02-02 Memoria (RAM)](./05-02-02-memory-ram.md) - Memoria de trabajo
- [05-02-06 Tarjetas Gráficas](./05-02-06-graphics-cards.md) - GPU vs. CPU
- [05-03-01 Sistemas Operativos](../05-03-operating-systems/05-03-01-fundamentals-operating-systems.md) - Gestión de procesos
