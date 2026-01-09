# Anonymisierung und Pseudonymisierung

## Lernziele

Nach diesem Kapitel solltest du:
- Anonymisierung definieren und von Pseudonymisierung unterscheiden können
- Methoden der Anonymisierung kennen
- Methoden der Pseudonymisierung kennen
- Die rechtlichen Auswirkungen verstehen

---

## Kerninhalt

### Überblick

Beide Verfahren dienen dem Schutz personenbezogener Daten, unterscheiden sich aber grundlegend:

```
┌─────────────────────────────────────────────────────────────────┐
│                DATENSCHUTZVERFAHREN                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ANONYMISIERUNG                  PSEUDONYMISIERUNG              │
│  ┌─────────────────────┐         ┌─────────────────────┐       │
│  │ Personenbezug       │         │ Personenbezug       │       │
│  │ UNWIDERRUFLICH      │         │ WIEDERHERSTELLBAR   │       │
│  │ aufgehoben          │         │ (mit Schlüssel)     │       │
│  │                     │         │                     │       │
│  │ KEINE DSGVO mehr!   │         │ DSGVO gilt weiter!  │       │
│  └─────────────────────┘         └─────────────────────┘       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Anonymisierung

#### Definition

**Anonymisierung** ist ein Verfahren zur **unwiderruflichen Entfernung des Personenbezugs** aus Daten. Nach der Anonymisierung können die Daten keiner bestimmten Person mehr zugeordnet werden.

#### Merkmale

| Merkmal | Beschreibung |
|---------|--------------|
| **Unwiderruflich** | Personenbezug kann nicht wiederhergestellt werden |
| **Keine Identifikation** | Keine Zuordnung zu Person möglich |
| **DSGVO-frei** | Anonymisierte Daten fallen nicht mehr unter die DSGVO |
| **Dauerhaft** | Der Verlust des Personenbezugs ist permanent |

#### Methoden der Anonymisierung

| Methode | Beschreibung | Beispiel |
|---------|--------------|----------|
| **Datenaggregation** | Zusammenfassung zu Gruppen | Durchschnittswerte statt Einzelwerte |
| **Maskierung** | Ersetzung von Merkmalen | Namen durch "XXX" ersetzen |
| **Rauschen (Noise Addition)** | Zufällige Veränderung | Zufallswerte zu Daten addieren |
| **Generalisierung** | Reduzierung der Genauigkeit | "25 Jahre" → "20-30 Jahre" |
| **k-Anonymität** | Mindestens k Personen teilen Merkmale | Daten nur freigeben, wenn k ≥ 5 |

#### Beispiel

```
VORHER (personenbezogen):
Max Mustermann, 25 Jahre, München, 60.000 EUR Gehalt

NACHHER (anonymisiert):
Männlich, Altersgruppe 20-30, Bayern, Gehaltsgruppe 50-70k
```

---

### Pseudonymisierung

#### Definition (Art. 4 Nr. 5 DSGVO)

**Pseudonymisierung** ist ein Verfahren, bei dem personenbezogene Daten so verändert werden, dass sie **ohne zusätzliche Informationen** nicht mehr einer bestimmten Person zugeordnet werden können.

#### Merkmale

| Merkmal | Beschreibung |
|---------|--------------|
| **Reversibel** | Personenbezug kann mit Schlüssel wiederhergestellt werden |
| **Schlüsseltrennung** | Zuordnungsschlüssel separat aufbewahrt |
| **DSGVO gilt** | Pseudonymisierte Daten bleiben personenbezogen |
| **Risikominderung** | Reduziert Risiko bei Datenverlust |

#### Methoden der Pseudonymisierung

| Methode | Beschreibung | Beispiel |
|---------|--------------|----------|
| **Ersatz durch Kennungen** | Zuweisung zufälliger Identifikatoren | Kundennummer statt Name |
| **Hashing** | Umwandlung in Hash-Wert | SHA-256 Hash des Namens |
| **Tokenisierung** | Austausch durch zufällige Token | Token separat gespeichert |
| **Verschlüsselung** | Daten verschlüsseln | AES-verschlüsselte Daten |

#### Beispiel

```
ORIGINAL:                     PSEUDONYMISIERT:
Max Mustermann    →           ID: 7a3b9c4d
max@example.com   →           ID: 7a3b9c4d
Musterstraße 1    →           ID: 7a3b9c4d

ZUORDNUNGSTABELLE (separat gespeichert):
7a3b9c4d = Max Mustermann, max@example.com, Musterstraße 1
```

---

### Vergleich: Anonymisierung vs. Pseudonymisierung

| Aspekt | Anonymisierung | Pseudonymisierung |
|--------|----------------|-------------------|
| **Personenbezug** | Unwiderruflich aufgehoben | Wiederherstellbar |
| **DSGVO-Anwendung** | Nein | Ja |
| **Rückführung** | Unmöglich | Mit Schlüssel möglich |
| **Risiko** | Sehr gering | Reduziert, aber vorhanden |
| **Nutzbarkeit** | Eingeschränkt | Weitgehend erhalten |
| **Beispiel** | Statistiken | Forschungsdaten |

---

### Rechtliche Einordnung

```
┌─────────────────────────────────────────────────────────────────┐
│                    DSGVO-ANWENDBARKEIT                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Personenbezogene Daten                                         │
│  ──────────────────────────────────────────────►               │
│  │                     │                       │               │
│  │                     │                       │               │
│  ▼                     ▼                       ▼               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │  Original-   │  │ Pseudonymi-  │  │ Anonymi-     │          │
│  │  daten       │  │ sierte Daten │  │ sierte Daten │          │
│  │              │  │              │  │              │          │
│  │ DSGVO GILT   │  │ DSGVO GILT   │  │ DSGVO GILT   │          │
│  │              │  │              │  │ NICHT        │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Anonymisierung** | Unwiderrufliche Aufhebung des Personenbezugs |
| **Pseudonymisierung** | Ersetzung durch Kennungen, reversibel |
| **k-Anonymität** | Mindestens k Personen teilen gleiche Merkmale |
| **Tokenisierung** | Austausch durch zufällige Token |
| **Hashing** | Einweg-Umwandlung in festen Hash-Wert |
| **Datenaggregation** | Zusammenfassung von Einzelwerten |

---

## Prüfungstipps

### Häufige Prüfungsfragen
- Was ist der Unterschied zwischen Anonymisierung und Pseudonymisierung?
- Gilt die DSGVO für anonymisierte Daten?
- Nennen Sie Methoden der Anonymisierung/Pseudonymisierung

### Wichtig zu merken
- **Anonymisierung** = DSGVO gilt NICHT mehr
- **Pseudonymisierung** = DSGVO gilt weiterhin
- Pseudonymisierte Daten können mit Schlüssel zurückgeführt werden

---

## Übungsaufgaben

### Aufgabe 1
Was ist der wesentliche Unterschied zwischen Anonymisierung und Pseudonymisierung?

**Lösung:**
- **Anonymisierung:** Der Personenbezug wird unwiderruflich aufgehoben. Die Daten können keiner Person mehr zugeordnet werden. Die DSGVO gilt nicht mehr.
- **Pseudonymisierung:** Der Personenbezug kann mit einem separaten Schlüssel wiederhergestellt werden. Die DSGVO gilt weiterhin.

### Aufgabe 2
Nennen Sie zwei Methoden der Anonymisierung.

**Lösung:**
1. Datenaggregation (Zusammenfassung zu Gruppen)
2. Generalisierung (Reduzierung der Genauigkeit)
(oder: Maskierung, Rauschen, k-Anonymität)

### Aufgabe 3
Gilt die DSGVO für pseudonymisierte Daten?

**Lösung:** Ja, die DSGVO gilt weiterhin für pseudonymisierte Daten, da der Personenbezug mit dem separat aufbewahrten Schlüssel wiederhergestellt werden kann. Die Daten bleiben also personenbezogen im Sinne des Art. 4 Nr. 1 DSGVO.

---

## Querverweise

- [03-01-02 Personenbezogene Daten](../03-01-fundamentals/03-01-02-personal-data.md) - Definition
- [04-05-02 Hashwerte](../../04-it-security/04-05-cryptography/04-05-02-hash-values.md) - Hashing-Verfahren
- [04-05-01 Verschlüsselungsverfahren](../../04-it-security/04-05-cryptography/04-05-01-encryption-methods.md) - Verschlüsselung
