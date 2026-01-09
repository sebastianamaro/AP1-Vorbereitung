# Exam Simulation 3: CNC Manufacturing "PrecisionTech GmbH"

## Exam Instructions

- **Processing Time:** 90 minutes
- **Permitted Aids:** Calculator (non-programmable)
- **Points:** 100 points total
- **Passing Threshold:** 50 points

---

## Initial Situation

**PrecisionTech GmbH** is a medium-sized CNC manufacturing company with 75 employees at the Stuttgart location. The company produces precision components for the automotive and aerospace industries.

You are a trainee IT specialist for system integration in the IT department of PrecisionTech GmbH. The IT department consists of 5 employees and is responsible for both office IT and the networking of production facilities.

As part of an **Industry 4.0** initiative, production is to be further digitized. Planned are:
- Networking of all CNC machines
- Introduction of a Manufacturing Execution System (MES)
- Use of AI for quality control
- Predictive maintenance for the machines

Current IT Environment:
- 15 CNC machines (partially networked)
- ERP system "ProAlpha"
- 40 office workstations
- Own data center with 3 servers
- Separate production network (OT) and office network (IT)

---

## Task 1: Industry 4.0 and AI (20 Points)

### Task 1.1 (6 Points)

The management wants to understand what **Industry 4.0** means for the company.

a) Explain the term **Industry 4.0** and name **three** characteristic features. (4 Points)

b) Name **two** concrete benefits that PrecisionTech GmbH can expect from the digitization of production. (2 Points)

### Task 1.2 (8 Points)

For quality control, an **AI system** is to be used that automatically detects defects in the manufactured parts.

a) Explain what is meant by **artificial intelligence (AI)** in the context of industrial application. (2 Points)

b) Name **two** application areas of AI in manufacturing besides quality control. (2 Points)

c) The **EU AI Act** classifies AI systems by risk categories. In which risk category would the planned quality control system probably fall? Justify your answer. (4 Points)

### Task 1.3 (6 Points)

PrecisionTech GmbH plans to introduce an **AI-powered code assistant** for their development department.

a) Name **two** benefits that an AI code assistant can offer. (2 Points)

b) Name **two** risks or disadvantages that must be considered when using AI code assistants. (2 Points)

c) Why should generated code always be reviewed by a human? (2 Points)

---

## Task 2: Network and IT Security (26 Points)

### Task 2.1 (8 Points)

The CNC machines are to be operated via a separate network segment (OT network) that is separated from the office network (IT network).

a) Explain why **separation of IT and OT networks** is sensible. Name **two** reasons. (4 Points)

b) How can controlled data exchange between the networks be enabled despite the separation? Name **two** technical approaches. (4 Points)

### Task 2.2 (10 Points)

For the new production network, the range **10.10.0.0/16** is assigned. The CNC machines are to be placed in their own subnet.

a) How many host addresses are available in the range 10.10.0.0/16 in total? Show your work. (2 Points)

b) You want to create a subnet for the 15 CNC machines that wastes as few IP addresses as possible. Which subnet mask (CIDR notation) would you use? Justify your choice. (3 Points)

c) A CNC machine is assigned the IP address 10.10.5.100/27. Determine: (5 Points)
   - Network address: _______
   - Broadcast address: _______
   - Subnet mask in decimal notation: _______

### Task 2.3 (8 Points)

An attacker could try to penetrate the production network via the office network.

a) Name **four** potential **threats** to networked industrial facilities. (4 Points)

b) Describe **four** technical protective measures that you would recommend to secure the production network. (4 Points)

---

## Task 3: Hardware and System Technology (18 Points)

### Task 3.1 (6 Points)

A new server is required for the new MES system. IT management wants to decide between HDD and SSD for storage.

a) Explain the technical difference between **HDD** and **SSD**. (2 Points)

b) Name **two** advantages each of HDD and SSD in the context of a server for an MES system. (4 Points)

### Task 3.2 (6 Points)

The server is to be protected with a **UPS** (Uninterruptible Power Supply).

a) Explain the purpose of a UPS and name **two** situations in which it is important. (3 Points)

b) The UPS has a capacity of 1500 VA. The server requires 800 W. How long can the server theoretically be bridged if the battery capacity is 1000 Wh? Show your work. (3 Points)

### Task 3.3 (6 Points)

The CNC machines communicate via various industrial protocols.

a) Name **two** common industrial communication protocols used in production. (2 Points)

b) Explain what **OPC UA** is and what benefits it offers for Industry 4.0 applications. (4 Points)

---

## Task 4: Software and Programming (18 Points)

### Task 4.1 (6 Points)

The MES system is to visualize production data. An interface is required that delivers data in **JSON format** or **XML format**.

a) Explain the difference between **JSON** and **XML**. Name **one** advantage of each. (4 Points)

b) Given is the following XML excerpt:

```xml
<machine id="CNC-001">
    <status>active</status>
    <temperature>45.2</temperature>
    <pieceCount>1523</pieceCount>
</machine>
```

Convert this excerpt to **JSON format**. (2 Points)

### Task 4.2 (6 Points)

A **UML Use Case Diagram** is being created for the ERP system. It shows the interaction of an employee with the system.

a) Explain what a **Use Case Diagram** represents and what elements it typically contains. Name **three** elements. (3 Points)

b) Sketch a simple Use Case Diagram with the actor "Production Employee" and the use cases:
   - Display order
   - Report piece count
   - Document malfunction

   (3 Points)

### Task 4.3 (6 Points)

Quality assurance uses the following logic to evaluate a workpiece:

```
FUNCTION checkWorkpiece(length, diameter, targetLength, targetDiameter, tolerance)
    lengthOK = (length >= targetLength - tolerance) AND (length <= targetLength + tolerance)
    diameterOK = (diameter >= targetDiameter - tolerance) AND (diameter <= targetDiameter + tolerance)

    IF lengthOK AND diameterOK THEN
        RETURN "OK"     // In Order
    ELSE IF lengthOK OR diameterOK THEN
        RETURN "NOK-P"  // Not OK, partial
    ELSE
        RETURN "NOK"    // Not OK
    END IF
END FUNCTION
```

Perform a **desk test** for the following calls and provide the result:

a) `checkWorkpiece(100.2, 25.0, 100, 25, 0.5)` (2 Points)
b) `checkWorkpiece(101.0, 25.3, 100, 25, 0.5)` (2 Points)
c) `checkWorkpiece(99.3, 24.2, 100, 25, 0.5)` (2 Points)

---

## Task 5: Economics and Project Management (18 Points)

### Task 5.1 (10 Points)

The management wants to know whether the investment in the new MES system is economically worthwhile.

Investment data:
- Acquisition cost MES system: 120,000 EUR
- Annual license costs: 15,000 EUR
- Annual maintenance costs: 8,000 EUR
- Expected annual savings: 45,000 EUR
- Observation period: 5 years

a) Calculate the **total costs** over the observation period. (2 Points)

b) Calculate the **total savings** over the observation period. (1 Point)

c) Calculate the **ROI (Return on Investment)** for the investment. Use the formula:
   ROI = (Profit / Investment) x 100%
   (3 Points)

d) After how many years is **amortization** (break-even) reached? Show your work. (4 Points)

### Task 5.2 (8 Points)

The IT team receives a fault report:

"CNC machine No. 3 is no longer sending data to the MES system. However, production is continuing normally."

a) Is this an **Incident** or a **Problem**? Justify briefly. (2 Points)

b) What **priority** (P1-P4) would you assign to this incident? Justify based on Impact and Urgency. (3 Points)

c) Describe **three** systematic steps for error analysis that you would perform. (3 Points)

---

## End of Exam

**Check your answers!**

Note: The solutions to this simulation can be found at [10-03-03-solution-cnc-industry40.md](../10-03-solutions/10-03-03-solution-cnc-industry40.md)
