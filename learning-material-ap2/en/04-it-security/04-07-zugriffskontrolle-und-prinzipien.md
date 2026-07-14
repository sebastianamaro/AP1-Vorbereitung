# Access Control, Kerberos & Security Principles

## Learning Objectives

After this chapter, you should be able to:
- Distinguish Zutrittskontrolle, Zugangskontrolle and Zugriffskontrolle
- Classify Kerberos and IAM
- Apply fundamental security principles

---

## Core Content

### The three "Z" of control (classic exam question)

German uses three similar-sounding terms that all translate loosely as "access control":

| Control | Protects | Example |
|-----------|---------|----------|
| **Zutrittskontrolle** (physical entry control) | **physical** access to rooms/devices | Badge reader, locking system, server room |
| **Zugangskontrolle** (system access control) | **login** to the system (authentication) | Login, password, 2FA |
| **Zugriffskontrolle** (data access control) | **rights** to data/functions (authorization) | File permissions, roles |

> Memory aid: **Zutritt → room**, **Zugang → system**, **Zugriff → data**.

### Kerberos

**Kerberos** is a **ticket-based network authentication protocol**. A central **KDC** (Key Distribution Center) issues a **Ticket-Granting Ticket (TGT)** after login; with it, the user obtains **service tickets** for individual services – **without** sending the password again (single sign-on within the network). Used, among others, in Windows Active Directory. *(New in the catalog.)*

### IAM

**Identity & Access Management (IAM)** manages **identities** and **permissions** centrally (creating/disabling accounts, roles, granting rights, traceability).

### Security principles

- **Least Privilege** – everyone receives only the **minimum necessary** rights
- **Need-to-Know** – access only to the information required for the task
- **Defense in Depth** – **multiple** protection layers (firewall, VPN, virus protection, IDS/IPS)
- **Zero Trust** – "**no one** is trusted by default"; every request is checked

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **Zutritts-/Zugangs-/Zugriffskontrolle** | Room / system / data (physical entry / system login / data access control) |
| **Kerberos** | Ticket-based network authentication protocol (KDC/TGT) |
| **IAM** | Central management of identities & rights |
| **Least Privilege / Zero Trust** | Minimal rights / no default trust |

---

## Exam Tips

- Confidently assign the **three "Z"** (Zutritt/Zugang/Zugriff) – a frequent question.
- **Kerberos** = tickets/KDC, no repeated password (new in the catalog).
- Be able to explain **Least Privilege**, **Defense in Depth** and **Zero Trust** each in one sentence.

---

## Practice Exercise

**Task:** Assign measures (badge reader, login with 2FA, file permissions) to the three types of control and explain the "Least Privilege" principle.

---

## Cross-References

- [04-02 Authentication and Authorization](./04-02-authentifizierung-autorisierung.md)
- [04-01 Aspects of IT Security](./04-01-aspekte-it-sicherheit.md)
