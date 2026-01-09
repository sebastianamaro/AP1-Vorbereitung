# Modelo Estandar de Proteccion de Datos (SDM)

## Objetivos de Aprendizaje

Despues de este capitulo, deberas ser capaz de:
- Explicar el Modelo Estandar de Proteccion de Datos (SDM)
- Conocer los objetivos de proteccion del SDM
- Comprender la conexion con el RGPD
- Entender la aplicacion practica

---

## Contenido Principal

### Que es el SDM?

El **Modelo Estandar de Proteccion de Datos (SDM)** es una metodologia de las autoridades alemanas de supervision de proteccion de datos para implementar los requisitos del RGPD. Define **objetivos de proteccion** concretos y **medidas** asociadas.

> El SDM traduce los requisitos abstractos del RGPD en medidas tecnicas y organizativas practicamente implementables.

---

### Los 7 Objetivos de Proteccion

```
┌─────────────────────────────────────────────────────────────────┐
│              MODELO ESTANDAR DE PROTECCION DE DATOS (SDM)        │
│                    7 Objetivos de Proteccion                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │ MINIMIZACION    │  │ DISPONIBILIDAD  │  │ INTEGRIDAD      │ │
│  │ DE DATOS        │  │                 │  │                 │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘ │
│                                                                 │
│  ┌─────────────────┐  ┌─────────────────┐  ┌─────────────────┐ │
│  │ CONFIDENCIALID. │  │ NO VINCULACION  │  │ TRANSPARENCIA   │ │
│  │                 │  │                 │  │                 │ │
│  └─────────────────┘  └─────────────────┘  └─────────────────┘ │
│                                                                 │
│  ┌─────────────────┐                                           │
│  │ CAPACIDAD DE    │                                           │
│  │ INTERVENCION    │                                           │
│  └─────────────────┘                                           │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

---

### Objetivos de Proteccion en Detalle

| Objetivo de Proteccion | Descripcion | Referencia RGPD | Medidas |
|------------------------|-------------|-----------------|---------|
| **Minimizacion de Datos** | Procesar solo datos necesarios | Art. 5(1)(c) | Reducir campos de datos, anonimizacion |
| **Disponibilidad** | Los datos son accesibles y utilizables | Art. 32 | Backups, redundancia, planes de emergencia |
| **Integridad** | Los datos son correctos y sin cambios | Art. 5(1)(d) | Sumas de verificacion, controles de acceso |
| **Confidencialidad** | Solo personas autorizadas tienen acceso | Art. 5(1)(f) | Cifrado, derechos de acceso |
| **No Vinculacion** | Datos no vinculados para otros fines | Art. 5(1)(b) | Separacion de fines, seudonimizacion |
| **Transparencia** | El tratamiento es comprensible | Art. 5(1)(a) | Registro, documentacion |
| **Capacidad de Intervencion** | Derechos de los interesados implementables | Art. 12-22 | Funciones de acceso, eliminacion, rectificacion |

---

### Relacion con los Principios del RGPD

| Objetivo de Proteccion SDM | Principio del RGPD |
|----------------------------|-------------------|
| Minimizacion de Datos | Minimizacion de datos (Art. 5(1)(c)) |
| Disponibilidad | Integridad y Confidencialidad (Art. 5(1)(f)) |
| Integridad | Exactitud (Art. 5(1)(d)) |
| Confidencialidad | Integridad y Confidencialidad (Art. 5(1)(f)) |
| No Vinculacion | Limitacion de la Finalidad (Art. 5(1)(b)) |
| Transparencia | Licitud, Transparencia (Art. 5(1)(a)) |
| Capacidad de Intervencion | Derechos de los Interesados (Art. 12-22) |

---

### Aplicacion Practica

#### Ejemplo: Base de Datos de Clientes

| Objetivo | Medida | Implementacion |
|----------|--------|----------------|
| **Minimizacion de Datos** | Solo campos necesarios | Sin fecha de nacimiento para boletin |
| **Disponibilidad** | Backup | Copia de seguridad diaria de datos |
| **Integridad** | Sumas de verificacion | Valores hash para integridad de datos |
| **Confidencialidad** | Cifrado | Base de datos cifrada |
| **No Vinculacion** | Separacion de fines | Tablas separadas para pedidos/marketing |
| **Transparencia** | Registro | Log de auditoria de todos los accesos |
| **Capacidad de Intervencion** | Funcion de exportacion | Divulgacion de datos posible |

---

### Enfoque del SDM

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│ 1. DESCRIBIR    │ ─► │ 2. EVALUACION   │ ─► │ 3. SELECCIONAR  │
│    TRATAMIENTO  │    │    DE RIESGOS   │    │    MEDIDAS      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
                                                      │
┌─────────────────┐    ┌─────────────────┐    ┌───────▼─────────┐
│ 6. MEJORA       │ ◄─ │ 5. REVISION     │ ◄─ │ 4. IMPLEMENTAR  │
│    CONTINUA     │    │                 │    │    MEDIDAS      │
│                 │    │                 │    │                 │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

---

## Terminos Clave

| Termino | Explicacion |
|---------|-------------|
| **SDM** | Modelo Estandar de Proteccion de Datos |
| **Objetivo de Proteccion** | Objetivo de proteccion de datos a cumplir |
| **Minimizacion de Datos** | Recopilar solo datos necesarios |
| **No Vinculacion** | Sin vinculacion para otros fines |
| **Capacidad de Intervencion** | Derechos de los interesados implementables |
| **Transparencia** | Comprensibilidad del tratamiento |

---

## Consejos para el Examen

### Preguntas Comunes del Examen
- Que es el Modelo Estandar de Proteccion de Datos?
- Nombra los objetivos de proteccion del SDM
- Que objetivo de proteccion corresponde a que principio del RGPD?

### Importante Recordar
- SDM = Implementacion practica del RGPD
- 7 objetivos de proteccion
- Conexion con los principios del RGPD (Art. 5)

---

## Ejercicios Practicos

### Ejercicio 1
Que es el Modelo Estandar de Proteccion de Datos (SDM)?

**Solucion:** El SDM es una metodologia de las autoridades alemanas de supervision de proteccion de datos que traduce los requisitos abstractos del RGPD en objetivos de proteccion y medidas practicamente implementables.

### Ejercicio 2
Nombra cuatro de los siete objetivos de proteccion del SDM.

**Solucion:**
1. Minimizacion de datos
2. Disponibilidad
3. Confidencialidad
4. Capacidad de intervencion
(o: Integridad, No vinculacion, Transparencia)

### Ejercicio 3
Que objetivo de proteccion asegura que los interesados puedan ejercer sus derechos del RGPD (ej. acceso, supresion)?

**Solucion:** El objetivo de proteccion **Capacidad de Intervencion** asegura que los interesados puedan ejercer sus derechos segun los Art. 12-22 del RGPD.

---

## Referencias Cruzadas

- [03-01-01 Principios del RGPD](../03-01-fundamentals/03-01-01-gdpr-principles.md) - Art. 5 RGPD
- [03-02-01 TOM](./03-02-01-tom.md) - Medidas tecnicas y organizativas
- [04-01-01 Triada CIA](../../04-it-security/04-01-protection-goals/04-01-01-cia-triad.md) - Disponibilidad, Integridad, Confidencialidad
