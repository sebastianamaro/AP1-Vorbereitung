# Page 14 - Von-Neumann-Architektur (Fortsetzung) & Bussysteme

## Von-Neumann-Architektur (Fortsetzung)

### Funktionsblöcke (Fortsetzung)

3. **Speicherwerk (Memory - RAM)**
   - **Aufgaben:** Speichert sowohl Daten als auch Programme.

4. **Ein-/Ausgabewerk (IO Unit)**
   - **Aufgaben:** Zuständig für die Ein- und Ausgabe von Daten und die Interaktion mit dem Benutzer.

### Verbindungen (Bussystem)

1. **Kontrollbus / Steuerbus**
   - **Funktion:** Übermittelt Steuersignale zwischen den Funktionsblöcken.

2. **Datenbus**
   - **Funktion:** Transportiert Daten zwischen den Funktionsblöcken.

3. **Adressbus**
   - **Funktion:** Übermittelt die Adressen von Speicherzellen, auf die zugegriffen wird.

### Architektur-Diagramm

```
┌─────┐    ┌────────┐    ┌───────────┐
│ CPU │    │ Memory │    │ Input and │
│     │    │        │    │  output   │
└──┬──┘    └───┬────┘    └─────┬─────┘
   │           │               │
   ├───────────┼───────────────┤  ← Control bus
   ├───────────┼───────────────┤  ← Address bus
   ├───────────┼───────────────┤  ← Data bus
   │           │               │
   └───────────┴───────────────┘
         System bus
```

### Zusammenarbeit bei Lese- und Schreibzugriffen

Bei Lese- und Schreibzugriffen kommuniziert das Steuerwerk mit dem Speicherwerk, um die notwendigen Daten zu erhalten oder zu speichern. Der Adressbus gibt die Speicheradresse an, der Datenbus transportiert die Daten und der Kontrollbus steuert den Ablauf.
