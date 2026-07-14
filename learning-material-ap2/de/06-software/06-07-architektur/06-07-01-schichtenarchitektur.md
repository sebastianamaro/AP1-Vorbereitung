# Schichtenarchitektur (3-Schichten)

## Lernziele

Nach diesem Kapitel solltest du:
- Die drei Schichten einer klassischen Anwendung benennen
- Aufgaben und typische Technologien je Schicht zuordnen
- Den Nutzen der Trennung erklären

---

## Kerninhalt

Die **3-Schichten-Architektur** (Three-Tier) trennt eine Anwendung in klar abgegrenzte Schichten:

| Schicht | Aufgabe | Typische Technologien |
|---------|---------|-----------------------|
| **Präsentationsschicht** | Benutzeroberfläche, Ein-/Ausgabe | HTML/CSS/JS, React, Angular |
| **Logikschicht** (Geschäftslogik) | Verarbeitung, Regeln | Java, C#, Node.js, Python |
| **Datenhaltungsschicht** | Speicherung/Zugriff | MySQL, PostgreSQL |

```
[ Präsentation ]  ⇄  [ Logik ]  ⇄  [ Datenhaltung ]
   (Client/UI)        (Server)        (Datenbank)
```

### Nutzen

- **Trennung der Zuständigkeiten** (Separation of Concerns)
- **Austauschbarkeit** (z. B. UI wechseln, ohne Logik zu ändern)
- **Wartbarkeit & Testbarkeit**, parallele Entwicklung
- **Skalierbarkeit** (Schichten getrennt skalierbar)

> Verwandt: das **MVC**-Muster trennt innerhalb der Anwendung Model/View/Controller
> (siehe [06-05-01](../06-05-muster/06-05-01-mvc.md)).

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Präsentations-/Logik-/Datenschicht** | UI / Verarbeitung / Speicherung |
| **Three-Tier** | 3-Schichten-Architektur |
| **Separation of Concerns** | Trennung der Verantwortlichkeiten |

---

## Prüfungstipps

- Die **drei Schichten + je eine Aufgabe/Technologie** parat haben.
- Nutzen der Trennung (Austauschbarkeit, Wartbarkeit) nennen.
- Abgrenzung zu MVC (Architekturmuster innerhalb der Anwendung).

---

## Übungsaufgabe

**Aufgabe:** Ordne für einen Online-Shop konkrete Bausteine (React-Frontend, Java-Service, PostgreSQL) den drei Schichten zu und nenne zwei Vorteile der Trennung.

---

## Querverweise

- [06-07-04 REST](./06-07-04-rest.md)
- [06-05-01 MVC](../06-05-muster/06-05-01-mvc.md)
