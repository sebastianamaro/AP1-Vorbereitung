# Data Binding

## Lernziele

Nach diesem Kapitel solltest du:
- Data Binding erklären
- One-Way und Two-Way Binding unterscheiden

---

## Kerninhalt

**Data Binding** beschreibt die **Verbindung zwischen UI-Komponenten und Datenmodell**: Änderungen an den Daten spiegeln sich in der Oberfläche (und ggf. umgekehrt) automatisch wider.

| Art | Richtung | Beispiel |
|-----|----------|----------|
| **One-Way** | Modell → UI | React (`props`) |
| **Two-Way** | Modell ⇄ UI | Angular, Vue (`v-model`) |

```jsx
// One-Way (React): Daten fließen ins UI
function Welcome(props) { return <h1>Hallo, {props.name}</h1>; }
```

```html
<!-- Two-Way (Vue): UI-Eingabe aktualisiert das Modell und zurück -->
<input v-model="benutzername">
<p>Hallo, {{ benutzername }}</p>
```

- **One-Way:** vorhersehbarer Datenfluss (leichter nachvollziehbar/debugbar).
- **Two-Way:** komfortabel bei Formularen (UI und Modell bleiben synchron).

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Data Binding** | Kopplung von UI und Datenmodell |
| **One-Way** | Nur Modell → UI |
| **Two-Way** | Modell ⇄ UI (bidirektional) |

---

## Prüfungstipps

- **One-Way vs. Two-Way** (Richtung + je ein Framework-Beispiel) unterscheiden.
- Two-Way = typisch für **Formulare**; One-Way = klarer Datenfluss.

---

## Übungsaufgabe

**Aufgabe:** Erkläre an einem Eingabefeld den Unterschied zwischen One-Way- und Two-Way-Binding.

---

## Querverweise

- [06-07-01 Schichtenarchitektur](./06-07-01-schichtenarchitektur.md)
- [06-06-02 GUI-Design](../06-06-qualitaet-ux/06-06-02-gui-design.md)
