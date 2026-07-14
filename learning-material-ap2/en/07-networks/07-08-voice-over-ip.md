# Voice over IP (VoIP)

## Learning Objectives

After this chapter you should:
- Explain the basic principle of VoIP
- Classify important protocols (SIP, RTP)
- Understand the significance of QoS

---

## Core Content

**VoIP** transmits voice **digitized as IP packets** over the data network instead of over the classic telephone network. The voice is sampled, compressed via a **codec**, packetized and reassembled at the receiver.

### Protocols

| Protocol | Task |
|-----------|---------|
| **SIP** (Session Initiation Protocol) | **Signaling**: setting up/tearing down connections |
| **RTP** (Real-Time Transport Protocol) | Transport of the **voice data** in real time |
| **Codecs** (e.g. G.711, G.729, Opus) | Compression/digitization of the voice |

### QoS (Quality of Service)

Voice is **real-time critical** and sensitive to:
- **Latency** (delay)
- **Jitter** (variation in transit time)
- **Packet loss**

**QoS** **prioritizes** VoIP packets over normal data traffic (e.g. via VLAN/DiffServ) to ensure voice quality.

### Advantages

- Cost savings (one infrastructure for data + voice)
- Flexibility, additional functions (voicemail, conferences), integration into IT systems

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **SIP** | Signaling (connection setup) |
| **RTP** | Real-time transport of the voice data |
| **Codec** | Digitization/compression of the voice |
| **QoS** | Prioritization of real-time critical packets |

---

## Exam Tips

- Separate **SIP (signaling) vs. RTP (voice data)**.
- Explain **QoS** against latency/jitter/packet loss.
- A dedicated **voice VLAN** is a typical QoS measure.

---

## Practice Exercise

**Task:** Explain the principle of VoIP to a customer, name the roles of SIP and RTP, and justify why QoS is important for good voice quality.

---

## Cross-References

- [07-07 VLANs](./07-07-vlans.md)
- [07-05 Routing](./07-05-routing.md)
