# Programm- und Konfigurationsdokumentation

## Lernziele

Nach diesem Kapitel solltest du:
- Arten der Dokumentation unterscheiden
- Programm- und Konfigurationsdokumentation erklären
- Wissen, was gute Dokumentation ausmacht

---

## Kerninhalt

Dokumentation macht Software **nachvollziehbar, wartbar und übergabefähig**. Man unterscheidet u. a. **Programmdokumentation** und **Konfigurationsdokumentation** (beide im Katalog genannt).

### Programmdokumentation

Beschreibt **Aufbau und Funktionsweise** des Codes – für Entwickler:

- **Quellcode-Kommentare** (sinnvoll, nicht redundant)
- **API-Doku** aus dem Code generiert (z. B. **JavaDoc**, Doxygen)
- **Technische Doku:** Architektur, Klassen-/Datenmodell, wichtige Algorithmen, Schnittstellen

### Konfigurationsdokumentation

Beschreibt **Einstellungen und Umgebung** für Betrieb/Deployment:

- Konfigurationsdateien und Parameter (z. B. Umgebungsvariablen, `application.yml`)
- Installations-/Deployment-Anleitung, Abhängigkeiten/Versionen
- Betriebsparameter (Ports, Pfade, Zugänge – **keine Klartext-Geheimnisse!**)

### Weitere Dokumentationsarten

- **Benutzerdokumentation** (Handbuch, Hilfe – für Endnutzer)
- **Projektdokumentation** (siehe [00-03-02](../../00-exam-overview/00-03-projektarbeit/00-03-02-projektdokumentation.md))

### Merkmale guter Dokumentation

Aktuell, vollständig, verständlich, konsistent, versioniert (mit dem Code gepflegt).

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Programmdokumentation** | Aufbau/Funktionsweise des Codes (für Entwickler) |
| **Konfigurationsdokumentation** | Einstellungen/Umgebung für Betrieb & Deployment |
| **JavaDoc** | Aus Code generierte API-Dokumentation |
| **Benutzerdokumentation** | Anleitung für Endnutzer |

---

## Prüfungstipps

- **Programm- vs. Konfigurationsdokumentation** unterscheiden (Code/Entwickler vs. Betrieb/Deployment).
- Zielgruppen zuordnen: Entwickler- vs. Benutzerdokumentation.
- Doku **mit dem Code versionieren**; keine Geheimnisse im Klartext.

---

## Übungsaufgabe

**Aufgabe:** Nenne für ein Webprojekt je zwei Inhalte der Programm- und der Konfigurationsdokumentation.

---

## Querverweise

- [06-08-03 Versionsverwaltung](./06-08-03-versionsverwaltung.md)
- [00-03-02 Projektdokumentation](../../00-exam-overview/00-03-projektarbeit/00-03-02-projektdokumentation.md)
