# Protección de aplicaciones web

## Objetivos de Aprendizaje

Después de este capítulo deberías:
- Explicar el cifrado de transporte (TLS/HTTPS)
- Comprender los certificados y su papel
- Conocer los ataques web habituales y sus contramedidas

---

## Contenido Principal

### TLS / HTTPS

**HTTPS** = HTTP sobre **TLS** (Transport Layer Security). TLS proporciona:
- **Confidencialidad** (cifrado de la transmisión)
- **Integridad** (protección contra manipulación)
- **Autenticidad** (identidad del servidor mediante certificado)

TLS utiliza **cifrado híbrido**: asimétrico para el intercambio de claves (handshake) y luego simétrico para los datos útiles (más rápido).

### Certificados

Un **certificado digital** (X.509) vincula una clave pública a una identidad (dominio). Es firmado por una **autoridad de certificación (CA)**. El navegador comprueba la **cadena de confianza** hasta una CA raíz. Así se garantiza que se habla con el servidor real (protección contra **man-in-the-middle**).

### Ataques web típicos y contramedidas

| Ataque | Contramedida |
|---------|---------------|
| **SQL Injection** | Prepared Statements, validación de entradas |
| **XSS** (Cross-Site Scripting) | Codificar/escapar la salida, Content-Security-Policy |
| **CSRF** | CSRF-Token |
| **Man-in-the-Middle** | HTTPS/TLS, certificados válidos, HSTS |

---

## Términos Clave

| Término | Explicación |
|---------|-----------|
| **TLS/HTTPS** | Transmisión cifrada y autenticada |
| **Certificado (X.509)** | Vincula una clave pública a una identidad |
| **CA** | Autoridad de certificación, firma certificados |
| **SQL Injection/XSS** | Ataques web habituales |

---

## Consejos para el Examen

- **HTTPS = HTTP + TLS**; TLS aporta confidencialidad, integridad y autenticidad.
- Explica el **cifrado híbrido** en el handshake de TLS (asimétrico → simétrico).
- Certificado/CA/cadena de confianza contra man-in-the-middle.

---

## Ejercicio Práctico

**Tarea (según ConSystem GmbH):** Un cliente quiere cifrar todos los accesos a su aplicación web. Explica TLS/HTTPS, el papel del certificado y nombra dos ataques web típicos con su contramedida.

---

## Referencias

- [05-02 Criptografía](../05-it-systems/05-02-kryptographie.md)
- [07-11 Inicio de sesión en aplicaciones web](./07-11-anmeldung-webanwendungen.md)
