# Network Diagnostic Tools

## Learning Objectives

After this chapter you should be able to:
- Know important network diagnostic tools
- Apply the command line commands
- Systematically analyze network problems
- Interpret the output of the tools

---

## Core Content

### Diagnostic Tools Overview

```
+--------------------------------------------------------------------+
|                   DIAGNOSTIC TOOLS OVERVIEW                         |
+--------------------------------------------------------------------+
|                                                                     |
|   Command          | Windows        | Linux/Mac     | Function     |
|   -----------------+----------------+---------------+--------------|
|   IP Configuration | ipconfig       | ifconfig/ip   | Show IP      |
|   Reachability     | ping           | ping          | Connection   |
|   Trace Route      | tracert        | traceroute    | Show path    |
|   DNS Query        | nslookup       | nslookup/dig  | Resolve names|
|   Connections      | netstat        | netstat/ss    | Show ports   |
|   ARP Table        | arp -a         | arp -a        | MAC-IP map   |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### ipconfig / ifconfig

```
+--------------------------------------------------------------------+
|                    IPCONFIG (Windows)                               |
+--------------------------------------------------------------------+
|                                                                     |
|   Shows the IP configuration of the computer.                      |
|                                                                     |
|   Important commands:                                               |
|   +------------------------------------------------------------+  |
|   | ipconfig              | Shows brief overview               |  |
|   | ipconfig /all         | Shows all details (incl. MAC)      |  |
|   | ipconfig /release     | Releases DHCP address              |  |
|   | ipconfig /renew       | Requests new DHCP address          |  |
|   | ipconfig /flushdns    | Clears DNS cache                   |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   Example output (ipconfig /all):                                  |
|   +------------------------------------------------------------+  |
|   | Ethernet adapter Local Area Connection:                     |  |
|   |                                                             |  |
|   |   Connection-specific DNS Suffix: company.local            |  |
|   |   Physical Address.........: 00-1A-2B-3C-4D-5E  <- MAC     |  |
|   |   DHCP Enabled.............: Yes                           |  |
|   |   IPv4 Address.............: 192.168.1.100  <- IP          |  |
|   |   Subnet Mask..............: 255.255.255.0                 |  |
|   |   Default Gateway..........: 192.168.1.1    <- Router      |  |
|   |   DHCP Server..............: 192.168.1.1                   |  |
|   |   DNS Servers..............: 192.168.1.1, 8.8.8.8          |  |
|   |   Lease Obtained...........: 01/08/2025 08:00:00           |  |
|   |   Lease Expires............: 01/09/2025 08:00:00           |  |
|   |                                                             |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   TROUBLESHOOTING with ipconfig:                                   |
|   - IP starts with 169.254.x.x -> DHCP problem (APIPA address)    |
|   - No gateway -> No Internet access possible                      |
|   - ipconfig /release + /renew -> Get new IP from DHCP            |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### ping

```
+--------------------------------------------------------------------+
|                          PING                                       |
+--------------------------------------------------------------------+
|                                                                     |
|   Checks if a target in the network is reachable.                  |
|   Uses ICMP (Internet Control Message Protocol).                   |
|                                                                     |
|   Syntax:                                                          |
|   +------------------------------------------------------------+  |
|   | ping <IP address or hostname>                               |  |
|   | ping 192.168.1.1          | Ping to IP address             |  |
|   | ping www.google.com       | Ping to hostname (DNS test)    |  |
|   | ping -t 192.168.1.1       | Continuous ping (Windows)      |  |
|   | ping -n 10 192.168.1.1    | Send 10 packets                |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   Example output (Success):                                        |
|   +------------------------------------------------------------+  |
|   | Pinging 192.168.1.1 with 32 bytes of data:                 |  |
|   | Reply from 192.168.1.1: bytes=32 time=1ms TTL=64           |  |
|   | Reply from 192.168.1.1: bytes=32 time=1ms TTL=64           |  |
|   | Reply from 192.168.1.1: bytes=32 time<1ms TTL=64           |  |
|   | Reply from 192.168.1.1: bytes=32 time=1ms TTL=64           |  |
|   |                                                             |  |
|   | Ping statistics for 192.168.1.1:                           |  |
|   |   Packets: Sent = 4, Received = 4, Lost = 0 (0%)           |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   Example output (Error):                                          |
|   +------------------------------------------------------------+  |
|   | Request timed out.                                          |  |
|   | -> Target unreachable or firewall blocking                 |  |
|   |                                                             |  |
|   | Destination host unreachable.                               |  |
|   | -> Routing problem, no path to target                      |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   SYSTEMATIC TROUBLESHOOTING with Ping:                            |
|   1. ping 127.0.0.1         -> Check TCP/IP stack               |
|   2. ping <own IP>          -> Check network adapter            |
|   3. ping <Gateway>         -> Is router reachable?             |
|   4. ping 8.8.8.8           -> Is Internet reachable? (DNS-ind.)|
|   5. ping www.google.com    -> Does DNS work?                   |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### tracert / traceroute

```
+--------------------------------------------------------------------+
|                    TRACERT (Windows)                                |
+--------------------------------------------------------------------+
|                                                                     |
|   Shows the path (route) to the target via all intermediate hops.  |
|                                                                     |
|   Syntax:                                                          |
|   +------------------------------------------------------------+  |
|   | tracert <IP address or hostname>                            |  |
|   | tracert www.google.com                                      |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   Example output:                                                  |
|   +------------------------------------------------------------+  |
|   | Tracing route to www.google.com [142.250.x.x]:             |  |
|   |                                                             |  |
|   |   1    <1 ms   <1 ms   <1 ms  192.168.1.1    <- Router     |  |
|   |   2     8 ms    7 ms    8 ms  10.0.0.1       <- ISP        |  |
|   |   3    12 ms   11 ms   12 ms  172.16.x.x                   |  |
|   |   4    15 ms   14 ms   15 ms  ...                          |  |
|   |   5    20 ms   19 ms   20 ms  142.250.x.x    <- Target     |  |
|   |                                                             |  |
|   | Trace complete.                                             |  |
|   |                                                             |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   Interpretation:                                                  |
|   - Each line = one router (hop) on the path                      |
|   - 3 time values = 3 test packets with response time             |
|   - * * * = No response (firewall or timeout)                     |
|   - Helps locate bottlenecks or outages                           |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### nslookup

```
+--------------------------------------------------------------------+
|                       NSLOOKUP                                      |
+--------------------------------------------------------------------+
|                                                                     |
|   Performs DNS queries (Name -> IP or IP -> Name).                 |
|                                                                     |
|   Syntax:                                                          |
|   +------------------------------------------------------------+  |
|   | nslookup <hostname>                                         |  |
|   | nslookup www.google.com                                     |  |
|   | nslookup <IP>           -> Reverse lookup                   |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   Example output:                                                  |
|   +------------------------------------------------------------+  |
|   | Server:   UnKnown                                           |  |
|   | Address:  192.168.1.1    <- Used DNS server                |  |
|   |                                                             |  |
|   | Non-authoritative answer:                                   |  |
|   | Name:     www.google.com                                    |  |
|   | Addresses: 142.250.185.99  <- Resolved IP address          |  |
|   |           2a00:1450:4001::...  (IPv6)                       |  |
|   |                                                             |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   Troubleshooting with nslookup:                                   |
|   - "DNS request timed out" -> DNS server unreachable             |
|   - "Non-existent domain" -> Domain does not exist                |
|   - Wrong DNS server -> Test alternative (8.8.8.8)                |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### netstat

```
+--------------------------------------------------------------------+
|                        NETSTAT                                      |
+--------------------------------------------------------------------+
|                                                                     |
|   Shows network connections, open ports, and statistics.           |
|                                                                     |
|   Important commands:                                               |
|   +------------------------------------------------------------+  |
|   | netstat -an     | All connections, numeric                  |  |
|   | netstat -b      | Shows associated programs (Admin)         |  |
|   | netstat -r      | Shows routing table                       |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   Example output:                                                  |
|   +------------------------------------------------------------+  |
|   | Proto  Local Address      Foreign Address    State         |  |
|   | TCP    0.0.0.0:80         0.0.0.0:0          LISTENING     |  |
|   | TCP    192.168.1.100:443  142.250.x.x:443   ESTABLISHED   |  |
|   | TCP    192.168.1.100:5432 192.168.1.5:1433  ESTABLISHED   |  |
|   | UDP    0.0.0.0:53         *:*                              |  |
|   |                                                             |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   Status meanings:                                                 |
|   - LISTENING = Waiting for connections                           |
|   - ESTABLISHED = Active connection                               |
|   - WAITING = Connection being closed                             |
|                                                                     |
+--------------------------------------------------------------------+
```

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **ipconfig** | Shows IP configuration (Windows) |
| **ping** | Checks reachability |
| **tracert** | Shows route to target |
| **nslookup** | Perform DNS queries |
| **netstat** | Shows network connections |
| **ICMP** | Protocol for ping |
| **TTL** | Time to Live (hop counter) |

---

## Exam Tips

### Common Exam Questions

- Which command shows the IP configuration?
- How do you check the reachability of a server?
- How do you renew a DHCP address?

### Important to Remember

- **ipconfig /all** = all network details
- **ipconfig /release + /renew** = new DHCP address
- **ping 127.0.0.1** = test TCP/IP stack
- **ping** = reachability, **tracert** = route
- **nslookup** = test DNS
- **169.254.x.x** = APIPA (DHCP error)

---

## Practice Exercises

### Exercise 1
Which command can you use to display the MAC address of your computer?

**Solution:**
**ipconfig /all** (Windows)

The physical address (MAC address) is displayed in the output.

### Exercise 2
A user cannot open any websites. How do you proceed systematically?

**Solution:**
1. **ping 127.0.0.1** -> TCP/IP stack OK?
2. **ipconfig** -> Does the PC have an IP? (not 169.254.x.x?)
3. **ping <Gateway IP>** -> Is router reachable?
4. **ping 8.8.8.8** -> Is Internet reachable?
5. **ping www.google.com** -> Does DNS work?
6. **nslookup www.google.com** -> Check DNS resolution

If error at step 4/5: Possibly DNS problem -> test different DNS.

### Exercise 3
What does an IP address starting with 169.254 mean?

**Solution:**
This is an **APIPA address** (Automatic Private IP Addressing).

This means:
- The computer could not reach a **DHCP server**
- It assigned itself an IP from the 169.254.x.x range
- **No Internet connection** possible

Solution: Check DHCP server, check cable, try ipconfig /renew

---

## Cross-References

- [07-02-04 DHCP](../07-02-ip-addressing/07-02-04-dhcp.md) - DHCP function
- [07-01-03 Protocols](../07-01-network-fundamentals/07-01-03-protocols.md) - DNS protocol
- [07-07-02 Troubleshooting](./07-07-02-troubleshooting.md) - Systematic error analysis
