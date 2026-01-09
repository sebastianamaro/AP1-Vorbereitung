# Page 84 - Klassendiagramm Beispiel & 8.9 Tests

## Klassendiagramm Beispiel: ATM System

Das Beispiel zeigt ein Geldautomaten-System (ATM) mit folgenden Klassen:

**Hauptklassen:**
- **ATM:** +Location: string, +BranchName: string, +Show(): void
- **Card Scanner:** +AcceptCard(): bool, +ReadCard(): void, +EjectCard(): void, +ValidatePIN(): void
- **ATMCard:** -PIN: int, -CardID: long, -Acc: Account, +SetPIN(), +GetPIN(), +GetAccount()
- **BankCustomer:** -CustomerName: string, -Address: string, -Email: string, -Card: ATMCard, -Acc: Account
- **CashDispenser:** -AvailableCash: float, +SupplyCash(): float, +GenerateReceipt(): void
- **Display Screen:** +Prompt(): void, +AcceptInput(): void
- **Transaction:** -Date: object, -Amount: double, -Deposit: void
- **Account:** -AccountNumber: int, -Balance: double, -Trans: Transaction
- **CurrentAccount** und **SavingsAccount** erben von Account

---

## 8.9 Tests

### White Box Test

- Tester kennt den Quellcode ("durchsichtige Box")
- Test der internen Programmlogik und Abläufe
- Prüfung der Anweisungen, Zweige und Bedingungen
- Geeignet für Unit Tests

### Black Box Test

- Tester kennt nur Ein- und Ausgaben ("schwarze Box")

