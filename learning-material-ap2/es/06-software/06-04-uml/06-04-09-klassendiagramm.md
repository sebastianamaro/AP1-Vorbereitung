# Diagrama de Clases (Klassendiagramm)

## Objetivos de Aprendizaje

Después de este capítulo deberías:
- Representar clases con atributos, métodos y visibilidades
- Modelar relaciones (asociación, agregación, composición, Vererbung / herencia) con multiplicidades
- Crear un diagrama de clases a partir de una descripción

---

## Contenido Principal

El **diagrama de clases** (diagrama de estructura) es el **diagrama UML central** de la POO. Muestra las clases, sus características y sus relaciones.

### Estructura de una clase

```
┌────────────────────┐
│      Konto         │   ← nombre de la clase
├────────────────────┤
│ - kontonummer:int  │   ← atributos (con visibilidad)
│ - saldo:double     │
├────────────────────┤
│ + einzahlen(b:double)│  ← métodos
│ + abheben(b:double)  │
└────────────────────┘
```

**Visibilidades:** `+` public, `-` private, `#` protected, `~` package.

### Relaciones

| Relación | Símbolo | Significado |
|-----------|--------|-----------|
| **Asociación** | línea | «conoce a» |
| **Agregación** | rombo vacío | «tiene un» (la parte puede existir por sí sola) |
| **Composición** | rombo relleno | «se compone de» (la parte muere con el todo) |
| **Generalización/Vererbung (herencia)** | flecha con punta hueca | «es un» |
| **Dependencia** | flecha discontinua | «usa» |

**Ejemplos de diagrama:**

![Asociación (cliente – pedido)](../../../assets/diagrams/uml_class_association.png)

![Agregación (pedido ◇ producto)](../../../assets/diagrams/uml_class_aggregation.png)

![Composición (factura ◆ línea de factura)](../../../assets/diagrams/uml_class_composition.png)

![Herencia / Vererbung (cliente ← cliente particular/empresa)](../../../assets/diagrams/uml_class_vererbung.png)

<!-- Fuente de la imagen: ap2.online (marcador de posición — reemplazar por un gráfico propio antes de la publicación, véase assets/diagrams/README.md) -->

### Multiplicidades

`1`, `0..1`, `*` (muchos), `1..*` (al menos uno). Ejemplo: `Kunde 1 ──── * Bestellung` (un cliente tiene muchos pedidos).

```
Person ◄─────────△ Kunde        (Vererbung / herencia: Kunde es una Person)
Bestellung ◆──── Bestellposition (composición)
```

---

## Términos Clave

| Término | Explicación |
|---------|-----------|
| **Sichtbarkeit (visibilidad)** | +/-/#/~ (public/private/protected/package) |
| **Agregación vs. composición** | débil (rombo vacío) vs. dependiente de la existencia (rombo relleno) |
| **Multiplizität (multiplicidad)** | Número de objetos implicados (1, *, 0..1, 1..*) |

---

## Consejos para el Examen

- **Agregación (rombo vacío) vs. composición (rombo relleno)** – un clásico.
- Introduce correctamente las visibilidades y las multiplicidades.
- Estrecha relación con la **POO** ([06-02-03](../06-02-programmierung/06-02-03-oop.md)) y con el **modelo ER** (BD).

---

## Ejercicio Práctico

**Tarea:** Modela un diagrama de clases para `Kunde`, `Bestellung`, `Bestellposition`, `Artikel` con visibilidades, multiplicidades y relaciones adecuadas (incluida una composición).

---

## Referencias

- [06-02-03 Orientación a objetos (POO)](../06-02-programmierung/06-02-03-oop.md)
- [06-03-02 Modelo ER](../06-03-datenbanken/06-03-02-er-modell.md)
