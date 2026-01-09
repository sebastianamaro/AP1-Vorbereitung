# Hash Values

## Learning Objectives

After this chapter, you should be able to:
- Explain the term hash value/hash function
- Know properties of hash functions
- Name typical applications of hash values
- Understand the difference from encryption

**Note:** This topic is NEW in the 2025 exam catalog and therefore particularly exam-relevant!

---

## Core Content

### What is a Hash Value?

A **hash value** (also checksum, fingerprint) is the result of a **hash function**. This converts an input of any length into an output of fixed length.

```
+------------------------------------------------------------------+
|                      HASH FUNCTION                                |
+------------------------------------------------------------------+
|                                                                   |
|   INPUT (any length)                 HASH VALUE (fixed length)    |
|                                                                   |
|   "Hello"              ---------->    a5b2c...                    |
|                          Hash                                     |
|   "Hello World"        ---------->    7f3d1...                    |
|                         Function                                  |
|   [500 MB file]        ---------->    9c8e4...                    |
|                                                                   |
|   Warning: IMPORTANT: One-way function - not reversible!          |
|   The input CANNOT be calculated back from the hash value!        |
|                                                                   |
+------------------------------------------------------------------+
```

---

### Properties of Hash Functions

| Property | Description |
|----------|-------------|
| **Determinism** | Same input -> always same hash |
| **One-way Function** | Not reversible (hash -> original impossible) |
| **Collision Resistance** | Different inputs should produce different hashes |
| **Avalanche Effect** | Small change -> completely different hash |
| **Fixed Length** | No matter how large the input, the hash always has the same length |

---

### The Avalanche Effect

```
+------------------------------------------------------------------+
|                   AVALANCHE EFFECT                                |
+------------------------------------------------------------------+
|                                                                   |
|   Input: "Hello"                                                  |
|   SHA-256: 753692ec...2a1d (64 characters)                        |
|                                                                   |
|   Input: "Hellp"  (only one letter different!)                    |
|   SHA-256: b8d126f...7c3e (completely different hash!)            |
|                                                                   |
|   --------------------------------------------------------------  |
|   Even the smallest changes lead to completely different          |
|   hash values. This makes manipulation detectable!                |
|                                                                   |
+------------------------------------------------------------------+
```

---

### Well-Known Hash Algorithms

| Algorithm | Hash Length | Status |
|-----------|-------------|--------|
| **MD5** | 128 Bit (32 hex characters) | X Insecure, do not use anymore |
| **SHA-1** | 160 Bit (40 hex characters) | X Insecure, do not use anymore |
| **SHA-256** | 256 Bit (64 hex characters) | Checkmark Current standard |
| **SHA-384** | 384 Bit (96 hex characters) | Checkmark Secure |
| **SHA-512** | 512 Bit (128 hex characters) | Checkmark Secure |
| **SHA-3** | variable | Checkmark New standard |

---

### Applications of Hash Values

```
+------------------------------------------------------------------+
|              APPLICATIONS OF HASH VALUES                          |
+------------------------------------------------------------------+
|                                                                   |
|  +------------------+  +------------------+  +------------------+ |
|  | PASSWORD         |  | INTEGRITY        |  | DIGITAL          | |
|  | STORAGE          |  | VERIFICATION     |  | SIGNATURES       | |
|  |                  |  |                  |  |                  | |
|  | Password hash    |  | Checksum for     |  | Hash is          | |
|  | instead of       |  | downloads        |  | signed           | |
|  | plaintext        |  |                  |  |                  | |
|  +------------------+  +------------------+  +------------------+ |
|                                                                   |
|  +------------------+  +------------------+  +------------------+ |
|  | BLOCKCHAIN       |  | DEDUPLICATION    |  | PROVABILITY      | |
|  |                  |  |                  |  |                  | |
|  | Chaining of      |  | Detect duplicate |  | Hash value as    | |
|  | blocks           |  | data             |  | timestamp        | |
|  +------------------+  +------------------+  +------------------+ |
|                                                                   |
+------------------------------------------------------------------+
```

#### 1. Password Storage

```
+----------------------------------------------------------------+
|              PASSWORD HASHING                                   |
+----------------------------------------------------------------+
|                                                                 |
|   WRONG: Store password in plaintext                            |
|   -----------------------------------------                     |
|   Database: | User: Max | Password: "Secret123" |               |
|                                                                 |
|   RIGHT: Store only hash                                        |
|   ----------------------------                                  |
|   Database: | User: Max | Hash: "a5b2c...9f1" |                 |
|                                                                 |
|   At login: Hash entered password and                           |
|             compare with stored hash                            |
|                                                                 |
+----------------------------------------------------------------+
```

**Additional Security through Salt:**
A **salt** is a random value that is appended to the password before hashing:
- Prevents rainbow table attacks
- Same passwords have different hashes

#### 2. Integrity Verification

```
File Download:
1. Website shows hash of file: SHA256: 7f3d1a...
2. User downloads file
3. User calculates hash of downloaded file
4. Comparison: Are both hashes the same?
   -> Yes: File is unchanged (checkmark)
   -> No: File was manipulated (X)
```

#### 3. Digital Signatures

- The hash of a message is signed with the private key
- Verification with public key
- Faster than signing the entire message

---

### Hash vs. Encryption

| Aspect | Hash | Encryption |
|--------|------|------------|
| **Direction** | One-way (not reversible) | Reversible (with key) |
| **Purpose** | Verify integrity | Ensure confidentiality |
| **Key** | No key needed | Key required |
| **Output Length** | Always same length | Depends on input |
| **Example** | SHA-256 | AES |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Hash Value** | Result of a hash function, fixed length |
| **Hash Function** | One-way function, calculates hash value |
| **Checksum** | Other term for hash value |
| **Collision** | Two different inputs produce the same hash |
| **Salt** | Random value appended to password |
| **Avalanche Effect** | Small change -> completely different hash |
| **SHA** | Secure Hash Algorithm |
| **MD5** | Message Digest 5 (outdated, insecure) |

---

## Exam Tips

### Frequent Exam Questions

- What is a hash value?
- Name properties of a hash function
- What are hash values used for?
- Why is MD5 no longer secure?
- What is the difference between hash and encryption?

### Important to Remember

- Hash is **one-way function** (not reversible!)
- **SHA-256** = current standard
- **MD5/SHA-1** = insecure, do not use anymore
- Applications: Passwords, integrity, signatures
- **Salt** protects against rainbow table attacks

### Mnemonic

**Hash = Fingerprint**
- Uniquely identifying
- Cannot "calculate back" the person from fingerprint
- Small change -> completely different fingerprint (for data)

---

## Practice Exercises

### Exercise 1
What is a hash value and what properties does it have?

**Solution:** A **hash value** is the result of a hash function that converts an input of any length into an output of fixed length.

Properties:
1. **Determinism:** Same input -> always same hash
2. **One-way function:** Not reversible
3. **Collision resistance:** Different inputs should produce different hashes
4. **Avalanche effect:** Small change -> completely different hash
5. **Fixed length:** Independent of input size

### Exercise 2
Name three application areas for hash values.

**Solution:**
1. **Password storage:** Passwords are stored hashed, not in plaintext
2. **Integrity verification:** Checksums for downloads to detect manipulation
3. **Digital signatures:** The hash is signed instead of the entire message

(Others: Blockchain, deduplication, timestamps)

### Exercise 3
What is the difference between a hash value and encryption?

**Solution:**
- **Hash:** One-way function, not reversible. Used for integrity verification. No key needed.
- **Encryption:** Reversible (with key). Used to protect confidentiality. Key required.

The original input cannot be calculated back from a hash value, while encrypted data can be decrypted again with the correct key.

### Exercise 4
Why are passwords not stored in plaintext but as a hash?

**Solution:** If passwords are stored in plaintext, attackers can read all passwords directly in case of a database breach. If only hashes are stored, the attacker cannot determine the original passwords (since hash is not reversible). During login, the entered password is hashed and compared with the stored hash.

### Exercise 5
Why is MD5 considered insecure?

**Solution:** MD5 is considered insecure because:
1. **Collisions found:** Methods were discovered to create two different inputs with the same MD5 hash
2. **Short hash length:** Only 128 bits
3. **Fast calculation:** Enables brute force attacks

Instead, SHA-256 or newer algorithms should be used.

---

## Cross-References

- [04-05-01 Encryption Methods](./04-05-01-encryption-methods.md) - Difference hash vs. encryption
- [04-05-04 Digital Signatures](./04-05-04-digital-signatures.md) - Hash in signatures
- [04-01-01 CIA Triad](../04-01-protection-goals/04-01-01-cia-triad.md) - Integrity
- [04-03-02 Authentication-2FA](../04-03-protective-measures/04-03-02-authentication-2fa.md) - Password security
- [03-02-02 Anonymization-Pseudonymization](../../03-data-protection/03-02-technical-measures/03-02-02-anonymization-pseudonymization.md) - Hashing for pseudonymization
