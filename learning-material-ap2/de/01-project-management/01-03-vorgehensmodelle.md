# Softwareentwicklungsmodelle (Vorgehensmodelle)

## Lernziele

Nach diesem Kapitel solltest du:
- Konventionelle (sequenzielle) und agile Vorgehensweisen unterscheiden
- Die wichtigsten Modelle einordnen und ihre Vor-/Nachteile nennen
- Passende Modelle zu Projektsituationen auswählen

---

## Kerninhalt

### Zwei Grundkategorien

| Konventionell (sequenziell) | Agil (flexibel) |
|-----------------------------|-----------------|
| Phasen laufen nacheinander ab, Anforderungen früh fixiert | iterativ-inkrementell, Anforderungen entwickeln sich |
| Wasserfallmodell, V-Modell, Spiralmodell | Scrum, Kanban, Extreme Programming (XP), Testgetriebene Entwicklung (TDD) |

Weitere Einordnung: Modelle können eher eine **Entwicklungsmethode** (konkretes Vorgehen) oder eine **Entwicklungsphilosophie** (Grundhaltung, z. B. „agil“) sein. Beispiele: **RUP** (Rational Unified Process), **AUP** (Agile Unified Process), **MDSD** (Modellgetriebene SW-Entwicklung), **CMM/CMMI** (Reifegradmodell).

### Die wichtigsten Modelle

- **Wasserfallmodell:** strikt sequenziell (Analyse → Entwurf → Implementierung → Test → Betrieb). Einfach, aber unflexibel bei späten Änderungen.
- **V-Modell:** wie Wasserfall, aber jeder Entwicklungsphase steht eine **Teststufe** gegenüber (z. B. Modultest ↔ Feinentwurf). Betont Qualitätssicherung.
- **Spiralmodell:** iterativ mit **Risikoanalyse** pro Zyklus. Gut für große, risikoreiche Projekte.
- **Prototyping:** frühe lauffähige Prototypen zur Anforderungsklärung.
- **Scrum:** agiles Rahmenwerk mit Sprints (siehe [01-05](./01-05-scrum-kanban.md)).
- **Extreme Programming (XP):** agile Praktiken wie Pair Programming, TDD, Continuous Integration.
- **Testgetriebene Entwicklung (TDD):** erst Test schreiben, dann Code.
- **Kanban:** Flusssteuerung mit WIP-Limits (siehe [01-05](./01-05-scrum-kanban.md)).

### Auswahlkriterien

| Situation | eher geeignet |
|-----------|---------------|
| Anforderungen klar & stabil, Fixpreis | konventionell (Wasserfall/V-Modell) |
| Anforderungen unklar/veränderlich | agil (Scrum, XP) |
| Hohes Risiko, große Projekte | Spiralmodell |
| Kontinuierlicher Betrieb/Support | Kanban |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Sequenziell** | Phasen laufen nacheinander, Anforderungen früh festgelegt |
| **Iterativ-inkrementell** | Wiederholte Zyklen, schrittweiser Ausbau |
| **V-Modell** | Sequenziell mit gegenübergestellten Teststufen |
| **Reifegradmodell (CMMI)** | Bewertung der Prozessreife einer Organisation |

---

## Prüfungstipps

- **Zuordnungsaufgabe** ist typisch: Modelle in *konventionell* vs. *agil* einsortieren (Wasserfall/V-Modell/Spiral = konventionell; Scrum/Kanban/XP/TDD = agil).
- V-Modell = **Test-Gegenüberstellung** (Merkmal!), Spiralmodell = **Risiko pro Zyklus**.
- Zu jedem Modell **einen Vor- und einen Nachteil** nennen können.

---

## Übungsaufgabe

**Aufgabe (nach ConSystem GmbH):** Sortiere ein – *Extreme Programming, Wasserfallmodell, V-Modell, Prototyping, RUP, Scrum, Spiralmodell, AUP, TDD, Kanban, MDSD, CMM* – in konventionell vs. agil.

<details>
<summary>Lösung</summary>

- **Konventionell/sequenziell:** Wasserfallmodell, V-Modell, Spiralmodell (klassisch)
- **Agil:** Scrum, Kanban, XP, TDD, AUP
- **Übergreifend/Methodik:** Prototyping, RUP, MDSD, CMM (Reifegradmodell)

</details>

---

## Querverweise

- [01-05 SCRUM und KANBAN](./01-05-scrum-kanban.md)
- [02 Qualitätsmanagement](../02-quality-management/02-00-overview.md)
