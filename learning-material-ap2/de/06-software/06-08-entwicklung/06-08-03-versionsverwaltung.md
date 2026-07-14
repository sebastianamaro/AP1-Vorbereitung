# Versionsverwaltung (Git)

## Lernziele

Nach diesem Kapitel solltest du:
- Zweck der Versionsverwaltung erklären
- Zentrale und verteilte Systeme unterscheiden
- Grundbegriffe von Git kennen

---

## Kerninhalt

**Versionsverwaltung** (Version Control) verfolgt Änderungen am Code, ermöglicht **Zusammenarbeit**, **Wiederherstellung** früherer Stände und **paralleles Arbeiten** über Branches.

### Zentral vs. verteilt

- **Zentral** (z. B. SVN): ein zentrales Repository.
- **Verteilt** (z. B. **Git**): jeder hat eine vollständige Kopie des Repositorys inkl. Historie.

### Git-Grundbegriffe

| Begriff | Bedeutung |
|---------|-----------|
| **Repository** | Projekt inkl. Versionshistorie |
| **Commit** | gespeicherter Änderungsstand (Momentaufnahme) |
| **Branch** | parallele Entwicklungslinie |
| **Merge** | Zusammenführen von Branches |
| **Pull/Push** | Änderungen holen/hochladen (Remote) |
| **Konflikt** | widersprüchliche Änderungen, manuell auflösen |

Typischer Ablauf: `clone → branch → commit → push → Pull Request → merge`. Plattformen: **GitHub, GitLab**.

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Git** | Verteiltes Versionsverwaltungssystem |
| **Commit/Branch/Merge** | Snapshot / Entwicklungslinie / Zusammenführen |
| **Pull/Push** | Synchronisierung mit dem Remote |

---

## Prüfungstipps

- **Zentral vs. verteilt** (Git = verteilt, volle lokale Kopie).
- Grundbegriffe (Commit, Branch, Merge, Konflikt) erklären können.
- Nutzen: Zusammenarbeit, Nachvollziehbarkeit, Wiederherstellung.

---

## Übungsaufgabe

**Aufgabe:** Beschreibe den Ablauf, wie zwei Entwickler mit Branches an einem Feature arbeiten und ihre Änderungen zusammenführen (inkl. Konfliktfall).

---

## Querverweise

- [06-07-03 CI/CD](../06-07-architektur/06-07-03-ci-cd.md)
- [06-08-05 Dokumentation](./06-08-05-dokumentation.md)
