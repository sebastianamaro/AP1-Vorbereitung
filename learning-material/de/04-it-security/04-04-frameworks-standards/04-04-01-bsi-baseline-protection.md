# BSI-Grundschutz

## Lernziele

Nach diesem Kapitel solltest du:
- Das BSI und seinen Auftrag kennen
- Das IT-Grundschutz-Konzept erklären können
- Die Vorgehensweise nach BSI-Grundschutz verstehen
- Den Zusammenhang mit dem Schutzbedarf kennen

---

## Kerninhalt

### Was ist das BSI?

Das **BSI (Bundesamt für Sicherheit in der Informationstechnik)** ist die zentrale IT-Sicherheitsbehörde Deutschlands.

| Aspekt | Details |
|--------|---------|
| **Gründung** | 1991 |
| **Sitz** | Bonn |
| **Aufgaben** | IT-Sicherheit für Staat, Wirtschaft, Gesellschaft |
| **Website** | www.bsi.bund.de |

---

### Das IT-Grundschutz-Konzept

Der **IT-Grundschutz** ist eine Methodik des BSI zur Umsetzung von Informationssicherheit.

```
┌─────────────────────────────────────────────────────────────────┐
│                    BSI IT-GRUNDSCHUTZ                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                    BSI-STANDARDS                          │  │
│  │                                                           │  │
│  │  • BSI-Standard 200-1: Managementsysteme                  │  │
│  │  • BSI-Standard 200-2: IT-Grundschutz-Methodik            │  │
│  │  • BSI-Standard 200-3: Risikoanalyse                      │  │
│  │  • BSI-Standard 200-4: Business Continuity                │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │              IT-GRUNDSCHUTZ-KOMPENDIUM                    │  │
│  │                                                           │  │
│  │  • Bausteine für verschiedene Bereiche                    │  │
│  │  • Konkrete Umsetzungshinweise                            │  │
│  │  • Gefährdungskataloge                                    │  │
│  │  • Maßnahmenkataloge                                      │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Grundidee des IT-Grundschutzes

> "Für typische Geschäftsprozesse und IT-Systeme existieren typische Gefährdungen und typische Maßnahmen."

| Konzept | Beschreibung |
|---------|--------------|
| **Pauschalisierung** | Standardmaßnahmen für typische Szenarien |
| **Effizienz** | Keine individuelle Risikoanalyse für Standardfälle |
| **Kataloge** | Bausteine mit fertigen Maßnahmenempfehlungen |
| **Normalschutz** | Geeignet für normalen Schutzbedarf |

---

### Vorgehensweise nach IT-Grundschutz

```
┌─────────────────────────────────────────────────────────────────┐
│              VORGEHENSWEISE IT-GRUNDSCHUTZ                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────┐                                            │
│  │ 1. INITIIERUNG  │ Commitment der Leitung, Verantwortliche    │
│  └────────┬────────┘                                            │
│           │                                                     │
│           ▼                                                     │
│  ┌─────────────────┐                                            │
│  │ 2. STRUKTUR-    │ IT-Systeme, Anwendungen, Räume erfassen    │
│  │    ANALYSE      │                                            │
│  └────────┬────────┘                                            │
│           │                                                     │
│           ▼                                                     │
│  ┌─────────────────┐                                            │
│  │ 3. SCHUTZBE-    │ Normal / Hoch / Sehr hoch für jedes Objekt │
│  │    DARFSANALYSE │                                            │
│  └────────┬────────┘                                            │
│           │                                                     │
│           ▼                                                     │
│  ┌─────────────────┐                                            │
│  │ 4. MODELLIERUNG │ Passende Bausteine auswählen               │
│  └────────┬────────┘                                            │
│           │                                                     │
│           ▼                                                     │
│  ┌─────────────────┐                                            │
│  │ 5. IT-GRUND-    │ Soll-Ist-Vergleich                         │
│  │    SCHUTZ-CHECK │                                            │
│  └────────┬────────┘                                            │
│           │                                                     │
│           ▼                                                     │
│  ┌─────────────────┐                                            │
│  │ 6. REALISIERUNG │ Maßnahmen umsetzen                         │
│  └─────────────────┘                                            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Die Schritte im Detail

#### 1. Initiierung

- Managemententscheidung für IT-Grundschutz
- Verantwortlichkeiten festlegen
- Ressourcen bereitstellen

#### 2. Strukturanalyse

| Zu erfassen | Beispiele |
|-------------|-----------|
| **IT-Systeme** | Server, Clients, Netzwerkkomponenten |
| **Anwendungen** | ERP, E-Mail, Datenbanken |
| **Räume** | Serverraum, Büros |
| **Geschäftsprozesse** | Beschaffung, Vertrieb |
| **Verantwortliche** | IT-Leiter, Fachabteilungen |

#### 3. Schutzneeds-analysis

Für jedes erfasste Objekt wird der Schutzbedarf bestimmt:

| Kategorie | Beschreibung |
|-----------|--------------|
| **Normal** | Standard-Maßnahmen ausreichend |
| **Hoch** | Erweiterte Maßnahmen erforderlich |
| **Sehr hoch** | Individuelle Risikoanalyse nötig |

#### 4. Modellierung

Auswahl passender **Bausteine** aus dem IT-Grundschutz-Kompendium:

| Schicht | Bausteine (Beispiele) |
|---------|----------------------|
| **ISMS** | Sicherheitsmanagement |
| **ORP** | Organisation und Personal |
| **CON** | Konzepte (Backup, Kryptografie) |
| **OPS** | Betrieb (Patch-Management) |
| **DER** | Detektion und Reaktion |
| **APP** | Anwendungen (E-Mail, Datenbanken) |
| **SYS** | IT-Systeme (Server, Clients) |
| **IND** | Industrielle IT |
| **NET** | Netze und Kommunikation |
| **INF** | Infrastruktur (Gebäude, Räume) |

#### 5. IT-Grundschutz-Check

- Soll-Ist-Vergleich
- Welche Maßnahmen sind umgesetzt?
- Wo besteht Handlungsbedarf?

#### 6. Realisierung

- Maßnahmen priorisieren
- Umsetzungsplan erstellen
- Maßnahmen implementieren
- Dokumentieren

---

### Schutzbedarf und Vorgehensweise

```
┌────────────────────────────────────────────────────────────────┐
│              VORGEHENSWEISE NACH SCHUTZBEDARF                  │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Schutzbedarf: NORMAL                                          │
│  ──────────────────────                                        │
│  → Standard-Bausteine anwenden                                 │
│  → Keine individuelle Risikoanalyse nötig                      │
│                                                                │
│  Schutzbedarf: HOCH                                            │
│  ──────────────────────                                        │
│  → Standard-Bausteine + ergänzende Maßnahmen                   │
│  → Erweiterte Gefährdungsanalyse                               │
│                                                                │
│  Schutzbedarf: SEHR HOCH                                       │
│  ──────────────────────                                        │
│  → Individuelle Risikoanalyse (BSI-Standard 200-3)             │
│  → Maßgeschneiderte Maßnahmen                                  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Zertifizierung nach IT-Grundschutz

| Zertifikat | Beschreibung |
|------------|--------------|
| **ISO 27001 auf Basis IT-Grundschutz** | Offizielle Zertifizierung durch BSI |
| **Testat** | Bestätigung der Umsetzung |
| **Auditor** | BSI-lizenzierte Prüfer |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **BSI** | Bundesamt für Sicherheit in der Informationstechnik |
| **IT-Grundschutz** | BSI-Methodik für IT-Sicherheit |
| **Baustein** | Katalog mit Anforderungen und Maßnahmen für einen Bereich |
| **Strukturanalyse** | Erfassung aller IT-Komponenten |
| **IT-Grundschutz-Check** | Soll-Ist-Vergleich |
| **IT-Grundschutz-Kompendium** | Sammlung aller Bausteine |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was ist das BSI?
- Was ist der IT-Grundschutz?
- Nennen Sie Schritte der Vorgehensweise nach IT-Grundschutz
- Was ist ein IT-Grundschutz-Baustein?

### Wichtig zu merken

- **BSI** = Bundesamt für Sicherheit in der Informationstechnik
- **IT-Grundschutz** = Methodik für normalen Schutzbedarf
- **Bausteine** = Vorgefertigte Maßnahmenkataloge
- **6 Schritte:** Initiierung → Strukturanalyse → Schutzneeds-analysis → Modellierung → Check → Realisierung

**Hinweis:** ISO 2700x ist NICHT mehr im Prüfungskatalog 2025!

---

## Übungsaufgaben

### Aufgabe 1
Was ist das BSI und welche Aufgabe hat es?

**Lösung:** Das **BSI (Bundesamt für Sicherheit in der Informationstechnik)** ist die zentrale IT-Sicherheitsbehörde in Deutschland. Es ist zuständig für:
- IT-Sicherheit für Bund, Länder und kritische Infrastrukturen
- Entwicklung von Sicherheitsstandards (IT-Grundschutz)
- Warnung vor aktuellen Bedrohungen
- Zertifizierung von IT-Sicherheitsprodukten

### Aufgabe 2
Was ist die Grundidee des IT-Grundschutzes?

**Lösung:** Die Grundidee ist, dass für typische IT-Systeme und Geschäftsprozesse typische Gefährdungen und typische Maßnahmen existieren. Statt für jeden Fall eine individuelle Risikoanalyse durchzuführen, bietet der IT-Grundschutz vorgefertigte **Bausteine** mit Maßnahmenempfehlungen. Dies ist effizient für Systeme mit **normalem Schutzbedarf**.

### Aufgabe 3
Nennen Sie vier Schritte der Vorgehensweise nach IT-Grundschutz.

**Lösung:**
1. **Strukturanalyse** - IT-Systeme und Anwendungen erfassen
2. **Schutzneeds-analysis** - Schutzbedarf für jedes Objekt bestimmen
3. **Modellierung** - Passende Bausteine auswählen
4. **IT-Grundschutz-Check** - Soll-Ist-Vergleich durchführen

(oder: Initiierung, Realisierung)

### Aufgabe 4
Wann ist eine individuelle Risikoanalyse nach BSI-Grundschutz erforderlich?

**Lösung:** Eine individuelle Risikoanalyse ist erforderlich, wenn der Schutzbedarf **"sehr hoch"** ist. In diesem Fall reichen die Standard-Bausteine nicht aus, und es müssen maßgeschneiderte Maßnahmen entwickelt werden. Die Vorgehensweise dafür ist im BSI-Standard 200-3 beschrieben.

---

## Querverweise

- [04-02-02 Schutzneeds-analysis](../04-02-threats-risks/04-02-02-protection-needs-analysis.md) - Schutzbedarf bestimmen
- [04-04-02 ISMS](./04-04-02-isms.md) - Informationssicherheits-Managementsystem
- [04-01-01 CIA-Triade](../04-01-protection-goals/04-01-01-cia-triad.md) - Schutzziele
- [03-02-01 TOM](../../03-data-protection/03-02-technical-measures/03-02-01-tom.md) - Technisch-organisatorische Maßnahmen
