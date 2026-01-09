# Cortafuegos Personal

## Objetivos de Aprendizaje

Despues de este capitulo, deberas ser capaz de:
- Explicar la funcion de un cortafuegos personal
- Conocer la diferencia con cortafuegos de hardware
- Configurar ajustes tipicos
- Comprender las limitaciones de un cortafuegos personal

---

## Contenido Principal

### Que es un Cortafuegos Personal?

Un **Cortafuegos Personal** (tambien cortafuegos de host o cortafuegos de escritorio) es software en un dispositivo final que controla el trafico de red de ese unico dispositivo.

```
+------------------------------------------------------------------+
|              CORTAFUEGOS PERSONAL vs. CORTAFUEGOS DE RED          |
+------------------------------------------------------------------+
|                                                                   |
|  CORTAFUEGOS PERSONAL            CORTAFUEGOS DE RED               |
|  +----------------------+         +----------------------+        |
|  |    +------------+    |         |                      |        |
|  |    |  Ordenador |    |         |  [Router/Cortafuegos]|        |
|  |    |   con      |    |         |         |            |        |
|  |    | Software   |    |         |    +----+----+       |        |
|  |    | Cortafuegos|    |         |    |         |       |        |
|  |    +------------+    |         |   [PC]    [PC]       |        |
|  |                      |         |                      |        |
|  |  Protege un solo     |         |  Protege toda la     |        |
|  |  dispositivo         |         |  red                 |        |
|  +----------------------+         +----------------------+        |
|                                                                   |
+------------------------------------------------------------------+
```

---

### Comparacion: Cortafuegos Personal vs. Cortafuegos de Hardware

| Aspecto | Cortafuegos Personal | Cortafuegos de Hardware |
|---------|----------------------|------------------------|
| **Ubicacion** | Software en PC | Dispositivo separado |
| **Alcance de Proteccion** | Dispositivo unico | Red completa |
| **Control** | Por aplicacion posible | Basado en red |
| **Coste** | A menudo gratis (Windows) | Coste de compra |
| **Recursos** | Usa recursos del PC | Hardware propio |
| **Movilidad** | Protege tambien en movimiento | Solo en red local |

---

### Funciones de un Cortafuegos Personal

```
+------------------------------------------------------------------+
|              FUNCIONES DEL CORTAFUEGOS PERSONAL                   |
+------------------------------------------------------------------+
|                                                                   |
|  +--------------------------------------------------------------+ |
|  |                  FILTRADO DE PAQUETES                         | |
|  |  * Verifica paquetes entrantes/salientes                      | |
|  |  * Filtra por IP, puerto, protocolo                           | |
|  +--------------------------------------------------------------+ |
|                                                                   |
|  +--------------------------------------------------------------+ |
|  |                CONTROL DE APLICACIONES                        | |
|  |  * Controla que programas pueden acceder a internet           | |
|  |  * Pregunta para conexiones desconocidas                      | |
|  +--------------------------------------------------------------+ |
|                                                                   |
|  +--------------------------------------------------------------+ |
|  |                    REGISTRO                                   | |
|  |  * Registra intentos de conexion                              | |
|  |  * Permite analisis durante incidentes                        | |
|  +--------------------------------------------------------------+ |
|                                                                   |
+------------------------------------------------------------------+
```

#### Funciones Detalladas

| Funcion | Descripcion |
|---------|-------------|
| **Filtrado de Paquetes** | Permite/bloquea paquetes segun reglas |
| **Control de Aplicaciones** | Que programas pueden comunicarse? |
| **Bloqueo de Puertos** | Bloquear ciertos puertos |
| **Inspeccion con Estado** | Monitorizar estado de conexion |
| **Registro** | Registrar intentos de conexion |
| **Perfil de Red** | Diferentes reglas para diferentes redes |

---

### Cortafuegos de Windows

El **Firewall de Windows Defender** es un cortafuegos personal integrado en Windows.

#### Perfiles de Red

| Perfil | Descripcion | Nivel de Seguridad |
|--------|-------------|-------------------|
| **Dominio** | Ordenador en dominio corporativo | Medio |
| **Privado** | Red domestica de confianza | Bajo |
| **Publico** | WLAN publica (cafeteria, aeropuerto) | Alto |

#### Configuraciones Tipicas

```
+----------------------------------------------------------------+
|              CORTAFUEGOS WINDOWS - TIPOS DE REGLAS              |
+----------------------------------------------------------------+
|                                                                 |
|  REGLAS DE ENTRADA:                                             |
|  * Que trafico puede venir de fuera al PC?                      |
|  * Por defecto: Bloqueado (excepto excepciones permitidas)      |
|                                                                 |
|  REGLAS DE SALIDA:                                              |
|  * Que trafico puede ir del PC hacia fuera?                     |
|  * Por defecto: Permitido (puede restringirse)                  |
|                                                                 |
|  REGLAS DE SEGURIDAD DE CONEXION:                               |
|  * Configuracion IPsec                                          |
|  * Autenticacion entre ordenadores                              |
|                                                                 |
+----------------------------------------------------------------+
```

#### Acceder al Cortafuegos de Windows

| Metodo | Ubicacion |
|--------|-----------|
| **Simple** | Configuracion -> Actualizacion y Seguridad -> Seguridad de Windows |
| **Avanzado** | wf.msc (Firewall de Windows con Seguridad Avanzada) |
| **Panel de Control** | Panel de Control -> Firewall de Windows Defender |

---

### Creacion de Reglas de Cortafuegos

#### Componentes de Reglas

| Componente | Descripcion | Ejemplo |
|------------|-------------|---------|
| **Protocolo** | TCP, UDP, ICMP | TCP |
| **Puerto** | Puerto destino/origen | 80 (HTTP) |
| **Programa** | Ruta de aplicacion | C:\Programas\App.exe |
| **Direccion IP** | Origen/destino | 192.168.1.0/24 |
| **Accion** | Permitir/Bloquear | Bloquear |
| **Perfil** | Cuando aplica la regla | Publico |

#### Ejemplo: Creacion de una Regla

```
Regla: Navegador (Chrome) puede acceder a internet

Tipo:          Salida
Programa:      C:\Program Files\Google\Chrome\Application\chrome.exe
Protocolo:     TCP
Puerto:        80 (HTTP), 443 (HTTPS)
Accion:        Permitir
Perfiles:      Todos (Dominio, Privado, Publico)
```

---

### Ventajas y Desventajas

#### Ventajas

| Ventaja | Descripcion |
|---------|-------------|
| **Control de Aplicaciones** | Puede controlar programas individuales |
| **Movilidad** | Protege tambien fuera de la red domestica |
| **Gratis** | Integrado en Windows |
| **Control Granular** | Opciones de configuracion detalladas |

#### Desventajas

| Desventaja | Descripcion |
|------------|-------------|
| **Consumo de Recursos** | Usa CPU y RAM |
| **Complejidad** | La configuracion puede ser complicada |
| **Evitable** | Malware puede deshabilitar cortafuegos |
| **Solo Dispositivo Unico** | No protege la red |

---

### Mejores Practicas

| Recomendacion | Descripcion |
|---------------|-------------|
| **Siempre habilitado** | Nunca deshabilitar completamente el cortafuegos |
| **Usar perfiles** | Publico = maxima seguridad |
| **Solo excepciones necesarias** | No abrir puertos aleatoriamente |
| **Revisar regularmente** | Revisar reglas instaladas |
| **Habilitar registro** | Para solucion de problemas y analisis |
| **Combinar con cortafuegos hardware** | Defensa en Profundidad |

---

## Terminos Clave

| Termino | Explicacion |
|---------|-------------|
| **Cortafuegos Personal** | Cortafuegos software en PC unico |
| **Cortafuegos de Hardware** | Dispositivo dedicado de cortafuegos |
| **Filtro de Paquetes** | Filtrado por IP/puerto/protocolo |
| **Inspeccion con Estado** | Filtrado basado en estado de conexion |
| **Perfil de Red** | Conjunto de reglas para ciertos tipos de red |
| **Entrada/Salida** | Direccion del trafico de datos |

---

## Consejos para el Examen

### Preguntas Frecuentes del Examen

- Que es un cortafuegos personal?
- Diferencia entre cortafuegos personal y cortafuegos de hardware
- Que perfiles de red existen en Windows?
- Cuando debe usarse el perfil "Publico"?

### Importante Recordar

- **Cortafuegos Personal** = Software en el dispositivo
- **Cortafuegos de Hardware** = Dispositivo separado en la red
- **3 Perfiles de Windows:** Dominio, Privado, Publico
- **Publico** = Maxima seguridad (para redes desconocidas)

---

## Ejercicios Practicos

### Ejercicio 1
Cual es la diferencia entre un cortafuegos personal y un cortafuegos de hardware?

**Solucion:**
- **Cortafuegos Personal:** Software en un unico ordenador, protege solo ese dispositivo, puede filtrar por aplicacion
- **Cortafuegos de Hardware:** Dispositivo dedicado (ej. en router), protege toda la red, funciona basado en red

El cortafuegos personal tambien protege fuera de la red domestica, mientras que el cortafuegos de hardware solo protege en la red local.

### Ejercicio 2
Que perfil de red debe seleccionarse en una WLAN publica (ej. en una cafeteria)?

**Solucion:** El perfil **"Publico"** debe seleccionarse. Este perfil tiene la configuracion de seguridad mas alta y bloquea en gran medida las conexiones entrantes. Esto evita que otros usuarios en la misma WLAN accedan al ordenador.

### Ejercicio 3
Nombra dos ventajas y dos desventajas de un cortafuegos personal.

**Solucion:**
**Ventajas:**
1. Control de aplicaciones - puede controlar programas individuales
2. Movilidad - protege en movimiento en redes desconocidas

**Desventajas:**
1. Consumo de recursos - usa CPU y memoria
2. Puede ser evitado - malware puede deshabilitar el cortafuegos

### Ejercicio 4
Cual es la diferencia entre reglas de cortafuegos de entrada y salida?

**Solucion:**
- **Reglas de Entrada:** Controlan conexiones establecidas desde fuera hacia el ordenador (ej. cuando alguien accede a un servidor web)
- **Reglas de Salida:** Controlan conexiones establecidas desde el ordenador hacia fuera (ej. cuando el navegador llama a un sitio web)

Por defecto, Windows bloquea conexiones entrantes y permite las salientes.

---

## Referencias Cruzadas

- [04-03-01 Medidas Tecnicas](./04-03-01-technical-measures.md) - Vision general de cortafuegos
- [04-03-03 Fortalecimiento del SO](./04-03-03-os-hardening.md) - Cortafuegos como medida de fortalecimiento
- [07-01-03 Protocolos](../../07-networks/07-01-network-fundamentals/07-01-03-protocols.md) - Protocolos de red
- [07-02-01 IPv4](../../07-networks/07-02-ip-addressing/07-02-01-ipv4.md) - Direcciones IP
