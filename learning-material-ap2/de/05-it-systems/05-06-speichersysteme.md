# Speichersysteme (DAS/NAS/SAN)

## Lernziele

Nach diesem Kapitel solltest du:
- DAS, NAS und SAN unterscheiden
- Block- und dateibasierten Zugriff einordnen
- Ein geeignetes Speicherkonzept auswählen

---

## Kerninhalt

### Die drei Architekturen

| Konzept | Anbindung | Zugriff | Einsatz |
|---------|-----------|---------|---------|
| **DAS** (Direct Attached Storage) | direkt am Server (z. B. interne Platten, USB) | blockbasiert | einzelner Server, einfach & günstig |
| **NAS** (Network Attached Storage) | über das **LAN** (Ethernet) | **dateibasiert** (SMB/NFS) | gemeinsame Dateiablage im Netz |
| **SAN** (Storage Area Network) | dediziertes Speichernetz (Fibre Channel/iSCSI) | **blockbasiert** | Rechenzentren, hohe Leistung/Skalierung |

- **NAS** stellt **Dateifreigaben** bereit (wie ein Netzlaufwerk), einfach einzurichten.
- **SAN** stellt **Blockspeicher** bereit (wie eine lokale Platte für den Server), leistungsstark aber komplex/teuer.

> **Hinweis:** In der AP1 wird nur noch **NAS** referenziert; **SAN** ist in den AP2-/Vertiefungsbereich gewandert (siehe [Katalogänderungen](../00-exam-overview/00-02-catalog-changes.md)).

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **DAS** | Direkt am Server angebundener Speicher |
| **NAS** | Dateibasierter Netzwerkspeicher (LAN) |
| **SAN** | Blockbasiertes, dediziertes Speichernetz |
| **Block- vs. dateibasiert** | Rohblöcke (wie Platte) vs. Dateien/Freigaben |

---

## Prüfungstipps

- **NAS = dateibasiert (LAN)**, **SAN = blockbasiert (eigenes Netz)** – der Kernunterschied.
- Zu einem Szenario das passende Konzept begründen (Kosten vs. Leistung vs. gemeinsame Nutzung).
- Speichersysteme mit **RAID** (Ausfallsicherheit) und **Backup** (Datensicherung) kombinieren.

---

## Übungsaufgabe

**Aufgabe (nach ConSystem GmbH):** Ein Kunde benötigt gemeinsamen Dateizugriff für mehrere Mitarbeiter und ein Hochleistungs-Speichernetz für virtualisierte Server. Empfiehl jeweils DAS, NAS oder SAN und begründe.

---

## Querverweise

- [05-04 Redundante Systeme (RAID)](./05-04-redundante-systeme.md)
- [05-08 Serversysteme](./05-08-serversysteme.md)
