# Diagrama de Casos de Uso (Anwendungsfalldiagramm)

## Objetivos de Aprendizaje

Después de este capítulo deberías:
- Conocer el propósito y el uso del diagrama de casos de uso en el análisis de requisitos
- Aplicar con seguridad los elementos de notación (actor, caso de uso, límite del sistema, relaciones)
- Distinguir las relaciones **asociación**, **`<<include>>`**, **`<<extend>>`** y **generalización (Vererbung / herencia)**
- Ser capaz de completar correctamente un diagrama de casos de uso incompleto en el examen

---

## Contenido Principal

### ¿Para qué sirve el diagrama de casos de uso?

El **diagrama de casos de uso** (en alemán: Anwendungsfalldiagramm) pertenece a los **diagramas de comportamiento** de UML. Desde la **perspectiva del usuario** muestra *qué* debe hacer un sistema, no *cómo*. Es la herramienta central del **análisis de requisitos** (GA1) y el primer paso antes de crear los diagramas de estructura o de proceso.

### Elementos de notación

| Elemento | Representación | Significado |
|---------|-------------|-----------|
| **Actor (Akteur)** | figura de palo | Rol fuera del sistema (persona, otro sistema) que interactúa con él |
| **Caso de uso (Anwendungsfall)** | elipse | Una función cerrada y útil para el actor |
| **Límite del sistema (Systemgrenze)** | rectángulo alrededor de los casos de uso | Separa el sistema (dentro) del entorno (fuera) |
| **Asociación** | línea continua | El actor participa en un caso de uso |

### Las relaciones (¡relevantes para el examen!)

```
                 ┌─────────────── System: Kundenberatung ───────────────┐
                 │                                                       │
                 │      ( Kunde beraten ) ····<<include>>····> ( Kunden- │
   ┌──────┐      │            △                                 daten    │
   │Person│      │            │ Vererbung                       laden )  │
   └──┬───┘      │      ( Beratung dokumentieren )                       │
      │          │            ┆ <<extend>> (Bedingung:                   │
  ┌───┴───┐      │            ┆  „nur bei Neukunde")                     │
  │ Kunde │──────┼──── ( Kunde beraten )                                 │
  └───────┘      │                                                       │
 ┌─────────────┐ │                                                       │
 │Mitarbeiter/-│─┼──── ( Kunde beraten )                                 │
 │     in      │ │                                                       │
 └─────────────┘ └───────────────────────────────────────────────────┘
```

- **Asociación** (línea): actor ↔ caso de uso. *«El empleado asesora al cliente.»*
- **`<<include>>`** (flecha discontinua, la flecha apunta al caso incluido): el caso de uso base **siempre usa** otro. *«Asesorar al cliente» siempre incluye «cargar datos del cliente».* Reutilización de pasos obligatorios.
- **`<<extend>>`** (flecha discontinua, la flecha apunta al caso base): un caso de uso **amplía opcionalmente** a otro, solo bajo una **condición**. *«Conceder descuento de bienvenida» extend «Asesorar al cliente», si es cliente nuevo.*
- **Generalización / Vererbung (herencia)** (flecha con punta hueca): un actor/caso especializado hereda de uno general. *«Cliente» y «Empleado» son especializaciones de «Persona».*

> **Regla mnemotécnica:** `include` = **siempre** (obligatorio), `extend` = **eventualmente** (condición). Con `include` la flecha apunta **lejos del** caso base, con `extend` **hacia el** caso base.

---

## Términos Clave

| Término | Explicación |
|---------|-----------|
| **Akteur (actor)** | Rol externo que interactúa con el sistema (no forma parte de él) |
| **Anwendungsfall (caso de uso)** | Funcionalidad coherente con un beneficio reconocible para el actor |
| **Systemgrenze (límite del sistema)** | Frontera entre el sistema y el entorno |
| **`<<include>>`** | Inclusión obligatoria de otro caso de uso |
| **`<<extend>>`** | Ampliación condicional y opcional de un caso de uso |
| **Generalización** | Relación de herencia (Vererbung) entre actores o casos de uso |

---

## Consejos para el Examen

- **UML tiene un peso importante en la AP2** – el diagrama de casos de uso es uno de los diagramas más examinados. Practícalo de forma activa (dibújalo tú mismo), no solo lo leas.
- **Tarea típica:** completar un diagrama *incompleto* (añadir relaciones/actores que faltan) – exactamente la forma de tarea del libro (ConSystem GmbH).
- **Error clásico:** confundir `include` y `extend`. Memoriza la dirección de la flecha **y** la semántica.
- **`<<extend>>` necesita una condición** – nómbrala explícitamente cuando se pregunte por ella.
- Actor ≠ una persona concreta, sino un **rol**. La misma persona puede asumir varios roles.
- **Nota del catálogo:** los diagramas UML se reforzaron en el catálogo de examen actualizado (entre otros, los diagramas de actividad son nuevos en AP1). En exámenes de práctica más antiguos la selección de diagramas puede variar – véase [Cambios del catálogo](../../00-exam-overview/00-02-catalog-changes.md).

---

## Ejercicio Práctico

**Escenario de partida (según ConSystem GmbH):** Para un software de *asesoramiento al cliente* existe un primer borrador de un diagrama de casos de uso. Todavía faltan: una **generalización (Vererbung)**, una **relación `<<include>>`**, una **relación `<<extend>>` con condición** así como las **asociaciones** de los actores.

**Tarea:** Completa el diagrama de forma coherente.

<details>
<summary>Esquema de solución</summary>

- **Vererbung (herencia):** «Cliente» y «Empleado» generalizan a «Persona».
- **Asociaciones:** conectar «Cliente» y «Empleado» cada uno con «Asesorar al cliente».
- **`<<include>>`:** «Asesorar al cliente» ⟶ «Cargar datos del cliente» (siempre necesario).
- **`<<extend>>`:** «Conceder descuento de bienvenida» ⟶ «Asesorar al cliente», condición: *solo para clientes nuevos*.

</details>

---

## Diagrama de Ejemplo

![Diagrama de casos de uso (solución de ejemplo)](../../../assets/diagrams/uml_usecase_aufgabe.png)

<!-- Bildquelle: ap2.online (mit Genehmigung) -->

---

## Referencias

- [06-04-01 UML en general](./06-04-01-uml-allgemein.md) – Resumen de todos los tipos de diagrama UML
- [06-04-03 Diagrama de Secuencia (Sequenzdiagramm)](./06-04-03-sequenzdiagramm.md) – El desarrollo de un caso de uso en detalle
- [06-04-04 Diagrama de Actividad (Aktivitätsdiagramm)](./06-04-04-aktivitaetsdiagramm.md) – Vista de proceso
- [06-01-02 Planificación de una aplicación (análisis de requisitos)](../06-01-schnittstellen-planung/06-01-02-planung-anwendung.md) – de dónde vienen los casos de uso
