# Analizar Vulnerabilidades

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Explicar un test de penetración
- Nombrar objetos de prueba típicos de un pentest
- Diferenciar el análisis de vulnerabilidades de un ataque

---

## Contenido Principal

### Test de penetración

Un **test de penetración** es un **ataque simulado y autorizado** a un sistema informático con el fin de descubrir vulnerabilidades **antes** que los atacantes reales. Importante: solo **con el permiso** del operador (de lo contrario es punible) y dentro de un marco definido (scope).

Fases (simplificado): **preparación/scope → recopilación de información → escaneo/análisis → explotación (exploitation) → informe con recomendaciones**.

### Objetos de prueba típicos

- **Red** (puertos abiertos, servicios, segmentación)
- **Aplicaciones web** (SQL injection, XSS, autenticación)
- **Servidores/sistemas operativos** (nivel de parches, endurecimiento)
- **WLAN** (cifrado, rogue APs)
- **Clientes/dispositivos finales**
- **Firewalls/perímetro**
- **Accesos físicos**
- **Personas** (test de ingeniería social)
- **Bases de datos**

### Diferenciación

- El **escaneo de vulnerabilidades** (automatizado, p. ej. con un escáner) encuentra brechas conocidas.
- El **test de penetración** va más allá y **explota activamente las brechas** para demostrar la explotabilidad real.
- El **endurecimiento (Härtung, hardening)** = asegurar un sistema (reducir la superficie de ataque) – reacción ante las vulnerabilidades encontradas.

---

## Términos Clave

| Término | Explicación |
|---------|-----------|
| **Test de penetración** | Ataque simulado y autorizado para buscar vulnerabilidades |
| **Scope** | Alcance/límites acordados del test |
| **Härtung (endurecimiento)** | Reducción de la superficie de ataque de un sistema |
| **Exploit** | Explotación de una vulnerabilidad |

---

## Consejos para el Examen

- Enfatiza siempre la **autorización/el permiso** – sin ellos, un pentest es un ataque.
- Ten preparados al menos **cinco objetos de prueba concretos** (red, aplicación web, servidor/OS, WLAN, base de datos, persona …).
- El **endurecimiento (Härtung)** está recién enfatizado en el catálogo actualizado.

---

## Ejercicio Práctico

**Tarea (según ConSystem GmbH):** (1) Explica qué es un test de penetración. (2) Nombra al menos cinco objetos de prueba concretos de un test de penetración.

---

## Referencias

- [04-04 Escenarios de Amenaza](./04-04-bedrohungsszenarien.md)
- [07-09 Técnicas de Firewall](../07-networks/07-09-firewalltechniken.md)
