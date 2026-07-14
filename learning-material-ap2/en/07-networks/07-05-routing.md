# Routing

## Learning Objectives

After this chapter you should:
- Understand the task of a router and a routing table
- Distinguish static and dynamic routing
- Classify the default gateway and default route

---

## Core Content

### Router & Routing

A **router** connects **different networks** (OSI Layer 3) and forwards IP packets based on the **destination address** via the **routing table**. Within a subnet, hosts communicate directly; for other networks they send the packet to their **default gateway** (the router).

### Routing Table

Contains entries: **destination network / mask → next hop (gateway) / interface / metric**.

```
Zielnetz          Maske             Gateway        Metrik
10.0.1.0          255.255.255.0     direkt (eth0)  0
10.0.2.0          255.255.255.0     10.0.1.2       1
0.0.0.0           0.0.0.0           10.0.1.1       (Standardroute)
```

- **Default route (0.0.0.0/0):** is used when no specific entry matches (usually toward the Internet).
- The **longest matching prefix** wins (Longest Prefix Match).

### Static vs. Dynamic

| | Static routing | Dynamic routing |
|--|--------------------|---------------------|
| Maintenance | manual | automatic via protocols |
| Protocols | – | **RIP, OSPF, BGP** |
| Suitability | small/stable networks | large/changing networks |
| Effort/errors | little overhead, but maintenance-intensive | self-adapting, more overhead |

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **Routing table** | Destination network → next hop |
| **Default gateway** | Router for all non-local destinations |
| **Default route** | 0.0.0.0/0 as catch-all route |
| **OSPF/BGP** | Dynamic routing protocols |

---

## Exam Tips

- Be able to explain **default gateway** and **default route (0.0.0.0/0)**.
- **Static vs. dynamic** with one advantage/disadvantage each.
- Longest Prefix Match: the more specific entry wins.

---

## Practice Exercise

**Task (based on ConSystem GmbH):** For a network made up of several subnets: create the routing table of a router (destination networks, gateways) including a default route toward the Internet.

---

## Cross-References

- [07-03 Subnetting with IPv4](./07-03-subnetzbildung-ipv4.md)
- [07-06 IPv6 Subnetting](./07-06-ipv6-subnetting.md)
