# Analyzing Vulnerabilities

## Learning Objectives

After this chapter, you should be able to:
- Explain a penetration test
- Name typical test objects of a pentest
- Distinguish vulnerability analysis from an attack

---

## Core Content

### Penetration test

A **penetration test** is an **authorized, simulated attack** on an IT system in order to uncover vulnerabilities **before** real attackers do. Important: only **with the operator's permission** (otherwise it is a criminal offense) and within a defined framework (scope).

Phases (simplified): **preparation/scope → information gathering → scan/analysis → exploitation → report with recommendations**.

### Typical test objects

- **Network** (open ports, services, segmentation)
- **Web applications** (SQL injection, XSS, authentication)
- **Servers/operating systems** (patch level, hardening)
- **WLAN** (encryption, rogue APs)
- **Clients/end devices**
- **Firewalls/perimeter**
- **Physical access**
- **People** (social engineering test)
- **Databases**

### Distinction

- **Vulnerability scan** (automated, e.g. with a scanner) finds known gaps.
- **Penetration test** goes further and **actively exploits gaps** to demonstrate real exploitability.
- **Hardening (Härtung)** = securing a system (reducing the attack surface) – a reaction to found vulnerabilities.

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **Penetration test** | Authorized, simulated attack to search for vulnerabilities |
| **Scope** | Agreed extent/boundaries of the test |
| **Härtung (hardening)** | Reduction of a system's attack surface |
| **Exploit** | Exploitation of a vulnerability |

---

## Exam Tips

- Always emphasize **authorization/permission** – without it, a pentest is an attack.
- Have at least **five concrete test objects** ready (network, web application, server/OS, WLAN, database, people …).
- **Hardening (Härtung)** is newly emphasized in the updated catalog.

---

## Practice Exercise

**Task (based on ConSystem GmbH):** (1) Explain what a penetration test is. (2) Name at least five concrete test objects of a penetration test.

---

## Cross-References

- [04-04 Threat Scenarios](./04-04-bedrohungsszenarien.md)
- [07-09 Firewall Techniques](../07-networks/07-09-firewalltechniken.md)
