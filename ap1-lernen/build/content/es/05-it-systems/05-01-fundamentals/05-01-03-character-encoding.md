# Codificación de Caracteres

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Explicar el término codificación de caracteres
- Conocer ASCII y sus limitaciones
- Comprender Unicode y UTF-8
- Conocer casos de uso típicos

---

## Contenido Principal

### ¿Qué es la Codificación de Caracteres?

La **codificación de caracteres** es el mapeo de caracteres (letras, dígitos, caracteres especiales) a valores numéricos que pueden ser procesados por la computadora.

```
┌─────────────────────────────────────────────────────────────────┐
│                    CODIFICACIÓN DE CARACTERES                   │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   Carácter  ───────►  Codificación  ───────►  Valor Binario     │
│                                                                 │
│     "A"     ───────►    ASCII       ───────►  01000001 (65₁₀)   │
│     "ä"     ───────►   UTF-8        ───────►  11000011 10100100 │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### ASCII (American Standard Code for Information Interchange)

**ASCII** es la codificación de caracteres más antigua y simple.

#### Propiedades

| Propiedad | Valor |
|-----------|-------|
| **Desarrollado** | 1963 |
| **Tamaño** | 7 Bit |
| **Número de caracteres** | 128 caracteres (0-127) |
| **Alcance** | Letras inglesas, dígitos, caracteres especiales |

#### Tabla ASCII (Extracto)

| Decimal | Hex | Carácter | Descripción |
|---------|-----|----------|-------------|
| 0-31 | 00-1F | - | Caracteres de control |
| 32 | 20 | (Espacio) | Espacio |
| 48-57 | 30-39 | 0-9 | Dígitos |
| 65-90 | 41-5A | A-Z | Letras mayúsculas |
| 97-122 | 61-7A | a-z | Letras minúsculas |

```
┌────────────────────────────────────────────────────────────────┐
│                TABLA ASCII (rangos importantes)                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Caracteres de control:   0-31   (ej., 10 = salto de línea)   │
│  Espacio:                 32                                   │
│  Caracteres especiales:   33-47, 58-64, 91-96, 123-126        │
│  Dígitos 0-9:             48-57                                │
│  Letras mayúsculas:       65-90  (A=65, B=66, ..., Z=90)      │
│  Letras minúsculas:       97-122 (a=97, b=98, ..., z=122)     │
│                                                                │
│  Recordar: Minúscula = Mayúscula + 32                          │
│           (A=65, a=97 → Diferencia = 32)                       │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### Limitaciones de ASCII

- Solo **128 caracteres** (7 Bit)
- **Sin diéresis** (ä, ö, ü, ß)
- **Sin caracteres especiales** de otros idiomas
- Sin emojis, símbolos, etc.

---

### Conjuntos de Caracteres Extendidos

Para representar más caracteres, se desarrollaron varias extensiones:

| Codificación | Tamaño | Caracteres | Región |
|--------------|--------|------------|--------|
| **ISO 8859-1** (Latin-1) | 8 Bit | 256 | Europa Occidental |
| **ISO 8859-15** (Latin-9) | 8 Bit | 256 | Europa Occidental + € |
| **Windows-1252** | 8 Bit | 256 | Windows |

**Problema:** Las incompatibilidades entre diferentes codificaciones llevan a errores de visualización ("texto ilegible").

---

### Unicode

**Unicode** es un conjunto de caracteres universal que abarca **todos los caracteres de todos los sistemas de escritura** del mundo.

```
┌─────────────────────────────────────────────────────────────────┐
│                        UNICODE                                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Objetivo: Un estándar para TODOS los caracteres del mundo     │
│                                                                 │
│  Incluye:                                                       │
│  • Letras latinas (incluyendo diéresis)                        │
│  • Griego, Cirílico, Árabe, Hebreo                             │
│  • Chino, Japonés, Coreano                                     │
│  • Símbolos matemáticos                                         │
│  • Emojis                                                       │
│  • Escrituras históricas                                        │
│                                                                 │
│  Actualmente: aprox. 150.000 caracteres definidos              │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Concepto de Unicode

- Cada carácter tiene un **Punto de Código** único
- Notación: **U+XXXX** (hexadecimal)
- Ejemplos:
  - U+0041 = A
  - U+00E4 = ä
  - U+20AC = €
  - U+1F600 = emoji

---

### UTF-8 (Unicode Transformation Format)

**UTF-8** es la codificación más utilizada para Unicode.

#### Propiedades

| Propiedad | Valor |
|-----------|-------|
| **Variable** | 1-4 bytes por carácter |
| **Compatible con ASCII** | Caracteres ASCII = 1 byte |
| **Uso** | Estándar en Internet (>95%) |

#### Reglas de Codificación

| Bytes | Rango de Bits | Patrón |
|-------|---------------|--------|
| 1 | U+0000 - U+007F | 0xxxxxxx |
| 2 | U+0080 - U+07FF | 110xxxxx 10xxxxxx |
| 3 | U+0800 - U+FFFF | 1110xxxx 10xxxxxx 10xxxxxx |
| 4 | U+10000 - U+10FFFF | 11110xxx 10xxxxxx 10xxxxxx 10xxxxxx |

```
┌────────────────────────────────────────────────────────────────┐
│                  EJEMPLOS UTF-8                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Carácter  Punto de Código    UTF-8 (Binario)                  │
│  ──────────────────────────────────────────────────────────    │
│     A        U+0041            01000001                  (1 Byte)   │
│     ä        U+00E4            11000011 10100100         (2 Bytes)  │
│     €        U+20AC            11100010 10000010 10101100 (3 Bytes) │
│     emoji    U+1F600           11110000 10011111 10011000 10000000  │
│                                                          (4 Bytes)  │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### UTF-16 y UTF-32

| Formato | Tamaño | Uso |
|---------|--------|-----|
| **UTF-8** | 1-4 Bytes | Internet, archivos |
| **UTF-16** | 2-4 Bytes | Windows, Java interno |
| **UTF-32** | 4 Bytes | Procesamiento simple |

---

### BOM (Byte Order Mark)

El **BOM** es un marcador opcional al principio de un archivo que indica la codificación y el orden de bytes.

| Codificación | BOM (Hex) |
|--------------|-----------|
| UTF-8 | EF BB BF |
| UTF-16 BE | FE FF |
| UTF-16 LE | FF FE |

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **ASCII** | Codificación de caracteres de 7 bits (128 caracteres) |
| **Unicode** | Conjunto de caracteres universal para todas las escrituras |
| **UTF-8** | Codificación Unicode de longitud variable |
| **Punto de Código** | Número único de un carácter Unicode |
| **BOM** | Byte Order Mark |
| **Latin-1** | Extensión de ASCII para Europa Occidental |

---

## Consejos para el Examen

### Preguntas Comunes de Examen

- ¿Qué es ASCII y cuántos caracteres incluye?
- ¿Cuál es la diferencia entre ASCII y Unicode?
- ¿Qué es UTF-8?
- ¿Por qué UTF-8 es compatible con ASCII?

### Importante Recordar

- **ASCII** = 128 caracteres, 7 bit, solo inglés
- **Unicode** = Universal, todos los caracteres del mundo
- **UTF-8** = Longitud variable (1-4 bytes), estándar en la web
- **A = 65, a = 97** (diferencia 32)

---

## Ejercicios Prácticos

### Ejercicio 1
¿Qué es ASCII y cuántos caracteres incluye?

**Solución:** **ASCII** (American Standard Code for Information Interchange) es un estándar de codificación de caracteres de 7 bits. Incluye **128 caracteres** (0-127), incluyendo letras inglesas, dígitos, caracteres especiales y caracteres de control.

### Ejercicio 2
¿Por qué se desarrollaron Unicode y UTF-8?

**Solución:** ASCII solo podía representar caracteres ingleses. Para otros idiomas (diéresis, escrituras asiáticas), se desarrollaron varias extensiones incompatibles, lo que llevó a problemas de visualización. **Unicode** define un conjunto de caracteres universal para todos los idiomas, **UTF-8** es una codificación eficiente en espacio para él que también es compatible con ASCII.

### Ejercicio 3
¿Qué valor ASCII tiene la letra 'A' y qué valor tiene 'a'?

**Solución:**
- **'A'** = 65 (decimal) = 41 (hex)
- **'a'** = 97 (decimal) = 61 (hex)
- La diferencia siempre es 32.

### Ejercicio 4
¿Por qué UTF-8 es el estándar en Internet?

**Solución:**
1. **Compatibilidad con ASCII:** Todos los caracteres ASCII se adoptan 1:1
2. **Eficiente en espacio:** Los caracteres comunes (latinos) requieren solo 1 byte
3. **Universal:** Puede representar todos los caracteres Unicode
4. **Auto-sincronizado:** Los errores durante la lectura no afectan el resto

---

## Referencias Cruzadas

- [05-01-01 Bits y Bytes](./05-01-01-bits-bytes-number-systems.md) - Representación binaria
- [06-05-01 HTML/XML](../../06-software/06-05-web-development/06-05-01-html-xml.md) - Codificación de caracteres en páginas web
