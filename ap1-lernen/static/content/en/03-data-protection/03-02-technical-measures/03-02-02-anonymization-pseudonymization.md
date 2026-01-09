# Anonymization and Pseudonymization

## Learning Objectives

After this chapter, you should be able to:
- Define anonymization and distinguish it from pseudonymization
- Know methods of anonymization
- Know methods of pseudonymization
- Understand the legal implications

---

## Core Content

### Overview

Both methods serve to protect personal data but differ fundamentally:

```
┌─────────────────────────────────────────────────────────────────┐
│                DATA PROTECTION METHODS                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ANONYMIZATION                  PSEUDONYMIZATION                │
│  ┌─────────────────────┐         ┌─────────────────────┐       │
│  │ Personal reference  │         │ Personal reference  │       │
│  │ IRREVERSIBLY        │         │ RECOVERABLE         │       │
│  │ removed             │         │ (with key)          │       │
│  │                     │         │                     │       │
│  │ GDPR no longer      │         │ GDPR still          │       │
│  │ applies!            │         │ applies!            │       │
│  └─────────────────────┘         └─────────────────────┘       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Anonymization

#### Definition

**Anonymization** is a process for the **irreversible removal of personal reference** from data. After anonymization, the data can no longer be attributed to any specific person.

#### Characteristics

| Characteristic | Description |
|----------------|-------------|
| **Irreversible** | Personal reference cannot be restored |
| **No Identification** | No attribution to a person possible |
| **GDPR-free** | Anonymized data no longer falls under GDPR |
| **Permanent** | Loss of personal reference is permanent |

#### Methods of Anonymization

| Method | Description | Example |
|--------|-------------|---------|
| **Data Aggregation** | Summarization into groups | Average values instead of individual values |
| **Masking** | Replacement of characteristics | Replace names with "XXX" |
| **Noise Addition** | Random modification | Add random values to data |
| **Generalization** | Reduction of precision | "25 years" -> "20-30 years" |
| **k-Anonymity** | At least k persons share characteristics | Release data only if k >= 5 |

#### Example

```
BEFORE (personal data):
Max Mustermann, 25 years, Munich, 60,000 EUR salary

AFTER (anonymized):
Male, Age group 20-30, Bavaria, Salary group 50-70k
```

---

### Pseudonymization

#### Definition (Art. 4(5) GDPR)

**Pseudonymization** is a process by which personal data is modified so that it can no longer be attributed to a specific person **without additional information**.

#### Characteristics

| Characteristic | Description |
|----------------|-------------|
| **Reversible** | Personal reference can be restored with key |
| **Key Separation** | Assignment key stored separately |
| **GDPR applies** | Pseudonymized data remains personal data |
| **Risk Reduction** | Reduces risk in case of data loss |

#### Methods of Pseudonymization

| Method | Description | Example |
|--------|-------------|---------|
| **Replacement with Identifiers** | Assignment of random identifiers | Customer number instead of name |
| **Hashing** | Conversion to hash value | SHA-256 hash of name |
| **Tokenization** | Exchange with random tokens | Token stored separately |
| **Encryption** | Encrypt data | AES-encrypted data |

#### Example

```
ORIGINAL:                     PSEUDONYMIZED:
Max Mustermann    ->           ID: 7a3b9c4d
max@example.com   ->           ID: 7a3b9c4d
Sample Street 1   ->           ID: 7a3b9c4d

ASSIGNMENT TABLE (stored separately):
7a3b9c4d = Max Mustermann, max@example.com, Sample Street 1
```

---

### Comparison: Anonymization vs. Pseudonymization

| Aspect | Anonymization | Pseudonymization |
|--------|---------------|------------------|
| **Personal Reference** | Irreversibly removed | Recoverable |
| **GDPR Application** | No | Yes |
| **Re-identification** | Impossible | Possible with key |
| **Risk** | Very low | Reduced but present |
| **Usability** | Limited | Largely preserved |
| **Example** | Statistics | Research data |

---

### Legal Classification

```
┌─────────────────────────────────────────────────────────────────┐
│                    GDPR APPLICABILITY                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Personal Data                                                   │
│  ──────────────────────────────────────────────►               │
│  │                     │                       │               │
│  │                     │                       │               │
│  ▼                     ▼                       ▼               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │  Original    │  │ Pseudony-    │  │ Anonymized   │          │
│  │  Data        │  │ mized Data   │  │ Data         │          │
│  │              │  │              │  │              │          │
│  │ GDPR APPLIES │  │ GDPR APPLIES │  │ GDPR DOES    │          │
│  │              │  │              │  │ NOT APPLY    │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Anonymization** | Irreversible removal of personal reference |
| **Pseudonymization** | Replacement with identifiers, reversible |
| **k-Anonymity** | At least k persons share the same characteristics |
| **Tokenization** | Exchange with random tokens |
| **Hashing** | One-way conversion to fixed hash value |
| **Data Aggregation** | Summarization of individual values |

---

## Exam Tips

### Common Exam Questions
- What is the difference between anonymization and pseudonymization?
- Does GDPR apply to anonymized data?
- Name methods of anonymization/pseudonymization

### Important to Remember
- **Anonymization** = GDPR NO LONGER applies
- **Pseudonymization** = GDPR STILL applies
- Pseudonymized data can be re-identified with the key

---

## Practice Exercises

### Exercise 1
What is the essential difference between anonymization and pseudonymization?

**Solution:**
- **Anonymization:** The personal reference is irreversibly removed. The data can no longer be attributed to any person. GDPR no longer applies.
- **Pseudonymization:** The personal reference can be restored with a separate key. GDPR still applies.

### Exercise 2
Name two methods of anonymization.

**Solution:**
1. Data aggregation (summarization into groups)
2. Generalization (reduction of precision)
(or: Masking, Noise addition, k-Anonymity)

### Exercise 3
Does GDPR apply to pseudonymized data?

**Solution:** Yes, GDPR still applies to pseudonymized data because the personal reference can be restored with the separately stored key. The data therefore remains personal data within the meaning of Art. 4(1) GDPR.

---

## Cross-References

- [03-01-02 Personal Data](../03-01-fundamentals/03-01-02-personal-data.md) - Definition
- [04-05-02 Hash Values](../../04-it-security/04-05-cryptography/04-05-02-hash-values.md) - Hashing methods
- [04-05-01 Encryption Methods](../../04-it-security/04-05-cryptography/04-05-01-encryption-methods.md) - Encryption
