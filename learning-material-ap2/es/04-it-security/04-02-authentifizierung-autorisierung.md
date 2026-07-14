# Autenticación y Autorización

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Diferenciar con claridad Authentisierung, Authentifizierung y Autorisierung
- Conocer los tres factores de la autenticación
- Explicar la autenticación de dos factores (2FA)

---

## Contenido Principal

### Los tres términos (¡confusión frecuente!)

El alemán distingue tres términos que el español suele agrupar bajo "autenticación/autorización":

| Término | ¿Quién? | Significado |
|---------|------|-----------|
| **Authentisierung** (acreditar la identidad) | Usuario | El usuario **acredita su identidad** (p. ej. introduce una contraseña) |
| **Authentifizierung** (verificar la identidad) | Sistema | El sistema **comprueba** la prueba presentada |
| **Autorisierung** (autorización) | Sistema | El sistema **otorga derechos/acceso** tras una verificación exitosa |

> **Orden:** Authentisierung → Authentifizierung → Autorisierung.
> Frase para recordar: *yo* me acredito (authentisieren), el *sistema* me verifica (authentifizieren) y después autoriza (autorisieren) mi acceso.

### Los tres factores

| Factor | Ejemplo |
|--------|----------|
| **Conocimiento** | Contraseña, PIN |
| **Posesión** | Tarjeta inteligente, generador de TAN, smartphone |
| **Ser (inherencia)** | Huella dactilar, rostro, iris (biometría) |

### Autenticación de dos factores (2FA)

La **2FA** combina **dos factores diferentes** (p. ej. contraseña *conocimiento* + TAN al móvil *posesión*). Así, una contraseña robada por sí sola ya no basta → seguridad notablemente mayor. La **MFA** utiliza varios factores.

> Dos contraseñas **no** son 2FA – deben ser **factores diferentes**.

---

## Términos Clave

| Término | Explicación |
|---------|-----------|
| **Authentisierung** | Acreditación de la identidad por parte del usuario |
| **Authentifizierung** | Comprobación de la prueba por parte del sistema |
| **Autorisierung** | Concesión de derechos tras una verificación exitosa |
| **2FA/MFA** | Combinación de dos/varios factores |

---

## Consejos para el Examen

- La **diferenciación de los tres términos** es una pregunta clásica de examen – recuerda el orden y "quién hace qué".
- **2FA = dos factores diferentes** (conocimiento/posesión/ser). Un error frecuente: llamar 2FA a dos factores iguales.
- La 2FA está **recién enfatizada** en el catálogo actualizado.

---

## Ejercicio Práctico

**Tarea (según ConSystem GmbH):** Diferencia Authentisierung, Authentifizierung y Autorisierung entre sí y explica la 2FA con un ejemplo.

---

## Referencias

- [04-01 Aspectos de la Seguridad Informática](./04-01-aspekte-it-sicherheit.md)
- [04-06 Integridad de Datos](./04-06-datenintegritaet.md)
