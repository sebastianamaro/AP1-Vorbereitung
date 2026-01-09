# Urheberrecht in der IT

## Lernziele

Nach diesem Kapitel solltest du:
- Das Urheberrecht im IT-Kontext verstehen
- Die Rechte von Softwareentwicklern kennen
- Nutzungsrechte von Urheberrechten unterscheiden können
- Konsequenzen von Urheberrechtsverletzungen kennen

---

## Kerninhalt

### Was ist Urheberrecht?

```
┌────────────────────────────────────────────────────────────────────┐
│                       URHEBERRECHT                                 │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Definition:                                                      │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ Das Urheberrecht schützt geistige Schöpfungen (Werke)      │ │
│   │ und gewährt dem Urheber ausschließliche Rechte.            │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   In Deutschland geregelt durch:                                   │
│   • Urheberrechtsgesetz (UrhG)                                    │
│   • Speziell für Software: §§ 69a-69g UrhG                        │
│                                                                     │
│   Grundsatz:                                                       │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │              Urheber = Schöpfer des Werks                   │ │
│   │                                                              │ │
│   │         ┌───────────────┐                                   │ │
│   │         │   URHEBER     │                                   │ │
│   │         │  (natürliche  │                                   │ │
│   │         │    Person)    │                                   │ │
│   │         └───────┬───────┘                                   │ │
│   │                 │                                           │ │
│   │                 ↓ schafft                                   │ │
│   │         ┌───────────────┐                                   │ │
│   │         │     WERK      │                                   │ │
│   │         │  (Software,   │                                   │ │
│   │         │   Text, ...)  │                                   │ │
│   │         └───────────────┘                                   │ │
│   │                                                              │ │
│   │   ⚠ Nur natürliche Personen können Urheber sein!           │ │
│   │     (Keine Firmen, keine KI)                                │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Urheberrecht bei Software

```
┌────────────────────────────────────────────────────────────────────┐
│                  URHEBERRECHT BEI SOFTWARE                         │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Was ist geschützt?                                               │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ ✓ Quellcode (Source Code)                                  │  │
│   │ ✓ Objektcode (kompilierter Code)                           │  │
│   │ ✓ Dokumentation                                            │  │
│   │ ✓ Entwurfsmaterial                                         │  │
│   │ ✓ Benutzeroberfläche (Design)                              │  │
│   │                                                             │  │
│   │ ✗ Ideen und Konzepte                                       │  │
│   │ ✗ Algorithmen (als Konzept)                                │  │
│   │ ✗ Programmiersprache                                       │  │
│   │ ✗ Schnittstellen (APIs) - umstritten                       │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   Voraussetzung: Schöpfungshöhe                                   │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Software muss "eigene geistige Schöpfung" sein           │  │
│   │ • Bei Software: Geringe Anforderungen                      │  │
│   │ • Triviale Programme sind NICHT geschützt                  │  │
│   │   (z.B. einfachste Skripte, "Hello World")                │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Rechte des Urhebers

```
┌────────────────────────────────────────────────────────────────────┐
│                    RECHTE DES URHEBERS                             │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│                      ┌─────────────────┐                           │
│                      │   URHEBERRECHT  │                           │
│                      └────────┬────────┘                           │
│              ┌────────────────┼────────────────┐                   │
│              ↓                ↓                ↓                   │
│   ┌──────────────────┐ ┌──────────────┐ ┌──────────────────┐      │
│   │ Urheberpersön-   │ │ Verwertungs- │ │ Sonstige Rechte  │      │
│   │ lichkeitsrechte  │ │ rechte       │ │                  │      │
│   └────────┬─────────┘ └──────┬───────┘ └────────┬─────────┘      │
│            │                  │                  │                 │
│   • Veröffentlichung   • Vervielfältigung  • Zugangsrecht        │
│   • Anerkennung        • Verbreitung       • Folgerecht          │
│   • Entstellung        • Vermietung                               │
│                        • Öffentliche                              │
│                          Wiedergabe                               │
│                                                                     │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ URHEBERPERSÖNLICHKEITSRECHTE                                │ │
│   │ • NICHT übertragbar                                         │ │
│   │ • Bleiben immer beim Urheber                                │ │
│   │ • Recht auf Namensnennung                                   │ │
│   │ • Schutz vor Entstellung                                    │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ VERWERTUNGSRECHTE                                           │ │
│   │ • Übertragbar (Nutzungsrechte einräumen)                   │ │
│   │ • Können lizenziert werden                                  │ │
│   │ • Exklusiv oder nicht-exklusiv                             │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Urheberrecht im Arbeitsverhältnis

```
┌────────────────────────────────────────────────────────────────────┐
│                URHEBERRECHT IM ARBEITSVERHÄLTNIS                   │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Besonderheit bei Arbeitnehmern (§ 69b UrhG):                    │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │                                                              │ │
│   │   ┌─────────────┐  erschafft  ┌─────────────┐              │ │
│   │   │ Entwickler  │ ──────────→ │  Software   │              │ │
│   │   │(Arbeitnehmer)│             │   (Werk)    │              │ │
│   │   └──────┬──────┘             └──────┬──────┘              │ │
│   │          │                           │                      │ │
│   │          │ Urheber                   │ Nutzungsrechte       │ │
│   │          │                           ↓                      │ │
│   │          │                    ┌─────────────┐              │ │
│   │          └───────────────────→│ Arbeitgeber │              │ │
│   │                                └─────────────┘              │ │
│   │                                                              │ │
│   │  • Entwickler bleibt IMMER Urheber                         │ │
│   │  • Arbeitgeber erhält automatisch alle Nutzungsrechte      │ │
│   │  • Gilt für Software, die im Rahmen der Arbeit entsteht    │ │
│   │  • Keine zusätzliche Vergütung erforderlich                │ │
│   │                                                              │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   Bei Freiberuflern/Auftragnehmern:                               │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ • Nutzungsrechte müssen vertraglich vereinbart werden!     │ │
│   │ • Ohne Vereinbarung: Rechte bleiben beim Freiberufler      │ │
│   │ • Auftraggeber erhält nur zweckgebundene Nutzungsrechte    │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Schutzdauer

```
┌────────────────────────────────────────────────────────────────────┐
│                       SCHUTZDAUER                                  │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │                                                              │ │
│   │   Software ist geschützt:                                   │ │
│   │                                                              │ │
│   │   ┌────────────────────────────────────────────────────┐   │ │
│   │   │  70 Jahre nach dem Tod des Urhebers               │   │ │
│   │   └────────────────────────────────────────────────────┘   │ │
│   │                                                              │ │
│   │   Bei mehreren Urhebern:                                    │ │
│   │   70 Jahre nach dem Tod des letzten überlebenden Urhebers  │ │
│   │                                                              │ │
│   │   Timeline:                                                 │ │
│   │   ┌───────────────────────────────────────────────────┐    │ │
│   │   │──────────┬─────────────────────┬─────────────────│    │ │
│   │   │ Schöpfung │  Tod des Urhebers  │  + 70 Jahre    │    │ │
│   │   │    ●      │         ●          │       ●        │    │ │
│   │   │           │                    │                 │    │ │
│   │   │← ──────── geschützt ─────────────────────────── →│    │ │
│   │   │                                │← gemeinfrei  → │    │ │
│   │   └───────────────────────────────────────────────────┘    │ │
│   │                                                              │ │
│   │   Nach Ablauf: Software wird "gemeinfrei" (Public Domain)  │ │
│   │                                                              │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Erlaubte Handlungen

```
┌────────────────────────────────────────────────────────────────────┐
│                   ERLAUBTE HANDLUNGEN                              │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Ohne Zustimmung des Urhebers erlaubt (§ 69d UrhG):              │
│                                                                     │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ ✓ BESTIMMUNGSGEMÄSSE BENUTZUNG                              │ │
│   │   • Software nutzen, wie vorgesehen                         │ │
│   │   • Notwendige Vervielfältigungen (RAM, Cache)              │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ ✓ SICHERUNGSKOPIE (Backup)                                  │ │
│   │   • EINE Sicherungskopie erlaubt                            │ │
│   │   • Nur wenn für Sicherung erforderlich                     │ │
│   │   • Keine Weitergabe!                                       │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ ✓ FEHLERBERICHTIGUNG                                        │ │
│   │   • Fehler in der Software korrigieren                      │ │
│   │   • Nur für bestimmungsgemäße Nutzung                       │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ ✓ DEKOMPILIERUNG (eingeschränkt, § 69e UrhG)               │ │
│   │   • Nur zur Herstellung von Interoperabilität              │ │
│   │   • Nicht für Kopieren oder Konkurrenzprodukt              │ │
│   │   • Nur wenn Information nicht anders erhältlich           │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Urheberrechtsverletzungen

```
┌────────────────────────────────────────────────────────────────────┐
│                 URHEBERRECHTSVERLETZUNGEN                          │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Typische Verstöße:                                               │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ ✗ Software ohne Lizenz nutzen (Raubkopie)                  │ │
│   │ ✗ Lizenzbedingungen nicht einhalten                        │ │
│   │ ✗ Mehr Installationen als lizenziert                       │ │
│   │ ✗ Software ohne Erlaubnis weitergeben                      │ │
│   │ ✗ Quellcode ohne Erlaubnis kopieren/verändern              │ │
│   │ ✗ Open-Source-Lizenzbedingungen ignorieren                 │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   Mögliche Konsequenzen:                                          │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ ZIVILRECHTLICH                    STRAFRECHTLICH           │ │
│   │ • Unterlassung                    • Geldstrafe             │ │
│   │ • Schadensersatz                  • Freiheitsstrafe        │ │
│   │ • Auskunft über Umfang              (bis 3 Jahre)          │ │
│   │ • Vernichtung der Kopien          • Bei gewerbsmäßigem     │ │
│   │ • Anwaltskosten                     Handeln: bis 5 Jahre   │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   Für Unternehmen besonders kritisch:                             │
│   • Softwareaudits durch Hersteller (z.B. BSA)                    │
│   • Hohe Nachzahlungen + Strafzuschläge                           │
│   • Reputationsschaden                                             │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Urheber** | Schöpfer des Werks (natürliche Person) |
| **Werk** | Geistige Schöpfung (z.B. Software, Text) |
| **Schöpfungshöhe** | Mindestmaß an Kreativität |
| **Nutzungsrecht** | Übertragbares Recht zur Nutzung |
| **Verwertungsrecht** | Recht zur wirtschaftlichen Nutzung |
| **Gemeinfrei** | Ohne Urheberschutz, frei nutzbar |
| **Dekompilierung** | Rückübersetzung von Maschinencode |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Wer ist Urheber bei Software, die im Arbeitsverhältnis entsteht?
- Was darf man ohne Lizenz mit Software machen?
- Wie lange ist Software copyrightlich geschützt?

### Wichtig zu merken

- **Urheber** = immer die natürliche Person (nie Firma!)
- **Im Arbeitsverhältnis:** Nutzungsrechte gehen automatisch an Arbeitgeber
- **Schutzdauer:** 70 Jahre nach Tod des Urhebers
- **Erlaubt ohne Lizenz:** Bestimmungsgemäße Nutzung, Backup, Fehlerkorrektur
- **Ideen und Konzepte** sind NICHT geschützt
- **Quellcode** ist geschützt

---

## Übungsaufgaben

### Aufgabe 1
Ein Softwareentwickler programmiert im Auftrag seines Arbeitgebers eine neue Anwendung. Wer ist Urheber? Wer hat die Nutzungsrechte?

**Lösung:**
- **Urheber:** Der Softwareentwickler (Arbeitnehmer) bleibt IMMER Urheber, da nur natürliche Personen Urheber sein können.
- **Nutzungsrechte:** Der Arbeitgeber erhält automatisch alle Nutzungsrechte nach § 69b UrhG, wenn die Software im Rahmen der arbeitsvertraglichen Pflichten entsteht.

### Aufgabe 2
Darf man eine Sicherungskopie von gekaufter Software erstellen?

**Lösung:**
**Ja**, eine Sicherungskopie ist erlaubt nach § 69d UrhG, wenn:
- Sie für die Sicherung des Programms erforderlich ist
- Es sich um nur EINE Kopie handelt
- Sie nicht an Dritte weitergegeben wird

### Aufgabe 3
Wie lange ist ein Computerprogramm copyrightlich geschützt?

**Lösung:**
Ein Computerprogramm ist **70 Jahre nach dem Tod des Urhebers** geschützt. Bei mehreren Urhebern gilt: 70 Jahre nach dem Tod des letzten überlebenden Urhebers. Danach wird die Software gemeinfrei.

---

## Querverweise

- [06-07-02 Lizenzarten](./06-07-02-license-types.md) - Verschiedene Softwarelicenses
- [03-01-01 DSGVO-Grundsätze](../../03-data-protection/03-01-fundamentals/03-01-01-gdpr-principles.md) - Datenschutzrecht
- [08-04-01 Vertragsarten](../../08-business-processes/08-04-contract-law/08-04-01-contract-types.md) - Werkverträge
