# Program and Configuration Documentation

## Learning Objectives

After this chapter you should:
- Distinguish types of documentation
- Explain program documentation (Programmdokumentation) and configuration documentation (Konfigurationsdokumentation)
- Know what makes good documentation

---

## Core Content

Documentation makes software **traceable, maintainable and ready for handover**. A distinction is made, among others, between **program documentation (Programmdokumentation)** and **configuration documentation (Konfigurationsdokumentation)** (both named in the catalogue).

### Program documentation (Programmdokumentation)

Describes the **structure and functioning** of the code – for developers:

- **Source code comments** (meaningful, not redundant)
- **API docs** generated from the code (e.g. **JavaDoc**, Doxygen)
- **Technical docs:** architecture, class/data model, important algorithms, interfaces

### Configuration documentation (Konfigurationsdokumentation)

Describes the **settings and environment** for operation/deployment:

- Configuration files and parameters (e.g. environment variables, `application.yml`)
- Installation/deployment guide, dependencies/versions
- Operating parameters (ports, paths, access – **no plaintext secrets!**)

### Further types of documentation

- **User documentation** (manual, help – for end users)
- **Project documentation** (see [00-03-02](../../00-exam-overview/00-03-projektarbeit/00-03-02-projektdokumentation.md))

### Characteristics of good documentation

Up to date, complete, understandable, consistent, versioned (maintained together with the code).

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **Program documentation (Programmdokumentation)** | Structure/functioning of the code (for developers) |
| **Configuration documentation (Konfigurationsdokumentation)** | Settings/environment for operation & deployment |
| **JavaDoc** | API documentation generated from code |
| **User documentation** | Guide for end users |

---

## Exam Tips

- Distinguish **program vs. configuration documentation** (code/developer vs. operation/deployment).
- Assign target groups: developer vs. user documentation.
- **Version** the docs together with the code; no secrets in plaintext.

---

## Practice Exercise

**Task:** For a web project, name two contents each of the program documentation and the configuration documentation.

---

## Cross-References

- [06-08-03 Version Control](./06-08-03-versionsverwaltung.md)
- [00-03-02 Project Documentation](../../00-exam-overview/00-03-projektarbeit/00-03-02-projektdokumentation.md)
