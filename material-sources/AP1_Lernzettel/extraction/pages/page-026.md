# Page 26 - Strukturierte Verkabelung (Fortsetzung) & 2.8 USV

## Vorteile der strukturierten Verkabelung

- **Zukunftssicherheit:** Unterstützt neue Technologien durch standardisierte Infrastruktur
- **Flexibilität:** Anpassbar an verschiedene Netzwerkarchitekturen
- **Einfache Wartung:** Klare Struktur erleichtert Fehlersuche und Erweiterungen
- **Höhere Übertragungsgeschwindigkeiten:** Optimiert für moderne Netzwerke (Gigabit-Ethernet, PoE)

### Aufbau der strukturierten Verkabelung (Diagramm)

```
                    Primär (Glasfaser)
    ┌─────────────────────┬─────────────────────┐
    │                     │                     │
    │      Gebäude A      │      Gebäude B      │
    │                     │                     │
    │  ┌─────────────┐    │    ┌─────────────┐  │
    │  │   Tertiär   │    │    │   Tertiär   │  │
    │  │ C1,C2 (Kupfer)   │    │ B1,B2 (Kupfer)  │
    │  │ Etagenverteiler  │    │ Etagenverteiler │
    │  │ Layer 3 Switch   │    │ Layer 3 Switch  │
    │  └──────┬──────┘    │    └──────┬──────┘  │
    │         │Sekundär   │           │Sekundär │
    │         │(Kupfer/   │           │(Kupfer/ │
    │         │Glasfaser) │           │Glasfaser)│
    │  ┌──────┴──────┐    │    ┌──────┴──────┐  │
    │  │   Tertiär   │    │    │   Tertiär   │  │
    │  │ C3,C4       │    │    │ B3,B4       │  │
    │  └──────┬──────┘    │    └──────┬──────┘  │
    │         │           │           │         │
    │  Gebäudeverteiler   │    Gebäudeverteiler │
    │  Layer 3 Switch/    │    Layer 3 Switch/  │
    │  Router             │    Router           │
    └─────────┬───────────┴───────────┬─────────┘
              │       Glasfaser       │
              └───────────┬───────────┘
                          │
                 Standortverteiler
                      Router
                          │
                    Internet/Provider
```

---

## 2.8 USV (Unterbrechungsfreie Stromversorgung)

Eine **USV** (Unterbrechungsfreie Stromversorgung) ist ein System, das bei Stromausfällen oder -schwankungen die Stromversorgung für angeschlossene Geräte aufrechterhält. Sie schützt vor Datenverlust, Hardware-Schäden und Systemausfällen.

### Funktionen einer USV

- Schutz vor Stromausfällen, Spannungsspitzen und -einbrüchen
- Überbrückung von kurzen Netzausfällen
- Ermöglicht geordnetes Herunterfahren kritischer Systeme
- Filterung von Netzstörungen (z. B. Frequenzschwankungen)

