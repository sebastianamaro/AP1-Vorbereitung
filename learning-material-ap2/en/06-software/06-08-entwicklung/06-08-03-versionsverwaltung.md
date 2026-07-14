# Version Control (Git)

## Learning Objectives

After this chapter you should:
- Explain the purpose of version control
- Distinguish centralized and distributed systems
- Know the basic concepts of Git

---

## Core Content

**Version control** tracks changes to the code, enables **collaboration**, **restoration** of earlier states and **parallel work** via branches.

### Centralized vs. distributed

- **Centralized** (e.g. SVN): one central repository.
- **Distributed** (e.g. **Git**): everyone has a complete copy of the repository including history.

### Git basic concepts

| Term | Meaning |
|---------|-----------|
| **Repository** | project incl. version history |
| **Commit** | saved change state (snapshot) |
| **Branch** | parallel development line |
| **Merge** | combining branches |
| **Pull/Push** | fetch/upload changes (remote) |
| **Conflict** | contradictory changes, resolve manually |

Typical flow: `clone → branch → commit → push → Pull Request → merge`. Platforms: **GitHub, GitLab**.

---

## Key Terms

| Term | Explanation |
|---------|-----------|
| **Git** | Distributed version control system |
| **Commit/Branch/Merge** | Snapshot / development line / combining |
| **Pull/Push** | Synchronization with the remote |

---

## Exam Tips

- **Centralized vs. distributed** (Git = distributed, full local copy).
- Be able to explain the basic concepts (commit, branch, merge, conflict).
- Benefit: collaboration, traceability, restoration.

---

## Practice Exercise

**Task:** Describe the flow of how two developers work on a feature using branches and combine their changes (including a conflict case).

---

## Cross-References

- [06-07-03 CI/CD](../06-07-architektur/06-07-03-ci-cd.md)
- [06-08-05 Documentation](./06-08-05-dokumentation.md)
