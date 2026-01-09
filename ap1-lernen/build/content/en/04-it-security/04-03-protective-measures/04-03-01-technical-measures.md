# Technical Protective Measures

## Learning Objectives

After this chapter, you should be able to:
- Know various technical protective measures
- Assign measures to protection goals
- Understand the application areas of measures
- Weigh advantages and disadvantages

---

## Core Content

### Overview: Technical Measures

```
+------------------------------------------------------------------+
|              TECHNICAL PROTECTIVE MEASURES                        |
+------------------------------------------------------------------+
|                                                                   |
|  +------------------+  +------------------+  +------------------+ |
|  | ACCESS           |  | NETWORK          |  | DATA             | |
|  | CONTROL          |  | SECURITY         |  | SECURITY         | |
|  |                  |  |                  |  |                  | |
|  | * Authenti-      |  | * Firewall       |  | * Encryption     | |
|  |   cation         |  | * VPN            |  | * Backup         | |
|  | * Authorization  |  | * IDS/IPS        |  | * DLP            | |
|  | * 2FA/MFA        |  | * Proxy          |  |                  | |
|  +------------------+  +------------------+  +------------------+ |
|                                                                   |
|  +------------------+  +------------------+  +------------------+ |
|  | SYSTEM           |  | MONITORING       |  | PHYSICAL         | |
|  | SECURITY         |  |                  |  | SECURITY         | |
|  |                  |  |                  |  |                  | |
|  | * Updates        |  | * Logging        |  | * Access         | |
|  | * Hardening      |  | * SIEM           |  |   control        | |
|  | * Antivirus      |  | * Monitoring     |  | * UPS            | |
|  +------------------+  +------------------+  +------------------+ |
|                                                                   |
+------------------------------------------------------------------+
```

---

### Access Control

#### Authentication

**Authentication** verifies a user's identity ("Who are you?").

| Method | Description | Security |
|--------|-------------|----------|
| **Password** | Secret knowledge | Medium |
| **Smartcard** | Physical possession | High |
| **Biometrics** | Fingerprint, face | High |
| **2FA/MFA** | Multiple factors | Very High |

#### Authorization

**Authorization** checks permissions ("What are you allowed to do?").

| Concept | Description |
|---------|-------------|
| **RBAC** | Role-Based Access Control |
| **DAC** | Discretionary Access Control (owner decides) |
| **MAC** | Mandatory Access Control (system decides) |
| **Need-to-know** | Only necessary information |
| **Least Privilege** | Minimal permissions |

---

### Network Security

#### Firewall

A **firewall** controls network traffic according to defined rules.

| Type | Description | OSI Layer |
|------|-------------|-----------|
| **Packet Filter** | Checks IP, port | 3-4 |
| **Stateful Inspection** | Checks connection state | 3-4 |
| **Application Firewall** | Checks application data | 7 |
| **Next-Gen Firewall** | Deep Packet Inspection | 3-7 |

#### VPN (Virtual Private Network)

```
+----------------------------------------------------------------+
|                        VPN TUNNEL                               |
+----------------------------------------------------------------+
|                                                                 |
|   [Employee]                              [Company Network]     |
|        |                                          |             |
|        |    +------------------------------+      |             |
|        +--->|  Encrypted Tunnel            |<-----+             |
|             |  through public internet     |                    |
|             +------------------------------+                    |
|                                                                 |
|   Enables secure connection over insecure networks              |
+----------------------------------------------------------------+
```

#### IDS/IPS

| System | Description | Function |
|--------|-------------|----------|
| **IDS** | Intrusion Detection System | Detects attacks, alerts |
| **IPS** | Intrusion Prevention System | Detects and blocks attacks |

---

### Data Security

#### Encryption

| Application Area | Example | Method |
|------------------|---------|--------|
| **Data at Rest** | Disk encryption | AES, BitLocker |
| **Data in Motion** | Network communication | TLS/SSL, HTTPS |
| **Email** | Email encryption | S/MIME, PGP |

#### Backup

See also: [05-05 Data Backup](../../05-it-systems/05-05-data-backup/05-05-01-backup-types.md)

| Backup Type | Description |
|-------------|-------------|
| **Full Backup** | All data |
| **Incremental** | Changes since last backup |
| **Differential** | Changes since last full backup |

#### DLP (Data Loss Prevention)

**DLP** prevents unwanted data leakage:
- Monitoring email attachments
- Blocking USB storage
- Preventing uploads of sensitive data

---

### System Security

#### Patch Management

| Step | Description |
|------|-------------|
| **Identify** | Check available updates |
| **Assess** | Evaluate criticality |
| **Test** | Test in test environment |
| **Deploy** | Distribute in controlled manner |
| **Verify** | Check installation |

#### Antivirus / Endpoint Protection

| Function | Description |
|----------|-------------|
| **Signature-based** | Comparison with known malware |
| **Heuristics** | Behavior analysis |
| **Sandboxing** | Execution in isolated environment |
| **Real-time Protection** | Real-time protection |

---

### Monitoring and Logging

#### Logging

| Log Type | Content |
|----------|---------|
| **System Logs** | Operating system events |
| **Application Logs** | Application-specific events |
| **Security Logs** | Login attempts, accesses |
| **Audit Logs** | Traceability of changes |

#### SIEM (Security Information and Event Management)

```
+------------------------------------------------------------------+
|                         SIEM SYSTEM                               |
+------------------------------------------------------------------+
|                                                                   |
|  +-----------+ +-----------+ +-----------+ +-----------+         |
|  | Firewall  | |  Server   | |   IDS     | | Antivirus |         |
|  |   Logs    | |   Logs    | |   Logs    | |   Logs    |         |
|  +-----+-----+ +-----+-----+ +-----+-----+ +-----+-----+         |
|        |            |            |            |                   |
|        v            v            v            v                   |
|  +---------------------------------------------------------------+|
|  |               SIEM - Central Analysis                          ||
|  |  * Collect all logs                                           ||
|  |  * Correlate events                                           ||
|  |  * Detect anomalies                                           ||
|  |  * Alert on incidents                                         ||
|  +---------------------------------------------------------------+|
|                                                                   |
+------------------------------------------------------------------+
```

---

### Physical Security

| Measure | Protection Goal |
|---------|-----------------|
| **Access Control** | Prevent unauthorized entry |
| **Video Surveillance** | Deterrence, tracking |
| **UPS** | Bridge power outages |
| **Fire Protection** | Detect, extinguish fire |
| **Climate Control** | Prevent overheating |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Firewall** | Controls network traffic |
| **VPN** | Encrypted tunnel through internet |
| **IDS/IPS** | Detection/prevention of attacks |
| **DLP** | Data Loss Prevention |
| **SIEM** | Security Information and Event Management |
| **Patch** | Software update |
| **Endpoint Protection** | Protection of end devices |

---

## Exam Tips

### Frequent Exam Questions

- What is a firewall and how does it work?
- What is a VPN used for?
- What is the difference between IDS and IPS?
- Name technical protective measures

### Important to Remember

- **Firewall** = Network access control
- **VPN** = Encrypted tunnel
- **IDS** detects, **IPS** blocks
- **2FA** = Two-Factor Authentication

---

## Practice Exercises

### Exercise 1
What is a firewall and what function does it perform?

**Solution:** A **firewall** is a security system that controls network traffic between different networks (e.g., internet and internal network). It analyzes data traffic according to defined rules and decides whether data packets are allowed through or blocked.

### Exercise 2
What is a VPN used for?

**Solution:** A **VPN (Virtual Private Network)** is used to establish an encrypted connection over an insecure network (e.g., the internet). Typical use cases:
- Secure connection to company network (home office)
- Privacy protection in public WLANs
- Bypassing geographic restrictions

### Exercise 3
What is the difference between IDS and IPS?

**Solution:**
- **IDS (Intrusion Detection System):** Detects attacks and generates alerts, but does not actively intervene
- **IPS (Intrusion Prevention System):** Detects attacks AND automatically blocks them

An IPS is active and can stop attacks, an IDS is passive and only informs.

### Exercise 4
Name three technical measures to ensure confidentiality.

**Solution:**
1. **Encryption** (data can only be read with key)
2. **Access controls** (only authorized users gain access)
3. **VPN** (secure communication over insecure networks)

---

## Cross-References

- [04-01-01 CIA Triad](../04-01-protection-goals/04-01-01-cia-triad.md) - Protection goals
- [04-03-02 Authentication-2FA](./04-03-02-authentication-2fa.md) - Two-Factor Authentication
- [04-03-04 Personal Firewall](./04-03-04-personal-firewall.md) - Firewall in detail
- [04-05-01 Encryption Methods](../04-05-cryptography/04-05-01-encryption-methods.md) - Cryptography
- [03-02-01 TOM](../../03-data-protection/03-02-technical-measures/03-02-01-tom.md) - Technical-organizational measures
