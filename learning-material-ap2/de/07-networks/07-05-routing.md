# Routing

## Lernziele

Nach diesem Kapitel solltest du:
- Aufgabe eines Routers und einer Routingtabelle verstehen
- Statisches und dynamisches Routing unterscheiden
- Default-Gateway und Standardroute einordnen

---

## Kerninhalt

### Router & Routing

Ein **Router** verbindet **verschiedene Netze** (OSI-Schicht 3) und leitet IP-Pakete anhand der **Zieladresse** über die **Routingtabelle** weiter. Innerhalb eines Subnetzes kommunizieren Hosts direkt; für andere Netze schicken sie das Paket an ihr **Default-Gateway** (den Router).

### Routingtabelle

Enthält Einträge: **Zielnetz / Maske → nächster Hop (Gateway) / Interface / Metrik**.

```
Zielnetz          Maske             Gateway        Metrik
10.0.1.0          255.255.255.0     direkt (eth0)  0
10.0.2.0          255.255.255.0     10.0.1.2       1
0.0.0.0           0.0.0.0           10.0.1.1       (Standardroute)
```

- **Standardroute (0.0.0.0/0):** wird verwendet, wenn kein spezifischer Eintrag passt (meist Richtung Internet).
- Es gewinnt der **längste passende Präfix** (Longest Prefix Match).

### Statisch vs. dynamisch

| | Statisches Routing | Dynamisches Routing |
|--|--------------------|---------------------|
| Pflege | manuell | automatisch über Protokolle |
| Protokolle | – | **RIP, OSPF, BGP** |
| Eignung | kleine/stabile Netze | große/veränderliche Netze |
| Aufwand/Fehler | wenig Overhead, aber pflegeintensiv | selbstanpassend, mehr Overhead |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Routingtabelle** | Zielnetz → nächster Hop |
| **Default-Gateway** | Router für alle nicht-lokalen Ziele |
| **Standardroute** | 0.0.0.0/0 als Auffangroute |
| **OSPF/BGP** | Dynamische Routingprotokolle |

---

## Prüfungstipps

- **Default-Gateway** und **Standardroute (0.0.0.0/0)** erklären können.
- **Statisch vs. dynamisch** mit je einem Vor-/Nachteil.
- Longest Prefix Match: spezifischerer Eintrag gewinnt.

---

## Übungsaufgabe

**Aufgabe (nach ConSystem GmbH):** Für ein Netz aus mehreren Subnetzen: erstelle die Routingtabelle eines Routers (Zielnetze, Gateways) inkl. Standardroute Richtung Internet.

---

## Querverweise

- [07-03 Subnetzbildung bei IPv4](./07-03-subnetzbildung-ipv4.md)
- [07-06 IPv6 Subnetting](./07-06-ipv6-subnetting.md)
