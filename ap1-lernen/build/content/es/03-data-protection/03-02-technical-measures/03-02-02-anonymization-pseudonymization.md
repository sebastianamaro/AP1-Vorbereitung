# Anonimizacion y Seudonimizacion

## Objetivos de Aprendizaje

Despues de este capitulo, deberas ser capaz de:
- Definir la anonimizacion y distinguirla de la seudonimizacion
- Conocer metodos de anonimizacion
- Conocer metodos de seudonimizacion
- Comprender las implicaciones legales

---

## Contenido Principal

### Vision General

Ambos metodos sirven para proteger datos personales pero difieren fundamentalmente:

```
┌─────────────────────────────────────────────────────────────────┐
│                METODOS DE PROTECCION DE DATOS                    │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ANONIMIZACION                     SEUDONIMIZACION              │
│  ┌─────────────────────┐         ┌─────────────────────┐       │
│  │ Referencia personal │         │ Referencia personal │       │
│  │ IRREVERSIBLEMENTE   │         │ RECUPERABLE         │       │
│  │ eliminada           │         │ (con clave)         │       │
│  │                     │         │                     │       │
│  │ El RGPD ya no       │         │ El RGPD todavia     │       │
│  │ aplica!             │         │ aplica!             │       │
│  └─────────────────────┘         └─────────────────────┘       │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Anonimizacion

#### Definicion

La **anonimizacion** es un proceso para la **eliminacion irreversible de la referencia personal** de los datos. Despues de la anonimizacion, los datos ya no pueden atribuirse a ninguna persona especifica.

#### Caracteristicas

| Caracteristica | Descripcion |
|----------------|-------------|
| **Irreversible** | La referencia personal no puede restaurarse |
| **Sin Identificacion** | No es posible la atribucion a una persona |
| **Libre de RGPD** | Los datos anonimizados ya no estan bajo el RGPD |
| **Permanente** | La perdida de referencia personal es permanente |

#### Metodos de Anonimizacion

| Metodo | Descripcion | Ejemplo |
|--------|-------------|---------|
| **Agregacion de Datos** | Resumen en grupos | Valores promedio en lugar de valores individuales |
| **Enmascaramiento** | Reemplazo de caracteristicas | Reemplazar nombres con "XXX" |
| **Adicion de Ruido** | Modificacion aleatoria | Anadir valores aleatorios a los datos |
| **Generalizacion** | Reduccion de precision | "25 anos" -> "20-30 anos" |
| **k-Anonimato** | Al menos k personas comparten caracteristicas | Liberar datos solo si k >= 5 |

#### Ejemplo

```
ANTES (datos personales):
Max Mustermann, 25 anos, Munich, 60,000 EUR salario

DESPUES (anonimizado):
Masculino, Grupo de edad 20-30, Baviera, Grupo salarial 50-70k
```

---

### Seudonimizacion

#### Definicion (Art. 4(5) RGPD)

La **seudonimizacion** es un proceso por el cual los datos personales se modifican de manera que ya no pueden atribuirse a una persona especifica **sin informacion adicional**.

#### Caracteristicas

| Caracteristica | Descripcion |
|----------------|-------------|
| **Reversible** | La referencia personal puede restaurarse con la clave |
| **Separacion de Clave** | La clave de asignacion se almacena por separado |
| **El RGPD aplica** | Los datos seudonimizados siguen siendo datos personales |
| **Reduccion de Riesgo** | Reduce el riesgo en caso de perdida de datos |

#### Metodos de Seudonimizacion

| Metodo | Descripcion | Ejemplo |
|--------|-------------|---------|
| **Reemplazo con Identificadores** | Asignacion de identificadores aleatorios | Numero de cliente en lugar de nombre |
| **Hashing** | Conversion a valor hash | Hash SHA-256 del nombre |
| **Tokenizacion** | Intercambio con tokens aleatorios | Token almacenado por separado |
| **Cifrado** | Cifrar datos | Datos cifrados con AES |

#### Ejemplo

```
ORIGINAL:                     SEUDONIMIZADO:
Max Mustermann    ->           ID: 7a3b9c4d
max@ejemplo.com   ->           ID: 7a3b9c4d
Calle Ejemplo 1   ->           ID: 7a3b9c4d

TABLA DE ASIGNACION (almacenada por separado):
7a3b9c4d = Max Mustermann, max@ejemplo.com, Calle Ejemplo 1
```

---

### Comparacion: Anonimizacion vs. Seudonimizacion

| Aspecto | Anonimizacion | Seudonimizacion |
|---------|---------------|-----------------|
| **Referencia Personal** | Eliminada irreversiblemente | Recuperable |
| **Aplicacion del RGPD** | No | Si |
| **Re-identificacion** | Imposible | Posible con la clave |
| **Riesgo** | Muy bajo | Reducido pero presente |
| **Usabilidad** | Limitada | Ampliamente preservada |
| **Ejemplo** | Estadisticas | Datos de investigacion |

---

### Clasificacion Legal

```
┌─────────────────────────────────────────────────────────────────┐
│                    APLICABILIDAD DEL RGPD                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Datos Personales                                                │
│  ──────────────────────────────────────────────►               │
│  │                     │                       │               │
│  │                     │                       │               │
│  ▼                     ▼                       ▼               │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │  Datos       │  │ Datos        │  │ Datos        │          │
│  │  Originales  │  │ Seudoni-     │  │ Anonimizados │          │
│  │              │  │ mizados      │  │              │          │
│  │ RGPD APLICA  │  │ RGPD APLICA  │  │ RGPD NO      │          │
│  │              │  │              │  │ APLICA       │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Terminos Clave

| Termino | Explicacion |
|---------|-------------|
| **Anonimizacion** | Eliminacion irreversible de la referencia personal |
| **Seudonimizacion** | Reemplazo con identificadores, reversible |
| **k-Anonimato** | Al menos k personas comparten las mismas caracteristicas |
| **Tokenizacion** | Intercambio con tokens aleatorios |
| **Hashing** | Conversion unidireccional a valor hash fijo |
| **Agregacion de Datos** | Resumen de valores individuales |

---

## Consejos para el Examen

### Preguntas Comunes del Examen
- Cual es la diferencia entre anonimizacion y seudonimizacion?
- Se aplica el RGPD a datos anonimizados?
- Nombra metodos de anonimizacion/seudonimizacion

### Importante Recordar
- **Anonimizacion** = El RGPD YA NO aplica
- **Seudonimizacion** = El RGPD TODAVIA aplica
- Los datos seudonimizados pueden re-identificarse con la clave

---

## Ejercicios Practicos

### Ejercicio 1
Cual es la diferencia esencial entre anonimizacion y seudonimizacion?

**Solucion:**
- **Anonimizacion:** La referencia personal se elimina irreversiblemente. Los datos ya no pueden atribuirse a ninguna persona. El RGPD ya no aplica.
- **Seudonimizacion:** La referencia personal puede restaurarse con una clave separada. El RGPD todavia aplica.

### Ejercicio 2
Nombra dos metodos de anonimizacion.

**Solucion:**
1. Agregacion de datos (resumen en grupos)
2. Generalizacion (reduccion de precision)
(o: Enmascaramiento, Adicion de ruido, k-Anonimato)

### Ejercicio 3
Se aplica el RGPD a datos seudonimizados?

**Solucion:** Si, el RGPD todavia aplica a los datos seudonimizados porque la referencia personal puede restaurarse con la clave almacenada por separado. Por lo tanto, los datos siguen siendo datos personales en el sentido del Art. 4(1) RGPD.

---

## Referencias Cruzadas

- [03-01-02 Datos Personales](../03-01-fundamentals/03-01-02-personal-data.md) - Definicion
- [04-05-02 Valores Hash](../../04-it-security/04-05-cryptography/04-05-02-hash-values.md) - Metodos de hashing
- [04-05-01 Metodos de Cifrado](../../04-it-security/04-05-cryptography/04-05-01-encryption-methods.md) - Cifrado
