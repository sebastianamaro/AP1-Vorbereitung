# Remote Maintenance and Remote Access

## Learning Objectives

After this section you should be able to:
- Distinguish different remote maintenance technologies
- Name protocols for remote access (RDP, SSH, VNC)
- Explain security aspects of remote maintenance
- Select suitable solutions for different scenarios

---

## Core Content

### What is Remote Maintenance?

**Remote maintenance** enables access to computers and network devices over a network connection without being physically on-site. This is essential for:
- IT support and helpdesk
- Server administration
- Home office connectivity
- Maintenance of remote locations

### Remote Maintenance Technologies Overview

```
+---------------------------------------------------------------------+
|              REMOTE MAINTENANCE TECHNOLOGIES                         |
+---------------------------------------------------------------------+
|                                                                      |
|  +---------------------------------------------------------------+  |
|  |                    RDP (Remote Desktop Protocol)               |  |
|  |  +---------+           Port 3389          +---------+         |  |
|  |  | Client  |<---------------------------->| Server  |         |  |
|  |  |(Windows)|         encrypted            |(Windows)|         |  |
|  |  +---------+                              +---------+         |  |
|  |  -> Complete desktop takeover                                 |  |
|  |  -> Windows-integrated                                        |  |
|  +---------------------------------------------------------------+  |
|                                                                      |
|  +---------------------------------------------------------------+  |
|  |                    SSH (Secure Shell)                          |  |
|  |  +---------+           Port 22            +---------+         |  |
|  |  | Client  |<---------------------------->| Server  |         |  |
|  |  | (PuTTY) |         encrypted            | (Linux) |         |  |
|  |  +---------+                              +---------+         |  |
|  |  -> Command line access                                       |  |
|  |  -> Standard for Linux/Unix                                   |  |
|  +---------------------------------------------------------------+  |
|                                                                      |
|  +---------------------------------------------------------------+  |
|  |                    VNC (Virtual Network Computing)             |  |
|  |  +---------+           Port 5900          +---------+         |  |
|  |  | Viewer  |<---------------------------->| Server  |         |  |
|  |  |         |      (unencrypted!)          |         |         |  |
|  |  +---------+                              +---------+         |  |
|  |  -> Cross-platform                                            |  |
|  |  -> Only secure with VPN/SSH tunnel!                          |  |
|  +---------------------------------------------------------------+  |
|                                                                      |
+---------------------------------------------------------------------+
```

### Protocol Comparison

| Property | RDP | SSH | VNC |
|----------|-----|-----|-----|
| **Port** | 3389 | 22 | 5900+ |
| **Encryption** | Yes | Yes | No* |
| **Interface** | Graphical | Command line | Graphical |
| **Platform** | Windows | Linux/Unix | All |
| **Performance** | High | Very high | Medium |
| **Typical use** | Windows servers | Linux servers | Cross-platform |

*VNC should only be used over VPN or SSH tunnel!

### RDP (Remote Desktop Protocol)

```
+---------------------------------------------------------------------+
|                    RDP - REMOTE DESKTOP                              |
+---------------------------------------------------------------------+
|                                                                      |
|  Properties:                                                        |
|  ---------------------------------------------------------------    |
|  -> Microsoft protocol, integrated in Windows                       |
|  -> Port 3389 (TCP)                                                 |
|  -> TLS encryption                                                  |
|  -> Audio, printers, drives can be shared                           |
|  -> Network Level Authentication (NLA) recommended                  |
|                                                                      |
|  Requirements:                                                      |
|  ---------------------------------------------------------------    |
|  -> Windows Professional, Enterprise, or Education                  |
|     (Windows Home CANNOT be a remote desktop server!)               |
|  -> Remote Desktop must be enabled                                  |
|  -> Firewall rule for port 3389                                     |
|  -> User must have permission                                       |
|                                                                      |
|  Client program:                                                    |
|  ---------------------------------------------------------------    |
|  -> Windows: mstsc.exe (Remote Desktop Connection)                  |
|  -> macOS/Linux: Microsoft Remote Desktop (App)                     |
|                                                                      |
+---------------------------------------------------------------------+
```

### SSH (Secure Shell)

```
+---------------------------------------------------------------------+
|                    SSH - SECURE SHELL                                |
+---------------------------------------------------------------------+
|                                                                      |
|  Properties:                                                        |
|  ---------------------------------------------------------------    |
|  -> Secure replacement for Telnet                                   |
|  -> Port 22 (TCP)                                                   |
|  -> Strong encryption (AES, etc.)                                   |
|  -> Authentication: Password or SSH key                             |
|  -> Tunneling possible (port forwarding)                            |
|                                                                      |
|  Authentication methods:                                            |
|  ---------------------------------------------------------------    |
|                                                                      |
|  1. Password authentication                                         |
|     -> Simple, but more vulnerable to brute force                   |
|                                                                      |
|  2. SSH Key (Public/Private Key)                                    |
|     +--------------+          +--------------+                      |
|     | Private Key  |          | Public Key   |                      |
|     | (secret!)    |          | (on server)  |                      |
|     | ~/.ssh/id_rsa|          | authorized_  |                      |
|     |              |          | keys         |                      |
|     +--------------+          +--------------+                      |
|     -> More secure, no password needed                              |
|                                                                      |
|  Client programs:                                                   |
|  ---------------------------------------------------------------    |
|  -> Windows: PuTTY, Windows Terminal, OpenSSH                       |
|  -> Linux/macOS: ssh (integrated)                                   |
|                                                                      |
|  Example command:  ssh user@server.com                              |
|                                                                      |
+---------------------------------------------------------------------+
```

### Commercial Remote Maintenance Solutions

| Solution | Description | Special Feature |
|----------|-------------|-----------------|
| **TeamViewer** | Cross-platform | NAT traversal, no port forwarding needed |
| **AnyDesk** | Fast connection | Low resource usage |
| **Remote Desktop Gateway** | Microsoft | Access via HTTPS (443) |
| **VPN + RDP** | Combination | Secure tunnel for RDP |

### VPN for Secure Remote Maintenance

```
+---------------------------------------------------------------------+
|              VPN + REMOTE MAINTENANCE                                |
+---------------------------------------------------------------------+
|                                                                      |
|   Employee                                  VPN Gateway              |
|   (Home office)                             (Company)                |
|   +---------+                               +---------+             |
|   |         |                               |         |             |
|   |   PC    |<------- VPN Tunnel ---------->| Router  |             |
|   |         |    (encrypted)                |         |             |
|   +---------+                               +----+----+             |
|                                                  |                   |
|                                                  v                   |
|                                             +---------+             |
|                                             | Internal|             |
|                                             | Network |             |
|                                             | (Server)|             |
|                                             +---------+             |
|                                                                      |
|   Advantages:                                                       |
|   -> All services through one secure tunnel                         |
|   -> No individual port forwarding needed                           |
|   -> Access like in local network                                   |
|                                                                      |
|   VPN protocols:                                                    |
|   -> IPsec, OpenVPN, WireGuard                                      |
|                                                                      |
+---------------------------------------------------------------------+
```

### Security Aspects

```
+---------------------------------------------------------------------+
|              SECURITY IN REMOTE MAINTENANCE                          |
+---------------------------------------------------------------------+
|                                                                      |
|  / RECOMMENDED                      X AVOID                         |
|  ---------------------------------------------------------------    |
|                                                                      |
|  VPN before remote access           Direct RDP exposure to Internet |
|                                                                      |
|  SSH keys instead of passwords      Standard ports without change   |
|                                                                      |
|  Two-factor authentication          VNC without encryption          |
|                                                                      |
|  Fail2Ban (brute force protection)  Simple passwords                |
|                                                                      |
|  Updated software                   Outdated protocols (Telnet)     |
|                                                                      |
|  Logging and monitoring             Unattended sessions             |
|                                                                      |
+---------------------------------------------------------------------+
```

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **RDP** | Remote Desktop Protocol - Microsoft remote access |
| **SSH** | Secure Shell - encrypted command line access |
| **VNC** | Virtual Network Computing - cross-platform |
| **VPN** | Virtual Private Network - secure tunnel |
| **NLA** | Network Level Authentication - RDP security |
| **SSH Key** | Key pair for passwordless authentication |
| **NAT Traversal** | Connection without port forwarding |
| **Port Forwarding** | Forwarding of ports through tunnel |

---

## Exam Tips

1. **Remember ports:**
   - RDP = **3389**
   - SSH = **22**
   - VNC = **5900**
   - Telnet = 23 (insecure, don't use!)

2. **Security:**
   - SSH is more secure than Telnet
   - VPN + RDP is more secure than direct RDP
   - SSH keys are more secure than passwords

3. **Typical exam questions:**
   - Which protocol for Linux server? -> SSH
   - Which port for Windows remote access? -> 3389 (RDP)
   - How do you secure VNC? -> Via VPN or SSH tunnel

---

## Practice Exercises

### Exercise 1: Protocol Selection

Which remote maintenance protocol do you recommend for the following scenarios?

a) Administration of a Linux web server
b) Remote access to a Windows terminal server
c) Support for a Mac user from a Windows PC

<details>
<summary>Show solution</summary>

a) **SSH** - Standard for Linux servers, command line is sufficient
b) **RDP** - Windows-integrated, graphical interface
c) **TeamViewer/AnyDesk** or **VNC via SSH tunnel** - cross-platform, easy setup

</details>

### Exercise 2: Security Analysis

A company wants to enable home office for its employees. The IT admin plans to open port 3389 directly on the firewall.

a) What risks exist with this configuration?
b) What secure alternative do you recommend?

<details>
<summary>Show solution</summary>

a) **Risks of direct RDP exposure:**
- Brute force attacks on RDP port possible
- RDP vulnerabilities can be exploited
- No additional protection (only password)
- Visible to port scanners worldwide

b) **Secure alternatives:**
1. **VPN solution:**
   - Employees first connect via VPN
   - Then RDP access only within VPN tunnel

2. **Remote Desktop Gateway:**
   - RDP over HTTPS (port 443)
   - Additional authentication layer

3. **Two-factor authentication:**
   - Additional factor besides password

4. **Commercial solution (TeamViewer/AnyDesk):**
   - No port forwarding needed
   - Encrypted connection

</details>

### Exercise 3: SSH Configuration

ConSystem GmbH wants to improve SSH security on their Linux servers.

Name three measures to secure SSH.

<details>
<summary>Show solution</summary>

**Measures to secure SSH:**

1. **SSH keys instead of passwords**
   - Disable password authentication
   - Only allow key-based login

2. **Disable root login**
   - `PermitRootLogin no` in sshd_config
   - Login only as normal user, then sudo

3. **Change default port**
   - From port 22 to different port (e.g., 2222)
   - Reduces automated attacks

4. **Install Fail2Ban**
   - Blocks IP addresses after failed attempts
   - Protection against brute force

5. **Firewall restriction**
   - Allow SSH only from specific IP addresses
   - e.g., only from company network

</details>

---

## Cross-References

- [TCP/IP Protocols](07-01-network-fundamentals/07-01-03-protocols.md) - SSH, Telnet
- [IT Security Authentication](../04-it-security/04-03-protective-measures/04-03-02-authentication-2fa.md) - 2FA
- [Diagnostic Tools](07-07-network-troubleshooting/07-07-01-diagnostic-tools.md) - Network tools
- [Domain Integration](07-09-domain-integration.md) - Network connectivity
