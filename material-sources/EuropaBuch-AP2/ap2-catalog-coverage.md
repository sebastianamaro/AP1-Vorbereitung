# AP2-AE 2025 catalog — coverage audit

Every catalog topic mapped to our `learning-material-ap2/de`.
Legend: **✓** have with good depth · **~** have, expand · **➕** missing, add.
(Removed-from-catalog topics already deleted: Industrie 4.0, KI/KNN, Blockchain,
Programmierparadigmen.)

## GA2 — Entwicklung & Umsetzung von Algorithmen

| Catalog topic | Status | Our file / action |
|---|---|---|
| Algorithmen, Pseudocode, Schreibtischtest | ✓ | 06-02-04 (add "5 Eigenschaften" + Big-O overview) |
| Sortier-/Suchalgorithmen (Bubble/Selection/Insertion) | ✓ | 06-02-02 |
| OOP: Klassen, Objekte | ~ | 06-02-03 → **split**; add **06-02-05 Klassen & Objekte** |
| OOP: **Kapselung** + Sichtbarkeiten | ➕ | **06-02-06 Datenkapselung** (access modifiers table) |
| OOP: **Konstruktoren** (+Überladung) | ➕ | **06-02-07 Konstruktoren** |
| OOP: Vererbung & Polymorphie | ~ | 06-02-03 (keep/refocus on Polymorphie) |
| OOP: abstrakte Klassen vs. Interface, Generics | ➕ | **06-02-08 Klassen: abstrakt/Interface/Generics** |
| Exceptions, Collections (List/Set/Map) | ➕ | **06-02-09 Exceptions & Collections** |
| UML (Klasse, Use-Case, Sequenz, Aktivität, Zustand) | ✓ | 06-04-* (we also have Paket/Zeitverlauf) |
| SQL syntax (DDL/DML) | ✓ | 06-03-01 (add CASE/date/subqueries depth) |
| **Joins** (INNER/LEFT/RIGHT/FULL) | ➕ | **06-03-04 Joins** |
| **Schlüssel** + Constraint-Aktionen (CASCADE/SET NULL/RESTRICT) | ➕ | **06-03-05 Schlüssel & referenzielle Integrität** |
| Normalformen (1-3NF) | ✓ | 06-03-03 |
| ER-Modell | ✓ | 06-03-02 (+images) |
| **Anomalien/Redundanzen**, **Indizes** | ~/➕ | **06-03-06 Datenbank-Grundlagen** (CRUD, NULL, Index, Anomalien) |
| **ODBC** (DB-Anbindung) | ➕ | in 06-03-06 |
| ACID/Transaktionen | ✓ | 04-06 |
| Design-Pattern: MVC, Observer | ✓ | 06-05-01/02 |
| **Singleton, Factory, Facade** + Kategorien | ➕ | **06-05-00/03/04/05** |
| **Architektur-Pattern**: 3-Schichten | ➕ | **06-07-01 Schichtenarchitektur** |
| **Data Binding** (one-/two-way) | ➕ | **06-07-02 Data Binding** |
| **CI/CD** | ➕ | **06-07-03 CI/CD** |
| REST, SOAP | ~ | expand from 06-01-01 → **06-07-04 REST**, **06-07-05 SOAP** |
| **Datenformate** (JSON/XML/CSV), well-formed/valid, DTD | ➕ | **06-08-01 Dateiformate** |
| **Compiler vs. Interpreter** | ➕ | **06-08-02** |
| **Versionsverwaltung / Git** | ➕ | **06-08-03** |
| **Rekursion vs. Iteration**, **Modularisierung** | ➕ | **06-08-04** |

## GA1 — Planen eines Softwareproduktes
| Anforderungsanalyse (funktional/nicht-funktional) | ✓ | 06-01-02 |
| Bedienoberflächen/Ergonomie (GUI/UX) | ✓ | 06-06-02/03, 05-03 |
| Qualitätssicherung planen | ✓ | 02-* |

## Übergreifend (FÜ)

| Catalog topic | Status | Our file / action |
|---|---|---|
| Projektmanagement (Netzplan, Gantt, Vorgehensmodelle) | ✓ | 01-* |
| Scrum / agile; **User Story, MVP** | ~ | 01-05 (add User Story/MVP/XP) |
| **SMART, PSP, Tuckman-Phasen** | ➕ | expand 01-01 |
| Stakeholder-/Risikoanalyse | ✓ | 01-02 |
| **Vereinbarungen: SLA, SOP** (Lasten-/Pflichtenheft ✓) | ➕ | **01-06 SLA & SOP** |
| Qualitätsmanagement, Softwarequalitätsmerkmale | ✓ | 02-01/02 |
| **QS vs. QK, PDCA, Soll-Ist-Formel** | ➕ | expand 02-01 |
| Testen (Unit/Integration/System, Black/White-Box) | ✓ | 02-03 |
| **TDD, Last-/Performancetests, Äquivalenzklassen, FIRST** | ~ | expand 02-03/02-04 |
| Datenschutz (DSGVO) | ✓ | 03-* |
| IT-Sicherheit: Schutzziele, Schutzbedarf, Pentest | ✓ | 04-* |
| Bedrohungen: **MITM, SQL-Injection, DDoS** (benannt) | ~ | expand 04-04 |
| **Kerberos** | ➕ | **04-07 Kerberos** (or in 04-02) |
| **Zutritts-/Zugangs-/Zugriffskontrolle** | ➕ | expand 04-02 |
| **Security-Prinzipien** (Least Privilege, Zero Trust, Defense in Depth) | ➕ | expand 04-01 |
| Kryptographie, digitale Signatur, PKI | ✓ | 05-02 (refactored) |
| Speicher **NAS/SAN**, USV, Server, Redundanz/RAID, VDI, Support | ✓ | 05-04/06/07/08/09/10 |
| **Monitoring von Systemen** | ➕ | **05-11 Monitoring** |
| Netzwerke (IPv4/IPv6, Subnetting, Routing, VLAN, VoIP, Firewall) ~10% | ✓ | 07-* |
| **Programm-/Konfigurationsdokumentation** | ➕ | **06-08-05** (or 00-06) |
| Cyber-physische Systeme | ✓ | 06-06-04 |
| WISO/Geschäftsprozesse | ✓ | 08-* |
| **Wirtschaftskreislauf, ökonomisches Prinzip, Prokura** | ➕ | expand 08-02 |

## ✅ Final verification (bidirectional)

Reference basis: the **book TOC** (`extraction/full-index.md`, 3rd-ed. aligned to
the Dez-2024 catalog) + the **podcast #191 delta** (added/removed). *(The literal
paywalled AKA/U-Form catalog document was not purchased; this basis is a strong
proxy.)*

**Scope check — removed topics fully gone** (grep over all 112 files): Industrie 4.0,
neuronale Netze/KI, Blockchain, Programmierparadigmen, Data Warehouse, Load
Balancing, IoT, Smart Grid, Big Data → **clean** (only referenced in the
`00-02-catalog-changes` explainer, as intended).

**Completeness check — catalog-added topics all present** (grep): Kerberos, ODBC,
Monitoring, NAS, SAN, Kapselung, Facade, Singleton, Factory, Data Binding, CI/CD,
Man-in-the-Middle, SQL-Injection, DDoS, TDD, Äquivalenzklassen, Prokura,
Wirtschaftskreislauf, Konstruktoren, Schichtenarchitektur → **all OK**.

**Structural check:** 112 files, 330 internal links, **0 broken**, 0 missing images.

**Conclusion:** content matches the AP2-AE 2025 catalog scope — no in-scope gaps
detected, no out-of-scope topics remain as content.

## Summary
- **Solid coverage:** UML, networks, datenschutz, project-mgmt core, IT-security core, IT-systems.
- **~25 additions/expansions to do** (marked ➕/~), concentrated in **06 Software** (OOP depth, patterns, DB joins/keys/fundamentals, architecture, development/dateiformate) plus smaller adds in security, quality, PM, systems, WISO.
