# Observer (Beobachter-Muster)

## Lernziele

Nach diesem Kapitel solltest du:
- Zweck und Aufbau des Observer-Musters erklären
- Subject und Observer sowie den Benachrichtigungsablauf beschreiben

---

## Kerninhalt

Das **Observer-Muster** (Beobachter) ist ein **Verhaltensmuster** (Design Pattern). Es definiert eine **1:n-Abhängigkeit**: Ändert ein Objekt (**Subject/Observable**) seinen Zustand, werden alle abhängigen Objekte (**Observer**) **automatisch benachrichtigt** und aktualisiert.

### Aufbau

| Rolle | Aufgabe |
|-------|---------|
| **Subject (Observable)** | verwaltet die Observer, meldet Änderungen (`notify()`) |
| **Observer** | registriert sich beim Subject, reagiert auf Benachrichtigung (`update()`) |

```
Subject
 + registrieren(o)      Observer «interface»
 + abmelden(o)             + update()
 + benachrichtigen() ─────►   ▲
                              │ implementiert
                     KonkreterObserver
```

### Ablauf (Publish-Subscribe)

1. Observer **registrieren** sich beim Subject.
2. Ändert das Subject seinen Zustand, ruft es `benachrichtigen()`.
3. Jeder registrierte Observer erhält `update()` und aktualisiert sich.

**Vorteil:** lose Kopplung – das Subject kennt nur die Observer-Schnittstelle, nicht die konkreten Observer. **Einsatz:** u. a. in **MVC** (Model benachrichtigt Views), Event-Systeme, GUI.

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Subject/Observable** | Beobachtetes Objekt, meldet Änderungen |
| **Observer** | Beobachter, reagiert auf Benachrichtigungen |
| **Publish-Subscribe** | Anmelden + automatische Benachrichtigung |
| **Lose Kopplung** | Subject kennt nur die Observer-Schnittstelle |

---

## Prüfungstipps

- **1:n-Benachrichtigung** ist der Kern – ein Subject, viele Observer.
- Zusammenhang mit **MVC** (Model = Subject, Views = Observer) nennen können.
- `registrieren`/`abmelden`/`benachrichtigen` (Subject) und `update` (Observer) kennen.

---

## Übungsaufgabe

**Aufgabe:** Skizziere das Observer-Muster für ein Model, das mehrere Views bei Datenänderung automatisch aktualisiert (Klassen-/Sequenzdiagramm).

---

## Querverweise

- [06-05-01 MVC](./06-05-01-mvc.md)
- [06-04-09 Klassendiagramm](../06-04-uml/06-04-09-klassendiagramm.md)
