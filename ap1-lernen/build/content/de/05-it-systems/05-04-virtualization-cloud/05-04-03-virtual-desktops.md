# Virtuelle Desktops (VDI)

## Lernziele

Nach diesem Kapitel solltest du:
- Das Konzept virtueller Desktops erklären können
- VDI von traditionellen Arbeitsplätzen unterscheiden können
- Vor- und Nachteile kennen
- Einsatzszenarien beschreiben können

---

## Kerninhalt

### Was sind virtuelle Desktops?

**Virtuelle Desktops (VDI - Virtual Desktop Infrastructure)** ermöglichen es, Arbeitsplatzrechner zentral im Rechenzentrum oder der Cloud zu betreiben. Benutzer greifen über Thin Clients oder beliebige Geräte auf ihren Desktop zu.

```
┌─────────────────────────────────────────────────────────────────┐
│                  VIRTUELLER DESKTOP (VDI)                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │                 RECHENZENTRUM / CLOUD                    │  │
│   │   ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐      │  │
│   │   │Desktop 1│ │Desktop 2│ │Desktop 3│ │Desktop 4│      │  │
│   │   │  (VM)   │ │  (VM)   │ │  (VM)   │ │  (VM)   │      │  │
│   │   └─────────┘ └─────────┘ └─────────┘ └─────────┘      │  │
│   │                    Server / Hypervisor                   │  │
│   └─────────────────────────────────────────────────────────┘  │
│                              │                                  │
│                         ┌────┴────┐                            │
│                         │ Netzwerk│                            │
│                         └────┬────┘                            │
│                              │                                  │
│       ┌──────────────────────┼──────────────────────┐          │
│       │                      │                      │          │
│   ┌───┴───┐            ┌─────┴─────┐          ┌────┴────┐     │
│   │ Thin  │            │  Laptop   │          │ Tablet  │     │
│   │Client │            │  (Home)   │          │         │     │
│   └───────┘            └───────────┘          └─────────┘     │
│   Büro                 Home-Office            Unterwegs        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Terminologie

| Begriff | Beschreibung |
|---------|--------------|
| **VDI** | Virtual Desktop Infrastructure |
| **Thin Client** | Einfaches Endgerät ohne eigene Rechenleistung |
| **Fat Client** | Vollwertiger PC mit lokaler Verarbeitung |
| **DaaS** | Desktop as a Service (Cloud-basierte VDI) |
| **Session-basiert** | Mehrere Benutzer teilen sich ein Server-OS |

---

### VDI-Architektur

```
┌────────────────────────────────────────────────────────────────┐
│                   VDI-ARCHITEKTUR                              │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  ┌────────────────────────────────────────────────────────┐   │
│  │                 Management-Schicht                      │   │
│  │   (Provisioning, Benutzerverwaltung, Monitoring)       │   │
│  └────────────────────────────────────────────────────────┘   │
│                            │                                   │
│  ┌────────────────────────────────────────────────────────┐   │
│  │                 Connection Broker                       │   │
│  │          (Vermittelt Benutzer zu Desktops)             │   │
│  └────────────────────────────────────────────────────────┘   │
│                            │                                   │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐          │
│  │  VDI-Server  │ │  VDI-Server  │ │  VDI-Server  │          │
│  │  (VMs)       │ │  (VMs)       │ │  (VMs)       │          │
│  └──────────────┘ └──────────────┘ └──────────────┘          │
│                            │                                   │
│  ┌────────────────────────────────────────────────────────┐   │
│  │               Shared Storage (SAN/NAS)                  │   │
│  │         (Profile, Daten, VM-Images)                    │   │
│  └────────────────────────────────────────────────────────┘   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Vergleich: Traditionell vs. VDI

| Aspekt | Traditioneller PC | VDI |
|--------|-------------------|-----|
| **Standort der Daten** | Lokal auf PC | Zentral im Rechenzentrum |
| **Hardware** | Vollwertiger PC | Thin Client genügt |
| **Wartung** | Jeder PC einzeln | Zentral, einmal |
| **Sicherheit** | Daten auf Gerät | Daten im RZ, Gerät austauschbar |
| **Zugriff** | Nur am PC | Von überall |
| **Kosten Hardware** | Höher (pro PC) | Niedriger (Thin Clients) |
| **Kosten Infrastruktur** | Niedriger | Höher (Server, Lizenzen) |

---

### Desktop-Bereitstellungsmodelle

| Modell | Beschreibung | Einsatz |
|--------|--------------|---------|
| **Persistent Desktop** | Eigener Desktop pro Benutzer, behält Änderungen | Power-User |
| **Non-Persistent** | Desktop wird bei Abmeldung zurückgesetzt | Standard-Arbeitsplätze |
| **Session-basiert** | Mehrere Benutzer auf einem Server-OS | Callcenter, Schulungen |

---

### Vorteile von VDI

| Vorteil | Beschreibung |
|---------|--------------|
| **Zentrale Verwaltung** | Updates, Software nur einmal installieren |
| **Sicherheit** | Daten bleiben im Rechenzentrum |
| **Flexibilität** | Zugriff von überall, jedem Gerät |
| **BYOD** | Mitarbeiter können eigene Geräte nutzen |
| **Disaster Recovery** | Desktop-Images einfach sicherbar |
| **Längere Hardware-Nutzung** | Thin Clients haben lange Lebensdauer |

---

### Nachteile von VDI

| Nachteil | Beschreibung |
|----------|--------------|
| **Netzwerkabhängigkeit** | Ohne Netzwerk kein Arbeiten |
| **Initiale Kosten** | Server, Lizenzen, Infrastruktur |
| **Komplexität** | Aufwendigere Planung und Betrieb |
| **Latenz** | Bei schlechter Verbindung spürbar |
| **Grafikintensive Apps** | Eingeschränkte GPU-Nutzung |

---

### VDI-Lösungen

| Anbieter | Produkt | Besonderheit |
|----------|---------|--------------|
| **VMware** | Horizon | Marktführer On-Premise |
| **Citrix** | Virtual Apps and Desktops | Session-basiert stark |
| **Microsoft** | Azure Virtual Desktop | Cloud-nativ |
| **Amazon** | WorkSpaces | AWS DaaS |

---

### Desktop as a Service (DaaS)

**DaaS** ist VDI aus der Cloud - der Provider betreibt die gesamte Infrastruktur.

| Aspekt | VDI (On-Premise) | DaaS (Cloud) |
|--------|------------------|--------------|
| **Infrastruktur** | Selbst betrieben | Vom Provider |
| **Kosten** | Investition | Monatliche Gebühr |
| **Skalierung** | Muss geplant werden | Flexibel |
| **Wartung** | Eigene IT | Provider |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **VDI** | Virtual Desktop Infrastructure |
| **Thin Client** | Einfaches Endgerät, zeigt nur Remote-Desktop |
| **DaaS** | Desktop as a Service |
| **Persistent** | Desktop behält Änderungen |
| **Non-Persistent** | Desktop wird zurückgesetzt |
| **Connection Broker** | Vermittelt Benutzer zu VMs |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was ist VDI?
- Was ist der Unterschied zwischen Thin Client und Fat Client?
- Nennen Sie Vor- und Nachteile von VDI
- Was bedeutet DaaS?

### Wichtig zu merken

- **VDI** = Desktops laufen zentral, Benutzer greift remote zu
- **Thin Client** = einfaches Gerät ohne lokale Verarbeitung
- **Vorteile:** Zentrale Verwaltung, Sicherheit, Flexibilität
- **Nachteile:** Netzwerkabhängigkeit, initiale Kosten
- **DaaS** = VDI aus der Cloud

---

## Übungsaufgaben

### Aufgabe 1
Was ist der Unterschied zwischen einem Thin Client und einem Fat Client?

**Lösung:**
- **Thin Client:** Einfaches Endgerät mit minimaler Hardware (kein eigenes Betriebssystem für Anwendungen). Zeigt nur den Remote-Desktop an, alle Berechnungen erfolgen auf dem Server.
- **Fat Client:** Vollwertiger PC mit eigenem Betriebssystem und Anwendungen. Verarbeitung erfolgt lokal.

### Aufgabe 2
Ein Unternehmen mit 500 Mitarbeitern überlegt, auf VDI umzusteigen. Nennen Sie zwei Vorteile und zwei Herausforderungen.

**Lösung:**

**Vorteile:**
1. **Zentrale Verwaltung:** Updates und Software müssen nur einmal im Master-Image installiert werden
2. **Sicherheit:** Daten bleiben im Rechenzentrum, verlorene Geräte sind kein Datenschutz-Problem

**Herausforderungen:**
1. **Initiale Kosten:** Server, Speicher, Lizenzen, Netzwerk-Upgrade erforderlich
2. **Netzwerkabhängigkeit:** Mitarbeiter können ohne Netzwerkverbindung nicht arbeiten

### Aufgabe 3
Was bedeutet "Non-Persistent Desktop" und für welche Szenarien eignet er sich?

**Lösung:** Ein **Non-Persistent Desktop** wird bei jeder Abmeldung auf den Ursprungszustand zurückgesetzt. Änderungen des Benutzers gehen verloren.

Geeignet für:
- **Callcenter:** Standardisierte Arbeitsplätze
- **Schulungen:** Immer gleicher Ausgangszustand
- **Öffentliche Terminals:** Keine Benutzerdaten bleiben zurück
- **Standard-Büroarbeitsplätze:** Wo keine individuellen Anpassungen nötig sind

---

## Querverweise

- [05-04-01 Virtualisierung](./05-04-01-virtualization.md) - Grundlagen
- [05-04-02 Cloud Computing](./05-04-02-cloud-computing.md) - DaaS als Cloud-Service
- [04-01-01 CIA-Triade](../../04-it-security/04-01-protection-goals/04-01-01-cia-triad.md) - Sicherheit durch zentrale Datenhaltung
