# Análisis de Errores en Soporte TI

## Objetivos de Aprendizaje

Después de esta sección, podrás:
- Realizar análisis sistemático de errores
- Aplicar el método de los 5 Por Qué
- Crear diagramas de Ishikawa
- Distinguir causas de síntomas

---

## Contenido Principal

### Fundamentos del Análisis de Errores

```
┌─────────────────────────────────────────────────────────────────────┐
│           ANÁLISIS DE ERRORES                                       │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  OBJETIVO:                                                          │
│  → No solo arreglar síntomas, sino encontrar CAUSAS                 │
│  → Prevenir errores recurrentes                                     │
│  → Desarrollar soluciones sostenibles                               │
│                                                                      │
│  SÍNTOMA vs. CAUSA                                                  │
│  ──────────────────────────────────────────────────────────────     │
│                                                                      │
│  Síntoma: "El PC está lento"                                        │
│     │                                                               │
│     ├── Causa 1: Disco duro lleno                                   │
│     ├── Causa 2: Malware                                            │
│     ├── Causa 3: RAM defectuosa                                     │
│     └── Causa 4: Demasiados programas de inicio                     │
│                                                                      │
│  IMPORTANTE:                                                        │
│  → Tratamiento de síntomas = solución temporal                      │
│  → Tratamiento de causa = solución permanente                       │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Enfoque Sistemático

```
┌─────────────────────────────────────────────────────────────────────┐
│           ANÁLISIS SISTEMÁTICO DE ERRORES                           │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  ┌─────────────────┐                                                │
│  │ 1. DEFINIR      │  → ¿Cuál es exactamente el problema?           │
│  │    PROBLEMA     │  → ¿Cuándo ocurrió?                            │
│  └────────┬────────┘  → ¿Quién está afectado?                       │
│           │                                                         │
│           ▼                                                         │
│  ┌─────────────────┐                                                │
│  │ 2. RECOPILAR    │  → Documentar mensajes de error                │
│  │    INFORMACIÓN  │  → Revisar logs                                │
│  └────────┬────────┘  → Preguntar al usuario (¿Qué hiciste?)        │
│           │                                                         │
│           ▼                                                         │
│  ┌─────────────────┐                                                │
│  │ 3. FORMAR       │  → Listar posibles causas                      │
│  │    HIPÓTESIS    │  → Estimar probabilidad                        │
│  └────────┬────────┘  → Priorizar por esfuerzo                      │
│           │                                                         │
│           ▼                                                         │
│  ┌─────────────────┐                                                │
│  │ 4. PROBAR       │  → Verificar hipótesis individualmente         │
│  │                 │  → Cambiar solo UNA variable a la vez          │
│  └────────┬────────┘  → Documentar resultados                       │
│           │                                                         │
│           ▼                                                         │
│  ┌─────────────────┐                                                │
│  │ 5. IMPLEMENTAR  │  → Arreglar causa                              │
│  │    SOLUCIÓN     │  → Verificar éxito                             │
│  └────────┬────────┘  → Documentar                                  │
│           │                                                         │
│           ▼                                                         │
│  ┌─────────────────┐                                                │
│  │ 6. SEGUIMIENTO  │  → Actualizar base de conocimiento             │
│  │                 │  → Considerar medidas preventivas              │
│  └─────────────────┘                                                │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### El Método de los 5 Por Qué

```
┌─────────────────────────────────────────────────────────────────────┐
│           MÉTODO DE LOS 5 POR QUÉ                                   │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  PRINCIPIO: Preguntar "¿Por qué?" 5 veces para llegar a la causa    │
│             raíz                                                    │
│                                                                      │
│  EJEMPLO: El servidor se cayó                                       │
│  ──────────────────────────────────────────────────────────────     │
│                                                                      │
│  Problema: El servidor se cayó                                      │
│                                                                      │
│  1. ¿POR QUÉ se cayó el servidor?                                   │
│     → El disco duro estaba lleno                                    │
│                                                                      │
│  2. ¿POR QUÉ estaba lleno el disco duro?                            │
│     → Los archivos de log eran demasiado grandes                    │
│                                                                      │
│  3. ¿POR QUÉ eran demasiado grandes los archivos de log?            │
│     → La rotación automática de logs estaba deshabilitada           │
│                                                                      │
│  4. ¿POR QUÉ estaba deshabilitada la rotación de logs?              │
│     → No se reconfiguró después de la última actualización          │
│                                                                      │
│  5. ¿POR QUÉ no se reconfiguró?                                     │
│     → No había una lista de verificación para actualizaciones       │
│                                                                      │
│  CAUSA RAÍZ: Falta de proceso de actualización                      │
│  ACCIÓN: Crear lista de verificación para actualizaciones de        │
│          servidor                                                   │
│                                                                      │
│  IMPORTANTE:                                                        │
│  → No siempre tienen que ser exactamente 5 veces                    │
│  → Detenerse cuando se encuentra la causa real                      │
│  → No detenerse en respuestas superficiales                         │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Diagrama de Ishikawa (Diagrama de Espina de Pescado)

```
┌─────────────────────────────────────────────────────────────────────┐
│           DIAGRAMA DE ISHIKAWA                                      │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  También conocido como: Diagrama de espina de pescado,              │
│                         Diagrama de causa y efecto                  │
│                                                                      │
│  ESTRUCTURA:                                                        │
│                                                                      │
│       HOMBRE            MÁQUINA          MÉTODO                     │
│          │               │               │                          │
│          │   ┌───────────┼───────────┐   │                          │
│          │   │           │           │   │                          │
│          ▼   ▼           ▼           ▼   ▼                          │
│       ───────────────────────────────────────►  PROBLEMA            │
│          ▲   ▲           ▲           ▲   ▲                          │
│          │   │           │           │   │                          │
│          │   └───────────┼───────────┘   │                          │
│          │               │               │                          │
│       MATERIAL        MEDIO          MEDICIÓN                       │
│                                                                      │
│  LAS 6 M (categorías típicas):                                      │
│  ──────────────────────────────────────────────────────────────     │
│  → Hombre: Errores de empleados, capacitación, experiencia          │
│  → Máquina: Hardware, software, sistemas                            │
│  → Método: Procesos, procedimientos, instrucciones                  │
│  → Material: Datos de entrada, recursos                             │
│  → Medio: Ambiente, red, infraestructura                            │
│  → Medición: Monitoreo, vigilancia, métricas                        │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Ejemplo Ishikawa: Interrupción de Correo Electrónico

```
┌─────────────────────────────────────────────────────────────────────┐
│           ISHIKAWA: CORREO NO FUNCIONA                              │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│       HOMBRE             MÁQUINA            MÉTODO                  │
│       - Contraseña       - Servidor         - Puerto IMAP           │
│         incorrecta         defectuoso         incorrecto            │
│       - Configuración    - Cliente          - SSL no                │
│         cambiada           desactualizado     habilitado            │
│          │                   │                   │                  │
│          │                   │                   │                  │
│          ▼                   ▼                   ▼                  │
│       ────────────────────────────────────────────►  Correo         │
│          ▲                   ▲                   ▲     no           │
│          │                   │                   │     funciona     │
│          │                   │                   │                  │
│       - Entradas DNS      - Firewall         - Sin                  │
│         incorrectas         bloqueando         monitoreo            │
│       - Filtro spam       - Red              - Certificado          │
│         bloquea             caída              expirado             │
│       MATERIAL            MEDIO              MEDICIÓN               │
│                                                                      │
│  PROCEDIMIENTO:                                                     │
│  1. Recopilar todas las causas posibles (lluvia de ideas)           │
│  2. Categorizar en las 6 M                                          │
│  3. Verificar las más probables primero                             │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Método de Eliminación

```
┌─────────────────────────────────────────────────────────────────────┐
│           MÉTODO DE ELIMINACIÓN                                     │
├─────────────────────────────────────────────────────────────────────┤
│                                                                      │
│  PRINCIPIO: Descartar primero las causas más simples/comunes        │
│                                                                      │
│  EJEMPLO: "Internet no funciona"                                    │
│  ──────────────────────────────────────────────────────────────     │
│                                                                      │
│  □ 1. ¿Cable conectado?                  [✓ SÍ → continuar]         │
│  □ 2. ¿WiFi habilitado?                  [✓ SÍ → continuar]         │
│  □ 3. ¿Router accesible (ping)?          [✗ NO → revisar router]    │
│      │                                                              │
│      └─► 3a. ¿Router reiniciado?         [✓ SÍ → continuar]         │
│          3b. ¿LEDs del router OK?        [✗ NO → cable de poder]    │
│                                                                      │
│  ORDEN (regla general):                                             │
│  ──────────────────────────────────────────────────────────────     │
│  1. Verificaciones físicas simples (cables, energía)                │
│  2. Reiniciar (PC del usuario, luego router/servidor)               │
│  3. Verificar configuración                                         │
│  4. Analizar logs                                                   │
│  5. Diagnóstico más profundo                                        │
│                                                                      │
│  CONSEJO: "¿Has intentado apagarlo y encenderlo de nuevo?"          │
│       → ¡Resuelve más problemas de lo que pensarías!                │
│                                                                      │
└─────────────────────────────────────────────────────────────────────┘
```

### Documentar Análisis de Errores

| Qué Documentar | Por Qué es Importante |
|----------------|----------------------|
| **Síntoma** | Describir claramente el punto de partida |
| **Pasos de Verificación** | Rastreable para colegas |
| **Resultados de Pruebas** | ¿Qué se descartó? |
| **Causa Encontrada** | Para base de conocimiento |
| **Solución** | Reutilizable |
| **Medida Preventiva** | Evitar recurrencia |

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Síntoma** | Efecto visible de un problema |
| **Causa** | Razón real del problema |
| **Causa Raíz** | Causa fundamental, original |
| **Método de los 5 Por Qué** | Preguntar "¿Por qué?" 5 veces |
| **Diagrama de Ishikawa** | Diagrama de causa y efecto |
| **Método de Eliminación** | Descarte sistemático de posibilidades |

---

## Consejos para el Examen

1. **Método de los 5 Por Qué:**
   - Frecuentemente preguntado en exámenes
   - Saber cómo aplicar prácticamente
   - Seguir preguntando hasta encontrar causa real

2. **Ishikawa:**
   - Conocer las 6 M
   - Ser capaz de dibujar el diagrama
   - Recopilar causas sistemáticamente

3. **Preguntas típicas de examen:**
   - "Analiza el error usando el método de los 5 Por Qué"
   - "Crea un diagrama de Ishikawa"

---

## Ejercicios Prácticos

### Ejercicio 1: Aplicar 5 Por Qué

Analiza el siguiente error usando el método de los 5 Por Qué:

**Problema:** Un empleado no puede abrir su presentación.

<details>
<summary>Mostrar Solución</summary>

**Análisis de 5 Por Qué:**

1. **¿POR QUÉ no se puede abrir la presentación?**
   → El archivo está corrupto

2. **¿POR QUÉ está corrupto el archivo?**
   → El PC se apagó durante el guardado

3. **¿POR QUÉ se apagó el PC durante el guardado?**
   → La batería estaba vacía y el adaptador de corriente no estaba conectado

4. **¿POR QUÉ no estaba conectado el adaptador de corriente?**
   → El empleado está trabajando en una sala de reuniones sin toma de corriente

5. **¿POR QUÉ no hay toma de corriente en la sala de reuniones?**
   → Los lugares de trabajo móviles no se consideraron durante la planificación

**Causa Raíz:** Falta de infraestructura para trabajo móvil

**Medidas:**
- Corto plazo: Regletas/extensiones
- Largo plazo: Equipar salas de reuniones con tomas de corriente
- Capacitación: Guardar regularmente, prestar atención al estado de batería

</details>

### Ejercicio 2: Crear Diagrama Ishikawa

Crea un diagrama de Ishikawa para el siguiente problema:

**"La impresora no imprime"**

<details>
<summary>Mostrar Solución</summary>

**Diagrama Ishikawa: La impresora no imprime**

```
       HOMBRE              MÁQUINA            MÉTODO
       - Impresora         - Impresora        - Trabajo de
         incorrecta          offline            impresión
         seleccionada      - Atasco de          configurado
       - Sin                 papel              incorrectamente
         permiso           - Tóner vacío      - Formato de
       - Error de          - Driver de          papel incorrecto
         operación           impresora          seleccionado
                             desactualizado
          │                   │                   │
          │                   │                   │
          ▼                   ▼                   ▼
       ────────────────────────────────────────────►  Impresora
          ▲                   ▲                   ▲     no
          │                   │                   │     imprime
          │                   │                   │
       - Cable USB          - Firewall         - Sin
         defectuoso           bloqueando         monitoreo
       - Papel              - Servidor         - Cola
         incorrecto           de impresión       no verificada
       - Sin papel            caído
         cargado            - Problema
       MATERIAL               WiFi
                           MEDIO              MEDICIÓN
```

</details>

### Ejercicio 3: Análisis Sistemático

Un usuario reporta: "Mis correos ya no llegan."

Lista 5 pasos de verificación en el orden correcto.

<details>
<summary>Mostrar Solución</summary>

**Pasos de Verificación Sistemáticos:**

1. **Verificación más simple primero:**
   - ¿Hay conexión a internet?
   - ¿El programa de correo está abierto y correctamente configurado?

2. **Verificar cuenta:**
   - ¿La contraseña sigue siendo válida?
   - ¿La cuenta no está bloqueada?
   - ¿El buzón no está lleno?

3. **Verificar spam/filtros:**
   - ¿Los correos están en la carpeta de spam?
   - ¿Hay reglas/filtros activos moviendo correos?

4. **Verificar estado del servidor:**
   - ¿El servidor de correo es accesible?
   - ¿Hay interrupciones conocidas?

5. **Análisis detallado:**
   - Verificar logs (lado del servidor)
   - Enviar mensaje de prueba
   - Verificar entradas DNS (registros MX)

</details>

---

## Referencias Cruzadas

- [Gestión de Incidentes](09-02-02-incident-management.md) - Manejo de incidentes
- [Sistema de Tickets](../08-business-processes/08-06-service-management/08-06-02-ticket-system.md) - Documentación
- [Nivel de Servicio](../08-business-processes/08-06-service-management/08-06-03-service-level.md) - Escalación
- [Resolución de Problemas de Red](../07-networks/07-07-network-troubleshooting/07-07-02-troubleshooting.md) - Diagnóstico de red
