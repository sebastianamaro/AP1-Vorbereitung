# Variables y Tipos de Datos

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Distinguir entre variables y constantes
- Conocer los tipos de datos más importantes
- Comprender la conversión de tipos
- Declarar e inicializar variables

---

## Contenido Principal

### ¿Qué es una Variable?

Una **variable** es una ubicación de almacenamiento con nombre en memoria que contiene un valor y cuyo contenido puede cambiar.

```
┌─────────────────────────────────────────────────────────────────┐
│                     VARIABLE EN MEMORIA                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Código fuente:                       Memoria principal:       │
│                                                                 │
│   edad = 25                            ┌─────────────────┐     │
│                                        │ Dirección: 0x1000│     │
│      │                                 ├─────────────────┤     │
│      │    Nombre: "edad"       ───────►│     25          │     │
│      │    Tipo: Integer                │                 │     │
│      │    Valor: 25                    └─────────────────┘     │
│      ▼                                                          │
│                                                                 │
│   edad = 26   (El valor cambia)        ┌─────────────────┐     │
│                                        │ Dirección: 0x1000│     │
│                              ─────────►├─────────────────┤     │
│                                        │     26          │     │
│                                        └─────────────────┘     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Variable vs. Constante

| Aspecto | Variable | Constante |
|---------|----------|-----------|
| **Valor modificable** | Sí | No |
| **Ejemplo Python** | `precio = 9.99` | `PI = 3.14159` |
| **Ejemplo Java** | `int precio = 10;` | `final double PI = 3.14159;` |
| **Uso** | Datos modificables | Valores fijos |

**Convención:** Las constantes a menudo se escriben en MAYÚSCULAS.

---

### Tipos de Datos Básicos

```
┌────────────────────────────────────────────────────────────────┐
│                      TIPOS DE DATOS                             │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│                      TIPOS DE DATOS                             │
│                          │                                     │
│       ┌──────────────────┼──────────────────┐                 │
│       │                  │                  │                 │
│   TIPOS               TIPOS             TIPOS                 │
│   PRIMITIVOS          COMPUESTOS        ESPECIALES            │
│                                                                │
│   • Integer          • Arrays           • null/None          │
│   • Float/Double     • Strings*         • void               │
│   • Boolean          • Listas           • Objetos            │
│   • Char             • Diccionarios                          │
│                                                                │
│   *Los Strings pueden considerarse primitivos o compuestos    │
│    dependiendo del lenguaje                                   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Tipos de Datos Importantes en Detalle

#### Integer (Número Entero)

| Tipo | Tamaño | Rango de Valores | Ejemplo |
|------|--------|------------------|---------|
| **byte** | 8 Bit | -128 a 127 | `byte b = 100;` |
| **short** | 16 Bit | -32,768 a 32,767 | `short s = 30000;` |
| **int** | 32 Bit | aprox. -2.1 mil millones a 2.1 mil millones | `int i = 42;` |
| **long** | 64 Bit | Rango muy grande | `long l = 9999999999L;` |

#### Número de Punto Flotante (Float/Double)

| Tipo | Tamaño | Precisión | Ejemplo |
|------|--------|-----------|---------|
| **float** | 32 Bit | aprox. 7 dígitos | `float f = 3.14f;` |
| **double** | 64 Bit | aprox. 15 dígitos | `double d = 3.14159265;` |

#### Boolean (Valor de Verdad)

| Valor | Significado | Ejemplo |
|-------|-------------|---------|
| **true** | Verdadero | `boolean activo = true;` |
| **false** | Falso | `boolean activo = false;` |

#### Char (Carácter)

Un solo carácter entre comillas simples.

```
char letra = 'A';
char digito = '5';
char especial = '@';
```

#### String (Cadena de Caracteres)

Una secuencia de caracteres entre comillas dobles.

```
String nombre = "Juan García";
String vacio = "";
String oracion = "¡Hola Mundo!";
```

---

### Resumen de Tipos de Datos

```
┌────────────────────────────────────────────────────────────────┐
│                    RESUMEN DE TIPOS DE DATOS                    │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Tipo de Dato   │ Valores de Ejemplo    │ Almacenamiento     │
│  ───────────────┼───────────────────────┼──────────────────  │
│   Integer       │ 42, -7, 0, 1000       │ 4 Byte (int)       │
│   Float/Double  │ 3.14, -0.5, 2.0       │ 4/8 Byte           │
│   Boolean       │ true, false           │ 1 Bit (teórico)    │
│   Char          │ 'A', '5', '@'         │ 2 Byte (Unicode)   │
│   String        │ "Hola", "Test123"     │ variable           │
│                                                                │
│   Ayuda Memoria:                                               │
│   • Integer  = Números enteros (sin decimal)                   │
│   • Float    = Números decimales (con punto)                   │
│   • Boolean  = Verdadero o Falso                               │
│   • Char     = UN carácter                                     │
│   • String   = MÚLTIPLES caracteres                            │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Declaración e Inicialización

```
┌────────────────────────────────────────────────────────────────┐
│            DECLARACIÓN E INICIALIZACIÓN                         │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   DECLARACIÓN:                                                 │
│   La variable se crea, pero aún no tiene valor asignado        │
│                                                                │
│       int edad;           // Java: solo declaración            │
│                                                                │
│   INICIALIZACIÓN:                                              │
│   La variable recibe un valor inicial                          │
│                                                                │
│       edad = 25;          // Asignación de valor               │
│                                                                │
│   DECLARACIÓN + INICIALIZACIÓN (común):                        │
│                                                                │
│       int edad = 25;      // Java                              │
│       edad = 25           # Python (no se necesita tipo)       │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Tipado

| Tipo | Descripción | Lenguajes |
|------|-------------|-----------|
| **Estático** | El tipo se fija en la declaración | Java, C#, C++ |
| **Dinámico** | El tipo se determina en tiempo de ejecución | Python, JavaScript |
| **Fuerte** | Verificación de tipos estricta | Java, Python |
| **Débil** | Conversión de tipos flexible | JavaScript, PHP |

```
// Tipado estático (Java):
int numero = 42;
String texto = "Hola";

# Tipado dinámico (Python):
numero = 42           # numero es Integer
numero = "Hola"       # numero ahora es String (¡permitido!)
```

---

### Conversión de Tipos (Casting)

```
┌────────────────────────────────────────────────────────────────┐
│                   CONVERSIÓN DE TIPOS                           │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   IMPLÍCITA (automática)           EXPLÍCITA (manual)          │
│   Tipo Pequeño → Tipo Grande       Tipo Grande → Tipo Pequeño  │
│                                                                │
│   int a = 100;                   double x = 9.7;               │
│   double b = a;  // 100.0        int y = (int) x;  // 9        │
│                                                                │
│   ┌────────────────────────────────────────────────────┐      │
│   │  byte → short → int → long → float → double        │      │
│   │        ────────────────────────────────────►       │      │
│   │              IMPLÍCITA (sin pérdida de datos)      │      │
│   │                                                    │      │
│   │        ◄────────────────────────────────────       │      │
│   │        EXPLÍCITA (¡posible pérdida de datos!)      │      │
│   └────────────────────────────────────────────────────┘      │
│                                                                │
│   String a Número (Java):                                      │
│   String s = "42";                                             │
│   int z = Integer.parseInt(s);     // z = 42                   │
│                                                                │
│   Número a String (Java):                                      │
│   int z = 42;                                                  │
│   String s = String.valueOf(z);    // s = "42"                 │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Convenciones de Nombres

| Regla | Ejemplo | Incorrecto |
|-------|---------|------------|
| Letra al inicio | `edad`, `_temp` | `1valor` |
| Sin espacios | `valorMaximo` | `valor maximo` |
| Sin caracteres especiales | `contador` | `contador#` |
| camelCase (común) | `contadorMaximo` | `contadormaximo` |
| Nombres significativos | `numeroCliente` | `x`, `temp` |

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Variable** | Ubicación de almacenamiento con nombre y valor modificable |
| **Constante** | Variable con valor inmodificable |
| **Tipo de Dato** | Tipo de datos (Integer, String, etc.) |
| **Declaración** | Crear una variable |
| **Inicialización** | Primera asignación de un valor |
| **Casting** | Conversión de tipos |
| **Tipos Primitivos** | Tipos de datos básicos |

---

## Consejos para el Examen

### Preguntas Comunes de Examen

- ¿Qué tipo de dato tiene el valor "42"?
- ¿Diferencia entre Integer y Float?
- ¿Qué es una constante?
- ¿Qué significa declaración vs. inicialización?

### Importante Recordar

- **Integer** = Números enteros (42, -7)
- **Float/Double** = Números decimales (3.14)
- **Boolean** = true/false
- **String** = Texto entre comillas
- **Char** = UN solo carácter

---

## Ejercicios Prácticos

### Ejercicio 1
¿Qué tipo de dato usarías para los siguientes valores?
- Edad de una persona
- Precio de un producto
- Nombre de pila
- ¿Está activo el cliente?

**Solución:**
- Edad de una persona: **Integer** (número entero)
- Precio de un producto: **Double/Float** (número decimal)
- Nombre de pila: **String** (cadena de caracteres)
- ¿Está activo el cliente?: **Boolean** (true/false)

### Ejercicio 2
¿Cuál es la diferencia entre una variable y una constante?

**Solución:**
- **Variable:** Una ubicación de almacenamiento cuyo valor puede cambiar durante la ejecución del programa. Ejemplo: `int contador = 0;` → después: `contador = 10;`
- **Constante:** Una ubicación de almacenamiento cuyo valor no puede cambiar después de la inicialización. Ejemplo: `final double PI = 3.14159;`

### Ejercicio 3
Dado el siguiente pseudocódigo. Determina el tipo de dato de cada variable:

```
nombre = "García"
edad = 42
salario = 3500.50
estaCasado = true
inicialLetra = 'G'
```

**Solución:**
| Variable | Tipo de Dato | Razón |
|----------|--------------|-------|
| nombre | String | Texto entre comillas |
| edad | Integer | Número entero |
| salario | Double/Float | Número decimal |
| estaCasado | Boolean | Valor de verdad |
| inicialLetra | Char | Un solo carácter |

---

## Referencias Cruzadas

- [06-02-02 Estructuras de Control](./06-02-02-control-structures.md) - Uso en condiciones
- [06-02-05 Pseudocódigo](./06-02-05-pseudocode.md) - Representación en pseudocódigo
- [05-01-01 Bits y Bytes](../../05-it-systems/05-01-fundamentals/05-01-01-bits-bytes-number-systems.md) - Tamaños de almacenamiento
