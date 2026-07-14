# Schlüssel & referenzielle Integrität

## Lernziele

Nach diesem Kapitel solltest du:
- Primär-, Fremd- und Kombinationsschlüssel unterscheiden
- Referenzielle Integrität erklären
- Die Constraint-Aktionen (CASCADE, SET NULL, RESTRICT) anwenden

---

## Kerninhalt

### Schlüsselarten

| Schlüssel | Bedeutung |
|-----------|-----------|
| **Primärschlüssel (PK)** | eindeutige Identifikation; **NOT NULL**, keine Duplikate, **max. einer** pro Tabelle |
| **Fremdschlüssel (FK)** | verweist auf den PK einer anderen Tabelle |
| **Kombinationsschlüssel** | PK aus **mehreren** Spalten (zusammengesetzt) |
| **Kandidatenschlüssel** | mögliche PKs; einer wird gewählt |

**Kombinationsschlüssel-Beispiel:** Tabelle `teilnahmen(person_id, event_id)` – die Kombination ist eindeutig (eine Person nimmt an einem Event nur einmal teil).

### Referenzielle Integrität

Ein **Fremdschlüssel** muss immer auf einen **existierenden** Datensatz verweisen (keine „verwaisten" Verweise). Das DBMS erzwingt dies.

### Constraint-Aktionen (ON DELETE / ON UPDATE)

Was passiert mit FK-Zeilen, wenn der referenzierte Datensatz geändert/gelöscht wird?

| Aktion | Verhalten |
|--------|-----------|
| **CASCADE** | Änderung/Löschung wird **weitergereicht** (abhängige Zeilen mit) |
| **SET NULL** | FK wird auf **NULL** gesetzt |
| **SET DEFAULT** | FK wird auf den **Standardwert** gesetzt |
| **RESTRICT / NO ACTION** | Aktion wird **verhindert**, solange Verweise bestehen |

```sql
FOREIGN KEY (kunden_id) REFERENCES kunden(id)
    ON DELETE CASCADE
    ON UPDATE RESTRICT;
```

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Primärschlüssel** | Eindeutig, NOT NULL, einer pro Tabelle |
| **Fremdschlüssel** | Verweis auf einen PK |
| **Referenzielle Integrität** | FK verweist immer auf existierenden Datensatz |
| **CASCADE / SET NULL / RESTRICT** | Verhalten bei Änderung/Löschung |

---

## Prüfungstipps

- PK-Regeln (eindeutig, NOT NULL, einer pro Tabelle) sicher nennen.
- **n:m** wird über einen **Kombinationsschlüssel** in der Zwischentabelle gelöst.
- **CASCADE vs. RESTRICT vs. SET NULL** – typische Aufgabe: Verhalten beim Löschen bestimmen.

---

## Übungsaufgabe

**Aufgabe:** Definiere für `bestellung.kunden_id` einen Fremdschlüssel und entscheide begründet zwischen `ON DELETE CASCADE` und `ON DELETE RESTRICT`, wenn ein Kunde gelöscht wird.

---

## Querverweise

- [06-03-02 ER-Modell](./06-03-02-er-modell.md)
- [04-06 Datenintegrität](../../04-it-security/04-06-datenintegritaet.md)
