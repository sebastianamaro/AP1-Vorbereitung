# Network Hardware

## Learning Objectives

After this chapter you should be able to:
- Know the most important network devices
- Understand the differences between hub, switch, and router
- Assign devices to OSI layers
- Explain how the devices work

---

## Core Content

### Network Device Overview

```
+--------------------------------------------------------------------+
|                   NETWORK HARDWARE OVERVIEW                         |
+--------------------------------------------------------------------+
|                                                                     |
|   +-------------------------------------------------------------+ |
|   |                                                              | |
|   |   OSI Layer   | Device         | Works with                 | |
|   |   ------------+----------------+----------------------------| |
|   |   Layer 1     | Hub, Repeater  | Bits, Signals              | |
|   |   Layer 2     | Switch, Bridge | MAC addresses, Frames      | |
|   |   Layer 3     | Router         | IP addresses, Packets      | |
|   |   Layer 7     | Gateway        | Application protocols      | |
|   |                                                              | |
|   +-------------------------------------------------------------+ |
|                                                                     |
|   Most important distinction:                                       |
|   +-------------------------------------------------------------+ |
|   |                                                              | |
|   |   HUB      ->  Sends to ALL ports (dumb)                    | |
|   |   SWITCH   ->  Sends only to target port (intelligent)      | |
|   |   ROUTER   ->  Connects different networks                  | |
|   |                                                              | |
|   +-------------------------------------------------------------+ |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Hub (Layer 1)

```
+--------------------------------------------------------------------+
|                          HUB                                        |
+--------------------------------------------------------------------+
|                                                                     |
|   OSI Layer: 1 (Physical)                                          |
|                                                                     |
|   How it works:                                                     |
|   +-------------------------------------------------------------+ |
|   |                                                              | |
|   |   A hub receives a signal and FORWARDS IT TO ALL            | |
|   |   other ports (broadcast).                                   | |
|   |                                                              | |
|   |        PC A          PC B          PC C          PC D       | |
|   |          |            |             |             |         | |
|   |          v            v             v             v         | |
|   |   +------+------------+-------------+-------------+------+  | |
|   |   |                      HUB                              |  | |
|   |   +-------------------------------------------------------+  | |
|   |                                                              | |
|   |   PC A sends to PC C:                                       | |
|   |   -> Hub sends to B, C AND D                                | |
|   |   -> Only C processes the packet                            | |
|   |                                                              | |
|   +-------------------------------------------------------------+ |
|                                                                     |
|   Characteristics:                                                  |
|   - "Dumb" device - no intelligence                                |
|   - All devices share the bandwidth (collision domain)             |
|   - Creates unnecessary network traffic                            |
|   - Security risk (everyone sees all packets)                      |
|   - Today OBSOLETE - replaced by switches                          |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Switch (Layer 2)

```
+--------------------------------------------------------------------+
|                         SWITCH                                      |
+--------------------------------------------------------------------+
|                                                                     |
|   OSI Layer: 2 (Data Link)                                         |
|                                                                     |
|   How it works:                                                     |
|   +-------------------------------------------------------------+ |
|   |                                                              | |
|   |   A switch learns MAC addresses and forwards packets only   | |
|   |   to the port where the target device is connected.         | |
|   |                                                              | |
|   |        PC A          PC B          PC C          PC D       | |
|   |     MAC: AA        MAC: BB      MAC: CC       MAC: DD       | |
|   |          |            |             |             |         | |
|   |          v            v             v             v         | |
|   |   +------+------------+-------------+-------------+------+  | |
|   |   |                    SWITCH                             |  | |
|   |   |   MAC table:                                          |  | |
|   |   |   Port 1 -> AA                                        |  | |
|   |   |   Port 2 -> BB                                        |  | |
|   |   |   Port 3 -> CC                                        |  | |
|   |   |   Port 4 -> DD                                        |  | |
|   |   +-------------------------------------------------------+  | |
|   |                                                              | |
|   |   PC A sends to PC C:                                       | |
|   |   -> Switch sends ONLY to Port 3 (where CC is)              | |
|   |   -> B and D receive nothing                                | |
|   |                                                              | |
|   +-------------------------------------------------------------+ |
|                                                                     |
|   Characteristics:                                                  |
|   - Works with MAC addresses                                        |
|   - Each port has its own collision domain (full bandwidth)        |
|   - Learns automatically (MAC address table)                       |
|   - No broadcasts to all ports (only to target)                    |
|   - Standard in modern networks                                    |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Router (Layer 3)

```
+--------------------------------------------------------------------+
|                         ROUTER                                      |
+--------------------------------------------------------------------+
|                                                                     |
|   OSI Layer: 3 (Network)                                           |
|                                                                     |
|   How it works:                                                     |
|   +-------------------------------------------------------------+ |
|   |                                                              | |
|   |   A router connects different networks and forwards         | |
|   |   packets based on IP addresses.                             | |
|   |                                                              | |
|   |   Network A                    Network B                     | |
|   |   192.168.1.0/24                192.168.2.0/24              | |
|   |                                                              | |
|   |   +----+  +----+            +----+  +----+                  | |
|   |   | PC |  | PC |            | PC |  | PC |                  | |
|   |   |.10 |  |.20 |            |.10 |  |.20 |                  | |
|   |   +--+-+  +--+-+            +--+-+  +--+-+                  | |
|   |      +---+---+                 +---+---+                     | |
|   |          |                         |                        | |
|   |          |      +---------+       |                        | |
|   |          +------| ROUTER  |-------+                        | |
|   |                 | .1    .1|                                 | |
|   |                 +---------+                                 | |
|   |                                                              | |
|   |   Router has IP in each network (Default Gateway)           | |
|   |                                                              | |
|   +-------------------------------------------------------------+ |
|                                                                     |
|   Characteristics:                                                  |
|   - Works with IP addresses                                        |
|   - Connects different networks (e.g., LAN <-> Internet)          |
|   - Uses routing tables                                            |
|   - Separates broadcast domains                                    |
|   - Often integrated with DHCP, NAT, Firewall                     |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Comparison Hub - Switch - Router

```
+--------------------------------------------------------------------+
|              HUB vs. SWITCH vs. ROUTER                              |
+--------------------------------------------------------------------+
|                                                                     |
|   Property       | Hub        | Switch     | Router               |
|   ---------------+------------+------------+---------------------  |
|   OSI Layer      | 1          | 2          | 3                    |
|   Addressing     | None       | MAC        | IP                   |
|   Forwarding     | All Ports  | Target only| Target network only  |
|   Intelligence   | None       | Medium     | High                 |
|   Broadcast      | Yes        | Yes        | No (separates)       |
|   Networks       | 1          | 1          | Multiple             |
|   Bandwidth      | Shared     | Per Port   | Per Interface        |
|   Price          | Low        | Medium     | Higher               |
|   Status         | Obsolete   | Standard   | Standard             |
|                                                                     |
|   Application area:                                                 |
|   +-------------------------------------------------------------+ |
|   | Hub:    No longer recommended                                | |
|   | Switch: Within a network (LAN)                               | |
|   | Router: Between networks (LAN <-> WAN/Internet)              | |
|   +-------------------------------------------------------------+ |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Additional Network Devices

```
+--------------------------------------------------------------------+
|                  ADDITIONAL NETWORK DEVICES                         |
+--------------------------------------------------------------------+
|                                                                     |
|   ACCESS POINT (AP)                                                |
|   +------------------------------------------------------------+  |
|   | - Connects WLAN devices to the LAN                         |  |
|   | - Works at Layer 2                                         |  |
|   | - Often integrated in router (WLAN router)                 |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   REPEATER                                                         |
|   +------------------------------------------------------------+  |
|   | - Amplifies signals                                        |  |
|   | - Increases range                                          |  |
|   | - Layer 1                                                  |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   BRIDGE                                                           |
|   +------------------------------------------------------------+  |
|   | - Connects two network segments                            |  |
|   | - Works with MAC addresses                                 |  |
|   | - Layer 2 (like switch, but only 2 ports)                 |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   MODEM                                                            |
|   +------------------------------------------------------------+  |
|   | - Modulator/Demodulator                                    |  |
|   | - Converts digital signals <-> analog signals              |  |
|   | - For DSL, cable, fiber connections                        |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   FIREWALL                                                         |
|   +------------------------------------------------------------+  |
|   | - Filters network traffic according to rules               |  |
|   | - Protects against unauthorized access                     |  |
|   | - Hardware or software                                     |  |
|   | - Often integrated in router                               |  |
|   +------------------------------------------------------------+  |
|                                                                     |
+--------------------------------------------------------------------+
```

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Hub** | Distributes signals to all ports (Layer 1) |
| **Switch** | Forwards to target port (Layer 2) |
| **Router** | Connects networks (Layer 3) |
| **Access Point** | WLAN access point |
| **MAC table** | Mapping MAC address <-> port |
| **Routing table** | Mapping network <-> interface |
| **Default Gateway** | Router IP for external communication |

---

## Exam Tips

### Common Exam Questions

- Difference Hub vs. Switch?
- Which OSI layer does a router belong to?
- What is a Default Gateway?

### Important to Remember

- **Hub** = Layer 1, sends to ALL
- **Switch** = Layer 2, MAC addresses, target port only
- **Router** = Layer 3, IP addresses, connects networks
- **Hub is obsolete** - always use switch today
- **Default Gateway** = Router IP for Internet access

---

## Practice Exercises

### Exercise 1
Why are switches better than hubs?

**Solution:**
Switches are better because:
- They send only to the **target port** (hub: to all)
- Each port has its **own bandwidth** (hub: shared bandwidth)
- **Fewer collisions** and network traffic
- **More secure** - others don't see packets
- **Higher performance** in the network

### Exercise 2
Assign: Hub, Switch, Router - which OSI layer?

**Solution:**
- **Hub:** Layer 1 (Physical)
- **Switch:** Layer 2 (Data Link)
- **Router:** Layer 3 (Network)

### Exercise 3
When do you need a router instead of a switch?

**Solution:**
A router is needed when:
- **Different networks** need to be connected
- Access to the **Internet** is required
- **IP routing** between subnets is necessary
- **Broadcast domains** need to be separated

A switch is sufficient when all devices are in the **same network**.

---

## Cross-References

- [07-01-01 OSI Model](./07-01-network-fundamentals/07-01-01-osi-model.md) - Layer assignment
- [07-02-01 IPv4](./07-02-ip-addressing/07-02-01-ipv4.md) - IP addresses for routers
- [07-03-01 WLAN Fundamentals](./07-03-wlan/07-03-01-wlan-fundamentals.md) - Access Points
- [04-03-04 Personal Firewall](../04-it-security/04-03-protective-measures/04-03-04-personal-firewall.md) - Firewalls
