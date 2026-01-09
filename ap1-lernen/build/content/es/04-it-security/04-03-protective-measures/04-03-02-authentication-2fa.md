# Autenticacion y Autenticacion de Dos Factores (2FA)

## Objetivos de Aprendizaje

Despues de este capitulo, deberas ser capaz de:
- Conocer los tres factores de autenticacion
- Explicar la Autenticacion de Dos Factores (2FA)
- Distinguir entre diferentes metodos de 2FA
- Nombrar ventajas y desventajas del 2FA

**Nota:** Este tema es NUEVO en el catalogo de examenes 2025 y por lo tanto particularmente relevante para el examen!

---

## Contenido Principal

### Que es la Autenticacion?

La **autenticacion** es el proceso de verificar una identidad. Responde a la pregunta: "Eres realmente quien dices ser?"

```
+------------------------------------------------------------------+
|              AUTENTICACION vs. AUTORIZACION                       |
+------------------------------------------------------------------+
|                                                                   |
|  AUTENTICACION                   AUTORIZACION                     |
|  +----------------------+       +----------------------+          |
|  |                      |       |                      |          |
|  |  "QUIEN ERES?"       |  -->  |  "QUE PUEDES HACER?" |          |
|  |                      |       |                      |          |
|  |  Verificar identidad |       |  Verificar permisos  |          |
|  |                      |       |                      |          |
|  +----------------------+       +----------------------+          |
|                                                                   |
|  Ejemplo: Inicio de sesion      Ejemplo: Que archivos             |
|  con usuario + contrasena       puede ver el usuario?             |
|                                                                   |
+------------------------------------------------------------------+
```

---

### Los Tres Factores de Autenticacion

```
+------------------------------------------------------------------+
|              LOS TRES FACTORES DE AUTENTICACION                   |
+------------------------------------------------------------------+
|                                                                   |
|  +------------------+  +------------------+  +------------------+ |
|  |   CONOCIMIENTO   |  |    POSESION      |  |    BIOMETRIA     | |
|  |                  |  |                  |  |                  | |
|  |  "Algo que       |  |  "Algo que       |  |  "Algo que       | |
|  |   se"            |  |   tengo"         |  |   soy"           | |
|  |                  |  |                  |  |                  | |
|  |  * Contrasena    |  |  * Smartphone    |  |  * Huella        | |
|  |  * PIN           |  |  * Tarjeta int.  |  |  * Rostro        | |
|  |  * Pregunta segur|  |  * Token         |  |  * Iris          | |
|  |                  |  |  * Llave USB     |  |  * Voz           | |
|  +------------------+  +------------------+  +------------------+ |
|                                                                   |
+------------------------------------------------------------------+
```

#### Factor 1: Conocimiento

| Metodo | Ejemplo | Seguridad |
|--------|---------|-----------|
| **Contrasena** | "Secreto123!" | Media (depende de complejidad) |
| **PIN** | "1234" | Baja a Media |
| **Pregunta de Seguridad** | "Nombre de mascota?" | Baja (a menudo adivinable) |
| **Patron de Desbloqueo** | Patron en smartphone | Baja a Media |

**Debilidad:** Puede ser robado, adivinado u olvidado.

#### Factor 2: Posesion

| Metodo | Descripcion | Seguridad |
|--------|-------------|-----------|
| **Smartphone** | SMS o app autenticadora | Media a Alta |
| **Token de Hardware** | Dispositivo genera codigos | Alta |
| **Tarjeta Inteligente** | Tarjeta con chip | Alta |
| **Llave de Seguridad USB** | FIDO2/WebAuthn | Muy Alta |

**Debilidad:** Puede perderse o ser robado.

#### Factor 3: Biometria (Inherencia)

| Metodo | Descripcion | Seguridad |
|--------|-------------|-----------|
| **Huella Dactilar** | Escaner de huellas | Alta |
| **Reconocimiento Facial** | Face ID | Alta |
| **Escaneo de Iris** | Patron del iris | Muy Alta |
| **Reconocimiento de Voz** | Patron de voz | Media |

**Debilidad:** No puede cambiarse si se compromete.

---

### Que es 2FA/MFA?

#### Definiciones

| Termino | Definicion |
|---------|------------|
| **2FA** | **Autenticacion de Dos Factores:** Uso de **dos factores diferentes** |
| **MFA** | **Autenticacion Multi-Factor:** Uso de **dos o mas factores diferentes** |

**Importante:** Deben ser **categorias de factores diferentes**!

```
SI - 2FA VERDADERO:
   Contrasena (Conocimiento) + Codigo SMS (Posesion) = 2FA

NO - NO ES 2FA:
   Contrasena (Conocimiento) + PIN (Conocimiento) = Solo un factor!
```

---

### Metodos de 2FA en Detalle

#### 2FA Basado en SMS

```
+----------------------------------------------------------------+
|                    2FA BASADO EN SMS                            |
+----------------------------------------------------------------+
|                                                                 |
|  1. Introducir contrasena                                       |
|         |                                                       |
|         v                                                       |
|  2. Recibir SMS con codigo                                      |
|         |                                                       |
|         v                                                       |
|  3. Introducir codigo                                           |
|         |                                                       |
|         v                                                       |
|  4. Acceso concedido                                            |
|                                                                 |
|  Advertencia: Debilidad: Intercambio de SIM, posible            |
|  interceptacion de SMS                                          |
+----------------------------------------------------------------+
```

#### TOTP (Contrasena de Un Solo Uso Basada en Tiempo)

```
+----------------------------------------------------------------+
|                    TOTP / APP AUTENTICADORA                     |
+----------------------------------------------------------------+
|                                                                 |
|  +------------------+        +------------------+               |
|  |   Authenticator  |        |      Servidor    |               |
|  |       App        |        |                  |               |
|  |                  |        |                  |               |
|  |   Secreto Comp.  |<------>|  Secreto Comp.   |               |
|  |       +          |        |       +          |               |
|  |   Hora Actual    |        |   Hora Actual    |               |
|  |       =          |        |       =          |               |
|  |   CODIGO: 847293 |        |   CODIGO: 847293 |               |
|  +------------------+        +------------------+               |
|                                                                 |
|  El codigo cambia cada 30 segundos                              |
|  Ejemplos: Google Authenticator, Microsoft Authenticator        |
+----------------------------------------------------------------+
```

| Propiedad | Descripcion |
|-----------|-------------|
| **Funcion** | Secreto compartido + Marca de tiempo = Codigo |
| **Validez** | Tipicamente 30 segundos |
| **Seguridad** | Mayor que SMS |
| **Capaz sin Conexion** | Si (no se necesita conexion a internet) |

#### Token de Hardware / FIDO2

| Metodo | Descripcion | Ejemplos |
|--------|-------------|----------|
| **Token de Hardware** | Dispositivo fisico genera codigos | RSA SecurID |
| **FIDO2/WebAuthn** | Estandar para autenticacion sin contrasena | YubiKey, Windows Hello |

**Ventajas de FIDO2:**
- Resistente al phishing
- No hay codigos que escribir
- Seguridad muy alta

---

### Comparacion de Metodos de 2FA

| Metodo | Seguridad | Facilidad de Uso | Coste |
|--------|-----------|------------------|-------|
| **SMS** | Baja-Media | Alta | Bajo |
| **App TOTP** | Media-Alta | Media | Ninguno |
| **Notificacion Push** | Media-Alta | Muy Alta | Ninguno |
| **Token de Hardware** | Muy Alta | Media | Medio-Alto |
| **FIDO2/WebAuthn** | Muy Alta | Alta | Medio |

---

### Ventajas y Desventajas del 2FA

#### Ventajas

| Ventaja | Descripcion |
|---------|-------------|
| **Mayor Seguridad** | Atacante necesita dos factores |
| **Proteccion ante Fuga de Contrasena** | Contrasena robada sola no es suficiente |
| **Cumplimiento** | Cumple requisitos de seguridad |
| **Proteccion contra Phishing** | Hace mas dificiles los ataques de phishing |

#### Desventajas

| Desventaja | Descripcion |
|------------|-------------|
| **Complejidad** | Paso adicional durante el inicio de sesion |
| **Dependencia del Dispositivo** | Factor de posesion debe estar disponible |
| **Coste** | Tokens de hardware cuestan dinero |
| **Recuperacion** | Cuando se pierde el segundo factor |

---

## Terminos Clave

| Termino | Explicacion |
|---------|-------------|
| **Autenticacion** | Verificacion de identidad |
| **Autorizacion** | Verificacion de permisos |
| **2FA** | Autenticacion de Dos Factores |
| **MFA** | Autenticacion Multi-Factor |
| **TOTP** | Contrasena de Un Solo Uso Basada en Tiempo |
| **FIDO2** | Estandar para autenticacion segura |
| **Biometria** | Caracteristicas fisicas para identificacion |

---

## Consejos para el Examen

### Preguntas Frecuentes del Examen

- Cuales son los tres factores de autenticacion?
- Cual es la diferencia entre 2FA y MFA?
- Da un ejemplo de 2FA verdadero
- Que debilidades tiene el 2FA basado en SMS?

### Importante Recordar

- **3 Factores:** Conocimiento, Posesion, Biometria
- **2FA** = Dos categorias de factores **diferentes**
- **TOTP** = App autenticadora con codigo basado en tiempo
- **SMS-2FA** es mejor que nada, pero no es optimo

### Mnemotecnico

**C-P-B** = **C**onocimiento, **P**osesion, **B**iometria
"**L**o que **s**e, **t**engo y **s**oy"

---

## Ejercicios Practicos

### Ejercicio 1
Nombra los tres factores de autenticacion y da un ejemplo de cada uno.

**Solucion:**
1. **Conocimiento** (algo que se): Contrasena, PIN
2. **Posesion** (algo que tengo): Smartphone, tarjeta inteligente, token
3. **Biometria** (algo que soy): Huella dactilar, reconocimiento facial

### Ejercicio 2
Es la combinacion de contrasena y PIN un 2FA verdadero? Justifica.

**Solucion:** **No**, esto no es 2FA verdadero. Contrasena y PIN pertenecen ambos a la categoria "Conocimiento". Para 2FA verdadero, se deben usar dos categorias de factores **diferentes**, ej. contrasena (conocimiento) + codigo SMS (posesion).

### Ejercicio 3
Explica como funciona TOTP (Contrasena de Un Solo Uso Basada en Tiempo).

**Solucion:** Con TOTP, la app autenticadora y el servidor comparten un secreto comun (Secreto Compartido). Ambos calculan un codigo a partir de este secreto y la hora actual. Como ambos usan la misma hora y el mismo secreto, llegan al mismo codigo. El codigo tipicamente cambia cada 30 segundos.

### Ejercicio 4
Que debilidades tiene el 2FA basado en SMS?

**Solucion:**
1. **Intercambio de SIM:** Atacantes pueden hacerse cargo de la tarjeta SIM
2. **Interceptacion de SMS:** Los SMS pueden ser interceptados
3. **Ingenieria Social:** La victima puede ser manipulada para compartir el codigo
4. **Dependencia del Dispositivo:** El smartphone debe estar disponible

A pesar de estas debilidades, SMS-2FA es mejor que ningun 2FA.

---

## Referencias Cruzadas

- [04-02-01 Tipos de Amenazas](../04-02-threats-risks/04-02-01-threat-types.md) - Ataques de contrasenas
- [04-03-01 Medidas Tecnicas](./04-03-01-technical-measures.md) - Otras medidas de proteccion
- [04-05-02 Valores Hash](../04-05-cryptography/04-05-02-hash-values.md) - Almacenamiento de contrasenas
- [03-02-01 TOM](../../03-data-protection/03-02-technical-measures/03-02-01-tom.md) - Control de acceso
