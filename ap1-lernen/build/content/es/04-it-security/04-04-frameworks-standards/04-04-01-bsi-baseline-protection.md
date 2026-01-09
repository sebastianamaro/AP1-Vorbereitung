# Proteccion de Linea Base BSI

## Objetivos de Aprendizaje

Despues de este capitulo, deberas ser capaz de:
- Conocer el BSI y su mision
- Explicar el concepto de Proteccion de Linea Base TI
- Comprender la metodologia segun la Proteccion de Linea Base BSI
- Conocer la conexion con las necesidades de proteccion

---

## Contenido Principal

### Que es el BSI?

El **BSI (Oficina Federal para la Seguridad de la Informacion)** es la autoridad central de seguridad TI de Alemania.

| Aspecto | Detalles |
|---------|----------|
| **Fundado** | 1991 |
| **Ubicacion** | Bonn |
| **Tareas** | Seguridad TI para gobierno, empresas, sociedad |
| **Sitio Web** | www.bsi.bund.de |

---

### El Concepto de Proteccion de Linea Base TI

La **Proteccion de Linea Base TI** es una metodologia del BSI para implementar la seguridad de la informacion.

```
+------------------------------------------------------------------+
|                    PROTECCION DE LINEA BASE TI BSI                |
+------------------------------------------------------------------+
|                                                                   |
|  +--------------------------------------------------------------+ |
|  |                    ESTANDARES BSI                             | |
|  |                                                               | |
|  |  * Estandar BSI 200-1: Sistemas de Gestion                    | |
|  |  * Estandar BSI 200-2: Metodologia Proteccion Linea Base TI   | |
|  |  * Estandar BSI 200-3: Analisis de Riesgos                    | |
|  |  * Estandar BSI 200-4: Continuidad del Negocio                | |
|  +--------------------------------------------------------------+ |
|                                                                   |
|  +--------------------------------------------------------------+ |
|  |              COMPENDIO DE PROTECCION DE LINEA BASE TI         | |
|  |                                                               | |
|  |  * Modulos para varias areas                                  | |
|  |  * Guia de implementacion concreta                            | |
|  |  * Catalogos de amenazas                                      | |
|  |  * Catalogos de medidas                                       | |
|  +--------------------------------------------------------------+ |
|                                                                   |
+------------------------------------------------------------------+
```

---

### Idea Basica de la Proteccion de Linea Base TI

> "Para procesos de negocio y sistemas TI tipicos, existen amenazas tipicas y medidas tipicas."

| Concepto | Descripcion |
|----------|-------------|
| **Estandarizacion** | Medidas estandar para escenarios tipicos |
| **Eficiencia** | Sin analisis de riesgo individual para casos estandar |
| **Catalogos** | Modulos con recomendaciones de medidas listas |
| **Proteccion Normal** | Adecuado para necesidades de proteccion normales |

---

### Metodologia Segun la Proteccion de Linea Base TI

```
+------------------------------------------------------------------+
|              METODOLOGIA PROTECCION DE LINEA BASE TI              |
+------------------------------------------------------------------+
|                                                                   |
|  +------------------+                                             |
|  | 1. INICIACION    | Compromiso de direccion, responsabilidades |
|  +--------+---------+                                             |
|           |                                                       |
|           v                                                       |
|  +------------------+                                             |
|  | 2. ANALISIS DE   | Capturar sistemas TI, aplicaciones, salas  |
|  |    ESTRUCTURA    |                                             |
|  +--------+---------+                                             |
|           |                                                       |
|           v                                                       |
|  +------------------+                                             |
|  | 3. ANALISIS DE   | Normal / Alto / Muy Alto para cada objeto  |
|  |    NECESIDADES   |                                             |
|  |    DE PROTECCION |                                             |
|  +--------+---------+                                             |
|           |                                                       |
|           v                                                       |
|  +------------------+                                             |
|  | 4. MODELADO      | Seleccionar modulos apropiados              |
|  +--------+---------+                                             |
|           |                                                       |
|           v                                                       |
|  +------------------+                                             |
|  | 5. VERIFICACION  | Comparacion objetivo-real                   |
|  |    PROTECCION    |                                             |
|  |    LINEA BASE TI |                                             |
|  +--------+---------+                                             |
|           |                                                       |
|           v                                                       |
|  +------------------+                                             |
|  | 6. IMPLEMENTACION| Implementar medidas                         |
|  +------------------+                                             |
|                                                                   |
+------------------------------------------------------------------+
```

---

### Pasos en Detalle

#### 1. Iniciacion

- Decision de direccion para Proteccion de Linea Base TI
- Establecer responsabilidades
- Proporcionar recursos

#### 2. Analisis de Estructura

| A Capturar | Ejemplos |
|------------|----------|
| **Sistemas TI** | Servidores, clientes, componentes de red |
| **Aplicaciones** | ERP, correo electronico, bases de datos |
| **Salas** | Sala de servidores, oficinas |
| **Procesos de Negocio** | Adquisiciones, ventas |
| **Partes Responsables** | Gerente TI, departamentos |

#### 3. Analisis de Necesidades de Proteccion

Para cada objeto capturado, se determina la necesidad de proteccion:

| Categoria | Descripcion |
|-----------|-------------|
| **Normal** | Medidas estandar suficientes |
| **Alto** | Medidas ampliadas requeridas |
| **Muy Alto** | Se necesita analisis de riesgo individual |

#### 4. Modelado

Seleccion de **modulos** apropiados del Compendio de Proteccion de Linea Base TI:

| Capa | Modulos (Ejemplos) |
|------|-------------------|
| **SGSI** | Gestion de Seguridad |
| **ORP** | Organizacion y Personal |
| **CON** | Conceptos (Backup, Criptografia) |
| **OPS** | Operaciones (Gestion de Parches) |
| **DER** | Deteccion y Respuesta |
| **APP** | Aplicaciones (Correo, Bases de Datos) |
| **SYS** | Sistemas TI (Servidores, Clientes) |
| **IND** | TI Industrial |
| **NET** | Redes y Comunicacion |
| **INF** | Infraestructura (Edificios, Salas) |

#### 5. Verificacion de Proteccion de Linea Base TI

- Comparacion objetivo-real
- Que medidas estan implementadas?
- Donde se necesita accion?

#### 6. Implementacion

- Priorizar medidas
- Crear plan de implementacion
- Implementar medidas
- Documentar

---

### Necesidad de Proteccion y Enfoque

```
+----------------------------------------------------------------+
|              ENFOQUE SEGUN NECESIDAD DE PROTECCION              |
+----------------------------------------------------------------+
|                                                                 |
|  Necesidad de Proteccion: NORMAL                                |
|  -----------------------                                        |
|  -> Aplicar modulos estandar                                    |
|  -> No se necesita analisis de riesgo individual                |
|                                                                 |
|  Necesidad de Proteccion: ALTO                                  |
|  ---------------------                                          |
|  -> Modulos estandar + medidas complementarias                  |
|  -> Analisis de amenazas ampliado                               |
|                                                                 |
|  Necesidad de Proteccion: MUY ALTO                              |
|  --------------------------                                     |
|  -> Analisis de riesgo individual (Estandar BSI 200-3)          |
|  -> Medidas a medida                                            |
|                                                                 |
+----------------------------------------------------------------+
```

---

### Certificacion Segun Proteccion de Linea Base TI

| Certificado | Descripcion |
|-------------|-------------|
| **ISO 27001 basado en Proteccion de Linea Base TI** | Certificacion oficial por BSI |
| **Certificado** | Confirmacion de implementacion |
| **Auditor** | Examinadores con licencia BSI |

---

## Terminos Clave

| Termino | Explicacion |
|---------|-------------|
| **BSI** | Oficina Federal para la Seguridad de la Informacion |
| **Proteccion de Linea Base TI** | Metodologia BSI para seguridad TI |
| **Modulo** | Catalogo con requisitos y medidas para un area |
| **Analisis de Estructura** | Captura de todos los componentes TI |
| **Verificacion de Proteccion de Linea Base TI** | Comparacion objetivo-real |
| **Compendio de Proteccion de Linea Base TI** | Coleccion de todos los modulos |

---

## Consejos para el Examen

### Preguntas Frecuentes del Examen

- Que es el BSI?
- Que es la Proteccion de Linea Base TI?
- Nombra pasos de la metodologia de Proteccion de Linea Base TI
- Que es un modulo de Proteccion de Linea Base TI?

### Importante Recordar

- **BSI** = Oficina Federal para la Seguridad de la Informacion
- **Proteccion de Linea Base TI** = Metodologia para necesidades de proteccion normales
- **Modulos** = Catalogos de medidas listos
- **6 Pasos:** Iniciacion -> Analisis de Estructura -> Analisis de Necesidades de Proteccion -> Modelado -> Verificacion -> Implementacion

**Nota:** ISO 2700x YA NO esta en el catalogo de examenes 2025!

---

## Ejercicios Practicos

### Ejercicio 1
Que es el BSI y cual es su tarea?

**Solucion:** El **BSI (Oficina Federal para la Seguridad de la Informacion)** es la autoridad central de seguridad TI en Alemania. Es responsable de:
- Seguridad TI para gobierno federal, estados e infraestructuras criticas
- Desarrollo de estandares de seguridad (Proteccion de Linea Base TI)
- Advertir sobre amenazas actuales
- Certificacion de productos de seguridad TI

### Ejercicio 2
Cual es la idea basica de la Proteccion de Linea Base TI?

**Solucion:** La idea basica es que existen amenazas tipicas y medidas tipicas para sistemas TI y procesos de negocio tipicos. En lugar de realizar un analisis de riesgo individual para cada caso, la Proteccion de Linea Base TI ofrece **modulos** listos con recomendaciones de medidas. Esto es eficiente para sistemas con **necesidades de proteccion normales**.

### Ejercicio 3
Nombra cuatro pasos de la metodologia de Proteccion de Linea Base TI.

**Solucion:**
1. **Analisis de Estructura** - Capturar sistemas TI y aplicaciones
2. **Analisis de Necesidades de Proteccion** - Determinar necesidad de proteccion para cada objeto
3. **Modelado** - Seleccionar modulos apropiados
4. **Verificacion de Proteccion de Linea Base TI** - Realizar comparacion objetivo-real

(o: Iniciacion, Implementacion)

### Ejercicio 4
Cuando se requiere un analisis de riesgo individual segun la Proteccion de Linea Base BSI?

**Solucion:** Se requiere un analisis de riesgo individual cuando la necesidad de proteccion es **"muy alta"**. En este caso, los modulos estandar no son suficientes y deben desarrollarse medidas a medida. El procedimiento para esto se describe en el Estandar BSI 200-3.

---

## Referencias Cruzadas

- [04-02-02 Analisis de Necesidades de Proteccion](../04-02-threats-risks/04-02-02-protection-needs-analysis.md) - Determinacion de necesidades de proteccion
- [04-04-02 SGSI](./04-04-02-isms.md) - Sistema de Gestion de Seguridad de la Informacion
- [04-01-01 Triada CIA](../04-01-protection-goals/04-01-01-cia-triad.md) - Objetivos de proteccion
- [03-02-01 TOM](../../03-data-protection/03-02-technical-measures/03-02-01-tom.md) - Medidas tecnico-organizativas
