# Qualitätsmanagement - Kapitelübersicht

## Einführung

Qualitätsmanagement (QM) ist ein systematischer Ansatz zur Sicherstellung und Verbesserung der Qualität von Produkten und Dienstleistungen. In der IT-Branche spielt QM eine zentrale Rolle bei der Entwicklung von Software, der Bereitstellung von IT-Services und der Einrichtung von Arbeitsplätzen.

---

## Prüfungsrelevanz

Qualitätsmanagement ist ein wichtiger Bestandteil der AP1-Prüfung. Typische Prüfungsthemen sind:

- Definition und Bedeutung von Qualität
- DIN EN ISO 9000ff. Normenreihe
- Die 7 Grundsätze des Qualitätsmanagements
- PDCA-Zyklus (Plan-Do-Check-Act)
- Zertifizierungsprozesse
- Barrierefreiheit in der IT

---

## Kapitelstruktur

```
02-quality-management/
├── 02-00-overview.md (Diese Datei)
├── 02-01-fundamentals/
│   ├── 02-01-01-quality-concept.md
│   └── 02-01-02-qm-systems.md
├── 02-02-standards-certification/
│   ├── 02-02-01-din-en-iso-9000.md
│   └── 02-02-02-certification.md
├── 02-03-management-approaches/
│   ├── 02-03-01-tqm.md
│   └── 02-03-02-pdca-cycle.md
├── 02-04-software-quality.md
└── 02-05-accessibility.md
```

---

## Zusammenhänge im Qualitätsmanagement

```
┌─────────────────────────────────────────────────────────────────┐
│                    QUALITÄTSMANAGEMENT                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐         │
│  │ QUALITÄTS-  │    │ QUALITÄTS-  │    │ QUALITÄTS-  │         │
│  │  PLANUNG    │ ─► │  LENKUNG    │ ─► │  SICHERUNG  │         │
│  └─────────────┘    └─────────────┘    └─────────────┘         │
│        │                  │                  │                  │
│        └──────────────────┼──────────────────┘                  │
│                           ▼                                     │
│                    ┌─────────────┐                              │
│                    │ QUALITÄTS-  │                              │
│                    │ PRÜFUNG     │                              │
│                    └─────────────┘                              │
│                           │                                     │
│                           ▼                                     │
│              ┌─────────────────────────┐                        │
│              │ KONTINUIERLICHE         │                        │
│              │ VERBESSERUNG (KVP)      │                        │
│              │      PDCA-Zyklus        │                        │
│              └─────────────────────────┘                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Die 7 Grundsätze des Qualitätsmanagements

Nach DIN EN ISO 9000ff.:

| Nr. | Grundsatz | Bedeutung |
|-----|-----------|-----------|
| 1 | **Kundenorientierung** | Kundenbedürfnisse verstehen und erfüllen |
| 2 | **Führung** | Einheitliche Ausrichtung durch Führungskräfte |
| 3 | **Einbeziehung von Personen** | Mitarbeiter auf allen Ebenen beteiligen |
| 4 | **Prozessorientierter Ansatz** | Aktivitäten als zusammenhängende Prozesse verstehen |
| 5 | **Verbesserung** | Kontinuierliche Verbesserung als Ziel |
| 6 | **Faktenbasierte Entscheidungsfindung** | Entscheidungen auf Datenanalyse basieren |
| 7 | **Beziehungsmanagement** | Beziehungen zu Lieferanten und Partnern pflegen |

---

## Wichtige Normen im Überblick

| Norm | Inhalt |
|------|--------|
| **DIN EN ISO 9000** | Grundlagen und Begriffe des QM |
| **DIN EN ISO 9001** | Anforderungen an QM-Systeme (zertifizierbar) |
| **DIN EN ISO 9004** | Leitfaden zur Leistungsverbesserung |

---

## Querverweise

- [01-05-02 Reflexionsmethoden](../01-project-management/01-05-teamwork/01-05-02-reflection-methods.md) - Kontinuierliche Verbesserung im Projektkontext
- [03-02-01 TOM](../03-data-protection/03-02-technical-measures/03-02-01-tom.md) - Technisch-organisatorische Maßnahmen
- [04-04-02 ISMS](../04-it-security/04-04-frameworks-standards/04-04-02-isms.md) - Qualitätsmanagement in der IT-Sicherheit
