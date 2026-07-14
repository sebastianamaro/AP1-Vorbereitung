# Bedrohungsszenarien

## Lernziele

Nach diesem Kapitel solltest du:
- Typische Bedrohungen für IT-Systeme kennen
- Zwischen vorbeugenden Maßnahmen und Reaktionen unterscheiden
- Zu einem Szenario angemessene Maßnahmen vorschlagen

---

## Kerninhalt

### Typische Bedrohungen

| Bedrohung | Beispiel |
|-----------|----------|
| **Schadsoftware** | Viren, Würmer, Trojaner, **Ransomware** (Verschlüsselung + Erpressung) |
| **Social Engineering / Phishing** | Täuschung von Mitarbeitern zur Preisgabe von Zugangsdaten |
| **Angriffe** | Brute-Force, **DoS/DDoS**, SQL-Injection, Man-in-the-Middle |
| **Physisch/Umwelt** | Diebstahl, Feuer, Wasser, Stromausfall |
| **Menschliches Versagen** | Fehlbedienung, versehentliches Löschen |
| **Innentäter** | Datendiebstahl durch Mitarbeiter |

### Vorbeugung vs. Reaktion

| Szenario | Vorsichtsmaßnahme (verhindern) | Reaktion (bei Eintritt) |
|----------|-------------------------------|-------------------------|
| **Ransomware** | Backups (offline!), Updates, Awareness-Schulung, Virenschutz | System isolieren, aus Backup wiederherstellen, **nicht zahlen**, Vorfall melden |
| **Phishing** | Schulungen, Spam-/Mailfilter, 2FA | Passwörter ändern, Konten sperren, Betroffene informieren |
| **DDoS** | Firewall/WAF, Lastverteilung, DDoS-Schutz beim Provider | Traffic filtern, Provider einbinden, hochskalieren |
| **Stromausfall** | **USV**, Notstrom, Redundanz | auf USV/Notstrom umschalten, geordnet herunterfahren |
| **Datenverlust** | RAID, regelmäßige Backups | Wiederherstellung aus Backup |

> **Merksatz:** Immer **beide** Seiten betrachten – *präventiv* (vorher) und *reaktiv* (danach, inkl. Notfallplan/Incident Response).

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Ransomware** | Schadsoftware, die Daten verschlüsselt und Lösegeld fordert |
| **Social Engineering** | Manipulation von Menschen zur Preisgabe von Informationen |
| **DoS/DDoS** | (Verteilte) Überlastungsangriffe auf die Verfügbarkeit |
| **Incident Response** | Geplantes Vorgehen bei Sicherheitsvorfällen |

---

## Prüfungstipps

- Aufgaben verlangen oft **je Bedrohung** eine **Vorsichtsmaßnahme UND eine Reaktion** – beides liefern.
- Bei Ransomware: **Backups (offline)** als wichtigste Vorbeugung, **kein Lösegeld** als Reaktionsempfehlung.
- Maßnahmen den **Schutzzielen** zuordnen können (z. B. Backup → Verfügbarkeit/Integrität).

---

## Übungsaufgabe

**Aufgabe (nach ConSystem GmbH):** Schlage zu gegebenen Bedrohungsszenarien jeweils eine Vorsichtsmaßnahme zur Verhinderung und eine angemessene Reaktion bei Eintritt vor.

---

## Querverweise

- [04-05 Schwachstellen analysieren](./04-05-schwachstellen-analysieren.md)
- [05-07 Unterbrechungsfreie Stromversorgung](../05-it-systems/05-07-usv.md)
