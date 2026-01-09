# NAS y Disponibilidad

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Explicar el término NAS
- Comprender las ventajas del NAS para la disponibilidad
- Conocer las diferencias con el almacenamiento directo
- Describir casos de uso

**Nota:** ¡NAS reemplaza a RAID/SAN en el catálogo del examen 2025 como tema de disponibilidad!

---

## Contenido Principal

### ¿Qué es un NAS?

**NAS (Network Attached Storage / Almacenamiento Conectado a la Red)** es un dispositivo de almacenamiento accesible a través de la red que proporciona archivos a múltiples usuarios.

```
┌─────────────────────────────────────────────────────────────────┐
│                    NAS en la RED                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌─────────┐     ┌─────────┐     ┌─────────┐                  │
│   │   PC    │     │ Laptop  │     │ Tablet  │                  │
│   └────┬────┘     └────┬────┘     └────┬────┘                  │
│        │               │               │                        │
│        └───────────────┼───────────────┘                        │
│                        │                                        │
│                  ┌─────┴─────┐                                  │
│                  │  Switch   │                                  │
│                  └─────┬─────┘                                  │
│                        │                                        │
│                  ┌─────┴─────┐                                  │
│                  │           │                                  │
│                  │    NAS    │ ◄── Almacenamiento central de red│
│                  │           │                                  │
│                  │ ┌───┐┌───┐│                                  │
│                  │ │HDD││HDD││ ◄── Múltiples discos duros      │
│                  │ └───┘└───┘│                                  │
│                  └───────────┘                                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Ventajas del NAS

| Ventaja | Descripción |
|---------|-------------|
| **Almacenamiento Central** | Todos los datos en un lugar |
| **Acceso por Red** | Accesible desde cualquier dispositivo en la red |
| **Respaldo de Datos** | Funciones de respaldo integradas |
| **Redundancia** | Mediante múltiples discos duros |
| **Derechos de Usuario** | Control de acceso posible |
| **Acceso Remoto** | También accesible desde el exterior |

---

### Funciones NAS para Disponibilidad

```
┌─────────────────────────────────────────────────────────────────┐
│           NAS PARA DISPONIBILIDAD                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │               REDUNDANCIA DE DATOS                        │  │
│  │  • Múltiples discos duros almacenan los mismos datos     │  │
│  │  • Si falla un disco: Datos aún disponibles              │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │               HOT-SWAP                                    │  │
│  │  • Los discos duros pueden reemplazarse en operación     │  │
│  │  • Sin tiempo de inactividad durante la reparación       │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │               INTEGRACIÓN DE RESPALDO                     │  │
│  │  • Respaldos automáticos a medios externos               │  │
│  │  • Sincronización en la nube                             │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │               FUNCIÓN DE INSTANTÁNEAS                     │  │
│  │  • Instantáneas de datos en un momento específico        │  │
│  │  • Recuperación de versiones anteriores                  │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Comparación: Conectividad de Almacenamiento

| Tipo | Descripción | Acceso |
|------|-------------|--------|
| **DAS** | Direct Attached Storage (directamente al PC) | Un dispositivo |
| **NAS** | Network Attached Storage | Por red (nivel de archivo) |
| **SAN** | Storage Area Network | Por red (nivel de bloque) |

```
┌────────────────────────────────────────────────────────────────┐
│              CONECTIVIDAD DE ALMACENAMIENTO                    │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  DAS (Direct Attached Storage)                                 │
│  ┌──────┐                                                      │
│  │  PC  │────[USB/SATA]────[HDD]                              │
│  └──────┘                                                      │
│  → Solo un PC tiene acceso                                     │
│                                                                │
│  NAS (Network Attached Storage)                                │
│  ┌──────┐                                                      │
│  │  PC  │────┐                                                 │
│  └──────┘    │                                                 │
│  ┌──────┐    ├──[Red]──[NAS]                                  │
│  │  PC  │────┘                                                 │
│  └──────┘                                                      │
│  → Múltiples PCs tienen acceso vía SMB/NFS                     │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Protocolos NAS

| Protocolo | Descripción | Plataforma |
|-----------|-------------|------------|
| **SMB/CIFS** | Server Message Block | Windows, macOS, Linux |
| **NFS** | Network File System | Linux/Unix |
| **AFP** | Apple Filing Protocol | macOS (obsoleto) |
| **iSCSI** | Nivel de bloque sobre red | Todos |

---

### Casos de Uso

| Escenario | Descripción |
|-----------|-------------|
| **Pequeñas Empresas** | Almacenamiento central de archivos para todos los empleados |
| **Red Doméstica** | Servidor multimedia, respaldo para todos los dispositivos |
| **Destino de Respaldo** | Regla 3-2-1: Copia en NAS |
| **Colaboración** | Acceso compartido a archivos de proyecto |
| **Archivado** | Almacenamiento a largo plazo |

---

### NAS y la Regla de Respaldo 3-2-1

```
┌────────────────────────────────────────────────────────────────┐
│              RESPALDO 3-2-1 CON NAS                            │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  3: Tres copias de los datos                                   │
│     [Original en PC] [Respaldo en NAS] [Respaldo en Nube]      │
│                                                                │
│  2: En dos tipos de medios diferentes                          │
│     [PC-SSD] y [NAS-HDD] y [Nube]                             │
│                                                                │
│  1: Una copia fuera del sitio                                  │
│     [Respaldo en nube] o [Respaldo externo en casa de familiar]│
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **NAS** | Network Attached Storage |
| **DAS** | Direct Attached Storage |
| **SMB** | Server Message Block (protocolo) |
| **NFS** | Network File System (protocolo) |
| **Hot-Swap** | Reemplazo durante operación |
| **Instantánea** | Copia del estado de datos en un momento específico |
| **Redundancia** | Datos almacenados múltiples veces |

---

## Consejos para el Examen

### Preguntas Comunes de Examen

- ¿Qué es un NAS?
- ¿Cómo soporta un NAS la disponibilidad de datos?
- ¿Cuál es la diferencia entre DAS y NAS?
- ¿Qué protocolos se usan para NAS?

### Importante Recordar

- **NAS** = Almacenamiento en red para múltiples usuarios
- **Disponibilidad** mediante redundancia y hot-swap
- **SMB** para Windows, **NFS** para Linux
- NAS es ideal para respaldos centrales

---

## Ejercicios Prácticos

### Ejercicio 1
¿Qué es un NAS y para qué se usa?

**Solución:** Un **NAS (Network Attached Storage)** es un dispositivo de almacenamiento accesible a través de la red. Sirve como ubicación central de almacenamiento para archivos a los que múltiples usuarios pueden acceder simultáneamente. Los casos de uso típicos incluyen compartir archivos, respaldos y servidores multimedia.

### Ejercicio 2
¿Cómo contribuye un NAS a la disponibilidad de datos?

**Solución:** Un NAS aumenta la disponibilidad mediante:
1. **Redundancia:** Múltiples discos duros almacenan los mismos datos
2. **Hot-Swap:** Los discos defectuosos pueden reemplazarse durante la operación
3. **Instantáneas:** Pueden recuperarse versiones anteriores de datos
4. **Integración de respaldo:** Respaldos automáticos a otros medios

### Ejercicio 3
¿Cuál es la diferencia entre DAS y NAS?

**Solución:**
- **DAS (Direct Attached Storage):** El almacenamiento está conectado directamente a una computadora (ej., disco duro USB). Solo esta computadora tiene acceso.
- **NAS (Network Attached Storage):** El almacenamiento es accesible a través de la red. Múltiples computadoras pueden acceder simultáneamente.

### Ejercicio 4
¿Qué protocolos se usan para el acceso a NAS?

**Solución:**
- **SMB/CIFS:** Estándar para Windows, también macOS y Linux
- **NFS:** Estándar para sistemas Linux/Unix
- **AFP:** Para sistemas macOS más antiguos (obsoleto)
- **iSCSI:** Para acceso a nivel de bloque

---

## Referencias Cruzadas

- [04-01-01 Tríada CIA](../../04-it-security/04-01-protection-goals/04-01-01-cia-triad.md) - Disponibilidad
- [05-02-03 Almacenamiento](./05-02-03-storage-hdd-ssd.md) - HDD y SSD
- [05-05-02 Estrategias de Respaldo](../05-05-data-backup/05-05-02-backup-strategies.md) - Regla 3-2-1
