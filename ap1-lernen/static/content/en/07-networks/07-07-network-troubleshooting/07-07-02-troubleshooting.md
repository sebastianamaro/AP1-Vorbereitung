# Systematic Network Troubleshooting

## Learning Objectives

After this section you should be able to:
- Apply a systematic approach to troubleshooting
- Categorize errors by OSI layers
- Identify and resolve typical network problems
- Distinguish the Bottom-Up and Top-Down methods

---

## Core Content

### Systematic Approach

```
+---------------------------------------------------------------------+
|           SYSTEMATIC TROUBLESHOOTING - 6 STEPS                       |
+---------------------------------------------------------------------+
|                                                                      |
|  +-------------------------------------------------------------+    |
|  | 1. IDENTIFY PROBLEM                                         |    |
|  |    -> What exactly is not working?                          |    |
|  |    -> When did the problem start?                           |    |
|  |    -> Who is affected (one user/all)?                       |    |
|  +-------------------------------------------------------------+    |
|                            |                                        |
|                            v                                        |
|  +-------------------------------------------------------------+    |
|  | 2. GATHER INFORMATION                                       |    |
|  |    -> Document error messages                               |    |
|  |    -> Ask about recent changes                              |    |
|  |    -> Use network diagnostic tools                          |    |
|  +-------------------------------------------------------------+    |
|                            |                                        |
|                            v                                        |
|  +-------------------------------------------------------------+    |
|  | 3. FORM HYPOTHESIS                                          |    |
|  |    -> Determine most likely cause                           |    |
|  |    -> Narrow down OSI layer                                 |    |
|  +-------------------------------------------------------------+    |
|                            |                                        |
|                            v                                        |
|  +-------------------------------------------------------------+    |
|  | 4. TEST HYPOTHESIS                                          |    |
|  |    -> One change at a time!                                 |    |
|  |    -> Document result                                       |    |
|  +-------------------------------------------------------------+    |
|                            |                                        |
|                            v                                        |
|  +-------------------------------------------------------------+    |
|  | 5. IMPLEMENT SOLUTION                                       |    |
|  |    -> Fix problem                                           |    |
|  |    -> Verify functionality                                  |    |
|  +-------------------------------------------------------------+    |
|                            |                                        |
|                            v                                        |
|  +-------------------------------------------------------------+    |
|  | 6. DOCUMENT                                                 |    |
|  |    -> Record problem and solution                           |    |
|  |    -> Update knowledge base                                 |    |
|  +-------------------------------------------------------------+    |
|                                                                      |
+---------------------------------------------------------------------+
```

### Troubleshooting by OSI Layers

#### Bottom-Up Method (recommended)
Starts at Layer 1 (physical) and works upward.

```
+---------------------------------------------------------------------+
|                   BOTTOM-UP METHOD                                   |
+---------------------------------------------------------------------+
|                                                                      |
|  Layer 7   +-----------------------------------------------------+   |
|  Applicat. | Browser working? Email client?                      |   |
|            +-----------------------------------------------------+   |
|                                    ^                                |
|  Layer 4   +-----------------------------------------------------+   |
|  Transport | netstat -an -> Ports open? Connections active?      |   |
|            +-----------------------------------------------------+   |
|                                    ^                                |
|  Layer 3   +-----------------------------------------------------+   |
|  Network   | ping Gateway? ping 8.8.8.8? IP address correct?     |   |
|            +-----------------------------------------------------+   |
|                                    ^                                |
|  Layer 2   +-----------------------------------------------------+   |
|  Data Link | MAC address present? Switch port active?            |   |
|            +-----------------------------------------------------+   |
|                                    ^                                |
|  Layer 1   +-----------------------------------------------------+   |
|  Physical  | Cable plugged in? Link LED on? Cable defective?     |   |
|            +-----------------------------------------------------+   |
|                                                                      |
|  START HERE -> First check if physical connection exists            |
|                                                                      |
+---------------------------------------------------------------------+
```

#### Top-Down Method
Starts at Layer 7 (application) - useful when a specific service is not working.

### Check Schema by Layers

| Layer | Check | Tools |
|-------|-------|-------|
| **1 - Physical** | Cables, LEDs, connectors | Visual inspection, cable tester |
| **2 - Data Link** | MAC address, switch | ipconfig /all, switch logs |
| **3 - Network** | IP, gateway, routing | ping, tracert, ipconfig |
| **4 - Transport** | Ports, firewall | netstat, telnet |
| **7 - Application** | Services, DNS | nslookup, browser |

### Typical Error Patterns and Solutions

```
+---------------------------------------------------------------------+
|                 COMMON NETWORK PROBLEMS                              |
+---------------------------------------------------------------------+
|                                                                      |
|  SYMPTOM                    | LIKELY CAUSE                          |
|  ---------------------------------------------------------------    |
|                                                                      |
|  No network                 | -> Cable not plugged in               |
|  (Link LED off)             | -> Cable defective                    |
|                             | -> Switch port disabled               |
|  ---------------------------------------------------------------    |
|                                                                      |
|  "Limited                   | -> No DHCP server reachable           |
|  Connectivity"              | -> APIPA address (169.254.x.x)        |
|                             | -> Wrong VLAN                         |
|  ---------------------------------------------------------------    |
|                                                                      |
|  ping Gateway OK            | -> DNS problem                        |
|  ping google.com ERROR      | -> Check nslookup                     |
|                             | -> Change DNS server                  |
|  ---------------------------------------------------------------    |
|                                                                      |
|  Slow connection            | -> Duplex mismatch                    |
|                             | -> Network overload                   |
|                             | -> Bad cable                          |
|  ---------------------------------------------------------------    |
|                                                                      |
|  Website not reachable      | -> Firewall blocking                  |
|  (ping works)               | -> Port 80/443 blocked                |
|                             | -> Proxy settings                     |
|                                                                      |
+---------------------------------------------------------------------+
```

### Systematic Ping Test

```
+---------------------------------------------------------------------+
|              PING DIAGNOSIS (systematic)                             |
+---------------------------------------------------------------------+
|                                                                      |
|  1. ping 127.0.0.1  (Localhost)                                     |
|     |                                                                |
|     +-- ERROR -> TCP/IP stack defective -> Reinstall network        |
|     |                                                                |
|     +-- OK -> Continue with step 2                                  |
|              |                                                       |
|  2. ping [own IP]                                                   |
|     |                                                                |
|     +-- ERROR -> Network adapter problem                            |
|     |                                                                |
|     +-- OK -> Continue with step 3                                  |
|              |                                                       |
|  3. ping [Gateway]                                                  |
|     |                                                                |
|     +-- ERROR -> Local network problem (cable, switch, VLAN)        |
|     |                                                                |
|     +-- OK -> Continue with step 4                                  |
|              |                                                       |
|  4. ping 8.8.8.8 (Google DNS)                                       |
|     |                                                                |
|     +-- ERROR -> Routing problem or Internet outage                 |
|     |                                                                |
|     +-- OK -> Continue with step 5                                  |
|              |                                                       |
|  5. ping google.com                                                 |
|     |                                                                |
|     +-- ERROR -> DNS problem -> Check nslookup                      |
|     |                                                                |
|     +-- OK -> Network is working!                                   |
|                                                                      |
+---------------------------------------------------------------------+
```

### Recognizing APIPA Addresses

```
+---------------------------------------------------------------------+
|                    APIPA ADDRESS                                     |
+---------------------------------------------------------------------+
|                                                                      |
|  IP Address: 169.254.x.x  <- Automatically assigned!                |
|                                                                      |
|  Meaning:                                                           |
|  -> No DHCP server reachable                                        |
|  -> Windows assigns itself an APIPA address                         |
|  -> Communication only possible with other APIPA devices            |
|                                                                      |
|  Causes:                                                            |
|  -> DHCP server down                                                |
|  -> Wrong VLAN                                                      |
|  -> Network cable not properly connected                            |
|  -> DHCP pool exhausted                                             |
|                                                                      |
|  Solution:                                                          |
|  1. ipconfig /release                                               |
|  2. ipconfig /renew                                                 |
|  3. If still APIPA -> Check DHCP server                             |
|                                                                      |
+---------------------------------------------------------------------+
```

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Bottom-Up** | Troubleshooting from Layer 1 upward |
| **Top-Down** | Troubleshooting from Layer 7 downward |
| **APIPA** | Automatic Private IP Addressing (169.254.x.x) |
| **Duplex Mismatch** | Different duplex settings |
| **Link LED** | Shows physical connection |
| **Troubleshooting** | Systematic error diagnosis |

---

## Exam Tips

1. **OSI Layers in troubleshooting:**
   - Layer 1 = physical problems (cables, connectors)
   - Layer 3 = IP problems (address, gateway)
   - Layer 7 = application problems (DNS, services)

2. **Typical exam questions:**
   - Which method for "no network"? -> Bottom-Up
   - What does APIPA address mean? -> No DHCP reachable
   - What step after successful gateway ping? -> External IP

3. **Important:** Always test only ONE change, then check result!

---

## Practice Exercises

### Exercise 1: Error Analysis

An employee reports: "I cannot open any websites, but email works."

Analyze the problem systematically:
a) Which layer is probably affected?
b) Which tests would you perform?
c) What is the most likely cause?

<details>
<summary>Show solution</summary>

a) **Layer 7 (Application)** - since email works, the lower layers are fine.

b) **Tests:**
1. `ping google.com` - probably works
2. Check browser proxy settings
3. Check firewall rules for HTTP/HTTPS (Port 80/443)
4. Test with different browser

c) **Most likely causes:**
- Proxy server incorrectly configured
- Firewall blocking port 80/443
- Browser setting (e.g., offline mode)

</details>

### Exercise 2: Systematic Diagnosis

A PC shows the following results:
- `ping 127.0.0.1` -> OK
- `ping 192.168.1.50` (own IP) -> OK
- `ping 192.168.1.1` (gateway) -> Error
- Link LED on switch -> ON

Where is the problem?

<details>
<summary>Show solution</summary>

**Analysis:**
- TCP/IP stack works (127.0.0.1 OK)
- Network adapter works (own IP OK)
- Physical connection exists (Link LED on)
- Gateway not reachable

**Problem:** Layer 2/3 - Local network

**Possible causes:**
1. **Wrong VLAN** - PC and gateway in different VLANs
2. **Wrong subnet mask** - PC cannot reach gateway
3. **Wrong gateway address** configured
4. **Switch port problem** (MAC filtering, port security)

**Next steps:**
- Check `ipconfig /all` (subnet mask, gateway)
- Check VLAN assignment on switch
- Check ARP table (`arp -a`)

</details>

### Exercise 3: APIPA Problem

At ConSystem GmbH, several employees in a department complain about network problems. A technician finds that all affected PCs have IP addresses in the 169.254.x.x range.

a) What does this address mean?
b) What is the most likely cause?
c) What steps for problem resolution do you recommend?

<details>
<summary>Show solution</summary>

a) **APIPA address (Automatic Private IP Addressing)**
- Windows assigns this automatically
- Means: No DHCP server reachable

b) **Most likely causes:**
- DHCP server down or overloaded
- DHCP pool exhausted (no addresses available)
- Network problem between department and DHCP server
- Switch problem or wrong VLAN

c) **Solution steps:**
1. Check DHCP server status (is service running?)
2. Check DHCP pool (addresses available?)
3. Check network connection to DHCP server
4. Verify VLAN configuration
5. On affected PCs: `ipconfig /release` then `ipconfig /renew`
6. If DHCP server OK: Check switch/routing between department and server

</details>

---

## Cross-References

- [Diagnostic Tools](07-07-01-diagnostic-tools.md) - ipconfig, ping, tracert
- [DHCP](../07-02-ip-addressing/07-02-04-dhcp.md) - DHCP fundamentals
- [OSI Model](../07-01-network-fundamentals/07-01-01-osi-model.md) - Layer model
- [Network Hardware](../07-05-network-hardware.md) - Switch and router
