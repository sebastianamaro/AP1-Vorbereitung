# WLAN Fundamentals

## Learning Objectives

After this chapter you should be able to:
- Understand the basics of WLAN
- Know important WLAN standards (802.11)
- Distinguish WLAN security protocols
- Know frequency bands and their characteristics

---

## Core Content

### What is WLAN?

```
+--------------------------------------------------------------------+
|                         WLAN                                       |
+--------------------------------------------------------------------+
|                                                                     |
|   WLAN = Wireless Local Area Network                               |
|   Wi-Fi = Wireless Fidelity (marketing name)                       |
|                                                                     |
|   +-------------------------------------------------------------+ |
|   | WLAN enables wireless connection of devices via radio       | |
|   | waves in the local network.                                  | |
|   +-------------------------------------------------------------+ |
|                                                                     |
|   Typical WLAN infrastructure:                                     |
|                                                                     |
|   +-------------------------------------------------------------+ |
|   |                                                              | |
|   |        +----------+                                         | |
|   |        | Internet |                                         | |
|   |        +----+-----+                                         | |
|   |             |                                                | |
|   |        +----+-----+                                         | |
|   |        |  Router  |                                         | |
|   |        +----+-----+                                         | |
|   |             |                                                | |
|   |    +-------+-------+                                        | |
|   |    | Access Point  |                                        | |
|   |    |   ((( )))     |                                        | |
|   |    +---------------+                                        | |
|   |        /    |    \                                          | |
|   |    +----+ +----+ +----+                                    | |
|   |    | PC | | Ph | | Lap|                                    | |
|   |    +----+ +----+ +----+                                    | |
|   |                                                              | |
|   +-------------------------------------------------------------+ |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### WLAN Standards (IEEE 802.11)

```
+--------------------------------------------------------------------+
|                    WLAN STANDARDS                                  |
+--------------------------------------------------------------------+
|                                                                     |
|   Standard | Name      | Frequency   | Max. Speed | Year          |
|   ---------+-----------+-------------+------------+--------------  |
|   802.11b  | Wi-Fi 1   | 2.4 GHz     | 11 Mbit/s  | 1999         |
|   802.11a  | Wi-Fi 2   | 5 GHz       | 54 Mbit/s  | 1999         |
|   802.11g  | Wi-Fi 3   | 2.4 GHz     | 54 Mbit/s  | 2003         |
|   802.11n  | Wi-Fi 4   | 2.4/5 GHz   | 600 Mbit/s | 2009         |
|   802.11ac | Wi-Fi 5   | 5 GHz       | 6.9 Gbit/s | 2013         |
|   802.11ax | Wi-Fi 6   | 2.4/5/6 GHz | 9.6 Gbit/s | 2019         |
|                                                                     |
|   The most important for the exam:                                 |
|   +-------------------------------------------------------------+ |
|   | 802.11n (Wi-Fi 4): First standard with both frequencies     | |
|   | 802.11ac (Wi-Fi 5): Only 5 GHz, very fast                   | |
|   | 802.11ax (Wi-Fi 6): Newest standard, energy efficient       | |
|   +-------------------------------------------------------------+ |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Frequency Bands

```
+--------------------------------------------------------------------+
|                    FREQUENCY BANDS                                 |
+--------------------------------------------------------------------+
|                                                                     |
|   2.4 GHz Band                                                     |
|   +------------------------------------------------------------+  |
|   | Advantages:                    Disadvantages:              |  |
|   | - Greater range                - Congested (many           |  |
|   | - Better penetration              devices use it)          |  |
|   |   through walls                - More interference         |  |
|   | - More compatible devices      - Only 3 non-overlapping    |  |
|   |                                   channels (1, 6, 11)      |  |
|   |                                - Slower                    |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   5 GHz Band                                                       |
|   +------------------------------------------------------------+  |
|   | Advantages:                    Disadvantages:              |  |
|   | - Higher speed                 - Shorter range             |  |
|   | - Less interference            - Worse penetration         |  |
|   | - More channels available         through walls            |  |
|   | - Less congested               - Not all devices           |  |
|   |                                   support it               |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   Summary:                                                         |
|   +-------------------------------------------------------------+ |
|   | 2.4 GHz = Range, but slower and more interference          | |
|   | 5 GHz   = Fast, but shorter range                          | |
|   |                                                              | |
|   | Modern routers often offer BOTH frequencies (Dual-Band)     | |
|   +-------------------------------------------------------------+ |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### WLAN Security

```
+--------------------------------------------------------------------+
|                    WLAN SECURITY                                   |
+--------------------------------------------------------------------+
|                                                                     |
|   Encryption protocols (chronological):                            |
|                                                                     |
|   WEP (Wired Equivalent Privacy)                                   |
|   +------------------------------------------------------------+  |
|   | X OUTDATED and INSECURE!                                   |  |
|   | - Easy to crack (within minutes)                           |  |
|   | - Should NEVER be used anymore                             |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   WPA (Wi-Fi Protected Access)                                     |
|   +------------------------------------------------------------+  |
|   | X OUTDATED                                                 |  |
|   | - Improvement over WEP                                     |  |
|   | - TKIP encryption (also became insecure)                   |  |
|   | - No longer recommended                                    |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   WPA2 (Wi-Fi Protected Access 2)                                  |
|   +------------------------------------------------------------+  |
|   | / CURRENT STANDARD                                         |  |
|   | - AES encryption (strong)                                  |  |
|   | - Available since 2004                                     |  |
|   | - WPA2-Personal (PSK) for home networks                    |  |
|   | - WPA2-Enterprise (802.1X) for businesses                  |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   WPA3 (Wi-Fi Protected Access 3)                                  |
|   +------------------------------------------------------------+  |
|   | / NEWEST STANDARD (since 2018)                             |  |
|   | - Even stronger encryption                                 |  |
|   | - Protection against brute-force attacks                   |  |
|   | - Forward secrecy                                          |  |
|   | - Being gradually introduced                               |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   ! EXAM RELEVANT: WEP = insecure, WPA2/WPA3 = secure             |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Important WLAN Terms

```
+--------------------------------------------------------------------+
|                   WLAN TERMS                                       |
+--------------------------------------------------------------------+
|                                                                     |
|   SSID (Service Set Identifier)                                    |
|   +------------------------------------------------------------+  |
|   | - The name of the WLAN network                             |  |
|   | - Broadcast by the access point                            |  |
|   | - Can be hidden (Hidden SSID)                              |  |
|   | - Example: "MyHomeNetwork" or "Company-WLAN"               |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   Access Point (AP)                                                |
|   +------------------------------------------------------------+  |
|   | - Transmits the WLAN signal                                |  |
|   | - Connects WLAN devices to the LAN                         |  |
|   | - Often integrated in router                               |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   PSK (Pre-Shared Key)                                             |
|   +------------------------------------------------------------+  |
|   | - The WLAN password                                        |  |
|   | - Used with WPA2-Personal                                  |  |
|   | - All users use the same key                               |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   Channel                                                          |
|   +------------------------------------------------------------+  |
|   | - Frequency range for communication                        |  |
|   | - 2.4 GHz: Channels 1-13                                   |  |
|   | - Non-overlapping channels: 1, 6, 11                       |  |
|   | - If interference: Select different channel                |  |
|   +------------------------------------------------------------+  |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### WLAN Operating Modes

```
+--------------------------------------------------------------------+
|                   WLAN OPERATING MODES                             |
+--------------------------------------------------------------------+
|                                                                     |
|   INFRASTRUCTURE MODE (Standard)                                   |
|   +------------------------------------------------------------+  |
|   |                                                             |  |
|   |        +-------------+                                     |  |
|   |        | Access Point|                                     |  |
|   |        |   ((( )))   |                                     |  |
|   |        +------+------+                                     |  |
|   |         /     |     \                                      |  |
|   |     +----+ +----+ +----+                                  |  |
|   |     | A  | | B  | | C  |                                  |  |
|   |     +----+ +----+ +----+                                  |  |
|   |                                                             |  |
|   |   - All devices connect to the access point               |  |
|   |   - Communication goes through the AP                      |  |
|   |   - Typical for home and business networks                |  |
|   |                                                             |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   AD-HOC MODE                                                      |
|   +------------------------------------------------------------+  |
|   |                                                             |  |
|   |     +----+         +----+                                  |  |
|   |     | A  |<------->| B  |                                  |  |
|   |     +----+         +----+                                  |  |
|   |          \         /                                       |  |
|   |           \       /                                        |  |
|   |            +----+                                          |  |
|   |            | C  |                                          |  |
|   |            +----+                                          |  |
|   |                                                             |  |
|   |   - Direct connection between devices                      |  |
|   |   - No access point needed                                 |  |
|   |   - For temporary networks                                 |  |
|   |                                                             |  |
|   +------------------------------------------------------------+  |
|                                                                     |
+--------------------------------------------------------------------+
```

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **WLAN** | Wireless Local Area Network |
| **802.11** | IEEE standard for WLAN |
| **SSID** | Name of the WLAN network |
| **WPA2** | Current security standard |
| **PSK** | Pre-Shared Key (password) |
| **Access Point** | WLAN transmitter/receiver |
| **Dual-Band** | 2.4 GHz and 5 GHz |

---

## Exam Tips

### Common Exam Questions

- Difference 2.4 GHz vs. 5 GHz?
- Which WLAN encryption is secure?
- What does SSID mean?

### Important to Remember

- **WEP** = insecure, **WPA2/WPA3** = secure
- **2.4 GHz:** More range, slower, more interference
- **5 GHz:** Less range, faster, less interference
- **SSID** = WLAN name
- **802.11ac** = Wi-Fi 5, **802.11ax** = Wi-Fi 6
- Channels **1, 6, 11** at 2.4 GHz do not overlap

---

## Practice Exercises

### Exercise 1
Which frequency band should you choose if you need maximum range?

**Solution:**
**2.4 GHz Band**

Reason: The 2.4 GHz band has greater range and better penetration through walls and obstacles. However, it is more susceptible to interference and slower than the 5 GHz band.

### Exercise 2
A customer is still using WEP encryption. What do you recommend?

**Solution:**
Urgently switch to **WPA2** or **WPA3**!

Reason:
- WEP has been known to be insecure for years
- WEP can be cracked within minutes
- WPA2 with AES encryption is the current standard
- WPA3 is even more secure and future-proof

### Exercise 3
What does the designation 802.11ac mean?

**Solution:**
**802.11ac** is a WLAN standard (Wi-Fi 5):
- **802.11** = IEEE standard for WLAN
- **ac** = Variant/generation of the standard
- Uses the **5 GHz band**
- Maximum speed: **6.9 Gbit/s**
- Introduced: 2013

---

## Cross-References

- [04-03-01 Technical Protective Measures](../../04-it-security/04-03-protective-measures/04-03-01-technical-measures.md) - WLAN security
- [07-05 Network Hardware](../07-05-network-hardware.md) - Access Points
- [07-04-01 Structured Cabling](../07-04-cabling/07-04-01-structured-cabling.md) - LAN infrastructure
