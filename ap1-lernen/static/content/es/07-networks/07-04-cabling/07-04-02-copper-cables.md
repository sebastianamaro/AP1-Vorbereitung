# Cables de Cobre y Categorías

## Objetivos de Aprendizaje

Después de esta sección, deberías ser capaz de:
- Distinguir las diferentes categorías de cables de cobre
- Nombrar la capacidad de rendimiento de cada categoría
- Explicar los tipos de blindaje (UTP, STP, S/FTP)
- Seleccionar cables adecuados para diferentes aplicaciones

---

## Contenido Principal

### Visión General de Categorías de Cables

```
+---------------------------------------------------------------------+
|              CATEGORÍAS DE CABLES DE COBRE                           |
+---------------------------------------------------------------------+
|                                                                      |
|  Categoría  Anch. Banda  Veloc. Máx.     Área de Aplicación         |
|  ---------------------------------------------------------------    |
|                                                                      |
|  Cat 5        100 MHz       100 Mbit/s     obsoleta, raramente usada |
|                                                                      |
|  Cat 5e       100 MHz       1 Gbit/s       Gigabit Ethernet          |
|                             (1000BASE-T)   (todavía común)           |
|                                                                      |
|  Cat 6        250 MHz       1 Gbit/s       Gigabit Ethernet          |
|                             10 Gbit/s*     (*hasta 55 m)             |
|                                                                      |
|  Cat 6A       500 MHz       10 Gbit/s      10-Gigabit Ethernet       |
|                             (10GBASE-T)    (estándar actual)         |
|                                                                      |
|  Cat 7        600 MHz       10 Gbit/s      Centros de datos          |
|                                            (máximo blindaje)         |
|                                                                      |
|  Cat 7A      1000 MHz       10 Gbit/s      Preparada para futuro     |
|                             (40 Gbit/s*)   (*distancias cortas)      |
|                                                                      |
|  Cat 8       2000 MHz       25/40 Gbit/s   Centros de datos          |
|                                            (máx. 30 m)               |
|                                                                      |
+---------------------------------------------------------------------+
```

### Comparación Detallada

| Categoría | Anch. Banda | Velocidad | Long. Máx. | Uso Típico |
|-----------|-------------|-----------|------------|------------|
| **Cat 5e** | 100 MHz | 1 Gbit/s | 100 m | Cableado de oficinas |
| **Cat 6** | 250 MHz | 1-10 Gbit/s | 100 m (55 m a 10G) | Nuevas instalaciones |
| **Cat 6A** | 500 MHz | 10 Gbit/s | 100 m | Estándar para obra nueva |
| **Cat 7** | 600 MHz | 10 Gbit/s | 100 m | Redes de alto rendimiento |
| **Cat 8** | 2000 MHz | 25-40 Gbit/s | 30 m | Centros de datos |

### Construcción del Cable

```
+---------------------------------------------------------------------+
|                  CABLE DE PAR TRENZADO                               |
+---------------------------------------------------------------------+
|                                                                      |
|     Sección transversal de un cable Cat 6A:                         |
|                                                                      |
|              +------------------------+                              |
|              |    Cubierta Exterior   |                              |
|              |  +------------------+  |                              |
|              |  | Blindaje General |  |                              |
|              |  | +--+ +--+       |  |                              |
|              |  | |oo| |oo|       |  |  4 pares trenzados            |
|              |  | +--+ +--+       |  |  (8 conductores en total)     |
|              |  | +--+ +--+       |  |                              |
|              |  | |oo| |oo|       |  |                              |
|              |  | +--+ +--+       |  |                              |
|              |  +------------------+  |                              |
|              +------------------------+                              |
|                                                                      |
|     ¿Por qué trenzado?                                              |
|     -> Reduce interferencias electromagnéticas (diafonía)           |
|     -> Cuanto más apretado el trenzado, mejor el blindaje           |
|                                                                      |
+---------------------------------------------------------------------+
```

### Tipos de Blindaje

El blindaje se indica con una designación estandarizada:
**XX/YZZ** donde:
- XX = Blindaje general
- Y = Blindaje por par
- ZZ = Par Trenzado (TP)

```
+---------------------------------------------------------------------+
|                    TIPOS DE BLINDAJE                                 |
+---------------------------------------------------------------------+
|                                                                      |
|  Designación     Blindaje General  Blindaje Par  Resistencia        |
|                                                  Interferencias     |
|  --------------------------------------------------------------     |
|                                                                      |
|  U/UTP             X               X             baja                |
|  (Sin blindaje)    ninguno         ninguno       (Cat 5e)           |
|                                                                      |
|  F/UTP             / Lámina        X             media               |
|  (Laminado)        Lámina          ninguno       (Cat 6)            |
|                                                                      |
|  S/FTP             / Malla         / Lámina      alta                |
|  (Blindado/Lamin.) Malla metálica  por par       (Cat 6A/7)         |
|                                                                      |
|  S/STP             / Malla         / Malla       muy alta            |
|  (Blindado)        Malla metálica  por par       (Cat 7/7A)         |
|                                                                      |
+---------------------------------------------------------------------+
```

**Mnemotécnico:**
- **U** = Unshielded (sin blindaje)
- **F** = Foiled (laminado)
- **S** = Shielded/Screened (malla)

### Tipos de Conectores

```
+---------------------------------------------------------------------+
|                    CONECTOR RJ45                                     |
+---------------------------------------------------------------------+
|                                                                      |
|         +--------------------+                                       |
|         |  +-+-+-+-+-+-+-+-+ |                                       |
|         |  |1|2|3|4|5|6|7|8| |    8 Pines (8P8C)                    |
|         |  +-+-+-+-+-+-+-+-+ |                                       |
|         |       +---+        |    Estándar para Ethernet            |
|         |       |   |        |                                       |
|         +-------+---+--------+                                       |
|                                                                      |
|  Cableado según T568A o T568B (Cruzado vs. Directo)                 |
|                                                                      |
|  T568B (Estándar):                                                  |
|  Pin 1: blanco-naranja    Pin 5: blanco-azul                        |
|  Pin 2: naranja           Pin 6: verde                              |
|  Pin 3: blanco-verde      Pin 7: blanco-marrón                      |
|  Pin 4: azul              Pin 8: marrón                             |
|                                                                      |
+---------------------------------------------------------------------+
```

### Tipos de Cable por Función

| Tipo de Cable | Uso | Descripción |
|---------------|-----|-------------|
| **Directo (Straight-Through)** | Switch <-> PC | Ambos extremos mismo cableado |
| **Cruzado (Crossover)** | PC <-> PC | Líneas envío/recepción cruzadas |
| **Cable de Parcheo** | Conexión | Cable flexible con conectores |
| **Cable de Instalación** | Instalación | Cable sólido para instalación permanente |

**Nota:** Los dispositivos modernos con **Auto-MDI/X** detectan automáticamente qué tipo de cable se está usando.

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Par Trenzado** | Pares de cables trenzados para reducir interferencias |
| **RJ45** | Conector estándar para cables de red (8P8C) |
| **Diafonía** | Interferencia de señal entre líneas adyacentes |
| **UTP** | Unshielded Twisted Pair (Par trenzado sin blindaje) |
| **STP** | Shielded Twisted Pair (Par trenzado blindado) |
| **Cat** | Categoría - clase de rendimiento del cable |
| **Ancho de banda** | Rango de frecuencia (en MHz) |
| **Auto-MDI/X** | Detección automática de tipo de cable |

---

## Consejos para el Examen

1. **Categorías más importantes para el examen:**
   - **Cat 5e:** 1 Gbit/s - estándar mínimo
   - **Cat 6A:** 10 Gbit/s - estándar actual para nueva instalación
   - **Cat 7:** 10 Gbit/s - mejor blindaje

2. **Mnemotécnico de blindaje:**
   - "**U**nprotected" = U (sin protección)
   - "**F**oil" = F (lámina)
   - "**S**hield/malla" = S (malla)

3. **Preguntas comunes del examen:**
   - ¿Qué categoría para 10 Gbit/s a 100 m? -> Cat 6A
   - ¿Qué significa S/FTP? -> Blindaje general + lámina por par
   - ¿Cuántos pares de cables? -> 4 pares = 8 conductores

4. **Errores típicos:**
   - Cat 6 puede hacer 10 Gbit/s, pero ¡solo hasta 55 m (no 100 m)!
   - Mayor categoría = se requiere más blindaje

---

## Ejercicios Prácticos

### Ejercicio 1: Asignar Categorías

¿Qué categoría de cable es adecuada para los siguientes requisitos?

a) Red de oficina con Gigabit Ethernet
b) Centro de datos con 10 Gbit/s a 80 m de distancia
c) Conexión de servidor con 25 Gbit/s a corta distancia

<details>
<summary>Mostrar solución</summary>

a) **Cat 5e** o superior (Cat 6) - Gigabit requiere al menos Cat 5e
b) **Cat 6A** - 10 Gbit/s a 100 m (¡Cat 6 solo hasta 55 m!)
c) **Cat 8** - para 25-40 Gbit/s (solo hasta 30 m)

</details>

### Ejercicio 2: Decodificar Blindaje

Explica el blindaje para las siguientes designaciones de cable:

a) U/UTP
b) F/UTP
c) S/FTP

<details>
<summary>Mostrar solución</summary>

a) **U/UTP:**
   - U = Sin blindaje general
   - UTP = Sin blindaje por par
   - Resultado: Completamente sin blindaje

b) **F/UTP:**
   - F = Blindaje general de lámina
   - UTP = Sin blindaje por par
   - Resultado: Solo blindaje exterior

c) **S/FTP:**
   - S = Blindaje general de malla metálica
   - FTP = Cada par blindado con lámina
   - Resultado: Doble blindaje (máxima calidad)

</details>

### Ejercicio 3: Escenario Práctico

ConSystem GmbH planea nuevo cableado para un piso de oficinas. Existen los siguientes requisitos:
- Gigabit Ethernet para todos los puestos de trabajo
- Posible ampliación a 10 Gbit/s en 5 años
- Fuentes de interferencias electromagnéticas fuertes cerca

¿Qué categoría de cable y blindaje recomiendas?

<details>
<summary>Mostrar solución</summary>

**Recomendación: Cat 6A S/FTP**

Razón:
- **Cat 6A** en lugar de Cat 6, porque:
  - Ya es capaz de 10 Gbit/s (a 100 m)
  - Preparado para el futuro para la ampliación planificada
  - La diferencia de precio con Cat 6 es mínima

- **S/FTP** en lugar de UTP, porque:
  - Fuentes de interferencias electromagnéticas fuertes presentes
  - Doble blindaje (malla + lámina por par)
  - Mejor resistencia a interferencias

Alternativa: Cat 7 S/FTP también sería posible, pero más caro y no necesario para los requisitos.

</details>

### Ejercicio 4: Resolución de Problemas

Un técnico instaló un cable de red Cat 6. El cliente se queja de que los 10 Gbit/s prometidos no se alcanzan. La longitud del cable es de 75 m.

¿Cuál es la causa y cómo se puede resolver el problema?

<details>
<summary>Mostrar solución</summary>

**Causa:**
Cat 6 soporta 10 Gbit/s solo hasta una longitud de **55 m**. Con 75 m de longitud de cable, la velocidad cae a 1 Gbit/s.

**Solución:**
1. Reemplazar cable con **Cat 6A** (soporta 10 Gbit/s hasta 100 m)
2. Alternativa: Reducir longitud del cable a menos de 55 m (si es posible)

**Conclusión:** Para nuevas instalaciones, siempre debería usarse Cat 6A cuando se necesita 10 Gbit/s.

</details>

---

## Referencias Cruzadas

- [Cableado Estructurado](07-04-01-structured-cabling.md) - Áreas de cableado
- [Hardware de Red](../07-05-network-hardware.md) - Switches y routers
- [Tasas de Transmisión](../07-06-data-transmission/07-06-01-transmission-rates.md) - Cálculos de velocidad
