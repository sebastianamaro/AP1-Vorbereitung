// Appends the GA2 part (open questions + official Musterlösung) to test.json.
const fs = require('fs');
const path = require('path');
const FILE = path.join(__dirname, '..', '..', '..', 'tests', 'ap2', 'ap2-sommer-2026', 'test.json');

const test = JSON.parse(fs.readFileSync(FILE, 'utf8'));

const intro = `**Ausgangssituation (Aufgaben 1–4):** Ein landwirtschaftlicher Betrieb in Mecklenburg ist in der Produktion von Getreide, Ölfrüchten sowie in der Tierhaltung tätig. Die IT-gestützten Verfahren sind nicht mehr auf dem aktuellen Stand; im Projekt soll die Digitalisierung modernisiert werden. Sie arbeiten im Team des Systemhauses **AMAG AG** mit.

*Hinweis: 4 Aufgaben · 90 Minuten · 100 Punkte. Alle Aufgaben sind offen und werden von dir selbst bewertet (Musterlösung wird nach dem Abgeben angezeigt).*`;

const classInfo = `**Klassen & Listen-Methoden (für Aufgabe 1):**

\`\`\`
ProdData                     KuhData
- date : Date                - name : String
- name : String              - avgLeistung : double
- leistung : double          + KuhData(name : String, avgLeistung : double)
\`\`\`

Für alle Attribute existieren Getter/Setter. Verfügbare Listen-Methoden:

- \`add(t : T) : void\` — fügt ein Objekt ans Ende der Liste hinzu
- \`size() : Integer\` — Anzahl der Objekte
- \`get(i : Integer) : T\` — Objekt an Position i
- \`contains(t : T) : Boolean\` — true, wenn ein namensgleiches Objekt enthalten ist

\`Date.between(start, ende)\` liefert true, wenn das Datum im Bereich [start, ende] liegt. Hinweis: String-Werte dürfen mit \`==\` verglichen werden.`;

const ga2 = {
	id: 'ga2',
	title: 'GA2',
	fullTitle: 'Entwicklung und Umsetzung von Algorithmen',
	durationMin: 90,
	pointsScheme: 'Punkte gemäß Aufgabenstellung (offizieller Punkteschlüssel, Summe 100).',
	intro,
	questions: [
		{
			id: 'ga2-1a',
			number: 1,
			type: 'open',
			points: 12,
			context:
				'**1. Aufgabe – Milchproduktionsdaten (30 Punkte).** Die Produktionsdaten liegen als `List<ProdData>` vor (Tagesdatum, eindeutiger Kuhname, Milch-Tagesleistung). Benötigt wird eine `List<KuhData>` mit je einem Objekt pro Kuh und deren Durchschnittsleistung.\n\n' +
				classInfo,
			prompt:
				'**a)** Entwickeln Sie eine Methode `erzeugeKuhData`, die für jede Kuh ein `KuhData`-Objekt erzeugt, es der Liste hinzufügt und die Liste zurückgibt. Die `avgLeistung` sollen zunächst mit `0.0` vorinitialisiert werden. *(12 Punkte)*',
			solution:
				'```java\nList<KuhData> erzeugeKuhData(List<ProdData> prodData) {\n    List<KuhData> kuhData = new List<KuhData>();\n    for (int i = 0; i < prodData.size(); i++) {\n        ProdData p = prodData.get(i);\n        KuhData kuh = new KuhData(p.getName(), 0.0);\n        if (!kuhData.contains(kuh)) {\n            kuhData.add(kuh);\n        }\n    }\n    return kuhData;\n}\n```\nKernpunkte: Schleife über alle `ProdData`, neues `KuhData` mit Name und `0.0`, Duplikate über `contains` vermeiden, Liste zurückgeben.',
			solutionOfficial: true
		},
		{
			id: 'ga2-1b',
			number: 2,
			type: 'open',
			points: 18,
			prompt:
				'**b)** Entwickeln Sie die Methode `calcAvgLeistung`, welche die Durchschnittsleistung je Kuh im Zeitraum `start`…`ende` berechnet, die vorinitialisierten `0.0`-Werte überschreibt und die Liste zurückgibt. Gehen Sie davon aus, dass `erzeugeKuhData` vorliegt. *(18 Punkte)*',
			solution:
				'```java\nList<KuhData> calcAvgLeistung(List<ProdData> prodData, Date start, Date ende) {\n    List<KuhData> kuhData = erzeugeKuhData(prodData);\n    for (int i = 0; i < kuhData.size(); i++) {\n        double summe = 0.0;\n        int anzahl = 0;\n        for (int j = 0; j < prodData.size(); j++) {\n            ProdData p = prodData.get(j);\n            if (p.getDate().between(start, ende)\n                    && p.getName() == kuhData.get(i).getName()) {\n                summe = summe + p.getLeistung();\n                anzahl = anzahl + 1;\n            }\n        }\n        if (anzahl > 0) {\n            kuhData.get(i).setAvgLeistung(summe / anzahl);\n        }\n    }\n    return kuhData;\n}\n```\nKernpunkte: äußere Schleife über die Kühe, innere Schleife über alle Produktionsdaten, Filter über `between` **und** gleichen Namen, Summe/Anzahl bilden und nur bei `anzahl > 0` den Durchschnitt setzen (Division durch 0 vermeiden).',
			solutionOfficial: true
		},
		{
			id: 'ga2-2a',
			number: 3,
			type: 'open',
			points: 12,
			context:
				'**2. Aufgabe – Aufgabenplanung, objektorientiert (20 Punkte).** Es gibt eine allgemeine Klasse `Aufgabe` und Spezialklassen `AufgabeFixTermin` und `AufgabeWetterabhängig`; weitere Aufgabenarten sollen später leicht ergänzbar sein.\n\n- `Aufgabe`: `beschreibung` (String), `anzahlMitarbeiter` (int); Methoden `aufgabeBeschreiben()` (String), `heuteAusführbar()` (Boolean).\n- `AufgabeFixTermin`: zusätzlich `termin` (Date).\n- `AufgabeWetterabhängig`: zusätzlich `wetterVoraussetzung` (Wetter).\n- `AufgabenContainer`: `aufgaben : List<Aufgabe>`; Methoden `aufgabeHinzufügen(Aufgabe)`, `aufgabenHeute() : List<Aufgabe>`.',
			prompt:
				'**a)** Zeichnen Sie ein Klassendiagramm mit `AufgabenContainer`, `Aufgabe`, `AufgabeFixTermin`, `AufgabeWetterabhängig`. Tragen Sie Eigenschaften und Methoden mit vollständiger Signatur und Sichtbarkeiten ein und zeichnen Sie die Beziehungen (ohne Kardinalitäten). *(12 Punkte)*\n\n*Zeichne auf Papier und bewerte dich anschließend selbst anhand der Musterlösung.*',
			solution:
				'```\n┌──────────────────────────────┐\n│ AufgabenContainer            │\n├──────────────────────────────┤\n│ - aufgaben : List<Aufgabe>   │\n├──────────────────────────────┤\n│ + aufgabeHinzufuegen(a : Aufgabe) : void │\n│ + aufgabenHeute() : List<Aufgabe>        │\n└──────────────────────────────┘\n            │ verwaltet 0..*\n            ▼\n┌──────────────────────────────┐\n│ Aufgabe   {abstrakt}         │\n├──────────────────────────────┤\n│ - beschreibung : String      │\n│ - anzahlMitarbeiter : int    │\n├──────────────────────────────┤\n│ + aufgabeBeschreiben() : String   │\n│ + heuteAusfuehrbar() : Boolean    │\n└──────────────────────────────┘\n            △ (Vererbung)\n     ┌──────┴───────┐\n┌────────────────┐ ┌───────────────────────┐\n│ AufgabeFixTermin│ │ AufgabeWetterabhaengig │\n├────────────────┤ ├───────────────────────┤\n│ - termin : Date │ │ - wetterVoraussetzung : Wetter │\n├────────────────┤ ├───────────────────────┤\n│ + heuteAusfuehrbar() : Boolean │ + heuteAusfuehrbar() : Boolean │\n└────────────────┘ └───────────────────────┘\n```\n- `Aufgabe` ist **abstrakt**; die Unterklassen überschreiben `heuteAusfuehrbar()`.\n- `AufgabenContainer` steht in einer Assoziation/Aggregation zu `Aufgabe` (0..*).\n- Sichtbarkeiten: Attribute `-` (privat), Methoden `+` (öffentlich).',
			solutionOfficial: true
		},
		{
			id: 'ga2-2ba',
			number: 4,
			type: 'open',
			points: 4,
			prompt:
				'**ba)** Erstellen Sie im Pseudocode die Methode `List<Aufgabe> aufgabenHeute()`. Hinweis: Mit `heuteAusführbar()` kann geprüft werden, ob eine Aufgabe heute ausführbar ist. *(4 Punkte)*',
			solution:
				'```java\nList<Aufgabe> aufgabenHeute() {\n    List<Aufgabe> liste = new List<Aufgabe>();\n    for (int i = 0; i < aufgaben.size(); i++) {\n        Aufgabe a = aufgaben.get(i);\n        if (a.heuteAusfuehrbar()) {\n            liste.add(a);\n        }\n    }\n    return liste;\n}\n```',
			solutionOfficial: true
		},
		{
			id: 'ga2-2bb',
			number: 5,
			type: 'open',
			points: 4,
			prompt:
				'**bb)** `aufgabenHeute` ruft intern `heuteAusführbar` der verschiedenen Aufgaben-Klassen auf. Erst zur Laufzeit wird entschieden, welche Methode konkret ausgeführt wird. Nennen und erklären Sie den Mechanismus, der dies bewirkt. *(4 Punkte)*',
			solution:
				'**Polymorphie mit dynamischer Bindung (late binding).** Obwohl die Liste den statischen Typ `Aufgabe` enthält, wird zur Laufzeit anhand des **tatsächlichen Objekttyps** die passende überschriebene Methode `heuteAusfuehrbar()` ausgeführt.',
			solutionOfficial: true
		},
		{
			id: 'ga2-3a',
			number: 6,
			type: 'open',
			points: 20,
			context:
				'**3. Aufgabe – Datenbank (25 Punkte).** Gegebenes ER-Modell:\n\n```\nFeld ──(n:1)── Bodentyp ──(m:n)── Feldfrucht\n                     „optimal für"\n```\n\n**Informationen aus der Ist-Analyse:**\n- Für jeden **Bearbeitungsschritt** auf einem Feld werden das Feld, die angebaute Feldfrucht und der Zeitraum (von/bis) erfasst.\n- Jedem Bearbeitungsschritt kann genau eine **Tätigkeit** (z. B. Aussaat, Ernte) zugeordnet werden.\n- Zu jeder Tätigkeit gibt es eine Beschreibung.',
			prompt:
				'**a)** Überführen Sie das ER-Modell in ein relationales Datenbankmodell in **3. Normalform** und erweitern Sie es anhand der Ist-Analyse. Übernehmen Sie alle Attribute, bestimmen Sie je Tabelle einen **Primärschlüssel (PK)**, bilden Sie alle Beziehungen mit Kardinalitäten ab und tragen Sie die nötigen **Fremdschlüssel (FK)** ein. *(20 Punkte)*',
			solution:
				'| Tabelle | Attribute |\n|---|---|\n| **Bodentyp** | <u>BodentypID</u> (PK), Bezeichnung |\n| **Feld** | <u>FeldID</u> (PK), BodentypID (FK), weitere Felddaten |\n| **Feldfrucht** | <u>FeldfruchtID</u> (PK), Bezeichnung |\n| **Bodentyp_Feldfrucht** | <u>BodentypID</u> (PK/FK), <u>FeldfruchtID</u> (PK/FK) |\n| **Taetigkeit** | <u>TaetigkeitID</u> (PK), Beschreibung |\n| **Bearbeitungsschritt** | <u>BearbeitungID</u> (PK), FeldID (FK), FeldfruchtID (FK), TaetigkeitID (FK), ZeitraumVon, ZeitraumBis |\n\n- Die **m:n**-Beziehung „optimal für" (Bodentyp ↔ Feldfrucht) wird über die Zwischentabelle **Bodentyp_Feldfrucht** aufgelöst.\n- **Feld → Bodentyp** ist n:1 → FK `BodentypID` in `Feld`.\n- **Bearbeitungsschritt** verweist per FK auf Feld, Feldfrucht und Tätigkeit.',
			solutionOfficial: true
		},
		{
			id: 'ga2-3b',
			number: 7,
			type: 'open',
			points: 5,
			prompt:
				'**b)** Drohnen fliegen einmal wöchentlich und erfassen pro Flug **500 Bilder** im unkomprimierten Raw-Format (Auflösung **50 Megapixel**, Farbtiefe **24 Bit**). Berechnen Sie den Speicherbedarf in **TiB** für ein Jahr (52 Wochen), gerundet auf zwei Nachkommastellen. Rechenweg angeben. *(5 Punkte)*',
			solution:
				'- Pro Bild: 50.000.000 Pixel × 24 Bit = 1.200.000.000 Bit = **150.000.000 Byte**.\n- Bilder/Jahr: 500 × 52 = **26.000 Bilder**.\n- Gesamt: 26.000 × 150.000.000 Byte = 3.900.000.000.000 Byte.\n- In TiB: 3.900.000.000.000 ÷ 1024⁴ ≈ **3,55 TiB**.',
			solutionOfficial: true
		},
		{
			id: 'ga2-4a',
			number: 8,
			type: 'open',
			points: 3,
			context:
				'**4. Aufgabe – SQL & CRUD (25 Punkte).** CRUD steht für die vier grundlegenden Datenoperationen.',
			prompt:
				'**a)** Ordnen Sie den CRUD-Operationen die passenden SQL-Befehle (DDL / DML / DQL) zu. *(3 Punkte)*',
			solution:
				'| CRUD | DDL (Definition) | DML (Manipulation) | DQL (Query) |\n|---|---|---|---|\n| **Create** | CREATE | INSERT | – |\n| **Read** | – | – | SELECT |\n| **Update** | – | UPDATE | – |\n| **Delete** | DROP | DELETE | – |',
			solutionOfficial: true
		},
		{
			id: 'ga2-4b',
			number: 9,
			type: 'open',
			points: 8,
			context:
				'Für die folgenden SQL-Aufgaben gelten diese (vereinfachten) Tabellen:\n\n```\nTierkategorie(TK_ID PK, TK_Kategorie)\nTierbestand(TB_ID PK, TB_TKID FK, TB_ChipNr, TB_GebDat, TB_SchlachtDat)   -- SchlachtDat = NULL: Tier lebt\nTierZusatzInfo(TZI_ID PK, TZI_TBID FK, TZI_Gewicht)\nArchiv_Tierbestand(A_TBID, A_Tierkategorie, A_ChipNr, A_GebDat, A_SchlachtDat, A_MaxGewicht)\n```',
			prompt:
				'**b)** Erstellen Sie eine SQL-Abfrage, die je Tier-Kategorie über die **lebenden** Tiere ausgibt: Anzahl des Tierbestandes, Gewicht des schwersten Tieres, Alter des ältesten Tieres und das durchschnittliche Alter. *(8 Punkte)*',
			solution:
				'```sql\nSELECT\n    tk.TK_Kategorie,\n    COUNT(tb.TB_ID) AS AnzahlTiere,\n    MAX(g.MaxGewicht) AS SchwerstesTier,\n    MAX(TIMESTAMPDIFF(YEAR, tb.TB_GebDat, CURRENT_DATE)) AS AeltestesTier,\n    AVG(TIMESTAMPDIFF(YEAR, tb.TB_GebDat, CURRENT_DATE)) AS DurchschnittAlter\nFROM Tierkategorie tk\nLEFT JOIN Tierbestand tb\n    ON tb.TB_TKID = tk.TK_ID\n   AND tb.TB_SchlachtDat IS NULL\nLEFT JOIN (\n    SELECT TZI_TBID, MAX(TZI_Gewicht) AS MaxGewicht\n    FROM TierZusatzInfo\n    GROUP BY TZI_TBID\n) g ON g.TZI_TBID = tb.TB_ID\nGROUP BY tk.TK_ID, tk.TK_Kategorie;\n```\nWichtig: `LEFT JOIN`, damit auch Kategorien ohne lebende Tiere (Anzahl 0) erscheinen; Filter `TB_SchlachtDat IS NULL` für „lebend"; Aggregatfunktionen `COUNT`, `MAX`, `AVG`.',
			solutionOfficial: true
		},
		{
			id: 'ga2-4ca',
			number: 10,
			type: 'open',
			points: 10,
			prompt:
				'**ca)** Erstellen Sie eine SQL-Anweisung, die alle Daten der **geschlachteten** Tiere samt Tierkategorie und höchstem gewogenen Gewicht mit **einem** Befehl in die Tabelle `Archiv_Tierbestand` archiviert. *(10 Punkte)*',
			solution:
				'```sql\nINSERT INTO Archiv_Tierbestand\n    (A_TBID, A_Tierkategorie, A_ChipNr, A_GebDat, A_SchlachtDat, A_MaxGewicht)\nSELECT\n    tb.TB_ID,\n    tk.TK_Kategorie,\n    tb.TB_ChipNr,\n    tb.TB_GebDat,\n    tb.TB_SchlachtDat,\n    MAX(tzi.TZI_Gewicht)\nFROM Tierbestand tb\nJOIN Tierkategorie tk ON tk.TK_ID = tb.TB_TKID\nLEFT JOIN TierZusatzInfo tzi ON tzi.TZI_TBID = tb.TB_ID\nWHERE tb.TB_SchlachtDat IS NOT NULL\nGROUP BY tb.TB_ID, tk.TK_Kategorie, tb.TB_ChipNr, tb.TB_GebDat, tb.TB_SchlachtDat;\n```\n`INSERT INTO … SELECT` überträgt in einem Befehl; Filter `TB_SchlachtDat IS NOT NULL` (geschlachtet); `MAX(TZI_Gewicht)` für das höchste Gewicht.',
			solutionOfficial: true
		},
		{
			id: 'ga2-4cb',
			number: 11,
			type: 'open',
			points: 4,
			prompt:
				'**cb)** Entfernen Sie anschließend alle zugehörigen Daten der archivierten (geschlachteten) Datensätze aus den Tabellen. *(4 Punkte)*',
			solution:
				'```sql\nDELETE FROM TierZusatzInfo\nWHERE TZI_TBID IN (\n    SELECT TB_ID FROM Tierbestand WHERE TB_SchlachtDat IS NOT NULL\n);\n\nDELETE FROM Tierbestand\nWHERE TB_SchlachtDat IS NOT NULL;\n```\nReihenfolge beachten: zuerst die abhängigen Datensätze in `TierZusatzInfo` löschen (Fremdschlüssel), dann die Zeilen in `Tierbestand`.',
			solutionOfficial: true
		}
	]
};

test.parts.push(ga2);
fs.writeFileSync(FILE, JSON.stringify(test, null, 2) + '\n', 'utf8');
console.log('GA2 part appended. Parts now:', test.parts.map((p) => `${p.id}(${p.questions.length})`).join(', '));
console.log('GA2 total points:', ga2.questions.reduce((s, q) => s + q.points, 0));
