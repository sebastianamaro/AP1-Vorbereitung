# Page 123 - Zertifikate, 11.23 Digitale Signaturen & 11.24 Authentifizierung

## Zertifikate - Anwendung & Sicherheit

- **Authentifizierung:** Prüft die Identität einer Website oder Person.
- **Verschlüsselung:** Sicherstellung vertraulicher Kommunikation.
- **Digitale Signaturen:** Schutz vor Manipulation.

---

## 11.23 Digitale Signaturen

Eine **digitale Signatur** stellt die **Echtheit und Integrität** digitaler Daten sicher. Sie basiert auf **asymmetrischer Kryptografie** und wird zur Verifizierung von Dokumenten, Software und E-Mails verwendet.

### Funktionsweise

1. **Hash-Wert berechnen** → Der Inhalt wird gehasht (z. B. mit SHA-256).
2. **Verschlüsselung mit privatem Schlüssel** → Der Hash wird mit dem privaten Schlüssel des Signierenden verschlüsselt.
3. **Verifikation mit öffentlichem Schlüssel** → Der Empfänger entschlüsselt die Signatur mit dem öffentlichen Schlüssel des Absenders.

### Eigenschaften

- **Authentizität:** Prüft die Identität des Absenders.
- **Integrität:** Erkennt Manipulationen am Inhalt.
- **Nichtabstreitbarkeit:** Der Absender kann die Unterschrift nicht leugnen.

### Anwendungen

- E-Mail-Signaturen (S/MIME, PGP)
- Signierte Software (Code-Signing)
- Digitale Dokumente (PDF-Signaturen, X.509-Zertifikate)
- Blockchain & Kryptowährungen

---

## 11.24 Authentifizierung

**Authentifizierung** ist der Prozess der **Überprüfung einer Identität** durch einen oder mehrere Nachweise.
