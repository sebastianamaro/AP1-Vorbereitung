# Sistemas ciberfísicos (CPS)

## Objetivos de Aprendizaje

Después de este capítulo deberías:
- Definir los sistemas ciberfísicos
- Explicar la estructura (sensores, actuadores, interconexión)
- Clasificar los CPS como sistemas embebidos e interconectados

---

## Contenido Principal

Un **sistema ciberfísico (CPS)** conecta **componentes físicos** (máquinas, dispositivos) con el **mundo digital** mediante software embebido y redes. Los CPS **captan** su entorno, **procesan** datos y **actúan** de vuelta sobre el mundo físico.

### Estructura

| Componente | Función |
|------------|---------|
| **Sensores** | captan magnitudes físicas (temperatura, posición …) |
| **Control/software** | procesa datos, toma decisiones (embebido) |
| **Actuadores** | actúan sobre el mundo físico (motor, válvula …) |
| **Red** | conecta los CPS entre sí y con los sistemas de TI |

```
   Umwelt ──► [Sensor] ──► [Steuerung/Software] ──► [Aktor] ──► Umwelt
                                  ▲  │
                                  └──┴── Netzwerk (Cloud/andere CPS)
```

### Clasificación

- **Base de la producción interconectada:** los CPS permiten una fabricación interconectada y autoorganizada.
- Los CPS destacan el estrecho **lazo de retroalimentación** entre el mundo digital y el físico (sensórica → procesamiento → actuación).
- Campos de aplicación: instalaciones de producción, vehículos autónomos, tecnología médica, automatización de edificios.

---

## Términos Clave

| Término | Explicación |
|---------|-----------|
| **CPS** | Acoplamiento de sistemas físicos con software/red |
| **Sensor/actuador** | Captar o actuar sobre el mundo físico |
| **Sistema embebido** | Ordenador integrado de forma fija en un dispositivo |

---

## Consejos para el Examen

- CPS = **sensor → software → actuador**, interconectado, con retroalimentación.
- Saber explicar la estructura (sensor/control/actuador/red) y la retroalimentación.

---

## Ejercicio Práctico

**Tarea:** Describe, con un ejemplo (p. ej. una máquina de producción), la estructura de un CPS compuesto por sensores, control, actuadores y red.

---

## Referencias

- [06-06-03 UX/Usabilidad](./06-06-03-ux-usability.md)
