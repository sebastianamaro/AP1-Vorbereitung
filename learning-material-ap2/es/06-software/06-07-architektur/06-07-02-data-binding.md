# Data Binding

## Objetivos de Aprendizaje

Después de este capítulo deberías:
- Explicar el data binding
- Distinguir el binding unidireccional (One-Way) del bidireccional (Two-Way)

---

## Contenido Principal

El **data binding** describe la **conexión entre los componentes de la UI y el modelo de datos**: los cambios en los datos se reflejan automáticamente en la interfaz (y, en su caso, a la inversa).

| Tipo | Dirección | Ejemplo |
|-----|----------|----------|
| **One-Way** | modelo → UI | React (`props`) |
| **Two-Way** | modelo ⇄ UI | Angular, Vue (`v-model`) |

```jsx
// One-Way (React): Daten fließen ins UI
function Welcome(props) { return <h1>Hallo, {props.name}</h1>; }
```

```html
<!-- Two-Way (Vue): UI-Eingabe aktualisiert das Modell und zurück -->
<input v-model="benutzername">
<p>Hallo, {{ benutzername }}</p>
```

- **One-Way:** flujo de datos predecible (más fácil de seguir/depurar).
- **Two-Way:** cómodo en formularios (la UI y el modelo se mantienen sincronizados).

---

## Términos Clave

| Término | Explicación |
|---------|-----------|
| **Data Binding** | Acoplamiento de la UI y el modelo de datos |
| **One-Way** | Solo modelo → UI |
| **Two-Way** | Modelo ⇄ UI (bidireccional) |

---

## Consejos para el Examen

- Distinguir **One-Way vs. Two-Way** (dirección + un ejemplo de framework por cada uno).
- Two-Way = típico de **formularios**; One-Way = flujo de datos claro.

---

## Ejercicio Práctico

**Tarea:** Con un campo de entrada, explica la diferencia entre el binding One-Way y Two-Way.

---

## Referencias

- [06-07-01 Arquitectura en capas](./06-07-01-schichtenarchitektur.md)
- [06-06-02 Diseño de GUI](../06-06-qualitaet-ux/06-06-02-gui-design.md)
