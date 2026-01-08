
---
## Page 124
---

Fach kom petenz


**[VISUAL: DEBUGGING WORKSHOP HEADER]**
Header image introducing the debugging workshop for apprentices about error finding in software development.


### Ausgangsszenario:

lm Rahmen der Ausbildung der IT-Firma ConSystem GmbH führt der Leiter der Entwicklungsabteilung monatliche Workshops für die Auszubildenden durch. Eines der Workshop-Themen ist die Fehlersuche in der Entwicklung. Dazu hat der Leiter der Entwicklungsabteilung einen kleinen Test erstellt.


### Aufgabenstellung:

Als erfahrene/-r Auszubildende/-r bittet er Sie, eine Musterlosung zu erstellen.


## Test zur Fehlersuche (Debugging)

Aufgabe 1: Der Debugger ist ein Werkzeug zur Untersuchung des Quellcodes. Beantworten Sie in diesem Zusammenhang die folgenden Fragen stichpunktartig.

lhre Antwort:

Woher stammt der Name Debugger?

Was ist ein Haltepunkt allgemein und ein konditionaler Haltepunkt?


**[VISUAL: IDE DEBUGGER SCREENSHOT - Visual Studio/C#]**
A screenshot of an IDE (likely Visual Studio) showing a debugging session with:
- Code editor with a C# program containing a for loop
- A breakpoint (red dot) set on a line
- The Locals/Watch window showing variable values:
  - `args`: string[] (empty)
  - `i`: int = 4
  - `x`: int = 6
- The program is paused at the breakpoint

The code shown:
```csharp
namespace Debugger {
    class Program {
        int x = 0;
        static void Main(string[] args) {
            for (int i = 1; i < 10; i++) {
                x = x + i;      // ← Breakpoint here
            }
        }
    }
}
```

Students must determine what conditional breakpoint condition was set based on the variable values shown (i=4, x=6).

Was versteht man unter Just-in-time-Debugging?

Aufgabe 2: Der folgende Ausschnitt zeigt den Einsatz eines Debuggers in einem einfachen C#- Programm. Es wurde ein Haltepunkt gesetzt und das Programm im Debugging-Modus gestartet. Das Programm stoppt: Welche Bedingung konnte für den Haltepunkt angegeben worden sein?


### '\. o.t> ,gg,-Prog,om

Mogliche Antworten (bitte ankreuzen):

1 - na.spac< Dtbucc<r

□ X>5

{ ~lass Pro ca

□ i > 5


### int X • 8;

static void Hain(strine[J ares) {

□ i ==4

t

□ X== 6

for (lnt i ■ 1; i < 10; i++) {


### X •


### X ♦ i ;


### o

□ xo/oi == O

□ i > 4


### 100'14>

•

Lok.ol

Nam<

Wen.

Typ

stnng(i

(stnng{OJI


### CiiiJ aros

.. í .. X

IRt ,nt

◄ 6

122
