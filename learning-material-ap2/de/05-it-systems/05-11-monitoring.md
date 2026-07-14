# Monitoring von Systemen

## Lernziele

Nach diesem Kapitel solltest du:
- Zweck von System-Monitoring erklären
- Wichtige Metriken und Begriffe kennen
- Alerting und typische Werkzeuge einordnen

---

## Kerninhalt

**Monitoring** überwacht IT-Systeme **kontinuierlich**, um Auslastung zu erkennen, Störungen früh zu bemerken und die **Verfügbarkeit** sicherzustellen. *(Im Katalog neu.)*

### Typische Metriken

- **Auslastung:** CPU, RAM, Speicherplatz, Netzwerkdurchsatz
- **Verfügbarkeit / Uptime**, Antwortzeiten (Latenz)
- **Fehlerraten**, Anzahl Requests, Warteschlangen

### Bausteine

| Baustein | Aufgabe |
|----------|---------|
| **Metriken** | messbare Kennzahlen über Zeit |
| **Logging** | Ereignisprotokolle (zentral, manipulationssicher) |
| **Alerting** | Benachrichtigung bei Schwellwert-Überschreitung |
| **Dashboards** | Visualisierung (Trends, Status) |

### Aktiv vs. passiv

- **Aktives Monitoring:** System fragt Dienste aktiv ab (z. B. Ping/Health-Check).
- **Passives Monitoring:** Auswertung eintreffender Daten/Logs.

### Werkzeuge

**Prometheus** (Metriken), **Grafana** (Dashboards), **Nagios/Zabbix** (klassisches Monitoring), ELK/Loki (Logs).

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Monitoring** | Kontinuierliche Systemüberwachung |
| **Metrik** | Messbare Kennzahl über Zeit |
| **Alerting** | Benachrichtigung bei Schwellwerten |
| **Uptime/Verfügbarkeit** | Anteil störungsfreier Betriebszeit |

---

## Prüfungstipps

- Zweck (Früherkennung, Verfügbarkeit) und typische **Metriken** (CPU/RAM/Uptime) nennen.
- **Alerting** = Schwellwert → Benachrichtigung; Zusammenhang mit **SLA** (Verfügbarkeit).
- Ein Werkzeug nennen können (z. B. Prometheus/Grafana).

---

## Übungsaufgabe

**Aufgabe:** Nenne drei Metriken, die du an einem Webserver überwachen würdest, und was ein sinnvoller Alert-Schwellwert wäre.

---

## Querverweise

- [05-04 Redundante Systeme](./05-04-redundante-systeme.md)
- [01-07 SLA & SOP](../01-project-management/01-07-sla-sop.md)
