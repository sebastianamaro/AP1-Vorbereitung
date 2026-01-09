# EU AI Act

**Hinweis:** Der EU AI Act ist NEU im Prüfungskatalog 2025!

## Lernziele

Nach diesem Kapitel solltest du:
- Den Zweck des EU AI Acts kennen
- Die Risikokategorien unterscheiden können
- Verbotene KI-Praktiken kennen
- Anforderungen für KI-Systeme verstehen

---

## Kerninhalt

### Was ist der EU AI Act?

Der **EU AI Act** (Verordnung über Künstliche Intelligenz) ist das erste umfassende KI-Gesetz weltweit. Es regelt den Einsatz von KI-Systemen in der Europäischen Union nach einem risikobasierten Ansatz.

```
┌─────────────────────────────────────────────────────────────────┐
│                    EU AI ACT                                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Inkrafttreten: 2024                                          │
│   Vollständige Gültigkeit: 2026                                │
│                                                                 │
│   Ziele:                                                       │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │ • Schutz der Grundrechte und Sicherheit                 │  │
│   │ • Rechtssicherheit für KI-Innovation                    │  │
│   │ • Einheitliche Regeln im EU-Binnenmarkt                 │  │
│   │ • Vertrauen in KI fördern                               │  │
│   └─────────────────────────────────────────────────────────┘  │
│                                                                 │
│   Gilt für:                                                    │
│   • Anbieter von KI-Systemen (auch aus Drittstaaten)          │
│   • Betreiber von KI-Systemen in der EU                       │
│   • Importeure und Händler                                     │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Risikobasierter Ansatz

Der EU AI Act klassifiziert KI-Systeme nach ihrem Risikopotenzial in vier Kategorien.

```
┌────────────────────────────────────────────────────────────────┐
│                RISIKOPYRAMIDE                                  │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│                    ▲                                           │
│                   /█\        VERBOTEN                          │
│                  /███\       Inakzeptables Risiko             │
│                 /█████\                                        │
│                ─────────                                       │
│               /░░░░░░░░░\    HOCHRISIKO                        │
│              /░░░░░░░░░░░\   Strenge Anforderungen            │
│             /░░░░░░░░░░░░░\                                    │
│            ───────────────                                     │
│           /▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\  BEGRENZTES RISIKO               │
│          /▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\ Transparenzpflichten            │
│         /▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒▒\                                 │
│        ─────────────────────                                   │
│       /                       \ MINIMALES RISIKO              │
│      /     Keine speziellen    \ Keine Auflagen               │
│     /      Anforderungen        \                              │
│    ─────────────────────────────                               │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Die vier Risikokategorien

#### 1. Unakzeptables Risiko (VERBOTEN)

Diese KI-Systeme sind in der EU verboten.

| Verbotene KI | Beschreibung |
|--------------|--------------|
| **Social Scoring** | Bewertung von Bürgern basierend auf Verhalten |
| **Manipulation** | Unterschwellige Manipulation von Entscheidungen |
| **Biometrische Echtzeit-Überwachung** | Massenhafte Gesichtserkennung im öffentlichen Raum |
| **Emotionserkennung** | Am Arbeitsplatz und in Bildungseinrichtungen |
| **Predictive Policing** | Vorhersage von Straftaten basierend auf Persönlichkeit |

#### 2. Hochrisiko-KI

Diese Systeme sind erlaubt, unterliegen aber strengen Anforderungen.

| Bereich | Beispiele |
|---------|-----------|
| **Kritische Infrastruktur** | Verkehr, Energie, Wasser |
| **Bildung** | Bewertung von Prüfungen, Zulassungsentscheidungen |
| **Beschäftigung** | Bewerbungsauswahl, Leistungsbewertung |
| **Behörden** | Asylverfahren, Sozialleistungen |
| **Strafverfolgung** | Lügendetektion, Risikobewertung |
| **Biometrie** | Gesichtserkennung (nicht Echtzeit) |

**Anforderungen für Hochrisiko-KI:**
- Risikomanagement-System
- Qualitäts- und Datenmanagement
- Technische Dokumentation
- Logging und Überwachung
- Transparenz und Information
- Menschliche Aufsicht
- Genauigkeit und Robustheit

#### 3. Begrenztes Risiko

Für diese Systeme gelten **Transparenzpflichten**.

| System | Transparenzpflicht |
|--------|-------------------|
| **Chatbots** | Hinweis, dass KI kommuniziert |
| **Deepfakes** | Kennzeichnung als KI-generiert |
| **Emotionserkennung** | Information des Nutzers |
| **Biometrische Kategorisierung** | Offenlegung der Nutzung |

#### 4. Minimales Risiko

Keine speziellen Auflagen. Die meisten KI-Anwendungen fallen hierunter.

| Beispiele |
|-----------|
| Spam-Filter |
| Empfehlungssysteme |
| Spiele-KI |
| Automatisierte Übersetzung |

---

### Anforderungen im Detail

```
┌────────────────────────────────────────────────────────────────┐
│            ANFORDERUNGEN FÜR HOCHRISIKO-KI                     │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │ RISIKOMANAGEMENT                                          │ │
│  │ Kontinuierliche Identifikation und Bewertung von Risiken │ │
│  └──────────────────────────────────────────────────────────┘ │
│                                                                │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │ DATENQUALITÄT                                             │ │
│  │ Training mit relevanten, repräsentativen Daten           │ │
│  │ Vermeidung von Bias                                       │ │
│  └──────────────────────────────────────────────────────────┘ │
│                                                                │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │ TECHNISCHE DOKUMENTATION                                  │ │
│  │ Detaillierte Beschreibung des Systems                    │ │
│  └──────────────────────────────────────────────────────────┘ │
│                                                                │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │ MENSCHLICHE AUFSICHT                                      │ │
│  │ Menschen müssen KI-Entscheidungen überwachen können      │ │
│  └──────────────────────────────────────────────────────────┘ │
│                                                                │
│  ┌──────────────────────────────────────────────────────────┐ │
│  │ CE-KENNZEICHNUNG                                          │ │
│  │ Konformitätsprüfung vor Markteinführung                  │ │
│  └──────────────────────────────────────────────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Sonderregeln für generative KI

Für **Generative KI** (wie ChatGPT) gelten zusätzliche Regeln:

| Anforderung | Beschreibung |
|-------------|--------------|
| **Transparenz** | Offenlegung, dass Inhalt KI-generiert ist |
| **Urheberrecht** | Zusammenfassung der Trainingsdaten veröffentlichen |
| **Sicherheit** | Schutzmaßnahmen gegen illegale Inhalte |
| **Dokumentation** | Technische Details bereitstellen |

---

### Strafen bei Verstößen

| Verstoß | Strafe |
|---------|--------|
| **Verbotene KI-Praktiken** | Bis 35 Mio. € oder 7% des Jahresumsatzes |
| **Hochrisiko-Anforderungen** | Bis 15 Mio. € oder 3% des Jahresumsatzes |
| **Falsche Informationen** | Bis 7,5 Mio. € oder 1,5% des Jahresumsatzes |

---

### Zeitplan

| Datum | Meilenstein |
|-------|-------------|
| **August 2024** | Inkrafttreten der Verordnung |
| **Februar 2025** | Verbote treten in Kraft |
| **August 2025** | Regeln für General-Purpose-KI |
| **August 2026** | Vollständige Anwendung |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **EU AI Act** | KI-Verordnung der EU |
| **Hochrisiko-KI** | KI mit strengen Auflagen |
| **Social Scoring** | Verbotene Bewertung von Bürgern |
| **Transparenzpflicht** | Hinweispflicht bei KI-Nutzung |
| **CE-Kennzeichnung** | Konformitätszeichen für Hochrisiko-KI |
| **Generative KI** | KI, die Inhalte erzeugt (ChatGPT) |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was ist der EU AI Act?
- Welche Risikokategorien gibt es?
- Nennen Sie verbotene KI-Praktiken
- Was sind Transparenzpflichten?

### Wichtig zu merken

- **4 Risikokategorien:** Verboten, Hochrisiko, Begrenzt, Minimal
- **Verboten:** Social Scoring, manipulative KI, biometrische Massenüberwachung
- **Transparenzpflicht:** Chatbots müssen als KI erkennbar sein
- **Hochrisiko:** Bewerbungsauswahl, kritische Infrastruktur
- **Gültigkeit:** Ab August 2026 vollständig

---

## Übungsaufgaben

### Aufgabe 1
Welche vier Risikokategorien unterscheidet der EU AI Act?

**Lösung:**
1. **Unakzeptables Risiko (Verboten):** Social Scoring, manipulative KI
2. **Hochrisiko:** Bewerbungsauswahl, Bildung, kritische Infrastruktur
3. **Begrenztes Risiko:** Chatbots, Deepfakes (Transparenzpflichten)
4. **Minimales Risiko:** Spam-Filter, Empfehlungssysteme (keine Auflagen)

### Aufgabe 2
Nennen Sie zwei Beispiele für verbotene KI-Systeme nach dem EU AI Act.

**Lösung:**
1. **Social Scoring:** Systeme, die Bürger basierend auf ihrem Verhalten bewerten und Rechte einschränken
2. **Biometrische Echtzeit-Überwachung:** Massenhafte Gesichtserkennung im öffentlichen Raum

(Weitere: unterschwellige Manipulation, Emotionserkennung am Arbeitsplatz)

### Aufgabe 3
Ein Unternehmen setzt einen Chatbot für Kundenanfragen ein. Welche Pflicht ergibt sich aus dem EU AI Act?

**Lösung:** Das Unternehmen muss eine **Transparenzpflicht** erfüllen: Kunden müssen darüber informiert werden, dass sie mit einer KI (und nicht mit einem Menschen) kommunizieren. Ein klarer Hinweis wie "Sie chatten mit einem KI-Assistenten" muss angezeigt werden.

### Aufgabe 4
Ein Softwareenterprise entwickelt eine KI zur automatischen Bewertung von Bewerbungen. In welche Risikokategorie fällt dieses System?

**Lösung:** Das System fällt in die Kategorie **Hochrisiko**, da es im Bereich Beschäftigung eingesetzt wird und Entscheidungen über Personen trifft.

**Anforderungen:**
- Risikomanagement-System
- Qualitätssicherung der Trainingsdaten (Vermeidung von Bias)
- Technische Dokumentation
- Menschliche Aufsicht muss möglich sein
- Logging der Entscheidungen
- CE-Kennzeichnung vor Markteinführung

---

## Querverweise

- [05-06-01 KI-Grundlagen](./05-06-01-ai-fundamentals.md) - Basiswissen
- [05-06-02 KI-Anwendungen](./05-06-02-ai-applications.md) - KI-Einsatzgebiete
- [03-01-01 DSGVO-Grundsätze](../../03-data-protection/03-01-fundamentals/03-01-01-gdpr-principles.md) - Datenschutz
