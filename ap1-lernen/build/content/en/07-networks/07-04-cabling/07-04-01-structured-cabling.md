# Structured Cabling

## Learning Objectives

After this section you should be able to:
- Name the three areas of structured cabling
- Explain the function of each cabling area
- Assign important components
- Describe the advantages of structured cabling

---

## Core Content

### What is Structured Cabling?

**Structured cabling** is a standardized concept for networking buildings and premises according to the **EN 50173** standard. It enables a flexible, expandable, and manufacturer-independent network infrastructure.

### The Three Areas

```
+---------------------------------------------------------------------+
|                    STRUCTURED CABLING                                |
+---------------------------------------------------------------------+
|                                                                      |
|  +---------------------------------------------------------------+ |
|  |              PRIMARY AREA (Campus Cabling)                     | |
|  |  +---------+                              +---------+         | |
|  |  |Building1|<------- Fiber Optic -------->|Building2|         | |
|  |  |   MDF   |     (up to 2000 m)           |   MDF   |         | |
|  |  +----+----+                              +----+----+         | |
|  +-------+---------------------------------------+---------------+ |
|          |                                       |                 |
|  +-------+---------------------------------------+---------------+ |
|  |       |    SECONDARY AREA (Backbone)          |               | |
|  |       v                                       v               | |
|  |  +---------+                              +---------+         | |
|  |  |  IDF 3  |     Fiber/Copper             |  IDF 3  |         | |
|  |  | Floor 3 |<----(up to 500 m)----------->| Floor 3 |         | |
|  |  +----+----+                              +----+----+         | |
|  |       |                                       |               | |
|  |  +----+----+                              +---+-----+         | |
|  |  |  IDF 2  |                              |  IDF 2  |         | |
|  |  | Floor 2 |                              | Floor 2 |         | |
|  |  +----+----+                              +----+----+         | |
|  |       |                                       |               | |
|  |  +----+----+                              +---+-----+         | |
|  |  |  IDF 1  |                              |  IDF 1  |         | |
|  |  | Floor 1 |                              | Floor 1 |         | |
|  |  +----+----+                              +----+----+         | |
|  +-------+---------------------------------------+---------------+ |
|          |                                       |                 |
|  +-------+---------------------------------------+---------------+ |
|  |       |    TERTIARY AREA (Floor Cabling)      |               | |
|  |       v                                       v               | |
|  |    +------+ +------+ +------+          +------+ +------+     | |
|  |    | Wall | | Wall | | Wall |          | Wall | | Wall |     | |
|  |    |Outlet| |Outlet| |Outlet|          |Outlet| |Outlet|     | |
|  |    +--+---+ +--+---+ +--+---+          +--+---+ +--+---+     | |
|  |       |        |        |                 |        |         | |
|  |      PC       PC       PC                PC       PC         | |
|  |                   (up to 90 m Copper)                        | |
|  +--------------------------------------------------------------+ |
|                                                                      |
|  MDF = Main Distribution Frame    IDF = Intermediate Distribution Frame |
+---------------------------------------------------------------------+
```

### 1. Primary Area (Campus Cabling)

| Aspect | Description |
|--------|-------------|
| **Connection** | Building to building |
| **Distributor** | Main Distribution Frame (MDF) |
| **Medium** | Fiber optic (FO) |
| **Max. Length** | up to 2000 m |
| **Application** | Company premises, campus |

**Main Distribution Frame (MDF):**
- Central node of the entire network
- Connection to WAN/Internet
- Contains core routers and switches

### 2. Secondary Area (Backbone)

| Aspect | Description |
|--------|-------------|
| **Connection** | Floor to floor (vertical) |
| **Distributor** | Intermediate Distribution Frame (IDF) |
| **Medium** | Fiber optic or copper |
| **Max. Length** | up to 500 m |
| **Application** | Within a building |

**Intermediate Distribution Frame (IDF):**
- Distributes network to the floor
- Contains switches and patch panels
- Often in technical rooms or wall cabinets

### 3. Tertiary Area (Floor Cabling)

| Aspect | Description |
|--------|-------------|
| **Connection** | Distributor to workstation (horizontal) |
| **Connection point** | Wall outlet |
| **Medium** | Copper cable (Cat 5e/6/6A/7) |
| **Max. Length** | up to 90 m (permanently installed) |
| **Application** | Offices, workstations |

**Important Length Rule:**
```
+--------------------------------------------------------------+
|                 100 m TOTAL LENGTH                            |
|                                                              |
|  +-----+       +------------------------+       +---------+ |
|  |     |       |                        |       |         | |
|  | IDF |-------|    Permanent Install   |-------|  Wall   | |
|  |     | 5m    |       90 m             |       | Outlet  | |
|  +-----+       +------------------------+       +----+----+ |
|                                                      | 5m   |
|                                                   +--+--+   |
|                                                   | PC  |   |
|                                                   +-----+   |
|                                                              |
|  Patch cable: 5m + Permanent: 90m + Patch cable: 5m = 100m  |
+--------------------------------------------------------------+
```

### Cabling Components

| Component | Area | Function |
|-----------|------|----------|
| **Main Distribution Frame** | Primary | Central building node |
| **Intermediate Distribution Frame** | Secondary | Distributor per floor |
| **Patch Panel** | All | Central connection points |
| **Patch Cable** | All | Flexible connecting cables |
| **Wall Outlet** | Tertiary | Socket at workstation |
| **Installation Cable** | All | Permanently installed cables |

### Advantages of Structured Cabling

```
+-------------------------------------------------------------+
|                    ADVANTAGES                                |
+-------------------------------------------------------------+
|                                                              |
|  / Flexibility     - Easy moves and changes                 |
|                                                              |
|  / Scalability     - Expansion without new cabling          |
|                                                              |
|  / Standardization - Manufacturer-independent               |
|                                                              |
|  / Future-proof    - Supports new technologies              |
|                                                              |
|  / Maintainability - Clear structure                        |
|                                                              |
|  / Cost efficiency - More economical long-term              |
|                                                              |
+-------------------------------------------------------------+
```

---

## Key Terms

| Term | Explanation |
|------|-------------|
| **EN 50173** | European standard for structured cabling |
| **MDF** | Main Distribution Frame - central distributor |
| **IDF** | Intermediate Distribution Frame - floor distributor |
| **Patch Panel** | Connection strip for structured cable ends |
| **Patch Cable** | Flexible connecting cable |
| **Wall Outlet** | Telecommunications connection unit (socket) |
| **Fiber Optic** | Optical fiber cable |

---

## Exam Tips

1. **Mnemonic for the areas:**
   - **P**rimary = **P**lausibly far (Campus, 2000 m, Fiber optic)
   - **S**econdary = **S**tairs (vertical, 500 m)
   - **T**ertiary = **T**able (horizontal to workstation, 90 m)

2. **Common exam questions:**
   - What medium is used in the primary area? -> Fiber optic
   - Maximum length in the tertiary area? -> 90 m (permanently installed)
   - What is the IDF for? -> Distribution on the floor

3. **Avoid typical mistakes:**
   - The 100 m rule applies to the ENTIRE path including patch cables
   - Fiber optic is standard in the primary area, not optional

---

## Practice Exercises

### Exercise 1: Assignment
Assign the components to the correct area:

| Component | Primary | Secondary | Tertiary |
|-----------|---------|-----------|----------|
| Wall outlet at workstation | | | |
| Connection between buildings | | | |
| Intermediate distribution frame | | | |
| Copper cable to PC | | | |

<details>
<summary>Show solution</summary>

| Component | Primary | Secondary | Tertiary |
|-----------|---------|-----------|----------|
| Wall outlet at workstation | | | / |
| Connection between buildings | / | | |
| Intermediate distribution frame | | / | |
| Copper cable to PC | | | / |

</details>

### Exercise 2: Practical Scenario

ConSystem GmbH plans to network a new office building with 4 floors and a connection to the main building (150 m away).

a) Which cabling areas are relevant?
b) Which cable types do you recommend for each area?

<details>
<summary>Show solution</summary>

a) **All three areas are relevant:**
- Primary area: Connection to main building (150 m)
- Secondary area: Connection of the 4 floors to each other
- Tertiary area: Cabling on each floor to workstations

b) **Recommended cable types:**
- Primary area: Fiber optic - although 150 m would also be possible with copper, fiber optic is more future-proof
- Secondary area: Fiber optic or Cat 6A/7 (depending on budget and requirements)
- Tertiary area: Cat 6A copper cable (for Gigabit and more)

</details>

### Exercise 3: Calculation

A patch cable at the IDF is 3 m long, the patch cable at the workstation is 4 m. How long can the permanent installation be at maximum?

<details>
<summary>Show solution</summary>

**Calculation:**
- Maximum total length: 100 m
- Patch cable IDF: 3 m
- Patch cable workstation: 4 m
- Permanent installation = 100 m - 3 m - 4 m = **93 m**

Note: In practice, you should stay below 90 m to have reserve.

</details>

---

## Cross-References

- [Copper Cables and Categories](07-04-02-copper-cables.md) - Cable types in detail
- [Network Hardware](../07-05-network-hardware.md) - Switches and routers
- [OSI Model](../07-01-network-fundamentals/07-01-01-osi-model.md) - Layer 1 cabling
