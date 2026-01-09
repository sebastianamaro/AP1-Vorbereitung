# IT Security - Chapter Overview

## Introduction

IT Security (Information Security) is a central topic of the AP1 exam and has significantly increased in importance in the 2025 exam catalog. This chapter covers all relevant aspects of protecting IT systems and data.

---

## Learning Objectives

After completing this chapter, you should be able to:
- Explain the protection goals of IT security (CIA triad)
- Identify threats and vulnerabilities
- Know technical and organizational protective measures
- Explain Two-Factor Authentication (2FA) [NEW 2025]
- Understand operating system hardening [NEW 2025]
- Know the basics of BSI baseline protection
- Describe cryptographic methods
- Understand hash values and their applications [NEW 2025]

---

## Chapter Structure

```
04-IT-SECURITY
|
+-- 04-01 Protection Goals
|   +-- 04-01-01 CIA Triad
|
+-- 04-02 Threats and Risks
|   +-- 04-02-01 Threat Types
|   +-- 04-02-02 Protection Needs Analysis
|
+-- 04-03 Protective Measures
|   +-- 04-03-01 Technical Measures
|   +-- 04-03-02 Authentication and 2FA [NEW 2025]
|   +-- 04-03-03 OS Hardening [NEW 2025]
|   +-- 04-03-04 Personal Firewall
|
+-- 04-04 Frameworks and Standards
|   +-- 04-04-01 BSI Baseline Protection
|   +-- 04-04-02 ISMS
|   +-- 04-04-03 Security by Design/Default
|
+-- 04-05 Cryptography
    +-- 04-05-01 Encryption Methods
    +-- 04-05-02 Hash Values [NEW 2025]
    +-- 04-05-03 Certificates
    +-- 04-05-04 Digital Signatures
```

---

## Overview: IT Security

### The Three Pillars of IT Security

```
+------------------------------------------------------------------+
|                         IT SECURITY                               |
+------------------------------------------------------------------+
|                                                                   |
|  +------------------+  +------------------+  +------------------+ |
|  |  CONFIDENTIALITY |  |    INTEGRITY     |  |   AVAILABILITY   | |
|  |                  |  |                  |  |                  | |
|  |                  |  |                  |  |                  | |
|  | Only authorized  |  | Data correct    |  | System usable    | |
|  | users have access|  | and unaltered   |  | when needed      | |
|  +------------------+  +------------------+  +------------------+ |
|           |                   |                   |               |
|           v                   v                   v               |
|  +---------------------------------------------------------------+|
|  |               PROTECTIVE MEASURES                              ||
|  |  * Technical (Encryption, Firewall, 2FA)                      ||
|  |  * Organizational (Policies, Training)                        ||
|  |  * Physical (Access Control)                                  ||
|  +---------------------------------------------------------------+|
+------------------------------------------------------------------+
```

---

## New Topics 2025 - Particularly Exam-Relevant

| Topic | Description | Reference |
|-------|-------------|-----------|
| **2FA/MFA** | Two-Factor Authentication with various factors | [04-03-02](./04-03-protective-measures/04-03-02-authentication-2fa.md) |
| **OS Hardening** | Securing operating systems | [04-03-03](./04-03-protective-measures/04-03-03-os-hardening.md) |
| **Hash Values** | Checksums for integrity verification | [04-05-02](./04-05-cryptography/04-05-02-hash-values.md) |
| **Security by Design** | Security from the beginning | [04-04-03](./04-04-frameworks-standards/04-04-03-security-by-design-default.md) |

---

## Connections to Other Chapters

| Topic | Reference | Connection |
|-------|-----------|------------|
| **Data Protection (TOM)** | [03-02-01](../03-data-protection/03-02-technical-measures/03-02-01-tom.md) | Technical-organizational measures |
| **GDPR** | [03-01-01](../03-data-protection/03-01-fundamentals/03-01-01-gdpr-principles.md) | Legal requirements |
| **Backup** | [05-05](../05-it-systems/05-05-data-backup/) | Availability assurance |
| **Networks** | [07-01](../07-networks/07-01-network-fundamentals/) | Network security |

---

## Important for the Exam

### Frequent Exam Topics

1. **CIA Triad** - Definition and examples
2. **Authentication Factors** - Knowledge, Possession, Biometrics
3. **Encryption Types** - Symmetric vs. Asymmetric
4. **Hash Values** - Applications and properties
5. **BSI Baseline Protection** - Methodology

### No Longer in the 2025 Exam Catalog

- ~~ISO 2700x Standards~~ (removed)
- ~~Detailed Firewall Configuration~~ (only basics)

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **IT Security** | Protection of IT systems and data |
| **Information Security** | Comprehensive protection of all information |
| **CIA Triad** | Confidentiality, Integrity, Availability |
| **2FA** | Two-Factor Authentication |
| **Cryptography** | Science of encryption |
| **ISMS** | Information Security Management System |
| **BSI** | Federal Office for Information Security (Germany) |

---

## Subchapters

1. [Protection Goals - CIA Triad](./04-01-protection-goals/04-01-01-cia-triad.md)
2. [Threat Types](./04-02-threats-risks/04-02-01-threat-types.md)
3. [Protection Needs Analysis](./04-02-threats-risks/04-02-02-protection-needs-analysis.md)
4. [Technical Measures](./04-03-protective-measures/04-03-01-technical-measures.md)
5. [Authentication and 2FA](./04-03-protective-measures/04-03-02-authentication-2fa.md)
6. [OS Hardening](./04-03-protective-measures/04-03-03-os-hardening.md)
7. [Personal Firewall](./04-03-protective-measures/04-03-04-personal-firewall.md)
8. [BSI Baseline Protection](./04-04-frameworks-standards/04-04-01-bsi-baseline-protection.md)
9. [ISMS](./04-04-frameworks-standards/04-04-02-isms.md)
10. [Security by Design/Default](./04-04-frameworks-standards/04-04-03-security-by-design-default.md)
11. [Encryption Methods](./04-05-cryptography/04-05-01-encryption-methods.md)
12. [Hash Values](./04-05-cryptography/04-05-02-hash-values.md)
13. [Certificates](./04-05-cryptography/04-05-03-certificates.md)
14. [Digital Signatures](./04-05-cryptography/04-05-04-digital-signatures.md)
