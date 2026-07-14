# IPv4-Adressierung – Grundlagen

## Lernziele

Nach diesem Kapitel solltest du:
- Aufbau einer IPv4-Adresse und Subnetzmaske verstehen
- Netz- und Hostanteil bestimmen
- Private Adressbereiche und Sonderadressen kennen

---

## Kerninhalt

### Aufbau

Eine **IPv4-Adresse** ist **32 Bit** lang, notiert als vier **Oktette** (0–255), z. B. `192.168.1.10`. Die **Subnetzmaske** trennt **Netzanteil** (Einsen) von **Hostanteil** (Nullen).

- `255.255.255.0` = **/24** (CIDR-Präfix = Anzahl der Netz-Bits)
- Netz-Bits fest = Netzadresse; Host-Bits variabel = Hosts

### Wichtige Adressen im Subnetz

- **Netzadresse:** alle Host-Bits **0** (z. B. 192.168.1.0/24)
- **Broadcast:** alle Host-Bits **1** (z. B. 192.168.1.255)
- **Nutzbare Hosts:** 2^(Host-Bits) − 2 (Netz- und Broadcast abziehen)

### Private Adressbereiche (RFC 1918)

| Bereich | Maske |
|---------|-------|
| 10.0.0.0 – 10.255.255.255 | /8 |
| 172.16.0.0 – 172.31.255.255 | /12 |
| 192.168.0.0 – 192.168.255.255 | /16 |

Weitere: **127.0.0.0/8** = Loopback (localhost), **169.254.0.0/16** = APIPA (Link-Local).

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Subnetzmaske** | Trennt Netz- und Hostanteil |
| **CIDR-Präfix** | Anzahl Netz-Bits (z. B. /24) |
| **Broadcast** | Adresse an alle Hosts im Subnetz |
| **RFC 1918** | Private, nicht routbare Adressbereiche |

---

## Prüfungstipps

- **Nutzbare Hosts = 2^Hostbits − 2** (Netz + Broadcast abziehen) – Standardformel.
- Private Bereiche (10/8, 172.16/12, 192.168/16) auswendig.
- CIDR-Präfix ↔ Subnetzmaske umrechnen können (/24 = 255.255.255.0).

---

## Übungsaufgabe

**Aufgabe:** Bestimme für `192.168.10.130/25`: Netzadresse, Broadcast, erste/letzte nutzbare Host-Adresse und Anzahl nutzbarer Hosts.

<details>
<summary>Lösung</summary>

/25 → Maske 255.255.255.128, Blockgröße 128. Netz: 192.168.10.128, Broadcast: 192.168.10.255, Hosts: .129–.254, nutzbar: 2^7−2 = **126**.

</details>

---

## Querverweise

- [07-03 Subnetzbildung bei IPv4](./07-03-subnetzbildung-ipv4.md)
- [07-05 Routing](./07-05-routing.md)
