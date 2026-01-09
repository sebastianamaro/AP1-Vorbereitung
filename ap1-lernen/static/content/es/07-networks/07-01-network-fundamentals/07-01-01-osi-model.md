# Modelo OSI

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Conocer y nombrar las 7 capas del modelo OSI
- Comprender las tareas de cada capa
- Asignar protocolos y hardware a las capas
- Explicar el transporte de datos a través de las capas

---

## Contenido Principal

### ¿Qué es el Modelo OSI?

```
+--------------------------------------------------------------------+
|                       MODELO OSI                                    |
+--------------------------------------------------------------------+
|                                                                     |
|   OSI = Open Systems Interconnection                               |
|         (Interconexión de Sistemas Abiertos)                       |
|                                                                     |
|   +-------------------------------------------------------------+  |
|   | El modelo OSI es un modelo de referencia que divide         |  |
|   | la comunicación en redes en 7 capas.                        |  |
|   |                                                              |  |
|   | Describe CÓMO los datos se transmiten desde una aplicación  |  |
|   | en un ordenador hasta una aplicación en otro ordenador.     |  |
|   +-------------------------------------------------------------+  |
|                                                                     |
|   Desarrollado por: ISO (Organización Internacional para           |
|                     la Normalización)                              |
|                                                                     |
|   Propósito:                                                        |
|   - Estandarización de la comunicación en red                      |
|   - Independencia del fabricante                                    |
|   - Estructura modular (las capas pueden cambiarse independient.)  |
|   - Comprensión simplificada de procesos complejos                 |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Las 7 Capas

```
+--------------------------------------------------------------------+
|                    LAS 7 CAPAS OSI                                  |
+--------------------------------------------------------------------+
|                                                                     |
|   Capa      |  Nombre                 |  Descripción                |
|   ----------+------------------------+-----------------------------+
|      7      |  Capa de Aplicación    |  Interfaz de usuario a red  |
|      6      |  Capa de Presentación  |  Conversión formato datos   |
|      5      |  Capa de Sesión        |  Gestión de conexiones      |
|      4      |  Capa de Transporte    |  Comunicación extremo a ext.|
|      3      |  Capa de Red           |  Direccionam. lógico/enrut. |
|      2      |  Capa de Enlace Datos  |  Direccionam. físico/tramas |
|      1      |  Capa Física           |  Transmisión de bits        |
|                                                                     |
|   MNEMOTÉCNICO (de arriba a abajo):                                 |
|   +-------------------------------------------------------------+  |
|   |  "Amigos Por Siempre Tendrán Redes De Fibra"               |  |
|   |                                                              |  |
|   |   A = Aplicación                                            |  |
|   |   P = Presentación                                          |  |
|   |   S = Sesión                                                |  |
|   |   T = Transporte                                            |  |
|   |   R = Red                                                   |  |
|   |   D = Datos (Enlace de)                                     |  |
|   |   F = Física                                                |  |
|   +-------------------------------------------------------------+  |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Capas en Detalle

```
+--------------------------------------------------------------------+
|                CAPA 7: CAPA DE APLICACIÓN                           |
+--------------------------------------------------------------------+
|                                                                     |
|   Tarea:                                                            |
|   +-------------------------------------------------------------+  |
|   | - Interfaz entre la red y las aplicaciones                  |  |
|   | - Proporciona servicios para usuarios finales               |  |
|   | - Correo electrónico, web, transferencia de archivos        |  |
|   +-------------------------------------------------------------+  |
|                                                                     |
|   Protocolos:                                                       |
|   - HTTP/HTTPS (Web)                                                |
|   - FTP (Transferencia de archivos)                                 |
|   - SMTP, POP3, IMAP (Correo electrónico)                          |
|   - DNS (Resolución de nombres)                                     |
|   - DHCP (Asignación de direcciones IP)                            |
|                                                                     |
+--------------------------------------------------------------------+

+--------------------------------------------------------------------+
|                CAPA 6: CAPA DE PRESENTACIÓN                         |
+--------------------------------------------------------------------+
|                                                                     |
|   Tarea:                                                            |
|   +-------------------------------------------------------------+  |
|   | - Conversión de formato de datos                            |  |
|   | - Cifrado/Descifrado                                        |  |
|   | - Compresión/Descompresión                                  |  |
|   | - Codificación de caracteres (ASCII, UTF-8)                 |  |
|   +-------------------------------------------------------------+  |
|                                                                     |
|   Ejemplos:                                                         |
|   - SSL/TLS (Cifrado)                                               |
|   - JPEG, GIF, MPEG (Codificación)                                  |
|   - ASCII, UTF-8 (Conjuntos de caracteres)                          |
|                                                                     |
+--------------------------------------------------------------------+

+--------------------------------------------------------------------+
|                CAPA 5: CAPA DE SESIÓN                               |
+--------------------------------------------------------------------+
|                                                                     |
|   Tarea:                                                            |
|   +-------------------------------------------------------------+  |
|   | - Establecimiento y terminación de conexiones (sesiones)    |  |
|   | - Sincronización del intercambio de datos                   |  |
|   | - Control de diálogo (¿Quién envía cuándo?)                 |  |
|   +-------------------------------------------------------------+  |
|                                                                     |
|   Ejemplos:                                                         |
|   - NetBIOS                                                         |
|   - RPC (Llamada a Procedimiento Remoto)                            |
|                                                                     |
+--------------------------------------------------------------------+
```

```
+--------------------------------------------------------------------+
|                CAPA 4: CAPA DE TRANSPORTE                           |
+--------------------------------------------------------------------+
|                                                                     |
|   Tarea:                                                            |
|   +-------------------------------------------------------------+  |
|   | - Conexión extremo a extremo entre procesos                 |  |
|   | - Segmentación y reensamblaje de datos                      |  |
|   | - Control de flujo                                          |  |
|   | - Control de errores                                        |  |
|   | - Direccionamiento por puertos                              |  |
|   +-------------------------------------------------------------+  |
|                                                                     |
|   Protocolos:                                                       |
|   +-----------------+------------------------------------------+   |
|   | TCP             | Orientado a conexión, confiable          |   |
|   |                 | (Sitios web, email, transferencia arch.) |   |
|   +-----------------+------------------------------------------+   |
|   | UDP             | Sin conexión, rápido                     |   |
|   |                 | (Streaming, VoIP, DNS)                   |   |
|   +-----------------+------------------------------------------+   |
|                                                                     |
|   Unidad de datos: SEGMENTO                                         |
|                                                                     |
+--------------------------------------------------------------------+

+--------------------------------------------------------------------+
|                CAPA 3: CAPA DE RED                                  |
+--------------------------------------------------------------------+
|                                                                     |
|   Tarea:                                                            |
|   +-------------------------------------------------------------+  |
|   | - Direccionamiento lógico (direcciones IP)                  |  |
|   | - Enrutamiento (búsqueda de rutas entre redes)              |  |
|   | - Reenvío de paquetes                                       |  |
|   +-------------------------------------------------------------+  |
|                                                                     |
|   Protocolos:                                                       |
|   - IP (Internet Protocol) - IPv4, IPv6                             |
|   - ICMP (Ping, Traceroute)                                         |
|   - ARP (IP -> dirección MAC)                                       |
|                                                                     |
|   Hardware: ROUTER                                                  |
|                                                                     |
|   Unidad de datos: PAQUETE                                          |
|                                                                     |
+--------------------------------------------------------------------+

+--------------------------------------------------------------------+
|                CAPA 2: CAPA DE ENLACE DE DATOS                      |
+--------------------------------------------------------------------+
|                                                                     |
|   Tarea:                                                            |
|   +-------------------------------------------------------------+  |
|   | - Direccionamiento físico (direcciones MAC)                 |  |
|   | - Detección de errores (suma de verificación CRC)           |  |
|   | - Control de acceso al medio                                |  |
|   | - Tramado                                                   |  |
|   +-------------------------------------------------------------+  |
|                                                                     |
|   Protocolos/Estándares:                                            |
|   - Ethernet                                                        |
|   - WLAN (IEEE 802.11)                                              |
|   - PPP (Protocolo Punto a Punto)                                   |
|                                                                     |
|   Hardware: SWITCH, BRIDGE                                          |
|                                                                     |
|   Unidad de datos: TRAMA                                            |
|                                                                     |
+--------------------------------------------------------------------+

+--------------------------------------------------------------------+
|                CAPA 1: CAPA FÍSICA                                  |
+--------------------------------------------------------------------+
|                                                                     |
|   Tarea:                                                            |
|   +-------------------------------------------------------------+  |
|   | - Transmisión de bits sobre medio físico                    |  |
|   | - Señales eléctricas/ópticas                                |  |
|   | - Conectores, cables, voltajes                              |  |
|   | - Tasas de transmisión                                      |  |
|   +-------------------------------------------------------------+  |
|                                                                     |
|   Medios:                                                           |
|   - Cables de cobre (Cat5, Cat6, Cat7)                              |
|   - Cables de fibra óptica                                          |
|   - Ondas de radio (WLAN)                                           |
|                                                                     |
|   Hardware: HUB, REPETIDOR, CABLES, TARJETA DE RED                  |
|                                                                     |
|   Unidad de datos: BIT                                              |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Visión General: Capas, Hardware y Protocolos

```
+--------------------------------------------------------------------+
|           MODELO OSI: VISIÓN GENERAL COMPLETA                       |
+--------------------------------------------------------------------+
|                                                                     |
|  No | Capa            | Hardware      | Protocolos    | Unidad     |
|  ---+-----------------+---------------+---------------+------------+
|  7  | Aplicación      | Gateway       | HTTP, FTP,    | Datos      |
|     |                 |               | SMTP, DNS     |            |
|  ---+-----------------+---------------+---------------+------------+
|  6  | Presentación    |               | SSL/TLS,      | Datos      |
|     |                 |               | JPEG, ASCII   |            |
|  ---+-----------------+---------------+---------------+------------+
|  5  | Sesión          |               | NetBIOS, RPC  | Datos      |
|  ---+-----------------+---------------+---------------+------------+
|  4  | Transporte      |               | TCP, UDP      | Segmento   |
|  ---+-----------------+---------------+---------------+------------+
|  3  | Red             | Router        | IP, ICMP      | Paquete    |
|  ---+-----------------+---------------+---------------+------------+
|  2  | Enlace Datos    | Switch,Bridge | Ethernet,WLAN | Trama      |
|  ---+-----------------+---------------+---------------+------------+
|  1  | Física          | Hub,Repetidor,| -             | Bit        |
|     |                 | Cables        |               |            |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Encapsulación de Datos

```
+--------------------------------------------------------------------+
|                    ENCAPSULACIÓN DE DATOS                           |
+--------------------------------------------------------------------+
|                                                                     |
|   Al enviar, los datos pasan por las capas de arriba               |
|   hacia abajo. Cada capa añade una cabecera:                       |
|                                                                     |
|   Capa 7-5:  +------------------------------------+                |
|              |             DATOS                  |                |
|              +------------------------------------+                |
|                              |                                      |
|   Capa 4:    +----+-------------------------------+                |
|   (Transp.)  |TCP |            DATOS             | = Segmento     |
|              +----+-------------------------------+                |
|                              |                                      |
|   Capa 3:    +----+----+--------------------------+                |
|   (Red)      | IP |TCP |         DATOS           | = Paquete      |
|              +----+----+--------------------------+                |
|                              |                                      |
|   Capa 2:    +----+----+----+--------------+-----+                |
|   (Enlace)   |ETH | IP |TCP |    DATOS     | CRC | = Trama        |
|              +----+----+----+--------------+-----+                |
|                              |                                      |
|   Capa 1:    01101001 01101110 01100110 01101111...  = Bits       |
|                                                                     |
|   Al recibir, el proceso se invierte (desencapsulación)            |
|                                                                     |
+--------------------------------------------------------------------+
```

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **OSI** | Open Systems Interconnection (Interconexión de Sistemas Abiertos) |
| **Encapsulación** | Adición de información de cabecera por capa |
| **PDU** | Protocol Data Unit (Unidad de datos del protocolo por capa) |
| **Segmento** | Unidad de datos Capa 4 |
| **Paquete** | Unidad de datos Capa 3 |
| **Trama** | Unidad de datos Capa 2 |
| **Cabecera** | Información de control antes de la carga útil |

---

## Consejos para el Examen

### Preguntas Comunes del Examen

- Nombrar las 7 capas OSI
- ¿A qué capa pertenece un router/switch?
- Asignar protocolos a las capas

### Importante Recordar

- **¡Conocer las 7 capas de memoria!**
- **Router** = Capa 3 (Red, direcciones IP)
- **Switch** = Capa 2 (Enlace de datos, direcciones MAC)
- **Hub** = Capa 1 (solo físico)
- **TCP** = Capa 4 (confiable)
- **IP** = Capa 3 (direccionamiento)
- Mnemotécnico: "Amigos Por Siempre Tendrán Redes De Fibra"

---

## Ejercicios Prácticos

### Ejercicio 1
Nombra las 7 capas del modelo OSI de abajo hacia arriba.

**Solución:**
1. Capa Física
2. Capa de Enlace de Datos
3. Capa de Red
4. Capa de Transporte
5. Capa de Sesión
6. Capa de Presentación
7. Capa de Aplicación

### Ejercicio 2
Asigna: Router, Switch, Hub - ¿en qué capa OSI operan?

**Solución:**
- **Hub:** Capa 1 (Física) - solo reenvía señales eléctricas
- **Switch:** Capa 2 (Enlace de datos) - trabaja con direcciones MAC
- **Router:** Capa 3 (Red) - trabaja con direcciones IP

### Ejercicio 3
¿A qué capa OSI pertenecen los siguientes protocolos: HTTP, IP, TCP, Ethernet?

**Solución:**
- **HTTP:** Capa 7 (Aplicación)
- **TCP:** Capa 4 (Transporte)
- **IP:** Capa 3 (Red)
- **Ethernet:** Capa 2 (Enlace de datos)

---

## Referencias Cruzadas

- [07-01-02 Modelo TCP/IP](./07-01-02-tcp-ip-model.md) - Modelo de referencia práctico
- [07-01-03 Protocolos](./07-01-03-protocols.md) - Protocolos de red importantes
- [07-05 Hardware de Red](../07-05-network-hardware.md) - Router, Switch, Hub
