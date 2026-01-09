# Lizenzarten

## Lernziele

Nach diesem Kapitel solltest du:
- Verschiedene Softwarelizenzmodelle kennen
- Proprietäre und Open-Source-Lizenzen unterscheiden können
- Die wichtigsten Open-Source-Lizenzen kennen
- Lizenzpflichten verstehen

---

## Kerninhalt

### Was ist eine Softwarelizenz?

```
┌────────────────────────────────────────────────────────────────────┐
│                      SOFTWARELIZENZ                                │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Definition:                                                      │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ Eine Lizenz ist ein Vertrag, der regelt, unter welchen     │ │
│   │ Bedingungen Software genutzt werden darf.                   │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   Die Lizenz definiert:                                            │
│   • WER die Software nutzen darf                                   │
│   • WIE die Software genutzt werden darf                          │
│   • WO die Software genutzt werden darf                           │
│   • Unter welchen BEDINGUNGEN                                      │
│                                                                     │
│   Grundlegende Unterscheidung:                                     │
│                                                                     │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │                    LIZENZKATEGORIEN                          │ │
│   │                                                              │ │
│   │     ┌────────────────┐        ┌────────────────┐           │ │
│   │     │  PROPRIETÄR    │        │  OPEN SOURCE   │           │ │
│   │     │  (geschlossen) │        │    (offen)     │           │ │
│   │     └───────┬────────┘        └───────┬────────┘           │ │
│   │             │                         │                     │ │
│   │     • Quellcode geheim        • Quellcode offen            │ │
│   │     • Nutzung eingeschränkt   • Nutzung erlaubt            │ │
│   │     • Kostenpflichtig (meist) • Kostenlos (meist)          │ │
│   │     • Keine Änderungen        • Änderungen erlaubt         │ │
│   │                                                              │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Proprietäre Lizenzen

```
┌────────────────────────────────────────────────────────────────────┐
│                    PROPRIETÄRE LIZENZEN                            │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Merkmale:                                                        │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ • Quellcode NICHT zugänglich                                │ │
│   │ • Software wird nur als ausführbare Datei geliefert        │ │
│   │ • Strenge Nutzungsbedingungen (EULA)                       │ │
│   │ • Änderungen und Weitergabe verboten                       │ │
│   │ • Meist kostenpflichtig                                    │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   LIZENZMODELLE                                                    │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │                                                             │  │
│   │ EINZELPLATZLIZENZ (Single User)                            │  │
│   │ ┌────────────────────────────────────────────────────────┐ │  │
│   │ │ • Ein Nutzer, ein Gerät                                │ │  │
│   │ │ • Installation auf EINEM Computer                      │ │  │
│   │ │ • Beispiel: Microsoft Office Home                      │ │  │
│   │ └────────────────────────────────────────────────────────┘ │  │
│   │                                                             │  │
│   │ VOLUMENLIZENZ                                               │  │
│   │ ┌────────────────────────────────────────────────────────┐ │  │
│   │ │ • Mehrere Installationen/Nutzer                        │ │  │
│   │ │ • Rabatte bei größeren Mengen                          │ │  │
│   │ │ • Zentrale Verwaltung möglich                          │ │  │
│   │ │ • Beispiel: Microsoft Volume Licensing                 │ │  │
│   │ └────────────────────────────────────────────────────────┘ │  │
│   │                                                             │  │
│   │ CONCURRENT/FLOATING LICENSE                                │  │
│   │ ┌────────────────────────────────────────────────────────┐ │  │
│   │ │ • Begrenzte Anzahl gleichzeitiger Nutzer               │ │  │
│   │ │ • Mehr Installationen als Lizenzen möglich             │ │  │
│   │ │ • Lizenzserver verwaltet Zugriffe                      │ │  │
│   │ │ • Beispiel: AutoCAD Network License                    │ │  │
│   │ └────────────────────────────────────────────────────────┘ │  │
│   │                                                             │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

```
┌────────────────────────────────────────────────────────────────────┐
│              PROPRIETÄRE LIZENZMODELLE (Fortsetzung)               │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   ABONNEMENT (Subscription)                                        │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Zeitlich begrenzte Nutzung                               │  │
│   │ • Regelmäßige Zahlung (monatlich/jährlich)                 │  │
│   │ • Immer aktuelle Version                                   │  │
│   │ • Software-as-a-Service (SaaS)                             │  │
│   │ • Beispiel: Microsoft 365, Adobe Creative Cloud            │  │
│   │                                                             │  │
│   │    ┌─────┬─────┬─────┬─────┬─────┐                        │  │
│   │    │ Jan │ Feb │ Mär │ Apr │ ... │  → Dauerzahlung        │  │
│   │    │  €  │  €  │  €  │  €  │  €  │                        │  │
│   │    └─────┴─────┴─────┴─────┴─────┘                        │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   OEM-LIZENZ (Original Equipment Manufacturer)                    │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • An Hardware gebunden                                     │  │
│   │ • Nur zusammen mit Gerät verkauft                          │  │
│   │ • Nicht übertragbar                                        │  │
│   │ • Günstiger als Retail-Version                             │  │
│   │ • Beispiel: Windows vorinstalliert auf Laptop              │  │
│   │                                                             │  │
│   │    ┌─────────────┐                                         │  │
│   │    │   Laptop    │ ← Windows OEM-Lizenz ist AN diesen     │  │
│   │    │  + Windows  │    Laptop gebunden, nicht übertragbar   │  │
│   │    └─────────────┘                                         │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   RETAIL-LIZENZ                                                   │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Im Einzelhandel gekauft                                  │  │
│   │ • Auf neuen Computer übertragbar                           │  │
│   │ • Teurer als OEM                                           │  │
│   │ • Enthält oft physischen Datenträger                       │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Open-Source-Lizenzen

```
┌────────────────────────────────────────────────────────────────────┐
│                    OPEN-SOURCE-LIZENZEN                            │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Grundprinzipien:                                                 │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ ✓ Quellcode ist frei verfügbar                              │ │
│   │ ✓ Software darf verändert werden                            │ │
│   │ ✓ Software darf weitergegeben werden                        │ │
│   │ ✓ Keine Diskriminierung von Personen/Gruppen               │ │
│   │ ✓ Keine Einschränkung der Nutzungsart                      │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   WICHTIG: Open Source ≠ Public Domain!                           │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ Open Source hat Lizenzbedingungen, die eingehalten         │ │
│   │ werden MÜSSEN!                                              │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   Zwei Hauptkategorien:                                            │
│                                                                     │
│   ┌────────────────────────┐    ┌────────────────────────┐        │
│   │     COPYLEFT           │    │    PERMISSIV           │        │
│   │    (streng)            │    │    (freizügig)         │        │
│   ├────────────────────────┤    ├────────────────────────┤        │
│   │ • Änderungen müssen    │    │ • Änderungen dürfen    │        │
│   │   unter gleicher       │    │   auch proprietär      │        │
│   │   Lizenz stehen        │    │   sein                 │        │
│   │ • "Viral" - Lizenz     │    │ • Maximale Freiheit    │        │
│   │   vererbt sich         │    │   für Nutzung          │        │
│   │                        │    │                        │        │
│   │ Beispiele:             │    │ Beispiele:             │        │
│   │ • GPL                  │    │ • MIT                  │        │
│   │ • AGPL                 │    │ • Apache 2.0           │        │
│   │ • LGPL                 │    │ • BSD                  │        │
│   └────────────────────────┘    └────────────────────────┘        │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Wichtige Open-Source-Lizenzen

```
┌────────────────────────────────────────────────────────────────────┐
│                 WICHTIGE OPEN-SOURCE-LIZENZEN                      │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   GPL (GNU General Public License)                                │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Typ: Copyleft (streng)                                     │  │
│   │                                                             │  │
│   │ Hauptmerkmale:                                             │  │
│   │ • Quellcode muss verfügbar sein                            │  │
│   │ • Abgeleitete Werke müssen AUCH GPL sein                   │  │
│   │ • Lizenz "vererbt" sich (viral)                            │  │
│   │ • Kommerzielle Nutzung erlaubt                             │  │
│   │                                                             │  │
│   │ Beispiele: Linux-Kernel, WordPress, MySQL                  │  │
│   │                                                             │  │
│   │ ⚠ Vorsicht in Unternehmen: Eigene Software könnte         │  │
│   │   ebenfalls unter GPL stehen müssen!                       │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   LGPL (Lesser GPL)                                               │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Typ: Copyleft (schwächer)                                  │  │
│   │                                                             │  │
│   │ Hauptmerkmale:                                             │  │
│   │ • Wie GPL, aber für Bibliotheken gedacht                   │  │
│   │ • Verlinkung mit proprietärem Code erlaubt                 │  │
│   │ • Nur Änderungen an der Bibliothek müssen LGPL sein       │  │
│   │                                                             │  │
│   │ Beispiele: glibc, Qt (teilweise)                           │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

```
┌────────────────────────────────────────────────────────────────────┐
│            WICHTIGE OPEN-SOURCE-LIZENZEN (Fortsetzung)             │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   MIT-LIZENZ                                                       │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Typ: Permissiv (sehr freizügig)                            │  │
│   │                                                             │  │
│   │ Hauptmerkmale:                                             │  │
│   │ • Sehr kurze, einfache Lizenz                              │  │
│   │ • Nahezu keine Einschränkungen                             │  │
│   │ • Darf in proprietärer Software verwendet werden           │  │
│   │ • Einzige Bedingung: Copyright-Vermerk beibehalten        │  │
│   │                                                             │  │
│   │ Beispiele: jQuery, React, Node.js                          │  │
│   │                                                             │  │
│   │ → Oft die "sicherste" Wahl für Unternehmen                │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   APACHE LICENSE 2.0                                              │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Typ: Permissiv                                             │  │
│   │                                                             │  │
│   │ Hauptmerkmale:                                             │  │
│   │ • Ähnlich wie MIT, aber ausführlicher                      │  │
│   │ • Explizite Patentlizenz enthalten                        │  │
│   │ • Änderungen müssen dokumentiert werden                    │  │
│   │ • Proprietäre Nutzung erlaubt                              │  │
│   │                                                             │  │
│   │ Beispiele: Android, Apache HTTP Server, Kubernetes         │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   BSD-LIZENZ                                                       │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Typ: Permissiv                                             │  │
│   │                                                             │  │
│   │ Hauptmerkmale:                                             │  │
│   │ • Sehr freizügig, ähnlich MIT                              │  │
│   │ • Verschiedene Varianten (2-Clause, 3-Clause)              │  │
│   │ • Kann in proprietärer Software verwendet werden           │  │
│   │                                                             │  │
│   │ Beispiele: FreeBSD, macOS (Teile), PostgreSQL             │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Lizenzvergleich

```
┌────────────────────────────────────────────────────────────────────┐
│                      LIZENZVERGLEICH                               │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Lizenz     │ Quellcode │ Änderung │ Propri-  │ Patent- │ Copyleft│
│              │ offen     │ erlaubt  │ etär OK  │ schutz  │         │
│   ───────────┼───────────┼──────────┼──────────┼─────────┼─────────│
│   Proprietär │    ✗      │    ✗     │   n/a    │   n/a   │   ✗     │
│   GPL        │    ✓      │    ✓     │    ✗     │   ✗     │   ✓     │
│   LGPL       │    ✓      │    ✓     │  (✓)*    │   ✗     │  (✓)*   │
│   MIT        │    ✓      │    ✓     │    ✓     │   ✗     │   ✗     │
│   Apache 2.0 │    ✓      │    ✓     │    ✓     │   ✓     │   ✗     │
│   BSD        │    ✓      │    ✓     │    ✓     │   ✗     │   ✗     │
│                                                                     │
│   * LGPL: Nur bei Verlinkung, nicht bei direkter Einbindung       │
│                                                                     │
│   Für Unternehmen empfohlen:                                       │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ MIT / Apache / BSD → Geringes rechtliches Risiko           │ │
│   │ GPL → Mit Vorsicht verwenden (Lizenz-Vererbung beachten)   │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Weitere Lizenzkonzepte

```
┌────────────────────────────────────────────────────────────────────┐
│                   WEITERE LIZENZKONZEPTE                           │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   FREEWARE                                                        │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Kostenlos nutzbar                                        │  │
│   │ • Aber NICHT Open Source (Quellcode nicht verfügbar)       │  │
│   │ • Keine Änderungen erlaubt                                 │  │
│   │ • Beispiel: Adobe Reader, WhatsApp                         │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   SHAREWARE                                                        │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Kostenlos zum Testen (Testversion)                       │  │
│   │ • Eingeschränkte Funktionen oder zeitlich begrenzt         │  │
│   │ • Vollversion kostenpflichtig                              │  │
│   │ • Beispiel: WinRAR                                         │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   PUBLIC DOMAIN (Gemeinfrei)                                      │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Kein Urheberrecht mehr                                   │  │
│   │ • Vollständig frei nutzbar                                 │  │
│   │ • Keine Bedingungen, keine Einschränkungen                 │  │
│   │ • In Deutschland schwer herzustellen                       │  │
│   │ • Alternative: CC0 (Creative Commons Zero)                 │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   CREATIVE COMMONS (CC)                                           │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Hauptsächlich für Inhalte (Texte, Bilder, Musik)        │  │
│   │ • Verschiedene Kombinationen:                               │  │
│   │   - BY: Namensnennung erforderlich                        │  │
│   │   - NC: Keine kommerzielle Nutzung                        │  │
│   │   - ND: Keine Bearbeitung                                  │  │
│   │   - SA: Share Alike (gleiche Lizenz)                      │  │
│   │ • Beispiel: CC BY-SA (wie Wikipedia)                       │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Proprietär** | Geschlossene, kommerzielle Lizenz |
| **Open Source** | Quellcode offen, bestimmte Freiheiten |
| **Copyleft** | Änderungen müssen unter gleicher Lizenz stehen |
| **Permissiv** | Wenige Einschränkungen, freizügig |
| **EULA** | End User License Agreement |
| **OEM** | Original Equipment Manufacturer |
| **Freeware** | Kostenlos, aber nicht Open Source |
| **Public Domain** | Gemeinfrei, ohne Urheberrecht |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was ist der Unterschied zwischen GPL und MIT?
- Was bedeutet Copyleft?
- Unterscheiden Sie Freeware von Open Source

### Wichtig zu merken

- **Open Source ≠ kostenlos ≠ Public Domain**
- **GPL:** Copyleft, Änderungen müssen auch GPL sein
- **MIT:** Permissiv, darf in proprietärer Software verwendet werden
- **OEM-Lizenz:** An Hardware gebunden
- **Freeware:** Kostenlos, aber KEIN Quellcode
- Bei GPL-Code in eigenem Produkt: Eigenes Produkt wird auch GPL!

---

## Übungsaufgaben

### Aufgabe 1
Ein Unternehmen möchte eine JavaScript-Bibliothek in seine kommerzielle Software einbinden. Die Bibliothek steht unter GPL. Was ist zu beachten?

**Lösung:**
Wenn GPL-Code eingebunden wird, muss die gesamte Software ebenfalls unter GPL gestellt werden. Das bedeutet:
- Der Quellcode der kommerziellen Software müsste veröffentlicht werden
- Die Software müsste frei weitergegeben werden dürfen

**Empfehlung:** Eine alternative Bibliothek mit MIT- oder Apache-Lizenz verwenden, oder eine kommerzielle Lizenz der Bibliothek erwerben (falls verfügbar).

### Aufgabe 2
Was ist der Unterschied zwischen Freeware und Open Source?

**Lösung:**
| Freeware | Open Source |
|----------|-------------|
| Kostenlos nutzbar | Kostenlos nutzbar (meist) |
| Quellcode NICHT verfügbar | Quellcode VERFÜGBAR |
| Keine Änderungen erlaubt | Änderungen erlaubt |
| Beispiel: Adobe Reader | Beispiel: Firefox |

### Aufgabe 3
Ein Mitarbeiter möchte Software von einer Website herunterladen. Sie ist als "Public Domain" gekennzeichnet. Was bedeutet das?

**Lösung:**
**Public Domain** bedeutet, dass die Software gemeinfrei ist:
- Kein Urheberrechtsschutz mehr vorhanden
- Kann frei genutzt, verändert und weitergegeben werden
- Keine Lizenzgebühren, keine Bedingungen
- Kann auch in kommerziellen Produkten verwendet werden

**Vorsicht:** Die Kennzeichnung prüfen - nicht jede Behauptung ist korrekt. In Deutschland ist das Aufgeben des Urheberrechts problematisch.

---

## Querverweise

- [06-07-01 Urheberrecht](./06-07-01-copyright.md) - Rechtliche Grundlagen
- [08-04-01 Vertragsarten](../../08-business-processes/08-04-contract-law/08-04-01-contract-types.md) - Lizenzverträge
- [06-01-01 Softwarearten](../06-01-fundamentals/06-01-01-software-types.md) - Softwarekategorien
