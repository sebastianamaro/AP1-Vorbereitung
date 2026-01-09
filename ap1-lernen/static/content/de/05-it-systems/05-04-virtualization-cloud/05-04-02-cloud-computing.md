# Cloud Computing

## Lernziele

Nach diesem Kapitel solltest du:
- Cloud Computing definieren können
- Die Service-Modelle (IaaS, PaaS, SaaS) unterscheiden können
- Deployment-Modelle kennen
- Vor- und Nachteile bewerten können

---

## Kerninhalt

### Was ist Cloud Computing?

**Cloud Computing** bezeichnet die Bereitstellung von IT-Ressourcen (Rechenleistung, Speicher, Anwendungen) über das Internet, die nach Bedarf genutzt und bezahlt werden.

```
┌─────────────────────────────────────────────────────────────────┐
│                    CLOUD COMPUTING                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Traditionell (On-Premise)       Cloud Computing              │
│                                                                 │
│   ┌─────────────────────┐        ┌─────────────────────┐      │
│   │  Eigenes            │        │      ☁ CLOUD ☁      │      │
│   │  Rechenzentrum      │        │                     │      │
│   │  ┌───┐ ┌───┐ ┌───┐ │        │   ┌───┐┌───┐┌───┐  │      │
│   │  │Srv│ │Srv│ │Srv│ │        │   │   ││   ││   │  │      │
│   │  └───┘ └───┘ └───┘ │        │   └───┘└───┘└───┘  │      │
│   └─────────────────────┘        └─────────────────────┘      │
│                                           ↕                    │
│   • Hohe Investition              ┌──────────────────┐        │
│   • Selbst verwalten              │   🌐 Internet    │        │
│   • Fixkosten                     └──────────────────┘        │
│                                           ↕                    │
│                                   ┌──────────────────┐        │
│                                   │    Unternehmen   │        │
│                                   └──────────────────┘        │
│                                                                │
│                                   • Keine Investition         │
│                                   • Provider verwaltet        │
│                                   • Pay-per-Use              │
│                                                                │
└─────────────────────────────────────────────────────────────────┘
```

---

### NIST-Definition: Merkmale von Cloud Computing

| Merkmal | Beschreibung |
|---------|--------------|
| **On-Demand Self-Service** | Ressourcen selbst bei Bedarf buchen |
| **Broad Network Access** | Zugriff über Internet von überall |
| **Resource Pooling** | Ressourcen werden zwischen Kunden geteilt |
| **Rapid Elasticity** | Schnelle Skalierung nach oben/unten |
| **Measured Service** | Bezahlung nach Nutzung |

---

### Service-Modelle (as-a-Service)

```
┌────────────────────────────────────────────────────────────────┐
│                   SERVICE-MODELLE                              │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  On-Premise    IaaS         PaaS         SaaS                 │
│  (Eigenes RZ)  Infrastruktur Plattform   Software            │
│                                                                │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐ ┌──────────┐        │
│  │Anwendung │ │Anwendung │ │Anwendung │ │██████████│ ←Cloud │
│  ├──────────┤ ├──────────┤ ├──────────┤ │██████████│        │
│  │Daten     │ │Daten     │ │██████████│ │██████████│        │
│  ├──────────┤ ├──────────┤ │██████████│ │██████████│        │
│  │Runtime   │ │Runtime   │ │██████████│ │██████████│        │
│  ├──────────┤ ├──────────┤ │██████████│ │██████████│        │
│  │Middleware│ │Middleware│ │██████████│ │██████████│        │
│  ├──────────┤ ├──────────┤ │██████████│ │██████████│        │
│  │OS        │ │██████████│ │██████████│ │██████████│        │
│  ├──────────┤ │██████████│ │██████████│ │██████████│        │
│  │Virtual.  │ │██████████│ │██████████│ │██████████│        │
│  ├──────────┤ │██████████│ │██████████│ │██████████│        │
│  │Server    │ │██████████│ │██████████│ │██████████│        │
│  ├──────────┤ │██████████│ │██████████│ │██████████│        │
│  │Storage   │ │██████████│ │██████████│ │██████████│        │
│  ├──────────┤ │██████████│ │██████████│ │██████████│        │
│  │Netzwerk  │ │██████████│ │██████████│ │██████████│        │
│  └──────────┘ └──────────┘ └──────────┘ └──────────┘        │
│                                                                │
│  ████ = Vom Cloud-Provider verwaltet                          │
│  Leer = Vom Kunden verwaltet                                  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Modell | Vollständiger Name | Beschreibung | Beispiele |
|--------|-------------------|--------------|-----------|
| **IaaS** | Infrastructure as a Service | Virtuelle Hardware (Server, Speicher, Netzwerk) | AWS EC2, Azure VMs, Google Compute |
| **PaaS** | Platform as a Service | Entwicklungsplattform (OS, Runtime, Middleware) | Azure App Service, Heroku, Google App Engine |
| **SaaS** | Software as a Service | Fertige Anwendungen | Microsoft 365, Google Workspace, Salesforce |

---

### Deployment-Modelle

```
┌────────────────────────────────────────────────────────────────┐
│                 DEPLOYMENT-MODELLE                             │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  PUBLIC CLOUD              PRIVATE CLOUD                      │
│  ┌──────────────────┐     ┌──────────────────┐               │
│  │ ☁☁☁☁☁☁☁☁☁☁☁☁ │     │ ☁☁☁☁☁☁☁☁☁☁☁☁ │               │
│  │ Öffentlich       │     │ Nur für ein      │               │
│  │ für alle         │     │ Unternehmen      │               │
│  └──────────────────┘     └──────────────────┘               │
│                                                                │
│  HYBRID CLOUD              MULTI-CLOUD                        │
│  ┌──────────────────┐     ┌──────────────────┐               │
│  │ ☁☁☁☁ ←→ 🏢     │     │ ☁AWS ☁Azure     │               │
│  │ Kombination aus  │     │ ☁Google          │               │
│  │ Public + Private │     │ Mehrere Provider │               │
│  └──────────────────┘     └──────────────────┘               │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Modell | Beschreibung | Vorteile |
|--------|--------------|----------|
| **Public Cloud** | Öffentlich, mehrere Kunden | Günstig, skalierbar |
| **Private Cloud** | Exklusiv für ein Unternehmen | Kontrolle, Sicherheit |
| **Hybrid Cloud** | Kombination Public + Private | Flexibilität |
| **Multi-Cloud** | Mehrere Cloud-Anbieter | Keine Abhängigkeit |

---

### Vorteile von Cloud Computing

| Vorteil | Beschreibung |
|---------|--------------|
| **Skalierbarkeit** | Ressourcen nach Bedarf hoch-/runterskalieren |
| **Kosteneffizienz** | Keine Investitionen, Pay-per-Use |
| **Verfügbarkeit** | Weltweiter Zugriff, hohe Uptime |
| **Wartungsfreiheit** | Provider kümmert sich um Hardware |
| **Schnelle Bereitstellung** | Neue Ressourcen in Minuten |
| **Disaster Recovery** | Geo-redundante Backups |

---

### Nachteile und Risiken

| Nachteil | Beschreibung |
|----------|--------------|
| **Abhängigkeit** | Vendor Lock-In, Internetabhängigkeit |
| **Datenschutz** | Daten bei Dritten (Compliance beachten) |
| **Kontrolle** | Weniger Kontrolle über Infrastruktur |
| **Kosten** | Bei hoher Nutzung teurer als On-Premise |
| **Latenz** | Höhere Verzögerung als lokale Systeme |
| **Sicherheit** | Geteilte Infrastruktur |

---

### Cloud-Anbieter

| Anbieter | Dienst | Besonderheit |
|----------|--------|--------------|
| **Amazon** | AWS (Amazon Web Services) | Marktführer |
| **Microsoft** | Azure | Integration mit Microsoft-Produkten |
| **Google** | Google Cloud Platform | KI/ML-Dienste |
| **Deutsche Telekom** | Open Telekom Cloud | Deutscher Anbieter |
| **IONOS** | IONOS Cloud | DSGVO-konform |

---

### Cloud und Datenschutz

| Aspekt | Wichtig |
|--------|---------|
| **Serverstandort** | EU-Server für DSGVO-Konformität bevorzugen |
| **Auftragsverarbeitung** | AVV (Auftragsverarbeitungsvertrag) abschließen |
| **Verschlüsselung** | Daten verschlüsselt übertragen und speichern |
| **Zertifizierungen** | ISO 27001, C5-Testat prüfen |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Cloud Computing** | IT-Ressourcen über das Internet |
| **IaaS** | Infrastructure as a Service |
| **PaaS** | Platform as a Service |
| **SaaS** | Software as a Service |
| **Public Cloud** | Öffentliche Cloud für alle |
| **Private Cloud** | Exklusive Cloud für ein Unternehmen |
| **Hybrid Cloud** | Kombination aus Public und Private |
| **Pay-per-Use** | Bezahlung nach Nutzung |
| **Skalierbarkeit** | Anpassung der Ressourcen nach Bedarf |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was ist Cloud Computing?
- Erklären Sie IaaS, PaaS, SaaS
- Was ist der Unterschied zwischen Public und Private Cloud?
- Nennen Sie Vor- und Nachteile von Cloud Computing

### Wichtig zu merken

- **IaaS** = virtuelle Hardware (Server, Storage)
- **PaaS** = Entwicklungsplattform
- **SaaS** = fertige Software (Microsoft 365)
- **Hybrid Cloud** = Kombination für Flexibilität
- **DSGVO:** Serverstandort und AVV beachten!

---

## Übungsaufgaben

### Aufgabe 1
Erklären Sie den Unterschied zwischen IaaS, PaaS und SaaS mit je einem Beispiel.

**Lösung:**
| Modell | Beschreibung | Beispiel |
|--------|--------------|----------|
| **IaaS** | Virtuelle Infrastruktur (Server, Speicher) | AWS EC2 - virtuelle Server |
| **PaaS** | Plattform für Entwicklung | Heroku - App-Hosting |
| **SaaS** | Fertige Anwendung | Microsoft 365 - Office-Programme |

### Aufgabe 2
Ein Unternehmen möchte sensible Kundendaten in der Cloud speichern, aber auch öffentliche Cloud-Dienste nutzen. Welches Deployment-Modell empfehlen Sie?

**Lösung:** **Hybrid Cloud**

Begründung:
- Sensible Daten in der **Private Cloud** für Kontrolle und Compliance
- Nicht-sensible Dienste in der **Public Cloud** für Kosteneffizienz
- Kombination beider Welten für Flexibilität

### Aufgabe 3
Nennen Sie drei Vorteile und zwei Nachteile von Cloud Computing.

**Lösung:**

**Vorteile:**
1. Skalierbarkeit - Ressourcen nach Bedarf
2. Kosteneffizienz - keine Investitionen, Pay-per-Use
3. Wartungsfreiheit - Provider verwaltet Hardware

**Nachteile:**
1. Abhängigkeit - Vendor Lock-In, Internetverbindung nötig
2. Datenschutz - Daten bei Dritten, DSGVO-Compliance beachten

---

## Querverweise

- [05-04-01 Virtualisierung](./05-04-01-virtualization.md) - Grundlage für Cloud
- [05-04-03 Virtuelle Desktops](./05-04-03-virtual-desktops.md) - Desktop as a Service
- [03-01-01 DSGVO-Grundsätze](../../03-data-protection/03-01-fundamentals/03-01-01-gdpr-principles.md) - Datenschutz in der Cloud
