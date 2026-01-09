# Incident Management

## Learning Objectives

After this section, you will be able to:
- Describe the incident management process
- Prioritize and categorize incidents
- Distinguish workarounds from permanent solutions
- Explain the relationship with problem management

---

## Core Content

### What is Incident Management?

```
┌─────────────────────────────────────────────────────────────────────┐
│           INCIDENT MANAGEMENT                                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  DEFINITION:                                                        │
│  ──────────────────────────────────────────────────────────────     │
│  Incident management is the process for restoring an IT service     │
│  as quickly as possible after an unplanned interruption.            │
│                                                                      │
│  GOAL:                                                              │
│  ──────────────────────────────────────────────────────────────     │
│  → Restore service as quickly as possible                           │
│  → Minimize impact on business                                      │
│  → Meet agreed SLAs                                                 │
│                                                                      │
│  INCIDENT:                                                          │
│  ──────────────────────────────────────────────────────────────     │
│  = Unplanned interruption of an IT service or                       │
│    reduction in quality of an IT service                            │
│                                                                      │
│  Examples:                                                          │
│  → Server not responding                                            │
│  → Software crashes                                                 │
│  → Network is slow                                                  │
│  → Printer not working                                              │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### The Incident Management Process

```
┌─────────────────────────────────────────────────────────────────────┐
│           INCIDENT MANAGEMENT PROCESS                               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌──────────────────┐                                               │
│  │ 1. IDENTIFICATION│  → Incident is reported/detected              │
│  │    & LOGGING     │  → Create ticket                              │
│  └────────┬─────────┘  → Document all information                   │
│           │                                                         │
│           ▼                                                         │
│  ┌──────────────────┐                                               │
│  │ 2. CLASSIFICATION│  → Assign category                            │
│  │    & PRIORITIZATION│→ Set priority                               │
│  └────────┬─────────┘  → Consider SLA deadlines                     │
│           │                                                         │
│           ▼                                                         │
│  ┌──────────────────┐                                               │
│  │ 3. DIAGNOSIS     │  → Determine cause                            │
│  │                  │  → Check Known Error Database                 │
│  └────────┬─────────┘  → Look for workaround                        │
│           │                                                         │
│           ├───────────────────────────┐                             │
│           │                           │                             │
│           ▼                           ▼                             │
│  ┌──────────────────┐       ┌──────────────────┐                    │
│  │ 4a. RESOLUTION   │       │ 4b. ESCALATION   │                    │
│  │ (1st Level solves)│      │ (2nd/3rd Level)  │                    │
│  └────────┬─────────┘       └────────┬─────────┘                    │
│           │                           │                             │
│           └───────────────────────────┘                             │
│           │                                                         │
│           ▼                                                         │
│  ┌──────────────────┐                                               │
│  │ 5. CLOSURE       │  → Document solution                          │
│  │    & REVIEW      │  → Obtain user confirmation                   │
│  └──────────────────┘  → Close ticket                               │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Incident Prioritization

```
┌─────────────────────────────────────────────────────────────────────┐
│           PRIORITY MATRIX                                           │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Priority = Impact × Urgency                                        │
│                                                                      │
│                     │ Low            │ High           │             │
│                     │ Impact         │ Impact         │             │
│  ───────────────────┼────────────────┼────────────────┤             │
│  Low                │                │                │             │
│  Urgency            │   P4 (Low)     │  P3 (Medium)   │             │
│  ───────────────────┼────────────────┼────────────────┤             │
│  High               │                │                │             │
│  Urgency            │  P3 (Medium)   │  P1/P2 (High)  │             │
│                                                                      │
│  IMPACT:                                                            │
│  ──────────────────────────────────────────────────────────────     │
│  → High: Many users/critical business processes affected            │
│  → Low: Individual users, non-critical function                     │
│                                                                      │
│  URGENCY:                                                           │
│  ──────────────────────────────────────────────────────────────     │
│  → High: Immediate impact on work                                   │
│  → Low: User can continue working / has workaround                  │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Priority Levels in Detail

| Priority | Designation | Example | Response Time | Resolution Time |
|----------|-------------|---------|---------------|-----------------|
| **P1** | Critical | Central server down | 15 min | 4 h |
| **P2** | High | Email system disrupted | 1 h | 8 h |
| **P3** | Medium | Single printer defective | 4 h | 24 h |
| **P4** | Low | Non-critical software request | 8 h | 5 days |

### Workaround vs. Permanent Solution

```
┌─────────────────────────────────────────────────────────────────────┐
│           WORKAROUND vs. PERMANENT SOLUTION                         │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  WORKAROUND (Temporary Fix):                                        │
│  ──────────────────────────────────────────────────────────────     │
│  → Temporary solution                                               │
│  → Restores ability to work                                         │
│  → Does not fix the cause                                           │
│  → Example: "Use the printer in the next office until               │
│              repair is complete"                                    │
│                                                                      │
│  PERMANENT SOLUTION:                                                │
│  ──────────────────────────────────────────────────────────────     │
│  → Lasting solution                                                 │
│  → Fixes the actual cause                                           │
│  → Problem does not recur                                           │
│  → Example: "Printer has been repaired/replaced"                    │
│                                                                      │
│  WORKFLOW:                                                          │
│  ──────────────────────────────────────────────────────────────     │
│                                                                      │
│  Incident ──► Workaround ──► User can work ──► Permanent            │
│  reported     (quick)        (service restored)  Solution           │
│                                                  (later)            │
│                                                                      │
│  IMPORTANT:                                                         │
│  → Workaround is OK, but don't forget the problem!                  │
│  → Ticket remains open until permanent solution                     │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Known Error Database (KEDB)

```
┌─────────────────────────────────────────────────────────────────────┐
│           KNOWN ERROR DATABASE                                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  = Database with known errors and their solutions                   │
│                                                                      │
│  CONTENT:                                                           │
│  ──────────────────────────────────────────────────────────────     │
│  → Error description                                                │
│  → Known cause                                                      │
│  → Workaround                                                       │
│  → Permanent solution (if available)                                │
│                                                                      │
│  EXAMPLE ENTRY:                                                     │
│  ──────────────────────────────────────────────────────────────     │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  KNOWN ERROR #KE-2024-015                                    │   │
│  │                                                              │   │
│  │  Symptom: Outlook crashes when opening large attachments     │   │
│  │  Cause: Bug in Outlook version 2019, Build 16.0.xxxxx       │   │
│  │  Workaround: Open or save attachment in webmail              │   │
│  │  Permanent Solution: Update to current build (KB123456)      │   │
│  │  Status: Waiting for next patch window                       │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  BENEFITS:                                                          │
│  → Faster solution finding (don't analyze from scratch each time)   │
│  → Consistent answers                                               │
│  → Knowledge transfer within team                                   │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Incident vs. Problem Management

```
┌─────────────────────────────────────────────────────────────────────┐
│           INCIDENT vs. PROBLEM MANAGEMENT                           │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  INCIDENT MANAGEMENT:                                               │
│  ──────────────────────────────────────────────────────────────     │
│  → Reactive: Responds to incidents                                  │
│  → Goal: Restore service quickly                                    │
│  → Focus: Symptom treatment                                         │
│  → "The printer works again"                                        │
│                                                                      │
│  PROBLEM MANAGEMENT:                                                │
│  ──────────────────────────────────────────────────────────────     │
│  → Proactive & Reactive: Searches for causes                        │
│  → Goal: Prevent recurrence                                         │
│  → Focus: Cause treatment                                           │
│  → "Why does the printer keep failing?"                             │
│                                                                      │
│  RELATIONSHIP:                                                      │
│  ──────────────────────────────────────────────────────────────     │
│                                                                      │
│  Incident 1: Printer not working  ─┐                                │
│  Incident 2: Printer not working  ─┼─► PROBLEM: Printer defective   │
│  Incident 3: Printer not working  ─┘    │                           │
│                                         ▼                           │
│                                Known Error: Drum worn out           │
│                                         │                           │
│                                         ▼                           │
│                                Solution: Replace printer            │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Major Incident Management

```
┌─────────────────────────────────────────────────────────────────────┐
│           MAJOR INCIDENT (SEVERE INCIDENT)                          │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  DEFINITION:                                                        │
│  = Incident with very high impact on business                       │
│                                                                      │
│  TYPICAL CRITERIA:                                                  │
│  ──────────────────────────────────────────────────────────────     │
│  → Many users affected (e.g., > 50%)                                │
│  → Critical business processes affected                             │
│  → High financial damage possible                                   │
│  → Reputation damage possible                                       │
│                                                                      │
│  SPECIAL HANDLING:                                                  │
│  ──────────────────────────────────────────────────────────────     │
│  → Separate process with shorter response times                     │
│  → Immediate escalation to management                               │
│  → Dedicated team for processing                                    │
│  → Regular status updates (e.g., every 30 min)                      │
│  → Communication to all affected parties                            │
│                                                                      │
│  EXAMPLES:                                                          │
│  ──────────────────────────────────────────────────────────────     │
│  → Complete network outage                                          │
│  → Cyber attack/Ransomware                                          │
│  → Central server/database down                                     │
│  → ERP system unavailable                                           │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Incident Documentation

| Field | Content |
|-------|---------|
| **Incident ID** | Unique number (#INC-2024-0815) |
| **Report Date/Time** | When was it reported? |
| **Reporter** | Who reported it? |
| **Description** | What is the problem? |
| **Category** | Hardware/Software/Network/... |
| **Priority** | P1-P4 |
| **Status** | Open/In Progress/Resolved/Closed |
| **Assignee** | Who is working on it? |
| **Diagnosis** | What was determined? |
| **Workaround** | Temporary solution |
| **Solution** | Permanent solution |
| **Closure Date** | When was it resolved? |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Incident** | Unplanned interruption of an IT service |
| **Impact** | Effect of an incident |
| **Urgency** | Urgency of an incident |
| **Workaround** | Temporary fix |
| **Known Error** | Error with known cause |
| **KEDB** | Known Error Database |
| **Major Incident** | Severe incident |

---

## Exam Tips

1. **Priority Matrix:**
   - Impact × Urgency = Priority
   - Be able to assign examples

2. **Workaround vs. Solution:**
   - Workaround = quick, temporary
   - Permanent solution = lasting, cause fixed

3. **Incident vs. Problem:**
   - Incident = single disruption
   - Problem = cause of multiple incidents

---

## Practice Exercises

### Exercise 1: Prioritization

Prioritize the following incidents (P1-P4):

a) The ERP system is down for all employees (bookings not possible)
b) An employee's monitor flickers occasionally
c) The email server responds slowly (emails arrive delayed)
d) A single printer is offline

<details>
<summary>Show Solution</summary>

a) **P1 (Critical)**
   - Impact: High (all employees, critical business process)
   - Urgency: High (bookings not possible)

b) **P4 (Low)**
   - Impact: Low (one employee)
   - Urgency: Low (still works)

c) **P2/P3 (High/Medium)**
   - Impact: High (all employees)
   - Urgency: Medium (emails arrive, just slowly)

d) **P4 (Low)**
   - Impact: Low (affects few employees)
   - Urgency: Low (other printers available)

</details>

### Exercise 2: Formulate Workaround

An employee reports: "My mouse doesn't work anymore."

a) Formulate a workaround
b) What would be the permanent solution?

<details>
<summary>Show Solution</summary>

a) **Workaround:**
- "Use the keyboard for navigation for now (Tab, arrow keys, Enter)"
- "I'll bring you a replacement mouse"
- "Until then, you can use the laptop's touchpad" (if laptop)

b) **Permanent solution:**
- Provide new mouse
- For USB problem: Check USB port or driver
- For wireless mouse: Replace batteries, check receiver

</details>

### Exercise 3: Create Known Error

Multiple employees report the same problem:
"Outlook crashes when I click on Calendar"

Create a Known Error entry.

<details>
<summary>Show Solution</summary>

```
KNOWN ERROR #KE-2024-042

Symptom:
Microsoft Outlook crashes when clicking on Calendar.

Affected Systems:
Outlook 2019/365, Windows 10/11

Known Cause:
Conflict with the latest Windows update KB5025xxx
in combination with an add-in.

Workaround:
1. Start Outlook in safe mode
   (outlook.exe /safe)
2. Disable add-ins under
   File → Options → Add-ins

Permanent Solution:
Install update KB5026xxx (fixes the problem)
Status: Scheduled for next Patch Tuesday

Related Incidents:
#INC-2024-0215, #INC-2024-0218, #INC-2024-0221
```

</details>

---

## Cross-References

- [Error Analysis](09-02-01-error-analysis.md) - Root cause analysis
- [Service Requests](../08-business-processes/08-06-service-management/08-06-01-service-requests.md) - Incident vs. Request
- [Ticket System](../08-business-processes/08-06-service-management/08-06-02-ticket-system.md) - Documentation
- [Service Level](../08-business-processes/08-06-service-management/08-06-03-service-level.md) - Support tiers
- [SLA](../08-business-processes/08-06-service-management/08-06-04-sla.md) - Response times
