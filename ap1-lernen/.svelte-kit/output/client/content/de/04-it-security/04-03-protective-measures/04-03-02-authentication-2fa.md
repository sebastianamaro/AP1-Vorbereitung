# Authentifizierung und Zwei-Faktor-Authentifizierung (2FA)

## Lernziele

Nach diesem Kapitel solltest du:
- Die drei Authentifizierungsfaktoren kennen
- Zwei-Faktor-Authentifizierung (2FA) erklären können
- Verschiedene 2FA-Methoden unterscheiden können
- Vor- und Nachteile von 2FA benennen können

**Hinweis:** Dieses Thema ist NEU im Prüfungskatalog 2025 und daher besonders prüfungsrelevant!

---

## Kerninhalt

### Was ist Authentifizierung?

**Authentifizierung** ist der Prozess der Überprüfung einer Identität. Sie beantwortet die Frage: "Bist du wirklich der, der du vorgibst zu sein?"

```
┌─────────────────────────────────────────────────────────────────┐
│              AUTHENTIFIZIERUNG vs. AUTORISIERUNG                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  AUTHENTIFIZIERUNG              AUTORISIERUNG                   │
│  ┌─────────────────────┐        ┌─────────────────────┐        │
│  │                     │        │                     │        │
│  │  "WER BIST DU?"     │   ──►  │  "WAS DARFST DU?"   │        │
│  │                     │        │                     │        │
│  │  Identität prüfen   │        │  Rechte prüfen      │        │
│  │                     │        │                     │        │
│  └─────────────────────┘        └─────────────────────┘        │
│                                                                 │
│  Beispiel: Login mit           Beispiel: Welche Dateien        │
│  Benutzername + Passwort       darf der User sehen?            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Die drei Authentifizierungsfaktoren

```
┌─────────────────────────────────────────────────────────────────┐
│              DIE DREI AUTHENTIFIZIERUNGSFAKTOREN                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │     WISSEN      │  │     BESITZ      │  │    BIOMETRIE    │ │
│  │                 │  │                 │  │                 │ │
│  │  "Etwas, das    │  │  "Etwas, das    │  │  "Etwas, das    │ │
│  │   ich weiß"     │  │   ich habe"     │  │   ich bin"      │ │
│  │                 │  │                 │  │                 │ │
│  │  • Passwort     │  │  • Smartphone   │  │  • Fingerabdr.  │ │
│  │  • PIN          │  │  • Smartcard    │  │  • Gesicht      │ │
│  │  • Geheimfrage  │  │  • Token        │  │  • Iris         │ │
│  │                 │  │  • USB-Key      │  │  • Stimme       │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Faktor 1: Wissen (Knowledge)

| Methode | Beispiel | Sicherheit |
|---------|----------|------------|
| **Passwort** | "Geheim123!" | Mittel (abhängig von Komplexität) |
| **PIN** | "1234" | Niedrig bis Mittel |
| **Geheimfrage** | "Name des Haustiers?" | Niedrig (oft erratbar) |
| **Entsperrmuster** | Muster auf Smartphone | Niedrig bis Mittel |

**Schwäche:** Kann gestohlen, erraten oder vergessen werden.

#### Faktor 2: Besitz (Possession)

| Methode | Beschreibung | Sicherheit |
|---------|--------------|------------|
| **Smartphone** | SMS oder Authenticator-App | Mittel bis Hoch |
| **Hardware-Token** | Gerät generiert Codes | Hoch |
| **Smartcard** | Chip-Karte | Hoch |
| **USB-Sicherheitsschlüssel** | FIDO2/WebAuthn | Sehr hoch |

**Schwäche:** Kann verloren oder gestohlen werden.

#### Faktor 3: Biometrie (Inherence)

| Methode | Beschreibung | Sicherheit |
|---------|--------------|------------|
| **Fingerabdruck** | Finger-Scanner | Hoch |
| **Gesichtserkennung** | Face ID | Hoch |
| **Iris-Scan** | Muster der Iris | Sehr hoch |
| **Stimmerkennung** | Sprachmuster | Mittel |

**Schwäche:** Kann nicht geändert werden, wenn kompromittiert.

---

### Was ist 2FA/MFA?

#### Definitionen

| Begriff | Definition |
|---------|------------|
| **2FA** | **Zwei-Faktor-Authentifizierung:** Verwendung von **zwei verschiedenen Faktoren** |
| **MFA** | **Multi-Faktor-Authentifizierung:** Verwendung von **zwei oder mehr verschiedenen Faktoren** |

**Wichtig:** Es müssen **unterschiedliche Faktorkategorien** sein!

```
✅ ECHTE 2FA:
   Passwort (Wissen) + SMS-Code (Besitz) = 2FA

❌ KEINE 2FA:
   Passwort (Wissen) + PIN (Wissen) = Nur ein Faktor!
```

---

### 2FA-Methoden im Detail

#### SMS-basierte 2FA

```
┌────────────────────────────────────────────────────────────────┐
│                    SMS-BASIERTE 2FA                            │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  1. Passwort eingeben                                          │
│         │                                                      │
│         ▼                                                      │
│  2. SMS mit Code erhalten                                      │
│         │                                                      │
│         ▼                                                      │
│  3. Code eingeben                                              │
│         │                                                      │
│         ▼                                                      │
│  4. Zugang gewährt                                             │
│                                                                │
│  ⚠️ Schwäche: SIM-Swapping, SMS-Abfangen möglich              │
└────────────────────────────────────────────────────────────────┘
```

#### TOTP (Time-based One-Time Password)

```
┌────────────────────────────────────────────────────────────────┐
│                    TOTP / AUTHENTICATOR-APP                    │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  ┌─────────────────┐        ┌─────────────────┐               │
│  │   Authenticator │        │     Server      │               │
│  │       App       │        │                 │               │
│  │                 │        │                 │               │
│  │   Shared Secret │◄──────►│  Shared Secret  │               │
│  │       +         │        │       +         │               │
│  │   Aktuelle Zeit │        │   Aktuelle Zeit │               │
│  │       =         │        │       =         │               │
│  │   CODE: 847293  │        │   CODE: 847293  │               │
│  └─────────────────┘        └─────────────────┘               │
│                                                                │
│  Code ändert sich alle 30 Sekunden                             │
│  Beispiele: Google Authenticator, Microsoft Authenticator      │
└────────────────────────────────────────────────────────────────┘
```

| Eigenschaft | Beschreibung |
|-------------|--------------|
| **Funktionsweise** | Shared Secret + Zeitstempel = Code |
| **Gültigkeitsdauer** | Typisch 30 Sekunden |
| **Sicherheit** | Höher als SMS |
| **Offline-fähig** | Ja (keine Internetverbindung nötig) |

#### Hardware-Token / FIDO2

| Methode | Beschreibung | Beispiele |
|---------|--------------|-----------|
| **Hardware-Token** | Physisches Gerät generiert Codes | RSA SecurID |
| **FIDO2/WebAuthn** | Standard für passwortlose Authentifizierung | YubiKey, Windows Hello |

**Vorteile von FIDO2:**
- Phishing-resistent
- Keine Codes zum Abtippen
- Sehr hohe Sicherheit

---

### Vergleich der 2FA-Methoden

| Methode | Sicherheit | Benutzerfreundlichkeit | Kosten |
|---------|------------|------------------------|--------|
| **SMS** | Niedrig-Mittel | Hoch | Gering |
| **TOTP-App** | Mittel-Hoch | Mittel | Keine |
| **Push-Benachrichtigung** | Mittel-Hoch | Sehr hoch | Keine |
| **Hardware-Token** | Sehr hoch | Mittel | Mittel-Hoch |
| **FIDO2/WebAuthn** | Sehr hoch | Hoch | Mittel |

---

### Vor- und Nachteile von 2FA

#### Vorteile

| Vorteil | Beschreibung |
|---------|--------------|
| **Erhöhte Sicherheit** | Angreifer braucht zwei Faktoren |
| **Schutz bei Passwortleck** | Gestohlenes Passwort allein reicht nicht |
| **Compliance** | Erfüllt Sicherheitsanforderungen |
| **Phishing-Schutz** | Erschwert Phishing-Angriffe |

#### Nachteile

| Nachteil | Beschreibung |
|----------|--------------|
| **Komplexität** | Zusätzlicher Schritt beim Login |
| **Geräteabhängigkeit** | Besitz-Faktor muss verfügbar sein |
| **Kosten** | Hardware-Token kosten Geld |
| **Wiederherstellung** | Bei Verlust des zweiten Faktors |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Authentifizierung** | Identitätsprüfung |
| **Autorisierung** | Berechtigungsprüfung |
| **2FA** | Zwei-Faktor-Authentifizierung |
| **MFA** | Multi-Faktor-Authentifizierung |
| **TOTP** | Time-based One-Time Password |
| **FIDO2** | Standard für sichere Authentifizierung |
| **Biometrie** | Körperliche Merkmale zur Identifikation |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was sind die drei Authentifizierungsfaktoren?
- Was ist der Unterschied zwischen 2FA und MFA?
- Geben Sie ein Beispiel für echte 2FA
- Welche Schwächen hat SMS-basierte 2FA?

### Wichtig zu merken

- **3 Faktoren:** Wissen, Besitz, Biometrie
- **2FA** = Zwei **verschiedene** Faktorkategorien
- **TOTP** = Authenticator-App mit zeitbasiertem Code
- **SMS-2FA** ist besser als nichts, aber nicht optimal

### Eselsbrücke

**W-B-B** = **W**issen, **B**esitz, **B**iometrie
"**W**as ich **w**eiß, **b**esitze und **b**in"

---

## Übungsaufgaben

### Aufgabe 1
Nennen Sie die drei Authentifizierungsfaktoren und geben Sie jeweils ein Beispiel.

**Lösung:**
1. **Wissen** (etwas, das ich weiß): Passwort, PIN
2. **Besitz** (etwas, das ich habe): Smartphone, Smartcard, Token
3. **Biometrie** (etwas, das ich bin): Fingerabdruck, Gesichtserkennung

### Aufgabe 2
Ist die Kombination aus Passwort und PIN eine echte 2FA? Begründen Sie.

**Lösung:** **Nein**, das ist keine echte 2FA. Passwort und PIN gehören beide zur Kategorie "Wissen". Für echte 2FA müssen zwei **verschiedene** Faktorkategorien verwendet werden, z.B. Passwort (Wissen) + SMS-Code (Besitz).

### Aufgabe 3
Erklären Sie, wie TOTP (Time-based One-Time Password) funktioniert.

**Lösung:** Bei TOTP teilen sich Authenticator-App und Server ein gemeinsames Geheimnis (Shared Secret). Beide berechnen aus diesem Geheimnis und der aktuellen Zeit einen Code. Da beide die gleiche Zeit und das gleiche Geheimnis verwenden, kommen sie zum gleichen Code. Der Code ändert sich typischerweise alle 30 Sekunden.

### Aufgabe 4
Welche Schwächen hat SMS-basierte 2FA?

**Lösung:**
1. **SIM-Swapping:** Angreifer können die SIM-Karte übernehmen
2. **SMS-Abfangen:** SMS können abgefangen werden
3. **Social Engineering:** Opfer kann manipuliert werden, Code weiterzugeben
4. **Geräteabhängigkeit:** Smartphone muss verfügbar sein

Trotz dieser Schwächen ist SMS-2FA besser als keine 2FA.

---

## Querverweise

- [04-02-01 Bedrohungsarten](../04-02-threats-risks/04-02-01-threat-types.md) - Passwortangriffe
- [04-03-01 Technische Maßnahmen](./04-03-01-technical-measures.md) - Weitere Schutzmaßnahmen
- [04-05-02 Hashwerte](../04-05-cryptography/04-05-02-hash-values.md) - Passwortspeicherung
- [03-02-01 TOM](../../03-data-protection/03-02-technical-measures/03-02-01-tom.md) - Zugangskontrolle
