# Page 32 - BIOS vs. UEFI (Fortsetzung) & 3.4 Entwicklungssoftware

## BIOS vs. UEFI (Fortsetzung)

| Merkmal | BIOS | UEFI |
|---------|------|------|
| Sicherheit | Keine Secure Boot-Funktion | Secure Boot, TPM-Unterstützung |

### Wichtige BIOS-Tasten (je nach Hersteller)

- **DEL / F2:** BIOS-Setup aufrufen
- **F12 / ESC:** Boot-Menü öffnen

BIOS wird zunehmend durch **UEFI** ersetzt, das moderner, sicherer und leistungsfähiger ist.

---

## 3.4 Entwicklungssoftware

### Compiler

Ein **Compiler** ist ein Programm, das Quellcode in Maschinencode übersetzt. Der Compiler überprüft den Quellcode auf Fehler, übersetzt ihn in Assembler-Code und erstellt ein Objektmodul. Der Compiler wird nur einmal während der Kompilierungsphase aufgerufen.

### Linker

Ein **Linker** (auch Linker-Loader genannt) ist ein Programm, das mehrere Objektmodule zu einem ausführbaren Programm zusammenfügt. Der Linker löst externe Verweise (Libraries) auf und ersetzt sie durch die tatsächlichen Speicheradressen.

### Interpreter

Ein **Interpreter** ist ein Programm, das Quellcode direkt ausführt, ohne ihn vorher in Maschinencode zu übersetzen. Der Interpreter liest den Quellcode zeilenweise ein und führt ihn sofort aus. Beispiele für interpretierte Sprachen sind Python, JavaScript und Ruby.

### Hybrid-Modelle

Einige Programmiersprachen, wie Java und C#, verwenden ein **Hybrid-Modell**, das sowohl Compile- als auch Interpret-Techniken kombiniert. Der Quellcode wird zunächst in einen Zwischencode (Bytecode) kompiliert, der dann von einer virtuellen Maschine (JVM oder CLR) interpretiert wird. Dies ermöglicht eine Plattformunabhängigkeit und eine verbesserte Sicherheit.

