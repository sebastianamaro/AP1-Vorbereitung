# Clases Abstractas, Interfaces y Generics

## Objetivos de Aprendizaje

Después de este capítulo deberías poder:
- Distinguir clases abstractas e interfaces
- Saber cuándo usar cada una
- Explicar los generics y su utilidad (seguridad de tipos)

---

## Contenido Principal

### Clase Abstracta

Una **clase abstracta** es un "plano" que **no se puede instanciar**. Puede contener métodos **concretos** y **abstractos** (sin implementación); las subclases deben implementar los métodos abstractos.

```java
abstract class Fahrzeug {
    void hupe() { /* konkret */ }
    abstract void starte();          // muss überschrieben werden
}
class Motorrad extends Fahrzeug {
    void starte() { /* ... */ }
}
```

### Interface

Una **interface** define un **contrato** (firmas de métodos) sin implementación. Una clase puede implementar **varias** interfaces (herencia múltiple de tipos).

```java
interface Zahlbar { double betrag(); }
class Rechnung implements Zahlbar {
    public double betrag() { return 100.0; }
}
```

### Clase Abstracta vs. Interface

| | Clase abstracta | Interface |
|--|-----------------|-----------|
| Instanciable | no | no |
| Atributos | sí (estado) | solo constantes |
| Métodos | concretos + abstractos | firmas (+ default) |
| Constructor | sí | no |
| Uso múltiple | solo **una** superclase | **varias** implementables |
| Uso | base común + código | contrato de capacidad puro |

> **Regla general:** "es-un" con código común → clase abstracta; "puede-hacer"/capacidad → interface.

### Generics

Los **generics** parametrizan tipos y crean **seguridad de tipos** sin casts.

```java
class Box<T> { private T inhalt; void set(T x){inhalt=x;} T get(){return inhalt;} }
Box<String> b = new Box<>();   // nur Strings, kein Cast nötig
```

Sin generics habría que trabajar con `Object` + casts manuales (propenso a errores). Con generics: más flexible, más seguro, reutilizable.

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Clase abstracta** | No instanciable; métodos concretos + abstractos |
| **Interface** | Contrato sin implementación; implementable varias veces |
| **Generics** | Parámetros de tipo para la seguridad de tipos (`<T>`) |

---

## Consejos para el Examen

- **Clase abstracta vs. interface** (¡la tabla!) – un clásico recurrente: una superclase vs. varias interfaces; atributos/constructor solo en la clase abstracta.
- Generics = **seguridad de tipos sin cast**.
- "es-un + código" → clase abstracta; "capacidad" → interface.

---

## Ejercicio Práctico

**Tarea:** (1) Para "todas las formas tienen un `flaeche()`", decide entre una clase abstracta y una interface y justifícalo. (2) ¿Por qué `List<String>` es más seguro que una lista de `Object`?

---

## Referencias

- [06-02-03 Orientación a Objetos (OOP)](./06-02-03-oop.md)
- [06-05-04 Factory](../06-05-muster/06-05-04-factory.md)
