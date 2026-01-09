# Virtualisierung

## Lernziele

Nach diesem Kapitel solltest du:
- Das Konzept der Virtualisierung erklären können
- Verschiedene Virtualisierungsarten unterscheiden können
- Vorteile und Nachteile kennen
- Hypervisor-Typen verstehen

---

## Kerninhalt

### Was ist Virtualisierung?

**Virtualisierung** ermöglicht es, mehrere virtuelle Computer (VMs) auf einem physischen Computer zu betreiben. Jede VM verhält sich wie ein eigenständiger Computer.

```
┌─────────────────────────────────────────────────────────────────┐
│                    VIRTUALISIERUNG                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Ohne Virtualisierung:        Mit Virtualisierung:             │
│                                                                 │
│  ┌─────────┐                  ┌─────────────────────────────┐  │
│  │ Server 1│                  │       Physischer Server      │  │
│  │ (Physik)│                  │  ┌─────┐ ┌─────┐ ┌─────┐   │  │
│  └─────────┘                  │  │ VM1 │ │ VM2 │ │ VM3 │   │  │
│  ┌─────────┐                  │  │Win- │ │Linux│ │Win- │   │  │
│  │ Server 2│                  │  │dows │ │     │ │dows │   │  │
│  │ (Physik)│                  │  └─────┘ └─────┘ └─────┘   │  │
│  └─────────┘                  │        Hypervisor           │  │
│  ┌─────────┐                  │        Hardware             │  │
│  │ Server 3│                  └─────────────────────────────┘  │
│  │ (Physik)│                                                   │
│  └─────────┘                  → Ein Server statt drei!         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Grundbegriffe

| Begriff | Beschreibung |
|---------|--------------|
| **Host** | Der physische Computer (Gastgeber) |
| **Gast (Guest)** | Die virtuelle Maschine |
| **Hypervisor** | Software, die Virtualisierung ermöglicht |
| **VM (Virtuelle Maschine)** | Simulierter Computer |
| **Snapshot** | Momentaufnahme einer VM |

---

### Hypervisor-Typen

```
┌────────────────────────────────────────────────────────────────┐
│                  HYPERVISOR-TYPEN                              │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  TYP 1 (Bare-Metal)              TYP 2 (Hosted)               │
│                                                                │
│  ┌─────┐ ┌─────┐ ┌─────┐       ┌─────┐ ┌─────┐              │
│  │ VM1 │ │ VM2 │ │ VM3 │       │ VM1 │ │ VM2 │              │
│  └─────┘ └─────┘ └─────┘       └─────┘ └─────┘              │
│  ┌──────────────────────┐      ┌──────────────────────┐      │
│  │     Hypervisor       │      │     Hypervisor       │      │
│  └──────────────────────┘      └──────────────────────┘      │
│  ┌──────────────────────┐      ┌──────────────────────┐      │
│  │      Hardware        │      │   Betriebssystem     │      │
│  └──────────────────────┘      │     (Windows/Linux)  │      │
│                                └──────────────────────┘      │
│  Beispiele:                    ┌──────────────────────┐      │
│  • VMware ESXi                 │      Hardware        │      │
│  • Microsoft Hyper-V           └──────────────────────┘      │
│  • Citrix XenServer                                          │
│                                Beispiele:                     │
│  → Direkt auf Hardware         • VMware Workstation          │
│  → Bessere Performance         • VirtualBox                  │
│                                • Parallels (Mac)             │
│                                                               │
│                                → Auf Betriebssystem          │
│                                → Einfacher zu nutzen         │
│                                                               │
└────────────────────────────────────────────────────────────────┘
```

| Typ | Beschreibung | Beispiele | Einsatz |
|-----|--------------|-----------|---------|
| **Typ 1** | Läuft direkt auf Hardware | VMware ESXi, Hyper-V, XenServer | Rechenzentren, Server |
| **Typ 2** | Läuft auf Betriebssystem | VirtualBox, VMware Workstation | Entwicklung, Test |

---

### Vorteile der Virtualisierung

| Vorteil | Beschreibung |
|---------|--------------|
| **Ressourceneffizienz** | Bessere Auslastung der Hardware |
| **Kostenersparnis** | Weniger physische Server nötig |
| **Isolation** | VMs sind voneinander getrennt |
| **Flexibilität** | Schnell neue VMs erstellen |
| **Snapshots** | Einfache Sicherung und Wiederherstellung |
| **Testumgebungen** | Gefahrloses Testen |
| **Migration** | VMs zwischen Hosts verschiebbar |

---

### Nachteile der Virtualisierung

| Nachteil | Beschreibung |
|----------|--------------|
| **Overhead** | Hypervisor benötigt Ressourcen |
| **Komplexität** | Zusätzliche Verwaltungsschicht |
| **Lizenzkosten** | Hypervisor-Lizenzen können teuer sein |
| **Single Point of Failure** | Host-Ausfall betrifft alle VMs |
| **Performance** | Leicht geringer als bei physischen Servern |

---

### Virtualisierungsarten

| Art | Beschreibung |
|-----|--------------|
| **Server-Virtualisierung** | Mehrere Server auf einem Host |
| **Desktop-Virtualisierung** | Virtuelle Arbeitsplätze (VDI) |
| **Anwendungsvirtualization** | Apps isoliert ausführen |
| **Netzwerk-Virtualisierung** | Virtuelle Netzwerke (VLAN, SDN) |
| **Speicher-Virtualisierung** | Speicher-Pooling |

---

### Container vs. Virtuelle Maschine

```
┌────────────────────────────────────────────────────────────────┐
│               VM vs. CONTAINER                                 │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Virtuelle Maschine              Container                    │
│                                                                │
│  ┌─────┐ ┌─────┐ ┌─────┐       ┌─────┐ ┌─────┐ ┌─────┐      │
│  │App 1│ │App 2│ │App 3│       │App 1│ │App 2│ │App 3│      │
│  ├─────┤ ├─────┤ ├─────┤       └─────┘ └─────┘ └─────┘      │
│  │Gast │ │Gast │ │Gast │       ┌────────────────────────┐    │
│  │ OS  │ │ OS  │ │ OS  │       │   Container-Runtime    │    │
│  └─────┘ └─────┘ └─────┘       │      (Docker)          │    │
│  ┌──────────────────────┐      └────────────────────────┘    │
│  │     Hypervisor       │      ┌────────────────────────┐    │
│  └──────────────────────┘      │     Host-OS            │    │
│  ┌──────────────────────┐      └────────────────────────┘    │
│  │      Hardware        │      ┌────────────────────────┐    │
│  └──────────────────────┘      │      Hardware          │    │
│                                └────────────────────────┘    │
│  + Vollständige Isolation                                     │
│  + Verschiedene OS möglich     + Leichtgewichtig (MB)        │
│  - Ressourcenintensiv (GB)     + Schneller Start             │
│  - Langsamer Start             - Gemeinsames Host-OS         │
│                                                               │
└────────────────────────────────────────────────────────────────┘
```

| Aspekt | VM | Container |
|--------|-----|-----------|
| **Größe** | GB (Gast-OS) | MB |
| **Startzeit** | Minuten | Sekunden |
| **Isolation** | Vollständig | Prozess-Level |
| **OS** | Beliebig | Gemeinsames Kernel |
| **Beispiele** | VirtualBox, VMware | Docker, Podman |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Virtualisierung** | Mehrere virtuelle Computer auf einer Hardware |
| **Hypervisor** | Software, die VMs verwaltet |
| **VM** | Virtuelle Maschine |
| **Host** | Physischer Computer |
| **Gast** | Virtuelle Maschine |
| **Snapshot** | Momentaufnahme einer VM |
| **Container** | Leichtgewichtige Isolation (Docker) |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was ist Virtualisierung?
- Was ist der Unterschied zwischen Typ-1 und Typ-2 Hypervisor?
- Nennen Sie Vorteile der Virtualisierung
- Was ist der Unterschied zwischen VM und Container?

### Wichtig zu merken

- **Typ 1** = direkt auf Hardware (Server), **Typ 2** = auf Betriebssystem (Desktop)
- **Vorteile:** Effizienz, Isolation, Snapshots, Flexibilität
- **Container** = leichtgewichtig, schneller Start, aber gemeinsamer Kernel
- **VM** = vollständige Isolation, eigenes Betriebssystem

---

## Übungsaufgaben

### Aufgabe 1
Was ist der Unterschied zwischen einem Typ-1 und einem Typ-2 Hypervisor?

**Lösung:**
- **Typ 1 (Bare-Metal):** Läuft direkt auf der Hardware ohne Betriebssystem. Beispiele: VMware ESXi, Hyper-V. Bessere Performance, für Server.
- **Typ 2 (Hosted):** Läuft auf einem Betriebssystem wie Windows oder Linux. Beispiele: VirtualBox, VMware Workstation. Einfacher zu nutzen, für Entwicklung.

### Aufgabe 2
Nennen Sie drei Vorteile der Virtualisierung.

**Lösung:**
1. **Ressourceneffizienz:** Bessere Auslastung der Hardware
2. **Kostenersparnis:** Weniger physische Server nötig
3. **Flexibilität:** Schnelles Erstellen und Löschen von VMs

(Weitere: Isolation, Snapshots, einfache Migration)

### Aufgabe 3
Was ist der Unterschied zwischen einer VM und einem Container?

**Lösung:**
| Aspekt | VM | Container |
|--------|-----|-----------|
| **Betriebssystem** | Eigenes Gast-OS | Gemeinsamer Host-Kernel |
| **Größe** | Mehrere GB | Wenige MB |
| **Startzeit** | Minuten | Sekunden |
| **Isolation** | Vollständig | Prozess-Level |

---

## Querverweise

- [05-04-02 Cloud Computing](./05-04-02-cloud-computing.md) - Cloud-Dienste
- [05-04-03 Virtuelle Desktops](./05-04-03-virtual-desktops.md) - VDI
- [05-03-01 Grundlagen Betriebssysteme](../05-03-operating-systems/05-03-01-fundamentals-operating-systems.md) - OS
