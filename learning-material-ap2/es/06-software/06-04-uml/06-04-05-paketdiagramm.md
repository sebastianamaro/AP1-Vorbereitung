# Diagrama de Paquetes (Paketdiagramm)

## Objetivos de Aprendizaje

Después de este capítulo deberías:
- Conocer el propósito de un diagrama de paquetes
- Representar paquetes y dependencias

---

## Contenido Principal

El **diagrama de paquetes** (diagrama de estructura) agrupa elementos del modelo (p. ej. clases) en **paquetes (packages)** y muestra sus **dependencias**. Ofrece una visión general de la **arquitectura/estructura** de sistemas grandes.

### Elementos

| Elemento | Representación |
|---------|-------------|
| **Paquete** | símbolo de carpeta (pestaña arriba a la izquierda) |
| **Dependencia** | flecha discontinua (`--->`) del paquete dependiente al usado |
| **Anidamiento** | los paquetes pueden contener paquetes |

```
┌──────────┐        ┌──────────┐
│ UI       │┈┈┈┈┈┈►│ Service  │
└──────────┘        └────┬─────┘
                         ┊ (usa)
                    ┌────▼─────┐
                    │ Data     │
                    └──────────┘
```

Objetivo: **acoplamiento débil** – la menor cantidad posible de dependencias, claras (sin ciclos).

---

## Términos Clave

| Término | Explicación |
|---------|-----------|
| **Paquete (Paket)** | Agrupación de elementos relacionados |
| **Dependencia** | Relación de «usa/necesita» entre paquetes |
| **Acoplamiento débil** | Pocas dependencias y dirigidas |

---

## Consejos para el Examen

- Diagrama de paquetes = **diagrama de estructura** (visión general de la arquitectura).
- La flecha de dependencia apunta **del paquete dependiente al usado**.
- Las dependencias cíclicas se consideran un mal diseño.

---

## Ejercicio Práctico

**Tarea:** Estructura una aplicación en los paquetes UI, Service y Data y dibuja las dependencias (UI → Service → Data).

---

## Referencias

- [06-04-09 Diagrama de Clases (Klassendiagramm)](./06-04-09-klassendiagramm.md)
- [06-05-01 MVC](../06-05-muster/06-05-01-mvc.md)
