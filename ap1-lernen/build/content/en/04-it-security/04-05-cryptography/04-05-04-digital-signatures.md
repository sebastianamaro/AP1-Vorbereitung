# Digital Signatures

## Learning Objectives

After this chapter, you should be able to:
- Explain the purpose of digital signatures
- Understand the process of signature creation and verification
- Know the difference from encryption
- Name application areas

---

## Core Content

### What is a Digital Signature?

A **digital signature** is a cryptographic method that ensures the **authenticity** and **integrity** of digital data (e.g., documents, emails).

```
+------------------------------------------------------------------+
|                  DIGITAL SIGNATURE                                |
+------------------------------------------------------------------+
|                                                                   |
|  Guarantees:                                                      |
|                                                                   |
|  Checkmark AUTHENTICITY                                           |
|     The document really comes from the stated sender              |
|                                                                   |
|  Checkmark INTEGRITY                                              |
|     The document was not altered                                  |
|                                                                   |
|  Checkmark NON-REPUDIATION                                        |
|     The sender cannot deny having signed                          |
|                                                                   |
|  X NO Confidentiality                                             |
|     The content is NOT encrypted!                                 |
|                                                                   |
+------------------------------------------------------------------+
```

---

### Difference: Signature vs. Encryption

```
+------------------------------------------------------------------+
|           ENCRYPTION vs. DIGITAL SIGNATURE                        |
+------------------------------------------------------------------+
|                                                                   |
|  ENCRYPTION                      DIGITAL SIGNATURE                |
|  +----------------------+        +----------------------+         |
|  |                      |        |                      |         |
|  | Recipient's          |        | Sender's             |         |
|  | public               |        | private              |         |
|  | key                  |        | key                  |         |
|  |      for             |        |      for             |         |
|  | ENCRYPTING           |        | SIGNING              |         |
|  |                      |        |                      |         |
|  | Recipient's          |        | Sender's             |         |
|  | private              |        | public               |         |
|  | key                  |        | key                  |         |
|  |      for             |        |      for             |         |
|  | DECRYPTING           |        | VERIFICATION         |         |
|  |                      |        |                      |         |
|  | GOAL: Confidential.  |        | GOAL: Authenticity   |         |
|  +----------------------+        +----------------------+         |
|                                                                   |
+------------------------------------------------------------------+
```

| Aspect | Encryption | Digital Signature |
|--------|------------|-------------------|
| **Purpose** | Confidentiality | Authenticity, Integrity |
| **Encrypt with** | Recipient's public key | - |
| **Sign with** | - | Sender's private key |
| **Verify with** | Recipient's private key | Sender's public key |

---

### Process of Digital Signature

```
+------------------------------------------------------------------+
|              SIGNATURE CREATION                                   |
+------------------------------------------------------------------+
|                                                                   |
|   SENDER (Alice)                                                  |
|                                                                   |
|   1. Create document                                              |
|      +---------------+                                            |
|      |   Document    |                                            |
|      +-------+-------+                                            |
|              |                                                    |
|              v                                                    |
|   2. Calculate hash of document                                   |
|      +---------------+                                            |
|      |  Hash: 7f3d...|                                            |
|      +-------+-------+                                            |
|              |                                                    |
|              v                                                    |
|   3. Encrypt hash with PRIVATE key                                |
|      +---------------+                                            |
|      |  Signature:   |                                            |
|      |  X9k2...      |                                            |
|      +---------------+                                            |
|              |                                                    |
|              v                                                    |
|   4. Send document + signature                                    |
|      [Document] + [Signature]  ---------------------->            |
|                                                                   |
+------------------------------------------------------------------+
```

```
+------------------------------------------------------------------+
|              SIGNATURE VERIFICATION                               |
+------------------------------------------------------------------+
|                                                                   |
|   RECEIVER (Bob)                                                  |
|                                                                   |
|   1. Receive document and signature                               |
|      [Document] + [Signature]                                     |
|              |                                                    |
|              v                                                    |
|   2. Calculate hash of received document                          |
|      +---------------+                                            |
|      |  Hash1: 7f3d..|                                            |
|      +---------------+                                            |
|              |                                                    |
|              v                                                    |
|   3. Decrypt signature with PUBLIC key of Alice                   |
|      +---------------+                                            |
|      |  Hash2: 7f3d..|                                            |
|      +---------------+                                            |
|              |                                                    |
|              v                                                    |
|   4. Compare Hash1 and Hash2                                      |
|      Hash1 == Hash2?                                              |
|      -> YES:  Signature valid (checkmark)                         |
|      -> NO: Signature invalid / Document altered (X)              |
|                                                                   |
+------------------------------------------------------------------+
```

---

### Summary: Signature Process

| Step | Action | Key Used |
|------|--------|----------|
| **Signing** | Calculate hash, encrypt with private key | **Private** key of sender |
| **Verifying** | Decrypt signature with public key, compare hash | **Public** key of sender |

---

### Application Areas

| Application | Description |
|-------------|-------------|
| **Email (S/MIME, PGP)** | Signed emails |
| **Code Signing** | Sign software updates |
| **PDF Documents** | Legally valid digital signature |
| **Certificates** | CA signs certificates |
| **Contracts** | Digital contract signing |
| **Invoices** | Electronic invoices |

---

### Legal Significance

In Germany (and the EU), digital signatures are legally regulated:

| Level | Description | Legal Effect |
|-------|-------------|--------------|
| **Simple Electronic Signature** | Scanned signature, email | Lowest evidentiary value |
| **Advanced Signature** | With cryptographic means | Medium evidentiary value |
| **Qualified Signature** | With qualified certificate, secure signature creation device | Equivalent to handwritten signature |

The **eIDAS Regulation** (EU) regulates recognition within the EU.

---

### Algorithms for Digital Signatures

| Algorithm | Description |
|-----------|-------------|
| **RSA** | Classic method, widely used |
| **DSA** | Digital Signature Algorithm |
| **ECDSA** | Elliptic Curve DSA, shorter keys |
| **EdDSA** | Modern alternative |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Digital Signature** | Cryptographic proof of authenticity and integrity |
| **Authenticity** | Proof of sender's genuineness |
| **Integrity** | Proof that data was not altered |
| **Non-repudiation** | Sender cannot deny signature |
| **Code Signing** | Signing software |
| **Qualified Signature** | Legally equivalent to handwritten signature |

---

## Exam Tips

### Frequent Exam Questions

- What is a digital signature?
- How does signature verification work?
- Which protection goals are achieved by digital signatures?
- What is the difference between signature and encryption?

### Important to Remember

- **Sign** with PRIVATE key
- **Verify** with PUBLIC key
- Protection goals: **Authenticity, Integrity, Non-repudiation**
- **NOT** confidentiality (for that you need encryption)

### Mnemonic

**"Signing is personal"** -> With PRIVATE key
**"Verification is public"** -> With PUBLIC key

---

## Practice Exercises

### Exercise 1
What does a digital signature guarantee?

**Solution:** A digital signature guarantees:
1. **Authenticity:** The document really comes from the stated sender
2. **Integrity:** The document was not altered after signing
3. **Non-repudiation:** The sender cannot deny having signed the document

It does **not** guarantee confidentiality - the content is not encrypted.

### Exercise 2
Describe the process of signature creation.

**Solution:**
1. The sender creates a **hash** of the document
2. The hash is encrypted with the sender's **private key**
3. The result is the **digital signature**
4. Document and signature are sent together to the recipient

### Exercise 3
How does the recipient verify a digital signature?

**Solution:**
1. The recipient calculates the **hash of the received document** (Hash1)
2. He decrypts the signature with the sender's **public key** (Hash2)
3. He **compares** both hashes:
   - Same -> Signature valid, document unaltered
   - Different -> Signature invalid or document manipulated

### Exercise 4
What is the difference between encryption and digital signature?

**Solution:**
| Aspect | Encryption | Digital Signature |
|--------|------------|-------------------|
| **Goal** | Confidentiality | Authenticity, Integrity |
| **Encrypt** | With recipient's public key | - |
| **Sign** | - | With sender's private key |
| **Verify** | With recipient's private key | With sender's public key |

With encryption, only the recipient can read; with signature, anyone with the public key can verify.

---

## Cross-References

- [04-05-01 Encryption Methods](./04-05-01-encryption-methods.md) - Asymmetric encryption
- [04-05-02 Hash Values](./04-05-02-hash-values.md) - Hash for signatures
- [04-05-03 Certificates](./04-05-03-certificates.md) - Key verification
- [04-01-01 CIA Triad](../04-01-protection-goals/04-01-01-cia-triad.md) - Authenticity, Integrity
