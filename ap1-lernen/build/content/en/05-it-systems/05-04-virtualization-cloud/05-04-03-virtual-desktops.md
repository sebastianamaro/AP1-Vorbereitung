# Virtual Desktops (VDI)

## Learning Objectives

After this chapter, you should be able to:
- Explain the concept of virtual desktops
- Distinguish VDI from traditional workstations
- Know advantages and disadvantages
- Describe use case scenarios

---

## Core Content

### What are Virtual Desktops?

**Virtual Desktops (VDI - Virtual Desktop Infrastructure)** enable workstations to be operated centrally in the data center or cloud. Users access their desktop via thin clients or any devices.

```
┌─────────────────────────────────────────────────────────────────┐
│                  VIRTUAL DESKTOP (VDI)                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │                 DATA CENTER / CLOUD                      │  │
│   │   ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐      │  │
│   │   │Desktop 1│ │Desktop 2│ │Desktop 3│ │Desktop 4│      │  │
│   │   │  (VM)   │ │  (VM)   │ │  (VM)   │ │  (VM)   │      │  │
│   │   └─────────┘ └─────────┘ └─────────┘ └─────────┘      │  │
│   │                    Server / Hypervisor                   │  │
│   └─────────────────────────────────────────────────────────┘  │
│                              │                                  │
│                         ┌────┴────┐                            │
│                         │ Network │                            │
│                         └────┬────┘                            │
│                              │                                  │
│       ┌──────────────────────┼──────────────────────┐          │
│       │                      │                      │          │
│   ┌───┴───┐            ┌─────┴─────┐          ┌────┴────┐     │
│   │ Thin  │            │  Laptop   │          │ Tablet  │     │
│   │Client │            │  (Home)   │          │         │     │
│   └───────┘            └───────────┘          └─────────┘     │
│   Office               Home Office            On the go        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Terminology

| Term | Description |
|------|-------------|
| **VDI** | Virtual Desktop Infrastructure |
| **Thin Client** | Simple endpoint device without own computing power |
| **Fat Client** | Full-fledged PC with local processing |
| **DaaS** | Desktop as a Service (cloud-based VDI) |
| **Session-based** | Multiple users share one server OS |

---

### VDI Architecture

```
┌────────────────────────────────────────────────────────────────┐
│                   VDI ARCHITECTURE                             │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  ┌────────────────────────────────────────────────────────┐   │
│  │                 Management Layer                        │   │
│  │   (Provisioning, user management, monitoring)          │   │
│  └────────────────────────────────────────────────────────┘   │
│                            │                                   │
│  ┌────────────────────────────────────────────────────────┐   │
│  │                 Connection Broker                       │   │
│  │          (Connects users to desktops)                  │   │
│  └────────────────────────────────────────────────────────┘   │
│                            │                                   │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐          │
│  │  VDI Server  │ │  VDI Server  │ │  VDI Server  │          │
│  │  (VMs)       │ │  (VMs)       │ │  (VMs)       │          │
│  └──────────────┘ └──────────────┘ └──────────────┘          │
│                            │                                   │
│  ┌────────────────────────────────────────────────────────┐   │
│  │               Shared Storage (SAN/NAS)                  │   │
│  │         (Profiles, data, VM images)                    │   │
│  └────────────────────────────────────────────────────────┘   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Comparison: Traditional vs. VDI

| Aspect | Traditional PC | VDI |
|--------|----------------|-----|
| **Data location** | Locally on PC | Centrally in data center |
| **Hardware** | Full-fledged PC | Thin client sufficient |
| **Maintenance** | Each PC individually | Centrally, once |
| **Security** | Data on device | Data in DC, device replaceable |
| **Access** | Only at PC | From anywhere |
| **Hardware costs** | Higher (per PC) | Lower (thin clients) |
| **Infrastructure costs** | Lower | Higher (servers, licenses) |

---

### Desktop Provisioning Models

| Model | Description | Use Case |
|-------|-------------|----------|
| **Persistent Desktop** | Dedicated desktop per user, retains changes | Power users |
| **Non-Persistent** | Desktop resets on logout | Standard workstations |
| **Session-based** | Multiple users on one server OS | Call centers, training |

---

### Advantages of VDI

| Advantage | Description |
|-----------|-------------|
| **Central management** | Updates, software installed only once |
| **Security** | Data remains in the data center |
| **Flexibility** | Access from anywhere, any device |
| **BYOD** | Employees can use their own devices |
| **Disaster Recovery** | Desktop images easily backed up |
| **Longer hardware use** | Thin clients have long lifespan |

---

### Disadvantages of VDI

| Disadvantage | Description |
|--------------|-------------|
| **Network dependency** | No network, no work |
| **Initial costs** | Servers, licenses, infrastructure |
| **Complexity** | More complex planning and operation |
| **Latency** | Noticeable with poor connection |
| **Graphics-intensive apps** | Limited GPU usage |

---

### VDI Solutions

| Provider | Product | Special Feature |
|----------|---------|-----------------|
| **VMware** | Horizon | Market leader on-premise |
| **Citrix** | Virtual Apps and Desktops | Strong session-based |
| **Microsoft** | Azure Virtual Desktop | Cloud-native |
| **Amazon** | WorkSpaces | AWS DaaS |

---

### Desktop as a Service (DaaS)

**DaaS** is VDI from the cloud - the provider operates the entire infrastructure.

| Aspect | VDI (On-Premise) | DaaS (Cloud) |
|--------|------------------|--------------|
| **Infrastructure** | Self-operated | By provider |
| **Costs** | Investment | Monthly fee |
| **Scaling** | Must be planned | Flexible |
| **Maintenance** | Own IT | Provider |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **VDI** | Virtual Desktop Infrastructure |
| **Thin Client** | Simple endpoint, only displays remote desktop |
| **DaaS** | Desktop as a Service |
| **Persistent** | Desktop retains changes |
| **Non-Persistent** | Desktop is reset |
| **Connection Broker** | Connects users to VMs |

---

## Exam Tips

### Common Exam Questions

- What is VDI?
- What is the difference between thin client and fat client?
- Name advantages and disadvantages of VDI
- What does DaaS mean?

### Important to Remember

- **VDI** = Desktops run centrally, user accesses remotely
- **Thin Client** = simple device without local processing
- **Advantages:** Central management, security, flexibility
- **Disadvantages:** Network dependency, initial costs
- **DaaS** = VDI from the cloud

---

## Practice Exercises

### Exercise 1
What is the difference between a thin client and a fat client?

**Solution:**
- **Thin Client:** Simple endpoint device with minimal hardware (no own operating system for applications). Only displays the remote desktop, all computations happen on the server.
- **Fat Client:** Full-fledged PC with own operating system and applications. Processing happens locally.

### Exercise 2
A company with 500 employees is considering switching to VDI. Name two advantages and two challenges.

**Solution:**

**Advantages:**
1. **Central management:** Updates and software only need to be installed once in the master image
2. **Security:** Data remains in the data center, lost devices are not a data protection problem

**Challenges:**
1. **Initial costs:** Servers, storage, licenses, network upgrade required
2. **Network dependency:** Employees cannot work without network connection

### Exercise 3
What does "Non-Persistent Desktop" mean and for which scenarios is it suitable?

**Solution:** A **Non-Persistent Desktop** is reset to its original state after each logout. User changes are lost.

Suitable for:
- **Call centers:** Standardized workstations
- **Training:** Always the same starting point
- **Public terminals:** No user data remains
- **Standard office workstations:** Where no individual customizations are needed

---

## Cross-References

- [05-04-01 Virtualization](./05-04-01-virtualization.md) - Fundamentals
- [05-04-02 Cloud Computing](./05-04-02-cloud-computing.md) - DaaS as cloud service
- [04-01-01 CIA Triad](../../04-it-security/04-01-protection-goals/04-01-01-cia-triad.md) - Security through central data storage
