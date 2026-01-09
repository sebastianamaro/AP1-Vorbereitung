# Page 21 - IPv6: Adresstypen, Präfixe, Zuweisung, Subnetting

## IPv6 (Fortsetzung)

### Verkürzte Schreibweise

Führende Nullen können weggelassen werden:
```
2001:db8:85a3::8a2e:370:7334
```

### Adresstypen

- **Unicast:** Kommunikation mit einem einzigen Empfänger
  - **Global Unicast (GUAs):** Öffentlich routbare Adressen (z. B. `2000::/3`)
  - **Link-Local:** Nur im lokalen Netzwerk gültig (z. B. `FE80::/10`)
  - **Unique Local (ULA):** Private IPv6-Adressen (`FC00::/7`)
- **Multicast:** Kommunikation mit mehreren Empfängern (`FF00::/8`)
- **Anycast:** Mehrere Geräte teilen sich eine Adresse, das nächstgelegene antwortet

### IPv6-Präfixe

IPv6 verwendet die **CIDR-Notation** zur Angabe des Netzwerkteils:

| Präfix | Verwendung |
|--------|------------|
| `/64` | Standard für Netzwerke (z. B. Heim- und Firmennetze) |
| `/48` | Zuweisung für Unternehmen |
| `/32` | ISPs erhalten oft ein `/32`-Netz und teilen es auf |

### IPv6-Adresszuweisung

1. **Statische Zuweisung:** Manuelle Vergabe einer IPv6-Adresse
2. **DHCPv6:** Automatische Vergabe durch einen DHCPv6-Server
3. **SLAAC (Stateless Address Autoconfiguration):** Selbstkonfiguration der IP-Adresse anhand des Netzpräfixes und der MAC-Adresse

### Subnetting in IPv6

IPv6 benötigt kein klassisches Subnetting wie IPv4. Ein `/64`-Präfix wird standardmäßig für ein Netzwerk verwendet, kleinere Subnetze sind eher selten.

**Beispiel für Subnetting mit `/48`:**
- `2001:db8:1234::/48` → Basisnetzwerk
- `2001:db8:1234:0001::/64` → Erstes Subnetz
