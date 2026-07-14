# Voice over IP (VoIP)

## Lernziele

Nach diesem Kapitel solltest du:
- Das Grundprinzip von VoIP erklären
- Wichtige Protokolle (SIP, RTP) einordnen
- Die Bedeutung von QoS verstehen

---

## Kerninhalt

**VoIP** überträgt Sprache **digitalisiert als IP-Pakete** über das Datennetz statt über das klassische Telefonnetz. Die Sprache wird abgetastet, per **Codec** komprimiert, paketiert und beim Empfänger wieder zusammengesetzt.

### Protokolle

| Protokoll | Aufgabe |
|-----------|---------|
| **SIP** (Session Initiation Protocol) | **Signalisierung**: Verbindungsauf-/-abbau |
| **RTP** (Real-Time Transport Protocol) | Transport der **Sprachdaten** in Echtzeit |
| **Codecs** (z. B. G.711, G.729, Opus) | Kompression/Digitalisierung der Sprache |

### QoS (Quality of Service)

Sprache ist **echtzeitkritisch** und empfindlich gegen:
- **Latenz** (Verzögerung)
- **Jitter** (Schwankung der Laufzeit)
- **Paketverlust**

**QoS** **priorisiert** VoIP-Pakete gegenüber normalem Datenverkehr (z. B. via VLAN/DiffServ), um Sprachqualität sicherzustellen.

### Vorteile

- Kosteneinsparung (eine Infrastruktur für Daten + Sprache)
- Flexibilität, Zusatzfunktionen (Voicemail, Konferenzen), Integration in IT-Systeme

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **SIP** | Signalisierung (Verbindungsaufbau) |
| **RTP** | Echtzeittransport der Sprachdaten |
| **Codec** | Digitalisierung/Kompression der Sprache |
| **QoS** | Priorisierung echtzeitkritischer Pakete |

---

## Prüfungstipps

- **SIP (Signalisierung) vs. RTP (Sprachdaten)** trennen.
- **QoS** gegen Latenz/Jitter/Paketverlust erklären.
- Ein eigenes **Voice-VLAN** ist eine typische QoS-Maßnahme.

---

## Übungsaufgabe

**Aufgabe:** Erkläre einem Kunden das Prinzip von VoIP, nenne die Rollen von SIP und RTP und begründe, warum QoS für gute Sprachqualität wichtig ist.

---

## Querverweise

- [07-07 VLANs](./07-07-vlans.md)
- [07-05 Routing](./07-05-routing.md)
