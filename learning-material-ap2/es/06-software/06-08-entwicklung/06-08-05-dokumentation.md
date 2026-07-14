# Documentación de programa y de configuración

## Objetivos de Aprendizaje

Después de este capítulo deberías:
- Distinguir los tipos de documentación
- Explicar la documentación de programa (Programmdokumentation) y la de configuración (Konfigurationsdokumentation)
- Saber qué caracteriza a una buena documentación

---

## Contenido Principal

La documentación hace que el software sea **rastreable, mantenible y apto para su entrega**. Se distingue, entre otras, entre la **documentación de programa (Programmdokumentation)** y la **documentación de configuración (Konfigurationsdokumentation)** (ambas mencionadas en el catálogo).

### Documentación de programa (Programmdokumentation)

Describe la **estructura y el funcionamiento** del código – para desarrolladores:

- **Comentarios en el código fuente** (útiles, no redundantes)
- **Documentación de API** generada a partir del código (p. ej. **JavaDoc**, Doxygen)
- **Documentación técnica:** arquitectura, modelo de clases/datos, algoritmos importantes, interfaces

### Documentación de configuración (Konfigurationsdokumentation)

Describe los **ajustes y el entorno** para la operación/el deployment:

- Archivos de configuración y parámetros (p. ej. variables de entorno, `application.yml`)
- Guía de instalación/deployment, dependencias/versiones
- Parámetros de operación (puertos, rutas, accesos – **¡sin secretos en texto plano!**)

### Otros tipos de documentación

- **Documentación de usuario** (manual, ayuda – para usuarios finales)
- **Documentación del proyecto** (véase [00-03-02](../../00-exam-overview/00-03-projektarbeit/00-03-02-projektdokumentation.md))

### Características de una buena documentación

Actualizada, completa, comprensible, consistente, versionada (mantenida junto con el código).

---

## Términos Clave

| Término | Explicación |
|---------|-----------|
| **Documentación de programa (Programmdokumentation)** | Estructura/funcionamiento del código (para desarrolladores) |
| **Documentación de configuración (Konfigurationsdokumentation)** | Ajustes/entorno para operación y deployment |
| **JavaDoc** | Documentación de API generada a partir del código |
| **Documentación de usuario** | Guía para usuarios finales |

---

## Consejos para el Examen

- Distinguir **documentación de programa vs. de configuración** (código/desarrollador vs. operación/deployment).
- Asignar los grupos destinatarios: documentación de desarrollador vs. de usuario.
- **Versionar** la documentación junto con el código; sin secretos en texto plano.

---

## Ejercicio Práctico

**Tarea:** Para un proyecto web, nombra dos contenidos de la documentación de programa y dos de la documentación de configuración.

---

## Referencias

- [06-08-03 Control de versiones](./06-08-03-versionsverwaltung.md)
- [00-03-02 Documentación del proyecto](../../00-exam-overview/00-03-projektarbeit/00-03-02-projektdokumentation.md)
