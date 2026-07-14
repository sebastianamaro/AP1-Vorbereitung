# Anmeldung bei webbasierten Anwendungen

## Lernziele

Nach diesem Kapitel solltest du:
- Sichere Passwortspeicherung (Hashing + Salt) erklären
- Registrierungs-/Anmeldeverfahren und deren Absicherung kennen
- Moderne Verfahren (2FA, OAuth/SSO) einordnen

---

## Kerninhalt

### Sichere Passwortspeicherung

Passwörter werden **niemals im Klartext** gespeichert, sondern als **Hash** (siehe [Kryptographie](../05-it-systems/05-02-kryptographie.md)):

- **Salt:** zufälliger, pro Nutzer eindeutiger Wert, der vor dem Hashen angehängt wird → verhindert **Rainbow-Table**-Angriffe und gleiche Hashes bei gleichem Passwort.
- **Langsame Hashverfahren** (bcrypt, scrypt, Argon2) erschweren Brute-Force.

```
gespeichert: hash(passwort + salt) + salt
Login: hash(eingabe + gespeichertes_salt) == gespeicherter_hash ?
```

### Registrierung & Anmeldung absichern

- **E-Mail-Verifizierung** (Double-Opt-In) bei Registrierung
- **Passwortrichtlinien** (Länge/Komplexität) sinnvoll, aber Nutzbarkeit beachten
- **Brute-Force-Schutz:** Rate-Limiting, Account-Sperre, **CAPTCHA**
- **Zwei-Faktor-Authentifizierung (2FA)** (siehe [04-02](../04-it-security/04-02-authentifizierung-autorisierung.md))
- Übertragung nur über **HTTPS**

### OAuth / Single Sign-On

- **OAuth 2.0 / OpenID Connect:** Anmeldung über einen Identitätsanbieter („Login mit …“) ohne dass die Anwendung das Passwort erhält (**Token**-basiert).
- **SSO** (Single Sign-On): einmalige Anmeldung für mehrere Dienste.

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Salt** | Zufallswert gegen Rainbow-Tables |
| **bcrypt/Argon2** | Langsame Passwort-Hashverfahren |
| **2FA** | Zweiter Faktor zusätzlich zum Passwort |
| **OAuth/SSO** | Token-basierte Anmeldung / einmalige Anmeldung |

---

## Prüfungstipps

- **Passwörter gehasht + gesalted** speichern – häufige Frage; Klartext ist ein grober Fehler.
- **Salt** verhindert Rainbow-Tables und gleiche Hashes.
- 2FA, Rate-Limiting und HTTPS als Absicherung der Anmeldung nennen.
- Hashing/Anonymisierung und 2FA sind im aktualisierten Katalog **neu betont**.

---

## Übungsaufgabe

**Aufgabe (nach ConSystem GmbH):** Plane die Benutzerregistrierung/-anmeldung für eine Webanwendung: Wie werden Passwörter gespeichert (Hash + Salt), und welche drei Maßnahmen sichern den Login zusätzlich ab?

---

## Querverweise

- [04-02 Authentifizierung und Autorisierung](../04-it-security/04-02-authentifizierung-autorisierung.md)
- [07-10 Absicherung webbasierter Anwendungen](./07-10-webanwendungen-absichern.md)
