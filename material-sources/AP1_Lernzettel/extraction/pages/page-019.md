# Page 19 - IPv4: Aufbau, Subnetting, Subnetzmaske

## IPv4

**Internet Protocol Version 4 (IPv4)** ist ein verbindungsloses, paketvermitteltes Protokoll zur Adressierung von Netzwerkteilnehmern. Es verwendet 32-Bit-Adressen, die in vier Oktette aufgeteilt sind (z. B. `192.168.1.1`) und ist dadurch auf ca. 4,3 Milliarden Adressen begrenzt.

### Aufbau einer IPv4-Adresse

Eine IPv4-Adresse besteht aus zwei Teilen:

- **Netzwerkanteil:** Identifiziert das Netzwerk.
- **Hostanteil:** Identifiziert das Gerät innerhalb des Netzwerks.

---

## Subnetting

**Subnetting** unterteilt ein Netzwerk in kleinere Teilnetze, um Adressen effizienter zu nutzen und Broadcast-Domänen zu begrenzen.

### Subnetzmaske

Eine Subnetzmaske bestimmt den Netzwerk- und Hostanteil.

**Beispiele:**
| CIDR | Subnetzmaske |
|------|--------------|
| /8 | 255.0.0.0 |
| /16 | 255.255.0.0 |
| /24 | 255.255.255.0 |

### Beispiel für Subnetting

Netzwerk `192.168.1.0/24` soll in zwei Subnetze unterteilt werden:

- `/25` (255.255.255.128) → Erste Hälfte: `192.168.1.0 - 192.168.1.127`
- `/25` (255.255.255.128) → Zweite Hälfte: `192.168.1.128 - 192.168.1.255`

### Berechnung der Subnetze

1. **Anzahl der Subnetze:** 2^n (n = zusätzliche Subnetz-Bits)
2. **Anzahl der Hosts pro Subnetz:** 2^h - 2 (h = verbleibende Host-Bits)
3. **Subnetzgröße:** 256 - letzter Wert der Subnetzmaske
