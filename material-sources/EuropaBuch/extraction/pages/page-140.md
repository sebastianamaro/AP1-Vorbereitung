
---
## Page 140
---


### Fach kom petenz

1hr Losungsvorschlag:

Aufgabe 2: Aus der obigen Darstellung ist ersichtlich, dass der Kunde die IP-Adresse handisch kanfiguriert hat. Sie schlagen dem Kunden var die IP-Adressen zukünftig über DHCP zu vergeben.

Wafür steht die Abkürzung DHCP? Nen nen Sie zwei Varteile van DHCP.


**[VISUAL: DHCP HANDSHAKE SEQUENCE DIAGRAM]**
A sequence diagram showing the four-step DHCP handshake between client and server:

```
DHCP Client                                    DHCP Server
     |                                              |
     |  ──── 1. DHCP DISCOVER (broadcast) ────→    |
     |         "I need an IP address"               |
     |                                              |
     |  ←──── 2. DHCP OFFER ────────────────       |
     |         "Here's 192.168.1.10 available"     |
     |                                              |
     |  ──── 3. DHCP REQUEST ────────────→         |
     |         "I'll take 192.168.1.10"            |
     |                                              |
     |  ←──── 4. DHCP ACK ──────────────           |
     |         "Confirmed, it's yours"              |
     |                                              |
```

Students must label the four arrows with: DHCP DISCOVER, DHCP OFFER, DHCP REQUEST, DHCP ACK

Aufgabe 3: Um dem Kunden die Funktiansweise van DHCP anschaulich zu erlautern, erstellen Sie ein Diagramm. Schreiben Sie die Bezeichnungen der vargegebenen DHCP-Nachrichten an die entsprechenden Pfeile im Diagramm.


### DHCP ACK, DHCP DISCOVER, DHCP OFFER, DHCP REQUEST

DHCP Client

DHCP Server

138
