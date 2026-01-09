# Fundamentos de WLAN

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Comprender los fundamentos de WLAN
- Conocer los estándares WLAN importantes (802.11)
- Distinguir los protocolos de seguridad WLAN
- Conocer las bandas de frecuencia y sus características

---

## Contenido Principal

### ¿Qué es WLAN?

```
+--------------------------------------------------------------------+
|                         WLAN                                        |
+--------------------------------------------------------------------+
|                                                                     |
|   WLAN = Wireless Local Area Network                                |
|          (Red de Área Local Inalámbrica)                           |
|   Wi-Fi = Wireless Fidelity (nombre comercial)                      |
|                                                                     |
|   +-------------------------------------------------------------+ |
|   | WLAN permite la conexión inalámbrica de dispositivos a través | |
|   | de ondas de radio en la red local.                           | |
|   +-------------------------------------------------------------+ |
|                                                                     |
|   Infraestructura WLAN típica:                                      |
|                                                                     |
|   +-------------------------------------------------------------+ |
|   |                                                              | |
|   |        +----------+                                         | |
|   |        | Internet |                                         | |
|   |        +----+-----+                                         | |
|   |             |                                                | |
|   |        +----+-----+                                         | |
|   |        |  Router  |                                         | |
|   |        +----+-----+                                         | |
|   |             |                                                | |
|   |    +-------+-------+                                        | |
|   |    | Punto Acceso  |                                        | |
|   |    |   ((( )))     |                                        | |
|   |    +---------------+                                        | |
|   |        /    |    \                                          | |
|   |    +----+ +----+ +----+                                    | |
|   |    | PC | | Tel| | Port|                                   | |
|   |    +----+ +----+ +----+                                    | |
|   |                                                              | |
|   +-------------------------------------------------------------+ |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Estándares WLAN (IEEE 802.11)

```
+--------------------------------------------------------------------+
|                    ESTÁNDARES WLAN                                  |
+--------------------------------------------------------------------+
|                                                                     |
|   Estándar | Nombre    | Frecuencia  | Veloc. Máx. | Año           |
|   ---------+-----------+-------------+-------------+--------------  |
|   802.11b  | Wi-Fi 1   | 2.4 GHz     | 11 Mbit/s   | 1999          |
|   802.11a  | Wi-Fi 2   | 5 GHz       | 54 Mbit/s   | 1999          |
|   802.11g  | Wi-Fi 3   | 2.4 GHz     | 54 Mbit/s   | 2003          |
|   802.11n  | Wi-Fi 4   | 2.4/5 GHz   | 600 Mbit/s  | 2009          |
|   802.11ac | Wi-Fi 5   | 5 GHz       | 6.9 Gbit/s  | 2013          |
|   802.11ax | Wi-Fi 6   | 2.4/5/6 GHz | 9.6 Gbit/s  | 2019          |
|                                                                     |
|   Los más importantes para el examen:                               |
|   +-------------------------------------------------------------+ |
|   | 802.11n (Wi-Fi 4): Primer estándar con ambas frecuencias    | |
|   | 802.11ac (Wi-Fi 5): Solo 5 GHz, muy rápido                  | |
|   | 802.11ax (Wi-Fi 6): Estándar más reciente, eficiente energét.| |
|   +-------------------------------------------------------------+ |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Bandas de Frecuencia

```
+--------------------------------------------------------------------+
|                    BANDAS DE FRECUENCIA                             |
+--------------------------------------------------------------------+
|                                                                     |
|   Banda de 2.4 GHz                                                  |
|   +------------------------------------------------------------+  |
|   | Ventajas:                      Desventajas:                 |  |
|   | - Mayor alcance                - Congestionada (muchos      |  |
|   | - Mejor penetración              dispositivos la usan)      |  |
|   |   a través de paredes          - Más interferencias         |  |
|   | - Más dispositivos             - Solo 3 canales no         |  |
|   |   compatibles                    superpuestos (1, 6, 11)    |  |
|   |                                - Más lenta                  |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   Banda de 5 GHz                                                    |
|   +------------------------------------------------------------+  |
|   | Ventajas:                      Desventajas:                 |  |
|   | - Mayor velocidad              - Menor alcance              |  |
|   | - Menos interferencias         - Peor penetración a         |  |
|   | - Más canales disponibles        través de paredes          |  |
|   | - Menos congestionada          - No todos los dispositivos  |  |
|   |                                  la soportan                |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   Resumen:                                                          |
|   +-------------------------------------------------------------+ |
|   | 2.4 GHz = Alcance, pero más lenta y más interferencias      | |
|   | 5 GHz   = Rápida, pero menor alcance                        | |
|   |                                                              | |
|   | Los routers modernos ofrecen AMBAS frecuencias (Dual-Band)  | |
|   +-------------------------------------------------------------+ |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Seguridad WLAN

```
+--------------------------------------------------------------------+
|                    SEGURIDAD WLAN                                   |
+--------------------------------------------------------------------+
|                                                                     |
|   Protocolos de cifrado (cronológico):                              |
|                                                                     |
|   WEP (Wired Equivalent Privacy)                                    |
|   +------------------------------------------------------------+  |
|   | X ¡OBSOLETO e INSEGURO!                                     |  |
|   | - Fácil de hackear (en minutos)                             |  |
|   | - Ya NO debería usarse NUNCA                                |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   WPA (Wi-Fi Protected Access)                                      |
|   +------------------------------------------------------------+  |
|   | X OBSOLETO                                                  |  |
|   | - Mejora sobre WEP                                          |  |
|   | - Cifrado TKIP (también se volvió inseguro)                 |  |
|   | - Ya no se recomienda                                       |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   WPA2 (Wi-Fi Protected Access 2)                                   |
|   +------------------------------------------------------------+  |
|   | / ESTÁNDAR ACTUAL                                           |  |
|   | - Cifrado AES (fuerte)                                      |  |
|   | - Disponible desde 2004                                     |  |
|   | - WPA2-Personal (PSK) para redes domésticas                 |  |
|   | - WPA2-Enterprise (802.1X) para empresas                    |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   WPA3 (Wi-Fi Protected Access 3)                                   |
|   +------------------------------------------------------------+  |
|   | / ESTÁNDAR MÁS RECIENTE (desde 2018)                        |  |
|   | - Cifrado aún más fuerte                                    |  |
|   | - Protección contra ataques de fuerza bruta                 |  |
|   | - Secreto perfecto hacia adelante                           |  |
|   | - En implementación gradual                                 |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   ! RELEVANTE PARA EXAMEN: WEP = inseguro, WPA2/WPA3 = seguro      |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Términos WLAN Importantes

```
+--------------------------------------------------------------------+
|                   TÉRMINOS WLAN                                     |
+--------------------------------------------------------------------+
|                                                                     |
|   SSID (Service Set Identifier)                                     |
|   +------------------------------------------------------------+  |
|   | - El nombre de la red WLAN                                  |  |
|   | - Emitido por el punto de acceso                            |  |
|   | - Puede ocultarse (SSID oculto)                             |  |
|   | - Ejemplo: "MiRedDomestica" o "WLAN-Empresa"                |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   Access Point (AP) - Punto de Acceso                               |
|   +------------------------------------------------------------+  |
|   | - Transmite la señal WLAN                                   |  |
|   | - Conecta dispositivos WLAN a la LAN                        |  |
|   | - A menudo integrado en el router                           |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   PSK (Pre-Shared Key)                                              |
|   +------------------------------------------------------------+  |
|   | - La contraseña WLAN                                        |  |
|   | - Usada con WPA2-Personal                                   |  |
|   | - Todos los usuarios usan la misma clave                    |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   Canal                                                             |
|   +------------------------------------------------------------+  |
|   | - Rango de frecuencia para comunicación                     |  |
|   | - 2.4 GHz: Canales 1-13                                     |  |
|   | - Canales no superpuestos: 1, 6, 11                         |  |
|   | - Si hay interferencia: Seleccionar canal diferente         |  |
|   +------------------------------------------------------------+  |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Modos de Operación WLAN

```
+--------------------------------------------------------------------+
|                   MODOS DE OPERACIÓN WLAN                           |
+--------------------------------------------------------------------+
|                                                                     |
|   MODO INFRAESTRUCTURA (Estándar)                                   |
|   +------------------------------------------------------------+  |
|   |                                                             |  |
|   |        +-------------+                                     |  |
|   |        | Punto Acceso|                                     |  |
|   |        |   ((( )))   |                                     |  |
|   |        +------+------+                                     |  |
|   |         /     |     \                                      |  |
|   |     +----+ +----+ +----+                                  |  |
|   |     | A  | | B  | | C  |                                  |  |
|   |     +----+ +----+ +----+                                  |  |
|   |                                                             |  |
|   |   - Todos los dispositivos conectan al punto de acceso    |  |
|   |   - La comunicación pasa a través del AP                   |  |
|   |   - Típico para redes domésticas y empresariales          |  |
|   |                                                             |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   MODO AD-HOC                                                       |
|   +------------------------------------------------------------+  |
|   |                                                             |  |
|   |     +----+         +----+                                  |  |
|   |     | A  |<------->| B  |                                  |  |
|   |     +----+         +----+                                  |  |
|   |          \         /                                       |  |
|   |           \       /                                        |  |
|   |            +----+                                          |  |
|   |            | C  |                                          |  |
|   |            +----+                                          |  |
|   |                                                             |  |
|   |   - Conexión directa entre dispositivos                    |  |
|   |   - No se necesita punto de acceso                         |  |
|   |   - Para redes temporales                                  |  |
|   |                                                             |  |
|   +------------------------------------------------------------+  |
|                                                                     |
+--------------------------------------------------------------------+
```

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **WLAN** | Wireless Local Area Network (Red de Área Local Inalámbrica) |
| **802.11** | Estándar IEEE para WLAN |
| **SSID** | Nombre de la red WLAN |
| **WPA2** | Estándar de seguridad actual |
| **PSK** | Pre-Shared Key (clave precompartida/contraseña) |
| **Access Point** | Transmisor/receptor WLAN |
| **Dual-Band** | 2.4 GHz y 5 GHz |

---

## Consejos para el Examen

### Preguntas Comunes del Examen

- ¿Diferencia entre 2.4 GHz vs. 5 GHz?
- ¿Qué cifrado WLAN es seguro?
- ¿Qué significa SSID?

### Importante Recordar

- **WEP** = inseguro, **WPA2/WPA3** = seguro
- **2.4 GHz:** Más alcance, más lenta, más interferencias
- **5 GHz:** Menos alcance, más rápida, menos interferencias
- **SSID** = nombre de la WLAN
- **802.11ac** = Wi-Fi 5, **802.11ax** = Wi-Fi 6
- Los canales **1, 6, 11** en 2.4 GHz no se superponen

---

## Ejercicios Prácticos

### Ejercicio 1
¿Qué banda de frecuencia deberías elegir si necesitas máximo alcance?

**Solución:**
**Banda de 2.4 GHz**

Razón: La banda de 2.4 GHz tiene mayor alcance y mejor penetración a través de paredes y obstáculos. Sin embargo, es más susceptible a interferencias y más lenta que la banda de 5 GHz.

### Ejercicio 2
Un cliente todavía está usando cifrado WEP. ¿Qué recomiendas?

**Solución:**
¡Cambiar urgentemente a **WPA2** o **WPA3**!

Razón:
- WEP ha sido conocido como inseguro durante años
- WEP puede hackearse en minutos
- WPA2 con cifrado AES es el estándar actual
- WPA3 es aún más seguro y preparado para el futuro

### Ejercicio 3
¿Qué significa la designación 802.11ac?

**Solución:**
**802.11ac** es un estándar WLAN (Wi-Fi 5):
- **802.11** = Estándar IEEE para WLAN
- **ac** = Variante/generación del estándar
- Usa la **banda de 5 GHz**
- Velocidad máxima: **6.9 Gbit/s**
- Introducido: 2013

---

## Referencias Cruzadas

- [04-03-01 Medidas de Protección Técnicas](../../04-it-security/04-03-protective-measures/04-03-01-technical-measures.md) - Seguridad WLAN
- [07-05 Hardware de Red](../07-05-network-hardware.md) - Puntos de Acceso
- [07-04-01 Cableado Estructurado](../07-04-cabling/07-04-01-structured-cabling.md) - Infraestructura LAN
