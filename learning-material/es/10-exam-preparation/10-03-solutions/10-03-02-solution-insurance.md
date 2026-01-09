# Solucion: Simulacion de Examen 2 - Seguros "SecureLife AG"

---

## Tarea 1: Seguridad Informatica (26 Puntos)

### Tarea 1.1 (8 Puntos)

**a) Explicacion de Phishing (2 Puntos):**
El phishing es una estafa en la que los atacantes intentan obtener datos confidenciales (contraseñas, datos de cuentas) a traves de correos electronicos, sitios web o mensajes falsos. Se hacen pasar por remitentes confiables (banco, empresa).

**b) Cuatro medidas tecnicas (4 Puntos):**
1. **Filtro de correo/filtro de spam** - Filtrar automaticamente correos sospechosos
2. **Verificacion de enlaces** - Verificar URLs para autenticidad antes de abrir
3. **Autenticacion Multi-Factor** - Sin acceso incluso con credenciales robadas
4. **Autenticacion de correo (SPF, DKIM, DMARC)** - Verificacion de la legitimidad del remitente

**c) Dos medidas organizativas (2 Puntos):**
1. **Capacitacion en Conciencia de Seguridad** - Sensibilizar a los empleados sobre phishing
2. **Procesos claros de reporte** - Reportar correos sospechosos a seguridad de TI

### Tarea 1.2 (6 Puntos)

**a) Cuatro requisitos para una politica de contraseñas segura (4 Puntos):**
1. **Longitud minima** - Al menos 12 caracteres
2. **Complejidad** - Mayusculas/minusculas, numeros, caracteres especiales
3. **Sin reutilizacion** - Verificar historial de contraseñas
4. **Cambio regular** - ej., cada 90 dias (o en caso de compromiso)

**b) Importancia de los valores hash (2 Puntos):**
Los valores hash son funciones unidireccionales que convierten contraseñas en una cadena irreversible. En caso de una filtracion de datos, los atacantes no pueden leer directamente las contraseñas porque solo se almacenan los valores hash, no las contraseñas en texto plano.

### Tarea 1.3 (6 Puntos)

**a) Encriptacion simetrica vs. asimetrica (4 Puntos):**

| Simetrica | Asimetrica |
|-----------|------------|
| Una clave compartida | Par de claves (publica + privada) |
| Mas rapida | Mas lenta |
| Problema: Intercambio de claves | La clave publica puede compartirse |
| Ejemplo: AES | Ejemplo: RSA |

**b) Encriptacion hibrida (2 Puntos):**
La encriptacion hibrida combina ambos metodos: Los datos reales se encriptan con una clave simetrica aleatoria (rapido). Esta clave simetrica luego se encripta asimetricamente y se envia junto. Esto aprovecha la velocidad de la encriptacion simetrica y la distribucion segura de claves de la encriptacion asimetrica.

### Tarea 1.4 (6 Puntos)

**a) RTO y RPO (4 Puntos):**

| Termino | Explicacion |
|---------|-------------|
| **RTO (Objetivo de Tiempo de Recuperacion)** | Tiempo maximo que un sistema puede estar caido despues de una falla antes de que deba restaurarse. Ejemplo: El servidor debe estar funcionando de nuevo dentro de 4 horas. |
| **RPO (Objetivo de Punto de Recuperacion)** | Perdida maxima de datos aceptable. Punto en el tiempo al cual se pueden restaurar los datos. Ejemplo: Se pueden perder como maximo 4 horas de datos. |

**b) Significado para la estrategia de respaldo (2 Puntos):**
Con un RPO de 4 horas, los respaldos deben crearse al menos cada 4 horas. En caso de falla, se pueden perder como maximo las ultimas 4 horas de datos.

---

## Tarea 2: Proteccion de Datos (16 Puntos)

### Tarea 2.1 (8 Puntos)

**a) Cuatro categorias especiales de datos segun Art. 9 RGPD (4 Puntos):**
1. **Datos de salud** - Enfermedades, tratamientos
2. **Datos geneticos**
3. **Datos biometricos** - para identificacion
4. **Datos sobre opiniones politicas**

*Otros: Creencias religiosas, origen etnico, afiliacion sindical, vida sexual*

**b) Dos bases legales (2 Puntos):**
1. **Consentimiento explicito** del interesado
2. **Necesario para el cumplimiento del contrato** (ej., contrato de seguro de salud)

**c) Dos ejemplos de MTOs (2 Puntos):**
1. **Encriptacion** de datos de salud almacenados
2. **Control de acceso** - Solo los gestores de reclamaciones autorizados tienen acceso

### Tarea 2.2 (8 Puntos)

**a) Diferencia Anonimizacion/Seudonimizacion (4 Puntos):**

| Anonimizacion | Seudonimizacion |
|---------------|-----------------|
| La referencia personal se elimina permanente e irreversiblemente | La referencia personal se reemplaza por seudonimo (ej., numero de ID) |
| Los datos ya no pueden asignarse a una persona | La referencia personal puede restaurarse con tabla de mapeo |
| El RGPD ya no aplica | El RGPD sigue aplicando |

**b) Recomendacion para asignacion posterior (2 Puntos):**
**Seudonimizacion**, ya que los datos pueden reasignarse a un cliente si es necesario. La tabla de mapeo debe mantenerse segura y separada.

**c) Dos tareas del Delegado de Proteccion de Datos (2 Puntos):**
1. **Asesorar** a la empresa y empleados en asuntos de proteccion de datos
2. **Supervisar** el cumplimiento del RGPD en la empresa

*Otros: Persona de contacto para la autoridad supervisora, realizar capacitaciones, documentacion*

---

## Tarea 3: Sistemas de TI (22 Puntos)

### Tarea 3.1 (6 Puntos)

**a) Tres ventajas de la virtualizacion (3 Puntos):**
1. **Mejor utilizacion de recursos** - Multiples VMs en un servidor fisico
2. **Flexibilidad/Escalabilidad** - Las VMs pueden crearse/ajustarse rapidamente
3. **Aislamiento** - Los problemas en una VM no afectan a otras

**b) Tres aspectos de proteccion de datos para migracion a la nube (3 Puntos):**
1. **Ubicacion del servidor** - Los datos deben permanecer en la UE (cumplimiento del RGPD)
2. **Acuerdo de Procesamiento de Datos (APD)** - Contrato con el proveedor de nube requerido
3. **Encriptacion** - Encriptar datos durante la transmision y el almacenamiento

### Tarea 3.2 (8 Puntos)

**a) Explicacion de NAS (3 Puntos):**
Un NAS (Almacenamiento Conectado en Red) es un dispositivo de almacenamiento dedicado con su propio sistema operativo que proporciona almacenamiento a traves de la red. A diferencia de un servidor de archivos, esta especificamente optimizado para el almacenamiento de archivos, es mas facil de administrar y mas eficiente en energia.

**b) Tres medidas para la disponibilidad del NAS (3 Puntos):**
1. **Discos duros redundantes** - Duplicacion de datos en multiples unidades
2. **Fuentes de alimentacion redundantes** - Dos fuentes de alimentacion para proteccion contra fallas
3. **Redundancia de ubicacion** - Replicacion a un segundo NAS en otra ubicacion

**c) Regla de Respaldo 3-2-1 (2 Puntos):**
- **3** copias de los datos
- **2** medios de almacenamiento diferentes
- **1** copia fuera del sitio

Esto protege contra varios escenarios de falla (defecto de hardware, incendio, ransomware).

### Tarea 3.3 (8 Puntos)

**a) Dominio de Windows y Beneficios (3 Puntos):**
Un dominio de Windows es una estructura de gestion centralizada en la que usuarios, computadoras y recursos se gestionan a traves de un Controlador de Dominio (Active Directory).

Beneficios:
1. **Gestion centralizada de usuarios** - Una cuenta para todos los sistemas
2. **Gestion centralizada de politicas** - Las GPOs aplican a todas las PCs

**b) Tres pasos para unir al dominio (3 Puntos):**
1. Abrir Propiedades del Sistema -> Cambiar nombre del equipo -> Seleccionar Dominio
2. Ingresar nombre del dominio (ej., "securelife.local")
3. Autenticarse con credenciales de administrador de dominio y reiniciar PC

**c) Explicacion de GPO (2 Puntos):**
Un Objeto de Politica de Grupo (GPO) es una coleccion de configuraciones que se aplican centralmente a todas las computadoras y/o usuarios en el dominio. Ejemplos: Politicas de contraseñas, instalacion de software, configuraciones de escritorio.

---

## Tarea 4: Software y Bases de Datos (18 Puntos)

### Tarea 4.1 (6 Puntos)

**Tres Roles de Scrum (6 Puntos):**

| Rol | Tareas |
|-----|--------|
| **Product Owner** | Define requisitos, prioriza el Product Backlog, representa la perspectiva del cliente |
| **Scrum Master** | Asegura el cumplimiento del proceso, elimina obstaculos, modera reuniones |
| **Equipo de Desarrollo** | Implementa tecnicamente los requisitos, autoorganizado, multifuncional |

### Tarea 4.2 (6 Puntos)

**a) Pruebas de Escritorio (4 Puntos):**

**Llamada 1: `calcularContribucion(55, VERDADERO, 100)`**

| Paso | Variable | Valor |
|------|----------|-------|
| 1 | edad | 55 |
| 2 | fumador | VERDADERO |
| 3 | contribucionBase | 100 |
| 4 | contribucion | 100 |
| 5 | edad > 50 -> VERDADERO | -> |
| 6 | contribucion | 130 (100 x 1.3) |
| 7 | fumador = VERDADERO -> | -> |
| 8 | contribucion | 180 (130 + 50) |

**Resultado: 180**

**Llamada 2: `calcularContribucion(25, FALSO, 100)`**

| Paso | Variable | Valor |
|------|----------|-------|
| 1-3 | edad=25, fumador=FALSO, contribucionBase=100 | |
| 4 | contribucion | 100 |
| 5 | edad > 50 -> FALSO | -> |
| 6 | edad > 30 -> FALSO | -> |
| 7 | fumador = FALSO -> | sin cambio |

**Resultado: 100**

**b) Correccion del Error (2 Puntos):**

La primera condicion deberia decir `edad >= 50` en lugar de `edad > 50`:
```
SI edad >= 50 ENTONCES
```

### Tarea 4.3 (6 Puntos)

**a) Forma Normal (3 Puntos):**
Las tablas estan en **Tercera Forma Normal (3FN)**:
- 1FN: Valores atomicos, sin grupos repetitivos ✓
- 2FN: Todos los atributos no clave completamente dependientes funcionalmente de la clave primaria ✓
- 3FN: Sin dependencias transitivas ✓

**b) Clave Foranea (3 Puntos):**
Una clave foranea es un atributo en una tabla que hace referencia a la clave primaria de otra tabla. Asegura la integridad referencial.

En las tablas: **NumCliente** en la tabla CONTRATO es una clave foranea que hace referencia a NumCliente (clave primaria) en la tabla CLIENTE.

---

## Tarea 5: Configuracion de Estacion de Trabajo y Soporte (18 Puntos)

### Tarea 5.1 (10 Puntos)

**a) Lista de Verificacion para Configuracion de Estacion de Trabajo (8 Puntos):**

| No. | Tarea | Completado |
|-----|-------|------------|
| 1 | Configurar y cablear PC/Laptop | ☐ |
| 2 | Conectar monitor, teclado, raton | ☐ |
| 3 | Verificar conexion de red (LAN/WLAN) | ☐ |
| 4 | Unir PC al dominio | ☐ |
| 5 | Crear cuenta de usuario en AD | ☐ |
| 6 | Aplicar Politicas de Grupo | ☐ |
| 7 | Instalar software estandar (Office, software de seguros) | ☐ |
| 8 | Configurar cuenta de correo electronico | ☐ |
| 9 | Configurar impresora | ☐ |
| 10 | Establecer permisos para unidades de red | ☐ |

**b) Importancia para la Seguridad Informatica (2 Puntos):**
Una configuracion estandarizada asegura que:
- Todas las politicas de seguridad se aplican uniformemente
- No surgen brechas de seguridad por configuraciones individuales
- Todos los sistemas tienen el mismo nivel de parches

### Tarea 5.2 (8 Puntos)

**a) Prioridad (3 Puntos):**
**P2 (Alta)**

- **Impacto:** Medio (un empleado afectado)
- **Urgencia:** Alta (reunion importante en 10 minutos, el empleado no puede trabajar)

La alta urgencia eleva la prioridad de P3 a P2.

**b) Tres preguntas especificas (3 Puntos):**
1. "¿Que mensaje de error aparece cuando intenta iniciar sesion?"
2. "¿Ha cambiado recientemente su contraseña o posiblemente ha caducado?"
3. "¿Funciona el inicio de sesion en una PC diferente?"

**c) Dos causas con soluciones (2 Puntos):**

| Causa | Solucion |
|-------|----------|
| **Contraseña caducada** | Restablecer contraseña en AD |
| **Cuenta bloqueada** | Desbloquear cuenta en AD |

*Otros: Bloq Mayus activado, nombre de usuario incorrecto, controlador de dominio no accesible*

---

## Puntos Totales

| Tarea | Puntos |
|-------|--------|
| Tarea 1: Seguridad Informatica | 26 |
| Tarea 2: Proteccion de Datos | 16 |
| Tarea 3: Sistemas de TI | 22 |
| Tarea 4: Software y Bases de Datos | 18 |
| Tarea 5: Configuracion de Estacion de Trabajo y Soporte | 18 |
| **Total** | **100** |
