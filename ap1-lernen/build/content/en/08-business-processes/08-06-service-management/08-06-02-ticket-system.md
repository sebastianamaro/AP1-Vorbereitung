# Ticket System

## Learning Objectives

After this section, you will be able to:
- Explain the structure and purpose of a ticket system
- Describe the lifecycle of a ticket
- Name important ticket information
- Explain advantages of ticket systems

---

## Core Content

### What is a Ticket System?

A **ticket system** (also helpdesk system or issue tracking system) is software for structured recording, tracking, and processing of requests and incidents.

```
┌─────────────────────────────────────────────────────────────────────┐
│                    TICKET SYSTEM                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│                    ┌─────────────────────┐                          │
│    User reports    │                     │   IT Support             │
│    problem    ───► │    TICKET SYSTEM    │ ───► processes           │
│                    │                     │                          │
│                    │  • Recording        │                          │
│                    │  • Assignment       │                          │
│                    │  • Tracking         │                          │
│                    │  • Documentation    │                          │
│                    │  • Reporting        │                          │
│                    │                     │                          │
│                    └─────────────────────┘                          │
│                                                                      │
│  Popular Systems:                                                   │
│  → OTRS/Znuny                                                       │
│  → Jira Service Management                                          │
│  → ServiceNow                                                       │
│  → Freshdesk                                                        │
│  → osTicket                                                         │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Structure of a Ticket

```
┌─────────────────────────────────────────────────────────────────────┐
│                    TICKET INFORMATION                                │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │  TICKET #2024-001234                        Status: OPEN    │    │
│  ├─────────────────────────────────────────────────────────────┤    │
│  │                                                              │    │
│  │  HEADER DATA:                                                │    │
│  │  ──────────────────────────────────────────────────────────│    │
│  │  Created:       2024-01-15 09:30                            │    │
│  │  Reporter:      Max Müller (Sales)                          │    │
│  │  Contact:       m.mueller@consystem.de, Tel: 1234           │    │
│  │  Assignee:      Tim Schmidt (IT Support)                    │    │
│  │                                                              │    │
│  │  CLASSIFICATION:                                             │    │
│  │  ──────────────────────────────────────────────────────────│    │
│  │  Type:          Incident                                    │    │
│  │  Category:      Hardware → PC → Startup problem             │    │
│  │  Priority:      HIGH                                        │    │
│  │  Impact:        1 employee cannot work                      │    │
│  │                                                              │    │
│  │  DESCRIPTION:                                                │    │
│  │  ──────────────────────────────────────────────────────────│    │
│  │  PC doesn't start anymore. Beeps 3x when powered on.        │    │
│  │  Restart and cable check already performed.                 │    │
│  │                                                              │    │
│  │  HISTORY:                                                    │    │
│  │  ──────────────────────────────────────────────────────────│    │
│  │  09:30  Ticket created (Reporter: M. Müller)                │    │
│  │  09:35  Assigned to T. Schmidt                              │    │
│  │  09:45  Status → In Progress                                │    │
│  │  10:00  Diagnosis: RAM module defective                     │    │
│  │  10:15  Resolution: RAM replaced, PC working                │    │
│  │  10:20  Status → Resolved                                   │    │
│  │                                                              │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Ticket Lifecycle

```
┌─────────────────────────────────────────────────────────────────────┐
│                    TICKET STATUS                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌────────┐                                                         │
│  │  NEW   │  Ticket was just created                                │
│  └───┬────┘                                                         │
│      │                                                              │
│      ▼                                                              │
│  ┌────────┐                                                         │
│  │  OPEN  │  Ticket waiting for processing                          │
│  └───┬────┘                                                         │
│      │                                                              │
│      ▼                                                              │
│  ┌──────────────┐                                                   │
│  │ IN PROGRESS  │  Support working on ticket                        │
│  └───┬──────────┘                                                   │
│      │                                                              │
│      ├──────────────────────────────────┐                           │
│      │                                  │                           │
│      ▼                                  ▼                           │
│  ┌────────┐                        ┌─────────┐                      │
│  │PENDING │  Waiting for user/part │ESCALATED│  To higher level     │
│  └───┬────┘                        └────┬────┘                      │
│      │                                  │                           │
│      └──────────────────────────────────┘                           │
│      │                                                              │
│      ▼                                                              │
│  ┌────────┐                                                         │
│  │RESOLVED│  Problem fixed                                          │
│  └───┬────┘                                                         │
│      │  (Confirmation by user)                                      │
│      ▼                                                              │
│  ┌──────────┐                                                       │
│  │  CLOSED  │  Ticket completed                                     │
│  └──────────┘                                                       │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Important Ticket Fields

| Field | Description | Example |
|-------|-------------|---------|
| **Ticket ID** | Unique number | #2024-001234 |
| **Reporter** | Who reported? | Max Müller |
| **Assignee** | Who is processing? | Tim Schmidt |
| **Status** | Current state | In Progress |
| **Priority** | Urgency | High |
| **Category** | Type of problem | Hardware → PC |
| **Description** | Problem description | PC doesn't start |
| **Created** | Timestamp | 2024-01-15 09:30 |
| **SLA Deadline** | Deadline per SLA | 2024-01-15 13:30 |

### Advantages of a Ticket System

```
┌─────────────────────────────────────────────────────────────────────┐
│                    ADVANTAGES                                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  + TRANSPARENCY                                                     │
│    → All requests are documented                                    │
│    → Status visible at any time                                     │
│    → Traceable history                                              │
│                                                                      │
│  + EFFICIENCY                                                       │
│    → No requests get lost                                           │
│    → Automatic assignment possible                                  │
│    → Prioritization by importance                                   │
│                                                                      │
│  + ANALYSIS                                                         │
│    → KPIs measurable                                                │
│    → Identify frequent problems                                     │
│    → Analyze workload distribution                                  │
│                                                                      │
│  + COMMUNICATION                                                    │
│    → Central communication in ticket                                │
│    → Automatic notifications                                        │
│    → No more email chains                                           │
│                                                                      │
│  + SLA MONITORING                                                   │
│    → Measure response and resolution times                          │
│    → Escalation on deadline breach                                  │
│    → Reporting for management                                       │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Key Performance Indicators (KPIs) in Ticket Systems

| KPI | Description | Target Value (Example) |
|-----|-------------|------------------------|
| **Number of tickets** | Tickets per period | < 50/day |
| **Cycle time** | Time until closure | < 4 hours |
| **First call resolution** | Resolved on first contact | > 70% |
| **Open tickets** | Currently unresolved tickets | < 20 |
| **Customer satisfaction** | User rating | > 4/5 stars |
| **SLA compliance** | Resolved within deadline | > 95% |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **Ticket** | Record for a request/incident |
| **Ticket ID** | Unique identification number |
| **Queue** | Waiting list for tickets |
| **Escalation** | Forwarding to higher level |
| **SLA** | Service Level Agreement (target times) |
| **KPI** | Key Performance Indicator |
| **First call resolution** | First Call Resolution Rate |

---

## Exam Tips

1. **Know ticket contents:**
   - Reporter, assignee, status, priority, category

2. **Status sequence:**
   - New → Open → In Progress → Resolved → Closed

3. **Advantages:**
   - Transparency, traceability, analyzability

---

## Practice Exercises

### Exercise 1: Create Ticket

An employee calls: "My Outlook always crashes when I open attachments. This has been happening since yesterday."

Create a ticket with all relevant information.

<details>
<summary>Show solution</summary>

```
TICKET #2024-000001

HEADER DATA:
- Created: [current date/time]
- Reporter: [caller's name]
- Contact: [phone number/email]
- Assignee: [assign]

CLASSIFICATION:
- Type: Incident
- Category: Software → Email → Outlook
- Priority: MEDIUM
- Impact: 1 employee limited work capability

DESCRIPTION:
Outlook crashes when opening attachments.
Since: Yesterday
Affected attachments: [ask: all or specific?]
Error message: [ask]

HISTORY:
[Timestamp] Ticket created
[Timestamp] Initial diagnosis: ...
```

</details>

### Exercise 2: Assign Status

Assign the following situations to the correct ticket status:

a) IT Support has fixed the problem and is waiting for user confirmation
b) A new ticket was just created by email
c) Support is waiting for a replacement part
d) The ticket hasn't been worked on for 3 months
e) Support is currently working on the problem

<details>
<summary>Show solution</summary>

a) **RESOLVED** - Waiting for confirmation by user
b) **NEW** or **OPEN** - Just created, waiting for assignment
c) **PENDING** - Waiting for external resource
d) **CLOSED** - Should be automatically closed after 3 months
e) **IN PROGRESS** - Active processing

</details>

### Exercise 3: Interpret KPIs

An IT support team has the following metrics:
- First call resolution rate: 45%
- Average processing time: 8 hours
- SLA compliance: 72%

Evaluate the metrics and suggest improvements.

<details>
<summary>Show solution</summary>

**Evaluation:**

| KPI | Value | Rating |
|-----|-------|--------|
| First call resolution | 45% | Poor (Target: >70%) |
| Processing time | 8h | Average (depends on SLA) |
| SLA compliance | 72% | Critical (Target: >95%) |

**Improvement suggestions:**

1. **Improve first call resolution:**
   - Build better knowledge base
   - Training for 1st level support
   - Offer frequent problems as self-service

2. **Reduce processing time:**
   - Better prioritization
   - Automation of standard tasks
   - More staff or better distribution

3. **Improve SLA compliance:**
   - Optimize escalation processes
   - Early warning system for impending SLA violations
   - Identify capacity bottlenecks

</details>

---

## Cross-References

- [Service Requests](08-06-01-service-requests.md) - Incident vs. Request
- [Service Level](08-06-03-service-level.md) - Support levels
- [SLA](08-06-04-sla.md) - Service Level Agreements
