# Solución Sistemática de Problemas de Red

## Objetivos de Aprendizaje

Después de esta sección, deberías ser capaz de:
- Aplicar un enfoque sistemático a la solución de problemas
- Categorizar errores por capas OSI
- Identificar y resolver problemas de red típicos
- Distinguir los métodos Bottom-Up y Top-Down

---

## Contenido Principal

### Enfoque Sistemático

```
+---------------------------------------------------------------------+
|           SOLUCIÓN SISTEMÁTICA DE PROBLEMAS - 6 PASOS               |
+---------------------------------------------------------------------+
|                                                                      |
|  +-------------------------------------------------------------+    |
|  | 1. IDENTIFICAR PROBLEMA                                     |    |
|  |    -> ¿Qué exactamente no funciona?                         |    |
|  |    -> ¿Cuándo empezó el problema?                           |    |
|  |    -> ¿Quién está afectado (un usuario/todos)?              |    |
|  +-------------------------------------------------------------+    |
|                            |                                        |
|                            v                                        |
|  +-------------------------------------------------------------+    |
|  | 2. RECOPILAR INFORMACIÓN                                    |    |
|  |    -> Documentar mensajes de error                          |    |
|  |    -> Preguntar sobre cambios recientes                     |    |
|  |    -> Usar herramientas de diagnóstico de red               |    |
|  +-------------------------------------------------------------+    |
|                            |                                        |
|                            v                                        |
|  +-------------------------------------------------------------+    |
|  | 3. FORMULAR HIPÓTESIS                                       |    |
|  |    -> Determinar la causa más probable                      |    |
|  |    -> Identificar la capa OSI                               |    |
|  +-------------------------------------------------------------+    |
|                            |                                        |
|                            v                                        |
|  +-------------------------------------------------------------+    |
|  | 4. PROBAR HIPÓTESIS                                         |    |
|  |    -> ¡Un cambio a la vez!                                  |    |
|  |    -> Documentar resultado                                  |    |
|  +-------------------------------------------------------------+    |
|                            |                                        |
|                            v                                        |
|  +-------------------------------------------------------------+    |
|  | 5. IMPLEMENTAR SOLUCIÓN                                     |    |
|  |    -> Corregir problema                                     |    |
|  |    -> Verificar funcionamiento                              |    |
|  +-------------------------------------------------------------+    |
|                            |                                        |
|                            v                                        |
|  +-------------------------------------------------------------+    |
|  | 6. DOCUMENTAR                                               |    |
|  |    -> Registrar problema y solución                         |    |
|  |    -> Actualizar base de conocimiento                       |    |
|  +-------------------------------------------------------------+    |
|                                                                      |
+---------------------------------------------------------------------+
```

### Solución de Problemas por Capas OSI

#### Método Bottom-Up (recomendado)
Comienza en la Capa 1 (física) y trabaja hacia arriba.

```
+---------------------------------------------------------------------+
|                   MÉTODO BOTTOM-UP                                   |
+---------------------------------------------------------------------+
|                                                                      |
|  Capa 7   +-----------------------------------------------------+   |
|  Aplic.   | ¿Funciona navegador? ¿Cliente de correo?            |   |
|           +-----------------------------------------------------+   |
|                                   ^                                |
|  Capa 4   +-----------------------------------------------------+   |
|  Transp.  | netstat -an -> ¿Puertos abiertos? ¿Conexiones activ?|   |
|           +-----------------------------------------------------+   |
|                                   ^                                |
|  Capa 3   +-----------------------------------------------------+   |
|  Red      | ¿ping Gateway? ¿ping 8.8.8.8? ¿Dirección IP correcta?|  |
|           +-----------------------------------------------------+   |
|                                   ^                                |
|  Capa 2   +-----------------------------------------------------+   |
|  Enlace   | ¿Dirección MAC presente? ¿Puerto switch activo?     |   |
|           +-----------------------------------------------------+   |
|                                   ^                                |
|  Capa 1   +-----------------------------------------------------+   |
|  Física   | ¿Cable conectado? ¿LED Link encendido? ¿Cable defect?|  |
|           +-----------------------------------------------------+   |
|                                                                      |
|  EMPEZAR AQUÍ -> Primero comprobar si existe conexión física       |
|                                                                      |
+---------------------------------------------------------------------+
```

#### Método Top-Down
Comienza en la Capa 7 (aplicación) - útil cuando un servicio específico no funciona.

### Esquema de Comprobación por Capas

| Capa | Comprobar | Herramientas |
|------|-----------|--------------|
| **1 - Física** | Cables, LEDs, conectores | Inspección visual, comprobador cables |
| **2 - Enlace** | Dirección MAC, switch | ipconfig /all, registros switch |
| **3 - Red** | IP, gateway, enrutamiento | ping, tracert, ipconfig |
| **4 - Transporte** | Puertos, firewall | netstat, telnet |
| **7 - Aplicación** | Servicios, DNS | nslookup, navegador |

### Patrones de Error Típicos y Soluciones

```
+---------------------------------------------------------------------+
|                 PROBLEMAS DE RED COMUNES                             |
+---------------------------------------------------------------------+
|                                                                      |
|  SÍNTOMA                    | CAUSA PROBABLE                        |
|  ---------------------------------------------------------------    |
|                                                                      |
|  Sin red                    | -> Cable no conectado                 |
|  (LED Link apagado)         | -> Cable defectuoso                   |
|                             | -> Puerto switch deshabilitado        |
|  ---------------------------------------------------------------    |
|                                                                      |
|  "Conectividad              | -> No hay servidor DHCP alcanzable    |
|  Limitada"                  | -> Dirección APIPA (169.254.x.x)      |
|                             | -> VLAN incorrecta                    |
|  ---------------------------------------------------------------    |
|                                                                      |
|  ping Gateway OK            | -> Problema DNS                       |
|  ping google.com ERROR      | -> Comprobar nslookup                 |
|                             | -> Cambiar servidor DNS               |
|  ---------------------------------------------------------------    |
|                                                                      |
|  Conexión lenta             | -> Desajuste de dúplex                |
|                             | -> Sobrecarga de red                  |
|                             | -> Cable defectuoso                   |
|  ---------------------------------------------------------------    |
|                                                                      |
|  Sitio web no alcanzable    | -> Firewall bloqueando                |
|  (ping funciona)            | -> Puerto 80/443 bloqueado            |
|                             | -> Configuración proxy                |
|                                                                      |
+---------------------------------------------------------------------+
```

### Prueba de Ping Sistemática

```
+---------------------------------------------------------------------+
|              DIAGNÓSTICO PING (sistemático)                          |
+---------------------------------------------------------------------+
|                                                                      |
|  1. ping 127.0.0.1  (Localhost)                                     |
|     |                                                                |
|     +-- ERROR -> Pila TCP/IP defectuosa -> Reinstalar red          |
|     |                                                                |
|     +-- OK -> Continuar con paso 2                                  |
|              |                                                       |
|  2. ping [IP propia]                                                |
|     |                                                                |
|     +-- ERROR -> Problema adaptador de red                          |
|     |                                                                |
|     +-- OK -> Continuar con paso 3                                  |
|              |                                                       |
|  3. ping [Gateway]                                                  |
|     |                                                                |
|     +-- ERROR -> Problema red local (cable, switch, VLAN)           |
|     |                                                                |
|     +-- OK -> Continuar con paso 4                                  |
|              |                                                       |
|  4. ping 8.8.8.8 (Google DNS)                                       |
|     |                                                                |
|     +-- ERROR -> Problema enrutamiento o caída Internet             |
|     |                                                                |
|     +-- OK -> Continuar con paso 5                                  |
|              |                                                       |
|  5. ping google.com                                                 |
|     |                                                                |
|     +-- ERROR -> Problema DNS -> Comprobar nslookup                 |
|     |                                                                |
|     +-- OK -> ¡La red funciona!                                     |
|                                                                      |
+---------------------------------------------------------------------+
```

### Reconocer Direcciones APIPA

```
+---------------------------------------------------------------------+
|                    DIRECCIÓN APIPA                                   |
+---------------------------------------------------------------------+
|                                                                      |
|  Dirección IP: 169.254.x.x  <- ¡Asignada automáticamente!           |
|                                                                      |
|  Significado:                                                       |
|  -> No hay servidor DHCP alcanzable                                 |
|  -> Windows se asigna a sí mismo una dirección APIPA                |
|  -> Solo es posible comunicación con otros dispositivos APIPA       |
|                                                                      |
|  Causas:                                                            |
|  -> Servidor DHCP caído                                             |
|  -> VLAN incorrecta                                                 |
|  -> Cable de red mal conectado                                      |
|  -> Pool DHCP agotado                                               |
|                                                                      |
|  Solución:                                                          |
|  1. ipconfig /release                                               |
|  2. ipconfig /renew                                                 |
|  3. Si sigue APIPA -> Comprobar servidor DHCP                       |
|                                                                      |
+---------------------------------------------------------------------+
```

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Bottom-Up** | Solución de problemas desde Capa 1 hacia arriba |
| **Top-Down** | Solución de problemas desde Capa 7 hacia abajo |
| **APIPA** | Automatic Private IP Addressing (169.254.x.x) |
| **Desajuste dúplex** | Diferentes configuraciones de dúplex |
| **LED Link** | Muestra conexión física |
| **Troubleshooting** | Diagnóstico sistemático de errores |

---

## Consejos para el Examen

1. **Capas OSI en solución de problemas:**
   - Capa 1 = problemas físicos (cables, conectores)
   - Capa 3 = problemas IP (dirección, gateway)
   - Capa 7 = problemas de aplicación (DNS, servicios)

2. **Preguntas típicas del examen:**
   - ¿Qué método para "sin red"? -> Bottom-Up
   - ¿Qué significa dirección APIPA? -> No hay DHCP alcanzable
   - ¿Qué paso después de ping exitoso a gateway? -> IP externa

3. **Importante:** ¡Probar siempre solo UN cambio, luego comprobar resultado!

---

## Ejercicios Prácticos

### Ejercicio 1: Análisis de Error

Un empleado informa: "No puedo abrir ningún sitio web, pero el correo funciona."

Analiza el problema sistemáticamente:
a) ¿Qué capa probablemente está afectada?
b) ¿Qué pruebas realizarías?
c) ¿Cuál es la causa más probable?

<details>
<summary>Mostrar solución</summary>

a) **Capa 7 (Aplicación)** - ya que el correo funciona, las capas inferiores están bien.

b) **Pruebas:**
1. `ping google.com` - probablemente funciona
2. Comprobar configuración proxy del navegador
3. Comprobar reglas firewall para HTTP/HTTPS (Puerto 80/443)
4. Probar con navegador diferente

c) **Causas más probables:**
- Servidor proxy mal configurado
- Firewall bloqueando puerto 80/443
- Configuración navegador (ej. modo sin conexión)

</details>

### Ejercicio 2: Diagnóstico Sistemático

Un PC muestra los siguientes resultados:
- `ping 127.0.0.1` -> OK
- `ping 192.168.1.50` (IP propia) -> OK
- `ping 192.168.1.1` (gateway) -> Error
- LED Link en switch -> ENCENDIDO

¿Dónde está el problema?

<details>
<summary>Mostrar solución</summary>

**Análisis:**
- Pila TCP/IP funciona (127.0.0.1 OK)
- Adaptador de red funciona (IP propia OK)
- Conexión física existe (LED Link encendido)
- Gateway no alcanzable

**Problema:** Capa 2/3 - Red local

**Posibles causas:**
1. **VLAN incorrecta** - PC y gateway en diferentes VLANs
2. **Máscara de subred incorrecta** - PC no puede alcanzar gateway
3. **Dirección gateway incorrecta** configurada
4. **Problema puerto switch** (filtrado MAC, seguridad de puerto)

**Siguientes pasos:**
- Comprobar `ipconfig /all` (máscara subred, gateway)
- Comprobar asignación VLAN en switch
- Comprobar tabla ARP (`arp -a`)

</details>

### Ejercicio 3: Problema APIPA

En ConSystem GmbH, varios empleados de un departamento se quejan de problemas de red. Un técnico encuentra que todos los PCs afectados tienen direcciones IP en el rango 169.254.x.x.

a) ¿Qué significa esta dirección?
b) ¿Cuál es la causa más probable?
c) ¿Qué pasos para la resolución del problema recomiendas?

<details>
<summary>Mostrar solución</summary>

a) **Dirección APIPA (Automatic Private IP Addressing)**
- Windows la asigna automáticamente
- Significa: No hay servidor DHCP alcanzable

b) **Causas más probables:**
- Servidor DHCP caído o sobrecargado
- Pool DHCP agotado (no hay direcciones disponibles)
- Problema de red entre departamento y servidor DHCP
- Problema de switch o VLAN incorrecta

c) **Pasos de solución:**
1. Comprobar estado servidor DHCP (¿servicio ejecutándose?)
2. Comprobar pool DHCP (¿direcciones disponibles?)
3. Comprobar conexión de red al servidor DHCP
4. Verificar configuración VLAN
5. En PCs afectados: `ipconfig /release` luego `ipconfig /renew`
6. Si servidor DHCP OK: Comprobar switch/enrutamiento entre departamento y servidor

</details>

---

## Referencias Cruzadas

- [Herramientas de Diagnóstico](07-07-01-diagnostic-tools.md) - ipconfig, ping, tracert
- [DHCP](../07-02-ip-addressing/07-02-04-dhcp.md) - Fundamentos DHCP
- [Modelo OSI](../07-01-network-fundamentals/07-01-01-osi-model.md) - Modelo de capas
- [Hardware de Red](../07-05-network-hardware.md) - Switch y router
