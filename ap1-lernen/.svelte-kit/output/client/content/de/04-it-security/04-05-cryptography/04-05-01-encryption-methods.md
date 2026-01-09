# Verschlüsselungsverfahren

## Lernziele

Nach diesem Kapitel solltest du:
- Den Unterschied zwischen symmetrischer und asymmetrischer Verschlüsselung kennen
- Typische Verfahren benennen können
- Vor- und Nachteile der Verfahren erklären können
- Hybride Verschlüsselung verstehen

---

## Kerninhalt

### Grundlagen der Verschlüsselung

**Verschlüsselung (Kryptografie)** wandelt lesbare Daten (Klartext) in unlesbare Daten (Chiffrat/Geheimtext) um.

```
┌─────────────────────────────────────────────────────────────────┐
│                   VERSCHLÜSSELUNG                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│    KLARTEXT          VERSCHLÜSSELUNG         CHIFFRAT          │
│   ┌─────────┐           ┌─────┐           ┌─────────┐          │
│   │ "Hallo" │  ──────►  │🔑   │  ──────►  │"Xk9@#"  │          │
│   └─────────┘           └─────┘           └─────────┘          │
│                                                                 │
│    CHIFFRAT          ENTSCHLÜSSELUNG         KLARTEXT          │
│   ┌─────────┐           ┌─────┐           ┌─────────┐          │
│   │"Xk9@#"  │  ──────►  │🔑   │  ──────►  │ "Hallo" │          │
│   └─────────┘           └─────┘           └─────────┘          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Übersicht: Verschlüsselungsarten

```
┌─────────────────────────────────────────────────────────────────┐
│              VERSCHLÜSSELUNGSVERFAHREN                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────────┐     ┌──────────────────────┐         │
│  │    SYMMETRISCH       │     │    ASYMMETRISCH      │         │
│  │                      │     │                      │         │
│  │   Ein Schlüssel      │     │   Zwei Schlüssel     │         │
│  │   für Ver- und       │     │   (öffentlich +      │         │
│  │   Entschlüsselung    │     │    privat)           │         │
│  │                      │     │                      │         │
│  │   • AES              │     │   • RSA              │         │
│  │   • DES (veraltet)   │     │   • ECC              │         │
│  │   • 3DES             │     │   • Diffie-Hellman   │         │
│  └──────────────────────┘     └──────────────────────┘         │
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │                    HYBRID                                 │  │
│  │   Kombination: Asymmetrisch für Schlüsseltausch,          │  │
│  │                Symmetrisch für Daten                      │  │
│  │   • TLS/SSL, HTTPS                                        │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Symmetrische Verschlüsselung

Bei der **symmetrischen Verschlüsselung** wird **ein Schlüssel** für Ver- und Entschlüsselung verwendet.

```
┌─────────────────────────────────────────────────────────────────┐
│              SYMMETRISCHE VERSCHLÜSSELUNG                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Alice                                              Bob        │
│   ┌─────┐                                         ┌─────┐      │
│   │     │  ──── Gleicher Schlüssel 🔑 ───────►  │     │      │
│   └─────┘                                         └─────┘      │
│                                                                 │
│   1. Alice verschlüsselt mit Schlüssel 🔑                       │
│   2. Alice sendet verschlüsselte Nachricht                      │
│   3. Bob entschlüsselt mit demselben Schlüssel 🔑               │
│                                                                 │
│   ⚠️ Problem: Wie tauschen Alice und Bob den Schlüssel sicher? │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Verfahren

| Verfahren | Schlüssellänge | Status |
|-----------|----------------|--------|
| **AES** (Advanced Encryption Standard) | 128/192/256 Bit | Aktueller Standard |
| **DES** (Data Encryption Standard) | 56 Bit | Veraltet, unsicher |
| **3DES** (Triple DES) | 168 Bit | Veraltet |
| **ChaCha20** | 256 Bit | Modern, schnell |

#### Vor- und Nachteile

| Vorteile | Nachteile |
|----------|-----------|
| **Schnell** (wenig Rechenaufwand) | **Schlüsseltausch** problematisch |
| **Effizient** für große Datenmengen | Bei n Personen: n*(n-1)/2 Schlüssel |
| Einfache Implementierung | Schlüssel muss geheim bleiben |

---

### Asymmetrische Verschlüsselung

Bei der **asymmetrischen Verschlüsselung** gibt es **zwei verschiedene Schlüssel**:
- **Öffentlicher Schlüssel** (public key) - zum Verschlüsseln
- **Privater Schlüssel** (private key) - zum Entschlüsseln

```
┌─────────────────────────────────────────────────────────────────┐
│              ASYMMETRISCHE VERSCHLÜSSELUNG                      │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Alice                                              Bob        │
│   ┌─────┐                                         ┌─────┐      │
│   │     │                                         │ 🔑🔑│      │
│   └─────┘                                         └─────┘      │
│                                                   öffentlich 🔓│
│                                                   privat    🔐│
│                                                                 │
│   1. Bob veröffentlicht seinen öffentlichen Schlüssel 🔓        │
│   2. Alice verschlüsselt mit Bobs öffentlichem Schlüssel 🔓     │
│   3. Alice sendet verschlüsselte Nachricht                      │
│   4. Bob entschlüsselt mit seinem privaten Schlüssel 🔐         │
│                                                                 │
│   ✅ Vorteil: Kein geheimer Schlüsseltausch nötig              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Verfahren

| Verfahren | Typische Schlüssellänge | Verwendung |
|-----------|------------------------|------------|
| **RSA** | 2048-4096 Bit | Verschlüsselung, Signaturen |
| **ECC** (Elliptic Curve) | 256-384 Bit | Moderne Alternative zu RSA |
| **Diffie-Hellman** | variabel | Schlüsselaustausch |

#### Vor- und Nachteile

| Vorteile | Nachteile |
|----------|-----------|
| **Kein Schlüsseltausch** nötig | **Langsam** (rechenintensiv) |
| Nur n Schlüsselpaare für n Personen | Nicht für große Datenmengen |
| Ermöglicht digitale Signaturen | Längere Schlüssel nötig |

---

### Hybride Verschlüsselung

Die **hybride Verschlüsselung** kombiniert die Vorteile beider Verfahren:

```
┌─────────────────────────────────────────────────────────────────┐
│              HYBRIDE VERSCHLÜSSELUNG                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   1. Zufälligen Session-Key (symmetrisch) generieren            │
│                        │                                        │
│                        ▼                                        │
│   2. Daten mit Session-Key symmetrisch verschlüsseln            │
│                        │                                        │
│                        ▼                                        │
│   3. Session-Key mit öffentlichem Schlüssel asymmetrisch        │
│      verschlüsseln                                              │
│                        │                                        │
│                        ▼                                        │
│   4. Beides zusammen übertragen:                                │
│      [Verschlüsselter Session-Key] + [Verschlüsselte Daten]     │
│                                                                 │
│   EMPFÄNGER:                                                    │
│   5. Session-Key mit privatem Schlüssel entschlüsseln           │
│   6. Daten mit Session-Key entschlüsseln                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Beispiele für hybride Verschlüsselung

| Protokoll | Verwendung |
|-----------|------------|
| **TLS/SSL** | HTTPS, sichere Webverbindungen |
| **PGP/GPG** | E-Mail-Verschlüsselung |
| **S/MIME** | E-Mail-Verschlüsselung |
| **SSH** | Sichere Fernzugriffe |

---

### Vergleich: Symmetrisch vs. Asymmetrisch

| Aspekt | Symmetrisch | Asymmetrisch |
|--------|-------------|--------------|
| **Anzahl Schlüssel** | 1 | 2 (public + private) |
| **Geschwindigkeit** | Schnell | Langsam |
| **Schlüsseltausch** | Problematisch | Einfach |
| **Typische Verwendung** | Daten verschlüsseln | Schlüssel/Signaturen |
| **Beispiele** | AES, ChaCha20 | RSA, ECC |

---

### Anwendungsbereiche

| Anwendung | Verfahren | Beispiel |
|-----------|-----------|----------|
| **Festplattenverschlüsselung** | Symmetrisch | BitLocker (AES) |
| **HTTPS** | Hybrid | TLS (RSA + AES) |
| **E-Mail** | Hybrid | PGP, S/MIME |
| **VPN** | Hybrid | IPsec, OpenVPN |
| **Digitale Signatur** | Asymmetrisch | RSA, ECDSA |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Symmetrische Verschlüsselung** | Ein Schlüssel für Ver- und Entschlüsselung |
| **Asymmetrische Verschlüsselung** | Zwei Schlüssel (öffentlich + privat) |
| **Hybride Verschlüsselung** | Kombination beider Verfahren |
| **AES** | Advanced Encryption Standard (symmetrisch) |
| **RSA** | Asymmetrisches Verfahren |
| **Public Key** | Öffentlicher Schlüssel |
| **Private Key** | Privater Schlüssel |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was ist der Unterschied zwischen symmetrischer und asymmetrischer Verschlüsselung?
- Nennen Sie Vor- und Nachteile symmetrischer Verschlüsselung
- Was ist hybride Verschlüsselung?
- Nennen Sie ein symmetrisches und ein asymmetrisches Verfahren

### Wichtig zu merken

- **Symmetrisch:** 1 Schlüssel, schnell, aber Schlüsseltausch-Problem
- **Asymmetrisch:** 2 Schlüssel, langsam, aber kein Schlüsseltausch-Problem
- **Hybrid:** Kombination (asymmetrisch für Schlüssel, symmetrisch für Daten)
- **AES** = aktueller symmetrischer Standard
- **RSA** = bekanntes asymmetrisches Verfahren

---

## Übungsaufgaben

### Aufgabe 1
Was ist der Unterschied zwischen symmetrischer und asymmetrischer Verschlüsselung?

**Lösung:**
- **Symmetrische Verschlüsselung:** Verwendet **einen** Schlüssel für Ver- und Entschlüsselung. Beide Parteien müssen denselben geheimen Schlüssel besitzen.
- **Asymmetrische Verschlüsselung:** Verwendet **zwei** verschiedene Schlüssel - einen öffentlichen zum Verschlüsseln und einen privaten zum Entschlüsseln.

### Aufgabe 2
Nennen Sie zwei Vorteile und einen Nachteil der symmetrischen Verschlüsselung.

**Lösung:**
**Vorteile:**
1. Schnell und effizient
2. Geringer Rechenaufwand, gut für große Datenmengen

**Nachteil:**
Schlüsseltausch ist problematisch - wie teilt man den geheimen Schlüssel sicher?

### Aufgabe 3
Was ist hybride Verschlüsselung und warum wird sie verwendet?

**Lösung:** **Hybride Verschlüsselung** kombiniert symmetrische und asymmetrische Verschlüsselung:
1. Ein zufälliger symmetrischer Schlüssel (Session-Key) wird generiert
2. Die Daten werden mit dem Session-Key symmetrisch verschlüsselt (schnell)
3. Der Session-Key wird mit dem öffentlichen Schlüssel des Empfängers asymmetrisch verschlüsselt

Damit werden die Vorteile beider Verfahren genutzt: Schnelle Datenverschlüsselung UND einfacher Schlüsseltausch.

### Aufgabe 4
Nennen Sie je ein Beispiel für ein symmetrisches und ein asymmetrisches Verschlüsselungsverfahren.

**Lösung:**
- **Symmetrisch:** AES (Advanced Encryption Standard)
- **Asymmetrisch:** RSA (Rivest-Shamir-Adleman)

---

## Querverweise

- [04-05-02 Hashwerte](./04-05-02-hash-values.md) - Einweg-Funktionen
- [04-05-03 Zertifikate](./04-05-03-certificates.md) - Öffentliche Schlüssel verifizieren
- [04-05-04 Digitale Signaturen](./04-05-04-digital-signatures.md) - Asymmetrische Verfahren nutzen
- [04-01-01 CIA-Triade](../04-01-protection-goals/04-01-01-cia-triad.md) - Vertraulichkeit
