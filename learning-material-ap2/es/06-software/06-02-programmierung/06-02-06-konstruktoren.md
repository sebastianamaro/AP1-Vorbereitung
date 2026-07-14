# Constructores

## Objetivos de Aprendizaje

Después de este capítulo deberías poder:
- Conocer la función y las reglas de un constructor
- Aplicar la sobrecarga de constructores
- Distinguir constructores por defecto y parametrizados

---

## Contenido Principal

Un **constructor** crea e inicializa un objeto. Reglas: **mismo nombre que la clase**, **sin valor de retorno** (ni siquiera `void`).

**Tres tareas:** (1) reservar memoria, (2) inicializar las variables de instancia, (3) devolver una referencia al objeto.

Sin un constructor propio, el compilador proporciona un **constructor por defecto** (sin parámetros); en cuanto defines uno propio, ese automático desaparece.

### Sobrecarga (Overloading)

Varios constructores con **listas de parámetros distintas** (cantidad/tipo). El compilador elige el adecuado según los argumentos.

```java
public class Hund {
    private String name;
    private int alter;

    public Hund() { this("Unbekannt", 0); }          // ruft anderen Konstruktor (this)
    public Hund(String name) { this(name, 0); }
    public Hund(String name, int alter) {            // "Haupt"-Konstruktor
        this.name = name;
        this.alter = alter;
    }
}

new Hund();                 // Standardwerte
new Hund("Rex");            // nur Name
new Hund("Rex", 3);         // Name + Alter
```

- **`this(...)`** llama a otro constructor de la misma clase (encadenamiento de constructores).
- **`super(...)`** llama al constructor de la superclase (con herencia, como primera instrucción).

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Constructor** | Crea/inicializa un objeto; nombre de la clase, sin valor de retorno |
| **Constructor por defecto** | Constructor sin parámetros (automático si no se define ninguno) |
| **Sobrecarga** | Varios constructores con distintas listas de parámetros |
| **this()/super()** | Encadenamiento de constructores dentro de la clase/hacia la superclase |

---

## Consejos para el Examen

- Recordar las reglas: **nombre = nombre de la clase, sin valor de retorno**.
- **Sobrecarga** = listas de parámetros distintas (no solo nombres distintos).
- En cuanto existe un constructor propio, ya **no** hay constructor por defecto automático.

---

## Ejercicio Práctico

**Tarea:** Escribe una clase `Rechteck` con un constructor `(breite, hoehe)` y un constructor sobrecargado `(seite)` para un cuadrado (usa `this(...)`).

---

## Referencias

- [06-02-05 Encapsulamiento de Datos](./06-02-05-kapselung.md)
- [06-02-08 Clases: abstractas/Interface/Generics](./06-02-08-klassen-abstrakt-interface.md)
