# Page 119 - Backup-Arten & Backup-Strategien

## Differenzielles Backup (Fortsetzung)

- **Vorteil:** Schnellere Wiederherstellung als beim inkrementellen Backup.
- **Nachteil:** Benötigt mehr Speicherplatz als inkrementelle Backups.

#### Spiegelung (Mirroring)

- **Echtzeit-Kopie** der Daten auf ein zweites Speichermedium.
- **Vorteil:** Sofortige Verfügbarkeit der Daten.
- **Nachteil:** Kein Schutz vor logischen Fehlern oder Malware, da fehlerhafte Daten ebenfalls gespiegelt werden.

---

## Backup-Strategien

### 3-2-1-Backup-Regel

- **3 Kopien** der Daten (Original + zwei Backups).
- **2 verschiedene Medien** (z. B. externe Festplatte und Cloud).
- **1 Kopie extern** (z. B. Offsite-Backup in einem anderen Rechenzentrum).

### Cold, Warm & Hot Backups

- **Cold Backup:** Offline-Sicherung, benötigt manuelle Wiederherstellung.
- **Warm Backup:** Schnell aktivierbare Sicherung mit regelmäßigen Updates.
- **Hot Backup:** Ständig synchronisierte Live-Kopie für sofortige Nutzung.

### Air-Gapped Backup

- Datensicherung auf einem **nicht mit dem Netzwerk verbundenen System** als Schutz vor Ransomware.

### Speicherorte für Backups

- **Lokale Backups:** Externe Festplatten, NAS-Systeme.
- **Cloud-Backups:** Online-Speicher (z. B. AWS, Microsoft Azure, Google Drive).
- **Bandlaufwerke:** Langlebig, aber langsamer Zugriff.
