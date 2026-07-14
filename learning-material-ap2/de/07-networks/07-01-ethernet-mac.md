# Ethernet und MAC-Adressen

## Lernziele

Nach diesem Kapitel solltest du:
- Aufbau und Zweck einer MAC-Adresse kennen
- MAC- (Schicht 2) und IP-Adresse (Schicht 3) unterscheiden
- Die Rolle des Switches im Ethernet verstehen

---

## Kerninhalt

### MAC-Adresse

Die **MAC-Adresse** (Media Access Control) identifiziert eine Netzwerkkarte eindeutig auf der **Sicherungsschicht (OSI-Schicht 2)**.

- **48 Bit**, hexadezimal, z. B. `00:1A:2B:3C:4D:5E`
- Erste 3 Byte = **OUI** (Hersteller), letzte 3 Byte = geräteindividuell
- **physisch/fest** (im Gegensatz zur logischen, änderbaren IP-Adresse)

### MAC vs. IP

| | MAC-Adresse | IP-Adresse |
|--|-------------|------------|
| OSI-Schicht | 2 (Sicherung) | 3 (Vermittlung) |
| Gültigkeit | lokales Netz (LAN) | netzübergreifend |
| Vergabe | fest (Hersteller) | logisch/konfigurierbar |
| Zuordnung IP↔MAC | über **ARP** | – |

### Switch & Ethernet-Frame

Ein **Switch** arbeitet auf Schicht 2, lernt die MAC-Adressen der angeschlossenen Geräte (**MAC-Adresstabelle**) und leitet **Frames** gezielt an den richtigen Port weiter (statt wie ein Hub an alle). Ein **Ethernet-Frame** enthält Ziel-/Quell-MAC, Typ, Nutzdaten und Prüfsumme (FCS).

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **MAC-Adresse** | 48-Bit-Hardwareadresse (Schicht 2) |
| **ARP** | Löst IP- zu MAC-Adressen auf |
| **Switch** | Leitet Frames anhand der MAC-Tabelle gezielt weiter |
| **Frame** | Dateneinheit der Schicht 2 |

---

## Prüfungstipps

- **MAC (Schicht 2, fest) vs. IP (Schicht 3, logisch)** sauber trennen.
- **ARP** verbindet die beiden Welten (IP → MAC).
- Switch = Schicht 2 (MAC), Router = Schicht 3 (IP).

---

## Übungsaufgabe

**Aufgabe (nach ConSystem GmbH):** Interpretiere aufgezeichneten Datenverkehr: Erkläre, wozu Quell-/Ziel-MAC dienen und wie ein Switch anhand der MAC-Tabelle weiterleitet.

---

## Querverweise

- [07-02 IPv4-Adressierung](./07-02-ipv4-grundlagen.md)
- [07-07 VLANs](./07-07-vlans.md)
