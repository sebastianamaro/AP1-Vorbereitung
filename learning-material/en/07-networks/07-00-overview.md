# Networks - Overview

## Chapter Structure

This chapter covers all exam-relevant topics on networks and communication:

### 07-01 Network Fundamentals
- [07-01-01 OSI Model](./07-01-network-fundamentals/07-01-01-osi-model.md)
- [07-01-02 TCP/IP Model](./07-01-network-fundamentals/07-01-02-tcp-ip-model.md)
- [07-01-03 Protocols](./07-01-network-fundamentals/07-01-03-protocols.md)

### 07-02 IP Addressing
- [07-02-01 IPv4](./07-02-ip-addressing/07-02-01-ipv4.md) (expanded 2025)
- [07-02-02 IPv6](./07-02-ip-addressing/07-02-02-ipv6.md) **[NEW 2025]**
- [07-02-03 Subnetting](./07-02-ip-addressing/07-02-03-subnetting.md)
- [07-02-04 DHCP](./07-02-ip-addressing/07-02-04-dhcp.md)

### 07-03 WLAN
- [07-03-01 WLAN Fundamentals](./07-03-wlan/07-03-01-wlan-fundamentals.md)

### 07-04 Cabling
- [07-04-01 Structured Cabling](./07-04-cabling/07-04-01-structured-cabling.md)
- [07-04-02 Copper Cables](./07-04-cabling/07-04-02-copper-cables.md)

### 07-05 Network Hardware
- [07-05-network-hardware.md](./07-05-network-hardware.md)

### 07-06 Data Transmission
- [07-06-01 Transmission Rates](./07-06-data-transmission/07-06-01-transmission-rates.md) **[NEW 2025]**

### 07-07 Network Troubleshooting
- [07-07-01 Diagnostic Tools](./07-07-network-troubleshooting/07-07-01-diagnostic-tools.md)
- [07-07-02 Troubleshooting](./07-07-network-troubleshooting/07-07-02-troubleshooting.md)

### 07-08 Remote Maintenance
- [07-08-remote-maintenance.md](./07-08-remote-maintenance.md)

### 07-09 Domain Integration
- [07-09-domain-integration.md](./07-09-domain-integration.md) **[NEW 2025]**

---

## Exam Relevance

```
+--------------------------------------------------------------------+
|                        EXAM RELEVANCE                               |
+--------------------------------------------------------------------+
|                                                                     |
|   VERY HIGH (appears almost always)                                 |
|   +------------------------------------------------------------+   |
|   | - OSI model and layer assignment                           |   |
|   | - IPv4 addressing and subnetting                           |   |
|   | - IPv6 fundamentals (NEW 2025)                             |   |
|   | - Network hardware (switch, router, access point)          |   |
|   | - Calculating transmission rates (NEW 2025)                |   |
|   +------------------------------------------------------------+   |
|                                                                     |
|   HIGH                                                              |
|   +------------------------------------------------------------+   |
|   | - DHCP function                                            |   |
|   | - WLAN security                                            |   |
|   | - Domain integration (NEW 2025)                            |   |
|   | - Protocols and ports                                      |   |
|   | - Diagnostic tools (ping, ipconfig)                        |   |
|   +------------------------------------------------------------+   |
|                                                                     |
|   MEDIUM                                                            |
|   +------------------------------------------------------------+   |
|   | - Structured cabling                                       |   |
|   | - Cable categories                                         |   |
|   | - Remote maintenance                                       |   |
|   +------------------------------------------------------------+   |
|                                                                     |
|   ! NO LONGER RELEVANT (removed from 2025 exam catalog)            |
|   +------------------------------------------------------------+   |
|   | - LTE and 5G mobile technologies                           |   |
|   +------------------------------------------------------------+   |
|                                                                     |
+--------------------------------------------------------------------+
```

---

## Topic Overview

```
+--------------------------------------------------------------------+
|                    NETWORK TOPICS OVERVIEW                          |
+--------------------------------------------------------------------+
|                                                                     |
|                       +----------------+                            |
|                       |   NETWORKS     |                            |
|                       +-------+--------+                            |
|                               |                                     |
|    +--------------------------+---------------------------+         |
|    |                          |                           |         |
|    v                          v                           v         |
| +----------+           +--------------+            +----------+     |
| |  MODELS  |           |  ADDRESSING  |            | HARDWARE |     |
| +----------+           +--------------+            +----------+     |
| |- OSI     |           |- IPv4        |            |- Switch  |     |
| |- TCP/IP  |           |- IPv6 (NEW)  |            |- Router  |     |
| |- Layers  |           |- Subnetting  |            |- Access  |     |
| |- Protocols|          |- DHCP        |            |  Point   |     |
| +----------+           +--------------+            +----------+     |
|                                                                     |
|    +--------------------------+---------------------------+         |
|    |                          |                           |         |
|    v                          v                           v         |
| +----------+           +--------------+            +----------+     |
| | CABLING  |           |    WLAN      |            |ADMIN/OPS |     |
| +----------+           +--------------+            +----------+     |
| |- Primary |           |- Standards   |            |- Diagnostics|  |
| |- Secondary|          |- Security    |            |- Remote   |    |
| |- Tertiary|           |- Frequencies |            |- Domain   |    |
| |- Categories|         |              |            |  (NEW)    |    |
| +----------+           +--------------+            +----------+     |
|                                                                     |
+--------------------------------------------------------------------+
```

---

## Important Updates for 2025

| Topic | Status | Details |
|-------|--------|---------|
| **IPv6** | NEW | Fundamentals, structure, differences from IPv4 |
| **Transmission rates** | NEW | Calculations with bit/s, Byte/s |
| **Domain integration** | NEW | Adding a PC to a domain |
| LTE/5G | REMOVED | No longer exam-relevant |

---

## Learning Strategy for This Chapter

```
+--------------------------------------------------------------------+
|                      LEARNING STRATEGY                              |
+--------------------------------------------------------------------+
|                                                                     |
|   1. UNDERSTAND FUNDAMENTALS                                        |
|      - Memorize the OSI model (7 layers)                           |
|      - Understand the TCP/IP model                                  |
|      - Be able to assign protocols to layers                        |
|                                                                     |
|   2. PRACTICE IP ADDRESSING                                         |
|      - Read and interpret IPv4 addresses                            |
|      - Solve subnetting exercises                                   |
|      - Understand IPv6 notation (NEW 2025)                          |
|                                                                     |
|   3. ESTABLISH PRACTICAL RELEVANCE                                  |
|      - Try diagnostic tools on your own PC                          |
|      - Execute ipconfig, ping, tracert                              |
|      - Analyze WLAN settings                                        |
|                                                                     |
|   4. PRACTICE CALCULATIONS (NEW 2025)                               |
|      - Convert transmission rates                                   |
|      - Bit <-> Byte conversion                                      |
|      - Calculate transmission time                                  |
|                                                                     |
+--------------------------------------------------------------------+
```

---

## Cross-References to Other Chapters

- [04-03-04 Personal Firewall](../04-it-security/04-03-protective-measures/04-03-04-personal-firewall.md) - Network security
- [05-04-02 Cloud Computing](../05-it-systems/05-04-virtualization-cloud/05-04-02-cloud-computing.md) - Cloud networking
- [05-02-04 NAS](../05-it-systems/05-02-hardware/05-02-04-nas-availability.md) - Network storage
