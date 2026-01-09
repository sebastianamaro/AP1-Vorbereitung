# Page 57 - EPK-Konnektoren (Fortsetzung)

## EPK-Konnektoren (Fortsetzung)

| Symbol | Beschreibung |
|--------|--------------|
| XOR | **Konnektor "Exklusives Oder" (XOR)** - Eine Funktion wird ausgeführt, wenn genau ein Ereignis von mehreren eingetreten ist. ODER Nach einer Funktion tritt genau eins von mehreren Ereignissen ein. ODER Ein Ereignis tritt ein, nachdem eine von mehreren direkt vorangestellten Funktionen ausgeführt wurde. |
| ∨ (OR) | **Konnektor "Offenes Oder" (OR)** - Eine Funktion wird ausgeführt, wenn mindestens ein Ereignis von mehreren eingetreten ist. ODER Nach einer Funktion tritt mindestens eins von mehreren Ereignissen ein. ODER Ein Ereignis tritt ein, nachdem mindestens eine von mehreren direkt vorangestellten Funktionen ausgeführt wurden. |

### Beispiel: EPK-Diagramme

**a) EPK: Wareneingangsbearbeitung**
```
Ware ist eingetroffen → Ware prüfen → XOR
  ↓                       ↓              ↓
Bestellung           Wareneingangsstelle  ├→ Ware ist freigegeben → Fertigungsdurchführung
  ↓                                       ├→ Ware ist gesperrt → Qualitätsprüfung
Lieferschein                              └→ Ware wurde abgelehnt
  ↓
Prüfergebnis
```

**b) EPK: Fertigungsdurchführung**
```
Fertigungsdurchführung ← Ware ist freigegeben
                      ← Fertigungstermin ist eingetreten
        ↓
       AND
        ↓
Fertigungsdurchführung
        ↓
       AND
   ↓         ↓
Material ist  Fertigungsauftrag ist
eingelagert   rückgemeldet
```

