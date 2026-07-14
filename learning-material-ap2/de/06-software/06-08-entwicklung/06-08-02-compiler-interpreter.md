# Compiler vs. Interpreter

## Lernziele

Nach diesem Kapitel solltest du:
- Compiler und Interpreter unterscheiden
- Vor- und Nachteile beider Ansätze nennen
- Mischformen (Bytecode/JIT) einordnen

---

## Kerninhalt

| | Compiler | Interpreter |
|--|----------|-------------|
| **Übersetzung** | **vorab**, gesamtes Programm | **zur Laufzeit**, Zeile für Zeile |
| **Ausführung** | schnell (Maschinencode) | langsamer |
| **Fehler** | zur **Compile-Zeit** erkannt | erst zur **Laufzeit** |
| **Ergebnis** | eigenständige ausführbare Datei | keine (Quellcode + Interpreter nötig) |
| **Beispiele** | C, C++, Rust | Python, JavaScript, PHP |

### Mischform: Bytecode + VM

**Java** wird zu **Bytecode** kompiliert und von der **JVM** ausgeführt (plattformunabhängig, „write once, run anywhere"). **JIT-Compiler** übersetzen häufig genutzten Bytecode zur Laufzeit in schnellen Maschinencode.

- **Compiler-Vorteil:** schnelle Ausführung, frühe Fehlererkennung.
- **Interpreter-Vorteil:** plattformunabhängig, schnelles Testen/Prototyping.

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Compiler** | Übersetzt vorab in Maschinencode |
| **Interpreter** | Übersetzt/führt zur Laufzeit aus |
| **Bytecode/JVM** | Zwischencode + virtuelle Maschine |
| **JIT** | Just-in-Time-Compiler zur Laufzeit |

---

## Prüfungstipps

- **Übersetzungszeitpunkt** (vorab vs. Laufzeit) und **Fehlererkennung** (Compile- vs. Laufzeit) sind die Kernunterschiede.
- Java = **Mischform** (Bytecode + JVM) – beliebte Frage.
- Je zwei Beispielsprachen nennen können.

---

## Übungsaufgabe

**Aufgabe:** Vergleiche Compiler und Interpreter in einer Tabelle (Übersetzung, Geschwindigkeit, Fehlererkennung, Ergebnis) und ordne Java ein.

---

## Querverweise

- [06-08-03 Versionsverwaltung](./06-08-03-versionsverwaltung.md)
- [06-02-04 Analyse von Pseudocode](../06-02-programmierung/06-02-04-pseudocode-analyse.md)
