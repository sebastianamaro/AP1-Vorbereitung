# Backup-Arten

## Lernziele

Nach diesem Kapitel solltest du:
- Die verschiedenen Backup-Arten kennen
- Unterschiede zwischen Voll-, Differenziell- und Inkrementiell-Backup erklären können
- Vor- und Nachteile der Backup-Arten bewerten können
- Geeignete Backup-Arten für Szenarien auswählen können

---

## Kerninhalt

### Was ist ein Backup?

Ein **Backup** (Datensicherung) ist eine Kopie von Daten, die zur Wiederherstellung bei Datenverlust verwendet werden kann.

```
┌─────────────────────────────────────────────────────────────────┐
│                    BACKUP-GRUNDPRINZIP                          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ORIGINAL-DATEN                    BACKUP                      │
│   ┌─────────────────┐              ┌─────────────────┐         │
│   │  📁 Dokumente   │    ───►      │  📁 Dokumente   │         │
│   │  📁 Bilder      │   Kopieren   │  📁 Bilder      │         │
│   │  📁 Projekte    │              │  📁 Projekte    │         │
│   └─────────────────┘              └─────────────────┘         │
│                                                                 │
│   Bei Datenverlust:                                            │
│                                                                 │
│   ┌─────────────────┐              ┌─────────────────┐         │
│   │      ❌         │    ◄───      │  📁 Dokumente   │         │
│   │   Verloren!     │   Wieder-    │  📁 Bilder      │         │
│   │                 │   herstellen │  📁 Projekte    │         │
│   └─────────────────┘              └─────────────────┘         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Die drei Backup-Arten

#### 1. Vollbackup (Full Backup)

```
┌────────────────────────────────────────────────────────────────┐
│                    VOLLBACKUP                                  │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Tag 1      Tag 2      Tag 3      Tag 4      Tag 5           │
│                                                                │
│  ┌────┐    ┌────┐    ┌────┐    ┌────┐    ┌────┐             │
│  │████│    │████│    │████│    │████│    │████│             │
│  │████│    │████│    │████│    │████│    │████│             │
│  │████│    │████│    │████│    │████│    │████│             │
│  │████│    │████│    │████│    │████│    │████│             │
│  │████│    │████│    │████│    │████│    │████│             │
│  └────┘    └────┘    └────┘    └────┘    └────┘             │
│   100%      100%      100%      100%      100%               │
│                                                                │
│  → Alle Daten werden jedes Mal komplett gesichert            │
│  → Hoher Speicherbedarf                                       │
│  → Einfache Wiederherstellung                                 │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Eigenschaft | Beschreibung |
|-------------|--------------|
| **Prinzip** | Alle Daten werden gesichert |
| **Speicherbedarf** | Hoch (immer volle Datenmenge) |
| **Backup-Dauer** | Lang |
| **Wiederherstellung** | Schnell, nur ein Backup nötig |

---

#### 2. Inkrementelles Backup (Incremental Backup)

```
┌────────────────────────────────────────────────────────────────┐
│                INKREMENTELLES BACKUP                           │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Tag 1      Tag 2      Tag 3      Tag 4      Tag 5           │
│  (Voll)    (Inkr.)    (Inkr.)    (Inkr.)    (Inkr.)          │
│                                                                │
│  ┌────┐    ┌────┐    ┌────┐    ┌────┐    ┌────┐             │
│  │████│    │░░░░│    │░░░░│    │░░░░│    │░░░░│             │
│  │████│    │░░░░│    │░░░░│    │░░░░│    │░░░░│             │
│  │████│    │    │    │    │    │    │    │    │             │
│  │████│    │    │    │    │    │    │    │    │             │
│  │████│    │    │    │    │    │    │    │    │             │
│  └────┘    └────┘    └────┘    └────┘    └────┘             │
│   100%      ~5%        ~5%       ~5%        ~5%              │
│                                                                │
│  ████ = Vollbackup                                            │
│  ░░░░ = Nur Änderungen seit LETZTEM Backup                   │
│                                                                │
│  → Nur Änderungen seit dem LETZTEN Backup                    │
│  → Geringster Speicherbedarf                                  │
│  → Wiederherstellung: Alle Backups in Reihe nötig            │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Eigenschaft | Beschreibung |
|-------------|--------------|
| **Prinzip** | Nur Änderungen seit **letztem Backup** |
| **Speicherbedarf** | Sehr gering |
| **Backup-Dauer** | Sehr kurz |
| **Wiederherstellung** | Aufwendig (Vollbackup + alle Inkremente) |

---

#### 3. Differenzielles Backup (Differential Backup)

```
┌────────────────────────────────────────────────────────────────┐
│               DIFFERENZIELLES BACKUP                           │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Tag 1      Tag 2      Tag 3      Tag 4      Tag 5           │
│  (Voll)    (Diff.)    (Diff.)    (Diff.)    (Diff.)          │
│                                                                │
│  ┌────┐    ┌────┐    ┌────┐    ┌────┐    ┌────┐             │
│  │████│    │░░░░│    │░░░░│    │░░░░│    │░░░░│             │
│  │████│    │░░░░│    │░░░░│    │░░░░│    │░░░░│             │
│  │████│    │    │    │░░░░│    │░░░░│    │░░░░│             │
│  │████│    │    │    │    │    │░░░░│    │░░░░│             │
│  │████│    │    │    │    │    │    │    │░░░░│             │
│  └────┘    └────┘    └────┘    └────┘    └────┘             │
│   100%      ~5%       ~10%      ~15%       ~20%              │
│                                                                │
│  ████ = Vollbackup                                            │
│  ░░░░ = Alle Änderungen seit dem VOLLBACKUP                  │
│                                                                │
│  → Alle Änderungen seit dem LETZTEN VOLLBACKUP               │
│  → Mittlerer Speicherbedarf (wächst täglich)                 │
│  → Wiederherstellung: Vollbackup + letztes Differenziell     │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Eigenschaft | Beschreibung |
|-------------|--------------|
| **Prinzip** | Alle Änderungen seit **letztem Vollbackup** |
| **Speicherbedarf** | Mittel (wächst) |
| **Backup-Dauer** | Mittel (wächst) |
| **Wiederherstellung** | Mittel (Vollbackup + letztes Diff.) |

---

### Vergleich der Backup-Arten

| Kriterium | Vollbackup | Inkrementell | Differenziell |
|-----------|------------|--------------|---------------|
| **Speicherbedarf** | Sehr hoch | Sehr gering | Mittel |
| **Backup-Zeit** | Lang | Sehr kurz | Mittel |
| **Restore-Zeit** | Sehr kurz | Lang | Mittel |
| **Restore-Aufwand** | 1 Backup | Voll + alle Inkr. | Voll + 1 Diff. |
| **Risiko Datenverlust** | Gering | Höher | Mittel |

---

### Wiederherstellung (Restore) im Vergleich

```
┌────────────────────────────────────────────────────────────────┐
│            WIEDERHERSTELLUNG (Tag 5)                           │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  VOLLBACKUP:                                                   │
│  Nur Tag 5 wiederherstellen                                   │
│  [Tag 5 Vollbackup] ─────────────────────────► ✓              │
│                                                                │
│  INKREMENTELL:                                                 │
│  Vollbackup + alle Inkremente nacheinander                    │
│  [Tag 1 Voll] + [Tag 2] + [Tag 3] + [Tag 4] + [Tag 5] ► ✓    │
│      ↓           ↓          ↓          ↓          ↓           │
│      1.          2.         3.         4.         5.          │
│                                                                │
│  DIFFERENZIELL:                                                │
│  Vollbackup + letztes Differenzielles                         │
│  [Tag 1 Voll] + [Tag 5 Diff.] ────────────────► ✓             │
│      ↓              ↓                                          │
│      1.             2.                                         │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Archivbit

Das **Archivbit** ist ein Dateiattribut, das anzeigt, ob eine Datei seit dem letzten Backup geändert wurde.

| Aktion | Archivbit |
|--------|-----------|
| Datei geändert | Archivbit wird gesetzt (1) |
| Vollbackup | Archivbit wird gelöscht (0) |
| Inkrementelles Backup | Archivbit wird gelöscht (0) |
| Differenzielles Backup | Archivbit bleibt gesetzt (1) |

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Vollbackup** | Komplette Sicherung aller Daten |
| **Inkrementelles Backup** | Änderungen seit letztem Backup |
| **Differenzielles Backup** | Änderungen seit letztem Vollbackup |
| **Archivbit** | Markiert geänderte Dateien |
| **Restore** | Wiederherstellung aus Backup |
| **Backup-Fenster** | Zeitraum für Datensicherung |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was ist der Unterschied zwischen inkrementell und differenziell?
- Welche Backup-Art benötigt am wenigsten Speicher?
- Welche Backups werden für Restore benötigt?

### Wichtig zu merken

- **Inkrementell** = seit **letztem Backup** → geringster Speicher, aufwendigster Restore
- **Differenziell** = seit **letztem Vollbackup** → mittlerer Speicher, einfacherer Restore
- **Vollbackup** = alles → größter Speicher, einfachster Restore
- Für Restore bei Inkrementell: Vollbackup + **ALLE** Inkremente

---

## Übungsaufgaben

### Aufgabe 1
Ein Unternehmen macht am Sonntag ein Vollbackup und von Montag bis Freitag inkrementelle Backups. Am Freitag fällt der Server aus. Welche Backups werden für die Wiederherstellung benötigt?

**Lösung:**
Für die Wiederherstellung werden benötigt:
1. Vollbackup vom **Sonntag**
2. Inkrementelles Backup vom **Montag**
3. Inkrementelles Backup vom **Dienstag**
4. Inkrementelles Backup vom **Mittwoch**
5. Inkrementelles Backup vom **Donnerstag**
6. Inkrementelles Backup vom **Freitag**

**Alle 6 Backups** müssen in der richtigen Reihenfolge wiederhergestellt werden.

### Aufgabe 2
Welche Backup-Art benötigt am wenigsten Speicherplatz und warum?

**Lösung:** **Inkrementelles Backup** benötigt am wenigsten Speicherplatz, weil nur die Änderungen seit dem **letzten Backup** (nicht seit dem Vollbackup) gesichert werden. Bei wenigen täglichen Änderungen sind die einzelnen Backups sehr klein.

### Aufgabe 3
Was ist der Hauptunterschied zwischen inkrementellem und differenziellem Backup?

**Lösung:**
| Aspekt | Inkrementell | Differenziell |
|--------|--------------|---------------|
| **Sichert** | Änderungen seit **letztem Backup** | Änderungen seit **letztem Vollbackup** |
| **Größe** | Bleibt klein | Wächst täglich |
| **Restore** | Voll + alle Inkremente | Voll + letztes Differenzielles |

---

## Querverweise

- [05-05-02 Backup-Strategien](./05-05-02-backup-strategies.md) - 3-2-1 Regel
- [05-02-04 NAS und Verfügbarkeit](../05-02-hardware/05-02-04-nas-availability.md) - Backup-Ziel
- [04-01-01 CIA-Triade](../../04-it-security/04-01-protection-goals/04-01-01-cia-triad.md) - Verfügbarkeit
