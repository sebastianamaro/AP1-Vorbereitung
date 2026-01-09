# Solicitudes de Servicio

## Objetivos de Aprendizaje

Después de esta sección, serás capaz de:
- Distinguir entre diferentes tipos de solicitudes de servicio
- Diferenciar incidentes de solicitudes de servicio
- Describir el procesamiento de solicitudes
- Evaluar prioridades correctamente

---

## Contenido Principal

### Tipos de Solicitudes de Servicio

```
┌─────────────────────────────────────────────────────────────────────┐
│                    SOLICITUDES DE SERVICIO                           │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │                      INCIDENTE                              │    │
│  │  ──────────────────────────────────────────────────────────│    │
│  │  = Interrupción, falla no planificada                       │    │
│  │                                                              │    │
│  │  Características:                                            │    │
│  │  → Algo NO está funcionando                                 │    │
│  │  → Urgente, requiere resolución rápida                      │    │
│  │  → Impacta el trabajo                                       │    │
│  │                                                              │    │
│  │  Ejemplos:                                                   │    │
│  │  → El PC no arranca                                         │    │
│  │  → Internet caído                                           │    │
│  │  → El software se bloquea                                   │    │
│  │  → La impresora no imprime                                  │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │                   SOLICITUD DE SERVICIO                     │    │
│  │  ──────────────────────────────────────────────────────────│    │
│  │  = Petición de servicio estándar                            │    │
│  │                                                              │    │
│  │  Características:                                            │    │
│  │  → Se necesita algo NUEVO                                   │    │
│  │  → Planificable, no urgente                                 │    │
│  │  → Proceso estándar disponible                              │    │
│  │                                                              │    │
│  │  Ejemplos:                                                   │    │
│  │  → Crear nuevo usuario                                      │    │
│  │  → Restablecer contraseña                                   │    │
│  │  → Instalar software                                        │    │
│  │  → Cambiar permisos                                         │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                      │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │                    PROBLEMA                                 │    │
│  │  ──────────────────────────────────────────────────────────│    │
│  │  = Causa raíz de uno o más incidentes                       │    │
│  │                                                              │    │
│  │  Ejemplo:                                                    │    │
│  │  → Varios usuarios reportan "el email no funciona"         │    │
│  │  → Problema: El servidor de email está caído               │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Incidente vs. Solicitud de Servicio

| Criterio | Incidente | Solicitud de Servicio |
|-----------|----------|-----------------|
| **Definición** | Interrupción/falla | Petición de servicio |
| **Ejemplo** | "El PC no funciona" | "Por favor instalen software" |
| **Urgencia** | A menudo alta | Usualmente planificable |
| **Objetivo** | Restauración rápida | Cumplir la solicitud |
| **Proceso** | Gestión de Incidentes | Cumplimiento de Solicitudes |

### Categorización de Solicitudes

```
┌─────────────────────────────────────────────────────────────────────┐
│                    CATEGORIZACIÓN                                    │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  Por ÁREA:                                                          │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │  Hardware    │ PC, impresora, monitor, periféricos          │    │
│  │  Software    │ Sistema operativo, aplicaciones, actualizac. │    │
│  │  Red         │ Internet, WiFi, VPN, email                   │    │
│  │  Acceso      │ Permisos, contraseña, cuentas                │    │
│  │  Otros       │ Preguntas, formación, documentación          │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                      │
│  Por PRIORIDAD:                                                     │
│  ┌─────────────────────────────────────────────────────────────┐    │
│  │                                                              │    │
│  │  Prioridad = Urgencia × Impacto                              │    │
│  │                                                              │    │
│  │           │ Bajo           │ Alto           │                │    │
│  │           │ Impacto        │ Impacto        │                │    │
│  │  ─────────┼───────────────┼────────────────┤                │    │
│  │  Baja     │               │                │                │    │
│  │  Urgencia │   BAJA        │   MEDIA        │                │    │
│  │  ─────────┼───────────────┼────────────────┤                │    │
│  │  Alta     │               │                │                │    │
│  │  Urgencia │   MEDIA       │   ALTA/CRÍTICA │                │    │
│  │                                                              │    │
│  └─────────────────────────────────────────────────────────────┘    │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Niveles de Prioridad

| Prioridad | Impacto | Urgencia | Ejemplo | Tiempo de Respuesta |
|----------|--------|---------|---------|---------------|
| **Crítica** | Parada de empresa | Inmediata | Falla total de servidor | 15 min |
| **Alta** | Departamento afectado | Urgente | Sistema de email caído | 1 hora |
| **Media** | Varios usuarios | Normal | Impresora defectuosa | 4 horas |
| **Baja** | Usuario único | Baja | Monitor parpadea | 1-2 días |

### Procesamiento de Solicitudes de Servicio

```
┌─────────────────────────────────────────────────────────────────────┐
│           FLUJO DE PROCESAMIENTO                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌─────────────────┐                                                │
│  │ 1. RECEPCIÓN    │  → Crear ticket                               │
│  │                 │  → Categorizar                                 │
│  └────────┬────────┘  → Priorizar                                   │
│           │                                                         │
│           ▼                                                         │
│  ┌─────────────────┐                                                │
│  │ 2. DIAGNÓSTICO  │  → Analizar problema                          │
│  │                 │  → Recopilar información                       │
│  └────────┬────────┘  → Identificar causa                           │
│           │                                                         │
│           ▼                                                         │
│  ┌─────────────────┐                                                │
│  │ 3. RESOLUCIÓN   │  → Solución alternativa o definitiva          │
│  │                 │  → Escalar si es necesario                     │
│  └────────┬────────┘  → Documentar                                  │
│           │                                                         │
│           ▼                                                         │
│  ┌─────────────────┐                                                │
│  │ 4. CIERRE       │  → Verificar solución                         │
│  │                 │  → Feedback del cliente                        │
│  └─────────────────┘  → Cerrar ticket                               │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Comunicación para Solicitudes

```
┌─────────────────────────────────────────────────────────────────────┐
│           COMUNICACIÓN CON EL USUARIO                                │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  EN LA RECEPCIÓN:                                                   │
│  → Saludo amable                                                    │
│  → Entender el problema (preguntas W)                               │
│  → Proporcionar número de ticket                                    │
│  → Indicar tiempo de procesamiento esperado                         │
│                                                                      │
│  DURANTE EL PROCESAMIENTO:                                          │
│  → Actualizaciones de estado para duraciones largas                 │
│  → Comunicar activamente para preguntas de seguimiento              │
│  → Hacer transparente la escalación                                 │
│                                                                      │
│  AL CIERRE:                                                         │
│  → Explicar la solución                                             │
│  → Preguntar por la satisfacción                                    │
│  → Dar consejos para prevención                                     │
│                                                                      │
│  PREGUNTAS W:                                                       │
│  ──────────────────────────────────────────────────────────────     │
│  → ¿QUÉ es el problema?                                             │
│  → ¿CUÁNDO ocurrió?                                                 │
│  → ¿CÓMO se manifiesta?                                             │
│  → ¿QUIÉN está afectado?                                            │
│  → ¿QUÉ se ha intentado ya?                                         │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## Términos Clave

| Término | Explicación |
|------|-------------|
| **Incidente** | Interrupción no planificada de un servicio TI |
| **Solicitud de Servicio** | Petición de un servicio estándar |
| **Problema** | Causa raíz de uno o más incidentes |
| **Categorización** | Clasificación por tipo de solicitud |
| **Priorización** | Determinar el orden de procesamiento |
| **Workaround** | Solución temporal alternativa |

---

## Consejos para el Examen

1. **Incidente vs. Solicitud de Servicio:**
   - Incidente = "No funciona" (interrupción)
   - Solicitud = "Necesito..." (petición)

2. **Calcular prioridad:**
   - Prioridad = Urgencia × Impacto
   - Alto Impacto + Alta Urgencia = Crítica

3. **Preguntas típicas del examen:**
   - ¿Qué es un incidente?
   - ¿Cómo se determina la prioridad?
   - ¿Diferencia incidente/problema?

---

## Ejercicios Prácticos

### Ejercicio 1: Categorización

Clasifica las siguientes solicitudes (Incidente o Solicitud de Servicio):

a) "Mi PC ya no arranca"
b) "Necesito acceso a la carpeta de red de Ventas"
c) "El internet está muy lento"
d) "Por favor instalen Adobe Reader"

<details>
<summary>Mostrar solución</summary>

a) **Incidente** - El PC no funciona (interrupción)
b) **Solicitud de Servicio** - Solicitar permiso (servicio estándar)
c) **Incidente** - Funcionalidad limitada (interrupción)
d) **Solicitud de Servicio** - Instalación de software (servicio estándar)

</details>

### Ejercicio 2: Priorización

Determina la prioridad para los siguientes incidentes:

a) El CEO no puede enviar emails
b) Un empleado olvidó cómo imprimir
c) El servidor central de base de datos ha fallado
d) Un monitor parpadea ocasionalmente

<details>
<summary>Mostrar solución</summary>

a) **Alta** - Alto impacto (CEO), urgencia media
b) **Baja** - Esto en realidad no es un incidente, sino una necesidad de solicitud/formación
c) **Crítica** - Muy alto impacto (todos afectados), muy alta urgencia
d) **Baja** - Bajo impacto (un usuario), baja urgencia

</details>

### Ejercicio 3: Comunicación

Un empleado llama: "¡Nada funciona! ¡Necesito trabajar urgentemente!"

¿Cómo procedes?

<details>
<summary>Mostrar solución</summary>

**1. Calmar y saludar:**
"Hola, Soporte TI. Entiendo que necesita trabajar urgentemente. Aclaremos rápidamente el problema."

**2. Hacer preguntas W:**
- "¿QUÉ exactamente no funciona?"
- "¿CUÁNDO notó el problema?"
- "¿Ha CAMBIADO o instalado algo?"
- "¿Hay algún mensaje de error?"

**3. Crear ticket:**
- Documentar problema
- Categorizar (Hardware/Software/Red)
- Establecer prioridad

**4. Establecer expectativas:**
"He creado el ticket número 12345. Debido a la urgencia, lo procesamos inmediatamente. Le actualizaré en 15 minutos."

**5. Diagnóstico rápido:**
- Preguntas estándar: ¿Intentó reiniciar? ¿Revisó cables?
- Ofrecer soporte remoto si aplica

</details>

---

## Referencias Cruzadas

- [Sistema de Tickets](08-06-02-ticket-system.md) - Procesamiento de tickets
- [Nivel de Servicio](08-06-03-service-level.md) - Niveles de soporte
- [SLA](08-06-04-sla.md) - Tiempos de respuesta
