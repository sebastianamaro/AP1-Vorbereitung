# Redundante Systeme (RAID, Hochverfügbarkeit)

## Lernziele

Nach diesem Kapitel solltest du:
- Redundanz als Mittel zur Verfügbarkeitssteigerung verstehen
- Die wichtigsten RAID-Level unterscheiden
- Hochverfügbarkeit und Failover einordnen

---

## Kerninhalt

### Redundanz

**Redundanz** bedeutet, kritische Komponenten **mehrfach** vorzuhalten, damit beim Ausfall einer Komponente eine andere übernimmt → höhere **Verfügbarkeit**. Beispiele: doppelte Netzteile, redundante Netzwerkpfade, Cluster, gespiegelte Server.

### RAID (Redundant Array of Independent Disks)

Kombiniert mehrere Festplatten zu einem Verbund für **Ausfallsicherheit** und/oder **Performance**:

| RAID | Prinzip | Redundanz | Nutzkapazität |
|------|---------|-----------|---------------|
| **RAID 0** | Striping (Aufteilung) | **keine** (nur Performance) | 100 % |
| **RAID 1** | Mirroring (Spiegelung) | ja (1 Platte darf ausfallen) | 50 % |
| **RAID 5** | Striping + verteilte Parität | 1 Platte darf ausfallen | (n−1)/n |
| **RAID 6** | wie 5, doppelte Parität | 2 Platten dürfen ausfallen | (n−2)/n |
| **RAID 10** | Kombination 1+0 (gespiegelte Stripes) | ja | 50 % |

> **Merke:** RAID 0 bietet **keine** Redundanz. RAID ersetzt **kein Backup** (schützt nicht vor Löschen/Ransomware).

### Hochverfügbarkeit (HA)

- **Failover / Cluster:** automatische Übernahme durch ein Ersatzsystem
- **Verfügbarkeit** wird oft in „Neunen“ gemessen (z. B. 99,9 % ≈ 8,7 h Ausfall/Jahr)
- Weitere Maßnahmen: USV (Strom), redundante Netzanbindung, georedundante Standorte

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Redundanz** | Mehrfachauslegung kritischer Komponenten |
| **RAID** | Plattenverbund für Ausfallsicherheit/Performance |
| **Parität** | Prüfinformation zur Rekonstruktion bei Plattenausfall |
| **Failover** | Automatische Übernahme durch Ersatzsystem |

---

## Prüfungstipps

- **RAID-Level** und ihre Redundanz/Nutzkapazität kennen (v. a. 0/1/5/10).
- **RAID ≠ Backup** – häufige Prüfungsaussage.
- Verfügbarkeit mit konkreten Maßnahmen (RAID, USV, Cluster) verknüpfen.
- **Hinweis:** RAID/SAN sind aus der AP1 in den AP2-/Vertiefungsbereich gewandert (siehe [Katalogänderungen](../00-exam-overview/00-02-catalog-changes.md)).

---

## Übungsaufgabe

**Aufgabe (nach ConSystem GmbH):** Ein Kunde will die Verfügbarkeit erhöhen. Erkläre RAID 1, RAID 5 und RAID 10 mit ihrer jeweiligen Ausfallsicherheit und warum RAID kein Backup ersetzt.

---

## Querverweise

- [05-06 Speichersysteme](./05-06-speichersysteme.md)
- [05-07 Unterbrechungsfreie Stromversorgung](./05-07-usv.md)
