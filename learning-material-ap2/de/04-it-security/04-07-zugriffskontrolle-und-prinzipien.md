# Zugriffskontrolle, Kerberos & Sicherheitsprinzipien

## Lernziele

Nach diesem Kapitel solltest du:
- Zutritts-, Zugangs- und Zugriffskontrolle unterscheiden
- Kerberos und IAM einordnen
- Grundlegende Sicherheitsprinzipien anwenden

---

## Kerninhalt

### Die drei „Z" der Kontrolle (klassische Prüfungsfrage)

| Kontrolle | Schützt | Beispiel |
|-----------|---------|----------|
| **Zutrittskontrolle** | **physischen** Zugang zu Räumen/Geräten | Ausweisleser, Schließanlage, Serverraum |
| **Zugangskontrolle** | **Anmeldung** am System (Authentifizierung) | Login, Passwort, 2FA |
| **Zugriffskontrolle** | **Rechte** auf Daten/Funktionen (Autorisierung) | Datei-Berechtigungen, Rollen |

> Merkhilfe: **Zutritt → Raum**, **Zugang → System**, **Zugriff → Daten**.

### Kerberos

**Kerberos** ist ein **ticketbasiertes Netzwerk-Authentifizierungsprotokoll**. Ein zentrales **KDC** (Key Distribution Center) stellt nach der Anmeldung ein **Ticket-Granting Ticket (TGT)** aus; damit erhält der Nutzer **Service-Tickets** für einzelne Dienste – **ohne** das Passwort erneut zu senden (Single Sign-On im Netz). Einsatz u. a. in Windows Active Directory. *(Im Katalog neu.)*

### IAM

**Identity & Access Management (IAM)** verwaltet **Identitäten** und **Berechtigungen** zentral (Anlegen/Sperren von Konten, Rollen, Rechtevergabe, Nachvollziehbarkeit).

### Sicherheitsprinzipien

- **Least Privilege** – jeder erhält nur die **minimal nötigen** Rechte
- **Need-to-Know** – Zugriff nur auf die für die Aufgabe nötigen Informationen
- **Defense in Depth** – **mehrere** Schutzschichten (Firewall, VPN, Virenschutz, IDS/IPS)
- **Zero Trust** – „**niemandem** wird standardmäßig vertraut"; jede Anfrage wird geprüft

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Zutritts-/Zugangs-/Zugriffskontrolle** | Raum / System / Daten |
| **Kerberos** | Ticketbasiertes Netzwerk-Authentifizierungsprotokoll (KDC/TGT) |
| **IAM** | Zentrale Verwaltung von Identitäten & Rechten |
| **Least Privilege / Zero Trust** | Minimale Rechte / kein Standardvertrauen |

---

## Prüfungstipps

- Die **drei „Z"** (Zutritt/Zugang/Zugriff) sicher zuordnen – häufige Frage.
- **Kerberos** = Tickets/KDC, kein erneutes Passwort (im Katalog neu).
- **Least Privilege**, **Defense in Depth**, **Zero Trust** je in einem Satz erklären können.

---

## Übungsaufgabe

**Aufgabe:** Ordne Maßnahmen (Ausweisleser, Login mit 2FA, Dateiberechtigungen) den drei Kontrollarten zu und erkläre das Prinzip „Least Privilege".

---

## Querverweise

- [04-02 Authentifizierung und Autorisierung](./04-02-authentifizierung-autorisierung.md)
- [04-01 Aspekte der IT-Sicherheit](./04-01-aspekte-it-sicherheit.md)
