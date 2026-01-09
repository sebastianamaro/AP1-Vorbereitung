# Mantenimiento Remoto y Acceso Remoto

## Objetivos de Aprendizaje

Después de esta sección, deberías ser capaz de:
- Distinguir diferentes tecnologías de mantenimiento remoto
- Nombrar protocolos para acceso remoto (RDP, SSH, VNC)
- Explicar aspectos de seguridad del mantenimiento remoto
- Seleccionar soluciones adecuadas para diferentes escenarios

---

## Contenido Principal

### ¿Qué es el Mantenimiento Remoto?

**El mantenimiento remoto** permite el acceso a ordenadores y dispositivos de red a través de una conexión de red sin estar físicamente en el lugar. Esto es esencial para:
- Soporte TI y helpdesk
- Administración de servidores
- Conectividad de oficina en casa
- Mantenimiento de ubicaciones remotas

### Visión General de Tecnologías de Mantenimiento Remoto

```
+---------------------------------------------------------------------+
|              TECNOLOGÍAS DE MANTENIMIENTO REMOTO                     |
+---------------------------------------------------------------------+
|                                                                      |
|  +---------------------------------------------------------------+  |
|  |                    RDP (Remote Desktop Protocol)               |  |
|  |  +---------+           Puerto 3389         +---------+         |  |
|  |  | Cliente |<---------------------------->| Servidor |         |  |
|  |  |(Windows)|         cifrado              |(Windows)|         |  |
|  |  +---------+                              +---------+         |  |
|  |  -> Toma de control completa del escritorio                   |  |
|  |  -> Integrado en Windows                                      |  |
|  +---------------------------------------------------------------+  |
|                                                                      |
|  +---------------------------------------------------------------+  |
|  |                    SSH (Secure Shell)                          |  |
|  |  +---------+           Puerto 22           +---------+         |  |
|  |  | Cliente |<---------------------------->| Servidor |         |  |
|  |  | (PuTTY) |         cifrado              | (Linux)  |         |  |
|  |  +---------+                              +---------+         |  |
|  |  -> Acceso por línea de comandos                               |  |
|  |  -> Estándar para Linux/Unix                                   |  |
|  +---------------------------------------------------------------+  |
|                                                                      |
|  +---------------------------------------------------------------+  |
|  |                    VNC (Virtual Network Computing)             |  |
|  |  +---------+           Puerto 5900         +---------+         |  |
|  |  | Viewer  |<---------------------------->| Servidor |         |  |
|  |  |         |      (¡sin cifrar!)          |         |         |  |
|  |  +---------+                              +---------+         |  |
|  |  -> Multiplataforma                                            |  |
|  |  -> ¡Solo seguro con túnel VPN/SSH!                            |  |
|  +---------------------------------------------------------------+  |
|                                                                      |
+---------------------------------------------------------------------+
```

### Comparación de Protocolos

| Propiedad | RDP | SSH | VNC |
|-----------|-----|-----|-----|
| **Puerto** | 3389 | 22 | 5900+ |
| **Cifrado** | Sí | Sí | No* |
| **Interfaz** | Gráfica | Línea comandos | Gráfica |
| **Plataforma** | Windows | Linux/Unix | Todas |
| **Rendimiento** | Alto | Muy alto | Medio |
| **Uso típico** | Servidores Windows | Servidores Linux | Multiplataforma |

*¡VNC solo debería usarse sobre VPN o túnel SSH!

### RDP (Remote Desktop Protocol)

```
+---------------------------------------------------------------------+
|                    RDP - ESCRITORIO REMOTO                           |
+---------------------------------------------------------------------+
|                                                                      |
|  Propiedades:                                                       |
|  ---------------------------------------------------------------    |
|  -> Protocolo Microsoft, integrado en Windows                       |
|  -> Puerto 3389 (TCP)                                                |
|  -> Cifrado TLS                                                      |
|  -> Audio, impresoras, unidades pueden compartirse                   |
|  -> Network Level Authentication (NLA) recomendada                   |
|                                                                      |
|  Requisitos:                                                        |
|  ---------------------------------------------------------------    |
|  -> Windows Professional, Enterprise o Education                     |
|     (¡Windows Home NO PUEDE ser servidor de escritorio remoto!)      |
|  -> Escritorio Remoto debe estar habilitado                          |
|  -> Regla de firewall para puerto 3389                               |
|  -> El usuario debe tener permiso                                    |
|                                                                      |
|  Programa cliente:                                                  |
|  ---------------------------------------------------------------    |
|  -> Windows: mstsc.exe (Conexión a Escritorio Remoto)                |
|  -> macOS/Linux: Microsoft Remote Desktop (App)                      |
|                                                                      |
+---------------------------------------------------------------------+
```

### SSH (Secure Shell)

```
+---------------------------------------------------------------------+
|                    SSH - SECURE SHELL                                |
+---------------------------------------------------------------------+
|                                                                      |
|  Propiedades:                                                       |
|  ---------------------------------------------------------------    |
|  -> Reemplazo seguro para Telnet                                     |
|  -> Puerto 22 (TCP)                                                  |
|  -> Cifrado fuerte (AES, etc.)                                       |
|  -> Autenticación: Contraseña o clave SSH                            |
|  -> Posibilidad de túneles (port forwarding)                         |
|                                                                      |
|  Métodos de autenticación:                                          |
|  ---------------------------------------------------------------    |
|                                                                      |
|  1. Autenticación por contraseña                                     |
|     -> Simple, pero más vulnerable a fuerza bruta                    |
|                                                                      |
|  2. Clave SSH (Clave Pública/Privada)                                |
|     +--------------+          +--------------+                      |
|     | Clave Privada|          | Clave Pública|                      |
|     | (¡secreta!)  |          | (en servidor)|                      |
|     | ~/.ssh/id_rsa|          | authorized_  |                      |
|     |              |          | keys         |                      |
|     +--------------+          +--------------+                      |
|     -> Más segura, no necesita contraseña                            |
|                                                                      |
|  Programas cliente:                                                 |
|  ---------------------------------------------------------------    |
|  -> Windows: PuTTY, Windows Terminal, OpenSSH                        |
|  -> Linux/macOS: ssh (integrado)                                     |
|                                                                      |
|  Comando ejemplo:  ssh usuario@servidor.com                          |
|                                                                      |
+---------------------------------------------------------------------+
```

### Soluciones Comerciales de Mantenimiento Remoto

| Solución | Descripción | Característica Especial |
|----------|-------------|-------------------------|
| **TeamViewer** | Multiplataforma | Travesía NAT, no necesita port forwarding |
| **AnyDesk** | Conexión rápida | Bajo uso de recursos |
| **Remote Desktop Gateway** | Microsoft | Acceso vía HTTPS (443) |
| **VPN + RDP** | Combinación | Túnel seguro para RDP |

### VPN para Mantenimiento Remoto Seguro

```
+---------------------------------------------------------------------+
|              VPN + MANTENIMIENTO REMOTO                              |
+---------------------------------------------------------------------+
|                                                                      |
|   Empleado                                  Gateway VPN              |
|   (Oficina en casa)                         (Empresa)                |
|   +---------+                               +---------+             |
|   |         |                               |         |             |
|   |   PC    |<------- Túnel VPN ----------->| Router  |             |
|   |         |    (cifrado)                  |         |             |
|   +---------+                               +----+----+             |
|                                                  |                   |
|                                                  v                   |
|                                             +---------+             |
|                                             |  Red    |             |
|                                             | Interna |             |
|                                             |(Servidor)|            |
|                                             +---------+             |
|                                                                      |
|   Ventajas:                                                         |
|   -> Todos los servicios a través de un túnel seguro                |
|   -> No se necesita port forwarding individual                       |
|   -> Acceso como en la red local                                     |
|                                                                      |
|   Protocolos VPN:                                                   |
|   -> IPsec, OpenVPN, WireGuard                                       |
|                                                                      |
+---------------------------------------------------------------------+
```

### Aspectos de Seguridad

```
+---------------------------------------------------------------------+
|              SEGURIDAD EN MANTENIMIENTO REMOTO                       |
+---------------------------------------------------------------------+
|                                                                      |
|  / RECOMENDADO                     X EVITAR                         |
|  ---------------------------------------------------------------    |
|                                                                      |
|  VPN antes del acceso remoto       Exponer RDP directo a Internet   |
|                                                                      |
|  Claves SSH en lugar de contraseñas Puertos estándar sin cambiar    |
|                                                                      |
|  Autenticación de dos factores     VNC sin cifrado                  |
|                                                                      |
|  Fail2Ban (protección fuerza bruta) Contraseñas simples             |
|                                                                      |
|  Software actualizado               Protocolos obsoletos (Telnet)   |
|                                                                      |
|  Registro y monitorización         Sesiones desatendidas            |
|                                                                      |
+---------------------------------------------------------------------+
```

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **RDP** | Remote Desktop Protocol - acceso remoto Microsoft |
| **SSH** | Secure Shell - acceso cifrado por línea de comandos |
| **VNC** | Virtual Network Computing - multiplataforma |
| **VPN** | Virtual Private Network - túnel seguro |
| **NLA** | Network Level Authentication - seguridad RDP |
| **Clave SSH** | Par de claves para autenticación sin contraseña |
| **Travesía NAT** | Conexión sin port forwarding |
| **Port Forwarding** | Reenvío de puertos a través de túnel |

---

## Consejos para el Examen

1. **Recordar puertos:**
   - RDP = **3389**
   - SSH = **22**
   - VNC = **5900**
   - Telnet = 23 (¡inseguro, no usar!)

2. **Seguridad:**
   - SSH es más seguro que Telnet
   - VPN + RDP es más seguro que RDP directo
   - Las claves SSH son más seguras que las contraseñas

3. **Preguntas típicas del examen:**
   - ¿Qué protocolo para servidor Linux? -> SSH
   - ¿Qué puerto para acceso remoto Windows? -> 3389 (RDP)
   - ¿Cómo asegurar VNC? -> Vía VPN o túnel SSH

---

## Ejercicios Prácticos

### Ejercicio 1: Selección de Protocolo

¿Qué protocolo de mantenimiento remoto recomiendas para los siguientes escenarios?

a) Administración de un servidor web Linux
b) Acceso remoto a un servidor terminal Windows
c) Soporte para un usuario de Mac desde un PC Windows

<details>
<summary>Mostrar solución</summary>

a) **SSH** - Estándar para servidores Linux, la línea de comandos es suficiente
b) **RDP** - Integrado en Windows, interfaz gráfica
c) **TeamViewer/AnyDesk** o **VNC vía túnel SSH** - multiplataforma, configuración fácil

</details>

### Ejercicio 2: Análisis de Seguridad

Una empresa quiere habilitar oficina en casa para sus empleados. El administrador TI planea abrir el puerto 3389 directamente en el firewall.

a) ¿Qué riesgos existen con esta configuración?
b) ¿Qué alternativa segura recomiendas?

<details>
<summary>Mostrar solución</summary>

a) **Riesgos de exponer RDP directamente:**
- Ataques de fuerza bruta al puerto RDP posibles
- Vulnerabilidades de RDP pueden ser explotadas
- Sin protección adicional (solo contraseña)
- Visible para escáneres de puertos en todo el mundo

b) **Alternativas seguras:**
1. **Solución VPN:**
   - Empleados primero conectan vía VPN
   - Luego acceso RDP solo dentro del túnel VPN

2. **Remote Desktop Gateway:**
   - RDP sobre HTTPS (puerto 443)
   - Capa adicional de autenticación

3. **Autenticación de dos factores:**
   - Factor adicional además de contraseña

4. **Solución comercial (TeamViewer/AnyDesk):**
   - No se necesita port forwarding
   - Conexión cifrada

</details>

### Ejercicio 3: Configuración SSH

ConSystem GmbH quiere mejorar la seguridad SSH en sus servidores Linux.

Nombra tres medidas para asegurar SSH.

<details>
<summary>Mostrar solución</summary>

**Medidas para asegurar SSH:**

1. **Claves SSH en lugar de contraseñas**
   - Deshabilitar autenticación por contraseña
   - Solo permitir login basado en clave

2. **Deshabilitar login de root**
   - `PermitRootLogin no` en sshd_config
   - Login solo como usuario normal, luego sudo

3. **Cambiar puerto por defecto**
   - De puerto 22 a otro puerto (ej. 2222)
   - Reduce ataques automatizados

4. **Instalar Fail2Ban**
   - Bloquea direcciones IP después de intentos fallidos
   - Protección contra fuerza bruta

5. **Restricción de firewall**
   - Permitir SSH solo desde direcciones IP específicas
   - ej. solo desde red de la empresa

</details>

---

## Referencias Cruzadas

- [Protocolos TCP/IP](07-01-network-fundamentals/07-01-03-protocols.md) - SSH, Telnet
- [Autenticación Seguridad TI](../04-it-security/04-03-protective-measures/04-03-02-authentication-2fa.md) - 2FA
- [Herramientas de Diagnóstico](07-07-network-troubleshooting/07-07-01-diagnostic-tools.md) - Herramientas de red
- [Integración de Dominio](07-09-domain-integration.md) - Conectividad de red
