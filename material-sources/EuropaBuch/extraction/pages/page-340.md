
---
## Page 340
---

Losungen


# 3.1


# Prüfungssimulation 1


### Ausgangsszenario:

Das Reisebüro ,,Up&away" verfügt momentan über 4 Arbeitsplatze mit Kundenservice. Nur zwei der Arbeitsplatze sind mit einem PC und lnternetzugang über LAN-Kabel ausgestattet. Die beiden anderen

Platze teilen sich einen Laptop ohne lnternetzugang, da kein WLAN vorhanden ist. Die Geschaftsführung des Reisbüros moclhte in Zukunft 4 moderne Arbeitsplatze mit Optionen auf Erweiterbarkeit.


## Handlungsschritt 1 [24 Punkte]:


### Kundenbedarfe zielgruppengerecht ermitteln

la) (4 Punkte]: 1hr Vorgesetzter bittet Sie, eine geeignete Methode für die genaue Bedarfsermitt- lung des Kunden auszuwahlen und diese Methode kurz zu beschreiben.

In dieser Situation ist das direkte Gesprach mit dem Kunden sinnvoll. Bei dieser direkten Be- darfsermittlung werden dem Kunden moglichst offene Fragen gestellt, auf die der Kunde nicht einfach mit jo oder nein antworten kann. Damit soll zu moglichst vielen lnformationen führen, die im Anschluss strukturiert werden konnen, um dann die genaue Planung der weiteren Vor- gehensweise zu beginnen.

lb) (12 Punkte]: Nach der Bedarfsanalyse soll dem Kunden ein erster Planungsentwurf prasentiert werden. Dazu erhalten Sie den Auftrag, einen Netzwerkplan zu erstellen. Die Arbeitsplatze und Kom- ponenten sind vorgegeben.

lm Rahmen der Planung sind eine Vielzahl an Punkten zu klaren. Diese Punkte haben wiederum Auswirkungen auf den zu erstellenden Netzwerkplan. Jeder Arbeitsplatz soll künftig mit einem kabelgebundenen Netzwerkanschluss versehen werden. In den meisten Fallen ist es sinnvoll mehr als eine Netzwerkdose pro Arbeitsbereich vorzusehen. So konnen beispielsweise Drucker oder Voice-over-lP-Telefone an das Netzwerk angeschlossen werden.

Bei der Wahl der Komponenten spielen neben Leistungsfahigkeit und Preis auch ergonomische Aspekte eine wichtige Rolle. Die Monitore sollten eine ausreichende Groll,e und Bildwieder- holfrequenz haben. Die aktiven Netzwerkkomponenten wie Switch oder Router sollten nach Moglichkeit gerauschlos oder gerauscharm sein. Auch bei der Positionierung von Monitor und anderen Arbeitsgeraten ist auf Ergonomie am Arbeitsplatz zu achten.

In der abgebildeten Musterlosung werden zu jedem Arbeitsplatz zwei Netzwerkkabel der Ka- tegorie 7 (CAT7-Kabel) gelegt. An die Decke werden ebenfalls zwei CAT7-Kabel gelegt, wovon eines für den Access Point verwendet wird. Der Access Point ist idealerweise Power-over-Ether- net-fahig (PoE) und der ebenfalls PoE-fühige Switch liefert die Spannungsversorgung.


### 338


**[VISUAL: TRAVEL AGENCY NETWORK PLAN - SOLUTION]**
A complete network topology diagram for the "Up&away" travel agency showing:

```
                          ┌─────────────────┐
                          │   Internet      │
                          └────────┬────────┘
                                   │
                          ┌────────▼────────┐
                          │     Router      │
                          │  (PoE-capable)  │
                          └────────┬────────┘
                                   │
                          ┌────────▼────────┐
                          │  PoE Switch     │ ← Provides power to Access Point
                          │  (8+ ports)     │
                          └┬───┬───┬───┬───┬┘
                           │   │   │   │   │
              ┌────────────┘   │   │   │   └────────────┐
              │                │   │   │                │
              ▼                ▼   │   ▼                ▼
    ┌─────────────────┐  ┌─────────┴───────┐  ┌─────────────────┐
    │  Arbeitsplatz 1 │  │   Access Point  │  │  Arbeitsplatz 3 │
    │    ┌───┐ ┌───┐  │  │   (Ceiling PoE) │  │    ┌───┐ ┌───┐  │
    │    │PC │ │   │  │  └─────────────────┘  │    │PC │ │   │  │
    │    └───┘ └───┘  │                       │    └───┘ └───┘  │
    │  2x CAT7 ports  │                       │  2x CAT7 ports  │
    └─────────────────┘                       └─────────────────┘

    ┌─────────────────┐                       ┌─────────────────┐
    │  Arbeitsplatz 2 │                       │  Arbeitsplatz 4 │
    │    ┌───┐ ┌───┐  │                       │    ┌───┐ ┌───┐  │
    │    │PC │ │VoIP│ │                       │    │PC │ │Printer│
    │    └───┘ └───┘  │                       │    └───┘ └───┘  │
    │  2x CAT7 ports  │                       │  2x CAT7 ports  │
    └─────────────────┘                       └─────────────────┘
```

Key features of the solution:
- 4 workstations with 2x CAT7 network ports each (for PC + VoIP/printer)
- PoE-capable switch providing power to ceiling-mounted Access Point
- WLAN coverage via central Access Point
- Structured cabling with CAT7 for future-proofing
- Ergonomic considerations for monitor placement and noise reduction
