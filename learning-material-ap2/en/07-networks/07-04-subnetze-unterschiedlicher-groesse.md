# Subnets of Different Sizes (VLSM)

## Learning Objectives

After this chapter you should:
- Explain VLSM and distinguish it from uniform subnetting
- Assign subnets according to need (by host count)
- Avoid address waste

---

## Core Content

### Idea

**VLSM** (Variable Length Subnet Mask) divides a network into **differently sized** subnets – matching the actual need. This uses the address space efficiently (no "one size fits all").

### Procedure

1. **Sort the demand:** subnets by required host count in **descending** order.
2. **Determine the prefix per subnet:** smallest mask that provides enough hosts (hosts ≤ 2^host bits − 2).
3. **Assign from the top:** largest subnet first, then the next blocks consecutively.

### Worked Example

**Network:** `192.168.1.0/24`. Demand: A=50 hosts, B=25, C=10, D=2 (point-to-point).

| Subnet | Hosts needed | Prefix | Size | Range |
|---------|-------------|--------|-------|---------|
| A | 50 | /26 (62) | 64 | 192.168.1.0 – .63 |
| B | 25 | /27 (30) | 32 | 192.168.1.64 – .95 |
| C | 10 | /28 (14) | 16 | 192.168.1.96 – .111 |
| D | 2 | /30 (2) | 4 | 192.168.1.112 – .115 |

- For 50 hosts you need **/26** (62 usable), for 2 hosts **/30** is enough (2 usable – ideal for router links).

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **VLSM** | Subnets of variable size according to need |
| **/30** | Smallest practical subnet (2 hosts, router links) |
| **Address efficiency** | As few unused addresses as possible |

---

## Exam Tips

- **Always assign from the largest demand to the smallest** – otherwise gaps/overlaps arise.
- Use **/30** for point-to-point connections.
- Verify that subnets **do not overlap**.

---

## Practice Exercise

**Task (based on ConSystem GmbH):** Divide `172.16.0.0/24` via VLSM for departments with 60, 30, 12 and 2 hosts. State the prefix, network address and broadcast for each subnet.

---

## Cross-References

- [07-03 Subnetting with IPv4](./07-03-subnetzbildung-ipv4.md)
- [07-05 Routing](./07-05-routing.md)
