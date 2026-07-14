# Diagrama de Tiempos (Zeitverlaufsdiagramm)

## Objetivos de Aprendizaje

Después de este capítulo deberías:
- Conocer el propósito del diagrama de tiempos
- Leer los cambios de estado a lo largo del tiempo

---

## Contenido Principal

El **diagrama de tiempos** (Zeitverlaufsdiagramm, un diagrama de comportamiento/interacción) representa los **cambios de estado de los objetos a lo largo de un eje temporal**. Es adecuado cuando el **comportamiento temporal exacto** es importante (p. ej. sistemas empotrados/de tiempo real, evolución de señales).

### Estructura

- **Eje horizontal:** tiempo
- **Eje vertical:** estados (o valores) del objeto
- La evolución muestra **cuándo** un objeto adopta **qué estado**.

```
Estado
  activo   │      ┌───────┐
  esperando│──────┘       └───────
           └────────────────────────► Tiempo
```

En comparación: el diagrama de secuencia resalta el **orden** de los mensajes, el diagrama de tiempos el **momento/duración exactos** de los estados.

---

## Términos Clave

| Término | Explicación |
|---------|-----------|
| **Zeitachse (eje temporal)** | Eje horizontal (evolución en el tiempo) |
| **Zustandsverlauf (evolución de estados)** | Secuencia de los estados a lo largo del tiempo |

---

## Consejos para el Examen

- Clasifícalo como **diagrama de interacción/comportamiento** con foco en el **timing exacto**.
- Diferéncialo del diagrama de secuencia (orden vs. momento/duración).

---

## Ejercicio Práctico

**Tarea:** Esboza, para un objeto con los estados *esperando/activo*, una evolución temporal que muestre dos fases de activación.

---

## Referencias

- [06-04-06 Diagrama de Estados (Zustandsdiagramm)](./06-04-06-zustandsdiagramm.md)
- [06-04-03 Diagrama de Secuencia (Sequenzdiagramm)](./06-04-03-sequenzdiagramm.md)
