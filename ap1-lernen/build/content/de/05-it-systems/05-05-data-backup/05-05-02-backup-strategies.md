# Backup-Strategien

## Lernziele

Nach diesem Kapitel solltest du:
- Die 3-2-1 Backup-Regel erklären können
- Backup-Medien und ihre Eignung kennen
- Backup-Rotationsverfahren verstehen
- Eine Backup-Strategie planen können

---

## Kerninhalt

### Die 3-2-1 Backup-Regel

Die **3-2-1 Regel** ist der Goldstandard für Datensicherung.

```
┌─────────────────────────────────────────────────────────────────┐
│                    3-2-1 BACKUP-REGEL                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   3 ─────► 3 Kopien der Daten                                  │
│            ┌─────────┐ ┌─────────┐ ┌─────────┐                │
│            │Original │ │ Backup 1│ │ Backup 2│                │
│            └─────────┘ └─────────┘ └─────────┘                │
│                                                                 │
│   2 ─────► 2 verschiedene Speichermedien                       │
│            ┌─────────┐ ┌─────────┐                            │
│            │   SSD   │ │   NAS   │                            │
│            └─────────┘ └─────────┘                            │
│            Unterschiedliche Technologien!                      │
│                                                                 │
│   1 ─────► 1 Kopie außerhalb (Offsite)                        │
│            ┌─────────────────────┐                            │
│            │   ☁ Cloud-Backup   │  oder externes Medium       │
│            │   oder ext. Standort│  an anderem Ort            │
│            └─────────────────────┘                            │
│                                                                 │
│   Schutz vor: Hardware-Ausfall, Diebstahl, Brand, Ransomware  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

| Regel | Bedeutung | Schutz vor |
|-------|-----------|------------|
| **3** | 3 Kopien der Daten | Datenverlust allgemein |
| **2** | 2 verschiedene Medientypen | Hardware-spezifischen Fehlern |
| **1** | 1 Kopie extern/offsite | Lokalen Katastrophen (Brand, Diebstahl) |

---

### Erweitert: 3-2-1-1-0 Regel

Die moderne Erweiterung für erhöhte Sicherheit:

| Regel | Bedeutung |
|-------|-----------|
| **3** | 3 Kopien der Daten |
| **2** | 2 verschiedene Medientypen |
| **1** | 1 Kopie extern/offsite |
| **1** | 1 Kopie offline (Air-Gap) |
| **0** | 0 Fehler (verifizierte Backups) |

**Air-Gap:** Backup physisch vom Netzwerk getrennt → Schutz vor Ransomware

---

### Backup-Medien

| Medium | Vorteile | Nachteile | Einsatz |
|--------|----------|-----------|---------|
| **Externe HDD** | Günstig, hohe Kapazität | Empfindlich, mechanisch | Heim, KMU |
| **Externe SSD** | Schnell, robust | Teurer | Mobil, wichtige Daten |
| **NAS** | Netzwerkzugriff, redundant | Initial teuer | Unternehmen |
| **Bandlaufwerk (Tape)** | Sehr günstig/TB, langlebig | Langsam, sequenziell | Archiv, Großenterprise |
| **Cloud** | Offsite, skalierbar | Laufende Kosten, Datenschutz | Offsite-Backup |
| **USB-Stick** | Portabel, günstig | Geringe Kapazität | Einzelne Dateien |

---

### Backup-Rotation: Großvater-Vater-Sohn (GVS)

Das **GVS-Prinzip** (Grandfather-Father-Son) ist ein bewährtes Rotationsschema.

```
┌────────────────────────────────────────────────────────────────┐
│           GROSSVATER-VATER-SOHN PRINZIP                        │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  SOHN (Täglich) ─────────────────────────────────────────────│
│  Mo    Di    Mi    Do    Fr                                   │
│  [S1]  [S2]  [S3]  [S4]  [S5]                                │
│                            ↓                                   │
│  VATER (Wöchentlich) ────────────────────────────────────────│
│  Woche 1    Woche 2    Woche 3    Woche 4                     │
│  [V1]       [V2]       [V3]       [V4]                        │
│                                     ↓                          │
│  GROSSVATER (Monatlich) ─────────────────────────────────────│
│  Jan    Feb    Mär    Apr    ...    Dez                       │
│  [G1]   [G2]   [G3]   [G4]   ...    [G12]                     │
│                                                                │
│  Benötigte Medien: 5 + 4 + 12 = 21 (für ein Jahr)            │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Generation | Häufigkeit | Aufbewahrung | Zweck |
|------------|------------|--------------|-------|
| **Sohn** | Täglich | 1 Woche (5 Medien) | Aktuelle Änderungen |
| **Vater** | Wöchentlich | 1 Monat (4 Medien) | Wöchentliche Stände |
| **Großvater** | Monatlich | 1 Jahr (12 Medien) | Langzeitarchiv |

---

### Backup-Fenster und RPO/RTO

```
┌────────────────────────────────────────────────────────────────┐
│                    RPO und RTO                                 │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  ◄─────── RPO ────────►│◄─────────── RTO ──────────────►     │
│                        │                                       │
│  Letztes    Daten-     │   Ausfall      System                │
│  Backup    verlust     │                wieder OK             │
│    │          │        │       │           │                   │
│  ──┴──────────┴────────┼───────┴───────────┴──────────► Zeit  │
│                        │                                       │
│                    Ausfall                                     │
│                    tritt ein                                   │
│                                                                │
│  RPO = Recovery Point Objective                                │
│        Wie viel Datenverlust ist akzeptabel?                  │
│        (z.B. max. 4 Stunden = 4h RPO)                         │
│                                                                │
│  RTO = Recovery Time Objective                                 │
│        Wie lange darf die Wiederherstellung dauern?           │
│        (z.B. max. 2 Stunden = 2h RTO)                         │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Begriff | Definition | Beispiel |
|---------|------------|----------|
| **RPO** | Recovery Point Objective - max. akzeptabler Datenverlust | RPO 4h = max. 4 Stunden Datenverlust |
| **RTO** | Recovery Time Objective - max. Wiederherstellungszeit | RTO 2h = System in 2h wieder online |
| **Backup-Fenster** | Zeitraum für Datensicherung | Nachts 22-06 Uhr |

---

### Backup-Best-Practices

| Praxis | Beschreibung |
|--------|--------------|
| **Regelmäßig testen** | Restore regelmäßig prüfen! |
| **Verschlüsselung** | Backup-Daten verschlüsseln |
| **Dokumentation** | Backup-Prozesse dokumentieren |
| **Monitoring** | Backup-Erfolg überwachen |
| **Versionierung** | Mehrere Backup-Versionen vorhalten |
| **Automatisierung** | Backups automatisch ausführen |

---

### Backup-Strategien im Vergleich

| Strategie | Beschreibung | Geeignet für |
|-----------|--------------|--------------|
| **Nur Vollbackup** | Einfach, viel Speicher | Kleine Datenmengen |
| **Voll + Inkrementell** | Effizient, komplexer Restore | Große Datenmengen |
| **Voll + Differenziell** | Kompromiss | Mittlere Anforderungen |
| **Kontinuierlich (CDP)** | Echtzeit-Sicherung | Kritische Systeme |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **3-2-1 Regel** | 3 Kopien, 2 Medien, 1 extern |
| **GVS** | Großvater-Vater-Sohn Rotation |
| **RPO** | Recovery Point Objective (max. Datenverlust) |
| **RTO** | Recovery Time Objective (max. Ausfallzeit) |
| **Air-Gap** | Physisch getrenntes Backup |
| **Offsite** | Backup an externem Standort |
| **CDP** | Continuous Data Protection |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was bedeutet die 3-2-1 Regel?
- Was ist RPO und RTO?
- Erklären Sie das Großvater-Vater-Sohn Prinzip

### Wichtig zu merken

- **3-2-1:** 3 Kopien, 2 Medientypen, 1 extern
- **RPO:** Wie viel Datenverlust ist akzeptabel?
- **RTO:** Wie lange darf Wiederherstellung dauern?
- **Backups müssen getestet werden!**

---

## Übungsaufgaben

### Aufgabe 1
Erklären Sie die 3-2-1 Backup-Regel.

**Lösung:**
- **3:** Mindestens 3 Kopien der Daten (Original + 2 Backups)
- **2:** Auf mindestens 2 verschiedenen Speichermedien (z.B. interne SSD + NAS)
- **1:** Mindestens 1 Kopie an einem externen Standort (Cloud oder physisch extern)

Diese Regel schützt vor verschiedenen Risiken: Hardware-Ausfall (2 Medien), lokale Katastrophen wie Brand oder Diebstahl (1 extern).

### Aufgabe 2
Ein Unternehmen hat folgende Anforderungen: Maximaler Datenverlust von 4 Stunden, System muss innerhalb von 2 Stunden wieder laufen. Wie lauten RPO und RTO?

**Lösung:**
- **RPO (Recovery Point Objective):** 4 Stunden
  - Backups müssen mindestens alle 4 Stunden erfolgen
- **RTO (Recovery Time Objective):** 2 Stunden
  - Wiederherstellung muss in max. 2 Stunden möglich sein

### Aufgabe 3
Wie viele Backup-Medien werden beim Großvater-Vater-Sohn Prinzip für ein Jahr benötigt?

**Lösung:**
- **Sohn (täglich):** 5 Medien (Mo-Fr)
- **Vater (wöchentlich):** 4 Medien (4 Wochen)
- **Großvater (monatlich):** 12 Medien (12 Monate)

**Gesamt: 21 Medien** für ein komplettes Jahr mit täglichen, wöchentlichen und monatlichen Sicherungspunkten.

### Aufgabe 4
Warum ist ein Air-Gap-Backup wichtig?

**Lösung:** Ein **Air-Gap-Backup** ist physisch vom Netzwerk getrennt (z.B. externe Festplatte im Tresor). Es schützt besonders vor **Ransomware**, die alle erreichbaren Backups verschlüsseln würde. Da das Air-Gap-Backup nicht online ist, kann die Schadsoftware es nicht erreichen.

---

## Querverweise

- [05-05-01 Backup-Arten](./05-05-01-backup-types.md) - Voll, Inkr., Diff.
- [05-02-04 NAS und Verfügbarkeit](../05-02-hardware/05-02-04-nas-availability.md) - NAS als Backup-Ziel
- [04-02-01 Bedrohungsarten](../../04-it-security/04-02-threats-risks/04-02-01-threat-types.md) - Ransomware
