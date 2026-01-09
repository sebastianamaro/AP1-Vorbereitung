# Kosten und Kostenarten

## Lernziele

Nach diesem Abschnitt kannst du:
- Fixe und variable Kosten unterscheiden
- Einzel- und Gemeinkosten erklären
- Kostenarten in der IT benennen
- Die Begriffe Aufwand, Kosten und Ausgaben differenzieren

---

## Kerninhalt

### Grundbegriffe

```
┌─────────────────────────────────────────────────────────────────────┐
│                ABGRENZUNG DER BEGRIFFE                               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  AUSGABE                                                            │
│  → Zahlungsmittel fließen ab (Geldabfluss)                          │
│  → Beispiel: Rechnung wird bezahlt                                  │
│                                                                      │
│  AUFWAND                                                            │
│  → Verbrauch von Gütern und Dienstleistungen (GuV)                  │
│  → Beispiel: Gehalt wird verbucht                                   │
│                                                                      │
│  KOSTEN                                                             │
│  → Bewerteter Verbrauch für die Leistungserstellung                 │
│  → Nur betrieblich veranlasst                                       │
│  → Beispiel: Materialverbrauch für Produktion                       │
│                                                                      │
│  Wichtig für die Prüfung:                                           │
│  KOSTEN = Betrieblicher Aufwand für die Kernleistung                │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Fixe und Variable Kosten

```
┌─────────────────────────────────────────────────────────────────────┐
│           FIXE vs. VARIABLE KOSTEN                                   │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  FIXE KOSTEN (Kf)                   VARIABLE KOSTEN (Kv)            │
│  ─────────────────────────────────────────────────────────────────  │
│  Unabhängig von der                 Abhängig von der                │
│  Produktionsmenge                   Produktionsmenge                │
│                                                                      │
│  Kosten                             Kosten                          │
│    │                                  │                             │
│    │────────────────                  │         /                   │
│    │                                  │       /                     │
│    │                                  │     /                       │
│    │                                  │   /                         │
│    │                                  │ /                           │
│    └────────────────► Menge          └──────────────► Menge         │
│                                                                      │
│  Bleiben gleich,                    Steigen/sinken mit              │
│  egal wie viel produziert wird      der Produktionsmenge            │
│                                                                      │
│  BEISPIELE FIXE KOSTEN:             BEISPIELE VARIABLE KOSTEN:      │
│  → Miete                            → Material                      │
│  → Gehälter (Festanstellung)        → Verpackung                    │
│  → Versicherungen                   → Provisionen                   │
│  → Abschreibungen                   → Energieverbrauch (teilweise)  │
│  → Lizenzgebühren (pauschal)        → Lizenzgebühren (pro User)     │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### IT-typische Kostenbeispiele

| Fixe Kosten | Variable Kosten |
|-------------|-----------------|
| Server-Miete (monatlich pauschal) | Cloud-Kosten (nutzungsabhängig) |
| Microsoft 365 Jahresabo | AWS Pay-as-you-go |
| IT-Gehälter | Externe Berater (nach Stunden) |
| Bürofläche IT-Abteilung | Traffic-Kosten |
| Firewall-Wartungsvertrag | Druckkosten |

### Einzel- und Gemeinkosten

```
┌─────────────────────────────────────────────────────────────────────┐
│           EINZEL- vs. GEMEINKOSTEN                                   │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  EINZELKOSTEN                       GEMEINKOSTEN                    │
│  ─────────────────────────────────────────────────────────────────  │
│  Direkt einem Produkt/Auftrag       Nicht direkt zurechenbar        │
│  zurechenbar                        (müssen verteilt werden)        │
│                                                                      │
│  Beispiele IT:                      Beispiele IT:                   │
│  → Hardware für Kundenprojekt       → Strom des Rechenzentrums      │
│  → Lizenz für spezifischen          → Gehalt IT-Leitung             │
│    Kundenauftrag                    → Allgemeine Softwarelicenses   │
│  → Externe Berater für Projekt      → Bürokosten IT-Abteilung       │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │                                                              │    │
│  │    Projekt A                Projekt B                       │    │
│  │    ┌───────┐                ┌───────┐                       │    │
│  │    │       │                │       │                       │    │
│  │    │ EK: 5€│                │ EK: 8€│   Einzelkosten        │    │
│  │    │       │                │       │   direkt zuordenbar   │    │
│  │    └───────┘                └───────┘                       │    │
│  │         ↑                        ↑                          │    │
│  │         │                        │                          │    │
│  │         └──────────┬─────────────┘                          │    │
│  │                    │                                        │    │
│  │            ┌───────┴───────┐                                │    │
│  │            │ Gemeinkosten  │   Müssen aufgeteilt werden     │    │
│  │            │    (GK: 10€)  │   z.B. 50/50 oder nach         │    │
│  │            │               │   Zeitaufwand                  │    │
│  │            └───────────────┘                                │    │
│  │                                                              │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Kostenarten in der IT

```
┌─────────────────────────────────────────────────────────────────────┐
│                    KOSTENARTEN IN DER IT                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  1. PERSONALKOSTEN                                                  │
│     → Gehälter, Sozialabgaben, Weiterbildung                        │
│     → Oft größter Kostenblock in IT-Unternehmen                     │
│                                                                      │
│  2. HARDWAREKOSTEN                                                  │
│     → Anschaffung (Server, PCs, Netzwerk)                           │
│     → Wartung und Ersatzteile                                       │
│     → Abschreibungen                                                │
│                                                                      │
│  3. SOFTWAREKOSTEN                                                  │
│     → Lizenzen (einmalig oder Abo)                                  │
│     → Wartungsverträge                                              │
│     → Eigenentwicklung                                              │
│                                                                      │
│  4. INFRASTRUKTURKOSTEN                                             │
│     → Rechenzentrum (Miete, Strom, Kühlung)                         │
│     → Netzwerk (Internet, Leitung)                                  │
│     → Cloud-Services                                                │
│                                                                      │
│  5. BETRIEBSKOSTEN                                                  │
│     → Support und Wartung                                           │
│     → Schulungen                                                    │
│     → Versicherungen                                                │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Gesamtkosten berechnen

```
┌─────────────────────────────────────────────────────────────────────┐
│                    GESAMTKOSTENFORMEL                               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Gesamtkosten (K) = Fixkosten (Kf) + Variable Kosten (Kv)          │
│                                                                      │
│                     K = Kf + (kv × Menge)                           │
│                                                                      │
│  Wobei:                                                             │
│  → Kf = Fixkosten (konstant)                                        │
│  → kv = variable Stückkosten                                        │
│  → Menge = Produktionsmenge / Nutzungseinheiten                     │
│                                                                      │
│  ────────────────────────────────────────────────────────────────   │
│                                                                      │
│  BEISPIEL:                                                          │
│  Ein IT-Dienstleister hat:                                          │
│  → Fixkosten: 10.000 € / Monat (Gehälter, Miete)                    │
│  → Variable Kosten: 50 € / Supportstunde                            │
│                                                                      │
│  Bei 100 Supportstunden im Monat:                                   │
│  K = 10.000 € + (50 € × 100) = 10.000 € + 5.000 € = 15.000 €       │
│                                                                      │
│  Bei 200 Supportstunden im Monat:                                   │
│  K = 10.000 € + (50 € × 200) = 10.000 € + 10.000 € = 20.000 €      │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Fixkosten** | Kosten, die unabhängig von der Produktionsmenge anfallen |
| **Variable Kosten** | Kosten, die mit der Produktionsmenge steigen/sinken |
| **Einzelkosten** | Direkt einem Produkt/Auftrag zurechenbare Kosten |
| **Gemeinkosten** | Nicht direkt zurechenbare Kosten (müssen verteilt werden) |
| **Abschreibung** | Verteilung der Anschaffungskosten auf die Nutzungsdauer |
| **Gesamtkosten** | Summe aus Fix- und variablen Kosten |

---

## Prüfungstipps

1. **Merksatz Fix vs. Variabel:**
   - **Fix** = bleibt **f**est (unabhängig von Menge)
   - **Variabel** = **v**ariiert mit Menge

2. **Typische Prüfungsfragen:**
   - Klassifizierung von Kostenpositionen
   - Berechnung von Gesamtkosten
   - Unterschied Einzel-/Gemeinkosten

3. **Häufige Fehler:**
   - Gehälter sind meist Fixkosten (nicht variabel!)
   - Cloud-Kosten können fix ODER variabel sein (je nach Modell)

---

## Übungsaufgaben

### Aufgabe 1: Kostenzuordnung

Ordnen Sie folgende Kosten der ConSystem GmbH richtig zu:

| Kostenposition | Fix/Variabel | Einzel/Gemein |
|----------------|--------------|---------------|
| Servermiete (monatlich pauschal) | | |
| Lizenz für Kundenprojekt | | |
| Strom Rechenzentrum | | |
| Gehalt IT-Leiter | | |
| Cloud-Kosten (Pay-as-you-go) | | |

<details>
<summary>Lösung anzeigen</summary>

| Kostenposition | Fix/Variabel | Einzel/Gemein |
|----------------|--------------|---------------|
| Servermiete (monatlich pauschal) | Fix | Gemein |
| Lizenz für Kundenprojekt | Variabel | Einzel |
| Strom Rechenzentrum | Fix* | Gemein |
| Gehalt IT-Leiter | Fix | Gemein |
| Cloud-Kosten (Pay-as-you-go) | Variabel | Einzel/Gemein** |

*Strom kann auch teilweise variabel sein, wird aber oft als fix betrachtet
**Abhängig davon, ob für spezifisches Projekt oder allgemein

</details>

### Aufgabe 2: Gesamtkostenberechnung

Die ConSystem GmbH plant einen neuen Supportbereich:
- Fixkosten: 8.000 €/Monat (Miete, Gehälter Festangestellte)
- Variable Kosten: 35 €/Supportticket (externe Bearbeitung)

a) Wie hoch sind die Gesamtkosten bei 50 Tickets/Monat?
b) Wie hoch bei 150 Tickets/Monat?
c) Ab welcher Ticketanzahl lohnt sich die Einstellung eines weiteren Festangestellten (Gehalt: 4.000 €/Monat), wenn dieser 100 Tickets bearbeiten kann?

<details>
<summary>Lösung anzeigen</summary>

a) **50 Tickets:**
K = 8.000 € + (35 € × 50) = 8.000 € + 1.750 € = **9.750 €**

b) **150 Tickets:**
K = 8.000 € + (35 € × 150) = 8.000 € + 5.250 € = **13.250 €**

c) **Break-Even für Neueinstellung:**
- Kosten extern für 100 Tickets: 35 € × 100 = 3.500 €
- Kosten Festangestellter: 4.000 €
- Differenz: 500 €/Monat TEURER bei Neueinstellung

Bei 100 Tickets lohnt sich extern noch.
Ab 115 Tickets: 35 € × 115 = 4.025 € > 4.000 €
**Ab ca. 115 Tickets/Monat lohnt sich die Neueinstellung.**

</details>

### Aufgabe 3: IT-Budget analysieren

Ein IT-Budget enthält folgende Positionen:

| Position | Betrag |
|----------|--------|
| Personalkosten | 500.000 € |
| Hardwareprocurement | 80.000 € |
| Softwarelicenses | 60.000 € |
| Cloud-Services | 40.000 € |
| Schulungen | 20.000 € |

a) Welche Position ist typischerweise der größte Kostenblock?
b) Welche Positionen sind überwiegend Fixkosten?
c) Welche Positionen könnten variabel sein?

<details>
<summary>Lösung anzeigen</summary>

a) **Personalkosten** (500.000 €) - typischerweise 60-70% des IT-Budgets

b) **Überwiegend Fixkosten:**
- Personalkosten (Gehälter sind fix)
- Hardwareprocurement (Abschreibung ist fix)
- Softwarelicenses (oft Jahreslicenses = fix)

c) **Potenziell variable Kosten:**
- Cloud-Services (wenn Pay-as-you-go)
- Schulungen (je nach Bedarf)
- Teile der Softwarelicenses (wenn pro User)

</details>

---

## Querverweise

- [ROI und TCO](08-02-02-roi-tco.md) - Wirtschaftlichkeitsrechnung
- [Nutzwertanalyse](08-02-03-utility-analysis.md) - Entscheidungsfindung
- [Preiskalkulation](../08-05-pricing/08-05-01-price-calculation.md) - Kostenzuschlag
