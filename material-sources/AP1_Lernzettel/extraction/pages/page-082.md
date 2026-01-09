# Page 82 - Anwendungsfalldiagramm Beispiel & Klassendiagramm

## Anwendungsfalldiagramm Beispiel: Online Shopping System

Das Beispiel zeigt ein Online Shopping System mit folgenden Elementen:

**Akteure:**
- Customer (Kunde)
- Identity Provider
- Credit Payment Service
- PayPal

**Anwendungsfälle (Use Cases):**
- View items (Artikel ansehen)
- Make purchase (Einkauf tätigen)
- Complete checkout (Checkout abschließen)
- Log in (Anmelden)

**Beziehungen:**
- Customer → View items (verwendet)
- View items «include» → Make purchase
- Make purchase «include» → Complete checkout
- Authentication «service» verbunden mit Identity Provider, Credit Payment Service, PayPal

---

## Klassendiagramm

Ein **Klassendiagramm** ist ein UML-Diagramm, das die Struktur eines Systems durch die Darstellung von Klassen, Attributen und Beziehungen zwischen ihnen veranschaulicht. Es wird verwendet, um die statische Struktur eines Systems zu modellieren und die Klassen und Objekte zu identifizieren, die involviert sind.

