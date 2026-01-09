# Interfaces

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Conocer diferentes interfaces de hardware
- Distinguir estándares USB
- Conocer interfaces internas y externas
- Seleccionar interfaces apropiadas para aplicaciones

---

## Contenido Principal

### Resumen: Interfaces

```
┌─────────────────────────────────────────────────────────────────┐
│                    INTERFACES                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  EXTERNAS                        INTERNAS                       │
│  ┌─────────────────────┐          ┌─────────────────────┐      │
│  │ • USB               │          │ • SATA              │      │
│  │ • HDMI              │          │ • M.2               │      │
│  │ • DisplayPort       │          │ • PCIe              │      │
│  │ • Thunderbolt       │          │ • Ranuras RAM       │      │
│  │ • Ethernet (RJ45)   │          │ • Socket CPU        │      │
│  │ • Audio (jack)      │          │                     │      │
│  └─────────────────────┘          └─────────────────────┘      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### USB (Universal Serial Bus)

#### Versiones USB

| Versión | Velocidad Máx. | Nombre | Conector |
|---------|----------------|--------|----------|
| **USB 2.0** | 480 Mbit/s | High Speed | Type-A, Mini, Micro |
| **USB 3.0** | 5 Gbit/s | SuperSpeed | Type-A (azul), Type-C |
| **USB 3.1** | 10 Gbit/s | SuperSpeed+ | Type-A, Type-C |
| **USB 3.2** | 20 Gbit/s | SuperSpeed 20 | Type-C |
| **USB4** | 40-80 Gbit/s | USB4 | Type-C |

#### Tipos de Conectores USB

```
┌────────────────────────────────────────────────────────────────┐
│                    CONECTORES USB                              │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Type-A         Type-B         Type-C         Micro-USB       │
│   ┌────┐         ┌────┐         ┌────┐         ┌────┐         │
│   │    │         │ ██ │         │    │         │____│         │
│   │    │         └────┘         └────┘         └────┘         │
│   └────┘                                                       │
│   Puerto         Impresora      Moderno,       Smartphones     │
│   estándar PC    Escáner        reversible     (obsoleto)      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### Códigos de Color USB

| Color | Versión USB |
|-------|-------------|
| Negro/Blanco | USB 2.0 |
| Azul | USB 3.0 |
| Verde azulado | USB 3.1 |
| Rojo | USB con carga rápida |
| Amarillo | Always-On (carga en standby) |

---

### Interfaces de Video

| Interfaz | Tipo | Resolución Máx. | Audio |
|----------|------|-----------------|-------|
| **VGA** | Analógico | 2048×1536 | No |
| **DVI** | Digital/Analógico | 2560×1600 | No |
| **HDMI** | Digital | 8K@60Hz (2.1) | Sí |
| **DisplayPort** | Digital | 8K@60Hz | Sí |
| **Thunderbolt** | Digital | 8K | Sí + Datos |

```
┌────────────────────────────────────────────────────────────────┐
│              INTERFACES DE VIDEO                               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   VGA (obsoleto)   DVI           HDMI         DisplayPort     │
│   ┌──────────┐     ┌────┐       ┌────┐         ┌────┐        │
│   │ ●●●●●●●● │     │████│       │    │         │ ┐ │        │
│   │ ●●●●●●●● │     │████│       │    │         │   │        │
│   │ ●●●●●●●● │     │████│       └────┘         └───┘        │
│   └──────────┘     └────┘                                     │
│                                                                │
│   Analógico,       Grande,      Estándar,     Profesional,   │
│   en desuso        obsoleto     Consumidor    Gaming          │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Interfaces Internas

#### SATA (Serial ATA)

| Versión | Velocidad |
|---------|-----------|
| SATA I | 1,5 Gbit/s (150 MB/s) |
| SATA II | 3 Gbit/s (300 MB/s) |
| **SATA III** | 6 Gbit/s (600 MB/s) |

Uso: Discos duros (HDD, SSD), unidades ópticas

#### M.2

**M.2** es un factor de forma compacto para SSDs y otros componentes.

| Tipo M.2 | Interfaz | Velocidad |
|----------|----------|-----------|
| M.2 SATA | SATA | hasta 600 MB/s |
| M.2 NVMe | PCIe | hasta 7.000+ MB/s |

**Nota:** ¡Las ranuras M.2 pueden ser SATA o NVMe - verifica la compatibilidad!

#### PCIe (PCI Express)

| Generación | Ancho de Banda por Carril |
|------------|---------------------------|
| PCIe 3.0 | 1 GB/s |
| PCIe 4.0 | 2 GB/s |
| PCIe 5.0 | 4 GB/s |

Uso: Tarjetas gráficas (x16), SSDs NVMe (x4), tarjetas de red (x1)

---

### Interfaces de Red

| Interfaz | Velocidad | Uso |
|----------|-----------|-----|
| **Ethernet (RJ45)** | 100 Mbit - 10 Gbit | Conexión LAN |
| **WLAN** | hasta 9,6 Gbit/s (Wi-Fi 6) | Inalámbrico |
| **Bluetooth** | hasta 50 Mbit/s (5.0) | Corto alcance |

---

### Thunderbolt

**Thunderbolt** es una interfaz de alta velocidad de Intel/Apple.

| Versión | Velocidad | Conector |
|---------|-----------|----------|
| Thunderbolt 1/2 | 20 Gbit/s | Mini DisplayPort |
| Thunderbolt 3 | 40 Gbit/s | USB-C |
| Thunderbolt 4 | 40 Gbit/s | USB-C |

Thunderbolt puede: Conectar video, datos, alimentación y dispositivos PCIe.

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **USB** | Universal Serial Bus |
| **HDMI** | High Definition Multimedia Interface |
| **DisplayPort** | Interfaz de video digital |
| **SATA** | Serial ATA (interfaz de disco duro) |
| **M.2** | Factor de forma compacto para SSDs |
| **NVMe** | Non-Volatile Memory Express |
| **PCIe** | PCI Express (tarjetas de expansión) |
| **Thunderbolt** | Interfaz universal de alta velocidad |

---

## Consejos para el Examen

### Preguntas Comunes de Examen

- ¿Qué es USB y qué versiones existen?
- Diferencia entre HDMI y DisplayPort
- ¿Qué es M.2?
- ¿Qué velocidad tiene USB 3.0?

### Importante Recordar

- **USB 3.0** = 5 Gbit/s = puerto azul
- **HDMI** = Estándar para consumidor, **DisplayPort** = Gaming/Profesional
- **M.2** = Factor de forma, puede ser SATA o NVMe
- **Thunderbolt 3/4** = Conector USB-C, pero 40 Gbit/s

---

## Ejercicios Prácticos

### Ejercicio 1
¿Qué versión USB tiene una tasa de transferencia máxima de 5 Gbit/s?

**Solución:** **USB 3.0** (SuperSpeed) tiene una velocidad máxima de 5 Gbit/s. Los puertos USB 3.0 a menudo están marcados en azul.

### Ejercicio 2
¿Cuál es la diferencia entre HDMI y DisplayPort?

**Solución:**
| Aspecto | HDMI | DisplayPort |
|---------|------|-------------|
| **Uso Principal** | Consumidor (TV, cine en casa) | Profesional/Gaming (Monitor) |
| **Multi-Monitor** | Limitado | Daisy-chain posible |
| **Audio** | Sí | Sí |
| **Licencias** | Sí | No |

### Ejercicio 3
¿Qué es M.2 y qué dos interfaces pueden usar los SSDs M.2?

**Solución:** **M.2** es un factor de forma compacto para tarjetas de expansión, principalmente SSDs.

Los SSDs M.2 pueden usar:
1. **SATA:** Hasta 600 MB/s, compatible con sistemas antiguos
2. **NVMe (vía PCIe):** Hasta 7.000+ MB/s, significativamente más rápido

---

## Referencias Cruzadas

- [05-02-03 Almacenamiento](./05-02-03-storage-hdd-ssd.md) - SATA y NVMe
- [07-01-03 Protocolos](../../07-networks/07-01-network-fundamentals/07-01-03-protocols.md) - Ethernet
- [05-02-06 Tarjetas Gráficas](./05-02-06-graphics-cards.md) - PCIe para GPUs
