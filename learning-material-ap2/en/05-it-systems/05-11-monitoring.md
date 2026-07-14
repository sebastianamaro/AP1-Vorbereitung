# System Monitoring

## Learning Objectives

After this chapter you should be able to:
- Explain the purpose of system monitoring
- Know important metrics and terms
- Classify alerting and typical tools

---

## Core Content

**Monitoring** watches IT systems **continuously** in order to detect load, notice faults early and ensure **availability**. *(New in the catalogue.)*

### Typical Metrics

- **Load:** CPU, RAM, storage space, network throughput
- **Availability / uptime**, response times (latency)
- **Error rates**, number of requests, queues

### Building Blocks

| Building block | Task |
|----------------|------|
| **Metrics** | measurable key figures over time |
| **Logging** | event logs (central, tamper-proof) |
| **Alerting** | notification when a threshold is exceeded |
| **Dashboards** | visualization (trends, status) |

### Active vs. passive

- **Active monitoring:** the system actively queries services (e.g. ping/health check).
- **Passive monitoring:** evaluation of incoming data/logs.

### Tools

**Prometheus** (metrics), **Grafana** (dashboards), **Nagios/Zabbix** (classic monitoring), ELK/Loki (logs).

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Monitoring** | Continuous system surveillance |
| **Metric** | Measurable key figure over time |
| **Alerting** | Notification on thresholds |
| **Uptime/Availability** | Share of fault-free operating time |

---

## Exam Tips

- Name the purpose (early detection, availability) and typical **metrics** (CPU/RAM/uptime).
- **Alerting** = threshold → notification; connection with **SLA** (availability).
- Be able to name one tool (e.g. Prometheus/Grafana).

---

## Practice Exercise

**Task:** Name three metrics you would monitor on a web server and what a sensible alert threshold would be.

---

## Cross-References

- [05-04 Redundant Systems](./05-04-redundante-systeme.md)
- [01-07 SLA & SOP](../01-project-management/01-07-sla-sop.md)
