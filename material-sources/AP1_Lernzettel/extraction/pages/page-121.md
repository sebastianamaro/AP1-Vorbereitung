# Page 121 - Asymmetrische & Hybride Verschlüsselung, 11.21 Hashwerte

## Asymmetrische Verschlüsselung (Fortsetzung)

**Beispiele:**
- RSA (Rivest-Shamir-Adleman)
- ECC (Elliptic Curve Cryptography)

**Vorteile:**
- Sichere Kommunikation ohne vorherigen Schlüsselaustausch.
- Ermöglicht digitale Signaturen zur Integritätsprüfung.

**Nachteile:**
- Langsamer als symmetrische Verschlüsselung.
- Hoher Rechenaufwand.

---

## Hybride Verschlüsselung

**Hybride Verschlüsselung** kombiniert die Vorteile von symmetrischer und asymmetrischer Verschlüsselung.

### Funktionsweise:

1. Eine **asymmetrische Methode** (z. B. RSA) wird genutzt, um einen einmaligen symmetrischen Schlüssel sicher zu übertragen.
2. Die eigentlichen Daten werden mit einer **schnellen symmetrischen Methode** (z. B. AES) verschlüsselt.

**Beispiele:**
- TLS (Transport Layer Security, z. B. bei HTTPS)
- PGP (Pretty Good Privacy) für E-Mail-Verschlüsselung

**Vorteile:**
- Hohe Sicherheit durch asymmetrische Schlüsselverteilung.
- Effiziente Datenverschlüsselung durch symmetrische Verfahren.

**Nachteile:**
- Komplexer als rein symmetrische oder asymmetrische Verschlüsselung.

---

## 11.21 Hashwerte

Ein **Hashwert** ist ein eindeutiger **Fingerprint**, der durch eine **Hashfunktion** aus Daten berechnet wird. Er dient zur **Integritätsprüfung und Authentifizierung**.
