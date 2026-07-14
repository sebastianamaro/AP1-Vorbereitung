# Sequenzdiagramm

## Lernziele

Nach diesem Kapitel solltest du:
- Aufbau und Elemente eines Sequenzdiagramms kennen
- Synchrone/asynchrone Nachrichten und Rückgaben unterscheiden
- Einen Ablauf als Sequenzdiagramm darstellen

---

## Kerninhalt

Das **Sequenzdiagramm** (Verhaltens-/Interaktionsdiagramm) zeigt den **zeitlichen Ablauf von Nachrichten** zwischen Objekten. Die **Zeit läuft von oben nach unten**.

### Elemente

| Element | Darstellung |
|---------|-------------|
| **Objekt/Akteur** | Kästchen oben (`:Klasse` bzw. `objekt:Klasse`) |
| **Lebenslinie** | gestrichelte vertikale Linie |
| **Aktivierungsbalken** | schmales Rechteck (Objekt ist aktiv) |
| **Synchrone Nachricht** | durchgezogener Pfeil, **gefüllte** Spitze (wartet auf Antwort) |
| **Asynchrone Nachricht** | durchgezogener Pfeil, **offene** Spitze |
| **Rückgabe (Return)** | gestrichelter Pfeil |

```
:Client        :Service       :Datenbank
   │  anfrage()   │              │
   ├─────────────►│  query()     │
   │              ├─────────────►│
   │              │◄─ ─ ─ ergebnis
   │◄─ ─ ─ antwort│              │
```

Erweiterungen: **Fragmente** wie `alt` (Alternative), `opt` (optional), `loop` (Schleife).

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Lebenslinie** | Existenz eines Objekts über die Zeit |
| **Aktivierungsbalken** | Zeitraum, in dem ein Objekt aktiv ist |
| **Synchron/Asynchron** | Mit/ohne Warten auf Antwort |
| **Fragment (alt/opt/loop)** | Kontrollstrukturen im Diagramm |

---

## Prüfungstipps

- **Zeit = vertikal (oben→unten)** – häufig gefragt.
- **Synchron (gefüllte Spitze) vs. asynchron (offene Spitze)** unterscheiden.
- Typische Aufgabe: fehlende Nachrichten/Rückgaben ergänzen (z. B. für einen Datenbankzugriff).

---

## Übungsaufgabe

**Aufgabe (nach ConSystem GmbH):** Ergänze in einem Sequenzdiagramm für einen aktualisierten Datenbankzugriff die fehlenden Botschaften zwischen Client, Service und Datenbank (inkl. Rückgaben).

---

## Beispiel-Diagramm

![Sequenzdiagramm (Beispiel-Lösung)](../../../assets/diagrams/uml_sequenz_aufgabe.png)

<!-- Bildquelle: ap2.online (mit Genehmigung) -->

---

## Querverweise

- [06-04-02 Use-Case-Diagramm](./06-04-02-use-case-diagramm.md)
- [06-04-04 Aktivitätsdiagramm](./06-04-04-aktivitaetsdiagramm.md)
