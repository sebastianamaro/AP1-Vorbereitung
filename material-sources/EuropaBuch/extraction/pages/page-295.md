
---
## Page 295
---

Fachkompetenz Software


**[VISUAL: CONSYSTEM GMBH LOGO]**
Company logo header for the ConSystem GmbH training materials.


### Ausgangsszenario:

lm Rahmen der Ausbildung der IT-Firma ConSystem GmbH führt der Leiter der Entwicklungsabteilung monatliche Workshops für die Auszubildenden durch. Eines der Workshop-Themen ist die Fehlersuche in der Entwicklung. Dazu hat der Leiter der Entwicklungsabteilung einen kleinen Test erstellt.


### Aufgabenstellung:

Als erfahrene/-r Auszubildende/-r bittet er Sie, eine Musterlosung zu erstellen.


## Test zur Fehlersuche (Debugging)

Aufgabe 1: Der Debugger ist ein Werkzeug zur Untersuchung des Quellcodes. Beantworten Sie in diesem Zusammenhang die folgenden Fragen stichpunktartig.

lhre Antwort:

Woher stammt der Name Debugger?

Der Name beruht auf einem Vorfall in den Anfangen der Computer. In den 1940er Jahren hatte sich eine Motte in einem Relais eines der ersten Computer verfangen und sorgte für eine Fehlfunktion. Dieser Fehler im Computer wurde dann Bug (engl. für lnsekt) genannt. Ein Debugger ist also ein Tool, mit dem der Computer von Bugs befreit werden kann.

Was ist ein Haltepunkt allgemein und ein konditionaler Haltepunkt?

Ein Haltepunkt ist eine Markierung im Programmcode. Nach dem Starten stoppt das System an dieser Stelle und der Entwickler kann beispielsweise den Zustand von Variablen betrachten. Bei einem konditio- nalen Haltepunkt kann eine Bedingung angegeben werden, wann das Programm zu stoppen hat. Damit w ird das Debugging besser steuerbar.

Was versteht man unter Just-in-time-Debugging?

Unter Just-in-time-Debugging versteht man die Moglichkeit, dass wahrend des Debugging-Prozesses Anweisungen im Quelltext geandert werden konnen und der weitere Programmlauf direkt darauf reagiert. Damit wird das Debugging sehr flexibel.

Aufgabe 2: Der folgende Ausschnitt zeigt den Einsatz eines Debuggers in einem einfachen C#- Programm. Es wurde ein Haltepunkt gesetzt und das Programm im Debugging-Modus gestartet. Das Programm stoppt: Welche Bedingung konnte für den Haltepunkt angegeben worden sein?

Mogliche Antworten (bitte ankreuzen):


**[VISUAL: DEBUGGER SCREENSHOT - CONDITIONAL BREAKPOINT SOLUTION]**
A Visual Studio debugger screenshot showing:
- C# code with a for loop (i from 1 to 10)
- Variable x being incremented by i
- A breakpoint with condition checking
- Locals panel showing current variable values (x=6, i=4)
- Multiple choice options for identifying the breakpoint condition (correct: X>5 or i==4)


### - naaespac< D<bucc<r

{

181 X>5

□ i > 5


### class Pr


### r

{ static void Hain(strine[J ares) {


### int X a 8;

181 i ==4

for (int i • 1; i < 10; ¡._.) {

181 X== 6


### X •


### X ♦ i;

o

□ xo/oi == O

□ i > 4

100~ •

• q X

lokal

Name

Typ

Wm

(stnng(O)t

.. 1 .. X


### int

stnngG ,nt

◄ 6

293


**[VISUAL: DEBUGGER SCREENSHOT - CONDITIONAL BREAKPOINT SOLUTION]**
A Visual Studio debugger screenshot showing:
- C# code with a for loop (i from 1 to 10)
- Variable x being incremented by i
- A breakpoint with condition checking
- Locals panel showing current variable values (x=6, i=4)
- Multiple choice options for identifying the breakpoint condition (correct: X>5 or i==4)
