# Page 120 - Backup-Anforderungen & 11.20 Verschlüsselungstechniken

## Wichtige Backup-Anforderungen

- Regelmäßige Backups (z. B. täglich, wöchentlich, monatlich).
- Automatisierung zur Vermeidung menschlicher Fehler.
- Verschlüsselung und Zugriffsschutz für vertrauliche Daten.
- Regelmäßige Tests der Wiederherstellung (Disaster Recovery Tests)

---

## 11.20 Verschlüsselungstechniken

**Verschlüsselung** dient dem Schutz von Daten vor unbefugtem Zugriff, indem sie in eine unlesbare Form umgewandelt werden. Es gibt drei Hauptarten: **symmetrische, asymmetrische und hybride Verschlüsselung**.

### Symmetrische Verschlüsselung

Bei der **symmetrischen Verschlüsselung** wird für Ver- und Entschlüsselung **derselbe Schlüssel** verwendet.

**Beispiele:**
- AES (Advanced Encryption Standard)
- DES (Data Encryption Standard, veraltet)

**Vorteile:**
- Sehr schnell und effizient, da nur ein Schlüssel verwendet wird.
- Gut geeignet für große Datenmengen.

**Nachteile:**
- Sichere Schlüsselverteilung ist problematisch.
- Falls der Schlüssel kompromittiert wird, sind die Daten nicht mehr sicher.

### Asymmetrische Verschlüsselung

Bei der **asymmetrischen Verschlüsselung** gibt es zwei Schlüssel:

- **Öffentlicher Schlüssel:** Zum Verschlüsseln von Daten.
- **Privater Schlüssel:** Zum Entschlüsseln der Daten.

**Beispiele:**
