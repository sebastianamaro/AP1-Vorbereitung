# Network Protocols

## Learning Objectives

After this chapter, you should be able to:
- Know the most important network protocols
- Understand the function of protocols
- Assign protocols to OSI layers
- Distinguish between email protocols

---

## Core Content

### What are Protocols?

```
+--------------------------------------------------------------------+
|                    NETWORK PROTOCOLS                                |
+--------------------------------------------------------------------+
|                                                                     |
|   Definition:                                                       |
|   +-------------------------------------------------------------+  |
|   | A protocol is a set of rules and standards that define      |  |
|   | how data is exchanged between devices in a network.         |  |
|   +-------------------------------------------------------------+  |
|                                                                     |
|   Protocols define:                                                 |
|   - Format of data (syntax)                                         |
|   - Meaning of data (semantics)                                     |
|   - Order of exchange (timing)                                      |
|   - Error detection and handling                                    |
|                                                                     |
|   Example - Communication like a phone call:                        |
|   +-------------------------------------------------------------+  |
|   | 1. Caller dials number             -> Connection setup      |  |
|   | 2. "Hello, this is Max"            -> Identification        |  |
|   | 3. "Understood?" - "Yes, understood" -> Acknowledgment      |  |
|   | 4. "Goodbye"                       -> Connection teardown   |  |
|   +-------------------------------------------------------------+  |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Application Protocols (Layer 7)

```
+--------------------------------------------------------------------+
|                  WEB PROTOCOLS: HTTP/HTTPS                          |
+--------------------------------------------------------------------+
|                                                                     |
|   HTTP (HyperText Transfer Protocol)                                |
|   +------------------------------------------------------------+   |
|   | - Transmission of web pages                                 |   |
|   | - Port 80                                                   |   |
|   | - Plain text (unencrypted!)                                 |   |
|   | - Request-response model                                    |   |
|   |                                                             |   |
|   |    Browser                           Web server             |   |
|   |      |   GET /index.html HTTP/1.1      |                    |   |
|   |      | ------------------------------> |                    |   |
|   |      |                                  |                    |   |
|   |      |   HTTP/1.1 200 OK               |                    |   |
|   |      |   <html>...</html>              |                    |   |
|   |      | <------------------------------ |                    |   |
|   +------------------------------------------------------------+   |
|                                                                     |
|   HTTPS (HTTP Secure)                                               |
|   +------------------------------------------------------------+   |
|   | - HTTP with encryption (TLS/SSL)                            |   |
|   | - Port 443                                                  |   |
|   | - Protects against eavesdropping and manipulation           |   |
|   | - Recognizable by lock symbol in browser                    |   |
|   | - Standard for all modern websites                          |   |
|   +------------------------------------------------------------+   |
|                                                                     |
+--------------------------------------------------------------------+
```

```
+--------------------------------------------------------------------+
|                     EMAIL PROTOCOLS                                 |
+--------------------------------------------------------------------+
|                                                                     |
|   +-------------------------------------------------------------+  |
|   |                    EMAIL FLOW                                |  |
|   |                                                              |  |
|   |   Sender        Mail Server        Mail Server   Recipient  |  |
|   |   +-----+         +-----+           +-----+       +-----+   |  |
|   |   |     |--SMTP-->|     |---SMTP--->|     |<-----|     |   |  |
|   |   |     |         |     |           |     | POP3/ |     |   |  |
|   |   |     |         |     |           |     | IMAP  |     |   |  |
|   |   +-----+         +-----+           +-----+       +-----+   |  |
|   |                                                              |  |
|   +-------------------------------------------------------------+  |
|                                                                     |
|   SMTP (Simple Mail Transfer Protocol)                              |
|   +------------------------------------------------------------+   |
|   | - For SENDING emails                                        |   |
|   | - Port 25 (unencrypted) or 587 (encrypted)                  |   |
|   | - Connection to outgoing mail server                        |   |
|   +------------------------------------------------------------+   |
|                                                                     |
|   POP3 (Post Office Protocol v3)                                    |
|   +------------------------------------------------------------+   |
|   | - For RETRIEVING emails                                     |   |
|   | - Port 110 (unencrypted) or 995 (encrypted)                 |   |
|   | - Emails are downloaded and DELETED from server             |   |
|   | - Offline work possible                                     |   |
|   | - Only on one device                                        |   |
|   +------------------------------------------------------------+   |
|                                                                     |
|   IMAP (Internet Message Access Protocol)                           |
|   +------------------------------------------------------------+   |
|   | - For RETRIEVING emails                                     |   |
|   | - Port 143 (unencrypted) or 993 (encrypted)                 |   |
|   | - Emails STAY on the server                                 |   |
|   | - Synchronization across multiple devices                   |   |
|   | - Requires constant internet connection                     |   |
|   +------------------------------------------------------------+   |
|                                                                     |
+--------------------------------------------------------------------+
```

```
+--------------------------------------------------------------------+
|                    POP3 vs. IMAP                                    |
+--------------------------------------------------------------------+
|                                                                     |
|                     POP3                    IMAP                    |
|   +-----------------------------+------------------------------+   |
|   | Emails are downloaded to    | Emails stay on server        |   |
|   | client                      |                              |   |
|   +-----------------------------+------------------------------+   |
|   | Emails are deleted from     | Multiple devices can be      |   |
|   | server                      | synchronized                 |   |
|   +-----------------------------+------------------------------+   |
|   | Good for a single device    | Good for multiple devices    |   |
|   +-----------------------------+------------------------------+   |
|   | Offline work possible       | Requires internet connection |   |
|   +-----------------------------+------------------------------+   |
|   | Less storage space on       | More storage space on        |   |
|   | server needed               | server needed                |   |
|   +-----------------------------+------------------------------+   |
|   | Port 110 / 995              | Port 143 / 993               |   |
|   +-----------------------------+------------------------------+   |
|                                                                     |
|   ! Exam relevant: Know the difference!                             |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Other Important Protocols

```
+--------------------------------------------------------------------+
|                    OTHER PROTOCOLS                                  |
+--------------------------------------------------------------------+
|                                                                     |
|   DNS (Domain Name System)                                          |
|   +------------------------------------------------------------+   |
|   | - Translates domain names to IP addresses                   |   |
|   | - Port 53 (UDP and TCP)                                     |   |
|   |                                                             |   |
|   |   www.example.com  ->  DNS Server  ->  192.168.1.100       |   |
|   |                                                             |   |
|   | Without DNS we would have to memorize IP addresses!         |   |
|   +------------------------------------------------------------+   |
|                                                                     |
|   DHCP (Dynamic Host Configuration Protocol)                        |
|   +------------------------------------------------------------+   |
|   | - Automatic assignment of IP addresses                      |   |
|   | - Port 67 (server), Port 68 (client)                        |   |
|   |                                                             |   |
|   |   New device -> DHCP Server -> IP, Gateway, DNS assigned    |   |
|   |                                                             |   |
|   | Process: DORA (Discover, Offer, Request, Acknowledge)       |   |
|   +------------------------------------------------------------+   |
|                                                                     |
|   FTP (File Transfer Protocol)                                      |
|   +------------------------------------------------------------+   |
|   | - File transfer between computers                           |   |
|   | - Port 20 (data), Port 21 (control)                         |   |
|   | - Unencrypted (SFTP/FTPS for encrypted variant)             |   |
|   +------------------------------------------------------------+   |
|                                                                     |
|   SSH (Secure Shell)                                                |
|   +------------------------------------------------------------+   |
|   | - Encrypted remote access to systems                        |   |
|   | - Port 22                                                   |   |
|   | - Replaces insecure Telnet (Port 23)                        |   |
|   +------------------------------------------------------------+   |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Protocols by OSI Layer

```
+--------------------------------------------------------------------+
|                PROTOCOLS BY OSI LAYER                               |
+--------------------------------------------------------------------+
|                                                                     |
|   Layer | Protocols                                                 |
|   ------+-----------------------------------------------------------+
|   7     | HTTP, HTTPS, FTP, SMTP, POP3, IMAP, DNS, DHCP,            |
|   (App) | SSH, Telnet, SNMP, NTP                                    |
|   ------+-----------------------------------------------------------+
|   6     | SSL/TLS, JPEG, MPEG, ASCII                                |
|   (Pres)|                                                           |
|   ------+-----------------------------------------------------------+
|   5     | NetBIOS, RPC, SQL                                         |
|   (Sess)|                                                           |
|   ------+-----------------------------------------------------------+
|   4     | TCP, UDP                                                   |
|   (Trns)|                                                           |
|   ------+-----------------------------------------------------------+
|   3     | IP (IPv4, IPv6), ICMP, ARP, IGMP                          |
|   (Net) |                                                           |
|   ------+-----------------------------------------------------------+
|   2     | Ethernet, WLAN (802.11), PPP                              |
|   (DaLn)|                                                           |
|   ------+-----------------------------------------------------------+
|   1     | - (physical standards like RS-232)                        |
|   (Phys)|                                                           |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Protocol Overview with Ports

```
+--------------------------------------------------------------------+
|              IMPORTANT PROTOCOLS WITH PORTS                         |
+--------------------------------------------------------------------+
|                                                                     |
|   Protocol | Port     | Function            | Encrypted            |
|   ---------+----------+---------------------+----------------------+
|   HTTP     | 80       | Websites            | No                   |
|   HTTPS    | 443      | Secure websites     | Yes (TLS)            |
|   FTP      | 20/21    | File transfer       | No                   |
|   SFTP     | 22       | Secure transfer     | Yes (SSH)            |
|   SSH      | 22       | Remote access       | Yes                  |
|   Telnet   | 23       | Remote access       | No                   |
|   SMTP     | 25/587   | Send email          | 587 with TLS         |
|   DNS      | 53       | Name resolution     | No                   |
|   DHCP     | 67/68    | IP assignment       | No                   |
|   POP3     | 110/995  | Retrieve email      | 995 with TLS         |
|   IMAP     | 143/993  | Retrieve email      | 993 with TLS         |
|   RDP      | 3389     | Remote Desktop      | Yes                  |
|                                                                     |
+--------------------------------------------------------------------+
```

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **HTTP** | Protocol for websites (Port 80) |
| **HTTPS** | Encrypted HTTP (Port 443) |
| **SMTP** | Email sending (Port 25/587) |
| **POP3** | Email retrieval, deletes from server |
| **IMAP** | Email retrieval, stays on server |
| **DNS** | Name resolution (Port 53) |
| **DHCP** | Automatic IP assignment |
| **FTP** | File transfer (Port 20/21) |

---

## Exam Tips

### Common Exam Questions

- Difference POP3 vs. IMAP?
- Which port belongs to which protocol?
- What does HTTP/HTTPS stand for?

### Important to Remember

- **SMTP** = Email SENDING
- **POP3** = Email RETRIEVAL, is DELETED
- **IMAP** = Email RETRIEVAL, STAYS on server
- **HTTP = Port 80**, **HTTPS = Port 443**
- **DNS = Port 53** (Name resolution)
- SSH replaces Telnet (encrypted)

---

## Practice Exercises

### Exercise 1
An employee wants to keep their emails synchronized on laptop and smartphone. Which protocol do you recommend?

**Solution:**
**IMAP** (Internet Message Access Protocol)

Justification:
- Emails stay on the server
- Changes are synchronized across all devices
- Reading an email on smartphone -> also marked as read on laptop
- POP3 would only download emails to one device and delete from server

### Exercise 2
Assign: HTTP, SMTP, DNS, DHCP - what task does each protocol have?

**Solution:**
- **HTTP:** Transmission of web pages
- **SMTP:** Sending emails
- **DNS:** Resolution of domain names to IP addresses
- **DHCP:** Automatic assignment of IP addresses

### Exercise 3
Why should you use HTTPS instead of HTTP?

**Solution:**
HTTPS should be used because:
- **Encryption:** Data cannot be intercepted
- **Integrity:** Data cannot be manipulated
- **Authenticity:** Certificate confirms website identity
- **Passwords and sensitive data** are protected
- Required for login pages, online banking, shops

---

## Cross-References

- [07-01-01 OSI Model](./07-01-01-osi-model.md) - Layer model
- [07-01-02 TCP/IP Model](./07-01-02-tcp-ip-model.md) - TCP vs. UDP
- [04-05-03 Certificates](../../04-it-security/04-05-cryptography/04-05-03-certificates.md) - HTTPS certificates
- [07-02-04 DHCP](../07-02-ip-addressing/07-02-04-dhcp.md) - IP assignment in detail
