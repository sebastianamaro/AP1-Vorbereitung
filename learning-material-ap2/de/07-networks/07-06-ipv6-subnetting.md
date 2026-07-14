# IPv6 Subnetting

## Lernziele

Nach diesem Kapitel solltest du:
- Aufbau und Notation einer IPv6-Adresse kennen
- Ein IPv6-Präfix in Subnetze unterteilen
- Präfix, Subnet-ID und Interface-ID einordnen

---

## Kerninhalt

### Aufbau

Eine **IPv6-Adresse** ist **128 Bit** lang, notiert in acht **Hextetten** (16 Bit) hex, getrennt durch `:`, z. B. `2001:0db8:0000:0000:0000:0000:0000:0001`.

**Kürzungsregeln:**
- Führende Nullen je Block weglassen: `0db8 → db8`
- **Eine** Folge aus Nullblöcken durch `::` ersetzen: `2001:db8::1`

### Struktur (typisch)

```
| Global Routing Prefix |  Subnet-ID  |     Interface-ID (64 Bit)     |
|      /48 (vom ISP)     |   16 Bit    |            /64                 |
```

- Ein **/64** ist das Standard-Subnetz (ein LAN). Aus einem **/48** lassen sich **2^16 = 65.536** /64-Subnetze bilden.

### Subnetting-Beispiel

**Aufgabe:** ISP vergibt `2001:db8:abcd::/48`. Bilde Subnetze für mehrere Bereiche.

- Subnetze als **/64** vergeben, indem die **Subnet-ID** (Bits 49–64) durchgezählt wird:
  - `2001:db8:abcd:0000::/64`
  - `2001:db8:abcd:0001::/64`
  - `2001:db8:abcd:0002::/64` …
- Jedes /64 bietet praktisch unbegrenzt viele Hosts (2^64).

> In IPv6 gibt es **keinen Broadcast** (stattdessen Multicast) und typischerweise **keine NAT-Notwendigkeit** – Adressen sind reichlich vorhanden.

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Hextett** | 16-Bit-Block der IPv6-Adresse |
| **`::`** | Ersetzt genau eine Folge von Nullblöcken |
| **/64** | Standard-Subnetzgröße (ein LAN) |
| **Interface-ID** | Untere 64 Bit, identifiziert die Schnittstelle |

---

## Prüfungstipps

- **Kürzungsregeln** sicher anwenden (führende Nullen, `::` nur einmal).
- Aus **/48 → /64** ergeben sich **2^16 Subnetze**; Subnet-ID hochzählen.
- IPv6 hat **keinen Broadcast**, sondern Multicast – häufige Frage.
- IPv6-Konfiguration ist im aktualisierten Katalog **neu betont**.

---

## Übungsaufgabe

**Aufgabe (nach ConSystem GmbH):** Ein Kunde erhält `2001:db8:1234::/48`. Bilde vier /64-Subnetze für vier Unternehmensbereiche und gib deren Präfixe an.

<details>
<summary>Lösung</summary>

`2001:db8:1234:0::/64`, `…:1::/64`, `…:2::/64`, `…:3::/64`.

</details>

---

## Querverweise

- [07-02 IPv4-Adressierung](./07-02-ipv4-grundlagen.md)
- [07-05 Routing](./07-05-routing.md)
