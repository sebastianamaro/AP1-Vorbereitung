# Paradigmas de Programación

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Conocer los paradigmas de programación más importantes
- Distinguir entre programación imperativa y declarativa
- Comprender la programación orientada a objetos
- Asignar lenguajes a paradigmas

---

## Contenido Principal

### ¿Qué es un Paradigma de Programación?

Un **paradigma de programación** es un estilo fundamental o forma de pensar en la programación que determina cómo se resuelven los problemas.

```
┌─────────────────────────────────────────────────────────────────┐
│                  PARADIGMAS DE PROGRAMACIÓN                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                      PARADIGMAS                                  │
│                          │                                      │
│          ┌───────────────┴───────────────┐                     │
│          │                               │                     │
│    ┌─────▼─────┐                  ┌─────▼─────┐               │
│    │ IMPERATIVO│                  │DECLARATIVO│               │
│    │           │                  │           │               │
│    │ "CÓMO" se │                  │ "QUÉ"     │               │
│    │ hace      │                  │ debe      │               │
│    │           │                  │ lograrse  │               │
│    └─────┬─────┘                  └─────┬─────┘               │
│          │                               │                     │
│    ┌─────┴─────┐               ┌────────┴────────┐            │
│    │           │               │                 │            │
│    ▼           ▼               ▼                 ▼            │
│ Procedural  Orientado      Funcional        Lógico           │
│             a objetos                                         │
│                                                                │
└─────────────────────────────────────────────────────────────────┘
```

---

### Programación Imperativa

En la **programación imperativa**, describes paso a paso **CÓMO** se resuelve un problema.

```
┌────────────────────────────────────────────────────────────────┐
│                 PROGRAMACIÓN IMPERATIVA                         │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Características:                                              │
│  • Las instrucciones se ejecutan una tras otra                 │
│  • El estado se gestiona mediante variables                    │
│  • Estructuras de control (if, while, for)                     │
│                                                                │
│  Ejemplo (calcular suma):                                      │
│                                                                │
│    suma = 0                        // Inicializar estado       │
│    para i desde 1 hasta 5:         // Bucle                    │
│        suma = suma + i             // Cambiar estado           │
│    salida(suma)                    // Resultado: 15            │
│                                                                │
│  Los pasos describen CÓMO se calcula la suma                   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### Programación Procedural

| Aspecto | Descripción |
|---------|-------------|
| **Enfoque** | Descomposición en procedimientos/funciones |
| **Organización** | Funciones que procesan datos |
| **Lenguajes** | C, Pascal, BASIC |

#### Programación Orientada a Objetos (OOP)

| Aspecto | Descripción |
|---------|-------------|
| **Enfoque** | Organización en objetos con datos y métodos |
| **Conceptos Básicos** | Clases, Objetos, Atributos, Métodos |
| **Lenguajes** | Java, C#, Python, C++ |

---

### Programación Declarativa

En la **programación declarativa**, describes **QUÉ** debe lograrse, no cómo.

```
┌────────────────────────────────────────────────────────────────┐
│                PROGRAMACIÓN DECLARATIVA                         │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Características:                                              │
│  • Describe el resultado deseado                               │
│  • Sin flujos de control explícitos                            │
│  • El "cómo" es manejado por el entorno de ejecución           │
│                                                                │
│  Ejemplo (calcular suma, funcional):                           │
│                                                                │
│    suma = sum([1, 2, 3, 4, 5])   // QUÉ: Suma de la lista      │
│                                                                │
│  El CÓMO no es importante para el desarrollador               │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### Programación Funcional

| Aspecto | Descripción |
|---------|-------------|
| **Enfoque** | Funciones como bloques de construcción centrales |
| **Características** | Sin efectos secundarios, inmutabilidad |
| **Lenguajes** | Haskell, Erlang, parcialmente Python |

#### Programación Lógica

| Aspecto | Descripción |
|---------|-------------|
| **Enfoque** | Reglas lógicas y hechos |
| **Características** | El sistema deriva respuestas |
| **Lenguajes** | Prolog |

---

### Comparación: Imperativo vs. Declarativo

| Aspecto | Imperativo | Declarativo |
|---------|------------|-------------|
| **Pregunta** | "¿Cómo?" | "¿Qué?" |
| **Describe** | Pasos hacia la solución | Resultado deseado |
| **Ejemplo** | Recorrer elementos | Llamar función filter |
| **Control** | El desarrollador determina el flujo | El sistema determina el flujo |

---

### Programación Orientada a Objetos en Detalle

```
┌────────────────────────────────────────────────────────────────┐
│            PROGRAMACIÓN ORIENTADA A OBJETOS                     │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  CLASE (Plantilla)               OBJETO (instancia concreta)   │
│  ┌────────────────────┐        ┌────────────────────┐        │
│  │       Coche        │        │    miCoche         │        │
│  ├────────────────────┤        ├────────────────────┤        │
│  │ - marca: String    │        │ marca = "VW"       │        │
│  │ - color: String    │───────►│ color = "rojo"     │        │
│  │ - cv: Integer      │        │ cv = 150           │        │
│  ├────────────────────┤        ├────────────────────┤        │
│  │ + arrancar()       │        │ arrancar()         │        │
│  │ + frenar()         │        │ frenar()           │        │
│  │ + acelerar()       │        │ acelerar()         │        │
│  └────────────────────┘        └────────────────────┘        │
│                                                                │
│  Atributos = Propiedades (datos)                               │
│  Métodos = Capacidades (funciones)                             │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Término | Explicación |
|---------|-------------|
| **Clase** | Plantilla/modelo para objetos |
| **Objeto** | Instancia concreta de una clase |
| **Atributo** | Propiedad/elemento de datos |
| **Método** | Función dentro de una clase |

---

### Lenguajes y Sus Paradigmas

| Lenguaje | Paradigmas |
|----------|-----------|
| **C** | Procedural |
| **Java** | Orientado a objetos (principal) |
| **C#** | Orientado a objetos, parcialmente funcional |
| **Python** | Multi-paradigma (OOP, procedural, funcional) |
| **JavaScript** | Multi-paradigma |
| **Haskell** | Funcional |
| **SQL** | Declarativo |
| **HTML/CSS** | Declarativo (marcado) |

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Paradigma** | Estilo fundamental de programación |
| **Imperativo** | Describe CÓMO (pasos) |
| **Declarativo** | Describe QUÉ (objetivo) |
| **Procedural** | Imperativo con procedimientos/funciones |
| **OOP** | Programación Orientada a Objetos |
| **Funcional** | Declarativo con funciones |
| **Clase** | Plantilla para objetos |
| **Objeto** | Instancia de una clase |

---

## Consejos para el Examen

### Preguntas Comunes de Examen

- ¿Cuál es la diferencia entre imperativo y declarativo?
- ¿Qué son clases y objetos?
- Nombra características de la programación orientada a objetos

### Importante Recordar

- **Imperativo** = CÓMO (paso a paso)
- **Declarativo** = QUÉ (describir resultado)
- **OOP** = Clases, Objetos, Atributos, Métodos
- **Python, Java** = Orientado a objetos

---

## Ejercicios Prácticos

### Ejercicio 1
¿Cuál es la diferencia entre programación imperativa y declarativa?

**Solución:**
- **Imperativo:** Describe **CÓMO** se resuelve un problema (pasos, instrucciones)
- **Declarativo:** Describe **QUÉ** debe lograrse (resultado)

Ejemplo: Filtrar una lista
- Imperativo: Recorrer todos los elementos, verificar condición, agregar a nueva lista
- Declarativo: `filter(lista, condicion)` - solo especifica el resultado deseado

### Ejercicio 2
Explica la diferencia entre una clase y un objeto.

**Solución:**
- **Clase:** Una plantilla/modelo que define atributos (propiedades) y métodos (funciones). Ejemplo: Clase "Coche" con atributos marca, color, cv
- **Objeto:** Una instancia concreta de una clase con valores concretos. Ejemplo: Objeto "miCoche" con marca="VW", color="rojo", cv=150

### Ejercicio 3
Asigna los siguientes lenguajes a su paradigma principal: C, Java, SQL

**Solución:**
| Lenguaje | Paradigma Principal |
|----------|---------------------|
| C | Procedural (imperativo) |
| Java | Orientado a objetos |
| SQL | Declarativo |

---

## Referencias Cruzadas

- [06-02-04 Fundamentos de OOP](../06-02-programming/06-02-04-oop-fundamentals.md) - OOP en detalle
- [06-03-01 Diagrama de Clases](../06-03-uml/06-03-01-class-diagram.md) - UML para clases
- [06-02-03 Procedimientos y Funciones](../06-02-programming/06-02-03-procedures-functions.md) - Conceptos procedurales
