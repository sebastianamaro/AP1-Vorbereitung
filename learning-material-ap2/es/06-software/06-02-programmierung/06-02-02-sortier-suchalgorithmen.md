# Algoritmos de Ordenamiento y Búsqueda

## Objetivos de Aprendizaje

Después de este capítulo deberías poder:
- Describir y comparar los principales métodos de ordenamiento
- Distinguir entre búsqueda lineal y binaria
- Clasificar de forma aproximada la notación O

---

## Contenido Principal

### Algoritmos de Búsqueda

| Método | Requisito | Complejidad | Idea |
|--------|-----------|-------------|------|
| **Búsqueda lineal** | ninguno | O(n) | Recorrer elemento por elemento |
| **Búsqueda binaria** | datos **ordenados** | O(log n) | Dividir a la mitad el rango de búsqueda (comparar el centro) |

> La búsqueda binaria es mucho más rápida, pero requiere que los datos estén **ordenados**.

### Algoritmos de Ordenamiento

| Método | Idea | Promedio | ¿Estable? |
|--------|------|----------|-----------|
| **Bubble Sort** | intercambiar elementos adyacentes, "los mayores burbujean hacia arriba" | O(n²) | sí |
| **Selection Sort** | seleccionar cada vez el elemento más pequeño y ponerlo al principio | O(n²) | no |
| **Insertion Sort** | insertar un elemento en la parte ya ordenada | O(n²) | sí |
| **Quicksort** | divide y vencerás con un pivote | O(n log n), peor caso O(n²) | no |
| **Mergesort** | dividir, ordenar, combinar | O(n log n) | sí |

- **Métodos simples** (Bubble/Selection/Insertion): O(n²), fáciles de entender, para conjuntos de datos pequeños.
- **Métodos eficientes** (Quicksort/Mergesort): O(n log n), para grandes conjuntos de datos.

### Notación O (Landau)

Describe el **crecimiento** del esfuerzo con el tamaño de la entrada n:

`O(1) < O(log n) < O(n) < O(n log n) < O(n²) < O(2ⁿ)`

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Notación O** | Describe el crecimiento asintótico del tiempo de ejecución |
| **Búsqueda binaria** | Búsqueda por división a la mitad sobre datos ordenados, O(log n) |
| **Divide y vencerás** | Descomponer el problema de forma recursiva (Quicksort, Mergesort) |
| **Estabilidad** | Los elementos iguales conservan su orden |

---

## Consejos para el Examen

- **La búsqueda binaria necesita datos ordenados** – una pregunta trampa frecuente.
- Conocer las complejidades de los métodos estándar (simples = O(n²), Quick/Merge = O(n log n)).
- Tarea típica: demostrar una pasada de ordenamiento **paso a paso** (p. ej. Bubble Sort sobre una lista pequeña).

---

## Ejercicio Práctico

**Tarea (según ConSystem GmbH):** (1) Compara la búsqueda lineal y la binaria. (2) Demuestra una pasada de Bubble Sort sobre la lista [5, 2, 8, 1].

<details>
<summary>Pista de solución</summary>

Pasada de Bubble 1: [2,5,8,1] → [2,5,8,1] → [2,5,1,8]; tras más pasadas: [1,2,5,8].

</details>

---

## Referencias

- [06-02-04 Análisis de Pseudocódigo](./06-02-04-pseudocode-analyse.md)
- [06-02-03 Orientación a Objetos (OOP)](./06-02-03-oop.md)
