# Schwachstellen analysieren

## Lernziele

Nach diesem Kapitel solltest du:
- Einen Penetrationstest erklären
- Typische Prüfobjekte eines Pentests nennen
- Schwachstellenanalyse von einem Angriff abgrenzen

---

## Kerninhalt

### Penetrationstest

Ein **Penetrationstest** ist ein **autorisierter, simulierter Angriff** auf ein IT-System, um Schwachstellen **vor** echten Angreifern aufzudecken. Wichtig: nur **mit Genehmigung** des Betreibers (sonst strafbar) und in definiertem Rahmen (Scope).

Phasen (vereinfacht): **Vorbereitung/Scope → Informationsbeschaffung → Scan/Analyse → Ausnutzung (Exploitation) → Bericht mit Empfehlungen**.

### Typische Prüfobjekte

- **Netzwerk** (offene Ports, Dienste, Segmentierung)
- **Webanwendungen** (SQL-Injection, XSS, Authentifizierung)
- **Server/Betriebssysteme** (Patch-Stand, Härtung)
- **WLAN** (Verschlüsselung, Rogue APs)
- **Clients/Endgeräte**
- **Firewalls/Perimeter**
- **Physische Zugänge**
- **Menschen** (Social-Engineering-Test)
- **Datenbanken**

### Abgrenzung

- **Schwachstellenscan** (automatisiert, z. B. mit Scanner) findet bekannte Lücken.
- **Penetrationstest** geht weiter und **nutzt Lücken aktiv aus**, um die reale Ausnutzbarkeit zu zeigen.
- **Härtung** (Hardening) = das Absichern eines Systems (Angriffsfläche reduzieren) – Reaktion auf gefundene Schwachstellen.

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Penetrationstest** | Autorisierter, simulierter Angriff zur Schwachstellensuche |
| **Scope** | Vereinbarter Umfang/Grenzen des Tests |
| **Härtung** | Reduktion der Angriffsfläche eines Systems |
| **Exploit** | Ausnutzung einer Schwachstelle |

---

## Prüfungstipps

- **Autorisierung/Genehmigung** immer betonen – ohne sie ist ein Pentest ein Angriff.
- Mindestens **fünf konkrete Prüfobjekte** parat haben (Netzwerk, Webanwendung, Server/OS, WLAN, Datenbank, Mensch …).
- **Härtung** ist im aktualisierten Katalog neu betont.

---

## Übungsaufgabe

**Aufgabe (nach ConSystem GmbH):** (1) Erkläre, was ein Penetrationstest ist. (2) Nenne mindestens fünf konkrete Prüfobjekte eines Penetrationstests.

---

## Querverweise

- [04-04 Bedrohungsszenarien](./04-04-bedrohungsszenarien.md)
- [07-09 Firewalltechniken](../07-networks/07-09-firewalltechniken.md)
