# Métodos de Cifrado

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Conocer la diferencia entre cifrado simétrico y asimétrico
- Nombrar métodos típicos
- Explicar ventajas y desventajas de los métodos
- Comprender el cifrado híbrido

---

## Contenido Principal

### Fundamentos del Cifrado

El **cifrado (criptografía)** transforma datos legibles (texto plano) en datos ilegibles (texto cifrado).

```
+------------------------------------------------------------------+
|                      CIFRADO                                      |
+------------------------------------------------------------------+
|                                                                   |
|    TEXTO PLANO         CIFRADO              TEXTO CIFRADO         |
|   +-----------+           +-----+           +-----------+         |
|   |  "Hola"   |  ------>  | Clave|  ------>  | "Xk9@#"   |         |
|   +-----------+           +-----+           +-----------+         |
|                                                                   |
|    TEXTO CIFRADO       DESCIFRADO            TEXTO PLANO          |
|   +-----------+           +-----+           +-----------+         |
|   | "Xk9@#"   |  ------>  | Clave|  ------>  |  "Hola"  |         |
|   +-----------+           +-----+           +-----------+         |
|                                                                   |
+------------------------------------------------------------------+
```

---

### Resumen: Tipos de Cifrado

```
+------------------------------------------------------------------+
|              MÉTODOS DE CIFRADO                                   |
+------------------------------------------------------------------+
|                                                                   |
|  +-----------------------+     +-----------------------+          |
|  |      SIMÉTRICO        |     |      ASIMÉTRICO       |          |
|  |                       |     |                       |          |
|  |   Una clave           |     |   Dos claves          |          |
|  |   para cifrar y       |     |   (pública +          |          |
|  |   descifrar           |     |    privada)           |          |
|  |                       |     |                       |          |
|  |   * AES               |     |   * RSA               |          |
|  |   * DES (obsoleto)    |     |   * ECC               |          |
|  |   * 3DES              |     |   * Diffie-Hellman    |          |
|  +-----------------------+     +-----------------------+          |
|                                                                   |
|  +------------------------------------------------------------+  |
|  |                       HÍBRIDO                               |  |
|  |   Combinación: Asimétrico para intercambio de claves,      |  |
|  |                Simétrico para datos                         |  |
|  |   * TLS/SSL, HTTPS                                          |  |
|  +------------------------------------------------------------+  |
|                                                                   |
+------------------------------------------------------------------+
```

---

### Cifrado Simétrico

En el **cifrado simétrico**, se utiliza **una clave** tanto para cifrar como para descifrar.

```
+------------------------------------------------------------------+
|              CIFRADO SIMÉTRICO                                    |
+------------------------------------------------------------------+
|                                                                   |
|   Alice                                              Bob          |
|   +-----+                                         +-----+         |
|   |     |  ---- Misma clave [Clave] ----------->  |     |         |
|   +-----+                                         +-----+         |
|                                                                   |
|   1. Alice cifra con la clave [Clave]                             |
|   2. Alice envía el mensaje cifrado                               |
|   3. Bob descifra con la misma clave [Clave]                      |
|                                                                   |
|   Advertencia: Problema: ¿Cómo intercambian Alice y Bob la clave  |
|   de forma segura?                                                |
|                                                                   |
+------------------------------------------------------------------+
```

#### Métodos

| Método | Longitud de Clave | Estado |
|--------|-------------------|--------|
| **AES** (Advanced Encryption Standard) | 128/192/256 Bit | Estándar actual |
| **DES** (Data Encryption Standard) | 56 Bit | Obsoleto, inseguro |
| **3DES** (Triple DES) | 168 Bit | Obsoleto |
| **ChaCha20** | 256 Bit | Moderno, rápido |

#### Ventajas y Desventajas

| Ventajas | Desventajas |
|----------|-------------|
| **Rápido** (bajo esfuerzo computacional) | **Intercambio de claves** problemático |
| **Eficiente** para grandes cantidades de datos | Para n personas: n*(n-1)/2 claves |
| Implementación sencilla | La clave debe permanecer secreta |

---

### Cifrado Asimétrico

En el **cifrado asimétrico**, hay **dos claves diferentes**:
- **Clave pública** - para cifrar
- **Clave privada** - para descifrar

```
+------------------------------------------------------------------+
|              CIFRADO ASIMÉTRICO                                   |
+------------------------------------------------------------------+
|                                                                   |
|   Alice                                              Bob          |
|   +-----+                                         +-----+         |
|   |     |                                         |ClaveClave|    |
|   +-----+                                         +-----+         |
|                                                   pública [Pub]   |
|                                                   privada [Priv]  |
|                                                                   |
|   1. Bob publica su clave pública [Pub]                           |
|   2. Alice cifra con la clave pública de Bob [Pub]                |
|   3. Alice envía el mensaje cifrado                               |
|   4. Bob descifra con su clave privada [Priv]                     |
|                                                                   |
|   Ventaja: No es necesario intercambiar claves secretas           |
|                                                                   |
+------------------------------------------------------------------+
```

#### Métodos

| Método | Longitud de Clave Típica | Uso |
|--------|--------------------------|-----|
| **RSA** | 2048-4096 Bit | Cifrado, firmas |
| **ECC** (Curva Elíptica) | 256-384 Bit | Alternativa moderna a RSA |
| **Diffie-Hellman** | variable | Intercambio de claves |

#### Ventajas y Desventajas

| Ventajas | Desventajas |
|----------|-------------|
| **No se necesita intercambio de claves** | **Lento** (computacionalmente intensivo) |
| Solo n pares de claves para n personas | No es para grandes cantidades de datos |
| Permite firmas digitales | Se necesitan claves más largas |

---

### Cifrado Híbrido

El **cifrado híbrido** combina las ventajas de ambos métodos:

```
+------------------------------------------------------------------+
|              CIFRADO HÍBRIDO                                      |
+------------------------------------------------------------------+
|                                                                   |
|   1. Generar clave de sesión aleatoria (simétrica)                |
|                        |                                          |
|                        v                                          |
|   2. Cifrar datos con clave de sesión simétricamente              |
|                        |                                          |
|                        v                                          |
|   3. Cifrar clave de sesión con clave pública asimétricamente     |
|                        |                                          |
|                        v                                          |
|   4. Transmitir ambos juntos:                                     |
|      [Clave de sesión cifrada] + [Datos cifrados]                 |
|                                                                   |
|   RECEPTOR:                                                       |
|   5. Descifrar clave de sesión con clave privada                  |
|   6. Descifrar datos con clave de sesión                          |
|                                                                   |
+------------------------------------------------------------------+
```

#### Ejemplos de Cifrado Híbrido

| Protocolo | Uso |
|-----------|-----|
| **TLS/SSL** | HTTPS, conexiones web seguras |
| **PGP/GPG** | Cifrado de correo electrónico |
| **S/MIME** | Cifrado de correo electrónico |
| **SSH** | Acceso remoto seguro |

---

### Comparación: Simétrico vs. Asimétrico

| Aspecto | Simétrico | Asimétrico |
|---------|-----------|------------|
| **Número de Claves** | 1 | 2 (pública + privada) |
| **Velocidad** | Rápido | Lento |
| **Intercambio de Claves** | Problemático | Fácil |
| **Uso Típico** | Cifrar datos | Claves/firmas |
| **Ejemplos** | AES, ChaCha20 | RSA, ECC |

---

### Áreas de Aplicación

| Aplicación | Método | Ejemplo |
|------------|--------|---------|
| **Cifrado de Disco** | Simétrico | BitLocker (AES) |
| **HTTPS** | Híbrido | TLS (RSA + AES) |
| **Correo Electrónico** | Híbrido | PGP, S/MIME |
| **VPN** | Híbrido | IPsec, OpenVPN |
| **Firma Digital** | Asimétrico | RSA, ECDSA |

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Cifrado Simétrico** | Una clave para cifrar y descifrar |
| **Cifrado Asimétrico** | Dos claves (pública + privada) |
| **Cifrado Híbrido** | Combinación de ambos métodos |
| **AES** | Advanced Encryption Standard (simétrico) |
| **RSA** | Método asimétrico |
| **Clave Pública** | Clave pública |
| **Clave Privada** | Clave privada |

---

## Consejos para el Examen

### Preguntas Frecuentes en el Examen

- ¿Cuál es la diferencia entre cifrado simétrico y asimétrico?
- Nombra ventajas y desventajas del cifrado simétrico
- ¿Qué es el cifrado híbrido?
- Nombra un método simétrico y uno asimétrico

### Importante Recordar

- **Simétrico:** 1 clave, rápido, pero problema de intercambio de claves
- **Asimétrico:** 2 claves, lento, pero sin problema de intercambio de claves
- **Híbrido:** Combinación (asimétrico para clave, simétrico para datos)
- **AES** = estándar simétrico actual
- **RSA** = método asimétrico conocido

---

## Ejercicios Prácticos

### Ejercicio 1
¿Cuál es la diferencia entre cifrado simétrico y asimétrico?

**Solución:**
- **Cifrado Simétrico:** Utiliza **una** clave para cifrar y descifrar. Ambas partes deben poseer la misma clave secreta.
- **Cifrado Asimétrico:** Utiliza **dos** claves diferentes - una pública para cifrar y una privada para descifrar.

### Ejercicio 2
Nombra dos ventajas y una desventaja del cifrado simétrico.

**Solución:**
**Ventajas:**
1. Rápido y eficiente
2. Bajo esfuerzo computacional, bueno para grandes cantidades de datos

**Desventaja:**
El intercambio de claves es problemático - ¿cómo se comparte la clave secreta de forma segura?

### Ejercicio 3
¿Qué es el cifrado híbrido y por qué se utiliza?

**Solución:** El **cifrado híbrido** combina cifrado simétrico y asimétrico:
1. Se genera una clave simétrica aleatoria (clave de sesión)
2. Los datos se cifran simétricamente con la clave de sesión (rápido)
3. La clave de sesión se cifra asimétricamente con la clave pública del destinatario

Esto utiliza las ventajas de ambos métodos: Cifrado de datos rápido E intercambio de claves fácil.

### Ejercicio 4
Nombra un ejemplo de un método de cifrado simétrico y uno asimétrico.

**Solución:**
- **Simétrico:** AES (Advanced Encryption Standard)
- **Asimétrico:** RSA (Rivest-Shamir-Adleman)

---

## Referencias Cruzadas

- [04-05-02 Hash Values](./04-05-02-hash-values.md) - Funciones unidireccionales
- [04-05-03 Certificates](./04-05-03-certificates.md) - Verificación de claves públicas
- [04-05-04 Digital Signatures](./04-05-04-digital-signatures.md) - Uso de métodos asimétricos
- [04-01-01 CIA Triad](../04-01-protection-goals/04-01-01-cia-triad.md) - Confidencialidad
