# Valores Hash

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Explicar el término valor hash/función hash
- Conocer las propiedades de las funciones hash
- Nombrar aplicaciones típicas de los valores hash
- Comprender la diferencia con el cifrado

**Nota:** ¡Este tema es NUEVO en el catálogo de exámenes 2025 y por lo tanto es particularmente relevante para el examen!

---

## Contenido Principal

### ¿Qué es un Valor Hash?

Un **valor hash** (también suma de verificación, huella digital) es el resultado de una **función hash**. Esta convierte una entrada de cualquier longitud en una salida de longitud fija.

```
+------------------------------------------------------------------+
|                      FUNCIÓN HASH                                 |
+------------------------------------------------------------------+
|                                                                   |
|   ENTRADA (cualquier longitud)        VALOR HASH (longitud fija)  |
|                                                                   |
|   "Hola"                 ---------->    a5b2c...                  |
|                            Hash                                   |
|   "Hola Mundo"           ---------->    7f3d1...                  |
|                           Función                                 |
|   [Archivo de 500 MB]    ---------->    9c8e4...                  |
|                                                                   |
|   Advertencia: ¡IMPORTANTE: Función unidireccional - no reversible! |
|   ¡La entrada NO puede calcularse desde el valor hash!            |
|                                                                   |
+------------------------------------------------------------------+
```

---

### Propiedades de las Funciones Hash

| Propiedad | Descripción |
|-----------|-------------|
| **Determinismo** | Misma entrada -> siempre el mismo hash |
| **Función Unidireccional** | No reversible (hash -> original imposible) |
| **Resistencia a Colisiones** | Diferentes entradas deben producir diferentes hashes |
| **Efecto Avalancha** | Pequeño cambio -> hash completamente diferente |
| **Longitud Fija** | Sin importar el tamaño de la entrada, el hash siempre tiene la misma longitud |

---

### El Efecto Avalancha

```
+------------------------------------------------------------------+
|                   EFECTO AVALANCHA                                |
+------------------------------------------------------------------+
|                                                                   |
|   Entrada: "Hola"                                                 |
|   SHA-256: 753692ec...2a1d (64 caracteres)                        |
|                                                                   |
|   Entrada: "Holb"  (¡solo una letra diferente!)                   |
|   SHA-256: b8d126f...7c3e (¡hash completamente diferente!)        |
|                                                                   |
|   --------------------------------------------------------------  |
|   Incluso los cambios más pequeños conducen a valores hash        |
|   completamente diferentes. ¡Esto hace detectable la manipulación!|
|                                                                   |
+------------------------------------------------------------------+
```

---

### Algoritmos Hash Conocidos

| Algoritmo | Longitud del Hash | Estado |
|-----------|-------------------|--------|
| **MD5** | 128 Bit (32 caracteres hex) | X Inseguro, ya no usar |
| **SHA-1** | 160 Bit (40 caracteres hex) | X Inseguro, ya no usar |
| **SHA-256** | 256 Bit (64 caracteres hex) | Estándar actual |
| **SHA-384** | 384 Bit (96 caracteres hex) | Seguro |
| **SHA-512** | 512 Bit (128 caracteres hex) | Seguro |
| **SHA-3** | variable | Nuevo estándar |

---

### Aplicaciones de los Valores Hash

```
+------------------------------------------------------------------+
|              APLICACIONES DE VALORES HASH                         |
+------------------------------------------------------------------+
|                                                                   |
|  +------------------+  +------------------+  +------------------+ |
|  | ALMACENAMIENTO   |  | VERIFICACIÓN     |  | FIRMAS           | |
|  | DE CONTRASEÑAS   |  | DE INTEGRIDAD    |  | DIGITALES        | |
|  |                  |  |                  |  |                  | |
|  | Hash de contra-  |  | Suma de verifi-  |  | El hash es       | |
|  | seña en lugar    |  | cación para      |  | firmado          | |
|  | de texto plano   |  | descargas        |  |                  | |
|  +------------------+  +------------------+  +------------------+ |
|                                                                   |
|  +------------------+  +------------------+  +------------------+ |
|  | BLOCKCHAIN       |  | DEDUPLICACIÓN    |  | COMPROBABILIDAD  | |
|  |                  |  |                  |  |                  | |
|  | Encadenamiento   |  | Detectar datos   |  | Valor hash como  | |
|  | de bloques       |  | duplicados       |  | marca de tiempo  | |
|  +------------------+  +------------------+  +------------------+ |
|                                                                   |
+------------------------------------------------------------------+
```

#### 1. Almacenamiento de Contraseñas

```
+----------------------------------------------------------------+
|              HASHING DE CONTRASEÑAS                             |
+----------------------------------------------------------------+
|                                                                 |
|   INCORRECTO: Almacenar contraseña en texto plano               |
|   -----------------------------------------                     |
|   Base de datos: | Usuario: Max | Contraseña: "Secreto123" |    |
|                                                                 |
|   CORRECTO: Almacenar solo el hash                              |
|   ----------------------------                                  |
|   Base de datos: | Usuario: Max | Hash: "a5b2c...9f1" |         |
|                                                                 |
|   Al iniciar sesión: Hashear la contraseña ingresada y          |
|                      comparar con el hash almacenado            |
|                                                                 |
+----------------------------------------------------------------+
```

**Seguridad Adicional mediante Salt:**
Un **salt** es un valor aleatorio que se añade a la contraseña antes del hashing:
- Previene ataques de tabla rainbow
- Las mismas contraseñas tienen diferentes hashes

#### 2. Verificación de Integridad

```
Descarga de Archivo:
1. El sitio web muestra el hash del archivo: SHA256: 7f3d1a...
2. El usuario descarga el archivo
3. El usuario calcula el hash del archivo descargado
4. Comparación: ¿Son ambos hashes iguales?
   -> Sí: El archivo no ha sido modificado (correcto)
   -> No: El archivo fue manipulado (X)
```

#### 3. Firmas Digitales

- El hash de un mensaje se firma con la clave privada
- Verificación con clave pública
- Más rápido que firmar todo el mensaje

---

### Hash vs. Cifrado

| Aspecto | Hash | Cifrado |
|---------|------|---------|
| **Dirección** | Unidireccional (no reversible) | Reversible (con clave) |
| **Propósito** | Verificar integridad | Asegurar confidencialidad |
| **Clave** | No se necesita clave | Se requiere clave |
| **Longitud de Salida** | Siempre la misma longitud | Depende de la entrada |
| **Ejemplo** | SHA-256 | AES |

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Valor Hash** | Resultado de una función hash, longitud fija |
| **Función Hash** | Función unidireccional, calcula el valor hash |
| **Suma de Verificación** | Otro término para valor hash |
| **Colisión** | Dos entradas diferentes producen el mismo hash |
| **Salt** | Valor aleatorio añadido a la contraseña |
| **Efecto Avalancha** | Pequeño cambio -> hash completamente diferente |
| **SHA** | Secure Hash Algorithm |
| **MD5** | Message Digest 5 (obsoleto, inseguro) |

---

## Consejos para el Examen

### Preguntas Frecuentes en el Examen

- ¿Qué es un valor hash?
- Nombra propiedades de una función hash
- ¿Para qué se usan los valores hash?
- ¿Por qué MD5 ya no es seguro?
- ¿Cuál es la diferencia entre hash y cifrado?

### Importante Recordar

- Hash es **función unidireccional** (¡no reversible!)
- **SHA-256** = estándar actual
- **MD5/SHA-1** = inseguros, ya no usar
- Aplicaciones: Contraseñas, integridad, firmas
- **Salt** protege contra ataques de tabla rainbow

### Regla Mnemotécnica

**Hash = Huella Digital**
- Identifica de forma única
- No se puede "calcular hacia atrás" a la persona desde la huella
- Pequeño cambio -> huella completamente diferente (para datos)

---

## Ejercicios Prácticos

### Ejercicio 1
¿Qué es un valor hash y qué propiedades tiene?

**Solución:** Un **valor hash** es el resultado de una función hash que convierte una entrada de cualquier longitud en una salida de longitud fija.

Propiedades:
1. **Determinismo:** Misma entrada -> siempre el mismo hash
2. **Función unidireccional:** No reversible
3. **Resistencia a colisiones:** Diferentes entradas deben producir diferentes hashes
4. **Efecto avalancha:** Pequeño cambio -> hash completamente diferente
5. **Longitud fija:** Independiente del tamaño de entrada

### Ejercicio 2
Nombra tres áreas de aplicación para valores hash.

**Solución:**
1. **Almacenamiento de contraseñas:** Las contraseñas se almacenan hasheadas, no en texto plano
2. **Verificación de integridad:** Sumas de verificación para descargas para detectar manipulación
3. **Firmas digitales:** El hash se firma en lugar del mensaje completo

(Otros: Blockchain, deduplicación, marcas de tiempo)

### Ejercicio 3
¿Cuál es la diferencia entre un valor hash y el cifrado?

**Solución:**
- **Hash:** Función unidireccional, no reversible. Se usa para verificación de integridad. No se necesita clave.
- **Cifrado:** Reversible (con clave). Se usa para proteger la confidencialidad. Se requiere clave.

La entrada original no puede calcularse desde un valor hash, mientras que los datos cifrados pueden descifrarse nuevamente con la clave correcta.

### Ejercicio 4
¿Por qué las contraseñas no se almacenan en texto plano sino como hash?

**Solución:** Si las contraseñas se almacenan en texto plano, los atacantes pueden leer todas las contraseñas directamente en caso de una violación de la base de datos. Si solo se almacenan hashes, el atacante no puede determinar las contraseñas originales (ya que el hash no es reversible). Durante el inicio de sesión, la contraseña ingresada se hashea y se compara con el hash almacenado.

### Ejercicio 5
¿Por qué se considera inseguro MD5?

**Solución:** MD5 se considera inseguro porque:
1. **Colisiones encontradas:** Se descubrieron métodos para crear dos entradas diferentes con el mismo hash MD5
2. **Longitud de hash corta:** Solo 128 bits
3. **Cálculo rápido:** Permite ataques de fuerza bruta

En su lugar, se debe usar SHA-256 o algoritmos más nuevos.

---

## Referencias Cruzadas

- [04-05-01 Encryption Methods](./04-05-01-encryption-methods.md) - Diferencia hash vs. cifrado
- [04-05-04 Digital Signatures](./04-05-04-digital-signatures.md) - Hash en firmas
- [04-01-01 CIA Triad](../04-01-protection-goals/04-01-01-cia-triad.md) - Integridad
- [04-03-02 Authentication-2FA](../04-03-protective-measures/04-03-02-authentication-2fa.md) - Seguridad de contraseñas
- [03-02-02 Anonymization-Pseudonymization](../../03-data-protection/03-02-technical-measures/03-02-02-anonymization-pseudonymization.md) - Hashing para pseudonimización
