# Aktivitätsdiagramm

## Lernziele

Nach diesem Kapitel solltest du:
- Elemente eines Aktivitätsdiagramms kennen
- Verzweigungen und Parallelität (Fork/Join) darstellen
- Ein Flussdiagramm in ein Aktivitätsdiagramm überführen

---

## Kerninhalt

Das **Aktivitätsdiagramm** (Verhaltensdiagramm) stellt **Abläufe/Prozesse** dar – ähnlich einem Flussdiagramm, aber mit UML-Notation und Unterstützung für Parallelität.

### Elemente

| Element | Darstellung |
|---------|-------------|
| **Startknoten** | ausgefüllter Kreis |
| **Endknoten** | Kreis mit Ring |
| **Aktion** | abgerundetes Rechteck |
| **Entscheidung/Zusammenführung** | **Raute** (mit Bedingungen `[...]`) |
| **Fork/Join (Parallelität)** | dicker Balken (aufteilen/zusammenführen) |
| **Swimlane (Partition)** | Spalte je Verantwortlichem/Rolle |

```
 ● → [Anfrage prüfen] → ◇ [gültig?] ──ja──► [bearbeiten] → ⊗
                            └───nein──► [ablehnen] ──────────┘
```

- **Entscheidung (Raute):** ein Eingang, mehrere bedingte Ausgänge `[ja]/[nein]`.
- **Fork/Join (Balken):** mehrere Aktionen laufen **parallel** und werden wieder zusammengeführt.
- **Swimlanes:** ordnen Aktionen den ausführenden Rollen/Abteilungen zu.

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Entscheidungsknoten** | Raute mit bedingten Ausgängen |
| **Fork/Join** | Aufteilung/Zusammenführung paralleler Abläufe |
| **Swimlane** | Zuordnung von Aktionen zu Rollen |

---

## Prüfungstipps

- **Raute = Entscheidung** (bedingte Verzweigung), **Balken = Parallelität** – nicht verwechseln.
- Aktivitätsdiagramme sind im aktualisierten Katalog **neu betont**.
- Typische Aufgabe: ein **Flussdiagramm in ein Aktivitätsdiagramm** überführen.

---

## Übungsaufgabe

**Aufgabe (nach ConSystem GmbH):** Überführe das gegebene Flussdiagramm zum Ablauf „Schulungen für Kunden“ in ein UML-Aktivitätsdiagramm (mit Entscheidungen und ggf. Swimlanes).

---

## Beispiel-Diagramm

![Aktivitätsdiagramm (Beispiel-Lösung)](../../../assets/diagrams/uml_activity_aufgabe.png)

<!-- Bildquelle: ap2.online (mit Genehmigung) -->

---

## Querverweise

- [06-04-06 Zustandsdiagramm](./06-04-06-zustandsdiagramm.md)
- [06-04-03 Sequenzdiagramm](./06-04-03-sequenzdiagramm.md)
