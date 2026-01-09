# Solution: Exam Simulation 3 - CNC Manufacturing "PrecisionTech GmbH"

---

## Task 1: Industry 4.0 and AI (20 Points)

### Task 1.1 (6 Points)

**a) Industry 4.0 and three characteristics (4 Points):**

**Definition:** Industry 4.0 refers to the fourth industrial revolution, in which production facilities, products, and people are connected via the Internet of Things (IoT) and data is exchanged in real time.

**Three characteristic features:**
1. **Networking** - Machines, systems, and people are interconnected
2. **Real-time data** - Sensors continuously capture data for analysis
3. **Automation** - Intelligent systems make decisions autonomously

**b) Two benefits for PrecisionTech (2 Points):**
1. **Increased productivity** through automated processes and fewer downtimes
2. **Better quality** through comprehensive monitoring and early error detection

### Task 1.2 (8 Points)

**a) AI in industrial application (2 Points):**
Artificial intelligence in an industrial context refers to systems that can learn from data and recognize patterns to make independent decisions or predictions without being explicitly programmed.

**b) Two additional AI application areas (2 Points):**
1. **Predictive Maintenance** - Prediction of machine failures based on sensor data
2. **Production planning** - Optimization of manufacturing processes and resource allocation

**c) Risk category under EU AI Act (4 Points):**
The quality control system would probably fall into the **"Limited Risk"** or **"Minimal Risk"** category.

**Justification:**
- It is an industrial assistance system
- No direct impact on people (only on workpieces)
- No automated decisions with legal consequences
- Not a high-risk area like critical infrastructure or safety systems

### Task 1.3 (6 Points)

**a) Two benefits of AI code assistants (2 Points):**
1. **Time savings** - Faster generation of boilerplate code and standard functions
2. **Error avoidance** - Support with syntax and best practices

**b) Two risks/disadvantages (2 Points):**
1. **Security risks** - Generated code may contain security vulnerabilities
2. **Copyright issues** - Unclear licensing of generated code

**c) Why human review is important (2 Points):**
- AI can generate incorrect or inefficient solutions
- AI assistant's contextual understanding is limited
- Security and quality checks must be performed by experts
- Responsibility for the code lies with the developer

---

## Task 2: Network and IT Security (26 Points)

### Task 2.1 (8 Points)

**a) Two reasons for IT/OT separation (4 Points):**
1. **Security** - An attack on the office network cannot directly spread to production systems
2. **Stability** - OT systems have different requirements (real-time capability, availability) that could be disrupted by IT traffic

**b) Two solution approaches for controlled data exchange (4 Points):**
1. **DMZ (Demilitarized Zone)** - Intermediate zone with servers for data exchange
2. **Industrial Firewall** - Special firewall that only allows defined protocols and connections

### Task 2.2 (10 Points)

**a) Host addresses in 10.10.0.0/16 (2 Points):**
```
/16 = 16 bits for network, 16 bits for host
Host bits: 16 -> 2^16 = 65,536 addresses
Usable: 65,536 - 2 (network + broadcast) = 65,534 host addresses
```

**b) Subnet mask for 15 CNC machines (3 Points):**
```
15 machines + 1 gateway + reserve = approx. 20-30 addresses needed
Next power of two: 32 (= 2^5)
-> 5 host bits -> /27 (32 - 5 = 27)

Answer: /27 (255.255.255.224)
```
With /27, 30 usable host addresses are available.

**c) Network values for 10.10.5.100/27 (5 Points):**

```
/27 = Subnet size 32 addresses
10.10.5.100 -> 100 / 32 = 3.125 -> Subnet starts at 3 x 32 = 96

Network address: 10.10.5.96
Broadcast: 10.10.5.96 + 31 = 10.10.5.127
Subnet mask: 255.255.255.224
```

| Value | Answer |
|-------|--------|
| Network address | **10.10.5.96** |
| Broadcast address | **10.10.5.127** |
| Subnet mask decimal | **255.255.255.224** |

### Task 2.3 (8 Points)

**a) Four threats to industrial facilities (4 Points):**
1. **Ransomware** - Encryption of production data
2. **Sabotage** - Manipulation of machine controls
3. **Espionage** - Extraction of manufacturing secrets
4. **DDoS attacks** - Overloading of network connections

**b) Four technical protective measures (4 Points):**
1. **Network segmentation** - Separation of IT and OT
2. **Industrial Firewall** - Control of data traffic
3. **Intrusion Detection System (IDS)** - Detection of attacks
4. **Patch management** - Regular system updates

---

## Task 3: Hardware and System Technology (18 Points)

### Task 3.1 (6 Points)

**a) Technical difference HDD/SSD (2 Points):**

| HDD | SSD |
|-----|-----|
| Mechanical storage on rotating platters | Electronic storage in flash memory cells |
| Read/write head moves physically | No moving parts |

**b) Two advantages each (4 Points):**

| HDD Advantages | SSD Advantages |
|----------------|----------------|
| Cheaper per GB of storage | Significantly faster read/write speed |
| High capacities available | Shorter access times (no seek operation) |

### Task 3.2 (6 Points)

**a) Purpose of a UPS (3 Points):**
A UPS bridges power outages and protects against voltage fluctuations.

**Two important situations:**
1. **Power outage** - Servers can shut down in a controlled manner or continue running
2. **Voltage spikes** - Protection of sensitive electronics from overvoltage

**b) Calculation of bridging time (3 Points):**
```
Battery capacity: 1000 Wh
Server consumption: 800 W

Time = Capacity / Consumption
Time = 1000 Wh / 800 W
Time = 1.25 hours = 75 minutes
```

**Answer: The server can theoretically be bridged for 75 minutes (1 hour 15 minutes).**

### Task 3.3 (6 Points)

**a) Two industrial communication protocols (2 Points):**
1. **PROFINET** - Industrial Ethernet protocol from Siemens
2. **Modbus TCP** - Simple, widely used industrial protocol

*Others: EtherNet/IP, EtherCAT, PROFIBUS*

**b) OPC UA Explanation and Benefits (4 Points):**

**OPC UA (Open Platform Communications Unified Architecture):**
A platform-independent communication standard for secure and reliable data exchange in industry.

**Benefits for Industry 4.0:**
1. **Platform independence** - Works between different manufacturers and systems
2. **Integrated security** - Encryption and authentication built-in
3. **Semantic description** - Data is provided with meaning (not just values)

---

## Task 4: Software and Programming (18 Points)

### Task 4.1 (6 Points)

**a) Difference JSON/XML with advantages (4 Points):**

| JSON | XML |
|------|-----|
| JavaScript Object Notation | Extensible Markup Language |
| More compact syntax | More verbose syntax |
| **Advantage:** Lightweight, less overhead | **Advantage:** Schema validation possible (XSD) |

**b) XML to JSON Conversion (2 Points):**

```json
{
  "machine": {
    "id": "CNC-001",
    "status": "active",
    "temperature": 45.2,
    "pieceCount": 1523
  }
}
```

### Task 4.2 (6 Points)

**a) Use Case Diagram Elements (3 Points):**
1. **Actor** - External person or system (stick figure)
2. **Use Case** - Application case (ellipse)
3. **System boundary** - Rectangle around the use cases

**b) Use Case Diagram Sketch (3 Points):**

```
        +----------------------------------------+
        |           ERP System                   |
        |                                        |
        |    +-------------------------+         |
        |    |   Display order         |         |
        |    +-----------+-------------+         |
        |                |                       |
  O     |    +-----------+-------------+         |
 /|\----+----|   Report piece count    |         |
 / \    |    +-----------+-------------+         |
        |                |                       |
Production   +-----------+--------------+        |
Employee     |  Document malfunction    |        |
        |    +--------------------------+        |
        |                                        |
        +----------------------------------------+
```

### Task 4.3 (6 Points)

**Desk Tests:**

**a) `checkWorkpiece(100.2, 25.0, 100, 25, 0.5)` (2 Points):**

```
length = 100.2, diameter = 25.0
targetLength = 100, targetDiameter = 25, tolerance = 0.5

lengthOK = (100.2 >= 99.5) AND (100.2 <= 100.5) = TRUE AND TRUE = TRUE
diameterOK = (25.0 >= 24.5) AND (25.0 <= 25.5) = TRUE AND TRUE = TRUE

IF TRUE AND TRUE -> Result: "OK"
```

**b) `checkWorkpiece(101.0, 25.3, 100, 25, 0.5)` (2 Points):**

```
length = 101.0, diameter = 25.3

lengthOK = (101.0 >= 99.5) AND (101.0 <= 100.5) = TRUE AND FALSE = FALSE
diameterOK = (25.3 >= 24.5) AND (25.3 <= 25.5) = TRUE AND TRUE = TRUE

IF FALSE AND TRUE -> FALSE
ELSE IF FALSE OR TRUE -> TRUE -> Result: "NOK-P"
```

**c) `checkWorkpiece(99.3, 24.2, 100, 25, 0.5)` (2 Points):**

```
length = 99.3, diameter = 24.2

lengthOK = (99.3 >= 99.5) AND (99.3 <= 100.5) = FALSE AND TRUE = FALSE
diameterOK = (24.2 >= 24.5) AND (24.2 <= 25.5) = FALSE AND TRUE = FALSE

IF FALSE AND FALSE -> FALSE
ELSE IF FALSE OR FALSE -> FALSE
ELSE -> Result: "NOK"
```

---

## Task 5: Economics and Project Management (18 Points)

### Task 5.1 (10 Points)

**a) Total costs over 5 years (2 Points):**
```
Acquisition:           120,000 EUR
License costs:  5 x 15,000 EUR =  75,000 EUR
Maintenance costs: 5 x  8,000 EUR =  40,000 EUR
-----------------------------------------
Total costs:                  235,000 EUR
```

**b) Total savings over 5 years (1 Point):**
```
Savings: 5 x 45,000 EUR = 225,000 EUR
```

**c) ROI Calculation (3 Points):**
```
Profit = Savings - Costs
Profit = 225,000 EUR - 235,000 EUR = -10,000 EUR

ROI = (Profit / Investment) x 100%
ROI = (-10,000 EUR / 235,000 EUR) x 100%
ROI = -4.26%
```

**Note:** The ROI is slightly negative. In practice, additional benefits would be considered (qualitative improvements, competitiveness).

**d) Amortization (4 Points):**
```
Annual net return = Savings - running costs
Annual net return = 45,000 EUR - 15,000 EUR - 8,000 EUR = 22,000 EUR

Amortization time = Acquisition / Annual net return
Amortization time = 120,000 EUR / 22,000 EUR = 5.45 years

Answer: Amortization is reached after approximately 5.5 years.
```

### Task 5.2 (8 Points)

**a) Incident or Problem (2 Points):**
This is an **Incident** (disruption), as an existing functionality (data transmission) is not working as expected. It is an unplanned interruption of the IT service.

**b) Priority with justification (3 Points):**
**P3 (Medium)**

- **Impact:** Low/Medium (production continues, only data transmission affected)
- **Urgency:** Low/Medium (not critical, as production is not impacted)

The disruption only affects monitoring/documentation, not the production process itself.

**c) Three systematic steps for error analysis (3 Points):**

1. **Check network connection:**
   - Is the CNC machine reachable on the network (ping)?
   - Check cable/switch port

2. **Check machine side:**
   - Is the data transmission service running on the machine?
   - Check CNC controller log files

3. **Check MES side:**
   - Is the MES receiving data from other machines?
   - Check firewall settings
   - Check MES logs for error messages

---

## Total Points

| Task | Points |
|------|--------|
| Task 1: Industry 4.0 and AI | 20 |
| Task 2: Network and IT Security | 26 |
| Task 3: Hardware and System Technology | 18 |
| Task 4: Software and Programming | 18 |
| Task 5: Economics and Project Management | 18 |
| **Total** | **100** |
