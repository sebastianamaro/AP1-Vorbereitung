# Exceptions & Collections

## Learning Objectives

After this chapter you should be able to:
- Apply exception handling with try/catch
- Distinguish List, Set and Map
- Choose the appropriate collection

---

## Core Content

### Exception Handling

An **exception** signals an error at runtime. With **try/catch** it is caught instead of letting the program crash.

```java
try {
    int e = 10 / teiler;
} catch (ArithmeticException ex) {   // z. B. Division durch 0
    System.out.println("Fehler: " + ex.getMessage());
} finally {
    // wird immer ausgeführt (z. B. Ressourcen schließen)
}
```

- **`try`** – monitored block; **`catch`** – handling per exception type; **`finally`** – always runs.
- **Checked** exceptions must be handled/declared; **unchecked** (RuntimeException) not necessarily.
- **`throw`** throws an exception yourself; **`throws`** declares it in the signature.

### Collections (Java Collections Framework)

| Type | Order | Duplicates | Example |
|------|-------|------------|---------|
| **List** | ordered (index) | allowed | `ArrayList<String>` |
| **Set** | unordered* | **none** | `HashSet<String>` |
| **Map** | key→value | keys unique | `HashMap<Integer,String>` |

```java
List<String> namen = new ArrayList<>();      // geordnet, Duplikate
Set<String>  tags  = new HashSet<>();         // eindeutig
Map<Integer,String> personen = new HashMap<>(); // Key-Value
personen.put(1, "Anna");
```

Choice: **List** for order/index, **Set** for uniqueness, **Map** for key-value mapping.

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **try/catch/finally** | Exception handling |
| **checked/unchecked** | Must be handled vs. not |
| **List/Set/Map** | Ordered / unique / key-value |

---

## Exam Tips

- Know **try/catch/finally** and the flow (finally always runs).
- Confidently distinguish **List vs. Set vs. Map** (order/duplicates/key-value) – a common matching question.
- Justify the appropriate collection for a scenario.

---

## Practice Exercise

**Task:** (1) Catch a possible `NumberFormatException` when parsing a user input. (2) Which collection is suitable for "unique e-mail addresses" and why?

---

## Cross-References

- [06-02-08 Classes: abstract/Interface/Generics](./06-02-08-klassen-abstrakt-interface.md)
- [06-06-01 Debugging](../06-06-qualitaet-ux/06-06-01-debugging.md)
