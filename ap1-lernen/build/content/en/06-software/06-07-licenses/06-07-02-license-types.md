# License Types

## Learning Objectives

After this chapter, you should be able to:
- Know various software license models
- Distinguish proprietary and open-source licenses
- Know the most important open-source licenses
- Understand license obligations

---

## Core Content

### What is a Software License?

```
┌────────────────────────────────────────────────────────────────────┐
│                      SOFTWARE LICENSE                               │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Definition:                                                      │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ A license is a contract that regulates under which          │ │
│   │ conditions software may be used.                             │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   The license defines:                                              │
│   • WHO may use the software                                        │
│   • HOW the software may be used                                    │
│   • WHERE the software may be used                                  │
│   • Under which CONDITIONS                                          │
│                                                                     │
│   Basic distinction:                                                │
│                                                                     │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │                    LICENSE CATEGORIES                        │ │
│   │                                                              │ │
│   │     ┌────────────────┐        ┌────────────────┐           │ │
│   │     │  PROPRIETARY   │        │  OPEN SOURCE   │           │ │
│   │     │   (closed)     │        │    (open)      │           │ │
│   │     └───────┬────────┘        └───────┬────────┘           │ │
│   │             │                         │                     │ │
│   │     • Source code secret      • Source code open           │ │
│   │     • Usage restricted        • Usage allowed              │ │
│   │     • Paid (usually)          • Free (usually)             │ │
│   │     • No modifications        • Modifications allowed      │ │
│   │                                                              │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Proprietary Licenses

```
┌────────────────────────────────────────────────────────────────────┐
│                    PROPRIETARY LICENSES                            │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Characteristics:                                                  │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ • Source code NOT accessible                                │ │
│   │ • Software is delivered only as executable file             │ │
│   │ • Strict terms of use (EULA)                                │ │
│   │ • Modifications and redistribution prohibited               │ │
│   │ • Usually paid                                              │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   LICENSE MODELS                                                    │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │                                                             │  │
│   │ SINGLE USER LICENSE                                         │  │
│   │ ┌────────────────────────────────────────────────────────┐ │  │
│   │ │ • One user, one device                                 │ │  │
│   │ │ • Installation on ONE computer                         │ │  │
│   │ │ • Example: Microsoft Office Home                       │ │  │
│   │ └────────────────────────────────────────────────────────┘ │  │
│   │                                                             │  │
│   │ VOLUME LICENSE                                              │  │
│   │ ┌────────────────────────────────────────────────────────┐ │  │
│   │ │ • Multiple installations/users                         │ │  │
│   │ │ • Discounts for larger quantities                      │ │  │
│   │ │ • Central management possible                          │ │  │
│   │ │ • Example: Microsoft Volume Licensing                  │ │  │
│   │ └────────────────────────────────────────────────────────┘ │  │
│   │                                                             │  │
│   │ CONCURRENT/FLOATING LICENSE                                 │  │
│   │ ┌────────────────────────────────────────────────────────┐ │  │
│   │ │ • Limited number of concurrent users                   │ │  │
│   │ │ • More installations than licenses possible            │ │  │
│   │ │ • License server manages access                        │ │  │
│   │ │ • Example: AutoCAD Network License                     │ │  │
│   │ └────────────────────────────────────────────────────────┘ │  │
│   │                                                             │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

```
┌────────────────────────────────────────────────────────────────────┐
│              PROPRIETARY LICENSE MODELS (Continued)                │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   SUBSCRIPTION                                                      │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Temporary usage                                          │  │
│   │ • Regular payment (monthly/yearly)                         │  │
│   │ • Always current version                                   │  │
│   │ • Software-as-a-Service (SaaS)                             │  │
│   │ • Example: Microsoft 365, Adobe Creative Cloud             │  │
│   │                                                             │  │
│   │    ┌─────┬─────┬─────┬─────┬─────┐                        │  │
│   │    │ Jan │ Feb │ Mar │ Apr │ ... │  → Ongoing payment     │  │
│   │    │  €  │  €  │  €  │  €  │  €  │                        │  │
│   │    └─────┴─────┴─────┴─────┴─────┘                        │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   OEM LICENSE (Original Equipment Manufacturer)                    │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Tied to hardware                                         │  │
│   │ • Only sold together with device                           │  │
│   │ • Not transferable                                         │  │
│   │ • Cheaper than retail version                              │  │
│   │ • Example: Windows pre-installed on laptop                 │  │
│   │                                                             │  │
│   │    ┌─────────────┐                                         │  │
│   │    │   Laptop    │ ← Windows OEM license is TIED to this  │  │
│   │    │  + Windows  │    laptop, not transferable             │  │
│   │    └─────────────┘                                         │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   RETAIL LICENSE                                                   │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Bought at retail                                         │  │
│   │ • Transferable to new computer                             │  │
│   │ • More expensive than OEM                                  │  │
│   │ • Often includes physical media                            │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Open-Source Licenses

```
┌────────────────────────────────────────────────────────────────────┐
│                    OPEN-SOURCE LICENSES                            │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Core principles:                                                  │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ ✓ Source code is freely available                           │ │
│   │ ✓ Software may be modified                                  │ │
│   │ ✓ Software may be redistributed                             │ │
│   │ ✓ No discrimination against persons/groups                  │ │
│   │ ✓ No restriction on type of use                             │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   IMPORTANT: Open Source ≠ Public Domain!                          │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ Open Source has license conditions that MUST be             │ │
│   │ complied with!                                               │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   Two main categories:                                              │
│                                                                     │
│   ┌────────────────────────┐    ┌────────────────────────┐        │
│   │     COPYLEFT           │    │    PERMISSIVE          │        │
│   │    (strict)            │    │    (liberal)           │        │
│   ├────────────────────────┤    ├────────────────────────┤        │
│   │ • Modifications must   │    │ • Modifications may    │        │
│   │   be under the same    │    │   also be proprietary  │        │
│   │   license              │    │                        │        │
│   │ • "Viral" - license    │    │ • Maximum freedom      │        │
│   │   propagates           │    │   for usage            │        │
│   │                        │    │                        │        │
│   │ Examples:              │    │ Examples:              │        │
│   │ • GPL                  │    │ • MIT                  │        │
│   │ • AGPL                 │    │ • Apache 2.0           │        │
│   │ • LGPL                 │    │ • BSD                  │        │
│   └────────────────────────┘    └────────────────────────┘        │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Important Open-Source Licenses

```
┌────────────────────────────────────────────────────────────────────┐
│                 IMPORTANT OPEN-SOURCE LICENSES                     │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   GPL (GNU General Public License)                                 │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Type: Copyleft (strict)                                    │  │
│   │                                                             │  │
│   │ Main characteristics:                                       │  │
│   │ • Source code must be available                             │  │
│   │ • Derived works must ALSO be GPL                            │  │
│   │ • License "propagates" (viral)                              │  │
│   │ • Commercial use allowed                                    │  │
│   │                                                             │  │
│   │ Examples: Linux kernel, WordPress, MySQL                    │  │
│   │                                                             │  │
│   │ ⚠ Caution in companies: Your own software could            │  │
│   │   also have to be under GPL!                                │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   LGPL (Lesser GPL)                                                │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Type: Copyleft (weaker)                                    │  │
│   │                                                             │  │
│   │ Main characteristics:                                       │  │
│   │ • Like GPL, but designed for libraries                      │  │
│   │ • Linking with proprietary code allowed                     │  │
│   │ • Only changes to the library must be LGPL                  │  │
│   │                                                             │  │
│   │ Examples: glibc, Qt (partially)                             │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

```
┌────────────────────────────────────────────────────────────────────┐
│            IMPORTANT OPEN-SOURCE LICENSES (Continued)              │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   MIT LICENSE                                                       │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Type: Permissive (very liberal)                            │  │
│   │                                                             │  │
│   │ Main characteristics:                                       │  │
│   │ • Very short, simple license                                │  │
│   │ • Almost no restrictions                                    │  │
│   │ • May be used in proprietary software                       │  │
│   │ • Only condition: Keep copyright notice                     │  │
│   │                                                             │  │
│   │ Examples: jQuery, React, Node.js                            │  │
│   │                                                             │  │
│   │ → Often the "safest" choice for companies                  │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   APACHE LICENSE 2.0                                               │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Type: Permissive                                           │  │
│   │                                                             │  │
│   │ Main characteristics:                                       │  │
│   │ • Similar to MIT, but more detailed                         │  │
│   │ • Explicit patent license included                          │  │
│   │ • Changes must be documented                                │  │
│   │ • Proprietary use allowed                                   │  │
│   │                                                             │  │
│   │ Examples: Android, Apache HTTP Server, Kubernetes           │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   BSD LICENSE                                                       │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Type: Permissive                                           │  │
│   │                                                             │  │
│   │ Main characteristics:                                       │  │
│   │ • Very liberal, similar to MIT                              │  │
│   │ • Various variants (2-Clause, 3-Clause)                     │  │
│   │ • Can be used in proprietary software                       │  │
│   │                                                             │  │
│   │ Examples: FreeBSD, macOS (parts), PostgreSQL               │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### License Comparison

```
┌────────────────────────────────────────────────────────────────────┐
│                      LICENSE COMPARISON                            │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   License     │ Source   │ Modify  │ Propri-  │ Patent  │ Copyleft│
│               │ open     │ allowed │ etary OK │ protect │         │
│   ────────────┼──────────┼─────────┼──────────┼─────────┼─────────│
│   Proprietary │    ✗     │    ✗    │   n/a    │   n/a   │   ✗     │
│   GPL         │    ✓     │    ✓    │    ✗     │   ✗     │   ✓     │
│   LGPL        │    ✓     │    ✓    │  (✓)*    │   ✗     │  (✓)*   │
│   MIT         │    ✓     │    ✓    │    ✓     │   ✗     │   ✗     │
│   Apache 2.0  │    ✓     │    ✓    │    ✓     │   ✓     │   ✗     │
│   BSD         │    ✓     │    ✓    │    ✓     │   ✗     │   ✗     │
│                                                                     │
│   * LGPL: Only with linking, not with direct embedding             │
│                                                                     │
│   Recommended for companies:                                        │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ MIT / Apache / BSD → Low legal risk                         │ │
│   │ GPL → Use with caution (mind license propagation)           │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Additional License Concepts

```
┌────────────────────────────────────────────────────────────────────┐
│                   ADDITIONAL LICENSE CONCEPTS                      │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   FREEWARE                                                         │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Free to use                                              │  │
│   │ • But NOT Open Source (source code not available)          │  │
│   │ • No modifications allowed                                 │  │
│   │ • Example: Adobe Reader, WhatsApp                          │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   SHAREWARE                                                        │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Free to test (trial version)                             │  │
│   │ • Limited features or time-limited                         │  │
│   │ • Full version is paid                                     │  │
│   │ • Example: WinRAR                                          │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   PUBLIC DOMAIN                                                    │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • No more copyright                                        │  │
│   │ • Completely free to use                                   │  │
│   │ • No conditions, no restrictions                           │  │
│   │ • Difficult to achieve in Germany                          │  │
│   │ • Alternative: CC0 (Creative Commons Zero)                 │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   CREATIVE COMMONS (CC)                                            │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Mainly for content (texts, images, music)                │  │
│   │ • Various combinations:                                     │  │
│   │   - BY: Attribution required                               │  │
│   │   - NC: No commercial use                                  │  │
│   │   - ND: No derivatives                                     │  │
│   │   - SA: Share Alike (same license)                         │  │
│   │ • Example: CC BY-SA (like Wikipedia)                       │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Proprietary** | Closed, commercial license |
| **Open Source** | Source code open, certain freedoms |
| **Copyleft** | Modifications must be under same license |
| **Permissive** | Few restrictions, liberal |
| **EULA** | End User License Agreement |
| **OEM** | Original Equipment Manufacturer |
| **Freeware** | Free, but not Open Source |
| **Public Domain** | No copyright, freely usable |

---

## Exam Tips

### Common Exam Questions

- What is the difference between GPL and MIT?
- What does Copyleft mean?
- Distinguish Freeware from Open Source

### Important to Remember

- **Open Source ≠ free ≠ Public Domain**
- **GPL:** Copyleft, modifications must also be GPL
- **MIT:** Permissive, may be used in proprietary software
- **OEM license:** Tied to hardware
- **Freeware:** Free, but NO source code
- GPL code in your own product: Your own product becomes GPL too!

---

## Practice Exercises

### Exercise 1
A company wants to embed a JavaScript library into its commercial software. The library is under GPL. What must be considered?

**Solution:**
If GPL code is embedded, the entire software must also be placed under GPL. This means:
- The source code of the commercial software would have to be published
- The software would have to be freely redistributable

**Recommendation:** Use an alternative library with MIT or Apache license, or acquire a commercial license for the library (if available).

### Exercise 2
What is the difference between Freeware and Open Source?

**Solution:**
| Freeware | Open Source |
|----------|-------------|
| Free to use | Free to use (usually) |
| Source code NOT available | Source code AVAILABLE |
| No modifications allowed | Modifications allowed |
| Example: Adobe Reader | Example: Firefox |

### Exercise 3
An employee wants to download software from a website. It is labeled as "Public Domain". What does that mean?

**Solution:**
**Public Domain** means that the software is in the public domain:
- No copyright protection anymore
- Can be freely used, modified, and redistributed
- No license fees, no conditions
- Can also be used in commercial products

**Caution:** Verify the label - not every claim is correct. In Germany, waiving copyright is problematic.

---

## Cross-References

- [06-07-01 Copyright](./06-07-01-copyright.md) - Legal basics
- [08-04-01 Contract Types](../../08-business-processes/08-04-contract-law/08-04-01-contract-types.md) - License contracts
- [06-01-01 Software Types](../06-01-fundamentals/06-01-01-software-types.md) - Software categories
