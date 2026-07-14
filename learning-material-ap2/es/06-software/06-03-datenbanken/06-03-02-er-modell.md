# Modelo ER (Modelo Entidad-Relación)

## Objetivos de Aprendizaje

Después de este capítulo deberías poder:
- Modelar entidades, atributos y relaciones
- Indicar cardinalidades
- Convertir un modelo ER en tablas

---

## Contenido Principal

### Componentes

| Elemento | Representación | Ejemplo |
|----------|----------------|---------|
| **Entidad (tipo)** | Rectángulo | Kunde, Artikel |
| **Atributo** | Elipse | Name, Preis |
| **Atributo clave** | atributo subrayado | KundenID |
| **Relación** | Rombo | „kauft“, „gehört zu“ |

### Cardinalidades

Indican **cuántas** entidades se relacionan entre sí en una relación:

| Tipo | Significado | Ejemplo |
|------|-------------|---------|
| **1:1** | exactamente uno a uno | Person ↔ Personalausweis |
| **1:n** | uno a muchos | Kategorie → Artikel |
| **n:m** | muchos a muchos | Student ↔ Kurs |

(También es habitual la notación (mín,máx), p. ej. (0,n).)

**Ejemplos de diagramas:**

![Relación 1:1 (Person ↔ Ausweis)](../../../assets/diagrams/erd_1_1.png)

![Relación 1:n (Kunde → Bestellungen)](../../../assets/diagrams/erd_1_n.png)

![Relación m:n con tabla intermedia (Student ↔ Kurs)](../../../assets/diagrams/erd_m_n.png)

<!-- Fuente de la imagen: ap2.online (con permiso) -->

### Conversión al Modelo Relacional

- **1:n** → clave foránea en el lado "n" (la tabla n recibe la clave del lado 1).
- **n:m** → **tabla intermedia (tabla de enlace)** con dos claves foráneas (¡n:m no existe directamente en las bases de datos relacionales!).
- **1:1** → clave foránea en un lado (a menudo con UNIQUE).

```
Kategorie (1) ────< gehört zu >──── (n) Artikel
   ⇒ Artikel.KategorieID  (FOREIGN KEY)
```

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Entidad** | Objeto del mundo real (tabla) |
| **Cardinalidad** | Relación de cantidad (1:1, 1:n, n:m) |
| **Tabla intermedia** | Resuelve n:m en dos 1:n |
| **Atributo clave** | Rasgo de identificación único |

---

## Consejos para el Examen

- **n:m se resuelve mediante una tabla intermedia** – tarea estándar.
- En 1:n, colocar la clave foránea **en el lado n**.
- Saber dibujar el modelo ER **y** convertirlo en tablas (con claves).

---

## Ejercicio Práctico

**Tarea (según ConSystem GmbH):** Modela un modelo ER para „Kunde bestellt Artikel“ con cardinalidades y convierte la relación n:m en tablas relacionales.

<details>
<summary>Pista de solución</summary>

Kunde (1) —< Bestellung >— (n) … y Bestellung contiene Artikel (n:m) → tabla intermedia `Bestellposition (BestellID, ArtikelID, Menge)`.

</details>

---

## Diagrama de Ejemplo

![Modelo ER completo (ejemplo: alquiler de coches)](../../../assets/diagrams/erd_aufgabe.png)

<!-- Fuente de la imagen: ap2.online (con permiso) -->

---

## Referencias

- [06-03-03 Normalización](./06-03-03-normalisierung.md)
- [06-03-01 Script SQL](./06-03-01-sql-skript.md)
