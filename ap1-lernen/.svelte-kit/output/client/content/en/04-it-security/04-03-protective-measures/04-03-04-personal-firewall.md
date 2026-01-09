# Personal Firewall

## Learning Objectives

After this chapter, you should be able to:
- Explain the function of a personal firewall
- Know the difference from hardware firewalls
- Configure typical settings
- Understand the limitations of a personal firewall

---

## Core Content

### What is a Personal Firewall?

A **Personal Firewall** (also host firewall or desktop firewall) is software on an end device that controls the network traffic of this single device.

```
+------------------------------------------------------------------+
|              PERSONAL FIREWALL vs. NETWORK FIREWALL               |
+------------------------------------------------------------------+
|                                                                   |
|  PERSONAL FIREWALL                 NETWORK FIREWALL               |
|  +----------------------+         +----------------------+        |
|  |    +------------+    |         |                      |        |
|  |    |  Computer  |    |         |  [Router/Firewall]   |        |
|  |    |   with     |    |         |         |            |        |
|  |    | Firewall   |    |         |    +----+----+       |        |
|  |    | Software   |    |         |    |         |       |        |
|  |    +------------+    |         |   [PC]    [PC]       |        |
|  |                      |         |                      |        |
|  |  Protects single     |         |  Protects entire     |        |
|  |  device              |         |  network             |        |
|  +----------------------+         +----------------------+        |
|                                                                   |
+------------------------------------------------------------------+
```

---

### Comparison: Personal Firewall vs. Hardware Firewall

| Aspect | Personal Firewall | Hardware Firewall |
|--------|-------------------|-------------------|
| **Location** | Software on PC | Separate device |
| **Protection Scope** | Single device | Entire network |
| **Control** | Application-specific possible | Network-based |
| **Cost** | Often free (Windows) | Purchase cost |
| **Resources** | Uses PC resources | Own hardware |
| **Mobility** | Protects on the go too | Only in local network |

---

### Functions of a Personal Firewall

```
+------------------------------------------------------------------+
|              PERSONAL FIREWALL FUNCTIONS                          |
+------------------------------------------------------------------+
|                                                                   |
|  +--------------------------------------------------------------+ |
|  |                  PACKET FILTERING                             | |
|  |  * Checks incoming/outgoing packets                           | |
|  |  * Filters by IP, port, protocol                              | |
|  +--------------------------------------------------------------+ |
|                                                                   |
|  +--------------------------------------------------------------+ |
|  |                APPLICATION CONTROL                            | |
|  |  * Controls which programs may access internet                | |
|  |  * Asks for unknown connections                               | |
|  +--------------------------------------------------------------+ |
|                                                                   |
|  +--------------------------------------------------------------+ |
|  |                    LOGGING                                    | |
|  |  * Records connection attempts                                | |
|  |  * Enables analysis during incidents                          | |
|  +--------------------------------------------------------------+ |
|                                                                   |
+------------------------------------------------------------------+
```

#### Detailed Functions

| Function | Description |
|----------|-------------|
| **Packet Filtering** | Allows/blocks packets according to rules |
| **Application Control** | Which programs may communicate? |
| **Port Blocking** | Block certain ports |
| **Stateful Inspection** | Monitor connection state |
| **Logging** | Record connection attempts |
| **Network Profile** | Different rules for different networks |

---

### Windows Firewall

The **Windows Defender Firewall** is a built-in personal firewall in Windows.

#### Network Profiles

| Profile | Description | Security Level |
|---------|-------------|----------------|
| **Domain** | Computer in corporate domain | Medium |
| **Private** | Trusted home network | Low |
| **Public** | Public WLAN (cafe, airport) | High |

#### Typical Settings

```
+----------------------------------------------------------------+
|              WINDOWS FIREWALL - RULE TYPES                      |
+----------------------------------------------------------------+
|                                                                 |
|  INBOUND RULES:                                                 |
|  * Which traffic may come from outside to the PC?               |
|  * Default: Blocked (except allowed exceptions)                 |
|                                                                 |
|  OUTBOUND RULES:                                                |
|  * Which traffic may go from PC to outside?                     |
|  * Default: Allowed (can be restricted)                         |
|                                                                 |
|  CONNECTION SECURITY RULES:                                     |
|  * IPsec settings                                               |
|  * Authentication between computers                             |
|                                                                 |
+----------------------------------------------------------------+
```

#### Accessing Windows Firewall

| Method | Location |
|--------|----------|
| **Simple** | Settings -> Update and Security -> Windows Security |
| **Advanced** | wf.msc (Windows Firewall with Advanced Security) |
| **Control Panel** | Control Panel -> Windows Defender Firewall |

---

### Creating Firewall Rules

#### Rule Components

| Component | Description | Example |
|-----------|-------------|---------|
| **Protocol** | TCP, UDP, ICMP | TCP |
| **Port** | Destination/source port | 80 (HTTP) |
| **Program** | Application path | C:\Programs\App.exe |
| **IP Address** | Source/destination | 192.168.1.0/24 |
| **Action** | Allow/Block | Block |
| **Profile** | When does the rule apply | Public |

#### Example: Creating a Rule

```
Rule: Browser (Chrome) may access internet

Type:          Outbound
Program:       C:\Program Files\Google\Chrome\Application\chrome.exe
Protocol:      TCP
Port:          80 (HTTP), 443 (HTTPS)
Action:        Allow
Profiles:      All (Domain, Private, Public)
```

---

### Advantages and Disadvantages

#### Advantages

| Advantage | Description |
|-----------|-------------|
| **Application Control** | Can control individual programs |
| **Mobility** | Protects outside home network too |
| **Free** | Built into Windows |
| **Granular Control** | Fine-grained setting options |

#### Disadvantages

| Disadvantage | Description |
|--------------|-------------|
| **Resource Consumption** | Uses CPU and RAM |
| **Complexity** | Configuration can be complicated |
| **Bypassable** | Malware can disable firewall |
| **Single Device Only** | Does not protect the network |

---

### Best Practices

| Recommendation | Description |
|----------------|-------------|
| **Always enable** | Never completely disable firewall |
| **Use profiles** | Public = highest security |
| **Only necessary exceptions** | Do not randomly open ports |
| **Check regularly** | Review installed rules |
| **Enable logging** | For troubleshooting and analysis |
| **Combine with hardware firewall** | Defense in Depth |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Personal Firewall** | Software firewall on single PC |
| **Hardware Firewall** | Dedicated firewall device |
| **Packet Filter** | Filtering by IP/port/protocol |
| **Stateful Inspection** | Connection state-based filtering |
| **Network Profile** | Rule set for certain network types |
| **Inbound/Outbound** | Direction of data traffic |

---

## Exam Tips

### Frequent Exam Questions

- What is a personal firewall?
- Difference between personal firewall and hardware firewall
- What network profiles exist in Windows?
- When should the "Public" profile be used?

### Important to Remember

- **Personal Firewall** = Software on the device
- **Hardware Firewall** = Separate device in network
- **3 Windows Profiles:** Domain, Private, Public
- **Public** = Highest security (for foreign networks)

---

## Practice Exercises

### Exercise 1
What is the difference between a personal firewall and a hardware firewall?

**Solution:**
- **Personal Firewall:** Software on a single computer, protects only this device, can filter application-specifically
- **Hardware Firewall:** Dedicated device (e.g., in router), protects entire network, works network-based

The personal firewall also protects outside the home network, while the hardware firewall only protects in the local network.

### Exercise 2
Which network profile should be selected in a public WLAN (e.g., in a cafe)?

**Solution:** The profile **"Public"** should be selected. This profile has the highest security settings and largely blocks incoming connections. This prevents other users on the same WLAN from accessing the computer.

### Exercise 3
Name two advantages and two disadvantages of a personal firewall.

**Solution:**
**Advantages:**
1. Application control - can control individual programs
2. Mobility - protects on the go in foreign networks

**Disadvantages:**
1. Resource consumption - uses CPU and memory
2. Can be bypassed - malware can disable the firewall

### Exercise 4
What is the difference between inbound and outbound firewall rules?

**Solution:**
- **Inbound Rules:** Control connections established from outside to the computer (e.g., when someone accesses a web server)
- **Outbound Rules:** Control connections established from the computer to outside (e.g., when the browser calls up a website)

By default, Windows blocks incoming connections and allows outgoing ones.

---

## Cross-References

- [04-03-01 Technical Measures](./04-03-01-technical-measures.md) - Firewall overview
- [04-03-03 OS Hardening](./04-03-03-os-hardening.md) - Firewall as hardening measure
- [07-01-03 Protocols](../../07-networks/07-01-network-fundamentals/07-01-03-protocols.md) - Network protocols
- [07-02-01 IPv4](../../07-networks/07-02-ip-addressing/07-02-01-ipv4.md) - IP addresses
