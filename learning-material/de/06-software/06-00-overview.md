# Kapitel 06: Software - Übersicht

## Kapitelstruktur

Dieses Kapitel behandelt Softwarefundamentals, Programmierung, UML, Datenbanken und den Entwicklungsprozess.

```
06-software/
├── 06-00-overview.md                    (diese Datei)
│
├── 06-01-fundamentals/
│   ├── 06-01-01-software-types.md          Systemsoftware, Anwendungssoftware
│   ├── 06-01-02-programming-paradigms.md  Imperativ, Objektorientiert, Funktional
│   └── 06-01-03-evaluation-criteria.md  Softwareauswahl
│
├── 06-02-programming/
│   ├── 06-02-01-variables-datatypes.md   Integer, String, Boolean, etc.
│   ├── 06-02-02-control-structures.md     If, Schleifen, Switch
│   ├── 06-02-03-procedures-functions.md  Funktionen, Parameter, Rückgabe
│   ├── 06-02-04-oop-fundamentals.md         Klassen, Objekte, Methoden
│   ├── 06-02-05-pseudocode.md             Algorithmendarstellung
│   ├── 06-02-06-desk-check.md       [NEU 2025] Desk Checking
│   └── 06-02-07-code-debugging.md       [NEU 2025] Code Error Identification
│
├── 06-03-uml/
│   ├── 06-03-01-class-diagram.md        Klassen, Beziehungen
│   ├── 06-03-02-use-case-diagram.md      Anwendungsfälle
│   └── 06-03-03-activity-diagram.md    [NEU 2025] Ablaufdiagramme
│
├── 06-04-databases/
│   ├── 06-04-01-relational-databases.md Tabellen, Beziehungen (OHNE SQL!)
│   ├── 06-04-02-erd.md                     Entity-Relationship-Diagramme
│   └── 06-04-03-redundancy-normal-forms.md  Normalisierung
│
├── 06-05-web-development/
│   └── 06-05-01-html-xml.md               Markup-Sprachen
│
├── 06-06-development-process/
│   ├── 06-06-01-sdlc.md                   Software Development Life Cycle
│   ├── 06-06-02-testing.md                Testarten, Testmethoden
│   └── 06-06-03-debugging.md              Fehlersuche
│
└── 06-07-licenses/
    ├── 06-07-01-copyright.md           Softwareschutz
    └── 06-07-02-license-types.md            Open Source, Proprietär
```

---

## Themenübersicht

### 06-01 Grundlagen
- Unterschied zwischen Systemsoftware und Anwendungssoftware
- Programmierparadigmen verstehen
- Software nach Kriterien beurteilen

### 06-02 Programmierung
- Variablen und Datentypen
- Kontrollstrukturen (Bedingungen, Schleifen)
- Funktionen und Prozeduren
- OOP-Grundlagen (Klassen, Objekte)
- Pseudocode schreiben und lesen
- **[NEU 2025]** Schreibtischtest durchführen
- **[NEU 2025]** Fehler im Code finden

### 06-03 UML
- Klassendiagramme erstellen und lesen
- Use-Case-Diagramme verstehen
- **[NEU 2025]** Aktivitätsdiagramme

### 06-04 Datenbanken
- Relationale Datenbanken verstehen (OHNE SQL - SQL ist in AP2!)
- Entity-Relationship-Diagramme
- Normalisierung und Normalformen

### 06-05 Webentwicklung
- HTML-Grundlagen
- XML verstehen

### 06-06 Entwicklungsprozess
- Software Development Life Cycle
- Testarten und Testmethoden
- Debugging-Techniken

### 06-07 Lizenzen
- Urheberrecht bei Software
- Lizenzmodelle verstehen

---

## Neue Themen im Prüfungskatalog 2025

| Thema | Datei | Wichtigkeit |
|-------|-------|-------------|
| **Schreibtischtest** | 06-02-06 | HOCH |
| **Code-Fehlersuche** | 06-02-07 | HOCH |
| **Aktivitätsdiagramm** | 06-03-03 | HOCH |
| **Redundanz/Normalformen** | 06-04-03 | MITTEL |

---

## NICHT im Prüfungskatalog 2025

Folgende Themen sind aus dem AP1 entfernt worden:

| Entferntes Thema | Hinweis |
|------------------|---------|
| **SQL-Abfragen** | → Jetzt nur in AP2 |
| **Struktogramme (Nassi-Shneiderman)** | → Entfernt |
| **PAP (Programmablaufplan)** | → Entfernt |
| **Vererbung (OOP)** | → Nur Grundlagen, keine Vererbung |
| **Non-relationale Datenbanken** | → Entfernt |

---

## Prüfungsrelevanz

```
┌────────────────────────────────────────────────────────────────┐
│              PRÜFUNGSRELEVANZ KAPITEL 06                       │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  SEHR HÄUFIG in Prüfungen:                                    │
│  • Datentypen und Kontrollstrukturen                          │
│  • Pseudocode lesen und verstehen                             │
│  • UML-Klassendiagramme                                       │
│  • ERD (Entity-Relationship)                                  │
│  • Schreibtischtest [NEU 2025]                                │
│  • Lizenzmodelle                                              │
│                                                                │
│  REGELMÄSSIG in Prüfungen:                                    │
│  • OOP-Grundlagen (Klassen, Objekte)                          │
│  • Use-Case-Diagramme                                         │
│  • Testarten                                                  │
│  • Normalformen                                               │
│                                                                │
│  GELEGENTLICH:                                                │
│  • HTML/XML                                                   │
│  • SDLC-Phasen                                                │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## Lernempfehlung

1. **Grundlagen sichern:** Datentypen, Kontrollstrukturen, Funktionen
2. **Diagramme üben:** ERD, UML-Klassendiagramm, Use-Case, Aktivitätsdiagramm
3. **Schreibtischtest trainieren:** Code Zeile für Zeile durchgehen
4. **Lizenzen verstehen:** Open Source vs. Proprietär

---

## Querverweise zu anderen Kapiteln

- [01-03 Vorgehensmodelle](../01-project-management/01-03-process-models/) - SDLC, Scrum
- [02-04 Softwarequalität](../02-quality-management/02-04-software-quality.md) - Qualitätskriterien
- [05-06 Künstliche Intelligenz](../05-it-systems/05-06-artificial-intelligence/) - KI-Codeassistenten
