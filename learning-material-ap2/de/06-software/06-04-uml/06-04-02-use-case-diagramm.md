# Use-Case-Diagramm (Anwendungsfalldiagramm)

## Lernziele

Nach diesem Kapitel solltest du:
- Zweck und Einsatz des Use-Case-Diagramms in der Anforderungsanalyse kennen
- Die Notationselemente (Akteur, Anwendungsfall, Systemgrenze, Beziehungen) sicher anwenden
- Die Beziehungen **Assoziation**, **`<<include>>`**, **`<<extend>>`** und **Generalisierung (Vererbung)** unterscheiden
- Ein unvollständiges Use-Case-Diagramm in der Prüfung korrekt ergänzen können

---

## Kerninhalt

### Wozu dient das Use-Case-Diagramm?

Das **Use-Case-Diagramm** (deutsch: Anwendungsfalldiagramm) gehört zu den **Verhaltensdiagrammen** der UML. Es zeigt aus **Nutzersicht**, *was* ein System leisten soll – nicht *wie*. Es ist das zentrale Werkzeug der **Anforderungsanalyse** (GA1) und der erste Schritt, bevor Struktur- oder Ablaufdiagramme erstellt werden.

### Notationselemente

| Element | Darstellung | Bedeutung |
|---------|-------------|-----------|
| **Akteur** | Strichmännchen | Rolle außerhalb des Systems (Person, anderes System), die mit dem System interagiert |
| **Anwendungsfall** | Ellipse | Eine abgeschlossene, für den Akteur nützliche Funktion |
| **Systemgrenze** | Rechteck um die Anwendungsfälle | Trennt System (innen) von Umwelt (außen) |
| **Assoziation** | durchgezogene Linie | Akteur nimmt an einem Anwendungsfall teil |

### Die Beziehungen (prüfungsrelevant!)

```
                 ┌─────────────── System: Kundenberatung ───────────────┐
                 │                                                       │
                 │      ( Kunde beraten ) ····<<include>>····> ( Kunden- │
   ┌──────┐      │            △                                 daten    │
   │Person│      │            │ Vererbung                       laden )  │
   └──┬───┘      │      ( Beratung dokumentieren )                       │
      │          │            ┆ <<extend>> (Bedingung:                   │
  ┌───┴───┐      │            ┆  „nur bei Neukunde")                     │
  │ Kunde │──────┼──── ( Kunde beraten )                                 │
  └───────┘      │                                                       │
 ┌─────────────┐ │                                                       │
 │Mitarbeiter/-│─┼──── ( Kunde beraten )                                 │
 │     in      │ │                                                       │
 └─────────────┘ └───────────────────────────────────────────────────┘
```

- **Assoziation** (Linie): Akteur ↔ Anwendungsfall. *„Der Mitarbeiter berät den Kunden."*
- **`<<include>>`** (gestrichelter Pfeil, Pfeil zeigt auf den eingebundenen Fall): der Basis-Anwendungsfall **nutzt immer** einen anderen. *„Kunde beraten" schließt „Kundendaten laden" stets ein.* Wiederverwendung von Pflichtschritten.
- **`<<extend>>`** (gestrichelter Pfeil, Pfeil zeigt auf den Basisfall): ein Anwendungsfall **erweitert optional** einen anderen – nur unter einer **Bedingung**. *„Willkommensrabatt gewähren" extend „Kunde beraten", falls Neukunde.*
- **Generalisierung / Vererbung** (Pfeil mit hohler Spitze): ein spezieller Akteur/Fall erbt von einem allgemeinen. *„Kunde" und „Mitarbeiter/-in" sind Spezialisierungen von „Person".*

> **Merkhilfe:** `include` = **immer** (Pflicht), `extend` = **eventuell** (Bedingung). Der Pfeil zeigt bei `include` **weg vom** Basisfall, bei `extend` **hin zum** Basisfall.

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Akteur** | Externe Rolle, die mit dem System interagiert (nicht Teil des Systems) |
| **Anwendungsfall** | Zusammenhängende Funktionalität mit erkennbarem Nutzen für den Akteur |
| **Systemgrenze** | Grenze zwischen System und Umwelt |
| **`<<include>>`** | Verpflichtende Einbindung eines anderen Anwendungsfalls |
| **`<<extend>>`** | Bedingte, optionale Erweiterung eines Anwendungsfalls |
| **Generalisierung** | Vererbungsbeziehung zwischen Akteuren oder Anwendungsfällen |

---

## Prüfungstipps

- **UML wird in der AP2 stark gewichtet** – das Use-Case-Diagramm ist eines der am häufigsten geprüften Diagramme. Übe es aktiv (selbst zeichnen), nicht nur lesen.
- **Typische Aufgabe:** ein *unvollständiges* Diagramm ergänzen (fehlende Beziehungen/Akteure eintragen) – genau die Aufgabenform im Buch (ConSystem GmbH).
- **Klassiker-Fehler:** `include` und `extend` verwechseln. Präge dir Pfeilrichtung **und** Semantik ein.
- **`<<extend>>` braucht eine Bedingung** – nenne sie explizit, wenn danach gefragt wird.
- Akteur ≠ konkrete Person, sondern eine **Rolle**. Dieselbe Person kann mehrere Rollen einnehmen.
- **Katalog-Hinweis:** UML-Diagramme wurden im aktualisierten Prüfungskatalog gestärkt (u. a. Aktivitätsdiagramme neu in AP1). In älteren Übungsprüfungen kann die Diagrammauswahl abweichen – siehe [Katalogänderungen](../../00-exam-overview/00-02-catalog-changes.md).

---

## Übungsaufgabe

**Ausgangsszenario (nach ConSystem GmbH):** Für eine Software zur *Kundenberatung* liegt ein erster Entwurf eines Use-Case-Diagramms vor. Es fehlen noch: eine **Vererbung**, eine **`<<include>>`-Beziehung**, eine **`<<extend>>`-Beziehung mit Bedingung** sowie die **Assoziationen** der Akteure.

**Aufgabe:** Ergänze das Diagramm sinnvoll.

<details>
<summary>Lösungsskizze</summary>

- **Vererbung:** „Kunde" und „Mitarbeiter/-in" generalisieren zu „Person".
- **Assoziationen:** „Kunde" und „Mitarbeiter/-in" jeweils mit „Kunde beraten" verbinden.
- **`<<include>>`:** „Kunde beraten" ⟶ „Kundendaten laden" (immer nötig).
- **`<<extend>>`:** „Willkommensrabatt gewähren" ⟶ „Kunde beraten", Bedingung: *nur bei Neukunden*.

</details>

---

## Beispiel-Diagramm

![Use-Case-Diagramm (Beispiel-Lösung)](../../../assets/diagrams/uml_usecase_aufgabe.png)

<!-- Bildquelle: ap2.online (mit Genehmigung) -->

---

## Querverweise

- [06-04-01 UML allgemein](./06-04-01-uml-allgemein.md) – Überblick über alle UML-Diagrammarten
- [06-04-03 Sequenzdiagramm](./06-04-03-sequenzdiagramm.md) – Ablauf eines Anwendungsfalls im Detail
- [06-04-04 Aktivitätsdiagramm](./06-04-04-aktivitaetsdiagramm.md) – Prozesssicht
- [06-01-02 Planung einer Anwendung (Anforderungsanalyse)](../06-01-schnittstellen-planung/06-01-02-planung-anwendung.md) – wo Use-Cases herkommen
