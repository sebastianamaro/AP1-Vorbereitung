# Cloud Computing

## Learning Objectives

After this chapter, you should be able to:
- Define cloud computing
- Distinguish between service models (IaaS, PaaS, SaaS)
- Know deployment models
- Evaluate advantages and disadvantages

---

## Core Content

### What is Cloud Computing?

**Cloud computing** refers to the provision of IT resources (computing power, storage, applications) over the internet, which are used and paid for on demand.

```
┌─────────────────────────────────────────────────────────────────┐
│                    CLOUD COMPUTING                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Traditional (On-Premise)       Cloud Computing               │
│                                                                 │
│   ┌─────────────────────┐        ┌─────────────────────┐      │
│   │  Own                │        │      CLOUD          │      │
│   │  Data Center        │        │                     │      │
│   │  ┌───┐ ┌───┐ ┌───┐ │        │   ┌───┐┌───┐┌───┐  │      │
│   │  │Srv│ │Srv│ │Srv│ │        │   │   ││   ││   │  │      │
│   │  └───┘ └───┘ └───┘ │        │   └───┘└───┘└───┘  │      │
│   └─────────────────────┘        └─────────────────────┘      │
│                                           ↕                    │
│   • High investment              ┌──────────────────┐         │
│   • Self-managed                 │    Internet      │         │
│   • Fixed costs                  └──────────────────┘         │
│                                           ↕                    │
│                                   ┌──────────────────┐        │
│                                   │    Company       │        │
│                                   └──────────────────┘        │
│                                                                │
│                                   • No investment             │
│                                   • Provider manages          │
│                                   • Pay-per-use              │
│                                                                │
└─────────────────────────────────────────────────────────────────┘
```

---

### NIST Definition: Characteristics of Cloud Computing

| Characteristic | Description |
|----------------|-------------|
| **On-Demand Self-Service** | Book resources yourself as needed |
| **Broad Network Access** | Access via internet from anywhere |
| **Resource Pooling** | Resources are shared between customers |
| **Rapid Elasticity** | Quick scaling up/down |
| **Measured Service** | Pay per usage |

---

### Service Models (as-a-Service)

```
┌────────────────────────────────────────────────────────────────┐
│                   SERVICE MODELS                               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  On-Premise    IaaS         PaaS         SaaS                 │
│  (Own DC)      Infrastructure Platform   Software             │
│                                                                │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐        │
│  │Application│ │Application│ │Application│ │██████████│ ←Cloud │
│  ├──────────┤ ├──────────┤ ├──────────┤ │██████████│        │
│  │Data      │ │Data      │ │██████████│ │██████████│        │
│  ├──────────┤ ├──────────┤ │██████████│ │██████████│        │
│  │Runtime   │ │Runtime   │ │██████████│ │██████████│        │
│  ├──────────┤ ├──────────┤ │██████████│ │██████████│        │
│  │Middleware│ │Middleware│ │██████████│ │██████████│        │
│  ├──────────┤ ├──────────┤ │██████████│ │██████████│        │
│  │OS        │ │██████████│ │██████████│ │██████████│        │
│  ├──────────┤ │██████████│ │██████████│ │██████████│        │
│  │Virtual.  │ │██████████│ │██████████│ │██████████│        │
│  ├──────────┤ │██████████│ │██████████│ │██████████│        │
│  │Server    │ │██████████│ │██████████│ │██████████│        │
│  ├──────────┤ │██████████│ │██████████│ │██████████│        │
│  │Storage   │ │██████████│ │██████████│ │██████████│        │
│  ├──────────┤ │██████████│ │██████████│ │██████████│        │
│  │Network   │ │██████████│ │██████████│ │██████████│        │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘        │
│                                                                │
│  ████ = Managed by cloud provider                              │
│  Empty = Managed by customer                                   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Model | Full Name | Description | Examples |
|-------|-----------|-------------|----------|
| **IaaS** | Infrastructure as a Service | Virtual hardware (server, storage, network) | AWS EC2, Azure VMs, Google Compute |
| **PaaS** | Platform as a Service | Development platform (OS, runtime, middleware) | Azure App Service, Heroku, Google App Engine |
| **SaaS** | Software as a Service | Ready-to-use applications | Microsoft 365, Google Workspace, Salesforce |

---

### Deployment Models

```
┌────────────────────────────────────────────────────────────────┐
│                 DEPLOYMENT MODELS                              │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  PUBLIC CLOUD              PRIVATE CLOUD                       │
│  ┌──────────────────┐     ┌──────────────────┐               │
│  │ Public           │     │ Only for one     │               │
│  │ for everyone     │     │ organization     │               │
│  └──────────────────┘     └──────────────────┘               │
│                                                                │
│  HYBRID CLOUD              MULTI-CLOUD                        │
│  ┌──────────────────┐     ┌──────────────────┐               │
│  │ Combination of   │     │ AWS, Azure       │               │
│  │ Public + Private │     │ Google           │               │
│  │                  │     │ Multiple providers│               │
│  └──────────────────┘     └──────────────────┘               │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Model | Description | Advantages |
|-------|-------------|------------|
| **Public Cloud** | Public, multiple customers | Inexpensive, scalable |
| **Private Cloud** | Exclusive for one organization | Control, security |
| **Hybrid Cloud** | Combination Public + Private | Flexibility |
| **Multi-Cloud** | Multiple cloud providers | No vendor lock-in |

---

### Advantages of Cloud Computing

| Advantage | Description |
|-----------|-------------|
| **Scalability** | Scale resources up/down as needed |
| **Cost efficiency** | No investments, pay-per-use |
| **Availability** | Worldwide access, high uptime |
| **Maintenance-free** | Provider handles hardware |
| **Rapid provisioning** | New resources in minutes |
| **Disaster Recovery** | Geo-redundant backups |

---

### Disadvantages and Risks

| Disadvantage | Description |
|--------------|-------------|
| **Dependency** | Vendor lock-in, internet dependency |
| **Data protection** | Data with third parties (compliance matters) |
| **Control** | Less control over infrastructure |
| **Costs** | Can be more expensive than on-premise at high usage |
| **Latency** | Higher delay than local systems |
| **Security** | Shared infrastructure |

---

### Cloud Providers

| Provider | Service | Special Feature |
|----------|---------|-----------------|
| **Amazon** | AWS (Amazon Web Services) | Market leader |
| **Microsoft** | Azure | Integration with Microsoft products |
| **Google** | Google Cloud Platform | AI/ML services |
| **Deutsche Telekom** | Open Telekom Cloud | German provider |
| **IONOS** | IONOS Cloud | GDPR-compliant |

---

### Cloud and Data Protection

| Aspect | Important |
|--------|-----------|
| **Server location** | Prefer EU servers for GDPR compliance |
| **Data processing agreement** | Conclude DPA (Data Processing Agreement) |
| **Encryption** | Transfer and store data encrypted |
| **Certifications** | Check ISO 27001, C5 attestation |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Cloud Computing** | IT resources over the internet |
| **IaaS** | Infrastructure as a Service |
| **PaaS** | Platform as a Service |
| **SaaS** | Software as a Service |
| **Public Cloud** | Public cloud for everyone |
| **Private Cloud** | Exclusive cloud for one organization |
| **Hybrid Cloud** | Combination of public and private |
| **Pay-per-Use** | Pay per usage |
| **Scalability** | Adjusting resources as needed |

---

## Exam Tips

### Common Exam Questions

- What is cloud computing?
- Explain IaaS, PaaS, SaaS
- What is the difference between public and private cloud?
- Name advantages and disadvantages of cloud computing

### Important to Remember

- **IaaS** = virtual hardware (server, storage)
- **PaaS** = development platform
- **SaaS** = ready-to-use software (Microsoft 365)
- **Hybrid Cloud** = combination for flexibility
- **GDPR:** Consider server location and DPA!

---

## Practice Exercises

### Exercise 1
Explain the difference between IaaS, PaaS, and SaaS with one example each.

**Solution:**
| Model | Description | Example |
|-------|-------------|---------|
| **IaaS** | Virtual infrastructure (servers, storage) | AWS EC2 - virtual servers |
| **PaaS** | Platform for development | Heroku - app hosting |
| **SaaS** | Ready-to-use application | Microsoft 365 - Office programs |

### Exercise 2
A company wants to store sensitive customer data in the cloud but also use public cloud services. Which deployment model do you recommend?

**Solution:** **Hybrid Cloud**

Justification:
- Sensitive data in the **Private Cloud** for control and compliance
- Non-sensitive services in the **Public Cloud** for cost efficiency
- Combination of both worlds for flexibility

### Exercise 3
Name three advantages and two disadvantages of cloud computing.

**Solution:**

**Advantages:**
1. Scalability - resources as needed
2. Cost efficiency - no investments, pay-per-use
3. Maintenance-free - provider manages hardware

**Disadvantages:**
1. Dependency - vendor lock-in, internet connection required
2. Data protection - data with third parties, GDPR compliance required

---

## Cross-References

- [05-04-01 Virtualization](./05-04-01-virtualization.md) - Foundation for cloud
- [05-04-03 Virtual Desktops](./05-04-03-virtual-desktops.md) - Desktop as a Service
- [03-01-01 GDPR Principles](../../03-data-protection/03-01-fundamentals/03-01-01-gdpr-principles.md) - Data protection in the cloud
