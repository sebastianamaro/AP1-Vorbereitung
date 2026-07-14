# Excepciones y Colecciones

## Objetivos de Aprendizaje

Después de este capítulo deberías poder:
- Aplicar el manejo de excepciones con try/catch
- Distinguir List, Set y Map
- Elegir la colección adecuada

---

## Contenido Principal

### Manejo de Excepciones (Exceptions)

Una **excepción** señala un error en tiempo de ejecución. Con **try/catch** se captura en lugar de dejar que el programa se caiga.

```java
try {
    int e = 10 / teiler;
} catch (ArithmeticException ex) {   // z. B. Division durch 0
    System.out.println("Fehler: " + ex.getMessage());
} finally {
    // wird immer ausgeführt (z. B. Ressourcen schließen)
}
```

- **`try`** – bloque supervisado; **`catch`** – manejo según el tipo de excepción; **`finally`** – se ejecuta siempre.
- Las excepciones **checked** deben manejarse/declararse; las **unchecked** (RuntimeException) no necesariamente.
- **`throw`** lanza una excepción tú mismo; **`throws`** la declara en la firma.

### Colecciones (Java Collections Framework)

| Tipo | Orden | Duplicados | Ejemplo |
|------|-------|------------|---------|
| **List** | ordenado (índice) | permitidos | `ArrayList<String>` |
| **Set** | sin orden* | **ninguno** | `HashSet<String>` |
| **Map** | clave→valor | claves únicas | `HashMap<Integer,String>` |

```java
List<String> namen = new ArrayList<>();      // geordnet, Duplikate
Set<String>  tags  = new HashSet<>();         // eindeutig
Map<Integer,String> personen = new HashMap<>(); // Key-Value
personen.put(1, "Anna");
```

Elección: **List** para orden/índice, **Set** para unicidad, **Map** para asociación clave-valor.

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **try/catch/finally** | Manejo de excepciones |
| **checked/unchecked** | De manejo obligatorio vs. no |
| **List/Set/Map** | Ordenado / único / clave-valor |

---

## Consejos para el Examen

- Conocer **try/catch/finally** y el flujo (finally siempre se ejecuta).
- Distinguir con seguridad **List vs. Set vs. Map** (orden/duplicados/clave-valor) – una pregunta de asociación frecuente.
- Justificar la colección adecuada para un escenario.

---

## Ejercicio Práctico

**Tarea:** (1) Captura una posible `NumberFormatException` al parsear una entrada del usuario. (2) ¿Qué colección es adecuada para "direcciones de correo electrónico únicas" y por qué?

---

## Referencias

- [06-02-08 Clases: abstractas/Interface/Generics](./06-02-08-klassen-abstrakt-interface.md)
- [06-06-01 Depuración (Debugging)](../06-06-qualitaet-ux/06-06-01-debugging.md)
