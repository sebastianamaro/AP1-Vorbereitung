# AI Code Assistants

**Note:** AI-powered tools are NEW in the 2025 exam catalog!

## Learning Objectives

After this chapter, you should be able to:
- Understand how AI code assistants work
- Know and distinguish popular tools
- Evaluate advantages and disadvantages
- Know responsible handling of AI code

---

## Core Content

### What are AI Code Assistants?

**AI code assistants** are tools that support developers in programming by suggesting, generating, explaining, or improving code.

```
┌─────────────────────────────────────────────────────────────────┐
│                    AI CODE ASSISTANT                            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Developer                                    AI Assistant     │
│   ┌─────────────────────────────────────────────────────────┐  │
│   │                                                         │  │
│   │  def calculate_tax(                                     │  │
│   │      _                   ←───────────────┐              │  │
│   │                                          │              │  │
│   │                          ┌───────────────┴────────────┐│  │
│   │                          │ Suggestion:                 ││  │
│   │                          │                             ││  │
│   │                          │ def calculate_tax(income):  ││  │
│   │                          │     if income <= 10000:     ││  │
│   │                          │         return 0            ││  │
│   │                          │     return income * 0.2     ││  │
│   │                          └─────────────────────────────┘│  │
│   │                                                         │  │
│   │  [Tab] to accept                                        │  │
│   │                                                         │  │
│   └─────────────────────────────────────────────────────────┘  │
│                                                                 │
│   AI analyzes:                                                  │
│   • Current context                                             │
│   • Project structure                                           │
│   • Comments and function names                                 │
│   • Common patterns                                             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Features of AI Code Assistants

| Feature | Description |
|---------|-------------|
| **Code completion** | Suggestions while typing |
| **Code generation** | Generate entire code from description |
| **Code explanation** | Explain existing code |
| **Refactoring** | Improvement suggestions |
| **Bug detection** | Identify potential errors |
| **Documentation** | Generate comments and docstrings |
| **Unit tests** | Generate test cases |
| **Code review** | Quality checking |

---

### Popular AI Code Assistants

| Tool | Provider | Special Feature |
|------|----------|-----------------|
| **GitHub Copilot** | GitHub/Microsoft | IDE integration, very popular |
| **Claude** | Anthropic | Longer contexts, code analysis |
| **ChatGPT** | OpenAI | Versatile, explains well |
| **Amazon CodeWhisperer** | AWS | AWS integration |
| **Tabnine** | Tabnine | Local execution possible |
| **Codeium** | Codeium | Free for private users |

---

### GitHub Copilot in Detail

```
┌────────────────────────────────────────────────────────────────┐
│                GITHUB COPILOT                                  │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Integration in:                                               │
│  • VS Code                                                     │
│  • Visual Studio                                               │
│  • JetBrains IDEs                                             │
│  • Neovim                                                      │
│                                                                │
│  Features:                                                     │
│  ┌────────────────────────────────────────────────────────┐   │
│  │ // Sort array ascending                                │   │
│  │ function sortArray(arr) {                              │   │
│  │     return arr.sort((a, b) => a - b);  ← Suggestion   │   │
│  │ }                                                       │   │
│  └────────────────────────────────────────────────────────┘   │
│                                                                │
│  Copilot Chat:                                                 │
│  ┌────────────────────────────────────────────────────────┐   │
│  │ User: "Explain this code"                              │   │
│  │ Copilot: "This function sorts an array..."            │   │
│  └────────────────────────────────────────────────────────┘   │
│                                                                │
│  Pricing (as of 2025):                                        │
│  • Individual: ~$10/month                                      │
│  • Business: ~$19/month                                        │
│  • Free for students and open-source maintainers              │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Advantages of AI Code Assistants

| Advantage | Description |
|-----------|-------------|
| **Productivity increase** | Faster development |
| **Less typing** | Boilerplate code is generated |
| **Learning support** | Learn new concepts and APIs |
| **Code quality** | Best practices are suggested |
| **Documentation** | Automatic comments |
| **Debugging** | Help with error fixing |

---

### Risks and Disadvantages

| Risk | Description |
|------|-------------|
| **Security vulnerabilities** | AI can suggest insecure code |
| **Wrong suggestions** | Code may contain bugs |
| **Copyright** | Trained on others' code |
| **Dependency** | Over-reliance |
| **Loss of understanding** | Adopting code without understanding |
| **Data privacy** | Code is sent to cloud |

---

### Best Practices for AI Code

```
┌────────────────────────────────────────────────────────────────┐
│          RESPONSIBLE HANDLING OF AI CODE                       │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  ✓ ALWAYS review and understand code                          │
│                                                                │
│  ✓ Especially review security-relevant code                   │
│                                                                │
│  ✓ Write tests for generated code                             │
│                                                                │
│  ✓ Consider copyright (especially for open source)            │
│                                                                │
│  ✓ Don't use sensitive data in prompts                        │
│                                                                │
│  ✓ Use as a tool, not as a replacement for knowledge          │
│                                                                │
│  ✗ Accept blindly                                              │
│                                                                │
│  ✗ Enter passwords or API keys in prompts                     │
│                                                                │
│  ✗ Accept security-critical code unchecked                    │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Typical Security Problems with AI Code

| Problem | Example |
|---------|---------|
| **SQL Injection** | Unfiltered user input |
| **Hardcoded Credentials** | Passwords in code |
| **Missing Validation** | Input not checked |
| **Outdated Libraries** | Insecure versions |
| **XSS** | Unsafe output |

**Important:** AI-generated code must be checked for security like any other code!

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Code Completion** | Automatic completion |
| **Prompt** | Instruction to the AI |
| **GitHub Copilot** | Popular AI code assistant |
| **LLM** | Large Language Model (basis of AI) |
| **Boilerplate** | Repetitive standard code |
| **Refactoring** | Improving code without changing function |

---

## Exam Tips

### Common Exam Questions

- What is an AI code assistant?
- Name advantages and risks
- How should you handle AI-generated code?

### Important to Remember

- **AI code assistants:** Support, but don't replace the developer
- **Advantages:** Productivity, less typing, learning aid
- **Risks:** Security vulnerabilities, copyright, blind trust
- **Best practice:** ALWAYS review and understand code!

---

## Practice Exercises

### Exercise 1
What is an AI code assistant and how does it support developers?

**Solution:** An **AI code assistant** is a tool that supports developers in programming. It uses artificial intelligence to:
- Suggest code while typing
- Generate code from natural language
- Explain existing code
- Make improvement suggestions
- Create documentation

Examples: GitHub Copilot, Claude, ChatGPT

### Exercise 2
Name two advantages and two risks when using AI code assistants.

**Solution:**

**Advantages:**
1. **Productivity increase:** Developers can program faster
2. **Learning support:** Learn new APIs and patterns

**Risks:**
1. **Security vulnerabilities:** AI can suggest insecure code
2. **Loss of understanding:** Developers adopt code without understanding it

### Exercise 3
A junior developer uses GitHub Copilot and accepts all suggestions without review. What is the problem and how should they proceed?

**Solution:**

**Problem:**
- Code may contain bugs or security vulnerabilities
- Copyright-problematic code possible
- Developer doesn't understand their own code
- No learning effect

**Better approach:**
1. Read and understand every suggestion
2. Check code for security issues
3. Write tests for generated code
4. Ask questions or read documentation when unclear
5. Use AI as a tool, not as a replacement for knowledge

---

## Cross-References

- [05-06-01 AI Fundamentals](./05-06-01-ai-fundamentals.md) - Basic knowledge
- [05-06-02 AI Applications](./05-06-02-ai-applications.md) - Other applications
- [06-06-02 Testing](../../06-software/06-06-development-process/06-06-02-testing.md) - Testing code
