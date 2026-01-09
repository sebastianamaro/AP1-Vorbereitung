# Gestión de Incidentes

## Objetivos de Aprendizaje

Después de esta sección, podrás:
- Describir el proceso de gestión de incidentes
- Priorizar y categorizar incidentes
- Distinguir soluciones temporales de soluciones permanentes
- Explicar la relación con la gestión de problemas

---

## Contenido Principal

### ¿Qué es la Gestión de Incidentes?

```
┌─────────────────────────────────────────────────────────────────────┐
│           GESTIÓN DE INCIDENTES                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  DEFINICIÓN:                                                        │
│  ──────────────────────────────────────────────────────────────     │
│  La gestión de incidentes es el proceso para restaurar un           │
│  servicio de TI lo más rápido posible después de una                │
│  interrupción no planificada.                                       │
│                                                                      │
│  OBJETIVO:                                                          │
│  ──────────────────────────────────────────────────────────────     │
│  → Restaurar el servicio lo más rápido posible                      │
│  → Minimizar el impacto en el negocio                               │
│  → Cumplir con los SLAs acordados                                   │
│                                                                      │
│  INCIDENTE:                                                         │
│  ──────────────────────────────────────────────────────────────     │
│  = Interrupción no planificada de un servicio de TI o               │
│    reducción en la calidad de un servicio de TI                     │
│                                                                      │
│  Ejemplos:                                                          │
│  → Servidor no responde                                             │
│  → Software se bloquea                                              │
│  → Red está lenta                                                   │
│  → Impresora no funciona                                            │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### El Proceso de Gestión de Incidentes

```
┌─────────────────────────────────────────────────────────────────────┐
│           PROCESO DE GESTIÓN DE INCIDENTES                          │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌──────────────────┐                                               │
│  │ 1. IDENTIFICACIÓN│  → Se reporta/detecta el incidente            │
│  │    Y REGISTRO    │  → Crear ticket                               │
│  └────────┬─────────┘  → Documentar toda la información             │
│           │                                                         │
│           ▼                                                         │
│  ┌──────────────────┐                                               │
│  │ 2. CLASIFICACIÓN │  → Asignar categoría                          │
│  │  Y PRIORIZACIÓN  │  → Establecer prioridad                       │
│  └────────┬─────────┘  → Considerar plazos de SLA                   │
│           │                                                         │
│           ▼                                                         │
│  ┌──────────────────┐                                               │
│  │ 3. DIAGNÓSTICO   │  → Determinar causa                           │
│  │                  │  → Verificar Base de Errores Conocidos        │
│  └────────┬─────────┘  → Buscar solución temporal                   │
│           │                                                         │
│           ├───────────────────────────┐                             │
│           │                           │                             │
│           ▼                           ▼                             │
│  ┌──────────────────┐       ┌──────────────────┐                    │
│  │ 4a. RESOLUCIÓN   │       │ 4b. ESCALACIÓN   │                    │
│  │ (1er Nivel resuelve)│    │ (2do/3er Nivel)  │                    │
│  └────────┬─────────┘       └────────┬─────────┘                    │
│           │                           │                             │
│           └───────────────────────────┘                             │
│           │                                                         │
│           ▼                                                         │
│  ┌──────────────────┐                                               │
│  │ 5. CIERRE        │  → Documentar solución                        │
│  │    Y REVISIÓN    │  → Obtener confirmación del usuario           │
│  └──────────────────┘  → Cerrar ticket                              │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Priorización de Incidentes

```
┌─────────────────────────────────────────────────────────────────────┐
│           MATRIZ DE PRIORIDAD                                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Prioridad = Impacto × Urgencia                                     │
│                                                                      │
│                     │ Bajo            │ Alto            │            │
│                     │ Impacto         │ Impacto         │            │
│  ───────────────────┼─────────────────┼─────────────────┤            │
│  Baja               │                 │                 │            │
│  Urgencia           │   P4 (Baja)     │  P3 (Media)     │            │
│  ───────────────────┼─────────────────┼─────────────────┤            │
│  Alta               │                 │                 │            │
│  Urgencia           │  P3 (Media)     │  P1/P2 (Alta)   │            │
│                                                                      │
│  IMPACTO:                                                           │
│  ──────────────────────────────────────────────────────────────     │
│  → Alto: Muchos usuarios/procesos de negocio críticos afectados     │
│  → Bajo: Usuarios individuales, función no crítica                  │
│                                                                      │
│  URGENCIA:                                                          │
│  ──────────────────────────────────────────────────────────────     │
│  → Alta: Impacto inmediato en el trabajo                            │
│  → Baja: El usuario puede seguir trabajando / tiene solución        │
│          temporal                                                   │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Niveles de Prioridad en Detalle

| Prioridad | Designación | Ejemplo | Tiempo de Respuesta | Tiempo de Resolución |
|-----------|-------------|---------|---------------------|----------------------|
| **P1** | Crítica | Servidor central caído | 15 min | 4 h |
| **P2** | Alta | Sistema de correo interrumpido | 1 h | 8 h |
| **P3** | Media | Impresora individual defectuosa | 4 h | 24 h |
| **P4** | Baja | Solicitud de software no crítico | 8 h | 5 días |

### Solución Temporal vs. Solución Permanente

```
┌─────────────────────────────────────────────────────────────────────┐
│           SOLUCIÓN TEMPORAL vs. SOLUCIÓN PERMANENTE                 │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  SOLUCIÓN TEMPORAL (Workaround):                                    │
│  ──────────────────────────────────────────────────────────────     │
│  → Solución temporal                                                │
│  → Restaura la capacidad de trabajo                                 │
│  → No arregla la causa                                              │
│  → Ejemplo: "Use la impresora en la oficina de al lado hasta        │
│              que se complete la reparación"                         │
│                                                                      │
│  SOLUCIÓN PERMANENTE:                                               │
│  ──────────────────────────────────────────────────────────────     │
│  → Solución duradera                                                │
│  → Arregla la causa real                                            │
│  → El problema no vuelve a ocurrir                                  │
│  → Ejemplo: "La impresora ha sido reparada/reemplazada"             │
│                                                                      │
│  FLUJO DE TRABAJO:                                                  │
│  ──────────────────────────────────────────────────────────────     │
│                                                                      │
│  Incidente ──► Solución     ──► Usuario puede ──► Solución          │
│  reportado     temporal         trabajar          Permanente        │
│                (rápida)         (servicio         (después)         │
│                                 restaurado)                         │
│                                                                      │
│  IMPORTANTE:                                                        │
│  → La solución temporal está OK, ¡pero no olvides el problema!      │
│  → El ticket permanece abierto hasta la solución permanente         │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Base de Datos de Errores Conocidos (KEDB)

```
┌─────────────────────────────────────────────────────────────────────┐
│           BASE DE DATOS DE ERRORES CONOCIDOS                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  = Base de datos con errores conocidos y sus soluciones             │
│                                                                      │
│  CONTENIDO:                                                         │
│  ──────────────────────────────────────────────────────────────     │
│  → Descripción del error                                            │
│  → Causa conocida                                                   │
│  → Solución temporal                                                │
│  → Solución permanente (si está disponible)                         │
│                                                                      │
│  EJEMPLO DE ENTRADA:                                                │
│  ──────────────────────────────────────────────────────────────     │
│  ┌─────────────────────────────────────────────────────────────┐   │
│  │  ERROR CONOCIDO #KE-2024-015                                 │   │
│  │                                                              │   │
│  │  Síntoma: Outlook se bloquea al abrir archivos adjuntos     │   │
│  │           grandes                                            │   │
│  │  Causa: Bug en Outlook versión 2019, Build 16.0.xxxxx       │   │
│  │  Solución temporal: Abrir o guardar adjunto en webmail       │   │
│  │  Solución Permanente: Actualizar a build actual (KB123456)   │   │
│  │  Estado: Esperando próxima ventana de parches                │   │
│  └─────────────────────────────────────────────────────────────┘   │
│                                                                      │
│  BENEFICIOS:                                                        │
│  → Encontrar soluciones más rápido (no analizar desde cero          │
│    cada vez)                                                        │
│  → Respuestas consistentes                                          │
│  → Transferencia de conocimiento dentro del equipo                  │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Gestión de Incidentes vs. Gestión de Problemas

```
┌─────────────────────────────────────────────────────────────────────┐
│           GESTIÓN DE INCIDENTES vs. GESTIÓN DE PROBLEMAS            │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  GESTIÓN DE INCIDENTES:                                             │
│  ──────────────────────────────────────────────────────────────     │
│  → Reactiva: Responde a incidentes                                  │
│  → Objetivo: Restaurar servicio rápidamente                         │
│  → Enfoque: Tratamiento de síntomas                                 │
│  → "La impresora funciona de nuevo"                                 │
│                                                                      │
│  GESTIÓN DE PROBLEMAS:                                              │
│  ──────────────────────────────────────────────────────────────     │
│  → Proactiva y Reactiva: Busca causas                               │
│  → Objetivo: Prevenir recurrencia                                   │
│  → Enfoque: Tratamiento de causa                                    │
│  → "¿Por qué la impresora sigue fallando?"                          │
│                                                                      │
│  RELACIÓN:                                                          │
│  ──────────────────────────────────────────────────────────────     │
│                                                                      │
│  Incidente 1: Impresora no funciona ─┐                              │
│  Incidente 2: Impresora no funciona ─┼─► PROBLEMA: Impresora        │
│  Incidente 3: Impresora no funciona ─┘    defectuosa                │
│                                           │                         │
│                                           ▼                         │
│                              Error Conocido: Tambor desgastado      │
│                                           │                         │
│                                           ▼                         │
│                              Solución: Reemplazar impresora         │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Gestión de Incidentes Mayores

```
┌─────────────────────────────────────────────────────────────────────┐
│           INCIDENTE MAYOR (INCIDENTE SEVERO)                        │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  DEFINICIÓN:                                                        │
│  = Incidente con muy alto impacto en el negocio                     │
│                                                                      │
│  CRITERIOS TÍPICOS:                                                 │
│  ──────────────────────────────────────────────────────────────     │
│  → Muchos usuarios afectados (p. ej., > 50%)                        │
│  → Procesos de negocio críticos afectados                           │
│  → Alto daño financiero posible                                     │
│  → Daño a la reputación posible                                     │
│                                                                      │
│  MANEJO ESPECIAL:                                                   │
│  ──────────────────────────────────────────────────────────────     │
│  → Proceso separado con tiempos de respuesta más cortos             │
│  → Escalación inmediata a la gerencia                               │
│  → Equipo dedicado para el procesamiento                            │
│  → Actualizaciones de estado regulares (p. ej., cada 30 min)        │
│  → Comunicación a todas las partes afectadas                        │
│                                                                      │
│  EJEMPLOS:                                                          │
│  ──────────────────────────────────────────────────────────────     │
│  → Interrupción total de la red                                     │
│  → Ciberataque/Ransomware                                           │
│  → Servidor/base de datos central caído                             │
│  → Sistema ERP no disponible                                        │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Documentación de Incidentes

| Campo | Contenido |
|-------|-----------|
| **ID de Incidente** | Número único (#INC-2024-0815) |
| **Fecha/Hora de Reporte** | ¿Cuándo se reportó? |
| **Reportador** | ¿Quién lo reportó? |
| **Descripción** | ¿Cuál es el problema? |
| **Categoría** | Hardware/Software/Red/... |
| **Prioridad** | P1-P4 |
| **Estado** | Abierto/En Progreso/Resuelto/Cerrado |
| **Asignado a** | ¿Quién está trabajando en él? |
| **Diagnóstico** | ¿Qué se determinó? |
| **Solución Temporal** | Solución temporal |
| **Solución** | Solución permanente |
| **Fecha de Cierre** | ¿Cuándo se resolvió? |

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Incidente** | Interrupción no planificada de un servicio de TI |
| **Impacto** | Efecto de un incidente |
| **Urgencia** | Urgencia de un incidente |
| **Workaround** | Solución temporal |
| **Error Conocido** | Error con causa conocida |
| **KEDB** | Base de Datos de Errores Conocidos |
| **Incidente Mayor** | Incidente severo |

---

## Consejos para el Examen

1. **Matriz de Prioridad:**
   - Impacto × Urgencia = Prioridad
   - Ser capaz de asignar ejemplos

2. **Solución Temporal vs. Solución:**
   - Workaround = rápido, temporal
   - Solución permanente = duradera, causa arreglada

3. **Incidente vs. Problema:**
   - Incidente = interrupción única
   - Problema = causa de múltiples incidentes

---

## Ejercicios Prácticos

### Ejercicio 1: Priorización

Prioriza los siguientes incidentes (P1-P4):

a) El sistema ERP está caído para todos los empleados (reservas no posibles)
b) El monitor de un empleado parpadea ocasionalmente
c) El servidor de correo responde lentamente (correos llegan con retraso)
d) Una sola impresora está offline

<details>
<summary>Mostrar Solución</summary>

a) **P1 (Crítica)**
   - Impacto: Alto (todos los empleados, proceso de negocio crítico)
   - Urgencia: Alta (reservas no posibles)

b) **P4 (Baja)**
   - Impacto: Bajo (un empleado)
   - Urgencia: Baja (aún funciona)

c) **P2/P3 (Alta/Media)**
   - Impacto: Alto (todos los empleados)
   - Urgencia: Media (correos llegan, solo lentamente)

d) **P4 (Baja)**
   - Impacto: Bajo (afecta a pocos empleados)
   - Urgencia: Baja (otras impresoras disponibles)

</details>

### Ejercicio 2: Formular Solución Temporal

Un empleado reporta: "Mi ratón ya no funciona."

a) Formula una solución temporal
b) ¿Cuál sería la solución permanente?

<details>
<summary>Mostrar Solución</summary>

a) **Solución temporal:**
- "Use el teclado para navegar por ahora (Tab, teclas de flecha, Enter)"
- "Le traeré un ratón de reemplazo"
- "Hasta entonces, puede usar el touchpad del portátil" (si es portátil)

b) **Solución permanente:**
- Proporcionar ratón nuevo
- Para problema de USB: Verificar puerto USB o driver
- Para ratón inalámbrico: Reemplazar baterías, verificar receptor

</details>

### Ejercicio 3: Crear Error Conocido

Múltiples empleados reportan el mismo problema:
"Outlook se bloquea cuando hago clic en Calendario"

Crea una entrada de Error Conocido.

<details>
<summary>Mostrar Solución</summary>

```
ERROR CONOCIDO #KE-2024-042

Síntoma:
Microsoft Outlook se bloquea al hacer clic en Calendario.

Sistemas Afectados:
Outlook 2019/365, Windows 10/11

Causa Conocida:
Conflicto con la última actualización de Windows KB5025xxx
en combinación con un complemento.

Solución Temporal:
1. Iniciar Outlook en modo seguro
   (outlook.exe /safe)
2. Deshabilitar complementos en
   Archivo → Opciones → Complementos

Solución Permanente:
Instalar actualización KB5026xxx (arregla el problema)
Estado: Programado para el próximo Patch Tuesday

Incidentes Relacionados:
#INC-2024-0215, #INC-2024-0218, #INC-2024-0221
```

</details>

---

## Referencias Cruzadas

- [Análisis de Errores](09-02-01-error-analysis.md) - Análisis de causa raíz
- [Solicitudes de Servicio](../08-business-processes/08-06-service-management/08-06-01-service-requests.md) - Incidente vs. Solicitud
- [Sistema de Tickets](../08-business-processes/08-06-service-management/08-06-02-ticket-system.md) - Documentación
- [Nivel de Servicio](../08-business-processes/08-06-service-management/08-06-03-service-level.md) - Niveles de soporte
- [SLA](../08-business-processes/08-06-service-management/08-06-04-sla.md) - Tiempos de respuesta
