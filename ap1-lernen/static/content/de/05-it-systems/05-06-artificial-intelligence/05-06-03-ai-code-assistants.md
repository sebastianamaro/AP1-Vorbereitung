# KI-Codeassistenten

**Hinweis:** KI-gestützte Tools sind NEU im Prüfungskatalog 2025!

## Lernziele

Nach diesem Kapitel solltest du:
- Funktionsweise von KI-Codeassistenten verstehen
- Bekannte Tools kennen und unterscheiden können
- Vor- und Nachteile bewerten können
- Verantwortungsvollen Umgang mit KI-Code kennen

---

## Kerninhalt

### Was sind KI-Codeassistenten?

**KI-Codeassistenten** sind Tools, die Entwickler bei der Programmierung unterstützen, indem sie Code vorschlagen, generieren, erklären oder verbessern.

```
┌─────────────────────────────────────────────────────────────────┐
│                    KI-CODEASSISTENT                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Entwickler                                    KI-Assistent   │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │                                                         │  │
│   │  def calculate_tax(                                     │  │
│   │      _                   ←───────────────┐              │  │
│   │                                          │              │  │
│   │                          ┌───────────────┴────────────┐│  │
│   │                          │ Vorschlag:                  ││  │
│   │                          │                             ││  │
│   │                          │ def calculate_tax(income):  ││  │
│   │                          │     if income <= 10000:     ││  │
│   │                          │         return 0            ││  │
│   │                          │     return income * 0.2     ││  │
│   │                          └─────────────────────────────┘│  │
│   │                                                         │  │
│   │  [Tab] zum Akzeptieren                                  │  │
│   │                                                         │  │
│   └─────────────────────────────────────────────────────────┘  │
│                                                                 │
│   KI analysiert:                                               │
│   • Aktuellen Kontext                                          │
│   • Projektstruktur                                            │
│   • Kommentare und Funktionsnamen                              │
│   • Übliche Patterns                                           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Funktionen von KI-Codeassistenten

| Funktion | Beschreibung |
|----------|--------------|
| **Code-Vervollständigung** | Vorschläge während des Tippens |
| **Code-Generierung** | Ganzen Code aus Beschreibung erzeugen |
| **Code-Erklärung** | Bestehenden Code erläutern |
| **Refactoring** | Verbesserungsvorschläge |
| **Bug-Erkennung** | Potenzielle Fehler identifizieren |
| **Dokumentation** | Kommentare und Docstrings generieren |
| **Unit-Tests** | Testfälle generieren |
| **Code-Review** | Qualitätsprüfung |

---

### Bekannte KI-Codeassistenten

| Tool | Anbieter | Besonderheit |
|------|----------|--------------|
| **GitHub Copilot** | GitHub/Microsoft | IDE-Integration, sehr populär |
| **Claude** | Anthropic | Längere Kontexte, Code-Analyse |
| **ChatGPT** | OpenAI | Vielseitig, erklärt gut |
| **Amazon CodeWhisperer** | AWS | AWS-Integration |
| **Tabnine** | Tabnine | Lokale Ausführung möglich |
| **Codeium** | Codeium | Kostenlos für Privatnutzer |

---

### GitHub Copilot im Detail

```
┌────────────────────────────────────────────────────────────────┐
│                GITHUB COPILOT                                  │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Integration in:                                               │
│  • VS Code                                                     │
│  • Visual Studio                                               │
│  • JetBrains IDEs                                             │
│  • Neovim                                                      │
│                                                                │
│  Funktionen:                                                   │
│  ┌────────────────────────────────────────────────────────┐   │
│  │ // Sortiere Array aufsteigend                          │   │
│  │ function sortArray(arr) {                              │   │
│  │     return arr.sort((a, b) => a - b);  ← Vorschlag    │   │
│  │ }                                                       │   │
│  └────────────────────────────────────────────────────────┘   │
│                                                                │
│  Copilot Chat:                                                 │
│  ┌────────────────────────────────────────────────────────┐   │
│  │ User: "Erkläre diesen Code"                            │   │
│  │ Copilot: "Diese Funktion sortiert ein Array..."        │   │
│  └────────────────────────────────────────────────────────┘   │
│                                                                │
│  Preise (Stand 2025):                                         │
│  • Individual: ~10€/Monat                                     │
│  • Business: ~19€/Monat                                       │
│  • Kostenlos für Studenten und Open-Source-Maintainer        │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Vorteile von KI-Codeassistenten

| Vorteil | Beschreibung |
|---------|--------------|
| **Produktivitätssteigerung** | Schnellere Entwicklung |
| **Weniger Tipparbeit** | Boilerplate-Code wird generiert |
| **Lernunterstützung** | Neue Konzepte und APIs lernen |
| **Code-Qualität** | Best Practices werden vorgeschlagen |
| **Dokumentation** | Automatische Kommentare |
| **Debugging** | Hilfe bei Fehlerbehebung |

---

### Risiken und Nachteile

| Risiko | Beschreibung |
|--------|--------------|
| **Sicherheitslücken** | KI kann unsicheren Code vorschlagen |
| **Falsche Vorschläge** | Code kann Bugs enthalten |
| **Urheberrecht** | Trainiert auf fremdem Code |
| **Abhängigkeit** | Übermäßiges Vertrauen |
| **Verständnisverlust** | Code ohne Verständnis übernehmen |
| **Datenschutz** | Code wird an Cloud gesendet |

---

### Best Practices für KI-Code

```
┌────────────────────────────────────────────────────────────────┐
│          VERANTWORTUNGSVOLLER UMGANG MIT KI-CODE               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  ✓ Code IMMER prüfen und verstehen                            │
│                                                                │
│  ✓ Sicherheitsrelevanten Code besonders prüfen                │
│                                                                │
│  ✓ Tests schreiben für generierten Code                       │
│                                                                │
│  ✓ Urheberrecht beachten (besonders bei Open Source)          │
│                                                                │
│  ✓ Sensible Daten nicht in Prompts verwenden                  │
│                                                                │
│  ✓ Als Werkzeug nutzen, nicht als Ersatz für Wissen           │
│                                                                │
│  ✗ Blind akzeptieren                                          │
│                                                                │
│  ✗ Passwörter oder API-Keys in Prompts eingeben               │
│                                                                │
│  ✗ Sicherheitskritischen Code ungeprüft übernehmen            │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Typische Sicherheitsprobleme bei KI-Code

| Problem | Beispiel |
|---------|----------|
| **SQL Injection** | Ungefilterte Benutzereingaben |
| **Hardcoded Credentials** | Passwörter im Code |
| **Fehlende Validierung** | Input nicht geprüft |
| **Veraltete Libraries** | Unsichere Versionen |
| **XSS** | Unsichere Ausgabe |

**Wichtig:** KI-generierter Code muss wie jeder Code auf Sicherheit geprüft werden!

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Code-Completion** | Automatische Vervollständigung |
| **Prompt** | Anweisung an die KI |
| **GitHub Copilot** | Populärer KI-Codeassistent |
| **LLM** | Large Language Model (Basis der KI) |
| **Boilerplate** | Wiederholender Standardcode |
| **Refactoring** | Code verbessern ohne Funktion zu ändern |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was ist ein KI-Codeassistent?
- Nennen Sie Vorteile und Risiken
- Wie sollte man mit KI-generiertem Code umgehen?

### Wichtig zu merken

- **KI-Codeassistenten:** Unterstützen, ersetzen aber nicht den Entwickler
- **Vorteile:** Produktivität, weniger Tipparbeit, Lernhilfe
- **Risiken:** Sicherheitslücken, Urheberrecht, blindes Vertrauen
- **Best Practice:** Code IMMER prüfen und verstehen!

---

## Übungsaufgaben

### Aufgabe 1
Was ist ein KI-Codeassistent und wie unterstützt er Entwickler?

**Lösung:** Ein **KI-Codeassistent** ist ein Tool, das Entwickler bei der Programmierung unterstützt. Es nutzt künstliche Intelligenz, um:
- Code während des Tippens vorzuschlagen
- Code aus natürlicher Sprache zu generieren
- Bestehenden Code zu erklären
- Verbesserungsvorschläge zu machen
- Dokumentation zu erstellen

Beispiele: GitHub Copilot, Claude, ChatGPT

### Aufgabe 2
Nennen Sie zwei Vorteile und zwei Risiken beim Einsatz von KI-Codeassistenten.

**Lösung:**

**Vorteile:**
1. **Produktivitätssteigerung:** Entwickler können schneller programmieren
2. **Lernunterstützung:** Neue APIs und Patterns kennenlernen

**Risiken:**
1. **Sicherheitslücken:** KI kann unsicheren Code vorschlagen
2. **Verständnisverlust:** Entwickler übernehmen Code ohne ihn zu verstehen

### Aufgabe 3
Ein Junior-Entwickler verwendet GitHub Copilot und übernimmt alle Vorschläge ohne Prüfung. Was ist das Problem und wie sollte er vorgehen?

**Lösung:**

**Problem:**
- Code kann Bugs oder Sicherheitslücken enthalten
- Urheberrechtlich problematischer Code möglich
- Entwickler versteht eigenen Code nicht
- Keine Lerneffekt

**Besseres Vorgehen:**
1. Jeden Vorschlag lesen und verstehen
2. Code auf Sicherheitsprobleme prüfen
3. Tests für generierten Code schreiben
4. Bei Unklarheiten nachfragen oder Dokumentation lesen
5. KI als Werkzeug nutzen, nicht als Ersatz für Wissen

---

## Querverweise

- [05-06-01 KI-Grundlagen](./05-06-01-ai-fundamentals.md) - Basiswissen
- [05-06-02 KI-Anwendungen](./05-06-02-ai-applications.md) - Weitere Anwendungen
- [06-06-02 Testing](../../06-software/06-06-development-process/06-06-02-testing.md) - Testen von Code
