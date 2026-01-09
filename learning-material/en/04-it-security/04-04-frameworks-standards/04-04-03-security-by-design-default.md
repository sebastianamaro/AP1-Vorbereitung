# Security by Design and Security by Default

## Learning Objectives

After this chapter, you should be able to:
- Explain the concepts "Security by Design" and "Security by Default"
- Know the difference between both concepts
- Provide practical examples
- Understand the connection to Privacy by Design

---

## Core Content

### Security by Design

**Security by Design** means that security is integrated into the development and planning process from the very beginning - not added later.

```
+------------------------------------------------------------------+
|                  SECURITY BY DESIGN                               |
+------------------------------------------------------------------+
|                                                                   |
|  TRADITIONAL APPROACH               SECURITY BY DESIGN            |
|  +----------------------+          +----------------------+       |
|  |                      |          |                      |       |
|  |  1. Development      |          |  1. Security         |       |
|  |     v                |          |     requirements     |       |
|  |  2. Testing          |          |        v             |       |
|  |     v                |          |  2. Secure archit.   |       |
|  |  3. Add security     |          |        v             |       |
|  |     afterwards       |          |  3. Secure dev.      |       |
|  |                      |          |        v             |       |
|  |  Warning: Expensive, |          |  4. Security test    |       |
|  |  incomplete          |          |        v             |       |
|  |                      |          |  5. Deployment       |       |
|  +----------------------+          |                      |       |
|                                    |  Checkmark: Secure   |       |
|                                    |  from the start      |       |
|                                    +----------------------+       |
|                                                                   |
+------------------------------------------------------------------+
```

#### Basic Principles

| Principle | Description |
|-----------|-------------|
| **Early Integration** | Consider security from the beginning |
| **Risk-based** | Identify threats early |
| **Defense in Depth** | Multiple security layers |
| **Least Privilege** | Minimal permissions |
| **Fail Secure** | Switch to secure state on errors |

---

### Security by Default

**Security by Default** means that a system is already secure in its default configuration - without the user having to change settings.

```
+------------------------------------------------------------------+
|                  SECURITY BY DEFAULT                              |
+------------------------------------------------------------------+
|                                                                   |
|  WITHOUT Security by Default       WITH Security by Default       |
|  +----------------------+         +----------------------+        |
|  |                      |         |                      |        |
|  |  Default password:   |         |  Password required   |        |
|  |  "admin"             |         |  at first setup      |        |
|  |                      |         |                      |        |
|  |  All ports open      |         |  Only necessary      |        |
|  |                      |         |  ports open          |        |
|  |  Encryption          |         |  Encryption          |        |
|  |  disabled            |         |  enabled by default  |        |
|  |                      |         |                      |        |
|  |  Warning: Insecure   |         |  Checkmark: Secure   |        |
|  |                      |         |  out of the box      |        |
|  +----------------------+         +----------------------+        |
|                                                                   |
+------------------------------------------------------------------+
```

#### Examples of Security by Default

| Area | Insecure Default | Secure Default |
|------|------------------|----------------|
| **Password** | Default password "admin" | Password must be set at first setup |
| **Ports** | All ports open | Only necessary ports open |
| **Services** | All services active | Only necessary services active |
| **Encryption** | HTTP | HTTPS |
| **Firewall** | Disabled | Enabled |
| **Updates** | Manual | Automatic |

---

### Comparison: Security by Design vs. Security by Default

| Aspect | Security by Design | Security by Default |
|--------|-------------------|---------------------|
| **Timing** | During development | At delivery |
| **Focus** | Development process | Configuration |
| **Goal** | Secure architecture | Secure default settings |
| **Example** | No SQL injection possible | Firewall enabled by default |

**Both concepts complement each other!**

---

### Privacy by Design

**Privacy by Design** is the data protection equivalent of Security by Design:

| Concept | Focus |
|---------|-------|
| **Security by Design** | IT security from the beginning |
| **Privacy by Design** | Data protection from the beginning |

Privacy by Design is enshrined in **Art. 25 GDPR** and requires:
- Data protection through technology design
- Privacy-friendly default settings

---

### Practical Implementation

#### Security by Design in Software Development

```
+------------------------------------------------------------------+
|          SECURITY BY DESIGN IN THE SDLC                           |
+------------------------------------------------------------------+
|                                                                   |
|  REQUIREMENTS --> DESIGN --> DEVELOPMENT --> TEST --> DEPLOY      |
|       |              |              |           |         |       |
|       v              v              v           v         v       |
|  +-----------+  +-----------+  +-----------+ +---------+ +-----+  |
|  |Security   |  |Secure     |  |Secure     | |Penetra- | |Secure| |
|  |require-   |  |Archi-     |  |Coding     | |tion     | |Deploy| |
|  |ments      |  |tecture    |  |Practices  | |tests    | |ment  | |
|  +-----------+  +-----------+  +-----------+ +---------+ +-----+  |
|                                                                   |
+------------------------------------------------------------------+
```

| Phase | Security Activity |
|-------|-------------------|
| **Requirements** | Define security requirements |
| **Design** | Threat modeling, secure architecture |
| **Development** | Secure coding, code reviews |
| **Test** | Security tests, penetration tests |
| **Deployment** | Secure configuration, hardening |

#### Security by Default - Checklist

| Area | Standard Recommendation |
|------|-------------------------|
| **Authentication** | Enforce strong passwords, recommend 2FA |
| **Encryption** | Enable TLS/HTTPS by default |
| **Permissions** | Minimal rights as default |
| **Services** | Enable only necessary services |
| **Logging** | Log security-relevant events |
| **Updates** | Enable automatic updates |

---

### Advantages of These Approaches

| Advantage | Description |
|-----------|-------------|
| **Cost Savings** | Early error correction is cheaper |
| **Fewer Security Vulnerabilities** | Systematic consideration |
| **Compliance** | Meeting legal requirements (GDPR) |
| **Trust** | Secure products strengthen customer trust |
| **Less Rework** | No subsequent patches needed |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Security by Design** | Security from the beginning in development |
| **Security by Default** | Secure default configuration |
| **Privacy by Design** | Data protection from the beginning (Art. 25 GDPR) |
| **Defense in Depth** | Multi-layered security |
| **Fail Secure** | Switch to secure state on error |
| **Least Privilege** | Minimal permissions |

---

## Exam Tips

### Frequent Exam Questions

- What does "Security by Design" mean?
- What is the difference between "Security by Design" and "Security by Default"?
- Give examples of "Security by Default"
- What is "Privacy by Design"?

### Important to Remember

- **Security by Design** = Security during development
- **Security by Default** = Secure default configuration
- **Privacy by Design** = Art. 25 GDPR
- Both concepts **complement each other**

---

## Practice Exercises

### Exercise 1
What does "Security by Design" mean?

**Solution:** "Security by Design" means that security aspects are integrated into the development and planning process from the very beginning. Instead of adding security afterwards, it is considered from the first planning phase. This leads to secure systems and avoids costly subsequent corrections.

### Exercise 2
Give three examples of "Security by Default".

**Solution:**
1. **Password:** User must set a strong password at first setup (no default password)
2. **Firewall:** Firewall is enabled by default
3. **Encryption:** HTTPS is standard, not HTTP

(Others: Automatic updates enabled, only necessary ports open, minimal permissions)

### Exercise 3
What is the connection between Security by Design and Privacy by Design?

**Solution:** Both concepts follow the same approach - integration from the beginning:
- **Security by Design:** IT security is integrated into development from the start
- **Privacy by Design:** Data protection is integrated into development from the start

Privacy by Design is legally enshrined in Art. 25 GDPR and requires "data protection through technology design" and "privacy-friendly default settings".

### Exercise 4
Why is Security by Design more cost-effective than subsequent security measures?

**Solution:** Security by Design is more cost-effective because:
1. Errors can be detected and fixed early (the later, the more expensive)
2. No architecture changes are necessary
3. Fewer security vulnerabilities in the finished product
4. Fewer emergency patches after release
5. Less effort for rework

---

## Cross-References

- [04-03-03 OS Hardening](../04-03-protective-measures/04-03-03-os-hardening.md) - Secure configuration
- [04-04-02 ISMS](./04-04-02-isms.md) - Systematic security
- [03-01-01 GDPR Principles](../../03-data-protection/03-01-fundamentals/03-01-01-gdpr-principles.md) - Privacy by Design (Art. 25)
- [06-06-01 SDLC](../../06-software/06-06-development-process/06-06-01-sdlc.md) - Software development process
