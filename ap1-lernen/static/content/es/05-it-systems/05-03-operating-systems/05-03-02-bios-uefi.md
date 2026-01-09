# BIOS y UEFI

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Conocer la diferencia entre BIOS y UEFI
- Explicar las tareas de BIOS/UEFI
- Comprender el proceso de arranque
- Conocer las características de seguridad de UEFI

---

## Contenido Principal

### ¿Qué es BIOS/UEFI?

**BIOS** (Basic Input/Output System) y **UEFI** (Unified Extensible Firmware Interface) son firmware que se inicia primero cuando se enciende la computadora e inicializa el hardware.

```
┌─────────────────────────────────────────────────────────────────┐
│                    PROCESO DE ARRANQUE                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   1. Encendido                                                  │
│      ↓                                                          │
│   2. BIOS/UEFI inicia (Firmware)                               │
│      ↓                                                          │
│   3. POST (Power-On Self-Test)                                 │
│      ↓                                                          │
│   4. Inicializar hardware                                       │
│      ↓                                                          │
│   5. Encontrar dispositivo de arranque                         │
│      ↓                                                          │
│   6. Cargar cargador de arranque                               │
│      ↓                                                          │
│   7. Iniciar sistema operativo                                 │
│      ↓                                                          │
│   8. Sistema listo                                              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### BIOS (Legado)

**BIOS** es la tecnología de firmware más antigua (desde 1975).

| Propiedad | BIOS |
|-----------|------|
| **Interfaz** | Basada en texto |
| **Control** | Solo teclado |
| **Tabla de Particiones** | MBR (Master Boot Record) |
| **Tamaño Máx. de Disco Duro** | 2,2 TB |
| **Particiones Máx.** | 4 primarias |
| **Modo de Arranque** | Modo Real de 16 bits |
| **Seguridad** | Limitada |

---

### UEFI (Moderno)

**UEFI** es el sucesor moderno del BIOS (desde ~2010).

| Propiedad | UEFI |
|-----------|------|
| **Interfaz** | Gráfica (GUI) |
| **Control** | Ratón + Teclado |
| **Tabla de Particiones** | GPT (GUID Partition Table) |
| **Tamaño Máx. de Disco Duro** | 9,4 ZB (Zettabyte) |
| **Particiones Máx.** | 128+ |
| **Modo de Arranque** | 32/64 bits |
| **Seguridad** | Secure Boot |

---

### Comparación: BIOS vs. UEFI

```
┌────────────────────────────────────────────────────────────────┐
│                   BIOS vs. UEFI                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  BIOS (Legado)                    UEFI (Moderno)              │
│  ┌─────────────────────┐         ┌─────────────────────┐      │
│  │ ████████████████████│         │ ┌────┐  ┌────┐     │      │
│  │ █ BIOS Setup      █│         │ │    │  │    │ GUI │      │
│  │ █ ──────────────  █│         │ └────┘  └────┘     │      │
│  │ █ > Boot Order    █│         │ ╔═══════════════╗  │      │
│  │ █ > Date/Time     █│         │ ║Opciones de    ║  │      │
│  │ █ > Exit          █│         │ ║Arranque       ║  │      │
│  │ ████████████████████│         │ ╚═══════════════╝  │      │
│  └─────────────────────┘         └─────────────────────┘      │
│  Basado en texto, solo teclado   Gráfico, ratón posible       │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Aspecto | BIOS | UEFI |
|---------|------|------|
| **Tabla de Particiones** | MBR | GPT |
| **Tamaño Máx. HDD** | 2,2 TB | >9 ZB |
| **Tiempo de Arranque** | Más lento | Más rápido |
| **Interfaz** | Texto | Gráfica |
| **Secure Boot** | No | Sí |
| **Arranque por Red** | Limitado | Extensivo |

---

### MBR vs. GPT

| Aspecto | MBR | GPT |
|---------|-----|-----|
| **Nombre Completo** | Master Boot Record | GUID Partition Table |
| **Tamaño Máx. Disco Duro** | 2,2 TB | 9,4 ZB |
| **Particiones Máx.** | 4 primarias | 128+ |
| **Redundancia** | Ninguna | Respaldo al final |
| **Soporte UEFI** | Vía CSM | Nativo |

---

### POST (Power-On Self-Test)

**POST** es una auto-prueba durante el arranque del sistema.

```
┌────────────────────────────────────────────────────────────────┐
│                    SECUENCIA POST                              │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  1. Verificar CPU                                              │
│     ↓                                                          │
│  2. Verificar ROM BIOS/UEFI                                   │
│     ↓                                                          │
│  3. Verificar y contar RAM                                    │
│     ↓                                                          │
│  4. Inicializar tarjeta gráfica                               │
│     ↓                                                          │
│  5. Verificar teclado                                          │
│     ↓                                                          │
│  6. Detectar dispositivos de almacenamiento                   │
│     ↓                                                          │
│  7. POST completado → Cargar sistema operativo                │
│                                                                │
│  En caso de error: Códigos de pitido o mensaje de error       │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

**Códigos de Pitido:** Tonos de señal indican errores (ej., problema de RAM = múltiples pitidos)

---

### Secure Boot

**Secure Boot** es una característica de seguridad de UEFI.

| Aspecto | Descripción |
|---------|-------------|
| **Función** | Verifica firmas digitales durante el arranque |
| **Protege contra** | Bootkits, rootkits, software sin firmar |
| **Certificados** | Microsoft y fabricantes de hardware |
| **Se puede desactivar** | Sí, para sistemas operativos alternativos |

```
┌────────────────────────────────────────────────────────────────┐
│                    SECURE BOOT                                 │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Cargador de          Verificación       Firmware             │
│   arranque             de firma           UEFI                 │
│       │                   │                  │                 │
│       │    ¿Firma?        │                  │                 │
│       ├──────────────────►│                  │                 │
│       │                   │   ¿Válida?       │                 │
│       │                   ├─────────────────►│                 │
│       │                   │                  │                 │
│       │◄─────── SÍ: Arranque permitido ──────│                 │
│       │                   │                  │                 │
│       │◄────── NO: Arranque bloqueado ───────│                 │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Configuración UEFI

| Configuración | Descripción |
|---------------|-------------|
| **Orden de Arranque** | Orden de dispositivos de arranque |
| **Secure Boot** | Activado/Desactivado |
| **CSM** | Compatibility Support Module (modo BIOS) |
| **TPM** | Trusted Platform Module (chip de seguridad) |
| **Fast Boot** | Arranque acelerado |
| **Virtualización** | Intel VT-x / AMD-V |

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **BIOS** | Basic Input/Output System (Firmware legado) |
| **UEFI** | Unified Extensible Firmware Interface |
| **POST** | Power-On Self-Test |
| **MBR** | Master Boot Record (Tabla de particiones legada) |
| **GPT** | GUID Partition Table (Tabla de particiones moderna) |
| **Secure Boot** | Verificación de firmas durante arranque |
| **CSM** | Compatibility Support Module (Emulación BIOS) |
| **Cargador de arranque** | Carga el sistema operativo |

---

## Consejos para el Examen

### Preguntas Comunes de Examen

- ¿Cuál es la diferencia entre BIOS y UEFI?
- ¿Qué es POST?
- ¿Qué es Secure Boot?
- ¿Cuál es la diferencia entre MBR y GPT?

### Importante Recordar

- **BIOS** = antiguo, basado en texto, MBR, máx. 2,2 TB
- **UEFI** = moderno, gráfico, GPT, Secure Boot
- **POST** = Auto-prueba durante arranque del sistema
- **Secure Boot** = Verificación de firmas, protección contra bootkits

---

## Ejercicios Prácticos

### Ejercicio 1
Nombra tres diferencias entre BIOS y UEFI.

**Solución:**
1. **Interfaz:** BIOS es basado en texto, UEFI tiene interfaz gráfica
2. **Tabla de Particiones:** BIOS usa MBR (máx. 2,2 TB), UEFI usa GPT (>9 ZB)
3. **Seguridad:** UEFI ofrece Secure Boot, BIOS no

(Adicional: Velocidad de arranque, soporte de ratón, modo 32/64 bits)

### Ejercicio 2
¿Qué es POST y qué sucede durante él?

**Solución:** **POST (Power-On Self-Test)** es una auto-prueba durante el arranque del sistema. Se verifican los siguientes componentes:
- CPU
- RAM (contada y probada)
- Tarjeta gráfica
- Teclado
- Dispositivos de almacenamiento

En caso de errores, se emiten códigos de pitido (tonos de señal) o se muestran mensajes de error.

### Ejercicio 3
¿Por qué un disco duro de 4 TB no puede utilizarse completamente con particionado MBR?

**Solución:** **MBR (Master Boot Record)** soporta discos duros hasta un máximo de **2,2 TB**. Con un disco duro de 4 TB, 1,8 TB no serían utilizables. Solución: Usar **GPT (GUID Partition Table)**, que soporta discos duros >9 ZB y requiere UEFI.

---

## Referencias Cruzadas

- [05-03-01 Fundamentos de Sistemas Operativos](./05-03-01-fundamentals-operating-systems.md) - Resumen de SO
- [05-02-03 Almacenamiento](../05-02-hardware/05-02-03-storage-hdd-ssd.md) - HDD y SSD
- [04-03-03 Hardening de SO](../../04-it-security/04-03-protective-measures/04-03-03-os-hardening.md) - Secure Boot
