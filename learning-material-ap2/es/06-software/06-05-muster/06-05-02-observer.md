# Observer (Beobachter-Muster / patrón observador)

## Objetivos de Aprendizaje

Después de este capítulo deberías:
- Explicar el propósito y la estructura del patrón Observer
- Describir Subject y Observer, así como el proceso de notificación

---

## Contenido Principal

El **patrón Observer** (Beobachter, observador) es un **patrón de comportamiento** (patrón de diseño). Define una **dependencia 1:n**: cuando un objeto (**Subject/Observable**) cambia su estado, todos los objetos dependientes (**Observers**) son **notificados automáticamente** y actualizados.

### Estructura

| Rol | Tarea |
|-------|---------|
| **Subject (Observable)** | gestiona los Observers, informa de los cambios (`notify()`) |
| **Observer** | se registra en el Subject, reacciona a la notificación (`update()`) |

```
Subject
 + registrar(o)         Observer «interface»
 + desuscribir(o)          + update()
 + notificar() ──────►        ▲
                              │ implementa
                     ObservadorConcreto
```

### Proceso (Publish-Subscribe)

1. Los Observers se **registran** en el Subject.
2. Cuando el Subject cambia su estado, llama a `notify()`.
3. Cada Observer registrado recibe `update()` y se actualiza.

**Ventaja:** acoplamiento débil – el Subject solo conoce la interfaz Observer, no los Observers concretos. **Uso:** entre otros, en **MVC** (el Model notifica a las Views), sistemas de eventos, GUI.

---

## Términos Clave

| Término | Explicación |
|---------|-----------|
| **Subject/Observable** | Objeto observado, informa de los cambios |
| **Observer** | Observador, reacciona a las notificaciones |
| **Publish-Subscribe** | Suscripción + notificación automática |
| **Acoplamiento débil** | El Subject solo conoce la interfaz Observer |

---

## Consejos para el Examen

- La **notificación 1:n** es el núcleo – un Subject, muchos Observers.
- Saber nombrar la relación con **MVC** (Model = Subject, Views = Observers).
- Conocer `registrar`/`desuscribir`/`notificar` (Subject) y `update` (Observer).

---

## Ejercicio Práctico

**Tarea:** Esboza el patrón Observer para un Model que actualiza automáticamente varias Views cuando cambian los datos (diagrama de clases/secuencia).

---

## Referencias

- [06-05-01 MVC](./06-05-01-mvc.md)
- [06-04-09 Diagrama de Clases (Klassendiagramm)](../06-04-uml/06-04-09-klassendiagramm.md)
