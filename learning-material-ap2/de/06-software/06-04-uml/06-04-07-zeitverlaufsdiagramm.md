# Zeitverlaufsdiagramm (Timing Diagram)

## Lernziele

Nach diesem Kapitel solltest du:
- Zweck des Zeitverlaufsdiagramms kennen
- Zustandsänderungen über die Zeit ablesen

---

## Kerninhalt

Das **Zeitverlaufsdiagramm** (Verhaltens-/Interaktionsdiagramm) stellt **Zustandsänderungen von Objekten über eine Zeitachse** dar. Es eignet sich, wenn das **exakte zeitliche Verhalten** wichtig ist (z. B. eingebettete/Echtzeitsysteme, Signalverläufe).

### Aufbau

- **Waagerechte Achse:** Zeit
- **Senkrechte Achse:** Zustände (bzw. Werte) des Objekts
- Der Verlauf zeigt, **wann** ein Objekt **welchen Zustand** annimmt.

```
Zustand
  aktiv  │      ┌───────┐
  wartend│──────┘       └───────
         └────────────────────────► Zeit
```

Im Vergleich: Das Sequenzdiagramm betont die **Reihenfolge** von Nachrichten, das Zeitverlaufsdiagramm den **genauen Zeitpunkt/Dauer** von Zuständen.

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Zeitachse** | Waagerechte Achse (Zeitverlauf) |
| **Zustandsverlauf** | Abfolge der Zustände über die Zeit |

---

## Prüfungstipps

- Einordnen als **Interaktions-/Verhaltensdiagramm** mit Fokus auf **exaktes Timing**.
- Abgrenzung zum Sequenzdiagramm (Reihenfolge vs. Zeitpunkt/Dauer).

---

## Übungsaufgabe

**Aufgabe:** Skizziere für ein Objekt mit den Zuständen *wartend/aktiv* einen Zeitverlauf, der zwei Aktivierungsphasen zeigt.

---

## Querverweise

- [06-04-06 Zustandsdiagramm](./06-04-06-zustandsdiagramm.md)
- [06-04-03 Sequenzdiagramm](./06-04-03-sequenzdiagramm.md)
