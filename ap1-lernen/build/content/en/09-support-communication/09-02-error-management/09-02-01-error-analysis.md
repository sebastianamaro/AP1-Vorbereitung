# Error Analysis in IT Support

## Learning Objectives

After this section, you will be able to:
- Conduct systematic error analysis
- Apply the 5-Why method
- Create Ishikawa diagrams
- Distinguish causes from symptoms

---

## Core Content

### Fundamentals of Error Analysis

```
┌─────────────────────────────────────────────────────────────────────┐
│           ERROR ANALYSIS                                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  GOAL:                                                              │
│  → Not just fix symptoms, but find CAUSES                           │
│  → Prevent recurring errors                                         │
│  → Develop sustainable solutions                                    │
│                                                                      │
│  SYMPTOM vs. CAUSE                                                  │
│  ──────────────────────────────────────────────────────────────     │
│                                                                      │
│  Symptom: "The PC is slow"                                          │
│     │                                                               │
│     ├── Cause 1: Hard drive full                                    │
│     ├── Cause 2: Malware                                            │
│     ├── Cause 3: Defective RAM                                      │
│     └── Cause 4: Too many startup programs                          │
│                                                                      │
│  IMPORTANT:                                                         │
│  → Symptom treatment = temporary solution                           │
│  → Cause treatment = permanent solution                             │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Systematic Approach

```
┌─────────────────────────────────────────────────────────────────────┐
│           SYSTEMATIC ERROR ANALYSIS                                 │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌─────────────────┐                                                │
│  │ 1. DEFINE       │  → What exactly is the problem?                │
│  │    PROBLEM      │  → When did it occur?                          │
│  └────────┬────────┘  → Who is affected?                            │
│           │                                                         │
│           ▼                                                         │
│  ┌─────────────────┐                                                │
│  │ 2. GATHER       │  → Document error messages                     │
│  │    INFORMATION  │  → Check logs                                  │
│  └────────┬────────┘  → Ask user (What did you do?)                 │
│           │                                                         │
│           ▼                                                         │
│  ┌─────────────────┐                                                │
│  │ 3. FORM         │  → List possible causes                        │
│  │    HYPOTHESES   │  → Estimate probability                        │
│  └────────┬────────┘  → Prioritize by effort                        │
│           │                                                         │
│           ▼                                                         │
│  ┌─────────────────┐                                                │
│  │ 4. TEST         │  → Check hypotheses individually               │
│  │                 │  → Change only ONE variable at a time          │
│  └────────┬────────┘  → Document results                            │
│           │                                                         │
│           ▼                                                         │
│  ┌─────────────────┐                                                │
│  │ 5. IMPLEMENT    │  → Fix cause                                   │
│  │    SOLUTION     │  → Verify success                              │
│  └────────┬────────┘  → Document                                    │
│           │                                                         │
│           ▼                                                         │
│  ┌─────────────────┐                                                │
│  │ 6. FOLLOW-UP    │  → Update knowledge base                       │
│  │                 │  → Consider preventive measures                │
│  └─────────────────┘                                                │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### The 5-Why Method

```
┌─────────────────────────────────────────────────────────────────────┐
│           5-WHY METHOD                                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  PRINCIPLE: Ask "Why?" 5 times to get to the root cause             │
│                                                                      │
│  EXAMPLE: Server crashed                                            │
│  ──────────────────────────────────────────────────────────────     │
│                                                                      │
│  Problem: The server crashed                                        │
│                                                                      │
│  1. WHY did the server crash?                                       │
│     → The hard drive was full                                       │
│                                                                      │
│  2. WHY was the hard drive full?                                    │
│     → The log files were too large                                  │
│                                                                      │
│  3. WHY were the log files too large?                               │
│     → Automatic log rotation was disabled                           │
│                                                                      │
│  4. WHY was log rotation disabled?                                  │
│     → It wasn't reconfigured after the last update                  │
│                                                                      │
│  5. WHY wasn't it reconfigured?                                     │
│     → There was no checklist for updates                            │
│                                                                      │
│  ROOT CAUSE: Missing update process                                 │
│  ACTION: Create checklist for server updates                        │
│                                                                      │
│  IMPORTANT:                                                         │
│  → Doesn't always have to be exactly 5 times                        │
│  → Stop when real cause is found                                    │
│  → Don't stop at superficial answers                                │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Ishikawa Diagram (Fishbone Diagram)

```
┌─────────────────────────────────────────────────────────────────────┐
│           ISHIKAWA DIAGRAM                                          │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Also known as: Fishbone diagram, Cause-and-effect diagram          │
│                                                                      │
│  STRUCTURE:                                                         │
│                                                                      │
│       MAN             MACHINE         METHOD                        │
│          │               │               │                          │
│          │   ┌───────────┼───────────┐   │                          │
│          │   │           │           │   │                          │
│          ▼   ▼           ▼           ▼   ▼                          │
│       ───────────────────────────────────────►  PROBLEM             │
│          ▲   ▲           ▲           ▲   ▲                          │
│          │   │           │           │   │                          │
│          │   └───────────┼───────────┘   │                          │
│          │               │               │                          │
│       MATERIAL        MILIEU         MEASUREMENT                    │
│                                                                      │
│  THE 6 M's (typical categories):                                    │
│  ──────────────────────────────────────────────────────────────     │
│  → Man: Errors by employees, training, experience                   │
│  → Machine: Hardware, software, systems                             │
│  → Method: Processes, procedures, instructions                      │
│  → Material: Input data, resources                                  │
│  → Milieu: Environment, network, infrastructure                     │
│  → Measurement: Monitoring, surveillance, metrics                   │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Ishikawa Example: Email Outage

```
┌─────────────────────────────────────────────────────────────────────┐
│           ISHIKAWA: EMAIL NOT WORKING                               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│       MAN                MACHINE            METHOD                  │
│       - Password         - Server           - Wrong                 │
│         wrong              defective          IMAP port             │
│       - Configuration    - Client           - SSL not               │
│         changed            outdated           enabled               │
│          │                   │                   │                  │
│          │                   │                   │                  │
│          ▼                   ▼                   ▼                  │
│       ────────────────────────────────────────────►  Email          │
│          ▲                   ▲                   ▲     not          │
│          │                   │                   │     working      │
│          │                   │                   │                  │
│       - DNS entries       - Firewall         - No                   │
│         wrong               blocking           monitoring           │
│       - Spam filter       - Network          - Certificate          │
│         blocks              down               expired              │
│       MATERIAL            MILIEU             MEASUREMENT            │
│                                                                      │
│  PROCEDURE:                                                         │
│  1. Gather all possible causes (brainstorming)                      │
│  2. Categorize into 6 M's                                           │
│  3. Check most likely first                                         │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Elimination Method

```
┌─────────────────────────────────────────────────────────────────────┐
│           ELIMINATION METHOD                                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  PRINCIPLE: Rule out simplest/most common causes first              │
│                                                                      │
│  EXAMPLE: "Internet not working"                                    │
│  ──────────────────────────────────────────────────────────────     │
│                                                                      │
│  □ 1. Cable plugged in?                    [✓ YES → continue]       │
│  □ 2. WiFi enabled?                        [✓ YES → continue]       │
│  □ 3. Router reachable (ping)?             [✗ NO → check router]    │
│      │                                                              │
│      └─► 3a. Router restarted?             [✓ YES → continue]       │
│          3b. Router LEDs OK?               [✗ NO → power cable]     │
│                                                                      │
│  ORDER (rule of thumb):                                             │
│  ──────────────────────────────────────────────────────────────     │
│  1. Simple physical checks (cables, power)                          │
│  2. Restart (user PC, then router/server)                           │
│  3. Check configuration                                             │
│  4. Analyze logs                                                    │
│  5. Deeper diagnosis                                                │
│                                                                      │
│  TIP: "Have you tried turning it off and on again?"                 │
│       → Solves more problems than you'd think!                      │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Documenting Error Analysis

| What to Document | Why Important |
|------------------|---------------|
| **Symptom** | Clearly describe starting point |
| **Check Steps** | Traceable for colleagues |
| **Test Results** | What was ruled out? |
| **Found Cause** | For knowledge base |
| **Solution** | Reusable |
| **Preventive Measure** | Avoid recurrence |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Symptom** | Visible effect of a problem |
| **Cause** | Actual reason for the problem |
| **Root Cause** | Fundamental, original cause |
| **5-Why Method** | Asking "Why?" 5 times |
| **Ishikawa Diagram** | Cause-and-effect diagram |
| **Elimination Method** | Systematic ruling out of possibilities |

---

## Exam Tips

1. **5-Why Method:**
   - Often asked in exams
   - Know how to apply practically
   - Keep asking until real cause found

2. **Ishikawa:**
   - Know the 6 M's
   - Be able to draw the diagram
   - Collect causes systematically

3. **Typical exam questions:**
   - "Analyze the error using the 5-Why method"
   - "Create an Ishikawa diagram"

---

## Practice Exercises

### Exercise 1: Apply 5-Why

Analyze the following error using the 5-Why method:

**Problem:** An employee cannot open their presentation.

<details>
<summary>Show Solution</summary>

**5-Why Analysis:**

1. **WHY can't the presentation be opened?**
   → The file is corrupted

2. **WHY is the file corrupted?**
   → The PC was shut down during saving

3. **WHY was the PC shut down during saving?**
   → The battery was empty and the power adapter wasn't connected

4. **WHY wasn't the power adapter connected?**
   → The employee is working in a meeting room without a power outlet

5. **WHY is there no power outlet in the meeting room?**
   → Mobile workplaces weren't considered during planning

**Root Cause:** Missing infrastructure for mobile working

**Measures:**
- Short-term: Power strips/extension cords
- Long-term: Equip meeting rooms with power outlets
- Training: Save regularly, pay attention to battery status

</details>

### Exercise 2: Create Ishikawa Diagram

Create an Ishikawa diagram for the following problem:

**"Printer doesn't print"**

<details>
<summary>Show Solution</summary>

**Ishikawa Diagram: Printer doesn't print**

```
       MAN                 MACHINE            METHOD
       - Wrong             - Printer          - Print job
         printer             offline            incorrectly
         selected          - Paper jam          configured
       - No                - Toner empty      - Wrong
         permission        - Printer             paper format
       - Operating           driver              selected
         error               outdated
          │                   │                   │
          │                   │                   │
          ▼                   ▼                   ▼
       ────────────────────────────────────────────►  Printer
          ▲                   ▲                   ▲     doesn't
          │                   │                   │     print
          │                   │                   │
       - USB cable          - Firewall         - No
         defective            blocking           monitoring
       - Wrong              - Print            - Queue
         paper                server             not checked
       - No paper             down
         loaded             - WiFi
       MATERIAL               problem
                           MILIEU             MEASUREMENT
```

</details>

### Exercise 3: Systematic Analysis

A user reports: "My emails aren't arriving anymore."

List 5 check steps in the correct order.

<details>
<summary>Show Solution</summary>

**Systematic Check Steps:**

1. **Simplest check first:**
   - Is there an internet connection?
   - Is the email program open and correctly configured?

2. **Check account:**
   - Is the password still valid?
   - Is the account not locked?
   - Is the mailbox not full?

3. **Check spam/filters:**
   - Are the emails in the spam folder?
   - Are there active rules/filters moving emails?

4. **Check server status:**
   - Is the email server reachable?
   - Are there known outages?

5. **Detailed analysis:**
   - Check logs (server-side)
   - Send test message
   - Check DNS entries (MX records)

</details>

---

## Cross-References

- [Incident Management](09-02-02-incident-management.md) - Incident Handling
- [Ticket System](../08-business-processes/08-06-service-management/08-06-02-ticket-system.md) - Documentation
- [Service Level](../08-business-processes/08-06-service-management/08-06-03-service-level.md) - Escalation
- [Network Troubleshooting](../07-networks/07-07-network-troubleshooting/07-07-02-troubleshooting.md) - Network diagnosis
