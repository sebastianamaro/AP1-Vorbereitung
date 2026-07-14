# Ethernet and MAC Addresses

## Learning Objectives

After this chapter you should:
- Know the structure and purpose of a MAC address
- Distinguish MAC (Layer 2) from IP address (Layer 3)
- Understand the role of the switch in Ethernet

---

## Core Content

### MAC Address

The **MAC address** (Media Access Control) uniquely identifies a network card on the **data link layer (OSI Layer 2)**.

- **48 bit**, hexadecimal, e.g. `00:1A:2B:3C:4D:5E`
- First 3 bytes = **OUI** (manufacturer), last 3 bytes = device-specific
- **physical/fixed** (in contrast to the logical, changeable IP address)

### MAC vs. IP

| | MAC address | IP address |
|--|-------------|------------|
| OSI layer | 2 (data link) | 3 (network) |
| Validity | local network (LAN) | across networks |
| Assignment | fixed (manufacturer) | logical/configurable |
| Mapping IP↔MAC | via **ARP** | – |

### Switch & Ethernet Frame

A **switch** operates on Layer 2, learns the MAC addresses of the connected devices (**MAC address table**) and forwards **frames** specifically to the correct port (instead of to all ports like a hub). An **Ethernet frame** contains destination/source MAC, type, payload and checksum (FCS).

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **MAC address** | 48-bit hardware address (Layer 2) |
| **ARP** | Resolves IP to MAC addresses |
| **Switch** | Forwards frames specifically based on the MAC table |
| **Frame** | Data unit of Layer 2 |

---

## Exam Tips

- Cleanly separate **MAC (Layer 2, fixed) vs. IP (Layer 3, logical)**.
- **ARP** connects the two worlds (IP → MAC).
- Switch = Layer 2 (MAC), router = Layer 3 (IP).

---

## Practice Exercise

**Task (based on ConSystem GmbH):** Interpret recorded network traffic: Explain what source/destination MAC are used for and how a switch forwards based on the MAC table.

---

## Cross-References

- [07-02 IPv4 Addressing](./07-02-ipv4-grundlagen.md)
- [07-07 VLANs](./07-07-vlans.md)
