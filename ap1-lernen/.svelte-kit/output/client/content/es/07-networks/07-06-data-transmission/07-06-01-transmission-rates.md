# Cálculo de Tasas de Transmisión [NUEVO 2025]

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Comprender y convertir tasas de transmisión
- Calcular tiempos de transmisión
- Distinguir entre bit y byte
- Resolver preguntas de examen sobre transmisión de datos

---

## Contenido Principal

### Fundamentos de la Transmisión de Datos

```
+--------------------------------------------------------------------+
|                    TRANSMISIÓN DE DATOS                             |
+--------------------------------------------------------------------+
|                                                                     |
|   Tasa de transmisión = Cantidad de datos por tiempo               |
|                                                                     |
|   +-------------------------------------------------------------+ |
|   |                                                              | |
|   |   IMPORTANTE: Bit vs. Byte                                   | |
|   |                                                              | |
|   |   - Las tasas de transmisión se dan en BIT/s                | |
|   |   - Los tamaños de archivo se dan en BYTE                   | |
|   |                                                              | |
|   |   1 Byte = 8 Bit                                             | |
|   |                                                              | |
|   |   Notación:                                                  | |
|   |   - Bit por segundo: bit/s o bps                             | |
|   |   - Byte por segundo: B/s                                    | |
|   |   - "b" minúscula = Bit, "B" mayúscula = Byte                | |
|   |                                                              | |
|   +-------------------------------------------------------------+ |
|                                                                     |
|   Prefijos (unidades SI):                                           |
|   +-------------------------------------------------------------+ |
|   | Kilo (k)  = 1.000                = 10^3                     | |
|   | Mega (M)  = 1.000.000            = 10^6                     | |
|   | Giga (G)  = 1.000.000.000        = 10^9                     | |
|   | Tera (T)  = 1.000.000.000.000    = 10^12                    | |
|   +-------------------------------------------------------------+ |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Conversiones

```
+--------------------------------------------------------------------+
|                      CONVERSIONES                                   |
+--------------------------------------------------------------------+
|                                                                     |
|   BIT <-> BYTE                                                      |
|   +------------------------------------------------------------+  |
|   |                                                             |  |
|   |   Bit -> Byte:  / 8                                        |  |
|   |   Byte -> Bit:  x 8                                        |  |
|   |                                                             |  |
|   |   Ejemplos:                                                 |  |
|   |   80 Mbit/s / 8 = 10 MB/s                                  |  |
|   |   100 MB    x 8 = 800 Mbit                                 |  |
|   |                                                             |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   CONVERSIÓN DE PREFIJOS                                            |
|   +------------------------------------------------------------+  |
|   |                                                             |  |
|   |   1 Gbit/s = 1.000 Mbit/s = 1.000.000 kbit/s              |  |
|   |                                                             |  |
|   |   Mayor -> Menor: x 1.000                                  |  |
|   |   Menor -> Mayor: / 1.000                                  |  |
|   |                                                             |  |
|   |   Ejemplos:                                                 |  |
|   |   2 Gbit/s = 2.000 Mbit/s                                  |  |
|   |   500 Mbit/s = 0,5 Gbit/s                                  |  |
|   |                                                             |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   TABLA DE CONVERSIÓN TÍPICA                                        |
|   +------------------------------------------------------------+  |
|   |                                                             |  |
|   |   Tasa Transmisión | En Mbit/s | En MB/s                   |  |
|   |   -----------------+-----------+-------------------        |  |
|   |   100 Mbit/s       | 100       | 12,5 MB/s                 |  |
|   |   1 Gbit/s         | 1.000     | 125 MB/s                  |  |
|   |   10 Gbit/s        | 10.000    | 1.250 MB/s                |  |
|   |                                                             |  |
|   +------------------------------------------------------------+  |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Cálculo del Tiempo de Transmisión

```
+--------------------------------------------------------------------+
|                 CÁLCULO TIEMPO DE TRANSMISIÓN                       |
+--------------------------------------------------------------------+
|                                                                     |
|   Fórmula básica:                                                   |
|   +-------------------------------------------------------------+ |
|   |                                                              | |
|   |              Cantidad de Datos                               | |
|   |   Tiempo = ---------------------                             | |
|   |             Tasa de Transmisión                              | |
|   |                                                              | |
|   |   ! IMPORTANTE: ¡Las unidades deben coincidir!              | |
|   |      Ambos en Bit O ambos en Byte!                          | |
|   |                                                              | |
|   +-------------------------------------------------------------+ |
|                                                                     |
|   EJEMPLO 1: Cálculo simple                                         |
|   +------------------------------------------------------------+  |
|   |                                                             |  |
|   |   Archivo: 800 MB                                          |  |
|   |   Conexión: 100 Mbit/s                                     |  |
|   |                                                             |  |
|   |   Paso 1: Igualar unidades                                 |  |
|   |   800 MB x 8 = 6.400 Mbit                                  |  |
|   |                                                             |  |
|   |   Paso 2: Aplicar fórmula                                  |  |
|   |   Tiempo = 6.400 Mbit / 100 Mbit/s = 64 segundos           |  |
|   |                                                             |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   EJEMPLO 2: Archivo más grande                                     |
|   +------------------------------------------------------------+  |
|   |                                                             |  |
|   |   Archivo: 5 GB                                            |  |
|   |   Conexión: 1 Gbit/s                                       |  |
|   |                                                             |  |
|   |   Paso 1: Igualar unidades                                 |  |
|   |   5 GB x 8 = 40 Gbit                                       |  |
|   |                                                             |  |
|   |   Paso 2: Aplicar fórmula                                  |  |
|   |   Tiempo = 40 Gbit / 1 Gbit/s = 40 segundos                |  |
|   |                                                             |  |
|   +------------------------------------------------------------+  |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Tasas de Transmisión Típicas

```
+--------------------------------------------------------------------+
|                 TASAS DE TRANSMISIÓN TÍPICAS                        |
+--------------------------------------------------------------------+
|                                                                     |
|   REDES DE ÁREA LOCAL (LAN)                                         |
|   +------------------------------------------------------------+  |
|   | Fast Ethernet:      100 Mbit/s    = 12,5 MB/s              |  |
|   | Gigabit Ethernet:   1 Gbit/s      = 125 MB/s               |  |
|   | 10 Gigabit:         10 Gbit/s     = 1.250 MB/s             |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   WLAN                                                              |
|   +------------------------------------------------------------+  |
|   | 802.11n (Wi-Fi 4):  hasta 600 Mbit/s                       |  |
|   | 802.11ac (Wi-Fi 5): hasta 6,9 Gbit/s (teórico)             |  |
|   | 802.11ax (Wi-Fi 6): hasta 9,6 Gbit/s (teórico)             |  |
|   |                                                             |  |
|   | ! Práctica: A menudo solo se alcanza 50-70% de tasa máx.   |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   CONEXIONES A INTERNET (conexiones típicas)                        |
|   +------------------------------------------------------------+  |
|   | DSL:                16-250 Mbit/s Descarga                 |  |
|   | Cable:              hasta 1 Gbit/s Descarga                |  |
|   | Fibra (FTTH):       hasta 1 Gbit/s (simétrico)             |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   INTERFACES USB                                                    |
|   +------------------------------------------------------------+  |
|   | USB 2.0:  480 Mbit/s  = 60 MB/s                            |  |
|   | USB 3.0:  5 Gbit/s    = 625 MB/s                           |  |
|   | USB 3.1:  10 Gbit/s   = 1.250 MB/s                         |  |
|   | USB 3.2:  20 Gbit/s   = 2.500 MB/s                         |  |
|   +------------------------------------------------------------+  |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Resumen de Pasos de Cálculo

```
+--------------------------------------------------------------------+
|                   PASOS DE CÁLCULO                                  |
+--------------------------------------------------------------------+
|                                                                     |
|   1. IDENTIFICAR VALORES DADOS                                      |
|   +------------------------------------------------------------+  |
|   | - Cantidad de datos (en MB, GB, ...)                       |  |
|   | - Tasa de transmisión (en Mbit/s, Gbit/s, ...)             |  |
|   | - O: Tiempo dado, tasa buscada                             |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   2. IGUALAR UNIDADES                                               |
|   +------------------------------------------------------------+  |
|   | Cualquiera de:                                              |  |
|   | - Convertir todo a Bit                                     |  |
|   | - O: Convertir todo a Byte                                 |  |
|   |                                                             |  |
|   | Recordar: Tamaño archivo (Byte) x 8 = Tamaño archivo (Bit) |  |
|   |           Tasa (Bit/s) / 8 = Tasa (Byte/s)                 |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   3. APLICAR FÓRMULA                                                |
|   +------------------------------------------------------------+  |
|   |                                                             |  |
|   |   Tiempo = Cantidad datos / Tasa                           |  |
|   |   Tasa = Cantidad datos / Tiempo                           |  |
|   |   Cantidad datos = Tasa x Tiempo                           |  |
|   |                                                             |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   4. COMPROBAR RESULTADO                                            |
|   +------------------------------------------------------------+  |
|   | - ¿Es correcta la unidad del resultado?                    |  |
|   | - ¿Es plausible el resultado?                              |  |
|   | - Si es necesario, convertir a otra unidad (s -> min)      |  |
|   +------------------------------------------------------------+  |
|                                                                     |
+--------------------------------------------------------------------+
```

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Bit** | Unidad más pequeña de información (0 o 1) |
| **Byte** | 8 Bits |
| **Mbit/s** | Megabits por segundo (tasa de transmisión) |
| **MB/s** | Megabytes por segundo |
| **Ancho de banda** | Capacidad máxima de transmisión |
| **Throughput** | Tasa de transmisión realmente alcanzada |

---

## Consejos para el Examen

### Preguntas Comunes del Examen

- Calcular el tiempo de transmisión de un archivo
- Convertir Mbit/s a MB/s
- Comparar tasas de transmisión

### Importante Recordar

- **1 Byte = 8 Bit**
- **Tasas en Bit**, **Tamaños de archivo en Byte**
- **Tiempo = Cantidad datos / Tasa**
- **Gigabit Ethernet** = 1.000 Mbit/s = 125 MB/s
- ¡Siempre igualar unidades antes de calcular!
- B mayúscula = Byte, b minúscula = Bit

---

## Ejercicios Prácticos

### Ejercicio 1
¿Cuánto tiempo tarda en transferirse un archivo de 600 MB a una tasa de transmisión de 100 Mbit/s?

**Solución:**
1. Igualar unidades: 600 MB x 8 = 4.800 Mbit
2. Fórmula: Tiempo = 4.800 Mbit / 100 Mbit/s = **48 segundos**

### Ejercicio 2
Convierte 1 Gbit/s a MB/s.

**Solución:**
1. 1 Gbit/s = 1.000 Mbit/s
2. 1.000 Mbit/s / 8 = **125 MB/s**

### Ejercicio 3
Una copia de seguridad de 50 GB debe transferirse a través de una conexión de 1 Gbit/s. ¿Cuánto tiempo tarda como mínimo?

**Solución:**
1. 50 GB x 8 = 400 Gbit
2. Tiempo = 400 Gbit / 1 Gbit/s = **400 segundos = 6 minutos 40 segundos**

### Ejercicio 4
Un archivo de 4 GB se transfirió en 5 minutos. ¿Qué tasa de transmisión se alcanzó?

**Solución:**
1. 5 minutos = 300 segundos
2. 4 GB x 8 = 32 Gbit = 32.000 Mbit
3. Tasa = 32.000 Mbit / 300 s = **106,67 Mbit/s** (aprox. 107 Mbit/s)

---

## Referencias Cruzadas

- [05-01-01 Bits, Bytes, Sistemas Numéricos](../../05-it-systems/05-01-fundamentals/05-01-01-bits-bytes-number-systems.md) - Fundamentos
- [07-04-02 Cables de Cobre](../07-04-cabling/07-04-02-copper-cables.md) - Categorías de cables
- [07-03-01 Fundamentos WLAN](../07-03-wlan/07-03-01-wlan-fundamentals.md) - Velocidades WLAN
