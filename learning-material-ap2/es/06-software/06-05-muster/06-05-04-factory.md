# Factory Pattern

## Objetivos de Aprendizaje

Después de este capítulo deberías:
- Explicar el propósito del patrón Factory
- Distinguir la instanciación directa de la creación a través de una fábrica
- Nombrar las ventajas (intercambiabilidad, extensibilidad)

---

## Contenido Principal

El **patrón Factory** (patrón creacional) **encapsula la creación de objetos** en un método/clase central. El cliente pide un objeto a la fábrica en lugar de crearlo él mismo con `new` – no necesita conocer la clase concreta.

### Ventajas

| Ventaja | Significado |
|---------|-----------|
| **Creación centralizada de objetos** | Creación en un solo lugar |
| **Interfaz uniforme** | El cliente usa solo el supertipo común |
| **Intercambiabilidad** | la clase concreta se cambia fácilmente |
| **Extensibilidad** | nuevos tipos sin modificar el código del cliente |

### Ejemplo (Java)

```java
abstract class Fahrzeug { abstract void fahre(); }
class Auto extends Fahrzeug { void fahre() { /* ... */ } }
class Motorrad extends Fahrzeug { void fahre() { /* ... */ } }

class FahrzeugFabrik {
    static Fahrzeug erstelle(String typ) {
        return switch (typ) {
            case "auto" -> new Auto();
            case "motorrad" -> new Motorrad();
            default -> throw new IllegalArgumentException(typ);
        };
    }
}

// Client kennt nur den Obertyp Fahrzeug:
Fahrzeug f = FahrzeugFabrik.erstelle("auto");
f.fahre();
```

> **Analogía:** *Pides* un objeto – como en la pizzería: dices *qué* quieres, no *cómo* se construye.

---

## Términos Clave

| Término | Explicación |
|---------|-----------|
| **Factory** | Encapsula la creación de objetos tras un método |
| **Polimorfismo** | El cliente trabaja con el supertipo común |
| **Intercambiabilidad** | Clase concreta cambiable sin modificar el cliente |

---

## Consejos para el Examen

- Clasificación: **patrón creacional**.
- Núcleo: **encapsular la creación**, el cliente solo conoce el supertipo → usa **polimorfismo**.
- Resaltar la ventaja de la **extensibilidad** (nueva clase sin modificar el cliente).

---

## Ejercicio Práctico

**Tarea:** Diseña una `FormFabrik` que, según el parámetro, cree `Kreis` o `Rechteck` (ambos heredan de `Form`), y muestra el uso por parte del cliente a través del supertipo `Form`.

---

## Referencias

- [06-05-03 Singleton](./06-05-03-singleton.md)
- [06-02-03 Orientación a objetos (POO)](../06-02-programmierung/06-02-03-oop.md)
