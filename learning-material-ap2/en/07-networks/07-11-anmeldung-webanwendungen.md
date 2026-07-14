# Login for Web-Based Applications

## Learning Objectives

After this chapter you should:
- Explain secure password storage (hashing + salt)
- Know registration/login procedures and their protection
- Classify modern methods (2FA, OAuth/SSO)

---

## Core Content

### Secure Password Storage

Passwords are **never stored in plaintext**, but as a **hash** (see [Cryptography](../05-it-systems/05-02-kryptographie.md)):

- **Salt:** a random value, unique per user, appended before hashing → prevents **rainbow table** attacks and identical hashes for identical passwords.
- **Slow hashing methods** (bcrypt, scrypt, Argon2) make brute force harder.

```
gespeichert: hash(passwort + salt) + salt
Login: hash(eingabe + gespeichertes_salt) == gespeicherter_hash ?
```

### Securing Registration & Login

- **Email verification** (double opt-in) on registration
- **Password policies** (length/complexity) sensible, but consider usability
- **Brute-force protection:** rate limiting, account lockout, **CAPTCHA**
- **Two-factor authentication (2FA)** (see [04-02](../04-it-security/04-02-authentifizierung-autorisierung.md))
- Transmission only over **HTTPS**

### OAuth / Single Sign-On

- **OAuth 2.0 / OpenID Connect:** login via an identity provider ("log in with …") without the application receiving the password (**token**-based).
- **SSO** (Single Sign-On): a single login for multiple services.

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **Salt** | Random value against rainbow tables |
| **bcrypt/Argon2** | Slow password hashing methods |
| **2FA** | Second factor in addition to the password |
| **OAuth/SSO** | Token-based login / single sign-on |

---

## Exam Tips

- Store **passwords hashed + salted** – frequent question; plaintext is a serious mistake.
- **Salt** prevents rainbow tables and identical hashes.
- Name 2FA, rate limiting and HTTPS as protection for the login.
- Hashing/anonymization and 2FA are **newly emphasized** in the updated catalogue.

---

## Practice Exercise

**Task (based on ConSystem GmbH):** Plan the user registration/login for a web application: How are passwords stored (hash + salt), and which three measures additionally secure the login?

---

## Cross-References

- [04-02 Authentication and Authorization](../04-it-security/04-02-authentifizierung-autorisierung.md)
- [07-10 Securing Web-Based Applications](./07-10-webanwendungen-absichern.md)
