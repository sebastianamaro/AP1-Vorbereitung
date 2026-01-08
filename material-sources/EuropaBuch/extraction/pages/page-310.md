
---
## Page 310
---


### Losungen


### Fortsetzung Aufgabe 3:

lhre Antwort:

Warum ist die Vergabe eines ,,/64-Subnetzes" die Regel?

Für 1Pv6 ist Verwendung von ,,Autoconfiguration" angedacht. Hierbei entspricht die ,,Interface ID" einem zufalligen Wert oder der EUl64 (Extended Unique ldentifier 64 Bit) der Netzwerkkar- te, welcher aus der MAC-Adresse ermittelt werden kann. Da der Hostanteil damit 64 Bit um- fasst, ist die Vergabe eines ,,/64-Subnetzes" normal.

Welche Funktion haben die ,,Privacy Extensions"?

Die ,,Privacy Extensions" sind Erweiterungen zu 1Pv6, die zum Schutz der Privatsphare keinen direkten Rückschluss auf die Hardwareadresse des Nutzers aus der 1Pv6-Adresse zulasst. Für offentlich zugangliche Dienste werden die Privacy Extensions teilweise deaktiviert.

Aufgabe 4 : Dem Kunden ist die Bedeutung des Begriffs ,,DS-Lite" nicht bekannt. Erklaren Sie dem Kunden in einfachen Worten die ,,DS-Lite"-Technologie.

lhre Erklarung:

DS-Lite steht für Dual Stack Lite. Bei einem Dual Stack Lite Anschluss erhalt der Teilnehmer keine offentliche 1Pv4-Adresse sondern es wird eine prívate 1Pv4-Adresse und ein globales 1Pv6 Prafix zugewiesen. Soll 1Pv4-Datenverkehr transportiert werden, werden am Endkunden-Router Pakete mit einer privaten 1Pv4-Adresse in 1Pv6-Pakete verpackt. Man spricht hier von einer 4-in- 6-Tunnel-Technologie. Am Endpunkt des 4-in-6-Tunnels wird der 1Pv6-Header entfernt. Um das Paket mit der privaten 1Pv4-Adresse in das offentliche 1Pv4-Netz einzuschleusen zu ké:innen, nimmt der Internet Service Provider eine Adressumsetzung von der privaten 1Pv4-Adresse auf offentliche 1Pv4-Adressen vor. Man spricht hier von Carrier Grade NAT (CG-NAT).

308


**[VISUAL: CONSYSTEM GMBH LOGO]**
Company logo header for the ConSystem GmbH training materials.

**[VISUAL: DS-LITE ARCHITECTURE DIAGRAM]**
A diagram showing Dual Stack Lite technology:
- Customer router with private IPv4 + IPv6 prefix
- 4-in-6 tunnel to ISP
- Carrier Grade NAT (CG-NAT) for IPv4 address translation
