# Memoria (RAM)

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Distinguir entre diferentes tipos de memoria
- Explicar RAM y ROM
- Comprender la jerarquía de memoria
- Conocer los estándares DDR

---

## Contenido Principal

### Resumen de Tipos de Memoria

```
┌─────────────────────────────────────────────────────────────────┐
│                    TIPOS DE MEMORIA                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  VOLÁTIL (pierde datos            NO VOLÁTIL (retiene          │
│  al perder energía)               datos sin energía)            │
│                                                                 │
│  ┌─────────────────────┐           ┌─────────────────────┐     │
│  │        RAM          │           │        ROM          │     │
│  │  Random Access      │           │  Read-Only Memory   │     │
│  │  Memory             │           │                     │     │
│  │                     │           │  • BIOS/UEFI        │     │
│  │  • Memoria de       │           │  • Firmware         │     │
│  │    trabajo          │           │                     │     │
│  │  • Rápida           │           │  ┌───────────────┐  │     │
│  │  • Costosa por GB   │           │  │ Memoria Flash │  │     │
│  └─────────────────────┘           │  │ • SSD         │  │     │
│                                    │  │ • Memoria USB │  │     │
│                                    │  └───────────────┘  │     │
│                                    └─────────────────────┘     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### RAM (Random Access Memory)

**RAM** es la memoria de trabajo de la computadora - rápida pero volátil.

#### Propiedades

| Propiedad | Descripción |
|-----------|-------------|
| **Volátil** | Los datos se pierden al fallar la energía |
| **Rápida** | Acceso directo a cualquier dirección |
| **Función** | Almacena programas en ejecución y datos |
| **Capacidad** | Típicamente 8-64 GB |

#### Tipos de RAM

| Tipo | Descripción | Velocidad |
|------|-------------|-----------|
| **DRAM** | RAM Dinámica, debe refrescarse | Más lenta |
| **SRAM** | RAM Estática, no necesita refresco | Más rápida |
| **SDRAM** | Síncrona con el reloj del sistema | Estándar actual |

---

### Estándares DDR

**DDR (Double Data Rate)** transfiere datos tanto en el flanco ascendente COMO en el descendente del reloj.

```
┌────────────────────────────────────────────────────────────────┐
│                    EVOLUCIÓN DDR                               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  DDR1 ───► DDR2 ───► DDR3 ───► DDR4 ───► DDR5                 │
│                                                                │
│  Cada generación:                                              │
│  • Mayor velocidad                                             │
│  • Menor voltaje (= menor consumo de energía)                  │
│  • Mayor capacidad posible                                     │
│  • NO retrocompatible (diferente muesca/zócalo)               │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Estándar DDR | Voltaje | Frecuencia Típica | Ancho de Banda Máx. |
|--------------|---------|-------------------|---------------------|
| **DDR3** | 1,5 V | 1333-2133 MHz | ~17 GB/s |
| **DDR4** | 1,2 V | 2133-3200 MHz | ~25 GB/s |
| **DDR5** | 1,1 V | 4800-6400+ MHz | ~51+ GB/s |

---

### Jerarquía de Memoria

La memoria en la computadora está organizada jerárquicamente:

```
┌────────────────────────────────────────────────────────────────┐
│                  JERARQUÍA DE MEMORIA                          │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│             ▲ Velocidad                                        │
│             │                                                  │
│  ┌──────────┴──────────┐  Registros (CPU)                     │
│  │        muy         │  Capacidad: Bytes                      │
│  │        rápida      │  Latencia: < 1 ns                      │
│  └────────────────────┘                                        │
│  ┌────────────────────┐  Caché L1/L2/L3                       │
│  │       rápida       │  Capacidad: KB a MB                   │
│  │                    │  Latencia: 1-10 ns                    │
│  └────────────────────┘                                        │
│  ┌────────────────────┐  RAM (Memoria de Trabajo)             │
│  │      media         │  Capacidad: GB                         │
│  │                    │  Latencia: ~100 ns                     │
│  └────────────────────┘                                        │
│  ┌────────────────────┐  SSD                                  │
│  │       lenta        │  Capacidad: TB                         │
│  │   (relativamente)  │  Latencia: ~100 µs                     │
│  └────────────────────┘                                        │
│  ┌────────────────────┐  HDD                                  │
│  │    muy lenta       │  Capacidad: TB                         │
│  │                    │  Latencia: ~10 ms                      │
│  └────────────────────┘                                        │
│             │                                                  │
│             ▼ Capacidad / Costo por GB                        │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### ROM (Read-Only Memory)

**ROM** almacena datos permanentemente, incluso sin suministro de energía.

| Tipo de ROM | Descripción | ¿Modificable? |
|-------------|-------------|---------------|
| **ROM** | Solo lectura, programada permanentemente | No |
| **PROM** | Programable una vez | Una vez |
| **EPROM** | Borrable con luz UV | Con equipo especial |
| **EEPROM** | Borrable eléctricamente | Sí |
| **Flash** | Borrable eléctricamente rápido | Sí |

**Usos de ROM:**
- Firmware BIOS/UEFI
- Firmware de dispositivos
- Cargador de arranque

---

### Dual-Channel y Quad-Channel

El ancho de banda puede aumentarse mediante múltiples canales de memoria:

| Modo | Requisito | Ancho de Banda |
|------|-----------|----------------|
| **Single-Channel** | 1 módulo RAM | 1x |
| **Dual-Channel** | 2 módulos idénticos | 2x |
| **Quad-Channel** | 4 módulos idénticos | 4x |

**Mejor Práctica:** Usar módulos RAM idénticos (tamaño, velocidad, fabricante).

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **RAM** | Random Access Memory (memoria de trabajo) |
| **ROM** | Read-Only Memory |
| **DDR** | Double Data Rate |
| **DRAM** | Dynamic RAM |
| **SRAM** | Static RAM |
| **Volátil** | Pierde datos al fallar la energía |
| **Dual-Channel** | Dos módulos RAM para más ancho de banda |

---

## Consejos para el Examen

### Preguntas Comunes de Examen

- ¿Cuál es la diferencia entre RAM y ROM?
- ¿Qué significa DDR?
- ¿Por qué se llama volátil a la RAM?
- ¿Qué es la jerarquía de memoria?

### Importante Recordar

- **RAM** = volátil, rápida, memoria de trabajo
- **ROM** = no volátil, firmware
- **DDR** = Double Data Rate (doble transferencia por ciclo de reloj)
- Las generaciones DDR **NO son retrocompatibles**

---

## Ejercicios Prácticos

### Ejercicio 1
¿Cuál es la diferencia entre RAM y ROM?

**Solución:**
| Aspecto | RAM | ROM |
|---------|-----|-----|
| **Volatilidad** | Volátil (datos perdidos al fallar energía) | No volátil |
| **Uso** | Memoria de trabajo | Firmware, BIOS |
| **Modificable** | Sí, constantemente | No o solo especialmente |
| **Velocidad** | Muy rápida | Más lenta |

### Ejercicio 2
¿Por qué los módulos RAM DDR4 y DDR5 no son intercambiables?

**Solución:** Las generaciones DDR tienen diferentes:
- **Voltajes** (DDR4: 1,2V, DDR5: 1,1V)
- **Cantidad de pines** y **muescas** (mecánicamente incompatibles)
- **Especificaciones eléctricas**

Los módulos físicamente no encajan en ranuras incorrectas.

### Ejercicio 3
Explica la jerarquía de memoria.

**Solución:** La jerarquía de memoria organiza el almacenamiento por velocidad y capacidad:
1. **Registros** (CPU) - más rápidos, más pequeños
2. **Caché** (L1, L2, L3) - muy rápida, pequeña
3. **RAM** - rápida, tamaño medio
4. **SSD/HDD** - lenta, grande

Cuanto más rápida la memoria, más costosa por GB y menor la capacidad.

---

## Referencias Cruzadas

- [05-02-01 Procesadores](./05-02-01-processors.md) - Caché y Registros
- [05-02-03 Almacenamiento](./05-02-03-storage-hdd-ssd.md) - SSD y HDD
- [05-03-02 BIOS/UEFI](../05-03-operating-systems/05-03-02-bios-uefi.md) - ROM para Firmware
