# BSI Baseline Protection

## Learning Objectives

After this chapter, you should be able to:
- Know the BSI and its mission
- Explain the IT Baseline Protection concept
- Understand the methodology according to BSI Baseline Protection
- Know the connection to protection needs

---

## Core Content

### What is the BSI?

The **BSI (Federal Office for Information Security)** is Germany's central IT security authority.

| Aspect | Details |
|--------|---------|
| **Founded** | 1991 |
| **Location** | Bonn |
| **Tasks** | IT security for government, business, society |
| **Website** | www.bsi.bund.de |

---

### The IT Baseline Protection Concept

**IT Baseline Protection** is a BSI methodology for implementing information security.

```
+------------------------------------------------------------------+
|                    BSI IT BASELINE PROTECTION                     |
+------------------------------------------------------------------+
|                                                                   |
|  +--------------------------------------------------------------+ |
|  |                    BSI STANDARDS                              | |
|  |                                                               | |
|  |  * BSI Standard 200-1: Management Systems                     | |
|  |  * BSI Standard 200-2: IT Baseline Protection Methodology     | |
|  |  * BSI Standard 200-3: Risk Analysis                          | |
|  |  * BSI Standard 200-4: Business Continuity                    | |
|  +--------------------------------------------------------------+ |
|                                                                   |
|  +--------------------------------------------------------------+ |
|  |              IT BASELINE PROTECTION COMPENDIUM                | |
|  |                                                               | |
|  |  * Building blocks for various areas                          | |
|  |  * Concrete implementation guidance                           | |
|  |  * Threat catalogs                                            | |
|  |  * Measure catalogs                                           | |
|  +--------------------------------------------------------------+ |
|                                                                   |
+------------------------------------------------------------------+
```

---

### Basic Idea of IT Baseline Protection

> "For typical business processes and IT systems, there are typical threats and typical measures."

| Concept | Description |
|---------|-------------|
| **Standardization** | Standard measures for typical scenarios |
| **Efficiency** | No individual risk analysis for standard cases |
| **Catalogs** | Building blocks with ready-made measure recommendations |
| **Normal Protection** | Suitable for normal protection needs |

---

### Methodology According to IT Baseline Protection

```
+------------------------------------------------------------------+
|              IT BASELINE PROTECTION METHODOLOGY                   |
+------------------------------------------------------------------+
|                                                                   |
|  +------------------+                                             |
|  | 1. INITIATION    | Management commitment, responsibilities     |
|  +--------+---------+                                             |
|           |                                                       |
|           v                                                       |
|  +------------------+                                             |
|  | 2. STRUCTURE     | Capture IT systems, applications, rooms     |
|  |    ANALYSIS      |                                             |
|  +--------+---------+                                             |
|           |                                                       |
|           v                                                       |
|  +------------------+                                             |
|  | 3. PROTECTION    | Normal / High / Very High for each object   |
|  |    NEEDS ANALYSIS|                                             |
|  +--------+---------+                                             |
|           |                                                       |
|           v                                                       |
|  +------------------+                                             |
|  | 4. MODELING      | Select appropriate building blocks          |
|  +--------+---------+                                             |
|           |                                                       |
|           v                                                       |
|  +------------------+                                             |
|  | 5. IT BASELINE   | Target-actual comparison                    |
|  |    PROTECTION    |                                             |
|  |    CHECK         |                                             |
|  +--------+---------+                                             |
|           |                                                       |
|           v                                                       |
|  +------------------+                                             |
|  | 6. IMPLEMENTATION| Implement measures                          |
|  +------------------+                                             |
|                                                                   |
+------------------------------------------------------------------+
```

---

### Steps in Detail

#### 1. Initiation

- Management decision for IT Baseline Protection
- Establish responsibilities
- Provide resources

#### 2. Structure Analysis

| To Capture | Examples |
|------------|----------|
| **IT Systems** | Servers, clients, network components |
| **Applications** | ERP, email, databases |
| **Rooms** | Server room, offices |
| **Business Processes** | Procurement, sales |
| **Responsible Parties** | IT manager, departments |

#### 3. Protection Needs Analysis

For each captured object, the protection need is determined:

| Category | Description |
|----------|-------------|
| **Normal** | Standard measures sufficient |
| **High** | Extended measures required |
| **Very High** | Individual risk analysis needed |

#### 4. Modeling

Selection of appropriate **building blocks** from the IT Baseline Protection Compendium:

| Layer | Building Blocks (Examples) |
|-------|---------------------------|
| **ISMS** | Security Management |
| **ORP** | Organization and Personnel |
| **CON** | Concepts (Backup, Cryptography) |
| **OPS** | Operations (Patch Management) |
| **DER** | Detection and Response |
| **APP** | Applications (Email, Databases) |
| **SYS** | IT Systems (Servers, Clients) |
| **IND** | Industrial IT |
| **NET** | Networks and Communication |
| **INF** | Infrastructure (Buildings, Rooms) |

#### 5. IT Baseline Protection Check

- Target-actual comparison
- Which measures are implemented?
- Where is action needed?

#### 6. Implementation

- Prioritize measures
- Create implementation plan
- Implement measures
- Document

---

### Protection Need and Approach

```
+----------------------------------------------------------------+
|              APPROACH ACCORDING TO PROTECTION NEED              |
+----------------------------------------------------------------+
|                                                                 |
|  Protection Need: NORMAL                                        |
|  -----------------------                                        |
|  -> Apply standard building blocks                              |
|  -> No individual risk analysis needed                          |
|                                                                 |
|  Protection Need: HIGH                                          |
|  ---------------------                                          |
|  -> Standard building blocks + supplementary measures           |
|  -> Extended threat analysis                                    |
|                                                                 |
|  Protection Need: VERY HIGH                                     |
|  --------------------------                                     |
|  -> Individual risk analysis (BSI Standard 200-3)               |
|  -> Tailored measures                                           |
|                                                                 |
+----------------------------------------------------------------+
```

---

### Certification According to IT Baseline Protection

| Certificate | Description |
|-------------|-------------|
| **ISO 27001 based on IT Baseline Protection** | Official certification by BSI |
| **Certificate** | Confirmation of implementation |
| **Auditor** | BSI-licensed examiners |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **BSI** | Federal Office for Information Security |
| **IT Baseline Protection** | BSI methodology for IT security |
| **Building Block** | Catalog with requirements and measures for an area |
| **Structure Analysis** | Capture of all IT components |
| **IT Baseline Protection Check** | Target-actual comparison |
| **IT Baseline Protection Compendium** | Collection of all building blocks |

---

## Exam Tips

### Frequent Exam Questions

- What is the BSI?
- What is IT Baseline Protection?
- Name steps of the IT Baseline Protection methodology
- What is an IT Baseline Protection building block?

### Important to Remember

- **BSI** = Federal Office for Information Security
- **IT Baseline Protection** = Methodology for normal protection needs
- **Building Blocks** = Ready-made measure catalogs
- **6 Steps:** Initiation -> Structure Analysis -> Protection Needs Analysis -> Modeling -> Check -> Implementation

**Note:** ISO 2700x is NO LONGER in the 2025 exam catalog!

---

## Practice Exercises

### Exercise 1
What is the BSI and what is its task?

**Solution:** The **BSI (Federal Office for Information Security)** is the central IT security authority in Germany. It is responsible for:
- IT security for federal, state, and critical infrastructures
- Development of security standards (IT Baseline Protection)
- Warning about current threats
- Certification of IT security products

### Exercise 2
What is the basic idea of IT Baseline Protection?

**Solution:** The basic idea is that typical threats and typical measures exist for typical IT systems and business processes. Instead of conducting an individual risk analysis for each case, IT Baseline Protection offers ready-made **building blocks** with measure recommendations. This is efficient for systems with **normal protection needs**.

### Exercise 3
Name four steps of the IT Baseline Protection methodology.

**Solution:**
1. **Structure Analysis** - Capture IT systems and applications
2. **Protection Needs Analysis** - Determine protection need for each object
3. **Modeling** - Select appropriate building blocks
4. **IT Baseline Protection Check** - Conduct target-actual comparison

(or: Initiation, Implementation)

### Exercise 4
When is an individual risk analysis required according to BSI Baseline Protection?

**Solution:** An individual risk analysis is required when the protection need is **"very high"**. In this case, standard building blocks are not sufficient, and tailored measures must be developed. The procedure for this is described in BSI Standard 200-3.

---

## Cross-References

- [04-02-02 Protection Needs Analysis](../04-02-threats-risks/04-02-02-protection-needs-analysis.md) - Determining protection needs
- [04-04-02 ISMS](./04-04-02-isms.md) - Information Security Management System
- [04-01-01 CIA Triad](../04-01-protection-goals/04-01-01-cia-triad.md) - Protection goals
- [03-02-01 TOM](../../03-data-protection/03-02-technical-measures/03-02-01-tom.md) - Technical-organizational measures
