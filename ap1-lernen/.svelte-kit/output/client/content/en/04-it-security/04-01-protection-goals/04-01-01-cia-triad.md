# CIA Triad - Protection Goals of IT Security

## Learning Objectives

After this chapter, you should be able to:
- Name the three protection goals of IT security
- Define and explain each protection goal
- Provide examples of implementing the protection goals
- Understand the relationship between the protection goals

---

## Core Content

### What is the CIA Triad?

The **CIA triad** describes the three fundamental protection goals of information security. The name is derived from the English terms:

- **C**onfidentiality
- **I**ntegrity
- **A**vailability

```
+------------------------------------------------------------------+
|                         CIA TRIAD                                 |
+------------------------------------------------------------------+
|                                                                   |
|                      CONFIDENTIALITY                              |
|                           ^                                       |
|                          /|\                                      |
|                         / | \                                     |
|                        /  |  \                                    |
|                       /   |   \                                   |
|                      /    |    \                                  |
|      INTEGRITY <----/-----+-----\----> AVAILABILITY               |
|                                                                   |
|   All three goals must be balanced!                               |
+------------------------------------------------------------------+
```

---

### 1. Confidentiality

#### Definition

**Confidentiality** means that information is only accessible to authorized persons, processes, or systems.

> Only those who are authorized may access the data.

#### Threats to Confidentiality

| Threat | Description |
|--------|-------------|
| **Unauthorized Access** | Hackers, employees without authorization |
| **Eavesdropping** | Reading network traffic |
| **Social Engineering** | Manipulating people |
| **Theft** | Stealing devices or storage media |

#### Measures to Ensure Confidentiality

| Measure | Example |
|---------|---------|
| **Encryption** | AES, TLS/SSL |
| **Access Controls** | Authorization concept |
| **Authentication** | Passwords, 2FA |
| **Training** | Awareness training |

#### Example

A customer wants their account data to be viewable only by themselves. The bank must ensure through encryption and access controls that no one else has access.

---

### 2. Integrity

#### Definition

**Integrity** means that data is complete, correct, and unaltered. Changes must be traceable and only possible by authorized parties.

> Data must not be altered unnoticed.

#### Threats to Integrity

| Threat | Description |
|--------|-------------|
| **Manipulation** | Deliberate alteration of data |
| **Transmission Errors** | Errors during data transmission |
| **Software Bugs** | Bugs that corrupt data |
| **Hardware Defects** | Memory errors |

#### Measures to Ensure Integrity

| Measure | Example |
|---------|---------|
| **Hash Values** | SHA-256, MD5 (outdated) |
| **Digital Signatures** | Verify authenticity |
| **Checksums** | CRC for transmission |
| **Logging** | Audit logs |
| **Versioning** | Change history |

#### Example

In an online bank transfer, it must be ensured that the amount cannot be manipulated from 100 EUR to 10,000 EUR. Hash values and digital signatures protect against this.

---

### 3. Availability

#### Definition

**Availability** means that data and IT systems are accessible and usable for authorized users at the desired time.

> The system must work when it is needed.

#### Threats to Availability

| Threat | Description |
|--------|-------------|
| **System Failure** | Hardware or software errors |
| **DoS Attacks** | Denial of Service |
| **Power Outage** | Power supply interrupted |
| **Natural Disasters** | Fire, water damage |
| **Overload** | Too many requests |

#### Measures to Ensure Availability

| Measure | Example |
|---------|---------|
| **Redundancy** | Backup hardware |
| **Backup** | Regular data backup |
| **UPS** | Uninterruptible Power Supply |
| **Load Balancing** | Load balancer |
| **Emergency Plans** | Business Continuity |

#### Example

An online shop must remain accessible even during high load (e.g., Black Friday). Availability is ensured through load balancing and redundant servers.

---

### Interplay of Protection Goals

The three protection goals can conflict:

| Conflict | Example |
|----------|---------|
| **Confidentiality vs. Availability** | Strong encryption can reduce performance |
| **Integrity vs. Availability** | Elaborate checks delay access |
| **Confidentiality vs. Usability** | Too many access restrictions hinder work |

**Solution:** A **protection needs analysis** helps find the right balance.

---

### Extended Protection Goals

In addition to the classic CIA triad, there are further protection goals:

| Protection Goal | Description |
|-----------------|-------------|
| **Authenticity** | Genuineness of identity or data |
| **Non-repudiation** | Provability of actions |
| **Accountability** | Actions can be attributed to persons |
| **Data Protection** | Protection of personal data |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **CIA Triad** | Three protection goals: Confidentiality, Integrity, Availability |
| **Confidentiality** | Only authorized parties have access |
| **Integrity** | Data is correct and unaltered |
| **Availability** | System is usable when needed |
| **Authenticity** | Genuineness of an identity or message |
| **Non-repudiation** | Action cannot be denied |

---

## Exam Tips

### Frequent Exam Questions

- What are the three protection goals of IT security?
- Name measures to ensure confidentiality/integrity/availability
- Which protection goal is affected in [scenario]?

### Mnemonic

**C-I-A** (like the American agency) = **C-I-A** in English:
- **C**onfidentiality
- **I**ntegrity
- **A**vailability

### Typical Scenarios to Classify

| Scenario | Affected Protection Goal |
|----------|--------------------------|
| Data was stolen | **Confidentiality** violated |
| Data was manipulated | **Integrity** violated |
| System not reachable | **Availability** violated |

---

## Practice Exercises

### Exercise 1
What does the abbreviation CIA mean in the context of IT security?

**Solution:** CIA stands for the three protection goals:
- **C**onfidentiality
- **I**ntegrity
- **A**vailability

### Exercise 2
A hacker changes the amount of an online transfer from 100 EUR to 1,000 EUR. Which protection goal is violated?

**Solution:** The protection goal **Integrity** is violated, as the data (transfer amount) was changed without authorization.

### Exercise 3
Name two measures each for ensuring confidentiality, integrity, and availability.

**Solution:**
- **Confidentiality:** Encryption, access controls
- **Integrity:** Hash values, digital signatures
- **Availability:** Backup, UPS (uninterruptible power supply)

### Exercise 4
A server fails due to a power outage. Which protection goal is violated?

**Solution:** The protection goal **Availability** is violated, as the system cannot be used.

---

## Cross-References

- [03-02-01 TOM](../../03-data-protection/03-02-technical-measures/03-02-01-tom.md) - Technical-organizational measures
- [04-03-01 Technical Measures](../04-03-protective-measures/04-03-01-technical-measures.md) - Concrete protective measures
- [04-05-02 Hash Values](../04-05-cryptography/04-05-02-hash-values.md) - Integrity verification
- [05-05-01 Backup Types](../../05-it-systems/05-05-data-backup/05-05-01-backup-types.md) - Availability assurance
