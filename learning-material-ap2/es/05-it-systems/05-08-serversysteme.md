# Sistemas de servidor

## Objetivos de Aprendizaje

Después de este capítulo deberías ser capaz de:
- Distinguir los servidores tower, rack y blade
- Nombrar las ventajas y desventajas de los formatos constructivos

---

## Contenido Principal

### Formatos constructivos

| Formato | Característica | Ventajas | Desventajas |
|---------|---------------|----------|-------------|
| **Servidor tower** | como un PC grande | económico, sencillo, sin entorno especial | ocupa mucho espacio, difícil de escalar |
| **Servidor rack** | montado en un armario de 19 pulgadas (altura en **HE/U**) | ahorra espacio, estandarizado, fácil de mantener | requiere rack + refrigeración |
| **Servidor blade** | "blades" delgados en un **chasis** común | densidad muy alta, infraestructura común de energía/refrigeración/red, gestión centralizada | chasis costoso, dependencia del fabricante |

- **Servidor rack:** servidores independientes que se montan unos encima de otros en el rack (p. ej. 1 HE, 2 HE).
- **Servidor blade:** comparten en el **chasis** las fuentes de alimentación, la refrigeración y el backplane → la mayor densidad de empaquetado en el centro de datos.

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **HE/U (Höheneinheit / unidad de rack)** | medida de la altura constructiva en el rack de 19 pulgadas (1 HE ≈ 4,45 cm) |
| **Servidor rack** | servidor independiente montado en el rack |
| **Servidor blade** | módulo de servidor en un chasis común |
| **Chasis** | armazón con infraestructura común para los blades |

---

## Consejos para el Examen

- **Rack vs. blade** es la pregunta típica: blade = mayor densidad + infraestructura compartida; rack = independiente, más flexible.
- Vincular el formato constructivo a un escenario (espacio, escalabilidad, presupuesto).

---

## Ejercicio Práctico

**Tarea (según ConSystem GmbH):** Explica a un cliente los conceptos de "servidor rack" y "servidor blade", incluyendo una ventaja y una desventaja de cada uno.

---

## Referencias

- [05-06 Sistemas de almacenamiento](./05-06-speichersysteme.md)
- [05-09 Escritorios virtuales (VDI)](./05-09-virtuelle-desktops.md)
