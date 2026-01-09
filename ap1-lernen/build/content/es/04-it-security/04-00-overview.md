# Seguridad TI - Vision General del Capitulo

## Introduccion

La Seguridad TI (Seguridad de la Informacion) es un tema central del examen AP1 y ha aumentado significativamente en importancia en el catalogo de examenes 2025. Este capitulo cubre todos los aspectos relevantes de la proteccion de sistemas TI y datos.

---

## Objetivos de Aprendizaje

Despues de completar este capitulo, deberas ser capaz de:
- Explicar los objetivos de proteccion de la seguridad TI (triada CIA)
- Identificar amenazas y vulnerabilidades
- Conocer medidas de proteccion tecnicas y organizativas
- Explicar la Autenticacion de Dos Factores (2FA) [NUEVO 2025]
- Comprender el fortalecimiento del sistema operativo [NUEVO 2025]
- Conocer los fundamentos de la proteccion de linea base del BSI
- Describir metodos criptograficos
- Comprender los valores hash y sus aplicaciones [NUEVO 2025]

---

## Estructura del Capitulo

```
04-IT-SECURITY
|
+-- 04-01 Objetivos de Proteccion
|   +-- 04-01-01 Triada CIA
|
+-- 04-02 Amenazas y Riesgos
|   +-- 04-02-01 Tipos de Amenazas
|   +-- 04-02-02 Analisis de Necesidades de Proteccion
|
+-- 04-03 Medidas de Proteccion
|   +-- 04-03-01 Medidas Tecnicas
|   +-- 04-03-02 Autenticacion y 2FA [NUEVO 2025]
|   +-- 04-03-03 Fortalecimiento del SO [NUEVO 2025]
|   +-- 04-03-04 Cortafuegos Personal
|
+-- 04-04 Marcos y Estandares
|   +-- 04-04-01 Proteccion de Linea Base BSI
|   +-- 04-04-02 SGSI
|   +-- 04-04-03 Seguridad por Diseno/por Defecto
|
+-- 04-05 Criptografia
    +-- 04-05-01 Metodos de Cifrado
    +-- 04-05-02 Valores Hash [NUEVO 2025]
    +-- 04-05-03 Certificados
    +-- 04-05-04 Firmas Digitales
```

---

## Vision General: Seguridad TI

### Los Tres Pilares de la Seguridad TI

```
+------------------------------------------------------------------+
|                         SEGURIDAD TI                              |
+------------------------------------------------------------------+
|                                                                   |
|  +------------------+  +------------------+  +------------------+ |
|  | CONFIDENCIALIDAD |  |    INTEGRIDAD    |  |  DISPONIBILIDAD  | |
|  |                  |  |                  |  |                  | |
|  |                  |  |                  |  |                  | |
|  | Solo usuarios    |  | Datos correctos |  | Sistema utilizable|
|  | autorizados      |  | y sin cambios   |  | cuando se necesita|
|  | tienen acceso    |  |                 |  |                  | |
|  +------------------+  +------------------+  +------------------+ |
|           |                   |                   |               |
|           v                   v                   v               |
|  +---------------------------------------------------------------+|
|  |               MEDIDAS DE PROTECCION                            ||
|  |  * Tecnicas (Cifrado, Cortafuegos, 2FA)                       ||
|  |  * Organizativas (Politicas, Formacion)                       ||
|  |  * Fisicas (Control de Acceso)                                ||
|  +---------------------------------------------------------------+|
+------------------------------------------------------------------+
```

---

## Nuevos Temas 2025 - Particularmente Relevantes para el Examen

| Tema | Descripcion | Referencia |
|------|-------------|------------|
| **2FA/MFA** | Autenticacion de Dos Factores con varios factores | [04-03-02](./04-03-protective-measures/04-03-02-authentication-2fa.md) |
| **Fortalecimiento del SO** | Aseguramiento de sistemas operativos | [04-03-03](./04-03-protective-measures/04-03-03-os-hardening.md) |
| **Valores Hash** | Sumas de verificacion para verificacion de integridad | [04-05-02](./04-05-cryptography/04-05-02-hash-values.md) |
| **Seguridad por Diseno** | Seguridad desde el principio | [04-04-03](./04-04-frameworks-standards/04-04-03-security-by-design-default.md) |

---

## Conexiones con Otros Capitulos

| Tema | Referencia | Conexion |
|------|------------|----------|
| **Proteccion de Datos (TOM)** | [03-02-01](../03-data-protection/03-02-technical-measures/03-02-01-tom.md) | Medidas tecnico-organizativas |
| **RGPD** | [03-01-01](../03-data-protection/03-01-fundamentals/03-01-01-gdpr-principles.md) | Requisitos legales |
| **Backup** | [05-05](../05-it-systems/05-05-data-backup/) | Aseguramiento de disponibilidad |
| **Redes** | [07-01](../07-networks/07-01-network-fundamentals/) | Seguridad de red |

---

## Importante para el Examen

### Temas Frecuentes del Examen

1. **Triada CIA** - Definicion y ejemplos
2. **Factores de Autenticacion** - Conocimiento, Posesion, Biometria
3. **Tipos de Cifrado** - Simetrico vs. Asimetrico
4. **Valores Hash** - Aplicaciones y propiedades
5. **Proteccion de Linea Base BSI** - Metodologia

### Ya No en el Catalogo de Examenes 2025

- ~~Estandares ISO 2700x~~ (eliminados)
- ~~Configuracion Detallada de Cortafuegos~~ (solo conceptos basicos)

---

## Terminos Clave

| Termino | Explicacion |
|---------|-------------|
| **Seguridad TI** | Proteccion de sistemas TI y datos |
| **Seguridad de la Informacion** | Proteccion integral de toda la informacion |
| **Triada CIA** | Confidencialidad, Integridad, Disponibilidad |
| **2FA** | Autenticacion de Dos Factores |
| **Criptografia** | Ciencia del cifrado |
| **SGSI** | Sistema de Gestion de Seguridad de la Informacion |
| **BSI** | Oficina Federal para la Seguridad de la Informacion (Alemania) |

---

## Subcapitulos

1. [Objetivos de Proteccion - Triada CIA](./04-01-protection-goals/04-01-01-cia-triad.md)
2. [Tipos de Amenazas](./04-02-threats-risks/04-02-01-threat-types.md)
3. [Analisis de Necesidades de Proteccion](./04-02-threats-risks/04-02-02-protection-needs-analysis.md)
4. [Medidas Tecnicas](./04-03-protective-measures/04-03-01-technical-measures.md)
5. [Autenticacion y 2FA](./04-03-protective-measures/04-03-02-authentication-2fa.md)
6. [Fortalecimiento del SO](./04-03-protective-measures/04-03-03-os-hardening.md)
7. [Cortafuegos Personal](./04-03-protective-measures/04-03-04-personal-firewall.md)
8. [Proteccion de Linea Base BSI](./04-04-frameworks-standards/04-04-01-bsi-baseline-protection.md)
9. [SGSI](./04-04-frameworks-standards/04-04-02-isms.md)
10. [Seguridad por Diseno/por Defecto](./04-04-frameworks-standards/04-04-03-security-by-design-default.md)
11. [Metodos de Cifrado](./04-05-cryptography/04-05-01-encryption-methods.md)
12. [Valores Hash](./04-05-cryptography/04-05-02-hash-values.md)
13. [Certificados](./04-05-cryptography/04-05-03-certificates.md)
14. [Firmas Digitales](./04-05-cryptography/04-05-04-digital-signatures.md)
