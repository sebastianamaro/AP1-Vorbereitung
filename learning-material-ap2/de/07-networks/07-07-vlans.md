# VLANs

## Lernziele

Nach diesem Kapitel solltest du:
- Zweck und Funktionsweise von VLANs erklären
- Access- und Trunk-Ports sowie 802.1Q-Tagging kennen
- Verbreitete VLAN-Falschaussagen korrigieren

---

## Kerninhalt

Ein **VLAN** (Virtual Local Area Network) unterteilt ein physisches Switch-Netz **logisch** in mehrere getrennte Netze. Geräte in verschiedenen VLANs können **nicht direkt** miteinander kommunizieren (nur über einen Router / Layer-3-Switch).

### Vorteile

- **Segmentierung** ohne separate Hardware (Broadcast-Domänen trennen)
- **Sicherheit** (Abteilungen voneinander isolieren)
- **Flexibilität** (Zuordnung unabhängig vom physischen Standort)
- weniger **Broadcast-Traffic**

### Ports & Tagging

| Begriff | Bedeutung |
|---------|-----------|
| **Access-Port** | gehört zu **einem** VLAN (Endgerät) |
| **Trunk-Port** | transportiert **mehrere** VLANs zwischen Switches |
| **802.1Q-Tag** | 4-Byte-VLAN-Kennung im Ethernet-Frame (auf Trunks) |
| **VLAN-ID** | 12 Bit (1–4094) |

Zwischen VLANs wird über **Inter-VLAN-Routing** (Router-on-a-Stick oder Layer-3-Switch) vermittelt.

### Häufige Falschaussagen

| Aussage | Richtig? |
|---------|----------|
| „Geräte in verschiedenen VLANs kommunizieren ohne Router direkt.“ | ❌ Falsch – es braucht Routing |
| „VLANs reduzieren Broadcast-Domänen.“ | ✅ Richtig |
| „Ein Trunk-Port gehört zu genau einem VLAN.“ | ❌ Falsch – Trunk transportiert mehrere |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **VLAN** | Logische Netzsegmentierung im Switch |
| **Access/Trunk** | Ein VLAN vs. mehrere VLANs pro Port |
| **802.1Q** | Standard für VLAN-Tagging |
| **Inter-VLAN-Routing** | Kommunikation zwischen VLANs über Schicht 3 |

---

## Prüfungstipps

- **VLANs trennen Broadcast-Domänen**; Kommunikation zwischen VLANs nur über Router/L3-Switch.
- **Access (1 VLAN) vs. Trunk (mehrere, 802.1Q-Tag)** unterscheiden.
- Typische Aufgabe: VLAN-Aussagen auf Korrektheit prüfen (siehe Tabelle).

---

## Übungsaufgabe

**Aufgabe (nach ConSystem GmbH):** Beantworte Kundenfragen zu VLANs und prüfe Aussagen auf Korrektheit (z. B. „VLANs kommunizieren ohne Router“, „Trunk = ein VLAN“).

---

## Querverweise

- [07-01 Ethernet und MAC-Adressen](./07-01-ethernet-mac.md)
- [07-05 Routing](./07-05-routing.md)
