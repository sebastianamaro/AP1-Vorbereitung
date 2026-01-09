# Protocolos de Red

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Conocer los protocolos de red más importantes
- Comprender la función de los protocolos
- Asignar protocolos a las capas OSI
- Distinguir entre protocolos de correo electrónico

---

## Contenido Principal

### ¿Qué son los Protocolos?

```
+--------------------------------------------------------------------+
|                    PROTOCOLOS DE RED                                |
+--------------------------------------------------------------------+
|                                                                     |
|   Definición:                                                       |
|   +-------------------------------------------------------------+  |
|   | Un protocolo es un conjunto de reglas y estándares que      |  |
|   | definen cómo se intercambian datos entre dispositivos       |  |
|   | en una red.                                                  |  |
|   +-------------------------------------------------------------+  |
|                                                                     |
|   Los protocolos definen:                                           |
|   - Formato de los datos (sintaxis)                                 |
|   - Significado de los datos (semántica)                            |
|   - Orden del intercambio (temporización)                           |
|   - Detección y manejo de errores                                   |
|                                                                     |
|   Ejemplo - Comunicación como una llamada telefónica:               |
|   +-------------------------------------------------------------+  |
|   | 1. El llamante marca el número    -> Establecimiento conexión|  |
|   | 2. "Hola, soy Max"                -> Identificación          |  |
|   | 3. "¿Entendido?" - "Sí, entendido"-> Confirmación            |  |
|   | 4. "Adiós"                        -> Cierre de conexión      |  |
|   +-------------------------------------------------------------+  |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Protocolos de Aplicación (Capa 7)

```
+--------------------------------------------------------------------+
|                  PROTOCOLOS WEB: HTTP/HTTPS                         |
+--------------------------------------------------------------------+
|                                                                     |
|   HTTP (HyperText Transfer Protocol)                                |
|   +------------------------------------------------------------+   |
|   | - Transmisión de páginas web                               |   |
|   | - Puerto 80                                                 |   |
|   | - Texto plano (¡sin cifrar!)                                |   |
|   | - Modelo solicitud-respuesta                                |   |
|   |                                                             |   |
|   |    Navegador                        Servidor web            |   |
|   |      |   GET /index.html HTTP/1.1      |                    |   |
|   |      | ------------------------------> |                    |   |
|   |      |                                  |                    |   |
|   |      |   HTTP/1.1 200 OK               |                    |   |
|   |      |   <html>...</html>              |                    |   |
|   |      | <------------------------------ |                    |   |
|   +------------------------------------------------------------+   |
|                                                                     |
|   HTTPS (HTTP Secure)                                               |
|   +------------------------------------------------------------+   |
|   | - HTTP con cifrado (TLS/SSL)                                |   |
|   | - Puerto 443                                                |   |
|   | - Protege contra interceptación y manipulación              |   |
|   | - Reconocible por el símbolo de candado en el navegador     |   |
|   | - Estándar para todos los sitios web modernos               |   |
|   +------------------------------------------------------------+   |
|                                                                     |
+--------------------------------------------------------------------+
```

```
+--------------------------------------------------------------------+
|                     PROTOCOLOS DE EMAIL                             |
+--------------------------------------------------------------------+
|                                                                     |
|   +-------------------------------------------------------------+  |
|   |                    FLUJO DE EMAIL                            |  |
|   |                                                              |  |
|   |   Remitente     Servidor Correo  Servidor Correo Destinatario|  |
|   |   +-----+         +-----+           +-----+       +-----+   |  |
|   |   |     |--SMTP-->|     |---SMTP--->|     |<-----|     |   |  |
|   |   |     |         |     |           |     | POP3/ |     |   |  |
|   |   |     |         |     |           |     | IMAP  |     |   |  |
|   |   +-----+         +-----+           +-----+       +-----+   |  |
|   |                                                              |  |
|   +-------------------------------------------------------------+  |
|                                                                     |
|   SMTP (Simple Mail Transfer Protocol)                              |
|   +------------------------------------------------------------+   |
|   | - Para ENVIAR correos                                       |   |
|   | - Puerto 25 (sin cifrar) o 587 (cifrado)                    |   |
|   | - Conexión al servidor de correo saliente                   |   |
|   +------------------------------------------------------------+   |
|                                                                     |
|   POP3 (Post Office Protocol v3)                                    |
|   +------------------------------------------------------------+   |
|   | - Para RECIBIR correos                                      |   |
|   | - Puerto 110 (sin cifrar) o 995 (cifrado)                   |   |
|   | - Los correos se descargan y SE ELIMINAN del servidor       |   |
|   | - Trabajo sin conexión posible                              |   |
|   | - Solo en un dispositivo                                    |   |
|   +------------------------------------------------------------+   |
|                                                                     |
|   IMAP (Internet Message Access Protocol)                           |
|   +------------------------------------------------------------+   |
|   | - Para RECIBIR correos                                      |   |
|   | - Puerto 143 (sin cifrar) o 993 (cifrado)                   |   |
|   | - Los correos PERMANECEN en el servidor                     |   |
|   | - Sincronización entre múltiples dispositivos               |   |
|   | - Requiere conexión a Internet constante                    |   |
|   +------------------------------------------------------------+   |
|                                                                     |
+--------------------------------------------------------------------+
```

```
+--------------------------------------------------------------------+
|                    POP3 vs. IMAP                                    |
+--------------------------------------------------------------------+
|                                                                     |
|                     POP3                    IMAP                    |
|   +-----------------------------+------------------------------+   |
|   | Los correos se descargan    | Los correos permanecen en    |   |
|   | al cliente                  | el servidor                  |   |
|   +-----------------------------+------------------------------+   |
|   | Los correos se eliminan     | Múltiples dispositivos       |   |
|   | del servidor                | pueden sincronizarse         |   |
|   +-----------------------------+------------------------------+   |
|   | Bueno para un solo disp.    | Bueno para múltiples disp.   |   |
|   +-----------------------------+------------------------------+   |
|   | Trabajo sin conexión posible| Requiere conexión a Internet |   |
|   +-----------------------------+------------------------------+   |
|   | Menos espacio en servidor   | Más espacio en servidor      |   |
|   | necesario                   | necesario                    |   |
|   +-----------------------------+------------------------------+   |
|   | Puerto 110 / 995            | Puerto 143 / 993             |   |
|   +-----------------------------+------------------------------+   |
|                                                                     |
|   ! Relevante para examen: ¡Conocer la diferencia!                  |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Otros Protocolos Importantes

```
+--------------------------------------------------------------------+
|                    OTROS PROTOCOLOS                                 |
+--------------------------------------------------------------------+
|                                                                     |
|   DNS (Domain Name System)                                          |
|   +------------------------------------------------------------+   |
|   | - Traduce nombres de dominio a direcciones IP               |   |
|   | - Puerto 53 (UDP y TCP)                                     |   |
|   |                                                             |   |
|   |   www.ejemplo.com  ->  Servidor DNS  ->  192.168.1.100      |   |
|   |                                                             |   |
|   | ¡Sin DNS tendríamos que memorizar direcciones IP!           |   |
|   +------------------------------------------------------------+   |
|                                                                     |
|   DHCP (Dynamic Host Configuration Protocol)                        |
|   +------------------------------------------------------------+   |
|   | - Asignación automática de direcciones IP                   |   |
|   | - Puerto 67 (servidor), Puerto 68 (cliente)                 |   |
|   |                                                             |   |
|   |   Nuevo dispositivo -> Servidor DHCP -> IP, Gateway, DNS    |   |
|   |                        asignados                            |   |
|   |                                                             |   |
|   | Proceso: DORA (Discover, Offer, Request, Acknowledge)       |   |
|   +------------------------------------------------------------+   |
|                                                                     |
|   FTP (File Transfer Protocol)                                      |
|   +------------------------------------------------------------+   |
|   | - Transferencia de archivos entre ordenadores               |   |
|   | - Puerto 20 (datos), Puerto 21 (control)                    |   |
|   | - Sin cifrar (SFTP/FTPS para variante cifrada)              |   |
|   +------------------------------------------------------------+   |
|                                                                     |
|   SSH (Secure Shell)                                                |
|   +------------------------------------------------------------+   |
|   | - Acceso remoto cifrado a sistemas                          |   |
|   | - Puerto 22                                                 |   |
|   | - Reemplaza al inseguro Telnet (Puerto 23)                  |   |
|   +------------------------------------------------------------+   |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Protocolos por Capa OSI

```
+--------------------------------------------------------------------+
|                PROTOCOLOS POR CAPA OSI                              |
+--------------------------------------------------------------------+
|                                                                     |
|   Capa  | Protocolos                                                |
|   ------+-----------------------------------------------------------+
|   7     | HTTP, HTTPS, FTP, SMTP, POP3, IMAP, DNS, DHCP,            |
|   (App) | SSH, Telnet, SNMP, NTP                                    |
|   ------+-----------------------------------------------------------+
|   6     | SSL/TLS, JPEG, MPEG, ASCII                                |
|   (Pres)|                                                           |
|   ------+-----------------------------------------------------------+
|   5     | NetBIOS, RPC, SQL                                         |
|   (Ses) |                                                           |
|   ------+-----------------------------------------------------------+
|   4     | TCP, UDP                                                   |
|   (Trns)|                                                           |
|   ------+-----------------------------------------------------------+
|   3     | IP (IPv4, IPv6), ICMP, ARP, IGMP                          |
|   (Red) |                                                           |
|   ------+-----------------------------------------------------------+
|   2     | Ethernet, WLAN (802.11), PPP                              |
|   (Enl) |                                                           |
|   ------+-----------------------------------------------------------+
|   1     | - (estándares físicos como RS-232)                        |
|   (Fís) |                                                           |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Resumen de Protocolos con Puertos

```
+--------------------------------------------------------------------+
|              PROTOCOLOS IMPORTANTES CON PUERTOS                     |
+--------------------------------------------------------------------+
|                                                                     |
|   Protocolo | Puerto   | Función             | Cifrado              |
|   ----------+----------+---------------------+----------------------+
|   HTTP      | 80       | Sitios web          | No                   |
|   HTTPS     | 443      | Sitios web seguros  | Sí (TLS)             |
|   FTP       | 20/21    | Transfer. archivos  | No                   |
|   SFTP      | 22       | Transfer. segura    | Sí (SSH)             |
|   SSH       | 22       | Acceso remoto       | Sí                   |
|   Telnet    | 23       | Acceso remoto       | No                   |
|   SMTP      | 25/587   | Enviar email        | 587 con TLS          |
|   DNS       | 53       | Resol. nombres      | No                   |
|   DHCP      | 67/68    | Asignación IP       | No                   |
|   POP3      | 110/995  | Recibir email       | 995 con TLS          |
|   IMAP      | 143/993  | Recibir email       | 993 con TLS          |
|   RDP       | 3389     | Escritorio Remoto   | Sí                   |
|                                                                     |
+--------------------------------------------------------------------+
```

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **HTTP** | Protocolo para sitios web (Puerto 80) |
| **HTTPS** | HTTP cifrado (Puerto 443) |
| **SMTP** | Envío de email (Puerto 25/587) |
| **POP3** | Recepción de email, elimina del servidor |
| **IMAP** | Recepción de email, permanece en servidor |
| **DNS** | Resolución de nombres (Puerto 53) |
| **DHCP** | Asignación automática de IP |
| **FTP** | Transferencia de archivos (Puerto 20/21) |

---

## Consejos para el Examen

### Preguntas Comunes del Examen

- ¿Diferencia POP3 vs. IMAP?
- ¿Qué puerto pertenece a qué protocolo?
- ¿Qué significa HTTP/HTTPS?

### Importante Recordar

- **SMTP** = ENVÍO de email
- **POP3** = RECEPCIÓN de email, SE ELIMINA
- **IMAP** = RECEPCIÓN de email, PERMANECE en servidor
- **HTTP = Puerto 80**, **HTTPS = Puerto 443**
- **DNS = Puerto 53** (Resolución de nombres)
- SSH reemplaza a Telnet (cifrado)

---

## Ejercicios Prácticos

### Ejercicio 1
Un empleado quiere mantener sus correos sincronizados en el portátil y el smartphone. ¿Qué protocolo recomiendas?

**Solución:**
**IMAP** (Internet Message Access Protocol)

Justificación:
- Los correos permanecen en el servidor
- Los cambios se sincronizan en todos los dispositivos
- Leer un correo en el smartphone -> también marcado como leído en el portátil
- POP3 solo descargaría los correos a un dispositivo y los eliminaría del servidor

### Ejercicio 2
Asigna: HTTP, SMTP, DNS, DHCP - ¿qué tarea tiene cada protocolo?

**Solución:**
- **HTTP:** Transmisión de páginas web
- **SMTP:** Envío de correos electrónicos
- **DNS:** Resolución de nombres de dominio a direcciones IP
- **DHCP:** Asignación automática de direcciones IP

### Ejercicio 3
¿Por qué deberías usar HTTPS en lugar de HTTP?

**Solución:**
HTTPS debería usarse porque:
- **Cifrado:** Los datos no pueden ser interceptados
- **Integridad:** Los datos no pueden ser manipulados
- **Autenticidad:** El certificado confirma la identidad del sitio web
- **Contraseñas y datos sensibles** están protegidos
- Requerido para páginas de inicio de sesión, banca en línea, tiendas

---

## Referencias Cruzadas

- [07-01-01 Modelo OSI](./07-01-01-osi-model.md) - Modelo de capas
- [07-01-02 Modelo TCP/IP](./07-01-02-tcp-ip-model.md) - TCP vs. UDP
- [04-05-03 Certificados](../../04-it-security/04-05-cryptography/04-05-03-certificates.md) - Certificados HTTPS
- [07-02-04 DHCP](../07-02-ip-addressing/07-02-04-dhcp.md) - Asignación IP en detalle
