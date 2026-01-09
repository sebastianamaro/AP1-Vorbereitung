# Encryption Methods

## Learning Objectives

After this chapter, you should be able to:
- Know the difference between symmetric and asymmetric encryption
- Name typical methods
- Explain advantages and disadvantages of the methods
- Understand hybrid encryption

---

## Core Content

### Fundamentals of Encryption

**Encryption (Cryptography)** transforms readable data (plaintext) into unreadable data (ciphertext).

```
+------------------------------------------------------------------+
|                      ENCRYPTION                                   |
+------------------------------------------------------------------+
|                                                                   |
|    PLAINTEXT           ENCRYPTION            CIPHERTEXT           |
|   +-----------+           +-----+           +-----------+         |
|   |  "Hello"  |  ------>  | Key |  ------>  | "Xk9@#"   |         |
|   +-----------+           +-----+           +-----------+         |
|                                                                   |
|    CIPHERTEXT          DECRYPTION            PLAINTEXT            |
|   +-----------+           +-----+           +-----------+         |
|   | "Xk9@#"   |  ------>  | Key |  ------>  |  "Hello"  |         |
|   +-----------+           +-----+           +-----------+         |
|                                                                   |
+------------------------------------------------------------------+
```

---

### Overview: Encryption Types

```
+------------------------------------------------------------------+
|              ENCRYPTION METHODS                                   |
+------------------------------------------------------------------+
|                                                                   |
|  +-----------------------+     +-----------------------+          |
|  |      SYMMETRIC        |     |      ASYMMETRIC       |          |
|  |                       |     |                       |          |
|  |   One key             |     |   Two keys            |          |
|  |   for encryption and  |     |   (public +           |          |
|  |   decryption          |     |    private)           |          |
|  |                       |     |                       |          |
|  |   * AES               |     |   * RSA               |          |
|  |   * DES (outdated)    |     |   * ECC               |          |
|  |   * 3DES              |     |   * Diffie-Hellman    |          |
|  +-----------------------+     +-----------------------+          |
|                                                                   |
|  +------------------------------------------------------------+  |
|  |                       HYBRID                                |  |
|  |   Combination: Asymmetric for key exchange,                 |  |
|  |                Symmetric for data                           |  |
|  |   * TLS/SSL, HTTPS                                          |  |
|  +------------------------------------------------------------+  |
|                                                                   |
+------------------------------------------------------------------+
```

---

### Symmetric Encryption

In **symmetric encryption**, **one key** is used for both encryption and decryption.

```
+------------------------------------------------------------------+
|              SYMMETRIC ENCRYPTION                                 |
+------------------------------------------------------------------+
|                                                                   |
|   Alice                                              Bob          |
|   +-----+                                         +-----+         |
|   |     |  ---- Same key [Key] --------------->  |     |         |
|   +-----+                                         +-----+         |
|                                                                   |
|   1. Alice encrypts with key [Key]                                |
|   2. Alice sends encrypted message                                |
|   3. Bob decrypts with the same key [Key]                         |
|                                                                   |
|   Warning: Problem: How do Alice and Bob exchange the key safely? |
|                                                                   |
+------------------------------------------------------------------+
```

#### Methods

| Method | Key Length | Status |
|--------|------------|--------|
| **AES** (Advanced Encryption Standard) | 128/192/256 Bit | Current standard |
| **DES** (Data Encryption Standard) | 56 Bit | Outdated, insecure |
| **3DES** (Triple DES) | 168 Bit | Outdated |
| **ChaCha20** | 256 Bit | Modern, fast |

#### Advantages and Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| **Fast** (low computational effort) | **Key exchange** problematic |
| **Efficient** for large amounts of data | For n persons: n*(n-1)/2 keys |
| Simple implementation | Key must remain secret |

---

### Asymmetric Encryption

In **asymmetric encryption**, there are **two different keys**:
- **Public key** - for encryption
- **Private key** - for decryption

```
+------------------------------------------------------------------+
|              ASYMMETRIC ENCRYPTION                                |
+------------------------------------------------------------------+
|                                                                   |
|   Alice                                              Bob          |
|   +-----+                                         +-----+         |
|   |     |                                         |KeyKey|        |
|   +-----+                                         +-----+         |
|                                                   public [Pub]    |
|                                                   private [Priv]  |
|                                                                   |
|   1. Bob publishes his public key [Pub]                           |
|   2. Alice encrypts with Bob's public key [Pub]                   |
|   3. Alice sends encrypted message                                |
|   4. Bob decrypts with his private key [Priv]                     |
|                                                                   |
|   Checkmark: Advantage: No secret key exchange needed             |
|                                                                   |
+------------------------------------------------------------------+
```

#### Methods

| Method | Typical Key Length | Usage |
|--------|-------------------|-------|
| **RSA** | 2048-4096 Bit | Encryption, signatures |
| **ECC** (Elliptic Curve) | 256-384 Bit | Modern alternative to RSA |
| **Diffie-Hellman** | variable | Key exchange |

#### Advantages and Disadvantages

| Advantages | Disadvantages |
|------------|---------------|
| **No key exchange** needed | **Slow** (computationally intensive) |
| Only n key pairs for n persons | Not for large amounts of data |
| Enables digital signatures | Longer keys needed |

---

### Hybrid Encryption

**Hybrid encryption** combines the advantages of both methods:

```
+------------------------------------------------------------------+
|              HYBRID ENCRYPTION                                    |
+------------------------------------------------------------------+
|                                                                   |
|   1. Generate random session key (symmetric)                      |
|                        |                                          |
|                        v                                          |
|   2. Encrypt data with session key symmetrically                  |
|                        |                                          |
|                        v                                          |
|   3. Encrypt session key with public key asymmetrically           |
|                        |                                          |
|                        v                                          |
|   4. Transmit both together:                                      |
|      [Encrypted session key] + [Encrypted data]                   |
|                                                                   |
|   RECEIVER:                                                       |
|   5. Decrypt session key with private key                         |
|   6. Decrypt data with session key                                |
|                                                                   |
+------------------------------------------------------------------+
```

#### Examples of Hybrid Encryption

| Protocol | Usage |
|----------|-------|
| **TLS/SSL** | HTTPS, secure web connections |
| **PGP/GPG** | Email encryption |
| **S/MIME** | Email encryption |
| **SSH** | Secure remote access |

---

### Comparison: Symmetric vs. Asymmetric

| Aspect | Symmetric | Asymmetric |
|--------|-----------|------------|
| **Number of Keys** | 1 | 2 (public + private) |
| **Speed** | Fast | Slow |
| **Key Exchange** | Problematic | Easy |
| **Typical Usage** | Encrypt data | Keys/signatures |
| **Examples** | AES, ChaCha20 | RSA, ECC |

---

### Application Areas

| Application | Method | Example |
|-------------|--------|---------|
| **Disk Encryption** | Symmetric | BitLocker (AES) |
| **HTTPS** | Hybrid | TLS (RSA + AES) |
| **Email** | Hybrid | PGP, S/MIME |
| **VPN** | Hybrid | IPsec, OpenVPN |
| **Digital Signature** | Asymmetric | RSA, ECDSA |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Symmetric Encryption** | One key for encryption and decryption |
| **Asymmetric Encryption** | Two keys (public + private) |
| **Hybrid Encryption** | Combination of both methods |
| **AES** | Advanced Encryption Standard (symmetric) |
| **RSA** | Asymmetric method |
| **Public Key** | Public key |
| **Private Key** | Private key |

---

## Exam Tips

### Frequent Exam Questions

- What is the difference between symmetric and asymmetric encryption?
- Name advantages and disadvantages of symmetric encryption
- What is hybrid encryption?
- Name one symmetric and one asymmetric method

### Important to Remember

- **Symmetric:** 1 key, fast, but key exchange problem
- **Asymmetric:** 2 keys, slow, but no key exchange problem
- **Hybrid:** Combination (asymmetric for key, symmetric for data)
- **AES** = current symmetric standard
- **RSA** = well-known asymmetric method

---

## Practice Exercises

### Exercise 1
What is the difference between symmetric and asymmetric encryption?

**Solution:**
- **Symmetric Encryption:** Uses **one** key for encryption and decryption. Both parties must possess the same secret key.
- **Asymmetric Encryption:** Uses **two** different keys - a public one for encryption and a private one for decryption.

### Exercise 2
Name two advantages and one disadvantage of symmetric encryption.

**Solution:**
**Advantages:**
1. Fast and efficient
2. Low computational effort, good for large amounts of data

**Disadvantage:**
Key exchange is problematic - how do you share the secret key securely?

### Exercise 3
What is hybrid encryption and why is it used?

**Solution:** **Hybrid encryption** combines symmetric and asymmetric encryption:
1. A random symmetric key (session key) is generated
2. Data is encrypted symmetrically with the session key (fast)
3. The session key is encrypted asymmetrically with the recipient's public key

This uses the advantages of both methods: Fast data encryption AND easy key exchange.

### Exercise 4
Name one example each of a symmetric and an asymmetric encryption method.

**Solution:**
- **Symmetric:** AES (Advanced Encryption Standard)
- **Asymmetric:** RSA (Rivest-Shamir-Adleman)

---

## Cross-References

- [04-05-02 Hash Values](./04-05-02-hash-values.md) - One-way functions
- [04-05-03 Certificates](./04-05-03-certificates.md) - Verifying public keys
- [04-05-04 Digital Signatures](./04-05-04-digital-signatures.md) - Using asymmetric methods
- [04-01-01 CIA Triad](../04-01-protection-goals/04-01-01-cia-triad.md) - Confidentiality
