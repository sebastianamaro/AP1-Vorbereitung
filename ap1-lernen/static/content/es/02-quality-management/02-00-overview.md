# Gestión de Calidad - Visión General del Capítulo

## Introducción

La Gestión de Calidad (GC) es un enfoque sistemático para asegurar y mejorar la calidad de productos y servicios. En la industria de TI, la GC desempeña un papel central en el desarrollo de software, la provisión de servicios de TI y la configuración de puestos de trabajo.

---

## Relevancia para el Examen

La Gestión de Calidad es un componente importante del examen AP1. Los temas típicos del examen son:

- Definición e importancia de la calidad
- Serie de normas DIN EN ISO 9000ff.
- Los 7 principios de la gestión de calidad
- Ciclo PDCA (Plan-Do-Check-Act)
- Procesos de certificación
- Accesibilidad en TI

---

## Estructura del Capítulo

```
02-quality-management/
├── 02-00-overview.md (Este archivo)
├── 02-01-fundamentals/
│   ├── 02-01-01-quality-concept.md
│   └── 02-01-02-qm-systems.md
├── 02-02-standards-certification/
│   ├── 02-02-01-din-en-iso-9000.md
│   └── 02-02-02-certification.md
├── 02-03-management-approaches/
│   ├── 02-03-01-tqm.md
│   └── 02-03-02-pdca-cycle.md
├── 02-04-software-quality.md
└── 02-05-accessibility.md
```

---

## Relaciones en la Gestión de Calidad

```
┌─────────────────────────────────────────────────────────────────┐
│                    GESTIÓN DE CALIDAD                           │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐         │
│  │ PLANIFICACIÓN│    │  CONTROL    │    │ASEGURAMIENTO│         │
│  │ DE CALIDAD  │ ─► │ DE CALIDAD  │ ─► │ DE CALIDAD  │         │
│  └─────────────┘    └─────────────┘    └─────────────┘         │
│        │                  │                  │                  │
│        └──────────────────┼──────────────────┘                  │
│                           ▼                                     │
│                    ┌─────────────┐                              │
│                    │  PRUEBAS    │                              │
│                    │ DE CALIDAD  │                              │
│                    └─────────────┘                              │
│                           │                                     │
│                           ▼                                     │
│              ┌─────────────────────────┐                        │
│              │ MEJORA                   │                        │
│              │ CONTINUA (PMC)           │                        │
│              │      Ciclo PDCA          │                        │
│              └─────────────────────────┘                        │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

## Los 7 Principios de la Gestión de Calidad

Según DIN EN ISO 9000ff.:

| No. | Principio | Significado |
|-----|-----------|-------------|
| 1 | **Enfoque al Cliente** | Comprender y cumplir las necesidades del cliente |
| 2 | **Liderazgo** | Dirección unificada a través de los líderes |
| 3 | **Compromiso de las Personas** | Involucrar a los empleados en todos los niveles |
| 4 | **Enfoque a Procesos** | Comprender las actividades como procesos interconectados |
| 5 | **Mejora** | Mejora continua como objetivo |
| 6 | **Toma de Decisiones Basada en Evidencia** | Basar las decisiones en análisis de datos |
| 7 | **Gestión de las Relaciones** | Mantener relaciones con proveedores y socios |

---

## Visión General de Normas Importantes

| Norma | Contenido |
|-------|-----------|
| **DIN EN ISO 9000** | Fundamentos y vocabulario de GC |
| **DIN EN ISO 9001** | Requisitos para sistemas de GC (certificable) |
| **DIN EN ISO 9004** | Directrices para la mejora del desempeño |

---

## Referencias Cruzadas

- [01-05-02 Métodos de Reflexión](../01-project-management/01-05-teamwork/01-05-02-reflection-methods.md) - Mejora continua en el contexto del proyecto
- [03-02-01 TOM](../03-data-protection/03-02-technical-measures/03-02-01-tom.md) - Medidas técnicas y organizativas
- [04-04-02 ISMS](../04-it-security/04-04-frameworks-standards/04-04-02-isms.md) - Gestión de calidad en seguridad de TI
