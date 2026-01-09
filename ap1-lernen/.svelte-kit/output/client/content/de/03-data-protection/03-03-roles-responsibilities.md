# Rollen und Verantwortlichkeiten im Datenschutz

## Lernziele

Nach diesem Kapitel solltest du:
- Die wichtigsten Rollen im Datenschutz kennen
- Die Pflichten des Verantwortlichen erklären können
- Wissen, wann ein Datenschutzbeauftragter benötigt wird
- Die Aufgaben des Datenschutzbeauftragten kennen

---

## Kerninhalt

### Übersicht der Rollen

```
┌─────────────────────────────────────────────────────────────────┐
│                 ROLLEN IM DATENSCHUTZ                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │              BETROFFENER (Datensubjekt)                  │  │
│  │         Person, deren Daten verarbeitet werden           │  │
│  └──────────────────────────────────────────────────────────┘  │
│                           ▲                                     │
│                           │ Rechte                              │
│                           │                                     │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │              VERANTWORTLICHER                            │  │
│  │     Entscheidet über Zweck und Mittel der Verarbeitung   │  │
│  │     → Hauptverantwortung für Datenschutz                 │  │
│  └──────────────────────────────────────────────────────────┘  │
│            │                              │                     │
│            │ beauftragt                   │ kann benennen       │
│            ▼                              ▼                     │
│  ┌──────────────────┐          ┌──────────────────────────┐   │
│  │AUFTRAGSVERARBEITER│          │DATENSCHUTZBEAUFTRAGTER  │   │
│  │Verarbeitet Daten │          │Überwacht Einhaltung      │   │
│  │im Auftrag        │          │des Datenschutzes         │   │
│  └──────────────────┘          └──────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Der Verantwortliche (Art. 4 Nr. 7 DSGVO)

#### Definition

Der **Verantwortliche** ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die **Zwecke und Mittel** der Verarbeitung personenbezogener Daten entscheidet.

#### Pflichten des Verantwortlichen

| Pflicht | Beschreibung | DSGVO-Artikel |
|---------|--------------|---------------|
| **Rechenschaftspflicht** | Nachweis der DSGVO-Einhaltung | Art. 5 Abs. 2 |
| **Informationspflicht** | Betroffene informieren | Art. 13, 14 |
| **Datensicherheit** | TOMs implementieren | Art. 32 |
| **Verarbeitungsverzeichnis** | Dokumentation führen | Art. 30 |
| **Meldepflicht** | Datenpannen melden (72h) | Art. 33 |
| **Datenschutz-Folgenabschätzung** | Bei hohem Risiko durchführen | Art. 35 |

---

### Der Auftragsverarbeiter (Art. 4 Nr. 8 DSGVO)

#### Definition

Der **Auftragsverarbeiter** ist eine natürliche oder juristische Person, die personenbezogene Daten **im Auftrag des Verantwortlichen** verarbeitet.

#### Beispiele für Auftragsverarbeitung

| Auftragsverarbeiter | Tätigkeit |
|--------------------|-----------|
| Cloud-Anbieter | Speicherung von Daten |
| Rechenzentrum | Hosting von Servern |
| Marketing-Agentur | Newsletter-Versand |
| Lohnbüro | Gehaltsabrechnung |

#### Auftragsverarbeitungsvertrag (AVV)

Nach Art. 28 DSGVO ist ein **Vertrag** zwischen Verantwortlichem und Auftragsverarbeiter erforderlich:

| Inhalt | Beispiel |
|--------|----------|
| Gegenstand und Dauer | Welche Daten, wie lange |
| Art und Zweck | E-Mail-Marketing |
| Kategorien von Daten | Name, E-Mail |
| Pflichten des Auftragsverarbeiters | Weisungsbindung, TOMs |
| Rechte des Verantwortlichen | Kontrollrechte |

---

### Der Datenschutzbeauftragte (DSB)

#### Wann ist ein DSB zu benennen?

Nach Art. 37 DSGVO und § 38 BDSG:

```
┌─────────────────────────────────────────────────────────────────┐
│          WANN IST EIN DSB ERFORDERLICH?                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌────────────────────────────────────────────────────────┐    │
│  │ 1. Öffentliche Stelle/Behörde                          │    │
│  │    → IMMER DSB erforderlich (Art. 37 Abs. 1 a DSGVO)   │    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                 │
│  ┌────────────────────────────────────────────────────────┐    │
│  │ 2. Kerntätigkeit: Umfangreiche Überwachung             │    │
│  │    → DSB erforderlich (Art. 37 Abs. 1 b DSGVO)         │    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                 │
│  ┌────────────────────────────────────────────────────────┐    │
│  │ 3. Kerntätigkeit: Besondere Datenkategorien (Art. 9)   │    │
│  │    → DSB erforderlich (Art. 37 Abs. 1 c DSGVO)         │    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                 │
│  ┌────────────────────────────────────────────────────────┐    │
│  │ 4. ≥ 20 Personen mit automatisierter Verarbeitung      │    │
│  │    → DSB erforderlich (§ 38 Abs. 1 BDSG)               │    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                 │
│  ┌────────────────────────────────────────────────────────┐    │
│  │ 5. Datenschutz-Folgenabschätzung erforderlich          │    │
│  │    → DSB erforderlich (§ 38 Abs. 1 BDSG)               │    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Aufgaben des DSB (Art. 39 DSGVO)

| Aufgabe | Beschreibung |
|---------|--------------|
| **Unterrichtung und Beratung** | Verantwortliche und Mitarbeiter informieren |
| **Überwachung** | Einhaltung der DSGVO überwachen |
| **Beratung bei DSFA** | Bei Datenschutz-Folgenabschätzung beraten |
| **Zusammenarbeit** | Mit Aufsichtsbehörde kooperieren |
| **Anlaufstelle** | Für Aufsichtsbehörde erreichbar sein |

#### Stellung des DSB

- **Weisungsfrei** in Ausübung seiner Aufgaben
- **Kündigungsschutz** (wie Betriebsrat)
- **Kann intern oder extern** sein
- Darf **keine Interessenkonflikte** haben (z.B. nicht IT-Leiter)

---

### Die Aufsichtsbehörde

| Ebene | Behörde |
|-------|---------|
| **Bund** | Bundesbeauftragte/r für Datenschutz und Informationsfreiheit (BfDI) |
| **Länder** | Landesdata-protectionbeauftragte |

**Aufgaben:**
- Überwachung der DSGVO-Einhaltung
- Beratung von Unternehmen
- Verhängung von Bußgeldern
- Bearbeitung von Beschwerden

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Verantwortlicher** | Entscheidet über Zweck und Mittel der Verarbeitung |
| **Auftragsverarbeiter** | Verarbeitet Daten im Auftrag |
| **DSB** | Datenschutzbeauftragter |
| **AVV** | Auftragsverarbeitungsvertrag |
| **Aufsichtsbehörde** | Staatliche Kontrolle des Datenschutzes |
| **DSFA** | Datenschutz-Folgenabschätzung |

---

## Prüfungstipps

### Häufige Prüfungsfragen
- Wann muss ein Datenschutzbeauftragter benannt werden?
- Was sind die Aufgaben des Datenschutzbeauftragten?
- Was ist der Unterschied zwischen Verantwortlichem und Auftragsverarbeiter?

### Wichtig zu merken
- **≥ 20 Personen** mit automatisierter Verarbeitung → DSB erforderlich (§ 38 BDSG)
- DSB ist **weisungsfrei**
- **Auftragsverarbeitungsvertrag** ist Pflicht

---

## Übungsaufgaben

### Aufgabe 1
Wann muss ein Unternehmen einen Datenschutzbeauftragten benennen?

**Lösung:** Ein DSB muss benannt werden, wenn:
1. ≥ 20 Personen ständig mit automatisierter Verarbeitung beschäftigt sind (§ 38 BDSG)
2. Datenschutz-Folgenabschätzung erforderlich ist
3. Die Kerntätigkeit die umfangreiche Verarbeitung besonderer Datenkategorien umfasst
4. Die Kerntätigkeit umfangreiche, systematische Überwachung von Personen erfordert

### Aufgabe 2
Was ist der Unterschied zwischen Verantwortlichem und Auftragsverarbeiter?

**Lösung:**
- **Verantwortlicher:** Entscheidet selbst über Zweck und Mittel der Datenverarbeitung, trägt die Hauptverantwortung
- **Auftragsverarbeiter:** Verarbeitet Daten nur im Auftrag und nach Weisung des Verantwortlichen

### Aufgabe 3
Nennen Sie drei Aufgaben des Datenschutzbeauftragten.

**Lösung:**
1. Unterrichtung und Beratung des Verantwortlichen und der Mitarbeiter
2. Überwachung der Einhaltung der DSGVO
3. Beratung bei Datenschutz-Folgenabschätzungen
(oder: Zusammenarbeit mit Aufsichtsbehörde, Anlaufstelle sein)

---

## Querverweise

- [03-01-01 DSGVO-Grundsätze](./03-01-fundamentals/03-01-01-gdpr-principles.md) - Rechtliche Grundlage
- [03-02-01 TOM](./03-02-technical-measures/03-02-01-tom.md) - Pflichten des Verantwortlichen
- [08-04-01 Vertragsarten](../08-business-processes/08-04-contract-law/08-04-01-contract-types.md) - Auftragsverarbeitungsvertrag
