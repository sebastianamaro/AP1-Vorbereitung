# Personal Data

## Learning Objectives

After this chapter, you should be able to:
- Define personal data
- Provide examples of personal data
- Know special categories of personal data
- Distinguish what is personal and what is not

---

## Core Content

### Definition

**Personal data** according to Art. 4(1) GDPR is any information relating to an **identified or identifiable natural person**.

> A person is **identifiable** if they can be identified directly or indirectly, e.g., by:
> - Name
> - Identification number
> - Location data
> - Online identifier
> - Physical, physiological, genetic, mental, economic, cultural, or social characteristics

---

### Types of Identification

```
┌─────────────────────────────────────────────────────────────────┐
│              PERSONAL DATA                                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  DIRECT IDENTIFICATION           INDIRECT IDENTIFICATION        │
│  ┌─────────────────────┐         ┌─────────────────────┐       │
│  │ • First name, surname│         │ • IP address        │       │
│  │ • Address           │         │ • Customer number   │       │
│  │ • Phone number      │         │ • Cookie ID         │       │
│  │ • Email address     │         │ • Location data     │       │
│  │ • Date of birth     │         │ • Device ID         │       │
│  │ • Photo             │         │ • IBAN              │       │
│  └─────────────────────┘         └─────────────────────┘       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Examples of Personal Data

| Category | Examples |
|----------|----------|
| **Identification Data** | Name, address, date of birth, ID number |
| **Contact Data** | Phone number, email address |
| **Bank Data** | Account number, IBAN, credit card number |
| **Online Data** | IP address, cookie ID, username |
| **Employment Data** | Employer, position, salary |
| **Physical Characteristics** | Photo, height, weight |

---

### Special Categories of Personal Data (Art. 9 GDPR)

Certain data is particularly sensitive and subject to enhanced protection:

| Category | Examples |
|----------|----------|
| **Racial/Ethnic Origin** | Country of origin, skin color |
| **Political Opinions** | Party membership |
| **Religious Beliefs** | Denomination, religious practices |
| **Trade Union Membership** | Membership in a union |
| **Genetic Data** | DNA analysis |
| **Biometric Data** | Fingerprint, facial recognition, iris scan |
| **Health Data** | Medical records, diagnoses, disabilities |
| **Sex Life/Orientation** | Sexual preferences |

**Important:** Processing of this data is generally **prohibited** (Art. 9(1) GDPR), but there are exceptions (Art. 9(2)).

---

### What is NOT Personal Data?

| Data | Reason |
|------|--------|
| **Anonymized Data** | Personal reference can no longer be established |
| **Company Data** | Only natural persons are protected |
| **Deceased Persons** | GDPR only protects living persons |
| **Aggregated Statistics** | No conclusions about individuals possible |

---

### Practical Examples

#### Example 1: Email Address
**max.mustermann@company.de** = personal data (name recognizable)
**info@company.de** = not personal data (no person identifiable)

#### Example 2: IP Address
**Dynamic IP address** = personal data (can be assigned)
According to ECJ ruling, IP addresses are considered personal data.

#### Example 3: Customer Number
**Customer number 12345** = personal data if an assignment table exists

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Personal Data** | Information about an identified/identifiable person |
| **Identifiable** | Directly or indirectly attributable to a person |
| **Special Categories** | Sensitive data according to Art. 9 GDPR |
| **Biometric Data** | Physical characteristics for identification |
| **Health Data** | Information about health status |
| **Natural Person** | Human being (as opposed to legal entity) |

---

## Exam Tips

### Common Exam Questions
- What is personal data?
- Provide examples of personal data
- What are special categories of personal data?
- Is an IP address personal data?

### Important to Remember
- IP addresses are personal data (ECJ ruling)
- Emails with names are personal data
- Only **natural persons** are protected
- Special categories are subject to enhanced protection

---

## Practice Exercises

### Exercise 1
What is personal data according to Art. 4(1) GDPR?

**Solution:** Personal data is any information relating to an identified or identifiable natural person.

### Exercise 2
Name three examples of personal data with direct identification and three with indirect identification.

**Solution:**
Direct identification:
1. Name
2. Address
3. Phone number

Indirect identification:
1. IP address
2. Customer number
3. Cookie ID

### Exercise 3
Which of the following data belongs to special categories according to Art. 9 GDPR?
- [ ] Email address
- [ ] Blood type
- [ ] Account number
- [ ] Trade union membership

**Solution:**
- [ ] Email address (no - regular personal data)
- [x] Blood type (yes - health data)
- [ ] Account number (no - regular personal data)
- [x] Trade union membership (yes - special category)

---

## Cross-References

- [03-01-01 GDPR Principles](./03-01-01-gdpr-principles.md) - Legal basis
- [03-02-02 Anonymization-Pseudonymization](../03-02-technical-measures/03-02-02-anonymization-pseudonymization.md) - Removal of personal reference
- [04-01-01 CIA Triad](../../04-it-security/04-01-protection-goals/04-01-01-cia-triad.md) - Data confidentiality
