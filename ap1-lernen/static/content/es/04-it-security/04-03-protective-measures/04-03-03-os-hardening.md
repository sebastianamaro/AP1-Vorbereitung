# Fortalecimiento del Sistema Operativo (OS Hardening)

## Objetivos de Aprendizaje

Despues de este capitulo, deberas ser capaz de:
- Explicar el termino "fortalecimiento"
- Conocer medidas tipicas de fortalecimiento para sistemas operativos
- Comprender la diferencia entre fortalecimiento de cliente y servidor
- Aplicar medidas practicas

**Nota:** Este tema es NUEVO en el catalogo de examenes 2025 y por lo tanto particularmente relevante para el examen!

---

## Contenido Principal

### Que es el Fortalecimiento del Sistema Operativo?

El **fortalecimiento** se refiere a asegurar un sistema mediante:
- Eliminar/deshabilitar funciones innecesarias
- Cerrar vulnerabilidades de seguridad
- Minimizar la superficie de ataque

> Principio basico: "Todo lo que no se necesita se deshabilita o elimina."

```
+------------------------------------------------------------------+
|              FORTALECIMIENTO DEL SISTEMA OPERATIVO                |
+------------------------------------------------------------------+
|                                                                   |
|  INSTALACION ESTANDAR             SISTEMA FORTALECIDO             |
|  +----------------------+         +----------------------+        |
|  | XXXXXXXXXXXXXXXXXX   |         | XXXXX                |        |
|  | XXXXXXXXXXXXXXXXXX   |   -->   | XXXXX                |        |
|  | XXXXXXXXXXXXXXXXXX   |         | XXXXX                |        |
|  |                      |         |                      |        |
|  | Gran superficie de   |         | Pequena superficie   |        |
|  | ataque               |         | de ataque            |        |
|  | Muchos puertos       |         | Solo servicios       |        |
|  | abiertos             |         | necesarios           |        |
|  | Servicios innecesar. |         | activos              |        |
|  | Config. por defecto  |         |                      |        |
|  +----------------------+         +----------------------+        |
|                                                                   |
+------------------------------------------------------------------+
```

---

### Principios Basicos del Fortalecimiento

| Principio | Descripcion |
|-----------|-------------|
| **Minimo Privilegio** | Otorgar solo permisos minimos |
| **Minima Funcionalidad** | Activar solo funciones necesarias |
| **Defensa en Profundidad** | Multiples capas de seguridad |
| **Minimizar Superficie de Ataque** | Menos servicios = menos puntos de ataque |

---

### Vision General de Medidas de Fortalecimiento

```
+------------------------------------------------------------------+
|              MEDIDAS DE FORTALECIMIENTO                           |
+------------------------------------------------------------------+
|                                                                   |
|  +------------------+  +------------------+  +------------------+ |
|  | USUARIOS Y       |  | SERVICIOS Y      |  | RED              | |
|  | CUENTAS          |  | PROCESOS         |  |                  | |
|  |                  |  |                  |  |                  | |
|  | * Restringir     |  | * Deshabilitar   |  | * Cortafuegos    | |
|  |   ctas admin     |  |   servicios      |  | * Cerrar puertos | |
|  | * Politicas      |  |   innecesarios   |  |   abiertos       | |
|  |   de contrasena  |  | * Limpiar        |  | * Deshabilitar   | |
|  | * Deshabilitar   |  |   inicio auto.   |  |   protocolos     | |
|  |   ctas invitado  |  |                  |  |                  | |
|  +------------------+  +------------------+  +------------------+ |
|                                                                   |
|  +------------------+  +------------------+  +------------------+ |
|  | SOFTWARE         |  | SISTEMA DE       |  | REGISTRO         | |
|  |                  |  | ARCHIVOS         |  |                  | |
|  | * Instalar       |  | * Permisos       |  | * Habilitar logs | |
|  |   actualizaciones|  | * Cifrado        |  |   de auditoria   | |
|  | * Desinstalar    |  | * Recursos comp. |  | * Monitorizar    | |
|  |   SW innecesario |  |   seguros        |  |   eventos        | |
|  +------------------+  +------------------+  +------------------+ |
|                                                                   |
+------------------------------------------------------------------+
```

---

### Medidas de Fortalecimiento Concretas

#### 1. Cuentas de Usuario y Autenticacion

| Medida | Descripcion |
|--------|-------------|
| **Renombrar cuenta administrador** | Nombres por defecto facilitan ataques |
| **Deshabilitar cuenta invitado** | Sin acceso anonimo |
| **Politicas de contrasenas** | Longitud minima, complejidad, caducidad |
| **Bloqueo de cuenta** | Despues de multiples intentos fallidos |
| **Cuentas admin separadas** | No trabajar como admin en uso diario |

```
+----------------------------------------------------------------+
|                 POLITICAS DE CONTRASENA                         |
+----------------------------------------------------------------+
|                                                                 |
|  Recomendado:                                                   |
|  * Longitud minima: 12+ caracteres                              |
|  * Complejidad: Mayusculas/minusculas, numeros, caracteres esp. |
|  * Bloqueo de cuenta: Despues de 3-5 intentos fallidos          |
|  * Historial de contrasenas: Bloquear ultimas 10 contrasenas    |
|                                                                 |
+----------------------------------------------------------------+
```

#### 2. Servicios y Procesos

| Medida | Windows | Linux |
|--------|---------|-------|
| **Deshabilitar servicios innecesarios** | services.msc | systemctl disable |
| **Limpiar inicio automatico** | msconfig / Administrador de tareas | systemd / /etc/rc.local |
| **Solo software necesario** | Eliminar programas | apt/yum remove |

**Ejemplos de servicios frecuentemente innecesarios:**
- Escritorio Remoto (si no se necesita)
- Telnet (reemplazar con SSH)
- FTP (reemplazar con SFTP)
- Bluetooth (si no se necesita)
- NetBIOS sobre TCP/IP

#### 3. Fortalecimiento de Red

| Medida | Descripcion |
|--------|-------------|
| **Habilitar cortafuegos** | Controlar trafico entrante y saliente |
| **Cerrar puertos innecesarios** | Abrir solo puertos necesarios |
| **Deshabilitar protocolos inseguros** | Reemplazar Telnet, FTP, HTTP con alternativas seguras |
| **Deshabilitar IPv6** | Si no se necesita |

```
+----------------------------------------------------------------+
|              VISION GENERAL DE PUERTOS                          |
+----------------------------------------------------------------+
|                                                                 |
|  Puertos frecuentemente innecesariamente abiertos:              |
|  * 23 (Telnet) -> Usar SSH (22)                                 |
|  * 21 (FTP) -> Usar SFTP (22)                                   |
|  * 135-139 (NetBIOS) -> Si no se necesita en red local          |
|  * 445 (SMB) -> Solo si se necesitan recursos compartidos       |
|  * 3389 (RDP) -> Usar VPN delante o deshabilitar                |
|                                                                 |
+----------------------------------------------------------------+
```

#### 4. Software y Actualizaciones

| Medida | Descripcion |
|--------|-------------|
| **Actualizaciones regulares** | Aplicar actualizaciones de seguridad prontamente |
| **Actualizaciones automaticas** | Habilitar para parches criticos |
| **Eliminar software** | Desinstalar programas innecesarios |
| **Control de aplicaciones** | Solo software permitido ejecutable |

#### 5. Sistema de Archivos y Cifrado

| Medida | Descripcion |
|--------|-------------|
| **Verificar permisos de archivos** | Minimo privilegio para archivos y carpetas |
| **Cifrado de disco** | BitLocker (Windows), LUKS (Linux) |
| **Recursos compartidos seguros** | Solo recursos necesarios, con permisos |
| **Limpiar archivos temporales** | Eliminar archivos temporales regularmente |

#### 6. Registro y Monitorizacion

| Medida | Descripcion |
|--------|-------------|
| **Habilitar logs de auditoria** | Intentos de inicio de sesion, accesos a archivos |
| **Rotacion de logs** | Archivar logs regularmente |
| **Registro centralizado** | Logs a servidor separado |
| **Verificacion de integridad** | Detectar cambios en archivos del sistema |

---

### Lista de Verificacion: Fortalecimiento Windows

| Area | Medida | Implementacion |
|------|--------|----------------|
| **Cuentas** | Deshabilitar cuenta invitado | Administracion de equipos |
| **Cuentas** | Renombrar admin | Politica de Seguridad Local |
| **Servicios** | Deshabilitar servicios innecesarios | services.msc |
| **Cortafuegos** | Habilitar Firewall de Windows | Panel de Control |
| **Actualizaciones** | Actualizaciones automaticas | Windows Update |
| **Cifrado** | Habilitar BitLocker | Panel de Control |
| **Red** | Deshabilitar NetBIOS | Propiedades del adaptador de red |

### Lista de Verificacion: Fortalecimiento Linux

| Area | Medida | Implementacion |
|------|--------|----------------|
| **Cuentas** | Deshabilitar login root via SSH | /etc/ssh/sshd_config |
| **Servicios** | Deshabilitar servicios innecesarios | systemctl disable |
| **Cortafuegos** | Configurar iptables/nftables | Reglas de cortafuegos |
| **Actualizaciones** | Parchear regularmente | apt update && apt upgrade |
| **Permisos** | Verificar SUID/SGID | find / -perm -4000 |
| **SSH** | Autenticacion basada en clave | .ssh/authorized_keys |

---

## Terminos Clave

| Termino | Explicacion |
|---------|-------------|
| **Fortalecimiento** | Asegurar un sistema minimizando la superficie de ataque |
| **Superficie de Ataque** | Todos los posibles puntos de ataque de un sistema |
| **Minimo Privilegio** | Permisos minimos |
| **Minima Funcionalidad** | Solo funciones necesarias |
| **Defensa en Profundidad** | Seguridad multicapa |
| **Log de Auditoria** | Registro de eventos relevantes para la seguridad |

---

## Consejos para el Examen

### Preguntas Frecuentes del Examen

- Que se entiende por fortalecimiento del sistema operativo?
- Nombra tres medidas para fortalecimiento del SO
- Que significa el principio "Minimo Privilegio"?
- Por que deben deshabilitarse los servicios innecesarios?

### Importante Recordar

- **Fortalecimiento** = Minimizar superficie de ataque
- **Principio basico:** "Lo que no se necesita se deshabilita"
- **Minimo Privilegio:** Otorgar solo permisos minimos
- **Defensa en Profundidad:** Multiples capas de seguridad

---

## Ejercicios Practicos

### Ejercicio 1
Que se entiende por fortalecimiento del sistema operativo (OS Hardening)?

**Solucion:** El fortalecimiento del sistema operativo se refiere a asegurar un sistema operativo eliminando o deshabilitando funciones innecesarias, cerrando vulnerabilidades de seguridad y minimizando la superficie de ataque. El principio basico es: "Todo lo que no se necesita se deshabilita o elimina."

### Ejercicio 2
Nombra cuatro medidas concretas para fortalecer un sistema Windows.

**Solucion:**
1. **Deshabilitar cuenta invitado** (sin acceso anonimo)
2. **Habilitar Firewall de Windows** (controlar trafico de red)
3. **Deshabilitar servicios innecesarios** (menor superficie de ataque)
4. **Habilitar actualizaciones automaticas** (cerrar vulnerabilidades de seguridad)

(Otras posibles respuestas: Habilitar BitLocker, renombrar cuenta administrador, politicas de contrasena, deshabilitar NetBIOS)

### Ejercicio 3
Explica el principio "Minimo Privilegio" en el contexto del fortalecimiento.

**Solucion:** "Minimo Privilegio" (principio de derechos minimos) significa que usuarios y procesos solo deben recibir los permisos minimamente necesarios. Ejemplo: Un usuario normal no trabaja como administrador sino con una cuenta restringida. Solo cuando realmente se necesitan derechos de admin se cambia a una cuenta de admin.

### Ejercicio 4
Por que deben deshabilitarse los servicios innecesarios en un servidor?

**Solucion:** Los servicios innecesarios aumentan la **superficie de ataque** del sistema:
1. Cada servicio en ejecucion puede tener potenciales vulnerabilidades de seguridad
2. Los puertos abiertos ofrecen puntos de ataque
3. Los servicios deshabilitados no consumen recursos del sistema
4. Menos software en ejecucion = menos software que parchear

---

## Referencias Cruzadas

- [04-03-01 Medidas Tecnicas](./04-03-01-technical-measures.md) - Vision general de medidas de proteccion
- [04-03-02 Autenticacion-2FA](./04-03-02-authentication-2fa.md) - Seguridad de cuentas
- [04-03-04 Cortafuegos Personal](./04-03-04-personal-firewall.md) - Configuracion de cortafuegos
- [05-03-01 Fundamentos de Sistemas Operativos](../../05-it-systems/05-03-operating-systems/05-03-01-fundamentals-operating-systems.md) - Conceptos basicos de SO
