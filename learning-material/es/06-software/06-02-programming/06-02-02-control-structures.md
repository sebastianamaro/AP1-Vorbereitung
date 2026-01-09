# Estructuras de Control

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Distinguir entre secuencia, selección e iteración
- Comprender estructuras if-else
- Conocer diferentes tipos de bucles
- Comprender sentencias switch/case

---

## Contenido Principal

### Estructuras de Control Básicas

```
┌─────────────────────────────────────────────────────────────────┐
│                   ESTRUCTURAS DE CONTROL                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                    ESTRUCTURAS DE CONTROL                        │
│                           │                                     │
│          ┌────────────────┼────────────────┐                   │
│          │                │                │                   │
│    ┌─────▼─────┐    ┌─────▼─────┐    ┌─────▼─────┐            │
│    │ SECUENCIA │    │ SELECCIÓN │    │ ITERACIÓN │            │
│    │           │    │           │    │           │            │
│    │ Sentencia │    │ Condición │    │ Bucles    │            │
│    │ tras      │    │ If-Else   │    │ For       │            │
│    │ Sentencia │    │ Switch    │    │ While     │            │
│    └───────────┘    └───────────┘    │ Do-While  │            │
│                                       └───────────┘            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Secuencia

**Secuencia** = Las sentencias se ejecutan una tras otra (secuencialmente).

```
┌────────────────────────────────────────────────────────────────┐
│                        SECUENCIA                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│     ┌──────────────┐                                          │
│     │ Sentencia 1  │    // a = 5                              │
│     └──────┬───────┘                                          │
│            │                                                   │
│            ▼                                                   │
│     ┌──────────────┐                                          │
│     │ Sentencia 2  │    // b = 10                             │
│     └──────┬───────┘                                          │
│            │                                                   │
│            ▼                                                   │
│     ┌──────────────┐                                          │
│     │ Sentencia 3  │    // c = a + b                          │
│     └──────────────┘                                          │
│                                                                │
│   Pseudocódigo:                                                │
│   a = 5                                                        │
│   b = 10                                                       │
│   c = a + b        // c = 15                                   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Selección (Bifurcación)

#### Sentencia If (Simple)

```
┌────────────────────────────────────────────────────────────────┐
│                     IF (SIMPLE)                                 │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│            ┌──────────┐                                       │
│            │ Condición│                                       │
│            └────┬─────┘                                       │
│         sí     │                                              │
│        ┌────────┴────────┐                                    │
│        │                 │ no                                 │
│        ▼                 │                                     │
│   ┌──────────┐          │                                     │
│   │Sentencia │          │                                     │
│   └────┬─────┘          │                                     │
│        │                │                                     │
│        └────────────────┴───►                                 │
│                                                                │
│   Pseudocódigo:                                                │
│   SI edad >= 18 ENTONCES                                       │
│       salida("Adulto")                                         │
│   FIN SI                                                       │
│                                                                │
│   Python:                                                      │
│   if edad >= 18:                                               │
│       print("Adulto")                                          │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### Sentencia If-Else

```
┌────────────────────────────────────────────────────────────────┐
│                      IF-ELSE                                    │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│                  ┌──────────┐                                 │
│                  │ Condición│                                 │
│                  └────┬─────┘                                 │
│           sí         │         no                             │
│          ┌────────────┴────────────┐                         │
│          ▼                         ▼                          │
│    ┌───────────┐            ┌───────────┐                    │
│    │Sentencia 1│            │Sentencia 2│                    │
│    └─────┬─────┘            └─────┬─────┘                    │
│          │                        │                           │
│          └────────────┬───────────┘                          │
│                       ▼                                       │
│                                                                │
│   Pseudocódigo:                                                │
│   SI edad >= 18 ENTONCES                                       │
│       salida("Adulto")                                         │
│   SINO                                                         │
│       salida("Menor")                                          │
│   FIN SI                                                       │
│                                                                │
│   Python:                                                      │
│   if edad >= 18:                                               │
│       print("Adulto")                                          │
│   else:                                                        │
│       print("Menor")                                           │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### If-Else-If (Selección Múltiple)

```
┌────────────────────────────────────────────────────────────────┐
│                    IF-ELSE-IF                                   │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Pseudocódigo:                    Python:                     │
│                                                                │
│   SI nota <= 1.5 ENTONCES          if nota <= 1.5:             │
│       salida("Excelente")              print("Excelente")      │
│   SINO SI nota <= 2.5 ENTONCES     elif nota <= 2.5:           │
│       salida("Bien")                   print("Bien")           │
│   SINO SI nota <= 3.5 ENTONCES     elif nota <= 3.5:           │
│       salida("Satisfactorio")          print("Satisfactorio")  │
│   SINO SI nota <= 4.0 ENTONCES     elif nota <= 4.0:           │
│       salida("Suficiente")             print("Suficiente")     │
│   SINO                             else:                       │
│       salida("Suspenso")               print("Suspenso")       │
│   FIN SI                                                       │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Operadores de Comparación

| Operador | Significado | Ejemplo |
|----------|-------------|---------|
| `==` | Igual | `a == b` |
| `!=` | Distinto | `a != b` |
| `<` | Menor que | `a < b` |
| `>` | Mayor que | `a > b` |
| `<=` | Menor o igual | `a <= b` |
| `>=` | Mayor o igual | `a >= b` |

---

### Operadores Lógicos

```
┌────────────────────────────────────────────────────────────────┐
│                  OPERADORES LÓGICOS                             │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   AND                    OR                     NOT            │
│   &&  /  and             ||  /  or              !  /  not      │
│                                                                │
│   ¿Ambos verdaderos?     ¿Al menos uno?         Negación       │
│                                                                │
│   true AND true = true     true OR true = true                 │
│   true AND false = false   true OR false = true                │
│   false AND false = false  false OR false = false              │
│                                                                │
│   Ejemplo:                                                     │
│   SI edad >= 18 AND tieneCarnet == true ENTONCES               │
│       salida("Puede conducir")                                 │
│   FIN SI                                                       │
│                                                                │
│   Python:                                                      │
│   if edad >= 18 and tieneCarnet == True:                       │
│       print("Puede conducir")                                  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Switch/Case

**Switch/Case** permite una selección múltiple clara para valores fijos.

```
┌────────────────────────────────────────────────────────────────┐
│                     SWITCH/CASE                                 │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Pseudocódigo:                    Java:                       │
│                                                                │
│   SWITCH diaSemana                 switch (diaSemana) {        │
│       CASE 1:                          case 1:                 │
│           salida("Lunes")                  System.out.println( │
│       CASE 2:                                 "Lunes");        │
│           salida("Martes")                 break;              │
│       CASE 3:                          case 2:                 │
│           salida("Miércoles")              System.out.println( │
│       ...                                     "Martes");       │
│       DEFAULT:                             break;              │
│           salida("Inválido")           // etc...               │
│   END SWITCH                           default:                │
│                                            System.out.println( │
│                                                "Inválido");    │
│                                    }                           │
│                                                                │
│   Importante: break; previene "caída" al siguiente case        │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Iteración (Bucles)

#### Bucle For (Controlado por Contador)

```
┌────────────────────────────────────────────────────────────────┐
│                     BUCLE FOR                                   │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Número conocido de iteraciones                               │
│                                                                │
│   Pseudocódigo:                      Python:                   │
│   PARA i DESDE 1 HASTA 5             for i in range(1, 6):     │
│       salida(i)                          print(i)              │
│   FIN PARA                                                     │
│                                                                │
│   Java:                                                        │
│   for (int i = 1; i <= 5; i++) {                               │
│       System.out.println(i);                                   │
│   }                                                            │
│                                                                │
│   Salida: 1, 2, 3, 4, 5                                        │
│                                                                │
│   Estructura (Java):                                           │
│   for (ValorInicial; Condición; Incremento)                    │
│        └────┬────┘ └────┬────┘ └────┬────┘                    │
│             │           │           │                          │
│        int i = 1    i <= 5       i++                          │
│        (una vez)   (antes de    (después de                    │
│                    cada iter.)  cada iter.)                    │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### Bucle While (Bucle con Pre-prueba)

```
┌────────────────────────────────────────────────────────────────┐
│                    BUCLE WHILE                                  │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   La condición se verifica ANTES del cuerpo del bucle          │
│   → ¡Puede ejecutarse 0 veces!                                 │
│                                                                │
│       ┌──────────────────┐                                    │
│       │                  │                                    │
│       ▼                  │                                    │
│   ┌──────────┐          │                                    │
│   │ Condición│──────────┘  sí                                │
│   └────┬─────┘                                                │
│        │ no                                                   │
│        ▼                                                      │
│                                                                │
│   Pseudocódigo:                      Python:                   │
│   contador = 1                       contador = 1              │
│   MIENTRAS contador <= 5             while contador <= 5:      │
│       salida(contador)                   print(contador)       │
│       contador = contador + 1            contador = contador + 1│
│   FIN MIENTRAS                                                 │
│                                                                │
│   Precaución: Evitar bucles infinitos (¡condición de fin!)     │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### Bucle Do-While (Bucle con Post-prueba)

```
┌────────────────────────────────────────────────────────────────┐
│                   BUCLE DO-WHILE                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   La condición se verifica DESPUÉS del cuerpo del bucle        │
│   → ¡Se ejecuta al menos una vez!                              │
│                                                                │
│   ┌──────────────┐                                            │
│   │ Sentencias   │                                            │
│   └──────┬───────┘                                            │
│          │                                                     │
│          ▼                                                     │
│   ┌──────────────┐                                            │
│   │  ¿Condición? │──────────┐                                 │
│   └──────────────┘          │ sí                              │
│          │                  │                                  │
│          │ no               │                                  │
│          ▼         ◄────────┘                                  │
│                                                                │
│   Pseudocódigo:                      Java:                     │
│   HACER                              do {                      │
│       entrada = leer()                   entrada = scanner...  │
│   MIENTRAS entrada != "salir"        } while (!entrada.equals( │
│                                             "salir"));         │
│                                                                │
│   Típico para: Menús, validación de entrada                    │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Comparación de Bucles

| Bucle | Verificación | Iteraciones | Aplicación |
|-------|--------------|-------------|------------|
| **for** | Contador | Cantidad conocida | Iterar listas |
| **while** | Pre-prueba (antes) | 0 a n | Cantidad desconocida |
| **do-while** | Post-prueba (después) | 1 a n | Se necesita al menos 1 iteración |

---

### Control de Bucles

| Comando | Efecto |
|---------|--------|
| **break** | Salir del bucle inmediatamente |
| **continue** | Saltar a la siguiente iteración |

```
// Ejemplo break:
para i desde 1 hasta 10:
    si i == 5:
        break        // Terminar bucle en 5
    salida(i)
// Salida: 1, 2, 3, 4

// Ejemplo continue:
para i desde 1 hasta 5:
    si i == 3:
        continue     // Saltar el 3
    salida(i)
// Salida: 1, 2, 4, 5
```

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Secuencia** | Sentencias una tras otra |
| **Selección** | Bifurcación (If-Else) |
| **Iteración** | Repetición (Bucle) |
| **Condición** | Expresión que evalúa a true/false |
| **Pre-prueba** | Verificación antes de la ejecución |
| **Post-prueba** | Verificación después de la ejecución |
| **Controlado por contador** | Bucle for con variable contador |

---

## Consejos para el Examen

### Preguntas Comunes de Examen

- ¿Cuál es la diferencia entre while y do-while?
- ¿Cuándo usar cada tipo de bucle?
- ¿Cómo funciona una estructura if-else?
- ¿Qué hace break en un bucle?

### Importante Recordar

- **while** = 0 a n iteraciones (verificación antes)
- **do-while** = 1 a n iteraciones (verificación después)
- **for** = Número conocido de iteraciones
- **break** = Salir del bucle
- **continue** = Saltar iteración

---

## Ejercicios Prácticos

### Ejercicio 1
¿Cuál es la diferencia entre un bucle while y un bucle do-while?

**Solución:**
- **Bucle while:** Pre-prueba - la condición se verifica ANTES del cuerpo del bucle. El bucle puede ejecutarse 0 veces si la condición es falsa desde el principio.
- **Bucle do-while:** Post-prueba - la condición se verifica DESPUÉS del cuerpo del bucle. El bucle se ejecuta al menos una vez, incluso si la condición es falsa.

### Ejercicio 2
Escribe pseudocódigo que muestre los números del 1 al 10, pero omita el número 5.

**Solución:**
```
PARA i DESDE 1 HASTA 10
    SI i == 5 ENTONCES
        continue
    FIN SI
    salida(i)
FIN PARA
```
Salida: 1, 2, 3, 4, 6, 7, 8, 9, 10

### Ejercicio 3
Analiza el siguiente pseudocódigo. ¿Cuál es la salida?

```
suma = 0
PARA i DESDE 1 HASTA 4
    suma = suma + i
FIN PARA
salida(suma)
```

**Solución:**
| Iteración | i | suma antes | suma después |
|-----------|---|------------|--------------|
| 1 | 1 | 0 | 0 + 1 = 1 |
| 2 | 2 | 1 | 1 + 2 = 3 |
| 3 | 3 | 3 | 3 + 3 = 6 |
| 4 | 4 | 6 | 6 + 4 = 10 |

**Salida: 10**

---

## Referencias Cruzadas

- [06-02-05 Pseudocódigo](./06-02-05-pseudocode.md) - Representar estructuras de control
- [06-02-06 Prueba de Escritorio](./06-02-06-desk-check.md) - Análisis de código
- [06-02-01 Variables y Tipos de Datos](./06-02-01-variables-datatypes.md) - Valores de condición
