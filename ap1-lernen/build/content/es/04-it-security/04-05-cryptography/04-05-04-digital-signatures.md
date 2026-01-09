# Firmas Digitales

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Explicar el propósito de las firmas digitales
- Comprender el proceso de creación y verificación de firmas
- Conocer la diferencia con el cifrado
- Nombrar áreas de aplicación

---

## Contenido Principal

### ¿Qué es una Firma Digital?

Una **firma digital** es un método criptográfico que asegura la **autenticidad** e **integridad** de datos digitales (ej., documentos, correos electrónicos).

```
+------------------------------------------------------------------+
|                  FIRMA DIGITAL                                    |
+------------------------------------------------------------------+
|                                                                   |
|  Garantiza:                                                       |
|                                                                   |
|  (Correcto) AUTENTICIDAD                                          |
|     El documento realmente proviene del remitente declarado       |
|                                                                   |
|  (Correcto) INTEGRIDAD                                            |
|     El documento no fue alterado                                  |
|                                                                   |
|  (Correcto) NO REPUDIO                                            |
|     El remitente no puede negar haber firmado                     |
|                                                                   |
|  (X) NO Confidencialidad                                          |
|     ¡El contenido NO está cifrado!                                |
|                                                                   |
+------------------------------------------------------------------+
```

---

### Diferencia: Firma vs. Cifrado

```
+------------------------------------------------------------------+
|           CIFRADO vs. FIRMA DIGITAL                               |
+------------------------------------------------------------------+
|                                                                   |
|  CIFRADO                         FIRMA DIGITAL                    |
|  +----------------------+        +----------------------+         |
|  |                      |        |                      |         |
|  | Clave                |        | Clave                |         |
|  | pública del          |        | privada del          |         |
|  | destinatario         |        | remitente            |         |
|  |      para            |        |      para            |         |
|  | CIFRAR               |        | FIRMAR               |         |
|  |                      |        |                      |         |
|  | Clave                |        | Clave                |         |
|  | privada del          |        | pública del          |         |
|  | destinatario         |        | remitente            |         |
|  |      para            |        |      para            |         |
|  | DESCIFRAR            |        | VERIFICACIÓN         |         |
|  |                      |        |                      |         |
|  | OBJETIVO: Confid.    |        | OBJETIVO: Autenticidad|        |
|  +----------------------+        +----------------------+         |
|                                                                   |
+------------------------------------------------------------------+
```

| Aspecto | Cifrado | Firma Digital |
|---------|---------|---------------|
| **Propósito** | Confidencialidad | Autenticidad, Integridad |
| **Cifrar con** | Clave pública del destinatario | - |
| **Firmar con** | - | Clave privada del remitente |
| **Verificar con** | Clave privada del destinatario | Clave pública del remitente |

---

### Proceso de la Firma Digital

```
+------------------------------------------------------------------+
|              CREACIÓN DE FIRMA                                    |
+------------------------------------------------------------------+
|                                                                   |
|   REMITENTE (Alice)                                               |
|                                                                   |
|   1. Crear documento                                              |
|      +---------------+                                            |
|      |   Documento   |                                            |
|      +-------+-------+                                            |
|              |                                                    |
|              v                                                    |
|   2. Calcular hash del documento                                  |
|      +---------------+                                            |
|      |  Hash: 7f3d...|                                            |
|      +-------+-------+                                            |
|              |                                                    |
|              v                                                    |
|   3. Cifrar hash con clave PRIVADA                                |
|      +---------------+                                            |
|      |  Firma:       |                                            |
|      |  X9k2...      |                                            |
|      +---------------+                                            |
|              |                                                    |
|              v                                                    |
|   4. Enviar documento + firma                                     |
|      [Documento] + [Firma]  ---------------------->               |
|                                                                   |
+------------------------------------------------------------------+
```

```
+------------------------------------------------------------------+
|              VERIFICACIÓN DE FIRMA                                |
+------------------------------------------------------------------+
|                                                                   |
|   RECEPTOR (Bob)                                                  |
|                                                                   |
|   1. Recibir documento y firma                                    |
|      [Documento] + [Firma]                                        |
|              |                                                    |
|              v                                                    |
|   2. Calcular hash del documento recibido                         |
|      +---------------+                                            |
|      |  Hash1: 7f3d..|                                            |
|      +---------------+                                            |
|              |                                                    |
|              v                                                    |
|   3. Descifrar firma con clave PÚBLICA de Alice                   |
|      +---------------+                                            |
|      |  Hash2: 7f3d..|                                            |
|      +---------------+                                            |
|              |                                                    |
|              v                                                    |
|   4. Comparar Hash1 y Hash2                                       |
|      ¿Hash1 == Hash2?                                             |
|      -> SÍ:  Firma válida (correcto)                              |
|      -> NO: Firma inválida / Documento alterado (X)               |
|                                                                   |
+------------------------------------------------------------------+
```

---

### Resumen: Proceso de Firma

| Paso | Acción | Clave Utilizada |
|------|--------|-----------------|
| **Firmar** | Calcular hash, cifrar con clave privada | Clave **privada** del remitente |
| **Verificar** | Descifrar firma con clave pública, comparar hash | Clave **pública** del remitente |

---

### Áreas de Aplicación

| Aplicación | Descripción |
|------------|-------------|
| **Correo Electrónico (S/MIME, PGP)** | Correos firmados |
| **Code Signing** | Firmar actualizaciones de software |
| **Documentos PDF** | Firma digital legalmente válida |
| **Certificados** | La CA firma certificados |
| **Contratos** | Firma digital de contratos |
| **Facturas** | Facturas electrónicas |

---

### Significado Legal

En Alemania (y la UE), las firmas digitales están reguladas legalmente:

| Nivel | Descripción | Efecto Legal |
|-------|-------------|--------------|
| **Firma Electrónica Simple** | Firma escaneada, correo electrónico | Valor probatorio más bajo |
| **Firma Avanzada** | Con medios criptográficos | Valor probatorio medio |
| **Firma Cualificada** | Con certificado cualificado, dispositivo seguro de creación de firma | Equivalente a firma manuscrita |

El **Reglamento eIDAS** (UE) regula el reconocimiento dentro de la UE.

---

### Algoritmos para Firmas Digitales

| Algoritmo | Descripción |
|-----------|-------------|
| **RSA** | Método clásico, ampliamente utilizado |
| **DSA** | Algoritmo de Firma Digital |
| **ECDSA** | DSA de Curva Elíptica, claves más cortas |
| **EdDSA** | Alternativa moderna |

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Firma Digital** | Prueba criptográfica de autenticidad e integridad |
| **Autenticidad** | Prueba de la genuinidad del remitente |
| **Integridad** | Prueba de que los datos no fueron alterados |
| **No Repudio** | El remitente no puede negar la firma |
| **Code Signing** | Firma de software |
| **Firma Cualificada** | Legalmente equivalente a firma manuscrita |

---

## Consejos para el Examen

### Preguntas Frecuentes en el Examen

- ¿Qué es una firma digital?
- ¿Cómo funciona la verificación de firmas?
- ¿Qué objetivos de protección se logran con las firmas digitales?
- ¿Cuál es la diferencia entre firma y cifrado?

### Importante Recordar

- **Firmar** con clave PRIVADA
- **Verificar** con clave PÚBLICA
- Objetivos de protección: **Autenticidad, Integridad, No Repudio**
- **NO** confidencialidad (para eso se necesita cifrado)

### Regla Mnemotécnica

**"Firmar es personal"** -> Con clave PRIVADA
**"Verificación es pública"** -> Con clave PÚBLICA

---

## Ejercicios Prácticos

### Ejercicio 1
¿Qué garantiza una firma digital?

**Solución:** Una firma digital garantiza:
1. **Autenticidad:** El documento realmente proviene del remitente declarado
2. **Integridad:** El documento no fue alterado después de la firma
3. **No Repudio:** El remitente no puede negar haber firmado el documento

**No** garantiza confidencialidad - el contenido no está cifrado.

### Ejercicio 2
Describe el proceso de creación de firmas.

**Solución:**
1. El remitente crea un **hash** del documento
2. El hash se cifra con la **clave privada** del remitente
3. El resultado es la **firma digital**
4. Documento y firma se envían juntos al destinatario

### Ejercicio 3
¿Cómo verifica el destinatario una firma digital?

**Solución:**
1. El destinatario calcula el **hash del documento recibido** (Hash1)
2. Descifra la firma con la **clave pública** del remitente (Hash2)
3. **Compara** ambos hashes:
   - Iguales -> Firma válida, documento sin alterar
   - Diferentes -> Firma inválida o documento manipulado

### Ejercicio 4
¿Cuál es la diferencia entre cifrado y firma digital?

**Solución:**
| Aspecto | Cifrado | Firma Digital |
|---------|---------|---------------|
| **Objetivo** | Confidencialidad | Autenticidad, Integridad |
| **Cifrar** | Con clave pública del destinatario | - |
| **Firmar** | - | Con clave privada del remitente |
| **Verificar** | Con clave privada del destinatario | Con clave pública del remitente |

Con el cifrado, solo el destinatario puede leer; con la firma, cualquiera con la clave pública puede verificar.

---

## Referencias Cruzadas

- [04-05-01 Encryption Methods](./04-05-01-encryption-methods.md) - Cifrado asimétrico
- [04-05-02 Hash Values](./04-05-02-hash-values.md) - Hash para firmas
- [04-05-03 Certificates](./04-05-03-certificates.md) - Verificación de claves
- [04-01-01 CIA Triad](../04-01-protection-goals/04-01-01-cia-triad.md) - Autenticidad, Integridad
