# Escritorios Virtuales (VDI)

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Explicar el concepto de escritorios virtuales
- Distinguir VDI de estaciones de trabajo tradicionales
- Conocer ventajas y desventajas
- Describir escenarios de casos de uso

---

## Contenido Principal

### ¿Qué son los Escritorios Virtuales?

Los **Escritorios Virtuales (VDI - Virtual Desktop Infrastructure)** permiten que las estaciones de trabajo se operen centralmente en el centro de datos o la nube. Los usuarios acceden a su escritorio mediante thin clients o cualquier dispositivo.

```
┌─────────────────────────────────────────────────────────────────┐
│                  ESCRITORIO VIRTUAL (VDI)                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │              CENTRO DE DATOS / NUBE                      │  │
│   │   ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐      │  │
│   │   │Escrit. 1│ │Escrit. 2│ │Escrit. 3│ │Escrit. 4│      │  │
│   │   │  (VM)   │ │  (VM)   │ │  (VM)   │ │  (VM)   │      │  │
│   │   └─────────┘ └─────────┘ └─────────┘ └─────────┘      │  │
│   │                    Servidor / Hipervisor                 │  │
│   └─────────────────────────────────────────────────────────┘  │
│                              │                                  │
│                         ┌────┴────┐                            │
│                         │   Red   │                            │
│                         └────┬────┘                            │
│                              │                                  │
│       ┌──────────────────────┼──────────────────────┐          │
│       │                      │                      │          │
│   ┌───┴───┐            ┌─────┴─────┐          ┌────┴────┐     │
│   │ Thin  │            │  Laptop   │          │ Tablet  │     │
│   │Client │            │  (Casa)   │          │         │     │
│   └───────┘            └───────────┘          └─────────┘     │
│   Oficina              Teletrabajo            En movimiento    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Terminología

| Término | Descripción |
|---------|-------------|
| **VDI** | Virtual Desktop Infrastructure |
| **Thin Client** | Dispositivo terminal simple sin potencia de cómputo propia |
| **Fat Client** | PC completo con procesamiento local |
| **DaaS** | Desktop as a Service (VDI basado en nube) |
| **Basado en sesión** | Múltiples usuarios comparten un SO de servidor |

---

### Arquitectura VDI

```
┌────────────────────────────────────────────────────────────────┐
│                   ARQUITECTURA VDI                             │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  ┌────────────────────────────────────────────────────────┐   │
│  │                 Capa de Gestión                         │   │
│  │   (Aprovisionamiento, gestión de usuarios, monitoreo)  │   │
│  └────────────────────────────────────────────────────────┘   │
│                            │                                   │
│  ┌────────────────────────────────────────────────────────┐   │
│  │                 Connection Broker                       │   │
│  │          (Conecta usuarios a escritorios)              │   │
│  └────────────────────────────────────────────────────────┘   │
│                            │                                   │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐          │
│  │ Servidor VDI │ │ Servidor VDI │ │ Servidor VDI │          │
│  │  (VMs)       │ │  (VMs)       │ │  (VMs)       │          │
│  └──────────────┘ └──────────────┘ └──────────────┘          │
│                            │                                   │
│  ┌────────────────────────────────────────────────────────┐   │
│  │            Almacenamiento Compartido (SAN/NAS)          │   │
│  │         (Perfiles, datos, imágenes de VM)              │   │
│  └────────────────────────────────────────────────────────┘   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Comparación: Tradicional vs. VDI

| Aspecto | PC Tradicional | VDI |
|---------|----------------|-----|
| **Ubicación de datos** | Localmente en PC | Centralmente en centro de datos |
| **Hardware** | PC completo | Thin client suficiente |
| **Mantenimiento** | Cada PC individualmente | Centralmente, una vez |
| **Seguridad** | Datos en dispositivo | Datos en CD, dispositivo reemplazable |
| **Acceso** | Solo en PC | Desde cualquier lugar |
| **Costos de hardware** | Mayores (por PC) | Menores (thin clients) |
| **Costos de infraestructura** | Menores | Mayores (servidores, licencias) |

---

### Modelos de Aprovisionamiento de Escritorios

| Modelo | Descripción | Caso de Uso |
|--------|-------------|-------------|
| **Escritorio Persistente** | Escritorio dedicado por usuario, retiene cambios | Usuarios avanzados |
| **No Persistente** | El escritorio se reinicia al cerrar sesión | Estaciones de trabajo estándar |
| **Basado en sesión** | Múltiples usuarios en un SO de servidor | Call centers, formación |

---

### Ventajas de VDI

| Ventaja | Descripción |
|---------|-------------|
| **Gestión central** | Actualizaciones, software instalado solo una vez |
| **Seguridad** | Los datos permanecen en el centro de datos |
| **Flexibilidad** | Acceso desde cualquier lugar, cualquier dispositivo |
| **BYOD** | Los empleados pueden usar sus propios dispositivos |
| **Recuperación ante desastres** | Imágenes de escritorio respaldadas fácilmente |
| **Mayor vida útil del hardware** | Los thin clients tienen larga vida útil |

---

### Desventajas de VDI

| Desventaja | Descripción |
|------------|-------------|
| **Dependencia de red** | Sin red, sin trabajo |
| **Costos iniciales** | Servidores, licencias, infraestructura |
| **Complejidad** | Planificación y operación más complejas |
| **Latencia** | Notable con mala conexión |
| **Apps intensivas en gráficos** | Uso limitado de GPU |

---

### Soluciones VDI

| Proveedor | Producto | Característica Especial |
|-----------|----------|-------------------------|
| **VMware** | Horizon | Líder del mercado on-premise |
| **Citrix** | Virtual Apps and Desktops | Fuerte en basado en sesión |
| **Microsoft** | Azure Virtual Desktop | Nativo en nube |
| **Amazon** | WorkSpaces | AWS DaaS |

---

### Desktop as a Service (DaaS)

**DaaS** es VDI desde la nube - el proveedor opera toda la infraestructura.

| Aspecto | VDI (On-Premise) | DaaS (Nube) |
|---------|------------------|-------------|
| **Infraestructura** | Auto-operada | Por proveedor |
| **Costos** | Inversión | Cuota mensual |
| **Escalado** | Debe planificarse | Flexible |
| **Mantenimiento** | TI propia | Proveedor |

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **VDI** | Virtual Desktop Infrastructure |
| **Thin Client** | Terminal simple, solo muestra escritorio remoto |
| **DaaS** | Desktop as a Service |
| **Persistente** | El escritorio retiene cambios |
| **No Persistente** | El escritorio se reinicia |
| **Connection Broker** | Conecta usuarios a VMs |

---

## Consejos para el Examen

### Preguntas Comunes de Examen

- ¿Qué es VDI?
- ¿Cuál es la diferencia entre thin client y fat client?
- Nombra ventajas y desventajas de VDI
- ¿Qué significa DaaS?

### Importante Recordar

- **VDI** = Los escritorios funcionan centralmente, el usuario accede remotamente
- **Thin Client** = dispositivo simple sin procesamiento local
- **Ventajas:** Gestión central, seguridad, flexibilidad
- **Desventajas:** Dependencia de red, costos iniciales
- **DaaS** = VDI desde la nube

---

## Ejercicios Prácticos

### Ejercicio 1
¿Cuál es la diferencia entre un thin client y un fat client?

**Solución:**
- **Thin Client:** Dispositivo terminal simple con hardware mínimo (sin sistema operativo propio para aplicaciones). Solo muestra el escritorio remoto, todos los cálculos ocurren en el servidor.
- **Fat Client:** PC completo con sistema operativo y aplicaciones propias. El procesamiento ocurre localmente.

### Ejercicio 2
Una empresa con 500 empleados está considerando cambiar a VDI. Nombra dos ventajas y dos desafíos.

**Solución:**

**Ventajas:**
1. **Gestión central:** Las actualizaciones y software solo necesitan instalarse una vez en la imagen maestra
2. **Seguridad:** Los datos permanecen en el centro de datos, los dispositivos perdidos no son un problema de protección de datos

**Desafíos:**
1. **Costos iniciales:** Se requiere actualización de servidores, almacenamiento, licencias, red
2. **Dependencia de red:** Los empleados no pueden trabajar sin conexión de red

### Ejercicio 3
¿Qué significa "Escritorio No Persistente" y para qué escenarios es adecuado?

**Solución:** Un **Escritorio No Persistente** se reinicia a su estado original después de cada cierre de sesión. Los cambios del usuario se pierden.

Adecuado para:
- **Call centers:** Estaciones de trabajo estandarizadas
- **Formación:** Siempre el mismo punto de partida
- **Terminales públicos:** No quedan datos de usuario
- **Estaciones de trabajo de oficina estándar:** Donde no se necesitan personalizaciones individuales

---

## Referencias Cruzadas

- [05-04-01 Virtualización](./05-04-01-virtualization.md) - Fundamentos
- [05-04-02 Computación en la Nube](./05-04-02-cloud-computing.md) - DaaS como servicio en la nube
- [04-01-01 Tríada CIA](../../04-it-security/04-01-protection-goals/04-01-01-cia-triad.md) - Seguridad mediante almacenamiento central de datos
