# Paketdiagramm

## Lernziele

Nach diesem Kapitel solltest du:
- Zweck eines Paketdiagramms kennen
- Pakete und Abhängigkeiten darstellen

---

## Kerninhalt

Das **Paketdiagramm** (Strukturdiagramm) gruppiert Modellelemente (z. B. Klassen) in **Pakete (Packages)** und zeigt deren **Abhängigkeiten**. Es gibt einen Überblick über die **Architektur/Struktur** großer Systeme.

### Elemente

| Element | Darstellung |
|---------|-------------|
| **Paket** | Ordner-Symbol (Reiter oben links) |
| **Abhängigkeit** | gestrichelter Pfeil (`--->`) vom abhängigen zum genutzten Paket |
| **Verschachtelung** | Pakete können Pakete enthalten |

```
┌──────────┐        ┌──────────┐
│ UI       │┈┈┈┈┈┈►│ Service  │
└──────────┘        └────┬─────┘
                         ┊ (nutzt)
                    ┌────▼─────┐
                    │ Data     │
                    └──────────┘
```

Ziel: **lose Kopplung** – möglichst wenige, klare Abhängigkeiten (keine Zyklen).

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Paket** | Gruppierung zusammengehöriger Elemente |
| **Abhängigkeit** | „nutzt/braucht“-Beziehung zwischen Paketen |
| **Lose Kopplung** | Wenige, gerichtete Abhängigkeiten |

---

## Prüfungstipps

- Paketdiagramm = **Strukturdiagramm** (Architekturüberblick).
- Abhängigkeitspfeil zeigt **vom abhängigen zum genutzten** Paket.
- Zyklische Abhängigkeiten gelten als schlechtes Design.

---

## Übungsaufgabe

**Aufgabe:** Strukturiere eine Anwendung in die Pakete UI, Service und Data und zeichne die Abhängigkeiten (UI → Service → Data).

---

## Querverweise

- [06-04-09 Klassendiagramm](./06-04-09-klassendiagramm.md)
- [06-05-01 MVC](../06-05-muster/06-05-01-mvc.md)
