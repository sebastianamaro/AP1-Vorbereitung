# Datenschutz - Kapitelübersicht

## Einführung

Datenschutz bezeichnet den Schutz vor Missbrauch personenbezogener Daten und schützt das Recht auf informationelle Selbstbestimmung. In der digitalen Welt ist Datenschutz besonders wichtig, da Daten leicht gesammelt, verarbeitet und weitergegeben werden können.

---

## Prüfungsrelevanz

Datenschutz ist ein wichtiges Thema in der AP1-Prüfung. Besonders relevant sind:

- DSGVO-Grundsätze und -Prinzipien
- Personenbezogene Daten (Definition und Beispiele)
- Betroffenenrechte nach DSGVO
- Technisch-organisatorische Maßnahmen (TOM)
- Anonymisierung und Pseudonymisierung (NEU 2025!)
- Rollen: Datenschutzbeauftragter, Verantwortlicher, Auftragsverarbeiter

---

## Kapitelstruktur

```
03-data-protection/
├── 03-00-overview.md (Diese Datei)
├── 03-01-fundamentals/
│   ├── 03-01-01-gdpr-principles.md
│   ├── 03-01-02-personal-data.md
│   └── 03-01-03-data-subject-rights.md
├── 03-02-technical-measures/
│   ├── 03-02-01-tom.md
│   ├── 03-02-02-anonymization-pseudonymization.md
│   └── 03-02-03-standard-data-protection-model.md
└── 03-03-roles-responsibilities.md
```

---

## Rechtliche Grundlagen

### Hierarchie der Datenschutzgesetze

```
┌─────────────────────────────────────────────────────────────────┐
│                    EU-EBENE                                      │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │    DSGVO - Datenschutz-Grundverordnung (EU) 2016/679      │  │
│  │    Gilt EU-weit seit 25.05.2018                           │  │
│  └───────────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────┤
│                    NATIONALE EBENE                               │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │    BDSG - Bundesdata-protectiongesetz                         │  │
│  │    Ergänzt DSGVO für Deutschland (Öffnungsklauseln)       │  │
│  └───────────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────┤
│                    BEREICHSSPEZIFISCH                            │
│  ┌─────────────────────┐  ┌─────────────────────┐              │
│  │   TMG/TTDSG         │  │   TKG               │              │
│  │   Telemedien        │  │   Telecommunication │              │
│  └─────────────────────┘  └─────────────────────┘              │
└─────────────────────────────────────────────────────────────────┘
```

---

## Die 6 Grundsätze der DSGVO (Art. 5)

| Nr. | Grundsatz | Beschreibung |
|-----|-----------|--------------|
| 1 | **Rechtmäßigkeit, Transparenz** | Verarbeitung nur mit Rechtsgrundlage, nachvollziehbar |
| 2 | **Zweckbindung** | Nur für festgelegte, legitime Zwecke |
| 3 | **Datenminimierung** | Nur notwendige Daten erheben |
| 4 | **Richtigkeit** | Daten müssen korrekt und aktuell sein |
| 5 | **Speicherbegrenzung** | Nur so lange wie nötig speichern |
| 6 | **Integrität und Vertraulichkeit** | Angemessene Sicherheit gewährleisten |

---

## Wichtige Rollen im Datenschutz

| Rolle | Beschreibung |
|-------|--------------|
| **Betroffener** | Person, deren Daten verarbeitet werden |
| **Verantwortlicher** | Entscheidet über Zweck und Mittel der Verarbeitung |
| **Auftragsverarbeiter** | Verarbeitet Daten im Auftrag des Verantwortlichen |
| **Datenschutzbeauftragter** | Überwacht Einhaltung des Datenschutzes |
| **Aufsichtsbehörde** | Staatliche Kontrolle (z.B. Landesdata-protectionbeauftragte) |

---

## Querverweise

- [04-01-01 CIA-Triade](../04-it-security/04-01-protection-goals/04-01-01-cia-triad.md) - Vertraulichkeit als Schutzziel
- [04-05-01 Verschlüsselungsverfahren](../04-it-security/04-05-cryptography/04-05-01-encryption-methods.md) - Technische Umsetzung
- [08-04-01 Vertragsarten](../08-business-processes/08-04-contract-law/08-04-01-contract-types.md) - Auftragsverarbeitung
