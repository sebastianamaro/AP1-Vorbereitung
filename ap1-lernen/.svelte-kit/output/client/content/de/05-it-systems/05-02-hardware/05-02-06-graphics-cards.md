# Grafikkarten (GPU)

## Lernziele

Nach diesem Kapitel solltest du:
- Den Unterschied zwischen CPU und GPU kennen
- Den Aufbau einer Grafikkarte verstehen
- Wichtige Kennzahlen erklären können
- Einsatzgebiete von GPUs kennen

---

## Kerninhalt

### Was ist eine Grafikkarte?

Eine **Grafikkarte** (GPU - Graphics Processing Unit) ist spezialisiert auf parallele Berechnungen für Grafikausgabe und andere rechenintensive Aufgaben.

```
┌─────────────────────────────────────────────────────────────────┐
│                    GRAFIKKARTE                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                      GPU                                 │   │
│  │           (Grafikprozessor)                              │   │
│  │                                                          │   │
│  │   ┌─────┐┌─────┐┌─────┐┌─────┐┌─────┐┌─────┐          │   │
│  │   │Core ││Core ││Core ││Core ││Core ││Core │  ...      │   │
│  │   └─────┘└─────┘└─────┘└─────┘└─────┘└─────┘          │   │
│  │              Tausende parallele Kerne                    │   │
│  └─────────────────────────────────────────────────────────┘   │
│                           │                                     │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │                   VRAM (Grafikspeicher)                  │   │
│  │              (GDDR6, HBM2 - 4-24 GB)                     │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌───────────────┐  ┌───────────────┐  ┌───────────────┐      │
│  │    HDMI       │  │ DisplayPort   │  │     DVI       │      │
│  │  Anschluss    │  │  Anschluss    │  │  Anschluss    │      │
│  └───────────────┘  └───────────────┘  └───────────────┘      │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### CPU vs. GPU

| Aspekt | CPU | GPU |
|--------|-----|-----|
| **Kerne** | Wenige (4-64) | Viele (1.000-10.000+) |
| **Aufgabe** | Sequenzielle Aufgaben | Parallele Aufgaben |
| **Optimiert für** | Komplexe Einzelaufgaben | Einfache Massenaufgaben |
| **Beispiel** | Programmlogik | Pixelberechnungen |

```
┌────────────────────────────────────────────────────────────────┐
│                    CPU vs. GPU                                 │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  CPU (wenige starke Kerne)        GPU (viele einfache Kerne)  │
│                                                                │
│  ┌────────┐ ┌────────┐           ┌─┐┌─┐┌─┐┌─┐┌─┐┌─┐┌─┐┌─┐   │
│  │        │ │        │           │ ││ ││ ││ ││ ││ ││ ││ │   │
│  │ Kern 1 │ │ Kern 2 │           ├─┤├─┤├─┤├─┤├─┤├─┤├─┤├─┤   │
│  │        │ │        │           │ ││ ││ ││ ││ ││ ││ ││ │   │
│  └────────┘ └────────┘           ├─┤├─┤├─┤├─┤├─┤├─┤├─┤├─┤   │
│                                   │ ││ ││ ││ ││ ││ ││ ││ │   │
│  Schnell bei                      └─┘└─┘└─┘└─┘└─┘└─┘└─┘└─┘   │
│  komplexen Aufgaben                                           │
│                                   Schnell bei vielen          │
│                                   gleichen Aufgaben           │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Integrierte vs. Dedizierte Grafik

| Typ | Beschreibung | Verwendung |
|-----|--------------|------------|
| **Integriert (iGPU)** | In CPU eingebaut (Intel UHD, AMD APU) | Office, Video |
| **Dediziert (dGPU)** | Separate Karte (NVIDIA, AMD) | Gaming, 3D, KI |

**Vorteile integrierte Grafik:**
- Kein extra Stromverbrauch
- Kostengünstig
- Platzsparend

**Vorteile dedizierte Grafik:**
- Hohe Leistung
- Eigener Grafikspeicher (VRAM)
- Für anspruchsvolle Aufgaben

---

### Wichtige Kennzahlen

| Kennzahl | Beschreibung | Beispiel |
|----------|--------------|----------|
| **VRAM** | Video-RAM (Grafikspeicher) | 8 GB GDDR6 |
| **Takt** | Geschwindigkeit der GPU | 1.800 MHz |
| **CUDA-Kerne** | Rechenkerne (NVIDIA) | 4.352 |
| **Stream-Prozessoren** | Rechenkerne (AMD) | 2.560 |
| **TDP** | Stromverbrauch | 250 Watt |
| **Speicherbandbreite** | Datenrate zum VRAM | 448 GB/s |

---

### Grafikspeicher (VRAM)

| Typ | Beschreibung | Verwendung |
|-----|--------------|------------|
| **GDDR6** | Standard für Gaming | Aktuelle Grafikkarten |
| **GDDR6X** | Schnelleres GDDR6 | High-End NVIDIA |
| **HBM2/HBM3** | Sehr schnell, gestapelt | Profi-/KI-Karten |

**VRAM-Empfehlung:**
- **4-6 GB:** Full HD Gaming
- **8-12 GB:** WQHD Gaming, Bildbearbeitung
- **16+ GB:** 4K Gaming, 3D-Rendering, KI

---

### Einsatzgebiete

| Einsatzgebiet | Anforderung |
|---------------|-------------|
| **Büro/Office** | Integrierte Grafik ausreichend |
| **Gaming** | Dedizierte Grafikkarte |
| **Videobearbeitung** | GPU-Beschleunigung |
| **3D-Rendering** | Hoher VRAM, viele Kerne |
| **KI/Machine Learning** | CUDA-Kerne, Tensor-Kerne |
| **CAD** | Profi-Karten (Quadro, Radeon Pro) |

---

### Schnittstellen

| Schnittstelle | Beschreibung |
|---------------|--------------|
| **PCIe x16** | Anschluss am Mainboard |
| **HDMI** | Für Monitore und TVs |
| **DisplayPort** | Für Gaming-Monitore |
| **USB-C/Thunderbolt** | Für VR und neue Monitore |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **GPU** | Graphics Processing Unit |
| **VRAM** | Video RAM (Grafikspeicher) |
| **iGPU** | Integrierte Grafik |
| **dGPU** | Dedizierte (separate) Grafikkarte |
| **CUDA** | NVIDIA Parallel-Architektur |
| **GDDR** | Graphics DDR (Speichertyp) |
| **TDP** | Thermal Design Power |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was ist der Unterschied zwischen CPU und GPU?
- Wann ist eine dedizierte Grafikkarte sinnvoll?
- Was ist VRAM?

### Wichtig zu merken

- **GPU** = viele parallele Kerne für Grafikberechnungen
- **iGPU** = integriert, für Office ausreichend
- **dGPU** = dediziert, für Gaming/3D/KI nötig
- **VRAM** = eigener Speicher der Grafikkarte

---

## Übungsaufgaben

### Aufgabe 1
Was ist der Hauptunterschied zwischen CPU und GPU?

**Lösung:**
- **CPU:** Wenige leistungsstarke Kerne, optimiert für komplexe sequenzielle Aufgaben
- **GPU:** Viele einfache Kerne, optimiert für einfache parallele Aufgaben (wie Pixelberechnungen)

### Aufgabe 2
Ein Mitarbeiter benötigt einen PC für Office-Anwendungen und gelegentlich Videokonferenzen. Braucht er eine dedizierte Grafikkarte?

**Lösung:** **Nein**, für Office-Anwendungen und Videokonferenzen reicht eine **integrierte Grafik** (iGPU) völlig aus. Eine dedizierte Grafikkarte wäre nur bei Gaming, 3D-Anwendungen oder Videobearbeitung sinnvoll.

### Aufgabe 3
Was bedeutet "8 GB VRAM" bei einer Grafikkarte?

**Lösung:** **VRAM (Video RAM)** ist der eigene Arbeitsspeicher der Grafikkarte. 8 GB VRAM bedeutet, dass die Grafikkarte 8 Gigabyte Speicher für Texturen, Framebuffer und andere Grafikdaten zur Verfügung hat. Mehr VRAM ist wichtig für höhere Auflösungen und detaillierte Texturen.

---

## Querverweise

- [05-02-01 Prozessoren](./05-02-01-processors.md) - CPU
- [05-02-05 Schnittstellen](./05-02-05-interfaces.md) - PCIe, HDMI, DisplayPort
- [05-06-01 KI-Grundlagen](../05-06-artificial-intelligence/05-06-01-ai-fundamentals.md) - GPU für KI
