# Compiler vs. Interpreter

## Learning Objectives

After this chapter you should:
- Distinguish compiler and interpreter
- Name the advantages and disadvantages of both approaches
- Classify hybrid forms (bytecode/JIT)

---

## Core Content

| | Compiler | Interpreter |
|--|----------|-------------|
| **Translation** | **in advance**, the whole program | **at runtime**, line by line |
| **Execution** | fast (machine code) | slower |
| **Errors** | detected at **compile time** | only at **runtime** |
| **Result** | standalone executable file | none (source code + interpreter needed) |
| **Examples** | C, C++, Rust | Python, JavaScript, PHP |

### Hybrid form: bytecode + VM

**Java** is compiled to **bytecode** and executed by the **JVM** (platform-independent, "write once, run anywhere"). **JIT compilers** translate frequently used bytecode into fast machine code at runtime.

- **Compiler advantage:** fast execution, early error detection.
- **Interpreter advantage:** platform-independent, fast testing/prototyping.

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **Compiler** | Translates in advance into machine code |
| **Interpreter** | Translates/executes at runtime |
| **Bytecode/JVM** | Intermediate code + virtual machine |
| **JIT** | Just-in-Time compiler at runtime |

---

## Exam Tips

- **Time of translation** (in advance vs. runtime) and **error detection** (compile vs. runtime) are the core differences.
- Java = **hybrid form** (bytecode + JVM) – a popular question.
- Be able to name two example languages each.

---

## Practice Exercise

**Task:** Compare compiler and interpreter in a table (translation, speed, error detection, result) and classify Java.

---

## Cross-References

- [06-08-03 Version Control](./06-08-03-versionsverwaltung.md)
- [06-02-04 Analysis of Pseudocode](../06-02-programmierung/06-02-04-pseudocode-analyse.md)
