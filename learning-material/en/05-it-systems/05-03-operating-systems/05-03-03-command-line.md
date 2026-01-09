# Command Line (CLI)

## Learning Objectives

After this chapter, you should be able to:
- Know the purpose of the command line
- Apply important Windows and Linux commands
- Master basic file system navigation
- Know network diagnostic commands

---

## Core Content

### What is the Command Line?

The **command line** (CLI - Command Line Interface) is a text-based interface for system control. Unlike the graphical interface (GUI), commands are typed in.

```
┌─────────────────────────────────────────────────────────────────┐
│                    CLI vs. GUI                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  CLI (Command Line Interface)     GUI (Graphical User Interface)│
│  ┌─────────────────────────┐     ┌─────────────────────────┐   │
│  │ C:\> dir                │     │ ┌────┐ ┌────┐ ┌────┐   │   │
│  │ C:\> cd Documents       │     │ │    │ │    │ │    │   │   │
│  │ C:\> copy file.txt D:\  │     │ └────┘ └────┘ └────┘   │   │
│  │ C:\> _                  │     │  Docs   Images file.txt │   │
│  └─────────────────────────┘     └─────────────────────────┘   │
│                                                                 │
│  + Faster for experts           + Beginner-friendly            │
│  + Automatable (scripts)        + Visual feedback              │
│  + Less resources               - Slower for routines          │
│  - Must learn commands          - Hard to automate             │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Windows: CMD vs. PowerShell

| Aspect | CMD | PowerShell |
|--------|-----|------------|
| **Age** | Since DOS (1980s) | Since 2006 |
| **Function** | Simple commands | Object-oriented |
| **Scripts** | .bat, .cmd | .ps1 |
| **Usage** | Basic tasks | Administration, automation |

---

### Important Windows Commands (CMD/PowerShell)

#### File System Navigation

| Command | Description | Example |
|---------|-------------|---------|
| `dir` | Display directory contents | `dir C:\Users` |
| `cd` | Change directory | `cd Documents` |
| `cd ..` | Go up one level | `cd ..` |
| `md` / `mkdir` | Create directory | `mkdir New_Folder` |
| `rd` / `rmdir` | Delete directory | `rmdir Old_Folder` |
| `copy` | Copy file | `copy file.txt D:\Backup` |
| `move` | Move file | `move file.txt D:\` |
| `del` | Delete file | `del file.txt` |
| `ren` | Rename | `ren old.txt new.txt` |
| `type` | Display file contents | `type config.txt` |

#### System Commands

| Command | Description |
|---------|-------------|
| `hostname` | Display computer name |
| `whoami` | Current user |
| `systeminfo` | System information |
| `tasklist` | Running processes |
| `taskkill` | Terminate process |
| `shutdown` | Shut down computer |
| `cls` | Clear screen |

#### Network Commands

| Command | Description | Example |
|---------|-------------|---------|
| `ipconfig` | Display IP configuration | `ipconfig /all` |
| `ping` | Test reachability | `ping google.com` |
| `tracert` | Trace route | `tracert google.com` |
| `nslookup` | DNS query | `nslookup google.com` |
| `netstat` | Network connections | `netstat -an` |

---

### Important Linux Commands (Bash)

#### File System Navigation

| Command | Description | Example |
|---------|-------------|---------|
| `ls` | Display directory contents | `ls -la` |
| `cd` | Change directory | `cd /home/user` |
| `cd ..` | Go up one level | `cd ..` |
| `pwd` | Current directory | `pwd` |
| `mkdir` | Create directory | `mkdir folder` |
| `rmdir` | Delete empty directory | `rmdir folder` |
| `cp` | Copy file | `cp file.txt /backup/` |
| `mv` | Move/Rename | `mv old.txt new.txt` |
| `rm` | Delete file | `rm file.txt` |
| `cat` | Display file contents | `cat config.txt` |

#### System Commands

| Command | Description |
|---------|-------------|
| `hostname` | Display computer name |
| `whoami` | Current user |
| `uname -a` | System information |
| `top` / `htop` | Running processes |
| `kill` | Terminate process |
| `sudo` | Execute as root |
| `clear` | Clear screen |
| `chmod` | Change permissions |
| `chown` | Change owner |

#### Network Commands

| Command | Description | Example |
|---------|-------------|---------|
| `ip a` / `ifconfig` | IP configuration | `ip a` |
| `ping` | Test reachability | `ping google.com` |
| `traceroute` | Trace route | `traceroute google.com` |
| `nslookup` / `dig` | DNS query | `dig google.com` |
| `netstat` / `ss` | Network connections | `ss -tulpn` |

---

### Comparison: Windows vs. Linux Commands

| Task | Windows (CMD) | Linux (Bash) |
|------|---------------|--------------|
| Display directory | `dir` | `ls` |
| Change directory | `cd` | `cd` |
| Current directory | `cd` (no parameter) | `pwd` |
| Copy file | `copy` | `cp` |
| Move file | `move` | `mv` |
| Delete file | `del` | `rm` |
| Create folder | `mkdir` | `mkdir` |
| Display file | `type` | `cat` |
| IP configuration | `ipconfig` | `ip a` |
| Trace route | `tracert` | `traceroute` |

---

### Network Diagnostic Examples

```
┌────────────────────────────────────────────────────────────────┐
│                NETWORK DIAGNOSTICS                             │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  1. Determine own IP address:                                  │
│     Windows:  ipconfig                                         │
│     Linux:    ip a                                             │
│                                                                │
│  2. Test connection to a server:                              │
│     ping 8.8.8.8                                               │
│     → Shows reachability and response time                    │
│                                                                │
│  3. Check DNS resolution:                                     │
│     nslookup google.com                                        │
│     → Shows IP address of the server                          │
│                                                                │
│  4. Trace route to destination:                               │
│     Windows:  tracert google.com                              │
│     Linux:    traceroute google.com                           │
│     → Shows all intermediate stations (hops)                  │
│                                                                │
│  5. Display open ports:                                       │
│     Windows:  netstat -an                                      │
│     Linux:    ss -tulpn                                        │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### File Paths

| Type | Windows | Linux |
|------|---------|-------|
| **Separator** | `\` (Backslash) | `/` (Slash) |
| **Root Directory** | `C:\` | `/` |
| **Home Directory** | `C:\Users\Name` | `/home/name` or `~` |
| **Absolute Path** | `C:\Users\Name\file.txt` | `/home/name/file.txt` |
| **Relative Path** | `Documents\file.txt` | `Documents/file.txt` |

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **CLI** | Command Line Interface |
| **GUI** | Graphical User Interface |
| **Shell** | Command line interpreter (CMD, Bash) |
| **Path** | Route to a file or folder |
| **Parameter** | Options for commands (e.g., `-a`) |
| **Pipe** | Redirect output (`|`) |
| **Redirect** | Redirect output to file (`>`) |

---

## Exam Tips

### Common Exam Questions

- Which command shows the IP configuration?
- How do you change directories?
- What does the ping command do?
- Difference between Windows vs. Linux commands?

### Important to Remember

- **ipconfig** (Windows) / **ip a** (Linux) = Display IP address
- **ping** = Test reachability
- **dir** (Windows) / **ls** (Linux) = List directory
- **cd** = Change directory (both systems)

---

## Practice Exercises

### Exercise 1
Which Windows command do you use to display your computer's IP address?

**Solution:** `ipconfig` or `ipconfig /all` for detailed information

### Exercise 2
How do you navigate to the folder "C:\Projects\Test" in Windows command line?

**Solution:** `cd C:\Projects\Test`

### Exercise 3
Which command do you use to check if a server at address 192.168.1.1 is reachable?

**Solution:** `ping 192.168.1.1`

The command sends ICMP packets and shows:
- Whether the server responds
- The response time (latency)
- Any packet loss

### Exercise 4
Which Linux commands correspond to the Windows commands `dir` and `copy`?

**Solution:**
- `dir` (Windows) → `ls` (Linux)
- `copy` (Windows) → `cp` (Linux)

---

## Cross-References

- [05-03-01 Operating System Fundamentals](./05-03-01-fundamentals-operating-systems.md) - Shell
- [07-07-01 Diagnostic Tools](../../07-networks/07-07-network-troubleshooting/07-07-01-diagnostic-tools.md) - Network commands
- [04-03-03 OS Hardening](../../04-it-security/04-03-protective-measures/04-03-03-os-hardening.md) - System configuration
