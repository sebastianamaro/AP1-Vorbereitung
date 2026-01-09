# Herramientas de Diagnóstico de Red

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Conocer las herramientas de diagnóstico de red importantes
- Aplicar los comandos de línea de comandos
- Analizar problemas de red sistemáticamente
- Interpretar la salida de las herramientas

---

## Contenido Principal

### Visión General de Herramientas de Diagnóstico

```
+--------------------------------------------------------------------+
|                   VISIÓN GENERAL HERRAMIENTAS DIAGNÓSTICO           |
+--------------------------------------------------------------------+
|                                                                     |
|   Comando          | Windows        | Linux/Mac     | Función      |
|   -----------------+----------------+---------------+--------------|
|   Configuración IP | ipconfig       | ifconfig/ip   | Mostrar IP   |
|   Alcanzabilidad   | ping           | ping          | Conexión     |
|   Trazar ruta      | tracert        | traceroute    | Mostrar ruta |
|   Consulta DNS     | nslookup       | nslookup/dig  | Resolver nom.|
|   Conexiones       | netstat        | netstat/ss    | Mostrar puert|
|   Tabla ARP        | arp -a         | arp -a        | Mapeo MAC-IP |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### ipconfig / ifconfig

```
+--------------------------------------------------------------------+
|                    IPCONFIG (Windows)                               |
+--------------------------------------------------------------------+
|                                                                     |
|   Muestra la configuración IP del ordenador.                       |
|                                                                     |
|   Comandos importantes:                                             |
|   +------------------------------------------------------------+  |
|   | ipconfig              | Muestra resumen breve              |  |
|   | ipconfig /all         | Muestra todos los detalles (incl.MAC)|  |
|   | ipconfig /release     | Libera dirección DHCP              |  |
|   | ipconfig /renew       | Solicita nueva dirección DHCP      |  |
|   | ipconfig /flushdns    | Limpia caché DNS                   |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   Ejemplo de salida (ipconfig /all):                               |
|   +------------------------------------------------------------+  |
|   | Adaptador Ethernet Conexión de Área Local:                  |  |
|   |                                                             |  |
|   |   Sufijo DNS específico conexión: empresa.local            |  |
|   |   Dirección física.........: 00-1A-2B-3C-4D-5E  <- MAC     |  |
|   |   DHCP habilitado..........: Sí                            |  |
|   |   Dirección IPv4...........: 192.168.1.100  <- IP          |  |
|   |   Máscara de subred........: 255.255.255.0                 |  |
|   |   Puerta enlace predet.....: 192.168.1.1    <- Router      |  |
|   |   Servidor DHCP............: 192.168.1.1                   |  |
|   |   Servidores DNS...........: 192.168.1.1, 8.8.8.8          |  |
|   |   Concesión obtenida.......: 01/08/2025 08:00:00           |  |
|   |   La concesión expira......: 01/09/2025 08:00:00           |  |
|   |                                                             |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   SOLUCIÓN DE PROBLEMAS con ipconfig:                              |
|   - IP empieza con 169.254.x.x -> Problema DHCP (dirección APIPA) |
|   - Sin gateway -> Acceso a Internet no posible                    |
|   - ipconfig /release + /renew -> Obtener nueva IP de DHCP        |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### ping

```
+--------------------------------------------------------------------+
|                          PING                                       |
+--------------------------------------------------------------------+
|                                                                     |
|   Comprueba si un destino en la red es alcanzable.                 |
|   Usa ICMP (Internet Control Message Protocol).                    |
|                                                                     |
|   Sintaxis:                                                         |
|   +------------------------------------------------------------+  |
|   | ping <dirección IP o nombre de host>                        |  |
|   | ping 192.168.1.1          | Ping a dirección IP            |  |
|   | ping www.google.com       | Ping a nombre host (prueba DNS)|  |
|   | ping -t 192.168.1.1       | Ping continuo (Windows)        |  |
|   | ping -n 10 192.168.1.1    | Enviar 10 paquetes             |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   Ejemplo de salida (Éxito):                                       |
|   +------------------------------------------------------------+  |
|   | Haciendo ping a 192.168.1.1 con 32 bytes de datos:          |  |
|   | Respuesta desde 192.168.1.1: bytes=32 tiempo=1ms TTL=64     |  |
|   | Respuesta desde 192.168.1.1: bytes=32 tiempo=1ms TTL=64     |  |
|   | Respuesta desde 192.168.1.1: bytes=32 tiempo<1ms TTL=64     |  |
|   | Respuesta desde 192.168.1.1: bytes=32 tiempo=1ms TTL=64     |  |
|   |                                                             |  |
|   | Estadísticas de ping para 192.168.1.1:                      |  |
|   |   Paquetes: Enviados = 4, Recibidos = 4, Perdidos = 0 (0%)  |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   Ejemplo de salida (Error):                                       |
|   +------------------------------------------------------------+  |
|   | Tiempo de espera agotado para esta solicitud.               |  |
|   | -> Destino inalcanzable o firewall bloqueando              |  |
|   |                                                             |  |
|   | Host de destino inaccesible.                                |  |
|   | -> Problema de enrutamiento, no hay ruta al destino        |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   SOLUCIÓN DE PROBLEMAS SISTEMÁTICA con Ping:                      |
|   1. ping 127.0.0.1         -> Comprobar pila TCP/IP           |
|   2. ping <IP propia>       -> Comprobar adaptador de red      |
|   3. ping <Gateway>         -> ¿Es alcanzable el router?       |
|   4. ping 8.8.8.8           -> ¿Es alcanzable Internet? (indep DNS)|
|   5. ping www.google.com    -> ¿Funciona DNS?                  |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### tracert / traceroute

```
+--------------------------------------------------------------------+
|                    TRACERT (Windows)                                |
+--------------------------------------------------------------------+
|                                                                     |
|   Muestra la ruta (camino) al destino a través de todos los saltos |
|   intermedios.                                                      |
|                                                                     |
|   Sintaxis:                                                         |
|   +------------------------------------------------------------+  |
|   | tracert <dirección IP o nombre de host>                     |  |
|   | tracert www.google.com                                      |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   Ejemplo de salida:                                               |
|   +------------------------------------------------------------+  |
|   | Traza a la dirección www.google.com [142.250.x.x]:          |  |
|   |                                                             |  |
|   |   1    <1 ms   <1 ms   <1 ms  192.168.1.1    <- Router     |  |
|   |   2     8 ms    7 ms    8 ms  10.0.0.1       <- ISP        |  |
|   |   3    12 ms   11 ms   12 ms  172.16.x.x                   |  |
|   |   4    15 ms   14 ms   15 ms  ...                          |  |
|   |   5    20 ms   19 ms   20 ms  142.250.x.x    <- Destino    |  |
|   |                                                             |  |
|   | Traza completada.                                           |  |
|   |                                                             |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   Interpretación:                                                   |
|   - Cada línea = un router (salto) en el camino                    |
|   - 3 valores de tiempo = 3 paquetes de prueba con tiempo respuesta|
|   - * * * = Sin respuesta (firewall o tiempo agotado)              |
|   - Ayuda a localizar cuellos de botella o caídas                  |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### nslookup

```
+--------------------------------------------------------------------+
|                       NSLOOKUP                                      |
+--------------------------------------------------------------------+
|                                                                     |
|   Realiza consultas DNS (Nombre -> IP o IP -> Nombre).             |
|                                                                     |
|   Sintaxis:                                                         |
|   +------------------------------------------------------------+  |
|   | nslookup <nombre de host>                                   |  |
|   | nslookup www.google.com                                     |  |
|   | nslookup <IP>           -> Búsqueda inversa                 |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   Ejemplo de salida:                                               |
|   +------------------------------------------------------------+  |
|   | Servidor:   Unknown                                         |  |
|   | Address:    192.168.1.1    <- Servidor DNS usado           |  |
|   |                                                             |  |
|   | Respuesta no autoritativa:                                  |  |
|   | Nombre:     www.google.com                                  |  |
|   | Addresses:  142.250.185.99  <- Dirección IP resuelta       |  |
|   |             2a00:1450:4001::...  (IPv6)                     |  |
|   |                                                             |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   Solución de problemas con nslookup:                              |
|   - "Tiempo de espera agotado" -> Servidor DNS inalcanzable        |
|   - "Dominio no existente" -> El dominio no existe                 |
|   - Servidor DNS incorrecto -> Probar alternativo (8.8.8.8)        |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### netstat

```
+--------------------------------------------------------------------+
|                        NETSTAT                                      |
+--------------------------------------------------------------------+
|                                                                     |
|   Muestra conexiones de red, puertos abiertos y estadísticas.      |
|                                                                     |
|   Comandos importantes:                                             |
|   +------------------------------------------------------------+  |
|   | netstat -an     | Todas las conexiones, numérico           |  |
|   | netstat -b      | Muestra programas asociados (Admin)      |  |
|   | netstat -r      | Muestra tabla de enrutamiento            |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   Ejemplo de salida:                                               |
|   +------------------------------------------------------------+  |
|   | Proto  Dirección local    Dirección remota    Estado        |  |
|   | TCP    0.0.0.0:80         0.0.0.0:0          LISTENING     |  |
|   | TCP    192.168.1.100:443  142.250.x.x:443   ESTABLISHED   |  |
|   | TCP    192.168.1.100:5432 192.168.1.5:1433  ESTABLISHED   |  |
|   | UDP    0.0.0.0:53         *:*                              |  |
|   |                                                             |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   Significado de estados:                                          |
|   - LISTENING = Esperando conexiones                               |
|   - ESTABLISHED = Conexión activa                                  |
|   - WAITING = Conexión cerrándose                                  |
|                                                                     |
+--------------------------------------------------------------------+
```

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **ipconfig** | Muestra configuración IP (Windows) |
| **ping** | Comprueba alcanzabilidad |
| **tracert** | Muestra ruta al destino |
| **nslookup** | Realizar consultas DNS |
| **netstat** | Muestra conexiones de red |
| **ICMP** | Protocolo para ping |
| **TTL** | Time to Live (contador de saltos) |

---

## Consejos para el Examen

### Preguntas Comunes del Examen

- ¿Qué comando muestra la configuración IP?
- ¿Cómo compruebas la alcanzabilidad de un servidor?
- ¿Cómo renuevas una dirección DHCP?

### Importante Recordar

- **ipconfig /all** = todos los detalles de red
- **ipconfig /release + /renew** = nueva dirección DHCP
- **ping 127.0.0.1** = probar pila TCP/IP
- **ping** = alcanzabilidad, **tracert** = ruta
- **nslookup** = probar DNS
- **169.254.x.x** = APIPA (error DHCP)

---

## Ejercicios Prácticos

### Ejercicio 1
¿Con qué comando puedes mostrar la dirección MAC de tu ordenador?

**Solución:**
**ipconfig /all** (Windows)

La dirección física (dirección MAC) se muestra en la salida.

### Ejercicio 2
Un usuario no puede abrir ningún sitio web. ¿Cómo procedes sistemáticamente?

**Solución:**
1. **ping 127.0.0.1** -> ¿Pila TCP/IP OK?
2. **ipconfig** -> ¿Tiene el PC una IP? (¿no 169.254.x.x?)
3. **ping <IP Gateway>** -> ¿Es alcanzable el router?
4. **ping 8.8.8.8** -> ¿Es alcanzable Internet?
5. **ping www.google.com** -> ¿Funciona DNS?
6. **nslookup www.google.com** -> Comprobar resolución DNS

Si error en paso 4/5: Posiblemente problema DNS -> probar DNS diferente.

### Ejercicio 3
¿Qué significa una dirección IP que empieza con 169.254?

**Solución:**
Esta es una **dirección APIPA** (Automatic Private IP Addressing).

Esto significa:
- El ordenador no pudo alcanzar un **servidor DHCP**
- Se asignó a sí mismo una IP del rango 169.254.x.x
- **No es posible conexión a Internet**

Solución: Comprobar servidor DHCP, comprobar cable, probar ipconfig /renew

---

## Referencias Cruzadas

- [07-02-04 DHCP](../07-02-ip-addressing/07-02-04-dhcp.md) - Función DHCP
- [07-01-03 Protocolos](../07-01-network-fundamentals/07-01-03-protocols.md) - Protocolo DNS
- [07-07-02 Solución de Problemas](./07-07-02-troubleshooting.md) - Análisis sistemático de errores
