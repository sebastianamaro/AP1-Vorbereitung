# Page 122 - Hashwerte & 11.22 Zertifikate

## Hashwerte (Fortsetzung)

### Eigenschaften:

- **Einwegfunktion:** Nicht umkehrbar.
- **Kollisionsresistenz:** Unterschiedliche Daten erzeugen unterschiedliche Hashwerte.
- **Deterministisch:** Gleiche Eingabe → gleicher Hashwert.

### Gängige Algorithmen:

- **Sicher:** SHA-256, SHA-3, Argon2 (für Passwörter).
- **Veraltet:** MD5, SHA-1 (anfällig für Kollisionen).

---

## 11.22 Zertifikate

Ein **Zertifikat** ist eine digitale Bescheinigung, die die **Echtheit einer Identität** bestätigt. Es wird von einer **Zertifizierungsstelle (CA, Certificate Authority)** ausgestellt und dient vor allem der verschlüsselten Kommunikation.

### Bestandteile

- Öffentlicher Schlüssel des Inhabers
- Name des Inhabers (z. B. Domainname)
- Name der Zertifizierungsstelle (CA)
- Gültigkeitsdauer
- Digitale Signatur der CA

### Arten

- **TLS/SSL-Zertifikate:** Sicherung von Webseiten (HTTPS).
- **Code-Signing-Zertifikate:** Verifizierung von Software.
- **E-Mail-Zertifikate (S/MIME):** Signierung und Verschlüsselung von E-Mails.
- **Client-/Benutzerzertifikate:** Authentifizierung von Nutzern.

### Vertrauenshierarchie (Public Key Infrastructure – PKI)

1. **Root-CA** (höchste Vertrauensinstanz)
2. **Intermediate-CA** (stellt Zertifikate für Endnutzer aus)
3. **Endnutzer-Zertifikat** (z. B. für eine Webseite)
