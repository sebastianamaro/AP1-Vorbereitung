# Planificación de una Aplicación

## Objetivos de Aprendizaje

Después de este capítulo deberías:
- Distinguir los requisitos funcionales y no funcionales
- Diferenciar el Lastenheft y el Pflichtenheft
- Clasificar el proceso del análisis de requisitos

---

## Contenido Principal

### Requisitos funcionales vs. no funcionales

| Tipo | Pregunta | Ejemplo |
|-----|-------|----------|
| **Funcional** | ¿*Qué* debe hacer el sistema? | «Los usuarios pueden iniciar sesión», «crear una factura» |
| **No funcional** | ¿*Cómo de bien* / bajo qué condiciones? | tiempo de respuesta < 1 s, conforme a la DSGVO (RGPD), accesible, 99,9 % de disponibilidad |

Los requisitos no funcionales suelen coincidir con las **características de calidad** (ISO/IEC 25010): rendimiento, seguridad, usabilidad…

### Lastenheft vs. Pflichtenheft

| | Lastenheft | Pflichtenheft |
|--|-----------|---------------|
| **Quién** | **Auftraggeber** (cliente) | **Auftragnehmer** (contratista) |
| **Contenido** | *Qué* se exige (requisitos) | *Cómo* se implementa (solución) |
| **Pregunta** | «¿Qué quiero?» | «¿Cómo lo hago?» |

> **Regla mnemotécnica:** el **Lastenheft** (pliego de requisitos del cliente) es la *Last* (carga) del cliente, el **Pflichtenheft** (pliego de especificaciones/respuesta del contratista) es la *Pflicht* (obligación) del contratista.

### Análisis de requisitos

Proceso: **elicitar** (entrevistas, observación) → **documentar** (Lastenheft/Pflichtenheft, casos de uso) → **revisar/consensuar** → **gestionar** (cambios). Los requisitos deben ser **inequívocos, completos, sin contradicciones, verificables**.

---

## Términos Clave

| Término | Explicación |
|---------|-----------|
| **Requisito funcional** | Lo que el sistema debe hacer |
| **Requisito no funcional** | Calidad/condiciones de contorno |
| **Lastenheft** | Requisitos del cliente (Auftraggeber) |
| **Pflichtenheft** | Concepto de implementación del contratista (Auftragnehmer) |

---

## Consejos para el Examen

- **Lastenheft (cliente) vs. Pflichtenheft (contratista)** – un tema recurrente; recuerda la dirección.
- Clasificar los requisitos como **funcionales/no funcionales** (una tarea típica de GA1).
- Vincular los requisitos no funcionales con las **características de calidad** (ISO 25010).

---

## Ejercicio Práctico

**Tarea (según ConSystem GmbH):** Para un nuevo desarrollo, clasifica los requisitos dados como funcionales/no funcionales y explica la diferencia entre el Lastenheft y el Pflichtenheft.

---

## Referencias

- [06-04-02 Diagrama de Casos de Uso](../06-04-uml/06-04-02-use-case-diagramm.md)
- [02-02 Calidad del Software](../../02-quality-management/02-02-softwarequalitaet.md)
