# Exam Simulation 2: Insurance "SecureLife AG"

## Exam Instructions

- **Processing Time:** 90 minutes
- **Permitted Aids:** Calculator (non-programmable)
- **Points:** 100 points total
- **Passing Threshold:** 50 points

---

## Initial Situation

**SecureLife AG** is a medium-sized insurance company headquartered in Frankfurt am Main. The company employs 180 staff and offers life, health, and property insurance.

You are a trainee IT specialist for system integration in the IT department of SecureLife AG. The IT department consists of 12 employees and is responsible for the entire IT infrastructure.

The insurance company processes sensitive customer data daily, including health information, financial data, and contract information. IT security therefore has the highest priority.

Current IT Environment:
- Two physical servers in own data center
- Virtualization with VMware
- Active Directory for user management
- 200 workstation computers (Windows 11)
- Email via Microsoft Exchange Online
- In-house developed insurance software "SecureApp"

---

## Task 1: IT Security (26 Points)

### Task 1.1 (8 Points)

SecureLife AG has discovered that several phishing emails were sent to employees in the past. One employee accidentally clicked on a link.

a) Explain what **phishing** is. (2 Points)

b) Name **four** technical measures that the IT department can take to make phishing attacks more difficult. (4 Points)

c) Name **two** organizational measures that the company should additionally implement. (2 Points)

### Task 1.2 (6 Points)

IT management wants to introduce a **password policy** for all employees.

a) Formulate **four** specific requirements that a secure password policy should contain. (4 Points)

b) Explain why the use of **hash values** is important when storing passwords. (2 Points)

### Task 1.3 (6 Points)

SecureLife AG wants to send confidential contract documents to customers via email.

a) Explain the difference between **symmetric** and **asymmetric** encryption. (4 Points)

b) Explain what **hybrid encryption** is and why it is often used in practice. (2 Points)

### Task 1.4 (6 Points)

As part of emergency management, the IT infrastructure should be able to be restored quickly after a server failure.

a) Explain the terms **RTO** (Recovery Time Objective) and **RPO** (Recovery Point Objective). (4 Points)

b) SecureLife AG has set an RPO of 4 hours. What does this mean for the backup strategy? (2 Points)

---

## Task 2: Data Protection (16 Points)

### Task 2.1 (8 Points)

The insurance company processes particularly sensitive data such as health information.

a) Name **four** categories of data that are classified as **"special categories of personal data"** under Art. 9 GDPR. (4 Points)

b) Under what conditions may SecureLife AG process this special data? Name **two** legal bases. (2 Points)

c) What **technical and organizational measures (TOMs)** should the insurance company implement to protect this data? Name **two** specific examples. (2 Points)

### Task 2.2 (8 Points)

SecureLife AG wants to use customer data for statistical analysis without being able to identify individual customers.

a) Explain the difference between **anonymization** and **pseudonymization**. (4 Points)

b) Which method would you choose if the data needs to be assigned to a customer later? Justify your decision. (2 Points)

c) What role does the **Data Protection Officer** play in the company? Name **two** of their tasks. (2 Points)

---

## Task 3: IT Systems (22 Points)

### Task 3.1 (6 Points)

The IT department plans to replace the two physical servers with a more modern solution. The options are:
- Option A: New physical servers with virtualization
- Option B: Migration to the cloud (IaaS)

a) Explain **three** advantages of virtualization compared to purely physical servers. (3 Points)

b) Name **three** aspects that must be considered regarding **data protection** when migrating to the cloud. (3 Points)

### Task 3.2 (8 Points)

SecureLife AG uses NAS systems (Network Attached Storage) for data storage.

a) Explain what a **NAS** is and how it differs from a classic file server. (3 Points)

b) The NAS should ensure high availability. Explain **three** measures that can increase the availability of a NAS. (3 Points)

c) Explain the **3-2-1 backup rule** and why it is important for data backup. (2 Points)

### Task 3.3 (8 Points)

A new workstation PC is to be joined to the Windows domain of SecureLife AG.

a) Explain what a **Windows domain** is and what benefits it offers. Name **two** benefits. (3 Points)

b) Describe the essential steps to join a Windows 11 PC to an existing domain. Name **three** steps. (3 Points)

c) What is a **Group Policy Object (GPO)** and what is it used for? (2 Points)

---

## Task 4: Software and Databases (18 Points)

### Task 4.1 (6 Points)

The development department works with a **Scrum** process model for the further development of the insurance software "SecureApp".

a) Name the **three** main roles in Scrum and briefly describe their tasks. (6 Points)

### Task 4.2 (6 Points)

A function for calculating contributions is to be reviewed in the insurance software. Given is the following pseudocode:

```
FUNCTION calculateContribution(age, smoker, baseContribution)
    contribution = baseContribution

    IF age > 50 THEN
        contribution = contribution * 1.3
    ELSE IF age > 30 THEN
        contribution = contribution * 1.1
    END IF

    IF smoker = TRUE THEN
        contribution = contribution + 50
    END IF

    RETURN contribution
END FUNCTION
```

a) Perform a **desk test** for the following calls: (4 Points)
   - `calculateContribution(55, TRUE, 100)`
   - `calculateContribution(25, FALSE, 100)`

b) A colleague has found a **bug** in the code. At exactly 50 years of age, no surcharge is calculated. How should the first condition be corrected? (2 Points)

### Task 4.3 (6 Points)

The insurance software uses a relational database. The following tables exist:

```
Table CUSTOMER:
CustomerNo | Name      | DateOfBirth  | PostalCode
-----------|-----------|--------------|------------
1001       | Mueller   | 1985-03-15   | 60311
1002       | Schmidt   | 1972-08-22   | 60312
1003       | Weber     | 1990-01-10   | 60313

Table CONTRACT:
ContractNo | CustomerNo | Type          | AnnualContribution
-----------|------------|---------------|-------------------
V001       | 1001       | Life          | 1200.00
V002       | 1001       | Health        | 2400.00
V003       | 1002       | Property      | 350.00
V004       | 1003       | Life          | 800.00
```

a) In which **normal form** are the tables? Justify your answer. (3 Points)

b) Explain what a **foreign key** is and identify it in the tables. (3 Points)

---

## Task 5: Workstation Setup and Support (18 Points)

### Task 5.1 (10 Points)

A new employee in the claims department needs a fully set up workstation.

a) Create a **checklist** with **at least 8 points** for setting up a new workstation (hardware, software, network, permissions). (8 Points)

b) Explain why a standardized workstation setup is important from an **IT security** perspective. (2 Points)

### Task 5.2 (8 Points)

An employee contacts IT support with the following message:

"I've been trying to log in for 20 minutes, but it's not working! I have an important meeting in 10 minutes and I absolutely need access to my documents!"

a) Assign a **priority** (P1-P4) to the incident and justify your decision. Use the criteria **Impact** and **Urgency**. (3 Points)

b) Formulate **three** targeted questions that you would ask the employee to narrow down the problem. (3 Points)

c) Name **two** possible causes for the login problem and one solution for each. (2 Points)

---

## End of Exam

**Check your answers!**

Note: The solutions to this simulation can be found at [10-03-02-solution-insurance.md](../10-03-solutions/10-03-02-solution-insurance.md)
