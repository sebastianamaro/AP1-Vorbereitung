# Solution: Exam Simulation 2 - Insurance "SecureLife AG"

---

## Task 1: IT Security (26 Points)

### Task 1.1 (8 Points)

**a) Phishing Explanation (2 Points):**
Phishing is a scam in which attackers attempt to obtain confidential data (passwords, account details) through fake emails, websites, or messages. They impersonate trustworthy senders (bank, company).

**b) Four technical measures (4 Points):**
1. **Email filter/spam filter** - Automatically filter out suspicious emails
2. **Link verification** - Check URLs for authenticity before opening
3. **Multi-Factor Authentication** - No access even with stolen credentials
4. **Email authentication (SPF, DKIM, DMARC)** - Verification of sender legitimacy

**c) Two organizational measures (2 Points):**
1. **Security Awareness Training** - Sensitize employees to phishing
2. **Clear reporting processes** - Report suspicious emails to IT security

### Task 1.2 (6 Points)

**a) Four requirements for secure password policy (4 Points):**
1. **Minimum length** - At least 12 characters
2. **Complexity** - Upper/lowercase letters, numbers, special characters
3. **No reuse** - Check password history
4. **Regular change** - e.g., every 90 days (or upon compromise)

**b) Significance of hash values (2 Points):**
Hash values are one-way functions that convert passwords into an irreversible string. In the event of a data leak, attackers cannot directly read the passwords because only the hash values are stored, not the plaintext passwords.

### Task 1.3 (6 Points)

**a) Symmetric vs. asymmetric encryption (4 Points):**

| Symmetric | Asymmetric |
|-----------|------------|
| One shared key | Key pair (public + private) |
| Faster | Slower |
| Problem: Key exchange | Public key can be shared |
| Example: AES | Example: RSA |

**b) Hybrid encryption (2 Points):**
Hybrid encryption combines both methods: The actual data is encrypted with a random symmetric key (fast). This symmetric key is then encrypted asymmetrically and sent along. This takes advantage of the speed of symmetric encryption and the secure key distribution of asymmetric encryption.

### Task 1.4 (6 Points)

**a) RTO and RPO (4 Points):**

| Term | Explanation |
|------|-------------|
| **RTO (Recovery Time Objective)** | Maximum time that a system may be down after a failure before it must be restored. Example: Server must be running again within 4 hours. |
| **RPO (Recovery Point Objective)** | Maximum data loss that is acceptable. Point in time to which data can be restored. Example: Maximum 4 hours of data may be lost. |

**b) Significance for backup strategy (2 Points):**
With an RPO of 4 hours, backups must be created at least every 4 hours. In the event of a failure, a maximum of the last 4 hours of data can be lost.

---

## Task 2: Data Protection (16 Points)

### Task 2.1 (8 Points)

**a) Four special data categories under Art. 9 GDPR (4 Points):**
1. **Health data** - Illnesses, treatments
2. **Genetic data**
3. **Biometric data** - for identification
4. **Data on political opinions**

*Others: Religious beliefs, ethnic origin, trade union membership, sex life*

**b) Two legal bases (2 Points):**
1. **Explicit consent** of the data subject
2. **Necessary for contract fulfillment** (e.g., health insurance contract)

**c) Two TOM examples (2 Points):**
1. **Encryption** of stored health data
2. **Access control** - Only authorized claims handlers have access

### Task 2.2 (8 Points)

**a) Difference Anonymization/Pseudonymization (4 Points):**

| Anonymization | Pseudonymization |
|---------------|------------------|
| Personal reference is permanently and irrevocably removed | Personal reference is replaced by pseudonym (e.g., ID number) |
| Data can no longer be assigned to a person | Personal reference can be restored with mapping table |
| GDPR no longer applies | GDPR still applies |

**b) Recommendation for later assignment (2 Points):**
**Pseudonymization**, as the data can be reassigned to a customer if needed. The mapping table must be kept secure and separate.

**c) Two tasks of the Data Protection Officer (2 Points):**
1. **Advising** the company and employees on data protection matters
2. **Monitoring** compliance with GDPR in the company

*Others: Contact person for supervisory authority, conduct training, documentation*

---

## Task 3: IT Systems (22 Points)

### Task 3.1 (6 Points)

**a) Three advantages of virtualization (3 Points):**
1. **Better resource utilization** - Multiple VMs on one physical server
2. **Flexibility/Scalability** - VMs can be quickly created/adjusted
3. **Isolation** - Problems in one VM do not affect others

**b) Three data protection aspects for cloud migration (3 Points):**
1. **Server location** - Data should remain in the EU (GDPR compliance)
2. **Data Processing Agreement (DPA)** - Contract with cloud provider required
3. **Encryption** - Encrypt data during transmission and storage

### Task 3.2 (8 Points)

**a) NAS Explanation (3 Points):**
A NAS (Network Attached Storage) is a dedicated storage device with its own operating system that provides storage over the network. Unlike a file server, it is specifically optimized for file storage, easier to administer, and more energy-efficient.

**b) Three measures for NAS availability (3 Points):**
1. **Redundant hard drives** - Mirroring data across multiple drives
2. **Redundant power supplies** - Two power supplies for failover protection
3. **Location redundancy** - Replication to a second NAS at another location

**c) 3-2-1 Backup Rule (2 Points):**
- **3** copies of the data
- **2** different storage media
- **1** copy off-site

This protects against various failure scenarios (hardware defect, fire, ransomware).

### Task 3.3 (8 Points)

**a) Windows Domain and Benefits (3 Points):**
A Windows domain is a central management structure in which users, computers, and resources are managed via a Domain Controller (Active Directory).

Benefits:
1. **Central user management** - One account for all systems
2. **Central policy management** - GPOs apply to all PCs

**b) Three steps for domain join (3 Points):**
1. Open System Properties -> Change computer name -> Select Domain
2. Enter domain name (e.g., "securelife.local")
3. Authenticate with domain admin credentials and restart PC

**c) GPO Explanation (2 Points):**
A Group Policy Object (GPO) is a collection of settings that are centrally applied to all computers and/or users in the domain. Examples: Password policies, software installation, desktop settings.

---

## Task 4: Software and Databases (18 Points)

### Task 4.1 (6 Points)

**Three Scrum Roles (6 Points):**

| Role | Tasks |
|------|-------|
| **Product Owner** | Defines requirements, prioritizes Product Backlog, represents customer perspective |
| **Scrum Master** | Ensures process adherence, removes obstacles, moderates meetings |
| **Development Team** | Technically implements the requirements, self-organized, cross-functional |

### Task 4.2 (6 Points)

**a) Desk Tests (4 Points):**

**Call 1: `calculateContribution(55, TRUE, 100)`**

| Step | Variable | Value |
|------|----------|-------|
| 1 | age | 55 |
| 2 | smoker | TRUE |
| 3 | baseContribution | 100 |
| 4 | contribution | 100 |
| 5 | age > 50 -> TRUE | -> |
| 6 | contribution | 130 (100 x 1.3) |
| 7 | smoker = TRUE -> | -> |
| 8 | contribution | 180 (130 + 50) |

**Result: 180**

**Call 2: `calculateContribution(25, FALSE, 100)`**

| Step | Variable | Value |
|------|----------|-------|
| 1-3 | age=25, smoker=FALSE, baseContribution=100 | |
| 4 | contribution | 100 |
| 5 | age > 50 -> FALSE | -> |
| 6 | age > 30 -> FALSE | -> |
| 7 | smoker = FALSE -> | no change |

**Result: 100**

**b) Bug Fix (2 Points):**

The first condition should read `age >= 50` instead of `age > 50`:
```
IF age >= 50 THEN
```

### Task 4.3 (6 Points)

**a) Normal Form (3 Points):**
The tables are in **Third Normal Form (3NF)**:
- 1NF: Atomic values, no repeating groups ✓
- 2NF: All non-key attributes fully functionally dependent on primary key ✓
- 3NF: No transitive dependencies ✓

**b) Foreign Key (3 Points):**
A foreign key is an attribute in a table that references the primary key of another table. It ensures referential integrity.

In the tables: **CustomerNo** in the CONTRACT table is a foreign key that references CustomerNo (primary key) in the CUSTOMER table.

---

## Task 5: Workstation Setup and Support (18 Points)

### Task 5.1 (10 Points)

**a) Checklist for Workstation Setup (8 Points):**

| No. | Task | Completed |
|-----|------|-----------|
| 1 | Set up and cable PC/Laptop | ☐ |
| 2 | Connect monitor, keyboard, mouse | ☐ |
| 3 | Check network connection (LAN/WLAN) | ☐ |
| 4 | Join PC to domain | ☐ |
| 5 | Create user account in AD | ☐ |
| 6 | Apply Group Policies | ☐ |
| 7 | Install standard software (Office, insurance software) | ☐ |
| 8 | Set up email account | ☐ |
| 9 | Set up printer | ☐ |
| 10 | Set permissions for network drives | ☐ |

**b) Significance for IT Security (2 Points):**
A standardized setup ensures that:
- All security policies are applied uniformly
- No security gaps arise through individual configurations
- All systems have the same patch level

### Task 5.2 (8 Points)

**a) Priority (3 Points):**
**P2 (High)**

- **Impact:** Medium (one employee affected)
- **Urgency:** High (important meeting in 10 minutes, employee cannot work)

The high urgency raises the priority from P3 to P2.

**b) Three targeted questions (3 Points):**
1. "What error message appears when you try to log in?"
2. "Have you recently changed your password or has it possibly expired?"
3. "Does login work on a different PC?"

**c) Two causes with solutions (2 Points):**

| Cause | Solution |
|-------|----------|
| **Password expired** | Reset password in AD |
| **Account locked** | Unlock account in AD |

*Others: Caps Lock active, wrong username, domain controller not reachable*

---

## Total Points

| Task | Points |
|------|--------|
| Task 1: IT Security | 26 |
| Task 2: Data Protection | 16 |
| Task 3: IT Systems | 22 |
| Task 4: Software and Databases | 18 |
| Task 5: Workstation Setup and Support | 18 |
| **Total** | **100** |
