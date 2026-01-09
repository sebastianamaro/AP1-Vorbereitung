# Virtualización

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Explicar el concepto de virtualización
- Distinguir entre diferentes tipos de virtualización
- Conocer ventajas y desventajas
- Comprender los tipos de hipervisores

---

## Contenido Principal

### ¿Qué es la Virtualización?

La **virtualización** permite que múltiples computadoras virtuales (VMs) funcionen en una sola computadora física. Cada VM se comporta como una computadora independiente.

```
┌─────────────────────────────────────────────────────────────────┐
│                    VIRTUALIZACIÓN                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Sin Virtualización:           Con Virtualización:             │
│                                                                 │
│  ┌─────────┐                  ┌─────────────────────────────┐  │
│  │Servidor1│                  │       Servidor Físico        │  │
│  │(Físico) │                  │  ┌─────┐ ┌─────┐ ┌─────┐   │  │
│  └─────────┘                  │  │ VM1 │ │ VM2 │ │ VM3 │   │  │
│  ┌─────────┐                  │  │Win- │ │Linux│ │Win- │   │  │
│  │Servidor2│                  │  │dows │ │     │ │dows │   │  │
│  │(Físico) │                  │  └─────┘ └─────┘ └─────┘   │  │
│  └─────────┘                  │        Hipervisor           │  │
│  ┌─────────┐                  │        Hardware             │  │
│  │Servidor3│                  └─────────────────────────────┘  │
│  │(Físico) │                                                   │
│  └─────────┘                  → ¡Un servidor en lugar de tres! │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Términos Básicos

| Término | Descripción |
|---------|-------------|
| **Host** | La computadora física (sistema anfitrión) |
| **Guest** | La máquina virtual |
| **Hipervisor** | Software que habilita la virtualización |
| **VM (Máquina Virtual)** | Computadora simulada |
| **Instantánea** | Imagen de una VM en un momento específico |

---

### Tipos de Hipervisores

```
┌────────────────────────────────────────────────────────────────┐
│                  TIPOS DE HIPERVISORES                         │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  TIPO 1 (Bare-Metal)              TIPO 2 (Hosted)             │
│                                                                │
│  ┌─────┐ ┌─────┐ ┌─────┐       ┌─────┐ ┌─────┐              │
│  │ VM1 │ │ VM2 │ │ VM3 │       │ VM1 │ │ VM2 │              │
│  └─────┘ └─────┘ └─────┘       └─────┘ └─────┘              │
│  ┌──────────────────────┐      ┌──────────────────────┐      │
│  │     Hipervisor       │      │     Hipervisor       │      │
│  └──────────────────────┘      └──────────────────────┘      │
│  ┌──────────────────────┐      ┌──────────────────────┐      │
│  │      Hardware        │      │  Sistema Operativo   │      │
│  └──────────────────────┘      │   (Windows/Linux)    │      │
│                                └──────────────────────┘      │
│  Ejemplos:                     ┌──────────────────────┐      │
│  • VMware ESXi                 │      Hardware        │      │
│  • Microsoft Hyper-V           └──────────────────────┘      │
│  • Citrix XenServer                                          │
│                                Ejemplos:                      │
│  → Directamente en hardware    • VMware Workstation          │
│  → Mejor rendimiento           • VirtualBox                  │
│                                • Parallels (Mac)             │
│                                                               │
│                                → En sistema operativo        │
│                                → Más fácil de usar           │
│                                                               │
└────────────────────────────────────────────────────────────────┘
```

| Tipo | Descripción | Ejemplos | Caso de Uso |
|------|-------------|----------|-------------|
| **Tipo 1** | Se ejecuta directamente en hardware | VMware ESXi, Hyper-V, XenServer | Centros de datos, servidores |
| **Tipo 2** | Se ejecuta en sistema operativo | VirtualBox, VMware Workstation | Desarrollo, pruebas |

---

### Ventajas de la Virtualización

| Ventaja | Descripción |
|---------|-------------|
| **Eficiencia de recursos** | Mejor utilización del hardware |
| **Ahorro de costos** | Se necesitan menos servidores físicos |
| **Aislamiento** | Las VMs están separadas entre sí |
| **Flexibilidad** | Crear nuevas VMs rápidamente |
| **Instantáneas** | Respaldo y recuperación fáciles |
| **Entornos de prueba** | Pruebas seguras |
| **Migración** | Las VMs pueden moverse entre hosts |

---

### Desventajas de la Virtualización

| Desventaja | Descripción |
|------------|-------------|
| **Sobrecarga** | El hipervisor requiere recursos |
| **Complejidad** | Capa de gestión adicional |
| **Costos de licencia** | Las licencias de hipervisor pueden ser costosas |
| **Punto único de fallo** | El fallo del host afecta todas las VMs |
| **Rendimiento** | Ligeramente menor que servidores físicos |

---

### Tipos de Virtualización

| Tipo | Descripción |
|------|-------------|
| **Virtualización de servidores** | Múltiples servidores en un host |
| **Virtualización de escritorio** | Estaciones de trabajo virtuales (VDI) |
| **Virtualización de aplicaciones** | Ejecutar aplicaciones en aislamiento |
| **Virtualización de red** | Redes virtuales (VLAN, SDN) |
| **Virtualización de almacenamiento** | Agrupación de almacenamiento |

---

### Contenedor vs. Máquina Virtual

```
┌────────────────────────────────────────────────────────────────┐
│               VM vs. CONTENEDOR                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Máquina Virtual              Contenedor                       │
│                                                                │
│  ┌─────┐ ┌─────┐ ┌─────┐       ┌─────┐ ┌─────┐ ┌─────┐      │
│  │App 1│ │App 2│ │App 3│       │App 1│ │App 2│ │App 3│      │
│  ├─────┤ ├─────┤ ├─────┤       └─────┘ └─────┘ └─────┘      │
│  │Guest│ │Guest│ │Guest│       ┌────────────────────────┐    │
│  │ OS  │ │ OS  │ │ OS  │       │   Container Runtime    │    │
│  └─────┘ └─────┘ └─────┘       │      (Docker)          │    │
│  ┌──────────────────────┐      └────────────────────────┘    │
│  │     Hipervisor       │      ┌────────────────────────┐    │
│  └──────────────────────┘      │     Host OS            │    │
│  ┌──────────────────────┐      └────────────────────────┘    │
│  │      Hardware        │      ┌────────────────────────┐    │
│  └──────────────────────┘      │      Hardware          │    │
│                                └────────────────────────┘    │
│  + Aislamiento completo                                       │
│  + SO diferente posible        + Ligero (MB)                  │
│  - Intensivo en recursos (GB)  + Inicio más rápido            │
│  - Inicio más lento            - SO host compartido           │
│                                                               │
└────────────────────────────────────────────────────────────────┘
```

| Aspecto | VM | Contenedor |
|---------|-----|-----------|
| **Tamaño** | GB (SO guest) | MB |
| **Tiempo de inicio** | Minutos | Segundos |
| **Aislamiento** | Completo | Nivel de proceso |
| **SO** | Cualquiera | Kernel compartido |
| **Ejemplos** | VirtualBox, VMware | Docker, Podman |

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Virtualización** | Múltiples computadoras virtuales en un hardware |
| **Hipervisor** | Software que gestiona VMs |
| **VM** | Máquina Virtual |
| **Host** | Computadora física |
| **Guest** | Máquina virtual |
| **Instantánea** | Imagen de una VM en un momento específico |
| **Contenedor** | Aislamiento ligero (Docker) |

---

## Consejos para el Examen

### Preguntas Comunes de Examen

- ¿Qué es la virtualización?
- ¿Cuál es la diferencia entre hipervisor Tipo 1 y Tipo 2?
- Nombra ventajas de la virtualización
- ¿Cuál es la diferencia entre VM y contenedor?

### Importante Recordar

- **Tipo 1** = directamente en hardware (servidor), **Tipo 2** = en sistema operativo (escritorio)
- **Ventajas:** Eficiencia, aislamiento, instantáneas, flexibilidad
- **Contenedor** = ligero, inicio más rápido, pero kernel compartido
- **VM** = aislamiento completo, sistema operativo propio

---

## Ejercicios Prácticos

### Ejercicio 1
¿Cuál es la diferencia entre un hipervisor Tipo 1 y un Tipo 2?

**Solución:**
- **Tipo 1 (Bare-Metal):** Se ejecuta directamente en el hardware sin sistema operativo. Ejemplos: VMware ESXi, Hyper-V. Mejor rendimiento, para servidores.
- **Tipo 2 (Hosted):** Se ejecuta en un sistema operativo como Windows o Linux. Ejemplos: VirtualBox, VMware Workstation. Más fácil de usar, para desarrollo.

### Ejercicio 2
Nombra tres ventajas de la virtualización.

**Solución:**
1. **Eficiencia de recursos:** Mejor utilización del hardware
2. **Ahorro de costos:** Se necesitan menos servidores físicos
3. **Flexibilidad:** Creación y eliminación rápida de VMs

(Adicional: Aislamiento, instantáneas, migración fácil)

### Ejercicio 3
¿Cuál es la diferencia entre una VM y un contenedor?

**Solución:**
| Aspecto | VM | Contenedor |
|---------|-----|-----------|
| **Sistema operativo** | SO guest propio | Kernel host compartido |
| **Tamaño** | Varios GB | Pocos MB |
| **Tiempo de inicio** | Minutos | Segundos |
| **Aislamiento** | Completo | Nivel de proceso |

---

## Referencias Cruzadas

- [05-04-02 Computación en la Nube](./05-04-02-cloud-computing.md) - Servicios en la nube
- [05-04-03 Escritorios Virtuales](./05-04-03-virtual-desktops.md) - VDI
- [05-03-01 Fundamentos de Sistemas Operativos](../05-03-operating-systems/05-03-01-fundamentals-operating-systems.md) - SO
