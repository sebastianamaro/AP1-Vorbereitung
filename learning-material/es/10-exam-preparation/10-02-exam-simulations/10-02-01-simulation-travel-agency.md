# Simulacion de Examen 1: Agencia de Viajes "SunTravel GmbH"

## Instrucciones del Examen

- **Tiempo de Procesamiento:** 90 minutos
- **Recursos Permitidos:** Calculadora (no programable)
- **Puntos:** 100 puntos en total
- **Umbral de Aprobacion:** 50 puntos

---

## Situacion Inicial

**SunTravel GmbH** es una agencia de viajes mediana con 45 empleados en 3 ubicaciones (sede central en Munich, sucursales en Stuttgart y Nuremberg). La empresa ofrece paquetes turisticos, viajes individuales y servicios de viajes de negocios.

Usted trabaja como aprendiz en el equipo de TI de SunTravel GmbH en la sede central de Munich. El equipo de TI consta de 4 personas y es responsable de toda la infraestructura de TI en todas las ubicaciones.

Sistemas actuales:
- Software de reservas "TravelStar" (basado en web)
- Microsoft 365 para correo electronico y aplicaciones de oficina
- Conexiones VPN entre ubicaciones
- 50 PCs de escritorio y 15 laptops
- Windows 11 como sistema operativo

---

## Tarea 1: Gestion de Proyectos (18 Puntos)

La direccion ha decidido migrar todas las estaciones de trabajo a un nuevo software de reservas basado en la nube "CloudTravel Pro". Se le asigna asistir con la planificacion del proyecto.

### Tarea 1.1 (4 Puntos)

Nombre **cuatro** caracteristicas tipicas que definen este proyecto de TI.

### Tarea 1.2 (6 Puntos)

Formule un objetivo de proyecto para la migracion del software utilizando el **metodo SMART**. Identifique los cinco criterios y explique como su objetivo cumple cada uno de ellos.

### Tarea 1.3 (8 Puntos)

Se han identificado los siguientes paquetes de trabajo para el proyecto:

| No. | Paquete de Trabajo | Duracion (Dias) | Predecesor |
|-----|-------------------|-----------------|------------|
| A | Analisis de Requisitos | 5 | - |
| B | Confirmar Seleccion del Sistema | 3 | A |
| C | Configurar Entorno de Prueba | 4 | B |
| D | Planificar Capacitacion de Empleados | 2 | B |
| E | Realizar Fase de Prueba | 6 | C, D |
| F | Preparar Migracion | 3 | E |
| G | Puesta en Marcha | 2 | F |

a) Cree un **diagrama de red** utilizando la tecnica de Actividad en Nodo (3 puntos cada uno).
b) Determine la **ruta critica** y la **duracion total del proyecto** (2 puntos).

---

## Tarea 2: Seguridad Informatica y Proteccion de Datos (22 Puntos)

### Tarea 2.1 (6 Puntos)

El nuevo software en la nube "CloudTravel Pro" almacenara datos de clientes como nombres, direcciones, fechas de viaje e informacion de pago.

a) Explique los tres **objetivos de proteccion de seguridad informatica** (triada CIA) y proporcione un ejemplo concreto para cada objetivo de proteccion en el contexto de la agencia de viajes. (6 Puntos)

### Tarea 2.2 (4 Puntos)

Un empleado de la agencia de viajes le pregunta por que ahora debe usar **Autenticacion de Dos Factores (2FA)** para el software en la nube.

a) Explique el principio de 2FA. (2 Puntos)
b) Nombre **dos** factores diferentes que se pueden combinar en 2FA. (2 Puntos)

### Tarea 2.3 (6 Puntos)

Un cliente llama y quiere saber que datos tiene almacenados la agencia de viajes sobre el.

a) ¿Que derecho bajo el **RGPD** esta invocando el cliente? (1 Punto)
b) Nombre **tres derechos adicionales** que tienen los interesados bajo el RGPD. (3 Puntos)
c) Explique la diferencia entre **anonimizacion** y **seudonimizacion** de datos. (2 Puntos)

### Tarea 2.4 (6 Puntos)

La direccion de TI quiere mejorar la seguridad de las estaciones de trabajo con Windows 11.

Nombre **seis** medidas especificas para el **endurecimiento del sistema operativo** que usted recomendaria.

---

## Tarea 3: Sistemas de TI y Red (24 Puntos)

### Tarea 3.1 (6 Puntos)

Para el nuevo software en la nube, se requiere una conexion a internet confiable. El proveedor ofrece una linea de 500 Mbit/s.

a) Un empleado quiere subir un archivo de 2 GB. Calcule el **tiempo de transmision** teorico en segundos. Muestre su trabajo. (3 Puntos)

b) Explique por que el tiempo de transmision real en la practica sera mas largo. De **dos** razones. (3 Puntos)

### Tarea 3.2 (8 Puntos)

Se va a configurar una nueva red en la ubicacion de Munich. El rango de red 192.168.10.0/24 esta disponible.

a) ¿Cuantas **direcciones de host utilizables** estan disponibles en esta red? Muestre su trabajo. (2 Puntos)

b) La direccion de TI quiere dividir la red en **4 subredes**. ¿Que mascara de subred debe usar? Proporcionela en notacion CIDR. (2 Puntos)

c) Complete los siguientes valores para la **primera subred**: (4 Puntos)
   - Direccion de red: _______
   - Primera direccion de host utilizable: _______
   - Ultima direccion de host utilizable: _______
   - Direccion de broadcast: _______

### Tarea 3.3 (6 Puntos)

Un empleado de servicio externo no puede conectarse a la red de la empresa via VPN.

a) Explique que es una **VPN** y que proposito cumple. (2 Puntos)

b) Describa **cuatro** pasos sistematicos de solucion de problemas que realizaria. (4 Puntos)

### Tarea 3.4 (4 Puntos)

SunTravel GmbH esta considerando si operar el nuevo software como **SaaS** (Software como Servicio) o **IaaS** (Infraestructura como Servicio).

Explique ambos terminos y nombre **una** ventaja y **una** desventaja de cada uno para la agencia de viajes.

---

## Tarea 4: Software y Programacion (20 Puntos)

### Tarea 4.1 (6 Puntos)

La agencia de viajes quiere implementar una funcion simple para calcular descuentos de viaje. La logica debe ser:
- Reservas de mas de 2,000 EUR reciben 5% de descuento
- Reservas de mas de 5,000 EUR reciben 10% de descuento
- Clientes habituales (mas de 3 reservas) reciben un 3% de descuento adicional

Cree un **Diagrama de Actividad UML** que represente este calculo de descuento.

### Tarea 4.2 (8 Puntos)

Se da el siguiente pseudocodigo para calcular un precio de viaje:

```
FUNCION calcularPrecioFinal(precioBase, numeroPersonas, reservaAnticipada)
    precio = precioBase * numeroPersonas

    SI reservaAnticipada = VERDADERO ENTONCES
        descuento = precio * 0.15
        precio = precio - descuento
    FIN SI

    SI numeroPersonas > 4 ENTONCES
        descuentoGrupo = precio * 0.1
        precio = precio - descuentoGrupo
    FIN SI

    RETORNAR precio
FIN FUNCION
```

a) Realice una **prueba de escritorio** para la siguiente llamada: (6 Puntos)
   `calcularPrecioFinal(500, 5, VERDADERO)`

   Documente cada paso con los valores actuales de las variables.

b) ¿Cual es el **resultado** de la llamada a la funcion? (2 Puntos)

### Tarea 4.3 (6 Puntos)

SunTravel GmbH utiliza una base de datos relacional para sus datos de clientes.

Se da el siguiente diagrama ER simplificado:

```
[CLIENTE] 1 ──────── n [RESERVA] n ──────── m [VIAJE]
   │                     │                    │
   ├─ NumCliente (PK)   ├─ NumReserva (PK)   ├─ NumViaje (PK)
   ├─ Nombre            ├─ NumCliente (FK)   ├─ Destino
   ├─ Email             ├─ Fecha             ├─ Precio
   └─ Telefono          └─ PrecioTotal       └─ Duracion
```

a) Explique el significado de las cardinalidades **1:n** y **n:m** en el contexto de este diagrama. (4 Puntos)

b) Explique que significa **redundancia** en una base de datos y por que debe evitarse. (2 Puntos)

---

## Tarea 5: Economia y Servicio (16 Puntos)

### Tarea 5.1 (8 Puntos)

Para el nuevo software en la nube, se deben comparar dos proveedores. Debe realizar un **analisis de utilidad**.

| Criterio | Peso | Proveedor A (Puntos 1-5) | Proveedor B (Puntos 1-5) |
|----------|------|--------------------------|--------------------------|
| Funcionalidad | 30% | 4 | 5 |
| Facilidad de Uso | 25% | 5 | 3 |
| Calidad del Soporte | 20% | 3 | 4 |
| Precio | 15% | 4 | 3 |
| Proteccion de Datos (RGPD) | 10% | 5 | 5 |

a) Realice el analisis de utilidad y determine el **valor de utilidad total** para ambos proveedores. (6 Puntos)

b) ¿Que proveedor recomendaria y por que? Nombre **un** aspecto adicional que deberia considerarse en la decision. (2 Puntos)

### Tarea 5.2 (8 Puntos)

Despues de la introduccion del nuevo software, un empleado reporta: "¡El programa es extremadamente lento y no puedo trabajar correctamente!"

a) ¿Es esto un **Incidente** o una **Solicitud de Servicio**? Justifique su respuesta. (2 Puntos)

b) Analice la declaracion del empleado utilizando el **Modelo de los Cuatro Lados** de Schulz von Thun. ¿Que podria querer decir en los cuatro niveles? (4 Puntos)

c) Formule una **respuesta desescaladora** a la queja del empleado. (2 Puntos)

---

## Fin del Examen

**¡Revise sus respuestas!**

Nota: Las soluciones a esta simulacion se pueden encontrar en [10-03-01-solution-travel-agency.md](../10-03-solutions/10-03-01-solution-travel-agency.md)
