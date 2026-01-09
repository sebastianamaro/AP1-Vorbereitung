# KI-Anwendungen

**Hinweis:** Künstliche Intelligenz ist NEU im Prüfungskatalog 2025!

## Lernziele

Nach diesem Kapitel solltest du:
- Verschiedene KI-Anwendungsgebiete kennen
- Beispiele für KI im Alltag und Beruf nennen können
- Vor- und Nachteile von KI-Anwendungen bewerten können
- KI-gestützte Tools für den IT-Bereich kennen

---

## Kerninhalt

### KI im Alltag

```
┌─────────────────────────────────────────────────────────────────┐
│                    KI IM ALLTAG                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │  Sprach-     │  │   Recom-     │  │   Navi-      │         │
│  │  assistenten │  │  mendations  │  │   gation     │         │
│  │              │  │              │  │              │         │
│  │  "Hey Siri"  │  │  Netflix,    │  │  Stau-       │         │
│  │  "Alexa"     │  │  Spotify     │  │  vorhersage  │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐         │
│  │   Foto-      │  │  Social-     │  │   Smart      │         │
│  │   Apps       │  │  Media-Feed  │  │   Home       │         │
│  │              │  │              │  │              │         │
│  │  Gesichts-   │  │  Algorithmus │  │  Heizungs-   │         │
│  │  erkennung   │  │  zeigt Posts │  │  steuerung   │         │
│  └──────────────┘  └──────────────┘  └──────────────┘         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

| Bereich | KI-Anwendung | Beispiel |
|---------|--------------|----------|
| **Sprachassistenten** | Spracherkennung, NLP | Siri, Alexa, Google Assistant |
| **Empfehlungssysteme** | Personalisierung | Netflix, Spotify, Amazon |
| **Navigation** | Routenplanung, Stauvorhersage | Google Maps, Waze |
| **Fotografie** | Gesichtserkennung, Filter | iPhone-Fotos, Google Fotos |
| **E-Mail** | Spam-Filter, Smart Reply | Gmail, Outlook |
| **Übersetzer** | Maschinelle Übersetzung | DeepL, Google Translate |

---

### KI in der Wirtschaft

| Branche | Anwendung | Nutzen |
|---------|-----------|--------|
| **Kundenservice** | Chatbots, Automatisierung | 24/7 Erreichbarkeit |
| **Marketing** | Personalisierte Werbung | Höhere Conversion |
| **Finanzen** | Betrugserkennung, Trading | Risikominimierung |
| **Logistik** | Routenoptimierung | Kostenersparnis |
| **Fertigung** | Qualitätskontrolle | Fehlerreduktion |
| **Gesundheit** | Diagnoseunterstützung | Früherkennung |

---

### KI in der IT

```
┌────────────────────────────────────────────────────────────────┐
│                    KI IN DER IT                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  ENTWICKLUNG           BETRIEB              SICHERHEIT        │
│  ┌────────────────┐   ┌────────────────┐   ┌────────────────┐ │
│  │ Code-Assistenten│   │ AIOps         │   │ Bedrohungs-   │ │
│  │ (Copilot)      │   │ (IT-Automatisi-│   │ erkennung     │ │
│  │                │   │  erung)        │   │               │ │
│  │ Code-Review    │   │ Monitoring     │   │ Anomalie-     │ │
│  │                │   │                │   │ erkennung     │ │
│  │ Bug-Erkennung  │   │ Kapazitäts-    │   │               │ │
│  │                │   │ planung        │   │ Malware-      │ │
│  │ Dokumentation  │   │                │   │ erkennung     │ │
│  └────────────────┘   └────────────────┘   └────────────────┘ │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Bereich | KI-Anwendung | Beispiel |
|---------|--------------|----------|
| **Softwareentwicklung** | Code-Generierung, Debugging | GitHub Copilot, Claude |
| **IT-Betrieb (AIOps)** | Automatisierung, Monitoring | Dynatrace, Splunk |
| **IT-Sicherheit** | Bedrohungserkennung | SIEM mit ML, EDR |
| **Support** | Chatbots, Ticket-Klassifikation | ServiceNow, Zendesk |
| **Testen** | Testgenerierung | Selenium + ML |

---

### Generative KI-Tools

| Tool | Typ | Anwendung |
|------|-----|-----------|
| **ChatGPT** | LLM | Texterstellung, Fragen beantworten |
| **Claude** | LLM | Textanalyse, Programmierung |
| **GitHub Copilot** | Code-Assistent | Code-Vervollständigung |
| **DALL-E** | Text-zu-Bild | Bildgenerierung |
| **Midjourney** | Text-zu-Bild | Kreative Bilder |
| **Gemini** | LLM | Multimodal (Text + Bild) |

---

### KI im Kundenservice

```
┌────────────────────────────────────────────────────────────────┐
│                CHATBOT-ARCHITEKTUR                             │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Kunde                Website/App              KI-Backend    │
│   ┌─────┐              ┌─────────┐              ┌─────────┐   │
│   │     │   Frage      │         │   Analyse    │ NLP-    │   │
│   │     │────────────► │ Chatbot │────────────► │ Engine  │   │
│   │     │              │ Widget  │              │         │   │
│   │     │◄────────────│         │◄────────────│ Intent- │   │
│   │     │   Antwort   │         │   Antwort   │ Erkennung│   │
│   └─────┘              └─────────┘              └─────────┘   │
│                                                      │        │
│                                                      ▼        │
│                                               ┌─────────┐     │
│   Bei komplexen Fragen:                       │Wissensbasis│   │
│   Weiterleitung an Menschen                   │ FAQ, Daten │   │
│                                               └─────────┘     │
│                                                               │
└────────────────────────────────────────────────────────────────┘
```

**Vorteile von KI-Chatbots:**
- 24/7 Verfügbarkeit
- Sofortige Antworten
- Kostenersparnis
- Skalierbar

**Grenzen:**
- Komplexe Anfragen
- Empathie bei Beschwerden
- Nicht vorgesehene Szenarien

---

### KI-gestützte Automatisierung

| Automatisierungsart | Beschreibung | Beispiel |
|--------------------|--------------|----------|
| **RPA + KI** | Robotische Prozessautomatisierung mit KI | Rechnungsverarbeitung |
| **Predictive Maintenance** | Vorhersage von Wartungsbedarf | Maschinenüberwachung |
| **Dokumentenverarbeitung** | Automatische Datenextraktion | OCR + NLP |

---

### Vor- und Nachteile von KI-Anwendungen

| Vorteile | Nachteile |
|----------|-----------|
| Effizienzsteigerung | Jobverlust in manchen Bereichen |
| 24/7 Verfügbarkeit | Datenschutzbedenken |
| Kostenersparnis | Hohe Initialkosten |
| Schnellere Verarbeitung | Abhängigkeit von Datenqualität |
| Personalisierung | Intransparenz der Entscheidungen |
| Fehlerreduktion | Bias in Trainingsdaten |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Chatbot** | KI-basierter Assistent für Kundenservice |
| **NLP** | Natural Language Processing (Sprachverarbeitung) |
| **Empfehlungssystem** | KI für personalisierte Vorschläge |
| **AIOps** | KI für IT-Betrieb |
| **RPA** | Robotic Process Automation |
| **Predictive Maintenance** | Vorausschauende Wartung |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Nennen Sie Beispiele für KI im Alltag
- Wie wird KI in der IT eingesetzt?
- Was sind Vor- und Nachteile von KI-Chatbots?

### Wichtig zu merken

- **KI im Alltag:** Sprachassistenten, Empfehlungssysteme, Navigation
- **KI in IT:** Code-Assistenten, AIOps, Security
- **Chatbots:** 24/7, aber begrenzt bei komplexen Anfragen
- **Generative KI:** ChatGPT, Claude, Copilot für Texte und Code

---

## Übungsaufgaben

### Aufgabe 1
Nennen Sie drei Beispiele für KI-Anwendungen im Alltag.

**Lösung:**
1. **Sprachassistenten:** Siri, Alexa, Google Assistant - verstehen Sprache und führen Befehle aus
2. **Empfehlungssysteme:** Netflix, Spotify - schlagen personalisierte Inhalte vor
3. **Navigation:** Google Maps - optimiert Routen und prognostiziert Verkehr

(Weitere: Spam-Filter, Gesichtserkennung, Übersetzer)

### Aufgabe 2
Ein Unternehmen möchte KI für den Kundenservice einsetzen. Nennen Sie zwei Vorteile und zwei Grenzen.

**Lösung:**

**Vorteile:**
1. **24/7 Verfügbarkeit:** Kunden können jederzeit Hilfe erhalten
2. **Schnelle Antworten:** Sofortige Reaktion auf häufige Fragen

**Grenzen:**
1. **Komplexe Anfragen:** Chatbot kann individuelle Probleme nicht lösen
2. **Fehlende Empathie:** Bei Beschwerden ist menschlicher Kontakt besser

### Aufgabe 3
Was ist "AIOps" und wofür wird es eingesetzt?

**Lösung:** **AIOps (Artificial Intelligence for IT Operations)** bezeichnet den Einsatz von KI im IT-Betrieb. Anwendungen:
- Automatisches Monitoring und Alerting
- Ursachenanalyse bei Störungen
- Kapazitätsplanung und -vorhersage
- Automatische Fehlerbehebung

Ziel ist die Automatisierung und Verbesserung des IT-Betriebs durch KI.

---

## Querverweise

- [05-06-01 KI-Grundlagen](./05-06-01-ai-fundamentals.md) - Basiswissen
- [05-06-03 KI-Codeassistenten](./05-06-03-ai-code-assistants.md) - KI in der Entwicklung
- [08-06-01 Serviceanfragen](../../08-business-processes/08-06-service-management/08-06-01-service-requests.md) - Kundenservice
