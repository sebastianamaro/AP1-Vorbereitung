# Barrierefreiheit in der IT

## Lernziele

Nach diesem Kapitel solltest du:
- Barrierefreiheit im IT-Bereich definieren können
- Die rechtlichen Grundlagen kennen (EU-Richtlinie, BITV 2.0)
- Maßnahmen für barrierefreie IT beschreiben können
- Die WCAG-Richtlinien kennen

---

## Kerninhalt

### Was ist Barrierefreiheit?

**Barrierefreiheit** (englisch: Accessibility) bedeutet, dass IT-Systeme, Webseiten und Anwendungen so gestaltet sind, dass sie von **allen Menschen** genutzt werden können - unabhängig von körperlichen oder geistigen Einschränkungen.

> **Definition:** Barrierefreie Informationstechnik ermöglicht Menschen mit Behinderungen die uneingeschränkte Nutzung digitaler Angebote.

---

### Warum ist Barrierefreiheit wichtig?

| Grund | Erklärung |
|-------|-----------|
| **Inklusion** | Teilhabe aller Menschen an der digitalen Welt |
| **Gesetzliche Pflicht** | Rechtliche Anforderungen müssen erfüllt werden |
| **Zielgruppe** | Ca. 10% der Bevölkerung haben Einschränkungen |
| **Benutzerfreundlichkeit** | Verbessert Usability für alle Nutzer |
| **Wirtschaftlich** | Größerer Kundenkreis |

---

### Rechtliche Grundlagen

#### EU-Richtlinie 2016/2102

Die EU-Richtlinie über den barrierefreien Zugang zu Websites und mobilen Anwendungen öffentlicher Stellen:

- Gilt für öffentliche Einrichtungen
- Verpflichtet zur Barrierefreiheit von Webauftritten
- Bezieht sich auf WCAG 2.1

#### BITV 2.0

Die **Barrierefreie-Informationstechnik-Verordnung** (BITV 2.0) ist die deutsche Umsetzung:

| Aspekt | Details |
|--------|---------|
| **Geltungsbereich** | Bundesbehörden und öffentliche Stellen |
| **Bezugsnorm** | WCAG 2.1 Stufe AA |
| **Anforderungen** | Wahrnehmbarkeit, Bedienbarkeit, Verständlichkeit, Robustheit |
| **Kontrolle** | Regelmäßige Überprüfung erforderlich |

---

### WCAG-Richtlinien

Die **Web Content Accessibility Guidelines (WCAG)** sind internationale Standards für barrierefreie Webinhalte.

#### Die vier Prinzipien (POUR)

```
┌─────────────────────────────────────────────────────────────────┐
│                    WCAG - POUR-Prinzipien                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │           P - PERCEIVABLE (Wahrnehmbar)                 │   │
│  │   Inhalte müssen wahrnehmbar präsentiert werden         │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │           O - OPERABLE (Bedienbar)                      │   │
│  │   Benutzeroberfläche muss bedienbar sein                │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │           U - UNDERSTANDABLE (Verständlich)             │   │
│  │   Informationen und Bedienung müssen verständlich sein  │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │           R - ROBUST                                    │   │
│  │   Inhalte müssen von assistiven Technologien            │   │
│  │   interpretiert werden können                           │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### WCAG-Konformitätsstufen

| Stufe | Beschreibung |
|-------|--------------|
| **A** | Minimale Barrierefreiheit |
| **AA** | Standard (von BITV 2.0 gefordert) |
| **AAA** | Höchste Barrierefreiheit |

---

### Maßnahmen für barrierefreie IT

#### Für Webseiten

| Bereich | Maßnahme |
|---------|----------|
| **Bilder** | Alternative Texte (alt-Attribute) für Screenreader |
| **Kontrast** | Ausreichender Farbkontrast (min. 4.5:1) |
| **Schrift** | Skalierbare Schriftgrößen (keine festen Pixelwerte) |
| **Navigation** | Tastaturnavigation möglich |
| **Formulare** | Beschriftete Eingabefelder (Labels) |
| **Videos** | Untertitel und Audiodeskription |
| **Struktur** | Semantisches HTML (Überschriften h1-h6) |

#### Beispiel: Barrierefreie Webseite

```html
<!-- RICHTIG: Barrierefreies Bild -->
<img src="produkt.jpg" alt="Schwarzer Laptop mit 15 Zoll Display">

<!-- FALSCH: Nicht barrierefrei -->
<img src="produkt.jpg">

<!-- RICHTIG: Beschriftetes Formularfeld -->
<label for="email">E-Mail-Adresse:</label>
<input type="email" id="email" name="email">

<!-- RICHTIG: Semantische Überschriftenstruktur -->
<h1>Hauptüberschrift</h1>
  <h2>Unterkapitel</h2>
    <h3>Abschnitt</h3>
```

---

### Assistive Technologien

| Technologie | Nutzergruppe | Funktion |
|-------------|--------------|----------|
| **Screenreader** | Sehbehinderte | Liest Bildschirminhalt vor |
| **Bildschirmlupe** | Sehbehinderte | Vergrößert Bildschirmausschnitte |
| **Braillezeile** | Blinde | Gibt Text in Blindenschrift aus |
| **Sprachsteuerung** | Motorisch Eingeschränkte | Bedienung per Stimme |
| **Spezielle Tastaturen** | Motorisch Eingeschränkte | Angepasste Eingabegeräte |

---

### Barrierefreiheit bei Software

| Aspekt | Maßnahme |
|--------|----------|
| **Farbkontrast** | Hoher Kontrast zwischen Text und Hintergrund |
| **Schriftgröße** | Einstellbare Schriftgröße |
| **Tastatursteuerung** | Alle Funktionen per Tastatur erreichbar |
| **Fehlermeldungen** | Klar und verständlich formuliert |
| **Zeitlimits** | Ausreichend Zeit oder abschaltbar |
| **Animationen** | Pausierbar oder deaktivierbar |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Barrierefreiheit** | Zugänglichkeit von IT für alle Menschen |
| **Accessibility** | Englischer Begriff für Barrierefreiheit |
| **WCAG** | Web Content Accessibility Guidelines |
| **BITV 2.0** | Barrierefreie-Informationstechnik-Verordnung |
| **Screenreader** | Software zum Vorlesen von Bildschirminhalten |
| **Alt-Text** | Alternativer Text für Bilder |
| **POUR** | Perceivable, Operable, Understandable, Robust |

---

## Prüfungstipps

### Häufige Prüfungsfragen
- Was versteht man unter Barrierefreiheit in der IT?
- Was regelt die BITV 2.0?
- Nennen Sie Maßnahmen für barrierefreie Webseiten

### Wichtig für die Prüfung
- Die vier POUR-Prinzipien kennen
- Alt-Texte als wichtige Maßnahme
- BITV 2.0 als deutsche Verordnung

---

## Übungsaufgaben

### Aufgabe 1
Wie ist Barrierefreiheit im IT-Bereich definiert?

**Lösung:** Barrierefreiheit bedeutet, dass IT-Systeme, Webseiten und Anwendungen so gestaltet sind, dass sie von allen Menschen genutzt werden können - unabhängig von körperlichen oder geistigen Einschränkungen.

### Aufgabe 2
Beschreiben Sie die BITV 2.0.

**Lösung:** Die Barrierefreie-Informationstechnik-Verordnung (BITV 2.0) ist die deutsche Umsetzung der EU-Richtlinie 2016/2102. Sie verpflichtet Bundesbehörden und öffentliche Stellen zur Einhaltung der WCAG 2.1 Stufe AA für ihre digitalen Angebote.

### Aufgabe 3
Nennen Sie drei konkrete Maßnahmen für eine barrierefreie Webseite.

**Lösung:**
1. **Alternative Texte** für Bilder (alt-Attribute) für Screenreader
2. **Ausreichender Farbkontrast** zwischen Text und Hintergrund
3. **Tastaturnavigation** - alle Funktionen müssen per Tastatur erreichbar sein
(oder: skalierbare Schriftgrößen, semantische HTML-Struktur, Untertitel für Videos)

### Aufgabe 4
Wofür steht die Abkürzung POUR bei den WCAG-Richtlinien?

**Lösung:**
- **P** = Perceivable (Wahrnehmbar)
- **O** = Operable (Bedienbar)
- **U** = Understandable (Verständlich)
- **R** = Robust

---

## Querverweise

- [02-04 Softwarequalität](./02-04-software-quality.md) - Benutzbarkeit als Qualitätsmerkmal
- [06-05-01 HTML-XML](../06-software/06-05-web-development/06-05-01-html-xml.md) - Semantisches HTML
- [05-06-04 EU AI Act](../05-it-systems/05-06-artificial-intelligence/05-06-04-eu-ai-act.md) - EU-Regulierungen
