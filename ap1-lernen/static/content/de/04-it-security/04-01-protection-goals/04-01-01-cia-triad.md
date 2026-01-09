# CIA-Triade - Schutzziele der IT-Sicherheit

## Lernziele

Nach diesem Kapitel solltest du:
- Die drei Schutzziele der IT-Sicherheit benennen können
- Jedes Schutzziel definieren und erklären können
- Beispiele für die Umsetzung der Schutzziele nennen können
- Den Zusammenhang zwischen den Schutzzielen verstehen

---

## Kerninhalt

### Was ist die CIA-Triade?

Die **CIA-Triade** beschreibt die drei grundlegenden Schutzziele der Informationssicherheit. Der Name leitet sich von den englischen Begriffen ab:

- **C**onfidentiality (Vertraulichkeit)
- **I**ntegrity (Integrität)
- **A**vailability (Verfügbarkeit)

```
┌─────────────────────────────────────────────────────────────────┐
│                      CIA-TRIADE                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                    VERTRAULICHKEIT                              │
│                   (Confidentiality)                             │
│                          ▲                                      │
│                         /│\                                     │
│                        / │ \                                    │
│                       /  │  \                                   │
│                      /   │   \                                  │
│                     /    │    \                                 │
│      INTEGRITÄT ◄──/─────┼─────\──► VERFÜGBARKEIT              │
│      (Integrity)         │         (Availability)               │
│                                                                 │
│   Alle drei Ziele müssen in Einklang gebracht werden!           │
└─────────────────────────────────────────────────────────────────┘
```

---

### 1. Vertraulichkeit (Confidentiality)

#### Definition

**Vertraulichkeit** bedeutet, dass Informationen nur für autorisierte Personen, Prozesse oder Systeme zugänglich sind.

> Nur wer berechtigt ist, darf auf die Daten zugreifen.

#### Gefährdungen der Vertraulichkeit

| Gefährdung | Beschreibung |
|------------|--------------|
| **Unbefugter Zugriff** | Hacker, Mitarbeiter ohne Berechtigung |
| **Abhören** | Netzwerkverkehr mitlesen |
| **Social Engineering** | Menschen manipulieren |
| **Diebstahl** | Geräte oder Datenträger stehlen |

#### Maßnahmen zur Sicherung der Vertraulichkeit

| Maßnahme | Beispiel |
|----------|----------|
| **Verschlüsselung** | AES, TLS/SSL |
| **Zugriffskontrollen** | Berechtigungskonzept |
| **Authentifizierung** | Passwörter, 2FA |
| **Schulungen** | Awareness-Training |

#### Beispiel

Ein Kunde möchte seine Kontodaten nur für sich selbst einsehbar haben. Die Bank muss durch Verschlüsselung und Zugriffskontrollen sicherstellen, dass niemand anderes Zugriff hat.

---

### 2. Integrität (Integrity)

#### Definition

**Integrität** bedeutet, dass Daten vollständig, korrekt und unverändert sind. Änderungen müssen nachvollziehbar und nur durch Berechtigte möglich sein.

> Daten dürfen nicht unbemerkt verändert werden.

#### Gefährdungen der Integrität

| Gefährdung | Beschreibung |
|------------|--------------|
| **Manipulation** | Bewusste Veränderung von Daten |
| **Übertragungsfehler** | Fehler bei Datenübertragung |
| **Softwarefehler** | Bugs, die Daten beschädigen |
| **Hardwaredefekte** | Speicherfehler |

#### Maßnahmen zur Sicherung der Integrität

| Maßnahme | Beispiel |
|----------|----------|
| **Hashwerte** | SHA-256, MD5 (veraltet) |
| **Digitale Signaturen** | Echtheit prüfen |
| **Prüfsummen** | CRC bei Übertragung |
| **Protokollierung** | Audit-Logs |
| **Versionierung** | Änderungshistorie |

#### Beispiel

Bei einer Online-Überweisung muss sichergestellt werden, dass der Betrag nicht von 100€ auf 10.000€ manipuliert werden kann. Hashwerte und digitale Signaturen schützen davor.

---

### 3. Verfügbarkeit (Availability)

#### Definition

**Verfügbarkeit** bedeutet, dass Daten und IT-Systeme zum gewünschten Zeitpunkt für autorisierte Benutzer zugänglich und nutzbar sind.

> Das System muss funktionieren, wenn es gebraucht wird.

#### Gefährdungen der Verfügbarkeit

| Gefährdung | Beschreibung |
|------------|--------------|
| **Systemausfall** | Hardware- oder Softwarefehler |
| **DoS-Angriffe** | Denial of Service |
| **Stromausfall** | Energieversorgung unterbrochen |
| **Naturkatastrophen** | Brand, Wasserschaden |
| **Überlastung** | Zu viele Anfragen |

#### Maßnahmen zur Sicherung der Verfügbarkeit

| Maßnahme | Beispiel |
|----------|----------|
| **Redundanz** | Zweite Hardware |
| **Backup** | Regelmäßige Datensicherung |
| **USV** | Unterbrechungsfreie Stromversorgung |
| **Lastverteilung** | Load Balancer |
| **Notfallpläne** | Business Continuity |

#### Beispiel

Ein Online-Shop muss auch bei hoher Auslastung (z.B. Black Friday) erreichbar bleiben. Durch Lastverteilung und redundante Server wird die Verfügbarkeit sichergestellt.

---

### Zusammenspiel der Schutzziele

Die drei Schutzziele können in Konflikt geraten:

| Konflikt | Beispiel |
|----------|----------|
| **Vertraulichkeit vs. Verfügbarkeit** | Starke Verschlüsselung kann Performance reduzieren |
| **Integrität vs. Verfügbarkeit** | Aufwändige Prüfungen verzögern Zugriff |
| **Vertraulichkeit vs. Nutzbarkeit** | Zu viele Zugriffsbeschränkungen behindern Arbeit |

**Lösung:** Ein **Schutzneeds-analysis** hilft, die richtige Balance zu finden.

---

### Erweiterte Schutzziele

Neben der klassischen CIA-Triade gibt es weitere Schutzziele:

| Schutzziel | Beschreibung |
|------------|--------------|
| **Authentizität** | Echtheit von Identität oder Daten |
| **Nichtabstreitbarkeit** | Nachweisbarkeit von Aktionen |
| **Zurechenbarkeit** | Aktionen können Personen zugeordnet werden |
| **Datenschutz** | Schutz personenbezogener Daten |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **CIA-Triade** | Drei Schutzziele: Vertraulichkeit, Integrität, Verfügbarkeit |
| **Vertraulichkeit** | Nur Berechtigte haben Zugang |
| **Integrität** | Daten sind korrekt und unverändert |
| **Verfügbarkeit** | System ist nutzbar, wenn benötigt |
| **Authentizität** | Echtheit einer Identität oder Nachricht |
| **Nichtabstreitbarkeit** | Aktion kann nicht geleugnet werden |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was sind die drei Schutzziele der IT-Sicherheit?
- Nennen Sie Maßnahmen zur Sicherung der Vertraulichkeit/Integrität/Verfügbarkeit
- Welches Schutzziel ist bei [Szenario] betroffen?

### Merkhilfe

**C-I-A** (wie die amerikanische Behörde) = **V-I-V** auf Deutsch:
- **V**ertraulichkeit
- **I**ntegrität
- **V**erfügbarkeit

### Typische Szenarien zuordnen

| Szenario | Betroffenes Schutzziel |
|----------|------------------------|
| Daten wurden gestohlen | **Vertraulichkeit** verletzt |
| Daten wurden manipuliert | **Integrität** verletzt |
| System nicht erreichbar | **Verfügbarkeit** verletzt |

---

## Übungsaufgaben

### Aufgabe 1
Was bedeutet die Abkürzung CIA im Kontext der IT-Sicherheit?

**Lösung:** CIA steht für die drei Schutzziele:
- **C**onfidentiality (Vertraulichkeit)
- **I**ntegrity (Integrität)
- **A**vailability (Verfügbarkeit)

### Aufgabe 2
Ein Hacker verändert den Betrag einer Online-Überweisung von 100€ auf 1.000€. Welches Schutzziel ist verletzt?

**Lösung:** Das Schutzziel **Integrität** ist verletzt, da die Daten (Überweisungsbetrag) unbefugt verändert wurden.

### Aufgabe 3
Nennen Sie je zwei Maßnahmen zur Sicherung von Vertraulichkeit, Integrität und Verfügbarkeit.

**Lösung:**
- **Vertraulichkeit:** Verschlüsselung, Zugriffskontrollen
- **Integrität:** Hashwerte, digitale Signaturen
- **Verfügbarkeit:** Backup, USV (unterbrechungsfreie Stromversorgung)

### Aufgabe 4
Ein Server fällt durch einen Stromausfall aus. Welches Schutzziel ist verletzt?

**Lösung:** Das Schutzziel **Verfügbarkeit** ist verletzt, da das System nicht genutzt werden kann.

---

## Querverweise

- [03-02-01 TOM](../../03-data-protection/03-02-technical-measures/03-02-01-tom.md) - Technisch-organisatorische Maßnahmen
- [04-03-01 Technische Maßnahmen](../04-03-protective-measures/04-03-01-technical-measures.md) - Konkrete Schutzmaßnahmen
- [04-05-02 Hashwerte](../04-05-cryptography/04-05-02-hash-values.md) - Integritätsprüfung
- [05-05-01 Backup-Arten](../../05-it-systems/05-05-data-backup/05-05-01-backup-types.md) - Verfügbarkeitssicherung
