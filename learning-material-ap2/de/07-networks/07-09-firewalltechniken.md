# Firewalltechniken

## Lernziele

Nach diesem Kapitel solltest du:
- Firewall-Typen unterscheiden
- Das DMZ-Konzept erklären
- Grundlegende Regelwerke (Whitelist/Blacklist) einordnen

---

## Kerninhalt

Eine **Firewall** kontrolliert den Datenverkehr zwischen Netzen anhand von **Regeln** und schützt so das interne Netz.

### Firewall-Typen

| Typ | Arbeitsweise | Schicht |
|-----|--------------|---------|
| **Paketfilter (stateless)** | prüft einzelne Pakete nach IP/Port/Protokoll | 3/4 |
| **Stateful Inspection** | verfolgt Verbindungszustände (Sessions) | 3/4 |
| **Application-Layer / Proxy** | prüft Inhalte auf Anwendungsebene (z. B. HTTP) | 7 |
| **Next-Generation Firewall (NGFW)** | kombiniert Stateful + Application + IDS/IPS | 3–7 |

### DMZ (Demilitarisierte Zone)

Eine **DMZ** ist ein **Pufferbereich** zwischen Internet und internem Netz für öffentlich erreichbare Server (Web, Mail). Wird die DMZ kompromittiert, bleibt das interne Netz geschützt.

```
Internet ──[ Firewall ]── DMZ (Webserver) ──[ Firewall ]── internes Netz
```

### Regelwerk

- **Whitelist (Default Deny):** alles verboten, nur Erlaubtes durchlassen → **sicherer** (empfohlen)
- **Blacklist (Default Allow):** alles erlaubt, nur Bekanntes sperren

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Paketfilter** | Regelbasierte Prüfung einzelner Pakete |
| **Stateful Inspection** | Verbindungszustände berücksichtigen |
| **DMZ** | Pufferzone für öffentliche Server |
| **Default Deny** | Grundhaltung „alles verbieten, Erlaubtes freigeben“ |

---

## Prüfungstipps

- **Paketfilter (stateless) vs. Stateful vs. Application-Firewall** unterscheiden.
- **DMZ** und ihren Schutzgewinn erklären können.
- **Whitelist (Default Deny)** gilt als sicherer als Blacklist.

---

## Übungsaufgabe

**Aufgabe (nach ConSystem GmbH):** Erkläre die verschiedenen Firewall-Typen und entwirf ein einfaches Netzdesign mit DMZ für einen öffentlich erreichbaren Webserver.

---

## Querverweise

- [04-05 Schwachstellen analysieren](../04-it-security/04-05-schwachstellen-analysieren.md)
- [07-10 Absicherung webbasierter Anwendungen](./07-10-webanwendungen-absichern.md)
