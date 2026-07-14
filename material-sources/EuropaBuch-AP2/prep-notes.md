# AP2 (Teil 2) — preparation notes for curation

Reference notes distilled from [material-sources/sources.txt](../sources.txt) (AP2 section)
and the EuropaBuch-AP2 book. Used together with the OCR'd book text
(`extraction/`) when writing `learning-material` for AP2. **Not** learning
content itself — a curation guide.

## Exam structure (Fachinformatiker Anwendungsentwicklung, Teil 2)

The second, final part of the gestreckte Abschlussprüfung. Weightings (of the
whole AP), from the book front matter:

- **Betriebliche Projektarbeit** — 50% total
  - Dokumentation (project documentation)
  - Präsentation + Fachgespräch vor dem Prüfungsausschuss (max. 30 min)
  - Projektantrag: submitted Jan (Sommer) / Aug–Sep (Winter); scope **80 hours**
- **Berufsbezogene schriftliche Prüfung 1 (GA1)** — 90 min, 10%
- **Berufsbezogene schriftliche Prüfung 2 (GA2)** — 90 min, 10%
- **Wirtschafts- und Sozialkunde (WISO)** — 60 min, 10%

The three written exams (per the book's Prüfungssimulationen):
GA1 = **Planen eines Softwareproduktes**, GA2 = **Entwicklung und Umsetzung von
Algorithmen**, plus **Wirtschafts- und Sozialkunde**.

## Emphasis / prep points (from fachinformatikerpruefungsvorbereitung.de, Teil 2 AE)

- **GA1 – Planning:** requirements analysis (Anforderungsanalyse), project
  planning; some overlap with Teil-1 content.
- **GA2 – Implementation:** heavy on **UML diagrams** (use-case, sequence,
  activity, state, class, package), **design patterns (MVC, Observer)**, OOP
  principles, **databases** (SQL/MySQL, normalization, ER models), software
  ergonomics. Pseudocode appears occasionally.
- **Key tip:** *diagrams are highly rewarded* — practice all UML diagram types
  thoroughly. UML is a substantial portion of the written exam.

## Per-topic source sub-pages (fetch during curation)

`fachinformatikerpruefungsvorbereitung.de/abschlussprüfungteil2ae/` has a
sub-page per topic — fetch the matching one when writing each learning file, for
exam-focused detail/examples on top of the book OCR. Base: `…/abschlussprüfungteil2ae/`

- **GA1** — `ga1/anforderungsanalyse/`
- **GA2** — `ga2/…`: UML `zustandsdiagramm`, `aktivitätsdiagramm`, `use-case-diagramm`,
  `sequenzdiagramm`, `klassendiagramm`; `mvc-pattern`, `observer-pattern`,
  `objektorientierung`, `sql-mysql`, `normalisierung`, `er-modell`, `softwareergonomie`
- **Projekt** — `projektantrag`, `projektdokumentation`, `projektpräsentation`

(URL pattern: `/abschlussprüfungteil2ae/ga#/<topic>/`, URL-encoded.)

## Catalog changes & old-practice-test caveats (it-berufe-podcast #190)

The book (3rd ed.) already reflects the Dec-2024/2025 catalog, so these don't
change the *book* content — but they matter when practicing with **old exam
papers**, where topics may be in the "wrong" part or no longer tested. Where a
topic shifted, add an Exam-Tip note so old-paper practice isn't misleading.

- **Advanced topics isolated into AP2 / removed from AP1:** SQL queries, OOP
  **inheritance (Vererbung)**, non-relational databases, RAID/SAN storage
  (AP1 now references NAS only). These sit in AP2's deeper material.
- **Dropped entirely (appears in pre-2025 papers, no longer tested):**
  Struktogramm & PAP flowcharts, SWOT analysis, LTE/5G mobile standards,
  ISO-27001-series specifics, detailed software-quality-criteria lists.
- **Newly emphasized in the 2025 catalog:** KI/AI support, SMART goals,
  Scrum vs. Waterfall, IPv4/IPv6 configuration, 2FA, DSGVO data-subject rights,
  hashing/anonymization, UML activity diagrams, code error-finding & desk checks,
  OS hardening, accessibility (Barrierefreiheit).

## Practical prep tips (it-berufe-podcast)

- Practice with **past exam papers** (Rückblick Sommer/Winter) for question
  patterns — but filter every old paper through the catalog-change list above.
- Encode these project pitfalls into the Projekt topics: **14 häufigste Fehler
  im Projektantrag**, **17 in der Projektdokumentation**, **11 in der
  Projektpräsentation**.
- Time management: documentation time counts toward the 40/80-hour project
  limit; the presentation is **15 minutes**.
- Know the Sommer/Winter exam procedure and timeline.

## Source links (from sources.txt, AP2 section)

- `fachinformatikerpruefungsvorbereitung.de/abschlussprüfungteil2ae/` — AP2-AE
  structure, topic emphasis, tips (above).
- `ihk.de/regensburg/.../fachinformatiker-in-pruefung--5882230` — official exam
  dates/logistics.
- `it-berufe-podcast.de/vorbereitung-auf-die-ihk-abschlusspruefung-der-it-berufe/`
  — general prep strategy.
- `it-berufe-podcast.de/neuer-pruefungskatalog-...-190/` — updated IHK
  Prüfungskatalog notes (the book's 3rd ed. reflects the Dec-2024 catalog).
