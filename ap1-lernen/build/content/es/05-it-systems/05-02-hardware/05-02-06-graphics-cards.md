# Tarjetas Gráficas (GPU)

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Conocer la diferencia entre CPU y GPU
- Comprender la estructura de una tarjeta gráfica
- Explicar métricas importantes
- Conocer casos de uso para GPUs

---

## Contenido Principal

### ¿Qué es una Tarjeta Gráfica?

Una **tarjeta gráfica** (GPU - Graphics Processing Unit / Unidad de Procesamiento Gráfico) está especializada en cálculos paralelos para salida de gráficos y otras tareas intensivas en cómputo.

```
┌─────────────────────────────────────────────────────────────────┐
│                    TARJETA GRÁFICA                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                      GPU                                 │   │
│  │           (Procesador Gráfico)                           │   │
│  │                                                          │   │
│  │   ┌─────┐┌─────┐┌─────┐┌─────┐┌─────┐┌─────┐          │   │
│  │   │Núcleo││Núcleo││Núcleo││Núcleo││Núcleo││Núcleo│  ...  │   │
│  │   └─────┘└─────┘└─────┘└─────┘└─────┘└─────┘          │   │
│  │              Miles de núcleos paralelos               │   │
│  └─────────────────────────────────────────────────────────┘   │
│                           │                                     │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                   VRAM (Memoria Gráfica)                 │   │
│  │              (GDDR6, HBM2 - 4-24 GB)                     │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐      │
│  │    HDMI       │  │ DisplayPort   │  │     DVI       │      │
│  │  Puerto       │  │  Puerto       │  │  Puerto       │      │
│  └───────────────┘  └───────────────┘  └───────────────┘      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### CPU vs. GPU

| Aspecto | CPU | GPU |
|---------|-----|-----|
| **Núcleos** | Pocos (4-64) | Muchos (1.000-10.000+) |
| **Tarea** | Tareas secuenciales | Tareas paralelas |
| **Optimizado para** | Tareas individuales complejas | Tareas masivas simples |
| **Ejemplo** | Lógica de programa | Cálculos de píxeles |

```
┌────────────────────────────────────────────────────────────────┐
│                    CPU vs. GPU                                 │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  CPU (pocos núcleos potentes)    GPU (muchos núcleos simples)  │
│                                                                │
│  ┌────────┐ ┌────────┐           ┌─┐┌─┐┌─┐┌─┐┌─┐┌─┐┌─┐┌─┐   │
│  │        │ │        │           │ ││ ││ ││ ││ ││ ││ ││ │   │
│  │Núcleo 1│ │Núcleo 2│           ├─┤├─┤├─┤├─┤├─┤├─┤├─┤├─┤   │
│  │        │ │        │           │ ││ ││ ││ ││ ││ ││ ││ │   │
│  └────────┘ └────────┘           ├─┤├─┤├─┤├─┤├─┤├─┤├─┤├─┤   │
│                                   │ ││ ││ ││ ││ ││ ││ ││ │   │
│  Rápida en                        └─┘└─┘└─┘└─┘└─┘└─┘└─┘└─┘   │
│  tareas complejas                                              │
│                                   Rápida en muchas             │
│                                   tareas idénticas             │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Gráficos Integrados vs. Dedicados

| Tipo | Descripción | Uso |
|------|-------------|-----|
| **Integrada (iGPU)** | Incorporada en CPU (Intel UHD, AMD APU) | Oficina, Video |
| **Dedicada (dGPU)** | Tarjeta separada (NVIDIA, AMD) | Gaming, 3D, IA |

**Ventajas de gráficos integrados:**
- Sin consumo de energía adicional
- Económico
- Ahorra espacio

**Ventajas de gráficos dedicados:**
- Alto rendimiento
- Memoria gráfica propia (VRAM)
- Para tareas exigentes

---

### Métricas Importantes

| Métrica | Descripción | Ejemplo |
|---------|-------------|---------|
| **VRAM** | Video RAM (memoria gráfica) | 8 GB GDDR6 |
| **Reloj** | Velocidad de GPU | 1.800 MHz |
| **Núcleos CUDA** | Núcleos de procesamiento (NVIDIA) | 4.352 |
| **Stream Processors** | Núcleos de procesamiento (AMD) | 2.560 |
| **TDP** | Consumo de energía | 250 Watts |
| **Ancho de Banda de Memoria** | Tasa de datos a VRAM | 448 GB/s |

---

### Memoria Gráfica (VRAM)

| Tipo | Descripción | Uso |
|------|-------------|-----|
| **GDDR6** | Estándar para gaming | Tarjetas gráficas actuales |
| **GDDR6X** | GDDR6 más rápido | NVIDIA gama alta |
| **HBM2/HBM3** | Muy rápida, apilada | Tarjetas profesionales/IA |

**Recomendación de VRAM:**
- **4-6 GB:** Gaming Full HD
- **8-12 GB:** Gaming WQHD, Edición de imagen
- **16+ GB:** Gaming 4K, Renderizado 3D, IA

---

### Casos de Uso

| Caso de Uso | Requisito |
|-------------|-----------|
| **Oficina/Trabajo** | Gráficos integrados suficientes |
| **Gaming** | Tarjeta gráfica dedicada |
| **Edición de Video** | Aceleración GPU |
| **Renderizado 3D** | Alta VRAM, muchos núcleos |
| **IA/Machine Learning** | Núcleos CUDA, núcleos Tensor |
| **CAD** | Tarjetas profesionales (Quadro, Radeon Pro) |

---

### Interfaces

| Interfaz | Descripción |
|----------|-------------|
| **PCIe x16** | Conexión a placa base |
| **HDMI** | Para monitores y TVs |
| **DisplayPort** | Para monitores gaming |
| **USB-C/Thunderbolt** | Para VR y monitores nuevos |

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **GPU** | Graphics Processing Unit (Unidad de Procesamiento Gráfico) |
| **VRAM** | Video RAM (memoria gráfica) |
| **iGPU** | Gráficos integrados |
| **dGPU** | Tarjeta gráfica dedicada (separada) |
| **CUDA** | Arquitectura paralela de NVIDIA |
| **GDDR** | Graphics DDR (tipo de memoria) |
| **TDP** | Thermal Design Power (Potencia de Diseño Térmico) |

---

## Consejos para el Examen

### Preguntas Comunes de Examen

- ¿Cuál es la diferencia entre CPU y GPU?
- ¿Cuándo es útil una tarjeta gráfica dedicada?
- ¿Qué es VRAM?

### Importante Recordar

- **GPU** = muchos núcleos paralelos para cálculos gráficos
- **iGPU** = integrada, suficiente para oficina
- **dGPU** = dedicada, necesaria para gaming/3D/IA
- **VRAM** = memoria propia de la tarjeta gráfica

---

## Ejercicios Prácticos

### Ejercicio 1
¿Cuál es la diferencia principal entre CPU y GPU?

**Solución:**
- **CPU:** Pocos núcleos potentes, optimizada para tareas secuenciales complejas
- **GPU:** Muchos núcleos simples, optimizada para tareas paralelas simples (como cálculos de píxeles)

### Ejercicio 2
Un empleado necesita un PC para aplicaciones de oficina y videoconferencias ocasionales. ¿Necesita una tarjeta gráfica dedicada?

**Solución:** **No**, para aplicaciones de oficina y videoconferencias, los **gráficos integrados** (iGPU) son completamente suficientes. Una tarjeta gráfica dedicada solo tendría sentido para gaming, aplicaciones 3D o edición de video.

### Ejercicio 3
¿Qué significa "8 GB VRAM" en una tarjeta gráfica?

**Solución:** **VRAM (Video RAM)** es la memoria de trabajo propia de la tarjeta gráfica. 8 GB VRAM significa que la tarjeta gráfica tiene 8 gigabytes de memoria disponible para texturas, framebuffer y otros datos gráficos. Más VRAM es importante para resoluciones más altas y texturas detalladas.

---

## Referencias Cruzadas

- [05-02-01 Procesadores](./05-02-01-processors.md) - CPU
- [05-02-05 Interfaces](./05-02-05-interfaces.md) - PCIe, HDMI, DisplayPort
- [05-06-01 Fundamentos de IA](../05-06-artificial-intelligence/05-06-01-ai-fundamentals.md) - GPU para IA
