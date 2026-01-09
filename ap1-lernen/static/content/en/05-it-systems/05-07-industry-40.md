# Industry 4.0

## Learning Objectives

After this chapter, you should be able to:
- Explain the term Industry 4.0
- Know the four industrial revolutions
- Understand key technologies of Industry 4.0
- Describe opportunities and challenges

---

## Core Content

### What is Industry 4.0?

**Industry 4.0** refers to the fourth industrial revolution: the networking and digitization of industrial production through modern information technology.

```
┌─────────────────────────────────────────────────────────────────┐
│              THE FOUR INDUSTRIAL REVOLUTIONS                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1.0              2.0              3.0              4.0        │
│  ~1800            ~1900            ~1970            ~2010      │
│                                                                 │
│  ┌────────┐      ┌────────┐      ┌────────┐      ┌────────┐  │
│  │Steam   │      │Assembly│      │Computer│      │Network-│  │
│  │engine  │      │line    │      │& PLC   │      │ing &   │  │
│  │        │      │        │      │        │      │AI      │  │
│  └────────┘      └────────┘      └────────┘      └────────┘  │
│                                                                 │
│  Mechaniza-      Mass           Automa-          Cyber-        │
│  tion            production      tion            Physical      │
│                                                   Systems       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

| Revolution | Time Period | Characteristics |
|------------|-------------|-----------------|
| **Industry 1.0** | ~1800 | Steam engine, mechanization |
| **Industry 2.0** | ~1900 | Assembly line, mass production, electricity |
| **Industry 3.0** | ~1970 | Computers, PLC, automation |
| **Industry 4.0** | ~2010 | Networking, IoT, AI, Cyber-Physical Systems |

---

### Core Technologies of Industry 4.0

```
┌────────────────────────────────────────────────────────────────┐
│                 INDUSTRY 4.0 TECHNOLOGIES                      │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │
│  │    IoT       │  │   Cloud      │  │     AI       │        │
│  │  Internet    │  │  Computing   │  │  Artificial  │        │
│  │  of Things   │  │              │  │  Intelligence│        │
│  └──────────────┘  └──────────────┘  └──────────────┘        │
│                                                                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │
│  │  Big Data    │  │   Robotics   │  │  Additive    │        │
│  │  & Analytics │  │  & Cobots    │  │  Manufacturing│       │
│  │              │  │              │  │  (3D Printing)│        │
│  └──────────────┘  └──────────────┘  └──────────────┘        │
│                                                                │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │
│  │  Digital     │  │   Cyber      │  │ Augmented/   │        │
│  │  Twin        │  │   Security   │  │ Virtual      │        │
│  │              │  │              │  │ Reality      │        │
│  └──────────────┘  └──────────────┘  └──────────────┘        │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Technology | Description |
|------------|-------------|
| **IoT (Internet of Things)** | Connected sensors and machines |
| **Cyber-Physical Systems** | Connection of IT and production |
| **Big Data** | Analysis of large data volumes |
| **Cloud Computing** | Computing power from the cloud |
| **AI / Machine Learning** | Intelligent decisions |
| **Digital Twin** | Digital replica of physical objects |
| **Additive Manufacturing** | 3D printing |
| **Cobots** | Collaborative robots |

---

### The Smart Factory

```
┌────────────────────────────────────────────────────────────────┐
│                    SMART FACTORY                               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   ┌──────────────────────────────────────────────────────┐    │
│   │                      CLOUD                            │    │
│   │   (Data analysis, AI, control)                       │    │
│   └──────────────────────┬───────────────────────────────┘    │
│                          │                                     │
│            ┌─────────────┼─────────────┐                      │
│            │             │             │                      │
│   ┌────────▼────┐  ┌────▼─────┐  ┌────▼─────┐               │
│   │  Machine 1  │  │ Machine 2 │  │ Warehouse│               │
│   │  (Sensor)   │  │ (Sensor)  │  │ (RFID)   │               │
│   │    ↕        │  │    ↕      │  │    ↕     │               │
│   │  Workpiece  │  │ Workpiece │  │ Material │               │
│   └─────────────┘  └───────────┘  └──────────┘               │
│                                                                │
│   Features:                                                   │
│   • Real-time monitoring                                      │
│   • Self-organization                                         │
│   • Predictive maintenance                                    │
│   • Individual manufacturing (batch size 1)                   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Internet of Things (IoT)

| Aspect | Description |
|--------|-------------|
| **Definition** | Networking of physical devices over the internet |
| **Sensors** | Capture data (temperature, pressure, position) |
| **Actuators** | Execute actions (motor, valve) |
| **Communication** | WiFi, Bluetooth, LoRaWAN, 5G |
| **IIoT** | Industrial Internet of Things (industry) |

---

### Cyber-Physical Systems (CPS)

**Cyber-Physical Systems** connect the physical world with the digital world.

```
┌────────────────────────────────────────────────────────────────┐
│               CYBER-PHYSICAL SYSTEM                            │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│         CYBER (Digital)                                        │
│         ┌──────────────────────────────┐                      │
│         │  Software, algorithms, AI    │                      │
│         │  Data analysis, control      │                      │
│         └──────────────┬───────────────┘                      │
│                        │                                       │
│         ◄──────────────┼──────────────►                       │
│         Sensors        │        Actuators                     │
│         (Data)         │        (Actions)                     │
│                        │                                       │
│         ┌──────────────┴───────────────┐                      │
│         │  Machines, products, environment │                  │
│         └──────────────────────────────┘                      │
│         PHYSICAL                                               │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Digital Twin

A **Digital Twin** is a virtual replica of a physical object or process.

| Application | Description |
|-------------|-------------|
| **Simulation** | Testing without physical object |
| **Monitoring** | Real-time status of the real object |
| **Optimization** | Test improvements virtually first |
| **Prediction** | Predict failures |

---

### Opportunities of Industry 4.0

| Opportunity | Description |
|-------------|-------------|
| **Efficiency increase** | Optimized processes |
| **Flexibility** | Individual products (batch size 1) |
| **Quality improvement** | Real-time quality control |
| **Predictive Maintenance** | Maintenance before failure |
| **New business models** | Product-as-a-Service |
| **Resource conservation** | Less waste |

---

### Challenges

| Challenge | Description |
|-----------|-------------|
| **IT security** | Networked systems are vulnerable |
| **Investments** | High initial costs |
| **Qualification** | Employees need training |
| **Standardization** | Many different protocols |
| **Data protection** | Handling of production data |
| **Complexity** | Integration of different systems |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Industry 4.0** | Fourth industrial revolution |
| **IoT** | Internet of Things |
| **IIoT** | Industrial Internet of Things |
| **CPS** | Cyber-Physical Systems |
| **Digital Twin** | Digital replica |
| **Smart Factory** | Connected, intelligent factory |
| **Predictive Maintenance** | Predictive maintenance |

---

## Exam Tips

### Common Exam Questions

- What is Industry 4.0?
- Name the four industrial revolutions
- What is IoT?
- What is a Digital Twin?

### Important to Remember

- **Industry 4.0** = Networking, IoT, AI in production
- **IoT** = Connected devices with sensors/actuators
- **CPS** = Connection physical ↔ digital
- **Smart Factory** = self-organizing, networked production

---

## Practice Exercises

### Exercise 1
Name the four industrial revolutions and their characteristics.

**Solution:**
1. **Industry 1.0 (~1800):** Steam engine, mechanical production
2. **Industry 2.0 (~1900):** Assembly line, electricity, mass production
3. **Industry 3.0 (~1970):** Computers, PLC, automation
4. **Industry 4.0 (~2010):** Networking, IoT, AI, Cyber-Physical Systems

### Exercise 2
What is a Digital Twin and what is it used for?

**Solution:** A **Digital Twin** is a virtual replica of a real object (machine, product, process). Uses:
- **Simulation:** Test new settings without risk
- **Monitoring:** Real-time status of the real machine
- **Optimization:** Test improvements virtually first
- **Prediction:** Predict maintenance needs or failures

### Exercise 3
Name two opportunities and two challenges of Industry 4.0.

**Solution:**

**Opportunities:**
1. **Efficiency increase:** Optimized processes through real-time data
2. **Predictive Maintenance:** Maintenance before failure, less downtime

**Challenges:**
1. **IT security:** Networked production facilities are attack targets
2. **Investments:** High initial costs for new technologies

---

## Cross-References

- [05-06-01 AI Fundamentals](./05-06-artificial-intelligence/05-06-01-ai-fundamentals.md) - AI in production
- [05-04-02 Cloud Computing](./05-04-virtualization-cloud/05-04-02-cloud-computing.md) - Cloud for industry
- [04-01-01 CIA Triad](../04-it-security/04-01-protection-goals/04-01-01-cia-triad.md) - Security in industry
