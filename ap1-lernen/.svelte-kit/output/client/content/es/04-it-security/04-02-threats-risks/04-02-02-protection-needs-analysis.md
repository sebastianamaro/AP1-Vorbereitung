# Analisis de Necesidades de Proteccion

## Objetivos de Aprendizaje

Despues de este capitulo, deberas ser capaz de:
- Explicar el termino analisis de necesidades de proteccion
- Conocer las categorias de requisitos de proteccion
- Describir el proceso de un analisis de necesidades de proteccion
- Evaluar las necesidades de proteccion para varios datos

---

## Contenido Principal

### Que es un Analisis de Necesidades de Proteccion?

El **analisis de necesidades de proteccion** es un procedimiento para determinar el nivel de proteccion necesario para sistemas TI, aplicaciones y datos. Es un componente central de la gestion de seguridad TI.

> El analisis de necesidades de proteccion responde a la pregunta: "Cuan dignos de proteccion son nuestros datos y sistemas?"

---

### Categorias de Requisitos de Proteccion Segun BSI

El BSI (Oficina Federal para la Seguridad de la Informacion) define tres categorias de requisitos de proteccion:

```
+------------------------------------------------------------------+
|              CATEGORIAS DE REQUISITOS DE PROTECCION               |
+------------------------------------------------------------------+
|                                                                   |
|  +--------------------------------------------------------------+ |
|  |                       MUY ALTO                                | |
|  |  Dano: existencialmente amenazante, catastrofico              | |
|  |  Ejemplo: Datos de pacientes, secretos de estado              | |
|  +--------------------------------------------------------------+ |
|                           ^                                       |
|                           |                                       |
|  +--------------------------------------------------------------+ |
|  |                        ALTO                                   | |
|  |  Dano: considerable, dificil de remediar                      | |
|  |  Ejemplo: Datos de personal, datos financieros                | |
|  +--------------------------------------------------------------+ |
|                           ^                                       |
|                           |                                       |
|  +--------------------------------------------------------------+ |
|  |                       NORMAL                                  | |
|  |  Dano: limitado, manejable                                    | |
|  |  Ejemplo: Informacion publica, documentacion interna          | |
|  +--------------------------------------------------------------+ |
|                                                                   |
+------------------------------------------------------------------+
```

---

### Categorias Detalladas

| Categoria | Potencial de Dano | Ejemplos | Medidas |
|-----------|-------------------|----------|---------|
| **Normal** | Limitado, tolerable | Datos comerciales generales, info publica | Medidas estandar |
| **Alto** | Considerable | Datos de personal, datos de clientes, finanzas | Medidas ampliadas |
| **Muy Alto** | Existencialmente amenazante | Datos de pacientes, datos de investigacion, secretos de estado | Medidas maximas |

---

### Escenarios de Dano para Cada Objetivo de Proteccion

#### Confidencialidad

| Necesidad de Proteccion | Impacto si se Viola |
|-------------------------|---------------------|
| **Normal** | Dano de imagen menor |
| **Alto** | Dano de imagen significativo, consecuencias legales |
| **Muy Alto** | Existencialmente amenazante, consecuencias penales |

#### Integridad

| Necesidad de Proteccion | Impacto si se Viola |
|-------------------------|---------------------|
| **Normal** | Corregible, impacto menor |
| **Alto** | Errores significativos en procesos |
| **Muy Alto** | Potencialmente mortal, dano financiero masivo |

#### Disponibilidad

| Necesidad de Proteccion | Impacto si Falla |
|-------------------------|------------------|
| **Normal** | Tiempo de inactividad > 1 dia tolerable |
| **Alto** | Tiempo de inactividad max. unas horas |
| **Muy Alto** | Ningun tiempo de inactividad tolerable |

---

### Proceso del Analisis de Necesidades de Proteccion

```
+------------------+    +------------------+    +------------------+
| 1. INVENTARIO    | -> | 2. EVALUACION    | -> | 3. HERENCIA      |
| Identificar todos|    | Determinar       |    | Considerar       |
| los objetos      |    | necesidad de     |    | dependencias     |
|                  |    | proteccion       |    |                  |
+------------------+    +------------------+    +------------------+
                                                        |
+------------------+    +------------------+    +-------v----------+
| 6. ACTUALIZACION | <- | 5. IMPLEMENTACION| <- | 4. DOCUMENTACION |
|                  |    | Medidas          |    |                  |
+------------------+    +------------------+    +------------------+
```

#### Paso 1: Inventario

- Identificar todos los sistemas TI, aplicaciones y datos
- Capturar procesos de negocio
- Aclarar responsabilidades

#### Paso 2: Evaluacion

Para cada objeto, se evalua la necesidad de proteccion respecto a:
- Confidencialidad
- Integridad
- Disponibilidad

basandose en posibles escenarios de dano.

#### Paso 3: Herencia

```
+--------------------------------------------------------------+
|                   PRINCIPIO DEL MAXIMO                        |
+--------------------------------------------------------------+
|                                                               |
|  +---------------+                                            |
|  | Aplicacion A  |  --> Necesidad de Proteccion: ALTA        |
|  | (Datos cliente)|                                           |
|  +-------+-------+                                            |
|          |                                                    |
|          v                                                    |
|  +---------------+                                            |
|  |    Servidor   |  --> Hereda: ALTA (del valor mas alto)    |
|  +-------+-------+                                            |
|          |                                                    |
|          v                                                    |
|  +---------------+                                            |
|  |     Red       |  --> Hereda: ALTA                         |
|  +---------------+                                            |
|                                                               |
|  La necesidad de proteccion "hereda" segun el principio del  |
|  maximo: El nivel de proteccion mas alto de un componente    |
|  determina el nivel de proteccion de los sistemas            |
|  dependientes.                                                |
+--------------------------------------------------------------+
```

#### Paso 4: Documentacion

- Documentar la determinacion de necesidades de proteccion
- Registrar justificaciones
- Nombrar partes responsables

---

### Ejemplo Practico

| Objeto TI | Confidencialidad | Integridad | Disponibilidad | Justificacion |
|-----------|------------------|------------|----------------|---------------|
| Servidor web (publico) | Normal | Alta | Alta | Info publica, pero manipulacion seria dano de imagen |
| Base datos personal | Alta | Alta | Normal | Datos personales, RGPD |
| Control de produccion | Normal | Muy Alta | Muy Alta | Manipulacion = fallo de produccion |
| Sistema de correo | Alta | Alta | Alta | Comunicacion confidencial |

---

### Conexion con el Analisis de Riesgos

```
+------------------------------------------------------------------+
|                                                                   |
|  Analisis de         Analisis de         Analisis de             |
|  necesidades de  +   amenazas       =    riesgos                 |
|  proteccion                                                       |
|                                                                   |
|  "Que tan                "Que              "Cuan alto es el       |
|   digno de               peligros?"         riesgo?"              |
|   proteccion?"                                                    |
|                                                                   |
|                           v                                       |
|                    Seleccion de medidas                           |
|                                                                   |
+------------------------------------------------------------------+
```

---

## Terminos Clave

| Termino | Explicacion |
|---------|-------------|
| **Analisis de Necesidades de Proteccion** | Determinar el nivel de proteccion necesario |
| **Categoria de Requisito de Proteccion** | Normal, Alto, Muy Alto |
| **Principio del Maximo** | Se hereda la necesidad de proteccion mas alta |
| **Escenario de Dano** | Posible impacto de una violacion |
| **BSI** | Oficina Federal para la Seguridad de la Informacion |
| **Proteccion de Linea Base TI** | Metodologia del BSI para seguridad TI |

---

## Consejos para el Examen

### Preguntas Frecuentes del Examen

- Que es un analisis de necesidades de proteccion?
- Nombra las categorias de requisitos de proteccion
- Como funciona el principio del maximo?
- Asigna datos a un requisito de proteccion

### Importante Recordar

- **3 Categorias:** Normal, Alto, Muy Alto
- **3 Objetivos de Proteccion:** Confidencialidad, Integridad, Disponibilidad (evaluar para cada uno)
- **Principio del Maximo:** Se hereda la necesidad de proteccion mas alta

---

## Ejercicios Practicos

### Ejercicio 1
Que es un analisis de necesidades de proteccion?

**Solucion:** El analisis de necesidades de proteccion es un procedimiento para determinar el nivel de proteccion necesario para sistemas TI, aplicaciones y datos. Evalua la necesidad de proteccion para cada objeto respecto a confidencialidad, integridad y disponibilidad en las categorias Normal, Alto o Muy Alto.

### Ejercicio 2
Que necesidad de proteccion tiene una base de datos de personal con datos salariales?

**Solucion:**
- **Confidencialidad:** ALTA (datos personales, RGPD)
- **Integridad:** ALTA (salarios incorrectos llevan a problemas legales)
- **Disponibilidad:** NORMAL a ALTA (dependiendo del momento de la nomina)

Justificacion: Los datos salariales son datos personales sensibles segun el RGPD y requieren proteccion especial.

### Ejercicio 3
Explica el principio del maximo de la herencia de necesidad de proteccion.

**Solucion:** El principio del maximo establece que un sistema TI hereda la necesidad de proteccion mas alta de todas las aplicaciones que se ejecutan en el o datos almacenados en el. Si un servidor ejecuta una aplicacion con necesidad de proteccion "Normal" y otra con "Alta", el servidor recibe necesidad de proteccion "Alta".

### Ejercicio 4
Asigna los siguientes datos a un requisito de proteccion:
a) Comunicados de prensa publicos
b) Datos de pacientes de una consulta medica
c) Protocolos de reuniones internas

**Solucion:**
a) **Normal** - Accesible publicamente, sin requisitos de proteccion especiales
b) **Muy Alto** - Datos de salud particularmente sensibles segun Art. 9 RGPD
c) **Normal a Alto** - Dependiendo del contenido, informacion interna

---

## Referencias Cruzadas

- [04-01-01 Triada CIA](../04-01-protection-goals/04-01-01-cia-triad.md) - Los tres objetivos de proteccion
- [04-02-01 Tipos de Amenazas](./04-02-01-threat-types.md) - Identificacion de amenazas
- [04-04-01 Proteccion de Linea Base BSI](../04-04-frameworks-standards/04-04-01-bsi-baseline-protection.md) - Metodologia del BSI
- [03-01-02 Datos Personales](../../03-data-protection/03-01-fundamentals/03-01-02-personal-data.md) - Categorias del RGPD
