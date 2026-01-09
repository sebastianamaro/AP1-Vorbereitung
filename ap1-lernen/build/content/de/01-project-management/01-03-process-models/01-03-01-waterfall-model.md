# Wasserfallmodell

## Lernziele

Nach diesem Kapitel solltest du:
- Das Wasserfallmodell erklären können
- Die Phasen des Wasserfallmodells kennen
- Vor- und Nachteile benennen können
- Wissen, wann das Wasserfallmodell geeignet ist

---

## Kerninhalt

### Was ist das Wasserfallmodell?

Das **Wasserfallmodell** ist ein **lineares Vorgehensmodell** für die Softwareentwicklung und das Projektmanagement. Die Phasen werden nacheinander durchlaufen - wie ein Wasserfall, der nur in eine Richtung fließt.

---

### Die Phasen des Wasserfallmodells

```
┌─────────────────┐
│   1. ANALYSE    │
└────────┬────────┘
         ▼
┌─────────────────┐
│   2. DESIGN     │
└────────┬────────┘
         ▼
┌─────────────────┐
│ 3. IMPLEMENTIERUNG │
└────────┬────────┘
         ▼
┌─────────────────┐
│    4. TEST      │
└────────┬────────┘
         ▼
┌─────────────────┐
│   5. BETRIEB    │
└─────────────────┘
```

---

### Beschreibung der Phasen

| Phase | Beschreibung | Ergebnisse |
|-------|-------------|------------|
| **1. Analyse** | Anforderungen erfassen und dokumentieren | Lastenheft, Anforderungsspezifikation |
| **2. Design** | Technische Lösung entwerfen | Pflichtenheft, Architektur, Entwurf |
| **3. Implementierung** | Programmierung/Umsetzung | Quellcode, Module |
| **4. Test** | Prüfung auf Fehler und Anforderungen | Testprotocols, Fehlerlisten |
| **5. Betrieb** | Produktivsetzung und Wartung | Dokumentation, Support |

---

### Charakteristika

- **Sequenziell:** Eine Phase nach der anderen
- **Dokumentationsgetrieben:** Jede Phase produziert Dokumente
- **Planbar:** Umfang und Dauer vorab festgelegt
- **Formal:** Klare Phasenübergänge und Meilensteine

---

### Vor- und Nachteile

#### Vorteile

| Vorteil | Erklärung |
|---------|-----------|
| **Klare Struktur** | Einfach zu verstehen und zu planen |
| **Gute Dokumentation** | Jede Phase produziert Ergebnisse |
| **Planbarkeit** | Kosten und Zeit gut kalkulierbar |
| **Nachvollziehbarkeit** | Klare Meilensteine und Übergänge |

#### Nachteile

| Nachteil | Erklärung |
|----------|-----------|
| **Unflexibel** | Änderungen sind teuer und aufwändig |
| **Späte Ergebnisse** | Funktionierendes Produkt erst am Ende |
| **Risiko** | Fehler werden erst spät entdeckt |
| **Kundeneinbindung** | Kunde sieht erst am Ende das Ergebnis |

---

### Wann ist das Wasserfallmodell geeignet?

**Geeignet für:**
- Projekte mit klaren, stabilen Anforderungen
- Projekte mit bekannter Technologie
- Regulierte Bereiche mit Dokumentationspflicht
- Kleine, überschaubare Projekte

**Nicht geeignet für:**
- Projekte mit sich ändernden Anforderungen
- Innovative Projekte mit unbekannter Technologie
- Projekte, die schnell Ergebnisse liefern müssen

---

### Rücksprünge im Wasserfallmodell

Obwohl das Modell theoretisch nur vorwärts läuft, gibt es in der Praxis oft **Rücksprünge**:

```
┌─────────────────┐
│   1. ANALYSE    │←─────┐
└────────┬────────┘      │
         ▼               │ Rücksprung bei
┌─────────────────┐      │ Problemen
│   2. DESIGN     │←─────┤
└────────┬────────┘      │
         ▼               │
┌─────────────────┐      │
│ 3. IMPLEMENTIERUNG │───┘
└────────┬────────┘
         ▼
        ...
```

**Wichtig:** Nach einem Rücksprung müssen alle folgenden Phasen erneut durchlaufen werden!

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Wasserfallmodell** | Lineares, sequenzielles Vorgehensmodell |
| **Phase** | Abgeschlossener Abschnitt mit definierten Ein- und Ausgaben |
| **Meilenstein** | Prüfpunkt am Ende einer Phase |
| **Dokumentation** | Schriftliche Ergebnisse jeder Phase |

---

## Prüfungstipps

### Häufige Prüfungsfragen
- Phasen in der richtigen Reihenfolge nennen
- Vor- und Nachteile gegenüber agilen Methoden
- Wann ist Wasserfall geeignet?

### Vergleich mit Scrum
| Aspekt | Wasserfall | Scrum |
|--------|------------|-------|
| Ablauf | Sequenziell | Iterativ |
| Änderungen | Schwierig | Erwünscht |
| Dokumentation | Umfangreich | Minimal |
| Kundenkontakt | Am Anfang/Ende | Kontinuierlich |
| Ergebnis | Am Ende | Nach jedem Sprint |

---

## Übungsaufgaben

### Aufgabe 1
Nennen Sie die fünf Phasen des Wasserfallmodells in der richtigen Reihenfolge.

**Lösung:**
1. Analyse
2. Design
3. Implementierung
4. Test
5. Betrieb

### Aufgabe 2
Nennen Sie zwei Vorteile und zwei Nachteile des Wasserfallmodells.

**Lösung:**
Vorteile:
- Klare Struktur und gute Planbarkeit
- Umfangreiche Dokumentation

Nachteile:
- Unflexibel bei Änderungen
- Funktionierendes Produkt erst am Ende sichtbar

### Aufgabe 3
Für welches Projekt wäre das Wasserfallmodell besser geeignet?
a) Entwicklung einer innovativen App mit unklaren Anforderungen
b) Erstellung einer Buchhaltungssoftware nach festgelegten Normen

**Lösung:** b) - Klare Anforderungen durch Normen, stabiler Scope

---

## Querverweise

- [01-03-02 Scrum](./01-03-02-scrum.md) - Agile Alternative
- [01-01-02 Projektphasen](../01-01-fundamentals/01-01-02-project-phases.md) - Allgemeine Projektphasen
- [06-06-01 SDLC](../../06-software/06-06-development-process/06-06-01-sdlc.md) - Softwaredevelopment-process
