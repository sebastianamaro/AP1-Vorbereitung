# Diagrama de Estados (Zustandsdiagramm)

## Objetivos de Aprendizaje

Después de este capítulo deberías:
- Representar estados, transiciones y eventos
- Usar estados de inicio/fin y condiciones (guards)
- Modelar el comportamiento de un objeto/servicio

---

## Contenido Principal

El **diagrama de estados** (Zustandsdiagramm, un diagrama de comportamiento) muestra los **estados** de un objeto/sistema y las **transiciones** entre ellos, provocadas por **eventos**.

### Elementos

| Elemento | Representación |
|---------|-------------|
| **Estado inicial** | círculo relleno |
| **Estado final** | círculo con un anillo |
| **Estado** | rectángulo redondeado (con nombre) |
| **Transición** | flecha con `evento [condición] / acción` |

```
 ● ─► [inactivo] ──solicitud──► [procesamiento] ──listo──► [resultado] ─► ⊗
        ▲                          │
        └───────cancelar───────────┘
```

- **Transición** etiquetada con `evento [guard] / acción` (guard y acción opcionales).
- Un objeto está en **exactamente un** estado en cada momento.

---

## Términos Clave

| Término | Explicación |
|---------|-----------|
| **Zustand (estado)** | Situación en la que se encuentra un objeto |
| **Übergang (transición)** | Cambio entre estados |
| **Ereignis (evento)** | Desencadenante de una transición |
| **Guard** | Condición bajo la cual se produce una transición |

---

## Consejos para el Examen

- Etiqueta las transiciones correctamente con **evento [condición]**.
- No olvides el estado inicial y el final.
- Tarea típica: crear o completar un diagrama de estados para un servicio web/proceso.

---

## Ejercicio Práctico

**Tarea (según ConSystem GmbH):** Crea un diagrama de estados para un servicio web que realiza análisis estadísticos (p. ej. inactivo → procesamiento → resultado, con posibilidad de cancelar).

---

## Referencias

- [06-04-04 Diagrama de Actividad (Aktivitätsdiagramm)](./06-04-04-aktivitaetsdiagramm.md)
- [06-04-07 Diagrama de Tiempos (Zeitverlaufsdiagramm)](./06-04-07-zeitverlaufsdiagramm.md)
