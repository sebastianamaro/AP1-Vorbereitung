
---
## Page 139
---

Netzwerke


**[VISUAL: NETWORK SUPPORT HEADER]**
Header image introducing network troubleshooting support scenarios.


## Ausgangsszenario:

Die IT-Firma ConSystem GmbH bietet lhren Kunden auch Support-Dienstleistungen an. Alle Auszu- bildenden werden zeitweise in jedem Unternehmensbereich eingesetzt. Ein kleines Unternehmen, das bei ConSystem GmbH einen Support-Vertrag hat, erhofft sich Unterstützung bei der Behebung einiger Probleme bei den Computernetzwerken.


## Aufgabenstellung:

Als erfahrene/-r Auszubildende/-r unterstützten Sie die Support-Abteilung bei der Betreuung und Beratung des Kunden.

Aufgabe 1: Der Kunde bittet um Hilfe, da er trotz Konfiguration der IP-Adresse seines Desktop PCs keine Netzwerkverbindung aufbauen kann. Auf lhre Bitte stellt der Kunde einen Screenshot seiner IP-Konfiguration zur Verfügung. Erklaren Sie, wo das Problem vermutlich liegt und machen Sie einen Vorschlag, um das Problem zu beheben.


### 111 C:\Windows\syst,em32\cmd.ex,e


## 63


## :\>ipconfig /all


# •••

Ethe rne t - Adapte r LANVerbindung:


**[VISUAL: WINDOWS CMD SCREENSHOT - ipconfig /all OUTPUT]**
A Windows Command Prompt screenshot showing the output of `ipconfig /all` command with network configuration details:

```
C:\>ipconfig /all

Ethernet-Adapter LAN-Verbindung:
   Verbindungsspezifisches DNS-Suffix: .
   Beschreibung . . . . . . . : Broadcom NetXtreme Gigabit Ethernet
   Physikalische Adresse . . : D4-AE-52-68-BF-99
   DHCP aktiviert . . . . . . : Nein
   Autokonfiguration aktiviert: Aktiviert
   IPv4-Adresse . . . . . . . : 192.168.99.12 (Bevorzugt)
   Subnetzmaske . . . . . . . : 255.255.255.0
   Standardgateway . . . . . : 192.168.100.254  ← PROBLEM: Different subnet!
   DNS-Server . . . . . . . . : 192.168.99.254
   NetBIOS über TCP/IP . . . : Aktiviert
```

**Problem to identify:** The IP address (192.168.99.12) and gateway (192.168.100.254) are in different subnets. The gateway should be 192.168.99.254 to be in the same subnet.

### Ne in

Broadc om NetXtreme - GigabitEthe rnet D4AE5268BF99 Ja 192.168.99.12(Bevor z ugt)


# Beschre ibung ... _ ..


# DHCP a ktivier t ...... .


### I Pv4 - Adresse


## Standa rdgateway.

Ve rbindungsspezifi sches DNSSuffi x: . . Phys ikalische Adresse . . . Autokonfiguration aktiviert Subnetzmaske


## Aktivi e rt

255.255.255.0 192.168.100.254 192.168.99.254


## Ne tBIOS übe r TCP/IP

DNSServer .

lhre Erklarung:

137
