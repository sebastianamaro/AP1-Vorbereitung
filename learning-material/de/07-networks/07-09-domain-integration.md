# Domänenintegration [NEU 2025]

## Lernziele

Nach diesem Kapitel solltest du:
- Das Konzept einer Windows-Domäne verstehen
- Den Ablauf der Domänenintegration kennen
- Voraussetzungen und Vorteile nennen können
- Die wichtigsten Schritte durchführen können

---

## Kerninhalt

### Was ist eine Domäne?

```
┌────────────────────────────────────────────────────────────────────┐
│                       WINDOWS-DOMÄNE                               │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   Definition:                                                      │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │ Eine Windows-Domäne ist ein zentrales Verwaltungsmodell,    │ │
│   │ bei dem Benutzer und Computer von einem Domain Controller   │ │
│   │ verwaltet werden.                                            │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
│   Vergleich: Arbeitsgruppe vs. Domäne                             │
│                                                                     │
│   ARBEITSGRUPPE                     DOMÄNE                         │
│   ┌──────────────────────┐         ┌──────────────────────┐       │
│   │ • Dezentral          │         │ • Zentral            │       │
│   │ • Jeder PC verwaltet │         │ • Domain Controller  │       │
│   │   eigene Benutzer    │         │   verwaltet alles    │       │
│   │ • Max. 10-20 PCs     │         │ • Tausende PCs möglich│      │
│   │ • Heimnetworks      │         │ • Unternehmen        │       │
│   │ • Keine zentrale     │         │ • Zentrale Richtlinien│      │
│   │   Kontrolle          │         │ • Single Sign-On     │       │
│   └──────────────────────┘         └──────────────────────┘       │
│                                                                     │
│   Domänenstruktur:                                                 │
│   ┌─────────────────────────────────────────────────────────────┐ │
│   │                                                              │ │
│   │           ┌────────────────────┐                            │ │
│   │           │ Domain Controller  │                            │ │
│   │           │ (Active Directory) │                            │ │
│   │           └─────────┬──────────┘                            │ │
│   │                     │                                        │ │
│   │        ┌────────────┼────────────┐                          │ │
│   │        │            │            │                          │ │
│   │   ┌────┴────┐  ┌────┴────┐  ┌────┴────┐                    │ │
│   │   │  PC 1   │  │  PC 2   │  │  PC 3   │                    │ │
│   │   │(Domäne) │  │(Domäne) │  │(Domäne) │                    │ │
│   │   └─────────┘  └─────────┘  └─────────┘                    │ │
│   │                                                              │ │
│   │   Alle PCs sind Mitglied der Domäne "firma.local"          │ │
│   │                                                              │ │
│   └─────────────────────────────────────────────────────────────┘ │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Vorteile der Domäne

```
┌────────────────────────────────────────────────────────────────────┐
│                   VORTEILE EINER DOMÄNE                            │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   1. ZENTRALE BENUTZERVERWALTUNG                                  │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Ein Konto für alle Ressourcen (Single Sign-On)           │  │
│   │ • Benutzer können sich an jedem PC anmelden                │  │
│   │ • Passwortänderungen wirken sofort überall                 │  │
│   │ • Zentrale Deaktivierung beim Ausscheiden                  │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   2. GRUPPENRICHTLINIEN (Group Policy)                            │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Zentrale Konfiguration aller PCs                         │  │
│   │ • Sicherheitseinstellungen vorgeben                        │  │
│   │ • Software automatisch verteilen                           │  │
│   │ • USB-Ports sperren, Bildschirmschoner erzwingen          │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   3. SICHERHEIT                                                   │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Zentrale Passwortrichtlinien                             │  │
│   │ • Audit-Protokollierung                                    │  │
│   │ • Berechtigungen zentral verwalten                         │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   4. RESSOURCENZUGRIFF                                            │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Zentrale Freigabe von Ordnern und Druckern              │  │
│   │ • Berechtigungen über Gruppen steuern                      │  │
│   │ • Netzlaufwerke automatisch verbinden                      │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Voraussetzungen für Domänenbeitritt

```
┌────────────────────────────────────────────────────────────────────┐
│               VORAUSSETZUNGEN FÜR DOMÄNENBEITRITT                  │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   AUF DEM CLIENT-PC:                                              │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Windows Professional, Enterprise oder Education          │  │
│   │   (Windows Home kann NICHT einer Domäne beitreten!)       │  │
│   │ • Netzwerkverbindung zum Domain Controller                 │  │
│   │ • DNS-Server muss auf Domain Controller zeigen             │  │
│   │ • Korrekter Computername (wird in Domäne registriert)     │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   IM NETZWERK:                                                    │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Domain Controller muss erreichbar sein                   │  │
│   │ • DNS muss funktionieren (Domäne auflösbar)               │  │
│   │ • Ports für Active Directory offen (TCP 389, 636, ...)    │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   BERECHTIGUNGEN:                                                 │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • Lokale Administratorrechte auf dem PC                    │  │
│   │ • Domänenkonto mit Berechtigung zum Hinzufügen von PCs    │  │
│   │   (meist Domain Admin oder delegierter Benutzer)           │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   ⚠ WICHTIG: DNS muss auf Domain Controller zeigen!             │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Falsch: DNS = 8.8.8.8 (Google kann Domäne nicht auflösen) │  │
│   │ Richtig: DNS = IP des Domain Controllers                   │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Ablauf der Domänenintegration

```
┌────────────────────────────────────────────────────────────────────┐
│              SCHRITTE ZUR DOMÄNENINTEGRATION                       │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   SCHRITT 1: NETZWERK PRÜFEN                                      │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ • IP-Adresse prüfen (ipconfig)                             │  │
│   │ • DNS-Server muss Domain Controller sein                   │  │
│   │ • Ping zum Domain Controller testen                        │  │
│   │ • nslookup domäne.local prüfen                            │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   SCHRITT 2: SYSTEMEIGENSCHAFTEN ÖFFNEN                           │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Windows + Pause → Erweiterte Systemeinstellungen          │  │
│   │ ODER: sysdm.cpl in Ausführen                              │  │
│   │ → Reiter "Computername" → "Ändern"                        │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   SCHRITT 3: DOMÄNE BEITRETEN                                     │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ ┌────────────────────────────────────────────────────────┐│  │
│   │ │ Computername: PC-BUCHHALTUNG-01                        ││  │
│   │ │                                                         ││  │
│   │ │ Mitglied von:                                          ││  │
│   │ │ ○ Arbeitsgruppe: WORKGROUP                             ││  │
│   │ │ ● Domäne:        firma.local    ← Hier eintragen       ││  │
│   │ │                                                         ││  │
│   │ │                              [OK] [Abbrechen]          ││  │
│   │ └────────────────────────────────────────────────────────┘│  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   SCHRITT 4: ANMELDEDATEN EINGEBEN                                │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Benutzername: administrator@firma.local                    │  │
│   │ ODER: FIRMA\administrator                                  │  │
│   │ Passwort: ********                                         │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   SCHRITT 5: NEUSTART                                             │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Nach erfolgreicher Aufnahme:                               │  │
│   │ "Willkommen in der Domäne firma.local"                    │  │
│   │ → PC muss neu gestartet werden                            │  │
│   │ → Nach Neustart: Anmeldung mit Domänenkonto möglich       │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

### Häufige Probleme

```
┌────────────────────────────────────────────────────────────────────┐
│                    HÄUFIGE PROBLEME                                │
├────────────────────────────────────────────────────────────────────┤
│                                                                     │
│   "Die Domäne konnte nicht gefunden werden"                       │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Ursache: DNS-Problem                                       │  │
│   │ Lösung:                                                    │  │
│   │ • DNS-Server auf Domain Controller setzen                  │  │
│   │ • nslookup domäne.local testen                            │  │
│   │ • Netzwerkverbindung prüfen                               │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   "Zugriff verweigert"                                            │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Ursache: Fehlende Berechtigung                             │  │
│   │ Lösung:                                                    │  │
│   │ • Domänenadmin-Konto verwenden                            │  │
│   │ • Oder: Berechtigung "Computer zur Domäne hinzufügen"    │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   "Das Computerkonto existiert bereits"                           │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Ursache: PC war schon mal in der Domäne                   │  │
│   │ Lösung:                                                    │  │
│   │ • Altes Computerkonto im AD löschen oder zurücksetzen     │  │
│   │ • Computernamen ändern                                     │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
│   Windows Home Edition                                            │
│   ┌────────────────────────────────────────────────────────────┐  │
│   │ Problem: Beitritt nicht möglich                            │  │
│   │ Lösung: Upgrade auf Windows Professional erforderlich      │  │
│   └────────────────────────────────────────────────────────────┘  │
│                                                                     │
└────────────────────────────────────────────────────────────────────┘
```

---

## Wichtige Begriffe

| Begriff | Erklärung |
|---------|-----------|
| **Domäne** | Zentral verwaltete Netzwerkumgebung |
| **Domain Controller** | Server mit Active Directory |
| **Active Directory** | Verzeichnisdienst von Microsoft |
| **Gruppenrichtlinie** | Zentrale Konfigurationsregeln |
| **Single Sign-On** | Eine Anmeldung für alle Ressourcen |
| **Arbeitsgruppe** | Dezentrale Peer-to-Peer-Vernetzung |

---

## Prüfungstipps

### Häufige Prüfungsfragen

- Was sind Voraussetzungen für den Domänenbeitritt?
- Nennen Sie Vorteile einer Domäne
- Welche Windows-Edition kann einer Domäne beitreten?

### Wichtig zu merken

- **Windows Home** kann NICHT beitreten
- **DNS** muss auf Domain Controller zeigen
- Vorteile: Zentrale Verwaltung, Single Sign-On, Gruppenrichtlinien
- **Neustart** nach Beitritt erforderlich
- Anmeldung: benutzer@domäne.local ODER DOMÄNE\benutzer

---

## Übungsaufgaben

### Aufgabe 1
Ein neuer PC soll in die Domäne "firma.local" aufgenommen werden. Was muss vor dem Beitritt geprüft werden?

**Lösung:**
1. **Windows-Edition:** Professional, Enterprise oder Education (nicht Home!)
2. **Netzwerk:** IP-Adresse und Gateway korrekt
3. **DNS-Server:** Muss auf Domain Controller zeigen
4. **Erreichbarkeit:** Ping zum Domain Controller erfolgreich
5. **DNS-Auflösung:** nslookup firma.local funktioniert
6. **Berechtigungen:** Admin-Rechte lokal + Domänenkonto für Beitritt

### Aufgabe 2
Nach dem Domänenbeitritt erscheint "Domäne konnte nicht gefunden werden". Was ist die wahrscheinliche Ursache?

**Lösung:**
**DNS-Problem:** Der DNS-Server ist falsch konfiguriert.

Prüfung:
- ipconfig /all → Welcher DNS-Server ist eingetragen?
- DNS muss auf Domain Controller zeigen
- Nicht auf externen DNS wie 8.8.8.8

Lösung: DNS-Server auf IP des Domain Controllers setzen.

### Aufgabe 3
Nennen Sie drei Vorteile einer Domäne gegenüber einer Arbeitsgruppe.

**Lösung:**
1. **Zentrale Benutzerverwaltung:** Ein Konto für alle PCs, einfache Verwaltung beim Ausscheiden von Mitarbeitern
2. **Gruppenrichtlinien:** Zentrale Konfiguration aller PCs, Sicherheitseinstellungen durchsetzen
3. **Single Sign-On:** Einmalige Anmeldung für alle Ressourcen (Dateiserver, Drucker, Anwendungen)

---

## Querverweise

- [07-02-04 DHCP](./07-02-ip-addressing/07-02-04-dhcp.md) - IP-Vergabe
- [07-01-03 Protokolle](./07-01-network-fundamentals/07-01-03-protocols.md) - DNS
- [04-03-02 Authentifizierung](../04-it-security/04-03-protective-measures/04-03-02-authentication-2fa.md) - Domänenanmeldung
