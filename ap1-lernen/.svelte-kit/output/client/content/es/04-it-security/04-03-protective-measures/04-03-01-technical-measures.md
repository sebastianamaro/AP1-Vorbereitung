# Medidas de Proteccion Tecnicas

## Objetivos de Aprendizaje

Despues de este capitulo, deberas ser capaz de:
- Conocer varias medidas de proteccion tecnicas
- Asignar medidas a objetivos de proteccion
- Comprender las areas de aplicacion de las medidas
- Sopesar ventajas y desventajas

---

## Contenido Principal

### Vision General: Medidas Tecnicas

```
+------------------------------------------------------------------+
|              MEDIDAS DE PROTECCION TECNICAS                       |
+------------------------------------------------------------------+
|                                                                   |
|  +------------------+  +------------------+  +------------------+ |
|  | CONTROL DE       |  | SEGURIDAD DE     |  | SEGURIDAD DE     | |
|  | ACCESO           |  | RED              |  | DATOS            | |
|  |                  |  |                  |  |                  | |
|  | * Autenti-       |  | * Cortafuegos    |  | * Cifrado        | |
|  |   cacion         |  | * VPN            |  | * Backup         | |
|  | * Autorizacion   |  | * IDS/IPS        |  | * DLP            | |
|  | * 2FA/MFA        |  | * Proxy          |  |                  | |
|  +------------------+  +------------------+  +------------------+ |
|                                                                   |
|  +------------------+  +------------------+  +------------------+ |
|  | SEGURIDAD DEL    |  | MONITORIZACION   |  | SEGURIDAD        | |
|  | SISTEMA          |  |                  |  | FISICA           | |
|  |                  |  |                  |  |                  | |
|  | * Actualizaciones|  | * Registro       |  | * Control de     | |
|  | * Fortalecimiento|  | * SIEM           |  |   acceso         | |
|  | * Antivirus      |  | * Monitorizacion |  | * SAI            | |
|  +------------------+  +------------------+  +------------------+ |
|                                                                   |
+------------------------------------------------------------------+
```

---

### Control de Acceso

#### Autenticacion

La **autenticacion** verifica la identidad de un usuario ("Quien eres?").

| Metodo | Descripcion | Seguridad |
|--------|-------------|-----------|
| **Contrasena** | Conocimiento secreto | Media |
| **Tarjeta inteligente** | Posesion fisica | Alta |
| **Biometria** | Huella dactilar, rostro | Alta |
| **2FA/MFA** | Multiples factores | Muy Alta |

#### Autorizacion

La **autorizacion** verifica permisos ("Que puedes hacer?").

| Concepto | Descripcion |
|----------|-------------|
| **RBAC** | Control de Acceso Basado en Roles |
| **DAC** | Control de Acceso Discrecional (el propietario decide) |
| **MAC** | Control de Acceso Obligatorio (el sistema decide) |
| **Necesidad de conocer** | Solo informacion necesaria |
| **Minimo Privilegio** | Permisos minimos |

---

### Seguridad de Red

#### Cortafuegos

Un **cortafuegos** controla el trafico de red segun reglas definidas.

| Tipo | Descripcion | Capa OSI |
|------|-------------|----------|
| **Filtro de Paquetes** | Verifica IP, puerto | 3-4 |
| **Inspeccion con Estado** | Verifica estado de conexion | 3-4 |
| **Cortafuegos de Aplicacion** | Verifica datos de aplicacion | 7 |
| **Cortafuegos de Nueva Generacion** | Inspeccion Profunda de Paquetes | 3-7 |

#### VPN (Red Privada Virtual)

```
+----------------------------------------------------------------+
|                        TUNEL VPN                                |
+----------------------------------------------------------------+
|                                                                 |
|   [Empleado]                              [Red de Empresa]      |
|        |                                          |             |
|        |    +------------------------------+      |             |
|        +--->|  Tunel Cifrado               |<-----+             |
|             |  a traves de internet publico|                    |
|             +------------------------------+                    |
|                                                                 |
|   Permite conexion segura sobre redes inseguras                 |
+----------------------------------------------------------------+
```

#### IDS/IPS

| Sistema | Descripcion | Funcion |
|---------|-------------|---------|
| **IDS** | Sistema de Deteccion de Intrusiones | Detecta ataques, alerta |
| **IPS** | Sistema de Prevencion de Intrusiones | Detecta y bloquea ataques |

---

### Seguridad de Datos

#### Cifrado

| Area de Aplicacion | Ejemplo | Metodo |
|--------------------|---------|--------|
| **Datos en Reposo** | Cifrado de disco | AES, BitLocker |
| **Datos en Transito** | Comunicacion de red | TLS/SSL, HTTPS |
| **Correo Electronico** | Cifrado de correo | S/MIME, PGP |

#### Copia de Seguridad

Ver tambien: [05-05 Copia de Seguridad de Datos](../../05-it-systems/05-05-data-backup/05-05-01-backup-types.md)

| Tipo de Backup | Descripcion |
|----------------|-------------|
| **Backup Completo** | Todos los datos |
| **Incremental** | Cambios desde el ultimo backup |
| **Diferencial** | Cambios desde el ultimo backup completo |

#### DLP (Prevencion de Perdida de Datos)

**DLP** previene fugas de datos no deseadas:
- Monitorizar adjuntos de correo electronico
- Bloquear almacenamiento USB
- Prevenir subidas de datos sensibles

---

### Seguridad del Sistema

#### Gestion de Parches

| Paso | Descripcion |
|------|-------------|
| **Identificar** | Verificar actualizaciones disponibles |
| **Evaluar** | Evaluar criticidad |
| **Probar** | Probar en entorno de prueba |
| **Desplegar** | Distribuir de manera controlada |
| **Verificar** | Verificar instalacion |

#### Antivirus / Proteccion de Endpoint

| Funcion | Descripcion |
|---------|-------------|
| **Basado en Firmas** | Comparacion con malware conocido |
| **Heuristica** | Analisis de comportamiento |
| **Sandboxing** | Ejecucion en entorno aislado |
| **Proteccion en Tiempo Real** | Proteccion en tiempo real |

---

### Monitorizacion y Registro

#### Registro

| Tipo de Log | Contenido |
|-------------|-----------|
| **Logs del Sistema** | Eventos del sistema operativo |
| **Logs de Aplicacion** | Eventos especificos de aplicacion |
| **Logs de Seguridad** | Intentos de inicio de sesion, accesos |
| **Logs de Auditoria** | Trazabilidad de cambios |

#### SIEM (Gestion de Informacion y Eventos de Seguridad)

```
+------------------------------------------------------------------+
|                         SISTEMA SIEM                              |
+------------------------------------------------------------------+
|                                                                   |
|  +-----------+ +-----------+ +-----------+ +-----------+         |
|  | Logs de   | | Logs de   | |  Logs de  | | Logs de   |         |
|  | Cortafuegos| | Servidor | |   IDS     | | Antivirus |         |
|  +-----+-----+ +-----+-----+ +-----+-----+ +-----+-----+         |
|        |            |            |            |                   |
|        v            v            v            v                   |
|  +---------------------------------------------------------------+|
|  |               SIEM - Analisis Central                          ||
|  |  * Recopilar todos los logs                                   ||
|  |  * Correlacionar eventos                                      ||
|  |  * Detectar anomalias                                         ||
|  |  * Alertar sobre incidentes                                   ||
|  +---------------------------------------------------------------+|
|                                                                   |
+------------------------------------------------------------------+
```

---

### Seguridad Fisica

| Medida | Objetivo de Proteccion |
|--------|------------------------|
| **Control de Acceso** | Prevenir entrada no autorizada |
| **Videovigilancia** | Disuasion, seguimiento |
| **SAI** | Puente ante cortes de energia |
| **Proteccion contra Incendios** | Detectar, extinguir fuego |
| **Control Climatico** | Prevenir sobrecalentamiento |

---

## Terminos Clave

| Termino | Explicacion |
|---------|-------------|
| **Cortafuegos** | Controla el trafico de red |
| **VPN** | Tunel cifrado a traves de internet |
| **IDS/IPS** | Deteccion/prevencion de ataques |
| **DLP** | Prevencion de Perdida de Datos |
| **SIEM** | Gestion de Informacion y Eventos de Seguridad |
| **Parche** | Actualizacion de software |
| **Proteccion de Endpoint** | Proteccion de dispositivos finales |

---

## Consejos para el Examen

### Preguntas Frecuentes del Examen

- Que es un cortafuegos y como funciona?
- Para que se usa una VPN?
- Cual es la diferencia entre IDS e IPS?
- Nombra medidas de proteccion tecnicas

### Importante Recordar

- **Cortafuegos** = Control de acceso a la red
- **VPN** = Tunel cifrado
- **IDS** detecta, **IPS** bloquea
- **2FA** = Autenticacion de Dos Factores

---

## Ejercicios Practicos

### Ejercicio 1
Que es un cortafuegos y que funcion realiza?

**Solucion:** Un **cortafuegos** es un sistema de seguridad que controla el trafico de red entre diferentes redes (ej. internet y red interna). Analiza el trafico de datos segun reglas definidas y decide si los paquetes de datos se permiten o bloquean.

### Ejercicio 2
Para que se usa una VPN?

**Solucion:** Una **VPN (Red Privada Virtual)** se usa para establecer una conexion cifrada sobre una red insegura (ej. internet). Casos de uso tipicos:
- Conexion segura a la red de la empresa (oficina en casa)
- Proteccion de privacidad en WLANs publicas
- Evitar restricciones geograficas

### Ejercicio 3
Cual es la diferencia entre IDS e IPS?

**Solucion:**
- **IDS (Sistema de Deteccion de Intrusiones):** Detecta ataques y genera alertas, pero no interviene activamente
- **IPS (Sistema de Prevencion de Intrusiones):** Detecta ataques Y los bloquea automaticamente

Un IPS es activo y puede detener ataques, un IDS es pasivo y solo informa.

### Ejercicio 4
Nombra tres medidas tecnicas para asegurar la confidencialidad.

**Solucion:**
1. **Cifrado** (los datos solo pueden leerse con la clave)
2. **Controles de acceso** (solo usuarios autorizados obtienen acceso)
3. **VPN** (comunicacion segura sobre redes inseguras)

---

## Referencias Cruzadas

- [04-01-01 Triada CIA](../04-01-protection-goals/04-01-01-cia-triad.md) - Objetivos de proteccion
- [04-03-02 Autenticacion-2FA](./04-03-02-authentication-2fa.md) - Autenticacion de Dos Factores
- [04-03-04 Cortafuegos Personal](./04-03-04-personal-firewall.md) - Cortafuegos en detalle
- [04-05-01 Metodos de Cifrado](../04-05-cryptography/04-05-01-encryption-methods.md) - Criptografia
- [03-02-01 TOM](../../03-data-protection/03-02-technical-measures/03-02-01-tom.md) - Medidas tecnico-organizativas
