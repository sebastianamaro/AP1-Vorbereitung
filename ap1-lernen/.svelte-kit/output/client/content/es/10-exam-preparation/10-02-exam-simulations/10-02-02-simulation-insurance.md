# Simulacion de Examen 2: Seguros "SecureLife AG"

## Instrucciones del Examen

- **Tiempo de Procesamiento:** 90 minutos
- **Recursos Permitidos:** Calculadora (no programable)
- **Puntos:** 100 puntos en total
- **Umbral de Aprobacion:** 50 puntos

---

## Situacion Inicial

**SecureLife AG** es una compañia de seguros mediana con sede en Frankfurt am Main. La empresa emplea a 180 personas y ofrece seguros de vida, salud y propiedad.

Usted es un aprendiz de especialista en TI para integracion de sistemas en el departamento de TI de SecureLife AG. El departamento de TI consta de 12 empleados y es responsable de toda la infraestructura de TI.

La compañia de seguros procesa datos sensibles de clientes diariamente, incluyendo informacion de salud, datos financieros e informacion de contratos. Por lo tanto, la seguridad informatica tiene la maxima prioridad.

Entorno de TI actual:
- Dos servidores fisicos en su propio centro de datos
- Virtualizacion con VMware
- Active Directory para gestion de usuarios
- 200 computadoras de estacion de trabajo (Windows 11)
- Correo electronico via Microsoft Exchange Online
- Software de seguros desarrollado internamente "SecureApp"

---

## Tarea 1: Seguridad Informatica (26 Puntos)

### Tarea 1.1 (8 Puntos)

SecureLife AG ha descubierto que se enviaron varios correos electronicos de phishing a los empleados en el pasado. Un empleado hizo clic accidentalmente en un enlace.

a) Explique que es el **phishing**. (2 Puntos)

b) Nombre **cuatro** medidas tecnicas que el departamento de TI puede tomar para dificultar los ataques de phishing. (4 Puntos)

c) Nombre **dos** medidas organizativas que la empresa deberia implementar adicionalmente. (2 Puntos)

### Tarea 1.2 (6 Puntos)

La direccion de TI quiere introducir una **politica de contraseñas** para todos los empleados.

a) Formule **cuatro** requisitos especificos que deberia contener una politica de contraseñas segura. (4 Puntos)

b) Explique por que el uso de **valores hash** es importante al almacenar contraseñas. (2 Puntos)

### Tarea 1.3 (6 Puntos)

SecureLife AG quiere enviar documentos de contratos confidenciales a los clientes por correo electronico.

a) Explique la diferencia entre encriptacion **simetrica** y **asimetrica**. (4 Puntos)

b) Explique que es la **encriptacion hibrida** y por que se usa frecuentemente en la practica. (2 Puntos)

### Tarea 1.4 (6 Puntos)

Como parte de la gestion de emergencias, la infraestructura de TI deberia poder restaurarse rapidamente despues de una falla del servidor.

a) Explique los terminos **RTO** (Objetivo de Tiempo de Recuperacion) y **RPO** (Objetivo de Punto de Recuperacion). (4 Puntos)

b) SecureLife AG ha establecido un RPO de 4 horas. ¿Que significa esto para la estrategia de respaldo? (2 Puntos)

---

## Tarea 2: Proteccion de Datos (16 Puntos)

### Tarea 2.1 (8 Puntos)

La compañia de seguros procesa datos particularmente sensibles como informacion de salud.

a) Nombre **cuatro** categorias de datos que se clasifican como **"categorias especiales de datos personales"** segun el Art. 9 del RGPD. (4 Puntos)

b) ¿Bajo que condiciones puede SecureLife AG procesar estos datos especiales? Nombre **dos** bases legales. (2 Puntos)

c) ¿Que **medidas tecnicas y organizativas (MTOs)** deberia implementar la compañia de seguros para proteger estos datos? Nombre **dos** ejemplos especificos. (2 Puntos)

### Tarea 2.2 (8 Puntos)

SecureLife AG quiere usar datos de clientes para analisis estadisticos sin poder identificar a clientes individuales.

a) Explique la diferencia entre **anonimizacion** y **seudonimizacion**. (4 Puntos)

b) ¿Que metodo elegiria si los datos necesitan asignarse a un cliente mas tarde? Justifique su decision. (2 Puntos)

c) ¿Que papel juega el **Delegado de Proteccion de Datos** en la empresa? Nombre **dos** de sus tareas. (2 Puntos)

---

## Tarea 3: Sistemas de TI (22 Puntos)

### Tarea 3.1 (6 Puntos)

El departamento de TI planea reemplazar los dos servidores fisicos con una solucion mas moderna. Las opciones son:
- Opcion A: Nuevos servidores fisicos con virtualizacion
- Opcion B: Migracion a la nube (IaaS)

a) Explique **tres** ventajas de la virtualizacion en comparacion con servidores puramente fisicos. (3 Puntos)

b) Nombre **tres** aspectos que deben considerarse respecto a la **proteccion de datos** al migrar a la nube. (3 Puntos)

### Tarea 3.2 (8 Puntos)

SecureLife AG utiliza sistemas NAS (Almacenamiento Conectado en Red) para el almacenamiento de datos.

a) Explique que es un **NAS** y como se diferencia de un servidor de archivos clasico. (3 Puntos)

b) El NAS debe garantizar alta disponibilidad. Explique **tres** medidas que pueden aumentar la disponibilidad de un NAS. (3 Puntos)

c) Explique la **regla de respaldo 3-2-1** y por que es importante para la copia de seguridad de datos. (2 Puntos)

### Tarea 3.3 (8 Puntos)

Una nueva PC de estacion de trabajo debe unirse al dominio de Windows de SecureLife AG.

a) Explique que es un **dominio de Windows** y que beneficios ofrece. Nombre **dos** beneficios. (3 Puntos)

b) Describa los pasos esenciales para unir una PC con Windows 11 a un dominio existente. Nombre **tres** pasos. (3 Puntos)

c) ¿Que es un **Objeto de Politica de Grupo (GPO)** y para que se usa? (2 Puntos)

---

## Tarea 4: Software y Bases de Datos (18 Puntos)

### Tarea 4.1 (6 Puntos)

El departamento de desarrollo trabaja con un modelo de proceso **Scrum** para el desarrollo continuo del software de seguros "SecureApp".

a) Nombre los **tres** roles principales en Scrum y describa brevemente sus tareas. (6 Puntos)

### Tarea 4.2 (6 Puntos)

Se va a revisar una funcion para calcular contribuciones en el software de seguros. Se da el siguiente pseudocodigo:

```
FUNCION calcularContribucion(edad, fumador, contribucionBase)
    contribucion = contribucionBase

    SI edad > 50 ENTONCES
        contribucion = contribucion * 1.3
    SINO SI edad > 30 ENTONCES
        contribucion = contribucion * 1.1
    FIN SI

    SI fumador = VERDADERO ENTONCES
        contribucion = contribucion + 50
    FIN SI

    RETORNAR contribucion
FIN FUNCION
```

a) Realice una **prueba de escritorio** para las siguientes llamadas: (4 Puntos)
   - `calcularContribucion(55, VERDADERO, 100)`
   - `calcularContribucion(25, FALSO, 100)`

b) Un colega ha encontrado un **error** en el codigo. A los 50 años exactamente, no se calcula ningun recargo. ¿Como deberia corregirse la primera condicion? (2 Puntos)

### Tarea 4.3 (6 Puntos)

El software de seguros utiliza una base de datos relacional. Existen las siguientes tablas:

```
Tabla CLIENTE:
NumCliente | Nombre    | FechaNacimiento | CodigoPostal
-----------|-----------|-----------------|-------------
1001       | Mueller   | 1985-03-15      | 60311
1002       | Schmidt   | 1972-08-22      | 60312
1003       | Weber     | 1990-01-10      | 60313

Tabla CONTRATO:
NumContrato | NumCliente | Tipo           | ContribucionAnual
------------|------------|----------------|------------------
V001        | 1001       | Vida           | 1200.00
V002        | 1001       | Salud          | 2400.00
V003        | 1002       | Propiedad      | 350.00
V004        | 1003       | Vida           | 800.00
```

a) ¿En que **forma normal** estan las tablas? Justifique su respuesta. (3 Puntos)

b) Explique que es una **clave foranea** e identifiquela en las tablas. (3 Puntos)

---

## Tarea 5: Configuracion de Estacion de Trabajo y Soporte (18 Puntos)

### Tarea 5.1 (10 Puntos)

Un nuevo empleado en el departamento de reclamaciones necesita una estacion de trabajo completamente configurada.

a) Cree una **lista de verificacion** con **al menos 8 puntos** para configurar una nueva estacion de trabajo (hardware, software, red, permisos). (8 Puntos)

b) Explique por que una configuracion estandarizada de estacion de trabajo es importante desde una perspectiva de **seguridad informatica**. (2 Puntos)

### Tarea 5.2 (8 Puntos)

Un empleado contacta al soporte de TI con el siguiente mensaje:

"¡He estado tratando de iniciar sesion durante 20 minutos, pero no funciona! Tengo una reunion importante en 10 minutos y necesito absolutamente acceso a mis documentos!"

a) Asigne una **prioridad** (P1-P4) al incidente y justifique su decision. Use los criterios **Impacto** y **Urgencia**. (3 Puntos)

b) Formule **tres** preguntas especificas que le haria al empleado para delimitar el problema. (3 Puntos)

c) Nombre **dos** posibles causas del problema de inicio de sesion y una solucion para cada una. (2 Puntos)

---

## Fin del Examen

**¡Revise sus respuestas!**

Nota: Las soluciones a esta simulacion se pueden encontrar en [10-03-02-solution-insurance.md](../10-03-solutions/10-03-02-solution-insurance.md)
