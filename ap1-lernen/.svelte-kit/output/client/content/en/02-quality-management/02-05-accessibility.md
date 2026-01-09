# Accessibility in IT

## Learning Objectives

After this chapter you should be able to:
- Define accessibility in the IT sector
- Know the legal foundations (EU Directive, BITV 2.0)
- Describe measures for accessible IT
- Know the WCAG guidelines

---

## Core Content

### What is Accessibility?

**Accessibility** means that IT systems, websites, and applications are designed so that they can be used by **all people** - regardless of physical or mental limitations.

> **Definition:** Accessible information technology enables people with disabilities to use digital offerings without restrictions.

---

### Why is Accessibility Important?

| Reason | Explanation |
|--------|-------------|
| **Inclusion** | Participation of all people in the digital world |
| **Legal Requirement** | Legal requirements must be met |
| **Target Group** | Approximately 10% of the population has limitations |
| **User-Friendliness** | Improves usability for all users |
| **Economic** | Larger customer base |

---

### Legal Foundations

#### EU Directive 2016/2102

The EU Directive on the accessibility of websites and mobile applications of public sector bodies:

- Applies to public institutions
- Requires accessibility of web presences
- Refers to WCAG 2.1

#### BITV 2.0

The **Barrierefreie-Informationstechnik-Verordnung** (Accessible Information Technology Ordinance - BITV 2.0) is the German implementation:

| Aspect | Details |
|--------|---------|
| **Scope** | Federal authorities and public bodies |
| **Reference Standard** | WCAG 2.1 Level AA |
| **Requirements** | Perceivability, operability, understandability, robustness |
| **Monitoring** | Regular review required |

---

### WCAG Guidelines

The **Web Content Accessibility Guidelines (WCAG)** are international standards for accessible web content.

#### The Four Principles (POUR)

```
┌─────────────────────────────────────────────────────────────────┐
│                    WCAG - POUR Principles                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │           P - PERCEIVABLE                               │   │
│  │   Content must be presented in perceivable ways         │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │           O - OPERABLE                                  │   │
│  │   User interface must be operable                       │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │           U - UNDERSTANDABLE                            │   │
│  │   Information and operation must be understandable      │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │           R - ROBUST                                    │   │
│  │   Content must be interpretable by                      │   │
│  │   assistive technologies                                │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### WCAG Conformance Levels

| Level | Description |
|-------|-------------|
| **A** | Minimum accessibility |
| **AA** | Standard (required by BITV 2.0) |
| **AAA** | Highest accessibility |

---

### Measures for Accessible IT

#### For Websites

| Area | Measure |
|------|---------|
| **Images** | Alternative texts (alt attributes) for screen readers |
| **Contrast** | Sufficient color contrast (min. 4.5:1) |
| **Font** | Scalable font sizes (no fixed pixel values) |
| **Navigation** | Keyboard navigation possible |
| **Forms** | Labeled input fields (labels) |
| **Videos** | Subtitles and audio description |
| **Structure** | Semantic HTML (headings h1-h6) |

#### Example: Accessible Website

```html
<!-- CORRECT: Accessible image -->
<img src="product.jpg" alt="Black laptop with 15-inch display">

<!-- INCORRECT: Not accessible -->
<img src="product.jpg">

<!-- CORRECT: Labeled form field -->
<label for="email">Email address:</label>
<input type="email" id="email" name="email">

<!-- CORRECT: Semantic heading structure -->
<h1>Main heading</h1>
  <h2>Subchapter</h2>
    <h3>Section</h3>
```

---

### Assistive Technologies

| Technology | User Group | Function |
|------------|------------|----------|
| **Screen Reader** | Visually impaired | Reads screen content aloud |
| **Screen Magnifier** | Visually impaired | Enlarges screen sections |
| **Braille Display** | Blind | Outputs text in Braille |
| **Voice Control** | Motor impaired | Operation by voice |
| **Special Keyboards** | Motor impaired | Adapted input devices |

---

### Accessibility in Software

| Aspect | Measure |
|--------|---------|
| **Color Contrast** | High contrast between text and background |
| **Font Size** | Adjustable font size |
| **Keyboard Control** | All functions accessible via keyboard |
| **Error Messages** | Clearly and understandably formulated |
| **Time Limits** | Sufficient time or can be turned off |
| **Animations** | Can be paused or deactivated |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Accessibility** | Usability of IT for all people |
| **WCAG** | Web Content Accessibility Guidelines |
| **BITV 2.0** | Accessible Information Technology Ordinance (German) |
| **Screen Reader** | Software for reading screen content aloud |
| **Alt Text** | Alternative text for images |
| **POUR** | Perceivable, Operable, Understandable, Robust |

---

## Exam Tips

### Common Exam Questions
- What is meant by accessibility in IT?
- What does BITV 2.0 regulate?
- Name measures for accessible websites

### Important for the Exam
- Know the four POUR principles
- Alt texts as an important measure
- BITV 2.0 as German ordinance

---

## Practice Exercises

### Exercise 1
How is accessibility defined in the IT sector?

**Solution:** Accessibility means that IT systems, websites, and applications are designed so that they can be used by all people - regardless of physical or mental limitations.

### Exercise 2
Describe BITV 2.0.

**Solution:** The Accessible Information Technology Ordinance (BITV 2.0) is the German implementation of EU Directive 2016/2102. It requires federal authorities and public bodies to comply with WCAG 2.1 Level AA for their digital offerings.

### Exercise 3
Name three concrete measures for an accessible website.

**Solution:**
1. **Alternative texts** for images (alt attributes) for screen readers
2. **Sufficient color contrast** between text and background
3. **Keyboard navigation** - all functions must be accessible via keyboard
(or: scalable font sizes, semantic HTML structure, subtitles for videos)

### Exercise 4
What does the abbreviation POUR stand for in the WCAG guidelines?

**Solution:**
- **P** = Perceivable
- **O** = Operable
- **U** = Understandable
- **R** = Robust

---

## Cross-References

- [02-04 Software Quality](./02-04-software-quality.md) - Usability as a quality characteristic
- [06-05-01 HTML-XML](../06-software/06-05-web-development/06-05-01-html-xml.md) - Semantic HTML
- [05-06-04 EU AI Act](../05-it-systems/05-06-artificial-intelligence/05-06-04-eu-ai-act.md) - EU regulations
