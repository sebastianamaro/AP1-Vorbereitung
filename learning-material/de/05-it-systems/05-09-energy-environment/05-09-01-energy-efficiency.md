# Energieeffizienz in der IT

## Lernziele

Nach diesem Kapitel solltest du:
- Die Bedeutung von Energieeffizienz in der IT verstehen
- Maßnahmen zur Energieeinsparung kennen
- Green IT erklären können
- Energieverbrauch von IT-Systemen einschätzen können

---

## Kerninhalt

### Warum Energieeffizienz in der IT?

IT-Systeme verbrauchen erhebliche Mengen an Energie. Energieeffizienz spart Kosten und schont die Umwelt.

```
┌─────────────────────────────────────────────────────────────────┐
│                 ENERGIEVERBRAUCH IT                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Rechenzentren weltweit: ca. 200-250 TWh/Jahr                 │
│   (≈ 1% des weltweiten Stromverbrauchs)                        │
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │  STROMVERBRAUCH EINES RECHENZENTRUMS                     │  │
│   │                                                          │  │
│   │   Server & Storage:     ~40%   ████████░░░░░░░░░░      │  │
│   │   Kühlung:              ~40%   ████████░░░░░░░░░░      │  │
│   │   Netzwerk:             ~10%   ██░░░░░░░░░░░░░░░░      │  │
│   │   Beleuchtung, USV:     ~10%   ██░░░░░░░░░░░░░░░░      │  │
│   └─────────────────────────────────────────────────────────┘  │
│                                                                 │
│   Kühlung ist fast so energieintensiv wie die IT selbst!      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Green IT

**Green IT** bezeichnet Maßnahmen zur umwelt- und ressourcenschonenden Nutzung von Informationstechnologie.

| Aspekt | Beschreibung |
|--------|--------------|
| **Green durch IT** | IT hilft anderen Bereichen, Energie zu sparen |
| **Green in IT** | IT selbst energieeffizienter machen |

```
┌────────────────────────────────────────────────────────────────┐
│                      GREEN IT                                  │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  GREEN DURCH IT                    GREEN IN IT                │
│  (IT als Enabler)                  (IT selbst optimieren)     │
│                                                                │
│  • Videokonferenzen statt         • Energieeffiziente        │
│    Dienstreisen                     Hardware                  │
│  • Digitale Dokumente             • Virtualisierung          │
│    statt Papier                   • Effiziente Kühlung       │
│  • Smart Building                 • Powermanagement          │
│  • Industrie 4.0                  • Cloud statt              │
│    Optimierung                      lokale Server            │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Maßnahmen zur Energieeinsparung

#### Hardware

| Maßnahme | Beschreibung |
|----------|--------------|
| **Energieeffiziente Prozessoren** | Moderne CPUs mit niedrigem TDP |
| **SSDs statt HDDs** | SSDs verbrauchen weniger Strom |
| **Effiziente Netzteile** | 80 PLUS zertifiziert |
| **Konsolidierung** | Weniger Server durch Virtualisierung |
| **Abschaltung** | Ungenutzte Geräte ausschalten |

#### Software

| Maßnahme | Beschreibung |
|----------|--------------|
| **Powermanagement** | Energiesparmodi aktivieren |
| **Virtualisierung** | Mehrere VMs auf weniger Hardware |
| **Cloud Computing** | Auslagerung in effiziente Rechenzentren |
| **Effiziente Software** | Ressourcenschonende Programmierung |

#### Rechenzentrum

| Maßnahme | Beschreibung |
|----------|--------------|
| **Freie Kühlung** | Außenluft nutzen |
| **Warm-/Kaltgang** | Getrennte Luftströme |
| **Abwärmenutzung** | Heizen mit Server-Abwärme |
| **Erneuerbare Energie** | Strom aus Solar, Wind |

---

### PUE (Power Usage Effectiveness)

**PUE** ist eine Kennzahl für die Energieeffizienz von Rechenzentren.

```
┌────────────────────────────────────────────────────────────────┐
│                      PUE-BERECHNUNG                            │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│                 Gesamtenergie des Rechenzentrums               │
│   PUE  =  ─────────────────────────────────────────           │
│                 Energie für IT-Geräte                          │
│                                                                │
│   Beispiel:                                                    │
│   200 kW Gesamt / 100 kW IT = PUE 2,0                         │
│                                                                │
│   ┌─────────────────────────────────────────────────────────┐ │
│   │  PUE       │ Bewertung                                   │ │
│   │───────────────────────────────────────────────────────│ │
│   │  > 2,0     │ Schlecht (50% für Kühlung etc.)            │ │
│   │  1,6 - 2,0 │ Durchschnitt                               │ │
│   │  1,2 - 1,6 │ Gut                                        │ │
│   │  < 1,2     │ Sehr gut (z.B. Google: ~1,1)              │ │
│   └─────────────────────────────────────────────────────────┘ │
│                                                                │
│   Ideal: PUE = 1,0 (gesamte Energie geht in IT)              │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Energiesparmodi

| Modus | Windows | Beschreibung |
|-------|---------|--------------|
| **Standby** | S3 | RAM bleibt aktiv, schnelles Aufwachen |
| **Ruhezustand** | S4 | RAM auf Festplatte, stromlos |
| **Energiesparen** | - | Reduzierte Leistung |
| **Ausschalten** | S5 | Komplett aus |

---

### Energieeffizienz im Büro

```
┌────────────────────────────────────────────────────────────────┐
│              ENERGIESPARTIPPS ARBEITSPLATZ                     │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  ┌────────────────────────────────────────────────────────┐   │
│  │ ✓ Bildschirm bei Pausen ausschalten                    │   │
│  │ ✓ Energiesparmodus aktivieren                          │   │
│  │ ✓ Drucker nur bei Bedarf einschalten                   │   │
│  │ ✓ Laptop statt Desktop (weniger Verbrauch)             │   │
│  │ ✓ Mehrfachsteckdose mit Schalter                       │   │
│  │ ✓ Bildschirmhelligkeit reduzieren                      │   │
│  │ ✓ Geräte nach Feierabend komplett ausschalten          │   │
│  └────────────────────────────────────────────────────────┘   │
│                                                                │
│  Typischer Verbrauch:                                         │
│  Desktop-PC:   60-250 Watt                                    │
│  Laptop:       15-60 Watt                                     │
│  Monitor:      20-40 Watt                                     │
│  Drucker:      10-40 Watt (Standby: 1-5 Watt)                │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Erneuerbare Energien für IT

| Maßnahme | Beschreibung |
|----------|--------------|
| **Ökostrom** | Bezug von regenerativem Strom |
| **Solar** | PV-Anlage auf Rechenzentrum |
| **CO2-Kompensation** | Ausgleich durch Projekte |
| **Standortwahl** | Kühleres Klima = weniger Kühlenergie |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Green IT** | Umweltfreundliche IT |
| **PUE** | Power Usage Effectiveness |
| **TDP** | Thermal Design Power (Wärmeabgabe CPU) |
| **Standby** | Energiesparmodus |
| **Virtualisierung** | Mehrere VMs auf einem Host |
| **Konsolidierung** | Zusammenlegung von Servern |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was ist Green IT?
- Nennen Sie Maßnahmen zur Energieeinsparung
- Was ist PUE?
- Wie kann man im Büro Energie sparen?

### Wichtig zu merken

- **Green IT** = umweltfreundliche IT-Nutzung
- **PUE** = Gesamtenergie / IT-Energie (ideal: 1,0)
- **Kühlung** = ~40% des RZ-Stromverbrauchs
- **Virtualisierung** = weniger Server = weniger Strom

---

## Übungsaufgaben

### Aufgabe 1
Was ist der Unterschied zwischen "Green durch IT" und "Green in IT"?

**Lösung:**
- **Green durch IT:** IT hilft anderen Bereichen, Energie zu sparen (z.B. Videokonferenzen statt Dienstreisen, digitale Dokumente statt Papier)
- **Green in IT:** Die IT selbst energieeffizienter machen (z.B. energiesparende Hardware, Virtualisierung, effiziente Kühlung)

### Aufgabe 2
Ein Rechenzentrum verbraucht 500 kW, davon 300 kW für IT-Geräte. Wie hoch ist der PUE?

**Lösung:**
```
PUE = Gesamtenergie / IT-Energie
PUE = 500 kW / 300 kW = 1,67
```
**Bewertung:** Durchschnittlicher Wert. 40% der Energie gehen nicht in die IT (Kühlung, Beleuchtung, etc.).

### Aufgabe 3
Nennen Sie drei Maßnahmen, um den Energieverbrauch am Büroarbeitsplatz zu reduzieren.

**Lösung:**
1. **Energiesparmodus aktivieren:** PC geht automatisch in Standby
2. **Monitor bei Pausen ausschalten:** Spart 20-40 Watt
3. **Laptop statt Desktop nutzen:** Laptops verbrauchen 15-60 Watt statt 60-250 Watt

---

## Querverweise

- [05-09-02 Geräteklassen](./05-09-02-device-classes.md) - Energieeffizienzklassen
- [05-04-01 Virtualisierung](../05-04-virtualization-cloud/05-04-01-virtualization.md) - Server-Konsolidierung
- [05-02-07 USV](../05-02-hardware/05-02-07-usv.md) - Stromversorgung
