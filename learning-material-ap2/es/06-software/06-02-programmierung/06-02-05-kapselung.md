# Encapsulamiento de Datos y Visibilidad

## Objetivos de Aprendizaje

Después de este capítulo deberías poder:
- Explicar el encapsulamiento de datos y su utilidad
- Aplicar las cuatro visibilidades/modificadores de acceso
- Usar getters/setters con validación

---

## Contenido Principal

El **encapsulamiento de datos** (alemán: *Kapselung*) oculta los datos internos de una clase y permite el acceso solo a través de métodos definidos. Los atributos son `private` y el acceso se realiza mediante **getters/setters**. Ventajas: **integridad de los datos**, **mantenibilidad**, **acceso controlado** (validación/lógica).

### Modificadores de Acceso (Visibilidad)

| Modificador | Símbolo (UML) | Visible en |
|-------------|---------------|------------|
| **public** | `+` | en todas partes |
| **protected** | `#` | clase + subclases (+ paquete) |
| **(package-private)** | `~` | mismo paquete |
| **private** | `-` | solo dentro de la clase |

> **Regla general:** atributos `private`, métodos tan restrictivos como sea posible (Least Privilege).

### Getters/Setters con Validación

```java
public class Konto {
    private double kontostand;              // gekapselt

    public double getKontostand() {         // Getter
        return kontostand;
    }
    public void einzahlen(double betrag) {  // Setter mit Regel
        if (betrag <= 0) return;            // ungültige Eingabe abweisen
        kontostand += betrag;
    }
}
```

Contraejemplo (malo): `public double kontostand;` – cualquiera puede fijar el valor directamente (incluso negativo) → sin control.

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Encapsulamiento** (*Kapselung*) | Ocultar atributos, acceso mediante métodos |
| **public/protected/private** | Niveles de acceso |
| **Getter/Setter** | Métodos de lectura/escritura, a menudo con validación |

---

## Consejos para el Examen

- Conocer las **cuatro visibilidades** y sus símbolos UML (`+ # ~ -`).
- El **encapsulamiento** se menciona expresamente en el catálogo – saber indicar su utilidad (integridad, control).
- Setter con **validación** como ejemplo típico.

---

## Ejercicio Práctico

**Tarea:** Encapsula una clase `Produkt` con un `private preis` y un setter que rechace precios negativos. Indica las visibilidades apropiadas.

---

## Referencias

- [06-02-03 Orientación a Objetos (OOP)](./06-02-03-oop.md)
- [06-04-09 Diagrama de Clases](../06-04-uml/06-04-09-klassendiagramm.md)
