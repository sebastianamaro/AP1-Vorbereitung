# Softwaretests

## Lernziele

Nach diesem Kapitel solltest du:
- Verschiedene Testarten kennen und unterscheiden können
- Die Teststufen im SDLC verstehen
- Black-Box- und White-Box-Tests erklären können
- Testfälle erstellen können

---

## Kerninhalt

### Warum testen?

```
┌────────────────────────────────────────────────────────────────────┐
│                     ZIELE DES TESTENS                              │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │                    QUALITÄTSSICHERUNG                        │ │
│   │                                                              │ │
│   │   • Fehler finden, BEVOR der Kunde sie findet               │ │
│   │   • Anforderungen überprüfen                                │ │
│   │   • Zuverlässigkeit gewährleisten                           │ │
│   │   • Vertrauen in die Software aufbauen                      │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   Grundsatz:                                                       │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │  "Testing kann Fehler aufdecken, aber niemals deren         │ │
│   │   vollständige Abwesenheit beweisen."                       │ │
│   │                                                              │ │
│   │  → 100% Fehlerfreiheit ist NICHT beweisbar!                │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   Je früher ein Fehler gefunden wird, desto günstiger ist die     │
│   Behebung:                                                        │
│                                                                     │
│   Kosten ↑                                                         │
│          │     ╭──────────────────╮                               │
│          │    ╱                    ╲                              │
│          │   ╱                      ╲                             │
│          │  ╱   Fehlerkosten         ╲                            │
│          │ ╱    steigen exponentiell  ╲                           │
│          │╱                            ╲                          │
│          └──────────────────────────────→ Phase                   │
│            Analyse  Entwurf  Code  Test  Produktion               │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Teststufen (V-Modell)

```
┌────────────────────────────────────────────────────────────────────┐
│                      TESTSTUFEN (V-MODELL)                         │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Anforderungs-   ─────────────────────────────  Abnahmetest       │
│   analyse         ╲                           ╱   (Akzeptanztest)  │
│                    ╲                         ╱                     │
│   Grobentwurf      ─╲───────────────────────╱─   Systemtest        │
│                      ╲                     ╱                       │
│   Feinentwurf        ─╲─────────────────╱─       Integrations-    │
│                        ╲               ╱           test            │
│   Implementierung      ─╲─────────────╱─          Modultest        │
│                          ╲           ╱            (Unit Test)      │
│                           ╲    ↓    ╱                              │
│                            ╲  CODE ╱                               │
│                             ╲────╱                                 │
│                                                                     │
│   Links: Entwicklungsphasen                                        │
│   Rechts: Zugehörige Teststufen                                    │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Die vier Teststufen

```
┌────────────────────────────────────────────────────────────────────┐
│                        TESTSTUFEN                                  │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   1. MODULTEST (Unit Test)                                         │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Testet einzelne Komponenten/Funktionen                   │  │
│   │ • Durchgeführt vom Entwickler                              │  │
│   │ • Kleinste testbare Einheit                                │  │
│   │                                                             │  │
│   │ Beispiel: Funktion "berechneRabatt()" testen              │  │
│   │                                                             │  │
│   │   ┌─────────┐                                              │  │
│   │   │Funktion │ → Test mit verschiedenen Eingaben           │  │
│   │   └─────────┘                                              │  │
│   └────────────────────────────────────────────────────────────┘  │
│                              ↓                                     │
│   2. INTEGRATIONSTEST                                             │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Testet Zusammenspiel mehrerer Module                     │  │
│   │ • Schnittstellen zwischen Komponenten                      │  │
│   │ • Datenfluss prüfen                                        │  │
│   │                                                             │  │
│   │ Beispiel: Bestellung → Lager → Versand testen             │  │
│   │                                                             │  │
│   │   ┌─────────┐     ┌─────────┐     ┌─────────┐             │  │
│   │   │ Modul A │ ──→ │ Modul B │ ──→ │ Modul C │             │  │
│   │   └─────────┘     └─────────┘     └─────────┘             │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

```
┌────────────────────────────────────────────────────────────────────┐
│                  TESTSTUFEN (Fortsetzung)                          │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   3. SYSTEMTEST                                                    │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Testet das Gesamtsystem                                  │  │
│   │ • Alle Komponenten zusammen                                │  │
│   │ • Gegen Anforderungen aus dem Pflichtenheft               │  │
│   │ • In produktionsnaher Umgebung                            │  │
│   │                                                             │  │
│   │ Beispiel: Komplette Webshop-Anwendung testen              │  │
│   │                                                             │  │
│   │   ┌─────────────────────────────────────────┐              │  │
│   │   │        GESAMTSYSTEM                      │              │  │
│   │   │  ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐   │              │  │
│   │   │  │ DB  │  │ Web │  │ API │  │ UI  │   │              │  │
│   │   │  └─────┘  └─────┘  └─────┘  └─────┘   │              │  │
│   │   └─────────────────────────────────────────┘              │  │
│   └────────────────────────────────────────────────────────────┘  │
│                              ↓                                     │
│   4. ABNAHMETEST (Akzeptanztest)                                  │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Durchgeführt vom Auftraggeber/Kunden                     │  │
│   │ • Prüft gegen das Lastenheft                               │  │
│   │ • Entscheidung über Akzeptanz der Software                │  │
│   │ • Bei Erfolg: Freigabe für Produktivbetrieb               │  │
│   │                                                             │  │
│   │ Beispiel: Kunde testet alle geforderten Funktionen        │  │
│   │                                                             │  │
│   │   ┌─────────┐            ┌─────────┐                       │  │
│   │   │ Kunde   │  prüft →  │ System  │  → Abnahme?           │  │
│   │   └─────────┘            └─────────┘     ✓ / ✗            │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Testmethoden: Black-Box vs. White-Box

```
┌────────────────────────────────────────────────────────────────────┐
│                      TESTMETHODEN                                  │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   BLACK-BOX-TEST                        WHITE-BOX-TEST             │
│   (funktionaler Test)                   (struktureller Test)       │
│                                                                     │
│   ┌───────────────────────┐            ┌───────────────────────┐  │
│   │    ┌───────────┐      │            │    ┌───────────┐      │  │
│   │    │ ? ? ? ? ? │      │            │    │ if (x>0)  │      │  │
│   │ ──→│ ? BLACK ? │──→   │            │ ──→│   return  │──→   │  │
│   │    │ ? BOX ? ? │      │            │    │ else...   │      │  │
│   │    └───────────┘      │            │    └───────────┘      │  │
│   │                       │            │                       │  │
│   │ Interne Struktur      │            │ Interne Struktur      │  │
│   │ ist UNBEKANNT         │            │ ist BEKANNT           │  │
│   └───────────────────────┘            └───────────────────────┘  │
│                                                                     │
│   • Nur Ein-/Ausgabe        │           • Code ist sichtbar       │
│   • Ohne Codekenntnisse     │           • Mit Codekenntnissen     │
│   • Spezifikationsbasiert   │           • Implementierungsbasiert │
│   • Tester ≠ Entwickler     │           • Tester = Entwickler     │
│                                                                     │
│   Techniken:                            Techniken:                 │
│   • Äquivalenzklassen                  • Anweisungsüberdeckung    │
│   • Grenzwertanalyse                   • Zweigüberdeckung         │
│   • Entscheidungstabellen              • Pfadüberdeckung          │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Black-Box-Techniken

```
┌────────────────────────────────────────────────────────────────────┐
│                    BLACK-BOX-TECHNIKEN                             │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   ÄQUIVALENZKLASSENBILDUNG                                        │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Eingaben in Klassen mit gleichem Verhalten einteilen       │  │
│   │                                                             │  │
│   │ Beispiel: Alter (gültig: 0-120)                            │  │
│   │                                                             │  │
│   │   ungültig     │    gültig      │   ungültig               │  │
│   │   ────────────│───────────────│────────────                │  │
│   │     < 0        │    0 - 120    │    > 120                   │  │
│   │                                                             │  │
│   │ Pro Klasse EIN Testfall reicht (repräsentativ)             │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   GRENZWERTANALYSE                                                │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Fehler treten häufig an Grenzen auf!                       │  │
│   │                                                             │  │
│   │ Beispiel: Alter (gültig: 0-120)                            │  │
│   │                                                             │  │
│   │          -1   0   1           119  120  121                │  │
│   │           │   │   │            │    │    │                 │  │
│   │           ↓   ↓   ↓            ↓    ↓    ↓                 │  │
│   │          ──┼───┼───┼──────────┼────┼────┼──                │  │
│   │             ↑       ↑          ↑         ↑                 │  │
│   │           Grenze  Grenze    Grenze    Grenze               │  │
│   │                                                             │  │
│   │ Teste: -1, 0, 1, 119, 120, 121                             │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Testarten nach Zielsetzung

```
┌────────────────────────────────────────────────────────────────────┐
│                   TESTARTEN NACH ZIEL                              │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   FUNKTIONALE TESTS                                                │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Funktionalität entspricht Spezifikation                  │  │
│   │ • Was soll die Software tun?                               │  │
│   │ • Beispiel: Login mit korrekten Daten funktioniert        │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   NICHT-FUNKTIONALE TESTS                                         │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Performance-Test  │ Antwortzeiten, Durchsatz              │  │
│   │ Last-Test         │ Verhalten unter hoher Last            │  │
│   │ Stress-Test       │ Verhalten bei Überlastung             │  │
│   │ Usability-Test    │ Benutzerfreundlichkeit                │  │
│   │ Security-Test     │ Sicherheitslücken                     │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   REGRESSIONSTEST                                                 │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Nach Änderungen/Bugfixes                                 │  │
│   │ • Prüft, ob alte Funktionen noch funktionieren            │  │
│   │ • Verhindert neue Fehler durch Änderungen                  │  │
│   │ • Beispiel: Nach Update funktioniert Login noch?          │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Testfall-Dokumentation

```
┌────────────────────────────────────────────────────────────────────┐
│                      TESTFALL-AUFBAU                               │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ Testfall-ID:       TC-001                                   │ │
│   │ Beschreibung:      Login mit gültigen Daten                 │ │
│   │ Vorbedingung:      Benutzer existiert in Datenbank          │ │
│   │ Eingabe:           user="test", passwort="geheim123"        │ │
│   │ Erwartetes Ergebnis: Weiterleitung auf Dashboard           │ │
│   │ Tatsächliches Ergebnis: [wird beim Test eingetragen]       │ │
│   │ Status:            [ ] Bestanden  [ ] Fehlgeschlagen       │ │
│   │ Bemerkung:         [optionale Notizen]                      │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   Wichtige Elemente:                                               │
│   • Eindeutige ID                                                  │
│   • Klare Beschreibung                                             │
│   • Definierte Vorbedingungen                                      │
│   • Konkrete Testdaten                                             │
│   • Erwartetes Ergebnis (VOR dem Test festlegen!)                 │
│   • Nachvollziehbares Ergebnis                                     │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Unit Test** | Test einzelner Funktionen/Module |
| **Integrationstest** | Test des Zusammenspiels von Modulen |
| **Systemtest** | Test des Gesamtsystems |
| **Abnahmetest** | Kundentest vor Produktivgang |
| **Black-Box-Test** | Test ohne Kenntnis des Codes |
| **White-Box-Test** | Test mit Kenntnis des Codes |
| **Regressionstest** | Test nach Änderungen |
| **Testfall** | Definierte Testbedingung mit Ergebnis |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Unterscheiden Sie die Teststufen
- Was ist der Unterschied zwischen Black-Box und White-Box?
- Erstellen Sie Testfälle für ein gegebenes Szenario

### Wichtig zu merken

- **Teststufen:** Unit → Integration → System → Abnahme
- **Black-Box:** Tester sieht Code NICHT (Ein/Ausgabe)
- **White-Box:** Tester sieht Code (Struktur)
- **Regressionstest:** Nach jeder Änderung!
- **Grenzwerte** sind fehleranfällig → immer testen!
- Abnahmetest = Kunde prüft gegen **Lastenheft**
- Systemtest = Team prüft gegen **Pflichtenheft**

---

## Übungsaufgaben

### Aufgabe 1
Eine Funktion akzeptiert Werte von 1 bis 100. Welche Testfälle würden Sie bei der Grenzwertanalyse erstellen?

**Lösung:**
Testfälle für Grenzwertanalyse:
- **0** (ungültig, unter Grenze)
- **1** (gültig, untere Grenze)
- **2** (gültig, knapp über unterer Grenze)
- **99** (gültig, knapp unter oberer Grenze)
- **100** (gültig, obere Grenze)
- **101** (ungültig, über Grenze)

### Aufgabe 2
Wer führt typischerweise den Abnahmetest durch?

**Lösung:**
Der **Auftraggeber/Kunde** führt den Abnahmetest durch. Er prüft, ob die Software seinen Anforderungen aus dem Lastenheft entspricht und entscheidet über die Abnahme.

### Aufgabe 3
Ordnen Sie zu: Welche Teststufe prüft gegen welches Dokument?
- a) Abnahmetest
- b) Systemtest

**Lösung:**
- a) Abnahmetest → **Lastenheft** (Kundenanforderungen)
- b) Systemtest → **Pflichtenheft** (technische Spezifikation)

---

## Querverweise

- [06-06-01 SDLC](./06-06-01-sdlc.md) - Testphase im Entwicklungszyklus
- [06-06-03 Debugging](./06-06-03-debugging.md) - Fehlersuche
- [06-02-06 Schreibtischtest](../06-02-programming/06-02-06-desk-check.md) - Manuelle Code-Prüfung
- [02-04 Softwarequalität](../../02-quality-management/02-04-software-quality.md) - Qualitätssicherung
