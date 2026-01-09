# Solucion: Simulacion de Examen 1 - Agencia de Viajes "SunTravel GmbH"

---

## Tarea 1: Gestion de Proyectos (18 Puntos)

### Tarea 1.1 (4 Puntos)

**Cuatro caracteristicas tipicas del proyecto:**

1. **Unicidad** - La migracion a CloudTravel Pro es una empresa unica
2. **Limitacion temporal** - Fecha de inicio y fin definidas
3. **Objetivo definido** - Introduccion del nuevo software de reservas
4. **Recursos limitados** - Presupuesto, personal, tiempo son limitados

*Respuestas adicionales posibles: Complejidad, novedad, riesgo, colaboracion entre equipos*

### Tarea 1.2 (6 Puntos)

**Objetivo SMART:**

"El software CloudTravel Pro sera introducido en las 3 ubicaciones para el 30 de junio de 2025, con los 45 empleados capacitados y el procesamiento de reservas 100% a traves del nuevo sistema."

| Criterio | Explicacion |
|----------|-------------|
| **E**specifico | Introduccion de CloudTravel Pro en las 3 ubicaciones |
| **M**edible | 100% procesamiento de reservas a traves del nuevo sistema, 45 empleados capacitados |
| **A**lcanzable/Aceptado | Mejora de procesos de trabajo (software moderno en la nube) |
| **R**ealista | 6 meses de tiempo de proyecto, introduccion gradual posible |
| **T**emporal | Para el 30 de junio de 2025 |

### Tarea 1.3 (8 Puntos)

**a) Diagrama de Red:**

```
        +-----+      +-----+      +-----+
        |  A  |------|  B  |--+---|  C  |---+
        | 5D  |      | 3D  |  |   | 4D  |   |
        +-----+      +-----+  |   +-----+   |
        Dia 0-5     Dia 5-8   |  Dia 8-12   |
                              |             |
                              |   +-----+   |    +-----+     +-----+    +-----+
                              +---|  D  |---+----|  E  |-----|  F  |----|  G  |
                                  | 2D  |   |    | 6D  |     | 3D  |    | 2D  |
                                  +-----+   |    +-----+     +-----+    +-----+
                                 Dia 8-10   |   Dia 12-18   Dia 18-21  Dia 21-23
                                            |
                                            +------------------------------------
```

**b) Ruta Critica y Duracion Total:**

- **Ruta Critica:** A -> B -> C -> E -> F -> G
  - Alternativa: A -> B -> D -> E -> F -> G (D es mas corto que C, por lo tanto C es critico)
- **Duracion Total del Proyecto:** 5 + 3 + 4 + 6 + 3 + 2 = **23 dias**

---

## Tarea 2: Seguridad Informatica y Proteccion de Datos (22 Puntos)

### Tarea 2.1 (6 Puntos)

**Triada CIA con Ejemplos:**

| Objetivo de Proteccion | Explicacion | Ejemplo de Agencia de Viajes |
|------------------------|-------------|------------------------------|
| **Confidencialidad** | Solo personas autorizadas tienen acceso | Solo empleados autorizados pueden ver datos de tarjetas de credito de clientes |
| **Integridad** | Los datos estan completos y sin cambios | Los datos de reservas no pueden ser manipulados sin autorizacion |
| **Disponibilidad** | Los sistemas estan disponibles cuando se necesitan | El sistema de reservas esta accesible durante el horario comercial |

### Tarea 2.2 (4 Puntos)

**a) Principio de 2FA:**
La Autenticacion de Dos Factores combina dos factores diferentes para la verificacion de identidad. Solo quienes conocen/poseen ambos factores obtienen acceso. Esto aumenta la seguridad porque una contraseña robada sola no es suficiente.

**b) Dos factores diferentes:**
1. **Conocimiento** - Contraseña, PIN
2. **Posesion** - Smartphone (App de Autenticacion), token de hardware
3. *Alternativamente: Biometria* - Huella dactilar, reconocimiento facial

### Tarea 2.3 (6 Puntos)

**a) Derecho bajo el RGPD:** Derecho de Acceso (Art. 15 RGPD)

**b) Tres derechos adicionales del interesado:**
1. Derecho de Rectificacion (Art. 16)
2. Derecho de Supresion/"Derecho al Olvido" (Art. 17)
3. Derecho a la Portabilidad de Datos (Art. 20)
4. *Alternativamente:* Derecho de Oposicion, Derecho a la Limitacion del Tratamiento

**c) Diferencia Anonimizacion/Seudonimizacion:**

| Anonimizacion | Seudonimizacion |
|---------------|-----------------|
| La referencia personal se elimina permanentemente | La referencia personal se reemplaza por un seudonimo |
| La referencia a la persona ya no es posible | La asignacion es posible con informacion adicional |
| Los datos ya no estan sujetos al RGPD | Los datos siguen sujetos al RGPD |

### Tarea 2.4 (6 Puntos)

**Seis medidas para el endurecimiento del sistema operativo:**

1. **Deshabilitar servicios innecesarios** - Solo activar servicios requeridos
2. **Actualizaciones regulares** - Instalar actualizaciones de Windows automaticamente
3. **Politicas de contraseñas seguras** - Complejidad, longitud minima, caducidad
4. **Habilitar firewall personal** - Activar Windows Defender Firewall
5. **Instalar escaner antivirus** - Habilitar proteccion en tiempo real
6. **Restringir derechos de usuario** - Sin derechos de administrador para usuarios normales
7. *Alternativamente:* Deshabilitar puertos USB, encriptacion (BitLocker), deshabilitar autorun

---

## Tarea 3: Sistemas de TI y Red (24 Puntos)

### Tarea 3.1 (6 Puntos)

**a) Calculo del tiempo de transmision:**

```
Tamaño del archivo: 2 GB = 2 x 1024 MB = 2048 MB = 2048 x 8 Mbit = 16,384 Mbit

Tasa de transmision: 500 Mbit/s

Tiempo = Cantidad de datos / Velocidad
Tiempo = 16,384 Mbit / 500 Mbit/s
Tiempo = 32.77 segundos ~ 33 segundos
```

**b) Razones para mayor tiempo de transmision en la practica:**
1. **Sobrecarga del protocolo** - Cabeceras TCP/IP, paquetizacion
2. **Medio compartido** - Otros usuarios comparten la linea
3. *Alternativamente:* Latencia, perdida de paquetes, carga del servidor

### Tarea 3.2 (8 Puntos)

**a) Direcciones de host utilizables:**
```
/24 = 256 direcciones totales (2^8)
- 1 direccion de red (192.168.10.0)
- 1 direccion de broadcast (192.168.10.255)
= 254 direcciones de host utilizables
```

**b) Mascara de subred para 4 subredes:**
```
/24 dividir en 4 subredes -> 2 bits adicionales
Nueva mascara de subred: /26 (o 255.255.255.192)
```

**c) Primera subred:**
- Direccion de red: **192.168.10.0**
- Primera direccion de host utilizable: **192.168.10.1**
- Ultima direccion de host utilizable: **192.168.10.62**
- Direccion de broadcast: **192.168.10.63**

### Tarea 3.3 (6 Puntos)

**a) Explicacion de VPN:**
Una VPN (Red Privada Virtual) crea un tunel encriptado sobre una red publica (Internet). Permite el acceso seguro a la red de la empresa desde el exterior, como si estuviera directamente en el sitio.

**b) Cuatro pasos de solucion de problemas:**
1. **Verificar conexion a internet** - ¿El laptop esta en linea?
2. **Verificar configuracion del cliente VPN** - ¿Son correctos la direccion del servidor y las credenciales?
3. **¿Servidor VPN accesible?** - Ping/traceroute al gateway VPN
4. **Verificar configuracion del firewall** - ¿Un firewall local esta bloqueando el trafico VPN?

### Tarea 3.4 (4 Puntos)

| Modelo | Explicacion | Ventaja | Desventaja |
|--------|-------------|---------|------------|
| **SaaS** | El software se proporciona como servicio, se ejecuta en el proveedor | Sin operacion propia, listo para usar inmediatamente | Dependencia del proveedor, datos fuera de la empresa |
| **IaaS** | La infraestructura (servidores, almacenamiento) se alquila | Escalado flexible, sin compra de hardware | Se requiere mas administracion propia |

---

## Tarea 4: Software y Programacion (20 Puntos)

### Tarea 4.1 (6 Puntos)

**Diagrama de Actividad UML:**

```
          *  [Inicio]
          |
          v
    +-------------------+
    | Determinar        |
    | monto de reserva  |
    +---------+---------+
              |
              v
        <> ¿Monto > 5000 EUR?
       /   \
     Si    No
     |       |
     v       v
 +------+  <> ¿Monto > 2000 EUR?
 | 10%  | /   \
 |Desc. |Si   No
 +--+---+|      |
    |    v      |
    |+------+   |
    || 5%   |   |
    ||Desc. |   |
    |+--+---+   |
    |   |       |
    +---+-------+
          |
          v
     <> ¿Cliente habitual?
    /   \
  Si    No
   |       |
   v       |
+------+   |
| +3%  |   |
|Desc. |   |
+--+---+   |
   |       |
   +-------+
          |
          v
    +-------------------+
    | Calcular          |
    | precio final      |
    +---------+---------+
              |
              v
              *  [Fin]
```

### Tarea 4.2 (8 Puntos)

**a) Prueba de escritorio para `calcularPrecioFinal(500, 5, VERDADERO)`:**

| Paso | Variable | Valor | Explicacion |
|------|----------|-------|-------------|
| 1 | precioBase | 500 | Parametro de entrada |
| 2 | numeroPersonas | 5 | Parametro de entrada |
| 3 | reservaAnticipada | VERDADERO | Parametro de entrada |
| 4 | precio | 2500 | 500 x 5 |
| 5 | reservaAnticipada = VERDADERO | -> | Condicion cumplida |
| 6 | descuento | 375 | 2500 x 0.15 |
| 7 | precio | 2125 | 2500 - 375 |
| 8 | numeroPersonas > 4 | -> | Condicion cumplida (5 > 4) |
| 9 | descuentoGrupo | 212.5 | 2125 x 0.1 |
| 10 | precio | 1912.5 | 2125 - 212.5 |

**b) Resultado:** **1,912.50 EUR**

### Tarea 4.3 (6 Puntos)

**a) Cardinalidades:**
- **1:n (CLIENTE a RESERVA):** Un cliente puede tener multiples reservas, pero cada reserva pertenece a exactamente un cliente
- **n:m (RESERVA a VIAJE):** Una reserva puede contener multiples viajes (ej., vuelos de ida y vuelta), un viaje puede aparecer en multiples reservas

**b) Redundancia:**
La redundancia significa que los mismos datos se almacenan multiples veces. Esto debe evitarse porque:
- Pueden surgir inconsistencias (diferentes versiones)
- Se desperdicia espacio de almacenamiento
- Los cambios deben hacerse en multiples lugares

---

## Tarea 5: Economia y Servicio (16 Puntos)

### Tarea 5.1 (8 Puntos)

**a) Analisis de Utilidad:**

| Criterio | Peso | A: Puntos | A: Utilidad | B: Puntos | B: Utilidad |
|----------|------|-----------|-------------|-----------|-------------|
| Funcionalidad | 0.30 | 4 | 1.20 | 5 | 1.50 |
| Facilidad de Uso | 0.25 | 5 | 1.25 | 3 | 0.75 |
| Calidad del Soporte | 0.20 | 3 | 0.60 | 4 | 0.80 |
| Precio | 0.15 | 4 | 0.60 | 3 | 0.45 |
| Proteccion de Datos | 0.10 | 5 | 0.50 | 5 | 0.50 |
| **Total** | 1.00 | | **4.15** | | **4.00** |

**b) Recomendacion:**
**Proveedor A** con 4.15 puntos por poco delante del Proveedor B (4.00).

Aspecto adicional a considerar: **Referencias/Experiencia** del proveedor en la industria de viajes, o: Duracion del contrato, soporte de migracion, capacidades de integracion.

### Tarea 5.2 (8 Puntos)

**a) ¿Incidente o Solicitud de Servicio?:**
Esto es un **Incidente** (interrupcion), ya que una funcionalidad existente no esta funcionando como se espera. El empleado no puede trabajar normalmente.

**b) Modelo de los Cuatro Lados:**

| Nivel | Interpretacion |
|-------|----------------|
| **Informacion Factual** | El software esta funcionando lentamente |
| **Autorrevelacion** | Estoy frustrado, no puedo trabajar |
| **Relacion** | TI deberia resolver el problema, quizas "No lo configuraron correctamente" |
| **Apelacion** | ¡Haganlo mas rapido! ¡Ayudenme! |

**c) Respuesta Desescaladora:**
"Entiendo que la situacion es frustrante cuando no puede trabajar correctamente. Me ocupare de ello inmediatamente. ¿Puede mostrarme brevemente que funciones especificamente tienen retrasos? Entonces puedo identificar el problema y resolverlo lo mas rapido posible."

---

## Puntos Totales

| Tarea | Puntos |
|-------|--------|
| Tarea 1: Gestion de Proyectos | 18 |
| Tarea 2: Seguridad Informatica y Proteccion de Datos | 22 |
| Tarea 3: Sistemas de TI y Red | 24 |
| Tarea 4: Software y Programacion | 20 |
| Tarea 5: Economia y Servicio | 16 |
| **Total** | **100** |
