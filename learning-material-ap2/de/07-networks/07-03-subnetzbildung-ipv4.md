# Subnetzbildung bei IPv4

## Lernziele

Nach diesem Kapitel solltest du:
- Ein Netz in gleich große Subnetze aufteilen
- Subnetzmaske, Netzadressen, Broadcast und Hostbereiche berechnen
- Die „Blockgröße“-Methode anwenden

---

## Kerninhalt

### Prinzip

Beim **Subnetting** leihst du dir **Bits vom Hostanteil**, um mehrere kleinere Subnetze zu bilden. Jedes geliehene Bit **verdoppelt** die Anzahl der Subnetze und **halbiert** die Hosts pro Subnetz.

- **Anzahl Subnetze** = 2^(geliehene Bits)
- **Hosts je Subnetz** = 2^(verbleibende Hostbits) − 2

### Blockgrößen-Methode

**Blockgröße = 256 − (Wert des Masken-Oktetts)**. Die Subnetze beginnen bei Vielfachen der Blockgröße.

### Worked Example

**Aufgabe:** Teile `192.168.1.0/24` in **4 gleich große Subnetze**.

1. 4 Subnetze → 2 Bits leihen → neues Präfix **/26**
2. Maske: `255.255.255.192` (letztes Oktett 11000000 = 192)
3. **Blockgröße = 256 − 192 = 64**
4. Subnetze und Adressen:

| Subnetz | Netzadresse | erste/letzte Host | Broadcast |
|---------|-------------|-------------------|-----------|
| 1 | 192.168.1.0 | .1 – .62 | 192.168.1.63 |
| 2 | 192.168.1.64 | .65 – .126 | 192.168.1.127 |
| 3 | 192.168.1.128 | .129 – .190 | 192.168.1.191 |
| 4 | 192.168.1.192 | .193 – .254 | 192.168.1.255 |

- Hosts je Subnetz: 2^6 − 2 = **62**.

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Subnetting** | Aufteilen eines Netzes durch Leihen von Hostbits |
| **Blockgröße** | 256 − Masken-Oktett; Abstand der Subnetze |
| **Präfixverlängerung** | Mehr Netz-Bits = mehr, kleinere Subnetze |

---

## Prüfungstipps

- **Blockgrößen-Methode** beherrschen – schnell und fehlerarm.
- Immer **Netzadresse, Broadcast, Hostbereich** je Subnetz angeben.
- Hosts = 2^Hostbits − 2 (Netz + Broadcast).
- Subnetting wird sehr häufig geprüft – viel üben.

---

## Übungsaufgabe

**Aufgabe (nach ConSystem GmbH):** Plane für ein Netzwerklabor die Aufteilung von `10.0.0.0/24` in 8 gleich große Subnetze. Gib Präfix, Maske, Blockgröße und für die ersten drei Subnetze Netzadresse/Hosts/Broadcast an.

<details>
<summary>Lösung</summary>

8 Subnetze → 3 Bits → /27, Maske 255.255.255.224, Blockgröße 32, je 30 Hosts. Subnetze: .0, .32, .64, … Broadcast des ersten: .31.

</details>

---

## Querverweise

- [07-04 Subnetze unterschiedlicher Größe (VLSM)](./07-04-subnetze-unterschiedlicher-groesse.md)
- [07-02 IPv4-Adressierung](./07-02-ipv4-grundlagen.md)
