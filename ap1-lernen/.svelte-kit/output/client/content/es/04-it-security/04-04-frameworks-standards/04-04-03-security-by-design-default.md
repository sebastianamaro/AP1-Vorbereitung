# Seguridad por Diseno y Seguridad por Defecto

## Objetivos de Aprendizaje

Despues de este capitulo, deberas ser capaz de:
- Explicar los conceptos "Seguridad por Diseno" y "Seguridad por Defecto"
- Conocer la diferencia entre ambos conceptos
- Proporcionar ejemplos practicos
- Comprender la conexion con Privacidad por Diseno

---

## Contenido Principal

### Seguridad por Diseno

**Seguridad por Diseno** significa que la seguridad se integra en el proceso de desarrollo y planificacion desde el principio - no se anade despues.

```
+------------------------------------------------------------------+
|                  SEGURIDAD POR DISENO                             |
+------------------------------------------------------------------+
|                                                                   |
|  ENFOQUE TRADICIONAL             SEGURIDAD POR DISENO             |
|  +----------------------+          +----------------------+       |
|  |                      |          |                      |       |
|  |  1. Desarrollo       |          |  1. Requisitos de    |       |
|  |     v                |          |     seguridad        |       |
|  |  2. Pruebas          |          |        v             |       |
|  |     v                |          |  2. Arquit. segura   |       |
|  |  3. Anadir seguridad |          |        v             |       |
|  |     despues          |          |  3. Desarrollo seg.  |       |
|  |                      |          |        v             |       |
|  |  Advertencia: Caro,  |          |  4. Prueba seguridad |       |
|  |  incompleto          |          |        v             |       |
|  |                      |          |  5. Despliegue       |       |
|  +----------------------+          |                      |       |
|                                    |  OK: Seguro desde    |       |
|                                    |  el inicio           |       |
|                                    +----------------------+       |
|                                                                   |
+------------------------------------------------------------------+
```

#### Principios Basicos

| Principio | Descripcion |
|-----------|-------------|
| **Integracion Temprana** | Considerar la seguridad desde el principio |
| **Basado en Riesgos** | Identificar amenazas temprano |
| **Defensa en Profundidad** | Multiples capas de seguridad |
| **Minimo Privilegio** | Permisos minimos |
| **Fallo Seguro** | Cambiar a estado seguro ante errores |

---

### Seguridad por Defecto

**Seguridad por Defecto** significa que un sistema ya es seguro en su configuracion por defecto - sin que el usuario tenga que cambiar ajustes.

```
+------------------------------------------------------------------+
|                  SEGURIDAD POR DEFECTO                            |
+------------------------------------------------------------------+
|                                                                   |
|  SIN Seguridad por Defecto       CON Seguridad por Defecto        |
|  +----------------------+         +----------------------+        |
|  |                      |         |                      |        |
|  |  Contrasena por      |         |  Contrasena requerida|        |
|  |  defecto:            |         |  en primer setup     |        |
|  |  "admin"             |         |                      |        |
|  |                      |         |  Solo puertos        |        |
|  |  Todos los puertos   |         |  necesarios abiertos |        |
|  |  abiertos            |         |                      |        |
|  |                      |         |  Cifrado habilitado  |        |
|  |  Cifrado             |         |  por defecto         |        |
|  |  deshabilitado       |         |                      |        |
|  |                      |         |  OK: Seguro listo    |        |
|  |  Advertencia:        |         |  para usar           |        |
|  |  Inseguro            |         |                      |        |
|  +----------------------+         +----------------------+        |
|                                                                   |
+------------------------------------------------------------------+
```

#### Ejemplos de Seguridad por Defecto

| Area | Defecto Inseguro | Defecto Seguro |
|------|------------------|----------------|
| **Contrasena** | Contrasena por defecto "admin" | Se debe establecer contrasena en primer setup |
| **Puertos** | Todos los puertos abiertos | Solo puertos necesarios abiertos |
| **Servicios** | Todos los servicios activos | Solo servicios necesarios activos |
| **Cifrado** | HTTP | HTTPS |
| **Cortafuegos** | Deshabilitado | Habilitado |
| **Actualizaciones** | Manual | Automatico |

---

### Comparacion: Seguridad por Diseno vs. Seguridad por Defecto

| Aspecto | Seguridad por Diseno | Seguridad por Defecto |
|---------|----------------------|----------------------|
| **Momento** | Durante el desarrollo | En la entrega |
| **Enfoque** | Proceso de desarrollo | Configuracion |
| **Objetivo** | Arquitectura segura | Ajustes por defecto seguros |
| **Ejemplo** | Inyeccion SQL imposible | Cortafuegos habilitado por defecto |

**Ambos conceptos se complementan!**

---

### Privacidad por Diseno

**Privacidad por Diseno** es el equivalente de proteccion de datos de Seguridad por Diseno:

| Concepto | Enfoque |
|----------|---------|
| **Seguridad por Diseno** | Seguridad TI desde el principio |
| **Privacidad por Diseno** | Proteccion de datos desde el principio |

Privacidad por Diseno esta consagrada en el **Art. 25 RGPD** y requiere:
- Proteccion de datos mediante diseno de tecnologia
- Ajustes por defecto amigables con la privacidad

---

### Implementacion Practica

#### Seguridad por Diseno en el Desarrollo de Software

```
+------------------------------------------------------------------+
|          SEGURIDAD POR DISENO EN EL SDLC                          |
+------------------------------------------------------------------+
|                                                                   |
|  REQUISITOS --> DISENO --> DESARROLLO --> PRUEBA --> DESPLIEGUE   |
|       |              |              |           |         |       |
|       v              v              v           v         v       |
|  +-----------+  +-----------+  +-----------+ +---------+ +-----+  |
|  |Requisitos |  |Arquitec-  |  |Practicas  | |Pruebas  | |Despl| |
|  |de         |  |tura       |  |de         | |de       | |iegue| |
|  |seguridad  |  |segura     |  |codificacion| |pene-   | |seguro| |
|  |           |  |           |  |segura     | |tracion | |     | |
|  +-----------+  +-----------+  +-----------+ +---------+ +-----+  |
|                                                                   |
+------------------------------------------------------------------+
```

| Fase | Actividad de Seguridad |
|------|------------------------|
| **Requisitos** | Definir requisitos de seguridad |
| **Diseno** | Modelado de amenazas, arquitectura segura |
| **Desarrollo** | Codificacion segura, revisiones de codigo |
| **Prueba** | Pruebas de seguridad, pruebas de penetracion |
| **Despliegue** | Configuracion segura, fortalecimiento |

#### Seguridad por Defecto - Lista de Verificacion

| Area | Recomendacion Estandar |
|------|------------------------|
| **Autenticacion** | Forzar contrasenas fuertes, recomendar 2FA |
| **Cifrado** | Habilitar TLS/HTTPS por defecto |
| **Permisos** | Derechos minimos como defecto |
| **Servicios** | Habilitar solo servicios necesarios |
| **Registro** | Registrar eventos relevantes para seguridad |
| **Actualizaciones** | Habilitar actualizaciones automaticas |

---

### Ventajas de Estos Enfoques

| Ventaja | Descripcion |
|---------|-------------|
| **Ahorro de Costes** | Correccion temprana de errores es mas barata |
| **Menos Vulnerabilidades** | Consideracion sistematica |
| **Cumplimiento** | Cumplir requisitos legales (RGPD) |
| **Confianza** | Productos seguros fortalecen la confianza del cliente |
| **Menos Retrabajo** | No se necesitan parches posteriores |

---

## Terminos Clave

| Termino | Explicacion |
|---------|-------------|
| **Seguridad por Diseno** | Seguridad desde el principio en el desarrollo |
| **Seguridad por Defecto** | Configuracion por defecto segura |
| **Privacidad por Diseno** | Proteccion de datos desde el principio (Art. 25 RGPD) |
| **Defensa en Profundidad** | Seguridad multicapa |
| **Fallo Seguro** | Cambiar a estado seguro ante error |
| **Minimo Privilegio** | Permisos minimos |

---

## Consejos para el Examen

### Preguntas Frecuentes del Examen

- Que significa "Seguridad por Diseno"?
- Cual es la diferencia entre "Seguridad por Diseno" y "Seguridad por Defecto"?
- Da ejemplos de "Seguridad por Defecto"
- Que es "Privacidad por Diseno"?

### Importante Recordar

- **Seguridad por Diseno** = Seguridad durante el desarrollo
- **Seguridad por Defecto** = Configuracion por defecto segura
- **Privacidad por Diseno** = Art. 25 RGPD
- Ambos conceptos **se complementan**

---

## Ejercicios Practicos

### Ejercicio 1
Que significa "Seguridad por Diseno"?

**Solucion:** "Seguridad por Diseno" significa que los aspectos de seguridad se integran en el proceso de desarrollo y planificacion desde el principio. En lugar de anadir seguridad despues, se considera desde la primera fase de planificacion. Esto lleva a sistemas seguros y evita costosas correcciones posteriores.

### Ejercicio 2
Da tres ejemplos de "Seguridad por Defecto".

**Solucion:**
1. **Contrasena:** El usuario debe establecer una contrasena fuerte en el primer setup (sin contrasena por defecto)
2. **Cortafuegos:** El cortafuegos esta habilitado por defecto
3. **Cifrado:** HTTPS es estandar, no HTTP

(Otros: Actualizaciones automaticas habilitadas, solo puertos necesarios abiertos, permisos minimos)

### Ejercicio 3
Cual es la conexion entre Seguridad por Diseno y Privacidad por Diseno?

**Solucion:** Ambos conceptos siguen el mismo enfoque - integracion desde el principio:
- **Seguridad por Diseno:** La seguridad TI se integra en el desarrollo desde el inicio
- **Privacidad por Diseno:** La proteccion de datos se integra en el desarrollo desde el inicio

Privacidad por Diseno esta legalmente consagrada en el Art. 25 RGPD y requiere "proteccion de datos mediante diseno de tecnologia" y "ajustes por defecto amigables con la privacidad".

### Ejercicio 4
Por que es Seguridad por Diseno mas rentable que las medidas de seguridad posteriores?

**Solucion:** Seguridad por Diseno es mas rentable porque:
1. Los errores pueden detectarse y corregirse temprano (cuanto mas tarde, mas caro)
2. No se necesitan cambios de arquitectura
3. Menos vulnerabilidades de seguridad en el producto terminado
4. Menos parches de emergencia despues del lanzamiento
5. Menos esfuerzo para retrabajo

---

## Referencias Cruzadas

- [04-03-03 Fortalecimiento del SO](../04-03-protective-measures/04-03-03-os-hardening.md) - Configuracion segura
- [04-04-02 SGSI](./04-04-02-isms.md) - Seguridad sistematica
- [03-01-01 Principios del RGPD](../../03-data-protection/03-01-fundamentals/03-01-01-gdpr-principles.md) - Privacidad por Diseno (Art. 25)
- [06-06-01 SDLC](../../06-software/06-06-development-process/06-06-01-sdlc.md) - Proceso de desarrollo de software
