# Page 80 - Aktivitätsdiagramm Beispiel & Anwendungsfalldiagramm

## Aktivitätsdiagramm Beispiel

Ein Beispiel-Aktivitätsdiagramm zeigt den Ablauf einer Klausurbewertung:

1. **Start** → Punkte addieren
2. **Entscheidung:** [Punkte < 100] oder [Punkte >= 100]
   - Bei Punkte < 100: Klausur verfehlt
   - Bei Punkte >= 100: Klausur bestanden
3. **Gabel (Fork):** Note ermitteln
4. **Parallele Aktivitäten:** Note veröffentlichen | Schein ausstellen
5. **Zusammenführen (Join)** → **Ende**

---

## Anwendungsfalldiagramm

Ein **Anwendungsfalldiagramm** (Use Case Diagram) ist ein UML-Diagramm, das die Interaktionen zwischen einem System und seinen Benutzern zeigt. Es wird verwendet, um die funktionalen Anforderungen eines Systems zu identifizieren und die Beziehungen zwischen Akteuren und Anwendungsfällen zu modellieren.

### Symbole

| Symbol | Bedeutung |
|--------|-----------|
| Ellipse mit Text | **Anwendungsfall** - Eine Funktion oder ein Prozess, der vom System bereitgestellt wird. |
| Strichmännchen | **Akteur** - Eine Person oder ein System, das einen Anwendungsfall auslöst. |

