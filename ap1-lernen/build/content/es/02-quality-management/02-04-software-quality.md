# Calidad del Software

## Objetivos de Aprendizaje

Después de este capítulo usted debería:
- Conocer las características de calidad del software
- Comprender los métodos de aseguramiento de calidad en el desarrollo de software
- Ser capaz de crear protocolos de prueba
- Comprender la conexión entre calidad del software y GC

---

## Contenido Principal

### ¿Qué es la Calidad del Software?

**Calidad del software** se refiere al grado en que un producto de software cumple con los requisitos especificados e implícitos. Abarca tanto propiedades funcionales como no funcionales.

---

### Características de Calidad del Software

Según ISO/IEC 25010 (anteriormente ISO 9126), se distinguen ocho características principales:

```
┌─────────────────────────────────────────────────────────────────┐
│           CARACTERÍSTICAS DE CALIDAD DEL SOFTWARE               │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │Funcionalidad │  │  Fiabilidad  │  │  Usabilidad  │          │
│  │              │  │              │  │              │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐          │
│  │ Eficiencia   │  │Mantenibilidad│  │ Portabilidad │          │
│  │              │  │              │  │              │          │
│  └──────────────┘  └──────────────┘  └──────────────┘          │
│                                                                 │
│  ┌──────────────┐  ┌──────────────┐                            │
│  │  Seguridad   │  │Compatibilidad│                            │
│  │              │  │              │                            │
│  └──────────────┘  └──────────────┘                            │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Características de Calidad en Detalle

| Característica | Descripción | Ejemplo |
|----------------|-------------|---------|
| **Funcionalidad** | El software cumple las funciones especificadas | El cálculo entrega resultados correctos |
| **Fiabilidad** | Mantener el rendimiento bajo condiciones definidas | Ejecución estable sin fallos |
| **Usabilidad** | Esfuerzo requerido para el uso, facilidad de aprendizaje | Operación intuitiva, buena función de ayuda |
| **Eficiencia** | Relación entre rendimiento y consumo de recursos | Tiempos de respuesta rápidos, bajo uso de memoria |
| **Mantenibilidad** | Esfuerzo requerido para cambios y corrección de errores | Código modular y documentado |
| **Portabilidad** | Capacidad de transferir a otros entornos | Funciona en diferentes sistemas operativos |
| **Seguridad** | Protección contra acceso no autorizado | Autenticación segura |
| **Compatibilidad** | Cooperación con otros sistemas | Interfaces estándar |

---

### Aseguramiento de Calidad en el Desarrollo de Software

#### Aseguramiento de Calidad Constructivo

Medidas aplicadas **durante** el desarrollo:

| Medida | Descripción |
|--------|-------------|
| **Estándares de Codificación** | Directrices de programación uniformes |
| **Revisiones de Código** | Inspección mutua del código |
| **Programación en Parejas** | Dos desarrolladores trabajan juntos |
| **Documentación** | Comentarios y documentación técnica |
| **Patrones de Diseño** | Uso de patrones de diseño probados |

#### Aseguramiento de Calidad Analítico

Medidas aplicadas **después** del desarrollo:

| Medida | Descripción |
|--------|-------------|
| **Pruebas** | Examen sistemático del software |
| **Análisis Estático** | Análisis del código sin ejecución |
| **Métricas** | Indicadores de calidad medibles |
| **Auditorías** | Revisión de procesos y resultados |

---

### Protocolo de Prueba

Un **protocolo de prueba** documenta la ejecución y los resultados de las pruebas.

#### Estructura Típica de un Protocolo de Prueba

| Sección | Contenido |
|---------|-----------|
| **Datos Generales** | Fecha, tester, entorno de prueba, versión de prueba |
| **Puntos de Prueba** | Hardware, software, conexión de red, políticas de seguridad |
| **Resultados** | Aprobado/No aprobado, desviaciones |
| **Acciones** | Correcciones de errores, verificaciones de seguimiento |

#### Ejemplo de Protocolo de Prueba

```
┌─────────────────────────────────────────────────────────────────┐
│                    PROTOCOLO DE PRUEBA                          │
├─────────────────────────────────────────────────────────────────┤
│ Proyecto:    Software de Gestión de Inventario v2.1            │
│ Fecha:       15.03.2025                                         │
│ Tester:      Max Mustermann                                     │
│ Entorno:     Windows 11, 16GB RAM                               │
├─────────────────────────────────────────────────────────────────┤
│ No. │ Punto de Prueba      │ Esperado │ Real     │ Estado      │
├─────┼──────────────────────┼──────────┼──────────┼─────────────┤
│ 1   │ Función de login     │ OK       │ OK       │ Aprobado    │
│ 2   │ Búsqueda de artículos│ < 2 seg  │ 1.5 seg  │ Aprobado    │
│ 3   │ Mostrar inventario   │ Correcto │ Correcto │ Aprobado    │
│ 4   │ Exportación PDF      │ OK       │ Error    │ No aprobado │
├─────────────────────────────────────────────────────────────────┤
│ Acciones: Error #4 reportado a desarrollo (Ticket #1234)       │
│ Reprueba programada: 17.03.2025                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Tipos de Pruebas de Software

| Tipo de Prueba | Descripción | ¿Quién prueba? |
|----------------|-------------|----------------|
| **Prueba Unitaria** | Probar componentes individuales | Desarrollador |
| **Prueba de Integración** | Probar interacción de componentes | Desarrollador/Tester |
| **Prueba del Sistema** | Probar el sistema completo | Tester |
| **Prueba de Aceptación** | Revisión por el cliente | Cliente |

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Calidad del Software** | Grado de cumplimiento de requisitos por el software |
| **Funcionalidad** | Ejecución correcta de funciones especificadas |
| **Mantenibilidad** | Esfuerzo requerido para cambios y corrección de errores |
| **Protocolo de Prueba** | Documentación de resultados de pruebas |
| **Revisión de Código** | Revisión mutua del código del programa |
| **Usabilidad** | Facilidad de uso del software |

---

## Consejos para el Examen

### Preguntas Comunes del Examen
- Nombre las características de calidad del software
- ¿Qué contiene un protocolo de prueba?
- Distinga entre aseguramiento de calidad constructivo y analítico

### Importante Recordar
- Conocer las características de calidad según ISO/IEC 25010
- Comprender la estructura del protocolo de prueba
- Conocer la diferencia entre tipos de pruebas

---

## Ejercicios Prácticos

### Ejercicio 1
Nombre cuatro características de calidad del software y explíquelas brevemente.

**Solución:**
1. **Funcionalidad:** El software ejecuta correctamente las funciones especificadas
2. **Fiabilidad:** El software funciona de manera estable y fiable
3. **Usabilidad:** El software es fácil de usar y aprender
4. **Mantenibilidad:** El software es fácil de modificar y depurar

### Ejercicio 2
¿Cuáles son los componentes esenciales de un protocolo de prueba?

**Solución:**
- Datos generales (fecha, tester, entorno)
- Puntos de prueba (qué se probó)
- Resultados (comparación objetivo-real, aprobado/no aprobado)
- Acciones (correcciones de errores, verificaciones de seguimiento)

### Ejercicio 3
Distinga entre aseguramiento de calidad constructivo y analítico.

**Solución:**
- **AC Constructivo:** Medidas durante el desarrollo (ej., revisiones de código, estándares, programación en parejas)
- **AC Analítico:** Medidas después del desarrollo (ej., pruebas, análisis estático, auditorías)

---

## Referencias Cruzadas

- [06-06-02 Pruebas](../06-software/06-06-development-process/06-06-02-testing.md) - Procedimientos de prueba en detalle
- [02-01-01 Concepto de Calidad](./02-01-fundamentals/02-01-01-quality-concept.md) - Definición general de calidad
- [02-05 Accesibilidad](./02-05-accessibility.md) - Usabilidad para todos
