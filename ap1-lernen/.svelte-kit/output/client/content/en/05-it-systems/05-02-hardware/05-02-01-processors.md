# Processors (CPU)

## Learning Objectives

After this chapter, you should be able to:
- Know the structure of a processor
- Explain how it works
- Understand important metrics
- Know the differences between processor types

---

## Core Content

### What is a Processor?

The **processor** (CPU - Central Processing Unit) is the "brain" of the computer. It executes program instructions and processes data.

```
┌─────────────────────────────────────────────────────────────────┐
│                        CPU                                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    CONTROL UNIT                          │   │
│  │         Fetches, decodes and controls instructions       │   │
│  └─────────────────────────────────────────────────────────┘   │
│                           │                                     │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    ALU (Arithmetic Logic Unit)           │   │
│  │       Executes arithmetic and logical operations         │   │
│  └─────────────────────────────────────────────────────────┘   │
│                           │                                     │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    REGISTERS                             │   │
│  │            Very fast temporary storage                   │   │
│  └─────────────────────────────────────────────────────────┘   │
│                           │                                     │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    CACHE                                 │   │
│  │              Fast buffer memory                          │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Main Components

| Component | Function |
|-----------|----------|
| **Control Unit** | Fetches instructions from memory, decodes them, controls execution flow |
| **ALU (Arithmetic Logic Unit)** | Executes arithmetic (+, -, ×, ÷) and logical (AND, OR, NOT) operations |
| **Registers** | Very fast, small memory directly in the CPU |
| **Cache** | Fast buffer memory between CPU and RAM |

---

### The Instruction Cycle

The CPU works according to the **Fetch-Decode-Execute** cycle:

```
┌────────────────────────────────────────────────────────────────┐
│               FETCH - DECODE - EXECUTE                         │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   1. FETCH                                                     │
│      ┌─────────┐                                               │
│      │ Fetch   │ ◄─────────── Load from memory                │
│      │ instruc-│                                               │
│      │ tion    │                                               │
│      └────┬────┘                                               │
│           │                                                    │
│           ▼                                                    │
│   2. DECODE                                                    │
│      ┌─────────┐                                               │
│      │ Decode  │ ◄─────────── What should be done?            │
│      │ instruc-│                                               │
│      │ tion    │                                               │
│      └────┬────┘                                               │
│           │                                                    │
│           ▼                                                    │
│   3. EXECUTE                                                   │
│      ┌─────────┐                                               │
│      │ Execute │ ◄─────────── Perform calculation             │
│      │ instruc-│                                               │
│      │ tion    │                                               │
│      └────┬────┘                                               │
│           │                                                    │
│           ▼                                                    │
│      Back to 1.                                                │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Important Metrics

| Metric | Description | Example |
|--------|-------------|---------|
| **Clock Frequency** | Operations per second | 3.5 GHz |
| **Cores** | Independent processing units | 8 cores |
| **Threads** | Logical processors (Hyper-Threading) | 16 threads |
| **Cache** | Buffer memory (L1, L2, L3) | 32 MB L3 |
| **TDP** | Thermal Design Power (heat dissipation) | 65 Watts |
| **Architecture** | Instruction set | x86-64, ARM |

---

### Cache Hierarchy

```
┌────────────────────────────────────────────────────────────────┐
│                    CACHE HIERARCHY                             │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   CPU ◄──► L1 Cache ◄──► L2 Cache ◄──► L3 Cache ◄──► RAM      │
│                                                                │
│   ┌─────────────────────────────────────────────────────────┐ │
│   │  Cache  │ Size       │ Speed           │ Cost           │ │
│   │─────────│────────────│─────────────────│────────────────│ │
│   │   L1    │ 32-64 KB   │ Very fast       │ Very expensive │ │
│   │   L2    │ 256-512 KB │ Fast            │ Expensive      │ │
│   │   L3    │ 8-64 MB    │ Medium          │ Medium         │ │
│   │   RAM   │ 8-64 GB    │ Slow*           │ Affordable     │ │
│   └─────────────────────────────────────────────────────────┘ │
│                                                                │
│   * Relative to CPU                                            │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Processor Architectures

| Architecture | Description | Usage |
|--------------|-------------|-------|
| **x86-64** | CISC, 64-bit, Intel/AMD | Desktop, Server |
| **ARM** | RISC, energy-efficient | Smartphones, Tablets, Apple M-Chips |
| **RISC-V** | Open-Source RISC | IoT, Embedded |

#### CISC vs. RISC

| Aspect | CISC | RISC |
|--------|------|------|
| **Complexity** | Complex instructions | Simple instructions |
| **Example** | x86 (Intel, AMD) | ARM, RISC-V |
| **Instructions** | Many, variable length | Few, fixed length |
| **Power Consumption** | Higher | Lower |

---

### Multi-Core Processors

Modern CPUs have multiple **cores** that can work in parallel:

```
┌────────────────────────────────────────────────────────────────┐
│                 MULTI-CORE PROCESSOR                           │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐     │
│   │  Core 1  │  │  Core 2  │  │  Core 3  │  │  Core 4  │     │
│   │  L1/L2   │  │  L1/L2   │  │  L1/L2   │  │  L1/L2   │     │
│   └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘     │
│        │             │             │             │            │
│        └─────────────┴──────┬──────┴─────────────┘            │
│                             │                                  │
│                      ┌──────┴──────┐                          │
│                      │  L3 Cache   │                          │
│                      │  (shared)   │                          │
│                      └─────────────┘                          │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

**Hyper-Threading (SMT):** One physical core can process two threads simultaneously → 4 cores = 8 threads

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **CPU** | Central Processing Unit |
| **ALU** | Arithmetic Logic Unit |
| **Cache** | Fast buffer memory |
| **Clock Frequency** | Speed in GHz |
| **Core** | Independent processing unit |
| **Thread** | Logical processor |
| **TDP** | Thermal Design Power |
| **CISC** | Complex Instruction Set Computer |
| **RISC** | Reduced Instruction Set Computer |

---

## Exam Tips

### Common Exam Questions

- What components make up a CPU?
- What is the difference between a core and a thread?
- What is cache and what is it used for?
- Explain the instruction cycle

### Important to Remember

- **CPU = Control Unit + ALU + Registers**
- **Instruction Cycle:** Fetch → Decode → Execute
- **Cache Hierarchy:** L1 < L2 < L3 (fast → slower)
- **More cores** = More parallelism

---

## Practice Exercises

### Exercise 1
Name the three main components of a CPU.

**Solution:**
1. **Control Unit** - Fetches and decodes instructions
2. **ALU (Arithmetic Logic Unit)** - Performs calculations
3. **Registers** - Store intermediate results

### Exercise 2
What is the difference between a core and a thread?

**Solution:**
- **Core:** Physical, independent processing unit in the CPU
- **Thread:** Logical processor created through Hyper-Threading/SMT

A 4-core processor with Hyper-Threading has 4 physical cores but 8 threads.

### Exercise 3
What is cache used for and what cache levels exist?

**Solution:** The **cache** is a fast buffer memory between CPU and RAM that holds frequently needed data.

Cache levels:
- **L1:** Very fast, very small (32-64 KB), per core
- **L2:** Fast, small (256-512 KB), per core
- **L3:** Medium fast, larger (8-64 MB), shared among all cores

---

## Cross-References

- [05-02-02 Memory (RAM)](./05-02-02-memory-ram.md) - Working memory
- [05-02-06 Graphics Cards](./05-02-06-graphics-cards.md) - GPU vs. CPU
- [05-03-01 Operating Systems](../05-03-operating-systems/05-03-01-fundamentals-operating-systems.md) - Process management
