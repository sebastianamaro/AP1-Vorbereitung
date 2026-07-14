# Authentication and Authorization

## Learning Objectives

After this chapter, you should be able to:
- Clearly distinguish Authentisierung, Authentifizierung and Autorisierung
- Know the three factors of authentication
- Explain two-factor authentication (2FA)

---

## Core Content

### The three terms (frequently confused!)

German distinguishes three terms that English often merges into "authentication/authorization":

| Term | Who? | Meaning |
|---------|------|-----------|
| **Authentisierung** (proving identity) | User | The user **proves their identity** (e.g. enters a password) |
| **Authentifizierung** (verifying identity) | System | The system **checks** the presented proof |
| **Autorisierung** (authorization) | System | The system **grants rights/access** after successful verification |

> **Order:** Authentisierung → Authentifizierung → Autorisierung.
> Mnemonic: *I* authenticate myself (authentisieren), the *system* verifies me (authentifizieren) and then authorizes (autorisieren) my access.

### The three factors

| Factor | Example |
|--------|----------|
| **Knowledge** | Password, PIN |
| **Possession** | Smartcard, TAN generator, smartphone |
| **Being (inherence)** | Fingerprint, face, iris (biometrics) |

### Two-factor authentication (2FA)

**2FA** combines **two different factors** (e.g. password *knowledge* + TAN to the phone *possession*). As a result, a stolen password alone is no longer enough → significantly higher security. **MFA** uses multiple factors.

> Two passwords are **not** 2FA – it must be **different factors**.

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **Authentisierung** | Proof of identity by the user |
| **Authentifizierung** | Verification of the proof by the system |
| **Autorisierung** | Granting of rights after successful verification |
| **2FA/MFA** | Combination of two/multiple factors |

---

## Exam Tips

- The **distinction between the three terms** is a classic exam question – remember the order and "who does what".
- **2FA = two different factors** (knowledge/possession/being). A common mistake: calling two identical factors 2FA.
- 2FA is **newly emphasized** in the updated catalog.

---

## Practice Exercise

**Task (based on ConSystem GmbH):** Distinguish Authentisierung, Authentifizierung and Autorisierung from one another and explain 2FA using an example.

---

## Cross-References

- [04-01 Aspects of IT Security](./04-01-aspekte-it-sicherheit.md)
- [04-06 Data Integrity](./04-06-datenintegritaet.md)
