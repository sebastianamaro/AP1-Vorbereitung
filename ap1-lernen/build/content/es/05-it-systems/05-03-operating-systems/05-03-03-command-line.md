# Línea de Comandos (CLI)

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Conocer el propósito de la línea de comandos
- Aplicar comandos importantes de Windows y Linux
- Dominar la navegación básica del sistema de archivos
- Conocer comandos de diagnóstico de red

---

## Contenido Principal

### ¿Qué es la Línea de Comandos?

La **línea de comandos** (CLI - Command Line Interface) es una interfaz basada en texto para el control del sistema. A diferencia de la interfaz gráfica (GUI), los comandos se escriben.

```
┌─────────────────────────────────────────────────────────────────┐
│                    CLI vs. GUI                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  CLI (Interfaz de Línea        GUI (Interfaz Gráfica de        │
│       de Comandos)                  Usuario)                    │
│  ┌─────────────────────────┐     ┌─────────────────────────┐   │
│  │ C:\> dir                │     │ ┌────┐ ┌────┐ ┌────┐   │   │
│  │ C:\> cd Documents       │     │ │    │ │    │ │    │   │   │
│  │ C:\> copy file.txt D:\  │     │ └────┘ └────┘ └────┘   │   │
│  │ C:\> _                  │     │  Docs  Imágenes file.txt│   │
│  └─────────────────────────┘     └─────────────────────────┘   │
│                                                                 │
│  + Más rápida para expertos    + Amigable para principiantes   │
│  + Automatizable (scripts)     + Retroalimentación visual      │
│  + Menos recursos              - Más lenta para rutinas        │
│  - Hay que aprender comandos   - Difícil de automatizar        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Windows: CMD vs. PowerShell

| Aspecto | CMD | PowerShell |
|---------|-----|------------|
| **Antigüedad** | Desde DOS (1980s) | Desde 2006 |
| **Función** | Comandos simples | Orientado a objetos |
| **Scripts** | .bat, .cmd | .ps1 |
| **Uso** | Tareas básicas | Administración, automatización |

---

### Comandos Importantes de Windows (CMD/PowerShell)

#### Navegación del Sistema de Archivos

| Comando | Descripción | Ejemplo |
|---------|-------------|---------|
| `dir` | Mostrar contenido del directorio | `dir C:\Users` |
| `cd` | Cambiar directorio | `cd Documents` |
| `cd ..` | Subir un nivel | `cd ..` |
| `md` / `mkdir` | Crear directorio | `mkdir Nueva_Carpeta` |
| `rd` / `rmdir` | Eliminar directorio | `rmdir Carpeta_Vieja` |
| `copy` | Copiar archivo | `copy archivo.txt D:\Backup` |
| `move` | Mover archivo | `move archivo.txt D:\` |
| `del` | Eliminar archivo | `del archivo.txt` |
| `ren` | Renombrar | `ren viejo.txt nuevo.txt` |
| `type` | Mostrar contenido del archivo | `type config.txt` |

#### Comandos del Sistema

| Comando | Descripción |
|---------|-------------|
| `hostname` | Mostrar nombre de computadora |
| `whoami` | Usuario actual |
| `systeminfo` | Información del sistema |
| `tasklist` | Procesos en ejecución |
| `taskkill` | Terminar proceso |
| `shutdown` | Apagar computadora |
| `cls` | Limpiar pantalla |

#### Comandos de Red

| Comando | Descripción | Ejemplo |
|---------|-------------|---------|
| `ipconfig` | Mostrar configuración IP | `ipconfig /all` |
| `ping` | Probar conectividad | `ping google.com` |
| `tracert` | Trazar ruta | `tracert google.com` |
| `nslookup` | Consulta DNS | `nslookup google.com` |
| `netstat` | Conexiones de red | `netstat -an` |

---

### Comandos Importantes de Linux (Bash)

#### Navegación del Sistema de Archivos

| Comando | Descripción | Ejemplo |
|---------|-------------|---------|
| `ls` | Mostrar contenido del directorio | `ls -la` |
| `cd` | Cambiar directorio | `cd /home/user` |
| `cd ..` | Subir un nivel | `cd ..` |
| `pwd` | Directorio actual | `pwd` |
| `mkdir` | Crear directorio | `mkdir carpeta` |
| `rmdir` | Eliminar directorio vacío | `rmdir carpeta` |
| `cp` | Copiar archivo | `cp archivo.txt /backup/` |
| `mv` | Mover/Renombrar | `mv viejo.txt nuevo.txt` |
| `rm` | Eliminar archivo | `rm archivo.txt` |
| `cat` | Mostrar contenido del archivo | `cat config.txt` |

#### Comandos del Sistema

| Comando | Descripción |
|---------|-------------|
| `hostname` | Mostrar nombre de computadora |
| `whoami` | Usuario actual |
| `uname -a` | Información del sistema |
| `top` / `htop` | Procesos en ejecución |
| `kill` | Terminar proceso |
| `sudo` | Ejecutar como root |
| `clear` | Limpiar pantalla |
| `chmod` | Cambiar permisos |
| `chown` | Cambiar propietario |

#### Comandos de Red

| Comando | Descripción | Ejemplo |
|---------|-------------|---------|
| `ip a` / `ifconfig` | Configuración IP | `ip a` |
| `ping` | Probar conectividad | `ping google.com` |
| `traceroute` | Trazar ruta | `traceroute google.com` |
| `nslookup` / `dig` | Consulta DNS | `dig google.com` |
| `netstat` / `ss` | Conexiones de red | `ss -tulpn` |

---

### Comparación: Comandos Windows vs. Linux

| Tarea | Windows (CMD) | Linux (Bash) |
|-------|---------------|--------------|
| Mostrar directorio | `dir` | `ls` |
| Cambiar directorio | `cd` | `cd` |
| Directorio actual | `cd` (sin parámetro) | `pwd` |
| Copiar archivo | `copy` | `cp` |
| Mover archivo | `move` | `mv` |
| Eliminar archivo | `del` | `rm` |
| Crear carpeta | `mkdir` | `mkdir` |
| Mostrar archivo | `type` | `cat` |
| Configuración IP | `ipconfig` | `ip a` |
| Trazar ruta | `tracert` | `traceroute` |

---

### Ejemplos de Diagnóstico de Red

```
┌────────────────────────────────────────────────────────────────┐
│                DIAGNÓSTICO DE RED                              │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  1. Determinar dirección IP propia:                           │
│     Windows:  ipconfig                                         │
│     Linux:    ip a                                             │
│                                                                │
│  2. Probar conexión a un servidor:                            │
│     ping 8.8.8.8                                               │
│     → Muestra conectividad y tiempo de respuesta              │
│                                                                │
│  3. Verificar resolución DNS:                                 │
│     nslookup google.com                                        │
│     → Muestra la dirección IP del servidor                    │
│                                                                │
│  4. Trazar ruta al destino:                                   │
│     Windows:  tracert google.com                              │
│     Linux:    traceroute google.com                           │
│     → Muestra todas las estaciones intermedias (saltos)       │
│                                                                │
│  5. Mostrar puertos abiertos:                                 │
│     Windows:  netstat -an                                      │
│     Linux:    ss -tulpn                                        │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Rutas de Archivos

| Tipo | Windows | Linux |
|------|---------|-------|
| **Separador** | `\` (Barra invertida) | `/` (Barra) |
| **Directorio Raíz** | `C:\` | `/` |
| **Directorio de Inicio** | `C:\Users\Nombre` | `/home/nombre` o `~` |
| **Ruta Absoluta** | `C:\Users\Nombre\archivo.txt` | `/home/nombre/archivo.txt` |
| **Ruta Relativa** | `Documents\archivo.txt` | `Documents/archivo.txt` |

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **CLI** | Command Line Interface (Interfaz de Línea de Comandos) |
| **GUI** | Graphical User Interface (Interfaz Gráfica de Usuario) |
| **Shell** | Intérprete de línea de comandos (CMD, Bash) |
| **Ruta** | Camino a un archivo o carpeta |
| **Parámetro** | Opciones para comandos (ej., `-a`) |
| **Pipe** | Redirigir salida (`|`) |
| **Redirección** | Redirigir salida a archivo (`>`) |

---

## Consejos para el Examen

### Preguntas Comunes de Examen

- ¿Qué comando muestra la configuración IP?
- ¿Cómo se cambia de directorio?
- ¿Qué hace el comando ping?
- ¿Diferencia entre comandos Windows vs. Linux?

### Importante Recordar

- **ipconfig** (Windows) / **ip a** (Linux) = Mostrar dirección IP
- **ping** = Probar conectividad
- **dir** (Windows) / **ls** (Linux) = Listar directorio
- **cd** = Cambiar directorio (ambos sistemas)

---

## Ejercicios Prácticos

### Ejercicio 1
¿Qué comando de Windows usas para mostrar la dirección IP de tu computadora?

**Solución:** `ipconfig` o `ipconfig /all` para información detallada

### Ejercicio 2
¿Cómo navegas a la carpeta "C:\Proyectos\Test" en la línea de comandos de Windows?

**Solución:** `cd C:\Proyectos\Test`

### Ejercicio 3
¿Qué comando usas para verificar si un servidor en la dirección 192.168.1.1 es alcanzable?

**Solución:** `ping 192.168.1.1`

El comando envía paquetes ICMP y muestra:
- Si el servidor responde
- El tiempo de respuesta (latencia)
- Cualquier pérdida de paquetes

### Ejercicio 4
¿Qué comandos de Linux corresponden a los comandos de Windows `dir` y `copy`?

**Solución:**
- `dir` (Windows) → `ls` (Linux)
- `copy` (Windows) → `cp` (Linux)

---

## Referencias Cruzadas

- [05-03-01 Fundamentos de Sistemas Operativos](./05-03-01-fundamentals-operating-systems.md) - Shell
- [07-07-01 Herramientas de Diagnóstico](../../07-networks/07-07-network-troubleshooting/07-07-01-diagnostic-tools.md) - Comandos de red
- [04-03-03 Hardening de SO](../../04-it-security/04-03-protective-measures/04-03-03-os-hardening.md) - Configuración del sistema
