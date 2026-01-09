# Digitale Zertifikate

## Lernziele

Nach diesem Kapitel solltest du:
- Den Zweck digitaler Zertifikate erklären können
- Die Komponenten eines Zertifikats kennen
- Die Rolle von Zertifizierungsstellen (CAs) verstehen
- Das Vertrauensmodell (PKI) beschreiben können

---

## Kerninhalt

### Was ist ein digitales Zertifikat?

Ein **digitales Zertifikat** ist ein elektronisches Dokument, das die Identität einer Person oder Organisation mit einem öffentlichen Schlüssel verknüpft. Es wird von einer vertrauenswürdigen Stelle (CA) ausgestellt.

```
┌─────────────────────────────────────────────────────────────────┐
│                  DIGITALES ZERTIFIKAT                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Problem: Wie kann ich sicher sein, dass ein öffentlicher       │
│           Schlüssel wirklich zu "www.bank.de" gehört?           │
│                                                                 │
│  Lösung:  Eine vertrauenswürdige Stelle (CA) bestätigt die      │
│           Zuordnung mit einem Zertifikat.                       │
│                                                                 │
│  ┌───────────────────────────────────────────────────────────┐ │
│  │               ZERTIFIKAT für www.bank.de                   │ │
│  ├───────────────────────────────────────────────────────────┤ │
│  │ Inhaber:        www.bank.de                                │ │
│  │ Öffentlicher    MIIBIjANBgkqhkiG...                        │ │
│  │ Schlüssel:                                                 │ │
│  │ Gültig von:     01.01.2025                                 │ │
│  │ Gültig bis:     31.12.2025                                 │ │
│  │ Aussteller:     DigiCert CA                                │ │
│  │ Signatur:       [Signatur der CA]                          │ │
│  └───────────────────────────────────────────────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Komponenten eines Zertifikats (X.509)

| Feld | Beschreibung |
|------|--------------|
| **Subject (Inhaber)** | Wem gehört das Zertifikat (z.B. Domain, Person) |
| **Public Key** | Der öffentliche Schlüssel des Inhabers |
| **Issuer (Aussteller)** | Die CA, die das Zertifikat ausgestellt hat |
| **Valid From/To** | Gültigkeitszeitraum |
| **Serial Number** | Eindeutige Nummer |
| **Signature Algorithm** | Verwendeter Signaturalgorithmus |
| **Signature** | Digitale Signatur der CA |

---

### Zertifizierungsstellen (CA)

Eine **Certificate Authority (CA)** ist eine vertrauenswürdige Organisation, die Zertifikate ausstellt und signiert.

```
┌─────────────────────────────────────────────────────────────────┐
│              ZERTIFIKATSHIERARCHIE (PKI)                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                     ┌─────────────────┐                         │
│                     │    ROOT CA      │ Selbst-signiert         │
│                     │  (Wurzel-CA)    │ Im Browser vertraut     │
│                     └────────┬────────┘                         │
│                              │                                  │
│              ┌───────────────┼───────────────┐                 │
│              ▼               ▼               ▼                 │
│       ┌──────────┐    ┌──────────┐    ┌──────────┐            │
│       │ Inter-   │    │ Inter-   │    │ Inter-   │            │
│       │ mediate  │    │ mediate  │    │ mediate  │            │
│       │ CA       │    │ CA       │    │ CA       │            │
│       └────┬─────┘    └────┬─────┘    └────┬─────┘            │
│            │               │               │                   │
│       ┌────┴────┐     ┌────┴────┐     ┌────┴────┐             │
│       ▼         ▼     ▼         ▼     ▼         ▼             │
│    [Zert.]  [Zert.] [Zert.] [Zert.] [Zert.] [Zert.]           │
│    End-     End-    End-    End-    End-    End-               │
│    entity   entity  entity  entity  entity  entity             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Bekannte Zertifizierungsstellen

| CA | Beschreibung |
|----|--------------|
| **DigiCert** | Große kommerzielle CA |
| **Let's Encrypt** | Kostenlose Zertifikate |
| **Comodo/Sectigo** | Kommerzielle CA |
| **GlobalSign** | Große CA |
| **Bundesdruckerei** | Deutsche staatliche Zertifikate |

---

### Wie funktioniert die Vertrauenskette?

```
┌─────────────────────────────────────────────────────────────────┐
│              ZERTIFIKATSVALIDIERUNG                             │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   1. Browser empfängt Zertifikat von www.shop.de                │
│                      ▼                                          │
│   2. Browser prüft: Wer hat das Zertifikat signiert?            │
│      → Signiert von "Intermediate CA"                           │
│                      ▼                                          │
│   3. Browser prüft: Wer hat das Intermediate-Zertifikat         │
│      signiert?                                                  │
│      → Signiert von "Root CA"                                   │
│                      ▼                                          │
│   4. Browser prüft: Ist die Root CA vertrauenswürdig?           │
│      → Ja, Root CA ist im Browser-Zertifikatsspeicher ✅        │
│                      ▼                                          │
│   5. Browser zeigt: Verbindung ist sicher 🔒                    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Zertifikatstypen

#### Nach Validierungsstufe

| Typ | Validierung | Symbol |
|-----|-------------|--------|
| **DV (Domain Validated)** | Nur Domain-Besitz geprüft | 🔒 |
| **OV (Organization Validated)** | Organisation geprüft | 🔒 |
| **EV (Extended Validation)** | Umfangreiche Prüfung | 🔒 (früher grüne Adressleiste) |

#### Nach Verwendung

| Typ | Verwendung |
|-----|------------|
| **SSL/TLS-Zertifikat** | HTTPS für Websites |
| **Code Signing** | Software signieren |
| **E-Mail (S/MIME)** | E-Mail-Verschlüsselung |
| **Client-Zertifikat** | Benutzerauthentication |

---

### Zertifikatsprobleme

| Problem | Beschreibung | Browser-Warnung |
|---------|--------------|-----------------|
| **Abgelaufen** | Gültigkeitsdauer überschritten | "Zertifikat abgelaufen" |
| **Falsche Domain** | Zertifikat für andere Domain | "Name stimmt nicht überein" |
| **Unbekannte CA** | CA nicht vertrauenswürdig | "Nicht vertrauenswürdig" |
| **Widerrufen** | Zertifikat wurde zurückgezogen | "Zertifikat widerrufen" |

---

### Zertifikatswiderruf

Wenn ein Zertifikat kompromittiert wurde, muss es widerrufen werden:

| Methode | Beschreibung |
|---------|--------------|
| **CRL (Certificate Revocation List)** | Liste widerrufener Zertifikate |
| **OCSP (Online Certificate Status Protocol)** | Online-Statusabfrage in Echtzeit |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Digitales Zertifikat** | Elektronisches Dokument zur Identitätsbestätigung |
| **CA** | Certificate Authority (Zertifizierungsstelle) |
| **PKI** | Public Key Infrastructure (Vertrauensinfrastruktur) |
| **Root CA** | Wurzel-Zertifizierungsstelle (selbst-signiert) |
| **X.509** | Standard für Zertifikatsformat |
| **SSL/TLS** | Protokolle für verschlüsselte Verbindungen |
| **CRL** | Certificate Revocation List (Widerrufsliste) |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was ist ein digitales Zertifikat?
- Wozu dient eine Zertifizierungsstelle (CA)?
- Wie funktioniert die Vertrauenskette?
- Was passiert, wenn ein Zertifikat abgelaufen ist?

### Wichtig zu merken

- **Zertifikat** = Öffentlicher Schlüssel + Identität + CA-Signatur
- **CA** = Vertrauenswürdige Stelle, die Zertifikate ausstellt
- **Root CA** = Selbst-signiert, im Browser vorinstalliert
- **DV/OV/EV** = Verschiedene Validierungsstufen

---

## Übungsaufgaben

### Aufgabe 1
Was ist ein digitales Zertifikat und wozu dient es?

**Lösung:** Ein **digitales Zertifikat** ist ein elektronisches Dokument, das:
- Die Identität einer Person/Organisation mit einem öffentlichen Schlüssel verknüpft
- Von einer vertrauenswürdigen Zertifizierungsstelle (CA) ausgestellt wird
- Die Echtheit des öffentlichen Schlüssels bestätigt

Es dient dazu, bei verschlüsselter Kommunikation (z.B. HTTPS) sicherzustellen, dass man wirklich mit dem richtigen Server kommuniziert.

### Aufgabe 2
Was ist eine Zertifizierungsstelle (CA)?

**Lösung:** Eine **Zertifizierungsstelle (Certificate Authority, CA)** ist eine vertrauenswürdige Organisation, die:
- Die Identität von Antragstellern prüft
- Digitale Zertifikate ausstellt und signiert
- Für die Echtheit der Zuordnung von Schlüssel zu Identität bürgt
- Zertifikate bei Bedarf widerruft

Beispiele: DigiCert, Let's Encrypt, GlobalSign

### Aufgabe 3
Wie prüft ein Browser, ob ein Zertifikat vertrauenswürdig ist?

**Lösung:** Der Browser folgt der **Vertrauenskette**:
1. Browser empfängt das Zertifikat der Website
2. Browser prüft, welche CA das Zertifikat signiert hat
3. Browser prüft das Zertifikat der signierenden CA
4. Dies wird wiederholt, bis eine Root CA erreicht wird
5. Die Root CA muss im Browser-Zertifikatsspeicher als vertrauenswürdig hinterlegt sein

Ist die Kette bis zu einer vertrauenswürdigen Root CA nachvollziehbar, gilt das Zertifikat als vertrauenswürdig.

### Aufgabe 4
Was bedeuten DV, OV und EV bei Zertifikaten?

**Lösung:**
- **DV (Domain Validated):** Nur der Domain-Besitz wird geprüft (schnell, kostengünstig)
- **OV (Organization Validated):** Die Organisation wird zusätzlich geprüft
- **EV (Extended Validation):** Umfangreiche Prüfung der Organisation

Alle drei Typen bieten dieselbe Verschlüsselungsstärke, unterscheiden sich aber im Umfang der Identitätsprüfung.

---

## Querverweise

- [04-05-01 Verschlüsselungsverfahren](./04-05-01-encryption-methods.md) - Asymmetrische Verschlüsselung
- [04-05-04 Digitale Signaturen](./04-05-04-digital-signatures.md) - CA signiert Zertifikate
- [04-03-01 Technische Maßnahmen](../04-03-protective-measures/04-03-01-technical-measures.md) - HTTPS
- [07-01-03 Protokolle](../../07-networks/07-01-network-fundamentals/07-01-03-protocols.md) - TLS/SSL
