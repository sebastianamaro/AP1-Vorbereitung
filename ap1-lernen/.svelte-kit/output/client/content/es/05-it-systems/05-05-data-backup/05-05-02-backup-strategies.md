# Estrategias de Backup

## Objetivos de Aprendizaje

Despues de este capitulo, deberias ser capaz de:
- Explicar la regla de backup 3-2-1
- Conocer los medios de backup y su idoneidad
- Entender los esquemas de rotacion de backup
- Planificar una estrategia de backup

---

## Contenido Principal

### La Regla de Backup 3-2-1

La **regla 3-2-1** es el estandar de oro para la copia de seguridad de datos.

```
┌─────────────────────────────────────────────────────────────────┐
│                    REGLA DE BACKUP 3-2-1                        │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   3 ─────► 3 Copias de los datos                               │
│            ┌─────────┐ ┌─────────┐ ┌─────────┐                │
│            │Original │ │ Backup 1│ │ Backup 2│                │
│            └─────────┘ └─────────┘ └─────────┘                │
│                                                                 │
│   2 ─────► 2 Medios de almacenamiento diferentes               │
│            ┌─────────┐ ┌─────────┐                            │
│            │   SSD   │ │   NAS   │                            │
│            └─────────┘ └─────────┘                            │
│            Tecnologias diferentes!                              │
│                                                                 │
│   1 ─────► 1 Copia externa (ubicacion externa)                 │
│            ┌─────────────────────┐                            │
│            │   Backup en Nube    │  o medio externo           │
│            │   o sitio externo   │  en ubicacion diferente    │
│            └─────────────────────┘                            │
│                                                                 │
│   Proteccion contra: Fallo de hardware, robo, incendio, ransomware│
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

| Regla | Significado | Proteccion Contra |
|-------|-------------|-------------------|
| **3** | 3 copias de los datos | Perdida de datos en general |
| **2** | 2 tipos de medios diferentes | Fallos especificos de hardware |
| **1** | 1 copia externa/offsite | Desastres locales (incendio, robo) |

---

### Extension: Regla 3-2-1-1-0

La extension moderna para mayor seguridad:

| Regla | Significado |
|-------|-------------|
| **3** | 3 copias de los datos |
| **2** | 2 tipos de medios diferentes |
| **1** | 1 copia externa/offsite |
| **1** | 1 copia offline (air-gap) |
| **0** | 0 errores (backups verificados) |

**Air-Gap:** Backup fisicamente desconectado de la red → Proteccion contra ransomware

---

### Medios de Backup

| Medio | Ventajas | Desventajas | Caso de Uso |
|-------|----------|-------------|-------------|
| **HDD externo** | Economico, alta capacidad | Sensible, mecanico | Hogar, PYME |
| **SSD externo** | Rapido, robusto | Mas caro | Movil, datos importantes |
| **NAS** | Acceso de red, redundante | Costo inicial alto | Empresa |
| **Cinta magnetica** | Muy barato/TB, duradero | Lento, secuencial | Archivo, grandes empresas |
| **Nube** | Offsite, escalable | Costos continuos, proteccion de datos | Backup offsite |
| **USB stick** | Portatil, economico | Baja capacidad | Archivos individuales |

---

### Rotacion de Backup: Abuelo-Padre-Hijo (GFS)

El **principio GFS** (Grandfather-Father-Son) es un esquema de rotacion probado.

```
┌────────────────────────────────────────────────────────────────┐
│           PRINCIPIO ABUELO-PADRE-HIJO                          │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  HIJO (Diario) ─────────────────────────────────────────────  │
│  Lun   Mar   Mie   Jue   Vie                                   │
│  [H1]  [H2]  [H3]  [H4]  [H5]                                 │
│                            ↓                                   │
│  PADRE (Semanal) ────────────────────────────────────────────  │
│  Semana 1    Semana 2    Semana 3    Semana 4                  │
│  [P1]        [P2]        [P3]        [P4]                      │
│                                        ↓                       │
│  ABUELO (Mensual) ───────────────────────────────────────────  │
│  Ene    Feb    Mar    Abr    ...    Dic                        │
│  [A1]   [A2]   [A3]   [A4]   ...    [A12]                      │
│                                                                │
│  Medios requeridos: 5 + 4 + 12 = 21 (para un ano)             │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Generacion | Frecuencia | Retencion | Proposito |
|------------|------------|-----------|-----------|
| **Hijo** | Diario | 1 semana (5 medios) | Cambios actuales |
| **Padre** | Semanal | 1 mes (4 medios) | Estados semanales |
| **Abuelo** | Mensual | 1 ano (12 medios) | Archivo a largo plazo |

---

### Ventana de Backup y RPO/RTO

```
┌────────────────────────────────────────────────────────────────┐
│                    RPO y RTO                                   │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  ◄─────── RPO ────────►│◄─────────── RTO ──────────────►      │
│                        │                                       │
│  Ultimo    Perdida     │   Interrupcion   Sistema             │
│  Backup    de datos    │                  OK de nuevo         │
│    │          │        │       │           │                   │
│  ──┴──────────┴────────┼───────┴───────────┴──────────► Tiempo│
│                        │                                       │
│                    Ocurre                                      │
│                    interrupcion                                │
│                                                                │
│  RPO = Objetivo de Punto de Recuperacion                      │
│        Cuanta perdida de datos es aceptable?                  │
│        (ej., max. 4 horas = 4h RPO)                           │
│                                                                │
│  RTO = Objetivo de Tiempo de Recuperacion                     │
│        Cuanto tiempo puede tomar la recuperacion?             │
│        (ej., max. 2 horas = 2h RTO)                           │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Termino | Definicion | Ejemplo |
|---------|------------|---------|
| **RPO** | Objetivo de Punto de Recuperacion - max. perdida de datos aceptable | RPO 4h = max. 4 horas de perdida de datos |
| **RTO** | Objetivo de Tiempo de Recuperacion - max. tiempo de recuperacion | RTO 2h = sistema en linea en 2h |
| **Ventana de backup** | Periodo de tiempo para la copia de seguridad | Noches 22:00-06:00 |

---

### Mejores Practicas de Backup

| Practica | Descripcion |
|----------|-------------|
| **Probar regularmente** | Verificar restauracion regularmente! |
| **Cifrado** | Cifrar datos del backup |
| **Documentacion** | Documentar procesos de backup |
| **Monitoreo** | Monitorear exito del backup |
| **Versionado** | Mantener multiples versiones de backup |
| **Automatizacion** | Ejecutar backups automaticamente |

---

### Comparacion de Estrategias de Backup

| Estrategia | Descripcion | Adecuado Para |
|------------|-------------|---------------|
| **Solo backup completo** | Simple, mucho almacenamiento | Volumenes de datos pequenos |
| **Completo + Incremental** | Eficiente, restauracion compleja | Volumenes de datos grandes |
| **Completo + Diferencial** | Compromiso | Requerimientos medios |
| **Continuo (CDP)** | Backup en tiempo real | Sistemas criticos |

---

## Terminos Clave

| Termino | Explicacion |
|---------|-------------|
| **Regla 3-2-1** | 3 copias, 2 medios, 1 externa |
| **GFS** | Rotacion Abuelo-Padre-Hijo |
| **RPO** | Objetivo de Punto de Recuperacion (max. perdida de datos) |
| **RTO** | Objetivo de Tiempo de Recuperacion (max. tiempo de inactividad) |
| **Air-Gap** | Backup fisicamente separado |
| **Offsite** | Backup en ubicacion externa |
| **CDP** | Proteccion Continua de Datos |

---

## Consejos para el Examen

### Preguntas Comunes del Examen

- Que significa la regla 3-2-1?
- Que es RPO y RTO?
- Explica el principio Abuelo-Padre-Hijo

### Importante Recordar

- **3-2-1:** 3 copias, 2 tipos de medios, 1 externa
- **RPO:** Cuanta perdida de datos es aceptable?
- **RTO:** Cuanto tiempo puede tomar la recuperacion?
- **Los backups deben probarse!**

---

## Ejercicios Practicos

### Ejercicio 1
Explica la regla de backup 3-2-1.

**Solucion:**
- **3:** Al menos 3 copias de los datos (original + 2 backups)
- **2:** En al menos 2 medios de almacenamiento diferentes (ej., SSD interno + NAS)
- **1:** Al menos 1 copia en una ubicacion externa (nube o fisicamente externa)

Esta regla protege contra varios riesgos: fallo de hardware (2 medios), desastres locales como incendio o robo (1 externa).

### Ejercicio 2
Una empresa tiene los siguientes requisitos: Perdida de datos maxima de 4 horas, el sistema debe estar funcionando de nuevo dentro de 2 horas. Cuales son el RPO y RTO?

**Solucion:**
- **RPO (Objetivo de Punto de Recuperacion):** 4 horas
  - Los backups deben realizarse al menos cada 4 horas
- **RTO (Objetivo de Tiempo de Recuperacion):** 2 horas
  - La recuperacion debe ser posible en max. 2 horas

### Ejercicio 3
Cuantos medios de backup se necesitan para el principio Abuelo-Padre-Hijo para un ano?

**Solucion:**
- **Hijo (diario):** 5 medios (Lun-Vie)
- **Padre (semanal):** 4 medios (4 semanas)
- **Abuelo (mensual):** 12 medios (12 meses)

**Total: 21 medios** para un ano completo con puntos de recuperacion diarios, semanales y mensuales.

### Ejercicio 4
Por que es importante un backup air-gap?

**Solucion:** Un **backup air-gap** esta fisicamente desconectado de la red (ej., disco duro externo en una caja fuerte). Proporciona proteccion especial contra **ransomware**, que cifraria todos los backups accesibles. Como el backup air-gap no esta en linea, el malware no puede alcanzarlo.

---

## Referencias Cruzadas

- [05-05-01 Backup Types](./05-05-01-backup-types.md) - Completo, Incr., Dif.
- [05-02-04 NAS and Availability](../05-02-hardware/05-02-04-nas-availability.md) - NAS como destino de backup
- [04-02-01 Threat Types](../../04-it-security/04-02-threats-risks/04-02-01-threat-types.md) - Ransomware
