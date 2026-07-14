# Cyber-Physical Systems (CPS)

## Learning Objectives

After this chapter you should:
- Define cyber-physical systems
- Explain the structure (sensors, actuators, networking)
- Classify CPS as networked, embedded systems

---

## Core Content

A **cyber-physical system (CPS)** connects **physical components** (machines, devices) to the **digital world** via embedded software and networks. CPS **capture** their environment, **process** data and **act back** on the physical world.

### Structure

| Component | Function |
|------------|---------|
| **Sensors** | capture physical quantities (temperature, position …) |
| **Control/software** | processes data, makes decisions (embedded) |
| **Actuators** | act on the physical world (motor, valve …) |
| **Network** | connects CPS with each other and with IT systems |

```
   Umwelt ──► [Sensor] ──► [Steuerung/Software] ──► [Aktor] ──► Umwelt
                                  ▲  │
                                  └──┴── Netzwerk (Cloud/andere CPS)
```

### Classification

- **Foundation of networked production:** CPS enable networked, self-organized manufacturing.
- CPS emphasizes the tight **feedback loop** between the digital and physical worlds (sensing → processing → actuation).
- Application areas: production plants, autonomous vehicles, medical technology, building automation.

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **CPS** | Coupling of physical systems with software/network |
| **Sensor/actuator** | Capturing / acting on the physical world |
| **Embedded system** | Computer permanently integrated into a device |

---

## Exam Tips

- CPS = **sensor → software → actuator**, networked, with a feedback loop.
- Be able to explain the structure (sensor/control/actuator/network) and the feedback loop.

---

## Practice Exercise

**Task:** Using an example (e.g. a production machine), describe the structure of a CPS consisting of sensors, control, actuators and network.

---

## Cross-References

- [06-06-03 UX/Usability](./06-06-03-ux-usability.md)
