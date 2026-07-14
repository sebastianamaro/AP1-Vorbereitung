# Control de Acceso, Kerberos y Principios de Seguridad

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Distinguir Zutrittskontrolle, Zugangskontrolle y Zugriffskontrolle
- Clasificar Kerberos e IAM
- Aplicar principios de seguridad fundamentales

---

## Contenido Principal

### Las tres "Z" del control (pregunta clásica de examen)

El alemán usa tres términos de sonido similar que se traducen todos, a grandes rasgos, como "control de acceso":

| Control | Protege | Ejemplo |
|-----------|---------|----------|
| **Zutrittskontrolle** (control de acceso físico) | el acceso **físico** a salas/dispositivos | Lector de credenciales, sistema de cierre, sala de servidores |
| **Zugangskontrolle** (control de acceso al sistema) | el **inicio de sesión** en el sistema (autenticación) | Login, contraseña, 2FA |
| **Zugriffskontrolle** (control de acceso a datos) | los **derechos** sobre datos/funciones (autorización) | Permisos de archivos, roles |

> Regla mnemotécnica: **Zutritt → sala**, **Zugang → sistema**, **Zugriff → datos**.

### Kerberos

**Kerberos** es un **protocolo de autenticación de red basado en tickets**. Un **KDC** (Key Distribution Center) central emite, tras el inicio de sesión, un **Ticket-Granting Ticket (TGT)**; con él, el usuario obtiene **service tickets** para servicios individuales – **sin** volver a enviar la contraseña (single sign-on en la red). Se emplea, entre otros, en Windows Active Directory. *(Nuevo en el catálogo.)*

### IAM

La **Identity & Access Management (IAM)** gestiona **identidades** y **permisos** de forma centralizada (creación/bloqueo de cuentas, roles, concesión de derechos, trazabilidad).

### Principios de seguridad

- **Least Privilege** – cada uno recibe solo los derechos **mínimos necesarios**
- **Need-to-Know** – acceso solo a la información necesaria para la tarea
- **Defense in Depth** – **varias** capas de protección (firewall, VPN, antivirus, IDS/IPS)
- **Zero Trust** – "no se confía en **nadie** por defecto"; cada solicitud se comprueba

---

## Términos Clave

| Término | Explicación |
|---------|-----------|
| **Zutritts-/Zugangs-/Zugriffskontrolle** | Sala / sistema / datos (control de acceso físico / al sistema / a datos) |
| **Kerberos** | Protocolo de autenticación de red basado en tickets (KDC/TGT) |
| **IAM** | Gestión centralizada de identidades y derechos |
| **Least Privilege / Zero Trust** | Derechos mínimos / sin confianza por defecto |

---

## Consejos para el Examen

- Asigna con seguridad las **tres "Z"** (Zutritt/Zugang/Zugriff) – pregunta frecuente.
- **Kerberos** = tickets/KDC, sin repetir la contraseña (nuevo en el catálogo).
- Saber explicar **Least Privilege**, **Defense in Depth** y **Zero Trust** cada uno en una frase.

---

## Ejercicio Práctico

**Tarea:** Asigna medidas (lector de credenciales, login con 2FA, permisos de archivos) a los tres tipos de control y explica el principio "Least Privilege".

---

## Referencias

- [04-02 Autenticación y Autorización](./04-02-authentifizierung-autorisierung.md)
- [04-01 Aspectos de la Seguridad Informática](./04-01-aspekte-it-sicherheit.md)
