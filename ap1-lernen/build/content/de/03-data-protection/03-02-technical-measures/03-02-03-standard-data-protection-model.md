# Standard-Datenschutzmodell (SDM)

## Lernziele

Nach diesem Kapitel solltest du:
- Das Standard-Datenschutzmodell (SDM) erklären können
- Die Gewährleistungsziele des SDM kennen
- Den Zusammenhang mit der DSGVO verstehen
- Die praktische Anwendung nachvollziehen können

---

## Kerninhalt

### Was ist das SDM?

Das **Standard-Datenschutzmodell (SDM)** ist eine Methode der deutschen Datenschutzaufsichtsbehörden zur Umsetzung der DSGVO-Anforderungen. Es definiert konkrete **Gewährleistungsziele** und zugehörige **Maßnahmen**.

> Das SDM überträgt die abstrakten Anforderungen der DSGVO in praktisch umsetzbare technische und organisatorische Maßnahmen.

---

### Die 7 Gewährleistungsziele

```
┌─────────────────────────────────────────────────────────────────┐
│              STANDARD-DATENSCHUTZMODELL (SDM)                   │
│                    7 Gewährleistungsziele                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │ DATEN-          │  │ VERFÜGBARKEIT   │  │ INTEGRITÄT      │ │
│  │ MINIMIERUNG     │  │                 │  │                 │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘ │
│                                                                 │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │ VERTRAULICHKEIT │  │ NICHT-          │  │ TRANSPARENZ     │ │
│  │                 │  │ VERKETTBARKEIT  │  │                 │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘ │
│                                                                 │
│  ┌─────────────────┐                                           │
│  │ INTERVENIERBAR- │                                           │
│  │ KEIT            │                                           │
│  └─────────────────┘                                           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Die Gewährleistungsziele im Detail

| Gewährleistungsziel | Beschreibung | DSGVO-Bezug | Maßnahmen |
|---------------------|--------------|-------------|-----------|
| **Datenminimierung** | Nur notwendige Daten verarbeiten | Art. 5 Abs. 1 c) | Datenfelder reduzieren, Anonymisierung |
| **Verfügbarkeit** | Daten sind zugänglich und nutzbar | Art. 32 | Backups, Redundanz, Notfallpläne |
| **Integrität** | Daten sind korrekt und unverändert | Art. 5 Abs. 1 d) | Prüfsummen, Zugriffskontrollen |
| **Vertraulichkeit** | Nur Berechtigte haben Zugang | Art. 5 Abs. 1 f) | Verschlüsselung, Zugriffsrechte |
| **Nichtverkettbarkeit** | Daten nicht für andere Zwecke verknüpfen | Art. 5 Abs. 1 b) | Zwecktrennung, Pseudonymisierung |
| **Transparenz** | Verarbeitung ist nachvollziehbar | Art. 5 Abs. 1 a) | Protokollierung, Dokumentation |
| **Intervenierbarkeit** | Betroffenenrechte umsetzbar | Art. 12-22 | Auskunfts-, Lösch-, Berichtigungsfunktionen |

---

### Bezug zu DSGVO-Grundsätzen

| SDM-Gewährleistungsziel | DSGVO-Grundsatz |
|-------------------------|-----------------|
| Datenminimierung | Datenminimierung (Art. 5 Abs. 1 c) |
| Verfügbarkeit | Integrität und Vertraulichkeit (Art. 5 Abs. 1 f) |
| Integrität | Richtigkeit (Art. 5 Abs. 1 d) |
| Vertraulichkeit | Integrität und Vertraulichkeit (Art. 5 Abs. 1 f) |
| Nichtverkettbarkeit | Zweckbindung (Art. 5 Abs. 1 b) |
| Transparenz | Rechtmäßigkeit, Transparenz (Art. 5 Abs. 1 a) |
| Intervenierbarkeit | Betroffenenrechte (Art. 12-22) |

---

### Praktische Anwendung

#### Beispiel: Kundendatenbank

| Ziel | Maßnahme | Umsetzung |
|------|----------|-----------|
| **Datenminimierung** | Nur notwendige Felder | Keine Geburtsdatum für Newsletter |
| **Verfügbarkeit** | Backup | Tägliche Datensicherung |
| **Integrität** | Prüfsummen | Hash-Werte für Datenintegrität |
| **Vertraulichkeit** | Verschlüsselung | Datenbank verschlüsselt |
| **Nichtverkettbarkeit** | Zwecktrennung | Separate Tabellen für Bestellungen/Marketing |
| **Transparenz** | Protokollierung | Audit-Log aller Zugriffe |
| **Intervenierbarkeit** | Exportfunktion | Datenauskunft möglich |

---

### Vorgehensweise nach SDM

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ 1. VERARBEITUNG │ ─► │ 2. RISIKO-      │ ─► │ 3. MASSNAHMEN   │
│    BESCHREIBEN  │    │    BEWERTUNG    │    │    AUSWÄHLEN    │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                                      │
┌─────────────────┐    ┌─────────────────┐    ┌───────▼─────────┐
│ 6. KONTINUIER-  │ ◄─ │ 5. PRÜFUNG      │ ◄─ │ 4. MASSNAHMEN   │
│    LICHE        │    │                 │    │    UMSETZEN     │
│    VERBESSERUNG │    │                 │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **SDM** | Standard-Datenschutzmodell |
| **Gewährleistungsziel** | Zu erfüllendes Datenschutzziel |
| **Datenminimierung** | Nur notwendige Daten erheben |
| **Nichtverkettbarkeit** | Keine Verknüpfung für andere Zwecke |
| **Intervenierbarkeit** | Betroffenenrechte umsetzbar |
| **Transparenz** | Nachvollziehbarkeit der Verarbeitung |

---

## Prüfungstipps

### Häufige Prüfungsfragen
- Was ist das Standard-Datenschutzmodell?
- Nennen Sie die Gewährleistungsziele des SDM
- Welches Gewährleistungsziel entspricht welchem DSGVO-Grundsatz?

### Wichtig zu merken
- SDM = Praktische Umsetzung der DSGVO
- 7 Gewährleistungsziele
- Verbindung zu DSGVO-Grundsätzen (Art. 5)

---

## Übungsaufgaben

### Aufgabe 1
Was ist das Standard-Datenschutzmodell (SDM)?

**Lösung:** Das SDM ist eine Methode der deutschen Datenschutzaufsichtsbehörden, die abstrakte DSGVO-Anforderungen in praktisch umsetzbare Gewährleistungsziele und Maßnahmen überträgt.

### Aufgabe 2
Nennen Sie vier der sieben Gewährleistungsziele des SDM.

**Lösung:**
1. Datenminimierung
2. Verfügbarkeit
3. Vertraulichkeit
4. Intervenierbarkeit
(oder: Integrität, Nichtverkettbarkeit, Transparenz)

### Aufgabe 3
Welches Gewährleistungsziel stellt sicher, dass Betroffene ihre DSGVO-Rechte (z.B. Auskunft, Löschung) ausüben können?

**Lösung:** Das Gewährleistungsziel **Intervenierbarkeit** stellt sicher, dass Betroffene ihre Rechte nach Art. 12-22 DSGVO wahrnehmen können.

---

## Querverweise

- [03-01-01 DSGVO-Grundsätze](../03-01-fundamentals/03-01-01-gdpr-principles.md) - Art. 5 DSGVO
- [03-02-01 TOM](./03-02-01-tom.md) - Technisch-organisatorische Maßnahmen
- [04-01-01 CIA-Triade](../../04-it-security/04-01-protection-goals/04-01-01-cia-triad.md) - Verfügbarkeit, Integrität, Vertraulichkeit
