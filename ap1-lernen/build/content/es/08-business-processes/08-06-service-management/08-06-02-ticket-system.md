# Sistema de Tickets

## Objetivos de Aprendizaje

Después de esta sección, serás capaz de:
- Explicar la estructura y el propósito de un sistema de tickets
- Describir el ciclo de vida de un ticket
- Nombrar información importante del ticket
- Explicar las ventajas de los sistemas de tickets

---

## Contenido Principal

### ¿Qué es un Sistema de Tickets?

Un **sistema de tickets** (también sistema de helpdesk o sistema de seguimiento de incidencias) es un software para el registro, seguimiento y procesamiento estructurado de solicitudes e incidentes.

```
┌─────────────────────────────────────────────────────────────────────┐
│                    SISTEMA DE TICKETS                                │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│                    ┌─────────────────────┐                          │
│    Usuario reporta │                     │   Soporte TI             │
│    problema   ───► │  SISTEMA DE TICKETS │ ───► procesa             │
│                    │                     │                          │
│                    │  • Registro         │                          │
│                    │  • Asignación       │                          │
│                    │  • Seguimiento      │                          │
│                    │  • Documentación    │                          │
│                    │  • Informes         │                          │
│                    │                     │                          │
│                    └─────────────────────┘                          │
│                                                                      │
│  Sistemas Populares:                                                │
│  → OTRS/Znuny                                                       │
│  → Jira Service Management                                          │
│  → ServiceNow                                                       │
│  → Freshdesk                                                        │
│  → osTicket                                                         │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Estructura de un Ticket

```
┌─────────────────────────────────────────────────────────────────────┐
│                    INFORMACIÓN DEL TICKET                            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │  TICKET #2024-001234                      Estado: ABIERTO   │    │
│  ├─────────────────────────────────────────────────────────────┤    │
│  │                                                              │    │
│  │  DATOS DE CABECERA:                                         │    │
│  │  ──────────────────────────────────────────────────────────│    │
│  │  Creado:        2024-01-15 09:30                            │    │
│  │  Reportador:    Max Müller (Ventas)                         │    │
│  │  Contacto:      m.mueller@consystem.de, Tel: 1234           │    │
│  │  Asignado a:    Tim Schmidt (Soporte TI)                    │    │
│  │                                                              │    │
│  │  CLASIFICACIÓN:                                              │    │
│  │  ──────────────────────────────────────────────────────────│    │
│  │  Tipo:          Incidente                                   │    │
│  │  Categoría:     Hardware → PC → Problema de arranque        │    │
│  │  Prioridad:     ALTA                                        │    │
│  │  Impacto:       1 empleado no puede trabajar                │    │
│  │                                                              │    │
│  │  DESCRIPCIÓN:                                                │    │
│  │  ──────────────────────────────────────────────────────────│    │
│  │  El PC no arranca más. Emite 3 pitidos al encender.         │    │
│  │  Ya se realizó reinicio y verificación de cables.           │    │
│  │                                                              │    │
│  │  HISTORIAL:                                                  │    │
│  │  ──────────────────────────────────────────────────────────│    │
│  │  09:30  Ticket creado (Reportador: M. Müller)               │    │
│  │  09:35  Asignado a T. Schmidt                               │    │
│  │  09:45  Estado → En Progreso                                │    │
│  │  10:00  Diagnóstico: Módulo RAM defectuoso                  │    │
│  │  10:15  Resolución: RAM reemplazada, PC funcionando         │    │
│  │  10:20  Estado → Resuelto                                   │    │
│  │                                                              │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Ciclo de Vida del Ticket

```
┌─────────────────────────────────────────────────────────────────────┐
│                    ESTADO DEL TICKET                                 │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌────────┐                                                         │
│  │  NUEVO │  El ticket acaba de ser creado                          │
│  └───┬────┘                                                         │
│      │                                                              │
│      ▼                                                              │
│  ┌────────┐                                                         │
│  │ABIERTO │  El ticket espera procesamiento                         │
│  └───┬────┘                                                         │
│      │                                                              │
│      ▼                                                              │
│  ┌──────────────┐                                                   │
│  │ EN PROGRESO  │  Soporte trabajando en el ticket                  │
│  └───┬──────────┘                                                   │
│      │                                                              │
│      ├──────────────────────────────────┐                           │
│      │                                  │                           │
│      ▼                                  ▼                           │
│  ┌────────┐                        ┌─────────┐                      │
│  │PENDIENTE│ Esperando usuario/pieza│ESCALADO│ A nivel superior     │
│  └───┬────┘                        └────┬────┘                      │
│      │                                  │                           │
│      └──────────────────────────────────┘                           │
│      │                                                              │
│      ▼                                                              │
│  ┌────────┐                                                         │
│  │RESUELTO│  Problema solucionado                                   │
│  └───┬────┘                                                         │
│      │  (Confirmación por usuario)                                  │
│      ▼                                                              │
│  ┌──────────┐                                                       │
│  │ CERRADO  │  Ticket completado                                    │
│  └──────────┘                                                       │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Campos Importantes del Ticket

| Campo | Descripción | Ejemplo |
|-------|-------------|---------|
| **ID del Ticket** | Número único | #2024-001234 |
| **Reportador** | ¿Quién reportó? | Max Müller |
| **Asignado a** | ¿Quién procesa? | Tim Schmidt |
| **Estado** | Estado actual | En Progreso |
| **Prioridad** | Urgencia | Alta |
| **Categoría** | Tipo de problema | Hardware → PC |
| **Descripción** | Descripción del problema | El PC no arranca |
| **Creado** | Marca de tiempo | 2024-01-15 09:30 |
| **Fecha límite SLA** | Plazo según SLA | 2024-01-15 13:30 |

### Ventajas de un Sistema de Tickets

```
┌─────────────────────────────────────────────────────────────────────┐
│                    VENTAJAS                                          │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  + TRANSPARENCIA                                                    │
│    → Todas las solicitudes están documentadas                       │
│    → Estado visible en cualquier momento                            │
│    → Historial rastreable                                           │
│                                                                      │
│  + EFICIENCIA                                                       │
│    → Ninguna solicitud se pierde                                    │
│    → Asignación automática posible                                  │
│    → Priorización por importancia                                   │
│                                                                      │
│  + ANÁLISIS                                                         │
│    → KPIs medibles                                                  │
│    → Identificar problemas frecuentes                               │
│    → Analizar distribución de carga de trabajo                      │
│                                                                      │
│  + COMUNICACIÓN                                                     │
│    → Comunicación central en el ticket                              │
│    → Notificaciones automáticas                                     │
│    → No más cadenas de email                                        │
│                                                                      │
│  + MONITOREO DE SLA                                                 │
│    → Medir tiempos de respuesta y resolución                        │
│    → Escalación por incumplimiento de plazo                         │
│    → Informes para gerencia                                         │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Indicadores Clave de Rendimiento (KPIs) en Sistemas de Tickets

| KPI | Descripción | Valor Objetivo (Ejemplo) |
|-----|-------------|------------------------|
| **Número de tickets** | Tickets por período | < 50/día |
| **Tiempo de ciclo** | Tiempo hasta cierre | < 4 horas |
| **Resolución en primera llamada** | Resuelto en primer contacto | > 70% |
| **Tickets abiertos** | Tickets sin resolver actualmente | < 20 |
| **Satisfacción del cliente** | Calificación del usuario | > 4/5 estrellas |
| **Cumplimiento de SLA** | Resueltos dentro del plazo | > 95% |

---

## Términos Clave

| Término | Explicación |
|------|-------------|
| **Ticket** | Registro para una solicitud/incidente |
| **ID del Ticket** | Número de identificación único |
| **Cola** | Lista de espera para tickets |
| **Escalación** | Reenvío a nivel superior |
| **SLA** | Service Level Agreement (tiempos objetivo) |
| **KPI** | Indicador Clave de Rendimiento |
| **First Call Resolution** | Tasa de resolución en primera llamada |

---

## Consejos para el Examen

1. **Conoce el contenido del ticket:**
   - Reportador, asignado, estado, prioridad, categoría

2. **Secuencia de estados:**
   - Nuevo → Abierto → En Progreso → Resuelto → Cerrado

3. **Ventajas:**
   - Transparencia, trazabilidad, capacidad de análisis

---

## Ejercicios Prácticos

### Ejercicio 1: Crear Ticket

Un empleado llama: "Mi Outlook siempre se bloquea cuando abro archivos adjuntos. Esto sucede desde ayer."

Crea un ticket con toda la información relevante.

<details>
<summary>Mostrar solución</summary>

```
TICKET #2024-000001

DATOS DE CABECERA:
- Creado: [fecha/hora actual]
- Reportador: [nombre del llamador]
- Contacto: [teléfono/email]
- Asignado a: [asignar]

CLASIFICACIÓN:
- Tipo: Incidente
- Categoría: Software → Email → Outlook
- Prioridad: MEDIA
- Impacto: 1 empleado con capacidad de trabajo limitada

DESCRIPCIÓN:
Outlook se bloquea al abrir archivos adjuntos.
Desde: Ayer
Adjuntos afectados: [preguntar: ¿todos o específicos?]
Mensaje de error: [preguntar]

HISTORIAL:
[Marca de tiempo] Ticket creado
[Marca de tiempo] Diagnóstico inicial: ...
```

</details>

### Ejercicio 2: Asignar Estado

Asigna las siguientes situaciones al estado de ticket correcto:

a) El Soporte TI ha solucionado el problema y espera confirmación del usuario
b) Un nuevo ticket acaba de ser creado por email
c) El soporte está esperando una pieza de repuesto
d) El ticket no se ha trabajado en 3 meses
e) El soporte está trabajando actualmente en el problema

<details>
<summary>Mostrar solución</summary>

a) **RESUELTO** - Esperando confirmación del usuario
b) **NUEVO** o **ABIERTO** - Recién creado, esperando asignación
c) **PENDIENTE** - Esperando recurso externo
d) **CERRADO** - Debería cerrarse automáticamente después de 3 meses
e) **EN PROGRESO** - Procesamiento activo

</details>

### Ejercicio 3: Interpretar KPIs

Un equipo de soporte TI tiene las siguientes métricas:
- Tasa de resolución en primera llamada: 45%
- Tiempo promedio de procesamiento: 8 horas
- Cumplimiento de SLA: 72%

Evalúa las métricas y sugiere mejoras.

<details>
<summary>Mostrar solución</summary>

**Evaluación:**

| KPI | Valor | Calificación |
|-----|-------|--------|
| Resolución primera llamada | 45% | Pobre (Objetivo: >70%) |
| Tiempo de procesamiento | 8h | Promedio (depende del SLA) |
| Cumplimiento de SLA | 72% | Crítico (Objetivo: >95%) |

**Sugerencias de mejora:**

1. **Mejorar resolución en primera llamada:**
   - Construir mejor base de conocimientos
   - Formación para soporte de 1er nivel
   - Ofrecer problemas frecuentes como autoservicio

2. **Reducir tiempo de procesamiento:**
   - Mejor priorización
   - Automatización de tareas estándar
   - Más personal o mejor distribución

3. **Mejorar cumplimiento de SLA:**
   - Optimizar procesos de escalación
   - Sistema de alerta temprana para violaciones de SLA inminentes
   - Identificar cuellos de botella de capacidad

</details>

---

## Referencias Cruzadas

- [Solicitudes de Servicio](08-06-01-service-requests.md) - Incidente vs. Solicitud
- [Nivel de Servicio](08-06-03-service-level.md) - Niveles de soporte
- [SLA](08-06-04-sla.md) - Service Level Agreements
