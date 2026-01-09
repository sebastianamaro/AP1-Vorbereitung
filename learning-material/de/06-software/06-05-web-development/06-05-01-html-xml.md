# HTML und XML

## Lernziele

Nach diesem Kapitel solltest du:
- Die Grundstruktur von HTML verstehen
- Wichtige HTML-Tags kennen
- XML und dessen Unterschied zu HTML verstehen
- Markup-Sprachen von Programmiersprachen unterscheiden können

---

## Kerninhalt

### Was sind Markup-Sprachen?

**Markup-Sprachen** dienen der Strukturierung und Beschreibung von Dokumenten - sie sind KEINE Programmiersprachen.

```
┌─────────────────────────────────────────────────────────────────┐
│                    MARKUP-SPRACHEN                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Markup-Sprache:                                              │
│   • Beschreibt Struktur und Inhalt                            │
│   • Verwendet Tags zur Auszeichnung                           │
│   • Keine Logik, keine Berechnungen                           │
│   • Deklarativ (beschreibt WAS, nicht WIE)                    │
│                                                                 │
│   Programmiersprache:                                          │
│   • Enthält Logik und Kontrollstrukturen                      │
│   • Kann Berechnungen durchführen                             │
│   • Führt Aktionen aus                                        │
│                                                                 │
│   Beispiele:                                                   │
│   ┌─────────────────────┐    ┌─────────────────────┐          │
│   │   MARKUP            │    │   PROGRAMMIERUNG    │          │
│   │   • HTML            │    │   • Java            │          │
│   │   • XML             │    │   • Python          │          │
│   │   • Markdown        │    │   • JavaScript      │          │
│   └─────────────────────┘    └─────────────────────┘          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### HTML (HyperText Markup Language)

**HTML** ist die Standard-Markup-Sprache für Webseiten.

```
┌────────────────────────────────────────────────────────────────┐
│                    HTML-GRUNDSTRUKTUR                          │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   <!DOCTYPE html>           ← Dokumenttyp-Deklaration         │
│   <html>                    ← Wurzelelement                   │
│     <head>                  ← Metadaten (nicht sichtbar)      │
│       <title>Titel</title>  ← Titel im Browser-Tab            │
│     </head>                                                    │
│     <body>                  ← Sichtbarer Inhalt               │
│       <h1>Überschrift</h1>                                    │
│       <p>Ein Absatz</p>                                       │
│     </body>                                                    │
│   </html>                                                      │
│                                                                │
│   Tags:                                                       │
│   <tag>Inhalt</tag>    ← Öffnendes und schließendes Tag      │
│   <tag />              ← Selbstschließendes Tag (z.B. <br />) │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Wichtige HTML-Tags

```
┌────────────────────────────────────────────────────────────────┐
│                   WICHTIGE HTML-TAGS                           │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   STRUKTUR:                                                   │
│   <html>        Wurzelelement                                 │
│   <head>        Metadaten                                     │
│   <body>        Sichtbarer Bereich                           │
│   <div>         Container/Bereich                            │
│   <span>        Inline-Container                             │
│                                                                │
│   TEXT:                                                       │
│   <h1> - <h6>   Überschriften (h1 größte, h6 kleinste)       │
│   <p>           Absatz (Paragraph)                           │
│   <br />        Zeilenumbruch                                │
│   <strong>      Fett/Wichtig                                 │
│   <em>          Kursiv/Betont                                │
│                                                                │
│   LISTEN:                                                     │
│   <ul>          Ungeordnete Liste (Aufzählung)               │
│   <ol>          Geordnete Liste (Nummerierung)               │
│   <li>          Listenelement                                │
│                                                                │
│   LINKS UND BILDER:                                           │
│   <a href="">   Link (Hyperlink)                             │
│   <img src="">  Bild (selbstschließend)                      │
│                                                                │
│   TABELLEN:                                                   │
│   <table>       Tabelle                                       │
│   <tr>          Tabellenzeile (table row)                    │
│   <td>          Tabellenzelle (table data)                   │
│   <th>          Tabellenkopf (table header)                  │
│                                                                │
│   FORMULARE:                                                  │
│   <form>        Formular                                      │
│   <input>       Eingabefeld                                  │
│   <button>      Schaltfläche                                 │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### HTML-Attribute

```
┌────────────────────────────────────────────────────────────────┐
│                    HTML-ATTRIBUTE                              │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Attribute = Zusätzliche Informationen im öffnenden Tag     │
│                                                                │
│   <tag attribut="wert">Inhalt</tag>                          │
│                                                                │
│   Wichtige Attribute:                                         │
│   ┌─────────────────────────────────────────────────────────┐│
│   │ id         │ Eindeutige Identifikation                  ││
│   │ class      │ Klassenname für CSS-Styling                ││
│   │ href       │ URL für Links (<a>)                        ││
│   │ src        │ Quelle für Bilder (<img>)                  ││
│   │ alt        │ Alternativtext für Bilder                  ││
│   │ style      │ Inline-CSS                                 ││
│   │ title      │ Tooltip-Text                               ││
│   └─────────────────────────────────────────────────────────┘│
│                                                                │
│   Beispiele:                                                  │
│   <a href="https://example.com">Linktext</a>                 │
│   <img src="bild.jpg" alt="Beschreibung" />                  │
│   <p id="intro" class="highlight">Text</p>                   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### XML (eXtensible Markup Language)

**XML** ist eine erweiterbare Markup-Sprache zum strukturierten Datenaustausch.

```
┌────────────────────────────────────────────────────────────────┐
│                         XML                                    │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Merkmale:                                                   │
│   • Eigene Tags definierbar (erweiterbar)                    │
│   • Streng strukturiert                                       │
│   • Trennung von Daten und Darstellung                       │
│   • Maschinenlesbar                                           │
│                                                                │
│   Beispiel:                                                   │
│   <?xml version="1.0" encoding="UTF-8"?>                     │
│   <produktkatalog>                                            │
│     <produkt id="P001">                                       │
│       <name>Laptop</name>                                     │
│       <preis waehrung="EUR">999.00</preis>                   │
│       <bestand>15</bestand>                                   │
│     </produkt>                                                │
│     <produkt id="P002">                                       │
│       <name>Maus</name>                                       │
│       <preis waehrung="EUR">29.99</preis>                    │
│       <bestand>50</bestand>                                   │
│     </produkt>                                                │
│   </produktkatalog>                                           │
│                                                                │
│   Verwendung:                                                 │
│   • Konfigurationsdateien                                    │
│   • Datenaustausch zwischen Systemen                         │
│   • Web Services (SOAP)                                      │
│   • Office-Dokumente (DOCX, XLSX sind ZIP mit XML)          │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### HTML vs. XML

| Aspekt | HTML | XML |
|--------|------|-----|
| **Zweck** | Webseiten darstellen | Daten strukturieren |
| **Tags** | Vordefiniert (h1, p, div) | Selbst definierbar |
| **Schreibweise** | Tolerant | Streng (wohlgeformt) |
| **Groß-/Kleinschreibung** | Egal | Relevant |
| **Schließende Tags** | Teilweise optional | Immer erforderlich |
| **Darstellung** | Im Browser sichtbar | Keine Darstellung |

---

### XML-Regeln (Wohlgeformtheit)

```
┌────────────────────────────────────────────────────────────────┐
│                  XML-REGELN                                    │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   1. Genau EIN Wurzelelement                                  │
│      ✓ <root><child/></root>                                  │
│      ✗ <a/><b/> (zwei Wurzelelemente)                        │
│                                                                │
│   2. Alle Tags müssen geschlossen werden                     │
│      ✓ <name>Wert</name>                                      │
│      ✓ <leer />                                               │
│      ✗ <name>Wert                                             │
│                                                                │
│   3. Tags müssen korrekt verschachtelt sein                  │
│      ✓ <a><b></b></a>                                         │
│      ✗ <a><b></a></b>                                         │
│                                                                │
│   4. Attributwerte in Anführungszeichen                      │
│      ✓ <tag attr="wert">                                      │
│      ✗ <tag attr=wert>                                        │
│                                                                │
│   5. Groß-/Kleinschreibung beachten                          │
│      <Name> ≠ <name> ≠ <NAME>                                │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### HTML5-Beispiel: Vollständige Seite

```html
<!DOCTYPE html>
<html lang="de">
<head>
    <meta charset="UTF-8">
    <title>Beispielseite</title>
</head>
<body>
    <header>
        <h1>Willkommen</h1>
    </header>

    <nav>
        <ul>
            <li><a href="#start">Start</a></li>
            <li><a href="#kontakt">Kontakt</a></li>
        </ul>
    </nav>

    <main>
        <article>
            <h2>Artikel-Überschrift</h2>
            <p>Hier steht der Text.</p>
            <img src="bild.jpg" alt="Beschreibung" />
        </article>
    </main>

    <footer>
        <p>&copy; 2025 Beispiel GmbH</p>
    </footer>
</body>
</html>
```

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **HTML** | HyperText Markup Language |
| **XML** | eXtensible Markup Language |
| **Tag** | Auszeichnungselement (<tag>) |
| **Attribut** | Zusatzinfo im Tag (name="wert") |
| **Element** | Tag mit Inhalt |
| **Wohlgeformt** | XML entspricht allen Regeln |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was ist der Unterschied zwischen HTML und XML?
- Ist HTML eine Programmiersprache?
- Nennen Sie wichtige HTML-Tags

### Wichtig zu merken

- **HTML/XML sind KEINE Programmiersprachen!**
- **HTML** = Vordefinierte Tags für Webseiten
- **XML** = Eigene Tags für Datenaustausch
- Tags: `<öffnen>Inhalt</schließen>`
- XML ist strenger als HTML

---

## Übungsaufgaben

### Aufgabe 1
Ist HTML eine Programmiersprache? Begründen Sie.

**Lösung:**
**Nein**, HTML ist KEINE Programmiersprache, sondern eine Auszeichnungssprache (Markup Language).

Begründung:
- HTML kann keine Berechnungen durchführen
- HTML enthält keine Kontrollstrukturen (if, Schleifen)
- HTML beschreibt nur die Struktur und das Aussehen von Dokumenten
- HTML führt keine Aktionen aus

Eine Programmiersprache wie Python oder Java kann Logik ausführen, während HTML nur beschreibt, WIE Inhalt dargestellt werden soll.

### Aufgabe 2
Was ist der Unterschied zwischen HTML und XML?

**Lösung:**
| HTML | XML |
|------|-----|
| Zur Darstellung von Webseiten | Zum Datenaustausch |
| Vordefinierte Tags (h1, p, div) | Eigene Tags definierbar |
| Browser zeigt Inhalt an | Keine Darstellung, nur Daten |
| Fehlertoleranter | Strenge Regeln (wohlgeformt) |
| Groß-/Kleinschreibung egal | Groß-/Kleinschreibung wichtig |

### Aufgabe 3
Korrigieren Sie folgendes fehlerhaftes XML:

```xml
<produkte>
<Produkt id=1>
  <Name>Laptop
  <preis>999</Preis>
</PRODUKT>
```

**Lösung:**
```xml
<?xml version="1.0" encoding="UTF-8"?>
<produkte>
  <Produkt id="1">
    <Name>Laptop</Name>
    <preis>999</preis>
  </Produkt>
</produkte>
```

Fehler waren:
1. Attributwert nicht in Anführungszeichen (id=1 → id="1")
2. `<Name>` nicht geschlossen
3. `<preis>` und `</Preis>` unterschiedliche Schreibweise
4. `</PRODUKT>` statt `</Produkt>`

---

## Querverweise

- [06-01-02 Programmierparadigmen](../06-01-fundamentals/06-01-02-programming-paradigms.md) - Deklarative Sprachen
- [02-05 Barrierefreiheit](../../02-quality-management/02-05-accessibility.md) - Barrierefreies HTML
- [07-01-03 Protokolle](../../07-networks/07-01-network-fundamentals/07-01-03-protocols.md) - HTTP
