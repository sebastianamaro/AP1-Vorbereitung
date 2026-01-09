# Redundancia y Formas Normales

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Reconocer la redundancia de datos y comprender sus problemas
- Explicar las tres primeras formas normales
- Conocer las anomalías causadas por falta de normalización
- Realizar normalizaciones simples

---

## Contenido Principal

### ¿Qué es la Redundancia?

**Redundancia** significa que los mismos datos se almacenan múltiples veces.

```
┌─────────────────────────────────────────────────────────────────┐
│                      REDUNDANCIA DE DATOS                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Ejemplo: Datos redundantes                                    │
│                                                                 │
│   ┌──────┬─────────┬────────────┬──────────┬──────────────┐   │
│   │NoPedido│ Cliente│ CiudadCliente│ Artículo │ Precio       │   │
│   ├──────┼─────────┼────────────┼──────────┼──────────────┤   │
│   │ 1001 │ Mueller │ Berlín     │ Laptop   │ 999.00       │   │
│   │ 1002 │ Mueller │ Berlín     │ Ratón    │  29.99       │   │
│   │ 1003 │ Schmidt │ Hamburgo   │ Laptop   │ 999.00       │   │
│   │ 1004 │ Mueller │ Berlín     │ Teclado  │  49.99       │   │
│   └──────┴─────────┴────────────┴──────────┴──────────────┘   │
│              ▲           ▲                       ▲             │
│              │           │                       │             │
│              └───────────┴───────────────────────┘             │
│              REDUNDANCIA: "Mueller, Berlín" y "999.00"         │
│              ¡se almacenan múltiples veces!                    │
│                                                                 │
│   Problemas:                                                    │
│   • Espacio de almacenamiento desperdiciado                    │
│   • Riesgo de inconsistencia                                   │
│   • Anomalías durante modificaciones                           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Anomalías Causadas por Redundancia

```
┌────────────────────────────────────────────────────────────────┐
│                       ANOMALÍAS                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   1. ANOMALÍA DE ACTUALIZACIÓN                                 │
│   ┌────────────────────────────────────────────────────────┐ │
│   │  Mueller se muda. La ciudad debe cambiarse en TODAS    │ │
│   │  las filas. Si se olvida una → ¡Inconsistencia!        │ │
│   │                                                        │ │
│   │  │ Mueller │ Múnich   │  ← cambiado                   │ │
│   │  │ Mueller │ Berlín   │  ← olvidado → ¡ERROR!         │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   2. ANOMALÍA DE INSERCIÓN                                     │
│   ┌────────────────────────────────────────────────────────┐ │
│   │  No se puede crear un nuevo cliente sin pedido         │ │
│   │  porque NoPedido es requerido como PK.                 │ │
│   │                                                        │ │
│   │  │ ???? │ Weber │ Frankfurt │ - │ - │  NO POSIBLE     │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   3. ANOMALÍA DE ELIMINACIÓN                                   │
│   ┌────────────────────────────────────────────────────────┐ │
│   │  Schmidt tiene solo un pedido. Si se elimina,          │ │
│   │  ¡el cliente Schmidt desaparece completamente!         │ │
│   │                                                        │ │
│   │  │ 1003 │ Schmidt │ Hamburgo │ Laptop │ ← si se elimina│ │
│   │                                        → ¡Cliente perdido!│ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Normalización

**Normalización** es el proceso de dividir tablas para minimizar la redundancia y evitar anomalías.

```
┌────────────────────────────────────────────────────────────────┐
│                    FORMAS NORMALES                             │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│                      NO NORMALIZADO                            │
│                             │                                  │
│                             ▼                                  │
│                    ┌────────────────┐                         │
│                    │ 1era Forma Normal│  Valores atómicos     │
│                    │     (1FN)      │  (sin repetición)       │
│                    └────────┬───────┘                         │
│                             │                                  │
│                             ▼                                  │
│                    ┌────────────────┐                         │
│                    │ 2da Forma Normal│  Todos los no-clave    │
│                    │     (2FN)      │  dependen completa-     │
│                    └────────┬───────┘  mente de PK            │
│                             │                                  │
│                             ▼                                  │
│                    ┌────────────────┐                         │
│                    │ 3era Forma Normal│  Sin dependencias     │
│                    │     (3FN)      │  transitivas            │
│                    └────────────────┘                         │
│                                                                │
│   ¡Cada FN superior requiere las inferiores!                  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### 1era Forma Normal (1FN)

```
┌────────────────────────────────────────────────────────────────┐
│                  1era FORMA NORMAL (1FN)                       │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Requisito: Todos los valores de atributos deben ser ATÓMICOS.│
│   (sin listas, sin conjuntos, sin valores múltiples)          │
│                                                                │
│   NO en 1FN:                                                   │
│   ┌──────────┬─────────┬─────────────────────────────┐       │
│   │ NoCliente│ Nombre  │ NúmerosTelefono             │       │
│   ├──────────┼─────────┼─────────────────────────────┤       │
│   │ 1        │ Mueller │ 0151-1234, 030-5678         │  ✗   │
│   │ 2        │ Schmidt │ 0172-9999                   │       │
│   └──────────┴─────────┴─────────────────────────────┘       │
│                    ¡Múltiples valores en una celda!           │
│                                                                │
│   EN 1FN (Solución 1: Tabla separada):                        │
│   ┌──────────┬─────────┐    ┌──────────┬────────────┐       │
│   │ NoCliente│ Nombre  │    │ NoCliente│ Teléfono   │       │
│   ├──────────┼─────────┤    ├──────────┼────────────┤       │
│   │ 1        │ Mueller │    │ 1        │ 0151-1234  │  ✓   │
│   │ 2        │ Schmidt │    │ 1        │ 030-5678   │       │
│   └──────────┴─────────┘    │ 2        │ 0172-9999  │       │
│                             └──────────┴────────────┘       │
│                    ¡Cada celda contiene solo UN valor!       │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### 2da Forma Normal (2FN)

```
┌────────────────────────────────────────────────────────────────┐
│                  2da FORMA NORMAL (2FN)                        │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Requisito: 1FN + Todos los atributos no clave                │
│   deben depender de la PK COMPLETA.                           │
│   (relevante para PK compuesta)                               │
│                                                                │
│   NO en 2FN:                                                   │
│   PK = (NoPedido, NoArtículo)                                 │
│   ┌────────┬───────────┬────────┬──────────────────┐         │
│   │ NoPedido│ NoArtículo│ Cant   │ NombreArtículo   │  ✗     │
│   ├────────┼───────────┼────────┼──────────────────┤         │
│   │ 1001   │ A1        │ 2      │ Laptop           │         │
│   │ 1001   │ A2        │ 1      │ Ratón            │         │
│   │ 1002   │ A1        │ 1      │ Laptop           │         │
│   └────────┴───────────┴────────┴──────────────────┘         │
│                    ▲                    ▲                     │
│                    │                    │                     │
│             Cant depende de         NombreArtículo depende   │
│             PK completa             ¡SOLO de NoArtículo!     │
│                    ✓                    ✗                     │
│                                                                │
│   EN 2FN (dividir):                                           │
│   ┌────────┬───────────┬────────┐  ┌───────────┬───────────┐│
│   │ NoPedido│ NoArtículo│ Cant   │  │ NoArtículo│NombreArt  ││
│   ├────────┼───────────┼────────┤  ├───────────┼───────────┤│
│   │ 1001   │ A1        │ 2      │  │ A1        │ Laptop    │ ✓│
│   │ 1001   │ A2        │ 1      │  │ A2        │ Ratón     ││
│   │ 1002   │ A1        │ 1      │  └───────────┴───────────┘│
│   └────────┴───────────┴────────┘                            │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### 3era Forma Normal (3FN)

```
┌────────────────────────────────────────────────────────────────┐
│                  3era FORMA NORMAL (3FN)                       │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Requisito: 2FN + Sin dependencias transitivas               │
│   Los no-clave no deben depender de otros                     │
│   no-clave!                                                   │
│                                                                │
│   NO en 3FN:                                                   │
│   PK = NoCliente                                              │
│   ┌──────────┬─────────┬──────────┬──────────────┐          │
│   │ NoCliente│ Nombre  │ CódPostal│ Ciudad       │   ✗      │
│   ├──────────┼─────────┼──────────┼──────────────┤          │
│   │ 1        │ Mueller │ 10115    │ Berlín       │          │
│   │ 2        │ Schmidt │ 20095    │ Hamburgo     │          │
│   │ 3        │ Weber   │ 10115    │ Berlín       │          │
│   └──────────┴─────────┴──────────┴──────────────┘          │
│                              ▲            ▲                  │
│                              │            │                  │
│                         NoCliente → CódPostal → Ciudad      │
│                              ¡Dependencia transitiva!       │
│                         Ciudad depende de CódPostal,        │
│                         no directamente de NoCliente        │
│                                                                │
│   EN 3FN (dividir):                                           │
│   ┌──────────┬─────────┬──────────┐  ┌──────────┬────────┐  │
│   │ NoCliente│ Nombre  │ CódPostal│  │ CódPostal│ Ciudad │  │
│   ├──────────┼─────────┼──────────┤  ├──────────┼────────┤  │
│   │ 1        │ Mueller │ 10115    │  │ 10115    │ Berlín │ ✓ │
│   │ 2        │ Schmidt │ 20095    │  │ 20095    │Hamburgo│  │
│   │ 3        │ Weber   │ 10115    │  └──────────┴────────┘  │
│   └──────────┴─────────┴──────────┘                         │
│                                                                │
│   ¡Ahora Ciudad se almacena solo una vez por CódPostal!      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Resumen de Formas Normales

| FN | Requisito | Elimina |
|----|-----------|---------|
| **1FN** | Valores atómicos (sin listas) | Grupos repetitivos |
| **2FN** | Dependencia completa de PK | Dependencias parciales |
| **3FN** | Sin dependencias transitivas | Dependencias indirectas |

---

### Ejemplo Práctico: Normalización

```
┌────────────────────────────────────────────────────────────────┐
│             EJEMPLO: NORMALIZACIÓN PASO A PASO                 │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Tabla original (no normalizada):                             │
│   ┌──────┬────────┬───────┬─────────────────┬───────────────┐│
│   │NoPedido│ Cliente│ Ciudad│ Artículos       │ PrecioUnit    ││
│   ├──────┼────────┼───────┼─────────────────┼───────────────┤│
│   │ 1001 │ Mueller │Berlín │ Laptop, Ratón   │ 999, 29       ││
│   └──────┴────────┴───────┴─────────────────┴───────────────┘│
│                                                                │
│   Después de 1FN (valores atómicos):                          │
│   ┌──────┬────────┬───────┬──────────┬───────────┐          │
│   │NoPedido│ Cliente│ Ciudad│ Artículo │ PrecioUnit│          │
│   ├──────┼────────┼───────┼──────────┼───────────┤          │
│   │ 1001 │ Mueller │Berlín │ Laptop   │ 999       │          │
│   │ 1001 │ Mueller │Berlín │ Ratón    │ 29        │          │
│   └──────┴────────┴───────┴──────────┴───────────┘          │
│                                                                │
│   Después de 3FN (dividir en tres tablas):                    │
│                                                                │
│   Pedido              LíneaPedido            Artículo         │
│   ┌──────┬───────┐  ┌──────┬────────┐  ┌────────┬────────┐  │
│   │NoPedido│NoCli │  │NoPedido│NoArt  │  │NoArt   │Descrip │  │
│   ├──────┼───────┤  ├──────┼────────┤  ├────────┼────────┤  │
│   │ 1001 │ 1     │  │ 1001 │ A1     │  │ A1     │Laptop  │  │
│   └──────┴───────┘  │ 1001 │ A2     │  │ A2     │Ratón   │  │
│                     └──────┴────────┘  └────────┴────────┘  │
│   Cliente                                                     │
│   ┌───────┬────────┬───────┐                                 │
│   │NoCli  │ Nombre │ Ciudad│                                 │
│   ├───────┼────────┼───────┤                                 │
│   │ 1     │ Mueller│Berlín │                                 │
│   └───────┴────────┴───────┘                                 │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Redundancia** | Almacenamiento múltiple de los mismos datos |
| **Anomalía** | Problemas causados por redundancia |
| **Normalización** | Proceso para minimizar redundancia |
| **1FN** | Valores atómicos |
| **2FN** | Dependencia completa de PK |
| **3FN** | Sin dependencias transitivas |
| **Transitivo** | A → B → C (dependencia indirecta) |

---

## Consejos para el Examen

### Preguntas Comunes del Examen

- ¿Qué es la redundancia de datos?
- Nombrar las anomalías
- Explicar las tres primeras formas normales
- ¿En qué forma normal está esta tabla?

### Importante Recordar

- **Redundancia** = Mismos datos almacenados múltiples veces
- **1FN** = Valores atómicos (sin listas en celdas)
- **2FN** = Todo depende de la PK completa
- **3FN** = Sin dependencias entre no-claves
- Anomalías: Actualización, Inserción, Eliminación

---

## Ejercicios Prácticos

### Ejercicio 1
¿Cuáles son los tres tipos de anomalías y qué significan?

**Solución:**
1. **Anomalía de Actualización:** Al modificar datos redundantes, pueden ocurrir inconsistencias si no se cambian todas las ocurrencias.
2. **Anomalía de Inserción:** No se pueden insertar nuevos datos porque faltan datos dependientes.
3. **Anomalía de Eliminación:** Al eliminar un registro, se pierde involuntariamente otra información.

### Ejercicio 2
¿En qué forma normal está la siguiente tabla?

```
┌──────────┬─────────┬─────────────────────┐
│NoEstudiante│ Nombre │ Cursos              │
├──────────┼─────────┼─────────────────────┤
│ 1        │ Mueller │ Mat, Física, Info   │
│ 2        │ Schmidt │ Mat, Química        │
└──────────┴─────────┴─────────────────────┘
```

**Solución:**
La tabla **NO está en 1FN** porque el atributo "Cursos" contiene múltiples valores (no es atómico). 1FN requiere que cada celda contenga solo un único valor.

### Ejercicio 3
Normalizar la siguiente tabla a 3FN:

```
┌──────┬────────┬──────────┬────────┬──────────┐
│NoPedido│NoCliente│NombreCliente│NoProducto│NombreProducto│
├──────┼────────┼──────────┼────────┼──────────┤
│ 1001 │ K1     │ Mueller  │ P1     │ Laptop   │
│ 1002 │ K1     │ Mueller  │ P2     │ Ratón    │
│ 1003 │ K2     │ Schmidt  │ P1     │ Laptop   │
└──────┴────────┴──────────┴────────┴──────────┘
```

**Solución:**
La tabla tiene redundancia: NombreCliente y NombreProducto se repiten.

**Dividir en 3FN:**

```
Pedido                    Cliente                  Producto
┌──────┬────────┬───────┐ ┌────────┬──────────┐ ┌────────┬──────────┐
│NoPedido│NoCliente│NoProducto│ │NoCliente│NombreCliente│ │NoProducto│NombreProducto│
├──────┼────────┼───────┤ ├────────┼──────────┤ ├────────┼──────────┤
│ 1001 │ K1     │ P1    │ │ K1     │ Mueller  │ │ P1     │ Laptop   │
│ 1002 │ K1     │ P2    │ │ K2     │ Schmidt  │ │ P2     │ Ratón    │
│ 1003 │ K2     │ P1    │ └────────┴──────────┘ └────────┴──────────┘
└──────┴────────┴───────┘
```

---

## Referencias Cruzadas

- [06-04-01 Bases de Datos Relacionales](./06-04-01-relational-databases.md) - Fundamentos
- [06-04-02 ERD](./06-04-02-erd.md) - Modelado de datos
- [02-01-01 Concepto de Calidad](../../02-quality-management/02-01-fundamentals/02-01-01-quality-concept.md) - Calidad de datos
