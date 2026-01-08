
---
## Page 300
---

Losungen

Ausgehend van der Liste an Protokollen, die Sie mit den Auszubildenden gesammelt haben, erstellen

Sie nun eine kurze Übersicht einiger wichtiger Protokolle.


### Aufgabe 4: Vervollstandigen Sie die Tabelle.

Abkürzung

Port


### Kurzbeschreibung


### Vollstandiger


### Protokollname

DNS

Domain Name System

53 (TCP/ UDP)

DNS ist ein wichtiger Dienst in IP-Netzwerken. Durch DNS wird die Namensauflosung realisiert. So kann beispielweise der Name www.europa-lehrmittel.de in eine

IP-Adresse (z.B. 91.250.85.179) aufgelost werden.

SMTP wird schwerpunktmafüg zum Einliefern und Weiterleiten von

SMTP

Simple Mail Transfer Protocol

25 (TCP) 465 (TCP - mit TLS/ SSL)

Emails verwendet. Haufig wird der TCP-Port 25 verwendet. Allerdings werden teilweise auch die TCP- Ports 465 und 587 eingesetzt.

IMAPS

993 (TCP)

Internet Message Access Protocol over TLS/SSL

IMAPS ist die abgesicherte Variante von IMAP und wird zum Abruf von Emails verwendet.

TCP

Transport Control Protocol

TCP wird verwendet, um eine bidirektionale Verbindung zwischen zwei Netzwerkgeraten aufzubauen. Durch TCP wird eine zuverlassige Übertragung gewahrleistet, da alle Segmente mit entsprechenden Nummern versehen werden. Ver- lorene Pakete konnen somit erneut angefordert werden.

Bei UDP wird keine Verbindung zwischen Sender und Empfanger aufgebaut. Stattdessen werden die

UDP

User Datagram Protocol

Datagramme ungesichert versen- det. Dies ist bei Anwendungen empfehlenswert, die eine geringe Latenz benotigen (z.B. VolP oder Onlinespiele).

Mit Hilfe von Telnet kann ein Fern- zugriff auf diverse Systeme realisiert werden. Allerdings wird bei Telnet

Telnet

Teletype Network

keine Verschlüsselung genutzt und 23 (TCP) somit das Passwort im Klartext übertragen. Meist wird deshalb SSH genutzt.

298


**[VISUAL: NETWORK PROTOCOLS TABLE - SOLUTION]**
A completed table of network protocols with:

```
┌──────────┬────────────────────────────────────┬─────────────────┬─────────────────────┐
│ Abbrev.  │ Full Name                          │ Port            │ Description         │
├──────────┼────────────────────────────────────┼─────────────────┼─────────────────────┤
│ DNS      │ Domain Name System                 │ 53 (TCP/UDP)    │ Name resolution     │
│ SMTP     │ Simple Mail Transfer Protocol      │ 25, 465 (TLS)   │ Email sending       │
│ IMAPS    │ Internet Message Access Protocol   │ 993 (TCP)       │ Secure email access │
│ TCP      │ Transport Control Protocol         │ -               │ Reliable transport  │
│ UDP      │ User Datagram Protocol             │ -               │ Fast transport      │
│ Telnet   │ Teletype Network                   │ 23 (TCP)        │ Remote access       │
└──────────┴────────────────────────────────────┴─────────────────┴─────────────────────┘
```
