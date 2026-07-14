# AP2 translation policy (de → en / es)

Applies to `learning-material-ap2/de/**` → `learning-material-ap2/en/**` and
`.../es/**`. Goal: help a Spanish/English speaker study for a **German** IHK exam.

## Structure
- **Mirror the German tree exactly**: same folder names, same filenames (they are
  already English slugs). One `de` file → one `en` file + one `es` file at the
  identical relative path.
- **Do not change** links (`](../...md)`), image paths (`](../../assets/...png)`),
  or file names — they must stay identical so cross-references resolve.

## Translate
- All prose, **section headings**, table headers + cell text, exam tips, exercises,
  `<summary>`/`<details>` text, blockquotes.
- Heading map:
  | de | en | es |
  |----|----|----|
  | Lernziele | Learning Objectives | Objetivos de Aprendizaje |
  | Kerninhalt | Core Content | Contenido Principal |
  | Wichtige Begriffe | Key Terms | Términos Clave |
  | Prüfungstipps | Exam Tips | Consejos para el Examen |
  | Übungsaufgabe | Practice Exercise | Ejercicio Práctico |
  | Querverweise | Cross-References | Referencias |
  | Übersicht / Inhalte | Overview / Contents | Resumen / Contenidos |

## Keep verbatim (do NOT translate)
- **Code blocks** (SQL, Java, pseudocode) and inline code.
- **Links, image references, file paths, URLs.**
- Universal acronyms/terms: ACID, SQL, REST, SOAP, UML, HTTP, JSON, CRUD, NULL, Commit, Rollback, TLS, etc.

## German exam vocabulary — KEEP the German term + gloss on first use
She will see these **in German** on the exam. Keep the German word, add a
translation in parentheses the first time it appears, e.g.:
- EN: "the **Lastenheft** (requirements specification by the client) …"
- ES: "el **Lastenheft** (pliego de requisitos del cliente) …"
Applies to terms like: **Lastenheft, Pflichtenheft, Prokura, Handelsregister,
DSGVO, Schutzbedarf(sfeststellung), Zutritts-/Zugangs-/Zugriffskontrolle,
Wiederholungsblock, Fachgespräch, Projektantrag, Bestehensregelung, Magisches
Dreieck**, and other German-only legal/exam terms. Universal CS terms
(Primärschlüssel→primary key, Vererbung→inheritance) translate normally.

## Diagrams (ASCII / box-drawing)
- Keep the diagram structure. Translate **text labels** where it doesn't break
  alignment; leave arrows/structure and universal labels as-is.

## Language quality
- **Spanish:** use correct accents and punctuation (á é í ó ú ñ ¿ ¡).
- **German terms:** keep umlauts/ß (ä ö ü ß) intact.
- Natural, clear target-language prose — not word-for-word.

## Frontmatter / notes
- Keep the `> Grundlage: …` / source notes and `<!-- … -->` comments, translated
  (comments may stay German or be translated — prefer translated).
