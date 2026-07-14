# Singleton Pattern

## Learning Objectives

After this chapter you should:
- Explain the purpose of the Singleton pattern
- Know and apply the three core building blocks
- Name typical use cases

---

## Core Content

The **Singleton** (creational pattern) ensures that **exactly one instance** of a class exists, and provides a **global access point** to it.

**Use:** shared resources/central control – e.g. **database connection**, configuration, logger.

### Three core building blocks

| Building block | Purpose |
|----------|-------|
| **private constructor** | prevents creation from outside (`new`) |
| **static variable** | holds the single instance |
| **static access method** | returns the instance (creates it on first call – *lazy*) |

### Example (Java)

```java
public class Datenbank {
    private static Datenbank instanz;      // hält die einzige Instanz
    private Datenbank() { }                 // privat -> kein new von außen

    public static Datenbank getInstanz() {  // globaler Zugriffspunkt
        if (instanz == null) {              // lazy Initialisierung
            instanz = new Datenbank();
        }
        return instanz;
    }
}
```

> **Analogy:** The Singleton is like the *one manager* in the system – there is only one.
> **Note:** In concurrent programs `getInstanz()` must be **thread-safe** (e.g. `synchronized` or an enum singleton).

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **Singleton** | Exactly one instance + global access |
| **Private constructor** | Blocks external instance creation |
| **Lazy initialization** | Instance is created only when needed |

---

## Exam Tips

- Confidently name the **three building blocks** (private constructor, static variable, static method).
- Classification: **creational pattern**.
- Justify the use with an example (DB connection/logger).

---

## Practice Exercise

**Task:** Implement a Singleton class `Logger` with a private constructor and `getInstanz()` and explain why the constructor must be private.

---

## Cross-References

- [06-05-04 Factory](./06-05-04-factory.md)
- [06-02-08 Classes: abstract/interface/generics](../06-02-programmierung/06-02-08-klassen-abstrakt-interface.md)
