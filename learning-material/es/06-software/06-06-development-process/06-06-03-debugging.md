# Depuración

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Comprender el proceso de depuración
- Conocer varias técnicas de depuración
- Localizar errores sistemáticamente
- Conocer herramientas de depuración

---

## Contenido Principal

### ¿Qué es la Depuración?

```
┌────────────────────────────────────────────────────────────────────┐
│                       DEPURACIÓN                                   │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Definición:                                                      │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ La depuración es el proceso sistemático de encontrar,       │ │
│   │ analizar y corregir errores (bugs) en el software.          │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   El término se origina de los primeros días de la computación:   │
│   Grace Hopper encontró una polilla real (bug) en una computadora │
│   en 1947 que estaba causando mal funcionamiento.                 │
│                                                                     │
│   Ciclo de depuración:                                              │
│                                                                     │
│        ┌─────────────┐                                            │
│        │   Detectar  │                                            │
│        │    error    │                                            │
│        └──────┬──────┘                                            │
│               ↓                                                    │
│        ┌──────┴──────┐         ┌─────────────┐                   │
│        │  Localizar  │────────→│  Comprender │                   │
│        │   error     │         │    error    │                   │
│        └─────────────┘         └──────┬──────┘                   │
│                                       ↓                           │
│        ┌─────────────┐         ┌──────┴──────┐                   │
│        │   Probar    │←────────│  Corregir   │                   │
│        │ corrección  │         │    error    │                   │
│        └─────────────┘         └─────────────┘                   │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Estrategias de Depuración

```
┌────────────────────────────────────────────────────────────────────┐
│                   ESTRATEGIAS DE DEPURACIÓN                        │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   1. EJECUCIÓN PASO A PASO                                         │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Recorrer el código línea por línea                       │  │
│   │ • Verificar valores de variables después de cada paso      │  │
│   │ • Seguir el flujo del programa                             │  │
│   │                                                             │  │
│   │ Comandos del depurador:                                    │  │
│   │ ┌────────────┬────────────────────────────────┐            │  │
│   │ │ Step Over  │ Siguiente línea (saltar funciones)│         │  │
│   │ │            │                                 │            │  │
│   │ │ Step Into  │ Entrar en la función           │            │  │
│   │ │ Step Out   │ Salir de la función            │            │  │
│   │ │ Continue   │ Ejecutar hasta siguiente breakpoint│        │  │
│   │ └────────────┴────────────────────────────────┘            │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   2. PUNTOS DE INTERRUPCIÓN (Breakpoints)                         │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Posiciones marcadas donde la ejecución se pausa          │  │
│   │ • Permite inspeccionar el estado del programa              │  │
│   │                                                             │  │
│   │   Línea 10: int x = calculate();                           │  │
│   │   Línea 11: ● int y = x * 2;   ← Breakpoint               │  │
│   │   Línea 12: return y;                                      │  │
│   │                                                             │  │
│   │ El programa se detiene ANTES de la línea 11                │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

```
┌────────────────────────────────────────────────────────────────────┐
│               ESTRATEGIAS DE DEPURACIÓN (Continuación)             │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   3. DEPURACIÓN CON PRINT (Insertar salidas)                      │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Método simple sin depurador                              │  │
│   │ • Colocar salidas en el código                             │  │
│   │ • Seguir valores de variables y flujo del programa         │  │
│   │                                                             │  │
│   │ Ejemplo:                                                   │  │
│   │ ┌──────────────────────────────────────────────────────┐  │  │
│   │ │ FUNCIÓN calcular(valor)                              │  │  │
│   │ │   IMPRIMIR "Entrada: " + valor                       │  │  │
│   │ │   resultado = valor * 2                              │  │  │
│   │ │   IMPRIMIR "Resultado: " + resultado                 │  │  │
│   │ │   RETORNAR resultado                                 │  │  │
│   │ │ FIN FUNCIÓN                                          │  │  │
│   │ └──────────────────────────────────────────────────────┘  │  │
│   │                                                             │  │
│   │ ⚠ Después de depurar: ¡Eliminar las salidas!              │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   4. DIVIDE Y VENCERÁS                                             │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Dividir el código en mitades                             │  │
│   │ • Verificar qué mitad contiene el error                    │  │
│   │ • Continuar dividiendo esa mitad                           │  │
│   │ • Localizar rápidamente la ubicación del error             │  │
│   │                                                             │  │
│   │    [─────────────────────────────────]                     │  │
│   │             ↓ Error en algún lugar                         │  │
│   │    [───────────────] [───────────────]                     │  │
│   │         ↓ ¿aquí?            no aquí                        │  │
│   │    [───────] [───────]                                     │  │
│   │       ↓ ¡aquí!                                             │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Herramientas de Depuración

```
┌────────────────────────────────────────────────────────────────────┐
│                   HERRAMIENTAS DE DEPURACIÓN                       │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   DEPURADORES INTEGRADOS EN IDE                                    │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Incorporados en entornos de desarrollo                   │  │
│   │ • Visual Studio, Eclipse, IntelliJ, VS Code               │  │
│   │                                                             │  │
│   │ Características:                                           │  │
│   │ ┌─────────────────────────────────────────────────────┐   │  │
│   │ │ • Establecer puntos de interrupción                 │   │  │
│   │ │ • Inspeccionar variables (Watch)                    │   │  │
│   │ │ • Ver pila de llamadas (jerarquía de llamadas)     │   │  │
│   │ │ • Ejecución paso a paso                             │   │  │
│   │ │ • Puntos de interrupción condicionales             │   │  │
│   │ │ • Cambiar valores de variables en tiempo de ejecución│   │  │
│   │ └─────────────────────────────────────────────────────┘   │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   VISTA DEL DEPURADOR (típica)                                     │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ ┌─────────────────┐  ┌──────────────────────────────────┐ │  │
│   │ │ Variables       │  │ Código                            │ │  │
│   │ │ ──────────────  │  │ ──────────────────────────────── │ │  │
│   │ │ x = 5           │  │ 10: int x = 5;                   │ │  │
│   │ │ y = 10          │  │ 11: ● int y = x * 2;             │ │  │
│   │ │ suma = 15       │  │ 12: int suma = x + y;            │ │  │
│   │ └─────────────────┘  │ 13: return suma;                 │ │  │
│   │ ┌─────────────────┐  └──────────────────────────────────┘ │  │
│   │ │ Pila de Llamadas│                                       │  │
│   │ │ ──────────────  │  [Step Over] [Step Into] [Continue]  │  │
│   │ │ main()          │                                       │  │
│   │ │  → calcular()   │                                       │  │
│   │ └─────────────────┘                                       │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Búsqueda Sistemática de Errores

```
┌────────────────────────────────────────────────────────────────────┐
│                  BÚSQUEDA SISTEMÁTICA DE ERRORES                   │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   PASO 1: Reproducir el error                                      │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Documentar los pasos exactos que llevan al error         │  │
│   │ • Verificar reproducibilidad                               │  │
│   │ • Anotar mensaje de error                                  │  │
│   └────────────────────────────────────────────────────────────┘  │
│                              ↓                                     │
│   PASO 2: Delimitar ubicación del error                           │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • ¿Qué función? ¿Qué línea?                                │  │
│   │ • ¿Cuándo ocurre el error?                                 │  │
│   │ • ¿Con qué entradas?                                       │  │
│   └────────────────────────────────────────────────────────────┘  │
│                              ↓                                     │
│   PASO 3: Formar hipótesis                                        │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • ¿Cuál podría ser la causa?                               │  │
│   │ • Hacer una suposición                                     │  │
│   └────────────────────────────────────────────────────────────┘  │
│                              ↓                                     │
│   PASO 4: Probar hipótesis                                        │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Usar herramientas de depuración                          │  │
│   │ • Verificar variables                                      │  │
│   │ • Confirmación o nueva hipótesis                           │  │
│   └────────────────────────────────────────────────────────────┘  │
│                              ↓                                     │
│   PASO 5: Corregir error y probar                                 │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Implementar corrección                                   │  │
│   │ • Probar si el error está corregido                        │  │
│   │ • Prueba de regresión: ¿Sin nuevos errores?               │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Fuentes Comunes de Errores

```
┌────────────────────────────────────────────────────────────────────┐
│                   FUENTES COMUNES DE ERRORES                       │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   ERRORES DE DESPLAZAMIENTO (OFF-BY-ONE)                          │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Bucles desplazados por uno:                                │  │
│   │ PARA i DESDE 1 HASTA 10  ← 10 iteraciones                 │  │
│   │ PARA i DESDE 0 HASTA 10  ← ¡11 iteraciones!               │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   PUNTERO NULO / VARIABLES NO INICIALIZADAS                       │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Variable usada antes de tener un valor:                    │  │
│   │ int x;                                                     │  │
│   │ y = x + 1;  ← ¡x no tiene valor definido!                 │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   COMPARACIONES INCORRECTAS                                        │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Asignación en lugar de comparación:                        │  │
│   │ SI x = 5 ENTONCES    ← Asignación (¡incorrecto!)          │  │
│   │ SI x == 5 ENTONCES   ← Comparación (correcto)             │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   BUCLES INFINITOS                                                 │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Condición de salida nunca alcanzada:                       │  │
│   │ MIENTRAS x > 0                                             │  │
│   │   IMPRIMIR x         ← ¡x nunca se modifica!              │  │
│   │ FIN MIENTRAS                                               │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   PROBLEMAS DE ÁMBITO                                              │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Variable local oculta a la global:                         │  │
│   │ int valor = 10;           ← global                        │  │
│   │ FUNCIÓN test()                                             │  │
│   │   int valor = 5;          ← local, oculta la global       │  │
│   │ ...                                                        │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Depuración vs. Prueba de Escritorio

```
┌────────────────────────────────────────────────────────────────────┐
│             DEPURACIÓN vs. PRUEBA DE ESCRITORIO                    │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   PRUEBA DE ESCRITORIO              DEPURACIÓN                     │
│   ┌──────────────────────────┐     ┌──────────────────────────┐   │
│   │ • Manual, sin computadora│     │ • Con computadora/herram.│   │
│   │ • Antes de la ejecución  │     │ • Durante la ejecución   │   │
│   │ • Recorrer mentalmente   │     │ • Ejecutar realmente     │   │
│   │   el código              │     │   el código              │   │
│   │ • Tabla con valores      │     │ • Vista del depurador    │   │
│   │ • Sin errores de tiempo  │     │ • Errores de tiempo de   │   │
│   │   de ejecución visibles  │     │   ejecución reales       │   │
│   └──────────────────────────┘     └──────────────────────────┘   │
│                                                                     │
│   Ambos métodos se complementan:                                   │
│   1. Prueba de escritorio → Encontrar errores de lógica antes     │
│   2. Depuración → Localizar errores de tiempo de ejecución        │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Bug** | Error en el software |
| **Depuración** | Proceso de encontrar y corregir errores |
| **Breakpoint** | Punto de parada en el código |
| **Step Over** | Siguiente línea, saltar funciones |
| **Step Into** | Entrar en la función |
| **Watch** | Monitorear una variable |
| **Pila de Llamadas** | Jerarquía de llamadas de funciones |

---

## Consejos para el Examen

### Preguntas Comunes del Examen

- ¿Qué es la depuración?
- Nombrar estrategias de depuración
- Explicar la diferencia entre Step Over y Step Into

### Importante Recordar

- Depuración = **búsqueda sistemática de errores**
- **Breakpoints** detienen la ejecución
- **Step Over:** Ejecutar función como un todo
- **Step Into:** Entrar en la función
- **Depuración con print:** Simple, ¡pero eliminar las salidas!
- ¡Siempre poder **reproducir el error**!
- Después de corregir: **Prueba de regresión**

---

## Ejercicios Prácticos

### Ejercicio 1
¿Qué estrategia de depuración usarías si sabes que el error está en algún lugar de una función de 500 líneas?

**Solución:**
**Divide y Vencerás:**
1. Establecer breakpoint en el medio de la función (alrededor de línea 250)
2. Verificar si el error ocurre antes o después de este punto
3. Continuar dividiendo la mitad afectada
4. Delimitar rápidamente la ubicación del error

Alternativa: Búsqueda binaria con sentencias print en ubicaciones estratégicas.

### Ejercicio 2
¿Cuál es la diferencia entre Step Over y Step Into al depurar?

**Solución:**
| Step Over | Step Into |
|-----------|-----------|
| Ejecuta la línea actual | Ejecuta la línea actual |
| Salta a la siguiente línea | Para llamadas a función: ENTRA EN la función |
| Las funciones se ejecutan completamente | La función se recorre línea por línea |
| Bueno para funciones ya probadas | Bueno para examinar una función |

### Ejercicio 3
Encuentra el error en el siguiente pseudocódigo:

```
FUNCIÓN suma(n)
  resultado = 0
  PARA i DESDE 1 HASTA n
    resultado = resultado + 1
  FIN PARA
  RETORNAR resultado
FIN FUNCIÓN
```

**Solución:**
El error está en la línea: `resultado = resultado + 1`

La función debería calcular la suma de 1 a n, pero siempre suma solo 1.

**Corrección:**
`resultado = resultado + i`

La variable `i` (el contador del bucle) debe sumarse, no la constante 1.

---

## Referencias Cruzadas

- [06-02-06 Prueba de Escritorio](../06-02-programming/06-02-06-desk-check.md) - Revisión manual de código
- [06-02-07 Depuración de Código](../06-02-programming/06-02-07-code-debugging.md) - Tipos de errores
- [06-06-02 Pruebas](./06-06-02-testing.md) - Pruebas de software
- [06-02-02 Estructuras de Control](../06-02-programming/06-02-02-control-structures.md) - Bucles
