# Hardware de Red

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Conocer los dispositivos de red más importantes
- Comprender las diferencias entre hub, switch y router
- Asignar dispositivos a las capas OSI
- Explicar cómo funcionan los dispositivos

---

## Contenido Principal

### Visión General de Dispositivos de Red

```
+--------------------------------------------------------------------+
|                   VISIÓN GENERAL HARDWARE DE RED                    |
+--------------------------------------------------------------------+
|                                                                     |
|   +-------------------------------------------------------------+ |
|   |                                                              | |
|   |   Capa OSI   | Dispositivo     | Trabaja con                | |
|   |   -----------+-----------------+----------------------------| |
|   |   Capa 1     | Hub, Repetidor  | Bits, Señales              | |
|   |   Capa 2     | Switch, Bridge  | Direcciones MAC, Tramas    | |
|   |   Capa 3     | Router          | Direcciones IP, Paquetes   | |
|   |   Capa 7     | Gateway         | Protocolos de aplicación   | |
|   |                                                              | |
|   +-------------------------------------------------------------+ |
|                                                                     |
|   Distinción más importante:                                        |
|   +-------------------------------------------------------------+ |
|   |                                                              | |
|   |   HUB      ->  Envía a TODOS los puertos (tonto)            | |
|   |   SWITCH   ->  Envía solo al puerto destino (inteligente)   | |
|   |   ROUTER   ->  Conecta redes diferentes                     | |
|   |                                                              | |
|   +-------------------------------------------------------------+ |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Hub (Capa 1)

```
+--------------------------------------------------------------------+
|                          HUB                                        |
+--------------------------------------------------------------------+
|                                                                     |
|   Capa OSI: 1 (Física)                                              |
|                                                                     |
|   Cómo funciona:                                                    |
|   +-------------------------------------------------------------+ |
|   |                                                              | |
|   |   Un hub recibe una señal y la REENVÍA A TODOS              | |
|   |   los demás puertos (broadcast).                             | |
|   |                                                              | |
|   |        PC A          PC B          PC C          PC D       | |
|   |          |            |             |             |         | |
|   |          v            v             v             v         | |
|   |   +------+------------+-------------+-------------+------+  | |
|   |   |                      HUB                              |  | |
|   |   +-------------------------------------------------------+  | |
|   |                                                              | |
|   |   PC A envía a PC C:                                        | |
|   |   -> Hub envía a B, C Y D                                   | |
|   |   -> Solo C procesa el paquete                              | |
|   |                                                              | |
|   +-------------------------------------------------------------+ |
|                                                                     |
|   Características:                                                  |
|   - Dispositivo "tonto" - sin inteligencia                         |
|   - Todos los dispositivos comparten el ancho de banda (dominio    |
|     de colisión)                                                    |
|   - Crea tráfico de red innecesario                                |
|   - Riesgo de seguridad (todos ven todos los paquetes)             |
|   - Hoy OBSOLETO - reemplazado por switches                        |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Switch (Capa 2)

```
+--------------------------------------------------------------------+
|                         SWITCH                                      |
+--------------------------------------------------------------------+
|                                                                     |
|   Capa OSI: 2 (Enlace de Datos)                                     |
|                                                                     |
|   Cómo funciona:                                                    |
|   +-------------------------------------------------------------+ |
|   |                                                              | |
|   |   Un switch aprende direcciones MAC y reenvía paquetes      | |
|   |   solo al puerto donde está conectado el dispositivo destino.| |
|   |                                                              | |
|   |        PC A          PC B          PC C          PC D       | |
|   |     MAC: AA        MAC: BB      MAC: CC       MAC: DD       | |
|   |          |            |             |             |         | |
|   |          v            v             v             v         | |
|   |   +------+------------+-------------+-------------+------+  | |
|   |   |                    SWITCH                             |  | |
|   |   |   Tabla MAC:                                          |  | |
|   |   |   Puerto 1 -> AA                                      |  | |
|   |   |   Puerto 2 -> BB                                      |  | |
|   |   |   Puerto 3 -> CC                                      |  | |
|   |   |   Puerto 4 -> DD                                      |  | |
|   |   +-------------------------------------------------------+  | |
|   |                                                              | |
|   |   PC A envía a PC C:                                        | |
|   |   -> Switch envía SOLO al Puerto 3 (donde está CC)          | |
|   |   -> B y D no reciben nada                                  | |
|   |                                                              | |
|   +-------------------------------------------------------------+ |
|                                                                     |
|   Características:                                                  |
|   - Trabaja con direcciones MAC                                    |
|   - Cada puerto tiene su propio dominio de colisión (ancho banda   |
|     completo)                                                       |
|   - Aprende automáticamente (tabla de direcciones MAC)             |
|   - No hay broadcasts a todos los puertos (solo al destino)        |
|   - Estándar en redes modernas                                     |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Router (Capa 3)

```
+--------------------------------------------------------------------+
|                         ROUTER                                      |
+--------------------------------------------------------------------+
|                                                                     |
|   Capa OSI: 3 (Red)                                                 |
|                                                                     |
|   Cómo funciona:                                                    |
|   +-------------------------------------------------------------+ |
|   |                                                              | |
|   |   Un router conecta redes diferentes y reenvía paquetes     | |
|   |   basándose en direcciones IP.                               | |
|   |                                                              | |
|   |   Red A                        Red B                         | |
|   |   192.168.1.0/24                192.168.2.0/24              | |
|   |                                                              | |
|   |   +----+  +----+            +----+  +----+                  | |
|   |   | PC |  | PC |            | PC |  | PC |                  | |
|   |   |.10 |  |.20 |            |.10 |  |.20 |                  | |
|   |   +--+-+  +--+-+            +--+-+  +--+-+                  | |
|   |      +---+---+                 +---+---+                     | |
|   |          |                         |                        | |
|   |          |      +---------+       |                        | |
|   |          +------| ROUTER  |-------+                        | |
|   |                 | .1    .1|                                 | |
|   |                 +---------+                                 | |
|   |                                                              | |
|   |   Router tiene IP en cada red (Gateway por defecto)         | |
|   |                                                              | |
|   +-------------------------------------------------------------+ |
|                                                                     |
|   Características:                                                  |
|   - Trabaja con direcciones IP                                     |
|   - Conecta redes diferentes (ej. LAN <-> Internet)                |
|   - Usa tablas de enrutamiento                                     |
|   - Separa dominios de broadcast                                   |
|   - A menudo integrado con DHCP, NAT, Firewall                     |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Comparación Hub - Switch - Router

```
+--------------------------------------------------------------------+
|              HUB vs. SWITCH vs. ROUTER                              |
+--------------------------------------------------------------------+
|                                                                     |
|   Propiedad      | Hub        | Switch     | Router               |
|   ---------------+------------+------------+---------------------  |
|   Capa OSI       | 1          | 2          | 3                    |
|   Direccionam.   | Ninguno    | MAC        | IP                   |
|   Reenvío        | Todos Puert| Solo destino| Solo red destino    |
|   Inteligencia   | Ninguna    | Media      | Alta                 |
|   Broadcast      | Sí         | Sí         | No (separa)          |
|   Redes          | 1          | 1          | Múltiples            |
|   Ancho banda    | Compartido | Por Puerto | Por Interfaz         |
|   Precio         | Bajo       | Medio      | Mayor                |
|   Estado         | Obsoleto   | Estándar   | Estándar             |
|                                                                     |
|   Área de aplicación:                                               |
|   +-------------------------------------------------------------+ |
|   | Hub:    Ya no recomendado                                    | |
|   | Switch: Dentro de una red (LAN)                              | |
|   | Router: Entre redes (LAN <-> WAN/Internet)                   | |
|   +-------------------------------------------------------------+ |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Dispositivos de Red Adicionales

```
+--------------------------------------------------------------------+
|                  DISPOSITIVOS DE RED ADICIONALES                    |
+--------------------------------------------------------------------+
|                                                                     |
|   PUNTO DE ACCESO (AP)                                              |
|   +------------------------------------------------------------+  |
|   | - Conecta dispositivos WLAN a la LAN                       |  |
|   | - Trabaja en Capa 2                                        |  |
|   | - A menudo integrado en router (router WLAN)               |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   REPETIDOR                                                         |
|   +------------------------------------------------------------+  |
|   | - Amplifica señales                                        |  |
|   | - Aumenta el alcance                                       |  |
|   | - Capa 1                                                   |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   BRIDGE (Puente)                                                   |
|   +------------------------------------------------------------+  |
|   | - Conecta dos segmentos de red                             |  |
|   | - Trabaja con direcciones MAC                              |  |
|   | - Capa 2 (como switch, pero solo 2 puertos)                |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   MODEM                                                             |
|   +------------------------------------------------------------+  |
|   | - Modulador/Demodulador                                    |  |
|   | - Convierte señales digitales <-> señales analógicas       |  |
|   | - Para conexiones DSL, cable, fibra                        |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   FIREWALL                                                          |
|   +------------------------------------------------------------+  |
|   | - Filtra tráfico de red según reglas                       |  |
|   | - Protege contra accesos no autorizados                    |  |
|   | - Hardware o software                                      |  |
|   | - A menudo integrado en router                             |  |
|   +------------------------------------------------------------+  |
|                                                                     |
+--------------------------------------------------------------------+
```

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Hub** | Distribuye señales a todos los puertos (Capa 1) |
| **Switch** | Reenvía al puerto destino (Capa 2) |
| **Router** | Conecta redes (Capa 3) |
| **Punto de Acceso** | Punto de acceso WLAN |
| **Tabla MAC** | Mapeo dirección MAC <-> puerto |
| **Tabla de enrutamiento** | Mapeo red <-> interfaz |
| **Gateway por defecto** | IP del router para comunicación externa |

---

## Consejos para el Examen

### Preguntas Comunes del Examen

- ¿Diferencia Hub vs. Switch?
- ¿A qué capa OSI pertenece un router?
- ¿Qué es un Gateway por defecto?

### Importante Recordar

- **Hub** = Capa 1, envía a TODOS
- **Switch** = Capa 2, direcciones MAC, solo puerto destino
- **Router** = Capa 3, direcciones IP, conecta redes
- **Hub está obsoleto** - siempre usar switch hoy
- **Gateway por defecto** = IP del router para acceso a Internet

---

## Ejercicios Prácticos

### Ejercicio 1
¿Por qué los switches son mejores que los hubs?

**Solución:**
Los switches son mejores porque:
- Envían solo al **puerto destino** (hub: a todos)
- Cada puerto tiene su **propio ancho de banda** (hub: ancho de banda compartido)
- **Menos colisiones** y tráfico de red
- **Más seguros** - otros no ven los paquetes
- **Mayor rendimiento** en la red

### Ejercicio 2
Asignar: Hub, Switch, Router - ¿qué capa OSI?

**Solución:**
- **Hub:** Capa 1 (Física)
- **Switch:** Capa 2 (Enlace de Datos)
- **Router:** Capa 3 (Red)

### Ejercicio 3
¿Cuándo necesitas un router en lugar de un switch?

**Solución:**
Un router es necesario cuando:
- Se necesita conectar **redes diferentes**
- Se requiere acceso a **Internet**
- Es necesario **enrutamiento IP** entre subredes
- Se necesita separar **dominios de broadcast**

Un switch es suficiente cuando todos los dispositivos están en la **misma red**.

---

## Referencias Cruzadas

- [07-01-01 Modelo OSI](./07-01-network-fundamentals/07-01-01-osi-model.md) - Asignación de capas
- [07-02-01 IPv4](./07-02-ip-addressing/07-02-01-ipv4.md) - Direcciones IP para routers
- [07-03-01 Fundamentos WLAN](./07-03-wlan/07-03-01-wlan-fundamentals.md) - Puntos de Acceso
- [04-03-04 Firewall Personal](../04-it-security/04-03-protective-measures/04-03-04-personal-firewall.md) - Firewalls
