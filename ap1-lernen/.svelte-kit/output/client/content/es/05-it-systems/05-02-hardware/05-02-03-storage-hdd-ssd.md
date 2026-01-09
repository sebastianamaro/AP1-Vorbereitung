# Almacenamiento - HDD vs. SSD

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Explicar la diferencia entre HDD y SSD
- Conocer las ventajas y desventajas de ambas tecnologías
- Asignar casos de uso apropiados
- Comprender métricas importantes

**Nota:** ¡La comparación HDD vs. SSD es NUEVA en el catálogo del examen 2025!

---

## Contenido Principal

### Resumen

```
┌─────────────────────────────────────────────────────────────────┐
│                  ALMACENAMIENTO DE DATOS                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  HDD (Hard Disk Drive)              SSD (Solid State Drive)     │
│  ┌─────────────────────┐            ┌─────────────────────┐    │
│  │                     │            │                     │    │
│  │  Platos            │            │  Memoria Flash      │    │
│  │  Magnéticos        │            │  (NAND)             │    │
│  │                     │            │                     │    │
│  │  Mecánico          │            │  Electrónico        │    │
│  │  (partes móviles)   │            │  (sin partes        │    │
│  │                     │            │   móviles)          │    │
│  └─────────────────────┘            └─────────────────────┘    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### HDD (Hard Disk Drive)

El **disco duro** almacena datos magnéticamente en platos giratorios.

#### Estructura

```
┌────────────────────────────────────────────────────────────────┐
│                    ESTRUCTURA HDD                              │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│           Cabezal de Lectura/Escritura                         │
│                 │                                              │
│                 ▼                                              │
│         ┌───────────────┐                                      │
│        /│               │\                                     │
│       / │   Platos      │ \                                    │
│      /  │   Magnéticos  │  \                                   │
│     /   │               │   \                                  │
│    /    │               │    \                                 │
│   │     └───────┬───────┘     │                                │
│   │             │             │                                │
│   │          Husillo          │                                │
│   │        (Rotación)         │                                │
│   └───────────────────────────┘                                │
│                                                                │
│   RPM: 5.400 - 7.200 (Consumidor) / 10.000-15.000 (Servidor)  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### Propiedades HDD

| Propiedad | Valor/Descripción |
|-----------|-------------------|
| **Principio de Almacenamiento** | Magnético |
| **Capacidad** | Hasta 20+ TB |
| **Velocidad** | 80-200 MB/s (secuencial) |
| **Tiempo de Acceso** | 5-10 ms |
| **Precio por GB** | Muy económico (aprox. $0,02/GB) |
| **Vida Útil** | Limitada por desgaste mecánico |
| **Consumo de Energía** | Mayor |
| **Sensibilidad** | Sensible a golpes |

---

### SSD (Solid State Drive)

El **SSD** almacena datos electrónicamente en memoria flash (NAND).

#### Estructura

```
┌────────────────────────────────────────────────────────────────┐
│                    ESTRUCTURA SSD                              │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   ┌──────────────────────────────────────────────────────────┐│
│   │                    Controlador                           ││
│   │              (Gestión, Wear Leveling)                    ││
│   └──────────────────────────────────────────────────────────┘│
│                            │                                   │
│   ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐     │
│   │ NAND   │ │ NAND   │ │ NAND   │ │ NAND   │ │ NAND   │     │
│   │ Flash  │ │ Flash  │ │ Flash  │ │ Flash  │ │ Flash  │     │
│   └────────┘ └────────┘ └────────┘ └────────┘ └────────┘     │
│                                                                │
│   ¡Sin partes móviles!                                         │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### Propiedades SSD

| Propiedad | Valor/Descripción |
|-----------|-------------------|
| **Principio de Almacenamiento** | Electrónico (NAND Flash) |
| **Capacidad** | Hasta 8+ TB |
| **Velocidad** | 500 MB/s (SATA) / 3.500+ MB/s (NVMe) |
| **Tiempo de Acceso** | 0,1 ms |
| **Precio por GB** | Más costoso (aprox. $0,08-0,15/GB) |
| **Vida Útil** | Limitada por ciclos de escritura (TBW) |
| **Consumo de Energía** | Menor |
| **Sensibilidad** | Resistente a golpes |

---

### Comparación Directa: HDD vs. SSD

| Criterio | HDD | SSD |
|----------|-----|-----|
| **Velocidad** | 80-200 MB/s | 500-7.000 MB/s |
| **Tiempo de Acceso** | 5-10 ms | 0,1 ms |
| **Precio/GB** | Económico | Más costoso |
| **Capacidad** | Muy alta (hasta 20+ TB) | Alta (hasta 8+ TB) |
| **Ruido** | Audible | Silencioso |
| **Consumo de Energía** | Mayor | Menor |
| **Resistencia a Golpes** | Sensible | Robusto |
| **Peso** | Más pesado | Más ligero |
| **Vida Útil** | Desgaste mecánico | Ciclos de escritura limitados |

---

### Factores de Forma e Interfaces SSD

| Factor de Forma | Interfaz | Velocidad |
|-----------------|----------|-----------|
| **2,5" SATA** | SATA III | hasta 550 MB/s |
| **M.2 SATA** | SATA III | hasta 550 MB/s |
| **M.2 NVMe** | PCIe | hasta 7.000+ MB/s |
| **Tarjeta PCIe** | PCIe directo | hasta 7.000+ MB/s |

```
┌────────────────────────────────────────────────────────────────┐
│              INTERFACES SSD                                    │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   SSD SATA:     ████████░░░░░░░░░░░░░░░░░░░░  ~550 MB/s       │
│                                                                │
│   SSD NVMe:     ████████████████████████████  ~7.000 MB/s     │
│                                                                │
│   ¡NVMe es hasta 12 veces más rápido que SATA!                 │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Tipos de NAND Flash

| Tipo | Bits/Celda | Durabilidad | Velocidad | Precio |
|------|------------|-------------|-----------|--------|
| **SLC** | 1 | Muy alta | Muy rápida | Muy costoso |
| **MLC** | 2 | Alta | Rápida | Costoso |
| **TLC** | 3 | Media | Media | Económico |
| **QLC** | 4 | Menor | Más lenta | Muy económico |

---

### Recomendaciones de Uso

| Aplicación | Recomendación |
|------------|---------------|
| **Sistema Operativo, Programas** | SSD (arranque más rápido) |
| **Archivos, Respaldos** | HDD (precio más bajo) |
| **Gaming** | SSD (tiempos de carga rápidos) |
| **Edición de Video** | SSD (acceso rápido) |
| **Grandes Volúmenes de Datos** | HDD (alta capacidad) |
| **Laptops** | SSD (resistente a golpes, ligero) |

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **HDD** | Hard Disk Drive (almacenamiento magnético) |
| **SSD** | Solid State Drive (memoria flash) |
| **NAND** | Tipo de memoria flash |
| **NVMe** | Non-Volatile Memory Express (protocolo rápido) |
| **SATA** | Serial ATA (interfaz) |
| **TBW** | Terabytes Written (especificación de vida útil) |
| **Wear Leveling** | Distribución uniforme del desgaste en celdas de memoria |

---

## Consejos para el Examen

### Preguntas Comunes de Examen

- ¿Cuál es la diferencia entre HDD y SSD?
- Nombra ventajas y desventajas de los SSDs
- ¿Cuándo se debe usar HDD, cuándo SSD?
- ¿Qué significa NVMe?

### Importante Recordar

- **HDD** = mecánico, económico, lento, alta capacidad
- **SSD** = electrónico, costoso, muy rápido, resistente a golpes
- **NVMe** es hasta 12 veces más rápido que **SATA**
- SSDs para sistema operativo, HDDs para archivos

---

## Ejercicios Prácticos

### Ejercicio 1
Nombra tres ventajas de un SSD sobre un HDD.

**Solución:**
1. **Mayor velocidad** (500-7.000 MB/s vs. 80-200 MB/s)
2. **Menor tiempo de acceso** (0,1 ms vs. 5-10 ms)
3. **Resistente a golpes** (sin partes móviles)

(Adicional: más silencioso, más eficiente en energía, más ligero)

### Ejercicio 2
¿Cuándo se debe usar un HDD en lugar de un SSD?

**Solución:** Un HDD es más adecuado para:
- **Grandes volúmenes de datos** (archivos, respaldos)
- **Presupuesto limitado** (menor precio por GB)
- **Requisitos de alta capacidad** (20+ TB disponibles)
- Datos que rara vez se acceden

### Ejercicio 3
¿Cuál es la diferencia entre SATA y NVMe para SSDs?

**Solución:**
- **SATA:** Interfaz antigua, máx. aprox. 550 MB/s, compatible con conectores HDD
- **NVMe:** Interfaz moderna vía PCIe, hasta 7.000+ MB/s, desarrollada específicamente para SSDs

NVMe es aproximadamente 12 veces más rápido que SATA.

### Ejercicio 4
¿Qué significa TBW para SSDs?

**Solución:** **TBW (Terabytes Written)** es una especificación de vida útil de un SSD. Indica cuántos terabytes pueden escribirse en total antes de que se puedan esperar fallos. Ejemplo: Un SSD con 600 TBW puede escribir un total de 600 TB de datos antes de que expire la garantía.

---

## Referencias Cruzadas

- [05-02-02 Memoria (RAM)](./05-02-02-memory-ram.md) - Jerarquía de memoria
- [05-02-04 NAS y Disponibilidad](./05-02-04-nas-availability.md) - Almacenamiento en red
- [05-05-01 Tipos de Respaldo](../05-05-data-backup/05-05-01-backup-types.md) - Respaldo de datos
