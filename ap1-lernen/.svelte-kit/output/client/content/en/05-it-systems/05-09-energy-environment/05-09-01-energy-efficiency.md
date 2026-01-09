# Energy Efficiency in IT

## Learning Objectives

After this chapter, you should be able to:
- Understand the importance of energy efficiency in IT
- Know measures for energy savings
- Explain Green IT
- Estimate energy consumption of IT systems

---

## Core Content

### Why Energy Efficiency in IT?

IT systems consume significant amounts of energy. Energy efficiency saves costs and protects the environment.

```
┌─────────────────────────────────────────────────────────────────┐
│                 IT ENERGY CONSUMPTION                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Data centers worldwide: approx. 200-250 TWh/year             │
│   (approx. 1% of global electricity consumption)               │
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │  POWER CONSUMPTION OF A DATA CENTER                      │  │
│   │                                                          │  │
│   │   Servers & Storage:    ~40%   ████████░░░░░░░░░░      │  │
│   │   Cooling:              ~40%   ████████░░░░░░░░░░      │  │
│   │   Network:              ~10%   ██░░░░░░░░░░░░░░░░      │  │
│   │   Lighting, UPS:        ~10%   ██░░░░░░░░░░░░░░░░      │  │
│   └─────────────────────────────────────────────────────────┘  │
│                                                                 │
│   Cooling is almost as energy-intensive as the IT itself!     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Green IT

**Green IT** refers to measures for environmentally and resource-friendly use of information technology.

| Aspect | Description |
|--------|-------------|
| **Green through IT** | IT helps other areas save energy |
| **Green in IT** | Make IT itself more energy-efficient |

```
┌────────────────────────────────────────────────────────────────┐
│                      GREEN IT                                  │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  GREEN THROUGH IT                   GREEN IN IT               │
│  (IT as enabler)                    (Optimize IT itself)      │
│                                                                │
│  • Video conferences instead       • Energy-efficient         │
│    of business trips                 hardware                  │
│  • Digital documents               • Virtualization           │
│    instead of paper                • Efficient cooling        │
│  • Smart buildings                 • Power management         │
│  • Industry 4.0                    • Cloud instead of         │
│    optimization                      local servers            │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Measures for Energy Savings

#### Hardware

| Measure | Description |
|---------|-------------|
| **Energy-efficient processors** | Modern CPUs with low TDP |
| **SSDs instead of HDDs** | SSDs consume less power |
| **Efficient power supplies** | 80 PLUS certified |
| **Consolidation** | Fewer servers through virtualization |
| **Shutdown** | Turn off unused devices |

#### Software

| Measure | Description |
|---------|-------------|
| **Power management** | Activate power-saving modes |
| **Virtualization** | Multiple VMs on less hardware |
| **Cloud computing** | Outsourcing to efficient data centers |
| **Efficient software** | Resource-conserving programming |

#### Data Center

| Measure | Description |
|---------|-------------|
| **Free cooling** | Use outside air |
| **Hot/cold aisle** | Separated airflows |
| **Waste heat utilization** | Heating with server waste heat |
| **Renewable energy** | Power from solar, wind |

---

### PUE (Power Usage Effectiveness)

**PUE** is a metric for the energy efficiency of data centers.

```
┌────────────────────────────────────────────────────────────────┐
│                      PUE CALCULATION                           │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│                 Total energy of data center                    │
│   PUE  =  ─────────────────────────────────────────           │
│                 Energy for IT equipment                        │
│                                                                │
│   Example:                                                     │
│   200 kW Total / 100 kW IT = PUE 2.0                          │
│                                                                │
│   ┌─────────────────────────────────────────────────────────┐ │
│   │  PUE       │ Rating                                      │ │
│   │───────────────────────────────────────────────────────│ │
│   │  > 2.0     │ Poor (50% for cooling etc.)                │ │
│   │  1.6 - 2.0 │ Average                                    │ │
│   │  1.2 - 1.6 │ Good                                       │ │
│   │  < 1.2     │ Very good (e.g., Google: ~1.1)            │ │
│   └─────────────────────────────────────────────────────────┘ │
│                                                                │
│   Ideal: PUE = 1.0 (all energy goes to IT)                   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Power-Saving Modes

| Mode | Windows | Description |
|------|---------|-------------|
| **Sleep** | S3 | RAM stays active, quick wake |
| **Hibernate** | S4 | RAM to hard drive, no power |
| **Power saver** | - | Reduced performance |
| **Shutdown** | S5 | Completely off |

---

### Energy Efficiency in the Office

```
┌────────────────────────────────────────────────────────────────┐
│              ENERGY SAVING TIPS WORKPLACE                      │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  ┌────────────────────────────────────────────────────────┐   │
│  │ ✓ Turn off monitor during breaks                       │   │
│  │ ✓ Activate power-saving mode                           │   │
│  │ ✓ Only turn on printer when needed                     │   │
│  │ ✓ Laptop instead of desktop (less consumption)         │   │
│  │ ✓ Power strip with switch                              │   │
│  │ ✓ Reduce screen brightness                             │   │
│  │ ✓ Completely turn off devices after work               │   │
│  └────────────────────────────────────────────────────────┘   │
│                                                                │
│  Typical consumption:                                         │
│  Desktop PC:   60-250 Watts                                   │
│  Laptop:       15-60 Watts                                    │
│  Monitor:      20-40 Watts                                    │
│  Printer:      10-40 Watts (Standby: 1-5 Watts)              │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Renewable Energy for IT

| Measure | Description |
|---------|-------------|
| **Green electricity** | Purchase of renewable power |
| **Solar** | PV system on data center |
| **CO2 compensation** | Offset through projects |
| **Location choice** | Cooler climate = less cooling energy |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Green IT** | Environmentally friendly IT |
| **PUE** | Power Usage Effectiveness |
| **TDP** | Thermal Design Power (CPU heat output) |
| **Standby** | Power-saving mode |
| **Virtualization** | Multiple VMs on one host |
| **Consolidation** | Combining servers |

---

## Exam Tips

### Common Exam Questions

- What is Green IT?
- Name measures for energy savings
- What is PUE?
- How can you save energy in the office?

### Important to Remember

- **Green IT** = environmentally friendly IT use
- **PUE** = Total energy / IT energy (ideal: 1.0)
- **Cooling** = ~40% of DC power consumption
- **Virtualization** = fewer servers = less power

---

## Practice Exercises

### Exercise 1
What is the difference between "Green through IT" and "Green in IT"?

**Solution:**
- **Green through IT:** IT helps other areas save energy (e.g., video conferences instead of business trips, digital documents instead of paper)
- **Green in IT:** Making IT itself more energy-efficient (e.g., energy-saving hardware, virtualization, efficient cooling)

### Exercise 2
A data center consumes 500 kW, of which 300 kW for IT equipment. What is the PUE?

**Solution:**
```
PUE = Total energy / IT energy
PUE = 500 kW / 300 kW = 1.67
```
**Rating:** Average value. 40% of energy does not go to IT (cooling, lighting, etc.).

### Exercise 3
Name three measures to reduce energy consumption at the office workplace.

**Solution:**
1. **Activate power-saving mode:** PC automatically goes to standby
2. **Turn off monitor during breaks:** Saves 20-40 Watts
3. **Use laptop instead of desktop:** Laptops consume 15-60 Watts instead of 60-250 Watts

---

## Cross-References

- [05-09-02 Device Classes](./05-09-02-device-classes.md) - Energy efficiency classes
- [05-04-01 Virtualization](../05-04-virtualization-cloud/05-04-01-virtualization.md) - Server consolidation
- [05-02-07 UPS](../05-02-hardware/05-02-07-usv.md) - Power supply
