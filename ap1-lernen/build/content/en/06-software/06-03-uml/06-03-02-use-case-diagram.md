# UML Use Case Diagram

## Learning Objectives

After this chapter, you should be able to:
- Read and understand use case diagrams
- Identify actors and use cases
- Know relationships in use case diagrams
- Create simple use case diagrams

---

## Core Content

### What is a Use Case Diagram?

A **use case diagram** shows which functions a system offers and who uses them.

```
┌─────────────────────────────────────────────────────────────────┐
│                  USE CASE DIAGRAM                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Purpose:                                                      │
│   • Represent requirements from user perspective               │
│   • WHAT the system should do (not HOW)                        │
│   • Communication between developers and customers              │
│   • Overview of system functions                                │
│                                                                 │
│   Shows:                                                        │
│   • Actors (who uses the system?)                              │
│   • Use cases (what can the system do?)                        │
│   • Relationships between actors and use cases                  │
│   • System boundaries                                           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Elements of a Use Case Diagram

```
┌────────────────────────────────────────────────────────────────┐
│                 ELEMENTS IN USE CASE DIAGRAM                    │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   1. ACTOR                                                     │
│      Stick figure with name                                    │
│                                                                │
│         O                                                      │
│        /|\     ← Actor (person or external system)            │
│        / \                                                     │
│       Customer                                                 │
│                                                                │
│   2. USE CASE                                                  │
│      Ellipse with description                                  │
│                                                                │
│      ┌─────────────────────┐                                  │
│      │  (  Order          )│  ← Use case                      │
│      │  (  product        )│     (Verb + Object)              │
│      └─────────────────────┘                                  │
│                                                                │
│   3. SYSTEM BOUNDARY                                           │
│      Rectangle around use cases                                │
│                                                                │
│      ┌─────────────────────┐                                  │
│      │     Online Shop     │  ← System name                   │
│      │                     │                                  │
│      │  (Use cases)        │                                  │
│      │                     │                                  │
│      └─────────────────────┘                                  │
│                                                                │
│   4. ASSOCIATION                                               │
│      Line between actor and use case                          │
│                                                                │
│         O                                                      │
│        /|\────────(Use Case)                                  │
│        / \                                                     │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Actors

**Actors** are external entities that interact with the system.

```
┌────────────────────────────────────────────────────────────────┐
│                        ACTORS                                   │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Types of actors:                                             │
│                                                                │
│   PERSONS                        SYSTEMS                       │
│      O                          ┌─────────┐                   │
│     /|\                         │ <<System>> │                │
│     / \                         │  Payment   │                │
│   Customer                      │  system    │                │
│   Employee                      └─────────┘                   │
│   Administrator                 Email Server                   │
│                                 Database                       │
│                                                                │
│   An actor can also be:                                        │
│   • A time-triggered process ("Timer")                        │
│   • A hardware device (barcode scanner)                       │
│   • An external system (bank, payment provider)               │
│                                                                │
│   Question: "Who or what interacts with the system?"          │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Use Cases

```
┌────────────────────────────────────────────────────────────────┐
│                    USE CASES                                    │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Naming:                                                      │
│   • Verb + Object                                             │
│   • Formulated from actor's perspective                       │
│   • Describes a completed goal                                 │
│                                                                │
│   Good use case names:           Bad names:                   │
│   ✓ Order product                ✗ Order                      │
│   ✓ Create invoice               ✗ Invoice                    │
│   ✓ Change password              ✗ Password                   │
│   ✓ Generate report              ✗ Reporting                  │
│                                                                │
│   Examples of typical use cases:                              │
│   ┌─────────────────────┐                                    │
│   │  ( Log in         ) │                                    │
│   │  ( Log out        ) │                                    │
│   │  ( Search         ) │                                    │
│   │  ( Place order    ) │                                    │
│   │  ( Pay            ) │                                    │
│   │  ( Cancel         ) │                                    │
│   └─────────────────────┘                                    │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Relationships in Use Case Diagrams

```
┌────────────────────────────────────────────────────────────────┐
│                     RELATIONSHIP TYPES                          │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   1. ASSOCIATION (Actor ↔ Use Case)                           │
│      Simple line = Actor uses the use case                    │
│                                                                │
│         O                                                      │
│        /|\────────( Search product )                          │
│        / \                                                     │
│                                                                │
│   2. INCLUDE (<<include>>)                                    │
│      The base use case ALWAYS INCLUDES the other              │
│      Dashed arrow with <<include>>                            │
│                                                                │
│      ( Place order )─ ─ ─<<include>>─ ─ ─►( Pay )            │
│                                                                │
│      "Place order always includes pay"                        │
│                                                                │
│   3. EXTEND (<<extend>>)                                      │
│      Optional: The extending use case CAN be added            │
│      Dashed arrow with <<extend>>                             │
│                                                                │
│      ( Redeem voucher )─ ─<<extend>>─ ─►( Place order )      │
│                                                                │
│      "Redeem voucher optionally extends place order"          │
│                                                                │
│   4. GENERALIZATION (Actors)                                   │
│      A specific actor inherits from a general one             │
│                                                                │
│         O  User                                                │
│        /|\     ▲                                              │
│        / \     │                                              │
│                │                                              │
│         O──────┘                                              │
│        /|\  Administrator                                     │
│        / \                                                    │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Include vs. Extend

| Aspect | <<include>> | <<extend>> |
|--------|-------------|------------|
| **Meaning** | ALWAYS executed | OPTIONALLY executed |
| **Arrow direction** | From base to included | From extension to base |
| **Example** | Place order includes Pay | Express shipping extends Place order |
| **Memory aid** | "Always includes" | "Can extend" |

---

### Example: Online Shop

```
┌────────────────────────────────────────────────────────────────┐
│                 EXAMPLE: ONLINE SHOP                            │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   ┌──────────────────────────────────────────────────────┐   │
│   │                     Online Shop                        │   │
│   │                                                        │   │
│   │                    ( Search product )                  │   │
│   │                           │                            │   │
│   │                           │                            │   │
│  O                  ( Manage shopping cart )               │   │
│ /|\─────────────────────────│                              │   │
│ / \                         │                              │   │
│Customer                 ( Place order )                    │   │
│   │                         │                              │   │
│   │                         │<<include>>                   │   │
│   │                         ▼                              │   │
│   │            ─ ─ ─►( Process payment )                   │   │
│   │           │                     │                      │   │
│   │           │                     │<<include>>           │   │
│   │           │                     ▼                      │   │
│   │           │        ( Confirm order )                   │   │
│   │           │                                            │   │
│   │        <<extend>>                                      │   │
│   │           │                                            │   │
│   └───────────┴──( Redeem voucher )                        │   │
│                                                            │   │
│                                                        O   │   │
│                    ( Cancel order )──────────────────/|\ │   │
│                                                       / \  │   │
│                                                    Admin   │   │
│                    ( Manage inventory )─────────────│    │   │
│                                                        │   │
│                    ( Create report )───────────────────┘   │   │
│   └────────────────────────────────────────────────────────┘   │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Simple Example: ATM

```
┌────────────────────────────────────────────────────────────────┐
│                EXAMPLE: ATM                                     │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   ┌─────────────────────────────────────────────────────┐    │
│   │                    ATM                               │    │
│   │                                                      │    │
│   │                ( Insert card )                       │    │
│   │                        │                             │    │
│   │                        │<<include>>                  │    │
│   │                        ▼                             │    │
│   │               ( Enter PIN )                          │    │
│   │                        │                             │    │
│  O │                       │                             │    │
│ /|\──────────────( Withdraw cash )                       │    │
│ / \│                       │                             │    │
│Customer                    │<<include>>                  │    │
│    │                       ▼                             │    │
│    │              ( Dispense card )                      │    │
│    │                                                     │    │
│    │                                                     │    │
│    └─────────────( Check balance )                       │    │
│                                                          │    │
│                  ( Make transfer )───────────────────────│    │
│                                                          │    │
│   └─────────────────────────────────────────────────────┘    │
│                                                       │      │
│                                                   ┌───┴───┐  │
│                                                   │<<System>>│
│                                                   │ Bank   │  │
│                                                   │ server │  │
│                                                   └───────┘  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Tips for Creating

```
┌────────────────────────────────────────────────────────────────┐
│                  TIPS FOR CREATING                              │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   DO:                                                          │
│   ✓ Place actors outside the system boundary                  │
│   ✓ Name use cases as "Verb + Object"                         │
│   ✓ Think from user perspective (WHAT, not HOW)               │
│   ✓ Label system boundary with name                           │
│   ✓ Use include for mandatory processes                       │
│   ✓ Use extend for optional extensions                        │
│                                                                │
│   DON'T:                                                       │
│   ✗ Too many details (it's not a flow diagram!)              │
│   ✗ Technical implementation details                          │
│   ✗ Name use cases as just nouns                              │
│   ✗ Actors inside system boundary                             │
│   ✗ More than 15-20 use cases (too complex)                  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Use Case** | Application case, system function |
| **Actor** | Person or system that interacts with the system |
| **System Boundary** | Delimitation of the observed system |
| **Include** | Contains relationship (always) |
| **Extend** | Extends relationship (optional) |
| **Association** | Connection between actor and use case |

---

## Exam Tips

### Common Exam Questions

- Which actors and use cases does the diagram contain?
- What does <<include>> and <<extend>> mean?
- Create a use case diagram for a given scenario

### Important to Remember

- **Actor** = outside the system boundary
- **Use Case** = "Verb + Object" (e.g., "Order product")
- **<<include>>** = ALWAYS included
- **<<extend>>** = OPTIONAL, extends
- Use case diagram shows WHAT, not HOW

---

## Practice Exercises

### Exercise 1
What is the difference between <<include>> and <<extend>>?

**Solution:**
- **<<include>>:** The included use case is ALWAYS executed. Example: "Place order" always includes "Pay".
- **<<extend>>:** The extending use case is OPTIONALLY executed. Example: "Express shipping" can extend "Place order", but doesn't have to.

### Exercise 2
Identify at least three actors and four use cases for a library system.

**Solution:**
**Actors:**
1. Library user
2. Librarian
3. Administrator

**Use Cases:**
1. Borrow book
2. Return book
3. Search book
4. Create user account
5. Send reminder
6. Manage inventory

### Exercise 3
Given the following scenario. Draw a use case diagram.

"A ticket system allows customers to create tickets and track their status. Support staff can process and close tickets. Administrators can additionally manage users."

**Solution:**
```
┌─────────────────────────────────────────────────┐
│                Ticket System                     │
│                                                  │
│           ( Create ticket )────────O Customer   │
│                    │                 /|\         │
│           ( Track ticket )──────────/ \         │
│                                                  │
│           ( Process ticket )                    │
│                    │               O            │
│           ( Close ticket )────────/|\Support   │
│                                   / \           │
│                                                  │
│           ( Manage users )─────O Admin         │
│                                  /|\            │
│                                  / \            │
└─────────────────────────────────────────────────┘
```

---

## Cross-References

- [06-03-01 Class Diagram](./06-03-01-class-diagram.md) - Structural diagram
- [06-03-03 Activity Diagram](./06-03-03-activity-diagram.md) - Flow representation
- [01-04-01 Requirements Specification](../../01-project-management/01-04-documentation/01-04-01-requirements-specification.md) - Requirements
