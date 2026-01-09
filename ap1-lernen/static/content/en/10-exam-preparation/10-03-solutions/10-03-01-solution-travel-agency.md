# Solution: Exam Simulation 1 - Travel Agency "SunTravel GmbH"

---

## Task 1: Project Management (18 Points)

### Task 1.1 (4 Points)

**Four typical project characteristics:**

1. **Uniqueness** - The migration to CloudTravel Pro is a one-time undertaking
2. **Time limitation** - Defined start and end date
3. **Defined goal** - Introduction of the new booking software
4. **Limited resources** - Budget, personnel, time are limited

*Additional possible answers: Complexity, novelty, risk, cross-team collaboration*

### Task 1.2 (6 Points)

**SMART Goal:**

"CloudTravel Pro software will be introduced at all 3 locations by June 30, 2025, with all 45 employees trained and booking processing 100% through the new system."

| Criterion | Explanation |
|-----------|-------------|
| **S**pecific | Introduction of CloudTravel Pro at all 3 locations |
| **M**easurable | 100% booking processing through new system, 45 employees trained |
| **A**chievable/Accepted | Improvement of work processes (modern cloud software) |
| **R**ealistic | 6 months project time, gradual introduction possible |
| **T**ime-bound | By June 30, 2025 |

### Task 1.3 (8 Points)

**a) Network Diagram:**

```
        +-----+      +-----+      +-----+
        |  A  |------|  B  |--+---|  C  |---+
        | 5D  |      | 3D  |  |   | 4D  |   |
        +-----+      +-----+  |   +-----+   |
        Day 0-5     Day 5-8   |  Day 8-12   |
                              |             |
                              |   +-----+   |    +-----+     +-----+    +-----+
                              +---|  D  |---+----|  E  |-----|  F  |----|  G  |
                                  | 2D  |   |    | 6D  |     | 3D  |    | 2D  |
                                  +-----+   |    +-----+     +-----+    +-----+
                                 Day 8-10   |   Day 12-18   Day 18-21  Day 21-23
                                            |
                                            +------------------------------------
```

**b) Critical Path and Total Duration:**

- **Critical Path:** A -> B -> C -> E -> F -> G
  - Alternative: A -> B -> D -> E -> F -> G (D is shorter than C, therefore C is critical)
- **Total Project Duration:** 5 + 3 + 4 + 6 + 3 + 2 = **23 days**

---

## Task 2: IT Security and Data Protection (22 Points)

### Task 2.1 (6 Points)

**CIA Triad with Examples:**

| Protection Goal | Explanation | Travel Agency Example |
|-----------------|-------------|----------------------|
| **Confidentiality** | Only authorized persons have access | Only authorized employees can view customer credit card data |
| **Integrity** | Data is complete and unchanged | Booking data may not be manipulated without authorization |
| **Availability** | Systems are usable when needed | The booking system is accessible during business hours |

### Task 2.2 (4 Points)

**a) Principle of 2FA:**
Two-Factor Authentication combines two different factors for identity verification. Only those who know/possess both factors gain access. This increases security because a stolen password alone is not sufficient.

**b) Two different factors:**
1. **Knowledge** - Password, PIN
2. **Possession** - Smartphone (Authenticator App), hardware token
3. *Alternatively: Biometrics* - Fingerprint, facial recognition

### Task 2.3 (6 Points)

**a) Right under GDPR:** Right of Access (Art. 15 GDPR)

**b) Three additional data subject rights:**
1. Right to Rectification (Art. 16)
2. Right to Erasure/"Right to be Forgotten" (Art. 17)
3. Right to Data Portability (Art. 20)
4. *Alternatively:* Right to Object, Right to Restriction of Processing

**c) Difference Anonymization/Pseudonymization:**

| Anonymization | Pseudonymization |
|---------------|------------------|
| Personal reference is permanently removed | Personal reference is replaced by pseudonym |
| Reference to person no longer possible | Assignment possible with additional information |
| Data no longer subject to GDPR | Data still subject to GDPR |

### Task 2.4 (6 Points)

**Six measures for operating system hardening:**

1. **Disable unnecessary services** - Only activate required services
2. **Regular updates** - Install Windows updates automatically
3. **Secure password policies** - Complexity, minimum length, expiration
4. **Enable personal firewall** - Turn on Windows Defender Firewall
5. **Install antivirus scanner** - Enable real-time protection
6. **Restrict user rights** - No admin rights for normal users
7. *Alternatively:* Disable USB ports, encryption (BitLocker), disable autorun

---

## Task 3: IT Systems and Network (24 Points)

### Task 3.1 (6 Points)

**a) Calculation of transmission time:**

```
File size: 2 GB = 2 x 1024 MB = 2048 MB = 2048 x 8 Mbit = 16,384 Mbit

Transmission rate: 500 Mbit/s

Time = Data amount / Speed
Time = 16,384 Mbit / 500 Mbit/s
Time = 32.77 seconds ~ 33 seconds
```

**b) Reasons for longer transmission time in practice:**
1. **Protocol overhead** - TCP/IP headers, packetization
2. **Shared medium** - Other users share the line
3. *Alternatively:* Latency, packet loss, server load

### Task 3.2 (8 Points)

**a) Usable host addresses:**
```
/24 = 256 total addresses (2^8)
- 1 network address (192.168.10.0)
- 1 broadcast address (192.168.10.255)
= 254 usable host addresses
```

**b) Subnet mask for 4 subnets:**
```
/24 divide into 4 subnets -> 2 additional bits
New subnet mask: /26 (or 255.255.255.192)
```

**c) First subnet:**
- Network address: **192.168.10.0**
- First usable host address: **192.168.10.1**
- Last usable host address: **192.168.10.62**
- Broadcast address: **192.168.10.63**

### Task 3.3 (6 Points)

**a) VPN Explanation:**
A VPN (Virtual Private Network) creates an encrypted tunnel over a public network (Internet). It enables secure access to the company network from outside, as if you were directly on-site.

**b) Four troubleshooting steps:**
1. **Check internet connection** - Is the laptop online?
2. **Check VPN client configuration** - Are server address and credentials correct?
3. **VPN server reachable?** - Ping/traceroute to VPN gateway
4. **Check firewall settings** - Is a local firewall blocking VPN traffic?

### Task 3.4 (4 Points)

| Model | Explanation | Advantage | Disadvantage |
|-------|-------------|-----------|--------------|
| **SaaS** | Software is provided as a service, runs at the provider | No own operation, immediately ready to use | Dependency on provider, data outside company |
| **IaaS** | Infrastructure (servers, storage) is rented | Flexible scaling, no hardware purchase | More own administration required |

---

## Task 4: Software and Programming (20 Points)

### Task 4.1 (6 Points)

**UML Activity Diagram:**

```
          *  [Start]
          |
          v
    +-------------------+
    | Determine         |
    | booking amount    |
    +---------+---------+
              |
              v
        <> Amount > 5000 EUR?
       /   \
     Yes    No
     |       |
     v       v
 +------+  <> Amount > 2000 EUR?
 | 10%  | /   \
 |Disc. |Yes   No
 +--+---+|      |
    |    v      |
    |+------+   |
    || 5%   |   |
    ||Disc. |   |
    |+--+---+   |
    |   |       |
    +---+-------+
          |
          v
     <> Regular customer?
    /   \
  Yes    No
   |       |
   v       |
+------+   |
| +3%  |   |
|Disc. |   |
+--+---+   |
   |       |
   +-------+
          |
          v
    +-------------------+
    | Calculate         |
    | final price       |
    +---------+---------+
              |
              v
              *  [End]
```

### Task 4.2 (8 Points)

**a) Desk test for `calculateFinalPrice(500, 5, TRUE)`:**

| Step | Variable | Value | Explanation |
|------|----------|-------|-------------|
| 1 | basePrice | 500 | Input parameter |
| 2 | numberOfPersons | 5 | Input parameter |
| 3 | earlyBird | TRUE | Input parameter |
| 4 | price | 2500 | 500 x 5 |
| 5 | earlyBird = TRUE | -> | Condition met |
| 6 | discount | 375 | 2500 x 0.15 |
| 7 | price | 2125 | 2500 - 375 |
| 8 | numberOfPersons > 4 | -> | Condition met (5 > 4) |
| 9 | groupDiscount | 212.5 | 2125 x 0.1 |
| 10 | price | 1912.5 | 2125 - 212.5 |

**b) Result:** **1,912.50 EUR**

### Task 4.3 (6 Points)

**a) Cardinalities:**
- **1:n (CUSTOMER to BOOKING):** One customer can have multiple bookings, but each booking belongs to exactly one customer
- **n:m (BOOKING to TRIP):** One booking can contain multiple trips (e.g., outbound and return flights), one trip can appear in multiple bookings

**b) Redundancy:**
Redundancy means that the same data is stored multiple times. This should be avoided because:
- Inconsistencies can arise (different versions)
- Storage space is wasted
- Changes must be made in multiple places

---

## Task 5: Economics and Service (16 Points)

### Task 5.1 (8 Points)

**a) Utility Analysis:**

| Criterion | Weight | A: Points | A: Utility | B: Points | B: Utility |
|-----------|--------|-----------|------------|-----------|------------|
| Functionality | 0.30 | 4 | 1.20 | 5 | 1.50 |
| User-Friendliness | 0.25 | 5 | 1.25 | 3 | 0.75 |
| Support Quality | 0.20 | 3 | 0.60 | 4 | 0.80 |
| Price | 0.15 | 4 | 0.60 | 3 | 0.45 |
| Data Protection | 0.10 | 5 | 0.50 | 5 | 0.50 |
| **Total** | 1.00 | | **4.15** | | **4.00** |

**b) Recommendation:**
**Provider A** with 4.15 points narrowly ahead of Provider B (4.00).

Additional aspect to consider: **References/Experience** of the provider in the travel industry, or: Contract duration, migration support, integration capabilities.

### Task 5.2 (8 Points)

**a) Incident or Service Request:**
This is an **Incident** (disruption), as an existing functionality is not working as expected. The employee cannot work normally.

**b) Four-Sides Model:**

| Level | Interpretation |
|-------|----------------|
| **Factual Information** | The software is running slowly |
| **Self-Revelation** | I am frustrated, I cannot work |
| **Relationship** | IT should solve the problem, perhaps "You didn't set it up correctly" |
| **Appeal** | Make it faster! Help me! |

**c) De-escalating Response:**
"I understand that the situation is frustrating when you can't work properly. I'll take care of it immediately. Can you briefly show me which functions specifically have delays? Then I can pinpoint the problem and resolve it as quickly as possible."

---

## Total Points

| Task | Points |
|------|--------|
| Task 1: Project Management | 18 |
| Task 2: IT Security and Data Protection | 22 |
| Task 3: IT Systems and Network | 24 |
| Task 4: Software and Programming | 20 |
| Task 5: Economics and Service | 16 |
| **Total** | **100** |
