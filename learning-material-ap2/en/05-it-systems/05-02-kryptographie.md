# Cryptography

## Learning Objectives

After this chapter you should be able to:
- Distinguish symmetric, asymmetric and hybrid encryption
- Explain hash functions and salting
- Classify digital signatures and PKI/certificates

---

## Core Content

### Encryption

| Type | Key | Characteristic | Examples |
|------|-----|----------------|----------|
| **Symmetric** | one shared key | fast; key exchange is problematic | AES, DES |
| **Asymmetric** | key pair (public/private) | solves key exchange; slower | RSA, ECC |
| **Hybrid** | combination | asymmetric for key exchange, symmetric for data | TLS |

The **public key** is used to encrypt / verify a signature, the **private key** to decrypt / sign.

### Hash Function

A **hash function** maps inputs of arbitrary length to a **fixed-length hash value**. Properties:

- **Deterministic** (same input → same hash)
- **One-way function** (not reversible)
- **Collision-resistant** (practically no two inputs with the same hash)
- **Avalanche effect** (a small change → a completely different hash)

Examples: **SHA-256**, SHA-3. (MD5/SHA-1 are considered insecure.) Uses: integrity checking, signatures, password storage.

**Salting:** A random **salt** that is unique per record is appended before hashing → prevents **rainbow table** attacks and identical hashes for identical passwords.

### Digital Signature

The sender **signs** the hash of a message with their **private key**; the recipient verifies it with the **public key**. A digital signature guarantees three things:

- **Integrity** – the message is unchanged
- **Authenticity** – the sender is genuine
- **Non-repudiation** – the sender cannot deny authorship

### PKI and Certificates

A **PKI** (Public Key Infrastructure) manages keys and trust:

- **Digital certificate (X.509):** binds a public key to an identity
- **CA (Certificate Authority):** signs and certifies certificates; the **RA** registers applicants
- **Chain of trust:** certificate → intermediate CA → root CA
- **Revocation:** via **CRL** (revocation list) or **OCSP** (online status query)

Application: **TLS/HTTPS** uses certificates for server authentication and hybrid encryption (see [07-10](../07-networks/07-10-webanwendungen-absichern.md)).

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Symmetric/Asymmetric** | One key vs. a key pair |
| **Hash function** | One-way mapping to a fixed hash value |
| **Salting** | Random value against rainbow tables |
| **Digital signature** | Integrity + authenticity + non-repudiation |
| **PKI / X.509 / CA** | Infrastructure, certificate, certification authority |

---

## Exam Tips

- Explain **symmetric vs. asymmetric** (incl. one algorithm each) and the **hybrid** combination.
- **Public key encrypts / private key decrypts** – be sure of the direction.
- Digital signature = the "three guarantees". Hashing/salting against rainbow tables (newly emphasized in the catalogue).
- PKI/certificate/CA against man-in-the-middle (link to TLS).

---

## Practice Exercise

**Task (based on ConSystem GmbH):** (1) Explain the difference between symmetric and asymmetric encryption and what hybrid encryption is used for. (2) How does a digital signature ensure integrity and authenticity?

---

## Cross-References

- [04-02 Authentication](../04-it-security/04-02-authentifizierung-autorisierung.md)
- [07-10 Securing web-based applications](../07-networks/07-10-webanwendungen-absichern.md)
