# Fundamentos de Sistemas Operativos

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Conocer las tareas de un sistema operativo
- Distinguir entre diferentes sistemas operativos
- Comprender conceptos básicos
- Seleccionar sistemas operativos para casos de uso

---

## Contenido Principal

### ¿Qué es un Sistema Operativo?

Un **sistema operativo (SO)** es software que gestiona el hardware y proporciona a las aplicaciones una interfaz con el hardware.

```
┌─────────────────────────────────────────────────────────────────┐
│                CAPAS DEL SISTEMA OPERATIVO                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │              APLICACIONES (Programas)                    │   │
│  │         (Word, Navegador, Juegos, ...)                   │   │
│  └─────────────────────────────────────────────────────────┘   │
│                           │                                     │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │               SISTEMA OPERATIVO                          │   │
│  │  ┌────────────────────────────────────────────────────┐ │   │
│  │  │                    Shell                            │ │   │
│  │  │           (Interfaz de Usuario)                     │ │   │
│  │  └────────────────────────────────────────────────────┘ │   │
│  │  ┌────────────────────────────────────────────────────┐ │   │
│  │  │                    Kernel                           │ │   │
│  │  │       (Núcleo - Gestión de Hardware)                │ │   │
│  │  └────────────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────────────┘   │
│                           │                                     │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    HARDWARE                              │   │
│  │         (CPU, RAM, Disco Duro, ...)                      │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Tareas de un Sistema Operativo

| Tarea | Descripción |
|-------|-------------|
| **Gestión de Procesos** | Iniciar, terminar programas, asignar tiempo de CPU |
| **Gestión de Memoria** | Gestionar RAM, proporcionar memoria virtual |
| **Gestión de Archivos** | Sistema de archivos, lectura/escritura de archivos |
| **Gestión de Dispositivos** | Cargar controladores, acceder al hardware |
| **Gestión de Usuarios** | Cuentas de usuario, permisos, inicio de sesión |
| **Gestión de Red** | Conexiones de red, protocolos |

```
┌────────────────────────────────────────────────────────────────┐
│              TAREAS DEL SISTEMA OPERATIVO                      │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │
│  │   Gestión    │  │   Gestión    │  │  Gestión de  │        │
│  │  de Procesos │  │  de Memoria  │  │  Archivos    │        │
│  └──────────────┘  └──────────────┘  └──────────────┘        │
│                                                                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │
│  │  Gestión de  │  │  Gestión de  │  │  Gestión de  │        │
│  │ Dispositivos │  │   Usuarios   │  │     Red      │        │
│  └──────────────┘  └──────────────┘  └──────────────┘        │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Kernel y Shell

| Componente | Descripción |
|------------|-------------|
| **Kernel** | Núcleo del SO, acceso directo al hardware, gestión de recursos |
| **Shell** | Interfaz de usuario (gráfica o línea de comandos) |

**Tipos de Kernel:**
- **Kernel Monolítico:** Todas las funciones en el kernel (Linux, Windows NT)
- **Microkernel:** Kernel mínimo, resto como servicios (Minix, QNX)
- **Kernel Híbrido:** Combinación (Windows, macOS)

---

### Tipos de Sistemas Operativos

| Tipo | Descripción | Ejemplos |
|------|-------------|----------|
| **SO de Escritorio** | Para PCs y laptops | Windows, macOS, Linux |
| **SO de Servidor** | Para servidores | Windows Server, Linux |
| **SO Móvil** | Para smartphones/tablets | Android, iOS |
| **SO Embebido** | Para sistemas embebidos | Linux, RTOS |

---

### Comparación: Windows, Linux, macOS

| Aspecto | Windows | Linux | macOS |
|---------|---------|-------|-------|
| **Fabricante** | Microsoft | Código Abierto | Apple |
| **Licencia** | Propietaria (de pago) | Código Abierto (generalmente gratuito) | Propietaria (vinculada a hardware Apple) |
| **Kernel** | NT (Híbrido) | Linux (Monolítico) | XNU (Híbrido) |
| **GUI** | Windows Shell | GNOME, KDE, etc. | Aqua |
| **CLI** | CMD, PowerShell | Bash, Zsh | Terminal (Zsh) |
| **Cuota de Mercado Escritorio** | ~75% | ~3% | ~15% |
| **Uso en Servidores** | Medio | Muy alto | Bajo |

---

### Sistemas de Archivos

| Sistema de Archivos | Sistema Operativo | Propiedades |
|---------------------|-------------------|-------------|
| **NTFS** | Windows | Permisos, compresión, archivos grandes |
| **FAT32** | Todos | Compatible, máx. 4 GB por archivo |
| **exFAT** | Todos | Para memorias USB, archivos grandes |
| **ext4** | Linux | Estándar en Linux |
| **APFS** | macOS | Optimizado para SSD, cifrado |

---

### Proceso e Hilo

```
┌────────────────────────────────────────────────────────────────┐
│                 PROCESO vs. HILO                               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  PROCESO (espacio de memoria propio)                           │
│  ┌────────────────────────────────────────────────────────┐   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐    │   │
│  │  │   Hilo 1    │  │   Hilo 2    │  │   Hilo 3    │    │   │
│  │  │             │  │             │  │             │    │   │
│  │  └─────────────┘  └─────────────┘  └─────────────┘    │   │
│  │                                                        │   │
│  │  Memoria compartida dentro del proceso                 │   │
│  └────────────────────────────────────────────────────────┘   │
│                                                                │
│  • Proceso = programa en ejecución con espacio de memoria propio│
│  • Hilo = unidad de ejecución ligera dentro de un proceso     │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Término | Descripción |
|---------|-------------|
| **Proceso** | Programa en ejecución con espacio de memoria propio |
| **Hilo** | Hebra de ejecución dentro de un proceso |
| **Multitarea** | Múltiples procesos aparentemente simultáneos |
| **Multihilo** | Múltiples hilos por proceso |

---

### Permisos de Usuario

| Windows | Linux | Descripción |
|---------|-------|-------------|
| Administrador | root | Privilegios completos del sistema |
| Usuario Estándar | user | Privilegios restringidos |
| Invitado | guest | Privilegios mínimos |

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Sistema Operativo** | Software para gestión de hardware |
| **Kernel** | Núcleo del sistema operativo |
| **Shell** | Interfaz de usuario |
| **Proceso** | Programa en ejecución |
| **Hilo** | Hebra de ejecución |
| **Controlador** | Software para control de hardware |
| **Sistema de Archivos** | Organización de archivos (NTFS, ext4) |

---

## Consejos para el Examen

### Preguntas Comunes de Examen

- ¿Cuáles son las tareas de un sistema operativo?
- ¿Cuál es la diferencia entre kernel y shell?
- ¿Cuál es la diferencia entre proceso e hilo?

### Importante Recordar

- **Sistema Operativo** = Interfaz entre hardware y aplicaciones
- **Kernel** = Núcleo, gestiona el hardware
- **Shell** = Interfaz de usuario (GUI o CLI)
- **NTFS** = Windows, **ext4** = Linux

---

## Ejercicios Prácticos

### Ejercicio 1
Nombra cuatro tareas de un sistema operativo.

**Solución:**
1. **Gestión de Procesos:** Iniciar, terminar programas, asignar tiempo de CPU
2. **Gestión de Memoria:** Gestionar RAM, memoria virtual
3. **Gestión de Archivos:** Sistema de archivos, lectura y escritura
4. **Gestión de Dispositivos:** Controladores, acceder al hardware

(Adicional: Gestión de usuarios, Gestión de red)

### Ejercicio 2
¿Cuál es la diferencia entre kernel y shell?

**Solución:**
- **Kernel:** El núcleo del sistema operativo, tiene acceso directo al hardware y gestiona recursos (CPU, RAM, dispositivos)
- **Shell:** La interfaz de usuario a través de la cual el usuario interactúa con el sistema (gráfica como el Escritorio de Windows o línea de comandos como Bash)

### Ejercicio 3
¿Qué sistema de archivos se recomienda para un servidor Windows y por qué?

**Solución:** Se recomienda **NTFS** porque:
- Soporte para permisos de acceso (seguridad)
- Archivos grandes posibles (>4 GB)
- Journaling para integridad de datos
- Compresión y cifrado de archivos
- Estándar en Windows

---

## Referencias Cruzadas

- [05-03-02 BIOS/UEFI](./05-03-02-bios-uefi.md) - Arranque del sistema
- [05-03-03 Línea de Comandos](./05-03-03-command-line.md) - Comandos de shell
- [05-04-01 Virtualización](../05-04-virtualization-cloud/05-04-01-virtualization.md) - Máquinas virtuales
