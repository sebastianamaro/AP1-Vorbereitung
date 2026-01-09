# Bits, Bytes y Sistemas Numéricos

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Explicar los términos bit y byte
- Conocer los sistemas numéricos comunes (Binario, Decimal, Hexadecimal)
- Realizar conversiones entre sistemas numéricos
- Calcular tamaños de almacenamiento

---

## Contenido Principal

### Bit y Byte

#### El Bit

El **bit** (dígito binario) es la unidad de información más pequeña en informática.

| Valor | Significado |
|-------|-------------|
| **0** | Apagado, Falso, Bajo |
| **1** | Encendido, Verdadero, Alto |

#### El Byte

Un **byte** consiste en **8 bits** y puede representar 2^8 = **256 valores diferentes** (0-255).

```
┌─────────────────────────────────────────────────────────────────┐
│                   1 BYTE = 8 BIT                                │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   ┌───┬───┬───┬───┬───┬───┬───┬───┐                            │
│   │ 1 │ 0 │ 1 │ 0 │ 0 │ 1 │ 1 │ 0 │  = 166 (decimal)          │
│   └───┴───┴───┴───┴───┴───┴───┴───┘                            │
│   128  64  32  16   8   4   2   1                               │
│                                                                 │
│   128 + 0 + 32 + 0 + 0 + 4 + 2 + 0 = 166                       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Tamaños de Almacenamiento

| Unidad | Decimal (SI) | Binario (IEC) |
|--------|--------------|---------------|
| **Kilobyte/Kibibyte** | 1 KB = 1.000 Byte | 1 KiB = 1.024 Byte |
| **Megabyte/Mebibyte** | 1 MB = 1.000.000 Byte | 1 MiB = 1.048.576 Byte |
| **Gigabyte/Gibibyte** | 1 GB = 1.000.000.000 Byte | 1 GiB = 1.073.741.824 Byte |
| **Terabyte/Tebibyte** | 1 TB = 10^12 Byte | 1 TiB = 2^40 Byte |

**En la práctica:** Los fabricantes de discos duros usan especificaciones decimales (1 GB = 10^9 Byte), mientras que los sistemas operativos a menudo usan binario (1 GiB = 2^30 Byte). Por lo tanto, un disco duro de "500 GB" aparece en el sistema como aproximadamente 465 GiB.

---

### Los Tres Sistemas Numéricos Importantes

```
┌─────────────────────────────────────────────────────────────────┐
│                    SISTEMAS NUMÉRICOS                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  DECIMAL (Base 10)      BINARIO (Base 2)     HEXADECIMAL (Base 16)│
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │                 │  │                 │  │                 │ │
│  │ Dígitos: 0-9    │  │ Dígitos: 0, 1   │  │ Dígitos: 0-9,   │ │
│  │                 │  │                 │  │ A-F             │ │
│  │ Uso cotidiano   │  │ Interno de      │  │ Direcciones de  │ │
│  │                 │  │ computadora     │  │ memoria         │ │
│  │                 │  │                 │  │ Códigos de color│ │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘ │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Sistema Decimal (Base 10)

El sistema numérico cotidiano con dígitos **0-9**.

**Valor posicional:** Cada posición tiene el valor 10^n (de derecha a izquierda: 10^0, 10^1, 10^2, ...)

Ejemplo: **347** = 3×10^2 + 4×10^1 + 7×10^0 = 300 + 40 + 7

---

### Sistema Binario (Base 2)

El sistema numérico de las computadoras con dígitos **0 y 1**.

**Valor posicional:** Cada posición tiene el valor 2^n

| Posición | 7 | 6 | 5 | 4 | 3 | 2 | 1 | 0 |
|----------|---|---|---|---|---|---|---|---|
| **Valor** | 128 | 64 | 32 | 16 | 8 | 4 | 2 | 1 |

#### Conversión Binario → Decimal

```
Ejemplo: 10110101₂

  1    0    1    1    0    1    0    1
×128  ×64  ×32  ×16   ×8   ×4   ×2   ×1
────────────────────────────────────────
 128 +  0 + 32 + 16 +  0 +  4 +  0 +  1 = 181₁₀
```

#### Conversión Decimal → Binario (Método de División)

```
Ejemplo: 45₁₀ → Binario

45 ÷ 2 = 22 resto 1  ↑
22 ÷ 2 = 11 resto 0  │
11 ÷ 2 =  5 resto 1  │  Leer de abajo hacia arriba
 5 ÷ 2 =  2 resto 1  │
 2 ÷ 2 =  1 resto 0  │
 1 ÷ 2 =  0 resto 1  │

Resultado: 45₁₀ = 101101₂
```

---

### Sistema Hexadecimal (Base 16)

Usa dígitos **0-9** y letras **A-F** (A=10, B=11, ..., F=15).

| Decimal | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 |
|---------|---|---|---|---|---|---|---|---|---|---|----|----|----|----|----|----|
| **Hex** | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | A  | B  | C  | D  | E  | F  |

**Ventaja:** 4 bits corresponden exactamente a un dígito hex → representación compacta

```
Binario:  1010 1111
Hex:        A    F   = AF₁₆
```

#### Hexadecimal → Decimal

```
Ejemplo: 2A₁₆

  2    A
×16¹  ×16⁰
──────────
 32 + 10 = 42₁₀
```

#### Decimal → Hexadecimal

```
Ejemplo: 255₁₀ → Hex

255 ÷ 16 = 15 resto 15 (F)  ↑
 15 ÷ 16 =  0 resto 15 (F)  │

Resultado: 255₁₀ = FF₁₆
```

---

### Conversión Rápida: Binario ↔ Hexadecimal

Como 16 = 2^4, exactamente **4 bits corresponden a un dígito hex**:

```
┌────────────────────────────────────────────────────────────────┐
│           CONVERSIÓN BINARIO ↔ HEXADECIMAL                     │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Binario:    1011  0110  1111  0001                           │
│               ↓     ↓     ↓     ↓                              │
│   Hex:         B     6     F     1    = B6F1₁₆                 │
│                                                                │
│   Tabla:                                                       │
│   0000=0  0100=4  1000=8  1100=C                              │
│   0001=1  0101=5  1001=9  1101=D                              │
│   0010=2  0110=6  1010=A  1110=E                              │
│   0011=3  0111=7  1011=B  1111=F                              │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Ejemplos de Aplicación

| Aplicación | Sistema Numérico |
|------------|------------------|
| **Direcciones MAC** | Hexadecimal (ej., 00:1A:2B:3C:4D:5E) |
| **Direcciones IP (IPv6)** | Hexadecimal |
| **Códigos de Color (Web)** | Hexadecimal (#FF0000 = Rojo) |
| **Direcciones de Memoria** | Hexadecimal |
| **Banderas Binarias** | Binario |

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Bit** | Dígito binario, unidad de información más pequeña (0 o 1) |
| **Byte** | 8 bits |
| **Sistema Decimal** | Base 10, dígitos 0-9 |
| **Sistema Binario** | Base 2, dígitos 0 y 1 |
| **Sistema Hexadecimal** | Base 16, dígitos 0-9 y A-F |
| **MSB** | Bit Más Significativo (bit de mayor valor) |
| **LSB** | Bit Menos Significativo (bit de menor valor) |

---

## Consejos para el Examen

### Preguntas Comunes de Examen

- Convertir [número] de binario a decimal
- Convertir [número] de decimal a binario
- ¿Cuántos estados puede representar un byte?
- ¿A cuántos bytes equivale 1 KB?

### Importante Recordar

- **1 Byte = 8 Bits**
- **1 KB = 1.024 Bytes** (binario) o **1.000 Bytes** (decimal)
- **4 Bits = 1 Dígito Hex**
- **2^8 = 256** valores posibles por byte

### Ayuda Memoria para Potencias de Dos

| 2^0 | 2^1 | 2^2 | 2^3 | 2^4 | 2^5 | 2^6 | 2^7 | 2^8 | 2^9 | 2^10 |
|-----|-----|-----|-----|-----|-----|-----|-----|-----|-----|------|
| 1   | 2   | 4   | 8   | 16  | 32  | 64  | 128 | 256 | 512 | 1024 |

---

## Ejercicios Prácticos

### Ejercicio 1
Convertir 10101100₂ al sistema decimal.

**Solución:**
```
1×128 + 0×64 + 1×32 + 0×16 + 1×8 + 1×4 + 0×2 + 0×1
= 128 + 32 + 8 + 4 = 172₁₀
```

### Ejercicio 2
Convertir 97₁₀ al sistema binario.

**Solución:**
```
97 ÷ 2 = 48 resto 1
48 ÷ 2 = 24 resto 0
24 ÷ 2 = 12 resto 0
12 ÷ 2 =  6 resto 0
 6 ÷ 2 =  3 resto 0
 3 ÷ 2 =  1 resto 1
 1 ÷ 2 =  0 resto 1

Leer de abajo hacia arriba: 97₁₀ = 1100001₂
```

### Ejercicio 3
Convertir 3F₁₆ al sistema decimal.

**Solución:**
```
3×16¹ + F×16⁰
= 3×16 + 15×1
= 48 + 15 = 63₁₀
```

### Ejercicio 4
¿Cuántos valores diferentes pueden representarse con 16 bits?

**Solución:** 2^16 = **65.536** valores diferentes (0 a 65.535)

### Ejercicio 5
Un disco duro se anuncia como 500 GB (decimal). ¿Aproximadamente a cuántos GiB (binario) corresponde?

**Solución:**
- 500 GB = 500.000.000.000 Bytes
- 1 GiB = 1.073.741.824 Bytes
- 500.000.000.000 ÷ 1.073.741.824 ≈ **465,66 GiB**

---

## Referencias Cruzadas

- [05-01-02 IEEE 754](./05-01-02-ieee-754.md) - Números de punto flotante
- [05-01-03 Codificación de Caracteres](./05-01-03-character-encoding.md) - ASCII, Unicode
- [07-02-01 IPv4](../../07-networks/07-02-ip-addressing/07-02-01-ipv4.md) - Direcciones IP
