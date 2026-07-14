# Threat Scenarios

## Learning Objectives

After this chapter, you should be able to:
- Know typical threats to IT systems
- Distinguish between preventive measures and reactions
- Propose appropriate measures for a given scenario

---

## Core Content

### Typical threats

| Threat | Example |
|-----------|----------|
| **Malware** | Viruses, worms, trojans, **ransomware** (encryption + extortion) |
| **Social engineering / phishing** | Deceiving employees into disclosing credentials |
| **Attacks** | Brute force, **DoS/DDoS**, SQL injection, man-in-the-middle |
| **Physical/environmental** | Theft, fire, water, power outage |
| **Human error** | Operating errors, accidental deletion |
| **Insider threat** | Data theft by employees |

### Prevention vs. reaction

| Scenario | Precaution (prevent) | Reaction (when it happens) |
|----------|-------------------------------|-------------------------|
| **Ransomware** | Backups (offline!), updates, awareness training, virus protection | Isolate the system, restore from backup, **do not pay**, report the incident |
| **Phishing** | Training, spam/mail filters, 2FA | Change passwords, lock accounts, inform those affected |
| **DDoS** | Firewall/WAF, load balancing, DDoS protection at the provider | Filter traffic, involve the provider, scale up |
| **Power outage** | **UPS**, emergency power, redundancy | Switch to UPS/emergency power, shut down in an orderly way |
| **Data loss** | RAID, regular backups | Restore from backup |

> **Mnemonic:** Always consider **both** sides – *preventive* (before) and *reactive* (after, incl. emergency plan/incident response).

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **Ransomware** | Malware that encrypts data and demands ransom |
| **Social engineering** | Manipulating people into disclosing information |
| **DoS/DDoS** | (Distributed) overload attacks on availability |
| **Incident response** | Planned procedure for security incidents |

---

## Exam Tips

- Tasks often require **one precaution AND one reaction per threat** – provide both.
- For ransomware: **backups (offline)** as the most important prevention, **no ransom** as the recommended reaction.
- Be able to map measures to the **protection goals** (e.g. backup → availability/integrity).

---

## Practice Exercise

**Task (based on ConSystem GmbH):** For given threat scenarios, propose one precaution to prevent it and one appropriate reaction if it occurs.

---

## Cross-References

- [04-05 Analyzing Vulnerabilities](./04-05-schwachstellen-analysieren.md)
- [05-07 Uninterruptible Power Supply](../05-it-systems/05-07-usv.md)
