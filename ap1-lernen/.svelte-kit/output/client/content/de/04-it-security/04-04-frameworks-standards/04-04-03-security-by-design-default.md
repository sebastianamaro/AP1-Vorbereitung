# Security by Design und Security by Default

## Lernziele

Nach diesem Kapitel solltest du:
- Die Konzepte "Security by Design" und "Security by Default" erklären können
- Den Unterschied zwischen beiden Konzepten kennen
- Praktische Beispiele nennen können
- Den Zusammenhang mit Privacy by Design verstehen

---

## Kerninhalt

### Security by Design

**Security by Design** bedeutet, dass Sicherheit von Anfang an in den Entwicklungs- und Planungsprozess integriert wird – nicht erst nachträglich.

```
┌─────────────────────────────────────────────────────────────────┐
│                  SECURITY BY DESIGN                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  TRADITIONELLER ANSATZ               SECURITY BY DESIGN         │
│  ┌─────────────────────┐            ┌─────────────────────┐    │
│  │                     │            │                     │    │
│  │  1. Entwicklung     │            │  1. Sicherheits-    │    │
│  │     ▼               │            │     anforderungen   │    │
│  │  2. Testen          │            │        ▼            │    │
│  │     ▼               │            │  2. Sichere Archit. │    │
│  │  3. Sicherheit      │            │        ▼            │    │
│  │     nachträglich    │            │  3. Sichere Entw.   │    │
│  │     hinzufügen      │            │        ▼            │    │
│  │                     │            │  4. Sicherheitstest │    │
│  │  ⚠️ Teuer, lückenhaft│            │        ▼            │    │
│  │                     │            │  5. Deployment      │    │
│  └─────────────────────┘            │                     │    │
│                                     │  ✅ Von Anfang an    │    │
│                                     │     sicher          │    │
│                                     └─────────────────────┘    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Grundprinzipien

| Prinzip | Beschreibung |
|---------|--------------|
| **Frühzeitige Integration** | Sicherheit von Beginn an berücksichtigen |
| **Risikobasiert** | Bedrohungen früh identifizieren |
| **Defense in Depth** | Mehrere Sicherheitsschichten |
| **Least Privilege** | Minimale Berechtigungen |
| **Fail Secure** | Bei Fehlern in sicheren Zustand wechseln |

---

### Security by Default

**Security by Default** bedeutet, dass ein System in seiner Standardkonfiguration bereits sicher ist – ohne dass der Benutzer Einstellungen ändern muss.

```
┌─────────────────────────────────────────────────────────────────┐
│                  SECURITY BY DEFAULT                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  OHNE Security by Default       MIT Security by Default         │
│  ┌─────────────────────┐        ┌─────────────────────┐        │
│  │                     │        │                     │        │
│  │  Standardpasswort:  │        │  Passwort bei       │        │
│  │  "admin"            │        │  Ersteinrichtung    │        │
│  │                     │        │  erforderlich       │        │
│  │  Alle Ports offen   │        │  Nur notwendige     │        │
│  │                     │        │  Ports offen        │        │
│  │  Verschlüsselung    │        │  Verschlüsselung    │        │
│  │  deaktiviert        │        │  standardmäßig an   │        │
│  │                     │        │                     │        │
│  │  ⚠️ Unsicher        │        │  ✅ Sicher ab Werk  │        │
│  └─────────────────────┘        └─────────────────────┘        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Beispiele für Security by Default

| Bereich | Unsichere Default | Sichere Default |
|---------|-------------------|-----------------|
| **Passwort** | Standardpasswort "admin" | Passwort muss bei Ersteinrichtung gesetzt werden |
| **Ports** | Alle Ports offen | Nur benötigte Ports offen |
| **Dienste** | Alle Dienste aktiv | Nur benötigte Dienste aktiv |
| **Verschlüsselung** | HTTP | HTTPS |
| **Firewall** | Deaktiviert | Aktiviert |
| **Updates** | Manuell | Automatisch |

---

### Vergleich: Security by Design vs. Security by Default

| Aspekt | Security by Design | Security by Default |
|--------|-------------------|---------------------|
| **Zeitpunkt** | Während der Entwicklung | Bei Auslieferung |
| **Fokus** | Entwicklungsprozess | Konfiguration |
| **Ziel** | Sichere Architektur | Sichere Standardeinstellungen |
| **Beispiel** | Keine SQL-Injection möglich | Firewall standardmäßig an |

**Beide Konzepte ergänzen sich!**

---

### Privacy by Design

**Privacy by Design** ist das Datenschutz-Äquivalent zu Security by Design:

| Konzept | Fokus |
|---------|-------|
| **Security by Design** | IT-Sicherheit von Anfang an |
| **Privacy by Design** | Datenschutz von Anfang an |

Privacy by Design ist in **Art. 25 DSGVO** verankert und fordert:
- Datenschutz durch Technikgestaltung
- Datenschutzfreundliche Voreinstellungen

---

### Praktische Umsetzung

#### Security by Design in der Softwareentwicklung

```
┌─────────────────────────────────────────────────────────────────┐
│          SECURITY BY DESIGN IM SDLC                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ANFORDERUNGEN ──► DESIGN ──► ENTWICKLUNG ──► TEST ──► DEPLOY  │
│       │              │              │           │         │     │
│       ▼              ▼              ▼           ▼         ▼     │
│  ┌─────────┐   ┌─────────┐   ┌─────────┐  ┌─────────┐ ┌─────┐  │
│  │Sicher-  │   │Sichere  │   │Sichere  │  │Penetra- │ │Siche│  │
│  │heits-   │   │Archi-   │   │Coding-  │  │tions-   │ │res  │  │
│  │anforde- │   │tektur   │   │Practices│  │tests    │ │Deploy│ │
│  │rungen   │   │         │   │         │  │         │ │ment │  │
│  └─────────┘   └─────────┘   └─────────┘  └─────────┘ └─────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

| Phase | Sicherheitsaktivität |
|-------|---------------------|
| **Anforderungen** | Sicherheitsanforderungen definieren |
| **Design** | Threat Modeling, sichere Architektur |
| **Entwicklung** | Secure Coding, Code Reviews |
| **Test** | Sicherheitstests, Penetrationstests |
| **Deployment** | Sichere Konfiguration, Härtung |

#### Security by Default - Checkliste

| Bereich | Standard-Empfehlung |
|---------|---------------------|
| **Authentifizierung** | Starke Passwörter erzwingen, 2FA empfehlen |
| **Verschlüsselung** | TLS/HTTPS standardmäßig aktivieren |
| **Berechtigungen** | Minimale Rechte als Standard |
| **Dienste** | Nur notwendige Dienste aktivieren |
| **Logging** | Sicherheitsrelevante Ereignisse protokollieren |
| **Updates** | Automatische Updates aktivieren |

---

### Vorteile dieser Ansätze

| Vorteil | Beschreibung |
|---------|--------------|
| **Kosteneinsparung** | Frühe Fehlerkorrektur ist günstiger |
| **Weniger Sicherheitslücken** | Systematische Betrachtung |
| **Compliance** | Erfüllung gesetzlicher Anforderungen (DSGVO) |
| **Vertrauen** | Sichere Produkte stärken Kundenvertrauen |
| **Weniger Nacharbeit** | Keine nachträglichen Patches nötig |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Security by Design** | Sicherheit von Anfang an in der Entwicklung |
| **Security by Default** | Sichere Standardkonfiguration |
| **Privacy by Design** | Datenschutz von Anfang an (Art. 25 DSGVO) |
| **Defense in Depth** | Mehrschichtige Sicherheit |
| **Fail Secure** | Bei Fehler in sicheren Zustand |
| **Least Privilege** | Minimale Berechtigungen |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was bedeutet "Security by Design"?
- Was ist der Unterschied zwischen "Security by Design" und "Security by Default"?
- Nennen Sie Beispiele für "Security by Default"
- Was ist "Privacy by Design"?

### Wichtig zu merken

- **Security by Design** = Sicherheit während der Entwicklung
- **Security by Default** = Sichere Standardkonfiguration
- **Privacy by Design** = Art. 25 DSGVO
- Beide Konzepte **ergänzen sich**

---

## Übungsaufgaben

### Aufgabe 1
Was bedeutet "Security by Design"?

**Lösung:** "Security by Design" bedeutet, dass Sicherheitsaspekte von Anfang an in den Entwicklungs- und Planungsprozess integriert werden. Anstatt Sicherheit nachträglich hinzuzufügen, wird sie von der ersten Planungsphase an berücksichtigt. Dies führt zu sicheren Systemen und vermeidet kostspielige nachträgliche Korrekturen.

### Aufgabe 2
Nennen Sie drei Beispiele für "Security by Default".

**Lösung:**
1. **Passwort:** Benutzer muss bei Ersteinrichtung ein starkes Passwort setzen (kein Standardpasswort)
2. **Firewall:** Firewall ist standardmäßig aktiviert
3. **Verschlüsselung:** HTTPS ist Standard, nicht HTTP

(Weitere: Automatische Updates aktiviert, nur notwendige Ports offen, Minimale Berechtigungen)

### Aufgabe 3
Was ist der Zusammenhang zwischen Security by Design und Privacy by Design?

**Lösung:** Beide Konzepte verfolgen den gleichen Ansatz - Integration von Anfang an:
- **Security by Design:** IT-Sicherheit wird von Anfang an in die Entwicklung integriert
- **Privacy by Design:** Datenschutz wird von Anfang an in die Entwicklung integriert

Privacy by Design ist in Art. 25 DSGVO gesetzlich verankert und fordert "Datenschutz durch Technikgestaltung" und "data-protectionfreundliche Voreinstellungen".

### Aufgabe 4
Warum ist Security by Design kostengünstiger als nachträgliche Sicherheitsmaßnahmen?

**Lösung:** Security by Design ist kostengünstiger, weil:
1. Fehler früh erkannt und behoben werden können (je später, desto teurer)
2. Keine Architekturänderungen nötig sind
3. Weniger Sicherheitslücken im fertigen Produkt
4. Weniger Notfall-Patches nach Veröffentlichung
5. Geringerer Aufwand für Nachbesserungen

---

## Querverweise

- [04-03-03 OS-Härtung](../04-03-protective-measures/04-03-03-os-hardening.md) - Sichere Konfiguration
- [04-04-02 ISMS](./04-04-02-isms.md) - Systematische Sicherheit
- [03-01-01 DSGVO-Grundsätze](../../03-data-protection/03-01-fundamentals/03-01-01-gdpr-principles.md) - Privacy by Design (Art. 25)
- [06-06-01 SDLC](../../06-software/06-06-development-process/06-06-01-sdlc.md) - Softwaredevelopment-process
