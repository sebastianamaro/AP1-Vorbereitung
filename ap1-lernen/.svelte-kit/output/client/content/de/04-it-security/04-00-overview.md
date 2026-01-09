# IT-Sicherheit - Kapitelübersicht

## Einführung

IT-Sicherheit (Informationssicherheit) ist ein zentrales Thema der AP1-Prüfung und hat im Prüfungskatalog 2025 deutlich an Bedeutung gewonnen. Dieses Kapitel behandelt alle relevanten Aspekte zum Schutz von IT-Systemen und Daten.

---

## Lernziele des Kapitels

Nach Abschluss dieses Kapitels solltest du:
- Die Schutzziele der IT-Sicherheit (CIA-Triade) erklären können
- Bedrohungen und Gefährdungen identifizieren können
- Technische und organisatorische Schutzmaßnahmen kennen
- Zwei-Faktor-Authentifizierung (2FA) erklären können [NEU 2025]
- Betriebssystem-Härtung verstehen [NEU 2025]
- Grundlagen des BSI-Grundschutzes kennen
- Kryptografische Verfahren beschreiben können
- Hashwerte und deren Anwendung verstehen [NEU 2025]

---

## Kapitelstruktur

```
04-IT-SICHERHEIT
│
├── 04-01 Schutzziele
│   └── 04-01-01 CIA-Triade
│
├── 04-02 Bedrohungen und Gefährdungen
│   ├── 04-02-01 Bedrohungsarten
│   └── 04-02-02 Schutzneeds-analysis
│
├── 04-03 Schutzmaßnahmen
│   ├── 04-03-01 Technische Maßnahmen
│   ├── 04-03-02 Authentifizierung und 2FA [NEU 2025]
│   ├── 04-03-03 OS-Härtung [NEU 2025]
│   └── 04-03-04 Personal Firewall
│
├── 04-04 Frameworks und Standards
│   ├── 04-04-01 BSI-Grundschutz
│   ├── 04-04-02 ISMS
│   └── 04-04-03 Security by Design/Default
│
└── 04-05 Kryptografie
    ├── 04-05-01 Verschlüsselungsverfahren
    ├── 04-05-02 Hashwerte [NEU 2025]
    ├── 04-05-03 Zertifikate
    └── 04-05-04 Digitale Signaturen
```

---

## Überblick: IT-Sicherheit

### Die drei Säulen der IT-Sicherheit

```
┌─────────────────────────────────────────────────────────────────┐
│                    IT-SICHERHEIT                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │   VERTRAULICH-  │  │   INTEGRITÄT    │  │  VERFÜGBARKEIT  │ │
│  │   KEIT          │  │                 │  │                 │ │
│  │                 │  │                 │  │                 │ │
│  │ Nur Berechtigte │  │ Daten korrekt   │  │ System nutzbar  │ │
│  │ haben Zugang    │  │ und unverändert │  │ wenn benötigt   │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘ │
│           │                   │                   │             │
│           ▼                   ▼                   ▼             │
│  ┌─────────────────────────────────────────────────────────────┐│
│  │              SCHUTZMASSNAHMEN                               ││
│  │  • Technisch (Verschlüsselung, Firewall, 2FA)              ││
│  │  • Organisatorisch (Richtlinien, Schulungen)               ││
│  │  • Physisch (Zutrittskontrolle)                            ││
│  └─────────────────────────────────────────────────────────────┘│
└─────────────────────────────────────────────────────────────────┘
```

---

## Neue Themen 2025 - Besonders prüfungsrelevant

| Thema | Beschreibung | Verweis |
|-------|--------------|---------|
| **2FA/MFA** | Zwei-Faktor-Authentifizierung mit verschiedenen Faktoren | [04-03-02](./04-03-protective-measures/04-03-02-authentication-2fa.md) |
| **OS-Härtung** | Absicherung von Betriebssystemen | [04-03-03](./04-03-protective-measures/04-03-03-os-hardening.md) |
| **Hashwerte** | Prüfsummen zur Integritätsprüfung | [04-05-02](./04-05-cryptography/04-05-02-hash-values.md) |
| **Security by Design** | Sicherheit von Anfang an | [04-04-03](./04-04-frameworks-standards/04-04-03-security-by-design-default.md) |

---

## Verbindung zu anderen Kapiteln

| Thema | Verweis | Zusammenhang |
|-------|---------|--------------|
| **Datenschutz (TOM)** | [03-02-01](../03-data-protection/03-02-technical-measures/03-02-01-tom.md) | Technisch-organisatorische Maßnahmen |
| **DSGVO** | [03-01-01](../03-data-protection/03-01-fundamentals/03-01-01-gdpr-principles.md) | Rechtliche Anforderungen |
| **Backup** | [05-05](../05-it-systems/05-05-data-backup/) | Verfügbarkeitssicherung |
| **Netzwerke** | [07-01](../07-networks/07-01-network-fundamentals/) | Netzwerksicherheit |

---

## Wichtig für die Prüfung

### Häufige Prüfungsthemen

1. **CIA-Triade** - Definition und Beispiele
2. **Authentifizierungsfaktoren** - Wissen, Besitz, Biometrie
3. **Verschlüsselungsarten** - Symmetrisch vs. Asymmetrisch
4. **Hashwerte** - Anwendungen und Eigenschaften
5. **BSI-Grundschutz** - Vorgehensweise

### Nicht mehr im Prüfungskatalog 2025

- ~~ISO 2700x Standards~~ (entfernt)
- ~~Detaillierte Firewall-Konfiguration~~ (nur Grundlagen)

---

## Zentrale Begriffe des Kapitels

| Begriff | Erklärung |
|---------|-----------|
| **IT-Sicherheit** | Schutz von IT-Systemen und Daten |
| **Informationssicherheit** | Umfassender Schutz aller Informationen |
| **CIA-Triade** | Vertraulichkeit, Integrität, Verfügbarkeit |
| **2FA** | Zwei-Faktor-Authentifizierung |
| **Kryptografie** | Wissenschaft der Verschlüsselung |
| **ISMS** | Informationssicherheits-Managementsystem |
| **BSI** | Bundesamt für Sicherheit in der Informationstechnik |

---

## Unterkapitel

1. [Schutzziele - CIA-Triade](./04-01-protection-goals/04-01-01-cia-triad.md)
2. [Bedrohungsarten](./04-02-threats-risks/04-02-01-threat-types.md)
3. [Schutzneeds-analysis](./04-02-threats-risks/04-02-02-protection-needs-analysis.md)
4. [Technische Maßnahmen](./04-03-protective-measures/04-03-01-technical-measures.md)
5. [Authentifizierung und 2FA](./04-03-protective-measures/04-03-02-authentication-2fa.md)
6. [OS-Härtung](./04-03-protective-measures/04-03-03-os-hardening.md)
7. [Personal Firewall](./04-03-protective-measures/04-03-04-personal-firewall.md)
8. [BSI-Grundschutz](./04-04-frameworks-standards/04-04-01-bsi-baseline-protection.md)
9. [ISMS](./04-04-frameworks-standards/04-04-02-isms.md)
10. [Security by Design/Default](./04-04-frameworks-standards/04-04-03-security-by-design-default.md)
11. [Verschlüsselungsverfahren](./04-05-cryptography/04-05-01-encryption-methods.md)
12. [Hashwerte](./04-05-cryptography/04-05-02-hash-values.md)
13. [Zertifikate](./04-05-cryptography/04-05-03-certificates.md)
14. [Digitale Signaturen](./04-05-cryptography/04-05-04-digital-signatures.md)
