# Criterios de Evaluación para Software

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Conocer criterios para la selección de software
- Distinguir entre requisitos funcionales y no funcionales
- Evaluar software sistemáticamente
- Comprender el análisis de utilidad para la selección de software

---

## Contenido Principal

### ¿Por qué Criterios de Evaluación?

Al seleccionar software, deben considerarse varios factores para encontrar la mejor solución para el propósito previsto.

```
┌─────────────────────────────────────────────────────────────────┐
│              SELECCIÓN DE SOFTWARE - FACTORES DE INFLUENCIA     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│                      ┌─────────────┐                           │
│         ┌───────────►│  SELECCIÓN  │◄───────────┐              │
│         │            │ DE SOFTWARE │            │              │
│         │            └─────────────┘            │              │
│         │                   ▲                   │              │
│         │                   │                   │              │
│   ┌─────┴─────┐      ┌─────┴─────┐      ┌─────┴─────┐        │
│   │ Funciona- │      │ Aspectos  │      │ Viabilidad│        │
│   │ lidad     │      │ Técnicos  │      │ Económica │        │
│   └───────────┘      └───────────┘      └───────────┘        │
│                                                                 │
│   ┌───────────┐      ┌───────────┐      ┌───────────┐        │
│   │ Facilidad │      │ Seguridad │      │ Soporte   │        │
│   │ de Uso    │      │           │      │ & Mant.   │        │
│   └───────────┘      └───────────┘      └───────────┘        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Requisitos Funcionales

Los **requisitos funcionales** describen QUÉ debe poder hacer el software.

| Criterio | Descripción | Ejemplo |
|----------|-------------|---------|
| **Conjunto de Funciones** | ¿Funciones requeridas disponibles? | Gestión de inventario, pedidos |
| **Procesamiento de Datos** | Procesamiento de datos requeridos | Formatos de importación/exportación |
| **Interfaces** | Conexión con otros sistemas | API, intercambio de datos |
| **Informes** | Informes y análisis | Dashboard, exportación Excel |

---

### Requisitos No Funcionales

Los **requisitos no funcionales** describen CÓMO debe funcionar el software.

```
┌────────────────────────────────────────────────────────────────┐
│            REQUISITOS NO FUNCIONALES                            │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  RENDIMIENTO                        USABILIDAD                 │
│  ┌────────────────────┐          ┌────────────────────┐      │
│  │ • Tiempo de        │          │ • Operación        │      │
│  │   respuesta        │          │   intuitiva        │      │
│  │ • Rendimiento      │          │ • Facilidad de     │      │
│  │ • Consumo de       │          │   aprendizaje      │      │
│  │   recursos         │          │ • Accesibilidad    │      │
│  └────────────────────┘          └────────────────────┘      │
│                                                                │
│  SEGURIDAD                         FIABILIDAD                  │
│  ┌────────────────────┐          ┌────────────────────┐      │
│  │ • Protección de    │          │ • Disponibilidad   │      │
│  │   datos            │          │ • Tolerancia a     │      │
│  │ • Control de       │          │   fallos           │      │
│  │   acceso           │          │ • Integridad de    │      │
│  │ • Cifrado          │          │   datos            │      │
│  └────────────────────┘          └────────────────────┘      │
│                                                                │
│  MANTENIBILIDAD                    PORTABILIDAD                │
│  ┌────────────────────┐          ┌────────────────────┐      │
│  │ • Extensibilidad   │          │ • Independencia    │      │
│  │ • Documentación    │          │   de plataforma    │      │
│  │ • Modularidad      │          │ • Instalabilidad   │      │
│  └────────────────────┘          │                    │      │
│                                   └────────────────────┘      │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Criterios Económicos

| Criterio | Descripción |
|----------|-------------|
| **Costos de Adquisición** | Costos de licencia, precio de compra |
| **Costos Operativos** | Mantenimiento, actualizaciones, soporte |
| **Costos de Capacitación** | Formación de empleados |
| **TCO** | Costo Total de Propiedad |
| **ROI** | Retorno de la Inversión |

---

### Criterios Técnicos

| Criterio | Preguntas |
|----------|-----------|
| **Requisitos del Sistema** | ¿Funciona en el hardware existente? |
| **Compatibilidad** | ¿Se adapta a la infraestructura IT existente? |
| **Interfaces** | ¿APIs, formatos de datos disponibles? |
| **Escalabilidad** | ¿Crece con requisitos crecientes? |
| **Capacidad de Actualización** | ¿Actualizaciones regulares? |

---

### Criterios del Proveedor

```
┌────────────────────────────────────────────────────────────────┐
│                    EVALUACIÓN DEL PROVEEDOR                     │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   ┌──────────────────────────────────────────────────────┐    │
│   │  Posición de Mercado  │ ¿Establecido o Startup?       │    │
│   │  Referencias          │ Experiencias de otros clientes│    │
│   │  Seguridad Futura     │ ¿Se sigue desarrollando?      │    │
│   │  Soporte              │ Tiempos de respuesta, calidad │    │
│   │  Oferta de Formación  │ Documentación, capacitaciones │    │
│   │  Términos de Contrato │ Plazos de aviso, SLA          │    │
│   └──────────────────────────────────────────────────────┘    │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Análisis de Utilidad para Selección de Software

El **análisis de utilidad** es un método para la comparación sistemática de alternativas.

```
┌────────────────────────────────────────────────────────────────┐
│                    ANÁLISIS DE UTILIDAD                         │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│   Paso 1: Definir criterios                                    │
│           (Funcionalidad, costos, usabilidad, etc.)            │
│                                                                │
│   Paso 2: Ponderar criterios (Suma = 100%)                     │
│           (ej., Funcionalidad 40%, Costos 30%, etc.)           │
│                                                                │
│   Paso 3: Calificar alternativas (ej., 1-10 puntos)            │
│           (Cada software por criterio)                         │
│                                                                │
│   Paso 4: Calcular valores de utilidad                         │
│           (Peso × Calificación)                                │
│                                                                │
│   Paso 5: Comparar totales                                     │
│           (Mayor valor de utilidad = Recomendación)            │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

#### Ejemplo: Análisis de Utilidad

| Criterio | Peso | Software A | Software B | Software C |
|----------|------|------------|------------|------------|
| | | Puntos / Utilidad | Puntos / Utilidad | Puntos / Utilidad |
| Funcionalidad | 40% | 8 / 3.2 | 9 / 3.6 | 7 / 2.8 |
| Costo | 30% | 9 / 2.7 | 6 / 1.8 | 8 / 2.4 |
| Usabilidad | 20% | 7 / 1.4 | 8 / 1.6 | 9 / 1.8 |
| Soporte | 10% | 6 / 0.6 | 7 / 0.7 | 8 / 0.8 |
| **Total** | **100%** | **7.9** | **7.7** | **7.8** |

**Resultado:** El Software A tiene el mayor valor de utilidad y es recomendado.

---

### Matriz de Decisión

| Aspecto | Software Estándar | Software Personalizado | Nube (SaaS) |
|---------|-------------------|------------------------|-------------|
| **Costo** | Bajo | Alto | Medio (continuo) |
| **Personalización** | Limitada | Completa | Limitada |
| **Disponibilidad** | Inmediata | Tiempo de desarrollo | Inmediata |
| **Mantenimiento** | Proveedor | Propio/Proveedor servicio | Proveedor |
| **Actualizaciones** | Proveedor | Individual | Automáticas |

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Requisito Funcional** | Qué debe hacer el software |
| **Requisito No Funcional** | Cómo debe funcionar el software |
| **Análisis de Utilidad** | Comparación sistemática de alternativas |
| **TCO** | Costo Total de Propiedad |
| **ROI** | Retorno de la Inversión |
| **Escalabilidad** | Capacidad de crecimiento |
| **Usabilidad** | Facilidad de uso |

---

## Consejos para el Examen

### Preguntas Comunes de Examen

- ¿Qué criterios son importantes para la selección de software?
- ¿Qué es un análisis de utilidad?
- Distingue entre requisitos funcionales y no funcionales

### Importante Recordar

- **Funcional** = QUÉ (características, funciones)
- **No funcional** = CÓMO (rendimiento, seguridad, usabilidad)
- **Análisis de utilidad** = Evaluación ponderada de alternativas
- **TCO** = Todos los costos durante el período de uso

---

## Ejercicios Prácticos

### Ejercicio 1
Una empresa está eligiendo entre tres sistemas CRM. Nombra cuatro criterios que deben considerarse en la selección.

**Solución:**
1. **Funcionalidad:** Gestión de contactos, control de ventas, informes
2. **Costo:** Costos de licencia, capacitación, integración
3. **Compatibilidad:** Interfaces con el sistema ERP existente
4. **Facilidad de uso:** Operación intuitiva, aceptación de empleados

### Ejercicio 2
¿Cuál es la diferencia entre requisitos funcionales y no funcionales?

**Solución:**
- **Requisitos Funcionales:** Describen las funciones que un software debe proporcionar (QUÉ). Ejemplo: "El software debe poder crear facturas."
- **Requisitos No Funcionales:** Describen características de calidad del software (CÓMO). Ejemplo: "La factura debe generarse en 2 segundos."

### Ejercicio 3
Realiza un análisis de utilidad simplificado:

Criterios y ponderación:
- Funcionalidad: 50%
- Precio: 30%
- Soporte: 20%

Calificaciones (1-10):
| | Software X | Software Y |
|---|---|---|
| Funcionalidad | 8 | 9 |
| Precio | 9 | 6 |
| Soporte | 7 | 8 |

**Solución:**
| Criterio | Peso | Software X | Software Y |
|----------|------|------------|------------|
| Funcionalidad | 50% | 8 × 0.5 = 4.0 | 9 × 0.5 = 4.5 |
| Precio | 30% | 9 × 0.3 = 2.7 | 6 × 0.3 = 1.8 |
| Soporte | 20% | 7 × 0.2 = 1.4 | 8 × 0.2 = 1.6 |
| **Total** | | **8.1** | **7.9** |

**Resultado:** Se recomienda el Software X (mayor valor de utilidad).

---

## Referencias Cruzadas

- [08-02-03 Análisis de Utilidad](../../08-business-processes/08-02-economics/08-02-03-utility-analysis.md) - Detalles sobre el método
- [08-02-02 ROI y TCO](../../08-business-processes/08-02-economics/08-02-02-roi-tco.md) - Análisis costo-beneficio
- [06-01-01 Tipos de Software](./06-01-01-software-types.md) - Estándar vs. Personalizado
