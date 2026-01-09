# Tipos de Backup

## Objetivos de Aprendizaje

Despues de este capitulo, deberias ser capaz de:
- Conocer los diferentes tipos de backup
- Explicar las diferencias entre backup completo, diferencial e incremental
- Evaluar ventajas y desventajas de los tipos de backup
- Seleccionar tipos de backup apropiados para diferentes escenarios

---

## Contenido Principal

### Que es un Backup?

Un **backup** (copia de seguridad) es una copia de datos que puede usarse para recuperacion en caso de perdida de datos.

```
┌─────────────────────────────────────────────────────────────────┐
│                    PRINCIPIO BASICO DEL BACKUP                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│   DATOS ORIGINALES                     BACKUP                   │
│   ┌─────────────────┐              ┌─────────────────┐         │
│   │  Documentos     │    ───►      │  Documentos     │         │
│   │  Imagenes       │   Copia      │  Imagenes       │         │
│   │  Proyectos      │              │  Proyectos      │         │
│   └─────────────────┘              └─────────────────┘         │
│                                                                 │
│   En caso de perdida de datos:                                 │
│                                                                 │
│   ┌─────────────────┐              ┌─────────────────┐         │
│   │      X          │    ◄───      │  Documentos     │         │
│   │   Perdido!      │  Restaurar   │  Imagenes       │         │
│   │                 │              │  Proyectos      │         │
│   └─────────────────┘              └─────────────────┘         │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Los Tres Tipos de Backup

#### 1. Backup Completo

```
┌────────────────────────────────────────────────────────────────┐
│                    BACKUP COMPLETO                             │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Dia 1      Dia 2      Dia 3      Dia 4      Dia 5            │
│                                                                │
│  ┌────┐    ┌────┐    ┌────┐    ┌────┐    ┌────┐             │
│  │████│    │████│    │████│    │████│    │████│             │
│  │████│    │████│    │████│    │████│    │████│             │
│  │████│    │████│    │████│    │████│    │████│             │
│  │████│    │████│    │████│    │████│    │████│             │
│  │████│    │████│    │████│    │████│    │████│             │
│  └────┘    └────┘    └────┘    └────┘    └────┘             │
│   100%      100%      100%      100%      100%               │
│                                                                │
│  → Todos los datos se respaldan completamente cada vez       │
│  → Alto requerimiento de almacenamiento                       │
│  → Recuperacion simple                                         │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Propiedad | Descripcion |
|-----------|-------------|
| **Principio** | Todos los datos se respaldan |
| **Requerimiento de almacenamiento** | Alto (siempre cantidad completa de datos) |
| **Duracion del backup** | Larga |
| **Recuperacion** | Rapida, solo se necesita un backup |

---

#### 2. Backup Incremental

```
┌────────────────────────────────────────────────────────────────┐
│                BACKUP INCREMENTAL                              │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Dia 1      Dia 2      Dia 3      Dia 4      Dia 5           │
│  (Compl.)  (Incr.)    (Incr.)    (Incr.)    (Incr.)          │
│                                                                │
│  ┌────┐    ┌────┐    ┌────┐    ┌────┐    ┌────┐             │
│  │████│    │░░░░│    │░░░░│    │░░░░│    │░░░░│             │
│  │████│    │░░░░│    │░░░░│    │░░░░│    │░░░░│             │
│  │████│    │    │    │    │    │    │    │    │             │
│  │████│    │    │    │    │    │    │    │    │             │
│  │████│    │    │    │    │    │    │    │    │             │
│  └────┘    └────┘    └────┘    └────┘    └────┘             │
│   100%      ~5%        ~5%       ~5%        ~5%              │
│                                                                │
│  ████ = Backup completo                                       │
│  ░░░░ = Solo cambios desde el ULTIMO backup                  │
│                                                                │
│  → Solo cambios desde el ULTIMO backup                       │
│  → Menor requerimiento de almacenamiento                      │
│  → Recuperacion: Se necesitan todos los backups en secuencia │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Propiedad | Descripcion |
|-----------|-------------|
| **Principio** | Solo cambios desde el **ultimo backup** |
| **Requerimiento de almacenamiento** | Muy bajo |
| **Duracion del backup** | Muy corta |
| **Recuperacion** | Compleja (backup completo + todos los incrementos) |

---

#### 3. Backup Diferencial

```
┌────────────────────────────────────────────────────────────────┐
│               BACKUP DIFERENCIAL                               │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  Dia 1      Dia 2      Dia 3      Dia 4      Dia 5           │
│  (Compl.)  (Dif.)     (Dif.)     (Dif.)     (Dif.)           │
│                                                                │
│  ┌────┐    ┌────┐    ┌────┐    ┌────┐    ┌────┐             │
│  │████│    │░░░░│    │░░░░│    │░░░░│    │░░░░│             │
│  │████│    │░░░░│    │░░░░│    │░░░░│    │░░░░│             │
│  │████│    │    │    │░░░░│    │░░░░│    │░░░░│             │
│  │████│    │    │    │    │    │░░░░│    │░░░░│             │
│  │████│    │    │    │    │    │    │    │░░░░│             │
│  └────┘    └────┘    └────┘    └────┘    └────┘             │
│   100%      ~5%       ~10%      ~15%       ~20%              │
│                                                                │
│  ████ = Backup completo                                       │
│  ░░░░ = Todos los cambios desde el BACKUP COMPLETO           │
│                                                                │
│  → Todos los cambios desde el ULTIMO BACKUP COMPLETO         │
│  → Requerimiento de almacenamiento medio (crece diariamente) │
│  → Recuperacion: Backup completo + ultimo diferencial        │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

| Propiedad | Descripcion |
|-----------|-------------|
| **Principio** | Todos los cambios desde el **ultimo backup completo** |
| **Requerimiento de almacenamiento** | Medio (crece) |
| **Duracion del backup** | Media (crece) |
| **Recuperacion** | Media (backup completo + ultimo dif.) |

---

### Comparacion de Tipos de Backup

| Criterio | Backup Completo | Incremental | Diferencial |
|----------|-----------------|-------------|-------------|
| **Requerimiento de almacenamiento** | Muy alto | Muy bajo | Medio |
| **Tiempo de backup** | Largo | Muy corto | Medio |
| **Tiempo de restauracion** | Muy corto | Largo | Medio |
| **Esfuerzo de restauracion** | 1 backup | Completo + todos los incr. | Completo + 1 dif. |
| **Riesgo de perdida de datos** | Bajo | Mayor | Medio |

---

### Comparacion de Recuperacion (Restauracion)

```
┌────────────────────────────────────────────────────────────────┐
│            RECUPERACION (Dia 5)                                │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  BACKUP COMPLETO:                                              │
│  Restaurar solo Dia 5                                          │
│  [Backup Completo Dia 5] ────────────────────────► ✓          │
│                                                                │
│  INCREMENTAL:                                                  │
│  Backup completo + todos los incrementos en secuencia         │
│  [Dia 1 Compl.] + [Dia 2] + [Dia 3] + [Dia 4] + [Dia 5] ► ✓  │
│      ↓             ↓          ↓          ↓          ↓         │
│      1.            2.         3.         4.         5.        │
│                                                                │
│  DIFERENCIAL:                                                  │
│  Backup completo + ultimo diferencial                         │
│  [Dia 1 Compl.] + [Dia 5 Dif.] ─────────────────► ✓          │
│      ↓                ↓                                        │
│      1.               2.                                       │
│                                                                │
└────────────────────────────────────────────────────────────────┘
```

---

### Bit de Archivo

El **bit de archivo** es un atributo de archivo que indica si un archivo ha sido modificado desde el ultimo backup.

| Accion | Bit de Archivo |
|--------|----------------|
| Archivo modificado | Bit de archivo se establece (1) |
| Backup completo | Bit de archivo se limpia (0) |
| Backup incremental | Bit de archivo se limpia (0) |
| Backup diferencial | Bit de archivo permanece establecido (1) |

---

## Terminos Clave

| Termino | Explicacion |
|---------|-------------|
| **Backup completo** | Copia de seguridad completa de todos los datos |
| **Backup incremental** | Cambios desde el ultimo backup |
| **Backup diferencial** | Cambios desde el ultimo backup completo |
| **Bit de archivo** | Marca archivos modificados |
| **Restauracion** | Recuperacion desde el backup |
| **Ventana de backup** | Periodo de tiempo para la copia de seguridad |

---

## Consejos para el Examen

### Preguntas Comunes del Examen

- Cual es la diferencia entre incremental y diferencial?
- Que tipo de backup requiere menos almacenamiento?
- Que backups se necesitan para la restauracion?

### Importante Recordar

- **Incremental** = desde el **ultimo backup** → menor almacenamiento, restauracion mas compleja
- **Diferencial** = desde el **ultimo backup completo** → almacenamiento medio, restauracion mas simple
- **Backup completo** = todo → mayor almacenamiento, restauracion mas simple
- Para restaurar con incremental: Backup completo + **TODOS** los incrementos

---

## Ejercicios Practicos

### Ejercicio 1
Una empresa realiza un backup completo el domingo y backups incrementales de lunes a viernes. El viernes, el servidor falla. Que backups se necesitan para la recuperacion?

**Solucion:**
Para la recuperacion, se necesitan los siguientes:
1. Backup completo del **domingo**
2. Backup incremental del **lunes**
3. Backup incremental del **martes**
4. Backup incremental del **miercoles**
5. Backup incremental del **jueves**
6. Backup incremental del **viernes**

**Los 6 backups** deben restaurarse en el orden correcto.

### Ejercicio 2
Que tipo de backup requiere menos espacio de almacenamiento y por que?

**Solucion:** El **backup incremental** requiere menos espacio de almacenamiento porque solo se guardan los cambios desde el **ultimo backup** (no desde el backup completo). Con pocos cambios diarios, los backups individuales son muy pequenos.

### Ejercicio 3
Cual es la diferencia principal entre backup incremental y diferencial?

**Solucion:**
| Aspecto | Incremental | Diferencial |
|---------|-------------|-------------|
| **Respalda** | Cambios desde el **ultimo backup** | Cambios desde el **ultimo backup completo** |
| **Tamano** | Permanece pequeno | Crece diariamente |
| **Restauracion** | Completo + todos los incrementos | Completo + ultimo diferencial |

---

## Referencias Cruzadas

- [05-05-02 Backup Strategies](./05-05-02-backup-strategies.md) - Regla 3-2-1
- [05-02-04 NAS and Availability](../05-02-hardware/05-02-04-nas-availability.md) - Destino del backup
- [04-01-01 CIA Triad](../../04-it-security/04-01-protection-goals/04-01-01-cia-triad.md) - Disponibilidad
