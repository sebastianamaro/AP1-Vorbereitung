# Redes - Descripción General

## Estructura del Capítulo

Este capítulo cubre todos los temas relevantes para el examen sobre redes y comunicación:

### 07-01 Fundamentos de Redes
- [07-01-01 Modelo OSI](./07-01-network-fundamentals/07-01-01-osi-model.md)
- [07-01-02 Modelo TCP/IP](./07-01-network-fundamentals/07-01-02-tcp-ip-model.md)
- [07-01-03 Protocolos](./07-01-network-fundamentals/07-01-03-protocols.md)

### 07-02 Direccionamiento IP
- [07-02-01 IPv4](./07-02-ip-addressing/07-02-01-ipv4.md) (ampliado 2025)
- [07-02-02 IPv6](./07-02-ip-addressing/07-02-02-ipv6.md) **[NUEVO 2025]**
- [07-02-03 Subnetting](./07-02-ip-addressing/07-02-03-subnetting.md)
- [07-02-04 DHCP](./07-02-ip-addressing/07-02-04-dhcp.md)

### 07-03 WLAN
- [07-03-01 Fundamentos de WLAN](./07-03-wlan/07-03-01-wlan-fundamentals.md)

### 07-04 Cableado
- [07-04-01 Cableado Estructurado](./07-04-cabling/07-04-01-structured-cabling.md)
- [07-04-02 Cables de Cobre](./07-04-cabling/07-04-02-copper-cables.md)

### 07-05 Hardware de Red
- [07-05-network-hardware.md](./07-05-network-hardware.md)

### 07-06 Transmisión de Datos
- [07-06-01 Tasas de Transmisión](./07-06-data-transmission/07-06-01-transmission-rates.md) **[NUEVO 2025]**

### 07-07 Solución de Problemas de Red
- [07-07-01 Herramientas de Diagnóstico](./07-07-network-troubleshooting/07-07-01-diagnostic-tools.md)
- [07-07-02 Solución de Problemas](./07-07-network-troubleshooting/07-07-02-troubleshooting.md)

### 07-08 Mantenimiento Remoto
- [07-08-remote-maintenance.md](./07-08-remote-maintenance.md)

### 07-09 Integración de Dominio
- [07-09-domain-integration.md](./07-09-domain-integration.md) **[NUEVO 2025]**

---

## Relevancia para el Examen

```
+--------------------------------------------------------------------+
|                     RELEVANCIA PARA EL EXAMEN                       |
+--------------------------------------------------------------------+
|                                                                     |
|   MUY ALTA (aparece casi siempre)                                   |
|   +------------------------------------------------------------+   |
|   | - Modelo OSI y asignación de capas                         |   |
|   | - Direccionamiento IPv4 y subnetting                       |   |
|   | - Fundamentos de IPv6 (NUEVO 2025)                         |   |
|   | - Hardware de red (switch, router, punto de acceso)        |   |
|   | - Cálculo de tasas de transmisión (NUEVO 2025)             |   |
|   +------------------------------------------------------------+   |
|                                                                     |
|   ALTA                                                              |
|   +------------------------------------------------------------+   |
|   | - Función de DHCP                                          |   |
|   | - Seguridad WLAN                                           |   |
|   | - Integración de dominio (NUEVO 2025)                      |   |
|   | - Protocolos y puertos                                     |   |
|   | - Herramientas de diagnóstico (ping, ipconfig)             |   |
|   +------------------------------------------------------------+   |
|                                                                     |
|   MEDIA                                                             |
|   +------------------------------------------------------------+   |
|   | - Cableado estructurado                                    |   |
|   | - Categorías de cables                                     |   |
|   | - Mantenimiento remoto                                     |   |
|   +------------------------------------------------------------+   |
|                                                                     |
|   ! YA NO RELEVANTE (eliminado del catálogo de examen 2025)        |
|   +------------------------------------------------------------+   |
|   | - Tecnologías móviles LTE y 5G                             |   |
|   +------------------------------------------------------------+   |
|                                                                     |
+--------------------------------------------------------------------+
```

---

## Visión General de Temas

```
+--------------------------------------------------------------------+
|               VISIÓN GENERAL DE TEMAS DE REDES                      |
+--------------------------------------------------------------------+
|                                                                     |
|                       +----------------+                            |
|                       |     REDES      |                            |
|                       +-------+--------+                            |
|                               |                                     |
|    +--------------------------+---------------------------+         |
|    |                          |                           |         |
|    v                          v                           v         |
| +----------+           +--------------+            +----------+     |
| | MODELOS  |           |DIRECCIONAM.  |            | HARDWARE |     |
| +----------+           +--------------+            +----------+     |
| |- OSI     |           |- IPv4        |            |- Switch  |     |
| |- TCP/IP  |           |- IPv6 (NUEVO)|            |- Router  |     |
| |- Capas   |           |- Subnetting  |            |- Punto   |     |
| |- Protoc. |           |- DHCP        |            |  Acceso  |     |
| +----------+           +--------------+            +----------+     |
|                                                                     |
|    +--------------------------+---------------------------+         |
|    |                          |                           |         |
|    v                          v                           v         |
| +----------+           +--------------+            +----------+     |
| | CABLEADO |           |    WLAN      |            |ADMIN/OPS |     |
| +----------+           +--------------+            +----------+     |
| |- Primario|           |- Estándares  |            |- Diagnóst.|    |
| |- Secund. |           |- Seguridad   |            |- Remoto   |    |
| |- Terciario|          |- Frecuencias |            |- Dominio  |    |
| |- Categorías|         |              |            |  (NUEVO)  |    |
| +----------+           +--------------+            +----------+     |
|                                                                     |
+--------------------------------------------------------------------+
```

---

## Actualizaciones Importantes para 2025

| Tema | Estado | Detalles |
|------|--------|----------|
| **IPv6** | NUEVO | Fundamentos, estructura, diferencias con IPv4 |
| **Tasas de transmisión** | NUEVO | Cálculos con bit/s, Byte/s |
| **Integración de dominio** | NUEVO | Agregar un PC a un dominio |
| LTE/5G | ELIMINADO | Ya no es relevante para el examen |

---

## Estrategia de Aprendizaje para Este Capítulo

```
+--------------------------------------------------------------------+
|                    ESTRATEGIA DE APRENDIZAJE                        |
+--------------------------------------------------------------------+
|                                                                     |
|   1. COMPRENDER LOS FUNDAMENTOS                                     |
|      - Memorizar el modelo OSI (7 capas)                           |
|      - Comprender el modelo TCP/IP                                  |
|      - Poder asignar protocolos a las capas                        |
|                                                                     |
|   2. PRACTICAR DIRECCIONAMIENTO IP                                  |
|      - Leer e interpretar direcciones IPv4                         |
|      - Resolver ejercicios de subnetting                           |
|      - Comprender la notación IPv6 (NUEVO 2025)                    |
|                                                                     |
|   3. ESTABLECER RELEVANCIA PRÁCTICA                                 |
|      - Probar herramientas de diagnóstico en tu propio PC          |
|      - Ejecutar ipconfig, ping, tracert                            |
|      - Analizar configuraciones WLAN                               |
|                                                                     |
|   4. PRACTICAR CÁLCULOS (NUEVO 2025)                                |
|      - Convertir tasas de transmisión                              |
|      - Conversión Bit <-> Byte                                     |
|      - Calcular tiempo de transmisión                              |
|                                                                     |
+--------------------------------------------------------------------+
```

---

## Referencias Cruzadas a Otros Capítulos

- [04-03-04 Firewall Personal](../04-it-security/04-03-protective-measures/04-03-04-personal-firewall.md) - Seguridad de red
- [05-04-02 Computación en la Nube](../05-it-systems/05-04-virtualization-cloud/05-04-02-cloud-computing.md) - Redes en la nube
- [05-02-04 NAS](../05-it-systems/05-02-hardware/05-02-04-nas-availability.md) - Almacenamiento en red
