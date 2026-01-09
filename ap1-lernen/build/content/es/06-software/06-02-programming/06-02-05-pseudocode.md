# Pseudocódigo

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Leer y comprender pseudocódigo
- Escribir algoritmos simples en pseudocódigo
- Representar estructuras de control en pseudocódigo
- Traducir pseudocódigo a código real

---

## Contenido Principal

### ¿Qué es el Pseudocódigo?

El **pseudocódigo** es una descripción informal e independiente del lenguaje de un algoritmo que parece código de programa pero está formulado en lenguaje natural.

```
┌─────────────────────────────────────────────────────────────────┐
│                      PSEUDOCÓDIGO                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Características:                                               │
│   • Independiente del lenguaje (no atado a Python, Java, etc.) │
│   • Legible por humanos                                         │
│   • Sin sintaxis estricta                                       │
│   • Enfoque en la lógica, no en detalles                       │
│   • Bueno para planificación y documentación                   │
│                                                                 │
│   Ejemplo:                                                       │
│   ┌─────────────────────────────────────────────────────────┐ │
│   │  ALGORITMO Encontrar Máximo                              │ │
│   │                                                          │ │
│   │  ENTRADA: Lista de números                               │ │
│   │  SALIDA: Número más grande                               │ │
│   │                                                          │ │
│   │  max = primer elemento de lista                          │ │
│   │  PARA CADA elemento EN lista                             │ │
│   │      SI elemento > max ENTONCES                          │ │
│   │          max = elemento                                  │ │
│   │      FIN SI                                              │ │
│   │  FIN PARA                                                │ │
│   │  RETORNAR max                                            │ │
│   └─────────────────────────────────────────────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Elementos Básicos del Pseudocódigo

#### Variables y Asignación

```
┌────────────────────────────────────────────────────────────────┐
│                VARIABLES Y ASIGNACIÓN                           │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Declaración/Asignación:                                      │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   contador = 0                                          │ │
│   │   nombre = "Max"                                        │ │
│   │   estaActivo = VERDADERO                                │ │
│   │   precio = 19.99                                        │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Cálculo:                                                     │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   suma = a + b                                          │ │
│   │   diferencia = a - b                                    │ │
│   │   producto = a * b                                      │ │
│   │   cociente = a / b                                      │ │
│   │   resto = a MOD b          // Módulo (resto)            │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Incremento/Decremento:                                       │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   contador = contador + 1   // aumentar en 1            │ │
│   │   contador = contador - 1   // disminuir en 1           │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

#### Entrada y Salida

```
┌────────────────────────────────────────────────────────────────┐
│                  ENTRADA Y SALIDA                               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Entrada:                                                     │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   ENTRADA nombre                                        │ │
│   │   LEER numero                                           │ │
│   │   nombre = entrada("Por favor ingrese nombre:")         │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Salida:                                                      │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   SALIDA "Hola Mundo"                                   │ │
│   │   SALIDA "El resultado es: " + resultado                │ │
│   │   IMPRIMIR suma                                         │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

#### Sentencias Condicionales (Selección)

```
┌────────────────────────────────────────────────────────────────┐
│                   SENTENCIAS CONDICIONALES                      │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Condición simple:                                            │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   SI edad >= 18 ENTONCES                                │ │
│   │       SALIDA "Adulto"                                   │ │
│   │   FIN SI                                                │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Si-Sino:                                                     │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   SI nota <= 4.0 ENTONCES                               │ │
│   │       SALIDA "Aprobado"                                 │ │
│   │   SINO                                                  │ │
│   │       SALIDA "Suspendido"                               │ │
│   │   FIN SI                                                │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Condiciones múltiples:                                       │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   SI nota <= 1.5 ENTONCES                               │ │
│   │       SALIDA "Excelente"                                │ │
│   │   SINO SI nota <= 2.5 ENTONCES                          │ │
│   │       SALIDA "Bien"                                     │ │
│   │   SINO SI nota <= 3.5 ENTONCES                          │ │
│   │       SALIDA "Satisfactorio"                            │ │
│   │   SINO                                                  │ │
│   │       SALIDA "No bueno"                                 │ │
│   │   FIN SI                                                │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

#### Bucles (Iteración)

```
┌────────────────────────────────────────────────────────────────┐
│                       BUCLES                                    │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Bucle For (Controlado por contador):                         │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   PARA i DESDE 1 HASTA 10                               │ │
│   │       SALIDA i                                          │ │
│   │   FIN PARA                                              │ │
│   │                                                         │ │
│   │   PARA CADA elemento EN lista                           │ │
│   │       SALIDA elemento                                   │ │
│   │   FIN PARA                                              │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Bucle While (Pre-prueba):                                    │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   MIENTRAS condicion                                    │ │
│   │       // sentencias                                     │ │
│   │   FIN MIENTRAS                                          │ │
│   │                                                         │ │
│   │   Ejemplo:                                              │ │
│   │   contador = 1                                          │ │
│   │   MIENTRAS contador <= 5                                │ │
│   │       SALIDA contador                                   │ │
│   │       contador = contador + 1                           │ │
│   │   FIN MIENTRAS                                          │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Bucle Do-While (Post-prueba):                                │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   REPETIR                                               │ │
│   │       entrada = LEER()                                  │ │
│   │   HASTA QUE entrada == "salir"                          │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

#### Funciones

```
┌────────────────────────────────────────────────────────────────┐
│                      FUNCIONES                                  │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Definición de función:                                       │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   FUNCIÓN sumar(a, b)                                   │ │
│   │       suma = a + b                                      │ │
│   │       RETORNAR suma                                     │ │
│   │   FIN FUNCIÓN                                           │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Llamada de función:                                          │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   resultado = sumar(5, 3)    // resultado = 8           │ │
│   │   SALIDA resultado                                      │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Procedimiento (sin valor de retorno):                        │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   PROCEDIMIENTO saludar(nombre)                         │ │
│   │       SALIDA "Hola " + nombre                           │ │
│   │   FIN PROCEDIMIENTO                                     │ │
│   │                                                         │ │
│   │   saludar("Max")   // Salida: Hola Max                  │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Operadores Lógicos

| Operador | Significado | Ejemplo |
|----------|-------------|---------|
| `AND` | Ambos verdaderos | `a > 0 AND b > 0` |
| `OR` | Al menos uno verdadero | `a > 0 OR b > 0` |
| `NOT` | Negación | `NOT terminado` |

---

### Operadores de Comparación

| Operador | Significado |
|----------|-------------|
| `=` o `==` | Igual |
| `<>` o `!=` | Distinto |
| `<` | Menor que |
| `>` | Mayor que |
| `<=` | Menor o igual |
| `>=` | Mayor o igual |

---

### Ejemplo: Algoritmo Completo

```
┌────────────────────────────────────────────────────────────────┐
│            EJEMPLO: CALCULAR PROMEDIO                           │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   ALGORITMO Calcular Promedio                                  │
│                                                                │
│   // Entrada                                                   │
│   SALIDA "¿Cuántos números?"                                   │
│   ENTRADA cantidad                                             │
│                                                                │
│   // Inicialización                                            │
│   suma = 0                                                     │
│                                                                │
│   // Leer y sumar números                                      │
│   PARA i DESDE 1 HASTA cantidad                                │
│       SALIDA "Ingrese número " + i + ":"                       │
│       ENTRADA numero                                           │
│       suma = suma + numero                                     │
│   FIN PARA                                                     │
│                                                                │
│   // Calcular promedio                                         │
│   SI cantidad > 0 ENTONCES                                     │
│       promedio = suma / cantidad                               │
│       SALIDA "Promedio: " + promedio                           │
│   SINO                                                         │
│       SALIDA "No se ingresaron números"                        │
│   FIN SI                                                       │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Pseudocódigo a Código Real

| Pseudocódigo | Python | Java |
|--------------|--------|------|
| `SI ... ENTONCES` | `if ...:` | `if (...) {` |
| `SINO` | `else:` | `} else {` |
| `SINO SI` | `elif ...:` | `} else if (...) {` |
| `FIN SI` | (termina la indentación) | `}` |
| `PARA i DESDE 1 HASTA 5` | `for i in range(1,6):` | `for(int i=1; i<=5; i++)` |
| `MIENTRAS ...` | `while ...:` | `while (...) {` |
| `SALIDA` | `print(...)` | `System.out.println(...)` |
| `ENTRADA` | `input(...)` | `Scanner.nextLine()` |
| `RETORNAR` | `return` | `return` |

---

### Consejos para Pseudocódigo

```
┌────────────────────────────────────────────────────────────────┐
│                  CONSEJOS PARA PSEUDOCÓDIGO                     │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   HACER:                                                       │
│   ✓ Usar términos claros y comprensibles                       │
│   ✓ Usar indentación para estructura                           │
│   ✓ Comentarios para partes complejas                          │
│   ✓ Usar FIN para bloques (FIN SI, FIN PARA)                   │
│   ✓ Mantenerse consistente (siempre usar mismas palabras clave)│
│                                                                │
│   NO HACER:                                                    │
│   ✗ Detalles de sintaxis de un lenguaje (;, {}, etc.)          │
│   ✗ Ser muy vago ("hacer algo")                                │
│   ✗ Funciones específicas (println, Scanner)                   │
│   ✗ Declaraciones de tipo (generalmente no necesarias)         │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Pseudocódigo** | Descripción informal de algoritmo |
| **Algoritmo** | Instrucciones paso a paso para resolver problemas |
| **Secuencia** | Sentencias una tras otra |
| **Selección** | Bifurcación (SI-ENTONCES) |
| **Iteración** | Repetición (bucle) |

---

## Consejos para el Examen

### Preguntas Comunes de Examen

- Dado pseudocódigo - ¿cuál es la salida?
- Escribe pseudocódigo para un algoritmo simple
- ¿Qué estructuras de control se usan?

### Importante Recordar

- El pseudocódigo es **independiente del lenguaje**
- Enfoque en la **lógica**, no en la sintaxis
- Siempre usar **FIN** para bloques
- La **indentación** muestra la estructura
- Común en exámenes: Entender código y determinar resultado

---

## Ejercicios Prácticos

### Ejercicio 1
¿Qué muestra el siguiente pseudocódigo?

```
a = 5
b = 3
c = a + b
SI c > 7 ENTONCES
    SALIDA "Grande"
SINO
    SALIDA "Pequeño"
FIN SI
```

**Solución:**
- a = 5, b = 3
- c = 5 + 3 = 8
- 8 > 7 es VERDADERO
- **Salida: "Grande"**

### Ejercicio 2
Escribe pseudocódigo que muestre los números del 1 al 10 y calcule la suma.

**Solución:**
```
suma = 0
PARA i DESDE 1 HASTA 10
    SALIDA i
    suma = suma + i
FIN PARA
SALIDA "Suma: " + suma
```
Salida: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, Suma: 55

### Ejercicio 3
Analiza el siguiente pseudocódigo. ¿Cuál es el resultado?

```
FUNCIÓN factorial(n)
    SI n <= 1 ENTONCES
        RETORNAR 1
    SINO
        RETORNAR n * factorial(n - 1)
    FIN SI
FIN FUNCIÓN

resultado = factorial(4)
SALIDA resultado
```

**Solución:**
- factorial(4) = 4 * factorial(3)
- factorial(3) = 3 * factorial(2)
- factorial(2) = 2 * factorial(1)
- factorial(1) = 1 (caso base)

Hacia atrás: 2 * 1 = 2, 3 * 2 = 6, 4 * 6 = 24

**Salida: 24**

---

## Referencias Cruzadas

- [06-02-02 Estructuras de Control](./06-02-02-control-structures.md) - Explicación detallada
- [06-02-06 Prueba de Escritorio](./06-02-06-desk-check.md) - Analizar pseudocódigo
- [06-02-03 Procedimientos y Funciones](./06-02-03-procedures-functions.md) - Funciones en pseudocódigo
