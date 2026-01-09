# Domain Integration [NEW 2025]

## Learning Objectives

After this chapter you should be able to:
- Understand the concept of a Windows domain
- Know the process of domain integration
- Name prerequisites and advantages
- Perform the most important steps

---

## Core Content

### What is a Domain?

```
+--------------------------------------------------------------------+
|                       WINDOWS DOMAIN                                |
+--------------------------------------------------------------------+
|                                                                     |
|   Definition:                                                      |
|   +-------------------------------------------------------------+ |
|   | A Windows domain is a centralized management model where    | |
|   | users and computers are managed by a Domain Controller.     | |
|   +-------------------------------------------------------------+ |
|                                                                     |
|   Comparison: Workgroup vs. Domain                                 |
|                                                                     |
|   WORKGROUP                        DOMAIN                          |
|   +----------------------+         +----------------------+        |
|   | - Decentralized      |         | - Centralized        |        |
|   | - Each PC manages    |         | - Domain Controller  |        |
|   |   own users          |         |   manages everything |        |
|   | - Max. 10-20 PCs     |         | - Thousands of PCs   |        |
|   | - Home networks      |         | - Businesses         |        |
|   | - No central         |         | - Central policies   |        |
|   |   control            |         | - Single Sign-On     |        |
|   +----------------------+         +----------------------+        |
|                                                                     |
|   Domain structure:                                                 |
|   +-------------------------------------------------------------+ |
|   |                                                              | |
|   |           +--------------------+                            | |
|   |           | Domain Controller  |                            | |
|   |           | (Active Directory) |                            | |
|   |           +---------+----------+                            | |
|   |                     |                                        | |
|   |        +------------+------------+                          | |
|   |        |            |            |                          | |
|   |   +----+----+  +----+----+  +----+----+                    | |
|   |   |  PC 1   |  |  PC 2   |  |  PC 3   |                    | |
|   |   |(Domain) |  |(Domain) |  |(Domain) |                    | |
|   |   +---------+  +---------+  +---------+                    | |
|   |                                                              | |
|   |   All PCs are members of the domain "company.local"         | |
|   |                                                              | |
|   +-------------------------------------------------------------+ |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Advantages of a Domain

```
+--------------------------------------------------------------------+
|                   ADVANTAGES OF A DOMAIN                            |
+--------------------------------------------------------------------+
|                                                                     |
|   1. CENTRALIZED USER MANAGEMENT                                   |
|   +------------------------------------------------------------+  |
|   | - One account for all resources (Single Sign-On)           |  |
|   | - Users can log in to any PC                               |  |
|   | - Password changes take effect everywhere immediately      |  |
|   | - Central deactivation when employee leaves                |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   2. GROUP POLICIES (Group Policy)                                 |
|   +------------------------------------------------------------+  |
|   | - Central configuration of all PCs                         |  |
|   | - Specify security settings                                |  |
|   | - Distribute software automatically                        |  |
|   | - Lock USB ports, enforce screen saver                     |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   3. SECURITY                                                      |
|   +------------------------------------------------------------+  |
|   | - Centralized password policies                            |  |
|   | - Audit logging                                            |  |
|   | - Centrally manage permissions                             |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   4. RESOURCE ACCESS                                               |
|   +------------------------------------------------------------+  |
|   | - Centralized sharing of folders and printers             |  |
|   | - Control permissions via groups                           |  |
|   | - Connect network drives automatically                     |  |
|   +------------------------------------------------------------+  |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Prerequisites for Domain Join

```
+--------------------------------------------------------------------+
|               PREREQUISITES FOR DOMAIN JOIN                         |
+--------------------------------------------------------------------+
|                                                                     |
|   ON THE CLIENT PC:                                                |
|   +------------------------------------------------------------+  |
|   | - Windows Professional, Enterprise, or Education           |  |
|   |   (Windows Home CANNOT join a domain!)                     |  |
|   | - Network connection to Domain Controller                  |  |
|   | - DNS server must point to Domain Controller               |  |
|   | - Correct computer name (will be registered in domain)     |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   IN THE NETWORK:                                                  |
|   +------------------------------------------------------------+  |
|   | - Domain Controller must be reachable                      |  |
|   | - DNS must work (domain resolvable)                        |  |
|   | - Ports for Active Directory open (TCP 389, 636, ...)      |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   PERMISSIONS:                                                     |
|   +------------------------------------------------------------+  |
|   | - Local administrator rights on the PC                     |  |
|   | - Domain account with permission to add PCs                |  |
|   |   (usually Domain Admin or delegated user)                 |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   ! IMPORTANT: DNS must point to Domain Controller!               |
|   +------------------------------------------------------------+  |
|   | Wrong: DNS = 8.8.8.8 (Google cannot resolve domain)       |  |
|   | Correct: DNS = IP of the Domain Controller                 |  |
|   +------------------------------------------------------------+  |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Domain Integration Process

```
+--------------------------------------------------------------------+
|              STEPS FOR DOMAIN INTEGRATION                           |
+--------------------------------------------------------------------+
|                                                                     |
|   STEP 1: CHECK NETWORK                                            |
|   +------------------------------------------------------------+  |
|   | - Check IP address (ipconfig)                              |  |
|   | - DNS server must be Domain Controller                     |  |
|   | - Test ping to Domain Controller                           |  |
|   | - Check nslookup domain.local                              |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   STEP 2: OPEN SYSTEM PROPERTIES                                   |
|   +------------------------------------------------------------+  |
|   | Windows + Pause -> Advanced system settings                |  |
|   | OR: sysdm.cpl in Run                                       |  |
|   | -> Tab "Computer Name" -> "Change"                         |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   STEP 3: JOIN DOMAIN                                              |
|   +------------------------------------------------------------+  |
|   | +----------------------------------------------------+    |  |
|   | | Computer name: PC-ACCOUNTING-01                     |    |  |
|   | |                                                     |    |  |
|   | | Member of:                                          |    |  |
|   | | O Workgroup: WORKGROUP                              |    |  |
|   | | O Domain:    company.local    <- Enter here        |    |  |
|   | |                                                     |    |  |
|   | |                              [OK] [Cancel]         |    |  |
|   | +----------------------------------------------------+    |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   STEP 4: ENTER CREDENTIALS                                        |
|   +------------------------------------------------------------+  |
|   | Username: administrator@company.local                      |  |
|   | OR: COMPANY\administrator                                  |  |
|   | Password: ********                                         |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   STEP 5: RESTART                                                  |
|   +------------------------------------------------------------+  |
|   | After successful join:                                     |  |
|   | "Welcome to the domain company.local"                      |  |
|   | -> PC must be restarted                                    |  |
|   | -> After restart: Login with domain account possible       |  |
|   +------------------------------------------------------------+  |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Common Problems

```
+--------------------------------------------------------------------+
|                    COMMON PROBLEMS                                  |
+--------------------------------------------------------------------+
|                                                                     |
|   "The domain could not be found"                                  |
|   +------------------------------------------------------------+  |
|   | Cause: DNS problem                                         |  |
|   | Solution:                                                  |  |
|   | - Set DNS server to Domain Controller                      |  |
|   | - Test nslookup domain.local                               |  |
|   | - Check network connection                                 |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   "Access denied"                                                  |
|   +------------------------------------------------------------+  |
|   | Cause: Missing permission                                  |  |
|   | Solution:                                                  |  |
|   | - Use domain admin account                                 |  |
|   | - Or: Permission "Add computer to domain"                  |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   "The computer account already exists"                            |
|   +------------------------------------------------------------+  |
|   | Cause: PC was already in the domain before                 |  |
|   | Solution:                                                  |  |
|   | - Delete or reset old computer account in AD               |  |
|   | - Change computer name                                     |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   Windows Home Edition                                             |
|   +------------------------------------------------------------+  |
|   | Problem: Join not possible                                 |  |
|   | Solution: Upgrade to Windows Professional required         |  |
|   +------------------------------------------------------------+  |
|                                                                     |
+--------------------------------------------------------------------+
```

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Domain** | Centrally managed network environment |
| **Domain Controller** | Server with Active Directory |
| **Active Directory** | Microsoft directory service |
| **Group Policy** | Centralized configuration rules |
| **Single Sign-On** | One login for all resources |
| **Workgroup** | Decentralized peer-to-peer networking |

---

## Exam Tips

### Common Exam Questions

- What are prerequisites for domain join?
- Name advantages of a domain
- Which Windows edition can join a domain?

### Important to Remember

- **Windows Home** CANNOT join
- **DNS** must point to Domain Controller
- Advantages: Centralized management, Single Sign-On, Group Policies
- **Restart** required after join
- Login: user@domain.local OR DOMAIN\user

---

## Practice Exercises

### Exercise 1
A new PC is to be added to the domain "company.local". What must be checked before joining?

**Solution:**
1. **Windows edition:** Professional, Enterprise, or Education (not Home!)
2. **Network:** IP address and gateway correct
3. **DNS server:** Must point to Domain Controller
4. **Reachability:** Ping to Domain Controller successful
5. **DNS resolution:** nslookup company.local works
6. **Permissions:** Admin rights locally + domain account for join

### Exercise 2
After domain join, "Domain could not be found" appears. What is the likely cause?

**Solution:**
**DNS problem:** The DNS server is incorrectly configured.

Check:
- ipconfig /all -> Which DNS server is configured?
- DNS must point to Domain Controller
- Not to external DNS like 8.8.8.8

Solution: Set DNS server to IP of the Domain Controller.

### Exercise 3
Name three advantages of a domain compared to a workgroup.

**Solution:**
1. **Centralized user management:** One account for all PCs, easy management when employees leave
2. **Group policies:** Central configuration of all PCs, enforce security settings
3. **Single Sign-On:** One-time login for all resources (file servers, printers, applications)

---

## Cross-References

- [07-02-04 DHCP](./07-02-ip-addressing/07-02-04-dhcp.md) - IP assignment
- [07-01-03 Protocols](./07-01-network-fundamentals/07-01-03-protocols.md) - DNS
- [04-03-02 Authentication](../04-it-security/04-03-protective-measures/04-03-02-authentication-2fa.md) - Domain login
