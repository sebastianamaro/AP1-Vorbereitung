# Singleton Pattern

## Objetivos de Aprendizaje

Después de este capítulo deberías:
- Explicar el propósito del patrón Singleton
- Conocer y aplicar los tres bloques fundamentales
- Nombrar casos de uso típicos

---

## Contenido Principal

El **Singleton** (patrón creacional) garantiza que exista **exactamente una instancia** de una clase y ofrece un **punto de acceso global** a ella.

**Uso:** recursos compartidos/control central – p. ej. **conexión a base de datos**, configuración, logger.

### Tres bloques fundamentales

| Bloque | Propósito |
|----------|-------|
| **constructor privado** | impide la creación desde fuera (`new`) |
| **variable estática** | mantiene la única instancia |
| **método de acceso estático** | devuelve la instancia (la crea en la primera llamada – *lazy*) |

### Ejemplo (Java)

```java
public class Datenbank {
    private static Datenbank instanz;      // hält die einzige Instanz
    private Datenbank() { }                 // privat -> kein new von außen

    public static Datenbank getInstanz() {  // globaler Zugriffspunkt
        if (instanz == null) {              // lazy Initialisierung
            instanz = new Datenbank();
        }
        return instanz;
    }
}
```

> **Analogía:** El Singleton es como el *único gerente* del sistema – solo hay uno.
> **Nota:** En programas concurrentes, `getInstanz()` debe ser **thread-safe** (p. ej. `synchronized` o un singleton de tipo enum).

---

## Términos Clave

| Término | Explicación |
|---------|-----------|
| **Singleton** | Exactamente una instancia + acceso global |
| **Constructor privado** | Bloquea la creación externa de instancias |
| **Inicialización lazy** | La instancia se crea solo cuando se necesita |

---

## Consejos para el Examen

- Nombrar con seguridad los **tres bloques** (constructor privado, variable estática, método estático).
- Clasificación: **patrón creacional**.
- Justificar el uso con un ejemplo (conexión a BD/logger).

---

## Ejercicio Práctico

**Tarea:** Implementa una clase Singleton `Logger` con constructor privado y `getInstanz()` y explica por qué el constructor debe ser privado.

---

## Referencias

- [06-05-04 Factory](./06-05-04-factory.md)
- [06-02-08 Clases: abstractas/interface/generics](../06-02-programmierung/06-02-08-klassen-abstrakt-interface.md)
