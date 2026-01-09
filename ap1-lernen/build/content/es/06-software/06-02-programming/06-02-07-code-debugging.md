# Depuración de Código

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Distinguir entre diferentes tipos de errores
- Reconocer errores de sintaxis
- Identificar errores lógicos
- Buscar errores sistemáticamente

---

## Contenido Principal

### Tipos de Errores en Código de Programa

```
┌─────────────────────────────────────────────────────────────────┐
│                    TIPOS DE ERROR EN CÓDIGO                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │   ¡IMPORTANTE PARA EL EXAMEN!                           │  │
│   │   [NUEVO EN CATÁLOGO DE EXÁMENES 2025]                  │  │
│   │                                                          │  │
│   │   Tipo de pregunta común:                                │  │
│   │   "Encuentra el/los error(es) en el siguiente código"   │  │
│   └─────────────────────────────────────────────────────────┘  │
│                                                                 │
│                        TIPOS DE ERROR                           │
│                            │                                    │
│           ┌────────────────┼────────────────┐                  │
│           │                │                │                  │
│     ┌─────▼─────┐    ┌─────▼─────┐    ┌─────▼─────┐          │
│     │  ERRORES  │    │ ERRORES   │    │  ERRORES  │          │
│     │ DE SINTAXIS│   │EN EJECUCIÓN│   │  LÓGICOS  │          │
│     │           │    │           │    │           │          │
│     │ Compilador│    │ Durante   │    │ Resultado │          │
│     │los detecta│    │ ejecución │    │ incorrecto│          │
│     └───────────┘    └───────────┘    └───────────┘          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

| Tipo de Error | ¿Cuándo se detecta? | Ejemplo |
|---------------|---------------------|---------|
| **Error de Sintaxis** | Durante compilación | Falta punto y coma |
| **Error en Ejecución** | Durante ejecución | División por cero |
| **Error Lógico** | Resultado incorrecto | Fórmula incorrecta |

---

### Errores de Sintaxis

Los **errores de sintaxis** violan la gramática del lenguaje de programación.

```
┌────────────────────────────────────────────────────────────────┐
│                     ERRORES DE SINTAXIS                         │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Errores de sintaxis comunes:                                  │
│                                                                │
│   1. Faltan paréntesis                                          │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   MAL:   if age >= 18                                   │ │
│   │   BIEN:  if (age >= 18)        // Java                  │ │
│   │   BIEN:  if age >= 18:         // Python (dos puntos)   │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   2. Falta punto y coma (Java, C#, JavaScript)                 │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   MAL:   int x = 5                                      │ │
│   │   BIEN:  int x = 5;                                     │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   3. Comillas incorrectas                                       │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   MAL:   String nombre = 'Max';    // Simples           │ │
│   │   BIEN:  String nombre = "Max";    // Dobles (Java)     │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   4. Faltan llaves                                              │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   MAL:   if (x > 0)                                     │ │
│   │              x = x + 1;                                 │ │
│   │              y = y + 1;    // ¡No está en el If!        │ │
│   │                                                        │ │
│   │   BIEN:  if (x > 0) {                                   │ │
│   │               x = x + 1;                                │ │
│   │               y = y + 1;   // En bloque If              │ │
│   │            }                                            │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   5. Errores tipográficos en palabras clave                    │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   MAL:   whlie (x < 10)                                 │ │
│   │   BIEN:  while (x < 10)                                 │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Errores en Tiempo de Ejecución

Los **errores en tiempo de ejecución** ocurren solo durante la ejecución del programa.

```
┌────────────────────────────────────────────────────────────────┐
│                    ERRORES EN EJECUCIÓN                         │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   1. División por cero                                          │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   a = 10                                                │ │
│   │   b = 0                                                 │ │
│   │   c = a / b     // ¡ERROR: División por 0!              │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   2. Índice de array fuera de límites                          │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   int[] numeros = {1, 2, 3};  // Índice 0, 1, 2         │ │
│   │   x = numeros[5];             // ¡ERROR: Índice 5       │ │
│   │                               // no existe!             │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   3. Acceso a puntero nulo / None                              │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   String nombre = null;                                 │ │
│   │   int longitud = nombre.length();  // ¡ERROR: null no   │ │
│   │                                    // tiene métodos!    │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   4. Error de conversión de tipo                               │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   String texto = "abc";                                 │ │
│   │   int numero = Integer.parseInt(texto);  // ¡ERROR:     │ │
│   │                                          // "abc" no es │ │
│   │                                          // un número!  │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Errores Lógicos

Los **errores lógicos** son los más difíciles de encontrar - el programa se ejecuta pero produce resultados incorrectos.

```
┌────────────────────────────────────────────────────────────────┐
│                    ERRORES LÓGICOS                              │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   1. Operador incorrecto                                        │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   // Calcular promedio                                  │ │
│   │   MAL:   promedio = suma * cantidad                     │ │
│   │   BIEN:  promedio = suma / cantidad                     │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   2. Error de uno (off-by-one)                                 │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   // Mostrar números 1 al 10                            │ │
│   │   MAL:   PARA i DESDE 1 HASTA 9       // ¡solo hasta 9! │ │
│   │   BIEN:  PARA i DESDE 1 HASTA 10      // hasta 10       │ │
│   │                                                        │ │
│   │   MAL:   PARA i DESDE 0 HASTA 10      // 0 a 10 = ¡11!  │ │
│   │   BIEN:  PARA i DESDE 0 HASTA 9       // 0 a 9 = 10     │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   3. Condición incorrecta                                       │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   // Verificar si es adulto                             │ │
│   │   MAL:   SI edad > 18 ENTONCES    // ¡falta el 18!      │ │
│   │   BIEN:  SI edad >= 18 ENTONCES                         │ │
│   │                                                        │ │
│   │   // Examen aprobado                                    │ │
│   │   MAL:   SI nota < 4 ENTONCES aprobado                  │ │
│   │   BIEN:  SI nota <= 4 ENTONCES aprobado                 │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   4. Operandos intercambiados                                   │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   // Verificar si a es menor que b                      │ │
│   │   MAL:   SI b < a ENTONCES ...   // ¡invertido!         │ │
│   │   BIEN:  SI a < b ENTONCES ...                          │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   5. Asignación en vez de comparación                          │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   MAL:   SI x = 5 ENTONCES ...   // ¡Asignación!        │ │
│   │   BIEN:  SI x == 5 ENTONCES ...  // Comparación         │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
│   6. Bucle infinito                                             │
│   ┌────────────────────────────────────────────────────────┐ │
│   │   i = 0                                                 │ │
│   │   MIENTRAS i < 10                                       │ │
│   │       salida(i)                                         │ │
│   │       // ¡ERROR: i nunca se incrementa → bucle infinito!│ │
│   │   FIN MIENTRAS                                          │ │
│   └────────────────────────────────────────────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Búsqueda Sistemática de Errores

```
┌────────────────────────────────────────────────────────────────┐
│              BÚSQUEDA SISTEMÁTICA DE ERRORES                    │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   1. Leer código cuidadosamente                                 │
│      • Revisar cada línea individualmente                       │
│      • Vigilar paréntesis y punto y coma                        │
│      • Verificar nombres de variables (¿errores tipográficos?) │
│                                                                │
│   2. Verificar lógica                                           │
│      • Condiciones: < vs <= vs > vs >=                          │
│      • Operadores: + vs - vs * vs /                             │
│      • Comparación vs asignación: == vs =                       │
│                                                                │
│   3. Considerar casos límite                                    │
│      • ¿Qué pasa con 0?                                         │
│      • ¿Qué pasa con el primer/último elemento?                 │
│      • ¿Qué pasa con entrada vacía?                             │
│                                                                │
│   4. Realizar prueba de escritorio                              │
│      • Trazar cada paso manualmente                             │
│      • Anotar valores de variables                              │
│      • Comparar resultado con expectativa                       │
│                                                                │
│   5. Conocer patrones típicos de error                          │
│      • Off-by-one                                               │
│      • Bucles infinitos                                         │
│      • División por cero                                        │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Lista de Verificación para Encontrar Errores

| Punto de Verificación | ¿Qué revisar? |
|----------------------|---------------|
| **Sintaxis** | Paréntesis, punto y coma, comillas |
| **Variables** | ¿Inicializadas? ¿Correctamente escritas? |
| **Condiciones** | ¿Operadores correctos? (< vs <=) |
| **Bucles** | ¿Condición de terminación alcanzable? ¿Contador actualizado? |
| **Valores de retorno** | ¿Se retorna el valor correcto? |
| **Casos límite** | 0, null, listas vacías, primer/último elemento |

---

### Ejemplos de Examen: Encontrar Errores

```
┌────────────────────────────────────────────────────────────────┐
│              EJEMPLO DE EXAMEN 1                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Tarea: ¡Encuentra el error!                                  │
│                                                                │
│   // Calcular suma de números 1 a n                            │
│   FUNCIÓN suma(n)                                              │
│       resultado = 0                                             │
│       PARA i DESDE 1 HASTA n                                   │
│           resultado = resultado + 1      // <-- ¡ERROR!        │
│       FIN PARA                                                  │
│       RETORNAR resultado                                        │
│   FIN FUNCIÓN                                                   │
│                                                                │
│   ERROR: resultado + 1 debería ser resultado + i               │
│   Corrección: resultado = resultado + i                         │
│                                                                │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│              EJEMPLO DE EXAMEN 2                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Tarea: ¡Encuentra los errores!                               │
│                                                                │
│   // Encontrar mínimo en una lista                             │
│   FUNCIÓN minimo(lista)                                        │
│       min = 0                          // <-- ¡ERROR 1!        │
│       PARA i DESDE 1 HASTA longitud(lista)                     │
│           SI lista[i] < min ENTONCES   // <-- ¡ERROR 2!        │
│               min = lista[i]                                   │
│           FIN SI                                                │
│       FIN PARA                                                  │
│       RETORNAR min                                              │
│   FIN FUNCIÓN                                                   │
│                                                                │
│   ERROR 1: min = 0 no funciona si todos los valores > 0       │
│            Mejor: min = lista[0] (primer elemento)             │
│   ERROR 2: El índice a menudo empieza en 0, no en 1           │
│            Mejor: PARA i DESDE 0 HASTA longitud(lista) - 1     │
│                                                                │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│              EJEMPLO DE EXAMEN 3                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Tarea: ¡Encuentra el error!                                  │
│                                                                │
│   // Verificar si es adulto                                    │
│   edad = entrada("Ingrese edad:")                              │
│   SI edad = 18 ENTONCES                  // <-- ¡ERROR!        │
│       salida("Recién cumplió 18")                              │
│   SINO SI edad > 18 ENTONCES                                    │
│       salida("Adulto")                                          │
│   SINO                                                          │
│       salida("Menor")                                           │
│   FIN SI                                                        │
│                                                                │
│   ERROR: edad = 18 es una asignación, ¡no una comparación!     │
│   Corrección: SI edad == 18 ENTONCES                            │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Error de Sintaxis** | Violación de gramática del lenguaje |
| **Error en Ejecución** | Error durante la ejecución |
| **Error Lógico** | Lógica de programa incorrecta |
| **Off-by-One** | Error de uno |
| **Debugging** | Proceso de encontrar errores |

---

## Consejos para el Examen

### Preguntas Comunes de Examen

- Encuentra el error en el código
- ¿Qué tipo de error es este?
- Corrige el código defectuoso

### Importante Recordar

- **Errores de sintaxis**: Paréntesis, punto y coma, errores tipográficos
- **Errores lógicos**: Operadores incorrectos, off-by-one
- **= vs ==**: Asignación vs. comparación
- **< vs <=**: ¡Vigilar valores límite!
- **Prueba de escritorio**: Realizar en caso de duda

---

## Ejercicios Prácticos

### Ejercicio 1
Encuentra el error en el siguiente código:

```
// Mostrar números 1 al 5
i = 1
MIENTRAS i < 5
    salida(i)
    i = i + 1
FIN MIENTRAS
```

**Solución:**
**Error:** La condición `i < 5` solo muestra 1,2,3,4 - ¡falta el 5!
**Corrección:** `MIENTRAS i <= 5` o `MIENTRAS i < 6`

### Ejercicio 2
¿Qué tipo de error es este y cuál es la corrección?

```
// Calcular promedio de tres notas
nota1 = 2
nota2 = 3
nota3 = 1
promedio = (nota1 + nota2 + nota3) / 2
salida(promedio)
```

**Solución:**
**Tipo de Error:** Error lógico
**Error:** División por 2 en vez de 3 (número de notas)
**Corrección:** `promedio = (nota1 + nota2 + nota3) / 3`

### Ejercicio 3
Encuentra y corrige todos los errores:

```
// Verificar si número está entre 10 y 20
numero = entrada("Ingrese número")
SI numero > 10 AND numero < 20 ENTONCES
    salida("En rango"
SINO
    salida("Fuera")
FIN
```

**Solución:**
**Error 1:** `numero > 10` debería ser `numero >= 10` (10 está incluido)
**Error 2:** `numero < 20` debería ser `numero <= 20` (20 está incluido)
**Error 3:** Falta paréntesis de cierre en `salida("En rango"`
**Error 4:** `FIN` debería ser `FIN SI`

**Código corregido:**
```
numero = entrada("Ingrese número")
SI numero >= 10 AND numero <= 20 ENTONCES
    salida("En rango")
SINO
    salida("Fuera")
FIN SI
```

---

## Referencias Cruzadas

- [06-02-06 Prueba de Escritorio](./06-02-06-desk-check.md) - Revisión manual de código
- [06-06-03 Depuración](../06-06-development-process/06-06-03-debugging.md) - Técnicas de depuración
- [06-06-02 Testing](../06-06-development-process/06-06-02-testing.md) - Métodos de prueba
