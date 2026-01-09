# Modelo TCP/IP

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Conocer las 4 capas del modelo TCP/IP
- Comprender las diferencias con el modelo OSI
- Reconocer la importancia práctica del modelo TCP/IP
- Asignar protocolos a las capas TCP/IP

---

## Contenido Principal

### ¿Qué es el Modelo TCP/IP?

```
+--------------------------------------------------------------------+
|                      MODELO TCP/IP                                  |
+--------------------------------------------------------------------+
|                                                                     |
|   TCP/IP = Transmission Control Protocol / Internet Protocol        |
|            (Protocolo de Control de Transmisión / Protocolo Internet)|
|                                                                     |
|   +-------------------------------------------------------------+  |
|   | El modelo TCP/IP es el modelo de referencia PRÁCTICO de     |  |
|   | Internet. Fue desarrollado en paralelo al modelo OSI y      |  |
|   | es la base de la comunicación por Internet actual.          |  |
|   +-------------------------------------------------------------+  |
|                                                                     |
|   Diferencia con el modelo OSI:                                     |
|   +----------------------------+-------------------------------+   |
|   | Modelo OSI                 | Modelo TCP/IP                 |   |
|   +----------------------------+-------------------------------+   |
|   | Referencia teórica         | Implementación práctica       |   |
|   | modelo                     |                               |   |
|   | 7 capas                    | 4 capas                       |   |
|   | Diseñado para protocolos   | Surgió de los protocolos      |   |
|   | Raramente implementado     | Realmente en uso              |   |
|   | exactamente                |                               |   |
|   +----------------------------+-------------------------------+   |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Las 4 Capas TCP/IP

```
+--------------------------------------------------------------------+
|                   LAS 4 CAPAS TCP/IP                                |
+--------------------------------------------------------------------+
|                                                                     |
|   +------------------------------------------------------------+   |
|   |  4  |  CAPA DE APLICACIÓN                                  |   |
|   |     |  --------------------------------------------------  |   |
|   |     |  - Corresponde a las capas OSI 5, 6, 7               |   |
|   |     |  - Protocolos de aplicación para el usuario          |   |
|   |     |                                                      |   |
|   |     |  Protocolos: HTTP, HTTPS, FTP, SMTP, POP3, IMAP,    |   |
|   |     |              DNS, DHCP, SSH, Telnet, SNMP            |   |
|   +------------------------------------------------------------+   |
|                              |                                      |
|   +------------------------------------------------------------+   |
|   |  3  |  CAPA DE TRANSPORTE                                  |   |
|   |     |  --------------------------------------------------  |   |
|   |     |  - Corresponde a la capa OSI 4                       |   |
|   |     |  - Comunicación extremo a extremo                    |   |
|   |     |  - Direccionamiento por puertos                      |   |
|   |     |                                                      |   |
|   |     |  Protocolos: TCP (confiable)                         |   |
|   |     |              UDP (rápido, no confiable)              |   |
|   +------------------------------------------------------------+   |
|                              |                                      |
|   +------------------------------------------------------------+   |
|   |  2  |  CAPA DE INTERNET                                    |   |
|   |     |  --------------------------------------------------  |   |
|   |     |  - Corresponde a la capa OSI 3                       |   |
|   |     |  - Direccionamiento IP y enrutamiento                |   |
|   |     |                                                      |   |
|   |     |  Protocolos: IPv4, IPv6, ICMP, ARP                   |   |
|   +------------------------------------------------------------+   |
|                              |                                      |
|   +------------------------------------------------------------+   |
|   |  1  |  CAPA DE ACCESO A LA RED                             |   |
|   |     |  --------------------------------------------------  |   |
|   |     |  - Corresponde a las capas OSI 1 y 2                 |   |
|   |     |  - Transmisión física                                |   |
|   |     |                                                      |   |
|   |     |  Tecnologías: Ethernet, WLAN, DSL                    |   |
|   +------------------------------------------------------------+   |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### OSI vs. TCP/IP: Mapeo de Capas

```
+--------------------------------------------------------------------+
|              MODELO OSI vs. MODELO TCP/IP                           |
+--------------------------------------------------------------------+
|                                                                     |
|        Modelo OSI                        Modelo TCP/IP              |
|   +---------------------+                                           |
|   | 7  Aplicación       | --+                                       |
|   +---------------------+   |         +---------------------+       |
|   | 6  Presentación     | --+-------> | 4  Aplicación       |       |
|   +---------------------+   |         |    (Application)    |       |
|   | 5  Sesión           | --+         +---------------------+       |
|   +---------------------+             +---------------------+       |
|   | 4  Transporte       | ----------> | 3  Transporte       |       |
|   |                     |             |    (Transport)      |       |
|   +---------------------+             +---------------------+       |
|   | 3  Red              | ----------> +---------------------+       |
|   |                     |             | 2  Internet         |       |
|   +---------------------+             +---------------------+       |
|   | 2  Enlace Datos     | --+         +---------------------+       |
|   +---------------------+   +-------> | 1  Acceso a Red     |       |
|   | 1  Física           | --+         |    (Network Access) |       |
|   +---------------------+             +---------------------+       |
|                                                                     |
|   7 capas                              4 capas                      |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### TCP vs. UDP

```
+--------------------------------------------------------------------+
|                       TCP vs. UDP                                   |
+--------------------------------------------------------------------+
|                                                                     |
|   TCP (Transmission Control Protocol)                               |
|   +------------------------------------------------------------+   |
|   |                                                             |   |
|   |  +-----+     +-----------------------------+    +-----+    |   |
|   |  | A   | <-- | Establ. conexión (3-Way)    | -->| B   |    |   |
|   |  |     | --> | Datos con confirmación      | <--|     |    |   |
|   |  |     | <-- | Cierre de conexión          | -->|     |    |   |
|   |  +-----+     +-----------------------------+    +-----+    |   |
|   |                                                             |   |
|   |  - Orientado a conexión                                     |   |
|   |  - Confiable (se confirma la recepción)                     |   |
|   |  - Orden garantizado                                        |   |
|   |  - Control de errores y retransmisión                       |   |
|   |  - Más lento debido a la sobrecarga                         |   |
|   |                                                             |   |
|   |  Casos de uso: HTTP, HTTPS, FTP, Email, SSH                 |   |
|   +------------------------------------------------------------+   |
|                                                                     |
|   UDP (User Datagram Protocol)                                      |
|   +------------------------------------------------------------+   |
|   |                                                             |   |
|   |  +-----+                                         +-----+    |   |
|   |  | A   | --> Datos --> Datos --> Datos -->      | B   |    |   |
|   |  |     |     (¡sin confirmación!)               |     |    |   |
|   |  +-----+                                         +-----+    |   |
|   |                                                             |   |
|   |  - Sin conexión                                             |   |
|   |  - No confiable (sin confirmación)                          |   |
|   |  - Orden no garantizado                                     |   |
|   |  - Más rápido, menos sobrecarga                             |   |
|   |  - Los paquetes pueden perderse                             |   |
|   |                                                             |   |
|   |  Casos de uso: DNS, DHCP, VoIP, Streaming, Juegos online    |   |
|   +------------------------------------------------------------+   |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### TCP 3-Way Handshake

```
+--------------------------------------------------------------------+
|                    TCP 3-WAY HANDSHAKE                              |
+--------------------------------------------------------------------+
|                                                                     |
|   Establecimiento de conexión con TCP:                              |
|                                                                     |
|       Cliente                              Servidor                 |
|         |                                   |                       |
|         |   1. SYN (Synchronize)            |                       |
|         | --------------------------------> |                       |
|         |   "Quiero establecer una          |                       |
|         |    conexión"                      |                       |
|         |                                   |                       |
|         |   2. SYN-ACK                      |                       |
|         | <-------------------------------- |                       |
|         |   "OK, lo reconozco"              |                       |
|         |                                   |                       |
|         |   3. ACK (Acknowledge)            |                       |
|         | --------------------------------> |                       |
|         |   "Confirmado, conexión           |                       |
|         |    establecida"                   |                       |
|         |                                   |                       |
|         |   ==========================     |                       |
|         |     ¡Conexión establecida!        |                       |
|         |   ==========================     |                       |
|         |                                   |                       |
|         |      Intercambio de datos...      |                       |
|         | <------------------------------> |                       |
|                                                                     |
|   Después del handshake, los datos pueden transmitirse bidireccion.|
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Puertos Importantes

```
+--------------------------------------------------------------------+
|                      PUERTOS IMPORTANTES                            |
+--------------------------------------------------------------------+
|                                                                     |
|   Puerto | Protocolo | Servicio        | Transporte                 |
|   -------+-----------+-----------------+----------------------------+
|   20     | FTP-Data  | Transf. archivos| TCP                        |
|   21     | FTP       | Canal control   | TCP                        |
|   22     | SSH       | Secure Shell    | TCP                        |
|   23     | Telnet    | Acceso remoto   | TCP                        |
|   25     | SMTP      | Enviar email    | TCP                        |
|   53     | DNS       | Resol. nombres  | TCP/UDP                    |
|   67/68  | DHCP      | Asignación IP   | UDP                        |
|   80     | HTTP      | Sitios web      | TCP                        |
|   110    | POP3      | Recibir email   | TCP                        |
|   143    | IMAP      | Recibir email   | TCP                        |
|   443    | HTTPS     | Web segura      | TCP                        |
|   3389   | RDP       | Escritorio Rem. | TCP                        |
|                                                                     |
|   Rangos de puertos:                                                |
|   +-------------------------------------------------------------+  |
|   | 0 - 1023      | Puertos bien conocidos (reserv. sistema)    |  |
|   | 1024 - 49151  | Puertos registrados (servicios registrados)  |  |
|   | 49152 - 65535 | Puertos dinámicos (temporales, lado cliente) |  |
|   +-------------------------------------------------------------+  |
|                                                                     |
+--------------------------------------------------------------------+
```

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **TCP** | Transmission Control Protocol (confiable) |
| **UDP** | User Datagram Protocol (rápido) |
| **Puerto** | Número para identificar servicios |
| **Socket** | Combinación de dirección IP y puerto |
| **3-Way Handshake** | Establecimiento de conexión con TCP |
| **SYN** | Synchronize (solicitud de conexión) |
| **ACK** | Acknowledge (confirmación) |

---

## Consejos para el Examen

### Preguntas Comunes del Examen

- ¿Cuántas capas tiene el modelo TCP/IP?
- ¿Diferencia entre TCP vs. UDP?
- ¿Qué puerto pertenece a qué servicio?

### Importante Recordar

- **TCP/IP = 4 capas** (¡no 7 como OSI!)
- **TCP:** Confiable, con conexión, con ACK
- **UDP:** Rápido, sin conexión, sin ACK
- **Puerto 80** = HTTP, **Puerto 443** = HTTPS
- **Puerto 25** = SMTP (enviar email)
- **3-Way Handshake:** SYN -> SYN-ACK -> ACK

---

## Ejercicios Prácticos

### Ejercicio 1
Nombra las 4 capas del modelo TCP/IP.

**Solución:**
1. Capa de Acceso a la Red
2. Capa de Internet
3. Capa de Transporte
4. Capa de Aplicación

### Ejercicio 2
¿Cuándo usas TCP, cuándo UDP?

**Solución:**
**Usar TCP para:**
- Sitios web (HTTP/HTTPS)
- Email (SMTP, POP3, IMAP)
- Transferencia de archivos (FTP)
- Cuando la transmisión confiable es importante

**Usar UDP para:**
- Streaming de video
- Telefonía VoIP
- Juegos en línea
- Consultas DNS
- Cuando la velocidad es más importante que 100% de confiabilidad

### Ejercicio 3
¿Qué puertos pertenecen a los siguientes servicios: HTTP, HTTPS, SSH, DNS?

**Solución:**
- HTTP: **Puerto 80**
- HTTPS: **Puerto 443**
- SSH: **Puerto 22**
- DNS: **Puerto 53**

---

## Referencias Cruzadas

- [07-01-01 Modelo OSI](./07-01-01-osi-model.md) - Modelo de referencia teórico
- [07-01-03 Protocolos](./07-01-03-protocols.md) - Protocolos en detalle
- [07-02-01 IPv4](../07-02-ip-addressing/07-02-01-ipv4.md) - Direccionamiento IP
