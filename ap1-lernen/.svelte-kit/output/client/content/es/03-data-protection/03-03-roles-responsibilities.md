# Roles y Responsabilidades en la Proteccion de Datos

## Objetivos de Aprendizaje

Despues de este capitulo, deberas ser capaz de:
- Conocer los roles mas importantes en la proteccion de datos
- Explicar los deberes del responsable
- Saber cuando se requiere un Delegado de Proteccion de Datos
- Conocer las tareas del Delegado de Proteccion de Datos

---

## Contenido Principal

### Vision General de los Roles

```
┌─────────────────────────────────────────────────────────────────┐
│                 ROLES EN LA PROTECCION DE DATOS                  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │              INTERESADO                                  │  │
│  │         Persona cuyos datos se estan procesando          │  │
│  └──────────────────────────────────────────────────────────┘  │
│                           ▲                                     │
│                           │ Derechos                            │
│                           │                                     │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │              RESPONSABLE                                 │  │
│  │     Decide sobre los fines y medios del tratamiento      │  │
│  │     → Responsabilidad principal de proteccion de datos   │  │
│  └──────────────────────────────────────────────────────────┘  │
│            │                              │                     │
│            │ encarga                      │ puede nombrar       │
│            ▼                              ▼                     │
│  ┌──────────────────┐          ┌──────────────────────────┐   │
│  │   ENCARGADO DEL  │          │DELEGADO DE PROTECCION    │   │
│  │   TRATAMIENTO    │          │DE DATOS                  │   │
│  │Procesa datos     │          │Supervisa el cumplimiento │   │
│  │por encargo       │          │de proteccion de datos    │   │
│  └──────────────────┘          └──────────────────────────┘   │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### El Responsable (Art. 4(7) RGPD)

#### Definicion

El **responsable** es la persona fisica o juridica que sola o conjuntamente con otros determina los **fines y medios** del tratamiento de datos personales.

#### Deberes del Responsable

| Deber | Descripcion | Articulo RGPD |
|-------|-------------|---------------|
| **Responsabilidad Proactiva** | Demostrar cumplimiento del RGPD | Art. 5(2) |
| **Deber de Informacion** | Informar a los interesados | Art. 13, 14 |
| **Seguridad de Datos** | Implementar TOM | Art. 32 |
| **Registro de Actividades** | Mantener documentacion | Art. 30 |
| **Deber de Notificacion** | Reportar violaciones de datos (72h) | Art. 33 |
| **Evaluacion de Impacto** | Realizar si hay alto riesgo | Art. 35 |

---

### El Encargado del Tratamiento (Art. 4(8) RGPD)

#### Definicion

El **encargado del tratamiento** es una persona fisica o juridica que trata datos personales **por cuenta del responsable**.

#### Ejemplos de Tratamiento

| Encargado | Actividad |
|-----------|-----------|
| Proveedor de Nube | Almacenamiento de datos |
| Centro de Datos | Alojamiento de servidores |
| Agencia de Marketing | Distribucion de boletines |
| Oficina de Nominas | Procesamiento de salarios |

#### Acuerdo de Tratamiento de Datos (ATD)

Segun el Art. 28 RGPD, se requiere un **contrato** entre responsable y encargado:

| Contenido | Ejemplo |
|-----------|---------|
| Objeto y duracion | Que datos, cuanto tiempo |
| Naturaleza y fin | Marketing por correo electronico |
| Categorias de datos | Nombre, correo electronico |
| Obligaciones del encargado | Sujeto a instrucciones, TOM |
| Derechos del responsable | Derechos de auditoria |

---

### El Delegado de Proteccion de Datos (DPD)

#### Cuando se Requiere un DPD?

Segun el Art. 37 RGPD y la Seccion 38 BDSG:

```
┌─────────────────────────────────────────────────────────────────┐
│          CUANDO SE REQUIERE UN DPD?                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌────────────────────────────────────────────────────────┐    │
│  │ 1. Organismo/autoridad publica                         │    │
│  │    → DPD SIEMPRE requerido (Art. 37(1)(a) RGPD)        │    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                 │
│  ┌────────────────────────────────────────────────────────┐    │
│  │ 2. Actividad principal: Seguimiento a gran escala      │    │
│  │    → DPD requerido (Art. 37(1)(b) RGPD)                │    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                 │
│  ┌────────────────────────────────────────────────────────┐    │
│  │ 3. Actividad principal: Categorias especiales (Art. 9) │    │
│  │    → DPD requerido (Art. 37(1)(c) RGPD)                │    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                 │
│  ┌────────────────────────────────────────────────────────┐    │
│  │ 4. >= 20 personas con tratamiento automatizado         │    │
│  │    → DPD requerido (Seccion 38(1) BDSG)                │    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                 │
│  ┌────────────────────────────────────────────────────────┐    │
│  │ 5. Evaluacion de Impacto requerida                     │    │
│  │    → DPD requerido (Seccion 38(1) BDSG)                │    │
│  └────────────────────────────────────────────────────────┘    │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

#### Tareas del DPD (Art. 39 RGPD)

| Tarea | Descripcion |
|-------|-------------|
| **Informacion y Asesoramiento** | Informar a responsables y empleados |
| **Supervision** | Supervisar el cumplimiento del RGPD |
| **Asesoramiento en EIPD** | Asesorar en Evaluaciones de Impacto |
| **Cooperacion** | Cooperar con la autoridad de control |
| **Punto de Contacto** | Ser accesible para la autoridad de control |

#### Posicion del DPD

- **Independiente** en el ejercicio de sus tareas
- **Proteccion contra despido** (como el comite de empresa)
- **Puede ser interno o externo**
- No debe tener **conflictos de interes** (ej. no ser gerente de TI)

---

### La Autoridad de Control

| Nivel | Autoridad |
|-------|-----------|
| **Federal** | Comisionado Federal para la Proteccion de Datos y la Libertad de Informacion (BfDI) |
| **Estatal** | Comisionados Estatales de Proteccion de Datos |

**Tareas:**
- Supervisar el cumplimiento del RGPD
- Asesorar a empresas
- Imponer multas
- Manejar reclamaciones

---

## Terminos Clave

| Termino | Explicacion |
|---------|-------------|
| **Responsable** | Decide sobre los fines y medios del tratamiento |
| **Encargado del Tratamiento** | Procesa datos por encargo |
| **DPD** | Delegado de Proteccion de Datos |
| **ATD** | Acuerdo de Tratamiento de Datos |
| **Autoridad de Control** | Control estatal de proteccion de datos |
| **EIPD** | Evaluacion de Impacto en Proteccion de Datos |

---

## Consejos para el Examen

### Preguntas Comunes del Examen
- Cuando debe nombrarse un Delegado de Proteccion de Datos?
- Cuales son las tareas del Delegado de Proteccion de Datos?
- Cual es la diferencia entre responsable y encargado del tratamiento?

### Importante Recordar
- **>= 20 personas** con tratamiento automatizado -> DPD requerido (Seccion 38 BDSG)
- El DPD es **independiente**
- El **Acuerdo de Tratamiento de Datos** es obligatorio

---

## Ejercicios Practicos

### Ejercicio 1
Cuando debe una empresa nombrar un Delegado de Proteccion de Datos?

**Solucion:** Un DPD debe nombrarse cuando:
1. >= 20 personas estan constantemente ocupadas en tratamiento automatizado (Seccion 38 BDSG)
2. Se requiere Evaluacion de Impacto en Proteccion de Datos
3. La actividad principal implica tratamiento a gran escala de categorias especiales de datos
4. La actividad principal requiere seguimiento sistematico a gran escala de personas

### Ejercicio 2
Cual es la diferencia entre responsable y encargado del tratamiento?

**Solucion:**
- **Responsable:** Decide independientemente sobre los fines y medios del tratamiento de datos, tiene la responsabilidad principal
- **Encargado del Tratamiento:** Procesa datos solo por encargo y segun las instrucciones del responsable

### Ejercicio 3
Nombra tres tareas del Delegado de Proteccion de Datos.

**Solucion:**
1. Informacion y asesoramiento del responsable y empleados
2. Supervision del cumplimiento del RGPD
3. Asesoramiento en Evaluaciones de Impacto en Proteccion de Datos
(o: Cooperacion con la autoridad de control, ser punto de contacto)

---

## Referencias Cruzadas

- [03-01-01 Principios del RGPD](./03-01-fundamentals/03-01-01-gdpr-principles.md) - Base legal
- [03-02-01 TOM](./03-02-technical-measures/03-02-01-tom.md) - Deberes del responsable
- [08-04-01 Tipos de Contratos](../08-business-processes/08-04-contract-law/08-04-01-contract-types.md) - Acuerdo de Tratamiento de Datos
