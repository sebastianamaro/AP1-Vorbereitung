# Securing Web-Based Applications

## Learning Objectives

After this chapter you should:
- Explain transport encryption (TLS/HTTPS)
- Understand certificates and their role
- Know common web attacks and countermeasures

---

## Core Content

### TLS / HTTPS

**HTTPS** = HTTP over **TLS** (Transport Layer Security). TLS provides:
- **Confidentiality** (encryption of the transmission)
- **Integrity** (protection against manipulation)
- **Authenticity** (server identity via certificate)

TLS uses **hybrid encryption**: asymmetric for the key exchange (handshake), then symmetric for the payload (faster).

### Certificates

A **digital certificate** (X.509) binds a public key to an identity (domain). It is signed by a **certificate authority (CA)**. The browser checks the **chain of trust** up to a root CA. This ensures that you are talking to the real server (protection against **man-in-the-middle**).

### Typical Web Attacks & Countermeasures

| Attack | Countermeasure |
|---------|---------------|
| **SQL injection** | Prepared statements, input validation |
| **XSS** (Cross-Site Scripting) | Encode/escape output, Content-Security-Policy |
| **CSRF** | CSRF token |
| **Man-in-the-middle** | HTTPS/TLS, valid certificates, HSTS |

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **TLS/HTTPS** | Encrypted, authenticated transmission |
| **Certificate (X.509)** | Binds a public key to an identity |
| **CA** | Certificate authority, signs certificates |
| **SQL injection/XSS** | Common web attacks |

---

## Exam Tips

- **HTTPS = HTTP + TLS**; TLS provides confidentiality, integrity, authenticity.
- Explain **hybrid encryption** in the TLS handshake (asymmetric → symmetric).
- Certificate/CA/chain of trust against man-in-the-middle.

---

## Practice Exercise

**Task (based on ConSystem GmbH):** A customer wants to encrypt all access to their web application. Explain TLS/HTTPS, the role of the certificate and name two typical web attacks with a countermeasure.

---

## Cross-References

- [05-02 Cryptography](../05-it-systems/05-02-kryptographie.md)
- [07-11 Login for Web-Based Applications](./07-11-anmeldung-webanwendungen.md)
