# ap2.online vs. our AP2 content — comparison & action plan

Full crawl of **ap2.online** (all ~40 pages) compared against our
`learning-material-ap2/de` (87 files). This drives three things:
**(A)** expand/refactor our content, **(B)** topics we have that ap2.online
omits — *your keep/cut decision*, **(C)** topics ap2.online has that we lack,
**(D)** reusable diagram images.

---

## 0. What ap2.online is

A **free, single-author** AP2-AE study site. Focused, exam-oriented, text- and
table-based (moderate depth), with good mnemonics/analogies. It **narrows to the
AE programming core** and largely omits the broader Fachkompetenzen our book
(EuropaBuch AP2, 3. Aufl., Dez-2024-Katalog) covers.

**Its self-declared 3 most important topics** (`/prufung/wichtigethemen`):
1. **Diagramme sicher zeichnen** (ideally ≤ 15 min each)
2. **SQL & relationale Datenbanken**
3. **Algorithmen entwickeln & Pseudocode schreiben**

> Useful cross-check: all three are already core in our content — this validates
> our emphasis and the exam-tip flags we added.

---

## A. Expand / refactor opportunities (ap2.online is deeper or better-framed)

### 06 Software — biggest expand area
- **OOP** (ours is 1 file → split into a subchapter): add **Konstruktoren** (+overloading), **Datenkapselung** with the `public/private/protected/package` access-modifier table, **abstrakte Klasse vs. Interface** table, **Generics**, **Exceptions (try/catch)**, **Collections (List/Set/Map)**, procedural-vs-OOP, functions-vs-procedures.
- **Design Patterns** (ours = MVC+Observer): add **Singleton, Factory, Facade** + a **patterns overview** with the 3 categories (Creational/Structural/Behavioral). They give code + advantages tables + analogies.
- **Algorithms**: add the **5 Eigenschaften eines Algorithmus** (Eindeutigkeit, Ausführbarkeit, Endlichkeit, Determinismus, Allgemeingültigkeit), Big-O table, Bubble-Sort `vertauscht`-flag optimization.
- **Databases**: add **dedicated Joins** page (INNER/LEFT/RIGHT/FULL + comparison), **keys** with constraint actions (`ON DELETE CASCADE/SET NULL/RESTRICT`), deeper **SQL syntax** (CASE, date fns, LIKE/IN/BETWEEN, subqueries, aggregates), **DB fundamentals** (CRUD, NULL, anomalies, indexing, triggers/stored procedures, NoSQL, Data Warehouse vs Data Lake).

### 01 Project-management
- Add **SMART** (spelled out), **Projektstrukturplan (PSP)**, **Tuckman-Phasen** (Forming/Storming/Norming/Performing), precise **Gesamtpuffer vs. Freier Puffer** defs, comparison tables **PSP↔Netzplan** and **Netzplan↔Gantt**.
- Agile: **User-Story-Template** ("Als [Rolle] möchte ich [Ziel], um [Nutzen]"), **MVP**, XP practices.
- Vereinbarungen: add **SLA** and **SOP** (we have Lasten-/Pflichtenheft; SLA only briefly under Support).

### 02 Quality-management
- Add **QS vs. QK** (proaktiv/reaktiv), **PDCA-Zyklus**, **Soll-Ist-Vergleich-Formel** `((Ist−Soll)/Soll)×100`, **FIRST**-Prinzip für Unit-Tests, explicit **Teststufen** (Unit/Integration/System/E2E/Regression/Performance), **Äquivalenzklassen + Grenzwertanalyse**, Prüfverfahren (Parität, CRC/Prüfsummen).
- *(We keep our extras they lack: Six Sigma/DMAIC/DPMO, named ISO 25000.)*

### 04 IT-Security
- Add security **principles**: Least Privilege, Need-to-Know, Defense in Depth, **Zero Trust**.
- Add the classic **Zutritts-/Zugangs-/Zugriffskontrolle** distinction, **threat→countermeasure matrix**, honeypot/sandbox.
- Krypto: add **digitale Signaturen**, **PKI/X.509/CA/CRL-OCSP** (we have symmetric/asymmetric/hash/blockchain).

### 08 Business-processes (WISO)
- Add **einfacher Wirtschaftskreislauf**, **ökonomisches Prinzip** (Maximal-/Minimalprinzip), **Prokura** (Einzel-/Gesamtprokura, Handelsregister).

---

## B. Topics WE have that ap2.online does NOT cover — YOUR decision

ap2.online omits these entirely (or nearly). They **are in our book/the IHK
catalog**, so my recommendation is **KEEP** — but you wanted to eyeball them:

| Our content | On ap2.online? | Recommendation |
|---|---|---|
| **07 Networks (whole chapter)** — Ethernet/MAC, IPv4/IPv6 subnetting, VLSM, Routing, VLANs, VoIP, Firewalls, Web-Sec | ❌ none | **Keep** — full 2.8 in the book; subnetting is classic exam material |
| **05 IT-Systeme** — Industrie 4.0, KNN, Speicher (DAS/NAS/SAN), USV, Server (Rack/Blade), VDI, Kundensupport | ❌ mostly none (RAID only, under Quality) | **Keep** — full 2.6 in the book; KI/Industrie 4.0 newly emphasized |
| **03 Datenschutz (deep DSGVO)** — Art. 5, Art. 4, Auftragsverarbeitung | ⚠️ only a light mention under Security | **Keep** — book has a full 2.4; DSGVO rights newly emphasized |
| **02 Six Sigma / named ISO 25000** | ❌ | **Keep** (book content) |
| **01 Risikoanalyse** | ❌ (stakeholder yes, risk no) | **Keep** |
| **06 CPS, 05 Blockchain** | ❌ | **Keep** (catalog) |

**Bottom line:** ap2.online is a *narrower* selection than our book. Nothing we
have looks wrong to cut — the book (AE-specific, current catalog) is the
authoritative scope; ap2.online is one student's focus. Cutting is optional.

---

## C. Topics ap2.online has that we should ADD (new files)

Beyond the expansions in (A), these are genuinely **new** areas worth adding:

- **Architecture** (new subchapter 06): **3-Schichten-Architektur**, **Data Binding** (one-way/two-way), **CI/CD**. *(REST/SOAP we already have briefly — expand.)*
- **Development** (new subchapter 06): **Compiler vs. Interpreter**, **Versionsverwaltung/Git**, **Rekursion vs. Iteration**, **Modularisierung**.
- **Dateiformate** (new): **CSV/XML/JSON** compared, **well-formed vs. valid**, **DTD**.

---

## D. Reusable diagram images (~10 PNGs)

ap2.online has real diagram images (the rest of the site is text/tables).
Optimized URL: `https://ap2.online/_ipx/_/diagrams/<name>.png`; originals likely
`https://ap2.online/diagrams/<name>.png`.

| File | Depicts | Maps to our topic |
|---|---|---|
| `erd_1_1.png`, `erd_1_n.png`, `erd_m_n.png` | ERD cardinalities (1:1, 1:n, m:n + junction) | 06-03-02 ER-Modell |
| `erd_aufgabe.png` | Full car-rental ERD (example solution) | 06-03-02 ER-Modell |
| `uml_class_association/aggregation/composition/vererbung.png` | Class-diagram relationships | 06-04-09 Klassendiagramm |
| `uml_usecase_aufgabe.png` | Use-case example (library card) | 06-04-02 Use-Case |
| `uml_activity_aufgabe.png` | Activity example (order processing) | 06-04-04 Aktivitätsdiagramm |
| `uml_sequenz_aufgabe.png` | Sequence example (book ordering) | 06-04-03 Sequenzdiagramm |

**Reuse across languages:** trivial — store once in
`learning-material-ap2/assets/images/` and reference from de/en/es (diagrams need
no translation).

**Licensing:** ap2.online is copyrighted (has an Impressum). Copying its images
isn't automatically OK. Two clean options:
1. **Recreate our own** equivalents (SVG/redrawn) — safe, matches our styling,
   and lets us localize labels if ever wanted. *(Recommended.)*
2. **Ask the author** for permission to reuse.

The generic ones (ERD cardinalities, class-relationship types) are quick to
recreate; the "Aufgabe" example diagrams are scenario-specific and best redrawn
with our own examples anyway.

---

## E. Official AP2-AE 2025 catalog verdicts (it-berufe-podcast #191)

This is the **authoritative scope** for keep/cut. Source: the new IHK
Prüfungskatalog for AP2 Anwendungsentwicklung (2025). It changes some of what the
book includes.

### ❌ REMOVED from AP2-AE (per catalog) → cut or mark "AP1-Wiederholung / niedrige Priorität"
- **Industrie 4.0** (our `05-01`) — "Trends" removed from AP2
- **Künstliche neuronale Netze / KI** (our `05-05`) — "Trends" removed
- **Blockchain** (part of our `05-02`) — removed (⚠️ keep the *Kryptographie* part; drop only Blockchain)
- **Programmierparadigmen** (our `06-02-01`) — removed
- Also removed: Big Data, AR, IoT, Smart Grid, **Struktogramm/PAP**, **Load Balancing**, **Data Warehouse**
  → therefore **do NOT add** Data Warehouse (ap2.online has it, but it's out of scope)

> Note: these "Trends" moved to / stayed in **AP1** (podcast #190 added KI to AP1).
> The book keeps them (partly as *Wiederholungsblock aus Teil 1*), so my
> recommendation is **mark as low-priority/AP1-review rather than hard-delete** —
> your call.

### ✅ KEEP — confirmed in scope
- **Networks (07)** — cross-disciplinary (FÜ), ~**10% of AP2** in practice → keep (IPv4/Routing etc.)
- **Speichersysteme** — **NAS & SAN explicitly ADDED** → keep `05-06`
- **USV, Server, RAID/Redundanz** — systems still in scope → keep
- **Datenschutz (03)** & **IT-Sicherheit (04)** — in scope → keep
- **Cyber-physische Systeme** (`06-06-04`) — explicitly kept (even though Industrie 4.0 removed)
- **WISO / business (08)** — still an exam area

### ➕ ADD — newly in the catalog (beyond section C)
- **Kerberos** (authentication), **ODBC** (DB connectivity), **Monitoring von Systemen**
- **Programm- und Konfigurationsdokumentation**
- **Architektur-Pattern** (in addition to design patterns)
- Expand: **TDD**, **Last-/Performancetests**, **Softwarequalitätsmerkmale** (quality)
- Expand DB: **Anomalien/Redundanzen**, detailed **SQL** (structures, indexes, manipulation, projection, selection, sorting, grouping)
- Security: **Man-in-the-Middle, SQL-Injection, DDoS** as named attacks
- OOP: **Kapselung** explicitly named; **Sortierverfahren** (Bubble/Selection/Insertion) named

### Reconciliation
The **catalog** (podcast #191) is the exam authority; the **book** is broader
(includes the removed Trends). Where they conflict, prioritize the catalog for
what to *emphasize*, but the book's extra topics can stay as low-priority review.

---

## Not replicable via copy

- **Interactive SQL / Joins trainer** — JS app; we'd have to build our own
  (e.g. sql.js in the web app) if we want live query practice. Nice-to-have,
  separate effort.
