# Digital Certificates

## Learning Objectives

After this chapter, you should be able to:
- Explain the purpose of digital certificates
- Know the components of a certificate
- Understand the role of Certificate Authorities (CAs)
- Describe the trust model (PKI)

---

## Core Content

### What is a Digital Certificate?

A **digital certificate** is an electronic document that links the identity of a person or organization with a public key. It is issued by a trusted authority (CA).

```
+------------------------------------------------------------------+
|                  DIGITAL CERTIFICATE                              |
+------------------------------------------------------------------+
|                                                                   |
|  Problem: How can I be sure that a public key                     |
|           really belongs to "www.bank.com"?                       |
|                                                                   |
|  Solution: A trusted authority (CA) confirms the                  |
|            assignment with a certificate.                         |
|                                                                   |
|  +--------------------------------------------------------------+ |
|  |               CERTIFICATE for www.bank.com                    | |
|  +--------------------------------------------------------------+ |
|  | Subject:        www.bank.com                                  | |
|  | Public          MIIBIjANBgkqhkiG...                           | |
|  | Key:                                                          | |
|  | Valid from:     01.01.2025                                    | |
|  | Valid to:       31.12.2025                                    | |
|  | Issuer:         DigiCert CA                                   | |
|  | Signature:      [Signature of CA]                             | |
|  +--------------------------------------------------------------+ |
|                                                                   |
+------------------------------------------------------------------+
```

---

### Components of a Certificate (X.509)

| Field | Description |
|-------|-------------|
| **Subject** | Who the certificate belongs to (e.g., domain, person) |
| **Public Key** | The public key of the subject |
| **Issuer** | The CA that issued the certificate |
| **Valid From/To** | Validity period |
| **Serial Number** | Unique number |
| **Signature Algorithm** | Used signature algorithm |
| **Signature** | Digital signature of the CA |

---

### Certificate Authorities (CA)

A **Certificate Authority (CA)** is a trusted organization that issues and signs certificates.

```
+------------------------------------------------------------------+
|              CERTIFICATE HIERARCHY (PKI)                          |
+------------------------------------------------------------------+
|                                                                   |
|                     +------------------+                          |
|                     |     ROOT CA      | Self-signed              |
|                     |   (Root CA)      | Trusted in browser       |
|                     +--------+---------+                          |
|                              |                                    |
|              +---------------+---------------+                    |
|              v               v               v                    |
|       +------------+   +------------+   +------------+           |
|       | Inter-     |   | Inter-     |   | Inter-     |           |
|       | mediate    |   | mediate    |   | mediate    |           |
|       | CA         |   | CA         |   | CA         |           |
|       +-----+------+   +-----+------+   +-----+------+           |
|             |               |               |                     |
|        +----+----+     +----+----+     +----+----+               |
|        v         v     v         v     v         v               |
|     [Cert.]  [Cert.] [Cert.] [Cert.] [Cert.] [Cert.]             |
|     End-     End-    End-    End-    End-    End-                 |
|     entity   entity  entity  entity  entity  entity               |
|                                                                   |
+------------------------------------------------------------------+
```

#### Well-Known Certificate Authorities

| CA | Description |
|----|-------------|
| **DigiCert** | Large commercial CA |
| **Let's Encrypt** | Free certificates |
| **Comodo/Sectigo** | Commercial CA |
| **GlobalSign** | Large CA |
| **Bundesdruckerei** | German government certificates |

---

### How Does the Chain of Trust Work?

```
+------------------------------------------------------------------+
|              CERTIFICATE VALIDATION                               |
+------------------------------------------------------------------+
|                                                                   |
|   1. Browser receives certificate from www.shop.com               |
|                      v                                            |
|   2. Browser checks: Who signed the certificate?                  |
|      -> Signed by "Intermediate CA"                               |
|                      v                                            |
|   3. Browser checks: Who signed the intermediate certificate?     |
|      -> Signed by "Root CA"                                       |
|                      v                                            |
|   4. Browser checks: Is the Root CA trustworthy?                  |
|      -> Yes, Root CA is in browser's certificate store (checkmark)|
|                      v                                            |
|   5. Browser shows: Connection is secure (lock icon)              |
|                                                                   |
+------------------------------------------------------------------+
```

---

### Certificate Types

#### By Validation Level

| Type | Validation | Symbol |
|------|------------|--------|
| **DV (Domain Validated)** | Only domain ownership verified | Lock |
| **OV (Organization Validated)** | Organization verified | Lock |
| **EV (Extended Validation)** | Extensive verification | Lock (formerly green address bar) |

#### By Usage

| Type | Usage |
|------|-------|
| **SSL/TLS Certificate** | HTTPS for websites |
| **Code Signing** | Sign software |
| **Email (S/MIME)** | Email encryption |
| **Client Certificate** | User authentication |

---

### Certificate Problems

| Problem | Description | Browser Warning |
|---------|-------------|-----------------|
| **Expired** | Validity period exceeded | "Certificate expired" |
| **Wrong Domain** | Certificate for different domain | "Name does not match" |
| **Unknown CA** | CA not trustworthy | "Not trustworthy" |
| **Revoked** | Certificate was withdrawn | "Certificate revoked" |

---

### Certificate Revocation

When a certificate is compromised, it must be revoked:

| Method | Description |
|--------|-------------|
| **CRL (Certificate Revocation List)** | List of revoked certificates |
| **OCSP (Online Certificate Status Protocol)** | Real-time online status query |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Digital Certificate** | Electronic document for identity confirmation |
| **CA** | Certificate Authority |
| **PKI** | Public Key Infrastructure (trust infrastructure) |
| **Root CA** | Root Certificate Authority (self-signed) |
| **X.509** | Standard for certificate format |
| **SSL/TLS** | Protocols for encrypted connections |
| **CRL** | Certificate Revocation List |

---

## Exam Tips

### Frequent Exam Questions

- What is a digital certificate?
- What is a Certificate Authority (CA) for?
- How does the chain of trust work?
- What happens when a certificate expires?

### Important to Remember

- **Certificate** = Public key + Identity + CA signature
- **CA** = Trusted authority that issues certificates
- **Root CA** = Self-signed, pre-installed in browser
- **DV/OV/EV** = Different validation levels

---

## Practice Exercises

### Exercise 1
What is a digital certificate and what is it for?

**Solution:** A **digital certificate** is an electronic document that:
- Links the identity of a person/organization with a public key
- Is issued by a trusted Certificate Authority (CA)
- Confirms the authenticity of the public key

It serves to ensure during encrypted communication (e.g., HTTPS) that you are really communicating with the correct server.

### Exercise 2
What is a Certificate Authority (CA)?

**Solution:** A **Certificate Authority (CA)** is a trusted organization that:
- Verifies the identity of applicants
- Issues and signs digital certificates
- Vouches for the authenticity of the key-to-identity assignment
- Revokes certificates when necessary

Examples: DigiCert, Let's Encrypt, GlobalSign

### Exercise 3
How does a browser verify if a certificate is trustworthy?

**Solution:** The browser follows the **chain of trust**:
1. Browser receives the website's certificate
2. Browser checks which CA signed the certificate
3. Browser checks the certificate of the signing CA
4. This is repeated until a Root CA is reached
5. The Root CA must be stored as trustworthy in the browser's certificate store

If the chain can be traced back to a trustworthy Root CA, the certificate is considered trustworthy.

### Exercise 4
What do DV, OV, and EV mean for certificates?

**Solution:**
- **DV (Domain Validated):** Only domain ownership is verified (fast, inexpensive)
- **OV (Organization Validated):** The organization is additionally verified
- **EV (Extended Validation):** Extensive verification of the organization

All three types offer the same encryption strength but differ in the scope of identity verification.

---

## Cross-References

- [04-05-01 Encryption Methods](./04-05-01-encryption-methods.md) - Asymmetric encryption
- [04-05-04 Digital Signatures](./04-05-04-digital-signatures.md) - CA signs certificates
- [04-03-01 Technical Measures](../04-03-protective-measures/04-03-01-technical-measures.md) - HTTPS
- [07-01-03 Protocols](../../07-networks/07-01-network-fundamentals/07-01-03-protocols.md) - TLS/SSL
