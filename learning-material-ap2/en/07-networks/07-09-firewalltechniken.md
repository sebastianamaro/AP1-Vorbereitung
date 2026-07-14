# Firewall Techniques

## Learning Objectives

After this chapter you should:
- Distinguish firewall types
- Explain the DMZ concept
- Classify basic rule sets (whitelist/blacklist)

---

## Core Content

A **firewall** controls the data traffic between networks based on **rules** and thus protects the internal network.

### Firewall Types

| Type | Way of working | Layer |
|-----|--------------|---------|
| **Packet filter (stateless)** | checks individual packets by IP/port/protocol | 3/4 |
| **Stateful inspection** | tracks connection states (sessions) | 3/4 |
| **Application layer / proxy** | checks content at the application level (e.g. HTTP) | 7 |
| **Next-Generation Firewall (NGFW)** | combines stateful + application + IDS/IPS | 3–7 |

### DMZ (Demilitarized Zone)

A **DMZ** is a **buffer area** between the Internet and the internal network for publicly reachable servers (web, mail). If the DMZ is compromised, the internal network remains protected.

```
Internet ──[ Firewall ]── DMZ (Webserver) ──[ Firewall ]── internes Netz
```

### Rule Set

- **Whitelist (default deny):** everything forbidden, only allow what is permitted → **more secure** (recommended)
- **Blacklist (default allow):** everything allowed, only block what is known

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **Packet filter** | Rule-based checking of individual packets |
| **Stateful inspection** | Take connection states into account |
| **DMZ** | Buffer zone for public servers |
| **Default deny** | Basic stance "forbid everything, allow what is permitted" |

---

## Exam Tips

- Distinguish **packet filter (stateless) vs. stateful vs. application firewall**.
- Be able to explain the **DMZ** and its security gain.
- **Whitelist (default deny)** is considered more secure than blacklist.

---

## Practice Exercise

**Task (based on ConSystem GmbH):** Explain the different firewall types and design a simple network design with a DMZ for a publicly reachable web server.

---

## Cross-References

- [04-05 Analyzing Vulnerabilities](../04-it-security/04-05-schwachstellen-analysieren.md)
- [07-10 Securing Web-Based Applications](./07-10-webanwendungen-absichern.md)
