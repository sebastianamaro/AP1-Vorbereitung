# Exam Simulation 1: Travel Agency "SunTravel GmbH"

## Exam Instructions

- **Processing Time:** 90 minutes
- **Permitted Aids:** Calculator (non-programmable)
- **Points:** 100 points total
- **Passing Threshold:** 50 points

---

## Initial Situation

**SunTravel GmbH** is a medium-sized travel agency with 45 employees at 3 locations (headquarters in Munich, branches in Stuttgart and Nuremberg). The company offers package tours, individual travel, and business travel services.

You work as a trainee in the IT team of SunTravel GmbH at the Munich headquarters. The IT team consists of 4 people and is responsible for the entire IT infrastructure across all locations.

Current systems:
- Booking software "TravelStar" (web-based)
- Microsoft 365 for email and office applications
- VPN connections between locations
- 50 desktop PCs and 15 laptops
- Windows 11 as operating system

---

## Task 1: Project Management (18 Points)

The management has decided to migrate all workstations to a new cloud-based booking software "CloudTravel Pro". You are assigned to assist with the project planning.

### Task 1.1 (4 Points)

Name **four** typical characteristics that define this IT project.

### Task 1.2 (6 Points)

Formulate a project goal for the software migration using the **SMART method**. Identify all five criteria and explain how your goal fulfills each of them.

### Task 1.3 (8 Points)

The following work packages have been identified for the project:

| No. | Work Package | Duration (Days) | Predecessor |
|-----|--------------|-----------------|-------------|
| A | Requirements Analysis | 5 | - |
| B | Confirm System Selection | 3 | A |
| C | Set Up Test Environment | 4 | B |
| D | Plan Employee Training | 2 | B |
| E | Conduct Test Phase | 6 | C, D |
| F | Prepare Migration | 3 | E |
| G | Go-Live | 2 | F |

a) Create a **network diagram** using Activity-on-Node technique (3 points each).
b) Determine the **critical path** and the **total project duration** (2 points).

---

## Task 2: IT Security and Data Protection (22 Points)

### Task 2.1 (6 Points)

The new cloud software "CloudTravel Pro" will store customer data such as names, addresses, travel dates, and payment information.

a) Explain the three **IT security protection goals** (CIA triad) and provide a concrete example for each protection goal in the context of the travel agency. (6 Points)

### Task 2.2 (4 Points)

A travel agency employee asks you why they must now use **Two-Factor Authentication (2FA)** for the cloud software.

a) Explain the principle of 2FA. (2 Points)
b) Name **two** different factors that can be combined in 2FA. (2 Points)

### Task 2.3 (6 Points)

A customer calls and wants to know what data the travel agency has stored about them.

a) Which right under the **GDPR** is the customer invoking? (1 Point)
b) Name **three additional** rights that data subjects have under the GDPR. (3 Points)
c) Explain the difference between **anonymization** and **pseudonymization** of data. (2 Points)

### Task 2.4 (6 Points)

IT management wants to improve the security of the Windows 11 workstations.

Name **six** specific measures for **operating system hardening** that you would recommend.

---

## Task 3: IT Systems and Network (24 Points)

### Task 3.1 (6 Points)

For the new cloud software, a reliable internet connection is required. The provider offers a 500 Mbit/s line.

a) An employee wants to upload a 2 GB file. Calculate the theoretical **transmission time** in seconds. Show your work. (3 Points)

b) Explain why the actual transmission time in practice will be longer. Give **two** reasons. (3 Points)

### Task 3.2 (8 Points)

A new network is to be set up at the Munich location. The network range 192.168.10.0/24 is available.

a) How many **usable host addresses** are available in this network? Show your work. (2 Points)

b) IT management wants to divide the network into **4 subnets**. What subnet mask must you use? Provide it in CIDR notation. (2 Points)

c) Fill in the following values for the **first subnet**: (4 Points)
   - Network address: _______
   - First usable host address: _______
   - Last usable host address: _______
   - Broadcast address: _______

### Task 3.3 (6 Points)

A field service employee cannot connect to the company network via VPN.

a) Explain what a **VPN** is and what purpose it serves. (2 Points)

b) Describe **four** systematic troubleshooting steps that you would perform. (4 Points)

### Task 3.4 (4 Points)

SunTravel GmbH is considering whether to operate the new software as **SaaS** (Software as a Service) or **IaaS** (Infrastructure as a Service).

Explain both terms and name **one** advantage and **one** disadvantage of each for the travel agency.

---

## Task 4: Software and Programming (20 Points)

### Task 4.1 (6 Points)

The travel agency wants to implement a simple function for calculating travel discounts. The logic should be:
- Bookings over 2,000 EUR receive 5% discount
- Bookings over 5,000 EUR receive 10% discount
- Regular customers (more than 3 bookings) receive an additional 3% discount

Create a **UML Activity Diagram** that represents this discount calculation.

### Task 4.2 (8 Points)

Given is the following pseudocode for calculating a travel price:

```
FUNCTION calculateFinalPrice(basePrice, numberOfPersons, earlyBird)
    price = basePrice * numberOfPersons

    IF earlyBird = TRUE THEN
        discount = price * 0.15
        price = price - discount
    END IF

    IF numberOfPersons > 4 THEN
        groupDiscount = price * 0.1
        price = price - groupDiscount
    END IF

    RETURN price
END FUNCTION
```

a) Perform a **desk test** for the following call: (6 Points)
   `calculateFinalPrice(500, 5, TRUE)`

   Document each step with the current variable values.

b) What is the **result** of the function call? (2 Points)

### Task 4.3 (6 Points)

SunTravel GmbH uses a relational database for their customer data.

Given is the following simplified ER diagram:

```
[CUSTOMER] 1 ──────── n [BOOKING] n ──────── m [TRIP]
   │                     │                    │
   ├─ CustomerNo (PK)   ├─ BookingNo (PK)    ├─ TripNo (PK)
   ├─ Name              ├─ CustomerNo (FK)   ├─ Destination
   ├─ Email             ├─ Date              ├─ Price
   └─ Phone             └─ TotalPrice        └─ Duration
```

a) Explain the meaning of the cardinalities **1:n** and **n:m** in the context of this diagram. (4 Points)

b) Explain what **redundancy** means in a database and why it should be avoided. (2 Points)

---

## Task 5: Economics and Service (16 Points)

### Task 5.1 (8 Points)

For the new cloud software, two providers must be compared. You should perform a **utility analysis**.

| Criterion | Weight | Provider A (Points 1-5) | Provider B (Points 1-5) |
|-----------|--------|-------------------------|-------------------------|
| Functionality | 30% | 4 | 5 |
| User-Friendliness | 25% | 5 | 3 |
| Support Quality | 20% | 3 | 4 |
| Price | 15% | 4 | 3 |
| Data Protection (GDPR) | 10% | 5 | 5 |

a) Perform the utility analysis and determine the **total utility value** for both providers. (6 Points)

b) Which provider would you recommend and why? Name **one** additional aspect that should be considered in the decision. (2 Points)

### Task 5.2 (8 Points)

After the introduction of the new software, an employee reports: "The program is extremely slow and I can't work properly!"

a) Is this an **Incident** or a **Service Request**? Justify your answer. (2 Points)

b) Analyze the employee's statement using the **Four-Sides Model** by Schulz von Thun. What might they mean on the four levels? (4 Points)

c) Formulate a **de-escalating response** to the employee's complaint. (2 Points)

---

## End of Exam

**Check your answers!**

Note: The solutions to this simulation can be found at [10-03-01-solution-travel-agency.md](../10-03-solutions/10-03-01-solution-travel-agency.md)
