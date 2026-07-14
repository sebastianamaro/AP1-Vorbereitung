# Inicio de sesión en aplicaciones web

## Objetivos de Aprendizaje

Después de este capítulo deberías:
- Explicar el almacenamiento seguro de contraseñas (hashing + salt)
- Conocer los procedimientos de registro/inicio de sesión y su protección
- Ubicar los métodos modernos (2FA, OAuth/SSO)

---

## Contenido Principal

### Almacenamiento seguro de contraseñas

Las contraseñas **nunca se almacenan en texto plano**, sino como **hash** (véase [Criptografía](../05-it-systems/05-02-kryptographie.md)):

- **Salt:** valor aleatorio, único por usuario, que se añade antes del hasheo → evita los ataques de **rainbow table** y hashes idénticos para contraseñas idénticas.
- **Métodos de hash lentos** (bcrypt, scrypt, Argon2) dificultan el ataque por fuerza bruta.

```
gespeichert: hash(passwort + salt) + salt
Login: hash(eingabe + gespeichertes_salt) == gespeicherter_hash ?
```

### Proteger el registro y el inicio de sesión

- **Verificación por correo electrónico** (double opt-in) en el registro
- **Políticas de contraseñas** (longitud/complejidad) razonables, pero teniendo en cuenta la usabilidad
- **Protección contra fuerza bruta:** rate limiting, bloqueo de cuenta, **CAPTCHA**
- **Autenticación de dos factores (2FA)** (véase [04-02](../04-it-security/04-02-authentifizierung-autorisierung.md))
- Transmisión únicamente por **HTTPS**

### OAuth / Single Sign-On

- **OAuth 2.0 / OpenID Connect:** inicio de sesión mediante un proveedor de identidad ("iniciar sesión con …") sin que la aplicación reciba la contraseña (basado en **tokens**).
- **SSO** (Single Sign-On): un único inicio de sesión para varios servicios.

---

## Términos Clave

| Término | Explicación |
|---------|-----------|
| **Salt** | Valor aleatorio contra las rainbow tables |
| **bcrypt/Argon2** | Métodos de hash de contraseñas lentos |
| **2FA** | Segundo factor además de la contraseña |
| **OAuth/SSO** | Inicio de sesión basado en tokens / inicio de sesión único |

---

## Consejos para el Examen

- Almacena las **contraseñas hasheadas + con salt** – pregunta frecuente; el texto plano es un error grave.
- El **salt** evita las rainbow tables y los hashes idénticos.
- Nombra 2FA, rate limiting y HTTPS como protección del inicio de sesión.
- El hashing/anonimización y 2FA están **recién enfatizados** en el catálogo actualizado.

---

## Ejercicio Práctico

**Tarea (según ConSystem GmbH):** Planifica el registro/inicio de sesión de usuarios para una aplicación web: ¿cómo se almacenan las contraseñas (hash + salt) y qué tres medidas protegen adicionalmente el inicio de sesión?

---

## Referencias

- [04-02 Autenticación y autorización](../04-it-security/04-02-authentifizierung-autorisierung.md)
- [07-10 Protección de aplicaciones web](./07-10-webanwendungen-absichern.md)
