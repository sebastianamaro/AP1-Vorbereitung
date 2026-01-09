# Prozessoren (CPU)

## Lernziele

Nach diesem Kapitel solltest du:
- Den Aufbau eines Prozessors kennen
- Die Funktionsweise erklären können
- Wichtige Kennzahlen verstehen
- Unterschiede zwischen Prozessortypen kennen

---

## Kerninhalt

### Was ist ein Prozessor?

Der **Prozessor** (CPU - Central Processing Unit) ist das "Gehirn" des Computers. Er führt die Befehle von Programmen aus und verarbeitet Daten.

```
┌─────────────────────────────────────────────────────────────────┐
│                        CPU                                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    STEUERWERK                            │   │
│  │         Holt, dekodiert und steuert Befehle              │   │
│  └─────────────────────────────────────────────────────────┘   │
│                           │                                     │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    RECHENWERK (ALU)                      │   │
│  │       Führt arithmetische und logische Operationen aus   │   │
│  └─────────────────────────────────────────────────────────┘   │
│                           │                                     │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    REGISTER                              │   │
│  │            Sehr schneller Zwischenspeicher               │   │
│  └─────────────────────────────────────────────────────────┘   │
│                           │                                     │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                    CACHE                                 │   │
│  │              Schneller Pufferspeicher                    │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Hauptkomponenten

| Komponente | Funktion |
|------------|----------|
| **Steuerwerk (Control Unit)** | Holt Befehle aus dem Speicher, dekodiert sie, steuert Ablauf |
| **Rechenwerk (ALU)** | Führt arithmetische (+, -, ×, ÷) und logische (AND, OR, NOT) Operationen aus |
| **Register** | Sehr schnelle, kleine Speicher direkt in der CPU |
| **Cache** | Schneller Zwischenspeicher zwischen CPU und RAM |

---

### Der Befehlszyklus

Die CPU arbeitet nach dem **Fetch-Decode-Execute**-Zyklus:

```
┌────────────────────────────────────────────────────────────────┐
│               FETCH - DECODE - EXECUTE                         │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   1. FETCH (Holen)                                             │
│      ┌─────────┐                                               │
│      │ Befehl  │ ◄─────────── aus dem Speicher laden          │
│      │ holen   │                                               │
│      └────┬────┘                                               │
│           │                                                    │
│           ▼                                                    │
│   2. DECODE (Dekodieren)                                       │
│      ┌─────────┐                                               │
│      │ Befehl  │ ◄─────────── Was soll getan werden?          │
│      │ inter-  │                                               │
│      │ pretier.│                                               │
│      └────┬────┘                                               │
│           │                                                    │
│           ▼                                                    │
│   3. EXECUTE (Ausführen)                                       │
│      ┌─────────┐                                               │
│      │ Befehl  │ ◄─────────── Berechnung durchführen          │
│      │ ausfüh- │                                               │
│      │ ren     │                                               │
│      └────┬────┘                                               │
│           │                                                    │
│           ▼                                                    │
│      Zurück zu 1.                                              │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Wichtige Kennzahlen

| Kennzahl | Beschreibung | Beispiel |
|----------|--------------|----------|
| **Taktfrequenz** | Operationen pro Sekunde | 3,5 GHz |
| **Kerne (Cores)** | Unabhängige Recheneinheiten | 8 Kerne |
| **Threads** | Logische Prozessoren (Hyper-Threading) | 16 Threads |
| **Cache** | Zwischenspeicher (L1, L2, L3) | 32 MB L3 |
| **TDP** | Thermal Design Power (Abwärme) | 65 Watt |
| **Architektur** | Befehlssatz | x86-64, ARM |

---

### Cache-Hierarchie

```
┌────────────────────────────────────────────────────────────────┐
│                    CACHE-HIERARCHIE                            │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   CPU ◄──► L1 Cache ◄──► L2 Cache ◄──► L3 Cache ◄──► RAM      │
│                                                                │
│   ┌─────────────────────────────────────────────────────────┐ │
│   │  Cache  │ Größe      │ Geschwindigkeit │ Preis          │ │
│   │─────────│────────────│─────────────────│────────────────│ │
│   │   L1    │ 32-64 KB   │ Sehr schnell    │ Sehr teuer     │ │
│   │   L2    │ 256-512 KB │ Schnell         │ Teuer          │ │
│   │   L3    │ 8-64 MB    │ Mittel          │ Mittel         │ │
│   │   RAM   │ 8-64 GB    │ Langsam*        │ Günstig        │ │
│   └─────────────────────────────────────────────────────────┘ │
│                                                                │
│   * Relativ zur CPU                                            │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Prozessor-Architekturen

| Architektur | Beschreibung | Verwendung |
|-------------|--------------|------------|
| **x86-64** | CISC, 64-Bit, Intel/AMD | Desktop, Server |
| **ARM** | RISC, energieeffizient | Smartphones, Tablets, Apple M-Chips |
| **RISC-V** | Open-Source RISC | IoT, Embedded |

#### CISC vs. RISC

| Aspekt | CISC | RISC |
|--------|------|------|
| **Komplexität** | Komplexe Befehle | Einfache Befehle |
| **Beispiel** | x86 (Intel, AMD) | ARM, RISC-V |
| **Befehle** | Viele, unterschiedliche Länge | Wenige, feste Länge |
| **Energieverbrauch** | Höher | Niedriger |

---

### Mehrkernprocessors

Moderne CPUs haben mehrere **Kerne (Cores)**, die parallel arbeiten können:

```
┌────────────────────────────────────────────────────────────────┐
│                 MEHRKERN-PROZESSOR                             │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐     │
│   │  Kern 1  │  │  Kern 2  │  │  Kern 3  │  │  Kern 4  │     │
│   │  L1/L2   │  │  L1/L2   │  │  L1/L2   │  │  L1/L2   │     │
│   └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘     │
│        │             │             │             │            │
│        └─────────────┴──────┬──────┴─────────────┘            │
│                             │                                  │
│                      ┌──────┴──────┐                          │
│                      │  L3 Cache   │                          │
│                      │ (gemeinsam) │                          │
│                      └─────────────┘                          │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

**Hyper-Threading (SMT):** Ein physischer Kern kann zwei Threads gleichzeitig verarbeiten → 4 Kerne = 8 Threads

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **CPU** | Central Processing Unit |
| **ALU** | Arithmetic Logic Unit (Rechenwerk) |
| **Cache** | Schneller Zwischenspeicher |
| **Taktfrequenz** | Geschwindigkeit in GHz |
| **Kern** | Unabhängige Recheneinheit |
| **Thread** | Logischer Prozessor |
| **TDP** | Thermal Design Power |
| **CISC** | Complex Instruction Set Computer |
| **RISC** | Reduced Instruction Set Computer |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Aus welchen Komponenten besteht eine CPU?
- Was ist der Unterschied zwischen Kern und Thread?
- Was ist Cache und wozu dient er?
- Erklären Sie den Befehlszyklus

### Wichtig zu merken

- **CPU = Steuerwerk + Rechenwerk + Register**
- **Befehlszyklus:** Fetch → Decode → Execute
- **Cache-Hierarchie:** L1 < L2 < L3 (schnell → langsamer)
- **Mehr Kerne** = Mehr Parallelität

---

## Übungsaufgaben

### Aufgabe 1
Nennen Sie die drei Hauptkomponenten einer CPU.

**Lösung:**
1. **Steuerwerk (Control Unit)** - Holt und dekodiert Befehle
2. **Rechenwerk (ALU)** - Führt Berechnungen durch
3. **Register** - Speichern Zwischenergebnisse

### Aufgabe 2
Was ist der Unterschied zwischen einem Kern und einem Thread?

**Lösung:**
- **Kern (Core):** Physische, unabhängige Recheneinheit in der CPU
- **Thread:** Logischer Prozessor, der durch Hyper-Threading/SMT entsteht

Ein 4-Kern-Prozessor mit Hyper-Threading hat 4 physische Kerne, aber 8 Threads.

### Aufgabe 3
Wozu dient der Cache und welche Cache-Stufen gibt es?

**Lösung:** Der **Cache** ist ein schneller Zwischenspeicher zwischen CPU und RAM, der häufig benötigte Daten vorhält.

Cache-Stufen:
- **L1:** Sehr schnell, sehr klein (32-64 KB), pro Kern
- **L2:** Schnell, klein (256-512 KB), pro Kern
- **L3:** Mittelschnell, größer (8-64 MB), gemeinsam für alle Kerne

---

## Querverweise

- [05-02-02 Speicher (RAM)](./05-02-02-memory-ram.md) - Arbeitsspeicher
- [05-02-06 Grafikkarten](./05-02-06-graphics-cards.md) - GPU vs. CPU
- [05-03-01 Betriebssysteme](../05-03-operating-systems/05-03-01-fundamentals-operating-systems.md) - Prozessverwaltung
