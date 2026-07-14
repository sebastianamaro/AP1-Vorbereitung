# Server Systems

## Learning Objectives

After this chapter you should be able to:
- Distinguish tower, rack and blade servers
- Name the advantages and disadvantages of the form factors

---

## Core Content

### Form Factors

| Form factor | Characteristic | Advantages | Disadvantages |
|-------------|----------------|------------|---------------|
| **Tower server** | like a large PC | cheap, simple, no special environment | space-intensive, hard to scale |
| **Rack server** | mounted in a 19-inch cabinet (height in **HE/U**) | space-saving, standardized, easy to maintain | rack + cooling required |
| **Blade server** | slim "blades" in a shared **chassis** | very high density, shared power/cooling/network infrastructure, central management | expensive chassis, vendor lock-in |

- **Rack server:** standalone servers mounted one above the other in the rack (e.g. 1 HE, 2 HE).
- **Blade server:** share power supplies, cooling and backplane in the **chassis** → highest packing density in the data center.

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **HE/U (Höheneinheit / rack unit)** | measure of build height in the 19-inch rack (1 HE ≈ 4.45 cm) |
| **Rack server** | standalone server mounted in the rack |
| **Blade server** | server module in a shared chassis |
| **Chassis** | enclosure with shared infrastructure for blades |

---

## Exam Tips

- **Rack vs. blade** is the typical question: blade = higher density + shared infrastructure; rack = standalone, more flexible.
- Tie the form factor to a scenario (space, scalability, budget).

---

## Practice Exercise

**Task (based on ConSystem GmbH):** Explain the concepts "rack server" and "blade server" to a customer, including one advantage and one disadvantage each.

---

## Cross-References

- [05-06 Storage Systems](./05-06-speichersysteme.md)
- [05-09 Virtual Desktops (VDI)](./05-09-virtuelle-desktops.md)
