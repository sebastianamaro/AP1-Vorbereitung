# Service Requests

## Learning Objectives

After this section, you will be able to:
- Distinguish between different types of service requests
- Differentiate incidents from service requests
- Describe the processing of requests
- Correctly assess priorities

---

## Core Content

### Types of Service Requests

```
┌─────────────────────────────────────────────────────────────────────┐
│                    SERVICE REQUESTS                                  │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │                      INCIDENT                                │    │
│  │  ──────────────────────────────────────────────────────────│    │
│  │  = Disruption, unplanned interruption                       │    │
│  │                                                              │    │
│  │  Characteristics:                                            │    │
│  │  → Something is NOT working anymore                         │    │
│  │  → Urgent, requires quick resolution                        │    │
│  │  → Impacts work                                              │    │
│  │                                                              │    │
│  │  Examples:                                                   │    │
│  │  → PC won't start                                           │    │
│  │  → Internet down                                            │    │
│  │  → Software crashes                                         │    │
│  │  → Printer not printing                                     │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │                   SERVICE REQUEST                           │    │
│  │  ──────────────────────────────────────────────────────────│    │
│  │  = Request for standard service                              │    │
│  │                                                              │    │
│  │  Characteristics:                                            │    │
│  │  → Something NEW is needed                                  │    │
│  │  → Plannable, not urgent                                    │    │
│  │  → Standard process available                               │    │
│  │                                                              │    │
│  │  Examples:                                                   │    │
│  │  → Create new user                                          │    │
│  │  → Reset password                                           │    │
│  │  → Install software                                         │    │
│  │  → Change permissions                                       │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │                    PROBLEM                                   │    │
│  │  ──────────────────────────────────────────────────────────│    │
│  │  = Root cause for one or more incidents                     │    │
│  │                                                              │    │
│  │  Example:                                                    │    │
│  │  → Multiple users report "email not working"                │    │
│  │  → Problem: Email server is down                            │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Incident vs. Service Request

| Criterion | Incident | Service Request |
|-----------|----------|-----------------|
| **Definition** | Disruption/outage | Request for service |
| **Example** | "PC not working" | "Please install software" |
| **Urgency** | Often high | Usually plannable |
| **Goal** | Quick restoration | Fulfill the request |
| **Process** | Incident Management | Request Fulfillment |

### Categorization of Requests

```
┌─────────────────────────────────────────────────────────────────────┐
│                    CATEGORIZATION                                    │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  By AREA:                                                           │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │  Hardware    │ PC, printer, monitor, peripherals            │    │
│  │  Software    │ Operating system, applications, updates      │    │
│  │  Network     │ Internet, WiFi, VPN, email                   │    │
│  │  Access      │ Permissions, password, accounts              │    │
│  │  Other       │ Questions, training, documentation           │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                      │
│  By PRIORITY:                                                       │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │                                                              │    │
│  │  Priority = Urgency × Impact                                 │    │
│  │                                                              │    │
│  │           │ Low           │ High           │                │    │
│  │           │ Impact        │ Impact         │                │    │
│  │  ─────────┼───────────────┼────────────────┤                │    │
│  │  Low      │               │                │                │    │
│  │  Urgency  │   LOW         │   MEDIUM       │                │    │
│  │  ─────────┼───────────────┼────────────────┤                │    │
│  │  High     │               │                │                │    │
│  │  Urgency  │   MEDIUM      │   HIGH/CRITICAL│                │    │
│  │                                                              │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Priority Levels

| Priority | Impact | Urgency | Example | Response Time |
|----------|--------|---------|---------|---------------|
| **Critical** | Company standstill | Immediate | Total server outage | 15 min |
| **High** | Department affected | Urgent | Email system down | 1 hour |
| **Medium** | Multiple users | Normal | Printer defective | 4 hours |
| **Low** | Single user | Low | Monitor flickering | 1-2 days |

### Processing Service Requests

```
┌─────────────────────────────────────────────────────────────────────┐
│           PROCESSING WORKFLOW                                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌─────────────────┐                                                │
│  │ 1. INTAKE       │  → Create ticket                              │
│  │                 │  → Categorize                                  │
│  └────────┬────────┘  → Prioritize                                  │
│           │                                                         │
│           ▼                                                         │
│  ┌─────────────────┐                                                │
│  │ 2. DIAGNOSIS    │  → Analyze problem                            │
│  │                 │  → Gather information                          │
│  └────────┬────────┘  → Identify cause                              │
│           │                                                         │
│           ▼                                                         │
│  ┌─────────────────┐                                                │
│  │ 3. RESOLUTION   │  → Workaround or solution                     │
│  │                 │  → Escalate if necessary                       │
│  └────────┬────────┘  → Document                                    │
│           │                                                         │
│           ▼                                                         │
│  ┌─────────────────┐                                                │
│  │ 4. CLOSURE      │  → Verify solution                            │
│  │                 │  → Customer feedback                           │
│  └─────────────────┘  → Close ticket                                │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Communication for Requests

```
┌─────────────────────────────────────────────────────────────────────┐
│           COMMUNICATION WITH THE USER                                │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  AT INTAKE:                                                         │
│  → Friendly greeting                                                │
│  → Understand the problem (W-questions)                             │
│  → Provide ticket number                                            │
│  → State expected processing time                                   │
│                                                                      │
│  DURING PROCESSING:                                                 │
│  → Status updates for longer durations                              │
│  → Actively communicate for follow-up questions                     │
│  → Make escalation transparent                                      │
│                                                                      │
│  AT CLOSURE:                                                        │
│  → Explain the solution                                             │
│  → Ask about satisfaction                                           │
│  → Give tips for prevention                                         │
│                                                                      │
│  W-QUESTIONS:                                                       │
│  ──────────────────────────────────────────────────────────────     │
│  → WHAT is the problem?                                             │
│  → WHEN did it occur?                                               │
│  → HOW does it manifest?                                            │
│  → WHO is affected?                                                 │
│  → WHAT has already been tried?                                     │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Incident** | Unplanned interruption of an IT service |
| **Service Request** | Request for a standard service |
| **Problem** | Root cause for one or more incidents |
| **Categorization** | Classification by type of request |
| **Prioritization** | Determining the processing order |
| **Workaround** | Temporary bypass solution |

---

## Exam Tips

1. **Incident vs. Service Request:**
   - Incident = "Not working" (disruption)
   - Request = "I need..." (request)

2. **Calculate priority:**
   - Priority = Urgency × Impact
   - High Impact + High Urgency = Critical

3. **Typical exam questions:**
   - What is an incident?
   - How is priority determined?
   - Difference incident/problem?

---

## Practice Exercises

### Exercise 1: Categorization

Classify the following requests (Incident or Service Request):

a) "My PC won't boot anymore"
b) "I need access to the Sales network folder"
c) "The internet is very slow"
d) "Please install Adobe Reader"

<details>
<summary>Show solution</summary>

a) **Incident** - PC not working (disruption)
b) **Service Request** - Request permission (standard service)
c) **Incident** - Limited functionality (disruption)
d) **Service Request** - Software installation (standard service)

</details>

### Exercise 2: Prioritization

Determine the priority for the following incidents:

a) The CEO cannot send emails anymore
b) An employee forgot how to print
c) The central database server has failed
d) A monitor occasionally flickers

<details>
<summary>Show solution</summary>

a) **High** - High impact (CEO), medium urgency
b) **Low** - This is actually not an incident, but a request/training need
c) **Critical** - Very high impact (everyone affected), very high urgency
d) **Low** - Low impact (one user), low urgency

</details>

### Exercise 3: Communication

An employee calls: "Nothing works anymore! I need to work urgently!"

How do you proceed?

<details>
<summary>Show solution</summary>

**1. Calm down and greet:**
"Hello, IT Support. I understand you need to work urgently. Let's quickly clarify the problem."

**2. Ask W-questions:**
- "WHAT exactly isn't working?"
- "WHEN did you notice the problem?"
- "Have you CHANGED or installed anything?"
- "Is there an error message?"

**3. Create ticket:**
- Document problem
- Categorize (Hardware/Software/Network)
- Set priority

**4. Set expectations:**
"I've created ticket number 12345. Due to the urgency, we're processing it immediately. I'll update you in 15 minutes."

**5. Quick diagnosis:**
- Standard questions: Tried restarting? Checked cables?
- Offer remote support if applicable

</details>

---

## Cross-References

- [Ticket System](08-06-02-ticket-system.md) - Ticket processing
- [Service Level](08-06-03-service-level.md) - Support levels
- [SLA](08-06-04-sla.md) - Response times
