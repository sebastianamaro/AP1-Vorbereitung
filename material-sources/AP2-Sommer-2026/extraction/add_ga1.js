// Appends the GA1 part (open questions + Claude-authored PROPOSED solutions) to test.json.
const fs = require('fs');
const path = require('path');
const FILE = path.join(__dirname, '..', '..', '..', 'tests', 'ap2', 'ap2-sommer-2026', 'test.json');
const test = JSON.parse(fs.readFileSync(FILE, 'utf8'));

const intro = `**Ausgangssituation (Aufgaben 1–4):** Ein landwirtschaftlicher Betrieb in Mecklenburg (Getreide, Ölfrüchte, Tierhaltung) soll digitalisiert werden. Sie arbeiten im Team des Systemhauses **AMAG AG** mit.

*Hinweis: 4 Aufgaben · 90 Minuten · 100 Punkte. Alle Aufgaben sind offen und werden von dir selbst bewertet.*

⚠️ **Für GA1 liegt keine offizielle Musterlösung vor.** Die angezeigten Lösungen sind **Vorschläge** und dienen der Orientierung.`;

const Q = (id, number, points, prompt, solution, context) => ({
	id,
	number,
	type: 'open',
	points,
	...(context ? { context } : {}),
	prompt,
	solution,
	solutionOfficial: false
});

const ga1 = {
	id: 'ga1',
	title: 'GA1',
	fullTitle: 'Planen eines Softwareproduktes',
	durationMin: 90,
	pointsScheme: 'Punkte gemäß Aufgabenstellung (Summe 100). GA1: keine offizielle Musterlösung – Lösungsvorschläge von Claude.',
	intro,
	questions: [
		Q(
			'ga1-1a',
			1,
			4,
			'**a)** Beschreiben Sie zwei Aspekte, wie nach dem Projektende der **Projekterfolg** geprüft werden kann. *(4 Punkte)*',
			'- **Soll-Ist-Vergleich der Projektziele:** Wurden die vereinbarten Ziele bzgl. Zeit, Kosten und Qualität/Umfang (magisches Dreieck) erreicht?\n- **Abnahme & Zufriedenheit:** Erfüllung der Anforderungen und formale Abnahme durch den Auftraggeber; Nutzer-/Kundenzufriedenheit (z. B. Befragung) sowie Erreichung des angestrebten Nutzens (z. B. tatsächlich verbesserte Navigation).\n\n*Weitere mögliche Aspekte: Wirtschaftlichkeit/ROI, Lessons-Learned-Auswertung.*',
			'**1. Aufgabe – Projektplanung „Satellitengestützte Navigation" (27 Punkte).**'
		),
		Q(
			'ga1-1b',
			2,
			4,
			'**b)** Identifizieren Sie – neben dem bereits genannten Risiko („Verzögerungen durch unklare Anforderungen" → *klare Projektziele und Stakeholder-Workshops*) – ein **weiteres Risiko** und ordnen Sie diesem eine **Gegenmaßnahme** zu. *(4 Punkte)*',
			'| Risiko | Gegenmaßnahme |\n|---|---|\n| Lieferverzögerung der Hardware | Frühzeitige Bestellung, Pufferzeiten einplanen, mehrere Lieferanten qualifizieren |\n\n*Weitere gültige Beispiele: Ausfall von Schlüsselpersonal → Wissensdokumentation/Vertretungsregelung; technische Schnittstellenprobleme (GPS/API) → frühe Prototypen und Integrationstests; Budgetüberschreitung → laufendes Kostencontrolling.*'
		),
		Q(
			'ga1-1c',
			3,
			14,
			'**c)** Erstellen Sie den **Netzplan** für die folgenden Vorgänge. *(14 Punkte)*\n\n| Vorgang | Dauer (Tage) | Vorgänger |\n|---|---|---|\n| A Anforderungsanalyse | 10 | – |\n| B Softwaredesign | 15 | A |\n| C Routenplanung | 45 | B |\n| D GPS-Integration | 50 | B |\n| E Angebotsvergleich | 8 | B |\n| F Hardwarebeschaffung | 12 | E |\n| G Testphase | 22 | C, D, F |\n| H Schulung | 12 | C, D, F |\n| I Bereitstellung | 4 | G, H |\n\n*Zeichne den Netzplan (FAZ/FEZ/SAZ/SEZ, GP) auf Papier und bewerte dich anhand der Lösung.*',
			'Vorwärts-/Rückwärtsrechnung (FAZ = frühester Anfang, FEZ = frühestes Ende, SAZ/SEZ = spätester Anfang/Ende, GP = Gesamtpuffer = SAZ − FAZ):\n\n| Vorgang | Dauer | FAZ | FEZ | SAZ | SEZ | GP |\n|---|---|---|---|---|---|---|\n| A | 10 | 0 | 10 | 0 | 10 | **0** |\n| B | 15 | 10 | 25 | 10 | 25 | **0** |\n| C | 45 | 25 | 70 | 30 | 75 | 5 |\n| D | 50 | 25 | 75 | 25 | 75 | **0** |\n| E | 8 | 25 | 33 | 55 | 63 | 30 |\n| F | 12 | 33 | 45 | 63 | 75 | 30 |\n| G | 22 | 75 | 97 | 75 | 97 | **0** |\n| H | 12 | 75 | 87 | 85 | 97 | 10 |\n| I | 4 | 97 | 101 | 97 | 101 | **0** |\n\n**Projektdauer = 101 Tage.** G und H starten erst, wenn C, D **und** F fertig sind (FAZ = max(70, 75, 45) = 75).',
			'Netzplan – Vorgangsknotennetz (z. B. MPM).'
		),
		Q(
			'ga1-1d',
			4,
			3,
			'**d)** Geben Sie den **kritischen Pfad** für Ihren Netzplan an. *(3 Punkte)*',
			'**Kritischer Pfad: A → B → D → G → I** (alle mit Gesamtpuffer 0). Länge = 10 + 15 + 50 + 22 + 4 = **101 Tage**.'
		),
		Q(
			'ga1-1e',
			5,
			2,
			'**e)** Beschreiben Sie den Unterschied zwischen **freiem Puffer** und **Gesamtpuffer** einer Aktivität. *(2 Punkte)*',
			'- **Gesamtpuffer (GP):** Zeitspanne, um die ein Vorgang verschoben oder verlängert werden kann, **ohne das Projektende** (den Endtermin) zu gefährden. GP = SAZ − FAZ = SEZ − FEZ.\n- **Freier Puffer (FP):** Zeitspanne, um die ein Vorgang verschoben werden kann, **ohne den frühesten Anfang seiner Nachfolger** zu beeinflussen. FP = min(FAZ der Nachfolger) − FEZ. Der freie Puffer ist stets ≤ Gesamtpuffer.'
		),
		Q(
			'ga1-2a',
			6,
			16,
			'**a)** Erstellen Sie für den beschriebenen Ablauf der Bewässerungssteuerung ein **UML-Aktivitätsdiagramm**. *(16 Punkte)*\n\nAblauf: (1) parallel Bodensensoren **und** Wetterdaten/Vorhersage abrufen; (2) Daten auswerten, Bewässerungsbedarf ermitteln; (3) kein Bedarf → Ende; (4) Bedarf → Wassermenge & Dauer berechnen; (5) Tankfüllstand abfragen, bei < 30 % Warnmeldung an Landwirt; (6) parallel bewässern **und** Landwirt informieren; (7) Daten speichern, Ende.\n\n*Zeichne auf Papier und bewerte dich anhand der Lösung.*',
			'```\n         ● (Start)\n         │\n     ┌───┴─── Fork ───┐        (Parallelität)\n [Bodensensoren]  [Wetterdaten &\n  abrufen]         Vorhersage abrufen]\n     └───┬─── Join ───┘\n         │\n [Daten auswerten & Bewässerungsbedarf ermitteln]\n         │\n        ◇ [Bewässerung erforderlich?]\n     nein│              │ ja\n         ⊗ (Ende)       │\n                 [Wassermenge & Dauer berechnen]\n                        │\n                 [Tankfüllstand abfragen]\n                        │\n                       ◇ [Füllstand < 30 %?]\n                    ja │        │ nein\n            [Warnmeldung        │\n             an Landwirt] ──────┤\n                        │\n              ┌── Fork ─┴───────┐\n        [Bewässerung        [Landwirt\n         durchführen]        informieren]\n              └── Join ────────┘\n                        │\n                 [Daten speichern]\n                        │\n                        ⊗ (Ende)\n```\nWichtige Elemente: **Start-/Endknoten**, **Fork/Join** für die parallelen Aktionen (Schritt 1 und 6), **Entscheidungsknoten (Raute)** für „Bewässerung erforderlich?" und „Füllstand < 30 %?". Die Warnmeldung führt anschließend wieder in den Hauptfluss zurück.'
		),
		Q(
			'ga1-2ba',
			7,
			3,
			'**ba)** Erläutern Sie das Konzept einer **REST-API** (Representational State Transfer). *(3 Punkte)*',
			'REST ist ein **Architekturstil für Webservices**. Kernprinzipien: **Ressourcen** werden über eindeutige **URLs** adressiert; die Kommunikation läuft **zustandslos** (stateless) über **HTTP**; für Operationen werden die **HTTP-Methoden** (GET, POST, PUT, DELETE) genutzt; Daten werden in **Repräsentationen** wie JSON oder XML ausgetauscht. Jede Anfrage enthält alle nötigen Informationen (keine Sitzung auf dem Server).',
			'**2. Aufgabe – Prozesssteuerung & REST-API (28 Punkte).** Request: `GET https://api.wetterdienst.com/weather?location=Rostock&units=metric&apikey=XYZ123`'
		),
		Q(
			'ga1-2bb',
			8,
			3,
			'**bb)** Beschreiben Sie die Parameter der gegebenen URL. *(Beispiel: `weather` = die abzufragende Ressource, hier die Wettervorhersagen.)* *(3 Punkte)*',
			'- **`location=Rostock`** – Abfrageparameter: Ort, für den die Wetterdaten geliefert werden.\n- **`units=metric`** – Einheitensystem der Rückgabe (metrisch, z. B. Temperatur in °C).\n- **`apikey=XYZ123`** – Authentifizierungsschlüssel, der den Zugriff auf die API berechtigt/identifiziert.'
		),
		Q(
			'ga1-2bc',
			9,
			6,
			'**bc)** Nennen und beschreiben Sie **zwei weitere HTTP-Methoden** (neben GET), die mit einer REST-API verwendet werden können. *(6 Punkte)*',
			'| HTTP-Methode | Beschreibung |\n|---|---|\n| **POST** | Erstellt eine neue Ressource bzw. sendet Daten an den Server (Create). |\n| **PUT** | Aktualisiert/ersetzt eine bestehende Ressource vollständig (Update). |\n\n*Ebenfalls korrekt: **DELETE** (Ressource löschen) oder **PATCH** (teilweise aktualisieren).*'
		),
		Q(
			'ga1-3aa',
			10,
			3,
			'**aa)** Nennen Sie drei **Merkmale von LoRa**. *(3 Punkte)*',
			'- **Große Reichweite** (mehrere Kilometer, auch ländlich).\n- **Geringer Energieverbrauch** (Low-Power, langer Batteriebetrieb).\n- **Niedrige Datenrate** / kleine Datenmengen.\n\n*Ebenfalls gültig: lizenzfreies Frequenzband, gute Gebäudedurchdringung.*',
			'**3. Aufgabe – Datenübertragung & Sicherheit (22 Punkte).** Die Bodensensoren sind weiträumig verteilt, ohne feste Stromversorgung. Fachartikel-Auszug: *„LoRa … derived from Chirp Spread Spectrum … ideal for applications that transmit small chunks of data with low bit rates … longer range … low power mode."*'
		),
		Q(
			'ga1-3ab',
			11,
			6,
			'**ab)** Erläutern Sie zwei Gründe, weshalb der Einsatz von **LoRa** für dieses Projekt sinnvoll ist. *(6 Punkte)*',
			'- **Große Fläche / weite Verteilung der Sensoren:** Die große Reichweite von LoRa deckt weiträumig verteilte Felder mit wenigen Gateways ab – WLAN/Bluetooth reichen dafür nicht.\n- **Keine feste Stromversorgung:** Der geringe Energieverbrauch erlaubt langen batterie-/solarbetriebenen Betrieb der Sensoren.\n- *(Zusätzlich:)* Es werden nur **kleine Messwerte** (Bodenfeuchte) übertragen – die niedrige Datenrate von LoRa genügt vollständig.'
		),
		Q(
			'ga1-3ba',
			12,
			3,
			'**ba)** Erläutern Sie das **IT-Schutzziel nach BSI**, das der Kunde angesprochen hat (Schutz vor manipulierter Übertragung). *(3 Punkte)*',
			'Der Kunde spricht die **Integrität** an (einer der BSI-Grundwerte: Vertraulichkeit, Integrität, Verfügbarkeit). Integrität bedeutet die **Unversehrtheit / Korrektheit von Daten**: Daten dürfen während Übertragung und Speicherung **nicht unbemerkt verändert (manipuliert)** werden; jede unautorisierte Änderung muss erkennbar sein.'
		),
		Q(
			'ga1-3bb',
			13,
			4,
			'**bb)** Erläutern Sie ein Verfahren, das sicherstellt, dass die Daten während der Übertragung **nicht unbemerkt manipuliert** werden können. *(4 Punkte)*',
			'**Kryptografische Prüfsumme (Hash) bzw. MAC/HMAC oder digitale Signatur.** Der Sender berechnet über die Nutzdaten einen Hash-/MAC-Wert (bei HMAC/Signatur zusätzlich mit einem geheimen bzw. privaten Schlüssel) und überträgt ihn mit. Der Empfänger berechnet den Wert erneut und vergleicht: Stimmen die Werte nicht überein, wurden die Daten verändert. HMAC/Signatur schützt zusätzlich davor, dass ein Angreifer Daten **und** Prüfwert passend fälscht (Authentizität).'
		),
		Q(
			'ga1-3bc',
			14,
			3,
			'**bc)** Erläutern Sie, was man unter dem **RSA-Algorithmus** versteht. *(3 Punkte)*',
			'RSA ist ein **asymmetrisches** Verschlüsselungsverfahren mit einem **Schlüsselpaar** aus öffentlichem und privatem Schlüssel. Seine Sicherheit beruht auf der **Schwierigkeit der Primfaktorzerlegung** sehr großer Zahlen. Zur **Verschlüsselung** wird der öffentliche Schlüssel des Empfängers verwendet, zur **Entschlüsselung** dessen privater Schlüssel (für **Signaturen** umgekehrt: privat signieren, öffentlich prüfen).'
		),
		Q(
			'ga1-3bd',
			15,
			3,
			'**bd)** Begründen Sie, ob die Verschlüsselung mittels **RSA** in Ihrem Projekt sinnvoll ist. *(3 Punkte)*',
			'**Eher nicht bzw. nur eingeschränkt sinnvoll.** RSA ist **rechen- und energieintensiv**; für die batteriebetriebenen, leistungsschwachen LoRa-Sensoren mit sehr kleinen Datenmengen ist es ineffizient. Zudem ging es dem Kunden um **Integrität**, nicht um Vertraulichkeit – dafür genügen ressourcenschonende Verfahren wie **HMAC** (symmetrisch). Falls Verschlüsselung nötig wäre, wäre für die kontinuierliche Datenübertragung eine **symmetrische** Verschlüsselung (z. B. AES) passender; RSA höchstens zum einmaligen Schlüsselaustausch.'
		),
		Q(
			'ga1-4a',
			16,
			5,
			'**a)** Beschreiben Sie das Qualitätsmerkmal **Zuverlässigkeit** (ISO/IEC 25010) und nennen + beschreiben Sie ein **weiteres** Produktqualitätsmerkmal. *(5 Punkte)*',
			'- **Zuverlässigkeit (Reliability):** Grad, in dem das System unter festgelegten Bedingungen über einen bestimmten Zeitraum seine Funktionen **fehlerfrei** erfüllt (Untermerkmale u. a. Verfügbarkeit, Fehlertoleranz, Wiederherstellbarkeit).\n- **Weiteres Merkmal – Benutzbarkeit (Usability):** Grad, in dem Nutzer das Produkt effektiv, effizient und zufriedenstellend bedienen können (Erlernbarkeit, Bedienbarkeit).\n\n*Weitere Merkmale der ISO/IEC 25010: funktionale Eignung, Performanz/Effizienz, Kompatibilität, Sicherheit, Wartbarkeit, Portabilität. (Die Aufgabe nennt „25070" – gemeint ist die 25010.)*',
			'**4. Aufgabe – Softwarequalität (23 Punkte).** Es soll eine Smartphone-App zur Überwachung/Steuerung des Bewässerungssystems entwickelt werden.'
		),
		Q(
			'ga1-4b',
			17,
			8,
			'**b)** Beschreiben Sie **zwei Anforderungen** an „Barrierefreie Software" und je eine **geeignete Maßnahme** zur Erfüllung. *(8 Punkte)*',
			'| Anforderung | Geeignete Maßnahme |\n|---|---|\n| **Wahrnehmbarkeit** – Inhalte müssen für alle wahrnehmbar sein | Textalternativen (Alt-Texte) für Bilder/Icons; ausreichender Farbkontrast; skalierbare, frei vergrößerbare Schrift |\n| **Bedienbarkeit** – Bedienung ohne Einschränkung möglich | Vollständige Tastatur-/Screenreader-Bedienung, klare Fokusreihenfolge, ausreichend große Touch-Ziele, keine reinen Farbcodierungen |\n\n*Orientierung: WCAG-Prinzipien (wahrnehmbar, bedienbar, verständlich, robust) bzw. BITV.*'
		),
		Q(
			'ga1-4ca',
			18,
			4,
			'**ca)** Beschreiben Sie zwei **Vorteile** der Erstellung von **Mockups** in der App-Entwicklung. *(4 Punkte)*',
			'- **Frühes Feedback:** Kunde/Nutzer können das Aussehen vor der (teuren) Implementierung bewerten – Missverständnisse und Fehler werden früh erkannt und günstig korrigiert.\n- **Gemeinsame Kommunikationsgrundlage:** Mockups konkretisieren die Anforderungen und schaffen ein einheitliches Verständnis zwischen Kunde, Design und Entwicklung.'
		),
		Q(
			'ga1-4cb',
			19,
			6,
			'**cb)** Ergänzen Sie den Entwurf (Mockup) für die App-Seite „Bewässerungstank": angezeigt werden sollen der **aktuelle Füllstand** sowie eine **grafische Darstellung der Wassermenge im zeitlichen Verlauf** mit auswählbarem Start- und Enddatum. *(6 Punkte)*\n\n*Zeichne das Mockup auf Papier und bewerte dich anhand der Lösung.*',
			'```\n┌───────────────────────────────────┐\n│ ←   Bewässerungstank                │\n├───────────────────────────────────┤\n│  Aktueller Füllstand                │\n│   ┌───────────────┐                 │\n│   │ ▓▓▓▓▓▓░░░░░░░ │  68 %           │\n│   └───────────────┘                 │\n│                                     │\n│  Wassermenge im Verlauf             │\n│  von [ 01.04.2026 ▾]  bis [30.04. ▾]│\n│   L/│                               │\n│     │      ╱╲      ╱╲               │\n│     │  ╱╲ ╱  ╲╱╲  ╱                 │\n│     │ ╱  ╲     ╲ ╱                  │\n│     └───────────────────► Zeit      │\n│              [ Anzeigen ]           │\n└───────────────────────────────────┘\n```\nWichtige Elemente: Titel/Zurück-Navigation, **Füllstandsanzeige** (Prozentwert + Balken/Tank-Symbol), **Liniendiagramm** der Wassermenge über die Zeit, **zwei Datumsauswahlfelder** (Start/Ende) mit Datepicker sowie ein Button zum Aktualisieren der Ansicht.'
		)
	]
};

test.parts.push(ga1);
fs.writeFileSync(FILE, JSON.stringify(test, null, 2) + '\n', 'utf8');
console.log('GA1 appended. Parts:', test.parts.map((p) => `${p.id}(${p.questions.length})`).join(', '));
console.log('GA1 total points:', ga1.questions.reduce((s, q) => s + q.points, 0));
