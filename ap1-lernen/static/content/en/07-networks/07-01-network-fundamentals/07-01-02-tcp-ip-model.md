# TCP/IP Model

## Learning Objectives

After this chapter, you should be able to:
- Know the 4 layers of the TCP/IP model
- Understand the differences from the OSI model
- Recognize the practical significance of the TCP/IP model
- Assign protocols to the TCP/IP layers

---

## Core Content

### What is the TCP/IP Model?

```
+--------------------------------------------------------------------+
|                      TCP/IP MODEL                                   |
+--------------------------------------------------------------------+
|                                                                     |
|   TCP/IP = Transmission Control Protocol / Internet Protocol        |
|                                                                     |
|   +-------------------------------------------------------------+  |
|   | The TCP/IP model is the PRACTICAL reference model of the    |  |
|   | Internet. It was developed parallel to the OSI model and    |  |
|   | is the foundation of today's Internet communication.        |  |
|   +-------------------------------------------------------------+  |
|                                                                     |
|   Difference from OSI model:                                        |
|   +----------------------------+-------------------------------+   |
|   | OSI Model                  | TCP/IP Model                  |   |
|   +----------------------------+-------------------------------+   |
|   | Theoretical reference      | Practical implementation      |   |
|   | model                      |                               |   |
|   | 7 layers                   | 4 layers                      |   |
|   | Designed for protocols     | Emerged from protocols        |   |
|   | Rarely exactly implemented | Actually in use               |   |
|   +----------------------------+-------------------------------+   |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### The 4 TCP/IP Layers

```
+--------------------------------------------------------------------+
|                   THE 4 TCP/IP LAYERS                               |
+--------------------------------------------------------------------+
|                                                                     |
|   +------------------------------------------------------------+   |
|   |  4  |  APPLICATION LAYER                                   |   |
|   |     |  --------------------------------------------------  |   |
|   |     |  - Corresponds to OSI layers 5, 6, 7                 |   |
|   |     |  - Application protocols for the user                |   |
|   |     |                                                      |   |
|   |     |  Protocols: HTTP, HTTPS, FTP, SMTP, POP3, IMAP,     |   |
|   |     |             DNS, DHCP, SSH, Telnet, SNMP             |   |
|   +------------------------------------------------------------+   |
|                              |                                      |
|   +------------------------------------------------------------+   |
|   |  3  |  TRANSPORT LAYER                                     |   |
|   |     |  --------------------------------------------------  |   |
|   |     |  - Corresponds to OSI layer 4                        |   |
|   |     |  - End-to-end communication                          |   |
|   |     |  - Port addressing                                   |   |
|   |     |                                                      |   |
|   |     |  Protocols: TCP (reliable)                           |   |
|   |     |             UDP (fast, unreliable)                   |   |
|   +------------------------------------------------------------+   |
|                              |                                      |
|   +------------------------------------------------------------+   |
|   |  2  |  INTERNET LAYER                                      |   |
|   |     |  --------------------------------------------------  |   |
|   |     |  - Corresponds to OSI layer 3                        |   |
|   |     |  - IP addressing and routing                         |   |
|   |     |                                                      |   |
|   |     |  Protocols: IPv4, IPv6, ICMP, ARP                    |   |
|   +------------------------------------------------------------+   |
|                              |                                      |
|   +------------------------------------------------------------+   |
|   |  1  |  NETWORK ACCESS LAYER                                |   |
|   |     |  --------------------------------------------------  |   |
|   |     |  - Corresponds to OSI layers 1 and 2                 |   |
|   |     |  - Physical transmission                             |   |
|   |     |                                                      |   |
|   |     |  Technologies: Ethernet, WLAN, DSL                   |   |
|   +------------------------------------------------------------+   |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### OSI vs. TCP/IP: Layer Mapping

```
+--------------------------------------------------------------------+
|              OSI MODEL vs. TCP/IP MODEL                             |
+--------------------------------------------------------------------+
|                                                                     |
|        OSI Model                       TCP/IP Model                 |
|   +---------------------+                                           |
|   | 7  Application      | --+                                       |
|   +---------------------+   |         +---------------------+       |
|   | 6  Presentation     | --+-------> | 4  Application      |       |
|   +---------------------+   |         |    (Application)    |       |
|   | 5  Session          | --+         +---------------------+       |
|   +---------------------+             +---------------------+       |
|   | 4  Transport        | ----------> | 3  Transport        |       |
|   |                     |             |    (Transport)      |       |
|   +---------------------+             +---------------------+       |
|   | 3  Network          | ----------> +---------------------+       |
|   |                     |             | 2  Internet         |       |
|   +---------------------+             +---------------------+       |
|   | 2  Data Link        | --+         +---------------------+       |
|   +---------------------+   +-------> | 1  Network Access   |       |
|   | 1  Physical         | --+         |    (Network Access) |       |
|   +---------------------+             +---------------------+       |
|                                                                     |
|   7 layers                             4 layers                     |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### TCP vs. UDP

```
+--------------------------------------------------------------------+
|                       TCP vs. UDP                                   |
+--------------------------------------------------------------------+
|                                                                     |
|   TCP (Transmission Control Protocol)                               |
|   +------------------------------------------------------------+   |
|   |                                                             |   |
|   |  +-----+     +-----------------------------+    +-----+    |   |
|   |  | A   | <-- | Connection setup (3-Way)    | -->| B   |    |   |
|   |  |     | --> | Data with acknowledgment    | <--|     |    |   |
|   |  |     | <-- | Connection teardown         | -->|     |    |   |
|   |  +-----+     +-----------------------------+    +-----+    |   |
|   |                                                             |   |
|   |  - Connection-oriented                                      |   |
|   |  - Reliable (receipt is acknowledged)                       |   |
|   |  - Order guaranteed                                         |   |
|   |  - Error control and retransmission                         |   |
|   |  - Slower due to overhead                                   |   |
|   |                                                             |   |
|   |  Use cases: HTTP, HTTPS, FTP, Email, SSH                    |   |
|   +------------------------------------------------------------+   |
|                                                                     |
|   UDP (User Datagram Protocol)                                      |
|   +------------------------------------------------------------+   |
|   |                                                             |   |
|   |  +-----+                                         +-----+    |   |
|   |  | A   | --> Data --> Data --> Data -->         | B   |    |   |
|   |  |     |     (no acknowledgment!)               |     |    |   |
|   |  +-----+                                         +-----+    |   |
|   |                                                             |   |
|   |  - Connectionless                                           |   |
|   |  - Unreliable (no acknowledgment)                           |   |
|   |  - Order not guaranteed                                     |   |
|   |  - Faster, less overhead                                    |   |
|   |  - Packets may be lost                                      |   |
|   |                                                             |   |
|   |  Use cases: DNS, DHCP, VoIP, Streaming, Online games        |   |
|   +------------------------------------------------------------+   |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### TCP 3-Way Handshake

```
+--------------------------------------------------------------------+
|                    TCP 3-WAY HANDSHAKE                              |
+--------------------------------------------------------------------+
|                                                                     |
|   Connection establishment with TCP:                                |
|                                                                     |
|       Client                              Server                    |
|         |                                   |                       |
|         |   1. SYN (Synchronize)            |                       |
|         | --------------------------------> |                       |
|         |   "I want to establish a          |                       |
|         |    connection"                    |                       |
|         |                                   |                       |
|         |   2. SYN-ACK                      |                       |
|         | <-------------------------------- |                       |
|         |   "OK, I acknowledge"             |                       |
|         |                                   |                       |
|         |   3. ACK (Acknowledge)            |                       |
|         | --------------------------------> |                       |
|         |   "Confirmed, connection          |                       |
|         |    established"                   |                       |
|         |                                   |                       |
|         |   ==========================     |                       |
|         |     Connection established!       |                       |
|         |   ==========================     |                       |
|         |                                   |                       |
|         |      Data exchange...             |                       |
|         | <------------------------------> |                       |
|                                                                     |
|   After the handshake, data can be transmitted bidirectionally      |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Important Ports

```
+--------------------------------------------------------------------+
|                      IMPORTANT PORTS                                |
+--------------------------------------------------------------------+
|                                                                     |
|   Port  | Protocol  | Service         | Transport                   |
|   ------+-----------+-----------------+----------------------------+
|   20    | FTP-Data  | File transfer   | TCP                         |
|   21    | FTP       | Control channel | TCP                         |
|   22    | SSH       | Secure Shell    | TCP                         |
|   23    | Telnet    | Remote access   | TCP                         |
|   25    | SMTP      | Send email      | TCP                         |
|   53    | DNS       | Name resolution | TCP/UDP                     |
|   67/68 | DHCP      | IP assignment   | UDP                         |
|   80    | HTTP      | Websites        | TCP                         |
|   110   | POP3      | Retrieve email  | TCP                         |
|   143   | IMAP      | Retrieve email  | TCP                         |
|   443   | HTTPS     | Secure web      | TCP                         |
|   3389  | RDP       | Remote Desktop  | TCP                         |
|                                                                     |
|   Port ranges:                                                      |
|   +-------------------------------------------------------------+  |
|   | 0 - 1023      | Well-Known Ports (reserved for system)      |  |
|   | 1024 - 49151  | Registered Ports (registered services)       |  |
|   | 49152 - 65535 | Dynamic Ports (temporary, client side)       |  |
|   +-------------------------------------------------------------+  |
|                                                                     |
+--------------------------------------------------------------------+
```

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **TCP** | Transmission Control Protocol (reliable) |
| **UDP** | User Datagram Protocol (fast) |
| **Port** | Number to identify services |
| **Socket** | Combination of IP address and port |
| **3-Way Handshake** | Connection establishment with TCP |
| **SYN** | Synchronize (connection request) |
| **ACK** | Acknowledge (confirmation) |

---

## Exam Tips

### Common Exam Questions

- How many layers does the TCP/IP model have?
- Difference between TCP vs. UDP?
- Which port belongs to which service?

### Important to Remember

- **TCP/IP = 4 layers** (not 7 like OSI!)
- **TCP:** Reliable, with connection, with ACK
- **UDP:** Fast, without connection, without ACK
- **Port 80** = HTTP, **Port 443** = HTTPS
- **Port 25** = SMTP (send email)
- **3-Way Handshake:** SYN -> SYN-ACK -> ACK

---

## Practice Exercises

### Exercise 1
Name the 4 layers of the TCP/IP model.

**Solution:**
1. Network Access Layer
2. Internet Layer
3. Transport Layer
4. Application Layer

### Exercise 2
When do you use TCP, when UDP?

**Solution:**
**Use TCP for:**
- Websites (HTTP/HTTPS)
- Email (SMTP, POP3, IMAP)
- File transfer (FTP)
- When reliable transmission is important

**Use UDP for:**
- Video streaming
- VoIP telephony
- Online games
- DNS queries
- When speed is more important than 100% reliability

### Exercise 3
Which ports belong to the following services: HTTP, HTTPS, SSH, DNS?

**Solution:**
- HTTP: **Port 80**
- HTTPS: **Port 443**
- SSH: **Port 22**
- DNS: **Port 53**

---

## Cross-References

- [07-01-01 OSI Model](./07-01-01-osi-model.md) - Theoretical reference model
- [07-01-03 Protocols](./07-01-03-protocols.md) - Protocols in detail
- [07-02-01 IPv4](../07-02-ip-addressing/07-02-01-ipv4.md) - IP addressing
