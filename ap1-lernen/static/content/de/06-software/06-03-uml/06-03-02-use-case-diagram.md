# UML Use-Case-Diagramm

## Lernziele

Nach diesem Kapitel solltest du:
- Use-Case-Diagramme lesen und verstehen können
- Akteure und Anwendungsfälle identifizieren können
- Beziehungen im Use-Case-Diagramm kennen
- Einfache Use-Case-Diagramme erstellen können

---

## Kerninhalt

### Was ist ein Use-Case-Diagramm?

Ein **Use-Case-Diagramm** (Anwendungsfalldiagramm) zeigt, welche Funktionen ein System bietet und wer diese nutzt.

```
┌─────────────────────────────────────────────────────────────────┐
│                  USE-CASE-DIAGRAMM                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Zweck:                                                       │
│   • Anforderungen aus Benutzersicht darstellen                 │
│   • WAS das System können soll (nicht WIE)                     │
│   • Kommunikation zwischen Entwicklern und Kunden              │
│   • Überblick über Systemfunktionen                            │
│                                                                 │
│   Zeigt:                                                       │
│   • Akteure (wer nutzt das System?)                           │
│   • Anwendungsfälle (was kann das System?)                    │
│   • Beziehungen zwischen Akteuren und Use Cases               │
│   • Systemgrenzen                                              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Elemente eines Use-Case-Diagramms

```
┌────────────────────────────────────────────────────────────────┐
│                 ELEMENTE IM USE-CASE-DIAGRAMM                  │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   1. AKTEUR (Actor)                                           │
│      Strichmännchen mit Namen                                  │
│                                                                │
│         O                                                      │
│        /|\     ← Akteur (Person oder externes System)         │
│        / \                                                     │
│       Kunde                                                    │
│                                                                │
│   2. ANWENDUNGSFALL (Use Case)                                │
│      Ellipse mit Beschreibung                                  │
│                                                                │
│      ┌─────────────────────┐                                  │
│      │  (  Produkt        )│  ← Use Case                     │
│      │  (  bestellen      )│     (Verb + Objekt)             │
│      └─────────────────────┘                                  │
│                                                                │
│   3. SYSTEMGRENZE                                             │
│      Rechteck um die Use Cases                                │
│                                                                │
│      ┌─────────────────────┐                                  │
│      │     Online-Shop     │  ← Systemname                   │
│      │                     │                                  │
│      │  (Anwendungsfälle)  │                                  │
│      │                     │                                  │
│      └─────────────────────┘                                  │
│                                                                │
│   4. ASSOZIATION                                              │
│      Linie zwischen Akteur und Use Case                       │
│                                                                │
│         O                                                      │
│        /|\────────(Use Case)                                  │
│        / \                                                     │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Akteure

**Akteure** sind externe Entitäten, die mit dem System interagieren.

```
┌────────────────────────────────────────────────────────────────┐
│                        AKTEURE                                 │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Arten von Akteuren:                                         │
│                                                                │
│   PERSONEN                      SYSTEME                       │
│      O                          ┌─────────┐                   │
│     /|\                         │ <<System>> │                │
│     / \                         │  Bezahl-   │                │
│   Kunde                         │  system    │                │
│   Mitarbeiter                   └─────────┘                   │
│   Administrator                 E-Mail-Server                 │
│                                 Datenbank                      │
│                                                                │
│   Ein Akteur kann auch ein:                                   │
│   • Zeitgesteuerter Prozess sein ("Timer")                   │
│   • Hardware-Gerät sein (Barcode-Scanner)                    │
│   • Externes System sein (Bank, Zahlungsdienstleister)       │
│                                                                │
│   Frage: "Wer oder was interagiert mit dem System?"          │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Anwendungsfälle (Use Cases)

```
┌────────────────────────────────────────────────────────────────┐
│                    ANWENDUNGSFÄLLE                             │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Benennung:                                                  │
│   • Verb + Objekt                                            │
│   • Aus Sicht des Akteurs formuliert                         │
│   • Beschreibt ein abgeschlossenes Ziel                      │
│                                                                │
│   Gute Use-Case-Namen:          Schlechte Namen:             │
│   ✓ Produkt bestellen           ✗ Bestellung                 │
│   ✓ Rechnung erstellen          ✗ Rechnung                   │
│   ✓ Passwort ändern             ✗ Passwort                   │
│   ✓ Bericht generieren          ✗ Berichtswesen              │
│                                                                │
│   Beispiele für typische Use Cases:                          │
│   ┌─────────────────────┐                                    │
│   │  ( Anmelden       ) │                                    │
│   │  ( Abmelden       ) │                                    │
│   │  ( Suchen         ) │                                    │
│   │  ( Bestellen      ) │                                    │
│   │  ( Bezahlen       ) │                                    │
│   │  ( Stornieren     ) │                                    │
│   └─────────────────────┘                                    │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Beziehungen im Use-Case-Diagramm

```
┌────────────────────────────────────────────────────────────────┐
│                     BEZIEHUNGSARTEN                            │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   1. ASSOZIATION (Akteur ↔ Use Case)                         │
│      Einfache Linie = Akteur nutzt den Use Case              │
│                                                                │
│         O                                                      │
│        /|\────────( Produkt suchen )                          │
│        / \                                                     │
│                                                                │
│   2. INCLUDE (<<include>>)                                   │
│      Der Basis-Use-Case ENTHÄLT immer den anderen            │
│      Gestrichelter Pfeil mit <<include>>                     │
│                                                                │
│      ( Bestellen )─ ─ ─<<include>>─ ─ ─►( Bezahlen )         │
│                                                                │
│      "Bestellen enthält immer Bezahlen"                      │
│                                                                │
│   3. EXTEND (<<extend>>)                                     │
│      Optional: Der erweiterte Use Case KANN hinzukommen      │
│      Gestrichelter Pfeil mit <<extend>>                      │
│                                                                │
│      ( Gutschein einlösen )─ ─<<extend>>─ ─►( Bestellen )    │
│                                                                │
│      "Gutschein einlösen erweitert optional Bestellen"       │
│                                                                │
│   4. GENERALISIERUNG (Akteure)                               │
│      Ein spezieller Akteur erbt von einem allgemeinen        │
│                                                                │
│         O  Benutzer                                          │
│        /|\     ▲                                              │
│        / \     │                                              │
│                │                                              │
│         O──────┘                                              │
│        /|\  Administrator                                     │
│        / \                                                    │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Include vs. Extend

| Aspekt | <<include>> | <<extend>> |
|--------|-------------|------------|
| **Bedeutung** | Wird IMMER ausgeführt | Wird OPTIONAL ausgeführt |
| **Pfeilrichtung** | Von Basis zu enthalten | Von Erweiterung zu Basis |
| **Beispiel** | Bestellen enthält Bezahlen | Express-Versand erweitert Bestellen |
| **Merkhilfe** | "Enthält immer" | "Kann erweitern" |

---

### Beispiel: Online-Shop

```
┌────────────────────────────────────────────────────────────────┐
│                 BEISPIEL: ONLINE-SHOP                          │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   ┌──────────────────────────────────────────────────────┐   │
│   │                     Online-Shop                        │   │
│   │                                                        │   │
│   │                    ( Produkt suchen )                  │   │
│   │                           │                            │   │
│   │                           │                            │   │
│  O                  ( Warenkorb verwalten )                │   │
│ /|\─────────────────────────│                              │   │
│ / \                         │                              │   │
│Kunde                 ( Bestellung aufgeben )               │   │
│   │                         │                              │   │
│   │                         │<<include>>                   │   │
│   │                         ▼                              │   │
│   │            ─ ─ ─►( Bezahlung durchführen )             │   │
│   │           │                     │                      │   │
│   │           │                     │<<include>>           │   │
│   │           │                     ▼                      │   │
│   │           │        ( Bestellung bestätigen )           │   │
│   │           │                                            │   │
│   │        <<extend>>                                      │   │
│   │           │                                            │   │
│   └───────────┴──( Gutschein einlösen )                    │   │
│                                                            │   │
│                                                        O   │   │
│                    ( Bestellung stornieren )──────────/|\ │   │
│                                                       / \  │   │
│                                                    Admin   │   │
│                    ( Lagerbestand verwalten )─────────│    │   │
│                                                        │   │
│                    ( Bericht erstellen )───────────────┘   │   │
│   └────────────────────────────────────────────────────────┘   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Einfaches Beispiel: Geldautomat

```
┌────────────────────────────────────────────────────────────────┐
│                BEISPIEL: GELDAUTOMAT                           │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   ┌─────────────────────────────────────────────────────┐    │
│   │                    Geldautomat                       │    │
│   │                                                      │    │
│   │                ( Karte einführen )                   │    │
│   │                        │                             │    │
│   │                        │<<include>>                  │    │
│   │                        ▼                             │    │
│   │               ( PIN eingeben )                       │    │
│   │                        │                             │    │
│  O │                       │                             │    │
│ /|\──────────────( Geld abheben )                        │    │
│ / \│                       │                             │    │
│Kunde                       │<<include>>                  │    │
│    │                       ▼                             │    │
│    │              ( Karte ausgeben )                     │    │
│    │                                                     │    │
│    │                                                     │    │
│    └─────────────( Kontostand abfragen )                 │    │
│                                                          │    │
│                  ( Überweisung tätigen )─────────────────│    │
│                                                          │    │
│   └─────────────────────────────────────────────────────┘    │
│                                                       │      │
│                                                   ┌───┴───┐  │
│                                                   │<<System>>│
│                                                   │ Bank-  │  │
│                                                   │ server │  │
│                                                   └───────┘  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Tipps zur Erstellung

```
┌────────────────────────────────────────────────────────────────┐
│                  TIPPS ZUR ERSTELLUNG                          │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   DO:                                                         │
│   ✓ Akteure außerhalb der Systemgrenze platzieren            │
│   ✓ Use Cases als "Verb + Objekt" benennen                   │
│   ✓ Aus Benutzersicht denken (WAS, nicht WIE)                │
│   ✓ Systemgrenze mit Namen beschriften                        │
│   ✓ Include für obligatorische Abläufe verwenden             │
│   ✓ Extend für optionale Erweiterungen verwenden             │
│                                                                │
│   DON'T:                                                      │
│   ✗ Zu viele Details (kein Ablaufdiagramm!)                  │
│   ✗ Technische Implementierungsdetails                       │
│   ✗ Use Cases nur als Substantive benennen                   │
│   ✗ Akteure innerhalb der Systemgrenze                       │
│   ✗ Mehr als 15-20 Use Cases (zu komplex)                    │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Use Case** | Anwendungsfall, Systemfunktion |
| **Akteur** | Person oder System, das mit dem System interagiert |
| **Systemgrenze** | Abgrenzung des betrachteten Systems |
| **Include** | Enthält-Beziehung (immer) |
| **Extend** | Erweitert-Beziehung (optional) |
| **Assoziation** | Verbindung zwischen Akteur und Use Case |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Welche Akteure und Use Cases enthält das Diagramm?
- Was bedeutet <<include>> und <<extend>>?
- Erstellen Sie ein Use-Case-Diagramm für ein gegebenes Szenario

### Wichtig zu merken

- **Akteur** = außerhalb der Systemgrenze
- **Use Case** = "Verb + Objekt" (z.B. "Produkt bestellen")
- **<<include>>** = IMMER enthalten
- **<<extend>>** = OPTIONAL, erweitert
- Use-Case-Diagramm zeigt WAS, nicht WIE

---

## Übungsaufgaben

### Aufgabe 1
Was ist der Unterschied zwischen <<include>> und <<extend>>?

**Lösung:**
- **<<include>>:** Der eingeschlossene Use Case wird IMMER ausgeführt. Beispiel: "Bestellen" enthält immer "Bezahlen".
- **<<extend>>:** Der erweiternde Use Case wird OPTIONAL ausgeführt. Beispiel: "Express-Versand" kann "Bestellen" erweitern, muss aber nicht.

### Aufgabe 2
Identifizieren Sie für ein Bibliothekssystem mindestens drei Akteure und vier Use Cases.

**Lösung:**
**Akteure:**
1. Bibliotheksbenutzer
2. Bibliothekar
3. Administrator

**Use Cases:**
1. Buch ausleihen
2. Buch zurückgeben
3. Buch suchen
4. Benutzerkonto anlegen
5. Mahnung versenden
6. Bestand verwalten

### Aufgabe 3
Gegeben ist folgendes Szenario. Zeichnen Sie ein Use-Case-Diagramm.

"Ein Ticketsystem erlaubt es Kunden, Tickets zu erstellen und den Status zu verfolgen. Support-Mitarbeiter können Tickets bearbeiten und schließen. Administratoren können zusätzlich Benutzer verwalten."

**Lösung:**
```
┌─────────────────────────────────────────────────┐
│                Ticketsystem                      │
│                                                  │
│           ( Ticket erstellen )────────O Kunde   │
│                    │                 /|\         │
│           ( Ticket verfolgen )──────/ \         │
│                                                  │
│           ( Ticket bearbeiten )                 │
│                    │               O            │
│           ( Ticket schließen )────/|\Support   │
│                                   / \           │
│                                                  │
│           ( Benutzer verwalten )──O Admin      │
│                                  /|\            │
│                                  / \            │
└─────────────────────────────────────────────────┘
```

---

## Querverweise

- [06-03-01 Klassendiagramm](./06-03-01-class-diagram.md) - Strukturdiagramm
- [06-03-03 Aktivitätsdiagramm](./06-03-03-activity-diagram.md) - Ablaufdarstellung
- [01-04-01 Lastenheft und Pflichtenheft](../../01-project-management/01-04-documentation/01-04-01-requirements-specification.md) - Anforderungen
