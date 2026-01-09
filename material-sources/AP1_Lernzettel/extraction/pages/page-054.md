# Page 54 - 7. Projektmanagement & 7.1 Merkmale & 7.2 Projektplanung (Netzplan)

## 7. Projektmanagement

## 7.1 Merkmale

- Einmaligkeit
- Zielgerichtet
- Zeitlich begrenzt
- Begrenzte Ressourcen
- Komplexität

---

## 7.2 Projektplanung

### Netzplan

Der **Netzplan** ist eine grafische Methode zur Darstellung von Projektabläufen und deren zeitlichen Abhängigkeiten.

**Zentrale Elemente:**

1. Vorgänge
2. Pfeile/Kanten (zeigen Abhängigkeiten)
3. Knoten (Ereignisse)

### Netzplan-Notation

```
┌─────────────────────────┐
│ FAZ              FEZ    │
│ ┌────────┬────────────┐ │
│ │Vorgang │Beschreibung│ │
│ ├────────┼─────┬──────┤ │
│ │ Dauer  │ GP  │  FP  │ │
│ └────────┴─────┴──────┘ │
│ SAZ              SEZ    │
└─────────────────────────┘
```

| Kürzel | Bedeutung |
|--------|-----------|
| **Vorgang** | Vorgangs-ID (A, B, C …) |
| **Dauer** | Dauer in Arbeitstagen |
| **FAZ** | Frühester Anfangszeitpunkt |
| **FEZ** | Frühester Endzeitpunkt |
| **SAZ** | Spätester Anfangszeitpunkt |
| **SEZ** | Spätester Endzeitpunkt |
| **GP** | Gesamtpuffer, GP = SAZ - FAZ oder GP = SEZ - FEZ |

