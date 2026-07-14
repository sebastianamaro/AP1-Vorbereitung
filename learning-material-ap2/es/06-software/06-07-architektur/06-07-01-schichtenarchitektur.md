# Arquitectura en capas (3 capas)

## Objetivos de Aprendizaje

Después de este capítulo deberías:
- Nombrar las tres capas de una aplicación clásica
- Asignar tareas y tecnologías típicas a cada capa
- Explicar el beneficio de la separación

---

## Contenido Principal

La **arquitectura de 3 capas** (Three-Tier) separa una aplicación en capas claramente delimitadas:

| Capa | Tarea | Tecnologías típicas |
|---------|---------|-----------------------|
| **Capa de presentación** | interfaz de usuario, entrada/salida | HTML/CSS/JS, React, Angular |
| **Capa de lógica** (lógica de negocio) | procesamiento, reglas | Java, C#, Node.js, Python |
| **Capa de datos** | almacenamiento/acceso | MySQL, PostgreSQL |

```
[ Präsentation ]  ⇄  [ Logik ]  ⇄  [ Datenhaltung ]
   (Client/UI)        (Server)        (Datenbank)
```

### Beneficio

- **Separación de responsabilidades** (Separation of Concerns)
- **Intercambiabilidad** (p. ej. cambiar la UI sin modificar la lógica)
- **Mantenibilidad y capacidad de prueba**, desarrollo en paralelo
- **Escalabilidad** (las capas escalan por separado)

> Relacionado: el patrón **MVC** separa Model/View/Controller dentro de la aplicación
> (véase [06-05-01](../06-05-muster/06-05-01-mvc.md)).

---

## Términos Clave

| Término | Explicación |
|---------|-----------|
| **Capa de presentación/lógica/datos** | UI / procesamiento / almacenamiento |
| **Three-Tier** | Arquitectura de 3 capas |
| **Separation of Concerns** | Separación de responsabilidades |

---

## Consejos para el Examen

- Tener listas las **tres capas + una tarea/tecnología por cada una**.
- Nombrar el beneficio de la separación (intercambiabilidad, mantenibilidad).
- Delimitación frente a MVC (patrón arquitectónico dentro de la aplicación).

---

## Ejercicio Práctico

**Tarea:** Para una tienda en línea, asigna componentes concretos (frontend React, servicio Java, PostgreSQL) a las tres capas y nombra dos ventajas de la separación.

---

## Referencias

- [06-07-04 REST](./06-07-04-rest.md)
- [06-05-01 MVC](../06-05-muster/06-05-01-mvc.md)
