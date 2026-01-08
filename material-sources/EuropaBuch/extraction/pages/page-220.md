
---
## Page 220
---


### Losungen


**[VISUAL: SOLUTION - GANTT CHART WITH CRITICAL PATH]**
A completed Gantt chart showing the software project timeline with all phases plotted and the critical path marked:

```
Time →  1  2  3  4  5  6  7  8  9 10 11 12 13 14 15 16 17 18 19 20 21 22
Phase   ├──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┴──┤
────────┼──────────────────────────────────────────────────────────────┤
A (1)   ■                                           (Analyse)
B (4)      ■■■■                                     (Planung) ← CRITICAL
C (3)      ░░░                                      (Design 1) has buffer
D (6)            ■■■■■■                             (Modul 1) ← CRITICAL
E (4)            ■■■■                               (Design 2) ← CRITICAL
F (8)                        ■■■■■■■■               (Modul 2) ← CRITICAL
G (5)         ░░░░░                                 (Testphase) has buffer
H (3)                                    ■■■        (Übergabe) ← CRITICAL
```

Critical path: A → B → D → F → H (or A → B → E → F → H)
Total project duration: 22 time units
Hatched areas (░) indicate buffer/float time


## Ausgangsszenario:

Als Auszubildende/-r der IT-Firma ConSystem GmbH sallen Sie weitere Erfahrungen in der Projektpla- nung sammeln. Dazu werden Sie mit der Zeitplanung eines Softwareprojektes betraut.


## Aufgabenstellung:

Die Phasen für das Projekt sind bereits vorgeplant. Setzen Sie diese Vorgabe in einem Gantt-Diagramm um und kennzeichnen Sie den kritischen Pfad des Projektes.


## Planung des Software-Projektes

Vorganger


### Vorplanung der Phasen:


# -


# Phase -

A Analyse

A

B Planung 4

A


## e

Design 1 3

C, B

D Modul 1 6

B

E Design 2 4

E, D


### F

Modul 2 8

G Testphase Design 1 5


## e

F, G


### H

Übergabe 3


### Muster-Gantt-Diagramm (inkl. kritischem Pfad)


### Zeit


### 18

10 11 12 13 14 15 16 17 19 20 21 22


### Phase


### Dauer


### Vorganger

Nr. 1 2 3 4 5 6 7 8 9


### i--t

A Analyse 1 -


### B


### Planung


### Design 1


# r,,

4 A e 3 A

D Modul 1 6 C, B


### E


### Design 2

4 B


# ""-.........

F Modul 2 8 E, D


### Testphase

G 5 e 1

H Übergabe 3 F, G


# ""-""-;-.... ""-""-""-""-""-""-.........


# /\


# affi~rt = Pufferzeiten J

~

218


**[VISUAL: GANTT CHART LEGEND]**
Legend showing: Solid bars = critical path activities, Hatched bars = activities with buffer time (Pufferzeiten)
