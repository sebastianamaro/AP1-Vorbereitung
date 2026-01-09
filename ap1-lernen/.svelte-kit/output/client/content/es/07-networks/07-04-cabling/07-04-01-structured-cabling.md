# Cableado Estructurado

## Objetivos de Aprendizaje

Después de esta sección, deberías ser capaz de:
- Nombrar las tres áreas del cableado estructurado
- Explicar la función de cada área de cableado
- Asignar componentes importantes
- Describir las ventajas del cableado estructurado

---

## Contenido Principal

### ¿Qué es el Cableado Estructurado?

**El cableado estructurado** es un concepto estandarizado para conectar edificios y recintos en red según el estándar **EN 50173**. Permite una infraestructura de red flexible, ampliable e independiente del fabricante.

### Las Tres Áreas

```
+---------------------------------------------------------------------+
|                    CABLEADO ESTRUCTURADO                             |
+---------------------------------------------------------------------+
|                                                                      |
|  +---------------------------------------------------------------+ |
|  |              ÁREA PRIMARIA (Cableado de Campus)               | |
|  |  +---------+                              +---------+         | |
|  |  |Edificio1|<------- Fibra Óptica ------->|Edificio2|         | |
|  |  |   MDF   |     (hasta 2000 m)           |   MDF   |         | |
|  |  +----+----+                              +----+----+         | |
|  +-------+---------------------------------------+---------------+ |
|          |                                       |                 |
|  +-------+---------------------------------------+---------------+ |
|  |       |    ÁREA SECUNDARIA (Backbone)         |               | |
|  |       v                                       v               | |
|  |  +---------+                              +---------+         | |
|  |  |  IDF 3  |     Fibra/Cobre              |  IDF 3  |         | |
|  |  | Piso 3  |<----(hasta 500 m)----------->| Piso 3  |         | |
|  |  +----+----+                              +----+----+         | |
|  |       |                                       |               | |
|  |  +----+----+                              +---+-----+         | |
|  |  |  IDF 2  |                              |  IDF 2  |         | |
|  |  | Piso 2  |                              | Piso 2  |         | |
|  |  +----+----+                              +----+----+         | |
|  |       |                                       |               | |
|  |  +----+----+                              +---+-----+         | |
|  |  |  IDF 1  |                              |  IDF 1  |         | |
|  |  | Piso 1  |                              | Piso 1  |         | |
|  |  +----+----+                              +----+----+         | |
|  +-------+---------------------------------------+---------------+ |
|          |                                       |                 |
|  +-------+---------------------------------------+---------------+ |
|  |       |    ÁREA TERCIARIA (Cableado de Piso)  |               | |
|  |       v                                       v               | |
|  |    +------+ +------+ +------+          +------+ +------+     | |
|  |    | Toma | | Toma | | Toma |          | Toma | | Toma |     | |
|  |    |Pared | |Pared | |Pared |          |Pared | |Pared |     | |
|  |    +--+---+ +--+---+ +--+---+          +--+---+ +--+---+     | |
|  |       |        |        |                 |        |         | |
|  |      PC       PC       PC                PC       PC         | |
|  |                   (hasta 90 m Cobre)                         | |
|  +--------------------------------------------------------------+ |
|                                                                      |
|  MDF = Distribuidor Principal    IDF = Distribuidor Intermedio      |
+---------------------------------------------------------------------+
```

### 1. Área Primaria (Cableado de Campus)

| Aspecto | Descripción |
|---------|-------------|
| **Conexión** | Edificio a edificio |
| **Distribuidor** | Distribuidor Principal (MDF) |
| **Medio** | Fibra óptica (FO) |
| **Long. Máxima** | hasta 2000 m |
| **Aplicación** | Recintos empresariales, campus |

**Distribuidor Principal (MDF):**
- Nodo central de toda la red
- Conexión a WAN/Internet
- Contiene routers y switches centrales

### 2. Área Secundaria (Backbone)

| Aspecto | Descripción |
|---------|-------------|
| **Conexión** | Piso a piso (vertical) |
| **Distribuidor** | Distribuidor Intermedio (IDF) |
| **Medio** | Fibra óptica o cobre |
| **Long. Máxima** | hasta 500 m |
| **Aplicación** | Dentro de un edificio |

**Distribuidor Intermedio (IDF):**
- Distribuye la red al piso
- Contiene switches y paneles de parcheo
- A menudo en salas técnicas o armarios de pared

### 3. Área Terciaria (Cableado de Piso)

| Aspecto | Descripción |
|---------|-------------|
| **Conexión** | Distribuidor a puesto de trabajo (horizontal) |
| **Punto de conexión** | Toma de pared |
| **Medio** | Cable de cobre (Cat 5e/6/6A/7) |
| **Long. Máxima** | hasta 90 m (instalación permanente) |
| **Aplicación** | Oficinas, puestos de trabajo |

**Regla Importante de Longitud:**
```
+--------------------------------------------------------------+
|                 100 m LONGITUD TOTAL                          |
|                                                              |
|  +-----+       +------------------------+       +---------+ |
|  |     |       |                        |       |         | |
|  | IDF |-------|  Instalación Permane.  |-------|  Toma   | |
|  |     | 5m    |       90 m             |       |  Pared  | |
|  +-----+       +------------------------+       +----+----+ |
|                                                      | 5m   |
|                                                   +--+--+   |
|                                                   | PC  |   |
|                                                   +-----+   |
|                                                              |
|  Latiguillo: 5m + Permanente: 90m + Latiguillo: 5m = 100m   |
+--------------------------------------------------------------+
```

### Componentes del Cableado

| Componente | Área | Función |
|------------|------|---------|
| **Distribuidor Principal** | Primaria | Nodo central del edificio |
| **Distribuidor Intermedio** | Secundaria | Distribuidor por piso |
| **Panel de Parcheo** | Todas | Puntos de conexión centrales |
| **Cable de Parcheo** | Todas | Cables de conexión flexibles |
| **Toma de Pared** | Terciaria | Enchufe en puesto de trabajo |
| **Cable de Instalación** | Todas | Cables instalados permanentemente |

### Ventajas del Cableado Estructurado

```
+-------------------------------------------------------------+
|                    VENTAJAS                                  |
+-------------------------------------------------------------+
|                                                              |
|  / Flexibilidad     - Traslados y cambios fáciles           |
|                                                              |
|  / Escalabilidad    - Ampliación sin nuevo cableado         |
|                                                              |
|  / Estandarización  - Independiente del fabricante          |
|                                                              |
|  / Preparado futuro - Soporta nuevas tecnologías            |
|                                                              |
|  / Mantenibilidad   - Estructura clara                      |
|                                                              |
|  / Eficiencia costes- Más económico a largo plazo           |
|                                                              |
+-------------------------------------------------------------+
```

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **EN 50173** | Estándar europeo para cableado estructurado |
| **MDF** | Main Distribution Frame - distribuidor central |
| **IDF** | Intermediate Distribution Frame - distribuidor de piso |
| **Panel de Parcheo** | Regleta de conexión para terminaciones de cables |
| **Cable de Parcheo** | Cable de conexión flexible (latiguillo) |
| **Toma de Pared** | Unidad de conexión de telecomunicaciones (roseta) |
| **Fibra Óptica** | Cable de fibra óptica |

---

## Consejos para el Examen

1. **Mnemotécnico para las áreas:**
   - **P**rimaria = **P**lausiblemente lejos (Campus, 2000 m, Fibra óptica)
   - **S**ecundaria = e**S**caleras (vertical, 500 m)
   - **T**erciaria = **T**rabajo (horizontal a puesto de trabajo, 90 m)

2. **Preguntas comunes del examen:**
   - ¿Qué medio se usa en el área primaria? -> Fibra óptica
   - ¿Longitud máxima en el área terciaria? -> 90 m (instalación permanente)
   - ¿Para qué sirve el IDF? -> Distribución en el piso

3. **Evitar errores típicos:**
   - La regla de los 100 m aplica a TODO el trayecto incluyendo latiguillos
   - La fibra óptica es estándar en el área primaria, no opcional

---

## Ejercicios Prácticos

### Ejercicio 1: Asignación
Asigna los componentes al área correcta:

| Componente | Primaria | Secundaria | Terciaria |
|-----------|----------|------------|-----------|
| Toma de pared en puesto de trabajo | | | |
| Conexión entre edificios | | | |
| Distribuidor intermedio | | | |
| Cable de cobre al PC | | | |

<details>
<summary>Mostrar solución</summary>

| Componente | Primaria | Secundaria | Terciaria |
|-----------|----------|------------|-----------|
| Toma de pared en puesto de trabajo | | | / |
| Conexión entre edificios | / | | |
| Distribuidor intermedio | | / | |
| Cable de cobre al PC | | | / |

</details>

### Ejercicio 2: Escenario Práctico

ConSystem GmbH planea conectar en red un nuevo edificio de oficinas de 4 pisos con conexión al edificio principal (a 150 m de distancia).

a) ¿Qué áreas de cableado son relevantes?
b) ¿Qué tipos de cable recomiendas para cada área?

<details>
<summary>Mostrar solución</summary>

a) **Las tres áreas son relevantes:**
- Área primaria: Conexión al edificio principal (150 m)
- Área secundaria: Conexión de los 4 pisos entre sí
- Área terciaria: Cableado en cada piso hasta los puestos de trabajo

b) **Tipos de cable recomendados:**
- Área primaria: Fibra óptica - aunque 150 m también sería posible con cobre, la fibra óptica es más preparada para el futuro
- Área secundaria: Fibra óptica o Cat 6A/7 (dependiendo del presupuesto y requisitos)
- Área terciaria: Cable de cobre Cat 6A (para Gigabit y más)

</details>

### Ejercicio 3: Cálculo

Un cable de parcheo en el IDF tiene 3 m de longitud, el cable de parcheo en el puesto de trabajo tiene 4 m. ¿Cuál es la longitud máxima de la instalación permanente?

<details>
<summary>Mostrar solución</summary>

**Cálculo:**
- Longitud total máxima: 100 m
- Cable de parcheo IDF: 3 m
- Cable de parcheo puesto de trabajo: 4 m
- Instalación permanente = 100 m - 3 m - 4 m = **93 m**

Nota: En la práctica, deberías mantenerte por debajo de 90 m para tener reserva.

</details>

---

## Referencias Cruzadas

- [Cables de Cobre y Categorías](07-04-02-copper-cables.md) - Tipos de cable en detalle
- [Hardware de Red](../07-05-network-hardware.md) - Switches y routers
- [Modelo OSI](../07-01-network-fundamentals/07-01-01-osi-model.md) - Cableado Capa 1
