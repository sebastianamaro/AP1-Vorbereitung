# Hashwerte

## Lernziele

Nach diesem Kapitel solltest du:
- Den Begriff Hashwert/Hashfunktion erklären können
- Eigenschaften von Hashfunktionen kennen
- Typische Anwendungen von Hashwerten nennen können
- Den Unterschied zu Verschlüsselung verstehen

**Hinweis:** Dieses Thema ist NEU im Prüfungskatalog 2025 und daher besonders prüfungsrelevant!

---

## Kerninhalt

### Was ist ein Hashwert?

Ein **Hashwert** (auch Prüfsumme, Fingerabdruck) ist das Ergebnis einer **Hashfunktion**. Diese wandelt eine beliebig lange Eingabe in eine Ausgabe fester Länge um.

```
┌─────────────────────────────────────────────────────────────────┐
│                      HASHFUNKTION                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   EINGABE (beliebige Länge)           HASHWERT (feste Länge)    │
│                                                                 │
│   "Hallo"              ──────────►    a5b2c...                  │
│                          Hash-                                  │
│   "Hallo Welt"         ──────────►    7f3d1...                  │
│                         Funktion                                │
│   [500 MB Datei]       ──────────►    9c8e4...                  │
│                                                                 │
│   ⚠️ WICHTIG: Einwegfunktion - nicht umkehrbar!                │
│   Aus dem Hashwert kann die Eingabe NICHT zurückgerechnet      │
│   werden!                                                       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Eigenschaften von Hashfunktionen

| Eigenschaft | Beschreibung |
|-------------|--------------|
| **Determinismus** | Gleiche Eingabe → immer gleicher Hash |
| **Einwegfunktion** | Nicht umkehrbar (Hash → Original unmöglich) |
| **Kollisionsresistenz** | Verschiedene Eingaben sollten verschiedene Hashes liefern |
| **Avalanche-Effekt** | Kleine Änderung → komplett anderer Hash |
| **Feste Länge** | Egal wie groß die Eingabe, der Hash hat immer dieselbe Länge |

---

### Der Avalanche-Effekt

```
┌─────────────────────────────────────────────────────────────────┐
│                   AVALANCHE-EFFEKT                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Eingabe: "Hallo"                                              │
│   SHA-256: 753692ec...2a1d (64 Zeichen)                        │
│                                                                 │
│   Eingabe: "Hallp"  (nur ein Buchstabe anders!)                 │
│   SHA-256: b8d126f...7c3e (komplett anderer Hash!)              │
│                                                                 │
│   ──────────────────────────────────────────────────────────    │
│   Selbst kleinste Änderungen führen zu völlig anderen          │
│   Hashwerten. Dies macht Manipulation erkennbar!                │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Bekannte Hash-Algorithmen

| Algorithmus | Hashlänge | Status |
|-------------|-----------|--------|
| **MD5** | 128 Bit (32 Hex-Zeichen) | ❌ Unsicher, nicht mehr verwenden |
| **SHA-1** | 160 Bit (40 Hex-Zeichen) | ❌ Unsicher, nicht mehr verwenden |
| **SHA-256** | 256 Bit (64 Hex-Zeichen) | ✅ Aktueller Standard |
| **SHA-384** | 384 Bit (96 Hex-Zeichen) | ✅ Sicher |
| **SHA-512** | 512 Bit (128 Hex-Zeichen) | ✅ Sicher |
| **SHA-3** | variabel | ✅ Neuer Standard |

---

### Anwendungen von Hashwerten

```
┌─────────────────────────────────────────────────────────────────┐
│              ANWENDUNGEN VON HASHWERTEN                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │ PASSWORT-       │  │ INTEGRITÄTS-    │  │ DIGITALE        │ │
│  │ SPEICHERUNG     │  │ PRÜFUNG         │  │ SIGNATUREN      │ │
│  │                 │  │                 │  │                 │ │
│  │ Passwort-Hash   │  │ Prüfsumme für   │  │ Hash wird       │ │
│  │ statt Klartext  │  │ Downloads       │  │ signiert        │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘ │
│                                                                 │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │ BLOCKCHAIN      │  │ DEDUPLIKATION   │  │ NACHWEISBAR-    │ │
│  │                 │  │                 │  │ KEIT            │ │
│  │ Verkettung der  │  │ Doppelte Daten  │  │ Hashwert als    │ │
│  │ Blöcke          │  │ erkennen        │  │ Zeitstempel     │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### 1. Passwortspeicherung

```
┌────────────────────────────────────────────────────────────────┐
│              PASSWORT-HASHING                                  │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   FALSCH: Passwort im Klartext speichern                       │
│   ─────────────────────────────────────                        │
│   Datenbank: | User: Max | Passwort: "Geheim123" |             │
│                                                                │
│   RICHTIG: Nur Hash speichern                                  │
│   ──────────────────────────                                   │
│   Datenbank: | User: Max | Hash: "a5b2c...9f1" |               │
│                                                                │
│   Bei Login: Eingegebenes Passwort hashen und                  │
│              mit gespeichertem Hash vergleichen                │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

**Zusätzliche Sicherheit durch Salt:**
Ein **Salt** ist ein zufälliger Wert, der vor dem Hashen an das Passwort angehängt wird:
- Verhindert Rainbow-Table-Angriffe
- Gleiche Passwörter haben unterschiedliche Hashes

#### 2. Integritätsprüfung

```
Datei-Download:
1. Website zeigt Hash der Datei: SHA256: 7f3d1a...
2. Benutzer lädt Datei herunter
3. Benutzer berechnet Hash der heruntergeladenen Datei
4. Vergleich: Sind beide Hashes gleich?
   → Ja: Datei ist unverändert ✅
   → Nein: Datei wurde manipuliert ❌
```

#### 3. Digitale Signaturen

- Der Hash einer Nachricht wird mit dem privaten Schlüssel signiert
- Verifizierung mit öffentlichem Schlüssel
- Schneller als die gesamte Nachricht zu signieren

---

### Hash vs. Verschlüsselung

| Aspekt | Hash | Verschlüsselung |
|--------|------|-----------------|
| **Richtung** | Einweg (nicht umkehrbar) | Umkehrbar (mit Schlüssel) |
| **Zweck** | Integrität prüfen | Vertraulichkeit sichern |
| **Schlüssel** | Kein Schlüssel nötig | Schlüssel erforderlich |
| **Ausgabelänge** | Immer gleich lang | Abhängig von Eingabe |
| **Beispiel** | SHA-256 | AES |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Hashwert** | Ergebnis einer Hashfunktion, feste Länge |
| **Hashfunktion** | Einwegfunktion, berechnet Hashwert |
| **Prüfsumme** | Anderer Begriff für Hashwert |
| **Kollision** | Zwei verschiedene Eingaben liefern denselben Hash |
| **Salt** | Zufallswert, der an Passwort angehängt wird |
| **Avalanche-Effekt** | Kleine Änderung → komplett anderer Hash |
| **SHA** | Secure Hash Algorithm |
| **MD5** | Message Digest 5 (veraltet, unsicher) |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was ist ein Hashwert?
- Nennen Sie Eigenschaften einer Hashfunktion
- Wofür werden Hashwerte verwendet?
- Warum ist MD5 nicht mehr sicher?
- Was ist der Unterschied zwischen Hash und Verschlüsselung?

### Wichtig zu merken

- Hash ist **Einwegfunktion** (nicht umkehrbar!)
- **SHA-256** = aktueller Standard
- **MD5/SHA-1** = unsicher, nicht mehr verwenden
- Anwendungen: Passwörter, Integrität, Signaturen
- **Salt** schützt vor Rainbow-Table-Angriffen

### Eselsbrücke

**Hash = Fingerabdruck**
- Eindeutig identifizierend
- Aus Fingerabdruck kann man die Person nicht "zurückrechnen"
- Kleine Änderung → komplett anderer Fingerabdruck (bei Daten)

---

## Übungsaufgaben

### Aufgabe 1
Was ist ein Hashwert und welche Eigenschaften hat er?

**Lösung:** Ein **Hashwert** ist das Ergebnis einer Hashfunktion, die eine beliebig lange Eingabe in eine Ausgabe fester Länge umwandelt.

Eigenschaften:
1. **Determinismus:** Gleiche Eingabe → immer gleicher Hash
2. **Einwegfunktion:** Nicht umkehrbar
3. **Kollisionsresistenz:** Verschiedene Eingaben sollten verschiedene Hashes liefern
4. **Avalanche-Effekt:** Kleine Änderung → komplett anderer Hash
5. **Feste Länge:** Unabhängig von der Eingabegröße

### Aufgabe 2
Nennen Sie drei Anwendungsbereiche für Hashwerte.

**Lösung:**
1. **Passwortspeicherung:** Passwörter werden gehasht gespeichert, nicht im Klartext
2. **Integritätsprüfung:** Prüfsummen für Downloads zur Erkennung von Manipulation
3. **Digitale Signaturen:** Der Hash wird signiert statt der gesamten Nachricht

(Weitere: Blockchain, Deduplikation, Zeitstempel)

### Aufgabe 3
Was ist der Unterschied zwischen einem Hashwert und Verschlüsselung?

**Lösung:**
- **Hash:** Einwegfunktion, nicht umkehrbar. Dient zur Integritätsprüfung. Kein Schlüssel nötig.
- **Verschlüsselung:** Umkehrbar (mit Schlüssel). Dient zum Schutz der Vertraulichkeit. Schlüssel erforderlich.

Aus einem Hashwert kann die ursprüngliche Eingabe nicht zurückgerechnet werden, während verschlüsselte Daten mit dem richtigen Schlüssel wieder entschlüsselt werden können.

### Aufgabe 4
Warum werden Passwörter nicht im Klartext, sondern als Hash gespeichert?

**Lösung:** Wenn Passwörter im Klartext gespeichert werden, können Angreifer bei einem Datenbank-Einbruch alle Passwörter direkt lesen. Werden nur Hashes gespeichert, kann der Angreifer die Original-Passwörter nicht ermitteln (da Hash nicht umkehrbar). Bei der Anmeldung wird das eingegebene Passwort gehasht und mit dem gespeicherten Hash verglichen.

### Aufgabe 5
Warum gilt MD5 als unsicher?

**Lösung:** MD5 gilt als unsicher, weil:
1. **Kollisionen gefunden:** Es wurden Methoden entdeckt, zwei verschiedene Eingaben mit demselben MD5-Hash zu erzeugen
2. **Kurze Hashlänge:** Nur 128 Bit
3. **Schnelle Berechnung:** Ermöglicht Brute-Force-Angriffe

Stattdessen sollte SHA-256 oder neuere Algorithmen verwendet werden.

---

## Querverweise

- [04-05-01 Verschlüsselungsverfahren](./04-05-01-encryption-methods.md) - Unterschied Hash vs. Verschlüsselung
- [04-05-04 Digitale Signaturen](./04-05-04-digital-signatures.md) - Hash bei Signaturen
- [04-01-01 CIA-Triade](../04-01-protection-goals/04-01-01-cia-triad.md) - Integrität
- [04-03-02 Authentifizierung-2FA](../04-03-protective-measures/04-03-02-authentication-2fa.md) - Passwortsicherheit
- [03-02-02 Anonymisierung-Pseudonymisierung](../../03-data-protection/03-02-technical-measures/03-02-02-anonymization-pseudonymization.md) - Hashing zur Pseudonymisierung
