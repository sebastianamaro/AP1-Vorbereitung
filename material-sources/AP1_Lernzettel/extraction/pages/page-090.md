# Page 90 - ERD Chen-Notation Beispiel

## ERD Beispiel: Lehrgangs-System

Das Beispiel zeigt ein Entity-Relationship-Diagramm für ein Lehrgangs-System:

### Entitäten und Attribute:

**Teilnehmer:**
- tnr (Primärschlüssel, unterstrichen)
- vorname
- nachname
- strasse
- plz
- hausnr
- ortsname

**Lehrgang:**
- lnr (Primärschlüssel, unterstrichen)
- beginn
- ende

**Inhalt:**
- inr (Primärschlüssel, unterstrichen)
- titel
- dauer
- preis
- kategorie

**Ausbilder:**
- aunr (Primärschlüssel, unterstrichen)
- vorname
- nachname

### Beziehungen:

- **Teilnehmer** ──(m)── nimmt teil ──(n)── **Lehrgang** (m:n Beziehung)
- **Lehrgang** ──(n)── wird durchgeführt ──(1)── **Ausbilder** (n:1 Beziehung)
- **Lehrgang** ──(n)── enthält ──(1)── **Inhalt** (n:1 Beziehung)

