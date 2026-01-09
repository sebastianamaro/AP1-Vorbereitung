# Page 118 - Härtung & 11.19 Datensicherungsverfahren

## Härtung des Betriebssystems (Fortsetzung)

- Zugriffsrechte auf sensible Dateien und Verzeichnisse einschränken

### Automatisierte Härtung

- **Security Baselines** (z. B. CIS Benchmarks, BSI IT-Grundschutz) verwenden
- **Härtungsskripte und Tools** nutzen (z. B. Microsoft Security Compliance Toolkit, Lynis für Linux)

### Vorteile

- Schutz vor Cyberangriffen, Malware und Exploits
- Minimierung von Sicherheitslücken durch reduzierte Angriffsfläche
- Erfüllung von Compliance-Anforderungen (z. B. DSGVO, ISO 27001)

---

## 11.19 Datensicherungsverfahren

**Datensicherung (Backup)** ist eine zentrale Maßnahme zur Wiederherstellung von Daten im Falle von Hardware-Ausfällen, Cyberangriffen oder menschlichen Fehlern.

### Backup-Arten

#### Voll-Backup (Full Backup)

- Es wird eine **komplette Kopie aller Daten** erstellt.
- **Vorteil:** Schnelle Wiederherstellung.
- **Nachteil:** Hoher Speicherbedarf und lange Sicherungsdauer.

#### Inkrementelles Backup

- Es werden nur die **seit dem letzten Backup geänderten Daten** gesichert.
- **Vorteil:** Schnelle Sicherung, wenig Speicherverbrauch.
- **Nachteil:** Wiederherstellung dauert länger, da mehrere Backup-Stände benötigt werden.

#### Differenzielles Backup

- Sichert alle **seit dem letzten Voll-Backup geänderten Dateien**.
