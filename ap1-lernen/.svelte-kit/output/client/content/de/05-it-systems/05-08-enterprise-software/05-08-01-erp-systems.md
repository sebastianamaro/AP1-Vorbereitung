# ERP-Systeme

**Hinweis:** Unternehmenssoftware ist NEU im Prüfungskatalog 2025!

## Lernziele

Nach diesem Kapitel solltest du:
- Den Begriff ERP definieren können
- Typische ERP-Module kennen
- Vorteile von ERP-Systemen beschreiben können
- Bekannte ERP-Anbieter nennen können

---

## Kerninhalt

### Was ist ERP?

**ERP (Enterprise Resource Planning)** ist eine integrierte Softwarelösung, die alle Geschäftsprozesse eines Unternehmens in einem System zusammenführt.

```
┌─────────────────────────────────────────────────────────────────┐
│                    ERP-SYSTEM                                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                    ┌───────────────────┐                       │
│                    │  ZENTRALE         │                       │
│                    │  DATENBANK        │                       │
│                    └─────────┬─────────┘                       │
│                              │                                  │
│      ┌───────────────────────┼───────────────────────┐         │
│      │           │           │           │           │         │
│  ┌───▼───┐  ┌───▼───┐  ┌───▼───┐  ┌───▼───┐  ┌───▼───┐      │
│  │Finanz-│  │Perso- │  │Produk-│  │Vertrieb│  │Einkauf│      │
│  │wesen  │  │nal    │  │tion   │  │& CRM  │  │       │      │
│  │       │  │(HR)   │  │       │  │       │  │       │      │
│  │• Buch-│  │• Lohn │  │• Ferti-│ │• Kunden│  │• Bestell│     │
│  │ haltung│ │• Zeit-│  │ gung  │  │• Angebo│  │ ungen │      │
│  │• Kosten│ │ erfass│  │• Lager │  │ te    │  │• Liefer│     │
│  │ rechng│  │• Pers.-│ │• Quali-│ │• Aufträ│  │ anten │      │
│  │       │  │ planung│ │ tät   │  │ ge    │  │       │      │
│  └───────┘  └───────┘  └───────┘  └───────┘  └───────┘      │
│                                                                 │
│   Alle Daten sind integriert und konsistent!                   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### ERP vs. Einzellösungen

```
┌────────────────────────────────────────────────────────────────┐
│           EINZELLÖSUNGEN vs. ERP                               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  OHNE ERP (Insellösungen):       MIT ERP:                     │
│                                                                │
│  ┌─────┐  ┌─────┐  ┌─────┐      ┌─────────────────────────┐  │
│  │Buch-│  │Lager│  │Pers-│      │                         │  │
│  │halt.│  │     │  │onal │      │     ERP-SYSTEM          │  │
│  └──┬──┘  └──┬──┘  └──┬──┘      │                         │  │
│     │        │        │         │  ┌─────┐┌─────┐┌─────┐  │  │
│     └────?───┴────?───┘         │  │Buch.││Lager││Pers.│  │  │
│                                  │  └──┬──┘└──┬──┘└──┬──┘  │  │
│  • Daten mehrfach pflegen        │     └──────┼──────┘     │  │
│  • Inkonsistenzen möglich        │            │            │  │
│  • Manuelle Schnittstellen       │     ZENTRALE DB         │  │
│  • Kein Gesamtüberblick          │                         │  │
│                                  │  • Eine Datenbasis      │  │
│                                  │  • Automatischer Fluss  │  │
│                                  │  • Echtzeit-Daten       │  │
│                                  └─────────────────────────┘  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Typische ERP-Module

| Modul | Funktion |
|-------|----------|
| **Finanzbuchhaltung (FI)** | Bilanz, GuV, Konten |
| **Controlling (CO)** | Kostenrechnung, Budgets |
| **Materialwirtschaft (MM)** | Einkauf, Lagerverwaltung |
| **Vertrieb (SD)** | Angebote, Aufträge, Fakturierung |
| **Produktion (PP)** | Fertigungsplanung, -steuerung |
| **Personalwesen (HR)** | Lohn, Zeit, Personalplanung |
| **Qualitätsmanagement (QM)** | Prüfpläne, Qualitätssicherung |
| **Instandhaltung (PM)** | Wartung, Reparatur |

---

### Vorteile von ERP-Systemen

| Vorteil | Beschreibung |
|---------|--------------|
| **Integration** | Alle Daten in einem System |
| **Konsistenz** | Einheitliche, aktuelle Daten |
| **Effizienz** | Automatisierte Prozesse |
| **Transparenz** | Echtzeit-Überblick über das Unternehmen |
| **Standardisierung** | Einheitliche Prozesse |
| **Compliance** | Unterstützung gesetzlicher Anforderungen |
| **Skalierbarkeit** | Wächst mit dem Unternehmen |

---

### Nachteile und Herausforderungen

| Nachteil | Beschreibung |
|----------|--------------|
| **Hohe Kosten** | Lizenz, Implementierung, Wartung |
| **Komplexität** | Lange Einführungsprojekte |
| **Anpassungsbedarf** | Customizing oft erforderlich |
| **Schulungsaufwand** | Mitarbeiter müssen geschult werden |
| **Abhängigkeit** | Vendor Lock-In |

---

### ERP-Anbieter

| Anbieter | System | Zielgruppe |
|----------|--------|------------|
| **SAP** | SAP S/4HANA | Großenterprise |
| **Microsoft** | Dynamics 365 | Mittelstand, Enterprise |
| **Oracle** | Oracle ERP Cloud | Großenterprise |
| **Sage** | Sage 100/X3 | KMU |
| **Haufe** | Lexware | Kleinenterprise |
| **proALPHA** | proALPHA | Mittelstand (Fertigung) |

---

### ERP-Einführung

```
┌────────────────────────────────────────────────────────────────┐
│                ERP-EINFÜHRUNGSPHASEN                           │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  1. Analyse        2. Auswahl       3. Konzeption             │
│  ┌──────────┐     ┌──────────┐     ┌──────────┐              │
│  │Ist-Prozesse│    │Anbieter  │     │Soll-      │              │
│  │aufnehmen  │ ─► │vergleichen│ ─► │Prozesse   │              │
│  └──────────┘     └──────────┘     └──────────┘              │
│                                           │                    │
│  6. Go-Live        5. Test         4. Implementierung         │
│  ┌──────────┐     ┌──────────┐     ┌──────────┐              │
│  │Produktiv- │     │Integra-  │     │Customizing│             │
│  │betrieb    │ ◄─ │tionstests│ ◄─ │Datenmigra.│              │
│  └──────────┘     └──────────┘     └──────────┘              │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Cloud-ERP vs. On-Premise

| Aspekt | Cloud-ERP | On-Premise |
|--------|-----------|------------|
| **Betrieb** | Beim Anbieter | Eigenes Rechenzentrum |
| **Kosten** | Monatliche Gebühren | Hohe Anfangsinvestition |
| **Wartung** | Vom Anbieter | Eigene IT |
| **Flexibilität** | Skalierbar | Begrenzt |
| **Datenkontrolle** | Bei Anbieter | Eigene Kontrolle |
| **Updates** | Automatisch | Selbst durchführen |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **ERP** | Enterprise Resource Planning |
| **Modul** | Funktionsbereich im ERP (FI, HR, etc.) |
| **Integration** | Verknüpfung aller Unternehmensbereiche |
| **Customizing** | Anpassung an Unternehmensbedürfnisse |
| **Go-Live** | Produktivstart des Systems |
| **Cloud-ERP** | ERP als Software-as-a-Service |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was ist ERP?
- Nennen Sie typische ERP-Module
- Was sind Vorteile eines ERP-Systems?
- Nennen Sie ERP-Anbieter

### Wichtig zu merken

- **ERP** = integrierte Software für alle Geschäftsprozesse
- **Zentrale Datenbank** = eine Wahrheit für alle
- **Module:** FI (Finanzen), HR (Personal), MM (Material), SD (Vertrieb)
- **SAP** = Marktführer für Großenterprise

---

## Übungsaufgaben

### Aufgabe 1
Was ist ein ERP-System und was ist der Hauptvorteil gegenüber Einzellösungen?

**Lösung:** Ein **ERP-System (Enterprise Resource Planning)** ist eine integrierte Softwarelösung, die alle Geschäftsprozesse eines Unternehmens in einem System zusammenführt.

**Hauptvorteil gegenüber Einzellösungen:** Alle Module arbeiten mit einer **zentralen Datenbank**. Dadurch:
- Daten müssen nur einmal eingegeben werden
- Alle Abteilungen haben die gleichen, aktuellen Informationen
- Keine manuellen Schnittstellen zwischen Systemen nötig

### Aufgabe 2
Nennen Sie vier typische Module eines ERP-Systems.

**Lösung:**
1. **Finanzbuchhaltung (FI):** Bilanz, GuV, Kontenführung
2. **Materialwirtschaft (MM):** Einkauf, Lagerverwaltung
3. **Vertrieb (SD):** Angebote, Aufträge, Rechnungen
4. **Personalwesen (HR):** Lohnabrechnung, Zeiterfassung

(Weitere: Controlling, Produktion, Qualitätsmanagement)

### Aufgabe 3
Was ist der Unterschied zwischen Cloud-ERP und On-Premise-ERP?

**Lösung:**
| Aspekt | Cloud-ERP | On-Premise |
|--------|-----------|------------|
| **Betriebsort** | Beim Anbieter | Im eigenen Rechenzentrum |
| **Kosten** | Monatliche Gebühren | Hohe Anfangsinvestition |
| **Wartung** | Anbieter übernimmt | Eigene IT-Abteilung |
| **Datenkontrolle** | Daten beim Anbieter | Daten im eigenen Haus |

---

## Querverweise

- [05-08-02 CRM und SCM](./05-08-02-crm-scm.md) - Ergänzende Systeme
- [05-04-02 Cloud Computing](../05-04-virtualization-cloud/05-04-02-cloud-computing.md) - Cloud-ERP
- [08-02-01 Kosten und Kostenarten](../../08-business-processes/08-02-economics/08-02-01-costs-cost-types.md) - Kostenrechnung
