# Software Quality

## Learning Objectives

After this chapter you should:
- Know the quality characteristics of software
- Understand methods for quality assurance in software development
- Be able to create test protocols
- Understand the connection between software quality and QM

---

## Core Content

### What is Software Quality?

**Software quality** refers to the degree to which a software product fulfills specified and implied requirements. It encompasses both functional and non-functional properties.

---

### Quality Characteristics of Software

According to ISO/IEC 25010 (formerly ISO 9126), eight main characteristics are distinguished:

```
┌─────────────────────────────────────────────────────────────────┐
│               SOFTWARE QUALITY CHARACTERISTICS                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │Functionality │  │ Reliability  │  │  Usability   │          │
│  │              │  │              │  │              │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │ Efficiency   │  │Maintainability│  │ Portability │          │
│  │              │  │              │  │              │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐                            │
│  │  Security    │  │Compatibility │                            │
│  │              │  │              │                            │
│  └──────────────┘  └──────────────┘                            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Quality Characteristics in Detail

| Characteristic | Description | Example |
|----------------|-------------|---------|
| **Functionality** | Software fulfills specified functions | Calculation delivers correct results |
| **Reliability** | Maintaining performance under defined conditions | Stable execution without crashes |
| **Usability** | Effort required for use, learnability | Intuitive operation, good help function |
| **Efficiency** | Ratio of performance to resource consumption | Fast response times, low memory usage |
| **Maintainability** | Effort required for changes and bug fixes | Modular, documented code |
| **Portability** | Ability to transfer to other environments | Runs on different operating systems |
| **Security** | Protection against unauthorized access | Secure authentication |
| **Compatibility** | Cooperation with other systems | Standard interfaces |

---

### Quality Assurance in Software Development

#### Constructive Quality Assurance

Measures applied **during** development:

| Measure | Description |
|---------|-------------|
| **Coding Standards** | Uniform programming guidelines |
| **Code Reviews** | Mutual code inspection |
| **Pair Programming** | Two developers work together |
| **Documentation** | Comments and technical documentation |
| **Design Patterns** | Using proven design patterns |

#### Analytical Quality Assurance

Measures applied **after** development:

| Measure | Description |
|---------|-------------|
| **Testing** | Systematic examination of the software |
| **Static Analysis** | Analyzing code without execution |
| **Metrics** | Measurable quality indicators |
| **Audits** | Review of processes and results |

---

### Test Protocol

A **test protocol** documents the execution and results of tests.

#### Typical Structure of a Test Protocol

| Section | Content |
|---------|---------|
| **General Data** | Date, tester, test environment, test version |
| **Test Points** | Hardware, software, network connection, security policies |
| **Results** | Passed/Not passed, deviations |
| **Actions** | Bug fixes, follow-up checks |

#### Example Test Protocol

```
┌─────────────────────────────────────────────────────────────────┐
│                    TEST PROTOCOL                                │
├─────────────────────────────────────────────────────────────────┤
│ Project:    Inventory Management Software v2.1                  │
│ Date:       15.03.2025                                         │
│ Tester:     Max Mustermann                                     │
│ Environment: Windows 11, 16GB RAM                              │
├─────────────────────────────────────────────────────────────────┤
│ No. │ Test Point           │ Expected │ Actual   │ Status      │
├─────┼──────────────────────┼──────────┼──────────┼─────────────┤
│ 1   │ Login function       │ OK       │ OK       │ Passed      │
│ 2   │ Item search          │ < 2 sec  │ 1.5 sec  │ Passed      │
│ 3   │ Stock display        │ Correct  │ Correct  │ Passed      │
│ 4   │ PDF export           │ OK       │ Error    │ Not passed  │
├─────────────────────────────────────────────────────────────────┤
│ Actions: Error #4 reported to development (Ticket #1234)        │
│ Retest scheduled: 17.03.2025                                    │
└─────────────────────────────────────────────────────────────────┘
```

---

### Software Test Types

| Test Type | Description | Who tests? |
|-----------|-------------|------------|
| **Unit Test** | Testing individual components | Developer |
| **Integration Test** | Testing interaction of components | Developer/Tester |
| **System Test** | Testing the complete system | Tester |
| **Acceptance Test** | Review by client | Customer |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Software Quality** | Degree of fulfillment of requirements by software |
| **Functionality** | Correct execution of specified functions |
| **Maintainability** | Effort required for changes and bug fixes |
| **Test Protocol** | Documentation of test results |
| **Code Review** | Mutual review of program code |
| **Usability** | User-friendliness of the software |

---

## Exam Tips

### Common Exam Questions
- Name quality characteristics of software
- What does a test protocol contain?
- Distinguish between constructive and analytical quality assurance

### Important to Remember
- Know quality characteristics according to ISO/IEC 25010
- Understand test protocol structure
- Know the difference between test types

---

## Practice Exercises

### Exercise 1
Name four quality characteristics of software and briefly explain them.

**Solution:**
1. **Functionality:** Software correctly executes specified functions
2. **Reliability:** Software runs stably and reliably
3. **Usability:** Software is easy to use and learn
4. **Maintainability:** Software is easy to modify and debug

### Exercise 2
What are the essential components of a test protocol?

**Solution:**
- General data (date, tester, environment)
- Test points (what was tested)
- Results (target-actual comparison, passed/not passed)
- Actions (bug fixes, follow-up checks)

### Exercise 3
Distinguish between constructive and analytical quality assurance.

**Solution:**
- **Constructive QA:** Measures during development (e.g., code reviews, standards, pair programming)
- **Analytical QA:** Measures after development (e.g., tests, static analysis, audits)

---

## Cross-References

- [06-06-02 Testing](../06-software/06-06-development-process/06-06-02-testing.md) - Test procedures in detail
- [02-01-01 Quality Concept](./02-01-fundamentals/02-01-01-quality-concept.md) - General quality definition
- [02-05 Accessibility](./02-05-accessibility.md) - Usability for everyone
