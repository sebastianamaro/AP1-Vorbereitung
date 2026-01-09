# Digitale Signaturen

## Lernziele

Nach diesem Kapitel solltest du:
- Den Zweck digitaler Signaturen erklären können
- Den Ablauf der Signaturerstellung und -prüfung verstehen
- Den Unterschied zur Verschlüsselung kennen
- Anwendungsbereiche nennen können

---

## Kerninhalt

### Was ist eine digitale Signatur?

Eine **digitale Signatur** ist ein kryptografisches Verfahren, das die **Authentizität** und **Integrität** von digitalen Daten (z.B. Dokumenten, E-Mails) sicherstellt.

```
┌─────────────────────────────────────────────────────────────────┐
│                  DIGITALE SIGNATUR                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Garantiert:                                                    │
│                                                                 │
│  ✅ AUTHENTIZITÄT                                               │
│     Das Dokument stammt wirklich vom angegebenen Absender       │
│                                                                 │
│  ✅ INTEGRITÄT                                                  │
│     Das Dokument wurde nicht verändert                          │
│                                                                 │
│  ✅ NICHTABSTREITBARKEIT                                        │
│     Der Absender kann nicht leugnen, signiert zu haben          │
│                                                                 │
│  ❌ KEINE Vertraulichkeit                                       │
│     Der Inhalt ist NICHT verschlüsselt!                         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Unterschied: Signatur vs. Verschlüsselung

```
┌─────────────────────────────────────────────────────────────────┐
│           VERSCHLÜSSELUNG vs. DIGITALE SIGNATUR                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  VERSCHLÜSSELUNG                  DIGITALE SIGNATUR             │
│  ┌─────────────────────┐         ┌─────────────────────┐       │
│  │                     │         │                     │       │
│  │ Empfängers          │         │ Absenders           │       │
│  │ öffentlicher        │         │ privater            │       │
│  │ Schlüssel           │         │ Schlüssel           │       │
│  │      zum            │         │      zum            │       │
│  │ VERSCHLÜSSELN       │         │ SIGNIEREN           │       │
│  │                     │         │                     │       │
│  │ Empfängers          │         │ Absenders           │       │
│  │ privater            │         │ öffentlicher        │       │
│  │ Schlüssel           │         │ Schlüssel           │       │
│  │      zum            │         │      zur            │       │
│  │ ENTSCHLÜSSELN       │         │ VERIFIZIERUNG       │       │
│  │                     │         │                     │       │
│  │ ZIEL: Vertraulich.  │         │ ZIEL: Authentizität │       │
│  └─────────────────────┘         └─────────────────────┘       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

| Aspekt | Verschlüsselung | Digitale Signatur |
|--------|-----------------|-------------------|
| **Zweck** | Vertraulichkeit | Authentizität, Integrität |
| **Verschlüsseln mit** | Öffentlicher Schlüssel des Empfängers | - |
| **Signieren mit** | - | Privater Schlüssel des Absenders |
| **Prüfen mit** | Privater Schlüssel des Empfängers | Öffentlicher Schlüssel des Absenders |

---

### Ablauf der digitalen Signatur

```
┌─────────────────────────────────────────────────────────────────┐
│              SIGNATURERSTELLUNG                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ABSENDER (Alice)                                              │
│                                                                 │
│   1. Dokument erstellen                                         │
│      ┌───────────────┐                                          │
│      │   Dokument    │                                          │
│      └───────┬───────┘                                          │
│              │                                                  │
│              ▼                                                  │
│   2. Hash des Dokuments berechnen                               │
│      ┌───────────────┐                                          │
│      │  Hash: 7f3d...│                                          │
│      └───────┬───────┘                                          │
│              │                                                  │
│              ▼                                                  │
│   3. Hash mit PRIVATEM Schlüssel verschlüsseln                  │
│      ┌───────────────┐                                          │
│      │  Signatur:    │                                          │
│      │  X9k2...      │                                          │
│      └───────────────┘                                          │
│              │                                                  │
│              ▼                                                  │
│   4. Dokument + Signatur senden                                 │
│      [Dokument] + [Signatur]  ───────────────────►              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

```
┌─────────────────────────────────────────────────────────────────┐
│              SIGNATURPRÜFUNG                                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   EMPFÄNGER (Bob)                                               │
│                                                                 │
│   1. Dokument und Signatur empfangen                            │
│      [Dokument] + [Signatur]                                    │
│              │                                                  │
│              ▼                                                  │
│   2. Hash des empfangenen Dokuments berechnen                   │
│      ┌───────────────┐                                          │
│      │  Hash1: 7f3d..│                                          │
│      └───────────────┘                                          │
│              │                                                  │
│              ▼                                                  │
│   3. Signatur mit ÖFFENTLICHEM Schlüssel von Alice              │
│      entschlüsseln                                              │
│      ┌───────────────┐                                          │
│      │  Hash2: 7f3d..│                                          │
│      └───────────────┘                                          │
│              │                                                  │
│              ▼                                                  │
│   4. Hash1 und Hash2 vergleichen                                │
│      Hash1 == Hash2?                                            │
│      → JA:  Signatur gültig ✅                                  │
│      → NEIN: Signatur ungültig / Dokument verändert ❌          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Zusammenfassung: Signaturprozess

| Schritt | Aktion | Verwendeter Schlüssel |
|---------|--------|----------------------|
| **Signieren** | Hash berechnen, mit privatem Schlüssel verschlüsseln | **Privater** Schlüssel des Absenders |
| **Verifizieren** | Signatur mit öffentlichem Schlüssel entschlüsseln, Hash vergleichen | **Öffentlicher** Schlüssel des Absenders |

---

### Anwendungsbereiche

| Anwendung | Beschreibung |
|-----------|--------------|
| **E-Mail (S/MIME, PGP)** | Signierte E-Mails |
| **Code Signing** | Software-Updates signieren |
| **PDF-Dokumente** | Rechtsgültige digitale Unterschrift |
| **Zertifikate** | CA signiert Zertifikate |
| **Verträge** | Digitale Vertragsunterzeichnung |
| **Rechnungen** | E-Rechnungen |

---

### Rechtliche Bedeutung

In Deutschland sind digitale Signaturen rechtlich geregelt:

| Stufe | Beschreibung | Rechtswirkung |
|-------|--------------|---------------|
| **Einfache elektronische Signatur** | Gescannte Unterschrift, E-Mail | Geringste Beweiskraft |
| **Fortgeschrittene Signatur** | Mit kryptografischen Mitteln | Mittlere Beweiskraft |
| **Qualifizierte Signatur** | Mit qualifiziertem Zertifikat, sichere Signaturerstellungseinheit | Gleichgestellt mit handschriftlicher Unterschrift |

Die **eIDAS-Verordnung** (EU) regelt die Anerkennung in der EU.

---

### Algorithmen für digitale Signaturen

| Algorithmus | Beschreibung |
|-------------|--------------|
| **RSA** | Klassisches Verfahren, weit verbreitet |
| **DSA** | Digital Signature Algorithm |
| **ECDSA** | Elliptic Curve DSA, kürzere Schlüssel |
| **EdDSA** | Moderne Alternative |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Digitale Signatur** | Kryptografischer Nachweis für Authentizität und Integrität |
| **Authentizität** | Echtheitsnachweis des Absenders |
| **Integrität** | Nachweis, dass Daten nicht verändert wurden |
| **Nichtabstreitbarkeit** | Absender kann Signatur nicht leugnen |
| **Code Signing** | Signatur von Software |
| **Qualifizierte Signatur** | Rechtlich gleichgestellt mit Handunterschrift |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was ist eine digitale Signatur?
- Wie funktioniert die Signaturprüfung?
- Welche Schutzziele werden durch digitale Signaturen erreicht?
- Was ist der Unterschied zwischen Signatur und Verschlüsselung?

### Wichtig zu merken

- **Signieren** mit PRIVATEM Schlüssel
- **Verifizieren** mit ÖFFENTLICHEM Schlüssel
- Schutzziele: **Authentizität, Integrität, Nichtabstreitbarkeit**
- **NICHT** Vertraulichkeit (dafür braucht man Verschlüsselung)

### Eselsbrücke

**"Signieren ist persönlich"** → Mit PRIVATEM Schlüssel
**"Prüfen ist öffentlich"** → Mit ÖFFENTLICHEM Schlüssel

---

## Übungsaufgaben

### Aufgabe 1
Was garantiert eine digitale Signatur?

**Lösung:** Eine digitale Signatur garantiert:
1. **Authentizität:** Das Dokument stammt wirklich vom angegebenen Absender
2. **Integrität:** Das Dokument wurde nach dem Signieren nicht verändert
3. **Nichtabstreitbarkeit:** Der Absender kann nicht leugnen, das Dokument signiert zu haben

Sie garantiert **nicht** die Vertraulichkeit - der Inhalt ist nicht verschlüsselt.

### Aufgabe 2
Beschreiben Sie den Ablauf der Signaturerstellung.

**Lösung:**
1. Der Absender erstellt einen **Hash** des Dokuments
2. Der Hash wird mit dem **privaten Schlüssel** des Absenders verschlüsselt
3. Das Ergebnis ist die **digitale Signatur**
4. Dokument und Signatur werden zusammen an den Empfänger gesendet

### Aufgabe 3
Wie prüft der Empfänger eine digitale Signatur?

**Lösung:**
1. Der Empfänger berechnet den **Hash des empfangenen Dokuments** (Hash1)
2. Er entschlüsselt die Signatur mit dem **öffentlichen Schlüssel** des Absenders (Hash2)
3. Er **vergleicht** beide Hashes:
   - Gleich → Signatur gültig, Dokument unverändert
   - Ungleich → Signatur ungültig oder Dokument manipuliert

### Aufgabe 4
Was ist der Unterschied zwischen Verschlüsselung und digitaler Signatur?

**Lösung:**
| Aspekt | Verschlüsselung | Digitale Signatur |
|--------|-----------------|-------------------|
| **Ziel** | Vertraulichkeit | Authentizität, Integrität |
| **Verschlüsseln** | Mit öffentlichem Schlüssel des Empfängers | - |
| **Signieren** | - | Mit privatem Schlüssel des Absenders |
| **Prüfen** | Mit privatem Schlüssel des Empfängers | Mit öffentlichem Schlüssel des Absenders |

Bei Verschlüsselung kann nur der Empfänger lesen; bei Signatur kann jeder mit dem öffentlichen Schlüssel prüfen.

---

## Querverweise

- [04-05-01 Verschlüsselungsverfahren](./04-05-01-encryption-methods.md) - Asymmetrische Verschlüsselung
- [04-05-02 Hashwerte](./04-05-02-hash-values.md) - Hash für Signaturen
- [04-05-03 Zertifikate](./04-05-03-certificates.md) - Schlüsselverifikation
- [04-01-01 CIA-Triade](../04-01-protection-goals/04-01-01-cia-triad.md) - Authentizität, Integrität
