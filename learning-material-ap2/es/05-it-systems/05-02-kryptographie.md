# Criptografía

## Objetivos de Aprendizaje

Después de este capítulo deberías ser capaz de:
- Distinguir el cifrado simétrico, asimétrico e híbrido
- Explicar las funciones hash y el salting
- Clasificar las firmas digitales y la PKI/los certificados

---

## Contenido Principal

### Cifrado

| Tipo | Clave | Característica | Ejemplos |
|------|-------|---------------|----------|
| **Simétrico** | una clave compartida | rápido; el intercambio de claves es problemático | AES, DES |
| **Asimétrico** | par de claves (pública/privada) | resuelve el intercambio de claves; más lento | RSA, ECC |
| **Híbrido** | combinación | asimétrico para el intercambio de claves, simétrico para los datos | TLS |

Con la **clave pública** se cifra / se verifica una firma, con la **clave privada** se descifra / se firma.

### Función hash

Una **función hash** transforma entradas de longitud arbitraria en un **valor hash de longitud fija**. Propiedades:

- **Determinista** (misma entrada → mismo hash)
- **Función unidireccional** (no reversible)
- **Resistente a colisiones** (prácticamente no hay dos entradas con el mismo hash)
- **Efecto avalancha** (un cambio pequeño → un hash completamente distinto)

Ejemplos: **SHA-256**, SHA-3. (MD5/SHA-1 se consideran inseguros.) Uso: verificación de integridad, firmas, almacenamiento de contraseñas.

**Salting:** Un **salt** aleatorio y único por registro se añade antes de aplicar el hash → evita ataques de **rainbow table** (tabla arcoíris) y hashes iguales para contraseñas iguales.

### Firma digital

El emisor **firma** el hash de un mensaje con su **clave privada**; el receptor lo verifica con la **clave pública**. Una firma digital garantiza tres cosas:

- **Integridad** – el mensaje no ha sido alterado
- **Autenticidad** – el emisor es genuino
- **No repudio** – el emisor no puede negar la autoría

### PKI y certificados

Una **PKI** (Infraestructura de Clave Pública) gestiona las claves y la confianza:

- **Certificado digital (X.509):** vincula una clave pública a una identidad
- **CA (Certificate Authority / autoridad de certificación):** firma y certifica los certificados; la **RA** registra a los solicitantes
- **Cadena de confianza:** certificado → CA intermedia → CA raíz
- **Revocación:** mediante **CRL** (lista de revocación) u **OCSP** (consulta de estado en línea)

Aplicación: **TLS/HTTPS** utiliza certificados para la autenticación del servidor y el cifrado híbrido (véase [07-10](../07-networks/07-10-webanwendungen-absichern.md)).

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Simétrico/Asimétrico** | Una clave frente a un par de claves |
| **Función hash** | Transformación unidireccional a un valor hash fijo |
| **Salting** | Valor aleatorio contra las rainbow tables |
| **Firma digital** | Integridad + autenticidad + no repudio |
| **PKI / X.509 / CA** | Infraestructura, certificado, autoridad de certificación |

---

## Consejos para el Examen

- Explicar **simétrico frente a asimétrico** (incl. un método de cada uno) y la combinación **híbrida**.
- **La clave pública cifra / la privada descifra** – ten clara la dirección.
- Firma digital = las "tres garantías". Hashing/salting contra las rainbow tables (recientemente enfatizado en el catálogo).
- PKI/certificado/CA contra el man-in-the-middle (conexión con TLS).

---

## Ejercicio Práctico

**Tarea (según ConSystem GmbH):** (1) Explica la diferencia entre el cifrado simétrico y el asimétrico y para qué sirve el cifrado híbrido. (2) ¿Cómo garantiza una firma digital la integridad y la autenticidad?

---

## Referencias

- [04-02 Autenticación](../04-it-security/04-02-authentifizierung-autorisierung.md)
- [07-10 Protección de aplicaciones web](../07-networks/07-10-webanwendungen-absichern.md)
