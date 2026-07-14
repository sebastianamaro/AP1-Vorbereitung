# Subnetting with IPv4

## Learning Objectives

After this chapter you should:
- Divide a network into equally sized subnets
- Calculate subnet mask, network addresses, broadcast and host ranges
- Apply the "block size" method

---

## Core Content

### Principle

In **subnetting** you borrow **bits from the host portion** to form several smaller subnets. Each borrowed bit **doubles** the number of subnets and **halves** the hosts per subnet.

- **Number of subnets** = 2^(borrowed bits)
- **Hosts per subnet** = 2^(remaining host bits) − 2

### Block Size Method

**Block size = 256 − (value of the mask octet)**. The subnets begin at multiples of the block size.

### Worked Example

**Task:** Divide `192.168.1.0/24` into **4 equally sized subnets**.

1. 4 subnets → borrow 2 bits → new prefix **/26**
2. Mask: `255.255.255.192` (last octet 11000000 = 192)
3. **Block size = 256 − 192 = 64**
4. Subnets and addresses:

| Subnet | Network address | first/last host | Broadcast |
|---------|-------------|-------------------|-----------|
| 1 | 192.168.1.0 | .1 – .62 | 192.168.1.63 |
| 2 | 192.168.1.64 | .65 – .126 | 192.168.1.127 |
| 3 | 192.168.1.128 | .129 – .190 | 192.168.1.191 |
| 4 | 192.168.1.192 | .193 – .254 | 192.168.1.255 |

- Hosts per subnet: 2^6 − 2 = **62**.

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **Subnetting** | Dividing a network by borrowing host bits |
| **Block size** | 256 − mask octet; spacing of the subnets |
| **Prefix extension** | More network bits = more, smaller subnets |

---

## Exam Tips

- Master the **block size method** – fast and low-error.
- Always state **network address, broadcast, host range** for each subnet.
- Hosts = 2^host bits − 2 (network + broadcast).
- Subnetting is tested very frequently – practice a lot.

---

## Practice Exercise

**Task (based on ConSystem GmbH):** Plan the division of `10.0.0.0/24` into 8 equally sized subnets for a networking lab. State the prefix, mask, block size and, for the first three subnets, network address/hosts/broadcast.

<details>
<summary>Solution</summary>

8 subnets → 3 bits → /27, mask 255.255.255.224, block size 32, 30 hosts each. Subnets: .0, .32, .64, … Broadcast of the first: .31.

</details>

---

## Cross-References

- [07-04 Subnets of Different Sizes (VLSM)](./07-04-subnetze-unterschiedlicher-groesse.md)
- [07-02 IPv4 Addressing](./07-02-ipv4-grundlagen.md)
