# VLANs

## Learning Objectives

After this chapter you should:
- Explain the purpose and functioning of VLANs
- Know access and trunk ports as well as 802.1Q tagging
- Correct common false statements about VLANs

---

## Core Content

A **VLAN** (Virtual Local Area Network) divides a physical switch network **logically** into several separate networks. Devices in different VLANs **cannot communicate directly** with one another (only via a router / Layer 3 switch).

### Advantages

- **Segmentation** without separate hardware (separating broadcast domains)
- **Security** (isolating departments from one another)
- **Flexibility** (assignment independent of physical location)
- less **broadcast traffic**

### Ports & Tagging

| Term | Meaning |
|---------|-----------|
| **Access port** | belongs to **one** VLAN (end device) |
| **Trunk port** | transports **multiple** VLANs between switches |
| **802.1Q tag** | 4-byte VLAN identifier in the Ethernet frame (on trunks) |
| **VLAN ID** | 12 bit (1–4094) |

Communication between VLANs is handled via **inter-VLAN routing** (router-on-a-stick or Layer 3 switch).

### Common False Statements

| Statement | Correct? |
|---------|----------|
| "Devices in different VLANs communicate directly without a router." | ❌ False – routing is needed |
| "VLANs reduce broadcast domains." | ✅ Correct |
| "A trunk port belongs to exactly one VLAN." | ❌ False – a trunk transports multiple |

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **VLAN** | Logical network segmentation in the switch |
| **Access/Trunk** | One VLAN vs. multiple VLANs per port |
| **802.1Q** | Standard for VLAN tagging |
| **Inter-VLAN routing** | Communication between VLANs via Layer 3 |

---

## Exam Tips

- **VLANs separate broadcast domains**; communication between VLANs only via router/L3 switch.
- Distinguish **access (1 VLAN) vs. trunk (multiple, 802.1Q tag)**.
- Typical task: check VLAN statements for correctness (see table).

---

## Practice Exercise

**Task (based on ConSystem GmbH):** Answer customer questions about VLANs and check statements for correctness (e.g. "VLANs communicate without a router", "trunk = one VLAN").

---

## Cross-References

- [07-01 Ethernet and MAC Addresses](./07-01-ethernet-mac.md)
- [07-05 Routing](./07-05-routing.md)
