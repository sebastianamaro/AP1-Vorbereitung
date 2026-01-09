# Proteccion de Datos - Vision General del Capitulo

## Introduccion

La proteccion de datos se refiere a la proteccion contra el uso indebido de datos personales y protege el derecho a la autodeterminacion informativa. En el mundo digital, la proteccion de datos es particularmente importante porque los datos pueden recopilarse, procesarse y compartirse facilmente.

---

## Relevancia para el Examen

La proteccion de datos es un tema importante en el examen AP1. Son particularmente relevantes:

- Principios y fundamentos del RGPD
- Datos personales (definicion y ejemplos)
- Derechos de los interesados segun el RGPD
- Medidas tecnicas y organizativas (TOM)
- Anonimizacion y seudonimizacion (NUEVO 2025!)
- Roles: Delegado de Proteccion de Datos, Responsable, Encargado del tratamiento

---

## Estructura del Capitulo

```
03-data-protection/
├── 03-00-overview.md (Este archivo)
├── 03-01-fundamentals/
│   ├── 03-01-01-gdpr-principles.md
│   ├── 03-01-02-personal-data.md
│   └── 03-01-03-data-subject-rights.md
├── 03-02-technical-measures/
│   ├── 03-02-01-tom.md
│   ├── 03-02-02-anonymization-pseudonymization.md
│   └── 03-02-03-standard-data-protection-model.md
└── 03-03-roles-responsibilities.md
```

---

## Marco Legal

### Jerarquia de las Leyes de Proteccion de Datos

```
┌─────────────────────────────────────────────────────────────────┐
│                    NIVEL UE                                      │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │    RGPD - Reglamento General de Proteccion de Datos       │  │
│  │    (UE) 2016/679 - Aplicable en toda la UE desde          │  │
│  │    25.05.2018                                             │  │
│  └───────────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────┤
│                    NIVEL NACIONAL                                │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │    BDSG - Ley Federal de Proteccion de Datos              │  │
│  │    Complementa el RGPD para Alemania (clausulas de        │  │
│  │    apertura)                                              │  │
│  └───────────────────────────────────────────────────────────┘  │
├─────────────────────────────────────────────────────────────────┤
│                    SECTORES ESPECIFICOS                          │
│  ┌─────────────────────┐  ┌─────────────────────┐              │
│  │   TMG/TTDSG         │  │   TKG               │              │
│  │   Telemedios        │  │   Telecomunicaciones│              │
│  └─────────────────────┘  └─────────────────────┘              │
└─────────────────────────────────────────────────────────────────┘
```

---

## Los 6 Principios del RGPD (Art. 5)

| No. | Principio | Descripcion |
|-----|-----------|-------------|
| 1 | **Licitud, Transparencia** | Tratamiento solo con base legal, comprensible |
| 2 | **Limitacion de la Finalidad** | Solo para fines especificados y legitimos |
| 3 | **Minimizacion de Datos** | Recopilar solo los datos necesarios |
| 4 | **Exactitud** | Los datos deben ser correctos y actualizados |
| 5 | **Limitacion del Plazo de Conservacion** | Almacenar solo el tiempo necesario |
| 6 | **Integridad y Confidencialidad** | Garantizar la seguridad adecuada |

---

## Roles Importantes en la Proteccion de Datos

| Rol | Descripcion |
|-----|-------------|
| **Interesado** | Persona cuyos datos se estan procesando |
| **Responsable** | Decide sobre los fines y medios del tratamiento |
| **Encargado del Tratamiento** | Procesa datos por cuenta del responsable |
| **Delegado de Proteccion de Datos** | Supervisa el cumplimiento de la proteccion de datos |
| **Autoridad de Control** | Supervision estatal (ej. Comisionados de Proteccion de Datos) |

---

## Referencias Cruzadas

- [04-01-01 Triada CIA](../04-it-security/04-01-protection-goals/04-01-01-cia-triad.md) - Confidencialidad como objetivo de proteccion
- [04-05-01 Metodos de Cifrado](../04-it-security/04-05-cryptography/04-05-01-encryption-methods.md) - Implementacion tecnica
- [08-04-01 Tipos de Contratos](../08-business-processes/08-04-contract-law/08-04-01-contract-types.md) - Acuerdos de tratamiento de datos
