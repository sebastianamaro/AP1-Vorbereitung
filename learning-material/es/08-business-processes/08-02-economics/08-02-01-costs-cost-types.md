# Costos y Tipos de Costos

## Objetivos de Aprendizaje

Despues de esta seccion, podras:
- Distinguir costos fijos y variables
- Explicar costos directos e indirectos
- Nombrar tipos de costos en TI
- Diferenciar entre gasto, costo y desembolso

---

## Contenido Principal

### Terminos Basicos

```
┌─────────────────────────────────────────────────────────────────────┐
│                DIFERENCIACION DE TERMINOS                           │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  DESEMBOLSO                                                         │
│  → El dinero sale (salida de efectivo)                              │
│  → Ejemplo: Se paga una factura                                     │
│                                                                      │
│  GASTO                                                              │
│  → Consumo de bienes y servicios (P&L)                              │
│  → Ejemplo: Se registra el salario                                  │
│                                                                      │
│  COSTO                                                              │
│  → Consumo valorado para prestacion de servicios                    │
│  → Solo relacionado con el negocio                                  │
│  → Ejemplo: Consumo de material para produccion                     │
│                                                                      │
│  Importante para el examen:                                         │
│  COSTO = Gasto empresarial para servicios principales               │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Costos Fijos y Variables

```
┌─────────────────────────────────────────────────────────────────────┐
│           COSTOS FIJOS vs. COSTOS VARIABLES                         │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  COSTOS FIJOS (CF)                    COSTOS VARIABLES (CV)         │
│  ─────────────────────────────────────────────────────────────────  │
│  Independientes del                   Dependientes del              │
│  volumen de produccion                volumen de produccion         │
│                                                                      │
│  Costo                                Costo                         │
│    │                                    │                           │
│    │────────────────                    │         /                 │
│    │                                    │       /                   │
│    │                                    │     /                     │
│    │                                    │   /                       │
│    │                                    │ /                         │
│    └────────────────► Volumen          └──────────────► Volumen     │
│                                                                      │
│  Permanecen iguales,                  Aumentan/disminuyen con       │
│  independientemente de                el volumen de produccion      │
│  la produccion                                                      │
│                                                                      │
│  EJEMPLOS COSTOS FIJOS:               EJEMPLOS COSTOS VARIABLES:    │
│  → Alquiler                           → Materiales                  │
│  → Salarios (empleados fijos)         → Embalaje                    │
│  → Seguros                            → Comisiones                  │
│  → Depreciacion                       → Consumo de energia (en      │
│  → Licencias (tarifa plana)             parte)                      │
│                                       → Licencias (por usuario)     │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Ejemplos de Costos Tipicos de TI

| Costos Fijos | Costos Variables |
|--------------|------------------|
| Alquiler de servidor (tarifa mensual) | Costos de nube (basado en uso) |
| Suscripcion anual Microsoft 365 | AWS Pay-as-you-go |
| Salarios de TI | Consultores externos (por hora) |
| Espacio de oficina del depto. TI | Costos de trafico |
| Contrato de mantenimiento de firewall | Costos de impresion |

### Costos Directos e Indirectos

```
┌─────────────────────────────────────────────────────────────────────┐
│           COSTOS DIRECTOS vs. COSTOS INDIRECTOS                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  COSTOS DIRECTOS                      COSTOS INDIRECTOS             │
│  ─────────────────────────────────────────────────────────────────  │
│  Directamente atribuibles a           No directamente atribuibles   │
│  un producto/pedido                   (deben ser asignados)         │
│                                                                      │
│  Ejemplos TI:                         Ejemplos TI:                  │
│  → Hardware para proyecto cliente     → Electricidad del centro     │
│  → Licencia para pedido de cliente      de datos                    │
│    especifico                         → Salario del gerente de TI   │
│  → Consultores externos para          → Licencias de software       │
│    proyecto                             generales                   │
│                                       → Costos de oficina del       │
│                                         depto. TI                   │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │                                                              │    │
│  │    Proyecto A                  Proyecto B                   │    │
│  │    ┌───────┐                ┌───────┐                       │    │
│  │    │       │                │       │                       │    │
│  │    │CD: $5 │                │CD: $8 │   Costos directos     │    │
│  │    │       │                │       │   asignados directam. │    │
│  │    └───────┘                └───────┘                       │    │
│  │         ↑                        ↑                          │    │
│  │         │                        │                          │    │
│  │         └──────────┬─────────────┘                          │    │
│  │                    │                                        │    │
│  │            ┌───────┴───────┐                                │    │
│  │            │Costos indir.  │   Deben ser distribuidos       │    │
│  │            │   (CI: $10)   │   ej., 50/50 o por             │    │
│  │            │               │   tiempo empleado              │    │
│  │            └───────────────┘                                │    │
│  │                                                              │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Tipos de Costos en TI

```
┌─────────────────────────────────────────────────────────────────────┐
│                    TIPOS DE COSTOS EN TI                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  1. COSTOS DE PERSONAL                                              │
│     → Salarios, contribuciones a la seguridad social, formacion     │
│     → A menudo el mayor bloque de costos en empresas de TI          │
│                                                                      │
│  2. COSTOS DE HARDWARE                                              │
│     → Adquisicion (servidores, PCs, red)                            │
│     → Mantenimiento y piezas de repuesto                            │
│     → Depreciacion                                                  │
│                                                                      │
│  3. COSTOS DE SOFTWARE                                              │
│     → Licencias (unica vez o suscripcion)                           │
│     → Contratos de mantenimiento                                    │
│     → Desarrollo personalizado                                      │
│                                                                      │
│  4. COSTOS DE INFRAESTRUCTURA                                       │
│     → Centro de datos (alquiler, electricidad, refrigeracion)       │
│     → Red (internet, lineas dedicadas)                              │
│     → Servicios en la nube                                          │
│                                                                      │
│  5. COSTOS OPERATIVOS                                               │
│     → Soporte y mantenimiento                                       │
│     → Formacion                                                     │
│     → Seguros                                                       │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Calculo de Costos Totales

```
┌─────────────────────────────────────────────────────────────────────┐
│                    FORMULA DE COSTOS TOTALES                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Costos Totales (CT) = Costos Fijos (CF) + Costos Variables (CV)    │
│                                                                      │
│                     CT = CF + (cv x Cantidad)                        │
│                                                                      │
│  Donde:                                                             │
│  → CF = Costos fijos (constantes)                                   │
│  → cv = costos variables unitarios                                  │
│  → Cantidad = Volumen de produccion / unidades de uso               │
│                                                                      │
│  ────────────────────────────────────────────────────────────────   │
│                                                                      │
│  EJEMPLO:                                                           │
│  Un proveedor de servicios TI tiene:                                │
│  → Costos fijos: $10,000 / mes (salarios, alquiler)                 │
│  → Costos variables: $50 / hora de soporte                          │
│                                                                      │
│  Con 100 horas de soporte por mes:                                  │
│  CT = $10,000 + ($50 x 100) = $10,000 + $5,000 = $15,000            │
│                                                                      │
│  Con 200 horas de soporte por mes:                                  │
│  CT = $10,000 + ($50 x 200) = $10,000 + $10,000 = $20,000           │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Terminos Clave

| Termino | Explicacion |
|---------|-------------|
| **Costos fijos** | Costos que se incurren independientemente del volumen de produccion |
| **Costos variables** | Costos que aumentan/disminuyen con el volumen de produccion |
| **Costos directos** | Costos directamente atribuibles a un producto/pedido |
| **Costos indirectos** | Costos no directamente atribuibles (deben ser asignados) |
| **Depreciacion** | Distribucion de costos de adquisicion durante la vida util |
| **Costos totales** | Suma de costos fijos y variables |

---

## Consejos para el Examen

1. **Mnemotecnico Fijos vs. Variables:**
   - **F**ijo = permanece **f**irme (independiente del volumen)
   - **V**ariable = **v**aria con el volumen

2. **Preguntas tipicas de examen:**
   - Clasificacion de elementos de costo
   - Calculo de costos totales
   - Diferencia entre costos directos/indirectos

3. **Errores comunes:**
   - Los salarios suelen ser costos fijos (no variables!)
   - Los costos de nube pueden ser fijos O variables (segun el modelo)

---

## Ejercicios Practicos

### Ejercicio 1: Clasificacion de Costos

Clasifica correctamente los siguientes costos de ConSystem GmbH:

| Elemento de Costo | Fijo/Variable | Directo/Indirecto |
|-------------------|---------------|-------------------|
| Alquiler de servidor (tarifa mensual) | | |
| Licencia para proyecto cliente | | |
| Electricidad del centro de datos | | |
| Salario del gerente de TI | | |
| Costos de nube (pay-as-you-go) | | |

<details>
<summary>Mostrar Solucion</summary>

| Elemento de Costo | Fijo/Variable | Directo/Indirecto |
|-------------------|---------------|-------------------|
| Alquiler de servidor (tarifa mensual) | Fijo | Indirecto |
| Licencia para proyecto cliente | Variable | Directo |
| Electricidad del centro de datos | Fijo* | Indirecto |
| Salario del gerente de TI | Fijo | Indirecto |
| Costos de nube (pay-as-you-go) | Variable | Directo/Indirecto** |

*La electricidad tambien puede ser parcialmente variable pero a menudo se considera fija
**Depende de si es para un proyecto especifico o uso general

</details>

### Ejercicio 2: Calculo de Costos Totales

ConSystem GmbH esta planificando un nuevo departamento de soporte:
- Costos fijos: $8,000/mes (alquiler, salarios de empleados fijos)
- Costos variables: $35/ticket de soporte (procesamiento externo)

a) Cuales son los costos totales con 50 tickets/mes?
b) Cuales son con 150 tickets/mes?
c) Con cuantos tickets tiene sentido contratar otro empleado fijo (salario: $4,000/mes) si puede manejar 100 tickets?

<details>
<summary>Mostrar Solucion</summary>

a) **50 tickets:**
CT = $8,000 + ($35 x 50) = $8,000 + $1,750 = **$9,750**

b) **150 tickets:**
CT = $8,000 + ($35 x 150) = $8,000 + $5,250 = **$13,250**

c) **Punto de equilibrio para nuevo empleado:**
- Costo externo para 100 tickets: $35 x 100 = $3,500
- Costo del empleado fijo: $4,000
- Diferencia: $500/mes MAS CARO con nuevo empleado

Con 100 tickets, el externo todavia es rentable.
Con 115 tickets: $35 x 115 = $4,025 > $4,000
**A partir de aproximadamente 115 tickets/mes, el nuevo empleado es rentable.**

</details>

### Ejercicio 3: Analisis de Presupuesto de TI

Un presupuesto de TI contiene los siguientes elementos:

| Elemento | Cantidad |
|----------|----------|
| Costos de personal | $500,000 |
| Adquisicion de hardware | $80,000 |
| Licencias de software | $60,000 |
| Servicios en la nube | $40,000 |
| Formacion | $20,000 |

a) Cual elemento es tipicamente el mayor bloque de costos?
b) Cuales elementos son predominantemente costos fijos?
c) Cuales elementos podrian ser variables?

<details>
<summary>Mostrar Solucion</summary>

a) **Costos de personal** ($500,000) - tipicamente 60-70% del presupuesto de TI

b) **Predominantemente costos fijos:**
- Costos de personal (los salarios son fijos)
- Adquisicion de hardware (la depreciacion es fija)
- Licencias de software (a menudo licencias anuales = fijas)

c) **Costos potencialmente variables:**
- Servicios en la nube (si es pay-as-you-go)
- Formacion (segun necesidad)
- Partes de licencias de software (si es por usuario)

</details>

---

## Referencias Cruzadas

- [ROI y TCO](08-02-02-roi-tco.md) - Calculo de viabilidad economica
- [Analisis de Utilidad](08-02-03-utility-analysis.md) - Toma de decisiones
- [Calculo de Precios](../08-05-pricing/08-05-01-price-calculation.md) - Margen de costos
