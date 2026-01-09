# Operating System Hardening (OS Hardening)

## Learning Objectives

After this chapter, you should be able to:
- Explain the term "hardening"
- Know typical hardening measures for operating systems
- Understand the difference between client and server hardening
- Apply practical measures

**Note:** This topic is NEW in the 2025 exam catalog and therefore particularly exam-relevant!

---

## Core Content

### What is Operating System Hardening?

**Hardening** refers to securing a system by:
- Removing/disabling unnecessary functions
- Closing security vulnerabilities
- Minimizing the attack surface

> Basic principle: "Everything that is not needed is disabled or removed."

```
+------------------------------------------------------------------+
|              OPERATING SYSTEM HARDENING                           |
+------------------------------------------------------------------+
|                                                                   |
|  STANDARD INSTALLATION             HARDENED SYSTEM                |
|  +----------------------+         +----------------------+        |
|  | XXXXXXXXXXXXXXXXXX   |         | XXXXX                |        |
|  | XXXXXXXXXXXXXXXXXX   |   -->   | XXXXX                |        |
|  | XXXXXXXXXXXXXXXXXX   |         | XXXXX                |        |
|  |                      |         |                      |        |
|  | Large attack surface |         | Small attack         |        |
|  | Many open ports      |         | surface              |        |
|  | Unnecessary services |         | Only necessary       |        |
|  | Default config       |         | services active      |        |
|  +----------------------+         +----------------------+        |
|                                                                   |
+------------------------------------------------------------------+
```

---

### Basic Principles of Hardening

| Principle | Description |
|-----------|-------------|
| **Least Privilege** | Grant only minimal permissions |
| **Least Functionality** | Activate only necessary functions |
| **Defense in Depth** | Multiple security layers |
| **Minimizing Attack Surface** | Fewer services = fewer attack points |

---

### Overview of Hardening Measures

```
+------------------------------------------------------------------+
|              HARDENING MEASURES                                   |
+------------------------------------------------------------------+
|                                                                   |
|  +------------------+  +------------------+  +------------------+ |
|  | USERS &          |  | SERVICES &       |  | NETWORK          | |
|  | ACCOUNTS         |  | PROCESSES        |  |                  | |
|  |                  |  |                  |  |                  | |
|  | * Restrict admin |  | * Disable        |  | * Firewall       | |
|  |   accounts       |  |   unnecessary    |  | * Close open     | |
|  | * Password       |  |   services       |  |   ports          | |
|  |   policies       |  | * Clean up       |  | * Disable        | |
|  | * Disable guest  |  |   autostart      |  |   protocols      | |
|  |   accounts       |  |                  |  |                  | |
|  +------------------+  +------------------+  +------------------+ |
|                                                                   |
|  +------------------+  +------------------+  +------------------+ |
|  | SOFTWARE         |  | FILE SYSTEM      |  | LOGGING          | |
|  |                  |  |                  |  |                  | |
|  | * Install        |  | * Permissions    |  | * Enable audit   | |
|  |   updates        |  | * Encryption     |  |   logs           | |
|  | * Uninstall      |  | * Secure         |  | * Monitor        | |
|  |   unnecessary SW |  |   shares         |  |   events         | |
|  +------------------+  +------------------+  +------------------+ |
|                                                                   |
+------------------------------------------------------------------+
```

---

### Concrete Hardening Measures

#### 1. User Accounts and Authentication

| Measure | Description |
|---------|-------------|
| **Rename administrator account** | Default names facilitate attacks |
| **Disable guest account** | No anonymous access |
| **Password policies** | Minimum length, complexity, expiration |
| **Account lockout** | After multiple failed attempts |
| **Separate admin accounts** | Do not work as admin in daily use |

```
+----------------------------------------------------------------+
|                 PASSWORD POLICIES                               |
+----------------------------------------------------------------+
|                                                                 |
|  Recommended:                                                   |
|  * Minimum length: 12+ characters                               |
|  * Complexity: Upper/lower case, numbers, special characters    |
|  * Account lockout: After 3-5 failed attempts                   |
|  * Password history: Block last 10 passwords                    |
|                                                                 |
+----------------------------------------------------------------+
```

#### 2. Services and Processes

| Measure | Windows | Linux |
|---------|---------|-------|
| **Disable unnecessary services** | services.msc | systemctl disable |
| **Clean up autostart** | msconfig / Task Manager | systemd / /etc/rc.local |
| **Only necessary software** | Remove programs | apt/yum remove |

**Examples of often unnecessary services:**
- Remote Desktop (if not needed)
- Telnet (replace with SSH)
- FTP (replace with SFTP)
- Bluetooth (if not needed)
- NetBIOS over TCP/IP

#### 3. Network Hardening

| Measure | Description |
|---------|-------------|
| **Enable firewall** | Control incoming and outgoing traffic |
| **Close unnecessary ports** | Open only necessary ports |
| **Disable insecure protocols** | Replace Telnet, FTP, HTTP with secure alternatives |
| **Disable IPv6** | If not needed |

```
+----------------------------------------------------------------+
|              PORT OVERVIEW                                      |
+----------------------------------------------------------------+
|                                                                 |
|  Often unnecessarily open ports:                                |
|  * 23 (Telnet) -> Use SSH (22)                                  |
|  * 21 (FTP) -> Use SFTP (22)                                    |
|  * 135-139 (NetBIOS) -> If not needed in local network          |
|  * 445 (SMB) -> Only if file shares needed                      |
|  * 3389 (RDP) -> Use VPN in front or disable                    |
|                                                                 |
+----------------------------------------------------------------+
```

#### 4. Software and Updates

| Measure | Description |
|---------|-------------|
| **Regular updates** | Apply security updates promptly |
| **Automatic updates** | Enable for critical patches |
| **Remove software** | Uninstall unneeded programs |
| **Application control** | Only allowed software executable |

#### 5. File System and Encryption

| Measure | Description |
|---------|-------------|
| **Check file permissions** | Least privilege for files and folders |
| **Disk encryption** | BitLocker (Windows), LUKS (Linux) |
| **Secure shares** | Only necessary shares, with permissions |
| **Clean temp files** | Regularly delete temporary files |

#### 6. Logging and Monitoring

| Measure | Description |
|---------|-------------|
| **Enable audit logs** | Login attempts, file accesses |
| **Log rotation** | Regularly archive logs |
| **Central logging** | Logs to separate server |
| **Integrity checking** | Detect changes to system files |

---

### Checklist: Windows Hardening

| Area | Measure | Implementation |
|------|---------|----------------|
| **Accounts** | Disable guest account | Computer Management |
| **Accounts** | Rename admin | Local Security Policy |
| **Services** | Disable unnecessary services | services.msc |
| **Firewall** | Enable Windows Firewall | Control Panel |
| **Updates** | Automatic updates | Windows Update |
| **Encryption** | Enable BitLocker | Control Panel |
| **Network** | Disable NetBIOS | Network adapter properties |

### Checklist: Linux Hardening

| Area | Measure | Implementation |
|------|---------|----------------|
| **Accounts** | Disable root login via SSH | /etc/ssh/sshd_config |
| **Services** | Disable unnecessary services | systemctl disable |
| **Firewall** | Configure iptables/nftables | Firewall rules |
| **Updates** | Patch regularly | apt update && apt upgrade |
| **Permissions** | Check SUID/SGID | find / -perm -4000 |
| **SSH** | Key-based authentication | .ssh/authorized_keys |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Hardening** | Securing a system by minimizing attack surface |
| **Attack Surface** | All possible attack points of a system |
| **Least Privilege** | Minimal permissions |
| **Least Functionality** | Only necessary functions |
| **Defense in Depth** | Multi-layered security |
| **Audit Log** | Log of security-relevant events |

---

## Exam Tips

### Frequent Exam Questions

- What is meant by operating system hardening?
- Name three measures for OS hardening
- What does the principle "Least Privilege" mean?
- Why should unnecessary services be disabled?

### Important to Remember

- **Hardening** = Minimizing attack surface
- **Basic principle:** "What is not needed is disabled"
- **Least Privilege:** Grant only minimal permissions
- **Defense in Depth:** Multiple security layers

---

## Practice Exercises

### Exercise 1
What is meant by operating system hardening (OS Hardening)?

**Solution:** Operating system hardening refers to securing an operating system by removing or disabling unnecessary functions, closing security vulnerabilities, and minimizing the attack surface. The basic principle is: "Everything that is not needed is disabled or removed."

### Exercise 2
Name four concrete measures for hardening a Windows system.

**Solution:**
1. **Disable guest account** (no anonymous access)
2. **Enable Windows Firewall** (control network traffic)
3. **Disable unnecessary services** (smaller attack surface)
4. **Enable automatic updates** (close security vulnerabilities)

(Other possible answers: Enable BitLocker, rename administrator account, password policies, disable NetBIOS)

### Exercise 3
Explain the principle "Least Privilege" in the context of hardening.

**Solution:** "Least Privilege" (principle of minimal rights) means that users and processes should only receive the minimally necessary permissions. Example: A normal user does not work as administrator but with a restricted account. Only when admin rights are really needed does one switch to an admin account.

### Exercise 4
Why should unnecessary services be disabled on a server?

**Solution:** Unnecessary services increase the **attack surface** of the system:
1. Every running service can have potential security vulnerabilities
2. Open ports offer attack points
3. Disabled services do not consume system resources
4. Less running software = less software to patch

---

## Cross-References

- [04-03-01 Technical Measures](./04-03-01-technical-measures.md) - Overview protective measures
- [04-03-02 Authentication-2FA](./04-03-02-authentication-2fa.md) - Account security
- [04-03-04 Personal Firewall](./04-03-04-personal-firewall.md) - Firewall configuration
- [05-03-01 Operating System Fundamentals](../../05-it-systems/05-03-operating-systems/05-03-01-fundamentals-operating-systems.md) - OS basics
