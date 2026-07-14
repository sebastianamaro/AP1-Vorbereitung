# IPv6 Subnetting

## Learning Objectives

After this chapter you should:
- Know the structure and notation of an IPv6 address
- Divide an IPv6 prefix into subnets
- Classify prefix, subnet ID and interface ID

---

## Core Content

### Structure

An **IPv6 address** is **128 bit** long, written in eight **hextets** (16 bit) in hex, separated by `:`, e.g. `2001:0db8:0000:0000:0000:0000:0000:0001`.

**Shortening rules:**
- Omit leading zeros in each block: `0db8 → db8`
- Replace **one** sequence of zero blocks with `::`: `2001:db8::1`

### Structure (typical)

```
| Global Routing Prefix |  Subnet-ID  |     Interface-ID (64 Bit)     |
|      /48 (vom ISP)     |   16 Bit    |            /64                 |
```

- A **/64** is the standard subnet (one LAN). From a **/48** you can form **2^16 = 65,536** /64 subnets.

### Subnetting Example

**Task:** ISP assigns `2001:db8:abcd::/48`. Form subnets for several areas.

- Assign subnets as **/64** by counting up the **subnet ID** (bits 49–64):
  - `2001:db8:abcd:0000::/64`
  - `2001:db8:abcd:0001::/64`
  - `2001:db8:abcd:0002::/64` …
- Each /64 provides practically unlimited hosts (2^64).

> In IPv6 there is **no broadcast** (multicast instead) and typically **no need for NAT** – addresses are plentiful.

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **Hextet** | 16-bit block of the IPv6 address |
| **`::`** | Replaces exactly one sequence of zero blocks |
| **/64** | Standard subnet size (one LAN) |
| **Interface ID** | Lower 64 bits, identifies the interface |

---

## Exam Tips

- Apply the **shortening rules** confidently (leading zeros, `::` only once).
- From **/48 → /64** you get **2^16 subnets**; count up the subnet ID.
- IPv6 has **no broadcast**, but multicast – frequent question.
- IPv6 configuration is **newly emphasized** in the updated catalogue.

---

## Practice Exercise

**Task (based on ConSystem GmbH):** A customer receives `2001:db8:1234::/48`. Form four /64 subnets for four company areas and state their prefixes.

<details>
<summary>Solution</summary>

`2001:db8:1234:0::/64`, `…:1::/64`, `…:2::/64`, `…:3::/64`.

</details>

---

## Cross-References

- [07-02 IPv4 Addressing](./07-02-ipv4-grundlagen.md)
- [07-05 Routing](./07-05-routing.md)
