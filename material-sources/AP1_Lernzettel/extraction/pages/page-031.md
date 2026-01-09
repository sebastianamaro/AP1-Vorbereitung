# Page 31 - Treiber, 3.2 Beurteilungskriterien & 3.3 BIOS

## Treiber

Ein **Treiber** ist ein spezielles Programm, das als Übersetzer zwischen Hardware (wie Drucker, Grafikkarte oder Maus) und einem Betriebssystem dient.

---

## 3.2 Beurteilungskriterien

- Benutzerfreundlichkeit
- Stabilität/Zuverlässigkeit
- Support/Updates
- Kosten
- Systemanforderungen
- Kompatibilität

---

## 3.3 BIOS

Das **BIOS** (Basic Input/Output System) ist die Firmware eines Computers, die beim Start die Hardware initialisiert und das Betriebssystem lädt. Es ist auf einem nichtflüchtigen Speicherchip (ROM, EEPROM oder Flash-Speicher) auf dem Mainboard abgelegt.

### Funktionen des BIOS

- **POST (Power-On Self-Test):** Überprüft die grundlegende Hardware auf Fehler
- **CMOS-Konfiguration:** Speichert Einstellungen wie Boot-Reihenfolge und Systemzeit
- **Bootloader:** Lädt den Bootsektor des Betriebssystems
- **Hardware-Steuerung:** Verwaltung von Tastatur, Festplatten, Lüftern und anderen Komponenten

### BIOS vs. UEFI

| Merkmal | BIOS | UEFI |
|---------|------|------|
| Speicherort | ROM/EEPROM/Flash | Flash-Speicher |
| Boot-Modus | MBR (max. 2 TB) | GPT (größere Laufwerke) |
| Oberfläche | Textbasiert | Grafisch, Maus-Support |

