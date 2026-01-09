# Page 20 - IPv4 Private Adressen, Sonderadressen & IPv6

## IPv4 (Fortsetzung)

### Beispiel Subnetting

Beispiel: `/26` → `255.255.255.192`
- 4 Subnetze (`/24` → `/26` → 2^2 = 4)
- 62 Hosts pro Subnetz (2^6 - 2 = 62)

### Private IPv4-Adressen

Diese Adressen sind **nicht im Internet routbar** und werden in privaten Netzwerken genutzt.

| Klasse | Adressbereich |
|--------|---------------|
| **Klasse A** | 10.0.0.0 - 10.255.255.255 |
| **Klasse B** | 172.16.0.0 - 172.31.255.255 |
| **Klasse C** | 192.168.0.0 - 192.168.255.255 |

### Wichtige Sonderadressen

| Adresse | Beschreibung |
|---------|--------------|
| **Netzwerkadresse** | Erste Adresse eines Subnetzes (z. B. `192.168.1.0`) |
| **Broadcast-Adresse** | Letzte Adresse eines Subnetzes (z. B. `192.168.1.255`) |
| **Loopback-Adresse** | `127.0.0.1` für lokale Tests |
| **APIPA** | `169.254.0.0/16` (wird automatisch zugewiesen, wenn kein DHCP verfügbar ist) |

---

## IPv6

**Internet Protocol Version 6 (IPv6)** ist der Nachfolger von IPv4 und bietet eine größere Adresskapazität sowie verbesserte Netzwerkfunktionen. IPv6 verwendet **128-Bit-Adressen**, die in acht Gruppen zu je vier hexadezimalen Ziffern dargestellt werden.

### Aufbau einer IPv6-Adresse

IPv6-Adressen bestehen aus:

- **Netzwerkpräfix:** Identifiziert das Netzwerk (meist 64 Bit)
- **Interface Identifier:** Identifiziert das Gerät im Netzwerk (meist 64 Bit)

**Beispiel-Adresse:**
```
2001:0db8:85a3:0000:0000:8a2e:0370:7334
```
