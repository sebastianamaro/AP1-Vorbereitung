# Control de versiones (Git)

## Objetivos de Aprendizaje

Después de este capítulo deberías:
- Explicar el propósito del control de versiones
- Distinguir sistemas centralizados y distribuidos
- Conocer los conceptos básicos de Git

---

## Contenido Principal

El **control de versiones** (Version Control) rastrea los cambios en el código, permite la **colaboración**, la **restauración** de estados anteriores y el **trabajo en paralelo** mediante branches.

### Centralizado vs. distribuido

- **Centralizado** (p. ej. SVN): un repositorio central.
- **Distribuido** (p. ej. **Git**): cada persona tiene una copia completa del repositorio, incluido el historial.

### Conceptos básicos de Git

| Término | Significado |
|---------|-----------|
| **Repository** | proyecto incl. historial de versiones |
| **Commit** | estado de cambios guardado (instantánea) |
| **Branch** | línea de desarrollo paralela |
| **Merge** | fusión de branches |
| **Pull/Push** | traer/subir cambios (remote) |
| **Conflicto** | cambios contradictorios, resolver manualmente |

Flujo típico: `clone → branch → commit → push → Pull Request → merge`. Plataformas: **GitHub, GitLab**.

---

## Términos Clave

| Término | Explicación |
|---------|-----------|
| **Git** | Sistema de control de versiones distribuido |
| **Commit/Branch/Merge** | Instantánea / línea de desarrollo / fusión |
| **Pull/Push** | Sincronización con el remote |

---

## Consejos para el Examen

- **Centralizado vs. distribuido** (Git = distribuido, copia local completa).
- Saber explicar los conceptos básicos (commit, branch, merge, conflicto).
- Beneficio: colaboración, trazabilidad, restauración.

---

## Ejercicio Práctico

**Tarea:** Describe el flujo con el que dos desarrolladores trabajan en una funcionalidad usando branches y fusionan sus cambios (incluido un caso de conflicto).

---

## Referencias

- [06-07-03 CI/CD](../06-07-architektur/06-07-03-ci-cd.md)
- [06-08-05 Documentación](./06-08-05-dokumentation.md)
