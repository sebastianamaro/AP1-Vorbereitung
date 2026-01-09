# Graphics Cards (GPU)

## Learning Objectives

After this chapter, you should be able to:
- Know the difference between CPU and GPU
- Understand the structure of a graphics card
- Explain important metrics
- Know use cases for GPUs

---

## Core Content

### What is a Graphics Card?

A **graphics card** (GPU - Graphics Processing Unit) is specialized for parallel computations for graphics output and other compute-intensive tasks.

```
┌─────────────────────────────────────────────────────────────────┐
│                    GRAPHICS CARD                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                      GPU                                 │   │
│  │           (Graphics Processor)                           │   │
│  │                                                          │   │
│  │   ┌─────┐┌─────┐┌─────┐┌─────┐┌─────┐┌─────┐          │   │
│  │   │Core ││Core ││Core ││Core ││Core ││Core │  ...      │   │
│  │   └─────┘└─────┘└─────┘└─────┘└─────┘└─────┘          │   │
│  │              Thousands of parallel cores                │   │
│  └─────────────────────────────────────────────────────────┘   │
│                           │                                     │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                   VRAM (Graphics Memory)                 │   │
│  │              (GDDR6, HBM2 - 4-24 GB)                     │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐      │
│  │    HDMI       │  │ DisplayPort   │  │     DVI       │      │
│  │  Port         │  │  Port         │  │  Port         │      │
│  └───────────────┘  └───────────────┘  └───────────────┘      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### CPU vs. GPU

| Aspect | CPU | GPU |
|--------|-----|-----|
| **Cores** | Few (4-64) | Many (1,000-10,000+) |
| **Task** | Sequential tasks | Parallel tasks |
| **Optimized for** | Complex individual tasks | Simple mass tasks |
| **Example** | Program logic | Pixel calculations |

```
┌────────────────────────────────────────────────────────────────┐
│                    CPU vs. GPU                                 │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  CPU (few powerful cores)        GPU (many simple cores)       │
│                                                                │
│  ┌────────┐ ┌────────┐           ┌─┐┌─┐┌─┐┌─┐┌─┐┌─┐┌─┐┌─┐   │
│  │        │ │        │           │ ││ ││ ││ ││ ││ ││ ││ │   │
│  │ Core 1 │ │ Core 2 │           ├─┤├─┤├─┤├─┤├─┤├─┤├─┤├─┤   │
│  │        │ │        │           │ ││ ││ ││ ││ ││ ││ ││ │   │
│  └────────┘ └────────┘           ├─┤├─┤├─┤├─┤├─┤├─┤├─┤├─┤   │
│                                   │ ││ ││ ││ ││ ││ ││ ││ │   │
│  Fast at                          └─┘└─┘└─┘└─┘└─┘└─┘└─┘└─┘   │
│  complex tasks                                                 │
│                                   Fast at many                 │
│                                   identical tasks              │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Integrated vs. Dedicated Graphics

| Type | Description | Usage |
|------|-------------|-------|
| **Integrated (iGPU)** | Built into CPU (Intel UHD, AMD APU) | Office, Video |
| **Dedicated (dGPU)** | Separate card (NVIDIA, AMD) | Gaming, 3D, AI |

**Advantages of integrated graphics:**
- No extra power consumption
- Cost-effective
- Space-saving

**Advantages of dedicated graphics:**
- High performance
- Own graphics memory (VRAM)
- For demanding tasks

---

### Important Metrics

| Metric | Description | Example |
|--------|-------------|---------|
| **VRAM** | Video RAM (graphics memory) | 8 GB GDDR6 |
| **Clock** | GPU speed | 1,800 MHz |
| **CUDA Cores** | Processing cores (NVIDIA) | 4,352 |
| **Stream Processors** | Processing cores (AMD) | 2,560 |
| **TDP** | Power consumption | 250 Watts |
| **Memory Bandwidth** | Data rate to VRAM | 448 GB/s |

---

### Graphics Memory (VRAM)

| Type | Description | Usage |
|------|-------------|-------|
| **GDDR6** | Standard for gaming | Current graphics cards |
| **GDDR6X** | Faster GDDR6 | High-end NVIDIA |
| **HBM2/HBM3** | Very fast, stacked | Professional/AI cards |

**VRAM Recommendation:**
- **4-6 GB:** Full HD Gaming
- **8-12 GB:** WQHD Gaming, Image editing
- **16+ GB:** 4K Gaming, 3D Rendering, AI

---

### Use Cases

| Use Case | Requirement |
|----------|-------------|
| **Office/Work** | Integrated graphics sufficient |
| **Gaming** | Dedicated graphics card |
| **Video Editing** | GPU acceleration |
| **3D Rendering** | High VRAM, many cores |
| **AI/Machine Learning** | CUDA cores, Tensor cores |
| **CAD** | Professional cards (Quadro, Radeon Pro) |

---

### Interfaces

| Interface | Description |
|-----------|-------------|
| **PCIe x16** | Connection to motherboard |
| **HDMI** | For monitors and TVs |
| **DisplayPort** | For gaming monitors |
| **USB-C/Thunderbolt** | For VR and new monitors |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **GPU** | Graphics Processing Unit |
| **VRAM** | Video RAM (graphics memory) |
| **iGPU** | Integrated graphics |
| **dGPU** | Dedicated (separate) graphics card |
| **CUDA** | NVIDIA parallel architecture |
| **GDDR** | Graphics DDR (memory type) |
| **TDP** | Thermal Design Power |

---

## Exam Tips

### Common Exam Questions

- What is the difference between CPU and GPU?
- When is a dedicated graphics card useful?
- What is VRAM?

### Important to Remember

- **GPU** = many parallel cores for graphics calculations
- **iGPU** = integrated, sufficient for office
- **dGPU** = dedicated, needed for gaming/3D/AI
- **VRAM** = own memory of the graphics card

---

## Practice Exercises

### Exercise 1
What is the main difference between CPU and GPU?

**Solution:**
- **CPU:** Few powerful cores, optimized for complex sequential tasks
- **GPU:** Many simple cores, optimized for simple parallel tasks (like pixel calculations)

### Exercise 2
An employee needs a PC for office applications and occasional video conferences. Does he need a dedicated graphics card?

**Solution:** **No**, for office applications and video conferences an **integrated graphics** (iGPU) is completely sufficient. A dedicated graphics card would only make sense for gaming, 3D applications, or video editing.

### Exercise 3
What does "8 GB VRAM" mean on a graphics card?

**Solution:** **VRAM (Video RAM)** is the graphics card's own working memory. 8 GB VRAM means the graphics card has 8 gigabytes of memory available for textures, framebuffer, and other graphics data. More VRAM is important for higher resolutions and detailed textures.

---

## Cross-References

- [05-02-01 Processors](./05-02-01-processors.md) - CPU
- [05-02-05 Interfaces](./05-02-05-interfaces.md) - PCIe, HDMI, DisplayPort
- [05-06-01 AI Fundamentals](../05-06-artificial-intelligence/05-06-01-ai-fundamentals.md) - GPU for AI
