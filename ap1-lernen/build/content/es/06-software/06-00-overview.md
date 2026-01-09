# Capítulo 06: Software - Resumen

## Estructura del Capítulo

Este capítulo cubre los fundamentos del software, programación, UML, bases de datos y el proceso de desarrollo.

```
06-software/
├── 06-00-overview.md                    (este archivo)
│
├── 06-01-fundamentals/
│   ├── 06-01-01-software-types.md          Software de sistema, Software de aplicación
│   ├── 06-01-02-programming-paradigms.md  Imperativo, Orientado a objetos, Funcional
│   └── 06-01-03-evaluation-criteria.md  Selección de software
│
├── 06-02-programming/
│   ├── 06-02-01-variables-datatypes.md   Integer, String, Boolean, etc.
│   ├── 06-02-02-control-structures.md     If, Bucles, Switch
│   ├── 06-02-03-procedures-functions.md  Funciones, Parámetros, Valores de retorno
│   ├── 06-02-04-oop-fundamentals.md         Clases, Objetos, Métodos
│   ├── 06-02-05-pseudocode.md             Representación de algoritmos
│   ├── 06-02-06-desk-check.md       [NUEVO 2025] Prueba de Escritorio
│   └── 06-02-07-code-debugging.md       [NUEVO 2025] Identificación de Errores en Código
│
├── 06-03-uml/
│   ├── 06-03-01-class-diagram.md        Clases, Relaciones
│   ├── 06-03-02-use-case-diagram.md      Casos de Uso
│   └── 06-03-03-activity-diagram.md    [NUEVO 2025] Diagramas de Actividad
│
├── 06-04-databases/
│   ├── 06-04-01-relational-databases.md Tablas, Relaciones (¡SIN SQL!)
│   ├── 06-04-02-erd.md                     Diagramas Entidad-Relación
│   └── 06-04-03-redundancy-normal-forms.md  Normalización
│
├── 06-05-web-development/
│   └── 06-05-01-html-xml.md               Lenguajes de Marcado
│
├── 06-06-development-process/
│   ├── 06-06-01-sdlc.md                   Ciclo de Vida del Desarrollo de Software
│   ├── 06-06-02-testing.md                Tipos de pruebas, Métodos de prueba
│   └── 06-06-03-debugging.md              Detección de errores
│
└── 06-07-licenses/
    ├── 06-07-01-copyright.md           Protección del software
    └── 06-07-02-license-types.md            Open Source, Propietario
```

---

## Resumen de Temas

### 06-01 Fundamentos
- Distinguir entre software de sistema y software de aplicación
- Comprender los paradigmas de programación
- Evaluar software según criterios

### 06-02 Programación
- Variables y tipos de datos
- Estructuras de control (condiciones, bucles)
- Funciones y procedimientos
- Fundamentos de OOP (clases, objetos)
- Escribir y leer pseudocódigo
- **[NUEVO 2025]** Realizar pruebas de escritorio
- **[NUEVO 2025]** Encontrar errores en código

### 06-03 UML
- Crear y leer diagramas de clases
- Comprender diagramas de casos de uso
- **[NUEVO 2025]** Diagramas de actividad

### 06-04 Bases de Datos
- Comprender bases de datos relacionales (SIN SQL - ¡SQL está en AP2!)
- Diagramas Entidad-Relación
- Normalización y formas normales

### 06-05 Desarrollo Web
- Fundamentos de HTML
- Comprender XML

### 06-06 Proceso de Desarrollo
- Ciclo de Vida del Desarrollo de Software
- Tipos de pruebas y métodos de prueba
- Técnicas de depuración

### 06-07 Licencias
- Derechos de autor para software
- Comprender modelos de licencias

---

## Nuevos Temas en el Catálogo de Exámenes 2025

| Tema | Archivo | Importancia |
|------|---------|-------------|
| **Prueba de Escritorio** | 06-02-06 | ALTA |
| **Detección de Errores en Código** | 06-02-07 | ALTA |
| **Diagrama de Actividad** | 06-03-03 | ALTA |
| **Redundancia/Formas Normales** | 06-04-03 | MEDIA |

---

## NO en el Catálogo de Exámenes 2025

Los siguientes temas han sido eliminados de AP1:

| Tema Eliminado | Nota |
|----------------|------|
| **Consultas SQL** | Ahora solo en AP2 |
| **Estructogramas (Nassi-Shneiderman)** | Eliminado |
| **PAP (Diagrama de Flujo de Programa)** | Eliminado |
| **Herencia (OOP)** | Solo conceptos básicos, sin herencia |
| **Bases de Datos No Relacionales** | Eliminado |

---

## Relevancia para el Examen

```
┌────────────────────────────────────────────────────────────────┐
│              RELEVANCIA PARA EL EXAMEN CAPÍTULO 06             │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  MUY COMÚN en exámenes:                                        │
│  • Tipos de datos y estructuras de control                     │
│  • Leer y comprender pseudocódigo                              │
│  • Diagramas de clases UML                                     │
│  • ERD (Entidad-Relación)                                      │
│  • Prueba de escritorio [NUEVO 2025]                           │
│  • Modelos de licencias                                        │
│                                                                │
│  REGULAR en exámenes:                                          │
│  • Fundamentos de OOP (clases, objetos)                        │
│  • Diagramas de casos de uso                                   │
│  • Tipos de pruebas                                            │
│  • Formas normales                                             │
│                                                                │
│  OCASIONAL:                                                    │
│  • HTML/XML                                                    │
│  • Fases del SDLC                                              │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

## Recomendaciones de Estudio

1. **Asegurar los fundamentos:** Tipos de datos, estructuras de control, funciones
2. **Practicar diagramas:** ERD, diagrama de clases UML, Casos de uso, Diagrama de actividad
3. **Entrenar pruebas de escritorio:** Revisar el código línea por línea
4. **Comprender licencias:** Open Source vs. Propietario

---

## Referencias Cruzadas a Otros Capítulos

- [01-03 Modelos de Proceso](../01-project-management/01-03-process-models/) - SDLC, Scrum
- [02-04 Calidad del Software](../02-quality-management/02-04-software-quality.md) - Criterios de calidad
- [05-06 Inteligencia Artificial](../05-it-systems/05-06-artificial-intelligence/) - Asistentes de código IA
