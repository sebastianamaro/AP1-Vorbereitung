# Triada CIA - Objetivos de Proteccion de la Seguridad TI

## Objetivos de Aprendizaje

Despues de este capitulo, deberas ser capaz de:
- Nombrar los tres objetivos de proteccion de la seguridad TI
- Definir y explicar cada objetivo de proteccion
- Proporcionar ejemplos de implementacion de los objetivos de proteccion
- Comprender la relacion entre los objetivos de proteccion

---

## Contenido Principal

### Que es la Triada CIA?

La **triada CIA** describe los tres objetivos fundamentales de proteccion de la seguridad de la informacion. El nombre deriva de los terminos en ingles:

- **C**onfidentiality (Confidencialidad)
- **I**ntegrity (Integridad)
- **A**vailability (Disponibilidad)

```
+------------------------------------------------------------------+
|                         TRIADA CIA                                |
+------------------------------------------------------------------+
|                                                                   |
|                      CONFIDENCIALIDAD                             |
|                           ^                                       |
|                          /|\                                      |
|                         / | \                                     |
|                        /  |  \                                    |
|                       /   |   \                                   |
|                      /    |    \                                  |
|      INTEGRIDAD <----/-----+-----\----> DISPONIBILIDAD            |
|                                                                   |
|   Los tres objetivos deben estar equilibrados!                    |
+------------------------------------------------------------------+
```

---

### 1. Confidencialidad

#### Definicion

**Confidencialidad** significa que la informacion solo es accesible para personas, procesos o sistemas autorizados.

> Solo aquellos que estan autorizados pueden acceder a los datos.

#### Amenazas a la Confidencialidad

| Amenaza | Descripcion |
|---------|-------------|
| **Acceso No Autorizado** | Hackers, empleados sin autorizacion |
| **Espionaje** | Lectura del trafico de red |
| **Ingenieria Social** | Manipulacion de personas |
| **Robo** | Robo de dispositivos o medios de almacenamiento |

#### Medidas para Garantizar la Confidencialidad

| Medida | Ejemplo |
|--------|---------|
| **Cifrado** | AES, TLS/SSL |
| **Controles de Acceso** | Concepto de autorizacion |
| **Autenticacion** | Contrasenas, 2FA |
| **Formacion** | Formacion en concienciacion |

#### Ejemplo

Un cliente quiere que sus datos de cuenta solo sean visibles para el mismo. El banco debe asegurar mediante cifrado y controles de acceso que nadie mas tenga acceso.

---

### 2. Integridad

#### Definicion

**Integridad** significa que los datos estan completos, son correctos y no han sido alterados. Los cambios deben ser trazables y solo posibles por partes autorizadas.

> Los datos no deben ser alterados sin ser detectados.

#### Amenazas a la Integridad

| Amenaza | Descripcion |
|---------|-------------|
| **Manipulacion** | Alteracion deliberada de datos |
| **Errores de Transmision** | Errores durante la transmision de datos |
| **Errores de Software** | Bugs que corrompen datos |
| **Defectos de Hardware** | Errores de memoria |

#### Medidas para Garantizar la Integridad

| Medida | Ejemplo |
|--------|---------|
| **Valores Hash** | SHA-256, MD5 (obsoleto) |
| **Firmas Digitales** | Verificar autenticidad |
| **Sumas de Verificacion** | CRC para transmision |
| **Registro** | Logs de auditoria |
| **Versionado** | Historial de cambios |

#### Ejemplo

En una transferencia bancaria en linea, debe asegurarse que el monto no pueda ser manipulado de 100 EUR a 10,000 EUR. Los valores hash y las firmas digitales protegen contra esto.

---

### 3. Disponibilidad

#### Definicion

**Disponibilidad** significa que los datos y sistemas TI son accesibles y utilizables para usuarios autorizados en el momento deseado.

> El sistema debe funcionar cuando se necesita.

#### Amenazas a la Disponibilidad

| Amenaza | Descripcion |
|---------|-------------|
| **Fallo del Sistema** | Errores de hardware o software |
| **Ataques DoS** | Denegacion de Servicio |
| **Corte de Energia** | Suministro electrico interrumpido |
| **Desastres Naturales** | Incendio, danos por agua |
| **Sobrecarga** | Demasiadas solicitudes |

#### Medidas para Garantizar la Disponibilidad

| Medida | Ejemplo |
|--------|---------|
| **Redundancia** | Hardware de respaldo |
| **Backup** | Copia de seguridad regular de datos |
| **SAI** | Sistema de Alimentacion Ininterrumpida |
| **Balanceo de Carga** | Balanceador de carga |
| **Planes de Emergencia** | Continuidad del Negocio |

#### Ejemplo

Una tienda en linea debe permanecer accesible incluso durante alta carga (ej. Black Friday). La disponibilidad se asegura mediante balanceo de carga y servidores redundantes.

---

### Interaccion de los Objetivos de Proteccion

Los tres objetivos de proteccion pueden entrar en conflicto:

| Conflicto | Ejemplo |
|-----------|---------|
| **Confidencialidad vs. Disponibilidad** | El cifrado fuerte puede reducir el rendimiento |
| **Integridad vs. Disponibilidad** | Las verificaciones elaboradas retrasan el acceso |
| **Confidencialidad vs. Usabilidad** | Demasiadas restricciones de acceso dificultan el trabajo |

**Solucion:** Un **analisis de necesidades de proteccion** ayuda a encontrar el equilibrio adecuado.

---

### Objetivos de Proteccion Ampliados

Ademas de la triada CIA clasica, existen otros objetivos de proteccion:

| Objetivo de Proteccion | Descripcion |
|------------------------|-------------|
| **Autenticidad** | Genuinidad de identidad o datos |
| **No Repudio** | Demostrabilidad de acciones |
| **Responsabilidad** | Las acciones pueden atribuirse a personas |
| **Proteccion de Datos** | Proteccion de datos personales |

---

## Terminos Clave

| Termino | Explicacion |
|---------|-------------|
| **Triada CIA** | Tres objetivos de proteccion: Confidencialidad, Integridad, Disponibilidad |
| **Confidencialidad** | Solo partes autorizadas tienen acceso |
| **Integridad** | Los datos son correctos y sin cambios |
| **Disponibilidad** | El sistema es utilizable cuando se necesita |
| **Autenticidad** | Genuinidad de una identidad o mensaje |
| **No Repudio** | La accion no puede negarse |

---

## Consejos para el Examen

### Preguntas Frecuentes del Examen

- Cuales son los tres objetivos de proteccion de la seguridad TI?
- Nombra medidas para garantizar confidencialidad/integridad/disponibilidad
- Que objetivo de proteccion se ve afectado en [escenario]?

### Mnemotecnico

**C-I-A** (como la agencia estadounidense) = **C-I-A** en ingles:
- **C**onfidentiality (Confidencialidad)
- **I**ntegrity (Integridad)
- **A**vailability (Disponibilidad)

### Escenarios Tipicos para Clasificar

| Escenario | Objetivo de Proteccion Afectado |
|-----------|--------------------------------|
| Datos fueron robados | **Confidencialidad** violada |
| Datos fueron manipulados | **Integridad** violada |
| Sistema no accesible | **Disponibilidad** violada |

---

## Ejercicios Practicos

### Ejercicio 1
Que significa la abreviatura CIA en el contexto de la seguridad TI?

**Solucion:** CIA representa los tres objetivos de proteccion:
- **C**onfidencialidad
- **I**ntegridad
- **D**isponibilidad (Availability)

### Ejercicio 2
Un hacker cambia el monto de una transferencia en linea de 100 EUR a 1,000 EUR. Que objetivo de proteccion se viola?

**Solucion:** El objetivo de proteccion **Integridad** se viola, ya que los datos (monto de la transferencia) fueron cambiados sin autorizacion.

### Ejercicio 3
Nombra dos medidas cada una para garantizar confidencialidad, integridad y disponibilidad.

**Solucion:**
- **Confidencialidad:** Cifrado, controles de acceso
- **Integridad:** Valores hash, firmas digitales
- **Disponibilidad:** Backup, SAI (sistema de alimentacion ininterrumpida)

### Ejercicio 4
Un servidor falla debido a un corte de energia. Que objetivo de proteccion se viola?

**Solucion:** El objetivo de proteccion **Disponibilidad** se viola, ya que el sistema no puede utilizarse.

---

## Referencias Cruzadas

- [03-02-01 TOM](../../03-data-protection/03-02-technical-measures/03-02-01-tom.md) - Medidas tecnico-organizativas
- [04-03-01 Medidas Tecnicas](../04-03-protective-measures/04-03-01-technical-measures.md) - Medidas de proteccion concretas
- [04-05-02 Valores Hash](../04-05-cryptography/04-05-02-hash-values.md) - Verificacion de integridad
- [05-05-01 Tipos de Backup](../../05-it-systems/05-05-data-backup/05-05-01-backup-types.md) - Aseguramiento de disponibilidad
