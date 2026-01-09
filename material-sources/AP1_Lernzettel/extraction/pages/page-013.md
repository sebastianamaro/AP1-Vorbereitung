# Page 13 - Harvard-Architektur (Vor-/Nachteile) & Von-Neumann-Architektur

## Harvard-Architektur (Fortsetzung)

### Vorteile und Nachteile

| Vorteile | Nachteile |
|----------|-----------|
| Höhere Geschwindigkeit | Komplexere Struktur |
| Weniger Zugriffskonflikte | Höherer Hardwareaufwand |
| Bessere Sicherheit | Geringere Flexibilität |

### Anwendungsbereiche

Die Harvard-Architektur findet häufig Anwendung in **eingebetteten Systemen** und **Mikrocontrollern**, wo Effizienz und Geschwindigkeit entscheidend sind.

---

## Von-Neumann-Architektur

### Funktionsblöcke

1. **Rechenwerk (ALU - Arithmetical Logical Unit)**
   - **Aufgaben:** Führt arithmetische und logische Operationen durch.

2. **Leit- & Steuerwerk (CU - Control Unit)**
   - **Aufgaben:** Kontrolliert den Ablauf der Befehle.

3. **Speicherwerk (Memory - RAM)**
   - Gemeinsamer Speicher für Daten und Programme
   - Daten und Befehle werden über denselben Bus übertragen

### Architektur-Diagramm
```
┌─────────────┐
│ Steuerwerk  │
└──────┬──────┘
       │
   ┌───┴───┐
   │ Daten │
   └───┬───┘
       │
┌──────┴──────┐
│  Befehle    │
└──────┬──────┘
       │
┌──────┴──────┐
│ Rechenwerke │
└─────────────┘
```
