# Authentication and Two-Factor Authentication (2FA)

## Learning Objectives

After this chapter, you should be able to:
- Know the three authentication factors
- Explain Two-Factor Authentication (2FA)
- Distinguish between different 2FA methods
- Name advantages and disadvantages of 2FA

**Note:** This topic is NEW in the 2025 exam catalog and therefore particularly exam-relevant!

---

## Core Content

### What is Authentication?

**Authentication** is the process of verifying an identity. It answers the question: "Are you really who you claim to be?"

```
+------------------------------------------------------------------+
|              AUTHENTICATION vs. AUTHORIZATION                     |
+------------------------------------------------------------------+
|                                                                   |
|  AUTHENTICATION                 AUTHORIZATION                     |
|  +----------------------+       +----------------------+          |
|  |                      |       |                      |          |
|  |  "WHO ARE YOU?"      |  -->  |  "WHAT MAY YOU DO?"  |          |
|  |                      |       |                      |          |
|  |  Verify identity     |       |  Check permissions   |          |
|  |                      |       |                      |          |
|  +----------------------+       +----------------------+          |
|                                                                   |
|  Example: Login with            Example: Which files              |
|  username + password            may the user see?                 |
|                                                                   |
+------------------------------------------------------------------+
```

---

### The Three Authentication Factors

```
+------------------------------------------------------------------+
|              THE THREE AUTHENTICATION FACTORS                     |
+------------------------------------------------------------------+
|                                                                   |
|  +------------------+  +------------------+  +------------------+ |
|  |    KNOWLEDGE     |  |   POSSESSION     |  |    BIOMETRICS    | |
|  |                  |  |                  |  |                  | |
|  |  "Something I    |  |  "Something I    |  |  "Something I    | |
|  |   know"          |  |   have"          |  |   am"            | |
|  |                  |  |                  |  |                  | |
|  |  * Password      |  |  * Smartphone    |  |  * Fingerprint   | |
|  |  * PIN           |  |  * Smartcard     |  |  * Face          | |
|  |  * Security Q    |  |  * Token         |  |  * Iris          | |
|  |                  |  |  * USB Key       |  |  * Voice         | |
|  +------------------+  +------------------+  +------------------+ |
|                                                                   |
+------------------------------------------------------------------+
```

#### Factor 1: Knowledge

| Method | Example | Security |
|--------|---------|----------|
| **Password** | "Secret123!" | Medium (depends on complexity) |
| **PIN** | "1234" | Low to Medium |
| **Security Question** | "Name of pet?" | Low (often guessable) |
| **Unlock Pattern** | Pattern on smartphone | Low to Medium |

**Weakness:** Can be stolen, guessed, or forgotten.

#### Factor 2: Possession

| Method | Description | Security |
|--------|-------------|----------|
| **Smartphone** | SMS or authenticator app | Medium to High |
| **Hardware Token** | Device generates codes | High |
| **Smartcard** | Chip card | High |
| **USB Security Key** | FIDO2/WebAuthn | Very High |

**Weakness:** Can be lost or stolen.

#### Factor 3: Biometrics (Inherence)

| Method | Description | Security |
|--------|-------------|----------|
| **Fingerprint** | Finger scanner | High |
| **Face Recognition** | Face ID | High |
| **Iris Scan** | Pattern of iris | Very High |
| **Voice Recognition** | Speech pattern | Medium |

**Weakness:** Cannot be changed if compromised.

---

### What is 2FA/MFA?

#### Definitions

| Term | Definition |
|------|------------|
| **2FA** | **Two-Factor Authentication:** Use of **two different factors** |
| **MFA** | **Multi-Factor Authentication:** Use of **two or more different factors** |

**Important:** They must be **different factor categories**!

```
YES - TRUE 2FA:
   Password (Knowledge) + SMS Code (Possession) = 2FA

NO - NOT 2FA:
   Password (Knowledge) + PIN (Knowledge) = Only one factor!
```

---

### 2FA Methods in Detail

#### SMS-based 2FA

```
+----------------------------------------------------------------+
|                    SMS-BASED 2FA                                |
+----------------------------------------------------------------+
|                                                                 |
|  1. Enter password                                              |
|         |                                                       |
|         v                                                       |
|  2. Receive SMS with code                                       |
|         |                                                       |
|         v                                                       |
|  3. Enter code                                                  |
|         |                                                       |
|         v                                                       |
|  4. Access granted                                              |
|                                                                 |
|  Warning: Weakness: SIM swapping, SMS interception possible     |
+----------------------------------------------------------------+
```

#### TOTP (Time-based One-Time Password)

```
+----------------------------------------------------------------+
|                    TOTP / AUTHENTICATOR APP                     |
+----------------------------------------------------------------+
|                                                                 |
|  +------------------+        +------------------+               |
|  |   Authenticator  |        |      Server      |               |
|  |       App        |        |                  |               |
|  |                  |        |                  |               |
|  |   Shared Secret  |<------>|  Shared Secret   |               |
|  |       +          |        |       +          |               |
|  |   Current Time   |        |   Current Time   |               |
|  |       =          |        |       =          |               |
|  |   CODE: 847293   |        |   CODE: 847293   |               |
|  +------------------+        +------------------+               |
|                                                                 |
|  Code changes every 30 seconds                                  |
|  Examples: Google Authenticator, Microsoft Authenticator        |
+----------------------------------------------------------------+
```

| Property | Description |
|----------|-------------|
| **Function** | Shared Secret + Timestamp = Code |
| **Validity** | Typically 30 seconds |
| **Security** | Higher than SMS |
| **Offline Capable** | Yes (no internet connection needed) |

#### Hardware Token / FIDO2

| Method | Description | Examples |
|--------|-------------|----------|
| **Hardware Token** | Physical device generates codes | RSA SecurID |
| **FIDO2/WebAuthn** | Standard for passwordless authentication | YubiKey, Windows Hello |

**Advantages of FIDO2:**
- Phishing-resistant
- No codes to type
- Very high security

---

### Comparison of 2FA Methods

| Method | Security | User-Friendliness | Cost |
|--------|----------|-------------------|------|
| **SMS** | Low-Medium | High | Low |
| **TOTP App** | Medium-High | Medium | None |
| **Push Notification** | Medium-High | Very High | None |
| **Hardware Token** | Very High | Medium | Medium-High |
| **FIDO2/WebAuthn** | Very High | High | Medium |

---

### Advantages and Disadvantages of 2FA

#### Advantages

| Advantage | Description |
|-----------|-------------|
| **Increased Security** | Attacker needs two factors |
| **Protection on Password Leak** | Stolen password alone is not enough |
| **Compliance** | Meets security requirements |
| **Phishing Protection** | Makes phishing attacks harder |

#### Disadvantages

| Disadvantage | Description |
|--------------|-------------|
| **Complexity** | Additional step during login |
| **Device Dependency** | Possession factor must be available |
| **Cost** | Hardware tokens cost money |
| **Recovery** | When second factor is lost |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Authentication** | Identity verification |
| **Authorization** | Permission verification |
| **2FA** | Two-Factor Authentication |
| **MFA** | Multi-Factor Authentication |
| **TOTP** | Time-based One-Time Password |
| **FIDO2** | Standard for secure authentication |
| **Biometrics** | Physical characteristics for identification |

---

## Exam Tips

### Frequent Exam Questions

- What are the three authentication factors?
- What is the difference between 2FA and MFA?
- Give an example of true 2FA
- What weaknesses does SMS-based 2FA have?

### Important to Remember

- **3 Factors:** Knowledge, Possession, Biometrics
- **2FA** = Two **different** factor categories
- **TOTP** = Authenticator app with time-based code
- **SMS-2FA** is better than nothing, but not optimal

### Mnemonic

**K-P-B** = **K**nowledge, **P**ossession, **B**iometrics
"**W**hat I **k**now, **h**ave and **a**m"

---

## Practice Exercises

### Exercise 1
Name the three authentication factors and give one example each.

**Solution:**
1. **Knowledge** (something I know): Password, PIN
2. **Possession** (something I have): Smartphone, smartcard, token
3. **Biometrics** (something I am): Fingerprint, face recognition

### Exercise 2
Is the combination of password and PIN a true 2FA? Justify.

**Solution:** **No**, this is not true 2FA. Password and PIN both belong to the category "Knowledge". For true 2FA, two **different** factor categories must be used, e.g., password (knowledge) + SMS code (possession).

### Exercise 3
Explain how TOTP (Time-based One-Time Password) works.

**Solution:** With TOTP, the authenticator app and server share a common secret (Shared Secret). Both calculate a code from this secret and the current time. Since both use the same time and the same secret, they arrive at the same code. The code typically changes every 30 seconds.

### Exercise 4
What weaknesses does SMS-based 2FA have?

**Solution:**
1. **SIM Swapping:** Attackers can take over the SIM card
2. **SMS Interception:** SMS can be intercepted
3. **Social Engineering:** Victim can be manipulated to share the code
4. **Device Dependency:** Smartphone must be available

Despite these weaknesses, SMS-2FA is better than no 2FA.

---

## Cross-References

- [04-02-01 Threat Types](../04-02-threats-risks/04-02-01-threat-types.md) - Password attacks
- [04-03-01 Technical Measures](./04-03-01-technical-measures.md) - Other protective measures
- [04-05-02 Hash Values](../04-05-cryptography/04-05-02-hash-values.md) - Password storage
- [03-02-01 TOM](../../03-data-protection/03-02-technical-measures/03-02-01-tom.md) - Access control
