# Compilador vs. Intérprete

## Objetivos de Aprendizaje

Después de este capítulo deberías:
- Distinguir compilador e intérprete
- Nombrar las ventajas y desventajas de ambos enfoques
- Clasificar las formas híbridas (bytecode/JIT)

---

## Contenido Principal

| | Compilador | Intérprete |
|--|----------|-------------|
| **Traducción** | **de antemano**, todo el programa | **en tiempo de ejecución**, línea por línea |
| **Ejecución** | rápida (código máquina) | más lenta |
| **Errores** | detectados en **tiempo de compilación** | solo en **tiempo de ejecución** |
| **Resultado** | archivo ejecutable independiente | ninguno (se necesita código fuente + intérprete) |
| **Ejemplos** | C, C++, Rust | Python, JavaScript, PHP |

### Forma híbrida: bytecode + VM

**Java** se compila a **bytecode** y es ejecutado por la **JVM** (independiente de la plataforma, "write once, run anywhere"). Los **compiladores JIT** traducen el bytecode usado con frecuencia a código máquina rápido en tiempo de ejecución.

- **Ventaja del compilador:** ejecución rápida, detección temprana de errores.
- **Ventaja del intérprete:** independiente de la plataforma, pruebas/prototipado rápidos.

---

## Términos Clave

| Término | Explicación |
|---------|-----------|
| **Compilador** | Traduce de antemano a código máquina |
| **Intérprete** | Traduce/ejecuta en tiempo de ejecución |
| **Bytecode/JVM** | Código intermedio + máquina virtual |
| **JIT** | Compilador Just-in-Time en tiempo de ejecución |

---

## Consejos para el Examen

- El **momento de la traducción** (de antemano vs. tiempo de ejecución) y la **detección de errores** (compilación vs. ejecución) son las diferencias clave.
- Java = **forma híbrida** (bytecode + JVM) – pregunta popular.
- Saber nombrar dos lenguajes de ejemplo de cada tipo.

---

## Ejercicio Práctico

**Tarea:** Compara compilador e intérprete en una tabla (traducción, velocidad, detección de errores, resultado) y clasifica Java.

---

## Referencias

- [06-08-03 Control de versiones](./06-08-03-versionsverwaltung.md)
- [06-02-04 Análisis de pseudocódigo](../06-02-programmierung/06-02-04-pseudocode-analyse.md)
