# Serversysteme

## Lernziele

Nach diesem Kapitel solltest du:
- Tower-, Rack- und Blade-Server unterscheiden
- Vor- und Nachteile der Bauformen nennen

---

## Kerninhalt

### Bauformen

| Bauform | Merkmal | Vorteile | Nachteile |
|---------|---------|----------|-----------|
| **Tower-Server** | wie ein großer PC | günstig, einfach, keine spezielle Umgebung | platzintensiv, schlecht skalierbar |
| **Rack-Server** | in 19-Zoll-Schrank montiert (Höhe in **HE/U**) | platzsparend, standardisiert, gut wartbar | Rack + Kühlung nötig |
| **Blade-Server** | schlanke „Blades“ in einem gemeinsamen **Chassis** | sehr hohe Dichte, gemeinsame Strom-/Kühl-/Netzinfrastruktur, zentrale Verwaltung | teures Chassis, Hersteller-Bindung |

- **Rack-Server:** eigenständige Server, die im Rack übereinander montiert werden (z. B. 1 HE, 2 HE).
- **Blade-Server:** teilen sich im **Chassis** Netzteile, Kühlung und Backplane → höchste Packungsdichte im Rechenzentrum.

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **HE/U (Höheneinheit)** | Maß der Bauhöhe im 19-Zoll-Rack (1 HE ≈ 4,45 cm) |
| **Rack-Server** | Im Rack montierter, eigenständiger Server |
| **Blade-Server** | Server-Einschub in gemeinsamem Chassis |
| **Chassis** | Gehäuse mit gemeinsamer Infrastruktur für Blades |

---

## Prüfungstipps

- **Rack vs. Blade** ist die typische Frage: Blade = höhere Dichte + geteilte Infrastruktur; Rack = eigenständig, flexibler.
- Bauform an ein Szenario (Platz, Skalierung, Budget) knüpfen.

---

## Übungsaufgabe

**Aufgabe (nach ConSystem GmbH):** Erläutere einem Kunden die Konzepte „Rack-Server“ und „Blade-Server“ inkl. je eines Vor- und Nachteils.

---

## Querverweise

- [05-06 Speichersysteme](./05-06-speichersysteme.md)
- [05-09 Virtuelle Desktops (VDI)](./05-09-virtuelle-desktops.md)
