# Diagrama de Clases UML

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Leer y comprender diagramas de clases UML
- Conocer la notación para clases, atributos y métodos
- Representar relaciones entre clases
- Comprender visibilidades y multiplicidades

---

## Contenido Principal

### ¿Qué es un Diagrama de Clases?

Un **diagrama de clases** es un diagrama UML que muestra la estructura estática de un sistema - qué clases existen y cómo están conectadas.

```
┌─────────────────────────────────────────────────────────────────┐
│                  DIAGRAMA DE CLASES UML                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Propósito:                                                    │
│   • Visualizar estructura de un sistema                         │
│   • Mostrar clases y sus relaciones                            │
│   • Base para implementación                                    │
│   • Documentación para desarrolladores                          │
│                                                                 │
│   Muestra:                                                      │
│   • Clases con atributos y métodos                             │
│   • Relaciones entre clases                                     │
│   • Visibilidades (public, private)                            │
│   • Cardinalidades (cuántos objetos)                           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Representación de una Clase

```
┌────────────────────────────────────────────────────────────────┐
│                   NOTACIÓN DE CLASE                             │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   ┌──────────────────────────────────────┐                    │
│   │          <<Estereotipo>>              │  ← Opcional        │
│   │            NombreClase                │  ← Requerido       │
│   ├──────────────────────────────────────┤                    │
│   │ - atributo1: TipoDato                 │                    │
│   │ - atributo2: TipoDato = ValorDefecto  │  ← Atributos       │
│   │ # atributo3: TipoDato                 │                    │
│   ├──────────────────────────────────────┤                    │
│   │ + metodo1(): TipoRetorno              │                    │
│   │ + metodo2(param: Tipo): TipoRetorno   │  ← Métodos         │
│   │ - metodoPrivado(): void               │                    │
│   └──────────────────────────────────────┘                    │
│                                                                │
│   Las tres secciones:                                          │
│   1. Nombre de clase (arriba)                                  │
│   2. Atributos (medio)                                         │
│   3. Métodos (abajo)                                           │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Ejemplo: Clase Cliente

```
┌────────────────────────────────────────────────────────────────┐
│                   EJEMPLO: CLASE CLIENTE                        │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   ┌────────────────────────────────────┐                      │
│   │              Cliente               │                      │
│   ├────────────────────────────────────┤                      │
│   │ - numCliente: int                  │                      │
│   │ - nombre: String                   │                      │
│   │ - email: String                    │                      │
│   │ - fechaNacimiento: Date            │                      │
│   │ - activo: boolean = true           │                      │
│   ├────────────────────────────────────┤                      │
│   │ + getNumCliente(): int             │                      │
│   │ + getNombre(): String              │                      │
│   │ + setNombre(nombre: String): void  │                      │
│   │ + calcularEdad(): int              │                      │
│   │ - validarEmail(email: String):     │                      │
│   │   boolean                          │                      │
│   └────────────────────────────────────┘                      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Visibilidades (Modificadores de Acceso)

```
┌────────────────────────────────────────────────────────────────┐
│                    VISIBILIDADES                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Símbolo │ Significado  │ Acceso desde                       │
│   ────────┼──────────────┼────────────────────────────────────│
│     +     │ public       │ En todas partes (todas las clases) │
│     -     │ private      │ Solo dentro de la propia clase     │
│     #     │ protected    │ Propia clase + subclases           │
│     ~     │ package      │ Dentro del mismo paquete           │
│                                                                │
│   Típico:                                                      │
│   • Atributos usualmente private (-)                           │
│   • Métodos usualmente public (+)                              │
│   • Getter/Setter public (+)                                   │
│   • Métodos auxiliares private (-)                             │
│                                                                │
│   Ejemplo:                                                     │
│   ┌────────────────────────────────┐                         │
│   │          Cuenta                │                         │
│   ├────────────────────────────────┤                         │
│   │ - saldo: double                │  ← private              │
│   │ - pin: String                  │  ← private              │
│   ├────────────────────────────────┤                         │
│   │ + getSaldo(): double           │  ← public               │
│   │ + depositar(monto: double)     │  ← public               │
│   │ - verificarPin(pin: String): bool │  ← private           │
│   └────────────────────────────────┘                         │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Relaciones Entre Clases

```
┌────────────────────────────────────────────────────────────────┐
│                    TIPOS DE RELACIÓN                            │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   1. ASOCIACIÓN (conoce / usa)                                 │
│   ┌──────────┐                    ┌──────────┐               │
│   │  Cliente │────────────────────│  Pedido  │               │
│   └──────────┘                    └──────────┘               │
│   Un cliente tiene pedidos                                     │
│                                                                │
│   2. AGREGACIÓN (tiene / consiste en - débil)                  │
│   ┌──────────┐         ◇─────────┌──────────┐               │
│   │  Equipo  │◇────────          │ Empleado │               │
│   └──────────┘                   └──────────┘               │
│   El equipo tiene empleados (empleados pueden existir sin equipo)│
│   Diamante vacío en el "todo"                                  │
│                                                                │
│   3. COMPOSICIÓN (consiste en - fuerte, vive y muere)          │
│   ┌──────────┐         ♦─────────┌──────────┐               │
│   │  Factura │♦────────          │  Línea   │               │
│   └──────────┘                   └──────────┘               │
│   La factura tiene líneas (línea sin factura no tiene sentido) │
│   Diamante relleno en el "todo"                                │
│                                                                │
│   4. ASOCIACIÓN DIRIGIDA (solo una dirección)                  │
│   ┌──────────┐                    ┌──────────┐               │
│   │  Persona │───────────────────►│ Dirección│               │
│   └──────────┘                    └──────────┘               │
│   Persona conoce dirección, pero dirección no conoce persona   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Multiplicidades (Cardinalidades)

```
┌────────────────────────────────────────────────────────────────┐
│                   MULTIPLICIDADES                               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Notación │ Significado                                       │
│   ─────────┼──────────────────────────────────────────────────│
│      1     │ Exactamente uno                                   │
│     0..1   │ Cero o uno (opcional)                             │
│      *     │ Cualquier número (cero a ilimitado)               │
│     1..*   │ Uno o más (al menos uno)                          │
│     0..*   │ Cero o más (igual que *)                          │
│     n..m   │ Entre n y m                                       │
│                                                                │
│   Ejemplos:                                                    │
│                                                                │
│   ┌──────────┐  1        *  ┌──────────┐                    │
│   │  Cliente │──────────────│  Pedido  │                    │
│   └──────────┘              └──────────┘                    │
│   Un cliente tiene cualquier número de pedidos                 │
│   Un pedido pertenece a exactamente un cliente                 │
│                                                                │
│   ┌──────────┐  1       1..* ┌──────────┐                    │
│   │  Factura │♦──────────────│  Línea   │                    │
│   └──────────┘               └──────────┘                    │
│   Una factura tiene al menos una línea                         │
│   Una línea pertenece a exactamente una factura                │
│                                                                │
│   ┌──────────┐  0..1    0..1 ┌──────────┐                    │
│   │  Persona │──────────────│  Cónyuge │                    │
│   └──────────┘               └──────────┘                    │
│   Una persona tiene ningún o un cónyuge                        │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Ejemplo Completo: Tienda Online

```
┌────────────────────────────────────────────────────────────────┐
│              EJEMPLO: TIENDA ONLINE                             │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   ┌────────────────────┐    1        *   ┌─────────────────┐ │
│   │      Cliente       │─────────────────│     Pedido      │ │
│   ├────────────────────┤                 ├─────────────────┤ │
│   │ - numCliente: int  │                 │ - numPedido: int│ │
│   │ - nombre: String   │                 │ - fecha: Date   │ │
│   │ - email: String    │                 │ - estado: String│ │
│   ├────────────────────┤                 ├─────────────────┤ │
│   │ + realizarPedido() │                 │ + cancelar()    │ │
│   │ + getPedidos()     │                 │ + calcularTotal │ │
│   └────────────────────┘                 └────────┬────────┘ │
│                                                   │          │
│                                                   │ 1        │
│                                                   │          │
│                                                   ♦          │
│                                               1..*│          │
│                                          ┌────────┴────────┐ │
│                                          │   LíneaPedido   │ │
│                                          ├─────────────────┤ │
│   ┌────────────────────┐    *       1    │ - cantidad: int │ │
│   │      Producto      │◄────────────────│ - precioUnit:   │ │
│   ├────────────────────┤                 │   double        │ │
│   │ - numProducto: int │                 ├─────────────────┤ │
│   │ - nombre: String   │                 │ + calcularSuma  │ │
│   │ - precio: double   │                 │   (): double    │ │
│   │ - stock: int       │                 └─────────────────┘ │
│   ├────────────────────┤                                     │
│   │ + getPrecio(): double                                    │
│   │ + estaDisponible():                                      │
│   │   boolean          │                                     │
│   └────────────────────┘                                     │
│                                                                │
│   Dirección de lectura:                                        │
│   • Un cliente tiene muchos (*) pedidos                        │
│   • Un pedido pertenece a exactamente un (1) cliente           │
│   • Un pedido tiene 1 o más (1..*) líneas de pedido            │
│   • Una línea de pedido se refiere a exactamente un (1) producto│
│   • Un producto puede aparecer en muchas (*) líneas de pedido  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Resumen de Notación

| Elemento | Notación | Ejemplo |
|----------|----------|---------|
| **Clase** | Rectángulo con 3 secciones | Ver arriba |
| **Atributo** | `visibilidad nombre: Tipo` | `- edad: int` |
| **Método** | `visibilidad nombre(param): Retorno` | `+ getEdad(): int` |
| **Asociación** | Línea | ─────────── |
| **Agregación** | Diamante vacío | ◇────────── |
| **Composición** | Diamante relleno | ♦────────── |
| **Dirigida** | Flecha | ─────────►  |

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Diagrama de Clases** | Diagrama UML para estructura del sistema |
| **Atributo** | Propiedad/elemento de datos de una clase |
| **Método** | Función/operación de una clase |
| **Asociación** | Relación entre clases |
| **Agregación** | Relación "tiene" (débil) |
| **Composición** | Relación "consiste en" (fuerte) |
| **Multiplicidad** | Número de objetos participantes |

---

## Consejos para el Examen

### Preguntas Comunes de Examen

- Lee el diagrama de clases y explica las relaciones
- ¿Qué multiplicidad existe entre las clases?
- ¿Qué significa el diamante (agregación/composición)?

### Importante Recordar

- **+** = public, **-** = private, **#** = protected
- **◇** = Agregación (partes existen independientemente)
- **♦** = Composición (partes viven y mueren con el todo)
- **1** = exactamente uno, ***** = cualquier número
- **1..*** = al menos uno

---

## Ejercicios Prácticos

### Ejercicio 1
Explica la diferencia entre agregación y composición usando un ejemplo.

**Solución:**
- **Agregación (◇):** Relación "tiene" donde las partes pueden existir sin el todo.
  - Ejemplo: Equipo ◇── Empleado. Si el equipo se disuelve, los empleados continúan existiendo.

- **Composición (♦):** Relación "consiste en" donde las partes no pueden existir sin el todo.
  - Ejemplo: Factura ♦── Línea. Si la factura se elimina, las líneas también se eliminan.

### Ejercicio 2
¿Qué significa la siguiente multiplicidad?

```
┌──────────┐  1        0..*  ┌──────────┐
│  Curso   │─────────────────│Estudiante│
└──────────┘                 └──────────┘
```

**Solución:**
- Un curso es atendido por cualquier número (0..*) de estudiantes (puede estar vacío)
- Un estudiante asiste a exactamente un (1) curso

Esto significa: Un estudiante siempre está asignado a exactamente un curso, pero un curso puede estar vacío.

### Ejercicio 3
Crea un diagrama de clases simple para una biblioteca con: Libro, Autor, Préstamo, Miembro.

**Solución:**
```
┌────────────────┐  *       1..* ┌────────────────┐
│     Libro      │───────────────│     Autor      │
├────────────────┤               ├────────────────┤
│ - isbn: String │               │ - nombre: String│
│ - titulo: String│              │ - añoNac: int   │
├────────────────┤               ├────────────────┤
│ + getTitulo()  │               │ + getNombre()  │
└───────┬────────┘               └────────────────┘
        │ 1
        │
        ♦
    0..*│
┌───────┴────────┐               ┌────────────────┐
│    Préstamo    │  *         1  │    Miembro     │
├────────────────┤───────────────├────────────────┤
│ - fechaPrest   │               │ - numMiembro   │
│ - fechaDevol   │               │ - nombre: String│
├────────────────┤               ├────────────────┤
│ + prorrogar()  │               │ + prestar()    │
└────────────────┘               └────────────────┘
```

---

## Referencias Cruzadas

- [06-02-04 Fundamentos de OOP](../06-02-programming/06-02-04-oop-fundamentals.md) - Clases y objetos
- [06-03-02 Diagrama de Casos de Uso](./06-03-02-use-case-diagram.md) - Diagrama de comportamiento
- [06-04-02 ERD](../06-04-databases/06-04-02-erd.md) - Modelado de datos
