# Threat Types

## Learning Objectives

After this chapter, you should be able to:
- Know various threat types for IT systems
- Distinguish between active and passive attacks
- Describe typical attack methods
- Assess risks for companies

---

## Core Content

### Overview: Threat Categories

```
+------------------------------------------------------------------+
|                       THREAT TYPES                                |
+------------------------------------------------------------------+
|                                                                   |
|  +------------------+  +------------------+  +------------------+ |
|  |    TECHNICAL     |  |     HUMAN        |  |   FORCE          | |
|  |    THREATS       |  |     THREATS      |  |   MAJEURE        | |
|  |                  |  |                  |  |                  | |
|  | * Malware        |  | * Negligence     |  | * Natural        | |
|  | * Hacking        |  | * Sabotage       |  |   disasters      | |
|  | * DoS attacks    |  | * Social         |  | * Fire           | |
|  | * Exploits       |  |   Engineering    |  | * Power outage   | |
|  +------------------+  +------------------+  +------------------+ |
|                                                                   |
+------------------------------------------------------------------+
```

---

### Malware

#### Types of Malware

| Malware Type | Description | Spread |
|--------------|-------------|--------|
| **Virus** | Infects files, requires host program | When executing infected files |
| **Worm** | Spreads independently | Via networks, email |
| **Trojan** | Disguises itself as useful program | Download, email attachments |
| **Ransomware** | Encrypts data, demands ransom | Phishing, drive-by downloads |
| **Spyware** | Spies on users | Hidden in software |
| **Adware** | Shows unwanted advertising | Free software |
| **Rootkit** | Hides deep in the system | Exploits, infected software |
| **Keylogger** | Records keystrokes | Trojans, physical access |

#### Protective Measures Against Malware

- **Antivirus software** with current signatures
- **Regular updates** of the operating system
- **Caution** with email attachments and downloads
- **Backup** of important data

---

### Social Engineering

#### Definition

**Social Engineering** refers to the manipulation of people to obtain confidential information or to induce them to take certain actions.

#### Social Engineering Methods

| Method | Description | Example |
|--------|-------------|---------|
| **Phishing** | Fake emails/websites | Fake bank email |
| **Spear Phishing** | Targeted phishing at individuals | Email to CEO |
| **Vishing** | Phone fraud | Call from "IT support" |
| **Pretexting** | Fabricated pretexts | "I'm the new colleague" |
| **Baiting** | Luring with attractive offers | USB stick in parking lot |
| **Tailgating** | Following through secured doors | Following without badge |
| **Dumpster Diving** | Searching through trash | Papers in trash |

#### Phishing Recognition Features

- Urgency ("Act immediately!")
- Threats ("Account will be blocked")
- Incorrect grammar/spelling
- Suspicious links (check URL!)
- Impersonal salutation

---

### Network Attacks

#### Passive Attacks

| Attack | Description |
|--------|-------------|
| **Sniffing** | Reading network traffic |
| **Traffic Analysis** | Analysis of communication patterns |
| **Eavesdropping** | Listening to communication |

#### Active Attacks

| Attack | Description | Affected Protection Goal |
|--------|-------------|--------------------------|
| **DoS/DDoS** | Overloading services | Availability |
| **Man-in-the-Middle** | Intercepting and manipulating | Confidentiality, Integrity |
| **IP Spoofing** | Faking IP addresses | Authenticity |
| **DNS Spoofing** | Manipulating DNS resolution | Integrity |
| **ARP Spoofing** | Manipulating ARP table | Confidentiality |

#### DoS vs. DDoS

```
+-------------------------+     +-------------------------+
|   DoS Attack            |     |   DDoS Attack           |
+-------------------------+     +-------------------------+
|                         |     |                         |
|    [Attacker]           |     |  [Bot1] [Bot2] [Bot3]   |
|         |               |     |     |     |     |       |
|         |               |     |     v     v     v       |
|         v               |     |    +-------------+      |
|  +-------------+        |     |    |   Target    |      |
|  |   Target    |        |     |    |   Server    |      |
|  |   Server    |        |     |    +-------------+      |
|  +-------------+        |     |                         |
|                         |     |  Many distributed       |
|  One attacker           |     |  sources                |
+-------------------------+     +-------------------------+
```

---

### Password Attacks

| Attack | Description |
|--------|-------------|
| **Brute Force** | Systematically trying all combinations |
| **Dictionary Attack** | Trying dictionary words |
| **Rainbow Table** | Precomputed hash values |
| **Credential Stuffing** | Using stolen login credentials |
| **Password Spraying** | Few passwords across many accounts |

#### Protection Against Password Attacks

- **Strong passwords** (length > 12 characters, complexity)
- **Two-Factor Authentication** (2FA)
- **Account lockout** after failed attempts
- **Salted hashes** instead of plaintext passwords

---

### Insider Threats

| Threat | Description |
|--------|-------------|
| **Negligence** | Unintentional errors (e.g., sharing passwords) |
| **Sabotage** | Intentional damage by employees |
| **Data Theft** | Taking data when leaving |
| **Abuse of Privileges** | Accessing unnecessary data |

#### Protective Measures

- **Need-to-know principle** (only necessary access rights)
- **Four-eyes principle** for critical actions
- **Logging** of all accesses
- **Offboarding processes** when leaving

---

### Physical Threats

| Threat | Example | Protective Measure |
|--------|---------|-------------------|
| **Theft** | Laptop stolen | Encryption, locks |
| **Vandalism** | Server damaged | Access control |
| **Fire** | Server room burns | Fire protection, backup |
| **Water** | Water damage | Protective measures, backup |
| **Power Outage** | Power supply defective | UPS, generator |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Malware** | Malicious software (viruses, worms, trojans) |
| **Phishing** | Fraud attempt via email/website |
| **Social Engineering** | Manipulation of people |
| **DoS/DDoS** | (Distributed) Denial of Service |
| **Brute Force** | Trying all possibilities |
| **Man-in-the-Middle** | Intercepting communication |
| **Insider Threat** | Danger from own employees |

---

## Exam Tips

### Frequent Exam Questions

- What is the difference between a virus and a worm?
- What is phishing and how do you recognize it?
- Explain a Man-in-the-Middle attack
- What protective measures exist against [threat]?

### Important to Remember

- **Virus** needs host program, **worm** spreads independently
- **Ransomware** = encryption + ransom demand
- **Phishing** = fake emails/websites
- **DoS** = one attacker, **DDoS** = many (distributed)

---

## Practice Exercises

### Exercise 1
What is the difference between a virus and a worm?

**Solution:**
- **Virus:** Requires a host program to spread. Infects other files and becomes active when these files are executed.
- **Worm:** Spreads independently over networks without a host program. Uses security vulnerabilities for automatic spread.

### Exercise 2
What is phishing and name two recognition features.

**Solution:**
**Phishing** is a scam in which fake emails or websites attempt to obtain confidential data (e.g., passwords, credit card data).

Recognition features:
1. Urgency/threats ("Act immediately!")
2. Suspicious sender address or links
(or: Spelling errors, impersonal salutation, unusual requests)

### Exercise 3
Explain the term "ransomware".

**Solution:**
**Ransomware** is malicious software that encrypts data on the computer and demands a ransom for decryption. Well-known examples are WannaCry and Locky.

### Exercise 4
What is a DDoS attack and which protection goal is affected?

**Solution:**
A **DDoS attack** (Distributed Denial of Service) is an attack in which a target server is flooded with requests from many different sources (e.g., botnet) to overload it.

The affected protection goal is **Availability**, as the server is no longer reachable.

---

## Cross-References

- [04-01-01 CIA Triad](../04-01-protection-goals/04-01-01-cia-triad.md) - Affected protection goals
- [04-03-01 Technical Measures](../04-03-protective-measures/04-03-01-technical-measures.md) - Protective measures
- [04-03-02 Authentication-2FA](../04-03-protective-measures/04-03-02-authentication-2fa.md) - Protection against password attacks
- [09-02-01 Error Analysis](../../09-support-communication/09-02-error-management/09-02-01-error-analysis.md) - Incident Response
