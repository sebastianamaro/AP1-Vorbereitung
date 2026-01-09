# Integración de Dominio [NUEVO 2025]

## Objetivos de Aprendizaje

Después de este capítulo, deberías ser capaz de:
- Comprender el concepto de un dominio Windows
- Conocer el proceso de integración de dominio
- Nombrar los prerrequisitos y ventajas
- Realizar los pasos más importantes

---

## Contenido Principal

### ¿Qué es un Dominio?

```
+--------------------------------------------------------------------+
|                       DOMINIO WINDOWS                               |
+--------------------------------------------------------------------+
|                                                                     |
|   Definición:                                                      |
|   +-------------------------------------------------------------+ |
|   | Un dominio Windows es un modelo de gestión centralizada donde | |
|   | los usuarios y ordenadores son gestionados por un Controlador | |
|   | de Dominio.                                                    | |
|   +-------------------------------------------------------------+ |
|                                                                     |
|   Comparación: Grupo de trabajo vs. Dominio                        |
|                                                                     |
|   GRUPO DE TRABAJO                   DOMINIO                       |
|   +----------------------+         +----------------------+        |
|   | - Descentralizado    |         | - Centralizado       |        |
|   | - Cada PC gestiona   |         | - Controlador de     |        |
|   |   sus propios usuarios|        |   Dominio gestiona   |        |
|   | - Máx. 10-20 PCs     |         |   todo               |        |
|   | - Redes domésticas   |         | - Miles de PCs       |        |
|   | - Sin control        |         | - Empresas           |        |
|   |   central            |         | - Políticas centrales|        |
|   +----------------------+         | - Inicio sesión único|        |
|                                    +----------------------+        |
|                                                                     |
|   Estructura de dominio:                                            |
|   +-------------------------------------------------------------+ |
|   |                                                              | |
|   |           +--------------------+                            | |
|   |           | Controlador Dominio|                            | |
|   |           | (Active Directory) |                            | |
|   |           +---------+----------+                            | |
|   |                     |                                        | |
|   |        +------------+------------+                          | |
|   |        |            |            |                          | |
|   |   +----+----+  +----+----+  +----+----+                    | |
|   |   |  PC 1   |  |  PC 2   |  |  PC 3   |                    | |
|   |   |(Dominio)|  |(Dominio)|  |(Dominio)|                    | |
|   |   +---------+  +---------+  +---------+                    | |
|   |                                                              | |
|   |   Todos los PCs son miembros del dominio "empresa.local"    | |
|   |                                                              | |
|   +-------------------------------------------------------------+ |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Ventajas de un Dominio

```
+--------------------------------------------------------------------+
|                   VENTAJAS DE UN DOMINIO                            |
+--------------------------------------------------------------------+
|                                                                     |
|   1. GESTIÓN CENTRALIZADA DE USUARIOS                              |
|   +------------------------------------------------------------+  |
|   | - Una cuenta para todos los recursos (Inicio Sesión Único) |  |
|   | - Los usuarios pueden iniciar sesión en cualquier PC       |  |
|   | - Los cambios de contraseña surten efecto en todas partes  |  |
|   | - Desactivación central cuando el empleado se va           |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   2. POLÍTICAS DE GRUPO (Group Policy)                              |
|   +------------------------------------------------------------+  |
|   | - Configuración central de todos los PCs                   |  |
|   | - Especificar configuraciones de seguridad                 |  |
|   | - Distribuir software automáticamente                      |  |
|   | - Bloquear puertos USB, forzar protector de pantalla       |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   3. SEGURIDAD                                                      |
|   +------------------------------------------------------------+  |
|   | - Políticas de contraseña centralizadas                    |  |
|   | - Registro de auditoría                                    |  |
|   | - Gestión centralizada de permisos                         |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   4. ACCESO A RECURSOS                                              |
|   +------------------------------------------------------------+  |
|   | - Compartir carpetas e impresoras de forma centralizada    |  |
|   | - Controlar permisos vía grupos                            |  |
|   | - Conectar unidades de red automáticamente                 |  |
|   +------------------------------------------------------------+  |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Prerrequisitos para Unirse al Dominio

```
+--------------------------------------------------------------------+
|               PRERREQUISITOS PARA UNIRSE AL DOMINIO                 |
+--------------------------------------------------------------------+
|                                                                     |
|   EN EL PC CLIENTE:                                                 |
|   +------------------------------------------------------------+  |
|   | - Windows Professional, Enterprise o Education             |  |
|   |   (¡Windows Home NO PUEDE unirse a un dominio!)            |  |
|   | - Conexión de red al Controlador de Dominio                |  |
|   | - El servidor DNS debe apuntar al Controlador de Dominio   |  |
|   | - Nombre de ordenador correcto (se registrará en dominio)  |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   EN LA RED:                                                        |
|   +------------------------------------------------------------+  |
|   | - Controlador de Dominio debe ser alcanzable               |  |
|   | - DNS debe funcionar (dominio resoluble)                   |  |
|   | - Puertos para Active Directory abiertos (TCP 389, 636,...)|  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   PERMISOS:                                                         |
|   +------------------------------------------------------------+  |
|   | - Derechos de administrador local en el PC                 |  |
|   | - Cuenta de dominio con permiso para agregar PCs           |  |
|   |   (normalmente Admin de Dominio o usuario delegado)        |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   ! IMPORTANTE: ¡DNS debe apuntar al Controlador de Dominio!       |
|   +------------------------------------------------------------+  |
|   | Incorrecto: DNS = 8.8.8.8 (Google no puede resolver dominio)|  |
|   | Correcto: DNS = IP del Controlador de Dominio              |  |
|   +------------------------------------------------------------+  |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Proceso de Integración de Dominio

```
+--------------------------------------------------------------------+
|              PASOS PARA LA INTEGRACIÓN DE DOMINIO                   |
+--------------------------------------------------------------------+
|                                                                     |
|   PASO 1: COMPROBAR RED                                             |
|   +------------------------------------------------------------+  |
|   | - Comprobar dirección IP (ipconfig)                        |  |
|   | - Servidor DNS debe ser Controlador de Dominio             |  |
|   | - Probar ping al Controlador de Dominio                    |  |
|   | - Comprobar nslookup dominio.local                         |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   PASO 2: ABRIR PROPIEDADES DEL SISTEMA                             |
|   +------------------------------------------------------------+  |
|   | Windows + Pausa -> Configuración avanzada del sistema      |  |
|   | O: sysdm.cpl en Ejecutar                                   |  |
|   | -> Pestaña "Nombre de equipo" -> "Cambiar"                 |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   PASO 3: UNIRSE AL DOMINIO                                         |
|   +------------------------------------------------------------+  |
|   | +----------------------------------------------------+    |  |
|   | | Nombre de equipo: PC-CONTABILIDAD-01               |    |  |
|   | |                                                     |    |  |
|   | | Miembro de:                                         |    |  |
|   | | O Grupo de trabajo: WORKGROUP                       |    |  |
|   | | O Dominio:    empresa.local    <- Introducir aquí  |    |  |
|   | |                                                     |    |  |
|   | |                              [Aceptar] [Cancelar]  |    |  |
|   | +----------------------------------------------------+    |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   PASO 4: INTRODUCIR CREDENCIALES                                   |
|   +------------------------------------------------------------+  |
|   | Usuario: administrador@empresa.local                       |  |
|   | O: EMPRESA\administrador                                   |  |
|   | Contraseña: ********                                       |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   PASO 5: REINICIAR                                                 |
|   +------------------------------------------------------------+  |
|   | Después de unirse exitosamente:                            |  |
|   | "Bienvenido al dominio empresa.local"                      |  |
|   | -> El PC debe reiniciarse                                  |  |
|   | -> Después de reiniciar: Login con cuenta dominio posible  |  |
|   +------------------------------------------------------------+  |
|                                                                     |
+--------------------------------------------------------------------+
```

---

### Problemas Comunes

```
+--------------------------------------------------------------------+
|                    PROBLEMAS COMUNES                                |
+--------------------------------------------------------------------+
|                                                                     |
|   "No se pudo encontrar el dominio"                                |
|   +------------------------------------------------------------+  |
|   | Causa: Problema de DNS                                     |  |
|   | Solución:                                                  |  |
|   | - Configurar servidor DNS como Controlador de Dominio      |  |
|   | - Probar nslookup dominio.local                            |  |
|   | - Comprobar conexión de red                                |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   "Acceso denegado"                                                |
|   +------------------------------------------------------------+  |
|   | Causa: Permisos faltantes                                  |  |
|   | Solución:                                                  |  |
|   | - Usar cuenta de administrador de dominio                  |  |
|   | - O: Permiso "Agregar equipo al dominio"                   |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   "La cuenta de equipo ya existe"                                  |
|   +------------------------------------------------------------+  |
|   | Causa: PC ya estuvo en el dominio antes                    |  |
|   | Solución:                                                  |  |
|   | - Eliminar o resetear cuenta de equipo antigua en AD       |  |
|   | - Cambiar nombre de equipo                                 |  |
|   +------------------------------------------------------------+  |
|                                                                     |
|   Edición Windows Home                                              |
|   +------------------------------------------------------------+  |
|   | Problema: Unión no posible                                 |  |
|   | Solución: Se requiere actualización a Windows Professional |  |
|   +------------------------------------------------------------+  |
|                                                                     |
+--------------------------------------------------------------------+
```

---

## Términos Clave

| Término | Explicación |
|---------|-------------|
| **Dominio** | Entorno de red gestionado centralmente |
| **Controlador de Dominio** | Servidor con Active Directory |
| **Active Directory** | Servicio de directorio Microsoft |
| **Política de Grupo** | Reglas de configuración centralizadas |
| **Inicio Sesión Único** | Un login para todos los recursos |
| **Grupo de Trabajo** | Redes peer-to-peer descentralizadas |

---

## Consejos para el Examen

### Preguntas Comunes del Examen

- ¿Cuáles son los prerrequisitos para unirse al dominio?
- Nombra ventajas de un dominio
- ¿Qué edición de Windows puede unirse a un dominio?

### Importante Recordar

- **Windows Home** NO PUEDE unirse
- **DNS** debe apuntar al Controlador de Dominio
- Ventajas: Gestión centralizada, Inicio Sesión Único, Políticas de Grupo
- **Reinicio** necesario después de unirse
- Login: usuario@dominio.local O DOMINIO\usuario

---

## Ejercicios Prácticos

### Ejercicio 1
Un nuevo PC debe agregarse al dominio "empresa.local". ¿Qué debe comprobarse antes de unirse?

**Solución:**
1. **Edición Windows:** Professional, Enterprise o Education (¡no Home!)
2. **Red:** Dirección IP y gateway correctos
3. **Servidor DNS:** Debe apuntar al Controlador de Dominio
4. **Alcanzabilidad:** Ping al Controlador de Dominio exitoso
5. **Resolución DNS:** nslookup empresa.local funciona
6. **Permisos:** Derechos admin localmente + cuenta dominio para unirse

### Ejercicio 2
Después de unirse al dominio, aparece "No se pudo encontrar el dominio". ¿Cuál es la causa probable?

**Solución:**
**Problema de DNS:** El servidor DNS está mal configurado.

Comprobar:
- ipconfig /all -> ¿Qué servidor DNS está configurado?
- DNS debe apuntar al Controlador de Dominio
- No a DNS externo como 8.8.8.8

Solución: Configurar servidor DNS como IP del Controlador de Dominio.

### Ejercicio 3
Nombra tres ventajas de un dominio comparado con un grupo de trabajo.

**Solución:**
1. **Gestión centralizada de usuarios:** Una cuenta para todos los PCs, gestión fácil cuando empleados se van
2. **Políticas de grupo:** Configuración central de todos los PCs, forzar configuraciones de seguridad
3. **Inicio de sesión único:** Un login para todos los recursos (servidores de archivos, impresoras, aplicaciones)

---

## Referencias Cruzadas

- [07-02-04 DHCP](./07-02-ip-addressing/07-02-04-dhcp.md) - Asignación IP
- [07-01-03 Protocolos](./07-01-network-fundamentals/07-01-03-protocols.md) - DNS
- [04-03-02 Autenticación](../04-it-security/04-03-protective-measures/04-03-02-authentication-2fa.md) - Login de dominio
