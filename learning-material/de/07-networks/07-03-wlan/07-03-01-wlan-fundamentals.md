# WLAN-Grundlagen

## Lernziele

Nach diesem Kapitel solltest du:
- Die Grundlagen von WLAN verstehen
- Wichtige WLAN-Standards kennen (802.11)
- WLAN-Sicherheitsprotocols unterscheiden können
- Frequenzbänder und deren Eigenschaften kennen

---

## Kerninhalt

### Was ist WLAN?

```
┌────────────────────────────────────────────────────────────────────┐
│                         WLAN                                       │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   WLAN = Wireless Local Area Network                               │
│   Wi-Fi = Wireless Fidelity (Marketingname)                        │
│                                                                     │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ WLAN ermöglicht die drahtlose Verbindung von Geräten       │ │
│   │ über Funkwellen im lokalen Netzwerk.                        │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   Typische WLAN-Infrastruktur:                                    │
│                                                                     │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │                                                              │ │
│   │        ┌──────────┐                                         │ │
│   │        │ Internet │                                         │ │
│   │        └────┬─────┘                                         │ │
│   │             │                                                │ │
│   │        ┌────┴─────┐                                         │ │
│   │        │  Router  │                                         │ │
│   │        └────┬─────┘                                         │ │
│   │             │                                                │ │
│   │    ┌───────┴───────┐                                        │ │
│   │    │  Access Point │                                        │ │
│   │    │     ((( )))   │                                        │ │
│   │    └───────────────┘                                        │ │
│   │        ╱    │    ╲                                          │ │
│   │    ┌────┐ ┌────┐ ┌────┐                                    │ │
│   │    │ PC │ │ 📱 │ │ 💻 │                                    │ │
│   │    └────┘ └────┘ └────┘                                    │ │
│   │                                                              │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### WLAN-Standards (IEEE 802.11)

```
┌────────────────────────────────────────────────────────────────────┐
│                    WLAN-STANDARDS                                  │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Standard │ Name      │ Frequenz    │ Max. Speed │ Jahr          │
│   ─────────┼───────────┼─────────────┼────────────┼──────────────│
│   802.11b  │ Wi-Fi 1   │ 2,4 GHz     │ 11 Mbit/s  │ 1999         │
│   802.11a  │ Wi-Fi 2   │ 5 GHz       │ 54 Mbit/s  │ 1999         │
│   802.11g  │ Wi-Fi 3   │ 2,4 GHz     │ 54 Mbit/s  │ 2003         │
│   802.11n  │ Wi-Fi 4   │ 2,4/5 GHz   │ 600 Mbit/s │ 2009         │
│   802.11ac │ Wi-Fi 5   │ 5 GHz       │ 6,9 Gbit/s │ 2013         │
│   802.11ax │ Wi-Fi 6   │ 2,4/5/6 GHz │ 9,6 Gbit/s │ 2019         │
│                                                                     │
│   Die wichtigsten für die Prüfung:                                │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ 802.11n (Wi-Fi 4): Erster Standard mit beiden Frequenzen   │ │
│   │ 802.11ac (Wi-Fi 5): Nur 5 GHz, sehr schnell                │ │
│   │ 802.11ax (Wi-Fi 6): Neuester Standard, energieeffizient    │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Frequenzbänder

```
┌────────────────────────────────────────────────────────────────────┐
│                    FREQUENZBÄNDER                                  │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   2,4 GHz Band                                                     │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Vorteile:                        Nachteile:                │  │
│   │ • Größere Reichweite             • Überfüllt (viele        │  │
│   │ • Bessere Durchdringung            Geräte nutzen es)       │  │
│   │   von Wänden                     • Mehr Störungen          │  │
│   │ • Mehr kompatible Geräte         • Nur 3 überlappungsfreie │  │
│   │                                    Kanäle (1, 6, 11)       │  │
│   │                                  • Langsamer               │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   5 GHz Band                                                       │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Vorteile:                        Nachteile:                │  │
│   │ • Höhere Geschwindigkeit         • Geringere Reichweite    │  │
│   │ • Weniger Störungen              • Schlechtere Durch-      │  │
│   │ • Mehr Kanäle verfügbar            dringung von Wänden     │  │
│   │ • Weniger überfüllt              • Nicht alle Geräte       │  │
│   │                                    unterstützen es         │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   Zusammenfassung:                                                 │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ 2,4 GHz = Reichweite, aber langsamer und mehr Störungen   │ │
│   │ 5 GHz   = Schnell, aber kürzere Reichweite                │ │
│   │                                                              │ │
│   │ Moderne Router bieten oft BEIDE Frequenzen (Dual-Band)     │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### WLAN-Sicherheit

```
┌────────────────────────────────────────────────────────────────────┐
│                    WLAN-SICHERHEIT                                 │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Verschlüsselungsprotocols (chronologisch):                     │
│                                                                     │
│   WEP (Wired Equivalent Privacy)                                  │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ ✗ VERALTET und UNSICHER!                                   │  │
│   │ • Leicht zu knacken (binnen Minuten)                       │  │
│   │ • Sollte NIEMALS mehr verwendet werden                     │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   WPA (Wi-Fi Protected Access)                                    │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ ✗ VERALTET                                                 │  │
│   │ • Verbesserung gegenüber WEP                               │  │
│   │ • TKIP-Verschlüsselung (auch unsicher geworden)            │  │
│   │ • Nicht mehr empfohlen                                     │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   WPA2 (Wi-Fi Protected Access 2)                                 │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ ✓ AKTUELLER STANDARD                                       │  │
│   │ • AES-Verschlüsselung (stark)                              │  │
│   │ • Seit 2004 verfügbar                                      │  │
│   │ • WPA2-Personal (PSK) für Heimnetworks                    │  │
│   │ • WPA2-Enterprise (802.1X) für Unternehmen                 │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   WPA3 (Wi-Fi Protected Access 3)                                 │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ ✓ NEUESTER STANDARD (seit 2018)                            │  │
│   │ • Noch stärkere Verschlüsselung                            │  │
│   │ • Schutz gegen Brute-Force-Angriffe                        │  │
│   │ • Forward Secrecy                                          │  │
│   │ • Wird nach und nach eingeführt                            │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   ⚠ PRÜFUNGSRELEVANT: WEP = unsicher, WPA2/WPA3 = sicher        │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Wichtige WLAN-Begriffe

```
┌────────────────────────────────────────────────────────────────────┐
│                   WLAN-BEGRIFFE                                    │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   SSID (Service Set Identifier)                                   │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Der Name des WLAN-Netzwerks                              │  │
│   │ • Wird vom Access Point ausgestrahlt                       │  │
│   │ • Kann versteckt werden (Hidden SSID)                      │  │
│   │ • Beispiel: "MeinHeimNetz" oder "Firmen-WLAN"             │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   Access Point (AP)                                               │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Sendet das WLAN-Signal                                   │  │
│   │ • Verbindet WLAN-Geräte mit dem LAN                       │  │
│   │ • Oft in Router integriert                                 │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   PSK (Pre-Shared Key)                                            │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Das WLAN-Passwort                                        │  │
│   │ • Bei WPA2-Personal verwendet                              │  │
│   │ • Alle Nutzer verwenden denselben Schlüssel               │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   Kanal                                                           │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Frequenzbereich für die Kommunikation                    │  │
│   │ • 2,4 GHz: Kanäle 1-13                                     │  │
│   │ • Überlappungsfreie Kanäle: 1, 6, 11                       │  │
│   │ • Bei Störungen: Anderen Kanal wählen                      │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### WLAN-Betriebsmodi

```
┌────────────────────────────────────────────────────────────────────┐
│                   WLAN-BETRIEBSMODI                                │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   INFRASTRUKTUR-MODUS (Standard)                                  │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │                                                             │  │
│   │        ┌─────────────┐                                     │  │
│   │        │ Access Point│                                     │  │
│   │        │   ((( )))   │                                     │  │
│   │        └──────┬──────┘                                     │  │
│   │         ╱     │     ╲                                      │  │
│   │     ┌────┐ ┌────┐ ┌────┐                                  │  │
│   │     │ A  │ │ B  │ │ C  │                                  │  │
│   │     └────┘ └────┘ └────┘                                  │  │
│   │                                                             │  │
│   │   • Alle Geräte verbinden sich mit dem Access Point       │  │
│   │   • Kommunikation läuft über den AP                        │  │
│   │   • Typisch für Heim- und Firmennetworks                 │  │
│   │                                                             │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   AD-HOC-MODUS                                                    │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │                                                             │  │
│   │     ┌────┐         ┌────┐                                  │  │
│   │     │ A  │←───────→│ B  │                                  │  │
│   │     └────┘         └────┘                                  │  │
│   │          ╲         ╱                                       │  │
│   │           ╲       ╱                                        │  │
│   │            ┌────┐                                          │  │
│   │            │ C  │                                          │  │
│   │            └────┘                                          │  │
│   │                                                             │  │
│   │   • Direkte Verbindung zwischen Geräten                   │  │
│   │   • Kein Access Point nötig                                │  │
│   │   • Für temporäre Netzwerke                               │  │
│   │                                                             │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **WLAN** | Wireless Local Area Network |
| **802.11** | IEEE-Standard für WLAN |
| **SSID** | Name des WLAN-Netzwerks |
| **WPA2** | Aktueller Sicherheitsstandard |
| **PSK** | Pre-Shared Key (Passwort) |
| **Access Point** | WLAN-Sender/Empfänger |
| **Dual-Band** | 2,4 GHz und 5 GHz |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Unterschied 2,4 GHz vs. 5 GHz?
- Welche WLAN-Verschlüsselung ist sicher?
- Was bedeutet SSID?

### Wichtig zu merken

- **WEP** = unsicher, **WPA2/WPA3** = sicher
- **2,4 GHz:** Mehr Reichweite, langsamer, mehr Störungen
- **5 GHz:** Weniger Reichweite, schneller, weniger Störungen
- **SSID** = WLAN-Name
- **802.11ac** = Wi-Fi 5, **802.11ax** = Wi-Fi 6
- Kanäle **1, 6, 11** bei 2,4 GHz überlappen nicht

---

## Übungsaufgaben

### Aufgabe 1
Welches Frequenzband sollten Sie wählen, wenn Sie maximale Reichweite benötigen?

**Lösung:**
**2,4 GHz Band**

Begründung: Das 2,4 GHz Band hat eine größere Reichweite und bessere Durchdringung von Wänden und Hindernissen. Allerdings ist es anfälliger für Störungen und langsamer als das 5 GHz Band.

### Aufgabe 2
Ein Kunde verwendet noch WEP-Verschlüsselung. Was empfehlen Sie?

**Lösung:**
Dringend auf **WPA2** oder **WPA3** umstellen!

Begründung:
- WEP ist seit Jahren als unsicher bekannt
- WEP kann in Minuten geknackt werden
- WPA2 mit AES-Verschlüsselung ist der aktuelle Standard
- WPA3 ist noch sicherer und zukunftssicher

### Aufgabe 3
Was bedeutet die Bezeichnung 802.11ac?

**Lösung:**
**802.11ac** ist ein WLAN-Standard (Wi-Fi 5):
- **802.11** = IEEE-Standard für WLAN
- **ac** = Variante/Generation des Standards
- Nutzt das **5 GHz Band**
- Maximale Geschwindigkeit: **6,9 Gbit/s**
- Eingeführt: 2013

---

## Querverweise

- [04-03-01 Technische Schutzmaßnahmen](../../04-it-security/04-03-protective-measures/04-03-01-technical-measures.md) - WLAN-Sicherheit
- [07-05 Netzwerk-Hardware](../07-05-network-hardware.md) - Access Points
- [07-04-01 Strukturierte Verkabelung](../07-04-cabling/07-04-01-structured-cabling.md) - LAN-Infrastruktur
