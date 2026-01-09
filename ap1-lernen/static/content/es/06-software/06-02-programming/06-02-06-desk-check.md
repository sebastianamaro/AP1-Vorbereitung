# Prueba de Escritorio

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Realizar una prueba de escritorio
- Analizar código línea por línea
- Rastrear valores de variables durante la ejecución
- Encontrar errores mediante revisión manual de código

---

## Contenido Principal

### ¿Qué es una Prueba de Escritorio?

Una **prueba de escritorio** (también llamada "tabla de trazado") es un método para revisar manualmente el código del programa, revisando el código línea por línea.

```
┌─────────────────────────────────────────────────────────────────┐
│                    PRUEBA DE ESCRITORIO                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Propósito:                                                    │
│   • Probar código SIN una computadora                           │
│   • Verificar la lógica                                         │
│   • Encontrar errores                                           │
│   • Entender el flujo de ejecución                              │
│                                                                 │
│   Procedimiento:                                                │
│   1. Revisar código línea por línea                             │
│   2. Anotar valores de variables en una tabla                   │
│   3. Evaluar condiciones                                        │
│   4. Contar iteraciones de bucle                                │
│   5. Determinar valores finales/salidas                         │
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐ │
│   │   ¡IMPORTANTE PARA EL EXAMEN!                           │ │
│   │   [NUEVO EN CATÁLOGO DE EXÁMENES 2025]                  │ │
│   │                                                          │ │
│   │   Tipos de pregunta comunes:                             │ │
│   │   "¿Qué muestra el siguiente código?"                   │ │
│   │   "¿Qué valor tiene x después de la ejecución?"         │ │
│   └─────────────────────────────────────────────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### La Tabla de Trazado

Una **tabla de trazado** documenta los valores de todas las variables después de cada paso.

```
┌────────────────────────────────────────────────────────────────┐
│                    TABLA DE TRAZADO                             │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Código:                                                      │
│   ┌────────────────────────────┐                              │
│   │   a = 5                    │                              │
│   │   b = 3                    │                              │
│   │   c = a + b                │                              │
│   │   a = a * 2                │                              │
│   └────────────────────────────┘                              │
│                                                                │
│   Tabla de Trazado:                                            │
│   ┌────────┬───────────────┬───────┬───────┬───────┐         │
│   │ Línea  │ Sentencia     │   a   │   b   │   c   │         │
│   ├────────┼───────────────┼───────┼───────┼───────┤         │
│   │ Inicio │ -             │   -   │   -   │   -   │         │
│   │   1    │ a = 5         │   5   │   -   │   -   │         │
│   │   2    │ b = 3         │   5   │   3   │   -   │         │
│   │   3    │ c = a + b     │   5   │   3   │   8   │         │
│   │   4    │ a = a * 2     │  10   │   3   │   8   │         │
│   └────────┴───────────────┴───────┴───────┴───────┘         │
│                                                                │
│   Resultado final: a = 10, b = 3, c = 8                        │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Ejemplo 1: Secuencia Simple

```
┌────────────────────────────────────────────────────────────────┐
│               EJEMPLO: SECUENCIA SIMPLE                         │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Código:                                                      │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   x = 10                                                │ │
│   │   y = 4                                                 │ │
│   │   z = x - y                                             │ │
│   │   x = z * 2                                             │ │
│   │   salida(x)                                             │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Prueba de escritorio:                                        │
│   ┌──────┬─────────────┬──────┬──────┬──────┬─────────────┐ │
│   │Línea │ Sentencia   │  x   │  y   │  z   │ Salida      │ │
│   ├──────┼─────────────┼──────┼──────┼──────┼─────────────┤ │
│   │  1   │ x = 10      │  10  │  -   │  -   │             │ │
│   │  2   │ y = 4       │  10  │  4   │  -   │             │ │
│   │  3   │ z = x - y   │  10  │  4   │  6   │             │ │
│   │  4   │ x = z * 2   │  12  │  4   │  6   │             │ │
│   │  5   │ salida(x)   │  12  │  4   │  6   │ 12          │ │
│   └──────┴─────────────┴──────┴──────┴──────┴─────────────┘ │
│                                                                │
│   Salida: 12                                                   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Ejemplo 2: Con Condición

```
┌────────────────────────────────────────────────────────────────┐
│               EJEMPLO: CON CONDICIÓN                            │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Código:                                                      │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   edad = 16                                             │ │
│   │   SI edad >= 18 ENTONCES                                │ │
│   │       estado = "adulto"                                 │ │
│   │   SINO                                                  │ │
│   │       estado = "menor"                                  │ │
│   │   FIN SI                                                │ │
│   │   salida(estado)                                        │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Prueba de escritorio:                                        │
│   ┌──────┬────────────────────┬───────┬──────────────────┐  │
│   │Línea │ Sentencia          │ edad  │ estado           │  │
│   ├──────┼────────────────────┼───────┼──────────────────┤  │
│   │  1   │ edad = 16          │  16   │ -                │  │
│   │  2   │ 16 >= 18?          │  16   │ -                │  │
│   │      │ → FALSO            │       │                  │  │
│   │  5   │ estado = "menor"   │  16   │ "menor"          │  │
│   │  7   │ salida(estado)     │  16   │ "menor"          │  │
│   └──────┴────────────────────┴───────┴──────────────────┘  │
│                                                                │
│   Salida: "menor"                                              │
│   (Las líneas 3-4 se omitieron porque la condición era falsa) │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Ejemplo 3: Con Bucle

```
┌────────────────────────────────────────────────────────────────┐
│                EJEMPLO: CON BUCLE                               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Código:                                                      │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   suma = 0                                              │ │
│   │   PARA i DESDE 1 HASTA 4                                │ │
│   │       suma = suma + i                                   │ │
│   │   FIN PARA                                              │ │
│   │   salida(suma)                                          │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Prueba de escritorio:                                        │
│   ┌───────────┬─────────────────────────┬───────┬───────┐   │
│   │ Iteración │ Sentencia               │   i   │ suma  │   │
│   ├───────────┼─────────────────────────┼───────┼───────┤   │
│   │   Inicio  │ suma = 0                │   -   │   0   │   │
│   │     1     │ i = 1, suma = 0 + 1     │   1   │   1   │   │
│   │     2     │ i = 2, suma = 1 + 2     │   2   │   3   │   │
│   │     3     │ i = 3, suma = 3 + 3     │   3   │   6   │   │
│   │     4     │ i = 4, suma = 6 + 4     │   4   │  10   │   │
│   │   Fin     │ salida(suma)            │   -   │  10   │   │
│   └───────────┴─────────────────────────┴───────┴───────┘   │
│                                                                │
│   Salida: 10                                                   │
│   (Suma de números 1+2+3+4 = 10)                              │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Ejemplo 4: Bucle While

```
┌────────────────────────────────────────────────────────────────┐
│              EJEMPLO: BUCLE WHILE                               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Código:                                                      │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   contador = 1                                          │ │
│   │   resultado = 1                                         │ │
│   │   MIENTRAS contador <= 3                                │ │
│   │       resultado = resultado * contador                  │ │
│   │       contador = contador + 1                           │ │
│   │   FIN MIENTRAS                                          │ │
│   │   salida(resultado)                                     │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Prueba de escritorio:                                        │
│   ┌─────────┬──────────────────────┬─────────┬───────────┐  │
│   │Iteración│ Verificar/Sentencia  │ contador│ resultado │  │
│   ├─────────┼──────────────────────┼─────────┼───────────┤  │
│   │  Inicio │ contador=1, result=1 │    1    │     1     │  │
│   │    1    │ 1 <= 3? → SÍ         │    1    │     1     │  │
│   │         │ resultado = 1 * 1    │    1    │     1     │  │
│   │         │ contador = 1 + 1     │    2    │     1     │  │
│   │    2    │ 2 <= 3? → SÍ         │    2    │     1     │  │
│   │         │ resultado = 1 * 2    │    2    │     2     │  │
│   │         │ contador = 2 + 1     │    3    │     2     │  │
│   │    3    │ 3 <= 3? → SÍ         │    3    │     2     │  │
│   │         │ resultado = 2 * 3    │    3    │     6     │  │
│   │         │ contador = 3 + 1     │    4    │     6     │  │
│   │  Fin    │ 4 <= 3? → NO         │    4    │     6     │  │
│   └─────────┴──────────────────────┴─────────┴───────────┘  │
│                                                                │
│   Salida: 6 (Factorial de 3: 1 × 2 × 3 = 6)                   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Ejemplo 5: Estructuras Anidadas

```
┌────────────────────────────────────────────────────────────────┐
│            EJEMPLO: ESTRUCTURAS ANIDADAS                        │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Código:                                                      │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   suma = 0                                              │ │
│   │   PARA i DESDE 1 HASTA 3                                │ │
│   │       SI i MOD 2 == 1 ENTONCES    // i es impar         │ │
│   │           suma = suma + i                               │ │
│   │       FIN SI                                            │ │
│   │   FIN PARA                                              │ │
│   │   salida(suma)                                          │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   Prueba de escritorio:                                        │
│   ┌─────────┬────────────┬─────────────┬───────┬───────┐    │
│   │    i    │ i MOD 2    │ Condición   │ Acción│ suma  │    │
│   ├─────────┼────────────┼─────────────┼───────┼───────┤    │
│   │  Inicio │     -      │      -      │   -   │   0   │    │
│   │    1    │     1      │ 1==1 → SÍ   │ +1    │   1   │    │
│   │    2    │     0      │ 0==1 → NO   │   -   │   1   │    │
│   │    3    │     1      │ 1==1 → SÍ   │ +3    │   4   │    │
│   └─────────┴────────────┴─────────────┴───────┴───────┘    │
│                                                                │
│   Salida: 4 (Suma de impares: 1 + 3 = 4)                      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Errores Comunes

```
┌────────────────────────────────────────────────────────────────┐
│                  ERRORES COMUNES                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   1. Errores de uno (off-by-one) en bucles:                    │
│      PARA i DESDE 1 HASTA 5    → 5 iteraciones (1,2,3,4,5)     │
│      PARA i DESDE 0 HASTA 4    → 5 iteraciones (0,1,2,3,4)     │
│                                                                │
│   2. Orden en asignaciones:                                     │
│      a = 5                                                      │
│      b = a        → b = 5 (no el valor antiguo de a)           │
│      a = 10       → a = 10, ¡pero b sigue siendo 5!            │
│                                                                │
│   3. División entera:                                           │
│      7 / 2 = 3 (¡con Integer!)                                 │
│      7 MOD 2 = 1 (resto)                                       │
│                                                                │
│   4. Comparación vs. asignación:                                │
│      a = 5     → Asignación                                    │
│      a == 5    → Comparación (retorna true/false)              │
│                                                                │
│   5. Operadores lógicos:                                        │
│      true AND false → false                                    │
│      true OR false → true                                      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Lista de Verificación para Prueba de Escritorio

| Paso | Acción |
|------|--------|
| 1 | Identificar todas las variables |
| 2 | Crear tabla con columnas para cada variable |
| 3 | Ingresar valores iniciales (o "-" para no inicializados) |
| 4 | Revisar código línea por línea |
| 5 | Para condiciones: Evaluar y elegir camino apropiado |
| 6 | Para bucles: Documentar cada iteración individualmente |
| 7 | Anotar valores finales y salidas |

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Prueba de Escritorio** | Revisión manual de código |
| **Tabla de Trazado** | Documentación de valores de variables |
| **MOD** | Módulo - resto de la división |
| **Off-by-One** | Error en límites de bucle |

---

## Consejos para el Examen

### Preguntas Comunes de Examen

- Dado código - ¿cuál es la salida?
- ¿Qué valor tiene la variable x después de la ejecución?
- ¿Cuántas veces se ejecuta el bucle?

### Importante Recordar

- **Siempre crear una tabla** - ¡trabajar sistemáticamente!
- **Línea por línea** - no omitir nada
- **Para bucles**: Documentar cada iteración individualmente
- **Verificar condiciones cuidadosamente**
- **MOD = Resto** (7 MOD 3 = 1)

---

## Ejercicios Prácticos

### Ejercicio 1
¿Qué muestra el siguiente código?

```
x = 3
y = 5
z = x + y
x = z - x
salida(x)
salida(y)
salida(z)
```

**Solución:**
| Línea | x | y | z |
|-------|---|---|---|
| x = 3 | 3 | - | - |
| y = 5 | 3 | 5 | - |
| z = x + y | 3 | 5 | 8 |
| x = z - x = 8 - 3 | 5 | 5 | 8 |

**Salida:** 5, 5, 8

### Ejercicio 2
¿Cuál es el resultado?

```
suma = 0
PARA i DESDE 1 HASTA 5
    SI i MOD 2 == 0 ENTONCES
        suma = suma + i
    FIN SI
FIN PARA
salida(suma)
```

**Solución:**
| i | i MOD 2 | Condición | suma |
|---|---------|-----------|------|
| 1 | 1 | 0==0? NO | 0 |
| 2 | 0 | 0==0? SÍ | 0+2=2 |
| 3 | 1 | 0==0? NO | 2 |
| 4 | 0 | 0==0? SÍ | 2+4=6 |
| 5 | 1 | 0==0? NO | 6 |

**Salida: 6** (Suma de pares: 2 + 4 = 6)

### Ejercicio 3
¿Cuántas veces se muestra "Hola"?

```
i = 10
MIENTRAS i > 5
    salida("Hola")
    i = i - 2
FIN MIENTRAS
```

**Solución:**
| Iteración | i antes de verificar | i > 5? | i después |
|-----------|----------------------|--------|-----------|
| 1 | 10 | SÍ | 8 |
| 2 | 8 | SÍ | 6 |
| 3 | 6 | SÍ | 4 |
| - | 4 | NO | - |

**"Hola" se muestra 3 veces.**

---

## Referencias Cruzadas

- [06-02-05 Pseudocódigo](./06-02-05-pseudocode.md) - Representación de código
- [06-02-02 Estructuras de Control](./06-02-02-control-structures.md) - If/Bucles
- [06-02-07 Depuración de Código](./06-02-07-code-debugging.md) - Encontrar errores
