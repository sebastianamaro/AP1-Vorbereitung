# Analisis de Utilidad

## Objetivos de Aprendizaje

Despues de esta seccion, podras:
- Explicar la estructura de un analisis de utilidad
- Ponderar y evaluar criterios
- Realizar un analisis de utilidad completo
- Interpretar y justificar el resultado

---

## Contenido Principal

### Que es un Analisis de Utilidad?

Un **Analisis de Utilidad** (tambien llamado Modelo de Puntuacion o Matriz de Decision Ponderada) es un metodo sistematico para la toma de decisiones donde varias alternativas se evaluan basandose en criterios ponderados.

**Areas de aplicacion:**
- Seleccion de productos (ej., ¿cual portatil?)
- Seleccion de proveedores
- Seleccion de software/sistemas
- Decisiones de ubicacion

```
┌─────────────────────────────────────────────────────────────────────┐
│                    ANALISIS DE UTILIDAD - VISION GENERAL            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  PASO 1: Definir criterios                                          │
│       ↓     (¿Que es importante?)                                   │
│                                                                      │
│  PASO 2: Ponderar criterios                                         │
│       ↓     (¿Que tan importante es cada criterio? Suma = 100%)     │
│                                                                      │
│  PASO 3: Evaluar alternativas                                       │
│       ↓     (Asignar puntos, ej., 1-10)                             │
│                                                                      │
│  PASO 4: Calcular valores de utilidad                               │
│       ↓     (Puntos x Ponderacion)                                  │
│                                                                      │
│  PASO 5: Evaluar resultado                                          │
│             (Mayor valor de utilidad = mejor alternativa)           │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Estructura de la Tabla de Analisis de Utilidad

```
┌─────────────────────────────────────────────────────────────────────┐
│                ANALISIS DE UTILIDAD - ESTRUCTURA BASICA             │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│                           │ Pond. │ Alt. A  │ Alt. B  │ Alt. C     │
│  Criterio                │  (%)  │ P │ VU  │ P │ VU  │ P │ VU      │
│  ────────────────────────┼───────┼───┼─────┼───┼─────┼───┼──────   │
│  Criterio 1              │  30%  │   │     │   │     │   │         │
│  Criterio 2              │  25%  │   │     │   │     │   │         │
│  Criterio 3              │  20%  │   │     │   │     │   │         │
│  Criterio 4              │  15%  │   │     │   │     │   │         │
│  Criterio 5              │  10%  │   │     │   │     │   │         │
│  ────────────────────────┼───────┼───┼─────┼───┼─────┼───┼──────   │
│  TOTAL                   │ 100%  │   │     │   │     │   │         │
│                                                                      │
│  P  = Puntos (ej., 1-10)                                            │
│  VU = Valor de Utilidad (Puntos x Ponderacion)                      │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Ejemplo: Seleccion de Portatil

ConSystem GmbH quiere adquirir nuevos portatiles para los empleados. Hay tres modelos disponibles.

```
┌─────────────────────────────────────────────────────────────────────┐
│          ANALISIS DE UTILIDAD: SELECCION DE PORTATIL                │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│                      │Pond. │  Portatil A │  Portatil B │ Portatil C│
│  Criterio           │  (%) │ P  │  VU    │ P  │  VU    │ P  │  VU  │
│  ───────────────────┼──────┼────┼────────┼────┼────────┼────┼───── │
│  Precio             │  30% │ 8  │ 2.40   │ 6  │ 1.80   │ 9  │ 2.70 │
│  Rendimiento        │  25% │ 7  │ 1.75   │ 9  │ 2.25   │ 6  │ 1.50 │
│  Peso               │  20% │ 6  │ 1.20   │ 8  │ 1.60   │ 7  │ 1.40 │
│  Duracion bateria   │  15% │ 9  │ 1.35   │ 7  │ 1.05   │ 8  │ 1.20 │
│  Servicio/Soporte   │  10% │ 7  │ 0.70   │ 8  │ 0.80   │ 5  │ 0.50 │
│  ───────────────────┼──────┼────┼────────┼────┼────────┼────┼───── │
│  TOTAL              │ 100% │    │ 7.40   │    │ 7.50   │    │ 7.30 │
│                                                                      │
│  RESULTADO: El Portatil B tiene el mayor valor de utilidad (7.50)   │
│             → RECOMENDACION: Portatil B                             │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Ejemplo de Calculo

Para el criterio "Precio" con el Portatil A:
- Puntos: 8
- Ponderacion: 30% = 0.30
- **Valor de Utilidad = 8 x 0.30 = 2.40**

### Guia Paso a Paso

```
┌─────────────────────────────────────────────────────────────────────┐
│                    PASO 1: DEFINIR CRITERIOS                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Pregunta: "¿Que es importante para la decision?"                   │
│                                                                      │
│  Criterios tipicos para adquisicion de TI:                          │
│  → Precio / Costo                                                   │
│  → Rendimiento                                                      │
│  → Calidad / Construccion                                           │
│  → Compatibilidad                                                   │
│  → Soporte / Servicio                                               │
│  → Sostenibilidad                                                   │
│  → Tiempo de entrega                                                │
│  → Escalabilidad                                                    │
│                                                                      │
│  CONSEJO: 4-6 criterios es optimo                                   │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                    PASO 2: PONDERAR CRITERIOS                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Pregunta: "¿Que tan importante es cada criterio respecto a otros?" │
│                                                                      │
│  IMPORTANTE: La suma de todas las ponderaciones DEBE ser 100%!      │
│                                                                      │
│  Ejemplo:                                                           │
│  ├── Precio:              30%  (muy importante)                     │
│  ├── Rendimiento:         25%  (importante)                         │
│  ├── Peso:                20%  (importante)                         │
│  ├── Duracion bateria:    15%  (moderadamente importante)           │
│  └── Soporte:             10%  (menos importante)                   │
│                          ─────                                       │
│                          100%                                        │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                    PASO 3: EVALUAR ALTERNATIVAS                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Asignar puntos (tipico: escala 1-10)                               │
│                                                                      │
│  10 = excelente                                                     │
│   8 = bueno                                                         │
│   6 = satisfactorio                                                 │
│   4 = adecuado                                                      │
│   2 = pobre                                                         │
│   0 = inaceptable                                                   │
│                                                                      │
│  Para COSTOS: Menor precio = MAYOR puntuacion!                      │
│  (porque un precio mas bajo es bueno)                               │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                    PASO 4: CALCULAR VALOR DE UTILIDAD               │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Valor de Utilidad = Puntos x Ponderacion                           │
│                                                                      │
│  Calcular para cada criterio y cada alternativa!                    │
│  Luego sumar todos los valores de utilidad para una alternativa.    │
│                                                                      │
│  Ejemplo Portatil A:                                                │
│  Precio:           8 x 0.30 = 2.40                                  │
│  Rendimiento:      7 x 0.25 = 1.75                                  │
│  Peso:             6 x 0.20 = 1.20                                  │
│  Bateria:          9 x 0.15 = 1.35                                  │
│  Soporte:          7 x 0.10 = 0.70                                  │
│                             ─────                                    │
│  TOTAL:                      7.40                                    │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────┐
│                    PASO 5: EVALUAR RESULTADO                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  La alternativa con el MAYOR valor total de utilidad                │
│  es la mejor opcion matematicamente.                                │
│                                                                      │
│  PERO: El resultado es una recomendacion, no una verdad absoluta!   │
│                                                                      │
│  Para verificar:                                                    │
│  → ¿Son sensatas las ponderaciones?                                 │
│  → ¿Son objetivas las evaluaciones?                                 │
│  → ¿Hay criterios eliminatorios (ej., presupuesto excedido)?        │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Ventajas y Limitaciones

| Ventajas | Limitaciones |
|----------|--------------|
| Decision sistematica | La ponderacion es subjetiva |
| Trazable/documentada | La evaluacion puede ser subjetiva |
| Comparabilidad | Criterios eliminatorios no considerados |
| Factores cualitativos + cuantitativos | Consume tiempo con muchas alternativas |

---

## Terminos Clave

| Termino | Explicacion |
|---------|-------------|
| **Analisis de utilidad** | Metodo para evaluacion ponderada de alternativas |
| **Criterio** | Caracteristica relevante para la decision |
| **Ponderacion** | Importancia relativa de un criterio (en %) |
| **Evaluacion por puntos** | Calificacion de una alternativa para un criterio |
| **Valor de utilidad** | Producto de puntos y ponderacion |
| **Criterio eliminatorio** | Criterio de exclusion que DEBE cumplirse |

---

## Consejos para el Examen

1. **En casi CADA examen!**
   - El analisis de utilidad es un favorito absoluto del examen
   - Definitivamente practicar, practicar, practicar!

2. **Reglas importantes:**
   - Las ponderaciones DEBEN sumar 100%
   - Para costos: Menor = MAYOR puntuacion
   - Valor de utilidad = Puntos x Ponderacion (no sumar!)

3. **Evitar errores tipicos:**
   - Olvidar sumar ponderaciones (debe ser 100%!)
   - Calcular mal el valor de utilidad (multiplicar, no sumar!)
   - Dar puntos altos por caro (es lo contrario!)

4. **Nota de examen:**
   - A menudo solo se da parte (ej., ponderaciones)
   - Entonces asignar puntos tu mismo y calcular

---

## Ejercicios Practicos

### Ejercicio 1: Calculo Completo

Completa el analisis de utilidad para la seleccion de servidor:

| Criterio | Pond. | Servidor A (P) | Servidor A (VU) | Servidor B (P) | Servidor B (VU) |
|----------|-------|----------------|-----------------|----------------|-----------------|
| Precio | 35% | 7 | ? | 5 | ? |
| Rendimiento | 30% | 8 | ? | 9 | ? |
| Eficiencia energetica | 20% | 6 | ? | 8 | ? |
| Soporte | 15% | 9 | ? | 7 | ? |
| **TOTAL** | 100% | | ? | | ? |

¿Cual servidor deberia elegirse?

<details>
<summary>Mostrar Solucion</summary>

| Criterio | Pond. | Servidor A (P) | Servidor A (VU) | Servidor B (P) | Servidor B (VU) |
|----------|-------|----------------|-----------------|----------------|-----------------|
| Precio | 35% | 7 | **2.45** | 5 | **1.75** |
| Rendimiento | 30% | 8 | **2.40** | 9 | **2.70** |
| Eficiencia energetica | 20% | 6 | **1.20** | 8 | **1.60** |
| Soporte | 15% | 9 | **1.35** | 7 | **1.05** |
| **TOTAL** | 100% | | **7.40** | | **7.10** |

**Recomendacion: Servidor A** (mayor valor de utilidad: 7.40 vs. 7.10)

</details>

### Ejercicio 2: Crear Analisis de Utilidad Completo

ConSystem GmbH esta seleccionando un proveedor de nube. Crea un analisis de utilidad con:

**Criterios:**
- Precio (40%)
- Seguridad de datos (30%)
- Disponibilidad (20%)
- Soporte (10%)

**Informacion:**
- Proveedor A: Economico, seguridad media, buena disponibilidad, buen soporte
- Proveedor B: Caro, alta seguridad, muy buena disponibilidad, soporte medio
- Proveedor C: Precio medio, alta seguridad, buena disponibilidad, muy buen soporte

<details>
<summary>Mostrar Solucion</summary>

| Criterio | Pond. | Proveedor A | VU | Proveedor B | VU | Proveedor C | VU |
|----------|-------|-------------|-----|-------------|-----|-------------|-----|
| Precio | 40% | 9 | 3.60 | 5 | 2.00 | 7 | 2.80 |
| Seguridad datos | 30% | 6 | 1.80 | 9 | 2.70 | 9 | 2.70 |
| Disponibilidad | 20% | 7 | 1.40 | 9 | 1.80 | 7 | 1.40 |
| Soporte | 10% | 7 | 0.70 | 6 | 0.60 | 9 | 0.90 |
| **TOTAL** | 100% | | **7.50** | | **7.10** | | **7.80** |

**Recomendacion: Proveedor C** (mayor valor de utilidad: 7.80)

Razonamiento: El Proveedor C ofrece el mejor paquete general de precio moderado, alta seguridad y muy buen soporte.

</details>

### Ejercicio 3: Determinar Ponderacion

El gerente de TI quiere establecer ponderaciones para los siguientes criterios. Prioriza y justifica:

- Precio de compra
- Costos de mantenimiento
- Soporte del fabricante
- Compatibilidad con sistemas existentes
- Respeto al medio ambiente

<details>
<summary>Mostrar Solucion</summary>

**Posible ponderacion:**

| Criterio | Pond. | Razonamiento |
|----------|-------|--------------|
| Compatibilidad | 30% | Debe funcionar con la infraestructura existente |
| Precio de compra | 25% | Importante para el presupuesto, pero no unico decisivo |
| Costos mantenimiento | 20% | Considerar costos a largo plazo (TCO) |
| Soporte fabricante | 15% | Importante para resolucion de problemas |
| Medio ambiente | 10% | Deseable pero no critico |
| **TOTAL** | 100% | |

**Ponderacion alternativa posible!** La ponderacion "correcta" depende de las prioridades de la empresa.

</details>

---

## Referencias Cruzadas

- [Comparacion de Ofertas](08-02-04-offer-comparison.md) - Comparacion cuantitativa
- [ROI y TCO](08-02-02-roi-tco.md) - Calculo de viabilidad economica
- [Proceso de Adquisicion](../08-03-procurement/08-03-01-procurement-process.md) - Compras
