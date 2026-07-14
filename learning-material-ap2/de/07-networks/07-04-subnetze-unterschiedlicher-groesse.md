# Subnetze unterschiedlicher Größe (VLSM)

## Lernziele

Nach diesem Kapitel solltest du:
- VLSM erklären und von gleichmäßigem Subnetting abgrenzen
- Subnetze bedarfsgerecht (nach Hostzahl) zuweisen
- Adressverschwendung vermeiden

---

## Kerninhalt

### Idee

**VLSM** (Variable Length Subnet Mask) teilt ein Netz in **unterschiedlich große** Subnetze – passend zum tatsächlichen Bedarf. So wird der Adressraum effizient genutzt (kein „eine Größe für alle“).

### Vorgehen

1. **Bedarf sortieren:** Subnetze nach benötigter Hostzahl **absteigend**.
2. **Präfix je Subnetz bestimmen:** kleinste Maske, die genug Hosts bietet (Hosts ≤ 2^Hostbits − 2).
3. **Von oben zuweisen:** größtes Subnetz zuerst, dann fortlaufend die nächsten Blöcke.

### Worked Example

**Netz:** `192.168.1.0/24`. Bedarf: A=50 Hosts, B=25, C=10, D=2 (Punkt-zu-Punkt).

| Subnetz | Hosts nötig | Präfix | Größe | Bereich |
|---------|-------------|--------|-------|---------|
| A | 50 | /26 (62) | 64 | 192.168.1.0 – .63 |
| B | 25 | /27 (30) | 32 | 192.168.1.64 – .95 |
| C | 10 | /28 (14) | 16 | 192.168.1.96 – .111 |
| D | 2 | /30 (2) | 4 | 192.168.1.112 – .115 |

- Für 50 Hosts braucht man **/26** (62 nutzbar), für 2 Hosts genügt **/30** (2 nutzbar – ideal für Router-Links).

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **VLSM** | Subnetze variabler Größe je Bedarf |
| **/30** | Kleinstes praktisches Subnetz (2 Hosts, Router-Links) |
| **Adresseffizienz** | Möglichst wenig ungenutzte Adressen |

---

## Prüfungstipps

- **Immer vom größten Bedarf zum kleinsten** zuweisen – sonst entstehen Lücken/Überschneidungen.
- Für Punkt-zu-Punkt-Verbindungen **/30** verwenden.
- Prüfen, dass sich Subnetze **nicht überlappen**.

---

## Übungsaufgabe

**Aufgabe (nach ConSystem GmbH):** Teile `172.16.0.0/24` per VLSM für Abteilungen mit 60, 30, 12 und 2 Hosts auf. Gib je Subnetz Präfix, Netzadresse und Broadcast an.

---

## Querverweise

- [07-03 Subnetzbildung bei IPv4](./07-03-subnetzbildung-ipv4.md)
- [07-05 Routing](./07-05-routing.md)
