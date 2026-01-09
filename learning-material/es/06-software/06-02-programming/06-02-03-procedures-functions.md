# Procedimientos y Funciones

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Distinguir entre procedimientos y funciones
- Comprender parámetros y valores de retorno
- Conocer la diferencia entre paso por valor y paso por referencia
- Definir y llamar funciones

---

## Contenido Principal

### ¿Qué son Procedimientos y Funciones?

Los **procedimientos** y **funciones** son bloques de código con nombre que realizan una tarea específica y pueden ser llamados múltiples veces.

```
┌─────────────────────────────────────────────────────────────────┐
│           PROCEDIMIENTOS Y FUNCIONES                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   PROCEDIMIENTO                       FUNCIÓN                   │
│   ┌─────────────────────┐         ┌─────────────────────┐     │
│   │                     │         │                     │     │
│   │  Realiza una tarea  │         │  Realiza una tarea  │     │
│   │                     │         │  Y                  │     │
│   │  Sin valor de       │         │  Retorna un valor   │     │
│   │  retorno            │         │                     │     │
│   │                     │         │                     │     │
│   └─────────────────────┘         └─────────────────────┘     │
│                                                                 │
│   Ejemplo:                       Ejemplo:                       │
│   saludar("Max")                 resultado = sumar(5, 3)       │
│   → Muestra "Hola Max"           → resultado = 8               │
│   → Sin valor de retorno                                        │
│                                                                 │
│   Nota: En muchos lenguajes modernos (Python, Java) se usa     │
│   el término "función" o "método" para ambos.                  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Beneficios de las Funciones

| Beneficio | Descripción |
|-----------|-------------|
| **Reutilización** | Escribir código una vez, usar múltiples veces |
| **Claridad** | Dividir código complejo en partes pequeñas |
| **Mantenibilidad** | Cambios necesarios solo en un lugar |
| **Testeabilidad** | Probar funciones individuales por separado |
| **Principio DRY** | "Don't Repeat Yourself" (No te repitas) |

---

### Estructura de una Función

```
┌────────────────────────────────────────────────────────────────┐
│                   ESTRUCTURA DE FUNCIÓN                         │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   FUNCIÓN nombreFuncion(parametro1, parametro2)                │
│       // sentencias                                            │
│       RETORNAR resultado                                       │
│   FIN FUNCIÓN                                                  │
│                                                                │
│   ┌─────────────────────────────────────────────────────────┐ │
│   │  Nombre         │ Identificador único                   │ │
│   │  Parámetros     │ Valores de entrada (opcional)         │ │
│   │  Cuerpo         │ Sentencias dentro de la función       │ │
│   │  Valor Retorno  │ Resultado de la función (opcional)    │ │
│   └─────────────────────────────────────────────────────────┘ │
│                                                                │
│   Ejemplo Python:                                              │
│   def sumar(a, b):                                             │
│       suma = a + b                                             │
│       return suma                                              │
│                                                                │
│   Ejemplo Java:                                                │
│   public int sumar(int a, int b) {                             │
│       int suma = a + b;                                        │
│       return suma;                                             │
│   }                                                            │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Parámetros

Los **parámetros** son variables que se pasan a la función cuando es llamada.

```
┌────────────────────────────────────────────────────────────────┐
│                       PARÁMETROS                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   DEFINICIÓN:                                                  │
│   ┌─────────────────────────────────────────────────────────┐ │
│   │  FUNCIÓN calcularArea(largo, ancho)                     │ │
│   │      RETORNAR largo * ancho    ▲        ▲               │ │
│   │  FIN FUNCIÓN                   │        │               │ │
│   │                         Parámetros (formales)           │ │
│   └─────────────────────────────────────────────────────────┘ │
│                                                                │
│   LLAMADA:                                                     │
│   ┌─────────────────────────────────────────────────────────┐ │
│   │  resultado = calcularArea(5, 3)                         │ │
│   │                            ▲  ▲                         │ │
│   │                            │  │                         │ │
│   │                    Argumentos (actuales)                │ │
│   │                                                         │ │
│   │  → largo = 5, ancho = 3                                 │ │
│   │  → resultado = 15                                       │ │
│   └─────────────────────────────────────────────────────────┘ │
│                                                                │
│   Parámetros formales: En la definición de la función         │
│   Parámetros actuales (Argumentos): Pasados en la llamada     │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Valor de Retorno

El **valor de retorno** es el resultado que una función devuelve al llamador.

```
┌────────────────────────────────────────────────────────────────┐
│                     VALOR DE RETORNO                            │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Con valor de retorno:                                        │
│                                                                │
│   FUNCIÓN duplicar(numero)                                     │
│       RETORNAR numero * 2                                      │
│   FIN FUNCIÓN                                                  │
│                                                                │
│   resultado = duplicar(5)     // resultado = 10                │
│                                                                │
│   ────────────────────────────────────────────────────────── │
│                                                                │
│   Sin valor de retorno (Procedimiento):                        │
│                                                                │
│   PROCEDIMIENTO mostrarMensaje(texto)                          │
│       salida(texto)                                            │
│       // sin return                                            │
│   FIN PROCEDIMIENTO                                            │
│                                                                │
│   mostrarMensaje("¡Hola!")    // Muestra "¡Hola!"              │
│                               // No retorna valor              │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Paso por Valor vs. Paso por Referencia

```
┌────────────────────────────────────────────────────────────────┐
│           PASO POR VALOR vs. PASO POR REFERENCIA               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   PASO POR VALOR (Call by Value)                               │
│   ┌─────────────────────────────────────────────────────────┐ │
│   │  • Se pasa una copia del valor                          │ │
│   │  • El original permanece sin cambios                    │ │
│   │  • Típico para: tipos de datos primitivos               │ │
│   │                                                         │ │
│   │  x = 5                                                  │ │
│   │  duplicar(x)        // Función trabaja con copia        │ │
│   │  salida(x)          // x sigue siendo 5                 │ │
│   └─────────────────────────────────────────────────────────┘ │
│                                                                │
│   PASO POR REFERENCIA (Call by Reference)                      │
│   ┌─────────────────────────────────────────────────────────┐ │
│   │  • Se pasa referencia al original                       │ │
│   │  • Los cambios afectan al original                      │ │
│   │  • Típico para: objetos, arrays                         │ │
│   │                                                         │ │
│   │  lista = [1, 2, 3]                                      │ │
│   │  agregarElemento(lista, 4)   // Referencia pasada       │ │
│   │  salida(lista)               // [1, 2, 3, 4]            │ │
│   └─────────────────────────────────────────────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Ámbito (Scope)

```
┌────────────────────────────────────────────────────────────────┐
│                       ÁMBITO                                    │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Variable GLOBAL             Variable LOCAL                   │
│   ┌────────────────────┐    ┌────────────────────┐           │
│   │ Válida en todo     │    │ Válida solo dentro │           │
│   │ el programa        │    │ de la función      │           │
│   └────────────────────┘    └────────────────────┘           │
│                                                                │
│   Ejemplo:                                                     │
│                                                                │
│   varGlobal = 100               // Global                      │
│                                                                │
│   FUNCIÓN ejemplo()                                            │
│       varLocal = 50             // Local                       │
│       salida(varGlobal)         // OK: 100                     │
│       salida(varLocal)          // OK: 50                      │
│   FIN FUNCIÓN                                                  │
│                                                                │
│   ejemplo()                                                    │
│   salida(varGlobal)             // OK: 100                     │
│   salida(varLocal)              // ¡ERROR! No visible          │
│                                                                │
│   Buena práctica: ¡Evitar variables globales!                  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Ejemplos en Diferentes Lenguajes

| Aspecto | Python | Java |
|---------|--------|------|
| **Definición** | `def nombre(param):` | `public int nombre(int param) {` |
| **Return** | `return valor` | `return valor;` |
| **Sin valor retorno** | Sin return / `return None` | `void` como tipo retorno |
| **Llamada** | `resultado = nombre(arg)` | `int resultado = nombre(arg);` |

```
# Python
def saludar(nombre):
    return "Hola " + nombre

mensaje = saludar("Max")
print(mensaje)           // "Hola Max"

// Java
public String saludar(String nombre) {
    return "Hola " + nombre;
}

String mensaje = saludar("Max");
System.out.println(mensaje);  // "Hola Max"
```

---

### Recursión

Una **función recursiva** se llama a sí misma.

```
┌────────────────────────────────────────────────────────────────┐
│                       RECURSIÓN                                 │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Ejemplo: Factorial (n!)                                      │
│   5! = 5 × 4 × 3 × 2 × 1 = 120                                │
│                                                                │
│   FUNCIÓN factorial(n)                                         │
│       SI n <= 1 ENTONCES                                       │
│           RETORNAR 1                // Caso base               │
│       SINO                                                     │
│           RETORNAR n * factorial(n - 1)  // Llamada recursiva │
│       FIN SI                                                   │
│   FIN FUNCIÓN                                                  │
│                                                                │
│   Ejecución para factorial(4):                                 │
│                                                                │
│   factorial(4) = 4 * factorial(3)                              │
│                      = 3 * factorial(2)                        │
│                           = 2 * factorial(1)                   │
│                                = 1  (caso base)                │
│                           = 2 * 1 = 2                          │
│                      = 3 * 2 = 6                               │
│                = 4 * 6 = 24                                    │
│                                                                │
│   Importante: ¡Siempre definir un caso base!                   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Función** | Bloque de código con nombre con valor de retorno |
| **Procedimiento** | Bloque de código con nombre sin valor de retorno |
| **Parámetro** | Valores de entrada de una función |
| **Argumento** | Valor concreto en la llamada a función |
| **Valor de Retorno** | Resultado de una función |
| **Ámbito** | Rango de visibilidad de una variable |
| **Recursión** | La función se llama a sí misma |

---

## Consejos para el Examen

### Preguntas Comunes de Examen

- ¿Cuál es la diferencia entre una función y un procedimiento?
- ¿Qué son parámetros y valores de retorno?
- Explica la diferencia entre variables locales y globales

### Importante Recordar

- **Función** = retorna un valor (return)
- **Procedimiento** = sin valor de retorno
- **Parámetro** = entrada a la función
- **Variable local** = válida solo en la función
- **Variable global** = válida en todas partes (¡evitar!)

---

## Ejercicios Prácticos

### Ejercicio 1
¿Cuál es la diferencia entre una función y un procedimiento?

**Solución:**
- **Función:** Una subrutina que calcula un valor y lo retorna al llamador. Ejemplo: `calcularArea(largo, ancho)` retorna el área.
- **Procedimiento:** Una subrutina que realiza una tarea pero no retorna un valor. Ejemplo: `mostrarMensaje(texto)` muestra texto.

### Ejercicio 2
Escribe una función en pseudocódigo que sume dos números y retorne el resultado.

**Solución:**
```
FUNCIÓN sumar(numero1, numero2)
    suma = numero1 + numero2
    RETORNAR suma
FIN FUNCIÓN

// Llamada:
resultado = sumar(5, 3)
salida(resultado)        // 8
```

### Ejercicio 3
¿Qué muestra el siguiente pseudocódigo?

```
x = 10

FUNCIÓN cambiarValor(y)
    y = y + 5
    RETORNAR y
FIN FUNCIÓN

resultado = cambiarValor(x)
salida(x)
salida(resultado)
```

**Solución:**
- `salida(x)` → **10** (x permanece sin cambios, ya que es paso por valor)
- `salida(resultado)` → **15** (valor de retorno de la función)

Con paso por valor, solo se pasa una copia de x. El x original permanece en 10.

---

## Referencias Cruzadas

- [06-02-04 Fundamentos de OOP](./06-02-04-oop-fundamentals.md) - Métodos en clases
- [06-02-05 Pseudocódigo](./06-02-05-pseudocode.md) - Funciones en pseudocódigo
- [06-02-06 Prueba de Escritorio](./06-02-06-desk-check.md) - Rastrear llamadas a funciones
