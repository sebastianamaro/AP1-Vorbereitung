# Absicherung von webbasierten Anwendungen

## Lernziele

Nach diesem Kapitel solltest du:
- Transportverschlüsselung (TLS/HTTPS) erklären
- Zertifikate und ihre Rolle verstehen
- Verbreitete Web-Angriffe und Gegenmaßnahmen kennen

---

## Kerninhalt

### TLS / HTTPS

**HTTPS** = HTTP über **TLS** (Transport Layer Security). TLS sorgt für:
- **Vertraulichkeit** (Verschlüsselung der Übertragung)
- **Integrität** (Manipulationsschutz)
- **Authentizität** (Server-Identität per Zertifikat)

TLS nutzt **hybride Verschlüsselung**: asymmetrisch für den Schlüsselaustausch (Handshake), dann symmetrisch für die Nutzdaten (schneller).

### Zertifikate

Ein **digitales Zertifikat** (X.509) bindet einen öffentlichen Schlüssel an eine Identität (Domain). Es wird von einer **Zertifizierungsstelle (CA)** signiert. Der Browser prüft die **Vertrauenskette** bis zu einer Root-CA. So wird sichergestellt, dass man mit dem echten Server spricht (Schutz vor **Man-in-the-Middle**).

### Typische Web-Angriffe & Gegenmaßnahmen

| Angriff | Gegenmaßnahme |
|---------|---------------|
| **SQL-Injection** | Prepared Statements, Eingabevalidierung |
| **XSS** (Cross-Site Scripting) | Ausgabe kodieren/escapen, Content-Security-Policy |
| **CSRF** | CSRF-Token |
| **Man-in-the-Middle** | HTTPS/TLS, gültige Zertifikate, HSTS |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **TLS/HTTPS** | Verschlüsselte, authentifizierte Übertragung |
| **Zertifikat (X.509)** | Bindet öffentlichen Schlüssel an eine Identität |
| **CA** | Zertifizierungsstelle, signiert Zertifikate |
| **SQL-Injection/XSS** | Verbreitete Web-Angriffe |

---

## Prüfungstipps

- **HTTPS = HTTP + TLS**; TLS liefert Vertraulichkeit, Integrität, Authentizität.
- **Hybride Verschlüsselung** im TLS-Handshake erklären (asymmetrisch → symmetrisch).
- Zertifikat/CA/Vertrauenskette gegen Man-in-the-Middle.

---

## Übungsaufgabe

**Aufgabe (nach ConSystem GmbH):** Ein Kunde will alle Zugriffe auf seine Webanwendung verschlüsseln. Erkläre TLS/HTTPS, die Rolle des Zertifikats und nenne zwei typische Web-Angriffe mit Gegenmaßnahme.

---

## Querverweise

- [05-02 Kryptographie](../05-it-systems/05-02-kryptographie.md)
- [07-11 Anmeldung bei webbasierten Anwendungen](./07-11-anmeldung-webanwendungen.md)
