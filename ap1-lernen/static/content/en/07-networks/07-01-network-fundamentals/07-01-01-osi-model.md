# OSI Model

## Learning Objectives

After this chapter, you should be able to:
- Know and name the 7 layers of the OSI model
- Understand the tasks of each layer
- Assign protocols and hardware to the layers
- Explain data transport through the layers

---

## Core Content

### What is the OSI Model?

```
+--------------------------------------------------------------------+
|                       OSI MODEL                                     |
+--------------------------------------------------------------------+
|                                                                     |
|   OSI = Open Systems Interconnection                               |
|                                                                     |
|   +-------------------------------------------------------------+  |
|   | The OSI model is a reference model that divides             |  |
|   | communication in networks into 7 layers.                     |  |
|   |                                                              |  |
|   | It describes HOW data is transmitted from an application    |  |
|   | on one computer to an application on another computer.      |  |
|   +-------------------------------------------------------------+  |
|                                                                     |
|   Developed by: ISO (International Organization for                 |
|                 Standardization)                                    |
|                                                                     |
|   Purpose:                                                          |
|   - Standardization of network communication                        |
|   - Vendor independence                                             |
|   - Modular structure (layers can be changed independently)         |
|   - Simplified understanding of complex processes                   |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### The 7 Layers

```
+--------------------------------------------------------------------+
|                    THE 7 OSI LAYERS                                 |
+--------------------------------------------------------------------+
|                                                                     |
|   Layer     |  Name                 |  Description                  |
|   ----------+----------------------+-------------------------------+
|      7      |  Application Layer    |  User interface to network    |
|      6      |  Presentation Layer   |  Data format conversion       |
|      5      |  Session Layer        |  Connection management        |
|      4      |  Transport Layer      |  End-to-end communication     |
|      3      |  Network Layer        |  Logical addressing/routing   |
|      2      |  Data Link Layer      |  Physical addressing/frames   |
|      1      |  Physical Layer       |  Bit transmission             |
|                                                                     |
|   MNEMONIC (from top to bottom):                                    |
|   +-------------------------------------------------------------+  |
|   |  "All People Seem To Need Data Processing"                  |  |
|   |                                                              |  |
|   |   A = Application                                            |  |
|   |   P = Presentation                                           |  |
|   |   S = Session                                                |  |
|   |   T = Transport                                              |  |
|   |   N = Network                                                |  |
|   |   D = Data Link                                              |  |
|   |   P = Physical                                               |  |
|   +-------------------------------------------------------------+  |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Layers in Detail

```
+--------------------------------------------------------------------+
|                LAYER 7: APPLICATION LAYER                           |
+--------------------------------------------------------------------+
|                                                                     |
|   Task:                                                             |
|   +-------------------------------------------------------------+  |
|   | - Interface between network and applications                 |  |
|   | - Provides services for end users                            |  |
|   | - Email, web, file transfer                                  |  |
|   +-------------------------------------------------------------+  |
|                                                                     |
|   Protocols:                                                        |
|   - HTTP/HTTPS (Web)                                                |
|   - FTP (File transfer)                                             |
|   - SMTP, POP3, IMAP (Email)                                        |
|   - DNS (Name resolution)                                           |
|   - DHCP (IP address assignment)                                    |
|                                                                     |
+--------------------------------------------------------------------+

+--------------------------------------------------------------------+
|                LAYER 6: PRESENTATION LAYER                          |
+--------------------------------------------------------------------+
|                                                                     |
|   Task:                                                             |
|   +-------------------------------------------------------------+  |
|   | - Data format conversion                                     |  |
|   | - Encryption/Decryption                                      |  |
|   | - Compression/Decompression                                  |  |
|   | - Character encoding (ASCII, UTF-8)                          |  |
|   +-------------------------------------------------------------+  |
|                                                                     |
|   Examples:                                                         |
|   - SSL/TLS (Encryption)                                            |
|   - JPEG, GIF, MPEG (Encoding)                                      |
|   - ASCII, UTF-8 (Character sets)                                   |
|                                                                     |
+--------------------------------------------------------------------+

+--------------------------------------------------------------------+
|                LAYER 5: SESSION LAYER                               |
+--------------------------------------------------------------------+
|                                                                     |
|   Task:                                                             |
|   +-------------------------------------------------------------+  |
|   | - Establishing and terminating connections (sessions)        |  |
|   | - Synchronization of data exchange                           |  |
|   | - Dialog control (Who sends when?)                           |  |
|   +-------------------------------------------------------------+  |
|                                                                     |
|   Examples:                                                         |
|   - NetBIOS                                                         |
|   - RPC (Remote Procedure Call)                                     |
|                                                                     |
+--------------------------------------------------------------------+
```

```
+--------------------------------------------------------------------+
|                LAYER 4: TRANSPORT LAYER                             |
+--------------------------------------------------------------------+
|                                                                     |
|   Task:                                                             |
|   +-------------------------------------------------------------+  |
|   | - End-to-end connection between processes                    |  |
|   | - Segmentation and reassembly of data                        |  |
|   | - Flow control                                               |  |
|   | - Error control                                              |  |
|   | - Port addressing                                            |  |
|   +-------------------------------------------------------------+  |
|                                                                     |
|   Protocols:                                                        |
|   +-----------------+------------------------------------------+   |
|   | TCP             | Connection-oriented, reliable            |   |
|   |                 | (Websites, email, file transfer)         |   |
|   +-----------------+------------------------------------------+   |
|   | UDP             | Connectionless, fast                     |   |
|   |                 | (Streaming, VoIP, DNS)                   |   |
|   +-----------------+------------------------------------------+   |
|                                                                     |
|   Data unit: SEGMENT                                                |
|                                                                     |
+--------------------------------------------------------------------+

+--------------------------------------------------------------------+
|                LAYER 3: NETWORK LAYER                               |
+--------------------------------------------------------------------+
|                                                                     |
|   Task:                                                             |
|   +-------------------------------------------------------------+  |
|   | - Logical addressing (IP addresses)                          |  |
|   | - Routing (pathfinding between networks)                     |  |
|   | - Forwarding of packets                                      |  |
|   +-------------------------------------------------------------+  |
|                                                                     |
|   Protocols:                                                        |
|   - IP (Internet Protocol) - IPv4, IPv6                             |
|   - ICMP (Ping, Traceroute)                                         |
|   - ARP (IP -> MAC address)                                         |
|                                                                     |
|   Hardware: ROUTER                                                  |
|                                                                     |
|   Data unit: PACKET                                                 |
|                                                                     |
+--------------------------------------------------------------------+

+--------------------------------------------------------------------+
|                LAYER 2: DATA LINK LAYER                             |
+--------------------------------------------------------------------+
|                                                                     |
|   Task:                                                             |
|   +-------------------------------------------------------------+  |
|   | - Physical addressing (MAC addresses)                        |  |
|   | - Error detection (CRC checksum)                             |  |
|   | - Access control to the medium                               |  |
|   | - Framing                                                    |  |
|   +-------------------------------------------------------------+  |
|                                                                     |
|   Protocols/Standards:                                              |
|   - Ethernet                                                        |
|   - WLAN (IEEE 802.11)                                              |
|   - PPP (Point-to-Point Protocol)                                   |
|                                                                     |
|   Hardware: SWITCH, BRIDGE                                          |
|                                                                     |
|   Data unit: FRAME                                                  |
|                                                                     |
+--------------------------------------------------------------------+

+--------------------------------------------------------------------+
|                LAYER 1: PHYSICAL LAYER                              |
+--------------------------------------------------------------------+
|                                                                     |
|   Task:                                                             |
|   +-------------------------------------------------------------+  |
|   | - Transmission of bits over physical medium                  |  |
|   | - Electrical/optical signals                                 |  |
|   | - Connectors, cables, voltages                               |  |
|   | - Transmission rates                                         |  |
|   +-------------------------------------------------------------+  |
|                                                                     |
|   Media:                                                            |
|   - Copper cables (Cat5, Cat6, Cat7)                                |
|   - Fiber optic cables                                              |
|   - Radio waves (WLAN)                                              |
|                                                                     |
|   Hardware: HUB, REPEATER, CABLES, NETWORK CARD                     |
|                                                                     |
|   Data unit: BIT                                                    |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Overview: Layers, Hardware and Protocols

```
+--------------------------------------------------------------------+
|           OSI MODEL: COMPLETE OVERVIEW                              |
+--------------------------------------------------------------------+
|                                                                     |
|  No | Layer           | Hardware      | Protocols     | Unit       |
|  ---+-----------------+---------------+---------------+------------+
|  7  | Application     | Gateway       | HTTP, FTP,    | Data       |
|     |                 |               | SMTP, DNS     |            |
|  ---+-----------------+---------------+---------------+------------+
|  6  | Presentation    |               | SSL/TLS,      | Data       |
|     |                 |               | JPEG, ASCII   |            |
|  ---+-----------------+---------------+---------------+------------+
|  5  | Session         |               | NetBIOS, RPC  | Data       |
|  ---+-----------------+---------------+---------------+------------+
|  4  | Transport       |               | TCP, UDP      | Segment    |
|  ---+-----------------+---------------+---------------+------------+
|  3  | Network         | Router        | IP, ICMP      | Packet     |
|  ---+-----------------+---------------+---------------+------------+
|  2  | Data Link       | Switch,Bridge | Ethernet,WLAN | Frame      |
|  ---+-----------------+---------------+---------------+------------+
|  1  | Physical        | Hub,Repeater, | -             | Bit        |
|     |                 | Cables        |               |            |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Data Encapsulation

```
+--------------------------------------------------------------------+
|                      DATA ENCAPSULATION                             |
+--------------------------------------------------------------------+
|                                                                     |
|   When sending, data is passed through the layers from top          |
|   to bottom. Each layer adds a header:                              |
|                                                                     |
|   Layer 7-5:  +------------------------------------+                |
|               |             DATA                   |                |
|               +------------------------------------+                |
|                              |                                      |
|   Layer 4:    +----+-------------------------------+                |
|   (Transport) |TCP |            DATA              | = Segment      |
|               +----+-------------------------------+                |
|                              |                                      |
|   Layer 3:    +----+----+--------------------------+                |
|   (Network)   | IP |TCP |         DATA            | = Packet       |
|               +----+----+--------------------------+                |
|                              |                                      |
|   Layer 2:    +----+----+----+--------------+-----+                |
|   (Data Link) |ETH | IP |TCP |    DATA      | CRC | = Frame        |
|               +----+----+----+--------------+-----+                |
|                              |                                      |
|   Layer 1:    01101001 01101110 01100110 01101111...  = Bits       |
|                                                                     |
|   When receiving, the process is reversed (decapsulation)           |
|                                                                     |
+--------------------------------------------------------------------+
```

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **OSI** | Open Systems Interconnection |
| **Encapsulation** | Adding header information per layer |
| **PDU** | Protocol Data Unit (data unit per layer) |
| **Segment** | Data unit Layer 4 |
| **Packet** | Data unit Layer 3 |
| **Frame** | Data unit Layer 2 |
| **Header** | Control information before the payload |

---

## Exam Tips

### Common Exam Questions

- Name the 7 OSI layers
- Which layer does a router/switch belong to?
- Assign protocols to the layers

### Important to Remember

- **Know the 7 layers by heart!**
- **Router** = Layer 3 (Network, IP addresses)
- **Switch** = Layer 2 (Data Link, MAC addresses)
- **Hub** = Layer 1 (physical only)
- **TCP** = Layer 4 (reliable)
- **IP** = Layer 3 (addressing)
- Mnemonic: "All People Seem To Need Data Processing"

---

## Practice Exercises

### Exercise 1
Name the 7 layers of the OSI model from bottom to top.

**Solution:**
1. Physical Layer
2. Data Link Layer
3. Network Layer
4. Transport Layer
5. Session Layer
6. Presentation Layer
7. Application Layer

### Exercise 2
Assign: Router, Switch, Hub - which OSI layer do they operate on?

**Solution:**
- **Hub:** Layer 1 (Physical) - only forwards electrical signals
- **Switch:** Layer 2 (Data Link) - works with MAC addresses
- **Router:** Layer 3 (Network) - works with IP addresses

### Exercise 3
Which OSI layer do the following protocols belong to: HTTP, IP, TCP, Ethernet?

**Solution:**
- **HTTP:** Layer 7 (Application)
- **TCP:** Layer 4 (Transport)
- **IP:** Layer 3 (Network)
- **Ethernet:** Layer 2 (Data Link)

---

## Cross-References

- [07-01-02 TCP/IP Model](./07-01-02-tcp-ip-model.md) - Practical reference model
- [07-01-03 Protocols](./07-01-03-protocols.md) - Important network protocols
- [07-05 Network Hardware](../07-05-network-hardware.md) - Router, Switch, Hub
