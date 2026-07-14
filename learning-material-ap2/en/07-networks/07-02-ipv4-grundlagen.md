# IPv4 Addressing – Basics

## Learning Objectives

After this chapter you should:
- Understand the structure of an IPv4 address and subnet mask
- Determine the network and host portions
- Know the private address ranges and special addresses

---

## Core Content

### Structure

An **IPv4 address** is **32 bit** long, written as four **octets** (0–255), e.g. `192.168.1.10`. The **subnet mask** separates the **network portion** (ones) from the **host portion** (zeros).

- `255.255.255.0` = **/24** (CIDR prefix = number of network bits)
- Network bits fixed = network address; host bits variable = hosts

### Important Addresses in a Subnet

- **Network address:** all host bits **0** (e.g. 192.168.1.0/24)
- **Broadcast:** all host bits **1** (e.g. 192.168.1.255)
- **Usable hosts:** 2^(host bits) − 2 (subtract network and broadcast)

### Private Address Ranges (RFC 1918)

| Range | Mask |
|---------|-------|
| 10.0.0.0 – 10.255.255.255 | /8 |
| 172.16.0.0 – 172.31.255.255 | /12 |
| 192.168.0.0 – 192.168.255.255 | /16 |

Additional: **127.0.0.0/8** = loopback (localhost), **169.254.0.0/16** = APIPA (link-local).

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **Subnet mask** | Separates network and host portion |
| **CIDR prefix** | Number of network bits (e.g. /24) |
| **Broadcast** | Address to all hosts in the subnet |
| **RFC 1918** | Private, non-routable address ranges |

---

## Exam Tips

- **Usable hosts = 2^host bits − 2** (subtract network + broadcast) – standard formula.
- Memorize the private ranges (10/8, 172.16/12, 192.168/16).
- Be able to convert CIDR prefix ↔ subnet mask (/24 = 255.255.255.0).

---

## Practice Exercise

**Task:** Determine for `192.168.10.130/25`: network address, broadcast, first/last usable host address and number of usable hosts.

<details>
<summary>Solution</summary>

/25 → mask 255.255.255.128, block size 128. Network: 192.168.10.128, broadcast: 192.168.10.255, hosts: .129–.254, usable: 2^7−2 = **126**.

</details>

---

## Cross-References

- [07-03 Subnetting with IPv4](./07-03-subnetzbildung-ipv4.md)
- [07-05 Routing](./07-05-routing.md)
