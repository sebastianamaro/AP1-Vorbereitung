# Certificados Digitales

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Explicar el propósito de los certificados digitales
- Conocer los componentes de un certificado
- Comprender el rol de las Autoridades de Certificación (CAs)
- Describir el modelo de confianza (PKI)

---

## Contenido Principal

### ¿Qué es un Certificado Digital?

Un **certificado digital** es un documento electrónico que vincula la identidad de una persona u organización con una clave pública. Es emitido por una autoridad de confianza (CA).

```
+------------------------------------------------------------------+
|                  CERTIFICADO DIGITAL                              |
+------------------------------------------------------------------+
|                                                                   |
|  Problema: ¿Cómo puedo estar seguro de que una clave pública      |
|            realmente pertenece a "www.banco.com"?                 |
|                                                                   |
|  Solución: Una autoridad de confianza (CA) confirma la            |
|            asignación con un certificado.                         |
|                                                                   |
|  +--------------------------------------------------------------+ |
|  |               CERTIFICADO para www.banco.com                  | |
|  +--------------------------------------------------------------+ |
|  | Sujeto:         www.banco.com                                 | |
|  | Clave           MIIBIjANBgkqhkiG...                           | |
|  | Pública:                                                      | |
|  | Válido desde:   01.01.2025                                    | |
|  | Válido hasta:   31.12.2025                                    | |
|  | Emisor:         DigiCert CA                                   | |
|  | Firma:          [Firma de la CA]                              | |
|  +--------------------------------------------------------------+ |
|                                                                   |
+------------------------------------------------------------------+
```

---

### Componentes de un Certificado (X.509)

| Campo | Descripción |
|-------|-------------|
| **Sujeto** | A quién pertenece el certificado (ej., dominio, persona) |
| **Clave Pública** | La clave pública del sujeto |
| **Emisor** | La CA que emitió el certificado |
| **Válido Desde/Hasta** | Período de validez |
| **Número de Serie** | Número único |
| **Algoritmo de Firma** | Algoritmo de firma utilizado |
| **Firma** | Firma digital de la CA |

---

### Autoridades de Certificación (CA)

Una **Autoridad de Certificación (CA)** es una organización de confianza que emite y firma certificados.

```
+------------------------------------------------------------------+
|              JERARQUÍA DE CERTIFICADOS (PKI)                      |
+------------------------------------------------------------------+
|                                                                   |
|                     +------------------+                          |
|                     |     CA RAÍZ      | Auto-firmada             |
|                     |   (Root CA)      | De confianza en navegador|
|                     +--------+---------+                          |
|                              |                                    |
|              +---------------+---------------+                    |
|              v               v               v                    |
|       +------------+   +------------+   +------------+           |
|       | CA         |   | CA         |   | CA         |           |
|       | Inter-     |   | Inter-     |   | Inter-     |           |
|       | media      |   | media      |   | media      |           |
|       +-----+------+   +-----+------+   +-----+------+           |
|             |               |               |                     |
|        +----+----+     +----+----+     +----+----+               |
|        v         v     v         v     v         v               |
|     [Cert.]  [Cert.] [Cert.] [Cert.] [Cert.] [Cert.]             |
|     Entidad  Entidad Entidad Entidad Entidad Entidad             |
|     final    final   final   final   final   final               |
|                                                                   |
+------------------------------------------------------------------+
```

#### Autoridades de Certificación Conocidas

| CA | Descripción |
|----|-------------|
| **DigiCert** | CA comercial grande |
| **Let's Encrypt** | Certificados gratuitos |
| **Comodo/Sectigo** | CA comercial |
| **GlobalSign** | CA grande |
| **Bundesdruckerei** | Certificados gubernamentales alemanes |

---

### ¿Cómo Funciona la Cadena de Confianza?

```
+------------------------------------------------------------------+
|              VALIDACIÓN DE CERTIFICADO                            |
+------------------------------------------------------------------+
|                                                                   |
|   1. El navegador recibe el certificado de www.tienda.com         |
|                      v                                            |
|   2. El navegador verifica: ¿Quién firmó el certificado?          |
|      -> Firmado por "CA Intermedia"                               |
|                      v                                            |
|   3. El navegador verifica: ¿Quién firmó el certificado intermedio?|
|      -> Firmado por "CA Raíz"                                     |
|                      v                                            |
|   4. El navegador verifica: ¿Es la CA Raíz confiable?             |
|      -> Sí, la CA Raíz está en el almacén de certificados del     |
|         navegador (correcto)                                      |
|                      v                                            |
|   5. El navegador muestra: La conexión es segura (icono de candado)|
|                                                                   |
+------------------------------------------------------------------+
```

---

### Tipos de Certificados

#### Por Nivel de Validación

| Tipo | Validación | Símbolo |
|------|------------|---------|
| **DV (Validación de Dominio)** | Solo se verifica la propiedad del dominio | Candado |
| **OV (Validación de Organización)** | Se verifica la organización | Candado |
| **EV (Validación Extendida)** | Verificación exhaustiva | Candado (anteriormente barra de direcciones verde) |

#### Por Uso

| Tipo | Uso |
|------|-----|
| **Certificado SSL/TLS** | HTTPS para sitios web |
| **Code Signing** | Firmar software |
| **Email (S/MIME)** | Cifrado de correo electrónico |
| **Certificado de Cliente** | Autenticación de usuario |

---

### Problemas con Certificados

| Problema | Descripción | Advertencia del Navegador |
|----------|-------------|---------------------------|
| **Caducado** | Período de validez excedido | "Certificado caducado" |
| **Dominio Incorrecto** | Certificado para un dominio diferente | "El nombre no coincide" |
| **CA Desconocida** | CA no confiable | "No es de confianza" |
| **Revocado** | El certificado fue retirado | "Certificado revocado" |

---

### Revocación de Certificados

Cuando un certificado está comprometido, debe ser revocado:

| Método | Descripción |
|--------|-------------|
| **CRL (Lista de Revocación de Certificados)** | Lista de certificados revocados |
| **OCSP (Protocolo de Estado de Certificado en Línea)** | Consulta de estado en línea en tiempo real |

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Certificado Digital** | Documento electrónico para confirmación de identidad |
| **CA** | Autoridad de Certificación |
| **PKI** | Infraestructura de Clave Pública (infraestructura de confianza) |
| **CA Raíz** | Autoridad de Certificación Raíz (auto-firmada) |
| **X.509** | Estándar para formato de certificados |
| **SSL/TLS** | Protocolos para conexiones cifradas |
| **CRL** | Lista de Revocación de Certificados |

---

## Consejos para el Examen

### Preguntas Frecuentes en el Examen

- ¿Qué es un certificado digital?
- ¿Para qué sirve una Autoridad de Certificación (CA)?
- ¿Cómo funciona la cadena de confianza?
- ¿Qué sucede cuando un certificado caduca?

### Importante Recordar

- **Certificado** = Clave pública + Identidad + Firma de CA
- **CA** = Autoridad de confianza que emite certificados
- **CA Raíz** = Auto-firmada, preinstalada en el navegador
- **DV/OV/EV** = Diferentes niveles de validación

---

## Ejercicios Prácticos

### Ejercicio 1
¿Qué es un certificado digital y para qué sirve?

**Solución:** Un **certificado digital** es un documento electrónico que:
- Vincula la identidad de una persona/organización con una clave pública
- Es emitido por una Autoridad de Certificación (CA) de confianza
- Confirma la autenticidad de la clave pública

Sirve para asegurar durante la comunicación cifrada (ej., HTTPS) que realmente te estás comunicando con el servidor correcto.

### Ejercicio 2
¿Qué es una Autoridad de Certificación (CA)?

**Solución:** Una **Autoridad de Certificación (CA)** es una organización de confianza que:
- Verifica la identidad de los solicitantes
- Emite y firma certificados digitales
- Garantiza la autenticidad de la asignación clave-identidad
- Revoca certificados cuando es necesario

Ejemplos: DigiCert, Let's Encrypt, GlobalSign

### Ejercicio 3
¿Cómo verifica un navegador si un certificado es confiable?

**Solución:** El navegador sigue la **cadena de confianza**:
1. El navegador recibe el certificado del sitio web
2. El navegador verifica qué CA firmó el certificado
3. El navegador verifica el certificado de la CA que firma
4. Esto se repite hasta llegar a una CA Raíz
5. La CA Raíz debe estar almacenada como confiable en el almacén de certificados del navegador

Si la cadena puede rastrearse hasta una CA Raíz confiable, el certificado se considera confiable.

### Ejercicio 4
¿Qué significan DV, OV y EV para los certificados?

**Solución:**
- **DV (Validación de Dominio):** Solo se verifica la propiedad del dominio (rápido, económico)
- **OV (Validación de Organización):** Se verifica adicionalmente la organización
- **EV (Validación Extendida):** Verificación exhaustiva de la organización

Los tres tipos ofrecen la misma fuerza de cifrado pero difieren en el alcance de la verificación de identidad.

---

## Referencias Cruzadas

- [04-05-01 Encryption Methods](./04-05-01-encryption-methods.md) - Cifrado asimétrico
- [04-05-04 Digital Signatures](./04-05-04-digital-signatures.md) - La CA firma certificados
- [04-03-01 Technical Measures](../04-03-protective-measures/04-03-01-technical-measures.md) - HTTPS
- [07-01-03 Protocols](../../07-networks/07-01-network-fundamentals/07-01-03-protocols.md) - TLS/SSL
