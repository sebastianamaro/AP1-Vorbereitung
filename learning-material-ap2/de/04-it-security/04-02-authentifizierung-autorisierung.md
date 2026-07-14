# Authentifizierung und Autorisierung

## Lernziele

Nach diesem Kapitel solltest du:
- Authentisierung, Authentifizierung und Autorisierung sauber abgrenzen
- Die drei Faktoren der Authentifizierung kennen
- Zwei-Faktor-Authentifizierung (2FA) erklären

---

## Kerninhalt

### Die drei Begriffe (häufige Verwechslung!)

| Begriff | Wer? | Bedeutung |
|---------|------|-----------|
| **Authentisierung** | Nutzer | Der Nutzer **weist seine Identität nach** (z. B. Passwort eingeben) |
| **Authentifizierung** | System | Das System **prüft** den vorgelegten Nachweis |
| **Autorisierung** | System | Das System **erteilt Rechte/Zugriff** nach erfolgreicher Authentifizierung |

> **Reihenfolge:** Authentisierung → Authentifizierung → Autorisierung.
> Merksatz: *Ich* authentisiere mich, das *System* authentifiziert mich und autorisiert danach meinen Zugriff.

### Die drei Faktoren

| Faktor | Beispiel |
|--------|----------|
| **Wissen** | Passwort, PIN |
| **Besitz** | Smartcard, TAN-Generator, Smartphone |
| **Sein (Inhärenz)** | Fingerabdruck, Gesicht, Iris (Biometrie) |

### Zwei-Faktor-Authentifizierung (2FA)

**2FA** kombiniert **zwei unterschiedliche Faktoren** (z. B. Passwort *Wissen* + TAN aufs Handy *Besitz*). Dadurch reicht ein gestohlenes Passwort allein nicht mehr aus → deutlich höhere Sicherheit. **MFA** nutzt mehrere Faktoren.

> Zwei Passwörter sind **keine** 2FA – es müssen **verschiedene Faktoren** sein.

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Authentisierung** | Identitätsnachweis durch den Nutzer |
| **Authentifizierung** | Prüfung des Nachweises durch das System |
| **Autorisierung** | Rechtevergabe nach erfolgreicher Authentifizierung |
| **2FA/MFA** | Kombination aus zwei/mehreren Faktoren |

---

## Prüfungstipps

- Die **Abgrenzung der drei Begriffe** ist eine klassische Prüfungsfrage – Reihenfolge und „wer macht was“ merken.
- **2FA = zwei verschiedene Faktoren** (Wissen/Besitz/Sein). Ein häufiger Fehler: zwei gleiche Faktoren als 2FA bezeichnen.
- 2FA ist im aktualisierten Katalog **neu betont**.

---

## Übungsaufgabe

**Aufgabe (nach ConSystem GmbH):** Grenze Authentisierung, Authentifizierung und Autorisierung voneinander ab und erkläre die 2FA an einem Beispiel.

---

## Querverweise

- [04-01 Aspekte der IT-Sicherheit](./04-01-aspekte-it-sicherheit.md)
- [04-06 Datenintegrität](./04-06-datenintegritaet.md)
