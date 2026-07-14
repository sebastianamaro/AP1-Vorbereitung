# Kryptographie

## Lernziele

Nach diesem Kapitel solltest du:
- Symmetrische, asymmetrische und hybride Verschlüsselung unterscheiden
- Hashfunktionen und Salting erklären
- Digitale Signaturen und PKI/Zertifikate einordnen

---

## Kerninhalt

### Verschlüsselung

| Art | Schlüssel | Merkmal | Beispiele |
|-----|-----------|---------|-----------|
| **Symmetrisch** | ein gemeinsamer Schlüssel | schnell; Schlüsselaustausch problematisch | AES, DES |
| **Asymmetrisch** | Schlüsselpaar (öffentlich/privat) | löst Schlüsselaustausch; langsamer | RSA, ECC |
| **Hybrid** | Kombination | asymmetrisch für Schlüsselaustausch, symmetrisch für Daten | TLS |

Mit dem **öffentlichen Schlüssel** wird verschlüsselt / eine Signatur geprüft, mit dem **privaten Schlüssel** entschlüsselt / signiert.

### Hashfunktion

Eine **Hashfunktion** bildet Eingaben beliebiger Länge auf einen **Hashwert fester Länge** ab. Eigenschaften:

- **Deterministisch** (gleiche Eingabe → gleicher Hash)
- **Einwegfunktion** (nicht umkehrbar)
- **Kollisionsresistent** (praktisch keine zwei Eingaben mit gleichem Hash)
- **Lawineneffekt** (kleine Änderung → völlig anderer Hash)

Beispiele: **SHA-256**, SHA-3. (MD5/SHA-1 gelten als unsicher.) Einsatz: Integritätsprüfung, Signaturen, Passwortspeicherung.

**Salting:** Ein zufälliger, pro Datensatz eindeutiger **Salt** wird vor dem Hashen angehängt → verhindert **Rainbow-Table**-Angriffe und gleiche Hashes bei gleichem Passwort.

### Digitale Signatur

Der Absender **signiert** den Hash einer Nachricht mit seinem **privaten Schlüssel**; der Empfänger prüft mit dem **öffentlichen Schlüssel**. Eine digitale Signatur garantiert dreierlei:

- **Integrität** – Nachricht unverändert
- **Authentizität** – Absender ist echt
- **Nichtabstreitbarkeit** – Absender kann Urheberschaft nicht leugnen

### PKI und Zertifikate

Eine **PKI** (Public-Key-Infrastruktur) verwaltet Schlüssel und Vertrauen:

- **Digitales Zertifikat (X.509):** bindet einen öffentlichen Schlüssel an eine Identität
- **CA (Certificate Authority):** signiert und beglaubigt Zertifikate; **RA** registriert Antragsteller
- **Vertrauenskette:** Zertifikat → Zwischen-CA → Root-CA
- **Sperrung:** über **CRL** (Sperrliste) oder **OCSP** (Online-Statusabfrage)

Anwendung: **TLS/HTTPS** nutzt Zertifikate zur Server-Authentifizierung und hybride Verschlüsselung (siehe [07-10](../07-networks/07-10-webanwendungen-absichern.md)).

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Symmetrisch/Asymmetrisch** | Ein Schlüssel vs. Schlüsselpaar |
| **Hashfunktion** | Einweg-Abbildung auf festen Hashwert |
| **Salting** | Zufallswert gegen Rainbow-Tables |
| **Digitale Signatur** | Integrität + Authentizität + Nichtabstreitbarkeit |
| **PKI / X.509 / CA** | Infrastruktur, Zertifikat, Zertifizierungsstelle |

---

## Prüfungstipps

- **Symmetrisch vs. asymmetrisch** (inkl. je ein Verfahren) und die **hybride** Kombination erklären.
- **Öffentlicher Schlüssel verschlüsselt / privater entschlüsselt** – Richtung sicher können.
- Digitale Signatur = die „drei Garantien". Hashing/Salting gegen Rainbow-Tables (im Katalog neu betont).
- PKI/Zertifikat/CA gegen Man-in-the-Middle (Verbindung zu TLS).

---

## Übungsaufgabe

**Aufgabe (nach ConSystem GmbH):** (1) Erkläre den Unterschied zwischen symmetrischer und asymmetrischer Verschlüsselung und wozu die hybride Verschlüsselung dient. (2) Wie stellt eine digitale Signatur Integrität und Authentizität sicher?

---

## Querverweise

- [04-02 Authentifizierung](../04-it-security/04-02-authentifizierung-autorisierung.md)
- [07-10 Absicherung webbasierter Anwendungen](../07-networks/07-10-webanwendungen-absichern.md)
