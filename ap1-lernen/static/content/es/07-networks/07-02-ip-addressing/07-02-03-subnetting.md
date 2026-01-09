# Subnetting

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Comprender el propósito del subnetting
- Calcular subredes
- Determinar el número de hosts disponibles
- Determinar direcciones de red y broadcast

---

## Contenido Principal

### ¿Qué es el Subnetting?

```
+--------------------------------------------------------------------+
|                       SUBNETTING                                    |
+--------------------------------------------------------------------+
|                                                                     |
|   Definición:                                                       |
|   +-------------------------------------------------------------+  |
|   | El subnetting es la división de una red más grande          |  |
|   | en múltiples subredes más pequeñas.                         |  |
|   +-------------------------------------------------------------+  |
|                                                                     |
|   Antes: Una red grande                                             |
|   +-------------------------------------------------------------+  |
|   | 192.168.0.0/24 (254 hosts)                                  |  |
|   | +-------------------------------------------------------+   |  |
|   | |  PC  PC  PC  PC  PC  PC  PC  PC  PC  PC  PC  PC ...   |   |  |
|   | +-------------------------------------------------------+   |  |
|   +-------------------------------------------------------------+  |
|                                                                     |
|   Después: Múltiples subredes pequeñas                              |
|   +-------------------------------------------------------------+  |
|   | 192.168.0.0/26 (62 hosts)  192.168.0.64/26 (62 hosts)      |  |
|   | +---------------------+    +---------------------+          |  |
|   | |  PC  PC  PC  PC ... |    |  PC  PC  PC  PC ... |          |  |
|   | +---------------------+    +---------------------+          |  |
|   |                                                              |  |
|   | 192.168.0.128/26 (62 hosts) 192.168.0.192/26 (62 hosts)    |  |
|   | +---------------------+    +---------------------+          |  |
|   | |  PC  PC  PC  PC ... |    |  PC  PC  PC  PC ... |          |  |
|   | +---------------------+    +---------------------+          |  |
|   +-------------------------------------------------------------+  |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Razones para el Subnetting

```
+--------------------------------------------------------------------+
|                  ¿POR QUÉ SUBNETTING?                               |
+--------------------------------------------------------------------+
|                                                                     |
|   1. SEGURIDAD                                                      |
|   +------------------------------------------------------------+   |
|   | - Separación de diferentes áreas                           |   |
|   | - Contabilidad separada de producción                      |   |
|   | - WLAN de invitados separada de la red interna             |   |
|   +------------------------------------------------------------+   |
|                                                                     |
|   2. RENDIMIENTO                                                    |
|   +------------------------------------------------------------+   |
|   | - Dominios de broadcast más pequeños                       |   |
|   | - Menos tráfico de red innecesario                         |   |
|   | - Los broadcasts permanecen dentro de la subred            |   |
|   +------------------------------------------------------------+   |
|                                                                     |
|   3. ORGANIZACIÓN                                                   |
|   +------------------------------------------------------------+   |
|   | - Estructura lógica (departamentos, pisos)                 |   |
|   | - Mejor visión general                                     |   |
|   | - Administración más fácil                                 |   |
|   +------------------------------------------------------------+   |
|                                                                     |
|   4. UTILIZACIÓN EFICIENTE                                          |
|   +------------------------------------------------------------+   |
|   | - Distribuir direcciones IP de forma óptima                |   |
|   | - Sin desperdicio de direcciones                           |   |
|   +------------------------------------------------------------+   |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Comprendiendo la Máscara de Subred

```
+--------------------------------------------------------------------+
|                    MÁSCARA DE SUBRED                                |
+--------------------------------------------------------------------+
|                                                                     |
|   La máscara de subred separa las porciones de red y host:         |
|                                                                     |
|   +-------------------------------------------------------------+  |
|   |                                                              |  |
|   |   Dirección IP:   192.168.1.100                             |  |
|   |   Máscara subred: 255.255.255.0                             |  |
|   |                                                              |  |
|   |   Binario:                                                   |  |
|   |   IP:      11000000.10101000.00000001.01100100              |  |
|   |   Máscara: 11111111.11111111.11111111.00000000              |  |
|   |            --------------------------  --------              |  |
|   |                Red (24 bits)           Host (8 bits)         |  |
|   |                                                              |  |
|   |   Operación AND produce dirección de red:                   |  |
|   |   IP:      11000000.10101000.00000001.01100100              |  |
|   |   Máscara: 11111111.11111111.11111111.00000000              |  |
|   |   ------------------------------------------                |  |
|   |   Red:     11000000.10101000.00000001.00000000              |  |
|   |            = 192.168.1.0 (Dirección de red)                 |  |
|   |                                                              |  |
|   +-------------------------------------------------------------+  |
|                                                                     |
|   Máscaras importantes:                                             |
|   +-----------------------------------------------------------+   |
|   | /24 = 255.255.255.0   -> 254 hosts                        |   |
|   | /25 = 255.255.255.128 -> 126 hosts                        |   |
|   | /26 = 255.255.255.192 ->  62 hosts                        |   |
|   | /27 = 255.255.255.224 ->  30 hosts                        |   |
|   | /28 = 255.255.255.240 ->  14 hosts                        |   |
|   +-----------------------------------------------------------+   |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Fórmulas de Cálculo

```
+--------------------------------------------------------------------+
|                    CÁLCULOS                                         |
+--------------------------------------------------------------------+
|                                                                     |
|   NÚMERO DE HOSTS                                                   |
|   +------------------------------------------------------------+   |
|   |                                                             |   |
|   |   Hosts = 2^(bits de host) - 2                              |   |
|   |                                                             |   |
|   |   Los 2 se restan por:                                      |   |
|   |   - Dirección de red (todos los bits host = 0)              |   |
|   |   - Dirección de broadcast (todos los bits host = 1)        |   |
|   |                                                             |   |
|   |   Ejemplo /26:                                              |   |
|   |   Bits de host = 32 - 26 = 6                                |   |
|   |   Hosts = 2^6 - 2 = 64 - 2 = 62                             |   |
|   |                                                             |   |
|   +------------------------------------------------------------+   |
|                                                                     |
|   NÚMERO DE SUBREDES                                                |
|   +------------------------------------------------------------+   |
|   |                                                             |   |
|   |   Subredes = 2^(bits de red adicionales)                    |   |
|   |                                                             |   |
|   |   Ejemplo: /24 se convierte en /26                          |   |
|   |   Bits adicionales = 26 - 24 = 2                            |   |
|   |   Subredes = 2^2 = 4                                        |   |
|   |                                                             |   |
|   +------------------------------------------------------------+   |
|                                                                     |
|   TAMAÑO DE BLOQUE (Incremento)                                     |
|   +------------------------------------------------------------+   |
|   |                                                             |   |
|   |   Tamaño bloque = 256 - valor del último octeto de máscara |   |
|   |                                                             |   |
|   |   Ejemplo /26: Máscara = 255.255.255.192                    |   |
|   |   Tamaño bloque = 256 - 192 = 64                            |   |
|   |                                                             |   |
|   |   Subredes: .0, .64, .128, .192                             |   |
|   |                                                             |   |
|   +------------------------------------------------------------+   |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Ejemplo de Cálculo

```
+--------------------------------------------------------------------+
|                 EJEMPLO: 192.168.1.0/26                             |
+--------------------------------------------------------------------+
|                                                                     |
|   Dado: 192.168.1.0/26                                              |
|   Máscara de subred: 255.255.255.192                                |
|                                                                     |
|   Paso 1: Calcular bits de host                                     |
|   +------------------------------------------------------------+   |
|   | Bits de host = 32 - 26 = 6 bits                             |   |
|   +------------------------------------------------------------+   |
|                                                                     |
|   Paso 2: Calcular número de hosts                                  |
|   +------------------------------------------------------------+   |
|   | Hosts = 2^6 - 2 = 64 - 2 = 62 hosts utilizables             |   |
|   +------------------------------------------------------------+   |
|                                                                     |
|   Paso 3: Calcular tamaño de bloque                                 |
|   +------------------------------------------------------------+   |
|   | Tamaño bloque = 256 - 192 = 64                              |   |
|   +------------------------------------------------------------+   |
|                                                                     |
|   Paso 4: Determinar subredes                                       |
|   +------------------------------------------------------------+   |
|   |                                                             |   |
|   | Subred 1: 192.168.1.0/26                                    |   |
|   |   Dirección de red:    192.168.1.0                          |   |
|   |   Primer host:         192.168.1.1                          |   |
|   |   Último host:         192.168.1.62                         |   |
|   |   Broadcast:           192.168.1.63                         |   |
|   |                                                             |   |
|   | Subred 2: 192.168.1.64/26                                   |   |
|   |   Dirección de red:    192.168.1.64                         |   |
|   |   Primer host:         192.168.1.65                         |   |
|   |   Último host:         192.168.1.126                        |   |
|   |   Broadcast:           192.168.1.127                        |   |
|   |                                                             |   |
|   | Subred 3: 192.168.1.128/26                                  |   |
|   |   Dirección de red:    192.168.1.128                        |   |
|   |   Primer host:         192.168.1.129                        |   |
|   |   Último host:         192.168.1.190                        |   |
|   |   Broadcast:           192.168.1.191                        |   |
|   |                                                             |   |
|   | Subred 4: 192.168.1.192/26                                  |   |
|   |   Dirección de red:    192.168.1.192                        |   |
|   |   Primer host:         192.168.1.193                        |   |
|   |   Último host:         192.168.1.254                        |   |
|   |   Broadcast:           192.168.1.255                        |   |
|   |                                                             |   |
|   +------------------------------------------------------------+   |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Referencia Rápida: Tabla CIDR

```
+--------------------------------------------------------------------+
|                   REFERENCIA RÁPIDA CIDR                            |
+--------------------------------------------------------------------+
|                                                                     |
|   CIDR | Máscara         | Hosts | Bloque| Subredes desde /24      |
|   -----+-----------------+-------+-------+------------------------+
|   /24  | 255.255.255.0   |  254  |  256  |  1                      |
|   /25  | 255.255.255.128 |  126  |  128  |  2                      |
|   /26  | 255.255.255.192 |   62  |   64  |  4                      |
|   /27  | 255.255.255.224 |   30  |   32  |  8                      |
|   /28  | 255.255.255.240 |   14  |   16  | 16                      |
|   /29  | 255.255.255.248 |    6  |    8  | 32                      |
|   /30  | 255.255.255.252 |    2  |    4  | 64                      |
|   /31  | 255.255.255.254 |    0* |    2  | 128 (Punto a Punto)     |
|   /32  | 255.255.255.255 |    1  |    1  | 256 (host único)        |
|                                                                     |
|   * /31 se usa para conexiones punto a punto                       |
|                                                                     |
|   Para recordar (último octeto de máscara):                         |
|   +-----------------------------------------------------------+   |
|   | 128 -> /25                                                 |   |
|   | 192 -> /26 (128 + 64)                                      |   |
|   | 224 -> /27 (128 + 64 + 32)                                 |   |
|   | 240 -> /28 (128 + 64 + 32 + 16)                            |   |
|   | 248 -> /29 (128 + 64 + 32 + 16 + 8)                        |   |
|   | 252 -> /30 (128 + 64 + 32 + 16 + 8 + 4)                    |   |
|   +-----------------------------------------------------------+   |
|                                                                     |
+--------------------------------------------------------------------+
```

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Subred** | Sub-red de una red más grande |
| **Máscara de subred** | Determina porción red/host |
| **CIDR** | Classless Inter-Domain Routing (/24) |
| **Dirección de red** | Todos los bits host = 0 |
| **Dirección de broadcast** | Todos los bits host = 1 |
| **Tamaño de bloque** | Distancia entre subredes |

---

## Consejos para el Examen

### Preguntas Comunes del Examen

- ¿Cuántos hosts con /26?
- ¿A qué subred pertenece una IP?
- ¿Cuántas subredes de /24 con /27?

### Importante Recordar

- **Hosts = 2^bits host - 2**
- **/24** = 254 hosts, **/25** = 126, **/26** = 62
- **Tamaño bloque** = 256 - octeto de máscara
- Direcciones de red y broadcast **NO utilizables**
- /30 = 2 hosts (para conexiones de router)

---

## Ejercicios Prácticos

### Ejercicio 1
¿Cuántos hosts utilizables tiene una red /27?

**Solución:**
Bits de host = 32 - 27 = 5
Hosts = 2^5 - 2 = 32 - 2 = **30 hosts utilizables**

### Ejercicio 2
¿A qué subred pertenece la IP 192.168.10.200 con /26?

**Solución:**
Tamaño de bloque con /26: 256 - 192 = 64
Subredes: .0, .64, .128, .192

200 está entre 192 y 255 -> **Subred 192.168.10.192/26**

- Dirección de red: 192.168.10.192
- Broadcast: 192.168.10.255

### Ejercicio 3
Una empresa necesita 50 hosts por departamento. ¿Qué máscara de subred es adecuada?

**Solución:**
50 hosts necesarios -> al menos 50 + 2 = 52 direcciones

- /26 = 62 hosts (adecuada)
- /27 = 30 hosts (muy pocos)

Respuesta: **/26** (255.255.255.192)

---

## Referencias Cruzadas

- [07-02-01 IPv4](./07-02-01-ipv4.md) - Fundamentos IPv4
- [07-02-04 DHCP](./07-02-04-dhcp.md) - Asignación de direcciones IP
- [05-01-01 Bits, Bytes, Sistemas Numéricos](../../05-it-systems/05-01-fundamentals/05-01-01-bits-bytes-number-systems.md) - Aritmética binaria
